import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

const CLIENT_ID = process.env.GOOGLE_ADS_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_ADS_CLIENT_SECRET;
const DEVELOPER_TOKEN = process.env.GOOGLE_ADS_DEVELOPER_TOKEN;
const CUSTOMER_ID = process.env.GOOGLE_ADS_CUSTOMER_ID;
const MANAGER_ID = process.env.GOOGLE_ADS_MANAGER_ID;

// OAuth URL oluştur
export function getAuthUrl() {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: 'https://bosphorusnight.com/api/oauth/callback',
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/adwords',
    access_type: 'offline',
    prompt: 'consent',
  });
  return `https://accounts.google.com/o/oauth2/auth?${params}`;
}

// Access token al (refresh token kullanarak)
async function getAccessToken() {
  const { data: setting } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'google_ads_refresh_token')
    .single();

  if (!setting?.value) throw new Error('Google Ads bağlı değil. Önce OAuth ile bağlayın.');

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: setting.value,
      grant_type: 'refresh_token',
    }),
  });

  const data = await res.json();
  if (data.error) throw new Error(`Token yenileme hatası: ${data.error_description}`);
  return data.access_token;
}

// Google Ads API çağrısı
async function callGoogleAds(query) {
  const accessToken = await getAccessToken();

  const res = await fetch(
    `https://googleads.googleapis.com/v23/customers/${CUSTOMER_ID}/googleAds:searchStream`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'developer-token': DEVELOPER_TOKEN,
        'login-customer-id': CUSTOMER_ID,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Google Ads API hatası: ${res.status} - ${error}`);
  }

  return res.json();
}

// Kampanya performans raporu
export async function getCampaignPerformance(days = 7) {
  const query = `
    SELECT
      campaign.id,
      campaign.name,
      campaign.status,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions,
      metrics.average_cpc
    FROM campaign
    WHERE segments.date DURING LAST_${days}_DAYS
    ORDER BY metrics.cost_micros DESC
  `;

  try {
    const data = await callGoogleAds(query);
    const results = [];
    for (const batch of (data || [])) {
      for (const row of (batch.results || [])) {
        results.push({
          id: row.campaign?.id,
          name: row.campaign?.name,
          status: row.campaign?.status,
          impressions: parseInt(row.metrics?.impressions || 0),
          clicks: parseInt(row.metrics?.clicks || 0),
          cost: (parseInt(row.metrics?.costMicros || 0) / 1000000).toFixed(2),
          conversions: parseFloat(row.metrics?.conversions || 0),
          avgCpc: (parseInt(row.metrics?.averageCpc || 0) / 1000000).toFixed(2),
        });
      }
    }
    return results;
  } catch (error) {
    return { error: error.message };
  }
}

// Anahtar kelime performansı
export async function getKeywordPerformance(days = 7) {
  const query = `
    SELECT
      ad_group_criterion.keyword.text,
      ad_group_criterion.keyword.match_type,
      metrics.impressions,
      metrics.clicks,
      metrics.cost_micros,
      metrics.conversions
    FROM keyword_view
    WHERE segments.date DURING LAST_${days}_DAYS
      AND metrics.impressions > 0
    ORDER BY metrics.clicks DESC
    LIMIT 50
  `;

  try {
    const data = await callGoogleAds(query);
    const results = [];
    for (const batch of (data || [])) {
      for (const row of (batch.results || [])) {
        results.push({
          keyword: row.adGroupCriterion?.keyword?.text,
          matchType: row.adGroupCriterion?.keyword?.matchType,
          impressions: parseInt(row.metrics?.impressions || 0),
          clicks: parseInt(row.metrics?.clicks || 0),
          cost: (parseInt(row.metrics?.costMicros || 0) / 1000000).toFixed(2),
          conversions: parseFloat(row.metrics?.conversions || 0),
        });
      }
    }
    return results;
  } catch (error) {
    return { error: error.message };
  }
}

// Bağlantı durumu kontrol
export async function isConnected() {
  const { data } = await supabase
    .from('settings')
    .select('value')
    .eq('key', 'google_ads_refresh_token')
    .single();
  return !!data?.value;
}
