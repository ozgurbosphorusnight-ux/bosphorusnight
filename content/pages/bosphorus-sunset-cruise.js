/**
 * Landing page content: bosphorus-sunset-cruise
 * Target keyword: "bosphorus sunset cruise" / "sunset cruise istanbul"
 * Search intent: travelers wanting golden-hour sunset experience
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
    title: 'Bosphorus Sunset Cruise from €35 — Golden Hour + Dinner',
    description: 'Bosphorus sunset cruise from Kabataş, 17:30 departure. Golden-hour palaces, dinner continues into illuminated night. 3 hours. Free cancellation, pay on boat. 11,317 reviews.'
  },

  hero: {
    h1: 'Bosphorus Sunset Cruise',
    subtitle: 'The magic hour on the Bosphorus — watch the sun set behind the minarets while you sail past Dolmabahçe, Ortaköy Mosque, and the Bosphorus Bridge as it lights up for the night.',
    badge: 'Golden Hour · 17:30 Departure · Best Photos'
  },

  intro: [
    'The **Bosphorus sunset cruise** captures Istanbul at its most photogenic. Board at 17:30, and within 20 minutes the sun begins dropping behind the European-side minarets — casting Dolmabahçe Palace in gold, turning the Bosphorus water copper, and silhouetting Ortaköy Mosque against the glowing sky. Every smartphone photo from this cruise looks like a professional shoot.',

    'Our **sunset Bosphorus cruise** includes a full Turkish dinner that starts during golden hour and continues as the bridges light up for the night. By the time dessert comes, you\'re sailing under the illuminated Bosphorus Bridge — 30 million lights reflecting on dark water. The transition from day to night, done in 3 hours, is the whole point.',

    'Whether you\'re a photographer chasing golden hour, a traveler who wants the best of both day and night, or a couple looking for that "Istanbul memory shot", this is the **Bosphorus sunset dinner cruise** locals recommend to visitors. 4.8★ rating, TÜRSAB-licensed, pay-on-boat, no prepayment.'
  ],

  highlights: [
    {
      icon: 'sunset',
      title: 'Peak golden hour — 17:30 departure',
      desc: 'Board at 17:30, sunset happens ~18:30 in summer / 17:00 in winter. The first 40 minutes of the cruise are the golden hour you chase. Camera ready — this is the shot.'
    },
    {
      icon: 'transition',
      title: 'Day-to-night transition included',
      desc: 'Not just sunset — we sail into twilight, then into the illuminated Bosphorus by night. You see 3 distinct light phases on one cruise: golden, blue hour, and fully lit night.'
    },
    {
      icon: 'dinner',
      title: 'Full dinner during the cruise',
      desc: '10 varieties of Turkish meze, warm appetizer, main course (salmon, sea bream, chicken, köfte, vegetarian), ice-cream cake. Same quality menu as the night cruise, served during sunset.'
    },
    {
      icon: 'landmarks',
      title: 'Dolmabahçe, Ortaköy, Bosphorus Bridge — all glowing',
      desc: 'Route passes Dolmabahçe Palace (golden at sunset), Ortaköy Mosque (silhouetted dome), Bosphorus Bridge (lighting up), Rumeli Fortress, Beylerbeyi Palace. Every landmark at its best light.'
    }
  ],

  faq: [
    {
      q: 'What time does the Bosphorus sunset cruise depart?',
      a: 'Boarding starts at 17:00, boat departs at 17:30, returns around 20:30. We time this so you\'re on the water exactly when the sun is setting — which varies slightly by season (18:30 in summer, 17:00 in winter). We adjust departure by 15-30 minutes seasonally to match.'
    },
    {
      q: 'Is the Bosphorus sunset cruise the same as the dinner cruise?',
      a: 'Similar but different time. Sunset cruise departs 17:30 with dinner served during the cruise (golden hour + early night). Dinner cruise departs 21:00 — after dark, pure night views. Same boat, same menu, same entertainment — just different lighting. Some guests do both on different days.'
    },
    {
      q: 'What\'s the price of the Bosphorus sunset cruise?',
      a: 'Standard sunset cruise from €35/person (3 hours, full dinner, live entertainment). VIP option available with stage-front seating and premium mezes at €55/person. Pay on the boat — no prepayment. Children 0-3 free, 4-8 half price.'
    },
    {
      q: 'Is the sunset cruise better than the dinner (night) cruise?',
      a: '"Better" depends on what you want. Sunset = best photos, golden light, slower pace, earlier evening. Night = most iconic lights (illuminated bridges), best entertainment, later dining. Photographers pick sunset. Date-night couples pick night. Families with kids often pick sunset (ends earlier).'
    },
    {
      q: 'What should I bring to a sunset cruise?',
      a: 'Smartphone or camera for photos (golden hour begs for it). Light jacket — the wind picks up at sunset and early evening can cool quickly on deck. Sunglasses for the first 30 minutes. Casual-smart attire — you\'re dining, but no strict dress code.'
    },
    {
      q: 'Can I stay on the sunset cruise to see the fully lit bridges at night?',
      a: 'The sunset cruise is 3 hours (17:30-20:30), so by the end you see the Bosphorus Bridge fully lit up and Maiden\'s Tower illuminated. If you want the PEAK night views (21:00-00:00 when all restaurants and monuments are fully lit), book the 21:00 dinner cruise instead. Best of both: book both on different nights.'
    },
    {
      q: 'What time does the sun set in Istanbul?',
      a: 'In summer (June–July), Istanbul sunsets are around 20:30–20:45. In winter, around 16:30–17:00. For a sunset-and-night experience, Bosphorus Night\'s 21:00 dinner cruise from Kabataş catches the late blue hour and the illuminated landmarks afterward.'
    },
    {
      q: 'Is the Bosphorus sunset cruise worth it?',
      a: 'Yes — sunset over the Bosphorus Bridge is one of Istanbul\'s signature views. Bosphorus Night\'s 21:00 dinner cruise (€{p.dinnerStd}/person) catches the post-sunset blue hour plus the illuminated palaces, with a full dinner and live shows over 3 hours.'
    }
  ],

  cta: {
    primary: 'Book Sunset Cruise · Pay on Boat',
    secondary: '17:30 departure · Sunset + dinner included · Free cancellation 2hrs before',
    tertiary: 'See Night Dinner Cruise (21:00)'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €35',
    duration: 'PT3H'
  }
};
