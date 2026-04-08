// ========== CONFIG ==========
const WA_NUMBER = '905325201700';
const BRAND_NAME = 'Bosphorus Night';

// ========== LANGUAGE ==========
let currentLang = 'en';

function detectLanguage() {
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
  const supported = Object.keys(LANGUAGES);
  // Check exact match first (e.g. "tr"), then prefix (e.g. "tr-TR" → "tr")
  for (const lang of supported) {
    if (browserLang === lang || browserLang.startsWith(lang + '-')) return lang;
  }
  return 'en';
}

function setLanguage(lang) {
  if (!LANGUAGES[lang]) lang = 'en';
  currentLang = lang;

  // Set dir for RTL languages (Arabic)
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', LANGUAGES[lang].dir);

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] && T[key][lang]) {
      el.textContent = T[key][lang];
    }
  });

  // Update lang toggle button
  const flag = document.getElementById('langFlag');
  const label = document.getElementById('langLabel');
  if (flag && label) {
    flag.src = `https://flagcdn.com/w20/${LANGUAGES[lang].flag}.png`;
    flag.alt = lang.toUpperCase();
    label.textContent = lang.toUpperCase();
  }

  // Update selected boat name if packages visible
  if (selectedBoat) {
    updateBoatName();
  }

  // Close lang dropdown
  const dropdown = document.getElementById('langDropdown');
  if (dropdown) dropdown.classList.add('hidden');

  // Update pills text for new language
  document.querySelectorAll('.pill-hover[data-tour]').forEach(pill => {
    const tourKey = pill.dataset.tour;
    const idx = parseInt(pill.dataset.pillIdx);
    if (TOURS[tourKey] && TOURS[tourKey].pills[idx]) {
      const label = TOURS[tourKey].pills[idx].label;
      pill.textContent = label[lang] || label.en;
    }
  });

  // Update booking panel WhatsApp message for new language
  if (document.getElementById('bookWhatsApp')) {
    calculatePrice();
  }
}

function updateBoatName() {
  const boatNameEl = document.getElementById('selectedBoatName');
  if (!boatNameEl || !selectedBoat) return;
  const key = `boats.${selectedBoat}`;
  if (T[key] && T[key][currentLang]) {
    boatNameEl.textContent = T[key][currentLang];
  }
}

// ========== HEADER ==========
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('hidden');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      menu.classList.add('hidden');
    });
  });
}

// ========== LANGUAGE DROPDOWN ==========
function initLangDropdown() {
  const toggle = document.getElementById('langToggle');
  const dropdown = document.getElementById('langDropdown');
  if (!toggle || !dropdown) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });

  // Close on outside click
  document.addEventListener('click', () => {
    dropdown.classList.add('hidden');
  });

  // Language buttons
  dropdown.querySelectorAll('[data-lang-code]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(btn.dataset.langCode);
    });
  });
}

// ========== TOUR CARD SELECTION ==========
let selectedBoat = null;

function initBoatSelection() {
  const boatCards = document.querySelectorAll('.boat-card');
  const packagesSection = document.getElementById('packages');

  boatCards.forEach(card => {
    card.addEventListener('click', () => {
      const tourType = card.dataset.boat; // daytime, sunset, dinner
      selectedBoat = tourType;

      // Highlight selected
      boatCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // Set tour type in booking panel
      setTourType(tourType);

      // Update tour name in packages section
      const boatNameEl = document.getElementById('selectedBoatName');
      if (boatNameEl) {
        const nameKey = `tour.${tourType}.title1`;
        boatNameEl.textContent = (T[nameKey] && T[nameKey][currentLang]) ? T[nameKey][currentLang] : tourType;
      }

      // Update prices from tour config
      const prices = TOURS[tourType] ? TOURS[tourType].prices : {};
      const defaultBoat = Object.keys(prices)[0] || 'classic';
      document.querySelectorAll('.package-price').forEach(priceEl => {
        // Use first available boat's prices for this tour
        const pkg = priceEl.closest('[data-package]');
        if (pkg) {
          const pkgType = pkg.dataset.package;
          if (prices[defaultBoat] && prices[defaultBoat][pkgType]) {
            priceEl.textContent = `€${prices[defaultBoat][pkgType]}`;
          }
        }
      });

      // Package card buttons → fill booking panel
      document.querySelectorAll('.wa-book').forEach(btn => {
        btn.removeAttribute('href');
        btn.style.cursor = 'pointer';
        btn.onclick = function(e) {
          e.preventDefault();
          const pkg = btn.dataset.package.toLowerCase(); // "standard", "premium", "vip"

          // Set package in booking panel
          const bookPackage = document.getElementById('bookPackage');
          const bookPackageMobile = document.getElementById('bookPackageMobile');
          if (bookPackage) bookPackage.value = pkg;
          if (bookPackageMobile) bookPackageMobile.value = pkg;

          // Recalculate price
          if (typeof calculatePrice === 'function') calculatePrice();

          // Desktop: scroll to panel and flash highlight
          const panel = document.getElementById('bookingPanel');
          if (panel && window.innerWidth >= 1024) {
            // Scroll page so panel is visible
            panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Flash glow effect
            panel.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
            panel.style.boxShadow = '0 0 30px rgba(201,168,76,0.6), inset 0 0 20px rgba(201,168,76,0.1)';
            panel.style.transform = 'scale(1.02)';
            setTimeout(() => {
              panel.style.boxShadow = '';
              panel.style.transform = '';
            }, 1500);
          }

          // Mobile: open booking overlay
          if (window.innerWidth < 1024) {
            openMobilePanel();
          }
        };
      });

      // Show packages
      packagesSection.classList.remove('hidden');

      setTimeout(() => {
        packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    });
  });
}

// ========== FAQ ACCORDION ==========
function initFAQ() {
  document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.closest('.faq-item');
      const content = item.querySelector('.faq-content');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('open');
        const c = faq.querySelector('.faq-content');
        c.classList.add('hidden');
        c.style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}

// ========== REVIEW FILTERS ==========
function initReviewFilters() {
  const filters = document.querySelectorAll('.review-filter');
  const cards = document.querySelectorAll('.review-card');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      cards.forEach(card => {
        card.style.display = (category === 'all' || card.dataset.category === category) ? '' : 'none';
      });
    });
  });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

// ========== PARTICLES ==========
function initParticles() {
  if (window.innerWidth < 768) return;
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (Math.random() * 8 + 6) + 's';
    p.style.animationDelay = (Math.random() * 5) + 's';
    p.style.width = (Math.random() * 3 + 1) + 'px';
    p.style.height = p.style.width;
    container.appendChild(p);
  }
}

