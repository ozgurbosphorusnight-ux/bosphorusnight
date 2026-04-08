import { createClient } from '@supabase/supabase-js';
import { scanCompetitorSite, analyzeTrends } from '../_lib/gemini.js';
import { generateReport } from '../_lib/competitor-analyzer.js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

function parseAdminToken(authHeader) {
  if (!authHeader?.startsWith('Bearer ')) return null;
  try {
    const decoded = Buffer.from(authHeader.slice(7), 'base64').toString();
    const [prefix, userId, role] = decoded.split(':');
    if (prefix !== 'admin') return null;
    return { userId: parseInt(userId), role };
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  const user = parseAdminToken(req.headers.authorization);
  if (!user) return res.status(401).json({ error: 'Yetkisiz' });

  if (user.role !== 'admin_sahip') {
    return res.status(403).json({ error: 'Bu sayfaya erişiminiz yok' });
  }

  // GET — raporlar ve veriler
  if (req.method === 'GET') {
    const action = req.query.action;

    if (action === 'report') {
      const { data } = await supabase
        .from('competitor_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      return res.status(200).json(data || { content: 'Henüz rapor yok. Analizi çalıştırın.' });
    }

    if (action === 'competitors') {
      const { data: competitors } = await supabase
        .from('competitors')
        .select('*')
        .eq('active', true);
      const results = [];
      for (const comp of (competitors || [])) {
        const { data: lastScan } = await supabase
          .from('competitor_scans')
          .select('*')
          .eq('competitor_id', comp.id)
          .order('scanned_at', { ascending: false })
          .limit(1)
          .single();
        results.push({ ...comp, last_scan: lastScan || null });
      }
      return res.status(200).json(results);
    }

    if (action === 'price-history') {
      const { data } = await supabase
        .from('competitor_price_history')
        .select('*, competitors(name)')
        .order('detected_at', { ascending: false })
        .limit(50);
      return res.status(200).json(data || []);
    }

    if (action === 'reports') {
      const { data } = await supabase
        .from('competitor_reports')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);
      return res.status(200).json(data || []);
    }

    // Trend analizi
    if (action === 'trends') {
      try {
        const trends = await analyzeTrends();
        return res.status(200).json(trends);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    return res.status(400).json({ error: 'action parametresi gerekli' });
  }

  // POST — tek bir rakibi tara VEYA rapor üret
  if (req.method === 'POST') {
    const { action, competitor_id } = req.body || {};

    // Tek rakip tara
    if (action === 'scan' && competitor_id) {
      try {
        const { data: comp } = await supabase
          .from('competitors')
          .select('*')
          .eq('id', competitor_id)
          .single();

        if (!comp) return res.status(404).json({ error: 'Rakip bulunamadı' });

        const scanData = await scanCompetitorSite(comp.url, comp.name);

        await supabase.from('competitor_scans').insert({
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
        });

        return res.status(200).json({ competitor: comp.name, status: 'ok', data: scanData });
      } catch (error) {
        return res.status(200).json({ competitor: 'unknown', status: 'error', error: error.message });
      }
    }

    // Rapor üret (tarama sonuçlarından)
    if (action === 'report') {
      try {
        // Son taramaları al
        const { data: competitors } = await supabase
          .from('competitors')
          .select('*')
          .eq('active', true);

        const scanResults = [];
        for (const comp of (competitors || [])) {
          const { data: lastScan } = await supabase
            .from('competitor_scans')
            .select('raw_data')
            .eq('competitor_id', comp.id)
            .order('scanned_at', { ascending: false })
            .limit(1)
            .single();

          if (lastScan) {
            scanResults.push({ competitor: comp.name, status: 'ok', data: lastScan.raw_data });
          }
        }

        const report = await generateReport(scanResults);
        return res.status(200).json(report);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }
    }

    return res.status(400).json({ error: 'action gerekli (scan veya report)' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
