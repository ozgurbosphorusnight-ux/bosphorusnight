/**
 * Landing page content: last-minute-bosphorus
 * Target keyword: "last minute bosphorus" / "bosphorus cruise tonight"
 * Search intent: urgent same-day or last-minute booking needed
 */
module.exports = {
  slug: 'last-minute-bosphorus',
  keyword: 'Last-minute Bosphorus cruise',
  tourType: 'dinner',

  images: {
    hero: '/assets/tours/dinner/boat-night-bridge.jpg',
    og: '/assets/tours/dinner/dining-romantic.jpg',
    gallery: [
      '/assets/tours/dinner/boat-night-bridge.jpg',
      '/assets/tours/dinner/dining-romantic.jpg',
      '/assets/tours/dinner/hall-wide.jpg',
      '/assets/tours/dinner/folk-dance.jpg',
      '/assets/tours/dinner/whirling-dervish.jpg',
      '/assets/tours/dinner/waiter-service.jpg'
    ]
  },

  meta: {
    title: 'Last-Minute Bosphorus Cruise — Book for Tonight, Pay on Boat',
    description: 'Last-minute Bosphorus cruise booking for tonight. Same-day availability, pay on boat, no prepayment. WhatsApp confirmation in minutes. From €{p.dinnerStd}/person.'
  },

  hero: {
    h1: 'Last-Minute Bosphorus Cruise',
    subtitle: 'Tonight\'s availability, confirmed in minutes. No prepayment, no pre-printed voucher — just show up at the pier and enjoy the evening.',
    badge: 'Same-Day Booking · Confirmed in Minutes · Pay on Boat'
  },

  intro: [
    'Landed in Istanbul this afternoon and want a great evening tonight? The **last-minute Bosphorus cruise** works. We hold back seats for same-day bookings specifically because we know many travelers decide the morning-of. Fill the wizard here, we confirm via WhatsApp in minutes, you show up at Kabataş Pier at 20:00, pay on the boat, enjoy.',

    'Our **last-minute Bosphorus cruise** has the same evening itinerary as advance bookings: 3 hours on the water (21:00-00:00), multi-course Turkish dinner, live folklore show, whirling dervish, belly dance, DJ. Illuminated Dolmabahçe Palace, Ortaköy Mosque, Bosphorus Bridge — same iconic views. Same €{p.dinnerStd} Standard or €{p.dinnerVip} VIP price.',

    'Same-day cancellation is free up to 2 hours before departure, since **pay-on-boat** means you\'ve committed nothing yet. If you booked at 14:00 and change plans by 19:00, just message us — no refund, no issue. This is the **last-minute Istanbul cruise** flexibility travelers appreciate.'
  ],

  highlights: [
    {
      icon: 'tonight',
      title: 'Tonight\'s seats still available',
      desc: 'We hold back 5-10 seats daily for same-day bookings. Check the wizard above — real-time availability. If today\'s cruise is full, tomorrow\'s is usually wide open.'
    },
    {
      icon: 'fast',
      title: 'Confirmation in under 5 minutes',
      desc: 'Fill wizard → WhatsApp/Telegram/WeChat message with confirmation → done. No email voucher to wait for, no QR code to print. Our message is your ticket.'
    },
    {
      icon: 'pay',
      title: 'Zero payment until you\'re on the boat',
      desc: 'Pay on the boat, cash or card. If you don\'t show up (change plans, sick, weather), no charge. Free cancellation up to 2 hours before departure. Genuinely last-minute-friendly.'
    },
    {
      icon: 'transfer',
      title: 'Same-day hotel transfer often available',
      desc: 'Hotel transfer normally needs 24h notice, but for same-day bookings between 14:00-17:00 we can often arrange pickup for +€{p.transfer}/person. WhatsApp us for urgent transfer requests.'
    }
  ],

  faq: [
    {
      q: 'Can I really book a Bosphorus cruise for tonight?',
      a: 'Yes — often. We hold back seats for same-day bookings. Check the wizard above for tonight\'s availability. If seats are available, you can book until 18:00 (3 hours before departure). Weekends are tighter — book earlier in the day if possible.'
    },
    {
      q: 'How last-minute can I book?',
      a: 'Booking stays open until 18:00 for the 21:00 boat. After 18:00, WhatsApp us directly at +90 532 520 1700 — if seats are open, we can confirm manually. After 19:30 it\'s too tight unless you\'re already at Kabataş Pier and can board fast.'
    },
    {
      q: 'Is last-minute Bosphorus cruise more expensive?',
      a: 'No — same price as advance booking. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. We don\'t do "surge pricing" or last-minute premium. Same boat, same dinner, same show, same price.'
    },
    {
      q: 'What if tonight\'s cruise is fully booked?',
      a: 'Tomorrow\'s cruise is usually wide open — we run daily, 365 days a year. You can book tomorrow and still be "last-minute" in the sense that you just decided. Weekday cruises have more space than weekends.'
    },
    {
      q: 'Can you arrange last-minute hotel transfer?',
      a: 'Same-day transfer is possible until ~17:00 for 21:00 cruise. After 17:00, we may not have a driver free — in that case, you can take a taxi to Kabataş Pier (15 min from Taksim, 10 min from Sultanahmet, ~€10-15). Central and easy.'
    },
    {
      q: 'What if I\'m already at Kabataş and want to board?',
      a: 'If you\'re at the pier and there are open seats, you can walk up and board. WhatsApp us or ask the crew — if there\'s space we\'ll add you. Same pay-on-boat price. Called "walk-on" in cruise terms — works here.'
    }
  ],

  cta: {
    primary: 'Book Tonight · Pay on Boat',
    secondary: 'Same-day booking · Confirmed in minutes · Free cancellation 2hrs before',
    tertiary: 'WhatsApp for Urgent Bookings'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