// ========== GALLERY LIGHTBOX ==========
function initGallery() {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<div class="lightbox-close">&times;</div><img src="" alt="">';
  document.body.appendChild(lightbox);

  const img = lightbox.querySelector('img');
  const close = lightbox.querySelector('.lightbox-close');

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img');
      if (src) { img.src = src.src; lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; }
    });
  });

  const closeLB = () => { lightbox.classList.remove('active'); document.body.style.overflow = ''; };
  close.addEventListener('click', closeLB);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLB(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });
}

// ========== SMOOTH SCROLL ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ========== LIVE BOOKING COUNT ==========
function initBookingCount() {
  const el = document.getElementById('booking-count');
  if (!el) return;

  // Max per day (0=Sun, 1=Mon, ..., 6=Sat)
  const dailyMax = [89, 72, 68, 81, 77, 93, 98];
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const max = dailyMax[day];

  // After 19:00 — show max (full)
  if (hour >= 19) {
    el.textContent = max;
    return;
  }

  // Before 08:00 — show 0
  if (hour < 8) {
    el.textContent = '0';
    return;
  }

  // 08:00 to 19:00 — gradual increase
  const totalMinutes = (hour - 8) * 60 + minute; // minutes since 08:00
  const maxMinutes = 11 * 60; // 08:00 to 19:00 = 660 min
  const progress = totalMinutes / maxMinutes;

  // Ease-in curve — starts slow, accelerates toward evening
  const eased = Math.pow(progress, 1.4);
  const current = Math.floor(eased * max);

  el.textContent = current;

  // Increment every 2-3 minutes
  setInterval(() => {
    const now2 = new Date();
    const h = now2.getHours();
    const m = now2.getMinutes();
    if (h >= 19) return;
    const t = (h - 8) * 60 + m;
    const p = Math.pow(t / maxMinutes, 1.4);
    el.textContent = Math.floor(p * max);
  }, 150000); // 2.5 minutes
}

// ========== COUNTDOWN TIMER ==========
function initCountdown() {
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');
  const activeEl = document.getElementById('countdown-active');
  const expiredEl = document.getElementById('countdown-expired');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  function update() {
    const now = new Date();
    const deadline = new Date();
    deadline.setHours(19, 0, 0, 0); // 19:00 tonight

    let diff = deadline - now;

    if (diff <= 0) {
      // Past 19:00 — show "tomorrow" message
      activeEl.classList.add('hidden');
      expiredEl.classList.remove('hidden');
      return;
    }

    activeEl.classList.remove('hidden');
    expiredEl.classList.add('hidden');

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// ========== GALLERY FILTERS ==========
function initGalleryFilters() {
  const filters = document.querySelectorAll('.gallery-filter');
  const items = document.querySelectorAll('.gallery-item[data-gallery]');

  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      items.forEach(item => {
        if (category === 'all' || item.dataset.gallery === category) {
          item.style.display = '';
          item.style.opacity = '1';
          item.style.transform = 'scale(1)';
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

// ========== COUNTER ANIMATION ==========
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = current.toLocaleString();
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => observer.observe(el));

  // Decimal counter (for 4.8 rating)
  const decObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (eased * target).toFixed(1);
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        decObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter-decimal').forEach(el => decObserver.observe(el));
}

// ========== TOUR PANELS ==========
let selectedTourType = 'dinner'; // default

function initTourPanels() {
  // Load images from tours.js config
  document.querySelectorAll('.tour-panel-img, #hero-img-daytime, #hero-img-sunset, #hero-img-dinner').forEach(img => {
    const tourKey = img.dataset.tourKey;
    const imgType = img.dataset.imgType;
    const imgIdx = parseInt(img.dataset.imgIdx);
    if (tourKey && imgType && TOURS[tourKey] && TOURS[tourKey].images[imgType]) {
      img.src = TOURS[tourKey].images[imgType][imgIdx] || '';
    }
  });

  // Build pills from tours.js config
  Object.keys(TOURS).forEach(tourKey => {
    const container = document.getElementById('pills-' + tourKey);
    if (!container) return;
    const tour = TOURS[tourKey];

    tour.pills.forEach((pill, idx) => {
      const span = document.createElement('span');
      span.className = 'pill-hover bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-white/60';
      span.textContent = pill.label[currentLang] || pill.label.en;
      span.dataset.tour = tourKey;
      span.dataset.pillIdx = idx;

      // Image rotation counter
      span._imgIndex = 0;

      const handler = () => {
        // Change hero image — rotate through imgs array
        const heroImg = document.getElementById('hero-img-' + tourKey);
        const imgs = pill.imgs || [pill.img];
        const currentImg = imgs[span._imgIndex % imgs.length];
        span._imgIndex++;

        if (heroImg && currentImg) {
          heroImg.style.opacity = '0.3';
          setTimeout(() => { heroImg.src = currentImg; heroImg.style.opacity = '1'; }, 200);
        }

        // Show description
        const descEl = document.querySelector(`.pill-desc[data-tour="${tourKey}"]`);
        if (descEl) {
          descEl.textContent = pill.desc[currentLang] || pill.desc.en;
          descEl.classList.add('visible');
          clearTimeout(descEl._hideTimer);
          descEl._hideTimer = setTimeout(() => descEl.classList.remove('visible'), 3000);
        }

        // Highlight active
        container.querySelectorAll('.pill-hover').forEach(p => p.classList.remove('pill-active'));
        span.classList.add('pill-active');
      };

      span.addEventListener('mouseenter', handler);
      span.addEventListener('click', handler);
      container.appendChild(span);
    });
  });

  // Explore buttons → click the matching boat card to trigger full selection
  document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tourType = btn.dataset.tour;
      // Find and click the matching boat card
      const boatCard = document.querySelector(`.boat-card[data-boat="${tourType}"]`);
      if (boatCard) {
        boatCard.click();
      }
    });
  });
}

