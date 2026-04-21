#!/usr/bin/env node
/**
 * Full translation audit — 14 languages × all slugs in dist/{lang}/.
 * Checks: placeholders, html lang, title/desc, OG tags, alt texts,
 * data-activity/data-label, Latin leaks in non-Latin pages,
 * Turkish chars in EN, JSON-LD, Turkish comments.
 * Read-only: writes report to docs/translation-audit-2026-04-21.md and stdout.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT_MD = path.join(ROOT, 'docs', 'translation-audit-2026-04-21.md');

const LANGS = ['tr', 'de', 'es', 'ru', 'ar', 'fa', 'fr', 'it', 'zh', 'id', 'ms', 'pl', 'bg', 'ro'];
const EN_ONLY_FOLDER = 'en';

// Brand / proper nouns that are allowed as-is in any language
const BRAND = new Set([
  'Bosphorus', 'Istanbul', 'Kabataş', 'Kabatas', 'Dolmabahçe', 'Dolmabahce',
  'Ortaköy', 'Ortakoy', 'Rumeli', 'Anadolu', 'Üsküdar', 'Uskudar',
  'Beylerbeyi', 'Bebek', 'Çırağan', 'Ciragan', 'Hisarı', 'Hisari',
  'TÜRSAB', 'TURSAB', 'Turksab', 'AMOR', 'Tosunpaşa', 'Tosunpasa',
  'Lüfer', 'Lufer', 'Kız', 'Kulesi', 'FSM', 'VIP', 'DJ', 'FAQ',
  'WhatsApp', 'Telegram', 'WeChat', 'Google', 'TripAdvisor',
  'Premium', 'Standard', 'Night', 'Email', 'Supabase', 'Vercel',
  'Anatolia', 'Anatolian', 'Bosphore', 'Bosporus', 'Bosfor', 'Bosforo'
]);

// Scripts to determine dominant language
const SCRIPT_RE = {
  arabic: /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/,
  chinese: /[\u4E00-\u9FFF\u3400-\u4DBF]/,
  cyrillic: /[\u0400-\u04FF]/,
  turkishChars: /[şğıöçüŞĞİÖÇÜ]/,
};

const NON_LATIN_LANGS = new Set(['ar', 'fa', 'zh', 'ru', 'bg']);

// Regexes used across checks
const PLACEHOLDER_RE = /\{p\.[a-zA-Z]+\}|\{\{[^}]+\}\}/g;
const EN_WORDS_RE = /\b(the|and|or|with|for|your|our|from|includes?|available|booked|cruise|dinner|boat|hour|night|day|please|select|choose|click|book|visit|contact|ticket|adult|child|guest|table|wine|menu|show|ride|tour|welcome|aboard|entertainment|premium|luxury)\b/i;

function stripScripts(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<svg[\s\S]*?<\/svg>/g, '')
    .replace(/<noscript[\s\S]*?<\/noscript>/g, '');
}

function getLineNumber(html, idx) {
  return html.slice(0, idx).split('\n').length;
}

function extractAttr(html, tagName, attrName) {
  // Returns [{idx, value}]
  const re = new RegExp(`<${tagName}\\b[^>]*\\b${attrName}\\s*=\\s*"([^"]*)"`, 'gi');
  const results = [];
  let m;
  while ((m = re.exec(html)) !== null) {
    results.push({ idx: m.index, value: m[1] });
  }
  return results;
}

function extractMetaContent(html, propType, propName) {
  // propType: 'name' or 'property'
  const re = new RegExp(`<meta\\s+${propType}\\s*=\\s*"${propName}"\\s+content\\s*=\\s*"([^"]*)"`, 'i');
  const m = html.match(re);
  if (!m) return null;
  return { idx: html.indexOf(m[0]), value: m[1] };
}

function extractTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!m) return null;
  return { idx: html.indexOf(m[0]), value: m[1].trim() };
}

function isTextEnglish(text) {
  // Heuristic: has English functional words
  return EN_WORDS_RE.test(text);
}

function stripBrand(text) {
  return text
    .replace(/[€$£]\s*\d+([.,]\d+)?/g, '')
    .replace(/\d+/g, '')
    .replace(/[.,!?;:·\-—–|()\[\]'"«»""'']/g, ' ')
    .split(/\s+/)
    .filter(w => w && !BRAND.has(w))
    .join(' ');
}

function scanFile(filePath, lang) {
  const html = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  // 1. Unresolved placeholders
  let m;
  const placeRe = new RegExp(PLACEHOLDER_RE.source, 'g');
  while ((m = placeRe.exec(html)) !== null) {
    issues.push({
      cat: 'placeholder',
      line: getLineNumber(html, m.index),
      sample: m[0],
    });
  }

  // 2. <html lang>
  const htmlTag = html.match(/<html\s+[^>]*lang\s*=\s*"([^"]+)"/i);
  if (htmlTag && htmlTag[1] !== lang) {
    issues.push({
      cat: 'html-lang',
      line: getLineNumber(html, html.indexOf(htmlTag[0])),
      sample: `lang="${htmlTag[1]}" (expected "${lang}")`,
    });
  }

  // 3. <title>
  const title = extractTitle(html);
  if (title) {
    const brandStripped = stripBrand(title.value);
    const containsEN = isTextEnglish(brandStripped);
    if (NON_LATIN_LANGS.has(lang)) {
      // Expect non-latin script
      const expectScript = lang === 'ar' ? SCRIPT_RE.arabic
        : lang === 'fa' ? SCRIPT_RE.arabic
        : lang === 'zh' ? SCRIPT_RE.chinese
        : (lang === 'ru' || lang === 'bg') ? SCRIPT_RE.cyrillic
        : null;
      if (expectScript && !expectScript.test(title.value) && brandStripped.length > 0) {
        issues.push({
          cat: 'title-untranslated',
          line: getLineNumber(html, title.idx),
          sample: title.value.slice(0, 90),
        });
      }
    } else if (lang !== 'en' && containsEN) {
      // Latin-script non-EN: flag if contains English functional words
      issues.push({
        cat: 'title-english-leak',
        line: getLineNumber(html, title.idx),
        sample: title.value.slice(0, 90),
      });
    }
  } else {
    issues.push({ cat: 'title-missing', line: 0, sample: '<title> tag not found' });
  }

  // 4. <meta name="description">
  const desc = extractMetaContent(html, 'name', 'description');
  if (desc) {
    const brandStripped = stripBrand(desc.value);
    if (NON_LATIN_LANGS.has(lang)) {
      const expectScript = lang === 'ar' ? SCRIPT_RE.arabic
        : lang === 'fa' ? SCRIPT_RE.arabic
        : lang === 'zh' ? SCRIPT_RE.chinese
        : SCRIPT_RE.cyrillic;
      if (expectScript && !expectScript.test(desc.value) && brandStripped.length > 0) {
        issues.push({
          cat: 'description-untranslated',
          line: getLineNumber(html, desc.idx),
          sample: desc.value.slice(0, 90),
        });
      }
    } else if (lang !== 'en' && isTextEnglish(brandStripped)) {
      issues.push({
        cat: 'description-english-leak',
        line: getLineNumber(html, desc.idx),
        sample: desc.value.slice(0, 90),
      });
    }
  }

  // 5. OG meta tags
  for (const og of ['og:title', 'og:description', 'og:image:alt']) {
    const tag = extractMetaContent(html, 'property', og);
    if (!tag) continue;
    if (lang === 'en') continue;
    if (NON_LATIN_LANGS.has(lang)) {
      const expectScript = lang === 'ar' || lang === 'fa' ? SCRIPT_RE.arabic
        : lang === 'zh' ? SCRIPT_RE.chinese
        : SCRIPT_RE.cyrillic;
      const brandStripped = stripBrand(tag.value);
      if (brandStripped.length > 0 && !expectScript.test(tag.value)) {
        issues.push({
          cat: `og-untranslated:${og}`,
          line: getLineNumber(html, tag.idx),
          sample: tag.value.slice(0, 90),
        });
      }
    } else {
      const brandStripped = stripBrand(tag.value);
      if (isTextEnglish(brandStripped)) {
        issues.push({
          cat: `og-english-leak:${og}`,
          line: getLineNumber(html, tag.idx),
          sample: tag.value.slice(0, 90),
        });
      }
    }
  }

  // 6. <img alt="...">
  const cleaned = stripScripts(html);
  const altRe = /<img\b[^>]*\balt\s*=\s*"([^"]*)"/gi;
  while ((m = altRe.exec(cleaned)) !== null) {
    const v = m[1].trim();
    if (!v) continue;
    if (lang === 'en') continue;
    const brandStripped = stripBrand(v);
    if (!brandStripped) continue;
    // Common leak markers: "Boat", "Cruise", "Dinner" — English single word or phrase
    if (NON_LATIN_LANGS.has(lang)) {
      const expectScript = lang === 'ar' || lang === 'fa' ? SCRIPT_RE.arabic
        : lang === 'zh' ? SCRIPT_RE.chinese
        : SCRIPT_RE.cyrillic;
      if (!expectScript.test(v) && /[a-zA-Z]{3,}/.test(brandStripped)) {
        issues.push({
          cat: 'alt-untranslated',
          line: getLineNumber(html, m.index),
          sample: `alt="${v.slice(0, 60)}"`,
        });
      }
    } else if (isTextEnglish(brandStripped)) {
      issues.push({
        cat: 'alt-english-leak',
        line: getLineNumber(html, m.index),
        sample: `alt="${v.slice(0, 60)}"`,
      });
    }
  }

  // 7. data-activity / data-label attributes (timeline markers)
  const dataActRe = /\bdata-(activity|label)\s*=\s*"([^"]*)"/g;
  while ((m = dataActRe.exec(html)) !== null) {
    const v = m[2].trim();
    if (!v) continue;
    if (lang === 'en') continue;
    const brandStripped = stripBrand(v);
    if (!brandStripped) continue;
    if (NON_LATIN_LANGS.has(lang)) {
      const expectScript = lang === 'ar' || lang === 'fa' ? SCRIPT_RE.arabic
        : lang === 'zh' ? SCRIPT_RE.chinese
        : SCRIPT_RE.cyrillic;
      if (!expectScript.test(v) && /[a-zA-Z]{3,}/.test(brandStripped)) {
        issues.push({
          cat: `data-${m[1]}-untranslated`,
          line: getLineNumber(html, m.index),
          sample: `data-${m[1]}="${v.slice(0, 60)}"`,
        });
      }
    } else if (isTextEnglish(brandStripped)) {
      issues.push({
        cat: `data-${m[1]}-english-leak`,
        line: getLineNumber(html, m.index),
        sample: `data-${m[1]}="${v.slice(0, 60)}"`,
      });
    }
  }

  // 8. Turkish chars in EN folder (English page has ş/ğ/ı)
  if (lang === 'en') {
    // Extract body text nodes
    const bodyMatch = cleaned.match(/<body[\s\S]*<\/body>/i);
    if (bodyMatch) {
      const body = bodyMatch[0];
      const tRe = />([^<]{3,300})</g;
      let tm;
      while ((tm = tRe.exec(body)) !== null) {
        const t = tm[1].trim();
        if (!t) continue;
        if (SCRIPT_RE.turkishChars.test(t)) {
          // Check if it's only brand words
          const cleanedTxt = stripBrand(t);
          if (SCRIPT_RE.turkishChars.test(cleanedTxt)) {
            issues.push({
              cat: 'en-has-turkish-chars',
              line: getLineNumber(html, html.indexOf(tm[0])),
              sample: t.slice(0, 80),
            });
          }
        }
      }
    }
  }

  // 9. JSON-LD script blocks
  const jsonLdRe = /<script\s+type=["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/gi;
  while ((m = jsonLdRe.exec(html)) !== null) {
    const block = m[1];
    try {
      const parsed = JSON.parse(block);
      const flat = JSON.stringify(parsed);
      // Look for "name" or "description" fields with English-only text
      if (NON_LATIN_LANGS.has(lang)) {
        const expectScript = lang === 'ar' || lang === 'fa' ? SCRIPT_RE.arabic
          : lang === 'zh' ? SCRIPT_RE.chinese
          : SCRIPT_RE.cyrillic;
        // Extract string values
        const strRe = /:"([^"]{5,200})"/g;
        let sm;
        while ((sm = strRe.exec(flat)) !== null) {
          const v = sm[1];
          if (v.startsWith('http') || v.startsWith('/')) continue;
          const brandStripped = stripBrand(v);
          if (!brandStripped) continue;
          if (!expectScript.test(v) && /[a-zA-Z]{6,}/.test(brandStripped) && isTextEnglish(brandStripped)) {
            issues.push({
              cat: 'jsonld-untranslated',
              line: getLineNumber(html, m.index),
              sample: v.slice(0, 80),
            });
            break; // one per block
          }
        }
      }
    } catch (e) {
      // malformed JSON-LD — report
      issues.push({
        cat: 'jsonld-parse-error',
        line: getLineNumber(html, m.index),
        sample: e.message.slice(0, 60),
      });
    }
  }

  // 10. Turkish HTML comment in non-TR file (informational)
  if (lang !== 'tr') {
    const commentRe = /<!--([^-]|-[^-])*?-->/g;
    while ((m = commentRe.exec(html)) !== null) {
      const c = m[0];
      if (SCRIPT_RE.turkishChars.test(c)) {
        issues.push({
          cat: 'turkish-comment',
          line: getLineNumber(html, m.index),
          sample: c.slice(4, -3).trim().slice(0, 80),
        });
        break; // first one is enough
      }
    }
  }

  return issues;
}

function main() {
  const report = { byLang: {}, totals: {} };
  const categorizedSamples = {};

  for (const lang of LANGS.concat([EN_ONLY_FOLDER])) {
    const langDir = path.join(DIST, lang);
    if (!fs.existsSync(langDir)) continue;
    const files = fs.readdirSync(langDir).filter(f => f.endsWith('.html'));
    report.byLang[lang] = { files: files.length, byCat: {}, total: 0 };
    categorizedSamples[lang] = {};

    for (const f of files) {
      const issues = scanFile(path.join(langDir, f), lang);
      for (const iss of issues) {
        report.byLang[lang].byCat[iss.cat] = (report.byLang[lang].byCat[iss.cat] || 0) + 1;
        report.byLang[lang].total++;
        if (!categorizedSamples[lang][iss.cat]) categorizedSamples[lang][iss.cat] = [];
        if (categorizedSamples[lang][iss.cat].length < 3) {
          categorizedSamples[lang][iss.cat].push({
            file: `dist/${lang}/${f}`,
            line: iss.line,
            sample: iss.sample,
          });
        }
      }
    }
  }

  // Pretty print
  const lines = [];
  lines.push('# Translation Audit — 2026-04-21');
  lines.push('');
  lines.push('Tüm `dist/{lang}/*.html` dosyalarında sistematik kontrol.');
  lines.push('');
  lines.push('## Dil bazlı özet');
  lines.push('');
  lines.push('| lang | files | issues | breakdown |');
  lines.push('|---|---:|---:|---|');

  const allLangs = Object.keys(report.byLang);
  for (const lang of allLangs) {
    const r = report.byLang[lang];
    const bd = Object.entries(r.byCat)
      .sort(([, a], [, b]) => b - a)
      .map(([k, v]) => `${k}=${v}`)
      .join(', ');
    lines.push(`| ${lang} | ${r.files} | ${r.total} | ${bd || '-'} |`);
  }

  lines.push('');
  lines.push('## Kategori bazlı toplam (tüm diller birleşik)');
  lines.push('');
  const catTotals = {};
  for (const lang of allLangs) {
    for (const [c, n] of Object.entries(report.byLang[lang].byCat)) {
      catTotals[c] = (catTotals[c] || 0) + n;
    }
  }
  lines.push('| category | count |');
  lines.push('|---|---:|');
  for (const [c, n] of Object.entries(catTotals).sort(([, a], [, b]) => b - a)) {
    lines.push(`| ${c} | ${n} |`);
  }

  lines.push('');
  lines.push('## Örnek bulgular (dil bazlı, her kategori için 3 örnek)');
  lines.push('');

  for (const lang of allLangs) {
    const cats = Object.keys(categorizedSamples[lang]);
    if (cats.length === 0) continue;
    lines.push(`### ${lang}`);
    lines.push('');
    for (const c of cats) {
      lines.push(`**${c}**`);
      for (const s of categorizedSamples[lang][c]) {
        lines.push(`- \`${s.file}:${s.line}\` — ${s.sample}`);
      }
      lines.push('');
    }
  }

  const out = lines.join('\n');
  fs.writeFileSync(OUT_MD, out, 'utf8');

  // Stdout: short summary
  console.log('\n=== AUDIT SUMMARY ===\n');
  for (const lang of allLangs) {
    const r = report.byLang[lang];
    const topCats = Object.entries(r.byCat)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 4)
      .map(([k, v]) => `${k}=${v}`)
      .join(', ');
    console.log(`  ${lang.padEnd(3)} files=${r.files}  issues=${r.total}  ${topCats}`);
  }
  console.log('\n=== CATEGORY TOTALS (all langs) ===\n');
  for (const [c, n] of Object.entries(catTotals).sort(([, a], [, b]) => b - a)) {
    console.log(`  ${String(n).padStart(4)}  ${c}`);
  }
  console.log(`\nFull report: ${OUT_MD}`);
}

main();
