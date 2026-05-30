#!/usr/bin/env node
/**
 * Generates static blog HTML for non-EN languages from per-language data files.
 *
 * Input:  scripts/blog-i18n-data/{lang}.js  (one module.exports per lang)
 * Output: src/blog-i18n/{lang}/{slug}.html
 *
 * Run once after editing data files. Output is committed to repo and copied
 * into dist/{lang}/blog/ by build-all.js.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(__dirname, 'blog-i18n-data');
const OUT_ROOT = path.join(ROOT, 'src', 'blog-i18n');

// Sprint L2 (May 2026): hi/ja/ko/ur/uk excluded — their blog-i18n-data sources have
// "Bosphorus Night stays Latin" but the committed HTML pages were manually corrected
// to localized brand (बॉस्फोरस की रात / ボスポラスの夜 / etc.) in the 17 May audit.
// Regenerating from data would revert that fix. Until data sources are localized,
// keep these langs out of the LANGS list — committed HTML stays canonical.
const LANGS = ['pt', 'no', 'fi', 'el', 'sl', 'lv', 'cs', 'da', 'hu', 'nl', 'sk', 'sv'];

// Brand name per language. Memory rule: only `bosphorusnight.com` domain stays
// Latin; the brand "Bosphorus Night" reads as "X at Night" in each language.
// Used in og:image:alt, schema.org Organization name (publisher + author).
const BRAND = {
  en: 'Bosphorus Night',
  pt: 'Bósforo Noturno',
  no: 'Bosporos om natten',
  fi: 'Bosporinsalmen yöt',
  el: 'Βόσπορος τη Νύχτα',
  sl: 'Bospor ponoči',
  lv: 'Bosfors naktī',
  cs: 'Bospor v noci',
  da: 'Bosporus om natten',
  nl: 'Bosporus bij Nacht',
  sk: 'Bospor v noci',
  sv: 'Bosporen om natten',
  hu: 'Boszporusz Éjszaka'
};

const SLUGS = [
  'best-bosphorus-dinner-cruise-istanbul',
  'bosphorus-sunset-cruise-guide',
  'bosphorus-cruise-with-kids-family',
  'istanbul-cruise-tonight-last-minute',
  'things-to-know-istanbul-boat-tour'
];

const ARTICLE_IMG = {
  'best-bosphorus-dinner-cruise-istanbul': '/assets/tours/dinner/boat-night-bridge.jpg',
  'bosphorus-sunset-cruise-guide': '/assets/tours/sunset/amor-sunset-dramatic.jpg',
  'bosphorus-cruise-with-kids-family': '/assets/tours/daytime/deck-guests.jpg',
  'istanbul-cruise-tonight-last-minute': '/assets/tours/dinner/hall-wide.jpg',
  'things-to-know-istanbul-boat-tour': '/assets/tours/daytime/boat-panorama.jpg'
};

const PUBDATE = {
  'best-bosphorus-dinner-cruise-istanbul': '2026-04-11',
  'bosphorus-sunset-cruise-guide': '2026-04-10',
  'bosphorus-cruise-with-kids-family': '2026-04-08',
  'istanbul-cruise-tonight-last-minute': '2026-04-11',
  'things-to-know-istanbul-boat-tour': '2026-04-09'
};

const SITE = 'https://www.bosphorusnight.com';
// Hreflang chain: EN + 19 çevirili dil. PROMPT 3/4/5 sonraki oturumlarda genişledi.
// build-seo.js BLOG_LANGUAGES ile sync olmalı.
const HREFLANG_ALL = ['en', 'hi', 'ja', 'ko', 'ur', 'uk', 'id', 'ms', 'pl', 'bg', 'ro', 'fa', 'fr', 'it', 'zh', 'tr', 'de', 'es', 'ru', 'ar', 'pt', 'nl', 'el', 'cs', 'hu', 'sv', 'da', 'no', 'fi', 'sk', 'sl', 'lv'];

function hreflang(slug, isIndex) {
  return HREFLANG_ALL.map((l) => {
    const prefix = l === 'en' ? '' : '/' + l;
    const url = isIndex ? `${SITE}${prefix}/blog/` : `${SITE}${prefix}/blog/${slug}`;
    return `  <link rel="alternate" hreflang="${l}" href="${url}">`;
  }).join('\n')
  + `\n  <link rel="alternate" hreflang="x-default" href="${SITE}${isIndex ? '/blog/' : '/blog/' + slug}">`;
}

function head({ lang, dir, title, description, ogUrl, canonical, ogImage, jsonLd, ogImageAlt }) {
  return `<!DOCTYPE html>
<html lang="${lang}"${dir === 'rtl' ? ' dir="rtl"' : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/assets/data/favicon.png?v=5" type="image/png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/data/favicon.png?v=5">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/data/favicon.png?v=5">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/data/favicon.png?v=5">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="${ogUrl.endsWith('/blog/') ? 'website' : 'article'}">
  <meta property="og:url" content="${ogUrl}">
  <meta property="og:image" content="${ogImage || SITE + '/assets/data/og-image.jpg'}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="${ogImageAlt || BRAND[lang] || BRAND.en}">
  <link rel="canonical" href="${canonical}">
${hreflang(ogUrl.replace(/^.*\/blog\/?/, '').replace(/\/$/, ''), ogUrl.endsWith('/blog/'))}
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { colors: { 'navy-dark': '#0b1120', 'navy': '#101a30', 'navy-light': '#152240', 'gold': '#c9a84c', 'gold-light': '#d4b86a' } } } }
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-P09XEBMNWE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date()); gtag('config', 'G-P09XEBMNWE'); gtag('config', 'AW-18073952031');
  </script>
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>`;
}

function header(chrome, langPrefix) {
  return `  <header class="bg-[#0b1120]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="${langPrefix}/" class="flex items-center gap-2">
        <span style="font-family:'Playfair Display',serif" class="text-xl font-bold text-[#c9a84c]">BOSPHORUS</span>
        <span style="font-family:'Playfair Display',serif" class="text-xs text-white/70 tracking-widest uppercase">Night</span>
      </a>
      <div class="flex gap-4">
        <a href="${langPrefix}/blog/" class="text-[#c9a84c] text-sm transition-colors font-medium">${chrome.blog}</a>
        <a href="${langPrefix}/" class="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">${chrome.home}</a>
      </div>
    </div>
  </header>`;
}

function ctaProduct(slug) {
  const s = (slug || '').toLowerCase();
  if (s.includes('kids') || s.includes('family')) return 'bosphorus-with-kids';
  return 'bosphorus-dinner-cruise';
}

// Gold CTA → bookable product page (matches site-wide funnel; AI/SEO can follow
// the link). Intent-matched per post. Replaces the old green WhatsApp CTA.
function ctaBlock(chrome, langPrefix, slug) {
  const prod = ctaProduct(slug);
  return `      <!-- CTA -->
      <div class="mt-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-[#152240] to-[#101a30] border border-[#c9a84c]/20 rounded-2xl p-10">
        <h3 style="font-family:'Playfair Display',serif" class="text-2xl md:text-3xl font-bold text-white mb-4">${chrome.readyTitle}</h3>
        <p class="text-white/60 mb-8">${chrome.readyDesc}</p>
        <a href="${langPrefix}/${prod}" class="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b86a] text-[#0b1120] font-semibold px-8 py-3 rounded-full transition-colors">
          ${chrome.bookBtn}
          <span>&rarr;</span>
        </a>
      </div>`;
}

function relatedArticles(chrome, teasers, currentSlug, langPrefix) {
  const others = SLUGS.filter((s) => s !== currentSlug).slice(0, 4);
  const cards = others.map((slug) => `          <a href="${langPrefix}/blog/${slug}.html" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${teasers[slug].title}</h4>
            <p class="text-white/40 text-xs">${teasers[slug].blurb}</p>
          </a>`).join('\n');
  return `      <div class="mt-16">
        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mb-6">${chrome.relatedTitle}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
${cards}
        </div>
      </div>`;
}

function footer(chrome) {
  return `  <footer class="border-t border-white/5 py-8 text-center mt-16">
    <p class="text-white/30 text-sm">${chrome.copyright}</p>
    <p class="text-white/15 text-xs mt-2">${chrome.tursab}</p>
  </footer>

  <a id="floatingWhatsapp"
     href="https://wa.me/905322442922?text=${encodeURIComponent(chrome.waHelloText)}"
     target="_blank"
     rel="noopener"
     onclick="if(window.bnTrack){window.bnTrack('Lead',{value:0,currency:'EUR',contact_method:'whatsapp',content_name:'floating_button'});}"
     aria-label="WhatsApp"
     class="group fixed left-12 bottom-20 lg:bottom-6 z-[54] inline-flex items-center pl-11 pr-4 py-1.5 rounded-full border border-[#25D366]/60 bg-[#0a0f1e]/70 backdrop-blur-md hover:border-[#25D366] hover:bg-[#0a0f1e]/90 shadow-lg shadow-black/20 transition-all duration-300">
    <svg class="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#25D366" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
      <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    <span class="text-white text-xs font-semibold whitespace-nowrap">${chrome.floatingChat}</span>
    <span class="relative flex w-2 h-2 flex-shrink-0 ml-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
    </span>
  </a>
  <script>
  (function(){
    var wa=document.getElementById('floatingWhatsapp');if(!wa)return;
    var f=function(){var b=(window.innerHeight+window.scrollY)>=(document.body.offsetHeight-80);
      wa.classList.toggle('opacity-0',b);wa.classList.toggle('translate-y-4',b);wa.classList.toggle('pointer-events-none',b);};
    window.addEventListener('scroll',f,{passive:true});window.addEventListener('resize',f);f();
  })();
  </script>
</body>
</html>`;
}

function renderIndex(data) {
  const { lang, dir, chrome, indexData, teasers } = data;
  const langPrefix = '/' + lang;
  const url = `${SITE}${langPrefix}/blog/`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: indexData.title,
    description: indexData.description,
    url,
    inLanguage: lang,
    publisher: {
      '@type': 'Organization',
      name: BRAND[lang] || BRAND.en,
      logo: { '@type': 'ImageObject', url: `${SITE}/assets/data/logo png lst.png` }
    },
    blogPost: SLUGS.map((slug) => ({
      '@type': 'BlogPosting',
      headline: teasers[slug].title,
      url: `${SITE}${langPrefix}/blog/${slug}`,
      datePublished: PUBDATE[slug] + 'T00:00:00+03:00'
    }))
  };

  const cards = SLUGS.map((slug) => `      <a href="${langPrefix}/blog/${slug}.html" class="group bg-[#152240] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-300">
        <div class="aspect-[16/9] overflow-hidden">
          <img src="${ARTICLE_IMG[slug]}" alt="${teasers[slug].title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-6">
          <time class="text-white/30 text-xs uppercase tracking-wider">${teasers[slug].date}</time>
          <h2 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mt-2 mb-2 group-hover:text-[#c9a84c] transition-colors">${teasers[slug].title}</h2>
          <p class="text-white/50 text-sm line-clamp-2">${teasers[slug].blurb}</p>
          <span class="inline-block mt-4 text-[#c9a84c] text-sm font-medium">${chrome.readMore} &rarr;</span>
        </div>
      </a>`).join('\n');

  return head({
    lang, dir,
    title: indexData.title,
    description: indexData.description,
    ogUrl: url,
    canonical: url,
    ogImage: SITE + '/assets/data/og-image.jpg',
    ogImageAlt: indexData.title,
    jsonLd
  }) + `
<body class="bg-[#0b1120] text-white min-h-screen">

${header(chrome, langPrefix)}

  <main class="max-w-7xl mx-auto px-4 py-12">
    <div class="mb-12">
      <h1 style="font-family:'Playfair Display',serif" class="text-4xl md:text-5xl font-bold text-white mb-4">${indexData.h1}</h1>
      <p class="text-white/50 text-lg max-w-2xl">${indexData.intro}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
${cards}
    </div>
  </main>

${footer(chrome)}`;
}

function renderArticle(data, slug) {
  const { lang, dir, chrome, articles, teasers } = data;
  const art = articles[slug];
  const langPrefix = '/' + lang;
  const url = `${SITE}${langPrefix}/blog/${slug}`;
  const img = SITE + ARTICLE_IMG[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: art.h1,
    description: art.pageDescription,
    image: img,
    datePublished: PUBDATE[slug] + 'T00:00:00+03:00',
    dateModified: '2026-05-17T00:00:00+03:00',
    inLanguage: lang,
    author: { '@type': 'Organization', name: BRAND[lang] || BRAND.en, url: SITE },
    publisher: {
      '@type': 'Organization',
      name: BRAND[lang] || BRAND.en,
      logo: { '@type': 'ImageObject', url: `${SITE}/assets/data/logo png lst.png` }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const sections = art.sections.map((sec) => {
    const paras = sec.paragraphs.map((p) => `        <p>${p}</p>`).join('\n\n');
    if (!sec.h2) return paras;
    return `        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${sec.h2}</h2>

${paras}`;
  }).join('\n\n');

  return head({
    lang, dir,
    title: art.pageTitle,
    description: art.pageDescription,
    ogUrl: url,
    canonical: url,
    ogImage: img,
    ogImageAlt: art.h1,
    jsonLd
  }) + `
<body class="bg-[#0b1120] text-white min-h-screen">

${header(chrome, langPrefix)}

  <main class="max-w-3xl mx-auto px-4 py-12">
    <a href="${langPrefix}/blog/" class="text-[#c9a84c] text-sm hover:underline">${chrome.backToBlog}</a>

    <article class="mt-8">
      <time class="text-white/30 text-xs uppercase tracking-wider">${teasers[slug].date}</time>
      <h1 style="font-family:'Playfair Display',serif" class="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">${art.h1}</h1>

      <img src="${ARTICLE_IMG[slug]}" alt="${art.h1}" class="w-full rounded-2xl mb-8 aspect-[16/9] object-cover">

      <div class="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-6 text-[15px]">

${sections}

      </div>

${ctaBlock(chrome, langPrefix, slug)}

${relatedArticles(chrome, teasers, slug, langPrefix)}

    </article>
  </main>

${footer(chrome)}`;
}

function main() {
  console.log('📝 Blog i18n generator\n');
  let total = 0;
  for (const lang of LANGS) {
    const dataPath = path.join(DATA_DIR, `${lang}.js`);
    if (!fs.existsSync(dataPath)) {
      console.log(`  ⚠ ${lang}: data file missing (${dataPath}), skipping`);
      continue;
    }
    delete require.cache[require.resolve(dataPath)];
    const data = require(dataPath);
    const outDir = path.join(OUT_ROOT, lang);
    fs.mkdirSync(outDir, { recursive: true });

    // Index
    fs.writeFileSync(path.join(outDir, 'index.html'), renderIndex(data));
    console.log(`  ✓ ${lang}/index.html`);
    total++;

    // Articles
    for (const slug of SLUGS) {
      if (!data.articles[slug]) {
        console.log(`  ⚠ ${lang}/${slug}: missing in data, skipping`);
        continue;
      }
      fs.writeFileSync(path.join(outDir, `${slug}.html`), renderArticle(data, slug));
      console.log(`  ✓ ${lang}/${slug}.html`);
      total++;
    }
  }
  console.log(`\n✅ ${total} dosya yazıldı.`);
}

main();
