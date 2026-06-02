#!/usr/bin/env node
/**
 * Localizes the brand "Bosphorus Night" inside the Kabataş blog content so it
 * matches the site convention (every language uses its own brand form; only the
 * bosphorusnight.com domain stays Latin).
 *
 * Found 2026-06-02: data/blog-kabatas-i18n.json was built with Latin "Bosphorus
 * Night" in all 32 languages (5 occurrences each), unlike the 6 older blog posts
 * which localize the brand. This fixes:
 *   1. data/blog-kabatas-i18n.json — source for the Kabataş post pages (Vercel
 *      rebuilds them on push), all langs except EN.
 *   2. src/blog-i18n/{lang}/index.html — the how-to-reach card alt text added
 *      earlier (only the Kabataş card img alt; footer/og are NOT touched).
 *
 * Brand map: validated against the older posts (logo alt + body usage, 5/5 match).
 * Pattern Bosphorus[- ]Night catches both the spaced standalone form and the
 * hyphenated compound form (German/Dutch Durchkopplung).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const JSON_FILE = path.join(ROOT, 'data', 'blog-kabatas-i18n.json');

// Canonical localized brand per language (en stays Latin → omitted from replace).
const BRAND = {
  tr: 'Boğaz Gecesi',
  de: 'Bosporus-Nacht',
  es: 'Noche del Bósforo',
  fr: 'Soirée Bosphore',
  it: 'Notte sul Bosforo',
  ru: 'Босфорская ночь',
  ar: 'ليلة البوسفور',
  fa: 'شب بسفر',
  zh: '博斯普鲁斯之夜',
  id: 'Malam Bosphorus',
  ms: 'Malam Bosphorus',
  pl: 'Noc nad Bosforem',
  bg: 'Босфорска нощ',
  ro: 'Noaptea Bosforului',
  uk: 'Босфорська ніч',
  pt: 'Bósforo Noturno',
  nl: 'Bosporus bij Nacht',
  cs: 'Bospor v noci',
  hu: 'Boszporusz Éjszaka',
  sv: 'Bosporen om natten',
  da: 'Bosporus om natten',
  no: 'Bosporos om natten',
  fi: 'Bosporinsalmen yöt',
  sk: 'Bospor v noci',
  el: 'Βόσπορος τη Νύχτα',
  sl: 'Bospor ponoči',
  lv: 'Bosfors naktī',
  ja: 'ボスポラスの夜',
  ko: '보스포루스의 밤',
  hi: 'बॉस्फोरस की रात',
  ur: 'باسفورس کی رات',
};

const RE = /Bosphorus[- ]Night/g;
const POSTS = ['how-to-reach', 'what-to-do-near'];

function leaves(node, acc) {
  if (typeof node === 'string') acc.push(node);
  else if (Array.isArray(node)) node.forEach((x) => leaves(x, acc));
  else if (node && typeof node === 'object') Object.values(node).forEach((x) => leaves(x, acc));
  return acc;
}

// ---------- 1. JSON source ----------
const d = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
let raw = fs.readFileSync(JSON_FILE, 'utf8');

let jsonReplaced = 0;
const missing = [];
for (const lang of Object.keys(BRAND)) {
  for (const pk of POSTS) {
    const content = d.posts[pk]?.languages?.[lang]?.content;
    if (!content) continue;
    for (const leaf of leaves(content, [])) {
      if (!/Bosphorus[- ]Night/.test(leaf)) continue;
      const fixed = leaf.replace(RE, BRAND[lang]);
      if (raw.includes(leaf)) {
        const n = raw.split(leaf).length - 1;
        raw = raw.split(leaf).join(fixed);
        jsonReplaced += n;
      } else {
        missing.push(`${lang}/${pk}: ${leaf.slice(0, 50)}…`);
      }
    }
  }
}
fs.writeFileSync(JSON_FILE, raw, 'utf8');
console.log(`JSON: ${jsonReplaced} marka occurrence lokalize edildi`);
if (missing.length) {
  console.log(`  ⚠️ raw'da bulunamayan ${missing.length} leaf:`);
  missing.forEach((m) => console.log('    - ' + m));
}

// ---------- 2. Index card alt (Kabataş img tags only — footer/og NOT touched) ----------
const IMG_RE = /(<img src="\/assets\/images\/tosunpasa\/exterior-(?:pier-sunset|tosunpasa-wide)\.webp" alt=")([^"]*)(")/g;
let idxFixed = 0;
// All langs that have a Kabataş card: my 30 + tr (added earlier). EN card stays Latin.
const INDEX_LANGS = Object.keys(BRAND); // excludes en
for (const lang of INDEX_LANGS) {
  const file = path.join(ROOT, 'src', 'blog-i18n', lang, 'index.html');
  if (!fs.existsSync(file)) continue;
  let html = fs.readFileSync(file, 'utf8');
  let touched = false;
  html = html.replace(IMG_RE, (m, p1, alt, p3) => {
    if (!/Bosphorus[- ]Night/.test(alt)) return m;
    touched = true;
    return p1 + alt.replace(RE, BRAND[lang]) + p3;
  });
  if (touched) {
    fs.writeFileSync(file, html, 'utf8');
    idxFixed++;
    console.log(`  ✓ index ${lang}: card alt lokalize`);
  }
}
console.log(`\nÖZET: JSON ${jsonReplaced} occurrence + ${idxFixed} index card alt düzeltildi`);
