#!/usr/bin/env node
/**
 * Finds all hardcoded English text in index.html not yet in dict, filters out brand/name/non-translatable,
 * generates new keys, and outputs a JSON of EN values for agent translation.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const existingEn = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-en.json'));
const { T } = require(path.join(ROOT, 'js', 'translations.js'));

const known = new Set();
Object.values(existingEn).forEach(v => known.add(v));
for (const k of Object.keys(T)) if (T[k].en) known.add(T[k].en);

// Hard skip list — proper nouns, brand names, language labels, emails, domains
const SKIP = new Set([
  // Reviewer first names (proper nouns — stay)
  'Ahmed', 'Aisha', 'Al-Rashid Family', 'Anna', 'Carlos', 'Chloe & Thomas', 'Dmitri',
  'Elena & Marco', 'Emma & Lucas', 'Hans & Greta', 'Ibrahim B.', 'James', 'Keiko',
  'Lena', 'Maria', 'Nikolai', 'Priya', 'Ryan', 'Sarah & David', 'Yuki',
  // Language labels (native)
  'English', 'Türkçe', 'Deutsch', 'Español', 'Français', 'Italiano', 'Русский',
  'Polski', 'Română', 'Български', 'العربية', 'فارسی', '中文', 'Bahasa Indonesia',
  'Bahasa Melayu',
  // Place names (proper nouns — minimal translation)
  'Bebek', 'Üsküdar',
  // Brand / domain / email
  'Bosphorus Night — Luxury Dinner Cruise Istanbul',
  'bosphorusnight.com', 'reservation@bosphorusnight.com',
  '&copy; 2026 Bosphorus Night.',
  'Classic',
  // Acronyms / codes
  'FSM', 'VIP', 'EN', 'TR',
  // Symbols only / numbers
  '16 Apr 2026', '2 Adults', '0 / 2 adults assigned', '40% OFF', '3hrs · 21:00',
  'OUTBOUND →', '← RETURN', '▲ RETURN',
  // Already have dinner.std.title translated via T: "Standard Dinner Cruise"
  'Standard Dinner Cruise',
  // Script content leakage
  '"', "'", '...'
]);

const re = />([^<>]+)</g;
const candidates = new Map(); // value → count
let m;
while ((m = re.exec(html)) !== null) {
  const t = m[1].replace(/\s+/g, ' ').trim();
  if (!t || t.length < 2) continue;
  if (known.has(t) || SKIP.has(t)) continue;
  // Only numeric/symbol
  if (/^[0-9\s€·\.,\-+%'@:]+$/.test(t)) continue;
  // CSS-like
  if (/^[a-z-]+:[a-z0-9-]+/.test(t)) continue;
  if (/^[a-z]+\s*{/.test(t)) continue;
  // Must contain ≥3 latin letters
  if (!/[a-zA-Z]{3,}/.test(t)) continue;
  // Reject if mostly non-latin (already translated)
  const latinRatio = (t.match(/[a-zA-Z]/g) || []).length / t.length;
  if (latinRatio < 0.3) continue;
  // Skip inline script/style leaks
  if (/^(window\.|function|gtag|dataLayer|\.pac-|if\s*\()/.test(t)) continue;
  // Skip very long paragraphs (likely already data-i18n faq answers — better handled separately)
  if (t.length > 250) continue;

  candidates.set(t, (candidates.get(t) || 0) + 1);
}

// Generate keys and output
let keyIdx = 0;
const genKey = (text) => {
  const slug = text
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 40)
    .toLowerCase();
  return `extra.auto.${++keyIdx}_${slug || 'str'}`;
};

const output = {};
const sorted = Array.from(candidates.keys()).sort();
for (const v of sorted) output[genKey(v)] = v;

fs.writeFileSync(path.join(ROOT, 'content', 'ui-translations', '_auto-en.json'), JSON.stringify(output, null, 2));
console.log(`Wrote ${sorted.length} candidate strings to content/ui-translations/_auto-en.json`);
console.log('\nFirst 30 entries:');
sorted.slice(0, 30).forEach(v => console.log('  - ' + v.slice(0, 100)));
