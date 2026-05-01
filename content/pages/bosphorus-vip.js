/**
 * Landing page content: bosphorus-vip
 * Target keyword: "bosphorus vip cruise" / "istanbul vip dinner tour"
 * Search intent: premium-segment travelers wanting luxury experience
 */
module.exports = {
  slug: 'bosphorus-vip',
  keyword: 'Bosphorus VIP cruise',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/steak-wine.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/steak-wine.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/meze-plate.jpg',
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/waiter-service.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus VIP Cruise from €{p.dinnerVip} — Premium Dinner, Stage Seating',
    description: 'Bosphorus VIP dinner cruise: premium mezes, steak options, stage-front table, priority service. Was €{p.dinnerVipOriginal}, now €{p.dinnerVip}. Free cancellation, pay on boat.'
  },

  hero: {
    h1: 'Bosphorus VIP Cruise',
    subtitle: 'Stage-front seating, premium Turkish menu with steak options, and priority service — the Bosphorus evening elevated for travelers who want the best table on the boat.',
    badge: 'Most Popular · 40% OFF · Stage-Front Seats'
  },

  intro: [
    'The **Bosphorus VIP cruise** puts you at the best seats on the boat: stage-front tables with direct view of the whirling dervish, folk dances, belly dance, and live music. Premium menu adds beef tenderloin and rib-eye to the main course options (vs. Standard\'s chicken/salmon), plus 15+ varieties of traditional Turkish mezes served as a generous spread.',

    'Our **VIP Bosphorus dinner cruise** is rated Most Popular by our guests — because at €{p.dinnerVip}/person (was €{p.dinnerVipOriginal}, 40% off), the experience is closer to a fine-dining restaurant than a tourist cruise. Private table, attentive waiter service, and all the same spectacular views of Dolmabahçe, Ortaköy Mosque, and the illuminated Bosphorus Bridge.',

    'Whether you\'re a business traveler, celebrating a milestone, or just believe "we\'re in Istanbul once — let\'s do it properly", this is the **Bosphorus VIP cruise** repeat visitors book. TÜRSAB-licensed, 4.8★ with 11,317+ reviews, pay-on-boat, free cancellation up to 2 hours before departure.'
  ],

  highlights: [
    {
      icon: 'vip',
      title: 'Stage-front private table',
      desc: 'Reserved seating directly in front of the performance stage — best view of the whirling dervish, folk dances, and belly dance. Your table, not shared. Photographers love these seats.'
    },
    {
      icon: 'menu',
      title: '15+ mezes + premium mains',
      desc: '15+ varieties of Turkish mezes served as traditional spread. Main course choices include beef tenderloin and rib-eye (Standard has chicken/salmon only). Same dessert and unlimited soft drinks.'
    },
    {
      icon: 'service',
      title: 'Priority waiter service',
      desc: 'Dedicated waiter attends your table first — refills, menu guidance, coordinating alcohol add-ons, special requests. You\'re not fighting for attention in a crowded room.'
    },
    {
      icon: 'discount',
      title: '40% OFF — was €{p.dinnerVipOriginal}, now €{p.dinnerVip}',
      desc: 'Regular price €{p.dinnerVipOriginal}/person. Current launch price €{p.dinnerVip}/person — 40% off. Pay on boat, no prepayment. Free cancellation up to 2 hours before departure.'
    }
  ],

  faq: [
    {
      q: 'What\'s the difference between VIP and Standard Bosphorus cruise?',
      a: 'VIP gets: (1) stage-front seating with best view, (2) 15+ mezes vs Standard\'s 10, (3) beef tenderloin + rib-eye added to main course options, (4) priority waiter service. Same 3-hour cruise, same entertainment, same route. €{p.dinnerVip} vs €{p.dinnerStd}.'
    },
    {
      q: 'Is the VIP price €{p.dinnerVip} really a 40% discount?',
      a: 'Yes — regular price is €{p.dinnerVipOriginal}/person (check any other booking site). We run €{p.dinnerVip} as a direct-booking rate, cutting out middleman fees. You get VIP for less than most Standard cruises charge elsewhere.'
    },
    {
      q: 'Is alcohol included in the VIP cruise?',
      a: 'No — alcohol is a separate add-on (same as Standard). 2 glasses: +€{p.alcohol2}/person. Unlimited local alcohol (wine, beer, rakı, vodka, gin): +€{p.unlimited}/person. Premium imported spirits billed separately. Unlimited soft drinks are included free.'
    },
    {
      q: 'Can I upgrade to VIP after I boarded the Standard?',
      a: 'Subject to availability — if VIP tables are open, yes. Pay the difference (€{p.dinnerVip} - €{p.dinnerStd} = €31) on the boat. But we recommend booking VIP upfront: the best stage-front seats go to advance bookings.'
    },
    {
      q: 'How do I book the Bosphorus VIP cruise?',
      a: 'Use the booking wizard on this page — select "VIP" in Step 1, pick your date, enter guest count, then contact details. Your request goes via WhatsApp / Telegram / WeChat and we confirm instantly. Pay on the boat, not now.'
    },
    {
      q: 'Is the VIP cruise suitable for a business dinner with clients?',
      a: 'Yes — VIP is the most common choice for business dinners in Istanbul. Private table, quiet enough for conversation, impressive menu and views. Many guests book VIP + unlimited alcohol to host clients. Halal-certified (good for Gulf business travelers). Let us know when booking so we can reserve a quieter back-VIP table.'
    },
    {
      q: 'Is the VIP Bosphorus cruise worth the extra cost over Standard?',
      a: 'For couples and special occasions, yes. VIP at €{p.dinnerVip}/person (vs Standard €{p.dinnerStd}) adds 15+ premium mezes, a rib-eye or beef tenderloin upgrade, stage-front seating with the best panoramic view, and dedicated VIP service throughout the 3-hour cruise.'
    },
    {
      q: 'What premium food is served on the VIP Bosphorus cruise?',
      a: 'VIP includes 15+ premium mezes plus everything in Standard, with the main course upgraded to rib-eye steak or beef tenderloin (seafood and lamb available on request). Ice cream cake dessert. Soft drinks unlimited. Alcohol is a separate add-on (€{p.alcohol2}–€{p.unlimited}/person).'
    }
  ],

  cta: {
    primary: 'Book VIP · Pay on Boat',
    secondary: 'Was €{p.dinnerVipOriginal}, now €{p.dinnerVip} · Free cancellation 2hrs before',
    tertiary: 'See Standard Option (€{p.dinnerStd})'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerVip}',
    duration: 'PT3H'
  }
};
