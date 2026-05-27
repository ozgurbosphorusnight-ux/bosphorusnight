// Merge 12 new langs (cs,da,el,fi,hu,lv,nl,no,pt,sk,sl,sv) into js/translations.js T object.
// Source: content/ui-translations/<lang>.json (flat key→string) — authoritative.
// Target: js/translations.js — surgical regex insertion into each "key": { ... } block.
// Strategy:
//   1. Strip any existing values for the 12 NEW_LANGS from each block (fixes pre-existing garbage).
//   2. Append the JSON values for whichever NEW_LANGS have a non-empty value for that key.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TRANS_FILE = path.join(ROOT, 'js', 'translations.js');
const NEW_LANGS = ['cs', 'da', 'el', 'fi', 'hu', 'lv', 'nl', 'no', 'pt', 'sk', 'sl', 'sv'];

const sources = {};
for (const lang of NEW_LANGS) {
  sources[lang] = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'ui-translations', `${lang}.json`), 'utf8'));
}

let fullSrc = fs.readFileSync(TRANS_FILE, 'utf8');

// Temporarily replace `{placeholder}` patterns inside strings (e.g. `{p.unlimited}`) with a sentinel,
// so the body regex `[^{}]*?` can traverse them. We restore the original braces after substitution.
const PLACEHOLDER_TOKEN = 'PH';
const placeholders = [];
fullSrc = fullSrc.replace(/\{[a-zA-Z][a-zA-Z0-9_.-]*\}/g, (m) => {
  placeholders.push(m);
  return PLACEHOLDER_TOKEN + (placeholders.length - 1) + PLACEHOLDER_TOKEN;
});

// Operate ONLY inside `const T = { ... };` — the top comments include false-positive `"hero.badge": {...}` examples.
const tStartMatch = fullSrc.match(/const\s+T\s*=\s*\{/);
if (!tStartMatch) throw new Error('Could not locate `const T = {`');
const tBodyStart = tStartMatch.index + tStartMatch[0].length;
const tEndRe = /\n\}\s*;\s*\n\s*\n\s*\n?\s*\/\/\s*Node\.js build-time export/;
const tEndMatch = fullSrc.slice(tBodyStart).match(tEndRe);
if (!tEndMatch) throw new Error('Could not locate end of T');
const tBodyEndOffset = tBodyStart + tEndMatch.index + 1;
const before = fullSrc.slice(0, tBodyStart);
const after = fullSrc.slice(tBodyEndOffset);
let src = fullSrc.slice(tBodyStart, tBodyEndOffset);

const escapeStr = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '');

// Strip any existing NEW_LANGS values from a body string.
// Matches:  `, lang: "value"`   or   `lang: "value", `   or   `lang: "value"` (standalone)
// Be careful: we must only strip top-level lang keys, not inside string values.
// Assumption: string values don't contain `, langCode: "` patterns starting at a new whitespace token.
function stripNewLangs(body) {
  let out = body;
  const valPattern = `\\"(?:\\\\.|[^\\"\\\\])*\\"`;
  for (const lang of NEW_LANGS) {
    // Form A: `, lang: "..."` — preceded by comma (most common; strip the comma WITH the entry)
    const reA = new RegExp(`,\\s*${lang}\\s*:\\s*${valPattern}`, 'g');
    out = out.replace(reA, '');
    // Form B: `lang: "...",` — followed by comma (first in block or after newline; strip entry WITH trailing comma)
    const reB = new RegExp(`${lang}\\s*:\\s*${valPattern}\\s*,\\s*`, 'g');
    out = out.replace(reB, '');
    // Form C: lone `lang: "..."` with no surrounding commas (only entry on its line)
    const reC = new RegExp(`${lang}\\s*:\\s*${valPattern}`, 'g');
    out = out.replace(reC, '');
  }
  // Cleanup: lines that became empty (only whitespace between two newlines) — collapse.
  out = out.replace(/\n[ \t]*\n/g, '\n');
  // Cleanup: trailing whitespace+comma right before end (if final entry got stripped, leaving `prev,` dangling)
  out = out.replace(/,\s*$/, '');
  return out;
}

function buildAdditions(key) {
  const items = [];
  for (const lang of NEW_LANGS) {
    const val = sources[lang][key];
    if (val === undefined || val === null || val === '') continue;
    items.push(`${lang}: "${escapeStr(val)}"`);
  }
  return items;
}

// Unified pass: match any block whose body contains NO `{` or `}` (so values can't have braces).
// Captures multi-line AND single-line blocks. Body uses [^{}]*? so it can't span past another block.
const blockRe = /("([a-zA-Z][a-zA-Z0-9._-]*)"\s*:\s*\{)([^{}]*?)(\}\s*,?\s*\n)/g;
let processed = 0, touched = 0, multiLine = 0, inline = 0;

src = src.replace(blockRe, (full, open, key, body, close) => {
  processed++;
  if (/\bflag\s*:/.test(body)) return full; // LANGUAGES entries (shouldn't appear inside T anyway)

  const isMultiLine = body.includes('\n');
  const cleaned = stripNewLangs(body);
  const additions = buildAdditions(key);
  if (additions.length === 0) return open + cleaned + close;

  const cleanedTrim = cleaned.replace(/\s+$/, '');
  const lastChar = cleanedTrim.slice(-1);
  let newBody;
  if (isMultiLine) {
    newBody = (lastChar === ',' ? cleanedTrim : cleanedTrim + ',') + `\n    ${additions.join(', ')}\n  `;
  } else {
    newBody = (lastChar === ',' ? cleanedTrim + ' ' : cleanedTrim + ', ') + additions.join(', ') + ' ';
  }
  touched++;
  if (isMultiLine) multiLine++; else inline++;
  return open + newBody + close;
});

// Restore placeholders: PH<N>PH → original `{...}`
let restored = before + src + after;
restored = restored.replace(new RegExp(PLACEHOLDER_TOKEN + '(\\d+)' + PLACEHOLDER_TOKEN, 'g'), (_, n) => placeholders[Number(n)]);

fs.writeFileSync(TRANS_FILE, restored, 'utf8');
console.log(`Total blocks processed: ${processed}, modified ${touched} (multi-line ${multiLine}, inline ${inline}).`);
console.log(`Restored ${placeholders.length} placeholder tokens.`);
