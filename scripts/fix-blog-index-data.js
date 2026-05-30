#!/usr/bin/env node
/**
 * Same root-cause class as fill-blog-chrome: the 11 newer-language data files
 * use an OLD indexData schema (pageTitle/pageDescription/subtitle) but
 * generate-blog-i18n.js reads title/description/intro -> blog index renders
 * "undefined" in <title>, meta, and subtitle.
 *
 * Fix: alias the existing values under the keys the template expects. Values
 * are the file's OWN existing strings — no translation, no invention.
 * Insertion is done right after `indexData: {` (always comma-safe).
 *
 * DRY_RUN=1 prints planned changes.
 */
const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, 'blog-i18n-data');
const DRY = !!process.env.DRY_RUN;
const LANGS = ['cs', 'da', 'el', 'fi', 'hu', 'lv', 'nl', 'no', 'sk', 'sl', 'sv']; // pt already correct
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";

let n = 0;
for (const lang of LANGS) {
  const file = path.join(DATA, `${lang}.js`);
  const d = require(file).indexData || {};
  if (d.title !== undefined && d.description !== undefined && d.intro !== undefined) {
    console.log(`  ${lang}: already ok`); continue;
  }
  const map = { title: d.pageTitle, description: d.pageDescription, intro: d.subtitle };
  const adds = Object.entries(map).filter(([k, v]) => d[k] === undefined && v !== undefined);
  if (!adds.length) { console.log(`  ${lang}: nothing to add (source keys missing!)`); continue; }

  let src = fs.readFileSync(file, 'utf8');
  const inject = adds.map(([k, v]) => `\n    ${k}: ${q(v)},`).join('');
  const next = src.replace(/(indexData:\s*\{)/, `$1${inject}`);
  if (next === src) { console.log(`  ! ${lang}: indexData not found`); continue; }
  console.log(`  ${lang}: +${adds.map(a => a[0]).join(', ')}`);
  if (!DRY) { fs.writeFileSync(file, next, 'utf8'); n++; }
}
console.log(`${DRY ? '[DRY] ' : ''}done (${DRY ? 'dry' : n + ' files'})`);
