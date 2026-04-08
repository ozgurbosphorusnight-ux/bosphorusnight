import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).send(`OAuth hatası: ${error}. <a href="/panel/admin.html">Geri dön</a>`);
  }

  if (!code) {
    return res.status(400).send('Kod bulunamadı. <a href="/panel/admin.html">Geri dön</a>');
  }

  try {
    // Code'u token'a çevir
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_ADS_CLIENT_ID,
        client_secret: process.env.GOOGLE_ADS_CLIENT_SECRET,
        redirect_uri: 'https://bosphorusnight.com/api/oauth/callback',
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenRes.json();

    if (tokenData.error) {
      return res.status(400).send(`Token hatası: ${tokenData.error_description}. <a href="/panel/admin.html">Geri dön</a>`);
    }

    // Refresh token'ı Supabase'e kaydet
    await supabase.from('settings').upsert({
      key: 'google_ads_refresh_token',
      value: tokenData.refresh_token,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'key' });

    // Access token'ı da kaydet (geçici)
    await supabase.from('settings').upsert({
      key: 'google_ads_access_token',
      value: tokenData.access_token,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'key' });

    return res.send(`
      <html><body style="background:#0b1120;color:white;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
        <div style="text-align:center;">
          <h1 style="color:#c9a84c;">✓ Google Ads Bağlandı!</h1>
          <p>Token başarıyla kaydedildi.</p>
          <a href="/panel/admin.html" style="color:#c9a84c;">Admin Paneline Dön</a>
        </div>
      </body></html>
    `);
  } catch (err) {
    return res.status(500).send(`Hata: ${err.message}. <a href="/panel/admin.html">Geri dön</a>`);
  }
}
