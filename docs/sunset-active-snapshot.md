# Sunset Tour — Aktif Hali (Backup)

**Tarih:** 2026-04-20
**Durum:** Sunset turu **site'tan komple kaldırıldı** (bakım modu değil — tüm markup silindi). Bu dosya, aktif halinin snapshot'ını tutar. Geri açıldığında tüm Sunset bölümleri tekrar yerleştirilir.

**Not (2026-04-20 2. iterasyon):** Özgür ilk önce "bakım moduna alalım" dedi (grayscale + badge + mesaj). Ama sonuç görsel olarak dağınık göründü ("böyle olmadı sanki"). İkinci karar: **komple kaldır**. Snapshot kalır, istendiğinde tam aktif halle geri dönülür.

## Restore Nasıl Yapılır

1. `index.html`'de şu arama yap: `data-status="maintenance"` (sunset tour card)
2. Aşağıdaki **ORİJİNAL-KART** markup'ını o blok'un yerine koy
3. `id="tour-sunset"` section'ını bul
4. Aşağıdaki **ORİJİNAL-HERO** markup'ını o blok'un yerine koy
5. `js/translations.js`'den `tour.sunset.maintenanceBadge`, `tour.sunset.maintenanceMsg`, `tour.sunset.visitDinner` key'leri istersen silebilirsin (zararsız bırakabilirsin de)
6. Commit + push

---

## ORİJİNAL-KART (Choose Your Experience grid — 2. kart olarak Sunset)

İndex.html'de şu an `<!-- Tour 1: Sunset — TEMPORARILY UNAVAILABLE (maintenance) -->` ile başlayan blok'un yerine bu konur:

```html
        <!-- Tour 1: Sunset -->
        <div class="boat-card glass-card rounded-2xl overflow-hidden cursor-pointer group scroll-reveal relative flex flex-col" data-boat="sunset">
          <div class="relative h-56 overflow-hidden">
            <img src="assets/tours/sunset/amor-sunset-golden.jpg" alt="Sunset Cruise" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <svg class="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 18h20M6 14a6 6 0 0112 0"/><path d="M12 6v2M5.64 9.64l1.41 1.41M18.36 9.64l-1.41 1.41"/></svg>
            </div>
            <div class="absolute top-4 right-4 bg-navy-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="text-white text-xs font-medium">17:30 · 3h</span>
            </div>
          </div>
          <div class="p-6 pb-4 flex-1 flex flex-col">
            <h3 class="font-display text-xl font-bold mb-2" data-i18n="tour.sunset.title1">Sunset Cruise</h3>
            <p class="text-white/60 text-sm mb-3" data-i18n="boats.sunset.desc">Golden hour dinner cruise with live entertainment as the sun sets over the Bosphorus.</p>
            <div class="mt-auto pt-2">
              <span class="text-gold text-sm font-medium" data-i18n="boats.viewpkg">View Packages →</span>
            </div>
          </div>
          <div class="bg-gold/10 border-t border-gold/20 px-6 py-4">
            <div class="flex items-center justify-between">
              <span class="text-white/70 text-sm font-medium" data-i18n="booking.from">From</span>
              <span class="text-gold text-2xl font-display font-bold">€35 <span class="text-white/40 text-xs font-body font-normal" data-i18n="booking.perPerson">/ person</span></span>
            </div>
          </div>
          <div class="px-6 py-3">
            <div class="flex flex-wrap items-center gap-1.5 mb-1.5">
              <span class="text-[9px] text-white/30 uppercase tracking-wider mr-0.5">Standart:</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10">Dinner</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/40 border border-white/10">Live Show</span>
            </div>
            <div class="flex flex-wrap items-center gap-1.5">
              <span class="text-[9px] text-gold/40 uppercase tracking-wider mr-0.5">Opsiyonel:</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold/50 border border-gold/20">+Alcohol</span>
              <span class="text-[10px] px-2 py-0.5 rounded-full bg-gold/10 text-gold/50 border border-gold/20">+Transfer</span>
            </div>
          </div>
        </div>
```

---

## ORİJİNAL-HERO (tour-sunset section — büyük hero paneli)

