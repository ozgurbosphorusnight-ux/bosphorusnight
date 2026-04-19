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
      if (key.startsWith('faq.a')) {
        el.innerHTML = T[key][lang];
      } else {
        el.textContent = T[key][lang];
      }
    }
  });

  // Update translatable placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[key] && T[key][lang]) {
      el.placeholder = T[key][lang];
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

  // Update mobile bar tour label for new language
  const barLabel = document.getElementById('mobileBarTourLabel');
  if (barLabel && typeof selectedTourType !== 'undefined' && selectedTourType) {
    const t1 = T[`tour.${selectedTourType}.title1`];
    const t2 = T[`tour.${selectedTourType}.title2`];
    const name = (t1 ? t1[lang] || t1.en : '') + ' ' + (t2 ? t2[lang] || t2.en : '');
    const selectedText = T['booking.selected'] ? (T['booking.selected'][lang] || T['booking.selected'].en) : 'selected';
    barLabel.textContent = name.trim() + ' ' + selectedText;
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

      // Toggle dinner vs default packages grid + info section
      const dinnerGrid = document.getElementById('dinnerPackagesGrid');
      const defaultGrid = document.getElementById('defaultPackagesGrid');
      const dinnerInfo = document.getElementById('dinnerInfoSection');
      if (dinnerGrid && defaultGrid) {
        if (tourType === 'dinner') {
          dinnerGrid.classList.remove('hidden');
          defaultGrid.classList.add('hidden');
          if (dinnerInfo) dinnerInfo.classList.remove('hidden');
        } else {
          dinnerGrid.classList.add('hidden');
          defaultGrid.classList.remove('hidden');
          if (dinnerInfo) dinnerInfo.classList.add('hidden');
        }
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
        // Only override onclick for <a> tags (desktop sidebar links), not <button> tags (wizard buttons)
        if (btn.tagName === 'A') {
          btn.onclick = function(e) {
            e.preventDefault();
            const pkg = btn.dataset.package.toLowerCase();
            const bookPackage = document.getElementById('bookPackage');
            if (bookPackage) bookPackage.value = pkg;
            if (typeof calculatePrice === 'function') calculatePrice();

            // Open wizard with package (both mobile and desktop)
            openMobilePanel(pkg);
          };
        }
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

  // Update package options (dinner has only standard/vip, others have standard/premium/vip)
  ['bookPackage', 'bookPackageMobile'].forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const premOpt = sel.querySelector('option[value="premium"]');
    if (tourType === 'dinner') {
      // Hide premium option for dinner
      if (premOpt) { premOpt.disabled = true; premOpt.style.display = 'none'; }
      if (sel.value === 'premium') sel.value = 'standard';
    } else {
      // Show premium option for other tours
      if (premOpt) { premOpt.disabled = false; premOpt.style.display = ''; }
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
  classic:  { standard: 24, vip: 55 },
  premium:  { standard: 24, vip: 55 },
  luxury:   { standard: 24, vip: 55 }
};

// Dinner cruise pricing: base + extras
const DINNER_PRICES = {
  standard: { base: 24, oldPrice: 40 },
  vip:      { base: 55, oldPrice: 90 },
  extras: { glass2: 7, unlimited: 15, transfer: 10, romantic: 15 }
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
      const isDinnerTour = typeof selectedTourType !== 'undefined' && selectedTourType === 'dinner';

      ['alcoholPanel', 'alcoholPanelMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          // For dinner: hide counter (everyone gets same option)
          // For other tours: show counter for alcohol
          if (drink === 'alcohol' && !isDinnerTour) el.classList.remove('hidden');
          else el.classList.add('hidden');
        }
      });
      ['softInfo', 'softInfoMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (drink === 'soft') el.classList.remove('hidden');
          else if (drink === 'glass2') {
            el.classList.remove('hidden');
            const span = el.querySelector('span');
            if (span) span.textContent = '2 glasses of alcohol per person';
          }
          else el.classList.add('hidden');
        }
      });

      if (drink === 'alcohol' && !isDinnerTour) {
        ['alcoholCount', 'alcoholCountMobile'].forEach(id => {
          const el = document.getElementById(id);
          if (el && parseInt(el.textContent) === 0) el.textContent = '1';
        });
      } else {
        ['alcoholCount', 'alcoholCountMobile'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.textContent = '0';
        });
      }
      if (!isDinnerTour) updateAlcoholInfo();
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

  // Mobile panel open/close (mobileBookBtn onclick is in HTML)
  const mobileOverlay = document.getElementById('mobileBookOverlay');
  const mobileClose = document.getElementById('mobileBookClose');
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

function openMobilePanel(pkg) {
  const isDesktop = window.innerWidth >= 1024;
  const overlay = document.getElementById('mobileBookOverlay');
  const panel = document.getElementById('mobileBookPanel');
  if (!isDesktop) {
    if (overlay) { overlay.classList.remove('hidden'); requestAnimationFrame(() => overlay.classList.add('open')); }
    if (panel) panel.classList.add('open');
    document.body.style.overflow = 'hidden';
    const topBar = document.getElementById('topBar');
    if (topBar) topBar.style.display = 'none';
  }

  // Reset wizard to step 1
  wizGoTo(1);

  // Set package if provided
  if (pkg === 'standard' || pkg === 'vip') {
    wizSelectPackage(pkg);
  }

  // Set default date to today
  const wizDate = document.getElementById('wizDate');
  if (wizDate && !wizDate.value) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    wizDate.value = `${yyyy}-${mm}-${dd}`;
    wizDate.min = `${yyyy}-${mm}-${dd}`;
  }

  // Sync language dropdown with current site language
  const wizLang = document.getElementById('wizLang');
  if (wizLang) {
    wizLang.value = currentLang;
    // Change site language when dropdown changes
    wizLang.onchange = function() {
      setLanguage(this.value);
      wizCalcPrice();
      wizUpdateProgress(wizState.step);
    };
  }

  wizCalcPrice();
}

