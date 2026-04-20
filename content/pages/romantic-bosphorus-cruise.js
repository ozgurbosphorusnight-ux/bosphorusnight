/**
 * Landing page content: romantic-bosphorus-cruise
 * Target keyword: "romantic bosphorus cruise" / "romantic dinner istanbul"
 * Search intent: couples planning a special evening, anniversary, honeymoon
 */
module.exports = {
  slug: 'romantic-bosphorus-cruise',
  keyword: 'Romantic Bosphorus cruise',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/dining-romantic.jpg',
    og: '/assets/tours/dinner/table-candle.jpg',
    gallery: [
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/table-candle.jpg',
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/steak-wine.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/violin.jpg'
    ]
  },

  meta: {
    title: 'Romantic Bosphorus Cruise — Candlelit Dinner for Couples | Istanbul',
    description: 'The most romantic Bosphorus cruise in Istanbul. Candlelit table, roses, VIP setup, multi-course dinner under the illuminated bridges. Anniversary, honeymoon, surprise — book from €{p.dinnerStd}/person.'
  },

  hero: {
    h1: 'Romantic Bosphorus Cruise',
    subtitle: 'Candlelit dinner, rose-decorated table, illuminated bridges, and a private moment under Istanbul\'s most iconic night sky — a Bosphorus evening built for two.',
    badge: 'Anniversary · Honeymoon · Special Night'
  },

  intro: [
    'The **romantic Bosphorus cruise** is Istanbul\'s most iconic evening for couples. As the sun sets over Dolmabahçe Palace and the Bosphorus Bridge lights up in shifting colors, you and your partner share a multi-course Turkish feast at a private table — with candles, fresh flowers, and a live violin drifting across the deck.',

    'Our **romantic table setup** (+€{p.romantic}/table) transforms any seat into an occasion: red roses, glowing candles, a handwritten welcome note. Add the unlimited alcohol package (+€{p.unlimited}/person) for wine under the stars, or keep it simple with the included soft drinks. Either way, the crew quietly takes care of the rest.',

    'Whether you\'re celebrating an anniversary, planning a surprise for your partner, or just in the most romantic city in Europe and want to live a memorable night, this is the **romantic dinner cruise Istanbul couples book first**. 4.8★ rating, TÜRSAB-licensed, and — most importantly — pay on the boat, so you\'re committing to nothing but the evening itself.'
  ],

  highlights: [
    {
      icon: 'romance',
      title: 'Candlelit romantic table',
      desc: 'Add the Romantic Table setup for +€{p.romantic}/table: fresh red roses, glowing candles, rose petals on the cloth, and a handwritten card. Photos included.'
    },
    {
      icon: 'view',
      title: 'Best sunset-to-night transition seats',
      desc: 'We reserve window-adjacent tables for couples. Watch the Bosphorus Bridge illuminate, Maiden\'s Tower glow, and Ortaköy Mosque light up — all from your private table.'
    },
    {
      icon: 'music',
      title: 'Live violin & intimate ambience',
      desc: 'Live violin and acoustic Turkish music create a slow, romantic atmosphere during dinner. After, the DJ takes over and couples dance under the open deck\'s string lights.'
    },
    {
      icon: 'wine',
      title: 'Wine, champagne, premium pairings',
      desc: 'Add 2 glasses of alcohol (+€{p.alcohol2}/person) or unlimited local wine, beer, rakı (+€{p.unlimited}/person). Imported champagne and premium pairings available on request — ask when booking.'
    }
  ],

  faq: [
    {
      q: 'What makes this a romantic Bosphorus cruise?',
      a: 'The combination of a private table, candlelit setup (optional +€{p.romantic}), multi-course Turkish dinner, live violin and acoustic music, and the illuminated Bosphorus bridges passing overhead. We design the experience for couples — quiet ambience early, energetic DJ and dancing later. You choose the pace.'
    },
    {
      q: 'Can you arrange a surprise for my partner — birthday, anniversary, proposal?',
      a: 'Yes — tell us when you book. We can arrange a birthday cake (complimentary), custom table setup, a handwritten card in your language, or coordinate with our staff to bring something to the table at the right moment. For proposals, we recommend messaging us directly via WhatsApp so we can plan discreetly.'
    },
    {
      q: 'How much does the romantic cruise cost for 2 people?',
      a: 'Standard for 2: 2 × €{p.dinnerStd} = €48. Add romantic setup +€{p.romantic} = €63. VIP for 2: 2 × €{p.dinnerVip} = €110 + romantic €{p.romantic} = €125. No prepayment — pay on boat. For unlimited alcohol add 2 × €{p.unlimited} = €60 more.'
    },
    {
      q: 'Is the romantic Bosphorus cruise private — just for us?',
      a: 'No — it\'s a shared cruise with other couples and guests (up to 60-80 total). Your **table** is private (just for your group), but the boat has other diners. If you want a fully private boat for 2, that\'s a separate **Private Bosphorus Cruise** (we can arrange on request — message us).'
    },
    {
      q: 'Can we bring our own flowers, cake, or gift?',
      a: 'Absolutely. Bring what you like — our staff will help discreetly place a surprise gift, hide a ring box in dessert, or display flowers you brought yourself. No corkage-style fees. Just let us know so we can coordinate the timing.'
    },
    {
      q: 'What should we wear for a romantic Bosphorus cruise?',
      a: 'Smart casual to elegant — many couples dress up (dresses, jackets). No strict dress code, but the atmosphere is more special than casual tourism. Bring a light jacket or shawl — deck can be cool even in summer. Comfortable shoes if you plan to dance after dinner.'
    }
  ],

  cta: {
    primary: 'Book Romantic Cruise · Pay on Boat',
    secondary: 'Add romantic table setup (+€{p.romantic}) in booking wizard · Free cancellation 2hrs before',
    tertiary: 'Check Availability for Tonight'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
