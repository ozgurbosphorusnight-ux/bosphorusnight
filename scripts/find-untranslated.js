#!/usr/bin/env node
/**
 * Finds hardcoded English strings in index.html that lack data-i18n.
 * Reports elements with visible English text content.
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');

// Strip scripts, styles, comments, inline SVG to reduce noise
let clean = html
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<svg[\s\S]*?<\/svg>/g, '');

// Find all opening-to-closing text between tags (simple non-nested)
const re = /<(\w+)([^>]*)>([^<]{2,})<\/\1>/g;
const hits = [];
let m;
while ((m = re.exec(clean)) !== null) {
  const [_, tag, attrs, text] = m;
  const t = text.trim();
  if (!t || t.length < 2) continue;

  // Skip if has any data-i18n
  if (/\sdata-i18n(?:-placeholder|-opt)?=/.test(attrs)) continue;

  // Skip pure non-English (Turkish, Arabic, etc.)
  // English heuristic: contains English words, no Turkish-specific chars
  const hasEnglish = /[A-Z][a-z]+(?:\s+[a-z]+)*/.test(t);
  const hasTurkish = /[şŞıİçÇğĞöÖüÜ]/.test(t);
  const hasOnlyASCII = /^[\x00-\x7F\s]+$/.test(t);

  if (!hasEnglish) continue;
  if (hasTurkish) continue;
  if (!hasOnlyASCII) continue;

  // Skip brand names and common non-translatable
  if (/^(Ltd|Inc|TÜRSAB|VIP|FAQ|DJ|WhatsApp|Telegram|WeChat|AMOR|PDF|QR)[\s\.]*$/.test(t)) continue;
  if (/^(Bosphorus|Istanbul|Kabataş|Dolmabahçe|Ortaköy|Beşiktaş|Taksim|Sultanahmet|Sirkeci|Eminönü|Beyoğlu|Fatih)\b/.test(t)) continue;

  hits.push({ tag, text: t.slice(0, 80), line: html.slice(0, m.index).split('\n').length });
}

const unique = new Map();
for (const h of hits) {
  const key = h.text;
  if (!unique.has(key)) unique.set(key, { text: key, tag: h.tag, lines: [] });
  unique.get(key).lines.push(h.line);
}

console.log(`Found ${unique.size} unique untranslated English strings (${hits.length} occurrences):\n`);
const sorted = Array.from(unique.values()).sort((a, b) => a.lines[0] - b.lines[0]);
for (const u of sorted.slice(0, 80)) {
  const lines = u.lines.length > 3 ? `L${u.lines[0]}+${u.lines.length - 1}` : `L${u.lines.join(',')}`;
  console.log(`  [${lines}] <${u.tag}>${u.text}</${u.tag}>`);
}
console.log(`\nTotal unique: ${unique.size}`);
