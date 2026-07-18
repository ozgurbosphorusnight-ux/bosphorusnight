// ========== BOSPHORUS NIGHT — WEB CHAT WIDGET ==========
// Self-contained IIFE. Injects its own scoped CSS (no Tailwind purge issues),
// renders the launcher bubble + chat panel, talks to api.bosphorusnight.com.
// Design source of truth: chatbot-preview.html (approved prototype).
// All class names are prefixed "bnwc-", container id is "bnWebchat".
// NOTE: no template literals in this file (build-pipeline safety rule).
(function () {
  'use strict';
  if (window.__bnwcLoaded) return;
  window.__bnwcLoaded = true;

  var API = 'https://api.bosphorusnight.com';
  var MAPS_URL = 'https://maps.app.goo.gl/JB7cp4ZrV5Rh9a9L9';

  // Baked fallback config — used until /webchat/config answers (or if it never does).
  var cfg = {
    prices: {
      std: 24.30, stdOrig: 40.50, vip: 55.20, vipOrig: 92,
      alcohol2: 10, alcoholUnlimited: 25, transfer: 10
    },
    times: { boarding: '19:30', departure: '20:30', ret: '23:30' },
    wa_number: '905322442922',
    tg_bot: 'BosphorusnightReservation_Bot'
  };

  // ---------- EN fallback dictionary (keys mirror T["webchat.<key>"]) ----------
  var FALLBACK = {
    'greeting': 'Hi! Welcome to <b>Bosphorus Night</b>.\nAsk me anything about the cruise — or tap a topic below.',
    'placeholder': 'Ask me anything…',
    'header.status': 'AI assistant · replies instantly',
    'chip.prices': 'Prices',
    'chip.menu': 'Menu',
    'chip.time': 'Time',
    'chip.meeting': 'Meeting point',
    'chip.video': 'Video',
    'chip.transfer': 'Transfer',
    'chip.cancel': 'Cancellation',
    'chip.howto': 'How to book',
    'ans.prices': '<span class="bnwc-bt">Our current prices</span>\n• Standard Dinner Cruise — <b>€{stdPrice}</b> per person (normally €{stdOrig})\n• VIP Dinner Cruise — <b>€{vipPrice}</b> per person (normally €{vipOrig})\n\nChildren: 0–3 free · 4–8 half price · 9+ full price.\nNo prepayment — you pay on the boat.',
    'ans.menu': '<span class="bnwc-bt">Standard menu:</span> 10 cold mezes, hot starter, choice of main (salmon, sea bass, chicken or köfte), dessert with ice cream — unlimited soft drinks included.\n\n<span class="bnwc-bt">VIP menu:</span> 15+ premium mezes, rib-eye & beef tenderloin mains, stage-front table, VIP service.\n\nBoth include the full live show: whirling dervish, 5 folk dances, oriental show, live music & DJ.',
    'ans.time': '<span class="bnwc-bt">We sail every evening from Kabataş Pier.</span>\n• Boarding: from {boarding}\n• Departure: {departure}\n• Return: around {return}\n\nAbout 3 hours on the Bosphorus.',
    'ans.meeting': '<span class="bnwc-bt">Finding us is easy</span> — we\'re right at Kabataş Pier.\nThese short videos walk you there step by step:',
    'ans.trust': '<span class="bnwc-bt">You\'re in safe hands</span>\n• Licensed tour operator — TÜRSAB A-17672\n• 5.0★ on Google (69 reviews)\n• No prepayment — you pay on the boat, so booking is completely risk-free.',
    'ans.transfer': '<span class="bnwc-bt">Hotel transfer is €{transfer} per person.</span>\nIt depends on your hotel\'s location — to check if your hotel is covered, message us on WhatsApp or start a booking on the site and enter your hotel name; it checks your area instantly.\n\nIf transfer isn\'t available for your area, you can meet us directly at Kabataş Pier.',
    'ans.halal': 'Yes — our menu is Muslim-friendly.\nAll meat is halal, and alcohol is never served by default — it\'s only an optional extra for tables that request it. Unlimited soft drinks are included for everyone.',
    'ans.howto': 'Booking takes about a minute and there\'s <b>no prepayment</b> — you pay on the boat.\nTwo easy ways:',
    'ans.alcohol': 'Unlimited <b>soft drinks</b> are already included.\nAlcohol is an optional add-on:\n• 2 glasses — €{alc2} per person\n• Unlimited package — €{alcUnl} per person',
    'ans.kids': '<span class="bnwc-bt">Children pricing:</span>\n• 0–3 years — free\n• 4–8 years — 50% off\n• 9+ — full price',
    'ans.cancel': 'Plans change — no problem.\nCancellation is <b>free up to 2 hours before departure</b>, and since there\'s no prepayment, there\'s nothing to refund.',
    'ans.payment': 'There\'s <b>no prepayment and no deposit</b>.\nYou simply pay on the boat on the evening of your cruise.',
    'ans.video': 'Of course — here\'s our boat and the cruise atmosphere:',
    'ans.route': '<span class="bnwc-bt">About 3 hours on the Bosphorus:</span>\nDolmabahçe Palace → Çırağan → Ortaköy & Bosphorus Bridge → Bebek → Rumeli Fortress → Anadolu Hisarı → Beylerbeyi Palace → Kuzguncuk → Üsküdar → back to Kabataş.',
    'handoff.availability': 'For live availability, let me hand you to the team on WhatsApp — they\'ll confirm your date within minutes.',
    'handoff.special': 'That sounds special — our team arranges these personally. Message us on WhatsApp and we\'ll take care of everything.',
    'handoff.dietary': 'For allergies and special dietary requests, our team will arrange it personally — message us on WhatsApp.',
    'handoff.fallback': 'I can\'t answer that one from here — but the team on WhatsApp can. They usually reply within minutes.',
    'limit': 'I\'ve shared everything I know from here. For anything more, the team on WhatsApp has all the answers — and they reply fast.',
    'nudge': 'By the way — for anything detailed, WhatsApp is the fastest way to reach us.',
    'err': 'Connection hiccup — please try again or continue on WhatsApp.',
    'btn.wa': 'Continue on WhatsApp',
    'btn.tg': 'Continue on Telegram',
    'btn.book': 'Book online',
    'btn.bookSub': 'quick steps — finishes on WhatsApp',
    'btn.waDirect': 'WhatsApp directly',
    'btn.waDirectSub': 'chat with the team right away',
    'btn.tgName': 'Telegram',
    'btn.tgSub': 'if you prefer Telegram',
    'btn.maps': 'Open in Google Maps',
    'btn.mapsMeeting': 'Open meeting point in Google Maps',
    'btn.tram': 'From Kabataş tram station',
    'btn.dolma': 'From Dolmabahçe Palace',
    'btn.walkSub': 'short walking video',
    'btn.boatVideo': 'Watch the boat tour',
    'btn.showVideo': 'Live show highlights',
    'btn.playsSub': 'plays right here',
    'btn.reviews': 'Read our Google reviews',
    'btn.waHotel': 'Check my hotel on WhatsApp',
    'btn.bookCheck': 'Check while booking',
    'btn.waWeb': 'Open WhatsApp Web',
    'qr.scan': 'Scan with your phone camera or message us at',
    'aria.open': 'Chat with us',
    'aria.close': 'Close',
    'aria.send': 'Send'
  };

  // ---------- helpers ----------
  function getLang() {
    var l = window.__bnCurrentLang || document.documentElement.getAttribute('lang') || 'en';
    return String(l).toLowerCase();
  }

  // T is a top-level const on source pages (global binding, not on window);
  // built pages inline it as window.T. Support both.
  function tDict() {
    try { if (typeof T !== 'undefined' && T) return T; } catch (e) { /* ignore */ }
    return window.T || null;
  }

  function tx(key) {
    var dict = tDict();
    var entry = dict && dict['webchat.' + key];
    if (entry) {
      var lang = getLang();
      if (typeof entry[lang] === 'string') return entry[lang];
      if (typeof entry.en === 'string') return entry.en;
    }
    return FALLBACK[key] || '';
  }

  function fmtPrice(v) {
    if (typeof v === 'number') return (v % 1 === 0) ? String(v) : v.toFixed(2);
    return String(v == null ? '' : v);
  }

  function fmtTime(v) {
    var s = String(v == null ? '' : v);
    return /^\d{2}:\d{2}:\d{2}$/.test(s) ? s.slice(0, 5) : s;
  }

  function fmtTry(v) {
    var n = Number(v);
    try { return isFinite(n) ? n.toLocaleString('tr-TR') : String(v); } catch (e) { return String(v); }
  }

  // Fill {stdPrice} {boarding} … placeholders from live config (drift rule:
  // prices/times never hardcoded in translated strings).
  // TR sayfada sabit-TL fiyat gösterilir (mevzuat: kur/euro referanssız tek TL
  // rakamı) — '€{x}' kalıbı bütün olarak '₺…' ile değiştirilir; TL yoksa € kalır.
  function fill(text) {
    var p = cfg.prices, t = cfg.times, s = String(text);
    var tl = (getLang() === 'tr' && cfg.prices_try && cfg.prices_try.std != null) ? cfg.prices_try : null;
    var map = {
      stdPrice: 'std', stdOrig: 'stdOrig', vipPrice: 'vip', vipOrig: 'vipOrig',
      alc2: 'alcohol2', alcUnl: 'alcoholUnlimited', transfer: 'transfer'
    };
    Object.keys(map).forEach(function (ph) {
      var k = map[ph];
      var tlv = (tl && tl[k] != null) ? '₺' + fmtTry(tl[k]) : null;
      s = s.split('€{' + ph + '}').join(tlv || ('€' + fmtPrice(p[k])));
      s = s.split('{' + ph + '}').join(tlv || fmtPrice(p[k]));
    });
    return s
      .split('{boarding}').join(fmtTime(t.boarding))
      .split('{departure}').join(fmtTime(t.departure))
      .split('{return}').join(fmtTime(t.ret));
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent || '');
  }

  function track(name, params) {
    try { if (typeof window.bnTrack === 'function') window.bnTrack(name, params || {}); } catch (e) { /* ignore */ }
  }

  var _vid = null;
  function getVid() {
    if (_vid) return _vid;
    try {
      _vid = localStorage.getItem('bn_wc_visitor');
      if (!_vid) {
        _vid = (window.crypto && typeof crypto.randomUUID === 'function')
          ? crypto.randomUUID()
          : 'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
        localStorage.setItem('bn_wc_visitor', _vid);
      }
    } catch (e) {
      _vid = 'v-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 10);
    }
    return _vid;
  }

  // Same gclid source as main.js installWaRefTagger (bnGetAttribution →
  // localStorage bn_gclid gated by bn_gclid_ts 90-day TTL).
  function getAdRef() {
    try {
      if (typeof window.bnGetAttribution === 'function') {
        var a = window.bnGetAttribution();
        return (a && a.gclid) ? a.gclid : null;
      }
      var ts = parseInt(localStorage.getItem('bn_gclid_ts') || '0', 10);
      if (ts && (Date.now() - ts) < 90 * 24 * 60 * 60 * 1000) {
        return localStorage.getItem('bn_gclid') || null;
      }
    } catch (e) { /* ignore */ }
    return null;
  }

  // ---------- SVG assets (all inline, no emoji) ----------
  var SVG = {
    bubble: '<svg viewBox="0 0 24 24"><path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.5 1.2 4.7 3.2 6.3-.1.9-.5 2.2-1.5 3.4 0 0 2.4-.2 4.4-1.7 1.2.4 2.5.6 3.9.6 5.5 0 10-3.9 10-8.7S17.5 3 12 3zm-4.5 9.9c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm4.5 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm4.5 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>',
    wa: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.7-1.3 1.3-1.8 1.3-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.4 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.4z"/></svg>',
    tg: '<svg viewBox="0 0 24 24"><path d="M21.9 3.2L2.7 10.6c-.9.4-.9 1.6.1 1.9l4.9 1.5 1.9 5.9c.3.9 1.4 1 1.9.3l2.7-3.5 5 3.7c.8.6 1.9.2 2.1-.8l2.6-15c.2-1-.8-1.8-2-1.4zM8.5 13.5l9.5-6.9c.2-.2.5.1.3.3l-7.7 7.5-.3 3.2-1.8-4.1z"/></svg>',
    cal: '<svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M10 8.64v6.72L15.27 12 10 8.64zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>',
    map: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    star: '<svg viewBox="0 0 24 24"><path d="M12 17.3l6.2 3.7-1.6-7L22 9.2l-7.2-.6L12 2 9.2 8.6 2 9.2 7.4 14l-1.6 7z"/></svg>'
  };

  var CHIP_SVGS = {
    prices: '<svg viewBox="0 0 24 24"><path d="M21.4 11.6l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7c0 .5.2 1 .6 1.4l9 9a2 2 0 0 0 2.8 0l7-7a2 2 0 0 0 0-2.8zM6.5 8A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M11 2v7a2 2 0 0 1-2 2H8v11H6V11H5a2 2 0 0 1-2-2V2h2v5h1V2h2v5h1V2h2zm5 0c-1.7 0-3 1.6-3 3.5V13h2v9h2V2h-1z"/></svg>',
    time: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z"/></svg>',
    meeting: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    video: '<svg viewBox="0 0 24 24"><path d="M10 8.64v6.72L15.27 12 10 8.64zM12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/></svg>',
    transfer: '<svg viewBox="0 0 24 24"><path d="M4 16c0 .9.4 1.7 1 2.2V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.8c.6-.5 1-1.3 1-2.2V6c0-3.5-3.6-4-8-4s-8 .5-8 4v10zm3.5 1A1.5 1.5 0 1 1 9 15.5 1.5 1.5 0 0 1 7.5 17zm9 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zM18 11H6V6h12v5z"/></svg>',
    howto: '<svg viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z"/></svg>',
    cancel: '<svg viewBox="0 0 24 24"><path d="M12 2l8 3v6c0 5-3.5 9.4-8 11-4.5-1.6-8-6-8-11V5l8-3zm-1.2 13.4l5.6-5.6-1.4-1.4-4.2 4.2-1.8-1.8-1.4 1.4 3.2 3.2z"/></svg>'
  };

  var CHIP_ORDER = ['prices', 'menu', 'time', 'meeting', 'video', 'transfer', 'cancel', 'howto'];

  // ---------- scoped CSS ----------
  var CSS = [
    '#bnWebchat{font-family:"Inter",sans-serif}',
    '#bnWebchat,#bnWebchat *{box-sizing:border-box}',
    // altın HAP launcher — WhatsApp hapının dengi (18 Tem istek): ikon + "AI asistanı"
    // yazısı + çevrimiçi noktası; yumuşak ışıma nabzı dikkat çeker, premium bozulmaz
    '.bnwc-bubble{position:fixed;right:18px;bottom:84px;z-index:54;height:46px;border-radius:999px;cursor:pointer;border:none;background:linear-gradient(135deg,#c9a84c,#d4b86a);display:flex;align-items:center;gap:9px;padding:5px 16px 5px 5px;box-shadow:0 6px 24px rgba(201,168,76,.45);transition:transform .2s;animation:bnwcGlow 3s ease-in-out infinite}',
    '.bnwc-bubble:hover{transform:scale(1.05)}',
    '.bnwc-bico{width:36px;height:36px;border-radius:50%;background:#0d1428;display:flex;align-items:center;justify-content:center;flex-shrink:0}',
    '.bnwc-bico svg{width:19px;height:19px;fill:#d4b86a}',
    '.bnwc-blabel{display:flex;align-items:center;gap:6px;color:#0b1120;font-weight:700;font-size:13px;white-space:nowrap;letter-spacing:.2px}',
    '.bnwc-bdot{width:7px;height:7px;border-radius:50%;background:#22b95c;box-shadow:0 0 0 0 rgba(34,185,92,.55);animation:bnwcDotPulse 2s infinite;flex-shrink:0}',
    '@keyframes bnwcGlow{0%,100%{box-shadow:0 6px 24px rgba(201,168,76,.4)}50%{box-shadow:0 6px 32px rgba(201,168,76,.75)}}',
    '@keyframes bnwcDotPulse{0%{box-shadow:0 0 0 0 rgba(34,185,92,.55)}70%{box-shadow:0 0 0 6px rgba(34,185,92,0)}100%{box-shadow:0 0 0 0 rgba(34,185,92,0)}}',
    '@keyframes bnwcPulse{0%{transform:scale(1);opacity:.7}70%{transform:scale(1.35);opacity:0}100%{opacity:0}}',
    '.bnwc-bubble.bnwc-hidden{display:none}',
    '.bnwc-panel{position:fixed;right:18px;bottom:84px;z-index:58;width:380px;max-width:calc(100vw - 36px);height:560px;max-height:calc(100vh - 108px);max-height:calc(100dvh - 108px);background:linear-gradient(180deg,#0d1428 0%,#0a0f1e 100%);border:1px solid rgba(201,168,76,.35);border-radius:18px;display:none;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.6);color:#e8e6df}',
    '.bnwc-panel.bnwc-open{display:flex;animation:bnwcUp .25s ease-out}',
    '@keyframes bnwcUp{from{transform:translateY(24px);opacity:0}to{transform:translateY(0);opacity:1}}',
    '.bnwc-head{display:flex;align-items:center;gap:12px;padding:14px 16px;background:linear-gradient(135deg,rgba(201,168,76,.16),rgba(201,168,76,.05));border-bottom:1px solid rgba(201,168,76,.25)}',
    // koyu zemin + altın çerçeve — altın logo altın zeminde kayboluyordu (18 Tem)
    '.bnwc-avatar{width:40px;height:40px;border-radius:50%;background:#0d1428;border:1.5px solid rgba(201,168,76,.7);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden}',
    '.bnwc-avatar img{width:30px;height:auto;display:block;filter:drop-shadow(0 0 4px rgba(201,168,76,.5))}',
    // mobil tam ekranda üstteki kayan bar (#topBar z-60) sohbetin üstüne binmesin
    'body.bnwc-lock #topBar{display:none}',
    '.bnwc-head-t{flex:1;min-width:0}',
    '.bnwc-head-t b{display:block;font-family:"Playfair Display",serif;font-size:15px;color:#fff;letter-spacing:.5px}',
    '.bnwc-head-t span{font-size:11px;color:rgba(232,230,223,.55);display:flex;align-items:center;gap:5px}',
    '.bnwc-dot{width:7px;height:7px;border-radius:50%;background:#3ddc84;display:inline-block;flex-shrink:0}',
    // altın yuvarlak X — koyu başlıkta belirgin kapatma hedefi (18 Tem istek)
    '.bnwc-close{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#c9a84c,#d4b86a);border:none;color:#0b1120;font-size:19px;font-weight:700;cursor:pointer;padding:0;line-height:1;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.35)}',
    '.bnwc-close:hover{background:linear-gradient(135deg,#d4b86a,#e2c87e)}',
    '.bnwc-msgs{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:16px 14px;display:flex;flex-direction:column;gap:10px;scrollbar-width:thin;scrollbar-color:rgba(201,168,76,.3) transparent}',
    '.bnwc-m{max-width:85%;padding:10px 13px;border-radius:14px;font-size:13.5px;line-height:1.55;white-space:pre-line;animation:bnwcUp .2s ease-out}',
    '.bnwc-m.bnwc-bot{align-self:flex-start;background:rgba(21,34,64,.7);border:1px solid rgba(201,168,76,.15);border-bottom-left-radius:4px;color:#e8e6df}',
    '.bnwc-m.bnwc-user{align-self:flex-end;background:linear-gradient(135deg,rgba(201,168,76,.9),rgba(212,184,106,.9));color:#0b1120;font-weight:500;border-bottom-right-radius:4px}',
    '.bnwc-m .bnwc-bt{color:#d4b86a;font-weight:600}',
    '.bnwc-typing{align-self:flex-start;background:rgba(21,34,64,.7);border:1px solid rgba(201,168,76,.15);border-radius:14px;border-bottom-left-radius:4px;padding:12px 16px;display:flex;gap:5px}',
    '.bnwc-typing i{width:6px;height:6px;border-radius:50%;background:#c9a84c;animation:bnwcBlink 1.2s infinite}',
    '.bnwc-typing i:nth-child(2){animation-delay:.2s}.bnwc-typing i:nth-child(3){animation-delay:.4s}',
    '@keyframes bnwcBlink{0%,60%,100%{opacity:.25}30%{opacity:1}}',
    '.bnwc-actions{display:flex;flex-direction:column;gap:7px;margin-top:4px;align-self:flex-start;max-width:85%}',
    '.bnwc-act{display:flex;align-items:center;gap:8px;border-radius:10px;padding:10px 14px;font-size:13px;font-weight:600;cursor:pointer;border:none;text-decoration:none;transition:transform .15s;font-family:inherit;text-align:left}',
    '.bnwc-act:hover{transform:translateY(-1px)}',
    '.bnwc-act.bnwc-wa{background:#25D366;color:#fff}',
    '.bnwc-act.bnwc-gold{background:linear-gradient(135deg,#c9a84c,#d4b86a);color:#0b1120}',
    '.bnwc-act.bnwc-yt{background:#c4302b;color:#fff}',
    '.bnwc-act.bnwc-map{background:#3a7ca8;color:#fff}',
    '.bnwc-act.bnwc-tg{background:#26A5E4;color:#fff}',
    '.bnwc-act svg{width:17px;height:17px;fill:currentColor;flex-shrink:0}',
    '.bnwc-act .bnwc-lb{display:flex;flex-direction:column;align-items:flex-start;line-height:1.25;text-align:left}',
    '.bnwc-act .bnwc-lb i{font-style:normal;font-weight:400;font-size:10.5px;opacity:.8}',
    '.bnwc-chips{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px 4px;border-top:1px solid rgba(201,168,76,.12)}',
    '.bnwc-chip{display:inline-flex;align-items:center;gap:6px;background:rgba(201,168,76,.1);border:1px solid rgba(201,168,76,.35);color:#d4b86a;font-size:12px;font-weight:500;padding:6px 12px;border-radius:999px;cursor:pointer;transition:all .15s;font-family:inherit;white-space:nowrap}',
    '.bnwc-chip svg{width:13px;height:13px;fill:currentColor;flex-shrink:0}',
    '.bnwc-chip:hover{background:rgba(201,168,76,.25);color:#fff}',
    '.bnwc-inputrow{display:flex;gap:8px;padding:10px 14px 14px}',
    '.bnwc-input{flex:1;min-width:0;background:rgba(21,34,64,.6);border:1px solid rgba(201,168,76,.25);border-radius:999px;padding:11px 16px;color:#e8e6df;font-size:13.5px;outline:none;font-family:inherit}',
    '.bnwc-input:focus{border-color:rgba(201,168,76,.6)}',
    '.bnwc-input::placeholder{color:rgba(232,230,223,.35)}',
    '.bnwc-send{width:42px;height:42px;border-radius:50%;border:none;background:linear-gradient(135deg,#c9a84c,#d4b86a);cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0}',
    '.bnwc-send svg{width:18px;height:18px;fill:#0b1120}',
    '.bnwc-send:disabled{opacity:.4;cursor:default}',
    '.bnwc-qrcard{display:flex;align-items:center;gap:12px;background:#fff;border-radius:12px;padding:10px 12px;align-self:flex-start;max-width:85%;animation:bnwcUp .2s ease-out}',
    '.bnwc-qrcard img{width:96px;height:96px;display:block}',
    '.bnwc-qt{color:#0b1120;font-size:12px;line-height:1.55}',
    '.bnwc-qt b{font-size:13.5px;user-select:all}',
    '.bnwc-qt a{color:#128C7E;font-weight:600;text-decoration:underline}',
    // video kartı — thumbnail + play + başlık (konum-atar-gibi görsel dil)
    // flex-shrink:0 ŞART — msgs kaydırmalı flex sütunu, taşınca kartları eziyordu
    // (18 Tem "ince çizgi" bug'ının gerçek kökü)
    '.bnwc-vcard{position:relative;display:block;flex-shrink:0;width:min(85%,300px);border-radius:12px;overflow:hidden;cursor:pointer;border:1px solid rgba(201,168,76,.3);background:#000;padding:0;text-align:left;animation:bnwcUp .2s ease-out}',
    // padding-top oran tekniği: thumbnail yüklenmese bile kart 16:9 formunu korur
    // (span inline çökmesi + görsel engellenmesi 18 Tem "ince çizgi" bug'ı)
    '.bnwc-vthumb{display:block;padding-top:56.25%;background-color:#0d1428;background-size:cover;background-position:center;opacity:.9}',
    '.bnwc-vplay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}',
    '.bnwc-vplay svg{width:44px;height:44px;fill:#fff;opacity:.95}',
    '.bnwc-vt{position:absolute;left:0;right:0;bottom:0;padding:16px 10px 7px;background:linear-gradient(transparent,rgba(0,0,0,.8));color:#fff;font-size:12px}',
    // konum kartı — mesajlaşma uygulamalarındaki "konum at" görünümü (tamamı bizim CSS/SVG)
    '.bnwc-loccard{display:block;flex-shrink:0;width:min(85%,300px);border-radius:12px;overflow:hidden;border:1px solid rgba(201,168,76,.3);cursor:pointer;background:#12203c;padding:0;text-align:left;text-decoration:none;animation:bnwcUp .2s ease-out}',
    '.bnwc-locmap{position:relative;display:block;height:100px;background:linear-gradient(65deg,transparent 44%,rgba(127,178,217,.22) 47%,rgba(127,178,217,.22) 53%,transparent 56%),repeating-linear-gradient(90deg,rgba(255,255,255,.045) 0 1px,transparent 1px 34px),repeating-linear-gradient(0deg,rgba(255,255,255,.045) 0 1px,transparent 1px 34px),linear-gradient(135deg,#16294a,#1b3358)}',
    '.bnwc-locdot{position:absolute;left:50%;top:56%;width:36px;height:12px;transform:translate(-50%,0);background:radial-gradient(ellipse,rgba(201,168,76,.4),transparent 70%)}',
    '.bnwc-locpin{position:absolute;left:50%;top:50%;transform:translate(-50%,-85%)}',
    '.bnwc-locpin svg{width:34px;height:34px;fill:#c9a84c;filter:drop-shadow(0 3px 5px rgba(0,0,0,.5))}',
    '.bnwc-locinfo{display:block;padding:9px 12px;font-size:12.5px;line-height:1.5;color:#e8e6df}',
    '.bnwc-locinfo b{display:block;color:#fff}',
    '.bnwc-locinfo span{color:#7fb2d9;font-size:11.5px}',
    '.bnwc-qrcard.bnwc-qrtg .bnwc-qt a{color:#26A5E4}',
    '@media (min-width:1024px){',
    '.bnwc-bubble{right:calc(320px + 24px);bottom:18px}',
    '.bnwc-panel{right:calc(320px + 24px);bottom:18px;max-height:calc(100vh - 40px);max-height:calc(100dvh - 40px)}',
    '}',
    '@media (max-width:640px){',
    // WhatsApp hapıyla (bottom-20=80px) aynı hiza, daha kompakt — üst üste binmesin
    '.bnwc-bubble{height:40px;right:10px;bottom:80px;padding:4px 11px 4px 4px;gap:7px}',
    '.bnwc-bico{width:30px;height:30px}',
    '.bnwc-bico svg{width:16px;height:16px}',
    '.bnwc-blabel{font-size:11.5px}',
    '.bnwc-panel{right:0;bottom:0;left:0;top:0;width:100%;max-width:100%;height:100vh;height:100dvh;max-height:100vh;max-height:100dvh;border-radius:0;border:none}',
    '.bnwc-panel.bnwc-open{animation:bnwcSheet .3s ease-out}',
    '.bnwc-head{padding-top:calc(14px + env(safe-area-inset-top))}',
    '.bnwc-inputrow{padding:10px 12px calc(12px + env(safe-area-inset-bottom))}',
    '.bnwc-m{font-size:15px}',
    '.bnwc-input{font-size:16px}', // <16px iOS'ta odaklanınca zoom yapar
    'body.bnwc-lock{overflow:hidden;position:fixed;inset:0;width:100%}',
    '.bnwc-qrcard{display:none}', // telefon kendi ekranını okutamaz — QR sadece masaüstünde
    '}',
    '@keyframes bnwcSheet{from{transform:translateY(100%)}to{transform:translateY(0)}}',
    // çok dar ekran: yazı gizlenir, hap yuvarlağa döner — WA hapıyla asla çakışmaz
    '@media (max-width:379px){.bnwc-blabel{display:none}.bnwc-bubble{padding:4px}}',
    // Ayna modu: WA hapı SAĞDAYSA (RTL landing'ler) widget sola geçer.
    // Blanket [dir=rtl] DEĞİL — ar ana sayfada WA solda kalıyor (build farkı),
    // o yüzden karar runtime'da WA hapının gerçek konumuna bakılarak verilir.
    '.bnwc-mirror .bnwc-bubble{right:auto;left:14px}',
    '.bnwc-mirror .bnwc-panel{right:auto;left:14px}'
  ].join('\n');

  // ---------- state ----------
  var state = {
    greeted: false,
    after: null,          // poll cursor (ISO)
    seen: {},             // delivered poll message ids
    pollTimer: null,
    pollInFlight: false,
    cfgLoaded: false,
    lockScrollY: 0,
    locked: false
  };

  var els = {}; // container, bubble, panel, msgs, chips, input, send

  // ---------- config ----------
  function applyConfig(d) {
    try {
      if (d.prices) {
        var p = d.prices;
        if (p.std != null) cfg.prices.std = p.std;
        if (p.stdOrig != null) cfg.prices.stdOrig = p.stdOrig;
        if (p.vip != null) cfg.prices.vip = p.vip;
        if (p.vipOrig != null) cfg.prices.vipOrig = p.vipOrig;
        if (p.alcohol2 != null) cfg.prices.alcohol2 = p.alcohol2;
        if (p.alcoholUnlimited != null) cfg.prices.alcoholUnlimited = p.alcoholUnlimited;
        if (p.transfer != null) cfg.prices.transfer = p.transfer;
      }
      if (d.times) {
        if (d.times.boarding) cfg.times.boarding = d.times.boarding;
        if (d.times.departure) cfg.times.departure = d.times.departure;
        if (d.times['return']) cfg.times.ret = d.times['return'];
      }
      if (d.wa_number) cfg.wa_number = d.wa_number;
      if (d.tg_bot) cfg.tg_bot = d.tg_bot;
      if (d.prices_try && d.prices_try.std != null) cfg.prices_try = d.prices_try;
    } catch (e) { /* keep baked fallback */ }
  }

  function loadConfig() {
    if (state.cfgLoaded) return;
    state.cfgLoaded = true;
    try {
      var raw = sessionStorage.getItem('bn_wc_config_v2');
      if (raw) {
        var c = JSON.parse(raw);
        if (c && c.t && (Date.now() - c.t) < 3600000 && c.data) { applyConfig(c.data); return; }
      }
    } catch (e) { /* ignore */ }
    fetch(API + '/webchat/config')
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d && d.ok) {
          applyConfig(d);
          try { sessionStorage.setItem('bn_wc_config_v2', JSON.stringify({ t: Date.now(), data: d })); } catch (e) { /* ignore */ }
        }
      })
      .catch(function () { /* baked fallback stays */ });
  }

  // ---------- message rendering ----------
  function scrollDown() { els.msgs.scrollTop = els.msgs.scrollHeight; }

  function addMsg(cls, html) {
    var d = document.createElement('div');
    d.className = 'bnwc-m ' + cls;
    d.innerHTML = html;
    els.msgs.appendChild(d);
    scrollDown();
  }

  function userSay(text) { addMsg('bnwc-user', escapeHtml(text)); }
  function botSayHtml(html) { addMsg('bnwc-bot', html); }           // trusted (our own copy)
  function botSayText(text) { addMsg('bnwc-bot', escapeHtml(text)); } // untrusted (server/user)

  function showTyping() {
    if (els.typing) return;
    var t = document.createElement('div');
    t.className = 'bnwc-typing';
    t.innerHTML = '<i></i><i></i><i></i>';
    els.msgs.appendChild(t);
    els.typing = t;
    scrollDown();
  }

  function hideTyping() {
    if (els.typing) { els.typing.remove(); els.typing = null; }
  }

  function renderActions(list) {
    var wrap = document.createElement('div');
    wrap.className = 'bnwc-actions';
    list.forEach(function (ac) {
      var el = document.createElement(ac.kind === 'link' ? 'a' : 'button');
      el.className = 'bnwc-act ' + ac.cls;
      var inner = ac.svg + '<span class="bnwc-lb">' + ac.label;
      if (ac.sub) inner += '<i>' + ac.sub + '</i>';
      inner += '</span>';
      el.innerHTML = inner;
      if (ac.kind === 'link') {
        el.href = ac.href;
        el.target = '_blank';
        el.rel = 'noopener';
      } else {
        el.type = 'button';
        if (ac.kind === 'yt') el.addEventListener('click', function () { playVideo(ac.yt); });
        else if (ac.kind === 'wa') el.addEventListener('click', function () { doHandoff('whatsapp'); });
        else if (ac.kind === 'tg') el.addEventListener('click', function () { doHandoff('telegram'); });
        else if (ac.kind === 'book') el.addEventListener('click', bookOnline);
      }
      wrap.appendChild(el);
    });
    els.msgs.appendChild(wrap);
    scrollDown();
  }

  function handoffButtons() {
    renderActions([
      { kind: 'wa', cls: 'bnwc-wa', svg: SVG.wa, label: tx('btn.wa') },
      { kind: 'tg', cls: 'bnwc-tg', svg: SVG.tg, label: tx('btn.tg') }
    ]);
  }

  // QR card — desktop only (CSS hides it on mobile). Real wa.me <a> lives ONLY
  // here; it carries data-bnwc-exempt and is exempted in main.js's WA modal.
  function showQrCard(waUrl) {
    var lang = getLang();
    var card = document.createElement('div');
    card.className = 'bnwc-qrcard';
    var img = document.createElement('img');
    img.alt = 'WhatsApp QR';
    img.addEventListener('error', function onErr() {
      img.removeEventListener('error', onErr);
      img.src = '/assets/images/wa-qr-en.svg';
    });
    img.src = '/assets/images/wa-qr-' + lang + '.svg';
    var txt = document.createElement('div');
    txt.className = 'bnwc-qt';
    txt.innerHTML = tx('qr.scan') + '<br><b>+90 532 244 29 22</b>';
    if (waUrl) {
      var link = document.createElement('a');
      link.href = waUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.setAttribute('data-bnwc-exempt', '');
      link.textContent = tx('btn.waWeb');
      txt.appendChild(document.createElement('br'));
      txt.appendChild(link);
    }
    card.appendChild(img);
    card.appendChild(txt);
    els.msgs.appendChild(card);
    scrollDown();
  }

  // Telegram masaüstü QR kartı — WA kartıyla aynı görsel dil (18 Tem istek).
  // QR statik bot linkini kodlar; #WC kodu ALTTAKİ linkte taşınır.
  function showTgQrCard(tgUrl) {
    var card = document.createElement('div');
    card.className = 'bnwc-qrcard bnwc-qrtg';
    var img = document.createElement('img');
    img.alt = 'Telegram QR';
    img.src = '/assets/images/tg-qr.svg';
    var txt = document.createElement('div');
    txt.className = 'bnwc-qt';
    txt.innerHTML = tx('qr.scan') + '<br><b>@' + escapeHtml(cfg.tg_bot) + '</b>';
    if (tgUrl) {
      var link = document.createElement('a');
      link.href = tgUrl;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'Telegram Web';
      txt.appendChild(document.createElement('br'));
      txt.appendChild(link);
    }
    card.appendChild(img);
    card.appendChild(txt);
    els.msgs.appendChild(card);
    scrollDown();
  }

  // ---------- zengin kartlar (konum-atar-gibi görünüm; tamamı kendi CSS/SVG'miz) ----------
  function renderVideoCard(id, title) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'bnwc-vcard';
    b.setAttribute('aria-label', title);
    b.innerHTML =
      '<span class="bnwc-vthumb" style="background-image:url(https://i.ytimg.com/vi/' + id + '/hqdefault.jpg)"></span>' +
      '<span class="bnwc-vplay">' + SVG.play + '</span>' +
      '<span class="bnwc-vt">' + escapeHtml(title) + '</span>';
    b.addEventListener('click', function () { playVideo(id); });
    els.msgs.appendChild(b);
    scrollDown();
  }

  function renderChannelRow() {
    renderActions([
      { kind: 'link', cls: 'bnwc-yt', svg: SVG.play, label: '@BosphorusNightTour', sub: 'YouTube', href: 'https://www.youtube.com/@BosphorusNightTour' }
    ]);
  }

  function renderLocationCard() {
    var a = document.createElement('a');
    a.className = 'bnwc-loccard';
    a.href = MAPS_URL;
    a.target = '_blank';
    a.rel = 'noopener';
    a.innerHTML =
      '<span class="bnwc-locmap"><span class="bnwc-locdot"></span><span class="bnwc-locpin">' + SVG.map + '</span></span>' +
      '<span class="bnwc-locinfo"><b>Kabataş İskelesi</b>Kabataş, Beyoğlu — İstanbul<br><span>' + escapeHtml(tx('btn.maps')) + '</span></span>';
    els.msgs.appendChild(a);
    scrollDown();
  }

  // ---------- chip answers (fully client-side, zero API) ----------
  function actionsFor(key) {
    switch (key) {
      case 'time':
        return [{ kind: 'link', cls: 'bnwc-map', svg: SVG.map, label: tx('btn.mapsMeeting'), href: MAPS_URL }];
      case 'transfer':
        return [
          { kind: 'wa', cls: 'bnwc-wa', svg: SVG.wa, label: tx('btn.waHotel') },
          { kind: 'tg', cls: 'bnwc-tg', svg: SVG.tg, label: tx('btn.tgName'), sub: tx('btn.tgSub') },
          { kind: 'book', cls: 'bnwc-gold', svg: SVG.cal, label: tx('btn.bookCheck') }
        ];
      case 'howto':
        return [
          { kind: 'book', cls: 'bnwc-gold', svg: SVG.cal, label: tx('btn.book'), sub: tx('btn.bookSub') },
          { kind: 'wa', cls: 'bnwc-wa', svg: SVG.wa, label: tx('btn.waDirect'), sub: tx('btn.waDirectSub') },
          { kind: 'tg', cls: 'bnwc-tg', svg: SVG.tg, label: tx('btn.tgName'), sub: tx('btn.tgSub') }
        ];
      default:
        return null;
    }
  }

  function chipClick(key) {
    userSay(tx('chip.' + key));
    showTyping();
    setTimeout(function () {
      hideTyping();
      var html = fill(tx('ans.' + key));
      botSayHtml(html);
      if (key === 'meeting') {
        // adres + konum kartı + yürüyüş videoları (thumbnail'li)
        renderLocationCard();
        renderVideoCard('ybAIn2RhwJs', tx('btn.tram'));
        renderVideoCard('UcQ3qgyADc4', tx('btn.dolma'));
      } else if (key === 'video') {
        renderVideoCard('M1wKCgj2O_M', tx('btn.boatVideo'));
        renderVideoCard('zzDJ7xoXnuc', tx('btn.showVideo'));
        renderChannelRow();
      } else {
        var acts = actionsFor(key);
        if (acts) renderActions(acts);
      }
      logChip(key, html);
    }, 500);
  }

  // Chip tıklamasını panele logla — Özgür konuşmada "neye bastı, ne gördü" görür.
  // Fire-and-forget; LLM'e gitmez, limit sayacına girmez.
  function logChip(key, html) {
    try {
      var plain = String(html).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
      fetch(API + '/webchat/event', {
        method: 'POST',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          visitor_id: getVid(),
          label: tx('chip.' + key),
          shown_text: plain,
          lang: getLang(),
          page: location.pathname
        })
      }).catch(function () { /* sessiz */ });
    } catch (e) { /* sessiz */ }
  }

  // ---------- video (reuse site lightbox, never our own) ----------
  function playVideo(id) {
    if (typeof window.openVideoLightbox === 'function') {
      window.openVideoLightbox(id);
    } else {
      window.open('https://www.youtube.com/watch?v=' + id, '_blank');
    }
  }

  // ---------- wizard handoff ----------
  function bookOnline() {
    track('webchat_book_online');
    closePanel();
    if (typeof window.openMobilePanel === 'function') {
      window.openMobilePanel();
    } else {
      window.location.href = '#book';
    }
  }

  // ---------- WhatsApp / Telegram handoff ----------
  function doHandoff(target) {
    track('webchat_handoff_' + target);
    var fallbackUrl = (target === 'whatsapp')
      ? 'https://wa.me/' + cfg.wa_number
      : 'https://t.me/' + cfg.tg_bot;
    var goFallback = function () {
      if (isMobile()) window.location.href = fallbackUrl;
      else if (target === 'whatsapp') showQrCard(fallbackUrl);
      else showTgQrCard(fallbackUrl);
    };
    fetch(API + '/webchat/handoff', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor_id: getVid(),
        target: target,
        lang: getLang(),
        ad_ref: getAdRef()
      })
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (!d || !d.ok) { goFallback(); return; }
        if (target === 'whatsapp') {
          if (isMobile()) window.location.href = d.wa_url;
          else showQrCard(d.wa_url); // masaüstü: QR kartı + numara + WhatsApp Web linki
        } else {
          if (isMobile()) window.location.href = d.tg_url;
          else showTgQrCard(d.tg_url); // masaüstü: TG QR kartı (#WC kodu linkte)
        }
      })
      .catch(goFallback);
  }

  // ---------- free text → backend ----------
  function sendFree() {
    var text = els.input.value.trim();
    if (!text) return;
    els.input.value = '';
    userSay(text);
    track('webchat_message');
    showTyping();
    fetch(API + '/webchat/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitor_id: getVid(),
        message: text,
        lang: getLang(),
        page: window.location.pathname
      })
    })
      .then(function (r) {
        return r.json()
          .then(function (data) { return { status: r.status, data: data }; })
          .catch(function () { return { status: r.status, data: null }; });
      })
      .then(function (res) {
        hideTyping();
        var d = res.data;
        if (res.status === 200 && d && d.ok) {
          if (d.queued && d.human_handling) {
            // İnsan devralmış: cevap poll'dan gelecek — balon basma, typing sürdürme.
            return;
          }
          // Direct reply — poll cursor'ı ileri al ki aynı cevap poll'dan tekrar
          // düşmesin. SUNUCU zaman damgası öncelikli (istemci saati geriyse
          // yankı oluyordu — 18 Tem çift-mesaj bug'ı).
          state.after = d.reply_at || new Date().toISOString();
          // Sunucu canned kart istedi (örn. yazıyla "rezervasyon yapmak istiyorum")
          // → pin ile birebir aynı görünüm: metin + wizard/WA/TG butonları.
          if (d.canned === 'howto') {
            botSayHtml(fill(tx('ans.howto')));
            var howtoActs = actionsFor('howto');
            if (howtoActs) renderActions(howtoActs);
            return;
          }
          if (d.reply) botSayText(d.reply);
          if (d.suggest === 'handoff') handoffButtons();
          return;
        }
        // 429 / ok:false — sunucunun mesajını bas (yoksa genel hata) + devir butonları.
        botSayText((d && d.reply) ? d.reply : fill(tx('err')));
        handoffButtons();
      })
      .catch(function () {
        hideTyping();
        botSayText(fill(tx('err')));
        handoffButtons();
      });
  }

  // ---------- poll (human takeover replies) ----------
  function pollOnce() {
    if (state.pollInFlight || !state.after) return;
    state.pollInFlight = true;
    fetch(API + '/webchat/poll?visitor_id=' + encodeURIComponent(getVid()) + '&after=' + encodeURIComponent(state.after))
      .then(function (r) { return r.json(); })
      .then(function (d) {
        state.pollInFlight = false;
        if (!d || !d.ok || !d.messages || !d.messages.length) return;
        d.messages.forEach(function (m) {
          if (!m || m.id == null || state.seen[m.id]) return;
          state.seen[m.id] = true;
          // 'human' ve 'ai' aynı bot balonu stiliyle basılır (başlıkta fark yok).
          if (m.content) botSayText(m.content);
          if (m.created_at && m.created_at > state.after) state.after = m.created_at;
        });
      })
      .catch(function () { state.pollInFlight = false; });
  }

  function startPoll() {
    if (state.pollTimer || document.hidden) return;
    state.pollTimer = setInterval(pollOnce, 4000);
  }

  function stopPoll() {
    if (state.pollTimer) { clearInterval(state.pollTimer); state.pollTimer = null; }
  }

  // ---------- open / close ----------
  function isPanelOpen() { return els.panel.classList.contains('bnwc-open'); }

  // Body lock only on small screens (≤640px) where the panel is full-screen;
  // on larger screens the page stays scrollable behind the floating window.
  function isSmallScreen() {
    return !!(window.matchMedia && window.matchMedia('(max-width: 640px)').matches);
  }

  function lockBody() {
    if (!isSmallScreen()) return;
    try {
      state.lockScrollY = window.scrollY || 0;
      document.body.classList.add('bnwc-lock');
      document.body.style.top = (-state.lockScrollY) + 'px';
      state.locked = true;
    } catch (e) { /* ignore */ }
  }

  function unlockBody() {
    if (!state.locked) return;
    state.locked = false;
    try {
      document.body.classList.remove('bnwc-lock');
      document.body.style.top = '';
      window.scrollTo(0, state.lockScrollY);
    } catch (e) { /* ignore */ }
  }

  function openPanel() {
    els.panel.classList.add('bnwc-open');
    updateBubble();
    lockBody(); // CSS yalnız ≤640px'te etkiliyor
    track('webchat_open');
    loadConfig();
    if (!state.after) state.after = new Date().toISOString(); // poll cursor: şimdi
    if (!state.greeted) {
      state.greeted = true;
      setTimeout(function () { botSayHtml(fill(tx('greeting'))); }, 350);
    }
    startPoll();
    els.input.focus();
  }

  function closePanel() {
    els.panel.classList.remove('bnwc-open');
    unlockBody();
    stopPoll();
    updateBubble();
  }

  // ---------- wizard-open watcher (hide bubble while booking wizard is open) ----------
  function wizardOpen() {
    var p = document.getElementById('mobileBookPanel');
    if (!p) return false;
    return p.classList.contains('open') || !p.classList.contains('translate-y-full');
  }

  function updateBubble() {
    var hide = isPanelOpen() || wizardOpen();
    els.bubble.classList.toggle('bnwc-hidden', hide);
  }

  function watchWizard() {
    var p = document.getElementById('mobileBookPanel');
    if (!p || typeof MutationObserver === 'undefined') return;
    var mo = new MutationObserver(updateBubble);
    mo.observe(p, { attributes: true, attributeFilter: ['class'] });
  }

  // ---------- build UI ----------
  function buildUI() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    var root = document.createElement('div');
    root.id = 'bnWebchat';

    // launcher bubble
    var bubble = document.createElement('button');
    bubble.type = 'button';
    bubble.className = 'bnwc-bubble';
    bubble.setAttribute('aria-label', tx('aria.open'));
    // Yazı: header.status'un ilk parçası ("Yapay zekâ asistanı · anında yanıt"
    // → "Yapay zekâ asistanı") — 32 dil bedavaya gelir, yeni çeviri gerekmez.
    var aiLabel = String(tx('header.status')).split('·')[0].trim() || 'AI assistant';
    bubble.innerHTML =
      '<span class="bnwc-bico">' + SVG.bubble + '</span>' +
      '<span class="bnwc-blabel"><i class="bnwc-bdot"></i>' + escapeHtml(aiLabel) + '</span>';
    bubble.addEventListener('click', openPanel);

    // WA hapı bu sayfada SAĞDAYSA (RTL landing build'i right-3 yapar) çakışmamak
    // için widget'ı sola aynala — karar sınıftan, körlemesine dir=rtl'den değil.
    try {
      var waPill = document.getElementById('floatingWhatsapp');
      if (waPill && /\bright-3\b/.test(waPill.className)) {
        root.classList.add('bnwc-mirror');
      }
    } catch (e) { /* ignore */ }

    // panel
    var panel = document.createElement('div');
    panel.className = 'bnwc-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Bosphorus Night Assistant');
    panel.innerHTML =
      '<div class="bnwc-head">' +
        '<div class="bnwc-avatar"><img src="/assets/data/logo%20png%20lst.png" alt="Bosphorus Night"></div>' +
        '<div class="bnwc-head-t"><b>Bosphorus Night</b>' +
          '<span><i class="bnwc-dot"></i> ' + tx('header.status') + '</span></div>' +
        '<button type="button" class="bnwc-close" aria-label="' + escapeHtml(tx('aria.close')) + '">&times;</button>' +
      '</div>' +
      '<div class="bnwc-msgs"></div>' +
      '<div class="bnwc-chips"></div>' +
      '<div class="bnwc-inputrow">' +
        '<input class="bnwc-input" type="text" autocomplete="off" placeholder="' + escapeHtml(tx('placeholder')) + '" aria-label="' + escapeHtml(tx('placeholder')) + '">' +
        '<button type="button" class="bnwc-send" aria-label="' + escapeHtml(tx('aria.send')) + '">' + SVG.send + '</button>' +
      '</div>';

    root.appendChild(bubble);
    root.appendChild(panel);
    document.body.appendChild(root);

    els.root = root;
    els.bubble = bubble;
    els.panel = panel;
    els.msgs = panel.querySelector('.bnwc-msgs');
    els.chips = panel.querySelector('.bnwc-chips');
    els.input = panel.querySelector('.bnwc-input');
    els.send = panel.querySelector('.bnwc-send');
    els.typing = null;

    panel.querySelector('.bnwc-close').addEventListener('click', closePanel);
    els.send.addEventListener('click', sendFree);
    els.input.addEventListener('keydown', function (e) { if (e.key === 'Enter') sendFree(); });

    // chips
    CHIP_ORDER.forEach(function (key) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'bnwc-chip';
      b.innerHTML = CHIP_SVGS[key] + tx('chip.' + key);
      b.addEventListener('click', function () { chipClick(key); });
      els.chips.appendChild(b);
    });

    // ESC closes the panel — but never while the site's video lightbox is open
    // (main.js's own ESC handler closes the lightbox first).
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape' || !isPanelOpen()) return;
      var vb = document.getElementById('videoLightbox');
      if (vb && !vb.classList.contains('hidden')) return;
      closePanel();
    });

    // tab hidden → stop polling; visible again with panel open → resume
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stopPoll();
      else if (isPanelOpen()) startPoll();
    });

    watchWizard();
    updateBubble();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildUI);
  } else {
    buildUI();
  }
})();
