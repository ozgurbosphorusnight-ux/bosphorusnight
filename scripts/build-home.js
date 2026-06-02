#!/usr/bin/env node
/**
 * Static home page builder: renders 15 language-specific copies of index.html.
 * Inlines all data-i18n="key" elements with their translated text.
 * Output: dist/{lang}/index.html (15 files).
 * Usage: node scripts/build-home.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'dist');
const SITE_URL = 'https://www.bosphorusnight.com';

const { buildBosphorusItinerary, buildBosphorusMentions } = require('./_wikidata-entities.js');
const { buildMetaPixelOnly, buildAnalyticsBodyEnd } = require('./_analytics-snippet.js');
const { buildInlineTScript, replaceTranslationsScriptTag } = require('./_inline-translations.js');

// Load enriched translations.js (now includes all 15 languages)
const { T, LANGUAGES } = require(path.join(ROOT, 'js', 'translations.js'));

// Hardcoded UI strings (not marked with data-i18n in index.html, or with keys missing from T)
const HARDCODED_EN = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-en.json'));
const HARDCODED_ALL = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-all.json'));
const SCHEMA_I18N = require('./schema-i18n.js');

// Keep in sync with build-pages.js PRICES.
// Canonical source: Supabase packages.price_eur (CLAUDE.md §3 — kanonik kaynak DB).
// Bug #1 sync: schema + UI placeholders use these literals → drift olmasın diye DB ile aynı.
// dinner fiyatları STRING. Özgür kararı 31 May: trailing zero YOK → "24.3"/"55.2" göster (CLAUDE.md §3 notu güncellenecek).
const PRICES = {
  dinnerStd: '24.3', dinnerStdOriginal: 40.5, dinnerVip: '55.2', dinnerVipOriginal: 92,
  alcohol2: 15, unlimited: 30, transfer: 10, romantic: 15
};
// Google Business Profile yorumları — ortak modül (build-pages.js ile paylaşımlı tek kaynak).
// Veri: assets/data/google-reviews.json. Hetzner cron'u dosyayı tazeler.
const { GREVIEWS, injectGoogleReviews } = require('./_google-reviews.js');
const RATING = { value: String(GREVIEWS.rating), count: GREVIEWS.reviewCount };
// Replaces {p.key} placeholders + literal €24/€55 mentions left in legacy translations.
// Bug #1 sync — drift kapatma: T sözlüğündeki çevirilerde "€24"/"€55" literal yazılmış olabilir,
// bunları PRICES'tan canlı değere çek. (?!\.\d|\d) lookahead — sadece "€24.30" / "€243"
// devam eden literal sayıları reject eder, cümle sonu noktası ("€24.") yine match eder.
const subPrices = (s) => s
  .replace(/\{p\.(\w+)\}/g, (_, k) => PRICES[k] ?? '??')
  .replace(/€24(?!\.\d|\d)/g, `€${PRICES.dinnerStd}`)
  .replace(/€55(?!\.\d|\d)/g, `€${PRICES.dinnerVip}`);

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
    // 1) Text node between tags (preserve whitespace)
    out = out.replace(new RegExp(`>(\\s*)${escaped}(\\s*)<`, 'g'), `>$1${transResolved}$2<`);
    // 2) Attribute values: alt="...", data-activity="...", data-label="...", title="..."
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

function urlFor(lang) {
  return lang === 'en' ? SITE_URL : `${SITE_URL}/${lang}`;
}

// ISO locale codes for og:locale (Facebook/OpenGraph convention: language_COUNTRY).
const OG_LOCALES = {
  en: 'en_US', tr: 'tr_TR', de: 'de_DE', es: 'es_ES', ru: 'ru_RU',
  ar: 'ar_SA', fa: 'fa_IR', fr: 'fr_FR', it: 'it_IT', zh: 'zh_CN',
  id: 'id_ID', ms: 'ms_MY', pl: 'pl_PL', bg: 'bg_BG', ro: 'ro_RO',
  uk: 'uk_UA', hi: 'hi_IN', ur: 'ur_PK', ja: 'ja_JP', ko: 'ko_KR',
  pt: 'pt_PT', nl: 'nl_NL', el: 'el_GR', cs: 'cs_CZ', hu: 'hu_HU',
  sv: 'sv_SE', da: 'da_DK', no: 'nb_NO', fi: 'fi_FI', sk: 'sk_SK',
  sl: 'sl_SI', lv: 'lv_LV'
};

// English names for schema.org Organization.contactPoint.availableLanguage.
// Generated from LANGUAGES so it stays in sync (was hardcoded to 15, site has 32).
const LANG_NAMES = {
  en: 'English', tr: 'Turkish', de: 'German', es: 'Spanish', ru: 'Russian',
  ar: 'Arabic', fa: 'Persian', fr: 'French', it: 'Italian', zh: 'Chinese',
  id: 'Indonesian', ms: 'Malay', pl: 'Polish', bg: 'Bulgarian', ro: 'Romanian',
  uk: 'Ukrainian', hi: 'Hindi', ur: 'Urdu', ja: 'Japanese', ko: 'Korean',
  pt: 'Portuguese', nl: 'Dutch', el: 'Greek', cs: 'Czech', hu: 'Hungarian',
  sv: 'Swedish', da: 'Danish', no: 'Norwegian', fi: 'Finnish', sk: 'Slovak',
  sl: 'Slovenian', lv: 'Latvian'
};
const AVAILABLE_LANGUAGES = Object.keys(LANGUAGES).map((l) => LANG_NAMES[l] || l);

// Wikidata knowledge-graph entity for the brand (reciprocal link so Google/AI can
// resolve "Bosphorus Night" to its entity — referenced in llms.txt too).
const WIKIDATA_ENTITY = 'https://www.wikidata.org/wiki/Q139595356';

// Rebuild the whole og:locale block from all 32 languages: primary = current lang,
// the other 31 as alternates. Source index.html only hardcodes 14 alternates and the
// old swap-only logic left 17 newer langs (and en_US on those pages) missing from
// the alternate list. Generating from OG_LOCALES keeps this in lockstep with LANGUAGES.
function buildOgLocaleBlock(lang) {
  const primary = OG_LOCALES[lang] || 'en_US';
  const lines = [`  <meta property="og:locale" content="${primary}">`];
  for (const l of Object.keys(LANGUAGES)) {
    if (l === lang || !OG_LOCALES[l]) continue;
    lines.push(`  <meta property="og:locale:alternate" content="${OG_LOCALES[l]}">`);
  }
  return lines.join('\n');
}

function injectOgLocale(html, lang) {
  return html.replace(
    /[ \t]*<meta property="og:locale" content="[^"]*">\r?\n(?:[ \t]*<meta property="og:locale:alternate" content="[^"]*">\r?\n)*/,
    buildOgLocaleBlock(lang) + '\n'
  );
}

