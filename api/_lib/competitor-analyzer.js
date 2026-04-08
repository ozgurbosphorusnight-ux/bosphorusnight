import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';
import { scanCompetitorSite } from './gemini.js';

const claude = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

// Tüm rakipleri tara
export async function scanAllCompetitors() {
  const { data: competitors } = await supabase
    .from('competitors')
    .select('*')
    .eq('active', true);

  if (!competitors?.length) return [];

  const results = [];

  for (let i = 0; i < competitors.length; i++) {
    const comp = competitors[i];
    // Rate limit: 5 saniye bekle (ilk hariç)
    if (i > 0) await new Promise(r => setTimeout(r, 15000));
    try {
      console.log(`Scanning ${comp.name}... (${i + 1}/${competitors.length})`);
      const scanData = await scanCompetitorSite(comp.url, comp.name);

      // Tarama sonucunu kaydet
      const { data: scan } = await supabase
        .from('competitor_scans')
        .insert({
          competitor_id: comp.id,
          raw_data: scanData,
          packages: scanData.packages || null,
          price_min: scanData.price_min,
          price_max: scanData.price_max,
          currency: scanData.currency || 'EUR',
          has_whatsapp: scanData.has_whatsapp,
          has_transfer: scanData.has_transfer,
          has_live_music: scanData.has_live_music,
          has_dinner: scanData.has_dinner,
          phone_numbers: scanData.phone_numbers,
          special_offers: scanData.special_offers,
        })
        .select()
        .single();

      // Fiyat değişikliği kontrol et
      await checkPriceChanges(comp.id, scanData);

      results.push({ competitor: comp.name, status: 'ok', data: scanData });
    } catch (error) {
      console.error(`Error scanning ${comp.name}:`, error);
      results.push({ competitor: comp.name, status: 'error', error: error.message });
    }
  }

  return results;
}

// Fiyat değişikliklerini tespit et
async function checkPriceChanges(competitorId, newData) {
  // Önceki taramayı al
  const { data: prevScans } = await supabase
    .from('competitor_scans')
    .select('packages, price_min, price_max')
    .eq('competitor_id', competitorId)
    .order('scanned_at', { ascending: false })
    .limit(2);

  if (!prevScans || prevScans.length < 2) return; // İlk tarama, karşılaştırma yok

  const prev = prevScans[1]; // bir önceki
  const current = newData;

  // Minimum fiyat değişimi
  if (prev.price_min && current.price_min && prev.price_min !== current.price_min) {
    const changePct = ((current.price_min - prev.price_min) / prev.price_min * 100).toFixed(2);
    await supabase.from('competitor_price_history').insert({
      competitor_id: competitorId,
      package_name: 'minimum_price',
      old_price: prev.price_min,
      new_price: current.price_min,
      currency: current.currency || 'EUR',
      change_pct: changePct,
    });
  }

  // Paket bazlı fiyat değişimleri
  if (prev.packages && current.packages) {
    for (const newPkg of (current.packages || [])) {
      const oldPkg = (prev.packages || []).find(p => p.name === newPkg.name);
      if (oldPkg && oldPkg.price !== newPkg.price) {
        const changePct = ((newPkg.price - oldPkg.price) / oldPkg.price * 100).toFixed(2);
        await supabase.from('competitor_price_history').insert({
          competitor_id: competitorId,
          package_name: newPkg.name,
          old_price: oldPkg.price,
          new_price: newPkg.price,
          currency: current.currency || 'EUR',
          change_pct: changePct,
        });
      }
    }
  }
}

// Claude ile strateji raporu üret
export async function generateReport(scanResults) {
  // Mevcut fiyat değişikliklerini al (son 7 gün)
  const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  const { data: priceChanges } = await supabase
    .from('competitor_price_history')
    .select('*, competitors(name)')
    .gte('detected_at', weekAgo);

  const prompt = `You are a competitive strategy analyst for Bosphorus Night, a dinner cruise company in Istanbul.

OUR PACKAGES:
- Standard: €35 (buffet dinner, live music, 3-hour cruise)
- Premium: €50 (better seating, welcome drink, richer menu)
- VIP: €80 (private table, unlimited drinks, hotel transfer)

COMPETITOR SCAN RESULTS:
${JSON.stringify(scanResults, null, 2)}

RECENT PRICE CHANGES:
${JSON.stringify(priceChanges || [], null, 2)}

Write a competitive analysis report in the following JSON format:

{
  "summary": "2-3 sentence executive summary",
  "market_position": "Where we stand vs competitors (cheapest, mid-range, premium)",
  "price_comparison": {
    "our_min": 35,
    "market_avg_min": number,
    "cheapest_competitor": "name",
    "cheapest_price": number
  },
  "threats": ["list of competitive threats"],
  "opportunities": ["list of opportunities we can exploit"],
  "recommendations": [
    {
      "action": "what to do",
      "reason": "why",
      "priority": "high/medium/low",
      "affects": "pricing/marketing/service/chatbot"
    }
  ],
  "competitor_rankings": [
    {
      "name": "competitor name",
      "price_range": "€X - €Y",
      "strengths": ["list"],
      "weaknesses": ["list"],
      "threat_level": "high/medium/low"
    }
  ],
  "chatbot_tips": "What our WhatsApp chatbot should emphasize based on competitive landscape",
  "ad_tips": "Suggestions for Google Ads keywords or messaging based on competitor analysis"
}

Be specific, actionable, and data-driven. Return ONLY valid JSON.`;

  try {
    const response = await claude.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = response.content[0].text;
    const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const report = JSON.parse(cleaned);

    // Raporu kaydet
    await supabase.from('competitor_reports').insert({
      report_type: 'daily',
      content: report.summary,
      recommendations: report,
    });

    return report;
  } catch (error) {
    console.error('Claude report error:', error);
    return { error: error.message };
  }
}

// Tam analiz çalıştır (tarama + rapor)
export async function runFullAnalysis() {
  console.log('Starting full competitor analysis...');

  // 1. Tüm rakipleri tara
  const scanResults = await scanAllCompetitors();

  // 2. Claude ile rapor üret
  const report = await generateReport(scanResults);

  console.log('Analysis complete.');
  return { scanResults, report };
}
