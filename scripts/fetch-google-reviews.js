#!/usr/bin/env node
/**
 * Google Places'ten yorum snapshot'ı tazeler → assets/data/google-reviews.json.
 * Hetzner cron'u çalıştırır (scripts/cron-refresh-reviews.sh, Pzt+Per 04:30).
 * Build script'leri (build-home/build-pages) bu dosyayı OKUR — API çağrısı yok,
 * o yüzden taze veri ancak bu script + git push + Vercel rebuild ile siteye iner.
 *
 * Güvenlik ağı: Places Details en fazla 5 "en alakalı" yorum döndürür. 4'ten az
 * kullanılabilir yorum (metinli, 4★+) gelirse mevcut kart listesi KORUNUR —
 * rating/reviewCount/fetchedAt yine de güncellenir (576 sayfadaki stat token'lar
 * bayat kalmasın diye asıl önemli olan bu ikisi).
 */
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'assets', 'data', 'google-reviews.json');
const key = process.env.GOOGLE_API_KEY;
if (!key) {
  console.error('HATA: GOOGLE_API_KEY env yok (cron wrapper AI .env\'den export eder)');
  process.exit(1);
}

const cur = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const url =
  'https://maps.googleapis.com/maps/api/place/details/json' +
  `?place_id=${cur.placeId}&fields=rating,user_ratings_total,reviews&key=${key}`;

(async () => {
  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== 'OK') {
    console.error(`HATA: Places ${data.status} ${data.error_message || ''}`);
    process.exit(1);
  }
  const r = data.result;
  cur.fetchedAt = new Date().toISOString().slice(0, 10);
  if (r.rating) cur.rating = String(r.rating);
  if (r.user_ratings_total) cur.reviewCount = r.user_ratings_total;

  const fresh = (r.reviews || [])
    .filter((x) => x.text && x.text.trim().length >= 30 && (x.rating || 0) >= 4)
    .map((x) => ({
      name: x.author_name,
      photo: x.profile_photo_url || '',
      rating: x.rating,
      text: x.text.trim(),
      lang: x.language || 'en',
      date: new Date(x.time * 1000).toISOString().slice(0, 10),
    }));
  if (fresh.length >= 4) {
    cur.reviews = fresh;
  } else {
    console.log(`Kart listesi korundu (API'den sadece ${fresh.length} kullanılabilir yorum)`);
  }

  fs.writeFileSync(FILE, JSON.stringify(cur, null, 2) + '\n');
  console.log(`OK: ${cur.rating}★ / ${cur.reviewCount} yorum / ${cur.reviews.length} kart — fetchedAt ${cur.fetchedAt}`);
})();
