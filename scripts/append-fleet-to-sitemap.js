#!/usr/bin/env node
/**
 * Append 32 "Our Boat" URLs to dist/sitemap.xml.
 * One <url> block per language, each with full 32-lang hreflang alternates.
 *
 * Usage: node scripts/append-fleet-to-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'dist', 'sitemap.xml');
const I18N_PATH = path.join(ROOT, 'data', 'fleet-i18n.json');
const SITE_URL = 'https://www.bosphorusnight.com';
const TODAY = new Date().toISOString().split('T')[0];

const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
const langs = i18n.languages;

function urlFor(lang) {
  const d = langs[lang];
  if (!d) return null;
  return d.url_prefix ? `${SITE_URL}/${d.url_prefix}${d.slug}` : `${SITE_URL}/${d.slug}`;
}

function buildHreflangBlock() {
  const lines = [];
  for (const code of Object.keys(langs)) {
    const url = urlFor(code);
    if (url) lines.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${url}" />`);
  }
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en')}" />`);
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

let sitemap = fs.readFileSync(SITEMAP, 'utf8');

// Check if already injected
if (sitemap.includes('/our-boat<') || sitemap.includes('/teknemiz<')) {
  console.log('⚠️  Sitemap already contains our-boat URLs. Skipping to avoid duplicates.');
  process.exit(0);
}

const injection = '\n' + urlBlocks.join('\n') + '\n';
sitemap = sitemap.replace('</urlset>', `${injection}</urlset>`);

fs.writeFileSync(SITEMAP, sitemap);

const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`✅ Sitemap updated. Added ${urlBlocks.length} URLs.`);
console.log(`   Total URLs now: ${urlCount}`);
