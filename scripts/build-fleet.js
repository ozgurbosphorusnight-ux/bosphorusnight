#!/usr/bin/env node
/**
 * Build "Our Boat" (Tosunpaşa) page in all available languages.
 * Reads: templates/fleet.html + data/fleet-i18n.json
 * Writes: dist/{url_prefix}{slug}.html for each lang where content is non-null.
 * Skips languages with content: null.
 *
 * Usage: node scripts/build-fleet.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'fleet.html');
const I18N_PATH = path.join(ROOT, 'data', 'fleet-i18n.json');
const OUT_ROOT = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.bosphorusnight.com';

function resolveKey(obj, dottedKey) {
  return dottedKey.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

function renderTemplate(template, langData, hreflangBlock) {
  return template.replace(/\{\{([\w.]+)\}\}/g, (match, key) => {
    if (key === 'lang') return langData.lang;
    if (key === 'dir') return langData.dir;
    if (key === 'slug') return langData.slug;
    if (key === 'url_prefix') return langData.url_prefix;
    if (key === 'og_locale') return langData.og_locale;
    if (key === 'hreflang') return hreflangBlock;
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
  for (const [code, data] of Object.entries(allLangs)) {
    const url = data.url_prefix
      ? `${SITE_URL}/${data.url_prefix}${data.slug}`
      : `${SITE_URL}/${data.slug}`;
    lines.push(`  <link rel="alternate" hreflang="${code}" href="${url}">`);
  }
  // x-default → EN
  const en = allLangs.en;
  if (en) {
    lines.push(`  <link rel="alternate" hreflang="x-default" href="${SITE_URL}/${en.slug}">`);
  }
  return lines.join('\n');
}

function main() {
  console.log('🚢 Build fleet page…');

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
  const langs = i18n.languages;

  const hreflangBlock = buildHreflangBlock(langs);

  let built = 0;
  let skipped = 0;

  for (const [code, data] of Object.entries(langs)) {
    if (!data.content) {
      console.log(`  ⏭  ${code} — content missing, skipping`);
      skipped++;
      continue;
    }

    // Render template (hreflang injected inside renderTemplate)
    const html = renderTemplate(template, data, hreflangBlock);

    // Output path
    const outDir = data.url_prefix
      ? path.join(OUT_ROOT, data.url_prefix.replace(/\/$/, ''))
      : OUT_ROOT;
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // File name: {slug}.html
    const outFile = path.join(outDir, `${data.slug}.html`);
    fs.writeFileSync(outFile, html);

    const rel = path.relative(ROOT, outFile);
    console.log(`  ✅ ${code} → ${rel}`);
    built++;
  }

  console.log(`\n🎉 Done. Built ${built} languages, skipped ${skipped} (missing content).`);
}

main();
