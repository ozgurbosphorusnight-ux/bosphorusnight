#!/usr/bin/env node
/**
 * Inject "Our Boat" nav link into all dist/{lang}/index.html files.
 * Reads slug + label per language from data/fleet-i18n.json.
 * Inserts after "Cruises/Paketler" link in:
 *   - Desktop nav (nav.cruises → nav.our_boat)
 *   - Mobile menu (mobile-nav-link)
 *   - Footer Quick Links
 *
 * Usage: node scripts/inject-fleet-nav.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const I18N_PATH = path.join(ROOT, 'data', 'fleet-i18n.json');

const i18n = JSON.parse(fs.readFileSync(I18N_PATH, 'utf8'));
const langs = i18n.languages;

let totalUpdated = 0;
let totalSkipped = 0;

for (const [code, data] of Object.entries(langs)) {
  if (!data.content) continue;

  const indexPath = data.url_prefix
    ? path.join(DIST, data.url_prefix.replace(/\/$/, ''), 'index.html')
    : path.join(DIST, 'index.html');

  if (!fs.existsSync(indexPath)) {
    console.log(`  ⏭  ${code} — ${path.relative(ROOT, indexPath)} not found, skip`);
    totalSkipped++;
    continue;
  }

  let html = fs.readFileSync(indexPath, 'utf8');
  const ourBoatLabel = data.content.nav.our_boat;
  const url = data.url_prefix
    ? `/${data.url_prefix}${data.slug}`
    : `/${data.slug}`;

  // Skip if already injected
  if (html.includes('data-i18n="nav.our_boat"')) {
    console.log(`  ⏭  ${code} — already has our_boat link, skip`);
    totalSkipped++;
    continue;
  }

  // 1) Desktop nav: insert after nav.cruises link
  const desktopPattern = /(<a href="#boats" class="nav-link[^>]*data-i18n="nav\.cruises"[^>]*>[^<]*<\/a>)/;
  const desktopInject = `$1\n          <a href="${url}" class="nav-link text-sm font-medium text-white/80 hover:text-gold transition-colors" data-i18n="nav.our_boat">${ourBoatLabel}</a>`;
  const desktopBefore = html;
  html = html.replace(desktopPattern, desktopInject);
  const desktopChanged = html !== desktopBefore;

  // 2) Mobile nav: insert after nav.cruises mobile link
  const mobilePattern = /(<a href="#boats" class="mobile-nav-link[^>]*data-i18n="nav\.cruises"[^>]*>[^<]*<\/a>)/;
  const mobileInject = `$1\n        <a href="${url}" class="mobile-nav-link text-white/80 hover:text-gold py-2 transition-colors" data-i18n="nav.our_boat">${ourBoatLabel}</a>`;
  const mobileBefore = html;
  html = html.replace(mobilePattern, mobileInject);
  const mobileChanged = html !== mobileBefore;

  // 3) Footer Quick Links: insert after nav.cruises footer link
  const footerPattern = /(<li><a href="#boats" class="text-white\/40 hover:text-gold[^>]*data-i18n="nav\.cruises"[^>]*>[^<]*<\/a><\/li>)/;
  const footerInject = `$1\n              <li><a href="${url}" class="text-white/40 hover:text-gold text-sm transition-colors" data-i18n="nav.our_boat">${ourBoatLabel}</a></li>`;
  const footerBefore = html;
  html = html.replace(footerPattern, footerInject);
  const footerChanged = html !== footerBefore;

  if (desktopChanged || mobileChanged || footerChanged) {
    fs.writeFileSync(indexPath, html);
    const marks = [
      desktopChanged ? 'D' : '-',
      mobileChanged ? 'M' : '-',
      footerChanged ? 'F' : '-'
    ].join('');
    console.log(`  ✅ ${code} [${marks}] → ${path.relative(ROOT, indexPath)}`);
    totalUpdated++;
  } else {
    console.log(`  ⚠️  ${code} — no nav patterns matched in ${path.relative(ROOT, indexPath)}`);
    totalSkipped++;
  }
}

console.log(`\n🎉 Done. Updated ${totalUpdated} files, skipped ${totalSkipped}.`);
