#!/usr/bin/env node
/**
 * Quick preview: takes a content/pages/{slug}.js and optionally a language,
 * renders it using index.html as template (title/meta/hero replacement + keyword
 * content injection). Output to preview/{slug}[-lang].html
 *
 * Usage:
 *   node scripts/preview-page.js bosphorus-dinner-cruise
 *   node scripts/preview-page.js bosphorus-with-kids tr
 */
const fs = require('fs');
const path = require('path');

const slug = process.argv[2];
const lang = process.argv[3] || 'en';
if (!slug) { console.error('Usage: node scripts/preview-page.js <slug> [lang]'); process.exit(1); }

const contentPath = path.join(__dirname, '..', 'content', 'pages', `${slug}.js`);
if (!fs.existsSync(contentPath)) { console.error(`Not found: ${contentPath}`); process.exit(1); }

let content = require(contentPath);

// Apply translation override if lang != en
if (lang !== 'en') {
  const trPath = path.join(__dirname, '..', 'content', 'translations', `${lang}.js`);
  if (fs.existsSync(trPath)) {
    const translations = require(trPath);
    const tr = translations[slug];
    if (tr) content = { ...content, ...tr, images: content.images, schema: content.schema };
  } else {
    console.warn(`No translation for lang=${lang}, falling back to English.`);
  }
}

const PRICES = {
  dinnerStd: 24, dinnerStdOriginal: 40, dinnerVip: 55, dinnerVipOriginal: 92,
  alcohol2: 15, unlimited: 30, transfer: 10, romantic: 15
};
const subst = (s) => String(s).replace(/\{p\.([a-zA-Z0-9]+)\}/g, (_, k) => PRICES[k] ?? '');
const md = (s) => subst(s).replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf-8');

// Rewrite asset paths relative to preview/ folder
html = html.replace(/(src|href)="(js|css|assets|lang|blog)\//g, '$1="../$2/');
html = html.replace(/url\('(js|css|assets)\//g, "url('../$1/");

// Update meta
html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(subst(content.meta.title))}</title>`);
html = html.replace(/<meta name="description" content="[^"]*">/i, `<meta name="description" content="${esc(subst(content.meta.description))}">`);
html = html.replace(/<meta property="og:title" content="[^"]*">/i, `<meta property="og:title" content="${esc(subst(content.meta.title))}">`);
html = html.replace(/<meta property="og:description" content="[^"]*">/i, `<meta property="og:description" content="${esc(subst(content.meta.description))}">`);

// Replace hero H1 with keyword H1
html = html.replace(
  /<h1 class="font-display[^"]*leading-\[1\.1\][^"]*"[^>]*>[\s\S]*?<\/h1>/,
  `<h1 class="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6"><span class="gradient-text">${esc(subst(content.hero.h1))}</span></h1>`
);

// Replace hero subtitle
html = html.replace(
  /<p[^>]*data-i18n="hero\.subtitle"[^>]*>[\s\S]*?<\/p>/,
  `<p class="text-white/70 text-base sm:text-lg lg:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">${esc(subst(content.hero.subtitle))}</p>`
);

// Preview banner
const banner = `<div style="position:fixed;top:0;left:0;right:0;z-index:9999;background:rgba(220,38,38,0.15);border-bottom:1px solid rgba(239,68,68,0.4);color:#fca5a5;font-size:11px;text-align:center;padding:6px 16px;backdrop-filter:blur(4px);">⚠ PREVIEW — ${content.slug} (${lang})</div><div style="height:30px"></div>`;
html = html.replace(/<body([^>]*)>/i, `<body$1>\n${banner}`);

// Inject keyword content block before <section id="included">
const keywordSection = `
<section class="py-16 px-6 bg-gradient-to-b from-[#0b1120] to-[#101a30]">
  <div class="max-w-4xl mx-auto">
    <div class="space-y-5 mb-12 max-w-3xl">
      ${content.intro.map(p => `<p class="text-white/75 text-base md:text-lg leading-relaxed">${md(p)}</p>`).join('')}
    </div>
    <h2 class="font-display text-2xl md:text-3xl font-bold text-gold mb-6">Why Book This Cruise</h2>
    <div class="grid md:grid-cols-2 gap-4 mb-12">
      ${content.highlights.map(h => `
      <div class="bg-[#152240]/60 backdrop-blur rounded-xl p-5 border border-white/5">
        <h3 class="font-semibold text-white mb-2">${subst(h.title)}</h3>
        <p class="text-white/60 text-sm leading-relaxed">${subst(h.desc)}</p>
      </div>`).join('')}
    </div>
    <div class="bg-[#0a0f1e]/60 backdrop-blur-xl border border-gold/30 rounded-2xl p-6 flex flex-wrap gap-4 items-center justify-between">
      <div>
        <p class="text-gold text-xs uppercase tracking-wider font-semibold mb-1">From €${PRICES.dinnerStd}/person</p>
        <p class="text-white/60 text-sm">${subst(content.cta.secondary)}</p>
      </div>
      <button onclick="openMobilePanel('standard')" class="btn-gold px-8 py-3 rounded-full font-semibold whitespace-nowrap" style="background:#c9a84c;color:#0b1120;">${subst(content.cta.primary)}</button>
    </div>
  </div>
</section>`;
const keywordFaq = `
<section class="py-16 px-6 bg-navy/20">
  <div class="max-w-3xl mx-auto">
    <h2 class="font-display text-3xl md:text-4xl font-bold text-gold text-center mb-10">FAQ — ${esc(subst(content.keyword || content.meta.title))}</h2>
    <div class="space-y-3">
      ${content.faq.map(f => `
      <details class="bg-[#152240]/60 backdrop-blur rounded-xl p-5 border border-white/5 group">
        <summary class="flex items-start justify-between gap-4 cursor-pointer" style="list-style:none;">
          <span class="font-semibold text-white">${subst(f.q)}</span>
        </summary>
        <p class="mt-4 text-white/70 text-sm leading-relaxed">${subst(f.a)}</p>
      </details>`).join('')}
    </div>
  </div>
</section>`;

if (html.includes('<section id="included"')) {
  html = html.replace('<section id="included"', keywordSection + '\n<section id="included"');
}
if (html.includes('<section id="faq"')) {
  html = html.replace('<section id="faq"', keywordFaq + '\n<section id="faq"');
}

const outDir = path.join(__dirname, '..', 'preview');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outFile = lang === 'en' ? `${slug}.html` : `${slug}-${lang}.html`;
const outPath = path.join(outDir, outFile);
fs.writeFileSync(outPath, html, 'utf-8');
console.log(`✓ ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
console.log(`  Open: file:///${outPath.replace(/\\/g, '/')}`);
