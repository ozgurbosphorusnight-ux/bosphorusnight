#!/usr/bin/env node
/**
 * Trim too-long meta descriptions in content/translations/{lang}.js to <=155 chars.
 *
 * Algorithm (prefer cleaner cut points first):
 *   1. Sentence boundary (. ! ?) in range 90..155 — keep the latest
 *   2. Comma boundary in range 110..155 — append period
 *   3. Word boundary in range 120..155 — append period
 *   4. Hard cut at 152 + '...'
 */

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '..', 'content', 'translations');
const LANGS = ['tr','de','es','ru','ar','fa','fr','it','zh','id','ms','pl','bg','ro','uk','hi','ur','ja','ko'];
const SLUGS = [
  'bosphorus-dinner-cruise','bosphorus-with-kids','romantic-bosphorus-cruise',
  'halal-bosphorus-cruise','bosphorus-trip','istanbul-boat-tour','istanbul-night-tour',
  'private-bosphorus-cruise','bosphorus-cruise-tickets','last-minute-bosphorus',
  'bosphorus-for-couples','bosphorus-vip','dinner-cruise-istanbul','bosphorus-sightseeing',
  'istanbul-cruise-price','bosphorus-sunset-cruise','bosphorus-night-tour'
];

function smartTrim(desc) {
  if (desc.length <= 160) return desc;

  // 1) Sentence boundary (. ! ?) — search latest in 90..154
  for (let i = 154; i >= 90; i--) {
    const c = desc[i];
    if ((c === '.' || c === '!' || c === '?') &&
        (i === desc.length - 1 || desc[i+1] === ' ' || desc[i+1] === '\n')) {
      return desc.slice(0, i + 1);
    }
  }

  // 2) Comma — search latest in 110..154
  for (let i = 154; i >= 110; i--) {
    if (desc[i] === ',') {
      return desc.slice(0, i) + '.';
    }
  }

  // 3) Word boundary in 120..154
  for (let i = 154; i >= 120; i--) {
    if (desc[i] === ' ') {
      let cut = desc.slice(0, i).trim();
      if (!/[.!?,:;]$/.test(cut)) cut += '.';
      return cut;
    }
  }

  // 4) Hard cut
  return desc.slice(0, 152).trim() + '...';
}

function escapeForJsSingleQuote(s) {
  // We will be writing into a JS single-quoted string literal.
  // Escape backslash, single-quote, and newlines (just in case).
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

let totalFixed = 0;
const summary = {};

for (const lang of LANGS) {
  const file = path.join(PAGES_DIR, `${lang}.js`);
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let langFixed = 0;

  for (const slug of SLUGS) {
    // Find the page block, then within it find meta.description string.
    // Pattern: '{slug}': { ... meta: { ... description: 'TEXT' ... } ... }
    // We'll match each meta.description that lives inside this slug's block.

    // Simpler heuristic: split by slug key, then find the next description.
    const slugKeyRegex = new RegExp(`['"]${slug.replace(/-/g, '\\-')}['"]\\s*:\\s*\\{`, 'g');
    const m = slugKeyRegex.exec(content);
    if (!m) continue;
    const startIdx = m.index;

    // Find first description: 'TEXT' after this point
    const descStartPattern = /description\s*:\s*'/g;
    descStartPattern.lastIndex = startIdx;
    const dm = descStartPattern.exec(content);
    if (!dm) continue;
    const valStart = dm.index + dm[0].length;

    // Find the closing single quote (not escaped)
    let valEnd = valStart;
    while (valEnd < content.length) {
      if (content[valEnd] === "'" && content[valEnd-1] !== '\\') break;
      valEnd++;
    }
    if (valEnd >= content.length) continue;

    const rawValue = content.slice(valStart, valEnd);
    // Decode \' to ' for length check
    const decoded = rawValue.replace(/\\'/g, "'").replace(/\\\\/g, '\\');
    if (decoded.length <= 160) continue;

    const trimmed = smartTrim(decoded);
    if (trimmed === decoded) continue;
    const newRaw = escapeForJsSingleQuote(trimmed);

    content = content.slice(0, valStart) + newRaw + content.slice(valEnd);
    langFixed++;
    totalFixed++;
  }

  if (langFixed > 0) {
    fs.writeFileSync(file, content, 'utf8');
    summary[lang] = langFixed;
  }
}

console.log('=== Translation description trim sonuçları ===\n');
const order = ['ja','ko','zh','ar','ru','uk','bg','hi','ur','fa','tr','de','es','fr','it','pl','ro','id','ms'];
for (const lang of order) {
  const n = summary[lang] || 0;
  if (n > 0) console.log(`${lang.padEnd(3)} ${n} description kısaltıldı`);
  else console.log(`${lang.padEnd(3)} - değişiklik yok`);
}
console.log(`\n✓ Toplam ${totalFixed} description kısaltıldı.`);
