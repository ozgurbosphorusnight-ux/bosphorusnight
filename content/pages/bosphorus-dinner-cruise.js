/**
 * Landing page content: bosphorus-dinner-cruise
 * Target keyword: "bosphorus dinner cruise"
 * Search intent: travelers looking for a premium evening cruise with dinner
 * English is the master; translations live in content/translations/{lang}/bosphorus-dinner-cruise.js
 */
module.exports = {
  slug: 'bosphorus-dinner-cruise',
  keyword: 'bosphorus dinner cruise',
  tourType: 'dinner', // links to packages.DINNER_STD / DINNER_VIP in Supabase

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/belly-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/table-candle.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Dinner Cruise from €{p.dinnerStd} — Istanbul Night Tour + Show',
    description: '3-hour Bosphorus dinner cruise with multi-course Turkish menu and live folklore show. Departs 21:00 from Kabataş. Free cancellation, pay on boat. 11,317 traveler reviews.'
  },

  hero: {
    h1: 'Bosphorus Dinner Cruise in Istanbul',
    subtitle: 'Three hours of live entertainment, a multi-course Turkish feast, and the most celebrated night views of the Bosphorus.',
    badge: '4.8★ · 11,317 reviews'
  },

  intro: [
    'The **Bosphorus dinner cruise** is Istanbul\'s most iconic evening experience. Boarding at Kabataş Pier at 20:00, our vessel glides beneath the illuminated spans of the Bosphorus and Fatih Sultan Mehmet bridges while you enjoy a multi-course Turkish feast, live folklore performances, belly dancing, and a DJ set that keeps the deck alive until 23:00.',

    'Unlike the many generic tour boats crowding the Istanbul nightscape, our **Bosphorus dinner cruise** is TÜRSAB-licensed (A-17672) and rated 4.8★ by more than 11,317 travelers. We keep the group small, the service warm, and — because you pay on the boat — you risk nothing by booking in advance.',

    'Whether you\'re celebrating an anniversary, treating your family to a premium Istanbul evening, or simply craving the city\'s most photogenic sunset-to-night transition, this is the dinner cruise Istanbul regulars recommend first.'
  ],

  highlights: [
    {
      icon: 'dinner',
      title: 'Multi-course Turkish feast',
      desc: '10 mezze selections, hot starter (paçanga böreği), your choice of salmon / sea bass / chicken / köfte / vegetarian plate, dessert with ice-cream cake, and unlimited soft drinks.'
    },
    {
      icon: 'show',
      title: 'Live folklore, belly dance & DJ',
      desc: 'Mevlana whirling dervish opening, 5 traditional Turkish folk dances, classical belly-dance performance, live Turkish musicians, then a full DJ set for the remainder of the cruise.'
    },
    {
      icon: 'route',
      title: 'Full Bosphorus night route',
      desc: 'Kabataş → Dolmabahçe → Çırağan Palace → Ortaköy Mosque → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet Bridge → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.'
    },
    {
      icon: 'price',
      title: 'From €{p.dinnerStd}/person — pay on boat',
      desc: 'Standard dinner cruise €{p.dinnerStd} (was €{p.dinnerStdOriginal}). VIP cruise with stage-front seating and premium menu €{p.dinnerVip}. No prepayment. Free cancellation up to 2 hours before departure.'
    }
  ],

  faq: [
    {
      q: 'What time does the Bosphorus dinner cruise depart?',
      a: 'Boarding starts at 20:00 at Kabataş Pier. The boat leaves at 21:00 sharp and returns around 00:00. We recommend arriving 15-20 minutes early to get comfortable and choose your seat.'
    },
    {
      q: 'How much does the Bosphorus dinner cruise cost?',
      a: 'Our Standard Dinner Cruise is €{p.dinnerStd}/person (regular price €{p.dinnerStdOriginal}). VIP Dinner Cruise with stage-front seating and premium menu is €{p.dinnerVip}/person. Children 0-3 free, ages 4-8 at 50% off. Payment is made on the boat — no prepayment required.'
    },
    {
      q: 'Is alcohol included in the dinner cruise?',
      a: 'Unlimited soft drinks (water, cola, juice) are included in the base price. Alcohol packages are optional add-ons: 2 glasses for +€{p.alcohol2}/person or unlimited local alcohol (wine, beer, rakı, vodka, gin) for +€{p.unlimited}/person. Imported spirits are billed separately on board.'
    },
    {
      q: 'Do you offer hotel transfer for the Bosphorus dinner cruise?',
      a: 'Yes — hotel pickup and drop-off is available for +€{p.transfer}/person. Service zones cover Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, and Sütlüce. Book transfer in the wizard below.'
    },
    {
      q: 'Is the Bosphorus dinner cruise halal-friendly?',
      a: 'Absolutely. All meat served on the boat is halal-certified. Alcohol is a paid add-on (never pushed on guests) and seating naturally separates diners who prefer a non-alcoholic table. We also accommodate vegetarian requests at no extra cost.'
    },
    {
      q: 'What should I wear to the Bosphorus dinner cruise?',
      a: 'Smart casual. Istanbul evenings can be windy even in summer — we recommend a light jacket or shawl. No dress code is enforced, but swimwear, flip-flops, or athletic wear may feel out of place at dinner.'
    }
  ],

  cta: {
    primary: 'Book Now · Pay on Boat',
    secondary: 'Free cancellation up to 2 hours before departure',
    tertiary: 'Check Tonight\'s Availability'
  },

  // Schema.org JSON-LD will be built by build-pages.js using tourType to pull prices
  // from Supabase. Adding overrides here only if needed.
  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H' // 3 hours ISO 8601
  }
};
