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
    description: 'Istanbul Bosphorus cruise prices: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Kids 0-3 free, 4-8 half price. Add-ons transparent. Free cancellation, pay on boat.'
  },

  hero: {
    h1: 'Istanbul Cruise Price',
    subtitle: 'Transparent pricing, no hidden fees. Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person — and you pay on the boat, not now.',
    badge: 'Transparent · 40% OFF Direct · Kids 0-3 Free'
  },

  intro: [
    '**Istanbul cruise prices** vary wildly — from €15 budget ferries that skip food, to €150+ resort-style yachts. Our pricing sits in the middle and gives the best value: €{p.dinnerStd} Standard for the full 3-hour dinner cruise with show, or €{p.dinnerVip} VIP for stage-front premium experience. No hidden fees, no surprise surcharges.',

    'A detailed **Istanbul cruise price** breakdown, because transparency matters:\n\n- **Standard Dinner Cruise**: €{p.dinnerStd}/person (was €{p.dinnerStdOriginal}, 40% off). Includes 3hr cruise, 10 mezes, main course, dessert, unlimited soft drinks, live show.\n- **VIP Dinner Cruise**: €{p.dinnerVip}/person (was €{p.dinnerVipOriginal}). Adds stage-front seats, 15+ mezes, beef tenderloin/rib-eye options, priority service.\n- **Kids 0-3**: Free. Kids 4-8: 50% off. Kids 9+: full price.\n\nAdd-ons (optional):\n- 2 glasses of alcohol: +€{p.alcohol2}/person\n- Unlimited local alcohol: +€{p.unlimited}/person\n- Hotel transfer round-trip: +€{p.transfer}/person\n- Romantic table setup: +€{p.romantic}/table',

    'And importantly: **pay on the boat**. You don\'t commit a cent until you\'re on the boat. Free cancellation up to 2 hours before departure. No commitment, no risk — the most consumer-friendly **Istanbul cruise pricing** you\'ll find.'
  ],

  highlights: [
    {
      icon: 'standard',
      title: 'Standard: €{p.dinnerStd} (was €{p.dinnerStdOriginal})',
      desc: '40% off regular rate. 3-hour cruise, full Turkish dinner, live show, unlimited soft drinks. Most popular package — covers everything you need for a great evening.'
    },
    {
      icon: 'vip',
      title: 'VIP: €{p.dinnerVip} (was €{p.dinnerVipOriginal})',
      desc: '40% off regular rate. Adds stage-front seats, 15+ mezes, premium main course (beef tenderloin, rib-eye), priority waiter service. For special occasions or premium travelers.'
    },
    {
      icon: 'kids',
      title: 'Kids pricing: 0-3 free, 4-8 half price',
      desc: '0-3 completely free (no charge). 4-8 at 50% off adult price. 9+ full adult price. Transparent, no family-pricing tricks. Transfer also free for 0-3.'
    },
    {
      icon: 'addons',
      title: 'Add-ons — only if you want',
      desc: 'Alcohol: €{p.alcohol2} or €{p.unlimited}/person. Transfer: €{p.transfer}/person. Romantic table: €{p.romantic}/table. All optional, not bundled. Pick only what you need.'
    }
  ],

  faq: [
    {
      q: 'How much is the Istanbul cruise?',
      a: 'Standard Dinner Cruise: €{p.dinnerStd}/person (regular €{p.dinnerStdOriginal}, 40% off). VIP: €{p.dinnerVip}/person (regular €{p.dinnerVipOriginal}, 40% off). Kids 0-3 free, 4-8 half price. Pay on the boat — no prepayment. Free cancellation up to 2 hours before departure.'
    },
    {
      q: 'Are there hidden fees in the Istanbul cruise price?',
      a: 'No. Price includes: 3-hour cruise, full dinner (meze, appetizer, main, dessert), unlimited soft drinks, live show, taxes. Optional add-ons (alcohol, transfer, romantic table) are priced separately and transparently — you only pay for what you add. No "service charge", no "port fee", no surprise surcharges.'
    },
    {
      q: 'Why is the Istanbul cruise price 40% off — is it a trick?',
      a: 'No trick. Regular price €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} is what third-party booking sites (Viator, GetYourGuide, Klook) charge — with their commission. Book direct and you get €{p.dinnerStd}/€{p.dinnerVip}. That\'s the 40% difference. No time-limit or surge pricing gimmicks.'
    },
    {
      q: 'How does Istanbul cruise price compare to other options?',
      a: 'Public ferries: €5-10, 1 hour, no food, no entertainment, sightseeing only. Budget dinner cruises: €20-30, crowded, average food, short show. Our Standard (€{p.dinnerStd}): 3 hours, full dinner, full show, dedicated table, TÜRSAB-licensed. VIP (€{p.dinnerVip}): stage-front, premium menu. Resort yachts: €100-150+, excessive for solo travelers/couples.'
    },
    {
      q: 'Do I need to pay the Istanbul cruise price upfront?',
      a: 'No — **pay on the boat**. You reserve now (1-minute wizard), we confirm via WhatsApp, you show up at 20:00 and pay on the boat (cash or card). Free cancellation up to 2 hours before. Zero financial commitment until you\'re satisfied.'
    },
    {
      q: 'Any group discount on Istanbul cruise price?',
      a: 'For groups of 10+, we can offer a 5-10% discount — WhatsApp us with your group size. For 25+ consider booking a private cruise (whole boat for your group, custom menu). For 2-9 people, standard prices apply — already 40% off regular rate.'
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
