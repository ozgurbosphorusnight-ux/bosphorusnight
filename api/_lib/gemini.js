// Gemini AI ile rakip site tarama
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

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

  if (response.status === 429 && retries > 0) {
    console.log(`Gemini rate limited, waiting 30s... (${retries} retries left)`);
    await new Promise(r => setTimeout(r, 30000));
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
  const prompt = `You are a competitive intelligence analyst for a Bosphorus dinner cruise company in Istanbul.

Visit and analyze this competitor's website: ${url} (${name})

Extract the following information in JSON format. Be precise with prices and package names.

{
  "packages": [
    {
      "name": "package name",
      "price": numeric_price,
      "currency": "EUR or USD or TRY",
      "inclusions": ["list", "of", "what's included"],
      "exclusions": ["list", "of", "what's not included"]
    }
  ],
  "price_min": lowest_price_numeric,
  "price_max": highest_price_numeric,
  "currency": "primary currency used",
  "has_whatsapp": true/false,
  "has_transfer": true/false,
  "has_live_music": true/false,
  "has_dinner": true/false,
  "phone_numbers": ["list of phone numbers found"],
  "special_offers": "any current promotions or discounts",
  "departure_location": "where the cruise departs from",
  "cruise_duration": "how long the cruise lasts",
  "unique_features": ["what makes them stand out"],
  "weaknesses": ["potential weak points based on site content"],
  "booking_methods": ["website", "whatsapp", "phone", "etc"],
  "languages_supported": ["en", "tr", "ar", "etc"],
  "google_ads_visible": true/false,
  "site_quality": "poor/average/good/excellent",
  "mobile_friendly": true/false
}

IMPORTANT:
- Return ONLY valid JSON, no other text
- If you can't find specific info, use null
- Prices should be numeric (no currency symbols)
- Be accurate with the data`;

  const result = await askGemini(prompt);

  // JSON parse et
  try {
    const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    return JSON.parse(cleaned);
  } catch (e) {
    console.error('Failed to parse Gemini response:', e);
    return { raw_response: result, parse_error: true };
  }
}