function closeMobilePanel() {
  if (window.innerWidth >= 1024) return; // Desktop'ta kapatılamaz
  const overlay = document.getElementById('mobileBookOverlay');
  const panel = document.getElementById('mobileBookPanel');
  if (panel) panel.classList.remove('open');
  if (overlay) { overlay.classList.remove('open'); setTimeout(() => overlay.classList.add('hidden'), 300); }
  document.body.style.overflow = '';
  const topBar = document.getElementById('topBar');
  if (topBar) topBar.style.display = '';
}

// Swipe down to close — KALDIRILDI

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
  const pkg = document.getElementById('bookPackage').value;
  const adults = parseInt(document.getElementById('adultCount').textContent);
  const childCount = parseInt(document.getElementById('childCount').textContent);
  const isDinner = typeof selectedTourType !== 'undefined' && selectedTourType === 'dinner';

  // Determine transfer
  const transferCheckbox = document.querySelector('.booking-extra[value="transfer"]');
  const hasTransfer = transferCheckbox ? transferCheckbox.checked : false;

  let total = 0;
  const ageInputs = document.getElementById('childAgeInputs');

  if (isDinner && DINNER_PRICES[pkg]) {
    // DINNER CRUISE: base price + extras per person
    const basePrice = DINNER_PRICES[pkg].base;
    const transferExtra = DINNER_PRICES.extras.transfer;

    // Determine alcohol extra per person
    let alcoholExtra = 0;
    if (window._drinkSelected === 'alcohol') {
      alcoholExtra = DINNER_PRICES.extras.unlimited; // €15/person
    } else if (window._drinkSelected === 'glass2') {
      alcoholExtra = DINNER_PRICES.extras.glass2; // €7/person
    }

    // Adults
    total = adults * (basePrice + alcoholExtra + (hasTransfer ? transferExtra : 0));

    // Children pricing (base price + transfer, no alcohol)
    if (childCount > 0 && ageInputs) {
      ageInputs.querySelectorAll('select').forEach(sel => {
        let childPrice = basePrice + (hasTransfer ? transferExtra : 0);
        if (sel.value === '0-3') total += 0;
        else if (sel.value === '3-5') total += Math.round(childPrice * 0.5);
        else total += childPrice;
      });
    }
  } else {
    // OTHER TOURS: eski sistem
    const boat = document.getElementById('bookBoat').value;
    const prices = window._activePrices || PRICES;
    const basePrice = (prices[boat] && prices[boat][pkg]) ? prices[boat][pkg] : 35;

    total = basePrice * adults;

    if (childCount > 0 && ageInputs) {
      ageInputs.querySelectorAll('select').forEach(sel => {
        if (sel.value === '0-3') total += 0;
        else if (sel.value === '3-5') total += Math.round(basePrice * 0.5);
        else total += basePrice;
      });
    }

    const alcoholCount = parseInt(document.getElementById('alcoholCount').textContent) || 0;
    total += alcoholCount * 10;
  }

  // Other extras (romantic table, proposal etc)
  document.querySelectorAll('.booking-extra').forEach(input => {
    if (!input.checked) return;
    // Skip transfer for dinner — already in price
    if (isDinner && input.value === 'transfer') return;
    const price = parseInt(input.dataset.price) || 0;
    if (price === 0) return;

    const pricing = input.dataset.pricing;
    if (pricing === 'person') {
      total += price * adults;
      if (childCount > 0 && ageInputs) {
        ageInputs.querySelectorAll('select').forEach(sel => {
          if (sel.value === '3-5') total += Math.round(price * 0.5);
          else if (sel.value !== '0-3') total += price;
        });
      }
    } else if (pricing === 'table') {
      total += price;
    }
  });

  // Update displays
  const bookTotalEl = document.getElementById('bookTotal');
  if (bookTotalEl) bookTotalEl.textContent = `€${total}`;
  const bookTotalMobileEl = document.getElementById('bookTotalMobile');
  if (bookTotalMobileEl) bookTotalMobileEl.textContent = `€${total}`;

  // Update mobile bar starting price
  const minPrice = 24;
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

// ========== MOBILE BOOKING WIZARD ==========
// Wizard state
const wizState = {
  step: 1,
  pkg: 'standard',
  drink: 'soft',
  drinkCounts: { soft: 0, glass2: 0, unlimited: 0 },
  transfer: false,
  romantic: false,
  contact: null,
  transferZoneExtra: 0,
  transferLat: null,
  transferLng: null
};

function wizUpdateProgress(step) {
  const labels = [
    (T['wizard.stepPackage'] && T['wizard.stepPackage'][currentLang]) || 'Package',
    (T['wizard.stepExtras'] && T['wizard.stepExtras'][currentLang]) || 'Extras',
    (T['wizard.stepInfo'] && T['wizard.stepInfo'][currentLang]) || 'Info',
    (T['wizard.stepTicket'] && T['wizard.stepTicket'][currentLang]) || 'Ticket'
  ];
  document.querySelectorAll('.wiz-progress').forEach(bar => {
    let html = '';
    for (let i = 1; i <= 4; i++) {
      const done = i < step;
      const active = i === step;
      const circleClass = done ? 'bg-green-500 text-white' : active ? 'bg-[#c9a84c] text-[#0b1120]' : 'bg-white/10 text-white/30';
      const labelClass = done ? 'text-green-400' : active ? 'text-[#c9a84c]' : 'text-white/30';
      const lineClass = done ? 'bg-green-500/50' : 'bg-white/10';
      html += `<div class="flex flex-col items-center flex-1"><div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${circleClass}">${done ? '✓' : i}</div><span class="text-[9px] mt-1 font-medium ${labelClass}">${labels[i-1]}</span></div>`;
      if (i < 4) html += `<div class="h-0.5 flex-1 ${lineClass} -mt-4"></div>`;
    }
    bar.innerHTML = html;
  });
}

function wizGoTo(n) {
  wizState.step = n;
  ['bookStep1', 'bookStep2', 'bookStep3', 'bookStep4'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', i + 1 !== n);
  });
  // Show/hide bottom bar (steps 1, 2, 3 — hidden on step 4)
  const bar = document.getElementById('wizBottomBar');
  if (bar) bar.classList.toggle('hidden', n === 4);
  // Scroll content to top
  const content = document.getElementById('mobileBookPanelContent');
  if (content) content.scrollTop = 0;
  // Update progress bars
  wizUpdateProgress(n);
  // Reset drink counts when entering step 2
  if (n === 2) wizResetDrinkCounts();
  // Show/hide pickup address block in step 3 based on transfer selection
  if (n === 3) {
    const addrBlock = document.getElementById('wizAddressBlock');
    if (addrBlock) addrBlock.classList.toggle('hidden', !wizState.transfer);
  }
  // Update price
  wizCalcPrice();
  // Build summary on step 4
  if (n === 4) wizBuildSummary();
}

