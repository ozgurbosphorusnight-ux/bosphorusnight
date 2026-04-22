#!/usr/bin/env node
/**
 * Image optimization — generates WebP versions of all JPG/PNG assets.
 * Skips files where .webp already exists and is newer than the source.
 * Output written next to the source (e.g. boat.jpg → boat.webp). The copy
 * step in build-all.js then ships both into dist/.
 *
 * HTML <img> tags can later be upgraded to <picture> for opt-in WebP delivery.
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const ASSETS = path.join(ROOT, 'assets');

// Quality targets. WebP at 80 is visually indistinguishable from JPG 85.
const WEBP_QUALITY = 80;

// Skip logos and icons — they're usually small PNGs with transparency we want to keep
// as-is. Only photos benefit meaningfully from WebP conversion.
function shouldSkip(filePath) {
  const rel = path.relative(ASSETS, filePath).replace(/\\/g, '/');
  if (rel.startsWith('data/')) return true;   // logos, favicons
  return false;
}

function isSource(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ext === '.jpg' || ext === '.jpeg' || ext === '.png';
}

async function convert(sourcePath) {
  const webpPath = sourcePath.replace(/\.(jpe?g|png)$/i, '.webp');
  // Skip if up-to-date
  if (fs.existsSync(webpPath)) {
    const srcStat = fs.statSync(sourcePath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) return { skipped: true };
  }
  await sharp(sourcePath)
    .webp({ quality: WEBP_QUALITY })
    .toFile(webpPath);
  const srcKb = fs.statSync(sourcePath).size / 1024;
  const webpKb = fs.statSync(webpPath).size / 1024;
  const saved = ((1 - webpKb / srcKb) * 100).toFixed(0);
  return { sourcePath, webpPath, srcKb, webpKb, saved };
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...walk(full));
    else if (isSource(full) && !shouldSkip(full)) files.push(full);
  }
  return files;
}

async function main() {
  console.log('🖼️  Image WebP build başlıyor\n');
  const start = Date.now();
  const sources = walk(ASSETS);
  console.log(`  ${sources.length} kaynak görsel bulundu`);

  let converted = 0, skipped = 0, srcTotal = 0, webpTotal = 0;
  for (const src of sources) {
    try {
      const result = await convert(src);
      if (result.skipped) {
        skipped++;
      } else {
        converted++;
        srcTotal += result.srcKb;
        webpTotal += result.webpKb;
      }
    } catch (err) {
      console.error(`  ✗ ${path.relative(ROOT, src)}: ${err.message}`);
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  const overallSaved = srcTotal > 0 ? ((1 - webpTotal / srcTotal) * 100).toFixed(0) : 0;
  console.log(`\n✅ WebP build tamam (${elapsed}s)`);
  console.log(`   Dönüştürülen: ${converted}  ·  Atlanan (güncel): ${skipped}`);
  if (converted > 0) {
    console.log(`   JPG/PNG: ${srcTotal.toFixed(0)} KB → WebP: ${webpTotal.toFixed(0)} KB  (-${overallSaved}%)`);
  }
}

main().catch((err) => {
  console.error('❌ Image build hatası:', err);
  process.exit(1);
});
