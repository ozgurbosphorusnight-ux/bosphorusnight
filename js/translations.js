// ========== TRANSLATIONS ==========
// Yeni dil eklemek için: aşağıdaki her key'e yeni dil kodunu ekle
// Örnek: "hero.badge": { en: "...", tr: "...", de: "...", YENI_DIL: "..." }

const LANGUAGES = {
  en: { flag: 'gb', label: 'English', dir: 'ltr' },
  tr: { flag: 'tr', label: 'Türkçe', dir: 'ltr' },
  de: { flag: 'de', label: 'Deutsch', dir: 'ltr' },
  es: { flag: 'es', label: 'Español', dir: 'ltr' },
  ru: { flag: 'ru', label: 'Русский', dir: 'ltr' },
  ar: { flag: 'sa', label: 'العربية', dir: 'rtl' },
  fa: { flag: 'ir', label: 'فارسی', dir: 'rtl' },
  fr: { flag: 'fr', label: 'Français', dir: 'ltr' },
  it: { flag: 'it', label: 'Italiano', dir: 'ltr' },
  zh: { flag: 'cn', label: '中文', dir: 'ltr' },
  id: { flag: 'id', label: 'Bahasa Indonesia', dir: 'ltr' },
  ms: { flag: 'my', label: 'Bahasa Melayu', dir: 'ltr' },
  pl: { flag: 'pl', label: 'Polski', dir: 'ltr' },
  bg: { flag: 'bg', label: 'Български', dir: 'ltr' },
  ro: { flag: 'ro', label: 'Română', dir: 'ltr' }
};

const T = {
  // ========== NAV ==========
  "nav.home": {
    en: "Home", tr: "Ana Sayfa", de: "Start", es: "Inicio", ru: "Главная", ar: "الرئيسية",
    fa: "خانه", fr: "Accueil", it: "Home", zh: "首页", id: "Beranda", ms: "Utama", pl: "Strona główna", bg: "Начало", ro: "Acasă"
  },
  "nav.cruises": {
    en: "Cruises", tr: "Turlar", de: "Touren", es: "Cruceros", ru: "Круизы", ar: "الرحلات",
    fa: "تورها", fr: "Croisières", it: "Crociere", zh: "游船", id: "Pelayaran", ms: "Pelayaran", pl: "Rejsy", bg: "Круизи", ro: "Croaziere"
  },
  "nav.gallery": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور",
    fa: "گالری", fr: "Galerie", it: "Galleria", zh: "画廊", id: "Galeri", ms: "Galeri", pl: "Galeria", bg: "Галерия", ro: "Galerie"
  },
  "nav.faq": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة",
    fa: "سؤالات متداول", fr: "FAQ", it: "FAQ", zh: "常见问题", id: "FAQ", ms: "Soalan Lazim", pl: "FAQ", bg: "Въпроси", ro: "Întrebări"
  },
  "nav.book": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز",
    fa: "مشاهده و رزرو", fr: "Explorer & réserver", it: "Esplora e Prenota", zh: "查看与预订", id: "Jelajahi & Pesan", ms: "Terokai & Tempah", pl: "Przeglądaj i rezerwuj", bg: "Разгледайте и резервирайте", ro: "Explorați și Rezervați"
  },

  // ========== HERO ==========
  "hero.badge": {
    en: "Istanbul's Premium Cruise Experience", tr: "İstanbul'un Premium Cruise Deneyimi",
    de: "Istanbuls Premium-Bootstour", es: "La Experiencia Premium de Crucero en Estambul",
    ru: "Премиальный круиз по Стамбулу", ar: "تجربة الرحلات البحرية الفاخرة في إسطنبول",
    fa: "تجربه ممتاز تور دریایی استانبول", fr: "L'expérience de croisière premium d'Istanbul", it: "L'esperienza di crociera premium di Istanbul", zh: "伊斯坦布尔高端游船体验", id: "Pengalaman Pelayaran Premium Istanbul", ms: "Pengalaman Pelayaran Premium Istanbul", pl: "Premium rejs w Stambule", bg: "Премиум круиз в Истанбул", ro: "Experiența de Croazieră Premium a Istanbulului"
  },
  "hero.title1": {
    en: "Luxury Bosphorus", tr: "Lüks Yemekli", de: "Luxus-Bosporus", es: "Lujoso Bósforo",
    ru: "Роскошный Босфор", ar: "البوسفور الفاخر",
    fa: "تور لوکس بسفر", fr: "Croisière dîner de luxe", it: "Crociera di Lusso", zh: "豪华博斯普鲁斯", id: "Pelayaran Makan Malam", ms: "Pelayaran Makan Malam", pl: "Luksusowy rejs z kolacją", bg: "Луксозен круиз", ro: "Croazieră de Lux pe Bosfor"
  },
  "hero.title2": {
    en: "Dinner Cruise", tr: "Boğaz Turu", de: "Abendfahrt", es: "Crucero con Cena",
    ru: "Ужин на круизе", ar: "رحلة عشاء بحرية",
    fa: "شام در کشتی", fr: "sur le Bosphore", it: "con Cena sul Bosforo", zh: "晚宴游船", id: "Bosphorus Mewah", ms: "Bosphorus Mewah", pl: "po Bosforze", bg: "с вечеря по Босфора", ro: "cu Cină"
  },
  "hero.subtitle": {
    en: "Live entertainment · Dinner · Bosphorus night views · 7/24 instant support",
    tr: "Canlı eğlence · Yemek · Boğaz gece manzarası · 7/24 anlık destek",
    de: "Live-Show · Abendessen · Bosporus bei Nacht · 24/7 Support",
    es: "Entretenimiento en vivo · Cena · Vistas nocturnas del Bósforo · Soporte 24/7",
    ru: "Живые шоу · Ужин · Ночной Босфор · Поддержка 24/7",
    ar: "ترفيه حي · عشاء · مناظر البوسفور الليلية · دعم على مدار الساعة",
    fa: "سرگرمی زنده · شام · مناظر شبانه بسفر · پشتیبانی فوری ۲۴/۷", fr: "Divertissement en direct · Dîner · Vues nocturnes du Bosphore · Assistance instantanée 7j/7 24h/24", it: "Intrattenimento dal vivo · Cena · Vedute notturne del Bosforo · Supporto istantaneo 7/24", zh: "现场娱乐 · 晚宴 · 博斯普鲁斯夜景 · 7/24即时支持", id: "Hiburan langsung · Makan malam · Pemandangan malam Bosphorus · Dukungan instan 7/24", ms: "Hiburan langsung · Makan malam · Pemandangan malam Bosphorus · Sokongan segera 7/24", pl: "Rozrywka na żywo · Kolacja · Nocne widoki Bosforu · Wsparcie 24/7", bg: "Забавление на живо · Вечеря · Нощни гледки по Босфора · Поддръжка 24/7", ro: "Divertisment live · Cină · Priveliști nocturne ale Bosforului · Asistență instant 7/24"
  },
  "hero.noprepay": {
    en: "No prepayment — Pay on the boat", tr: "Ön ödeme yok — Teknede ödeyin",
    de: "Keine Vorauszahlung — Zahlung an Bord", es: "Sin prepago — Paga en el barco",
    ru: "Без предоплаты — оплата на борту", ar: "بدون دفع مسبق — ادفع على القارب",
    fa: "بدون پیش‌پرداخت — پرداخت روی کشتی", fr: "Aucun prépaiement — Paiement à bord", it: "Nessun anticipo — Pagamento a bordo", zh: "无需预付——船上付款", id: "Tanpa pembayaran di muka — Bayar di kapal", ms: "Tiada bayaran pendahuluan — Bayar di atas bot", pl: "Bez przedpłaty — płatność na pokładzie", bg: "Без предплащане — плащане на борда", ro: "Fără plată în avans — Plata pe vapor"
  },
  "hero.cta1": {
    en: "Check Availability on WhatsApp", tr: "WhatsApp'tan Müsaitlik Sor",
    de: "Verfügbarkeit per WhatsApp prüfen", es: "Consultar disponibilidad en WhatsApp",
    ru: "Проверить наличие в WhatsApp", ar: "تحقق من التوفر عبر واتساب",
    fa: "بررسی ظرفیت در واتس‌اپ", fr: "Vérifier la disponibilité sur WhatsApp", it: "Verifica disponibilità su WhatsApp", zh: "通过WhatsApp查询余位", id: "Cek Ketersediaan via WhatsApp", ms: "Semak Kekosongan di WhatsApp", pl: "Sprawdź dostępność na WhatsApp", bg: "Проверете наличността в WhatsApp", ro: "Verificați Disponibilitatea pe WhatsApp"
  },
  "hero.cta2": {
    en: "View Cruise", tr: "Turu İncele", de: "Tour ansehen", es: "Ver crucero",
    ru: "Смотреть круиз", ar: "عرض الرحلة",
    fa: "مشاهده تور", fr: "Voir la croisière", it: "Vedi la crociera", zh: "查看游船", id: "Lihat Pelayaran", ms: "Lihat Pelayaran", pl: "Zobacz rejs", bg: "Вижте круиза", ro: "Vedeți Croaziera"
  },
  "hero.departure": {
    en: "Departure from Kabataş · 21:00 – 00:00",
    tr: "Kalkış: Kabataş · 21:00 – 00:00",
    de: "Abfahrt ab Kabataş · 21:00 – 00:00",
    es: "Salida desde Kabataş · 21:00 – 00:00",
    ru: "Отправление: Кабаташ · 21:00 – 00:00",
    ar: "المغادرة من كاباتاش · 21:00 – 00:00",
    fa: "حرکت از کاباتاش · ۲۱:۰۰ – ۰۰:۰۰", fr: "Départ de Kabataş · 21h00 – 00h00", it: "Partenza da Kabataş · 21:00 – 00:00", zh: "卡巴塔什启航 · 21:00 – 00:00", id: "Keberangkatan dari Kabataş · 21:00 – 00:00", ms: "Bertolak dari Kabataş · 21:00 – 00:00", pl: "Wypłynięcie z Kabataş · 21:00 – 00:00", bg: "Отплаване от Кабаташ · 21:00 – 00:00", ro: "Plecare din Kabataș · 21:00 – 00:00"
  },

  // ========== TRUST BAR ==========
  "trust.support": {
    en: "7/24 Instant Support", tr: "7/24 Anlık Destek", de: "24/7 Sofort-Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم فوري على مدار الساعة",
    fa: "پشتیبانی فوری ۲۴/۷", fr: "Assistance instantanée 7j/7 24h/24", it: "Supporto istantaneo 7/24", zh: "7/24即时支持", id: "Dukungan Instan 7/24", ms: "Sokongan Segera 7/24", pl: "Wsparcie 24/7", bg: "Мигновена поддръжка 24/7", ro: "Asistență Instant 7/24"
  },
  "trust.pay": {
    en: "Pay on the Boat", tr: "Teknede Ödeyin", de: "Zahlung an Bord",
    es: "Paga en el barco", ru: "Оплата на борту", ar: "ادفع على القارب",
    fa: "پرداخت روی کشتی", fr: "Paiement à bord", it: "Pagamento a bordo", zh: "船上付款", id: "Bayar di Kapal", ms: "Bayar di Atas Bot", pl: "Płatność na pokładzie", bg: "Плащане на борда", ro: "Plata pe Vapor"
  },
  "trust.withyou": {
    en: "With You Before, During & After", tr: "Öncesinde, Sırasında ve Sonrasında Yanınızdayız",
    de: "Vor, während & nach der Tour",
    es: "Contigo antes, durante y después", ru: "С вами до, во время и после",
    ar: "معك قبل وأثناء وبعد الرحلة",
    fa: "همراه شما پیش، حین و پس از تور", fr: "À vos côtés avant, pendant et après", it: "Con Lei prima, durante e dopo", zh: "行前、行中、行后全程陪伴", id: "Bersama Anda Sebelum, Selama & Sesudah", ms: "Bersama Anda Sebelum, Semasa & Selepas", pl: "Z Państwem przed, w trakcie i po rejsie", bg: "С Вас преди, по време и след това", ro: "Cu Dumneavoastră Înainte, În Timpul și După"
  },
  "trust.sameday": {
    en: "Same-day Booking", tr: "Aynı Gün Rezervasyon", de: "Buchung am gleichen Tag",
    es: "Reserva el mismo día", ru: "Бронирование в тот же день", ar: "حجز في نفس اليوم",
    fa: "رزرو در همان روز", fr: "Réservation le jour même", it: "Prenotazione in giornata", zh: "当日预订", id: "Pemesanan Hari yang Sama", ms: "Tempahan Hari Sama", pl: "Rezerwacja tego samego dnia", bg: "Резервация за същия ден", ro: "Rezervare în Aceeași Zi"
  },

  // ========== BOATS ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunuzu Seçin", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите круиз", ar: "اختر رحلتك",
    fa: "تور خود را انتخاب کنید", fr: "Choisissez votre croisière", it: "Scelga la Sua crociera", zh: "选择您的游船", id: "Pilih Pelayaran Anda", ms: "Pilih Pelayaran Anda", pl: "Wybierz swój rejs", bg: "Изберете Вашия круиз", ro: "Alegeți Croaziera Dumneavoastră"
  },
  "boats.title": {
    en: "Select Your Boat", tr: "Teknenizi Seçin", de: "Boot wählen",
    es: "Selecciona tu barco", ru: "Выберите лодку", ar: "اختر قاربك",
    fa: "تجربه خود را انتخاب کنید", fr: "Choisissez votre expérience", it: "Scelga la Sua esperienza", zh: "选择您的体验", id: "Pilih Pengalaman Anda", ms: "Pilih Pengalaman Anda", pl: "Wybierz swoje doświadczenie", bg: "Изберете Вашето преживяване", ro: "Alegeți Experiența Dumneavoastră"
  },
  "boats.desc": {
    en: "Each vessel offers a unique experience on the Bosphorus. Choose the one that fits your style.",
    tr: "Her tekne Boğaz'da eşsiz bir deneyim sunar. Tarzınıza uygun olanı seçin.",
    de: "Jedes Boot bietet ein besonderes Erlebnis am Bosporus. Wählen Sie Ihren Stil.",
    es: "Cada embarcación ofrece una experiencia única en el Bósforo. Elige la que se adapte a tu estilo.",
    ru: "Каждое судно предлагает уникальный опыт на Босфоре. Выберите то, что подходит вам.",
    ar: "كل قارب يقدم تجربة فريدة على البوسفور. اختر ما يناسب ذوقك.",
    fa: "تجربه‌ای متناسب با حال و هوای خود روی بسفر را انتخاب کنید.", fr: "Choisissez l'expérience qui correspond à votre humeur sur le Bosphore.", it: "Scelga l'esperienza più adatta al Suo umore sul Bosforo.", zh: "挑选最契合您博斯普鲁斯心情的体验。", id: "Pilih pengalaman yang sesuai dengan suasana hati Anda di Bosphorus.", ms: "Pilih pengalaman yang sesuai dengan mood anda di Bosphorus.", pl: "Wybierz doświadczenie, które pasuje do Państwa nastroju nad Bosforem.", bg: "Изберете преживяването, което подхожда на настроението Ви на Босфора.", ro: "Alegeți experiența care se potrivește stării dumneavoastră pe Bosfor."
  },
  "boats.classic": {
    en: "Classic Cruise", tr: "Klasik Tur", de: "Klassische Tour",
    es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية",
    fa: "تور کلاسیک", fr: "Croisière Classique", it: "Crociera Classica", zh: "经典游船", id: "Pelayaran Klasik", ms: "Pelayaran Klasik", pl: "Klasyczny rejs", bg: "Класически круиз", ro: "Croazieră Clasică"
  },
  "boats.classic.desc": {
    en: "A wonderful Bosphorus dinner experience with live entertainment and stunning views.",
    tr: "Canlı eğlence ve muhteşem manzara eşliğinde harika bir Boğaz yemek deneyimi.",
    de: "Ein tolles Bosporus-Dinner mit Live-Show und toller Aussicht.",
    es: "Una maravillosa experiencia de cena en el Bósforo con entretenimiento en vivo y vistas impresionantes.",
    ru: "Прекрасный ужин на Босфоре с живой музыкой и потрясающими видами.",
    ar: "تجربة عشاء رائعة على البوسفور مع ترفيه حي ومناظر خلابة.",
    fa: "تجربه‌ای دل‌نشین از شام در بسفر همراه با سرگرمی زنده و مناظر خیره‌کننده.", fr: "Un merveilleux dîner sur le Bosphore avec divertissement en direct et vues éblouissantes.", it: "Una splendida cena sul Bosforo con intrattenimento dal vivo e vedute mozzafiato.", zh: "一场美妙的博斯普鲁斯晚宴体验，配有现场娱乐与令人惊叹的景色。", id: "Pengalaman makan malam Bosphorus yang menakjubkan dengan hiburan langsung dan pemandangan yang memukau.", ms: "Pengalaman makan malam Bosphorus yang indah dengan hiburan langsung dan pemandangan mengagumkan.", pl: "Wspaniałe doświadczenie kolacji nad Bosforem z rozrywką na żywo i zapierającymi dech w piersiach widokami.", bg: "Прекрасна вечеря по Босфора със забавление на живо и зашеметяващи гледки.", ro: "O minunată experiență de cină pe Bosfor cu divertisment live și priveliști uimitoare."
  },
  "boats.premium": {
    en: "Premium Cruise", tr: "Premium Cruise", de: "Premium-Tour",
    es: "Crucero Premium", ru: "Премиум круиз", ar: "رحلة مميزة",
    fa: "تور پرمیوم", fr: "Croisière Premium", it: "Crociera Premium", zh: "高级游船", id: "Pelayaran Premium", ms: "Pelayaran Premium", pl: "Rejs premium", bg: "Премиум круиз", ro: "Croazieră Premium"
  },
  "boats.premium.desc": {
    en: "Enhanced comfort with better seating, premium service, and a more exclusive atmosphere.",
    tr: "Daha iyi oturma düzeni, premium hizmet ve daha özel bir atmosfer.",
    de: "Mehr Komfort, bessere Plätze, Premium-Service und exklusive Atmosphäre.",
    es: "Mayor comodidad con mejores asientos, servicio premium y una atmósfera más exclusiva.",
    ru: "Повышенный комфорт с лучшими местами, премиум-сервисом и эксклюзивной атмосферой.",
    ar: "راحة محسّنة مع مقاعد أفضل وخدمة مميزة وأجواء حصرية.",
    fa: "راحتی بیشتر با جایگاه بهتر، خدمات ممتاز و فضایی اختصاصی‌تر.", fr: "Confort rehaussé avec un meilleur placement, un service premium et une atmosphère plus exclusive.", it: "Maggior comfort con posti a sedere migliori, servizio premium e un'atmosfera più esclusiva.", zh: "更舒适的体验——更佳座席、优质服务，以及更尊享的氛围。", id: "Kenyamanan yang ditingkatkan dengan tempat duduk lebih baik, layanan premium, dan suasana yang lebih eksklusif.", ms: "Keselesaan ditingkatkan dengan tempat duduk lebih baik, perkhidmatan premium dan suasana lebih eksklusif.", pl: "Podwyższony komfort z lepszymi miejscami, obsługą premium i bardziej ekskluzywną atmosferą.", bg: "Подобрен комфорт с по-добри места, премиум обслужване и по-ексклузивна атмосфера.", ro: "Confort sporit cu locuri mai bune, serviciu premium și o atmosferă mai exclusivistă."
  },
  "boats.luxury": {
    en: "Luxury Yacht", tr: "Lüks Yat", de: "Luxus-Yacht",
    es: "Yate de Lujo", ru: "Люкс яхта", ar: "يخت فاخر",
    fa: "کشتی لوکس", fr: "Yacht de Luxe", it: "Yacht di Lusso", zh: "豪华游艇", id: "Yacht Mewah", ms: "Yacht Mewah", pl: "Jacht luksusowy", bg: "Луксозна яхта", ro: "Iaht de Lux"
  },
  "boats.luxury.desc": {
    en: "The ultimate Bosphorus experience. Intimate setting, top-tier cuisine, and VIP treatment.",
    tr: "En üst düzey Boğaz deneyimi. Özel ortam, birinci sınıf mutfak ve VIP hizmet.",
    de: "Das beste Bosporus-Erlebnis. Exklusive Atmosphäre, Top-Küche und VIP-Service.",
    es: "La experiencia definitiva en el Bósforo. Ambiente íntimo, cocina de primera y trato VIP.",
    ru: "Лучший опыт на Босфоре. Уютная обстановка, кухня высшего уровня и VIP-обслуживание.",
    ar: "التجربة المطلقة على البوسفور. أجواء حميمة ومأكولات راقية ومعاملة VIP.",
    fa: "نهایت تجربه بسفر. فضایی صمیمی، آشپزی درجه‌یک و خدمات VIP.", fr: "L'expérience ultime du Bosphore. Cadre intime, cuisine haut de gamme et traitement VIP.", it: "L'esperienza definitiva sul Bosforo. Ambiente intimo, alta cucina e trattamento VIP.", zh: "终极博斯普鲁斯体验。私密氛围、顶级美食、VIP待遇。", id: "Pengalaman Bosphorus tertinggi. Suasana intim, masakan kelas atas, dan layanan VIP.", ms: "Pengalaman Bosphorus yang paling hebat. Suasana intim, masakan bertaraf tinggi dan layanan VIP.", pl: "Najwyższe doświadczenie Bosforu. Kameralna atmosfera, kuchnia najwyższej klasy i obsługa VIP.", bg: "Върховното преживяване по Босфора. Интимна обстановка, първокласна кухня и VIP обслужване.", ro: "Experiența supremă pe Bosfor. Cadru intim, bucătărie de top și tratament VIP."
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →",
    es: "Ver paquetes →", ru: "Смотреть пакеты →", ar: "← عرض الباقات",
    fa: "مشاهده پکیج‌ها ←", fr: "Voir les forfaits →", it: "Vedi i pacchetti →", zh: "查看套餐 →", id: "Lihat Paket →", ms: "Lihat Pakej →", pl: "Zobacz pakiety →", bg: "Вижте пакетите →", ro: "Vedeți Pachetele →"
  },
  "boats.mostpopular": {
    en: "Most Popular", tr: "En Popüler", de: "Beliebteste",
    es: "Más Popular", ru: "Самый популярный", ar: "الأكثر شعبية",
    fa: "محبوب‌ترین", fr: "Le plus populaire", it: "Più Popolare", zh: "最受欢迎", id: "Paling Populer", ms: "Paling Popular", pl: "Najpopularniejszy", bg: "Най-популярен", ro: "Cel Mai Popular"
  },
  "boats.from": {
    en: "from", tr: "başlangıç", de: "ab", es: "desde", ru: "от", ar: "من",
    fa: "از", fr: "à partir de", it: "da", zh: "起", id: "mulai", ms: "dari", pl: "od", bg: "от", ro: "de la"
  },

  // ========== PACKAGES ==========
  "pkg.choose": {
    en: "Choose Your Package", tr: "Paketinizi Seçin", de: "Paket wählen",
    es: "Elige tu paquete", ru: "Выберите пакет", ar: "اختر باقتك",
    fa: "پکیج خود را انتخاب کنید", fr: "Choisissez votre forfait", it: "Scelga il Suo pacchetto", zh: "选择您的套餐", id: "Pilih Paket Anda", ms: "Pilih Pakej Anda", pl: "Wybierz swój pakiet", bg: "Изберете Вашия пакет", ro: "Alegeți Pachetul Dumneavoastră"
  },
  "pkg.standard": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "عادي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard"
  },
  "pkg.premium": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "مميز",
    fa: "پرمیوم", fr: "Premium", it: "Premium", zh: "高级", id: "Premium", ms: "Premium", pl: "Premium", bg: "Премиум", ro: "Premium"
  },
  "pkg.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP"
  },
  "pkg.bestvalue": {
    en: "Best Value", tr: "En İyi Değer", de: "Bester Wert", es: "Mejor Valor",
    ru: "Лучшее предложение", ar: "أفضل قيمة",
    fa: "بهترین ارزش", fr: "Meilleur rapport qualité-prix", it: "Miglior Rapporto", zh: "最超值", id: "Nilai Terbaik", ms: "Nilai Terbaik", pl: "Najlepsza wartość", bg: "Най-добра стойност", ro: "Cel Mai Bun Raport"
  },
  "pkg.person": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ человек", ar: "/ شخص",
    fa: "/ نفر", fr: "/ personne", it: "/ persona", zh: "／人", id: "/ orang", ms: "/ orang", pl: "/ osoba", bg: "/ човек", ro: "/ persoană"
  },
  "pkg.book": {
    en: "Book on WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen",
    es: "Reservar en WhatsApp", ru: "Забронировать в WhatsApp", ar: "احجز عبر واتساب",
    fa: "رزرو در واتس‌اپ", fr: "Réserver sur WhatsApp", it: "Prenota su WhatsApp", zh: "通过WhatsApp预订", id: "Pesan via WhatsApp", ms: "Tempah di WhatsApp", pl: "Zarezerwuj na WhatsApp", bg: "Резервирайте в WhatsApp", ro: "Rezervați pe WhatsApp"
  },
  "pkg.select": {
    en: "Select & Customize", tr: "Seç & Özelleştir", de: "Wählen & Anpassen",
    es: "Seleccionar & Personalizar", ru: "Выбрать и настроить", ar: "اختر وخصّص",
    fa: "انتخاب و شخصی‌سازی", fr: "Sélectionner & personnaliser", it: "Seleziona e Personalizza", zh: "选择与定制", id: "Pilih & Sesuaikan", ms: "Pilih & Sesuaikan", pl: "Wybierz i dostosuj", bg: "Избор и персонализация", ro: "Selectați și Personalizați"
  },

  // Package features
  "pkg.f.cruise": {
    en: "3-hour Bosphorus night cruise", tr: "3 saatlik Boğaz gece turu",
    de: "3-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3 horas por el Bósforo",
    ru: "3-часовой ночной круиз по Босфору", ar: "رحلة بحرية ليلية لمدة 3 ساعات",
    fa: "تور شبانه سه‌ساعته بسفر", fr: "Croisière nocturne de 3 heures sur le Bosphore", it: "Crociera notturna sul Bosforo di 3 ore", zh: "3小时博斯普鲁斯夜游", id: "Pelayaran malam Bosphorus 3 jam", ms: "Pelayaran malam Bosphorus 3 jam", pl: "3-godzinny nocny rejs po Bosforze", bg: "3-часов нощен круиз по Босфора", ro: "Croazieră nocturnă de 3 ore pe Bosfor"
  },
  "pkg.f.dinner": {
    en: "Dinner — 10 meze + main course + dessert", tr: "Yemek — 10 meze + ana yemek + tatlı",
    de: "Abendessen — 10 Meze + Hauptgericht + Dessert", es: "Cena — 10 meze + plato principal + postre",
    ru: "Ужин — 7 мезе + основное блюдо + десерт", ar: "عشاء — 10 مقبلات + طبق رئيسي + حلوى",
    fa: "شام — ۱۰ نوع مزه + غذای اصلی + دسر", fr: "Dîner — 10 mezzés + plat principal + dessert", it: "Cena — 10 meze + secondo + dolce", zh: "晚宴——10道冷盘+主菜+甜点", id: "Makan malam — 10 meze + menu utama + pencuci mulut", ms: "Makan malam — 10 meze + hidangan utama + pencuci mulut", pl: "Kolacja — 10 mezze + danie główne + deser", bg: "Вечеря — 10 мезета + основно ястие + десерт", ro: "Cină — 10 mezeluri + fel principal + desert"
  },
  "pkg.f.dinner.vip": {
    en: "VIP dinner — mixed grill platter, premium cuts", tr: "VIP yemek — karışık ızgara tabağı, premium etler",
    de: "VIP-Dinner — Mixed Grill, Premium-Fleisch", es: "Cena VIP — parrillada mixta, cortes premium",
    ru: "VIP ужин — ассорти гриль, премиум мясо", ar: "عشاء VIP — طبق مشويات مشكلة، لحوم فاخرة",
    fa: "شام VIP — سینی گریل مخلوط، برش‌های ممتاز", fr: "Dîner VIP — plateau de grillades, pièces premium", it: "Cena VIP — piatto misto alla griglia, tagli premium", zh: "VIP晚宴——混合烤肉拼盘、尊享部位", id: "Makan malam VIP — piring mixed grill, potongan daging premium", ms: "Makan malam VIP — pinggan panggangan campuran, potongan premium", pl: "Kolacja VIP — półmisek mieszany, premium kawałki mięsa", bg: "VIP вечеря — микс грил плато, премиум разфасовки", ro: "Cină VIP — platou mixt la grătar, carne premium"
  },
  "pkg.f.entertainment": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu",
    de: "Live-Show & Türkische Nacht", es: "Entretenimiento en vivo y show de noche turca",
    ru: "Живые шоу и турецкая ночь", ar: "ترفيه حي وعرض الليلة التركية",
    fa: "سرگرمی زنده و نمایش شب ترکی", fr: "Divertissement en direct & soirée turque", it: "Intrattenimento dal vivo e spettacolo turco serale", zh: "现场娱乐与土耳其之夜表演", id: "Hiburan langsung & pertunjukan malam Turki", ms: "Hiburan langsung & persembahan malam Turki", pl: "Rozrywka na żywo i turecki pokaz nocny", bg: "Забавление на живо и турска нощна програма", ro: "Divertisment live și spectacol de seară turcească"
  },
  "pkg.f.seat.standard": {
    en: "Standard seating", tr: "Standart oturma düzeni", de: "Standard-Sitzplatz",
    es: "Asientos estándar", ru: "Стандартные места", ar: "مقاعد عادية",
    fa: "جایگاه استاندارد", fr: "Placement standard", it: "Posti a sedere standard", zh: "标准座席", id: "Tempat duduk standar", ms: "Tempat duduk standard", pl: "Miejsca standardowe", bg: "Стандартни места", ro: "Locuri standard"
  },
  "pkg.f.seat.better": {
    en: "Better seating — closer to stage", tr: "Daha iyi oturma — sahneye yakın",
    de: "Bessere Plätze — näher zur Bühne", es: "Mejores asientos — más cerca del escenario",
    ru: "Лучшие места — ближе к сцене", ar: "مقاعد أفضل — أقرب إلى المسرح",
    fa: "جایگاه بهتر — نزدیک‌تر به صحنه", fr: "Meilleur placement — plus près de la scène", it: "Posti a sedere migliori — più vicino al palco", zh: "更佳座席——靠近舞台", id: "Tempat duduk lebih baik — lebih dekat ke panggung", ms: "Tempat duduk lebih baik — lebih dekat ke pentas", pl: "Lepsze miejsca — bliżej sceny", bg: "По-добри места — по-близо до сцената", ro: "Locuri mai bune — mai aproape de scenă"
  },
  "pkg.f.seat.premium": {
    en: "Premium table — best location", tr: "Premium masa — en iyi konum",
    de: "Premium-Tisch — beste Lage", es: "Mesa premium — mejor ubicación",
    ru: "Премиум стол — лучшее расположение", ar: "طاولة مميزة — أفضل موقع",
    fa: "میز ممتاز — بهترین موقعیت", fr: "Table premium — meilleur emplacement", it: "Tavolo premium — miglior posizione", zh: "高级餐桌——最佳位置", id: "Meja premium — lokasi terbaik", ms: "Meja premium — lokasi terbaik", pl: "Stół premium — najlepsza lokalizacja", bg: "Премиум маса — най-доброто място", ro: "Masă premium — cea mai bună locație"
  },
  "pkg.f.softdrinks": {
    en: "Soft drinks included", tr: "Alkolsüz içecekler dahil",
    de: "Softdrinks inklusive", es: "Bebidas sin alcohol incluidas",
    ru: "Безалкогольные напитки включены", ar: "مشروبات غازية مشمولة",
    fa: "نوشیدنی‌های بدون‌الکل شامل می‌شود", fr: "Boissons non alcoolisées incluses", it: "Bevande analcoliche incluse", zh: "含软饮", id: "Minuman ringan termasuk", ms: "Minuman ringan termasuk", pl: "Napoje bezalkoholowe wliczone", bg: "Безалкохолни напитки включени", ro: "Băuturi răcoritoare incluse"
  },
  "pkg.f.vegetarian": {
    en: "Vegetarian menu available", tr: "Vejetaryen menü mevcut",
    de: "Vegetarisches Menü möglich", es: "Menú vegetariano disponible",
    ru: "Вегетарианское меню доступно", ar: "قائمة نباتية متاحة",
    fa: "منوی گیاه‌خواری در دسترس", fr: "Menu végétarien disponible", it: "Menu vegetariano disponibile", zh: "可提供素食菜单", id: "Menu vegetarian tersedia", ms: "Menu vegetarian tersedia", pl: "Menu wegetariańskie dostępne", bg: "Вегетарианско меню при заявка", ro: "Meniu vegetarian disponibil"
  },
  "pkg.f.vip.priority": {
    en: "Priority boarding & VIP treatment", tr: "Öncelikli biniş & VIP hizmet",
    de: "Bevorzugter Einstieg & VIP-Service", es: "Embarque prioritario y trato VIP",
    ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود ومعاملة VIP",
    fa: "سوار شدن با اولویت و خدمات VIP", fr: "Embarquement prioritaire & traitement VIP", it: "Imbarco prioritario e trattamento VIP", zh: "优先登船与VIP待遇", id: "Naik kapal prioritas & layanan VIP", ms: "Keutamaan menaiki bot & layanan VIP", pl: "Priorytetowe wejście na pokład i obsługa VIP", bg: "Приоритетно качване и VIP обслужване", ro: "Îmbarcare prioritară și tratament VIP"
  },
  "pkg.opt.standard": {
    en: "Optional: Alcohol +€{p.unlimited} · Transfer +€{p.transfer} · Romantic table +€{p.romantic}",
    tr: "Opsiyonel: Alkol +€{p.unlimited} · Transfer +€{p.transfer} · Romantik masa +€{p.romantic}",
    de: "Optional: Alkohol +€{p.unlimited} · Transfer +€{p.transfer} · Romantik-Tisch +€{p.romantic}",
    es: "Opcional: Alcohol +€{p.unlimited} · Traslado +€{p.transfer} · Mesa romántica +€{p.romantic}",
    ru: "Опционально: Алкоголь +€{p.unlimited} · Трансфер +€{p.transfer} · Романтический стол +€{p.romantic}",
    ar: "اختياري: مشروبات كحولية +€{p.unlimited} · نقل +€{p.transfer} · طاولة رومانسية +€{p.romantic}",
    fa: "اختیاری: الکل +€{p.unlimited} · ترانسفر +€{p.transfer} · میز رمانتیک +€{p.romantic}", fr: "En option : Alcool +€{p.unlimited} · Transfert +€{p.transfer} · Table romantique +€{p.romantic}", it: "Opzionale: Alcol +€{p.unlimited} · Transfer +€{p.transfer} · Tavolo romantico +€{p.romantic}", zh: "可选：酒水+€{p.unlimited} · 接送+€{p.transfer} · 浪漫餐桌+€{p.romantic}", id: "Opsional: Alkohol +€{p.unlimited} · Antar-jemput +€{p.transfer} · Meja romantis +€{p.romantic}", ms: "Pilihan: Alkohol +€{p.unlimited} · Pemindahan +€{p.transfer} · Meja romantik +€{p.romantic}", pl: "Opcjonalnie: Alkohol +€{p.unlimited} · Transfer +€{p.transfer} · Stół romantyczny +€{p.romantic}", bg: "По избор: Алкохол +€{p.unlimited} · Трансфер +€{p.transfer} · Романтична маса +€{p.romantic}", ro: "Opțional: Alcool +€{p.unlimited} · Transfer +€{p.transfer} · Masă romantică +€{p.romantic}"
  },
  "pkg.opt.vip": {
    en: "Optional: Alcohol +€{p.unlimited} · Transfer +€{p.transfer}",
    tr: "Opsiyonel: Alkol +€{p.unlimited} · Transfer +€{p.transfer}",
    de: "Optional: Alkohol +€{p.unlimited} · Transfer +€{p.transfer}",
    es: "Opcional: Alcohol +€{p.unlimited} · Traslado +€{p.transfer}",
    ru: "Опционально: Алкоголь +€{p.unlimited} · Трансфер +€{p.transfer}",
    ar: "اختياري: مشروبات كحولية +€{p.unlimited} · نقل +€{p.transfer}",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP"
  },
  "pkg.children": {
    en: "Children 0–3: Free · 4–8: 50% off · 9+: Full price · No prepayment required",
    tr: "Çocuklar 0–3: Ücretsiz · 4–8: %50 indirim · 9+: Tam fiyat · Ön ödeme gerekmez",
    de: "Kinder 0–3: Gratis · 4–8: 50% Rabatt · 9+: Vollpreis · Keine Vorauszahlung",
    es: "Niños 0–3: Gratis · 4–8: 50% dto. · 9+: Precio completo · Sin prepago",
    ru: "Дети 0–3: Бесплатно · 4–8: Скидка 50% · 9+: Полная цена · Без предоплаты",
    ar: "الأطفال 0-3: مجاناً · 4-8: خصم 50% · 9+: السعر الكامل · بدون دفع مسبق",
    fa: "کودکان ۰ تا ۳ سال: رایگان · ۴ تا ۸ سال: ۵۰٪ تخفیف · ۹ سال به بالا: قیمت کامل · بدون نیاز به پیش‌پرداخت", fr: "Enfants 0-3 ans : gratuit · 4-8 ans : -50 % · 9+ : tarif plein · Aucun prépaiement requis", it: "Bambini 0–3: Gratis · 4–8: 50% di sconto · 9+: Prezzo pieno · Nessun anticipo richiesto", zh: "儿童0–3岁：免费 · 4–8岁：半价 · 9岁以上：全价 · 无需预付", id: "Anak 0–3: Gratis · 4–8: Diskon 50% · 9+: Harga penuh · Tanpa pembayaran di muka", ms: "Kanak-kanak 0–3: Percuma · 4–8: Diskaun 50% · 9+: Harga penuh · Tiada bayaran pendahuluan diperlukan", pl: "Dzieci 0–3: bezpłatnie · 4–8: 50% zniżki · 9+: pełna cena · Bez przedpłaty", bg: "Деца 0–3: безплатно · 4–8: 50% отстъпка · 9+: пълна цена · Без предплащане", ro: "Copii 0–3: Gratuit · 4–8: 50% reducere · 9+: Preț întreg · Fără plată în avans"
  },

  // ========== WHAT'S INCLUDED ==========
  "incl.label": {
    en: "Your Experience", tr: "Deneyiminiz", de: "Ihr Erlebnis",
    es: "Tu Experiencia", ru: "Ваш опыт", ar: "تجربتك",
    fa: "تجربه شما", fr: "Votre expérience", it: "La Sua esperienza", zh: "您的体验", id: "Pengalaman Anda", ms: "Pengalaman Anda", pl: "Państwa doświadczenie", bg: "Вашето преживяване", ro: "Experiența Dumneavoastră"
  },
  "incl.title": {
    en: "What's Included", tr: "Neler Dahil", de: "Was ist inklusive",
    es: "Qué incluye", ru: "Что включено", ar: "ما هو مشمول",
    fa: "آنچه شامل می‌شود", fr: "Ce qui est inclus", it: "Cosa è incluso", zh: "包含内容", id: "Apa yang Termasuk", ms: "Apa yang Termasuk", pl: "Co jest wliczone", bg: "Какво е включено", ro: "Ce Este Inclus"
  },
  "incl.cruise": {
    en: "Bosphorus Night Cruise", tr: "Boğaz Gece Turu", de: "Bosporus-Nachtfahrt",
    es: "Crucero Nocturno por el Bósforo", ru: "Ночной круиз по Босфору", ar: "رحلة بحرية ليلية",
    fa: "تور شبانه بسفر", fr: "Croisière nocturne sur le Bosphore", it: "Crociera notturna sul Bosforo", zh: "博斯普鲁斯夜游", id: "Pelayaran Malam Bosphorus", ms: "Pelayaran Malam Bosphorus", pl: "Nocny rejs po Bosforze", bg: "Нощен круиз по Босфора", ro: "Croazieră Nocturnă pe Bosfor"
  },
  "incl.cruise.desc": {
    en: "3-hour cruise with iconic Istanbul views", tr: "İstanbul'un ikonik manzaralarıyla 3 saatlik tur",
    de: "3-Stunden-Fahrt mit Blick auf Istanbul", es: "Crucero de 3 horas con vistas icónicas de Estambul",
    ru: "3-часовой круиз с видами Стамбула", ar: "رحلة 3 ساعات مع مناظر إسطنبول الأيقونية",
    fa: "تور سه‌ساعته با مناظر نمادین استانبول", fr: "Croisière de 3 heures avec des vues iconiques d'Istanbul", it: "Crociera di 3 ore con vedute iconiche di Istanbul", zh: "3小时游船，饱览伊斯坦布尔标志性景色", id: "Pelayaran 3 jam dengan pemandangan ikonik Istanbul", ms: "Pelayaran 3 jam dengan pemandangan ikonik Istanbul", pl: "3-godzinny rejs z kultowymi widokami Stambułu", bg: "3-часов круиз с емблематични гледки на Истанбул", ro: "Croazieră de 3 ore cu priveliști iconice ale Istanbulului"
  },
  "incl.dinner": {
    en: "Full Dinner Service", tr: "Tam Yemek Servisi", de: "Abendessen komplett",
    es: "Servicio completo de cena", ru: "Полный ужин", ar: "خدمة عشاء كاملة",
    fa: "سرویس کامل شام", fr: "Service de dîner complet", it: "Servizio cena completo", zh: "完整晚宴服务", id: "Layanan Makan Malam Lengkap", ms: "Perkhidmatan Makan Malam Penuh", pl: "Pełna obsługa kolacyjna", bg: "Пълна вечеря", ro: "Serviciu Complet de Cină"
  },
  "incl.dinner.desc": {
    en: "10 meze varieties, main course & dessert", tr: "10 çeşit meze, ana yemek & tatlı",
    de: "10 Meze-Sorten, Hauptgang & Dessert", es: "10 variedades de meze, plato principal y postre",
    ru: "10 видов мезе, основное блюдо и десерт", ar: "10 أنواع مقبلات، طبق رئيسي وحلوى",
    fa: "۱۰ نوع مزه، غذای اصلی و دسر", fr: "10 variétés de mezzés, plat principal & dessert", it: "10 varietà di meze, secondo e dolce", zh: "10道冷盘、主菜与甜点", id: "10 jenis meze, menu utama & pencuci mulut", ms: "10 jenis meze, hidangan utama & pencuci mulut", pl: "10 rodzajów mezze, danie główne i deser", bg: "10 вида мезета, основно ястие и десерт", ro: "10 sortimente de mezeluri, fel principal și desert"
  },
  "incl.entertainment": {
    en: "Live Entertainment", tr: "Canlı Eğlence", de: "Live-Unterhaltung",
    es: "Entretenimiento en Vivo", ru: "Живые шоу", ar: "ترفيه حي",
    fa: "سرگرمی زنده", fr: "Divertissement en direct", it: "Intrattenimento dal vivo", zh: "现场娱乐", id: "Hiburan Langsung", ms: "Hiburan Langsung", pl: "Rozrywka na żywo", bg: "Забавление на живо", ro: "Divertisment Live"
  },
  "incl.entertainment.desc": {
    en: "Live singer, DJ & Turkish night dances", tr: "Canlı şarkıcı, DJ & Türk gecesi dansları",
    de: "Live-Sänger, DJ & türkische Tänze", es: "Cantante en vivo, DJ y danzas turcas",
    ru: "Живой певец, DJ и турецкие танцы", ar: "مغني حي، DJ ورقصات تركية",
    fa: "خواننده زنده، دی‌جی و رقص‌های شب ترکی", fr: "Chanteur en direct, DJ & danses de la soirée turque", it: "Cantante dal vivo, DJ e danze della serata turca", zh: "现场歌手、DJ与土耳其之夜歌舞", id: "Penyanyi langsung, DJ & tarian malam Turki", ms: "Penyanyi langsung, DJ & tarian malam Turki", pl: "Śpiewak na żywo, DJ i tureckie tańce nocne", bg: "Певец на живо, DJ и турски нощни танци", ro: "Cântăreț live, DJ și dansuri de seară turcească"
  },
  "incl.transfer": {
    en: "Hotel Transfer", tr: "Otel Transferi", de: "Hoteltransfer",
    es: "Traslado al Hotel", ru: "Трансфер из отеля", ar: "نقل من الفندق",
    fa: "ترانسفر هتل", fr: "Transfert d'hôtel", it: "Transfer dall'hotel", zh: "酒店接送", id: "Antar-jemput Hotel", ms: "Pemindahan Hotel", pl: "Transfer z hotelu", bg: "Хотелски трансфер", ro: "Transfer de la Hotel"
  },
  "incl.transfer.desc": {
    en: "Optional pickup & drop-off from your hotel", tr: "Opsiyonel otel alım & bırakım",
    de: "Optionale Abholung & Rückfahrt zum Hotel", es: "Recogida y devolución opcional desde tu hotel",
    ru: "Опциональный трансфер из/в отель", ar: "خدمة نقل اختيارية من وإلى فندقك",
    fa: "رفت و برگشت اختیاری از هتل شما", fr: "Prise en charge et dépose optionnelles depuis votre hôtel", it: "Prelievo e riconsegna opzionali dal Suo hotel", zh: "可选酒店往返接送服务", id: "Penjemputan & pengantaran opsional dari hotel Anda", ms: "Perkhidmatan ambil & hantar pilihan dari hotel anda", pl: "Opcjonalny odbiór i odwiezienie z hotelu", bg: "Опционално вземане и връщане от хотела", ro: "Preluare și ducere opțională de la hotelul dumneavoastră"
  },
  "incl.support": {
    en: "7/24 Support", tr: "7/24 Destek", de: "24/7 Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم على مدار الساعة",
    fa: "پشتیبانی ۲۴/۷", fr: "Assistance 7j/7 24h/24", it: "Supporto 7/24", zh: "7/24支持", id: "Dukungan 7/24", ms: "Sokongan 7/24", pl: "Wsparcie 24/7", bg: "Поддръжка 24/7", ro: "Asistență 7/24"
  },
  "incl.support.desc": {
    en: "Instant support anytime", tr: "Her an anlık destek",
    de: "Sofortiger Support rund um die Uhr", es: "Soporte instantáneo en cualquier momento",
    ru: "Мгновенная поддержка в любое время", ar: "دعم فوري في أي وقت",
    fa: "پشتیبانی فوری در هر زمان", fr: "Assistance instantanée à tout moment", it: "Supporto istantaneo in qualsiasi momento", zh: "随时即时支持", id: "Dukungan instan kapan saja", ms: "Sokongan segera pada bila-bila masa", pl: "Natychmiastowe wsparcie o każdej porze", bg: "Мигновена поддръжка по всяко време", ro: "Asistență instant oricând"
  },
  "incl.special": {
    en: "Special Occasions", tr: "Özel Günler", de: "Besondere Anlässe",
    es: "Ocasiones Especiales", ru: "Особые случаи", ar: "مناسبات خاصة",
    fa: "مناسبت‌های ویژه", fr: "Occasions spéciales", it: "Occasioni speciali", zh: "特别场合", id: "Acara Spesial", ms: "Majlis Istimewa", pl: "Specjalne okazje", bg: "Специални поводи", ro: "Ocazii Speciale"
  },
  "incl.special.desc": {
    en: "Romantic table & birthday celebrations", tr: "Romantik masa & doğum günü kutlamaları",
    de: "Romantik-Tisch & Geburtstagsfeiern", es: "Mesa romántica y celebraciones de cumpleaños",
    ru: "Романтический стол и празднование дня рождения", ar: "طاولة رومانسية واحتفالات أعياد الميلاد",
    fa: "میز رمانتیک و جشن تولد", fr: "Table romantique & célébrations d'anniversaire", it: "Tavolo romantico e celebrazioni di compleanno", zh: "浪漫餐桌与生日庆祝", id: "Meja romantis & perayaan ulang tahun", ms: "Meja romantik & sambutan hari jadi", pl: "Stół romantyczny i uroczystości urodzinowe", bg: "Романтична маса и празнуване на рожден ден", ro: "Masă romantică și sărbători de zi de naștere"
  },
  "incl.cruise.detail": {
    en: "Sail past the Maiden's Tower, Dolmabahçe Palace, Bosphorus Bridge, Beylerbeyi Palace, Ortaköy Mosque, and Rumeli Fortress. Departs from Kabataş at 21:00, returns between 23:30 and 00:00.",
    tr: "Kız Kulesi, Dolmabahçe Sarayı, Boğaz Köprüsü, Beylerbeyi Sarayı, Ortaköy Camii ve Rumeli Hisarı'nın önünden geçin. Kabataş'tan 21:00'te kalkar, 23:30 / 00:00 arası döner.",
    de: "Vorbei am Leanderturm, Dolmabahçe-Palast, Bosporus-Brücke, Beylerbeyi-Palast, Ortaköy-Moschee und Rumeli-Festung. Abfahrt 21:00, Rückkehr zwischen 23:30 und 00:00.",
    es: "Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe, el Puente del Bósforo, el Palacio de Beylerbeyi, la Mezquita de Ortaköy y la Fortaleza de Rumeli. Sale a las 21:00, regresa entre las 23:30 y las 00:00.",
    ru: "Проплывите мимо Девичьей башни, дворца Долмабахче, Босфорского моста, дворца Бейлербейи, мечети Ортакёй и крепости Румели. Отправление в 21:00, возвращение между 23:30 и 00:00.",
    ar: "أبحر بجوار برج الفتاة، قصر دولمة بهجة، جسر البوسفور، قصر بيلربيي، مسجد أورتاكوي، وقلعة روملي. المغادرة 21:00، العودة بين 23:30 و 00:00.",
    fa: "از کنار برج دختر، کاخ دلمه‌باغچه، پل بسفر، کاخ بی‌لربه‌یی، مسجد اورتاکوی و قلعه روم‌ایلی عبور می‌کنید. ساعت ۲۱:۰۰ از کاباتاش حرکت می‌کند و بین ۲۳:۳۰ تا ۰۰:۰۰ بازمی‌گردد.", fr: "Naviguez devant la Tour de Léandre, le palais de Dolmabahçe, le pont du Bosphore, le palais de Beylerbeyi, la mosquée d'Ortaköy et la forteresse de Rumeli. Départ de Kabataş à 21h00, retour entre 23h30 et 00h00.", it: "Navighi accanto alla Torre della Fanciulla, al Palazzo Dolmabahçe, al Ponte del Bosforo, al Palazzo Beylerbeyi, alla Moschea di Ortaköy e al Rumeli Hisarı. Parte da Kabataş alle 21:00 e rientra tra le 23:30 e le 00:00.", zh: "驶过少女塔、多尔玛巴切宫、博斯普鲁斯大桥、贝伊勒尔贝伊宫、奥尔塔科伊清真寺与鲁梅利堡垒。21:00从卡巴塔什启航，23:30至00:00之间返航。", id: "Berlayar melewati Menara Gadis, Istana Dolmabahçe, Jembatan Bosphorus, Istana Beylerbeyi, Masjid Ortaköy, dan Benteng Rumeli. Berangkat dari Kabataş pukul 21:00, kembali antara 23:30 dan 00:00.", ms: "Belayar melepasi Menara Maiden, Istana Dolmabahçe, Jambatan Bosphorus, Istana Beylerbeyi, Masjid Ortaköy dan Kubu Rumeli. Bertolak dari Kabataş pada 21:00, kembali antara 23:30 dan 00:00.", pl: "Płyń obok Wieży Panny, Pałacu Dolmabahçe, Mostu Bosforskiego, Pałacu Beylerbeyi, Meczetu Ortaköy i Twierdzy Rumeli Hisarı. Wypłynięcie z Kabataş o 21:00, powrót między 23:30 a 00:00.", bg: "Плавайте покрай Кулата на девойката, двореца Долмабахче, моста на Босфора, двореца Бейлербей, джамията Ортакьой и Румелийската крепост. Отплаване от Кабаташ в 21:00 ч., връщане между 23:30 и 00:00 ч.", ro: "Navigați pe lângă Turnul Fecioarei, Palatul Dolmabahçe, Podul Bosfor, Palatul Beylerbeyi, Moscheea Ortaköy și Fortăreața Rumeli. Pleacă din Kabataș la 21:00, se întoarce între 23:30 și 00:00."
  },
  "incl.dinner.detail": {
    en: "10 types of meze for Standard (15+ for VIP), choice of salmon/sea bass/chicken/meatball main course, and dessert with ice cream. Vegetarian menu available. VIP packages include rib-eye and filet mignon options, plus table near the stage.",
    tr: "Standard'ta 10 çeşit meze (VIP'te 15+), somon/çupra/tavuk/köfte ana yemek seçeneği ve dondurmalı pasta. Vejetaryen menü mevcuttur. VIP paketlerde antrikot ve biftek seçenekleri ile sahneye yakın masa dahildir.",
    de: "10 Meze-Sorten Standard (15+ für VIP), Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte) und Dessert mit Eis. Vegetarisches Menü verfügbar. VIP-Pakete enthalten Rib-Eye/Filet und Tisch nahe der Bühne.",
    es: "10 tipos de meze Standard (15+ para VIP), elección de plato principal (salmón/lubina/pollo/albóndigas) y postre con helado. Menú vegetariano disponible. Los paquetes VIP incluyen rib-eye y solomillo, y mesa cerca del escenario.",
    ru: "10 видов мезе для Standard (15+ для VIP), выбор горячего (лосось/сибас/курица/котлеты) и десерт с мороженым. Вегетарианское меню доступно. VIP-пакеты включают рибай и филе, столик у сцены.",
    ar: "10 أنواع مقبلات للباقة الأساسية (15+ للـVIP)، اختيار طبق رئيسي (سلمون/قاروص/دجاج/كفتة) وحلوى مع آيس كريم. قائمة نباتية متوفرة. باقات VIP تشمل ريب آي وفيليه، وطاولة قريبة من المسرح.",
    fa: "۱۰ نوع مزه در پکیج استاندارد (۱۵+ در VIP)، انتخاب غذای اصلی بین سالمون/هامور/مرغ/کوفته و دسر با بستنی. منوی گیاه‌خواری در دسترس است. پکیج‌های VIP شامل گزینه‌های راسته و فیله گوساله و نیز میز نزدیک به صحنه می‌شود.", fr: "10 variétés de mezzés pour la Standard (15+ pour la VIP), choix de plat principal (saumon/bar/poulet/köfte) et dessert avec glace. Menu végétarien disponible. Les forfaits VIP incluent l'entrecôte et le filet mignon, plus une table près de la scène.", it: "10 varietà di meze per lo Standard (15+ per il VIP), scelta di secondo tra salmone/branzino/pollo/köfte, e dolce con gelato. Menu vegetariano disponibile. I pacchetti VIP includono opzioni di costata e filetto di manzo, più tavolo vicino al palco.", zh: "标准版10道冷盘（VIP 15+道），主菜可选三文鱼/鲈鱼/鸡肉/肉丸，冰淇淋蛋糕甜点。可提供素食菜单。VIP套餐含肋眼与牛里脊选项，并安排靠近舞台的餐桌。", id: "10 jenis meze untuk Standar (15+ untuk VIP), pilihan menu utama salmon/sea bass/ayam/köfte, dan pencuci mulut dengan es krim. Menu vegetarian tersedia. Paket VIP termasuk pilihan rib-eye dan filet mignon, plus meja dekat panggung.", ms: "10 jenis meze untuk Standard (15+ untuk VIP), pilihan hidangan utama salmon/sea bass/ayam/köfte, dan pencuci mulut dengan aiskrim. Menu vegetarian tersedia. Pakej VIP merangkumi pilihan rib-eye dan fillet mignon, serta meja berdekatan pentas.", pl: "10 rodzajów mezze w Standard (15+ w VIP), wybór dania głównego (łosoś/dorada/kurczak/kotlety) i deser z lodami. Menu wegetariańskie dostępne. Pakiety VIP zawierają opcje antrykotu i polędwicy wołowej oraz stół w pobliżu sceny.", bg: "10 вида мезета за Стандарт (15+ за VIP), избор на основно ястие (сьомга/лаврак/пиле/кюфте) и десерт със сладолед. Вегетарианско меню при заявка. VIP пакетите включват варианти с антрекот и телешко бонфиле, плюс маса близо до сцената.", ro: "10 tipuri de mezeluri pentru Standard (15+ pentru VIP), alegere de fel principal (somon/biban de mare/pui/chiftele) și desert cu înghețată. Meniu vegetarian disponibil. Pachetele VIP includ opțiuni de antricot și mușchi de vită, plus masă aproape de scenă."
  },
  "incl.entertainment.detail": {
    en: "Live singer performances, traditional Turkish night show with folk dances, belly dance, and DJ music. Entertainment continues uninterrupted until the end of the cruise.",
    tr: "Canlı şarkıcı performansları, halk dansları ve oryantal dans ile geleneksel Türk gecesi şovu ve DJ müziği. Eğlence tur sonuna kadar kesintisiz devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstanz, Bauchtanz und DJ. Unterhaltung bis zum Ende der Tour ohne Unterbrechung.",
    es: "Actuaciones de cantante en vivo, show nocturno turco tradicional con danzas folclóricas, danza del vientre y música DJ. El entretenimiento continúa sin interrupción hasta el final del crucero.",
    ru: "Живой певец, традиционное турецкое ночное шоу с народными танцами, танец живота и DJ-музыка. Развлечения продолжаются без перерыва до конца круиза.",
    ar: "عروض مغني حي، عرض ليلة تركية تقليدية مع رقصات شعبية، رقص شرقي وموسيقى DJ. يستمر الترفيه دون انقطاع حتى نهاية الرحلة.",
    fa: "اجرای خواننده زنده، نمایش سنتی شب ترکی با رقص‌های محلی، رقص شرقی و موسیقی دی‌جی. سرگرمی تا پایان تور بدون وقفه ادامه دارد.", fr: "Performances de chanteur en direct, soirée turque traditionnelle avec danses folkloriques, danse orientale et musique DJ. Le divertissement se poursuit sans interruption jusqu'à la fin de la croisière.", it: "Esibizioni di cantanti dal vivo, spettacolo tradizionale della serata turca con danze folkloristiche, danza orientale e musica DJ. L'intrattenimento continua senza interruzioni fino alla fine della crociera.", zh: "现场歌手表演、传统土耳其之夜表演含民族舞、肚皮舞与DJ音乐。娱乐节目不间断持续至游船结束。", id: "Pertunjukan penyanyi langsung, pertunjukan malam Turki tradisional dengan tarian rakyat, tari oriental, dan musik DJ. Hiburan berlanjut tanpa henti hingga akhir pelayaran.", ms: "Persembahan penyanyi langsung, persembahan malam Turki tradisional dengan tarian rakyat, tarian oryantal dan muzik DJ. Hiburan berterusan tanpa henti sehingga akhir pelayaran.", pl: "Występy śpiewaka na żywo, tradycyjny turecki pokaz nocny z tańcami ludowymi, tańcem brzucha i muzyką DJ-a. Rozrywka trwa nieprzerwanie do końca rejsu.", bg: "Певец на живо, традиционна турска нощна програма с фолклорни танци, танц на корема и DJ музика. Забавлението продължава без прекъсване до края на круиза.", ro: "Reprezentații live de cântăreț, spectacol tradițional de seară turcească cu dansuri populare, dans oriental și muzică DJ. Divertismentul continuă neîntrerupt până la sfârșitul croazierei."
  },
  "incl.transfer.detail": {
    en: "Round-trip hotel pickup and drop-off available from Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy and Beyoğlu areas. Available as an add-on when booking. Please share your hotel location with us.",
    tr: "Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu bize bildirin.",
    de: "Hin- und Rücktransfer ab Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy und Beyoğlu. Als Zusatz buchbar. Bitte teilen Sie uns Ihren Hotelstandort mit.",
    es: "Recogida y devolución al hotel disponible desde Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy y Beyoğlu. Disponible como complemento. Por favor, comparta la ubicación de su hotel con nosotros.",
    ru: "Трансфер из/в отель доступен из районов Бешикташ, Сютлюдже, Сиркеджи, Топкапы, Таксим, Эминёню, Кягытхане, Фатих, Лалели, Султанахмет, Ортакёй и Бейоглу. Доступен как дополнение при бронировании. Пожалуйста, сообщите нам расположение вашего отеля.",
    ar: "خدمة نقل ذهاب وعودة متاحة من مناطق بشكتاش، سوتلوجه، سيركجي، طوبكابي، تقسيم، إمينونو، كاغيتهانه، فاتح، لاليلي، السلطان أحمد، أورتاكوي وبيوغلو. متاحة كإضافة عند الحجز. يرجى مشاركة موقع فندقك معنا.",
    fa: "ترانسفر رفت و برگشت از هتل در مناطق بشیکتاش، سوتلوجه، سیرکجی، توپ‌کاپی، تکسیم، اِمینونو، کاغیت‌هانه، فاتح، لَلِه‌لی، سلطان‌احمد، اورتاکوی و بی‌اوغلو ارائه می‌شود. در زمان رزرو به‌عنوان افزودنی انتخاب کنید. لطفاً آدرس هتل خود را با ما به اشتراک بگذارید.", fr: "Prise en charge et dépose aller-retour depuis l'hôtel disponibles depuis Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy et Beyoğlu. Disponible en option lors de la réservation. Merci de nous indiquer l'adresse de votre hôtel.", it: "Prelievo e riconsegna andata e ritorno dall'hotel disponibili da Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy e Beyoğlu. Disponibile come extra durante la prenotazione. La preghiamo di condividere con noi la posizione del Suo hotel.", zh: "可从贝西克塔什、苏特卢杰、锡尔凯吉、托普卡珀、塔克西姆、埃米诺努、卡厄特哈内、法蒂赫、拉莱利、苏丹艾哈迈德、奥尔塔科伊与贝伊奥卢区提供往返酒店接送。预订时可作为附加项选择。请与我们分享您的酒店位置。", id: "Penjemputan dan pengantaran hotel pulang-pergi tersedia dari kawasan Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu. Tersedia sebagai tambahan saat pemesanan. Silakan bagikan lokasi hotel Anda kepada kami.", ms: "Perkhidmatan ambil dan hantar hotel pergi balik tersedia dari kawasan Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu. Tersedia sebagai tambahan semasa tempahan. Sila kongsi lokasi hotel anda dengan kami.", pl: "Dostępny odbiór i odwiezienie z hotelu w obie strony z dzielnic: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy i Beyoğlu. Dostępne jako dodatek przy rezerwacji. Prosimy podać lokalizację hotelu.", bg: "Двупосочно вземане и връщане от хотела е достъпно от районите Бешикташ, Сютлюдже, Сиркеджи, Топкапъ, Таксим, Еминьоню, Кааатхане, Фатих, Лалели, Султанахмет, Ортакьой и Бейоглу. Налично като добавка при резервация. Моля, споделете с нас локацията на хотела Ви.", ro: "Preluare și ducere dus-întors de la hotel disponibilă din zonele Beșiktaș, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy și Beyoğlu. Disponibil ca supliment la rezervare. Vă rugăm să împărtășiți locația hotelului dumneavoastră cu noi."
  },
  "incl.support.detail": {
    en: "We're with you before, during, and after your cruise. Message or call anytime — we respond instantly, 7 days a week, 24 hours a day.",
    tr: "Turunuzun öncesinde, sırasında ve sonrasında yanınızdayız. Yazın veya arayın — 7/24 anında cevap veriyoruz.",
    de: "Wir sind vor, während und nach der Tour für Sie da. Schreiben oder anrufen — wir antworten sofort, 7 Tage die Woche, 24 Stunden am Tag.",
    es: "Estamos contigo antes, durante y después de tu crucero. Escribe o llama — respondemos al instante, los 7 días de la semana, las 24 horas.",
    ru: "Мы с вами до, во время и после круиза. Пишите или звоните — отвечаем мгновенно, 7 дней в неделю, 24 часа в сутки.",
    ar: "نحن معك قبل وأثناء وبعد رحلتك. راسل أو اتصل — نرد فورًا على مدار الساعة طوال أيام الأسبوع.",
    fa: "پیش، حین و پس از تور همراه شما هستیم. در هر زمان پیام دهید یا تماس بگیرید — ۷ روز هفته، ۲۴ ساعته فوراً پاسخ می‌دهیم.", fr: "Nous sommes à vos côtés avant, pendant et après votre croisière. Écrivez ou appelez à tout moment — nous répondons instantanément, 7 jours sur 7, 24 heures sur 24.", it: "Siamo con Lei prima, durante e dopo la Sua crociera. Ci scriva o ci chiami in qualsiasi momento — rispondiamo all'istante, 7 giorni su 7, 24 ore al giorno.", zh: "我们在您游船之前、期间与之后全程陪伴。随时来信或致电——我们每周7天、每天24小时即时回应。", id: "Kami bersama Anda sebelum, selama, dan setelah pelayaran. Kirim pesan atau telepon kapan saja — kami merespons secara instan, 7 hari seminggu, 24 jam sehari.", ms: "Kami bersama anda sebelum, semasa dan selepas pelayaran. Hantar mesej atau telefon pada bila-bila masa — kami balas serta-merta, 7 hari seminggu, 24 jam sehari.", pl: "Jesteśmy z Państwem przed, w trakcie i po rejsie. Prosimy o wiadomość lub telefon w dowolnej chwili — odpowiadamy natychmiast, 7 dni w tygodniu, 24 godziny na dobę.", bg: "С Вас сме преди, по време и след круиза. Пишете или се обадете по всяко време — отговаряме мигновено, 7 дни в седмицата, 24 часа в денонощието.", ro: "Suntem cu dumneavoastră înainte, în timpul și după croazieră. Scrieți sau sunați oricând — răspundem instant, 7 zile pe săptămână, 24 de ore pe zi."
  },
  "incl.special.detail": {
    en: "Celebrating something special? We offer romantic table setup with candles & flowers (+€{p.romantic}) and birthday celebrations. Tell us!",
    tr: "Özel bir gün mü kutluyorsunuz? Mum ve çiçeklerle romantik masa düzeni (+€{p.romantic}) ve doğum günü kutlamaları sunuyoruz. Bize yazın!",
    de: "Etwas Besonderes feiern? Romantik-Tisch mit Kerzen & Blumen (+€{p.romantic}) und Geburtstagsfeiern. Schreiben Sie uns!",
    es: "¿Celebrando algo especial? Ofrecemos mesa romántica con velas y flores (+€{p.romantic}) y celebraciones de cumpleaños. ¡Escríbenos!",
    ru: "Празднуете что-то особенное? Романтический стол со свечами и цветами (+€{p.romantic}) и празднование дня рождения. Напишите нам!",
    ar: "تحتفل بمناسبة خاصة؟ نقدم طاولة رومانسية مع شموع وزهور (+€{p.romantic})، واحتفالات أعياد الميلاد. أخبرنا!",
    fa: "مناسبت ویژه‌ای در پیش دارید؟ چیدمان میز رمانتیک با شمع و گل (+€{p.romantic}) و جشن تولد ارائه می‌کنیم. به ما اطلاع دهید!", fr: "Vous célébrez quelque chose de spécial ? Nous proposons une décoration de table romantique avec bougies & fleurs (+€{p.romantic}) et des célébrations d'anniversaire. Dites-le-nous !", it: "Sta celebrando qualcosa di speciale? Offriamo allestimento romantico del tavolo con candele e fiori (+€{p.romantic}) e celebrazioni di compleanno. Ce lo dica!", zh: "在庆祝特别时刻？我们提供蜡烛鲜花浪漫餐桌布置（+€{p.romantic}）与生日庆祝。请告诉我们！", id: "Merayakan sesuatu yang istimewa? Kami menawarkan pengaturan meja romantis dengan lilin & bunga (+€{p.romantic}) dan perayaan ulang tahun. Beritahu kami!", ms: "Menyambut sesuatu yang istimewa? Kami menawarkan susunan meja romantik dengan lilin & bunga (+€{p.romantic}) dan sambutan hari jadi. Beritahu kami!", pl: "Świętują Państwo coś wyjątkowego? Oferujemy aranżację stolika romantycznego ze świecami i kwiatami (+€{p.romantic}) oraz uroczystości urodzinowe. Proszę nas poinformować!", bg: "Празнувате нещо специално? Предлагаме подреждане на романтична маса със свещи и цветя (+€{p.romantic}) и празнуване на рожден ден. Уведомете ни!", ro: "Sărbătoriți ceva special? Oferim aranjament de masă romantică cu lumânări și flori (+€{p.romantic}) și sărbători de zi de naștere. Spuneți-ne!"
  },

  // ========== GALLERY ==========
  "gallery.label": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور",
    fa: "گالری", fr: "Galerie", it: "Galleria", zh: "画廊", id: "Galeri", ms: "Galeri", pl: "Galeria", bg: "Галерия", ro: "Galerie"
  },
  "gallery.title": {
    en: "Experience the Night", tr: "Geceyi Yaşayın", de: "Die Nacht erleben",
    es: "Vive la Noche", ru: "Почувствуйте ночь", ar: "عش الليلة",
    fa: "تجربه شب", fr: "Vivez la nuit", it: "Viva la notte", zh: "体验这一夜", id: "Rasakan Malamnya", ms: "Alami Malam Itu", pl: "Doświadcz nocy", bg: "Изживейте нощта", ro: "Trăiți Experiența Nopții"
  },

  // ========== REVIEWS ==========
  "reviews.label": {
    en: "Customer Experiences", tr: "Müşteri Deneyimleri", de: "Kundenerfahrungen",
    es: "Experiencias de Clientes", ru: "Отзывы гостей", ar: "تجارب العملاء",
    fa: "تجربه مشتریان", fr: "Expériences clients", it: "Esperienze dei clienti", zh: "宾客体验", id: "Pengalaman Pelanggan", ms: "Pengalaman Pelanggan", pl: "Doświadczenia klientów", bg: "Преживявания на клиенти", ro: "Experiențele Clienților"
  },
  "reviews.title": {
    en: "What Our Guests Say", tr: "Misafirlerimiz Ne Diyor", de: "Was unsere Gäste sagen",
    es: "Lo que dicen nuestros huéspedes", ru: "Что говорят наши гости", ar: "ماذا يقول ضيوفنا",
    fa: "نظر مهمانان ما", fr: "Ce que disent nos invités", it: "Cosa dicono i nostri ospiti", zh: "宾客怎么说", id: "Apa Kata Tamu Kami", ms: "Apa Kata Tetamu Kami", pl: "Co mówią nasi goście", bg: "Какво казват гостите ни", ro: "Ce Spun Oaspeții Noștri"
  },
  "reviews.rating": {
    en: "4.8/5 based on customer feedback", tr: "Müşteri geri bildirimlerine göre 4.8/5",
    de: "4,8/5 basierend auf Gästebewertungen", es: "4.8/5 basado en opiniones de clientes",
    ru: "4.8/5 на основе отзывов", ar: "4.8/5 بناءً على آراء العملاء",
    fa: "۴.۸/۵ بر اساس بازخورد مشتریان", fr: "4,8/5 selon les avis clients", it: "4,8/5 in base al feedback dei clienti", zh: "基于宾客反馈4.8/5", id: "4,8/5 berdasarkan umpan balik pelanggan", ms: "4.8/5 berdasarkan maklum balas pelanggan", pl: "4,8/5 na podstawie opinii klientów", bg: "4,8/5 според отзивите на клиентите", ro: "4,8/5 bazat pe feedback-ul clienților"
  },
  "reviews.all": { en: "All", tr: "Hepsi", de: "Alle", es: "Todos", ru: "Все", ar: "الكل", fa: "همه", fr: "Tous", it: "Tutti", zh: "全部", id: "Semua", ms: "Semua", pl: "Wszystkie", bg: "Всички", ro: "Toate" },
  "reviews.couples": { en: "Couples", tr: "Çiftler", de: "Paare", es: "Parejas", ru: "Пары", ar: "أزواج", fa: "زوج‌ها", fr: "Couples", it: "Coppie", zh: "情侣", id: "Pasangan", ms: "Pasangan", pl: "Pary", bg: "Двойки", ro: "Cupluri" },
  "reviews.groups": { en: "Groups", tr: "Gruplar", de: "Gruppen", es: "Grupos", ru: "Группы", ar: "مجموعات", fa: "گروه‌ها", fr: "Groupes", it: "Gruppi", zh: "团体", id: "Grup", ms: "Kumpulan", pl: "Grupy", bg: "Групи", ro: "Grupuri" },
  "reviews.families": { en: "Families", tr: "Aileler", de: "Familien", es: "Familias", ru: "Семьи", ar: "عائلات", fa: "خانواده‌ها", fr: "Familles", it: "Famiglie", zh: "家庭", id: "Keluarga", ms: "Keluarga", pl: "Rodziny", bg: "Семейства", ro: "Familii" },
  "reviews.solo": { en: "Solo", tr: "Solo", de: "Solo", es: "Solo", ru: "Соло", ar: "فردي", fa: "مسافر تنها", fr: "Solo", it: "Singoli", zh: "独行", id: "Solo", ms: "Bersendirian", pl: "Solo", bg: "Сам", ro: "Individual" },

  // Review texts
  "reviews.r1": {
    en: "\"Chose this bosphorus dinner cruise for our anniversary — unforgettable. Candle-lit mezes, attentive service, the Bosphorus in the background. Best dinner cruise Istanbul has to offer.\"",
    tr: "\"Evlilik yıldönümümüz için bu boğaz yemekli turuna katıldık — unutulmazdı. Mum ışığında meze çeşitleri, ilgili servis, arkada Boğaz. İstanbul'un sunduğu en iyi akşam yemeği tekne turu.\"",
    de: "\"Wir wählten diese Bosphorus Dinner Cruise für unseren Hochzeitstag — unvergesslich. Mezes im Kerzenschein, aufmerksamer Service, der Bosporus im Hintergrund. Die beste Dinner Cruise Istanbul zu bieten hat.\"",
    es: "\"Elegimos este crucero con cena por el Bósforo para nuestro aniversario — inolvidable. Mezes a la luz de las velas, servicio atento, el Bósforo de fondo. El mejor dinner cruise Istanbul puede ofrecer.\"",
    ru: "\"Выбрали этот круиз с ужином по Босфору на годовщину — незабываемо. Мезе при свечах, внимательный сервис, Босфор на заднем плане. Лучший dinner cruise Istanbul может предложить.\"",
    ar: "\"اخترنا رحلة العشاء على البوسفور لذكرى زواجنا — لا تُنسى. مقبلات على ضوء الشموع، خدمة مميزة، البوسفور في الخلفية. أفضل عشاء على البوسفور في إسطنبول.\"",
    fa: "«این تور شام بسفر را برای سالگرد ازدواج خود انتخاب کردیم — فراموش‌نشدنی بود. مزه‌ها زیر نور شمع، خدمات دقیق و بسفر در پس‌زمینه. بهترین تور شام در کشتی که استانبول ارائه می‌دهد.»", fr: "« Nous avons choisi cette croisière dîner sur le Bosphore pour notre anniversaire de mariage — inoubliable. Mezzés aux chandelles, service attentif, le Bosphore en toile de fond. La meilleure croisière dîner qu'Istanbul puisse offrir. »", it: "\"Abbiamo scelto questa crociera con cena sul Bosforo per il nostro anniversario — indimenticabile. Meze a lume di candela, servizio attento, il Bosforo sullo sfondo. La migliore crociera con cena che Istanbul possa offrire.\"", zh: "\"为了周年纪念选择了这趟博斯普鲁斯晚宴游船——难以忘怀。烛光下的冷盘、贴心的服务、背景中的博斯普鲁斯。伊斯坦布尔最好的晚宴游船。\"", id: "\"Memilih pelayaran makan malam Bosphorus ini untuk hari jadi kami — tak terlupakan. Meze dengan cahaya lilin, layanan yang penuh perhatian, Bosphorus di latar belakang. Pelayaran makan malam terbaik yang ditawarkan Istanbul.\"", ms: "\"Memilih pelayaran makan malam Bosphorus ini untuk ulang tahun kami — tidak dapat dilupakan. Meze bercahaya lilin, layanan penuh perhatian, Bosphorus di latar belakang. Pelayaran makan malam terbaik yang ditawarkan oleh Istanbul.\"", pl: "\"Wybraliśmy ten rejs z kolacją po Bosforze na naszą rocznicę — niezapomniane. Mezze przy świecach, uważna obsługa, Bosfor w tle. Najlepszy rejs z kolacją, jaki Stambuł ma do zaoferowania.\"", bg: "\"Избрахме този круиз с вечеря по Босфора за годишнината си — незабравимо. Мезета на свещи, внимателно обслужване, Босфорът на заден план. Най-добрият круиз с вечеря, който Истанбул може да предложи.\"", ro: "\"Am ales această croazieră cu cină pe Bosfor pentru aniversarea noastră — de neuitat. Mezeluri la lumina lumânărilor, serviciu atent, Bosforul în fundal. Cea mai bună croazieră cu cină pe care o oferă Istanbulul.\""
  },
  "reviews.r1.info": {
    en: "Couple · Germany", tr: "Çift · Almanya", de: "Paar · Deutschland",
    es: "Pareja · Alemania", ru: "Пара · Германия", ar: "زوجان · ألمانيا",
    fa: "زوج · آلمان", fr: "Couple · Allemagne", it: "Coppia · Germania", zh: "情侣 · 德国", id: "Pasangan · Jerman", ms: "Pasangan · Jerman", pl: "Para · Niemcy", bg: "Двойка · Германия", ro: "Cuplu · Germania"
  },
  "reviews.r2": {
    en: "\"Booked this Istanbul night tour for the views — it exceeded expectations. Ortaköy Mosque glowing, Dolmabahçe lit up, the bridge turning red. Best bosphorus sightseeing shots of my trip.\"",
    tr: "\"Manzara için bu İstanbul gece turuna katıldım — beklentinin ötesindeydi. Ortaköy Camii parıldıyor, Dolmabahçe aydınlanmış, köprü kırmızıya dönüyor. Yaptığım en iyi boğaz manzarası çekimleri.\"",
    de: "\"Diese Istanbul Night Tour wegen der Aussicht gebucht — sie übertraf die Erwartungen. Die Ortaköy-Moschee leuchtet, Dolmabahçe erhellt, die Brücke in Rot. Beste Bosphorus Sightseeing-Aufnahmen meiner Reise.\"",
    es: "\"Reservé este tour nocturno por Estambul por las vistas — superaron expectativas. Mezquita Ortaköy iluminada, Dolmabahçe brillando, el puente en rojo. Las mejores fotos del crucero por el Bósforo.\"",
    ru: "\"Забронировал этот ночной тур по Стамбулу ради видов — они превзошли ожидания. Мечеть Ортакёй сияет, Долмабахче в огнях, мост становится красным. Лучшие кадры круиза по Босфору.\"",
    ar: "\"حجزت هذه الجولة الليلية في إسطنبول من أجل المناظر — فاقت توقعاتي. مسجد أورتاكوي يتوهج، قصر دولمة بهجة مضاء، الجسر يتحول إلى الأحمر. أفضل لقطات رحلة البوسفور.\"",
    fa: "«این تور شبانه استانبول را برای دیدن مناظر رزرو کردم — فراتر از انتظارم بود. مسجد اورتاکوی درخشان، دلمه‌باغچه نورانی، پل در رنگ قرمز. بهترین عکس‌های بسفر در کل سفرم.»", fr: "« J'ai réservé cette soirée à Istanbul pour les vues — elle a dépassé mes attentes. La mosquée d'Ortaköy illuminée, Dolmabahçe éclairé, le pont passant au rouge. Les meilleures photos du Bosphore de mon voyage. »", it: "\"Ho prenotato questo tour notturno di Istanbul per le vedute — ha superato le aspettative. La Moschea di Ortaköy illuminata, il Palazzo Dolmabahçe illuminato, il ponte che diventa rosso. I migliori scatti panoramici del Bosforo del mio viaggio.\"", zh: "\"为了美景预订了这趟伊斯坦布尔夜游——超出预期。奥尔塔科伊清真寺熠熠生辉、多尔玛巴切灯火通明、大桥变成红色。此行最好的博斯普鲁斯观光照片。\"", id: "\"Memesan tur malam Istanbul ini untuk pemandangannya — melampaui harapan. Masjid Ortaköy bersinar, Dolmabahçe menyala, jembatan berubah merah. Foto wisata Bosphorus terbaik dari perjalanan saya.\"", ms: "\"Menempah tur malam Istanbul ini untuk pemandangan — melebihi jangkaan. Masjid Ortaköy bersinar, Dolmabahçe diterangi, jambatan bertukar merah. Foto pemandangan Bosphorus terbaik sepanjang perjalanan saya.\"", pl: "\"Zarezerwowałem tę wycieczkę nocną w Stambule dla widoków — przerosła oczekiwania. Meczet Ortaköy lśniący, Dolmabahçe rozświetlony, most zmieniający się na czerwono. Najlepsze zdjęcia Bosforu z mojej podróży.\"", bg: "\"Резервирах този нощен тур в Истанбул заради гледките — надмина очакванията. Джамията Ортакьой свети, Долмабахче осветен, мостът става червен. Най-добрите снимки на Босфора от моето пътуване.\"", ro: "\"Am rezervat acest tur nocturn în Istanbul pentru priveliști — a depășit așteptările. Moscheea Ortaköy strălucind, Dolmabahçe iluminat, podul devenind roșu. Cele mai bune fotografii ale Bosforului din călătoria mea.\""
  },
  "reviews.r2.info": {
    en: "Solo · Russia", tr: "Tek · Rusya", de: "Solo · Russland",
    es: "Solo · Rusia", ru: "Соло · Россия", ar: "فردي · روسيا",
    fa: "مسافر تنها · روسیه", fr: "Solo · Russie", it: "Singolo · Russia", zh: "独行 · 俄罗斯", id: "Solo · Rusia", ms: "Bersendirian · Rusia", pl: "Solo · Rosja", bg: "Сам · Русия", ro: "Individual · Rusia"
  },
  "reviews.r3": {
    en: "\"Sailed right under the Bosphorus Bridge lit in red — absolutely magical. Our phone shots came out like postcards. Worth it just for that moment.\"",
    tr: "\"Kırmızı ışıklı Boğaz Köprüsü'nün tam altından geçtik — büyüleyici. Telefonla çektiklerimiz bile kartpostal gibi çıktı. Sırf bu an için değer.\"",
    de: "\"Direkt unter der rot beleuchteten Bosporus-Brücke gesegelt — absolut magisch. Selbst unsere Handyfotos wurden wie Postkarten. Allein dafür lohnt es sich.\"",
    es: "\"Navegamos justo bajo el Puente del Bósforo iluminado en rojo — absolutamente mágico. Nuestras fotos con el móvil salieron como postales.\"",
    ru: "\"Проплыли прямо под Босфорским мостом, подсвеченным красным — абсолютно волшебно. Снимки с телефона получились как открытки.\"",
    ar: "\"أبحرنا تحت جسر البوسفور المضاء بالأحمر — ساحر تمامًا. حتى صور الهاتف ظهرت كالبطاقات البريدية. يستحق من أجل تلك اللحظة.\"",
    fa: "«درست از زیر پل بسفر با نور قرمز عبور کردیم — واقعاً جادویی بود. عکس‌هایی که با گوشی گرفتیم مثل کارت‌پستال شد. فقط برای همان لحظه ارزشش را داشت.»", fr: "« Nous avons navigué juste sous le pont du Bosphore illuminé en rouge — absolument magique. Les photos prises avec notre téléphone ressemblaient à des cartes postales. Cela valait le coup rien que pour ce moment. »", it: "\"Abbiamo navigato proprio sotto il Ponte del Bosforo illuminato di rosso — assolutamente magico. Le nostre foto con il telefono sembrano cartoline. Ne vale la pena solo per quel momento.\"", zh: "\"驶过点亮红色灯光的博斯普鲁斯大桥下方——绝对神奇。我们的手机照片就像明信片。仅为那一刻也值得。\"", id: "\"Berlayar tepat di bawah Jembatan Bosphorus yang menyala merah — sungguh ajaib. Foto ponsel kami terlihat seperti kartu pos. Sepadan hanya untuk momen itu.\"", ms: "\"Belayar tepat di bawah Jambatan Bosphorus yang diterangi merah — benar-benar ajaib. Foto telefon kami keluar seperti poskad. Berbaloi semata-mata untuk saat itu.\"", pl: "\"Płynęliśmy tuż pod Mostem Bosforskim rozświetlonym na czerwono — absolutnie magicznie. Nasze zdjęcia z telefonu wyszły jak pocztówki. Warto było tylko dla tej chwili.\"", bg: "\"Преминахме точно под моста на Босфора, осветен в червено — абсолютно магическо. Снимките от телефона изглеждаха като картички. Струва си само заради този момент.\"", ro: "\"Am navigat chiar pe sub Podul Bosfor iluminat în roșu — absolut magic. Fotografiile făcute cu telefonul au ieșit ca niște cărți poștale. Merită doar pentru acel moment.\""
  },
  "reviews.r3.info": {
    en: "Couple · United Kingdom", tr: "Çift · Birleşik Krallık", de: "Paar · Vereinigtes Königreich",
    es: "Pareja · Reino Unido", ru: "Пара · Великобритания", ar: "زوجان · المملكة المتحدة",
    fa: "زوج · بریتانیا", fr: "Couple · Royaume-Uni", it: "Coppia · Regno Unito", zh: "情侣 · 英国", id: "Pasangan · Inggris", ms: "Pasangan · United Kingdom", pl: "Para · Wielka Brytania", bg: "Двойка · Великобритания", ro: "Cuplu · Regatul Unit"
  },
  "reviews.r4": {
    en: "\"Took the kids. The folk dancers and the dervish show captivated them. Halal menu was respected, staff gave our family attentive care. A perfect Istanbul night.\"",
    tr: "\"Çocuklarla gittik. Folklor dansları ve semazen gösterisi onları büyüledi. Helal menüye saygı vardı, servis aileye özel ilgi gösterdi. İstanbul'da mükemmel bir gece.\"",
    de: "\"Wir waren mit den Kindern da. Die Volkstänze und der Derwisch zogen sie in ihren Bann. Das Halal-Menü wurde respektiert, das Personal kümmerte sich aufmerksam um die Familie.\"",
    es: "\"Fuimos con los niños. Los bailarines folclóricos y el derviche los cautivaron. Se respetó el menú halal, el personal cuidó de la familia con atención.\"",
    ru: "\"Пошли с детьми. Народные танцы и дервиш их покорили. Халяль-меню соблюдалось, персонал внимательно отнёсся к семье. Идеальный вечер в Стамбуле.\"",
    ar: "\"اصطحبنا الأطفال. الراقصون الشعبيون وعرض الدرويش أسرهم. تم احترام قائمة الحلال، اهتم الطاقم بعائلتنا. ليلة مثالية في إسطنبول.\"",
    fa: "«بچه‌ها را بردیم. رقصندگان محلی و نمایش درویش آن‌ها را مجذوب کرد. منوی حلال رعایت شد و کارکنان به خانواده ما توجه ویژه داشتند. یک شب کامل استانبولی.»", fr: "« Nous avons emmené les enfants. Les danseurs folkloriques et le spectacle des derviches les ont captivés. Le menu halal a été respecté, le personnel a été attentionné envers notre famille. Une soirée parfaite à Istanbul. »", it: "\"Abbiamo portato i bambini. I ballerini folk e lo spettacolo dei dervisci li hanno affascinati. Il menu halal è stato rispettato, lo staff ha dedicato attenzione alla nostra famiglia. Una serata perfetta a Istanbul.\"", zh: "\"带着孩子同行。民族舞者和旋转舞表演让他们着迷。清真菜单得到尊重，工作人员细心照顾我们一家。完美的伊斯坦布尔之夜。\"", id: "\"Membawa anak-anak. Penari rakyat dan pertunjukan darwis memukau mereka. Menu halal dihormati, staf memberikan keluarga kami perhatian penuh. Malam Istanbul yang sempurna.\"", ms: "\"Bawa anak-anak. Penari rakyat dan persembahan darwish memukau mereka. Menu halal dihormati, kakitangan memberi perhatian yang baik kepada keluarga kami. Malam Istanbul yang sempurna.\"", pl: "\"Zabraliśmy dzieci. Tancerze ludowi i pokaz derwiszów urzekli je. Menu halal było uszanowane, personel troszczył się o naszą rodzinę. Idealna noc w Stambule.\"", bg: "\"Взехме децата. Фолклорните танцьори и представлението на дервишите ги плениха. Халал менюто беше спазено, екипът се отнасяше с внимание към семейството ни. Перфектна нощ в Истанбул.\"", ro: "\"Am luat copiii. Dansatorii populari și spectacolul dervișilor i-au captivat. Meniul halal a fost respectat, personalul a oferit familiei noastre o grijă atentă. O seară perfectă în Istanbul.\""
  },
  "reviews.r4.info": {
    en: "Family · UAE", tr: "Aile · BAE", de: "Familie · VAE",
    es: "Familia · EAU", ru: "Семья · ОАЭ", ar: "عائلة · الإمارات",
    fa: "خانواده · امارات", fr: "Famille · EAU", it: "Famiglia · Emirati Arabi Uniti", zh: "家庭 · 阿联酋", id: "Keluarga · UEA", ms: "Keluarga · UAE", pl: "Rodzina · ZEA", bg: "Семейство · ОАЕ", ro: "Familie · EAU"
  },
  "reviews.r5": {
    en: "\"We danced until midnight. The DJ, the belly dance show, the live music — pure energy. Our friends from Istanbul said it was the best cruise they'd been on too.\"",
    tr: "\"Gece yarısına kadar dans ettik. DJ, oryantal şov, canlı müzik — saf enerji. İstanbul'daki arkadaşlarımız bile 'en iyi tekne turu buydu' dedi.\"",
    de: "\"Wir haben bis Mitternacht getanzt. DJ, Bauchtanz-Show, Live-Musik — pure Energie. Selbst unsere Freunde aus Istanbul sagten, es sei die beste Tour gewesen.\"",
    es: "\"Bailamos hasta medianoche. El DJ, el show de danza del vientre, la música en vivo — pura energía. Nuestros amigos de Estambul dijeron que fue el mejor crucero.\"",
    ru: "\"Танцевали до полуночи. DJ, танец живота, живая музыка — чистая энергия. Даже наши друзья из Стамбула сказали, что это был лучший круиз.\"",
    ar: "\"رقصنا حتى منتصف الليل. DJ، عرض الرقص الشرقي، الموسيقى الحية — طاقة صافية. قال أصدقاؤنا من إسطنبول إنها كانت أفضل رحلة.\"",
    fa: "«تا نیمه‌شب رقصیدیم. دی‌جی، رقص شرقی، موسیقی زنده — انرژی خالص. دوستان استانبولی ما هم گفتند بهترین توری است که بوده‌اند.»", fr: "« Nous avons dansé jusqu'à minuit. Le DJ, la danse orientale, la musique live — une énergie pure. Nos amis d'Istanbul ont dit que c'était aussi la meilleure croisière qu'ils aient faite. »", it: "\"Abbiamo ballato fino a mezzanotte. Il DJ, lo spettacolo di danza orientale, la musica dal vivo — pura energia. I nostri amici di Istanbul hanno detto che è la migliore crociera che abbiano mai fatto.\"", zh: "\"我们跳舞到午夜。DJ、肚皮舞表演、现场音乐——纯粹的能量。我们来自伊斯坦布尔的朋友也说这是他们去过最好的游船。\"", id: "\"Kami berdansa sampai tengah malam. DJ, pertunjukan tari oriental, musik langsung — energi murni. Teman-teman kami dari Istanbul bilang ini pelayaran terbaik yang pernah mereka ikuti juga.\"", ms: "\"Kami menari sehingga tengah malam. DJ, persembahan tarian oryantal, muzik langsung — tenaga tulen. Kawan-kawan dari Istanbul berkata inilah pelayaran terbaik yang pernah mereka naiki.\"", pl: "\"Tańczyliśmy do północy. DJ, pokaz tańca brzucha, muzyka na żywo — czysta energia. Nasi przyjaciele ze Stambułu powiedzieli, że to najlepszy rejs, na jakim byli.\"", bg: "\"Танцувахме до полунощ. DJ, танцът на корема, музиката на живо — чиста енергия. Приятелите ни от Истанбул казаха, че това е най-добрият круиз, на който са били.\"", ro: "\"Am dansat până la miezul nopții. DJ-ul, spectacolul de dans oriental, muzica live — pură energie. Prietenii noștri din Istanbul au spus că a fost și cea mai bună croazieră pe care au făcut-o.\""
  },
  "reviews.r5.info": {
    en: "Couple · Italy", tr: "Çift · İtalya", de: "Paar · Italien",
    es: "Pareja · Italia", ru: "Пара · Италия", ar: "زوجان · إيطاليا",
    fa: "زوج · ایتالیا", fr: "Couple · Italie", it: "Coppia · Italia", zh: "情侣 · 意大利", id: "Pasangan · Italia", ms: "Pasangan · Itali", pl: "Para · Włochy", bg: "Двойка · Италия", ro: "Cuplu · Italia"
  },
  "reviews.r6": {
    en: "\"From boarding to the last course, everything was thoughtful. Food fresh, generous portions, the boat looked like a floating restaurant at night. Recommended.\"",
    tr: "\"İskeleden son tatlıya kadar her şey özenliydi. Yemek taze, porsiyonlar bol, tekne gece yüzen bir restoran gibiydi. Tavsiye ederim.\"",
    de: "\"Vom Einsteigen bis zum letzten Gang war alles durchdacht. Frisches Essen, großzügige Portionen, das Boot wirkte nachts wie ein schwimmendes Restaurant. Empfohlen.\"",
    es: "\"Desde el embarque hasta el último plato, todo fue cuidado. Comida fresca, porciones generosas, el barco parecía un restaurante flotante de noche. Recomendado.\"",
    ru: "\"От посадки до последнего блюда всё было продумано. Свежая еда, щедрые порции, лодка вечером как плавучий ресторан. Рекомендую.\"",
    ar: "\"من الصعود إلى آخر طبق، كل شيء كان مدروسًا. طعام طازج، حصص سخية، بدت القارب ليلاً كمطعم عائم. موصى به.\"",
    fa: "«از لحظه سوار شدن تا آخرین غذا، همه چیز با دقت برنامه‌ریزی شده بود. غذا تازه، سهم‌ها سخاوتمندانه و کشتی شب‌ها مثل یک رستوران شناور به نظر می‌رسید. توصیه می‌کنم.»", fr: "« De l'embarquement au dernier plat, tout était pensé. Plats frais, portions généreuses, le bateau ressemblait à un restaurant flottant la nuit. Recommandé. »", it: "\"Dall'imbarco all'ultima portata, tutto è stato curato. Cibo fresco, porzioni generose, la barca sembrava un ristorante galleggiante di notte. Consigliato.\"", zh: "\"从登船到最后一道菜，一切都经过精心设计。食物新鲜、份量慷慨，夜色中的游船像一家漂浮的餐厅。强烈推荐。\"", id: "\"Dari naik kapal hingga hidangan terakhir, semuanya dipikirkan dengan matang. Makanan segar, porsi melimpah, kapal terlihat seperti restoran mengapung di malam hari. Sangat direkomendasikan.\"", ms: "\"Dari menaiki hingga hidangan terakhir, semuanya difikirkan dengan teliti. Makanan segar, hidangan banyak, bot kelihatan seperti restoran terapung pada waktu malam. Disyorkan.\"", pl: "\"Od wejścia na pokład do ostatniego dania wszystko było przemyślane. Jedzenie świeże, obfite porcje, łódź wyglądała nocą jak pływająca restauracja. Polecam.\"", bg: "\"От качването до последното ястие всичко беше премислено. Храната свежа, порциите щедри, лодката изглеждаше като плаващ ресторант през нощта. Препоръчвам.\"", ro: "\"De la îmbarcare până la ultimul fel, totul a fost gândit cu grijă. Mâncare proaspătă, porții generoase, vaporul arăta ca un restaurant plutitor noaptea. Recomandat.\""
  },
  "reviews.r6.info": {
    en: "Family · Saudi Arabia", tr: "Aile · Suudi Arabistan", de: "Familie · Saudi-Arabien",
    es: "Familia · Arabia Saudita", ru: "Семья · Саудовская Аравия", ar: "عائلة · المملكة العربية السعودية",
    fa: "خانواده · عربستان سعودی", fr: "Famille · Arabie saoudite", it: "Famiglia · Arabia Saudita", zh: "家庭 · 沙特阿拉伯", id: "Keluarga · Arab Saudi", ms: "Keluarga · Arab Saudi", pl: "Rodzina · Arabia Saudyjska", bg: "Семейство · Саудитска Арабия", ro: "Familie · Arabia Saudită"
  },
  "reviews.r7": {
    en: "\"We love food — and this delivered. Each plate arrived with thought, the meat was tender, the flowers on the table made the whole night feel curated. Best Istanbul meal.\"",
    tr: "\"Yemek severiz — burada beklediğimizi bulduk. Her tabak özenliydi, et yumuşaktı, masadaki çiçekler akşamı özel hissettirdi. İstanbul'daki en iyi yemeğimiz.\"",
    de: "\"Wir lieben gutes Essen — und das hier hat überzeugt. Jeder Teller war durchdacht, das Fleisch zart, die Blumen auf dem Tisch machten den Abend besonders.\"",
    es: "\"Amamos la comida — y aquí encontramos lo que buscábamos. Cada plato fue cuidado, la carne tierna, las flores en la mesa hicieron la noche especial.\"",
    ru: "\"Мы любим еду — и здесь нас не разочаровали. Каждая подача продумана, мясо нежное, цветы на столе сделали вечер особенным. Лучший ужин в Стамбуле.\"",
    ar: "\"نحب الطعام — وهذا المكان لبى توقعاتنا. كل طبق جاء بعناية، اللحم كان طرياً، الزهور على الطاولة جعلت الأمسية مميزة.\"",
    fa: "«ما عاشق غذا هستیم — و این تور واقعاً خوب بود. هر بشقاب با دقت آماده شده بود، گوشت لطیف بود و گل‌های روی میز کل شب را ویژه کرد. بهترین وعده غذایی استانبول.»", fr: "« Nous adorons la cuisine — et ici, tout était au rendez-vous. Chaque assiette était soignée, la viande tendre, les fleurs sur la table rendaient toute la soirée raffinée. Le meilleur repas à Istanbul. »", it: "\"Amiamo il cibo — e questo ha soddisfatto. Ogni piatto arrivava curato, la carne era tenera, i fiori sul tavolo davano a tutta la serata un tocco ricercato. Il miglior pasto a Istanbul.\"", zh: "\"我们爱美食——这里毫不逊色。每道菜都用心呈上，肉质鲜嫩，桌上的鲜花让整晚感觉像精心策划。伊斯坦布尔最好的一餐。\"", id: "\"Kami pencinta makanan — dan ini memuaskan. Setiap piring tiba dengan pemikiran, dagingnya empuk, bunga di meja membuat seluruh malam terasa dikurasi. Makanan Istanbul terbaik.\"", ms: "\"Kami sukakan makanan — dan ini memenuhi. Setiap pinggan tiba dengan pertimbangan, daging lembut, bunga di atas meja menjadikan seluruh malam terasa dirancang. Hidangan Istanbul terbaik.\"", pl: "\"Kochamy jedzenie — i to dostarczyło. Każdy talerz podany z przemyśleniem, mięso kruche, kwiaty na stole sprawiły, że cały wieczór wydawał się wyreżyserowany. Najlepszy posiłek w Stambule.\"", bg: "\"Обичаме храната — и тук получихме. Всяко ястие пристигна с внимание, месото беше нежно, цветята на масата направиха цялата нощ да изглежда специално подредена. Най-доброто хранене в Истанбул.\"", ro: "\"Iubim mâncarea — și asta a livrat. Fiecare farfurie a sosit cu atenție, carnea era fragedă, florile de pe masă au făcut ca întreaga seară să pară curată. Cea mai bună masă din Istanbul.\""
  },
  "reviews.r7.info": {
    en: "Couple · France", tr: "Çift · Fransa", de: "Paar · Frankreich",
    es: "Pareja · Francia", ru: "Пара · Франция", ar: "زوجان · فرنسا",
    fa: "زوج · فرانسه", fr: "Couple · France", it: "Coppia · Francia", zh: "情侣 · 法国", id: "Pasangan · Prancis", ms: "Pasangan · Perancis", pl: "Para · Francja", bg: "Двойка · Франция", ro: "Cuplu · Franța"
  },
  "reviews.r8": {
    en: "\"Took this from the deck — the boat, the bridge, the city skyline all in one frame. Perfect Istanbul souvenir shot.\"",
    tr: "\"Güverteden tek karede çektim — tekne, köprü, şehir silueti. Mükemmel bir İstanbul hatırası.\"",
    de: "\"Vom Deck aufgenommen — das Boot, die Brücke, die Stadt-Silhouette in einem Bild. Perfekte Istanbul-Erinnerung.\"",
    es: "\"Tomé esta foto desde la cubierta — el barco, el puente, el horizonte en un solo cuadro. Recuerdo perfecto de Estambul.\"",
    ru: "\"Снял с палубы — лодка, мост, силуэт города в одном кадре. Идеальное воспоминание об Стамбуле.\"",
    ar: "\"التقطت هذه من سطح السفينة — القارب والجسر وأفق المدينة في إطار واحد. تذكار إسطنبول مثالي.\"",
    fa: "«این را از عرشه گرفتم — کشتی، پل و خط آسمان شهر همه در یک قاب. عکس کامل یادگاری از استانبول.»", fr: "« J'ai pris cette photo depuis le pont — le bateau, le pont, l'horizon de la ville dans un seul cadre. Un souvenir parfait d'Istanbul. »", it: "\"Ho scattato questa dal ponte — la barca, il ponte, lo skyline della città tutti in un'unica inquadratura. Perfetto souvenir fotografico di Istanbul.\"", zh: "\"在甲板上拍下这张——游船、大桥、城市天际线尽收一框。完美的伊斯坦布尔纪念照。\"", id: "\"Mengambil foto ini dari dek — kapal, jembatan, cakrawala kota semua dalam satu bingkai. Foto kenangan Istanbul yang sempurna.\"", ms: "\"Ambil gambar ini dari dek — bot, jambatan, ufuk bandar semuanya dalam satu bingkai. Gambar kenang-kenangan Istanbul yang sempurna.\"", pl: "\"Zrobiłem to z pokładu — łódź, most, panorama miasta w jednym kadrze. Idealna pamiątka ze Stambułu.\"", bg: "\"Направих я от палубата — лодката, мостът, силуетът на града, всички в един кадър. Перфектен сувенир от Истанбул.\"", ro: "\"Am făcut această fotografie de pe punte — vaporul, podul, silueta orașului toate într-un singur cadru. Fotografia suvenir perfectă din Istanbul.\""
  },
  "reviews.r8.info": {
    en: "Solo · United States", tr: "Tek · ABD", de: "Solo · USA",
    es: "Solo · Estados Unidos", ru: "Соло · США", ar: "فردي · الولايات المتحدة",
    fa: "مسافر تنها · آمریکا", fr: "Solo · États-Unis", it: "Singolo · Stati Uniti", zh: "独行 · 美国", id: "Solo · Amerika Serikat", ms: "Bersendirian · Amerika Syarikat", pl: "Solo · Stany Zjednoczone", bg: "Сам · САЩ", ro: "Individual · Statele Unite"
  },
  "reviews.r9": {
    en: "\"What impressed me most was the service — attentive without being intrusive. The hall looked elegant under the warm lights. Worth every euro.\"",
    tr: "\"Beni en çok etkileyen servisti — ilgili ama rahatsız edici değil. Salon sıcak ışıklar altında zarifti. Her euro'ya değer.\"",
    de: "\"Am meisten beeindruckte der Service — aufmerksam, ohne aufdringlich zu sein. Der Saal wirkte im warmen Licht elegant. Jeden Euro wert.\"",
    es: "\"Lo que más me impresionó fue el servicio — atento sin ser invasivo. El salón elegante bajo las luces cálidas. Vale cada euro.\"",
    ru: "\"Больше всего впечатлил сервис — внимательный, но ненавязчивый. Зал в тёплом свете выглядел элегантно. Стоит каждого евро.\"",
    ar: "\"ما أعجبني أكثر هو الخدمة — منتبهة دون أن تكون متطفلة. القاعة بدت أنيقة تحت الأضواء الدافئة. يستحق كل يورو.\"",
    fa: "«آنچه بیشتر مرا تحت تأثیر قرار داد، خدمات بود — دقیق و در عین حال بدون مزاحمت. سالن زیر نور گرم بسیار شیک به نظر می‌رسید. ارزش هر یورو را داشت.»", fr: "« Ce qui m'a le plus impressionné, c'est le service — attentif sans être intrusif. La salle était élégante sous les lumières chaudes. Cela valait chaque euro. »", it: "\"Ciò che mi ha più colpito è stato il servizio — attento senza essere invadente. La sala appariva elegante sotto le luci calde. Vale ogni euro.\"", zh: "\"最打动我的是服务——贴心而不打扰。暖光下的大厅显得优雅。每一欧元都值得。\"", id: "\"Yang paling mengesankan saya adalah layanan — penuh perhatian tanpa mengganggu. Aula terlihat elegan di bawah lampu hangat. Sepadan setiap euronya.\"", ms: "\"Yang paling memberi kesan kepada saya ialah perkhidmatan — penuh perhatian tanpa mengganggu. Dewan kelihatan elegan di bawah cahaya hangat. Berbaloi setiap euro.\"", pl: "\"Najbardziej wrażenie zrobiła na mnie obsługa — uważna, ale nienarzucająca się. Sala wyglądała elegancko w ciepłym świetle. Warta każdego euro.\"", bg: "\"Това, което ме впечатли най-много, беше обслужването — внимателно, без да е натрапчиво. Залата изглеждаше елегантна под топлите светлини. Струваше си всяко евро.\"", ro: "\"Ceea ce m-a impresionat cel mai mult a fost serviciul — atent fără a fi intruziv. Sala arăta elegantă sub luminile calde. Merită fiecare euro.\""
  },
  "reviews.r9.info": {
    en: "Solo · Spain", tr: "Tek · İspanya", de: "Solo · Spanien",
    es: "Solo · España", ru: "Соло · Испания", ar: "فردي · إسبانيا",
    fa: "مسافر تنها · اسپانیا", fr: "Solo · Espagne", it: "Singolo · Spagna", zh: "独行 · 西班牙", id: "Solo · Spanyol", ms: "Bersendirian · Sepanyol", pl: "Solo · Hiszpania", bg: "Сам · Испания", ro: "Individual · Spania"
  },
  "reviews.r10": {
    en: "\"I live in Istanbul but had never tried a cruise like this. Went with my foreign guests — they all loved it. Professional organization.\"",
    tr: "\"Istanbul'da yaşıyorum ama ilk kez böyle bir tur denedim. Yurtdışından gelen misafirlerimle gittik, hepsi çok beğendi. Profesyonel bir organizasyon.\"",
    de: "\"Ich lebe in Istanbul, aber solch eine Tour hatte ich noch nie gemacht. Mit ausländischen Gästen — alle begeistert. Professionelle Organisation.\"",
    es: "\"Vivo en Estambul pero nunca había probado un crucero así. Fui con invitados extranjeros — les encantó. Organización profesional.\"",
    ru: "\"Я живу в Стамбуле, но никогда не пробовал такой круиз. Пошёл с иностранными гостями — всем очень понравилось. Профессионально.\"",
    ar: "\"أعيش في إسطنبول لكنني لم أجرب رحلة كهذه من قبل. ذهبت مع ضيوفي الأجانب — أحبوها جميعًا. تنظيم احترافي.\"",
    fa: "«من در استانبول زندگی می‌کنم ولی هرگز چنین توری را امتحان نکرده بودم. با مهمانان خارجی‌ام رفتم — همه عاشقش شدند. سازماندهی حرفه‌ای بود.»", fr: "« Je vis à Istanbul mais je n'avais jamais essayé une telle croisière. J'y suis allé avec mes invités étrangers — ils ont tous adoré. Organisation professionnelle. »", it: "\"Vivo a Istanbul ma non avevo mai provato una crociera come questa. Sono andata con i miei ospiti stranieri — è piaciuta a tutti. Organizzazione professionale.\"", zh: "\"我住在伊斯坦布尔，却从未尝试过这样的游船。带着外国客人一起——他们都爱上了。专业的组织。\"", id: "\"Saya tinggal di Istanbul tetapi belum pernah mencoba pelayaran seperti ini. Pergi dengan tamu asing saya — mereka semua menyukainya. Organisasi profesional.\"", ms: "\"Saya tinggal di Istanbul tetapi tidak pernah mencuba pelayaran seperti ini. Pergi dengan tetamu asing saya — mereka semua sukakannya. Organisasi profesional.\"", pl: "\"Mieszkam w Stambule, ale nigdy wcześniej nie próbowałem takiego rejsu. Poszedłem z zagranicznymi gośćmi — wszyscy byli zachwyceni. Profesjonalna organizacja.\"", bg: "\"Живея в Истанбул, но никога не бях опитвал такъв круиз. Отидох с гостите си от чужбина — всички го харесаха. Професионална организация.\"", ro: "\"Locuiesc în Istanbul, dar nu încercasem niciodată o asemenea croazieră. Am mers cu oaspeții mei străini — tuturor le-a plăcut. Organizare profesionistă.\""
  },
  "reviews.r10.info": {
    en: "Couple · Turkey", tr: "Çift · Türkiye", de: "Paar · Türkei",
    es: "Pareja · Turquía", ru: "Пара · Турция", ar: "زوجان · تركيا",
    fa: "زوج · ترکیه", fr: "Couple · Turquie", it: "Coppia · Turchia", zh: "情侣 · 土耳其", id: "Pasangan · Turki", ms: "Pasangan · Turki", pl: "Para · Turcja", bg: "Двойка · Турция", ro: "Cuplu · Turcia"
  },
  "reviews.r11": {
    en: "\"The Turkish night show was magical — costumes, colors, and the energy of the dancers. I caught this beautiful moment on camera.\"",
    tr: "\"Türk gecesi şovu büyüleyiciydi — kostümler, renkler, dansçıların enerjisi. Bu güzel anı kameraya aldım.\"",
    de: "\"Die Türkische Nacht war magisch — Kostüme, Farben, die Energie der Tänzer. Diesen schönen Moment habe ich eingefangen.\"",
    es: "\"El show de noche turca fue mágico — trajes, colores, la energía de los bailarines. Capturé este hermoso momento.\"",
    ru: "\"Турецкое ночное шоу было волшебным — костюмы, краски, энергия танцоров. Поймала этот прекрасный момент.\"",
    ar: "\"عرض الليلة التركية كان سحريًا — الأزياء والألوان وطاقة الراقصين. التقطت هذه اللحظة الجميلة.\"",
    fa: "«نمایش شب ترکی جادویی بود — لباس‌ها، رنگ‌ها و انرژی رقصندگان. این لحظه زیبا را در دوربینم ثبت کردم.»", fr: "« La soirée turque était magique — les costumes, les couleurs et l'énergie des danseurs. J'ai capturé ce beau moment en photo. »", it: "\"Lo spettacolo della serata turca è stato magico — costumi, colori e l'energia dei ballerini. Ho catturato questo bellissimo momento con la fotocamera.\"", zh: "\"土耳其之夜表演很神奇——服装、色彩、舞者的能量。我用镜头捕捉到了这个美丽的瞬间。\"", id: "\"Pertunjukan malam Turki sungguh ajaib — kostum, warna, dan energi para penari. Saya menangkap momen indah ini dengan kamera.\"", ms: "\"Persembahan malam Turki benar-benar ajaib — pakaian, warna dan tenaga penari. Saya tangkap saat indah ini melalui kamera.\"", pl: "\"Turecki pokaz nocny był magiczny — kostiumy, kolory i energia tancerzy. Uchwyciłem tę piękną chwilę na aparacie.\"", bg: "\"Турската нощна програма беше магическа — костюми, цветове и енергията на танцьорите. Хванах този красив момент на камерата.\"", ro: "\"Spectacolul de seară turcească a fost magic — costume, culori și energia dansatorilor. Am surprins acest moment frumos pe aparatul foto.\""
  },
  "reviews.r11.info": {
    en: "Solo · Japan", tr: "Tek · Japonya", de: "Solo · Japan",
    es: "Solo · Japón", ru: "Соло · Япония", ar: "فردي · اليابان",
    fa: "مسافر تنها · ژاپن", fr: "Solo · Japon", it: "Singolo · Giappone", zh: "独行 · 日本", id: "Solo · Jepang", ms: "Bersendirian · Jepun", pl: "Solo · Japonia", bg: "Сам · Япония", ro: "Individual · Japonia"
  },
  "reviews.r12": {
    en: "\"Punctual, clean boat, very friendly crew. Price-to-quality ratio is excellent. We'd come back on our next Istanbul visit.\"",
    tr: "\"Dakik, temiz tekne, çok güler yüzlü ekip. Fiyat-kalite dengesi çok iyi. Bir sonraki İstanbul ziyaretimizde yine geliriz.\"",
    de: "\"Pünktlich, sauberes Boot, sehr freundliche Crew. Preis-Leistungs-Verhältnis hervorragend. Wir kommen bei unserem nächsten Istanbul-Besuch wieder.\"",
    es: "\"Puntuales, barco limpio, tripulación muy amable. Relación calidad-precio excelente. Volveremos en nuestra próxima visita a Estambul.\"",
    ru: "\"Пунктуально, чистая лодка, очень приветливая команда. Соотношение цены и качества отличное. Вернёмся в следующий приезд.\"",
    ar: "\"في الوقت، قارب نظيف، طاقم ودود جدًا. نسبة الجودة إلى السعر ممتازة. سنعود في زيارتنا القادمة لإسطنبول.\"",
    fa: "«وقت‌شناس، کشتی تمیز و خدمه بسیار صمیمی. نسبت قیمت به کیفیت عالی است. در سفر بعدی به استانبول حتماً دوباره می‌آییم.»", fr: "« Ponctuel, bateau propre, équipage très sympathique. Le rapport qualité-prix est excellent. Nous reviendrons lors de notre prochaine visite à Istanbul. »", it: "\"Puntuali, barca pulita, equipaggio molto gentile. Il rapporto qualità-prezzo è eccellente. Torneremo alla nostra prossima visita a Istanbul.\"", zh: "\"准时、船很干净、船员非常友好。性价比极高。下次来伊斯坦布尔还会回来。\"", id: "\"Tepat waktu, kapal bersih, kru sangat ramah. Rasio harga-kualitas sangat baik. Kami akan datang lagi pada kunjungan Istanbul berikutnya.\"", ms: "\"Tepat pada masa, bot bersih, kru sangat mesra. Nisbah harga-berbanding-kualiti sangat baik. Kami akan datang lagi pada lawatan Istanbul seterusnya.\"", pl: "\"Punktualni, czysta łódź, bardzo przyjazna załoga. Stosunek ceny do jakości jest doskonały. Wrócilibyśmy przy następnej wizycie w Stambule.\"", bg: "\"Точни, чиста лодка, много приятелски настроен екип. Съотношението цена-качество е отлично. Бихме се върнали при следващото посещение в Истанбул.\"", ro: "\"Punctual, vapor curat, echipaj foarte prietenos. Raportul preț-calitate este excelent. Am reveni la următoarea noastră vizită în Istanbul.\""
  },
  "reviews.r12.info": {
    en: "Couple · Germany", tr: "Çift · Almanya", de: "Paar · Deutschland",
    es: "Pareja · Alemania", ru: "Пара · Германия", ar: "زوجان · ألمانيا",
    fa: "زوج · آلمان", fr: "Couple · Allemagne", it: "Coppia · Germania", zh: "情侣 · 德国", id: "Pasangan · Jerman", ms: "Pasangan · Jerman", pl: "Para · Niemcy", bg: "Двойка · Германия", ro: "Cuplu · Germania"
  },
  "reviews.r13": {
    en: "\"Every dancer brought a different story. The red-dressed performer in particular had such stage presence — we couldn't look away.\"",
    tr: "\"Her dansçı farklı bir hikaye anlatıyordu. Özellikle kırmızı elbiseli sanatçının sahne hakimiyeti öyleydi ki gözümüzü ayıramadık.\"",
    de: "\"Jede Tänzerin erzählte eine andere Geschichte. Die Tänzerin im roten Kleid hatte eine solche Bühnenpräsenz — wir konnten nicht wegsehen.\"",
    es: "\"Cada bailarín traía una historia diferente. La intérprete vestida de rojo tenía tal presencia escénica que no podíamos apartar la vista.\"",
    ru: "\"Каждая танцовщица рассказывала свою историю. Исполнительница в красном платье обладала такой сценической харизмой, что оторваться было невозможно.\"",
    ar: "\"كل راقصة حملت قصة مختلفة. الراقصة ذات الفستان الأحمر تحديدًا كان لها حضور مسرحي لا يُقاوَم — لم نستطع إبعاد أنظارنا.\"",
    fa: "«هر رقصنده داستانی متفاوت داشت. به‌خصوص اجراکننده با لباس قرمز چنان حضور صحنه‌ای داشت که نمی‌توانستیم نگاه برداریم.»", fr: "« Chaque danseur apportait une histoire différente. L'artiste en robe rouge en particulier avait une présence scénique remarquable — impossible de détourner le regard. »", it: "\"Ogni ballerino ha portato una storia diversa. L'interprete in abito rosso in particolare aveva una tale presenza scenica — non riuscivamo a distogliere lo sguardo.\"", zh: "\"每位舞者都带来不同的故事。尤其那位红衣表演者，舞台气场十足——让人目不转睛。\"", id: "\"Setiap penari membawa cerita yang berbeda. Penari bergaun merah khususnya memiliki aura panggung yang kuat — kami tidak bisa mengalihkan pandangan.\"", ms: "\"Setiap penari membawa cerita berbeza. Penari berbaju merah terutamanya mempunyai kehadiran pentas yang sangat kuat — kami tidak boleh berpaling.\"", pl: "\"Każdy tancerz przyniósł inną historię. Szczególnie wykonawczyni w czerwonej sukni miała taką obecność sceniczną — nie mogliśmy oderwać wzroku.\"", bg: "\"Всеки танцьор представи различна история. Изпълнителката в червената рокля беше особено впечатляваща — не можехме да откъснем поглед.\"", ro: "\"Fiecare dansator a adus o poveste diferită. Interpreta în rochie roșie în special avea o asemenea prezență scenică — nu ne puteam lua ochii.\""
  },
  "reviews.r13.info": {
    en: "Couple · Austria", tr: "Çift · Avusturya", de: "Paar · Österreich",
    es: "Pareja · Austria", ru: "Пара · Австрия", ar: "زوجان · النمسا",
    fa: "زوج · اتریش", fr: "Couple · Autriche", it: "Coppia · Austria", zh: "情侣 · 奥地利", id: "Pasangan · Austria", ms: "Pasangan · Austria", pl: "Para · Austria", bg: "Двойка · Австрия", ro: "Cuplu · Austria"
  },
  "reviews.r14": {
    en: "\"The belly dance performance was incredible — the dancer commanded the whole room. Pure artistry. Felt welcomed all evening on my solo trip.\"",
    tr: "\"Oryantal dans gösterisi inanılmazdı — dansçı tüm salona hakimdi. Saf sanat. Solo seyahatimde akşam boyunca kendimi hoş karşılanmış hissettim.\"",
    de: "\"Die Bauchtanz-Performance war unglaublich — die Tänzerin beherrschte den ganzen Saal. Pure Kunst. Auf meiner Solo-Reise fühlte ich mich den ganzen Abend willkommen.\"",
    es: "\"El espectáculo de danza del vientre fue increíble — la bailarina dominó toda la sala. Puro arte. Me sentí bienvenida durante toda mi noche en solitario.\"",
    ru: "\"Шоу с танцем живота было невероятным — танцовщица завладела вниманием всего зала. Чистое искусство. На моей сольной поездке я чувствовала себя как дома весь вечер.\"",
    ar: "\"عرض الرقص الشرقي كان لا يصدق — الراقصة سيطرت على القاعة كلها. فن نقي. شعرت بالترحيب طوال أمسيتي الفردية.\"",
    fa: "«اجرای رقص شرقی خارق‌العاده بود — رقصنده کل سالن را در اختیار داشت. هنر خالص. در سفر تنهایی‌ام تمام شب احساس خوشامدگویی کردم.»", fr: "« La performance de danse orientale était incroyable — la danseuse dominait toute la salle. De l'art pur. Je me suis senti bienvenu toute la soirée lors de mon voyage en solo. »", it: "\"L'esibizione di danza orientale è stata incredibile — la ballerina ha dominato tutta la sala. Pura arte. Mi sono sentita benvenuta per tutta la serata durante il mio viaggio in solitaria.\"", zh: "\"肚皮舞表演精彩绝伦——舞者掌控了整个房间。纯粹的艺术。我独自出行，整晚都感受到热情接待。\"", id: "\"Pertunjukan tari oriental luar biasa — penarinya menguasai seluruh ruangan. Seni murni. Merasa disambut sepanjang malam dalam perjalanan solo saya.\"", ms: "\"Persembahan tarian oryantal sangat luar biasa — penari menguasai seluruh ruang. Seni tulen. Rasa dialu-alukan sepanjang malam pada perjalanan bersendirian saya.\"", pl: "\"Występ tańca brzucha był niewiarygodny — tancerka opanowała całą salę. Czysty kunszt. Czułam się mile widziana przez cały wieczór podczas mojej samotnej podróży.\"", bg: "\"Представлението с танц на корема беше невероятно — танцьорката владееше цялата зала. Чисто изкуство. Чувствах се добре дошла цяла вечер по време на самостоятелното си пътуване.\"", ro: "\"Spectacolul de dans oriental a fost incredibil — dansatoarea a dominat întreaga sală. Artă pură. M-am simțit bine primită toată seara în călătoria mea individuală.\""
  },
  "reviews.r14.info": {
    en: "Solo · Netherlands", tr: "Tek · Hollanda", de: "Solo · Niederlande",
    es: "Solo · Países Bajos", ru: "Соло · Нидерланды", ar: "فردي · هولندا",
    fa: "مسافر تنها · هلند", fr: "Solo · Pays-Bas", it: "Singolo · Paesi Bassi", zh: "独行 · 荷兰", id: "Solo · Belanda", ms: "Bersendirian · Belanda", pl: "Solo · Holandia", bg: "Сам · Нидерландия", ro: "Individual · Olanda"
  },
  "reviews.r15": {
    en: "\"Booked last minute via WhatsApp. Response within minutes, confirmed instantly, paid on the boat. Smooth process, great night. Highly recommended.\"",
    tr: "\"Son dakika WhatsApp'tan rezervasyon yaptım. Dakikalar içinde yanıt, anında onay, teknede ödeme. Pürüzsüz süreç, harika bir gece. Kesinlikle tavsiye ederim.\"",
    de: "\"Last-Minute über WhatsApp gebucht. Antwort binnen Minuten, sofort bestätigt, an Bord bezahlt. Reibungsloser Ablauf, großartiger Abend. Sehr empfehlenswert.\"",
    es: "\"Reservé a último minuto por WhatsApp. Respuesta en minutos, confirmado al instante, pagué en el barco. Proceso fluido, gran noche. Muy recomendado.\"",
    ru: "\"Забронировал в последний момент через WhatsApp. Ответ за минуты, мгновенное подтверждение, оплата на борту. Плавный процесс, отличный вечер.\"",
    ar: "\"حجزت في اللحظة الأخيرة عبر واتساب. استجابة في دقائق، تأكيد فوري، دفعت على القارب. عملية سلسة، ليلة رائعة. أوصي به بشدة.\"",
    fa: "«در آخرین لحظه از طریق واتس‌اپ رزرو کردم. ظرف چند دقیقه پاسخ دادند، فوراً تأیید شد و روی کشتی پرداخت کردم. فرایند روان، شب عالی. به‌شدت توصیه می‌کنم.»", fr: "« Réservé à la dernière minute via WhatsApp. Réponse en quelques minutes, confirmation instantanée, paiement à bord. Processus fluide, excellente soirée. Vivement recommandé. »", it: "\"Prenotato all'ultimo momento via WhatsApp. Risposta in pochi minuti, confermato all'istante, pagato a bordo. Processo fluido, serata splendida. Altamente consigliato.\"", zh: "\"通过WhatsApp临时预订。几分钟内回复，即时确认，船上付款。流程顺畅，夜晚美妙。强烈推荐。\"", id: "\"Memesan di menit terakhir via WhatsApp. Merespons dalam hitungan menit, dikonfirmasi secara instan, membayar di kapal. Proses mulus, malam yang luar biasa. Sangat direkomendasikan.\"", ms: "\"Menempah saat akhir melalui WhatsApp. Balas dalam beberapa minit, disahkan serta-merta, dibayar di atas bot. Proses lancar, malam yang hebat. Sangat disyorkan.\"", pl: "\"Zarezerwowałem w ostatniej chwili przez WhatsApp. Odpowiedź w ciągu kilku minut, natychmiast potwierdzona, zapłacono na pokładzie. Gładki proces, wspaniała noc. Gorąco polecam.\"", bg: "\"Резервирах в последната минута по WhatsApp. Отговор за минути, мигновено потвърждение, платих на борда. Гладък процес, страхотна вечер. Горещо препоръчвам.\"", ro: "\"Am rezervat în ultimul moment pe WhatsApp. Răspuns în câteva minute, confirmare instantanee, plata pe vapor. Proces ușor, seară minunată. Recomand cu căldură.\""
  },
  "reviews.r15.info": {
    en: "Solo · Russia", tr: "Tek · Rusya", de: "Solo · Russland",
    es: "Solo · Rusia", ru: "Соло · Россия", ar: "فردي · روسيا",
    fa: "مسافر تنها · روسیه", fr: "Solo · Russie", it: "Singolo · Russia", zh: "独行 · 俄罗斯", id: "Solo · Rusia", ms: "Bersendirian · Rusia", pl: "Solo · Rosja", bg: "Сам · Русия", ro: "Individual · Rusia"
  },
  "reviews.r16": {
    en: "\"Halal menu was wonderful. Staff answered our questions patiently. Perfect for Muslim travelers visiting Istanbul.\"",
    tr: "\"Helal menü harikaydı. Ekip sorularımızı sabırla cevapladı. İstanbul'a gelen Müslüman misafirler için mükemmel.\"",
    de: "\"Halal-Menü war wunderbar. Das Team beantwortete unsere Fragen geduldig. Perfekt für muslimische Reisende.\"",
    es: "\"Menú halal estupendo. El personal respondió pacientemente a nuestras preguntas. Perfecto para viajeros musulmanes.\"",
    ru: "\"Халяль-меню было прекрасным. Персонал терпеливо отвечал на наши вопросы. Идеально для мусульманских путешественников.\"",
    ar: "\"قائمة الحلال كانت رائعة. أجاب الطاقم على أسئلتنا بصبر. مثالي للمسافرين المسلمين.\"",
    fa: "«منوی حلال فوق‌العاده بود. کارکنان با صبر به سؤالات ما پاسخ دادند. عالی برای مسافران مسلمان در استانبول.»", fr: "« Le menu halal était merveilleux. Le personnel a répondu à nos questions avec patience. Parfait pour les voyageurs musulmans visitant Istanbul. »", it: "\"Il menu halal era meraviglioso. Lo staff ha risposto alle nostre domande con pazienza. Perfetto per i viaggiatori musulmani in visita a Istanbul.\"", zh: "\"清真菜单很棒。工作人员耐心回答我们的问题。对前来伊斯坦布尔的穆斯林旅客很合适。\"", id: "\"Menu halal luar biasa. Staf menjawab pertanyaan kami dengan sabar. Sempurna untuk wisatawan Muslim yang mengunjungi Istanbul.\"", ms: "\"Menu halal sangat indah. Kakitangan menjawab soalan kami dengan sabar. Sempurna untuk pengembara Muslim yang melawat Istanbul.\"", pl: "\"Menu halal było wspaniałe. Personel cierpliwie odpowiadał na nasze pytania. Idealne dla muzułmańskich podróżnych odwiedzających Stambuł.\"", bg: "\"Халал менюто беше прекрасно. Екипът отговаряше търпеливо на въпросите ни. Перфектно за мюсюлмански пътешественици, посещаващи Истанбул.\"", ro: "\"Meniul halal a fost minunat. Personalul ne-a răspuns la întrebări cu răbdare. Perfect pentru călătorii musulmani care vizitează Istanbulul.\""
  },
  "reviews.r16.info": {
    en: "Couple · Morocco", tr: "Çift · Fas", de: "Paar · Marokko",
    es: "Pareja · Marruecos", ru: "Пара · Марокко", ar: "زوجان · المغرب",
    fa: "زوج · مراکش", fr: "Couple · Maroc", it: "Coppia · Marocco", zh: "情侣 · 摩洛哥", id: "Pasangan · Maroko", ms: "Pasangan · Maghribi", pl: "Para · Maroko", bg: "Двойка · Мароко", ro: "Cuplu · Maroc"
  },
  "reviews.r17": {
    en: "\"Pure Istanbul magic. The DJ after dinner kept us dancing until midnight. Incredible energy on the dance floor.\"",
    tr: "\"Saf İstanbul büyüsü. Yemekten sonra DJ gece yarısına kadar dans ettirdi. Dans pistinde inanılmaz bir enerji.\"",
    de: "\"Pure Istanbul-Magie. Der DJ nach dem Essen hielt uns bis Mitternacht auf der Tanzfläche. Unglaubliche Energie.\"",
    es: "\"Pura magia de Estambul. El DJ después de la cena nos mantuvo bailando hasta medianoche. Energía increíble.\"",
    ru: "\"Чистая магия Стамбула. DJ после ужина удерживал нас на танцполе до полуночи. Невероятная энергия.\"",
    ar: "\"سحر إسطنبول الخالص. DJ بعد العشاء أبقانا نرقص حتى منتصف الليل. طاقة لا تصدق على حلبة الرقص.\"",
    fa: "«جادوی خالص استانبول. دی‌جی پس از شام ما را تا نیمه‌شب به رقص واداشت. انرژی باورنکردنی در پیست رقص.»", fr: "« La pure magie d'Istanbul. Le DJ après le dîner nous a fait danser jusqu'à minuit. Une énergie incroyable sur la piste de danse. »", it: "\"Pura magia di Istanbul. Il DJ dopo cena ci ha fatto ballare fino a mezzanotte. Energia incredibile sulla pista da ballo.\"", zh: "\"纯粹的伊斯坦布尔魔力。晚宴后DJ让我们跳舞到午夜。舞池能量难以置信。\"", id: "\"Keajaiban Istanbul murni. DJ setelah makan malam membuat kami berdansa sampai tengah malam. Energi luar biasa di lantai dansa.\"", ms: "\"Keajaiban Istanbul tulen. DJ selepas makan malam buat kami menari sehingga tengah malam. Tenaga luar biasa di lantai tarian.\"", pl: "\"Czysta magia Stambułu. DJ po kolacji trzymał nas w tańcu do północy. Niesamowita energia na parkiecie.\"", bg: "\"Чиста истанбулска магия. DJ след вечерята ни задържа танцуващи до полунощ. Невероятна енергия на дансинга.\"", ro: "\"Magie pură din Istanbul. DJ-ul după cină ne-a ținut dansând până la miezul nopții. Energie incredibilă pe ringul de dans.\""
  },
  "reviews.r17.info": {
    en: "Solo · Brazil", tr: "Tek · Brezilya", de: "Solo · Brasilien",
    es: "Solo · Brasil", ru: "Соло · Бразилия", ar: "فردي · البرازيل",
    fa: "مسافر تنها · برزیل", fr: "Solo · Brésil", it: "Singolo · Brasile", zh: "独行 · 巴西", id: "Solo · Brasil", ms: "Bersendirian · Brazil", pl: "Solo · Brazylia", bg: "Сам · Бразилия", ro: "Individual · Brazilia"
  },
  "reviews.r18": {
    en: "\"Took my parents for their 40th anniversary. They still talk about the dervish performance. Thank you for making it special.\"",
    tr: "\"Annem ve babamı 40. evlilik yıldönümleri için götürdüm. Hâlâ semazen gösterisini konuşuyorlar. Özel kıldığınız için teşekkürler.\"",
    de: "\"Brachte meine Eltern zum 40. Hochzeitstag. Sie reden immer noch vom Derwisch-Auftritt. Danke für den besonderen Abend.\"",
    es: "\"Llevé a mis padres a su 40 aniversario. Todavía hablan del derviche. Gracias por hacerlo especial.\"",
    ru: "\"Повёз родителей на 40-летие свадьбы. Они до сих пор говорят о выступлении дервиша. Спасибо, что сделали этот вечер особенным.\"",
    ar: "\"اصطحبت والديّ في الذكرى الأربعين لزواجهما. لا يزالان يتحدثان عن عرض الدرويش. شكرًا لجعلها مميزة.\"",
    fa: "«پدر و مادرم را برای چهلمین سالگرد ازدواجشان بردم. هنوز از اجرای درویش‌ها صحبت می‌کنند. ممنون که این شب را ویژه کردید.»", fr: "« J'ai emmené mes parents pour leurs 40 ans de mariage. Ils parlent encore du spectacle des derviches. Merci d'avoir rendu ce moment si spécial. »", it: "\"Ho portato i miei genitori per il loro 40° anniversario. Parlano ancora dell'esibizione dei dervisci. Grazie per averla resa speciale.\"", zh: "\"带父母庆祝他们40周年纪念。他们至今还在谈论旋转舞表演。感谢你们让它变得特别。\"", id: "\"Membawa orang tua saya untuk hari jadi ke-40 mereka. Mereka masih membicarakan pertunjukan darwis. Terima kasih telah membuatnya istimewa.\"", ms: "\"Bawa ibu bapa saya untuk ulang tahun perkahwinan ke-40. Mereka masih bercakap tentang persembahan darwish. Terima kasih kerana menjadikannya istimewa.\"", pl: "\"Zabrałem rodziców na ich 40. rocznicę. Nadal mówią o występie derwiszów. Dziękuję za wyjątkową chwilę.\"", bg: "\"Заведох родителите си за 40-ата им годишнина. Все още говорят за изпълнението на дервишите. Благодаря, че направихте всичко специално.\"", ro: "\"Mi-am dus părinții pentru a 40-a lor aniversare. Încă vorbesc despre reprezentația dervișilor. Vă mulțumesc că ați făcut-o specială.\""
  },
  "reviews.r18.info": {
    en: "Family · India", tr: "Aile · Hindistan", de: "Familie · Indien",
    es: "Familia · India", ru: "Семья · Индия", ar: "عائلة · الهند",
    fa: "خانواده · هند", fr: "Famille · Inde", it: "Famiglia · India", zh: "家庭 · 印度", id: "Keluarga · India", ms: "Keluarga · India", pl: "Rodzina · Indie", bg: "Семейство · Индия", ro: "Familie · India"
  },
  "reviews.r19": {
    en: "\"Incredibly organized. On time, exactly as described, clean boat. In Japan we value this — they delivered.\"",
    tr: "\"İnanılmaz derecede organize. Zamanında, anlatıldığı gibi, temiz tekne. Japonya'da buna değer veririz, gerçekleştirdiler.\"",
    de: "\"Unglaublich organisiert. Pünktlich, genau wie beschrieben, sauberes Boot. In Japan schätzen wir das — sie haben geliefert.\"",
    es: "\"Increíblemente organizado. Puntual, como lo describen, barco limpio. En Japón valoramos esto — lo cumplieron.\"",
    ru: "\"Невероятно организованно. Точно по времени, как описано, чистая лодка. В Японии мы это ценим — они справились.\"",
    ar: "\"منظم بشكل لا يصدق. في الوقت المحدد، تمامًا كما وُصف، قارب نظيف. في اليابان نقدر هذا — ونجحوا.\"",
    fa: "«سازماندهی فوق‌العاده. به موقع، دقیقاً مطابق توصیف و کشتی تمیز. در ژاپن به این چیزها اهمیت می‌دهیم — آن‌ها به خوبی انجام دادند.»", fr: "« Incroyablement organisé. À l'heure, exactement comme décrit, bateau propre. Au Japon, nous valorisons cela — ils ont tenu parole. »", it: "\"Incredibilmente organizzati. Puntuali, esattamente come descritto, barca pulita. In Giappone lo apprezziamo — hanno mantenuto le promesse.\"", zh: "\"组织得极好。准时、完全符合描述、船很干净。在日本我们看重这些——他们做到了。\"", id: "\"Sangat terorganisir. Tepat waktu, persis seperti yang dijelaskan, kapal bersih. Di Jepang kami menghargai ini — mereka memenuhinya.\"", ms: "\"Sangat teratur. Tepat pada masa, betul-betul seperti yang dijelaskan, bot bersih. Di Jepun kami hargai ini — mereka memenuhinya.\"", pl: "\"Niewiarygodnie zorganizowani. Punktualnie, dokładnie jak opisano, czysta łódź. W Japonii cenimy to — oni dostarczyli.\"", bg: "\"Невероятно организирано. Навреме, точно както е описано, чиста лодка. В Япония ценим това — изпълниха го.\"", ro: "\"Incredibil de organizat. La timp, exact cum a fost descris, vapor curat. În Japonia apreciem asta — au livrat.\""
  },
  "reviews.r19.info": {
    en: "Solo · Japan", tr: "Tek · Japonya", de: "Solo · Japan",
    es: "Solo · Japón", ru: "Соло · Япония", ar: "فردي · اليابان",
    fa: "مسافر تنها · ژاپن", fr: "Solo · Japon", it: "Singolo · Giappone", zh: "独行 · 日本", id: "Solo · Jepang", ms: "Bersendirian · Jepun", pl: "Solo · Japonia", bg: "Сам · Япония", ro: "Individual · Japonia"
  },
  "reviews.r20": {
    en: "\"Booked the morning of the cruise. Confirmed within 10 minutes. Paid cash on the boat. Could not be easier.\"",
    tr: "\"Tur sabahı rezervasyon yaptık. 10 dakikada onaylandı. Teknede nakit ödedik. Daha kolay olamazdı.\"",
    de: "\"Morgens am Tag der Tour gebucht. Binnen 10 Minuten bestätigt. Bar an Bord bezahlt. Könnte nicht einfacher sein.\"",
    es: "\"Reservamos la mañana del crucero. Confirmado en 10 minutos. Pagamos en efectivo en el barco. No podría ser más fácil.\"",
    ru: "\"Забронировали утром в день круиза. Подтвердили за 10 минут. Оплатили наличными на борту. Проще не бывает.\"",
    ar: "\"حجزنا صباح يوم الرحلة. تم التأكيد خلال 10 دقائق. دفعنا نقدًا على القارب. لا يمكن أن يكون أسهل.\"",
    fa: "«صبح همان روز تور رزرو کردم. ظرف ۱۰ دقیقه تأیید شد. روی کشتی نقدی پرداخت کردم. راحت‌تر از این نمی‌شد.»", fr: "« Réservé le matin même de la croisière. Confirmation en 10 minutes. Payé en espèces à bord. Difficile de faire plus simple. »", it: "\"Prenotato la mattina stessa della crociera. Confermato in 10 minuti. Pagato in contanti a bordo. Non potrebbe essere più semplice.\"", zh: "\"当天早上预订。10分钟内确认。船上付现金。再简单不过。\"", id: "\"Memesan pagi pelayaran. Dikonfirmasi dalam 10 menit. Membayar tunai di kapal. Tidak bisa lebih mudah.\"", ms: "\"Menempah pada pagi pelayaran. Disahkan dalam 10 minit. Bayar tunai di atas bot. Tidak boleh lebih mudah.\"", pl: "\"Zarezerwowałem w dniu rejsu rano. Potwierdzono w ciągu 10 minut. Zapłaciłem gotówką na pokładzie. Nie może być prościej.\"", bg: "\"Резервирах сутринта преди круиза. Потвърдено в рамките на 10 минути. Платих в брой на борда. Не може да бъде по-лесно.\"", ro: "\"Am rezervat în dimineața croazierei. Confirmat în 10 minute. Plătit cash pe vapor. Nu putea fi mai ușor.\""
  },
  "reviews.r20.info": {
    en: "Couple · Australia", tr: "Çift · Avustralya", de: "Paar · Australien",
    es: "Pareja · Australia", ru: "Пара · Австралия", ar: "زوجان · أستراليا",
    fa: "زوج · استرالیا", fr: "Couple · Australie", it: "Coppia · Australia", zh: "情侣 · 澳大利亚", id: "Pasangan · Australia", ms: "Pasangan · Australia", pl: "Para · Australia", bg: "Двойка · Австралия", ro: "Cuplu · Australia"
  },
  "reviews.r21": {
    en: "\"Italian food snob here. Surprised by how good the Turkish courses were. Meze variety was genuinely impressive.\"",
    tr: "\"İtalyan yemek meraklısıyım. Türk yemeklerinin ne kadar iyi olduğuna şaşırdım. Meze çeşitliliği gerçekten etkileyiciydi.\"",
    de: "\"Italienischer Essens-Snob hier. Überrascht, wie gut die türkischen Gänge waren. Die Meze-Vielfalt war wirklich beeindruckend.\"",
    es: "\"Sibarita italiana aquí. Sorprendida por lo buenos que fueron los platos turcos. La variedad de mezes fue realmente impresionante.\"",
    ru: "\"Я итальянский гурман. Удивлена, насколько хороши были турецкие блюда. Выбор мезе впечатлил.\"",
    ar: "\"محبة للطعام الإيطالي. فوجئت بجودة الأطباق التركية. تنوع المقبلات كان مثيرًا للإعجاب.\"",
    fa: "«من در غذای ایتالیایی سخت‌گیر هستم. از خوب بودن غذاهای ترکی شگفت‌زده شدم. تنوع مزه‌ها واقعاً چشم‌گیر بود.»", fr: "« Je suis un snob de la cuisine italienne. Surpris par la qualité des plats turcs. La variété des mezzés était vraiment impressionnante. »", it: "\"Sono un esigente della cucina italiana. Sorpreso da quanto fossero buoni i piatti turchi. La varietà di meze è stata davvero impressionante.\"", zh: "\"我是个意大利美食挑剔者。土耳其菜肴的美味让我惊喜。冷盘种类确实令人印象深刻。\"", id: "\"Penggemar makanan Italia di sini. Terkejut dengan betapa enaknya hidangan Turki. Variasi meze sungguh mengesankan.\"", ms: "\"Pencinta makanan Itali di sini. Terkejut dengan sedapnya hidangan Turki. Kepelbagaian meze benar-benar mengagumkan.\"", pl: "\"Jestem włoskim snobem kulinarnym. Zaskoczyło mnie, jak dobre były tureckie dania. Różnorodność mezze była naprawdę imponująca.\"", bg: "\"Италиански познавач на храна тук. Изненадан съм колко добри бяха турските ястия. Разнообразието на мезета беше наистина впечатляващо.\"", ro: "\"Snob al mâncării italiene aici. Surprins de cât de bune au fost felurile turcești. Varietatea de mezeluri a fost cu adevărat impresionantă.\""
  },
  "reviews.r21.info": {
    en: "Solo · Italy", tr: "Tek · İtalya", de: "Solo · Italien",
    es: "Solo · Italia", ru: "Соло · Италия", ar: "فردي · إيطاليا",
    fa: "مسافر تنها · ایتالیا", fr: "Solo · Italie", it: "Singolo · Italia", zh: "独行 · 意大利", id: "Solo · Italia", ms: "Bersendirian · Itali", pl: "Solo · Włochy", bg: "Сам · Италия", ro: "Individual · Italia"
  },
  "reviews.r22": {
    en: "\"Korean couple visiting Istanbul. Everyone spoke English, the whole evening flowed seamlessly. Highlight of our trip.\"",
    tr: "\"İstanbul'a gelen Koreli çift. Herkes İngilizce konuşuyordu, akşam sorunsuz akıp gitti. Seyahatimizin en güzel anı.\"",
    de: "\"Koreanisches Paar zu Besuch in Istanbul. Alle sprachen Englisch, der ganze Abend verlief reibungslos. Höhepunkt unserer Reise.\"",
    es: "\"Pareja coreana visitando Estambul. Todos hablaban inglés, toda la noche fluyó sin problemas. Lo mejor de nuestro viaje.\"",
    ru: "\"Корейская пара в Стамбуле. Все говорили по-английски, весь вечер прошёл без сучка и задоринки. Главное впечатление поездки.\"",
    ar: "\"زوجان كوريان يزوران إسطنبول. الجميع يتحدث الإنجليزية، الأمسية كلها تدفقت بسلاسة. أبرز لحظة رحلتنا.\"",
    fa: "«زوج کره‌ای در سفر به استانبول. همه انگلیسی صحبت می‌کردند و کل شب بدون مشکل پیش رفت. نقطه اوج سفر ما بود.»", fr: "« Couple coréen en visite à Istanbul. Tout le monde parlait anglais, la soirée s'est déroulée sans accroc. Le point fort de notre voyage. »", it: "\"Coppia coreana in visita a Istanbul. Tutti parlavano inglese, tutta la serata è scorsa senza intoppi. Il momento clou del nostro viaggio.\"", zh: "\"韩国情侣游伊斯坦布尔。所有人都讲英语，整个晚上流畅无缝。此行的亮点。\"", id: "\"Pasangan Korea yang mengunjungi Istanbul. Semua orang berbicara bahasa Inggris, seluruh malam mengalir dengan mulus. Sorotan perjalanan kami.\"", ms: "\"Pasangan Korea melawat Istanbul. Semua orang bertutur bahasa Inggeris, seluruh malam berjalan dengan lancar. Puncak perjalanan kami.\"", pl: "\"Koreańska para odwiedzająca Stambuł. Wszyscy mówili po angielsku, cały wieczór przebiegł płynnie. Główny punkt naszej podróży.\"", bg: "\"Корейска двойка на посещение в Истанбул. Всички говореха английски, цялата вечер протече безупречно. Връхната точка на пътуването ни.\"", ro: "\"Cuplu coreean în vizită la Istanbul. Toți vorbeau engleza, întreaga seară a curs perfect. Punctul culminant al călătoriei noastre.\""
  },
  "reviews.r22.info": {
    en: "Couple · South Korea", tr: "Çift · Güney Kore", de: "Paar · Südkorea",
    es: "Pareja · Corea del Sur", ru: "Пара · Южная Корея", ar: "زوجان · كوريا الجنوبية",
    fa: "زوج · کره جنوبی", fr: "Couple · Corée du Sud", it: "Coppia · Corea del Sud", zh: "情侣 · 韩国", id: "Pasangan · Korea Selatan", ms: "Pasangan · Korea Selatan", pl: "Para · Korea Południowa", bg: "Двойка · Южна Корея", ro: "Cuplu · Coreea de Sud"
  },
  "reviews.showMore": {
    en: "+5 more reviews",
    tr: "+5 yorum daha",
    de: "+5 weitere Bewertungen",
    es: "+5 reseñas más",
    ru: "+5 ещё отзывов",
    ar: "+٥ تقييمات أخرى",
    fa: "+۵ نظر دیگر", fr: "+5 avis supplémentaires", it: "+5 altre recensioni", zh: "+5条更多评价", id: "+5 ulasan lainnya", ms: "+5 ulasan lagi", pl: "+5 kolejnych opinii", bg: "+5 още отзиви", ro: "+5 mai multe recenzii"
  },

  // ========== HOW IT WORKS ==========
  "how.label": {
    en: "Simple Booking", tr: "Kolay Rezervasyon", de: "Einfache Buchung",
    es: "Reserva Sencilla", ru: "Простое бронирование", ar: "حجز سهل",
    fa: "رزرو ساده", fr: "Réservation simple", it: "Prenotazione semplice", zh: "简单预订", id: "Pemesanan Sederhana", ms: "Tempahan Mudah", pl: "Prosta rezerwacja", bg: "Лесна резервация", ro: "Rezervare Simplă"
  },
  "how.title": {
    en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert es",
    es: "Cómo Funciona", ru: "Как это работает", ar: "كيف يعمل",
    fa: "نحوه کار", fr: "Comment ça marche", it: "Come funziona", zh: "流程说明", id: "Cara Kerjanya", ms: "Cara Ia Berfungsi", pl: "Jak to działa", bg: "Как работи", ro: "Cum Funcționează"
  },
  "how.subtitle": {
    en: "Write or call us. We'll handle the rest.",
    tr: "Bize yazın veya arayın. Gerisini biz halledelim.",
    de: "Schreiben oder rufen Sie uns an. Wir erledigen den Rest.",
    es: "Escríbenos o llámanos. Nosotros nos encargamos del resto.",
    ru: "Напишите или позвоните нам. Мы позаботимся об остальном.",
    ar: "راسلنا أو اتصل بنا. نحن نتولى الباقي.",
    fa: "به ما بنویسید یا تماس بگیرید. باقی را ما انجام می‌دهیم.", fr: "Écrivez-nous ou appelez-nous. Nous nous occupons du reste.", it: "Ci scriva o ci chiami. Al resto pensiamo noi.", zh: "来信或致电我们。其余交给我们。", id: "Tulis atau telepon kami. Kami urus sisanya.", ms: "Tulis atau telefon kami. Kami akan uruskan selebihnya.", pl: "Napisz do nas lub zadzwoń. My zajmiemy się resztą.", bg: "Пишете ни или се обадете. Ние се грижим за останалото.", ro: "Scrieți-ne sau sunați-ne. Ne ocupăm noi de rest."
  },
  "how.s1.title": {
    en: "Share Booking Details", tr: "Rezervasyon Detaylarını Girin", de: "Buchungsdetails angeben",
    es: "Comparta los detalles de la reserva", ru: "Укажите детали бронирования", ar: "شارك تفاصيل الحجز",
    fa: "جزئیات رزرو را بفرستید", fr: "Partagez les détails de réservation", it: "Condivida i dettagli della prenotazione", zh: "分享预订详情", id: "Bagikan Detail Pemesanan", ms: "Kongsi Butiran Tempahan", pl: "Podaj szczegóły rezerwacji", bg: "Споделете данните за резервацията", ro: "Împărtășiți Detaliile Rezervării"
  },
  "how.s1.desc": {
    en: "Tell us the date, number of guests, and package (Standard or VIP).",
    tr: "Tarih, kişi sayısı ve paketi (Standard veya VIP) belirleyin.",
    de: "Teilen Sie uns Datum, Gästeanzahl und Paket (Standard oder VIP) mit.",
    es: "Indíquenos la fecha, el número de invitados y el paquete (Standard o VIP).",
    ru: "Укажите дату, количество гостей и пакет (Standard или VIP).",
    ar: "أخبرنا بالتاريخ وعدد الضيوف والباقة (القياسية أو VIP).",
    fa: "تاریخ، تعداد مهمانان و پکیج (استاندارد یا VIP) را به ما بگویید.", fr: "Indiquez-nous la date, le nombre d'invités et le forfait (Standard ou VIP).", it: "Ci dica la data, il numero di ospiti e il pacchetto (Standard o VIP).", zh: "告诉我们日期、宾客人数与套餐（标准或VIP）。", id: "Beritahu kami tanggal, jumlah tamu, dan paket (Standar atau VIP).", ms: "Beritahu kami tarikh, bilangan tetamu dan pakej (Standard atau VIP).", pl: "Podaj nam datę, liczbę gości i pakiet (Standard lub VIP).", bg: "Кажете ни датата, броя гости и пакета (Стандарт или VIP).", ro: "Spuneți-ne data, numărul de oaspeți și pachetul (Standard sau VIP)."
  },
  "how.s2.title": {
    en: "Write, Call, or We'll Call You", tr: "Yazın, Arayın veya Biz Sizi Arayalım", de: "Schreiben, anrufen oder wir rufen Sie an",
    es: "Escríbenos, Llámanos o Te Llamamos", ru: "Напишите, Позвоните или Мы Вам Перезвоним", ar: "اكتب، اتصل، أو سنتصل بك",
    fa: "بنویسید، تماس بگیرید یا ما تماس می‌گیریم", fr: "Écrivez, appelez ou nous vous rappelons", it: "Scriva, chiami o La richiameremo", zh: "来信、致电或我们回拨", id: "Tulis, Telepon, atau Kami akan Menelepon Anda", ms: "Tulis, Telefon atau Kami Akan Telefon Anda", pl: "Napisz, zadzwoń lub my oddzwonimy", bg: "Пишете, обадете се или ние ще Ви се обадим", ro: "Scrieți, Sunați sau Vă Sunăm Noi"
  },
  "how.s2.desc": {
    en: "Message or call — whatever works for you. We respond quickly.",
    tr: "Yazılı veya sesli — size uygun şekilde iletişime geçin. Hızla dönüş yaparız.",
    de: "Schriftlich oder telefonisch — wie es Ihnen passt. Wir antworten schnell.",
    es: "Por mensaje o llamada — como prefieras. Respondemos rápido.",
    ru: "Письменно или по телефону — как вам удобно. Отвечаем быстро.",
    ar: "كتابياً أو صوتياً — كما يناسبك. نرد بسرعة.",
    fa: "پیام دهید یا تماس بگیرید — هر کدام راحت‌تر است. سریع پاسخ می‌دهیم.", fr: "Message ou appel — comme vous préférez. Nous répondons rapidement.", it: "Ci scriva o ci chiami — come preferisce. Rispondiamo rapidamente.", zh: "信息或电话均可——您方便就好。我们快速回应。", id: "Kirim pesan atau telepon — apa pun yang cocok untuk Anda. Kami merespons dengan cepat.", ms: "Hantar mesej atau telefon — apa saja yang sesuai untuk anda. Kami balas dengan cepat.", pl: "Wiadomość lub telefon — jak Państwu wygodnie. Odpowiadamy szybko.", bg: "Пишете или се обадете — както Ви е удобно. Отговаряме бързо.", ro: "Scrieți sau sunați — orice vă convine. Răspundem rapid."
  },
  "how.s3.title": {
    en: "Show Up & Pay on the Boat", tr: "Gelin & Teknede Ödeyin",
    de: "Kommen & an Bord bezahlen", es: "Llega y paga en el barco",
    ru: "Приходите и платите на борту", ar: "احضر وادفع على القارب",
    fa: "بیایید و روی کشتی پرداخت کنید", fr: "Présentez-vous & payez à bord", it: "Si presenti e paghi a bordo", zh: "到场 & 船上付款", id: "Datang & Bayar di Kapal", ms: "Hadir & Bayar di Atas Bot", pl: "Przyjdź i zapłać na pokładzie", bg: "Елате и платете на борда", ro: "Veniți și Plătiți pe Vapor"
  },
  "how.s3.desc": {
    en: "No prepayment needed. Just arrive at the pier, board your cruise, and pay onboard.",
    tr: "Ön ödeme gerekmez. İskeleye gelin, tekneye binin, ödemenizi teknede yapın.",
    de: "Keine Vorauszahlung. Einfach am Pier erscheinen, einsteigen und an Bord bezahlen.",
    es: "Sin prepago. Solo llega al muelle, sube a bordo y paga en el barco.",
    ru: "Предоплата не нужна. Просто приходите на пирс, садитесь на борт и платите там.",
    ar: "لا حاجة للدفع المسبق. فقط احضر إلى الرصيف واصعد على متن القارب وادفع هناك.",
    fa: "نیازی به پیش‌پرداخت نیست. فقط به اسکله بیایید، سوار شوید و روی کشتی پرداخت کنید.", fr: "Aucun prépaiement nécessaire. Rendez-vous à l'embarcadère, embarquez et payez à bord.", it: "Nessun anticipo necessario. Arrivi al molo, salga a bordo della crociera e paghi in barca.", zh: "无需预付。只需到达码头、登船、船上付款。", id: "Tanpa pembayaran di muka. Cukup tiba di dermaga, naik kapal, dan bayar di kapal.", ms: "Tiada bayaran pendahuluan diperlukan. Cuma tiba di jeti, naiki pelayaran anda dan bayar di atas kapal.", pl: "Bez przedpłaty. Wystarczy przybyć na przystań, wejść na pokład i zapłacić na statku.", bg: "Без нужда от предплащане. Просто пристигнете на кея, качете се на круиза и платете на борда.", ro: "Nu este nevoie de plată în avans. Doar ajungeți la debarcader, îmbarcați-vă și plătiți la bord."
  },

  // ========== LAST MINUTE ==========
  "last.title": {
    en: "Need a Cruise Tonight?", tr: "Bu Gece Tur İster misiniz?",
    de: "Heute Nacht eine Tour?", es: "¿Necesitas un crucero esta noche?",
    ru: "Нужен круиз сегодня?", ar: "هل تحتاج رحلة الليلة؟",
    fa: "امشب تور می‌خواهید؟", fr: "Besoin d'une croisière ce soir ?", it: "Ha bisogno di una crociera stasera?", zh: "今晚想游船？", id: "Butuh Pelayaran Malam Ini?", ms: "Perlukan Pelayaran Malam Ini?", pl: "Potrzebują Państwo rejsu na dziś?", bg: "Имате нужда от круиз тази вечер?", ro: "Aveți Nevoie de o Croazieră în Seara Aceasta?"
  },
  "last.desc": {
    en: "Our team can check same-day availability for you in seconds. Message us — we respond instantly, 24/7.",
    tr: "Ekibimiz aynı gün müsaitliği saniyeler içinde kontrol edebilir. Bize yazın — 7/24 anında cevap veriyoruz.",
    de: "Unser Team prüft die Verfügbarkeit in Sekunden. Schreiben Sie uns — wir antworten sofort, 24/7.",
    es: "Nuestro equipo puede verificar la disponibilidad del mismo día en segundos. Escríbenos — respondemos al instante, 24/7.",
    ru: "Наша команда проверит наличие на сегодня за секунды. Напишите нам — мы отвечаем мгновенно, 24/7.",
    ar: "يمكن لفريقنا التحقق من توفر اليوم نفسه في ثوانٍ. راسلنا — نستجيب فوراً على مدار الساعة.",
    fa: "تیم ما می‌تواند در چند ثانیه ظرفیت همان روز را برای شما بررسی کند. پیام دهید — ۲۴/۷ فوراً پاسخ می‌دهیم.", fr: "Notre équipe peut vérifier la disponibilité du jour même en quelques secondes. Écrivez-nous — nous répondons instantanément, 24h/24 7j/7.", it: "Il nostro team può verificare la disponibilità in giornata per Lei in pochi secondi. Ci scriva — rispondiamo all'istante, 7/24.", zh: "我们团队可在几秒内为您查询当日余位。发信息给我们——我们7/24即时回应。", id: "Tim kami dapat memeriksa ketersediaan hari yang sama untuk Anda dalam hitungan detik. Kirim pesan kepada kami — kami merespons secara instan, 24/7.", ms: "Pasukan kami boleh menyemak kekosongan hari sama untuk anda dalam beberapa saat. Hantar mesej kepada kami — kami balas serta-merta, 24/7.", pl: "Nasz zespół może sprawdzić dostępność tego samego dnia w kilka sekund. Prosimy napisać — odpowiadamy natychmiast, 24/7.", bg: "Екипът ни може да провери наличността за същия ден за секунди. Пишете ни — отговаряме мигновено, 24/7.", ro: "Echipa noastră poate verifica disponibilitatea pentru aceeași zi în câteva secunde. Scrieți-ne — răspundem instant, 24/7."
  },
  "last.cta": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et",
    de: "Entdecken & buchen", es: "Explorar y Reservar",
    ru: "Узнать и забронировать", ar: "استكشف واحجز",
    fa: "مشاهده و رزرو", fr: "Explorer & réserver", it: "Esplora e Prenota", zh: "查看与预订", id: "Jelajahi & Pesan", ms: "Terokai & Tempah", pl: "Przeglądaj i rezerwuj", bg: "Разгледайте и резервирайте", ro: "Explorați și Rezervați"
  },
  "last.summary": {
    en: "21:00 · 3 hours · Dinner & Live Show · Pay on the boat",
    tr: "21:00 · 3 saat · Yemek & Canlı Şov · Teknede ödeme",
    de: "21:00 · 3 Stunden · Abendessen & Live-Show · Zahlung an Bord",
    es: "21:00 · 3 horas · Cena y Show en Vivo · Pago en el barco",
    ru: "21:00 · 3 часа · Ужин и живое шоу · Оплата на борту",
    ar: "21:00 · 3 ساعات · عشاء وعرض حي · الدفع على القارب",
    fa: "۲۱:۰۰ · ۳ ساعت · شام و نمایش زنده · پرداخت روی کشتی", fr: "21h00 · 3 heures · Dîner & spectacle live · Paiement à bord", it: "21:00 · 3 ore · Cena e spettacolo dal vivo · Pagamento a bordo", zh: "21:00 · 3小时 · 晚宴与现场表演 · 船上付款", id: "21:00 · 3 jam · Makan Malam & Pertunjukan Langsung · Bayar di kapal", ms: "21:00 · 3 jam · Makan Malam & Persembahan Langsung · Bayar di atas bot", pl: "21:00 · 3 godziny · Kolacja i pokaz na żywo · Płatność na pokładzie", bg: "21:00 ч. · 3 часа · Вечеря и шоу на живо · Плащане на борда", ro: "21:00 · 3 ore · Cină și Spectacol Live · Plata pe vapor"
  },

  // ========== WHY CHOOSE US ==========
  "why.label": {
    en: "Why Choose Us", tr: "Neden Biz", de: "Warum wir",
    es: "Por qué elegirnos", ru: "Почему мы", ar: "لماذا نحن",
    fa: "چرا ما را انتخاب کنید", fr: "Pourquoi nous choisir", it: "Perché sceglierci", zh: "选择我们的理由", id: "Mengapa Memilih Kami", ms: "Kenapa Pilih Kami", pl: "Dlaczego my", bg: "Защо да изберете нас", ro: "De Ce Să Ne Alegeți"
  },
  "why.title": {
    en: "We Stay With You", tr: "Yanınızdayız", de: "Wir sind für Sie da",
    es: "Estamos contigo", ru: "Мы с вами", ar: "نبقى معك",
    fa: "همراه شما می‌مانیم", fr: "Nous restons à vos côtés", it: "Restiamo con Lei", zh: "我们与您同在", id: "Kami Tetap Bersama Anda", ms: "Kami Kekal Bersama Anda", pl: "Jesteśmy z Państwem", bg: "Оставаме с Вас", ro: "Rămânem cu Dumneavoastră"
  },
  "why.before": {
    en: "Before", tr: "Öncesinde", de: "Vorher", es: "Antes", ru: "До", ar: "قبل",
    fa: "پیش از تور", fr: "Avant", it: "Prima", zh: "行前", id: "Sebelum", ms: "Sebelum", pl: "Przed", bg: "Преди", ro: "Înainte"
  },
  "why.before.desc": {
    en: "We help you choose the perfect package, answer all your questions, and confirm your reservation.",
    tr: "Mükemmel paketi seçmenize yardım eder, tüm sorularınızı cevaplar ve rezervasyonunuzu onaylarız.",
    de: "Wir helfen beim perfekten Paket, beantworten alle Fragen und bestätigen Ihre Buchung.",
    es: "Te ayudamos a elegir el paquete perfecto, respondemos todas tus preguntas y confirmamos tu reserva.",
    ru: "Мы поможем выбрать идеальный пакет, ответим на все вопросы и подтвердим бронирование.",
    ar: "نساعدك في اختيار الباقة المثالية ونجيب على جميع أسئلتك ونؤكد حجزك.",
    fa: "کمک می‌کنیم پکیج مناسب را انتخاب کنید، به همه سؤالات پاسخ می‌دهیم و رزرو شما را تأیید می‌کنیم.", fr: "Nous vous aidons à choisir le forfait idéal, répondons à toutes vos questions et confirmons votre réservation.", it: "La aiutiamo a scegliere il pacchetto perfetto, rispondiamo a tutte le Sue domande e confermiamo la Sua prenotazione.", zh: "我们帮您挑选合适的套餐、回答所有问题并确认您的预订。", id: "Kami membantu Anda memilih paket yang sempurna, menjawab semua pertanyaan Anda, dan mengonfirmasi reservasi Anda.", ms: "Kami bantu anda memilih pakej yang sempurna, jawab semua soalan anda dan sahkan tempahan anda.", pl: "Pomożemy wybrać idealny pakiet, odpowiemy na wszystkie pytania i potwierdzimy rezerwację.", bg: "Помагаме Ви да изберете перфектния пакет, отговаряме на всички въпроси и потвърждаваме резервацията Ви.", ro: "Vă ajutăm să alegeți pachetul perfect, răspundem la toate întrebările dumneavoastră și confirmăm rezervarea."
  },
  "why.during": {
    en: "During", tr: "Sırasında", de: "Während", es: "Durante", ru: "Во время", ar: "أثناء",
    fa: "حین تور", fr: "Pendant", it: "Durante", zh: "行中", id: "Selama", ms: "Semasa", pl: "W trakcie", bg: "По време", ro: "În Timpul"
  },
  "why.during.desc": {
    en: "We check on you during the cruise to make sure everything is perfect. Any issue? We handle it immediately.",
    tr: "Tur sırasında her şeyin mükemmel olduğundan emin olmak için sizinle iletişime geçeriz. Sorun mu var? Anında çözeriz.",
    de: "Wir prüfen während der Tour, ob alles perfekt ist. Problem? Wir lösen es sofort.",
    es: "Te contactamos durante el crucero para asegurarnos de que todo sea perfecto. ¿Algún problema? Lo resolvemos de inmediato.",
    ru: "Мы связываемся с вами во время круиза, чтобы убедиться, что всё идеально. Проблема? Решим немедленно.",
    ar: "نتواصل معك أثناء الرحلة للتأكد من أن كل شيء مثالي. أي مشكلة؟ نتعامل معها فوراً.",
    fa: "در طول تور به شما سر می‌زنیم تا مطمئن شویم همه چیز عالی است. هر مشکلی پیش بیاید، فوراً حل می‌کنیم.", fr: "Nous vérifions pendant la croisière que tout est parfait. Un souci ? Nous le gérons immédiatement.", it: "La controlliamo durante la crociera per assicurarci che tutto sia perfetto. C'è un problema? Lo risolviamo immediatamente.", zh: "游船期间我们会关照您，确保一切完美。有任何问题?我们立即处理。", id: "Kami memeriksa Anda selama pelayaran untuk memastikan semuanya sempurna. Ada masalah? Kami tangani segera.", ms: "Kami menyemak anda semasa pelayaran untuk memastikan semuanya sempurna. Sebarang isu? Kami uruskan serta-merta.", pl: "Sprawdzamy Państwa podczas rejsu, aby upewnić się, że wszystko jest idealne. Jakiś problem? Rozwiązujemy go natychmiast.", bg: "Проверяваме Ви по време на круиза, за да сме сигурни, че всичко е перфектно. Някакъв проблем? Решаваме го веднага.", ro: "Vă verificăm în timpul croazierei pentru a ne asigura că totul este perfect. Vreo problemă? O rezolvăm imediat."
  },
  "why.after": {
    en: "After", tr: "Sonrasında", de: "Danach", es: "Después", ru: "После", ar: "بعد",
    fa: "پس از تور", fr: "Après", it: "Dopo", zh: "行后", id: "Setelah", ms: "Selepas", pl: "Po", bg: "След", ro: "După"
  },
  "why.after.desc": {
    en: "We follow up for your feedback and are always here if you want to book another experience in Istanbul.",
    tr: "Geri bildiriminiz için sizinle iletişime geçeriz ve İstanbul'da başka bir deneyim rezervasyonu için her zaman buradayız.",
    de: "Wir fragen nach Ihrem Feedback und sind da, wenn Sie ein weiteres Erlebnis in Istanbul buchen möchten.",
    es: "Hacemos seguimiento para tu opinión y siempre estamos aquí si quieres reservar otra experiencia en Estambul.",
    ru: "Мы свяжемся для отзыва и всегда готовы помочь забронировать ещё одно впечатление в Стамбуле.",
    ar: "نتابع معك للحصول على رأيك ونحن دائماً هنا إذا أردت حجز تجربة أخرى في إسطنبول.",
    fa: "برای دریافت بازخورد شما پیگیری می‌کنیم و اگر بخواهید تجربه دیگری در استانبول رزرو کنید، همیشه اینجاییم.", fr: "Nous vous recontactons pour vos retours et restons disponibles si vous souhaitez réserver une autre expérience à Istanbul.", it: "La ricontattiamo per il Suo feedback e siamo sempre qui se desidera prenotare un'altra esperienza a Istanbul.", zh: "我们会跟进您的反馈,如果您想再预订一次伊斯坦布尔的体验,我们随时都在。", id: "Kami menindaklanjuti untuk umpan balik Anda dan selalu siap jika Anda ingin memesan pengalaman lain di Istanbul.", ms: "Kami susul untuk maklum balas anda dan sentiasa di sini jika anda mahu menempah pengalaman lain di Istanbul.", pl: "Kontaktujemy się w sprawie opinii i jesteśmy zawsze dostępni, jeśli chcą Państwo zarezerwować kolejne doświadczenie w Stambule.", bg: "Следим за обратната Ви връзка и винаги сме тук, ако желаете да резервирате друго преживяване в Истанбул.", ro: "Urmărim feedback-ul dumneavoastră și suntem mereu aici dacă doriți să rezervați o altă experiență în Istanbul."
  },

  // ========== FAQ ==========
  "faq.label": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة الشائعة",
    fa: "سؤالات متداول", fr: "FAQ", it: "FAQ", zh: "常见问题", id: "FAQ", ms: "Soalan Lazim", pl: "FAQ", bg: "Въпроси", ro: "Întrebări Frecvente"
  },
  "faq.title": {
    en: "Frequently Asked Questions", tr: "Sık Sorulan Sorular",
    de: "Häufig gestellte Fragen", es: "Preguntas Frecuentes",
    ru: "Часто задаваемые вопросы", ar: "الأسئلة الشائعة",
    fa: "سؤالات پرتکرار", fr: "Questions fréquentes", it: "Domande frequenti", zh: "常见问题", id: "Pertanyaan yang Sering Diajukan", ms: "Soalan Kerap Ditanya", pl: "Najczęściej zadawane pytania", bg: "Често задавани въпроси", ro: "Întrebări Frecvente"
  },
  "faq.q0": { en: "What cruise tours do you offer?", tr: "Hangi tur seçenekleriniz var?", de: "Welche Touren bieten Sie an?", es: "¿Qué cruceros ofrecen?", ru: "Какие круизы вы предлагаете?", ar: "ما هي الرحلات البحرية التي تقدمونها؟", fa: "چه تورهایی ارائه می‌کنید؟", fr: "Quelles croisières proposez-vous ?", it: "Quali tour di crociera offrite?", zh: "您提供哪些游船?", id: "Tur pelayaran apa yang Anda tawarkan?", ms: "Apakah tur pelayaran yang anda tawarkan?", pl: "Jakie rejsy oferują Państwo?", bg: "Какви круизни турове предлагате?", ro: "Ce tururi de croazieră oferiți?" },
  "faq.a0": {
    en: "We offer the <strong>Bosphorus Dinner Cruise</strong> (21:00, 3 hours — full dinner, Turkish night show with Whirling Dervish, belly dance, folk dances, live music and DJ, plus stunning night views). Departs from Kabataş Pier.",
    tr: "<strong>Bosphorus Akşam Yemekli Turu</strong> sunuyoruz (21:00, 3 saat — tam menü akşam yemeği, Mevlana sema gösterisi, oryantal dans, halk oyunları, canlı müzik ve DJ, muhteşem gece manzarası). Kabataş İskelesi'nden kalkar.",
    de: "Wir bieten die <strong>Bosporus-Dinner-Kreuzfahrt</strong> (21:00, 3 Std. — Dinner, Türkische Nacht mit Derwisch-Tanz, Bauchtanz, Volkstänzen, Live-Musik und DJ, sowie atemberaubende Nachtblicke). Ab Kabataş-Pier.",
    es: "Ofrecemos el <strong>Crucero con Cena por el Bósforo</strong> (21:00, 3 horas — cena completa, noche turca con Derviches Giradores, danza del vientre, danzas folclóricas, música en vivo y DJ, más vistas nocturnas impresionantes). Sale del muelle de Kabataş.",
    ru: "Мы предлагаем <strong>Ужин-круиз по Босфору</strong> (21:00, 3 часа — ужин, турецкая ночь с кружащимися дервишами, танец живота, народные танцы, живая музыка и DJ, плюс впечатляющие ночные виды). Отправление с причала Кабаташ.",
    ar: "نقدم <strong>رحلة عشاء البوسفور</strong> (21:00، 3 ساعات — عشاء كامل، ليلة تركية مع رقصة الدراويش المولوية، رقص شرقي، رقصات شعبية، موسيقى حية وDJ، مع مناظر ليلية رائعة). تنطلق من رصيف كاباتاش.",
    fa: "ما <strong>تور شام بسفر</strong> را ارائه می‌کنیم (۲۱:۰۰، ۳ ساعت — شام کامل، نمایش شب ترکی با رقص سماع، رقص شرقی، رقص‌های محلی، موسیقی زنده و دی‌جی، به‌علاوه مناظر خیره‌کننده شبانه). حرکت از اسکله کاباتاش.", fr: "Nous proposons la <strong>Croisière dîner sur le Bosphore</strong> (21h00, 3 heures — dîner complet, soirée turque avec derviche tourneur, danse orientale, danses folkloriques, musique live et DJ, ainsi que des vues nocturnes éblouissantes). Départ de l'embarcadère de Kabataş.", it: "Offriamo la <strong>Crociera con Cena sul Bosforo</strong> (21:00, 3 ore — cena completa, spettacolo della serata turca con Dervisci Rotanti, danza orientale, danze folkloristiche, musica dal vivo e DJ, più splendide vedute notturne). Parte dal molo di Kabataş.", zh: "我们提供<strong>博斯普鲁斯晚宴游船</strong>(21:00,3小时——完整晚宴、含旋转舞、肚皮舞、民族舞、现场音乐与DJ的土耳其之夜表演,以及震撼夜景)。从卡巴塔什码头启航。", id: "Kami menawarkan <strong>Pelayaran Makan Malam Bosphorus</strong> (21:00, 3 jam — makan malam lengkap, pertunjukan malam Turki dengan Darwis Berputar, tari oriental, tarian rakyat, musik langsung dan DJ, ditambah pemandangan malam yang memukau). Berangkat dari Dermaga Kabataş.", ms: "Kami menawarkan <strong>Pelayaran Makan Malam Bosphorus</strong> (21:00, 3 jam — makan malam penuh, persembahan malam Turki dengan Darwish Berputar, tarian oryantal, tarian rakyat, muzik langsung dan DJ, serta pemandangan malam yang mengagumkan). Bertolak dari Jeti Kabataş.", pl: "Oferujemy <strong>Rejs z kolacją po Bosforze</strong> (21:00, 3 godziny — pełna kolacja, turecki pokaz nocny z wirującym derwiszem, tańcem brzucha, tańcami ludowymi, muzyką na żywo i DJ-em oraz zapierającymi dech w piersiach widokami nocnymi). Wypłynięcie z przystani Kabataş.", bg: "Предлагаме <strong>круиз с вечеря по Босфора</strong> (21:00 ч., 3 часа — пълна вечеря, турска нощна програма с танцуващи дервиши, танц на корема, фолклорни танци, музика на живо и DJ, плюс зашеметяващи нощни гледки). Отплаване от пристанището Кабаташ.", ro: "Oferim <strong>Croaziera cu Cină pe Bosfor</strong> (21:00, 3 ore — cină completă, spectacol de seară turcească cu Derviș Rotitor, dans oriental, dansuri populare, muzică live și DJ, plus priveliști nocturne uimitoare). Pleacă din debarcaderul Kabataș."
  },
  "faq.q1": { en: "What's on the dinner menu?", tr: "Yemek menüsünde neler var?", de: "Was gibt es zum Abendessen?", es: "¿Qué hay en el menú de la cena?", ru: "Что в меню ужина?", ar: "ماذا يوجد في قائمة العشاء؟", fa: "منوی شام چیست؟", fr: "Que contient le menu du dîner ?", it: "Cosa c'è nel menu della cena?", zh: "晚宴菜单有什么?", id: "Apa yang ada di menu makan malam?", ms: "Apakah menu makan malam?", pl: "Co jest w menu kolacyjnym?", bg: "Какво е в менюто за вечеря?", ro: "Ce este în meniul de cină?" },
  "faq.a1": {
    en: "All packages include a full dinner with 7 varieties of Turkish meze, your choice of main course (fish, chicken, or meatball), and dessert. VIP packages feature a premium mixed grill platter with selected cuts. Vegetarian options are available on request.",
    tr: "Standard pakette 10 çeşit Türk mezesi (VIP'te 15+), somon/çupra/tavuk/köfte ana yemek seçenekleri ve dondurmalı pasta dahildir. VIP pakette antrikot ve biftek seçenekleri, sahneye yakın masa vardır. İstek üzerine vejetaryen menü mevcuttur.",
    de: "Alle Pakete enthalten Abendessen mit 10 Meze-Sorten Standard (15+ für VIP), Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte) und Dessert mit Eis. VIP-Pakete mit Rib-Eye/Filet.",
    es: "Todos los paquetes incluyen una cena completa con 7 variedades de meze turco, tu elección de plato principal (pescado, pollo o albóndigas) y postre. Los paquetes VIP incluyen una parrillada mixta premium.",
    ru: "Все пакеты включают полный ужин с 7 видами турецких мезе, основное блюдо на выбор (рыба, курица или котлеты) и десерт. VIP-пакеты включают премиальное ассорти гриль.",
    ar: "تشمل جميع الباقات عشاءً كاملاً مع 7 أنواع من المقبلات التركية، واختيارك للطبق الرئيسي (سمك أو دجاج أو كفتة)، وحلوى. تتميز باقات VIP بطبق مشويات فاخر.",
    fa: "همه پکیج‌ها شامل شام کامل با ۷ نوع مزه ترکی، انتخاب غذای اصلی (ماهی، مرغ یا کوفته) و دسر است. پکیج‌های VIP سینی گریل مخلوط ممتاز با برش‌های منتخب دارند. گزینه‌های گیاه‌خواری به درخواست در دسترس است.", fr: "Tous les forfaits incluent un dîner complet avec 7 variétés de mezzés turcs, un choix de plat principal (poisson, poulet ou köfte) et un dessert. Les forfaits VIP proposent un plateau de grillades premium avec des pièces sélectionnées. Des options végétariennes sont disponibles sur demande.", it: "Tutti i pacchetti includono una cena completa con 7 varietà di meze turchi, un secondo a scelta (pesce, pollo o köfte) e dolce. I pacchetti VIP prevedono un piatto misto alla griglia premium con tagli selezionati. Opzioni vegetariane disponibili su richiesta.", zh: "所有套餐均含完整晚宴——7种土耳其冷盘、主菜可选(鱼、鸡或肉丸)、甜点。VIP套餐提供尊享混合烤肉拼盘,含精选部位。可应要求提供素食选项。", id: "Semua paket termasuk makan malam lengkap dengan 7 jenis meze Turki, pilihan menu utama Anda (ikan, ayam, atau köfte), dan pencuci mulut. Paket VIP menampilkan piring mixed grill premium dengan potongan pilihan. Pilihan vegetarian tersedia atas permintaan.", ms: "Semua pakej termasuk makan malam penuh dengan 7 jenis meze Turki, pilihan hidangan utama anda (ikan, ayam atau köfte), dan pencuci mulut. Pakej VIP menampilkan pinggan panggangan campuran premium dengan potongan terpilih. Pilihan vegetarian tersedia atas permintaan.", pl: "Wszystkie pakiety zawierają pełną kolację z 7 rodzajami tureckich mezze, wybór dania głównego (ryba, kurczak lub kotlety) oraz deser. Pakiety VIP oferują półmisek mieszany premium z wybranymi kawałkami mięsa. Opcje wegetariańskie dostępne na życzenie.", bg: "Всички пакети включват пълна вечеря със 7 вида турски мезета, избор на основно ястие (риба, пиле или кюфте) и десерт. VIP пакетите предлагат премиум микс грил плато с избрани разфасовки. Вегетариански опции при заявка.", ro: "Toate pachetele includ o cină completă cu 7 sortimente de mezeluri turcești, alegerea dumneavoastră de fel principal (pește, pui sau chiftele) și desert. Pachetele VIP includ un platou mixt la grătar premium cu carne selecționată. Opțiunile vegetariene sunt disponibile la cerere."
  },
  "faq.q2": { en: "Are alcoholic drinks included?", tr: "Alkollü içecekler dahil mi?", de: "Sind alkoholische Getränke inklusive?", es: "¿Están incluidas las bebidas alcohólicas?", ru: "Включены ли алкогольные напитки?", ar: "هل المشروبات الكحولية مشمولة؟", fa: "آیا نوشیدنی‌های الکلی شامل می‌شود؟", fr: "Les boissons alcoolisées sont-elles incluses ?", it: "Le bevande alcoliche sono incluse?", zh: "酒水含在内吗?", id: "Apakah minuman beralkohol termasuk?", ms: "Adakah minuman beralkohol termasuk?", pl: "Czy napoje alkoholowe są wliczone?", bg: "Включени ли са алкохолните напитки?", ro: "Băuturile alcoolice sunt incluse?" },
  "faq.a2": {
    en: "All packages include soft (non-alcoholic) drinks. You can add 2 glasses of alcohol for +€{p.alcohol2} per person, or an unlimited local alcohol package for +€{p.unlimited} per person. The local package covers vodka, gin, rakı, red and white wine. Imported spirits (whiskey, cognac) are charged separately.",
    tr: "Tüm paketlere soft (alkolsüz) içecekler dahildir. Kişi başı +€{p.alcohol2} ile 2 bardak alkol veya +€{p.unlimited} ile sınırsız yerli alkol paketi ekleyebilirsiniz. Yerli paket; votka, cin, rakı, kırmızı ve beyaz şarap ile sınırlıdır. İthal içkiler (viski, konyak) ekstra ücrete tabidir.",
    de: "Alle Pakete enthalten alkoholfreie Getränke. Für +€{p.alcohol2} pro Person 2 Gläser Alkohol oder für +€{p.unlimited} pro Person ein unbegrenztes lokales Alkoholpaket wählbar. Das lokale Paket umfasst Wodka, Gin, Rakı, Rot- und Weißwein. Importierte Spirituosen (Whisky, Cognac) werden separat berechnet.",
    es: "Todos los paquetes incluyen bebidas sin alcohol. Puedes añadir 2 copas de alcohol por +€{p.alcohol2} por persona, o un paquete de alcohol local ilimitado por +€{p.unlimited} por persona. El paquete local incluye vodka, ginebra, rakı, vino tinto y blanco. Los licores importados (whisky, coñac) se cobran aparte.",
    ru: "Все пакеты включают безалкогольные напитки. За +€{p.alcohol2} с человека можно добавить 2 бокала алкоголя, а за +€{p.unlimited} — безлимитный пакет местного алкоголя. Местный пакет включает водку, джин, ракы, красное и белое вино. Импортный алкоголь (виски, коньяк) оплачивается отдельно.",
    ar: "جميع الباقات تشمل المشروبات الخفيفة (غير الكحولية). يمكنك إضافة كأسين من الكحول مقابل +€{p.alcohol2} للشخص، أو باقة كحول محلية غير محدودة مقابل +€{p.unlimited} للشخص. تشمل الباقة المحلية: فودكا، جن، راكي، نبيذ أحمر وأبيض. المشروبات المستوردة (ويسكي، كونياك) تُحتسب بشكل منفصل.",
    fa: "همه پکیج‌ها شامل نوشیدنی‌های بدون‌الکل است. می‌توانید ۲ لیوان الکل با +€{p.alcohol2} به ازای هر نفر یا پکیج الکل داخلی نامحدود با +€{p.unlimited} به ازای هر نفر اضافه کنید. پکیج داخلی شامل ودکا، جین، راکی، شراب قرمز و سفید است. نوشیدنی‌های وارداتی (ویسکی، کنیاک) جداگانه محاسبه می‌شوند.", fr: "Tous les forfaits incluent les boissons non alcoolisées. Vous pouvez ajouter 2 verres d'alcool pour +€{p.alcohol2} par personne, ou un forfait alcool local illimité pour +€{p.unlimited} par personne. Le forfait local couvre vodka, gin, rakı, vin rouge et vin blanc. Les spiritueux importés (whisky, cognac) sont facturés séparément.", it: "Tutti i pacchetti includono bevande analcoliche. È possibile aggiungere 2 bicchieri di alcol per +€{p.alcohol2} a persona, oppure un pacchetto di alcol locale illimitato per +€{p.unlimited} a persona. Il pacchetto locale copre vodka, gin, rakı, vino rosso e bianco. I distillati d'importazione (whisky, cognac) hanno un prezzo separato.", zh: "所有套餐均含软饮(无酒精)。您可加2杯酒,+€{p.alcohol2}／人,或加无限畅饮本地酒套餐+€{p.unlimited}／人。本地套餐包括伏特加、金酒、拉克酒、红白葡萄酒。进口烈酒(威士忌、干邑)另行计价。", id: "Semua paket termasuk minuman ringan (non-alkohol). Anda dapat menambahkan 2 gelas alkohol dengan +€{p.alcohol2} per orang, atau paket alkohol lokal tanpa batas dengan +€{p.unlimited} per orang. Paket lokal mencakup vodka, gin, rakı, anggur merah dan putih. Minuman impor (wiski, cognac) dikenakan biaya terpisah.", ms: "Semua pakej termasuk minuman ringan (tanpa alkohol). Anda boleh tambah 2 gelas alkohol untuk +€{p.alcohol2} setiap orang, atau pakej alkohol tempatan tanpa had untuk +€{p.unlimited} setiap orang. Pakej tempatan merangkumi vodka, gin, rakı, wain merah dan putih. Minuman keras diimport (wiski, cognac) dikenakan bayaran berasingan.", pl: "Wszystkie pakiety zawierają napoje bezalkoholowe. Można dodać 2 kieliszki alkoholu za +€{p.alcohol2}/osobę lub pakiet nieograniczonego alkoholu lokalnego za +€{p.unlimited}/osobę. Pakiet lokalny obejmuje wódkę, gin, rakı, wino czerwone i białe. Alkohole importowane (whisky, koniak) są wyceniane osobno.", bg: "Всички пакети включват безалкохолни напитки. Можете да добавите 2 чаши алкохол за +€{p.alcohol2} на човек или неограничен местен алкохолен пакет за +€{p.unlimited} на човек. Местният пакет включва водка, джин, ракъ, червено и бяло вино. Вносните спиртни напитки (уиски, коняк) се таксуват отделно.", ro: "Toate pachetele includ băuturi răcoritoare (non-alcoolice). Puteți adăuga 2 pahare de alcool pentru +€{p.alcohol2} pe persoană sau un pachet nelimitat de alcool local pentru +€{p.unlimited} pe persoană. Pachetul local acoperă vodcă, gin, rachiu, vin roșu și alb. Băuturile spirtoase de import (whiskey, cognac) se taxează separat."
  },
  "faq.q3": { en: "Where does the cruise depart and return?", tr: "Tur nereden kalkıp nereye dönüyor?", de: "Wo ist Abfahrt und Rückkehr?", es: "¿De dónde sale y regresa el crucero?", ru: "Откуда отправляется и возвращается круиз?", ar: "من أين تغادر وتعود الرحلة؟", fa: "کشتی از کجا حرکت می‌کند و کجا بازمی‌گردد؟", fr: "D'où part et où revient la croisière ?", it: "Da dove parte e dove rientra la crociera?", zh: "游船从哪里启航与返航?", id: "Di mana pelayaran berangkat dan kembali?", ms: "Di manakah pelayaran bertolak dan kembali?", pl: "Skąd wypływa rejs i gdzie wraca?", bg: "Откъде тръгва и връща ли се круизът?", ro: "De unde pleacă și unde se întoarce croaziera?" },
  "faq.a3": {
    en: "Cruises depart from Kabataş pier at 21:00 and return to the same location between 23:00 and 00:00 (3-hour cruise). The exact meeting point will be shared via WhatsApp / Telegram / WeChat after booking.",
    tr: "Turlar Kabataş iskelesinden saat 21:00'te kalkar ve aynı noktaya 23:00 ile 00:00 arasında döner (3 saatlik tur). Tam buluşma noktası rezervasyon sonrası WhatsApp / Telegram / WeChat ile paylaşılır.",
    de: "Abfahrt ab Kabataş-Pier um 21:00, Rückkehr zwischen 23:00 und 00:00 (3 Stunden). Den genauen Treffpunkt erhalten Sie nach Buchung per WhatsApp / Telegram / WeChat.",
    es: "Los cruceros salen del muelle de Kabataş a las 21:00 y regresan al mismo lugar entre las 23:00 y las 00:00 (crucero de 3 horas). El punto de encuentro exacto se compartirá por WhatsApp / Telegram / WeChat tras la reserva.",
    ru: "Круизы отправляются от причала Кабаташ в 21:00 и возвращаются между 23:00 и 00:00 (3 часа). Точное место встречи будет отправлено в WhatsApp / Telegram / WeChat после бронирования.",
    ar: "تغادر الرحلات من رصيف كاباتاش الساعة 21:00 وتعود إلى نفس الموقع بين 23:00 و 00:00 (رحلة 3 ساعات). سيتم مشاركة نقطة الالتقاء عبر واتساب / تليجرام / وي شات بعد الحجز.",
    fa: "تورها ساعت ۲۱:۰۰ از اسکله کاباتاش حرکت می‌کنند و بین ۲۳:۰۰ تا ۰۰:۰۰ به همان مکان بازمی‌گردند (تور ۳ ساعته). نقطه دقیق ملاقات پس از رزرو از طریق واتس‌اپ / تلگرام / وی‌چت به اشتراک گذاشته می‌شود.", fr: "Les croisières partent de l'embarcadère de Kabataş à 21h00 et retournent au même endroit entre 23h00 et 00h00 (croisière de 3 heures). Le point de rendez-vous exact sera communiqué par WhatsApp / Telegram / WeChat après la réservation.", it: "Le crociere partono dal molo di Kabataş alle 21:00 e rientrano nello stesso luogo tra le 23:00 e le 00:00 (crociera di 3 ore). Il punto d'incontro esatto sarà condiviso via WhatsApp / Telegram / WeChat dopo la prenotazione.", zh: "游船从卡巴塔什码头21:00启航,约23:00至00:00之间返回同一地点(3小时游船)。预订后具体集合地点将通过WhatsApp / Telegram / WeChat告知。", id: "Pelayaran berangkat dari dermaga Kabataş pukul 21:00 dan kembali ke lokasi yang sama antara 23:00 dan 00:00 (pelayaran 3 jam). Titik pertemuan yang tepat akan dibagikan via WhatsApp / Telegram / WeChat setelah pemesanan.", ms: "Pelayaran bertolak dari jeti Kabataş pada 21:00 dan kembali ke lokasi yang sama antara 23:00 dan 00:00 (pelayaran 3 jam). Titik pertemuan tepat akan dikongsi melalui WhatsApp / Telegram / WeChat selepas tempahan.", pl: "Rejsy wypływają z przystani Kabataş o 21:00 i wracają do tego samego miejsca między 23:00 a 00:00 (3-godzinny rejs). Dokładne miejsce spotkania zostanie udostępnione przez WhatsApp / Telegram / WeChat po rezerwacji.", bg: "Круизите тръгват от пристанището Кабаташ в 21:00 ч. и се връщат на същото място между 23:00 и 00:00 ч. (3-часов круиз). Точното място за среща ще бъде споделено чрез WhatsApp / Telegram / WeChat след резервацията.", ro: "Croazierele pleacă de la debarcaderul Kabataș la 21:00 și se întorc în aceeași locație între 23:00 și 00:00 (croazieră de 3 ore). Punctul exact de întâlnire va fi împărtășit prin WhatsApp / Telegram / WeChat după rezervare."
  },
  "faq.q4": { en: "What route does the cruise take?", tr: "Tur hangi rotayı izliyor?", de: "Welche Route fährt die Tour?", es: "¿Qué ruta toma el crucero?", ru: "Каким маршрутом идёт круиз?", ar: "ما هو مسار الرحلة؟", fa: "مسیر تور کدام است؟", fr: "Quel itinéraire suit la croisière ?", it: "Che itinerario segue la crociera?", zh: "游船走什么航线?", id: "Rute apa yang dilalui pelayaran?", ms: "Apakah laluan yang diambil pelayaran?", pl: "Jaką trasą płynie rejs?", bg: "Какъв маршрут следва круизът?", ro: "Ce rută urmează croaziera?" },
  "faq.a4": {
    en: "Kabataş Pier → Dolmabahçe Palace → Çırağan Palace → Ortaköy Mosque → Bosphorus Bridge → Bebek → Rumeli Fortress → FSM Bridge → Beylerbeyi Palace → Üsküdar → Maiden's Tower (visible from distance) → Kabataş Pier. Route is for reference only. Itinerary may vary due to weather or sea conditions.",
    tr: "Kabataş İskelesi → Dolmabahçe Sarayı → Çırağan Sarayı → Ortaköy Camii → Boğaz Köprüsü → Bebek → Rumeli Hisarı → FSM Köprüsü → Beylerbeyi Sarayı → Üsküdar → Kız Kulesi (uzaktan görünür) → Kabataş İskelesi. Rota yalnızca referans amaçlıdır. Hava ve deniz koşullarına göre güzergâh değişebilir.",
    de: "Kabataş-Pier → Dolmabahçe-Palast → Çırağan-Palast → Ortaköy-Moschee → Bosporus-Brücke → Bebek → Rumeli-Festung → FSM-Brücke → Beylerbeyi-Palast → Üsküdar → Leanderturm (aus der Ferne sichtbar) → Kabataş-Pier. Die Route dient nur als Referenz. Je nach Wetter- und Seebedingungen kann der Verlauf variieren.",
    es: "Embarcadero Kabataş → Palacio Dolmabahçe → Palacio Çırağan → Mezquita Ortaköy → Puente del Bósforo → Bebek → Fortaleza Rumeli → Puente FSM → Palacio Beylerbeyi → Üsküdar → Torre de la Doncella (visible en la distancia) → Embarcadero Kabataş. La ruta es solo de referencia. El itinerario puede variar según las condiciones del tiempo y del mar.",
    ru: "Пирс Кабаташ → Дворец Долмабахче → Дворец Чираган → Мечеть Ортакёй → Босфорский мост → Бебек → Крепость Румели → Мост ФСМ → Дворец Бейлербейи → Ускюдар → Девичья башня (видна издалека) → Пирс Кабаташ. Маршрут приведён для справки. Программа может меняться из-за погодных и морских условий.",
    ar: "رصيف قباطاش → قصر دولمة بهجة → قصر تشيراغان → مسجد أورتاكوي → جسر البوسفور → بيبك → قلعة روملي → جسر السلطان محمد الفاتح → قصر بيلربيي → أسكودار → برج الفتاة (يُرى من بعيد) → رصيف قباطاش. المسار للاسترشاد فقط، وقد يتغير حسب ظروف الطقس والبحر.",
    fa: "اسکله کاباتاش ← کاخ دلمه‌باغچه ← کاخ چیراغان ← مسجد اورتاکوی ← پل بسفر ← بِبِک ← قلعه روم‌ایلی ← پل فاتح سلطان محمد ← کاخ بی‌لربه‌یی ← اسکودار ← برج دختر (از فاصله دیده می‌شود) ← اسکله کاباتاش. مسیر فقط برای اطلاع است. برنامه ممکن است بسته به آب‌وهوا یا شرایط دریا تغییر کند.", fr: "Embarcadère de Kabataş → palais de Dolmabahçe → palais de Çırağan → mosquée d'Ortaköy → pont du Bosphore → Bebek → forteresse de Rumeli → pont FSM → palais de Beylerbeyi → Üsküdar → Tour de Léandre (visible de loin) → embarcadère de Kabataş. L'itinéraire est indicatif. Il peut varier en fonction de la météo ou de l'état de la mer.", it: "Molo di Kabataş → Palazzo Dolmabahçe → Palazzo di Çırağan → Moschea di Ortaköy → Ponte del Bosforo → Bebek → Rumeli Hisarı → Ponte FSM → Palazzo Beylerbeyi → Üsküdar → Torre della Fanciulla (visibile a distanza) → Molo di Kabataş. L'itinerario è solo indicativo. Può variare a causa delle condizioni meteo o del mare.", zh: "卡巴塔什码头 → 多尔玛巴切宫 → 奇拉昂宫 → 奥尔塔科伊清真寺 → 博斯普鲁斯大桥 → 贝贝克 → 鲁梅利堡垒 → FSM大桥 → 贝伊勒尔贝伊宫 → 于斯屈达尔 → 少女塔(远眺可见) → 卡巴塔什码头。航线仅供参考。实际行程可能因天气或海况而有所调整。", id: "Dermaga Kabataş → Istana Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Jembatan Bosphorus → Bebek → Benteng Rumeli → Jembatan FSM → Istana Beylerbeyi → Üsküdar → Menara Gadis (terlihat dari kejauhan) → Dermaga Kabataş. Rute hanya sebagai referensi. Itinerary dapat bervariasi karena cuaca atau kondisi laut.", ms: "Jeti Kabataş → Istana Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Jambatan Bosphorus → Bebek → Kubu Rumeli → Jambatan FSM → Istana Beylerbeyi → Üsküdar → Menara Maiden (kelihatan dari jauh) → Jeti Kabataş. Laluan hanyalah sebagai rujukan. Jadual perjalanan mungkin berubah disebabkan cuaca atau keadaan laut.", pl: "Przystań Kabataş → Pałac Dolmabahçe → Pałac Çırağan → Meczet Ortaköy → Most Bosforski → Bebek → Twierdza Rumeli Hisarı → Most FSM → Pałac Beylerbeyi → Üsküdar → Wieża Panny (widoczna z daleka) → Przystań Kabataş. Trasa ma charakter orientacyjny. Plan może się zmienić z powodu pogody lub warunków morskich.", bg: "Пристанище Кабаташ → дворец Долмабахче → дворец Чъраган → джамия Ортакьой → мост на Босфора → Бебек → Румелийска крепост → мост „Фатих Султан Мехмед“ → дворец Бейлербей → Юскюдар → Кулата на девойката (видима от разстояние) → пристанище Кабаташ. Маршрутът е само за справка. Програмата може да варира поради времето или морските условия.", ro: "Debarcaderul Kabataș → Palatul Dolmabahçe → Palatul Çırağan → Moscheea Ortaköy → Podul Bosfor → Bebek → Fortăreața Rumeli → Podul FSM → Palatul Beylerbeyi → Üsküdar → Turnul Fecioarei (vizibil de la distanță) → Debarcaderul Kabataș. Ruta este doar orientativă. Itinerariul poate varia din cauza condițiilor meteorologice sau ale mării."
  },
  "faq.q5": { en: "How close are the tables to the stage?", tr: "Masalar sahneye ne kadar yakın?", de: "Wie nah sind die Tische zur Bühne?", es: "¿Qué tan cerca están las mesas del escenario?", ru: "Как близко столы к сцене?", ar: "ما مدى قرب الطاولات من المسرح؟", fa: "میزها چقدر به صحنه نزدیک‌اند؟", fr: "À quelle distance les tables sont-elles de la scène ?", it: "Quanto sono vicini i tavoli al palco?", zh: "餐桌离舞台多近?", id: "Seberapa dekat meja dengan panggung?", ms: "Sejauh mana meja berhampiran pentas?", pl: "Jak blisko sceny znajdują się stoły?", bg: "Колко близо са масите до сцената?", ro: "Cât de aproape sunt mesele de scenă?" },
  "faq.a5": {
    en: "Our boat's dining hall has a panoramic Bosphorus view. No matter where you sit, you can enjoy the full view. The stage is also designed to be visible from every seat, so the shows can be watched easily. (VIP menus are seated closer to the stage.)",
    tr: "Tekne salonumuzda panoramik Boğaz manzarası vardır. Nerede oturduğunuzdan bağımsız tüm manzaranın keyfini çıkarabilirsiniz. Aynı zamanda sahne de her yerden görülecek şekildedir, şovlar rahatlıkla izlenebilir. (VIP menüler sahneye daha yakın konumlandırılır.)",
    de: "Unser Bootssalon bietet einen Panoramablick auf den Bosporus. Egal wo Sie sitzen, Sie genießen die volle Aussicht. Die Bühne ist so gestaltet, dass sie von überall aus zu sehen ist, und die Shows sind bequem zu verfolgen. (VIP-Menüs werden näher zur Bühne platziert.)",
    es: "El salón de nuestro barco tiene vistas panorámicas al Bósforo. Donde sea que te sientes, puedes disfrutar de toda la vista. El escenario también está diseñado para ser visible desde todas partes, y los shows se pueden ver cómodamente. (Los menús VIP se colocan más cerca del escenario.)",
    ru: "В салоне нашей лодки — панорамный вид на Босфор. Где бы вы ни сидели, вы сможете наслаждаться всей панорамой. Сцена также расположена так, чтобы её было видно отовсюду, и шоу легко смотреть. (VIP-меню размещаются ближе к сцене.)",
    ar: "تتميز صالة قاربنا بإطلالة بانورامية على مضيق البوسفور. أينما جلست، يمكنك الاستمتاع بالمنظر بالكامل. كما أن المسرح مصمم ليكون مرئيًا من كل مكان، ويمكن مشاهدة العروض بسهولة. (يتم وضع قوائم VIP أقرب إلى المسرح.)",
    fa: "سالن غذاخوری کشتی ما نمای پانورامایی از بسفر دارد. هر کجا که بنشینید، می‌توانید از کل نما لذت ببرید. صحنه نیز طوری طراحی شده که از هر جایگاه دیده شود، تا نمایش‌ها به‌راحتی قابل تماشا باشند. (منوهای VIP نزدیک‌تر به صحنه جایگزین می‌شوند.)", fr: "La salle à manger de notre bateau offre une vue panoramique sur le Bosphore. Où que vous soyez assis, vous profitez de la vue complète. La scène est également conçue pour être visible de tous les sièges, afin que les spectacles soient faciles à suivre. (Les menus VIP sont placés plus près de la scène.)", it: "La sala da pranzo della nostra barca ha una vista panoramica sul Bosforo. Ovunque si sieda, può godere della vista completa. Anche il palco è progettato per essere visibile da ogni posto, quindi gli spettacoli possono essere seguiti facilmente. (I menu VIP sono posizionati più vicino al palco.)", zh: "我们船上的用餐大厅拥有博斯普鲁斯全景视野。无论坐在哪里,都能尽享全景。舞台也设计为从每个座位都能看到,表演轻松可观赏。(VIP菜单座席更靠近舞台。)", id: "Aula makan kapal kami memiliki pemandangan Bosphorus panorama. Tidak peduli di mana Anda duduk, Anda dapat menikmati pemandangan penuh. Panggung juga dirancang agar terlihat dari setiap kursi, sehingga pertunjukan dapat ditonton dengan mudah. (Menu VIP duduk lebih dekat ke panggung.)", ms: "Dewan makan bot kami mempunyai pemandangan panoramik Bosphorus. Tidak kira di mana anda duduk, anda boleh menikmati pemandangan penuh. Pentas juga direka untuk kelihatan dari setiap tempat duduk, jadi persembahan boleh ditonton dengan mudah. (Menu VIP diletakkan lebih dekat ke pentas.)", pl: "Sala jadalna naszej łodzi ma panoramiczny widok na Bosfor. Niezależnie od miejsca można cieszyć się pełnym widokiem. Scena jest również zaprojektowana tak, aby była widoczna z każdego miejsca, więc pokazy można łatwo oglądać. (Menu VIP mają miejsca bliżej sceny.)", bg: "Залата за хранене на лодката ни има панорамна гледка към Босфора. Независимо къде седнете, можете да се насладите на пълната гледка. Сцената също е проектирана да бъде видима от всяко място, така че шоутата могат да се гледат лесно. (VIP менютата са настанени по-близо до сцената.)", ro: "Sala de masă a vaporului nostru are o vedere panoramică asupra Bosforului. Indiferent unde vă așezați, vă puteți bucura de întreaga priveliște. Scena este proiectată și ea să fie vizibilă de la fiecare loc, astfel încât spectacolele pot fi urmărite cu ușurință. (Meniurile VIP sunt așezate mai aproape de scenă.)"
  },
  "faq.q6": { en: "What kind of shows and entertainment are there?", tr: "Ne tür şovlar ve eğlence var?", de: "Welche Shows und Unterhaltung gibt es?", es: "¿Qué tipo de shows y entretenimiento hay?", ru: "Какие шоу и развлечения?", ar: "ما نوع العروض والترفيه؟", fa: "چه نوع نمایش‌ها و سرگرمی‌ای وجود دارد؟", fr: "Quels spectacles et divertissements sont proposés ?", it: "Che tipo di spettacoli e intrattenimento ci sono?", zh: "有什么样的表演与娱乐?", id: "Pertunjukan dan hiburan seperti apa yang ada?", ms: "Apakah jenis persembahan dan hiburan yang ada?", pl: "Jakie pokazy i rozrywki są dostępne?", bg: "Какви са шоутата и забавлението?", ro: "Ce fel de spectacole și divertisment există?" },
  "faq.a6": {
    en: "The cruise features live singer performances, a traditional Turkish Night show with folk dances, belly dance, and DJ music. Entertainment continues uninterrupted until the end of the cruise.",
    tr: "Turda canlı şarkıcı performansları, geleneksel halk danslarıyla Türk Gecesi şovu, oryantal dans ve DJ müziği bulunur. Eğlence tur bitimine kadar kesintisiz devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstänzen, Bauchtanz und DJ-Musik. Unterhaltung bis zum Ende der Tour ohne Unterbrechung.",
    es: "El crucero incluye cantante en vivo, show nocturno turco con danzas folclóricas, danza del vientre y música DJ. El entretenimiento continúa sin interrupción hasta el final del crucero.",
    ru: "На круизе — живой певец, традиционное турецкое шоу с народными танцами, танец живота и DJ-музыка. Развлечения продолжаются без перерыва до конца круиза.",
    ar: "تتميز الرحلة بعروض مغني حي، عرض الليلة التركية التقليدية مع الرقصات الشعبية، رقص شرقي وموسيقى DJ. يستمر الترفيه دون انقطاع حتى نهاية الرحلة.",
    fa: "تور شامل اجرای خواننده زنده، نمایش سنتی شب ترکی با رقص‌های محلی، رقص شرقی و موسیقی دی‌جی است. سرگرمی تا پایان تور بدون وقفه ادامه دارد.", fr: "La croisière propose des performances de chanteur en direct, une soirée turque traditionnelle avec danses folkloriques, danse orientale et musique DJ. Le divertissement se poursuit sans interruption jusqu'à la fin de la croisière.", it: "La crociera propone esibizioni di cantanti dal vivo, uno spettacolo tradizionale della Serata Turca con danze folkloristiche, danza orientale e musica DJ. L'intrattenimento continua senza interruzioni fino alla fine della crociera.", zh: "游船包括现场歌手表演、含民族舞、肚皮舞与DJ音乐的传统土耳其之夜表演。娱乐节目不间断持续至游船结束。", id: "Pelayaran menampilkan pertunjukan penyanyi langsung, pertunjukan Malam Turki tradisional dengan tarian rakyat, tari oriental, dan musik DJ. Hiburan berlanjut tanpa henti hingga akhir pelayaran.", ms: "Pelayaran menampilkan persembahan penyanyi langsung, persembahan Malam Turki tradisional dengan tarian rakyat, tarian oryantal dan muzik DJ. Hiburan berterusan tanpa henti sehingga akhir pelayaran.", pl: "Rejs oferuje występy śpiewaka na żywo, tradycyjny turecki pokaz nocny z tańcami ludowymi, tańcem brzucha i muzyką DJ-a. Rozrywka trwa nieprzerwanie do końca rejsu.", bg: "Круизът включва изпълнения на певец на живо, традиционна турска нощна програма с фолклорни танци, танц на корема и DJ музика. Забавлението продължава без прекъсване до края на круиза.", ro: "Croaziera oferă reprezentații live de cântăreț, un spectacol tradițional de Seară Turcească cu dansuri populare, dans oriental și muzică DJ. Divertismentul continuă neîntrerupt până la sfârșitul croazierei."
  },
  "faq.q7": { en: "Can I book for tonight?", tr: "Bu gece için rezervasyon yapabilir miyim?", de: "Kann ich für heute Abend buchen?", es: "¿Puedo reservar para esta noche?", ru: "Можно забронировать на сегодня?", ar: "هل يمكنني الحجز لهذه الليلة؟", fa: "آیا می‌توانم برای امشب رزرو کنم؟", fr: "Puis-je réserver pour ce soir ?", it: "Posso prenotare per stasera?", zh: "可以预订今晚吗?", id: "Bisakah saya memesan untuk malam ini?", ms: "Bolehkah saya menempah untuk malam ini?", pl: "Czy mogę zarezerwować na dziś?", bg: "Мога ли да резервирам за тази вечер?", ro: "Pot rezerva pentru seara aceasta?" },
  "faq.a7": {
    en: "Yes! Same-day bookings are available until 20:00 (1 hour before departure). Just message us.",
    tr: "Evet! Aynı gün rezervasyonlar 20:00'ye kadar (kalkıştan 1 saat önce) mümkündür. Bize yazın.",
    de: "Ja! Buchung am selben Tag bis 20:00 möglich (1 Std. vor Abfahrt). Schreiben Sie uns einfach.",
    es: "¡Sí! Las reservas del mismo día están disponibles hasta las 20:00. Solo escríbenos.",
    ru: "Да! Бронирование в тот же день доступно до 20:00. Просто напишите нам.",
    ar: "نعم! الحجوزات في نفس اليوم متاحة حتى الساعة 20:00. فقط راسلنا.",
    fa: "بله! رزرو در همان روز تا ساعت ۲۰:۰۰ (یک ساعت پیش از حرکت) امکان‌پذیر است. فقط به ما پیام دهید.", fr: "Oui ! Les réservations du jour même sont possibles jusqu'à 20h00 (1 heure avant le départ). Écrivez-nous simplement.", it: "Sì! Le prenotazioni in giornata sono disponibili fino alle 20:00 (1 ora prima della partenza). Ci scriva semplicemente.", zh: "可以!当日预订可至20:00(启航前1小时)。直接发信息给我们即可。", id: "Ya! Pemesanan hari yang sama tersedia hingga pukul 20:00 (1 jam sebelum keberangkatan). Cukup kirim pesan kepada kami.", ms: "Ya! Tempahan hari sama tersedia sehingga 20:00 (1 jam sebelum bertolak). Cuma hantar mesej kepada kami.", pl: "Tak! Rezerwacje tego samego dnia są dostępne do 20:00 (1 godzina przed wypłynięciem). Wystarczy do nas napisać.", bg: "Да! Резервации за същия ден са възможни до 20:00 ч. (1 час преди отплаването). Просто ни пишете.", ro: "Da! Rezervările în aceeași zi sunt disponibile până la 20:00 (cu 1 oră înainte de plecare). Scrieți-ne."
  },
  "faq.q8": { en: "How do I pay?", tr: "Nasıl ödeme yapacağım?", de: "Wie wird bezahlt?", es: "¿Cómo pago?", ru: "Как оплатить?", ar: "كيف أدفع؟", fa: "چگونه پرداخت کنم؟", fr: "Comment payer ?", it: "Come si paga?", zh: "如何付款?", id: "Bagaimana cara membayar?", ms: "Bagaimana saya membayar?", pl: "Jak płacę?", bg: "Как да платя?", ro: "Cum plătesc?" },
  "faq.a8": {
    en: "No prepayment is required. You pay directly on the boat. We accept cash (EUR, TRY, USD) and credit cards.",
    tr: "Ön ödeme gerekmez. Ödemenizi doğrudan teknede yaparsınız. Nakit (EUR, TRY, USD) ve kredi kartı kabul ediyoruz.",
    de: "Keine Vorauszahlung nötig. Zahlung direkt an Bord. Bar (EUR, TRY, USD) und Kreditkarte akzeptiert.",
    es: "No se requiere prepago. Pagas directamente en el barco. Aceptamos efectivo (EUR, TRY, USD) y tarjetas.",
    ru: "Предоплата не требуется. Вы платите на борту. Принимаем наличные (EUR, TRY, USD) и карты.",
    ar: "لا يلزم الدفع المسبق. تدفع مباشرة على القارب. نقبل النقد (يورو، ليرة، دولار) وبطاقات الائتمان.",
    fa: "نیازی به پیش‌پرداخت نیست. مستقیماً روی کشتی پرداخت می‌کنید. نقدی (یورو، لیر، دلار) و کارت اعتباری می‌پذیریم.", fr: "Aucun prépaiement n'est requis. Vous payez directement à bord. Nous acceptons les espèces (EUR, TRY, USD) et les cartes bancaires.", it: "Non è richiesto alcun anticipo. Paga direttamente a bordo. Accettiamo contanti (EUR, TRY, USD) e carte di credito.", zh: "无需预付。直接在船上付款。我们接受现金(欧元、土耳其里拉、美元)和信用卡。", id: "Tidak ada pembayaran di muka yang diperlukan. Anda membayar langsung di kapal. Kami menerima tunai (EUR, TRY, USD) dan kartu kredit.", ms: "Tiada bayaran pendahuluan diperlukan. Anda membayar terus di atas bot. Kami menerima tunai (EUR, TRY, USD) dan kad kredit.", pl: "Przedpłata nie jest wymagana. Płacą Państwo bezpośrednio na pokładzie. Akceptujemy gotówkę (EUR, TRY, USD) i karty kredytowe.", bg: "Не се изисква предплащане. Плащате директно на борда. Приемаме пари в брой (EUR, TRY, USD) и кредитни карти.", ro: "Nu este necesară plata în avans. Plătiți direct pe vapor. Acceptăm numerar (EUR, TRY, USD) și carduri de credit."
  },
  "faq.q9": { en: "Is hotel transfer available?", tr: "Otel transferi var mı?", de: "Gibt es einen Hoteltransfer?", es: "¿Hay traslado al hotel?", ru: "Есть ли трансфер из отеля?", ar: "هل يتوفر نقل من الفندق؟", fa: "آیا ترانسفر هتل در دسترس است؟", fr: "Le transfert depuis l'hôtel est-il disponible ?", it: "È disponibile il transfer dall'hotel?", zh: "有酒店接送吗?", id: "Apakah tersedia antar-jemput hotel?", ms: "Adakah pemindahan hotel tersedia?", pl: "Czy transfer z hotelu jest dostępny?", bg: "Има ли хотелски трансфер?", ro: "Transferul de la hotel este disponibil?" },
  "faq.a9": {
    en: "Yes! Hotel transfer is available for +€{p.transfer} per person, including pickup and drop-off. Service areas: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy and Beyoğlu.",
    tr: "Evet! Otel transferi kişi başı +€{p.transfer} ile mümkündür. Alım ve bırakım dahildir. Hizmet bölgeleri: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu.",
    de: "Ja! Hoteltransfer für +€{p.transfer} pro Person, inkl. Abholung und Rückfahrt. Servicegebiete: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy und Beyoğlu.",
    es: "¡Sí! El traslado al hotel está disponible por +€{p.transfer} por persona, incluyendo recogida y devolución. Zonas de servicio: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy y Beyoğlu.",
    ru: "Да! Трансфер из отеля доступен за +€{p.transfer} с человека, включая подачу и возврат. Зоны обслуживания: Бешикташ, Сютлюдже, Сиркеджи, Топкапы, Таксим, Эминёню, Кягытхане, Фатих, Лалели, Султанахмет, Ортакёй и Бейоглу.",
    ar: "نعم! خدمة النقل من الفندق متاحة مقابل +€{p.transfer} للشخص، شاملة الاستلام والتوصيل. مناطق الخدمة: بشكتاش، سوتلوجه، سيركجي، طوبكابي، تقسيم، إمينونو، كاغيتهانه، فاتح، لاليلي، السلطان أحمد، أورتاكوي وبيوغلو.",
    fa: "بله! ترانسفر هتل با +€{p.transfer} به ازای هر نفر شامل رفت و برگشت در دسترس است. مناطق سرویس: بشیکتاش، سوتلوجه، سیرکجی، توپ‌کاپی، تکسیم، اِمینونو، کاغیت‌هانه، فاتح، لَلِه‌لی، سلطان‌احمد، اورتاکوی و بی‌اوغلو.", fr: "Oui ! Le transfert depuis l'hôtel est disponible pour +€{p.transfer} par personne, incluant la prise en charge et la dépose. Zones desservies : Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy et Beyoğlu.", it: "Sì! Il transfer dall'hotel è disponibile per +€{p.transfer} a persona, inclusi prelievo e riconsegna. Aree di servizio: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy e Beyoğlu.", zh: "有!酒店接送为+€{p.transfer}／人,含接与送。服务区域:贝西克塔什、苏特卢杰、锡尔凯吉、托普卡珀、塔克西姆、埃米诺努、卡厄特哈内、法蒂赫、拉莱利、苏丹艾哈迈德、奥尔塔科伊与贝伊奥卢。", id: "Ya! Antar-jemput hotel tersedia dengan +€{p.transfer} per orang, termasuk penjemputan dan pengantaran. Area layanan: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu.", ms: "Ya! Pemindahan hotel tersedia untuk +€{p.transfer} setiap orang, termasuk ambil dan hantar. Kawasan perkhidmatan: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu.", pl: "Tak! Transfer z hotelu jest dostępny za +€{p.transfer}/osobę, w tym odbiór i odwiezienie. Obszary obsługi: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy i Beyoğlu.", bg: "Да! Хотелски трансфер е наличен за +€{p.transfer} на човек, включително вземане и връщане. Зони на обслужване: Бешикташ, Сютлюдже, Сиркеджи, Топкапъ, Таксим, Еминьоню, Кааатхане, Фатих, Лалели, Султанахмет, Ортакьой и Бейоглу.", ro: "Da! Transferul de la hotel este disponibil pentru +€{p.transfer} pe persoană, inclusiv preluare și ducere. Zone deservite: Beșiktaș, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy și Beyoğlu."
  },
  "faq.q10": { en: "Can I cancel or change my reservation?", tr: "Rezervasyonumu iptal edebilir veya değiştirebilir miyim?", de: "Kann ich stornieren oder ändern?", es: "¿Puedo cancelar o cambiar mi reserva?", ru: "Могу ли я отменить бронирование?", ar: "هل يمكنني إلغاء أو تغيير حجزي؟", fa: "آیا می‌توانم رزرو خود را لغو یا تغییر دهم؟", fr: "Puis-je annuler ou modifier ma réservation ?", it: "Posso annullare o modificare la mia prenotazione?", zh: "可以取消或更改预订吗?", id: "Bisakah saya membatalkan atau mengubah reservasi saya?", ms: "Bolehkah saya membatalkan atau mengubah tempahan saya?", pl: "Czy mogę anulować lub zmienić rezerwację?", bg: "Мога ли да отменя или променя резервацията си?", ro: "Pot anula sau modifica rezervarea mea?" },
  "faq.a10": {
    en: "Yes. Free cancellation up to 2 hours before the cruise (until 19:00). Since there's no prepayment, the process is hassle-free.",
    tr: "Evet. Turdan 2 saat öncesine kadar (19:00) ücretsiz iptal mümkündür. Ön ödeme olmadığı için süreç zahmetsizdir.",
    de: "Ja. Kostenlose Stornierung bis 2 Std. vorher (bis 19:00). Ohne Vorauszahlung ganz unkompliziert.",
    es: "Sí. Cancelación gratuita hasta 2 horas antes del crucero (hasta las 19:00). Sin prepago, el proceso es sencillo.",
    ru: "Да. Бесплатная отмена за 2 часа до круиза (до 19:00). Поскольку предоплаты нет, процесс простой.",
    ar: "نعم. إلغاء مجاني حتى ساعتين قبل الرحلة (حتى 19:00). بما أنه لا يوجد دفع مسبق، فالعملية سهلة.",
    fa: "بله. لغو رایگان تا ۲ ساعت پیش از تور (تا ساعت ۱۹:۰۰). چون پیش‌پرداختی نیست، فرایند کاملاً بی‌دردسر است.", fr: "Oui. Annulation gratuite jusqu'à 2 heures avant la croisière (jusqu'à 19h00). Comme il n'y a pas de prépaiement, la démarche est sans souci.", it: "Sì. Cancellazione gratuita fino a 2 ore prima della crociera (fino alle 19:00). Poiché non c'è anticipo, il processo è senza complicazioni.", zh: "可以。开船前2小时(至19:00)前免费取消。由于无需预付,流程毫无麻烦。", id: "Ya. Pembatalan gratis hingga 2 jam sebelum pelayaran (hingga pukul 19:00). Karena tidak ada pembayaran di muka, prosesnya bebas repot.", ms: "Ya. Pembatalan percuma sehingga 2 jam sebelum pelayaran (sehingga 19:00). Memandangkan tiada bayaran pendahuluan, prosesnya bebas kerumitan.", pl: "Tak. Bezpłatna anulacja do 2 godzin przed rejsem (do 19:00). Ponieważ nie ma przedpłaty, proces jest bezproblemowy.", bg: "Да. Безплатна отмяна до 2 часа преди круиза (до 19:00 ч.). Тъй като няма предплащане, процесът е безпроблемен.", ro: "Da. Anulare gratuită cu până la 2 ore înainte de croazieră (până la 19:00). Deoarece nu există plată în avans, procesul este fără complicații."
  },
  "faq.q11": { en: "Where is the exact meeting point?", tr: "Tam buluşma noktası neresi?", de: "Wo ist der Treffpunkt?", es: "¿Dónde es el punto de encuentro exacto?", ru: "Где точное место встречи?", ar: "أين نقطة الالتقاء بالضبط؟", fa: "نقطه دقیق ملاقات کجاست؟", fr: "Où se trouve exactement le point de rendez-vous ?", it: "Dov'è l'esatto punto d'incontro?", zh: "确切集合地点在哪里?", id: "Di mana titik pertemuan yang tepat?", ms: "Di manakah titik pertemuan yang tepat?", pl: "Gdzie dokładnie jest miejsce spotkania?", bg: "Къде е точното място за среща?", ro: "Unde este punctul exact de întâlnire?" },
  "faq.a11": {
    en: "After your reservation is confirmed, we'll send you the exact location with a Google Maps pin on WhatsApp.",
    tr: "Rezervasyonunuz onaylandıktan sonra WhatsApp üzerinden Google Maps pini ile tam konumu göndereceğiz.",
    de: "Nach Bestätigung senden wir Ihnen den Standort mit Google Maps Pin per WhatsApp.",
    es: "Después de confirmar tu reserva, te enviaremos la ubicación exacta con un pin de Google Maps por WhatsApp.",
    ru: "После подтверждения бронирования мы отправим вам точное местоположение с пином Google Maps в WhatsApp.",
    ar: "بعد تأكيد حجزك، سنرسل لك الموقع الدقيق مع دبوس خرائط جوجل عبر واتساب.",
    fa: "پس از تأیید رزرو شما، موقعیت دقیق را با پین گوگل مپس از طریق واتس‌اپ برایتان ارسال می‌کنیم.", fr: "Une fois votre réservation confirmée, nous vous enverrons la localisation exacte avec une épingle Google Maps sur WhatsApp.", it: "Dopo la conferma della prenotazione, Le invieremo la posizione esatta con un pin di Google Maps su WhatsApp.", zh: "预订确认后,我们会通过WhatsApp发送含谷歌地图定位的确切位置。", id: "Setelah reservasi Anda dikonfirmasi, kami akan mengirimkan lokasi tepat dengan pin Google Maps via WhatsApp.", ms: "Selepas tempahan anda disahkan, kami akan hantar kepada anda lokasi tepat dengan pin Google Maps di WhatsApp.", pl: "Po potwierdzeniu rezerwacji wyślemy Państwu dokładną lokalizację z pinezką Google Maps na WhatsApp.", bg: "След като резервацията Ви бъде потвърдена, ще Ви изпратим точното място с Google Maps пин в WhatsApp.", ro: "După ce rezervarea dumneavoastră este confirmată, vă trimitem locația exactă cu un pin Google Maps pe WhatsApp."
  },

  // ========== BOTTOM CTA ==========
  "cta.title": {
    en: "Ready to Book Your Bosphorus Dinner Cruise?", tr: "Boğaz Yemekli Turunuzu Rezerve Etmeye Hazır mısınız?",
    de: "Bereit für Ihre Bosporus-Abendfahrt?", es: "¿Listo para reservar tu crucero con cena por el Bósforo?",
    ru: "Готовы забронировать ужин-круиз по Босфору?", ar: "هل أنت مستعد لحجز رحلة عشاء على البوسفور؟",
    fa: "آماده رزرو تور شام بسفر خود هستید؟", fr: "Prêt à réserver votre croisière dîner sur le Bosphore ?", it: "Pronto a prenotare la Sua crociera con cena sul Bosforo?", zh: "准备好预订博斯普鲁斯晚宴游船了吗?", id: "Siap Memesan Pelayaran Makan Malam Bosphorus Anda?", ms: "Sedia Menempah Pelayaran Makan Malam Bosphorus Anda?", pl: "Gotowi na rezerwację rejsu z kolacją po Bosforze?", bg: "Готови ли сте да резервирате Вашия круиз с вечеря по Босфора?", ro: "Sunteți Gata să Rezervați Croaziera cu Cină pe Bosfor?"
  },
  "cta.desc": {
    en: "Chat with us now to check availability and reserve your spot in minutes. No prepayment needed.",
    tr: "Müsaitliği kontrol etmek ve yerinizi dakikalar içinde ayırtmak için şimdi bizimle sohbet edin. Ön ödeme gerekmez.",
    de: "Jetzt per Chat Verfügbarkeit prüfen und Ihren Platz in Minuten sichern. Keine Vorauszahlung.",
    es: "Chatea con nosotros ahora para verificar disponibilidad y reservar tu lugar en minutos. Sin prepago.",
    ru: "Напишите нам сейчас, чтобы проверить наличие и забронировать место за минуты. Без предоплаты.",
    ar: "تواصل معنا الآن للتحقق من التوفر واحجز مكانك في دقائق. بدون دفع مسبق.",
    fa: "همین حالا با ما گفت‌وگو کنید تا ظرفیت را بررسی و جای خود را در چند دقیقه رزرو کنیم. نیازی به پیش‌پرداخت نیست.", fr: "Discutez avec nous maintenant pour vérifier la disponibilité et réserver votre place en quelques minutes. Aucun prépaiement nécessaire.", it: "Chatti con noi ora per verificare la disponibilità e riservare il Suo posto in pochi minuti. Nessun anticipo necessario.", zh: "现在联系我们查询余位,几分钟内即可预订座位。无需预付。", id: "Chat dengan kami sekarang untuk memeriksa ketersediaan dan memesan tempat Anda dalam hitungan menit. Tidak ada pembayaran di muka.", ms: "Sembang dengan kami sekarang untuk menyemak kekosongan dan menempah tempat anda dalam beberapa minit. Tiada bayaran pendahuluan diperlukan.", pl: "Napisz do nas teraz, aby sprawdzić dostępność i zarezerwować miejsce w kilka minut. Bez przedpłaty.", bg: "Пишете ни сега, за да проверите наличността и да запазите мястото си за минути. Без нужда от предплащане.", ro: "Discutați cu noi acum pentru a verifica disponibilitatea și a rezerva locul dumneavoastră în câteva minute. Fără plată în avans."
  },
  "cta.today": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите свой круиз", ar: "اختر رحلتك",
    fa: "تور خود را انتخاب کنید", fr: "Choisissez votre croisière", it: "Scelga la Sua crociera", zh: "选择您的游船", id: "Pilih Pelayaran Anda", ms: "Pilih Pelayaran Anda", pl: "Wybierz swój rejs", bg: "Изберете Вашия круиз", ro: "Alegeți Croaziera Dumneavoastră"
  },

  // ========== FOOTER ==========
  "footer.tagline": {
    en: "Your Bosphorus Night Awaits",
    tr: "Boğaz Geceniz Sizi Bekliyor",
    de: "Ihre Bosporus-Nacht wartet",
    es: "Tu Noche del Bósforo te Espera",
    ru: "Ваша босфорская ночь ждёт",
    ar: "ليلة البوسفور في انتظارك",
    fa: "شب بسفر شما در انتظار است", fr: "Votre soirée sur le Bosphore vous attend", it: "La Sua notte sul Bosforo La attende", zh: "您的博斯普鲁斯之夜正在等候", id: "Malam Bosphorus Anda Menanti", ms: "Malam Bosphorus Anda Menanti", pl: "Państwa noc nad Bosforem czeka", bg: "Вашата нощ на Босфора Ви очаква", ro: "Noaptea Dumneavoastră pe Bosfor Vă Așteaptă"
  },
  "footer.desc": {
    en: "We help you find the best cruise experience on the Bosphorus.",
    tr: "Boğaz'da en iyi tur deneyimini bulmanıza yardımcı oluyoruz.",
    de: "Wir helfen Ihnen, die beste Bootstour am Bosporus zu finden.",
    es: "Te ayudamos a encontrar la mejor experiencia de crucero en el Bósforo.",
    ru: "Мы помогаем найти лучший круиз по Босфору.",
    ar: "نساعدك في العثور على أفضل تجربة رحلة بحرية على البوسفور.",
    fa: "کمک می‌کنیم بهترین تجربه تور در بسفر را پیدا کنید.", fr: "Nous vous aidons à trouver la meilleure expérience de croisière sur le Bosphore.", it: "La aiutiamo a trovare la migliore esperienza di crociera sul Bosforo.", zh: "我们帮您找到博斯普鲁斯上最佳的游船体验。", id: "Kami membantu Anda menemukan pengalaman pelayaran terbaik di Bosphorus.", ms: "Kami bantu anda mencari pengalaman pelayaran terbaik di Bosphorus.", pl: "Pomagamy znaleźć najlepsze doświadczenie rejsu nad Bosforem.", bg: "Помагаме Ви да намерите най-доброто круизно преживяване по Босфора.", ro: "Vă ajutăm să găsiți cea mai bună experiență de croazieră pe Bosfor."
  },
  "footer.quicklinks": {
    en: "Quick Links", tr: "Hızlı Bağlantılar", de: "Schnelllinks", es: "Enlaces Rápidos",
    ru: "Быстрые ссылки", ar: "روابط سريعة",
    fa: "لینک‌های سریع", fr: "Liens rapides", it: "Link rapidi", zh: "快速链接", id: "Tautan Cepat", ms: "Pautan Pantas", pl: "Szybkie linki", bg: "Бързи връзки", ro: "Linkuri Rapide"
  },
  "footer.contact": {
    en: "Contact", tr: "İletişim", de: "Kontakt", es: "Contacto", ru: "Контакты", ar: "اتصل بنا",
    fa: "تماس", fr: "Contact", it: "Contatti", zh: "联系方式", id: "Kontak", ms: "Hubungi", pl: "Kontakt", bg: "Контакт", ro: "Contact"
  },
  "footer.legal": {
    en: "Legal", tr: "Yasal", de: "Rechtliches", es: "Legal", ru: "Юридическая информация", ar: "قانوني",
    fa: "حقوقی", fr: "Mentions légales", it: "Legale", zh: "法律条款", id: "Legal", ms: "Undang-undang", pl: "Informacje prawne", bg: "Правна информация", ro: "Juridic"
  },
  "footer.howworks": {
    en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert es", es: "Cómo Funciona",
    ru: "Как это работает", ar: "كيف يعمل",
    fa: "نحوه کار", fr: "Comment ça marche", it: "Come funziona", zh: "流程说明", id: "Cara Kerjanya", ms: "Cara Ia Berfungsi", pl: "Jak to działa", bg: "Как работи", ro: "Cum Funcționează"
  },
  "footer.privacy": {
    en: "Privacy Policy", tr: "Gizlilik Politikası", de: "Datenschutz", es: "Política de Privacidad",
    ru: "Политика конфиденциальности", ar: "سياسة الخصوصية",
    fa: "سیاست حریم خصوصی", fr: "Politique de confidentialité", it: "Informativa sulla privacy", zh: "隐私政策", id: "Kebijakan Privasi", ms: "Dasar Privasi", pl: "Polityka prywatności", bg: "Политика за поверителност", ro: "Politica de Confidențialitate"
  },
  "footer.terms": {
    en: "Terms & Conditions", tr: "Şartlar ve Koşullar", de: "AGB", es: "Términos y Condiciones",
    ru: "Условия использования", ar: "الشروط والأحكام",
    fa: "شرایط و قوانین", fr: "Conditions générales", it: "Termini e condizioni", zh: "条款与条件", id: "Syarat & Ketentuan", ms: "Terma & Syarat", pl: "Warunki i zasady", bg: "Общи условия", ro: "Termeni și Condiții"
  },
  "footer.cancellation": {
    en: "Cancellation Policy", tr: "İptal Politikası", de: "Stornierung", es: "Política de Cancelación",
    ru: "Политика отмены", ar: "سياسة الإلغاء",
    fa: "سیاست لغو", fr: "Politique d'annulation", it: "Politica di cancellazione", zh: "取消政策", id: "Kebijakan Pembatalan", ms: "Dasar Pembatalan", pl: "Polityka anulacji", bg: "Политика за отмяна", ro: "Politica de Anulare"
  },
  "footer.rights": {
    en: "All rights reserved.", tr: "Tüm hakları saklıdır.", de: "Alle Rechte vorbehalten.",
    es: "Todos los derechos reservados.", ru: "Все права защищены.", ar: "جميع الحقوق محفوظة.",
    fa: "تمامی حقوق محفوظ است.", fr: "Tous droits réservés.", it: "Tutti i diritti riservati.", zh: "保留所有权利。", id: "Semua hak dilindungi.", ms: "Semua hak terpelihara.", pl: "Wszelkie prawa zastrzeżone.", bg: "Всички права запазени.", ro: "Toate drepturile rezervate."
  },
  "footer.location": {
    en: "Kabataş & Eminönü, Istanbul", tr: "Kabataş & Eminönü, İstanbul",
    de: "Kabataş & Eminönü, Istanbul", es: "Kabataş y Eminönü, Estambul",
    ru: "Кабаташ и Эминёню, Стамбул", ar: "كاباتاش وأمينونو، إسطنبول",
    fa: "کاباتاش و اِمینونو، استانبول", fr: "Kabataş & Eminönü, Istanbul", it: "Kabataş ed Eminönü, Istanbul", zh: "卡巴塔什与埃米诺努,伊斯坦布尔", id: "Kabataş & Eminönü, Istanbul", ms: "Kabataş & Eminönü, Istanbul", pl: "Kabataş i Eminönü, Stambuł", bg: "Кабаташ и Еминьоню, Истанбул", ro: "Kabataș și Eminönü, Istanbul"
  },

  "footer.popularTours": {
    en: "Popular Tours", tr: "Popüler Turlar", de: "Beliebte Touren", es: "Tours Populares",
    ru: "Популярные туры", ar: "الرحلات الشائعة",
    fa: "تورهای محبوب", fr: "Tours populaires", it: "Tour popolari", zh: "热门游船", id: "Tur Populer", ms: "Tur Popular", pl: "Popularne wycieczki", bg: "Популярни турове", ro: "Tururi Populare"
  },
  "footer.daytimeCruise": {
    en: "Bosphorus Daytime Cruise", tr: "Boğaz Gündüz Turu", de: "Bosporus-Tagestour", es: "Crucero Diurno por el Bósforo",
    ru: "Дневной круиз по Босфору", ar: "رحلة البوسفور النهارية",
    fa: "تور روزانه بسفر", fr: "Croisière diurne sur le Bosphore", it: "Crociera Diurna sul Bosforo", zh: "博斯普鲁斯白天游船", id: "Pelayaran Siang Bosphorus", ms: "Pelayaran Siang Bosphorus", pl: "Dzienny rejs po Bosforze", bg: "Дневен круиз по Босфора", ro: "Croazieră de Zi pe Bosfor"
  },
  "footer.sunsetCruise": {
    en: "Bosphorus Sunset Cruise", tr: "Boğaz Günbatımı Turu", de: "Bosporus-Sonnenuntergangstour", es: "Crucero al Atardecer por el Bósforo",
    ru: "Круиз по Босфору на закате", ar: "رحلة غروب البوسفور",
    fa: "تور غروب بسفر", fr: "Croisière coucher de soleil sur le Bosphore", it: "Crociera al Tramonto sul Bosforo", zh: "博斯普鲁斯日落游船", id: "Pelayaran Matahari Terbenam Bosphorus", ms: "Pelayaran Matahari Terbenam Bosphorus", pl: "Rejs o zachodzie słońca po Bosforze", bg: "Залезен круиз по Босфора", ro: "Croazieră la Apus pe Bosfor"
  },
  "footer.dinnerCruise": {
    en: "Bosphorus Dinner Cruise", tr: "Boğaz Yemekli Turu", de: "Bosporus-Abendfahrt", es: "Crucero con Cena por el Bósforo",
    ru: "Ужин-круиз по Босфору", ar: "رحلة عشاء البوسفور",
    fa: "تور شام بسفر", fr: "Croisière dîner sur le Bosphore", it: "Crociera con Cena sul Bosforo", zh: "博斯普鲁斯晚宴游船", id: "Pelayaran Makan Malam Bosphorus", ms: "Pelayaran Makan Malam Bosphorus", pl: "Rejs z kolacją po Bosforze", bg: "Круиз с вечеря по Босфора", ro: "Croazieră cu Cină pe Bosfor"
  },
  "footer.tonightCruise": {
    en: "Bosphorus Cruise Tonight", tr: "Bu Gece Boğaz Turu", de: "Bosporus-Tour Heute Abend", es: "Crucero por el Bósforo Esta Noche",
    ru: "Круиз по Босфору сегодня", ar: "رحلة البوسفور الليلة",
    fa: "تور بسفر برای امشب", fr: "Croisière sur le Bosphore ce soir", it: "Crociera sul Bosforo Stasera", zh: "今晚博斯普鲁斯游船", id: "Pelayaran Bosphorus Malam Ini", ms: "Pelayaran Bosphorus Malam Ini", pl: "Rejs po Bosforze dziś wieczorem", bg: "Круиз по Босфора тази вечер", ro: "Croazieră pe Bosfor în Seara Aceasta"
  },
  "footer.aboutUs": {
    en: "About Us", tr: "Hakkımızda", de: "Über Uns", es: "Sobre Nosotros",
    ru: "О нас", ar: "من نحن",
    fa: "درباره ما", fr: "À propos", it: "Chi siamo", zh: "关于我们", id: "Tentang Kami", ms: "Tentang Kami", pl: "O nas", bg: "За нас", ro: "Despre Noi"
  },
  "footer.blog": {
    en: "Blog", tr: "Blog", de: "Blog", es: "Blog",
    ru: "Блог", ar: "المدونة",
    fa: "وبلاگ", fr: "Blog", it: "Blog", zh: "博客", id: "Blog", ms: "Blog", pl: "Blog", bg: "Блог", ro: "Blog"
  },

  // ========== DINNER PACKAGE CARDS ==========
  "dinner.std.title": {
    en: "Standard Menu", tr: "Standart Menü", de: "Standard-Menü", es: "Menú Estándar",
    ru: "Стандартное меню", ar: "القائمة القياسية",
    fa: "منوی استاندارد", fr: "Menu Standard", it: "Menu Standard", zh: "标准菜单", id: "Menu Standar", ms: "Menu Standard", pl: "Menu Standard", bg: "Стандартно меню", ro: "Meniu Standard"
  },
  "dinner.std.desc": {
    en: "Enjoy a 3-hour Bosphorus night cruise with a full dinner, live Turkish entertainment, and stunning views of Istanbul's skyline.",
    tr: "3 saatlik Boğaz gece turunda akşam yemeği, canlı Türk eğlencesi ve İstanbul'un muhteşem manzarasının keyfini çıkarın.",
    de: "3-stündige Bosporus-Nachtfahrt mit Abendessen, türkischer Live-Show und toller Aussicht auf Istanbul.",
    es: "Disfrute de un crucero nocturno de 3 horas por el Bósforo con cena completa, entretenimiento turco en vivo y vistas impresionantes de Estambul.",
    ru: "Насладитесь 3-часовым ночным круизом по Босфору с ужином, живыми турецкими шоу и потрясающими видами Стамбула.",
    ar: "استمتع برحلة بحرية ليلية لمدة 3 ساعات في البوسفور مع عشاء كامل وترفيه تركي حي وإطلالات خلابة على أفق إسطنبول.",
    fa: "از تور شبانه سه‌ساعته بسفر با شام کامل، سرگرمی زنده ترکی و مناظر خیره‌کننده خط آسمان استانبول لذت ببرید.", fr: "Profitez d'une croisière nocturne de 3 heures sur le Bosphore avec dîner complet, divertissement turc en direct et vues éblouissantes sur l'horizon d'Istanbul.", it: "Goda di una crociera notturna di 3 ore sul Bosforo con cena completa, intrattenimento turco dal vivo e splendide vedute dello skyline di Istanbul.", zh: "享受3小时博斯普鲁斯夜游,含完整晚宴、现场土耳其娱乐,以及伊斯坦布尔天际线的壮丽景色。", id: "Nikmati pelayaran malam Bosphorus 3 jam dengan makan malam lengkap, hiburan Turki langsung, dan pemandangan cakrawala Istanbul yang memukau.", ms: "Nikmati pelayaran malam Bosphorus 3 jam dengan makan malam penuh, hiburan Turki langsung dan pemandangan ufuk Istanbul yang menakjubkan.", pl: "Ciesz się 3-godzinnym nocnym rejsem po Bosforze z pełną kolacją, turecką rozrywką na żywo i zapierającymi dech w piersiach widokami na panoramę Stambułu.", bg: "Насладете се на 3-часов нощен круиз по Босфора с пълна вечеря, турско забавление на живо и зашеметяващи гледки към силуета на Истанбул.", ro: "Bucurați-vă de o croazieră nocturnă de 3 ore pe Bosfor cu cină completă, divertisment turcesc live și priveliști uimitoare ale siluetei Istanbulului."
  },
  "dinner.vip.title": {
    en: "VIP Menu", tr: "VIP Menü", de: "VIP-Menü", es: "Menú VIP",
    ru: "VIP меню", ar: "قائمة VIP",
    fa: "منوی VIP", fr: "Menu VIP", it: "Menu VIP", zh: "VIP菜单", id: "Menu VIP", ms: "Menu VIP", pl: "Menu VIP", bg: "VIP меню", ro: "Meniu VIP"
  },
  "dinner.vip.desc": {
    en: "Premium dining at the best table near the stage. Upgraded menu with premium mezes, steak options, and VIP service throughout the night.",
    tr: "Sahneye en yakın masada premium yemek deneyimi. Zengin meze seçkisi, biftek seçenekleri ve gece boyunca VIP hizmet.",
    de: "Premium-Dinner am besten Tisch nahe der Bühne. Erweitertes Menü mit Premium-Meze, Steak und VIP-Service die ganze Nacht.",
    es: "Cena premium en la mejor mesa cerca del escenario. Menú mejorado con mezes premium, opciones de bistec y servicio VIP toda la noche.",
    ru: "Премиум-ужин за лучшим столом у сцены. Расширенное меню с премиум-мезе, стейками и VIP-обслуживанием всю ночь.",
    ar: "عشاء فاخر على أفضل طاولة بالقرب من المسرح. قائمة مطورة مع مقبلات فاخرة وخيارات ستيك وخدمة VIP طوال الليل.",
    fa: "غذاخوری ممتاز در بهترین میز نزدیک صحنه. منوی ارتقا یافته با مزه‌های ممتاز، گزینه‌های استیک و خدمات VIP در تمام شب.", fr: "Dîner premium à la meilleure table près de la scène. Menu rehaussé avec mezzés premium, options steak et service VIP toute la soirée.", it: "Cena premium al miglior tavolo vicino al palco. Menu aggiornato con meze premium, opzioni di bistecca e servizio VIP per tutta la serata.", zh: "靠近舞台最佳餐桌的高级用餐。升级菜单含尊享冷盘、牛排选项,以及整晚的VIP服务。", id: "Santap premium di meja terbaik dekat panggung. Menu yang ditingkatkan dengan meze premium, pilihan steak, dan layanan VIP sepanjang malam.", ms: "Santapan premium di meja terbaik berdekatan pentas. Menu dinaik taraf dengan meze premium, pilihan stik dan layanan VIP sepanjang malam.", pl: "Premium kolacja przy najlepszym stole w pobliżu sceny. Ulepszone menu z premium mezze, opcjami stekowymi i obsługą VIP przez cały wieczór.", bg: "Премиум вечеря на най-добрата маса близо до сцената. Подобрено меню с премиум мезета, варианти със стек и VIP обслужване през цялата нощ.", ro: "Cină premium la cea mai bună masă lângă scenă. Meniu îmbunătățit cu mezeluri premium, opțiuni de steak și serviciu VIP pe toată durata serii."
  },
  "dinner.privateTable": {
    en: "Private table", tr: "Özel masa", de: "Privater Tisch", es: "Mesa privada",
    ru: "Отдельный стол", ar: "طاولة خاصة",
    fa: "میز خصوصی", fr: "Table privée", it: "Tavolo privato", zh: "专属餐桌", id: "Meja privat", ms: "Meja peribadi", pl: "Prywatny stół", bg: "Лична маса", ro: "Masă privată"
  },
  "dinner.nearStage": {
    en: "Near the stage", tr: "Sahneye yakın", de: "Nahe der Bühne", es: "Cerca del escenario",
    ru: "У сцены", ar: "بالقرب من المسرح",
    fa: "نزدیک صحنه", fr: "Près de la scène", it: "Vicino al palco", zh: "靠近舞台", id: "Dekat panggung", ms: "Berdekatan pentas", pl: "Blisko sceny", bg: "Близо до сцената", ro: "Lângă scenă"
  },
  "dinner.freeCancel": {
    en: "Free cancel 2hrs", tr: "2 saat önce ücretsiz iptal", de: "Gratis-Storno 2 Std.", es: "Cancelación gratis 2hrs",
    ru: "Бесплатная отмена за 2ч", ar: "إلغاء مجاني قبل ساعتين",
    fa: "لغو رایگان ۲ ساعت پیش", fr: "Annulation gratuite 2h", it: "Cancellazione gratuita 2h", zh: "2小时前免费取消", id: "Batal gratis 2 jam", ms: "Batal percuma 2jam", pl: "Bezpłatna anulacja 2h", bg: "Безплатна отмяна 2 ч.", ro: "Anulare gratuită 2 ore"
  },
  "dinner.halalTax": {
    en: "Halal", tr: "Helal", de: "Halal", es: "Halal",
    ru: "Халяль", ar: "حلال",
    fa: "حلال", fr: "Halal", it: "Halal", zh: "清真", id: "Halal", ms: "Halal", pl: "Halal", bg: "Халал", ro: "Halal"
  },
  "meeting.share": {
    en: "Exact meeting location will be shared via WhatsApp, Telegram or WeChat after booking.",
    tr: "Tam buluşma noktası rezervasyondan sonra WhatsApp, Telegram veya WeChat üzerinden paylaşılacaktır.",
    de: "Der genaue Treffpunkt wird nach der Buchung über WhatsApp, Telegram oder WeChat geteilt.",
    es: "La ubicación exacta del encuentro se compartirá vía WhatsApp, Telegram o WeChat después de la reserva.",
    ru: "Точное место встречи будет отправлено через WhatsApp, Telegram или WeChat после бронирования.",
    ar: "سيتم مشاركة موقع اللقاء الدقيق عبر واتساب أو تيليجرام أو ويتشات بعد الحجز.",
    fa: "نقطه دقیق ملاقات پس از رزرو از طریق واتس‌اپ، تلگرام یا وی‌چت به اشتراک گذاشته می‌شود.", fr: "Le point de rendez-vous exact sera communiqué par WhatsApp, Telegram ou WeChat après la réservation.", it: "La posizione esatta del punto d'incontro sarà condivisa via WhatsApp, Telegram o WeChat dopo la prenotazione.", zh: "预订后将通过WhatsApp、Telegram或WeChat分享具体集合位置。", id: "Lokasi pertemuan yang tepat akan dibagikan via WhatsApp, Telegram atau WeChat setelah pemesanan.", ms: "Lokasi pertemuan tepat akan dikongsi melalui WhatsApp, Telegram atau WeChat selepas tempahan.", pl: "Dokładna lokalizacja spotkania zostanie udostępniona przez WhatsApp, Telegram lub WeChat po rezerwacji.", bg: "Точното място за среща ще бъде споделено чрез WhatsApp, Telegram или WeChat след резервацията.", ro: "Locația exactă de întâlnire va fi împărtășită prin WhatsApp, Telegram sau WeChat după rezervare."
  },
  "meeting.howToFind": {
    en: "How to find us — walking directions",
    tr: "Bize nasıl gelirsiniz — yürüyüş tarifi",
    de: "So finden Sie uns — Wegbeschreibung zu Fuß",
    es: "Cómo encontrarnos — indicaciones a pie",
    ru: "Как нас найти — пешая навигация",
    ar: "كيفية الوصول إلينا — اتجاهات المشي",
    fa: "چگونه ما را پیدا کنید — مسیر پیاده‌روی", fr: "Comment nous trouver — indications à pied", it: "Come trovarci — indicazioni a piedi", zh: "如何找到我们——步行指引", id: "Cara menemukan kami — petunjuk jalan kaki", ms: "Cara mencari kami — arah berjalan", pl: "Jak nas znaleźć — wskazówki dojścia", bg: "Как да ни намерите — пешеходни указания", ro: "Cum să ne găsiți — indicații pe jos"
  },
  "meeting.videoDolmabahce": {
    en: "From Dolmabahçe", tr: "Dolmabahçe'den", de: "Von Dolmabahçe",
    es: "Desde Dolmabahçe", ru: "От Долмабахче", ar: "من دولمة بهجة",
    fa: "از دلمه‌باغچه", fr: "Depuis Dolmabahçe", it: "Da Dolmabahçe", zh: "从多尔玛巴切", id: "Dari Dolmabahçe", ms: "Dari Dolmabahçe", pl: "Od Dolmabahçe", bg: "От Долмабахче", ro: "De la Dolmabahçe"
  },
  "meeting.videoTram": {
    en: "From Tram Station", tr: "Tramvay İstasyonundan", de: "Von der Tramstation",
    es: "Desde la Estación de Tranvía", ru: "От трамвайной остановки", ar: "من محطة الترام",
    fa: "از ایستگاه تراموا", fr: "Depuis la station de tramway", it: "Dalla Fermata del Tram", zh: "从电车站", id: "Dari Stasiun Tram", ms: "Dari Stesen Tram", pl: "Od stacji tramwajowej", bg: "От трамвайната спирка", ro: "De la Stația de Tramvai"
  },
  "meeting.videoWalk": {
    en: "Watch walking route", tr: "Yürüyüş rotasını izle", de: "Gehroute ansehen",
    es: "Ver ruta a pie", ru: "Смотреть пеший маршрут", ar: "شاهد مسار المشي",
    fa: "مشاهده مسیر پیاده‌روی", fr: "Voir l'itinéraire à pied", it: "Guarda il percorso a piedi", zh: "查看步行路线", id: "Tonton rute jalan kaki", ms: "Tonton laluan berjalan", pl: "Obejrzyj trasę pieszą", bg: "Гледайте пешеходния маршрут", ro: "Vedeți ruta pe jos"
  },
  "meeting.videoWalk2": {
    en: "Watch walking route", tr: "Yürüyüş rotasını izle", de: "Gehroute ansehen",
    es: "Ver ruta a pie", ru: "Смотреть пеший маршрут", ar: "شاهد مسار المشي",
    fa: "مشاهده مسیر پیاده‌روی", fr: "Voir l'itinéraire à pied", it: "Guarda il percorso a piedi", zh: "查看步行路线", id: "Tonton rute jalan kaki", ms: "Tonton laluan berjalan", pl: "Obejrzyj trasę pieszą", bg: "Гледайте пешеходния маршрут", ro: "Vedeți ruta pe jos"
  },
  "dropoff.title": {
    en: "Drop-off", tr: "Dönüş", de: "Rückfahrt", es: "Regreso", ru: "Возвращение", ar: "العودة",
    fa: "بازگشت", fr: "Dépose", it: "Riconsegna", zh: "送返", id: "Pengantaran", ms: "Hantar balik", pl: "Odwiezienie", bg: "Връщане", ro: "Ducere"
  },
  "dropoff.desc": {
    en: "All guests are dropped off at <strong class=\"text-white/80\">Kabataş Pier</strong> between 23:30 and 00:00. If you booked hotel transfer, the same driver who picked you up will be waiting at the pier to take you back to your hotel.",
    tr: "Tüm misafirler <strong class=\"text-white/80\">Kabataş İskelesi</strong>'nde 23:30–00:00 arası bırakılır. Otel transferi aldıysanız, sizi otelinizden alan şoförümüz iskelede sizi bekliyor olacak ve otelinize geri götürecek.",
    de: "Alle Gäste werden zwischen 23:30 und 00:00 am <strong class=\"text-white/80\">Kabataş-Pier</strong> abgesetzt. Wenn Sie einen Hoteltransfer gebucht haben, wartet derselbe Fahrer, der Sie abgeholt hat, am Pier und bringt Sie zurück zum Hotel.",
    es: "Todos los invitados son dejados en el <strong class=\"text-white/80\">muelle de Kabataş</strong> entre las 23:30 y las 00:00. Si reservó traslado al hotel, el mismo chofer que le recogió le estará esperando en el muelle para llevarle de vuelta al hotel.",
    ru: "Всех гостей высаживают на <strong class=\"text-white/80\">причале Кабаташ</strong> между 23:30 и 00:00. Если вы забронировали трансфер, тот же водитель, который вас забрал, будет ждать на причале, чтобы отвезти вас обратно в отель.",
    ar: "يتم إنزال جميع الضيوف عند <strong class=\"text-white/80\">رصيف كاباتاش</strong> بين الساعة 23:30 و 00:00. إذا حجزت نقل الفندق، سينتظرك نفس السائق الذي أقلّك على الرصيف ليعيدك إلى فندقك.",
    fa: "همه مهمانان بین ۲۳:۳۰ تا ۰۰:۰۰ در <strong class=\"text-white/80\">اسکله کاباتاش</strong> پیاده می‌شوند. اگر ترانسفر هتل رزرو کرده باشید، همان راننده‌ای که شما را سوار کرده بود در اسکله منتظر خواهد بود تا شما را به هتل بازگرداند.", fr: "Tous les invités sont déposés à l'<strong class=\"text-white/80\">embarcadère de Kabataş</strong> entre 23h30 et 00h00. Si vous avez réservé le transfert depuis l'hôtel, le même chauffeur qui vous a pris en charge vous attendra à l'embarcadère pour vous ramener à votre hôtel.", it: "Tutti gli ospiti vengono riaccompagnati al <strong class=\"text-white/80\">Molo di Kabataş</strong> tra le 23:30 e le 00:00. Se ha prenotato il transfer dall'hotel, lo stesso autista che L'ha prelevata La attenderà al molo per riportarLa in hotel.", zh: "所有宾客于23:30至00:00之间在<strong class=\"text-white/80\">卡巴塔什码头</strong>下船。若您预订了酒店接送,接您来的同一位司机会在码头等候,送您返回酒店。", id: "Semua tamu diantar di <strong class=\"text-white/80\">Dermaga Kabataş</strong> antara pukul 23:30 dan 00:00. Jika Anda memesan antar-jemput hotel, sopir yang sama yang menjemput Anda akan menunggu di dermaga untuk mengantar Anda kembali ke hotel.", ms: "Semua tetamu dihantar balik di <strong class=\"text-white/80\">Jeti Kabataş</strong> antara 23:30 dan 00:00. Jika anda menempah pemindahan hotel, pemandu yang sama yang menjemput anda akan menunggu di jeti untuk membawa anda kembali ke hotel anda.", pl: "Wszyscy goście są odwożeni na <strong class=\"text-white/80\">Przystań Kabataş</strong> między 23:30 a 00:00. Jeśli zarezerwowali Państwo transfer z hotelu, ten sam kierowca, który Państwa odebrał, będzie czekać na przystani, aby zabrać Państwa z powrotem do hotelu.", bg: "Всички гости се връщат на <strong class=\"text-white/80\">пристанището Кабаташ</strong> между 23:30 и 00:00 ч. Ако сте резервирали хотелски трансфер, същият шофьор, който Ви е взел, ще Ви чака на пристанището, за да Ви върне в хотела.", ro: "Toți oaspeții sunt duși la <strong class=\"text-white/80\">Debarcaderul Kabataș</strong> între 23:30 și 00:00. Dacă ați rezervat transfer de la hotel, același șofer care v-a preluat va aștepta la debarcader pentru a vă duce înapoi la hotel."
  },
  "dinner.menuLabel": {
    en: "What's Included", tr: "Dahil Olanlar", de: "Inklusive", es: "Incluido",
    ru: "Включено", ar: "يشمل",
    fa: "آنچه شامل می‌شود", fr: "Ce qui est inclus", it: "Cosa è incluso", zh: "包含内容", id: "Apa yang Termasuk", ms: "Apa yang Termasuk", pl: "Co jest wliczone", bg: "Какво е включено", ro: "Ce Este Inclus"
  },
  "dinner.std.item1": {
    en: "10 varieties of Turkish meze", tr: "10 çeşit Türk mezesi",
    de: "10 Sorten türkischer Meze", es: "10 variedades de meze turco",
    ru: "10 видов турецких мезе", ar: "10 أنواع من المقبلات التركية",
    fa: "۱۰ نوع مزه ترکی", fr: "10 variétés de mezzés turcs", it: "10 varietà di meze turchi", zh: "10种土耳其冷盘", id: "10 jenis meze Turki", ms: "10 jenis meze Turki", pl: "10 rodzajów tureckich mezze", bg: "10 вида турски мезета", ro: "10 sortimente de mezeluri turcești"
  },
  "dinner.std.item2": {
    en: "Warm appetizer: paçanga börek (beef pastırma & kashar cheese)", tr: "Ara sıcak: paçanga böreği (dana pastırması ve kaşar peyniri)",
    de: "Warme Vorspeise: Paçanga Börek (Rinder-Pastirma & Kashar-Käse)", es: "Entrante caliente: paçanga börek (pastırma de ternera y queso kashar)",
    ru: "Горячая закуска: пачанга бёрек (говяжья пастырма и сыр кашар)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة بقرية وجبن قشقوان)",
    fa: "پیش‌غذای گرم: پاچانگا بورِگی (پاسترمای گوساله و پنیر کاشار)", fr: "Entrée chaude : paçanga böreği (pastırma de bœuf & kashar)", it: "Antipasto caldo: paçanga börek (pastırma di manzo e formaggio kashar)", zh: "热前菜:帕尚加酥卷(牛肉帕斯特玛与卡沙尔奶酪)", id: "Hidangan pembuka hangat: paçanga börek (pastırma sapi & keju kashar)", ms: "Pembuka selera panas: paçanga börek (pastırma daging lembu & keju kashar)", pl: "Ciepła przystawka: paçanga böreği (wołowa pastırma i ser kashar)", bg: "Топло предястие: пачанга бюрек (говежди пастърма и кашкавал)", ro: "Aperitiv cald: paçanga börek (pastırma de vită și cașcaval kashar)"
  },
  "dinner.std.item3": {
    en: "Main course (with seasonal salad, choose one): salmon, sea bream, chicken, meatball, or vegetarian platter (falafel, roasted potatoes, bulgur pilaf, stewed vegetables & onion rings)",
    tr: "Ana yemek (mevsim salatasıyla birlikte, birini seçin): somon, çipura, tavuk, köfte veya vejetaryen tabağı (falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası)",
    de: "Hauptgang (mit Saisonsalat, Auswahl): Lachs, Dorade, Hähnchen, Köfte oder vegetarischer Teller (Falafel, geröstete Kartoffeln, Bulgur-Pilaw, geschmortes Gemüse & Zwiebelringe)",
    es: "Plato principal (con ensalada de temporada, elija uno): salmón, dorada, pollo, albóndigas o plato vegetariano (falafel, patatas asadas, pilaf de bulgur, verduras estofadas y aros de cebolla)",
    ru: "Основное блюдо (с сезонным салатом, на выбор): лосось, дорада, курица, фрикадельки или вегетарианская тарелка (фалафель, жареный картофель, плов булгур, тушёные овощи и луковые кольца)",
    ar: "طبق رئيسي (مع سلطة موسمية، اختر واحد): سلمون، دنيس، دجاج، كفتة أو طبق نباتي (فلافل، بطاطا مقلية، بلغر، خضروات مطبوخة وحلقات بصل)",
    fa: "غذای اصلی (با سالاد فصلی، یکی را انتخاب کنید): سالمون، شانک، مرغ، کوفته یا سینی گیاه‌خواری (فلافل، سیب‌زمینی برشته، پلو بلغور، خورش سبزیجات و حلقه‌های پیاز)", fr: "Plat principal (avec salade de saison, au choix) : saumon, dorade, poulet, köfte ou plateau végétarien (falafel, pommes de terre rôties, pilaf de boulgour, légumes mijotés & rondelles d'oignon)", it: "Secondo (con insalata di stagione, a scelta): salmone, orata, pollo, köfte o piatto vegetariano (falafel, patate arrosto, pilaf di bulgur, verdure stufate e anelli di cipolla)", zh: "主菜(配时令沙拉,任选一款):三文鱼、鲷鱼、鸡肉、肉丸或素食拼盘(法拉费、烤土豆、布格麦饭、炖蔬菜与洋葱圈)", id: "Menu utama (dengan salad musiman, pilih satu): salmon, sea bream, ayam, köfte, atau piring vegetarian (falafel, kentang panggang, pilaf bulgur, sayuran rebus & cincin bawang)", ms: "Hidangan utama (dengan salad bermusim, pilih satu): salmon, sea bream, ayam, köfte atau pinggan vegetarian (falafel, kentang panggang, nasi bulgur, sayur rebus & cincin bawang)", pl: "Danie główne (z sezonową sałatką, do wyboru): łosoś, dorada, kurczak, kotlety lub półmisek wegetariański (falafel, pieczone ziemniaki, pilaw bulgur, warzywa duszone i krążki cebulowe)", bg: "Основно ястие (със сезонна салата, избор на едно): сьомга, ципура, пиле, кюфте или вегетарианско плато (фалафел, печени картофи, булгурен пилаф, задушени зеленчуци и лукови кръгчета)", ro: "Fel principal (cu salată de sezon, alegeți unul): somon, dorado, pui, chiftele sau platou vegetarian (falafel, cartofi copți, pilaf de bulgur, legume înăbușite și rondele de ceapă)"
  },
  "dinner.std.item4": {
    en: "Dessert: ice cream cake", tr: "Tatlı: dondurmalı pasta",
    de: "Dessert: Eistorte", es: "Postre: tarta helada",
    ru: "Десерт: торт-мороженое", ar: "حلوى: كعكة الآيس كريم",
    fa: "دسر: کیک با بستنی", fr: "Dessert : gâteau glacé", it: "Dolce: torta gelato", zh: "甜点:冰淇淋蛋糕", id: "Pencuci mulut: kue es krim", ms: "Pencuci mulut: kek aiskrim", pl: "Deser: ciasto lodowe", bg: "Десерт: торта със сладолед", ro: "Desert: tort cu înghețată"
  },
  "dinner.std.item5": {
    en: "Unlimited soft drinks (water, cola, juice)", tr: "Sınırsız meşrubat (su, kola, meyve suyu)",
    de: "Unbegrenzte Softdrinks (Wasser, Cola, Saft)", es: "Refrescos ilimitados (agua, cola, zumo)",
    ru: "Безлимитные безалкогольные напитки (вода, кола, сок)", ar: "مشروبات غازية غير محدودة (ماء، كولا، عصير)",
    fa: "نوشیدنی‌های بدون‌الکل نامحدود (آب، نوشابه، آب‌میوه)", fr: "Boissons non alcoolisées à volonté (eau, cola, jus)", it: "Bevande analcoliche illimitate (acqua, cola, succhi)", zh: "无限畅饮软饮(水、可乐、果汁)", id: "Minuman ringan tanpa batas (air, cola, jus)", ms: "Minuman ringan tanpa had (air, kola, jus)", pl: "Nieograniczone napoje bezalkoholowe (woda, cola, sok)", bg: "Неограничени безалкохолни напитки (вода, кола, сок)", ro: "Băuturi răcoritoare nelimitate (apă, cola, suc)"
  },
  "dinner.std.item6": {
    en: "Whirling Dervish show, 5 folk dances, belly dance, live music & DJ", tr: "Sema gösterisi, 5 halk dansı, oryantal dans, canlı müzik ve DJ",
    de: "Derwisch-Show, 5 Volkstänze, Bauchtanz, Livemusik & DJ", es: "Show de derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ",
    ru: "Шоу дервишей, 5 народных танцев, танец живота, живая музыка и DJ", ar: "عرض الدراويش، 5 رقصات شعبية، رقص شرقي، موسيقى حية و DJ",
    fa: "نمایش سماع، ۵ رقص محلی، رقص شرقی، موسیقی زنده و دی‌جی", fr: "Spectacle du derviche tourneur, 5 danses folkloriques, danse orientale, musique live & DJ", it: "Spettacolo dei Dervisci Rotanti, 5 danze folkloristiche, danza orientale, musica dal vivo e DJ", zh: "旋转舞表演、5种民族舞、肚皮舞、现场音乐与DJ", id: "Pertunjukan Darwis Berputar, 5 tarian rakyat, tari oriental, musik langsung & DJ", ms: "Persembahan Darwish Berputar, 5 tarian rakyat, tarian oryantal, muzik langsung & DJ", pl: "Pokaz wirującego derwisza, 5 tańców ludowych, taniec brzucha, muzyka na żywo i DJ", bg: "Шоу с танцуващи дервиши, 5 фолклорни танца, танц на корема, музика на живо и DJ", ro: "Spectacol Derviș Rotitor, 5 dansuri populare, dans oriental, muzică live și DJ"
  },
  "dinner.std.item7": {
    en: "Open-air deck & panoramic viewing terrace",
    tr: "Açık güverte ve panoramik seyir terası",
    de: "Open-Air-Deck und Panoramaterrasse",
    es: "Cubierta al aire libre y terraza panorámica",
    ru: "Открытая палуба и панорамная терраса",
    ar: "سطح مكشوف وشرفة بانورامية",
    fa: "عرشه باز و تراس نمای پانوراما", fr: "Pont extérieur & terrasse panoramique", it: "Ponte all'aperto e terrazza panoramica", zh: "露天甲板与全景观景露台", id: "Dek terbuka & teras pemandangan panorama", ms: "Dek terbuka & teres pemandangan panoramik", pl: "Otwarty pokład i panoramiczny taras widokowy", bg: "Открита палуба и панорамна тераса", ro: "Punte deschisă și terasă panoramică"
  },
  "dinner.vip.item1": {
    en: "15+ varieties of Turkish meze, served as a traditional spread", tr: "15+ çeşit Türk mezesi, geleneksel serpme olarak servis",
    de: "15+ Sorten türkische Meze, traditionell serviert", es: "15+ variedades de meze turco, servido como spread tradicional",
    ru: "15+ видов турецких мезе, поданных в традиционном стиле", ar: "15+ نوع من المقبلات التركية، تقدم بأسلوب تقليدي",
    fa: "۱۵+ نوع مزه ترکی، به‌صورت سفره سنتی سرو می‌شود", fr: "15+ variétés de mezzés turcs, servis en partage traditionnel", it: "15+ varietà di meze turchi, serviti come tradizionale banchetto", zh: "15+种土耳其冷盘,以传统拼盘方式呈现", id: "15+ jenis meze Turki, disajikan sebagai hamparan tradisional", ms: "15+ jenis meze Turki, dihidangkan sebagai hidangan tradisional", pl: "15+ rodzajów tureckich mezze, serwowane jako tradycyjny serpme", bg: "15+ вида турски мезета, сервирани като традиционно плато", ro: "15+ sortimente de mezeluri turcești, servite ca șir tradițional"
  },
  "dinner.vip.item2": {
    en: "Warm appetizer: paçanga börek (beef pastırma & kashar cheese)", tr: "Ara sıcak: paçanga böreği (dana pastırması ve kaşar peyniri)",
    de: "Warme Vorspeise: Paçanga Börek (Rinder-Pastirma & Kashar-Käse)", es: "Entrante caliente: paçanga börek (pastırma de ternera y queso kashar)",
    ru: "Горячая закуска: пачанга бёрек (говяжья пастырма и сыр кашар)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة بقرية وجبن قشقوان)",
    fa: "پیش‌غذای گرم: پاچانگا بورِگی (پاسترمای گوساله و پنیر کاشار)", fr: "Entrée chaude : paçanga böreği (pastırma de bœuf & kashar)", it: "Antipasto caldo: paçanga börek (pastırma di manzo e formaggio kashar)", zh: "热前菜:帕尚加酥卷(牛肉帕斯特玛与卡沙尔奶酪)", id: "Hidangan pembuka hangat: paçanga börek (pastırma sapi & keju kashar)", ms: "Pembuka selera panas: paçanga börek (pastırma daging lembu & keju kashar)", pl: "Ciepła przystawka: paçanga böreği (wołowa pastırma i ser kashar)", bg: "Топло предястие: пачанга бюрек (говежди пастърма и кашкавал)", ro: "Aperitiv cald: paçanga börek (pastırma de vită și cașcaval kashar)"
  },
  "dinner.vip.item3": {
    en: "Main course (with seasonal salad, choose one): salmon, sea bream, chicken, meatball, beef tenderloin, rib-eye, or vegetarian platter (falafel, roasted potatoes, bulgur pilaf, stewed vegetables & onion rings)",
    tr: "Ana yemek (mevsim salatasıyla birlikte, birini seçin): somon, çipura, tavuk, köfte, dana bonfile, antrikot veya vejetaryen tabağı (falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası)",
    de: "Hauptgang (mit Saisonsalat, Auswahl): Lachs, Dorade, Hähnchen, Köfte, Rinderfilet, Rib-Eye oder vegetarischer Teller (Falafel, geröstete Kartoffeln, Bulgur-Pilaw, geschmortes Gemüse & Zwiebelringe)",
    es: "Plato principal (con ensalada de temporada, elija uno): salmón, dorada, pollo, albóndigas, solomillo de ternera, chuletón o plato vegetariano (falafel, patatas asadas, pilaf de bulgur, verduras estofadas y aros de cebolla)",
    ru: "Основное блюдо (с сезонным салатом, на выбор): лосось, дорада, курица, фрикадельки, говяжья вырезка, рибай или вегетарианская тарелка (фалафель, жареный картофель, плов булгур, тушёные овощи и луковые кольца)",
    ar: "طبق رئيسي (مع سلطة موسمية، اختر واحد): سلمون، دنيس، دجاج، كفتة، فيليه لحم بقري، ريب آي أو طبق نباتي (فلافل، بطاطا مقلية، بلغر، خضروات مطبوخة وحلقات بصل)",
    fa: "غذای اصلی (با سالاد فصلی، یکی را انتخاب کنید): سالمون، شانک، مرغ، کوفته، فیله گوساله، راسته یا سینی گیاه‌خواری (فلافل، سیب‌زمینی برشته، پلو بلغور، خورش سبزیجات و حلقه‌های پیاز)", fr: "Plat principal (avec salade de saison, au choix) : saumon, dorade, poulet, köfte, filet de bœuf, entrecôte ou plateau végétarien (falafel, pommes de terre rôties, pilaf de boulgour, légumes mijotés & rondelles d'oignon)", it: "Secondo (con insalata di stagione, a scelta): salmone, orata, pollo, köfte, filetto di manzo, costata o piatto vegetariano (falafel, patate arrosto, pilaf di bulgur, verdure stufate e anelli di cipolla)", zh: "主菜(配时令沙拉,任选一款):三文鱼、鲷鱼、鸡肉、肉丸、牛里脊、肋眼或素食拼盘(法拉费、烤土豆、布格麦饭、炖蔬菜与洋葱圈)", id: "Menu utama (dengan salad musiman, pilih satu): salmon, sea bream, ayam, köfte, tenderloin sapi, rib-eye, atau piring vegetarian (falafel, kentang panggang, pilaf bulgur, sayuran rebus & cincin bawang)", ms: "Hidangan utama (dengan salad bermusim, pilih satu): salmon, sea bream, ayam, köfte, fillet daging lembu, rib-eye atau pinggan vegetarian (falafel, kentang panggang, nasi bulgur, sayur rebus & cincin bawang)", pl: "Danie główne (z sezonową sałatką, do wyboru): łosoś, dorada, kurczak, kotlety, polędwica wołowa, antrykot lub półmisek wegetariański (falafel, pieczone ziemniaki, pilaw bulgur, warzywa duszone i krążki cebulowe)", bg: "Основно ястие (със сезонна салата, избор на едно): сьомга, ципура, пиле, кюфте, телешко бонфиле, антрекот или вегетарианско плато (фалафел, печени картофи, булгурен пилаф, задушени зеленчуци и лукови кръгчета)", ro: "Fel principal (cu salată de sezon, alegeți unul): somon, dorado, pui, chiftele, mușchi de vită, antricot sau platou vegetarian (falafel, cartofi copți, pilaf de bulgur, legume înăbușite și rondele de ceapă)"
  },
  "dinner.vip.item4": {
    en: "Dessert: ice cream cake", tr: "Tatlı: dondurmalı pasta",
    de: "Dessert: Eistorte", es: "Postre: tarta helada",
    ru: "Десерт: торт-мороженое", ar: "حلوى: كعكة الآيس كريم",
    fa: "دسر: کیک با بستنی", fr: "Dessert : gâteau glacé", it: "Dolce: torta gelato", zh: "甜点:冰淇淋蛋糕", id: "Pencuci mulut: kue es krim", ms: "Pencuci mulut: kek aiskrim", pl: "Deser: ciasto lodowe", bg: "Десерт: торта със сладолед", ro: "Desert: tort cu înghețată"
  },
  "dinner.vip.item5": {
    en: "Unlimited soft drinks (water, cola, juice)", tr: "Sınırsız meşrubat (su, kola, meyve suyu)",
    de: "Unbegrenzte Softdrinks (Wasser, Cola, Saft)", es: "Refrescos ilimitados (agua, cola, zumo)",
    ru: "Безлимитные безалкогольные напитки (вода, кола, сок)", ar: "مشروبات غازية غير محدودة (ماء، كولا، عصير)",
    fa: "نوشیدنی‌های بدون‌الکل نامحدود (آب، نوشابه، آب‌میوه)", fr: "Boissons non alcoolisées à volonté (eau, cola, jus)", it: "Bevande analcoliche illimitate (acqua, cola, succhi)", zh: "无限畅饮软饮(水、可乐、果汁)", id: "Minuman ringan tanpa batas (air, cola, jus)", ms: "Minuman ringan tanpa had (air, kola, jus)", pl: "Nieograniczone napoje bezalkoholowe (woda, cola, sok)", bg: "Неограничени безалкохолни напитки (вода, кола, сок)", ro: "Băuturi răcoritoare nelimitate (apă, cola, suc)"
  },
  "dinner.vip.item6": {
    en: "Whirling Dervish show, 5 folk dances, belly dance, live music & DJ", tr: "Sema gösterisi, 5 halk dansı, oryantal dans, canlı müzik ve DJ",
    de: "Derwisch-Show, 5 Volkstänze, Bauchtanz, Livemusik & DJ", es: "Show de derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ",
    ru: "Шоу дервишей, 5 народных танцев, танец живота, живая музыка и DJ", ar: "عرض الدراويش، 5 رقصات شعبية، رقص شرقي، موسيقى حية و DJ",
    fa: "نمایش سماع، ۵ رقص محلی، رقص شرقی، موسیقی زنده و دی‌جی", fr: "Spectacle du derviche tourneur, 5 danses folkloriques, danse orientale, musique live & DJ", it: "Spettacolo dei Dervisci Rotanti, 5 danze folkloristiche, danza orientale, musica dal vivo e DJ", zh: "旋转舞表演、5种民族舞、肚皮舞、现场音乐与DJ", id: "Pertunjukan Darwis Berputar, 5 tarian rakyat, tari oriental, musik langsung & DJ", ms: "Persembahan Darwish Berputar, 5 tarian rakyat, tarian oryantal, muzik langsung & DJ", pl: "Pokaz wirującego derwisza, 5 tańców ludowych, taniec brzucha, muzyka na żywo i DJ", bg: "Шоу с танцуващи дервиши, 5 фолклорни танца, танц на корема, музика на живо и DJ", ro: "Spectacol Derviș Rotitor, 5 dansuri populare, dans oriental, muzică live și DJ"
  },
  "dinner.vip.item7": {
    en: "Open-air deck & panoramic viewing terrace",
    tr: "Açık güverte ve panoramik seyir terası",
    de: "Open-Air-Deck und Panoramaterrasse",
    es: "Cubierta al aire libre y terraza panorámica",
    ru: "Открытая палуба и панорамная терраса",
    ar: "سطح مكشوف وشرفة بانورامية",
    fa: "عرشه باز و تراس نمای پانوراما", fr: "Pont extérieur & terrasse panoramique", it: "Ponte all'aperto e terrazza panoramica", zh: "露天甲板与全景观景露台", id: "Dek terbuka & teras pemandangan panorama", ms: "Dek terbuka & teres pemandangan panoramik", pl: "Otwarty pokład i panoramiczny taras widokowy", bg: "Открита палуба и панорамна тераса", ro: "Punte deschisă și terasă panoramică"
  },
  "dinner.perPerson": {
    en: " / person", tr: " / kişi", de: " / Person", es: " / persona",
    ru: " / чел.", ar: " / شخص",
    fa: " / نفر", fr: " / personne", it: " / persona", zh: "／人", id: " / orang", ms: " / orang", pl: " / osoba", bg: " / човек", ro: " / persoană"
  },
  "dinner.optionalLabel": {
    en: "Optional Add-ons", tr: "Eklenebilir Seçenekler", de: "Optionale Extras", es: "Complementos Opcionales",
    ru: "Дополнительные опции", ar: "إضافات اختيارية",
    fa: "افزودنی‌های اختیاری", fr: "Options supplémentaires", it: "Extra opzionali", zh: "可选附加项", id: "Tambahan Opsional", ms: "Tambahan Pilihan", pl: "Dodatki opcjonalne", bg: "Опционални добавки", ro: "Suplimente Opționale"
  },
  "dinner.addAlcoholTitle": {
    en: "Alcohol Package: +€{p.unlimited}/person", tr: "Alkol Paketi: +€{p.unlimited}/kişi", de: "Alkoholpaket: +€{p.unlimited}/Person", es: "Paquete Alcohol: +€{p.unlimited}/persona",
    ru: "Пакет алкоголя: +€{p.unlimited}/чел.", ar: "باقة كحول: +€{p.unlimited}/شخص",
    fa: "پکیج الکل: +€{p.unlimited}/نفر", fr: "Forfait alcool : +€{p.unlimited}/personne", it: "Pacchetto alcolico: +€{p.unlimited}/persona", zh: "酒水套餐:+€{p.unlimited}／人", id: "Paket Alkohol: +€{p.unlimited}/orang", ms: "Pakej Alkohol: +€{p.unlimited}/orang", pl: "Pakiet alkoholowy: +€{p.unlimited}/osobę", bg: "Алкохолен пакет: +€{p.unlimited}/човек", ro: "Pachet Alcool: +€{p.unlimited}/persoană"
  },
  "dinner.addAlcoholDesc": {
    en: "Unlimited local wine, beer, rakı, vodka, gin", tr: "Sınırsız yerli şarap, bira, rakı, votka, cin",
    de: "Unbegrenzt Wein, Bier, Raki, Wodka, Gin", es: "Vino local, cerveza, rakı, vodka, gin ilimitados",
    ru: "Безлимитное местное вино, пиво, ракы, водка, джин", ar: "نبيذ محلي، بيرة، راكي، فودكا، جن بلا حدود",
    fa: "شراب، آبجو، راکی، ودکا و جین داخلی نامحدود", fr: "Vin local, bière, rakı, vodka, gin à volonté", it: "Vino locale, birra, rakı, vodka, gin illimitati", zh: "无限畅饮本地葡萄酒、啤酒、拉克酒、伏特加、金酒", id: "Anggur lokal tanpa batas, bir, rakı, vodka, gin", ms: "Wain tempatan tanpa had, bir, rakı, vodka, gin", pl: "Nieograniczone lokalne wino, piwo, rakı, wódka, gin", bg: "Неограничено местно вино, бира, ракъ, водка, джин", ro: "Vin, bere, rachiu, vodcă, gin local nelimitat"
  },
  "dinner.addTransferTitle": {
    en: "Hotel Transfer: +€{p.transfer}/person", tr: "Otel Transferi: +€{p.transfer}/kişi", de: "Hoteltransfer: +€{p.transfer}/Person", es: "Traslado Hotel: +€{p.transfer}/persona",
    ru: "Трансфер из отеля: +€{p.transfer}/чел.", ar: "نقل فندقي: +€{p.transfer}/شخص",
    fa: "ترانسفر هتل: +€{p.transfer}/نفر", fr: "Transfert d'hôtel : +€{p.transfer}/personne", it: "Transfer dall'hotel: +€{p.transfer}/persona", zh: "酒店接送:+€{p.transfer}／人", id: "Antar-jemput Hotel: +€{p.transfer}/orang", ms: "Pemindahan Hotel: +€{p.transfer}/orang", pl: "Transfer z hotelu: +€{p.transfer}/osobę", bg: "Хотелски трансфер: +€{p.transfer}/човек", ro: "Transfer de la Hotel: +€{p.transfer}/persoană"
  },
  "dinner.addTransferDesc": {
    en: "Pickup & drop-off from your hotel", tr: "Otelinizden alınır ve bırakılır",
    de: "Abholung & Rückfahrt von Ihrem Hotel", es: "Recogida y regreso desde su hotel",
    ru: "Заберём и отвезём обратно в ваш отель", ar: "التقاط وتوصيل من فندقك",
    fa: "رفت و برگشت از هتل شما", fr: "Prise en charge & dépose depuis votre hôtel", it: "Prelievo e riconsegna dal Suo hotel", zh: "从您的酒店接送", id: "Penjemputan & pengantaran dari hotel Anda", ms: "Ambil & hantar dari hotel anda", pl: "Odbiór i odwiezienie z hotelu", bg: "Вземане и връщане от хотела", ro: "Preluare și ducere de la hotelul dumneavoastră"
  },
  "dinner.addRomanticTitle": {
    en: "Romantic Table: +€{p.romantic}/table", tr: "Romantik Masa: +€{p.romantic}/masa", de: "Romantik-Tisch: +€{p.romantic}/Tisch", es: "Mesa Romántica: +€{p.romantic}/mesa",
    ru: "Романтический стол: +€{p.romantic}/стол", ar: "طاولة رومانسية: +€{p.romantic}/طاولة",
    fa: "میز رمانتیک: +€{p.romantic}/میز", fr: "Table romantique : +€{p.romantic}/table", it: "Tavolo romantico: +€{p.romantic}/tavolo", zh: "浪漫餐桌:+€{p.romantic}／桌", id: "Meja Romantis: +€{p.romantic}/meja", ms: "Meja Romantik: +€{p.romantic}/meja", pl: "Stół romantyczny: +€{p.romantic}/stół", bg: "Романтична маса: +€{p.romantic}/маса", ro: "Masă Romantică: +€{p.romantic}/masă"
  },
  "dinner.addRomanticDesc": {
    en: "Candles, flowers & special setup", tr: "Mumlar, çiçekler ve özel düzenleme",
    de: "Kerzen, Blumen & besondere Deko", es: "Velas, flores y decoración especial",
    ru: "Свечи, цветы и особое оформление", ar: "شموع وزهور وترتيب خاص",
    fa: "شمع، گل و چیدمان ویژه", fr: "Bougies, fleurs & décoration spéciale", it: "Candele, fiori e allestimento speciale", zh: "蜡烛、鲜花与特别布置", id: "Lilin, bunga & pengaturan khusus", ms: "Lilin, bunga & susunan istimewa", pl: "Świece, kwiaty i specjalna aranżacja", bg: "Свещи, цветя и специална украса", ro: "Lumânări, flori și aranjament special"
  },
  "dinner.mostPopular": {
    en: "Most Popular", tr: "En Popüler", de: "Beliebteste", es: "Más Popular",
    ru: "Самый популярный", ar: "الأكثر شعبية",
    fa: "محبوب‌ترین", fr: "Le plus populaire", it: "Più Popolare", zh: "最受欢迎", id: "Paling Populer", ms: "Paling Popular", pl: "Najpopularniejszy", bg: "Най-популярен", ro: "Cel Mai Popular"
  },
  "dinner.bookBtn": {
    en: "Book Now", tr: "Rezervasyon Yaptır", de: "Jetzt Buchen", es: "Reservar Ahora",
    ru: "Забронировать", ar: "احجز الآن",
    fa: "همین حالا رزرو کنید", fr: "Réserver", it: "Prenota ora", zh: "立即预订", id: "Pesan Sekarang", ms: "Tempah Sekarang", pl: "Zarezerwuj teraz", bg: "Резервирайте сега", ro: "Rezervați Acum"
  },

  // ========== BOOKING COUNT ==========
  "booking.count": {
    en: "guests booked for tonight — join them!",
    tr: "kişi bu akşam için rezervasyon yaptı — siz de katılın!",
    de: "Gäste haben für heute Abend gebucht — seien Sie dabei!",
    es: "personas reservaron para esta noche — ¡únete!",
    ru: "гостей забронировали на сегодня — присоединяйтесь!",
    ar: "ضيف حجزوا لهذه الليلة — انضم إليهم!",
    fa: "مهمان برای امشب رزرو کرده‌اند — شما هم بپیوندید!", fr: "invités réservés pour ce soir — rejoignez-les !", it: "ospiti prenotati per stasera — si unisca a loro!", zh: "位宾客已预订今晚——快加入他们!", id: "tamu memesan untuk malam ini — bergabunglah dengan mereka!", ms: "tetamu menempah untuk malam ini — sertai mereka!", pl: "gości zarezerwowało na dziś — dołącz do nich!", bg: "гости са резервирали за тази вечер — присъединете се към тях!", ro: "oaspeți rezervați pentru seara aceasta — alăturați-vă!"
  },

  // ========== COUNTDOWN ==========
  "cd.closes": {
    en: "Tonight's booking closes in:", tr: "Bu geceki rezervasyon kapanışına:",
    de: "Buchung schließt in:", es: "La reserva de esta noche cierra en:",
    ru: "Бронирование на сегодня закрывается через:", ar: "يغلق حجز الليلة خلال:",
    fa: "رزرو امشب بسته می‌شود در:", fr: "Les réservations de ce soir ferment dans :", it: "Le prenotazioni di stasera si chiudono tra:", zh: "今晚预订将在以下时间关闭:", id: "Pemesanan malam ini ditutup dalam:", ms: "Tempahan malam ini ditutup dalam:", pl: "Rezerwacja na dzisiaj kończy się za:", bg: "Резервациите за тази вечер приключват след:", ro: "Rezervarea pentru seara aceasta se închide în:"
  },
  "cd.hours": {
    en: "Hours", tr: "Saat", de: "Std", es: "Horas", ru: "Часы", ar: "ساعات",
    fa: "ساعت", fr: "Heures", it: "Ore", zh: "时", id: "Jam", ms: "Jam", pl: "godz.", bg: "часа", ro: "Ore"
  },
  "cd.min": {
    en: "Min", tr: "Dk", de: "Min", es: "Min", ru: "Мин", ar: "دقائق",
    fa: "دقیقه", fr: "Min", it: "Min", zh: "分", id: "Menit", ms: "Min", pl: "min", bg: "мин", ro: "Min"
  },
  "cd.sec": {
    en: "Sec", tr: "Sn", de: "Sek", es: "Seg", ru: "Сек", ar: "ثواني",
    fa: "ثانیه", fr: "Sec", it: "Sec", zh: "秒", id: "Detik", ms: "Saat", pl: "sek", bg: "сек", ro: "Sec"
  },
  "cd.expired": {
    en: "Tonight's cruise is fully booked", tr: "Bu geceki tur dolmuştur",
    de: "Heutige Tour ist ausgebucht", es: "El crucero de esta noche está completo",
    ru: "Круиз на сегодня полностью забронирован", ar: "رحلة الليلة محجوزة بالكامل",
    fa: "تور امشب کاملاً رزرو شده است", fr: "La croisière de ce soir est complète", it: "La crociera di stasera è completamente prenotata", zh: "今晚游船已满座", id: "Pelayaran malam ini sudah penuh", ms: "Pelayaran malam ini telah penuh ditempah", pl: "Rejs na dziś jest w pełni zarezerwowany", bg: "Круизът тази вечер е изцяло резервиран", ro: "Croaziera din seara aceasta este complet rezervată"
  },
  "cd.tomorrow": {
    en: "Tomorrow's cruise available — book now!", tr: "Yarınki tur müsait — hemen rezervasyon yapın!",
    de: "Tour morgen verfügbar — jetzt buchen!", es: "Crucero de mañana disponible — ¡reserva ahora!",
    ru: "Круиз на завтра доступен — бронируйте сейчас!", ar: "رحلة الغد متاحة — احجز الآن!",
    fa: "تور فردا در دسترس است — همین حالا رزرو کنید!", fr: "La croisière de demain est disponible — réservez maintenant !", it: "Crociera di domani disponibile — prenoti ora!", zh: "明日游船有余位——快预订!", id: "Pelayaran besok tersedia — pesan sekarang!", ms: "Pelayaran esok tersedia — tempah sekarang!", pl: "Rejs na jutro dostępny — zarezerwuj teraz!", bg: "Круизът за утре е наличен — резервирайте сега!", ro: "Croaziera de mâine disponibilă — rezervați acum!"
  },

  // ========== WHATSAPP ==========
  "wa.tooltip": {
    en: "Chat with us!", tr: "Bize yazın!", de: "Chatten Sie mit uns!",
    es: "¡Escríbenos!", ru: "Напишите нам!", ar: "تواصل معنا!",
    fa: "با ما گفت‌وگو کنید!", fr: "Discutez avec nous !", it: "Chatti con noi!", zh: "联系我们!", id: "Chat dengan kami!", ms: "Sembang dengan kami!", pl: "Napisz do nas!", bg: "Пишете ни!", ro: "Discutați cu noi!"
  },

  // ========== TOUR PANELS ==========
  "tour.daytime.label": {
    en: "Sightseeing Tour", tr: "Gezi Turu", de: "Sightseeing-Tour", es: "Tour Turístico", ru: "Обзорная экскурсия", ar: "جولة سياحية",
    fa: "تور بازدید", fr: "Visite touristique", it: "Tour turistico", zh: "观光游船", id: "Tur Wisata", ms: "Tur Pemandangan", pl: "Wycieczka krajoznawcza", bg: "Обзорен тур", ro: "Tur de Vizitare"
  },
  "tour.daytime.title1": { en: "Daytime", tr: "Gündüz", de: "Tages", es: "Diurno", ru: "Дневной", ar: "نهاري", fa: "تور", fr: "Croisière", it: "Crociera", zh: "白天", id: "Pelayaran", ms: "Siang", pl: "Dzienny", bg: "Дневен", ro: "Croazieră" },
  "tour.daytime.title2": { en: "Cruise", tr: "Turu", de: "Tour", es: "Crucero", ru: "Круиз", ar: "رحلة", fa: "روزانه", fr: "diurne", it: "Diurna", zh: "游船", id: "Siang", ms: "Pelayaran", pl: "Rejs", bg: "круиз", ro: "de Zi" },
  "tour.daytime.desc": {
    en: "Discover Istanbul's iconic landmarks under the daylight. Sail past the Maiden's Tower, Dolmabahce Palace, and Bosphorus Bridge.",
    tr: "Gün ışığında İstanbul'un ikonik simgelerini keşfedin. Kız Kulesi, Dolmabahçe Sarayı ve Boğaz Köprüsü'nün önünden geçin.",
    de: "Istanbuls Wahrzeichen bei Tageslicht entdecken. Leanderturm, Dolmabahçe-Palast und Bosporus-Brücke.",
    es: "Descubra los monumentos icónicos de Estambul bajo la luz del día. Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe y el Puente del Bósforo.",
    ru: "Откройте для себя знаковые достопримечательности Стамбула при дневном свете. Проплывите мимо Девичьей башни, дворца Долмабахче и Босфорского моста.",
    ar: "اكتشف معالم إسطنبول الشهيرة في ضوء النهار. أبحر بجوار برج الفتاة وقصر دولمة بهجة وجسر البوسفور.",
    fa: "نمادهای استانبول را زیر نور روز کشف کنید. از کنار برج دختر، کاخ دلمه‌باغچه و پل بسفر عبور کنید.", fr: "Découvrez les monuments emblématiques d'Istanbul à la lumière du jour. Naviguez devant la Tour de Léandre, le palais de Dolmabahçe et le pont du Bosphore.", it: "Scopra i monumenti iconici di Istanbul alla luce del giorno. Navighi accanto alla Torre della Fanciulla, al Palazzo Dolmabahçe e al Ponte del Bosforo.", zh: "在阳光下探索伊斯坦布尔的标志性地标。驶过少女塔、多尔玛巴切宫与博斯普鲁斯大桥。", id: "Temukan landmark ikonik Istanbul di bawah sinar matahari. Berlayar melewati Menara Gadis, Istana Dolmabahçe, dan Jembatan Bosphorus.", ms: "Terokai mercu tanda ikonik Istanbul di bawah cahaya matahari. Belayar melepasi Menara Maiden, Istana Dolmabahçe dan Jambatan Bosphorus.", pl: "Odkryj kultowe zabytki Stambułu w świetle dnia. Płyń obok Wieży Panny, Pałacu Dolmabahçe i Mostu Bosforskiego.", bg: "Открийте емблематичните забележителности на Истанбул на дневна светлина. Плавайте покрай Кулата на девойката, двореца Долмабахче и моста на Босфора.", ro: "Descoperiți reperele iconice ale Istanbulului în lumina zilei. Navigați pe lângă Turnul Fecioarei, Palatul Dolmabahçe și Podul Bosfor."
  },
  "tour.daytime.short": { en: "Day", tr: "Gündüz", de: "Tag", es: "Día", ru: "День", ar: "نهار", fa: "روز", fr: "Jour", it: "Giorno", zh: "白天", id: "Siang", ms: "Siang", pl: "Dzień", bg: "Ден", ro: "Zi" },
  "tour.sunset.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض",
    fa: "شام و نمایش", fr: "Dîner & spectacle", it: "Cena e spettacolo", zh: "晚宴与表演", id: "Makan Malam & Pertunjukan", ms: "Makan Malam & Persembahan", pl: "Kolacja i pokaz", bg: "Вечеря и шоу", ro: "Cină și Spectacol"
  },
  "tour.sunset.title1": { en: "Sunset", tr: "Gün Batımı", de: "Sonnenuntergang", es: "Atardecer", ru: "Закат", ar: "غروب", fa: "تور", fr: "Croisière", it: "Crociera al", zh: "日落", id: "Pelayaran", ms: "Matahari Terbenam", pl: "Zachód słońca", bg: "Залезен", ro: "Croazieră" },
  "tour.sunset.title2": { en: "Cruise", tr: "Turu", de: "Tour", es: "Crucero", ru: "Круиз", ar: "رحلة", fa: "غروب", fr: "coucher de soleil", it: "Tramonto", zh: "游船", id: "Matahari Terbenam", ms: "Pelayaran", pl: "Rejs", bg: "круиз", ro: "la Apus" },
  "tour.sunset.desc": {
    en: "Watch the sun set over the Bosphorus while enjoying dinner and live entertainment. The golden hour on the water is unforgettable.",
    tr: "Yemek ve canlı eğlencenin keyfini çıkarırken Boğaz üzerinde gün batımını izleyin. Suyun üzerindeki altın saat unutulmaz.",
    de: "Sonnenuntergang über dem Bosporus mit Abendessen und Live-Show. Die goldene Stunde auf dem Wasser ist unvergesslich.",
    es: "Vea la puesta de sol sobre el Bósforo mientras disfruta de la cena y entretenimiento en vivo. La hora dorada en el agua es inolvidable.",
    ru: "Наблюдайте за закатом над Босфором, наслаждаясь ужином и живыми шоу. Золотой час на воде незабываем.",
    ar: "شاهد غروب الشمس فوق البوسفور أثناء الاستمتاع بالعشاء والترفيه الحي. الساعة الذهبية على الماء لا تُنسى.",
    fa: "تماشای غروب خورشید بر روی بسفر همراه با شام و سرگرمی زنده. ساعت طلایی روی آب فراموش‌نشدنی است.", fr: "Regardez le soleil se coucher sur le Bosphore tout en profitant d'un dîner et d'un divertissement en direct. L'heure dorée sur l'eau est inoubliable.", it: "Guardi il tramonto sul Bosforo mentre gusta la cena e l'intrattenimento dal vivo. L'ora dorata sull'acqua è indimenticabile.", zh: "一边享用晚宴与现场娱乐,一边欣赏博斯普鲁斯日落。水上黄金时段难以忘怀。", id: "Saksikan matahari terbenam di atas Bosphorus sambil menikmati makan malam dan hiburan langsung. Golden hour di atas air tak terlupakan.", ms: "Saksikan matahari terbenam di atas Bosphorus sambil menikmati makan malam dan hiburan langsung. Waktu keemasan di atas air tidak dapat dilupakan.", pl: "Obserwuj zachód słońca nad Bosforem podczas kolacji i rozrywki na żywo. Złota godzina na wodzie jest niezapomniana.", bg: "Наблюдавайте залеза над Босфора, докато се наслаждавате на вечеря и забавление на живо. Златният час на вода е незабравим.", ro: "Priviți soarele apunând peste Bosfor în timp ce vă bucurați de cină și divertisment live. Ora aurie pe apă este de neuitat."
  },
  "tour.sunset.short": { en: "Sunset", tr: "Gün Batımı", de: "Abend", es: "Atardecer", ru: "Закат", ar: "غروب", fa: "غروب", fr: "Coucher", it: "Tramonto", zh: "日落", id: "Matahari Terbenam", ms: "Matahari Terbenam", pl: "Zachód słońca", bg: "Залез", ro: "Apus" },
  "tour.sunset.maintenanceBadge": {
    en: "In Maintenance",
    tr: "Bakımda",
    de: "In Wartung",
    es: "En Mantenimiento",
    ru: "На обслуживании",
    ar: "قيد الصيانة",
    fa: "در تعمیرات", fr: "En maintenance", it: "In manutenzione", zh: "维护中", id: "Dalam Pemeliharaan", ms: "Dalam Penyelenggaraan", pl: "W konserwacji", bg: "В поддръжка", ro: "În Mentenanță"
  },
  "tour.sunset.maintenanceMsg": {
    en: "Temporarily unavailable — our sunset boat is in maintenance. We'll be back soon.",
    tr: "Bakım sebebiyle kısa süreliğine bu turda hizmet veremiyoruz. En kısa sürede döneceğiz.",
    de: "Vorübergehend nicht verfügbar — unser Sunset-Boot ist in Wartung. Wir sind bald zurück.",
    es: "Temporalmente no disponible — nuestro barco del atardecer está en mantenimiento. Volveremos pronto.",
    ru: "Временно недоступно — наша лодка на закате на техническом обслуживании. Скоро вернёмся.",
    ar: "غير متاح مؤقتاً — قارب الغروب قيد الصيانة. سنعود قريباً.",
    fa: "موقتاً در دسترس نیست — کشتی غروب ما در تعمیرات است. به‌زودی بازمی‌گردیم.", fr: "Temporairement indisponible — notre bateau coucher de soleil est en maintenance. Nous serons de retour bientôt.", it: "Temporaneamente non disponibile — la nostra barca del tramonto è in manutenzione. Torneremo presto.", zh: "暂时无法提供——我们的日落游船正在维护中。我们很快回归。", id: "Sementara tidak tersedia — kapal matahari terbenam kami dalam pemeliharaan. Kami akan segera kembali.", ms: "Tidak tersedia sementara — bot matahari terbenam kami dalam penyelenggaraan. Kami akan kembali tidak lama lagi.", pl: "Chwilowo niedostępne — nasza łódź na zachód słońca jest w konserwacji. Wkrótce wrócimy.", bg: "Временно недостъпен — залезната ни лодка е в поддръжка. Скоро ще се върнем.", ro: "Temporar indisponibil — vaporul nostru de apus este în mentenanță. Vom reveni în curând."
  },
  "tour.dinner.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض",
    fa: "شام و نمایش", fr: "Dîner & spectacle", it: "Cena e spettacolo", zh: "晚宴与表演", id: "Makan Malam & Pertunjukan", ms: "Makan Malam & Persembahan", pl: "Kolacja i pokaz", bg: "Вечеря и шоу", ro: "Cină și Spectacol"
  },
  "tour.dinner.title1": { en: "Dinner", tr: "Yemekli", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء", fa: "تور", fr: "Croisière", it: "Crociera", zh: "晚宴", id: "Pelayaran", ms: "Makan Malam", pl: "Kolacja", bg: "Круиз", ro: "Croazieră" },
  "tour.dinner.title2": { en: "Cruise", tr: "Turu", de: "Tour", es: "Crucero", ru: "Круиз", ar: "رحلة", fa: "شام", fr: "dîner", it: "con Cena", zh: "游船", id: "Makan Malam", ms: "Pelayaran", pl: "Rejs", bg: "с вечеря", ro: "cu Cină" },
  "tour.dinner.desc": {
    en: "The ultimate Bosphorus night. 3-course dinner, live entertainment, and Istanbul's illuminated skyline from the water.",
    tr: "Boğaz'ın en özel gecesi. 3 çeşit yemek, canlı eğlence ve suyun üzerinden İstanbul'un ışıklı silüeti.",
    de: "Die ultimative Bosporus-Nacht. 3-Gänge-Dinner, Live-Show und Istanbuls beleuchtete Skyline vom Wasser.",
    es: "La noche definitiva del Bósforo. Cena de 3 platos, entretenimiento en vivo y el horizonte iluminado de Estambul desde el agua.",
    ru: "Лучшая ночь на Босфоре. 3-блюдное меню, живые шоу и освещённая панорама Стамбула с воды.",
    ar: "ليلة البوسفور المثالية. عشاء من 3 أطباق، ترفيه حي، وأفق إسطنبول المضيء من الماء.",
    fa: "نهایت شب بسفر. شام سه‌کورس، سرگرمی زنده و خط آسمان نورانی استانبول از روی آب.", fr: "La soirée ultime sur le Bosphore. Dîner 3 plats, divertissement en direct et l'horizon d'Istanbul illuminé vu depuis l'eau.", it: "La serata definitiva sul Bosforo. Cena a 3 portate, intrattenimento dal vivo e lo skyline illuminato di Istanbul dall'acqua.", zh: "终极博斯普鲁斯之夜。三道菜晚宴、现场娱乐,以及水面上伊斯坦布尔的璀璨天际线。", id: "Malam Bosphorus tertinggi. Makan malam 3 hidangan, hiburan langsung, dan cakrawala Istanbul yang bermandikan cahaya dari atas air.", ms: "Malam Bosphorus yang paling hebat. Makan malam 3 hidangan, hiburan langsung dan ufuk Istanbul yang diterangi dari atas air.", pl: "Najlepsza noc nad Bosforem. 3-daniowa kolacja, rozrywka na żywo i podświetlona panorama Stambułu z wody.", bg: "Върховната нощ на Босфора. Тристепенна вечеря, забавление на живо и осветеният силует на Истанбул от водата.", ro: "Noaptea supremă pe Bosfor. Cină cu 3 feluri, divertisment live și silueta iluminată a Istanbulului de pe apă."
  },
  "tour.dinner.short": { en: "Dinner", tr: "Gece", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء", fa: "شام", fr: "Dîner", it: "Cena", zh: "晚宴", id: "Makan Malam", ms: "Makan Malam", pl: "Kolacja", bg: "Вечеря", ro: "Cină" },
  "tour.popular": { en: "Popular", tr: "Popüler", de: "Beliebt", es: "Popular", ru: "Популярный", ar: "شائع", fa: "محبوب", fr: "Populaire", it: "Popolare", zh: "热门", id: "Populer", ms: "Popular", pl: "Popularny", bg: "Популярен", ro: "Popular" },
  "tour.explore": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز",
    fa: "مشاهده و رزرو", fr: "Explorer & réserver", it: "Esplora e Prenota", zh: "查看与预订", id: "Jelajahi & Pesan", ms: "Terokai & Tempah", pl: "Przeglądaj i rezerwuj", bg: "Разгледайте и резервирайте", ro: "Explorați și Rezervați"
  },

  // ========== BOATS SECTION ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Tour wählen", es: "Elija su Crucero", ru: "Выберите круиз", ar: "اختر رحلتك",
    fa: "تور خود را انتخاب کنید", fr: "Choisissez votre croisière", it: "Scelga la Sua crociera", zh: "选择您的游船", id: "Pilih Pelayaran Anda", ms: "Pilih Pelayaran Anda", pl: "Wybierz swój rejs", bg: "Изберете Вашия круиз", ro: "Alegeți Croaziera Dumneavoastră"
  },
  "boats.title": {
    en: "Choose Your Experience", tr: "Deneyimini Seç", de: "Erlebnis wählen", es: "Elija su Experiencia", ru: "Выберите впечатление", ar: "اختر تجربتك",
    fa: "تجربه خود را انتخاب کنید", fr: "Choisissez votre expérience", it: "Scelga la Sua esperienza", zh: "选择您的体验", id: "Pilih Pengalaman Anda", ms: "Pilih Pengalaman Anda", pl: "Wybierz swoje doświadczenie", bg: "Изберете Вашето преживяване", ro: "Alegeți Experiența Dumneavoastră"
  },
  "boats.desc": {
    en: "Pick the experience that fits your mood on the Bosphorus.", tr: "Boğaz'da ruh halinize uygun deneyimi seçin.", de: "Wählen Sie das Erlebnis, das zu Ihrer Stimmung am Bosporus passt.", es: "Elija la experiencia que mejor se adapte a su estado de ánimo en el Bósforo.", ru: "Выберите впечатление от Босфора, которое подходит вам.", ar: "اختر التجربة التي تناسب مزاجك على البوسفور.",
    fa: "تجربه‌ای متناسب با حال و هوای خود روی بسفر را انتخاب کنید.", fr: "Choisissez l'expérience qui correspond à votre humeur sur le Bosphore.", it: "Scelga l'esperienza più adatta al Suo umore sul Bosforo.", zh: "挑选最契合您博斯普鲁斯心情的体验。", id: "Pilih pengalaman yang sesuai dengan suasana hati Anda di Bosphorus.", ms: "Pilih pengalaman yang sesuai dengan mood anda di Bosphorus.", pl: "Wybierz doświadczenie, które pasuje do Państwa nastroju nad Bosforem.", bg: "Изберете преживяването, което подхожда на настроението Ви на Босфора.", ro: "Alegeți experiența care se potrivește stării dumneavoastră pe Bosfor."
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →", es: "Ver Paquetes →", ru: "Смотреть пакеты →", ar: "عرض الباقات ←",
    fa: "مشاهده پکیج‌ها ←", fr: "Voir les forfaits →", it: "Vedi i pacchetti →", zh: "查看套餐 →", id: "Lihat Paket →", ms: "Lihat Pakej →", pl: "Zobacz pakiety →", bg: "Вижте пакетите →", ro: "Vedeți Pachetele →"
  },
  "boats.daytime.desc": {
    en: "Scenic Bosphorus sightseeing under the sunlight. Maiden's Tower, palaces, and bridges.", tr: "Gün ışığında Boğaz manzarası. Kız Kulesi, saraylar ve köprüler.", de: "Bosporus-Sightseeing im Sonnenlicht. Leanderturm, Paläste und Brücken.", es: "Turismo panorámico por el Bósforo bajo la luz del sol. Torre de la Doncella, palacios y puentes.", ru: "Живописная экскурсия по Босфору при дневном свете. Девичья башня, дворцы и мосты.", ar: "مشاهدة معالم البوسفور تحت أشعة الشمس. برج الفتاة والقصور والجسور.",
    fa: "گشت زیبای بسفر زیر نور خورشید. برج دختر، کاخ‌ها و پل‌ها.", fr: "Tour panoramique du Bosphore à la lumière du soleil. Tour de Léandre, palais et ponts.", it: "Tour panoramico del Bosforo alla luce del sole. Torre della Fanciulla, palazzi e ponti.", zh: "阳光下的博斯普鲁斯风光观光。少女塔、宫殿与桥梁。", id: "Pemandangan wisata Bosphorus di bawah sinar matahari. Menara Gadis, istana, dan jembatan.", ms: "Tur pemandangan Bosphorus yang indah di bawah cahaya matahari. Menara Maiden, istana dan jambatan.", pl: "Malowniczy rejs krajoznawczy po Bosforze w świetle słonecznym. Wieża Panny, pałace i mosty.", bg: "Живописно разглеждане на Босфора на слънчева светлина. Кулата на девойката, двореци и мостове.", ro: "Tur panoramic de vizitare pe Bosfor în lumina soarelui. Turnul Fecioarei, palate și poduri."
  },
  "boats.sunset.desc": {
    en: "Golden hour dinner cruise with live entertainment as the sun sets over the Bosphorus.", tr: "Boğaz üzerinde gün batımında canlı eğlence eşliğinde yemekli tur.", de: "Dinner-Tour zur goldenen Stunde mit Live-Show bei Sonnenuntergang.", es: "Crucero con cena en la hora dorada con entretenimiento en vivo al atardecer.", ru: "Ужин-круиз в золотой час с живыми шоу на закате над Босфором.", ar: "رحلة عشاء في الساعة الذهبية مع ترفيه حي أثناء غروب الشمس فوق البوسفور.",
    fa: "تور شام ساعت طلایی با سرگرمی زنده در حالی که خورشید بر بسفر غروب می‌کند.", fr: "Croisière dîner de l'heure dorée avec divertissement en direct pendant le coucher de soleil sur le Bosphore.", it: "Crociera con cena nell'ora dorata con intrattenimento dal vivo mentre il sole tramonta sul Bosforo.", zh: "黄金时段晚宴游船,现场娱乐伴夕阳沉入博斯普鲁斯。", id: "Pelayaran makan malam golden hour dengan hiburan langsung saat matahari terbenam di atas Bosphorus.", ms: "Pelayaran makan malam waktu keemasan dengan hiburan langsung ketika matahari terbenam di atas Bosphorus.", pl: "Rejs z kolacją w złotej godzinie z rozrywką na żywo, gdy słońce zachodzi nad Bosforem.", bg: "Круиз с вечеря в златния час със забавление на живо, докато слънцето залязва над Босфора.", ro: "Croazieră cu cină la ora aurie cu divertisment live în timp ce soarele apune peste Bosfor."
  },
  "boats.dinner.desc": {
    en: "The ultimate night experience. Dinner, live shows, and Istanbul's illuminated skyline.", tr: "En özel gece deneyimi. Yemek, canlı şovlar ve İstanbul'un ışıklı silüeti.", de: "Das ultimative Nachterlebnis. Dinner, Live-Shows und Istanbuls Skyline.", es: "La experiencia nocturna definitiva. Cena, shows en vivo y el horizonte iluminado de Estambul.", ru: "Лучший ночной опыт. Ужин, живые шоу и освещённая панорама Стамбула.", ar: "التجربة الليلية المثالية. عشاء وعروض حية وأفق إسطنبول المضيء.",
    fa: "نهایت تجربه شبانه. شام، نمایش‌های زنده و خط آسمان نورانی استانبول.", fr: "L'expérience nocturne ultime. Dîner, spectacles en direct et horizon illuminé d'Istanbul.", it: "L'esperienza notturna definitiva. Cena, spettacoli dal vivo e lo skyline illuminato di Istanbul.", zh: "终极夜晚体验。晚宴、现场表演,以及伊斯坦布尔璀璨天际线。", id: "Pengalaman malam tertinggi. Makan malam, pertunjukan langsung, dan cakrawala Istanbul yang bermandikan cahaya.", ms: "Pengalaman malam yang paling hebat. Makan malam, persembahan langsung dan ufuk Istanbul yang diterangi.", pl: "Najlepsze doświadczenie nocne. Kolacja, pokazy na żywo i podświetlona panorama Stambułu.", bg: "Върховното нощно преживяване. Вечеря, шоута на живо и осветеният силует на Истанбул.", ro: "Experiența supremă nocturnă. Cină, spectacole live și silueta iluminată a Istanbulului."
  },

  // ========== BOOKING PANEL ==========
  "booking.selected": {
    en: "selected", tr: "seçili", de: "ausgewählt", es: "seleccionado", ru: "выбран", ar: "محدد",
    fa: "انتخاب شده", fr: "sélectionné", it: "selezionato", zh: "已选", id: "terpilih", ms: "dipilih", pl: "wybrane", bg: "избран", ro: "selectat"
  },
  "booking.title": {
    en: "Book Your Cruise", tr: "Turunu Rezerve Et", de: "Tour buchen",
    es: "Reserve su Crucero", ru: "Забронируйте круиз", ar: "احجز رحلتك",
    fa: "رزرو تور خود", fr: "Réservez votre croisière", it: "Prenoti la Sua crociera", zh: "预订您的游船", id: "Pesan Pelayaran Anda", ms: "Tempah Pelayaran Anda", pl: "Zarezerwuj swój rejs", bg: "Резервирайте Вашия круиз", ro: "Rezervați Croaziera Dumneavoastră"
  },
  "booking.tonight": {
    en: "Tonight", tr: "Bu Gece", de: "Heute Abend", es: "Esta Noche", ru: "Сегодня", ar: "الليلة",
    fa: "امشب", fr: "Ce soir", it: "Stasera", zh: "今晚", id: "Malam Ini", ms: "Malam Ini", pl: "Dziś wieczorem", bg: "Тази вечер", ro: "Seara Aceasta"
  },
  "booking.date": {
    en: "Date", tr: "Tarih", de: "Datum", es: "Fecha", ru: "Дата", ar: "التاريخ",
    fa: "تاریخ", fr: "Date", it: "Data", zh: "日期", id: "Tanggal", ms: "Tarikh", pl: "Data", bg: "Дата", ro: "Data"
  },
  "booking.adults": {
    en: "Adults", tr: "Yetişkin", de: "Erwachsene", es: "Adultos", ru: "Взрослые", ar: "بالغون",
    fa: "بزرگسالان", fr: "Adultes", it: "Adulti", zh: "成人", id: "Dewasa", ms: "Dewasa", pl: "Dorośli", bg: "Възрастни", ro: "Adulți"
  },
  "booking.children": {
    en: "Children", tr: "Çocuk", de: "Kinder", es: "Niños", ru: "Дети", ar: "أطفال",
    fa: "کودکان", fr: "Enfants", it: "Bambini", zh: "儿童", id: "Anak", ms: "Kanak-kanak", pl: "Dzieci", bg: "Деца", ro: "Copii"
  },
  "booking.childAges": {
    en: "Child Ages", tr: "Çocuk Yaşları", de: "Kinderalter", es: "Edades de los Niños", ru: "Возраст детей", ar: "أعمار الأطفال",
    fa: "سن کودکان", fr: "Âges des enfants", it: "Età dei bambini", zh: "儿童年龄", id: "Usia Anak", ms: "Umur Kanak-kanak", pl: "Wiek dzieci", bg: "Възрасти на децата", ro: "Vârstele Copiilor"
  },
  "booking.childNote": {
    en: "0-3 age: Free  |  4-8 age: 50% off  |  9+ age: Full price", tr: "0-3 yaş: Ücretsiz  |  4-8 yaş: %50 indirim  |  9+ yaş: Tam fiyat",
    de: "0-3 J.: Gratis  |  4-8 J.: 50% Rabatt  |  9+ J.: Vollpreis", es: "0-3 años: Gratis  |  4-8 años: 50% desc.  |  9+ años: Precio completo",
    ru: "0-3 лет: Бесплатно  |  4-8 лет: 50% скидка  |  9+ лет: Полная цена", ar: "0-3 سنة: مجاني  |  4-8 سنة: خصم 50%  |  9+ سنة: السعر الكامل",
    fa: "۰ تا ۳ سال: رایگان  |  ۴ تا ۸ سال: ۵۰٪ تخفیف  |  ۹ سال به بالا: قیمت کامل", fr: "0-3 ans : gratuit  |  4-8 ans : -50 %  |  9+ : tarif plein", it: "0-3 anni: Gratis  |  4-8 anni: 50% di sconto  |  9+ anni: Prezzo pieno", zh: "0-3岁:免费  |  4-8岁:半价  |  9岁以上:全价", id: "Usia 0-3: Gratis  |  Usia 4-8: Diskon 50%  |  Usia 9+: Harga penuh", ms: "0-3 tahun: Percuma  |  4-8 tahun: Diskaun 50%  |  9+ tahun: Harga penuh", pl: "0-3 lata: bezpłatnie  |  4-8 lat: 50% zniżki  |  9+ lat: pełna cena", bg: "0–3 години: безплатно  |  4–8 години: 50% отстъпка  |  9+ години: пълна цена", ro: "0-3 ani: Gratuit  |  4-8 ani: 50% reducere  |  9+ ani: Preț întreg"
  },
  "booking.boat": {
    en: "Cruise", tr: "Tekne", de: "Tour", es: "Crucero", ru: "Круиз", ar: "الرحلة",
    fa: "تور", fr: "Croisière", it: "Crociera", zh: "游船", id: "Pelayaran", ms: "Pelayaran", pl: "Rejs", bg: "Круиз", ro: "Croazieră"
  },
  "booking.package": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة",
    fa: "پکیج", fr: "Forfait", it: "Pacchetto", zh: "套餐", id: "Paket", ms: "Pakej", pl: "Pakiet", bg: "Пакет", ro: "Pachet"
  },
  "booking.extras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Дополнения", ar: "إضافات",
    fa: "افزودنی‌ها", fr: "Options", it: "Extra", zh: "附加项", id: "Tambahan", ms: "Tambahan", pl: "Dodatki", bg: "Добавки", ro: "Suplimente"
  },
  "booking.drinkLabel": {
    en: "Drink Selection", tr: "İçecek Seçimi", de: "Getränkewahl",
    es: "Selección de Bebidas", ru: "Выбор напитков", ar: "اختيار المشروبات",
    fa: "انتخاب نوشیدنی", fr: "Choix de boisson", it: "Selezione bevande", zh: "饮品选择", id: "Pilihan Minuman", ms: "Pilihan Minuman", pl: "Wybór napojów", bg: "Избор на напитки", ro: "Selectare Băuturi"
  },
  "booking.transfer": {
    en: "Hotel Transfer (+€{p.transfer}/person)", tr: "Otel Transferi (+€{p.transfer}/kişi)", de: "Hoteltransfer (+€{p.transfer}/Person)",
    es: "Traslado al Hotel (+€{p.transfer}/persona)", ru: "Трансфер из отеля (+€{p.transfer}/чел.)", ar: "نقل من الفندق (+€{p.transfer}/شخص)",
    fa: "ترانسفر هتل (+€{p.transfer}/نفر)", fr: "Transfert d'hôtel (+€{p.transfer}/personne)", it: "Transfer dall'hotel (+€{p.transfer}/persona)", zh: "酒店接送(+€{p.transfer}／人)", id: "Antar-jemput Hotel (+€{p.transfer}/orang)", ms: "Pemindahan Hotel (+€{p.transfer}/orang)", pl: "Transfer z hotelu (+€{p.transfer}/osobę)", bg: "Хотелски трансфер (+€{p.transfer}/човек)", ro: "Transfer de la Hotel (+€{p.transfer}/persoană)"
  },
  "booking.romantic": {
    en: "Romantic Table (+€{p.romantic}/table)", tr: "Romantik Masa (+€{p.romantic}/masa)", de: "Romantik-Tisch (+€{p.romantic}/Tisch)",
    es: "Mesa Romántica (+€{p.romantic}/mesa)", ru: "Романтический стол (+€{p.romantic}/стол)", ar: "طاولة رومانسية (+€{p.romantic}/طاولة)",
    fa: "میز رمانتیک (+€{p.romantic}/میز)", fr: "Table romantique (+€{p.romantic}/table)", it: "Tavolo romantico (+€{p.romantic}/tavolo)", zh: "浪漫餐桌(+€{p.romantic}／桌)", id: "Meja Romantis (+€{p.romantic}/meja)", ms: "Meja Romantik (+€{p.romantic}/meja)", pl: "Stół romantyczny (+€{p.romantic}/stół)", bg: "Романтична маса (+€{p.romantic}/маса)", ro: "Masă Romantică (+€{p.romantic}/masă)"
  },
  "booking.total": {
    en: "Total", tr: "Toplam", de: "Gesamt", es: "Total", ru: "Итого", ar: "الإجمالي",
    fa: "مجموع", fr: "Total", it: "Totale", zh: "合计", id: "Total", ms: "Jumlah", pl: "Łącznie", bg: "Общо", ro: "Total"
  },
  "booking.payNote": {
    en: "Pay on the boat — No prepayment", tr: "Teknede ödeyin — Ön ödeme yok",
    de: "Zahlung an Bord — Keine Vorauszahlung", es: "Paga en el barco — Sin prepago",
    ru: "Оплата на борту — без предоплаты", ar: "ادفع على القارب — بدون دفع مسبق",
    fa: "پرداخت روی کشتی — بدون پیش‌پرداخت", fr: "Paiement à bord — aucun prépaiement", it: "Pagamento a bordo — Nessun anticipo", zh: "船上付款——无需预付", id: "Bayar di kapal — Tanpa pembayaran di muka", ms: "Bayar di atas bot — Tiada bayaran pendahuluan", pl: "Płatność na pokładzie — bez przedpłaty", bg: "Плащане на борда — без предплащане", ro: "Plata pe vapor — Fără plată în avans"
  },
  "booking.cta": {
    en: "Book via WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen",
    es: "Reservar por WhatsApp", ru: "Забронировать через WhatsApp", ar: "احجز عبر واتساب",
    fa: "رزرو از طریق واتس‌اپ", fr: "Réserver via WhatsApp", it: "Prenota via WhatsApp", zh: "通过WhatsApp预订", id: "Pesan via WhatsApp", ms: "Tempah melalui WhatsApp", pl: "Zarezerwuj przez WhatsApp", bg: "Резервирайте в WhatsApp", ro: "Rezervați prin WhatsApp"
  },
  "booking.from": {
    en: "From", tr: "Başlayan", de: "Ab", es: "Desde", ru: "От", ar: "من",
    fa: "از", fr: "À partir de", it: "Da", zh: "起", id: "Mulai", ms: "Dari", pl: "Od", bg: "От", ro: "De la"
  },
  "booking.perPerson": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ чел.", ar: "/ شخص",
    fa: "/ نفر", fr: "/ personne", it: "/ persona", zh: "／人", id: "/ orang", ms: "/ orang", pl: "/ osoba", bg: "/ човек", ro: "/ persoană"
  },
  "booking.bookNow": {
    en: "Book Now", tr: "Hemen Rezerve Et", de: "Jetzt Buchen", es: "Reservar Ahora", ru: "Забронировать", ar: "احجز الآن",
    fa: "همین حالا رزرو کنید", fr: "Réserver", it: "Prenota ora", zh: "立即预订", id: "Pesan Sekarang", ms: "Tempah Sekarang", pl: "Zarezerwuj teraz", bg: "Резервирайте сега", ro: "Rezervați Acum"
  },

  // ========== PACKAGE NAMES ==========
  "pkg.std.name": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "قياسي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard"
  },
  "pkg.prem.name": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "بريميوم",
    fa: "پرمیوم", fr: "Premium", it: "Premium", zh: "高级", id: "Premium", ms: "Premium", pl: "Premium", bg: "Премиум", ro: "Premium"
  },
  "pkg.vip.name": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP"
  },
  "pkg.bestValue": {
    en: "Best Value", tr: "En İyi Değer", de: "Bestes Angebot", es: "Mejor Valor", ru: "Лучшее предложение", ar: "أفضل قيمة",
    fa: "بهترین ارزش", fr: "Meilleur rapport qualité-prix", it: "Miglior Rapporto", zh: "最超值", id: "Nilai Terbaik", ms: "Nilai Terbaik", pl: "Najlepsza wartość", bg: "Най-добра стойност", ro: "Cel Mai Bun Raport"
  },

  // ========== PACKAGE FEATURES ==========
  "pkg.feat.cruise": {
    en: "3-hour Bosphorus night cruise", tr: "3 saat Boğaz gece turu", de: "3-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3 horas por el Bósforo", ru: "3-часовой ночной круиз по Босфору", ar: "رحلة ليلية في البوسفور لمدة 3 ساعة",
    fa: "تور شبانه سه‌ساعته بسفر", fr: "Croisière nocturne de 3 heures sur le Bosphore", it: "Crociera notturna sul Bosforo di 3 ore", zh: "3小时博斯普鲁斯夜游", id: "Pelayaran malam Bosphorus 3 jam", ms: "Pelayaran malam Bosphorus 3 jam", pl: "3-godzinny nocny rejs po Bosforze", bg: "3-часов нощен круиз по Босфора", ro: "Croazieră nocturnă de 3 ore pe Bosfor"
  },
  "pkg.feat.dinner": {
    en: "Dinner — 10 meze + salad + main course + dessert", tr: "Akşam yemeği — 10 meze + salata + ana yemek + tatlı", de: "Abendessen — 10 Meze + Salat + Hauptgang + Dessert", es: "Cena — 10 meze + ensalada + plato principal + postre", ru: "Ужин — 10 мезе + салат + основное блюдо + десерт", ar: "عشاء — 10 مقبلات + سلطة + طبق رئيسي + حلوى",
    fa: "شام — ۱۰ نوع مزه + سالاد + غذای اصلی + دسر", fr: "Dîner — 10 mezzés + salade + plat principal + dessert", it: "Cena — 10 meze + insalata + secondo + dolce", zh: "晚宴——10道冷盘+沙拉+主菜+甜点", id: "Makan malam — 10 meze + salad + menu utama + pencuci mulut", ms: "Makan malam — 10 meze + salad + hidangan utama + pencuci mulut", pl: "Kolacja — 10 mezze + sałatka + danie główne + deser", bg: "Вечеря — 10 мезета + салата + основно ястие + десерт", ro: "Cină — 10 mezeluri + salată + fel principal + desert"
  },
  "pkg.feat.choices": {
    en: "4 choices: vegetarian, fish, chicken, meatball", tr: "4 seçenek: vejetaryen, balık, tavuk, köfte", de: "4 Optionen: vegetarisch, Fisch, Hähnchen, Frikadellen", es: "4 opciones: vegetariano, pescado, pollo, albóndigas", ru: "4 варианта: вегетарианское, рыба, курица, котлеты", ar: "4 خيارات: نباتي، سمك، دجاج، كفتة",
    fa: "۴ انتخاب: گیاه‌خواری، ماهی، مرغ، کوفته", fr: "4 choix : végétarien, poisson, poulet, köfte", it: "4 scelte: vegetariano, pesce, pollo, köfte", zh: "4种选择:素食、鱼、鸡肉、肉丸", id: "4 pilihan: vegetarian, ikan, ayam, köfte", ms: "4 pilihan: vegetarian, ikan, ayam, köfte", pl: "4 opcje: wegetariańskie, ryba, kurczak, kotlety", bg: "4 избора: вегетарианско, риба, пиле, кюфте", ro: "4 alegeri: vegetarian, pește, pui, chiftele"
  },
  "pkg.feat.drinks": {
    en: "Unlimited soft drinks", tr: "Sınırsız alkolsüz içecek", de: "Unbegrenzte Softdrinks", es: "Refrescos ilimitados", ru: "Безлимитные безалкогольные напитки", ar: "مشروبات غازية غير محدودة",
    fa: "نوشیدنی‌های بدون‌الکل نامحدود", fr: "Boissons non alcoolisées à volonté", it: "Bevande analcoliche illimitate", zh: "无限畅饮软饮", id: "Minuman ringan tanpa batas", ms: "Minuman ringan tanpa had", pl: "Nieograniczone napoje bezalkoholowe", bg: "Неограничени безалкохолни напитки", ro: "Băuturi răcoritoare nelimitate"
  },
  "pkg.feat.table": {
    en: "Private table", tr: "Özel masa", de: "Privater Tisch", es: "Mesa privada", ru: "Отдельный столик", ar: "طاولة خاصة",
    fa: "میز خصوصی", fr: "Table privée", it: "Tavolo privato", zh: "专属餐桌", id: "Meja privat", ms: "Meja peribadi", pl: "Prywatny stół", bg: "Лична маса", ro: "Masă privată"
  },
  "pkg.feat.show": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu", de: "Live-Show & Türkische Nacht", es: "Entretenimiento en vivo y show nocturno turco", ru: "Живое шоу и турецкая ночь", ar: "ترفيه حي وعرض ليلة تركية",
    fa: "سرگرمی زنده و نمایش شب ترکی", fr: "Divertissement en direct & soirée turque", it: "Intrattenimento dal vivo e spettacolo della serata turca", zh: "现场娱乐与土耳其之夜表演", id: "Hiburan langsung & pertunjukan malam Turki", ms: "Hiburan langsung & persembahan malam Turki", pl: "Rozrywka na żywo i turecki pokaz nocny", bg: "Забавление на живо и турска нощна програма", ro: "Divertisment live și spectacol de seară turcească"
  },
  "pkg.feat.tablePrem": {
    en: "Private table — stage view or window seat", tr: "Özel masa — sahne görüşü veya pencere kenarı", de: "Privater Tisch — Bühnensicht oder Fenster", es: "Mesa privada — vista al escenario o ventana", ru: "Отдельный столик — вид на сцену или у окна", ar: "طاولة خاصة — إطلالة على المسرح أو مقعد بجانب النافذة",
    fa: "میز خصوصی — دید به صحنه یا جایگاه کنار پنجره", fr: "Table privée — vue sur scène ou près de la fenêtre", it: "Tavolo privato — vista sul palco o posto finestrato", zh: "专属餐桌——舞台视野或靠窗座位", id: "Meja privat — pemandangan panggung atau kursi jendela", ms: "Meja peribadi — pemandangan pentas atau tempat duduk tepi tingkap", pl: "Prywatny stół — widok na scenę lub miejsce przy oknie", bg: "Лична маса — изглед към сцената или до прозореца", ro: "Masă privată — vedere la scenă sau loc la fereastră"
  },
  "pkg.feat.dinnerVip": {
    en: "VIP menu — premium meze, mixed grill & special dishes", tr: "VIP menü — premium meze, karışık ızgara & özel yemekler", de: "VIP-Menü — Premium-Meze, Mixed Grill & Extras", es: "Menú VIP — meze premium, parrillada mixta y platos especiales", ru: "VIP-меню — премиум мезе, микс-гриль и спецблюда", ar: "قائمة VIP — مقبلات فاخرة، مشويات مشكلة وأطباق خاصة",
    fa: "منوی VIP — مزه‌های ممتاز، گریل مخلوط و غذاهای ویژه", fr: "Menu VIP — mezzés premium, grillades & plats spéciaux", it: "Menu VIP — meze premium, piatto misto alla griglia e piatti speciali", zh: "VIP菜单——尊享冷盘、混合烤肉与特色菜肴", id: "Menu VIP — meze premium, mixed grill & hidangan khusus", ms: "Menu VIP — meze premium, panggangan campuran & hidangan istimewa", pl: "Menu VIP — premium mezze, półmisek mieszany i dania specjalne", bg: "VIP меню — премиум мезета, микс грил и специални ястия", ro: "Meniu VIP — mezeluri premium, grătar mixt și preparate speciale"
  },
  "pkg.feat.tableVip": {
    en: "Private VIP table — best location", tr: "Özel VIP masa — en iyi konum", de: "Privater VIP-Tisch — beste Lage", es: "Mesa VIP privada — mejor ubicación", ru: "VIP-столик — лучшее расположение", ar: "طاولة VIP خاصة — أفضل موقع",
    fa: "میز خصوصی VIP — بهترین موقعیت", fr: "Table VIP privée — meilleur emplacement", it: "Tavolo VIP privato — miglior posizione", zh: "专属VIP餐桌——最佳位置", id: "Meja VIP privat — lokasi terbaik", ms: "Meja VIP peribadi — lokasi terbaik", pl: "Prywatny stół VIP — najlepsza lokalizacja", bg: "Лична VIP маса — най-доброто място", ro: "Masă VIP privată — cea mai bună locație"
  },
  "pkg.feat.priority": {
    en: "Priority boarding & VIP service", tr: "Öncelikli biniş & VIP hizmet", de: "Bevorzugter Einstieg & VIP-Service", es: "Embarque prioritario y servicio VIP", ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود وخدمة VIP",
    fa: "سوار شدن با اولویت و خدمات VIP", fr: "Embarquement prioritaire & service VIP", it: "Imbarco prioritario e servizio VIP", zh: "优先登船与VIP服务", id: "Naik kapal prioritas & layanan VIP", ms: "Keutamaan menaiki bot & perkhidmatan VIP", pl: "Priorytetowe wejście na pokład i obsługa VIP", bg: "Приоритетно качване и VIP обслужване", ro: "Îmbarcare prioritară și serviciu VIP"
  },

  // ========== EXTRAS ==========
  "pkg.extras": {
    en: "Optional extras:", tr: "Opsiyonel ekstralar:", de: "Optionale Extras:", es: "Extras opcionales:", ru: "Дополнительные опции:", ar: "إضافات اختيارية:",
    fa: "افزودنی‌های اختیاری:", fr: "Options supplémentaires :", it: "Extra opzionali:", zh: "可选附加项:", id: "Tambahan opsional:", ms: "Tambahan pilihan:", pl: "Dodatki opcjonalne:", bg: "Опционални добавки:", ro: "Suplimente opționale:"
  },
  "pkg.badge.alcohol": {
    en: "Alcohol €{p.unlimited}", tr: "Alkol €{p.unlimited}", de: "Alkohol €{p.unlimited}", es: "Alcohol €{p.unlimited}", ru: "Алкоголь €{p.unlimited}", ar: "كحول €{p.unlimited}",
    fa: "الکل €{p.unlimited}", fr: "Alcool €{p.unlimited}", it: "Alcol €{p.unlimited}", zh: "酒水€{p.unlimited}", id: "Alkohol €{p.unlimited}", ms: "Alkohol €{p.unlimited}", pl: "Alkohol €{p.unlimited}", bg: "Алкохол €{p.unlimited}", ro: "Alcool €{p.unlimited}"
  },
  "pkg.badge.transfer": {
    en: "Transfer €{p.transfer}", tr: "Transfer €{p.transfer}", de: "Transfer €{p.transfer}", es: "Traslado €{p.transfer}", ru: "Трансфер €{p.transfer}", ar: "نقل €{p.transfer}",
    fa: "ترانسفر €{p.transfer}", fr: "Transfert €{p.transfer}", it: "Transfer €{p.transfer}", zh: "接送€{p.transfer}", id: "Antar-jemput €{p.transfer}", ms: "Pemindahan €{p.transfer}", pl: "Transfer €{p.transfer}", bg: "Трансфер €{p.transfer}", ro: "Transfer €{p.transfer}"
  },
  "pkg.badge.romantic": {
    en: "Romantic €25", tr: "Romantik €25", de: "Romantik €25", es: "Romántico €25", ru: "Романтика €25", ar: "رومانسي €25",
    fa: "رمانتیک €25", fr: "Romantique €25", it: "Romantico €25", zh: "浪漫€25", id: "Romantis €25", ms: "Romantik €25", pl: "Romantyczny €25", bg: "Романтична €25", ro: "Romantic €25"
  },

  // ========== PACKAGE OPTIONS ==========
  "pkg.opt.std": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "قياسي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard"
  },
  "pkg.opt.prem": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "بريميوم",
    fa: "پرمیوم", fr: "Premium", it: "Premium", zh: "高级", id: "Premium", ms: "Premium", pl: "Premium", bg: "Премиум", ro: "Premium"
  },
  "pkg.opt.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP"
  },

  // ========== BOOKING DRINK SELECTION ==========
  "booking.softDrinkBtn": {
    en: "Soft Drinks", tr: "Alkolsüz", de: "Softdrinks", es: "Sin Alcohol", ru: "Безалкогольные", ar: "مشروبات غازية",
    fa: "نوشیدنی‌های بدون‌الکل", fr: "Boissons non alcoolisées", it: "Bevande analcoliche", zh: "软饮", id: "Minuman Ringan", ms: "Minuman Ringan", pl: "Napoje bezalkoholowe", bg: "Безалкохолни напитки", ro: "Băuturi Răcoritoare"
  },
  "booking.glass2Btn": {
    en: "2 Glasses +€{p.alcohol2}", tr: "2 Kadeh +€{p.alcohol2}", de: "2 Gläser +€{p.alcohol2}", es: "2 Copas +€{p.alcohol2}", ru: "2 бокала +€{p.alcohol2}", ar: "كأسان +€{p.alcohol2}",
    fa: "۲ لیوان +€{p.alcohol2}", fr: "2 verres +€{p.alcohol2}", it: "2 bicchieri +€{p.alcohol2}", zh: "2杯酒+€{p.alcohol2}", id: "2 Gelas +€{p.alcohol2}", ms: "2 Gelas +€{p.alcohol2}", pl: "2 kieliszki +€{p.alcohol2}", bg: "2 чаши +€{p.alcohol2}", ro: "2 Pahare +€{p.alcohol2}"
  },
  "booking.unlimitedBtn": {
    en: "Unlimited +€{p.unlimited}", tr: "Sınırsız +€{p.unlimited}", de: "Unbegrenzt +€{p.unlimited}", es: "Ilimitado +€{p.unlimited}", ru: "Безлимит +€{p.unlimited}", ar: "غير محدود +€{p.unlimited}",
    fa: "نامحدود +€{p.unlimited}", fr: "Illimité +€{p.unlimited}", it: "Illimitato +€{p.unlimited}", zh: "无限畅饮+€{p.unlimited}", id: "Tanpa Batas +€{p.unlimited}", ms: "Tanpa Had +€{p.unlimited}", pl: "Nieograniczone +€{p.unlimited}", bg: "Неограничено +€{p.unlimited}", ro: "Nelimitat +€{p.unlimited}"
  },
  "booking.drinkWarn": {
    en: "⚠ Please select a drink option", tr: "⚠ Lütfen içecek seçimi yapın", de: "⚠ Bitte Getränk wählen", es: "⚠ Seleccione una opción de bebida", ru: "⚠ Выберите вариант напитков", ar: "⚠ يرجى اختيار خيار المشروبات",
    fa: "⚠ لطفاً یک گزینه نوشیدنی انتخاب کنید", fr: "⚠ Veuillez sélectionner une option de boisson", it: "⚠ Per favore selezioni un'opzione bevande", zh: "⚠ 请选择一种饮品", id: "⚠ Silakan pilih opsi minuman", ms: "⚠ Sila pilih pilihan minuman", pl: "⚠ Proszę wybrać opcję napojów", bg: "⚠ Моля, изберете опция за напитки", ro: "⚠ Vă rugăm să selectați o opțiune de băutură"
  },
  "booking.softInfo": {
    en: "All guests get unlimited soft drinks", tr: "Tüm misafirler sınırsız alkolsüz içecek alır", de: "Alle Gäste erhalten unbegrenzt Softdrinks", es: "Todos los huéspedes reciben refrescos ilimitados", ru: "Все гости получат безлимитные безалкогольные напитки", ar: "جميع الضيوف يحصلون على مشروبات غازية غير محدودة",
    fa: "همه مهمانان نوشیدنی‌های بدون‌الکل نامحدود دریافت می‌کنند", fr: "Tous les invités ont les boissons non alcoolisées à volonté", it: "Tutti gli ospiti ricevono bevande analcoliche illimitate", zh: "所有宾客可无限畅饮软饮", id: "Semua tamu mendapat minuman ringan tanpa batas", ms: "Semua tetamu mendapat minuman ringan tanpa had", pl: "Wszyscy goście otrzymują nieograniczone napoje bezalkoholowe", bg: "Всички гости получават неограничени безалкохолни напитки", ro: "Toți oaspeții primesc băuturi răcoritoare nelimitate"
  },

  // ========== GALLERY TABS ==========
  "gal.tab.all": {
    en: "All", tr: "Hepsi", de: "Alle", es: "Todo", ru: "Все", ar: "الكل",
    fa: "همه", fr: "Tous", it: "Tutte", zh: "全部", id: "Semua", ms: "Semua", pl: "Wszystko", bg: "Всички", ro: "Toate"
  },
  "gal.tab.boat": {
    en: "Boat", tr: "Tekne", de: "Boot", es: "Barco", ru: "Судно", ar: "القارب",
    fa: "کشتی", fr: "Bateau", it: "Barca", zh: "游船", id: "Kapal", ms: "Bot", pl: "Łódź", bg: "Лодка", ro: "Vapor"
  },
  "gal.tab.dining": {
    en: "Dining", tr: "Yemek", de: "Essen", es: "Cena", ru: "Ужин", ar: "العشاء",
    fa: "غذاخوری", fr: "Repas", it: "Cena", zh: "用餐", id: "Santap", ms: "Santapan", pl: "Kolacja", bg: "Вечеря", ro: "Cină"
  },
  "gal.tab.views": {
    en: "Views", tr: "Manzara", de: "Aussicht", es: "Vistas", ru: "Виды", ar: "المناظر",
    fa: "مناظر", fr: "Vues", it: "Vedute", zh: "景色", id: "Pemandangan", ms: "Pemandangan", pl: "Widoki", bg: "Гледки", ro: "Priveliști"
  },
  "gal.tab.entertainment": {
    en: "Entertainment", tr: "Eğlence", de: "Show", es: "Show", ru: "Шоу", ar: "الترفيه",
    fa: "سرگرمی", fr: "Divertissement", it: "Intrattenimento", zh: "娱乐", id: "Hiburan", ms: "Hiburan", pl: "Rozrywka", bg: "Забавление", ro: "Divertisment"
  },
  "gal.tab.atmosphere": {
    en: "Atmosphere", tr: "Atmosfer", de: "Atmosphäre", es: "Ambiente", ru: "Атмосфера", ar: "الأجواء",
    fa: "فضا", fr: "Atmosphère", it: "Atmosfera", zh: "氛围", id: "Suasana", ms: "Suasana", pl: "Atmosfera", bg: "Атмосфера", ro: "Atmosferă"
  },

  // ========== GALLERY CAPTIONS ==========
  "gal.1.title": {
    en: "Bosphorus Night View", tr: "Boğaz Gece Manzarası", de: "Bosporus-Nachtblick", es: "Vista Nocturna del Bósforo", ru: "Ночной вид Босфора", ar: "منظر البوسفور الليلي",
    fa: "منظره شبانه بسفر", fr: "Vue nocturne du Bosphore", it: "Vista notturna sul Bosforo", zh: "博斯普鲁斯夜景", id: "Pemandangan Malam Bosphorus", ms: "Pemandangan Malam Bosphorus", pl: "Nocny widok Bosforu", bg: "Нощна гледка на Босфора", ro: "Priveliște Nocturnă pe Bosfor"
  },
  "gal.1.desc": {
    en: "Istanbul's iconic skyline at night", tr: "İstanbul'un ikonik gece silüeti", de: "Istanbuls ikonische Skyline bei Nacht", es: "El icónico horizonte nocturno de Estambul", ru: "Ночной горизонт Стамбула", ar: "أفق إسطنبول الليلي الأيقوني",
    fa: "خط آسمان نمادین استانبول در شب", fr: "L'horizon iconique d'Istanbul la nuit", it: "Lo skyline iconico di Istanbul di notte", zh: "伊斯坦布尔标志性夜间天际线", id: "Cakrawala ikonik Istanbul di malam hari", ms: "Ufuk ikonik Istanbul pada waktu malam", pl: "Kultowa panorama Stambułu nocą", bg: "Емблематичният силует на Истанбул през нощта", ro: "Silueta iconică a Istanbulului noaptea"
  },
  "gal.2.title": {
    en: "Dinner Setup", tr: "Yemek Düzeni", de: "Tischdekoration", es: "Montaje de Cena", ru: "Сервировка ужина", ar: "ترتيب العشاء",
    fa: "چیدمان شام", fr: "Dressage de table", it: "Allestimento della cena", zh: "晚宴布置", id: "Pengaturan Makan Malam", ms: "Susunan Makan Malam", pl: "Aranżacja kolacji", bg: "Сервиране на вечеря", ro: "Aranjament de Cină"
  },
  "gal.2.desc": {
    en: "Premium table arrangement", tr: "Premium masa düzeni", de: "Premium-Tischarrangement", es: "Arreglo de mesa premium", ru: "Премиальная сервировка", ar: "ترتيب طاولة فاخر",
    fa: "آرایش ممتاز میز", fr: "Décoration de table premium", it: "Allestimento tavolo premium", zh: "高级餐桌摆设", id: "Pengaturan meja premium", ms: "Susunan meja premium", pl: "Premium ustawienie stołu", bg: "Премиум подредба на масата", ro: "Aranjament premium de masă"
  },
  "gal.a1.title": {
    en: "Velvet Dining Hall", tr: "Kadife Yemek Salonu", de: "Samt-Speisesaal", es: "Salón de Terciopelo", ru: "Бархатный зал", ar: "قاعة طعام مخملية",
    fa: "سالن غذاخوری مخمل", fr: "Salle à manger en velours", it: "Sala da pranzo in velluto", zh: "丝绒用餐大厅", id: "Aula Makan Beludru", ms: "Dewan Makan Baldu", pl: "Aksamitna sala jadalna", bg: "Велурена зала за вечеря", ro: "Sală de Masă din Catifea"
  },
  "gal.a1.desc": {
    en: "Premium seating with crystal glassware", tr: "Kristal cam takımıyla premium oturma", de: "Premium-Sitze mit Kristallgläsern", es: "Asientos premium con cristalería", ru: "Премиум-места с хрусталем", ar: "مقاعد فاخرة مع أدوات زجاجية كريستالية",
    fa: "جایگاه ممتاز با ظروف کریستال", fr: "Placement premium avec verrerie en cristal", it: "Posti a sedere premium con cristalleria", zh: "高级座席配水晶杯具", id: "Tempat duduk premium dengan gelas kristal", ms: "Tempat duduk premium dengan perkakas kaca kristal", pl: "Premium miejsca z kryształowym szkłem", bg: "Премиум места с кристални чаши", ro: "Locuri premium cu pahare de cristal"
  },
  "gal.a2.title": {
    en: "Signature Mezes", tr: "Özel Meze Tabağı", de: "Signature-Mezes", es: "Mezes de la Casa", ru: "Фирменные мезе", ar: "مقبلات مميزة",
    fa: "مزه‌های ویژه", fr: "Mezzés signature", it: "Meze d'autore", zh: "招牌冷盘", id: "Meze Andalan", ms: "Meze Istimewa", pl: "Charakterystyczne mezze", bg: "Подпис мезета", ro: "Mezeluri Semnătură"
  },
  "gal.a2.desc": {
    en: "Turkish starter selection", tr: "Türk başlangıç seçkisi", de: "Türkische Vorspeisenauswahl", es: "Selección de entrantes turcos", ru: "Турецкие закуски на выбор", ar: "مقبلات تركية متنوعة",
    fa: "مجموعه پیش‌غذاهای ترکی", fr: "Sélection d'entrées turques", it: "Selezione di antipasti turchi", zh: "土耳其前菜精选", id: "Pilihan hidangan pembuka Turki", ms: "Pilihan pembuka selera Turki", pl: "Turecki wybór przystawek", bg: "Турски избор на предястия", ro: "Selecție de aperitive turcești"
  },
  "gal.3.title": {
    en: "Luxury Yacht Tour", tr: "Lüks Yat Turu", de: "Luxusyacht-Tour", es: "Tour en Yate de Lujo", ru: "Тур на люкс-яхте", ar: "جولة يخت فاخرة",
    fa: "تور کشتی لوکس", fr: "Tour en yacht de luxe", it: "Tour in yacht di lusso", zh: "豪华游艇之旅", id: "Tur Yacht Mewah", ms: "Tur Yacht Mewah", pl: "Wycieczka luksusowym jachtem", bg: "Тур с луксозна яхта", ro: "Tur cu Iaht de Lux"
  },
  "gal.3.desc": {
    en: "Watch the full experience", tr: "Tam deneyimi izleyin", de: "Erleben Sie das volle Erlebnis", es: "Vea la experiencia completa", ru: "Полный опыт круиза", ar: "شاهد التجربة الكاملة",
    fa: "تماشای کل تجربه", fr: "Découvrez toute l'expérience", it: "Guardi l'esperienza completa", zh: "观看完整体验", id: "Saksikan pengalaman lengkap", ms: "Tonton pengalaman penuh", pl: "Obejrzyj pełne doświadczenie", bg: "Вижте пълното преживяване", ro: "Priviți experiența completă"
  },
  "gal.4.title": {
    en: "Istanbul Skyline", tr: "İstanbul Silüeti", de: "Istanbul Skyline", es: "Horizonte de Estambul", ru: "Горизонт Стамбула", ar: "أفق إسطنبول",
    fa: "خط آسمان استانبول", fr: "Horizon d'Istanbul", it: "Skyline di Istanbul", zh: "伊斯坦布尔天际线", id: "Cakrawala Istanbul", ms: "Ufuk Istanbul", pl: "Panorama Stambułu", bg: "Силует на Истанбул", ro: "Silueta Istanbulului"
  },
  "gal.4.desc": {
    en: "Maiden's Tower & beyond", tr: "Kız Kulesi ve ötesi", de: "Leanderturm & mehr", es: "Torre de la Doncella y más", ru: "Девичья башня и далее", ar: "برج الفتاة وما وراءه",
    fa: "برج دختر و فراتر", fr: "Tour de Léandre & au-delà", it: "Torre della Fanciulla e oltre", zh: "少女塔及其他", id: "Menara Gadis & lebih jauh", ms: "Menara Maiden & sekitarnya", pl: "Wieża Panny i dalej", bg: "Кулата на девойката и отвъд", ro: "Turnul Fecioarei și dincolo"
  },
  "gal.5.title": {
    en: "Turkish Night Show", tr: "Türk Gecesi Şovu", de: "Türkische Nachtshow", es: "Show Nocturno Turco", ru: "Турецкая ночь", ar: "عرض الليلة التركية",
    fa: "نمایش شب ترکی", fr: "Soirée turque", it: "Spettacolo della serata turca", zh: "土耳其之夜表演", id: "Pertunjukan Malam Turki", ms: "Persembahan Malam Turki", pl: "Turecki pokaz nocny", bg: "Турска нощна програма", ro: "Spectacol de Seară Turcească"
  },
  "gal.5.desc": {
    en: "Live dance & music", tr: "Canlı dans ve müzik", de: "Live-Tanz & Musik", es: "Danza y música en vivo", ru: "Живые танцы и музыка", ar: "رقص وموسيقى حية",
    fa: "رقص و موسیقی زنده", fr: "Danse & musique en direct", it: "Danza e musica dal vivo", zh: "现场舞蹈与音乐", id: "Tari & musik langsung", ms: "Tarian & muzik langsung", pl: "Taniec i muzyka na żywo", bg: "Танци и музика на живо", ro: "Dans și muzică live"
  },
  "gal.6.title": {
    en: "Under the Bridge", tr: "Köprü Altından", de: "Unter der Brücke", es: "Bajo el Puente", ru: "Под мостом", ar: "تحت الجسر",
    fa: "زیر پل", fr: "Sous le pont", it: "Sotto il ponte", zh: "大桥之下", id: "Di Bawah Jembatan", ms: "Di Bawah Jambatan", pl: "Pod mostem", bg: "Под моста", ro: "Sub Pod"
  },
  "gal.6.desc": {
    en: "Bosphorus Bridge at night", tr: "Boğaziçi Köprüsü gece", de: "Bosporus-Brücke bei Nacht", es: "Puente del Bósforo de noche", ru: "Мост через Босфор ночью", ar: "جسر البوسفور ليلاً",
    fa: "پل بسفر در شب", fr: "Pont du Bosphore la nuit", it: "Il Ponte del Bosforo di notte", zh: "夜晚的博斯普鲁斯大桥", id: "Jembatan Bosphorus di malam hari", ms: "Jambatan Bosphorus pada waktu malam", pl: "Most Bosforski nocą", bg: "Мостът на Босфора през нощта", ro: "Podul Bosfor noaptea"
  },
  "gal.7.title": {
    en: "Premium Cuisine", tr: "Premium Mutfak", de: "Premium-Küche", es: "Cocina Premium", ru: "Премиум-кухня", ar: "مطبخ فاخر",
    fa: "آشپزی ممتاز", fr: "Cuisine premium", it: "Cucina premium", zh: "高级美食", id: "Masakan Premium", ms: "Masakan Premium", pl: "Kuchnia premium", bg: "Премиум кухня", ro: "Bucătărie Premium"
  },
  "gal.7.desc": {
    en: "10 meze + main course + dessert", tr: "10 meze + ana yemek + tatlı", de: "10 Meze + Hauptgang + Dessert", es: "10 meze + plato principal + postre", ru: "10 мезе + основное + десерт", ar: "10 مقبلات + طبق رئيسي + حلوى",
    fa: "۱۰ مزه + غذای اصلی + دسر", fr: "10 mezzés + plat principal + dessert", it: "10 meze + secondo + dolce", zh: "10道冷盘+主菜+甜点", id: "10 meze + menu utama + pencuci mulut", ms: "10 meze + hidangan utama + pencuci mulut", pl: "10 mezze + danie główne + deser", bg: "10 мезета + основно ястие + десерт", ro: "10 mezeluri + fel principal + desert"
  },
  "gal.8.title": {
    en: "Romantic Evening", tr: "Romantik Akşam", de: "Romantischer Abend", es: "Noche Romántica", ru: "Романтический вечер", ar: "أمسية رومانسية",
    fa: "شب رمانتیک", fr: "Soirée romantique", it: "Serata romantica", zh: "浪漫之夜", id: "Malam Romantis", ms: "Petang Romantik", pl: "Romantyczny wieczór", bg: "Романтична вечер", ro: "Seară Romantică"
  },
  "gal.8.desc": {
    en: "Perfect for couples", tr: "Çiftler için mükemmel", de: "Perfekt für Paare", es: "Perfecto para parejas", ru: "Идеально для пар", ar: "مثالية للأزواج",
    fa: "ایده‌آل برای زوج‌ها", fr: "Parfait pour les couples", it: "Perfetta per le coppie", zh: "完美的情侣选择", id: "Sempurna untuk pasangan", ms: "Sempurna untuk pasangan", pl: "Idealnie dla par", bg: "Перфектно за двойки", ro: "Perfect pentru cupluri"
  },
  "gal.9.title": {
    en: "Classic Cruise", tr: "Klasik Tur", de: "Klassische Kreuzfahrt", es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية",
    fa: "تور کلاسیک", fr: "Croisière Classique", it: "Crociera classica", zh: "经典游船", id: "Pelayaran Klasik", ms: "Pelayaran Klasik", pl: "Klasyczny rejs", bg: "Класически круиз", ro: "Croazieră Clasică"
  },
  "gal.9.desc": {
    en: "Elegant vessel on the Bosphorus", tr: "Boğaz'da zarif tekne", de: "Elegantes Schiff auf dem Bosporus", es: "Embarcación elegante en el Bósforo", ru: "Элегантное судно на Босфоре", ar: "سفينة أنيقة في البوسفور",
    fa: "کشتی شیک بر روی بسفر", fr: "Bateau élégant sur le Bosphore", it: "Elegante imbarcazione sul Bosforo", zh: "博斯普鲁斯上的优雅船艇", id: "Kapal elegan di Bosphorus", ms: "Kapal elegan di atas Bosphorus", pl: "Elegancka jednostka nad Bosforem", bg: "Елегантен съд по Босфора", ro: "Vas elegant pe Bosfor"
  },
  "gal.10.title": {
    en: "Night Atmosphere", tr: "Gece Atmosferi", de: "Nacht-Atmosphäre", es: "Ambiente Nocturno", ru: "Ночная атмосфера", ar: "أجواء الليل",
    fa: "فضای شبانه", fr: "Ambiance nocturne", it: "Atmosfera notturna", zh: "夜晚氛围", id: "Suasana Malam", ms: "Suasana Malam", pl: "Nocna atmosfera", bg: "Нощна атмосфера", ro: "Atmosferă Nocturnă"
  },
  "gal.10.desc": {
    en: "Unforgettable ambiance", tr: "Unutulmaz ambiyans", de: "Unvergessliche Atmosphäre", es: "Ambiente inolvidable", ru: "Незабываемая атмосфера", ar: "أجواء لا تُنسى",
    fa: "جوی فراموش‌نشدنی", fr: "Ambiance inoubliable", it: "Ambiente indimenticabile", zh: "难以忘怀的氛围", id: "Ambiance tak terlupakan", ms: "Suasana yang tidak dapat dilupakan", pl: "Niezapomniany nastrój", bg: "Незабравима обстановка", ro: "Ambianță de neuitat"
  },

  // ========== BOARDING SECTION ==========
  "boarding.label": {
    en: "Your Evening Begins", tr: "Akşamınız Başlıyor", de: "Ihr Abend beginnt", es: "Su Noche Comienza", ru: "Ваш вечер начинается", ar: "مساؤكم يبدأ",
    fa: "شب شما آغاز می‌شود", fr: "Votre soirée commence", it: "La Sua serata ha inizio", zh: "您的夜晚开始", id: "Malam Anda Dimulai", ms: "Petang Anda Bermula", pl: "Państwa wieczór się zaczyna", bg: "Вашата вечер започва", ro: "Seara Dumneavoastră Începe"
  },
  "boarding.title": {
    en: "Welcome Aboard", tr: "Gemiye Hoş Geldiniz", de: "Willkommen an Bord", es: "Bienvenido a Bordo", ru: "Добро пожаловать на борт", ar: "مرحبًا على متن السفينة",
    fa: "به کشتی خوش آمدید", fr: "Bienvenue à bord", it: "Benvenuto a bordo", zh: "欢迎登船", id: "Selamat Datang di Kapal", ms: "Selamat Datang ke Kapal", pl: "Witamy na pokładzie", bg: "Добре дошли на борда", ro: "Bine Ați Venit la Bord"
  },
  "boarding.music": {
    en: "Live music welcomes you", tr: "Canlı müzik sizi karşılıyor", de: "Live-Musik empfängt Sie", es: "La música en vivo te da la bienvenida", ru: "Живая музыка встречает вас", ar: "الموسيقى الحية ترحب بكم",
    fa: "موسیقی زنده به شما خوشامد می‌گوید", fr: "La musique live vous accueille", it: "La musica dal vivo La accoglie", zh: "现场音乐迎接您", id: "Musik langsung menyambut Anda", ms: "Muzik langsung mengalu-alukan anda", pl: "Muzyka na żywo wita Państwa", bg: "Музика на живо Ви посреща", ro: "Muzica live vă întâmpină"
  },
  "boarding.music.desc": {
    en: "Live singer welcomes you as you step on board", tr: "Gemiye adım attığınızda canlı şarkıcı sizi karşılıyor", de: "Live-Sänger begrüßt Sie beim Betreten des Schiffes", es: "Un cantante en vivo te da la bienvenida al subir a bordo", ru: "Живой певец встречает вас при посадке", ar: "مغني حي يرحب بكم عند صعودكم على متن السفينة",
    fa: "خواننده زنده هنگام سوار شدن به شما خوشامد می‌گوید", fr: "Un chanteur en direct vous accueille dès votre arrivée à bord", it: "Un cantante dal vivo La accoglie mentre sale a bordo", zh: "您登船的一刻,现场歌手迎接您", id: "Penyanyi langsung menyambut Anda saat melangkah naik ke kapal", ms: "Penyanyi langsung mengalu-alukan anda ketika anda menaiki bot", pl: "Śpiewak na żywo wita Państwa, gdy wchodzicie na pokład", bg: "Певец на живо Ви посреща, когато стъпите на борда", ro: "Cântărețul live vă întâmpină când pășiți la bord"
  },
  "boarding.table": {
    en: "Your reserved table awaits", tr: "Rezerve masanız hazır", de: "Ihr reservierter Tisch wartet", es: "Su mesa reservada le espera", ru: "Ваш зарезервированный стол ждёт", ar: "طاولتكم المحجوزة بانتظاركم",
    fa: "میز رزرو شده شما منتظرتان است", fr: "Votre table réservée vous attend", it: "Il Suo tavolo riservato L'attende", zh: "您的专属餐桌已备", id: "Meja yang Anda pesan menanti", ms: "Meja tempahan anda menanti", pl: "Państwa zarezerwowany stół czeka", bg: "Запазената Ви маса Ви очаква", ro: "Masa dumneavoastră rezervată vă așteaptă"
  },
  "boarding.table.desc": {
    en: "Pre-assigned private seating with the best views", tr: "En iyi manzaralı özel oturma düzeni", de: "Vorab zugewiesene Plätze mit bester Aussicht", es: "Asientos privados preasignados con las mejores vistas", ru: "Заранее назначенные места с лучшим видом", ar: "مقاعد خاصة مخصصة مسبقًا بأفضل الإطلالات",
    fa: "جایگاه خصوصی از پیش تعیین شده با بهترین مناظر", fr: "Placement privé pré-attribué avec les meilleures vues", it: "Posto privato pre-assegnato con le migliori vedute", zh: "预先安排的专属座席,拥有最佳视野", id: "Tempat duduk privat yang sudah ditetapkan dengan pemandangan terbaik", ms: "Tempat duduk peribadi yang telah ditetapkan dengan pemandangan terbaik", pl: "Wcześniej przypisane prywatne miejsca z najlepszymi widokami", bg: "Предварително определени лични места с най-добри гледки", ro: "Loc privat pre-atribuit cu cele mai bune priveliști"
  },
  "boarding.meze": {
    en: "Meze & drinks before departure", tr: "Kalkış öncesi meze ve içecekler", de: "Meze & Getränke vor Abfahrt", es: "Meze y bebidas antes de la salida", ru: "Мезе и напитки перед отплытием", ar: "مقبلات ومشروبات قبل المغادرة",
    fa: "مزه و نوشیدنی پیش از حرکت", fr: "Mezzés & boissons avant le départ", it: "Meze e bevande prima della partenza", zh: "启航前的冷盘与饮品", id: "Meze & minuman sebelum keberangkatan", ms: "Meze & minuman sebelum bertolak", pl: "Mezze i napoje przed wypłynięciem", bg: "Мезета и напитки преди отплаването", ro: "Mezeluri și băuturi înainte de plecare"
  },
  "boarding.meze.desc": {
    en: "Start with Turkish meze and refreshments while we prepare to sail", tr: "Kalkışa hazırlanırken Türk mezeleri ve içeceklerle başlayın", de: "Beginnen Sie mit türkischen Meze und Erfrischungen", es: "Comience con meze turco y refrescos mientras nos preparamos", ru: "Начните с турецких мезе и напитков пока мы готовимся к отплытию", ar: "ابدأ بالمقبلات التركية والمشروبات أثناء التحضير للإبحار",
    fa: "با مزه ترکی و نوشیدنی‌های سرد شروع کنید تا آماده حرکت شویم", fr: "Commencez par des mezzés turcs et des rafraîchissements pendant que nous préparons l'appareillage", it: "Inizi con meze turchi e bevande mentre ci prepariamo a salpare", zh: "在我们准备启航时,先品尝土耳其冷盘与饮品", id: "Mulailah dengan meze Turki dan penyegar saat kami bersiap berlayar", ms: "Mulakan dengan meze Turki dan minuman segar semasa kami bersedia untuk belayar", pl: "Zacznij od tureckich mezze i odświeżenia, gdy przygotowujemy się do wypłynięcia", bg: "Започнете с турски мезета и освежителни напитки, докато се подготвяме за плаване", ro: "Începeți cu mezeluri turcești și răcoritoare în timp ce pregătim plecarea"
  },
  "boarding.sail": {
    en: "Show begins as we set sail", tr: "Yelken açılınca şov başlıyor", de: "Die Show beginnt mit dem Ablegen", es: "El show comienza al zarpar", ru: "Шоу начинается с отплытием", ar: "يبدأ العرض مع الإبحار",
    fa: "نمایش با حرکت کشتی آغاز می‌شود", fr: "Le spectacle commence au départ", it: "Lo spettacolo inizia al momento della partenza", zh: "启航时表演开始", id: "Pertunjukan dimulai saat kami berlayar", ms: "Persembahan bermula ketika kami bertolak", pl: "Pokaz zaczyna się wraz z wypłynięciem", bg: "Шоуто започва, когато отплаваме", ro: "Spectacolul începe când ridicăm ancora"
  },
  "boarding.sail.desc": {
    en: "The entertainment starts the moment we leave the pier", tr: "İskeleden ayrıldığımız an eğlence başlıyor", de: "Die Unterhaltung beginnt sobald wir den Pier verlassen", es: "El entretenimiento comienza en cuanto dejamos el muelle", ru: "Развлечения начинаются в момент отхода от пирса", ar: "يبدأ الترفيه لحظة مغادرة الرصيف",
    fa: "سرگرمی از لحظه‌ای که اسکله را ترک می‌کنیم آغاز می‌شود", fr: "Le divertissement démarre dès que nous quittons l'embarcadère", it: "L'intrattenimento inizia nel momento in cui lasciamo il molo", zh: "我们离开码头的那一刻,娱乐节目开启", id: "Hiburan dimulai saat kami meninggalkan dermaga", ms: "Hiburan bermula pada saat kami meninggalkan jeti", pl: "Rozrywka zaczyna się w chwili, gdy opuszczamy przystań", bg: "Забавлението започва в момента, в който напуснем пристанището", ro: "Divertismentul începe în momentul în care părăsim debarcaderul"
  },

  // ========== ARRIVAL SECTION ==========
  "arrival.label": {
    en: "End of Cruise", tr: "Turun Sonu", de: "Ende der Kreuzfahrt", es: "Fin del Crucero", ru: "Конец круиза", ar: "نهاية الرحلة",
    fa: "پایان تور", fr: "Fin de la croisière", it: "Fine della crociera", zh: "游船结束", id: "Akhir Pelayaran", ms: "Akhir Pelayaran", pl: "Koniec rejsu", bg: "Край на круиза", ro: "Sfârșitul Croazierei"
  },
  "arrival.title": {
    en: "Return to Kabataş", tr: "Kabataş'a Dönüş", de: "Rückkehr nach Kabataş", es: "Regreso a Kabataş", ru: "Возвращение в Кабаташ", ar: "العودة إلى كاباتاش",
    fa: "بازگشت به کاباتاش", fr: "Retour à Kabataş", it: "Ritorno a Kabataş", zh: "返回卡巴塔什", id: "Kembali ke Kabataş", ms: "Kembali ke Kabataş", pl: "Powrót do Kabataş", bg: "Завръщане в Кабаташ", ro: "Întoarcere la Kabataș"
  },
  "arrival.pier": {
    en: "Back to Kabataş Pier", tr: "Kabataş İskelesi'ne dönüş", de: "Zurück zum Kabataş Pier", es: "De vuelta al muelle de Kabataş", ru: "Обратно к пирсу Кабаташ", ar: "العودة إلى رصيف كاباتاش",
    fa: "بازگشت به اسکله کاباتاش", fr: "Retour à l'embarcadère de Kabataş", it: "Ritorno al molo di Kabataş", zh: "返回卡巴塔什码头", id: "Kembali ke Dermaga Kabataş", ms: "Kembali ke Jeti Kabataş", pl: "Z powrotem na przystań Kabataş", bg: "Обратно на пристанището Кабаташ", ro: "Înapoi la Debarcaderul Kabataș"
  },
  "arrival.pier.desc": {
    en: "We return to the same pier where we departed", tr: "Kalktığımız iskeleye geri dönüyoruz", de: "Wir kehren zum selben Pier zurück", es: "Regresamos al mismo muelle de partida", ru: "Мы возвращаемся к тому же причалу", ar: "نعود إلى نفس الرصيف الذي غادرنا منه",
    fa: "به همان اسکله‌ای که از آن حرکت کردیم بازمی‌گردیم", fr: "Nous retournons au même embarcadère que celui du départ", it: "Rientriamo allo stesso molo da cui siamo partiti", zh: "我们返回启航时的同一码头", id: "Kami kembali ke dermaga yang sama tempat kami berangkat", ms: "Kami kembali ke jeti yang sama tempat kami bertolak", pl: "Wracamy na tę samą przystań, z której wypłynęliśmy", bg: "Връщаме се на същото пристанище, откъдето тръгнахме", ro: "Ne întoarcem la același debarcader de unde am plecat"
  },
  "arrival.photos": {
    en: "Final photos on deck", tr: "Güvertede son fotoğraflar", de: "Letzte Fotos an Deck", es: "Últimas fotos en cubierta", ru: "Последние фото на палубе", ar: "صور أخيرة على السطح",
    fa: "آخرین عکس‌ها روی عرشه", fr: "Photos finales sur le pont", it: "Ultime foto sul ponte", zh: "甲板上最后的留影", id: "Foto terakhir di dek", ms: "Foto terakhir di dek", pl: "Ostatnie zdjęcia na pokładzie", bg: "Последни снимки на палубата", ro: "Ultimele fotografii pe punte"
  },
  "arrival.photos.desc": {
    en: "Capture the last moments of the Istanbul skyline", tr: "İstanbul silüetinin son anlarını yakalayın", de: "Fangen Sie die letzten Momente der Istanbul-Skyline ein", es: "Capture los últimos momentos del horizonte de Estambul", ru: "Запечатлейте последние моменты панорамы Стамбула", ar: "التقط آخر لحظات أفق إسطنبول",
    fa: "آخرین لحظات خط آسمان استانبول را ثبت کنید", fr: "Capturez les derniers instants de l'horizon d'Istanbul", it: "Catturi gli ultimi momenti dello skyline di Istanbul", zh: "捕捉伊斯坦布尔天际线的最后时刻", id: "Tangkap momen terakhir cakrawala Istanbul", ms: "Rakam detik terakhir ufuk Istanbul", pl: "Uchwyć ostatnie chwile panoramy Stambułu", bg: "Заснемете последните моменти от силуета на Истанбул", ro: "Surprindeți ultimele momente ale siluetei Istanbulului"
  },
  "arrival.transfer": {
    en: "Your transfer awaits", tr: "Transferiniz hazır", de: "Ihr Transfer wartet", es: "Su traslado le espera", ru: "Ваш трансфер ждёт", ar: "النقل بانتظاركم",
    fa: "ترانسفر شما منتظر است", fr: "Votre transfert vous attend", it: "Il Suo transfer L'attende", zh: "您的接送车在等候", id: "Antar-jemput Anda menanti", ms: "Pemindahan anda menanti", pl: "Państwa transfer czeka", bg: "Вашият трансфер Ви очаква", ro: "Transferul dumneavoastră vă așteaptă"
  },
  "arrival.transfer.desc": {
    en: "If you booked a transfer, your driver will be waiting at the pier", tr: "Transfer rezervasyonu yaptıysanız şoförünüz iskelede bekliyor olacak", de: "Wenn Sie einen Transfer gebucht haben, wartet Ihr Fahrer am Pier", es: "Si reservó un traslado, su conductor estará esperando en el muelle", ru: "Если вы заказали трансфер, водитель будет ждать на пирсе", ar: "إذا حجزت نقلًا، سيكون سائقك بانتظارك في الرصيف",
    fa: "اگر ترانسفر رزرو کرده باشید، راننده شما در اسکله منتظر خواهد بود", fr: "Si vous avez réservé un transfert, votre chauffeur vous attendra à l'embarcadère", it: "Se ha prenotato il transfer, il Suo autista La attenderà al molo", zh: "若您预订了接送服务,您的司机将在码头等候", id: "Jika Anda memesan antar-jemput, sopir Anda akan menunggu di dermaga", ms: "Jika anda menempah pemindahan, pemandu anda akan menunggu di jeti", pl: "Jeśli zarezerwowali Państwo transfer, kierowca będzie czekać na przystani", bg: "Ако сте резервирали трансфер, шофьорът Ви ще чака на пристанището", ro: "Dacă ați rezervat un transfer, șoferul dumneavoastră vă va aștepta la debarcader"
  },
  "arrival.night": {
    en: "An unforgettable night", tr: "Unutulmaz bir gece", de: "Eine unvergessliche Nacht", es: "Una noche inolvidable", ru: "Незабываемая ночь", ar: "ليلة لا تُنسى",
    fa: "یک شب فراموش‌نشدنی", fr: "Une soirée inoubliable", it: "Una serata indimenticabile", zh: "难以忘怀的一夜", id: "Malam yang tak terlupakan", ms: "Malam yang tidak dapat dilupakan", pl: "Niezapomniana noc", bg: "Незабравима нощ", ro: "O noapte de neuitat"
  },
  "arrival.night.desc": {
    en: "Take the magic of Istanbul's night with you", tr: "İstanbul gecesinin büyüsünü yanınızda götürün", de: "Nehmen Sie den Zauber der Istanbuler Nacht mit", es: "Llévese la magia de la noche de Estambul", ru: "Возьмите с собой магию ночного Стамбула", ar: "خذ معك سحر ليل إسطنبول",
    fa: "جادوی شب استانبول را با خود ببرید", fr: "Emportez avec vous la magie de la nuit d'Istanbul", it: "Porti con sé la magia della notte di Istanbul", zh: "将伊斯坦布尔夜晚的魔力带回家", id: "Bawa pulang keajaiban malam Istanbul bersama Anda", ms: "Bawa pulang keajaiban malam Istanbul bersama anda", pl: "Zabierz magię nocnego Stambułu ze sobą", bg: "Вземете магията на нощния Истанбул със себе си", ro: "Luați cu dumneavoastră magia nopții Istanbulului"
  },

  // ========== BOARDING & ARRIVAL TIMES ==========
  "boarding.time.day": {
    en: "Day Cruise: Boarding 10:00 · Departure 10:30",
    tr: "Gündüz Turu: Biniş 10:00 · Kalkış 10:30",
    de: "Tageskreuzfahrt: Boarding 10:00 · Abfahrt 10:30",
    es: "Crucero Diurno: Embarque 10:00 · Salida 10:30",
    ru: "Дневной круиз: Посадка 10:00 · Отправление 10:30",
    ar: "رحلة نهارية: الصعود 10:00 · المغادرة 10:30",
    fa: "تور روزانه: سوار شدن ۱۰:۰۰ · حرکت ۱۰:۳۰", fr: "Croisière diurne : embarquement 10h00 · départ 10h30", it: "Crociera Diurna: Imbarco 10:00 · Partenza 10:30", zh: "白天游船:10:00登船 · 10:30启航", id: "Pelayaran Siang: Naik kapal 10:00 · Keberangkatan 10:30", ms: "Pelayaran Siang: Menaiki 10:00 · Bertolak 10:30", pl: "Dzienny rejs: wejście 10:00 · wypłynięcie 10:30", bg: "Дневен круиз: качване 10:00 · отплаване 10:30", ro: "Croazieră de Zi: Îmbarcare 10:00 · Plecare 10:30"
  },
  "boarding.time.sunset": {
    en: "Sunset Cruise: Boarding 17:00 · Departure 17:15",
    tr: "Gün Batımı Turu: Biniş 17:00 · Kalkış 17:15",
    de: "Sonnenuntergangskreuzfahrt: Boarding 17:00 · Abfahrt 17:15",
    es: "Crucero al Atardecer: Embarque 17:00 · Salida 17:15",
    ru: "Круиз на закате: Посадка 17:00 · Отправление 17:15",
    ar: "رحلة غروب الشمس: الصعود 17:00 · المغادرة 17:15",
    fa: "تور غروب: سوار شدن ۱۷:۰۰ · حرکت ۱۷:۱۵", fr: "Croisière coucher de soleil : embarquement 17h00 · départ 17h15", it: "Crociera al Tramonto: Imbarco 17:00 · Partenza 17:15", zh: "日落游船:17:00登船 · 17:15启航", id: "Pelayaran Matahari Terbenam: Naik kapal 17:00 · Keberangkatan 17:15", ms: "Pelayaran Matahari Terbenam: Menaiki 17:00 · Bertolak 17:15", pl: "Rejs o zachodzie słońca: wejście 17:00 · wypłynięcie 17:15", bg: "Залезен круиз: качване 17:00 · отплаване 17:15", ro: "Croazieră la Apus: Îmbarcare 17:00 · Plecare 17:15"
  },
  "boarding.time.night": {
    en: "Night Cruise: Boarding 20:00 · Departure 21:00",
    tr: "Gece Turu: Biniş 20:00 · Kalkış 21:00",
    de: "Nachtkreuzfahrt: Boarding 20:00 · Abfahrt 21:00",
    es: "Crucero Nocturno: Embarque 20:00 · Salida 21:00",
    ru: "Ночной круиз: Посадка 20:00 · Отправление 21:00",
    ar: "رحلة ليلية: الصعود 20:00 · المغادرة 21:00",
    fa: "تور شبانه: سوار شدن ۲۰:۰۰ · حرکت ۲۱:۰۰", fr: "Croisière nocturne : embarquement 20h00 · départ 21h00", it: "Crociera Notturna: Imbarco 20:00 · Partenza 21:00", zh: "夜间游船:20:00登船 · 21:00启航", id: "Pelayaran Malam: Naik kapal 20:00 · Keberangkatan 21:00", ms: "Pelayaran Malam: Menaiki 20:00 · Bertolak 21:00", pl: "Nocny rejs: wejście 20:00 · wypłynięcie 21:00", bg: "Нощен круиз: качване 20:00 · отплаване 21:00", ro: "Croazieră de Noapte: Îmbarcare 20:00 · Plecare 21:00"
  },
  "boarding.time.pier": {
    en: "Kabataş Pier",
    tr: "Kabataş İskelesi",
    de: "Kabataş Pier",
    es: "Muelle de Kabataş",
    ru: "Причал Кабаташ",
    ar: "رصيف كاباتاش",
    fa: "اسکله کاباتاش", fr: "Embarcadère de Kabataş", it: "Molo di Kabataş", zh: "卡巴塔什码头", id: "Dermaga Kabataş", ms: "Jeti Kabataş", pl: "Przystań Kabataş", bg: "Пристанище Кабаташ", ro: "Debarcaderul Kabataș"
  },
  "arrival.time.day": {
    en: "Day Cruise: Return ~12:30",
    tr: "Gündüz Turu: Dönüş ~12:30",
    de: "Tageskreuzfahrt: Rückkehr ~12:30",
    es: "Crucero Diurno: Regreso ~12:30",
    ru: "Дневной круиз: Возвращение ~12:30",
    ar: "رحلة نهارية: العودة ~12:30",
    fa: "تور روزانه: بازگشت حدود ۱۲:۳۰", fr: "Croisière diurne : retour ~12h30", it: "Crociera Diurna: Ritorno ~12:30", zh: "白天游船:约12:30返航", id: "Pelayaran Siang: Kembali ~12:30", ms: "Pelayaran Siang: Kembali ~12:30", pl: "Dzienny rejs: powrót ~12:30", bg: "Дневен круиз: завръщане ~12:30", ro: "Croazieră de Zi: Întoarcere ~12:30"
  },
  "arrival.time.sunset": {
    en: "Sunset Cruise: Return ~19:30",
    tr: "Gün Batımı Turu: Dönüş ~19:30",
    de: "Sonnenuntergangskreuzfahrt: Rückkehr ~19:30",
    es: "Crucero al Atardecer: Regreso ~19:30",
    ru: "Круиз на закате: Возвращение ~19:30",
    ar: "رحلة غروب الشمس: العودة ~19:30",
    fa: "تور غروب: بازگشت حدود ۱۹:۳۰", fr: "Croisière coucher de soleil : retour ~19h30", it: "Crociera al Tramonto: Ritorno ~19:30", zh: "日落游船:约19:30返航", id: "Pelayaran Matahari Terbenam: Kembali ~19:30", ms: "Pelayaran Matahari Terbenam: Kembali ~19:30", pl: "Rejs o zachodzie słońca: powrót ~19:30", bg: "Залезен круиз: завръщане ~19:30", ro: "Croazieră la Apus: Întoarcere ~19:30"
  },
  "arrival.time.night": {
    en: "Night Cruise: Return 23:30–00:00",
    tr: "Gece Turu: Dönüş 23:30–00:00",
    de: "Nachtkreuzfahrt: Rückkehr ~23:30",
    es: "Crucero Nocturno: Regreso ~23:30",
    ru: "Ночной круиз: Возвращение 23:30–00:00",
    ar: "رحلة ليلية: العودة ~23:30",
    fa: "تور شبانه: بازگشت ۲۳:۳۰–۰۰:۰۰", fr: "Croisière nocturne : retour 23h30–00h00", it: "Crociera Notturna: Ritorno 23:30–00:00", zh: "夜间游船:23:30–00:00返航", id: "Pelayaran Malam: Kembali 23:30–00:00", ms: "Pelayaran Malam: Kembali 23:30–00:00", pl: "Nocny rejs: powrót 23:30–00:00", bg: "Нощен круиз: завръщане 23:30–00:00", ro: "Croazieră de Noapte: Întoarcere 23:30–00:00"
  },
  "arrival.time.pier": {
    en: "Kabataş Pier",
    tr: "Kabataş İskelesi",
    de: "Kabataş Pier",
    es: "Muelle de Kabataş",
    ru: "Причал Кабаташ",
    ar: "رصيف كاباتاش",
    fa: "اسکله کاباتاش", fr: "Embarcadère de Kabataş", it: "Molo di Kabataş", zh: "卡巴塔什码头", id: "Dermaga Kabataş", ms: "Jeti Kabataş", pl: "Przystań Kabataş", bg: "Пристанище Кабаташ", ro: "Debarcaderul Kabataș"
  },

  // ========== WIZARD (Mobile Booking Panel) ==========
  "wizard.step1of4": {
    en: "Step 1 of 4",
    tr: "Adım 1 / 4",
    de: "Schritt 1 von 4",
    es: "Paso 1 de 4",
    ru: "Шаг 1 из 4",
    ar: "الخطوة 1 من 4",
    fa: "مرحله ۱ از ۴", fr: "Étape 1 sur 4", it: "Passo 1 di 4", zh: "第1步(共4步)", id: "Langkah 1 dari 4", ms: "Langkah 1 daripada 4", pl: "Krok 1 z 4", bg: "Стъпка 1 от 4", ro: "Pasul 1 din 4"
  },
  "wizard.step2of4": {
    en: "Step 2 of 4",
    tr: "Adım 2 / 4",
    de: "Schritt 2 von 4",
    es: "Paso 2 de 4",
    ru: "Шаг 2 из 4",
    ar: "الخطوة 2 من 4",
    fa: "مرحله ۲ از ۴", fr: "Étape 2 sur 4", it: "Passo 2 di 4", zh: "第2步(共4步)", id: "Langkah 2 dari 4", ms: "Langkah 2 daripada 4", pl: "Krok 2 z 4", bg: "Стъпка 2 от 4", ro: "Pasul 2 din 4"
  },
  "wizard.step3of4": {
    en: "Step 3 of 4",
    tr: "Adım 3 / 4",
    de: "Schritt 3 von 4",
    es: "Paso 3 de 4",
    ru: "Шаг 3 из 4",
    ar: "الخطوة 3 من 4",
    fa: "مرحله ۳ از ۴", fr: "Étape 3 sur 4", it: "Passo 3 di 4", zh: "第3步(共4步)", id: "Langkah 3 dari 4", ms: "Langkah 3 daripada 4", pl: "Krok 3 z 4", bg: "Стъпка 3 от 4", ro: "Pasul 3 din 4"
  },
  "wizard.step4of4": {
    en: "Step 4 of 4",
    tr: "Adım 4 / 4",
    de: "Schritt 4 von 4",
    es: "Paso 4 de 4",
    ru: "Шаг 4 из 4",
    ar: "الخطوة 4 من 4",
    fa: "مرحله ۴ از ۴", fr: "Étape 4 sur 4", it: "Passo 4 di 4", zh: "第4步(共4步)", id: "Langkah 4 dari 4", ms: "Langkah 4 daripada 4", pl: "Krok 4 z 4", bg: "Стъпка 4 от 4", ro: "Pasul 4 din 4"
  },
  "wizard.standard": {
    en: "Standard",
    tr: "Standart",
    de: "Standard",
    es: "Estándar",
    ru: "Стандарт",
    ar: "قياسي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard"
  },
  "wizard.vip": {
    en: "VIP",
    tr: "VIP",
    de: "VIP",
    es: "VIP",
    ru: "VIP",
    ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP"
  },
  "wizard.language": {
    en: "Preferred Language",
    tr: "Tercih Edilen Dil",
    de: "Bevorzugte Sprache",
    es: "Idioma preferido",
    ru: "Предпочитаемый язык",
    ar: "اللغة المفضلة",
    fa: "زبان ترجیحی", fr: "Langue préférée", it: "Lingua preferita", zh: "首选语言", id: "Bahasa Pilihan", ms: "Bahasa Pilihan", pl: "Preferowany język", bg: "Предпочитан език", ro: "Limba Preferată"
  },
  "wizard.back": {
    en: "Back",
    tr: "Geri",
    de: "Zurück",
    es: "Atrás",
    ru: "Назад",
    ar: "رجوع",
    fa: "بازگشت", fr: "Retour", it: "Indietro", zh: "返回", id: "Kembali", ms: "Kembali", pl: "Wstecz", bg: "Назад", ro: "Înapoi"
  },
  "wizard.next": {
    en: "Next",
    tr: "İleri",
    de: "Weiter",
    es: "Siguiente",
    ru: "Далее",
    ar: "التالي",
    fa: "بعدی", fr: "Suivant", it: "Avanti", zh: "下一步", id: "Berikutnya", ms: "Seterusnya", pl: "Dalej", bg: "Напред", ro: "Următorul"
  },
  "wizard.softDrinks": {
    en: "Soft Drinks",
    tr: "Alkolsüz",
    de: "Alkoholfrei",
    es: "Sin alcohol",
    ru: "Безалкогольные",
    ar: "مشروبات غازية",
    fa: "نوشیدنی‌های بدون‌الکل", fr: "Boissons non alcoolisées", it: "Bevande analcoliche", zh: "软饮", id: "Minuman Ringan", ms: "Minuman Ringan", pl: "Napoje bezalkoholowe", bg: "Безалкохолни напитки", ro: "Băuturi Răcoritoare"
  },
  "wizard.glass2": {
    en: "2 Glasses +€{p.alcohol2}",
    tr: "2 Kadeh +€{p.alcohol2}",
    de: "2 Gläser +7 €",
    es: "2 copas +7 €",
    ru: "2 бокала +7 €",
    ar: "كأسان +٧€",
    fa: "۲ لیوان +€{p.alcohol2}", fr: "2 verres +€{p.alcohol2}", it: "2 bicchieri +€{p.alcohol2}", zh: "2杯酒+€{p.alcohol2}", id: "2 Gelas +€{p.alcohol2}", ms: "2 Gelas +€{p.alcohol2}", pl: "2 kieliszki +€{p.alcohol2}", bg: "2 чаши +€{p.alcohol2}", ro: "2 Pahare +€{p.alcohol2}"
  },
  "wizard.unlimited": {
    en: "Unlimited +€{p.unlimited}",
    tr: "Sınırsız +€{p.unlimited}",
    de: "Unbegrenzt +15 €",
    es: "Ilimitado +15 €",
    ru: "Безлимит +15 €",
    ar: "غير محدود +١٥€",
    fa: "نامحدود +€{p.unlimited}", fr: "Illimité +€{p.unlimited}", it: "Illimitato +€{p.unlimited}", zh: "无限畅饮+€{p.unlimited}", id: "Tanpa Batas +€{p.unlimited}", ms: "Tanpa Had +€{p.unlimited}", pl: "Nieograniczone +€{p.unlimited}", bg: "Неограничено +€{p.unlimited}", ro: "Nelimitat +€{p.unlimited}"
  },
  "wizard.softDesc": {
    en: "Unlimited tea, coffee, water, cola & juice",
    tr: "Sınırsız çay, kahve, su, kola ve meyve suyu",
    de: "Unbegrenzt Tee, Kaffee, Wasser, Cola & Saft",
    es: "Té, café, agua, cola y zumo ilimitados",
    ru: "Безлимитный чай, кофе, вода, кола и сок",
    ar: "شاي وقهوة وماء وكولا وعصير بلا حدود",
    fa: "چای، قهوه، آب، نوشابه و آب‌میوه نامحدود", fr: "Thé, café, eau, cola & jus à volonté", it: "Tè, caffè, acqua, cola e succhi illimitati", zh: "无限畅饮茶、咖啡、水、可乐与果汁", id: "Teh, kopi, air, cola & jus tanpa batas", ms: "Teh, kopi, air, kola & jus tanpa had", pl: "Nieograniczona herbata, kawa, woda, cola i sok", bg: "Неограничен чай, кафе, вода, кола и сок", ro: "Ceai, cafea, apă, cola și suc nelimitate"
  },
  "wizard.glass2Desc": {
    en: "Choose from local wine, beer, rakı, vodka, or gin",
    tr: "Yerli şarap, bira, rakı, vodka veya cin seçin",
    de: "Auswahl aus lokalem Wein, Bier, Rakı, Wodka oder Gin",
    es: "Elija entre vino local, cerveza, rakı, vodka o ginebra",
    ru: "На выбор: местное вино, пиво, ракы, водка или джин",
    ar: "اختر من النبيذ المحلي أو البيرة أو العرق أو الفودكا أو الجن",
    fa: "از بین شراب، آبجو، راکی، ودکا یا جین داخلی انتخاب کنید", fr: "Au choix : vin local, bière, rakı, vodka ou gin", it: "Scelga tra vino locale, birra, rakı, vodka o gin", zh: "可选本地葡萄酒、啤酒、拉克酒、伏特加或金酒", id: "Pilih dari anggur lokal, bir, rakı, vodka, atau gin", ms: "Pilih daripada wain tempatan, bir, rakı, vodka atau gin", pl: "Wybór lokalnego wina, piwa, rakı, wódki lub ginu", bg: "Избор от местно вино, бира, ракъ, водка или джин", ro: "Alegeți din vin local, bere, rachiu, vodcă sau gin"
  },
  "wizard.unlimitedDesc": {
    en: "Unlimited local wine, beer, rakı, vodka, gin all night",
    tr: "Gece boyunca sınırsız yerli şarap, bira, rakı, vodka, cin",
    de: "Die ganze Nacht unbegrenzt lokaler Wein, Bier, Rakı, Wodka, Gin",
    es: "Vino local, cerveza, rakı, vodka y ginebra ilimitados toda la noche",
    ru: "Безлимитное местное вино, пиво, ракы, водка, джин всю ночь",
    ar: "نبيذ محلي وبيرة وعرق وفودكا وجن بلا حدود طوال الليل",
    fa: "شراب، آبجو، راکی، ودکا و جین داخلی نامحدود در تمام شب", fr: "Vin local, bière, rakı, vodka, gin à volonté toute la soirée", it: "Vino locale, birra, rakı, vodka, gin illimitati tutta la notte", zh: "整晚无限畅饮本地葡萄酒、啤酒、拉克酒、伏特加、金酒", id: "Anggur lokal tanpa batas, bir, rakı, vodka, gin sepanjang malam", ms: "Wain tempatan tanpa had, bir, rakı, vodka, gin sepanjang malam", pl: "Nieograniczone lokalne wino, piwo, rakı, wódka, gin całą noc", bg: "Неограничено местно вино, бира, ракъ, водка, джин цяла нощ", ro: "Vin local, bere, rachiu, vodcă, gin nelimitate toată noaptea"
  },
  "wizard.transferLabel": {
    en: "Hotel Transfer",
    tr: "Otel Transferi",
    de: "Hoteltransfer",
    es: "Traslado al hotel",
    ru: "Трансфер из отеля",
    ar: "نقل من الفندق",
    fa: "ترانسفر هتل", fr: "Transfert d'hôtel", it: "Transfer dall'hotel", zh: "酒店接送", id: "Antar-jemput Hotel", ms: "Pemindahan Hotel", pl: "Transfer z hotelu", bg: "Хотелски трансфер", ro: "Transfer de la Hotel"
  },
  "wizard.no": {
    en: "No",
    tr: "Hayır",
    de: "Nein",
    es: "No",
    ru: "Нет",
    ar: "لا",
    fa: "خیر", fr: "Non", it: "No", zh: "否", id: "Tidak", ms: "Tidak", pl: "Nie", bg: "Не", ro: "Nu"
  },
  "wizard.transferYes": {
    en: "Yes +€{p.transfer}/person",
    tr: "Evet +€{p.transfer}/kişi",
    de: "Ja +10 €/Person",
    es: "Sí +10 €/persona",
    ru: "Да +10 €/чел.",
    ar: "نعم +١٠€/شخص",
    fa: "بله +€{p.transfer}/نفر", fr: "Oui +€{p.transfer}/personne", it: "Sì +€{p.transfer}/persona", zh: "是 +€{p.transfer}／人", id: "Ya +€{p.transfer}/orang", ms: "Ya +€{p.transfer}/orang", pl: "Tak +€{p.transfer}/osobę", bg: "Да +€{p.transfer}/човек", ro: "Da +€{p.transfer}/persoană"
  },
  "wizard.transferChoose": {
    en: "Please choose a transfer option",
    tr: "Lütfen transfer seçeneğini belirleyin",
    de: "Bitte wählen Sie eine Transferoption",
    es: "Por favor selecciona una opción de traslado",
    ru: "Пожалуйста, выберите вариант трансфера",
    ar: "يرجى اختيار خيار النقل",
    fa: "لطفاً یک گزینه ترانسفر انتخاب کنید", fr: "Veuillez choisir une option de transfert", it: "Per favore scelga un'opzione di transfer", zh: "请选择接送选项", id: "Silakan pilih opsi antar-jemput", ms: "Sila pilih pilihan pemindahan", pl: "Prosimy wybrać opcję transferu", bg: "Моля, изберете опция за трансфер", ro: "Vă rugăm să alegeți o opțiune de transfer"
  },
  "wizard.transferDesc": {
    en: "Pickup & drop-off from your hotel",
    tr: "Otelinizden alım ve bırakım",
    de: "Abholung & Rückfahrt von Ihrem Hotel",
    es: "Recogida y regreso desde su hotel",
    ru: "Встреча и доставка от вашего отеля",
    ar: "التوصيل من وإلى فندقك",
    fa: "رفت و برگشت از هتل شما", fr: "Prise en charge & dépose depuis votre hôtel", it: "Prelievo e riconsegna dal Suo hotel", zh: "从您的酒店接送", id: "Penjemputan & pengantaran dari hotel Anda", ms: "Ambil & hantar dari hotel anda", pl: "Odbiór i odwiezienie z hotelu", bg: "Вземане и връщане от хотела", ro: "Preluare și ducere de la hotelul dumneavoastră"
  },
  "wizard.romanticLabel": {
    en: "Romantic Table",
    tr: "Romantik Masa",
    de: "Romantischer Tisch",
    es: "Mesa romántica",
    ru: "Романтический столик",
    ar: "طاولة رومانسية",
    fa: "میز رمانتیک", fr: "Table romantique", it: "Tavolo romantico", zh: "浪漫餐桌", id: "Meja Romantis", ms: "Meja Romantik", pl: "Stół romantyczny", bg: "Романтична маса", ro: "Masă Romantică"
  },
  "wizard.romanticYes": {
    en: "Yes +€{p.romantic}",
    tr: "Evet +€{p.romantic}",
    de: "Ja +15 €",
    es: "Sí +15 €",
    ru: "Да +15 €",
    ar: "نعم +١٥€",
    fa: "بله +€{p.romantic}", fr: "Oui +€{p.romantic}", it: "Sì +€{p.romantic}", zh: "是 +€{p.romantic}", id: "Ya +€{p.romantic}", ms: "Ya +€{p.romantic}", pl: "Tak +€{p.romantic}", bg: "Да +€{p.romantic}", ro: "Da +€{p.romantic}"
  },
  "wizard.romanticDesc": {
    en: "Candles, flowers & special setup",
    tr: "Mumlar, çiçekler ve özel düzenleme",
    de: "Kerzen, Blumen & besondere Dekoration",
    es: "Velas, flores y decoración especial",
    ru: "Свечи, цветы и особое оформление",
    ar: "شموع وزهور وإعداد خاص",
    fa: "شمع، گل و چیدمان ویژه", fr: "Bougies, fleurs & décoration spéciale", it: "Candele, fiori e allestimento speciale", zh: "蜡烛、鲜花与特别布置", id: "Lilin, bunga & pengaturan khusus", ms: "Lilin, bunga & susunan istimewa", pl: "Świece, kwiaty i specjalna aranżacja", bg: "Свещи, цветя и специална украса", ro: "Lumânări, flori și aranjament special"
  },
  "wizard.summaryTitle": {
    en: "Booking Summary",
    tr: "Rezervasyon Özeti",
    de: "Buchungsübersicht",
    es: "Resumen de la reserva",
    ru: "Сводка бронирования",
    ar: "ملخص الحجز",
    fa: "خلاصه رزرو", fr: "Récapitulatif", it: "Riepilogo della prenotazione", zh: "预订摘要", id: "Ringkasan Pemesanan", ms: "Ringkasan Tempahan", pl: "Podsumowanie rezerwacji", bg: "Обобщение на резервацията", ro: "Sumar Rezervare"
  },
  "wizard.checkAvail": {
    en: "Check Availability",
    tr: "Müsaitlik Kontrolü",
    de: "Verfügbarkeit prüfen",
    es: "Consultar disponibilidad",
    ru: "Проверить наличие",
    ar: "تحقق من التوفر",
    fa: "بررسی ظرفیت", fr: "Vérifier la disponibilité", it: "Verifica disponibilità", zh: "查询余位", id: "Cek Ketersediaan", ms: "Semak Kekosongan", pl: "Sprawdź dostępność", bg: "Проверете наличността", ro: "Verificați Disponibilitatea"
  },
  "wizard.confirmMsg": {
    en: "We'll confirm instantly",
    tr: "Anında onay vereceğiz",
    de: "Wir bestätigen sofort",
    es: "Confirmaremos al instante",
    ru: "Подтвердим мгновенно",
    ar: "سنؤكد فوراً",
    fa: "فوراً تأیید می‌کنیم", fr: "Nous confirmons instantanément", it: "Confermeremo all'istante", zh: "我们将即时确认", id: "Kami akan mengonfirmasi secara instan", ms: "Kami akan sahkan serta-merta", pl: "Potwierdzimy natychmiast", bg: "Ще потвърдим мигновено", ro: "Vom confirma instant"
  },
  "wizard.trust1": {
    en: "\u2713 Free cancellation 2hrs before",
    tr: "\u2713 2 saat öncesine kadar ücretsiz iptal",
    de: "\u2713 Kostenlose Stornierung bis 2 Std. vorher",
    es: "\u2713 Cancelación gratuita hasta 2 h antes",
    ru: "\u2713 Бесплатная отмена за 2 часа",
    ar: "\u2713 إلغاء مجاني قبل ساعتين",
    fa: "✓ لغو رایگان ۲ ساعت پیش", fr: "✓ Annulation gratuite 2h avant", it: "✓ Cancellazione gratuita 2 ore prima", zh: "✓ 开船前2小时免费取消", id: "✓ Pembatalan gratis 2 jam sebelumnya", ms: "✓ Pembatalan percuma 2 jam sebelum", pl: "✓ Bezpłatna anulacja 2h przed", bg: "✓ Безплатна отмяна 2 ч. преди", ro: "✓ Anulare gratuită cu 2 ore înainte"
  },
  "wizard.trust2": {
    en: "\u2713 No prepayment required",
    tr: "\u2713 Ön ödeme gerekmiyor",
    de: "\u2713 Keine Vorauszahlung nötig",
    es: "\u2713 Sin pago anticipado",
    ru: "\u2713 Предоплата не требуется",
    ar: "\u2713 لا يلزم دفع مسبق",
    fa: "✓ بدون نیاز به پیش‌پرداخت", fr: "✓ Aucun prépaiement requis", it: "✓ Nessun anticipo richiesto", zh: "✓ 无需预付", id: "✓ Tanpa pembayaran di muka", ms: "✓ Tiada bayaran pendahuluan diperlukan", pl: "✓ Bez przedpłaty", bg: "✓ Не се изисква предплащане", ro: "✓ Fără plată în avans"
  },
  "wizard.trust3": {
    en: "\u2713 Pay on the boat",
    tr: "\u2713 Teknede ödeyin",
    de: "\u2713 Bezahlung an Bord",
    es: "\u2713 Pague en el barco",
    ru: "\u2713 Оплата на борту",
    ar: "\u2713 ادفع على متن القارب",
    fa: "✓ پرداخت روی کشتی", fr: "✓ Paiement à bord", it: "✓ Pagamento a bordo", zh: "✓ 船上付款", id: "✓ Bayar di kapal", ms: "✓ Bayar di atas bot", pl: "✓ Płatność na pokładzie", bg: "✓ Плащане на борда", ro: "✓ Plata pe vapor"
  },

  // ========== WIZARD — NEW KEYS ==========
  "wizard.drinkNote": {
    en: "Choose a drink option for each adult guest",
    tr: "Her yetişkin misafir için bir içecek seçeneği belirleyin",
    de: "Wählen Sie eine Getränkeoption für jeden erwachsenen Gast",
    es: "Elija una opción de bebida para cada adulto",
    ru: "Выберите вариант напитков для каждого взрослого гостя",
    ar: "اختر خيار مشروب لكل ضيف بالغ",
    fa: "برای هر مهمان بزرگسال یک گزینه نوشیدنی انتخاب کنید", fr: "Choisissez une boisson pour chaque adulte", it: "Scelga un'opzione bevande per ogni ospite adulto", zh: "为每位成人宾客选择饮品", id: "Pilih opsi minuman untuk setiap tamu dewasa", ms: "Pilih pilihan minuman untuk setiap tetamu dewasa", pl: "Wybierz opcję napojów dla każdego dorosłego gościa", bg: "Изберете опция за напитки за всеки възрастен гост", ro: "Alegeți o opțiune de băutură pentru fiecare adult"
  },
  "wizard.drinkWarning": {
    en: "Please assign drinks for all adults before continuing",
    tr: "Devam etmeden önce tüm yetişkinlere içecek atayın",
    de: "Bitte weisen Sie allen Erwachsenen Getränke zu, bevor Sie fortfahren",
    es: "Asigne bebidas a todos los adultos antes de continuar",
    ru: "Назначьте напитки всем взрослым перед продолжением",
    ar: "يرجى تحديد المشروبات لجميع البالغين قبل المتابعة",
    fa: "لطفاً پیش از ادامه برای همه بزرگسالان نوشیدنی انتخاب کنید", fr: "Veuillez attribuer une boisson à chaque adulte avant de continuer", it: "Per favore assegni le bevande a tutti gli adulti prima di continuare", zh: "请先为所有成人选择饮品再继续", id: "Silakan tetapkan minuman untuk semua orang dewasa sebelum melanjutkan", ms: "Sila tetapkan minuman untuk semua dewasa sebelum meneruskan", pl: "Prosimy przypisać napoje dla wszystkich dorosłych przed kontynuowaniem", bg: "Моля, задайте напитки за всички възрастни, преди да продължите", ro: "Vă rugăm să atribuiți băuturi pentru toți adulții înainte de a continua"
  },
  "wizard.transferWarning": {
    en: "Please choose a transfer option before continuing",
    tr: "Devam etmeden önce transfer seçeneğini belirleyin",
    de: "Bitte wählen Sie eine Transferoption, bevor Sie fortfahren",
    es: "Seleccione una opción de traslado antes de continuar",
    ru: "Выберите вариант трансфера перед продолжением",
    ar: "يرجى اختيار خيار النقل قبل المتابعة",
    fa: "لطفاً پیش از ادامه یک گزینه ترانسفر انتخاب کنید", fr: "Veuillez choisir une option de transfert avant de continuer", it: "Per favore scelga un'opzione di transfer prima di continuare", zh: "请先选择接送选项再继续", id: "Silakan pilih opsi antar-jemput sebelum melanjutkan", ms: "Sila pilih pilihan pemindahan sebelum meneruskan", pl: "Prosimy wybrać opcję transferu przed kontynuowaniem", bg: "Моля, изберете опция за трансфер, преди да продължите", ro: "Vă rugăm să alegeți o opțiune de transfer înainte de a continua"
  },
  "wizard.packageWarning": {
    en: "Please choose a package before continuing",
    tr: "Devam etmeden önce paketi seçin",
    de: "Bitte wählen Sie ein Paket, bevor Sie fortfahren",
    es: "Seleccione un paquete antes de continuar",
    ru: "Выберите пакет перед продолжением",
    ar: "يرجى اختيار باقة قبل المتابعة",
    fa: "لطفاً پیش از ادامه یک پکیج انتخاب کنید", fr: "Veuillez choisir un forfait avant de continuer", it: "Per favore scelga un pacchetto prima di continuare", zh: "请先选择套餐再继续", id: "Silakan pilih paket sebelum melanjutkan", ms: "Sila pilih pakej sebelum meneruskan", pl: "Prosimy wybrać pakiet przed kontynuowaniem", bg: "Моля, изберете пакет, преди да продължите", ro: "Vă rugăm să alegeți un pachet înainte de a continua"
  },
  "wizard.packageChoose": {
    en: "Please choose a package",
    tr: "Lütfen paketi seçin",
    de: "Bitte wählen Sie ein Paket",
    es: "Por favor seleccione un paquete",
    ru: "Пожалуйста, выберите пакет",
    ar: "يرجى اختيار باقة",
    fa: "لطفاً یک پکیج انتخاب کنید", fr: "Veuillez choisir un forfait", it: "Per favore scelga un pacchetto", zh: "请选择套餐", id: "Silakan pilih paket", ms: "Sila pilih pakej", pl: "Prosimy wybrać pakiet", bg: "Моля, изберете пакет", ro: "Vă rugăm să alegeți un pachet"
  },
  "wizard.adultsWarning": {
    en: "Please enter at least one adult before continuing",
    tr: "Devam etmeden önce en az bir yetişkin seçin",
    de: "Bitte wählen Sie mindestens einen Erwachsenen, bevor Sie fortfahren",
    es: "Seleccione al menos un adulto antes de continuar",
    ru: "Укажите хотя бы одного взрослого перед продолжением",
    ar: "يرجى إدخال بالغ واحد على الأقل قبل المتابعة",
    fa: "لطفاً پیش از ادامه دست‌کم یک بزرگسال وارد کنید", fr: "Veuillez indiquer au moins un adulte avant de continuer", it: "Per favore inserisca almeno un adulto prima di continuare", zh: "请至少填入一位成人再继续", id: "Silakan masukkan minimal satu dewasa sebelum melanjutkan", ms: "Sila masukkan sekurang-kurangnya seorang dewasa sebelum meneruskan", pl: "Prosimy wprowadzić co najmniej jednego dorosłego przed kontynuowaniem", bg: "Моля, въведете поне един възрастен, преди да продължите", ro: "Vă rugăm să introduceți cel puțin un adult înainte de a continua"
  },
  "wizard.adultsChoose": {
    en: "Please enter at least one adult",
    tr: "Lütfen en az bir yetişkin seçin",
    de: "Bitte wählen Sie mindestens einen Erwachsenen",
    es: "Por favor seleccione al menos un adulto",
    ru: "Пожалуйста, укажите хотя бы одного взрослого",
    ar: "يرجى إدخال بالغ واحد على الأقل",
    fa: "لطفاً دست‌کم یک بزرگسال وارد کنید", fr: "Veuillez indiquer au moins un adulte", it: "Per favore inserisca almeno un adulto", zh: "请至少填入一位成人", id: "Silakan masukkan minimal satu dewasa", ms: "Sila masukkan sekurang-kurangnya seorang dewasa", pl: "Prosimy wprowadzić co najmniej jednego dorosłego", bg: "Моля, въведете поне един възрастен", ro: "Vă rugăm să introduceți cel puțin un adult"
  },
  "wizard.childAgeWarning": {
    en: "Please select age for each child before continuing",
    tr: "Devam etmeden önce her çocuk için yaş seçin",
    de: "Bitte wählen Sie für jedes Kind ein Alter, bevor Sie fortfahren",
    es: "Seleccione la edad de cada niño antes de continuar",
    ru: "Выберите возраст для каждого ребёнка перед продолжением",
    ar: "يرجى اختيار عمر لكل طفل قبل المتابعة",
    fa: "لطفاً پیش از ادامه برای هر کودک سن انتخاب کنید", fr: "Veuillez sélectionner l'âge de chaque enfant avant de continuer", it: "Per favore selezioni l'età di ogni bambino prima di continuare", zh: "请先为每位儿童选择年龄再继续", id: "Silakan pilih usia untuk setiap anak sebelum melanjutkan", ms: "Sila pilih umur untuk setiap kanak-kanak sebelum meneruskan", pl: "Prosimy wybrać wiek dla każdego dziecka przed kontynuowaniem", bg: "Моля, изберете възраст за всяко дете, преди да продължите", ro: "Vă rugăm să selectați vârsta pentru fiecare copil înainte de a continua"
  },
  "wizard.childAgeChoose": {
    en: "Please select age for each child",
    tr: "Lütfen her çocuk için yaş seçin",
    de: "Bitte wählen Sie für jedes Kind ein Alter",
    es: "Seleccione la edad de cada niño",
    ru: "Выберите возраст для каждого ребёнка",
    ar: "يرجى اختيار عمر لكل طفل",
    fa: "لطفاً برای هر کودک سن انتخاب کنید", fr: "Veuillez sélectionner l'âge de chaque enfant", it: "Per favore selezioni l'età di ogni bambino", zh: "请为每位儿童选择年龄", id: "Silakan pilih usia untuk setiap anak", ms: "Sila pilih umur untuk setiap kanak-kanak", pl: "Prosimy wybrać wiek dla każdego dziecka", bg: "Моля, изберете възраст за всяко дете", ro: "Vă rugăm să selectați vârsta pentru fiecare copil"
  },
  "wizard.selectAge": {
    en: "Select age",
    tr: "Yaş seçin",
    de: "Alter wählen",
    es: "Elegir edad",
    ru: "Выберите возраст",
    ar: "اختر العمر",
    fa: "انتخاب سن", fr: "Sélectionner l'âge", it: "Selezioni l'età", zh: "选择年龄", id: "Pilih usia", ms: "Pilih umur", pl: "Wybierz wiek", bg: "Изберете възраст", ro: "Selectați vârsta"
  },
  "wizard.viewPackages": {
    en: "Click to review packages",
    tr: "Paketleri incelemek için tıklayın",
    de: "Pakete ansehen",
    es: "Ver detalles de los paquetes",
    ru: "Посмотреть пакеты",
    ar: "اضغط لمعاينة الباقات",
    fa: "برای مرور پکیج‌ها کلیک کنید", fr: "Cliquez pour revoir les forfaits", it: "Clicchi per rivedere i pacchetti", zh: "点击查看套餐", id: "Klik untuk meninjau paket", ms: "Klik untuk semak pakej", pl: "Kliknij, aby sprawdzić pakiety", bg: "Кликнете, за да прегледате пакетите", ro: "Faceți clic pentru a revedea pachetele"
  },
  "wizard.glass2Label": {
    en: "2 Glasses of Alcohol",
    tr: "2 Kadeh Alkol",
    de: "2 Gläser Alkohol",
    es: "2 copas de alcohol",
    ru: "2 бокала алкоголя",
    ar: "كأسان من الكحول",
    fa: "۲ لیوان الکل", fr: "2 verres d'alcool", it: "2 bicchieri di alcol", zh: "2杯酒", id: "2 Gelas Alkohol", ms: "2 Gelas Alkohol", pl: "2 kieliszki alkoholu", bg: "2 чаши алкохол", ro: "2 Pahare de Alcool"
  },
  "wizard.glass2Note": {
    en: "+€{p.alcohol2}/person · Wine, beer, rakı, vodka, or gin",
    tr: "+€{p.alcohol2}/kişi · Şarap, bira, rakı, vodka veya cin",
    de: "+15 €/Person · Wein, Bier, Rakı, Wodka oder Gin",
    es: "+15 €/persona · Vino, cerveza, rakı, vodka o ginebra",
    ru: "+15 €/чел. · Вино, пиво, ракы, водка или джин",
    ar: "+١٥€/شخص · نبيذ أو بيرة أو عرق أو فودكا أو جن",
    fa: "+€{p.alcohol2}/نفر · شراب، آبجو، راکی، ودکا یا جین", fr: "+€{p.alcohol2}/personne · vin, bière, rakı, vodka ou gin", it: "+€{p.alcohol2}/persona · Vino, birra, rakı, vodka o gin", zh: "+€{p.alcohol2}／人 · 葡萄酒、啤酒、拉克酒、伏特加或金酒", id: "+€{p.alcohol2}/orang · Anggur, bir, rakı, vodka, atau gin", ms: "+€{p.alcohol2}/orang · Wain, bir, rakı, vodka atau gin", pl: "+€{p.alcohol2}/osobę · Wino, piwo, rakı, wódka lub gin", bg: "+€{p.alcohol2}/човек · вино, бира, ракъ, водка или джин", ro: "+€{p.alcohol2}/persoană · Vin, bere, rachiu, vodcă sau gin"
  },
  "wizard.unlimitedLabel": {
    en: "Unlimited Alcohol",
    tr: "Sınırsız Alkol",
    de: "Unbegrenzter Alkohol",
    es: "Alcohol ilimitado",
    ru: "Безлимитный алкоголь",
    ar: "كحول غير محدود",
    fa: "الکل نامحدود", fr: "Alcool illimité", it: "Alcol illimitato", zh: "无限畅饮酒水", id: "Alkohol Tanpa Batas", ms: "Alkohol Tanpa Had", pl: "Nieograniczony alkohol", bg: "Неограничен алкохол", ro: "Alcool Nelimitat"
  },
  "wizard.unlimitedNote": {
    en: "+€{p.unlimited}/person · Wine, beer, rakı, vodka, gin all night",
    tr: "+€{p.unlimited}/kişi · Gece boyunca şarap, bira, rakı, vodka, cin",
    de: "+30 €/Person · Wein, Bier, Rakı, Wodka, Gin die ganze Nacht",
    es: "+30 €/persona · Vino, cerveza, rakı, vodka, ginebra toda la noche",
    ru: "+30 €/чел. · Вино, пиво, ракы, водка, джин всю ночь",
    ar: "+٣٠€/شخص · نبيذ وبيرة وعرق وفودكا وجن طوال الليل",
    fa: "+€{p.unlimited}/نفر · شراب، آبجو، راکی، ودکا و جین در تمام شب", fr: "+€{p.unlimited}/personne · vin, bière, rakı, vodka, gin toute la soirée", it: "+€{p.unlimited}/persona · Vino, birra, rakı, vodka, gin tutta la notte", zh: "+€{p.unlimited}／人 · 整晚无限畅饮葡萄酒、啤酒、拉克酒、伏特加、金酒", id: "+€{p.unlimited}/orang · Anggur, bir, rakı, vodka, gin sepanjang malam", ms: "+€{p.unlimited}/orang · Wain, bir, rakı, vodka, gin sepanjang malam", pl: "+€{p.unlimited}/osobę · Wino, piwo, rakı, wódka, gin całą noc", bg: "+€{p.unlimited}/човек · вино, бира, ракъ, водка, джин цяла нощ", ro: "+€{p.unlimited}/persoană · Vin, bere, rachiu, vodcă, gin toată noaptea"
  },
  "wizard.softNote": {
    en: "Included free",
    tr: "Ücretsiz dahil",
    de: "Kostenlos inklusive",
    es: "Incluido gratis",
    ru: "Включено бесплатно",
    ar: "مشمول مجانًا",
    fa: "به‌صورت رایگان شامل می‌شود", fr: "Inclus gratuitement", it: "Incluso gratis", zh: "免费包含", id: "Termasuk gratis", ms: "Termasuk percuma", pl: "Wliczone bezpłatnie", bg: "Включено безплатно", ro: "Inclus gratuit"
  },
  "wizard.drinkComplete": {
    en: "Drink selection complete",
    tr: "İçecek seçimi tamamlandı",
    de: "Getränkeauswahl abgeschlossen",
    es: "Selección de bebidas completa",
    ru: "Выбор напитков завершён",
    ar: "تم اختيار المشروبات",
    fa: "انتخاب نوشیدنی کامل شد", fr: "Choix des boissons terminé", it: "Selezione bevande completata", zh: "饮品选择完成", id: "Pemilihan minuman selesai", ms: "Pilihan minuman selesai", pl: "Wybór napojów zakończony", bg: "Изборът на напитки е завършен", ro: "Selectare băuturi completă"
  },
  "wizard.drinkRemaining": {
    en: "Please select drinks for all guests",
    tr: "Tüm misafirler için içecek seçin",
    de: "Bitte wählen Sie Getränke für alle Gäste",
    es: "Seleccione bebidas para todos los huéspedes",
    ru: "Выберите напитки для всех гостей",
    ar: "يرجى اختيار المشروبات لجميع الضيوف",
    fa: "لطفاً برای همه مهمانان نوشیدنی انتخاب کنید", fr: "Veuillez sélectionner les boissons pour tous les invités", it: "Per favore selezioni le bevande per tutti gli ospiti", zh: "请为所有宾客选择饮品", id: "Silakan pilih minuman untuk semua tamu", ms: "Sila pilih minuman untuk semua tetamu", pl: "Prosimy wybrać napoje dla wszystkich gości", bg: "Моля, изберете напитки за всички гости", ro: "Vă rugăm să selectați băuturi pentru toți oaspeții"
  },

  // ========== WIZARD — STEP 3 (Reservation Details) ==========
  "wizard.reservationDetails": {
    en: "Reservation Details",
    tr: "Rezervasyon Bilgileri",
    de: "Reservierungsdetails",
    es: "Detalles de la reserva",
    ru: "Данные бронирования",
    ar: "تفاصيل الحجز",
    fa: "جزئیات رزرو", fr: "Détails de la réservation", it: "Dettagli della prenotazione", zh: "预订详情", id: "Detail Reservasi", ms: "Butiran Tempahan", pl: "Szczegóły rezerwacji", bg: "Подробности за резервацията", ro: "Detalii Rezervare"
  },
  "wizard.guestName": {
    en: "Guest Name",
    tr: "Misafir Adı",
    de: "Gastname",
    es: "Nombre del huésped",
    ru: "Имя гостя",
    ar: "اسم الضيف",
    fa: "نام مهمان", fr: "Nom de l'invité", it: "Nome dell'ospite", zh: "宾客姓名", id: "Nama Tamu", ms: "Nama Tetamu", pl: "Imię i nazwisko gościa", bg: "Име на госта", ro: "Numele Oaspetelui"
  },
  "wizard.namePlaceholder": {
    en: "Full name",
    tr: "Ad Soyad",
    de: "Vollständiger Name",
    es: "Nombre completo",
    ru: "Полное имя",
    ar: "الاسم الكامل",
    fa: "نام کامل", fr: "Nom complet", it: "Nome e cognome", zh: "全名", id: "Nama lengkap", ms: "Nama penuh", pl: "Imię i nazwisko", bg: "Пълно име", ro: "Nume complet"
  },
  "wizard.phone": {
    en: "Phone Number",
    tr: "Telefon Numarası",
    de: "Telefonnummer",
    es: "Número de teléfono",
    ru: "Номер телефона",
    ar: "رقم الهاتف",
    fa: "شماره تلفن", fr: "Numéro de téléphone", it: "Numero di telefono", zh: "电话号码", id: "Nomor Telepon", ms: "Nombor Telefon", pl: "Numer telefonu", bg: "Телефонен номер", ro: "Număr de Telefon"
  },
  "wizard.phonePlaceholder": {
    en: "+XX XXX XXX XXXX",
    tr: "+XX XXX XXX XXXX",
    de: "+XX XXX XXX XXXX",
    es: "+XX XXX XXX XXXX",
    ru: "+XX XXX XXX XXXX",
    ar: "+XX XXX XXX XXXX",
    fa: "+XX XXX XXX XXXX", fr: "+XX XXX XXX XXXX", it: "+XX XXX XXX XXXX", zh: "+XX XXX XXX XXXX", id: "+XX XXX XXX XXXX", ms: "+XX XXX XXX XXXX", pl: "+XX XXX XXX XXXX", bg: "+XX XXX XXX XXXX", ro: "+XX XXX XXX XXXX"
  },
  "wizard.stepPackage": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة",
    fa: "پکیج", fr: "Forfait", it: "Pacchetto", zh: "套餐", id: "Paket", ms: "Pakej", pl: "Pakiet", bg: "Пакет", ro: "Pachet"
  },
  "wizard.stepExtras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Допы", ar: "إضافات",
    fa: "افزودنی‌ها", fr: "Options", it: "Extra", zh: "附加项", id: "Tambahan", ms: "Tambahan", pl: "Dodatki", bg: "Добавки", ro: "Suplimente"
  },
  "wizard.stepInfo": {
    en: "Info", tr: "Bilgi", de: "Info", es: "Info", ru: "Инфо", ar: "معلومات",
    fa: "اطلاعات", fr: "Infos", it: "Info", zh: "信息", id: "Info", ms: "Maklumat", pl: "Dane", bg: "Данни", ro: "Info"
  },
  "wizard.stepTicket": {
    en: "Ticket", tr: "Bilet", de: "Ticket", es: "Billete", ru: "Билет", ar: "تذكرة",
    fa: "بلیت", fr: "Billet", it: "Biglietto", zh: "票券", id: "Tiket", ms: "Tiket", pl: "Bilet", bg: "Билет", ro: "Bilet"
  },
  "wizard.enterName": {
    en: "Please enter your name", tr: "Lütfen adınızı girin", de: "Bitte geben Sie Ihren Namen ein", es: "Por favor ingrese su nombre",
    ru: "Пожалуйста, введите ваше имя", ar: "يرجى إدخال اسمك",
    fa: "لطفاً نام خود را وارد کنید", fr: "Veuillez saisir votre nom", it: "Per favore inserisca il Suo nome", zh: "请输入您的姓名", id: "Silakan masukkan nama Anda", ms: "Sila masukkan nama anda", pl: "Prosimy wprowadzić imię i nazwisko", bg: "Моля, въведете името си", ro: "Vă rugăm să introduceți numele dumneavoastră"
  },
  "wizard.invalidName": {
    en: "Please enter a valid name", tr: "Lütfen geçerli bir isim girin", de: "Bitte geben Sie einen gültigen Namen ein", es: "Por favor ingrese un nombre válido",
    ru: "Пожалуйста, введите действительное имя", ar: "يرجى إدخال اسم صحيح",
    fa: "لطفاً نام معتبر وارد کنید", fr: "Veuillez saisir un nom valide", it: "Per favore inserisca un nome valido", zh: "请输入有效的姓名", id: "Silakan masukkan nama yang valid", ms: "Sila masukkan nama yang sah", pl: "Prosimy wprowadzić prawidłowe imię i nazwisko", bg: "Моля, въведете валидно име", ro: "Vă rugăm să introduceți un nume valid"
  },
  "wizard.enterPhone": {
    en: "Please enter your phone number", tr: "Lütfen telefon numaranızı girin", de: "Bitte geben Sie Ihre Telefonnummer ein", es: "Por favor ingrese su número de teléfono",
    ru: "Пожалуйста, введите номер телефона", ar: "يرجى إدخال رقم هاتفك",
    fa: "لطفاً شماره تلفن خود را وارد کنید", fr: "Veuillez saisir votre numéro de téléphone", it: "Per favore inserisca il Suo numero di telefono", zh: "请输入您的电话号码", id: "Silakan masukkan nomor telepon Anda", ms: "Sila masukkan nombor telefon anda", pl: "Prosimy wprowadzić numer telefonu", bg: "Моля, въведете телефонния си номер", ro: "Vă rugăm să introduceți numărul dumneavoastră de telefon"
  },
  "wizard.pickCountry": {
    en: "Please select your country code", tr: "Lütfen ülke kodunu seçin", de: "Bitte Ländervorwahl auswählen", es: "Por favor seleccione su código de país",
    ru: "Пожалуйста, выберите код страны", ar: "يرجى اختيار رمز بلدك",
    fa: "لطفاً کد کشور خود را انتخاب کنید", fr: "Veuillez sélectionner votre indicatif pays", it: "Per favore selezioni il prefisso del Suo Paese", zh: "请选择您的国家代码", id: "Silakan pilih kode negara Anda", ms: "Sila pilih kod negara anda", pl: "Prosimy wybrać kod kraju", bg: "Моля, изберете кода на държавата си", ro: "Vă rugăm să selectați codul țării dumneavoastră"
  },
  "wizard.countryPlaceholder": {
    en: "Country", tr: "Ülke", de: "Land", es: "País",
    ru: "Страна", ar: "الدولة",
    fa: "کشور", fr: "Pays", it: "Paese", zh: "国家", id: "Negara", ms: "Negara", pl: "Kraj", bg: "Държава", ro: "Țară"
  },
  "wizard.invalidPhone": {
    en: "Please enter a valid phone number", tr: "Lütfen geçerli bir telefon numarası girin", de: "Bitte geben Sie eine gültige Telefonnummer ein", es: "Por favor ingrese un número de teléfono válido",
    ru: "Пожалуйста, введите действительный номер телефона", ar: "يرجى إدخال رقم هاتف صحيح",
    fa: "لطفاً شماره تلفن معتبر وارد کنید", fr: "Veuillez saisir un numéro de téléphone valide", it: "Per favore inserisca un numero di telefono valido", zh: "请输入有效的电话号码", id: "Silakan masukkan nomor telepon yang valid", ms: "Sila masukkan nombor telefon yang sah", pl: "Prosimy wprowadzić prawidłowy numer telefonu", bg: "Моля, въведете валиден телефонен номер", ro: "Vă rugăm să introduceți un număr de telefon valid"
  },
  "wizard.selectContact": {
    en: "Please select a contact method", tr: "Lütfen iletişim tercihinizi seçin", de: "Bitte wählen Sie eine Kontaktmethode", es: "Por favor seleccione un método de contacto",
    ru: "Пожалуйста, выберите способ связи", ar: "يرجى اختيار طريقة الاتصال",
    fa: "لطفاً یک روش تماس انتخاب کنید", fr: "Veuillez sélectionner un moyen de contact", it: "Per favore selezioni un metodo di contatto", zh: "请选择一种联系方式", id: "Silakan pilih metode kontak", ms: "Sila pilih kaedah hubungan", pl: "Prosimy wybrać metodę kontaktu", bg: "Моля, изберете метод за контакт", ro: "Vă rugăm să selectați o metodă de contact"
  },
  "wizard.contactNote": {
    en: "We will reach you through this channel", tr: "Sizinle bu kanal üzerinden iletişime geçeceğiz", de: "Wir kontaktieren Sie über diesen Kanal", es: "Le contactaremos a través de este canal",
    ru: "Мы свяжемся с вами через этот канал", ar: "سنتواصل معك عبر هذه القناة",
    fa: "از این کانال با شما تماس خواهیم گرفت", fr: "Nous vous contacterons via ce canal", it: "La contatteremo tramite questo canale", zh: "我们将通过此渠道联系您", id: "Kami akan menghubungi Anda melalui saluran ini", ms: "Kami akan menghubungi anda melalui saluran ini", pl: "Skontaktujemy się z Państwem przez ten kanał", bg: "Ще се свържем с Вас по този канал", ro: "Vă vom contacta prin acest canal"
  },
  "wizard.enterAddress": {
    en: "Please enter your pickup address", tr: "Lütfen alım adresinizi girin", de: "Bitte geben Sie Ihre Abholadresse ein", es: "Por favor ingrese su dirección de recogida",
    ru: "Пожалуйста, введите адрес подачи", ar: "يرجى إدخال عنوان الاستلام",
    fa: "لطفاً آدرس سوار شدن خود را وارد کنید", fr: "Veuillez saisir votre adresse de prise en charge", it: "Per favore inserisca il Suo indirizzo di prelievo", zh: "请输入您的接送地址", id: "Silakan masukkan alamat penjemputan Anda", ms: "Sila masukkan alamat ambil anda", pl: "Prosimy wprowadzić adres odbioru", bg: "Моля, въведете адреса си за вземане", ro: "Vă rugăm să introduceți adresa dumneavoastră de preluare"
  },
  "wizard.phoneNote": {
    en: "We will contact you via this number for booking confirmation",
    tr: "Rezervasyon onayı için bu numara üzerinden sizinle iletişime geçeceğiz",
    de: "Wir werden Sie über diese Nummer für die Buchungsbestätigung kontaktieren",
    es: "Le contactaremos a este número para confirmar la reserva",
    ru: "Мы свяжемся с вами по этому номеру для подтверждения бронирования",
    ar: "سنتواصل معك عبر هذا الرقم لتأكيد الحجز",
    fa: "از این شماره برای تأیید رزرو با شما تماس خواهیم گرفت", fr: "Nous vous contacterons à ce numéro pour la confirmation", it: "La contatteremo tramite questo numero per la conferma della prenotazione", zh: "我们将通过此号码联系您确认预订", id: "Kami akan menghubungi Anda via nomor ini untuk konfirmasi pemesanan", ms: "Kami akan menghubungi anda melalui nombor ini untuk pengesahan tempahan", pl: "Skontaktujemy się z Państwem pod tym numerem w celu potwierdzenia rezerwacji", bg: "Ще се свържем с Вас на този номер за потвърждение на резервацията", ro: "Vă vom contacta prin acest număr pentru confirmarea rezervării"
  },
  "wizard.pickupAddress": {
    en: "Pickup Address",
    tr: "Alım Adresi",
    de: "Abholadresse",
    es: "Dirección de recogida",
    ru: "Адрес подачи",
    ar: "عنوان الاستلام",
    fa: "آدرس سوار شدن", fr: "Adresse de prise en charge", it: "Indirizzo di prelievo", zh: "接送地址", id: "Alamat Penjemputan", ms: "Alamat Ambil", pl: "Adres odbioru", bg: "Адрес за вземане", ro: "Adresa de Preluare"
  },
  "wizard.addressPlaceholder": {
    en: "Type hotel name and pick from list",
    tr: "Otel adını yazın ve listeden seçin",
    de: "Hotelname eingeben und aus Liste wählen",
    es: "Escribe el hotel y elige de la lista",
    ru: "Введите название и выберите из списка",
    ar: "اكتب اسم الفندق واختر من القائمة",
    fa: "نام هتل را بنویسید و از فهرست انتخاب کنید", fr: "Tapez le nom de l'hôtel et choisissez dans la liste", it: "Digiti il nome dell'hotel e scelga dall'elenco", zh: "输入酒店名称并从列表中选择", id: "Ketik nama hotel dan pilih dari daftar", ms: "Taip nama hotel dan pilih dari senarai", pl: "Wpisz nazwę hotelu i wybierz z listy", bg: "Напишете име на хотел и изберете от списъка", ro: "Tastați numele hotelului și alegeți din listă"
  },
  "wizard.pickFromList": {
    en: "Please pick your address from the dropdown list",
    tr: "Lütfen adresinizi açılan listeden seçin",
    de: "Bitte wählen Sie Ihre Adresse aus der Liste",
    es: "Por favor, seleccione su dirección de la lista desplegable",
    ru: "Пожалуйста, выберите ваш адрес из списка",
    ar: "يرجى اختيار عنوانك من القائمة المنسدلة",
    fa: "لطفاً آدرس خود را از فهرست بازشو انتخاب کنید", fr: "Veuillez choisir votre adresse dans la liste déroulante", it: "Per favore scelga il Suo indirizzo dal menu a tendina", zh: "请从下拉列表中选择您的地址", id: "Silakan pilih alamat Anda dari daftar dropdown", ms: "Sila pilih alamat anda dari senarai lungsur", pl: "Prosimy wybrać adres z listy rozwijanej", bg: "Моля, изберете адреса си от падащия списък", ro: "Vă rugăm să alegeți adresa din lista derulantă"
  },
  "wizard.continueWithoutTransfer": {
    en: "Continue without transfer · I'll come myself",
    tr: "Transfer olmadan devam et · Kendim geleceğim",
    de: "Ohne Transfer fortfahren · Ich komme selbst",
    es: "Continuar sin traslado · Iré por mi cuenta",
    ru: "Продолжить без трансфера · Я приеду сам",
    ar: "المتابعة بدون نقل · سآتي بنفسي",
    fa: "ادامه بدون ترانسفر · خودم می‌آیم", fr: "Continuer sans transfert · je viendrai moi-même", it: "Continua senza transfer · Verrò da solo", zh: "不预订接送继续 · 我自行前往", id: "Lanjutkan tanpa antar-jemput · Saya akan datang sendiri", ms: "Teruskan tanpa pemindahan · Saya akan datang sendiri", pl: "Kontynuuj bez transferu · Przyjadę sam", bg: "Продължете без трансфер · ще дойда сам", ro: "Continuați fără transfer · Vin singur"
  },
  "wizard.useButtonAbove": {
    en: "Tap the button above to continue without transfer",
    tr: "Transfer olmadan devam etmek için yukarıdaki butona basın",
    de: "Tippen Sie oben auf die Schaltfläche, um ohne Transfer fortzufahren",
    es: "Pulse el botón superior para continuar sin traslado",
    ru: "Нажмите кнопку выше, чтобы продолжить без трансфера",
    ar: "اضغط على الزر أعلاه للمتابعة بدون نقل",
    fa: "برای ادامه بدون ترانسفر روی دکمه بالا بزنید", fr: "Touchez le bouton ci-dessus pour continuer sans transfert", it: "Tocchi il pulsante sopra per continuare senza transfer", zh: "点击上方按钮不预订接送继续", id: "Ketuk tombol di atas untuk melanjutkan tanpa antar-jemput", ms: "Ketik butang di atas untuk teruskan tanpa pemindahan", pl: "Dotknij przycisku powyżej, aby kontynuować bez transferu", bg: "Натиснете бутона горе, за да продължите без трансфер", ro: "Apăsați butonul de mai sus pentru a continua fără transfer"
  },
  "wizard.roomNumber": {
    en: "Room Number",
    tr: "Oda Numarası",
    de: "Zimmernummer",
    es: "Número de habitación",
    ru: "Номер комнаты",
    ar: "رقم الغرفة",
    fa: "شماره اتاق", fr: "Numéro de chambre", it: "Numero di stanza", zh: "房间号", id: "Nomor Kamar", ms: "Nombor Bilik", pl: "Numer pokoju", bg: "Номер на стая", ro: "Numărul Camerei"
  },
  "wizard.roomNumberPlaceholder": {
    en: "e.g. 507",
    tr: "örn. 507",
    de: "z.B. 507",
    es: "ej. 507",
    ru: "напр. 507",
    ar: "مثال: 507",
    fa: "مثلاً ۵۰۷", fr: "ex. 507", it: "es. 507", zh: "例如507", id: "mis. 507", ms: "cth. 507", pl: "np. 507", bg: "напр. 507", ro: "ex. 507"
  },
  "wizard.roomNumberNote": {
    en: "So our driver can find you easily. If you don't know yet, you can leave it empty — driver will ask at the lobby.",
    tr: "Şoförümüzün sizi kolay bulabilmesi için. Henüz bilmiyorsanız boş bırakabilirsiniz — şoför lobide ismen soracak.",
    de: "Damit unser Fahrer Sie leicht findet. Wenn Sie noch nicht wissen, können Sie es leer lassen — der Fahrer fragt an der Rezeption.",
    es: "Para que nuestro chofer le encuentre fácilmente. Si aún no lo sabe, puede dejarlo vacío — el chofer preguntará en el lobby.",
    ru: "Чтобы водитель легко вас нашёл. Если ещё не знаете, можете оставить пустым — водитель спросит в лобби.",
    ar: "حتى يتمكن سائقنا من إيجادك بسهولة. إذا لم تعرف بعد، يمكنك تركه فارغًا — سيسأل السائق في البهو.",
    fa: "تا راننده ما به‌راحتی شما را پیدا کند. اگر هنوز نمی‌دانید، می‌توانید خالی بگذارید — راننده در لابی سؤال خواهد کرد.", fr: "Pour que notre chauffeur vous trouve facilement. Si vous ne le savez pas encore, laissez vide — le chauffeur demandera à la réception.", it: "Così il nostro autista può trovarLa facilmente. Se non lo conosce ancora, può lasciarlo vuoto — l'autista chiederà alla reception.", zh: "便于司机顺利找到您。若尚不知晓,可留空——司机将在大堂询问。", id: "Agar sopir kami dapat menemukan Anda dengan mudah. Jika Anda belum tahu, Anda dapat mengosongkannya — sopir akan menanyakan di lobi.", ms: "Supaya pemandu kami mudah mencari anda. Jika anda belum tahu, anda boleh biarkan kosong — pemandu akan bertanya di lobi.", pl: "Aby nasz kierowca mógł Państwa łatwo znaleźć. Jeśli jeszcze Państwo nie wiedzą, można zostawić puste — kierowca zapyta w recepcji.", bg: "За да може шофьорът ни да Ви намери лесно. Ако все още не знаете, може да оставите полето празно — шофьорът ще попита на рецепцията.", ro: "Pentru ca șoferul nostru să vă găsească ușor. Dacă nu știți încă, puteți lăsa gol — șoferul va întreba la recepție."
  },
  "wizard.contactPref": {
    en: "Preferred Contact",
    tr: "İletişim Tercihi",
    de: "Bevorzugter Kontakt",
    es: "Contacto preferido",
    ru: "Предпочтительный контакт",
    ar: "وسيلة التواصل المفضلة",
    fa: "روش تماس ترجیحی", fr: "Contact préféré", it: "Contatto preferito", zh: "首选联系方式", id: "Kontak Pilihan", ms: "Hubungan Pilihan", pl: "Preferowany kontakt", bg: "Предпочитан контакт", ro: "Contact Preferat"
  },
  "wizard.contactWarning": {
    en: "Please fill in your name and phone number",
    tr: "Lütfen adınızı ve telefon numaranızı girin",
    de: "Bitte geben Sie Ihren Namen und Ihre Telefonnummer ein",
    es: "Por favor, introduzca su nombre y número de teléfono",
    ru: "Пожалуйста, укажите ваше имя и номер телефона",
    ar: "يرجى ملء الاسم ورقم الهاتف",
    fa: "لطفاً نام و شماره تلفن خود را پر کنید", fr: "Veuillez remplir votre nom et numéro de téléphone", it: "Per favore compili il Suo nome e numero di telefono", zh: "请填写您的姓名与电话号码", id: "Silakan isi nama dan nomor telepon Anda", ms: "Sila isi nama dan nombor telefon anda", pl: "Prosimy wypełnić imię, nazwisko i numer telefonu", bg: "Моля, попълнете името и телефонния си номер", ro: "Vă rugăm să completați numele și numărul dumneavoastră de telefon"
  },
  "wizard.reviewBooking": {
    en: "Please review your booking",
    tr: "Lütfen biletinizi kontrol edin",
    de: "Bitte überprüfen Sie Ihre Buchung",
    es: "Por favor, revise su reserva",
    ru: "Пожалуйста, проверьте ваше бронирование",
    ar: "يرجى مراجعة حجزك",
    fa: "لطفاً رزرو خود را مرور کنید", fr: "Veuillez vérifier votre réservation", it: "Per favore controlli la Sua prenotazione", zh: "请查看您的预订", id: "Silakan tinjau pemesanan Anda", ms: "Sila semak tempahan anda", pl: "Prosimy sprawdzić rezerwację", bg: "Моля, прегледайте резервацията си", ro: "Vă rugăm să revedeți rezervarea dumneavoastră"
  },
  "ticket.guestName": {
    en: "Guest Name", tr: "Misafir Adı", de: "Gastname", es: "Nombre del Huésped",
    ru: "Имя гостя", ar: "اسم الضيف",
    fa: "نام مهمان", fr: "Nom de l'invité", it: "Nome dell'ospite", zh: "宾客姓名", id: "Nama Tamu", ms: "Nama Tetamu", pl: "Imię i nazwisko gościa", bg: "Име на госта", ro: "Numele Oaspetelui"
  },
  "ticket.phone": {
    en: "Phone", tr: "Telefon", de: "Telefon", es: "Teléfono",
    ru: "Телефон", ar: "الهاتف",
    fa: "تلفن", fr: "Téléphone", it: "Telefono", zh: "电话", id: "Telepon", ms: "Telefon", pl: "Telefon", bg: "Телефон", ro: "Telefon"
  },
  "ticket.pickupAddress": {
    en: "Pickup Address", tr: "Alım Adresi", de: "Abholadresse", es: "Dirección de Recogida",
    ru: "Адрес подачи", ar: "عنوان الاستلام",
    fa: "آدرس سوار شدن", fr: "Adresse de prise en charge", it: "Indirizzo di prelievo", zh: "接送地址", id: "Alamat Penjemputan", ms: "Alamat Ambil", pl: "Adres odbioru", bg: "Адрес за вземане", ro: "Adresa de Preluare"
  },

  // ========== TICKET / BOARDING PASS ==========
  "ticket.boardingPass": {
    en: "Boarding Pass", tr: "Biniş Kartı", de: "Bordkarte", es: "Tarjeta de Embarque",
    ru: "Посадочный талон", ar: "بطاقة الصعود",
    fa: "کارت سوار شدن", fr: "Carte d'embarquement", it: "Carta d'imbarco", zh: "登船牌", id: "Tiket Naik Kapal", ms: "Pas Menaiki", pl: "Karta pokładowa", bg: "Бордна карта", ro: "Tichet de Îmbarcare"
  },
  "ticket.date": {
    en: "Date", tr: "Tarih", de: "Datum", es: "Fecha",
    ru: "Дата", ar: "التاريخ",
    fa: "تاریخ", fr: "Date", it: "Data", zh: "日期", id: "Tanggal", ms: "Tarikh", pl: "Data", bg: "Дата", ro: "Data"
  },
  "ticket.guests": {
    en: "Guests", tr: "Misafirler", de: "Gäste", es: "Huéspedes",
    ru: "Гости", ar: "الضيوف",
    fa: "مهمانان", fr: "Invités", it: "Ospiti", zh: "宾客", id: "Tamu", ms: "Tetamu", pl: "Goście", bg: "Гости", ro: "Oaspeți"
  },
  "ticket.drinks": {
    en: "Drinks", tr: "İçecekler", de: "Getränke", es: "Bebidas",
    ru: "Напитки", ar: "المشروبات",
    fa: "نوشیدنی‌ها", fr: "Boissons", it: "Bevande", zh: "饮品", id: "Minuman", ms: "Minuman", pl: "Napoje", bg: "Напитки", ro: "Băuturi"
  },
  "ticket.transfer": {
    en: "Transfer", tr: "Transfer", de: "Transfer", es: "Transfer",
    ru: "Трансфер", ar: "النقل",
    fa: "ترانسفر", fr: "Transfert", it: "Transfer", zh: "接送", id: "Antar-jemput", ms: "Pemindahan", pl: "Transfer", bg: "Трансфер", ro: "Transfer"
  },
  "ticket.special": {
    en: "Special", tr: "Özel", de: "Besonderes", es: "Especial",
    ru: "Особое", ar: "خاص",
    fa: "ویژه", fr: "Spécial", it: "Speciale", zh: "特别事项", id: "Khusus", ms: "Istimewa", pl: "Specjalne", bg: "Специално", ro: "Special"
  },
  "ticket.romanticSetup": {
    en: "Romantic Table Setup", tr: "Romantik Masa Düzeni", de: "Romantischer Tisch", es: "Mesa Romántica",
    ru: "Романтическая сервировка", ar: "ترتيب طاولة رومانسية",
    fa: "چیدمان میز رمانتیک", fr: "Décoration table romantique", it: "Allestimento tavolo romantico", zh: "浪漫餐桌布置", id: "Pengaturan Meja Romantis", ms: "Susunan Meja Romantik", pl: "Aranżacja stolika romantycznego", bg: "Подреждане на романтична маса", ro: "Aranjament Masă Romantică"
  },
  "ticket.meetingPoint": {
    en: "Meeting Point", tr: "Buluşma Noktası", de: "Treffpunkt", es: "Punto de Encuentro",
    ru: "Место встречи", ar: "نقطة الالتقاء",
    fa: "نقطه ملاقات", fr: "Point de rendez-vous", it: "Punto d'incontro", zh: "集合地点", id: "Titik Pertemuan", ms: "Titik Pertemuan", pl: "Miejsce spotkania", bg: "Място за среща", ro: "Punct de Întâlnire"
  },
  "ticket.hotelPickup": {
    en: "Hotel Pickup", tr: "Otelden Alınma", de: "Hotelabholung", es: "Recogida en Hotel",
    ru: "Из отеля", ar: "الاستلام من الفندق",
    fa: "سوار شدن از هتل", fr: "Prise en charge hôtel", it: "Prelievo in hotel", zh: "酒店接送", id: "Penjemputan Hotel", ms: "Jemputan Hotel", pl: "Odbiór z hotelu", bg: "Вземане от хотела", ro: "Preluare de la Hotel"
  }
};


// Node.js build-time export (ignored in browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { T, LANGUAGES };
}
