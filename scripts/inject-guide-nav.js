#!/usr/bin/env node
/**
 * Inject "Guide" nav link into all dist/{lang}/index.html files.
 * Reads slug + label per language from data/guide-i18n.json.
 *
 * Placement order (whichever matches first):
 *   1. After nav.our_boat link (Cruises → Our Boat → Guide)
 *   2. After nav.cruises link  (Cruises → Guide) — fallback
 *
 * Injects into:
 *   - Desktop nav (.nav-link)
 *   - Mobile menu (.mobile-nav-link)
 *   - Footer Quick Links
 *
 * Usage: node scripts/inject-guide-nav.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const I18N_PATH = path.join(ROOT, 'data', 'guide-i18n.json');

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
  const guideLabel = data.content.nav.guide;
  const url = data.url_prefix
    ? `/${data.url_prefix}${data.slug}`
    : `/${data.slug}`;

  if (html.includes('data-i18n="nav.guide"')) {
    console.log(`  ⏭  ${code} — already has guide link, skip`);
    totalSkipped++;
    continue;
  }

  // 1) Desktop nav — try our_boat first, fall back to cruises.
  const desktopOurBoat = /(<a href="[^"]+" class="nav-link[^>]*data-i18n="nav\.our_boat"[^>]*>[^<]*<\/a>)/;
  const desktopCruises = /(<a href="#boats" class="nav-link[^>]*data-i18n="nav\.cruises"[^>]*>[^<]*<\/a>)/;
  const desktopInject = `$1\n          <a href="${url}" class="nav-link text-sm font-medium text-white/80 hover:text-gold transition-colors" data-i18n="nav.guide">${guideLabel}</a>`;
  const desktopBefore = html;
  if (desktopOurBoat.test(html)) {
    html = html.replace(desktopOurBoat, desktopInject);
  } else {
    html = html.replace(desktopCruises, desktopInject);
  }
  const desktopChanged = html !== desktopBefore;

  // 2) Mobile nav
  const mobileOurBoat = /(<a href="[^"]+" class="mobile-nav-link[^>]*data-i18n="nav\.our_boat"[^>]*>[^<]*<\/a>)/;
  const mobileCruises = /(<a href="#boats" class="mobile-nav-link[^>]*data-i18n="nav\.cruises"[^>]*>[^<]*<\/a>)/;
  const mobileInject = `$1\n        <a href="${url}" class="mobile-nav-link text-white/80 hover:text-gold py-2 transition-colors" data-i18n="nav.guide">${guideLabel}</a>`;
  const mobileBefore = html;
  if (mobileOurBoat.test(html)) {
    html = html.replace(mobileOurBoat, mobileInject);
  } else {
    html = html.replace(mobileCruises, mobileInject);
  }
  const mobileChanged = html !== mobileBefore;

  // 3) Footer Quick Links
  const footerOurBoat = /(<li><a href="[^"]+" class="text-white\/40 hover:text-gold[^>]*data-i18n="nav\.our_boat"[^>]*>[^<]*<\/a><\/li>)/;
  const footerCruises = /(<li><a href="#boats" class="text-white\/40 hover:text-gold[^>]*data-i18n="nav\.cruises"[^>]*>[^<]*<\/a><\/li>)/;
  const footerInject = `$1\n              <li><a href="${url}" class="text-white/40 hover:text-gold text-sm transition-colors" data-i18n="nav.guide">${guideLabel}</a></li>`;
  const footerBefore = html;
  if (footerOurBoat.test(html)) {
    html = html.replace(footerOurBoat, footerInject);
  } else {
    html = html.replace(footerCruises, footerInject);
  }
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