function setTourType(tourType) {
  if (!TOURS[tourType]) return;
  selectedTourType = tourType;
  const tour = TOURS[tourType];

  // Update tour type buttons
  document.querySelectorAll('.tour-type-btn').forEach(btn => {
    const isActive = btn.dataset.tourType === tourType;
    // Remove Tailwind classes that conflict with inline styles
    btn.classList.remove('bg-gold/15', 'text-gold', 'border', 'border-gold/30', 'text-white/50');
    if (isActive) {
      btn.style.background = 'rgba(201,168,76,0.15)';
      btn.style.color = '#c9a84c';
      btn.style.border = '1px solid rgba(201,168,76,0.3)';
    } else {
      btn.style.background = '';
      btn.style.color = 'rgba(255,255,255,0.5)';
      btn.style.border = '';
    }
  });

  // Update tonight/today block
  const icon = document.getElementById('tonightIcon');
  const label = document.getElementById('tonightLabel');
  const time = document.getElementById('tonightTime');
  if (icon) icon.innerHTML = tour.icon;
  if (label) label.textContent = tour.todayLabel[currentLang] || tour.todayLabel.en;
  if (time) time.textContent = tour.time;

  // Mobile tonight block
  const iconM = document.getElementById('tonightIconMobile');
  const labelM = document.getElementById('tonightLabelMobile');
  const timeM = document.getElementById('tonightTimeMobile');
  if (iconM) iconM.innerHTML = tour.icon;
  if (labelM) labelM.textContent = tour.todayLabel[currentLang] || tour.todayLabel.en;
  if (timeM) timeM.textContent = tour.time;

  // Update mobile bar tour label
  const barLabel = document.getElementById('mobileBarTourLabel');
  if (barLabel) {
    const t1 = T[`tour.${tourType}.title1`];
    const t2 = T[`tour.${tourType}.title2`];
    const name = (t1 ? t1[currentLang] || t1.en : '') + ' ' + (t2 ? t2[currentLang] || t2.en : '');
    const selectedText = T['booking.selected'] ? (T['booking.selected'][currentLang] || T['booking.selected'].en) : 'selected';
    barLabel.textContent = name.trim() + ' ' + selectedText;
  }

  // Update booking panel background (desktop + mobile) — instant swap
  ['bookingPanelBg', 'mobileBookPanelBg'].forEach(id => {
    const bg = document.getElementById(id);
    if (bg) {
      bg.style.opacity = '0';
      setTimeout(() => {
        bg.style.backgroundImage = `url(${tour.bgImage})`;
        bg.style.opacity = '0.25';
      }, 150);
    }
  });

  // Update boat options (filter by tour)
  ['bookBoat', 'bookBoatMobile'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.querySelectorAll('option').forEach(opt => {
      opt.disabled = !tour.boats.includes(opt.value);
      opt.style.display = tour.boats.includes(opt.value) ? '' : 'none';
    });
    // Select first available boat
    if (!tour.boats.includes(sel.value)) {
      sel.value = tour.boats[0];
    }
  });

  // Update PRICES reference for calculation
  window._activePrices = tour.prices;

  // Auto-set date based on tour type
  const now = new Date();
  const hour = now.getHours();
  let targetDate = new Date(now);

  if (tourType === 'daytime' && hour >= 7) {
    // Gündüz turu: 07:00'den sonra → ertesi gün
    targetDate.setDate(targetDate.getDate() + 1);
  } else if (tourType === 'sunset' && hour >= 16) {
    // Sunset turu: 16:00'dan sonra → ertesi gün
    targetDate.setDate(targetDate.getDate() + 1);
  } else if (tourType === 'dinner' && (hour >= 18 && now.getMinutes() >= 30 || hour >= 19)) {
    // Akşam turu: 18:30'dan sonra → ertesi gün
    targetDate.setDate(targetDate.getDate() + 1);
  }

  const dateStr = targetDate.toISOString().split('T')[0];
  ['bookDate', 'bookDateMobile'].forEach(id => {
    const input = document.getElementById(id);
    if (input) input.value = dateStr;
  });

  // Recalculate price
  calculatePrice();
}

// ========== BOOKING PANEL ==========
const PRICES = {
  classic:  { standard: 35, premium: 50, vip: 70 },
  premium:  { standard: 45, premium: 60, vip: 80 },
  luxury:   { standard: 55, premium: 70, vip: 90 }
};

const BOAT_NAMES = {
  classic: { en: 'Classic Cruise', tr: 'Klasik Cruise', de: 'Klassische Kreuzfahrt', es: 'Crucero Clásico', ru: 'Классический круиз', ar: 'رحلة كلاسيكية' },
  premium: { en: 'Premium Cruise', tr: 'Premium Cruise', de: 'Premium-Kreuzfahrt', es: 'Crucero Premium', ru: 'Премиум круиз', ar: 'رحلة مميزة' },
  luxury:  { en: 'Luxury Yacht', tr: 'Lüks Yat', de: 'Luxusyacht', es: 'Yate de Lujo', ru: 'Люкс яхта', ar: 'يخت فاخر' }
};

const BOAT_IMAGES = {
  classic: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=70',
  premium: 'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=400&q=70',
  luxury:  'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&q=70'
};

const BOAT_STARS = {
  classic: '★★★<span class="text-white/30">★★</span>',
  premium: '★★★★<span class="text-white/30">★</span>',
  luxury:  '★★★★★'
};

const EXTRA_NAMES = {
  alcohol:  { en: 'Alcohol Package', tr: 'Alkol Paketi', de: 'Alkoholpaket', es: 'Paquete de Alcohol', ru: 'Алкогольный пакет', ar: 'باقة الكحول' },
  transfer: { en: 'Hotel Transfer', tr: 'Otel Transferi', de: 'Hoteltransfer', es: 'Traslado al Hotel', ru: 'Трансфер из отеля', ar: 'نقل من الفندق' },
  romantic: { en: 'Romantic Table', tr: 'Romantik Masa', de: 'Romantischer Tisch', es: 'Mesa Romántica', ru: 'Романтический стол', ar: 'طاولة رومانسية' },
  proposal: { en: 'Proposal Package', tr: 'Evlilik Teklifi Paketi', de: 'Heiratsantrag-Paket', es: 'Paquete de Propuesta', ru: 'Пакет предложения', ar: 'باقة عرض الزواج' }
};

const WA_MESSAGES = {
  en: (boat, pkg, date, adults, children, extras, total) =>
    `Hello! I'd like to book:\n🚢 ${boat} — ${pkg} Package\n📅 ${date}\n👥 ${adults} adult(s)${children ? `, ${children} child(ren)` : ''}\n${extras.length ? '✨ ' + extras.join(', ') + '\n' : ''}💰 Total: €${total}\n\nPlease confirm availability.`,
  tr: (boat, pkg, date, adults, children, extras, total) =>
    `Merhaba! Rezervasyon yapmak istiyorum:\n🚢 ${boat} — ${pkg} Paketi\n📅 ${date}\n👥 ${adults} yetişkin${children ? `, ${children} çocuk` : ''}\n${extras.length ? '✨ ' + extras.join(', ') + '\n' : ''}💰 Toplam: €${total}\n\nMüsaitlik durumunu onaylar mısınız?`,
  de: (boat, pkg, date, adults, children, extras, total) =>
    `Hallo! Ich möchte buchen:\n🚢 ${boat} — ${pkg}-Paket\n📅 ${date}\n👥 ${adults} Erwachsene${children ? `, ${children} Kind(er)` : ''}\n${extras.length ? '✨ ' + extras.join(', ') + '\n' : ''}💰 Gesamt: €${total}\n\nBitte bestätigen Sie die Verfügbarkeit.`,
  es: (boat, pkg, date, adults, children, extras, total) =>
    `¡Hola! Me gustaría reservar:\n🚢 ${boat} — Paquete ${pkg}\n📅 ${date}\n👥 ${adults} adulto(s)${children ? `, ${children} niño(s)` : ''}\n${extras.length ? '✨ ' + extras.join(', ') + '\n' : ''}💰 Total: €${total}\n\nPor favor confirme la disponibilidad.`,
  ru: (boat, pkg, date, adults, children, extras, total) =>
    `Здравствуйте! Хочу забронировать:\n🚢 ${boat} — Пакет ${pkg}\n📅 ${date}\n👥 ${adults} взрослый(е)${children ? `, ${children} ребёнок/детей` : ''}\n${extras.length ? '✨ ' + extras.join(', ') + '\n' : ''}💰 Итого: €${total}\n\nПожалуйста, подтвердите наличие.`,
  ar: (boat, pkg, date, adults, children, extras, total) =>
    `مرحبًا! أرغب بالحجز:\n🚢 ${boat} — باقة ${pkg}\n📅 ${date}\n👥 ${adults} بالغ${children ? `، ${children} طفل/أطفال` : ''}\n${extras.length ? '✨ ' + extras.join(', ') + '\n' : ''}💰 الإجمالي: €${total}\n\nيرجى تأكيد التوفر.`
};

