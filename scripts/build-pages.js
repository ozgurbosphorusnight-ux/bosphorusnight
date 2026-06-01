#!/usr/bin/env node
/**
 * Multi-language landing page builder for Bosphorus Night.
 * Generates: 17 slugs × 15 languages = 255 HTML files.
 * Output: dist/{lang}/{slug}.html (English at dist/en/ for parity; on deploy, en/ contents move to root).
 * Usage: node scripts/build-pages.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.bosphorusnight.com';

const { buildBosphorusItinerary, buildBosphorusMentions } = require('./_wikidata-entities.js');
const { buildMetaPixelOnly, buildAnalyticsBodyEnd } = require('./_analytics-snippet.js');
const { buildInlineTScript, replaceTranslationsScriptTag } = require('./_inline-translations.js');
// Google reviews (cards + stat tokens) — shared with build-home.js, single JSON source.
const { GREVIEWS, injectGoogleReviews } = require('./_google-reviews.js');

// UI translations (boilerplate: nav, wizard, footer, FAQ, etc.)
const { T: UI_T } = require(path.join(ROOT, 'js', 'translations.js'));

// Hardcoded strings missing data-i18n in index.html
const HARDCODED_EN = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-en.json'));
const HARDCODED_ALL = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-all.json'));

const LANGUAGES = {
  en: { label: 'English', dir: 'ltr', flag: 'gb' },
  tr: { label: 'Türkçe', dir: 'ltr', flag: 'tr' },
  ar: { label: 'العربية', dir: 'rtl', flag: 'sa' },
  de: { label: 'Deutsch', dir: 'ltr', flag: 'de' },
  fa: { label: 'فارسی', dir: 'rtl', flag: 'ir' },
  ru: { label: 'Русский', dir: 'ltr', flag: 'ru' },
  es: { label: 'Español', dir: 'ltr', flag: 'es' },
  fr: { label: 'Français', dir: 'ltr', flag: 'fr' },
  it: { label: 'Italiano', dir: 'ltr', flag: 'it' },
  zh: { label: '中文', dir: 'ltr', flag: 'cn' },
  id: { label: 'Indonesia', dir: 'ltr', flag: 'id' },
  ms: { label: 'Malaysia', dir: 'ltr', flag: 'my' },
  pl: { label: 'Polski', dir: 'ltr', flag: 'pl' },
  bg: { label: 'Български', dir: 'ltr', flag: 'bg' },
  ro: { label: 'Română', dir: 'ltr', flag: 'ro' },
  uk: { label: 'Українська', dir: 'ltr', flag: 'ua' },
  hi: { label: 'हिन्दी', dir: 'ltr', flag: 'in' },
  ur: { label: 'اردو', dir: 'rtl', flag: 'pk' },
  ja: { label: '日本語', dir: 'ltr', flag: 'jp' },
  ko: { label: '한국어', dir: 'ltr', flag: 'kr' },
  // Sprint L2 (May 2026): +9 European langs.
  pt: { label: 'Português', dir: 'ltr', flag: 'pt' },
  nl: { label: 'Nederlands', dir: 'ltr', flag: 'nl' },
  cs: { label: 'Čeština', dir: 'ltr', flag: 'cz' },
  hu: { label: 'Magyar', dir: 'ltr', flag: 'hu' },
  sv: { label: 'Svenska', dir: 'ltr', flag: 'se' },
  da: { label: 'Dansk', dir: 'ltr', flag: 'dk' },
  no: { label: 'Norsk', dir: 'ltr', flag: 'no' },
  fi: { label: 'Suomi', dir: 'ltr', flag: 'fi' },
  sk: { label: 'Slovenčina', dir: 'ltr', flag: 'sk' },
  // Sprint L2 final (May 2026): +3 last EU langs (el/sl/lv).
  el: { label: 'Ελληνικά', dir: 'ltr', flag: 'gr' },
  sl: { label: 'Slovenščina', dir: 'ltr', flag: 'si' },
  lv: { label: 'Latviešu', dir: 'ltr', flag: 'lv' }
};

const SLUGS = [
  'bosphorus-dinner-cruise',
  'bosphorus-with-kids',
  'romantic-bosphorus-cruise',
  'halal-bosphorus-cruise',
  'bosphorus-trip',
  'istanbul-boat-tour',
  'istanbul-night-tour',
  'private-bosphorus-cruise',
  'bosphorus-cruise-tickets',
  'last-minute-bosphorus',
  'bosphorus-for-couples',
  'bosphorus-vip',
  'dinner-cruise-istanbul',
  'bosphorus-sightseeing',
  'istanbul-cruise-price',
  'bosphorus-sunset-cruise',
  'bosphorus-night-tour'
];

// Price placeholders. Runtime site also fetches from Supabase via fetchDynamicPrices().
// Values here are the build-time fallbacks (also used for meta tags / SSR snapshot).
// Canonical source: Supabase packages.price_eur (CLAUDE.md §3 — kanonik kaynak DB).
// Dinner fiyatları STRING. Özgür kararı 31 May: trailing zero YOK → "24.3"/"55.2".
// Keep in sync with build-home.js PRICES.
const PRICES = {
  dinnerStd: '24.3',
  dinnerStdOriginal: 40.5,
  dinnerVip: '55.2',
  dinnerVipOriginal: 92,
  alcohol2: 15,
  unlimited: 30,
  transfer: 10,
  romantic: 15
};

// Google Business Profile rating — ortak _google-reviews.js JSON snapshot'ından (drift yok).
const RATING = { value: String(GREVIEWS.rating), count: GREVIEWS.reviewCount };

// 5.A Madde 16 — "Best" prefix tablosu (high-intent slug'larda title'a eklenir).
// Google Related Searches: "Best Bosphorus dinner cruise Istanbul" yıllık arama hacmi
// büyük → title'da "Best" varsa CTR +%20-30. Sadece commercial intent slug'larda
// uygulanır (örn. "bosphorus-with-kids" gibi yumuşak slug'larda anlamsız olur).
const BEST_PREFIXES = {
  en: 'Best', tr: 'En İyi', de: 'Beste', es: 'Mejor',
  ru: 'Лучший', ar: 'أفضل', fa: 'بهترین', fr: 'Meilleur',
  it: 'Migliore', zh: '最佳', pl: 'Najlepszy', bg: 'Най-добрият',
  ro: 'Cel mai bun', id: 'Terbaik', ms: 'Terbaik',
  uk: 'Найкращий', hi: 'सर्वश्रेष्ठ', ur: 'بہترین',
  ja: '最高の', ko: '최고의',
};

const BEST_SLUGS = new Set([
  'bosphorus-dinner-cruise',
  'bosphorus-night-tour',
  'dinner-cruise-istanbul',
  'romantic-bosphorus-cruise',
  'bosphorus-vip',
  'private-bosphorus-cruise',
  'bosphorus-sunset-cruise',
  'bosphorus-cruise-tickets',
  'istanbul-night-tour',
  'istanbul-boat-tour',
]);

function applyBestPrefix(title, slug, lang) {
  if (!BEST_SLUGS.has(slug)) return title;
  const prefix = BEST_PREFIXES[lang] || BEST_PREFIXES.en;
  // Idempotent: prefix zaten varsa ekleme (case-insensitive)
  const lowered = title.toLowerCase().trim();
  if (lowered.startsWith(prefix.toLowerCase())) return title;
  return `${prefix} ${title}`;
}

// Build URL path for a language/slug combo. English at root; others prefixed.
// dist/en/X.html → /X (root). dist/tr/X.html → /tr/X.
function urlFor(lang, slug) {
  return lang === 'en' ? `${SITE_URL}/${slug}` : `${SITE_URL}/${lang}/${slug}`;
}

// ISO locale codes for og:locale (Facebook/OpenGraph convention).
const OG_LOCALES = {
  en: 'en_US', tr: 'tr_TR', de: 'de_DE', es: 'es_ES', ru: 'ru_RU',
  ar: 'ar_SA', fa: 'fa_IR', fr: 'fr_FR', it: 'it_IT', zh: 'zh_CN',
  id: 'id_ID', ms: 'ms_MY', pl: 'pl_PL', bg: 'bg_BG', ro: 'ro_RO',
  uk: 'uk_UA', hi: 'hi_IN', ur: 'ur_PK', ja: 'ja_JP', ko: 'ko_KR',
  pt: 'pt_PT', nl: 'nl_NL', el: 'el_GR', cs: 'cs_CZ', hu: 'hu_HU',
  sv: 'sv_SE', da: 'da_DK', no: 'nb_NO', fi: 'fi_FI', sk: 'sk_SK',
  sl: 'sl_SI', lv: 'lv_LV'
};

// Source has og:locale=en_US + 14 alternates. For non-EN builds, swap:
// primary → current locale, the current lang's alternate → en_US.
function swapOgLocale(html, lang) {
  if (lang === 'en') return html;
  const current = OG_LOCALES[lang];
  if (!current) return html;
  html = html.replace(
    /<meta property="og:locale" content="en_US">/,
    `<meta property="og:locale" content="${current}">`
  );
  html = html.replace(
    new RegExp(`<meta property="og:locale:alternate" content="${current}">`),
    `<meta property="og:locale:alternate" content="en_US">`
  );
  return html;
}

// Bug #1 sync: T çevirilerinde literal "€24"/"€55" kalmış olabilir → PRICES'tan canlı çek.
// (?!\.\d|\d) cümle sonu noktasını match eder ("€24."), "€24.30" / "€243" reject.
const subPrices = (s) => s
  .replace(/\{p\.(\w+)\}/g, (_, k) => PRICES[k] ?? '??')
  .replace(/€24(?!\.\d|\d)/g, `€${PRICES.dinnerStd}`)
  .replace(/€55(?!\.\d|\d)/g, `€${PRICES.dinnerVip}`);
const md = (s) => s.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gold">$1</strong>');
const fix = (s) => md(subPrices(s));

function splitH1(h1) {
  const words = h1.split(' ');
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

function buildIntro(introArr) {
  const paras = introArr
    .map((p) => `        <p class="text-white/75 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">${fix(p)}</p>`)
    .join('\n');
  return `
  <!-- ========== KEYWORD INTRO ========== -->
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
  <!-- ========== HIGHLIGHTS ========== -->
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
      (item) => `        <!-- Keyword FAQ -->
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

function buildHreflang(slug) {
  const links = Object.keys(LANGUAGES)
    .map((lang) => `  <link rel="alternate" hreflang="${lang}" href="${urlFor(lang, slug)}">`)
    .join('\n');
  const xDefault = `  <link rel="alternate" hreflang="x-default" href="${urlFor('en', slug)}">`;
  return `${links}\n${xDefault}`;
}

function buildSchemaLd(page, lang, slug) {
  const url = urlFor(lang, slug);

  // Image array — Google uses this for search thumbnails and image carousels.
  // Pull from per-page images.gallery (5-6 high-quality tour photos),
  // prepend the standardized 1200x630 og-image as the canonical hero.
  // Multiple images give Google flexibility for different aspect ratios
  // (square, 4:3, 16:9) across search contexts.
  const galleryUrls = (page.images && Array.isArray(page.images.gallery) ? page.images.gallery : [])
    .slice(0, 5)
    .map((p) => p.startsWith('http') ? p : `${SITE_URL}${p}`);
  const tripImages = [`${SITE_URL}/assets/data/og-image.jpg`, ...galleryUrls];

  // TouristTrip schema
  const tourist = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: fix(page.meta.title).replace(/<[^>]+>/g, ''),
    description: fix(page.meta.description),
    url,
    image: tripImages,
    inLanguage: lang,
    touristType: 'International tourists',
    provider: {
      '@type': 'TravelAgency',
      name: 'Bosphorus Night',
      url: SITE_URL,
      telephone: '+90 532 244 29 22',
      priceRange: '€20 - €90',
      image: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Ömer Avni, Meclis-i Mebusan Cd. Kabataş Vapur İskelesi',
        addressLocality: 'Beyoğlu/İstanbul',
        postalCode: '34427',
        addressCountry: 'TR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 41.0360985,
        longitude: 28.9948784
      },
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'TURSAB',
        name: 'TÜRSAB License',
        value: 'A-17672'
      },
      sameAs: [
        'https://wa.me/905322442922',
        'https://t.me/BosphorusnightReservation_Bot',
        'https://www.youtube.com/@BosphorusNightTour',
        'https://www.instagram.com/bosphorusnighttour/',
        'https://www.facebook.com/bosphorusnighttours/',
        'https://www.tiktok.com/@bosphorusnight.com',
        'https://www.pinterest.com/bosphorusnight/',
        'https://maps.app.goo.gl/CAGjhxLTBJfGtUas9'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: RATING.value,
        reviewCount: RATING.count,
        bestRating: '5',
        worstRating: '1'
      },
      review: GREVIEWS.reviews.slice(0, 5).map((r) => ({
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: String(r.rating), bestRating: '5', worstRating: '1' },
        author: { '@type': 'Person', name: r.name },
        reviewBody: r.text
      }))
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: String(PRICES.dinnerStd),
      availability: 'https://schema.org/InStock',
      url,
      validFrom: new Date().toISOString().split('T')[0]
    },
    itinerary: buildBosphorusItinerary(),
    mentions: buildBosphorusMentions()
    // aggregateRating lives on provider (TravelAgency = rich-result-eligible LocalBusiness),
    // not here on TouristTrip (Google review snippet ignores TouristTrip type). Added 1 Jun 2026
    // once GBP reached 41 verified reviews / 5.0.
  };

  // FAQPage schema — include the keyword FAQ for this page
  const faqSchema = page.faq && page.faq.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: fix(item.q).replace(/<[^>]+>/g, ''),
      acceptedAnswer: {
        '@type': 'Answer',
        text: fix(item.a).replace(/<[^>]+>/g, '')
      }
    }))
  } : null;

  // BreadcrumbList: Home > Page
  const homeUrl = lang === 'en' ? SITE_URL : `${SITE_URL}/${lang}`;
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: homeUrl },
      { '@type': 'ListItem', position: 2, name: fix(page.hero.h1).replace(/<[^>]+>/g, ''), item: url }
    ]
  };

  // Promotional + meeting-point videos. Google can render a video carousel
  // in search results when 2+ VideoObject schemas are present, dramatically
  // boosting CTR vs text-only listings. Tour-type specific selection so each
  // landing shows the most relevant promo videos (dinner pages → dinner+show,
  // sunset pages → boat+views).
  const promoVideoLibrary = {
    dinner: [
      {
        id: 'uC3BPhgTfYA',
        name: 'Dinner & Atmosphere — Bosphorus Night Cruise',
        description: 'Inside the Bosphorus dinner cruise: multi-course Turkish menu, candlelit tables, panoramic Bosphorus views by night.'
      },
      {
        id: 'zzDJ7xoXnuc',
        name: 'Live Show Highlights — Bosphorus Dinner Cruise',
        description: 'Live Turkish folklore, whirling dervish, and belly dance performances aboard the Bosphorus Night dinner cruise.'
      },
      {
        id: 'M1wKCgj2O_M',
        name: 'Luxury Yacht Tour — Bosphorus by Night',
        description: 'Aerial and onboard footage of the Bosphorus Night luxury cruise — illuminated bridges, palaces, and the Istanbul skyline at night.'
      }
    ],
    sunset: [
      {
        id: 'eJTOiPx_eus',
        name: 'Boat Tour — Bosphorus Sunset Cruise',
        description: 'Onboard scenes from the Bosphorus sunset cruise: golden hour light over the strait, palaces, and historic shores.'
      },
      {
        id: 'gbohvuBi64o',
        name: 'Under the Bridge — Bosphorus Views',
        description: 'Sailing under the iconic Bosphorus Bridge — sweeping views of Istanbul from the water at golden hour.'
      },
      {
        id: '-ArhYpC9tbY',
        name: 'Guest Moments — Bosphorus Cruise',
        description: 'Real guests enjoying the Bosphorus cruise experience: views, photos, and toasts on the water.'
      }
    ]
  };

  const tourType = page.tourType === 'sunset' ? 'sunset' : 'dinner';
  const promoVideos = (promoVideoLibrary[tourType] || []).map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.name,
    description: v.description,
    thumbnailUrl: `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    embedUrl: `https://www.youtube.com/embed/${v.id}`,
    uploadDate: '2026-04-20T00:00:00+03:00',
    inLanguage: lang
  }));

  // Meeting-point walking direction videos — useful for buyer-intent searches
  // ("how to get to Kabataş", "where is the meeting point").
  const meetingVideos = [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Walking directions from Dolmabahçe to Kabataş Pier',
      description: 'Short walking route guide from Dolmabahçe Palace to the Bosphorus Night cruise meeting point at Kabataş Pier.',
      thumbnailUrl: 'https://img.youtube.com/vi/UcQ3qgyADc4/hqdefault.jpg',
      contentUrl: 'https://www.youtube.com/watch?v=UcQ3qgyADc4',
      embedUrl: 'https://www.youtube.com/embed/UcQ3qgyADc4',
      uploadDate: '2026-04-20T00:00:00+03:00',
      inLanguage: lang
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Walking directions from the Tram Station to Kabataş Pier',
      description: 'Short walking route guide from the Kabataş tram station to the Bosphorus Night cruise meeting point.',
      thumbnailUrl: 'https://img.youtube.com/vi/ybAIn2RhwJs/hqdefault.jpg',
      contentUrl: 'https://www.youtube.com/watch?v=ybAIn2RhwJs',
      embedUrl: 'https://www.youtube.com/embed/ybAIn2RhwJs',
      uploadDate: '2026-04-20T00:00:00+03:00',
      inLanguage: lang
    }
  ];

  const videos = [...promoVideos, ...meetingVideos];

  // ImageObject for the landing page OG image.
  const ogImage = page.images && page.images.og
    ? `${SITE_URL}${page.images.og}`
    : 'https://www.bosphorusnight.com/assets/tours/dinner/dining-romantic.jpg';
  const heroImage = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: ogImage,
    caption: fix(page.hero.h1).replace(/<[^>]+>/g, ''),
    inLanguage: lang
  };

  const blocks = [tourist, breadcrumb, ...videos, heroImage];
  if (faqSchema) blocks.push(faqSchema);

  return blocks
    .map((b) => `<script type="application/ld+json">\n${JSON.stringify(b, null, 2)}\n</script>`)
    .join('\n');
}

// Merge English master with language-specific translation.
// Non-translatable fields (images, schema, tourType, highlights[].icon) always come from English.
function loadPage(slug, lang) {
  const en = require(path.join(ROOT, 'content', 'pages', slug));
  if (lang === 'en') return en;

  const transPath = path.join(ROOT, 'content', 'translations', `${lang}.js`);
  if (!fs.existsSync(transPath)) {
    return en;
  }
  const trans = require(transPath);
  const t = trans[slug];
  if (!t) return en;

  return {
    slug: en.slug,
    keyword: en.keyword,
    tourType: en.tourType,
    images: en.images,
    schema: en.schema,
    meta: t.meta || en.meta,
    hero: { ...en.hero, ...t.hero },
    intro: t.intro || en.intro,
    highlights: (t.highlights || en.highlights).map((h, i) => {
      const enH = en.highlights[i] || {};
      // Legacy schema tolerance: {icon: emoji, text: '...'} → fold text into desc;
      // leave title empty so the translated copy doesn't get an English h3 above it.
      const hasLegacyText = h.text && !h.title && !h.desc;
      return {
        icon: enH.icon || h.icon || 'star',
        title: hasLegacyText ? '' : (h.title || enH.title || ''),
        desc: hasLegacyText ? h.text : (h.desc || enH.desc || '')
      };
    }),
    faq: t.faq || en.faq,
    cta: { ...en.cta, ...t.cta }
  };
}

function buildHtml(slug, lang, template) {
  const page = loadPage(slug, lang);
  const langMeta = LANGUAGES[lang];
  let html = template;

  // <html lang> + dir
  html = html.replace(
    /<html\s+lang="[^"]*"\s+data-lang="[^"]*">/,
    `<html lang="${lang}" data-lang="${lang}" dir="${langMeta.dir}">`
  );

  // Lang switcher button: bake current flag + label into static HTML.
  // Without this, /uk/ briefly shows gb.png+EN on load until JS runs (FOUC).
  html = html.replace(
    /<img\s+id="langFlag"\s+src="https:\/\/flagcdn\.com\/w20\/gb\.png"[^>]*>/,
    `<img id="langFlag" src="https://flagcdn.com/w20/${langMeta.flag}.png" alt="${lang.toUpperCase()}" class="w-5 h-auto rounded-sm">`
  );
  html = html.replace(
    /<span\s+id="langLabel">EN<\/span>/,
    `<span id="langLabel">${lang.toUpperCase()}</span>`
  );

  // Path rewrites: /dist/{lang}/*.html → ../../assets/, etc.
  html = html.replace(/(src|srcset|href)="(js|css|assets|lang|blog)\//g, '$1="/$2/');
  html = html.replace(/url\('(js|css|assets)\//g, "url('/$1/");
  html = html.replace(/url\("(js|css|assets)\//g, 'url("/$1/');

  // Language-aware nav/footer links: /blog/ and /city-guide/ → /{lang}/blog/ and /{lang}/city-guide/
  if (lang !== 'en') {
    html = html.replace(/href="\/blog\//g, `href="/${lang}/blog/`);
    html = html.replace(/href="\/blog"/g, `href="/${lang}/blog/"`);
    html = html.replace(/href="\/city-guide\//g, `href="/${lang}/city-guide/`);
    html = html.replace(/href="\/city-guide"/g, `href="/${lang}/city-guide/"`);
  }

  // Title + meta description + OpenGraph tags (all use localized page.meta)
  // 5.A Madde 16: "Best" prefix for high-intent slugs (CTR +%20-30 expected).
  // Google "Related Searches" gösterir: "Best Bosphorus dinner cruise Istanbul",
  // "Best dinner cruise in Istanbul". Title'da "Best" var → match → CTR yükselir.
  const metaTitle = applyBestPrefix(fix(page.meta.title), slug, lang);
  const metaDesc = fix(page.meta.description);
  const metaTitleAttr = metaTitle.replace(/"/g, '&quot;');
  const metaDescAttr = metaDesc.replace(/"/g, '&quot;');
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${metaTitle}</title>`);
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${metaDescAttr}">`
  );
  html = html.replace(
    /<meta\s+property="og:title"[^>]*>/,
    `<meta property="og:title" content="${metaTitleAttr}">`
  );
  html = html.replace(
    /<meta\s+property="og:description"[^>]*>/,
    `<meta property="og:description" content="${metaDescAttr}">`
  );
  html = html.replace(
    /<meta\s+property="og:url"[^>]*>/,
    `<meta property="og:url" content="${urlFor(lang, slug)}">`
  );
  // og:image + Twitter Card — standardized 1200x630 social card for all landings
  // (per-landing custom og:image can be re-introduced once each is cropped to 1200x630).
  const ogImage = `${SITE_URL}/assets/data/og-image.jpg`;
  html = html.replace(/<meta\s+property="og:image"[^>]*>/g, `<meta property="og:image" content="${ogImage}">`);
  html = html.replace(/<meta\s+name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${metaTitleAttr}">`);
  html = html.replace(/<meta\s+name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${metaDescAttr}">`);
  html = html.replace(/<meta\s+name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${ogImage}">`);

  // Canonical + hreflang + Schema.org JSON-LD — inject right after charset meta
  const canonical = `  <link rel="canonical" href="${urlFor(lang, slug)}">`;
  const hreflang = buildHreflang(slug);
  const schemaLd = buildSchemaLd(page, lang, slug);
  html = html.replace(
    /(<meta charset="UTF-8">)/,
    `$1\n${canonical}\n${hreflang}\n${schemaLd}`
  );

  // Hero H1 (two spans, second gets gradient)
  const h1 = fix(page.hero.h1);
  const [p1, p2] = splitH1(h1);
  html = html.replace(/<span data-i18n="hero\.title1">[^<]*<\/span>/, `<span>${p1}</span>`);
  html = html.replace(
    /<span class="gradient-text" data-i18n="hero\.title2">[^<]*<\/span>/,
    `<span class="gradient-text">${p2}</span>`
  );

  // Hero subtitle + badge (strip data-i18n so setLanguage doesn't override)
  html = html.replace(
    /(<p[^>]*)\sdata-i18n="hero\.subtitle"([^>]*>)[\s\S]*?(<\/p>)/,
    `$1$2${fix(page.hero.subtitle)}$3`
  );
  html = html.replace(
    /(<span[^>]*)\sdata-i18n="hero\.badge"([^>]*>)[\s\S]*?(<\/span>)/,
    `$1$2${fix(page.hero.badge)}$3`
  );

  // Keyword intro + highlights blocks removed per user request —
  // duplicated existing on-page content (hero, What's Included, Route, FAQ).

  // Inject keyword FAQ items inside main FAQ list (at top, before FAQ 0)
  const faqItems = buildKeywordFaqItems(page.faq);
  html = html.replace(
    /(<div class="space-y-3">)(\s*<!-- FAQ 0)/,
    `$1\n${faqItems}$2`
  );

  // Inline boilerplate UI translations (nav, wizard, footer, etc.).
  // Hero spans lost their data-i18n earlier, so keyword-specific hero text stays.
  html = translateBoilerplate(html, lang);

  // Translate hardcoded English strings (not marked with data-i18n)
  html = translateHardcoded(html, lang);

  // Floating WhatsApp pill — wa.me href'i dile özgü mesaj ile değiştir
  // (data-i18n yalnız visible text'i çeviriyor, href hardcoded EN kalıyor)
  html = translateFloatingWaHref(html, lang);

  // RTL diller (AR, FA, UR) için pill konumunu sağa swap et
  if (lang === 'ar' || lang === 'fa' || lang === 'ur') {
    html = swapFloatingWaToRtl(html);
  }

  // Swap og:locale for non-EN languages
  html = swapOgLocale(html, lang);

  // Replace external <script src="/js/translations.js"></script> (671 KB) with
  // an inline bootstrap that exposes only this page's language + EN fallback.
  // subPrices is passed so T values with {p.dinnerStd}/€24/€55 placeholders are
  // resolved at build time, not left for runtime.
  const inlineT = buildInlineTScript(UI_T, LANGUAGES, lang, subPrices);
  html = replaceTranslationsScriptTag(html, inlineT);

  // Real Google reviews (cards + stat tokens) — same section as homepage, all 32 langs.
  html = injectGoogleReviews(html, lang);

  return html;
}

// Floating WhatsApp href'i dile özgü URL-encoded mesajla değiştir.
function translateFloatingWaHref(html, lang) {
  const msg = (UI_T['floatingWa.message'] && (UI_T['floatingWa.message'][lang] || UI_T['floatingWa.message'].en)) || '';
  if (!msg) return html;
  const encoded = encodeURIComponent(msg);
  return html.replace(
    /(<a\s+id="floatingWhatsapp"[^>]*\shref=")https:\/\/wa\.me\/(\d+)\?text=[^"]*(")/,
    `$1https://wa.me/$2?text=${encoded}$3`
  );
}

// RTL dillerinde pill sol kenardan sağ kenara taşı: left-12 → right-12, -left-1 → -right-1
function swapFloatingWaToRtl(html) {
  return html.replace(
    /(<a\s+id="floatingWhatsapp"[^>]*\sclass=")([^"]+)(")/,
    (_, pre, cls, post) => `${pre}${cls.replace(/\bleft-12\b/, 'right-12')}${post}`
  ).replace(
    /(<svg\s+class=")(absolute -left-1)([^"]*")/,
    (_, pre, target, post) => `${pre}absolute -right-1${post}`
  );
}

function translateHardcoded(html, lang) {
  if (lang === 'en') return html;
  let out = html;
  for (const [key, enValue] of Object.entries(HARDCODED_EN)) {
    const trans = HARDCODED_ALL[key] && HARDCODED_ALL[key][lang];
    if (!trans) continue;
    const enResolved = subPrices(enValue);
    const transResolved = subPrices(trans);
    const escaped = enResolved.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const escapedAttr = escaped.replace(/"/g, '&quot;');
    const transAttr = transResolved.replace(/"/g, '&quot;');
    out = out.replace(new RegExp(`>(\\s*)${escaped}(\\s*)<`, 'g'), `>$1${transResolved}$2<`);
    out = out.replace(
      new RegExp(`(\\s(?:alt|title|data-activity|data-label|aria-label)=")${escapedAttr}(")`, 'g'),
      `$1${transAttr}$2`
    );
  }
  return out;
}

function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;');
}

function translateBoilerplate(html, lang) {
  let out = html;
  const lookup = (key) => {
    const v = UI_T[key] && UI_T[key][lang];
    return v === undefined ? undefined : subPrices(v);
  };

  out = out.replace(
    /data-i18n-placeholder="([^"]+)"\s+placeholder="[^"]*"/g,
    (m, key) => {
      const t = lookup(key);
      return t !== undefined ? `data-i18n-placeholder="${key}" placeholder="${escapeAttr(t)}"` : m;
    }
  );
  out = out.replace(
    /placeholder="[^"]*"\s+data-i18n-placeholder="([^"]+)"/g,
    (m, key) => {
      const t = lookup(key);
      return t !== undefined ? `placeholder="${escapeAttr(t)}" data-i18n-placeholder="${key}"` : m;
    }
  );

  out = out.replace(
    /(<option[^>]*\sdata-i18n-opt="([^"]+)"[^>]*>)([^<]*)(<\/option>)/g,
    (m, open, key, _text, close) => {
      const t = lookup(key);
      return t !== undefined ? `${open}${t}${close}` : m;
    }
  );

  out = out.replace(
    /(<(\w+)[^>]*\sdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (m, open, _tag, key, _inner, close) => {
      const t = lookup(key);
      return t !== undefined ? `${open}${t}${close}` : m;
    }
  );

  return out;
}

function cleanOutput() {
  // Only remove landing pages (known slugs); preserve index.html and anything else.
  if (!fs.existsSync(OUT)) return;
  for (const lang of Object.keys(LANGUAGES)) {
    const dir = path.join(OUT, lang);
    if (!fs.existsSync(dir)) continue;
    for (const slug of SLUGS) {
      const f = path.join(dir, `${slug}.html`);
      if (fs.existsSync(f)) fs.unlinkSync(f);
    }
  }
}

function main() {
  const start = Date.now();
  console.log('📝 Build başlıyor — 17 sayfa × 15 dil = 255 HTML\n');

  cleanOutput();
  const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  let ok = 0;
  let fail = 0;
  const langStats = {};

  for (const lang of Object.keys(LANGUAGES)) {
    const dir = path.join(OUT, lang);
    fs.mkdirSync(dir, { recursive: true });
    langStats[lang] = 0;

    for (const slug of SLUGS) {
      try {
        const html = buildHtml(slug, lang, template);
        // Final pass: subPrices tüm HTML'i tarar, kaynak index.html'deki literal "€24"/"€55"
        // span'larını PRICES'tan canlı değere çevirir (Bug #1 sync).
        // Analytics inject: Meta Pixel head'e + bnTrack body sonuna. GA4/Ads zaten root template'de.
        const withAnalytics = subPrices(html)
          .replace('</head>', `${buildMetaPixelOnly()}\n</head>`)
          .replace('</body>', `${buildAnalyticsBodyEnd()}\n</body>`);
        fs.writeFileSync(path.join(dir, `${slug}.html`), withAnalytics);
        ok++;
        langStats[lang]++;
      } catch (err) {
        console.error(`  ✗ ${lang}/${slug}: ${err.message}`);
        fail++;
      }
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✅ ${ok}/${ok + fail} sayfa yazıldı (${elapsed}s)\n`);
  console.log('Dil başına:');
  for (const [lang, count] of Object.entries(langStats)) {
    const mark = count === SLUGS.length ? '✓' : '✗';
    console.log(`  ${mark} ${lang}: ${count}/${SLUGS.length}`);
  }

  console.log('\nPreview örnekleri (dev-server gerekli):');
  console.log(`  http://localhost:8080/dist/en/bosphorus-dinner-cruise.html`);
  console.log(`  http://localhost:8080/dist/tr/bosphorus-dinner-cruise.html`);
  console.log(`  http://localhost:8080/dist/ar/bosphorus-dinner-cruise.html   (RTL)`);
  console.log(`  http://localhost:8080/dist/de/romantic-bosphorus-cruise.html`);
}

main();
