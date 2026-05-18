/**
 * Shared helper: inline a single language's slice of T + LANGUAGES into the
 * built HTML, replacing the external <script src="js/translations.js"></script>
 * download (671 KB) with a small inline bootstrap (~10-15 KB per language).
 *
 * Output sayfası TR ise sadece TR + EN fallback değerlerini içerir; runtime'da
 * main.js'in 47 T[key][currentLang] çağrısı placeholder veya undefined görmez.
 */

// Each T[key] entry is an object like { en: "...", tr: "...", de: "...", ... }.
// We keep only the target lang + EN (fallback for keys missing in the target).
function filterTForLang(T, lang, subPrices) {
  const filtered = {};
  for (const [key, value] of Object.entries(T)) {
    if (!value || typeof value !== 'object') continue;
    const out = {};
    if (value[lang] !== undefined) {
      out[lang] = subPrices ? subPrices(value[lang]) : value[lang];
    }
    // Always include EN fallback for keys the target lang is missing.
    if (lang !== 'en' && value.en !== undefined) {
      out.en = subPrices ? subPrices(value.en) : value.en;
    }
    if (Object.keys(out).length > 0) filtered[key] = out;
  }
  return filtered;
}

// Escape "<" characters in JSON so values containing "</script>" can't break
// out of the inline <script> block (classic HTML-in-JSON injection risk).
// < parses to "<" in JS but is opaque to the HTML tokenizer, so the
// script block won't terminate early on a translation that happens to contain
// the substring "</script>".
function safeJson(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

// Emit the inline <script> block. LANGUAGES is tiny (~20 entries × 3 fields)
// so it's included as-is — the dropdown needs all language metadata to render.
function buildInlineTScript(T, LANGUAGES, lang, subPrices) {
  const filteredT = filterTForLang(T, lang, subPrices);
  return `<script>window.T=${safeJson(filteredT)};window.LANGUAGES=${safeJson(LANGUAGES)};</script>`;
}

// Replace the external script tag with the inline bootstrap. Handles both the
// pre-path-rewrite form ("js/translations.js") and post-rewrite form
// ("/js/translations.js") because build-home/build-pages run a path rewrite
// before this helper.
function replaceTranslationsScriptTag(html, inlineScript) {
  return html.replace(
    /<script\s+src="\/?js\/translations\.js"><\/script>/g,
    inlineScript
  );
}

module.exports = { filterTForLang, buildInlineTScript, replaceTranslationsScriptTag };