function initBookingPanel() {
  // Set today's date as default
  const today = new Date().toISOString().split('T')[0];
  const dateInputs = [document.getElementById('bookDate'), document.getElementById('bookDateMobile')];
  dateInputs.forEach(input => { if (input) { input.value = today; input.min = today; } });

  // Check if today → show "Tonight!" badge
  checkTonight();

  // Add body class for desktop panel spacing
  document.body.classList.add('has-booking-panel');

  // Guest count buttons
  document.querySelectorAll('.guest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (!target) return;
      let val = parseInt(target.textContent) + parseInt(btn.dataset.dir);
      if (btn.dataset.target.includes('adult')) val = Math.max(1, Math.min(20, val));
      else val = Math.max(0, Math.min(10, val));
      target.textContent = val;

      // Sync desktop ↔ mobile
      syncGuestCounts(btn.dataset.target, val);
      updateChildAgeInputs();
      updateAlcoholMax();
      updateTransferInfo();
      calculatePrice();
    });
  });

  // Boat & Package selects
  const selects = ['bookBoat', 'bookPackage', 'bookBoatMobile', 'bookPackageMobile'];
  selects.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => {
      syncSelect(id);
      if (id === 'bookBoat' || id === 'bookBoatMobile') updateBoatPreview();
      calculatePrice();
    });
  });

  // Initial boat preview
  updateBoatPreview();

  // Extras checkboxes
  document.querySelectorAll('.booking-extra, .booking-extra-mobile').forEach(cb => {
    cb.addEventListener('change', () => {
      syncExtras(cb);
      updateTransferInfo();
      calculatePrice();
    });
  });

  // Drink toggle buttons (soft / alcohol)
  // Track selection state: null = not selected, 'soft', 'alcohol'
  window._drinkSelected = null;

  document.querySelectorAll('.drink-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const drink = btn.dataset.drink;
      window._drinkSelected = drink;

      // Style all toggle buttons across both panels
      document.querySelectorAll('.drink-toggle').forEach(b => {
        // Reset to unselected
        b.className = b.className
          .replace('border-gold/50 bg-gold/15 text-gold', 'border-white/20 bg-white/5 text-white/50')
          .replace('border-white/10', 'border-white/20');
        // Activate matching ones
        if (b.dataset.drink === drink) {
          b.className = b.className.replace('border-white/20 bg-white/5 text-white/50', 'border-gold/50 bg-gold/15 text-gold');
        }
      });

      // Hide warning
      ['drinkWarning', 'drinkWarningMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.add('hidden');
      });

      // Show/hide alcohol counter & soft info
      ['alcoholPanel', 'alcoholPanelMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (drink === 'alcohol') el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
      });
      ['softInfo', 'softInfoMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (drink === 'soft') el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
      });

      if (drink === 'alcohol') {
        // Set count to 1 if currently 0
        ['alcoholCount', 'alcoholCountMobile'].forEach(id => {
          const el = document.getElementById(id);
          if (el && parseInt(el.textContent) === 0) el.textContent = '1';
        });
      } else {
        // Reset count to 0
        ['alcoholCount', 'alcoholCountMobile'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.textContent = '0';
        });
      }
      updateAlcoholInfo();
      calculatePrice();
    });
  });

  // Alcohol count buttons
  document.querySelectorAll('.alcohol-btn, .alcohol-btn-mobile').forEach(btn => {
    btn.addEventListener('click', () => {
      const isMobile = btn.classList.contains('alcohol-btn-mobile');
      const countEl = document.getElementById(isMobile ? 'alcoholCountMobile' : 'alcoholCount');
      const adults = parseInt(document.getElementById(isMobile ? 'adultCountMobile' : 'adultCount').textContent);
      let val = parseInt(countEl.textContent) + parseInt(btn.dataset.dir);
      val = Math.max(1, Math.min(adults, val));
      countEl.textContent = val;
      // Sync desktop ↔ mobile
      const otherId = isMobile ? 'alcoholCount' : 'alcoholCountMobile';
      const otherEl = document.getElementById(otherId);
      if (otherEl) otherEl.textContent = val;
      updateAlcoholInfo();
      calculatePrice();
    });
  });

  // Date change
  dateInputs.forEach(input => {
    if (input) input.addEventListener('change', () => {
      syncDate(input);
      checkTonight();
      calculatePrice();
    });
  });

  // Scroll arrows for booking panel
  const scrollArea = document.getElementById('bookingScroll');
  const arrowUp = document.getElementById('scrollArrowUp');
  const arrowDown = document.getElementById('scrollArrowDown');
  if (scrollArea && arrowUp && arrowDown) {
    function updateScrollArrows() {
      const { scrollTop, scrollHeight, clientHeight } = scrollArea;
      arrowUp.style.opacity = scrollTop > 10 ? '1' : '0';
      arrowDown.style.opacity = scrollTop < scrollHeight - clientHeight - 10 ? '1' : '0';
    }
    scrollArea.addEventListener('scroll', updateScrollArrows, { passive: true });
    setTimeout(updateScrollArrows, 500);
  }

  // Mobile panel open/close
  const mobileBtn = document.getElementById('mobileBookBtn');
  const mobileOverlay = document.getElementById('mobileBookOverlay');
  const mobilePanel = document.getElementById('mobileBookPanel');
  const mobileClose = document.getElementById('mobileBookClose');

  if (mobileBtn) mobileBtn.addEventListener('click', openMobilePanel);
  if (mobileClose) mobileClose.addEventListener('click', closeMobilePanel);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobilePanel);

  // Show mobile bar after first scroll
  const mobileBar = document.getElementById('mobileBookBar');
  if (mobileBar) {
    mobileBar.classList.add('hidden-bar');
    let shown = false;
    window.addEventListener('scroll', () => {
      if (!shown && window.scrollY > 300) {
        mobileBar.classList.remove('hidden-bar');
        shown = true;
      }
    }, { passive: true });
  }

  // Tour type buttons
  document.querySelectorAll('.tour-type-btn').forEach(btn => {
    btn.addEventListener('click', () => setTourType(btn.dataset.tourType));
  });

  // Set default tour type
  setTourType('dinner');

  // WhatsApp button — block if drink not selected
  ['bookWhatsApp', 'bookWhatsAppMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        if (!window._drinkSelected) {
          e.preventDefault();
          // Show warnings
          ['drinkWarning', 'drinkWarningMobile'].forEach(wId => {
            const w = document.getElementById(wId);
            if (w) {
              w.classList.remove('hidden');
              w.classList.add('animate-pulse');
              setTimeout(() => w.classList.remove('animate-pulse'), 2000);
            }
          });
          // Scroll to drink section
          const section = document.getElementById(id.includes('Mobile') ? 'drinkSectionMobile' : 'drinkSection');
          if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }
  });
}