function buildHreflang() {
  const links = Object.keys(LANGUAGES)
    .map((lang) => `  <link rel="alternate" hreflang="${lang}" href="${urlFor(lang)}">`)
    .join('\n');
  return links + `\n  <link rel="alternate" hreflang="x-default" href="${urlFor('en')}">`;
}

function buildMeta(lang) {
  const pick = (key, fallback) => (T[key] && T[key][lang]) || (T[key] && T[key].en) || fallback;
  const title1 = pick('hero.title1', 'Luxury Bosphorus');
  const title2 = pick('hero.title2', 'Dinner Cruise');
  // CJK languages don't use spaces between words.
  const sep = lang === 'zh' ? '' : ' ';
  const title = `${title1}${sep}${title2} — Bosphorus Night Istanbul`;
  const description = pick('meta.home.description', '3-hour Bosphorus dinner cruise from €24/person. Full dinner, Mevlana, folk dance, belly dance & DJ. Departs 20:30 from Kabataş. Hotel transfer available.');
  return { title, description };
}

function buildSchemaLd(lang) {
  const url = urlFor(lang);

  const business = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    '@id': WIKIDATA_ENTITY,
    name: 'Bosphorus Night',
    url,
    inLanguage: lang,
    telephone: '+90 532 244 29 22',
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
    priceRange: '€20 - €90',
    image: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
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
    })),
    sameAs: [
      'https://www.wikidata.org/wiki/Q139595356',
      'https://wa.me/905322442922',
      'https://t.me/BosphorusnightReservation_Bot',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/',
      'https://www.facebook.com/bosphorusnighttours/',
      'https://www.tiktok.com/@bosphorusnight.com',
      'https://www.pinterest.com/bosphorusnight/',
      'https://maps.app.goo.gl/CAGjhxLTBJfGtUas9'
    ]
  };

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bosphorus Night',
    url: SITE_URL,
    logo: 'https://www.bosphorusnight.com/assets/data/logo png lst.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90 532 244 29 22',
      contactType: 'customer service',
      availableLanguage: AVAILABLE_LANGUAGES
    },
    sameAs: [
      'https://www.wikidata.org/wiki/Q139595356',
      'https://wa.me/905322442922',
      'https://t.me/BosphorusnightReservation_Bot',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/',
      'https://www.facebook.com/bosphorusnighttours/',
      'https://www.tiktok.com/@bosphorusnight.com',
      'https://www.pinterest.com/bosphorusnight/',
      'https://maps.app.goo.gl/CAGjhxLTBJfGtUas9'
    ]
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bosphorus Night',
    url: 'https://www.bosphorusnight.com',
    inLanguage: lang,
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.bosphorusnight.com/?q={search_term}',
      'query-input': 'required name=search_term'
    }
  };

  // Meeting-point walking direction videos (YouTube embeds in the page).
  const videos = [
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

  // ImageObject for the primary hero / marketing image.
  const heroImage = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
    caption: 'Bosphorus Night dinner cruise boat under illuminated bridge',
    inLanguage: lang
  };

  // Bosphorus itinerary (shared) — Wikidata @id per stop where available.
  const bosphorusItinerary = buildBosphorusItinerary();
  const bosphorusMentions = buildBosphorusMentions();

  const provider = {
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
      'https://www.wikidata.org/wiki/Q139595356',
      'https://wa.me/905322442922',
      'https://t.me/BosphorusnightReservation_Bot',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/',
      'https://www.facebook.com/bosphorusnighttours/',
      'https://www.tiktok.com/@bosphorusnight.com',
      'https://www.pinterest.com/bosphorusnight/',
      'https://maps.app.goo.gl/CAGjhxLTBJfGtUas9'
    ]
  };

  const tourBase = (name, description, price, url, image, duration, audience) => ({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    touristType: audience,
    inLanguage: lang,
    image,
    provider,
    itinerary: bosphorusItinerary,
    mentions: bosphorusMentions,
    offers: {
      '@type': 'Offer',
      price: Number(price).toFixed(2),
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url,
      validFrom: '2026-01-01'
    },
    // ISO 8601 duration
    subjectOf: {
      '@type': 'CreativeWork',
      about: `${duration} departure from Kabataş Pier, Istanbul`
    }
  });

  // Daytime and Sunset tours deferred — not active products yet (will be added when
  // they become bookable and priced).

  // Per-lang TouristTrip name + description + audience (with EN fallback). Source: scripts/schema-i18n.js.
  const sPick = (group, field) => SCHEMA_I18N[group][field][lang] || SCHEMA_I18N[group][field].en;

  const tourDinnerStd = {
    ...tourBase(
      sPick('std', 'name'),
      sPick('std', 'description'),
      24.30,
      'https://www.bosphorusnight.com/bosphorus-dinner-cruise',
      'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
      '20:30',
      sPick('std', 'audience')
    ),
    offers: {
      '@type': 'Offer',
      price: '24.3',
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://www.bosphorusnight.com/bosphorus-dinner-cruise',
      validFrom: '2026-01-01',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '24.3',
        priceCurrency: 'EUR',
        referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'E50' }
      }
    }
  };

  const tourDinnerVip = tourBase(
    sPick('vip', 'name'),
    sPick('vip', 'description'),
    55.20,
    'https://www.bosphorusnight.com/bosphorus-vip',
    'https://www.bosphorusnight.com/assets/tours/dinner/dining-romantic.jpg',
    '20:30',
    sPick('vip', 'audience')
  );

  // Dinner cruise SocialEvent with recurring daily schedule + 2 offers (Std + VIP).
  // startDate = tomorrow 20:30 local (Europe/Istanbul = +03:00), refreshed on every build.
  // A daily auto-rebuild (GitHub Actions cron) keeps this evergreen for Google Events rich results.
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const tomorrowDate = tomorrow.toISOString().split('T')[0];

  // i18n name + description for SocialEvent (15 dilde build edilen anasayfaya inject)
  // pick(): T sözlüğünde varsa lang, yoksa en, yoksa fallback. subPrices(): {p.dinnerStd}
  // placeholder'ı PRICES'ten replace eder → fiyat drift kapatılır.
  const pick = (key, fallback) => (T[key] && T[key][lang]) || (T[key] && T[key].en) || fallback;
  const sep = lang === 'zh' ? '' : ' ';
  // Schema name: title1+title2 çevrilir (15 dilde T'de var), "— Turkish Night Show" literal
  // (alt-başlık her dilde tek tip, schema name'i kısa tutar — uzun reklam metni Google'da kırpılır).
  const eventName = `${pick('hero.title1', 'Luxury Bosphorus')}${sep}${pick('hero.title2', 'Dinner Cruise')} — Turkish Night Show`;
  const eventDescription = subPrices(pick(
    'meta.home.description',
    '3-hour Bosphorus dinner cruise from €{p.dinnerStd}/person. Full dinner, Mevlana, folk dance, belly dance & DJ. Departs 20:30 from Kabataş. Hotel transfer available.'
  ));

  const dinnerEvent = {
    '@context': 'https://schema.org',
    '@type': 'SocialEvent',
    name: eventName,
    description: eventDescription,
    image: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
    inLanguage: lang,
    startDate: `${tomorrowDate}T20:30:00+03:00`,
    endDate: `${tomorrowDate}T23:30:00+03:00`,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Kabataş Pier',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kabataş İskelesi',
        addressLocality: 'Istanbul',
        addressRegion: 'İstanbul',
        postalCode: '34437',
        addressCountry: 'TR'
      },
      geo: { '@type': 'GeoCoordinates', latitude: 41.036085, longitude: 28.994866 }
    },
    organizer: {
      '@type': 'TravelAgency',
      name: 'Bosphorus Night',
      url: SITE_URL,
      telephone: '+90 532 244 29 22'
    },
    performer: {
      '@type': 'PerformingGroup',
      name: 'Bosphorus Night Entertainment',
      description: 'Traditional Mevlana whirling dervish, 5 Turkish folk dances, belly dance show, live music, and DJ set'
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Standard Package',
        price: '24.3',
        priceCurrency: 'EUR',
        url: 'https://www.bosphorusnight.com/bosphorus-dinner-cruise',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01'
      },
      {
        '@type': 'Offer',
        name: 'VIP Package',
        price: '55.2',
        priceCurrency: 'EUR',
        url: 'https://www.bosphorusnight.com/bosphorus-vip',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01'
      }
    ],
    // Evergreen schedule: bugünden 1 yıl ileri. Build her gün yenilenir
    // (GitHub Actions cron) — 2027'de "etkinlik bitti" sorunu yaşanmaz.
    eventSchedule: {
      '@type': 'Schedule',
      repeatFrequency: 'P1D',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  };

  // FAQPage schema — built from the homepage's visible FAQ (faq.qN/faq.aN), localized.
  // Content is already on the page (id="faq"), so this is Google-compliant + no visual change.
  const faqKeys = Object.keys(T)
    .filter((k) => /^faq\.q\d+$/.test(k))
    .sort((a, b) => Number(a.slice(5)) - Number(b.slice(5)));
  const faqMainEntity = faqKeys.map((qKey) => {
    const i = qKey.slice(5);
    const qRaw = (T[qKey] && (T[qKey][lang] || T[qKey].en)) || '';
    const aRaw = (T['faq.a' + i] && (T['faq.a' + i][lang] || T['faq.a' + i].en)) || '';
    const q = subPrices(qRaw).replace(/<[^>]+>/g, '').trim();
    const a = subPrices(aRaw).replace(/<[^>]+>/g, '').trim();
    return q && a
      ? { '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }
      : null;
  }).filter(Boolean);
  const faqSchema = faqMainEntity.length
    ? { '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang, mainEntity: faqMainEntity }
    : null;

  return [business, organization, website, ...videos, heroImage, tourDinnerStd, tourDinnerVip, dinnerEvent, faqSchema]
    .filter(Boolean)
    .map((b) => `<script type="application/ld+json">\n${JSON.stringify(b, null, 2)}\n</script>`)
    .join('\n');
}

function translateHtml(html, lang) {
  let out = html;
  const lookup = (key) => {
    const v = T[key] && T[key][lang];
    return v === undefined ? undefined : subPrices(v);
  };

  // 1) data-i18n-placeholder="key" paired with placeholder="..."
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

  // 2) <option data-i18n-opt="key">text</option>
  out = out.replace(
    /(<option[^>]*\sdata-i18n-opt="([^"]+)"[^>]*>)([^<]*)(<\/option>)/g,
    (m, open, key, _text, close) => {
      const t = lookup(key);
      return t !== undefined ? `${open}${t}${close}` : m;
    }
  );

  // 3) <tag data-i18n="key">content</tag> — non-greedy match to same-tag close
  out = out.replace(
    /(<(\w+)[^>]*\sdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g,
    (m, open, _tag, key, _inner, close) => {
      const t = lookup(key);
      return t !== undefined ? `${open}${t}${close}` : m;
    }
  );

  return out;
}

function buildForLang(lang, template) {
  const langMeta = LANGUAGES[lang];
  let html = template;

  // Set <html lang> + dir
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

  // Path rewrites (output depth: dist/{lang}/index.html → ../../)
  html = html.replace(/(src|srcset|href)="(js|css|assets|lang|blog)\//g, '$1="/$2/');
  html = html.replace(/url\('(js|css|assets)\//g, "url('/$1/");
  html = html.replace(/url\("(js|css|assets)\//g, 'url("/$1/');

  // Language-aware nav/footer links: /blog/ and /city-guide/ → /{lang}/blog/ and /{lang}/city-guide/
  // EN stays at root, all other langs get lang-prefixed paths.
  if (lang !== 'en') {
    html = html.replace(/href="\/blog\//g, `href="/${lang}/blog/`);
    html = html.replace(/href="\/blog"/g, `href="/${lang}/blog/"`);
    html = html.replace(/href="\/city-guide\//g, `href="/${lang}/city-guide/`);
    html = html.replace(/href="\/city-guide"/g, `href="/${lang}/city-guide/"`);
  }

  // Inject canonical + hreflang + Schema.org JSON-LD after charset meta
  const canonical = `  <link rel="canonical" href="${urlFor(lang)}">`;
  const hreflang = buildHreflang();
  const schemaLd = buildSchemaLd(lang);
  html = html.replace(/(<meta charset="UTF-8">)/, `$1\n${canonical}\n${hreflang}\n${schemaLd}`);

  // Inject real Google reviews (cards + stat tokens) — shared with build-pages.js.
  html = injectGoogleReviews(html, lang);

  // Localize <title>, description, and OpenGraph tags from translation keys.
  const { title, description } = buildMeta(lang);
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*">/,
    `<meta name="description" content="${escapeAttr(description)}">`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*">/,
    `<meta property="og:title" content="${escapeAttr(title)}">`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*">/,
    `<meta property="og:description" content="${escapeAttr(description)}">`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*">/,
    `<meta property="og:url" content="${urlFor(lang)}">`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeAttr(title)}">`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*">/,
    `<meta name="twitter:description" content="${escapeAttr(description)}">`
  );

  // Translate all data-i18n attributes
  html = translateHtml(html, lang);

  // Translate hardcoded English strings that lack data-i18n
  html = translateHardcoded(html, lang);

  // Rebuild og:locale block from all 32 languages (primary = current lang)
  html = injectOgLocale(html, lang);

  // Replace external <script src="/js/translations.js"></script> (671 KB) with
  // an inline bootstrap that exposes only this page's language + EN fallback.
  // subPrices is passed so T values with {p.dinnerStd}/€24/€55 placeholders are
  // resolved at build time, not left for runtime.
  const inlineT = buildInlineTScript(T, LANGUAGES, lang, subPrices);
  html = replaceTranslationsScriptTag(html, inlineT);

  return html;
}

function main() {
  const start = Date.now();
  console.log('📝 Ana sayfa build — 15 dil\n');

  const template = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  let ok = 0;
  let fail = 0;

  for (const lang of Object.keys(LANGUAGES)) {
    try {
      const dir = path.join(OUT, lang);
      fs.mkdirSync(dir, { recursive: true });
      const html = buildForLang(lang, template);
      // Final pass: subPrices regex tüm HTML'i tarayıp literal "€24"/"€55" geçen yerleri
      // (kaynak index.html'de span içinde hardcoded olan price etiketleri) PRICES'tan replace eder.
      // Analytics inject: Meta Pixel head'e + bnTrack body sonuna. GA4/Ads zaten root'ta hardcoded.
      const withAnalytics = subPrices(html)
        .replace('</head>', `${buildMetaPixelOnly()}\n</head>`)
        .replace('</body>', `${buildAnalyticsBodyEnd()}\n</body>`);
      fs.writeFileSync(path.join(dir, 'index.html'), withAnalytics);
      ok++;
      console.log(`  ✓ dist/${lang}/index.html (${(html.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`  ✗ ${lang}: ${err.message}`);
      fail++;
    }
  }

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`\n✅ ${ok}/${ok + fail} ana sayfa yazıldı (${elapsed}s)`);
  console.log('\nPreview:');
  console.log(`  http://localhost:8080/dist/en/index.html`);
  console.log(`  http://localhost:8080/dist/tr/index.html`);
  console.log(`  http://localhost:8080/dist/ar/index.html   (RTL)`);
  console.log(`  http://localhost:8080/dist/zh/index.html`);
}

main();
