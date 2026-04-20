/**
 * Landing page content: istanbul-night-tour
 * Target keyword: "istanbul night tour" (broader than bosphorus-night-tour)
 * Search intent: travelers looking for night activity in Istanbul (city-wide search)
 */
module.exports = {
  slug: 'istanbul-night-tour',
  keyword: 'Istanbul night tour',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/belly-dance.jpg',
      '/assets/tours/dinner/hall-wide.jpg'
    ]
  },

  meta: {
    title: 'Istanbul Night Tour — Best Evening Experience on the Bosphorus',
    description: 'Istanbul\'s top-rated night tour: 3-hour Bosphorus cruise with dinner, live folklore, and illuminated bridges. 4.8★, TÜRSAB-licensed, pay on boat. The definitive Istanbul evening.'
  },

  hero: {
    h1: 'Istanbul Night Tour',
    subtitle: 'The night tour Istanbul locals recommend first — a 3-hour Bosphorus cruise with dinner, live entertainment, and the city\'s most iconic illuminated views.',
    badge: 'The Iconic Istanbul Evening · 3 Hours · Dinner Included'
  },

  intro: [
    'An **Istanbul night tour** should do three things: give you the city\'s iconic views, feed you well, and keep you entertained. Our Bosphorus dinner cruise does all three in one 3-hour evening — and it\'s why most Istanbul guides recommend it as the #1 night tour experience.',

    'The **Istanbul night tour** route covers the best landmarks lit up: Dolmabahçe Palace, Ortaköy Mosque, Bosphorus Bridge (shifts colors), Bebek neighborhood, Rumeli Fortress, FSM Bridge, Beylerbeyi Palace, Üsküdar\'s Asian shore, and Maiden\'s Tower in the distance. Most city tours show you these from a bus — we show you from the water, where they\'re most dramatic.',

    'Dinner included (multi-course Turkish menu), live Turkish folklore show, whirling dervish, belly dance, and a DJ set. If you\'re in Istanbul for 2-3 days, this is the single evening that delivers the biggest punch. 4.8★ from 11,317+ travelers, pay-on-boat, no prepayment.'
  ],

  highlights: [
    {
      icon: 'iconic',
      title: 'All the iconic Istanbul night views',
      desc: 'Dolmabahçe Palace, Ortaköy Mosque, illuminated Bosphorus Bridge, Rumeli Fortress, FSM Bridge, Beylerbeyi Palace, Maiden\'s Tower. Every major landmark at peak night lighting.'
    },
    {
      icon: 'dinner',
      title: 'Full Turkish dinner included',
      desc: '10 mezes, warm appetizer, main course (salmon/sea bream/chicken/köfte/vegetarian), dessert, unlimited soft drinks. Halal-certified. Priced at €{p.dinnerStd}/person — includes everything.'
    },
    {
      icon: 'show',
      title: 'Live folklore + whirling dervish + belly dance',
      desc: 'Traditional Turkish entertainment: Mevlana whirling dervish ceremony, 5 regional folk dances, belly dance, live music, DJ. 40-minute performance, ambient music all evening.'
    },
    {
      icon: 'easy',
      title: 'Easy for first-time Istanbul visitors',
      desc: 'Central meeting point (Kabataş Pier), hotel transfer available (+€{p.transfer}/person), English-speaking crew, pay-on-boat. Zero logistics stress. Show up, enjoy, leave.'
    }
  ],

  faq: [
    {
      q: 'What is the best night tour in Istanbul?',
      a: 'The Bosphorus dinner cruise is consistently ranked #1. Reasons: (1) gives you all iconic night views from the water, (2) includes dinner and show in one package, (3) 3 hours is enough to see a lot without being tiring, (4) central meeting point, (5) pay-on-boat reduces booking friction. Most Istanbul travel guides recommend this as the "one must-do night thing".'
    },
    {
      q: 'How much does an Istanbul night tour cost?',
      a: 'Our Bosphorus night tour with dinner: €{p.dinnerStd}/person Standard, €{p.dinnerVip}/person VIP. Includes cruise, dinner, entertainment, soft drinks. Optional: alcohol +€{p.unlimited}/person, hotel transfer +€{p.transfer}/person. Pay on boat — no prepayment.'
    },
    {
      q: 'Is an Istanbul night tour safe for solo travelers?',
      a: 'Yes — very safe. TÜRSAB-licensed boat, professional English-speaking crew, CCTV on deck, life vests accessible. Many solo travelers book this cruise. You\'ll dine at a shared or private table (your choice), and the evening is welcoming — you\'ll meet other travelers if you want, or keep to yourself.'
    },
    {
      q: 'What time is best for a night tour in Istanbul?',
      a: 'Our Bosphorus dinner cruise is 21:00-00:00 (3 hours). That\'s peak illumination time for all Istanbul landmarks — bridges fully lit, palaces glowing, moon over the water. If you want earlier (golden hour), consider the sunset cruise at 17:30 instead.'
    },
    {
      q: 'How do I get to the Istanbul night tour meeting point?',
      a: 'Meeting point is Kabataş Pier (central European side, next to Dolmabahçe Palace). By tram: T1 to Kabataş station (end of line). By taxi: ~15 min from Taksim. By foot: 20 min from Taksim down İnönü Street. We have walking-direction videos on this page. Hotel transfer available for +€{p.transfer}/person if you prefer.'
    },
    {
      q: 'Can I book the Istanbul night tour the same day?',
      a: 'Often yes — same-day booking is available if seats are open. Weekends fill faster. The booking wizard on this page lets you check availability for tonight and reserve in under 1 minute. WhatsApp us at +90 532 520 1700 for urgent same-day requests.'
    }
  ],

  cta: {
    primary: 'Book Night Tour · Pay on Boat',
    secondary: 'From €{p.dinnerStd}/person · Dinner + show included · Free cancellation 2hrs before',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
