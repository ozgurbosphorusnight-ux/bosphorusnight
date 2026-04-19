#!/usr/bin/env node
/**
 * One-time fix: Dinner cruise pages have wrong departure time (20:45 → 21:00)
 * and wrong duration (3.5 hours → 3 hours) across 16 language versions.
 *
 * Targets:
 *   cruises/dinner-cruise.html (root EN)
 *   cruises/{lang}/dinner-cruise.html  (16 languages)
 *   cruises/{lang}/last-minute-tonight.html  (16 languages)
 *
 * Run: node scripts/fix-dinner-time-duration.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'node:fs/promises'; // Node 22+

const patterns = [
  // Time: 20:45 → 21:00 (universal)
  [/\b20:45\b/g, '21:00'],
  // French time format
  [/\b20h45\b/g, '21h00'],
  // Turkish: "20:45'te" → "21:00'de", "Kalkış 20:45" fine after number fix
  // French duration: "3h30" → "3h"
  [/\b3h30\b/g, '3h'],

  // Duration — language-specific
  // English
  [/\b3\.5-hour\b/g, '3-hour'],
  [/\b3\.5h\b/g, '3h'],

  // Turkish: "3.5 saat" → "3 saat", "3.5 saatlik" → "3 saatlik"
  [/\b3\.5 saat/g, '3 saat'],

  // German: "3,5-stündige" → "3-stündige", "3,5 Stunden" → "3 Stunden"
  [/\b3,5-stündige\b/g, '3-stündige'],
  [/\b3,5 Stunden\b/g, '3 Stunden'],
  [/\b3,5 Std/g, '3 Std'],

  // Spanish: "3,5 horas", "de 3,5"
  [/\b3,5 horas\b/g, '3 horas'],
  [/\bde 3,5\b/g, 'de 3'],

  // Russian: "3,5-часовой", "3,5 часа"
  [/\b3,5-часовой\b/g, '3-часовой'],
  [/\b3,5 часа\b/g, '3 часа'],

  // Bulgarian: "3,5-часов", "3,5 часа"
  [/\b3,5-часов\b/g, '3-часов'],

  // Arabic: "3.5 ساعات"
  [/\b3\.5 ساعات\b/g, '3 ساعات'],

  // Hindi: "3.5 घंटे"
  [/\b3\.5 घंटे\b/g, '3 घंटे'],

  // Japanese: "3.5時間"
  [/\b3\.5時間\b/g, '3時間'],

  // Korean: "3.5시간"
  [/\b3\.5시간\b/g, '3시간'],

  // Chinese: "3.5小时"
  [/\b3\.5小时\b/g, '3小时'],

  // Italian, Portuguese, Indonesian, Malay, Romanian, Urdu — defensive
  [/\b3\.5 ore\b/g, '3 ore'],       // it
  [/\b3,5 ore\b/g, '3 ore'],         // it variant
  [/\b3\.5 jam\b/g, '3 jam'],        // id/ms
  [/\b3,5 ore\b/g, '3 ore'],         // ro
  [/\b3.5 گھنٹے\b/g, '3 گھنٹے'],      // ur

  // Final safety: "3.5-hour" / "3.5 hour" general
  [/\b3\.5 hours?\b/gi, (m) => m.replace('3.5', '3')],
  [/\b3,5 hours?\b/gi, (m) => m.replace('3,5', '3')],
];

// Turkish: "20:45'te" pattern for nouns — replace 20:45 handled above, but "kalkış"te is fine
// Turkish: "21:00'de" (21:00 followed by 'de or 'te) — after replacement we might get "21:00'te" which is wrong.
// Simpler: just do the number swap, Turkish suffix already matches (zeros pattern)
// Actually 20:45'te → 21:00'te — grammatically "21:00'de" is correct (d starts, not t).
// Language-aware suffix fix:
const turkishSuffixFix = [
  [/21:00'te/g, "21:00'de"],  // after "20:45'te" → "21:00'te" → "21:00'de"
];

const files = [];
const patterns_glob = [
  'cruises/dinner-cruise.html',
  'cruises/**/dinner-cruise.html',
  'cruises/last-minute-tonight.html',
  'cruises/**/last-minute-tonight.html',
];

for await (const entry of glob(patterns_glob)) {
  if (!files.includes(entry)) files.push(entry);
}

console.log(`Found ${files.length} files to process`);

let totalChanges = 0;
for (const file of files) {
  const before = await readFile(file, 'utf8');
  let after = before;
  for (const [re, rep] of patterns) {
    after = after.replace(re, rep);
  }
  for (const [re, rep] of turkishSuffixFix) {
    after = after.replace(re, rep);
  }
  if (after !== before) {
    const changes = (before.match(/20:45|20h45|3\.5|3,5|3h30/g) || []).length;
    totalChanges += changes;
    await writeFile(file, after, 'utf8');
    console.log(`✓ ${file} — ~${changes} changes`);
  } else {
    console.log(`· ${file} — no change`);
  }
}

console.log(`\nDone. Total estimated changes: ${totalChanges}`);
