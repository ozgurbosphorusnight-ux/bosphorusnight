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

// 2. HTML üretimi
run('node scripts/build-home.js');
run('node scripts/build-pages.js');
run('node scripts/build-seo.js');

// 3. Static asset'leri dist/'e kopyala (absolute /assets/... paths için)
console.log('\n📦 Static asset kopyalama...');
for (const dir of ['js', 'css', 'assets']) {
  const src = path.join(ROOT, dir);
  if (fs.existsSync(src)) {
    cpdir(src, path.join(DIST, dir));
    console.log(`  ✓ ${dir}/`);
  }
}

// 4. Root seviyesinde tek dosyalar
for (const f of ['site.webmanifest', 'yandex_745ed021116f94b1.html']) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(DIST, f));
    console.log(`  ✓ ${f}`);
  }
}

// 5. English'i dist/en/ → dist/ root'a taşı (production'da EN root'ta olacak)
const enDir = path.join(DIST, 'en');
if (fs.existsSync(enDir)) {
  for (const f of fs.readdirSync(enDir)) {
    fs.renameSync(path.join(enDir, f), path.join(DIST, f));
  }
  fs.rmdirSync(enDir);
  console.log(`  ✓ dist/en/* → dist/ root`);
}

const elapsed = ((Date.now() - start) / 1000).toFixed(1);
console.log(`\n✅ Build tamam (${elapsed}s)`);
console.log(`   Output: ${DIST}`);
console.log(`   Yayınlanmaya hazır.`);
