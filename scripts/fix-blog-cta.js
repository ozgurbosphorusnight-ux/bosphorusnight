#!/usr/bin/env node
/**
 * Replace WhatsApp CTA block in blog posts with city-guide style CTA
 * that links to language-specific index (/de/, /tr/, ...).
 *
 * - Source CTA text/copy is taken from each language's city-guide index.html
 * - Floating WhatsApp button is NOT touched
 * - Run from repo root: node scripts/fix-blog-cta.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const LANGS = [
  'ar', 'bg', 'de', 'es', 'fa', 'fr', 'hi', 'id', 'it',
  'ja', 'ko', 'ms', 'pl', 'ro', 'ru', 'tr', 'uk', 'ur', 'zh'
];

const BLOG_SLUGS = [
  'best-bosphorus-dinner-cruise-istanbul',
  'bosphorus-cruise-with-kids-family',
  'bosphorus-sunset-cruise-guide',
  'istanbul-cruise-tonight-last-minute',
  'things-to-know-istanbul-boat-tour',
];

// Match the OLD blog CTA block (with or without <!-- CTA --> comment).
// Stops at the first </div> AFTER the closing </a>.
const OLD_CTA_RE = /(?:<!-- CTA -->\s*\n\s*)?<div class="bg-\[#152240\] border border-\[#c9a84c\]\/20 rounded-2xl p-8 text-center mt-12">[\s\S]*?<\/a>\s*<\/div>/;

const RTL_LANGS = new Set(['ar', 'fa', 'ur']);

// Extract from city-guide: h3 text, p text, button text
function extractCityGuideCta(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  // Match the city-guide CTA div regardless of comment presence.
  // Structure: <div class="mt-20 max-w-3xl mx-auto text-center bg-gradient-to-br ..."> ... </div>
  const m = html.match(/<div class="mt-20 max-w-3xl[^"]*bg-gradient-to-br[^"]*"[^>]*>([\s\S]*?)<\/div>\s*\n\s*<\/main>/);
  if (!m) throw new Error(`CTA not found in ${htmlPath}`);
  return parseCtaInner(m[1]);
}

function parseCtaInner(inner) {
  const h3 = inner.match(/<h3[^>]*>\s*([\s\S]*?)\s*<\/h3>/);
  const p  = inner.match(/<p[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  const a  = inner.match(/<a href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
  if (!h3 || !p || !a) throw new Error('Could not parse CTA inner');

  // Button text: strip surrounding whitespace and trailing <span>...</span>
  let btn = a[2].replace(/<span[^>]*>[\s\S]*?<\/span>/g, '').trim();

  return {
    h3: h3[1].trim(),
    p: p[1].trim(),
    btn,
  };
}

function buildNewCta(lang, cta) {
  const href = lang === 'en' ? '/' : `/${lang}/`;
  const arrow = RTL_LANGS.has(lang) ? '&larr;' : '&rarr;';
  return `<!-- CTA -->
      <div class="mt-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-[#152240] to-[#101a30] border border-[#c9a84c]/20 rounded-2xl p-10">
        <h3 style="font-family:'Playfair Display',serif" class="text-2xl md:text-3xl font-bold text-white mb-4">
          ${cta.h3}
        </h3>
        <p class="text-white/60 mb-8">
          ${cta.p}
        </p>
        <a href="${href}" class="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b86a] text-[#0b1120] font-semibold px-8 py-3 rounded-full transition-colors">
          ${cta.btn}
          <span>${arrow}</span>
        </a>
      </div>`;
}

function processFile(filePath, newCta) {
  const html = fs.readFileSync(filePath, 'utf8');
  if (!OLD_CTA_RE.test(html)) {
    return { path: filePath, status: 'skip (no old CTA pattern)' };
  }
  const updated = html.replace(OLD_CTA_RE, newCta);
  if (updated === html) {
    return { path: filePath, status: 'skip (no change)' };
  }
  fs.writeFileSync(filePath, updated, 'utf8');
  return { path: filePath, status: 'updated' };
}

// ---- main ----
const results = [];

// EN (root blog/)
{
  const enCta = extractCityGuideCta(path.join(ROOT, 'city-guide', 'index.html'));
  const newBlock = buildNewCta('en', enCta);
  for (const slug of BLOG_SLUGS.concat(['best-time-bosphorus-cruise'])) {
    const file = path.join(ROOT, 'blog', `${slug}.html`);
    if (fs.existsSync(file)) {
      results.push(processFile(file, newBlock));
    }
  }
}

// Each i18n language
for (const lang of LANGS) {
  const cgPath = path.join(ROOT, 'src', 'city-guide-i18n', lang, 'index.html');
  if (!fs.existsSync(cgPath)) {
    console.warn(`⚠ city-guide missing for ${lang}: ${cgPath}`);
    continue;
  }
  let cta;
  try {
    cta = extractCityGuideCta(cgPath);
  } catch (e) {
    console.warn(`⚠ Could not extract CTA for ${lang}: ${e.message}`);
    continue;
  }
  const newBlock = buildNewCta(lang, cta);
  for (const slug of BLOG_SLUGS) {
    const file = path.join(ROOT, 'src', 'blog-i18n', lang, `${slug}.html`);
    if (fs.existsSync(file)) {
      results.push(processFile(file, newBlock));
    }
  }
}

const updated = results.filter(r => r.status === 'updated');
const skipped = results.filter(r => r.status !== 'updated');
console.log(`✓ Updated ${updated.length} files`);
if (skipped.length) {
  console.log(`⚠ Skipped ${skipped.length} files:`);
  skipped.forEach(s => console.log(`  - ${s.status}: ${path.relative(ROOT, s.path)}`));
}
