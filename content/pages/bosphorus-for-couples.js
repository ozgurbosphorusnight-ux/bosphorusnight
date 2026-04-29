/**
 * Landing page content: bosphorus-for-couples
 * Target keyword: "bosphorus for couples" / "couples cruise istanbul"
 * Search intent: couples (not necessarily romantic occasion) looking for a date-night experience
 */
module.exports = {
  slug: 'bosphorus-for-couples',
  keyword: 'Bosphorus cruise for couples',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/dining-romantic.jpg',
    og: '/assets/tours/dinner/table-candle.jpg',
    gallery: [
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/table-candle.jpg',
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/violin.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/folk-dance.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Cruise for Couples from €{p.dinnerStd} — Date Night Istanbul',
    description: 'Bosphorus dinner cruise for couples. Private table, illuminated bridges, romantic setup option. From €{p.dinnerStd}/person. Free cancellation, pay on boat. 11,317 reviews.'
  },

  hero: {
    h1: 'Bosphorus Cruise for Couples',
    subtitle: 'A date night on the Bosphorus — private table, live music, illuminated bridges overhead. Whether it\'s your first date in Istanbul or your tenth anniversary, this evening works.',
    badge: 'Private Table · Live Music · Pay on Boat'
  },

  intro: [
    'The **Bosphorus cruise for couples** is Istanbul\'s go-to date night. Not every couple is celebrating an anniversary — sometimes you\'re just in the most romantic city on Earth and want a great evening together. This cruise delivers: a private table for two, a slow multi-course Turkish dinner, live violin and acoustic music during dinner, and the illuminated Bosphorus Bridge passing slowly overhead.',

    'The atmosphere is **warm but not over-the-top romantic** — no forced proposal music, no uncomfortable "just married" coordinated cheers. You eat, you drink, you talk, you watch Istanbul glow by. If you want to add a romantic table setup (candles, roses, +€{p.romantic}), great — if not, the dinner alone is already special.',

    'Whether you\'re in Istanbul for 3 days with your partner, celebrating a modest milestone, or planning a future proposal scouting trip, the **Bosphorus cruise for couples** gives you a 3-hour evening to be together in one of the world\'s most photographed cities. 4.8★ rated, pay-on-boat, free cancellation.'
  ],

  highlights: [
    {
      icon: 'couple',
      title: 'Private table for two',
      desc: 'Dedicated 2-person table, not shared. Window-adjacent seating prioritized for couples. Photos of the Bosphorus at sunset and night right outside your window.'
    },
    {
      icon: 'food',
      title: 'Slow-paced multi-course dinner',
      desc: '10 varieties of Turkish meze, warm appetizer, main course (salmon, sea bream, chicken, köfte, or vegetarian), ice-cream cake dessert. Served in slow succession over 3 hours — you\'re not rushed.'
    },
    {
      icon: 'music',
      title: 'Live violin & soft music',
      desc: 'Live violin and acoustic Turkish music during dinner creates an intimate, conversation-friendly atmosphere. Later, DJ takes over for couples who want to dance.'
    },
    {
      icon: 'optional',
      title: 'Add-ons for special nights',
      desc: 'Romantic table setup (candles, roses): +€{p.romantic}. Unlimited local alcohol (wine, rakı): +€{p.unlimited}/person. Hotel transfer (round-trip): +€{p.transfer}/person. Pick what fits your evening.'
    }
  ],

  faq: [
    {
      q: 'Is this Bosphorus cruise suitable for a regular date night, not a special occasion?',
      a: 'Yes — most of our couples are just having a great date night, not celebrating anything specific. The atmosphere is warm and pleasant without being over-the-top. You can add the romantic table setup (+€{p.romantic}) if you want extra, or just enjoy the standard evening.'
    },
    {
      q: 'How much does the Bosphorus cruise cost for 2 people?',
      a: 'Standard for 2: 2 × €{p.dinnerStd} = €48. VIP for 2: 2 × €{p.dinnerVip} = €110. Add hotel transfer for both: +€{p.transfer}×2 = €20. Add unlimited alcohol for both: +€{p.unlimited}×2 = €60. No prepayment — pay on boat.'
    },
    {
      q: 'Can couples bring their own wine or champagne?',
      a: 'We don\'t allow outside alcohol onboard (operating license reason). But we have unlimited local wine (+€{p.unlimited}/person) and can arrange premium imported wines or champagne for a fee — ask when booking. Prosecco, Chianti, and Cabernet are popular premium requests.'
    },
    {
      q: 'Is it okay if we don\'t drink alcohol — are we odd out?',
      a: 'Not at all — many couples skip alcohol entirely, either for halal reasons or just preference. Unlimited soft drinks (water, juice, cola) are included. No one looks twice if your table is dry. Many Muslim couples from Saudi Arabia, Iran, and Indonesia book this cruise.'
    },
    {
      q: 'What time is best for a couples Bosphorus cruise — sunset or night?',
      a: 'Night (21:00 departure) is the most iconic — illuminated bridges, reflections on water, lit-up palaces. Sunset (17:30 departure) is earlier and golden-hour beautiful but the dinner cruise specifically is 21:00. If you want both, most couples book the sunset daytime and dinner night cruises on different days.'
    },
    {
      q: 'Is there a dance floor — can we dance?',
      a: 'Yes — after the dinner service (~22:30), the DJ starts and the open deck becomes a dance area. Many couples dance slow songs under the string lights with the Bosphorus Bridge in the background. Some of the best photos you\'ll take in Istanbul.'
    }
  ],

  cta: {
    primary: 'Book Date Night · Pay on Boat',
    secondary: 'Add romantic setup (+€{p.romantic}) · Free cancellation 2hrs before',
    tertiary: 'See Romantic Bosphorus Cruise'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
