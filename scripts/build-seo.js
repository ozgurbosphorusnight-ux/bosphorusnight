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

// Blog posts (English only — no multi-lingual for now).
const BLOG_PAGES = [
  '/blog/',
  '/blog/best-bosphorus-dinner-cruise-istanbul',
  '/blog/bosphorus-sunset-cruise-guide',
  '/blog/bosphorus-cruise-with-kids-family',
  '/blog/istanbul-cruise-tonight-last-minute',
  '/blog/things-to-know-istanbul-boat-tour'
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

function blogBlock(pathPart) {
  const today = new Date().toISOString().split('T')[0];
  const loc = SITE_URL + pathPart;
  const priority = pathPart === '/blog/' ? '0.7' : '0.6';
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function buildSitemap() {
  const homeBlocks = urlBlock('');
  const landingBlocks = SLUGS.map(urlBlock).join('\n');
  const blogBlocks = BLOG_PAGES.map(blogBlock).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${homeBlocks}
${landingBlocks}
${blogBlocks}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml);
  const urls = (homeBlocks.match(/<url>/g) || []).length
    + (landingBlocks.match(/<url>/g) || []).length
    + (blogBlocks.match(/<url>/g) || []).length;
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
