#!/usr/bin/env node
/**
 * Dumps all user-visible text nodes from a page, one per line.
 * Usage: node scripts/dump-text.js dist/tr/index.html [english|all]
 */

const fs = require('fs');
const file = process.argv[2];
const mode = process.argv[3] || 'all';

if (!file) { console.error('Usage: node scripts/dump-text.js PATH [english|all]'); process.exit(1); }

const html = fs.readFileSync(file, 'utf8');
const clean = html
  .replace(/<script[\s\S]*?<\/script>/g, '')
  .replace(/<style[\s\S]*?<\/style>/g, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/<svg[\s\S]*?<\/svg>/g, '')
  .replace(/<noscript[\s\S]*?<\/noscript>/g, '');

const texts = new Set();
const re = />([^<>]{2,300}?)</g;
let m;
while ((m = re.exec(clean)) !== null) {
  const t = m[1].trim();
  if (!t) continue;
  if (/^[0-9\s€+\-·.,%₺$£¥★☆✓✕⭐🗓💳💬❤️]+$/.test(t)) continue;
  if (/^[a-z-]+:[a-z0-9-]+/.test(t)) continue;
  texts.add(t.slice(0, 120));
}

const arr = Array.from(texts);
if (mode === 'english') {
  // Very strict: contains English stopword AND no non-ASCII
  const filtered = arr.filter(t => /\b(the|and|or|with|for|your|our|from|includes?|available|cruise|dinner|boat|hour|night|day|please|select|choose|click|book|tour|pay|adult|child|guest|table|wine|menu|show|ticket|price|reviews?|visible|distance|about|help|more|less|get|let|did|does|will|was|were|been|being|have|has|where|when|what|which|who|how|why|all|any|some|every|only|also|very|just|still|now|then|here|there|free|full)\b/i.test(t) && !/[^\x00-\x7F]/.test(t));
  console.log(`English-looking (${filtered.length}):`);
  filtered.forEach(t => console.log('  ' + t));
} else {
  console.log(`Total text nodes: ${arr.length}`);
  arr.forEach(t => console.log('  ' + t));
}