function wizNext() {
  // Step 2 → 3: validate drinks assigned
  if (wizState.step === 2) {
    const adults = parseInt(document.getElementById('wizAdults').textContent) || 2;
    const dc = wizState.drinkCounts;
    const assigned = dc.soft + dc.glass2 + dc.unlimited;
    if (assigned !== adults) {
      const warn = document.getElementById('wizDrinkWarning');
      if (warn) warn.classList.remove('hidden');
      return;
    }
  }
  // Step 3 → 4: validate each field with individual warnings
  if (wizState.step === 3) {
    const name = (document.getElementById('wizGuestName')?.value || '').trim();
    const phone = (document.getElementById('wizPhone')?.value || '').trim();
    const address = (document.getElementById('wizAddress')?.value || '').trim();
    const nameWarn = document.getElementById('wizNameWarning');
    const phoneWarn = document.getElementById('wizPhoneWarning');
    const contactWarn = document.getElementById('wizContactMethodWarning');
    // Hide all first
    if (nameWarn) nameWarn.classList.add('hidden');
    if (phoneWarn) phoneWarn.classList.add('hidden');
    if (contactWarn) contactWarn.classList.add('hidden');

    let valid = true;
    if (!name) { if (nameWarn) nameWarn.classList.remove('hidden'); valid = false; }
    if (!phone) { if (phoneWarn) phoneWarn.classList.remove('hidden'); valid = false; }
    if (!wizState.contact) { if (contactWarn) contactWarn.classList.remove('hidden'); valid = false; }
    if (wizState.transfer && !address) {
      const addrWarn = document.getElementById('wizTransferZoneMsg');
      if (addrWarn) { addrWarn.innerHTML = `<span class="text-red-400">${(T['wizard.enterAddress'] && T['wizard.enterAddress'][currentLang]) || 'Please enter your pickup address'}</span>`; addrWarn.classList.remove('hidden'); }
      valid = false;
    }
    if (wizState.transfer && address && !detectTransferZone(address)) {
      const zoneMsg = document.getElementById('wizTransferZoneMsg');
      const txt = { en: 'We do not offer transfer service to this area', tr: 'Bu bölgeye transfer hizmetimiz bulunmamaktadır', de: 'Für dieses Gebiet bieten wir keinen Transferservice an', es: 'No ofrecemos servicio de traslado a esta zona', ru: 'Мы не предоставляем трансфер в этот район', ar: 'لا نقدم خدمة النقل إلى هذه المنطقة' }[currentLang] || 'We do not offer transfer service to this area';
      if (zoneMsg) { zoneMsg.innerHTML = `<span class="text-red-400">✕ ${txt}</span>`; zoneMsg.classList.remove('hidden'); }
      valid = false;
    }
    if (!valid) return;
  }
  if (wizState.step < 4) wizGoTo(wizState.step + 1);
}

function wizSelectPackage(pkg) {
  wizState.pkg = pkg;
  const stdBtn = document.getElementById('wizPkgStandard');
  const vipBtn = document.getElementById('wizPkgVip');
  if (stdBtn) {
    stdBtn.className = pkg === 'standard'
      ? 'wiz-pkg-btn flex-1 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]'
      : 'wiz-pkg-btn flex-1 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all border-white/20 bg-white/5 text-white/50';
  }
  if (vipBtn) {
    vipBtn.className = pkg === 'vip'
      ? 'wiz-pkg-btn flex-1 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]'
      : 'wiz-pkg-btn flex-1 py-2.5 rounded-lg text-sm font-semibold border-2 transition-all border-white/20 bg-white/5 text-white/50';
  }
  // Also sync to desktop sidebar for price calc compatibility
  const desktopPkg = document.getElementById('bookPackage');
  if (desktopPkg) desktopPkg.value = pkg;
  wizCalcPrice();
}

function wizGuest(id, dir) {
  const el = document.getElementById(id);
  if (!el) return;
  let val = parseInt(el.textContent) || 0;
  val += dir;
  if (id === 'wizAdults' && val < 1) val = 1;
  if (id === 'wizChildren' && val < 0) val = 0;
  if (val > 20) val = 20;
  el.textContent = val;

  // Sync to desktop panel
  if (id === 'wizAdults') {
    const desktop = document.getElementById('adultCount');
    if (desktop) desktop.textContent = val;
    const mobileLegacy = document.getElementById('adultCountMobile');
    if (mobileLegacy) mobileLegacy.textContent = val;
  }
  if (id === 'wizChildren') {
    const desktop = document.getElementById('childCount');
    if (desktop) desktop.textContent = val;
    const mobileLegacy = document.getElementById('childCountMobile');
    if (mobileLegacy) mobileLegacy.textContent = val;
    wizUpdateChildAges(val);
  }
  wizCalcPrice();
}

function wizUpdateChildAges(count) {
  const container = document.getElementById('wizChildAges');
  const inputs = document.getElementById('wizChildAgeInputs');
  if (!container || !inputs) return;
  if (count === 0) {
    container.classList.add('hidden');
    inputs.innerHTML = '';
    return;
  }
  container.classList.remove('hidden');
  // Keep existing selects, add/remove as needed
  const existing = inputs.querySelectorAll('select');
  if (existing.length < count) {
    for (let i = existing.length; i < count; i++) {
      const sel = document.createElement('select');
      sel.className = 'bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white focus:border-[#c9a84c]/50 focus:outline-none appearance-none pr-7';
      sel.style.cssText = "background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23c9a84c%22 stroke-width=%222%22%3E%3Cpath stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 6px center; background-size: 14px;";
      sel.innerHTML = '<option value="0-3">0-3</option><option value="3-5">3-5</option><option value="5+" selected>5+</option>';
      sel.addEventListener('change', () => wizCalcPrice());
      inputs.appendChild(sel);
    }
  } else if (existing.length > count) {
    for (let i = existing.length - 1; i >= count; i--) {
      existing[i].remove();
    }
  }
}

