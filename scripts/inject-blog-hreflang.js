#!/usr/bin/env node
/**
 * Inject hreflang links into the 6 legacy blog posts + blog index page.
 * - EN baseline lives at /blog/{slug}.html (root)
 * - Other langs live at /src/blog-i18n/{lang}/{slug}.html
 *
 * Idempotent: if a file already has any `hreflang=` tag, skip.
 * Inserts the hreflang block immediately BEFORE `<link rel="canonical"`.
 *
 * Run on SOURCE files (not dist/) so the change is permanent.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC_BLOG_ROOT = path.join(ROOT, 'src', 'blog-i18n');
const EN_BLOG = path.join(ROOT, 'blog');
const SITE_URL = 'https://www.bosphorusnight.com';

// 6 legacy posts + blog index
const POSTS = [
  { slug: 'best-bosphorus-dinner-cruise-istanbul' },
  { slug: 'best-time-bosphorus-cruise' },
  { slug: 'bosphorus-cruise-with-kids-family' },
  { slug: 'bosphorus-sunset-cruise-guide' },
  { slug: 'istanbul-cruise-tonight-last-minute' },
  { slug: 'things-to-know-istanbul-boat-tour' },
  { slug: 'index', isIndex: true }, // /blog/ (no slug in URL)
];

function fileExists(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function urlFor(lang, slug, isIndex) {
  const tail = isIndex ? 'blog/' : `blog/${slug}`;
  return lang === 'en' ? `${SITE_URL}/${tail}` : `${SITE_URL}/${lang}/${tail}`;
}

function buildHreflangBlock(availableLangs, slug, isIndex) {
  const lines = [];
  for (const lang of availableLangs) {
    lines.push(`  <link rel="alternate" hreflang="${lang}" href="${urlFor(lang, slug, isIndex)}">`);
  }
  // x-default → EN (if present)
  if (availableLangs.includes('en')) {
    lines.push(`  <link rel="alternate" hreflang="x-default" href="${urlFor('en', slug, isIndex)}">`);
  }
  return lines.join('\n');
}

function inject(filePath, block) {
  let html = fs.readFileSync(filePath, 'utf8');
  // Strip ALL existing hreflang `<link rel="alternate" hreflang=...>` lines (with surrounding whitespace/newline)
  const hreflangLineRe = /[ \t]*<link\s+rel=["']alternate["']\s+hreflang=["'][^"']+["']\s+href=["'][^"']+["'][^>]*>[ \t]*\r?\n?/gi;
  const hadOld = hreflangLineRe.test(html);
  hreflangLineRe.lastIndex = 0;
  html = html.replace(hreflangLineRe, '');

  // Insert fresh block BEFORE `<link rel="canonical"`
  const canonicalRe = /([ \t]*<link\s+rel=["']canonical["'][^>]*>)/i;
  if (!canonicalRe.test(html)) {
    return { status: 'skip', reason: 'no canonical link tag found' };
  }
  html = html.replace(canonicalRe, `${block}\n$1`);
  fs.writeFileSync(filePath, html, 'utf8');
  return { status: 'ok', reason: hadOld ? 'replaced existing hreflang' : 'added new' };
}

// Discover all language codes by scanning src/blog-i18n + EN root
const allLangs = ['en', ...fs.readdirSync(SRC_BLOG_ROOT).filter(d => fs.statSync(path.join(SRC_BLOG_ROOT, d)).isDirectory())];

let totalInjected = 0;
let totalSkipped = 0;

for (const post of POSTS) {
  const fileName = post.isIndex ? 'index.html' : `${post.slug}.html`;
  // 1. find which langs have this file
  const availableLangs = [];
  const filesByLang = {};
  for (const lang of allLangs) {
    const file = lang === 'en'
      ? path.join(EN_BLOG, fileName)
      : path.join(SRC_BLOG_ROOT, lang, fileName);
    if (fileExists(file)) {
      availableLangs.push(lang);
      filesByLang[lang] = file;
    }
  }
  if (availableLangs.length === 0) {
    console.log(`  - ${post.slug}: no files found, skip`);
    continue;
  }
  const block = buildHreflangBlock(availableLangs, post.slug, post.isIndex);
  console.log(`\n📝 ${post.isIndex ? 'blog/' : post.slug} — ${availableLangs.length} langs`);
  for (const lang of availableLangs) {
    const r = inject(filesByLang[lang], block);
    if (r.status === 'ok') {
      totalInjected++;
      console.log(`   ✓ ${lang}`);
    } else {
      totalSkipped++;
      console.log(`   - ${lang}: ${r.reason}`);
    }
  }
}

console.log(`\n✅ Injected hreflang into ${totalInjected} files, skipped ${totalSkipped}.`);