function openMobilePanel() {
  const overlay = document.getElementById('mobileBookOverlay');
  const panel = document.getElementById('mobileBookPanel');
  if (overlay) { overlay.classList.remove('hidden'); requestAnimationFrame(() => overlay.classList.add('open')); }
  if (panel) panel.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobilePanel() {
  const overlay = document.getElementById('mobileBookOverlay');
  const panel = document.getElementById('mobileBookPanel');
  if (panel) panel.classList.remove('open');
  if (overlay) { overlay.classList.remove('open'); setTimeout(() => overlay.classList.add('hidden'), 300); }
  document.body.style.overflow = '';
}

// Swipe down to close mobile panel (only when scrolled to top)
(function() {
  let startY = 0;
  let currentY = 0;
  let swiping = false;

  document.addEventListener('touchstart', (e) => {
    const panel = document.getElementById('mobileBookPanel');
    if (!panel || !panel.classList.contains('open')) return;

    // Only allow swipe-to-close when content is scrolled to top
    const scrollContainer = document.getElementById('mobileBookPanelContent');
    if (scrollContainer && scrollContainer.scrollTop > 5) return;

    startY = e.touches[0].clientY;
    swiping = true;
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!swiping) return;
    currentY = e.touches[0].clientY;
    // Cancel swipe if user scrolls upward (browsing content)
    if (currentY < startY) {
      swiping = false;
    }
  }, { passive: true });

  document.addEventListener('touchend', () => {
    if (!swiping) return;
    const diff = currentY - startY;
    // 150px+ aşağı kaydırma → kapat (daha yüksek eşik)
    if (diff > 150) {
      closeMobilePanel();
    }
    swiping = false;
    startY = 0;
    currentY = 0;
  });
})();

function syncGuestCounts(sourceId, val) {
  const isMobile = sourceId.includes('Mobile');
  const base = sourceId.replace('Mobile', '');
  const targetId = isMobile ? base : base + 'Mobile';
  const target = document.getElementById(targetId);
  if (target) target.textContent = val;
}

function updateAlcoholMax() {
  const adults = parseInt(document.getElementById('adultCount').textContent);
  ['alcoholMax', 'alcoholMaxMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = adults;
  });
  // Alkol sayısı yetişkin sayısını aşmasın
  ['alcoholCount', 'alcoholCountMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el && parseInt(el.textContent) > adults) el.textContent = adults;
  });
  updateAlcoholInfo();
}

function updateTransferInfo() {
  const adults = parseInt(document.getElementById('adultCount').textContent);
  const childCount = parseInt(document.getElementById('childCount').textContent);
  const totalGuests = adults + childCount;
  const transferChecked = document.querySelector('.booking-extra[value="transfer"]');
  const isChecked = transferChecked && transferChecked.checked;

  const transferSvg = '<svg class="w-3.5 h-3.5 inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>';
  const TRANSFER_TEXTS = {
    en: (n) => `${transferSvg} Transfer x${n} — round-trip pickup & drop-off`,
    tr: (n) => `${transferSvg} Transfer x${n} — gidiş-dönüş otel transferi`,
    de: (n) => `${transferSvg} Transfer x${n} — Hin- und Rücktransfer`,
    es: (n) => `${transferSvg} Transfer x${n} — recogida y regreso`,
    ru: (n) => `${transferSvg} Трансфер x${n} — туда и обратно`,
    ar: (n) => `${transferSvg} نقل x${n} — ذهابًا وإيابًا`
  };
  const t = TRANSFER_TEXTS[currentLang] || TRANSFER_TEXTS.en;

  ['transferInfo', 'transferInfoMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (isChecked) {
      el.innerHTML = t(totalGuests);
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
}

function updateAlcoholInfo() {
  const adults = parseInt(document.getElementById('adultCount').textContent);
  const alcCount = parseInt(document.getElementById('alcoholCount').textContent) || 0;
  const softCount = adults - alcCount;

  const wineSvg = '<svg class="w-3.5 h-3.5 inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l1.5 5H14l1.5-5"/><path d="M12 7v10"/><path d="M7 22h10"/><path d="M12 17a5 5 0 005-5H7a5 5 0 005 5z"/></svg>';
  const ALC_TEXTS = {
    en: { all: `${wineSvg} All guests — alcohol menu`, mix: (a, s) => `${wineSvg} ${a} alcohol · ${s} soft drinks` },
    tr: { all: `${wineSvg} Tüm misafirler — alkollü menü`, mix: (a, s) => `${wineSvg} ${a} alkollü · ${s} alkolsüz menü` },
    de: { all: `${wineSvg} Alle Gäste — Alkoholmenü`, mix: (a, s) => `${wineSvg} ${a} Alkohol · ${s} Softdrinks` },
    es: { all: `${wineSvg} Todos los huéspedes — menú alcohol`, mix: (a, s) => `${wineSvg} ${a} alcohol · ${s} sin alcohol` },
    ru: { all: `${wineSvg} Все гости — алкогольное меню`, mix: (a, s) => `${wineSvg} ${a} алкоголь · ${s} безалкогольные` },
    ar: { all: `${wineSvg} جميع الضيوف — قائمة الكحول`, mix: (a, s) => `${wineSvg} ${a} كحول · ${s} مشروبات غازية` }
  };
  const t = ALC_TEXTS[currentLang] || ALC_TEXTS.en;

  ['alcoholInfo', 'alcoholInfoMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (alcCount >= adults) {
      el.innerHTML = t.all;
    } else {
      el.innerHTML = t.mix(alcCount, softCount);
    }
  });
}

