/**
 * Landing page content: bosphorus-sunset-cruise
 * Target keyword: "bosphorus sunset cruise" / "sunset cruise istanbul"
 * Search intent: travelers wanting golden-hour sunset experience
 *
 * ALIGNED 2026-07-02: there is ONE daily cruise (DINNER — boarding 20:00,
 * departs 21:00, returns 00:00). This page sells that cruise through the
 * sunset/blue-hour angle. Do NOT re-add a separate 17:30 "€35 sunset product";
 * it does not exist (CLAUDE.md §3 — only DINNER_STD is sold).
 * Prices must stay as €{p.dinnerStd} placeholders.
 */
module.exports = {
  slug: 'bosphorus-sunset-cruise',
  keyword: 'Bosphorus sunset cruise',
  tourType: 'sunset',

  images: {
    hero: '/assets/tours/sunset/amor-sunset-golden.jpg',
    og: '/assets/tours/sunset/amor-sunset-dramatic.jpg',
    gallery: [
      '/assets/tours/sunset/amor-sunset-golden.jpg',
      '/assets/tours/sunset/amor-sunset-dramatic.jpg',
      '/assets/tours/sunset/amor-dining-wine.jpg',
      '/assets/tours/sunset/amor-hall-blue.jpg',
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Sunset & Dinner Cruise from €{p.dinnerStd}',
    description: 'Catch the Bosphorus sunset, then dine under the illuminated bridges. Boarding 20:00 at Kabataş, departs 21:00. 3 hours, full dinner. Pay on boat.'
  },

  hero: {
    h1: 'Bosphorus Sunset & Dinner Cruise',
    subtitle: 'Board at 20:00 as the sky turns gold over the minarets — then dine on the water while Dolmabahçe, Ortaköy Mosque and the Bosphorus Bridge light up for the night.',
    badge: 'Boarding 20:00 · Departs 21:00 · Sunset to City Lights'
  },

  intro: [
    'The **Bosphorus sunset cruise** experience in Istanbul is about one thing: the transition. Our cruise boards at Kabataş Pier from 20:00 — and in the long evenings of May through August, the golden hour unfolds while you settle in on deck. The sun sets over the European-side minarets while the boat fills up, just before the 21:00 departure — so you watch it from the deck: Dolmabahçe Palace cast in gold, Ortaköy Mosque silhouetted against the glowing sky.',

    'Our **sunset-to-night Bosphorus cruise** includes a full Turkish dinner — 10 varieties of meze, warm appetizer, choice of main course, dessert — served as the city switches its lights on. By the time dessert arrives, you\'re sailing under the illuminated Bosphorus Bridge with 30 million lights reflecting on dark water. The change from dusk to full night, all inside one 3-hour cruise, is the whole point.',

    'Whether you\'re a photographer chasing the last light, a couple after that "Istanbul memory shot", or a first-timer who wants the classic evening on the water, this is the **Bosphorus sunset dinner cruise** locals recommend to visitors. From €{p.dinnerStd}/person, 4.8★ rating, TÜRSAB-licensed, pay on boat — no prepayment.'
  ],

  highlights: [
    {
      icon: 'sunset',
      title: 'Summer sunsets right at departure',
      desc: 'From May to August, Istanbul\'s sun sets between roughly 20:15 and 20:45 — boarding at 20:00 gives you golden hour on deck, and the 21:00 departure puts you on the water for the sunset itself. Camera ready — this is the shot.'
    },
    {
      icon: 'transition',
      title: 'Blue hour into full night',
      desc: 'Not just sunset — the cruise sails through twilight into the fully illuminated Bosphorus. Golden light, blue hour, then 30 million bridge lights on dark water: three light phases in one evening.'
    },
    {
      icon: 'dinner',
      title: 'Full dinner during the cruise',
      desc: '10 varieties of Turkish meze, warm appetizer, main course (salmon, sea bream, chicken, köfte, vegetarian), ice-cream cake, unlimited soft drinks — served as the city lights come on.'
    },
    {
      icon: 'landmarks',
      title: 'Dolmabahçe, Ortaköy, Bosphorus Bridge — all glowing',
      desc: 'Route passes Dolmabahçe Palace, Ortaköy Mosque, the Bosphorus Bridge, Rumeli Fortress and Beylerbeyi Palace as their lights come on. Every landmark at its best light.'
    }
  ],

  faq: [
    {
      q: 'What time does the Bosphorus sunset cruise depart?',
      a: 'Boarding starts at 20:00 at Kabataş Pier, the boat departs at 21:00 and returns around 00:00. In summer (May–August) the sun sets between roughly 20:15 and 20:45 — golden hour happens while you board, and the sunset itself right around departure, seen from the water.'
    },
    {
      q: 'Is the Bosphorus sunset cruise the same as the dinner cruise?',
      a: 'Yes — it\'s one cruise. There is a single daily departure at 21:00 with full dinner and live shows on board. In the long summer evenings it doubles as a sunset cruise: you board during golden hour and sail through the blue hour into the illuminated night. In winter, the same cruise is a pure night-lights experience.'
    },
    {
      q: 'What\'s the price of the Bosphorus sunset cruise?',
      a: 'From €{p.dinnerStd}/person for the cruise (3 hours, full dinner, live entertainment). Pay on the boat — no prepayment. Children 0-3 free, 4-9 €5 off.'
    },
    {
      q: 'When is the best time of year for a Bosphorus sunset cruise?',
      a: 'May through August. Istanbul\'s late sunsets (20:15–20:45) fall right inside the boarding window, so you catch golden hour and the sunset from the deck, then sail under the illuminated bridges after the 21:00 departure. In autumn and winter the sun sets earlier and the same cruise becomes a full night-lights experience — equally photogenic, different mood.'
    },
    {
      q: 'What should I bring to a sunset cruise?',
      a: 'A smartphone or camera — golden hour and the lit-up bridges beg for it. A light jacket: the breeze picks up on deck after sunset. Casual-smart attire — you\'re dining, but there\'s no strict dress code.'
    },
    {
      q: 'Do I see the illuminated bridges at night on this cruise?',
      a: 'Yes — that\'s the second €5 off of the evening. The cruise runs 21:00–00:00, so after the sunset and blue hour you sail under the fully lit Bosphorus Bridge, past illuminated palaces and Maiden\'s Tower, and return to Kabataş around 00:00.'
    },
    {
      q: 'What time does the sun set in Istanbul?',
      a: 'In summer (June–July), Istanbul sunsets are around 20:30–20:45. In winter, around 16:30–17:00. For a sunset-and-night experience, Bosphorus Night\'s 21:00 dinner cruise from Kabataş catches the late golden hour and blue hour in summer, and the illuminated landmarks all year round.'
    },
    {
      q: 'Is the Bosphorus sunset cruise worth it?',
      a: 'Yes — sunset over the Bosphorus Bridge is one of Istanbul\'s signature views. Bosphorus Night\'s 21:00 dinner cruise (€{p.dinnerStd}/person) catches the post-sunset blue hour plus the illuminated palaces, with a full dinner and live shows over 3 hours.'
    }
  ],

  cta: {
    primary: 'Book the Sunset Cruise · Pay on Boat',
    secondary: 'Boarding 20:00 · Departs 21:00 · Dinner included · Free cancellation 2hrs before',
    tertiary: 'See the Full Dinner Cruise Details'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
