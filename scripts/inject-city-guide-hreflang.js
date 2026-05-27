#!/usr/bin/env node
/**
 * Refresh hreflang for city-guide pages.
 * EN baseline at /city-guide/ has 18 hreflang (17 langs + x-default).
 * Source per-lang files at src/city-guide-i18n/{lang}/ already have 33 (32 + x-default).
 * This script normalizes EN root files to the same 33-hreflang block.
 *
 * Also re-syncs per-lang files in case any drift exists.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC_ROOT = path.join(ROOT, 'src', 'city-guide-i18n');
const EN_ROOT = path.join(ROOT, 'city-guide');
const SITE_URL = 'https://www.bosphorusnight.com';

const POSTS = [
  { slug: 'best-photo-spots-bosphorus' },
  { slug: 'bosphorus-bridges-guide' },
  { slug: 'halal-istanbul-guide' },
  { slug: 'istanbul-3-day-itinerary' },
  { slug: 'romantic-istanbul-guide' },
  { slug: 'things-to-do-istanbul-at-night' },
  { slug: 'index', isIndex: true },
];

function fileExists(p) {
  try { return fs.statSync(p).isFile(); } catch { return false; }
}

function urlFor(lang, slug, isIndex) {
  const tail = isIndex ? 'city-guide/' : `city-guide/${slug}`;
  return lang === 'en' ? `${SITE_URL}/${tail}` : `${SITE_URL}/${lang}/${tail}`;
}

function buildBlock(availableLangs, slug, isIndex) {
  const lines = [];
  for (const lang of availableLangs) {
    lines.push(`  <link rel="alternate" hreflang="${lang}" href="${urlFor(lang, slug, isIndex)}">`);
  }
  if (availableLangs.includes('en')) {
    lines.push(`  <link rel="alternate" hreflang="x-default" href="${urlFor('en', slug, isIndex)}">`);
  }
  return lines.join('\n');
}

function replaceHreflang(filePath, block) {
  let html = fs.readFileSync(filePath, 'utf8');
  const hreflangLineRe = /[ \t]*<link\s+rel=["']alternate["']\s+hreflang=["'][^"']+["']\s+href=["'][^"']+["'][^>]*>[ \t]*\r?\n?/gi;
  html = html.replace(hreflangLineRe, '');
  const canonicalRe = /([ \t]*<link\s+rel=["']canonical["'][^>]*>)/i;
  if (!canonicalRe.test(html)) return { status: 'skip', reason: 'no canonical' };
  html = html.replace(canonicalRe, `${block}\n$1`);
  fs.writeFileSync(filePath, html, 'utf8');
  return { status: 'ok' };
}

const allLangs = ['en', ...fs.readdirSync(SRC_ROOT).filter(d => fs.statSync(path.join(SRC_ROOT, d)).isDirectory())];

let injected = 0;
for (const post of POSTS) {
  const fileName = post.isIndex ? 'index.html' : `${post.slug}.html`;
  const availableLangs = [];
  const filesByLang = {};
  for (const lang of allLangs) {
    const f = lang === 'en'
      ? path.join(EN_ROOT, fileName)
      : path.join(SRC_ROOT, lang, fileName);
    if (fileExists(f)) {
      availableLangs.push(lang);
      filesByLang[lang] = f;
    }
  }
  if (!availableLangs.length) {
    console.log(`  - ${post.slug}: no files`);
    continue;
  }
  const block = buildBlock(availableLangs, post.slug, post.isIndex);
  console.log(`\n📝 ${post.isIndex ? 'city-guide/' : post.slug} — ${availableLangs.length} langs`);
  for (const lang of availableLangs) {
    const r = replaceHreflang(filesByLang[lang], block);
    if (r.status === 'ok') { injected++; }
    console.log(`   ${r.status === 'ok' ? '✓' : '-'} ${lang}${r.reason ? ': ' + r.reason : ''}`);
  }
}
console.log(`\n✅ Injected ${injected} files.`);