function syncSelect(sourceId) {
  const isMobile = sourceId.includes('Mobile');
  const base = sourceId.replace('Mobile', '');
  const src = document.getElementById(sourceId);
  const targetId = isMobile ? base : base + 'Mobile';
  const target = document.getElementById(targetId);
  if (src && target) target.value = src.value;
}

function syncExtras(source) {
  const isMobile = source.classList.contains('booking-extra-mobile');
  const targetClass = isMobile ? '.booking-extra' : '.booking-extra-mobile';

  if (source.type === 'radio') {
    // Radio: sync by matching the same value and unchecking others in the group
    document.querySelectorAll(targetClass).forEach(input => {
      if (input.type === 'radio' && (input.value === 'alcohol' || input.value === 'nonalcoholic')) {
        input.checked = (input.value === source.value);
      }
    });
  } else {
    document.querySelectorAll(targetClass).forEach(cb => {
      if (cb.value === source.value) cb.checked = source.checked;
    });
  }
}

function syncDate(source) {
  const otherId = source.id === 'bookDate' ? 'bookDateMobile' : 'bookDate';
  const other = document.getElementById(otherId);
  if (other) other.value = source.value;
}

function checkTonight() {
  const dateInput = document.getElementById('bookDate');
  const today = new Date().toISOString().split('T')[0];
  const isTonight = dateInput && dateInput.value === today;

  ['tonightBlock', 'tonightBlockMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', !isTonight);
  });
}

function updateChildAgeInputs() {
  const count = parseInt(document.getElementById('childCount').textContent);

  ['', 'Mobile'].forEach(suffix => {
    const container = document.getElementById('childAges' + suffix);
    const inputs = document.getElementById('childAgeInputs' + suffix);
    if (!container || !inputs) return;

    if (count === 0) {
      container.classList.add('hidden');
      inputs.innerHTML = '';
      return;
    }

    container.classList.remove('hidden');
    // Keep existing selects, add/remove as needed
    const existing = inputs.querySelectorAll('select');
    if (existing.length === count) return;

    inputs.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const select = document.createElement('select');
      select.className = 'child-age-select';
      select.dataset.childIndex = i;
      select.innerHTML = `
        <option value="0-3">0-3</option>
        <option value="3-5">3-5</option>
        <option value="5+" selected>5+</option>
      `;
      select.addEventListener('change', () => {
        syncChildAges(suffix);
        calculatePrice();
      });
      inputs.appendChild(select);
    }
  });
}

function syncChildAges(sourceSuffix) {
  const targetSuffix = sourceSuffix === '' ? 'Mobile' : '';
  const source = document.getElementById('childAgeInputs' + sourceSuffix);
  const target = document.getElementById('childAgeInputs' + targetSuffix);
  if (!source || !target) return;

  const sourceSelects = source.querySelectorAll('select');
  const targetSelects = target.querySelectorAll('select');
  sourceSelects.forEach((sel, i) => {
    if (targetSelects[i]) targetSelects[i].value = sel.value;
  });
}

function updateBoatPreview() {
  const boat = document.getElementById('bookBoat').value;
  const name = BOAT_NAMES[boat][currentLang] || BOAT_NAMES[boat].en;
  const img = BOAT_IMAGES[boat];
  const stars = BOAT_STARS[boat];

  ['', 'Mobile'].forEach(suffix => {
    const imgEl = document.getElementById('boatPreviewImg' + suffix);
    const nameEl = document.getElementById('boatPreviewName' + suffix);
    const starsEl = document.getElementById('boatPreviewStars' + suffix);
    if (imgEl) imgEl.src = img;
    if (nameEl) nameEl.textContent = name;
    if (starsEl) starsEl.innerHTML = stars;
  });
}

function calculatePrice() {
  const boat = document.getElementById('bookBoat').value;
  const pkg = document.getElementById('bookPackage').value;
  const adults = parseInt(document.getElementById('adultCount').textContent);
  const childCount = parseInt(document.getElementById('childCount').textContent);

  const prices = window._activePrices || PRICES;
  const basePrice = (prices[boat] && prices[boat][pkg]) ? prices[boat][pkg] : 35;

  // Adult total
  let total = basePrice * adults;

  // Children pricing
  const ageInputs = document.getElementById('childAgeInputs');
  if (childCount > 0 && ageInputs) {
    ageInputs.querySelectorAll('select').forEach(sel => {
      if (sel.value === '0-3') total += 0;
      else if (sel.value === '3-5') total += Math.round(basePrice * 0.5);
      else total += basePrice;
    });
  }

  // Alcohol menu (count × €10)
  const alcoholCount = parseInt(document.getElementById('alcoholCount').textContent) || 0;
  total += alcoholCount * 10;

  // Other extras (checkboxes)
  document.querySelectorAll('.booking-extra').forEach(input => {
    if (!input.checked) return;
    const price = parseInt(input.dataset.price) || 0;
    if (price === 0) return;

    const pricing = input.dataset.pricing;
    if (pricing === 'person') {
      // Kişi başı (yetişkin + tam fiyatlı çocuk)
      total += price * adults;
      if (childCount > 0 && ageInputs) {
        ageInputs.querySelectorAll('select').forEach(sel => {
          if (sel.value === '3-5') total += Math.round(price * 0.5);
          else if (sel.value !== '0-3') total += price;
        });
      }
    } else if (pricing === 'table') {
      // Masa başı — sabit fiyat
      total += price;
    }
  });

  // Update displays
  document.getElementById('bookTotal').textContent = `€${total}`;
  document.getElementById('bookTotalMobile').textContent = `€${total}`;

  // Update mobile bar starting price
  const minPrice = PRICES.classic.standard;
  document.getElementById('mobilePrice').textContent = `€${minPrice}`;

  // Update WhatsApp links
  updateWhatsAppLinks(total);
}

function updateWhatsAppLinks(total) {
  const boat = document.getElementById('bookBoat').value;
  const pkg = document.getElementById('bookPackage').value;
  const date = document.getElementById('bookDate').value;
  const adults = parseInt(document.getElementById('adultCount').textContent);
  const childCount = parseInt(document.getElementById('childCount').textContent);

  const boatName = BOAT_NAMES[boat][currentLang] || BOAT_NAMES[boat].en;
  const pkgName = pkg.charAt(0).toUpperCase() + pkg.slice(1);

  // Format date nicely
  let dateStr = date;
  try {
    const d = new Date(date + 'T00:00:00');
    dateStr = d.toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : currentLang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  } catch(e) {}

  // Extras
  const extras = [];
  const alcCount = parseInt(document.getElementById('alcoholCount').textContent) || 0;
  if (alcCount > 0) {
    const alcName = EXTRA_NAMES.alcohol[currentLang] || EXTRA_NAMES.alcohol.en;
    extras.push(`${alcName} x${alcCount}`);
  }
  document.querySelectorAll('.booking-extra').forEach(input => {
    if (input.checked && EXTRA_NAMES[input.value]) {
      const name = EXTRA_NAMES[input.value][currentLang] || EXTRA_NAMES[input.value].en;
      extras.push(name);
    }
  });

  const msgFn = WA_MESSAGES[currentLang] || WA_MESSAGES.en;
  const msg = msgFn(boatName, pkgName, dateStr, adults, childCount > 0 ? childCount : 0, extras, total);
  const encoded = encodeURIComponent(msg);
  const url = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

  ['bookWhatsApp', 'bookWhatsAppMobile'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = url;
  });
}

