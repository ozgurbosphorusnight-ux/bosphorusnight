#!/usr/bin/env node
/**
 * Build 2 Kabataş blog posts (how-to-reach, what-to-do-near) in all available languages.
 * Reads: templates/blog-kabatas.html + data/blog-kabatas-i18n.json
 * Writes:
 *   - EN: dist/blog/{slug}.html
 *   - Others: dist/{lang}/blog/{slug}.html
 * Skips languages where content is null.
 *
 * Usage: node scripts/build-blog-kabatas.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TEMPLATE_PATH = path.join(ROOT, 'templates', 'blog-kabatas.html');
const I18N_PATH = path.join(ROOT, 'data', 'blog-kabatas-i18n.json');
const OUT_ROOT = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.bosphorusnight.com';
const TODAY = new Date().toISOString().split('T')[0];

function resolveKey(obj, dottedKey) {
  return dottedKey.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

function buildBodyHtml(bodyArray) {
  return bodyArray.map(line => '        ' + line).join('\n');
}

function buildRelatedCardsHtml(cards, otherPostUrl) {
  return cards.map(card => {
    const url = card.url === '_OTHER_POST_' ? otherPostUrl : card.url;
    return `          <a href="${url}" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${card.title}</h4>
            <p class="text-white/40 text-xs">${card.desc}</p>
          </a>`;
  }).join('\n');
}

function buildHreflangBlock(post, otherPostKey, allPosts) {
  // Hreflang for THIS post across all languages that have content.
  const lines = [];
  for (const [code, data] of Object.entries(post.languages)) {
    if (!data.content) continue;
    const url = data.url_prefix
      ? `${SITE_URL}/${data.url_prefix}blog/${data.slug}`
      : `${SITE_URL}/blog/${data.slug}`;
    lines.push(`  <link rel="alternate" hreflang="${code}" href="${url}">`);
  }
  // x-default → EN if EN has content, else first available
  const en = post.languages.en;
  if (en && en.content) {
    lines.push(`  <link rel="alternate" hreflang="x-default" href="${SITE_URL}/blog/${en.slug}">`);
  } else {
    const firstWithContent = Object.values(post.languages).find(l => l.content);
    if (firstWithContent) {
      const url = firstWithContent.url_prefix
        ? `${SITE_URL}/${firstWithContent.url_prefix}blog/${firstWithContent.slug}`
        : `${SITE_URL}/blog/${firstWithContent.slug}`;
      lines.push(`  <link rel="alternate" hreflang="x-default" href="${url}">`);
    }
  }
  return lines.join('\n');
}

function renderTemplate(template, langData, otherPostUrl, hreflangBlock, heroImage) {
  const c = langData.content;

  // First handle nested {{x.y}} placeholders
  let html = template.replace(/\{\{([\w]+\.[\w]+)\}\}/g, (match, key) => {
    if (key === 'meta.title') return c.meta.title;
    if (key === 'meta.description') return c.meta.description;
    if (key === 'meta.og_title') return c.meta.og_title;
    if (key === 'meta.og_description') return c.meta.og_description;
    if (key === 'nav.blog') return c.nav.blog;
    if (key === 'nav.home') return c.nav.home;
    if (key === 'cta.title') return c.cta.title;
    if (key === 'cta.body') return c.cta.body;
    if (key === 'cta.button') return c.cta.button;
    if (key === 'related.heading') return c.related.heading;
    if (key === 'footer.rights') return c.footer.rights;
    if (key === 'wa.message_encoded') return c.wa.message_encoded;
    if (key === 'wa.aria') return c.wa.aria;
    if (key === 'wa.label') return c.wa.label;
    return match;
  });

  // Single-segment placeholders
  html = html.replace(/\{\{([\w]+)\}\}/g, (match, key) => {
    if (key === 'lang') return langData.lang;
    if (key === 'dir') return langData.dir;
    if (key === 'slug') return langData.slug;
    if (key === 'url_prefix') return langData.url_prefix;
    if (key === 'og_locale') return langData.og_locale;
    if (key === 'hreflang') return hreflangBlock;
    if (key === 'today') return TODAY;
    if (key === 'date') return c.date;
    if (key === 'h1') return c.h1;
    if (key === 'hero_image') return heroImage;
    if (key === 'hero_alt') return c.hero_alt;
    if (key === 'back_to_blog') return c.back_to_blog;
    if (key === 'body_html') return buildBodyHtml(c.body_html);
    if (key === 'related_cards_html') return buildRelatedCardsHtml(c.related.cards, otherPostUrl);
    return match;
  });

  // _OTHER_POST_ placeholder (used inside body_html inline links) → cross-link URL
  // Done LAST so it catches body_html content after it's injected.
  html = html.replace(/_OTHER_POST_/g, otherPostUrl);

  return html;
}

function main() {
  console.log('📝 Build Kabataş blog posts…');

  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
  const posts = i18n.posts;
  const heroImages = i18n._meta.hero_images || {};

  let built = 0;
  let skipped = 0;

  for (const [postKey, post] of Object.entries(posts)) {
    const heroImage = heroImages[postKey] || 'exterior-pier-sunset.webp';
    const hreflangBlock = buildHreflangBlock(post);

    for (const [code, data] of Object.entries(post.languages)) {
      if (!data.content) {
        console.log(`  ⏭  ${postKey} / ${code} — content missing, skipping`);
        skipped++;
        continue;
      }

      // Resolve "other post" URL for this language (for cross-link in related cards).
      const otherPostKey = postKey === 'how-to-reach' ? 'what-to-do-near' : 'how-to-reach';
      const otherPostLang = posts[otherPostKey].languages[code];
      let otherPostUrl = '/blog/';
      if (otherPostLang) {
        otherPostUrl = otherPostLang.url_prefix
          ? `/${otherPostLang.url_prefix}blog/${otherPostLang.slug}.html`
          : `/blog/${otherPostLang.slug}.html`;
      }

      // Render
      const html = renderTemplate(template, data, otherPostUrl, hreflangBlock, heroImage);

      // Output path
      const outDir = data.url_prefix
        ? path.join(OUT_ROOT, data.url_prefix.replace(/\/$/, ''), 'blog')
        : path.join(OUT_ROOT, 'blog');
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }

      const outFile = path.join(outDir, `${data.slug}.html`);
      fs.writeFileSync(outFile, html);

      const rel = path.relative(ROOT, outFile);
      console.log(`  ✅ ${postKey} / ${code} → ${rel}`);
      built++;
    }
  }

  console.log(`\n🎉 Done. Built ${built} pages, skipped ${skipped}.`);
}

main();
