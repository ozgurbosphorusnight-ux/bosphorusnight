#!/usr/bin/env node
/**
 * Static SEO page generator for Bosphorus Night cruise website
 * Generates: 4 tour types x 17 languages = 68 HTML pages + sitemap.xml
 * No external dependencies required.
 *
 * Usage: node scripts/build-pages.js
 */

const fs = require('fs');
const path = require('path');

// ========== CONFIGURATION ==========
const SITE_URL = 'https://bosphorusnight.com';
const WA_NUMBER = '905528881888';
const GA_ID = 'AW-18073952031';
const OUTPUT_DIR = path.join(__dirname, '..', 'cruises');

const LANGUAGES = {
  en: { flag: 'gb', label: 'English', dir: 'ltr', prefix: '' },
  tr: { flag: 'tr', label: 'Türkçe', dir: 'ltr', prefix: 'tr' },
  de: { flag: 'de', label: 'Deutsch', dir: 'ltr', prefix: 'de' },
  es: { flag: 'es', label: 'Español', dir: 'ltr', prefix: 'es' },
  ru: { flag: 'ru', label: 'Русский', dir: 'ltr', prefix: 'ru' },
  ar: { flag: 'sa', label: 'العربية', dir: 'rtl', prefix: 'ar' },
  bg: { flag: 'bg', label: 'Български', dir: 'ltr', prefix: 'bg' },
  ro: { flag: 'ro', label: 'Română', dir: 'ltr', prefix: 'ro' },
  zh: { flag: 'cn', label: '中文', dir: 'ltr', prefix: 'zh' },
  fr: { flag: 'fr', label: 'Français', dir: 'ltr', prefix: 'fr' },
  it: { flag: 'it', label: 'Italiano', dir: 'ltr', prefix: 'it' },
  ja: { flag: 'jp', label: '日本語', dir: 'ltr', prefix: 'ja' },
  ko: { flag: 'kr', label: '한국어', dir: 'ltr', prefix: 'ko' },
  ms: { flag: 'my', label: 'Bahasa Melayu', dir: 'ltr', prefix: 'ms' },
  id: { flag: 'id', label: 'Bahasa Indonesia', dir: 'ltr', prefix: 'id' },
  ur: { flag: 'pk', label: 'اردو', dir: 'rtl', prefix: 'ur' },
  hi: { flag: 'in', label: 'हिन्दी', dir: 'ltr', prefix: 'hi' }
};

// ========== TOUR DATA ==========
const TOURS = {
  daytime: {
    slug: 'daytime-cruise',
    time: '12:00',
    duration: '1.5',
    pier: 'Kabataş Pier',
    boats: ['classic', 'premium'],
    prices: {
      classic:  { standard: 20, premium: 30, vip: 45 },
      premium:  { standard: 25, premium: 35, vip: 50 }
    },
    heroImage: '/assets/tours/daytime/boat-panorama.jpg',
    gallery: [
      '/assets/tours/daytime/boat-panorama.jpg',
      '/assets/tours/daytime/dolmabahce.jpg',
      '/assets/tours/daytime/lufer-bridge.jpg',
      '/assets/tours/daytime/deck-guests.jpg'
    ]
  },
  sunset: {
    slug: 'sunset-cruise',
    time: '17:30',
    duration: '3',
    pier: 'Kabataş Pier',
    boats: ['classic', 'premium', 'luxury'],
    prices: {
      classic:  { standard: 35, premium: 50, vip: 70 },
      premium:  { standard: 45, premium: 60, vip: 80 },
      luxury:   { standard: 55, premium: 70, vip: 90 }
    },
    heroImage: '/assets/tours/sunset/amor-sunset-golden.jpg',
    gallery: [
      '/assets/tours/sunset/amor-sunset-golden.jpg',
      '/assets/tours/sunset/amor-sunset-dramatic.jpg',
      '/assets/tours/sunset/amor-dining-wine.jpg',
      '/assets/tours/sunset/amor-hall-blue.jpg'
    ]
  },
  dinner: {
    slug: 'dinner-cruise',
    time: '20:45',
    duration: '3.5',
    pier: 'Kabataş Pier',
    boats: ['classic', 'premium', 'luxury'],
    prices: {
      classic:  { standard: 35, premium: 50, vip: 70 },
      premium:  { standard: 45, premium: 60, vip: 80 },
      luxury:   { standard: 55, premium: 70, vip: 90 }
    },
    heroImage: '/assets/tours/dinner/boat-night-bridge.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/belly-dance.jpg'
    ]
  },
  'last-minute': {
    slug: 'last-minute-tonight',
    time: null,
    duration: null,
    pier: 'Kabataş Pier',
    boats: [],
    prices: {},
    heroImage: '/assets/tours/dinner/boat-night-bridge.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/sunset/amor-sunset-golden.jpg',
      '/assets/tours/daytime/boat-panorama.jpg'
    ]
  }
};

