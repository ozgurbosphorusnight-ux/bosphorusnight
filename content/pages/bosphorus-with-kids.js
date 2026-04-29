/**
 * Landing page content: bosphorus-with-kids
 * Target keyword: "bosphorus with kids" / "istanbul cruise for families"
 * Search intent: parents traveling with children who want a kid-friendly evening
 */
module.exports = {
  slug: 'bosphorus-with-kids',
  keyword: 'Bosphorus cruise with kids',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/waiter-service.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Cruise with Kids — Family Dinner Tour from €{p.dinnerStd}/adult',
    description: 'Family-friendly Bosphorus dinner cruise. Kids 0-3 free, 4-8 half price. Safe indoor seating, child-friendly menu. From €{p.dinnerStd}/adult. Free cancellation, pay on boat.'
  },

  hero: {
    h1: 'Bosphorus Cruise with Kids',
    subtitle: 'A family-friendly evening on the Bosphorus — designed for parents traveling with children who want dinner, entertainment, and a safe, relaxed atmosphere.',
    badge: 'Family-Friendly · Halal · Kids Free 0-3'
  },

  intro: [
    'The **Bosphorus cruise with kids** is Istanbul\'s most family-welcoming evening on the water. We carry dozens of families every night — and we\'ve designed every detail around making children comfortable: covered indoor seating so little ones stay warm, an accessible kids-friendly menu (plain grilled chicken, pasta, and unlimited soft drinks), and early boarding so you avoid late-night meltdowns.',

    'Unlike adult-only party boats, our **Bosphorus dinner cruise for families** keeps the atmosphere warm and inclusive. Children ages **0-3 sail free** (including the transfer), ages 4-8 get **50% off** the adult price, and 9+ are full-price but count as guests — no hidden fees. The live folklore show, belly dance, and whirling dervish are gentle family entertainment, not a nightclub.',

    'Whether you\'re visiting Istanbul for a long weekend with a toddler, or bringing teens on their first European trip, this is the cruise Istanbul families recommend. Safe, halal-certified, TÜRSAB-licensed, and rated 4.8★ by more than 11,317 travelers.'
  ],

  highlights: [
    {
      icon: 'kids',
      title: 'Kids 0-3 sail completely free',
      desc: 'No charge for infants or toddlers. Ages 4-8 get 50% off adult price. Full-size guests only from age 9. Transparent, no surprises.'
    },
    {
      icon: 'safety',
      title: 'Enclosed indoor seating',
      desc: 'Fully covered and heated in cooler months. Children stay warm, protected from wind. Open deck available when weather is calm — your choice.'
    },
    {
      icon: 'menu',
      title: 'Kid-friendly menu on request',
      desc: 'Plain grilled chicken, pasta, bread, and vegetables at no extra cost. Unlimited soft drinks (cola, juice, water). Notify us in advance — no surprise spicy mezes for little ones.'
    },
    {
      icon: 'entertainment',
      title: 'Family-safe entertainment',
      desc: 'Whirling Dervish (mesmerizing for kids), 5 traditional folk dances, live Turkish music, and a DJ set. All family-friendly — no adult-content performances. Children often join the dancing.'
    }
  ],

  faq: [
    {
      q: 'Is the Bosphorus cruise safe for young children?',
      a: 'Yes — our boat is fully TÜRSAB-licensed, has enclosed indoor seating with secure windows, life vests accessible for all sizes, and a professional crew experienced with families. We recommend the indoor deck for toddlers and the open deck for kids 6+.'
    },
    {
      q: 'What\'s the kids pricing for the Bosphorus cruise?',
      a: 'Children **0-3 years: FREE** (no charge, no fee). **4-8 years: 50% off** the adult price — so €{p.dinnerStd}/2 = €12 per child on the Standard cruise. **9+ years: full adult price.** Hotel transfer is free for ages 0-3 and standard (€{p.transfer}/person) for 4+.'
    },
    {
      q: 'Is there a kids menu on the cruise?',
      a: 'Yes — plain grilled chicken, pasta, bread, seasonal vegetables, and unlimited soft drinks. We can accommodate allergies or picky eaters on request. Tell us when you book and we\'ll prep something your child will happily eat.'
    },
    {
      q: 'Will the music or show be too loud for kids?',
      a: 'The live performances happen in one designated stage area — if your children are sensitive to noise, we can seat you at a quieter back table. The show is 40 minutes total, and the rest of the evening is ambient Turkish music and DJ at moderate volume.'
    },
    {
      q: 'What if my baby falls asleep during the cruise?',
      a: 'No problem — many do. The indoor seating has banquette-style sofas where a baby or toddler can comfortably nap. Ask our crew for a warm blanket if needed. No extra charge.'
    },
    {
      q: 'Do I need to bring a stroller onboard?',
      a: 'You can, but we recommend leaving bulky strollers at your hotel (or with our driver if you booked transfer — we\'ll keep it safe). Our boat has narrow corridors and the decks have steps. A light baby carrier is easier onboard.'
    }
  ],

  cta: {
    primary: 'Book Family Cruise · Pay on Boat',
    secondary: 'Free cancellation up to 2 hours before · No prepayment',
    tertiary: 'Check Tonight\'s Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
