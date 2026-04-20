// ========== TRANSLATIONS ==========
// Yeni dil eklemek için: aşağıdaki her key'e yeni dil kodunu ekle
// Örnek: "hero.badge": { en: "...", tr: "...", de: "...", YENI_DIL: "..." }

const LANGUAGES = {
  en: { flag: 'gb', label: 'English', dir: 'ltr' },
  tr: { flag: 'tr', label: 'Türkçe', dir: 'ltr' },
  de: { flag: 'de', label: 'Deutsch', dir: 'ltr' },
  es: { flag: 'es', label: 'Español', dir: 'ltr' },
  ru: { flag: 'ru', label: 'Русский', dir: 'ltr' },
  ar: { flag: 'sa', label: 'العربية', dir: 'rtl' }
};

const T = {
  // ========== NAV ==========
  "nav.home": {
    en: "Home", tr: "Ana Sayfa", de: "Start", es: "Inicio", ru: "Главная", ar: "الرئيسية"
  },
  "nav.cruises": {
    en: "Cruises", tr: "Turlar", de: "Touren", es: "Cruceros", ru: "Круизы", ar: "الرحلات"
  },
  "nav.gallery": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور"
  },
  "nav.faq": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة"
  },
  "nav.book": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز"
  },

  // ========== HERO ==========
  "hero.badge": {
    en: "Istanbul's Premium Cruise Experience", tr: "İstanbul'un Premium Cruise Deneyimi",
    de: "Istanbuls Premium-Bootstour", es: "La Experiencia Premium de Crucero en Estambul",
    ru: "Премиальный круиз по Стамбулу", ar: "تجربة الرحلات البحرية الفاخرة في إسطنبول"
  },
  "hero.title1": {
    en: "Luxury Bosphorus", tr: "Lüks Boğaz", de: "Luxus-Bosporus", es: "Lujoso Bósforo",
    ru: "Роскошный Босфор", ar: "البوسفور الفاخر"
  },
  "hero.title2": {
    en: "Dinner Cruise", tr: "Yemekli Turu", de: "Abendfahrt", es: "Crucero con Cena",
    ru: "Ужин на круизе", ar: "رحلة عشاء بحرية"
  },
  "hero.subtitle": {
    en: "Live entertainment · Dinner · Bosphorus night views · 7/24 instant support",
    tr: "Canlı eğlence · Yemek · Boğaz gece manzarası · 7/24 anlık destek",
    de: "Live-Show · Abendessen · Bosporus bei Nacht · 24/7 Support",
    es: "Entretenimiento en vivo · Cena · Vistas nocturnas del Bósforo · Soporte 24/7",
    ru: "Живые шоу · Ужин · Ночной Босфор · Поддержка 24/7",
    ar: "ترفيه حي · عشاء · مناظر البوسفور الليلية · دعم على مدار الساعة"
  },
  "hero.noprepay": {
    en: "No prepayment — Pay on the boat", tr: "Ön ödeme yok — Teknede ödeyin",
    de: "Keine Vorauszahlung — Zahlung an Bord", es: "Sin prepago — Paga en el barco",
    ru: "Без предоплаты — оплата на борту", ar: "بدون دفع مسبق — ادفع على القارب"
  },
  "hero.cta1": {
    en: "Check Availability on WhatsApp", tr: "WhatsApp'tan Müsaitlik Sor",
    de: "Verfügbarkeit per WhatsApp prüfen", es: "Consultar disponibilidad en WhatsApp",
    ru: "Проверить наличие в WhatsApp", ar: "تحقق من التوفر عبر واتساب"
  },
  "hero.cta2": {
    en: "View Cruise", tr: "Turu İncele", de: "Tour ansehen", es: "Ver crucero",
    ru: "Смотреть круиз", ar: "عرض الرحلة"
  },
  "hero.departure": {
    en: "Departure from Kabataş · 21:00 – 00:00",
    tr: "Kalkış: Kabataş · 21:00 – 00:00",
    de: "Abfahrt ab Kabataş · 21:00 – 00:00",
    es: "Salida desde Kabataş · 21:00 – 00:00",
    ru: "Отправление: Кабаташ · 21:00 – 00:00",
    ar: "المغادرة من كاباتاش · 21:00 – 00:00"
  },

  // ========== TRUST BAR ==========
  "trust.support": {
    en: "7/24 Instant Support", tr: "7/24 Anlık Destek", de: "24/7 Sofort-Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم فوري على مدار الساعة"
  },
  "trust.pay": {
    en: "Pay on the Boat", tr: "Teknede Ödeyin", de: "Zahlung an Bord",
    es: "Paga en el barco", ru: "Оплата на борту", ar: "ادفع على القارب"
  },
  "trust.withyou": {
    en: "With You Before, During & After", tr: "Öncesinde, Sırasında ve Sonrasında Yanınızdayız",
    de: "Vor, während & nach der Tour",
    es: "Contigo antes, durante y después", ru: "С вами до, во время и после",
    ar: "معك قبل وأثناء وبعد الرحلة"
  },
  "trust.sameday": {
    en: "Same-day Booking", tr: "Aynı Gün Rezervasyon", de: "Buchung am gleichen Tag",
    es: "Reserva el mismo día", ru: "Бронирование в тот же день", ar: "حجز في نفس اليوم"
  },

  // ========== BOATS ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunuzu Seçin", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите круиз", ar: "اختر رحلتك"
  },
  "boats.title": {
    en: "Select Your Boat", tr: "Teknenizi Seçin", de: "Boot wählen",
    es: "Selecciona tu barco", ru: "Выберите лодку", ar: "اختر قاربك"
  },
  "boats.desc": {
    en: "Each vessel offers a unique experience on the Bosphorus. Choose the one that fits your style.",
    tr: "Her tekne Boğaz'da eşsiz bir deneyim sunar. Tarzınıza uygun olanı seçin.",
    de: "Jedes Boot bietet ein besonderes Erlebnis am Bosporus. Wählen Sie Ihren Stil.",
    es: "Cada embarcación ofrece una experiencia única en el Bósforo. Elige la que se adapte a tu estilo.",
    ru: "Каждое судно предлагает уникальный опыт на Босфоре. Выберите то, что подходит вам.",
    ar: "كل قارب يقدم تجربة فريدة على البوسفور. اختر ما يناسب ذوقك."
  },
  "boats.classic": {
    en: "Classic Cruise", tr: "Klasik Cruise", de: "Klassische Tour",
    es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية"
  },
  "boats.classic.desc": {
    en: "A wonderful Bosphorus dinner experience with live entertainment and stunning views.",
    tr: "Canlı eğlence ve muhteşem manzara eşliğinde harika bir Boğaz yemek deneyimi.",
    de: "Ein tolles Bosporus-Dinner mit Live-Show und toller Aussicht.",
    es: "Una maravillosa experiencia de cena en el Bósforo con entretenimiento en vivo y vistas impresionantes.",
    ru: "Прекрасный ужин на Босфоре с живой музыкой и потрясающими видами.",
    ar: "تجربة عشاء رائعة على البوسفور مع ترفيه حي ومناظر خلابة."
  },
  "boats.premium": {
    en: "Premium Cruise", tr: "Premium Cruise", de: "Premium-Tour",
    es: "Crucero Premium", ru: "Премиум круиз", ar: "رحلة مميزة"
  },
  "boats.premium.desc": {
    en: "Enhanced comfort with better seating, premium service, and a more exclusive atmosphere.",
    tr: "Daha iyi oturma düzeni, premium hizmet ve daha özel bir atmosfer.",
    de: "Mehr Komfort, bessere Plätze, Premium-Service und exklusive Atmosphäre.",
    es: "Mayor comodidad con mejores asientos, servicio premium y una atmósfera más exclusiva.",
    ru: "Повышенный комфорт с лучшими местами, премиум-сервисом и эксклюзивной атмосферой.",
    ar: "راحة محسّنة مع مقاعد أفضل وخدمة مميزة وأجواء حصرية."
  },
  "boats.luxury": {
    en: "Luxury Yacht", tr: "Lüks Yat", de: "Luxus-Yacht",
    es: "Yate de Lujo", ru: "Люкс яхта", ar: "يخت فاخر"
  },
  "boats.luxury.desc": {
    en: "The ultimate Bosphorus experience. Intimate setting, top-tier cuisine, and VIP treatment.",
    tr: "En üst düzey Boğaz deneyimi. Özel ortam, birinci sınıf mutfak ve VIP hizmet.",
    de: "Das beste Bosporus-Erlebnis. Exklusive Atmosphäre, Top-Küche und VIP-Service.",
    es: "La experiencia definitiva en el Bósforo. Ambiente íntimo, cocina de primera y trato VIP.",
    ru: "Лучший опыт на Босфоре. Уютная обстановка, кухня высшего уровня и VIP-обслуживание.",
    ar: "التجربة المطلقة على البوسفور. أجواء حميمة ومأكولات راقية ومعاملة VIP."
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →",
    es: "Ver paquetes →", ru: "Смотреть пакеты →", ar: "← عرض الباقات"
  },
  "boats.mostpopular": {
    en: "Most Popular", tr: "En Popüler", de: "Beliebteste",
    es: "Más Popular", ru: "Самый популярный", ar: "الأكثر شعبية"
  },
  "boats.from": {
    en: "from", tr: "başlangıç", de: "ab", es: "desde", ru: "от", ar: "من"
  },

  // ========== PACKAGES ==========
  "pkg.choose": {
    en: "Choose Your Package", tr: "Paketinizi Seçin", de: "Paket wählen",
    es: "Elige tu paquete", ru: "Выберите пакет", ar: "اختر باقتك"
  },
  "pkg.standard": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "عادي"
  },
  "pkg.premium": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "مميز"
  },
  "pkg.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP"
  },
  "pkg.bestvalue": {
    en: "Best Value", tr: "En İyi Değer", de: "Bester Wert", es: "Mejor Valor",
    ru: "Лучшее предложение", ar: "أفضل قيمة"
  },
  "pkg.person": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ человек", ar: "/ شخص"
  },
  "pkg.book": {
    en: "Book on WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen",
    es: "Reservar en WhatsApp", ru: "Забронировать в WhatsApp", ar: "احجز عبر واتساب"
  },
  "pkg.select": {
    en: "Select & Customize", tr: "Seç & Özelleştir", de: "Wählen & Anpassen",
    es: "Seleccionar & Personalizar", ru: "Выбрать и настроить", ar: "اختر وخصّص"
  },

  // Package features
  "pkg.f.cruise": {
    en: "3-hour Bosphorus night cruise", tr: "3 saatlik Boğaz gece turu",
    de: "3-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3 horas por el Bósforo",
    ru: "3-часовой ночной круиз по Босфору", ar: "رحلة بحرية ليلية لمدة 3 ساعات"
  },
  "pkg.f.dinner": {
    en: "Dinner — 10 meze + main course + dessert", tr: "Yemek — 10 meze + ana yemek + tatlı",
    de: "Abendessen — 10 Meze + Hauptgericht + Dessert", es: "Cena — 10 meze + plato principal + postre",
    ru: "Ужин — 7 мезе + основное блюдо + десерт", ar: "عشاء — 10 مقبلات + طبق رئيسي + حلوى"
  },
  "pkg.f.dinner.vip": {
    en: "VIP dinner — mixed grill platter, premium cuts", tr: "VIP yemek — karışık ızgara tabağı, premium etler",
    de: "VIP-Dinner — Mixed Grill, Premium-Fleisch", es: "Cena VIP — parrillada mixta, cortes premium",
    ru: "VIP ужин — ассорти гриль, премиум мясо", ar: "عشاء VIP — طبق مشويات مشكلة، لحوم فاخرة"
  },
  "pkg.f.entertainment": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu",
    de: "Live-Show & Türkische Nacht", es: "Entretenimiento en vivo y show de noche turca",
    ru: "Живые шоу и турецкая ночь", ar: "ترفيه حي وعرض الليلة التركية"
  },
  "pkg.f.seat.standard": {
    en: "Standard seating", tr: "Standart oturma düzeni", de: "Standard-Sitzplatz",
    es: "Asientos estándar", ru: "Стандартные места", ar: "مقاعد عادية"
  },
  "pkg.f.seat.better": {
    en: "Better seating — closer to stage", tr: "Daha iyi oturma — sahneye yakın",
    de: "Bessere Plätze — näher zur Bühne", es: "Mejores asientos — más cerca del escenario",
    ru: "Лучшие места — ближе к сцене", ar: "مقاعد أفضل — أقرب إلى المسرح"
  },
  "pkg.f.seat.premium": {
    en: "Premium table — best location", tr: "Premium masa — en iyi konum",
    de: "Premium-Tisch — beste Lage", es: "Mesa premium — mejor ubicación",
    ru: "Премиум стол — лучшее расположение", ar: "طاولة مميزة — أفضل موقع"
  },
  "pkg.f.softdrinks": {
    en: "Soft drinks included", tr: "Alkolsüz içecekler dahil",
    de: "Softdrinks inklusive", es: "Bebidas sin alcohol incluidas",
    ru: "Безалкогольные напитки включены", ar: "مشروبات غازية مشمولة"
  },
  "pkg.f.vegetarian": {
    en: "Vegetarian menu available", tr: "Vejetaryen menü mevcut",
    de: "Vegetarisches Menü möglich", es: "Menú vegetariano disponible",
    ru: "Вегетарианское меню доступно", ar: "قائمة نباتية متاحة"
  },
  "pkg.f.vip.priority": {
    en: "Priority boarding & VIP treatment", tr: "Öncelikli biniş & VIP hizmet",
    de: "Bevorzugter Einstieg & VIP-Service", es: "Embarque prioritario y trato VIP",
    ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود ومعاملة VIP"
  },
  "pkg.opt.standard": {
    en: "Optional: Alcohol +€30 · Transfer +€10 · Romantic table +€15",
    tr: "Opsiyonel: Alkol +€30 · Transfer +€10 · Romantik masa +€15",
    de: "Optional: Alkohol +€30 · Transfer +€10 · Romantik-Tisch +€15",
    es: "Opcional: Alcohol +€30 · Traslado +€10 · Mesa romántica +€15",
    ru: "Опционально: Алкоголь +€30 · Трансфер +€10 · Романтический стол +€15",
    ar: "اختياري: مشروبات كحولية +€30 · نقل +€10 · طاولة رومانسية +€15"
  },
  "pkg.opt.vip": {
    en: "Optional: Alcohol +€30 · Transfer +€10",
    tr: "Opsiyonel: Alkol +€30 · Transfer +€10",
    de: "Optional: Alkohol +€30 · Transfer +€10",
    es: "Opcional: Alcohol +€30 · Traslado +€10",
    ru: "Опционально: Алкоголь +€30 · Трансфер +€10",
    ar: "اختياري: مشروبات كحولية +€30 · نقل +€10"
  },
  "pkg.children": {
    en: "Children 0–3: Free · 4–8: 50% off · 9+: Full price · No prepayment required",
    tr: "Çocuklar 0–3: Ücretsiz · 4–8: %50 indirim · 9+: Tam fiyat · Ön ödeme gerekmez",
    de: "Kinder 0–3: Gratis · 4–8: 50% Rabatt · 9+: Vollpreis · Keine Vorauszahlung",
    es: "Niños 0–3: Gratis · 4–8: 50% dto. · 9+: Precio completo · Sin prepago",
    ru: "Дети 0–3: Бесплатно · 4–8: Скидка 50% · 9+: Полная цена · Без предоплаты",
    ar: "الأطفال 0-3: مجاناً · 4-8: خصم 50% · 9+: السعر الكامل · بدون دفع مسبق"
  },

  // ========== WHAT'S INCLUDED ==========
  "incl.label": {
    en: "Your Experience", tr: "Deneyiminiz", de: "Ihr Erlebnis",
    es: "Tu Experiencia", ru: "Ваш опыт", ar: "تجربتك"
  },
  "incl.title": {
    en: "What's Included", tr: "Neler Dahil", de: "Was ist inklusive",
    es: "Qué incluye", ru: "Что включено", ar: "ما هو مشمول"
  },
  "incl.cruise": {
    en: "Bosphorus Night Cruise", tr: "Boğaz Gece Turu", de: "Bosporus-Nachtfahrt",
    es: "Crucero Nocturno por el Bósforo", ru: "Ночной круиз по Босфору", ar: "رحلة بحرية ليلية"
  },
  "incl.cruise.desc": {
    en: "3-hour cruise with iconic Istanbul views", tr: "İstanbul'un ikonik manzaralarıyla 3 saatlik tur",
    de: "3-Stunden-Fahrt mit Blick auf Istanbul", es: "Crucero de 3 horas con vistas icónicas de Estambul",
    ru: "3-часовой круиз с видами Стамбула", ar: "رحلة 3 ساعات مع مناظر إسطنبول الأيقونية"
  },
  "incl.dinner": {
    en: "Full Dinner Service", tr: "Tam Yemek Servisi", de: "Abendessen komplett",
    es: "Servicio completo de cena", ru: "Полный ужин", ar: "خدمة عشاء كاملة"
  },
  "incl.dinner.desc": {
    en: "10 meze varieties, main course & dessert", tr: "10 çeşit meze, ana yemek & tatlı",
    de: "10 Meze-Sorten, Hauptgang & Dessert", es: "10 variedades de meze, plato principal y postre",
    ru: "10 видов мезе, основное блюдо и десерт", ar: "10 أنواع مقبلات، طبق رئيسي وحلوى"
  },
  "incl.entertainment": {
    en: "Live Entertainment", tr: "Canlı Eğlence", de: "Live-Unterhaltung",
    es: "Entretenimiento en Vivo", ru: "Живые шоу", ar: "ترفيه حي"
  },
  "incl.entertainment.desc": {
    en: "Live singer, DJ & Turkish night dances", tr: "Canlı şarkıcı, DJ & Türk gecesi dansları",
    de: "Live-Sänger, DJ & türkische Tänze", es: "Cantante en vivo, DJ y danzas turcas",
    ru: "Живой певец, DJ и турецкие танцы", ar: "مغني حي، DJ ورقصات تركية"
  },
  "incl.transfer": {
    en: "Hotel Transfer", tr: "Otel Transferi", de: "Hoteltransfer",
    es: "Traslado al Hotel", ru: "Трансфер из отеля", ar: "نقل من الفندق"
  },
  "incl.transfer.desc": {
    en: "Optional pickup & drop-off from your hotel", tr: "Opsiyonel otel alım & bırakım",
    de: "Optionale Abholung & Rückfahrt zum Hotel", es: "Recogida y devolución opcional desde tu hotel",
    ru: "Опциональный трансфер из/в отель", ar: "خدمة نقل اختيارية من وإلى فندقك"
  },
  "incl.support": {
    en: "7/24 Support", tr: "7/24 Destek", de: "24/7 Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم على مدار الساعة"
  },
  "incl.support.desc": {
    en: "Instant support anytime", tr: "Her an anlık destek",
    de: "Sofortiger Support rund um die Uhr", es: "Soporte instantáneo en cualquier momento",
    ru: "Мгновенная поддержка в любое время", ar: "دعم فوري في أي وقت"
  },
  "incl.special": {
    en: "Special Occasions", tr: "Özel Günler", de: "Besondere Anlässe",
    es: "Ocasiones Especiales", ru: "Особые случаи", ar: "مناسبات خاصة"
  },
  "incl.special.desc": {
    en: "Romantic table & birthday celebrations", tr: "Romantik masa & doğum günü kutlamaları",
    de: "Romantik-Tisch & Geburtstagsfeiern", es: "Mesa romántica y celebraciones de cumpleaños",
    ru: "Романтический стол и празднование дня рождения", ar: "طاولة رومانسية واحتفالات أعياد الميلاد"
  },
  "incl.cruise.detail": {
    en: "Sail past the Maiden's Tower, Dolmabahçe Palace, Bosphorus Bridge, Beylerbeyi Palace, Ortaköy Mosque, and Rumeli Fortress. Departs from Kabataş at 21:00, returns between 23:30 and 00:00.",
    tr: "Kız Kulesi, Dolmabahçe Sarayı, Boğaz Köprüsü, Beylerbeyi Sarayı, Ortaköy Camii ve Rumeli Hisarı'nın önünden geçin. Kabataş'tan 21:00'te kalkar, 23:30 / 00:00 arası döner.",
    de: "Vorbei am Leanderturm, Dolmabahçe-Palast, Bosporus-Brücke, Beylerbeyi-Palast, Ortaköy-Moschee und Rumeli-Festung. Abfahrt 21:00, Rückkehr zwischen 23:30 und 00:00.",
    es: "Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe, el Puente del Bósforo, el Palacio de Beylerbeyi, la Mezquita de Ortaköy y la Fortaleza de Rumeli. Sale a las 21:00, regresa entre las 23:30 y las 00:00.",
    ru: "Проплывите мимо Девичьей башни, дворца Долмабахче, Босфорского моста, дворца Бейлербейи, мечети Ортакёй и крепости Румели. Отправление в 21:00, возвращение между 23:30 и 00:00.",
    ar: "أبحر بجوار برج الفتاة، قصر دولمة بهجة، جسر البوسفور، قصر بيلربيي، مسجد أورتاكوي، وقلعة روملي. المغادرة 21:00، العودة بين 23:30 و 00:00."
  },
  "incl.dinner.detail": {
    en: "10 types of meze for Standard (15+ for VIP), choice of salmon/sea bass/chicken/meatball main course, and dessert with ice cream. Vegetarian menu available. VIP packages include rib-eye and filet mignon options, plus table near the stage.",
    tr: "Standard'ta 10 çeşit meze (VIP'te 15+), somon/çupra/tavuk/köfte ana yemek seçeneği ve dondurmalı pasta. Vejetaryen menü mevcuttur. VIP paketlerde antrikot ve biftek seçenekleri ile sahneye yakın masa dahildir.",
    de: "10 Meze-Sorten Standard (15+ für VIP), Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte) und Dessert mit Eis. Vegetarisches Menü verfügbar. VIP-Pakete enthalten Rib-Eye/Filet und Tisch nahe der Bühne.",
    es: "10 tipos de meze Standard (15+ para VIP), elección de plato principal (salmón/lubina/pollo/albóndigas) y postre con helado. Menú vegetariano disponible. Los paquetes VIP incluyen rib-eye y solomillo, y mesa cerca del escenario.",
    ru: "10 видов мезе для Standard (15+ для VIP), выбор горячего (лосось/сибас/курица/котлеты) и десерт с мороженым. Вегетарианское меню доступно. VIP-пакеты включают рибай и филе, столик у сцены.",
    ar: "10 أنواع مقبلات للباقة الأساسية (15+ للـVIP)، اختيار طبق رئيسي (سلمون/قاروص/دجاج/كفتة) وحلوى مع آيس كريم. قائمة نباتية متوفرة. باقات VIP تشمل ريب آي وفيليه، وطاولة قريبة من المسرح."
  },
  "incl.entertainment.detail": {
    en: "Live singer performances, traditional Turkish night show with folk dances, belly dance, and DJ music. Entertainment continues uninterrupted until the end of the cruise.",
    tr: "Canlı şarkıcı performansları, halk dansları ve oryantal dans ile geleneksel Türk gecesi şovu ve DJ müziği. Eğlence tur sonuna kadar kesintisiz devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstanz, Bauchtanz und DJ. Unterhaltung bis zum Ende der Tour ohne Unterbrechung.",
    es: "Actuaciones de cantante en vivo, show nocturno turco tradicional con danzas folclóricas, danza del vientre y música DJ. El entretenimiento continúa sin interrupción hasta el final del crucero.",
    ru: "Живой певец, традиционное турецкое ночное шоу с народными танцами, танец живота и DJ-музыка. Развлечения продолжаются без перерыва до конца круиза.",
    ar: "عروض مغني حي، عرض ليلة تركية تقليدية مع رقصات شعبية، رقص شرقي وموسيقى DJ. يستمر الترفيه دون انقطاع حتى نهاية الرحلة."
  },
  "incl.transfer.detail": {
    en: "Round-trip hotel pickup and drop-off available from Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy and Beyoğlu areas. Available as an add-on when booking. Please share your hotel location with us.",
    tr: "Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu bize bildirin.",
    de: "Hin- und Rücktransfer ab Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy und Beyoğlu. Als Zusatz buchbar. Bitte teilen Sie uns Ihren Hotelstandort mit.",
    es: "Recogida y devolución al hotel disponible desde Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy y Beyoğlu. Disponible como complemento. Por favor, comparta la ubicación de su hotel con nosotros.",
    ru: "Трансфер из/в отель доступен из районов Бешикташ, Сютлюдже, Сиркеджи, Топкапы, Таксим, Эминёню, Кягытхане, Фатих, Лалели, Султанахмет, Ортакёй и Бейоглу. Доступен как дополнение при бронировании. Пожалуйста, сообщите нам расположение вашего отеля.",
    ar: "خدمة نقل ذهاب وعودة متاحة من مناطق بشكتاش، سوتلوجه، سيركجي، طوبكابي، تقسيم، إمينونو، كاغيتهانه، فاتح، لاليلي، السلطان أحمد، أورتاكوي وبيوغلو. متاحة كإضافة عند الحجز. يرجى مشاركة موقع فندقك معنا."
  },
  "incl.support.detail": {
    en: "We're with you before, during, and after your cruise. Message or call anytime — we respond instantly, 7 days a week, 24 hours a day.",
    tr: "Turunuzun öncesinde, sırasında ve sonrasında yanınızdayız. Yazın veya arayın — 7/24 anında cevap veriyoruz.",
    de: "Wir sind vor, während und nach der Tour für Sie da. Schreiben oder anrufen — wir antworten sofort, 7 Tage die Woche, 24 Stunden am Tag.",
    es: "Estamos contigo antes, durante y después de tu crucero. Escribe o llama — respondemos al instante, los 7 días de la semana, las 24 horas.",
    ru: "Мы с вами до, во время и после круиза. Пишите или звоните — отвечаем мгновенно, 7 дней в неделю, 24 часа в сутки.",
    ar: "نحن معك قبل وأثناء وبعد رحلتك. راسل أو اتصل — نرد فورًا على مدار الساعة طوال أيام الأسبوع."
  },
  "incl.special.detail": {
    en: "Celebrating something special? We offer romantic table setup with candles & flowers (+€15) and birthday celebrations. Tell us!",
    tr: "Özel bir gün mü kutluyorsunuz? Mum ve çiçeklerle romantik masa düzeni (+€15) ve doğum günü kutlamaları sunuyoruz. Bize yazın!",
    de: "Etwas Besonderes feiern? Romantik-Tisch mit Kerzen & Blumen (+€15) und Geburtstagsfeiern. Schreiben Sie uns!",
    es: "¿Celebrando algo especial? Ofrecemos mesa romántica con velas y flores (+€15) y celebraciones de cumpleaños. ¡Escríbenos!",
    ru: "Празднуете что-то особенное? Романтический стол со свечами и цветами (+€15) и празднование дня рождения. Напишите нам!",
    ar: "تحتفل بمناسبة خاصة؟ نقدم طاولة رومانسية مع شموع وزهور (+€15)، واحتفالات أعياد الميلاد. أخبرنا!"
  },

  // ========== GALLERY ==========
  "gallery.label": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور"
  },
  "gallery.title": {
    en: "Experience the Night", tr: "Geceyi Yaşayın", de: "Die Nacht erleben",
    es: "Vive la Noche", ru: "Почувствуйте ночь", ar: "عش الليلة"
  },

  // ========== REVIEWS ==========
  "reviews.label": {
    en: "Customer Experiences", tr: "Müşteri Deneyimleri", de: "Kundenerfahrungen",
    es: "Experiencias de Clientes", ru: "Отзывы гостей", ar: "تجارب العملاء"
  },
  "reviews.title": {
    en: "What Our Guests Say", tr: "Misafirlerimiz Ne Diyor", de: "Was unsere Gäste sagen",
    es: "Lo que dicen nuestros huéspedes", ru: "Что говорят наши гости", ar: "ماذا يقول ضيوفنا"
  },
  "reviews.rating": {
    en: "4.8/5 based on customer feedback", tr: "Müşteri geri bildirimlerine göre 4.8/5",
    de: "4,8/5 basierend auf Gästebewertungen", es: "4.8/5 basado en opiniones de clientes",
    ru: "4.8/5 на основе отзывов", ar: "4.8/5 بناءً على آراء العملاء"
  },
  "reviews.all": { en: "All", tr: "Hepsi", de: "Alle", es: "Todos", ru: "Все", ar: "الكل" },
  "reviews.couples": { en: "Couples", tr: "Çiftler", de: "Paare", es: "Parejas", ru: "Пары", ar: "أزواج" },
  "reviews.groups": { en: "Groups", tr: "Gruplar", de: "Gruppen", es: "Grupos", ru: "Группы", ar: "مجموعات" },
  "reviews.families": { en: "Families", tr: "Aileler", de: "Familien", es: "Familias", ru: "Семьи", ar: "عائلات" },
  "reviews.solo": { en: "Solo", tr: "Solo", de: "Solo", es: "Solo", ru: "Соло", ar: "فردي" },

  // Review texts
  "reviews.r1": {
    en: "\"Chose this bosphorus dinner cruise for our anniversary — unforgettable. Candle-lit mezes, attentive service, the Bosphorus in the background. Best dinner cruise Istanbul has to offer.\"",
    tr: "\"Evlilik yıldönümümüz için bu boğaz yemekli turuna katıldık — unutulmazdı. Mum ışığında meze çeşitleri, ilgili servis, arkada Boğaz. İstanbul'un sunduğu en iyi akşam yemeği tekne turu.\"",
    de: "\"Wir wählten diese Bosphorus Dinner Cruise für unseren Hochzeitstag — unvergesslich. Mezes im Kerzenschein, aufmerksamer Service, der Bosporus im Hintergrund. Die beste Dinner Cruise Istanbul zu bieten hat.\"",
    es: "\"Elegimos este crucero con cena por el Bósforo para nuestro aniversario — inolvidable. Mezes a la luz de las velas, servicio atento, el Bósforo de fondo. El mejor dinner cruise Istanbul puede ofrecer.\"",
    ru: "\"Выбрали этот круиз с ужином по Босфору на годовщину — незабываемо. Мезе при свечах, внимательный сервис, Босфор на заднем плане. Лучший dinner cruise Istanbul может предложить.\"",
    ar: "\"اخترنا رحلة العشاء على البوسفور لذكرى زواجنا — لا تُنسى. مقبلات على ضوء الشموع، خدمة مميزة، البوسفور في الخلفية. أفضل عشاء على البوسفور في إسطنبول.\""
  },
  "reviews.r1.info": {
    en: "Couple · Germany", tr: "Çift · Almanya", de: "Paar · Deutschland",
    es: "Pareja · Alemania", ru: "Пара · Германия", ar: "زوجان · ألمانيا"
  },
  "reviews.r2": {
    en: "\"Booked this Istanbul night tour for the views — it exceeded expectations. Ortaköy Mosque glowing, Dolmabahçe lit up, the bridge turning red. Best bosphorus sightseeing shots of my trip.\"",
    tr: "\"Manzara için bu İstanbul gece turuna katıldım — beklentinin ötesindeydi. Ortaköy Camii parıldıyor, Dolmabahçe aydınlanmış, köprü kırmızıya dönüyor. Yaptığım en iyi boğaz manzarası çekimleri.\"",
    de: "\"Diese Istanbul Night Tour wegen der Aussicht gebucht — sie übertraf die Erwartungen. Die Ortaköy-Moschee leuchtet, Dolmabahçe erhellt, die Brücke in Rot. Beste Bosphorus Sightseeing-Aufnahmen meiner Reise.\"",
    es: "\"Reservé este tour nocturno por Estambul por las vistas — superaron expectativas. Mezquita Ortaköy iluminada, Dolmabahçe brillando, el puente en rojo. Las mejores fotos del crucero por el Bósforo.\"",
    ru: "\"Забронировал этот ночной тур по Стамбулу ради видов — они превзошли ожидания. Мечеть Ортакёй сияет, Долмабахче в огнях, мост становится красным. Лучшие кадры круиза по Босфору.\"",
    ar: "\"حجزت هذه الجولة الليلية في إسطنبول من أجل المناظر — فاقت توقعاتي. مسجد أورتاكوي يتوهج، قصر دولمة بهجة مضاء، الجسر يتحول إلى الأحمر. أفضل لقطات رحلة البوسفور.\""
  },
  "reviews.r2.info": {
    en: "Solo · Russia", tr: "Tek · Rusya", de: "Solo · Russland",
    es: "Solo · Rusia", ru: "Соло · Россия", ar: "فردي · روسيا"
  },
  "reviews.r3": {
    en: "\"Sailed right under the Bosphorus Bridge lit in red — absolutely magical. Our phone shots came out like postcards. Worth it just for that moment.\"",
    tr: "\"Kırmızı ışıklı Boğaz Köprüsü'nün tam altından geçtik — büyüleyici. Telefonla çektiklerimiz bile kartpostal gibi çıktı. Sırf bu an için değer.\"",
    de: "\"Direkt unter der rot beleuchteten Bosporus-Brücke gesegelt — absolut magisch. Selbst unsere Handyfotos wurden wie Postkarten. Allein dafür lohnt es sich.\"",
    es: "\"Navegamos justo bajo el Puente del Bósforo iluminado en rojo — absolutamente mágico. Nuestras fotos con el móvil salieron como postales.\"",
    ru: "\"Проплыли прямо под Босфорским мостом, подсвеченным красным — абсолютно волшебно. Снимки с телефона получились как открытки.\"",
    ar: "\"أبحرنا تحت جسر البوسفور المضاء بالأحمر — ساحر تمامًا. حتى صور الهاتف ظهرت كالبطاقات البريدية. يستحق من أجل تلك اللحظة.\""
  },
  "reviews.r3.info": {
    en: "Couple · United Kingdom", tr: "Çift · Birleşik Krallık", de: "Paar · Vereinigtes Königreich",
    es: "Pareja · Reino Unido", ru: "Пара · Великобритания", ar: "زوجان · المملكة المتحدة"
  },
  "reviews.r4": {
    en: "\"Took the kids. The folk dancers and the dervish show captivated them. Halal menu was respected, staff gave our family attentive care. A perfect Istanbul night.\"",
    tr: "\"Çocuklarla gittik. Folklor dansları ve semazen gösterisi onları büyüledi. Helal menüye saygı vardı, servis aileye özel ilgi gösterdi. İstanbul'da mükemmel bir gece.\"",
    de: "\"Wir waren mit den Kindern da. Die Volkstänze und der Derwisch zogen sie in ihren Bann. Das Halal-Menü wurde respektiert, das Personal kümmerte sich aufmerksam um die Familie.\"",
    es: "\"Fuimos con los niños. Los bailarines folclóricos y el derviche los cautivaron. Se respetó el menú halal, el personal cuidó de la familia con atención.\"",
    ru: "\"Пошли с детьми. Народные танцы и дервиш их покорили. Халяль-меню соблюдалось, персонал внимательно отнёсся к семье. Идеальный вечер в Стамбуле.\"",
    ar: "\"اصطحبنا الأطفال. الراقصون الشعبيون وعرض الدرويش أسرهم. تم احترام قائمة الحلال، اهتم الطاقم بعائلتنا. ليلة مثالية في إسطنبول.\""
  },
  "reviews.r4.info": {
    en: "Family · UAE", tr: "Aile · BAE", de: "Familie · VAE",
    es: "Familia · EAU", ru: "Семья · ОАЭ", ar: "عائلة · الإمارات"
  },
  "reviews.r5": {
    en: "\"We danced until midnight. The DJ, the belly dance show, the live music — pure energy. Our friends from Istanbul said it was the best cruise they'd been on too.\"",
    tr: "\"Gece yarısına kadar dans ettik. DJ, oryantal şov, canlı müzik — saf enerji. İstanbul'daki arkadaşlarımız bile 'en iyi tekne turu buydu' dedi.\"",
    de: "\"Wir haben bis Mitternacht getanzt. DJ, Bauchtanz-Show, Live-Musik — pure Energie. Selbst unsere Freunde aus Istanbul sagten, es sei die beste Tour gewesen.\"",
    es: "\"Bailamos hasta medianoche. El DJ, el show de danza del vientre, la música en vivo — pura energía. Nuestros amigos de Estambul dijeron que fue el mejor crucero.\"",
    ru: "\"Танцевали до полуночи. DJ, танец живота, живая музыка — чистая энергия. Даже наши друзья из Стамбула сказали, что это был лучший круиз.\"",
    ar: "\"رقصنا حتى منتصف الليل. DJ، عرض الرقص الشرقي، الموسيقى الحية — طاقة صافية. قال أصدقاؤنا من إسطنبول إنها كانت أفضل رحلة.\""
  },
  "reviews.r5.info": {
    en: "Couple · Italy", tr: "Çift · İtalya", de: "Paar · Italien",
    es: "Pareja · Italia", ru: "Пара · Италия", ar: "زوجان · إيطاليا"
  },
  "reviews.r6": {
    en: "\"From boarding to the last course, everything was thoughtful. Food fresh, generous portions, the boat looked like a floating restaurant at night. Recommended.\"",
    tr: "\"İskeleden son tatlıya kadar her şey özenliydi. Yemek taze, porsiyonlar bol, tekne gece yüzen bir restoran gibiydi. Tavsiye ederim.\"",
    de: "\"Vom Einsteigen bis zum letzten Gang war alles durchdacht. Frisches Essen, großzügige Portionen, das Boot wirkte nachts wie ein schwimmendes Restaurant. Empfohlen.\"",
    es: "\"Desde el embarque hasta el último plato, todo fue cuidado. Comida fresca, porciones generosas, el barco parecía un restaurante flotante de noche. Recomendado.\"",
    ru: "\"От посадки до последнего блюда всё было продумано. Свежая еда, щедрые порции, лодка вечером как плавучий ресторан. Рекомендую.\"",
    ar: "\"من الصعود إلى آخر طبق، كل شيء كان مدروسًا. طعام طازج، حصص سخية، بدت القارب ليلاً كمطعم عائم. موصى به.\""
  },
  "reviews.r6.info": {
    en: "Family · Saudi Arabia", tr: "Aile · Suudi Arabistan", de: "Familie · Saudi-Arabien",
    es: "Familia · Arabia Saudita", ru: "Семья · Саудовская Аравия", ar: "عائلة · المملكة العربية السعودية"
  },
  "reviews.r7": {
    en: "\"We love food — and this delivered. Each plate arrived with thought, the meat was tender, the flowers on the table made the whole night feel curated. Best Istanbul meal.\"",
    tr: "\"Yemek severiz — burada beklediğimizi bulduk. Her tabak özenliydi, et yumuşaktı, masadaki çiçekler akşamı özel hissettirdi. İstanbul'daki en iyi yemeğimiz.\"",
    de: "\"Wir lieben gutes Essen — und das hier hat überzeugt. Jeder Teller war durchdacht, das Fleisch zart, die Blumen auf dem Tisch machten den Abend besonders.\"",
    es: "\"Amamos la comida — y aquí encontramos lo que buscábamos. Cada plato fue cuidado, la carne tierna, las flores en la mesa hicieron la noche especial.\"",
    ru: "\"Мы любим еду — и здесь нас не разочаровали. Каждая подача продумана, мясо нежное, цветы на столе сделали вечер особенным. Лучший ужин в Стамбуле.\"",
    ar: "\"نحب الطعام — وهذا المكان لبى توقعاتنا. كل طبق جاء بعناية، اللحم كان طرياً، الزهور على الطاولة جعلت الأمسية مميزة.\""
  },
  "reviews.r7.info": {
    en: "Couple · France", tr: "Çift · Fransa", de: "Paar · Frankreich",
    es: "Pareja · Francia", ru: "Пара · Франция", ar: "زوجان · فرنسا"
  },
  "reviews.r8": {
    en: "\"Took this from the deck — the boat, the bridge, the city skyline all in one frame. Perfect Istanbul souvenir shot.\"",
    tr: "\"Güverteden tek karede çektim — tekne, köprü, şehir silueti. Mükemmel bir İstanbul hatırası.\"",
    de: "\"Vom Deck aufgenommen — das Boot, die Brücke, die Stadt-Silhouette in einem Bild. Perfekte Istanbul-Erinnerung.\"",
    es: "\"Tomé esta foto desde la cubierta — el barco, el puente, el horizonte en un solo cuadro. Recuerdo perfecto de Estambul.\"",
    ru: "\"Снял с палубы — лодка, мост, силуэт города в одном кадре. Идеальное воспоминание об Стамбуле.\"",
    ar: "\"التقطت هذه من سطح السفينة — القارب والجسر وأفق المدينة في إطار واحد. تذكار إسطنبول مثالي.\""
  },
  "reviews.r8.info": {
    en: "Solo · United States", tr: "Tek · ABD", de: "Solo · USA",
    es: "Solo · Estados Unidos", ru: "Соло · США", ar: "فردي · الولايات المتحدة"
  },
  "reviews.r9": {
    en: "\"What impressed me most was the service — attentive without being intrusive. The hall looked elegant under the warm lights. Worth every euro.\"",
    tr: "\"Beni en çok etkileyen servisti — ilgili ama rahatsız edici değil. Salon sıcak ışıklar altında zarifti. Her euro'ya değer.\"",
    de: "\"Am meisten beeindruckte der Service — aufmerksam, ohne aufdringlich zu sein. Der Saal wirkte im warmen Licht elegant. Jeden Euro wert.\"",
    es: "\"Lo que más me impresionó fue el servicio — atento sin ser invasivo. El salón elegante bajo las luces cálidas. Vale cada euro.\"",
    ru: "\"Больше всего впечатлил сервис — внимательный, но ненавязчивый. Зал в тёплом свете выглядел элегантно. Стоит каждого евро.\"",
    ar: "\"ما أعجبني أكثر هو الخدمة — منتبهة دون أن تكون متطفلة. القاعة بدت أنيقة تحت الأضواء الدافئة. يستحق كل يورو.\""
  },
  "reviews.r9.info": {
    en: "Solo · Spain", tr: "Tek · İspanya", de: "Solo · Spanien",
    es: "Solo · España", ru: "Соло · Испания", ar: "فردي · إسبانيا"
  },
  "reviews.r10": {
    en: "\"I live in Istanbul but had never tried a cruise like this. Went with my foreign guests — they all loved it. Professional organization.\"",
    tr: "\"Istanbul'da yaşıyorum ama ilk kez böyle bir tur denedim. Yurtdışından gelen misafirlerimle gittik, hepsi çok beğendi. Profesyonel bir organizasyon.\"",
    de: "\"Ich lebe in Istanbul, aber solch eine Tour hatte ich noch nie gemacht. Mit ausländischen Gästen — alle begeistert. Professionelle Organisation.\"",
    es: "\"Vivo en Estambul pero nunca había probado un crucero así. Fui con invitados extranjeros — les encantó. Organización profesional.\"",
    ru: "\"Я живу в Стамбуле, но никогда не пробовал такой круиз. Пошёл с иностранными гостями — всем очень понравилось. Профессионально.\"",
    ar: "\"أعيش في إسطنبول لكنني لم أجرب رحلة كهذه من قبل. ذهبت مع ضيوفي الأجانب — أحبوها جميعًا. تنظيم احترافي.\""
  },
  "reviews.r10.info": {
    en: "Couple · Turkey", tr: "Çift · Türkiye", de: "Paar · Türkei",
    es: "Pareja · Turquía", ru: "Пара · Турция", ar: "زوجان · تركيا"
  },
  "reviews.r11": {
    en: "\"The Turkish night show was magical — costumes, colors, and the energy of the dancers. I caught this beautiful moment on camera.\"",
    tr: "\"Türk gecesi şovu büyüleyiciydi — kostümler, renkler, dansçıların enerjisi. Bu güzel anı kameraya aldım.\"",
    de: "\"Die Türkische Nacht war magisch — Kostüme, Farben, die Energie der Tänzer. Diesen schönen Moment habe ich eingefangen.\"",
    es: "\"El show de noche turca fue mágico — trajes, colores, la energía de los bailarines. Capturé este hermoso momento.\"",
    ru: "\"Турецкое ночное шоу было волшебным — костюмы, краски, энергия танцоров. Поймала этот прекрасный момент.\"",
    ar: "\"عرض الليلة التركية كان سحريًا — الأزياء والألوان وطاقة الراقصين. التقطت هذه اللحظة الجميلة.\""
  },
  "reviews.r11.info": {
    en: "Solo · Japan", tr: "Tek · Japonya", de: "Solo · Japan",
    es: "Solo · Japón", ru: "Соло · Япония", ar: "فردي · اليابان"
  },
  "reviews.r12": {
    en: "\"Punctual, clean boat, very friendly crew. Price-to-quality ratio is excellent. We'd come back on our next Istanbul visit.\"",
    tr: "\"Dakik, temiz tekne, çok güler yüzlü ekip. Fiyat-kalite dengesi çok iyi. Bir sonraki İstanbul ziyaretimizde yine geliriz.\"",
    de: "\"Pünktlich, sauberes Boot, sehr freundliche Crew. Preis-Leistungs-Verhältnis hervorragend. Wir kommen bei unserem nächsten Istanbul-Besuch wieder.\"",
    es: "\"Puntuales, barco limpio, tripulación muy amable. Relación calidad-precio excelente. Volveremos en nuestra próxima visita a Estambul.\"",
    ru: "\"Пунктуально, чистая лодка, очень приветливая команда. Соотношение цены и качества отличное. Вернёмся в следующий приезд.\"",
    ar: "\"في الوقت، قارب نظيف، طاقم ودود جدًا. نسبة الجودة إلى السعر ممتازة. سنعود في زيارتنا القادمة لإسطنبول.\""
  },
  "reviews.r12.info": {
    en: "Couple · Germany", tr: "Çift · Almanya", de: "Paar · Deutschland",
    es: "Pareja · Alemania", ru: "Пара · Германия", ar: "زوجان · ألمانيا"
  },
  "reviews.r13": {
    en: "\"Every dancer brought a different story. The red-dressed performer in particular had such stage presence — we couldn't look away.\"",
    tr: "\"Her dansçı farklı bir hikaye anlatıyordu. Özellikle kırmızı elbiseli sanatçının sahne hakimiyeti öyleydi ki gözümüzü ayıramadık.\"",
    de: "\"Jede Tänzerin erzählte eine andere Geschichte. Die Tänzerin im roten Kleid hatte eine solche Bühnenpräsenz — wir konnten nicht wegsehen.\"",
    es: "\"Cada bailarín traía una historia diferente. La intérprete vestida de rojo tenía tal presencia escénica que no podíamos apartar la vista.\"",
    ru: "\"Каждая танцовщица рассказывала свою историю. Исполнительница в красном платье обладала такой сценической харизмой, что оторваться было невозможно.\"",
    ar: "\"كل راقصة حملت قصة مختلفة. الراقصة ذات الفستان الأحمر تحديدًا كان لها حضور مسرحي لا يُقاوَم — لم نستطع إبعاد أنظارنا.\""
  },
  "reviews.r13.info": {
    en: "Couple · Austria", tr: "Çift · Avusturya", de: "Paar · Österreich",
    es: "Pareja · Austria", ru: "Пара · Австрия", ar: "زوجان · النمسا"
  },
  "reviews.r14": {
    en: "\"The belly dance performance was incredible — the dancer commanded the whole room. Pure artistry. Felt welcomed all evening on my solo trip.\"",
    tr: "\"Oryantal dans gösterisi inanılmazdı — dansçı tüm salona hakimdi. Saf sanat. Solo seyahatimde akşam boyunca kendimi hoş karşılanmış hissettim.\"",
    de: "\"Die Bauchtanz-Performance war unglaublich — die Tänzerin beherrschte den ganzen Saal. Pure Kunst. Auf meiner Solo-Reise fühlte ich mich den ganzen Abend willkommen.\"",
    es: "\"El espectáculo de danza del vientre fue increíble — la bailarina dominó toda la sala. Puro arte. Me sentí bienvenida durante toda mi noche en solitario.\"",
    ru: "\"Шоу с танцем живота было невероятным — танцовщица завладела вниманием всего зала. Чистое искусство. На моей сольной поездке я чувствовала себя как дома весь вечер.\"",
    ar: "\"عرض الرقص الشرقي كان لا يصدق — الراقصة سيطرت على القاعة كلها. فن نقي. شعرت بالترحيب طوال أمسيتي الفردية.\""
  },
  "reviews.r14.info": {
    en: "Solo · Netherlands", tr: "Tek · Hollanda", de: "Solo · Niederlande",
    es: "Solo · Países Bajos", ru: "Соло · Нидерланды", ar: "فردي · هولندا"
  },
  "reviews.r15": {
    en: "\"Booked last minute via WhatsApp. Response within minutes, confirmed instantly, paid on the boat. Smooth process, great night. Highly recommended.\"",
    tr: "\"Son dakika WhatsApp'tan rezervasyon yaptım. Dakikalar içinde yanıt, anında onay, teknede ödeme. Pürüzsüz süreç, harika bir gece. Kesinlikle tavsiye ederim.\"",
    de: "\"Last-Minute über WhatsApp gebucht. Antwort binnen Minuten, sofort bestätigt, an Bord bezahlt. Reibungsloser Ablauf, großartiger Abend. Sehr empfehlenswert.\"",
    es: "\"Reservé a último minuto por WhatsApp. Respuesta en minutos, confirmado al instante, pagué en el barco. Proceso fluido, gran noche. Muy recomendado.\"",
    ru: "\"Забронировал в последний момент через WhatsApp. Ответ за минуты, мгновенное подтверждение, оплата на борту. Плавный процесс, отличный вечер.\"",
    ar: "\"حجزت في اللحظة الأخيرة عبر واتساب. استجابة في دقائق، تأكيد فوري، دفعت على القارب. عملية سلسة، ليلة رائعة. أوصي به بشدة.\""
  },
  "reviews.r15.info": {
    en: "Solo · Russia", tr: "Tek · Rusya", de: "Solo · Russland",
    es: "Solo · Rusia", ru: "Соло · Россия", ar: "فردي · روسيا"
  },
  "reviews.r16": {
    en: "\"Halal menu was wonderful. Staff answered our questions patiently. Perfect for Muslim travelers visiting Istanbul.\"",
    tr: "\"Helal menü harikaydı. Ekip sorularımızı sabırla cevapladı. İstanbul'a gelen Müslüman misafirler için mükemmel.\"",
    de: "\"Halal-Menü war wunderbar. Das Team beantwortete unsere Fragen geduldig. Perfekt für muslimische Reisende.\"",
    es: "\"Menú halal estupendo. El personal respondió pacientemente a nuestras preguntas. Perfecto para viajeros musulmanes.\"",
    ru: "\"Халяль-меню было прекрасным. Персонал терпеливо отвечал на наши вопросы. Идеально для мусульманских путешественников.\"",
    ar: "\"قائمة الحلال كانت رائعة. أجاب الطاقم على أسئلتنا بصبر. مثالي للمسافرين المسلمين.\""
  },
  "reviews.r16.info": {
    en: "Couple · Morocco", tr: "Çift · Fas", de: "Paar · Marokko",
    es: "Pareja · Marruecos", ru: "Пара · Марокко", ar: "زوجان · المغرب"
  },
  "reviews.r17": {
    en: "\"Pure Istanbul magic. The DJ after dinner kept us dancing until midnight. Incredible energy on the dance floor.\"",
    tr: "\"Saf İstanbul büyüsü. Yemekten sonra DJ gece yarısına kadar dans ettirdi. Dans pistinde inanılmaz bir enerji.\"",
    de: "\"Pure Istanbul-Magie. Der DJ nach dem Essen hielt uns bis Mitternacht auf der Tanzfläche. Unglaubliche Energie.\"",
    es: "\"Pura magia de Estambul. El DJ después de la cena nos mantuvo bailando hasta medianoche. Energía increíble.\"",
    ru: "\"Чистая магия Стамбула. DJ после ужина удерживал нас на танцполе до полуночи. Невероятная энергия.\"",
    ar: "\"سحر إسطنبول الخالص. DJ بعد العشاء أبقانا نرقص حتى منتصف الليل. طاقة لا تصدق على حلبة الرقص.\""
  },
  "reviews.r17.info": {
    en: "Solo · Brazil", tr: "Tek · Brezilya", de: "Solo · Brasilien",
    es: "Solo · Brasil", ru: "Соло · Бразилия", ar: "فردي · البرازيل"
  },
  "reviews.r18": {
    en: "\"Took my parents for their 40th anniversary. They still talk about the dervish performance. Thank you for making it special.\"",
    tr: "\"Annem ve babamı 40. evlilik yıldönümleri için götürdüm. Hâlâ semazen gösterisini konuşuyorlar. Özel kıldığınız için teşekkürler.\"",
    de: "\"Brachte meine Eltern zum 40. Hochzeitstag. Sie reden immer noch vom Derwisch-Auftritt. Danke für den besonderen Abend.\"",
    es: "\"Llevé a mis padres a su 40 aniversario. Todavía hablan del derviche. Gracias por hacerlo especial.\"",
    ru: "\"Повёз родителей на 40-летие свадьбы. Они до сих пор говорят о выступлении дервиша. Спасибо, что сделали этот вечер особенным.\"",
    ar: "\"اصطحبت والديّ في الذكرى الأربعين لزواجهما. لا يزالان يتحدثان عن عرض الدرويش. شكرًا لجعلها مميزة.\""
  },
  "reviews.r18.info": {
    en: "Family · India", tr: "Aile · Hindistan", de: "Familie · Indien",
    es: "Familia · India", ru: "Семья · Индия", ar: "عائلة · الهند"
  },
  "reviews.r19": {
    en: "\"Incredibly organized. On time, exactly as described, clean boat. In Japan we value this — they delivered.\"",
    tr: "\"İnanılmaz derecede organize. Zamanında, anlatıldığı gibi, temiz tekne. Japonya'da buna değer veririz, gerçekleştirdiler.\"",
    de: "\"Unglaublich organisiert. Pünktlich, genau wie beschrieben, sauberes Boot. In Japan schätzen wir das — sie haben geliefert.\"",
    es: "\"Increíblemente organizado. Puntual, como lo describen, barco limpio. En Japón valoramos esto — lo cumplieron.\"",
    ru: "\"Невероятно организованно. Точно по времени, как описано, чистая лодка. В Японии мы это ценим — они справились.\"",
    ar: "\"منظم بشكل لا يصدق. في الوقت المحدد، تمامًا كما وُصف، قارب نظيف. في اليابان نقدر هذا — ونجحوا.\""
  },
  "reviews.r19.info": {
    en: "Solo · Japan", tr: "Tek · Japonya", de: "Solo · Japan",
    es: "Solo · Japón", ru: "Соло · Япония", ar: "فردي · اليابان"
  },
  "reviews.r20": {
    en: "\"Booked the morning of the cruise. Confirmed within 10 minutes. Paid cash on the boat. Could not be easier.\"",
    tr: "\"Tur sabahı rezervasyon yaptık. 10 dakikada onaylandı. Teknede nakit ödedik. Daha kolay olamazdı.\"",
    de: "\"Morgens am Tag der Tour gebucht. Binnen 10 Minuten bestätigt. Bar an Bord bezahlt. Könnte nicht einfacher sein.\"",
    es: "\"Reservamos la mañana del crucero. Confirmado en 10 minutos. Pagamos en efectivo en el barco. No podría ser más fácil.\"",
    ru: "\"Забронировали утром в день круиза. Подтвердили за 10 минут. Оплатили наличными на борту. Проще не бывает.\"",
    ar: "\"حجزنا صباح يوم الرحلة. تم التأكيد خلال 10 دقائق. دفعنا نقدًا على القارب. لا يمكن أن يكون أسهل.\""
  },
  "reviews.r20.info": {
    en: "Couple · Australia", tr: "Çift · Avustralya", de: "Paar · Australien",
    es: "Pareja · Australia", ru: "Пара · Австралия", ar: "زوجان · أستراليا"
  },
  "reviews.r21": {
    en: "\"Italian food snob here. Surprised by how good the Turkish courses were. Meze variety was genuinely impressive.\"",
    tr: "\"İtalyan yemek meraklısıyım. Türk yemeklerinin ne kadar iyi olduğuna şaşırdım. Meze çeşitliliği gerçekten etkileyiciydi.\"",
    de: "\"Italienischer Essens-Snob hier. Überrascht, wie gut die türkischen Gänge waren. Die Meze-Vielfalt war wirklich beeindruckend.\"",
    es: "\"Sibarita italiana aquí. Sorprendida por lo buenos que fueron los platos turcos. La variedad de mezes fue realmente impresionante.\"",
    ru: "\"Я итальянский гурман. Удивлена, насколько хороши были турецкие блюда. Выбор мезе впечатлил.\"",
    ar: "\"محبة للطعام الإيطالي. فوجئت بجودة الأطباق التركية. تنوع المقبلات كان مثيرًا للإعجاب.\""
  },
  "reviews.r21.info": {
    en: "Solo · Italy", tr: "Tek · İtalya", de: "Solo · Italien",
    es: "Solo · Italia", ru: "Соло · Италия", ar: "فردي · إيطاليا"
  },
  "reviews.r22": {
    en: "\"Korean couple visiting Istanbul. Everyone spoke English, the whole evening flowed seamlessly. Highlight of our trip.\"",
    tr: "\"İstanbul'a gelen Koreli çift. Herkes İngilizce konuşuyordu, akşam sorunsuz akıp gitti. Seyahatimizin en güzel anı.\"",
    de: "\"Koreanisches Paar zu Besuch in Istanbul. Alle sprachen Englisch, der ganze Abend verlief reibungslos. Höhepunkt unserer Reise.\"",
    es: "\"Pareja coreana visitando Estambul. Todos hablaban inglés, toda la noche fluyó sin problemas. Lo mejor de nuestro viaje.\"",
    ru: "\"Корейская пара в Стамбуле. Все говорили по-английски, весь вечер прошёл без сучка и задоринки. Главное впечатление поездки.\"",
    ar: "\"زوجان كوريان يزوران إسطنبول. الجميع يتحدث الإنجليزية، الأمسية كلها تدفقت بسلاسة. أبرز لحظة رحلتنا.\""
  },
  "reviews.r22.info": {
    en: "Couple · South Korea", tr: "Çift · Güney Kore", de: "Paar · Südkorea",
    es: "Pareja · Corea del Sur", ru: "Пара · Южная Корея", ar: "زوجان · كوريا الجنوبية"
  },
  "reviews.showMore": {
    en: "+5 more reviews",
    tr: "+5 yorum daha",
    de: "+5 weitere Bewertungen",
    es: "+5 reseñas más",
    ru: "+5 ещё отзывов",
    ar: "+٥ تقييمات أخرى"
  },

  // ========== HOW IT WORKS ==========
  "how.label": {
    en: "Simple Booking", tr: "Kolay Rezervasyon", de: "Einfache Buchung",
    es: "Reserva Sencilla", ru: "Простое бронирование", ar: "حجز سهل"
  },
  "how.title": {
    en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert es",
    es: "Cómo Funciona", ru: "Как это работает", ar: "كيف يعمل"
  },
  "how.subtitle": {
    en: "Write or call us. We'll handle the rest.",
    tr: "Bize yazın veya arayın. Gerisini biz halledelim.",
    de: "Schreiben oder rufen Sie uns an. Wir erledigen den Rest.",
    es: "Escríbenos o llámanos. Nosotros nos encargamos del resto.",
    ru: "Напишите или позвоните нам. Мы позаботимся об остальном.",
    ar: "راسلنا أو اتصل بنا. نحن نتولى الباقي."
  },
  "how.s1.title": {
    en: "Share Booking Details", tr: "Rezervasyon Detaylarını Girin", de: "Buchungsdetails angeben",
    es: "Comparta los detalles de la reserva", ru: "Укажите детали бронирования", ar: "شارك تفاصيل الحجز"
  },
  "how.s1.desc": {
    en: "Tell us the date, number of guests, and package (Standard or VIP).",
    tr: "Tarih, kişi sayısı ve paketi (Standard veya VIP) belirleyin.",
    de: "Teilen Sie uns Datum, Gästeanzahl und Paket (Standard oder VIP) mit.",
    es: "Indíquenos la fecha, el número de invitados y el paquete (Standard o VIP).",
    ru: "Укажите дату, количество гостей и пакет (Standard или VIP).",
    ar: "أخبرنا بالتاريخ وعدد الضيوف والباقة (القياسية أو VIP)."
  },
  "how.s2.title": {
    en: "Write, Call, or We'll Call You", tr: "Yazın, Arayın veya Biz Sizi Arayalım", de: "Schreiben, anrufen oder wir rufen Sie an",
    es: "Escríbenos, Llámanos o Te Llamamos", ru: "Напишите, Позвоните или Мы Вам Перезвоним", ar: "اكتب، اتصل، أو سنتصل بك"
  },
  "how.s2.desc": {
    en: "Message or call — whatever works for you. We respond quickly.",
    tr: "Yazılı veya sesli — size uygun şekilde iletişime geçin. Hızla dönüş yaparız.",
    de: "Schriftlich oder telefonisch — wie es Ihnen passt. Wir antworten schnell.",
    es: "Por mensaje o llamada — como prefieras. Respondemos rápido.",
    ru: "Письменно или по телефону — как вам удобно. Отвечаем быстро.",
    ar: "كتابياً أو صوتياً — كما يناسبك. نرد بسرعة."
  },
  "how.s3.title": {
    en: "Show Up & Pay on the Boat", tr: "Gelin & Teknede Ödeyin",
    de: "Kommen & an Bord bezahlen", es: "Llega y paga en el barco",
    ru: "Приходите и платите на борту", ar: "احضر وادفع على القارب"
  },
  "how.s3.desc": {
    en: "No prepayment needed. Just arrive at the pier, board your cruise, and pay onboard.",
    tr: "Ön ödeme gerekmez. İskeleye gelin, tekneye binin, ödemenizi teknede yapın.",
    de: "Keine Vorauszahlung. Einfach am Pier erscheinen, einsteigen und an Bord bezahlen.",
    es: "Sin prepago. Solo llega al muelle, sube a bordo y paga en el barco.",
    ru: "Предоплата не нужна. Просто приходите на пирс, садитесь на борт и платите там.",
    ar: "لا حاجة للدفع المسبق. فقط احضر إلى الرصيف واصعد على متن القارب وادفع هناك."
  },

  // ========== LAST MINUTE ==========
  "last.title": {
    en: "Need a Cruise Tonight?", tr: "Bu Gece Tur İster misiniz?",
    de: "Heute Nacht eine Tour?", es: "¿Necesitas un crucero esta noche?",
    ru: "Нужен круиз сегодня?", ar: "هل تحتاج رحلة الليلة؟"
  },
  "last.desc": {
    en: "Our team can check same-day availability for you in seconds. Message us — we respond instantly, 24/7.",
    tr: "Ekibimiz aynı gün müsaitliği saniyeler içinde kontrol edebilir. Bize yazın — 7/24 anında cevap veriyoruz.",
    de: "Unser Team prüft die Verfügbarkeit in Sekunden. Schreiben Sie uns — wir antworten sofort, 24/7.",
    es: "Nuestro equipo puede verificar la disponibilidad del mismo día en segundos. Escríbenos — respondemos al instante, 24/7.",
    ru: "Наша команда проверит наличие на сегодня за секунды. Напишите нам — мы отвечаем мгновенно, 24/7.",
    ar: "يمكن لفريقنا التحقق من توفر اليوم نفسه في ثوانٍ. راسلنا — نستجيب فوراً على مدار الساعة."
  },
  "last.cta": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et",
    de: "Entdecken & buchen", es: "Explorar y Reservar",
    ru: "Узнать и забронировать", ar: "استكشف واحجز"
  },
  "last.summary": {
    en: "21:00 · 3 hours · Dinner & Live Show · Pay on the boat",
    tr: "21:00 · 3 saat · Yemek & Canlı Şov · Teknede ödeme",
    de: "21:00 · 3 Stunden · Abendessen & Live-Show · Zahlung an Bord",
    es: "21:00 · 3 horas · Cena y Show en Vivo · Pago en el barco",
    ru: "21:00 · 3 часа · Ужин и живое шоу · Оплата на борту",
    ar: "21:00 · 3 ساعات · عشاء وعرض حي · الدفع على القارب"
  },

  // ========== WHY CHOOSE US ==========
  "why.label": {
    en: "Why Choose Us", tr: "Neden Biz", de: "Warum wir",
    es: "Por qué elegirnos", ru: "Почему мы", ar: "لماذا نحن"
  },
  "why.title": {
    en: "We Stay With You", tr: "Yanınızdayız", de: "Wir sind für Sie da",
    es: "Estamos contigo", ru: "Мы с вами", ar: "نبقى معك"
  },
  "why.before": {
    en: "Before", tr: "Öncesinde", de: "Vorher", es: "Antes", ru: "До", ar: "قبل"
  },
  "why.before.desc": {
    en: "We help you choose the perfect package, answer all your questions, and confirm your reservation.",
    tr: "Mükemmel paketi seçmenize yardım eder, tüm sorularınızı cevaplar ve rezervasyonunuzu onaylarız.",
    de: "Wir helfen beim perfekten Paket, beantworten alle Fragen und bestätigen Ihre Buchung.",
    es: "Te ayudamos a elegir el paquete perfecto, respondemos todas tus preguntas y confirmamos tu reserva.",
    ru: "Мы поможем выбрать идеальный пакет, ответим на все вопросы и подтвердим бронирование.",
    ar: "نساعدك في اختيار الباقة المثالية ونجيب على جميع أسئلتك ونؤكد حجزك."
  },
  "why.during": {
    en: "During", tr: "Sırasında", de: "Während", es: "Durante", ru: "Во время", ar: "أثناء"
  },
  "why.during.desc": {
    en: "We check on you during the cruise to make sure everything is perfect. Any issue? We handle it immediately.",
    tr: "Tur sırasında her şeyin mükemmel olduğundan emin olmak için sizinle iletişime geçeriz. Sorun mu var? Anında çözeriz.",
    de: "Wir prüfen während der Tour, ob alles perfekt ist. Problem? Wir lösen es sofort.",
    es: "Te contactamos durante el crucero para asegurarnos de que todo sea perfecto. ¿Algún problema? Lo resolvemos de inmediato.",
    ru: "Мы связываемся с вами во время круиза, чтобы убедиться, что всё идеально. Проблема? Решим немедленно.",
    ar: "نتواصل معك أثناء الرحلة للتأكد من أن كل شيء مثالي. أي مشكلة؟ نتعامل معها فوراً."
  },
  "why.after": {
    en: "After", tr: "Sonrasında", de: "Danach", es: "Después", ru: "После", ar: "بعد"
  },
  "why.after.desc": {
    en: "We follow up for your feedback and are always here if you want to book another experience in Istanbul.",
    tr: "Geri bildiriminiz için sizinle iletişime geçeriz ve İstanbul'da başka bir deneyim rezervasyonu için her zaman buradayız.",
    de: "Wir fragen nach Ihrem Feedback und sind da, wenn Sie ein weiteres Erlebnis in Istanbul buchen möchten.",
    es: "Hacemos seguimiento para tu opinión y siempre estamos aquí si quieres reservar otra experiencia en Estambul.",
    ru: "Мы свяжемся для отзыва и всегда готовы помочь забронировать ещё одно впечатление в Стамбуле.",
    ar: "نتابع معك للحصول على رأيك ونحن دائماً هنا إذا أردت حجز تجربة أخرى في إسطنبول."
  },

  // ========== FAQ ==========
  "faq.label": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة الشائعة"
  },
  "faq.title": {
    en: "Frequently Asked Questions", tr: "Sık Sorulan Sorular",
    de: "Häufig gestellte Fragen", es: "Preguntas Frecuentes",
    ru: "Часто задаваемые вопросы", ar: "الأسئلة الشائعة"
  },
  "faq.q0": { en: "What cruise tours do you offer?", tr: "Hangi tur seçenekleriniz var?", de: "Welche Touren bieten Sie an?", es: "¿Qué cruceros ofrecen?", ru: "Какие круизы вы предлагаете?", ar: "ما هي الرحلات البحرية التي تقدمونها؟" },
  "faq.a0": {
    en: "We offer the <strong>Bosphorus Dinner Cruise</strong> (21:00, 3 hours — full dinner, Turkish night show with Whirling Dervish, belly dance, folk dances, live music and DJ, plus stunning night views). Departs from Kabataş Pier.",
    tr: "<strong>Bosphorus Akşam Yemekli Turu</strong> sunuyoruz (21:00, 3 saat — tam menü akşam yemeği, Mevlana sema gösterisi, oryantal dans, halk oyunları, canlı müzik ve DJ, muhteşem gece manzarası). Kabataş İskelesi'nden kalkar.",
    de: "Wir bieten die <strong>Bosporus-Dinner-Kreuzfahrt</strong> (21:00, 3 Std. — Dinner, Türkische Nacht mit Derwisch-Tanz, Bauchtanz, Volkstänzen, Live-Musik und DJ, sowie atemberaubende Nachtblicke). Ab Kabataş-Pier.",
    es: "Ofrecemos el <strong>Crucero con Cena por el Bósforo</strong> (21:00, 3 horas — cena completa, noche turca con Derviches Giradores, danza del vientre, danzas folclóricas, música en vivo y DJ, más vistas nocturnas impresionantes). Sale del muelle de Kabataş.",
    ru: "Мы предлагаем <strong>Ужин-круиз по Босфору</strong> (21:00, 3 часа — ужин, турецкая ночь с кружащимися дервишами, танец живота, народные танцы, живая музыка и DJ, плюс впечатляющие ночные виды). Отправление с причала Кабаташ.",
    ar: "نقدم <strong>رحلة عشاء البوسفور</strong> (21:00، 3 ساعات — عشاء كامل، ليلة تركية مع رقصة الدراويش المولوية، رقص شرقي، رقصات شعبية، موسيقى حية وDJ، مع مناظر ليلية رائعة). تنطلق من رصيف كاباتاش."
  },
  "faq.q1": { en: "What's on the dinner menu?", tr: "Yemek menüsünde neler var?", de: "Was gibt es zum Abendessen?", es: "¿Qué hay en el menú de la cena?", ru: "Что в меню ужина?", ar: "ماذا يوجد في قائمة العشاء؟" },
  "faq.a1": {
    en: "All packages include a full dinner with 7 varieties of Turkish meze, your choice of main course (fish, chicken, or meatball), and dessert. VIP packages feature a premium mixed grill platter with selected cuts. Vegetarian options are available on request.",
    tr: "Standard pakette 10 çeşit Türk mezesi (VIP'te 15+), somon/çupra/tavuk/köfte ana yemek seçenekleri ve dondurmalı pasta dahildir. VIP pakette antrikot ve biftek seçenekleri, sahneye yakın masa vardır. İstek üzerine vejetaryen menü mevcuttur.",
    de: "Alle Pakete enthalten Abendessen mit 10 Meze-Sorten Standard (15+ für VIP), Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte) und Dessert mit Eis. VIP-Pakete mit Rib-Eye/Filet.",
    es: "Todos los paquetes incluyen una cena completa con 7 variedades de meze turco, tu elección de plato principal (pescado, pollo o albóndigas) y postre. Los paquetes VIP incluyen una parrillada mixta premium.",
    ru: "Все пакеты включают полный ужин с 7 видами турецких мезе, основное блюдо на выбор (рыба, курица или котлеты) и десерт. VIP-пакеты включают премиальное ассорти гриль.",
    ar: "تشمل جميع الباقات عشاءً كاملاً مع 7 أنواع من المقبلات التركية، واختيارك للطبق الرئيسي (سمك أو دجاج أو كفتة)، وحلوى. تتميز باقات VIP بطبق مشويات فاخر."
  },
  "faq.q2": { en: "Are alcoholic drinks included?", tr: "Alkollü içecekler dahil mi?", de: "Sind alkoholische Getränke inklusive?", es: "¿Están incluidas las bebidas alcohólicas?", ru: "Включены ли алкогольные напитки?", ar: "هل المشروبات الكحولية مشمولة؟" },
  "faq.a2": {
    en: "All packages include soft (non-alcoholic) drinks. You can add 2 glasses of alcohol for +€15 per person, or an unlimited local alcohol package for +€30 per person. The local package covers vodka, gin, rakı, red and white wine. Imported spirits (whiskey, cognac) are charged separately.",
    tr: "Tüm paketlere soft (alkolsüz) içecekler dahildir. Kişi başı +€15 ile 2 bardak alkol veya +€30 ile sınırsız yerli alkol paketi ekleyebilirsiniz. Yerli paket; votka, cin, rakı, kırmızı ve beyaz şarap ile sınırlıdır. İthal içkiler (viski, konyak) ekstra ücrete tabidir.",
    de: "Alle Pakete enthalten alkoholfreie Getränke. Für +€15 pro Person 2 Gläser Alkohol oder für +€30 pro Person ein unbegrenztes lokales Alkoholpaket wählbar. Das lokale Paket umfasst Wodka, Gin, Rakı, Rot- und Weißwein. Importierte Spirituosen (Whisky, Cognac) werden separat berechnet.",
    es: "Todos los paquetes incluyen bebidas sin alcohol. Puedes añadir 2 copas de alcohol por +€15 por persona, o un paquete de alcohol local ilimitado por +€30 por persona. El paquete local incluye vodka, ginebra, rakı, vino tinto y blanco. Los licores importados (whisky, coñac) se cobran aparte.",
    ru: "Все пакеты включают безалкогольные напитки. За +€15 с человека можно добавить 2 бокала алкоголя, а за +€30 — безлимитный пакет местного алкоголя. Местный пакет включает водку, джин, ракы, красное и белое вино. Импортный алкоголь (виски, коньяк) оплачивается отдельно.",
    ar: "جميع الباقات تشمل المشروبات الخفيفة (غير الكحولية). يمكنك إضافة كأسين من الكحول مقابل +€15 للشخص، أو باقة كحول محلية غير محدودة مقابل +€30 للشخص. تشمل الباقة المحلية: فودكا، جن، راكي، نبيذ أحمر وأبيض. المشروبات المستوردة (ويسكي، كونياك) تُحتسب بشكل منفصل."
  },
  "faq.q3": { en: "Where does the cruise depart and return?", tr: "Tur nereden kalkıp nereye dönüyor?", de: "Wo ist Abfahrt und Rückkehr?", es: "¿De dónde sale y regresa el crucero?", ru: "Откуда отправляется и возвращается круиз?", ar: "من أين تغادر وتعود الرحلة؟" },
  "faq.a3": {
    en: "Cruises depart from Kabataş pier at 21:00 and return to the same location between 23:00 and 00:00 (3-hour cruise). The exact meeting point will be shared via WhatsApp / Telegram / WeChat after booking.",
    tr: "Turlar Kabataş iskelesinden saat 21:00'te kalkar ve aynı noktaya 23:00 ile 00:00 arasında döner (3 saatlik tur). Tam buluşma noktası rezervasyon sonrası WhatsApp / Telegram / WeChat ile paylaşılır.",
    de: "Abfahrt ab Kabataş-Pier um 21:00, Rückkehr zwischen 23:00 und 00:00 (3 Stunden). Den genauen Treffpunkt erhalten Sie nach Buchung per WhatsApp / Telegram / WeChat.",
    es: "Los cruceros salen del muelle de Kabataş a las 21:00 y regresan al mismo lugar entre las 23:00 y las 00:00 (crucero de 3 horas). El punto de encuentro exacto se compartirá por WhatsApp / Telegram / WeChat tras la reserva.",
    ru: "Круизы отправляются от причала Кабаташ в 21:00 и возвращаются между 23:00 и 00:00 (3 часа). Точное место встречи будет отправлено в WhatsApp / Telegram / WeChat после бронирования.",
    ar: "تغادر الرحلات من رصيف كاباتاش الساعة 21:00 وتعود إلى نفس الموقع بين 23:00 و 00:00 (رحلة 3 ساعات). سيتم مشاركة نقطة الالتقاء عبر واتساب / تليجرام / وي شات بعد الحجز."
  },
  "faq.q4": { en: "What route does the cruise take?", tr: "Tur hangi rotayı izliyor?", de: "Welche Route fährt die Tour?", es: "¿Qué ruta toma el crucero?", ru: "Каким маршрутом идёт круиз?", ar: "ما هو مسار الرحلة؟" },
  "faq.a4": {
    en: "Kabataş Pier → Dolmabahçe Palace → Çırağan Palace → Ortaköy Mosque → Bosphorus Bridge → Bebek → Rumeli Fortress → FSM Bridge → Beylerbeyi Palace → Üsküdar → Maiden's Tower (visible from distance) → Kabataş Pier. Route is for reference only. Itinerary may vary due to weather or sea conditions.",
    tr: "Kabataş İskelesi → Dolmabahçe Sarayı → Çırağan Sarayı → Ortaköy Camii → Boğaz Köprüsü → Bebek → Rumeli Hisarı → FSM Köprüsü → Beylerbeyi Sarayı → Üsküdar → Kız Kulesi (uzaktan görünür) → Kabataş İskelesi. Rota yalnızca referans amaçlıdır. Hava ve deniz koşullarına göre güzergâh değişebilir.",
    de: "Kabataş-Pier → Dolmabahçe-Palast → Çırağan-Palast → Ortaköy-Moschee → Bosporus-Brücke → Bebek → Rumeli-Festung → FSM-Brücke → Beylerbeyi-Palast → Üsküdar → Leanderturm (aus der Ferne sichtbar) → Kabataş-Pier. Die Route dient nur als Referenz. Je nach Wetter- und Seebedingungen kann der Verlauf variieren.",
    es: "Embarcadero Kabataş → Palacio Dolmabahçe → Palacio Çırağan → Mezquita Ortaköy → Puente del Bósforo → Bebek → Fortaleza Rumeli → Puente FSM → Palacio Beylerbeyi → Üsküdar → Torre de la Doncella (visible en la distancia) → Embarcadero Kabataş. La ruta es solo de referencia. El itinerario puede variar según las condiciones del tiempo y del mar.",
    ru: "Пирс Кабаташ → Дворец Долмабахче → Дворец Чираган → Мечеть Ортакёй → Босфорский мост → Бебек → Крепость Румели → Мост ФСМ → Дворец Бейлербейи → Ускюдар → Девичья башня (видна издалека) → Пирс Кабаташ. Маршрут приведён для справки. Программа может меняться из-за погодных и морских условий.",
    ar: "رصيف قباطاش → قصر دولمة بهجة → قصر تشيراغان → مسجد أورتاكوي → جسر البوسفور → بيبك → قلعة روملي → جسر السلطان محمد الفاتح → قصر بيلربيي → أسكودار → برج الفتاة (يُرى من بعيد) → رصيف قباطاش. المسار للاسترشاد فقط، وقد يتغير حسب ظروف الطقس والبحر."
  },
  "faq.q5": { en: "How close are the tables to the stage?", tr: "Masalar sahneye ne kadar yakın?", de: "Wie nah sind die Tische zur Bühne?", es: "¿Qué tan cerca están las mesas del escenario?", ru: "Как близко столы к сцене?", ar: "ما مدى قرب الطاولات من المسرح؟" },
  "faq.a5": {
    en: "Our boat's dining hall has a panoramic Bosphorus view. No matter where you sit, you can enjoy the full view. The stage is also designed to be visible from every seat, so the shows can be watched easily. (VIP menus are seated closer to the stage.)",
    tr: "Tekne salonumuzda panoramik Boğaz manzarası vardır. Nerede oturduğunuzdan bağımsız tüm manzaranın keyfini çıkarabilirsiniz. Aynı zamanda sahne de her yerden görülecek şekildedir, şovlar rahatlıkla izlenebilir. (VIP menüler sahneye daha yakın konumlandırılır.)",
    de: "Unser Bootssalon bietet einen Panoramablick auf den Bosporus. Egal wo Sie sitzen, Sie genießen die volle Aussicht. Die Bühne ist so gestaltet, dass sie von überall aus zu sehen ist, und die Shows sind bequem zu verfolgen. (VIP-Menüs werden näher zur Bühne platziert.)",
    es: "El salón de nuestro barco tiene vistas panorámicas al Bósforo. Donde sea que te sientes, puedes disfrutar de toda la vista. El escenario también está diseñado para ser visible desde todas partes, y los shows se pueden ver cómodamente. (Los menús VIP se colocan más cerca del escenario.)",
    ru: "В салоне нашей лодки — панорамный вид на Босфор. Где бы вы ни сидели, вы сможете наслаждаться всей панорамой. Сцена также расположена так, чтобы её было видно отовсюду, и шоу легко смотреть. (VIP-меню размещаются ближе к сцене.)",
    ar: "تتميز صالة قاربنا بإطلالة بانورامية على مضيق البوسفور. أينما جلست، يمكنك الاستمتاع بالمنظر بالكامل. كما أن المسرح مصمم ليكون مرئيًا من كل مكان، ويمكن مشاهدة العروض بسهولة. (يتم وضع قوائم VIP أقرب إلى المسرح.)"
  },
  "faq.q6": { en: "What kind of shows and entertainment are there?", tr: "Ne tür şovlar ve eğlence var?", de: "Welche Shows und Unterhaltung gibt es?", es: "¿Qué tipo de shows y entretenimiento hay?", ru: "Какие шоу и развлечения?", ar: "ما نوع العروض والترفيه؟" },
  "faq.a6": {
    en: "The cruise features live singer performances, a traditional Turkish Night show with folk dances, belly dance, and DJ music. Entertainment continues uninterrupted until the end of the cruise.",
    tr: "Turda canlı şarkıcı performansları, geleneksel halk danslarıyla Türk Gecesi şovu, oryantal dans ve DJ müziği bulunur. Eğlence tur bitimine kadar kesintisiz devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstänzen, Bauchtanz und DJ-Musik. Unterhaltung bis zum Ende der Tour ohne Unterbrechung.",
    es: "El crucero incluye cantante en vivo, show nocturno turco con danzas folclóricas, danza del vientre y música DJ. El entretenimiento continúa sin interrupción hasta el final del crucero.",
    ru: "На круизе — живой певец, традиционное турецкое шоу с народными танцами, танец живота и DJ-музыка. Развлечения продолжаются без перерыва до конца круиза.",
    ar: "تتميز الرحلة بعروض مغني حي، عرض الليلة التركية التقليدية مع الرقصات الشعبية، رقص شرقي وموسيقى DJ. يستمر الترفيه دون انقطاع حتى نهاية الرحلة."
  },
  "faq.q7": { en: "Can I book for tonight?", tr: "Bu gece için rezervasyon yapabilir miyim?", de: "Kann ich für heute Abend buchen?", es: "¿Puedo reservar para esta noche?", ru: "Можно забронировать на сегодня?", ar: "هل يمكنني الحجز لهذه الليلة؟" },
  "faq.a7": {
    en: "Yes! Same-day bookings are available until 20:00 (1 hour before departure). Just message us.",
    tr: "Evet! Aynı gün rezervasyonlar 20:00'ye kadar (kalkıştan 1 saat önce) mümkündür. Bize yazın.",
    de: "Ja! Buchung am selben Tag bis 20:00 möglich (1 Std. vor Abfahrt). Schreiben Sie uns einfach.",
    es: "¡Sí! Las reservas del mismo día están disponibles hasta las 20:00. Solo escríbenos.",
    ru: "Да! Бронирование в тот же день доступно до 20:00. Просто напишите нам.",
    ar: "نعم! الحجوزات في نفس اليوم متاحة حتى الساعة 20:00. فقط راسلنا."
  },
  "faq.q8": { en: "How do I pay?", tr: "Nasıl ödeme yapacağım?", de: "Wie wird bezahlt?", es: "¿Cómo pago?", ru: "Как оплатить?", ar: "كيف أدفع؟" },
  "faq.a8": {
    en: "No prepayment is required. You pay directly on the boat. We accept cash (EUR, TRY, USD) and credit cards.",
    tr: "Ön ödeme gerekmez. Ödemenizi doğrudan teknede yaparsınız. Nakit (EUR, TRY, USD) ve kredi kartı kabul ediyoruz.",
    de: "Keine Vorauszahlung nötig. Zahlung direkt an Bord. Bar (EUR, TRY, USD) und Kreditkarte akzeptiert.",
    es: "No se requiere prepago. Pagas directamente en el barco. Aceptamos efectivo (EUR, TRY, USD) y tarjetas.",
    ru: "Предоплата не требуется. Вы платите на борту. Принимаем наличные (EUR, TRY, USD) и карты.",
    ar: "لا يلزم الدفع المسبق. تدفع مباشرة على القارب. نقبل النقد (يورو، ليرة، دولار) وبطاقات الائتمان."
  },
  "faq.q9": { en: "Is hotel transfer available?", tr: "Otel transferi var mı?", de: "Gibt es einen Hoteltransfer?", es: "¿Hay traslado al hotel?", ru: "Есть ли т��ансфер из отеля?", ar: "هل يتوفر نقل من الفندق؟" },
  "faq.a9": {
    en: "Yes! Hotel transfer is available for +€10 per person, including pickup and drop-off. Service areas: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy and Beyoğlu.",
    tr: "Evet! Otel transferi kişi başı +€10 ile mümkündür. Alım ve bırakım dahildir. Hizmet bölgeleri: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu.",
    de: "Ja! Hoteltransfer für +€10 pro Person, inkl. Abholung und Rückfahrt. Servicegebiete: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy und Beyoğlu.",
    es: "¡Sí! El traslado al hotel está disponible por +€10 por persona, incluyendo recogida y devolución. Zonas de servicio: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy y Beyoğlu.",
    ru: "Да! Трансфер из отеля доступен за +€10 с человека, включая подачу и возврат. Зоны обслуживания: Бешикташ, Сютлюдже, Сиркеджи, Топкапы, Таксим, Эминёню, Кягытхане, Фатих, Лалели, Султанахмет, Ортакёй и Бейоглу.",
    ar: "نعم! خدمة النقل من الفندق متاحة مقابل +€10 للشخص، شاملة الاستلام والتوصيل. مناطق الخدمة: بشكتاش، سوتلوجه، سيركجي، طوبكابي، تقسيم، إمينونو، كاغيتهانه، فاتح، لاليلي، السلطان أحمد، أورتاكوي وبيوغلو."
  },
  "faq.q10": { en: "Can I cancel or change my reservation?", tr: "Rezervasyonumu iptal edebilir veya değiştirebilir miyim?", de: "Kann ich stornieren oder ändern?", es: "¿Puedo cancelar o cambiar mi reserva?", ru: "Могу ли я отменить бронирование?", ar: "هل يمكنني إلغاء أو تغيير حجزي؟" },
  "faq.a10": {
    en: "Yes. Free cancellation up to 2 hours before the cruise (until 19:00). Since there's no prepayment, the process is hassle-free.",
    tr: "Evet. Turdan 2 saat öncesine kadar (19:00) ücretsiz iptal mümkündür. Ön ödeme olmadığı için süreç zahmetsizdir.",
    de: "Ja. Kostenlose Stornierung bis 2 Std. vorher (bis 19:00). Ohne Vorauszahlung ganz unkompliziert.",
    es: "Sí. Cancelación gratuita hasta 2 horas antes del crucero (hasta las 19:00). Sin prepago, el proceso es sencillo.",
    ru: "Да. Бесплатная отмена за 2 часа до круиза (до 19:00). Поскольку предоплаты нет, процесс простой.",
    ar: "نعم. إلغاء مجاني حتى ساعتين قبل الرحلة (حتى 19:00). بما أنه لا يوجد دفع مسبق، فالعملية سهلة."
  },
  "faq.q11": { en: "Where is the exact meeting point?", tr: "Tam buluşma noktası neresi?", de: "Wo ist der Treffpunkt?", es: "¿Dónde es el punto de encuentro exacto?", ru: "Где точное место встречи?", ar: "أين نقطة الالتقاء بالضبط؟" },
  "faq.a11": {
    en: "After your reservation is confirmed, we'll send you the exact location with a Google Maps pin on WhatsApp.",
    tr: "Rezervasyonunuz onaylandıktan sonra WhatsApp üzerinden Google Maps pini ile tam konumu göndereceğiz.",
    de: "Nach Bestätigung senden wir Ihnen den Standort mit Google Maps Pin per WhatsApp.",
    es: "Después de confirmar tu reserva, te enviaremos la ubicación exacta con un pin de Google Maps por WhatsApp.",
    ru: "После подтверждения бронирования мы отправим вам точное местоположение с пином Google Maps в WhatsApp.",
    ar: "بعد تأكيد حجزك، سنرسل لك الموقع الدقيق مع دبوس خرائط جوجل عبر واتساب."
  },

  // ========== BOTTOM CTA ==========
  "cta.title": {
    en: "Ready to Book Your Bosphorus Dinner Cruise?", tr: "Boğaz Yemekli Turunuzu Rezerve Etmeye Hazır mısınız?",
    de: "Bereit für Ihre Bosporus-Abendfahrt?", es: "¿Listo para reservar tu crucero con cena por el Bósforo?",
    ru: "Готовы забронировать ужин-круиз по Босфору?", ar: "هل أنت مستعد لحجز رحلة عشاء على البوسفور؟"
  },
  "cta.desc": {
    en: "Chat with us now to check availability and reserve your spot in minutes. No prepayment needed.",
    tr: "Müsaitliği kontrol etmek ve yerinizi dakikalar içinde ayırtmak için şimdi bizimle sohbet edin. Ön ödeme gerekmez.",
    de: "Jetzt per Chat Verfügbarkeit prüfen und Ihren Platz in Minuten sichern. Keine Vorauszahlung.",
    es: "Chatea con nosotros ahora para verificar disponibilidad y reservar tu lugar en minutos. Sin prepago.",
    ru: "Напишите нам сейчас, чтобы проверить наличие и забронировать место за минуты. Без предоплаты.",
    ar: "تواصل معنا الآن للتحقق من التوفر واحجز مكانك في دقائق. بدون دفع مسبق."
  },
  "cta.today": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите свой круиз", ar: "اختر رحلتك"
  },

  // ========== FOOTER ==========
  "footer.tagline": {
    en: "Your Bosphorus Night Awaits",
    tr: "Boğaz Geceniz Sizi Bekliyor",
    de: "Ihre Bosporus-Nacht wartet",
    es: "Tu Noche del Bósforo te Espera",
    ru: "Ваша босфорская ночь ждёт",
    ar: "ليلة البوسفور في انتظارك"
  },
  "footer.desc": {
    en: "We help you find the best cruise experience on the Bosphorus.",
    tr: "Boğaz'da en iyi tur deneyimini bulmanıza yardımcı oluyoruz.",
    de: "Wir helfen Ihnen, die beste Bootstour am Bosporus zu finden.",
    es: "Te ayudamos a encontrar la mejor experiencia de crucero en el Bósforo.",
    ru: "Мы помогаем найти лучший круиз по Босфору.",
    ar: "نساعدك في العثور على أفضل تجربة رحلة بحرية على البوسفور."
  },
  "footer.quicklinks": {
    en: "Quick Links", tr: "Hızlı Bağlantılar", de: "Schnelllinks", es: "Enlaces Rápidos",
    ru: "Быстрые ссылки", ar: "روابط سريعة"
  },
  "footer.contact": {
    en: "Contact", tr: "İletişim", de: "Kontakt", es: "Contacto", ru: "Контакты", ar: "اتصل بنا"
  },
  "footer.legal": {
    en: "Legal", tr: "Yasal", de: "Rechtliches", es: "Legal", ru: "Юридическая информация", ar: "قانوني"
  },
  "footer.howworks": {
    en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert es", es: "Cómo Funciona",
    ru: "Как это работает", ar: "كيف يعمل"
  },
  "footer.privacy": {
    en: "Privacy Policy", tr: "Gizlilik Politikası", de: "Datenschutz", es: "Política de Privacidad",
    ru: "Политика конфиденциальности", ar: "سياسة الخصوصية"
  },
  "footer.terms": {
    en: "Terms & Conditions", tr: "Şartlar ve Koşullar", de: "AGB", es: "Términos y Condiciones",
    ru: "Условия использования", ar: "الشروط والأحكام"
  },
  "footer.cancellation": {
    en: "Cancellation Policy", tr: "İptal Politikası", de: "Stornierung", es: "Política de Cancelación",
    ru: "Политика отмены", ar: "سياسة الإلغاء"
  },
  "footer.rights": {
    en: "All rights reserved.", tr: "Tüm hakları saklıdır.", de: "Alle Rechte vorbehalten.",
    es: "Todos los derechos reservados.", ru: "Все права защищены.", ar: "جميع الحقوق محفوظة."
  },
  "footer.location": {
    en: "Kabataş & Eminönü, Istanbul", tr: "Kabataş & Eminönü, İstanbul",
    de: "Kabataş & Eminönü, Istanbul", es: "Kabataş y Eminönü, Estambul",
    ru: "Кабаташ и Эминёню, Стамбул", ar: "كاباتاش وأمينونو، إسطنبول"
  },

  "footer.popularTours": {
    en: "Popular Tours", tr: "Popüler Turlar", de: "Beliebte Touren", es: "Tours Populares",
    ru: "Популярные туры", ar: "الرحلات الشائعة"
  },
  "footer.daytimeCruise": {
    en: "Bosphorus Daytime Cruise", tr: "Boğaz Gündüz Turu", de: "Bosporus-Tagestour", es: "Crucero Diurno por el Bósforo",
    ru: "Дневной круиз по Босфору", ar: "رحلة البوسفور النهارية"
  },
  "footer.sunsetCruise": {
    en: "Bosphorus Sunset Cruise", tr: "Boğaz Günbatımı Turu", de: "Bosporus-Sonnenuntergangstour", es: "Crucero al Atardecer por el Bósforo",
    ru: "Круиз по Босфору на закате", ar: "رحلة غروب البوسفور"
  },
  "footer.dinnerCruise": {
    en: "Bosphorus Dinner Cruise", tr: "Boğaz Yemekli Turu", de: "Bosporus-Abendfahrt", es: "Crucero con Cena por el Bósforo",
    ru: "Ужин-круиз по Босфору", ar: "رحلة عشاء البوسفور"
  },
  "footer.tonightCruise": {
    en: "Bosphorus Cruise Tonight", tr: "Bu Gece Boğaz Turu", de: "Bosporus-Tour Heute Abend", es: "Crucero por el Bósforo Esta Noche",
    ru: "Круиз по Босфору сегодня", ar: "رحلة البوسفور الليلة"
  },
  "footer.aboutUs": {
    en: "About Us", tr: "Hakkımızda", de: "Über Uns", es: "Sobre Nosotros",
    ru: "О нас", ar: "من نحن"
  },
  "footer.blog": {
    en: "Blog", tr: "Blog", de: "Blog", es: "Blog",
    ru: "Блог", ar: "المدونة"
  },

  // ========== DINNER PACKAGE CARDS ==========
  "dinner.std.title": {
    en: "Standard Menu", tr: "Standart Menü", de: "Standard-Menü", es: "Menú Estándar",
    ru: "Стандартное меню", ar: "القائمة القياسية"
  },
  "dinner.std.desc": {
    en: "Enjoy a 3-hour Bosphorus night cruise with a full dinner, live Turkish entertainment, and stunning views of Istanbul's skyline.",
    tr: "3 saatlik Boğaz gece turunda akşam yemeği, canlı Türk eğlencesi ve İstanbul'un muhteşem manzarasının keyfini çıkarın.",
    de: "3-stündige Bosporus-Nachtfahrt mit Abendessen, türkischer Live-Show und toller Aussicht auf Istanbul.",
    es: "Disfrute de un crucero nocturno de 3 horas por el Bósforo con cena completa, entretenimiento turco en vivo y vistas impresionantes de Estambul.",
    ru: "Насладитесь 3-часовым ночным круизом по Босфору с ужином, живыми турецкими шоу и потрясающими видами Стамбула.",
    ar: "استمتع برحلة بحرية ليلية لمدة 3 ساعات في البوسفور مع عشاء كامل وترفيه تركي حي وإطلالات خلابة على أفق إسطنبول."
  },
  "dinner.vip.title": {
    en: "VIP Menu", tr: "VIP Menü", de: "VIP-Menü", es: "Menú VIP",
    ru: "VIP меню", ar: "قائمة VIP"
  },
  "dinner.vip.desc": {
    en: "Premium dining at the best table near the stage. Upgraded menu with premium mezes, steak options, and VIP service throughout the night.",
    tr: "Sahneye en yakın masada premium yemek deneyimi. Zengin meze seçkisi, biftek seçenekleri ve gece boyunca VIP hizmet.",
    de: "Premium-Dinner am besten Tisch nahe der Bühne. Erweitertes Menü mit Premium-Meze, Steak und VIP-Service die ganze Nacht.",
    es: "Cena premium en la mejor mesa cerca del escenario. Menú mejorado con mezes premium, opciones de bistec y servicio VIP toda la noche.",
    ru: "Премиум-ужин за лучшим столом у сцены. Расширенное меню с премиум-мезе, стейками и VIP-обслуживанием всю ночь.",
    ar: "عشاء فاخر على أفضل طاولة بالقرب من المسرح. قائمة مطورة مع مقبلات فاخرة وخيارات ستيك وخدمة VIP طوال الليل."
  },
  "dinner.privateTable": {
    en: "Private table", tr: "Özel masa", de: "Privater Tisch", es: "Mesa privada",
    ru: "Отдельный стол", ar: "طاولة خاصة"
  },
  "dinner.nearStage": {
    en: "Near the stage", tr: "Sahneye yakın", de: "Nahe der Bühne", es: "Cerca del escenario",
    ru: "У сцены", ar: "بالقرب من المسرح"
  },
  "dinner.freeCancel": {
    en: "Free cancel 2hrs", tr: "2 saat önce ücretsiz iptal", de: "Gratis-Storno 2 Std.", es: "Cancelación gratis 2hrs",
    ru: "Бесплатная отмена за 2ч", ar: "إلغاء مجاني قبل ساعتين"
  },
  "dinner.halalTax": {
    en: "Halal", tr: "Helal", de: "Halal", es: "Halal",
    ru: "Халяль", ar: "حلال"
  },
  "meeting.share": {
    en: "Exact meeting location will be shared via WhatsApp, Telegram or WeChat after booking.",
    tr: "Tam buluşma noktası rezervasyondan sonra WhatsApp, Telegram veya WeChat üzerinden paylaşılacaktır.",
    de: "Der genaue Treffpunkt wird nach der Buchung über WhatsApp, Telegram oder WeChat geteilt.",
    es: "La ubicación exacta del encuentro se compartirá vía WhatsApp, Telegram o WeChat después de la reserva.",
    ru: "Точное место встречи будет отправлено через WhatsApp, Telegram или WeChat после бронирования.",
    ar: "سيتم مشاركة موقع اللقاء الدقيق عبر واتساب أو تيليجرام أو ويتشات بعد الحجز."
  },
  "meeting.howToFind": {
    en: "How to find us — walking directions",
    tr: "Bize nasıl gelirsiniz — yürüyüş tarifi",
    de: "So finden Sie uns — Wegbeschreibung zu Fuß",
    es: "Cómo encontrarnos — indicaciones a pie",
    ru: "Как нас найти — пешая навигация",
    ar: "كيفية الوصول إلينا — اتجاهات المشي"
  },
  "meeting.videoDolmabahce": {
    en: "From Dolmabahçe", tr: "Dolmabahçe'den", de: "Von Dolmabahçe",
    es: "Desde Dolmabahçe", ru: "От Долмабахче", ar: "من دولمة بهجة"
  },
  "meeting.videoTram": {
    en: "From Tram Station", tr: "Tramvay İstasyonundan", de: "Von der Tramstation",
    es: "Desde la Estación de Tranvía", ru: "От трамвайной остановки", ar: "من محطة الترام"
  },
  "meeting.videoWalk": {
    en: "Watch walking route", tr: "Yürüyüş rotasını izle", de: "Gehroute ansehen",
    es: "Ver ruta a pie", ru: "Смотреть пеший маршрут", ar: "شاهد مسار المشي"
  },
  "meeting.videoWalk2": {
    en: "Watch walking route", tr: "Yürüyüş rotasını izle", de: "Gehroute ansehen",
    es: "Ver ruta a pie", ru: "Смотреть пеший маршрут", ar: "شاهد مسار المشي"
  },
  "dropoff.title": {
    en: "Drop-off", tr: "Dönüş", de: "Rückfahrt", es: "Regreso", ru: "Возвращение", ar: "العودة"
  },
  "dropoff.desc": {
    en: "All guests are dropped off at <strong class=\"text-white/80\">Kabataş Pier</strong> between 23:30 and 00:00. If you booked hotel transfer, the same driver who picked you up will be waiting at the pier to take you back to your hotel.",
    tr: "Tüm misafirler <strong class=\"text-white/80\">Kabataş İskelesi</strong>'nde 23:30–00:00 arası bırakılır. Otel transferi aldıysanız, sizi otelinizden alan şoförümüz iskelede sizi bekliyor olacak ve otelinize geri götürecek.",
    de: "Alle Gäste werden zwischen 23:30 und 00:00 am <strong class=\"text-white/80\">Kabataş-Pier</strong> abgesetzt. Wenn Sie einen Hoteltransfer gebucht haben, wartet derselbe Fahrer, der Sie abgeholt hat, am Pier und bringt Sie zurück zum Hotel.",
    es: "Todos los invitados son dejados en el <strong class=\"text-white/80\">muelle de Kabataş</strong> entre las 23:30 y las 00:00. Si reservó traslado al hotel, el mismo chofer que le recogió le estará esperando en el muelle para llevarle de vuelta al hotel.",
    ru: "Всех гостей высаживают на <strong class=\"text-white/80\">причале Кабаташ</strong> между 23:30 и 00:00. Если вы забронировали трансфер, тот же водитель, который вас забрал, будет ждать на причале, чтобы отвезти вас обратно в отель.",
    ar: "يتم إنزال جميع الضيوف عند <strong class=\"text-white/80\">رصيف كاباتاش</strong> بين الساعة 23:30 و 00:00. إذا حجزت نقل الفندق، سينتظرك نفس السائق الذي أقلّك على الرصيف ليعيدك إلى فندقك."
  },
  "dinner.menuLabel": {
    en: "What's Included", tr: "Dahil Olanlar", de: "Inklusive", es: "Incluido",
    ru: "Включено", ar: "يشمل"
  },
  "dinner.std.item1": {
    en: "10 varieties of Turkish meze", tr: "10 çeşit Türk mezesi",
    de: "10 Sorten türkischer Meze", es: "10 variedades de meze turco",
    ru: "10 видов турецких мезе", ar: "10 أنواع من المقبلات التركية"
  },
  "dinner.std.item2": {
    en: "Warm appetizer: paçanga börek (beef pastırma & kashar cheese)", tr: "Ara sıcak: paçanga böreği (dana pastırması ve kaşar peyniri)",
    de: "Warme Vorspeise: Paçanga Börek (Rinder-Pastirma & Kashar-Käse)", es: "Entrante caliente: paçanga börek (pastırma de ternera y queso kashar)",
    ru: "Горячая закуска: пачанга бёрек (говяжья пастырма и сыр кашар)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة بقرية وجبن قشقوان)"
  },
  "dinner.std.item3": {
    en: "Main course (with seasonal salad, choose one): salmon, sea bream, chicken, meatball, or vegetarian platter (falafel, roasted potatoes, bulgur pilaf, stewed vegetables & onion rings)",
    tr: "Ana yemek (mevsim salatasıyla birlikte, birini seçin): somon, çipura, tavuk, köfte veya vejetaryen tabağı (falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası)",
    de: "Hauptgang (mit Saisonsalat, Auswahl): Lachs, Dorade, Hähnchen, Köfte oder vegetarischer Teller (Falafel, geröstete Kartoffeln, Bulgur-Pilaw, geschmortes Gemüse & Zwiebelringe)",
    es: "Plato principal (con ensalada de temporada, elija uno): salmón, dorada, pollo, albóndigas o plato vegetariano (falafel, patatas asadas, pilaf de bulgur, verduras estofadas y aros de cebolla)",
    ru: "Основное блюдо (с сезонным салатом, на выбор): лосось, дорада, курица, фрикадельки или вегетарианская тарелка (фалафель, жареный картофель, плов булгур, тушёные овощи и луковые кольца)",
    ar: "طبق رئيسي (مع سلطة موسمية، اختر واحد): سلمون، دنيس، دجاج، كفتة أو طبق نباتي (فلافل، بطاطا مقلية، بلغر، خضروات مطبوخة وحلقات بصل)"
  },
  "dinner.std.item4": {
    en: "Dessert: ice cream cake", tr: "Tatlı: dondurmalı pasta",
    de: "Dessert: Eistorte", es: "Postre: tarta helada",
    ru: "Десерт: торт-мороженое", ar: "حلوى: كعكة الآيس كريم"
  },
  "dinner.std.item5": {
    en: "Unlimited soft drinks (water, cola, juice)", tr: "Sınırsız meşrubat (su, kola, meyve suyu)",
    de: "Unbegrenzte Softdrinks (Wasser, Cola, Saft)", es: "Refrescos ilimitados (agua, cola, zumo)",
    ru: "Безлимитные безалкогольные напитки (вода, кола, сок)", ar: "مشروبات غازية غير محدودة (ماء، كولا، عصير)"
  },
  "dinner.std.item6": {
    en: "Whirling Dervish show, 5 folk dances, belly dance, live music & DJ", tr: "Sema gösterisi, 5 halk dansı, oryantal dans, canlı müzik ve DJ",
    de: "Derwisch-Show, 5 Volkstänze, Bauchtanz, Livemusik & DJ", es: "Show de derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ",
    ru: "Шоу дервишей, 5 народных танцев, танец живота, живая музыка и DJ", ar: "عرض الدراويش، 5 رقصات شعبية، رقص شرقي، موسيقى حية و DJ"
  },
  "dinner.std.item7": {
    en: "Open-air deck & panoramic viewing terrace",
    tr: "Açık güverte ve panoramik seyir terası",
    de: "Open-Air-Deck und Panoramaterrasse",
    es: "Cubierta al aire libre y terraza panorámica",
    ru: "Открытая палуба и панорамная терраса",
    ar: "سطح مكشوف وشرفة بانورامية"
  },
  "dinner.vip.item1": {
    en: "15+ varieties of Turkish meze, served as a traditional spread", tr: "15+ çeşit Türk mezesi, geleneksel serpme olarak servis",
    de: "15+ Sorten türkische Meze, traditionell serviert", es: "15+ variedades de meze turco, servido como spread tradicional",
    ru: "15+ видов турецких мезе, поданных в традиционном стиле", ar: "15+ نوع من المقبلات التركية، تقدم بأسلوب تقليدي"
  },
  "dinner.vip.item2": {
    en: "Warm appetizer: paçanga börek (beef pastırma & kashar cheese)", tr: "Ara sıcak: paçanga böreği (dana pastırması ve kaşar peyniri)",
    de: "Warme Vorspeise: Paçanga Börek (Rinder-Pastirma & Kashar-Käse)", es: "Entrante caliente: paçanga börek (pastırma de ternera y queso kashar)",
    ru: "Горячая закуска: пачанга бёрек (говяжья пастырма и сыр кашар)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة بقرية وجبن قشقوان)"
  },
  "dinner.vip.item3": {
    en: "Main course (with seasonal salad, choose one): salmon, sea bream, chicken, meatball, beef tenderloin, rib-eye, or vegetarian platter (falafel, roasted potatoes, bulgur pilaf, stewed vegetables & onion rings)",
    tr: "Ana yemek (mevsim salatasıyla birlikte, birini seçin): somon, çipura, tavuk, köfte, dana bonfile, antrikot veya vejetaryen tabağı (falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası)",
    de: "Hauptgang (mit Saisonsalat, Auswahl): Lachs, Dorade, Hähnchen, Köfte, Rinderfilet, Rib-Eye oder vegetarischer Teller (Falafel, geröstete Kartoffeln, Bulgur-Pilaw, geschmortes Gemüse & Zwiebelringe)",
    es: "Plato principal (con ensalada de temporada, elija uno): salmón, dorada, pollo, albóndigas, solomillo de ternera, chuletón o plato vegetariano (falafel, patatas asadas, pilaf de bulgur, verduras estofadas y aros de cebolla)",
    ru: "Основное блюдо (с сезонным салатом, на выбор): лосось, дорада, курица, фрикадельки, говяжья вырезка, рибай или вегетарианская тарелка (фалафель, жареный картофель, плов булгур, тушёные овощи и луковые кольца)",
    ar: "طبق رئيسي (مع سلطة موسمية، اختر واحد): سلمون، دنيس، دجاج، كفتة، فيليه لحم بقري، ريب آي أو طبق نباتي (فلافل، بطاطا مقلية، بلغر، خضروات مطبوخة وحلقات بصل)"
  },
  "dinner.vip.item4": {
    en: "Dessert: ice cream cake", tr: "Tatlı: dondurmalı pasta",
    de: "Dessert: Eistorte", es: "Postre: tarta helada",
    ru: "Десерт: торт-мороженое", ar: "حلوى: كعكة الآيس كريم"
  },
  "dinner.vip.item5": {
    en: "Unlimited soft drinks (water, cola, juice)", tr: "Sınırsız meşrubat (su, kola, meyve suyu)",
    de: "Unbegrenzte Softdrinks (Wasser, Cola, Saft)", es: "Refrescos ilimitados (agua, cola, zumo)",
    ru: "Безлимитные безалкогольные напитки (вода, кола, сок)", ar: "مشروبات غازية غير محدودة (ماء، كولا، عصير)"
  },
  "dinner.vip.item6": {
    en: "Whirling Dervish show, 5 folk dances, belly dance, live music & DJ", tr: "Sema gösterisi, 5 halk dansı, oryantal dans, canlı müzik ve DJ",
    de: "Derwisch-Show, 5 Volkstänze, Bauchtanz, Livemusik & DJ", es: "Show de derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ",
    ru: "Шоу дервишей, 5 народных танцев, танец живота, живая музыка и DJ", ar: "عرض الدراويش، 5 رقصات شعبية، رقص شرقي، موسيقى حية و DJ"
  },
  "dinner.vip.item7": {
    en: "Open-air deck & panoramic viewing terrace",
    tr: "Açık güverte ve panoramik seyir terası",
    de: "Open-Air-Deck und Panoramaterrasse",
    es: "Cubierta al aire libre y terraza panorámica",
    ru: "Открытая палуба и панорамная терраса",
    ar: "سطح مكشوف وشرفة بانورامية"
  },
  "dinner.perPerson": {
    en: " / person", tr: " / kişi", de: " / Person", es: " / persona",
    ru: " / чел.", ar: " / شخص"
  },
  "dinner.optionalLabel": {
    en: "Optional Add-ons", tr: "Eklenebilir Seçenekler", de: "Optionale Extras", es: "Complementos Opcionales",
    ru: "Дополнительные опции", ar: "إضافات اختيارية"
  },
  "dinner.addAlcoholTitle": {
    en: "Alcohol Package: +€30/person", tr: "Alkol Paketi: +€30/kişi", de: "Alkoholpaket: +€30/Person", es: "Paquete Alcohol: +€30/persona",
    ru: "Пакет алкоголя: +€30/чел.", ar: "باقة كحول: +€30/شخص"
  },
  "dinner.addAlcoholDesc": {
    en: "Unlimited local wine, beer, rakı, vodka, gin", tr: "Sınırsız yerli şarap, bira, rakı, votka, cin",
    de: "Unbegrenzt Wein, Bier, Raki, Wodka, Gin", es: "Vino local, cerveza, rakı, vodka, gin ilimitados",
    ru: "Безлимитное местное вино, пиво, ракы, водка, джин", ar: "نبيذ محلي، بيرة، راكي، فودكا، جن بلا حدود"
  },
  "dinner.addTransferTitle": {
    en: "Hotel Transfer: +€10/person", tr: "Otel Transferi: +€10/kişi", de: "Hoteltransfer: +€10/Person", es: "Traslado Hotel: +€10/persona",
    ru: "Трансфер из отеля: +€10/чел.", ar: "نقل فندقي: +€10/شخص"
  },
  "dinner.addTransferDesc": {
    en: "Pickup & drop-off from your hotel", tr: "Otelinizden alınır ve bırakılır",
    de: "Abholung & Rückfahrt von Ihrem Hotel", es: "Recogida y regreso desde su hotel",
    ru: "Заберём и отвезём обратно в ваш отель", ar: "التقاط وتوصيل من فندقك"
  },
  "dinner.addRomanticTitle": {
    en: "Romantic Table: +€15/table", tr: "Romantik Masa: +€15/masa", de: "Romantik-Tisch: +€15/Tisch", es: "Mesa Romántica: +€15/mesa",
    ru: "Романтический стол: +€15/стол", ar: "طاولة رومانسية: +€15/طاولة"
  },
  "dinner.addRomanticDesc": {
    en: "Candles, flowers & special setup", tr: "Mumlar, çiçekler ve özel düzenleme",
    de: "Kerzen, Blumen & besondere Deko", es: "Velas, flores y decoración especial",
    ru: "Свечи, цветы и особое оформление", ar: "شموع وزهور وترتيب خاص"
  },
  "dinner.mostPopular": {
    en: "Most Popular", tr: "En Popüler", de: "Beliebteste", es: "Más Popular",
    ru: "Самый популярный", ar: "الأكثر شعبية"
  },
  "dinner.bookBtn": {
    en: "Book Now", tr: "Rezervasyon Yaptır", de: "Jetzt Buchen", es: "Reservar Ahora",
    ru: "Забронировать", ar: "احجز الآن"
  },

  // ========== BOOKING COUNT ==========
  "booking.count": {
    en: "guests booked for tonight — join them!",
    tr: "kişi bu akşam için rezervasyon yaptı — siz de katılın!",
    de: "Gäste haben für heute Abend gebucht — seien Sie dabei!",
    es: "personas reservaron para esta noche — ¡únete!",
    ru: "гостей забронировали на сегодня — присоединяйтесь!",
    ar: "ضيف حجزوا لهذه الليلة — انضم إليهم!"
  },

  // ========== COUNTDOWN ==========
  "cd.closes": {
    en: "Tonight's booking closes in:", tr: "Bu geceki rezervasyon kapanışına:",
    de: "Buchung schließt in:", es: "La reserva de esta noche cierra en:",
    ru: "Бронирование на сегодня закрывается через:", ar: "يغلق حجز الليلة خلال:"
  },
  "cd.hours": {
    en: "Hours", tr: "Saat", de: "Std", es: "Horas", ru: "Часы", ar: "ساعات"
  },
  "cd.min": {
    en: "Min", tr: "Dk", de: "Min", es: "Min", ru: "Мин", ar: "دقائق"
  },
  "cd.sec": {
    en: "Sec", tr: "Sn", de: "Sek", es: "Seg", ru: "Сек", ar: "ثواني"
  },
  "cd.expired": {
    en: "Tonight's cruise is fully booked", tr: "Bu geceki tur dolmuştur",
    de: "Heutige Tour ist ausgebucht", es: "El crucero de esta noche está completo",
    ru: "Круиз на сегодня полностью забронирован", ar: "رحلة الليلة محجوزة بالكامل"
  },
  "cd.tomorrow": {
    en: "Tomorrow's cruise available — book now!", tr: "Yarınki tur müsait — hemen rezervasyon yapın!",
    de: "Tour morgen verfügbar — jetzt buchen!", es: "Crucero de mañana disponible — ¡reserva ahora!",
    ru: "Круиз на завтра доступен — бронируйте сейчас!", ar: "رحلة الغد متاحة — احجز الآن!"
  },

  // ========== WHATSAPP ==========
  "wa.tooltip": {
    en: "Chat with us!", tr: "Bize yazın!", de: "Chatten Sie mit uns!",
    es: "¡Escríbenos!", ru: "Напишите нам!", ar: "تواصل معنا!"
  },

  // ========== TOUR PANELS ==========
  "tour.daytime.label": {
    en: "Sightseeing Tour", tr: "Gezi Turu", de: "Sightseeing-Tour", es: "Tour Turístico", ru: "Обзорная экскурсия", ar: "جولة سياحية"
  },
  "tour.daytime.title1": { en: "Daytime", tr: "Gündüz", de: "Tages", es: "Diurno", ru: "Дневной", ar: "نهاري" },
  "tour.daytime.title2": { en: "Cruise", tr: "Turu", de: "Tour", es: "Crucero", ru: "Круиз", ar: "رحلة" },
  "tour.daytime.desc": {
    en: "Discover Istanbul's iconic landmarks under the daylight. Sail past the Maiden's Tower, Dolmabahce Palace, and Bosphorus Bridge.",
    tr: "Gün ışığında İstanbul'un ikonik simgelerini keşfedin. Kız Kulesi, Dolmabahçe Sarayı ve Boğaz Köprüsü'nün önünden geçin.",
    de: "Istanbuls Wahrzeichen bei Tageslicht entdecken. Leanderturm, Dolmabahçe-Palast und Bosporus-Brücke.",
    es: "Descubra los monumentos icónicos de Estambul bajo la luz del día. Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe y el Puente del Bósforo.",
    ru: "Откройте для себя знаковые достопримечательности Стамбула при дневном свете. Проплывите мимо Девичьей башни, дворца Долмабахче и Босфорского моста.",
    ar: "اكتشف معالم إسطنبول الشهيرة في ضوء النهار. أبحر بجوار برج الفتاة وقصر دولمة بهجة وجسر البوسفور."
  },
  "tour.daytime.short": { en: "Day", tr: "Gündüz", de: "Tag", es: "Día", ru: "День", ar: "نهار" },
  "tour.sunset.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض"
  },
  "tour.sunset.title1": { en: "Sunset", tr: "Gün Batımı", de: "Sonnenuntergang", es: "Atardecer", ru: "Закат", ar: "غروب" },
  "tour.sunset.title2": { en: "Cruise", tr: "Turu", de: "Tour", es: "Crucero", ru: "Круиз", ar: "رحلة" },
  "tour.sunset.desc": {
    en: "Watch the sun set over the Bosphorus while enjoying dinner and live entertainment. The golden hour on the water is unforgettable.",
    tr: "Yemek ve canlı eğlencenin keyfini çıkarırken Boğaz üzerinde gün batımını izleyin. Suyun üzerindeki altın saat unutulmaz.",
    de: "Sonnenuntergang über dem Bosporus mit Abendessen und Live-Show. Die goldene Stunde auf dem Wasser ist unvergesslich.",
    es: "Vea la puesta de sol sobre el Bósforo mientras disfruta de la cena y entretenimiento en vivo. La hora dorada en el agua es inolvidable.",
    ru: "Наблюдайте за закатом над Босфором, наслаждаясь ужином и живыми шоу. Золотой час на воде незабываем.",
    ar: "شاهد غروب الشمس فوق البوسفور أثناء الاستمتاع بالعشاء والترفيه الحي. الساعة الذهبية على الماء لا تُنسى."
  },
  "tour.sunset.short": { en: "Sunset", tr: "Gün Batımı", de: "Abend", es: "Atardecer", ru: "Закат", ar: "غروب" },
  "tour.sunset.maintenanceBadge": {
    en: "In Maintenance",
    tr: "Bakımda",
    de: "In Wartung",
    es: "En Mantenimiento",
    ru: "На обслуживании",
    ar: "قيد الصيانة"
  },
  "tour.sunset.maintenanceMsg": {
    en: "Temporarily unavailable — our sunset boat is in maintenance. We'll be back soon.",
    tr: "Bakım sebebiyle kısa süreliğine bu turda hizmet veremiyoruz. En kısa sürede döneceğiz.",
    de: "Vorübergehend nicht verfügbar — unser Sunset-Boot ist in Wartung. Wir sind bald zurück.",
    es: "Temporalmente no disponible — nuestro barco del atardecer está en mantenimiento. Volveremos pronto.",
    ru: "Временно недоступно — наша лодка на закате на техническом обслуживании. Скоро вернёмся.",
    ar: "غير متاح مؤقتاً — قارب الغروب قيد الصيانة. سنعود قريباً."
  },
  "tour.dinner.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض"
  },
  "tour.dinner.title1": { en: "Dinner", tr: "Yemekli", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء" },
  "tour.dinner.title2": { en: "Cruise", tr: "Turu", de: "Tour", es: "Crucero", ru: "Круиз", ar: "رحلة" },
  "tour.dinner.desc": {
    en: "The ultimate Bosphorus night. 3-course dinner, live entertainment, and Istanbul's illuminated skyline from the water.",
    tr: "Boğaz'ın en özel gecesi. 3 çeşit yemek, canlı eğlence ve suyun üzerinden İstanbul'un ışıklı silüeti.",
    de: "Die ultimative Bosporus-Nacht. 3-Gänge-Dinner, Live-Show und Istanbuls beleuchtete Skyline vom Wasser.",
    es: "La noche definitiva del Bósforo. Cena de 3 platos, entretenimiento en vivo y el horizonte iluminado de Estambul desde el agua.",
    ru: "Лучшая ночь на Босфоре. 3-блюдное меню, живые шоу и освещённая панорама Стамбула с воды.",
    ar: "ليلة البوسفور المثالية. عشاء من 3 أطباق، ترفيه حي، وأفق إسطنبول المضيء من الماء."
  },
  "tour.dinner.short": { en: "Dinner", tr: "Gece", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء" },
  "tour.popular": { en: "Popular", tr: "Popüler", de: "Beliebt", es: "Popular", ru: "Популярный", ar: "شائع" },
  "tour.explore": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز"
  },

  // ========== BOATS SECTION ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Tour wählen", es: "Elija su Crucero", ru: "Выберите круиз", ar: "اختر رحلتك"
  },
  "boats.title": {
    en: "Choose Your Experience", tr: "Deneyimini Seç", de: "Erlebnis wählen", es: "Elija su Experiencia", ru: "Выберите впечатление", ar: "اختر تجربتك"
  },
  "boats.desc": {
    en: "Pick the experience that fits your mood on the Bosphorus.", tr: "Boğaz'da ruh halinize uygun deneyimi seçin.", de: "Wählen Sie das Erlebnis, das zu Ihrer Stimmung am Bosporus passt.", es: "Elija la experiencia que mejor se adapte a su estado de ánimo en el Bósforo.", ru: "Выберите впечатление от Босфора, которое подходит вам.", ar: "اختر التجربة التي تناسب مزاجك على البوسفور."
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →", es: "Ver Paquetes →", ru: "Смотреть пакеты →", ar: "عرض الباقات ←"
  },
  "boats.daytime.desc": {
    en: "Scenic Bosphorus sightseeing under the sunlight. Maiden's Tower, palaces, and bridges.", tr: "Gün ışığında Boğaz manzarası. Kız Kulesi, saraylar ve köprüler.", de: "Bosporus-Sightseeing im Sonnenlicht. Leanderturm, Paläste und Brücken.", es: "Turismo panorámico por el Bósforo bajo la luz del sol. Torre de la Doncella, palacios y puentes.", ru: "Живописная экскурсия по Босфору при дневном свете. Девичья башня, дворцы и мосты.", ar: "مشاهدة معالم البوسفور تحت أشعة الشمس. برج الفتاة والقصور والجسور."
  },
  "boats.sunset.desc": {
    en: "Golden hour dinner cruise with live entertainment as the sun sets over the Bosphorus.", tr: "Boğaz üzerinde gün batımında canlı eğlence eşliğinde yemekli tur.", de: "Dinner-Tour zur goldenen Stunde mit Live-Show bei Sonnenuntergang.", es: "Crucero con cena en la hora dorada con entretenimiento en vivo al atardecer.", ru: "Ужин-круиз в золотой час с живыми шоу на закате над Босфором.", ar: "رحلة عشاء في الساعة الذهبية مع ترفيه حي أثناء غروب الشمس فوق البوسفور."
  },
  "boats.dinner.desc": {
    en: "The ultimate night experience. Dinner, live shows, and Istanbul's illuminated skyline.", tr: "En özel gece deneyimi. Yemek, canlı şovlar ve İstanbul'un ışıklı silüeti.", de: "Das ultimative Nachterlebnis. Dinner, Live-Shows und Istanbuls Skyline.", es: "La experiencia nocturna definitiva. Cena, shows en vivo y el horizonte iluminado de Estambul.", ru: "Лу��ший ночной опыт. Ужин, живые шоу и освещённая панорама Стамбула.", ar: "التجربة الليلية المثالية. عشاء وعروض حية وأفق إسطنبول المضيء."
  },

  // ========== BOOKING PANEL ==========
  "booking.selected": {
    en: "selected", tr: "seçili", de: "ausgewählt", es: "seleccionado", ru: "выбран", ar: "محدد"
  },
  "booking.title": {
    en: "Book Your Cruise", tr: "Turunu Rezerve Et", de: "Tour buchen",
    es: "Reserve su Crucero", ru: "Забронируйте круиз", ar: "احجز رحلتك"
  },
  "booking.tonight": {
    en: "Tonight", tr: "Bu Gece", de: "Heute Abend", es: "Esta Noche", ru: "Сегодня", ar: "الليلة"
  },
  "booking.date": {
    en: "Date", tr: "Tarih", de: "Datum", es: "Fecha", ru: "Дата", ar: "التاريخ"
  },
  "booking.adults": {
    en: "Adults", tr: "Yetişkin", de: "Erwachsene", es: "Adultos", ru: "Взрослые", ar: "بالغون"
  },
  "booking.children": {
    en: "Children", tr: "Çocuk", de: "Kinder", es: "Niños", ru: "Дети", ar: "أطفال"
  },
  "booking.childAges": {
    en: "Child Ages", tr: "Çocuk Yaşları", de: "Kinderalter", es: "Edades de los Niños", ru: "Возраст детей", ar: "أعمار الأطفال"
  },
  "booking.childNote": {
    en: "0-3 age: Free  |  4-8 age: 50% off  |  9+ age: Full price", tr: "0-3 yaş: Ücretsiz  |  4-8 yaş: %50 indirim  |  9+ yaş: Tam fiyat",
    de: "0-3 J.: Gratis  |  4-8 J.: 50% Rabatt  |  9+ J.: Vollpreis", es: "0-3 años: Gratis  |  4-8 años: 50% desc.  |  9+ años: Precio completo",
    ru: "0-3 лет: Бесплатно  |  4-8 лет: 50% скидка  |  9+ лет: Полная цена", ar: "0-3 سنة: مجاني  |  4-8 سنة: خصم 50%  |  9+ سنة: السعر الكامل"
  },
  "booking.boat": {
    en: "Cruise", tr: "Tekne", de: "Tour", es: "Crucero", ru: "Круиз", ar: "الرحلة"
  },
  "booking.package": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة"
  },
  "booking.extras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Дополнения", ar: "إضافات"
  },
  "booking.drinkLabel": {
    en: "Drink Selection", tr: "İçecek Seçimi", de: "Getränkewahl",
    es: "Selección de Bebidas", ru: "Выбор напитков", ar: "اختيار المشروبات"
  },
  "booking.transfer": {
    en: "Hotel Transfer (+€10/person)", tr: "Otel Transferi (+€10/kişi)", de: "Hoteltransfer (+€10/Person)",
    es: "Traslado al Hotel (+€10/persona)", ru: "Трансфер из отеля (+€10/чел.)", ar: "نقل من الفندق (+€10/شخص)"
  },
  "booking.romantic": {
    en: "Romantic Table (+€15/table)", tr: "Romantik Masa (+€15/masa)", de: "Romantik-Tisch (+€15/Tisch)",
    es: "Mesa Romántica (+€15/mesa)", ru: "Романтический стол (+€15/стол)", ar: "طاولة رومانسية (+€15/طاولة)"
  },
  "booking.total": {
    en: "Total", tr: "Toplam", de: "Gesamt", es: "Total", ru: "Итого", ar: "الإجمالي"
  },
  "booking.payNote": {
    en: "Pay on the boat — No prepayment", tr: "Teknede ödeyin — Ön ödeme yok",
    de: "Zahlung an Bord — Keine Vorauszahlung", es: "Paga en el barco — Sin prepago",
    ru: "Оплата на борту — без предоплаты", ar: "ادفع على القارب — بدون دفع مسبق"
  },
  "booking.cta": {
    en: "Book via WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen",
    es: "Reservar por WhatsApp", ru: "Забронировать через WhatsApp", ar: "احجز عبر واتساب"
  },
  "booking.from": {
    en: "From", tr: "Başlayan", de: "Ab", es: "Desde", ru: "От", ar: "من"
  },
  "booking.perPerson": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ чел.", ar: "/ شخص"
  },
  "booking.bookNow": {
    en: "Book Now", tr: "Hemen Rezerve Et", de: "Jetzt Buchen", es: "Reservar Ahora", ru: "Забронировать", ar: "احجز الآن"
  },

  // ========== PACKAGE NAMES ==========
  "pkg.std.name": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "قياسي"
  },
  "pkg.prem.name": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "بريميوم"
  },
  "pkg.vip.name": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP"
  },
  "pkg.bestValue": {
    en: "Best Value", tr: "En İyi Değer", de: "Bestes Angebot", es: "Mejor Valor", ru: "Лучшее предложение", ar: "أفضل قيمة"
  },

  // ========== PACKAGE FEATURES ==========
  "pkg.feat.cruise": {
    en: "3-hour Bosphorus night cruise", tr: "3 saat Boğaz gece turu", de: "3-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3 horas por el Bósforo", ru: "3-часовой ночной круиз по Босфору", ar: "رحلة ليلية في البوسفور لمدة 3 ساعة"
  },
  "pkg.feat.dinner": {
    en: "Dinner — 10 meze + salad + main course + dessert", tr: "Akşam yemeği — 10 meze + salata + ana yemek + tatlı", de: "Abendessen — 10 Meze + Salat + Hauptgang + Dessert", es: "Cena — 10 meze + ensalada + plato principal + postre", ru: "Ужин — 10 мезе + салат + основное блюдо + десерт", ar: "عشاء — 10 مقبلات + سلطة + طبق رئيسي + حلوى"
  },
  "pkg.feat.choices": {
    en: "4 choices: vegetarian, fish, chicken, meatball", tr: "4 seçenek: vejetaryen, balık, tavuk, köfte", de: "4 Optionen: vegetarisch, Fisch, Hähnchen, Frikadellen", es: "4 opciones: vegetariano, pescado, pollo, albóndigas", ru: "4 варианта: вегетарианское, рыба, курица, котлеты", ar: "4 خيارات: نباتي، سمك، دجاج، كفتة"
  },
  "pkg.feat.drinks": {
    en: "Unlimited soft drinks", tr: "Sınırsız alkolsüz içecek", de: "Unbegrenzte Softdrinks", es: "Refrescos ilimitados", ru: "Безлимитные безалкогольные напитки", ar: "مشروبات غازية غير محدودة"
  },
  "pkg.feat.table": {
    en: "Private table", tr: "Özel masa", de: "Privater Tisch", es: "Mesa privada", ru: "Отдельный столик", ar: "طاولة خاصة"
  },
  "pkg.feat.show": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu", de: "Live-Show & Türkische Nacht", es: "Entretenimiento en vivo y show nocturno turco", ru: "Живое шоу и турецкая ночь", ar: "ترفيه حي وعرض ليلة تركية"
  },
  "pkg.feat.tablePrem": {
    en: "Private table — stage view or window seat", tr: "Özel masa — sahne görüşü veya pencere kenarı", de: "Privater Tisch — Bühnensicht oder Fenster", es: "Mesa privada — vista al escenario o ventana", ru: "Отдельный столик — вид на сцену или у окна", ar: "طاولة خاصة — إطلالة على المسرح أو مقعد بجانب النافذة"
  },
  "pkg.feat.dinnerVip": {
    en: "VIP menu — premium meze, mixed grill & special dishes", tr: "VIP menü — premium meze, karışık ızgara & özel yemekler", de: "VIP-Menü — Premium-Meze, Mixed Grill & Extras", es: "Menú VIP — meze premium, parrillada mixta y platos especiales", ru: "VIP-меню — премиум мезе, микс-гриль и спецблюда", ar: "قائمة VIP — مقبلات فاخرة، مشويات مشكلة وأطباق خاصة"
  },
  "pkg.feat.tableVip": {
    en: "Private VIP table — best location", tr: "Özel VIP masa — en iyi konum", de: "Privater VIP-Tisch — beste Lage", es: "Mesa VIP privada — mejor ubicación", ru: "VIP-столик — лучшее расположение", ar: "طاولة VIP خاصة — أفضل موقع"
  },
  "pkg.feat.priority": {
    en: "Priority boarding & VIP service", tr: "Öncelikli biniş & VIP hizmet", de: "Bevorzugter Einstieg & VIP-Service", es: "Embarque prioritario y servicio VIP", ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود وخدمة VIP"
  },

  // ========== EXTRAS ==========
  "pkg.extras": {
    en: "Optional extras:", tr: "Opsiyonel ekstralar:", de: "Optionale Extras:", es: "Extras opcionales:", ru: "Дополнительные опции:", ar: "إضافات اختيارية:"
  },
  "pkg.badge.alcohol": {
    en: "Alcohol €30", tr: "Alkol €30", de: "Alkohol €30", es: "Alcohol €30", ru: "Алкоголь €30", ar: "كحول €30"
  },
  "pkg.badge.transfer": {
    en: "Transfer €10", tr: "Transfer €10", de: "Transfer €10", es: "Traslado €10", ru: "Трансфер €10", ar: "نقل €10"
  },
  "pkg.badge.romantic": {
    en: "Romantic €25", tr: "Romantik €25", de: "Romantik €25", es: "Romántico €25", ru: "Романтика €25", ar: "رومانسي €25"
  },

  // ========== PACKAGE OPTIONS ==========
  "pkg.opt.std": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "قياسي"
  },
  "pkg.opt.prem": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "بريميوم"
  },
  "pkg.opt.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP"
  },

  // ========== BOOKING DRINK SELECTION ==========
  "booking.softDrinkBtn": {
    en: "Soft Drinks", tr: "Alkolsüz", de: "Softdrinks", es: "Sin Alcohol", ru: "Безалкогольные", ar: "مشروبات غازية"
  },
  "booking.glass2Btn": {
    en: "2 Glasses +€15", tr: "2 Kadeh +€15", de: "2 Gläser +€15", es: "2 Copas +€15", ru: "2 бокала +€15", ar: "كأسان +€15"
  },
  "booking.unlimitedBtn": {
    en: "Unlimited +€30", tr: "Sınırsız +€30", de: "Unbegrenzt +€30", es: "Ilimitado +€30", ru: "Безлимит +€30", ar: "غير محدود +€30"
  },
  "booking.drinkWarn": {
    en: "⚠ Please select a drink option", tr: "⚠ Lütfen içecek seçimi yapın", de: "⚠ Bitte Getränk wählen", es: "⚠ Seleccione una opción de bebida", ru: "⚠ Выберите вариант напитков", ar: "⚠ يرجى اختيار خيار المشروبات"
  },
  "booking.softInfo": {
    en: "All guests get unlimited soft drinks", tr: "Tüm misafirler sınırsız alkolsüz içecek alır", de: "Alle Gäste erhalten unbegrenzt Softdrinks", es: "Todos los huéspedes reciben refrescos ilimitados", ru: "Все гости получат безлимитные безалкогольные напитки", ar: "جميع الضيوف يحصلون على مشروبات غازية غير محدودة"
  },

  // ========== GALLERY TABS ==========
  "gal.tab.all": {
    en: "All", tr: "Hepsi", de: "Alle", es: "Todo", ru: "Все", ar: "الكل"
  },
  "gal.tab.boat": {
    en: "Boat", tr: "Tekne", de: "Boot", es: "Barco", ru: "Судно", ar: "القارب"
  },
  "gal.tab.dining": {
    en: "Dining", tr: "Yemek", de: "Essen", es: "Cena", ru: "Ужин", ar: "العشاء"
  },
  "gal.tab.views": {
    en: "Views", tr: "Manzara", de: "Aussicht", es: "Vistas", ru: "Виды", ar: "المناظر"
  },
  "gal.tab.entertainment": {
    en: "Entertainment", tr: "Eğlence", de: "Show", es: "Show", ru: "Шоу", ar: "الترفيه"
  },
  "gal.tab.atmosphere": {
    en: "Atmosphere", tr: "Atmosfer", de: "Atmosphäre", es: "Ambiente", ru: "Атмосфера", ar: "الأجواء"
  },

  // ========== GALLERY CAPTIONS ==========
  "gal.1.title": {
    en: "Bosphorus Night View", tr: "Boğaz Gece Manzarası", de: "Bosporus-Nachtblick", es: "Vista Nocturna del Bósforo", ru: "Ночной вид Босфора", ar: "منظر البوسفور الليلي"
  },
  "gal.1.desc": {
    en: "Istanbul's iconic skyline at night", tr: "İstanbul'un ikonik gece silüeti", de: "Istanbuls ikonische Skyline bei Nacht", es: "El icónico horizonte nocturno de Estambul", ru: "Ночной горизонт Стамбула", ar: "أفق إسطنبول الليلي الأيقوني"
  },
  "gal.2.title": {
    en: "Dinner Setup", tr: "Yemek Düzeni", de: "Tischdekoration", es: "Montaje de Cena", ru: "Сервировка ужина", ar: "ترتيب العشاء"
  },
  "gal.2.desc": {
    en: "Premium table arrangement", tr: "Premium masa düzeni", de: "Premium-Tischarrangement", es: "Arreglo de mesa premium", ru: "Премиальная сервировка", ar: "ترتيب طاولة فاخر"
  },
  "gal.a1.title": {
    en: "Velvet Dining Hall", tr: "Kadife Yemek Salonu", de: "Samt-Speisesaal", es: "Salón de Terciopelo", ru: "Бархатный зал", ar: "قاعة طعام مخملية"
  },
  "gal.a1.desc": {
    en: "Premium seating with crystal glassware", tr: "Kristal cam takımıyla premium oturma", de: "Premium-Sitze mit Kristallgläsern", es: "Asientos premium con cristalería", ru: "Премиум-места с хрусталем", ar: "مقاعد فاخرة مع أدوات زجاجية كريستالية"
  },
  "gal.a2.title": {
    en: "Signature Mezes", tr: "Özel Meze Tabağı", de: "Signature-Mezes", es: "Mezes de la Casa", ru: "Фирменные мезе", ar: "مقبلات مميزة"
  },
  "gal.a2.desc": {
    en: "Turkish starter selection", tr: "Türk başlangıç seçkisi", de: "Türkische Vorspeisenauswahl", es: "Selección de entrantes turcos", ru: "Турецкие закуски на выбор", ar: "مقبلات تركية متنوعة"
  },
  "gal.3.title": {
    en: "Luxury Yacht Tour", tr: "Lüks Yat Turu", de: "Luxusyacht-Tour", es: "Tour en Yate de Lujo", ru: "Тур на люкс-яхте", ar: "جولة يخت فاخرة"
  },
  "gal.3.desc": {
    en: "Watch the full experience", tr: "Tam deneyimi izleyin", de: "Erleben Sie das volle Erlebnis", es: "Vea la experiencia completa", ru: "Полный опыт круиза", ar: "شاهد التجربة الكاملة"
  },
  "gal.4.title": {
    en: "Istanbul Skyline", tr: "İstanbul Silüeti", de: "Istanbul Skyline", es: "Horizonte de Estambul", ru: "Горизонт Стамбула", ar: "أفق إسطنبول"
  },
  "gal.4.desc": {
    en: "Maiden's Tower & beyond", tr: "Kız Kulesi ve ötesi", de: "Leanderturm & mehr", es: "Torre de la Doncella y más", ru: "Девичья башня и далее", ar: "برج الفتاة وما وراءه"
  },
  "gal.5.title": {
    en: "Turkish Night Show", tr: "Türk Gecesi Şovu", de: "Türkische Nachtshow", es: "Show Nocturno Turco", ru: "Турецкая ночь", ar: "عرض الليلة التركية"
  },
  "gal.5.desc": {
    en: "Live dance & music", tr: "Canlı dans ve müzik", de: "Live-Tanz & Musik", es: "Danza y música en vivo", ru: "Живые танцы и музыка", ar: "رقص وموسيقى حية"
  },
  "gal.6.title": {
    en: "Under the Bridge", tr: "Köprü Altından", de: "Unter der Brücke", es: "Bajo el Puente", ru: "Под мостом", ar: "تحت الجسر"
  },
  "gal.6.desc": {
    en: "Bosphorus Bridge at night", tr: "Boğaziçi Köprüsü gece", de: "Bosporus-Brücke bei Nacht", es: "Puente del Bósforo de noche", ru: "Мост через Босфор ночью", ar: "جسر البوسفور ليلاً"
  },
  "gal.7.title": {
    en: "Premium Cuisine", tr: "Premium Mutfak", de: "Premium-Küche", es: "Cocina Premium", ru: "Премиум-кухня", ar: "مطبخ فاخر"
  },
  "gal.7.desc": {
    en: "10 meze + main course + dessert", tr: "10 meze + ana yemek + tatlı", de: "10 Meze + Hauptgang + Dessert", es: "10 meze + plato principal + postre", ru: "10 мезе + основное + десерт", ar: "10 مقبلات + طبق رئيسي + حلوى"
  },
  "gal.8.title": {
    en: "Romantic Evening", tr: "Romantik Akşam", de: "Romantischer Abend", es: "Noche Romántica", ru: "Романтический вечер", ar: "أمسية رومانسية"
  },
  "gal.8.desc": {
    en: "Perfect for couples", tr: "Çiftler için mükemmel", de: "Perfekt für Paare", es: "Perfecto para parejas", ru: "Идеально для пар", ar: "مثالية للأزواج"
  },
  "gal.9.title": {
    en: "Classic Cruise", tr: "Klasik Cruise", de: "Klassische Kreuzfahrt", es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية"
  },
  "gal.9.desc": {
    en: "Elegant vessel on the Bosphorus", tr: "Boğaz'da zarif tekne", de: "Elegantes Schiff auf dem Bosporus", es: "Embarcación elegante en el Bósforo", ru: "Элегантное судно на Босфоре", ar: "سفينة أنيقة في البوسفور"
  },
  "gal.10.title": {
    en: "Night Atmosphere", tr: "Gece Atmosferi", de: "Nacht-Atmosphäre", es: "Ambiente Nocturno", ru: "Ночная атмосфера", ar: "أجواء الليل"
  },
  "gal.10.desc": {
    en: "Unforgettable ambiance", tr: "Unutulmaz ambiyans", de: "Unvergessliche Atmosphäre", es: "Ambiente inolvidable", ru: "Незабываемая атмосфера", ar: "أجواء لا تُنسى"
  },

  // ========== BOARDING SECTION ==========
  "boarding.label": {
    en: "Your Evening Begins", tr: "Akşamınız Başlıyor", de: "Ihr Abend beginnt", es: "Su Noche Comienza", ru: "Ваш вечер начинается", ar: "مساؤكم يبدأ"
  },
  "boarding.title": {
    en: "Welcome Aboard", tr: "Gemiye Hoş Geldiniz", de: "Willkommen an Bord", es: "Bienvenido a Bordo", ru: "Добро пожаловать на борт", ar: "مرحبًا على متن السفينة"
  },
  "boarding.music": {
    en: "Live music welcomes you", tr: "Canlı müzik sizi karşılıyor", de: "Live-Musik empfängt Sie", es: "La música en vivo te da la bienvenida", ru: "Живая музыка встречает вас", ar: "الموسيقى الحية ترحب بكم"
  },
  "boarding.music.desc": {
    en: "Live singer welcomes you as you step on board", tr: "Gemiye adım attığınızda canlı şarkıcı sizi karşılıyor", de: "Live-Sänger begrüßt Sie beim Betreten des Schiffes", es: "Un cantante en vivo te da la bienvenida al subir a bordo", ru: "Живой певец встречает вас при посадке", ar: "مغني حي يرحب بكم عند صعودكم على متن السفينة"
  },
  "boarding.table": {
    en: "Your reserved table awaits", tr: "Rezerve masanız hazır", de: "Ihr reservierter Tisch wartet", es: "Su mesa reservada le espera", ru: "Ваш зарезервированный стол ждёт", ar: "طاولتكم المحجوزة بانتظاركم"
  },
  "boarding.table.desc": {
    en: "Pre-assigned private seating with the best views", tr: "En iyi manzaralı özel oturma düzeni", de: "Vorab zugewiesene Plätze mit bester Aussicht", es: "Asientos privados preasignados con las mejores vistas", ru: "Заранее назначенные места с лучшим видом", ar: "مقاعد خاصة مخصصة مسبقًا بأفضل الإطلالات"
  },
  "boarding.meze": {
    en: "Meze & drinks before departure", tr: "Kalkış öncesi meze ve içecekler", de: "Meze & Getränke vor Abfahrt", es: "Meze y bebidas antes de la salida", ru: "Мезе и напитки перед отплытием", ar: "مقبلات ومشروبات قبل المغادرة"
  },
  "boarding.meze.desc": {
    en: "Start with Turkish meze and refreshments while we prepare to sail", tr: "Kalkışa hazırlanırken Türk mezeleri ve içeceklerle başlayın", de: "Beginnen Sie mit türkischen Meze und Erfrischungen", es: "Comience con meze turco y refrescos mientras nos preparamos", ru: "Начните с турецких мезе и напитков пока мы готовимся к отплытию", ar: "ابدأ بالمقبلات التركية والمشروبات أثناء التحضير للإبحار"
  },
  "boarding.sail": {
    en: "Show begins as we set sail", tr: "Yelken açılınca şov başlıyor", de: "Die Show beginnt mit dem Ablegen", es: "El show comienza al zarpar", ru: "Шоу начинается с отплытием", ar: "يبدأ العرض مع الإبحار"
  },
  "boarding.sail.desc": {
    en: "The entertainment starts the moment we leave the pier", tr: "İskeleden ayrıldığımız an eğlence başlıyor", de: "Die Unterhaltung beginnt sobald wir den Pier verlassen", es: "El entretenimiento comienza en cuanto dejamos el muelle", ru: "Развлечения начинаются в момент отхода от пирса", ar: "يبدأ الترفيه لحظة مغادرة الرصيف"
  },

  // ========== ARRIVAL SECTION ==========
  "arrival.label": {
    en: "End of Cruise", tr: "Turun Sonu", de: "Ende der Kreuzfahrt", es: "Fin del Crucero", ru: "Конец круиза", ar: "نهاية الرحلة"
  },
  "arrival.title": {
    en: "Return to Kabataş", tr: "Kabataş'a Dönüş", de: "Rückkehr nach Kabataş", es: "Regreso a Kabataş", ru: "Возвращение в Кабаташ", ar: "العودة إلى كاباتاش"
  },
  "arrival.pier": {
    en: "Back to Kabataş Pier", tr: "Kabataş İskelesi'ne dönüş", de: "Zurück zum Kabataş Pier", es: "De vuelta al muelle de Kabataş", ru: "Обратно к пирсу Кабаташ", ar: "العودة إلى رصيف كاباتاش"
  },
  "arrival.pier.desc": {
    en: "We return to the same pier where we departed", tr: "Kalktığımız iskeleye geri dönüyoruz", de: "Wir kehren zum selben Pier zurück", es: "Regresamos al mismo muelle de partida", ru: "Мы возвращаемся к тому же причалу", ar: "نعود إلى نفس الرصيف الذي غادرنا منه"
  },
  "arrival.photos": {
    en: "Final photos on deck", tr: "Güvertede son fotoğraflar", de: "Letzte Fotos an Deck", es: "Últimas fotos en cubierta", ru: "Последние фото на палубе", ar: "صور أخيرة على السطح"
  },
  "arrival.photos.desc": {
    en: "Capture the last moments of the Istanbul skyline", tr: "İstanbul silüetinin son anlarını yakalayın", de: "Fangen Sie die letzten Momente der Istanbul-Skyline ein", es: "Capture los últimos momentos del horizonte de Estambul", ru: "Запечатлейте последние моменты панорамы Стамбула", ar: "التقط آخر لحظات أفق إسطنبول"
  },
  "arrival.transfer": {
    en: "Your transfer awaits", tr: "Transferiniz hazır", de: "Ihr Transfer wartet", es: "Su traslado le espera", ru: "Ваш трансфер ждёт", ar: "النقل بانتظاركم"
  },
  "arrival.transfer.desc": {
    en: "If you booked a transfer, your driver will be waiting at the pier", tr: "Transfer rezervasyonu yaptıysanız şoförünüz iskelede bekliyor olacak", de: "Wenn Sie einen Transfer gebucht haben, wartet Ihr Fahrer am Pier", es: "Si reservó un traslado, su conductor estará esperando en el muelle", ru: "Если вы заказали трансфер, водитель будет ждать на пирсе", ar: "إذا حجزت نقلًا، سيكون سائقك بانتظارك في الرصيف"
  },
  "arrival.night": {
    en: "An unforgettable night", tr: "Unutulmaz bir gece", de: "Eine unvergessliche Nacht", es: "Una noche inolvidable", ru: "Незабываемая ночь", ar: "ليلة لا تُنسى"
  },
  "arrival.night.desc": {
    en: "Take the magic of Istanbul's night with you", tr: "İstanbul gecesinin büyüsünü yanınızda götürün", de: "Nehmen Sie den Zauber der Istanbuler Nacht mit", es: "Llévese la magia de la noche de Estambul", ru: "Возьмите с собой магию ночного Стамбула", ar: "خذ معك سحر ليل إسطنبول"
  },

  // ========== BOARDING & ARRIVAL TIMES ==========
  "boarding.time.day": {
    en: "Day Cruise: Boarding 10:00 · Departure 10:30",
    tr: "Gündüz Turu: Biniş 10:00 · Kalkış 10:30",
    de: "Tageskreuzfahrt: Boarding 10:00 · Abfahrt 10:30",
    es: "Crucero Diurno: Embarque 10:00 · Salida 10:30",
    ru: "Дневной круиз: Посадка 10:00 · Отправление 10:30",
    ar: "رحلة نهارية: الصعود 10:00 · المغادرة 10:30"
  },
  "boarding.time.sunset": {
    en: "Sunset Cruise: Boarding 17:00 · Departure 17:15",
    tr: "Gün Batımı Turu: Biniş 17:00 · Kalkış 17:15",
    de: "Sonnenuntergangskreuzfahrt: Boarding 17:00 · Abfahrt 17:15",
    es: "Crucero al Atardecer: Embarque 17:00 · Salida 17:15",
    ru: "Круиз на закате: Посадка 17:00 · Отправление 17:15",
    ar: "رحلة غروب الشمس: الصعود 17:00 · المغادرة 17:15"
  },
  "boarding.time.night": {
    en: "Night Cruise: Boarding 20:00 · Departure 21:00",
    tr: "Gece Turu: Biniş 20:00 · Kalkış 21:00",
    de: "Nachtkreuzfahrt: Boarding 20:00 · Abfahrt 21:00",
    es: "Crucero Nocturno: Embarque 20:00 · Salida 21:00",
    ru: "Ночной круиз: Посадка 20:00 · Отправление 21:00",
    ar: "رحلة ليلية: الصعود 20:00 · المغادرة 21:00"
  },
  "boarding.time.pier": {
    en: "Kabataş Pier",
    tr: "Kabataş İskelesi",
    de: "Kabataş Pier",
    es: "Muelle de Kabataş",
    ru: "Причал Кабаташ",
    ar: "رصيف كاباتاش"
  },
  "arrival.time.day": {
    en: "Day Cruise: Return ~12:30",
    tr: "Gündüz Turu: Dönüş ~12:30",
    de: "Tageskreuzfahrt: Rückkehr ~12:30",
    es: "Crucero Diurno: Regreso ~12:30",
    ru: "Дневной круиз: Возвращение ~12:30",
    ar: "رحلة نهارية: العودة ~12:30"
  },
  "arrival.time.sunset": {
    en: "Sunset Cruise: Return ~19:30",
    tr: "Gün Batımı Turu: Dönüş ~19:30",
    de: "Sonnenuntergangskreuzfahrt: Rückkehr ~19:30",
    es: "Crucero al Atardecer: Regreso ~19:30",
    ru: "Круиз на закате: Возвращение ~19:30",
    ar: "رحلة غروب الشمس: العودة ~19:30"
  },
  "arrival.time.night": {
    en: "Night Cruise: Return 23:30–00:00",
    tr: "Gece Turu: Dönüş 23:30–00:00",
    de: "Nachtkreuzfahrt: Rückkehr ~23:30",
    es: "Crucero Nocturno: Regreso ~23:30",
    ru: "Ночной круиз: Возвращение 23:30–00:00",
    ar: "رحلة ليلية: العودة ~23:30"
  },
  "arrival.time.pier": {
    en: "Kabataş Pier",
    tr: "Kabataş İskelesi",
    de: "Kabataş Pier",
    es: "Muelle de Kabataş",
    ru: "Причал Кабаташ",
    ar: "رصيف كاباتاش"
  },

  // ========== WIZARD (Mobile Booking Panel) ==========
  "wizard.step1of4": {
    en: "Step 1 of 4",
    tr: "Adım 1 / 4",
    de: "Schritt 1 von 4",
    es: "Paso 1 de 4",
    ru: "Шаг 1 из 4",
    ar: "الخطوة 1 من 4"
  },
  "wizard.step2of4": {
    en: "Step 2 of 4",
    tr: "Adım 2 / 4",
    de: "Schritt 2 von 4",
    es: "Paso 2 de 4",
    ru: "Шаг 2 из 4",
    ar: "الخطوة 2 من 4"
  },
  "wizard.step3of4": {
    en: "Step 3 of 4",
    tr: "Adım 3 / 4",
    de: "Schritt 3 von 4",
    es: "Paso 3 de 4",
    ru: "Шаг 3 из 4",
    ar: "الخطوة 3 من 4"
  },
  "wizard.step4of4": {
    en: "Step 4 of 4",
    tr: "Adım 4 / 4",
    de: "Schritt 4 von 4",
    es: "Paso 4 de 4",
    ru: "Шаг 4 из 4",
    ar: "الخطوة 4 من 4"
  },
  "wizard.standard": {
    en: "Standard",
    tr: "Standart",
    de: "Standard",
    es: "Estándar",
    ru: "Стандарт",
    ar: "قياسي"
  },
  "wizard.vip": {
    en: "VIP",
    tr: "VIP",
    de: "VIP",
    es: "VIP",
    ru: "VIP",
    ar: "VIP"
  },
  "wizard.language": {
    en: "Preferred Language",
    tr: "Tercih Edilen Dil",
    de: "Bevorzugte Sprache",
    es: "Idioma preferido",
    ru: "Предпочитаемый язык",
    ar: "اللغة المفضلة"
  },
  "wizard.back": {
    en: "Back",
    tr: "Geri",
    de: "Zurück",
    es: "Atrás",
    ru: "Назад",
    ar: "رجوع"
  },
  "wizard.next": {
    en: "Next",
    tr: "İleri",
    de: "Weiter",
    es: "Siguiente",
    ru: "Далее",
    ar: "التالي"
  },
  "wizard.softDrinks": {
    en: "Soft Drinks",
    tr: "Alkolsüz",
    de: "Alkoholfrei",
    es: "Sin alcohol",
    ru: "Безалкогольные",
    ar: "مشروبات غازية"
  },
  "wizard.glass2": {
    en: "2 Glasses +€15",
    tr: "2 Kadeh +€15",
    de: "2 Gläser +7 €",
    es: "2 copas +7 €",
    ru: "2 бокала +7 €",
    ar: "كأسان +٧€"
  },
  "wizard.unlimited": {
    en: "Unlimited +€30",
    tr: "Sınırsız +€30",
    de: "Unbegrenzt +15 €",
    es: "Ilimitado +15 €",
    ru: "Безлимит +15 €",
    ar: "غير محدود +١٥€"
  },
  "wizard.softDesc": {
    en: "Unlimited tea, coffee, water, cola & juice",
    tr: "Sınırsız çay, kahve, su, kola ve meyve suyu",
    de: "Unbegrenzt Tee, Kaffee, Wasser, Cola & Saft",
    es: "Té, café, agua, cola y zumo ilimitados",
    ru: "Безлимитный чай, кофе, вода, кола и сок",
    ar: "شاي وقهوة وماء وكولا وعصير بلا حدود"
  },
  "wizard.glass2Desc": {
    en: "Choose from local wine, beer, rakı, vodka, or gin",
    tr: "Yerli şarap, bira, rakı, vodka veya cin seçin",
    de: "Auswahl aus lokalem Wein, Bier, Rakı, Wodka oder Gin",
    es: "Elija entre vino local, cerveza, rakı, vodka o ginebra",
    ru: "На выбор: местное вино, пиво, ракы, водка или джин",
    ar: "اختر من النبيذ المحلي أو البيرة أو العرق أو الفودكا أو الجن"
  },
  "wizard.unlimitedDesc": {
    en: "Unlimited local wine, beer, rakı, vodka, gin all night",
    tr: "Gece boyunca sınırsız yerli şarap, bira, rakı, vodka, cin",
    de: "Die ganze Nacht unbegrenzt lokaler Wein, Bier, Rakı, Wodka, Gin",
    es: "Vino local, cerveza, rakı, vodka y ginebra ilimitados toda la noche",
    ru: "Безлимитное местное вино, пиво, ракы, водка, джин всю ночь",
    ar: "نبيذ محلي وبيرة وعرق وفودكا وجن بلا حدود طوال الليل"
  },
  "wizard.transferLabel": {
    en: "Hotel Transfer",
    tr: "Otel Transferi",
    de: "Hoteltransfer",
    es: "Traslado al hotel",
    ru: "Трансфер из отеля",
    ar: "نقل من الفندق"
  },
  "wizard.no": {
    en: "No",
    tr: "Hayır",
    de: "Nein",
    es: "No",
    ru: "Нет",
    ar: "لا"
  },
  "wizard.transferYes": {
    en: "Yes +€10/person",
    tr: "Evet +€10/kişi",
    de: "Ja +10 €/Person",
    es: "Sí +10 €/persona",
    ru: "Да +10 €/чел.",
    ar: "نعم +١٠€/شخص"
  },
  "wizard.transferChoose": {
    en: "Please choose a transfer option",
    tr: "Lütfen transfer seçeneğini belirleyin",
    de: "Bitte wählen Sie eine Transferoption",
    es: "Por favor selecciona una opción de traslado",
    ru: "Пожалуйста, выберите вариант трансфера",
    ar: "يرجى اختيار خيار النقل"
  },
  "wizard.transferDesc": {
    en: "Pickup & drop-off from your hotel",
    tr: "Otelinizden alım ve bırakım",
    de: "Abholung & Rückfahrt von Ihrem Hotel",
    es: "Recogida y regreso desde su hotel",
    ru: "Встреча и доставка от вашего отеля",
    ar: "التوصيل من وإلى فندقك"
  },
  "wizard.romanticLabel": {
    en: "Romantic Table",
    tr: "Romantik Masa",
    de: "Romantischer Tisch",
    es: "Mesa romántica",
    ru: "Романтический столик",
    ar: "طاولة رومانسية"
  },
  "wizard.romanticYes": {
    en: "Yes +€15",
    tr: "Evet +€15",
    de: "Ja +15 €",
    es: "Sí +15 €",
    ru: "Да +15 €",
    ar: "نعم +١٥€"
  },
  "wizard.romanticDesc": {
    en: "Candles, flowers & special setup",
    tr: "Mumlar, çiçekler ve özel düzenleme",
    de: "Kerzen, Blumen & besondere Dekoration",
    es: "Velas, flores y decoración especial",
    ru: "Свечи, цветы и особое оформление",
    ar: "شموع وزهور وإعداد خاص"
  },
  "wizard.summaryTitle": {
    en: "Booking Summary",
    tr: "Rezervasyon Özeti",
    de: "Buchungsübersicht",
    es: "Resumen de la reserva",
    ru: "Сводка бронирования",
    ar: "ملخص الحجز"
  },
  "wizard.checkAvail": {
    en: "Check Availability",
    tr: "Müsaitlik Kontrolü",
    de: "Verfügbarkeit prüfen",
    es: "Consultar disponibilidad",
    ru: "Проверить наличие",
    ar: "تحقق من التوفر"
  },
  "wizard.confirmMsg": {
    en: "We'll confirm instantly",
    tr: "Anında onay vereceğiz",
    de: "Wir bestätigen sofort",
    es: "Confirmaremos al instante",
    ru: "Подтвердим мгновенно",
    ar: "سنؤكد فوراً"
  },
  "wizard.trust1": {
    en: "\u2713 Free cancellation 2hrs before",
    tr: "\u2713 2 saat öncesine kadar ücretsiz iptal",
    de: "\u2713 Kostenlose Stornierung bis 2 Std. vorher",
    es: "\u2713 Cancelación gratuita hasta 2 h antes",
    ru: "\u2713 Бесплатная отмена за 2 часа",
    ar: "\u2713 إلغاء مجاني قبل ساعتين"
  },
  "wizard.trust2": {
    en: "\u2713 No prepayment required",
    tr: "\u2713 Ön ödeme gerekmiyor",
    de: "\u2713 Keine Vorauszahlung nötig",
    es: "\u2713 Sin pago anticipado",
    ru: "\u2713 Предоплата не требуется",
    ar: "\u2713 لا يلزم دفع مسبق"
  },
  "wizard.trust3": {
    en: "\u2713 Pay on the boat",
    tr: "\u2713 Teknede ödeyin",
    de: "\u2713 Bezahlung an Bord",
    es: "\u2713 Pague en el barco",
    ru: "\u2713 Оплата на борту",
    ar: "\u2713 ادفع على متن القارب"
  },

  // ========== WIZARD — NEW KEYS ==========
  "wizard.drinkNote": {
    en: "Choose a drink option for each adult guest",
    tr: "Her yetişkin misafir için bir içecek seçeneği belirleyin",
    de: "Wählen Sie eine Getränkeoption für jeden erwachsenen Gast",
    es: "Elija una opción de bebida para cada adulto",
    ru: "Выберите вариант напитков для каждого взрослого гостя",
    ar: "اختر خيار مشروب لكل ضيف بالغ"
  },
  "wizard.drinkWarning": {
    en: "Please assign drinks for all adults before continuing",
    tr: "Devam etmeden önce tüm yetişkinlere içecek atayın",
    de: "Bitte weisen Sie allen Erwachsenen Getränke zu, bevor Sie fortfahren",
    es: "Asigne bebidas a todos los adultos antes de continuar",
    ru: "Назначьте напитки всем взрослым перед продолжением",
    ar: "يرجى تحديد المشروبات لجميع البالغين قبل المتابعة"
  },
  "wizard.transferWarning": {
    en: "Please choose a transfer option before continuing",
    tr: "Devam etmeden önce transfer seçeneğini belirleyin",
    de: "Bitte wählen Sie eine Transferoption, bevor Sie fortfahren",
    es: "Seleccione una opción de traslado antes de continuar",
    ru: "Выберите вариант трансфера перед продолжением",
    ar: "يرجى اختيار خيار النقل قبل المتابعة"
  },
  "wizard.packageWarning": {
    en: "Please choose a package before continuing",
    tr: "Devam etmeden önce paketi seçin",
    de: "Bitte wählen Sie ein Paket, bevor Sie fortfahren",
    es: "Seleccione un paquete antes de continuar",
    ru: "Выберите пакет перед продолжением",
    ar: "يرجى اختيار باقة قبل المتابعة"
  },
  "wizard.packageChoose": {
    en: "Please choose a package",
    tr: "Lütfen paketi seçin",
    de: "Bitte wählen Sie ein Paket",
    es: "Por favor seleccione un paquete",
    ru: "Пожалуйста, выберите пакет",
    ar: "يرجى اختيار باقة"
  },
  "wizard.adultsWarning": {
    en: "Please enter at least one adult before continuing",
    tr: "Devam etmeden önce en az bir yetişkin seçin",
    de: "Bitte wählen Sie mindestens einen Erwachsenen, bevor Sie fortfahren",
    es: "Seleccione al menos un adulto antes de continuar",
    ru: "Укажите хотя бы одного взрослого перед продолжением",
    ar: "يرجى إدخال بالغ واحد على الأقل قبل المتابعة"
  },
  "wizard.adultsChoose": {
    en: "Please enter at least one adult",
    tr: "Lütfen en az bir yetişkin seçin",
    de: "Bitte wählen Sie mindestens einen Erwachsenen",
    es: "Por favor seleccione al menos un adulto",
    ru: "Пожалуйста, укажите хотя бы одного взрослого",
    ar: "يرجى إدخال بالغ واحد على الأقل"
  },
  "wizard.childAgeWarning": {
    en: "Please select age for each child before continuing",
    tr: "Devam etmeden önce her çocuk için yaş seçin",
    de: "Bitte wählen Sie für jedes Kind ein Alter, bevor Sie fortfahren",
    es: "Seleccione la edad de cada niño antes de continuar",
    ru: "Выберите возраст для каждого ребёнка перед продолжением",
    ar: "يرجى اختيار عمر لكل طفل قبل المتابعة"
  },
  "wizard.childAgeChoose": {
    en: "Please select age for each child",
    tr: "Lütfen her çocuk için yaş seçin",
    de: "Bitte wählen Sie für jedes Kind ein Alter",
    es: "Seleccione la edad de cada niño",
    ru: "Выберите возраст для каждого ребёнка",
    ar: "يرجى اختيار عمر لكل طفل"
  },
  "wizard.selectAge": {
    en: "Select age",
    tr: "Yaş seçin",
    de: "Alter wählen",
    es: "Elegir edad",
    ru: "Выберите возраст",
    ar: "اختر العمر"
  },
  "wizard.viewPackages": {
    en: "Click to review packages",
    tr: "Paketleri incelemek için tıklayın",
    de: "Pakete ansehen",
    es: "Ver detalles de los paquetes",
    ru: "Посмотреть пакеты",
    ar: "اضغط لمعاينة الباقات"
  },
  "wizard.glass2Label": {
    en: "2 Glasses of Alcohol",
    tr: "2 Kadeh Alkol",
    de: "2 Gläser Alkohol",
    es: "2 copas de alcohol",
    ru: "2 бокала алкоголя",
    ar: "كأسان من الكحول"
  },
  "wizard.glass2Note": {
    en: "+€15/person · Wine, beer, rakı, vodka, or gin",
    tr: "+€15/kişi · Şarap, bira, rakı, vodka veya cin",
    de: "+15 €/Person · Wein, Bier, Rakı, Wodka oder Gin",
    es: "+15 €/persona · Vino, cerveza, rakı, vodka o ginebra",
    ru: "+15 €/чел. · Вино, пиво, ракы, водка или джин",
    ar: "+١٥€/شخص · نبيذ أو بيرة أو عرق أو فودكا أو جن"
  },
  "wizard.unlimitedLabel": {
    en: "Unlimited Alcohol",
    tr: "Sınırsız Alkol",
    de: "Unbegrenzter Alkohol",
    es: "Alcohol ilimitado",
    ru: "Безлимитный алкоголь",
    ar: "كحول غير محدود"
  },
  "wizard.unlimitedNote": {
    en: "+€30/person · Wine, beer, rakı, vodka, gin all night",
    tr: "+€30/kişi · Gece boyunca şarap, bira, rakı, vodka, cin",
    de: "+30 €/Person · Wein, Bier, Rakı, Wodka, Gin die ganze Nacht",
    es: "+30 €/persona · Vino, cerveza, rakı, vodka, ginebra toda la noche",
    ru: "+30 €/чел. · Вино, пиво, ракы, водка, джин всю ночь",
    ar: "+٣٠€/شخص · نبيذ وبيرة وعرق وفودكا وجن طوال الليل"
  },
  "wizard.softNote": {
    en: "Included free",
    tr: "Ücretsiz dahil",
    de: "Kostenlos inklusive",
    es: "Incluido gratis",
    ru: "Включено бесплатно",
    ar: "مشمول مجانًا"
  },
  "wizard.drinkComplete": {
    en: "Drink selection complete",
    tr: "İçecek seçimi tamamlandı",
    de: "Getränkeauswahl abgeschlossen",
    es: "Selección de bebidas completa",
    ru: "Выбор напитков завершён",
    ar: "تم اختيار المشروبات"
  },
  "wizard.drinkRemaining": {
    en: "Please select drinks for all guests",
    tr: "Tüm misafirler için içecek seçin",
    de: "Bitte wählen Sie Getränke für alle Gäste",
    es: "Seleccione bebidas para todos los huéspedes",
    ru: "Выберите напитки для всех гостей",
    ar: "يرجى اختيار المشروبات لجميع الضيوف"
  },

  // ========== WIZARD — STEP 3 (Reservation Details) ==========
  "wizard.reservationDetails": {
    en: "Reservation Details",
    tr: "Rezervasyon Bilgileri",
    de: "Reservierungsdetails",
    es: "Detalles de la reserva",
    ru: "Данные бронирования",
    ar: "تفاصيل الحجز"
  },
  "wizard.guestName": {
    en: "Guest Name",
    tr: "Misafir Adı",
    de: "Gastname",
    es: "Nombre del huésped",
    ru: "Имя гостя",
    ar: "اسم الضيف"
  },
  "wizard.namePlaceholder": {
    en: "Full name",
    tr: "Ad Soyad",
    de: "Vollständiger Name",
    es: "Nombre completo",
    ru: "Полное имя",
    ar: "الاسم الكامل"
  },
  "wizard.phone": {
    en: "Phone Number",
    tr: "Telefon Numarası",
    de: "Telefonnummer",
    es: "Número de teléfono",
    ru: "Номер телефона",
    ar: "رقم الهاتف"
  },
  "wizard.phonePlaceholder": {
    en: "+XX XXX XXX XXXX",
    tr: "+XX XXX XXX XXXX",
    de: "+XX XXX XXX XXXX",
    es: "+XX XXX XXX XXXX",
    ru: "+XX XXX XXX XXXX",
    ar: "+XX XXX XXX XXXX"
  },
  "wizard.stepPackage": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة"
  },
  "wizard.stepExtras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Допы", ar: "إضافات"
  },
  "wizard.stepInfo": {
    en: "Info", tr: "Bilgi", de: "Info", es: "Info", ru: "Инфо", ar: "معلومات"
  },
  "wizard.stepTicket": {
    en: "Ticket", tr: "Bilet", de: "Ticket", es: "Billete", ru: "Билет", ar: "تذكرة"
  },
  "wizard.enterName": {
    en: "Please enter your name", tr: "Lütfen adınızı girin", de: "Bitte geben Sie Ihren Namen ein", es: "Por favor ingrese su nombre",
    ru: "Пожалуйста, введите ваше имя", ar: "يرجى إدخال اسمك"
  },
  "wizard.invalidName": {
    en: "Please enter a valid name", tr: "Lütfen geçerli bir isim girin", de: "Bitte geben Sie einen gültigen Namen ein", es: "Por favor ingrese un nombre válido",
    ru: "Пожалуйста, введите действительное имя", ar: "يرجى إدخال اسم صحيح"
  },
  "wizard.enterPhone": {
    en: "Please enter your phone number", tr: "Lütfen telefon numaranızı girin", de: "Bitte geben Sie Ihre Telefonnummer ein", es: "Por favor ingrese su número de teléfono",
    ru: "Пожалуйста, введите номер телефона", ar: "يرجى إدخال رقم هاتفك"
  },
  "wizard.invalidPhone": {
    en: "Please enter a valid phone number", tr: "Lütfen geçerli bir telefon numarası girin", de: "Bitte geben Sie eine gültige Telefonnummer ein", es: "Por favor ingrese un número de teléfono válido",
    ru: "Пожалуйста, введите действительный номер телефона", ar: "يرجى إدخال رقم هاتف صحيح"
  },
  "wizard.selectContact": {
    en: "Please select a contact method", tr: "Lütfen iletişim tercihinizi seçin", de: "Bitte wählen Sie eine Kontaktmethode", es: "Por favor seleccione un método de contacto",
    ru: "Пожалуйста, выберите способ связи", ar: "يرجى اختيار طريقة الاتصال"
  },
  "wizard.contactNote": {
    en: "We will reach you through this channel", tr: "Sizinle bu kanal üzerinden iletişime geçeceğiz", de: "Wir kontaktieren Sie über diesen Kanal", es: "Le contactaremos a través de este canal",
    ru: "Мы свяжемся с вами через этот канал", ar: "سنتواصل معك عبر هذه القناة"
  },
  "wizard.enterAddress": {
    en: "Please enter your pickup address", tr: "Lütfen alım adresinizi girin", de: "Bitte geben Sie Ihre Abholadresse ein", es: "Por favor ingrese su dirección de recogida",
    ru: "Пожалуйста, введите адрес подачи", ar: "يرجى إدخال عنوان الاستلام"
  },
  "wizard.phoneNote": {
    en: "We will contact you via this number for booking confirmation",
    tr: "Rezervasyon onayı için bu numara üzerinden sizinle iletişime geçeceğiz",
    de: "Wir werden Sie über diese Nummer für die Buchungsbestätigung kontaktieren",
    es: "Le contactaremos a este número para confirmar la reserva",
    ru: "Мы свяжемся с вами по этому номеру для подтверждения бронирования",
    ar: "سنتواصل معك عبر هذا الرقم لتأكيد الحجز"
  },
  "wizard.pickupAddress": {
    en: "Pickup Address",
    tr: "Alım Adresi",
    de: "Abholadresse",
    es: "Dirección de recogida",
    ru: "Адрес подачи",
    ar: "عنوان الاستلام"
  },
  "wizard.addressPlaceholder": {
    en: "Type hotel name and pick from list",
    tr: "Otel adını yazın ve listeden seçin",
    de: "Hotelname eingeben und aus Liste wählen",
    es: "Escribe el hotel y elige de la lista",
    ru: "Введите название и выберите из списка",
    ar: "اكتب اسم الفندق واختر من القائمة"
  },
  "wizard.pickFromList": {
    en: "Please pick your address from the dropdown list",
    tr: "Lütfen adresinizi açılan listeden seçin",
    de: "Bitte wählen Sie Ihre Adresse aus der Liste",
    es: "Por favor, seleccione su dirección de la lista desplegable",
    ru: "Пожалуйста, выберите ваш адрес из списка",
    ar: "يرجى اختيار عنوانك من القائمة المنسدلة"
  },
  "wizard.continueWithoutTransfer": {
    en: "Continue without transfer · I'll come myself",
    tr: "Transfer olmadan devam et · Kendim geleceğim",
    de: "Ohne Transfer fortfahren · Ich komme selbst",
    es: "Continuar sin traslado · Iré por mi cuenta",
    ru: "Продолжить без трансфера · Я приеду сам",
    ar: "المتابعة بدون نقل · سآتي بنفسي"
  },
  "wizard.useButtonAbove": {
    en: "Tap the button above to continue without transfer",
    tr: "Transfer olmadan devam etmek için yukarıdaki butona basın",
    de: "Tippen Sie oben auf die Schaltfläche, um ohne Transfer fortzufahren",
    es: "Pulse el botón superior para continuar sin traslado",
    ru: "Нажмите кнопку выше, чтобы продолжить без трансфера",
    ar: "اضغط على الزر أعلاه للمتابعة بدون نقل"
  },
  "wizard.roomNumber": {
    en: "Room Number",
    tr: "Oda Numarası",
    de: "Zimmernummer",
    es: "Número de habitación",
    ru: "Номер комнаты",
    ar: "رقم الغرفة"
  },
  "wizard.roomNumberPlaceholder": {
    en: "e.g. 507",
    tr: "örn. 507",
    de: "z.B. 507",
    es: "ej. 507",
    ru: "напр. 507",
    ar: "مثال: 507"
  },
  "wizard.roomNumberNote": {
    en: "So our driver can find you easily. If you don't know yet, you can leave it empty — driver will ask at the lobby.",
    tr: "Şoförümüzün sizi kolay bulabilmesi için. Henüz bilmiyorsanız boş bırakabilirsiniz — şoför lobide ismen soracak.",
    de: "Damit unser Fahrer Sie leicht findet. Wenn Sie noch nicht wissen, können Sie es leer lassen — der Fahrer fragt an der Rezeption.",
    es: "Para que nuestro chofer le encuentre fácilmente. Si aún no lo sabe, puede dejarlo vacío — el chofer preguntará en el lobby.",
    ru: "Чтобы водитель легко вас нашёл. Если ещё не знаете, можете оставить пустым — водитель спросит в лобби.",
    ar: "حتى يتمكن سائقنا من إيجادك بسهولة. إذا لم تعرف بعد، يمكنك تركه فارغًا — سيسأل السائق في البهو."
  },
  "wizard.contactPref": {
    en: "Preferred Contact",
    tr: "İletişim Tercihi",
    de: "Bevorzugter Kontakt",
    es: "Contacto preferido",
    ru: "Предпочтительный контакт",
    ar: "وسيلة التواصل المفضلة"
  },
  "wizard.contactWarning": {
    en: "Please fill in your name and phone number",
    tr: "Lütfen adınızı ve telefon numaranızı girin",
    de: "Bitte geben Sie Ihren Namen und Ihre Telefonnummer ein",
    es: "Por favor, introduzca su nombre y número de teléfono",
    ru: "Пожалуйста, укажите ваше имя и номер телефона",
    ar: "يرجى ملء الاسم ورقم الهاتف"
  },
  "wizard.reviewBooking": {
    en: "Please review your booking",
    tr: "Lütfen biletinizi kontrol edin",
    de: "Bitte überprüfen Sie Ihre Buchung",
    es: "Por favor, revise su reserva",
    ru: "Пожалуйста, проверьте ваше бронирование",
    ar: "يرجى مراجعة حجزك"
  },
  "ticket.guestName": {
    en: "Guest Name", tr: "Misafir Adı", de: "Gastname", es: "Nombre del Huésped",
    ru: "Имя гостя", ar: "اسم الضيف"
  },
  "ticket.phone": {
    en: "Phone", tr: "Telefon", de: "Telefon", es: "Teléfono",
    ru: "Телефон", ar: "الهاتف"
  },
  "ticket.pickupAddress": {
    en: "Pickup Address", tr: "Alım Adresi", de: "Abholadresse", es: "Dirección de Recogida",
    ru: "Адрес подачи", ar: "عنوان الاستلام"
  },

  // ========== TICKET / BOARDING PASS ==========
  "ticket.boardingPass": {
    en: "Boarding Pass", tr: "Biniş Kartı", de: "Bordkarte", es: "Tarjeta de Embarque",
    ru: "Посадочный талон", ar: "بطاقة الصعود"
  },
  "ticket.date": {
    en: "Date", tr: "Tarih", de: "Datum", es: "Fecha",
    ru: "Дата", ar: "التاريخ"
  },
  "ticket.guests": {
    en: "Guests", tr: "Misafirler", de: "Gäste", es: "Huéspedes",
    ru: "Гости", ar: "الضيوف"
  },
  "ticket.drinks": {
    en: "Drinks", tr: "İçecekler", de: "Getränke", es: "Bebidas",
    ru: "Напитки", ar: "المشروبات"
  },
  "ticket.transfer": {
    en: "Transfer", tr: "Transfer", de: "Transfer", es: "Transfer",
    ru: "Трансфер", ar: "النقل"
  },
  "ticket.special": {
    en: "Special", tr: "Özel", de: "Besonderes", es: "Especial",
    ru: "Особое", ar: "خاص"
  },
  "ticket.romanticSetup": {
    en: "Romantic Table Setup", tr: "Romantik Masa Düzeni", de: "Romantischer Tisch", es: "Mesa Romántica",
    ru: "Романтическая сервировка", ar: "ترتيب طاولة رومانسية"
  },
  "ticket.meetingPoint": {
    en: "Meeting Point", tr: "Buluşma Noktası", de: "Treffpunkt", es: "Punto de Encuentro",
    ru: "Место встречи", ar: "نقطة الالتقاء"
  },
  "ticket.hotelPickup": {
    en: "Hotel Pickup", tr: "Otelden Alınma", de: "Hotelabholung", es: "Recogida en Hotel",
    ru: "Из отеля", ar: "الاستلام من الفندق"
  }
};
