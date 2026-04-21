#!/usr/bin/env node
/**
 * Merges 9 UI translation JSON files into js/translations.js.
 * Adds new languages to the LANGUAGES config AND appends each language's
 * translations to each key in T. Preserves original file structure/comments.
 * Usage: node scripts/merge-translations.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TRANSLATIONS_JS = path.join(ROOT, 'js', 'translations.js');

const NEW_LANGS = {
  fa: { flag: 'ir', label: 'فارسی', dir: 'rtl' },
  fr: { flag: 'fr', label: 'Français', dir: 'ltr' },
  it: { flag: 'it', label: 'Italiano', dir: 'ltr' },
  zh: { flag: 'cn', label: '中文', dir: 'ltr' },
  id: { flag: 'id', label: 'Bahasa Indonesia', dir: 'ltr' },
  ms: { flag: 'my', label: 'Bahasa Melayu', dir: 'ltr' },
  pl: { flag: 'pl', label: 'Polski', dir: 'ltr' },
  bg: { flag: 'bg', label: 'Български', dir: 'ltr' },
  ro: { flag: 'ro', label: 'Română', dir: 'ltr' }
};

const loaded = {};
for (const lang of Object.keys(NEW_LANGS)) {
  loaded[lang] = require(path.join(ROOT, 'content', 'ui-translations', `${lang}.json`));
}

let text = fs.readFileSync(TRANSLATIONS_JS, 'utf8');

// Brace walker that respects strings AND JS line/block comments.
// Apostrophes inside // comments would otherwise flip the parser into a
// single-quoted-string state and mis-pair braces.
function walkToMatchingBrace(src, startAfterOpen) {
  let depth = 1;
  let i = startAfterOpen;
  let inStr = null;
  while (i < src.length && depth > 0) {
    const c = src[i];
    const next = src[i + 1];
    const prev = i > 0 ? src[i - 1] : '';
    if (inStr) {
      if (c === inStr && prev !== '\\') inStr = null;
      i++;
    } else if (c === '/' && next === '/') {
      const nl = src.indexOf('\n', i + 2);
      i = nl === -1 ? src.length : nl + 1;
    } else if (c === '/' && next === '*') {
      const end = src.indexOf('*/', i + 2);
      i = end === -1 ? src.length : end + 2;
    } else {
      if (c === '"' || c === "'") inStr = c;
      else if (c === '{') depth++;
      else if (c === '}') depth--;
      i++;
    }
  }
  return i - 1; // position of the closing `}`
}

// ========== Step 1: Isolate T block ==========
const tStartMatch = text.match(/const T = \{/);
if (!tStartMatch) {
  console.error('const T bulunamadı.');
  process.exit(1);
}
const tBodyStart = tStartMatch.index + tStartMatch[0].length;
const tBodyEnd = walkToMatchingBrace(text, tBodyStart);
const prefix = text.slice(0, tBodyStart);
const tBody = text.slice(tBodyStart, tBodyEnd);
const suffix = text.slice(tBodyEnd);

// ========== Step 2: Augment T keys inside tBody ==========
// Parser walks tBody key-by-key, tracking brace depth (respecting strings).
// Handles both single-line and multi-line key definitions.
let keysAugmented = 0;
let keysSkipped = 0;

function augment(body) {
  let out = '';
  let idx = 0;
  const keyRe = /"([^"\\]+)":\s*\{/g;
  while (idx < body.length) {
    keyRe.lastIndex = idx;
    const km = keyRe.exec(body);
    if (!km) {
      out += body.slice(idx);
      break;
    }
    out += body.slice(idx, km.index);

    const key = km[1];
    const objStart = km.index + km[0].length;
    const objEnd = walkToMatchingBrace(body, objStart);
    const objBody = body.slice(objStart, objEnd);

    // Augment this key
    const additions = [];
    for (const lang of Object.keys(NEW_LANGS)) {
      const val = loaded[lang][key];
      if (val !== undefined) additions.push(`${lang}: ${JSON.stringify(val)}`);
    }

    if (additions.length === 0) {
      keysSkipped++;
      out += `"${key}": {${objBody}}`;
    } else {
      keysAugmented++;
      const isMulti = objBody.includes('\n');
      const trimmed = objBody.replace(/\s*$/, '');
      if (isMulti) {
        out += `"${key}": {${trimmed},\n    ${additions.join(', ')}\n  }`;
      } else {
        out += `"${key}": {${trimmed.replace(/^\s+/, ' ')}, ${additions.join(', ')} }`;
      }
    }

    idx = objEnd + 1;
  }
  return out;
}

const newTBody = augment(tBody);
text = prefix + newTBody + suffix;

console.log(`Key'ler güncellendi: ${keysAugmented}, atlandı: ${keysSkipped}`);

// ========== Step 2: Extend LANGUAGES ==========
const newLangLines = Object.entries(NEW_LANGS)
  .map(([code, meta]) => `  ${code}: { flag: '${meta.flag}', label: '${meta.label}', dir: '${meta.dir}' }`)
  .join(',\n');

// Find the closing of LANGUAGES: `ar: { ... }\n};` and inject before `};`.
const langBlockMatch = text.match(/(const LANGUAGES = \{[\s\S]*?)\n\};/);
if (!langBlockMatch) {
  console.error('LANGUAGES block bulunamadı.');
  process.exit(1);
}
// Make sure we don't double-insert (idempotent)
if (langBlockMatch[1].includes('fr: { flag:')) {
  console.log('LANGUAGES zaten güncel, atlanıyor.');
} else {
  text = text.replace(
    /(const LANGUAGES = \{[\s\S]*?)(\n\};)/,
    `$1,\n${newLangLines}$2`
  );
  console.log(`LANGUAGES genişletildi: +${Object.keys(NEW_LANGS).length} dil`);
}

// ========== Step 3: Add conditional module.exports for build-time require ==========
if (!text.includes('module.exports')) {
  text += '\n\n// Node.js build-time export (ignored in browser)\n';
  text += 'if (typeof module !== "undefined" && module.exports) {\n';
  text += '  module.exports = { T, LANGUAGES };\n';
  text += '}\n';
  console.log('module.exports eklendi (build-time için).');
}

fs.writeFileSync(TRANSLATIONS_JS, text);

// ========== Verify ==========
console.log('\nDoğrulama:');
delete require.cache[require.resolve(TRANSLATIONS_JS)];
const { T, LANGUAGES } = require(TRANSLATIONS_JS);
const totalKeys = Object.keys(T).length;
const allLangs = Object.keys(LANGUAGES);
console.log(`  Toplam key: ${totalKeys}`);
console.log(`  Diller: ${allLangs.join(', ')} (${allLangs.length})`);

const sample = T['nav.home'];
console.log(`  "nav.home" → fr: "${sample.fr}", zh: "${sample.zh}", fa: "${sample.fa}"`);

// Check missing langs in any key
const missingByLang = {};
for (const lang of Object.keys(NEW_LANGS)) {
  missingByLang[lang] = Object.keys(T).filter(k => T[k][lang] === undefined).length;
}
console.log(`  Eksik translation (dil başı):`, missingByLang);

console.log('\n✅ Merge tamamlandı.');
