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

// Load enriched translations.js (now includes all 15 languages)
const { T, LANGUAGES } = require(path.join(ROOT, 'js', 'translations.js'));

// Hardcoded UI strings (not marked with data-i18n in index.html, or with keys missing from T)
const HARDCODED_EN = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-en.json'));
const HARDCODED_ALL = require(path.join(ROOT, 'content', 'ui-translations', '_hardcoded-all.json'));

// Keep in sync with build-pages.js PRICES
const PRICES = {
  dinnerStd: 24, dinnerStdOriginal: 40, dinnerVip: 55, dinnerVipOriginal: 90,
  alcohol2: 15, unlimited: 30, transfer: 10, romantic: 15
};
const subPrices = (s) => s.replace(/\{p\.(\w+)\}/g, (_, k) => PRICES[k] ?? '??');

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
  const subtitle = pick('hero.subtitle', 'Live entertainment · Dinner · Bosphorus night views · 7/24 instant support');
  const noprepay = pick('hero.noprepay', 'No prepayment — Pay on the boat');
  // CJK languages don't use spaces between words.
  const sep = lang === 'zh' ? '' : ' ';
  const title = `${title1}${sep}${title2} — Bosphorus Night Istanbul`;
  const description = `${subtitle}. ${noprepay}.`;
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
      latitude: 41.0361,
      longitude: 28.9947
    },
    identifier: 'TÜRSAB A-17672',
    priceRange: '€20 - €90',
    image: 'https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg',
    // aggregateRating intentionally omitted — re-added when real reviews are collected.
    sameAs: [
      'https://wa.me/905322442922',
      'https://t.me/bosphorusnight',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/'
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
      'https://t.me/bosphorusnight',
      'https://www.youtube.com/@BosphorusNightTour',
      'https://www.instagram.com/bosphorusnighttour/'
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
      uploadDate: '2026-04-20',
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
      uploadDate: '2026-04-20',
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

  return [business, organization, website, ...videos, heroImage]
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
  html = html.replace(/(src|href)="(js|css|assets|lang|blog)\//g, '$1="/$2/');
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
      fs.writeFileSync(path.join(dir, 'index.html'), html);
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
