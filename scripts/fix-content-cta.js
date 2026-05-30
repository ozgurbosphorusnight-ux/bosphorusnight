#!/usr/bin/env node
/**
 * fix-content-cta.js
 *
 * Funnel fix: blog + city-guide content pages have their primary gold CTA
 * button (class "inline-flex ... bg-[#c9a84c]") pointing at the homepage
 * ("/" for EN, "/{lang}/" for i18n). That leaks readers onto the homepage
 * instead of the bookable product page.
 *
 * This rewrites ONLY that gold CTA button's href to the language- and
 * intent-appropriate product/landing page:
 *   - romantic*            -> romantic-bosphorus-cruise
 *   - kids|family|children -> bosphorus-with-kids
 *   - everything else      -> bosphorus-dinner-cruise
 * EN target:   /{prod}
 * i18n target: /{lang}/{prod}
 *
 * Operates on SOURCE files (build copies these into dist):
 *   EN:   blog/*.html, city-guide/*.html
 *   i18n: src/blog-i18n/{lang}/*.html, src/city-guide-i18n/{lang}/*.html
 *
 * Idempotent. index.html (listing pages) are skipped.
 * Dry run:  DRY_RUN=1 node scripts/fix-content-cta.js
 * Apply:    node scripts/fix-content-cta.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DRY = !!process.env.DRY_RUN;

// Gold CTA button: capture its href so we can replace it. Class marker keeps
// us from touching logo/home/footer links that also use href="/".
const CTA_RE = /(<a\s+href=")([^"]*)("\s+class="inline-flex items-center gap-2 bg-\[#c9a84c\])/g;

function productSlug(file) {
  const f = file.toLowerCase();
  if (f.includes('romantic')) return 'romantic-bosphorus-cruise';
  if (/kids|family|children/.test(f)) return 'bosphorus-with-kids';
  return 'bosphorus-dinner-cruise';
}

function targetHref(lang, file) {
  const prod = productSlug(file);
  return lang === 'en' ? `/${prod}` : `/${lang}/${prod}`;
}

// Collect (dir, lang) source roots that actually exist.
function roots() {
  const out = [];
  for (const d of ['blog', 'city-guide']) {
    const p = path.join(ROOT, d);
    if (fs.existsSync(p)) out.push({ dir: p, lang: 'en' });
  }
  for (const base of ['src/blog-i18n', 'src/city-guide-i18n']) {
    const bp = path.join(ROOT, base);
    if (!fs.existsSync(bp)) continue;
    for (const lang of fs.readdirSync(bp)) {
      const lp = path.join(bp, lang);
      if (fs.statSync(lp).isDirectory()) out.push({ dir: lp, lang });
    }
  }
  return out;
}

const stats = { changed: 0, already: 0, noCta: 0, files: 0 };
const noCtaList = [];

for (const { dir, lang } of roots()) {
  for (const name of fs.readdirSync(dir)) {
    if (!name.endsWith('.html') || name === 'index.html') continue;
    const fp = path.join(dir, name);
    if (!fs.statSync(fp).isFile()) continue;
    stats.files++;

    const html = fs.readFileSync(fp, 'utf8');
    const want = targetHref(lang, name);
    let found = false, dirty = false;

    const updated = html.replace(CTA_RE, (m, pre, oldHref, post) => {
      found = true;
      if (oldHref === want) return m;          // already correct
      dirty = true;
      return `${pre}${want}${post}`;
    });

    if (!found) { stats.noCta++; noCtaList.push(path.relative(ROOT, fp)); continue; }
    if (!dirty) { stats.already++; continue; }
    if (!DRY) fs.writeFileSync(fp, updated, 'utf8');
    stats.changed++;
  }
}

console.log(`${DRY ? '[DRY RUN] ' : ''}CTA href fix`);
console.log(`  scanned files : ${stats.files}`);
console.log(`  changed       : ${stats.changed}`);
console.log(`  already correct: ${stats.already}`);
console.log(`  no gold CTA   : ${stats.noCta}`);
if (noCtaList.length) {
  console.log(`  -- files without gold CTA (first 15) --`);
  noCtaList.slice(0, 15).forEach(f => console.log(`     ${f}`));
}