```html
  <section id="tour-sunset" class="relative py-12 lg:py-0 lg:min-h-[80vh] overflow-hidden">
    <div class="w-full px-0">
      <div class="grid lg:grid-cols-12 gap-0 items-center">
        <div class="lg:col-span-7 grid grid-cols-2 gap-0 order-2 lg:order-1">
          <div class="overflow-hidden h-44 lg:h-[42vh] diag-right col-span-2"><img id="hero-img-sunset" src="" alt="" class="w-full h-full object-cover transition-all duration-500" data-tour-key="sunset" data-img-type="side" data-img-idx="0"></div>
          <div class="overflow-hidden h-32 lg:h-[36vh] diag-right-sm"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="side" data-img-idx="1"></div>
          <div class="overflow-hidden h-32 lg:h-[36vh] diag-left-sm"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="side" data-img-idx="2"></div>
        </div>
        <div class="lg:col-span-5 relative z-10 py-8 lg:py-16 px-6 lg:pr-12 lg:pl-8 order-1 lg:order-2">
          <div class="grid grid-cols-2 gap-0 mb-5">
            <div class="overflow-hidden h-24 lg:h-32 diag-right-sm"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="top" data-img-idx="0"></div>
            <div class="overflow-hidden h-24 lg:h-32 diag-left-sm"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="top" data-img-idx="1"></div>
          </div>
          <div class="inline-flex items-center gap-2 mb-2">
            <span class="text-gold/60 text-sm font-medium tracking-wider uppercase" data-i18n="tour.sunset.label">Dinner & Show</span>
            <span class="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" data-i18n="tour.popular">Popular</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            <span data-i18n="tour.sunset.title1">Sunset</span> <span class="text-gold" data-i18n="tour.sunset.title2">Cruise</span>
          </h2>
          <p class="text-white/50 text-base lg:text-lg mb-5 leading-relaxed" data-i18n="tour.sunset.desc">Watch the sun set over the Bosphorus while enjoying dinner and live entertainment. The golden hour on the water is unforgettable.</p>
          <div id="pills-sunset" class="flex flex-wrap gap-2 mb-2"></div>
          <p class="pill-desc text-gold/70 text-xs mb-4 h-4" data-tour="sunset"></p>
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
            <div>
              <span class="text-white/40 text-sm" data-i18n="booking.from">From</span>
              <span class="text-gold text-3xl font-display font-bold ml-2">€35</span>
              <span class="text-white/30 text-sm ml-1" data-i18n="booking.perPerson">/ person</span>
            </div>
            <button class="btn-gold explore-btn px-7 py-3 rounded-full text-sm flex items-center gap-2" data-tour="sunset">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="..."/></svg>
              <span data-i18n="tour.explore">Explore & Book</span>
            </button>
          </div>
          <div class="grid grid-cols-3 gap-0">
            <div class="overflow-hidden h-16 lg:h-20 diag-top-right"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="bottom" data-img-idx="0"></div>
            <div class="overflow-hidden h-16 lg:h-20"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="bottom" data-img-idx="1"></div>
            <div class="overflow-hidden h-16 lg:h-20 diag-top-left"><img src="" alt="" class="tour-panel-img w-full h-full object-cover" data-tour-key="sunset" data-img-type="bottom" data-img-idx="2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

Not: WhatsApp SVG path verisi uzun olduğu için bu backup'ta `d="..."` ile kısaltıldı. Restore ederken mevcut Dinner panel butonundaki WhatsApp SVG'sini kopyala.

---

---

## "CHOOSE YOUR EXPERIENCE" SECTION (komple kaldırıldı)

Sunset kaldırılınca tek dinner kart kaldı → bölüm komple kaldırıldı. Başka turlar eklenince (Daytime veya Sunset dönünce) bu section tekrar konur.

### Orijinal markup — index.html'de "<!-- ========== BOATS ========== -->" ve "<!-- ========== PACKAGES" arasındaki kısım:

```html
  <!-- ========== BOATS ========== -->
  <section id="boats" class="py-8 lg:py-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-6 scroll-reveal">
        <span class="text-gold text-sm font-medium tracking-wider uppercase" data-i18n="boats.label">Choose Your Cruise</span>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4" data-i18n="boats.title">Choose Your Experience</h2>
        <p class="text-white/60 max-w-xl mx-auto" data-i18n="boats.desc">Pick the experience that fits your mood on the Bosphorus.</p>
      </div>

      <!-- Tour Cards (2 active: Sunset + Dinner) -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">

        [SUNSET KART — yukarıdaki "ORİJİNAL-KART" bölümünden al]

        <!-- Tour 2: Dinner -->
        <div class="boat-card glass-card rounded-2xl overflow-hidden cursor-pointer group scroll-reveal flex flex-col border-gold/30 shadow-[0_0_30px_rgba(201,168,76,0.15)]" data-boat="dinner">
          <div class="relative h-56 overflow-hidden">
            <img src="assets/tours/dinner/boat-night-bridge.jpg" alt="Dinner Cruise" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent"></div>
            <div class="absolute bottom-4 left-4">
              <svg class="w-7 h-7 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/><circle cx="17" cy="5" r="1" fill="currentColor" stroke="none"/></svg>
            </div>
            <div class="absolute top-4 right-4 bg-navy-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="text-white text-xs font-medium">21:00 · 3h</span>
            </div>
            <!-- Most Popular ribbon -->
            <div class="absolute top-5 -left-2 z-10">
              <!-- SVG ribbon markup + text -->
            </div>
          </div>
          <!-- body, price, tags... (tam markup için commit'e bak) -->
        </div>
      </div>
    </div>
  </section>
```

**Tam markup için:** `git show <commit-before-removal>:index.html` — bakım öncesi commit'te "Section Header" (line 685) ile "PACKAGES revealed on boat click" arası blok (line 773) alınabilir.

---

## "DEFAULT PACKAGES GRID" (3-tier Standard/Premium/VIP — komple kaldırıldı)

Sunset/Daytime turlarına tıklandığında bu grid görünüyordu (Standard €35 / Premium €50 / VIP €70 + "Meeting Point: Kabatas Pier | Transfer: Hotel pickup" notu). Şu an sadece Dinner kaldığı için kaldırıldı. Sunset/Daytime geri eklenirse bu grid'e de ihtiyaç olabilir. **Not:** Fiyatlar eski — AI ile uyumsuz. Geri eklendiğinde fiyatlar güncellenmeli.

### Restore için index.html'de `<!-- Original 3-column packages for daytime/sunset tours -->` yorumu yerine koy:

```html
        <!-- Original 3-column packages for daytime/sunset tours -->
        <div id="defaultPackagesGrid" class="grid md:grid-cols-3 gap-6 lg:gap-8">

          <!-- Standard -->
          <div class="package-card glass-card rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden">
            <div class="absolute inset-0 opacity-[0.07] bg-cover bg-center pointer-events-none" style="background-image: url('assets/tours/dinner/meze.jpg')"></div>
            <div class="relative z-10 flex flex-col flex-1">
              <h4 class="font-display text-lg font-bold mb-1" data-i18n="pkg.std.name">Standard</h4>
              <div class="flex items-baseline gap-1 mb-5">
                <span class="text-3xl font-bold text-gold package-price">€35</span>
                <span class="text-white/40 text-sm">/ person</span>
              </div>
              <ul class="space-y-2.5 mb-5 flex-grow">
                <li class="flex items-start gap-2 text-sm text-white/70">[SVG check] <span data-i18n="pkg.feat.cruise">3-hour Bosphorus night cruise</span></li>
                <li class="flex items-start gap-2 text-sm text-white/70">[SVG check] <span data-i18n="pkg.feat.dinner">Dinner — 10 meze + salad + main course + dessert</span></li>
                <li class="flex items-start gap-2 text-sm text-white/70">[SVG check] <span data-i18n="pkg.feat.drinks">Unlimited soft drinks</span></li>
                <li class="flex items-start gap-2 text-sm text-white/70">[SVG check] <span data-i18n="pkg.feat.table">Private table</span></li>
                <li class="flex items-start gap-2 text-sm text-white/70">[SVG check] <span data-i18n="pkg.feat.show">Live entertainment & Turkish night show</span></li>
              </ul>
              <a href="#" class="wa-book btn-gold text-center py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2" data-package="Standard" data-i18n="pkg.select">Select & Customize →</a>
            </div>
          </div>

          <!-- Premium -->
          <div class="package-card glass-card rounded-2xl p-6 lg:p-8 flex flex-col ring-2 ring-gold/50 relative overflow-hidden">
            <div class="absolute inset-0 opacity-[0.07] bg-cover bg-center pointer-events-none" style="background-image: url('assets/tours/dinner/meze-plate.jpg')"></div>
            <div class="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-gold text-navy-dark text-sm font-bold px-5 py-1.5 rounded-b-full shadow-lg tracking-wide" data-i18n="pkg.bestValue">Best Value</div>
            <div class="relative z-10 flex flex-col flex-1">
              <h4 class="font-display text-lg font-bold mb-1" data-i18n="pkg.prem.name">Premium</h4>
              <div class="flex items-baseline gap-1 mb-5">
                <span class="text-3xl font-bold text-gold package-price">€50</span>
                <span class="text-white/40 text-sm">/ person</span>
              </div>
              <!-- Premium features list (similar structure to Standard but with tablePrem feature) -->
              <a href="#" class="wa-book btn-gold ..." data-package="Premium" data-i18n="pkg.select">Select & Customize →</a>
            </div>
          </div>

          <!-- VIP -->
          <div class="package-card glass-card rounded-2xl p-6 lg:p-8 flex flex-col relative overflow-hidden">
            <div class="relative z-10 flex flex-col flex-1">
              <h4 class="font-display text-lg font-bold mb-1" data-i18n="pkg.vip.name">VIP</h4>
              <div class="flex items-baseline gap-1 mb-5">
                <span class="text-3xl font-bold text-gold package-price">€70</span>
                <span class="text-white/40 text-sm">/ person</span>
              </div>
              <!-- VIP features: dinnerVip, tableVip, priority, show -->
              <a href="#" class="wa-book btn-gold ..." data-package="VIP" data-i18n="pkg.select">Select & Customize →</a>
            </div>
          </div>
        </div>

        <!-- Note below packages -->
        <p class="text-center text-white/40 text-xs mt-6">Meeting Point: Kabatas Pier | Transfer: Hotel pickup & drop-off included</p>
        <p class="text-center text-white/30 text-xs mt-2" data-i18n="pkg.children">Children 0-3 age: Free  |  4-8 age: 50% off  |  9+ age: Full price · No prepayment required</p>
```

Tam markup için git: `git show <son-aktif-commit>:index.html | awk '/id="defaultPackagesGrid"/,/Note below packages/'`

---

## Git Reference

Bakıma alınmadan önceki son commit: `c26640e` (Site Fix #4A).
Bu commitin index.html'indeki sunset bölümleri orijinal aktif halidir.

Restore için alternatif yol:
```bash
git show c26640e:index.html | grep -A 40 "Tour 2: Sunset"
```