// ========== EXTRA BADGE TOOLTIPS ==========
const EXTRA_TIPS = {
  alcohol: {
    en: 'Unlimited beer, wine & spirits throughout the cruise',
    tr: 'Tur boyunca sınırsız bira, şarap ve alkollü içecekler',
    de: 'Unbegrenzt Bier, Wein & Spirituosen während der Kreuzfahrt',
    es: 'Cerveza, vino y licores ilimitados durante el crucero',
    ru: 'Безлимитное пиво, вино и крепкие напитки на протяжении круиза',
    ar: 'بيرة ونبيذ ومشروبات روحية غير محدودة طوال الرحلة'
  },
  transfer: {
    en: 'Round-trip pickup & drop-off from your hotel in Istanbul',
    tr: 'İstanbul\'daki otelinizden gidiş-dönüş transfer hizmeti',
    de: 'Hin- und Rücktransfer von Ihrem Hotel in Istanbul',
    es: 'Recogida y regreso desde su hotel en Estambul',
    ru: 'Трансфер туда и обратно от вашего отеля в Стамбуле',
    ar: 'توصيل ذهابًا وإيابًا من فندقك في إسطنبول'
  },
  romantic: {
    en: 'Private table with candles, flowers & window seat for couples',
    tr: 'Çiftler için mumlu, çiçekli özel masa ve pencere kenarı',
    de: 'Privater Tisch mit Kerzen, Blumen & Fensterplatz für Paare',
    es: 'Mesa privada con velas, flores y asiento junto a la ventana',
    ru: 'Отдельный столик со свечами, цветами и видом у окна для пар',
    ar: 'طاولة خاصة بالشموع والورود ومقعد بجانب النافذة للأزواج'
  }
};

function initExtraBadgeTooltips() {
  let activeTip = null;

  document.addEventListener('click', (e) => {
    const badge = e.target.closest('.extra-badge');

    // Close existing tooltip
    if (activeTip) {
      activeTip.remove();
      activeTip = null;
    }

    if (!badge) return;

    const tipKey = badge.dataset.tip;
    const text = EXTRA_TIPS[tipKey] ? (EXTRA_TIPS[tipKey][currentLang] || EXTRA_TIPS[tipKey].en) : '';
    if (!text) return;

    // Create tooltip
    const tip = document.createElement('div');
    tip.className = 'absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-[#0a0f1e] border border-gold/30 text-white text-xs max-w-[200px] text-center shadow-lg z-50';
    tip.textContent = text;
    // Arrow
    const arrow = document.createElement('div');
    arrow.className = 'absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gold/30';
    tip.appendChild(arrow);

    badge.style.position = 'relative';
    badge.appendChild(tip);
    activeTip = tip;

    // Auto-close after 3s
    setTimeout(() => {
      if (activeTip === tip) {
        tip.remove();
        activeTip = null;
      }
    }, 3000);
  });
}

// ========== INCLUDED ACCORDION ==========
function initIncludedAccordion() {
  document.querySelectorAll('.incl-item').forEach(item => {
    item.addEventListener('click', () => {
      const detail = item.querySelector('.incl-detail');
      const chevron = item.querySelector('.incl-chevron');
      const isOpen = !detail.classList.contains('hidden');

      // Close all
      document.querySelectorAll('.incl-item').forEach(other => {
        other.querySelector('.incl-detail').classList.add('hidden');
        other.querySelector('.incl-chevron').style.transform = '';
        other.classList.remove('incl-open');
      });

      if (!isOpen) {
        detail.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
        item.classList.add('incl-open');
      }
    });
  });
}

// ========== EXTRA TOOLTIPS ==========
const EXTRA_TOOLTIPS = {
  alcohol: {
    en: 'Unlimited beer, wine & raki during the cruise',
    tr: 'Cruise boyunca sınırsız bira, şarap ve rakı',
    de: 'Unbegrenztes Bier, Wein & Raki während der Kreuzfahrt',
    es: 'Cerveza, vino y raki ilimitados durante el crucero',
    ru: 'Безлимитное пиво, вино и ракы во время круиза',
    ar: 'بيرة ونبيذ وراكي غير محدود خلال الرحلة'
  },
  transfer: {
    en: 'Round-trip pickup from Sultanahmet, Taksim or Beyoğlu',
    tr: 'Sultanahmet, Taksim veya Beyoğlu\'ndan gidiş-dönüş servis',
    de: 'Hin- und Rücktransfer ab Sultanahmet, Taksim oder Beyoğlu',
    es: 'Recogida ida y vuelta desde Sultanahmet, Taksim o Beyoğlu',
    ru: 'Трансфер туда-обратно из Султанахмет, Таксим или Бейоглу',
    ar: 'نقل ذهاب وعودة من السلطان أحمد أو تقسيم أو بيوغلو'
  },
  romantic: {
    en: 'Private table with candles, flowers & Bosphorus view',
    tr: 'Mum, çiçek ve Boğaz manzaralı özel masa',
    de: 'Privater Tisch mit Kerzen, Blumen & Bosporus-Blick',
    es: 'Mesa privada con velas, flores y vista al Bósforo',
    ru: 'Отдельный стол со свечами, цветами и видом на Босфор',
    ar: 'طاولة خاصة مع شموع وزهور وإطلالة على البوسفور'
  },
  proposal: {
    en: 'Special decoration, photographer, cake & private area',
    tr: 'Özel dekorasyon, fotoğrafçı, pasta ve özel alan',
    de: 'Spezielle Dekoration, Fotograf, Kuchen & privater Bereich',
    es: 'Decoración especial, fotógrafo, pastel y área privada',
    ru: 'Специальное оформление, фотограф, торт и отдельная зона',
    ar: 'ديكور خاص، مصور، كعكة ومنطقة خاصة'
  }
};

