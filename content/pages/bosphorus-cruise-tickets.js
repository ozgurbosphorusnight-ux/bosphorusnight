/**
 * Landing page content: bosphorus-cruise-tickets
 * Target keyword: "bosphorus cruise tickets" (transactional intent)
 * Search intent: ready-to-buy travelers comparing ticket prices
 */
module.exports = {
  slug: 'bosphorus-cruise-tickets',
  keyword: 'Bosphorus cruise tickets',
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
      '/assets/tours/dinner/steak-wine.jpg'
    ]
  },

  meta: {
    title: 'Bosphorus Cruise Tickets from €{p.dinnerStd} — Pay on Boat, No Prepayment',
    description: 'Direct Bosphorus cruise tickets. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. No prepayment, pay on boat. Free cancellation up to 2 hours before. 11,317 traveler reviews.'
  },

  hero: {
    h1: 'Bosphorus Cruise Tickets',
    subtitle: 'Skip the middleman fees — book your Bosphorus cruise tickets directly with us. No prepayment, pay on the boat, free cancellation up to 2 hours before departure.',
    badge: 'Direct Booking · No Prepayment · 40% OFF'
  },

  intro: [
    'Looking for **Bosphorus cruise tickets**? Buy direct. Our tickets are €{p.dinnerStd} (Standard) or €{p.dinnerVip} (VIP) — 40% off the regular rate (€{p.dinnerStdOriginal} and €{p.dinnerVipOriginal}). Third-party booking sites typically add 20-40% commission. By booking direct, you save — and you can still pay on the boat.',

    'Our **Bosphorus cruise ticket** process: fill the wizard on this page in under 1 minute (date, guest count, package, contact), we confirm via WhatsApp / Telegram / WeChat instantly, you show up at Kabataş Pier at 20:00, pay on the boat, enjoy the 3-hour dinner cruise. No physical ticket to print, no voucher to email — the confirmation is your ticket.',

    'Whether you\'re booking tonight\'s dinner cruise or reserving for a specific date next week, **Bosphorus cruise tickets direct** is the fastest way. 4.8★ rated, TÜRSAB-licensed (A-17672), halal-certified menu, and supports hotel transfer and alcohol add-ons.'
  ],

  highlights: [
    {
      icon: 'direct',
      title: 'Direct booking — no middleman fees',
      desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Third-party sites charge €30-80+ for the same cruise. You save by booking directly with us. No hidden fees, no commission markup.'
    },
    {
      icon: 'pay',
      title: 'Pay on the boat — no prepayment',
      desc: 'Reserve your spot now, pay when you board. Cash or card accepted. If you cancel 2+ hours before departure, free. Zero financial risk in reserving early.'
    },
    {
      icon: 'fast',
      title: 'Confirmation in under 1 minute',
      desc: 'Fill wizard → we confirm via WhatsApp / Telegram / WeChat. No emailed PDF voucher to print. Our message is your ticket. Just show up at the pier at 20:00.'
    },
    {
      icon: 'discount',
      title: '40% OFF current launch price',
      desc: 'Standard was €{p.dinnerStdOriginal}, now €{p.dinnerStd}. VIP was €{p.dinnerVipOriginal}, now €{p.dinnerVip}. 40% off because you\'re booking direct. Not a time-limited gimmick — our standing direct-booking rate.'
    }
  ],

  faq: [
    {
      q: 'How much do Bosphorus cruise tickets cost?',
      a: 'Standard: €{p.dinnerStd}/person (regular €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/person (regular €{p.dinnerVipOriginal}). Includes 3-hour cruise, multi-course Turkish dinner, live folklore show, unlimited soft drinks. Kids 0-3 free, 4-8 at 50% off. Pay on boat — no prepayment.'
    },
    {
      q: 'Where can I buy Bosphorus cruise tickets?',
      a: 'Directly on this page — fill the booking wizard, we confirm instantly via WhatsApp / Telegram / WeChat. Pay on the boat. Third-party platforms (Viator, GetYourGuide, Klook) also sell tickets but typically charge €30-80+ — that\'s middleman markup. Direct is cheapest and fastest.'
    },
    {
      q: 'Do I need to print a Bosphorus cruise ticket?',
      a: 'No — no physical ticket or voucher needed. After you book, we send you a confirmation via WhatsApp (or Telegram/WeChat) with the meeting point, time, and your reservation name. Just show your phone at the pier. That\'s it.'
    },
    {
      q: 'Can I cancel or refund my Bosphorus cruise ticket?',
      a: 'Yes — free cancellation up to 2 hours before departure. Just message us via WhatsApp. Since you haven\'t paid yet (pay-on-boat), there\'s no refund needed — you just don\'t show up, no charge. Much more flexible than prepaid third-party tickets.'
    },
    {
      q: 'Are Bosphorus cruise tickets available on same day?',
      a: 'Often yes, especially on weekdays. Weekends and holidays fill up fast. Check availability via the booking wizard — we update in real-time. Same-day booking typically possible until a few hours before 21:00 departure. WhatsApp for urgent requests.'
    },
    {
      q: 'Are kids\' Bosphorus cruise tickets free?',
      a: 'Children **0-3 sail completely free** (no charge, no fee, including transfer). Ages **4-8 at 50% off** (€{p.dinnerStd}/2 = €12 on Standard). Ages **9+ full adult price**. Prices capped and transparent — no "infant surcharge" tricks.'
    }
  ],

  cta: {
    primary: 'Get Tickets · Pay on Boat',
    secondary: 'Direct booking · No prepayment · Free cancellation 2hrs before',
    tertiary: 'Check Availability'
  },

  schema: {
    type: 'TouristTrip',
    priceRange: 'from €{p.dinnerStd}',
    duration: 'PT3H'
  }
};
