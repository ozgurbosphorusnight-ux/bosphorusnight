#!/usr/bin/env node
/**
 * Adds the 2 Kabataş blog post cards (how-to-reach + what-to-do-near) to the
 * per-language blog index pages that are missing them.
 *
 * Root cause (2026-06-02): the Kabataş posts were published in 32 languages and
 * added to the sitemap, but the blog index cards were only added to EN + TR.
 * The other 30 language index pages never linked to them → orphan pages →
 * Yandex flagged them "Low-value or low-demand". This wires them back into the
 * navigable blog hub of each language.
 *
 * Source of card text: data/blog-kabatas-i18n.json (same source build-blog-kabatas.js
 * uses, so card text matches the live post pages — no brand-localization drift).
 *
 * Input/Output: src/blog-i18n/{lang}/index.html (committed, copied to dist by build-all.js)
 * Idempotent: skips a language if the localized how-to-reach slug is already present.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA = require(path.join(ROOT, 'data', 'blog-kabatas-i18n.json'));

// EN + TR already have the cards (in ./blog/index.html and src... handled separately).
const LANGS = [
  'de', 'es', 'fr', 'it', 'ru', 'ar', 'fa', 'zh', 'ja', 'ko', 'hi', 'ur',
  'id', 'ms', 'pl', 'bg', 'ro', 'uk', 'pt', 'nl', 'cs', 'hu', 'sv', 'da',
  'no', 'fi', 'sk', 'el', 'sl', 'lv',
];

const IMG = {
  'how-to-reach': '/assets/images/tosunpasa/exterior-pier-sunset.webp',
  'what-to-do-near': '/assets/images/tosunpasa/exterior-tosunpasa-wide.webp',
};

// Display order in the grid (matches EN): how-to-reach first, then what-to-do-near.
const ORDER = ['how-to-reach', 'what-to-do-near'];

const GRID_ANCHOR = '<div class="grid grid-cols-1 md:grid-cols-2 gap-6">';

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Pull the concise card title/desc for `postKey` from the SIBLING post's
// related "_OTHER_POST_" card (already localized & card-sized). Fall back to
// the post's own meta if not present.
function cardText(postKey, lang) {
  const siblingKey = postKey === 'how-to-reach' ? 'what-to-do-near' : 'how-to-reach';
  const sibling = DATA.posts[siblingKey].languages[lang];
  const self = DATA.posts[postKey].languages[lang];
  let title, desc;
  const other = sibling?.content?.related?.cards?.find((c) => c.url === '_OTHER_POST_');
  if (other) {
    title = other.title;
    desc = other.desc;
  } else {
    title = self.content?.meta?.og_title || self.content?.h1;
    desc = self.content?.meta?.og_description || self.content?.meta?.description;
  }
  return { title, desc };
}

function readMoreLabel(html) {
  const m = html.match(/<span class="inline-block mt-4 text-\[#c9a84c\] text-sm font-medium">([^<]*)<\/span>/);
  return m ? m[1] : 'Read More →';
}

function buildCard(postKey, lang, readMore) {
  const ln = DATA.posts[postKey].languages[lang];
  const href = `/${lang}/blog/${ln.slug}`;
  const date = ln.content?.date || '';
  const alt = ln.content?.hero_alt || '';
  const { title, desc } = cardText(postKey, lang);
  return `
      <a href="${esc(href)}" class="group bg-[#152240] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-300">
        <div class="aspect-[16/9] overflow-hidden">
          <img src="${IMG[postKey]}" alt="${esc(alt)}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-6">
          <time class="text-white/30 text-xs uppercase tracking-wider">${esc(date)}</time>
          <h2 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mt-2 mb-2 group-hover:text-[#c9a84c] transition-colors">${esc(title)}</h2>
          <p class="text-white/50 text-sm line-clamp-2">${esc(desc)}</p>
          <span class="inline-block mt-4 text-[#c9a84c] text-sm font-medium">${esc(readMore)}</span>
        </div>
      </a>
`;
}

let done = 0, skipped = 0, failed = 0;
const warnings = [];

for (const lang of LANGS) {
  const file = path.join(ROOT, 'src', 'blog-i18n', lang, 'index.html');
  if (!fs.existsSync(file)) {
    console.log(`  ✗ ${lang}: index.html yok`);
    failed++;
    continue;
  }
  let html = fs.readFileSync(file, 'utf8');

  const reachSlug = DATA.posts['how-to-reach'].languages[lang]?.slug;
  if (!reachSlug) {
    console.log(`  ✗ ${lang}: JSON'da slug yok`);
    failed++;
    continue;
  }
  if (html.includes(`/${lang}/blog/${reachSlug}`)) {
    console.log(`  ⊙ ${lang}: zaten var, atlandı`);
    skipped++;
    continue;
  }
  if (!html.includes(GRID_ANCHOR)) {
    console.log(`  ✗ ${lang}: grid anchor bulunamadı`);
    failed++;
    continue;
  }

  const readMore = readMoreLabel(html);
  const cards = ORDER.map((pk) => buildCard(pk, lang, readMore)).join('');

  // Brand landmine guard (hi/ja/ko/ur/uk): warn if Latin "Bosphorus Night" leaked into card text.
  if (['hi', 'ja', 'ko', 'ur', 'uk'].includes(lang) && /Bosphorus Night/.test(cards)) {
    warnings.push(`${lang}: card metninde Latin "Bosphorus Night" tespit edildi — kontrol et`);
  }

  // Insert the 2 cards right after the grid opening (newest first, matches EN).
  html = html.replace(GRID_ANCHOR, GRID_ANCHOR + cards);
  fs.writeFileSync(file, html, 'utf8');
  console.log(`  ✓ ${lang}: 2 card eklendi`);
  done++;
}

console.log(`\nÖZET: ${done} dil güncellendi, ${skipped} atlandı, ${failed} hata`);
if (warnings.length) {
  console.log('\n⚠️  UYARILAR:');
  warnings.forEach((w) => console.log('   - ' + w));
}
