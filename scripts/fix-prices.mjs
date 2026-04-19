#!/usr/bin/env node
/**
 * Fix #2 + Proposal removal + Romantic price:
 * - 2 Glasses: €7 → €15 (all 6 languages)
 * - Unlimited alcohol: €15 → €30 (all 6 languages)
 * - Generic "Alcohol +€10" → "+€30" (it was unlimited implicit)
 * - Hotel transfer: €15 → €10 (inconsistent — AI rule is €10)
 * - Romantic table: €25 → €15
 * - Proposal Package: remove from site (AI removed it as a product)
 *
 * Files touched: js/translations.js, index.html
 */
import { readFile, writeFile } from 'node:fs/promises';

const translationsFixes = [
  // 2 Glasses alcohol (single-line multi-lang entries)
  [/2 Glasses \+€7/g, '2 Glasses +€15'],
  [/2 Kadeh \+€7/g, '2 Kadeh +€15'],
  [/2 Gläser \+€7/g, '2 Gläser +€15'],
  [/2 Copas \+€7/g, '2 Copas +€15'],
  [/2 бокала \+€7/g, '2 бокала +€15'],
  [/كأسان \+€7/g, 'كأسان +€15'],

  // Unlimited alcohol (standalone) — €15 → €30 in button/label context
  [/"Unlimited \+€15"/g, '"Unlimited +€30"'],
  [/"Sınırsız \+€15"/g, '"Sınırsız +€30"'],
  [/"Unbegrenzt \+€15"/g, '"Unbegrenzt +€30"'],
  [/"Ilimitado \+€15"/g, '"Ilimitado +€30"'],
  [/"Безлимит \+€15"/g, '"Безлимит +€30"'],
  [/"غير محدود \+€15"/g, '"غير محدود +€30"'],

  // "Alcohol Package +€10/person" → +€30/person (the "package" implies unlimited)
  [/Alcohol Package: \+€10\/person/g, 'Alcohol Package: +€30/person'],
  [/Alkol Paketi: \+€10\/kişi/g, 'Alkol Paketi: +€30/kişi'],
  [/Alkoholpaket: \+€10\/Person/g, 'Alkoholpaket: +€30/Person'],
  [/Paquete Alcohol: \+€10\/persona/g, 'Paquete Alcohol: +€30/persona'],
  [/Пакет алкоголя: \+€10\/чел\./g, 'Пакет алкоголя: +€30/чел.'],
  [/باقة كحول: \+€10\/شخص/g, 'باقة كحول: +€30/شخص'],

  // FAQ: "unlimited alcohol package for just +€10 per person" — €30
  [/\+€10 per person\b/g, '+€30 per person'],
  [/\+€10 pro Person\b/g, '+€30 pro Person'],
  [/\+€10 por persona\b/g, '+€30 por persona'],
  [/\+€10 с человека\b/g, '+€30 с человека'],
  [/\+€10 للشخص\b/g, '+€30 للشخص'],
  [/kişi başı sadece \+€10 ile/g, 'kişi başı sadece +€30 ile'],

  // Button labels: "Alcohol €10" → €30
  [/"Alcohol €10"/g, '"Alcohol €30"'],
  [/"Alkol €10"/g, '"Alkol €30"'],
  [/"Alkohol €10"/g, '"Alkohol €30"'],
  [/"Алкоголь €10"/g, '"Алкоголь €30"'],
  [/"كحول €10"/g, '"كحول €30"'],

  // Transfer: €15 → €10 (AI rule: €10/person)
  [/"Transfer €15"/g, '"Transfer €10"'],
  [/"Traslado €15"/g, '"Traslado €10"'],
  [/"Трансфер €15"/g, '"Трансфер €10"'],
  [/"نقل €15"/g, '"نقل €10"'],

  // FAQ hotel transfer
  [/Hotel transfer is available for \+€15 per person/g, 'Hotel transfer is available for +€10 per person'],
  [/Otel transferi kişi başı \+€15 ile/g, 'Otel transferi kişi başı +€10 ile'],
  [/Hoteltransfer für \+€15 pro Person/g, 'Hoteltransfer für +€10 pro Person'],
  [/traslado al hotel está disponible por \+€15 por persona/g, 'traslado al hotel está disponible por +€10 por persona'],
  [/Трансфер из отеля доступен за \+€15 с человека/g, 'Трансфер из отеля доступен за +€10 с человека'],
  [/خدمة النقل من الفندق متاحة مقابل \+€15 للشخص/g, 'خدمة النقل من الفندق متاحة مقابل +€10 للشخص'],

  // Summary line (both blocks): "Alcohol +€10 · Transfer +€15 · Romantic table +€25"
  // Target: "Alcohol +€30 · Transfer +€10 · Romantic table +€15"
  // Note: this is ambiguous because in this context "Alcohol +€10" refers to unlimited package.
  [/Alcohol \+€10 · Transfer \+€15 · Romantic table \+€25/g, 'Alcohol +€30 · Transfer +€10 · Romantic table +€15'],
  [/Alkol \+€10 · Transfer \+€15 · Romantik masa \+€25/g, 'Alkol +€30 · Transfer +€10 · Romantik masa +€15'],
  [/Alkohol \+€10 · Transfer \+€15 · Romantik-Tisch \+€25/g, 'Alkohol +€30 · Transfer +€10 · Romantik-Tisch +€15'],
  [/Alcohol \+€10 · Traslado \+€15 · Mesa romántica \+€25/g, 'Alcohol +€30 · Traslado +€10 · Mesa romántica +€15'],
  [/Алкоголь \+€10 · Трансфер \+€15 · Романтический стол \+€25/g, 'Алкоголь +€30 · Трансфер +€10 · Романтический стол +€15'],
  [/مشروبات كحولية \+€10 · نقل \+€15 · طاولة رومانسية \+€25/g, 'مشروبات كحولية +€30 · نقل +€10 · طاولة رومانسية +€15'],

  // Romantic Table: €15 (already correct in most places; check €25)
  [/Romantic Table: \+€25/g, 'Romantic Table: +€15'],
  [/Romantik Masa: \+€25/g, 'Romantik Masa: +€15'],
  [/Romantik-Tisch: \+€25/g, 'Romantik-Tisch: +€15'],
  [/Mesa Romántica: \+€25/g, 'Mesa Romántica: +€15'],
  [/Романтический стол: \+€25/g, 'Романтический стол: +€15'],
  [/طاولة رومانسية: \+€25/g, 'طاولة رومانسية: +€15'],

  // Proposal pkg line (251-256): "Optional: Alcohol +€10 · Transfer +€15 · Proposal pkg +€50"
  // Remove proposal pkg part entirely, fix other prices
  [/Alcohol \+€10 · Transfer \+€15 · Proposal pkg \+€50/g, 'Alcohol +€30 · Transfer +€10'],
  [/Alkol \+€10 · Transfer \+€15 · Evlilik teklifi pkg \+€50/g, 'Alkol +€30 · Transfer +€10'],
  [/Alkohol \+€10 · Transfer \+€15 · Antrag-Paket \+€50/g, 'Alkohol +€30 · Transfer +€10'],
  [/Alcohol \+€10 · Traslado \+€15 · Paquete propuesta \+€50/g, 'Alcohol +€30 · Traslado +€10'],
  [/Алкоголь \+€10 · Трансфер \+€15 · Пакет предложения \+€50/g, 'Алкоголь +€30 · Трансфер +€10'],
  [/مشروبات كحولية \+€10 · نقل \+€15 · باقة عرض زواج \+€50/g, 'مشروبات كحولية +€30 · نقل +€10'],
];