function initExtraTooltips() {
  let activeTooltip = null;

  document.querySelectorAll('.extra-info-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      // Close existing tooltip
      if (activeTooltip) {
        activeTooltip.remove();
        if (activeTooltip._btn === btn) { activeTooltip = null; return; }
        activeTooltip = null;
      }

      const key = btn.dataset.tooltip;
      const text = EXTRA_TOOLTIPS[key][currentLang] || EXTRA_TOOLTIPS[key].en;

      const tooltip = document.createElement('div');
      tooltip.className = 'extra-tooltip';
      tooltip.textContent = text;
      tooltip._btn = btn;

      document.body.appendChild(tooltip);

      // Position tooltip above the button
      const rect = btn.getBoundingClientRect();
      requestAnimationFrame(() => {
        const ttWidth = tooltip.offsetWidth;
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
        tooltip.style.left = Math.max(8, rect.right - ttWidth) + 'px';
        tooltip.classList.add('visible');
      });
      activeTooltip = tooltip;

      // Auto-close after 3 seconds
      setTimeout(() => {
        if (activeTooltip === tooltip) {
          tooltip.classList.remove('visible');
          setTimeout(() => tooltip.remove(), 200);
          activeTooltip = null;
        }
      }, 3000);
    });
  });

  // Close on outside click
  document.addEventListener('click', () => {
    if (activeTooltip) {
      activeTooltip.classList.remove('visible');
      setTimeout(() => { if (activeTooltip) { activeTooltip.remove(); activeTooltip = null; } }, 200);
    }
  });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(detectLanguage());
  initLangDropdown();
  initHeader();
  initMobileMenu();
  initBoatSelection();
  initFAQ();
  initReviewFilters();
  initScrollReveal();
  initParticles();
  initGallery();
  initSmoothScroll();
  initCounters();
  initGalleryFilters();
  initCountdown();
  initBookingCount();
  try { initTourPanels(); } catch(e) { console.error('Tour panels error:', e); }
  try { initBookingPanel(); } catch(e) { console.error('Booking panel error:', e); }
  try { initExtraTooltips(); } catch(e) { console.error('Tooltips error:', e); }
  try { initIncludedAccordion(); } catch(e) { console.error('Accordion error:', e); }
  try { initExtraBadgeTooltips(); } catch(e) { console.error('Badge tooltips error:', e); }
  try { initRouteLine(); } catch(e) { console.error('Route line error:', e); }
});

// ========== ROUTE LINE (left side cruise route) ==========
function initRouteLine() {
  const routeLine = document.getElementById('routeLine');
  const boat = document.getElementById('routeBoat');
  const markersContainer = document.getElementById('routeMarkers');
  if (!routeLine || !boat || !markersContainer) return;

  const markerEls = markersContainer.querySelectorAll('.route-marker');
  const sections = [];

  // Build section references and create marker DOM
  markerEls.forEach(m => {
    const sectionId = m.dataset.section;
    const sectionEl = document.getElementById(sectionId);
    if (!sectionEl) return;

    const label = m.dataset.label;

    const svgId = m.dataset.svg || '';
    const time = m.dataset.time || '';
    const activity = m.dataset.activity || '';

    // Create SVG icon dot
    const dot = document.createElement('div');
    dot.className = 'marker-dot';
    if (svgId) {
      dot.innerHTML = `<svg viewBox="0 0 24 24" width="100%" height="100%"><use href="#icon-${svgId}"/></svg>`;
    }
    m.appendChild(dot);

    const labelEl = document.createElement('div');
    labelEl.className = 'marker-label';
    labelEl.textContent = label;
    m.appendChild(labelEl);

    // Create tooltip (shown on tap)
    const tooltip = document.createElement('div');
    tooltip.className = 'marker-tooltip';
    tooltip.innerHTML = `
      <div class="tt-name">${label}</div>
      ${time ? `<div class="tt-time">${time}</div>` : ''}
      ${activity ? `<div class="tt-activity">${activity}</div>` : ''}
    `;
    m.appendChild(tooltip);

    // Tap to toggle tooltip
    m.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = m.classList.contains('tooltip-open');
      markerEls.forEach(other => other.classList.remove('tooltip-open'));
      const rl = document.getElementById('routeLine');
      if (!wasOpen) {
        m.classList.add('tooltip-open');
        if (rl) rl.style.zIndex = '100';
      } else {
        if (rl) rl.style.zIndex = '';
      }
    });

    sections.push({ el: sectionEl, marker: m, id: sectionId });
  });


  function updatePositions() {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;
    const scrollPercent = scrollY / (docH - viewH);

    // Position markers based on section positions

    const totalMarkers = sections.length;
    const marginTop = viewH * 0.06;
    const marginBottom = viewH * 0.16;
    const usableHeight = viewH - marginTop - marginBottom;
    const spacing = usableHeight / (totalMarkers - 1);

    // Boat position: scroll aşağı = gemi aşağı, arrival'da dur
    const arrivalSection = document.getElementById('arrival');
    let maxScrollPercent = 1;
    if (arrivalSection) {
      const arrivalAbsTop = scrollY + arrivalSection.getBoundingClientRect().top + arrivalSection.offsetHeight;
      maxScrollPercent = arrivalAbsTop / (docH - viewH);
    }
    const clampedPercent = Math.min(scrollPercent / Math.max(maxScrollPercent, 0.01), 1);
    const boatY = marginTop + clampedPercent * usableHeight;
    boat.style.top = boatY + 'px';
    boat.style.transform = 'translateX(-50%) scale(1.3)';
    // Arrival'dan sonra çizgiyi gizle
    boat.style.opacity = scrollPercent > maxScrollPercent + 0.02 ? '0.3' : '1';

    // Markers: evenly spaced, active = gemi en yakın olana
    let nearestIdx = 0;
    let nearestDist = Infinity;

    sections.forEach(({ el, marker }, index) => {
      const markerY = marginTop + index * spacing;
      marker.style.top = markerY + 'px';

      const dist = Math.abs(boatY - markerY);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIdx = index;
      }
    });

    // Aktif marker + yakın komşuları göster, diğerleri gizli
    sections.forEach(({ el, marker }, index) => {
      const distance = Math.abs(index - nearestIdx);
      marker.classList.toggle('active', index === nearestIdx);
      marker.classList.toggle('nearby', distance === 1);
      // 2'den uzak olanlar tamamen gizli (CSS opacity:0 ile)
    });

    // Inline landmark cards — grow when in viewport center
    const inlineCards = document.querySelectorAll('.route-landmark');
    inlineCards.forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.top + cardRect.height / 2;
      const dist = Math.abs(cardCenter - viewH / 2);
      card.classList.toggle('in-view', dist < viewH * 0.25);
    });
  }

  // Throttled scroll handler
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updatePositions();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Close tooltips on outside click
  document.addEventListener('click', () => {
    markerEls.forEach(m => m.classList.remove('tooltip-open'));
    const rl = document.getElementById('routeLine');
    if (rl) rl.style.zIndex = '';
  });

  // Initial position
  setTimeout(updatePositions, 200);
  window.addEventListener('resize', updatePositions);
}
