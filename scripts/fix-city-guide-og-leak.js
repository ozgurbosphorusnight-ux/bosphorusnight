#!/usr/bin/env node
/**
 * Fixes leaked "50>" / "51>" artifacts in src/city-guide-i18n/{lang}/index.html.
 *
 * Background: during multi-lingual translation batch, Read-tool line-number
 * prefix ("50→<meta og:url>", "51→<meta og:image>") was mis-transferred as
 * literal "50>" and "51>" text. 19 language files affected.
 *
 * Fix: replace those two lines with proper og:url + og:image meta tags.
 * og:url is per-language (from canonical link); og:image is the shared default.
 */

const fs = require('fs');
const path = require('path');

const DIRS = [
  path.join(__dirname, '..', 'src', 'city-guide-i18n'),
  path.join(__dirname, '..', 'src', 'blog-i18n'),
];
const DEFAULT_OG_IMAGE = 'https://www.bosphorusnight.com/assets/data/og-image.jpg';

// Walk all .html files under each DIR/{lang}/
const files = [];
for (const DIR of DIRS) {
  if (!fs.existsSync(DIR)) continue;
  const langs = fs.readdirSync(DIR).filter((d) => fs.statSync(path.join(DIR, d)).isDirectory());
  for (const lang of langs) {
    const langDir = path.join(DIR, lang);
    for (const entry of fs.readdirSync(langDir)) {
      if (entry.endsWith('.html')) files.push(path.join(langDir, entry));
    }
  }
}

let fixed = 0;
let clean = 0;

for (const file of files) {
  const lang = path.basename(path.dirname(file));
  const name = path.basename(file);

  let html = fs.readFileSync(file, 'utf8');
  if (!/^\s*\d{1,3}>\s*\r?\n\s*\d{1,3}>\s*$/m.test(html)) {
    clean++;
    continue;
  }

  // Derive og:url from canonical link in same file.
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (!canonical) {
    console.warn(`  ⚠ ${lang}/${name}: canonical link bulunamadı, skip`);
    continue;
  }
  const ogUrl = canonical[1];

  const replacement = `  <meta property="og:url" content="${ogUrl}">
  <meta property="og:image" content="${DEFAULT_OG_IMAGE}">`;

  // Replace the two leaked lines (with their leading whitespace) as one block.
  // Any two consecutive line-number leak lines (e.g. 50>+51> or 51>+52>).
  const next = html.replace(/^\s*\d{1,3}>\s*\r?\n\s*\d{1,3}>\s*$/m, replacement);
  if (next === html) {
    console.warn(`  ⚠ ${lang}/${name}: pattern eşleşmedi (manuel kontrol)`);
    continue;
  }

  fs.writeFileSync(file, next);
  console.log(`  ✓ ${lang}/${name}`);
  fixed++;
}

console.log(`\n${fixed} dosya düzeltildi, ${clean} zaten temizdi.`);
