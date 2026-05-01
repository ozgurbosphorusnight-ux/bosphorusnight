/**
 * Landing page content: dinner-cruise-istanbul
 * Target keyword: "dinner cruise istanbul" (variant of bosphorus-dinner-cruise)
 * Search intent: same product, different keyword order — Istanbul-first searchers
 */
module.exports = {
  slug: 'dinner-cruise-istanbul',
  keyword: 'Dinner cruise Istanbul',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/belly-dance.jpg',
      '/assets/tours/dinner/steak-wine.jpg'
    ]
  },

  meta: {
    title: 'Dinner Cruise Istanbul from €{p.dinnerStd} — Bosphorus Night Tour',
    description: '3-hour Istanbul dinner cruise on the Bosphorus. Multi-course Turkish menu, live folklore, illuminated bridges. Free cancellation, pay on boat. 11,317 traveler reviews.'
  },

  hero: {
    h1: 'Dinner Cruise Istanbul',
    subtitle: 'The best dinner cruise in Istanbul — 3 hours on the Bosphorus, multi-course Turkish feast, live entertainment, and night views of the city\'s most iconic landmarks.',
    badge: '4.8★ · 11,317 reviews · TÜRSAB A-17672'
  },

  intro: [
    'Looking for a **dinner cruise in Istanbul**? You\'ve found the one most travelers recommend. Our 3-hour evening on the Bosphorus combines a full multi-course Turkish dinner, live folklore performances, and the most photogenic views of the city — all from a comfortable boat that departs Kabataş Pier at 21:00.',

    'The **Istanbul dinner cruise** experience: board at 20:00, settle in, watch Dolmabahçe Palace slide by as we depart, dinner begins as we approach Ortaköy Mosque, the show starts (whirling dervish, folk dances, belly dance), and by the time dessert arrives you\'re under the illuminated Bosphorus Bridge. By midnight you\'re back at Kabataş with a camera roll of iconic photos and a full stomach.',

    'From €{p.dinnerStd}/person for the Standard cruise (was €{p.dinnerStdOriginal}) or €{p.dinnerVip}/person for VIP (was €{p.dinnerVipOriginal}) with stage-front seats. Pay on the boat — no prepayment, no risk. TÜRSAB A-17672 licensed, 4.8★ rated by 11,317+ travelers.'
  ],

  highlights: [
    {
      icon: 'dinner',
      title: 'Full multi-course Turkish dinner',
      desc: '10 varieties of mezes, warm appetizer, main course (salmon/sea bream/chicken/köfte/vegetarian), ice-cream cake. Halal-certified. Unlimited soft drinks included.'
    },
    {
      icon: 'show',
      title: 'Live Turkish folklore show',
      desc: 'Whirling Dervish ceremony, 5 traditional folk dances, belly dance, live Turkish music, DJ. 40 minutes of performance, ambient music continues.'
    },
    {
      icon: 'route',
      title: 'Full Bosphorus night route',
      desc: '3-hour cruise: Dolmabahçe, Çırağan, Ortaköy Mosque, Bosphorus Bridge, Bebek, Rumeli Fortress, FSM Bridge, Beylerbeyi, Üsküdar, Maiden\'s Tower. Both European and Asian shores.'
    },
    {
      icon: 'price',
      title: 'From €{p.dinnerStd} — pay on boat',
      desc: 'Standard: €{p.dinnerStd} (was €{p.dinnerStdOriginal}). VIP with premium menu: €{p.dinnerVip} (was €{p.dinnerVipOriginal}). No prepayment. Free cancellation up to 2 hours before departure.'
    }
  ],

  faq: [
    {
      q: 'How much is a dinner cruise in Istanbul?',
      a: 'Our Standard dinner cruise is €{p.dinnerStd}/person (regular €{p.dinnerStdOriginal}). VIP with stage-front seating and premium menu is €{p.dinnerVip}/person (regular €{p.dinnerVipOriginal}). Children 0-3 free, 4-8 at 50% off. Pay on the boat — no prepayment.'
    },
    {
      q: 'What\'s included in the Istanbul dinner cruise price?',
      a: '3-hour cruise on the Bosphorus, multi-course Turkish dinner (meze, warm appetizer, main course, dessert), unlimited soft drinks, live folklore show (whirling dervish, folk dances, belly dance), live music + DJ, open-air deck access, taxes included. Hotel transfer and alcohol are optional add-ons.'
    },
    {
      q: 'Where does the dinner cruise Istanbul depart from?',
      a: 'Kabataş Pier, Istanbul — on the European side, next to Dolmabahçe Palace. Exact meeting location is shared via WhatsApp / Telegram / WeChat after booking. Walking videos from Dolmabahçe tram stop and Kabataş tram station on the meeting point section above.'
    },
    {
      q: 'How long is the dinner cruise — and what time does it start?',
      a: '3 hours total. Boarding from 20:00, boat departs 21:00 sharp, returns around 00:00 (midnight). We recommend arriving 15-20 minutes early to settle in and pick your seat.'
    },
    {
      q: 'Do I need to book in advance or can I show up?',
      a: 'Book in advance — seats fill up, especially on weekends and holidays. Same-day booking often available but not guaranteed. The wizard on this page gets you a spot in under 1 minute. Pay on the boat, so there\'s no financial risk to reserving early.'
    },
    {
      q: 'Is the Istanbul dinner cruise suitable for vegetarians / halal / dietary restrictions?',
      a: 'Yes — all meat is halal-certified. Vegetarian main course (falafel, roasted potatoes, bulgur pilaf, stewed vegetables, onion rings) available at no extra cost. Allergies can be accommodated if you tell us when booking. Alcohol is optional add-on, never pushed.'
    },
    {
      q: 'Is a dinner cruise in Istanbul worth it?',
      a: 'For first-time Istanbul visitors, yes — it combines sightseeing, dinner, and entertainment in 3 hours. Bosphorus Night charges €{p.dinnerStd}/person Standard, including 10 mezes, main course, soft drinks, live music, DJ, and traditional shows. 4.8★ from 11,317 reviews suggests reliability.'
    },
    {
      q: 'What\'s the cheapest dinner cruise in Istanbul?',
      a: 'Bosphorus Night offers a Standard Dinner Cruise at €{p.dinnerStd}/person — TÜRSAB-licensed (A-17672), 4.8★ from 11,317 reviews. The 3-hour format includes full dinner (10 mezes, main course, dessert), soft drinks, live music, DJ, folk dances, and the Mevlana whirling dervish. Pay on boat, no prepayment required.'
    }
  ],

  cta: {
    primary: 'Book Dinner Cruise · Pay on Boat',
    secondary: '4.8★ rated · TÜRSAB licensed · Free cancellation 2hrs before',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
