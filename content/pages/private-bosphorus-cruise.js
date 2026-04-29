/**
 * Landing page content: private-bosphorus-cruise
 * Target keyword: "private bosphorus cruise" / "charter yacht istanbul"
 * Search intent: groups/families/businesses wanting exclusive use of a boat
 */
module.exports = {
  slug: 'private-bosphorus-cruise',
  keyword: 'Private Bosphorus cruise',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/hall-wide.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/steak-wine.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/waiter-service.jpg'
    ]
  },

  meta: {
    title: 'Private Bosphorus Cruise — Charter a Boat in Istanbul (25+ guests)',
    description: 'Private Bosphorus cruise charter for groups, weddings, corporate events. Exclusive boat, custom menu, flexible duration. Free cancellation. WhatsApp for a custom quote.'
  },

  hero: {
    h1: 'Private Bosphorus Cruise',
    subtitle: 'Charter the entire boat for your group — family celebrations, corporate dinners, birthdays, engagements, weddings. Exclusive use, custom menu, flexible timing.',
    badge: 'Exclusive Charter · 25+ Guests · Custom Menu'
  },

  intro: [
    'A **private Bosphorus cruise** means the entire boat is yours — no other guests, no shared tables, no shared dance floor. Perfect for family reunions, corporate dinners, birthday parties, bachelorette nights, or wedding receptions. The boat, crew, menu, entertainment, and timing all adapt to your group.',

    'Our **private Bosphorus cruise charter** supports groups from **25 to 80 guests**. Smaller groups can still request a private experience — we\'ll quote a minimum fee that covers the boat\'s operating cost. Larger groups (wedding-size) get bespoke pricing and often include custom decoration, live band, cake service, and extended duration (4-5 hours vs standard 3).',

    'Whether you\'re organizing a corporate event for clients, a 50th birthday party, or a wedding reception under Istanbul\'s most iconic bridges, this is **the private cruise Istanbul event planners trust**. 4.8★ rating, TÜRSAB-licensed, full English-speaking crew, and flexible on everything — route, menu, music, timing.'
  ],

  highlights: [
    {
      icon: 'exclusive',
      title: 'Entire boat, just for you',
      desc: 'No other guests. Your group owns every deck, every table, every table. Set your own music, dress code, program. Privacy matters — we respect it.'
    },
    {
      icon: 'custom',
      title: 'Custom menu & drinks package',
      desc: 'Work with our chef to customize the menu: specific mezes, main course choices, special dishes for your culture or dietary needs. Alcohol packages, champagne toasts, custom cocktail bars all arrangeable.'
    },
    {
      icon: 'timing',
      title: 'Flexible duration & departure',
      desc: 'Standard 3 hours can extend to 4-5 hours. Choose 12:00 daytime, 17:30 sunset, or 21:00 night departure. Want a weekday instead of weekend? Just ask — we\'ll work with your schedule.'
    },
    {
      icon: 'event',
      title: 'Custom decor, band, program',
      desc: 'Add custom decorations (balloons, banners, floral setup), a live band instead of DJ, wedding cake service, photographer coordination, speeches — whatever your event needs. We\'re event planners, not just boat operators.'
    }
  ],

  faq: [
    {
      q: 'How much does a private Bosphorus cruise cost?',
      a: 'For groups of 25+, it\'s typically €{p.dinnerStd}-€{p.dinnerVip}/person + a boat charter fee that depends on group size, date, and duration. WhatsApp us with your group size, date, and requirements — we\'ll quote within 1 hour. Most events land in the €2,000-€6,000 total range.'
    },
    {
      q: 'What\'s the minimum group size for a private Bosphorus cruise?',
      a: 'Technically 25 guests makes a private cruise economically viable. Smaller groups (10-24) can still charter privately but pay a minimum fee equivalent to ~25 people. For really small groups (2-10), consider the regular Standard or VIP cruise — your table is already private, just the boat is shared.'
    },
    {
      q: 'Can I host a wedding on the Bosphorus cruise?',
      a: 'Yes — we host 10-15 wedding receptions per year. Capacity up to 80 seated dinner or 100 cocktail-style. We coordinate with your photographer, wedding planner, band, or caterer. Custom cake service, first-dance floor, champagne toast arrangeable. WhatsApp us for a wedding quote.'
    },
    {
      q: 'What about corporate events and team dinners?',
      a: 'Corporate private cruises are our most common booking. Company dinner, client hosting, product launch, team celebration — all work. We can provide invoice with VAT breakdown, arrange hotel transfers for your team, and coordinate branded materials (table centerpieces, signage) on request.'
    },
    {
      q: 'Can I bring a live band or DJ instead of your entertainment?',
      a: 'Yes — you can bring your own live band, DJ, photographer. Or keep our standard (whirling dervish, folk dancers, belly dance, DJ) and add yours on top. The boat has a PA system and dance floor. Let us know in advance so we can coordinate sound checks.'
    },
    {
      q: 'How do I request a private Bosphorus cruise quote?',
      a: 'Easiest: WhatsApp us at +90 532 244 29 22 with (1) your group size, (2) preferred date, (3) occasion (wedding, corporate, birthday), (4) any special requirements. We reply within 1 hour during business times, within 12 hours overnight. We can also arrange a video call to discuss details.'
    }
  ],

  cta: {
    primary: 'WhatsApp for Private Quote',
    secondary: 'Custom menu, group size 25-80, flexible duration · Reply in under 1 hour',
    tertiary: 'See Standard Cruise Option (€{p.dinnerStd})'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
