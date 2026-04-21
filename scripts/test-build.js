#!/usr/bin/env node
/**
 * Minimal test build — renders 2 landing pages to dist/test/ for visual review.
 * Approach: copy index.html, swap title + meta + hero + inject intro + inject keyword FAQ.
 * Prices use hardcoded test values (same as Supabase defaults).
 * Usage: node scripts/test-build.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist', 'test');
const SLUGS = ['bosphorus-dinner-cruise', 'bosphorus-with-kids'];

const PRICES = {
  dinnerStd: 24,
  dinnerStdOriginal: 40,
  dinnerVip: 55,
  dinnerVipOriginal: 90,
  alcohol2: 15,
  unlimited: 30,
  transfer: 10,
  romantic: 15
};

const subPrices = (s) => s.replace(/\{p\.(\w+)\}/g, (_, k) => PRICES[k] ?? '??');
const md = (s) => s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gold">$1</strong>');
const fix = (s) => md(subPrices(s));

function buildIntro(introArr) {
  const paras = introArr
    .map((p) => `        <p class="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">${fix(p)}</p>`)
    .join('\n');
  return `
  <!-- ========== KEYWORD INTRO (injected) ========== -->
  <section id="keyword-intro" class="py-8 lg:py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="reveal-up">
${paras}
      </div>
    </div>
  </section>
`;
}

function buildHighlights(highlights) {
  const cards = highlights
    .map(
      (h) => `        <div class="bg-white/[.03] border border-white/10 rounded-2xl p-6 reveal-up">
          <h3 class="font-display text-xl font-semibold text-white mb-3">${fix(h.title)}</h3>
          <p class="text-white/70 text-sm leading-relaxed">${fix(h.desc)}</p>
        </div>`
    )
    .join('\n');
  return `
  <!-- ========== HIGHLIGHTS (injected) ========== -->
  <section id="keyword-highlights" class="py-8 lg:py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
${cards}
      </div>
    </div>
  </section>
`;
}

function buildKeywordFaqItems(faqArr) {
  return faqArr
    .map(
      (item) => `        <!-- Keyword FAQ (injected) -->
        <div class="faq-item glass-card rounded-xl overflow-hidden scroll-reveal">
          <button class="faq-toggle w-full text-left px-6 py-4 flex items-center justify-between gap-4">
            <span class="font-medium">${fix(item.q)}</span>
            <svg class="faq-icon w-5 h-5 text-gold flex-shrink-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="faq-content hidden px-6 pb-4">
            <p class="text-white/60 text-sm">${fix(item.a)}</p>
          </div>
        </div>`
    )
    .join('\n');
}

function splitH1(h1) {
  const words = h1.split(' ');
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

function buildPage(slug, template) {
  const page = require(path.join(ROOT, 'content', 'pages', slug));
  let html = template;

  // Rewrite asset paths: dist/test/*.html → ../../assets/, ../../js/, ../../css/
  html = html.replace(/(src|href)="(js|css|assets|lang|blog)\//g, '$1="../../$2/');
  html = html.replace(/url\('(js|css|assets)\//g, "url('../../$1/");
  html = html.replace(/url\("(js|css|assets)\//g, 'url("../../$1/');

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${fix(page.meta.title)}</title>`);

  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${fix(page.meta.description)}">`
  );

  const h1 = fix(page.hero.h1);
  const [p1, p2] = splitH1(h1);

  html = html.replace(
    /<span data-i18n="hero\.title1">[^<]*<\/span>/,
    `<span>${p1}</span>`
  );
  html = html.replace(
    /<span class="gradient-text" data-i18n="hero\.title2">[^<]*<\/span>/,
    `<span class="gradient-text">${p2}</span>`
  );

  html = html.replace(
    /(<p[^>]*)\sdata-i18n="hero\.subtitle"([^>]*>)[\s\S]*?(<\/p>)/,
    `$1$2${fix(page.hero.subtitle)}$3`
  );

  html = html.replace(
    /(<span[^>]*)\sdata-i18n="hero\.badge"([^>]*>)[\s\S]*?(<\/span>)/,
    `$1$2${fix(page.hero.badge)}$3`
  );

  const introBlock = buildIntro(page.intro) + buildHighlights(page.highlights);
  html = html.replace(/<section id="included"/, `${introBlock}\n  <section id="included"`);

  const faqItems = buildKeywordFaqItems(page.faq);
  html = html.replace(
    /(<div class="space-y-3">)(\s*<!-- FAQ 0)/,
    `$1\n${faqItems}$2`
  );

  return html;
}

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  console.log('📝 Test build başlıyor — 2 sayfa...\n');

  for (const slug of SLUGS) {
    try {
      const html = buildPage(slug, template);
      const outPath = path.join(OUT, `${slug}.html`);
      fs.writeFileSync(outPath, html);
      const sizeKB = (html.length / 1024).toFixed(1);
      console.log(`  ✓ dist/test/${slug}.html (${sizeKB} KB)`);
    } catch (err) {
      console.error(`  ✗ ${slug}: ${err.message}`);
    }
  }

  console.log('\n✅ Bitti. Önce dev server: node scripts/dev-server.js');
  console.log('Sonra tarayıcıda aç (MUTLAKA http://, file:// değil):');
  for (const slug of SLUGS) {
    console.log(`   http://localhost:8080/dist/test/${slug}.html`);
  }
}

main();
