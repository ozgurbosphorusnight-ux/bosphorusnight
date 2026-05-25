#!/usr/bin/env node
/**
 * Full production build.
 * Runs all builders, copies static assets, flattens English to dist root.
 * Output: `dist/` — ready to serve as site root (via Vercel outputDirectory).
 * Usage: node scripts/build-all.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function cpdir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(src)) {
    const s = path.join(src, f);
    const d = path.join(dst, f);
    if (fs.statSync(s).isDirectory()) cpdir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: ROOT });
}

const start = Date.now();
console.log('🚀 Full build başlıyor\n');

// 1. Temiz dist
rmrf(DIST);
fs.mkdirSync(DIST, { recursive: true });

// 2. Görselleri optimize et (JPG/PNG → WebP, sadece değişenler)
run('node scripts/build-images.js');

// 3. HTML üretimi
run('node scripts/build-home.js');
run('node scripts/build-pages.js');
run('node scripts/build-fleet.js'); // "Our Boat" / "Teknemiz" — 32 dilde Tosunpaşa sayfası
// build-seo.js DELIBERATELY moved below — it scans dist/ via existsSync, so it
// must run AFTER blog/city-guide copy steps to see all real URLs.

// 3. Static asset'leri dist/'e kopyala (absolute /assets/... paths için)
console.log('\n📦 Static asset kopyalama...');
for (const dir of ['js', 'css', 'assets', 'blog', 'city-guide']) {
  const src = path.join(ROOT, dir);
  if (fs.existsSync(src)) {
    cpdir(src, path.join(DIST, dir));
    console.log(`  ✓ ${dir}/`);
  }
}

// 3b. City Guide multi-dil — 31 dilin çevirileri (src/city-guide-i18n/{lang}/* → dist/{lang}/city-guide/)
// Sprint L2 (May 2026): +12 European langs — pt, nl, el, cs, hu, sv, da, no, fi, sk, sl, lv.
// Build skips missing dirs via existsSync — list defines the upper bound, content rolls in over time.
const CITY_GUIDE_LANGS = ['ar', 'bg', 'cs', 'da', 'de', 'el', 'es', 'fa', 'fi', 'fr', 'hi', 'hu', 'id', 'it', 'ja', 'ko', 'lv', 'ms', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'tr', 'uk', 'ur', 'zh'];
console.log('\n🌐 City Guide multi-dil...');
for (const lang of CITY_GUIDE_LANGS) {
  const src = path.join(ROOT, 'src', 'city-guide-i18n', lang);
  const dst = path.join(DIST, lang, 'city-guide');
  if (fs.existsSync(src)) {
    cpdir(src, dst);
    console.log(`  ✓ ${lang}/city-guide/`);
  }
}

// 3c. Blog multi-dil — sadece çevirisi olan diller (src/blog-i18n/{lang}/* → dist/{lang}/blog/)
// Sprint L1: hi, ja, ko, ur, uk. PROMPT 5: id, ms, pl, bg, ro. PROMPT 4: fa, fr, it, zh. PROMPT 3: tr, de, es, ru, ar (19 dil × 6 sayfa).
// Sprint L2 (May 2026): +12 European langs — pt, nl, el, cs, hu, sv, da, no, fi, sk, sl, lv. Build skips via existsSync.
const BLOG_LANGS = ['hi', 'ja', 'ko', 'ur', 'uk', 'id', 'ms', 'pl', 'bg', 'ro', 'fa', 'fr', 'it', 'zh', 'tr', 'de', 'es', 'ru', 'ar', 'pt', 'nl', 'el', 'cs', 'hu', 'sv', 'da', 'no', 'fi', 'sk', 'sl', 'lv'];
console.log('\n📝 Blog multi-dil...');
for (const lang of BLOG_LANGS) {
  const src = path.join(ROOT, 'src', 'blog-i18n', lang);
  const dst = path.join(DIST, lang, 'blog');
  if (fs.existsSync(src)) {
    cpdir(src, dst);
    console.log(`  ✓ ${lang}/blog/`);
  }
}

// 4. Tailwind CSS build-time extraction → dist/css/tailwind.css
// Replaces cdn.tailwindcss.com runtime JIT (350 KB JS) with ~45 KB static CSS.
run('node scripts/build-tailwind.js');

// 5. Root seviyesinde tek dosyalar (IndexNow key dosyası dahil)
for (const f of ['site.webmanifest', 'llms.txt', 'privacy.html', 'terms.html', 'adres.html', 'b94dc1d001fd47909cdbe7434f1a0be6.txt']) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST, f));
    console.log(`  ✓ ${f}`);
  }
}

// 6. English'i dist/en/ → dist/ root'a taşı (production'da EN root'ta olacak)
const enDir = path.join(DIST, 'en');
if (fs.existsSync(enDir)) {
  for (const f of fs.readdirSync(enDir)) {
    fs.renameSync(path.join(enDir, f), path.join(DIST, f));
  }
  fs.rmdirSync(enDir);
  console.log(`  ✓ dist/en/* → dist/ root`);
}

// 6b. Inject "Our Boat" / "Teknemiz" nav link into all 32 index.html files
// Runs AFTER EN flatten so dist/index.html (EN) is in its final location.
run('node scripts/inject-fleet-nav.js');

// 6c. SEO sitemap — runs AFTER EN flatten + blog/city-guide copy so
// landingExists/blogExists/cityGuideExists see real EN root files
// (dist/bosphorus-dinner-cruise.html, etc.). Earlier this ran BEFORE flatten
// and EN URLs were silently dropped from sitemap.
run('node scripts/build-seo.js');

// 6d. Append 32 fleet (Our Boat) URLs to sitemap.
// Runs AFTER build-seo.js which generates the base sitemap.
run('node scripts/append-fleet-to-sitemap.js');

// 6b. Tailwind CDN script bloğunu tüm dist HTML'lerinden strip et,
// yerine /css/tailwind.css link tag'i koy. (Kaynak HTML'ler değişmez —
// lokal preview için CDN orada kalıyor.)
run('node scripts/_strip-tailwind-cdn.js');

const elapsed = ((Date.now() - start) / 1000).toFixed(1);
console.log(`\n✅ Build tamam (${elapsed}s)`);
console.log(`   Output: ${DIST}`);
console.log(`   Yayınlanmaya hazır.`);

// 7. IndexNow auto-ping: Bing/Yandex/Naver/Seznam'a sitemap URL'leri bildir
// Fail-soft: IndexNow hata verirse build başarılı sayılır (verification süreci normal).
// SKIP_INDEXNOW=1 env var ile atlanabilir.
if (process.env.SKIP_INDEXNOW !== '1') {
  console.log('\n🔔 IndexNow ping...');
  try {
    execSync('node scripts/notify-indexnow.js', { stdio: 'inherit', cwd: ROOT });
  } catch (err) {
    console.log('   (IndexNow ping başarısız — verification beklenebilir, build OK)');
  }
}
