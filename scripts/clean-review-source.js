#!/usr/bin/env node
/**
 * One-time migration: removes "on Google and TripAdvisor" / "Google ile
 * TripAdvisor'da" claims from all content files (15 languages).
 *
 * Reason: The 11,317 review count comes from our own internal feedback
 * system, NOT from Google/TripAdvisor public profiles. Claiming the source
 * was misleading. Number stays, source claim removed.
 *
 * Run: node scripts/clean-review-source.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const PATTERNS = [
  { lang: 'EN', pattern: / on Google and TripAdvisor/g },
  { lang: 'TR', pattern: / Google ile TripAdvisor'da/g },
  { lang: 'DE', pattern: / auf Google und TripAdvisor/g },
  { lang: 'ES', pattern: / en Google y TripAdvisor/g },
  { lang: 'IT', pattern: / su Google e TripAdvisor/g },
  { lang: 'FR', pattern: / sur Google et TripAdvisor/g },
  { lang: 'AR', pattern: / على Google وTripAdvisor/g },
  { lang: 'ZH', pattern: /在Google与TripAdvisor上/g },
  { lang: 'RU', pattern: / на Google и TripAdvisor/g },
  { lang: 'ID', pattern: / di Google dan TripAdvisor/g },
  { lang: 'MS', pattern: / di Google dan TripAdvisor/g },
  { lang: 'PL', pattern: / w Google i TripAdvisor/g },
  { lang: 'RO', pattern: / pe Google și TripAdvisor/g },
  { lang: 'BG', pattern: / в Google и TripAdvisor/g },
  { lang: 'FA', pattern: / در Google و TripAdvisor/g },
];

function walkDir(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
      out.push(...walkDir(full));
    } else if (entry.name.endsWith('.js')) {
      out.push(full);
    }
  }
  return out;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let total = 0;
  for (const { pattern } of PATTERNS) {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, '');
      total += matches.length;
    }
  }
  if (total > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  return total;
}

function main() {
  console.log('🧹 Review source cleanup\n');
  const dirs = [
    path.join(ROOT, 'content'),
  ];
  let files = 0;
  let total = 0;
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    for (const file of walkDir(dir)) {
      const count = processFile(file);
      if (count > 0) {
        const rel = path.relative(ROOT, file).replace(/\\/g, '/');
        console.log(`  ✓ ${rel} — ${count} replacement${count > 1 ? 's' : ''}`);
        files++;
        total += count;
      }
    }
  }
  console.log(`\n✅ ${files} dosya, ${total} ifade silindi.`);
}

main();
