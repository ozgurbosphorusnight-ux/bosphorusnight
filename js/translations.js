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
    en: "Book on WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen", es: "Reservar en WhatsApp", ru: "Забронировать в WhatsApp", ar: "احجز عبر واتساب"
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
    en: "View Cruises", tr: "Turları İncele", de: "Touren ansehen", es: "Ver cruceros",
    ru: "Смотреть круизы", ar: "عرض الرحلات"
  },
  "hero.departure": {
    en: "Departures from Kabataş & Eminönü · 20:45 – 23:30",
    tr: "Kalkış: Kabataş & Eminönü · 20:45 – 23:30",
    de: "Abfahrt ab Kabataş & Eminönü · 20:45 – 23:30",
    es: "Salidas desde Kabataş y Eminönü · 20:45 – 23:30",
    ru: "Отправление: Кабаташ и Эминёню · 20:45 – 23:30",
    ar: "المغادرة من كاباتاش وأمينونو · 20:45 – 23:30"
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
    en: "Dinner — 7 meze + main course + dessert", tr: "Yemek — 7 meze + ana yemek + tatlı",
    de: "Abendessen — 7 Meze + Hauptgericht + Dessert", es: "Cena — 7 meze + plato principal + postre",
    ru: "Ужин — 7 мезе + основное блюдо + десерт", ar: "عشاء — 7 مقبلات + طبق رئيسي + حلوى"
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
    en: "Children 0–3: Free · 3–5: 50% off · 5+: Full price · No prepayment required",
    tr: "Çocuklar 0–3: Ücretsiz · 3–5: %50 indirim · 5+: Tam fiyat · Ön ödeme gerekmez",
    de: "Kinder 0–3: Gratis · 3–5: 50% Rabatt · 5+: Vollpreis · Keine Vorauszahlung",
    es: "Niños 0–3: Gratis · 3–5: 50% dto. · 5+: Precio completo · Sin prepago",
    ru: "Дети 0–3: Бесплатно · 3–5: Скидка 50% · 5+: Полная цена · Без предоплаты",
    ar: "الأطفال 0-3: مجاناً · 3-5: خصم 50% · 5+: السعر الكامل · بدون دفع مسبق"
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
    en: "7 meze varieties, main course & dessert", tr: "7 çeşit meze, ana yemek & tatlı",
    de: "7 Meze-Sorten, Hauptgang & Dessert", es: "7 variedades de meze, plato principal y postre",
    ru: "7 видов мезе, основное блюдо и десерт", ar: "7 أنواع مقبلات، طبق رئيسي وحلوى"
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
    en: "Instant WhatsApp support anytime", tr: "Her an anlık WhatsApp desteği",
    de: "WhatsApp-Support rund um die Uhr", es: "Soporte instantáneo en WhatsApp en cualquier momento",
    ru: "Мгновенная поддержка в WhatsApp", ar: "دعم واتساب فوري في أي وقت"
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
    en: "Sail past the Maiden's Tower, Dolmabahçe Palace, Bosphorus Bridge, Beylerbeyi Palace, Ortaköy Mosque, and Rumeli Fortress. Departs from Kabataş at 20:45, returns at 23:30.",
    tr: "Kız Kulesi, Dolmabahçe Sarayı, Boğaz Köprüsü, Beylerbeyi Sarayı, Ortaköy Camii ve Rumeli Hisarı'nın önünden geçin. Kabataş'tan 20:45'te kalkar, 23:30'da döner.",
    de: "Vorbei am Leanderturm, Dolmabahçe-Palast, Bosporus-Brücke, Beylerbeyi-Palast, Ortaköy-Moschee und Rumeli-Festung. Abfahrt 20:45, Rückkehr 23:30.",
    es: "Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe, el Puente del Bósforo, el Palacio de Beylerbeyi, la Mezquita de Ortaköy y la Fortaleza de Rumeli. Sale a las 20:45, regresa a las 23:30.",
    ru: "Проплывите мимо Девичьей башни, дворца Долмабахче, Босфорского моста, дворца Бейлербейи, мечети Ортакёй и крепости Румели. Отправление в 20:45, возвращение в 23:30.",
    ar: "أبحر بجوار برج الفتاة، قصر دولمة بهجة، جسر البوسفور، قصر بيلربيي، مسجد أورتاكوي، وقلعة روملي. المغادرة 20:45، العودة 23:30."
  },
  "incl.dinner.detail": {
    en: "7 types of meze, choice of fish, chicken, or meatball main course, and dessert. Vegetarian menu available. VIP packages include mixed grill platter and premium meat options.",
    tr: "7 çeşit meze, balık/tavuk/köfte ana yemek seçeneği ve tatlı. Vejetaryen menü mevcuttur. VIP paketlerde karışık ızgara tabağı ve özel et seçenekleri dahildir.",
    de: "7 Meze-Sorten, Hauptgang nach Wahl (Fisch, Hähnchen oder Köfte) und Dessert. Vegetarisch möglich. VIP-Pakete mit Mixed Grill.",
    es: "7 tipos de meze, elección de pescado, pollo o albóndigas como plato principal y postre. Menú vegetariano disponible. Los paquetes VIP incluyen parrillada mixta.",
    ru: "7 видов мезе, выбор рыбы, курицы или котлет на горячее и десерт. Вегетарианское меню доступно. VIP-пакеты включают микс-гриль и премиум мясо.",
    ar: "7 أنواع مقبلات، اختيار سمك أو دجاج أو كفتة كطبق رئيسي وحلوى. قائمة نباتية متوفرة. باقات VIP تشمل مشاوي مشكلة."
  },
  "incl.entertainment.detail": {
    en: "Live singer performances, traditional Turkish night show with folk dances, belly dance, and DJ music. Entertainment runs until 21:00.",
    tr: "Canlı şarkıcı performansları, halk dansları ve oryantal dans ile geleneksel Türk gecesi şovu ve DJ müziği. Eğlence 21:00'e kadar devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstanz, Bauchtanz und DJ. Unterhaltung bis 21:00.",
    es: "Actuaciones de cantante en vivo, show nocturno turco tradicional con danzas folclóricas, danza del vientre y música DJ. Entretenimiento hasta las 21:00.",
    ru: "Живой певец, традиционное турецкое ночное шоу с народными танцами, танец живота и DJ-музыка. Развлечения до 21:00.",
    ar: "عروض مغني حي، عرض ليلة تركية تقليدية مع رقصات شعبية، رقص شرقي وموسيقى DJ. الترفيه يستمر حتى الساعة 21:00."
  },
  "incl.transfer.detail": {
    en: "Round-trip hotel pickup and drop-off available from Sultanahmet, Taksim, and Beyoğlu areas. Available as an add-on when booking. Mention your hotel location on WhatsApp.",
    tr: "Sultanahmet, Taksim ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu WhatsApp'tan belirtin.",
    de: "Hin- und Rücktransfer ab Sultanahmet, Taksim und Beyoğlu. Als Zusatz buchbar. Teilen Sie Ihr Hotel per WhatsApp mit.",
    es: "Recogida y devolución al hotel disponible desde Sultanahmet, Taksim y Beyoğlu. Disponible como complemento. Menciona la ubicación de tu hotel en WhatsApp.",
    ru: "Трансфер из/в отель доступен из районов Султанахмет, Таксим и Бейоглу. Доступен как дополнение при бронировании. Укажите расположение отеля в WhatsApp.",
    ar: "خدمة نقل ذهاب وعودة متاحة من مناطق السلطان أحمد وتقسيم وبيوغلو. متاحة كإضافة عند الحجز. اذكر موقع فندقك على واتساب."
  },
  "incl.support.detail": {
    en: "We're with you before, during, and after your cruise. Message or call us on WhatsApp anytime — we respond instantly, 7 days a week, 24 hours a day.",
    tr: "Turunuzun öncesinde, sırasında ve sonrasında yanınızdayız. WhatsApp'tan yazın veya arayın — 7/24 anında cevap veriyoruz.",
    de: "Wir sind vor, während und nach der Tour für Sie da. Schreiben oder rufen Sie uns auf WhatsApp an — wir antworten sofort, 7 Tage die Woche.",
    es: "Estamos contigo antes, durante y después de tu crucero. Escríbenos o llámanos en WhatsApp — respondemos al instante, los 7 días de la semana.",
    ru: "Мы с вами до, во время и после круиза. Пишите или звоните в WhatsApp — отвечаем мгновенно, 7 дней в неделю, 24 часа в сутки.",
    ar: "نحن معك قبل وأثناء وبعد رحلتك. راسلنا أو اتصل بنا على واتساب — نرد فورًا على مدار الساعة."
  },
  "incl.special.detail": {
    en: "Celebrating something special? We offer romantic table setup with candles & flowers (+€15) and birthday celebrations. Tell us on WhatsApp!",
    tr: "Özel bir gün mü kutluyorsunuz? Mum ve çiçeklerle romantik masa düzeni (+€15) ve doğum günü kutlamaları sunuyoruz. WhatsApp'tan bize yazın!",
    de: "Etwas Besonderes feiern? Romantik-Tisch mit Kerzen & Blumen (+€15) und Geburtstagsfeiern. Schreiben Sie uns per WhatsApp!",
    es: "¿Celebrando algo especial? Ofrecemos mesa romántica con velas y flores (+€15) y celebraciones de cumpleaños. ¡Escríbenos en WhatsApp!",
    ru: "Празднуете что-то особенное? Романтический стол со свечами и цветами (+€15) и празднование дня рождения. Напишите нам в WhatsApp!",
    ar: "تحتفل بمناسبة خاصة؟ نقدم طاولة رومانسية مع شموع وزهور (+€15)، واحتفالات أعياد الميلاد. أخبرنا على واتساب!"
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
    en: "\"An unforgettable night on the Bosphorus. The views were breathtaking and the dinner was amazing. Perfect for couples!\"",
    tr: "\"Boğaz'da unutulmaz bir gece. Manzara nefes kesiciydi ve yemek harikaydı. Çiftler için mükemmel!\"",
    de: "\"Unvergessliche Nacht am Bosporus. Die Aussicht war atemberaubend und das Essen fantastisch. Perfekt für Paare!\"",
    es: "\"Una noche inolvidable en el Bósforo. Las vistas eran impresionantes y la cena fue increíble. ¡Perfecto para parejas!\"",
    ru: "\"Незабываемая ночь на Босфоре. Виды захватывали дух, а ужин был потрясающим. Идеально для пар!\"",
    ar: "\"ليلة لا تُنسى على البوسفور. المناظر كانت خلابة والعشاء كان رائعاً. مثالي للأزواج!\""
  },
  "reviews.r1.info": {
    en: "Couple · United Kingdom", tr: "Çift · İngiltere", de: "Paar · Großbritannien",
    es: "Pareja · Reino Unido", ru: "Пара · Великобритания", ar: "زوجان · المملكة المتحدة"
  },
  "reviews.r2": {
    en: "\"We came as a group of 8 friends and had the best time! The Turkish night show was incredible. Will definitely recommend.\"",
    tr: "\"8 arkadaş olarak geldik ve harika vakit geçirdik! Türk gecesi şovu inanılmazdı. Kesinlikle tavsiye edeceğiz.\"",
    de: "\"Wir waren 8 Freunde und hatten die beste Zeit! Die Türkische Nacht war unglaublich. Absolut empfehlenswert.\"",
    es: "\"Vinimos como grupo de 8 amigos y la pasamos increíble. ¡El show de noche turca fue increíble!\"",
    ru: "\"Мы приехали группой из 8 друзей и отлично провели время! Турецкое шоу было невероятным.\"",
    ar: "\"جئنا كمجموعة من 8 أصدقاء وقضينا أفضل الأوقات! عرض الليلة التركية كان مذهلاً.\""
  },
  "reviews.r2.info": {
    en: "Group · Saudi Arabia", tr: "Grup · Suudi Arabistan", de: "Gruppe · Saudi-Arabien",
    es: "Grupo · Arabia Saudita", ru: "Группа · Саудовская Аравия", ar: "مجموعة · السعودية"
  },
  "reviews.r3": {
    en: "\"Our kids loved it! The team was so helpful and the food was delicious. Great family experience on the Bosphorus.\"",
    tr: "\"Çocuklarımız bayıldı! Ekip çok yardımseverdi ve yemekler lezzetliydi. Boğaz'da harika bir aile deneyimi.\"",
    de: "\"Unsere Kinder waren begeistert! Das Team war sehr hilfsbereit und das Essen köstlich. Tolles Familienerlebnis.\"",
    es: "\"¡A nuestros hijos les encantó! El equipo fue muy servicial y la comida estaba deliciosa.\"",
    ru: "\"Нашим детям очень понравилось! Команда была очень внимательной, а еда вкусной.\"",
    ar: "\"أطفالنا أحبوها! الفريق كان متعاوناً جداً والطعام كان لذيذاً. تجربة عائلية رائعة.\""
  },
  "reviews.r3.info": {
    en: "Family · Romania", tr: "Aile · Romanya", de: "Familie · Rumänien",
    es: "Familia · Rumanía", ru: "Семья · Румыния", ar: "عائلة · رومانيا"
  },
  "reviews.r4": {
    en: "\"Traveling solo and this was the highlight of my Istanbul trip. The booking was so easy — just WhatsApp and done! Amazing night.\"",
    tr: "\"Solo seyahat ediyordum ve bu İstanbul gezimin en güzel anıydı. Rezervasyon çok kolaydı — sadece WhatsApp! Harika bir gece.\"",
    de: "\"Als Solo-Reisender das Highlight meiner Istanbul-Reise. Buchung war super einfach — nur WhatsApp! Tolle Nacht.\"",
    es: "\"Viajando solo y esto fue lo mejor de mi viaje a Estambul. Reservar fue muy fácil — ¡solo WhatsApp!\"",
    ru: "\"Путешествуя соло, это стало лучшим моментом моей поездки в Стамбул. Бронирование было таким простым — просто WhatsApp!\"",
    ar: "\"كنت أسافر بمفردي وكانت هذه أبرز لحظات رحلتي إلى إسطنبول. الحجز كان سهلاً جداً — فقط واتساب!\""
  },
  "reviews.r4.info": {
    en: "Solo · Germany", tr: "Solo · Almanya", de: "Solo · Deutschland",
    es: "Solo · Alemania", ru: "Соло · Германия", ar: "فردي · ألمانيا"
  },
  "reviews.r5": {
    en: "\"I proposed to my girlfriend on the boat and the team helped with everything — flowers, decorations, the perfect table. She said YES!\"",
    tr: "\"Teknede kız arkadaşıma evlilik teklifi ettim ve ekip her konuda yardımcı oldu — çiçekler, dekorasyon, mükemmel masa. EVET dedi!\"",
    de: "\"Ich habe meiner Freundin an Bord einen Antrag gemacht und das Team half bei allem — Blumen, Deko, perfekter Tisch. Sie sagte JA!\"",
    es: "\"Le propuse matrimonio a mi novia en el barco y el equipo ayudó con todo. ¡Dijo que SÍ!\"",
    ru: "\"Я сделал предложение своей девушке на борту, и команда помогла со всем — цветы, украшения, идеальный столик. Она сказала ДА!\"",
    ar: "\"عرضت الزواج على صديقتي على القارب وساعدني الفريق في كل شيء — الزهور والديكور والطاولة المثالية. قالت نعم!\""
  },
  "reviews.r5.info": {
    en: "Couple · United States", tr: "Çift · Amerika", de: "Paar · USA",
    es: "Pareja · Estados Unidos", ru: "Пара · США", ar: "زوجان · الولايات المتحدة"
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
    en: "Just Call or Write on WhatsApp. We Handle the Rest.",
    tr: "WhatsApp'tan yazın veya arayın. Gerisini biz halledelim.",
    de: "Schreiben Sie uns auf WhatsApp. Wir erledigen den Rest.",
    es: "Escríbanos por WhatsApp. Nosotros nos encargamos del resto.",
    ru: "Напишите нам в WhatsApp. Мы позаботимся обо всём.",
    ar: "اكتب لنا على واتساب. نحن نتولى الباقي."
  },
  "how.s1.title": {
    en: "Choose Your Cruise", tr: "Turunuzu Seçin", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите круиз", ar: "اختر رحلتك"
  },
  "how.s1.desc": {
    en: "Pick your preferred boat, date, and package from our curated selection.",
    tr: "Seçilmiş koleksiyonumuzdan tercih ettiğiniz tekne, tarih ve paketi seçin.",
    de: "Wählen Sie Boot, Datum und Paket aus unserem Angebot.",
    es: "Elige tu barco, fecha y paquete preferido de nuestra selección.",
    ru: "Выберите лодку, дату и пакет из нашей подборки.",
    ar: "اختر القارب والتاريخ والباقة المفضلة لديك من مجموعتنا المختارة."
  },
  "how.s2.title": {
    en: "Write, Call, or We'll Call You", tr: "Yazın, Arayın veya Biz Sizi Arayalım", de: "Schreiben, anrufen oder wir rufen Sie an",
    es: "Escríbenos, Llámanos o Te Llamamos", ru: "Напишите, Позвоните или Мы Вам Перезвоним", ar: "اكتب، اتصل، أو سنتصل بك"
  },
  "how.s2.desc": {
    en: "Message us on WhatsApp, give us a call, or leave your number — we'll get back to you instantly.",
    tr: "WhatsApp'tan yazın, bizi arayın veya numaranızı bırakın — size anında dönelim.",
    de: "Per WhatsApp schreiben, anrufen oder Nummer hinterlassen — wir melden uns sofort.",
    es: "Escríbenos por WhatsApp, llámanos o déjanos tu número — te contactaremos al instante.",
    ru: "Напишите в WhatsApp, позвоните или оставьте номер — мы перезвоним мгновенно.",
    ar: "راسلنا على واتساب، اتصل بنا، أو اترك رقمك — سنعاود الاتصال بك فورًا."
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
    en: "Our team can check same-day availability for you in seconds. Message us on WhatsApp — we respond instantly, 24/7.",
    tr: "Ekibimiz aynı gün müsaitliği saniyeler içinde kontrol edebilir. WhatsApp'tan yazın — 7/24 anında cevap veriyoruz.",
    de: "Unser Team prüft die Verfügbarkeit in Sekunden. Schreiben Sie uns per WhatsApp — wir antworten sofort, 24/7.",
    es: "Nuestro equipo puede verificar la disponibilidad del mismo día en segundos. Escríbenos en WhatsApp — respondemos al instante, 24/7.",
    ru: "Наша команда проверит наличие на сегодня за секунды. Напишите нам в WhatsApp — мы отвечаем мгновенно, 24/7.",
    ar: "يمكن لفريقنا التحقق من توفر اليوم نفسه في ثوانٍ. راسلنا عبر واتساب — نستجيب فوراً على مدار الساعة."
  },
  "last.cta": {
    en: "Ask for Tonight's Availability", tr: "Bu Gecenin Müsaitliğini Sor",
    de: "Verfügbarkeit für heute anfragen", es: "Preguntar por disponibilidad esta noche",
    ru: "Узнать о наличии на сегодня", ar: "اسأل عن توفر الليلة"
  },
  "last.summary": {
    en: "20:45 · 3 hours · Dinner & Live Show · Pay on the boat",
    tr: "20:45 · 3 saat · Yemek & Canlı Şov · Teknede ödeme",
    de: "20:45 · 3 Stunden · Abendessen & Live-Show · Zahlung an Bord",
    es: "20:45 · 3 horas · Cena y Show en Vivo · Pago en el barco",
    ru: "20:45 · 3 часа · Ужин и живое шоу · Оплата на борту",
    ar: "20:45 · 3 ساعات · عشاء وعرض حي · الدفع على القارب"
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
    en: "We help you choose the perfect package, answer all your questions, and confirm your reservation — all on WhatsApp.",
    tr: "Mükemmel paketi seçmenize yardım eder, tüm sorularınızı cevaplar ve rezervasyonunuzu onaylarız — hepsi WhatsApp'tan.",
    de: "Wir helfen beim perfekten Paket, beantworten alle Fragen und bestätigen Ihre Buchung — alles per WhatsApp.",
    es: "Te ayudamos a elegir el paquete perfecto, respondemos todas tus preguntas y confirmamos tu reserva — todo por WhatsApp.",
    ru: "Мы поможем выбрать идеальный пакет, ответим на все вопросы и подтвердим бронирование — всё через WhatsApp.",
    ar: "نساعدك في اختيار الباقة المثالية ونجيب على جميع أسئلتك ونؤكد حجزك — كل ذلك عبر واتساب."
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
    en: "We offer three Bosphorus cruise experiences: <strong>Daytime Cruise</strong> (12:00, 1.5 hours — sightseeing with panoramic views), <strong>Sunset Cruise</strong> (17:30, 3 hours — dinner with golden hour views and live shows), and <strong>Dinner Cruise</strong> (20:45, 3 hours — full dinner, Turkish night show, belly dance, DJ and stunning night views). All cruises depart from Kabataş Pier.",
    tr: "Üç farklı Boğaz turu deneyimi sunuyoruz: <strong>Gündüz Turu</strong> (12:00, 1.5 saat — panoramik manzara gezisi), <strong>Günbatımı Turu</strong> (17:30, 3 saat — yemek, gün batımı manzarası ve canlı şovlar), <strong>Akşam Turu</strong> (20:45, 3 saat — akşam yemeği, Türk gecesi şovu, oryantal dans, DJ ve gece manzarası). Tüm turlar Kabataş İskelesi'nden kalkar.",
    de: "Drei Bosporus-Touren: <strong>Tagestour</strong> (12:00, 1,5 Std. — Sightseeing mit Panoramablick), <strong>Sonnenuntergangstour</strong> (17:30, 3 Std. — Dinner bei Sonnenuntergang mit Live-Show), <strong>Abendtour</strong> (20:45, 3 Std. — Dinner, Türkische Nacht, Bauchtanz, DJ und Nachtblick). Alle Touren ab Kabataş-Pier.",
    es: "Ofrecemos tres experiencias de crucero por el Bósforo: <strong>Crucero Diurno</strong> (12:00, 1,5 horas — turismo con vistas panorámicas), <strong>Crucero al Atardecer</strong> (17:30, 3 horas — cena con vistas doradas y shows en vivo), <strong>Crucero con Cena</strong> (20:45, 3 horas — cena completa, noche turca, danza del vientre, DJ y vistas nocturnas). Todos los cruceros salen del muelle de Kabataş.",
    ru: "Мы предлагаем три круиза по Босфору: <strong>Дневной круиз</strong> (12:00, 1,5 часа — обзорная экскурсия с панорамными видами), <strong>Круиз на закате</strong> (17:30, 3 часа — ужин с видами заката и живыми шоу), <strong>Ужин-круиз</strong> (20:45, 3 часа — ужин, турецкая ночь, танец живота, DJ и ночные виды). Все круизы отправляются с причала Кабаташ.",
    ar: "نقدم ثلاث تجارب رحلات بحرية في البوسفور: <strong>الرحلة النهارية</strong> (12:00، 1.5 ساعة — جولة سياحية مع إطلالات بانورامية)، <strong>رحلة الغروب</strong> (17:30، 3 ساعات — عشاء مع مناظر الساعة الذهبية وعروض حية)، <strong>رحلة العشاء</strong> (20:45، 3 ساعات — عشاء كامل، ليلة تركية، رقص شرقي، DJ ومناظر ليلية خلابة). جميع الرحلات تنطلق من رصيف كاباتاش."
  },
  "faq.q1": { en: "What's on the dinner menu?", tr: "Yemek menüsünde neler var?", de: "Was gibt es zum Abendessen?", es: "¿Qué hay en el menú de la cena?", ru: "Что в меню ужина?", ar: "ماذا يوجد في قائمة العشاء؟" },
  "faq.a1": {
    en: "All packages include a full dinner with 7 varieties of Turkish meze, your choice of main course (fish, chicken, or meatball), and dessert. VIP packages feature a premium mixed grill platter with selected cuts. Vegetarian options are available on request.",
    tr: "Tüm paketler 7 çeşit Türk meze, ana yemek seçenekleri (balık, tavuk veya köfte) ve tatlı içeren tam bir yemek içerir. VIP paketlerde seçkin etlerle premium karışık ızgara tabağı sunulur. İstek üzerine vejetaryen seçenekler mevcuttur.",
    de: "Alle Pakete enthalten ein Abendessen mit 7 Meze-Sorten, Hauptgang nach Wahl (Fisch, Hähnchen oder Köfte) und Dessert. VIP-Pakete mit Premium-Mixed-Grill.",
    es: "Todos los paquetes incluyen una cena completa con 7 variedades de meze turco, tu elección de plato principal (pescado, pollo o albóndigas) y postre. Los paquetes VIP incluyen una parrillada mixta premium.",
    ru: "Все пакеты включают полный ужин с 7 видами турецких мезе, основное блюдо на выбор (рыба, курица или котлеты) и десерт. VIP-пакеты включают премиальное ассорти гриль.",
    ar: "تشمل جميع الباقات عشاءً كاملاً مع 7 أنواع من المقبلات التركية، واختيارك للطبق الرئيسي (سمك أو دجاج أو كفتة)، وحلوى. تتميز باقات VIP بطبق مشويات فاخر."
  },
  "faq.q2": { en: "Are alcoholic drinks included?", tr: "Alkollü içecekler dahil mi?", de: "Sind alkoholische Getränke inklusive?", es: "¿Están incluidas las bebidas alcohólicas?", ru: "Включены ли алкогольные напитки?", ar: "هل المشروبات الكحولية مشمولة؟" },
  "faq.a2": {
    en: "All packages include soft drinks. You can add an unlimited alcohol package for just +€30 per person. This can be arranged during booking on WhatsApp.",
    tr: "Tüm paketlerde alkolsüz içecekler dahildir. Kişi başı sadece +€10 ile sınırsız alkol paketi ekleyebilirsiniz. Bu, WhatsApp üzerinden rezervasyon sırasında ayarlanabilir.",
    de: "Alle Pakete enthalten Softdrinks. Unbegrenztes Alkoholpaket für nur +€30 pro Person buchbar per WhatsApp.",
    es: "Todos los paquetes incluyen bebidas sin alcohol. Puedes agregar un paquete de alcohol ilimitado por solo +€30 por persona.",
    ru: "Все пакеты включают безалкогольные напитки. Вы можете добавить безлимитный пакет алкоголя всего за +€10 с человека.",
    ar: "جميع الباقات تشمل المشروبات الغازية. يمكنك إضافة باقة مشروبات كحولية غير محدودة مقابل +€10 فقط للشخص."
  },
  "faq.q3": { en: "Where does the cruise depart and return?", tr: "Tur nereden kalkıp nereye dönüyor?", de: "Wo ist Abfahrt und Rückkehr?", es: "¿De dónde sale y regresa el crucero?", ru: "Откуда отправляется и возвращается круиз?", ar: "من أين تغادر وتعود الرحلة؟" },
  "faq.a3": {
    en: "Cruises depart from Kabataş pier at 20:45 and return to the same location at 23:30 (3-hour cruise). The exact meeting point will be shared on WhatsApp after booking.",
    tr: "Turlar Kabataş iskelesinden saat 20:45'te kalkar ve aynı noktaya 23:30'da döner (3 saatlik tur). Tam buluşma noktası rezervasyon sonrası WhatsApp'tan paylaşılır.",
    de: "Abfahrt ab Kabataş-Pier um 20:45, Rückkehr um 23:30 (3 Stunden). Den genauen Treffpunkt erhalten Sie nach Buchung per WhatsApp.",
    es: "Los cruceros salen del muelle de Kabataş a las 20:45 y regresan al mismo lugar a las 23:30 (crucero de 3 horas). El punto de encuentro exacto se compartirá por WhatsApp.",
    ru: "Круизы отправляются от причала Кабаташ в 20:45 и возвращаются в 23:30 (3 часа). Точное место встречи будет отправлено в WhatsApp после бронирования.",
    ar: "تغادر الرحلات من رصيف كاباتاش الساعة 20:45 وتعود إلى نفس الموقع الساعة 23:30 (رحلة 3 ساعات). سيتم مشاركة نقطة الالتقاء عبر واتساب."
  },
  "faq.q4": { en: "What route does the cruise take?", tr: "Tur hangi rotayı izliyor?", de: "Welche Route fährt die Tour?", es: "¿Qué ruta toma el crucero?", ru: "Каким маршрутом идёт круиз?", ar: "ما هو مسار الرحلة؟" },
  "faq.a4": {
    en: "The cruise sails along the Bosphorus Strait, passing by iconic landmarks including Dolmabahçe Palace, Bosphorus Bridge, Maiden's Tower, Ortaköy Mosque, and more.",
    tr: "Tur, Boğaz boyunca ilerleyerek Dolmabahçe Sarayı, Boğaz Köprüsü, Kız Kulesi, Ortaköy Camii ve daha birçok ikonik yapıyı geçer.",
    de: "Die Tour fährt den Bosporus entlang, vorbei an Dolmabahçe-Palast, Bosporus-Brücke, Leanderturm und Ortaköy-Moschee.",
    es: "El crucero navega por el estrecho del Bósforo, pasando por monumentos icónicos como el Palacio de Dolmabahçe, el Puente del Bósforo y la Torre de la Doncella.",
    ru: "Круиз проходит по проливу Босфор, мимо дворца Долмабахче, Босфорского моста, Девичьей башни, мечети Ортакёй и других достопримечательностей.",
    ar: "تبحر الرحلة عبر مضيق البوسفور، مروراً بمعالم أيقونية مثل قصر دولمة بهجة وجسر البوسفور وبرج الفتاة ومسجد أورتاكوي."
  },
  "faq.q5": { en: "How close are the tables to the stage?", tr: "Masalar sahneye ne kadar yakın?", de: "Wie nah sind die Tische zur Bühne?", es: "¿Qué tan cerca están las mesas del escenario?", ru: "Как близко столы к сцене?", ar: "ما مدى قرب الطاولات من المسرح؟" },
  "faq.a5": {
    en: "It depends on your package. Premium tables are closer to the stage, and VIP tables have the best location. Let us know on WhatsApp and we'll arrange the best spot.",
    tr: "Paketinize bağlıdır. Premium masalar sahneye daha yakındır ve VIP masalar en iyi konumdadır. WhatsApp'tan bize bildirin, en uygun yeri ayarlayalım.",
    de: "Hängt vom Paket ab. Premium-Tische sind näher zur Bühne, VIP-Tische haben die beste Lage. Per WhatsApp anfragen.",
    es: "Depende de tu paquete. Las mesas Premium están más cerca del escenario y las VIP tienen la mejor ubicación.",
    ru: "Зависит от пакета. Премиум-столы ближе к сцене, а VIP-столы расположены в лучшем месте.",
    ar: "يعتمد على باقتك. طاولات بريميوم أقرب إلى المسرح، وطاولات VIP في أفضل موقع."
  },
  "faq.q6": { en: "What kind of shows and entertainment are there?", tr: "Ne tür şovlar ve eğlence var?", de: "Welche Shows und Unterhaltung gibt es?", es: "¿Qué tipo de shows y entretenimiento hay?", ru: "Какие шоу и развлечения?", ar: "ما نوع العروض والترفيه؟" },
  "faq.a6": {
    en: "The cruise features live singer performances, a traditional Turkish Night show with folk dances, belly dance, and DJ music. Entertainment runs until 21:00.",
    tr: "Turda canlı şarkıcı performansları, geleneksel halk danslarıyla Türk Gecesi şovu, oryantal dans ve DJ müziği bulunur. Eğlence 21:00'e kadar devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstänzen, Bauchtanz und DJ-Musik. Unterhaltung bis 21:00.",
    es: "El crucero incluye cantante en vivo, show nocturno turco con danzas folclóricas, danza del vientre y música DJ. Entretenimiento hasta las 21:00.",
    ru: "На круизе — живой певец, традиционное турецкое шоу с народными танцами, танец живота и DJ-музыка. Развлечения до 21:00.",
    ar: "تتميز الرحلة بعروض مغني حي، عرض الليلة التركية التقليدية مع الرقصات الشعبية، رقص شرقي وموسيقى DJ. الترفيه حتى 21:00."
  },
  "faq.q7": { en: "Can I book for tonight?", tr: "Bu gece için rezervasyon yapabilir miyim?", de: "Kann ich für heute Abend buchen?", es: "¿Puedo reservar para esta noche?", ru: "Можно забронировать на сегодня?", ar: "هل يمكنني الحجز لهذه الليلة؟" },
  "faq.a7": {
    en: "Yes! Same-day bookings are available until 20:00 (1 hour before departure). Just message us on WhatsApp.",
    tr: "Evet! Aynı gün rezervasyonlar 20:00'ye kadar (kalkıştan 1 saat önce) mümkündür. WhatsApp'tan bize yazın.",
    de: "Ja! Buchung am selben Tag bis 20:00 möglich (1 Std. vor Abfahrt). Einfach per WhatsApp.",
    es: "¡Sí! Las reservas del mismo día están disponibles hasta las 20:00. Solo escríbenos en WhatsApp.",
    ru: "Да! Бронирование в тот же день доступно до 20:00. Просто напишите нам в WhatsApp.",
    ar: "نعم! الحجوزات في نفس اليوم متاحة حتى الساعة 20:00. فقط راسلنا عبر واتساب."
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
    en: "Yes! Hotel transfer is available for +€10 per person, including pickup and drop-off.",
    tr: "Evet! Otel transferi kişi başı +€10 ile mümkündür. Alım ve bırakım dahildir.",
    de: "Ja! Hoteltransfer für +€10 pro Person, inkl. Abholung und Rückfahrt.",
    es: "¡Sí! El traslado al hotel está disponible por +€10 por persona, incluyendo recogida y devolución.",
    ru: "Да! Трансфер из отеля доступен за +€10 с человека, включая подачу и возврат.",
    ar: "نعم! خدمة النقل من الفندق متاحة مقابل +€10 للشخص، شاملة الاستلام والتوصيل."
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
    en: "Standard Dinner Cruise", tr: "Standard Akşam Turu", de: "Standard-Abendfahrt", es: "Crucero Cena Estándar",
    ru: "Стандартный ужин-круиз", ar: "رحلة عشاء قياسية"
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
    en: "VIP Dinner Cruise", tr: "VIP Akşam Turu", de: "VIP-Abendfahrt", es: "Crucero Cena VIP",
    ru: "VIP ужин-круиз", ar: "رحلة عشاء VIP"
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
    en: "Halal · All taxes incl.", tr: "Helal · Vergiler dahil", de: "Halal · Steuern inkl.", es: "Halal · Impuestos incluidos",
    ru: "Халяль · Все налоги вкл.", ar: "حلال · جميع الضرائب مشمولة"
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
    en: "Warm appetizer: paçanga börek (pastırma & cheese)", tr: "Ara sıcak: paçanga böreği (pastırma ve kaşar)",
    de: "Warme Vorspeise: Paçanga Börek (Pastirma & Käse)", es: "Entrante caliente: paçanga börek (pastırma y queso)",
    ru: "Горячая закуска: пачанга бёрек (пастырма и сыр)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة وجبن)"
  },
  "dinner.std.item3": {
    en: "Main course with seasonal salad: salmon, sea bream, chicken, or meatball", tr: "Mevsim salatalı ana yemek: somon, çupra, tavuk veya köfte",
    de: "Hauptgang mit Salat: Lachs, Dorade, Hähnchen oder Köfte", es: "Plato principal con ensalada: salmón, dorada, pollo o albóndigas",
    ru: "Основное блюдо с сезонным салатом: лосось, дорада, курица или фрикадельки", ar: "طبق رئيسي مع سلطة موسمية: سلمون، دنيس، دجاج أو كفتة"
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
  "dinner.vip.item1": {
    en: "15+ varieties of Turkish meze, served as a traditional spread", tr: "15+ çeşit Türk mezesi, geleneksel serpme olarak servis",
    de: "15+ Sorten türkische Meze, traditionell serviert", es: "15+ variedades de meze turco, servido como spread tradicional",
    ru: "15+ видов турецких мезе, поданных в традиционном стиле", ar: "15+ نوع من المقبلات التركية، تقدم بأسلوب تقليدي"
  },
  "dinner.vip.item2": {
    en: "Warm appetizer: paçanga börek (pastırma & cheese)", tr: "Ara sıcak: paçanga böreği (pastırma ve kaşar)",
    de: "Warme Vorspeise: Paçanga Börek (Pastirma & Käse)", es: "Entrante caliente: paçanga börek (pastırma y queso)",
    ru: "Горячая закуска: пачанга бёрек (пастырма и сыр)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة وجبن)"
  },
  "dinner.vip.item3": {
    en: "Main course with seasonal salad (choose one): salmon, sea bream, chicken, meatball, rib-eye steak, or beef steak",
    tr: "Mevsim salatalı ana yemek (birini seçin): somon, çupra, tavuk, köfte, antrikot veya biftek",
    de: "Hauptgang mit Salat (Auswahl): Lachs, Dorade, Hähnchen, Köfte, Rib-Eye oder Rindersteak",
    es: "Plato principal con ensalada (elija uno): salmón, dorada, pollo, albóndigas, chuletón o bistec",
    ru: "Основное блюдо с салатом (на выбор): лосось, дорада, курица, фрикадельки, рибай или бифштекс",
    ar: "طبق رئيسي مع سلطة (اختر واحد): سلمون، دنيس، دجاج، كفتة، ريب آي أو ستيك"
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
    en: "Three ways to experience the Bosphorus. Pick the one that fits your mood.", tr: "Boğaz'ı deneyimlemenin üç yolu. Ruh halinize uygun olanı seçin.", de: "Drei Wege, den Bosporus zu erleben. Wählen Sie Ihren.", es: "Tres formas de vivir el Bósforo. Elija la que se adapte a su estado de ánimo.", ru: "Три способа познакомиться с Босфором. Выберите подходящий.", ar: "ثلاث طرق لتجربة البوسفور. اختر ما يناسب مزاجك."
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
    en: "0-3 age: Free  |  3-5 age: 50% off  |  5+ age: Full price", tr: "0-3 yaş: Ücretsiz  |  3-5 yaş: %50 indirim  |  5+ yaş: Tam fiyat",
    de: "0-3 J.: Gratis  |  3-5 J.: 50% Rabatt  |  5+ J.: Vollpreis", es: "0-3 años: Gratis  |  3-5 años: 50% desc.  |  5+ años: Precio completo",
    ru: "0-3 лет: Бесплатно  |  3-5 лет: 50% скидка  |  5+ лет: Полная цена", ar: "0-3 سنة: مجاني  |  3-5 سنة: خصم 50%  |  5+ سنة: السعر الكامل"
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
    en: "Dinner — 7 meze + salad + main course + dessert", tr: "Akşam yemeği — 7 meze + salata + ana yemek + tatlı", de: "Abendessen — 7 Meze + Salat + Hauptgang + Dessert", es: "Cena — 7 meze + ensalada + plato principal + postre", ru: "Ужин — 7 мезе + салат + основное блюдо + десерт", ar: "عشاء — 7 مقبلات + سلطة + طبق رئيسي + حلوى"
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
    en: "7 meze + main course + dessert", tr: "7 meze + ana yemek + tatlı", de: "7 Meze + Hauptgang + Dessert", es: "7 meze + plato principal + postre", ru: "7 мезе + основное + десерт", ar: "7 مقبلات + طبق رئيسي + حلوى"
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
    en: "Night Cruise: Boarding 20:30 · Departure 20:45",
    tr: "Gece Turu: Biniş 20:30 · Kalkış 20:45",
    de: "Nachtkreuzfahrt: Boarding 20:30 · Abfahrt 20:45",
    es: "Crucero Nocturno: Embarque 20:30 · Salida 20:45",
    ru: "Ночной круиз: Посадка 20:30 · Отправление 20:45",
    ar: "رحلة ليلية: الصعود 20:30 · المغادرة 20:45"
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
    en: "Night Cruise: Return ~23:30",
    tr: "Gece Turu: Dönüş ~23:30",
    de: "Nachtkreuzfahrt: Rückkehr ~23:30",
    es: "Crucero Nocturno: Regreso ~23:30",
    ru: "Ночной круиз: Возвращение ~23:30",
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
    en: "We'll confirm within 15 minutes via WhatsApp",
    tr: "WhatsApp üzerinden 15 dakika içinde onay vereceğiz",
    de: "Wir bestätigen innerhalb von 15 Minuten per WhatsApp",
    es: "Confirmaremos en 15 minutos por WhatsApp",
    ru: "Подтвердим в течение 15 минут через WhatsApp",
    ar: "سنؤكد خلال 15 دقيقة عبر واتساب"
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
  "wizard.enterPhone": {
    en: "Please enter your phone number", tr: "Lütfen telefon numaranızı girin", de: "Bitte geben Sie Ihre Telefonnummer ein", es: "Por favor ingrese su número de teléfono",
    ru: "Пожалуйста, введите номер телефона", ar: "يرجى إدخال رقم هاتفك"
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
    en: "Hotel name or accommodation address",
    tr: "Otel adı veya konaklama adresi",
    de: "Hotelname oder Unterkunftsadresse",
    es: "Nombre del hotel o dirección del alojamiento",
    ru: "Название отеля или адрес проживания",
    ar: "اسم الفندق أو عنوان الإقامة"
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