function wizSelectDrink(drink) {
  wizState.drink = drink;
  const btns = { soft: 'wizDrinkSoft', glass2: 'wizDrinkGlass2', unlimited: 'wizDrinkUnlimited' };
  const activeClass = 'wiz-drink-btn flex-1 text-xs py-2.5 rounded-lg border-2 font-medium transition-all border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]';
  const inactiveClass = 'wiz-drink-btn flex-1 text-xs py-2.5 rounded-lg border-2 font-medium transition-all border-white/20 bg-white/5 text-white/50';
  Object.entries(btns).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) el.className = key === drink ? activeClass : inactiveClass;
  });

  // Update description
  const desc = document.getElementById('wizDrinkDesc');
  if (desc) {
    const descKeys = {
      soft: 'wizard.softDesc',
      glass2: 'wizard.glass2Desc',
      unlimited: 'wizard.unlimitedDesc'
    };
    const descTexts = {
      soft: 'Unlimited tea, coffee, water, cola & juice',
      glass2: 'Choose from local wine, beer, raki, vodka, or gin',
      unlimited: 'Unlimited local wine, beer, raki, vodka, gin all night'
    };
    desc.setAttribute('data-i18n', descKeys[drink]);
    desc.textContent = (T[descKeys[drink]] && T[descKeys[drink]][currentLang]) || descTexts[drink];
  }

  // Sync to legacy drink state
  window._drinkSelected = drink === 'unlimited' ? 'alcohol' : drink;
  wizCalcPrice();
}

function wizDrinkCount(type, dir) {
  const adults = parseInt(document.getElementById('wizAdults').textContent) || 2;
  const counts = wizState.drinkCounts;
  const assigned = counts.soft + counts.glass2 + counts.unlimited;

  if (dir === 1) {
    if (assigned >= adults) return;
    counts[type]++;
  } else {
    if (counts[type] <= 0) return;
    counts[type]--;
  }

  // Update displays
  document.getElementById('wizSoftCount').textContent = counts.soft;
  document.getElementById('wizGlass2Count').textContent = counts.glass2;
  document.getElementById('wizUnlimitedCount').textContent = counts.unlimited;

  const newAssigned = counts.soft + counts.glass2 + counts.unlimited;
  const totalEl = document.getElementById('wizDrinkTotal');
  if (totalEl) {
    if (newAssigned === adults) {
      totalEl.textContent = `✓ ${(T['wizard.drinkComplete'] && T['wizard.drinkComplete'][currentLang]) || 'Drink selection complete'}`;
      totalEl.className = 'text-xs text-green-400 text-right font-medium';
    } else {
      totalEl.textContent = `${newAssigned} / ${adults} — ${(T['wizard.drinkRemaining'] && T['wizard.drinkRemaining'][currentLang]) || 'Please select drinks for all guests'}`;
      totalEl.className = 'text-xs text-red-400 text-right font-medium';
    }
  }

  // Show/hide warning
  const warn = document.getElementById('wizDrinkWarning');
  if (warn) warn.classList.toggle('hidden', newAssigned === adults);

  wizCalcPrice();
}

function wizResetDrinkCounts() {
  const adults = parseInt(document.getElementById('wizAdults').textContent) || 2;
  wizState.drinkCounts = { soft: 0, glass2: 0, unlimited: 0 };
  const softEl = document.getElementById('wizSoftCount');
  const glass2El = document.getElementById('wizGlass2Count');
  const unlimitedEl = document.getElementById('wizUnlimitedCount');
  if (softEl) softEl.textContent = '0';
  if (glass2El) glass2El.textContent = '0';
  if (unlimitedEl) unlimitedEl.textContent = '0';
  const totalEl = document.getElementById('wizDrinkTotal');
  if (totalEl) {
    totalEl.textContent = `0 / ${adults} — ${(T['wizard.drinkRemaining'] && T['wizard.drinkRemaining'][currentLang]) || 'Please select drinks for all guests'}`;
    totalEl.className = 'text-xs text-red-400 text-right font-medium';
  }
}

function wizToggle(type, val) {
  wizState[type] = val;
  const activeClass = 'flex-1 text-xs py-2.5 rounded-lg border-2 font-medium transition-all border-[#c9a84c] bg-[#c9a84c]/10 text-[#c9a84c]';
  const inactiveClass = 'flex-1 text-xs py-2.5 rounded-lg border-2 font-medium transition-all border-white/20 bg-white/5 text-white/50';
  if (type === 'transfer') {
    const no = document.getElementById('wizTransferNo');
    const yes = document.getElementById('wizTransferYes');
    if (no) no.className = val ? inactiveClass : activeClass;
    if (yes) yes.className = val ? activeClass : inactiveClass;
  }
  if (type === 'romantic') {
    const no = document.getElementById('wizRomanticNo');
    const yes = document.getElementById('wizRomanticYes');
    if (no) no.className = val ? inactiveClass : activeClass;
    if (yes) yes.className = val ? activeClass : inactiveClass;
  }
  wizCalcPrice();
}

function wizSelectContact(channel) {
  wizState.contact = channel;
  const colors = { whatsapp: 'text-[#25D366]', telegram: 'text-[#26A5E4]', wechat: 'text-[#07C160]' };
  ['whatsapp', 'telegram', 'wechat'].forEach(c => {
    const btn = document.getElementById('wizContact' + c.charAt(0).toUpperCase() + c.slice(1));
    if (btn) btn.className = `wiz-contact-btn flex flex-col items-center gap-1 transition-all ${c === channel ? colors[c] : 'text-white/25 hover:text-white/50'}`;
  });
}

function wizUpdateTicketName() {
  const val = (document.getElementById('wizGuestName')?.value || '').trim();
  const el = document.getElementById('wizTicketName');
  if (el) el.textContent = val || '—';
}

function wizUpdateTicketPhone() {
  const code = document.getElementById('wizCountryCode')?.value || '+90';
  const num = (document.getElementById('wizPhone')?.value || '').trim();
  const el = document.getElementById('wizTicketPhone');
  if (el) el.textContent = num ? `${code} ${num}` : '—';
}
function wizGetFullPhone() {
  const code = document.getElementById('wizCountryCode')?.value || '+90';
  const num = (document.getElementById('wizPhone')?.value || '').trim();
  return num ? `${code} ${num}` : '';
}

