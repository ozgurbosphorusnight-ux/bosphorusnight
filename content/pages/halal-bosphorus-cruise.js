/**
 * Landing page content: halal-bosphorus-cruise
 * Target keyword: "halal bosphorus cruise" / "muslim-friendly istanbul cruise"
 * Search intent: Muslim travelers seeking halal-certified, family-appropriate evening tour
 */
module.exports = {
  slug: 'halal-bosphorus-cruise',
  keyword: 'Halal Bosphorus cruise',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/hall-wide.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/belly-dance.jpg',
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/meze.jpg'
    ]
  },

  meta: {
    title: 'Halal Bosphorus Dinner Cruise from €{p.dinnerStd} — Live Show + Night Tour',
    description: '3-hour Bosphorus dinner cruise: live folklore show, illuminated bridges, panoramic Bosphorus night views. Halal menu available on request. Free cancellation, pay on boat.'
  },

  hero: {
    h1: 'Halal Bosphorus Cruise in Istanbul',
    subtitle: '100% halal-certified menu, alcohol always optional, family-friendly entertainment, and a respectful atmosphere for Muslim travelers — the Bosphorus evening, done right.',
    badge: '100% Halal · Family-Friendly · Muslim-Owned'
  },

  intro: [
    'The **halal Bosphorus cruise** is Istanbul\'s most respected dinner tour for Muslim travelers. Every piece of meat served on our boat — salmon, sea bream, chicken, lamb köfte, beef tenderloin, rib-eye — is **halal-certified** from approved suppliers. We serve the same menu to every guest; there\'s no separate "halal section" because the entire boat is halal by default.',

    'Alcohol is an **optional add-on** — it\'s never pushed on guests, and seating naturally separates those who prefer a dry table. The unlimited alcohol package (+€{p.unlimited}/person) is there for guests who want it, but the included unlimited soft drinks (water, cola, fruit juice) are enough for most Muslim families. Our crew is trained to respect your preferences without making assumptions.',

    'The **Bosphorus cruise halal-friendly** experience matters for travelers from Saudi Arabia, UAE, Kuwait, Qatar, Iran, Malaysia, Indonesia, Pakistan, and Morocco who want Istanbul\'s most iconic evening without compromise. TÜRSAB-licensed, 4.8★ rating, and pay-on-boat — you commit to nothing until you\'re satisfied the experience meets your standards.'
  ],

  highlights: [
    {
      icon: 'halal',
      title: '100% halal-certified menu',
      desc: 'All meat (salmon, sea bream, chicken, köfte, beef, rib-eye) is halal-certified from approved suppliers. Kitchen follows halal preparation. No pork, no non-halal additives. Vegetarian options always available.'
    },
    {
      icon: 'respect',
      title: 'Alcohol optional, never pushed',
      desc: 'Alcohol packages are add-ons — never included by default. Soft drinks (water, cola, juice) are unlimited and free. Your table stays dry unless you explicitly request alcohol. Crew respects your choice silently.'
    },
    {
      icon: 'family',
      title: 'Family-friendly entertainment',
      desc: 'Whirling Dervish ceremony, traditional Turkish folk dances, live Turkish music. No nightclub-style performances, no inappropriate content. Safe for children, respectful for families. Belly dance is traditional art form, modestly presented.'
    },
    {
      icon: 'prayer',
      title: 'Prayer time respected',
      desc: 'If Maghrib or Isha falls during boarding (20:00-21:00), our staff can direct you to the quiet prayer space at Kabataş Pier before we depart. Just mention when booking.'
    }
  ],

  faq: [
    {
      q: 'Is the Bosphorus cruise 100% halal?',
      a: 'Yes — every meat item on the menu (fish, chicken, köfte, beef tenderloin, rib-eye, lamb) is halal-certified from approved suppliers. The kitchen follows halal preparation standards. No pork is served anywhere on the boat. This is not a "halal option" — the entire menu is halal.'
    },
    {
      q: 'Do other guests drink alcohol on this cruise?',
      a: 'Some guests add the optional alcohol package (+€{p.unlimited}/person). Tables are naturally separated — you can request a no-alcohol section. The crew does not bring alcohol unless specifically ordered by a guest. Soft drinks (unlimited) are included for everyone.'
    },
    {
      q: 'Is this cruise suitable for Muslim families with children?',
      a: 'Yes — this is one of the most family-respectful cruises in Istanbul. Entertainment is modest (folk dances, whirling dervish, Turkish music), children under 3 sail free, 4-8 get 50% off. No nightclub atmosphere. Families from the Gulf region, Indonesia, Malaysia, Pakistan, and Morocco book this cruise regularly.'
    },
    {
      q: 'Can I pray on the boat?',
      a: 'There is no dedicated prayer room on the boat, but we recommend praying before boarding at 20:00 (Maghrib often falls in this window). Kabataş Pier has prayer facilities. If you need to pray during the 21:00-00:00 cruise (for Isha), speak with the crew — we can arrange a quiet corner on the deck.'
    },
    {
      q: 'What are the prices for a Muslim family of 4 (2 adults, 2 kids)?',
      a: 'Standard cruise: 2 × €{p.dinnerStd} + 2 × €12 (kids half price if ages 4-8) = €72. If children are under 3, they\'re free: 2 × €{p.dinnerStd} = €48. Add hotel transfer for €10/adult. Total: €48-92 for a family of 4, no prepayment, pay on boat.'
    },
    {
      q: 'Does the Bosphorus cruise halal apply to hotel transfer too?',
      a: 'The hotel transfer is just a car ride — no food or drink involved, so no halal concern. Our drivers are professional, respectful, and punctual. Transfer areas cover Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, and 8 other central zones where Muslim travelers typically stay.'
    }
  ],

  cta: {
    primary: 'Book Halal Cruise · Pay on Boat',
    secondary: 'Free cancellation 2hrs before · No prepayment · Halal-certified',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
