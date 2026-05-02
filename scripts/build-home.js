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

// Load enriched translations.js (now includes all 15 languages)
const { T, LANGUAGES } = require(path.join(ROOT, 'js', 'translations.js'));

// Hardcoded UI strings (not marked with data-i18n in index.html, or with keys missing from T)
const HARDCODED_EN = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-en.json'));
const HARDCODED_ALL = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-all.json'));

// Keep in sync with build-pages.js PRICES.
// Canonical source: Supabase packages.price_eur (CLAUDE.md §3 — kanonik kaynak DB).
// Bug #1 sync: schema + UI placeholders use these literals → drift olmasın diye DB ile aynı.
// dinner fiyatları STRING (€24.30 trailing zero korunsun, Number(24.30).toString()=='24.3').
const PRICES = {
  dinnerStd: '24.30', dinnerStdOriginal: 40, dinnerVip: '55.20', dinnerVipOriginal: 90,
  alcohol2: 15, unlimited: 30, transfer: 10, romantic: 15
};
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
  id: 'id_ID', ms: 'ms_MY', pl: 'pl_PL', bg: 'bg_BG', ro: 'ro_RO'
};

// Source has og:locale=en_US + 14 alternates. For non-EN builds, swap: primary
// becomes current lang's locale, the current lang's alternate becomes en_US.
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
  const description = pick('meta.home.description', '3-hour Bosphorus dinner cruise from €24/person. Full dinner, Mevlana, folk dance, belly dance & DJ. Departs 21:00 from Kabataş. Hotel transfer available.');
  return { title, description };
}

function buildSchemaLd(lang) {
  const url = urlFor(lang);

  const business = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Bosphorus Night',
    url,
    inLanguage: lang,
    telephone: '+90 532 244 29 22',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kabataş Pier',
      addressLocality: 'Istanbul',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.036085,
      longitude: 28.994866
    },
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'TURSAB',
      name: 'TÜRSAB License',
      value: 'A-17672'
    },
    priceRange: '€20 - €90',
    image: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
    // aggregateRating intentionally omitted — re-added when real reviews are collected.
    sameAs: [
      'https://wa.me/905322442922',
      'https://t.me/BosphorusnightReservation_Bot',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/',
      'https://www.facebook.com/bosphorusnighttours/',
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
      availableLanguage: ['English', 'Turkish', 'Arabic', 'Russian', 'German', 'Spanish', 'French', 'Italian', 'Chinese', 'Persian', 'Indonesian', 'Malay', 'Polish', 'Bulgarian', 'Romanian']
    },
    sameAs: [
      'https://wa.me/905322442922',
      'https://t.me/BosphorusnightReservation_Bot',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/',
      'https://www.facebook.com/bosphorusnighttours/',
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
      streetAddress: 'Kabataş Pier',
      addressLocality: 'Istanbul',
      addressCountry: 'TR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.036085,
      longitude: 28.994866
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

  const tourDinnerStd = {
    ...tourBase(
      'Standard Bosphorus Dinner Cruise',
      '3-hour dinner cruise with 10 meze dishes, hot appetizer, main course (salmon / sea bass / chicken / meatballs), dessert, unlimited soft drinks, live Turkish entertainment (folk dance, belly dance, live music, DJ). Departs 21:00 from Kabataş Pier. Pay on the boat.',
      24.30,
      'https://www.bosphorusnight.com/bosphorus-dinner-cruise',
      'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
      '21:00',
      'International tourists, couples, families, groups'
    ),
    offers: {
      '@type': 'Offer',
      price: '24.30',
      priceCurrency: 'EUR',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://www.bosphorusnight.com/bosphorus-dinner-cruise',
      validFrom: '2026-01-01',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '24.30',
        priceCurrency: 'EUR',
        referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'E50' }
      }
    }
  };

  const tourDinnerVip = tourBase(
    'VIP Bosphorus Dinner Cruise',
    '3-hour premium dinner cruise with 15+ premium meze, rib-eye / fillet steak main, VIP stage-side table, premium service. All entertainment included. Departs 21:00 from Kabataş Pier.',
    55.20,
    'https://www.bosphorusnight.com/bosphorus-vip',
    'https://www.bosphorusnight.com/assets/tours/dinner/dining-romantic.jpg',
    '21:00',
    'Premium travelers, special occasions, VIP guests'
  );

  // Dinner cruise SocialEvent with recurring daily schedule + 2 offers (Std + VIP).
  // startDate = tomorrow 21:00 local (Europe/Istanbul = +03:00), refreshed on every build.
  // A weekly auto-rebuild (GitHub Actions) keeps this evergreen for Google Events rich results.
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const tomorrowDate = tomorrow.toISOString().split('T')[0];
  const dayAfter = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

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
    '3-hour Bosphorus dinner cruise from €{p.dinnerStd}/person. Full dinner, Mevlana, folk dance, belly dance & DJ. Departs 21:00 from Kabataş. Hotel transfer available.'
  ));

  const dinnerEvent = {
    '@context': 'https://schema.org',
    '@type': 'SocialEvent',
    name: eventName,
    description: eventDescription,
    image: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
    inLanguage: lang,
    startDate: `${tomorrowDate}T21:00:00+03:00`,
    endDate: `${dayAfter}T00:00:00+03:00`,
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
        price: '24.30',
        priceCurrency: 'EUR',
        url: 'https://www.bosphorusnight.com/bosphorus-dinner-cruise',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01'
      },
      {
        '@type': 'Offer',
        name: 'VIP Package',
        price: '55.20',
        priceCurrency: 'EUR',
        url: 'https://www.bosphorusnight.com/bosphorus-vip',
        availability: 'https://schema.org/InStock',
        validFrom: '2026-01-01'
      }
    ],
    // Evergreen schedule: bugünden 1 yıl ileri. Build her hafta yenilenir
    // (GitHub Actions cron) — 2027'de "etkinlik bitti" sorunu yaşanmaz.
    eventSchedule: {
      '@type': 'Schedule',
      repeatFrequency: 'P1D',
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  };

  return [business, organization, website, ...videos, heroImage, tourDinnerStd, tourDinnerVip, dinnerEvent]
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

  // Path rewrites (output depth: dist/{lang}/index.html → ../../)
  html = html.replace(/(src|srcset|href)="(js|css|assets|lang|blog)\//g, '$1="/$2/');
  html = html.replace(/url\('(js|css|assets)\//g, "url('/$1/");
  html = html.replace(/url\("(js|css|assets)\//g, 'url("/$1/');

  // Inject canonical + hreflang + Schema.org JSON-LD after charset meta
  const canonical = `  <link rel="canonical" href="${urlFor(lang)}">`;
  const hreflang = buildHreflang();
  const schemaLd = buildSchemaLd(lang);
  html = html.replace(/(<meta charset="UTF-8">)/, `$1\n${canonical}\n${hreflang}\n${schemaLd}`);

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

  // Swap og:locale for non-EN languages
  html = swapOgLocale(html, lang);

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
      fs.writeFileSync(path.join(dir, 'index.html'), subPrices(html));
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
