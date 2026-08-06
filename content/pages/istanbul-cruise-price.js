/**
 * Landing page content: istanbul-cruise-price
 * Target keyword: "istanbul cruise price" / "bosphorus cruise cost"
 * Search intent: price-sensitive travelers comparing before booking
 */
module.exports = {
  slug: 'istanbul-cruise-price',
  keyword: 'Istanbul cruise price',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/steak-wine.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Istanbul Cruise Price from €{p.dinnerStd} — Transparent Rates, No Hidden Fees',
    description: 'Istanbul Bosphorus cruise prices: dinner cruise €{p.dinnerStd}/person. Kids 0-3 free, 4-8 half. Transparent add-ons. Pay on boat.'
  },

  hero: {
    h1: 'Istanbul Cruise Price',
    subtitle: 'Transparent pricing, no hidden fees. One package, €{p.dinnerStd}/person — and you pay on the boat, not now.',
    badge: 'Transparent · 40% OFF Direct · Kids 0-3 Free'
  },

  intro: [
    '**Istanbul cruise prices** vary wildly — from €15 budget ferries that skip food, to €150+ resort-style yachts. Our pricing sits in the middle and gives the best value: one package at €{p.dinnerStd}/person for the full 3-hour dinner cruise with show. No hidden fees, no surprise surcharges.',

    'A detailed **Istanbul cruise price** breakdown, because transparency matters:\n\n- **Dinner Cruise**: €{p.dinnerStd}/person (was €{p.dinnerStdOriginal}, 40% off). Includes 3hr cruise, 10 mezes, main course, dessert, unlimited soft drinks, live show.\n- **Kids 0-3**: Free. Kids 4-8: 50% off. Kids 9+: full price.\n\nAdd-ons (optional):\n- 2 glasses of alcohol: +€{p.alcohol2}/person\n- Hotel transfer round-trip: +€{p.transfer}/person\n- Romantic table setup: +€{p.romantic}/table',

    'And importantly: **pay on the boat**. You don\'t commit a cent until you\'re on the boat. Free cancellation up to 2 hours before departure. No commitment, no risk — the most consumer-friendly **Istanbul cruise pricing** you\'ll find.'
  ],

  highlights: [
    {
      icon: 'standard',
      title: 'Dinner Cruise: €{p.dinnerStd} (was €{p.dinnerStdOriginal})',
      desc: '40% off regular rate. 3-hour cruise, full Turkish dinner, live show, unlimited soft drinks. One package — covers everything you need for a great evening.'
    },
    {
      icon: 'pay',
      title: 'Pay on the boat — €0 upfront',
      desc: 'Reserve now, pay when you board (cash or card). Free cancellation up to 2 hours before departure. Zero financial risk in booking early.'
    },
    {
      icon: 'kids',
      title: 'Kids pricing: 0-3 free, 4-8 half price',
      desc: '0-3 completely free (no charge). 4-8 at 50% off adult price. 9+ full adult price. Transparent, no family-pricing tricks. Transfer also free for 0-3.'
    },
    {
      icon: 'addons',
      title: 'Add-ons — only if you want',
      desc: 'Alcohol (2 glasses): +€{p.alcohol2}/person. Transfer: €{p.transfer}/person. Romantic table: €{p.romantic}/table. All optional, not bundled. Pick only what you need.'
    }
  ],

  faq: [
    {
      q: 'How much is the Istanbul cruise?',
      a: 'Dinner Cruise: €{p.dinnerStd}/person (regular €{p.dinnerStdOriginal}, 40% off). Kids 0-3 free, 4-8 half price. Pay on the boat — no prepayment. Free cancellation up to 2 hours before departure.'
    },
    {
      q: 'Are there hidden fees in the Istanbul cruise price?',
      a: 'No. Price includes: 3-hour cruise, full dinner (meze, appetizer, main, dessert), unlimited soft drinks, live show, taxes. Optional add-ons (alcohol, transfer, romantic table) are priced separately and transparently — you only pay for what you add. No "service charge", no "port fee", no surprise surcharges.'
    },
    {
      q: 'Why is the Istanbul cruise price 40% off — is it a trick?',
      a: 'No trick. Regular price €{p.dinnerStdOriginal} is what third-party booking sites (Viator, GetYourGuide, Klook) charge — with their commission. Book direct and you get €{p.dinnerStd}. That\'s the 40% difference. No time-limit or surge pricing gimmicks.'
    },
    {
      q: 'How does Istanbul cruise price compare to other options?',
      a: 'Public ferries: €5-10, 1 hour, no food, no entertainment, sightseeing only. Budget dinner cruises: €20-30, crowded, average food, short show. Our dinner cruise (€{p.dinnerStd}): 3 hours, full dinner, full show, dedicated table, TÜRSAB-licensed. Resort yachts: €100-150+, excessive for solo travelers/couples.'
    },
    {
      q: 'Do I need to pay the Istanbul cruise price upfront?',
      a: 'No — **pay on the boat**. You reserve now (1-minute wizard), we confirm via WhatsApp, you show up at 20:00 and pay on the boat (cash or card). Free cancellation up to 2 hours before. Zero financial commitment until you\'re satisfied.'
    },
    {
      q: 'Any group discount on Istanbul cruise price?',
      a: 'For groups of 10+, we can offer a 5-10% discount — WhatsApp us with your group size. For 25+ consider booking a private cruise (whole boat for your group, custom menu). For 2-9 people, standard prices apply — already 40% off regular rate.'
    },
    {
      q: 'What\'s the cheapest Istanbul Bosphorus cruise option?',
      a: 'Bosphorus Night offers a full dinner cruise at €{p.dinnerStd}/person — TÜRSAB-licensed (A-17672), with full dinner, live music, and traditional shows over 3 hours. Daytime sightseeing-only cruises are a separate category without dinner. Original price was €{p.dinnerStdOriginal}, now €{p.dinnerStd}.'
    },
    {
      q: 'Why is the Istanbul cruise so affordable?',
      a: 'Istanbul\'s lower operating costs (fuel, crew, food) keep dinner cruises at accessible price points. Bosphorus Night offers a 3-hour cruise with full dinner and entertainment from €{p.dinnerStd}/person — TÜRSAB-licensed (A-17672), with quality reflected by 4.8★ from 11,317 reviews.'
    }
  ],

  cta: {
    primary: 'Book · Pay on Boat',
    secondary: 'From €{p.dinnerStd}/person · Kids 0-3 free · Free cancellation 2hrs before',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
