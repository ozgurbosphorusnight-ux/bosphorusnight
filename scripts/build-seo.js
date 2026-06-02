#!/usr/bin/env node
/**
 * Generates sitemap.xml + robots.txt for the multi-lingual site.
 * Outputs to dist/ alongside the HTML build.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.bosphorusnight.com';

// Sprint L1: 5 yeni dil eklendi (uk/hi/ur/ja/ko). build-pages.js + build-home.js
// bu diller için statik sayfa üretiyor; sitemap'ta listelenmesi gerek.
// Sprint L2 (May 2026): +12 European langs — pt, nl, el, cs, hu, sv, da, no, fi, sk, sl, lv.
const LANGUAGES = ['en', 'tr', 'de', 'es', 'ru', 'ar', 'fa', 'fr', 'it', 'zh', 'id', 'ms', 'pl', 'bg', 'ro', 'uk', 'hi', 'ur', 'ja', 'ko', 'pt', 'nl', 'el', 'cs', 'hu', 'sv', 'da', 'no', 'fi', 'sk', 'sl', 'lv'];

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

// Blog — EN root + 19 dil. PROMPT 3'te tr/de/es/ru/ar eklendi (20 dil toplam).
// Sprint L2: +12 European langs.
const BLOG_LANGUAGES = ['en', 'hi', 'ja', 'ko', 'ur', 'uk', 'id', 'ms', 'pl', 'bg', 'ro', 'fa', 'fr', 'it', 'zh', 'tr', 'de', 'es', 'ru', 'ar', 'pt', 'nl', 'el', 'cs', 'hu', 'sv', 'da', 'no', 'fi', 'sk', 'sl', 'lv'];

const BLOG_SLUGS = [
  '', // hub (trailing slash)
  'best-bosphorus-dinner-cruise-istanbul',
  'bosphorus-sunset-cruise-guide',
  'bosphorus-cruise-with-kids-family',
  'istanbul-cruise-tonight-last-minute',
  'things-to-know-istanbul-boat-tour',
  'best-time-bosphorus-cruise'
];

// EN-only slug listesi (19 dil çevirisi yapılana kadar buraya konur)
// Şu an boş — tüm slug'lar 19 dilde mevcut.
const BLOG_SLUGS_EN_ONLY = [];

// City Guide — 20 dilde (EN + 19 çeviri: ar/bg/de/es/fa/fr/hi/id/it/ja/ko/ms/pl/ro/ru/tr/uk/ur/zh)
// Sprint L2: +12 European langs.
const CITY_GUIDE_LANGUAGES = ['en', 'tr', 'de', 'es', 'ru', 'ar', 'fa', 'fr', 'it', 'zh', 'id', 'ms', 'pl', 'bg', 'ro', 'hi', 'ur', 'ja', 'ko', 'uk', 'pt', 'nl', 'el', 'cs', 'hu', 'sv', 'da', 'no', 'fi', 'sk', 'sl', 'lv'];

const CITY_GUIDE_SLUGS = [
  '', // hub (trailing slash)
  'istanbul-3-day-itinerary',
  'romantic-istanbul-guide',
  'best-photo-spots-bosphorus',
  'things-to-do-istanbul-at-night',
  'halal-istanbul-guide',
  'bosphorus-bridges-guide'
];

function urlFor(lang, slug) {
  // English at root; others prefixed.
  const prefix = lang === 'en' ? '' : '/' + lang;
  if (!slug) return SITE_URL + (prefix || '/');
  return SITE_URL + prefix + '/' + slug;
}

// Filesystem reality check — only emit URLs whose HTML actually exists in dist/.
// Prevents Sprint L2 partial state from publishing dead URLs (e.g. lang declared
// in LANGUAGES array but build-pages.js / build-all.js skipped it).
function landingExists(lang, slug) {
  const langDir = lang === 'en' ? OUT : path.join(OUT, lang);
  if (!slug) return fs.existsSync(path.join(langDir, 'index.html'));
  return fs.existsSync(path.join(langDir, slug + '.html'));
}
function blogExists(lang, slug) {
  const base = lang === 'en' ? path.join(OUT, 'blog') : path.join(OUT, lang, 'blog');
  if (!slug) return fs.existsSync(path.join(base, 'index.html'));
  return fs.existsSync(path.join(base, slug + '.html'))
      || fs.existsSync(path.join(base, slug, 'index.html'));
}
function cityGuideExists(lang, slug) {
  const base = lang === 'en' ? path.join(OUT, 'city-guide') : path.join(OUT, lang, 'city-guide');
  if (!slug) return fs.existsSync(path.join(base, 'index.html'));
  return fs.existsSync(path.join(base, slug + '.html'))
      || fs.existsSync(path.join(base, slug, 'index.html'));
}

// Builds one <url> block with hreflang alternates.
// Only emits <url> for langs whose HTML actually exists in dist/.
// hreflang alternates are also filtered to existing pages, otherwise Google
// considers the entire <url> entry inconsistent.
function urlBlock(slug) {
  const today = new Date().toISOString().split('T')[0];
  const presentLangs = LANGUAGES.filter((lang) => landingExists(lang, slug));
  const alternates = presentLangs
    .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${urlFor(lang, slug)}" />`)
    .join('\n');
  const xDefault = landingExists('en', slug)
    ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en', slug)}" />`
    : '';

  return presentLangs.map((lang) => `  <url>
    <loc>${urlFor(lang, slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang === 'en' ? '1.0' : '0.9'}</priority>
${alternates}
${xDefault}
  </url>`).join('\n');
}

function blogUrlFor(lang, slug) {
  const prefix = lang === 'en' ? '' : '/' + lang;
  // Hub URL has no trailing slash (vercel.json trailingSlash:false). Posts: /blog/<slug>.
  if (!slug) return SITE_URL + prefix + '/blog';
  return SITE_URL + prefix + '/blog/' + slug;
}

function blogUrlBlock(slug) {
  const today = new Date().toISOString().split('T')[0];
  const presentLangs = BLOG_LANGUAGES.filter((lang) => blogExists(lang, slug));
  const alternates = presentLangs
    .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${blogUrlFor(lang, slug)}" />`)
    .join('\n');
  const xDefault = blogExists('en', slug)
    ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${blogUrlFor('en', slug)}" />`
    : '';
  const hubBoost = slug === '' ? 0.1 : 0;

  return presentLangs.map((lang) => `  <url>
    <loc>${blogUrlFor(lang, slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${(lang === 'en' ? 0.7 : 0.6) + hubBoost}</priority>
${alternates}
${xDefault}
  </url>`).join('\n');
}

// EN-only blog slug için: sadece tek URL, alternate yok, x-default = kendisi
function blogUrlBlockEnOnly(slug) {
  const today = new Date().toISOString().split('T')[0];
  const url = blogUrlFor('en', slug);
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${url}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />
  </url>`;
}

function cityGuideUrlFor(lang, slug) {
  const prefix = lang === 'en' ? '' : '/' + lang;
  // Hub URL has no trailing slash (vercel.json trailingSlash:false). Posts: /city-guide/<slug>.
  if (!slug) return SITE_URL + prefix + '/city-guide';
  return SITE_URL + prefix + '/city-guide/' + slug;
}

function cityGuideUrlBlock(slug) {
  const today = new Date().toISOString().split('T')[0];
  const presentLangs = CITY_GUIDE_LANGUAGES.filter((lang) => cityGuideExists(lang, slug));
  const alternates = presentLangs
    .map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${cityGuideUrlFor(lang, slug)}" />`)
    .join('\n');
  const xDefault = cityGuideExists('en', slug)
    ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${cityGuideUrlFor('en', slug)}" />`
    : '';
  const hubBoost = slug === '' ? 0.1 : 0;

  return presentLangs.map((lang) => `  <url>
    <loc>${cityGuideUrlFor(lang, slug)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${(lang === 'en' ? 0.8 : 0.7) + hubBoost}</priority>
${alternates}
${xDefault}
  </url>`).join('\n');
}

function buildSitemap() {
  const homeBlocks = urlBlock('');
  const landingBlocks = SLUGS.map(urlBlock).join('\n');
  const blogBlocks = BLOG_SLUGS.map(blogUrlBlock).join('\n');
  const blogEnOnlyBlocks = BLOG_SLUGS_EN_ONLY.map(blogUrlBlockEnOnly).join('\n');
  const cityGuideBlocks = CITY_GUIDE_SLUGS.map(cityGuideUrlBlock).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeBlocks}
${landingBlocks}
${blogBlocks}
${blogEnOnlyBlocks}
${cityGuideBlocks}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml);
  const urls = (homeBlocks.match(/<url>/g) || []).length
    + (landingBlocks.match(/<url>/g) || []).length
    + (blogBlocks.match(/<url>/g) || []).length
    + (blogEnOnlyBlocks.match(/<url>/g) || []).length
    + (cityGuideBlocks.match(/<url>/g) || []).length;
  console.log(`  ✓ dist/sitemap.xml (${urls} URL)`);
}

function buildRobots() {
  // Private paths blocked for every crawler.
  const DISALLOW = [
    '/api/',
    '/panel/',
    '/cruises/',
    '/_next/',
    '/tickets/'
  ];

  // AI bots explicitly welcomed — same private-path rules.
  // Explicit blocks signal "you're allowed" to bots that default to opt-in.
  const AI_BOTS = [
    'GPTBot',              // OpenAI training crawler
    'ChatGPT-User',        // OpenAI on-demand fetch
    'OAI-SearchBot',       // OpenAI SearchGPT
    'ClaudeBot',           // Anthropic crawler
    'Claude-Web',          // Anthropic on-demand
    'anthropic-ai',        // Anthropic alt UA
    'PerplexityBot',       // Perplexity crawler
    'Perplexity-User',     // Perplexity on-demand
    'Google-Extended',     // Google Bard/Gemini training
    'CCBot',               // Common Crawl (most LLM training sets)
    'Bytespider',          // ByteDance / TikTok / Doubao
    'Applebot-Extended',   // Apple Intelligence
    'cohere-ai',           // Cohere
    'Amazonbot',           // Amazon
    'DuckAssistBot',       // DuckDuckGo AI
    'Meta-ExternalAgent',  // Meta AI training
    'Meta-ExternalFetcher',// Meta AI on-demand
    'YandexAdditional',    // Yandex AI (Alice)
    'PetalBot'             // Huawei Petal Search
  ];

  const disallowLines = DISALLOW.map((p) => `Disallow: ${p}`).join('\n');

  const defaultBlock = `User-agent: *
Allow: /
${disallowLines}`;

  const aiBlocks = AI_BOTS.map((bot) => `User-agent: ${bot}
Allow: /
${disallowLines}`).join('\n\n');

  const txt = `# Bosphorus Night — robots.txt
# All search engines and AI bots are welcome.
# Only private paths (/api, /panel, /tickets, Next.js internals) are blocked.

${defaultBlock}

${aiBlocks}

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
