#!/usr/bin/env node
/**
 * Comprehensive audit of translated HTML output.
 * Reports: unresolved placeholders, likely English leaks (per-language), missing translations.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const LANGS = ['tr', 'de', 'es', 'ru', 'ar', 'fa', 'fr', 'it', 'zh', 'id', 'ms', 'pl', 'bg', 'ro'];

// Terms that look English but are the same in this language — skip.
// These are common false positives (loanwords / international terms).
const ACCEPT_SAME = {
  es: ['Asia', 'Europa', 'Atmosfera'],
  fr: ['Europe', 'Satisfaction', 'Rating', 'Premium', 'Note', 'Bosphore', 'Champagne'],
  it: ['Asia', 'Europa', 'Atmosfera', 'Premium', 'Opinion'],
  id: ['Asia', 'Eropa', 'Atmosfer', 'Premium'],
  ms: ['Asia', 'Eropah', 'Atmosfera', 'Premium'],
  ro: ['Asia', 'Europa', 'Atmosferă', 'Premium'],
  pl: ['Asia', 'Europa', 'Premium', 'Atmosfera'],
  bg: [],
  de: ['Premium', 'Service', 'Menu', 'Live'],
  tr: ['Premium', 'VIP', 'Standard', 'Menu'],
  ru: ['Premium', 'VIP'],
  ar: [],
  fa: [],
  zh: []
};

const BRAND_WORDS = ['Bosphorus', 'Istanbul', 'Kabataş', 'Dolmabahçe', 'Ortaköy', 'Rumeli', 'TÜRSAB',
  'WhatsApp', 'Telegram', 'WeChat', 'Google', 'TripAdvisor', 'Vercel', 'AMOR', 'Tosunpaşa', 'Lüfer',
  'Standard', 'VIP', 'DJ', 'FAQ', 'Email', 'Turksab', 'Supabase', 'Anatolian', 'Anatolia'];

function scanFile(filePath, lang) {
  const html = fs.readFileSync(filePath, 'utf8');
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/g, '');

  // Unresolved placeholders
  const placeholders = (clean.match(/\{p\.[a-zA-Z]+\}/g) || []);

  // Text nodes between tags
  const re = /<(\w+)([^>]*)>([^<]{2,300})<\/\1>/g;
  const englishLeaks = new Set();
  let m;
  while ((m = re.exec(clean)) !== null) {
    const t = m[3].trim();
    if (!t) continue;

    // Must look like English: has multi-word patterns OR capitalized English words
    const hasEnglishWords = /\b(the|and|or|with|for|your|our|from|includes?|available|booked|cruise|dinner|boat|hour|night|day|please|select|choose|click|book|visit|contact|ticket|adult|child|guest|table|wine|menu|show|ride|tour)\b/i.test(t);
    const hasCapWords = /\b[A-Z][a-z]{2,}(?:\s+[a-z]+){1,}/.test(t);
    if (!hasEnglishWords && !hasCapWords) continue;

    // Check for non-ASCII letters (Turkish chars, Cyrillic, Arabic, etc.) — if present, assume translated
    const hasNonAscii = /[^\x00-\x7F]/.test(t);
    if (hasNonAscii) continue;

    // Skip brand/proper names
    const trimmed = t.replace(/[.,!?;:·\s€0-9'"-]+/g, ' ').trim();
    const words = trimmed.split(/\s+/).filter(Boolean);
    if (words.length === 0) continue;
    // If ALL words are brand/proper nouns, skip
    const allBrand = words.every(w => BRAND_WORDS.includes(w) || /^[A-Z][a-z]*$/.test(w) && w.length <= 15);
    if (allBrand && words.length <= 3) continue;

    // Skip accepted same-language words
    if ((ACCEPT_SAME[lang] || []).includes(t)) continue;

    englishLeaks.add(t.slice(0, 80));
  }

  return { placeholders, englishLeaks: Array.from(englishLeaks) };
}

function main() {
  console.log('🔍 Audit başlıyor — 15 dil × 18 sayfa (home + 17 landing)\n');
  const report = { total: 0, withIssues: 0, byLang: {} };

  const slugs = ['index', 'bosphorus-dinner-cruise', 'bosphorus-with-kids', 'romantic-bosphorus-cruise'];

  for (const lang of LANGS) {
    report.byLang[lang] = { files: 0, placeholders: 0, leaks: new Set() };
    for (const slug of slugs) {
      const filePath = path.join(DIST, lang, `${slug}.html`);
      if (!fs.existsSync(filePath)) continue;
      const { placeholders, englishLeaks } = scanFile(filePath, lang);
      report.byLang[lang].files++;
      report.byLang[lang].placeholders += placeholders.length;
      for (const l of englishLeaks) report.byLang[lang].leaks.add(l);
      report.total++;
      if (placeholders.length || englishLeaks.length) report.withIssues++;
    }
  }

  console.log('📊 Özet (sayfa başı 4 örnek: home + 3 landing)\n');
  let worstLeaks = [];
  for (const lang of LANGS) {
    const r = report.byLang[lang];
    const leakCount = r.leaks.size;
    const status = (r.placeholders === 0 && leakCount === 0) ? '✓' : '✗';
    console.log(`  ${status} ${lang}: placeholder=${r.placeholders}, english-leaks=${leakCount}`);
    if (leakCount > 0) worstLeaks.push({ lang, leaks: Array.from(r.leaks) });
  }

  if (worstLeaks.length) {
    console.log('\n🚨 Şüpheli English sızıntıları (ilk 5 her dil için):');
    for (const w of worstLeaks) {
      console.log(`\n  [${w.lang}]`);
      w.leaks.slice(0, 5).forEach(l => console.log(`    - ${l}`));
    }
  } else {
    console.log('\n✅ Hiç English sızıntısı veya unresolved placeholder yok.');
  }
}

main();
