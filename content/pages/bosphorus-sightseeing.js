/**
 * Landing page content: bosphorus-sightseeing
 * Target keyword: "bosphorus sightseeing" / "bosphorus landmarks tour"
 * Search intent: travelers wanting to see landmarks, less focused on dinner
 */
module.exports = {
  slug: 'bosphorus-sightseeing',
  keyword: 'Bosphorus sightseeing',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/sunset/amor-sunset-dramatic.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Sightseeing — All Istanbul Landmarks from the Water',
    description: 'Bosphorus sightseeing cruise covers every major landmark: Dolmabahçe, Ortaköy Mosque, Bosphorus Bridge, Rumeli Fortress, Beylerbeyi, Maiden\'s Tower. 3-hour evening tour with dinner, €{p.dinnerStd}.'
  },

  hero: {
    h1: 'Bosphorus Sightseeing',
    subtitle: 'All of Istanbul\'s iconic landmarks — from the water, at night, with dinner. One 3-hour cruise covers Dolmabahçe, Ortaköy Mosque, the Bosphorus Bridge, Rumeli Fortress, and more.',
    badge: '10+ Landmarks · European & Asian Shores · 3 Hours'
  },

  intro: [
    '**Bosphorus sightseeing** from the water beats any bus tour. The strait is the city\'s most historic waterway — Ottoman sultans, Byzantine emperors, Greek merchants, and Russian warships all sailed it. Today our 3-hour cruise passes every major Istanbul landmark that defines the skyline, with commentary from our English-speaking crew.',

    'Our **Bosphorus sightseeing cruise** route (evening departure, 21:00-00:00):\n\n1. **Dolmabahçe Palace** — 19th-century Ottoman residence, illuminated at night\n2. **Çırağan Palace** — now a luxury hotel, royal history\n3. **Ortaköy Mosque** — one of Istanbul\'s most photographed mosques, right on the water\n4. **Bosphorus Bridge** — shifts between blue, purple, gold at night\n5. **Bebek** — chic European neighborhood\n6. **Rumeli Fortress** — built by Fatih Sultan Mehmet in 1452 before conquest of Constantinople\n7. **Fatih Sultan Mehmet Bridge** — second Bosphorus bridge, dramatic arch\n8. **Beylerbeyi Palace** — Asian shore, Ottoman summer residence\n9. **Üsküdar** — Istanbul\'s Asian side, traditional neighborhood\n10. **Maiden\'s Tower** — small island tower, one of Istanbul\'s most romantic symbols',

    'Dinner and entertainment are included — not separate — so **Bosphorus sightseeing** becomes a complete evening. Multi-course Turkish meal, live folklore show, whirling dervish, belly dance, DJ. 4.8★ rated by 11,317+ travelers, TÜRSAB A-17672 licensed.'
  ],

  highlights: [
    {
      icon: 'landmarks',
      title: '10+ major Istanbul landmarks',
      desc: 'Dolmabahçe Palace, Çırağan Palace, Ortaköy Mosque, Bosphorus Bridge, Rumeli Fortress, FSM Bridge, Beylerbeyi Palace, Üsküdar, Maiden\'s Tower. Every essential Istanbul landmark on one cruise.'
    },
    {
      icon: 'shores',
      title: 'Both European and Asian shores',
      desc: 'European side going out (Dolmabahçe → Rumeli Fortress), Asian side coming back (Beylerbeyi → Üsküdar). See both continents in one 3-hour cruise — only Istanbul lets you do this.'
    },
    {
      icon: 'night',
      title: 'Evening sightseeing = illuminated views',
      desc: 'Daytime sightseeing shows landmarks in flat light. Night cruise catches them at peak drama: palaces glowing yellow, bridges colored, mosques mirrored on dark water. Better for photos, more memorable.'
    },
    {
      icon: 'dinner',
      title: 'Dinner + show included',
      desc: 'Sightseeing + dinner + entertainment in one package. No need to plan a separate dinner after the tour. From €{p.dinnerStd}/person, pay on boat, 3 hours total.'
    }
  ],

  faq: [
    {
      q: 'What Bosphorus landmarks will I see?',
      a: 'In order: Dolmabahçe Palace, Çırağan Palace, Ortaköy Mosque, Bosphorus Bridge, Bebek neighborhood, Rumeli Fortress, Fatih Sultan Mehmet Bridge, Anadolu Fortress, Beylerbeyi Palace, Kuzguncuk, Üsküdar, and Maiden\'s Tower (visible from distance). 10+ major landmarks on one 3-hour route.'
    },
    {
      q: 'Is Bosphorus sightseeing better during the day or at night?',
      a: 'Different experiences. Daytime: clearer views of architectural details, brighter for photos. Night: dramatic illumination, mysterious atmosphere, fewer boats on the water. Most travelers prefer the night cruise because landmarks look more magical — and dinner + show makes it a complete evening.'
    },
    {
      q: 'Does the boat stop at landmarks for photos?',
      a: 'It\'s a continuous cruise — no stops (no disembarking). The boat passes each landmark at close distance, crew explains what you\'re seeing, you can move to the open deck for photos. No queueing, no walking, no timing stress — just a smooth 3-hour photo opportunity.'
    },
    {
      q: 'Is the crew giving commentary during sightseeing?',
      a: 'Yes — English-speaking crew provides brief commentary as we pass each major landmark (history, architecture, fun facts). Not a guided lecture, more like a friendly explanation while you\'re dining. For deeper history, we recommend pairing with a daytime Istanbul walking tour.'
    },
    {
      q: 'How is Bosphorus sightseeing different from a hop-on ferry?',
      a: 'Hop-on ferries (Sehir Hatlari public boats): €5-10, 1-2 hours, basic, no food, crowded. Our cruise: €{p.dinnerStd}, 3 hours, full dinner, live show, dedicated table, English commentary. For serious sightseeing with comfort, evening cruise is better. For quick budget pass, public ferry works.'
    },
    {
      q: 'Can I photograph landmarks from the boat?',
      a: 'Yes — absolutely. The open deck has excellent vantage points for photography. Landmarks pass within 100-200 meters of the boat. Smartphone photos turn out great; DSLR/mirrorless users can get stunning shots, especially during the golden-to-blue hour transition of early evening.'
    }
  ],

  cta: {
    primary: 'Book Sightseeing Cruise · Pay on Boat',
    secondary: '10+ landmarks · Dinner + show · Free cancellation 2hrs before',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
