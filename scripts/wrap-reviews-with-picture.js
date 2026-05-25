#!/usr/bin/env node
/**
 * Wraps review-XX.png <img> tags in index.html with <picture> + WebP <source>.
 * Idempotent: skips imgs already inside a <picture>. One-shot fix; safe to re-run.
 *
 * Effect on home page weight: 23 reviews × ~1MB PNG → ~80KB WebP each
 * (~20 MB → ~1.8 MB if all visible). PNG fallback preserved for old browsers.
 */

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(SRC, 'utf8');

// Match <img ... src="assets/reviews/review-NN.png" ...>
// but NOT if it's already immediately preceded by a <source ... .webp"> + <picture> opener.
// Strategy: skip imgs where the previous non-whitespace char sequence ends with </source> or
// the line right before contains type="image/webp". Simpler: look for our marker.
const PICTURE_MARKER = 'data-picture-wrapped="reviews"';

const RE = /<img(\s+src="assets\/reviews\/(review-\d+)\.png"[^>]*?)>/g;

let count = 0;
let skipped = 0;
const out = html.replace(RE, (match, attrs, basename, offset) => {
  // Idempotency: check ~120 chars before this match for our marker
  const before = html.slice(Math.max(0, offset - 200), offset);
  if (before.includes(PICTURE_MARKER)) {
    skipped++;
    return match;
  }
  count++;
  return `<picture ${PICTURE_MARKER}><source srcset="assets/reviews/${basename}.webp" type="image/webp"><img${attrs}></picture>`;
});

if (count === 0 && skipped === 0) {
  console.log('No review-XX.png <img> tags found in index.html — nothing to do.');
  process.exit(0);
}

fs.writeFileSync(SRC, out);
console.log(`✓ Wrapped ${count} review <img> tags with <picture> (skipped ${skipped} already wrapped).`);