function wizCalcPrice() {
  const adults = parseInt(document.getElementById('wizAdults')?.textContent) || 2;
  const children = parseInt(document.getElementById('wizChildren')?.textContent) || 0;
  const pkg = wizState.pkg;

  const basePrice = DINNER_PRICES[pkg] ? DINNER_PRICES[pkg].base : 24;
  const oldPrice = DINNER_PRICES[pkg] ? DINNER_PRICES[pkg].oldPrice : 40;

  // Drink extras — per person counts
  const dc = wizState.drinkCounts;
  const drinkCost = (dc.glass2 * DINNER_PRICES.extras.glass2) + (dc.unlimited * DINNER_PRICES.extras.unlimited);

  // Transfer per person (adults + children)
  const totalGuests = adults + children;
  const transferExtra = wizState.transfer ? DINNER_PRICES.extras.transfer : 0;
  const transferCost = transferExtra * totalGuests;

  // Base total (adults + children)
  let total = adults * basePrice;

  // Children pricing
  const childAgeInputs = document.getElementById('wizChildAgeInputs');
  if (children > 0 && childAgeInputs) {
    childAgeInputs.querySelectorAll('select').forEach(sel => {
      if (sel.value === '0-3') { /* free */ }
      else if (sel.value === '3-5') total += Math.round(basePrice * 0.5);
      else total += basePrice;
    });
  }

  // Transfer tek fiyat €10/kişi (izinli bölgelerde), zone surcharge kaldırıldı 2026-04-19
  total += drinkCost + transferCost;
  if (wizState.romantic) total += DINNER_PRICES.extras.romantic;

  // Old price calculation
  let oldTotal = adults * oldPrice;
  if (children > 0 && childAgeInputs) {
    childAgeInputs.querySelectorAll('select').forEach(sel => {
      if (sel.value === '0-3') { /* free */ }
      else if (sel.value === '3-5') oldTotal += Math.round(oldPrice * 0.5);
      else oldTotal += oldPrice;
    });
  }
  oldTotal += drinkCost + transferCost;
  if (wizState.romantic) oldTotal += DINNER_PRICES.extras.romantic;

  // Update bottom bar price summary
  const priceEl = document.getElementById('wizBottomPrice');
  if (priceEl) {
    const ppWord = { en: '/person', tr: '/kişi', de: '/Person', es: '/persona', ru: '/чел.', ar: '/شخص' }[currentLang] || '/person';
    const adultWord = { en: 'adult', tr: 'yetişkin', de: 'Erwachsene', es: 'adulto', ru: 'взр.', ar: 'بالغ' }[currentLang] || 'adult';
    const adultsWord = { en: 'adults', tr: 'yetişkin', de: 'Erwachsene', es: 'adultos', ru: 'взр.', ar: 'بالغين' }[currentLang] || 'adults';
    const childWord = { en: 'child', tr: 'çocuk', de: 'Kind', es: 'niño', ru: 'реб.', ar: 'طفل' }[currentLang] || 'child';
    const childrenWord = { en: 'children', tr: 'çocuk', de: 'Kinder', es: 'niños', ru: 'дет.', ar: 'أطفال' }[currentLang] || 'children';
    let paxText = `${adults} ${adults === 1 ? adultWord : adultsWord}`;
    if (children > 0) paxText += `, ${children} ${children === 1 ? childWord : childrenWord}`;
    priceEl.innerHTML = `<div class="flex items-baseline gap-1.5"><span class="line-through text-white/30 text-xs">€${oldPrice}</span> <span class="text-[#c9a84c] font-bold text-lg">€${basePrice}</span><span class="text-white/40 text-xs">${ppWord}</span></div><div><span class="text-white/40 text-xs">${paxText}</span></div>`;
  }
  const totalEl = document.getElementById('wizBottomTotal');
  if (totalEl) totalEl.textContent = `€${total}`;

  // Update step 3 total
  const wizTotalEl = document.getElementById('wizTotal');
  if (wizTotalEl) wizTotalEl.textContent = `€${total}`;

  // Also update desktop total for compatibility
  const desktopTotal = document.getElementById('bookTotal');
  if (desktopTotal) desktopTotal.textContent = `€${total}`;
  const mobileTotal = document.getElementById('bookTotalMobile');
  if (mobileTotal) mobileTotal.textContent = `€${total}`;

  return total;
}

