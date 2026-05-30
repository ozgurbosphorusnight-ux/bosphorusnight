#!/usr/bin/env node
/**
 * fill-blog-chrome.js
 *
 * Root-cause fix for the "undefined" blog bug. The newer-language data files
 * (scripts/blog-i18n-data/{lang}.js) miss chrome keys that generate-blog-i18n.js
 * renders -> "undefined". Source = SAME language's already-correct best-time
 * blog HTML. We extract the real localized strings and INSERT only the MISSING
 * keys into each data file's chrome object (existing keys untouched).
 * No machine translation, no invented text.
 *
 * DRY_RUN=1 prints planned insertions and writes nothing.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const I18N = path.join(ROOT, 'src', 'blog-i18n');
const DATA = path.join(__dirname, 'blog-i18n-data');
const DRY = !!process.env.DRY_RUN;
// All 12 generator langs (pt has correct schema but still misses bookBtn for the gold CTA).
const LANGS = ['pt', 'cs', 'da', 'el', 'fi', 'hu', 'lv', 'nl', 'no', 'sk', 'sl', 'sv'];

const dec = (s) => { try { return decodeURIComponent(s); } catch { return s; } };
const clean = (s) => s ? s.replace(/\s+/g, ' ').trim() : null;
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

function extract(lang) {
  const f = path.join(I18N, lang, 'best-time-bosphorus-cruise.html');
  if (!fs.existsSync(f)) return null;
  const h = fs.readFileSync(f, 'utf8');
  const m = (re) => { const x = h.match(re); return x ? clean(x[1]) : null; };
  return {
    blog: m(new RegExp(`<a href="/${lang}/blog/"[^>]*>([^<]+)</a>`)),
    home: m(new RegExp(`<a href="/${lang}/"[^>]*hover:text-\\[#c9a84c\\][^>]*>([^<]+)</a>`)),
    copyright: m(/<p class="text-white\/30 text-sm">([^<]+)<\/p>/),
    tursab: m(/<p class="text-white\/15 text-xs mt-2">([^<]+)<\/p>/),
    floatingChat: m(/<span class="text-white text-xs font-semibold whitespace-nowrap">([^<]+)<\/span>/),
    waHelloText: (() => { const x = h.match(/id="floatingWhatsapp"[\s\S]*?text=([^"]+)"/); return x ? dec(x[1]) : null; })(),
    readyTitle: m(/<!-- CTA -->[\s\S]*?<h3[^>]*>([\s\S]*?)<\/h3>/),
    readyDesc: m(/<!-- CTA -->[\s\S]*?<h3[^>]*>[\s\S]*?<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/),
    bookBtn: (() => { const x = h.match(/href="\/[a-z]{2}\/bosphorus-dinner-cruise"[^>]*>\s*([\s\S]*?)\s*<span/); return x ? clean(x[1]) : null; })(),
    relatedTitle: m(/<!-- Related Articles -->\s*<div class="mt-16">\s*<h3[^>]*>([\s\S]*?)<\/h3>/),
    // also provide waBtn (WhatsApp label) for langs that still keep a WA button — reuse bookBtn wording if absent
  };
}

const NEED = ['blog', 'home', 'copyright', 'tursab', 'floatingChat', 'waHelloText', 'readyTitle', 'readyDesc', 'bookBtn', 'relatedTitle'];

let totalInserted = 0;
for (const lang of LANGS) {
  const ex = extract(lang);
  const file = path.join(DATA, `${lang}.js`);
  if (!ex || !fs.existsSync(file)) { console.log(`! skip ${lang} (no source/data)`); continue; }

  const existing = require(file).chrome || {};
  const missing = NEED.filter((k) => existing[k] === undefined && ex[k]);
  const nullKeys = NEED.filter((k) => !ex[k]);
  if (nullKeys.length) console.log(`  ${lang}: extraction NULL for ${nullKeys.join(',')} (skipped those)`);
  if (!missing.length) { console.log(`  ${lang}: already complete`); continue; }

  let src = fs.readFileSync(file, 'utf8');
  const lines = missing.map((k) => `    ${k}: ${q(ex[k])},`).join('\n');
  // Insert before the chrome object's closing "  },"
  const re = /(chrome:\s*\{[\s\S]*?)(\n  \},)/;
  if (!re.test(src)) { console.log(`  ! ${lang}: chrome block not found — SKIP`); continue; }
  const next = src.replace(re, (mm, body, close) => `${body}\n${lines}${close}`);

  console.log(`  ${lang}: +${missing.length} key (${missing.join(', ')})`);
  if (!DRY && next !== src) { fs.writeFileSync(file, next, 'utf8'); totalInserted += missing.length; }
}
console.log(`${DRY ? '[DRY] ' : ''}done. inserted keys: ${DRY ? '(dry)' : totalInserted}`);
