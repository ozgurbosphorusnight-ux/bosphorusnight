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

// All guide loc URLs (regardless of whether content currently exists — covers cleanup).
const allGuideLocs = new Set();
for (const [code, data] of Object.entries(langs)) {
  const loc = data.url_prefix
    ? `${SITE_URL}/${data.url_prefix}${data.slug}`
    : `${SITE_URL}/${data.slug}`;
  allGuideLocs.add(loc);
}

// Strip any existing guide <url> blocks so we can re-insert with current hreflang set.
const beforeCount = (sitemap.match(/<url>/g) || []).length;
sitemap = sitemap.replace(/  <url>\s*\n\s*<loc>([^<]+)<\/loc>[\s\S]*?<\/url>\n?/g, (match, loc) => {
  return allGuideLocs.has(loc) ? '' : match;
});
const afterStripCount = (sitemap.match(/<url>/g) || []).length;
const removed = beforeCount - afterStripCount;

if (urlBlocks.length === 0) {
  fs.writeFileSync(SITEMAP, sitemap);
  console.log(`⚠️  No languages with content. Removed ${removed} stale guide URL(s).`);
  process.exit(0);
}

const injection = '\n' + urlBlocks.join('\n') + '\n';
sitemap = sitemap.replace('</urlset>', `${injection}</urlset>`);

fs.writeFileSync(SITEMAP, sitemap);

const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`✅ Sitemap updated. Removed ${removed} stale guide URL(s), added ${urlBlocks.length} fresh.`);
console.log(`   Total URLs now: ${urlCount}`);