function wizBuildSummary() {
  const adults = parseInt(document.getElementById('wizAdults')?.textContent) || 2;
  const children = parseInt(document.getElementById('wizChildren')?.textContent) || 0;
  const date = document.getElementById('wizDate')?.value || '';
  const lang = document.getElementById('wizLang')?.value || 'English';
  const pkg = wizState.pkg;

  const pkgLabels = {
    standard: { en: 'Standard Dinner Cruise', tr: 'Standard Akşam Turu', de: 'Standard Dinner-Kreuzfahrt', es: 'Crucero Cena Estándar', ru: 'Стандартный ужин-круиз', ar: 'رحلة عشاء قياسية' },
    vip: { en: 'VIP Dinner Cruise', tr: 'VIP Akşam Turu', de: 'VIP Dinner-Kreuzfahrt', es: 'Crucero Cena VIP', ru: 'VIP ужин-круиз', ar: 'رحلة عشاء VIP' }
  };
  const pkgLabel = (pkgLabels[pkg] && pkgLabels[pkg][currentLang]) || pkgLabels[pkg].en;

  const drinkNames = {
    soft: { en: 'Soft Drinks', tr: 'Alkolsüz İçecek', de: 'Alkoholfreie Getränke', es: 'Bebidas Sin Alcohol', ru: 'Безалкогольные напитки', ar: 'مشروبات غير كحولية' },
    glass2: { en: 'Limited Alcohol (2 Glasses)', tr: 'Sınırlı Alkol (2 Kadeh)', de: 'Begrenzter Alkohol (2 Gläser)', es: 'Alcohol Limitado (2 Copas)', ru: 'Ограниченный алкоголь (2 бокала)', ar: 'كحول محدود (كأسان)' },
    unlimited: { en: 'Unlimited Alcohol', tr: 'Sınırsız Alkol', de: 'Unbegrenzter Alkohol', es: 'Alcohol Ilimitado', ru: 'Безлимитный алкоголь', ar: 'كحول غير محدود' }
  };
  const dc = wizState.drinkCounts;
  const drinkParts = [];
  if (dc.soft > 0) drinkParts.push(`${dc.soft} ${(drinkNames.soft[currentLang] || 'Soft Drinks')}`);
  if (dc.glass2 > 0) drinkParts.push(`${dc.glass2} x ${(drinkNames.glass2[currentLang] || '2 Glasses')}`);
  if (dc.unlimited > 0) drinkParts.push(`${dc.unlimited} x ${(drinkNames.unlimited[currentLang] || 'Unlimited')}`);
  const drinkLabel = drinkParts.join(', ') || (drinkNames.soft[currentLang] || 'Soft Drinks');

  // Format date
  let dateStr = date;
  try {
    const d = new Date(date + 'T00:00:00');
    const locales = { en: 'en-US', tr: 'tr-TR', de: 'de-DE', es: 'es-ES', ru: 'ru-RU', ar: 'ar-SA' };
    dateStr = d.toLocaleDateString(locales[currentLang] || 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  } catch(e) {}

  // Ticket fields
  const ticketPkg = document.getElementById('wizTicketPkg');
  const ticketDate = document.getElementById('wizTicketDate');
  const ticketGuests = document.getElementById('wizTicketGuests');
  const ticketTransfer = document.getElementById('wizTicketTransfer');
  const ticketRomantic = document.getElementById('wizTicketRomantic');

  if (ticketPkg) ticketPkg.textContent = pkgLabel;
  if (ticketDate) {
    try {
      const d = new Date(date + 'T00:00:00');
      const locales = { en: 'en-US', tr: 'tr-TR', de: 'de-DE', es: 'es-ES', ru: 'ru-RU', ar: 'ar-SA' };
      ticketDate.textContent = d.toLocaleDateString(locales[currentLang] || 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch(e) { ticketDate.textContent = date; }
  }
  if (ticketGuests) {
    const adultWords = { en: 'Adult', tr: 'Yetişkin', de: 'Erwachsene', es: 'Adulto', ru: 'Взрослый', ar: 'بالغ' };
    const childWords = { en: 'Child', tr: 'Çocuk', de: 'Kind', es: 'Niño', ru: 'Ребёнок', ar: 'طفل' };
    const adultWord = adultWords[currentLang] || 'Adult';
    const childWord = childWords[currentLang] || 'Child';
    let guestText = `${adults} ${adultWord}`;
    if (children > 0) guestText += `, ${children} ${childWord}`;
    ticketGuests.textContent = guestText;
  }
  if (ticketTransfer) {
    const mpText = (T['ticket.meetingPoint'] && T['ticket.meetingPoint'][currentLang]) || 'Meeting Point';
    const htText = (T['ticket.hotelPickup'] && T['ticket.hotelPickup'][currentLang]) || 'Hotel Pickup';
    ticketTransfer.textContent = wizState.transfer ? htText : mpText;
  }
  if (ticketRomantic) ticketRomantic.classList.toggle('hidden', !wizState.romantic);

  // Guest name, phone, address from step 3
  const guestName = (document.getElementById('wizGuestName')?.value || '').trim();
  const guestPhone = wizGetFullPhone();
  const guestAddress = (document.getElementById('wizAddress')?.value || '').trim();
  const ticketName = document.getElementById('wizTicketName');
  const ticketPhone = document.getElementById('wizTicketPhone');
  const ticketAddress = document.getElementById('wizTicketAddress');
  const ticketAddressBlock = document.getElementById('wizTicketAddressBlock');
  if (ticketName) ticketName.textContent = guestName || '—';
  if (ticketPhone) ticketPhone.textContent = guestPhone || '—';
  if (ticketAddressBlock) ticketAddressBlock.classList.toggle('hidden', !wizState.transfer);
  if (ticketAddress) ticketAddress.textContent = guestAddress || '—';

  // Price breakdown
  const priceLines = document.getElementById('wizPriceLines');
  if (priceLines) {
    const basePrice = DINNER_PRICES[pkg] ? DINNER_PRICES[pkg].base : 24;
    const totalGuests = adults + children;
    const transferExtra = wizState.transfer ? DINNER_PRICES.extras.transfer : 0;
    // zoneExtra kaldırıldı 2026-04-19 — tek fiyat transfer

    let html = '';

    // Soft drinks guests
    if (dc.soft > 0) {
      html += `<div class="flex justify-between text-sm"><div><p class="text-white/70">${pkgLabel}</p><p class="text-white/30 text-[10px]">${dc.soft} x €${basePrice}</p></div><span class="text-white font-medium">€${dc.soft * basePrice}</span></div>`;
    }

    // Limited alcohol guests
    if (dc.glass2 > 0) {
      const glass2Label = drinkNames.glass2[currentLang] || 'Limited Alcohol';
      const perPerson = basePrice + DINNER_PRICES.extras.glass2;
      html += `<div class="flex justify-between text-sm"><div><p class="text-white/70">${pkgLabel} + ${glass2Label}</p><p class="text-white/30 text-[10px]">${dc.glass2} x (€${basePrice}+€${DINNER_PRICES.extras.glass2})</p></div><span class="text-white font-medium">€${dc.glass2 * perPerson}</span></div>`;
    }

    // Unlimited alcohol guests
    if (dc.unlimited > 0) {
      const unlimitedLabel = drinkNames.unlimited[currentLang] || 'Unlimited Alcohol';
      const perPerson = basePrice + DINNER_PRICES.extras.unlimited;
      html += `<div class="flex justify-between text-sm"><div><p class="text-white/70">${pkgLabel} + ${unlimitedLabel}</p><p class="text-white/30 text-[10px]">${dc.unlimited} x (€${basePrice}+€${DINNER_PRICES.extras.unlimited})</p></div><span class="text-white font-medium">€${dc.unlimited * perPerson}</span></div>`;
    }

    // Transfer
    if (transferExtra > 0) {
      const transferLabel = (T['ticket.hotelPickup'] && T['ticket.hotelPickup'][currentLang]) || 'Hotel Transfer';
      html += `<div class="flex justify-between text-sm"><div><p class="text-white/70">${transferLabel}</p><p class="text-white/30 text-[10px]">${totalGuests} x €${DINNER_PRICES.extras.transfer}</p></div><span class="text-white font-medium">€${transferExtra * totalGuests}</span></div>`;
    }

    // Zone extra (kaldırıldı 2026-04-19 — transfer tek fiyat €10/kişi)

    // Children
    const childrenLabel = { en: 'Children', tr: 'Çocuklar', de: 'Kinder', es: 'Niños', ru: 'Дети', ar: 'أطفال' }[currentLang] || 'Children';
    const childAgeInputs = document.getElementById('wizChildAgeInputs');
    if (children > 0 && childAgeInputs) {
      let childTotal = 0;
      childAgeInputs.querySelectorAll('select').forEach(sel => {
        const childBase = basePrice + transferExtra;
        if (sel.value === '0-3') { /* free */ }
        else if (sel.value === '3-5') childTotal += Math.round(childBase * 0.5);
        else childTotal += childBase;
      });
      if (childTotal > 0) {
        html += `<div class="flex justify-between text-sm"><div><p class="text-white/70">${childrenLabel}</p><p class="text-white/30 text-[10px]">${children} x</p></div><span class="text-white font-medium">€${childTotal}</span></div>`;
      }
    }

    // Romantic table
    if (wizState.romantic) {
      const romanticLabel = (T['ticket.romanticSetup'] && T['ticket.romanticSetup'][currentLang]) || 'Romantic Table';
      html += `<div class="flex justify-between text-sm"><div><p class="text-white/70">${romanticLabel}</p></div><span class="text-white font-medium">€${DINNER_PRICES.extras.romantic}</span></div>`;
    }
    priceLines.innerHTML = html;
  }

  // Build contact link (WhatsApp / Telegram / WeChat)
  const total = wizCalcPrice();
  const adultW = { en: 'Adult', tr: 'Yetişkin', de: 'Erwachsene', es: 'Adulto', ru: 'Взрослый', ar: 'بالغ' }[currentLang] || 'Adult';
  const childW = { en: 'Child', tr: 'Çocuk', de: 'Kind', es: 'Niño', ru: 'Ребёнок', ar: 'طفل' }[currentLang] || 'Child';

  // Read child age selections from wizard dropdowns (2026-04-19 eklendi — AI için şeffaflık)
  const childAges = [];
  const childAgeInputs = document.getElementById('wizChildAgeInputs');
  if (childAgeInputs && children > 0) {
    childAgeInputs.querySelectorAll('select').forEach(sel => {
      childAges.push(sel.value); // "0-3", "3-5", "5+"
    });
  }
  const agePart = childAges.length ? ` (${childAges.join(', ')})` : '';
  const guestStr = `${adults} ${adultW}${children > 0 ? ', ' + children + ' ' + childW + agePart : ''}`;
  const yesNo = { en: ['Yes','No'], tr: ['Evet','Hayır'], de: ['Ja','Nein'], es: ['Sí','No'], ru: ['Да','Нет'], ar: ['نعم','لا'] };
  const yn = yesNo[currentLang] || yesNo.en;
  const transferStr = wizState.transfer ? yn[0] : yn[1];
  const romanticStr = wizState.romantic ? yn[0] : yn[1];
  const mapsLink = (wizState.transferLat && wizState.transferLng) ? `https://maps.google.com/maps?q=${wizState.transferLat},${wizState.transferLng}` : '';
  const addressLine = wizState.transfer && guestAddress ? `\n📍 ${guestAddress}${mapsLink ? '\n🗺 ' + mapsLink : ''}` : '';

  const msgTemplates = {
    en: `Hi, I'd like to check availability:\n👤 ${guestName}\n📞 ${guestPhone}\n📅 ${dateStr}\n🎫 ${pkgLabel}\n👥 ${guestStr}\n🍷 ${drinkLabel}\n🚗 Hotel Transfer: ${transferStr}${addressLine}\n💐 Romantic Table: ${romanticStr}\n💰 Total: €${total}\nPlease confirm. Thank you!`,
    tr: `Merhaba, müsaitlik kontrolü yapmak istiyorum:\n👤 ${guestName}\n📞 ${guestPhone}\n📅 ${dateStr}\n🎫 ${pkgLabel}\n👥 ${guestStr}\n🍷 ${drinkLabel}\n🚗 Otel Transferi: ${transferStr}${addressLine}\n💐 Romantik Masa: ${romanticStr}\n💰 Toplam: €${total}\nLütfen onaylayın. Teşekkürler!`,
    de: `Hallo, ich möchte die Verfügbarkeit prüfen:\n👤 ${guestName}\n📞 ${guestPhone}\n📅 ${dateStr}\n🎫 ${pkgLabel}\n👥 ${guestStr}\n🍷 ${drinkLabel}\n🚗 Hoteltransfer: ${transferStr}${addressLine}\n💐 Romantischer Tisch: ${romanticStr}\n💰 Gesamt: €${total}\nBitte bestätigen. Danke!`,
    es: `Hola, me gustaría verificar la disponibilidad:\n👤 ${guestName}\n📞 ${guestPhone}\n📅 ${dateStr}\n🎫 ${pkgLabel}\n👥 ${guestStr}\n🍷 ${drinkLabel}\n🚗 Transfer Hotel: ${transferStr}${addressLine}\n💐 Mesa Romántica: ${romanticStr}\n💰 Total: €${total}\nPor favor confirme. ¡Gracias!`,
    ru: `Здравствуйте, хочу проверить наличие:\n👤 ${guestName}\n📞 ${guestPhone}\n📅 ${dateStr}\n🎫 ${pkgLabel}\n👥 ${guestStr}\n🍷 ${drinkLabel}\n🚗 Трансфер: ${transferStr}${addressLine}\n💐 Романтический стол: ${romanticStr}\n💰 Итого: €${total}\nПожалуйста, подтвердите. Спасибо!`,
    ar: `مرحباً، أود التحقق من التوفر:\n👤 ${guestName}\n📞 ${guestPhone}\n📅 ${dateStr}\n🎫 ${pkgLabel}\n👥 ${guestStr}\n🍷 ${drinkLabel}\n🚗 النقل: ${transferStr}${addressLine}\n💐 طاولة رومانسية: ${romanticStr}\n💰 الإجمالي: €${total}\nيرجى التأكيد. شكراً!`
  };
  const msg = msgTemplates[currentLang] || msgTemplates.en;

  const ctaLink = document.getElementById('wizWhatsApp');
  if (ctaLink) {
    if (wizState.contact === 'telegram') {
      ctaLink.href = `https://t.me/bosphorusnighttour?text=${encodeURIComponent(msg)}`;
    } else if (wizState.contact === 'wechat') {
      ctaLink.href = '#';
    } else {
      ctaLink.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    }
  }
}

// Listen for date changes
document.addEventListener('DOMContentLoaded', function() {
  const wizDate = document.getElementById('wizDate');
  if (wizDate) wizDate.addEventListener('change', () => wizCalcPrice());

  // Desktop: auto-init wizard in sidebar
  if (window.innerWidth >= 1024) {
    openMobilePanel('standard');
    // Set default background for dinner tour
    const wizBg = document.getElementById('wizPanelBg');
    if (wizBg) {
      wizBg.style.backgroundImage = `url(assets/images/gallery/couple-cheers-bridge.jpg)`;
      wizBg.style.opacity = '0.12';
    }
  }
});

// ========== GOOGLE PLACES AUTOCOMPLETE ==========
// Transfer hizmet alanı — tek liste, €10/kişi (HOTEL_TRANSFER addon)
// Özgür kararı 2026-04-19 — eski 2-tier "dahil/+€10" kaldırıldı
// AI tarafı (bosphorus-night-ai/src/config.js) aynı listeyi kullanır
const TRANSFER_ALLOWED = [
  'Beşiktaş', 'Sütlüce', 'Sirkeci', 'Topkapı', 'Taksim',
  'Eminönü', 'Kağıthane', 'Fatih', 'Laleli', 'Sultanahmet',
  'Sultan Ahmet', // varyant yazım
  'Ortaköy', 'Beyoğlu',
  // Özel oteller (semtleri listede olmasa da alınıyor)
  'Hilton Istanbul Bosphorus'
];

function detectTransferZone(address) {
  const upper = address.toUpperCase();
  for (const kw of TRANSFER_ALLOWED) {
    if (upper.includes(kw.toUpperCase())) {
      return { extra: 0, allowed: true };
    }
  }
  return null; // izinli değil → transfer yok
}

function initPlacesAutocomplete() {
  const input = document.getElementById('wizAddress');
  if (!input) return;
  let addressMap = null;
  let addressMarker = null;
  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ['establishment', 'geocode'],
    componentRestrictions: { country: 'tr' },
    fields: ['formatted_address', 'name', 'geometry']
  });
  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();
    if (!place) return;
    const fullAddress = (place.name || '') + ' ' + (place.formatted_address || '');
    if (place.name) {
      input.value = place.name + ' — ' + (place.formatted_address || '');
    }
    // Save coordinates
    if (place.geometry && place.geometry.location) {
      wizState.transferLat = place.geometry.location.lat();
      wizState.transferLng = place.geometry.location.lng();
    }
    // Show map with pin
    const mapDiv = document.getElementById('wizAddressMap');
    if (mapDiv && place.geometry && place.geometry.location) {
      mapDiv.classList.remove('hidden');
      const loc = place.geometry.location;
      if (!addressMap) {
        addressMap = new google.maps.Map(mapDiv, {
          center: loc,
          zoom: 15,
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#0b1120' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#c9a84c' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#0b1120' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1a2340' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0a1628' }] },
            { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#111b33' }] }
          ]
        });
      } else {
        addressMap.setCenter(loc);
      }
      if (addressMarker) addressMarker.setMap(null);
      addressMarker = new google.maps.Marker({
        position: loc,
        map: addressMap,
        title: place.name || '',
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#c9a84c',
          fillOpacity: 1,
          strokeColor: '#fff',
          strokeWeight: 2
        }
      });
    }
    const zone = detectTransferZone(fullAddress);
    wizState.transferZoneExtra = 0; // tek fiyat (2026-04-19 — zone surcharge kaldırıldı)
    const zoneMsg = document.getElementById('wizTransferZoneMsg');
    if (zoneMsg) {
      if (zone && zone.allowed) {
        const txt = { en: 'Transfer is available for this area', tr: 'Transfer bu bölge için uygundur', de: 'Transfer ist für dieses Gebiet verfügbar', es: 'El traslado está disponible para esta zona', ru: 'Трансфер доступен для этого района', ar: 'خدمة النقل متاحة لهذه المنطقة' }[currentLang] || 'Transfer is available for this area';
        const checkMap = { en: 'Please verify your location on the map', tr: 'Lütfen haritadan konumunuzu kontrol ediniz', de: 'Bitte überprüfen Sie Ihren Standort auf der Karte', es: 'Por favor verifique su ubicación en el mapa', ru: 'Пожалуйста, проверьте ваше местоположение на карте', ar: 'يرجى التحقق من موقعك على الخريطة' }[currentLang] || 'Please verify your location on the map';
        zoneMsg.innerHTML = `<span class="text-green-400">✓ ${txt}</span><br><span class="text-white/40">📍 ${checkMap}</span>`;
        zoneMsg.classList.remove('hidden');
      } else {
        const txt = { en: 'We do not offer transfer service to this area', tr: 'Bu bölgeye transfer hizmetimiz bulunmamaktadır', de: 'Für dieses Gebiet bieten wir keinen Transferservice an', es: 'No ofrecemos servicio de traslado a esta zona', ru: 'Мы не предоставляем трансфер в этот район', ar: 'لا نقدم خدمة النقل إلى هذه المنطقة' }[currentLang] || 'We do not offer transfer service to this area';
        zoneMsg.innerHTML = `<span class="text-red-400">✕ ${txt}</span>`;
        zoneMsg.classList.remove('hidden');
      }
    }
    wizCalcPrice();
  });
}