// ========== SEO CONTENT (per tour, per language) ==========
const SEO = {
  daytime: {
    en: {
      title: 'Istanbul Bosphorus Cruise \u2014 Daytime Sightseeing Tour',
      description: 'Enjoy a 1.5-hour daytime Bosphorus cruise from Kabata\u015f. See Dolmabah\u00e7e Palace, Bosphorus Bridge & more. Book instantly via WhatsApp.',
      tourName: 'Daytime Bosphorus Cruise',
      subtitle: 'See Istanbul\u2019s iconic landmarks from the water under the bright daytime sun.',
      duration: '1.5 Hours',
      highlights: ['Scenic Bosphorus sightseeing', 'Dolmabah\u00e7e Palace views', 'Bosphorus Bridge panorama', 'Open-air deck experience', 'Live audio guide commentary', 'Refreshments available onboard'],
      faq: [
        { q: 'What landmarks will I see?', a: 'You\u2019ll pass by Dolmabah\u00e7e Palace, Bosphorus Bridge (15 July Martyrs Bridge), Rumeli Fortress, Beylerbeyi Palace, and many waterfront mansions (yal\u0131s).' },
        { q: 'Is lunch included?', a: 'The daytime sightseeing cruise does not include a meal, but drinks and snacks are available for purchase onboard. For a dining experience, check our Sunset or Dinner cruises.' },
        { q: 'How long is the cruise?', a: 'The cruise lasts approximately 1.5 hours, departing at 12:00 and returning around 13:30.' },
        { q: 'Where does it depart from?', a: 'All cruises depart from Kabata\u015f Pier, easily accessible by tram (T1 line) from Sultanahmet and by funicular from Taksim Square.' }
      ]
    },
    tr: {
      title: '\u0130stanbul Bo\u011faz Turu \u2014 G\u00fcnd\u00fcz Gezi Turu',
      description: 'Kabata\u015f\u2019tan kalkan 1.5 saatlik g\u00fcnd\u00fcz Bo\u011faz turu. Dolmabah\u00e7e Saray\u0131, Bo\u011faz K\u00f6pr\u00fcs\u00fc ve daha fazlas\u0131n\u0131 g\u00f6r\u00fcn. WhatsApp ile an\u0131nda rezervasyon.',
      tourName: 'G\u00fcnd\u00fcz Bo\u011faz Turu',
      subtitle: 'G\u00fcne\u015fin alt\u0131nda \u0130stanbul\u2019un ikonik simgelerini sudan izleyin.',
      duration: '1.5 Saat',
      highlights: ['Manzaral\u0131 Bo\u011faz gezisi', 'Dolmabah\u00e7e Saray\u0131 manzaras\u0131', 'Bo\u011faz K\u00f6pr\u00fcs\u00fc panoramas\u0131', 'A\u00e7\u0131k hava g\u00fcverte deneyimi', 'Canl\u0131 sesli rehberlik', 'Gemide i\u00e7ecek servisi'],
      faq: [
        { q: 'Hangi tarihi yerleri g\u00f6rece\u011fim?', a: 'Dolmabah\u00e7e Saray\u0131, Bo\u011faz K\u00f6pr\u00fcs\u00fc (15 Temmuz \u015eehitler K\u00f6pr\u00fcs\u00fc), Rumeli Hisar\u0131, Beylerbeyi Saray\u0131 ve bir\u00e7ok sahil yal\u0131s\u0131n\u0131 g\u00f6receksiniz.' },
        { q: '\u00d6\u011fle yeme\u011fi dahil mi?', a: 'G\u00fcnd\u00fcz gezi turunda yemek dahil de\u011fildir, ancak gemide i\u00e7ecek ve at\u0131\u015ft\u0131rmal\u0131k sat\u0131n alabilirsiniz. Yemekli deneyim i\u00e7in Ak\u015fam veya Gece turlar\u0131m\u0131za g\u00f6z at\u0131n.' },
        { q: 'Tur ne kadar s\u00fcr\u00fcyor?', a: 'Tur yakla\u015f\u0131k 1.5 saat s\u00fcrer, 12:00\u2019de kalk\u0131p saat 13:30 civar\u0131nda d\u00f6ner.' },
        { q: 'Nereden kalk\u0131yor?', a: 'T\u00fcm turlar Kabata\u015f \u0130skelesi\u2019nden kalkar. Sultanahmet\u2019ten tramvayla (T1 hatt\u0131), Taksim\u2019den f\u00fcnik\u00fclerle kolayca ula\u015fabilirsiniz.' }
      ]
    },
    de: {
      title: 'Istanbul Bosporus-Kreuzfahrt \u2014 Tages-Sightseeing-Tour',
      description: 'Genie\u00dfen Sie eine 1,5-st\u00fcndige Bosporus-Kreuzfahrt ab Kabata\u015f. Dolmabah\u00e7e-Palast, Bosporus-Br\u00fccke & mehr. Sofort \u00fcber WhatsApp buchen.',
      tourName: 'Tages-Bosporus-Kreuzfahrt',
      subtitle: 'Erleben Sie Istanbuls ber\u00fchmte Sehensw\u00fcrdigkeiten vom Wasser aus.',
      duration: '1,5 Stunden',
      highlights: ['Panorama-Bosporus-Sightseeing', 'Dolmabah\u00e7e-Palast-Blick', 'Bosporus-Br\u00fccke-Panorama', 'Freiluftdeck-Erlebnis', 'Live-Audio-Kommentar', 'Getr\u00e4nke an Bord erh\u00e4ltlich'],
      faq: [
        { q: 'Welche Sehensw\u00fcrdigkeiten werde ich sehen?', a: 'Sie fahren am Dolmabah\u00e7e-Palast, der Bosporus-Br\u00fccke, der Rumeli-Festung, dem Beylerbeyi-Palast und vielen Ufervillen vorbei.' },
        { q: 'Ist Mittagessen inbegriffen?', a: 'Die Tages-Sightseeing-Kreuzfahrt beinhaltet keine Mahlzeit, aber Getr\u00e4nke und Snacks k\u00f6nnen an Bord gekauft werden.' },
        { q: 'Wie lange dauert die Kreuzfahrt?', a: 'Die Kreuzfahrt dauert ca. 1,5 Stunden, Abfahrt um 12:00 Uhr, R\u00fcckkehr gegen 13:30 Uhr.' },
        { q: 'Von wo f\u00e4hrt sie ab?', a: 'Alle Kreuzfahrten starten am Kabata\u015f-Pier, leicht erreichbar mit der Stra\u00dfenbahn (Linie T1) und der Standseilbahn vom Taksim-Platz.' }
      ]
    },
    es: {
      title: 'Crucero por el B\u00f3sforo Estambul \u2014 Tour Tur\u00edstico Diurno',
      description: 'Disfruta de un crucero diurno de 1,5 horas por el B\u00f3sforo desde Kabata\u015f. Palacio Dolmabah\u00e7e, Puente del B\u00f3sforo y m\u00e1s. Reserva al instante por WhatsApp.',
      tourName: 'Crucero Diurno por el B\u00f3sforo',
      subtitle: 'Contempla los monumentos ic\u00f3nicos de Estambul desde el agua bajo el sol.',
      duration: '1,5 Horas',
      highlights: ['Recorrido panor\u00e1mico por el B\u00f3sforo', 'Vistas del Palacio Dolmabah\u00e7e', 'Panorama del Puente del B\u00f3sforo', 'Cubierta al aire libre', 'Comentario en audio en vivo', 'Bebidas disponibles a bordo'],
      faq: [
        { q: '\u00bfQu\u00e9 monumentos ver\u00e9?', a: 'Pasar\u00e1s por el Palacio Dolmabah\u00e7e, el Puente del B\u00f3sforo, la Fortaleza de Rumeli, el Palacio Beylerbeyi y muchas mansiones costeras.' },
        { q: '\u00bfSe incluye almuerzo?', a: 'El crucero tur\u00edstico diurno no incluye comida, pero se pueden comprar bebidas y aperitivos a bordo.' },
        { q: '\u00bfCu\u00e1nto dura el crucero?', a: 'El crucero dura aproximadamente 1,5 horas, saliendo a las 12:00 y regresando sobre las 13:30.' },
        { q: '\u00bfDesde d\u00f3nde sale?', a: 'Todos los cruceros salen del muelle de Kabata\u015f, f\u00e1cilmente accesible en tranv\u00eda (l\u00ednea T1) desde Sultanahmet y en funicular desde la plaza Taksim.' }
      ]
    },
    ru: {
      title: '\u041a\u0440\u0443\u0438\u0437 \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443 \u0421\u0442\u0430\u043c\u0431\u0443\u043b \u2014 \u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043e\u0431\u0437\u043e\u0440\u043d\u0430\u044f \u044d\u043a\u0441\u043a\u0443\u0440\u0441\u0438\u044f',
      description: '\u041d\u0430\u0441\u043b\u0430\u0434\u0438\u0442\u0435\u0441\u044c 1,5-\u0447\u0430\u0441\u043e\u0432\u044b\u043c \u0434\u043d\u0435\u0432\u043d\u044b\u043c \u043a\u0440\u0443\u0438\u0437\u043e\u043c \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443 \u043e\u0442 \u041a\u0430\u0431\u0430\u0442\u0430\u0448. \u0414\u0432\u043e\u0440\u0435\u0446 \u0414\u043e\u043b\u043c\u0430\u0431\u0430\u0445\u0447\u0435, \u0411\u043e\u0441\u0444\u043e\u0440\u0441\u043a\u0438\u0439 \u043c\u043e\u0441\u0442 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp.',
      tourName: '\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u043a\u0440\u0443\u0438\u0437 \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443',
      subtitle: '\u041f\u043e\u043b\u044e\u0431\u0443\u0439\u0442\u0435\u0441\u044c \u0437\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u0430 \u0441 \u0432\u043e\u0434\u044b \u0432 \u0434\u043d\u0435\u0432\u043d\u043e\u043c \u0441\u0432\u0435\u0442\u0435.',
      duration: '1,5 \u0447\u0430\u0441\u0430',
      highlights: ['\u0416\u0438\u0432\u043e\u043f\u0438\u0441\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443', '\u0412\u0438\u0434 \u043d\u0430 \u0434\u0432\u043e\u0440\u0435\u0446 \u0414\u043e\u043b\u043c\u0430\u0431\u0430\u0445\u0447\u0435', '\u041f\u0430\u043d\u043e\u0440\u0430\u043c\u0430 \u0411\u043e\u0441\u0444\u043e\u0440\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0441\u0442\u0430', '\u041e\u0442\u043a\u0440\u044b\u0442\u0430\u044f \u043f\u0430\u043b\u0443\u0431\u0430', '\u0410\u0443\u0434\u0438\u043e\u0433\u0438\u0434 \u043d\u0430 \u0431\u043e\u0440\u0442\u0443', '\u041d\u0430\u043f\u0438\u0442\u043a\u0438 \u043d\u0430 \u0431\u043e\u0440\u0442\u0443'],
      faq: [
        { q: '\u041a\u0430\u043a\u0438\u0435 \u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u044f \u0443\u0432\u0438\u0436\u0443?', a: '\u0412\u044b \u043f\u0440\u043e\u043f\u043b\u044b\u0432\u0451\u0442\u0435 \u043c\u0438\u043c\u043e \u0434\u0432\u043e\u0440\u0446\u0430 \u0414\u043e\u043b\u043c\u0430\u0431\u0430\u0445\u0447\u0435, \u0411\u043e\u0441\u0444\u043e\u0440\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0441\u0442\u0430, \u043a\u0440\u0435\u043f\u043e\u0441\u0442\u0438 \u0420\u0443\u043c\u0435\u043b\u0438, \u0434\u0432\u043e\u0440\u0446\u0430 \u0411\u0435\u0439\u043b\u0435\u0440\u0431\u0435\u0439 \u0438 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u0431\u0440\u0435\u0436\u043d\u044b\u0445 \u043e\u0441\u043e\u0431\u043d\u044f\u043a\u043e\u0432.' },
        { q: '\u0412\u043a\u043b\u044e\u0447\u0451\u043d \u043b\u0438 \u043e\u0431\u0435\u0434?', a: '\u0414\u043d\u0435\u0432\u043d\u043e\u0439 \u043e\u0431\u0437\u043e\u0440\u043d\u044b\u0439 \u043a\u0440\u0443\u0438\u0437 \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043f\u0438\u0442\u0430\u043d\u0438\u0435, \u043d\u043e \u043d\u0430\u043f\u0438\u0442\u043a\u0438 \u0438 \u0437\u0430\u043a\u0443\u0441\u043a\u0438 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043d\u0430 \u0431\u043e\u0440\u0442\u0443.' },
        { q: '\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u0438\u0442\u0441\u044f \u043a\u0440\u0443\u0438\u0437?', a: '\u041a\u0440\u0443\u0438\u0437 \u0434\u043b\u0438\u0442\u0441\u044f \u043e\u043a\u043e\u043b\u043e 1,5 \u0447\u0430\u0441\u043e\u0432. \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 12:00, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u043e\u043a\u043e\u043b\u043e 13:30.' },
        { q: '\u041e\u0442\u043a\u0443\u0434\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435?', a: '\u0412\u0441\u0435 \u043a\u0440\u0443\u0438\u0437\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u043f\u0440\u0438\u0447\u0430\u043b\u0430 \u041a\u0430\u0431\u0430\u0442\u0430\u0448, \u043b\u0435\u0433\u043a\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0433\u043e \u043d\u0430 \u0442\u0440\u0430\u043c\u0432\u0430\u0435 (T1) \u0438\u0437 \u0421\u0443\u043b\u0442\u0430\u043d\u0430\u0445\u043c\u0435\u0442 \u0438 \u043d\u0430 \u0444\u0443\u043d\u0438\u043a\u0443\u043b\u0451\u0440\u0435 \u0441 \u0422\u0430\u043a\u0441\u0438\u043c.' }
      ]
    },
    ar: {
      title: '\u0631\u062d\u0644\u0629 \u0628\u062d\u0631\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \u2014 \u062c\u0648\u0644\u0629 \u0633\u064a\u0627\u062d\u064a\u0629 \u0646\u0647\u0627\u0631\u064a\u0629',
      description: '\u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0631\u062d\u0644\u0629 \u0628\u062d\u0631\u064a\u0629 \u0646\u0647\u0627\u0631\u064a\u0629 \u0644\u0645\u062f\u0629 1.5 \u0633\u0627\u0639\u0629 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0645\u0646 \u0643\u0627\u0628\u0627\u062a\u0627\u0634. \u0634\u0627\u0647\u062f \u0642\u0635\u0631 \u062f\u0648\u0644\u0645\u0627 \u0628\u0647\u062c\u0629 \u0648\u062c\u0633\u0631 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0648\u0627\u0644\u0645\u0632\u064a\u062f. \u0627\u062d\u062c\u0632 \u0641\u0648\u0631\u0627\u064b \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.',
      tourName: '\u0631\u062d\u0644\u0629 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0627\u0644\u0646\u0647\u0627\u0631\u064a\u0629',
      subtitle: '\u0634\u0627\u0647\u062f \u0645\u0639\u0627\u0644\u0645 \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \u0627\u0644\u0634\u0647\u064a\u0631\u0629 \u0645\u0646 \u0627\u0644\u0645\u0627\u0621 \u062a\u062d\u062a \u0623\u0634\u0639\u0629 \u0627\u0644\u0634\u0645\u0633.',
      duration: '1.5 \u0633\u0627\u0639\u0629',
      highlights: ['\u062c\u0648\u0644\u0629 \u0628\u0627\u0646\u0648\u0631\u0627\u0645\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631', '\u0625\u0637\u0644\u0627\u0644\u0629 \u0639\u0644\u0649 \u0642\u0635\u0631 \u062f\u0648\u0644\u0645\u0627 \u0628\u0647\u062c\u0629', '\u0628\u0627\u0646\u0648\u0631\u0627\u0645\u0627 \u062c\u0633\u0631 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631', '\u0633\u0637\u062d \u0645\u0641\u062a\u0648\u062d \u0641\u064a \u0627\u0644\u0647\u0648\u0627\u0621 \u0627\u0644\u0637\u0644\u0642', '\u062f\u0644\u064a\u0644 \u0635\u0648\u062a\u064a \u0645\u0628\u0627\u0634\u0631', '\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0645\u062a\u0648\u0641\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u062a\u0646'],
      faq: [
        { q: '\u0645\u0627 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u062a\u064a \u0633\u0623\u0631\u0627\u0647\u0627\u061f', a: '\u0633\u062a\u0645\u0631 \u0628\u062c\u0627\u0646\u0628 \u0642\u0635\u0631 \u062f\u0648\u0644\u0645\u0627 \u0628\u0647\u062c\u0629 \u0648\u062c\u0633\u0631 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0648\u0642\u0644\u0639\u0629 \u0631\u0648\u0645\u064a\u0644\u064a \u0648\u0642\u0635\u0631 \u0628\u064a\u0644\u0631\u0628\u064a \u0648\u0627\u0644\u0639\u062f\u064a\u062f \u0645\u0646 \u0627\u0644\u0642\u0635\u0648\u0631 \u0627\u0644\u0633\u0627\u062d\u0644\u064a\u0629.' },
        { q: '\u0647\u0644 \u0627\u0644\u063a\u062f\u0627\u0621 \u0645\u0634\u0645\u0648\u0644\u061f', a: '\u0644\u0627 \u062a\u062a\u0636\u0645\u0646 \u0627\u0644\u0631\u062d\u0644\u0629 \u0627\u0644\u0646\u0647\u0627\u0631\u064a\u0629 \u0648\u062c\u0628\u0629 \u0637\u0639\u0627\u0645\u060c \u0644\u0643\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0648\u0627\u0644\u0648\u062c\u0628\u0627\u062a \u0627\u0644\u062e\u0641\u064a\u0641\u0629 \u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0634\u0631\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0645\u062a\u0646.' },
        { q: '\u0643\u0645 \u0645\u062f\u0629 \u0627\u0644\u0631\u062d\u0644\u0629\u061f', a: '\u062a\u0633\u062a\u063a\u0631\u0642 \u0627\u0644\u0631\u062d\u0644\u0629 \u062d\u0648\u0627\u0644\u064a 1.5 \u0633\u0627\u0639\u0629\u060c \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0633\u0627\u0639\u0629 12:00 \u0648\u0627\u0644\u0639\u0648\u062f\u0629 \u062d\u0648\u0627\u0644\u064a 13:30.' },
        { q: '\u0645\u0646 \u0623\u064a\u0646 \u062a\u0646\u0637\u0644\u0642\u061f', a: '\u062c\u0645\u064a\u0639 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u062a\u0646\u0637\u0644\u0642 \u0645\u0646 \u0631\u0635\u064a\u0641 \u0643\u0627\u0628\u0627\u062a\u0627\u0634\u060c \u064a\u0633\u0647\u0644 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u064a\u0647 \u0628\u0627\u0644\u062a\u0631\u0627\u0645 (T1) \u0645\u0646 \u0627\u0644\u0633\u0644\u0637\u0627\u0646 \u0623\u062d\u0645\u062f \u0648\u0628\u0627\u0644\u062a\u0644\u0641\u0631\u064a\u0643 \u0645\u0646 \u062a\u0642\u0633\u064a\u0645.' }
      ]
    },
    bg: {
      title: 'Круиз по Босфора Истанбул — Дневна обиколка',
      description: 'Насладете се на 1,5-часов дневен круиз по Босфора от Кабаташ. Вижте двореца Долмабахче, Босфорския мост и още. Резервирайте веднага през WhatsApp.',
      tourName: 'Дневен круиз по Босфора',
      subtitle: 'Разгледайте знаковите забележителности на Истанбул от водата под яркото слънце.',
      duration: '1,5 часа',
      highlights: ['Живописна обиколка по Босфора', 'Изглед към двореца Долмабахче', 'Панорама на Босфорския мост', 'Открита палуба', 'Аудиогид на борда', 'Напитки на борда'],
      faq: [
        { q: 'Какви забележителности ще видя?', a: 'Ще минете покрай двореца Долмабахче, Босфорския мост (мост на 15 юли), крепостта Румели Хисар, двореца Бейлербей и множество крайбрежни особняци.' },
        { q: 'Включен ли е обядът?', a: 'Дневният обиколен круиз не включва хранене, но напитки и закуски могат да бъдат закупени на борда.' },
        { q: 'Колко продължава круизът?', a: 'Круизът продължава около 1,5 часа — тръгване в 12:00, връщане около 13:30.' },
        { q: 'Откъде тръгва?', a: 'Всички круизи тръгват от пристанище Кабаташ, лесно достъпно с трамвай (линия Т1) от Султанахмет и с фуникулер от площад Таксим.' }
      ]
    },
    ro: {
      title: 'Croazieră pe Bosfor Istanbul — Tur de zi',
      description: 'Bucură-te de o croazieră de 1,5 ore pe Bosfor de la Kabataș. Vezi Palatul Dolmabahçe, Podul Bosforului și multe altele. Rezervă instant pe WhatsApp.',
      tourName: 'Croazieră de zi pe Bosfor',
      subtitle: 'Admiră reperele emblematice ale Istanbulului de pe apă, sub soarele strălucitor.',
      duration: '1,5 ore',
      highlights: ['Tur panoramic pe Bosfor', 'Vedere spre Palatul Dolmabahçe', 'Panorama Podului Bosforului', 'Punte în aer liber', 'Ghid audio live', 'Băuturi disponibile la bord'],
      faq: [
        { q: 'Ce obiective voi vedea?', a: 'Vei trece pe lângă Palatul Dolmabahçe, Podul Bosforului, Cetatea Rumeli, Palatul Beylerbeyi și numeroase conace de pe malul apei.' },
        { q: 'Prânzul este inclus?', a: 'Croaziera de zi nu include masă, dar băuturi și gustări pot fi achiziționate la bord.' },
        { q: 'Cât durează croaziera?', a: 'Croaziera durează aproximativ 1,5 ore — plecare la 12:00, întoarcere în jurul orei 13:30.' },
        { q: 'De unde pleacă?', a: 'Toate croazierele pleacă din Portul Kabataș, ușor accesibil cu tramvaiul (linia T1) din Sultanahmet și cu funicularul din Piața Taksim.' }
      ]
    },
    zh: {
      title: '伊斯坦布尔博斯普鲁斯海峡游船 — 日间观光之旅',
      description: '享受从卡巴塔什出发的1.5小时日间博斯普鲁斯海峡游船。观赏多尔玛巴赫切宫、博斯普鲁斯大桥等。通过WhatsApp即时预订。',
      tourName: '博斯普鲁斯日间游船',
      subtitle: '在明媚的阳光下，从水上欣赏伊斯坦布尔的标志性地标。',
      duration: '1.5小时',
      highlights: ['博斯普鲁斯海峡全景观光', '多尔玛巴赫切宫景观', '博斯普鲁斯大桥全景', '露天甲板体验', '船上实时语音导览', '船上提供饮品'],
      faq: [
        { q: '我将看到哪些地标？', a: '您将经过多尔玛巴赫切宫、博斯普鲁斯大桥（7月15日烈士桥）、鲁梅利城堡、贝勒贝伊宫以及许多海滨别墅。' },
        { q: '包含午餐吗？', a: '日间观光游船不含餐食，但船上可购买饮品和小食。如需用餐体验，请查看我们的日落或晚餐游船。' },
        { q: '游船持续多长时间？', a: '游船大约持续1.5小时，12:00出发，约13:30返回。' },
        { q: '从哪里出发？', a: '所有游船均从卡巴塔什码头出发，可乘坐有轨电车（T1线）从苏丹艾哈迈德或缆车从塔克西姆广场轻松到达。' }
      ]
    },
    fr: {
      title: 'Croisière sur le Bosphore Istanbul — Excursion de jour',
      description: 'Profitez d\'une croisière de 1h30 sur le Bosphore au départ de Kabataş. Palais de Dolmabahçe, Pont du Bosphore et plus. Réservation instantanée via WhatsApp.',
      tourName: 'Croisière de jour sur le Bosphore',
      subtitle: 'Admirez les monuments emblématiques d\'Istanbul depuis l\'eau sous le soleil éclatant.',
      duration: '1h30',
      highlights: ['Excursion panoramique sur le Bosphore', 'Vue sur le Palais de Dolmabahçe', 'Panorama du Pont du Bosphore', 'Pont extérieur en plein air', 'Commentaire audio en direct', 'Boissons disponibles à bord'],
      faq: [
        { q: 'Quels monuments vais-je voir ?', a: 'Vous passerez devant le Palais de Dolmabahçe, le Pont du Bosphore, la Forteresse de Rumeli, le Palais de Beylerbeyi et de nombreuses demeures du bord de mer.' },
        { q: 'Le déjeuner est-il inclus ?', a: 'La croisière de jour n\'inclut pas de repas, mais des boissons et collations sont disponibles à l\'achat à bord.' },
        { q: 'Combien de temps dure la croisière ?', a: 'La croisière dure environ 1h30, départ à 12h00, retour vers 13h30.' },
        { q: 'D\'où part-elle ?', a: 'Toutes les croisières partent du quai de Kabataş, facilement accessible en tramway (ligne T1) depuis Sultanahmet et en funiculaire depuis la place Taksim.' }
      ]
    },
    it: {
      title: 'Crociera sul Bosforo Istanbul — Tour panoramico diurno',
      description: 'Goditi una crociera diurna di 1,5 ore sul Bosforo da Kabataş. Palazzo Dolmabahçe, Ponte sul Bosforo e molto altro. Prenota subito via WhatsApp.',
      tourName: 'Crociera diurna sul Bosforo',
      subtitle: 'Ammira i monumenti iconici di Istanbul dall\'acqua sotto il sole splendente.',
      duration: '1,5 ore',
      highlights: ['Tour panoramico sul Bosforo', 'Vista sul Palazzo Dolmabahçe', 'Panorama del Ponte sul Bosforo', 'Ponte all\'aperto', 'Audioguida dal vivo', 'Bevande disponibili a bordo'],
      faq: [
        { q: 'Quali monumenti vedrò?', a: 'Passerai davanti al Palazzo Dolmabahçe, al Ponte sul Bosforo, alla Fortezza di Rumeli, al Palazzo Beylerbeyi e a numerose ville sul lungomare.' },
        { q: 'Il pranzo è incluso?', a: 'La crociera diurna non include pasti, ma bevande e snack sono disponibili per l\'acquisto a bordo.' },
        { q: 'Quanto dura la crociera?', a: 'La crociera dura circa 1,5 ore, partenza alle 12:00, ritorno intorno alle 13:30.' },
        { q: 'Da dove parte?', a: 'Tutte le crociere partono dal molo di Kabataş, facilmente raggiungibile in tram (linea T1) da Sultanahmet e in funicolare da Piazza Taksim.' }
      ]
    },
    ja: {
      title: 'イスタンブール ボスポラス海峡クルーズ — 日中観光ツアー',
      description: 'カバタシュ発1.5時間の日中ボスポラス海峡クルーズ。ドルマバフチェ宮殿、ボスポラス大橋など見どころ満載。WhatsAppで即時予約。',
      tourName: 'ボスポラス日中クルーズ',
      subtitle: '明るい日差しの中、水上からイスタンブールの象徴的なランドマークをご覧ください。',
      duration: '1.5時間',
      highlights: ['ボスポラス海峡パノラマ観光', 'ドルマバフチェ宮殿の眺望', 'ボスポラス大橋のパノラマ', 'オープンデッキ体験', '船上ライブオーディオガイド', '船上でドリンク提供'],
      faq: [
        { q: 'どんなランドマークが見られますか？', a: 'ドルマバフチェ宮殿、ボスポラス大橋（7月15日殉教者橋）、ルメリ要塞、ベイレルベイ宮殿、そして多くの海沿いの邸宅をご覧いただけます。' },
        { q: '昼食は含まれていますか？', a: '日中観光クルーズには食事は含まれていませんが、船内でドリンクや軽食をご購入いただけます。' },
        { q: 'クルーズの所要時間は？', a: 'クルーズは約1.5時間です。12:00出発、13:30頃帰着となります。' },
        { q: '出発地はどこですか？', a: 'すべてのクルーズはカバタシュ埠頭から出発します。スルタンアフメットからトラム（T1線）、タクシム広場からケーブルカーで簡単にアクセスできます。' }
      ]
    },
    ko: {
      title: '이스탄불 보스포러스 해협 크루즈 — 주간 관광 투어',
      description: '카바타쉬에서 출발하는 1.5시간 주간 보스포러스 크루즈. 돌마바흐체 궁전, 보스포러스 대교 등을 감상하세요. WhatsApp으로 즉시 예약.',
      tourName: '보스포러스 주간 크루즈',
      subtitle: '밝은 햇살 아래 수상에서 이스탄불의 상징적인 랜드마크를 감상하세요.',
      duration: '1.5시간',
      highlights: ['보스포러스 해협 파노라마 관광', '돌마바흐체 궁전 전망', '보스포러스 대교 파노라마', '야외 데크 체험', '선상 라이브 오디오 가이드', '선상 음료 제공'],
      faq: [
        { q: '어떤 랜드마크를 볼 수 있나요?', a: '돌마바흐체 궁전, 보스포러스 대교(7월 15일 순교자 다리), 루멜리 요새, 베일러베이 궁전 및 수많은 해안가 저택을 지나갑니다.' },
        { q: '점심이 포함되어 있나요?', a: '주간 관광 크루즈에는 식사가 포함되지 않지만, 선상에서 음료와 스낵을 구매하실 수 있습니다.' },
        { q: '크루즈는 얼마나 걸리나요?', a: '크루즈는 약 1.5시간이며, 12:00 출발하여 13:30경 돌아옵니다.' },
        { q: '어디에서 출발하나요?', a: '모든 크루즈는 카바타쉬 부두에서 출발하며, 술탄아흐메트에서 트램(T1 노선)이나 탁심 광장에서 케이블카로 쉽게 접근할 수 있습니다.' }
      ]
    },
    ms: {
      title: 'Pelayaran Bosphorus Istanbul — Lawatan Siang Hari',
      description: 'Nikmati pelayaran Bosphorus selama 1.5 jam dari Kabataş. Lihat Istana Dolmabahçe, Jambatan Bosphorus & banyak lagi. Tempah segera melalui WhatsApp.',
      tourName: 'Pelayaran Siang Bosphorus',
      subtitle: 'Saksikan mercu tanda ikonik Istanbul dari atas air di bawah cahaya matahari.',
      duration: '1.5 Jam',
      highlights: ['Pemandangan panoramik Bosphorus', 'Pemandangan Istana Dolmabahçe', 'Panorama Jambatan Bosphorus', 'Pengalaman dek terbuka', 'Panduan audio secara langsung', 'Minuman tersedia di atas kapal'],
      faq: [
        { q: 'Apakah mercu tanda yang boleh dilihat?', a: 'Anda akan melalui Istana Dolmabahçe, Jambatan Bosphorus (Jambatan 15 Julai Syuhada), Kubu Rumeli, Istana Beylerbeyi dan banyak rumah agam di tepi pantai.' },
        { q: 'Adakah makan tengah hari disediakan?', a: 'Pelayaran siang tidak termasuk hidangan, tetapi minuman dan snek boleh dibeli di atas kapal.' },
        { q: 'Berapa lama pelayaran ini?', a: 'Pelayaran mengambil masa kira-kira 1.5 jam, berlepas pada pukul 12:00 dan pulang sekitar 13:30.' },
        { q: 'Dari mana ia berlepas?', a: 'Semua pelayaran berlepas dari Jeti Kabataş, mudah diakses melalui trem (laluan T1) dari Sultanahmet dan funikular dari Dataran Taksim.' }
      ]
    },
    id: {
      title: 'Pelayaran Bosphorus Istanbul — Tur Wisata Siang Hari',
      description: 'Nikmati pelayaran Bosphorus 1,5 jam dari Kabataş. Lihat Istana Dolmabahçe, Jembatan Bosphorus & lainnya. Pesan langsung via WhatsApp.',
      tourName: 'Pelayaran Siang Bosphorus',
      subtitle: 'Saksikan landmark ikonik Istanbul dari atas air di bawah sinar matahari.',
      duration: '1,5 Jam',
      highlights: ['Pemandangan panorama Bosphorus', 'Pemandangan Istana Dolmabahçe', 'Panorama Jembatan Bosphorus', 'Pengalaman dek terbuka', 'Panduan audio langsung', 'Minuman tersedia di atas kapal'],
      faq: [
        { q: 'Landmark apa saja yang akan saya lihat?', a: 'Anda akan melewati Istana Dolmabahçe, Jembatan Bosphorus (Jembatan 15 Juli Syuhada), Benteng Rumeli, Istana Beylerbeyi dan banyak rumah mewah di tepi pantai.' },
        { q: 'Apakah makan siang termasuk?', a: 'Tur wisata siang tidak termasuk makanan, tetapi minuman dan makanan ringan dapat dibeli di atas kapal.' },
        { q: 'Berapa lama pelayarannya?', a: 'Pelayaran berlangsung sekitar 1,5 jam, berangkat pukul 12:00 dan kembali sekitar pukul 13:30.' },
        { q: 'Dari mana keberangkatannya?', a: 'Semua pelayaran berangkat dari Dermaga Kabataş, mudah diakses dengan trem (jalur T1) dari Sultanahmet dan dengan funikuler dari Lapangan Taksim.' }
      ]
    },
    ur: {
      title: 'استنبول باسفورس کروز — دن کی سیاحتی سیر',
      description: 'کاباتاش سے 1.5 گھنٹے کے دن کے باسفورس کروز سے لطف اندوز ہوں۔ دولما باہچے محل، باسفورس پل اور بہت کچھ دیکھیں۔ واٹس ایپ کے ذریعے فوری بکنگ۔',
      tourName: 'دن کا باسفورس کروز',
      subtitle: 'دھوپ میں پانی سے استنبول کے مشہور مقامات کا نظارہ کریں۔',
      duration: '1.5 گھنٹے',
      highlights: ['باسفورس کا خوبصورت نظارہ', 'دولما باہچے محل کا منظر', 'باسفورس پل کا پینورامہ', 'کھلی ڈیک کا تجربہ', 'براہ راست آڈیو گائیڈ', 'جہاز پر مشروبات دستیاب'],
      faq: [
        { q: 'مجھے کون سے مقامات نظر آئیں گے؟', a: 'آپ دولما باہچے محل، باسفورس پل (15 جولائی شہداء پل)، رومیلی قلعہ، بیلربے محل اور ساحل کی متعدد حویلیوں سے گزریں گے۔' },
        { q: 'کیا دوپہر کا کھانا شامل ہے؟', a: 'دن کے سیاحتی کروز میں کھانا شامل نہیں ہے، لیکن جہاز پر مشروبات اور نمکین خریدے جا سکتے ہیں۔' },
        { q: 'کروز کتنی دیر کا ہے؟', a: 'کروز تقریباً 1.5 گھنٹے کا ہے، 12:00 بجے روانگی اور تقریباً 13:30 بجے واپسی۔' },
        { q: 'یہ کہاں سے روانہ ہوتا ہے؟', a: 'تمام کروز کاباتاش گھاٹ سے روانہ ہوتے ہیں، جو سلطان احمد سے ٹرام (T1 لائن) اور تقسیم اسکوائر سے فنیکولر کے ذریعے آسانی سے قابل رسائی ہے۔' }
      ]
    },
    hi: {
      title: 'इस्तांबुल बॉस्फोरस क्रूज़ — दिन की दर्शनीय यात्रा',
      description: 'काबाताश से 1.5 घंटे के दिन के बॉस्फोरस क्रूज़ का आनंद लें। डोल्माबाहचे पैलेस, बॉस्फोरस ब्रिज और भी बहुत कुछ देखें। WhatsApp से तुरंत बुक करें।',
      tourName: 'दिन का बॉस्फोरस क्रूज़',
      subtitle: 'धूप में पानी से इस्तांबुल के प्रतिष्ठित स्थलों को निहारें।',
      duration: '1.5 घंटे',
      highlights: ['बॉस्फोरस का मनोरम दृश्य', 'डोल्माबाहचे पैलेस का नज़ारा', 'बॉस्फोरस ब्रिज पैनोरमा', 'खुली डेक का अनुभव', 'लाइव ऑडियो गाइड', 'जहाज़ पर पेय उपलब्ध'],
      faq: [
        { q: 'मुझे कौन से स्थल दिखाई देंगे?', a: 'आप डोल्माबाहचे पैलेस, बॉस्फोरस ब्रिज (15 जुलाई शहीद पुल), रुमेली किला, बेलरबेयी पैलेस और कई तटीय हवेलियों से गुज़रेंगे।' },
        { q: 'क्या दोपहर का भोजन शामिल है?', a: 'दिन की दर्शनीय क्रूज़ में भोजन शामिल नहीं है, लेकिन जहाज़ पर पेय और स्नैक्स खरीदे जा सकते हैं।' },
        { q: 'क्रूज़ कितनी देर का है?', a: 'क्रूज़ लगभग 1.5 घंटे का है, 12:00 बजे रवानगी और लगभग 13:30 बजे वापसी।' },
        { q: 'यह कहाँ से रवाना होता है?', a: 'सभी क्रूज़ काबाताश पियर से रवाना होते हैं, जो सुल्तानअहमत से ट्राम (T1 लाइन) और तक्सिम स्क्वायर से फ़नीक्यूलर द्वारा आसानी से पहुँचा जा सकता है।' }
      ]
    }
  },

  sunset: {
    en: {
      title: 'Bosphorus Sunset Dinner Cruise Istanbul \u2014 Golden Hour Experience',
      description: '3-hour sunset dinner cruise on the Bosphorus. Watch Istanbul\u2019s golden hour, enjoy dinner & live shows. Departs 17:30 from Kabata\u015f.',
      tourName: 'Sunset Dinner Cruise',
      subtitle: 'Sail into Istanbul\u2019s golden hour with a 3-course dinner and live entertainment.',
      duration: '3 Hours',
      highlights: ['Golden hour Bosphorus views', 'Full dinner service', 'Live singer & DJ music', 'Turkish night shows', 'Sunset over Istanbul skyline', 'Premium bar available'],
      faq: [
        { q: 'What time is sunset in Istanbul?', a: 'Sunset times vary by season. The cruise departs at 17:30, timed to catch the golden hour. In summer, you\u2019ll see the sunset during the cruise; in winter, you\u2019ll enjoy twilight and early evening lights.' },
        { q: 'Is dinner included?', a: 'Yes! All packages include a full dinner: meze starters, a main course (meat or fish options), and dessert. Premium and VIP packages include upgraded menu options.' },
        { q: 'What entertainment is there?', a: 'The cruise features a live singer performing Turkish and international songs, DJ music, and a Turkish night show segment with traditional performances.' },
        { q: 'Can I celebrate a birthday onboard?', a: 'Absolutely! Let us know in advance via WhatsApp and we can arrange a birthday cake, special table decoration, and a celebration announcement during the cruise.' }
      ]
    },
    tr: {
      title: 'Bo\u011faz G\u00fcn Bat\u0131m\u0131 Yemekli Turu \u0130stanbul \u2014 Alt\u0131n Saat Deneyimi',
      description: 'Bo\u011faz\u2019da 3 saatlik g\u00fcn bat\u0131m\u0131 yemekli tur. \u0130stanbul\u2019un alt\u0131n saatini izleyin, yemek ve canl\u0131 \u015fovlar\u0131n keyfini \u00e7\u0131kar\u0131n. Kabata\u015f\u2019tan 17:30\u2019da kalkar.',
      tourName: 'G\u00fcn Bat\u0131m\u0131 Yemekli Turu',
      subtitle: '\u0130stanbul\u2019un alt\u0131n saatinde 3 \u00e7e\u015fit yemek ve canl\u0131 e\u011flence ile yelken a\u00e7\u0131n.',
      duration: '3 Saat',
      highlights: ['Alt\u0131n saat Bo\u011faz manzaras\u0131', 'Tam yemek servisi', 'Canl\u0131 \u015fark\u0131c\u0131 ve DJ m\u00fczik', 'T\u00fcrk gecesi \u015fovlar\u0131', '\u0130stanbul silüetinde gün batımı', 'Premium bar mevcut'],
      faq: [
        { q: '\u0130stanbul\u2019da g\u00fcn bat\u0131m\u0131 saat ka\u00e7ta?', a: 'G\u00fcn bat\u0131m\u0131 saati mevsime g\u00f6re de\u011fi\u015fir. Tur 17:30\u2019da kalk\u0131p alt\u0131n saati yakalamak \u00fczere zamanlanm\u0131\u015ft\u0131r.' },
        { q: 'Yemek dahil mi?', a: 'Evet! T\u00fcm paketlerde tam yemek men\u00fcs\u00fc vard\u0131r: meze, ana yemek (et veya bal\u0131k se\u00e7enekleri) ve tatl\u0131.' },
        { q: 'Ne t\u00fcr e\u011flence var?', a: 'Turda canl\u0131 \u015fark\u0131c\u0131, DJ m\u00fczik ve geleneksel T\u00fcrk gecesi g\u00f6sterileri bulunmaktad\u0131r.' },
        { q: 'Do\u011fum g\u00fcn\u00fc kutlayabilir miyim?', a: 'Kesinlikle! WhatsApp \u00fczerinden \u00f6nceden bildirin, pasta ve \u00f6zel masa s\u00fcslemesi ayarlayal\u0131m.' }
      ]
    },
    de: {
      title: 'Bosporus Sunset Dinner-Kreuzfahrt Istanbul \u2014 Goldene Stunde',
      description: '3-st\u00fcndige Sunset-Dinner-Kreuzfahrt auf dem Bosporus. Goldene Stunde, Abendessen & Live-Shows. Abfahrt 17:30 ab Kabata\u015f.',
      tourName: 'Sunset Dinner-Kreuzfahrt',
      subtitle: 'Segeln Sie in Istanbuls goldene Stunde mit 3-G\u00e4nge-Men\u00fc und Live-Unterhaltung.',
      duration: '3 Stunden',
      highlights: ['Bosporus bei Sonnenuntergang', 'Vollst\u00e4ndiges Abendessen', 'Live-S\u00e4nger & DJ', 'T\u00fcrkische Nachtshow', 'Sonnenuntergang \u00fcber Istanbul', 'Premium-Bar verf\u00fcgbar'],
      faq: [
        { q: 'Wann ist Sonnenuntergang in Istanbul?', a: 'Die Sonnenuntergangszeit variiert je nach Saison. Die Kreuzfahrt f\u00e4hrt um 17:30 ab, perfekt auf die goldene Stunde abgestimmt.' },
        { q: 'Ist das Abendessen inbegriffen?', a: 'Ja! Alle Pakete beinhalten ein vollst\u00e4ndiges Abendessen: Meze-Vorspeisen, Hauptgang und Dessert.' },
        { q: 'Welche Unterhaltung gibt es?', a: 'Die Kreuzfahrt bietet einen Live-S\u00e4nger, DJ-Musik und eine t\u00fcrkische Nachtshow mit traditionellen Darbietungen.' },
        { q: 'Kann ich einen Geburtstag feiern?', a: 'Absolut! Teilen Sie es uns vorab per WhatsApp mit und wir organisieren Kuchen und Dekoration.' }
      ]
    },
    es: {
      title: 'Crucero al Atardecer con Cena B\u00f3sforo Estambul \u2014 Hora Dorada',
      description: 'Crucero de 3 horas al atardecer con cena en el B\u00f3sforo. Hora dorada de Estambul, cena y shows en vivo. Sale a las 17:30 de Kabata\u015f.',
      tourName: 'Crucero al Atardecer con Cena',
      subtitle: 'Navega hacia la hora dorada de Estambul con cena de 3 platos y espect\u00e1culos en vivo.',
      duration: '3 Horas',
      highlights: ['Vistas del B\u00f3sforo al atardecer', 'Servicio completo de cena', 'Cantante en vivo y DJ', 'Shows de noche turca', 'Puesta de sol sobre Estambul', 'Bar premium disponible'],
      faq: [
        { q: '\u00bfA qu\u00e9 hora es la puesta de sol en Estambul?', a: 'La hora del atardecer var\u00eda seg\u00fan la temporada. El crucero sale a las 17:30, programado para la hora dorada.' },
        { q: '\u00bfLa cena est\u00e1 incluida?', a: '\u00a1S\u00ed! Todos los paquetes incluyen cena completa: meze, plato principal y postre.' },
        { q: '\u00bfQu\u00e9 entretenimiento hay?', a: 'El crucero cuenta con cantante en vivo, m\u00fasica DJ y un espect\u00e1culo de noche turca con actuaciones tradicionales.' },
        { q: '\u00bfPuedo celebrar un cumplea\u00f1os a bordo?', a: '\u00a1Por supuesto! Av\u00edsenos por WhatsApp y organizaremos pastel y decoraci\u00f3n especial.' }
      ]
    },
    ru: {
      title: '\u041a\u0440\u0443\u0438\u0437 \u043d\u0430 \u0437\u0430\u043a\u0430\u0442\u0435 \u0441 \u0443\u0436\u0438\u043d\u043e\u043c \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443 \u2014 \u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0447\u0430\u0441',
      description: '3-\u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u043a\u0440\u0443\u0438\u0437 \u043d\u0430 \u0437\u0430\u043a\u0430\u0442\u0435 \u0441 \u0443\u0436\u0438\u043d\u043e\u043c \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443. \u0417\u043e\u043b\u043e\u0442\u043e\u0439 \u0447\u0430\u0441, \u0443\u0436\u0438\u043d \u0438 \u0436\u0438\u0432\u044b\u0435 \u0448\u043e\u0443. \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 17:30 \u043e\u0442 \u041a\u0430\u0431\u0430\u0442\u0430\u0448.',
      tourName: '\u041a\u0440\u0443\u0438\u0437 \u043d\u0430 \u0437\u0430\u043a\u0430\u0442\u0435 \u0441 \u0443\u0436\u0438\u043d\u043e\u043c',
      subtitle: '\u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435\u0441\u044c \u0432 \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u0447\u0430\u0441 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u0430 \u0441 \u0443\u0436\u0438\u043d\u043e\u043c \u0438\u0437 3 \u0431\u043b\u044e\u0434 \u0438 \u0436\u0438\u0432\u044b\u043c\u0438 \u0432\u044b\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f\u043c\u0438.',
      duration: '3 \u0447\u0430\u0441\u0430',
      highlights: ['\u0412\u0438\u0434\u044b \u0411\u043e\u0441\u0444\u043e\u0440\u0430 \u043d\u0430 \u0437\u0430\u043a\u0430\u0442\u0435', '\u041f\u043e\u043b\u043d\u044b\u0439 \u0443\u0436\u0438\u043d', '\u0416\u0438\u0432\u043e\u0439 \u043f\u0435\u0432\u0435\u0446 \u0438 DJ', '\u0422\u0443\u0440\u0435\u0446\u043a\u043e\u0435 \u0448\u043e\u0443', '\u0417\u0430\u043a\u0430\u0442 \u043d\u0430\u0434 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u043e\u043c', '\u041f\u0440\u0435\u043c\u0438\u0443\u043c-\u0431\u0430\u0440'],
      faq: [
        { q: '\u041a\u043e\u0433\u0434\u0430 \u0437\u0430\u043a\u0430\u0442 \u0432 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u0435?', a: '\u0412\u0440\u0435\u043c\u044f \u0437\u0430\u043a\u0430\u0442\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0435\u0437\u043e\u043d\u0430. \u041a\u0440\u0443\u0438\u0437 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 17:30, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0441\u0442\u0430\u0442\u044c \u0437\u043e\u043b\u043e\u0442\u043e\u0439 \u0447\u0430\u0441.' },
        { q: '\u0423\u0436\u0438\u043d \u0432\u043a\u043b\u044e\u0447\u0451\u043d?', a: '\u0414\u0430! \u0412\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442 \u043f\u043e\u043b\u043d\u044b\u0439 \u0443\u0436\u0438\u043d: \u043c\u0435\u0437\u0435, \u0433\u043e\u0440\u044f\u0447\u0435\u0435 \u0438 \u0434\u0435\u0441\u0435\u0440\u0442.' },
        { q: '\u041a\u0430\u043a\u0438\u0435 \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f?', a: '\u041d\u0430 \u043a\u0440\u0443\u0438\u0437\u0435 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0436\u0438\u0432\u043e\u0439 \u043f\u0435\u0432\u0435\u0446, DJ \u0438 \u0442\u0443\u0440\u0435\u0446\u043a\u043e\u0435 \u043d\u043e\u0447\u043d\u043e\u0435 \u0448\u043e\u0443 \u0441 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0442\u0430\u043d\u0446\u0430\u043c\u0438.' },
        { q: '\u041c\u043e\u0436\u043d\u043e \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f?', a: '\u041a\u043e\u043d\u0435\u0447\u043d\u043e! \u0421\u043e\u043e\u0431\u0449\u0438\u0442\u0435 \u0437\u0430\u0440\u0430\u043d\u0435\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp, \u0438 \u043c\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0435\u043c \u0442\u043e\u0440\u0442 \u0438 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u043e\u0435 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435.' }
      ]
    },
    ar: {
      title: '\u0631\u062d\u0644\u0629 \u0639\u0634\u0627\u0621 \u063a\u0631\u0648\u0628 \u0627\u0644\u0634\u0645\u0633 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \u2014 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u0630\u0647\u0628\u064a\u0629',
      description: '\u0631\u062d\u0644\u0629 \u0628\u062d\u0631\u064a\u0629 \u0644\u0645\u062f\u0629 3 \u0633\u0627\u0639\u0627\u062a \u0639\u0646\u062f \u063a\u0631\u0648\u0628 \u0627\u0644\u0634\u0645\u0633 \u0645\u0639 \u0639\u0634\u0627\u0621 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631. \u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u0630\u0647\u0628\u064a\u0629\u060c \u0639\u0634\u0627\u0621 \u0648\u0639\u0631\u0648\u0636 \u062d\u064a\u0629. \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 17:30 \u0645\u0646 \u0643\u0627\u0628\u0627\u062a\u0627\u0634.',
      tourName: '\u0631\u062d\u0644\u0629 \u0639\u0634\u0627\u0621 \u063a\u0631\u0648\u0628 \u0627\u0644\u0634\u0645\u0633',
      subtitle: '\u0623\u0628\u062d\u0631 \u0641\u064a \u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u0630\u0647\u0628\u064a\u0629 \u0644\u0625\u0633\u0637\u0646\u0628\u0648\u0644 \u0645\u0639 \u0639\u0634\u0627\u0621 3 \u0623\u0637\u0628\u0627\u0642 \u0648\u062a\u0631\u0641\u064a\u0647 \u062d\u064a.',
      duration: '3 \u0633\u0627\u0639\u0627\u062a',
      highlights: ['\u0625\u0637\u0644\u0627\u0644\u0627\u062a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0639\u0646\u062f \u0627\u0644\u063a\u0631\u0648\u0628', '\u062e\u062f\u0645\u0629 \u0639\u0634\u0627\u0621 \u0643\u0627\u0645\u0644\u0629', '\u0645\u063a\u0646\u064a \u062d\u064a \u0648DJ', '\u0639\u0631\u0648\u0636 \u0644\u064a\u0644\u0629 \u062a\u0631\u0643\u064a\u0629', '\u063a\u0631\u0648\u0628 \u0641\u0648\u0642 \u0623\u0641\u0642 \u0625\u0633\u0637\u0646\u0628\u0648\u0644', '\u0628\u0627\u0631 \u0645\u0645\u064a\u0632 \u0645\u062a\u0627\u062d'],
      faq: [
        { q: '\u0645\u062a\u0649 \u063a\u0631\u0648\u0628 \u0627\u0644\u0634\u0645\u0633 \u0641\u064a \u0625\u0633\u0637\u0646\u0628\u0648\u0644\u061f', a: '\u064a\u062e\u062a\u0644\u0641 \u0648\u0642\u062a \u0627\u0644\u063a\u0631\u0648\u0628 \u062d\u0633\u0628 \u0627\u0644\u0645\u0648\u0633\u0645. \u062a\u0646\u0637\u0644\u0642 \u0627\u0644\u0631\u062d\u0644\u0629 \u0641\u064a 17:30 \u0644\u0644\u062d\u0627\u0642 \u0628\u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u0630\u0647\u0628\u064a\u0629.' },
        { q: '\u0647\u0644 \u0627\u0644\u0639\u0634\u0627\u0621 \u0645\u0634\u0645\u0648\u0644\u061f', a: '\u0646\u0639\u0645! \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u0627\u0642\u0627\u062a \u062a\u0634\u0645\u0644 \u0639\u0634\u0627\u0621 \u0643\u0627\u0645\u0644: \u0645\u0642\u0628\u0644\u0627\u062a\u060c \u0637\u0628\u0642 \u0631\u0626\u064a\u0633\u064a \u0648\u062d\u0644\u0648\u0649.' },
        { q: '\u0645\u0627 \u0647\u064a \u0627\u0644\u0639\u0631\u0648\u0636 \u0627\u0644\u0645\u062a\u0627\u062d\u0629\u061f', a: '\u062a\u062a\u0636\u0645\u0646 \u0627\u0644\u0631\u062d\u0644\u0629 \u0645\u063a\u0646\u064a \u062d\u064a \u0648\u0645\u0648\u0633\u064a\u0642\u0649 DJ \u0648\u0639\u0631\u0648\u0636 \u0644\u064a\u0644\u0629 \u062a\u0631\u0643\u064a\u0629 \u062a\u0642\u0644\u064a\u062f\u064a\u0629.' },
        { q: '\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0644\u0627\u062d\u062a\u0641\u0627\u0644 \u0628\u0639\u064a\u062f \u0645\u064a\u0644\u0627\u062f\u061f', a: '\u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f! \u0623\u062e\u0628\u0631\u0646\u0627 \u0645\u0633\u0628\u0642\u0627\u064b \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0648\u0633\u0646\u0631\u062a\u0628 \u0643\u0639\u0643\u0629 \u0648\u0632\u064a\u0646\u0629 \u062e\u0627\u0635\u0629.' }
      ]
    },
    bg: {
      title: 'Круиз по Босфора при залез слънце Истанбул — Златен час',
      description: '3-часов круиз с вечеря при залез по Босфора. Наблюдавайте златния час на Истанбул, насладете се на вечеря и шоу на живо. Тръгване в 17:30 от Кабаташ.',
      tourName: 'Круиз с вечеря при залез',
      subtitle: 'Отплавайте в златния час на Истанбул с вечеря от 3 блюда и забавления на живо.',
      duration: '3 часа',
      highlights: ['Гледки към Босфора при залез', 'Пълна вечеря', 'Певец на живо и DJ музика', 'Шоу за турска нощ', 'Залез над Истанбул', 'Премиум бар'],
      faq: [
        { q: 'Кога е залез слънце в Истанбул?', a: 'Часът на залеза варира по сезони. Круизът тръгва в 17:30, за да хванете златния час.' },
        { q: 'Вечерята включена ли е?', a: 'Да! Всички пакети включват пълна вечеря: мезе, основно ястие и десерт.' },
        { q: 'Какво забавление има?', a: 'Круизът предлага певец на живо, DJ музика и шоу за турска нощ с традиционни изпълнения.' },
        { q: 'Мога ли да празнувам рожден ден?', a: 'Разбира се! Уведомете ни предварително в WhatsApp и ще организираме торта и специална декорация.' }
      ]
    },
    ro: {
      title: 'Croazieră la apus cu cină pe Bosfor Istanbul — Ora de aur',
      description: 'Croazieră de 3 ore la apus cu cină pe Bosfor. Privește ora de aur a Istanbulului, savurează cina și spectacolele live. Plecare la 17:30 de la Kabataș.',
      tourName: 'Croazieră la apus cu cină',
      subtitle: 'Navighează în ora de aur a Istanbulului cu o cină din 3 feluri și divertisment live.',
      duration: '3 ore',
      highlights: ['Priveliști ale Bosforului la apus', 'Serviciu complet de cină', 'Solist live și muzică DJ', 'Spectacol de noapte turcească', 'Apus peste Istanbulul', 'Bar premium disponibil'],
      faq: [
        { q: 'La ce oră este apusul în Istanbul?', a: 'Ora apusului variază în funcție de sezon. Croaziera pleacă la 17:30, sincronizată cu ora de aur.' },
        { q: 'Cina este inclusă?', a: 'Da! Toate pachetele includ cină completă: aperitive meze, fel principal și desert.' },
        { q: 'Ce divertisment există?', a: 'Croaziera include solist live, muzică DJ și un spectacol de noapte turcească cu dansuri tradiționale.' },
        { q: 'Pot sărbători o zi de naștere?', a: 'Desigur! Anunțați-ne în avans pe WhatsApp și vom aranja tort și decorațiuni speciale.' }
      ]
    },
    zh: {
      title: '伊斯坦布尔博斯普鲁斯日落晚餐游船 — 黄金时刻体验',
      description: '3小时博斯普鲁斯日落晚餐游船。观赏伊斯坦布尔黄金时刻，享用晚餐和现场表演。17:30从卡巴塔什出发。',
      tourName: '日落晚餐游船',
      subtitle: '在伊斯坦布尔的黄金时刻启航，享用三道菜晚餐和现场娱乐。',
      duration: '3小时',
      highlights: ['黄金时刻博斯普鲁斯美景', '全套晚餐服务', '现场歌手和DJ音乐', '土耳其之夜表演', '伊斯坦布尔天际线日落', '高级酒吧'],
      faq: [
        { q: '伊斯坦布尔日落时间是几点？', a: '日落时间因季节而异。游船17:30出发，恰好赶上黄金时刻。' },
        { q: '包含晚餐吗？', a: '是的！所有套餐均包含全套晚餐：开胃菜、主菜和甜点。' },
        { q: '有什么娱乐活动？', a: '游船提供现场歌手、DJ音乐和土耳其传统表演之夜。' },
        { q: '可以在船上庆祝生日吗？', a: '当然可以！请提前通过WhatsApp告知我们，我们会安排蛋糕和特别装饰。' }
      ]
    },
    fr: {
      title: 'Croisière dîner au coucher du soleil sur le Bosphore — Heure dorée',
      description: 'Croisière de 3 heures au coucher du soleil avec dîner sur le Bosphore. Heure dorée d\'Istanbul, dîner et spectacles. Départ à 17h30 de Kabataş.',
      tourName: 'Croisière dîner au coucher du soleil',
      subtitle: 'Naviguez dans l\'heure dorée d\'Istanbul avec un dîner 3 plats et des spectacles en direct.',
      duration: '3 heures',
      highlights: ['Vues du Bosphore au coucher du soleil', 'Service de dîner complet', 'Chanteur live et DJ', 'Spectacle de nuit turque', 'Coucher de soleil sur Istanbul', 'Bar premium disponible'],
      faq: [
        { q: 'À quelle heure est le coucher du soleil à Istanbul ?', a: 'L\'heure du coucher du soleil varie selon la saison. La croisière part à 17h30, parfaitement synchronisée avec l\'heure dorée.' },
        { q: 'Le dîner est-il inclus ?', a: 'Oui ! Tous les forfaits comprennent un dîner complet : meze, plat principal et dessert.' },
        { q: 'Quel divertissement y a-t-il ?', a: 'La croisière propose un chanteur live, de la musique DJ et un spectacle de nuit turque avec des danses traditionnelles.' },
        { q: 'Puis-je fêter un anniversaire ?', a: 'Absolument ! Prévenez-nous à l\'avance via WhatsApp et nous organiserons un gâteau et une décoration spéciale.' }
      ]
    },
    it: {
      title: 'Crociera al tramonto con cena sul Bosforo Istanbul — Ora d\'oro',
      description: 'Crociera di 3 ore al tramonto con cena sul Bosforo. Ora d\'oro di Istanbul, cena e spettacoli dal vivo. Partenza alle 17:30 da Kabataş.',
      tourName: 'Crociera al tramonto con cena',
      subtitle: 'Naviga nell\'ora d\'oro di Istanbul con una cena di 3 portate e intrattenimento dal vivo.',
      duration: '3 ore',
      highlights: ['Viste del Bosforo al tramonto', 'Servizio cena completo', 'Cantante dal vivo e DJ', 'Spettacolo notte turca', 'Tramonto su Istanbul', 'Bar premium disponibile'],
      faq: [
        { q: 'A che ora è il tramonto a Istanbul?', a: 'L\'orario del tramonto varia a seconda della stagione. La crociera parte alle 17:30, sincronizzata con l\'ora d\'oro.' },
        { q: 'La cena è inclusa?', a: 'Sì! Tutti i pacchetti includono una cena completa: antipasti meze, portata principale e dessert.' },
        { q: 'Che intrattenimento c\'è?', a: 'La crociera offre un cantante dal vivo, musica DJ e uno spettacolo di notte turca con esibizioni tradizionali.' },
        { q: 'Posso festeggiare un compleanno?', a: 'Certamente! Avvisateci in anticipo su WhatsApp e organizzeremo torta e decorazioni speciali.' }
      ]
    },
    ja: {
      title: 'ボスポラス海峡サンセットディナークルーズ イスタンブール — ゴールデンアワー体験',
      description: 'ボスポラス海峡での3時間サンセットディナークルーズ。イスタンブールのゴールデンアワー、ディナー、ライブショーを満喫。17:30カバタシュ発。',
      tourName: 'サンセットディナークルーズ',
      subtitle: 'イスタンブールのゴールデンアワーに、3コースディナーとライブエンターテイメントとともに出航。',
      duration: '3時間',
      highlights: ['ゴールデンアワーのボスポラス海峡', 'フルディナーサービス', 'ライブシンガー＆DJミュージック', 'トルコナイトショー', 'イスタンブール上空のサンセット', 'プレミアムバー'],
      faq: [
        { q: 'イスタンブールの日没は何時ですか？', a: '日没時間は季節によって異なります。クルーズは17:30に出発し、ゴールデンアワーに合わせています。' },
        { q: 'ディナーは含まれていますか？', a: 'はい！全パッケージにフルディナーが含まれます：メゼ前菜、メインコース、デザート。' },
        { q: 'どんなエンターテイメントがありますか？', a: 'クルーズではライブシンガー、DJミュージック、伝統的なトルコナイトショーをお楽しみいただけます。' },
        { q: '誕生日を祝えますか？', a: 'もちろんです！事前にWhatsAppでお知らせいただければ、ケーキと特別なデコレーションをご用意します。' }
      ]
    },
    ko: {
      title: '보스포러스 선셋 디너 크루즈 이스탄불 — 골든아워 체험',
      description: '보스포러스 해협에서 3시간 선셋 디너 크루즈. 이스탄불의 골든아워, 디너, 라이브 쇼를 즐기세요. 17:30 카바타쉬 출발.',
      tourName: '선셋 디너 크루즈',
      subtitle: '3코스 디너와 라이브 엔터테인먼트와 함께 이스탄불의 골든아워를 항해하세요.',
      duration: '3시간',
      highlights: ['골든아워 보스포러스 전망', '풀 디너 서비스', '라이브 가수 & DJ 음악', '터키의 밤 쇼', '이스탄불 스카이라인 위 일몰', '프리미엄 바'],
      faq: [
        { q: '이스탄불의 일몰 시간은 언제인가요?', a: '일몰 시간은 계절에 따라 다릅니다. 크루즈는 17:30에 출발하여 골든아워에 맞춰져 있습니다.' },
        { q: '디너가 포함되어 있나요?', a: '네! 모든 패키지에 풀 디너가 포함됩니다: 메제 전채, 메인 코스, 디저트.' },
        { q: '어떤 엔터테인먼트가 있나요?', a: '크루즈에서는 라이브 가수, DJ 음악, 전통 터키의 밤 쇼를 즐기실 수 있습니다.' },
        { q: '생일을 축하할 수 있나요?', a: '물론입니다! WhatsApp으로 미리 알려주시면 케이크와 특별 장식을 준비해 드립니다.' }
      ]
    },
    ms: {
      title: 'Pelayaran Makan Malam Matahari Terbenam Bosphorus Istanbul — Pengalaman Waktu Keemasan',
      description: 'Pelayaran makan malam matahari terbenam 3 jam di Bosphorus. Nikmati waktu keemasan Istanbul, makan malam & persembahan langsung. Berlepas 17:30 dari Kabataş.',
      tourName: 'Pelayaran Makan Malam Matahari Terbenam',
      subtitle: 'Belayar melintasi waktu keemasan Istanbul dengan makan malam 3 hidangan dan hiburan langsung.',
      duration: '3 Jam',
      highlights: ['Pemandangan Bosphorus waktu keemasan', 'Perkhidmatan makan malam penuh', 'Penyanyi langsung & muzik DJ', 'Persembahan malam Turki', 'Matahari terbenam di atas Istanbul', 'Bar premium'],
      faq: [
        { q: 'Pukul berapa matahari terbenam di Istanbul?', a: 'Waktu matahari terbenam berubah mengikut musim. Pelayaran berlepas pada 17:30, diselaraskan dengan waktu keemasan.' },
        { q: 'Adakah makan malam disertakan?', a: 'Ya! Semua pakej termasuk makan malam penuh: hidangan pembuka meze, hidangan utama, dan pencuci mulut.' },
        { q: 'Apakah hiburan yang disediakan?', a: 'Pelayaran ini menawarkan penyanyi langsung, muzik DJ, dan persembahan malam Turki tradisional.' },
        { q: 'Bolehkah saya meraikan hari jadi?', a: 'Sudah tentu! Maklumkan kami melalui WhatsApp lebih awal dan kami akan menyediakan kek dan hiasan istimewa.' }
      ]
    },
    id: {
      title: 'Pelayaran Makan Malam Sunset Bosphorus Istanbul — Pengalaman Golden Hour',
      description: 'Pelayaran makan malam sunset 3 jam di Bosphorus. Nikmati golden hour Istanbul, makan malam & pertunjukan langsung. Berangkat 17:30 dari Kabataş.',
      tourName: 'Pelayaran Makan Malam Sunset',
      subtitle: 'Berlayar melintasi golden hour Istanbul dengan makan malam 3 hidangan dan hiburan langsung.',
      duration: '3 Jam',
      highlights: ['Pemandangan Bosphorus golden hour', 'Layanan makan malam lengkap', 'Penyanyi langsung & musik DJ', 'Pertunjukan malam Turki', 'Matahari terbenam di atas Istanbul', 'Bar premium'],
      faq: [
        { q: 'Jam berapa matahari terbenam di Istanbul?', a: 'Waktu matahari terbenam bervariasi menurut musim. Pelayaran berangkat pukul 17:30, disesuaikan dengan golden hour.' },
        { q: 'Apakah makan malam termasuk?', a: 'Ya! Semua paket termasuk makan malam lengkap: hidangan pembuka meze, hidangan utama, dan makanan penutup.' },
        { q: 'Hiburan apa yang ditawarkan?', a: 'Pelayaran ini menawarkan penyanyi langsung, musik DJ, dan pertunjukan malam Turki tradisional.' },
        { q: 'Bisakah saya merayakan ulang tahun?', a: 'Tentu saja! Beri tahu kami melalui WhatsApp terlebih dahulu dan kami akan menyiapkan kue dan dekorasi khusus.' }
      ]
    },
    ur: {
      title: 'باسفورس غروب آفتاب ڈنر کروز استنبول — سنہری لمحات کا تجربہ',
      description: 'باسفورس پر 3 گھنٹے کا غروب آفتاب ڈنر کروز۔ استنبول کے سنہری لمحات، ڈنر اور لائیو شوز سے لطف اندوز ہوں۔ 17:30 کاباتاش سے روانگی۔',
      tourName: 'غروب آفتاب ڈنر کروز',
      subtitle: '3 کورس ڈنر اور لائیو تفریح کے ساتھ استنبول کے سنہری لمحات میں سفر کریں۔',
      duration: '3 گھنٹے',
      highlights: ['سنہری لمحات میں باسفورس کا نظارہ', 'مکمل ڈنر سروس', 'لائیو گلوکار اور ڈی جے میوزک', 'ترکی کی رات کا شو', 'استنبول کے اوپر غروب آفتاب', 'پریمیم بار'],
      faq: [
        { q: 'استنبول میں غروب آفتاب کا وقت کیا ہے؟', a: 'غروب آفتاب کا وقت موسم کے مطابق بدلتا ہے۔ کروز 17:30 بجے روانہ ہوتا ہے، سنہری لمحات کے مطابق۔' },
        { q: 'کیا ڈنر شامل ہے؟', a: 'جی ہاں! تمام پیکجز میں مکمل ڈنر شامل ہے: مزے اسٹارٹرز، مین کورس، اور ڈیزرٹ۔' },
        { q: 'کیا تفریح فراہم کی جاتی ہے؟', a: 'کروز لائیو گلوکار، ڈی جے میوزک، اور روایتی ترکی رات کا شو پیش کرتا ہے۔' },
        { q: 'کیا میں سالگرہ منا سکتا ہوں؟', a: 'بالکل! واٹس ایپ پر پہلے سے بتائیں اور ہم کیک اور خصوصی سجاوٹ کا انتظام کریں گے۔' }
      ]
    },
    hi: {
      title: 'बॉस्फोरस सनसेट डिनर क्रूज़ इस्तांबुल — गोल्डन ऑवर अनुभव',
      description: 'बॉस्फोरस पर 3 घंटे का सनसेट डिनर क्रूज़। इस्तांबुल का गोल्डन ऑवर, डिनर और लाइव शो का आनंद लें। 17:30 काबाताश से रवानगी।',
      tourName: 'सनसेट डिनर क्रूज़',
      subtitle: '3-कोर्स डिनर और लाइव मनोरंजन के साथ इस्तांबुल के गोल्डन ऑवर में नौकायन करें।',
      duration: '3 घंटे',
      highlights: ['गोल्डन ऑवर बॉस्फोरस दृश्य', 'पूर्ण डिनर सेवा', 'लाइव गायक और DJ संगीत', 'तुर्की रात्रि शो', 'इस्तांबुल के ऊपर सूर्यास्त', 'प्रीमियम बार'],
      faq: [
        { q: 'इस्तांबुल में सूर्यास्त कितने बजे होता है?', a: 'सूर्यास्त का समय मौसम के अनुसार बदलता है। क्रूज़ 17:30 पर रवाना होता है, गोल्डन ऑवर के अनुसार।' },
        { q: 'क्या डिनर शामिल है?', a: 'हाँ! सभी पैकेज में पूर्ण डिनर शामिल है: मेज़े स्टार्टर, मेन कोर्स और डेज़र्ट।' },
        { q: 'कौन सा मनोरंजन प्रदान किया जाता है?', a: 'क्रूज़ लाइव गायक, DJ संगीत और पारंपरिक तुर्की रात्रि शो प्रदान करता है।' },
        { q: 'क्या मैं जन्मदिन मना सकता हूँ?', a: 'बिल्कुल! WhatsApp पर पहले से बताएं और हम केक और विशेष सजावट तैयार करेंगे।' }
      ]
    }
  },

  dinner: {
    en: {
      title: 'Istanbul Bosphorus Dinner Cruise \u2014 Turkish Night & Live Shows',
      description: '3.5-hour dinner cruise with belly dance, folk shows, live music & DJ. Stunning night views of Bosphorus Bridge. Departs 20:45.',
      tourName: 'Dinner Cruise & Turkish Night',
      subtitle: 'Experience a magical night on the Bosphorus with dinner, live shows, and stunning city lights.',
      duration: '3.5 Hours',
      highlights: ['3-course dinner with Turkish cuisine', 'Belly dance performance', 'Folk dance & whirling dervish', 'Live singer & DJ party', 'Illuminated Bosphorus Bridge views', 'Open-air deck for night photos'],
      faq: [
        { q: 'What food is served?', a: 'A full 3-course dinner: traditional Turkish meze platter, main course (choice of grilled meat, fish, or vegetarian), and dessert. Soft drinks and water are included; alcoholic drinks available for purchase.' },
        { q: 'What shows are included?', a: 'The entertainment program includes a belly dance show, Turkish folk dance, whirling dervish performance, live singer, and DJ music with an open dance floor.' },
        { q: 'Is alcohol included?', a: 'Soft drinks and water are included in all packages. Alcoholic beverages (wine, beer, raki, spirits) are available at the onboard bar. VIP packages include a welcome drink.' },
        { q: 'Is it suitable for children?', a: 'Yes, the dinner cruise is family-friendly. Children enjoy the shows and night views. Children under 7 may have discounted rates \u2014 ask us on WhatsApp for details.' }
      ]
    },
    tr: {
      title: '\u0130stanbul Bo\u011faz Yemekli Gece Turu \u2014 T\u00fcrk Gecesi ve Canl\u0131 \u015eovlar',
      description: 'Oryantal dans, halk oyunlar\u0131, canl\u0131 m\u00fczik ve DJ e\u015fli\u011finde 3.5 saatlik yemekli gece turu. Bo\u011faz K\u00f6pr\u00fcs\u00fc\u2019n\u00fcn muhte\u015fem gece manzaras\u0131. Kalk\u0131\u015f 20:45.',
      tourName: 'Yemekli Gece Turu & T\u00fcrk Gecesi',
      subtitle: 'Bo\u011faz\u2019da yemek, canl\u0131 \u015fovlar ve \u015fehir \u0131\u015f\u0131klar\u0131yla b\u00fcy\u00fclü bir gece ya\u015fay\u0131n.',
      duration: '3.5 Saat',
      highlights: ['T\u00fcrk mutfa\u011f\u0131ndan 3 \u00e7e\u015fit yemek', 'Oryantal dans g\u00f6sterisi', 'Halk oyunlar\u0131 ve sema', 'Canl\u0131 \u015fark\u0131c\u0131 ve DJ partisi', 'I\u015f\u0131kl\u0131 Bo\u011faz K\u00f6pr\u00fcs\u00fc manzaras\u0131', 'Gece foto\u011fraflar\u0131 i\u00e7in a\u00e7\u0131k g\u00fcverte'],
      faq: [
        { q: 'Ne yemek servis edilir?', a: '3 \u00e7e\u015fit yemek: geleneksel T\u00fcrk meze tabaklar\u0131, ana yemek (et, bal\u0131k veya vejetaryen) ve tatl\u0131. Meşrubat ve su dahildir.' },
        { q: 'Hangi \u015fovlar var?', a: 'Oryantal dans, T\u00fcrk halk oyunlar\u0131, sema g\u00f6sterisi, canl\u0131 \u015fark\u0131c\u0131 ve DJ m\u00fczik e\u015fli\u011finde dans pisti.' },
        { q: 'Alkol dahil mi?', a: 'T\u00fcm paketlerde meşrubat ve su dahildir. Alkoll\u00fc i\u00e7ecekler barda sat\u0131n al\u0131nabilir. VIP pakette ho\u015f geldiniz i\u00e7kisi vard\u0131r.' },
        { q: '\u00c7ocuklar i\u00e7in uygun mu?', a: 'Evet, aile dostu bir tur. 7 ya\u015f alt\u0131 \u00e7ocuklar i\u00e7in indirim olabilir \u2014 WhatsApp\u2019tan sorun.' }
      ]
    },
    de: {
      title: 'Istanbul Bosporus Dinner-Kreuzfahrt \u2014 T\u00fcrkische Nacht & Live-Shows',
      description: '3,5-st\u00fcndige Dinner-Kreuzfahrt mit Bauchtanz, Folkshows, Live-Musik & DJ. Atemberaubende Nachtansichten der Bosporus-Br\u00fccke. Abfahrt 20:45.',
      tourName: 'Dinner-Kreuzfahrt & T\u00fcrkische Nacht',
      subtitle: 'Erleben Sie eine magische Nacht auf dem Bosporus mit Abendessen, Shows und Stadtlichtern.',
      duration: '3,5 Stunden',
      highlights: ['3-G\u00e4nge-Men\u00fc mit t\u00fcrkischer K\u00fcche', 'Bauchtanz-Auff\u00fchrung', 'Folkloretanz & Derwisch', 'Live-S\u00e4nger & DJ-Party', 'Beleuchtete Bosporus-Br\u00fccke', 'Freiluftdeck f\u00fcr Nachtfotos'],
      faq: [
        { q: 'Was wird serviert?', a: 'Ein 3-G\u00e4nge-Men\u00fc: t\u00fcrkische Meze, Hauptgang (Fleisch, Fisch oder vegetarisch) und Dessert. Softdrinks und Wasser inklusive.' },
        { q: 'Welche Shows gibt es?', a: 'Bauchtanz, t\u00fcrkischer Folkloretanz, Derwisch-Vorf\u00fchrung, Live-S\u00e4nger und DJ-Musik.' },
        { q: 'Ist Alkohol inbegriffen?', a: 'Softdrinks und Wasser sind in allen Paketen enthalten. Alkoholische Getr\u00e4nke sind an der Bar erh\u00e4ltlich. VIP enth\u00e4lt ein Begr\u00fc\u00dfungsgetr\u00e4nk.' },
        { q: 'Ist es f\u00fcr Kinder geeignet?', a: 'Ja, die Kreuzfahrt ist familienfreundlich. Kinder unter 7 Jahren erhalten m\u00f6glicherweise Erm\u00e4\u00dfigungen \u2014 fragen Sie per WhatsApp.' }
      ]
    },
    es: {
      title: 'Crucero con Cena por el B\u00f3sforo Estambul \u2014 Noche Turca y Shows en Vivo',
      description: 'Crucero de cena de 3,5 horas con danza del vientre, shows folcl\u00f3ricos, m\u00fasica en vivo y DJ. Vistas nocturnas del Puente del B\u00f3sforo. Sale a las 20:45.',
      tourName: 'Crucero con Cena y Noche Turca',
      subtitle: 'Vive una noche m\u00e1gica en el B\u00f3sforo con cena, shows en vivo y luces de la ciudad.',
      duration: '3,5 Horas',
      highlights: ['Cena de 3 platos con cocina turca', 'Espect\u00e1culo de danza del vientre', 'Danza folcl\u00f3rica y derviches', 'Cantante en vivo y fiesta DJ', 'Puente del B\u00f3sforo iluminado', 'Cubierta para fotos nocturnas'],
      faq: [
        { q: '\u00bfQu\u00e9 comida se sirve?', a: 'Cena de 3 platos: meze turco, plato principal (carne, pescado o vegetariano) y postre. Refrescos y agua incluidos.' },
        { q: '\u00bfQu\u00e9 shows est\u00e1n incluidos?', a: 'Danza del vientre, danza folcl\u00f3rica turca, derviches giradores, cantante en vivo y m\u00fasica DJ.' },
        { q: '\u00bfEl alcohol est\u00e1 incluido?', a: 'Refrescos y agua incluidos en todos los paquetes. Las bebidas alcoh\u00f3licas est\u00e1n disponibles en el bar. VIP incluye bebida de bienvenida.' },
        { q: '\u00bfEs adecuado para ni\u00f1os?', a: 'S\u00ed, el crucero es familiar. Ni\u00f1os menores de 7 a\u00f1os pueden tener descuento \u2014 preg\u00fantenos por WhatsApp.' }
      ]
    },
    ru: {
      title: '\u0423\u0436\u0438\u043d-\u043a\u0440\u0443\u0438\u0437 \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443 \u0421\u0442\u0430\u043c\u0431\u0443\u043b \u2014 \u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043d\u043e\u0447\u044c \u0438 \u0448\u043e\u0443',
      description: '3,5-\u0447\u0430\u0441\u043e\u0432\u043e\u0439 \u0443\u0436\u0438\u043d-\u043a\u0440\u0443\u0438\u0437 \u0441 \u0442\u0430\u043d\u0446\u0435\u043c \u0436\u0438\u0432\u043e\u0442\u0430, \u043d\u0430\u0440\u043e\u0434\u043d\u044b\u043c\u0438 \u0442\u0430\u043d\u0446\u0430\u043c\u0438, \u0436\u0438\u0432\u043e\u0439 \u043c\u0443\u0437\u044b\u043a\u043e\u0439 \u0438 DJ. \u041d\u043e\u0447\u043d\u044b\u0435 \u0432\u0438\u0434\u044b \u0411\u043e\u0441\u0444\u043e\u0440\u0441\u043a\u043e\u0433\u043e \u043c\u043e\u0441\u0442\u0430. \u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 20:45.',
      tourName: '\u0423\u0436\u0438\u043d-\u043a\u0440\u0443\u0438\u0437 \u0438 \u0442\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043d\u043e\u0447\u044c',
      subtitle: '\u041f\u0435\u0440\u0435\u0436\u0438\u0432\u0438\u0442\u0435 \u0432\u043e\u043b\u0448\u0435\u0431\u043d\u0443\u044e \u043d\u043e\u0447\u044c \u043d\u0430 \u0411\u043e\u0441\u0444\u043e\u0440\u0435 \u0441 \u0443\u0436\u0438\u043d\u043e\u043c, \u0448\u043e\u0443 \u0438 \u043e\u0433\u043d\u044f\u043c\u0438 \u0433\u043e\u0440\u043e\u0434\u0430.',
      duration: '3,5 \u0447\u0430\u0441\u0430',
      highlights: ['\u0423\u0436\u0438\u043d \u0438\u0437 3 \u0431\u043b\u044e\u0434 \u0442\u0443\u0440\u0435\u0446\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438', '\u0422\u0430\u043d\u0435\u0446 \u0436\u0438\u0432\u043e\u0442\u0430', '\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u0442\u0430\u043d\u0446\u044b \u0438 \u0434\u0435\u0440\u0432\u0438\u0448', '\u0416\u0438\u0432\u043e\u0439 \u043f\u0435\u0432\u0435\u0446 \u0438 DJ', '\u041d\u043e\u0447\u043d\u043e\u0439 \u0411\u043e\u0441\u0444\u043e\u0440\u0441\u043a\u0438\u0439 \u043c\u043e\u0441\u0442', '\u041f\u0430\u043b\u0443\u0431\u0430 \u0434\u043b\u044f \u043d\u043e\u0447\u043d\u044b\u0445 \u0444\u043e\u0442\u043e'],
      faq: [
        { q: '\u0427\u0442\u043e \u043f\u043e\u0434\u0430\u044e\u0442?', a: '\u041f\u043e\u043b\u043d\u044b\u0439 \u0443\u0436\u0438\u043d \u0438\u0437 3 \u0431\u043b\u044e\u0434: \u0442\u0443\u0440\u0435\u0446\u043a\u0438\u0435 \u043c\u0435\u0437\u0435, \u0433\u043e\u0440\u044f\u0447\u0435\u0435 (\u043c\u044f\u0441\u043e, \u0440\u044b\u0431\u0430 \u0438\u043b\u0438 \u0432\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u043e\u0435) \u0438 \u0434\u0435\u0441\u0435\u0440\u0442. \u041d\u0430\u043f\u0438\u0442\u043a\u0438 \u0438 \u0432\u043e\u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b.' },
        { q: '\u041a\u0430\u043a\u0438\u0435 \u0448\u043e\u0443 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b?', a: '\u0422\u0430\u043d\u0435\u0446 \u0436\u0438\u0432\u043e\u0442\u0430, \u0442\u0443\u0440\u0435\u0446\u043a\u0438\u0435 \u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u0442\u0430\u043d\u0446\u044b, \u0434\u0435\u0440\u0432\u0438\u0448, \u0436\u0438\u0432\u043e\u0439 \u043f\u0435\u0432\u0435\u0446 \u0438 DJ \u0441 \u0442\u0430\u043d\u0446\u043f\u043e\u043b\u043e\u043c.' },
        { q: '\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c \u0432\u043a\u043b\u044e\u0447\u0451\u043d?', a: '\u041d\u0430\u043f\u0438\u0442\u043a\u0438 \u0438 \u0432\u043e\u0434\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432\u043e \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b. \u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c \u043c\u043e\u0436\u043d\u043e \u043a\u0443\u043f\u0438\u0442\u044c \u0432 \u0431\u0430\u0440\u0435. VIP \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043d\u0430\u043f\u0438\u0442\u043e\u043a.' },
        { q: '\u041f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u043b\u0438 \u0434\u043b\u044f \u0434\u0435\u0442\u0435\u0439?', a: '\u0414\u0430, \u043a\u0440\u0443\u0438\u0437 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0441\u0435\u043c\u0435\u0439. \u0414\u0435\u0442\u044f\u043c \u0434\u043e 7 \u043b\u0435\u0442 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0438 \u2014 \u0443\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0432 WhatsApp.' }
      ]
    },
    ar: {
      title: '\u0631\u062d\u0644\u0629 \u0639\u0634\u0627\u0621 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0625\u0633\u0637\u0646\u0628\u0648\u0644 \u2014 \u0644\u064a\u0644\u0629 \u062a\u0631\u0643\u064a\u0629 \u0648\u0639\u0631\u0648\u0636 \u062d\u064a\u0629',
      description: '\u0631\u062d\u0644\u0629 \u0639\u0634\u0627\u0621 3.5 \u0633\u0627\u0639\u0627\u062a \u0645\u0639 \u0631\u0642\u0635 \u0634\u0631\u0642\u064a \u0648\u0639\u0631\u0648\u0636 \u0641\u0644\u0643\u0644\u0648\u0631\u064a\u0629 \u0648\u0645\u0648\u0633\u064a\u0642\u0649 \u062d\u064a\u0629 \u0648DJ. \u0645\u0646\u0627\u0638\u0631 \u0644\u064a\u0644\u064a\u0629 \u0645\u0630\u0647\u0644\u0629 \u0644\u062c\u0633\u0631 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631. \u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629 20:45.',
      tourName: '\u0631\u062d\u0644\u0629 \u0639\u0634\u0627\u0621 \u0648\u0644\u064a\u0644\u0629 \u062a\u0631\u0643\u064a\u0629',
      subtitle: '\u0639\u0634 \u0644\u064a\u0644\u0629 \u0633\u0627\u062d\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0645\u0639 \u0639\u0634\u0627\u0621 \u0648\u0639\u0631\u0648\u0636 \u062d\u064a\u0629 \u0648\u0623\u0636\u0648\u0627\u0621 \u0627\u0644\u0645\u062f\u064a\u0646\u0629.',
      duration: '3.5 \u0633\u0627\u0639\u0627\u062a',
      highlights: ['\u0639\u0634\u0627\u0621 3 \u0623\u0637\u0628\u0627\u0642 \u0645\u0646 \u0627\u0644\u0645\u0637\u0628\u062e \u0627\u0644\u062a\u0631\u0643\u064a', '\u0639\u0631\u0636 \u0631\u0642\u0635 \u0634\u0631\u0642\u064a', '\u0631\u0642\u0635 \u0634\u0639\u0628\u064a \u0648\u062f\u0631\u0648\u064a\u0634', '\u0645\u063a\u0646\u064a \u062d\u064a \u0648\u062d\u0641\u0644\u0629 DJ', '\u062c\u0633\u0631 \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0627\u0644\u0645\u0636\u064a\u0621', '\u0633\u0637\u062d \u0645\u0641\u062a\u0648\u062d \u0644\u0644\u0635\u0648\u0631 \u0627\u0644\u0644\u064a\u0644\u064a\u0629'],
      faq: [
        { q: '\u0645\u0627\u0630\u0627 \u064a\u064f\u0642\u062f\u0645 \u0645\u0646 \u0637\u0639\u0627\u0645\u061f', a: '\u0639\u0634\u0627\u0621 \u0643\u0627\u0645\u0644 \u0645\u0646 3 \u0623\u0637\u0628\u0627\u0642: \u0645\u0642\u0628\u0644\u0627\u062a \u062a\u0631\u0643\u064a\u0629\u060c \u0637\u0628\u0642 \u0631\u0626\u064a\u0633\u064a (\u0644\u062d\u0645 \u0623\u0648 \u0633\u0645\u0643 \u0623\u0648 \u0646\u0628\u0627\u062a\u064a) \u0648\u062d\u0644\u0648\u0649. \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u0627\u0621 \u0645\u0634\u0645\u0648\u0644\u0629.' },
        { q: '\u0645\u0627 \u0647\u064a \u0627\u0644\u0639\u0631\u0648\u0636\u061f', a: '\u0631\u0642\u0635 \u0634\u0631\u0642\u064a\u060c \u0631\u0642\u0635 \u0634\u0639\u0628\u064a \u062a\u0631\u0643\u064a\u060c \u062f\u0631\u0648\u064a\u0634 \u062f\u0648\u0627\u0631\u060c \u0645\u063a\u0646\u064a \u062d\u064a \u0648\u0645\u0648\u0633\u064a\u0642\u0649 DJ \u0645\u0639 \u062d\u0644\u0628\u0629 \u0631\u0642\u0635.' },
        { q: '\u0647\u0644 \u0627\u0644\u0643\u062d\u0648\u0644 \u0645\u0634\u0645\u0648\u0644\u061f', a: '\u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u0627\u0621 \u0645\u0634\u0645\u0648\u0644\u0629. \u0627\u0644\u0645\u0634\u0631\u0648\u0628\u0627\u062a \u0627\u0644\u0643\u062d\u0648\u0644\u064a\u0629 \u0645\u062a\u0627\u062d\u0629 \u0644\u0644\u0634\u0631\u0627\u0621. \u0628\u0627\u0642\u0629 VIP \u062a\u0634\u0645\u0644 \u0645\u0634\u0631\u0648\u0628 \u062a\u0631\u062d\u064a\u0628\u064a.' },
        { q: '\u0647\u0644 \u064a\u0646\u0627\u0633\u0628 \u0627\u0644\u0623\u0637\u0641\u0627\u0644\u061f', a: '\u0646\u0639\u0645\u060c \u0627\u0644\u0631\u062d\u0644\u0629 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0644\u0639\u0627\u0626\u0644\u0627\u062a. \u0627\u0644\u0623\u0637\u0641\u0627\u0644 \u062a\u062d\u062a 7 \u0633\u0646\u0648\u0627\u062a \u0642\u062f \u064a\u062d\u0635\u0644\u0648\u0646 \u0639\u0644\u0649 \u062e\u0635\u0645 \u2014 \u0627\u0633\u0623\u0644 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.' }
      ]
    },
    bg: {
      title: 'Вечерен круиз по Босфора Истанбул — Турска нощ и шоу на живо',
      description: '3,5-часов круиз с вечеря с ориенталски танц, фолклорни шоу, музика на живо и DJ. Невероятни нощни гледки към Босфорския мост. Тръгване в 20:45.',
      tourName: 'Круиз с вечеря и турска нощ',
      subtitle: 'Преживейте магична нощ по Босфора с вечеря, шоу на живо и градски светлини.',
      duration: '3,5 часа',
      highlights: ['Вечеря от 3 блюда с турска кухня', 'Шоу с ориенталски танц', 'Фолклорни танци и дервиш', 'Певец на живо и DJ парти', 'Осветен Босфорски мост', 'Открита палуба за нощни снимки'],
      faq: [
        { q: 'Каква храна се сервира?', a: 'Пълна вечеря от 3 блюда: турски мезета, основно ястие (месо, риба или вегетарианско) и десерт. Безалкохолни напитки и вода са включени.' },
        { q: 'Какви шоу има?', a: 'Ориенталски танц, турски фолклорни танци, въртящ се дервиш, певец на живо и DJ музика с дансинг.' },
        { q: 'Алкохолът включен ли е?', a: 'Безалкохолни напитки и вода са включени. Алкохолни напитки могат да се закупят от бара. VIP пакетът включва приветствена напитка.' },
        { q: 'Подходящо ли е за деца?', a: 'Да, круизът е семеен. Деца под 7 години може да имат намалена цена — попитайте ни в WhatsApp.' }
      ]
    },
    ro: {
      title: 'Croazieră cu cină pe Bosfor Istanbul — Noapte turcească și spectacole live',
      description: 'Croazieră de 3,5 ore cu cină, dans din buric, spectacole folclorice, muzică live și DJ. Priveliști nocturne uimitoare ale Podului Bosforului. Plecare la 20:45.',
      tourName: 'Croazieră cu cină și noapte turcească',
      subtitle: 'Trăiește o noapte magică pe Bosfor cu cină, spectacole live și luminile orașului.',
      duration: '3,5 ore',
      highlights: ['Cină din 3 feluri cu bucătărie turcească', 'Spectacol de dans din buric', 'Dans folcloric și derviș rotitor', 'Solist live și petrecere DJ', 'Podul Bosforului iluminat', 'Punte pentru fotografii nocturne'],
      faq: [
        { q: 'Ce mâncare se servește?', a: 'Cină completă din 3 feluri: platou de meze turcești, fel principal (carne, pește sau vegetarian) și desert. Băuturi răcoritoare și apă incluse.' },
        { q: 'Ce spectacole sunt incluse?', a: 'Dans din buric, dans folcloric turcesc, derviș rotitor, solist live și muzică DJ cu ring de dans.' },
        { q: 'Alcoolul este inclus?', a: 'Băuturi răcoritoare și apă incluse în toate pachetele. Băuturi alcoolice disponibile la bar. Pachetul VIP include băutură de bun venit.' },
        { q: 'Este potrivit pentru copii?', a: 'Da, croaziera este prietenoasă pentru familii. Copiii sub 7 ani pot avea tarife reduse — întrebați pe WhatsApp.' }
      ]
    },
    zh: {
      title: '伊斯坦布尔博斯普鲁斯晚餐游船 — 土耳其之夜与现场表演',
      description: '3.5小时晚餐游船，包含肚皮舞、民间表演、现场音乐和DJ。博斯普鲁斯大桥壮丽夜景。20:45出发。',
      tourName: '晚餐游船与土耳其之夜',
      subtitle: '在博斯普鲁斯海峡体验魔幻之夜，享用晚餐、现场表演和璀璨城市灯光。',
      duration: '3.5小时',
      highlights: ['土耳其美食三道菜晚餐', '肚皮舞表演', '民间舞蹈与旋转托钵僧', '现场歌手与DJ派对', '博斯普鲁斯大桥灯光夜景', '露天甲板夜景摄影'],
      faq: [
        { q: '提供什么餐食？', a: '三道菜全套晚餐：土耳其传统开胃菜、主菜（烤肉、鱼或素食可选）和甜点。软饮和水已包含。' },
        { q: '包含哪些表演？', a: '肚皮舞、土耳其民间舞蹈、旋转托钵僧表演、现场歌手和DJ音乐及舞池。' },
        { q: '包含酒精饮品吗？', a: '所有套餐包含软饮和水。酒精饮品可在船上酒吧购买。VIP套餐包含迎宾饮品。' },
        { q: '适合儿童吗？', a: '是的，晚餐游船适合家庭出行。7岁以下儿童可能有折扣优惠，请通过WhatsApp咨询。' }
      ]
    },
    fr: {
      title: 'Croisière dîner sur le Bosphore Istanbul — Nuit turque et spectacles',
      description: 'Croisière dîner de 3h30 avec danse du ventre, spectacles folkloriques, musique live et DJ. Vues nocturnes époustouflantes du Pont du Bosphore. Départ à 20h45.',
      tourName: 'Croisière dîner et nuit turque',
      subtitle: 'Vivez une nuit magique sur le Bosphore avec dîner, spectacles et lumières de la ville.',
      duration: '3h30',
      highlights: ['Dîner 3 plats de cuisine turque', 'Spectacle de danse du ventre', 'Danse folklorique et derviche', 'Chanteur live et soirée DJ', 'Pont du Bosphore illuminé', 'Pont extérieur pour photos nocturnes'],
      faq: [
        { q: 'Quelle nourriture est servie ?', a: 'Un dîner complet en 3 plats : meze turcs, plat principal (viande, poisson ou végétarien) et dessert. Boissons non alcoolisées et eau incluses.' },
        { q: 'Quels spectacles sont inclus ?', a: 'Danse du ventre, danse folklorique turque, derviche tourneur, chanteur live et musique DJ avec piste de danse.' },
        { q: 'L\'alcool est-il inclus ?', a: 'Boissons non alcoolisées et eau incluses. Les boissons alcoolisées sont disponibles au bar. Le forfait VIP comprend une boisson de bienvenue.' },
        { q: 'Est-ce adapté aux enfants ?', a: 'Oui, la croisière convient aux familles. Les enfants de moins de 7 ans peuvent bénéficier de réductions — demandez via WhatsApp.' }
      ]
    },
    it: {
      title: 'Crociera con cena sul Bosforo Istanbul — Notte turca e spettacoli dal vivo',
      description: 'Crociera con cena di 3,5 ore con danza del ventre, spettacoli folcloristici, musica dal vivo e DJ. Viste notturne mozzafiato del Ponte sul Bosforo. Partenza alle 20:45.',
      tourName: 'Crociera con cena e notte turca',
      subtitle: 'Vivi una notte magica sul Bosforo con cena, spettacoli dal vivo e luci della città.',
      duration: '3,5 ore',
      highlights: ['Cena di 3 portate con cucina turca', 'Spettacolo di danza del ventre', 'Danze folcloristiche e derviscio', 'Cantante dal vivo e DJ party', 'Ponte sul Bosforo illuminato', 'Ponte all\'aperto per foto notturne'],
      faq: [
        { q: 'Che cibo viene servito?', a: 'Cena completa di 3 portate: piatto di meze turchi, portata principale (carne, pesce o vegetariano) e dessert. Bibite e acqua incluse.' },
        { q: 'Quali spettacoli sono inclusi?', a: 'Danza del ventre, danze folcloristiche turche, derviscio rotante, cantante dal vivo e musica DJ con pista da ballo.' },
        { q: 'L\'alcol è incluso?', a: 'Bibite e acqua incluse in tutti i pacchetti. Le bevande alcoliche sono disponibili al bar. Il pacchetto VIP include un drink di benvenuto.' },
        { q: 'È adatto ai bambini?', a: 'Sì, la crociera è adatta alle famiglie. I bambini sotto i 7 anni potrebbero avere tariffe ridotte — chiedete su WhatsApp.' }
      ]
    },
    ja: {
      title: 'イスタンブール ボスポラスディナークルーズ — トルコナイト＆ライブショー',
      description: 'ベリーダンス、フォークショー、ライブミュージック＆DJが楽しめる3.5時間のディナークルーズ。ボスポラス大橋の圧巻の夜景。20:45出発。',
      tourName: 'ディナークルーズ＆トルコナイト',
      subtitle: 'ディナー、ライブショー、きらめく街の灯りとともに、ボスポラス海峡で魔法のような夜を。',
      duration: '3.5時間',
      highlights: ['トルコ料理3コースディナー', 'ベリーダンスパフォーマンス', 'フォークダンス＆旋回舞踊', 'ライブシンガー＆DJパーティー', 'ライトアップされたボスポラス大橋', '夜景撮影用オープンデッキ'],
      faq: [
        { q: 'どんな食事が出ますか？', a: '3コースフルディナー：トルコの伝統的なメゼ盛り合わせ、メインコース（肉・魚・ベジタリアンから選択）、デザート。ソフトドリンクと水付き。' },
        { q: 'どんなショーがありますか？', a: 'ベリーダンス、トルコフォークダンス、旋回舞踊、ライブシンガー、DJミュージックとダンスフロア。' },
        { q: 'アルコールは含まれていますか？', a: 'ソフトドリンクと水は全パッケージに含まれます。アルコール飲料は船内バーでご購入いただけます。VIPパッケージにはウェルカムドリンクが含まれます。' },
        { q: '子供連れでも大丈夫ですか？', a: 'はい、ファミリーフレンドリーなクルーズです。7歳未満のお子様は割引がある場合があります。WhatsAppでお問い合わせください。' }
      ]
    },
    ko: {
      title: '이스탄불 보스포러스 디너 크루즈 — 터키의 밤 & 라이브 쇼',
      description: '벨리댄스, 민속 공연, 라이브 음악 & DJ가 포함된 3.5시간 디너 크루즈. 보스포러스 대교의 멋진 야경. 20:45 출발.',
      tourName: '디너 크루즈 & 터키의 밤',
      subtitle: '디너, 라이브 쇼, 아름다운 도시 야경과 함께 보스포러스에서 마법 같은 밤을 경험하세요.',
      duration: '3.5시간',
      highlights: ['터키 요리 3코스 디너', '벨리댄스 공연', '민속 무용 & 회전 수도승', '라이브 가수 & DJ 파티', '조명이 빛나는 보스포러스 대교', '야경 촬영용 야외 데크'],
      faq: [
        { q: '어떤 음식이 제공되나요?', a: '3코스 풀 디너: 터키 전통 메제, 메인 코스(고기, 생선 또는 채식 선택), 디저트. 음료수와 물 포함.' },
        { q: '어떤 공연이 포함되나요?', a: '벨리댄스, 터키 민속 무용, 회전 수도승, 라이브 가수, DJ 음악과 댄스 플로어.' },
        { q: '주류가 포함되어 있나요?', a: '모든 패키지에 음료수와 물이 포함됩니다. 주류는 선상 바에서 구매 가능합니다. VIP 패키지에는 웰컴 드링크가 포함됩니다.' },
        { q: '아이들에게 적합한가요?', a: '네, 가족 친화적인 크루즈입니다. 7세 미만 어린이는 할인이 있을 수 있습니다. WhatsApp으로 문의하세요.' }
      ]
    },
    ms: {
      title: 'Pelayaran Makan Malam Bosphorus Istanbul — Malam Turki & Persembahan Langsung',
      description: 'Pelayaran makan malam 3.5 jam dengan tarian perut, persembahan rakyat, muzik langsung & DJ. Pemandangan malam Jambatan Bosphorus yang menakjubkan. Berlepas 20:45.',
      tourName: 'Pelayaran Makan Malam & Malam Turki',
      subtitle: 'Alami malam yang ajaib di Bosphorus dengan makan malam, persembahan langsung dan pemandangan malam bandar.',
      duration: '3.5 Jam',
      highlights: ['Makan malam 3 hidangan masakan Turki', 'Persembahan tarian perut', 'Tarian rakyat & darwis berputar', 'Penyanyi langsung & parti DJ', 'Jambatan Bosphorus bercahaya', 'Dek terbuka untuk fotografi malam'],
      faq: [
        { q: 'Apakah makanan yang dihidangkan?', a: 'Makan malam 3 hidangan: meze Turki tradisional, hidangan utama (pilihan daging, ikan atau vegetarian), pencuci mulut. Minuman ringan dan air disertakan.' },
        { q: 'Apakah persembahan yang disertakan?', a: 'Tarian perut, tarian rakyat Turki, darwis berputar, penyanyi langsung, muzik DJ dan lantai tarian.' },
        { q: 'Adakah alkohol disertakan?', a: 'Semua pakej termasuk minuman ringan dan air. Alkohol boleh dibeli di bar kapal. Pakej VIP termasuk minuman alu-aluan.' },
        { q: 'Adakah ia sesuai untuk kanak-kanak?', a: 'Ya, pelayaran ini mesra keluarga. Kanak-kanak di bawah 7 tahun mungkin mendapat diskaun. Hubungi kami melalui WhatsApp.' }
      ]
    },
    id: {
      title: 'Pelayaran Makan Malam Bosphorus Istanbul — Malam Turki & Pertunjukan Langsung',
      description: 'Pelayaran makan malam 3,5 jam dengan tari perut, pertunjukan rakyat, musik langsung & DJ. Pemandangan malam Jembatan Bosphorus yang menakjubkan. Berangkat 20:45.',
      tourName: 'Pelayaran Makan Malam & Malam Turki',
      subtitle: 'Rasakan malam ajaib di Bosphorus dengan makan malam, pertunjukan langsung, dan pemandangan malam kota.',
      duration: '3,5 Jam',
      highlights: ['Makan malam 3 hidangan masakan Turki', 'Pertunjukan tari perut', 'Tarian rakyat & darwis berputar', 'Penyanyi langsung & pesta DJ', 'Jembatan Bosphorus yang bercahaya', 'Dek terbuka untuk fotografi malam'],
      faq: [
        { q: 'Makanan apa yang disajikan?', a: 'Makan malam 3 hidangan: meze Turki tradisional, hidangan utama (pilihan daging, ikan, atau vegetarian), makanan penutup. Minuman ringan dan air termasuk.' },
        { q: 'Pertunjukan apa yang disertakan?', a: 'Tari perut, tarian rakyat Turki, darwis berputar, penyanyi langsung, musik DJ, dan lantai dansa.' },
        { q: 'Apakah alkohol termasuk?', a: 'Semua paket termasuk minuman ringan dan air. Alkohol dapat dibeli di bar kapal. Paket VIP termasuk minuman selamat datang.' },
        { q: 'Apakah cocok untuk anak-anak?', a: 'Ya, pelayaran ini ramah keluarga. Anak-anak di bawah 7 tahun mungkin mendapat diskon. Hubungi kami melalui WhatsApp.' }
      ]
    },
    ur: {
      title: 'استنبول باسفورس ڈنر کروز — ترکی کی رات اور لائیو شوز',
      description: 'بیلی ڈانس، لوک رقص، لائیو میوزک اور ڈی جے کے ساتھ 3.5 گھنٹے کا ڈنر کروز۔ باسفورس پل کے شاندار رات کے نظارے۔ 20:45 روانگی۔',
      tourName: 'ڈنر کروز اور ترکی کی رات',
      subtitle: 'ڈنر، لائیو شوز اور شہر کے خوبصورت رات کے نظاروں کے ساتھ باسفورس پر ایک جادوئی رات کا تجربہ کریں۔',
      duration: '3.5 گھنٹے',
      highlights: ['ترکی کھانوں کا 3 کورس ڈنر', 'بیلی ڈانس پرفارمنس', 'لوک رقص اور گھومنے والے درویش', 'لائیو گلوکار اور ڈی جے پارٹی', 'روشنیوں سے جگمگاتا باسفورس پل', 'رات کی فوٹوگرافی کے لیے کھلی ڈیک'],
      faq: [
        { q: 'کیا کھانا پیش کیا جاتا ہے؟', a: '3 کورس مکمل ڈنر: روایتی ترکی مزے، مین کورس (گوشت، مچھلی یا سبزیوں کا انتخاب)، ڈیزرٹ۔ سافٹ ڈرنکس اور پانی شامل۔' },
        { q: 'کون سے شوز شامل ہیں؟', a: 'بیلی ڈانس، ترکی لوک رقص، گھومنے والے درویش، لائیو گلوکار، ڈی جے میوزک اور ڈانس فلور۔' },
        { q: 'کیا شراب شامل ہے؟', a: 'تمام پیکجز میں سافٹ ڈرنکس اور پانی شامل ہیں۔ شراب جہاز کے بار سے خریدی جا سکتی ہے۔ VIP پیکج میں خوش آمدید ڈرنک شامل ہے۔' },
        { q: 'کیا بچوں کے لیے مناسب ہے؟', a: 'جی ہاں، یہ خاندان دوست کروز ہے۔ 7 سال سے کم عمر بچوں کو رعایت مل سکتی ہے۔ واٹس ایپ پر رابطہ کریں۔' }
      ]
    },
    hi: {
      title: 'इस्तांबुल बॉस्फोरस डिनर क्रूज़ — तुर्की रात्रि और लाइव शो',
      description: 'बेली डांस, लोक नृत्य, लाइव संगीत और DJ के साथ 3.5 घंटे का डिनर क्रूज़। बॉस्फोरस ब्रिज के शानदार रात्रि दृश्य। 20:45 रवानगी।',
      tourName: 'डिनर क्रूज़ और तुर्की रात्रि',
      subtitle: 'डिनर, लाइव शो और शहर के सुंदर रात्रि दृश्यों के साथ बॉस्फोरस पर एक जादुई रात का अनुभव करें।',
      duration: '3.5 घंटे',
      highlights: ['तुर्की व्यंजनों का 3-कोर्स डिनर', 'बेली डांस प्रदर्शन', 'लोक नृत्य और घूमते दरवेश', 'लाइव गायक और DJ पार्टी', 'रोशनी से जगमगाता बॉस्फोरस ब्रिज', 'रात्रि फोटोग्राफी के लिए खुली डेक'],
      faq: [
        { q: 'कौन सा भोजन परोसा जाता है?', a: '3-कोर्स पूर्ण डिनर: पारंपरिक तुर्की मेज़े, मेन कोर्स (मांस, मछली या शाकाहारी विकल्प), डेज़र्ट। सॉफ्ट ड्रिंक और पानी शामिल।' },
        { q: 'कौन से शो शामिल हैं?', a: 'बेली डांस, तुर्की लोक नृत्य, घूमते दरवेश, लाइव गायक, DJ संगीत और डांस फ्लोर।' },
        { q: 'क्या शराब शामिल है?', a: 'सभी पैकेज में सॉफ्ट ड्रिंक और पानी शामिल हैं। शराब जहाज़ के बार से खरीदी जा सकती है। VIP पैकेज में स्वागत ड्रिंक शामिल है।' },
        { q: 'क्या यह बच्चों के लिए उपयुक्त है?', a: 'हाँ, यह परिवार-अनुकूल क्रूज़ है। 7 वर्ष से कम उम्र के बच्चों को छूट मिल सकती है। WhatsApp पर संपर्क करें।' }
      ]
    }
  },

  'last-minute': {
    en: {
      title: 'Bosphorus Cruise Tonight \u2014 Last Minute Booking Istanbul',
      description: 'Book a Bosphorus cruise for tonight! Same-day availability for dinner, sunset & daytime cruises. Instant WhatsApp booking.',
      tourName: 'Last Minute \u2014 Book Tonight!',
      subtitle: 'Same-day availability. Choose from our daytime, sunset, or dinner cruises departing today.',
      duration: null,
      highlights: ['Same-day booking available', 'Instant WhatsApp confirmation', 'Multiple departure times', 'No prepayment required', '7/24 support team', 'All cruise types available'],
      faq: [
        { q: 'Can I really book for tonight?', a: 'Yes! We have same-day availability on most cruises. Simply message us on WhatsApp and we\u2019ll confirm your spot within minutes.' },
        { q: 'What cruises are available today?', a: 'We offer daytime sightseeing (12:00), sunset dinner (17:30), and dinner cruise with Turkish night (20:45). Availability depends on the day.' },
        { q: 'Do I need to pay in advance?', a: 'No! No prepayment or credit card required. Simply book via WhatsApp and pay on the boat when you arrive.' },
        { q: 'How quickly will I get confirmation?', a: 'Our team responds within minutes, 7 days a week. You\u2019ll receive a confirmation message with all details: boat name, pier location, and check-in time.' }
      ]
    },
    tr: {
      title: 'Bu Gece Bo\u011faz Turu \u2014 Son Dakika Rezervasyon \u0130stanbul',
      description: 'Bu gece i\u00e7in Bo\u011faz turu rezervasyonu yap\u0131n! Yemekli, g\u00fcn bat\u0131m\u0131 ve g\u00fcnd\u00fcz turlar\u0131nda ayn\u0131 g\u00fcn m\u00fcsaitlik. WhatsApp ile an\u0131nda rezervasyon.',
      tourName: 'Son Dakika \u2014 Bu Gece Rezervasyon!',
      subtitle: 'Ayn\u0131 g\u00fcn m\u00fcsaitlik. G\u00fcnd\u00fcz, g\u00fcn bat\u0131m\u0131 veya gece turlar\u0131ndan se\u00e7in.',
      duration: null,
      highlights: ['Ayn\u0131 g\u00fcn rezervasyon', 'An\u0131nda WhatsApp onay\u0131', 'Birden fazla kalk\u0131\u015f saati', '\u00d6n \u00f6deme gerekmiyor', '7/24 destek ekibi', 'T\u00fcm tur tipleri mevcut'],
      faq: [
        { q: 'Ger\u00e7ekten bu gece i\u00e7in rezervasyon yapabilir miyim?', a: 'Evet! \u00c7o\u011fu turda ayn\u0131 g\u00fcn m\u00fcsaitlik var. WhatsApp\u2019tan yaz\u0131n, dakikalar i\u00e7inde yerinizi onayl\u0131yoruz.' },
        { q: 'Bug\u00fcn hangi turlar var?', a: 'G\u00fcnd\u00fcz gezi (12:00), g\u00fcn bat\u0131m\u0131 yemekli tur (17:30) ve gece yemekli T\u00fcrk gecesi turu (20:45) sunuyoruz.' },
        { q: '\u00d6nceden \u00f6deme yapmam gerekir mi?', a: 'Hay\u0131r! \u00d6n \u00f6deme veya kredi kart\u0131 gerekmez. WhatsApp\u2019tan rezervasyon yap\u0131p teknede \u00f6dersiniz.' },
        { q: 'Ne kadar s\u00fcrede onay al\u0131r\u0131m?', a: 'Ekibimiz haftada 7 g\u00fcn dakikalar i\u00e7inde yan\u0131t verir. Tekne ad\u0131, iskele ve giri\u015f saati bilgilerini i\u00e7eren onay mesaj\u0131 al\u0131rs\u0131n\u0131z.' }
      ]
    },
    de: {
      title: 'Bosporus-Kreuzfahrt Heute Abend \u2014 Last Minute Buchung Istanbul',
      description: 'Buchen Sie eine Bosporus-Kreuzfahrt f\u00fcr heute Abend! Tagesaktuelle Verf\u00fcgbarkeit f\u00fcr Dinner-, Sunset- & Tageskreuzfahrten. Sofortige WhatsApp-Buchung.',
      tourName: 'Last Minute \u2014 Heute Abend buchen!',
      subtitle: 'Tagesaktuelle Verf\u00fcgbarkeit. W\u00e4hlen Sie zwischen Tages-, Sunset- oder Dinner-Kreuzfahrten.',
      duration: null,
      highlights: ['Buchung am selben Tag', 'Sofortige WhatsApp-Best\u00e4tigung', 'Mehrere Abfahrtszeiten', 'Keine Vorauszahlung', '24/7 Support-Team', 'Alle Kreuzfahrttypen verf\u00fcgbar'],
      faq: [
        { q: 'Kann ich wirklich f\u00fcr heute Abend buchen?', a: 'Ja! Die meisten Kreuzfahrten sind am selben Tag verf\u00fcgbar. Schreiben Sie uns auf WhatsApp und wir best\u00e4tigen Ihren Platz in Minuten.' },
        { q: 'Welche Kreuzfahrten sind heute verf\u00fcgbar?', a: 'Tages-Sightseeing (12:00), Sunset-Dinner (17:30) und Dinner-Kreuzfahrt mit t\u00fcrkischer Nacht (20:45).' },
        { q: 'Muss ich im Voraus bezahlen?', a: 'Nein! Keine Vorauszahlung oder Kreditkarte n\u00f6tig. \u00dcber WhatsApp buchen und an Bord bezahlen.' },
        { q: 'Wie schnell erhalte ich eine Best\u00e4tigung?', a: 'Unser Team antwortet innerhalb von Minuten, 7 Tage die Woche.' }
      ]
    },
    es: {
      title: 'Crucero por el B\u00f3sforo Esta Noche \u2014 Reserva de \u00daltimo Minuto Estambul',
      description: '\u00a1Reserva un crucero por el B\u00f3sforo para esta noche! Disponibilidad el mismo d\u00eda para cruceros de cena, atardecer y diurno. Reserva instant\u00e1nea por WhatsApp.',
      tourName: '\u00daltimo Minuto \u2014 \u00a1Reserva Esta Noche!',
      subtitle: 'Disponibilidad el mismo d\u00eda. Elige entre nuestros cruceros diurnos, al atardecer o de cena.',
      duration: null,
      highlights: ['Reserva el mismo d\u00eda', 'Confirmaci\u00f3n instant\u00e1nea por WhatsApp', 'M\u00faltiples horarios de salida', 'Sin pago anticipado', 'Equipo de soporte 24/7', 'Todos los tipos de crucero disponibles'],
      faq: [
        { q: '\u00bfRealmente puedo reservar para esta noche?', a: '\u00a1S\u00ed! Tenemos disponibilidad el mismo d\u00eda en la mayor\u00eda de los cruceros. Escr\u00edbenos por WhatsApp y confirmaremos tu lugar en minutos.' },
        { q: '\u00bfQu\u00e9 cruceros hay disponibles hoy?', a: 'Ofrecemos tur\u00edstico diurno (12:00), cena al atardecer (17:30) y crucero de cena con noche turca (20:45).' },
        { q: '\u00bfNecesito pagar por adelantado?', a: '\u00a1No! Sin pago anticipado ni tarjeta de cr\u00e9dito. Reserva por WhatsApp y paga en el barco.' },
        { q: '\u00bfQu\u00e9 tan r\u00e1pido recibir\u00e9 confirmaci\u00f3n?', a: 'Nuestro equipo responde en minutos, los 7 d\u00edas de la semana.' }
      ]
    },
    ru: {
      title: '\u041a\u0440\u0443\u0438\u0437 \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u2014 \u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u044e \u043c\u0438\u043d\u0443\u0442\u0443',
      description: '\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u043a\u0440\u0443\u0438\u0437 \u043f\u043e \u0411\u043e\u0441\u0444\u043e\u0440\u0443 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f! \u0414\u043d\u0435\u0432\u043d\u044b\u0435, \u0437\u0430\u043a\u0430\u0442\u043d\u044b\u0435 \u0438 \u0432\u0435\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u0440\u0443\u0438\u0437\u044b. \u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp.',
      tourName: '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u043c\u0438\u043d\u0443\u0442\u0430 \u2014 \u0411\u0440\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f!',
      subtitle: '\u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f. \u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 \u0434\u043d\u0435\u0432\u043d\u043e\u0439, \u0437\u0430\u043a\u0430\u0442\u043d\u044b\u0439 \u0438\u043b\u0438 \u0432\u0435\u0447\u0435\u0440\u043d\u0438\u0439 \u043a\u0440\u0443\u0438\u0437.',
      duration: null,
      highlights: ['\u0411\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0434\u0435\u043d\u044c \u043a\u0440\u0443\u0438\u0437\u0430', '\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 WhatsApp', '\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0435\u0439\u0441\u043e\u0432 \u0432 \u0434\u0435\u043d\u044c', '\u0411\u0435\u0437 \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u044b', '\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 24/7', '\u0412\u0441\u0435 \u0442\u0438\u043f\u044b \u043a\u0440\u0443\u0438\u0437\u043e\u0432'],
      faq: [
        { q: '\u041c\u043e\u0436\u043d\u043e \u0437\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f?', a: '\u0414\u0430! \u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u043a\u0440\u0443\u0438\u0437\u043e\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u0434\u0435\u043d\u044c \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0432 WhatsApp \u2014 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043c \u0437\u0430 \u043c\u0438\u043d\u0443\u0442\u044b.' },
        { q: '\u041a\u0430\u043a\u0438\u0435 \u043a\u0440\u0443\u0438\u0437\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f?', a: '\u0414\u043d\u0435\u0432\u043d\u043e\u0439 (12:00), \u043d\u0430 \u0437\u0430\u043a\u0430\u0442\u0435 \u0441 \u0443\u0436\u0438\u043d\u043e\u043c (17:30) \u0438 \u0432\u0435\u0447\u0435\u0440\u043d\u0438\u0439 \u0441 \u0442\u0443\u0440\u0435\u0446\u043a\u043e\u0439 \u043d\u043e\u0447\u044c\u044e (20:45).' },
        { q: '\u041d\u0443\u0436\u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u0430?', a: '\u041d\u0435\u0442! \u041d\u0438\u043a\u0430\u043a\u043e\u0439 \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u044b. \u0411\u0440\u043e\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 WhatsApp \u0438 \u043f\u043b\u0430\u0442\u0438\u0442\u0435 \u043d\u0430 \u0431\u043e\u0440\u0442\u0443.' },
        { q: '\u041a\u0430\u043a \u0431\u044b\u0441\u0442\u0440\u043e \u043f\u0440\u0438\u0434\u0451\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435?', a: '\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043c\u0438\u043d\u0443\u0442, 7 \u0434\u043d\u0435\u0439 \u0432 \u043d\u0435\u0434\u0435\u043b\u044e.' }
      ]
    },
    ar: {
      title: '\u0631\u062d\u0644\u0629 \u0628\u062d\u0631\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0627\u0644\u0644\u064a\u0644\u0629 \u2014 \u062d\u062c\u0632 \u0627\u0644\u0644\u062d\u0638\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u0625\u0633\u0637\u0646\u0628\u0648\u0644',
      description: '\u0627\u062d\u062c\u0632 \u0631\u062d\u0644\u0629 \u0628\u062d\u0631\u064a\u0629 \u0641\u064a \u0627\u0644\u0628\u0648\u0633\u0641\u0648\u0631 \u0627\u0644\u0644\u064a\u0644\u0629! \u062a\u0648\u0641\u0631 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u064a\u0648\u0645 \u0644\u0631\u062d\u0644\u0627\u062a \u0627\u0644\u0639\u0634\u0627\u0621 \u0648\u0627\u0644\u063a\u0631\u0648\u0628 \u0648\u0627\u0644\u0646\u0647\u0627\u0631\u064a\u0629. \u062d\u062c\u0632 \u0641\u0648\u0631\u064a \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628.',
      tourName: '\u0627\u0644\u0644\u062d\u0638\u0629 \u0627\u0644\u0623\u062e\u064a\u0631\u0629 \u2014 \u0627\u062d\u062c\u0632 \u0627\u0644\u0644\u064a\u0644\u0629!',
      subtitle: '\u062a\u0648\u0641\u0631 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u064a\u0648\u0645. \u0627\u062e\u062a\u0631 \u0645\u0646 \u0631\u062d\u0644\u0627\u062a\u0646\u0627 \u0627\u0644\u0646\u0647\u0627\u0631\u064a\u0629 \u0623\u0648 \u063a\u0631\u0648\u0628 \u0627\u0644\u0634\u0645\u0633 \u0623\u0648 \u0627\u0644\u0639\u0634\u0627\u0621.',
      duration: null,
      highlights: ['\u062d\u062c\u0632 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u064a\u0648\u0645', '\u062a\u0623\u0643\u064a\u062f \u0641\u0648\u0631\u064a \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628', '\u0623\u0648\u0642\u0627\u062a \u0645\u063a\u0627\u062f\u0631\u0629 \u0645\u062a\u0639\u062f\u062f\u0629', '\u0628\u062f\u0648\u0646 \u062f\u0641\u0639 \u0645\u0633\u0628\u0642', '\u0641\u0631\u064a\u0642 \u062f\u0639\u0645 \u0639\u0644\u0649 \u0645\u062f\u0627\u0631 \u0627\u0644\u0633\u0627\u0639\u0629', '\u062c\u0645\u064a\u0639 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0645\u062a\u0627\u062d\u0629'],
      faq: [
        { q: '\u0647\u0644 \u064a\u0645\u0643\u0646\u0646\u064a \u0627\u0644\u062d\u062c\u0632 \u0644\u0644\u064a\u0644\u0629\u061f', a: '\u0646\u0639\u0645! \u0645\u0639\u0638\u0645 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0645\u062a\u0627\u062d\u0629 \u0641\u064a \u0646\u0641\u0633 \u0627\u0644\u064a\u0648\u0645. \u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0648\u0633\u0646\u0624\u0643\u062f \u062d\u062c\u0632\u0643 \u0641\u064a \u062f\u0642\u0627\u0626\u0642.' },
        { q: '\u0645\u0627 \u0627\u0644\u0631\u062d\u0644\u0627\u062a \u0627\u0644\u0645\u062a\u0627\u062d\u0629 \u0627\u0644\u064a\u0648\u0645\u061f', a: '\u0646\u0642\u062f\u0645 \u0631\u062d\u0644\u0629 \u0646\u0647\u0627\u0631\u064a\u0629 (12:00)\u060c \u0639\u0634\u0627\u0621 \u063a\u0631\u0648\u0628 (17:30)\u060c \u0648\u0639\u0634\u0627\u0621 \u0645\u0639 \u0644\u064a\u0644\u0629 \u062a\u0631\u0643\u064a\u0629 (20:45).' },
        { q: '\u0647\u0644 \u0623\u062d\u062a\u0627\u062c \u0644\u0644\u062f\u0641\u0639 \u0645\u0633\u0628\u0642\u0627\u064b\u061f', a: '\u0644\u0627! \u0644\u0627 \u062f\u0641\u0639 \u0645\u0633\u0628\u0642 \u0648\u0644\u0627 \u0628\u0637\u0627\u0642\u0629 \u0627\u0626\u062a\u0645\u0627\u0646. \u0627\u062d\u062c\u0632 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0648\u0627\u062f\u0641\u0639 \u0639\u0644\u0649 \u0627\u0644\u0642\u0627\u0631\u0628.' },
        { q: '\u0645\u062a\u0649 \u0633\u0623\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u062a\u0623\u0643\u064a\u062f\u061f', a: '\u0641\u0631\u064a\u0642\u0646\u0627 \u064a\u0631\u062f \u062e\u0644\u0627\u0644 \u062f\u0642\u0627\u0626\u0642\u060c 7 \u0623\u064a\u0627\u0645 \u0641\u064a \u0627\u0644\u0623\u0633\u0628\u0648\u0639.' }
      ]
    },
    bg: {
      title: 'Круиз по Босфора тази вечер — Резервация в последната минута Истанбул',
      description: 'Резервирайте круиз по Босфора за тази вечер! Наличност в същия ден за круизи с вечеря, при залез и дневни. Моментална резервация в WhatsApp.',
      tourName: 'Последна минута — Резервирайте тази вечер!',
      subtitle: 'Наличност в същия ден. Изберете от нашите дневни, залезни или вечерни круизи, тръгващи днес.',
      duration: null,
      highlights: ['Резервация в същия ден', 'Моментално потвърждение в WhatsApp', 'Няколко часа на тръгване', 'Без предплащане', 'Екип за поддръжка 24/7', 'Всички видове круизи'],
      faq: [
        { q: 'Наистина мога да резервирам за тази вечер?', a: 'Да! Повечето круизи имат наличност в същия ден. Пишете ни в WhatsApp и ще потвърдим мястото ви за минути.' },
        { q: 'Какви круизи има днес?', a: 'Предлагаме дневна обиколка (12:00), вечеря при залез (17:30) и вечерен круиз с турска нощ (20:45).' },
        { q: 'Трябва ли да платя предварително?', a: 'Не! Без предплащане или кредитна карта. Резервирайте в WhatsApp и платете на кораба.' },
        { q: 'Колко бързо ще получа потвърждение?', a: 'Нашият екип отговаря за минути, 7 дни в седмицата.' }
      ]
    },
    ro: {
      title: 'Croazieră pe Bosfor diseară — Rezervare de ultimă oră Istanbul',
      description: 'Rezervă o croazieră pe Bosfor pentru diseară! Disponibilitate în aceeași zi pentru croaziere cu cină, la apus și de zi. Rezervare instantanee pe WhatsApp.',
      tourName: 'Ultimă oră — Rezervă diseară!',
      subtitle: 'Disponibilitate în aceeași zi. Alege dintre croazierele noastre de zi, la apus sau cu cină.',
      duration: null,
      highlights: ['Rezervare în aceeași zi', 'Confirmare instantanee pe WhatsApp', 'Mai multe ore de plecare', 'Fără plată în avans', 'Echipă de suport 24/7', 'Toate tipurile de croaziere'],
      faq: [
        { q: 'Pot rezerva chiar pentru diseară?', a: 'Da! Majoritatea croazierelor au disponibilitate în aceeași zi. Scrie-ne pe WhatsApp și confirmăm locul în câteva minute.' },
        { q: 'Ce croaziere sunt disponibile azi?', a: 'Oferim tur de zi (12:00), cină la apus (17:30) și croazieră cu cină și noapte turcească (20:45).' },
        { q: 'Trebuie să plătesc în avans?', a: 'Nu! Fără plată în avans sau card de credit. Rezervă pe WhatsApp și plătește pe barcă.' },
        { q: 'Cât de repede primesc confirmarea?', a: 'Echipa noastră răspunde în câteva minute, 7 zile pe săptămână.' }
      ]
    },
    zh: {
      title: '今晚博斯普鲁斯游船 — 伊斯坦布尔最后时刻预订',
      description: '预订今晚的博斯普鲁斯游船！晚餐、日落和日间游船当天可订。WhatsApp即时预订。',
      tourName: '最后时刻 — 今晚预订！',
      subtitle: '当天可订。从我们今天出发的日间、日落或晚餐游船中选择。',
      duration: null,
      highlights: ['当天即可预订', 'WhatsApp即时确认', '多个出发时间', '无需预付', '7/24全天候支持', '所有游船类型可选'],
      faq: [
        { q: '真的可以预订今晚的吗？', a: '是的！大多数游船当天都有空位。通过WhatsApp联系我们，几分钟内即可确认。' },
        { q: '今天有哪些游船？', a: '我们提供日间观光（12:00）、日落晚餐（17:30）和土耳其之夜晚餐游船（20:45）。' },
        { q: '需要提前付款吗？', a: '不需要！无需预付或信用卡。通过WhatsApp预订，上船付款即可。' },
        { q: '多快能收到确认？', a: '我们的团队每周7天、几分钟内即可回复。' }
      ]
    },
    fr: {
      title: 'Croisière sur le Bosphore ce soir — Réservation dernière minute Istanbul',
      description: 'Réservez une croisière sur le Bosphore pour ce soir ! Disponibilité le jour même pour croisières dîner, coucher de soleil et journée. Réservation instantanée WhatsApp.',
      tourName: 'Dernière minute — Réservez ce soir !',
      subtitle: 'Disponibilité le jour même. Choisissez parmi nos croisières de jour, au coucher du soleil ou dîner.',
      duration: null,
      highlights: ['Réservation le jour même', 'Confirmation instantanée WhatsApp', 'Plusieurs horaires de départ', 'Sans prépaiement', 'Équipe disponible 7j/7', 'Tous types de croisières'],
      faq: [
        { q: 'Puis-je vraiment réserver pour ce soir ?', a: 'Oui ! La plupart des croisières sont disponibles le jour même. Écrivez-nous sur WhatsApp et nous confirmons votre place en quelques minutes.' },
        { q: 'Quelles croisières sont disponibles aujourd\'hui ?', a: 'Nous proposons la journée (12h00), le coucher de soleil avec dîner (17h30) et la croisière dîner avec nuit turque (20h45).' },
        { q: 'Dois-je payer à l\'avance ?', a: 'Non ! Aucun prépaiement ni carte de crédit requis. Réservez via WhatsApp et payez à bord.' },
        { q: 'En combien de temps recevrai-je la confirmation ?', a: 'Notre équipe répond en quelques minutes, 7 jours sur 7.' }
      ]
    },
    it: {
      title: 'Crociera sul Bosforo stasera — Prenotazione last minute Istanbul',
      description: 'Prenota una crociera sul Bosforo per stasera! Disponibilità nello stesso giorno per crociere con cena, al tramonto e diurne. Prenotazione istantanea su WhatsApp.',
      tourName: 'Last Minute — Prenota stasera!',
      subtitle: 'Disponibilità nello stesso giorno. Scegli tra le nostre crociere diurne, al tramonto o con cena.',
      duration: null,
      highlights: ['Prenotazione nello stesso giorno', 'Conferma istantanea su WhatsApp', 'Più orari di partenza', 'Nessun pagamento anticipato', 'Team di supporto 24/7', 'Tutti i tipi di crociera'],
      faq: [
        { q: 'Posso davvero prenotare per stasera?', a: 'Sì! La maggior parte delle crociere è disponibile in giornata. Scrivici su WhatsApp e confermeremo il tuo posto in pochi minuti.' },
        { q: 'Quali crociere sono disponibili oggi?', a: 'Offriamo tour diurno (12:00), cena al tramonto (17:30) e crociera con cena e notte turca (20:45).' },
        { q: 'Devo pagare in anticipo?', a: 'No! Nessun pagamento anticipato o carta di credito necessaria. Prenota su WhatsApp e paga a bordo.' },
        { q: 'Quanto velocemente riceverò la conferma?', a: 'Il nostro team risponde in pochi minuti, 7 giorni su 7.' }
      ]
    },
    ja: {
      title: '今夜のボスポラス海峡クルーズ — イスタンブール直前予約',
      description: '今夜のボスポラスクルーズを予約！ディナー、サンセット、デイタイムクルーズの当日予約可能。WhatsAppで即時予約。',
      tourName: '直前予約 — 今夜の予約はこちら！',
      subtitle: '当日予約可能。本日出発のデイタイム、サンセット、ディナークルーズからお選びください。',
      duration: null,
      highlights: ['当日予約可能', 'WhatsApp即時確認', '複数の出発時間', '事前決済不要', '24時間年中無休サポート', '全クルーズタイプ利用可能'],
      faq: [
        { q: '本当に今夜の予約ができますか？', a: 'はい！ほとんどのクルーズで当日空席があります。WhatsAppでご連絡いただければ、数分で確定いたします。' },
        { q: '今日はどのクルーズがありますか？', a: 'デイタイム観光（12:00）、サンセットディナー（17:30）、トルコナイトディナークルーズ（20:45）をご用意しています。' },
        { q: '事前に支払う必要がありますか？', a: 'いいえ！前払いもクレジットカードも不要です。WhatsAppで予約して、乗船時にお支払いください。' },
        { q: '確認はどのくらいで届きますか？', a: '私たちのチームは年中無休で、数分以内にご返信いたします。' }
      ]
    },
    ko: {
      title: '오늘 밤 보스포러스 크루즈 — 이스탄불 막바지 예약',
      description: '오늘 밤 보스포러스 크루즈를 예약하세요! 디너, 선셋, 주간 크루즈 당일 예약 가능. WhatsApp 즉시 예약.',
      tourName: '막바지 예약 — 오늘 밤 예약하세요!',
      subtitle: '당일 예약 가능. 오늘 출발하는 주간, 선셋, 디너 크루즈 중 선택하세요.',
      duration: null,
      highlights: ['당일 예약 가능', 'WhatsApp 즉시 확인', '다양한 출발 시간', '사전 결제 불필요', '연중무휴 지원팀', '모든 크루즈 유형 이용 가능'],
      faq: [
        { q: '정말 오늘 밤 예약할 수 있나요?', a: '네! 대부분의 크루즈가 당일 이용 가능합니다. WhatsApp으로 메시지를 보내시면 몇 분 내로 확인해 드립니다.' },
        { q: '오늘 어떤 크루즈가 있나요?', a: '주간 관광(12:00), 선셋 디너(17:30), 터키의 밤 디너 크루즈(20:45)를 제공합니다.' },
        { q: '미리 결제해야 하나요?', a: '아닙니다! 사전 결제나 신용카드가 필요 없습니다. WhatsApp으로 예약하고 선상에서 결제하세요.' },
        { q: '확인은 얼마나 빨리 받을 수 있나요?', a: '저희 팀은 연중무휴로 몇 분 내에 응답합니다.' }
      ]
    },
    ms: {
      title: 'Pelayaran Bosphorus Malam Ini — Tempahan Saat Akhir Istanbul',
      description: 'Tempah pelayaran Bosphorus malam ini! Tempahan hari yang sama untuk pelayaran makan malam, matahari terbenam & siang hari. Tempahan segera melalui WhatsApp.',
      tourName: 'Tempahan Saat Akhir — Tempah Malam Ini!',
      subtitle: 'Tempahan hari yang sama tersedia. Pilih pelayaran siang, matahari terbenam atau makan malam yang berlepas hari ini.',
      duration: null,
      highlights: ['Tempahan hari yang sama tersedia', 'Pengesahan segera melalui WhatsApp', 'Pelbagai waktu berlepas', 'Tanpa bayaran pendahuluan', 'Pasukan sokongan 24/7', 'Semua jenis pelayaran tersedia'],
      faq: [
        { q: 'Bolehkah saya benar-benar menempah untuk malam ini?', a: 'Ya! Kebanyakan pelayaran tersedia pada hari yang sama. Hantar mesej WhatsApp dan kami akan mengesahkan dalam beberapa minit.' },
        { q: 'Apakah pelayaran yang tersedia hari ini?', a: 'Kami menawarkan lawatan siang (12:00), makan malam matahari terbenam (17:30) dan pelayaran makan malam malam Turki (20:45).' },
        { q: 'Adakah saya perlu membayar terlebih dahulu?', a: 'Tidak! Tiada bayaran pendahuluan atau kad kredit diperlukan. Tempah melalui WhatsApp dan bayar di atas kapal.' },
        { q: 'Berapa cepat saya boleh mendapat pengesahan?', a: 'Pasukan kami bertindak balas dalam beberapa minit, 24/7.' }
      ]
    },
    id: {
      title: 'Pelayaran Bosphorus Malam Ini — Pemesanan Menit Terakhir Istanbul',
      description: 'Pesan pelayaran Bosphorus malam ini! Pemesanan hari yang sama untuk pelayaran makan malam, sunset & siang hari. Pemesanan instan via WhatsApp.',
      tourName: 'Pemesanan Menit Terakhir — Pesan Malam Ini!',
      subtitle: 'Pemesanan hari yang sama tersedia. Pilih pelayaran siang, sunset, atau makan malam yang berangkat hari ini.',
      duration: null,
      highlights: ['Pemesanan hari yang sama tersedia', 'Konfirmasi instan via WhatsApp', 'Berbagai waktu keberangkatan', 'Tanpa pembayaran di muka', 'Tim dukungan 24/7', 'Semua jenis pelayaran tersedia'],
      faq: [
        { q: 'Bisakah saya benar-benar memesan untuk malam ini?', a: 'Ya! Sebagian besar pelayaran tersedia pada hari yang sama. Kirim pesan WhatsApp dan kami akan mengonfirmasi dalam beberapa menit.' },
        { q: 'Pelayaran apa yang tersedia hari ini?', a: 'Kami menawarkan tur siang (12:00), makan malam sunset (17:30), dan pelayaran makan malam malam Turki (20:45).' },
        { q: 'Apakah saya perlu membayar di muka?', a: 'Tidak! Tidak perlu pembayaran di muka atau kartu kredit. Pesan melalui WhatsApp dan bayar di atas kapal.' },
        { q: 'Seberapa cepat saya bisa mendapat konfirmasi?', a: 'Tim kami merespons dalam beberapa menit, 24/7.' }
      ]
    },
    ur: {
      title: 'آج رات باسفورس کروز — استنبول لاسٹ منٹ بکنگ',
      description: 'آج رات باسفورس کروز بک کریں! ڈنر، غروب آفتاب اور دن کے کروز کی اسی دن بکنگ۔ واٹس ایپ سے فوری بکنگ۔',
      tourName: 'لاسٹ منٹ بکنگ — آج رات بک کریں!',
      subtitle: 'اسی دن بکنگ دستیاب ہے۔ آج روانہ ہونے والے دن، غروب آفتاب یا ڈنر کروز میں سے انتخاب کریں۔',
      duration: null,
      highlights: ['اسی دن بکنگ دستیاب', 'واٹس ایپ سے فوری تصدیق', 'مختلف روانگی کے اوقات', 'پیشگی ادائیگی کی ضرورت نہیں', '24/7 سپورٹ ٹیم', 'تمام قسم کے کروز دستیاب'],
      faq: [
        { q: 'کیا واقعی آج رات کے لیے بک کر سکتا ہوں؟', a: 'جی ہاں! زیادہ تر کروز اسی دن دستیاب ہیں۔ واٹس ایپ پر پیغام بھیجیں اور ہم چند منٹوں میں تصدیق کر دیں گے۔' },
        { q: 'آج کون سے کروز دستیاب ہیں؟', a: 'ہم دن کی سیر (12:00)، غروب آفتاب ڈنر (17:30)، اور ترکی کی رات ڈنر کروز (20:45) پیش کرتے ہیں۔' },
        { q: 'کیا پیشگی ادائیگی ضروری ہے؟', a: 'نہیں! کوئی پیشگی ادائیگی یا کریڈٹ کارڈ کی ضرورت نہیں۔ واٹس ایپ سے بک کریں اور جہاز پر ادائیگی کریں۔' },
        { q: 'تصدیق کتنی جلدی ملے گی؟', a: 'ہماری ٹیم 24/7 چند منٹوں میں جواب دیتی ہے۔' }
      ]
    },
    hi: {
      title: 'आज रात बॉस्फोरस क्रूज़ — इस्तांबुल लास्ट मिनट बुकिंग',
      description: 'आज रात बॉस्फोरस क्रूज़ बुक करें! डिनर, सनसेट और दिन के क्रूज़ की उसी दिन बुकिंग। WhatsApp से तुरंत बुकिंग।',
      tourName: 'लास्ट मिनट बुकिंग — आज रात बुक करें!',
      subtitle: 'उसी दिन बुकिंग उपलब्ध। आज रवाना होने वाले दिन, सनसेट या डिनर क्रूज़ में से चुनें।',
      duration: null,
      highlights: ['उसी दिन बुकिंग उपलब्ध', 'WhatsApp से तुरंत पुष्टि', 'विभिन्न रवानगी समय', 'अग्रिम भुगतान आवश्यक नहीं', '24/7 सहायता टीम', 'सभी प्रकार के क्रूज़ उपलब्ध'],
      faq: [
        { q: 'क्या मैं वाकई आज रात के लिए बुक कर सकता हूँ?', a: 'हाँ! अधिकांश क्रूज़ उसी दिन उपलब्ध हैं। WhatsApp पर संदेश भेजें और हम कुछ ही मिनटों में पुष्टि कर देंगे।' },
        { q: 'आज कौन से क्रूज़ उपलब्ध हैं?', a: 'हम दिन की सैर (12:00), सनसेट डिनर (17:30), और तुर्की रात्रि डिनर क्रूज़ (20:45) प्रदान करते हैं।' },
        { q: 'क्या अग्रिम भुगतान आवश्यक है?', a: 'नहीं! कोई अग्रिम भुगतान या क्रेडिट कार्ड आवश्यक नहीं। WhatsApp से बुक करें और जहाज़ पर भुगतान करें।' },
        { q: 'पुष्टि कितनी जल्दी मिलेगी?', a: 'हमारी टीम 24/7 कुछ ही मिनटों में जवाब देती है।' }
      ]
    }
  }
};

