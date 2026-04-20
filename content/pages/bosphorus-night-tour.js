/**
 * Landing page content: bosphorus-night-tour
 * Target keyword: "bosphorus night tour" / "night cruise istanbul"
 * Search intent: tourists wanting an evening activity in Istanbul
 */
module.exports = {
  slug: 'bosphorus-night-tour',
  keyword: 'Bosphorus night tour',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/belly-dance.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/hall-wide.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Night Tour — Illuminated Istanbul Cruise with Dinner',
    description: 'Bosphorus night tour with dinner and live show. 21:00 departure, illuminated bridges, Turkish folklore, 3 hours on the water. From €{p.dinnerStd}/person — pay on boat.'
  },

  hero: {
    h1: 'Bosphorus Night Tour',
    subtitle: 'Istanbul\'s illuminated bridges, lit-up palaces, and mirror-still Bosphorus water reflecting 30 million lights — the night tour that defines an Istanbul evening.',
    badge: 'Illuminated Bridges · Live Show · Dinner Included'
  },

  intro: [
    'The **Bosphorus night tour** is the single most recommended evening activity in Istanbul. There\'s a reason: after dark, the Bosphorus transforms. The Bosphorus Bridge shifts between blue, purple, and gold. Dolmabahçe Palace glows warm yellow. Ortaköy Mosque mirrors perfectly on the black water. Every Istanbul landmark hits peak drama at night.',

    'Our **Bosphorus night tour with dinner** packages the full iconic evening: 3 hours on the water (21:00-00:00), a multi-course Turkish feast, live folklore performances (whirling dervish, 5 folk dances, belly dance), live music, and a DJ set that keeps the deck alive until the end. Every guest gets the same itinerary — there\'s no "basic" option that skips the best parts.',

    'Whether it\'s your first Istanbul trip and you\'re looking for "the one thing you must do at night", or you\'ve been here before and want the most photogenic 3 hours in the city, this is the **Bosphorus night tour** with 4.8★ from 11,317+ travelers. TÜRSAB-licensed, pay-on-boat, no prepayment.'
  ],

  highlights: [
    {
      icon: 'lights',
      title: 'Illuminated Bosphorus at peak drama',
      desc: 'Bosphorus Bridge shifts colors (blue, purple, gold), palaces glow yellow, Ortaköy Mosque mirrors on black water. 21:00-00:00 is peak illumination for all Istanbul landmarks.'
    },
    {
      icon: 'show',
      title: 'Traditional Turkish show onboard',
      desc: 'Whirling Dervish opening ceremony, 5 traditional folk dances (different regions of Turkey), belly dance, live Turkish music, then DJ set. 40 minutes of performance, then music + dining continues.'
    },
    {
      icon: 'dinner',
      title: 'Full multi-course dinner',
      desc: '10 varieties of Turkish meze, hot appetizer (paçanga böreği), main course (salmon, sea bream, chicken, köfte, vegetarian — your choice), dessert (ice-cream cake), unlimited soft drinks. Halal-certified.'
    },
    {
      icon: 'route',
      title: 'Complete Bosphorus route',
      desc: 'Kabataş → Dolmabahçe → Çırağan Palace → Ortaköy Mosque → Bebek → Rumeli Fortress → Fatih Sultan Mehmet Bridge → Anadolu Fortress → Beylerbeyi → Kuzguncuk → Üsküdar → Maiden\'s Tower visible → back to Kabataş.'
    }
  ],

  faq: [
    {
      q: 'What time is the Bosphorus night tour?',
      a: 'Boarding from 20:00 at Kabataş Pier. Boat departs 21:00 sharp, returns around 00:00 (midnight). We recommend arriving 20 minutes before boarding to get settled and choose seats.'
    },
    {
      q: 'How much is the Bosphorus night tour?',
      a: 'Standard night tour (3 hours, dinner, show): €{p.dinnerStd}/person (was €{p.dinnerStdOriginal}). VIP with stage-front seats and premium menu: €{p.dinnerVip}/person (was €{p.dinnerVipOriginal}). Kids 0-3 free, 4-8 half price. Pay on boat.'
    },
    {
      q: 'What\'s the difference between Bosphorus night tour and dinner cruise?',
      a: 'Same thing, different keyword. "Bosphorus night tour" is how many travelers search; "dinner cruise" is the industry term. Same boat, same 3-hour itinerary, same menu, same show. Pick whichever search term you prefer — the experience is identical.'
    },
    {
      q: 'Is the Bosphorus night tour worth it vs a sunset cruise?',
      a: 'Night tour = illuminated Istanbul, peak light drama, full entertainment program, most iconic photos of lit bridges. Sunset = golden hour, slower pace, ends at 20:30. If you only do one: night tour is more iconic. Many do both on different days.'
    },
    {
      q: 'Can I do the Bosphorus night tour on my first day in Istanbul?',
      a: 'Yes — we recommend it. Many travelers book the night tour for their first evening because it gives you a complete orientation: all the major landmarks from the water, with good food and entertainment. Easier than trying to sightsee jetlagged on day 1. Hotel transfer available from central areas.'
    },
    {
      q: 'What if I don\'t speak Turkish — is the tour in English?',
      a: 'The crew speaks English. Entertainment (whirling dervish, folk dances, music) needs no language. Dinner menu is in English. Booking via WhatsApp / Telegram / WeChat works in multiple languages (English, Arabic, Russian, German, French, Spanish). No Turkish needed.'
    }
  ],

  cta: {
    primary: 'Book Night Tour · Pay on Boat',
    secondary: '21:00 departure · 3 hours · Dinner + show included · Free cancellation 2hrs before',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
