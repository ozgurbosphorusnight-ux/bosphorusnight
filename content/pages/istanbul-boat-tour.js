/**
 * Landing page content: istanbul-boat-tour
 * Target keyword: "istanbul boat tour" (broad keyword, high search volume)
 * Search intent: travelers exploring boat-based activities in Istanbul
 */
module.exports = {
  slug: 'istanbul-boat-tour',
  keyword: 'Istanbul boat tour',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/sunset/amor-sunset-golden.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Istanbul Boat Tour — Bosphorus Cruise with Dinner & Show',
    description: 'Istanbul\'s best boat tour: 3-hour Bosphorus cruise with full dinner, live folklore, and illuminated night views. From €{p.dinnerStd}/person, pay on boat, 4.8★ rated.'
  },

  hero: {
    h1: 'Istanbul Boat Tour',
    subtitle: 'The Istanbul boat tour travelers book most — Bosphorus cruise with Turkish dinner, live entertainment, and iconic views of the city from the water.',
    badge: '4.8★ · TÜRSAB A-17672 · Pay on Boat'
  },

  intro: [
    'When you search "**Istanbul boat tour**", you\'re looking for the one thing that defines the city from the water: the Bosphorus. Our 3-hour Bosphorus boat tour takes you past every major Istanbul landmark — Dolmabahçe Palace, Ortaköy Mosque, the Bosphorus Bridge, Rumeli Fortress, Beylerbeyi Palace, and Maiden\'s Tower — with a full Turkish dinner and live entertainment included.',

    'Unlike the many 1-hour sightseeing ferries that cover less of the Bosphorus and skip food and entertainment, our **Istanbul boat tour** is the full evening experience: boarding at Kabataş Pier at 20:00, cruising until midnight, with 10 mezes, a main course, dessert, whirling dervish, folk dances, belly dance, and DJ. You get the tour AND the night out.',

    'Whether you have one evening in Istanbul or a full week, this is the **boat tour Istanbul** delivers on. 4.8★ rated by 11,317+ travelers, TÜRSAB-licensed (A-17672), halal-certified menu, and pay-on-boat — no financial commitment until you\'re satisfied with the experience.'
  ],

  highlights: [
    {
      icon: 'landmarks',
      title: 'All major Bosphorus landmarks',
      desc: 'Dolmabahçe, Çırağan, Ortaköy Mosque, Bosphorus Bridge, Bebek, Rumeli Fortress, FSM Bridge, Beylerbeyi Palace, Üsküdar, Maiden\'s Tower. Both European and Asian shores on one cruise.'
    },
    {
      icon: 'dinner',
      title: 'Dinner + show included',
      desc: 'Not just a boat tour — full multi-course Turkish dinner, live folklore performances, whirling dervish, belly dance, DJ. Entertainment that keeps the 3 hours fun, not just sightseeing.'
    },
    {
      icon: 'time',
      title: 'Evening departure (best lighting)',
      desc: '21:00 departure catches the illuminated Bosphorus in full glow — bridges, palaces, mosques all lit up. More dramatic than daytime tours that show the same landmarks in flat light.'
    },
    {
      icon: 'easy',
      title: 'Easy booking, easy payment',
      desc: 'Book via wizard on this page in under 1 minute. Pay on the boat — no prepayment. Hotel transfer available for +€{p.transfer}/person. Free cancellation up to 2 hours before departure.'
    }
  ],

  faq: [
    {
      q: 'What\'s the best boat tour in Istanbul?',
      a: 'The Bosphorus dinner cruise — covers all major landmarks, includes dinner and entertainment, and runs in the evening when landmarks are illuminated. Other options (hop-on ferries, morning sightseeing boats) cover shorter routes, skip food, and don\'t include entertainment. For one Istanbul evening, this is the most complete boat tour.'
    },
    {
      q: 'How long is the Istanbul boat tour?',
      a: '3 hours. Boarding from 20:00 at Kabataş Pier, departure 21:00, return ~00:00. Covers the full Bosphorus from Dolmabahçe to Rumeli Fortress and back. Enough time for full dinner + show without being tiring.'
    },
    {
      q: 'How much is an Istanbul boat tour?',
      a: 'Our boat tour with dinner: €{p.dinnerStd}/person Standard (was €{p.dinnerStdOriginal}), €{p.dinnerVip}/person VIP with premium menu (was €{p.dinnerVipOriginal}). Kids 0-3 free, 4-8 half price. Pay on boat. Alcohol and hotel transfer are optional add-ons.'
    },
    {
      q: 'Where do Istanbul boat tours depart from?',
      a: 'Our boat departs from Kabataş Pier, central European-side Istanbul, next to Dolmabahçe Palace. Accessible via T1 tram (Kabataş station), 15 min taxi from Taksim, or 20 min walk from Taksim. Hotel transfer available for +€{p.transfer}/person from central zones.'
    },
    {
      q: 'Is this boat tour suitable for families with children?',
      a: 'Yes — very family-friendly. Children 0-3 sail free, 4-8 get 50% off. Covered indoor seating, kid-friendly menu on request, and the entertainment (whirling dervish, folk dances) is engaging for children. Many families from all over the world book this cruise.'
    },
    {
      q: 'Do I need to bring anything to the boat tour?',
      a: 'Passport or ID card (for boat log), light jacket (deck can be cool), comfortable shoes if you plan to dance. Smartphone for photos. Cash or card for paying on the boat (both accepted). Everything else — food, drinks, entertainment — is on the boat.'
    }
  ],

  cta: {
    primary: 'Book Boat Tour · Pay on Boat',
    secondary: '3 hours · Dinner + show · From €{p.dinnerStd}/person · Free cancellation 2hrs before',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