// ========== UI TRANSLATIONS ==========
const UI = {
  nav: {
    home: { en: 'Home', tr: 'Ana Sayfa', de: 'Startseite', es: 'Inicio', ru: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', ar: '\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629', bg: 'Начало', ro: 'Acasă', zh: '首页', fr: 'Accueil', it: 'Home', ja: 'ホーム', ko: '홈', ms: 'Utama', id: 'Beranda', ur: 'ہوم', hi: 'होम' },
    cruises: { en: 'Cruises', tr: 'Turlar', de: 'Kreuzfahrten', es: 'Cruceros', ru: '\u041a\u0440\u0443\u0438\u0437\u044b', ar: '\u0627\u0644\u0631\u062d\u0644\u0627\u062a', bg: 'Круизи', ro: 'Croaziere', zh: '游船', fr: 'Croisières', it: 'Crociere', ja: 'クルーズ', ko: '크루즈', ms: 'Pelayaran', id: 'Pelayaran', ur: 'کروز', hi: 'क्रूज़' },
    gallery: { en: 'Gallery', tr: 'Galeri', de: 'Galerie', es: 'Galer\u00eda', ru: '\u0413\u0430\u043b\u0435\u0440\u0435\u044f', ar: '\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631', bg: 'Галерия', ro: 'Galerie', zh: '画廊', fr: 'Galerie', it: 'Galleria', ja: 'ギャラリー', ko: '갤러리', ms: 'Galeri', id: 'Galeri', ur: 'گیلری', hi: 'गैलरी' },
    faq: { en: 'FAQ', tr: 'SSS', de: 'FAQ', es: 'FAQ', ru: '\u0412\u043e\u043f\u0440\u043e\u0441\u044b', ar: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629', bg: 'ЧЗВ', ro: 'FAQ', zh: '常见问题', fr: 'FAQ', it: 'FAQ', ja: 'よくある質問', ko: 'FAQ', ms: 'Soalan Lazim', id: 'FAQ', ur: 'سوالات', hi: 'FAQ' },
    book: { en: 'Book Now', tr: 'Rezervasyon', de: 'Jetzt buchen', es: 'Reservar', ru: '\u0411\u0440\u043e\u043d\u044c', ar: '\u0627\u062d\u062c\u0632 \u0627\u0644\u0622\u0646', bg: 'Резервирай', ro: 'Rezervă', zh: '立即预订', fr: 'Réserver', it: 'Prenota', ja: '予約する', ko: '예약하기', ms: 'Tempah Sekarang', id: 'Pesan Sekarang', ur: 'ابھی بک کریں', hi: 'अभी बुक करें' }
  },
  departure: { en: 'Departure', tr: 'Kalk\u0131\u015f', de: 'Abfahrt', es: 'Salida', ru: '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435', ar: '\u0627\u0644\u0645\u063a\u0627\u062f\u0631\u0629', bg: 'Тръгване', ro: 'Plecare', zh: '出发', fr: 'Départ', it: 'Partenza', ja: '出発', ko: '출발', ms: 'Berlepas', id: 'Keberangkatan', ur: 'روانگی', hi: 'रवानगी' },
  duration: { en: 'Duration', tr: 'S\u00fcre', de: 'Dauer', es: 'Duraci\u00f3n', ru: '\u0414\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c', ar: '\u0627\u0644\u0645\u062f\u0629', bg: 'Продължителност', ro: 'Durată', zh: '时长', fr: 'Durée', it: 'Durata', ja: '所要時間', ko: '소요시간', ms: 'Tempoh', id: 'Durasi', ur: 'دورانیہ', hi: 'अवधि' },
  pier: { en: 'Pier', tr: '\u0130skele', de: 'Pier', es: 'Muelle', ru: '\u041f\u0440\u0438\u0447\u0430\u043b', ar: '\u0627\u0644\u0631\u0635\u064a\u0641', bg: 'Пристанище', ro: 'Port', zh: '码头', fr: 'Quai', it: 'Molo', ja: '埠頭', ko: '부두', ms: 'Jeti', id: 'Dermaga', ur: 'گھاٹ', hi: 'घाट' },
  from: { en: 'From', tr: 'Ba\u015fl.', de: 'Ab', es: 'Desde', ru: '\u041e\u0442', ar: '\u0645\u0646', bg: 'От', ro: 'De la', zh: '起', fr: 'Dès', it: 'Da', ja: '〜から', ko: '부터', ms: 'Dari', id: 'Dari', ur: 'سے', hi: 'से' },
  perPerson: { en: '/person', tr: '/ki\u015fi', de: '/Person', es: '/persona', ru: '/\u0447\u0435\u043b.', ar: '/\u0634\u062e\u0635', bg: '/човек', ro: '/persoană', zh: '/人', fr: '/personne', it: '/persona', ja: '/名', ko: '/인', ms: '/orang', id: '/orang', ur: '/شخص', hi: '/व्यक्ति' },
  bookWhatsApp: { en: 'Book on WhatsApp', tr: 'WhatsApp\u2019tan Rezervasyon', de: 'Auf WhatsApp buchen', es: 'Reservar en WhatsApp', ru: '\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c WhatsApp', ar: '\u0627\u062d\u062c\u0632 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628', bg: 'Резервирай в WhatsApp', ro: 'Rezervă pe WhatsApp', zh: '通过WhatsApp预订', fr: 'Réserver sur WhatsApp', it: 'Prenota su WhatsApp', ja: 'WhatsAppで予約', ko: 'WhatsApp으로 예약', ms: 'Tempah di WhatsApp', id: 'Pesan di WhatsApp', ur: 'واٹس ایپ پر بک کریں', hi: 'WhatsApp पर बुक करें' },
  bookTelegram: { en: 'Book on Telegram', tr: 'Telegram\u2019dan Rezervasyon', de: 'Auf Telegram buchen', es: 'Reservar en Telegram', ru: '\u0417\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c Telegram', ar: '\u0627\u062d\u062c\u0632 \u0639\u0628\u0631 \u062a\u0644\u064a\u062c\u0631\u0627\u0645', bg: 'Резервирай в Telegram', ro: 'Rezervă pe Telegram', zh: '通过Telegram预订', fr: 'Réserver sur Telegram', it: 'Prenota su Telegram', ja: 'Telegramで予約', ko: 'Telegram으로 예약', ms: 'Tempah di Telegram', id: 'Pesan di Telegram', ur: 'ٹیلیگرام پر بک کریں', hi: 'Telegram पर बुक करें' },
  highlights: { en: 'What\u2019s Included', tr: 'Neler Dahil', de: 'Was ist enthalten', es: 'Qu\u00e9 incluye', ru: '\u0427\u0442\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e', ar: '\u0645\u0627\u0630\u0627 \u064a\u0634\u0645\u0644', bg: 'Какво е включено', ro: 'Ce este inclus', zh: '包含内容', fr: 'Ce qui est inclus', it: 'Cosa è incluso', ja: '含まれるもの', ko: '포함 사항', ms: 'Apa yang Termasuk', id: 'Apa yang Termasuk', ur: 'کیا شامل ہے', hi: 'क्या शामिल है' },
  boatsAndPackages: { en: 'Boats & Packages', tr: 'Tekneler ve Paketler', de: 'Boote & Pakete', es: 'Barcos y Paquetes', ru: '\u041b\u043e\u0434\u043a\u0438 \u0438 \u043f\u0430\u043a\u0435\u0442\u044b', ar: '\u0627\u0644\u0642\u0648\u0627\u0631\u0628 \u0648\u0627\u0644\u0628\u0627\u0642\u0627\u062a', bg: 'Кораби и пакети', ro: 'Ambarcațiuni și pachete', zh: '船只与套餐', fr: 'Bateaux et forfaits', it: 'Barche e pacchetti', ja: 'ボート＆パッケージ', ko: '보트 & 패키지', ms: 'Bot & Pakej', id: 'Kapal & Paket', ur: 'کشتیاں اور پیکجز', hi: 'नाव और पैकेज' },
  photoGallery: { en: 'Photo Gallery', tr: 'Foto\u011fraf Galerisi', de: 'Fotogalerie', es: 'Galer\u00eda de Fotos', ru: '\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f', ar: '\u0645\u0639\u0631\u0636 \u0627\u0644\u0635\u0648\u0631', bg: 'Фотогалерия', ro: 'Galerie foto', zh: '照片画廊', fr: 'Galerie photos', it: 'Galleria fotografica', ja: 'フォトギャラリー', ko: '포토 갤러리', ms: 'Galeri Foto', id: 'Galeri Foto', ur: 'فوٹو گیلری', hi: 'फोटो गैलरी' },
  faqTitle: { en: 'Frequently Asked Questions', tr: 'S\u0131k\u00e7a Sorulan Sorular', de: 'H\u00e4ufig gestellte Fragen', es: 'Preguntas Frecuentes', ru: '\u0427\u0430\u0441\u0442\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b', ar: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629', bg: 'Често задавани въпроси', ro: 'Întrebări frecvente', zh: '常见问题', fr: 'Questions fréquentes', it: 'Domande frequenti', ja: 'よくある質問', ko: '자주 묻는 질문', ms: 'Soalan Lazim', id: 'Pertanyaan yang Sering Diajukan', ur: 'اکثر پوچھے جانے والے سوالات', hi: 'अक्सर पूछे जाने वाले प्रश्न' },
  readyToBook: { en: 'Ready to Book?', tr: 'Rezervasyona Haz\u0131r m\u0131s\u0131n\u0131z?', de: 'Bereit zu buchen?', es: '\u00bfListo para reservar?', ru: '\u0413\u043e\u0442\u043e\u0432\u044b \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c?', ar: '\u0645\u0633\u062a\u0639\u062f \u0644\u0644\u062d\u062c\u0632\u061f', bg: 'Готови ли сте да резервирате?', ro: 'Gata de rezervare?', zh: '准备好预订了吗？', fr: 'Prêt à réserver ?', it: 'Pronti a prenotare?', ja: '予約の準備はできましたか？', ko: '예약할 준비가 되셨나요?', ms: 'Sedia untuk Menempah?', id: 'Siap untuk Memesan?', ur: 'بکنگ کے لیے تیار؟', hi: 'बुक करने के लिए तैयार?' },
  ctaDesc: { en: 'Message us on WhatsApp for instant booking. No prepayment required \u2014 pay on the boat.', tr: 'An\u0131nda rezervasyon i\u00e7in WhatsApp\u2019tan yaz\u0131n. \u00d6n \u00f6deme yok \u2014 teknede \u00f6deyin.', de: 'Schreiben Sie uns auf WhatsApp f\u00fcr sofortige Buchung. Keine Vorauszahlung \u2014 Bezahlung an Bord.', es: 'Escr\u00edbenos por WhatsApp para reserva instant\u00e1nea. Sin pago anticipado \u2014 paga en el barco.', ru: '\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430\u043c \u0432 WhatsApp \u0434\u043b\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0411\u0435\u0437 \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u2014 \u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0431\u043e\u0440\u0442\u0443.', ar: '\u0631\u0627\u0633\u0644\u0646\u0627 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0644\u0644\u062d\u062c\u0632 \u0627\u0644\u0641\u0648\u0631\u064a. \u0628\u062f\u0648\u0646 \u062f\u0641\u0639 \u0645\u0633\u0628\u0642 \u2014 \u0627\u062f\u0641\u0639 \u0639\u0644\u0649 \u0627\u0644\u0642\u0627\u0631\u0628.', bg: 'Пишете ни в WhatsApp за моментална резервация. Без предплащане — платете на кораба.', ro: 'Scrie-ne pe WhatsApp pentru rezervare instantanee. Fără plată în avans — plătești pe barcă.', zh: '通过WhatsApp联系我们即时预订。无需预付——船上付款。', fr: 'Écrivez-nous sur WhatsApp pour une réservation instantanée. Sans prépaiement — payez à bord.', it: 'Scrivici su WhatsApp per prenotazione istantanea. Nessun pagamento anticipato — paga a bordo.', ja: 'WhatsAppでお問い合わせいただければ即時予約。前払い不要——乗船時にお支払い。', ko: 'WhatsApp으로 메시지를 보내 즉시 예약하세요. 사전 결제 불필요 — 선상에서 결제.', ms: 'Hantar mesej kepada kami di WhatsApp untuk tempahan segera. Tiada bayaran pendahuluan — bayar di atas kapal.', id: 'Kirim pesan kepada kami di WhatsApp untuk pemesanan instan. Tanpa pembayaran di muka — bayar di atas kapal.', ur: 'فوری بکنگ کے لیے واٹس ایپ پر پیغام بھیجیں۔ پیشگی ادائیگی نہیں — جہاز پر ادائیگی کریں۔', hi: 'तुरंत बुकिंग के लिए WhatsApp पर संदेश भेजें। अग्रिम भुगतान नहीं — जहाज़ पर भुगतान करें।' },
  boatNames: {
    classic: { en: 'Classic Cruise', tr: 'Klasik Cruise', de: 'Klassische Kreuzfahrt', es: 'Crucero Cl\u00e1sico', ru: '\u041a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439', ar: '\u0631\u062d\u0644\u0629 \u0643\u0644\u0627\u0633\u064a\u043a\u064a\u0629', bg: 'Класически круиз', ro: 'Croazieră clasică', zh: '经典游船', fr: 'Croisière classique', it: 'Crociera classica', ja: 'クラシッククルーズ', ko: '클래식 크루즈', ms: 'Pelayaran Klasik', id: 'Pelayaran Klasik', ur: 'کلاسک کروز', hi: 'क्लासिक क्रूज़' },
    premium: { en: 'Premium Cruise', tr: 'Premium Cruise', de: 'Premium-Kreuzfahrt', es: 'Crucero Premium', ru: '\u041f\u0440\u0435\u043c\u0438\u0443\u043c', ar: '\u0631\u062d\u0644\u0629 \u0645\u0645\u064a\u0632\u0629', bg: 'Премиум круиз', ro: 'Croazieră premium', zh: '高级游船', fr: 'Croisière premium', it: 'Crociera premium', ja: 'プレミアムクルーズ', ko: '프리미엄 크루즈', ms: 'Pelayaran Premium', id: 'Pelayaran Premium', ur: 'پریمیم کروز', hi: 'प्रीमियम क्रूज़' },
    luxury: { en: 'Luxury Yacht', tr: 'L\u00fcks Yat', de: 'Luxusyacht', es: 'Yate de Lujo', ru: '\u041b\u044e\u043a\u0441 \u044f\u0445\u0442\u0430', ar: '\u064a\u062e\u062a \u0641\u0627\u062e\u0631', bg: 'Луксозна яхта', ro: 'Iaht de lux', zh: '豪华游艇', fr: 'Yacht de luxe', it: 'Yacht di lusso', ja: 'ラグジュアリーヨット', ko: '럭셔리 요트', ms: 'Kapal Layar Mewah', id: 'Kapal Pesiar Mewah', ur: 'لگژری یاٹ', hi: 'लग्ज़री यॉट' }
  },
  packageNames: {
    standard: { en: 'Standard', tr: 'Standart', de: 'Standard', es: 'Est\u00e1ndar', ru: '\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442', ar: '\u0639\u0627\u062f\u064a', bg: 'Стандарт', ro: 'Standard', zh: '标准', fr: 'Standard', it: 'Standard', ja: 'スタンダード', ko: '스탠다드', ms: 'Standard', id: 'Standard', ur: 'سٹینڈرڈ', hi: 'स्टैंडर्ड' },
    premium: { en: 'Premium', tr: 'Premium', de: 'Premium', es: 'Premium', ru: '\u041f\u0440\u0435\u043c\u0438\u0443\u043c', ar: '\u0645\u0645\u064a\u0632', bg: 'Премиум', ro: 'Premium', zh: '高级', fr: 'Premium', it: 'Premium', ja: 'プレミアム', ko: '프리미엄', ms: 'Premium', id: 'Premium', ur: 'پریمیم', hi: 'प्रीमियम' },
    vip: { en: 'VIP', tr: 'VIP', de: 'VIP', es: 'VIP', ru: 'VIP', ar: 'VIP', bg: 'VIP', ro: 'VIP', zh: 'VIP', fr: 'VIP', it: 'VIP', ja: 'VIP', ko: 'VIP', ms: 'VIP', id: 'VIP', ur: 'VIP', hi: 'VIP' }
  },
  mostPopular: { en: 'Most Popular', tr: 'En Pop\u00fcler', de: 'Am beliebtesten', es: 'M\u00e1s Popular', ru: '\u0421\u0430\u043c\u044b\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439', ar: '\u0627\u0644\u0623\u0643\u062b\u0631 \u0634\u0639\u0628\u064a\u0629', bg: 'Най-популярен', ro: 'Cel mai popular', zh: '最受欢迎', fr: 'Le plus populaire', it: 'Più popolare', ja: '一番人気', ko: '가장 인기', ms: 'Paling Popular', id: 'Paling Populer', ur: 'سب سے مقبول', hi: 'सबसे लोकप्रिय' },
  allCruises: { en: 'View All Cruises', tr: 'T\u00fcm Turlar\u0131 G\u00f6r', de: 'Alle Kreuzfahrten', es: 'Ver Todos', ru: '\u0412\u0441\u0435 \u043a\u0440\u0443\u0438\u0437\u044b', ar: '\u0639\u0631\u0636 \u0627\u0644\u0643\u0644', bg: 'Всички круизи', ro: 'Toate croazierele', zh: '查看所有游船', fr: 'Voir toutes les croisières', it: 'Tutte le crociere', ja: '全クルーズを見る', ko: '모든 크루즈 보기', ms: 'Lihat Semua Pelayaran', id: 'Lihat Semua Pelayaran', ur: 'تمام کروز دیکھیں', hi: 'सभी क्रूज़ देखें' },
  availableToday: { en: 'Available Today', tr: 'Bug\u00fcn M\u00fcsait', de: 'Heute verf\u00fcgbar', es: 'Disponible Hoy', ru: '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f', ar: '\u0645\u062a\u0627\u062d \u0627\u0644\u064a\u0648\u0645', bg: 'Налично днес', ro: 'Disponibil azi', zh: '今日可订', fr: 'Disponible aujourd\'hui', it: 'Disponibile oggi', ja: '本日予約可', ko: '오늘 이용 가능', ms: 'Tersedia Hari Ini', id: 'Tersedia Hari Ini', ur: 'آج دستیاب', hi: 'आज उपलब्ध' },
  lastSpots: { en: 'Last spots available!', tr: 'Son yerler!', de: 'Letzte Pl\u00e4tze!', es: '\u00a1\u00daltimos lugares!', ru: '\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430!', ar: '\u0622\u062e\u0631 \u0627\u0644\u0623\u0645\u0627\u0643\u0646!', bg: 'Последни места!', ro: 'Ultimele locuri!', zh: '最后几个名额！', fr: 'Dernières places !', it: 'Ultimi posti!', ja: '残りわずか！', ko: '마지막 자리!', ms: 'Tempat terakhir tersedia!', id: 'Tempat terakhir tersedia!', ur: 'آخری جگہیں دستیاب!', hi: 'आखिरी सीटें उपलब्ध!' },
  noPrepay: { en: 'No prepayment \u2014 Pay on the boat', tr: '\u00d6n \u00f6deme yok \u2014 Teknede \u00f6deyin', de: 'Keine Vorauszahlung \u2014 An Bord bezahlen', es: 'Sin prepago \u2014 Paga en el barco', ru: '\u0411\u0435\u0437 \u043f\u0440\u0435\u0434\u043e\u043f\u043b\u0430\u0442\u044b \u2014 \u043e\u043f\u043b\u0430\u0442\u0430 \u043d\u0430 \u0431\u043e\u0440\u0442\u0443', ar: '\u0628\u062f\u0648\u0646 \u062f\u0641\u0639 \u0645\u0633\u0628\u0642 \u2014 \u0627\u062f\u0641\u0639 \u0639\u0644\u0649 \u0627\u0644\u0642\u0627\u0631\u0628', bg: 'Без предплащане — платете на кораба', ro: 'Fără plată în avans — plătești pe barcă', zh: '无需预付——船上付款', fr: 'Sans prépaiement — payez à bord', it: 'Nessun pagamento anticipato — paga a bordo', ja: '前払い不要——乗船時にお支払い', ko: '사전 결제 불필요 — 선상에서 결제', ms: 'Tiada bayaran pendahuluan — Bayar di atas kapal', id: 'Tanpa pembayaran di muka — Bayar di atas kapal', ur: 'پیشگی ادائیگی نہیں — جہاز پر ادائیگی کریں', hi: 'अग्रिम भुगतान नहीं — जहाज़ पर भुगतान करें' },
  copyright: { en: '\u00a9 2026 Bosphorus Night. All rights reserved.', tr: '\u00a9 2026 Bosphorus Night. T\u00fcm haklar\u0131 sakl\u0131d\u0131r.', de: '\u00a9 2026 Bosphorus Night. Alle Rechte vorbehalten.', es: '\u00a9 2026 Bosphorus Night. Todos los derechos reservados.', ru: '\u00a9 2026 Bosphorus Night. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.', ar: '\u00a9 2026 Bosphorus Night. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.', bg: '\u00a9 2026 Bosphorus Night. Всички права запазени.', ro: '\u00a9 2026 Bosphorus Night. Toate drepturile rezervate.', zh: '\u00a9 2026 Bosphorus Night. 保留所有权利。', fr: '\u00a9 2026 Bosphorus Night. Tous droits réservés.', it: '\u00a9 2026 Bosphorus Night. Tutti i diritti riservati.', ja: '\u00a9 2026 Bosphorus Night. All rights reserved.', ko: '\u00a9 2026 Bosphorus Night. All rights reserved.', ms: '© 2026 Bosphorus Night. Hak cipta terpelihara.', id: '© 2026 Bosphorus Night. Hak cipta dilindungi.', ur: '© 2026 Bosphorus Night. جملہ حقوق محفوظ ہیں۔', hi: '© 2026 Bosphorus Night. सर्वाधिकार सुरक्षित।' },
  privacy: { en: 'Privacy Policy', tr: 'Gizlilik Politikas\u0131', de: 'Datenschutz', es: 'Privacidad', ru: '\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c', ar: '\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629', bg: 'Поверителност', ro: 'Confidențialitate', zh: '隐私政策', fr: 'Confidentialité', it: 'Privacy', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', ms: 'Dasar Privasi', id: 'Kebijakan Privasi', ur: 'رازداری کی پالسی', hi: 'गोपनीयता नीति' },
  terms: { en: 'Terms of Service', tr: 'Kullan\u0131m Ko\u015fullar\u0131', de: 'Nutzungsbedingungen', es: 'T\u00e9rminos', ru: '\u0423\u0441\u043b\u043e\u0432\u0438\u044f', ar: '\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629', bg: 'Условия за ползване', ro: 'Termeni și condiții', zh: '服务条款', fr: 'Conditions d\'utilisation', it: 'Termini di servizio', ja: '利用規約', ko: '이용약관', ms: 'Terma Perkhidmatan', id: 'Ketentuan Layanan', ur: 'سروس کی شرائط', hi: 'सेवा की शर्तें' }
};

// ========== HELPERS ==========
function getPagePath(tourKey, lang) {
  const tour = TOURS[tourKey];
  if (lang === 'en') return `/cruises/${tour.slug}.html`;
  return `/cruises/${lang}/${tour.slug}.html`;
}

function getRelPath(tourKey, lang) {
  const tour = TOURS[tourKey];
  if (lang === 'en') return `${tour.slug}.html`;
  return `${lang}/${tour.slug}.html`;
}

function waLink(tourName, pkg) {
  const text = encodeURIComponent(`Hi, I'd like to book the ${tourName} ${pkg || ''} package.`);
  return `https://wa.me/${WA_NUMBER}?text=${text}`;
}

function esc(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ========== HTML GENERATOR ==========
function generatePage(tourKey, lang) {
  const tour = TOURS[tourKey];
  const seo = SEO[tourKey][lang];
  const langCfg = LANGUAGES[lang];
  const isRTL = langCfg.dir === 'rtl';
  const isLastMinute = tourKey === 'last-minute';

  // Build hreflang links
  const hreflangs = Object.keys(LANGUAGES).map(l => {
    const url = `${SITE_URL}${getPagePath(tourKey, l)}`;
    return `  <link rel="alternate" hreflang="${l}" href="${url}">`;
  }).join('\n');

  const canonical = `${SITE_URL}${getPagePath(tourKey, 'en')}`;

  // Language switcher links
  const langSwitcher = Object.entries(LANGUAGES).map(([code, cfg]) => {
    const href = getPagePath(tourKey, code);
    const active = code === lang ? 'bg-gold text-navy-dark font-semibold' : 'text-gray-300 hover:text-gold';
    return `<a href="${href}" class="px-2 py-1 rounded text-xs ${active} transition-colors">${cfg.label}</a>`;
  }).join('\n              ');

  // Build boats & packages section
  let boatsSection = '';
  if (!isLastMinute) {
    const boatCards = tour.boats.map(boat => {
      const prices = tour.prices[boat];
      const boatName = UI.boatNames[boat][lang];
      const pkgRows = ['standard', 'premium', 'vip'].map(pkg => {
        const price = prices[pkg];
        const pkgName = UI.packageNames[pkg][lang];
        const isPremium = pkg === 'premium';
        const badge = isPremium ? `<span class="ml-2 text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded-full">${UI.mostPopular[lang]}</span>` : '';
        const ring = isPremium ? 'ring-1 ring-gold/30' : '';
        const waUrl = waLink(seo.tourName, pkgName);
        return `
                <div class="flex items-center justify-between p-3 rounded-lg bg-navy-dark/50 ${ring}">
                  <div>
                    <span class="text-sm font-medium text-white">${esc(pkgName)}</span>${badge}
                  </div>
                  <div class="flex items-center gap-3">
                    <span class="text-gold font-bold text-lg">&euro;${price}</span>
                    <a href="${esc(waUrl)}" target="_blank" rel="noopener"
                       class="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors inline-flex items-center gap-1">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.832-6.32-2.222l-.44-.362-3.262 1.094 1.094-3.262-.362-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                      ${esc(UI.bookWhatsApp[lang])}
                    </a>
                  </div>
                </div>`;
      }).join('');

      return `
            <div class="bg-navy-light/60 backdrop-blur rounded-2xl p-6 border border-white/5">
              <h3 class="text-xl font-display font-bold text-gold mb-4">${esc(boatName)}</h3>
              <div class="space-y-3">
                ${pkgRows}
              </div>
            </div>`;
    }).join('');

    boatsSection = `
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-display font-bold text-center mb-10">${esc(UI.boatsAndPackages[lang])}</h2>
          <div class="grid md:grid-cols-${tour.boats.length > 2 ? '3' : '2'} gap-6">
            ${boatCards}
          </div>
          <p class="text-center text-gray-400 text-sm mt-6">${esc(UI.noPrepay[lang])}</p>
        </div>
      </section>`;
  } else {
    // Last-minute: show all tours overview
    const tourCards = ['daytime', 'sunset', 'dinner'].map(tk => {
      const t = TOURS[tk];
      const s = SEO[tk][lang];
      const minPrice = Math.min(...t.boats.map(b => t.prices[b].standard));
      const link = getPagePath(tk, lang);
      return `
            <div class="bg-navy-light/60 backdrop-blur rounded-2xl overflow-hidden border border-white/5 group hover:border-gold/30 transition-colors">
              <div class="h-48 bg-cover bg-center" style="background-image: url('${t.heroImage}')">
                <div class="w-full h-full bg-black/40 flex items-end p-4">
                  <span class="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">${esc(UI.availableToday[lang])}</span>
                </div>
              </div>
              <div class="p-5">
                <h3 class="text-lg font-display font-bold text-white mb-1">${esc(s.tourName)}</h3>
                <p class="text-gray-400 text-sm mb-3">${t.time} &middot; ${t.duration}h &middot; ${t.pier}</p>
                <div class="flex items-center justify-between">
                  <span class="text-gold font-bold text-xl">${UI.from[lang]} &euro;${minPrice}</span>
                  <a href="${esc(link)}" class="bg-gold hover:bg-gold-light text-navy-dark font-semibold text-sm px-4 py-2 rounded-full transition-colors">${esc(UI.nav.cruises[lang])}</a>
                </div>
              </div>
            </div>`;
    }).join('');

    boatsSection = `
      <section class="py-16 px-4">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-8">
            <span class="inline-block bg-red-600/20 text-red-400 text-sm font-semibold px-4 py-1 rounded-full mb-3">${esc(UI.lastSpots[lang])}</span>
            <h2 class="text-3xl font-display font-bold">${esc(UI.boatsAndPackages[lang])}</h2>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            ${tourCards}
          </div>
        </div>
      </section>`;
  }

  // Highlights
  const highlightItems = seo.highlights.map(h => `
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span class="text-gray-300">${esc(h)}</span>
            </div>`).join('');

  // Gallery
  const galleryItems = tour.gallery.map(img => `
            <div class="rounded-xl overflow-hidden aspect-[4/3]">
              <img src="${img}" alt="${esc(seo.tourName)}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy">
            </div>`).join('');

  // FAQ
  const faqItems = seo.faq.map((item, i) => `
            <details class="group border border-white/10 rounded-xl overflow-hidden">
              <summary class="flex items-center justify-between p-5 cursor-pointer hover:bg-white/5 transition-colors">
                <span class="font-medium text-white pr-4">${esc(item.q)}</span>
                <svg class="w-5 h-5 text-gold flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </summary>
              <div class="px-5 pb-5 text-gray-400 leading-relaxed">${esc(item.a)}</div>
            </details>`).join('');

  // Hero info pills (departure, duration, pier) - only for non-last-minute
  let heroPills = '';
  if (!isLastMinute) {
    heroPills = `
            <div class="flex flex-wrap gap-3 justify-center mt-6">
              <span class="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                ${esc(UI.departure[lang])}: ${tour.time}
              </span>
              <span class="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                ${esc(UI.duration[lang])}: ${seo.duration}
              </span>
              <span class="bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <svg class="w-4 h-4 text-gold" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="11" r="3"/></svg>
                ${esc(tour.pier)}
              </span>
            </div>`;
  }

  // WhatsApp CTA link
  const mainWaLink = waLink(seo.tourName, '');

  return `<!DOCTYPE html>
<html lang="${lang}"${isRTL ? ' dir="rtl"' : ''} data-lang="${lang}">
<head>
  <meta charset="UTF-8">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a[href*="wa.me"]');
      if (link) {
        gtag('event', 'conversion', {
          'send_to': '${GA_ID}/nyO1CLmfrZgcEJ--qqpD',
          'value': 1.0, 'currency': 'TRY'
        });
      }
    });
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(seo.title)}</title>
  <meta name="description" content="${esc(seo.description)}">
  <link rel="canonical" href="${canonical}">
${hreflangs}
  <meta property="og:title" content="${esc(seo.title)}">
  <meta property="og:description" content="${esc(seo.description)}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${SITE_URL}${getPagePath(tourKey, lang)}">
  <meta property="og:image" content="${SITE_URL}${tour.heroImage}">
  <meta property="og:site_name" content="Bosphorus Night">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navy: { dark: '#0b1120', DEFAULT: '#101a30', light: '#152240' },
            gold: { DEFAULT: '#c9a84c', light: '#d4b86a', dark: '#b8953f' }
          },
          fontFamily: {
            display: ['Playfair Display', 'serif'],
            body: ['Inter', 'sans-serif']
          }
        }
      }
    }
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; }
    h1, h2, h3 { font-family: 'Playfair Display', serif; }
    details summary::-webkit-details-marker { display: none; }
    details summary { list-style: none; }
  </style>
</head>
<body class="bg-navy-dark text-white antialiased">

  <!-- ===== HEADER ===== -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-md border-b border-white/5">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/" class="text-xl font-display font-bold tracking-wide">
        <span class="text-gold">BOSPHORUS</span> <span class="text-white">NIGHT</span>
      </a>
      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="/" class="text-gray-300 hover:text-gold transition-colors">${esc(UI.nav.home[lang])}</a>
        <a href="/#cruises" class="text-gray-300 hover:text-gold transition-colors">${esc(UI.nav.cruises[lang])}</a>
        <a href="/#gallery" class="text-gray-300 hover:text-gold transition-colors">${esc(UI.nav.gallery[lang])}</a>
        <a href="/#faq" class="text-gray-300 hover:text-gold transition-colors">${esc(UI.nav.faq[lang])}</a>
        <a href="${esc(mainWaLink)}" target="_blank" rel="noopener"
           class="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-full transition-colors inline-flex items-center gap-2 text-sm">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.832-6.32-2.222l-.44-.362-3.262 1.094 1.094-3.262-.362-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          ${esc(UI.nav.book[lang])}
        </a>
      </nav>
      <!-- Mobile menu button -->
      <button onclick="document.getElementById('mobileMenu').classList.toggle('hidden')" class="md:hidden text-gray-300 p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
    <!-- Language switcher bar -->
    <div class="border-t border-white/5 bg-navy/80">
      <div class="max-w-6xl mx-auto px-4 py-1.5 flex items-center justify-center gap-1 flex-wrap">
        ${langSwitcher}
      </div>
    </div>
    <!-- Mobile menu -->
    <div id="mobileMenu" class="hidden md:hidden bg-navy-dark border-t border-white/5">
      <div class="px-4 py-4 space-y-3">
        <a href="/" class="block text-gray-300 hover:text-gold">${esc(UI.nav.home[lang])}</a>
        <a href="/#cruises" class="block text-gray-300 hover:text-gold">${esc(UI.nav.cruises[lang])}</a>
        <a href="/#gallery" class="block text-gray-300 hover:text-gold">${esc(UI.nav.gallery[lang])}</a>
        <a href="/#faq" class="block text-gray-300 hover:text-gold">${esc(UI.nav.faq[lang])}</a>
        <a href="${esc(mainWaLink)}" target="_blank" rel="noopener"
           class="block bg-green-600 text-white text-center font-semibold px-4 py-2.5 rounded-full">${esc(UI.nav.book[lang])}</a>
      </div>
    </div>
  </header>

  <!-- ===== HERO ===== -->
  <section class="relative min-h-[70vh] flex items-center justify-center pt-28 pb-16"
           style="background: linear-gradient(to bottom, rgba(11,17,32,0.5), rgba(11,17,32,0.95)), url('${tour.heroImage}') center/cover no-repeat;">
    <div class="max-w-3xl mx-auto text-center px-4">
      ${isLastMinute ? '<span class="inline-block bg-red-600/90 text-white text-sm font-bold px-5 py-1.5 rounded-full mb-4 animate-pulse">' + esc(UI.lastSpots[lang]) + '</span>' : ''}
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
        ${esc(seo.tourName)}
      </h1>
      <p class="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">${esc(seo.subtitle)}</p>
      ${heroPills}
      <div class="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <a href="${esc(mainWaLink)}" target="_blank" rel="noopener"
           class="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3.5 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-base shadow-lg shadow-green-600/30">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.832-6.32-2.222l-.44-.362-3.262 1.094 1.094-3.262-.362-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          ${esc(UI.bookWhatsApp[lang])}
        </a>
        <a href="https://t.me/bosphorusnight" target="_blank" rel="noopener"
           class="bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold px-8 py-3.5 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-base">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm5.814 7.572l-1.982 9.348c-.15.674-.54.838-1.092.522l-3.014-2.22-1.454 1.4c-.16.16-.296.296-.608.296l.216-3.07 5.58-5.04c.242-.216-.054-.336-.376-.12l-6.9 4.344-2.97-.926c-.646-.204-.66-.646.136-.956l11.592-4.468c.538-.196 1.006.13.832.956z"/></svg>
          ${esc(UI.bookTelegram[lang])}
        </a>
      </div>
    </div>
  </section>

  <!-- ===== HIGHLIGHTS ===== -->
  <section class="py-16 px-4 bg-navy/50">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-display font-bold text-center mb-10">${esc(UI.highlights[lang])}</h2>
      <div class="grid sm:grid-cols-2 gap-4">
        ${highlightItems}
      </div>
    </div>
  </section>

  <!-- ===== BOATS & PACKAGES ===== -->
  ${boatsSection}

  <!-- ===== GALLERY ===== -->
  <section class="py-16 px-4 bg-navy/50">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-display font-bold text-center mb-10">${esc(UI.photoGallery[lang])}</h2>
      <div class="grid grid-cols-2 md:grid-cols-${tour.gallery.length > 3 ? '4' : '3'} gap-3">
        ${galleryItems}
      </div>
    </div>
  </section>

  <!-- ===== FAQ ===== -->
  <section class="py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl font-display font-bold text-center mb-10">${esc(UI.faqTitle[lang])}</h2>
      <div class="space-y-3">
        ${faqItems}
      </div>
    </div>
  </section>

  <!-- ===== CTA ===== -->
  <section class="py-20 px-4 bg-gradient-to-b from-navy to-navy-dark">
    <div class="max-w-2xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">${esc(UI.readyToBook[lang])}</h2>
      <p class="text-gray-400 mb-8 text-lg">${esc(UI.ctaDesc[lang])}</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="${esc(mainWaLink)}" target="_blank" rel="noopener"
           class="bg-green-600 hover:bg-green-700 text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-lg shadow-lg shadow-green-600/30">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.832-6.32-2.222l-.44-.362-3.262 1.094 1.094-3.262-.362-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
          ${esc(UI.bookWhatsApp[lang])}
        </a>
        <a href="https://t.me/bosphorusnight" target="_blank" rel="noopener"
           class="bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold px-10 py-4 rounded-full transition-colors inline-flex items-center justify-center gap-2 text-lg">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm5.814 7.572l-1.982 9.348c-.15.674-.54.838-1.092.522l-3.014-2.22-1.454 1.4c-.16.16-.296.296-.608.296l.216-3.07 5.58-5.04c.242-.216-.054-.336-.376-.12l-6.9 4.344-2.97-.926c-.646-.204-.66-.646.136-.956l11.592-4.468c.538-.196 1.006.13.832.956z"/></svg>
          ${esc(UI.bookTelegram[lang])}
        </a>
      </div>
    </div>
  </section>

  <!-- ===== FOOTER ===== -->
  <footer class="border-t border-white/5 bg-navy-dark">
    <div class="max-w-6xl mx-auto px-4 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="/" class="text-lg font-display font-bold">
            <span class="text-gold">BOSPHORUS</span> <span class="text-white">NIGHT</span>
          </a>
          <p class="text-gray-500 text-sm mt-1">Istanbul, Turkey</p>
        </div>
        <div class="flex items-center gap-6 text-sm text-gray-400">
          <a href="/privacy.html" class="hover:text-gold transition-colors">${esc(UI.privacy[lang])}</a>
          <a href="/terms.html" class="hover:text-gold transition-colors">${esc(UI.terms[lang])}</a>
          <a href="mailto:info@bosphorusnight.com" class="hover:text-gold transition-colors">info@bosphorusnight.com</a>
        </div>
      </div>
      <div class="text-center text-gray-600 text-xs mt-8">${esc(UI.copyright[lang])}</div>
    </div>
  </footer>

  <!-- ===== FLOATING WHATSAPP ===== -->
  <a href="${esc(mainWaLink)}" target="_blank" rel="noopener"
     class="fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full shadow-lg shadow-green-600/40 flex items-center justify-center transition-transform hover:scale-110"
     aria-label="WhatsApp">
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.832-6.32-2.222l-.44-.362-3.262 1.094 1.094-3.262-.362-.44A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
  </a>

</body>
</html>`;
}

// ========== SITEMAP GENERATOR ==========
function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  let urls = '';
  for (const tourKey of Object.keys(TOURS)) {
    for (const lang of Object.keys(LANGUAGES)) {
      const loc = `${SITE_URL}${getPagePath(tourKey, lang)}`;
      const priority = tourKey === 'dinner' ? '0.9' : tourKey === 'last-minute' ? '0.8' : '0.7';
      urls += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}
</urlset>`;
}

// ========== BUILD ==========
function build() {
  console.log('Building static SEO pages...\n');

  // Ensure output directories
  const langDirs = Object.keys(LANGUAGES).filter(l => l !== 'en');
  for (const dir of langDirs) {
    const dirPath = path.join(OUTPUT_DIR, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let count = 0;

  // Generate pages
  for (const tourKey of Object.keys(TOURS)) {
    for (const lang of Object.keys(LANGUAGES)) {
      const html = generatePage(tourKey, lang);
      const relPath = getRelPath(tourKey, lang);
      const filePath = path.join(OUTPUT_DIR, relPath);

      // Ensure directory exists
      const fileDir = path.dirname(filePath);
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
      }

      fs.writeFileSync(filePath, html, 'utf8');
      console.log(`  [OK] cruises/${relPath}`);
      count++;
    }
  }

  // Generate sitemap
  const sitemap = generateSitemap();
  const sitemapPath = path.join(OUTPUT_DIR, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap, 'utf8');
  console.log(`  [OK] cruises/sitemap.xml`);

  console.log(`\nDone! Generated ${count} pages + sitemap.xml`);
}

build();
