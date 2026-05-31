#!/usr/bin/env node
/**
 * Restore JSON-LD URL properties that fix-bosphorus-localization.js turned into bare
 * sequential numbers (URL-placeholder leak) inside src/blog-i18n/* and src/city-guide-i18n/*.
 *
 * Correct URLs are recovered from the EN source schema (blog/, city-guide/). Some lang files
 * keep the compact inline formatting, others were re-serialized (expanded, 2-space). So we do
 * NOT rely on line-alignment — we match each corruption by its JSON CONTEXT with multi-line
 * regexes (\s also matches newlines), which handles both layouts.
 *
 * The four corruption sites (always in the Article / BlogPosting block):
 *   image                  → EN's image url (per-article, not localized; /assets/)
 *   author.url             → EN's author url   (bare domain, not localized)
 *   publisher.logo.url     → EN's logo url      (/assets/, not localized)
 *   mainEntityOfPage.@id   → EN's page url with /{lang}/ inserted (page path → localized)
 *
 * Deterministic. No network / no LLM. Idempotent: already-correct files are left untouched.
 *
 * Usage: node scripts/restore-schema-urls.js [lang]
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const SETS = [
  { langDir: 'src/blog-i18n', enDir: 'blog' },
  { langDir: 'src/city-guide-i18n', enDir: 'city-guide' },
];
const onlyLang = process.argv[2] || null;

// Insert /{lang}/ into a bosphorusnight page-path URL. Asset URLs and the bare domain stay.
function localizeUrl(u, lang) {
  const m = u.match(/^(https:\/\/www\.bosphorusnight\.com)(\/[^"'\s)]*)?$/);
  if (!m) return u;
  const rest = m[2] || '';
  if (rest === '' || rest === '/') return u;        // bare domain (author url)
  if (rest.startsWith('/assets/')) return u;        // asset (image / logo)
  if (/^\/[a-z]{2}\//.test(rest)) return u;         // already localized
  return m[1] + '/' + lang + rest;                  // page path → add /{lang}/
}

const localizeAll = (s, lang) =>
  s.replace(/https:\/\/www\.bosphorusnight\.com(\/[^"'\s)]*)?/g, (u) => localizeUrl(u, lang));

const grab = (s, re) => { const m = s.match(re); return m ? m[1] : null; };

// JSON-LD blocks of a document.
const blocksOf = (html) => [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);

let filesFixed = 0, sitesFixed = 0, stillBad = [];

for (const { langDir, enDir } of SETS) {
  const absLangDir = path.join(ROOT, langDir);
  if (!fs.existsSync(absLangDir)) continue;
  for (const lang of fs.readdirSync(absLangDir)) {
    if (onlyLang && lang !== onlyLang) continue;
    const dir = path.join(absLangDir, lang);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!name.endsWith('.html')) continue;
      const enFile = path.join(ROOT, enDir, name);
      const langFile = path.join(dir, name);
      if (!fs.existsSync(enFile)) continue;

      const en = fs.readFileSync(enFile, 'utf8');
      let html = fs.readFileSync(langFile, 'utf8');
      const before = html;

      // Recover canonical values from EN.
      const enImage   = grab(en, /"image":\s*"([^"]*)"/);
      const enAuthor  = grab(en, /"author":\s*\{[^}]*?"url":\s*"([^"]*)"/) || 'https://www.bosphorusnight.com';
      const enLogo    = grab(en, /"logo":\s*\{[^}]*?"url":\s*"([^"]*)"/);
      const enMainId  = grab(en, /"mainEntityOfPage":\s*\{[^}]*?"@id":\s*"([^"]*)"/);
      const mainId    = enMainId ? localizeUrl(enMainId, lang) : null;

      let n = 0;
      const sub = (re, repl) => { html = html.replace(re, (...a) => { n++; return repl(...a); }); };

      // image: bare number immediately before "datePublished" (handles minified, compact & expanded)
      if (enImage) sub(/(,\s*)\d+(\s*,\s*"datePublished")/g, (_, p1, p2) => `${p1}"image": "${enImage}"${p2}`);
      // author.url: bare number after author's "name"
      sub(/("author":\s*\{[^}]*?"name":\s*"[^"]*",\s*)\d+(\s*\})/g, (_, p1, p2) => `${p1}"url": "${enAuthor}"${p2}`);
      // publisher.logo.url: bare number after logo's @type ImageObject
      if (enLogo) sub(/("logo":\s*\{\s*"@type":\s*"ImageObject",\s*)\d+(\s*\})/g, (_, p1, p2) => `${p1}"url": "${enLogo}"${p2}`);
      // mainEntityOfPage.@id: bare number after WebPage @type
      if (mainId) sub(/("mainEntityOfPage":\s*\{\s*"@type":\s*"WebPage",\s*)\d+(\s*\})/g, (_, p1, p2) => `${p1}"@id": "${mainId}"${p2}`);

      // --- Listing / index pages (Blog, CollectionPage) — top-level url + list arrays ---
      // top-level "url": bare number before "inLanguage" (any @type)
      const enTopUrl = grab(en, /"url":\s*"([^"]*)"\s*,\s*"inLanguage"/);
      if (enTopUrl) sub(/(,\s*)\d+(\s*,\s*"inLanguage")/g, (_, p1, p2) => `${p1}"url": "${localizeUrl(enTopUrl, lang)}"${p2}`);
      // list arrays (blogPost / hasPart) on index pages: KEEP the translated item names, fix
      // ONLY the corrupted url — match each item's (translated) name to a sibling article's
      // headline → use that article's slug url. Works even when item order/count ≠ EN.
      if (/"(?:blogPost|hasPart)":\s*\[/.test(html)) {
        // sibling article records: translated headline + datePublished → localized url
        const arts = [];
        for (const af of fs.readdirSync(dir)) {
          if (af === 'index.html' || !af.endsWith('.html')) continue;
          const ac = fs.readFileSync(path.join(dir, af), 'utf8');
          arts.push({
            headline: grab(ac, /"headline":\s*"([^"]*)"/) || '',
            date: grab(ac, /"datePublished":\s*"([^"]*)"/),
            url: `https://www.bosphorusnight.com/${lang}/${enDir}/${af.replace(/\.html$/, '')}`,
          });
        }
        const commonLen = (a, b) => { let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return i; };
        const score = (h, nm) => !nm ? 0 :
          ((h.startsWith(nm) || nm.startsWith(h) || h.includes(nm) || nm.includes(h)) ? 1000 : 0) + commonLen(h, nm);
        const pick = (cands, nm) => {
          if (!cands.length) return null;
          if (cands.length === 1) return cands[0].url;
          let best = null, bestS = -1;
          for (const c of cands) { const s = score(c.headline, nm); if (s > bestS) { bestS = s; best = c; } }
          return best ? best.url : null;
        };
        // primary key = datePublished (≈unique per article); name disambiguates same-date ties
        const findByName = (nm, date) => {
          const sameDate = date ? arts.filter(a => a.date === date) : [];
          return pick(sameDate.length ? sameDate : arts, nm);
        };
        for (const key of ['blogPost', 'hasPart']) {
          const arrRe = new RegExp(`("${key}":\\s*\\[)([\\s\\S]*?)(\\])`);
          const enM = en.match(arrRe);
          const enItems = enM ? (enM[2].match(/\{[^{}]*\}/g) || []) : [];
          html = html.replace(arrRe, (full, open, body, close) => {
            const langItems = body.match(/\{[^{}]*\}/g) || [];
            const positional = enItems.length > 0 && langItems.length === enItems.length;
            let i = -1;
            const fixed = body.replace(/\{[^{}]*\}/g, (item) => {
              i++;
              if (!/,\s*\d+\s*[,}]/.test(item)) return item; // this item's url not corrupted
              let url = null;
              if (positional) {                                  // same count as EN → map by position
                const eu = (enItems[i].match(/"(?:url|item)":\s*"([^"]*)"/) || [])[1];
                if (eu) url = localizeUrl(eu, lang);
              }
              if (!url) url = findByName(
                (item.match(/"(?:headline|name)":\s*"([^"]*)"/) || [])[1],
                (item.match(/"datePublished":\s*"([^"]*)"/) || [])[1]);
              if (!url) return item;
              n++;
              return item.replace(/,\s*\d+(\s*[,}])/, `, "url": "${url}"$1`);
            });
            return open + fixed + close;
          });
        }
      }

      if (html !== before) { fs.writeFileSync(langFile, html); filesFixed++; sitesFixed += n; }

      // Verify every block now parses; record stragglers.
      for (const blk of blocksOf(html)) {
        try { JSON.parse(blk); } catch { stillBad.push(`${lang}/${name}`); break; }
      }
    }
  }
}

console.log(`\n✅ Restore tamam. Düzeltilen dosya: ${filesFixed}, geri yüklenen URL: ${sitesFixed}`);
if (stillBad.length) {
  console.log(`\n⚠️  HÂLÂ parse olmayan ${stillBad.length} dosya (ele alınmamış bozulma):`);
  console.log('   ' + [...new Set(stillBad)].slice(0, 30).join('\n   '));
} else {
  console.log('🎉 Tüm JSON-LD blokları geçerli.');
}