const indexFixes = [
  // Dinner page alcohol addons
  [/2 Glasses of Alcohol: \+€7\/person/g, '2 Glasses of Alcohol: +€15/person'],
  [/"2 Glasses \+€7"/g, '"2 Glasses +€15"'],
  // Drink toggle button (line 2792, 2793)
  [/>2 Glasses \+€7</g, '>2 Glasses +€15<'],
  [/>Unlimited \+€15</g, '>Unlimited +€30<'],
  // Wizard drink notes (line 2996, 3008)
  [/\+€7\/person · Wine, beer, rakı, vodka, or gin/g, '+€15/person · Wine, beer, rakı, vodka, or gin'],
  [/\+€15\/person · Wine, beer, rakı, vodka, gin all night/g, '+€30/person · Wine, beer, rakı, vodka, gin all night'],
];

async function apply(file, fixes) {
  const before = await readFile(file, 'utf8');
  let after = before;
  let changes = 0;
  for (const [re, rep] of fixes) {
    const match = after.match(re);
    if (match) {
      changes += match.length;
      after = after.replace(re, rep);
    }
  }
  if (after !== before) {
    await writeFile(file, after, 'utf8');
    console.log(`✓ ${file} — ${changes} replacements`);
  } else {
    console.log(`· ${file} — no changes`);
  }
}

await apply('js/translations.js', translationsFixes);
await apply('index.html', indexFixes);

console.log('\nDone. Run grep to verify no stale prices remain.');
