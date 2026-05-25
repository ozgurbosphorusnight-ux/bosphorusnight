#!/usr/bin/env node
/**
 * Append guide page URLs to dist/sitemap.xml.
 * One <url> block per language with content, including hreflang alternates
 * to all OTHER languages that also have content (no broken links).
 *
 * Idempotent: skips if guide URLs are already present.
 *
 * Usage: node scripts/append-guide-to-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'dist', 'sitemap.xml');
const I18N_PATH = path.join(ROOT, 'data', 'guide-i18n.json');
const SITE_URL = 'https://www.bosphorusnight.com';
const TODAY = new Date().toISOString().split('T')[0];

const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
const langs = i18n.languages;

function urlFor(lang) {
  const d = langs[lang];
  if (!d || !d.content) return null;
  return d.url_prefix ? `${SITE_URL}/${d.url_prefix}${d.slug}` : `${SITE_URL}/${d.slug}`;
}

function buildHreflangBlock() {
  const lines = [];
  for (const code of Object.keys(langs)) {
    const url = urlFor(code);
    if (url) lines.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${url}" />`);
  }
  const enUrl = urlFor('en');
  if (enUrl) {
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`);
  } else {
    const first = Object.keys(langs).map(urlFor).find(Boolean);
    if (first) lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${first}" />`);
  }
  return lines.join('\n');
}

const hreflangBlock = buildHreflangBlock();

const urlBlocks = [];
for (const [code, data] of Object.entries(langs)) {
  if (!data.content) continue;
  const loc = urlFor(code);
  urlBlocks.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
${hreflangBlock}
  </url>`);
}

if (urlBlocks.length === 0) {
  console.log('⚠️  No languages with content. Nothing to add.');
  process.exit(0);
}

let sitemap = fs.readFileSync(SITEMAP, 'utf8');

// Idempotency: detect any guide slug already present
const sampleSlug = langs.tr && langs.tr.slug ? langs.tr.slug : 'bosphorus-cruise-guide';
if (sitemap.includes(`/${sampleSlug}<`) || sitemap.includes('/bosphorus-cruise-guide<')) {
  console.log('⚠️  Sitemap already contains guide URLs. Skipping to avoid duplicates.');
  process.exit(0);
}

const injection = '\n' + urlBlocks.join('\n') + '\n';
sitemap = sitemap.replace('</urlset>', `${injection}</urlset>`);

fs.writeFileSync(SITEMAP, sitemap);

const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`✅ Sitemap updated. Added ${urlBlocks.length} URL(s).`);
console.log(`   Total URLs now: ${urlCount}`);
