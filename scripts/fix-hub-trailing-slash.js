#!/usr/bin/env node
/**
 * One-off migration: remove the trailing slash from blog/ and city-guide/ HUB URLs
 * (canonical, og:url, hreflang, nav) so they match the site convention — vercel.json
 * declares trailingSlash:false and the landing pages are already slash-free, while only
 * the two hubs were slash-terminated.
 *
 * Surgical & safe: the regex only matches URLs ending EXACTLY at `blog/"` or
 * `city-guide/"`. Blog POSTS (`/blog/<slug>.html"` or `/blog/<slug>"`) have content
 * after `blog/` and are never matched. Applied uniformly across the EN sources and ALL
 * committed i18n hubs (src/blog-i18n/*, src/city-guide-i18n/*) so hreflang reciprocity
 * is preserved (every variant becomes slash-free together).
 *
 * The sitemap generator (build-seo.js blogUrlFor/cityGuideUrlFor) is fixed separately.
 * Usage: node scripts/fix-hub-trailing-slash.js
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const targets = [];
for (const p of ['blog/index.html', 'city-guide/index.html']) {
  const f = path.join(ROOT, p);
  if (fs.existsSync(f)) targets.push(f);
}
for (const base of ['src/blog-i18n', 'src/city-guide-i18n']) {
  const dir = path.join(ROOT, base);
  if (!fs.existsSync(dir)) continue;
  for (const lang of fs.readdirSync(dir)) {
    const f = path.join(dir, lang, 'index.html');
    if (fs.existsSync(f)) targets.push(f);
  }
}

let changed = 0;
let total = 0;
for (const f of targets) {
  const src = fs.readFileSync(f, 'utf8');
  const hits = (src.match(/(?:blog|city-guide)\/"/g) || []).length;
  if (!hits) continue;
  const out = src.replace(/blog\/"/g, 'blog"').replace(/city-guide\/"/g, 'city-guide"');
  fs.writeFileSync(f, out);
  changed++;
  total += hits;
  console.log(`  ✓ ${path.relative(ROOT, f)} (${hits} URL)`);
}
console.log(`\n✅ ${changed} dosya guncellendi, ${total} hub URL slash'siz yapildi.`);
