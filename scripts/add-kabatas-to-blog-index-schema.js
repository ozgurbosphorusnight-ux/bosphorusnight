#!/usr/bin/env node
/**
 * Adds the 2 Kabataş posts to the Blog schema's "blogPost" array on each
 * language's blog index page, so the JSON-LD matches the visible cards.
 *
 * Found 2026-06-02: the Kabataş cards were added to the visible grid (30 langs)
 * but the Blog/blogPost JSON-LD list still showed only the original 5–6 posts.
 * This syncs the schema across all 32 languages (en + tr + 30).
 *
 * Idempotent: skips a language whose schema already lists the how-to-reach post.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = require(path.join(ROOT, 'data', 'blog-kabatas-i18n.json'));
const SITE = 'https://www.bosphorusnight.com';
const DATE = '2026-05-26T00:00:00+03:00';
const ORDER = ['how-to-reach', 'what-to-do-near'];

// All langs that have a Kabataş card on their blog index.
const LANGS = [
  'en', 'tr', 'de', 'es', 'fr', 'it', 'ru', 'ar', 'fa', 'zh', 'ja', 'ko', 'hi', 'ur',
  'id', 'ms', 'pl', 'bg', 'ro', 'uk', 'pt', 'nl', 'cs', 'hu', 'sv', 'da',
  'no', 'fi', 'sk', 'el', 'sl', 'lv',
];

function fileFor(lang) {
  return lang === 'en'
    ? path.join(ROOT, 'blog', 'index.html')
    : path.join(ROOT, 'src', 'blog-i18n', lang, 'index.html');
}

// Headline = the sibling post's "_OTHER_POST_" related card title (same text as
// the visible card h2). Falls back to the post's own meta title.
function headline(postKey, lang) {
  const sibKey = postKey === 'how-to-reach' ? 'what-to-do-near' : 'how-to-reach';
  const other = DATA.posts[sibKey].languages[lang]?.content?.related?.cards?.find((c) => c.url === '_OTHER_POST_');
  if (other?.title) return other.title;
  const self = DATA.posts[postKey].languages[lang]?.content;
  return self?.meta?.og_title || self?.h1 || '';
}

function entryFor(postKey, lang) {
  const ln = DATA.posts[postKey].languages[lang];
  const prefix = lang === 'en' ? '' : `${lang}/`;
  const url = `${SITE}/${prefix}blog/${ln.slug}`;
  return `      { "@type": "BlogPosting", "headline": ${JSON.stringify(headline(postKey, lang))}, "url": ${JSON.stringify(url)}, "datePublished": "${DATE}" }`;
}

let done = 0, skipped = 0, failed = 0;
for (const lang of LANGS) {
  const file = fileFor(lang);
  if (!fs.existsSync(file)) { console.log(`  ✗ ${lang}: dosya yok`); failed++; continue; }
  let html = fs.readFileSync(file, 'utf8');

  const reachSlug = DATA.posts['how-to-reach'].languages[lang]?.slug;
  if (!reachSlug) { console.log(`  ✗ ${lang}: slug yok`); failed++; continue; }

  // Idempotent: schema already has it? (slug followed by datePublished = schema entry, not card href)
  if (new RegExp(`/blog/${reachSlug}",\\s*"datePublished"`).test(html)) {
    console.log(`  ⊙ ${lang}: schema'da zaten var`); skipped++; continue;
  }
  if (!html.includes('"blogPost": [')) { console.log(`  ✗ ${lang}: blogPost dizisi yok`); failed++; continue; }

  const entries = ORDER.map((pk) => entryFor(pk, lang)).join(',\n');
  html = html.replace('"blogPost": [', `"blogPost": [\n${entries},`);
  fs.writeFileSync(file, html, 'utf8');
  console.log(`  ✓ ${lang}: 2 BlogPosting schema'ya eklendi`);
  done++;
}
console.log(`\nÖZET: ${done} dil güncellendi, ${skipped} atlandı, ${failed} hata`);
