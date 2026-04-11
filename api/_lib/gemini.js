// Gemini AI ile rakip site tarama
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

export async function askGemini(prompt, retries = 2) {
  const response = await fetch(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 4096,
      },
    }),
  });

  if ((response.status === 429 || response.status === 503) && retries > 0) {
    const wait = response.status === 503 ? 10000 : 30000;
    console.log(`Gemini ${response.status}, waiting ${wait/1000}s... (${retries} retries left)`);
    await new Promise(r => setTimeout(r, wait));
    return askGemini(prompt, retries - 1);
  }

  if (!response.ok) {
    const error = await response.text();
    console.error('Gemini API error:', error);
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// Rakip sitesini tara ve bilgileri çıkar
export async function scanCompetitorSite(url, name) {
  const prompt = `Sen İstanbul Boğaz cruise sektöründe rekabet analizi uzmanısın.

Bu rakip siteyi analiz et: ${url} (${name})

TÜM METİNLERİ TÜRKÇE YAZ. JSON formatında döndür:

{
  "packages": [
    {
      "name": "paket adı",
      "price": sayısal_fiyat,
      "currency": "EUR veya USD veya TRY",
      "inclusions": ["dahil olan şeyler türkçe"],
      "exclusions": ["dahil olmayan şeyler türkçe"]
    }
  ],
  "price_min": en_düşük_fiyat,
  "price_max": en_yüksek_fiyat,
  "currency": "ana para birimi",
  "has_whatsapp": true/false,
  "has_transfer": true/false,
  "has_live_music": true/false,
  "has_dinner": true/false,
  "phone_numbers": ["telefon numaraları"],
  "special_offers": "güncel kampanya veya indirimler türkçe",
  "departure_location": "kalkış noktası",
  "cruise_duration": "süre",
  "unique_features": ["öne çıkan özellikleri türkçe"],
  "weaknesses": ["zayıf yönleri türkçe"],
  "booking_methods": ["rezervasyon yöntemleri"],
  "languages_supported": ["desteklenen diller"],
  "site_quality": "zayıf/orta/iyi/mükemmel",
  "mobile_friendly": true/false,
  "estimated_google_ads": true/false,
  "estimated_ad_keywords": ["tahmini reklam kelimeleri"],
  "estimated_ad_strategy": "reklam stratejisi hakkında tahmin türkçe"
}

ÖNEMLİ:
- SADECE geçerli JSON döndür, başka metin yazma
- Bulamadığın bilgi için null kullan
- Fiyatlar sayısal olsun (para birimi simgesi olmadan)
- unique_features ve weaknesses TÜRKÇE yaz
- Paket isimleri (name) OLduğu GİBİ orijinal dilde bırak, çevirme
- inclusions ve exclusions TÜRKÇE yaz
- estimated_ad_keywords orijinal dilde bırak (hangi dilde reklam veriyorsa o dil)
- estimated_ad_strategy TÜRKÇE yaz
- Reklam bilgisi tahmin bazlı olabilir, site içeriğinden çıkar`;

  const result = await askGemini(prompt);

  try {
    return extractJSON(result);
  } catch (e) {
    console.error('Failed to parse Gemini response:', e);
    console.error('Raw response:', result?.substring(0, 500));
    return { raw_response: result, parse_error: true };
  }
}

function extractJSON(text) {
  // Markdown code block temizle
  let cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  // JSON başlangıcını bul
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');
  if (start !== -1 && end !== -1) {
    cleaned = cleaned.substring(start, end + 1);
  }
  return JSON.parse(cleaned);
}

// Google Trends ve arama kelimeleri analizi
export async function analyzeTrends() {
  const prompt = `Sen İstanbul turizm sektöründe dijital pazarlama uzmanısın.

Şu arama kelimeleri hakkında bilgi ver:
- bosphorus cruise
- istanbul dinner cruise
- bosphorus dinner cruise
- boat tour istanbul
- istanbul night cruise
- bosphorus boat tour

TÜM METİNLERİ TÜRKÇE YAZ. JSON formatında döndür:

{
  "keywords": [
    {
      "keyword": "arama kelimesi",
      "trend": "yükseliyor/düşüyor/stabil",
      "peak_months": ["en yoğun aylar"],
      "low_months": ["en düşük aylar"],
      "competition": "düşük/orta/yüksek",
      "estimated_cpc_eur": tahmini_tıklama_başı_maliyet,
      "notes": "türkçe not"
    }
  ],
  "season_summary": "sezon özeti türkçe - hangi aylar yoğun, hangi aylar düşük, ne zaman reklam artırılmalı",
  "recommended_keywords": ["önerilen ek arama kelimeleri"],
  "avoid_keywords": ["kaçınılması gereken kelimeler ve nedeni"]
}

ÖNEMLİ: SADECE geçerli JSON döndür, başka hiçbir metin yazma. Açıklama, yorum, markdown yazma. Tüm açıklamalar TÜRKÇE.`;

  const result = await askGemini(prompt);
  try {
    return extractJSON(result);
  } catch (e) {
    console.error('Failed to parse trends response:', e);
    console.error('Raw response:', result?.substring(0, 500));
    return { error: 'Parse hatası', raw: result };
  }
}
