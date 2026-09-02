import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

/**
 * Pinterest OAuth dönüş kapısı (3 Eyl 2026) — Google'daki callback.js deseninin
 * Pinterest v5 karşılığı. App ID/secret Supabase settings'te durur
 * (pinterest_app_id / pinterest_app_secret) — Vercel env eklemeye gerek yok.
 * Başarıda access + refresh token settings'e yazılır; refresh token ~1 yıl,
 * access token ~30 gün (yenileme AI/panel tarafındaki kullanım anında yapılır).
 */
export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).send(`Pinterest OAuth hatası: ${error}. <a href="https://panel.bosphorusnight.com">Geri dön</a>`);
  }
  if (!code) {
    return res.status(400).send('Kod bulunamadı — bu sayfa Pinterest izin onayından sonra otomatik açılır. <a href="https://panel.bosphorusnight.com">Geri dön</a>');
  }

  try {
    const { data: rows } = await supabase
      .from('settings')
      .select('key, value')
      .in('key', ['pinterest_app_id', 'pinterest_app_secret']);
    const cfg = Object.fromEntries((rows ?? []).map((r) => [r.key, r.value]));
    if (!cfg.pinterest_app_id || !cfg.pinterest_app_secret) {
      return res.status(500).send('Pinterest app bilgileri settings tablosunda yok (pinterest_app_id / pinterest_app_secret).');
    }

    const basic = Buffer.from(`${cfg.pinterest_app_id}:${cfg.pinterest_app_secret}`).toString('base64');
    const tokenRes = await fetch('https://api.pinterest.com/v5/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${basic}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'https://bosphorusnight.com/api/oauth/pinterest-callback',
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || tokenData.error || !tokenData.access_token) {
      return res.status(400).send(`Token hatası: ${tokenData.error_description ?? tokenData.message ?? JSON.stringify(tokenData).slice(0, 200)}. <a href="https://panel.bosphorusnight.com">Geri dön</a>`);
    }

    const now = new Date().toISOString();
    await supabase.from('settings').upsert(
      [
        { key: 'pinterest_access_token', value: tokenData.access_token, updated_at: now },
        { key: 'pinterest_refresh_token', value: tokenData.refresh_token ?? '', updated_at: now },
      ],
      { onConflict: 'key' },
    );

    return res.send(`
      <html><body style="background:#0b1120;color:white;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
        <div style="text-align:center;">
          <h1 style="color:#c9a84c;">✓ Pinterest Bağlandı!</h1>
          <p>Token kaydedildi — pano ve pin yönetimi hazır.</p>
          <a href="https://panel.bosphorusnight.com" style="color:#c9a84c;">Admin Paneline Dön</a>
        </div>
      </body></html>
    `);
  } catch (err) {
    return res.status(500).send(`Hata: ${err.message}. <a href="https://panel.bosphorusnight.com">Geri dön</a>`);
  }
}
