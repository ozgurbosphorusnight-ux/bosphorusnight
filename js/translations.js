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
    en: "Home", tr: "Ana Sayfa", de: "Startseite", es: "Inicio", ru: "Главная", ar: "الرئيسية"
  },
  "nav.cruises": {
    en: "Cruises", tr: "Turlar", de: "Kreuzfahrten", es: "Cruceros", ru: "Круизы", ar: "الرحلات"
  },
  "nav.gallery": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور"
  },
  "nav.faq": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة"
  },
  "nav.book": {
    en: "Book on WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Auf WhatsApp buchen", es: "Reservar en WhatsApp", ru: "Забронировать в WhatsApp", ar: "احجز عبر واتساب"
  },

  // ========== HERO ==========
  "hero.badge": {
    en: "Istanbul's Premium Cruise Experience", tr: "İstanbul'un Premium Cruise Deneyimi",
    de: "Istanbuls Premium-Kreuzfahrt-Erlebnis", es: "La Experiencia Premium de Crucero en Estambul",
    ru: "Премиальный круиз по Стамбулу", ar: "تجربة الرحلات البحرية الفاخرة في إسطنبول"
  },
  "hero.title1": {
    en: "Luxury Bosphorus", tr: "Lüks Boğaz", de: "Luxus Bosporus", es: "Lujoso Bósforo",
    ru: "Роскошный Босфор", ar: "البوسفور الفاخر"
  },
  "hero.title2": {
    en: "Dinner Cruise", tr: "Yemekli Turu", de: "Dinner-Kreuzfahrt", es: "Crucero con Cena",
    ru: "Ужин на круизе", ar: "رحلة عشاء بحرية"
  },
  "hero.subtitle": {
    en: "Live entertainment · Dinner · Bosphorus night views · 7/24 instant support",
    tr: "Canlı eğlence · Yemek · Boğaz gece manzarası · 7/24 anlık destek",
    de: "Live-Unterhaltung · Abendessen · Bosporus-Nachtblick · 24/7 Support",
    es: "Entretenimiento en vivo · Cena · Vistas nocturnas del Bósforo · Soporte 24/7",
    ru: "Живые шоу · Ужин · Ночной Босфор · Поддержка 24/7",
    ar: "ترفيه حي · عشاء · مناظر البوسفور الليلية · دعم على مدار الساعة"
  },
  "hero.noprepay": {
    en: "No prepayment — Pay on the boat", tr: "Ön ödeme yok — Teknede ödeyin",
    de: "Keine Vorauszahlung — Bezahlung auf dem Boot", es: "Sin prepago — Paga en el barco",
    ru: "Без предоплаты — оплата на борту", ar: "بدون دفع مسبق — ادفع على القارب"
  },
  "hero.cta1": {
    en: "Check Availability on WhatsApp", tr: "WhatsApp'tan Müsaitlik Sor",
    de: "Verfügbarkeit auf WhatsApp prüfen", es: "Consultar disponibilidad en WhatsApp",
    ru: "Проверить наличие в WhatsApp", ar: "تحقق من التوفر عبر واتساب"
  },
  "hero.cta2": {
    en: "View Cruises", tr: "Turları İncele", de: "Kreuzfahrten ansehen", es: "Ver cruceros",
    ru: "Смотреть круизы", ar: "عرض الرحلات"
  },
  "hero.departure": {
    en: "Departures from Kabataş & Eminönü · 20:45 – 23:30",
    tr: "Kalkış: Kabataş & Eminönü · 20:45 – 23:30",
    de: "Abfahrt von Kabataş & Eminönü · 20:45 – 23:30",
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
    en: "Pay on the Boat", tr: "Teknede Ödeyin", de: "Bezahlung auf dem Boot",
    es: "Paga en el barco", ru: "Оплата на борту", ar: "ادفع على القارب"
  },
  "trust.withyou": {
    en: "With You Before, During & After", tr: "Öncesinde, Sırasında ve Sonrasında Yanınızdayız",
    de: "Vor, während & nach der Fahrt an Ihrer Seite",
    es: "Contigo antes, durante y después", ru: "С вами до, во время и после",
    ar: "معك قبل وأثناء وبعد الرحلة"
  },
  "trust.sameday": {
    en: "Same-day Booking", tr: "Aynı Gün Rezervasyon", de: "Buchung am selben Tag",
    es: "Reserva el mismo día", ru: "Бронирование в тот же день", ar: "حجز في نفس اليوم"
  },

  // ========== BOATS ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunuzu Seçin", de: "Wählen Sie Ihre Kreuzfahrt",
    es: "Elige tu crucero", ru: "Выберите круиз", ar: "اختر رحلتك"
  },
  "boats.title": {
    en: "Select Your Boat", tr: "Teknenizi Seçin", de: "Wählen Sie Ihr Boot",
    es: "Selecciona tu barco", ru: "Выберите лодку", ar: "اختر قاربك"
  },
  "boats.desc": {
    en: "Each vessel offers a unique experience on the Bosphorus. Choose the one that fits your style.",
    tr: "Her tekne Boğaz'da eşsiz bir deneyim sunar. Tarzınıza uygun olanı seçin.",
    de: "Jedes Schiff bietet ein einzigartiges Erlebnis am Bosporus. Wählen Sie das, was zu Ihrem Stil passt.",
    es: "Cada embarcación ofrece una experiencia única en el Bósforo. Elige la que se adapte a tu estilo.",
    ru: "Каждое судно предлагает уникальный опыт на Босфоре. Выберите то, что подходит вам.",
    ar: "كل قارب يقدم تجربة فريدة على البوسفور. اختر ما يناسب ذوقك."
  },
  "boats.classic": {
    en: "Classic Cruise", tr: "Klasik Cruise", de: "Klassische Kreuzfahrt",
    es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية"
  },
  "boats.classic.desc": {
    en: "A wonderful Bosphorus dinner experience with live entertainment and stunning views.",
    tr: "Canlı eğlence ve muhteşem manzara eşliğinde harika bir Boğaz yemek deneyimi.",
    de: "Ein wunderbares Bosporus-Dinner-Erlebnis mit Live-Unterhaltung und atemberaubender Aussicht.",
    es: "Una maravillosa experiencia de cena en el Bósforo con entretenimiento en vivo y vistas impresionantes.",
    ru: "Прекрасный ужин на Босфоре с живой музыкой и потрясающими видами.",
    ar: "تجربة عشاء رائعة على البوسفور مع ترفيه حي ومناظر خلابة."
  },
  "boats.premium": {
    en: "Premium Cruise", tr: "Premium Cruise", de: "Premium-Kreuzfahrt",
    es: "Crucero Premium", ru: "Премиум круиз", ar: "رحلة مميزة"
  },
  "boats.premium.desc": {
    en: "Enhanced comfort with better seating, premium service, and a more exclusive atmosphere.",
    tr: "Daha iyi oturma düzeni, premium hizmet ve daha özel bir atmosfer.",
    de: "Mehr Komfort mit besseren Sitzplätzen, Premium-Service und exklusiverer Atmosphäre.",
    es: "Mayor comodidad con mejores asientos, servicio premium y una atmósfera más exclusiva.",
    ru: "Повышенный комфорт с лучшими местами, премиум-сервисом и эксклюзивной атмосферой.",
    ar: "راحة محسّنة مع مقاعد أفضل وخدمة مميزة وأجواء حصرية."
  },
  "boats.luxury": {
    en: "Luxury Yacht", tr: "Lüks Yat", de: "Luxusyacht",
    es: "Yate de Lujo", ru: "Люкс яхта", ar: "يخت فاخر"
  },
  "boats.luxury.desc": {
    en: "The ultimate Bosphorus experience. Intimate setting, top-tier cuisine, and VIP treatment.",
    tr: "En üst düzey Boğaz deneyimi. Özel ortam, birinci sınıf mutfak ve VIP hizmet.",
    de: "Das ultimative Bosporus-Erlebnis. Intime Atmosphäre, erstklassige Küche und VIP-Behandlung.",
    es: "La experiencia definitiva en el Bósforo. Ambiente íntimo, cocina de primera y trato VIP.",
    ru: "Лучший опыт на Босфоре. Уютная обстановка, кухня высшего уровня и VIP-обслуживание.",
    ar: "التجربة المطلقة على البوسفور. أجواء حميمة ومأكولات راقية ومعاملة VIP."
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →",
    es: "Ver paquetes →", ru: "Смотреть пакеты →", ar: "← عرض الباقات"
  },
  "boats.mostpopular": {
    en: "Most Popular", tr: "En Popüler", de: "Am beliebtesten",
    es: "Más Popular", ru: "Самый популярный", ar: "الأكثر شعبية"
  },
  "boats.from": {
    en: "from", tr: "başlangıç", de: "ab", es: "desde", ru: "от", ar: "من"
  },

  // ========== PACKAGES ==========
  "pkg.choose": {
    en: "Choose Your Package", tr: "Paketinizi Seçin", de: "Wählen Sie Ihr Paket",
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
    en: "Best Value", tr: "En İyi Değer", de: "Bestes Angebot", es: "Mejor Valor",
    ru: "Лучшее предложение", ar: "أفضل قيمة"
  },
  "pkg.person": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ человек", ar: "/ شخص"
  },
  "pkg.book": {
    en: "Book on WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Auf WhatsApp buchen",
    es: "Reservar en WhatsApp", ru: "Забронировать в WhatsApp", ar: "احجز عبر واتساب"
  },
  "pkg.select": {
    en: "Select & Customize", tr: "Seç & Özelleştir", de: "Auswählen & Anpassen",
    es: "Seleccionar & Personalizar", ru: "Выбрать и настроить", ar: "اختر وخصّص"
  },

  // Package features
  "pkg.f.cruise": {
    en: "3.5-hour Bosphorus night cruise", tr: "3.5 saatlik Boğaz gece turu",
    de: "3,5-stündige Bosporus-Nachtkreuzfahrt", es: "Crucero nocturno de 3.5 horas por el Bósforo",
    ru: "3,5-часовой ночной круиз по Босфору", ar: "رحلة بحرية ليلية لمدة 3.5 ساعات"
  },
  "pkg.f.dinner": {
    en: "Dinner — 7 meze + main course + dessert", tr: "Yemek — 7 meze + ana yemek + tatlı",
    de: "Abendessen — 7 Meze + Hauptgericht + Dessert", es: "Cena — 7 meze + plato principal + postre",
    ru: "Ужин — 7 мезе + основное блюдо + десерт", ar: "عشاء — 7 مقبلات + طبق رئيسي + حلوى"
  },
  "pkg.f.dinner.vip": {
    en: "VIP dinner — mixed grill platter, premium cuts", tr: "VIP yemek — karışık ızgara tabağı, premium etler",
    de: "VIP-Dinner — gemischte Grillplatte, Premium-Fleisch", es: "Cena VIP — parrillada mixta, cortes premium",
    ru: "VIP ужин — ассорти гриль, премиум мясо", ar: "عشاء VIP — طبق مشويات مشكلة، لحوم فاخرة"
  },
  "pkg.f.entertainment": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu",
    de: "Live-Unterhaltung & Türkische Nacht Show", es: "Entretenimiento en vivo y show de noche turca",
    ru: "Живые шоу и турецкая ночь", ar: "ترفيه حي وعرض الليلة التركية"
  },
  "pkg.f.seat.standard": {
    en: "Standard seating", tr: "Standart oturma düzeni", de: "Standardsitzplätze",
    es: "Asientos estándar", ru: "Стандартные места", ar: "مقاعد عادية"
  },
  "pkg.f.seat.better": {
    en: "Better seating — closer to stage", tr: "Daha iyi oturma — sahneye yakın",
    de: "Bessere Plätze — näher an der Bühne", es: "Mejores asientos — más cerca del escenario",
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
    de: "Vegetarisches Menü verfügbar", es: "Menú vegetariano disponible",
    ru: "Вегетарианское меню доступно", ar: "قائمة نباتية متاحة"
  },
  "pkg.f.vip.priority": {
    en: "Priority boarding & VIP treatment", tr: "Öncelikli biniş & VIP hizmet",
    de: "Prioritäts-Boarding & VIP-Behandlung", es: "Embarque prioritario y trato VIP",
    ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود ومعاملة VIP"
  },
  "pkg.opt.standard": {
    en: "Optional: Alcohol +€10 · Transfer +€15 · Romantic table +€25",
    tr: "Opsiyonel: Alkol +€10 · Transfer +€15 · Romantik masa +€25",
    de: "Optional: Alkohol +€10 · Transfer +€15 · Romantischer Tisch +€25",
    es: "Opcional: Alcohol +€10 · Traslado +€15 · Mesa romántica +€25",
    ru: "Опционально: Алкоголь +€10 · Трансфер +€15 · Романтический стол +€25",
    ar: "اختياري: مشروبات كحولية +€10 · نقل +€15 · طاولة رومانسية +€25"
  },
  "pkg.opt.vip": {
    en: "Optional: Alcohol +€10 · Transfer +€15 · Proposal pkg +€50",
    tr: "Opsiyonel: Alkol +€10 · Transfer +€15 · Evlilik teklifi pkg +€50",
    de: "Optional: Alkohol +€10 · Transfer +€15 · Heiratsantrag-Paket +€50",
    es: "Opcional: Alcohol +€10 · Traslado +€15 · Paquete propuesta +€50",
    ru: "Опционально: Алкоголь +€10 · Трансфер +€15 · Пакет предложения +€50",
    ar: "اختياري: مشروبات كحولية +€10 · نقل +€15 · باقة عرض زواج +€50"
  },
  "pkg.children": {
    en: "Children 0–3: Free · 3–5: 50% off · 5+: Full price · No prepayment required",
    tr: "Çocuklar 0–3: Ücretsiz · 3–5: %50 indirim · 5+: Tam fiyat · Ön ödeme gerekmez",
    de: "Kinder 0–3: Kostenlos · 3–5: 50% Rabatt · 5+: Voller Preis · Keine Vorauszahlung",
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
    en: "What's Included", tr: "Neler Dahil", de: "Was ist inbegriffen",
    es: "Qué incluye", ru: "Что включено", ar: "ما هو مشمول"
  },
  "incl.cruise": {
    en: "Bosphorus Night Cruise", tr: "Boğaz Gece Turu", de: "Bosporus-Nachtkreuzfahrt",
    es: "Crucero Nocturno por el Bósforo", ru: "Ночной круиз по Босфору", ar: "رحلة بحرية ليلية"
  },
  "incl.cruise.desc": {
    en: "3.5-hour cruise with iconic Istanbul views", tr: "İstanbul'un ikonik manzaralarıyla 3.5 saatlik tur",
    de: "3,5-stündige Kreuzfahrt mit Blick auf Istanbul", es: "Crucero de 3.5 horas con vistas icónicas de Estambul",
    ru: "3,5-часовой круиз с видами Стамбула", ar: "رحلة 3.5 ساعات مع مناظر إسطنبول الأيقونية"
  },
  "incl.dinner": {
    en: "Full Dinner Service", tr: "Tam Yemek Servisi", de: "Vollständiges Abendessen",
    es: "Servicio completo de cena", ru: "Полный ужин", ar: "خدمة عشاء كاملة"
  },
  "incl.dinner.desc": {
    en: "7 meze varieties, main course & dessert", tr: "7 çeşit meze, ana yemek & tatlı",
    de: "7 Meze-Sorten, Hauptgericht & Dessert", es: "7 variedades de meze, plato principal y postre",
    ru: "7 видов мезе, основное блюдо и десерт", ar: "7 أنواع مقبلات، طبق رئيسي وحلوى"
  },
  "incl.entertainment": {
    en: "Live Entertainment", tr: "Canlı Eğlence", de: "Live-Unterhaltung",
    es: "Entretenimiento en Vivo", ru: "Живые шоу", ar: "ترفيه حي"
  },
  "incl.entertainment.desc": {
    en: "Live singer, DJ & Turkish night dances", tr: "Canlı şarkıcı, DJ & Türk gecesi dansları",
    de: "Live-Sänger, DJ & türkische Nachttänze", es: "Cantante en vivo, DJ y danzas turcas",
    ru: "Живой певец, DJ и турецкие танцы", ar: "مغني حي، DJ ورقصات تركية"
  },
  "incl.transfer": {
    en: "Hotel Transfer", tr: "Otel Transferi", de: "Hoteltransfer",
    es: "Traslado al Hotel", ru: "Трансфер из отеля", ar: "نقل من الفندق"
  },
  "incl.transfer.desc": {
    en: "Optional pickup & drop-off from your hotel", tr: "Opsiyonel otel alım & bırakım",
    de: "Optionale Abholung & Rückfahrt vom Hotel", es: "Recogida y devolución opcional desde tu hotel",
    ru: "Опциональный трансфер из/в отель", ar: "خدمة نقل اختيارية من وإلى فندقك"
  },
  "incl.support": {
    en: "7/24 Support", tr: "7/24 Destek", de: "24/7 Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم على مدار الساعة"
  },
  "incl.support.desc": {
    en: "Instant WhatsApp support anytime", tr: "Her an anlık WhatsApp desteği",
    de: "Sofortiger WhatsApp-Support jederzeit", es: "Soporte instantáneo en WhatsApp en cualquier momento",
    ru: "Мгновенная поддержка в WhatsApp", ar: "دعم واتساب فوري في أي وقت"
  },
  "incl.special": {
    en: "Special Occasions", tr: "Özel Günler", de: "Besondere Anlässe",
    es: "Ocasiones Especiales", ru: "Особые случаи", ar: "مناسبات خاصة"
  },
  "incl.special.desc": {
    en: "Romantic table, proposal & birthday packages", tr: "Romantik masa, evlilik teklifi & doğum günü paketleri",
    de: "Romantischer Tisch, Heiratsantrag & Geburtstagspakete", es: "Mesa romántica, propuesta y paquetes de cumpleaños",
    ru: "Романтический стол, предложение и пакеты на день рождения", ar: "طاولة رومانسية وباقات عرض زواج وأعياد ميلاد"
  },
  "incl.cruise.detail": {
    en: "Sail past the Maiden's Tower, Dolmabahçe Palace, Bosphorus Bridge, Beylerbeyi Palace, Ortaköy Mosque, and Rumeli Fortress. Departs from Kabataş at 20:45, returns at 23:30.",
    tr: "Kız Kulesi, Dolmabahçe Sarayı, Boğaz Köprüsü, Beylerbeyi Sarayı, Ortaköy Camii ve Rumeli Hisarı'nın önünden geçin. Kabataş'tan 20:45'te kalkar, 23:30'da döner.",
    de: "Fahren Sie am Leanderturm, Dolmabahçe-Palast, der Bosporus-Brücke, Beylerbeyi-Palast, Ortaköy-Moschee und der Festung Rumeli vorbei. Abfahrt um 20:45, Rückkehr um 23:30.",
    es: "Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe, el Puente del Bósforo, el Palacio de Beylerbeyi, la Mezquita de Ortaköy y la Fortaleza de Rumeli. Sale a las 20:45, regresa a las 23:30.",
    ru: "Проплывите мимо Девичьей башни, дворца Долмабахче, Босфорского моста, дворца Бейлербейи, мечети Ортакёй и крепости Румели. Отправление в 20:45, возвращение в 23:30.",
    ar: "أبحر بجوار برج الفتاة، قصر دولمة بهجة، جسر البوسفور، قصر بيلربيي، مسجد أورتاكوي، وقلعة روملي. المغادرة 20:45، العودة 23:30."
  },
  "incl.dinner.detail": {
    en: "7 types of meze, choice of fish, chicken, or meatball main course, and dessert. Vegetarian menu available. VIP packages include mixed grill platter and premium meat options.",
    tr: "7 çeşit meze, balık/tavuk/köfte ana yemek seçeneği ve tatlı. Vejetaryen menü mevcuttur. VIP paketlerde karışık ızgara tabağı ve özel et seçenekleri dahildir.",
    de: "7 Meze-Sorten, Wahl zwischen Fisch, Hähnchen oder Fleischbällchen als Hauptgericht und Dessert. Vegetarisches Menü verfügbar. VIP-Pakete beinhalten gemischte Grillplatte.",
    es: "7 tipos de meze, elección de pescado, pollo o albóndigas como plato principal y postre. Menú vegetariano disponible. Los paquetes VIP incluyen parrillada mixta.",
    ru: "7 видов мезе, выбор рыбы, курицы или котлет на горячее и десерт. Вегетарианское меню доступно. VIP-пакеты включают микс-гриль и премиум мясо.",
    ar: "7 أنواع مقبلات، اختيار سمك أو دجاج أو كفتة كطبق رئيسي وحلوى. قائمة نباتية متوفرة. باقات VIP تشمل مشاوي مشكلة."
  },
  "incl.entertainment.detail": {
    en: "Live singer performances, traditional Turkish night show with folk dances, belly dance, and DJ music. Entertainment runs until 21:00.",
    tr: "Canlı şarkıcı performansları, halk dansları ve oryantal dans ile geleneksel Türk gecesi şovu ve DJ müziği. Eğlence 21:00'e kadar devam eder.",
    de: "Live-Sänger, traditionelle türkische Nachtshow mit Volkstänzen, Bauchtanz und DJ-Musik. Unterhaltung bis 21:00 Uhr.",
    es: "Actuaciones de cantante en vivo, show nocturno turco tradicional con danzas folclóricas, danza del vientre y música DJ. Entretenimiento hasta las 21:00.",
    ru: "Живой певец, традиционное турецкое ночное шоу с народными танцами, танец живота и DJ-музыка. Развлечения до 21:00.",
    ar: "عروض مغني حي، عرض ليلة تركية تقليدية مع رقصات شعبية، رقص شرقي وموسيقى DJ. الترفيه يستمر حتى الساعة 21:00."
  },
  "incl.transfer.detail": {
    en: "Round-trip hotel pickup and drop-off available from Sultanahmet, Taksim, and Beyoğlu areas. Available as an add-on when booking. Mention your hotel location on WhatsApp.",
    tr: "Sultanahmet, Taksim ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu WhatsApp'tan belirtin.",
    de: "Hin- und Rücktransfer vom Hotel in den Gebieten Sultanahmet, Taksim und Beyoğlu. Als Zusatz bei der Buchung verfügbar. Teilen Sie Ihren Hotelstandort auf WhatsApp mit.",
    es: "Recogida y devolución al hotel disponible desde Sultanahmet, Taksim y Beyoğlu. Disponible como complemento. Menciona la ubicación de tu hotel en WhatsApp.",
    ru: "Трансфер из/в отель доступен из районов Султанахмет, Таксим и Бейоглу. Доступен как дополнение при бронировании. Укажите расположение отеля в WhatsApp.",
    ar: "خدمة نقل ذهاب وعودة متاحة من مناطق السلطان أحمد وتقسيم وبيوغلو. متاحة كإضافة عند الحجز. اذكر موقع فندقك على واتساب."
  },
  "incl.support.detail": {
    en: "We're with you before, during, and after your cruise. Message or call us on WhatsApp anytime — we respond instantly, 7 days a week, 24 hours a day.",
    tr: "Turunuzun öncesinde, sırasında ve sonrasında yanınızdayız. WhatsApp'tan yazın veya arayın — 7/24 anında cevap veriyoruz.",
    de: "Wir sind vor, während und nach Ihrer Kreuzfahrt für Sie da. Schreiben oder rufen Sie uns jederzeit auf WhatsApp an — wir antworten sofort, 7 Tage die Woche.",
    es: "Estamos contigo antes, durante y después de tu crucero. Escríbenos o llámanos en WhatsApp — respondemos al instante, los 7 días de la semana.",
    ru: "Мы с вами до, во время и после круиза. Пишите или звоните в WhatsApp — отвечаем мгновенно, 7 дней в неделю, 24 часа в сутки.",
    ar: "نحن معك قبل وأثناء وبعد رحلتك. راسلنا أو اتصل بنا على واتساب — نرد فورًا على مدار الساعة."
  },
  "incl.special.detail": {
    en: "Celebrating something special? We offer romantic table setup with candles & flowers (+€25), proposal package with decoration, photographer & cake (+€50), and birthday celebrations. Tell us on WhatsApp!",
    tr: "Özel bir gün mü kutluyorsunuz? Mum ve çiçeklerle romantik masa düzeni (+€25), dekorasyon, fotoğrafçı ve pasta ile evlilik teklifi paketi (+€50) ve doğum günü kutlamaları sunuyoruz. WhatsApp'tan bize yazın!",
    de: "Feiern Sie etwas Besonderes? Romantischer Tisch mit Kerzen & Blumen (+€25), Heiratsantrag-Paket mit Dekoration, Fotograf & Kuchen (+€50) und Geburtstagsfeiern. Schreiben Sie uns auf WhatsApp!",
    es: "¿Celebrando algo especial? Ofrecemos mesa romántica con velas y flores (+€25), paquete de propuesta con decoración, fotógrafo y pastel (+€50) y celebraciones de cumpleaños. ¡Escríbenos en WhatsApp!",
    ru: "Празднуете что-то особенное? Романтический стол со свечами и цветами (+€25), пакет предложения с декором, фотографом и тортом (+€50) и празднование дня рождения. Напишите нам в WhatsApp!",
    ar: "تحتفل بمناسبة خاصة؟ نقدم طاولة رومانسية مع شموع وزهور (+€25)، باقة عرض زواج مع ديكور ومصور وكعكة (+€50)، واحتفالات أعياد الميلاد. أخبرنا على واتساب!"
  },

  // ========== GALLERY ==========
  "gallery.label": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور"
  },
  "gallery.title": {
    en: "Experience the Night", tr: "Geceyi Yaşayın", de: "Erleben Sie die Nacht",
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
    de: "4,8/5 basierend auf Kundenfeedback", es: "4.8/5 basado en opiniones de clientes",
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
    de: "\"Eine unvergessliche Nacht am Bosporus. Die Aussicht war atemberaubend und das Abendessen war fantastisch. Perfekt für Paare!\"",
    es: "\"Una noche inolvidable en el Bósforo. Las vistas eran impresionantes y la cena fue increíble. ¡Perfecto para parejas!\"",
    ru: "\"Незабываемая ночь на Босфоре. Виды захватывали дух, а ужин был потрясающим. Идеально для пар!\"",
    ar: "\"ليلة لا تُنسى على البوسفور. المناظر كانت خلابة والعشاء كان رائعاً. مثالي للأزواج!\""
  },
  "reviews.r1.info": {
    en: "Couple · United Kingdom", tr: "Çift · İngiltere", de: "Paar · Vereinigtes Königreich",
    es: "Pareja · Reino Unido", ru: "Пара · Великобритания", ar: "زوجان · المملكة المتحدة"
  },
  "reviews.r2": {
    en: "\"We came as a group of 8 friends and had the best time! The Turkish night show was incredible. Will definitely recommend.\"",
    tr: "\"8 arkadaş olarak geldik ve harika vakit geçirdik! Türk gecesi şovu inanılmazdı. Kesinlikle tavsiye edeceğiz.\"",
    de: "\"Wir kamen als Gruppe von 8 Freunden und hatten die beste Zeit! Die türkische Nachtshow war unglaublich.\"",
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
    de: "\"Unsere Kinder haben es geliebt! Das Team war sehr hilfsbereit und das Essen war köstlich.\"",
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
    de: "\"Als Alleinreisender war dies das Highlight meiner Istanbul-Reise. Die Buchung war so einfach — nur WhatsApp!\"",
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
    de: "\"Ich habe meiner Freundin auf dem Boot einen Heiratsantrag gemacht und das Team hat bei allem geholfen. Sie hat JA gesagt!\"",
    es: "\"Le propuse matrimonio a mi novia en el barco y el equipo ayudó con todo. ¡Dijo que SÍ!\"",
    ru: "\"Я сделал предложение своей девушке на борту, и команда помогла со всем — цветы, украшения, идеальный столик. Она сказала ДА!\"",
    ar: "\"عرضت الزواج على صديقتي على القارب وساعدني الفريق في كل شيء — الزهور والديكور والطاولة المثالية. قالت نعم!\""
  },
  "reviews.r5.info": {
    en: "Couple · United States", tr: "Çift · Amerika", de: "Paar · Vereinigte Staaten",
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
  "how.s1.title": {
    en: "Choose Your Cruise", tr: "Turunuzu Seçin", de: "Wählen Sie Ihre Kreuzfahrt",
    es: "Elige tu crucero", ru: "Выберите круиз", ar: "اختر رحلتك"
  },
  "how.s1.desc": {
    en: "Pick your preferred boat, date, and package from our curated selection.",
    tr: "Seçilmiş koleksiyonumuzdan tercih ettiğiniz tekne, tarih ve paketi seçin.",
    de: "Wählen Sie Ihr bevorzugtes Boot, Datum und Paket aus unserer kuratierten Auswahl.",
    es: "Elige tu barco, fecha y paquete preferido de nuestra selección.",
    ru: "Выберите лодку, дату и пакет из нашей подборки.",
    ar: "اختر القارب والتاريخ والباقة المفضلة لديك من مجموعتنا المختارة."
  },
  "how.s2.title": {
    en: "Write, Call, or We'll Call You", tr: "Yazın, Arayın veya Biz Sizi Arayalım", de: "Schreiben, Anrufen oder Wir Rufen Sie An",
    es: "Escríbenos, Llámanos o Te Llamamos", ru: "Напишите, Позвоните или Мы Вам Перезвоним", ar: "اكتب، اتصل، أو سنتصل بك"
  },
  "how.s2.desc": {
    en: "Message us on WhatsApp, give us a call, or leave your number — we'll get back to you instantly.",
    tr: "WhatsApp'tan yazın, bizi arayın veya numaranızı bırakın — size anında dönelim.",
    de: "Schreiben Sie uns auf WhatsApp, rufen Sie uns an oder hinterlassen Sie Ihre Nummer — wir melden uns sofort.",
    es: "Escríbenos por WhatsApp, llámanos o déjanos tu número — te contactaremos al instante.",
    ru: "Напишите в WhatsApp, позвоните или оставьте номер — мы перезвоним мгновенно.",
    ar: "راسلنا على واتساب، اتصل بنا، أو اترك رقمك — سنعاود الاتصال بك فورًا."
  },
  "how.s3.title": {
    en: "Show Up & Pay on the Boat", tr: "Gelin & Teknede Ödeyin",
    de: "Erscheinen & auf dem Boot bezahlen", es: "Llega y paga en el barco",
    ru: "Приходите и платите на борту", ar: "احضر وادفع على القارب"
  },
  "how.s3.desc": {
    en: "No prepayment needed. Just arrive at the pier, board your cruise, and pay onboard.",
    tr: "Ön ödeme gerekmez. İskeleye gelin, tekneye binin, ödemenizi teknede yapın.",
    de: "Keine Vorauszahlung nötig. Kommen Sie einfach zum Pier, gehen Sie an Bord und bezahlen Sie dort.",
    es: "Sin prepago. Solo llega al muelle, sube a bordo y paga en el barco.",
    ru: "Предоплата не нужна. Просто приходите на пирс, садитесь на борт и платите там.",
    ar: "لا حاجة للدفع المسبق. فقط احضر إلى الرصيف واصعد على متن القارب وادفع هناك."
  },

  // ========== LAST MINUTE ==========
  "last.title": {
    en: "Need a Cruise Tonight?", tr: "Bu Gece Tur İster misiniz?",
    de: "Brauchen Sie heute Nacht eine Kreuzfahrt?", es: "¿Necesitas un crucero esta noche?",
    ru: "Нужен круиз сегодня?", ar: "هل تحتاج رحلة الليلة؟"
  },
  "last.desc": {
    en: "Our team can check same-day availability for you in seconds. Message us on WhatsApp — we respond instantly, 24/7.",
    tr: "Ekibimiz aynı gün müsaitliği saniyeler içinde kontrol edebilir. WhatsApp'tan yazın — 7/24 anında cevap veriyoruz.",
    de: "Unser Team kann die Verfügbarkeit am selben Tag in Sekunden prüfen. Schreiben Sie uns auf WhatsApp — wir antworten sofort, 24/7.",
    es: "Nuestro equipo puede verificar la disponibilidad del mismo día en segundos. Escríbenos en WhatsApp — respondemos al instante, 24/7.",
    ru: "Наша команда проверит наличие на сегодня за секунды. Напишите нам в WhatsApp — мы отвечаем мгновенно, 24/7.",
    ar: "يمكن لفريقنا التحقق من توفر اليوم نفسه في ثوانٍ. راسلنا عبر واتساب — نستجيب فوراً على مدار الساعة."
  },
  "last.cta": {
    en: "Ask for Tonight's Availability", tr: "Bu Gecenin Müsaitliğini Sor",
    de: "Nach Verfügbarkeit für heute Nacht fragen", es: "Preguntar por disponibilidad esta noche",
    ru: "Узнать о наличии на сегодня", ar: "اسأل عن توفر الليلة"
  },
  "last.summary": {
    en: "20:45 · 3.5 hours · Dinner & Live Show · Pay on the boat",
    tr: "20:45 · 3.5 saat · Yemek & Canlı Şov · Teknede ödeme",
    de: "20:45 · 3,5 Stunden · Abendessen & Live-Show · Bezahlung auf dem Boot",
    es: "20:45 · 3.5 horas · Cena y Show en Vivo · Pago en el barco",
    ru: "20:45 · 3,5 часа · Ужин и живое шоу · Оплата на борту",
    ar: "20:45 · 3.5 ساعات · عشاء وعرض حي · الدفع على القارب"
  },

  // ========== WHY CHOOSE US ==========
  "why.label": {
    en: "Why Choose Us", tr: "Neden Biz", de: "Warum uns wählen",
    es: "Por qué elegirnos", ru: "Почему мы", ar: "لماذا نحن"
  },
  "why.title": {
    en: "We Stay With You", tr: "Yanınızdayız", de: "Wir bleiben bei Ihnen",
    es: "Estamos contigo", ru: "Мы с вами", ar: "نبقى معك"
  },
  "why.before": {
    en: "Before", tr: "Öncesinde", de: "Vorher", es: "Antes", ru: "До", ar: "قبل"
  },
  "why.before.desc": {
    en: "We help you choose the perfect package, answer all your questions, and confirm your reservation — all on WhatsApp.",
    tr: "Mükemmel paketi seçmenize yardım eder, tüm sorularınızı cevaplar ve rezervasyonunuzu onaylarız — hepsi WhatsApp'tan.",
    de: "Wir helfen Ihnen bei der Auswahl des perfekten Pakets, beantworten alle Fragen und bestätigen Ihre Reservierung — alles über WhatsApp.",
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
    de: "Wir erkundigen uns während der Kreuzfahrt, ob alles perfekt ist. Ein Problem? Wir kümmern uns sofort darum.",
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
    de: "Wir melden uns für Ihr Feedback und sind immer da, wenn Sie ein weiteres Erlebnis in Istanbul buchen möchten.",
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
  "faq.q0": { en: "What cruise tours do you offer?", tr: "Hangi tur seçenekleriniz var?", de: "Welche Kreuzfahrten bieten Sie an?", es: "¿Qué cruceros ofrecen?", ru: "Какие круизы вы предлагаете?", ar: "ما هي الرحلات البحرية التي تقدمونها؟" },
  "faq.a0": {
    en: "We offer three Bosphorus cruise experiences: <strong>Daytime Cruise</strong> (12:00, 1.5 hours — sightseeing with panoramic views), <strong>Sunset Cruise</strong> (17:30, 3 hours — dinner with golden hour views and live shows), and <strong>Dinner Cruise</strong> (20:45, 3.5 hours — full dinner, Turkish night show, belly dance, DJ and stunning night views). All cruises depart from Kabataş Pier.",
    tr: "Üç farklı Boğaz turu deneyimi sunuyoruz: <strong>Gündüz Turu</strong> (12:00, 1.5 saat — panoramik manzara gezisi), <strong>Günbatımı Turu</strong> (17:30, 3 saat — yemek, gün batımı manzarası ve canlı şovlar), <strong>Akşam Turu</strong> (20:45, 3.5 saat — akşam yemeği, Türk gecesi şovu, oryantal dans, DJ ve gece manzarası). Tüm turlar Kabataş İskelesi'nden kalkar.",
    de: "Wir bieten drei Bosporus-Kreuzfahrt-Erlebnisse: <strong>Tageskreuzfahrt</strong> (12:00, 1,5 Std. — Sightseeing mit Panoramablick), <strong>Sonnenuntergangskreuzfahrt</strong> (17:30, 3 Std. — Abendessen mit Sonnenuntergang und Live-Shows), <strong>Dinner-Kreuzfahrt</strong> (20:45, 3,5 Std. — Abendessen, türkische Nacht, Bauchtanz, DJ und Nachtblick). Alle Kreuzfahrten starten am Kabataş-Pier.",
    es: "Ofrecemos tres experiencias de crucero por el Bósforo: <strong>Crucero Diurno</strong> (12:00, 1,5 horas — turismo con vistas panorámicas), <strong>Crucero al Atardecer</strong> (17:30, 3 horas — cena con vistas doradas y shows en vivo), <strong>Crucero con Cena</strong> (20:45, 3,5 horas — cena completa, noche turca, danza del vientre, DJ y vistas nocturnas). Todos los cruceros salen del muelle de Kabataş.",
    ru: "Мы предлагаем три круиза по Босфору: <strong>Дневной круиз</strong> (12:00, 1,5 часа — обзорная экскурсия с панорамными видами), <strong>Круиз на закате</strong> (17:30, 3 часа — ужин с видами заката и живыми шоу), <strong>Ужин-круиз</strong> (20:45, 3,5 часа — ужин, турецкая ночь, танец живота, DJ и ночные виды). Все круизы отправляются с причала Кабаташ.",
    ar: "نقدم ثلاث تجارب رحلات بحرية في البوسفور: <strong>الرحلة النهارية</strong> (12:00، 1.5 ساعة — جولة سياحية مع إطلالات بانورامية)، <strong>رحلة الغروب</strong> (17:30، 3 ساعات — عشاء مع مناظر الساعة الذهبية وعروض حية)، <strong>رحلة العشاء</strong> (20:45، 3.5 ساعات — عشاء كامل، ليلة تركية، رقص شرقي، DJ ومناظر ليلية خلابة). جميع الرحلات تنطلق من رصيف كاباتاش."
  },
  "faq.q1": { en: "What's on the dinner menu?", tr: "Yemek menüsünde neler var?", de: "Was steht auf der Speisekarte?", es: "¿Qué hay en el menú de la cena?", ru: "Что в меню ужина?", ar: "ماذا يوجد في قائمة العشاء؟" },
  "faq.a1": {
    en: "All packages include a full dinner with 7 varieties of Turkish meze, your choice of main course (fish, chicken, or meatball), and dessert. VIP packages feature a premium mixed grill platter with selected cuts. Vegetarian options are available on request.",
    tr: "Tüm paketler 7 çeşit Türk meze, ana yemek seçenekleri (balık, tavuk veya köfte) ve tatlı içeren tam bir yemek içerir. VIP paketlerde seçkin etlerle premium karışık ızgara tabağı sunulur. İstek üzerine vejetaryen seçenekler mevcuttur.",
    de: "Alle Pakete beinhalten ein vollständiges Abendessen mit 7 Sorten türkischer Meze, Ihrer Wahl des Hauptgerichts (Fisch, Huhn oder Frikadellen) und Dessert. VIP-Pakete bieten eine Premium-Grillplatte mit ausgewählten Fleischstücken.",
    es: "Todos los paquetes incluyen una cena completa con 7 variedades de meze turco, tu elección de plato principal (pescado, pollo o albóndigas) y postre. Los paquetes VIP incluyen una parrillada mixta premium.",
    ru: "Все пакеты включают полный ужин с 7 видами турецких мезе, основное блюдо на выбор (рыба, курица или котлеты) и десерт. VIP-пакеты включают премиальное ассорти гриль.",
    ar: "تشمل جميع الباقات عشاءً كاملاً مع 7 أنواع من المقبلات التركية، واختيارك للطبق الرئيسي (سمك أو دجاج أو كفتة)، وحلوى. تتميز باقات VIP بطبق مشويات فاخر."
  },
  "faq.q2": { en: "Are alcoholic drinks included?", tr: "Alkollü içecekler dahil mi?", de: "Sind alkoholische Getränke inbegriffen?", es: "¿Están incluidas las bebidas alcohólicas?", ru: "Включены ли алкогольные напитки?", ar: "هل المشروبات الكحولية مشمولة؟" },
  "faq.a2": {
    en: "All packages include soft drinks. You can add an unlimited alcohol package for just +€10 per person. This can be arranged during booking on WhatsApp.",
    tr: "Tüm paketlerde alkolsüz içecekler dahildir. Kişi başı sadece +€10 ile sınırsız alkol paketi ekleyebilirsiniz. Bu, WhatsApp üzerinden rezervasyon sırasında ayarlanabilir.",
    de: "Alle Pakete beinhalten Softdrinks. Sie können ein unbegrenztes Alkoholpaket für nur +€10 pro Person hinzufügen.",
    es: "Todos los paquetes incluyen bebidas sin alcohol. Puedes agregar un paquete de alcohol ilimitado por solo +€10 por persona.",
    ru: "Все пакеты включают безалкогольные напитки. Вы можете добавить безлимитный пакет алкоголя всего за +€10 с человека.",
    ar: "جميع الباقات تشمل المشروبات الغازية. يمكنك إضافة باقة مشروبات كحولية غير محدودة مقابل +€10 فقط للشخص."
  },
  "faq.q3": { en: "Where does the cruise depart and return?", tr: "Tur nereden kalkıp nereye dönüyor?", de: "Wo fährt die Kreuzfahrt ab und zurück?", es: "¿De dónde sale y regresa el crucero?", ru: "Откуда отправляется и возвращается круиз?", ar: "من أين تغادر وتعود الرحلة؟" },
  "faq.a3": {
    en: "Cruises depart from Kabataş pier at 20:45 and return to the same location at 23:30 (3.5-hour cruise). The exact meeting point will be shared on WhatsApp after booking.",
    tr: "Turlar Kabataş iskelesinden saat 20:45'te kalkar ve aynı noktaya 23:30'da döner (3.5 saatlik tur). Tam buluşma noktası rezervasyon sonrası WhatsApp'tan paylaşılır.",
    de: "Kreuzfahrten starten vom Pier Kabataş um 20:45 Uhr und kehren um 23:30 Uhr zurück (3,5-stündige Fahrt). Der genaue Treffpunkt wird nach der Buchung über WhatsApp geteilt.",
    es: "Los cruceros salen del muelle de Kabataş a las 20:45 y regresan al mismo lugar a las 23:30 (crucero de 3.5 horas). El punto de encuentro exacto se compartirá por WhatsApp.",
    ru: "Круизы отправляются от причала Кабаташ в 20:45 и возвращаются в 23:30 (3,5 часа). Точное место встречи будет отправлено в WhatsApp после бронирования.",
    ar: "تغادر الرحلات من رصيف كاباتاش الساعة 20:45 وتعود إلى نفس الموقع الساعة 23:30 (رحلة 3.5 ساعات). سيتم مشاركة نقطة الالتقاء عبر واتساب."
  },
  "faq.q4": { en: "What route does the cruise take?", tr: "Tur hangi rotayı izliyor?", de: "Welche Route nimmt die Kreuzfahrt?", es: "¿Qué ruta toma el crucero?", ru: "Каким маршрутом идёт круиз?", ar: "ما هو مسار الرحلة؟" },
  "faq.a4": {
    en: "The cruise sails along the Bosphorus Strait, passing by iconic landmarks including Dolmabahçe Palace, Bosphorus Bridge, Maiden's Tower, Ortaköy Mosque, and more.",
    tr: "Tur, Boğaz boyunca ilerleyerek Dolmabahçe Sarayı, Boğaz Köprüsü, Kız Kulesi, Ortaköy Camii ve daha birçok ikonik yapıyı geçer.",
    de: "Die Kreuzfahrt fährt entlang der Bosporus-Straße, vorbei an Dolmabahçe-Palast, Bosporus-Brücke, Mädchenturm und Ortaköy-Moschee.",
    es: "El crucero navega por el estrecho del Bósforo, pasando por monumentos icónicos como el Palacio de Dolmabahçe, el Puente del Bósforo y la Torre de la Doncella.",
    ru: "Круиз проходит по проливу Босфор, мимо дворца Долмабахче, Босфорского моста, Девичьей башни, мечети Ортакёй и других достопримечательностей.",
    ar: "تبحر الرحلة عبر مضيق البوسفور، مروراً بمعالم أيقونية مثل قصر دولمة بهجة وجسر البوسفور وبرج الفتاة ومسجد أورتاكوي."
  },
  "faq.q5": { en: "How close are the tables to the stage?", tr: "Masalar sahneye ne kadar yakın?", de: "Wie nah sind die Tische an der Bühne?", es: "¿Qué tan cerca están las mesas del escenario?", ru: "Как близко столы к сцене?", ar: "ما مدى قرب الطاولات من المسرح؟" },
  "faq.a5": {
    en: "It depends on your package. Premium tables are closer to the stage, and VIP tables have the best location. Let us know on WhatsApp and we'll arrange the best spot.",
    tr: "Paketinize bağlıdır. Premium masalar sahneye daha yakındır ve VIP masalar en iyi konumdadır. WhatsApp'tan bize bildirin, en uygun yeri ayarlayalım.",
    de: "Es hängt von Ihrem Paket ab. Premium-Tische sind näher an der Bühne, VIP-Tische haben die beste Lage.",
    es: "Depende de tu paquete. Las mesas Premium están más cerca del escenario y las VIP tienen la mejor ubicación.",
    ru: "Зависит от пакета. Премиум-столы ближе к сцене, а VIP-столы расположены в лучшем месте.",
    ar: "يعتمد على باقتك. طاولات بريميوم أقرب إلى المسرح، وطاولات VIP في أفضل موقع."
  },
  "faq.q6": { en: "What kind of shows and entertainment are there?", tr: "Ne tür şovlar ve eğlence var?", de: "Welche Shows und Unterhaltung gibt es?", es: "¿Qué tipo de shows y entretenimiento hay?", ru: "Какие шоу и развлечения?", ar: "ما نوع العروض والترفيه؟" },
  "faq.a6": {
    en: "The cruise features live singer performances, a traditional Turkish Night show with folk dances, belly dance, and DJ music. Entertainment runs until 21:00.",
    tr: "Turda canlı şarkıcı performansları, geleneksel halk danslarıyla Türk Gecesi şovu, oryantal dans ve DJ müziği bulunur. Eğlence 21:00'e kadar devam eder.",
    de: "Die Kreuzfahrt bietet Live-Sänger, eine traditionelle türkische Nachtshow mit Volkstänzen, Bauchtanz und DJ-Musik. Unterhaltung bis 21:00 Uhr.",
    es: "El crucero incluye cantante en vivo, show nocturno turco con danzas folclóricas, danza del vientre y música DJ. Entretenimiento hasta las 21:00.",
    ru: "На круизе — живой певец, традиционное турецкое шоу с народными танцами, танец живота и DJ-музыка. Развлечения до 21:00.",
    ar: "تتميز الرحلة بعروض مغني حي، عرض الليلة التركية التقليدية مع الرقصات الشعبية، رقص شرقي وموسيقى DJ. الترفيه حتى 21:00."
  },
  "faq.q7": { en: "Can I book for tonight?", tr: "Bu gece için rezervasyon yapabilir miyim?", de: "Kann ich für heute Nacht buchen?", es: "¿Puedo reservar para esta noche?", ru: "Можно забронировать на сегодня?", ar: "هل يمكنني الحجز لهذه الليلة؟" },
  "faq.a7": {
    en: "Yes! Same-day bookings are available until 20:00 (1 hour before departure). Just message us on WhatsApp.",
    tr: "Evet! Aynı gün rezervasyonlar 20:00'ye kadar (kalkıştan 1 saat önce) mümkündür. WhatsApp'tan bize yazın.",
    de: "Ja! Buchungen am selben Tag sind bis 20:00 Uhr möglich (1 Stunde vor Abfahrt). Schreiben Sie uns auf WhatsApp.",
    es: "¡Sí! Las reservas del mismo día están disponibles hasta las 20:00. Solo escríbenos en WhatsApp.",
    ru: "Да! Бронирование в тот же день доступно до 20:00. Просто напишите нам в WhatsApp.",
    ar: "نعم! الحجوزات في نفس اليوم متاحة حتى الساعة 20:00. فقط راسلنا عبر واتساب."
  },
  "faq.q8": { en: "How do I pay?", tr: "Nasıl ödeme yapacağım?", de: "Wie bezahle ich?", es: "¿Cómo pago?", ru: "Как оплатить?", ar: "كيف أدفع؟" },
  "faq.a8": {
    en: "No prepayment is required. You pay directly on the boat. We accept cash (EUR, TRY, USD) and credit cards.",
    tr: "Ön ödeme gerekmez. Ödemenizi doğrudan teknede yaparsınız. Nakit (EUR, TRY, USD) ve kredi kartı kabul ediyoruz.",
    de: "Keine Vorauszahlung erforderlich. Sie zahlen direkt auf dem Boot. Wir akzeptieren Bargeld (EUR, TRY, USD) und Kreditkarten.",
    es: "No se requiere prepago. Pagas directamente en el barco. Aceptamos efectivo (EUR, TRY, USD) y tarjetas.",
    ru: "Предоплата не требуется. Вы платите на борту. Принимаем наличные (EUR, TRY, USD) и карты.",
    ar: "لا يلزم الدفع المسبق. تدفع مباشرة على القارب. نقبل النقد (يورو، ليرة، دولار) وبطاقات الائتمان."
  },
  "faq.q9": { en: "Is hotel transfer available?", tr: "Otel transferi var mı?", de: "Ist ein Hoteltransfer verfügbar?", es: "¿Hay traslado al hotel?", ru: "Есть ли трансфер из отеля?", ar: "هل يتوفر نقل من الفندق؟" },
  "faq.a9": {
    en: "Yes! Hotel transfer is available for +€15 per person, including pickup and drop-off.",
    tr: "Evet! Otel transferi kişi başı +€15 ile mümkündür. Alım ve bırakım dahildir.",
    de: "Ja! Hoteltransfer ist für +€15 pro Person verfügbar, inklusive Abholung und Rückfahrt.",
    es: "¡Sí! El traslado al hotel está disponible por +€15 por persona, incluyendo recogida y devolución.",
    ru: "Да! Трансфер из отеля доступен за +€15 с человека, включая подачу и возврат.",
    ar: "نعم! خدمة النقل من الفندق متاحة مقابل +€15 للشخص، شاملة الاستلام والتوصيل."
  },
  "faq.q10": { en: "Can I cancel or change my reservation?", tr: "Rezervasyonumu iptal edebilir veya değiştirebilir miyim?", de: "Kann ich meine Reservierung stornieren oder ändern?", es: "¿Puedo cancelar o cambiar mi reserva?", ru: "Могу ли я отменить бронирование?", ar: "هل يمكنني إلغاء أو تغيير حجزي؟" },
  "faq.a10": {
    en: "Yes. Free cancellation up to 2 hours before the cruise (until 19:00). Since there's no prepayment, the process is hassle-free.",
    tr: "Evet. Turdan 2 saat öncesine kadar (19:00) ücretsiz iptal mümkündür. Ön ödeme olmadığı için süreç zahmetsizdir.",
    de: "Ja. Kostenlose Stornierung bis 2 Stunden vor der Kreuzfahrt (bis 19:00 Uhr). Da keine Vorauszahlung erfolgt, ist der Prozess unkompliziert.",
    es: "Sí. Cancelación gratuita hasta 2 horas antes del crucero (hasta las 19:00). Sin prepago, el proceso es sencillo.",
    ru: "Да. Бесплатная отмена за 2 часа до круиза (до 19:00). Поскольку предоплаты нет, процесс простой.",
    ar: "نعم. إلغاء مجاني حتى ساعتين قبل الرحلة (حتى 19:00). بما أنه لا يوجد دفع مسبق، فالعملية سهلة."
  },
  "faq.q11": { en: "Where is the exact meeting point?", tr: "Tam buluşma noktası neresi?", de: "Wo ist der genaue Treffpunkt?", es: "¿Dónde es el punto de encuentro exacto?", ru: "Где точное место встречи?", ar: "أين نقطة الالتقاء بالضبط؟" },
  "faq.a11": {
    en: "After your reservation is confirmed, we'll send you the exact location with a Google Maps pin on WhatsApp.",
    tr: "Rezervasyonunuz onaylandıktan sonra WhatsApp üzerinden Google Maps pini ile tam konumu göndereceğiz.",
    de: "Nach Bestätigung Ihrer Reservierung senden wir Ihnen den genauen Standort mit einem Google Maps Pin über WhatsApp.",
    es: "Después de confirmar tu reserva, te enviaremos la ubicación exacta con un pin de Google Maps por WhatsApp.",
    ru: "После подтверждения бронирования мы отправим вам точное местоположение с пином Google Maps в WhatsApp.",
    ar: "بعد تأكيد حجزك، سنرسل لك الموقع الدقيق مع دبوس خرائط جوجل عبر واتساب."
  },

  // ========== BOTTOM CTA ==========
  "cta.title": {
    en: "Ready to Book Your Bosphorus Dinner Cruise?", tr: "Boğaz Yemekli Turunuzu Rezerve Etmeye Hazır mısınız?",
    de: "Bereit, Ihre Bosporus-Dinner-Kreuzfahrt zu buchen?", es: "¿Listo para reservar tu crucero con cena por el Bósforo?",
    ru: "Готовы забронировать ужин-круиз по Босфору?", ar: "هل أنت مستعد لحجز رحلة عشاء على البوسفور؟"
  },
  "cta.desc": {
    en: "Chat with us now to check availability and reserve your spot in minutes. No prepayment needed.",
    tr: "Müsaitliği kontrol etmek ve yerinizi dakikalar içinde ayırtmak için şimdi bizimle sohbet edin. Ön ödeme gerekmez.",
    de: "Chatten Sie jetzt mit uns, um die Verfügbarkeit zu prüfen und Ihren Platz in Minuten zu reservieren. Keine Vorauszahlung nötig.",
    es: "Chatea con nosotros ahora para verificar disponibilidad y reservar tu lugar en minutos. Sin prepago.",
    ru: "Напишите нам сейчас, чтобы проверить наличие и забронировать место за минуты. Без предоплаты.",
    ar: "تواصل معنا الآن للتحقق من التوفر واحجز مكانك في دقائق. بدون دفع مسبق."
  },
  "cta.today": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Wählen Sie Ihre Kreuzfahrt",
    es: "Elige tu crucero", ru: "Выберите свой круиз", ar: "اختر رحلتك"
  },

  // ========== FOOTER ==========
  "footer.desc": {
    en: "We help you find the best cruise experience on the Bosphorus.",
    tr: "Boğaz'da en iyi tur deneyimini bulmanıza yardımcı oluyoruz.",
    de: "Wir helfen Ihnen, das beste Kreuzfahrterlebnis am Bosporus zu finden.",
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
    en: "Cancellation Policy", tr: "İptal Politikası", de: "Stornierungsrichtlinien", es: "Política de Cancelación",
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
    en: "Bosphorus Daytime Cruise", tr: "Boğaz Gündüz Turu", de: "Bosporus-Tageskreuzfahrt", es: "Crucero Diurno por el Bósforo",
    ru: "Дневной круиз по Босфору", ar: "رحلة البوسفور النهارية"
  },
  "footer.sunsetCruise": {
    en: "Bosphorus Sunset Cruise", tr: "Boğaz Günbatımı Turu", de: "Bosporus-Sonnenuntergangskreuzfahrt", es: "Crucero al Atardecer por el Bósforo",
    ru: "Круиз по Босфору на закате", ar: "رحلة غروب البوسفور"
  },
  "footer.dinnerCruise": {
    en: "Bosphorus Dinner Cruise", tr: "Boğaz Yemekli Turu", de: "Bosporus-Dinner-Kreuzfahrt", es: "Crucero con Cena por el Bósforo",
    ru: "Ужин-круиз по Босфору", ar: "رحلة عشاء البوسفور"
  },
  "footer.tonightCruise": {
    en: "Bosphorus Cruise Tonight", tr: "Bu Gece Boğaz Turu", de: "Bosporus-Kreuzfahrt Heute Abend", es: "Crucero por el Bósforo Esta Noche",
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

  // ========== BOOKING COUNT ==========
  "booking.count": {
    en: "guests booked for tonight — join them!",
    tr: "kişi bu akşam için rezervasyon yaptı — siz de katılın!",
    de: "Gäste haben für heute Nacht gebucht — schließen Sie sich an!",
    es: "personas reservaron para esta noche — ¡únete!",
    ru: "гостей забронировали на сегодня — присоединяйтесь!",
    ar: "ضيف حجزوا لهذه الليلة — انضم إليهم!"
  },

  // ========== COUNTDOWN ==========
  "cd.closes": {
    en: "Tonight's booking closes in:", tr: "Bu geceki rezervasyon kapanışına:",
    de: "Buchungsschluss heute Nacht in:", es: "La reserva de esta noche cierra en:",
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
    de: "Die heutige Kreuzfahrt ist ausgebucht", es: "El crucero de esta noche está completo",
    ru: "Круиз на сегодня полностью забронирован", ar: "رحلة الليلة محجوزة بالكامل"
  },
  "cd.tomorrow": {
    en: "Tomorrow's cruise available — book now!", tr: "Yarınki tur müsait — hemen rezervasyon yapın!",
    de: "Morgen verfügbar — jetzt buchen!", es: "Crucero de mañana disponible — ¡reserva ahora!",
    ru: "Круиз на завтра доступен — бронируйте сейчас!", ar: "رحلة الغد متاحة — احجز الآن!"
  },

  // ========== WHATSAPP ==========
  "wa.tooltip": {
    en: "Chat with us!", tr: "Bize yazın!", de: "Chatten Sie mit uns!",
    es: "¡Escríbenos!", ru: "Напишите нам!", ar: "تواصل معنا!"
  },

  // ========== TOUR PANELS ==========
  "tour.daytime.label": {
    en: "Sightseeing Tour", tr: "Gezi Turu", de: "Besichtigungstour", es: "Tour Turístico", ru: "Обзорная экскурсия", ar: "جولة سياحية"
  },
  "tour.daytime.title1": { en: "Daytime", tr: "Gündüz", de: "Tageszeit", es: "Diurno", ru: "Дневной", ar: "نهاري" },
  "tour.daytime.title2": { en: "Cruise", tr: "Turu", de: "Kreuzfahrt", es: "Crucero", ru: "Круиз", ar: "رحلة" },
  "tour.daytime.desc": {
    en: "Discover Istanbul's iconic landmarks under the daylight. Sail past the Maiden's Tower, Dolmabahce Palace, and Bosphorus Bridge.",
    tr: "Gün ışığında İstanbul'un ikonik simgelerini keşfedin. Kız Kulesi, Dolmabahçe Sarayı ve Boğaz Köprüsü'nün önünden geçin.",
    de: "Entdecken Sie Istanbuls Wahrzeichen bei Tageslicht. Fahren Sie am Leanderturm, Dolmabahçe-Palast und der Bosporus-Brücke vorbei.",
    es: "Descubra los monumentos icónicos de Estambul bajo la luz del día. Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe y el Puente del Bósforo.",
    ru: "Откройте для себя знаковые достопримечательности Стамбула при дневном свете. Проплывите мимо Девичьей башни, дворца Долмабахче и Босфорского моста.",
    ar: "اكتشف معالم إسطنبول الشهيرة في ضوء النهار. أبحر بجوار برج الفتاة وقصر دولمة بهجة وجسر البوسفور."
  },
  "tour.daytime.short": { en: "Day", tr: "Gündüz", de: "Tag", es: "Día", ru: "День", ar: "نهار" },
  "tour.sunset.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض"
  },
  "tour.sunset.title1": { en: "Sunset", tr: "Gün Batımı", de: "Sonnenuntergang", es: "Atardecer", ru: "Закат", ar: "غروب" },
  "tour.sunset.title2": { en: "Cruise", tr: "Turu", de: "Kreuzfahrt", es: "Crucero", ru: "Круиз", ar: "رحلة" },
  "tour.sunset.desc": {
    en: "Watch the sun set over the Bosphorus while enjoying dinner and live entertainment. The golden hour on the water is unforgettable.",
    tr: "Yemek ve canlı eğlencenin keyfini çıkarırken Boğaz üzerinde gün batımını izleyin. Suyun üzerindeki altın saat unutulmaz.",
    de: "Beobachten Sie den Sonnenuntergang über dem Bosporus bei Abendessen und Live-Unterhaltung. Die goldene Stunde auf dem Wasser ist unvergesslich.",
    es: "Vea la puesta de sol sobre el Bósforo mientras disfruta de la cena y entretenimiento en vivo. La hora dorada en el agua es inolvidable.",
    ru: "Наблюдайте за закатом над Босфором, наслаждаясь ужином и живыми шоу. Золотой час на воде незабываем.",
    ar: "شاهد غروب الشمس فوق البوسفور أثناء الاستمتاع بالعشاء والترفيه الحي. الساعة الذهبية على الماء لا تُنسى."
  },
  "tour.sunset.short": { en: "Sunset", tr: "Gün Batımı", de: "Sunset", es: "Atardecer", ru: "Закат", ar: "غروب" },
  "tour.dinner.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض"
  },
  "tour.dinner.title1": { en: "Dinner", tr: "Yemekli", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء" },
  "tour.dinner.title2": { en: "Cruise", tr: "Turu", de: "Kreuzfahrt", es: "Crucero", ru: "Круиз", ar: "رحلة" },
  "tour.dinner.desc": {
    en: "The ultimate Bosphorus night. 3-course dinner, live entertainment, and Istanbul's illuminated skyline from the water.",
    tr: "Boğaz'ın en özel gecesi. 3 çeşit yemek, canlı eğlence ve suyun üzerinden İstanbul'un ışıklı silüeti.",
    de: "Die ultimative Bosporus-Nacht. 3-Gänge-Menü, Live-Unterhaltung und Istanbuls beleuchtete Skyline vom Wasser aus.",
    es: "La noche definitiva del Bósforo. Cena de 3 platos, entretenimiento en vivo y el horizonte iluminado de Estambul desde el agua.",
    ru: "Лучшая ночь на Босфоре. 3-блюдное меню, живые шоу и освещённая панорама Стамбула с воды.",
    ar: "ليلة البوسفور المثالية. عشاء من 3 أطباق، ترفيه حي، وأفق إسطنبول المضيء من الماء."
  },
  "tour.dinner.short": { en: "Dinner", tr: "Gece", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء" },
  "tour.popular": { en: "Popular", tr: "Popüler", de: "Beliebt", es: "Popular", ru: "Популярный", ar: "شائع" },
  "tour.explore": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & Buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز"
  },

  // ========== BOATS SECTION ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Wählen Sie Ihre Kreuzfahrt", es: "Elija su Crucero", ru: "Выберите круиз", ar: "اختر رحلتك"
  },
  "boats.title": {
    en: "Choose Your Experience", tr: "Deneyimini Seç", de: "Wählen Sie Ihr Erlebnis", es: "Elija su Experiencia", ru: "Выберите впечатление", ar: "اختر تجربتك"
  },
  "boats.desc": {
    en: "Three ways to experience the Bosphorus. Pick the one that fits your mood.", tr: "Boğaz'ı deneyimlemenin üç yolu. Ruh halinize uygun olanı seçin.", de: "Drei Wege, den Bosporus zu erleben. Wählen Sie den passenden.", es: "Tres formas de vivir el Bósforo. Elija la que se adapte a su estado de ánimo.", ru: "Три способа познакомиться с Босфором. Выберите подходящий.", ar: "ثلاث طرق لتجربة البوسفور. اختر ما يناسب مزاجك."
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →", es: "Ver Paquetes →", ru: "Смотреть пакеты →", ar: "عرض الباقات ←"
  },
  "boats.daytime.desc": {
    en: "Scenic Bosphorus sightseeing under the sunlight. Maiden's Tower, palaces, and bridges.", tr: "Gün ışığında Boğaz manzarası. Kız Kulesi, saraylar ve köprüler.", de: "Malerische Bosporus-Besichtigung im Sonnenlicht. Leanderturm, Paläste und Brücken.", es: "Turismo panorámico por el Bósforo bajo la luz del sol. Torre de la Doncella, palacios y puentes.", ru: "Живописная экскурсия по Босфору при дневном свете. Девичья башня, дворцы и мосты.", ar: "مشاهدة معالم البوسفور تحت أشعة الشمس. برج الفتاة والقصور والجسور."
  },
  "boats.sunset.desc": {
    en: "Golden hour dinner cruise with live entertainment as the sun sets over the Bosphorus.", tr: "Boğaz üzerinde gün batımında canlı eğlence eşliğinde yemekli tur.", de: "Abendessen-Kreuzfahrt zur goldenen Stunde mit Live-Unterhaltung bei Sonnenuntergang.", es: "Crucero con cena en la hora dorada con entretenimiento en vivo al atardecer.", ru: "Ужин-круиз в золотой час с живыми шоу на закате над Босфором.", ar: "رحلة عشاء في الساعة الذهبية مع ترفيه حي أثناء غروب الشمس فوق البوسفور."
  },
  "boats.dinner.desc": {
    en: "The ultimate night experience. Dinner, live shows, and Istanbul's illuminated skyline.", tr: "En özel gece deneyimi. Yemek, canlı şovlar ve İstanbul'un ışıklı silüeti.", de: "Das ultimative Nachterlebnis. Abendessen, Live-Shows und Istanbuls beleuchtete Skyline.", es: "La experiencia nocturna definitiva. Cena, shows en vivo y el horizonte iluminado de Estambul.", ru: "Лучший ночной опыт. Ужин, живые шоу и освещённая панорама Стамбула.", ar: "التجربة الليلية المثالية. عشاء وعروض حية وأفق إسطنبول المضيء."
  },

  // ========== BOOKING PANEL ==========
  "booking.selected": {
    en: "selected", tr: "seçili", de: "ausgewählt", es: "seleccionado", ru: "выбран", ar: "محدد"
  },
  "booking.title": {
    en: "Book Your Cruise", tr: "Turunu Rezerve Et", de: "Buchen Sie Ihre Kreuzfahrt",
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
    en: "Child Ages", tr: "Çocuk Yaşları", de: "Alter der Kinder", es: "Edades de los Niños", ru: "Возраст детей", ar: "أعمار الأطفال"
  },
  "booking.childNote": {
    en: "0-3: Free · 3-5: 50% off · 5+: Full price", tr: "0-3: Ücretsiz · 3-5: %50 indirim · 5+: Tam fiyat",
    de: "0-3: Kostenlos · 3-5: 50% Rabatt · 5+: Voller Preis", es: "0-3: Gratis · 3-5: 50% desc. · 5+: Precio completo",
    ru: "0-3: Бесплатно · 3-5: 50% скидка · 5+: Полная цена", ar: "0-3: مجاني · 3-5: خصم 50% · 5+: السعر الكامل"
  },
  "booking.boat": {
    en: "Cruise", tr: "Tekne", de: "Kreuzfahrt", es: "Crucero", ru: "Круиз", ar: "الرحلة"
  },
  "booking.package": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة"
  },
  "booking.extras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Дополнения", ar: "إضافات"
  },
  "booking.drinkLabel": {
    en: "Drink Selection", tr: "İçecek Seçimi", de: "Getränkeauswahl",
    es: "Selección de Bebidas", ru: "Выбор напитков", ar: "اختيار المشروبات"
  },
  "booking.transfer": {
    en: "Hotel Transfer (+€15/person)", tr: "Otel Transferi (+€15/kişi)", de: "Hoteltransfer (+€15/Person)",
    es: "Traslado al Hotel (+€15/persona)", ru: "Трансфер из отеля (+€15/чел.)", ar: "نقل من الفندق (+€15/شخص)"
  },
  "booking.romantic": {
    en: "Romantic Table (+€25/table)", tr: "Romantik Masa (+€25/masa)", de: "Romantischer Tisch (+€25/Tisch)",
    es: "Mesa Romántica (+€25/mesa)", ru: "Романтический стол (+€25/стол)", ar: "طاولة رومانسية (+€25/طاولة)"
  },
  "booking.total": {
    en: "Total", tr: "Toplam", de: "Gesamt", es: "Total", ru: "Итого", ar: "الإجمالي"
  },
  "booking.payNote": {
    en: "Pay on the boat — No prepayment", tr: "Teknede ödeyin — Ön ödeme yok",
    de: "Bezahlung auf dem Boot — Keine Vorauszahlung", es: "Paga en el barco — Sin prepago",
    ru: "Оплата на борту — без предоплаты", ar: "ادفع على القارب — بدون دفع مسبق"
  },
  "booking.cta": {
    en: "Book via WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Über WhatsApp buchen",
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
    en: "3.5-hour Bosphorus night cruise", tr: "3.5 saat Boğaz gece turu", de: "3,5-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3,5 horas por el Bósforo", ru: "3,5-часовой ночной круиз по Босфору", ar: "رحلة ليلية في البوسفور لمدة 3.5 ساعة"
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
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu", de: "Live-Unterhaltung & Türkische Nachtshow", es: "Entretenimiento en vivo y show nocturno turco", ru: "Живое шоу и турецкая ночь", ar: "ترفيه حي وعرض ليلة تركية"
  },
  "pkg.feat.tablePrem": {
    en: "Private table — stage view or window seat", tr: "Özel masa — sahne görüşü veya pencere kenarı", de: "Privater Tisch — Bühnensicht oder Fensterplatz", es: "Mesa privada — vista al escenario o ventana", ru: "Отдельный столик — вид на сцену или у окна", ar: "طاولة خاصة — إطلالة على المسرح أو مقعد بجانب النافذة"
  },
  "pkg.feat.dinnerVip": {
    en: "VIP menu — premium meze, mixed grill & special dishes", tr: "VIP menü — premium meze, karışık ızgara & özel yemekler", de: "VIP-Menü — Premium-Meze, Mixed Grill & Spezialgerichte", es: "Menú VIP — meze premium, parrillada mixta y platos especiales", ru: "VIP-меню — премиум мезе, микс-гриль и спецблюда", ar: "قائمة VIP — مقبلات فاخرة، مشويات مشكلة وأطباق خاصة"
  },
  "pkg.feat.tableVip": {
    en: "Private VIP table — best location", tr: "Özel VIP masa — en iyi konum", de: "Privater VIP-Tisch — beste Lage", es: "Mesa VIP privada — mejor ubicación", ru: "VIP-столик — лучшее расположение", ar: "طاولة VIP خاصة — أفضل موقع"
  },
  "pkg.feat.priority": {
    en: "Priority boarding & VIP service", tr: "Öncelikli biniş & VIP hizmet", de: "Bevorzugtes Boarding & VIP-Service", es: "Embarque prioritario y servicio VIP", ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود وخدمة VIP"
  },

  // ========== EXTRAS ==========
  "pkg.extras": {
    en: "Optional extras:", tr: "Opsiyonel ekstralar:", de: "Optionale Extras:", es: "Extras opcionales:", ru: "Дополнительные опции:", ar: "إضافات اختيارية:"
  },
  "pkg.badge.alcohol": {
    en: "Alcohol €10", tr: "Alkol €10", de: "Alkohol €10", es: "Alcohol €10", ru: "Алкоголь €10", ar: "كحول €10"
  },
  "pkg.badge.transfer": {
    en: "Transfer €15", tr: "Transfer €15", de: "Transfer €15", es: "Traslado €15", ru: "Трансфер €15", ar: "نقل €15"
  },
  "pkg.badge.romantic": {
    en: "Romantic €25", tr: "Romantik €25", de: "Romantisch €25", es: "Romántico €25", ru: "Романтика €25", ar: "رومانسي €25"
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
  "booking.alcoholBtn": {
    en: "Alcohol +€10", tr: "Alkollü +€10", de: "Alkohol +€10", es: "Alcohol +€10", ru: "Алкоголь +€10", ar: "كحول +€10"
  },
  "booking.drinkWarn": {
    en: "⚠ Please select a drink option", tr: "⚠ Lütfen içecek seçimi yapın", de: "⚠ Bitte Getränkeoption wählen", es: "⚠ Seleccione una opción de bebida", ru: "⚠ Выберите вариант напитков", ar: "⚠ يرجى اختيار خيار المشروبات"
  },
  "booking.softInfo": {
    en: "All guests get unlimited soft drinks", tr: "Tüm misafirler sınırsız alkolsüz içecek alır", de: "Alle Gäste erhalten unbegrenzte Softdrinks", es: "Todos los huéspedes reciben refrescos ilimitados", ru: "Все гости получат безлимитные безалкогольные напитки", ar: "جميع الضيوف يحصلون على مشروبات غازية غير محدودة"
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
  }
};
