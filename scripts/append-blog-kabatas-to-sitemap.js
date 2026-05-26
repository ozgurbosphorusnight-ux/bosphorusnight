#!/usr/bin/env node
/**
 * Append Kabataş blog post URLs (2 posts × N languages with content) to dist/sitemap.xml.
 *
 * Replace mode: removes any existing Kabataş blog URLs (per data file), then re-inserts
 * fresh blocks with hreflang alternates covering all languages with content.
 *
 * Usage: node scripts/append-blog-kabatas-to-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SITEMAP = path.join(ROOT, 'dist', 'sitemap.xml');
const I18N_PATH = path.join(ROOT, 'data', 'blog-kabatas-i18n.json');
const SITE_URL = 'https://www.bosphorusnight.com';
const TODAY = new Date().toISOString().split('T')[0];

const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
const posts = i18n.posts;

function urlFor(langData) {
  return langData.url_prefix
    ? `${SITE_URL}/${langData.url_prefix}blog/${langData.slug}`
    : `${SITE_URL}/blog/${langData.slug}`;
}

function buildHreflangBlock(post) {
  const lines = [];
  for (const [code, data] of Object.entries(post.languages)) {
    if (!data.content) continue;
    lines.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${urlFor(data)}" />`);
  }
  const en = post.languages.en;
  if (en && en.content) {
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(en)}" />`);
  } else {
    const firstWithContent = Object.values(post.languages).find(l => l.content);
    if (firstWithContent) {
      lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(firstWithContent)}" />`);
    }
  }
  return lines.join('\n');
}

// Collect all possible URLs (including null-content slugs) for cleanup.
const allLocs = new Set();
for (const post of Object.values(posts)) {
  for (const data of Object.values(post.languages)) {
    allLocs.add(urlFor(data));
  }
}

// Build new <url> blocks for languages with content.
const urlBlocks = [];
for (const post of Object.values(posts)) {
  const hreflangBlock = buildHreflangBlock(post);
  for (const data of Object.values(post.languages)) {
    if (!data.content) continue;
    const loc = urlFor(data);
    urlBlocks.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
${hreflangBlock}
  </url>`);
  }
}

let sitemap = fs.readFileSync(SITEMAP, 'utf8');

// Strip any existing Kabataş blog <url> blocks.
const beforeCount = (sitemap.match(/<url>/g) || []).length;
sitemap = sitemap.replace(/  <url>\s*\n\s*<loc>([^<]+)<\/loc>[\s\S]*?<\/url>\n?/g, (match, loc) => {
  return allLocs.has(loc) ? '' : match;
});
const afterStripCount = (sitemap.match(/<url>/g) || []).length;
const removed = beforeCount - afterStripCount;

if (urlBlocks.length === 0) {
  fs.writeFileSync(SITEMAP, sitemap);
  console.log(`⚠️  No languages with content. Removed ${removed} stale Kabataş blog URL(s).`);
  process.exit(0);
}

const injection = '\n' + urlBlocks.join('\n') + '\n';
sitemap = sitemap.replace('</urlset>', `${injection}</urlset>`);

fs.writeFileSync(SITEMAP, sitemap);

const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`✅ Sitemap updated. Removed ${removed} stale Kabataş blog URL(s), added ${urlBlocks.length} fresh.`);
console.log(`   Total URLs now: ${urlCount}`);
