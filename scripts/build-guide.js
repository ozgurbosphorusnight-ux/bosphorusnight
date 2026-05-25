#!/usr/bin/env node
/**
 * Build "Buyer's Guide" page in all available languages.
 * Reads: templates/guide.html + data/guide-i18n.json
 * Writes: dist/{url_prefix}{slug}.html for each lang where content is non-null.
 * Skips languages with content: null.
 *
 * Usage: node scripts/build-guide.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'guide.html');
const I18N_PATH = path.join(ROOT, 'data', 'guide-i18n.json');
const OUT_ROOT = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.bosphorusnight.com';
const TODAY = new Date().toISOString().split('T')[0];

function resolveKey(obj, dottedKey) {
  return dottedKey.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

function renderTemplate(template, langData, hreflangBlock, ourBoatSlug) {
  return template.replace(/\{\{([\w.]+)\}\}/g, (match, key) => {
    if (key === 'lang') return langData.lang;
    if (key === 'dir') return langData.dir;
    if (key === 'slug') return langData.slug;
    if (key === 'url_prefix') return langData.url_prefix;
    if (key === 'og_locale') return langData.og_locale;
    if (key === 'hreflang') return hreflangBlock;
    if (key === 'our_boat_slug') return ourBoatSlug;
    if (key === 'today') return TODAY;
    if (key.startsWith('content.')) {
      const value = resolveKey(langData.content, key.replace('content.', ''));
      if (value === undefined) {
        console.warn(`  ⚠️ Missing key: ${key} for lang ${langData.lang}`);
        return match;
      }
      return value;
    }
    return match;
  });
}

function buildHreflangBlock(allLangs) {
  const lines = [];
  // Only include languages that have content (avoid broken-link hreflangs).
  for (const [code, data] of Object.entries(allLangs)) {
    if (!data.content) continue;
    const url = data.url_prefix
      ? `${SITE_URL}/${data.url_prefix}${data.slug}`
      : `${SITE_URL}/${data.slug}`;
    lines.push(`  <link rel="alternate" hreflang="${code}" href="${url}">`);
  }
  // x-default → EN if EN has content, else first available
  const en = allLangs.en;
  if (en && en.content) {
    lines.push(`  <link rel="alternate" hreflang="x-default" href="${SITE_URL}/${en.slug}">`);
  } else {
    const firstWithContent = Object.values(allLangs).find(l => l.content);
    if (firstWithContent) {
      const url = firstWithContent.url_prefix
        ? `${SITE_URL}/${firstWithContent.url_prefix}${firstWithContent.slug}`
        : `${SITE_URL}/${firstWithContent.slug}`;
      lines.push(`  <link rel="alternate" hreflang="x-default" href="${url}">`);
    }
  }
  return lines.join('\n');
}

function main() {
  console.log('📖 Build guide page…');

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
  const langs = i18n.languages;
  const ourBoatSlugs = i18n.our_boat_slugs || {};

  const hreflangBlock = buildHreflangBlock(langs);

  let built = 0;
  let skipped = 0;

  for (const [code, data] of Object.entries(langs)) {
    if (!data.content) {
      console.log(`  ⏭  ${code} — content missing, skipping`);
      skipped++;
      continue;
    }

    const ourBoatSlug = ourBoatSlugs[code] || 'our-boat';
    const html = renderTemplate(template, data, hreflangBlock, ourBoatSlug);

    const outDir = data.url_prefix
      ? path.join(OUT_ROOT, data.url_prefix.replace(/\/$/, ''))
      : OUT_ROOT;
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    const outFile = path.join(outDir, `${data.slug}.html`);
    fs.writeFileSync(outFile, html);

    const rel = path.relative(ROOT, outFile);
    console.log(`  ✅ ${code} → ${rel}`);
    built++;
  }

  console.log(`\n🎉 Done. Built ${built} languages, skipped ${skipped} (missing content).`);
}

main();
