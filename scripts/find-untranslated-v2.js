#!/usr/bin/env node
/**
 * Finds all text nodes in index.html that:
 *  - Don't have data-i18n on their enclosing tag
 *  - Don't have a corresponding key in T
 *  - Aren't pure numeric/symbolic
 *  - Aren't already in the hardcoded dictionary
 * Output: candidate new keys for _hardcoded-en.json.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const { T } = require(path.join(ROOT, 'js', 'translations.js'));
const HARDCODED_EN = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-en.json'));

// Strip scripts, styles, comments, SVG
let clean = html
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<svg[\s\S]*?<\/svg>/g, '')
  .replace(/<noscript[\s\S]*?<\/noscript>/g, '');

// Known English source values (already translatable)
const knownValues = new Set(Object.values(HARDCODED_EN));
// Add dynamic T sources as known (if they're en)
for (const key of Object.keys(T)) {
  if (T[key].en) knownValues.add(T[key].en);
}

const hits = new Set();

// Simple text-between-tags regex — captures text that isn't a nested tag.
// This catches both `<span>text</span>` and `>text<` segments between tags.
const re = />\s*([^<>]{2,300}?)\s*</g;
let m;
while ((m = re.exec(clean)) !== null) {
  let t = m[1].trim();
  if (!t) continue;

  // Skip placeholders, symbols, numbers
  if (/^[0-9\s€+\-·.,%₺$£¥\u0600-\u06FF\u0370-\u03FF\u4E00-\u9FFF]+$/.test(t)) continue;
  // Skip Tailwind/CSS-looking values
  if (/^[a-z-]+:[a-z0-9-]+/.test(t)) continue;

  // Must contain at least one English-looking word
  if (!/[A-Za-z]/.test(t)) continue;

  // Has non-ASCII letters? Probably already translated
  if (/[^\x00-\x7F]/.test(t)) continue;

  // Strong English heuristic: contains English stopwords or clear English phrasing
  const hasEngIndicators = /\b(the|and|or|with|for|your|our|from|includes?|available|cruise|dinner|boat|hour|night|day|please|select|choose|click|book|contact|ticket|adult|child|guest|table|wine|menu|show|ride|tour|pay|free|visit|distance|full|every|house)\b/i.test(t);
  const hasCapPhrase = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+/.test(t); // multi-word capitalized
  const hasSingleCap = /^[A-Z][a-z]+$/.test(t); // single capitalized word

  if (!hasEngIndicators && !hasCapPhrase && !hasSingleCap) continue;

  // Skip if already in known dictionary
  if (knownValues.has(t)) continue;

  // Skip social/brand terms
  if (/^(Facebook|Twitter|Instagram|YouTube|LinkedIn|TikTok)$/i.test(t)) continue;

  hits.add(t.slice(0, 100));
}

console.log(`Found ${hits.size} text candidates not in T or HARDCODED_EN:\n`);
const sorted = Array.from(hits).sort();
for (const h of sorted) {
  console.log(`  "${h}"`);
}
