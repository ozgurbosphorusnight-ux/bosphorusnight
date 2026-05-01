/**
 * Landing page content: bosphorus-trip
 * Target keyword: "bosphorus trip" (broad, generic keyword)
 * Search intent: travelers exploring general Bosphorus experiences
 */
module.exports = {
  slug: 'bosphorus-trip',
  keyword: 'Bosphorus trip',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/sunset/amor-sunset-golden.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Trip from €{p.dinnerStd} — Istanbul Dinner Cruise + Show',
    description: '3-hour Bosphorus trip: Turkish dinner, live folklore, illuminated night views. Departs 21:00 from Kabataş. Free cancellation, pay on boat. 11,317 traveler reviews.'
  },

  hero: {
    h1: 'Bosphorus Trip',
    subtitle: 'The Bosphorus trip travelers recommend most — a 3-hour dinner cruise that covers every major Istanbul landmark, with food, entertainment, and night views.',
    badge: 'Complete Bosphorus Experience · Evening Departure'
  },

  intro: [
    'A **Bosphorus trip** can mean a 1-hour sightseeing ferry or a full evening cruise with dinner — we do the latter, and most travelers find it the better-value experience. 3 hours, €{p.dinnerStd}/person, includes dinner and entertainment. You\'re not just passing by landmarks — you\'re eating, watching a show, and enjoying the night as it unfolds.',

    'Our **Bosphorus trip** route covers everything worth seeing: Dolmabahçe Palace (Ottoman Sultan\'s 19th-century residence), Ortaköy Mosque (one of Istanbul\'s most photographed), Bosphorus Bridge (shifts colors at night), Rumeli Fortress (built by Fatih Sultan Mehmet in 1452), Beylerbeyi Palace (Asian side), and Maiden\'s Tower on a small island. All explained by the English-speaking crew.',

    'Whether you\'re in Istanbul for 24 hours or a week, this is the **Bosphorus trip** that gives you the most in one evening. 4.8★ rated by 11,317+ travelers, TÜRSAB A-17672 licensed, halal-friendly menu, pay-on-boat — no prepayment risk.'
  ],

  highlights: [
    {
      icon: 'complete',
      title: 'Complete Bosphorus in one trip',
      desc: 'European shore (Dolmabahçe, Ortaköy, Rumeli Fortress), Asian shore (Beylerbeyi, Üsküdar), both Bosphorus bridges, Maiden\'s Tower. Every major landmark visible in 3 hours.'
    },
    {
      icon: 'dinner',
      title: 'Dinner + entertainment included',
      desc: 'Not a sightseeing-only ferry — full Turkish dinner with mezes, main course, dessert. Live folklore show, whirling dervish, belly dance, DJ. Entertainment value beyond just views.'
    },
    {
      icon: 'evening',
      title: 'Evening = best lighting',
      desc: 'Daytime Bosphorus trips show you the landmarks in flat light. Evening trips catch everything illuminated: palaces glowing, bridges colored, mosques reflected on dark water. Better photos, more dramatic.'
    },
    {
      icon: 'price',
      title: 'From €{p.dinnerStd} — pay on boat',
      desc: 'No prepayment needed. Pay on the boat (cash or card). Free cancellation up to 2 hours before departure. Kids 0-3 free, 4-8 at half price. Transparent pricing.'
    }
  ],

  faq: [
    {
      q: 'What are the best Bosphorus trips in Istanbul?',
      a: 'The evening dinner cruise is consistently ranked top. Daytime options (1-hour public ferries, 2-hour sightseeing boats) show less and don\'t include food. For value, a 3-hour cruise with dinner, show, and central return point is hard to beat. Our cruise costs €{p.dinnerStd} and replaces the need for a separate dinner + entertainment evening.'
    },
    {
      q: 'How long does a Bosphorus trip take?',
      a: 'Our Bosphorus trip is 3 hours total (21:00 departure, 00:00 return). Shorter options exist (1-hour sightseeing ferries, 90-min tours) but they skip food and entertainment. For a complete evening experience, 3 hours is ideal — enough to see everything, not too long to be tiring.'
    },
    {
      q: 'Is a Bosphorus trip worth it?',
      a: 'Yes — nearly every Istanbul travel guide lists "Bosphorus cruise" as a top-5 must-do. The city was built around this strait; you haven\'t really seen Istanbul until you\'ve seen it from the water. Our specific evening cruise adds dinner and entertainment, making it a complete night out rather than just sightseeing.'
    },
    {
      q: 'What should I bring on a Bosphorus trip?',
      a: 'Passport or ID card (for boat log), light jacket (evenings cool on deck), smartphone/camera, comfortable shoes for the dance floor. Cash or card for paying. Everything else is on the boat. Hotel transfer available for +€{p.transfer}/person if you don\'t want to navigate public transport.'
    },
    {
      q: 'Is the Bosphorus trip suitable for kids?',
      a: 'Yes — very child-friendly. Kids 0-3 sail free (including transfer), 4-8 at 50% off. Covered indoor seating, kid-friendly menu on request, and the entertainment is gentle and engaging. Many families book this as a highlight of their Istanbul trip.'
    },
    {
      q: 'What are the Bosphorus trip stops?',
      a: 'It\'s a continuous cruise — we don\'t stop at landmarks (no disembarking). The boat passes each landmark at close distance, crew explains what you\'re seeing, you stay comfortable at your table or move to the open deck for photos. No queueing, no walking — just a smooth 3 hours on the water.'
    },
    {
      q: 'How much does a Bosphorus trip cost in 2026?',
      a: 'In 2026, a Bosphorus dinner trip with Bosphorus Night starts at €{p.dinnerStd}/person Standard, €{p.dinnerVip}/person VIP. Both include a 3-hour cruise, dinner, and shows. Add-ons: alcohol €{p.alcohol2}–€{p.unlimited}, hotel transfer €{p.transfer}. Pay on boat — no prepayment.'
    },
    {
      q: 'What\'s the difference between a Bosphorus trip and a regular ferry ride?',
      a: 'Public city ferries are commuter transport — no dinner, no commentary, daytime routes. A Bosphorus trip with Bosphorus Night is a 3-hour evening tourist cruise with full dinner, live music, DJ, traditional shows, and a complete Asian-and-European shore route from Kabataş, starting at €{p.dinnerStd}/person.'
    }
  ],

  cta: {
    primary: 'Book Bosphorus Trip · Pay on Boat',
    secondary: '3 hours · Dinner + show · Free cancellation 2hrs before · TÜRSAB licensed',
    tertiary: 'Check Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
