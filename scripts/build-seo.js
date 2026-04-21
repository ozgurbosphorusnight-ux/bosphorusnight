#!/usr/bin/env node
/**
 * Generates sitemap.xml + robots.txt for the multi-lingual site.
 * Outputs to dist/ alongside the HTML build.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist');
const SITE_URL = 'https://bosphorusnight.com';

const LANGUAGES = ['en', 'tr', 'de', 'es', 'ru', 'ar', 'fa', 'fr', 'it', 'zh', 'id', 'ms', 'pl', 'bg', 'ro'];

const SLUGS = [
  'bosphorus-dinner-cruise',
  'bosphorus-with-kids',
  'romantic-bosphorus-cruise',
  'halal-bosphorus-cruise',
  'bosphorus-trip',
  'istanbul-boat-tour',
  'istanbul-night-tour',
  'private-bosphorus-cruise',
  'bosphorus-cruise-tickets',
  'last-minute-bosphorus',
  'bosphorus-for-couples',
  'bosphorus-vip',
  'dinner-cruise-istanbul',
  'bosphorus-sightseeing',
  'istanbul-cruise-price',
  'bosphorus-sunset-cruise',
  'bosphorus-night-tour'
];

function urlFor(lang, slug) {
  // English at root; others prefixed.
  const prefix = lang === 'en' ? '' : '/' + lang;
  if (!slug) return SITE_URL + (prefix || '/');
  return SITE_URL + prefix + '/' + slug;
}

// Builds one <url> block with hreflang alternates.
function urlBlock(slug) {
  const today = new Date().toISOString().split('T')[0];
  const alternates = LANGUAGES
    .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${urlFor(lang, slug)}" />`)
    .join('\n');
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en', slug)}" />`;

  // One <url> per language (Google prefers explicit per-lang entries).
  return LANGUAGES.map((lang) => `  <url>
    <loc>${urlFor(lang, slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang === 'en' ? '1.0' : '0.9'}</priority>
${alternates}
${xDefault}
  </url>`).join('\n');
}

function buildSitemap() {
  const homeBlocks = urlBlock('');
  const landingBlocks = SLUGS.map(urlBlock).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeBlocks}
${landingBlocks}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml);
  const urls = (homeBlocks.match(/<url>/g) || []).length + (landingBlocks.match(/<url>/g) || []).length;
  console.log(`  ✓ dist/sitemap.xml (${urls} URL)`);
}

function buildRobots() {
  const txt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /cruises/

Sitemap: ${SITE_URL}/sitemap.xml
`;
  fs.writeFileSync(path.join(OUT, 'robots.txt'), txt);
  console.log('  ✓ dist/robots.txt');
}

function main() {
  console.log('🔎 SEO build\n');
  buildSitemap();
  buildRobots();
  console.log('\n✅ SEO files generated.');
}

main();
