/**
 * Landing page content: bosphorus-vip
 * Target keyword: "bosphorus vip cruise" / "istanbul vip dinner tour"
 * Search intent: premium-segment travelers wanting luxury experience
 *
 * Aug 2026 rework: separate VIP package discontinued — page keeps the "VIP"
 * keyword but sells the single-menu premium experience honestly. VIP feel =
 * stage-front private table add-on (ROMANTIC_TABLE, €{p.romantic}/table) +
 * attentive table service. No €{p.dinnerVip}/€{p.unlimited} placeholders.
 */
module.exports = {
  slug: 'bosphorus-vip',
  keyword: 'Bosphorus VIP cruise',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/dining-romantic.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/steak-wine.jpg',
      '/assets/tours/dinner/meze-plate.jpg',
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/waiter-service.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus VIP Cruise Experience from €{p.dinnerStd} — Premium Dinner on the Bosphorus',
    description: 'VIP-level Bosphorus dinner cruise: full Turkish menu, live shows, stage-front table option, attentive service. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Pay on boat, free cancellation.'
  },

  hero: {
    h1: 'Bosphorus VIP Cruise Experience',
    subtitle: 'One menu, one standard: premium for everyone. A 3-hour Bosphorus evening aboard AMOR — rich Turkish dinner, live stage shows, and an optional stage-front private table. We don\'t sell a separate "VIP class"; we serve our best to every guest.',
    badge: '40% OFF · One Menu, Premium Standard · Pay on Boat'
  },

  intro: [
    'Many Bosphorus boats split their guests into "Standard" and "VIP". We don\'t. Aboard **AMOR** there is one dinner menu, prepared with the same care for everyone: 10 varieties of Turkish mezes, a hot starter, your choice of main course (salmon, sea bass, chicken or köfte), ice-cream cake, and unlimited soft drinks. The full entertainment program is included too — whirling dervish ceremony, 5 folk dances, belly dance, live music and DJ — all within the €{p.dinnerStd}/person price.',

    'The VIP feeling starts with your table. If you want to be closest to the stage and the views, add a **stage-front private table** (+€{p.romantic}/table) and your spot is reserved in advance — the best angle for the whirling dervish, the folk dances, and the illuminated Bosphorus. It\'s the favorite choice of couples, celebrations, and photographers.',

    'AMOR is a 42-meter, 3-deck, climate-controlled boat hosting up to 400 guests. The 3-hour route runs from Kabataş (boarding from 19:30, departure 20:30, return 23:30) past Dolmabahçe, Ortaköy Mosque, Rumeli Fortress and the Bosphorus Bridge lights. TÜRSAB-licensed (A-17672), rated 4.9★ on Google, 11,317+ guests hosted since 2014. No prepayment — pay on the boat, with free cancellation up to 2 hours before departure.'
  ],

  highlights: [
    {
      icon: 'menu',
      title: 'One menu, premium standard',
      desc: 'There is no separate "VIP menu" — because our single menu is already at that level. 10 varieties of Turkish mezes, hot starter, 4 main course choices, dessert and unlimited soft drinks, served with the same care to every table.'
    },
    {
      icon: 'vip',
      title: 'Stage-front private table (+€{p.romantic}/table)',
      desc: 'Tables closest to the whirling dervish, folk dances and belly dance are reserved in advance. Commanding view of the stage and the Bosphorus. Your table is private, not shared.'
    },
    {
      icon: 'service',
      title: 'Attentive table service',
      desc: 'Our waiters serve you at your table — courses, menu guidance, drink add-ons, special requests. No queuing in a crowded room.'
    },
    {
      icon: 'discount',
      title: '40% OFF — was €{p.dinnerStdOriginal}, now €{p.dinnerStd}',
      desc: 'Direct-booking price: €{p.dinnerStd}/person (list price €{p.dinnerStdOriginal}). Pay on boat, no prepayment. Free cancellation up to 2 hours before departure.'
    }
  ],

  faq: [
    {
      q: 'Do you sell a "VIP package"? What\'s the difference from Standard?',
      a: 'We don\'t sell a separate VIP package — there is one menu, served to everyone at the same premium standard. What we call the "VIP experience" is personalizing your evening: a stage-front private table add-on (+€{p.romantic}/table), attentive table service, and optional drink add-ons. The cruise is 3 hours, €{p.dinnerStd}/person.'
    },
    {
      q: 'Is €{p.dinnerStd} really a 40% discount?',
      a: 'Yes — our list price is €{p.dinnerStdOriginal}/person. €{p.dinnerStd} is the direct-booking rate that cuts out middleman commissions. You pay on the boat; there is no prepayment.'
    },
    {
      q: 'What\'s on the menu?',
      a: '10 varieties of Turkish mezes, a hot starter, your choice of main course (salmon, sea bass, chicken or köfte), and ice-cream cake for dessert, with unlimited soft drinks. The entertainment program is included: whirling dervish ceremony, 5 folk dances, belly dance, live music and DJ.'
    },
    {
      q: 'Is alcohol included?',
      a: 'No — alcohol is a separate add-on: 2 glasses of local wine or beer for +€{p.alcohol2}/person. Unlimited soft drinks are included free. Premium imported spirits are billed separately on board.'
    },
    {
      q: 'How do I guarantee a stage-front table?',
      a: 'Simply select the "stage-front private table" add-on (+€{p.romantic}/table) when booking — the table is reserved in your name. The best positions fill up with advance bookings, so we recommend adding it before your cruise day.'
    },
    {
      q: 'Is it suitable for a business dinner or a special celebration?',
      a: 'Yes. A stage-front private table plus the alcohol add-on is a popular way to host clients: a table layout made for conversation, an impressive menu, and the Bosphorus views. Mention your occasion in the booking notes and we\'ll plan the table placement accordingly.'
    },
    {
      q: 'What kind of boat is it?',
      a: 'AMOR — a modern 42-meter, 3-deck passenger boat with a 400-guest capacity, heated in winter and air-conditioned in summer. Departure from Kabataş Pier: boarding from 19:30, departure 20:30, return 23:30. The route covers Dolmabahçe, Ortaköy, Rumeli Fortress, Beylerbeyi and the Bosphorus Bridge lights.'
    },
    {
      q: 'How do I book the Bosphorus VIP cruise experience?',
      a: 'Use the booking wizard on this page — pick your date, enter your guest count, then your contact details. Your request is confirmed instantly via WhatsApp / Telegram. Pay on the boat; free cancellation up to 2 hours before departure.'
    }
  ],

  cta: {
    primary: 'Book Your Table · Pay on Boat',
    secondary: 'Was €{p.dinnerStdOriginal}, now €{p.dinnerStd} · Free cancellation 2hrs before',
    tertiary: 'Add stage-front private table (+€{p.romantic})'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
