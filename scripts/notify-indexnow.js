#!/usr/bin/env node
/**
 * IndexNow notifier — POST sitemap URL list to Bing/Yandex/Naver/Seznam.
 *
 * Triggered:
 * - Manually: `node scripts/notify-indexnow.js`
 * - Optionally from build-all.js as last step
 *
 * Notes:
 * - Single POST with up to 10,000 URLs is allowed by IndexNow spec.
 * - Bing/Yandex share the same network (one POST → all endpoints notified).
 * - Key file must be reachable at https://www.bosphorusnight.com/{KEY}.txt
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const HOST = 'www.bosphorusnight.com';
const KEY = 'b94dc1d001fd47909cdbe7434f1a0be6';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP = path.join(ROOT, 'dist', 'sitemap.xml');
const ENDPOINTS = [
  { name: 'Bing/Yandex (shared)', host: 'api.indexnow.org' },
  // Note: api.indexnow.org propagates to all participating engines (Bing, Yandex, Naver, Seznam, Yep)
];

function extractUrls(sitemapXml) {
  const urls = new Set();
  const locRe = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = locRe.exec(sitemapXml)) !== null) {
    const u = m[1].trim();
    if (u.startsWith(`https://${HOST}/`) || u === `https://${HOST}`) {
      urls.add(u);
    }
  }
  return Array.from(urls);
}

function postIndexNow(host, payload) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(payload);
    const req = https.request({
      host,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(body),
        'Host': host,
      },
    }, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  if (!fs.existsSync(SITEMAP)) {
    console.error(`✗ Sitemap not found: ${SITEMAP}`);
    console.error('  Run `node scripts/build-all.js` first.');
    process.exit(1);
  }

  const xml = fs.readFileSync(SITEMAP, 'utf8');
  const urls = extractUrls(xml);
  console.log(`📄 Sitemap'ten ${urls.length} URL çıkarıldı.`);

  // IndexNow spec: max 10,000 URLs per request
  const BATCH_SIZE = 10000;
  const batches = [];
  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    batches.push(urls.slice(i, i + BATCH_SIZE));
  }

  console.log(`📤 ${batches.length} batch hazırlandı (max ${BATCH_SIZE} URL/batch).\n`);

  for (const endpoint of ENDPOINTS) {
    console.log(`→ ${endpoint.name} (${endpoint.host})`);
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      const payload = {
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: batch,
      };
      try {
        const { status, body } = await postIndexNow(endpoint.host, payload);
        const ok = status >= 200 && status < 300;
        const icon = ok ? '✓' : '✗';
        console.log(`  ${icon} Batch ${i + 1}/${batches.length} → HTTP ${status}${body ? ': ' + body.slice(0, 100) : ''}`);
      } catch (err) {
        console.log(`  ✗ Batch ${i + 1}/${batches.length} → error: ${err.message}`);
      }
    }
  }

  console.log('\n✅ IndexNow notify tamamlandı.');
  console.log('   Bing/Yandex/Naver/Seznam birkaç saat içinde URL\'leri yeniden tarar.');
}

main().catch((err) => {
  console.error('FATAL:', err);
  process.exit(1);
});
