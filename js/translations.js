// ========== TRANSLATIONS ==========
// Yeni dil eklemek için: aşağıdaki her key'e yeni dil kodunu ekle
// Örnek: "hero.badge": { en: "...", tr: "...", de: "...", YENI_DIL: "..." }

const LANGUAGES = {
  en: { flag: 'gb', label: 'English', dir: 'ltr' },
  tr: { flag: 'tr', label: 'Türkçe', dir: 'ltr' },
  de: { flag: 'de', label: 'Deutsch', dir: 'ltr' },
  ru: { flag: 'ru', label: 'Русский', dir: 'ltr' },
  es: { flag: 'es', label: 'Español', dir: 'ltr' },
  ar: { flag: 'sa', label: 'العربية', dir: 'rtl' },
  fr: { flag: 'fr', label: 'Français', dir: 'ltr' },
  it: { flag: 'it', label: 'Italiano', dir: 'ltr' },
  uk: { flag: 'ua', label: 'Українська', dir: 'ltr' },
  pl: { flag: 'pl', label: 'Polski', dir: 'ltr' },
  ro: { flag: 'ro', label: 'Română', dir: 'ltr' },
  bg: { flag: 'bg', label: 'Български', dir: 'ltr' },
  fa: { flag: 'ir', label: 'فارسی', dir: 'rtl' },
  ur: { flag: 'pk', label: 'اردو', dir: 'rtl' },
  hi: { flag: 'in', label: 'हिन्दी', dir: 'ltr' },
  zh: { flag: 'cn', label: '中文', dir: 'ltr' },
  ja: { flag: 'jp', label: '日本語', dir: 'ltr' },
  ko: { flag: 'kr', label: '한국어', dir: 'ltr' },
  id: { flag: 'id', label: 'Indonesia', dir: 'ltr' },
  ms: { flag: 'my', label: 'Malaysia', dir: 'ltr' },
  pt: { flag: 'pt', label: 'Português', dir: 'ltr' },
  nl: { flag: 'nl', label: 'Nederlands', dir: 'ltr' },
  el: { flag: 'gr', label: 'Ελληνικά', dir: 'ltr' },
  cs: { flag: 'cz', label: 'Čeština', dir: 'ltr' },
  hu: { flag: 'hu', label: 'Magyar', dir: 'ltr' },
  sv: { flag: 'se', label: 'Svenska', dir: 'ltr' },
  da: { flag: 'dk', label: 'Dansk', dir: 'ltr' },
  no: { flag: 'no', label: 'Norsk', dir: 'ltr' },
  fi: { flag: 'fi', label: 'Suomi', dir: 'ltr' },
  sk: { flag: 'sk', label: 'Slovenčina', dir: 'ltr' },
  sl: { flag: 'si', label: 'Slovenščina', dir: 'ltr' },
  lv: { flag: 'lv', label: 'Latviešu', dir: 'ltr' }
};

const T = {
  // ========== NAV ==========
  "nav.home": {
    en: "Home", tr: "Ana Sayfa", de: "Start", es: "Inicio", ru: "Главная", ar: "الرئيسية",
    fa: "خانه", fr: "Accueil", it: "Home", zh: "首页", id: "Beranda", ms: "Utama", pl: "Strona główna", bg: "Начало", ro: "Acasă", uk: "Головна", ja: "ホーム", ko: "홈", hi: "होम", ur: "ہوم"
  },
  "nav.cruises": {
    en: "Packages", tr: "Paketler", de: "Pakete", es: "Paquetes", ru: "Пакеты", ar: "الباقات",
    fa: "پکیج‌ها", fr: "Forfaits", it: "Pacchetti", zh: "套餐", id: "Paket", ms: "Pakej", pl: "Pakiety", bg: "Пакети", ro: "Pachete", uk: "Пакети", ja: "パッケージ", ko: "패키지", hi: "पैकेज", ur: "پیکجز"
  },
  "nav.gallery": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور",
    fa: "گالری", fr: "Galerie", it: "Galleria", zh: "画廊", id: "Galeri", ms: "Galeri", pl: "Galeria", bg: "Галерия", ro: "Galerie", uk: "Галерея", ja: "ギャラリー", ko: "갤러리", hi: "गैलरी", ur: "گیلری"
  },
  "nav.faq": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة",
    fa: "سؤالات متداول", fr: "FAQ", it: "FAQ", zh: "常见问题", id: "FAQ", ms: "Soalan Lazim", pl: "FAQ", bg: "Въпроси", ro: "Întrebări", uk: "Питання", ja: "よくある質問", ko: "FAQ", hi: "FAQ", ur: "FAQ"
  },
  "nav.book": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز",
    fa: "مشاهده و رزرو", fr: "Explorer & réserver", it: "Esplora e Prenota", zh: "查看与预订", id: "Jelajahi & Pesan", ms: "Terokai & Tempah", pl: "Przeglądaj i rezerwuj", bg: "Разгледайте и резервирайте", ro: "Explorați și Rezervați", uk: "Огляд і бронювання", ja: "予約・詳細", ko: "탐색 및 예약", hi: "देखें और बुक करें", ur: "دریافت کریں اور بک کریں"
  },

  // ========== HERO ==========
  "hero.badge": {
    en: "Istanbul's Premium Cruise Experience", tr: "İstanbul'un Premium Cruise Deneyimi",
    de: "Istanbuls Premium-Bootstour", es: "La Experiencia Premium de Crucero en Estambul",
    ru: "Премиальный круиз по Стамбулу", ar: "تجربة الرحلات البحرية الفاخرة في إسطنبول",
    fa: "تجربه ممتاز تور دریایی استانبول", fr: "L'expérience de croisière premium d'Istanbul", it: "L'esperienza di crociera premium di Istanbul", zh: "伊斯坦布尔高端游船体验", id: "Pengalaman Pelayaran Premium Istanbul", ms: "Pengalaman Pelayaran Premium Istanbul", pl: "Premium rejs w Stambule", bg: "Премиум круиз в Истанбул", ro: "Experiența de Croazieră Premium a Istanbulului", uk: "Преміум круїз по Стамбулу", ja: "イスタンブールのプレミアムクルーズ体験", ko: "이스탄불 최고의 크루즈 경험", hi: "इस्तांबुल का प्रीमियम क्रूज़ अनुभव", ur: "استنبول کا پریمیم کروز تجربہ"
  },
  "hero.title1": {
    en: "Luxury Bosphorus", tr: "Lüks Yemekli", de: "Luxus-Bosporus", es: "Lujoso Bósforo",
    ru: "Роскошный Босфор", ar: "البوسفور الفاخر",
    fa: "تور لوکس بسفر", fr: "Croisière dîner de luxe", it: "Crociera di Lusso", zh: "豪华博斯普鲁斯", id: "Pelayaran Makan Malam", ms: "Pelayaran Makan Malam", pl: "Luksusowy rejs z kolacją", bg: "Луксозен круиз", ro: "Croazieră de Lux pe Bosfor", uk: "Розкішний круїз", ja: "豪華ボスポラス海峡", ko: "럭셔리 보스포러스", hi: "लग्जरी बॉस्फोरस", ur: "لگژری باسفورس"
  },
  "hero.title2": {
    en: "Dinner Cruise", tr: "Boğaz Turu", de: "Abendfahrt", es: "Crucero con Cena",
    ru: "Ужин на круизе", ar: "رحلة عشاء بحرية",
    fa: "شام در کشتی", fr: "sur le Bosphore", it: "con Cena sul Bosforo", zh: "晚宴游船", id: "Bosphorus Mewah", ms: "Bosphorus Mewah", pl: "po Bosforze", bg: "с вечеря по Босфора", ro: "cu Cină", uk: "по Босфору з вечерею", ja: "ディナークルーズ", ko: "디너 크루즈", hi: "डिनर क्रूज़", ur: "ڈنر کروز"
  },
  "hero.subtitle": {
    en: "Live entertainment · Dinner · Bosphorus night views · 7/24 instant support",
    tr: "Canlı eğlence · Yemek · Boğaz gece manzarası · 7/24 anlık destek",
    de: "Live-Show · Abendessen · Bosporus bei Nacht · 24/7 Support",
    es: "Entretenimiento en vivo · Cena · Vistas nocturnas del Bósforo · Soporte 24/7",
    ru: "Живые шоу · Ужин · Ночной Босфор · Поддержка 24/7",
    ar: "ترفيه حي · عشاء · مناظر البوسفور الليلية · دعم على مدار الساعة",
    fa: "سرگرمی زنده · شام · مناظر شبانه بسفر · پشتیبانی فوری ۲۴/۷", fr: "Divertissement en direct · Dîner · Vues nocturnes du Bosphore · Assistance instantanée 7j/7 24h/24", it: "Intrattenimento dal vivo · Cena · Vedute notturne del Bosforo · Supporto istantaneo 7/24", zh: "现场娱乐 · 晚宴 · 博斯普鲁斯夜景 · 7/24即时支持", id: "Hiburan langsung · Makan malam · Pemandangan malam Bosphorus · Dukungan instan 7/24", ms: "Hiburan langsung · Makan malam · Pemandangan malam Bosphorus · Sokongan segera 7/24", pl: "Rozrywka na żywo · Kolacja · Nocne widoki Bosforu · Wsparcie 24/7", bg: "Забавление на живо · Вечеря · Нощни гледки по Босфора · Поддръжка 24/7", ro: "Divertisment live · Cină · Priveliști nocturne ale Bosforului · Asistență instant 7/24", uk: "Живі виступи · Вечеря · Нічні види Босфору · Підтримка 7/24", ja: "ライブエンターテイメント &middot; ディナー &middot; ボスポラス海峡の夜景 &middot; 年中無休24時間サポート", ko: "라이브 공연 &middot; 디너 &middot; 보스포러스 야경 &middot; 7/24 즉시 지원", hi: "लाइव मनोरंजन · डिनर · बॉस्फोरस की रात का दृश्य · 7/24 तत्काल सहायता", ur: "لائیو تفریح &middot; ڈنر &middot; باسفورس کے رات کے مناظر &middot; 7/24 فوری سپورٹ"
  },
  "hero.noprepay": {
    en: "No prepayment — Pay on the boat", tr: "Ön ödeme yok — Teknede ödeyin",
    de: "Keine Vorauszahlung — Zahlung an Bord", es: "Sin prepago — Paga en el barco",
    ru: "Без предоплаты — оплата на борту", ar: "بدون دفع مسبق — ادفع على القارب",
    fa: "بدون پیش‌پرداخت — پرداخت روی کشتی", fr: "Aucun prépaiement — Paiement à bord", it: "Nessun anticipo — Pagamento a bordo", zh: "无需预付——船上付款", id: "Tanpa pembayaran di muka — Bayar di kapal", ms: "Tiada bayaran pendahuluan — Bayar di atas bot", pl: "Bez przedpłaty — płatność na pokładzie", bg: "Без предплащане — плащане на борда", ro: "Fără plată în avans — Plata pe vapor", uk: "Без передоплати — Оплата на борту", ja: "事前決済不要 — 船上でお支払い", ko: "선불 결제 없음 — 보트에서 결제하세요", hi: "कोई अग्रिम भुगतान नहीं — नाव पर भुगतान करें", ur: "پیشگی ادائیگی نہیں — کشتی پر ادائیگی کریں"
  },
  "meta.home.description": {
    en: "3-hour Bosphorus dinner cruise from €24.30/person. Full dinner, Mevlana, folk dance, belly dance & DJ. Departs 20:30 from Kabataş. Hotel transfer available.",
    tr: "3 saatlik Boğaz yemekli turu €24.30'dan. Tam menü, Mevlana, halk oyunları, oryantal ve DJ. Kabataş'tan 20:30 kalkış. Otel transfer opsiyonel.",
    de: "3-stündige Bosporus-Dinnerfahrt ab €24.30/Person. Volles Menü, Mevlana, Volkstanz, Bauchtanz und DJ. Abfahrt 20:30 ab Kabataş. Hoteltransfer verfügbar.",
    es: "Crucero con cena de 3h por el Bósforo desde €24.30. Menú completo, Mevlana, danzas folclóricas, danza del vientre y DJ. Salida 20:30 desde Kabataş. Traslado al hotel disponible.",
    ru: "3-часовой круиз с ужином по Босфору от €24.30. Полное меню, Мевляна, народные танцы, танец живота и DJ. Отправление в 20:30 от Кабаташа. Доступен трансфер.",
    ar: "رحلة عشاء بحرية لمدة 3 ساعات في البوسفور من €24.30. قائمة كاملة، مولانا، رقص شعبي، رقص شرقي و DJ. الانطلاق 20:30 من كاباتاش. نقل من الفندق متاح.",
    fa: "تور شام سه‌ساعته بسفر از €24.30/نفر. منوی کامل، مولانا، رقص محلی، رقص شرقی و DJ. حرکت ساعت 20:30 از کاباتاش. ترانسفر هتل موجود است.", fr: "Croisière dîner 3h sur le Bosphore dès €24.30. Menu complet, Mevlana, danses folkloriques, danse du ventre et DJ. Départ 20h30 de Kabataş. Transfert hôtel disponible.", it: "Crociera con cena di 3h sul Bosforo da €24.30/persona. Menù completo, Mevlana, danze popolari, danza del ventre e DJ. Partenza 20:30 da Kabataş. Trasferimento hotel disponibile.", zh: "3小时博斯普鲁斯晚餐游船,€24.30/人起。完整菜单、梅夫拉那、土耳其民间舞、肚皮舞和DJ。20:30从卡巴塔什码头出发。可选酒店接送。", id: "Pelayaran makan malam Bosphorus 3 jam mulai €24.30/orang. Menu lengkap, Mevlana, tari rakyat, tari perut & DJ. Berangkat 20:30 dari Kabataş. Antar-jemput hotel tersedia.", ms: "Pelayaran makan malam Bosphorus 3 jam dari €24.30/orang. Menu penuh, Mevlana, tarian rakyat, tarian perut & DJ. Bertolak 20:30 dari Kabataş. Pemindahan hotel tersedia.", pl: "3-godzinny rejs z kolacją po Bosforze od €24.30/osoba. Pełne menu, Mevlana, tańce ludowe, taniec brzucha i DJ. Odjazd 20:30 z Kabataş. Transfer hotelowy dostępny.", bg: "3-часов круиз с вечеря по Босфора от €24.30/човек. Пълно меню, Мевляна, народни танци, кючек и DJ. Тръгване 20:30 от Кабаташ. Хотелски трансфер опционален.", ro: "Croazieră cu cină de 3 ore pe Bosfor de la €24.30/persoană. Meniu complet, Mevlana, dansuri populare, dans din buric și DJ. Plecare 20:30 din Kabataş. Transfer hotelier disponibil.", uk: "3-годинний круїз по Босфору з вечерею від €24.30/особа. Повна вечеря, Мевлана, народні танці, танець живота та DJ. Відправлення о 20:30 з Kabataş. Доступний трансфер від готелю.", ja: "3時間のボスポラス海峡 (Bosphorus) ディナークルーズ €24.30/名様より。フルディナー、メヴラーナ、民族舞踊、ベリーダンス、DJ付き。カバタシュ (Kabataş)より20:30出発。ホテル送迎もご利用いただけます。", ko: "€24.30/1인부터 시작하는 3시간 보스포러스 (Bosphorus) 디너 크루즈입니다. 풀코스 디너, 메블라나, 민속 춤, 벨리 댄스 &amp; DJ가 포함됩니다. 카바타시 (Kabataş)에서 20:30에 출발합니다. 호텔 픽업 이용 가능합니다.", hi: "3 घंटे का बॉस्फोरस (Bosphorus) डिनर क्रूज़ €24.30/व्यक्ति से। संपूर्ण डिनर, मेवलाना, लोक नृत्य, बेली डांस और DJ। काबाताश (Kabataş) से 20:30 बजे प्रस्थान। होटल ट्रांसफर उपलब्ध।", ur: "3 گھنٹے کا باسفورس (Bosphorus) ڈنر کروز €24.30/فی شخص سے۔ مکمل ڈنر، مولانا، لوک رقص، بیلی ڈانس اور DJ۔ کاباتاش (Kabataş) سے 20:30 پر روانگی۔ ہوٹل ٹرانسفر دستیاب ہے۔"
  },
  "hero.cta1": {
    en: "Check Availability on WhatsApp", tr: "WhatsApp'tan Müsaitlik Sor",
    de: "Verfügbarkeit per WhatsApp prüfen", es: "Consultar disponibilidad en WhatsApp",
    ru: "Проверить наличие в WhatsApp", ar: "تحقق من التوفر عبر واتساب",
    fa: "بررسی ظرفیت در واتس‌اپ", fr: "Vérifier la disponibilité sur WhatsApp", it: "Verifica disponibilità su WhatsApp", zh: "通过WhatsApp查询余位", id: "Cek Ketersediaan via WhatsApp", ms: "Semak Kekosongan di WhatsApp", pl: "Sprawdź dostępność na WhatsApp", bg: "Проверете наличността в WhatsApp", ro: "Verificați Disponibilitatea pe WhatsApp", uk: "Перевірити доступність у WhatsApp", ja: "WhatsAppで空き状況を確認", ko: "WhatsApp으로 예약 가능 여부 확인하기", hi: "WhatsApp पर उपलब्धता जांचें", ur: "WhatsApp پر دستیابی چیک کریں"
  },
  "hero.cta2": {
    en: "View Cruise", tr: "Turu İncele", de: "Tour ansehen", es: "Ver crucero",
    ru: "Смотреть круиз", ar: "عرض الرحلة",
    fa: "مشاهده تور", fr: "Voir la croisière", it: "Vedi la crociera", zh: "查看游船", id: "Lihat Pelayaran", ms: "Lihat Pelayaran", pl: "Zobacz rejs", bg: "Вижте круиза", ro: "Vedeți Croaziera", uk: "Переглянути круїз", ja: "クルーズを見る", ko: "크루즈 보기", hi: "क्रूज़ देखें", ur: "کروز دیکھیں"
  },
  "hero.departure": {
    en: "Departure from Kabataş · 20:30 – 23:30",
    tr: "Kalkış: Kabataş · 20:30 – 23:30",
    de: "Abfahrt ab Kabataş · 20:30 – 23:30",
    es: "Salida desde Kabataş · 20:30 – 23:30",
    ru: "Отправление: Кабаташ · 20:30 – 23:30",
    ar: "المغادرة من كاباتاش · 20:30 – 23:30",
    fa: "حرکت از کاباتاش · ۲۰:۳۰ – ۲۳:۳۰", fr: "Départ de Kabataş · 20h30 – 23h30", it: "Partenza da Kabataş · 20:30 – 23:30", zh: "卡巴塔什启航 · 20:30 – 23:30", id: "Keberangkatan dari Kabataş · 20:30 – 23:30", ms: "Bertolak dari Kabataş · 20:30 – 23:30", pl: "Wypłynięcie z Kabataş · 20:30 – 23:30", bg: "Отплаване от Кабаташ · 20:30 – 23:30", ro: "Plecare din Kabataș · 20:30 – 23:30", uk: "Відправлення з Kabataş · 20:30 – 23:30", ja: "Kabataşより出発 · 20:30 – 23:30", ko: "Kabataş 출발 · 20:30 – 23:30", hi: "Kabataş से प्रस्थान · 20:30 – 23:30", ur: "Kabataş سے روانگی · 20:30 – 23:30"
  },

  // ========== TRUST BAR ==========
  "trust.support": {
    en: "7/24 Instant Support", tr: "7/24 Anlık Destek", de: "24/7 Sofort-Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم فوري على مدار الساعة",
    fa: "پشتیبانی فوری ۲۴/۷", fr: "Assistance instantanée 7j/7 24h/24", it: "Supporto istantaneo 7/24", zh: "7/24即时支持", id: "Dukungan Instan 7/24", ms: "Sokongan Segera 7/24", pl: "Wsparcie 24/7", bg: "Мигновена поддръжка 24/7", ro: "Asistență Instant 7/24", uk: "Підтримка 7/24", ja: "年中無休24時間サポート", ko: "7/24 즉시 지원", hi: "7/24 तत्काल सहायता", ur: "7/24 فوری سپورٹ"
  },
  "trust.pay": {
    en: "Pay on the Boat", tr: "Teknede Ödeyin", de: "Zahlung an Bord",
    es: "Paga en el barco", ru: "Оплата на борту", ar: "ادفع على القارب",
    fa: "پرداخت روی کشتی", fr: "Paiement à bord", it: "Pagamento a bordo", zh: "船上付款", id: "Bayar di Kapal", ms: "Bayar di Atas Bot", pl: "Płatność na pokładzie", bg: "Плащане на борда", ro: "Plata pe Vapor", uk: "Оплата на борту", ja: "船上でお支払い", ko: "보트에서 결제", hi: "नाव पर भुगतान करें", ur: "کشتی پر ادائیگی کریں"
  },
  "trust.withyou": {
    en: "With You Before, During & After", tr: "Öncesinde, Sırasında ve Sonrasında Yanınızdayız",
    de: "Vor, während & nach der Tour",
    es: "Contigo antes, durante y después", ru: "С вами до, во время и после",
    ar: "معك قبل وأثناء وبعد الرحلة",
    fa: "همراه شما پیش، حین و پس از تور", fr: "À vos côtés avant, pendant et après", it: "Con Lei prima, durante e dopo", zh: "行前、行中、行后全程陪伴", id: "Bersama Anda Sebelum, Selama & Sesudah", ms: "Bersama Anda Sebelum, Semasa & Selepas", pl: "Z Państwem przed, w trakcie i po rejsie", bg: "С Вас преди, по време и след това", ro: "Cu Dumneavoastră Înainte, În Timpul și După", uk: "З Вами до, під час і після", ja: "ご予約前・ご乗船中・ご利用後も安心サポート", ko: "투어 전, 중, 후 함께합니다", hi: "पहले, दौरान और बाद में आपके साथ", ur: "آپ کے ساتھ پہلے، دوران اور بعد میں"
  },
  "trust.sameday": {
    en: "Same-day Booking", tr: "Aynı Gün Rezervasyon", de: "Buchung am gleichen Tag",
    es: "Reserva el mismo día", ru: "Бронирование в тот же день", ar: "حجز في نفس اليوم",
    fa: "رزرو در همان روز", fr: "Réservation le jour même", it: "Prenotazione in giornata", zh: "当日预订", id: "Pemesanan Hari yang Sama", ms: "Tempahan Hari Sama", pl: "Rezerwacja tego samego dnia", bg: "Резервация за същия ден", ro: "Rezervare în Aceeași Zi", uk: "Бронювання в той же день", ja: "当日予約可能", ko: "당일 예약 가능", hi: "उसी दिन बुकिंग", ur: "اسی دن بکنگ"
  },

  // ========== BOATS ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunuzu Seçin", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите круиз", ar: "اختر رحلتك",
    fa: "تور خود را انتخاب کنید", fr: "Choisissez votre croisière", it: "Scelga la Sua crociera", zh: "选择您的游船", id: "Pilih Pelayaran Anda", ms: "Pilih Pelayaran Anda", pl: "Wybierz swój rejs", bg: "Изберете Вашия круиз", ro: "Alegeți Croaziera Dumneavoastră", uk: "Оберіть Ваш круїз", ja: "クルーズをお選びください", ko: "크루즈 선택", hi: "अपनी क्रूज चुनें", ur: "اپنی کروز منتخب کریں"
  },
  "boats.title": {
    en: "Select Your Boat", tr: "Teknenizi Seçin", de: "Boot wählen",
    es: "Selecciona tu barco", ru: "Выберите лодку", ar: "اختر قاربك",
    fa: "تجربه خود را انتخاب کنید", fr: "Choisissez votre expérience", it: "Scelga la Sua esperienza", zh: "选择您的体验", id: "Pilih Pengalaman Anda", ms: "Pilih Pengalaman Anda", pl: "Wybierz swoje doświadczenie", bg: "Изберете Вашето преживяване", ro: "Alegeți Experiența Dumneavoastră", uk: "Оберіть Свій Досвід", ja: "お好みの体験をお選びください", ko: "원하시는 경험을 선택하세요", hi: "अपना अनुभव चुनें", ur: "اپنا تجربہ منتخب کریں"
  },
  "boats.desc": {
    en: "Each vessel offers a unique experience on the Bosphorus. Choose the one that fits your style.",
    tr: "Her tekne Boğaz'da eşsiz bir deneyim sunar. Tarzınıza uygun olanı seçin.",
    de: "Jedes Boot bietet ein besonderes Erlebnis am Bosporus. Wählen Sie Ihren Stil.",
    es: "Cada embarcación ofrece una experiencia única en el Bósforo. Elige la que se adapte a tu estilo.",
    ru: "Каждое судно предлагает уникальный опыт на Босфоре. Выберите то, что подходит вам.",
    ar: "كل قارب يقدم تجربة فريدة على البوسفور. اختر ما يناسب ذوقك.",
    fa: "تجربه‌ای متناسب با حال و هوای خود روی بسفر را انتخاب کنید.", fr: "Choisissez l'expérience qui correspond à votre humeur sur le Bosphore.", it: "Scelga l'esperienza più adatta al Suo umore sul Bosforo.", zh: "挑选最契合您博斯普鲁斯心情的体验。", id: "Pilih pengalaman yang sesuai dengan suasana hati Anda di Bosphorus.", ms: "Pilih pengalaman yang sesuai dengan mood anda di Bosphorus.", pl: "Wybierz doświadczenie, które pasuje do Państwa nastroju nad Bosforem.", bg: "Изберете преживяването, което подхожда на настроението Ви на Босфора.", ro: "Alegeți experiența care se potrivește stării dumneavoastră pe Bosfor.", uk: "Виберіть досвід, який відповідає Вашому настрою на Босфорі.", ja: "Bosphorusでの気分に合った体験をお選びいただけます。", ko: "보스포러스에서 귀하의 기분에 맞는 경험을 선택하시기 바랍니다.", hi: "बोस्फोरस पर अपने मूड के अनुसार अनुभव चुनें।", ur: "باسفورس پر اپنے موڈ کے مطابق تجربہ منتخب کریں۔"
  },
  "boats.classic": {
    en: "Classic Cruise", tr: "Klasik Tur", de: "Klassische Tour",
    es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية",
    fa: "تور کلاسیک", fr: "Croisière Classique", it: "Crociera Classica", zh: "经典游船", id: "Pelayaran Klasik", ms: "Pelayaran Klasik", pl: "Klasyczny rejs", bg: "Класически круиз", ro: "Croazieră Clasică", uk: "Класичний круїз", ja: "クラシッククルーズ", ko: "클래식 크루즈", hi: "क्लासिक क्रूज़", ur: "کلاسک کروز"
  },
  "boats.classic.desc": {
    en: "A wonderful Bosphorus dinner experience with live entertainment and stunning views.",
    tr: "Canlı eğlence ve muhteşem manzara eşliğinde harika bir Boğaz yemek deneyimi.",
    de: "Ein tolles Bosporus-Dinner mit Live-Show und toller Aussicht.",
    es: "Una maravillosa experiencia de cena en el Bósforo con entretenimiento en vivo y vistas impresionantes.",
    ru: "Прекрасный ужин на Босфоре с живой музыкой и потрясающими видами.",
    ar: "تجربة عشاء رائعة على البوسفور مع ترفيه حي ومناظر خلابة.",
    fa: "تجربه‌ای دل‌نشین از شام در بسفر همراه با سرگرمی زنده و مناظر خیره‌کننده.", fr: "Un merveilleux dîner sur le Bosphore avec divertissement en direct et vues éblouissantes.", it: "Una splendida cena sul Bosforo con intrattenimento dal vivo e vedute mozzafiato.", zh: "一场美妙的博斯普鲁斯晚宴体验，配有现场娱乐与令人惊叹的景色。", id: "Pengalaman makan malam Bosphorus yang menakjubkan dengan hiburan langsung dan pemandangan yang memukau.", ms: "Pengalaman makan malam Bosphorus yang indah dengan hiburan langsung dan pemandangan mengagumkan.", pl: "Wspaniałe doświadczenie kolacji nad Bosforem z rozrywką na żywo i zapierającymi dech w piersiach widokami.", bg: "Прекрасна вечеря по Босфора със забавление на живо и зашеметяващи гледки.", ro: "O minunată experiență de cină pe Bosfor cu divertisment live și priveliști uimitoare.", uk: "Чудовий круїз по Босфору з вечерею, живими виступами та приголомшливими краєвидами.", ja: "ライブエンターテイメントと素晴らしい景色を楽しむ、心に残るボスポラス海峡ディナー体験です。", ko: "라이브 공연과 멋진 전망이 함께하는 환상적인 Bosphorus 디너 경험입니다.", hi: "लाइव मनोरंजन और शानदार दृश्यों के साथ एक अद्भुत Bosphorus डिनर अनुभव।", ur: "لائیو تفریح اور شاندار مناظر کے ساتھ ایک شاندار باسفورس ڈنر کا تجربہ۔"
  },
  "boats.premium": {
    en: "Premium Cruise", tr: "Premium Cruise", de: "Premium-Tour",
    es: "Crucero Premium", ru: "Премиум круиз", ar: "رحلة مميزة",
    fa: "تور پرمیوم", fr: "Croisière Premium", it: "Crociera Premium", zh: "高级游船", id: "Pelayaran Premium", ms: "Pelayaran Premium", pl: "Rejs premium", bg: "Премиум круиз", ro: "Croazieră Premium", uk: "Преміум круїз", ja: "プレミアムクルーズ", ko: "프리미엄 크루즈", hi: "प्रीमियम क्रूज़", ur: "پریمیم کروز"
  },
  "boats.premium.desc": {
    en: "Enhanced comfort with better seating, premium service, and a more exclusive atmosphere.",
    tr: "Daha iyi oturma düzeni, premium hizmet ve daha özel bir atmosfer.",
    de: "Mehr Komfort, bessere Plätze, Premium-Service und exklusive Atmosphäre.",
    es: "Mayor comodidad con mejores asientos, servicio premium y una atmósfera más exclusiva.",
    ru: "Повышенный комфорт с лучшими местами, премиум-сервисом и эксклюзивной атмосферой.",
    ar: "راحة محسّنة مع مقاعد أفضل وخدمة مميزة وأجواء حصرية.",
    fa: "راحتی بیشتر با جایگاه بهتر، خدمات ممتاز و فضایی اختصاصی‌تر.", fr: "Confort rehaussé avec un meilleur placement, un service premium et une atmosphère plus exclusive.", it: "Maggior comfort con posti a sedere migliori, servizio premium e un'atmosfera più esclusiva.", zh: "更舒适的体验——更佳座席、优质服务，以及更尊享的氛围。", id: "Kenyamanan yang ditingkatkan dengan tempat duduk lebih baik, layanan premium, dan suasana yang lebih eksklusif.", ms: "Keselesaan ditingkatkan dengan tempat duduk lebih baik, perkhidmatan premium dan suasana lebih eksklusif.", pl: "Podwyższony komfort z lepszymi miejscami, obsługą premium i bardziej ekskluzywną atmosferą.", bg: "Подобрен комфорт с по-добри места, премиум обслужване и по-ексклузивна атмосфера.", ro: "Confort sporit cu locuri mai bune, serviciu premium și o atmosferă mai exclusivistă.", uk: "Підвищений комфорт з кращими місцями, преміум сервісом та більш ексклюзивною атмосферою.", ja: "より快適な座席、上質なサービス、そして特別な雰囲気でワンランク上の体験をお楽しみいただけます。", ko: "더 나은 좌석, 프리미엄 서비스, 그리고 보다 특별한 분위기로 향상된 편안함을 제공합니다.", hi: "बेहतर बैठने की व्यवस्था, प्रीमियम सेवा और अधिक विशिष्ट माहौल के साथ उन्नत आराम।", ur: "بہتر نشستوں، پریمیم سروس، اور زیادہ خصوصی ماحول کے ساتھ بہتر آرام۔"
  },
  "boats.luxury": {
    en: "Luxury Yacht", tr: "Lüks Yat", de: "Luxus-Yacht",
    es: "Yate de Lujo", ru: "Люкс яхта", ar: "يخت فاخر",
    fa: "کشتی لوکس", fr: "Yacht de Luxe", it: "Yacht di Lusso", zh: "豪华游艇", id: "Yacht Mewah", ms: "Yacht Mewah", pl: "Jacht luksusowy", bg: "Луксозна яхта", ro: "Iaht de Lux", uk: "Розкішна яхта", ja: "ラグジュアリーヨット", ko: "럭셔리 요트", hi: "लग्जरी यॉट", ur: "لگژری یاٹ"
  },
  "boats.luxury.desc": {
    en: "The ultimate Bosphorus experience. Intimate setting, top-tier cuisine, and VIP treatment.",
    tr: "En üst düzey Boğaz deneyimi. Özel ortam, birinci sınıf mutfak ve VIP hizmet.",
    de: "Das beste Bosporus-Erlebnis. Exklusive Atmosphäre, Top-Küche und VIP-Service.",
    es: "La experiencia definitiva en el Bósforo. Ambiente íntimo, cocina de primera y trato VIP.",
    ru: "Лучший опыт на Босфоре. Уютная обстановка, кухня высшего уровня и VIP-обслуживание.",
    ar: "التجربة المطلقة على البوسفور. أجواء حميمة ومأكولات راقية ومعاملة VIP.",
    fa: "نهایت تجربه بسفر. فضایی صمیمی، آشپزی درجه‌یک و خدمات VIP.", fr: "L'expérience ultime du Bosphore. Cadre intime, cuisine haut de gamme et traitement VIP.", it: "L'esperienza definitiva sul Bosforo. Ambiente intimo, alta cucina e trattamento VIP.", zh: "终极博斯普鲁斯体验。私密氛围、顶级美食、VIP待遇。", id: "Pengalaman Bosphorus tertinggi. Suasana intim, masakan kelas atas, dan layanan VIP.", ms: "Pengalaman Bosphorus yang paling hebat. Suasana intim, masakan bertaraf tinggi dan layanan VIP.", pl: "Najwyższe doświadczenie Bosforu. Kameralna atmosfera, kuchnia najwyższej klasy i obsługa VIP.", bg: "Върховното преживяване по Босфора. Интимна обстановка, първокласна кухня и VIP обслужване.", ro: "Experiența supremă pe Bosfor. Cadru intim, bucătărie de top și tratament VIP.", uk: "Найкращий досвід Босфору. Камерна обстановка, кухня найвищого рівня та VIP обслуговування.", ja: "最高級のボスポラス海峡体験。プライベートな空間、一流の料理、VIPサービスをご提供いたします。", ko: "최고의 Bosphorus 경험입니다. 친밀한 환경, 최상급 요리, 그리고 VIP 대우를 받으실 수 있습니다.", hi: "अंतिम Bosphorus अनुभव। अंतरंग माहौल, उच्च स्तरीय व्यंजन और VIP सेवा।", ur: "باسفورس کا حتمی تجربہ۔ مخصوص ماحول، اعلیٰ درجے کا کھانا، اور VIP سلوک۔"
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →",
    es: "Ver paquetes →", ru: "Смотреть пакеты →", ar: "← عرض الباقات",
    fa: "مشاهده پکیج‌ها ←", fr: "Voir les forfaits →", it: "Vedi i pacchetti →", zh: "查看套餐 →", id: "Lihat Paket →", ms: "Lihat Pakej →", pl: "Zobacz pakiety →", bg: "Вижте пакетите →", ro: "Vedeți Pachetele →", uk: "Переглянути Пакети →", ja: "パッケージを見る →", ko: "패키지 보기 →", hi: "पैकेज देखें →", ur: "پیکجز دیکھیں ←"
  },
  "boats.mostpopular": {
    en: "Most Popular", tr: "En Popüler", de: "Beliebteste",
    es: "Más Popular", ru: "Самый популярный", ar: "الأكثر شعبية",
    fa: "محبوب‌ترین", fr: "Le plus populaire", it: "Più Popolare", zh: "最受欢迎", id: "Paling Populer", ms: "Paling Popular", pl: "Najpopularniejszy", bg: "Най-популярен", ro: "Cel Mai Popular", uk: "Найпопулярніший", ja: "人気No.1", ko: "가장 인기 있는", hi: "सबसे लोकप्रिय", ur: "سب سے مقبول"
  },
  "boats.from": {
    en: "from", tr: "başlangıç", de: "ab", es: "desde", ru: "от", ar: "من",
    fa: "از", fr: "à partir de", it: "da", zh: "起", id: "mulai", ms: "dari", pl: "od", bg: "от", ro: "de la", uk: "від", ja: "〜", ko: "부터", hi: "से", ur: "سے"
  },

  // ========== PACKAGES ==========
  "pkg.choose": {
    en: "Choose Your Package", tr: "Paketinizi Seçin", de: "Paket wählen",
    es: "Elige tu paquete", ru: "Выберите пакет", ar: "اختر باقتك",
    fa: "پکیج خود را انتخاب کنید", fr: "Choisissez votre forfait", it: "Scelga il Suo pacchetto", zh: "选择您的套餐", id: "Pilih Paket Anda", ms: "Pilih Pakej Anda", pl: "Wybierz swój pakiet", bg: "Изберете Вашия пакет", ro: "Alegeți Pachetul Dumneavoastră", uk: "Оберіть Ваш Пакет", ja: "プランをお選びください", ko: "패키지를 선택하세요", hi: "अपना पैकेज चुनें", ur: "اپنا پیکیج منتخب کریں"
  },
  "pkg.standard": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "عادي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard", uk: "Стандарт", ja: "スタンダード", ko: "스탠다드", hi: "Standard", ur: "اسٹینڈرڈ"
  },
  "pkg.premium": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "مميز",
    fa: "پرمیوم", fr: "Premium", it: "Premium", zh: "高级", id: "Premium", ms: "Premium", pl: "Premium", bg: "Премиум", ro: "Premium", uk: "Преміум", ja: "プレミアム", ko: "프리미엄", hi: "Premium", ur: "پریمیم"
  },
  "pkg.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP", uk: "VIP", ja: "VIP", ko: "VIP", hi: "VIP", ur: "VIP"
  },
  "pkg.bestvalue": {
    en: "Best Value", tr: "En İyi Değer", de: "Bester Wert", es: "Mejor Valor",
    ru: "Лучшее предложение", ar: "أفضل قيمة",
    fa: "بهترین ارزش", fr: "Meilleur rapport qualité-prix", it: "Miglior Rapporto", zh: "最超值", id: "Nilai Terbaik", ms: "Nilai Terbaik", pl: "Najlepsza wartość", bg: "Най-добра стойност", ro: "Cel Mai Bun Raport", uk: "Найкраща Пропозиція", ja: "最もお得", ko: "최고 가치", hi: "सबसे बेहतर मूल्य", ur: "بہترین ویلیو"
  },
  "pkg.person": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ человек", ar: "/ شخص",
    fa: "/ نفر", fr: "/ personne", it: "/ persona", zh: "／人", id: "/ orang", ms: "/ orang", pl: "/ osoba", bg: "/ човек", ro: "/ persoană", uk: "/ особа", ja: "/ お一人様", ko: "/ 인", hi: "/ प्रति व्यक्ति", ur: "/ فی شخص"
  },
  "pkg.book": {
    en: "Book on WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen",
    es: "Reservar en WhatsApp", ru: "Забронировать в WhatsApp", ar: "احجز عبر واتساب",
    fa: "رزرو در واتس‌اپ", fr: "Réserver sur WhatsApp", it: "Prenota su WhatsApp", zh: "通过WhatsApp预订", id: "Pesan via WhatsApp", ms: "Tempah di WhatsApp", pl: "Zarezerwuj na WhatsApp", bg: "Резервирайте в WhatsApp", ro: "Rezervați pe WhatsApp", uk: "Забронювати через WhatsApp", ja: "WhatsAppで予約", ko: "WhatsApp으로 예약하기", hi: "WhatsApp पर बुक करें", ur: "WhatsApp پر بک کریں"
  },
  "pkg.select": {
    en: "Select & Customize", tr: "Seç & Özelleştir", de: "Wählen & Anpassen",
    es: "Seleccionar & Personalizar", ru: "Выбрать и настроить", ar: "اختر وخصّص",
    fa: "انتخاب و شخصی‌سازی", fr: "Sélectionner & personnaliser", it: "Seleziona e Personalizza", zh: "选择与定制", id: "Pilih & Sesuaikan", ms: "Pilih & Sesuaikan", pl: "Wybierz i dostosuj", bg: "Избор и персонализация", ro: "Selectați și Personalizați", uk: "Обрати та Налаштувати", ja: "選択してカスタマイズ", ko: "선택 및 맞춤 설정", hi: "चुनें और अनुकूलित करें", ur: "منتخب کریں اور اپنی پسند کے مطابق بنائیں"
  },

  // Package features
  "pkg.f.cruise": {
    en: "3-hour Bosphorus night cruise", tr: "3 saatlik Boğaz gece turu",
    de: "3-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3 horas por el Bósforo",
    ru: "3-часовой ночной круиз по Босфору", ar: "رحلة بحرية ليلية لمدة 3 ساعات",
    fa: "تور شبانه سه‌ساعته بسفر", fr: "Croisière nocturne de 3 heures sur le Bosphore", it: "Crociera notturna sul Bosforo di 3 ore", zh: "3小时博斯普鲁斯夜游", id: "Pelayaran malam Bosphorus 3 jam", ms: "Pelayaran malam Bosphorus 3 jam", pl: "3-godzinny nocny rejs po Bosforze", bg: "3-часов нощен круиз по Босфора", ro: "Croazieră nocturnă de 3 ore pe Bosfor", uk: "3-годинний нічний круїз Босфором", ja: "3時間のボスポラス海峡ナイトクルーズ", ko: "3시간 Bosphorus 야간 크루즈", hi: "3 घंटे की Bosphorus नाइट क्रूज़", ur: "3 گھنٹے کی Bosphorus نائٹ کروز"
  },
  "pkg.f.dinner": {
    en: "Dinner — 10 meze + main course + dessert", tr: "Yemek — 10 meze + ana yemek + tatlı",
    de: "Abendessen — 10 Meze + Hauptgericht + Dessert", es: "Cena — 10 meze + plato principal + postre",
    ru: "Ужин — 7 мезе + основное блюдо + десерт", ar: "عشاء — 10 مقبلات + طبق رئيسي + حلوى",
    fa: "شام — ۱۰ نوع مزه + غذای اصلی + دسر", fr: "Dîner — 10 mezzés + plat principal + dessert", it: "Cena — 10 meze + secondo + dolce", zh: "晚宴——10道冷盘+主菜+甜点", id: "Makan malam — 10 meze + menu utama + pencuci mulut", ms: "Makan malam — 10 meze + hidangan utama + pencuci mulut", pl: "Kolacja — 10 mezze + danie główne + deser", bg: "Вечеря — 10 мезета + основно ястие + десерт", ro: "Cină — 10 mezeluri + fel principal + desert", uk: "Вечеря — 10 мезе + основна страва + десерт", ja: "ディナー — メゼ10種+メインコース+デザート", ko: "저녁 식사 — 메제 10가지 + 메인 요리 + 디저트", hi: "डिनर — 10 मेज़े + मुख्य व्यंजन + मिठाई", ur: "ڈنر — 10 میزے + مین کورس + ڈیزرٹ"
  },
  "pkg.f.dinner.vip": {
    en: "VIP dinner — mixed grill platter, premium cuts", tr: "VIP yemek — karışık ızgara tabağı, premium etler",
    de: "VIP-Dinner — Mixed Grill, Premium-Fleisch", es: "Cena VIP — parrillada mixta, cortes premium",
    ru: "VIP ужин — ассорти гриль, премиум мясо", ar: "عشاء VIP — طبق مشويات مشكلة، لحوم فاخرة",
    fa: "شام VIP — سینی گریل مخلوط، برش‌های ممتاز", fr: "Dîner VIP — plateau de grillades, pièces premium", it: "Cena VIP — piatto misto alla griglia, tagli premium", zh: "VIP晚宴——混合烤肉拼盘、尊享部位", id: "Makan malam VIP — piring mixed grill, potongan daging premium", ms: "Makan malam VIP — pinggan panggangan campuran, potongan premium", pl: "Kolacja VIP — półmisek mieszany, premium kawałki mięsa", bg: "VIP вечеря — микс грил плато, премиум разфасовки", ro: "Cină VIP — platou mixt la grătar, carne premium", uk: "VIP вечеря — асорті гриль, преміум нарізки", ja: "VIPディナー — ミックスグリルプラッター、プレミアムカット", ko: "VIP 저녁 식사 — 믹스 그릴 플래터, 프리미엄 컷", hi: "VIP डिनर — मिक्स्ड ग्रिल प्लैटर, प्रीमियम कट्स", ur: "VIP ڈنر — مکسڈ گرل پلیٹر، پریمیم کٹس"
  },
  "pkg.f.entertainment": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu",
    de: "Live-Show & Türkische Nacht", es: "Entretenimiento en vivo y show de noche turca",
    ru: "Живые шоу и турецкая ночь", ar: "ترفيه حي وعرض الليلة التركية",
    fa: "سرگرمی زنده و نمایش شب ترکی", fr: "Divertissement en direct & soirée turque", it: "Intrattenimento dal vivo e spettacolo turco serale", zh: "现场娱乐与土耳其之夜表演", id: "Hiburan langsung & pertunjukan malam Turki", ms: "Hiburan langsung & persembahan malam Turki", pl: "Rozrywka na żywo i turecki pokaz nocny", bg: "Забавление на живо и турска нощна програма", ro: "Divertisment live și spectacol de seară turcească", uk: "Живі виступи та турецьке нічне шоу", ja: "生演奏&トルコナイトショー", ko: "라이브 엔터테인먼트 & 터키 나이트 쇼", hi: "लाइव मनोरंजन और तुर्की नाइट शो", ur: "لائیو انٹرٹینمنٹ اور ترکی نائٹ شو"
  },
  "pkg.f.seat.standard": {
    en: "Standard seating", tr: "Standart oturma düzeni", de: "Standard-Sitzplatz",
    es: "Asientos estándar", ru: "Стандартные места", ar: "مقاعد عادية",
    fa: "جایگاه استاندارد", fr: "Placement standard", it: "Posti a sedere standard", zh: "标准座席", id: "Tempat duduk standar", ms: "Tempat duduk standard", pl: "Miejsca standardowe", bg: "Стандартни места", ro: "Locuri standard", uk: "Стандартні місця", ja: "スタンダード席", ko: "스탠다드 좌석", hi: "Standard सीटिंग", ur: "اسٹینڈرڈ سیٹنگ"
  },
  "pkg.f.seat.better": {
    en: "Better seating — closer to stage", tr: "Daha iyi oturma — sahneye yakın",
    de: "Bessere Plätze — näher zur Bühne", es: "Mejores asientos — más cerca del escenario",
    ru: "Лучшие места — ближе к сцене", ar: "مقاعد أفضل — أقرب إلى المسرح",
    fa: "جایگاه بهتر — نزدیک‌تر به صحنه", fr: "Meilleur placement — plus près de la scène", it: "Posti a sedere migliori — più vicino al palco", zh: "更佳座席——靠近舞台", id: "Tempat duduk lebih baik — lebih dekat ke panggung", ms: "Tempat duduk lebih baik — lebih dekat ke pentas", pl: "Lepsze miejsca — bliżej sceny", bg: "По-добри места — по-близо до сцената", ro: "Locuri mai bune — mai aproape de scenă", uk: "Кращі місця — ближче до сцени", ja: "優良席 — ステージに近い", ko: "우수 좌석 — 무대와 더 가까움", hi: "बेहतर सीटिंग — मंच के करीब", ur: "بہتر سیٹنگ — اسٹیج کے قریب"
  },
  "pkg.f.seat.premium": {
    en: "Premium table — best location", tr: "Premium masa — en iyi konum",
    de: "Premium-Tisch — beste Lage", es: "Mesa premium — mejor ubicación",
    ru: "Премиум стол — лучшее расположение", ar: "طاولة مميزة — أفضل موقع",
    fa: "میز ممتاز — بهترین موقعیت", fr: "Table premium — meilleur emplacement", it: "Tavolo premium — miglior posizione", zh: "高级餐桌——最佳位置", id: "Meja premium — lokasi terbaik", ms: "Meja premium — lokasi terbaik", pl: "Stół premium — najlepsza lokalizacja", bg: "Премиум маса — най-доброто място", ro: "Masă premium — cea mai bună locație", uk: "Преміум столик — найкраще розташування", ja: "プレミアムテーブル — 最高のロケーション", ko: "프리미엄 테이블 — 최고의 위치", hi: "Premium टेबल — सबसे अच्छा स्थान", ur: "پریمیم ٹیبل — بہترین لوکیشن"
  },
  "pkg.f.softdrinks": {
    en: "Soft drinks included", tr: "Alkolsüz içecekler dahil",
    de: "Softdrinks inklusive", es: "Bebidas sin alcohol incluidas",
    ru: "Безалкогольные напитки включены", ar: "مشروبات غازية مشمولة",
    fa: "نوشیدنی‌های بدون‌الکل شامل می‌شود", fr: "Boissons non alcoolisées incluses", it: "Bevande analcoliche incluse", zh: "含软饮", id: "Minuman ringan termasuk", ms: "Minuman ringan termasuk", pl: "Napoje bezalkoholowe wliczone", bg: "Безалкохолни напитки включени", ro: "Băuturi răcoritoare incluse", uk: "Безалкогольні напої включено", ja: "ソフトドリンク込み", ko: "소프트 드링크 포함", hi: "सॉफ्ट ड्रिंक्स शामिल", ur: "سافٹ ڈرنکس شامل ہیں"
  },
  "pkg.f.vegetarian": {
    en: "Vegetarian menu available", tr: "Vejetaryen menü mevcut",
    de: "Vegetarisches Menü möglich", es: "Menú vegetariano disponible",
    ru: "Вегетарианское меню доступно", ar: "قائمة نباتية متاحة",
    fa: "منوی گیاه‌خواری در دسترس", fr: "Menu végétarien disponible", it: "Menu vegetariano disponibile", zh: "可提供素食菜单", id: "Menu vegetarian tersedia", ms: "Menu vegetarian tersedia", pl: "Menu wegetariańskie dostępne", bg: "Вегетарианско меню при заявка", ro: "Meniu vegetarian disponibil", uk: "Доступне вегетаріанське меню", ja: "ベジタリアンメニューご用意可能", ko: "채식 메뉴 제공", hi: "शाकाहारी मेन्यू उपलब्ध", ur: "ویجیٹیرین مینو دستیاب ہے"
  },
  "pkg.f.vip.priority": {
    en: "Priority boarding & VIP treatment", tr: "Öncelikli biniş & VIP hizmet",
    de: "Bevorzugter Einstieg & VIP-Service", es: "Embarque prioritario y trato VIP",
    ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود ومعاملة VIP",
    fa: "سوار شدن با اولویت و خدمات VIP", fr: "Embarquement prioritaire & traitement VIP", it: "Imbarco prioritario e trattamento VIP", zh: "优先登船与VIP待遇", id: "Naik kapal prioritas & layanan VIP", ms: "Keutamaan menaiki bot & layanan VIP", pl: "Priorytetowe wejście na pokład i obsługa VIP", bg: "Приоритетно качване и VIP обслужване", ro: "Îmbarcare prioritară și tratament VIP", uk: "Пріоритетна посадка та VIP обслуговування", ja: "優先乗船&VIP待遇", ko: "우선 탑승 & VIP 대우", hi: "प्राथमिकता बोर्डिंग और VIP ट्रीटमेंट", ur: "ترجیحی بورڈنگ اور VIP ٹریٹمنٹ"
  },
  "pkg.opt.standard": {
    en: "Optional: Alcohol +€{p.unlimited} · Transfer +€{p.transfer} · Romantic table +€{p.romantic}",
    tr: "Opsiyonel: Alkol +€{p.unlimited} · Transfer +€{p.transfer} · Romantik masa +€{p.romantic}",
    de: "Optional: Alkohol +€{p.unlimited} · Transfer +€{p.transfer} · Romantik-Tisch +€{p.romantic}",
    es: "Opcional: Alcohol +€{p.unlimited} · Traslado +€{p.transfer} · Mesa romántica +€{p.romantic}",
    ru: "Опционально: Алкоголь +€{p.unlimited} · Трансфер +€{p.transfer} · Романтический стол +€{p.romantic}",
    ar: "اختياري: مشروبات كحولية +€{p.unlimited} · نقل +€{p.transfer} · طاولة رومانسية +€{p.romantic}",
    fa: "اختیاری: الکل +€{p.unlimited} · ترانسفر +€{p.transfer} · میز رمانتیک +€{p.romantic}", fr: "En option : Alcool +€{p.unlimited} · Transfert +€{p.transfer} · Table romantique +€{p.romantic}", it: "Opzionale: Alcol +€{p.unlimited} · Transfer +€{p.transfer} · Tavolo romantico +€{p.romantic}", zh: "可选：酒水+€{p.unlimited} · 接送+€{p.transfer} · 浪漫餐桌+€{p.romantic}", id: "Opsional: Alkohol +€{p.unlimited} · Antar-jemput +€{p.transfer} · Meja romantis +€{p.romantic}", ms: "Pilihan: Alkohol +€{p.unlimited} · Pemindahan +€{p.transfer} · Meja romantik +€{p.romantic}", pl: "Opcjonalnie: Alkohol +€{p.unlimited} · Transfer +€{p.transfer} · Stół romantyczny +€{p.romantic}", bg: "По избор: Алкохол +€{p.unlimited} · Трансфер +€{p.transfer} · Романтична маса +€{p.romantic}", ro: "Opțional: Alcool +€{p.unlimited} · Transfer +€{p.transfer} · Masă romantică +€{p.romantic}", uk: "Опціонально: Алкоголь +€{p.unlimited} &middot; Трансфер +€{p.transfer} &middot; Романтичний столик +€{p.romantic}", ja: "オプション: アルコール +€{p.unlimited} &middot; 送迎 +€{p.transfer} &middot; ロマンチックテーブル +€{p.romantic}", ko: "선택 사항: 주류 +€{p.unlimited} &middot; 차량 이동 +€{p.transfer} &middot; 로맨틱 테이블 +€{p.romantic}", hi: "वैकल्पिक: एल्कोहल +€{p.unlimited} &middot; ट्रांसफर +€{p.transfer} &middot; रोमांटिक टेबल +€{p.romantic}", ur: "اختیاری: الکوحل +€{p.unlimited} &middot; ٹرانسفر +€{p.transfer} &middot; رومانٹک ٹیبل +€{p.romantic}"
  },
  "pkg.opt.vip": {
    en: "Optional: Alcohol +€{p.unlimited} · Transfer +€{p.transfer}",
    tr: "Opsiyonel: Alkol +€{p.unlimited} · Transfer +€{p.transfer}",
    de: "Optional: Alkohol +€{p.unlimited} · Transfer +€{p.transfer}",
    es: "Opcional: Alcohol +€{p.unlimited} · Traslado +€{p.transfer}",
    ru: "Опционально: Алкоголь +€{p.unlimited} · Трансфер +€{p.transfer}",
    ar: "اختياري: مشروبات كحولية +€{p.unlimited} · نقل +€{p.transfer}",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP", uk: "VIP", ja: "VIP", ko: "VIP", hi: "VIP", ur: "VIP"
  },
  "pkg.children": {
    en: "Children 0–3: Free · 4–8: 50% off · 9+: Full price · No prepayment required",
    tr: "Çocuklar 0–3: Ücretsiz · 4–8: %50 indirim · 9+: Tam fiyat · Ön ödeme gerekmez",
    de: "Kinder 0–3: Gratis · 4–8: 50% Rabatt · 9+: Vollpreis · Keine Vorauszahlung",
    es: "Niños 0–3: Gratis · 4–8: 50% dto. · 9+: Precio completo · Sin prepago",
    ru: "Дети 0–3: Бесплатно · 4–8: Скидка 50% · 9+: Полная цена · Без предоплаты",
    ar: "الأطفال 0-3: مجاناً · 4-8: خصم 50% · 9+: السعر الكامل · بدون دفع مسبق",
    fa: "کودکان ۰ تا ۳ سال: رایگان · ۴ تا ۸ سال: ۵۰٪ تخفیف · ۹ سال به بالا: قیمت کامل · بدون نیاز به پیش‌پرداخت", fr: "Enfants 0-3 ans : gratuit · 4-8 ans : -50 % · 9+ : tarif plein · Aucun prépaiement requis", it: "Bambini 0–3: Gratis · 4–8: 50% di sconto · 9+: Prezzo pieno · Nessun anticipo richiesto", zh: "儿童0–3岁：免费 · 4–8岁：半价 · 9岁以上：全价 · 无需预付", id: "Anak 0–3: Gratis · 4–8: Diskon 50% · 9+: Harga penuh · Tanpa pembayaran di muka", ms: "Kanak-kanak 0–3: Percuma · 4–8: Diskaun 50% · 9+: Harga penuh · Tiada bayaran pendahuluan diperlukan", pl: "Dzieci 0–3: bezpłatnie · 4–8: 50% zniżki · 9+: pełna cena · Bez przedpłaty", bg: "Деца 0–3: безплатно · 4–8: 50% отстъпка · 9+: пълна цена · Без предплащане", ro: "Copii 0–3: Gratuit · 4–8: 50% reducere · 9+: Preț întreg · Fără plată în avans", uk: "Діти 0–3: Безкоштовно · 4–8: Знижка 50% · 9+: Повна ціна · Передоплата не потрібна", ja: "お子様 0〜3歳: 無料 &middot; 4〜8歳: 50%割引 &middot; 9歳以上: 通常料金 &middot; 事前支払い不要", ko: "어린이 0–3세: 무료 &middot; 4–8세: 50% 할인 &middot; 9세+: 전체 가격 &middot; 선결제 불필요", hi: "बच्चे 0–3: निःशुल्क &middot; 4–8: 50% छूट &middot; 9+: पूर्ण मूल्य &middot; कोई पूर्व भुगतान आवश्यक नहीं", ur: "بچے 0–3: مفت &middot; 4–8: 50% چھوٹ &middot; 9+: مکمل قیمت &middot; پیشگی ادائیگی کی ضرورت نہیں"
  },

  // ========== WHAT'S INCLUDED ==========
  "incl.label": {
    en: "Your Experience", tr: "Deneyiminiz", de: "Ihr Erlebnis",
    es: "Tu Experiencia", ru: "Ваш опыт", ar: "تجربتك",
    fa: "تجربه شما", fr: "Votre expérience", it: "La Sua esperienza", zh: "您的体验", id: "Pengalaman Anda", ms: "Pengalaman Anda", pl: "Państwa doświadczenie", bg: "Вашето преживяване", ro: "Experiența Dumneavoastră", uk: "Ваші Враження", ja: "お客様の体験", ko: "귀하의 경험", hi: "आपका अनुभव", ur: "آپ کا تجربہ"
  },
  "incl.title": {
    en: "What's Included", tr: "Neler Dahil", de: "Was ist inklusive",
    es: "Qué incluye", ru: "Что включено", ar: "ما هو مشمول",
    fa: "آنچه شامل می‌شود", fr: "Ce qui est inclus", it: "Cosa è incluso", zh: "包含内容", id: "Apa yang Termasuk", ms: "Apa yang Termasuk", pl: "Co jest wliczone", bg: "Какво е включено", ro: "Ce Este Inclus", uk: "Що Включено", ja: "含まれるもの", ko: "포함 사항", hi: "क्या शामिल है", ur: "کیا شامل ہے"
  },
  "incl.cruise": {
    en: "Bosphorus Night Cruise", tr: "Boğaz Gece Turu", de: "Bosporus-Nachtfahrt",
    es: "Crucero Nocturno por el Bósforo", ru: "Ночной круиз по Босфору", ar: "رحلة بحرية ليلية",
    fa: "تور شبانه بسفر", fr: "Croisière nocturne sur le Bosphore", it: "Crociera notturna sul Bosforo", zh: "博斯普鲁斯夜游", id: "Pelayaran Malam Bosphorus", ms: "Pelayaran Malam Bosphorus", pl: "Nocny rejs po Bosforze", bg: "Нощен круиз по Босфора", ro: "Croazieră Nocturnă pe Bosfor", uk: "Босфор Найт Круїз (Bosphorus Night Cruise)", ja: "ボスポラス・ナイトクルーズ (Bosphorus Night Cruise)", ko: "보스포러스 나이트 크루즈 (Bosphorus Night Cruise)", hi: "बॉस्फोरस नाइट क्रूज़ (Bosphorus Night Cruise)", ur: "باسفورس نائٹ کروز (Bosphorus Night Cruise)"
  },
  "incl.cruise.desc": {
    en: "3-hour cruise with iconic Istanbul views", tr: "İstanbul'un ikonik manzaralarıyla 3 saatlik tur",
    de: "3-Stunden-Fahrt mit Blick auf Istanbul", es: "Crucero de 3 horas con vistas icónicas de Estambul",
    ru: "3-часовой круиз с видами Стамбула", ar: "رحلة 3 ساعات مع مناظر إسطنبول الأيقونية",
    fa: "تور سه‌ساعته با مناظر نمادین استانبول", fr: "Croisière de 3 heures avec des vues iconiques d'Istanbul", it: "Crociera di 3 ore con vedute iconiche di Istanbul", zh: "3小时游船，饱览伊斯坦布尔标志性景色", id: "Pelayaran 3 jam dengan pemandangan ikonik Istanbul", ms: "Pelayaran 3 jam dengan pemandangan ikonik Istanbul", pl: "3-godzinny rejs z kultowymi widokami Stambułu", bg: "3-часов круиз с емблематични гледки на Истанбул", ro: "Croazieră de 3 ore cu priveliști iconice ale Istanbulului", uk: "3-годинний круїз з культовими видами Стамбула (Istanbul)", ja: "イスタンブール (Istanbul) の象徴的な景色を楽しむ3時間のクルーズ", ko: "상징적인 이스탄불 (Istanbul) 전망과 함께하는 3시간 크루즈", hi: "प्रतिष्ठित इस्तांबुल (Istanbul) दृश्यों के साथ 3 घंटे की क्रूज़", ur: "3 گھنٹے کی کروز استنبول (Istanbul) کے شاندار مناظر کے ساتھ"
  },
  "incl.dinner": {
    en: "Full Dinner Service", tr: "Tam Yemek Servisi", de: "Abendessen komplett",
    es: "Servicio completo de cena", ru: "Полный ужин", ar: "خدمة عشاء كاملة",
    fa: "سرویس کامل شام", fr: "Service de dîner complet", it: "Servizio cena completo", zh: "完整晚宴服务", id: "Layanan Makan Malam Lengkap", ms: "Perkhidmatan Makan Malam Penuh", pl: "Pełna obsługa kolacyjna", bg: "Пълна вечеря", ro: "Serviciu Complet de Cină", uk: "Повна Вечеря", ja: "フルディナーサービス", ko: "정찬 서비스", hi: "सम्पूर्ण डिनर सेवा", ur: "مکمل ڈنر سروس"
  },
  "incl.dinner.desc": {
    en: "10 meze varieties, main course & dessert", tr: "10 çeşit meze, ana yemek & tatlı",
    de: "10 Meze-Sorten, Hauptgang & Dessert", es: "10 variedades de meze, plato principal y postre",
    ru: "10 видов мезе, основное блюдо и десерт", ar: "10 أنواع مقبلات، طبق رئيسي وحلوى",
    fa: "۱۰ نوع مزه، غذای اصلی و دسر", fr: "10 variétés de mezzés, plat principal & dessert", it: "10 varietà di meze, secondo e dolce", zh: "10道冷盘、主菜与甜点", id: "10 jenis meze, menu utama & pencuci mulut", ms: "10 jenis meze, hidangan utama & pencuci mulut", pl: "10 rodzajów mezze, danie główne i deser", bg: "10 вида мезета, основно ястие и десерт", ro: "10 sortimente de mezeluri, fel principal și desert", uk: "10 видів мезе, основна страва та десерт", ja: "メゼ10種、メインコース&デザート", ko: "메제 10가지, 메인 요리 & 디저트", hi: "10 मेज़े किस्में, मुख्य व्यंजन और मिठाई", ur: "10 قسم کے میزے، مین کورس اور ڈیزرٹ"
  },
  "incl.entertainment": {
    en: "Live Entertainment", tr: "Canlı Eğlence", de: "Live-Unterhaltung",
    es: "Entretenimiento en Vivo", ru: "Живые шоу", ar: "ترفيه حي",
    fa: "سرگرمی زنده", fr: "Divertissement en direct", it: "Intrattenimento dal vivo", zh: "现场娱乐", id: "Hiburan Langsung", ms: "Hiburan Langsung", pl: "Rozrywka na żywo", bg: "Забавление на живо", ro: "Divertisment Live", uk: "Живі Виступи", ja: "生演奏エンターテインメント", ko: "라이브 엔터테인먼트", hi: "लाइव मनोरंजन", ur: "لائیو انٹرٹینمنٹ"
  },
  "incl.entertainment.desc": {
    en: "Live singer, DJ & Turkish night dances", tr: "Canlı şarkıcı, DJ & Türk gecesi dansları",
    de: "Live-Sänger, DJ & türkische Tänze", es: "Cantante en vivo, DJ y danzas turcas",
    ru: "Живой певец, DJ и турецкие танцы", ar: "مغني حي، DJ ورقصات تركية",
    fa: "خواننده زنده، دی‌جی و رقص‌های شب ترکی", fr: "Chanteur en direct, DJ & danses de la soirée turque", it: "Cantante dal vivo, DJ e danze della serata turca", zh: "现场歌手、DJ与土耳其之夜歌舞", id: "Penyanyi langsung, DJ & tarian malam Turki", ms: "Penyanyi langsung, DJ & tarian malam Turki", pl: "Śpiewak na żywo, DJ i tureckie tańce nocne", bg: "Певец на живо, DJ и турски нощни танци", ro: "Cântăreț live, DJ și dansuri de seară turcească", uk: "Живий вокал, діджей та турецькі нічні танці", ja: "生歌、DJ&トルコナイトダンス", ko: "라이브 가수, DJ & 터키 나이트 댄스", hi: "लाइव गायक, DJ और तुर्की नाइट नृत्य", ur: "لائیو سنگر، DJ اور ترکی نائٹ ڈانسز"
  },
  "incl.transfer": {
    en: "Hotel Transfer", tr: "Otel Transferi", de: "Hoteltransfer",
    es: "Traslado al Hotel", ru: "Трансфер из отеля", ar: "نقل من الفندق",
    fa: "ترانسفر هتل", fr: "Transfert d'hôtel", it: "Transfer dall'hotel", zh: "酒店接送", id: "Antar-jemput Hotel", ms: "Pemindahan Hotel", pl: "Transfer z hotelu", bg: "Хотелски трансфер", ro: "Transfer de la Hotel", uk: "Трансфер з Готелю", ja: "ホテル送迎", ko: "호텔 차량 이동", hi: "होटल ट्रांसफर", ur: "ہوٹل ٹرانسفر"
  },
  "incl.transfer.desc": {
    en: "Optional pickup & drop-off from your hotel", tr: "Opsiyonel otel alım & bırakım",
    de: "Optionale Abholung & Rückfahrt zum Hotel", es: "Recogida y devolución opcional desde tu hotel",
    ru: "Опциональный трансфер из/в отель", ar: "خدمة نقل اختيارية من وإلى فندقك",
    fa: "رفت و برگشت اختیاری از هتل شما", fr: "Prise en charge et dépose optionnelles depuis votre hôtel", it: "Prelievo e riconsegna opzionali dal Suo hotel", zh: "可选酒店往返接送服务", id: "Penjemputan & pengantaran opsional dari hotel Anda", ms: "Perkhidmatan ambil & hantar pilihan dari hotel anda", pl: "Opcjonalny odbiór i odwiezienie z hotelu", bg: "Опционално вземане и връщане от хотела", ro: "Preluare și ducere opțională de la hotelul dumneavoastră", uk: "Додатковий трансфер з Вашого готелю та назад", ja: "ホテルからの送迎サービス(オプション)", ko: "호텔 픽업 및 샌딩 서비스 선택 가능", hi: "आपके होटल से वैकल्पिक पिकअप और ड्रॉप-ऑफ", ur: "آپ کے ہوٹل سے اختیاری پک اپ اور ڈراپ آف"
  },
  "incl.support": {
    en: "7/24 Support", tr: "7/24 Destek", de: "24/7 Support",
    es: "Soporte 24/7", ru: "Поддержка 24/7", ar: "دعم على مدار الساعة",
    fa: "پشتیبانی ۲۴/۷", fr: "Assistance 7j/7 24h/24", it: "Supporto 7/24", zh: "7/24支持", id: "Dukungan 7/24", ms: "Sokongan 7/24", pl: "Wsparcie 24/7", bg: "Поддръжка 24/7", ro: "Asistență 7/24", uk: "Підтримка 7/24", ja: "7/24サポート", ko: "7/24 지원", hi: "7/24 सहायता", ur: "24/7 سپورٹ"
  },
  "incl.support.desc": {
    en: "Instant support anytime", tr: "Her an anlık destek",
    de: "Sofortiger Support rund um die Uhr", es: "Soporte instantáneo en cualquier momento",
    ru: "Мгновенная поддержка в любое время", ar: "دعم فوري في أي وقت",
    fa: "پشتیبانی فوری در هر زمان", fr: "Assistance instantanée à tout moment", it: "Supporto istantaneo in qualsiasi momento", zh: "随时即时支持", id: "Dukungan instan kapan saja", ms: "Sokongan segera pada bila-bila masa", pl: "Natychmiastowe wsparcie o każdej porze", bg: "Мигновена поддръжка по всяко време", ro: "Asistență instant oricând", uk: "Миттєва підтримка у будь-який час", ja: "いつでも即座にサポート対応", ko: "언제든지 즉시 지원", hi: "किसी भी समय तत्काल सहायता", ur: "کسی بھی وقت فوری معاونت"
  },
  "incl.special": {
    en: "Special Occasions", tr: "Özel Günler", de: "Besondere Anlässe",
    es: "Ocasiones Especiales", ru: "Особые случаи", ar: "مناسبات خاصة",
    fa: "مناسبت‌های ویژه", fr: "Occasions spéciales", it: "Occasioni speciali", zh: "特别场合", id: "Acara Spesial", ms: "Majlis Istimewa", pl: "Specjalne okazje", bg: "Специални поводи", ro: "Ocazii Speciale", uk: "Особливі події", ja: "特別な記念日", ko: "특별한 기념일", hi: "विशेष अवसर", ur: "خصوصی مواقع"
  },
  "incl.special.desc": {
    en: "Romantic table & birthday celebrations", tr: "Romantik masa & doğum günü kutlamaları",
    de: "Romantik-Tisch & Geburtstagsfeiern", es: "Mesa romántica y celebraciones de cumpleaños",
    ru: "Романтический стол и празднование дня рождения", ar: "طاولة رومانسية واحتفالات أعياد الميلاد",
    fa: "میز رمانتیک و جشن تولد", fr: "Table romantique & célébrations d'anniversaire", it: "Tavolo romantico e celebrazioni di compleanno", zh: "浪漫餐桌与生日庆祝", id: "Meja romantis & perayaan ulang tahun", ms: "Meja romantik & sambutan hari jadi", pl: "Stół romantyczny i uroczystości urodzinowe", bg: "Романтична маса и празнуване на рожден ден", ro: "Masă romantică și sărbători de zi de naștere", uk: "Романтична сервіровка та святкування днів народження", ja: "ロマンチックなテーブルセッティング&誕生日祝い", ko: "로맨틱 테이블 및 생일 축하", hi: "रोमांटिक टेबल और जन्मदिन समारोह", ur: "رومانوی ٹیبل اور سالگرہ کی تقریبات"
  },
  "incl.cruise.detail": {
    en: "Sail past the Maiden's Tower, Dolmabahçe Palace, Bosphorus Bridge, Beylerbeyi Palace, Ortaköy Mosque, and Rumeli Fortress. Departs from Kabataş at 20:30, returns around 23:30.",
    tr: "Kız Kulesi, Dolmabahçe Sarayı, Boğaz Köprüsü, Beylerbeyi Sarayı, Ortaköy Camii ve Rumeli Hisarı'nın önünden geçin. Kabataş'tan 20:30'te kalkar, 23:30 arası döner.",
    de: "Vorbei am Leanderturm, Dolmabahçe-Palast, Bosporus-Brücke, Beylerbeyi-Palast, Ortaköy-Moschee und Rumeli-Festung. Abfahrt 20:30, Rückkehr gegen 23:30.",
    es: "Navegue junto a la Torre de la Doncella, el Palacio de Dolmabahçe, el Puente del Bósforo, el Palacio de Beylerbeyi, la Mezquita de Ortaköy y la Fortaleza de Rumeli. Sale a las 20:30, regresa alrededor de las 23:30.",
    ru: "Проплывите мимо Девичьей башни, дворца Долмабахче, Босфорского моста, дворца Бейлербейи, мечети Ортакёй и крепости Румели. Отправление в 20:30, возвращение около 23:30.",
    ar: "أبحر بجوار برج الفتاة، قصر دولمة بهجة، جسر البوسفور، قصر بيلربيي، مسجد أورتاكوي، وقلعة روملي. المغادرة 20:30، العودة بين 23:30.",
    fa: "از کنار برج دختر، کاخ دلمه‌باغچه، پل بسفر، کاخ بی‌لربه‌یی، مسجد اورتاکوی و قلعه روم‌ایلی عبور می‌کنید. ساعت ۲۰:۳۰ از کاباتاش حرکت می‌کند و بین ۲۳:۳۰ بازمی‌گردد.", fr: "Naviguez devant la Tour de Léandre, le palais de Dolmabahçe, le pont du Bosphore, le palais de Beylerbeyi, la mosquée d'Ortaköy et la forteresse de Rumeli. Départ de Kabataş à 20h30, retour entre 23h30.", it: "Navighi accanto alla Torre della Fanciulla, al Palazzo Dolmabahçe, al Ponte del Bosforo, al Palazzo Beylerbeyi, alla Moschea di Ortaköy e al Rumeli Hisarı. Parte da Kabataş alle 20:30 e rientra intorno alle 23:30.", zh: "驶过少女塔、多尔玛巴切宫、博斯普鲁斯大桥、贝伊勒尔贝伊宫、奥尔塔科伊清真寺与鲁梅利堡垒。20:30从卡巴塔什启航，23:30至23:30之间返航。", id: "Berlayar melewati Menara Gadis, Istana Dolmabahçe, Jembatan Bosphorus, Istana Beylerbeyi, Masjid Ortaköy, dan Benteng Rumeli. Berangkat dari Kabataş pukul 20:30, kembali sekitar 23:30.", ms: "Belayar melepasi Menara Maiden, Istana Dolmabahçe, Jambatan Bosphorus, Istana Beylerbeyi, Masjid Ortaköy dan Kubu Rumeli. Bertolak dari Kabataş pada 20:30, kembali sekitar 23:30.", pl: "Płyń obok Wieży Panny, Pałacu Dolmabahçe, Mostu Bosforskiego, Pałacu Beylerbeyi, Meczetu Ortaköy i Twierdzy Rumeli Hisarı. Wypłynięcie z Kabataş o 20:30, powrót około 23:30.", bg: "Плавайте покрай Кулата на девойката, двореца Долмабахче, моста на Босфора, двореца Бейлербей, джамията Ортакьой и Румелийската крепост. Отплаване от Кабаташ в 20:30 ч., връщане около 23:30 ч.", ro: "Navigați pe lângă Turnul Fecioarei, Palatul Dolmabahçe, Podul Bosfor, Palatul Beylerbeyi, Moscheea Ortaköy și Fortăreața Rumeli. Pleacă din Kabataș la 20:30, se întoarce în jurul orei 23:30.", uk: "Пропливайте повз Дівочу вежу, палац Dolmabahçe, Босфорський міст, палац Бейлербеї, мечеть Ортакьой та фортецю Румелі. Відправлення з Kabataş о 20:30, повернення близько 23:30.", ja: "乙女の塔、Dolmabahçe宮殿、ボスポラス大橋、Beylerbeyi宮殿、Ortaköyモスク、Rumeli要塞を船上からご覧いただけます。Kabataşを20:30に出発し、23:30頃に戻ります。", ko: "처녀의 탑, Dolmabahçe 궁전, Bosphorus 대교, Beylerbeyi 궁전, Ortaköy 모스크, Rumeli 요새를 지나 항해합니다. Kabataş에서 20:30에 출발하여 23:30경 돌아옵니다.", hi: "Maiden's Tower, Dolmabahçe Palace, Bosphorus Bridge, Beylerbeyi Palace, Ortaköy Mosque और Rumeli Fortress के पास से यात्रा करें। Kabataş से 20:30 बजे प्रस्थान, लगभग 23:30 बजे वापसी।", ur: "Maiden's Tower، Dolmabahçe محل، Bosphorus پل، Beylerbeyi محل، Ortaköy مسجد، اور Rumeli قلعے کے پاس سے گزریں۔ Kabataş سے 20:30 بجے روانگی، تقریباً 23:30 بجے واپسی۔"
  },
  "incl.dinner.detail": {
    en: "10 types of meze for Standard (15+ for VIP), choice of salmon/sea bass/chicken/meatball main course, and dessert with ice cream. Vegetarian menu available. VIP packages include rib-eye and filet mignon options, plus table near the stage.",
    tr: "Standard'ta 10 çeşit meze (VIP'te 15+), somon/çupra/tavuk/köfte ana yemek seçeneği ve dondurmalı pasta. Vejetaryen menü mevcuttur. VIP paketlerde antrikot ve biftek seçenekleri ile sahneye yakın masa dahildir.",
    de: "10 Meze-Sorten Standard (15+ für VIP), Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte) und Dessert mit Eis. Vegetarisches Menü verfügbar. VIP-Pakete enthalten Rib-Eye/Filet und Tisch nahe der Bühne.",
    es: "10 tipos de meze Standard (15+ para VIP), elección de plato principal (salmón/lubina/pollo/albóndigas) y postre con helado. Menú vegetariano disponible. Los paquetes VIP incluyen rib-eye y solomillo, y mesa cerca del escenario.",
    ru: "10 видов мезе для Standard (15+ для VIP), выбор горячего (лосось/сибас/курица/котлеты) и десерт с мороженым. Вегетарианское меню доступно. VIP-пакеты включают рибай и филе, столик у сцены.",
    ar: "10 أنواع مقبلات للباقة الأساسية (15+ للـVIP)، اختيار طبق رئيسي (سلمون/قاروص/دجاج/كفتة) وحلوى مع آيس كريم. قائمة نباتية متوفرة. باقات VIP تشمل ريب آي وفيليه، وطاولة قريبة من المسرح.",
    fa: "۱۰ نوع مزه در پکیج استاندارد (۱۵+ در VIP)، انتخاب غذای اصلی بین سالمون/هامور/مرغ/کوفته و دسر با بستنی. منوی گیاه‌خواری در دسترس است. پکیج‌های VIP شامل گزینه‌های راسته و فیله گوساله و نیز میز نزدیک به صحنه می‌شود.", fr: "10 variétés de mezzés pour la Standard (15+ pour la VIP), choix de plat principal (saumon/bar/poulet/köfte) et dessert avec glace. Menu végétarien disponible. Les forfaits VIP incluent l'entrecôte et le filet mignon, plus une table près de la scène.", it: "10 varietà di meze per lo Standard (15+ per il VIP), scelta di secondo tra salmone/branzino/pollo/köfte, e dolce con gelato. Menu vegetariano disponibile. I pacchetti VIP includono opzioni di costata e filetto di manzo, più tavolo vicino al palco.", zh: "标准版10道冷盘（VIP 15+道），主菜可选三文鱼/鲈鱼/鸡肉/肉丸，冰淇淋蛋糕甜点。可提供素食菜单。VIP套餐含肋眼与牛里脊选项，并安排靠近舞台的餐桌。", id: "10 jenis meze untuk Standar (15+ untuk VIP), pilihan menu utama salmon/sea bass/ayam/köfte, dan pencuci mulut dengan es krim. Menu vegetarian tersedia. Paket VIP termasuk pilihan rib-eye dan filet mignon, plus meja dekat panggung.", ms: "10 jenis meze untuk Standard (15+ untuk VIP), pilihan hidangan utama salmon/sea bass/ayam/köfte, dan pencuci mulut dengan aiskrim. Menu vegetarian tersedia. Pakej VIP merangkumi pilihan rib-eye dan fillet mignon, serta meja berdekatan pentas.", pl: "10 rodzajów mezze w Standard (15+ w VIP), wybór dania głównego (łosoś/dorada/kurczak/kotlety) i deser z lodami. Menu wegetariańskie dostępne. Pakiety VIP zawierają opcje antrykotu i polędwicy wołowej oraz stół w pobliżu sceny.", bg: "10 вида мезета за Стандарт (15+ за VIP), избор на основно ястие (сьомга/лаврак/пиле/кюфте) и десерт със сладолед. Вегетарианско меню при заявка. VIP пакетите включват варианти с антрекот и телешко бонфиле, плюс маса близо до сцената.", ro: "10 tipuri de mezeluri pentru Standard (15+ pentru VIP), alegere de fel principal (somon/biban de mare/pui/chiftele) și desert cu înghețată. Meniu vegetarian disponibil. Pachetele VIP includ opțiuni de antricot și mușchi de vită, plus masă aproape de scenă.", uk: "10 видів мезе для Standard (15+ для VIP), на вибір основна страва з лосося/морського окуня/курки/фрикадельок і десерт з морозивом. Доступне вегетаріанське меню. VIP пакети включають реберну частину та філе-міньйон, а також столик біля сцени.", ja: "スタンダードプランは10種類のメゼ(VIPは15種類以上)、サーモン/スズキ/チキン/ミートボールからお選びいただけるメイン料理、デザートとアイスクリームをご用意しております。ベジタリアンメニューもございます。VIPパッケージにはリブアイとフィレミニョンのオプション、ステージ近くのお席が含まれます。", ko: "스탠다드는 10가지 메제(VIP는 15가지 이상), 연어/농어/치킨/미트볼 중 선택 가능한 메인 요리, 아이스크림을 곁들인 디저트가 제공됩니다. 채식 메뉴도 이용 가능합니다. VIP 패키지는 립아이 및 필레 미뇽 옵션과 무대 근처 테이블이 포함됩니다.", hi: "Standard के लिए 10 प्रकार के मेज़े (VIP के लिए 15+), सालमन/सी बास/चिकन/मीटबॉल मुख्य व्यंजन का चयन, और आइसक्रीम के साथ मिठाई। शाकाहारी मेनू उपलब्ध। VIP पैकेज में रिब-आई और फिलेट मिग्नॉन विकल्प शामिल हैं, साथ ही स्टेज के पास टेबल।", ur: "Standard کے لیے 10 اقسام کے مزے (VIP کے لیے 15+)، سالمن/سی باس/چکن/میٹ بال مین کورس کا انتخاب، اور آئس کریم کے ساتھ ڈیزرٹ۔ سبزی خور مینو دستیاب ہے۔ VIP پیکجز میں رب آئی اور فلیٹ مگنون کے اختیارات شامل ہیں، نیز اسٹیج کے قریب ٹیبل۔"
  },
  "incl.entertainment.detail": {
    en: "Live singer performances, traditional Turkish night show with folk dances, belly dance, and DJ music. Entertainment continues uninterrupted until the end of the cruise.",
    tr: "Canlı şarkıcı performansları, halk dansları ve oryantal dans ile geleneksel Türk gecesi şovu ve DJ müziği. Eğlence tur sonuna kadar kesintisiz devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstanz, Bauchtanz und DJ. Unterhaltung bis zum Ende der Tour ohne Unterbrechung.",
    es: "Actuaciones de cantante en vivo, show nocturno turco tradicional con danzas folclóricas, danza del vientre y música DJ. El entretenimiento continúa sin interrupción hasta el final del crucero.",
    ru: "Живой певец, традиционное турецкое ночное шоу с народными танцами, танец живота и DJ-музыка. Развлечения продолжаются без перерыва до конца круиза.",
    ar: "عروض مغني حي، عرض ليلة تركية تقليدية مع رقصات شعبية، رقص شرقي وموسيقى DJ. يستمر الترفيه دون انقطاع حتى نهاية الرحلة.",
    fa: "اجرای خواننده زنده، نمایش سنتی شب ترکی با رقص‌های محلی، رقص شرقی و موسیقی دی‌جی. سرگرمی تا پایان تور بدون وقفه ادامه دارد.", fr: "Performances de chanteur en direct, soirée turque traditionnelle avec danses folkloriques, danse orientale et musique DJ. Le divertissement se poursuit sans interruption jusqu'à la fin de la croisière.", it: "Esibizioni di cantanti dal vivo, spettacolo tradizionale della serata turca con danze folkloristiche, danza orientale e musica DJ. L'intrattenimento continua senza interruzioni fino alla fine della crociera.", zh: "现场歌手表演、传统土耳其之夜表演含民族舞、肚皮舞与DJ音乐。娱乐节目不间断持续至游船结束。", id: "Pertunjukan penyanyi langsung, pertunjukan malam Turki tradisional dengan tarian rakyat, tari oriental, dan musik DJ. Hiburan berlanjut tanpa henti hingga akhir pelayaran.", ms: "Persembahan penyanyi langsung, persembahan malam Turki tradisional dengan tarian rakyat, tarian oryantal dan muzik DJ. Hiburan berterusan tanpa henti sehingga akhir pelayaran.", pl: "Występy śpiewaka na żywo, tradycyjny turecki pokaz nocny z tańcami ludowymi, tańcem brzucha i muzyką DJ-a. Rozrywka trwa nieprzerwanie do końca rejsu.", bg: "Певец на живо, традиционна турска нощна програма с фолклорни танци, танц на корема и DJ музика. Забавлението продължава без прекъсване до края на круиза.", ro: "Reprezentații live de cântăreț, spectacol tradițional de seară turcească cu dansuri populare, dans oriental și muzică DJ. Divertismentul continuă neîntrerupt până la sfârșitul croazierei.", uk: "Виступи живих вокалістів, традиційна турецька нічна програма з народними танцями, танець живота та діджей. Розваги тривають без перерв до кінця круїзу.", ja: "生歌のパフォーマンス、民族舞踊やベリーダンスを含むトルコの伝統的なナイトショー、DJミュージックをお楽しみいただけます。クルーズ終了まで途切れることなくエンターテインメントが続きます。", ko: "라이브 가수 공연, 민속 춤과 벨리댄스가 포함된 전통 터키 나이트 쇼, DJ 음악이 제공됩니다. 크루즈가 끝날 때까지 엔터테인먼트가 중단 없이 이어집니다.", hi: "लाइव गायक प्रस्तुतियाँ, लोक नृत्य के साथ पारंपरिक Turkish नाइट शो, बेली डांस और DJ संगीत। मनोरंजन क्रूज़ के अंत तक निर्बाध जारी रहता है।", ur: "لائیو گلوکار کی پرفارمنس، لوک رقص کے ساتھ روایتی ترکی رات کا شو، بیلی ڈانس، اور DJ میوزک۔ تفریحی پروگرام کروز کے اختتام تک بلا تعطل جاری رہتا ہے۔"
  },
  "incl.transfer.detail": {
    en: "Round-trip hotel pickup and drop-off available from Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy and Beyoğlu areas. Available as an add-on when booking. Please share your hotel location with us.",
    tr: "Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu bölgelerinden gidiş-dönüş otel servisi mevcuttur. Rezervasyon sırasında ekstra olarak eklenebilir. Otel konumunuzu bize bildirin.",
    de: "Hin- und Rücktransfer ab Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy und Beyoğlu. Als Zusatz buchbar. Bitte teilen Sie uns Ihren Hotelstandort mit.",
    es: "Recogida y devolución al hotel disponible desde Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy y Beyoğlu. Disponible como complemento. Por favor, comparta la ubicación de su hotel con nosotros.",
    ru: "Трансфер из/в отель доступен из районов Бешикташ, Сютлюдже, Сиркеджи, Топкапы, Таксим, Эминёню, Кягытхане, Фатих, Лалели, Султанахмет, Ортакёй и Бейоглу. Доступен как дополнение при бронировании. Пожалуйста, сообщите нам расположение вашего отеля.",
    ar: "خدمة نقل ذهاب وعودة متاحة من مناطق بشكتاش، سوتلوجه، سيركجي، طوبكابي، تقسيم، إمينونو، كاغيتهانه، فاتح، لاليلي، السلطان أحمد، أورتاكوي وبيوغلو. متاحة كإضافة عند الحجز. يرجى مشاركة موقع فندقك معنا.",
    fa: "ترانسفر رفت و برگشت از هتل در مناطق بشیکتاش، سوتلوجه، سیرکجی، توپ‌کاپی، تکسیم، اِمینونو، کاغیت‌هانه، فاتح، لَلِه‌لی، سلطان‌احمد، اورتاکوی و بی‌اوغلو ارائه می‌شود. در زمان رزرو به‌عنوان افزودنی انتخاب کنید. لطفاً آدرس هتل خود را با ما به اشتراک بگذارید.", fr: "Prise en charge et dépose aller-retour depuis l'hôtel disponibles depuis Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy et Beyoğlu. Disponible en option lors de la réservation. Merci de nous indiquer l'adresse de votre hôtel.", it: "Prelievo e riconsegna andata e ritorno dall'hotel disponibili da Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy e Beyoğlu. Disponibile come extra durante la prenotazione. La preghiamo di condividere con noi la posizione del Suo hotel.", zh: "可从贝西克塔什、苏特卢杰、锡尔凯吉、托普卡珀、塔克西姆、埃米诺努、卡厄特哈内、法蒂赫、拉莱利、苏丹艾哈迈德、奥尔塔科伊与贝伊奥卢区提供往返酒店接送。预订时可作为附加项选择。请与我们分享您的酒店位置。", id: "Penjemputan dan pengantaran hotel pulang-pergi tersedia dari kawasan Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu. Tersedia sebagai tambahan saat pemesanan. Silakan bagikan lokasi hotel Anda kepada kami.", ms: "Perkhidmatan ambil dan hantar hotel pergi balik tersedia dari kawasan Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu. Tersedia sebagai tambahan semasa tempahan. Sila kongsi lokasi hotel anda dengan kami.", pl: "Dostępny odbiór i odwiezienie z hotelu w obie strony z dzielnic: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy i Beyoğlu. Dostępne jako dodatek przy rezerwacji. Prosimy podać lokalizację hotelu.", bg: "Двупосочно вземане и връщане от хотела е достъпно от районите Бешикташ, Сютлюдже, Сиркеджи, Топкапъ, Таксим, Еминьоню, Кааатхане, Фатих, Лалели, Султанахмет, Ортакьой и Бейоглу. Налично като добавка при резервация. Моля, споделете с нас локацията на хотела Ви.", ro: "Preluare și ducere dus-întors de la hotel disponibilă din zonele Beșiktaș, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy și Beyoğlu. Disponibil ca supliment la rezervare. Vă rugăm să împărtășiți locația hotelului dumneavoastră cu noi.", uk: "Доступний трансфер туди й назад з готелю з районів Бешікташ, Сютлюдже, Сіркеджі, Топкапи, Таксим, Еміненю, Кагитхане, Фатіх, Лалелі, Sultanahmet, Ortaköy та Бейоглу. Доступний як додаткова опція при бронюванні. Будь ласка, повідомте нам розташування Вашого готелю.", ja: "Beşiktaş、Sütlüce、Sirkeci、Topkapı、Taksim、Eminönü、Kağıthane、Fatih、Laleli、Sultanahmet、Ortaköy、Beyoğluエリアからの往復送迎サービスをご利用いただけます。ご予約時にオプションとして追加可能です。ホテルの場所をお知らせください。", ko: "Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy, Beyoğlu 지역에서 왕복 호텔 픽업 및 샌딩 서비스를 이용하실 수 있습니다. 예약 시 추가 옵션으로 선택 가능합니다. 호텔 위치를 알려주시기 바랍니다.", hi: "Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy और Beyoğlu क्षेत्रों से होटल पिकअप और ड्रॉप-ऑफ उपलब्ध। बुकिंग के समय ऐड-ऑन के रूप में उपलब्ध। कृपया अपने होटल का स्थान हमारे साथ साझा करें।", ur: "Beşiktaş، Sütlüce، Sirkeci، Topkapı، Taksim، Eminönü، Kağıthane، Fatih، Laleli، Sultanahmet، Ortaköy اور Beyoğlu کے علاقوں سے دو طرفہ ہوٹل پک اپ اور ڈراپ آف دستیاب ہے۔ بکنگ کے وقت اضافی سہولت کے طور پر دستیاب ہے۔ براہ کرم اپنے ہوٹل کا مقام ہمارے ساتھ شیئر کریں۔"
  },
  "incl.support.detail": {
    en: "We're with you before, during, and after your cruise. Message or call anytime — we respond instantly, 7 days a week, 24 hours a day.",
    tr: "Turunuzun öncesinde, sırasında ve sonrasında yanınızdayız. Yazın veya arayın — 7/24 anında cevap veriyoruz.",
    de: "Wir sind vor, während und nach der Tour für Sie da. Schreiben oder anrufen — wir antworten sofort, 7 Tage die Woche, 24 Stunden am Tag.",
    es: "Estamos contigo antes, durante y después de tu crucero. Escribe o llama — respondemos al instante, los 7 días de la semana, las 24 horas.",
    ru: "Мы с вами до, во время и после круиза. Пишите или звоните — отвечаем мгновенно, 7 дней в неделю, 24 часа в сутки.",
    ar: "نحن معك قبل وأثناء وبعد رحلتك. راسل أو اتصل — نرد فورًا على مدار الساعة طوال أيام الأسبوع.",
    fa: "پیش، حین و پس از تور همراه شما هستیم. در هر زمان پیام دهید یا تماس بگیرید — ۷ روز هفته، ۲۴ ساعته فوراً پاسخ می‌دهیم.", fr: "Nous sommes à vos côtés avant, pendant et après votre croisière. Écrivez ou appelez à tout moment — nous répondons instantanément, 7 jours sur 7, 24 heures sur 24.", it: "Siamo con Lei prima, durante e dopo la Sua crociera. Ci scriva o ci chiami in qualsiasi momento — rispondiamo all'istante, 7 giorni su 7, 24 ore al giorno.", zh: "我们在您游船之前、期间与之后全程陪伴。随时来信或致电——我们每周7天、每天24小时即时回应。", id: "Kami bersama Anda sebelum, selama, dan setelah pelayaran. Kirim pesan atau telepon kapan saja — kami merespons secara instan, 7 hari seminggu, 24 jam sehari.", ms: "Kami bersama anda sebelum, semasa dan selepas pelayaran. Hantar mesej atau telefon pada bila-bila masa — kami balas serta-merta, 7 hari seminggu, 24 jam sehari.", pl: "Jesteśmy z Państwem przed, w trakcie i po rejsie. Prosimy o wiadomość lub telefon w dowolnej chwili — odpowiadamy natychmiast, 7 dni w tygodniu, 24 godziny na dobę.", bg: "С Вас сме преди, по време и след круиза. Пишете или се обадете по всяко време — отговаряме мигновено, 7 дни в седмицата, 24 часа в денонощието.", ro: "Suntem cu dumneavoastră înainte, în timpul și după croazieră. Scrieți sau sunați oricând — răspundem instant, 7 zile pe săptămână, 24 de ore pe zi.", uk: "Ми з Вами до, під час і після круїзу. Пишіть або телефонуйте у будь-який час — ми відповідаємо миттєво, 7 днів на тиждень, 24 години на добу.", ja: "クルーズの前、最中、後もサポートいたします。いつでもメッセージまたはお電話ください。週7日、24時間体制で即座に対応いたします。", ko: "크루즈 전, 중, 후 언제나 함께합니다. 언제든지 메시지나 전화 주시면 주 7일, 하루 24시간 즉시 응답해 드립니다.", hi: "हम आपके क्रूज़ से पहले, दौरान और बाद में आपके साथ हैं। किसी भी समय संदेश या कॉल करें — हम तुरंत जवाब देते हैं, सप्ताह में 7 दिन, दिन में 24 घंटे।", ur: "ہم آپ کے کروز سے پہلے، دوران، اور بعد میں آپ کے ساتھ ہیں۔ کسی بھی وقت پیغام بھیجیں یا کال کریں — ہم فوری جواب دیتے ہیں، ہفتے کے 7 دن، دن میں 24 گھنٹے۔"
  },
  "incl.special.detail": {
    en: "Celebrating something special? We offer romantic table setup with candles & flowers (+€{p.romantic}) and birthday celebrations. Tell us!",
    tr: "Özel bir gün mü kutluyorsunuz? Mum ve çiçeklerle romantik masa düzeni (+€{p.romantic}) ve doğum günü kutlamaları sunuyoruz. Bize yazın!",
    de: "Etwas Besonderes feiern? Romantik-Tisch mit Kerzen & Blumen (+€{p.romantic}) und Geburtstagsfeiern. Schreiben Sie uns!",
    es: "¿Celebrando algo especial? Ofrecemos mesa romántica con velas y flores (+€{p.romantic}) y celebraciones de cumpleaños. ¡Escríbenos!",
    ru: "Празднуете что-то особенное? Романтический стол со свечами и цветами (+€{p.romantic}) и празднование дня рождения. Напишите нам!",
    ar: "تحتفل بمناسبة خاصة؟ نقدم طاولة رومانسية مع شموع وزهور (+€{p.romantic})، واحتفالات أعياد الميلاد. أخبرنا!",
    fa: "مناسبت ویژه‌ای در پیش دارید؟ چیدمان میز رمانتیک با شمع و گل (+€{p.romantic}) و جشن تولد ارائه می‌کنیم. به ما اطلاع دهید!", fr: "Vous célébrez quelque chose de spécial ? Nous proposons une décoration de table romantique avec bougies & fleurs (+€{p.romantic}) et des célébrations d'anniversaire. Dites-le-nous !", it: "Sta celebrando qualcosa di speciale? Offriamo allestimento romantico del tavolo con candele e fiori (+€{p.romantic}) e celebrazioni di compleanno. Ce lo dica!", zh: "在庆祝特别时刻？我们提供蜡烛鲜花浪漫餐桌布置（+€{p.romantic}）与生日庆祝。请告诉我们！", id: "Merayakan sesuatu yang istimewa? Kami menawarkan pengaturan meja romantis dengan lilin & bunga (+€{p.romantic}) dan perayaan ulang tahun. Beritahu kami!", ms: "Menyambut sesuatu yang istimewa? Kami menawarkan susunan meja romantik dengan lilin & bunga (+€{p.romantic}) dan sambutan hari jadi. Beritahu kami!", pl: "Świętują Państwo coś wyjątkowego? Oferujemy aranżację stolika romantycznego ze świecami i kwiatami (+€{p.romantic}) oraz uroczystości urodzinowe. Proszę nas poinformować!", bg: "Празнувате нещо специално? Предлагаме подреждане на романтична маса със свещи и цветя (+€{p.romantic}) и празнуване на рожден ден. Уведомете ни!", ro: "Sărbătoriți ceva special? Oferim aranjament de masă romantică cu lumânări și flori (+€{p.romantic}) și sărbători de zi de naștere. Spuneți-ne!", uk: "Святкуєте щось особливе? Ми пропонуємо романтичну сервіровку столу зі свічками та квітами (+€{p.romantic}) та святкування дня народження. Розкажіть нам!", ja: "特別な記念日をお祝いですか?キャンドルとお花によるロマンチックなテーブルセッティング(+€{p.romantic})や誕生日のお祝いをご用意しております。ぜひお知らせください。", ko: "특별한 날을 축하하시나요? 촛불과 꽃으로 꾸민 로맨틱 테이블(+€{p.romantic}) 및 생일 축하 서비스를 제공합니다. 알려주시기 바랍니다!", hi: "कुछ विशेष मना रहे हैं? हम मोमबत्तियों और फूलों के साथ रोमांटिक टेबल सेटअप (+€{p.romantic}) और जन्मदिन समारोह प्रदान करते हैं। हमें बताएं!", ur: "کوئی خاص موقع منا رہے ہیں؟ ہم موم بتیوں اور پھولوں کے ساتھ رومانوی ٹیبل ترتیب (+€{p.romantic}) اور سالگرہ کی تقریبات پیش کرتے ہیں۔ ہمیں بتائیں!"
  },

  // ========== GALLERY ==========
  "gallery.label": {
    en: "Gallery", tr: "Galeri", de: "Galerie", es: "Galería", ru: "Галерея", ar: "معرض الصور",
    fa: "گالری", fr: "Galerie", it: "Galleria", zh: "画廊", id: "Galeri", ms: "Galeri", pl: "Galeria", bg: "Галерия", ro: "Galerie", uk: "Галерея", ja: "ギャラリー", ko: "갤러리", hi: "गैलरी", ur: "گیلری"
  },
  "gallery.title": {
    en: "Experience the Night", tr: "Geceyi Yaşayın", de: "Die Nacht erleben",
    es: "Vive la Noche", ru: "Почувствуйте ночь", ar: "عش الليلة",
    fa: "تجربه شب", fr: "Vivez la nuit", it: "Viva la notte", zh: "体验这一夜", id: "Rasakan Malamnya", ms: "Alami Malam Itu", pl: "Doświadcz nocy", bg: "Изживейте нощта", ro: "Trăiți Experiența Nopții", uk: "Відчуйте атмосферу ночі", ja: "夜の体験", ko: "밤의 경험", hi: "रात का अनुभव करें", ur: "رات کا تجربہ کریں"
  },

  // ========== REVIEWS ==========
  "reviews.label": {
    en: "Customer Experiences", tr: "Müşteri Deneyimleri", de: "Kundenerfahrungen",
    es: "Experiencias de Clientes", ru: "Отзывы гостей", ar: "تجارب العملاء",
    fa: "تجربه مشتریان", fr: "Expériences clients", it: "Esperienze dei clienti", zh: "宾客体验", id: "Pengalaman Pelanggan", ms: "Pengalaman Pelanggan", pl: "Doświadczenia klientów", bg: "Преживявания на клиенти", ro: "Experiențele Clienților", uk: "Враження гостей", ja: "お客様の体験談", ko: "고객 경험", hi: "ग्राहक अनुभव", ur: "صارفین کے تجربات"
  },
  "reviews.title": {
    en: "What Our Guests Say", tr: "Misafirlerimiz Ne Diyor", de: "Was unsere Gäste sagen",
    es: "Lo que dicen nuestros huéspedes", ru: "Что говорят наши гости", ar: "ماذا يقول ضيوفنا",
    fa: "نظر مهمانان ما", fr: "Ce que disent nos invités", it: "Cosa dicono i nostri ospiti", zh: "宾客怎么说", id: "Apa Kata Tamu Kami", ms: "Apa Kata Tetamu Kami", pl: "Co mówią nasi goście", bg: "Какво казват гостите ни", ro: "Ce Spun Oaspeții Noștri", uk: "Що кажуть наші гості", ja: "お客様の声", ko: "고객 후기", hi: "हमारे मेहमान क्या कहते हैं", ur: "ہمارے مہمان کیا کہتے ہیں"
  },
  "reviews.rating": {
    en: "4.8/5 based on customer feedback", tr: "Müşteri geri bildirimlerine göre 4.8/5",
    de: "4,8/5 basierend auf Gästebewertungen", es: "4.8/5 basado en opiniones de clientes",
    ru: "4.8/5 на основе отзывов", ar: "4.8/5 بناءً على آراء العملاء",
    fa: "۴.۸/۵ بر اساس بازخورد مشتریان", fr: "4,8/5 selon les avis clients", it: "4,8/5 in base al feedback dei clienti", zh: "基于宾客反馈4.8/5", id: "4,8/5 berdasarkan umpan balik pelanggan", ms: "4.8/5 berdasarkan maklum balas pelanggan", pl: "4,8/5 na podstawie opinii klientów", bg: "4,8/5 според отзивите на клиентите", ro: "4,8/5 bazat pe feedback-ul clienților", uk: "4.8/5 на основі відгуків гостей", ja: "お客様の評価:4.8/5", ko: "고객 피드백 기반 4.8/5", hi: "ग्राहक प्रतिक्रिया के आधार पर 4.8/5", ur: "صارفین کی رائے کی بنیاد پر 4.8/5"
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
    fa: "«این تور شام بسفر را برای سالگرد ازدواج خود انتخاب کردیم — فراموش‌نشدنی بود. مزه‌ها زیر نور شمع، خدمات دقیق و بسفر در پس‌زمینه. بهترین تور شام در کشتی که استانبول ارائه می‌دهد.»", fr: "« Nous avons choisi cette croisière dîner sur le Bosphore pour notre anniversaire de mariage — inoubliable. Mezzés aux chandelles, service attentif, le Bosphore en toile de fond. La meilleure croisière dîner qu'Istanbul puisse offrir. »", it: "\"Abbiamo scelto questa crociera con cena sul Bosforo per il nostro anniversario — indimenticabile. Meze a lume di candela, servizio attento, il Bosforo sullo sfondo. La migliore crociera con cena che Istanbul possa offrire.\"", zh: "\"为了周年纪念选择了这趟博斯普鲁斯晚宴游船——难以忘怀。烛光下的冷盘、贴心的服务、背景中的博斯普鲁斯。伊斯坦布尔最好的晚宴游船。\"", id: "\"Memilih pelayaran makan malam Bosphorus ini untuk hari jadi kami — tak terlupakan. Meze dengan cahaya lilin, layanan yang penuh perhatian, Bosphorus di latar belakang. Pelayaran makan malam terbaik yang ditawarkan Istanbul.\"", ms: "\"Memilih pelayaran makan malam Bosphorus ini untuk ulang tahun kami — tidak dapat dilupakan. Meze bercahaya lilin, layanan penuh perhatian, Bosphorus di latar belakang. Pelayaran makan malam terbaik yang ditawarkan oleh Istanbul.\"", pl: "\"Wybraliśmy ten rejs z kolacją po Bosforze na naszą rocznicę — niezapomniane. Mezze przy świecach, uważna obsługa, Bosfor w tle. Najlepszy rejs z kolacją, jaki Stambuł ma do zaoferowania.\"", bg: "\"Избрахме този круиз с вечеря по Босфора за годишнината си — незабравимо. Мезета на свещи, внимателно обслужване, Босфорът на заден план. Най-добрият круиз с вечеря, който Истанбул може да предложи.\"", ro: "\"Am ales această croazieră cu cină pe Bosfor pentru aniversarea noastră — de neuitat. Mezeluri la lumina lumânărilor, serviciu atent, Bosforul în fundal. Cea mai bună croazieră cu cină pe care o oferă Istanbulul.\"", uk: "\"Обрали цей вечірній круїз з вечерею на Босфорі на нашу річницю — незабутньо. Мезе при свічках, уважний сервіс, Босфор на тлі. Найкращий круїз з вечерею в Istanbul, який можна знайти.\"", ja: "「記念日にこのボスポラス海峡ディナークルーズを選びました。忘れられない体験でした。キャンドルに照らされたメゼ、行き届いたサービス、背景に広がるボスポラス海峡。Istanbulで最高のディナークルーズです。」", ko: "\"결혼기념일로 이 bosphorus dinner cruise를 선택했는데 잊을 수 없는 경험이었습니다. 촛불 켜진 메제, 세심한 서비스, 배경의 Bosphorus. Istanbul 최고의 dinner cruise입니다.\"", hi: "\"हमारी वर्षगांठ के लिए इस bosphorus dinner cruise को चुना — अविस्मरणीय। मोमबत्तियों के साथ मेज़े, सावधान सेवा, पृष्ठभूमि में Bosphorus। Istanbul का सबसे बेहतरीन dinner cruise।\"", ur: "\"اپنی سالگرہ کے لیے اس bosphorus ڈنر کروز کا انتخاب کیا — ناقابل فراموش۔ موم بتیوں سے سجے مزے، توجہ سے بھری خدمت، پس منظر میں Bosphorus۔ Istanbul کی بہترین ڈنر کروز۔\""
  },
  "reviews.r1.info": {
    en: "Couple · Germany", tr: "Çift · Almanya", de: "Paar · Deutschland",
    es: "Pareja · Alemania", ru: "Пара · Германия", ar: "زوجان · ألمانيا",
    fa: "زوج · آلمان", fr: "Couple · Allemagne", it: "Coppia · Germania", zh: "情侣 · 德国", id: "Pasangan · Jerman", ms: "Pasangan · Jerman", pl: "Para · Niemcy", bg: "Двойка · Германия", ro: "Cuplu · Germania", uk: "Пара · Німеччина", ja: "カップル・ドイツ", ko: "커플 · 독일", hi: "कपल · Germany", ur: "جوڑا · جرمنی"
  },
  "reviews.r2": {
    en: "\"Booked this Istanbul night tour for the views — it exceeded expectations. Ortaköy Mosque glowing, Dolmabahçe lit up, the bridge turning red. Best bosphorus sightseeing shots of my trip.\"",
    tr: "\"Manzara için bu İstanbul gece turuna katıldım — beklentinin ötesindeydi. Ortaköy Camii parıldıyor, Dolmabahçe aydınlanmış, köprü kırmızıya dönüyor. Yaptığım en iyi boğaz manzarası çekimleri.\"",
    de: "\"Diese Istanbul Night Tour wegen der Aussicht gebucht — sie übertraf die Erwartungen. Die Ortaköy-Moschee leuchtet, Dolmabahçe erhellt, die Brücke in Rot. Beste Bosphorus Sightseeing-Aufnahmen meiner Reise.\"",
    es: "\"Reservé este tour nocturno por Estambul por las vistas — superaron expectativas. Mezquita Ortaköy iluminada, Dolmabahçe brillando, el puente en rojo. Las mejores fotos del crucero por el Bósforo.\"",
    ru: "\"Забронировал этот ночной тур по Стамбулу ради видов — они превзошли ожидания. Мечеть Ортакёй сияет, Долмабахче в огнях, мост становится красным. Лучшие кадры круиза по Босфору.\"",
    ar: "\"حجزت هذه الجولة الليلية في إسطنبول من أجل المناظر — فاقت توقعاتي. مسجد أورتاكوي يتوهج، قصر دولمة بهجة مضاء، الجسر يتحول إلى الأحمر. أفضل لقطات رحلة البوسفور.\"",
    fa: "«این تور شبانه استانبول را برای دیدن مناظر رزرو کردم — فراتر از انتظارم بود. مسجد اورتاکوی درخشان، دلمه‌باغچه نورانی، پل در رنگ قرمز. بهترین عکس‌های بسفر در کل سفرم.»", fr: "« J'ai réservé cette soirée à Istanbul pour les vues — elle a dépassé mes attentes. La mosquée d'Ortaköy illuminée, Dolmabahçe éclairé, le pont passant au rouge. Les meilleures photos du Bosphore de mon voyage. »", it: "\"Ho prenotato questo tour notturno di Istanbul per le vedute — ha superato le aspettative. La Moschea di Ortaköy illuminata, il Palazzo Dolmabahçe illuminato, il ponte che diventa rosso. I migliori scatti panoramici del Bosforo del mio viaggio.\"", zh: "\"为了美景预订了这趟伊斯坦布尔夜游——超出预期。奥尔塔科伊清真寺熠熠生辉、多尔玛巴切灯火通明、大桥变成红色。此行最好的博斯普鲁斯观光照片。\"", id: "\"Memesan tur malam Istanbul ini untuk pemandangannya — melampaui harapan. Masjid Ortaköy bersinar, Dolmabahçe menyala, jembatan berubah merah. Foto wisata Bosphorus terbaik dari perjalanan saya.\"", ms: "\"Menempah tur malam Istanbul ini untuk pemandangan — melebihi jangkaan. Masjid Ortaköy bersinar, Dolmabahçe diterangi, jambatan bertukar merah. Foto pemandangan Bosphorus terbaik sepanjang perjalanan saya.\"", pl: "\"Zarezerwowałem tę wycieczkę nocną w Stambule dla widoków — przerosła oczekiwania. Meczet Ortaköy lśniący, Dolmabahçe rozświetlony, most zmieniający się na czerwono. Najlepsze zdjęcia Bosforu z mojej podróży.\"", bg: "\"Резервирах този нощен тур в Истанбул заради гледките — надмина очакванията. Джамията Ортакьой свети, Долмабахче осветен, мостът става червен. Най-добрите снимки на Босфора от моето пътуване.\"", ro: "\"Am rezervat acest tur nocturn în Istanbul pentru priveliști — a depășit așteptările. Moscheea Ortaköy strălucind, Dolmabahçe iluminat, podul devenind roșu. Cele mai bune fotografii ale Bosforului din călătoria mea.\"", uk: "\"Забронювала цей нічний тур по Istanbul заради видів — очікування перевершені. Мечеть Ortaköy сяє, Dolmabahçe освітлений, міст стає червоним. Найкращі фото оглядового туру Босфором за всю подорож.\"", ja: "「景色を目当てにこのIstanbulナイトツアーを予約しましたが、期待以上でした。輝くOrtaköyモスク、ライトアップされたDolmabahçe、赤く染まる橋。旅行中で最高のボスポラス海峡の写真が撮れました。」", ko: "\"전망 때문에 이 Istanbul night tour를 예약했는데 기대 이상이었습니다. 빛나는 Ortaköy 모스크, 환하게 밝혀진 Dolmabahçe, 빨갛게 변하는 다리. 제 여행 중 최고의 bosphorus 관광 사진들입니다.\"", hi: "\"इस Istanbul night tour को दृश्यों के लिए बुक किया — उम्मीदों से बढ़कर। Ortaköy Mosque चमकती हुई, Dolmabahçe रोशन, पुल लाल हो रहा। मेरी यात्रा की सबसे बेहतरीन bosphorus sightseeing तस्वीरें।\"", ur: "\"اس Istanbul نائٹ ٹور کو مناظر کے لیے بک کیا — توقعات سے بڑھ کر رہا۔ چمکتی Ortaköy مسجد، روشن Dolmabahçe، سرخ رنگ میں بدلتا پل۔ میرے سفر کی بہترین bosphorus سائٹ سیئنگ تصاویر۔\""
  },
  "reviews.r2.info": {
    en: "Solo · Russia", tr: "Tek · Rusya", de: "Solo · Russland",
    es: "Solo · Rusia", ru: "Соло · Россия", ar: "فردي · روسيا",
    fa: "مسافر تنها · روسیه", fr: "Solo · Russie", it: "Singolo · Russia", zh: "独行 · 俄罗斯", id: "Solo · Rusia", ms: "Bersendirian · Rusia", pl: "Solo · Rosja", bg: "Сам · Русия", ro: "Individual · Rusia", uk: "Самостійно · Росія", ja: "一人旅・ロシア", ko: "혼자 · 러시아", hi: "सोलो · Russia", ur: "اکیلے · روس"
  },
  "reviews.r3": {
    en: "\"Sailed right under the Bosphorus Bridge lit in red — absolutely magical. Our phone shots came out like postcards. Worth it just for that moment.\"",
    tr: "\"Kırmızı ışıklı Boğaz Köprüsü'nün tam altından geçtik — büyüleyici. Telefonla çektiklerimiz bile kartpostal gibi çıktı. Sırf bu an için değer.\"",
    de: "\"Direkt unter der rot beleuchteten Bosporus-Brücke gesegelt — absolut magisch. Selbst unsere Handyfotos wurden wie Postkarten. Allein dafür lohnt es sich.\"",
    es: "\"Navegamos justo bajo el Puente del Bósforo iluminado en rojo — absolutamente mágico. Nuestras fotos con el móvil salieron como postales.\"",
    ru: "\"Проплыли прямо под Босфорским мостом, подсвеченным красным — абсолютно волшебно. Снимки с телефона получились как открытки.\"",
    ar: "\"أبحرنا تحت جسر البوسفور المضاء بالأحمر — ساحر تمامًا. حتى صور الهاتف ظهرت كالبطاقات البريدية. يستحق من أجل تلك اللحظة.\"",
    fa: "«درست از زیر پل بسفر با نور قرمز عبور کردیم — واقعاً جادویی بود. عکس‌هایی که با گوشی گرفتیم مثل کارت‌پستال شد. فقط برای همان لحظه ارزشش را داشت.»", fr: "« Nous avons navigué juste sous le pont du Bosphore illuminé en rouge — absolument magique. Les photos prises avec notre téléphone ressemblaient à des cartes postales. Cela valait le coup rien que pour ce moment. »", it: "\"Abbiamo navigato proprio sotto il Ponte del Bosforo illuminato di rosso — assolutamente magico. Le nostre foto con il telefono sembrano cartoline. Ne vale la pena solo per quel momento.\"", zh: "\"驶过点亮红色灯光的博斯普鲁斯大桥下方——绝对神奇。我们的手机照片就像明信片。仅为那一刻也值得。\"", id: "\"Berlayar tepat di bawah Jembatan Bosphorus yang menyala merah — sungguh ajaib. Foto ponsel kami terlihat seperti kartu pos. Sepadan hanya untuk momen itu.\"", ms: "\"Belayar tepat di bawah Jambatan Bosphorus yang diterangi merah — benar-benar ajaib. Foto telefon kami keluar seperti poskad. Berbaloi semata-mata untuk saat itu.\"", pl: "\"Płynęliśmy tuż pod Mostem Bosforskim rozświetlonym na czerwono — absolutnie magicznie. Nasze zdjęcia z telefonu wyszły jak pocztówki. Warto było tylko dla tej chwili.\"", bg: "\"Преминахме точно под моста на Босфора, осветен в червено — абсолютно магическо. Снимките от телефона изглеждаха като картички. Струва си само заради този момент.\"", ro: "\"Am navigat chiar pe sub Podul Bosfor iluminat în roșu — absolut magic. Fotografiile făcute cu telefonul au ieșit ca niște cărți poștale. Merită doar pentru acel moment.\"", uk: "\"Пропливли прямо під Босфорським мостом, освітленим червоним — абсолютна магія. Наші фото з телефону виглядають як листівки. Заради цього моменту вже варто.\"", ja: "「赤くライトアップされたBosphorus Bridgeの真下を航行しました。まさに魔法のようでした。スマホで撮った写真がまるで絵葉書のように綺麗です。その瞬間だけでも価値がありました。」", ko: "\"빨간색으로 빛나는 Bosphorus 대교 바로 아래를 항해했는데 정말 환상적이었습니다. 휴대폰으로 찍은 사진이 엽서처럼 나왔습니다. 그 순간만으로도 충분히 가치가 있습니다.\"", hi: "\"लाल रोशनी में Bosphorus Bridge के ठीक नीचे से गुज़रे — बिल्कुल जादुई। हमारी फ़ोन की तस्वीरें पोस्टकार्ड जैसी निकलीं। बस उस पल के लिए ही इसकी कीमत थी।\"", ur: "\"سرخ روشنی میں جگمگاتے Bosphorus پل کے بالکل نیچے سے گزرے — بالکل جادوئی۔ ہماری فون سے لی گئی تصاویر پوسٹ کارڈ جیسی نکلیں۔ صرف اس لمحے کے لیے قابل قدر۔\""
  },
  "reviews.r3.info": {
    en: "Couple · United Kingdom", tr: "Çift · Birleşik Krallık", de: "Paar · Vereinigtes Königreich",
    es: "Pareja · Reino Unido", ru: "Пара · Великобритания", ar: "زوجان · المملكة المتحدة",
    fa: "زوج · بریتانیا", fr: "Couple · Royaume-Uni", it: "Coppia · Regno Unito", zh: "情侣 · 英国", id: "Pasangan · Inggris", ms: "Pasangan · United Kingdom", pl: "Para · Wielka Brytania", bg: "Двойка · Великобритания", ro: "Cuplu · Regatul Unit", uk: "Пара · Велика Британія", ja: "カップル・イギリス", ko: "커플 · 영국", hi: "कपल · United Kingdom", ur: "جوڑا · برطانیہ"
  },
  "reviews.r4": {
    en: "\"Took the kids. The folk dancers and the dervish show captivated them. Halal menu was respected, staff gave our family attentive care. A perfect Istanbul night.\"",
    tr: "\"Çocuklarla gittik. Folklor dansları ve semazen gösterisi onları büyüledi. Helal menüye saygı vardı, servis aileye özel ilgi gösterdi. İstanbul'da mükemmel bir gece.\"",
    de: "\"Wir waren mit den Kindern da. Die Volkstänze und der Derwisch zogen sie in ihren Bann. Das Halal-Menü wurde respektiert, das Personal kümmerte sich aufmerksam um die Familie.\"",
    es: "\"Fuimos con los niños. Los bailarines folclóricos y el derviche los cautivaron. Se respetó el menú halal, el personal cuidó de la familia con atención.\"",
    ru: "\"Пошли с детьми. Народные танцы и дервиш их покорили. Халяль-меню соблюдалось, персонал внимательно отнёсся к семье. Идеальный вечер в Стамбуле.\"",
    ar: "\"اصطحبنا الأطفال. الراقصون الشعبيون وعرض الدرويش أسرهم. تم احترام قائمة الحلال، اهتم الطاقم بعائلتنا. ليلة مثالية في إسطنبول.\"",
    fa: "«بچه‌ها را بردیم. رقصندگان محلی و نمایش درویش آن‌ها را مجذوب کرد. منوی حلال رعایت شد و کارکنان به خانواده ما توجه ویژه داشتند. یک شب کامل استانبولی.»", fr: "« Nous avons emmené les enfants. Les danseurs folkloriques et le spectacle des derviches les ont captivés. Le menu halal a été respecté, le personnel a été attentionné envers notre famille. Une soirée parfaite à Istanbul. »", it: "\"Abbiamo portato i bambini. I ballerini folk e lo spettacolo dei dervisci li hanno affascinati. Il menu halal è stato rispettato, lo staff ha dedicato attenzione alla nostra famiglia. Una serata perfetta a Istanbul.\"", zh: "\"带着孩子同行。民族舞者和旋转舞表演让他们着迷。清真菜单得到尊重，工作人员细心照顾我们一家。完美的伊斯坦布尔之夜。\"", id: "\"Membawa anak-anak. Penari rakyat dan pertunjukan darwis memukau mereka. Menu halal dihormati, staf memberikan keluarga kami perhatian penuh. Malam Istanbul yang sempurna.\"", ms: "\"Bawa anak-anak. Penari rakyat dan persembahan darwish memukau mereka. Menu halal dihormati, kakitangan memberi perhatian yang baik kepada keluarga kami. Malam Istanbul yang sempurna.\"", pl: "\"Zabraliśmy dzieci. Tancerze ludowi i pokaz derwiszów urzekli je. Menu halal było uszanowane, personel troszczył się o naszą rodzinę. Idealna noc w Stambule.\"", bg: "\"Взехме децата. Фолклорните танцьори и представлението на дервишите ги плениха. Халал менюто беше спазено, екипът се отнасяше с внимание към семейството ни. Перфектна нощ в Истанбул.\"", ro: "\"Am luat copiii. Dansatorii populari și spectacolul dervișilor i-au captivat. Meniul halal a fost respectat, personalul a oferit familiei noastre o grijă atentă. O seară perfectă în Istanbul.\"", uk: "\"Взяли дітей. Народні танцюристи та шоу дервішів їх зачарували. Халяльне меню було дотримано, персонал приділив нашій родині уважну турботу. Ідеальний вечір у Istanbul.\"", ja: "「子供たちを連れて行きました。民族舞踊とデルヴィーシュのショーに子供たちは夢中でした。ハラールメニューにも配慮していただき、スタッフの方々が家族を丁寧にケアしてくださいました。完璧なIstanbulの夜でした。」", ko: "\"아이들과 함께했습니다. 민속 무용수들과 데르비시 쇼가 아이들을 사로잡았습니다. 할랄 메뉴를 존중해 주셨고, 직원들이 우리 가족을 세심하게 돌봐주셨습니다. 완벽한 Istanbul의 밤이었습니다.\"", hi: "\"बच्चों को साथ लिया। लोक नर्तकों और दरवेश शो ने उन्हें मंत्रमुग्ध कर दिया। हलाल मेनू का सम्मान किया गया, स्टाफ ने हमारे परिवार की सावधानीपूर्वक देखभाल की। एक आदर्श Istanbul रात।\"", ur: "\"بچوں کو ساتھ لے گئے۔ لوک رقاصوں اور درویش شو نے انہیں مسحور کر دیا۔ حلال مینو کا احترام کیا گیا، عملے نے ہمارے خاندان کی توجہ سے دیکھ بھال کی۔ ایک کامل Istanbul کی رات۔\""
  },
  "reviews.r4.info": {
    en: "Family · UAE", tr: "Aile · BAE", de: "Familie · VAE",
    es: "Familia · EAU", ru: "Семья · ОАЭ", ar: "عائلة · الإمارات",
    fa: "خانواده · امارات", fr: "Famille · EAU", it: "Famiglia · Emirati Arabi Uniti", zh: "家庭 · 阿联酋", id: "Keluarga · UEA", ms: "Keluarga · UAE", pl: "Rodzina · ZEA", bg: "Семейство · ОАЕ", ro: "Familie · EAU", uk: "Сім'я · ОАЕ", ja: "家族・UAE", ko: "가족 · UAE", hi: "परिवार · UAE", ur: "خاندان · متحدہ عرب امارات"
  },
  "reviews.r5": {
    en: "\"We danced until midnight. The DJ, the belly dance show, the live music — pure energy. Our friends from Istanbul said it was the best cruise they'd been on too.\"",
    tr: "\"Gece yarısına kadar dans ettik. DJ, oryantal şov, canlı müzik — saf enerji. İstanbul'daki arkadaşlarımız bile 'en iyi tekne turu buydu' dedi.\"",
    de: "\"Wir haben bis Mitternacht getanzt. DJ, Bauchtanz-Show, Live-Musik — pure Energie. Selbst unsere Freunde aus Istanbul sagten, es sei die beste Tour gewesen.\"",
    es: "\"Bailamos hasta medianoche. El DJ, el show de danza del vientre, la música en vivo — pura energía. Nuestros amigos de Estambul dijeron que fue el mejor crucero.\"",
    ru: "\"Танцевали до полуночи. DJ, танец живота, живая музыка — чистая энергия. Даже наши друзья из Стамбула сказали, что это был лучший круиз.\"",
    ar: "\"رقصنا حتى منتصف الليل. DJ، عرض الرقص الشرقي، الموسيقى الحية — طاقة صافية. قال أصدقاؤنا من إسطنبول إنها كانت أفضل رحلة.\"",
    fa: "«تا نیمه‌شب رقصیدیم. دی‌جی، رقص شرقی، موسیقی زنده — انرژی خالص. دوستان استانبولی ما هم گفتند بهترین توری است که بوده‌اند.»", fr: "« Nous avons dansé jusqu'à minuit. Le DJ, la danse orientale, la musique live — une énergie pure. Nos amis d'Istanbul ont dit que c'était aussi la meilleure croisière qu'ils aient faite. »", it: "\"Abbiamo ballato fino a mezzanotte. Il DJ, lo spettacolo di danza orientale, la musica dal vivo — pura energia. I nostri amici di Istanbul hanno detto che è la migliore crociera che abbiano mai fatto.\"", zh: "\"我们跳舞到午夜。DJ、肚皮舞表演、现场音乐——纯粹的能量。我们来自伊斯坦布尔的朋友也说这是他们去过最好的游船。\"", id: "\"Kami berdansa sampai tengah malam. DJ, pertunjukan tari oriental, musik langsung — energi murni. Teman-teman kami dari Istanbul bilang ini pelayaran terbaik yang pernah mereka ikuti juga.\"", ms: "\"Kami menari sehingga tengah malam. DJ, persembahan tarian oryantal, muzik langsung — tenaga tulen. Kawan-kawan dari Istanbul berkata inilah pelayaran terbaik yang pernah mereka naiki.\"", pl: "\"Tańczyliśmy do północy. DJ, pokaz tańca brzucha, muzyka na żywo — czysta energia. Nasi przyjaciele ze Stambułu powiedzieli, że to najlepszy rejs, na jakim byli.\"", bg: "\"Танцувахме до полунощ. DJ, танцът на корема, музиката на живо — чиста енергия. Приятелите ни от Истанбул казаха, че това е най-добрият круиз, на който са били.\"", ro: "\"Am dansat până la miezul nopții. DJ-ul, spectacolul de dans oriental, muzica live — pură energie. Prietenii noștri din Istanbul au spus că a fost și cea mai bună croazieră pe care au făcut-o.\"", uk: "\"Ми танцювали до півночі. Діджей, шоу танцю живота, жива музика — чиста енергія. Наші друзі з Istanbul сказали, що це найкращий круїз, на якому вони були.\"", ja: "「真夜中まで踊りました。DJ、ベリーダンスショー、ライブミュージック、すべてがエネルギーに溢れていました。Istanbulの友人たちも、今まで乗った中で最高のクルーズだったと言っていました。」", ko: "\"자정까지 춤췄습니다. DJ, 벨리댄스 쇼, 라이브 음악 — 순수한 에너지였습니다. Istanbul에서 온 친구들도 자신들이 경험한 크루즈 중 최고라고 말했습니다.\"", hi: "\"हमने आधी रात तक नृत्य किया। DJ, बेली डांस शो, लाइव संगीत — शुद्ध ऊर्जा। Istanbul के हमारे दोस्तों ने कहा कि यह उनका अब तक का सबसे अच्छा क्रूज़ था।\"", ur: "\"ہم نے آدھی رات تک رقص کیا۔ DJ، بیلی ڈانس شو، لائیو میوزک — خالص توانائی۔ Istanbul سے ہمارے دوستوں نے کہا کہ یہ بہترین کروز تھی جس پر وہ گئے تھے۔\""
  },
  "reviews.r5.info": {
    en: "Couple · Italy", tr: "Çift · İtalya", de: "Paar · Italien",
    es: "Pareja · Italia", ru: "Пара · Италия", ar: "زوجان · إيطاليا",
    fa: "زوج · ایتالیا", fr: "Couple · Italie", it: "Coppia · Italia", zh: "情侣 · 意大利", id: "Pasangan · Italia", ms: "Pasangan · Itali", pl: "Para · Włochy", bg: "Двойка · Италия", ro: "Cuplu · Italia", uk: "Пара · Італія", ja: "カップル・イタリア", ko: "커플 · 이탈리아", hi: "कपल · Italy", ur: "جوڑا · اٹلی"
  },
  "reviews.r6": {
    en: "\"From boarding to the last course, everything was thoughtful. Food fresh, generous portions, the boat looked like a floating restaurant at night. Recommended.\"",
    tr: "\"İskeleden son tatlıya kadar her şey özenliydi. Yemek taze, porsiyonlar bol, tekne gece yüzen bir restoran gibiydi. Tavsiye ederim.\"",
    de: "\"Vom Einsteigen bis zum letzten Gang war alles durchdacht. Frisches Essen, großzügige Portionen, das Boot wirkte nachts wie ein schwimmendes Restaurant. Empfohlen.\"",
    es: "\"Desde el embarque hasta el último plato, todo fue cuidado. Comida fresca, porciones generosas, el barco parecía un restaurante flotante de noche. Recomendado.\"",
    ru: "\"От посадки до последнего блюда всё было продумано. Свежая еда, щедрые порции, лодка вечером как плавучий ресторан. Рекомендую.\"",
    ar: "\"من الصعود إلى آخر طبق، كل شيء كان مدروسًا. طعام طازج، حصص سخية، بدت القارب ليلاً كمطعم عائم. موصى به.\"",
    fa: "«از لحظه سوار شدن تا آخرین غذا، همه چیز با دقت برنامه‌ریزی شده بود. غذا تازه، سهم‌ها سخاوتمندانه و کشتی شب‌ها مثل یک رستوران شناور به نظر می‌رسید. توصیه می‌کنم.»", fr: "« De l'embarquement au dernier plat, tout était pensé. Plats frais, portions généreuses, le bateau ressemblait à un restaurant flottant la nuit. Recommandé. »", it: "\"Dall'imbarco all'ultima portata, tutto è stato curato. Cibo fresco, porzioni generose, la barca sembrava un ristorante galleggiante di notte. Consigliato.\"", zh: "\"从登船到最后一道菜，一切都经过精心设计。食物新鲜、份量慷慨，夜色中的游船像一家漂浮的餐厅。强烈推荐。\"", id: "\"Dari naik kapal hingga hidangan terakhir, semuanya dipikirkan dengan matang. Makanan segar, porsi melimpah, kapal terlihat seperti restoran mengapung di malam hari. Sangat direkomendasikan.\"", ms: "\"Dari menaiki hingga hidangan terakhir, semuanya difikirkan dengan teliti. Makanan segar, hidangan banyak, bot kelihatan seperti restoran terapung pada waktu malam. Disyorkan.\"", pl: "\"Od wejścia na pokład do ostatniego dania wszystko było przemyślane. Jedzenie świeże, obfite porcje, łódź wyglądała nocą jak pływająca restauracja. Polecam.\"", bg: "\"От качването до последното ястие всичко беше премислено. Храната свежа, порциите щедри, лодката изглеждаше като плаващ ресторант през нощта. Препоръчвам.\"", ro: "\"De la îmbarcare până la ultimul fel, totul a fost gândit cu grijă. Mâncare proaspătă, porții generoase, vaporul arăta ca un restaurant plutitor noaptea. Recomandat.\"", uk: "\"Від посадки до останньої страви — все було продумано. Їжа свіжа, щедрі порції, човен вночі виглядав як плавучий ресторан. Рекомендуємо.\"", ja: "「乗船から最後のコースまで、すべてが心遣いに満ちていました。料理は新鮮で、ボリュームもたっぷり。船は夜の海に浮かぶレストランのようでした。おすすめです。」", ko: "\"탑승부터 마지막 코스까지 모든 것이 세심했습니다. 신선한 음식, 넉넉한 양, 밤에 배가 떠다니는 레스토랑처럼 보였습니다. 추천합니다.\"", hi: "\"बोर्डिंग से लेकर अंतिम कोर्स तक, सब कुछ विचारपूर्ण था। भोजन ताज़ा, उदार मात्रा में, नाव रात में एक तैरते रेस्तरां की तरह दिखती थी। अनुशंसित।\"", ur: "\"سوار ہونے سے آخری کورس تک، سب کچھ سوچ سمجھ کر کیا گیا۔ تازہ کھانا، فراخدلانہ مقدار، رات میں کشتی ایک تیرتے ہوئے ریستوران کی طرح لگ رہی تھی۔ تجویز کردہ۔\""
  },
  "reviews.r6.info": {
    en: "Family · Saudi Arabia", tr: "Aile · Suudi Arabistan", de: "Familie · Saudi-Arabien",
    es: "Familia · Arabia Saudita", ru: "Семья · Саудовская Аравия", ar: "عائلة · المملكة العربية السعودية",
    fa: "خانواده · عربستان سعودی", fr: "Famille · Arabie saoudite", it: "Famiglia · Arabia Saudita", zh: "家庭 · 沙特阿拉伯", id: "Keluarga · Arab Saudi", ms: "Keluarga · Arab Saudi", pl: "Rodzina · Arabia Saudyjska", bg: "Семейство · Саудитска Арабия", ro: "Familie · Arabia Saudită", uk: "Сім'я · Саудівська Аравія", ja: "家族・サウジアラビア", ko: "가족 · 사우디아라비아", hi: "परिवार · Saudi Arabia", ur: "خاندان · سعودی عرب"
  },
  "reviews.r7": {
    en: "\"We love food — and this delivered. Each plate arrived with thought, the meat was tender, the flowers on the table made the whole night feel curated. Best Istanbul meal.\"",
    tr: "\"Yemek severiz — burada beklediğimizi bulduk. Her tabak özenliydi, et yumuşaktı, masadaki çiçekler akşamı özel hissettirdi. İstanbul'daki en iyi yemeğimiz.\"",
    de: "\"Wir lieben gutes Essen — und das hier hat überzeugt. Jeder Teller war durchdacht, das Fleisch zart, die Blumen auf dem Tisch machten den Abend besonders.\"",
    es: "\"Amamos la comida — y aquí encontramos lo que buscábamos. Cada plato fue cuidado, la carne tierna, las flores en la mesa hicieron la noche especial.\"",
    ru: "\"Мы любим еду — и здесь нас не разочаровали. Каждая подача продумана, мясо нежное, цветы на столе сделали вечер особенным. Лучший ужин в Стамбуле.\"",
    ar: "\"نحب الطعام — وهذا المكان لبى توقعاتنا. كل طبق جاء بعناية، اللحم كان طرياً، الزهور على الطاولة جعلت الأمسية مميزة.\"",
    fa: "«ما عاشق غذا هستیم — و این تور واقعاً خوب بود. هر بشقاب با دقت آماده شده بود، گوشت لطیف بود و گل‌های روی میز کل شب را ویژه کرد. بهترین وعده غذایی استانبول.»", fr: "« Nous adorons la cuisine — et ici, tout était au rendez-vous. Chaque assiette était soignée, la viande tendre, les fleurs sur la table rendaient toute la soirée raffinée. Le meilleur repas à Istanbul. »", it: "\"Amiamo il cibo — e questo ha soddisfatto. Ogni piatto arrivava curato, la carne era tenera, i fiori sul tavolo davano a tutta la serata un tocco ricercato. Il miglior pasto a Istanbul.\"", zh: "\"我们爱美食——这里毫不逊色。每道菜都用心呈上，肉质鲜嫩，桌上的鲜花让整晚感觉像精心策划。伊斯坦布尔最好的一餐。\"", id: "\"Kami pencinta makanan — dan ini memuaskan. Setiap piring tiba dengan pemikiran, dagingnya empuk, bunga di meja membuat seluruh malam terasa dikurasi. Makanan Istanbul terbaik.\"", ms: "\"Kami sukakan makanan — dan ini memenuhi. Setiap pinggan tiba dengan pertimbangan, daging lembut, bunga di atas meja menjadikan seluruh malam terasa dirancang. Hidangan Istanbul terbaik.\"", pl: "\"Kochamy jedzenie — i to dostarczyło. Każdy talerz podany z przemyśleniem, mięso kruche, kwiaty na stole sprawiły, że cały wieczór wydawał się wyreżyserowany. Najlepszy posiłek w Stambule.\"", bg: "\"Обичаме храната — и тук получихме. Всяко ястие пристигна с внимание, месото беше нежно, цветята на масата направиха цялата нощ да изглежда специално подредена. Най-доброто хранене в Истанбул.\"", ro: "\"Iubim mâncarea — și asta a livrat. Fiecare farfurie a sosit cu atenție, carnea era fragedă, florile de pe masă au făcut ca întreaga seară să pară curată. Cea mai bună masă din Istanbul.\"", uk: "\"Ми любимо їжу — і це виправдало очікування. Кожна страва подавалася з увагою, м'ясо ніжне, квіти на столі зробили весь вечір продуманим. Найкращий обід в Istanbul.\"", ja: "「私たちは食事が大好きですが、期待を裏切りませんでした。一皿一皿が心を込めて提供され、お肉は柔らかく、テーブルの花が夜全体を特別なものにしてくれました。Istanbulで最高の食事でした。」", ko: "\"저희는 음식을 사랑하는데 이곳은 기대를 충족시켰습니다. 각 접시가 정성스럽게 나왔고, 고기는 부드러웠으며, 테이블 위의 꽃들이 밤 전체를 특별하게 만들었습니다. Istanbul 최고의 식사였습니다.\"", hi: "\"हम भोजन से प्यार करते हैं — और इसने वह दिया। हर प्लेट विचार के साथ आई, मांस कोमल था, टेबल पर फूलों ने पूरी रात को क्यूरेटेड महसूस कराया। Istanbul का सबसे बेहतरीन भोजन।\"", ur: "\"ہمیں کھانے سے محبت ہے — اور یہ پورا اترا۔ ہر پلیٹ سوچ کے ساتھ آئی، گوشت نرم تھا، میز پر پھولوں نے پوری رات کو منظم محسوس کرایا۔ Istanbul کا بہترین کھانا۔\""
  },
  "reviews.r7.info": {
    en: "Couple · France", tr: "Çift · Fransa", de: "Paar · Frankreich",
    es: "Pareja · Francia", ru: "Пара · Франция", ar: "زوجان · فرنسا",
    fa: "زوج · فرانسه", fr: "Couple · France", it: "Coppia · Francia", zh: "情侣 · 法国", id: "Pasangan · Prancis", ms: "Pasangan · Perancis", pl: "Para · Francja", bg: "Двойка · Франция", ro: "Cuplu · Franța", uk: "Пара · Франція", ja: "カップル・フランス", ko: "커플 · 프랑스", hi: "कपल · France", ur: "جوڑا · فرانس"
  },
  "reviews.r8": {
    en: "\"Took this from the deck — the boat, the bridge, the city skyline all in one frame. Perfect Istanbul souvenir shot.\"",
    tr: "\"Güverteden tek karede çektim — tekne, köprü, şehir silueti. Mükemmel bir İstanbul hatırası.\"",
    de: "\"Vom Deck aufgenommen — das Boot, die Brücke, die Stadt-Silhouette in einem Bild. Perfekte Istanbul-Erinnerung.\"",
    es: "\"Tomé esta foto desde la cubierta — el barco, el puente, el horizonte en un solo cuadro. Recuerdo perfecto de Estambul.\"",
    ru: "\"Снял с палубы — лодка, мост, силуэт города в одном кадре. Идеальное воспоминание об Стамбуле.\"",
    ar: "\"التقطت هذه من سطح السفينة — القارب والجسر وأفق المدينة في إطار واحد. تذكار إسطنبول مثالي.\"",
    fa: "«این را از عرشه گرفتم — کشتی، پل و خط آسمان شهر همه در یک قاب. عکس کامل یادگاری از استانبول.»", fr: "« J'ai pris cette photo depuis le pont — le bateau, le pont, l'horizon de la ville dans un seul cadre. Un souvenir parfait d'Istanbul. »", it: "\"Ho scattato questa dal ponte — la barca, il ponte, lo skyline della città tutti in un'unica inquadratura. Perfetto souvenir fotografico di Istanbul.\"", zh: "\"在甲板上拍下这张——游船、大桥、城市天际线尽收一框。完美的伊斯坦布尔纪念照。\"", id: "\"Mengambil foto ini dari dek — kapal, jembatan, cakrawala kota semua dalam satu bingkai. Foto kenangan Istanbul yang sempurna.\"", ms: "\"Ambil gambar ini dari dek — bot, jambatan, ufuk bandar semuanya dalam satu bingkai. Gambar kenang-kenangan Istanbul yang sempurna.\"", pl: "\"Zrobiłem to z pokładu — łódź, most, panorama miasta w jednym kadrze. Idealna pamiątka ze Stambułu.\"", bg: "\"Направих я от палубата — лодката, мостът, силуетът на града, всички в един кадър. Перфектен сувенир от Истанбул.\"", ro: "\"Am făcut această fotografie de pe punte — vaporul, podul, silueta orașului toate într-un singur cadru. Fotografia suvenir perfectă din Istanbul.\"", uk: "\"Зробив цей знімок з палуби — човен, міст, силует міста — все в одному кадрі. Ідеальне фото на згадку про Istanbul.\"", ja: "「デッキから撮影しました。ボート、橋、街のスカイラインが一枚の写真に収まっています。完璧なイスタンブール土産の一枚です。」", ko: "\"데크에서 찍은 사진입니다 — 보트, 다리, 도시 스카이라인이 한 프레임에 모두 담겼습니다. 완벽한 Istanbul 기념 사진입니다.\"", hi: "\"यह तस्वीर डेक से ली थी — नाव, पुल, शहर की स्काइलाइन सब एक ही फ़्रेम में। Istanbul की परफेक्ट यादगार तस्वीर।\"", ur: "\"ڈیک سے یہ تصویر لی — کشتی، پل، شہر کا نظارہ سب ایک فریم میں۔ Istanbul کی بہترین یادگار تصویر۔\""
  },
  "reviews.r8.info": {
    en: "Solo · United States", tr: "Tek · ABD", de: "Solo · USA",
    es: "Solo · Estados Unidos", ru: "Соло · США", ar: "فردي · الولايات المتحدة",
    fa: "مسافر تنها · آمریکا", fr: "Solo · États-Unis", it: "Singolo · Stati Uniti", zh: "独行 · 美国", id: "Solo · Amerika Serikat", ms: "Bersendirian · Amerika Syarikat", pl: "Solo · Stany Zjednoczone", bg: "Сам · САЩ", ro: "Individual · Statele Unite", uk: "Solo · United States", ja: "Solo · United States", ko: "Solo · United States", hi: "Solo · United States", ur: "اکیلے · United States"
  },
  "reviews.r9": {
    en: "\"What impressed me most was the service — attentive without being intrusive. The hall looked elegant under the warm lights. Worth every euro.\"",
    tr: "\"Beni en çok etkileyen servisti — ilgili ama rahatsız edici değil. Salon sıcak ışıklar altında zarifti. Her euro'ya değer.\"",
    de: "\"Am meisten beeindruckte der Service — aufmerksam, ohne aufdringlich zu sein. Der Saal wirkte im warmen Licht elegant. Jeden Euro wert.\"",
    es: "\"Lo que más me impresionó fue el servicio — atento sin ser invasivo. El salón elegante bajo las luces cálidas. Vale cada euro.\"",
    ru: "\"Больше всего впечатлил сервис — внимательный, но ненавязчивый. Зал в тёплом свете выглядел элегантно. Стоит каждого евро.\"",
    ar: "\"ما أعجبني أكثر هو الخدمة — منتبهة دون أن تكون متطفلة. القاعة بدت أنيقة تحت الأضواء الدافئة. يستحق كل يورو.\"",
    fa: "«آنچه بیشتر مرا تحت تأثیر قرار داد، خدمات بود — دقیق و در عین حال بدون مزاحمت. سالن زیر نور گرم بسیار شیک به نظر می‌رسید. ارزش هر یورو را داشت.»", fr: "« Ce qui m'a le plus impressionné, c'est le service — attentif sans être intrusif. La salle était élégante sous les lumières chaudes. Cela valait chaque euro. »", it: "\"Ciò che mi ha più colpito è stato il servizio — attento senza essere invadente. La sala appariva elegante sotto le luci calde. Vale ogni euro.\"", zh: "\"最打动我的是服务——贴心而不打扰。暖光下的大厅显得优雅。每一欧元都值得。\"", id: "\"Yang paling mengesankan saya adalah layanan — penuh perhatian tanpa mengganggu. Aula terlihat elegan di bawah lampu hangat. Sepadan setiap euronya.\"", ms: "\"Yang paling memberi kesan kepada saya ialah perkhidmatan — penuh perhatian tanpa mengganggu. Dewan kelihatan elegan di bawah cahaya hangat. Berbaloi setiap euro.\"", pl: "\"Najbardziej wrażenie zrobiła na mnie obsługa — uważna, ale nienarzucająca się. Sala wyglądała elegancko w ciepłym świetle. Warta każdego euro.\"", bg: "\"Това, което ме впечатли най-много, беше обслужването — внимателно, без да е натрапчиво. Залата изглеждаше елегантна под топлите светлини. Струваше си всяко евро.\"", ro: "\"Ceea ce m-a impresionat cel mai mult a fost serviciul — atent fără a fi intruziv. Sala arăta elegantă sub luminile calde. Merită fiecare euro.\"", uk: "\"Найбільше мене вразив сервіс — уважний, але ненав'язливий. Зал виглядав елегантно в теплому світлі. Вартий кожного євро.\"", ja: "「最も印象的だったのはサービスでした。押し付けがましくなく、細やかな気配りがございました。温かい照明の下でホールがとても優雅に見えました。価値あるユーロでした。」", ko: "\"가장 인상 깊었던 것은 서비스였습니다 — 세심하면서도 부담스럽지 않았습니다. 따뜻한 조명 아래 홀이 우아하게 보였습니다. 유로 한 푼이 아깝지 않았습니다.\"", hi: "\"जिस बात ने मुझे सबसे ज़्यादा प्रभावित किया वह थी सेवा — ध्यान देने वाली लेकिन बिल्कुल भी दखल देने वाली नहीं। गर्म रोशनी में हॉल बेहद सुरुचिपूर्ण लग रहा था। हर यूरो के लायक।\"", ur: "\"مجھے سب سے زیادہ سروس نے متاثر کیا — توجہ دینے والے مگر مداخلت کیے بغیر۔ ہال گرم روشنیوں میں شاندار لگ رہا تھا۔ ہر یورو کے قابل۔\""
  },
  "reviews.r9.info": {
    en: "Solo · Spain", tr: "Tek · İspanya", de: "Solo · Spanien",
    es: "Solo · España", ru: "Соло · Испания", ar: "فردي · إسبانيا",
    fa: "مسافر تنها · اسپانیا", fr: "Solo · Espagne", it: "Singolo · Spagna", zh: "独行 · 西班牙", id: "Solo · Spanyol", ms: "Bersendirian · Sepanyol", pl: "Solo · Hiszpania", bg: "Сам · Испания", ro: "Individual · Spania", uk: "Solo · Spain", ja: "Solo · Spain", ko: "Solo · Spain", hi: "Solo · Spain", ur: "اکیلے · Spain"
  },
  "reviews.r10": {
    en: "\"I live in Istanbul but had never tried a cruise like this. Went with my foreign guests — they all loved it. Professional organization.\"",
    tr: "\"Istanbul'da yaşıyorum ama ilk kez böyle bir tur denedim. Yurtdışından gelen misafirlerimle gittik, hepsi çok beğendi. Profesyonel bir organizasyon.\"",
    de: "\"Ich lebe in Istanbul, aber solch eine Tour hatte ich noch nie gemacht. Mit ausländischen Gästen — alle begeistert. Professionelle Organisation.\"",
    es: "\"Vivo en Estambul pero nunca había probado un crucero así. Fui con invitados extranjeros — les encantó. Organización profesional.\"",
    ru: "\"Я живу в Стамбуле, но никогда не пробовал такой круиз. Пошёл с иностранными гостями — всем очень понравилось. Профессионально.\"",
    ar: "\"أعيش في إسطنبول لكنني لم أجرب رحلة كهذه من قبل. ذهبت مع ضيوفي الأجانب — أحبوها جميعًا. تنظيم احترافي.\"",
    fa: "«من در استانبول زندگی می‌کنم ولی هرگز چنین توری را امتحان نکرده بودم. با مهمانان خارجی‌ام رفتم — همه عاشقش شدند. سازماندهی حرفه‌ای بود.»", fr: "« Je vis à Istanbul mais je n'avais jamais essayé une telle croisière. J'y suis allé avec mes invités étrangers — ils ont tous adoré. Organisation professionnelle. »", it: "\"Vivo a Istanbul ma non avevo mai provato una crociera come questa. Sono andata con i miei ospiti stranieri — è piaciuta a tutti. Organizzazione professionale.\"", zh: "\"我住在伊斯坦布尔，却从未尝试过这样的游船。带着外国客人一起——他们都爱上了。专业的组织。\"", id: "\"Saya tinggal di Istanbul tetapi belum pernah mencoba pelayaran seperti ini. Pergi dengan tamu asing saya — mereka semua menyukainya. Organisasi profesional.\"", ms: "\"Saya tinggal di Istanbul tetapi tidak pernah mencuba pelayaran seperti ini. Pergi dengan tetamu asing saya — mereka semua sukakannya. Organisasi profesional.\"", pl: "\"Mieszkam w Stambule, ale nigdy wcześniej nie próbowałem takiego rejsu. Poszedłem z zagranicznymi gośćmi — wszyscy byli zachwyceni. Profesjonalna organizacja.\"", bg: "\"Живея в Истанбул, но никога не бях опитвал такъв круиз. Отидох с гостите си от чужбина — всички го харесаха. Професионална организация.\"", ro: "\"Locuiesc în Istanbul, dar nu încercasem niciodată o asemenea croazieră. Am mers cu oaspeții mei străini — tuturor le-a plăcut. Organizare profesionistă.\"", uk: "\"Я живу в Istanbul, але ніколи не пробував такий круїз. Поїхав зі своїми іноземними гостями — всім дуже сподобалося. Професійна організація.\"", ja: "「イスタンブールに住んでいますが、このようなクルーズは初めて体験しました。海外からのゲストと一緒に参加しましたが、皆とても気に入っていました。プロフェッショナルな運営です。」", ko: "\"Istanbul에 살고 있지만 이런 크루즈는 처음 이용해봤습니다. 외국인 손님들과 함께 갔는데 모두 아주 좋아했습니다. 전문적인 운영이었습니다.\"", hi: "\"मैं Istanbul में रहता हूँ लेकिन ऐसी क्रूज़ कभी नहीं ली थी। अपने विदेशी मेहमानों के साथ गया — सभी को बेहद पसंद आया। प्रोफेशनल व्यवस्था।\"", ur: "\"میں Istanbul میں رہتا ہوں لیکن کبھی اس طرح کا کروز نہیں آزمایا تھا۔ اپنے غیر ملکی مہمانوں کے ساتھ گیا — سب کو بہت پسند آیا۔ پیشہ ورانہ انتظام۔\""
  },
  "reviews.r10.info": {
    en: "Couple · Turkey", tr: "Çift · Türkiye", de: "Paar · Türkei",
    es: "Pareja · Turquía", ru: "Пара · Турция", ar: "زوجان · تركيا",
    fa: "زوج · ترکیه", fr: "Couple · Turquie", it: "Coppia · Turchia", zh: "情侣 · 土耳其", id: "Pasangan · Turki", ms: "Pasangan · Turki", pl: "Para · Turcja", bg: "Двойка · Турция", ro: "Cuplu · Turcia", uk: "Couple · Turkey", ja: "Couple · Turkey", ko: "Couple · Turkey", hi: "Couple · Turkey", ur: "جوڑا · Turkey"
  },
  "reviews.r11": {
    en: "\"The Turkish night show was magical — costumes, colors, and the energy of the dancers. I caught this beautiful moment on camera.\"",
    tr: "\"Türk gecesi şovu büyüleyiciydi — kostümler, renkler, dansçıların enerjisi. Bu güzel anı kameraya aldım.\"",
    de: "\"Die Türkische Nacht war magisch — Kostüme, Farben, die Energie der Tänzer. Diesen schönen Moment habe ich eingefangen.\"",
    es: "\"El show de noche turca fue mágico — trajes, colores, la energía de los bailarines. Capturé este hermoso momento.\"",
    ru: "\"Турецкое ночное шоу было волшебным — костюмы, краски, энергия танцоров. Поймала этот прекрасный момент.\"",
    ar: "\"عرض الليلة التركية كان سحريًا — الأزياء والألوان وطاقة الراقصين. التقطت هذه اللحظة الجميلة.\"",
    fa: "«نمایش شب ترکی جادویی بود — لباس‌ها، رنگ‌ها و انرژی رقصندگان. این لحظه زیبا را در دوربینم ثبت کردم.»", fr: "« La soirée turque était magique — les costumes, les couleurs et l'énergie des danseurs. J'ai capturé ce beau moment en photo. »", it: "\"Lo spettacolo della serata turca è stato magico — costumi, colori e l'energia dei ballerini. Ho catturato questo bellissimo momento con la fotocamera.\"", zh: "\"土耳其之夜表演很神奇——服装、色彩、舞者的能量。我用镜头捕捉到了这个美丽的瞬间。\"", id: "\"Pertunjukan malam Turki sungguh ajaib — kostum, warna, dan energi para penari. Saya menangkap momen indah ini dengan kamera.\"", ms: "\"Persembahan malam Turki benar-benar ajaib — pakaian, warna dan tenaga penari. Saya tangkap saat indah ini melalui kamera.\"", pl: "\"Turecki pokaz nocny był magiczny — kostiumy, kolory i energia tancerzy. Uchwyciłem tę piękną chwilę na aparacie.\"", bg: "\"Турската нощна програма беше магическа — костюми, цветове и енергията на танцьорите. Хванах този красив момент на камерата.\"", ro: "\"Spectacolul de seară turcească a fost magic — costume, culori și energia dansatorilor. Am surprins acest moment frumos pe aparatul foto.\"", uk: "\"Турецьке нічне шоу було чарівним — костюми, кольори й енергія танцюристів. Я зловив цей прекрасний момент на камеру.\"", ja: "「トルコナイトショーは魔法のようでした。衣装、色彩、そしてダンサーのエネルギー。この美しい瞬間をカメラに収めることができました。」", ko: "\"터키 나이트 쇼는 마법 같았습니다 — 의상, 색채, 그리고 댄서들의 에너지. 이 아름다운 순간을 카메라에 담았습니다.\"", hi: "\"Turkish नाइट शो जादुई था — परिधान, रंग, और नर्तकों की ऊर्जा। मैंने कैमरे में इस खूबसूरत पल को कैद किया।\"", ur: "\"ترکی رات کا شو جادوئی تھا — لباس، رنگ، اور رقاصوں کی توانائی۔ میں نے اس خوبصورت لمحے کو کیمرے میں قید کر لیا۔\""
  },
  "reviews.r11.info": {
    en: "Solo · Japan", tr: "Tek · Japonya", de: "Solo · Japan",
    es: "Solo · Japón", ru: "Соло · Япония", ar: "فردي · اليابان",
    fa: "مسافر تنها · ژاپن", fr: "Solo · Japon", it: "Singolo · Giappone", zh: "独行 · 日本", id: "Solo · Jepang", ms: "Bersendirian · Jepun", pl: "Solo · Japonia", bg: "Сам · Япония", ro: "Individual · Japonia", uk: "Solo · Japan", ja: "Solo · Japan", ko: "Solo · Japan", hi: "Solo · Japan", ur: "اکیلے · Japan"
  },
  "reviews.r12": {
    en: "\"Punctual, clean boat, very friendly crew. Price-to-quality ratio is excellent. We'd come back on our next Istanbul visit.\"",
    tr: "\"Dakik, temiz tekne, çok güler yüzlü ekip. Fiyat-kalite dengesi çok iyi. Bir sonraki İstanbul ziyaretimizde yine geliriz.\"",
    de: "\"Pünktlich, sauberes Boot, sehr freundliche Crew. Preis-Leistungs-Verhältnis hervorragend. Wir kommen bei unserem nächsten Istanbul-Besuch wieder.\"",
    es: "\"Puntuales, barco limpio, tripulación muy amable. Relación calidad-precio excelente. Volveremos en nuestra próxima visita a Estambul.\"",
    ru: "\"Пунктуально, чистая лодка, очень приветливая команда. Соотношение цены и качества отличное. Вернёмся в следующий приезд.\"",
    ar: "\"في الوقت، قارب نظيف، طاقم ودود جدًا. نسبة الجودة إلى السعر ممتازة. سنعود في زيارتنا القادمة لإسطنبول.\"",
    fa: "«وقت‌شناس، کشتی تمیز و خدمه بسیار صمیمی. نسبت قیمت به کیفیت عالی است. در سفر بعدی به استانبول حتماً دوباره می‌آییم.»", fr: "« Ponctuel, bateau propre, équipage très sympathique. Le rapport qualité-prix est excellent. Nous reviendrons lors de notre prochaine visite à Istanbul. »", it: "\"Puntuali, barca pulita, equipaggio molto gentile. Il rapporto qualità-prezzo è eccellente. Torneremo alla nostra prossima visita a Istanbul.\"", zh: "\"准时、船很干净、船员非常友好。性价比极高。下次来伊斯坦布尔还会回来。\"", id: "\"Tepat waktu, kapal bersih, kru sangat ramah. Rasio harga-kualitas sangat baik. Kami akan datang lagi pada kunjungan Istanbul berikutnya.\"", ms: "\"Tepat pada masa, bot bersih, kru sangat mesra. Nisbah harga-berbanding-kualiti sangat baik. Kami akan datang lagi pada lawatan Istanbul seterusnya.\"", pl: "\"Punktualni, czysta łódź, bardzo przyjazna załoga. Stosunek ceny do jakości jest doskonały. Wrócilibyśmy przy następnej wizycie w Stambule.\"", bg: "\"Точни, чиста лодка, много приятелски настроен екип. Съотношението цена-качество е отлично. Бихме се върнали при следващото посещение в Истанбул.\"", ro: "\"Punctual, vapor curat, echipaj foarte prietenos. Raportul preț-calitate este excelent. Am reveni la următoarea noastră vizită în Istanbul.\"", uk: "\"Пунктуальні, чистий човен, дуже привітна команда. Співвідношення ціни та якості чудове. Ми повернемося під час наступного візиту до Istanbul.\"", ja: "「時間厳守で、船内は清潔、クルーの皆さんもとてもフレンドリーでした。価格と品質のバランスが素晴らしいです。次回のイスタンブール訪問でもまた来たいです。」", ko: "\"정시 출발, 깨끗한 보트, 매우 친절한 승무원. 가격 대비 품질이 훌륭합니다. 다음 Istanbul 방문 때 다시 오고 싶습니다.\"", hi: "\"समय पर, साफ़-सुथरी नाव, बेहद मिलनसार स्टाफ। कीमत और गुणवत्ता का अनुपात उत्कृष्ट है। हम अगली Istanbul यात्रा पर फिर आएँगे।\"", ur: "\"وقت کی پابندی، صاف ستھری کشتی، بہت دوستانہ عملہ۔ قیمت اور معیار کا تناسب بہترین ہے۔ اگلی Istanbul کی زیارت پر واپس آئیں گے۔\""
  },
  "reviews.r12.info": {
    en: "Couple · Germany", tr: "Çift · Almanya", de: "Paar · Deutschland",
    es: "Pareja · Alemania", ru: "Пара · Германия", ar: "زوجان · ألمانيا",
    fa: "زوج · آلمان", fr: "Couple · Allemagne", it: "Coppia · Germania", zh: "情侣 · 德国", id: "Pasangan · Jerman", ms: "Pasangan · Jerman", pl: "Para · Niemcy", bg: "Двойка · Германия", ro: "Cuplu · Germania", uk: "Couple · Germany", ja: "Couple · Germany", ko: "Couple · Germany", hi: "Couple · Germany", ur: "جوڑا · Germany"
  },
  "reviews.r13": {
    en: "\"Every dancer brought a different story. The red-dressed performer in particular had such stage presence — we couldn't look away.\"",
    tr: "\"Her dansçı farklı bir hikaye anlatıyordu. Özellikle kırmızı elbiseli sanatçının sahne hakimiyeti öyleydi ki gözümüzü ayıramadık.\"",
    de: "\"Jede Tänzerin erzählte eine andere Geschichte. Die Tänzerin im roten Kleid hatte eine solche Bühnenpräsenz — wir konnten nicht wegsehen.\"",
    es: "\"Cada bailarín traía una historia diferente. La intérprete vestida de rojo tenía tal presencia escénica que no podíamos apartar la vista.\"",
    ru: "\"Каждая танцовщица рассказывала свою историю. Исполнительница в красном платье обладала такой сценической харизмой, что оторваться было невозможно.\"",
    ar: "\"كل راقصة حملت قصة مختلفة. الراقصة ذات الفستان الأحمر تحديدًا كان لها حضور مسرحي لا يُقاوَم — لم نستطع إبعاد أنظارنا.\"",
    fa: "«هر رقصنده داستانی متفاوت داشت. به‌خصوص اجراکننده با لباس قرمز چنان حضور صحنه‌ای داشت که نمی‌توانستیم نگاه برداریم.»", fr: "« Chaque danseur apportait une histoire différente. L'artiste en robe rouge en particulier avait une présence scénique remarquable — impossible de détourner le regard. »", it: "\"Ogni ballerino ha portato una storia diversa. L'interprete in abito rosso in particolare aveva una tale presenza scenica — non riuscivamo a distogliere lo sguardo.\"", zh: "\"每位舞者都带来不同的故事。尤其那位红衣表演者，舞台气场十足——让人目不转睛。\"", id: "\"Setiap penari membawa cerita yang berbeda. Penari bergaun merah khususnya memiliki aura panggung yang kuat — kami tidak bisa mengalihkan pandangan.\"", ms: "\"Setiap penari membawa cerita berbeza. Penari berbaju merah terutamanya mempunyai kehadiran pentas yang sangat kuat — kami tidak boleh berpaling.\"", pl: "\"Każdy tancerz przyniósł inną historię. Szczególnie wykonawczyni w czerwonej sukni miała taką obecność sceniczną — nie mogliśmy oderwać wzroku.\"", bg: "\"Всеки танцьор представи различна история. Изпълнителката в червената рокля беше особено впечатляваща — не можехме да откъснем поглед.\"", ro: "\"Fiecare dansator a adus o poveste diferită. Interpreta în rochie roșie în special avea o asemenea prezență scenică — nu ne puteam lua ochii.\"", uk: "\"Кожен танцюрист розповідав свою історію. Особливо виконавиця в червоній сукні мала таку сценічну присутність — ми не могли відвести погляд.\"", ja: "「各ダンサーが異なる物語を届けてくれました。特に赤いドレスのパフォーマーは圧倒的な存在感で、目が離せませんでした。」", ko: "\"모든 댄서가 각기 다른 이야기를 전달했습니다. 특히 빨간 드레스를 입은 공연자는 무대 장악력이 대단했습니다 — 눈을 뗄 수 없었습니다.\"", hi: "\"हर नर्तक ने एक अलग कहानी प्रस्तुत की। विशेष रूप से लाल पोशाक वाली कलाकार की मंच पर उपस्थिति कुछ ऐसी थी — हम नज़रें हटा नहीं सके।\"", ur: "\"ہر رقاصہ ایک مختلف کہانی لے کر آئی۔ خاص طور پر سرخ لباس میں فنکار کی اسٹیج پر موجودگی بہت شاندار تھی — ہم نظریں نہیں ہٹا سکے۔\""
  },
  "reviews.r13.info": {
    en: "Couple · Austria", tr: "Çift · Avusturya", de: "Paar · Österreich",
    es: "Pareja · Austria", ru: "Пара · Австрия", ar: "زوجان · النمسا",
    fa: "زوج · اتریش", fr: "Couple · Autriche", it: "Coppia · Austria", zh: "情侣 · 奥地利", id: "Pasangan · Austria", ms: "Pasangan · Austria", pl: "Para · Austria", bg: "Двойка · Австрия", ro: "Cuplu · Austria", uk: "Couple · Austria", ja: "Couple · Austria", ko: "Couple · Austria", hi: "Couple · Austria", ur: "جوڑا · Austria"
  },
  "reviews.r14": {
    en: "\"The belly dance performance was incredible — the dancer commanded the whole room. Pure artistry. Felt welcomed all evening on my solo trip.\"",
    tr: "\"Oryantal dans gösterisi inanılmazdı — dansçı tüm salona hakimdi. Saf sanat. Solo seyahatimde akşam boyunca kendimi hoş karşılanmış hissettim.\"",
    de: "\"Die Bauchtanz-Performance war unglaublich — die Tänzerin beherrschte den ganzen Saal. Pure Kunst. Auf meiner Solo-Reise fühlte ich mich den ganzen Abend willkommen.\"",
    es: "\"El espectáculo de danza del vientre fue increíble — la bailarina dominó toda la sala. Puro arte. Me sentí bienvenida durante toda mi noche en solitario.\"",
    ru: "\"Шоу с танцем живота было невероятным — танцовщица завладела вниманием всего зала. Чистое искусство. На моей сольной поездке я чувствовала себя как дома весь вечер.\"",
    ar: "\"عرض الرقص الشرقي كان لا يصدق — الراقصة سيطرت على القاعة كلها. فن نقي. شعرت بالترحيب طوال أمسيتي الفردية.\"",
    fa: "«اجرای رقص شرقی خارق‌العاده بود — رقصنده کل سالن را در اختیار داشت. هنر خالص. در سفر تنهایی‌ام تمام شب احساس خوشامدگویی کردم.»", fr: "« La performance de danse orientale était incroyable — la danseuse dominait toute la salle. De l'art pur. Je me suis senti bienvenu toute la soirée lors de mon voyage en solo. »", it: "\"L'esibizione di danza orientale è stata incredibile — la ballerina ha dominato tutta la sala. Pura arte. Mi sono sentita benvenuta per tutta la serata durante il mio viaggio in solitaria.\"", zh: "\"肚皮舞表演精彩绝伦——舞者掌控了整个房间。纯粹的艺术。我独自出行，整晚都感受到热情接待。\"", id: "\"Pertunjukan tari oriental luar biasa — penarinya menguasai seluruh ruangan. Seni murni. Merasa disambut sepanjang malam dalam perjalanan solo saya.\"", ms: "\"Persembahan tarian oryantal sangat luar biasa — penari menguasai seluruh ruang. Seni tulen. Rasa dialu-alukan sepanjang malam pada perjalanan bersendirian saya.\"", pl: "\"Występ tańca brzucha był niewiarygodny — tancerka opanowała całą salę. Czysty kunszt. Czułam się mile widziana przez cały wieczór podczas mojej samotnej podróży.\"", bg: "\"Представлението с танц на корема беше невероятно — танцьорката владееше цялата зала. Чисто изкуство. Чувствах се добре дошла цяла вечер по време на самостоятелното си пътуване.\"", ro: "\"Spectacolul de dans oriental a fost incredibil — dansatoarea a dominat întreaga sală. Artă pură. M-am simțit bine primită toată seara în călătoria mea individuală.\"", uk: "\"Танець живота був неймовірним — танцівниця володіла увагою всього залу. Справжнє мистецтво. Весь вечір відчував гостинність під час своєї самотньої подорожі.\"", ja: "「ベリーダンスのパフォーマンスは圧巻でした。ダンサーが会場全体を魅了していました。純粋な芸術です。一人旅でしたが、一晩中温かく迎えていただきました。」", ko: "\"벨리댄스 공연은 놀라웠습니다 — 댄서가 홀 전체를 장악했습니다. 순수한 예술이었습니다. 혼자 여행하는 내내 환대받는 느낌이었습니다.\"", hi: "\"बेली डांस प्रस्तुति अविश्वसनीय थी — नर्तकी ने पूरे कमरे पर अपनी छाप छोड़ दी। शुद्ध कलात्मकता। अपनी अकेले यात्रा में पूरी शाम स्वागत महसूस किया।\"", ur: "\"بیلی ڈانس کی پرفارمنس ناقابل یقین تھی — رقاصہ نے پورے ہال پر حکومت کی۔ خالص فن۔ اپنے اکیلے سفر میں پوری شام خوش آمدید محسوس کیا۔\""
  },
  "reviews.r14.info": {
    en: "Solo · Netherlands", tr: "Tek · Hollanda", de: "Solo · Niederlande",
    es: "Solo · Países Bajos", ru: "Соло · Нидерланды", ar: "فردي · هولندا",
    fa: "مسافر تنها · هلند", fr: "Solo · Pays-Bas", it: "Singolo · Paesi Bassi", zh: "独行 · 荷兰", id: "Solo · Belanda", ms: "Bersendirian · Belanda", pl: "Solo · Holandia", bg: "Сам · Нидерландия", ro: "Individual · Olanda", uk: "Solo · Netherlands", ja: "Solo · Netherlands", ko: "Solo · Netherlands", hi: "Solo · Netherlands", ur: "اکیلے · Netherlands"
  },
  "reviews.r15": {
    en: "\"Booked last minute via WhatsApp. Response within minutes, confirmed instantly, paid on the boat. Smooth process, great night. Highly recommended.\"",
    tr: "\"Son dakika WhatsApp'tan rezervasyon yaptım. Dakikalar içinde yanıt, anında onay, teknede ödeme. Pürüzsüz süreç, harika bir gece. Kesinlikle tavsiye ederim.\"",
    de: "\"Last-Minute über WhatsApp gebucht. Antwort binnen Minuten, sofort bestätigt, an Bord bezahlt. Reibungsloser Ablauf, großartiger Abend. Sehr empfehlenswert.\"",
    es: "\"Reservé a último minuto por WhatsApp. Respuesta en minutos, confirmado al instante, pagué en el barco. Proceso fluido, gran noche. Muy recomendado.\"",
    ru: "\"Забронировал в последний момент через WhatsApp. Ответ за минуты, мгновенное подтверждение, оплата на борту. Плавный процесс, отличный вечер.\"",
    ar: "\"حجزت في اللحظة الأخيرة عبر واتساب. استجابة في دقائق، تأكيد فوري، دفعت على القارب. عملية سلسة، ليلة رائعة. أوصي به بشدة.\"",
    fa: "«در آخرین لحظه از طریق واتس‌اپ رزرو کردم. ظرف چند دقیقه پاسخ دادند، فوراً تأیید شد و روی کشتی پرداخت کردم. فرایند روان، شب عالی. به‌شدت توصیه می‌کنم.»", fr: "« Réservé à la dernière minute via WhatsApp. Réponse en quelques minutes, confirmation instantanée, paiement à bord. Processus fluide, excellente soirée. Vivement recommandé. »", it: "\"Prenotato all'ultimo momento via WhatsApp. Risposta in pochi minuti, confermato all'istante, pagato a bordo. Processo fluido, serata splendida. Altamente consigliato.\"", zh: "\"通过WhatsApp临时预订。几分钟内回复，即时确认，船上付款。流程顺畅，夜晚美妙。强烈推荐。\"", id: "\"Memesan di menit terakhir via WhatsApp. Merespons dalam hitungan menit, dikonfirmasi secara instan, membayar di kapal. Proses mulus, malam yang luar biasa. Sangat direkomendasikan.\"", ms: "\"Menempah saat akhir melalui WhatsApp. Balas dalam beberapa minit, disahkan serta-merta, dibayar di atas bot. Proses lancar, malam yang hebat. Sangat disyorkan.\"", pl: "\"Zarezerwowałem w ostatniej chwili przez WhatsApp. Odpowiedź w ciągu kilku minut, natychmiast potwierdzona, zapłacono na pokładzie. Gładki proces, wspaniała noc. Gorąco polecam.\"", bg: "\"Резервирах в последната минута по WhatsApp. Отговор за минути, мигновено потвърждение, платих на борда. Гладък процес, страхотна вечер. Горещо препоръчвам.\"", ro: "\"Am rezervat în ultimul moment pe WhatsApp. Răspuns în câteva minute, confirmare instantanee, plata pe vapor. Proces ușor, seară minunată. Recomand cu căldură.\"", uk: "\"Забронював в останню хвилину через WhatsApp. Відповідь за кілька хвилин, миттєве підтвердження, оплата на човні. Простий процес, чудовий вечір. Дуже рекомендую.\"", ja: "「WhatsAppで直前予約しました。数分以内に返信があり、即座に確認、船内で支払いました。スムーズな流れで、素晴らしい夜でした。強くお勧めします。」", ko: "\"WhatsApp으로 막판 예약했습니다. 몇 분 만에 답변 받고, 즉시 확정되었으며, 보트에서 결제했습니다. 순조로운 과정이었고 멋진 밤이었습니다. 강력 추천합니다.\"", hi: "\"WhatsApp से अंतिम समय में बुक किया। कुछ मिनटों में जवाब मिला, तुरंत कन्फर्म हुआ, नाव पर भुगतान किया। आसान प्रक्रिया, शानदार शाम। अत्यधिक अनुशंसित।\"", ur: "\"WhatsApp کے ذریعے آخری لمحے میں بک کیا۔ منٹوں میں جواب، فوری تصدیق، کشتی پر ادائیگی کی۔ آسان عمل، شاندار رات۔ انتہائی تجویز کردہ۔\""
  },
  "reviews.r15.info": {
    en: "Solo · Russia", tr: "Tek · Rusya", de: "Solo · Russland",
    es: "Solo · Rusia", ru: "Соло · Россия", ar: "فردي · روسيا",
    fa: "مسافر تنها · روسیه", fr: "Solo · Russie", it: "Singolo · Russia", zh: "独行 · 俄罗斯", id: "Solo · Rusia", ms: "Bersendirian · Rusia", pl: "Solo · Rosja", bg: "Сам · Русия", ro: "Individual · Rusia", uk: "Solo · Russia", ja: "Solo · Russia", ko: "Solo · Russia", hi: "Solo · Russia", ur: "اکیلے · Russia"
  },
  "reviews.r16": {
    en: "\"Halal menu was wonderful. Staff answered our questions patiently. Perfect for Muslim travelers visiting Istanbul.\"",
    tr: "\"Helal menü harikaydı. Ekip sorularımızı sabırla cevapladı. İstanbul'a gelen Müslüman misafirler için mükemmel.\"",
    de: "\"Halal-Menü war wunderbar. Das Team beantwortete unsere Fragen geduldig. Perfekt für muslimische Reisende.\"",
    es: "\"Menú halal estupendo. El personal respondió pacientemente a nuestras preguntas. Perfecto para viajeros musulmanes.\"",
    ru: "\"Халяль-меню было прекрасным. Персонал терпеливо отвечал на наши вопросы. Идеально для мусульманских путешественников.\"",
    ar: "\"قائمة الحلال كانت رائعة. أجاب الطاقم على أسئلتنا بصبر. مثالي للمسافرين المسلمين.\"",
    fa: "«منوی حلال فوق‌العاده بود. کارکنان با صبر به سؤالات ما پاسخ دادند. عالی برای مسافران مسلمان در استانبول.»", fr: "« Le menu halal était merveilleux. Le personnel a répondu à nos questions avec patience. Parfait pour les voyageurs musulmans visitant Istanbul. »", it: "\"Il menu halal era meraviglioso. Lo staff ha risposto alle nostre domande con pazienza. Perfetto per i viaggiatori musulmani in visita a Istanbul.\"", zh: "\"清真菜单很棒。工作人员耐心回答我们的问题。对前来伊斯坦布尔的穆斯林旅客很合适。\"", id: "\"Menu halal luar biasa. Staf menjawab pertanyaan kami dengan sabar. Sempurna untuk wisatawan Muslim yang mengunjungi Istanbul.\"", ms: "\"Menu halal sangat indah. Kakitangan menjawab soalan kami dengan sabar. Sempurna untuk pengembara Muslim yang melawat Istanbul.\"", pl: "\"Menu halal było wspaniałe. Personel cierpliwie odpowiadał na nasze pytania. Idealne dla muzułmańskich podróżnych odwiedzających Stambuł.\"", bg: "\"Халал менюто беше прекрасно. Екипът отговаряше търпеливо на въпросите ни. Перфектно за мюсюлмански пътешественици, посещаващи Истанбул.\"", ro: "\"Meniul halal a fost minunat. Personalul ne-a răspuns la întrebări cu răbdare. Perfect pentru călătorii musulmani care vizitează Istanbulul.\"", uk: "\"Халяльне меню було чудовим. Персонал терпляче відповідав на наші запитання. Ідеально для мусульманських мандрівників, які відвідують Istanbul.\"", ja: "「ハラールメニューが素晴らしかったです。スタッフの皆さんが丁寧に質問に答えてくださいました。イスタンブールを訪れるムスリムの旅行者に最適です。」", ko: "\"할랄 메뉴가 훌륭했습니다. 직원들이 질문에 친절하게 답변해주었습니다. Istanbul을 방문하는 무슬림 여행자에게 완벽합니다.\"", hi: "\"हलाल मेन्यू बेहतरीन था। स्टाफ ने धैर्यपूर्वक हमारे सवालों के जवाब दिए। Istanbul आने वाले मुस्लिम यात्रियों के लिए परफेक्ट।\"", ur: "\"حلال مینو شاندار تھا۔ عملے نے ہمارے سوالات کا صبر سے جواب دیا۔ Istanbul آنے والے مسلمان مسافروں کے لیے بہترین۔\""
  },
  "reviews.r16.info": {
    en: "Couple · Morocco", tr: "Çift · Fas", de: "Paar · Marokko",
    es: "Pareja · Marruecos", ru: "Пара · Марокко", ar: "زوجان · المغرب",
    fa: "زوج · مراکش", fr: "Couple · Maroc", it: "Coppia · Marocco", zh: "情侣 · 摩洛哥", id: "Pasangan · Maroko", ms: "Pasangan · Maghribi", pl: "Para · Maroko", bg: "Двойка · Мароко", ro: "Cuplu · Maroc", uk: "Couple · Morocco", ja: "Couple · Morocco", ko: "Couple · Morocco", hi: "Couple · Morocco", ur: "جوڑا · Morocco"
  },
  "reviews.r17": {
    en: "\"Pure Istanbul magic. The DJ after dinner kept us dancing until midnight. Incredible energy on the dance floor.\"",
    tr: "\"Saf İstanbul büyüsü. Yemekten sonra DJ gece yarısına kadar dans ettirdi. Dans pistinde inanılmaz bir enerji.\"",
    de: "\"Pure Istanbul-Magie. Der DJ nach dem Essen hielt uns bis Mitternacht auf der Tanzfläche. Unglaubliche Energie.\"",
    es: "\"Pura magia de Estambul. El DJ después de la cena nos mantuvo bailando hasta medianoche. Energía increíble.\"",
    ru: "\"Чистая магия Стамбула. DJ после ужина удерживал нас на танцполе до полуночи. Невероятная энергия.\"",
    ar: "\"سحر إسطنبول الخالص. DJ بعد العشاء أبقانا نرقص حتى منتصف الليل. طاقة لا تصدق على حلبة الرقص.\"",
    fa: "«جادوی خالص استانبول. دی‌جی پس از شام ما را تا نیمه‌شب به رقص واداشت. انرژی باورنکردنی در پیست رقص.»", fr: "« La pure magie d'Istanbul. Le DJ après le dîner nous a fait danser jusqu'à minuit. Une énergie incroyable sur la piste de danse. »", it: "\"Pura magia di Istanbul. Il DJ dopo cena ci ha fatto ballare fino a mezzanotte. Energia incredibile sulla pista da ballo.\"", zh: "\"纯粹的伊斯坦布尔魔力。晚宴后DJ让我们跳舞到午夜。舞池能量难以置信。\"", id: "\"Keajaiban Istanbul murni. DJ setelah makan malam membuat kami berdansa sampai tengah malam. Energi luar biasa di lantai dansa.\"", ms: "\"Keajaiban Istanbul tulen. DJ selepas makan malam buat kami menari sehingga tengah malam. Tenaga luar biasa di lantai tarian.\"", pl: "\"Czysta magia Stambułu. DJ po kolacji trzymał nas w tańcu do północy. Niesamowita energia na parkiecie.\"", bg: "\"Чиста истанбулска магия. DJ след вечерята ни задържа танцуващи до полунощ. Невероятна енергия на дансинга.\"", ro: "\"Magie pură din Istanbul. DJ-ul după cină ne-a ținut dansând până la miezul nopții. Energie incredibilă pe ringul de dans.\"", uk: "\"Справжня магія Istanbul. Діджей після вечері розтанцьовував нас до опівночі. Неймовірна енергія на танцполі.\"", ja: "「純粋なイスタンブールの魔法です。ディナー後のDJが真夜中まで踊らせてくれました。ダンスフロアの素晴らしいエネルギーでした。」", ko: "\"순수한 Istanbul의 마법입니다. 저녁 식사 후 DJ가 자정까지 우리를 춤추게 했습니다. 댄스 플로어의 에너지가 놀라웠습니다.\"", hi: "\"शुद्ध Istanbul जादू। डिनर के बाद DJ ने हमें आधी रात तक नचाया। डांस फ्लोर पर अविश्वसनीय ऊर्जा।\"", ur: "\"خالص Istanbul کا جادو۔ ڈنر کے بعد DJ نے ہمیں آدھی رات تک رقص کروایا۔ ڈانس فلور پر ناقابل یقین توانائی۔\""
  },
  "reviews.r17.info": {
    en: "Solo · Brazil", tr: "Tek · Brezilya", de: "Solo · Brasilien",
    es: "Solo · Brasil", ru: "Соло · Бразилия", ar: "فردي · البرازيل",
    fa: "مسافر تنها · برزیل", fr: "Solo · Brésil", it: "Singolo · Brasile", zh: "独行 · 巴西", id: "Solo · Brasil", ms: "Bersendirian · Brazil", pl: "Solo · Brazylia", bg: "Сам · Бразилия", ro: "Individual · Brazilia", uk: "Solo · Brazil", ja: "Solo · Brazil", ko: "Solo · Brazil", hi: "Solo · Brazil", ur: "اکیلے · Brazil"
  },
  "reviews.r18": {
    en: "\"Took my parents for their 40th anniversary. They still talk about the dervish performance. Thank you for making it special.\"",
    tr: "\"Annem ve babamı 40. evlilik yıldönümleri için götürdüm. Hâlâ semazen gösterisini konuşuyorlar. Özel kıldığınız için teşekkürler.\"",
    de: "\"Brachte meine Eltern zum 40. Hochzeitstag. Sie reden immer noch vom Derwisch-Auftritt. Danke für den besonderen Abend.\"",
    es: "\"Llevé a mis padres a su 40 aniversario. Todavía hablan del derviche. Gracias por hacerlo especial.\"",
    ru: "\"Повёз родителей на 40-летие свадьбы. Они до сих пор говорят о выступлении дервиша. Спасибо, что сделали этот вечер особенным.\"",
    ar: "\"اصطحبت والديّ في الذكرى الأربعين لزواجهما. لا يزالان يتحدثان عن عرض الدرويش. شكرًا لجعلها مميزة.\"",
    fa: "«پدر و مادرم را برای چهلمین سالگرد ازدواجشان بردم. هنوز از اجرای درویش‌ها صحبت می‌کنند. ممنون که این شب را ویژه کردید.»", fr: "« J'ai emmené mes parents pour leurs 40 ans de mariage. Ils parlent encore du spectacle des derviches. Merci d'avoir rendu ce moment si spécial. »", it: "\"Ho portato i miei genitori per il loro 40° anniversario. Parlano ancora dell'esibizione dei dervisci. Grazie per averla resa speciale.\"", zh: "\"带父母庆祝他们40周年纪念。他们至今还在谈论旋转舞表演。感谢你们让它变得特别。\"", id: "\"Membawa orang tua saya untuk hari jadi ke-40 mereka. Mereka masih membicarakan pertunjukan darwis. Terima kasih telah membuatnya istimewa.\"", ms: "\"Bawa ibu bapa saya untuk ulang tahun perkahwinan ke-40. Mereka masih bercakap tentang persembahan darwish. Terima kasih kerana menjadikannya istimewa.\"", pl: "\"Zabrałem rodziców na ich 40. rocznicę. Nadal mówią o występie derwiszów. Dziękuję za wyjątkową chwilę.\"", bg: "\"Заведох родителите си за 40-ата им годишнина. Все още говорят за изпълнението на дервишите. Благодаря, че направихте всичко специално.\"", ro: "\"Mi-am dus părinții pentru a 40-a lor aniversare. Încă vorbesc despre reprezentația dervișilor. Vă mulțumesc că ați făcut-o specială.\"", uk: "\"Взяв батьків на їхню 40-ту річницю. Вони досі говорять про виступ дервішів. Дякуємо, що зробили це особливим.\"", ja: "「両親の結婚40周年記念に連れて行きました。今でも旋舞のパフォーマンスについて話しています。特別な思い出をありがとうございました。」", ko: "\"부모님 결혼 40주년 기념으로 모셔왔습니다. 부모님은 아직도 데르비시 공연 이야기를 하십니다. 특별하게 만들어주셔서 감사합니다.\"", hi: "\"अपने माता-पिता को उनकी 40वीं सालगिरह पर लेकर गया। वे अब भी दरवेश प्रस्तुति की बात करते हैं। इसे खास बनाने के लिए धन्यवाद।\"", ur: "\"اپنے والدین کو ان کی چالیسویں سالگرہ پر لے کر گیا۔ وہ ابھی تک درویش کی پرفارمنس کے بارے میں بات کرتے ہیں۔ اسے خاص بنانے کا شکریہ۔\""
  },
  "reviews.r18.info": {
    en: "Family · India", tr: "Aile · Hindistan", de: "Familie · Indien",
    es: "Familia · India", ru: "Семья · Индия", ar: "عائلة · الهند",
    fa: "خانواده · هند", fr: "Famille · Inde", it: "Famiglia · India", zh: "家庭 · 印度", id: "Keluarga · India", ms: "Keluarga · India", pl: "Rodzina · Indie", bg: "Семейство · Индия", ro: "Familie · India", uk: "Family · India", ja: "Family · India", ko: "Family · India", hi: "Family · India", ur: "خاندان · India"
  },
  "reviews.r19": {
    en: "\"Incredibly organized. On time, exactly as described, clean boat. In Japan we value this — they delivered.\"",
    tr: "\"İnanılmaz derecede organize. Zamanında, anlatıldığı gibi, temiz tekne. Japonya'da buna değer veririz, gerçekleştirdiler.\"",
    de: "\"Unglaublich organisiert. Pünktlich, genau wie beschrieben, sauberes Boot. In Japan schätzen wir das — sie haben geliefert.\"",
    es: "\"Increíblemente organizado. Puntual, como lo describen, barco limpio. En Japón valoramos esto — lo cumplieron.\"",
    ru: "\"Невероятно организованно. Точно по времени, как описано, чистая лодка. В Японии мы это ценим — они справились.\"",
    ar: "\"منظم بشكل لا يصدق. في الوقت المحدد، تمامًا كما وُصف، قارب نظيف. في اليابان نقدر هذا — ونجحوا.\"",
    fa: "«سازماندهی فوق‌العاده. به موقع، دقیقاً مطابق توصیف و کشتی تمیز. در ژاپن به این چیزها اهمیت می‌دهیم — آن‌ها به خوبی انجام دادند.»", fr: "« Incroyablement organisé. À l'heure, exactement comme décrit, bateau propre. Au Japon, nous valorisons cela — ils ont tenu parole. »", it: "\"Incredibilmente organizzati. Puntuali, esattamente come descritto, barca pulita. In Giappone lo apprezziamo — hanno mantenuto le promesse.\"", zh: "\"组织得极好。准时、完全符合描述、船很干净。在日本我们看重这些——他们做到了。\"", id: "\"Sangat terorganisir. Tepat waktu, persis seperti yang dijelaskan, kapal bersih. Di Jepang kami menghargai ini — mereka memenuhinya.\"", ms: "\"Sangat teratur. Tepat pada masa, betul-betul seperti yang dijelaskan, bot bersih. Di Jepun kami hargai ini — mereka memenuhinya.\"", pl: "\"Niewiarygodnie zorganizowani. Punktualnie, dokładnie jak opisano, czysta łódź. W Japonii cenimy to — oni dostarczyli.\"", bg: "\"Невероятно организирано. Навреме, точно както е описано, чиста лодка. В Япония ценим това — изпълниха го.\"", ro: "\"Incredibil de organizat. La timp, exact cum a fost descris, vapor curat. În Japonia apreciem asta — au livrat.\"", uk: "\"Неймовірно організовано. Вчасно, точно як описано, чистий човен. У Японії ми цінуємо це — вони виконали.\"", ja: "「驚くほど整然としていました。時間通り、説明通り、船内は清潔でした。日本ではこれを大切にしますが、期待通りでした。」", ko: "\"믿을 수 없을 만큼 체계적이었습니다. 정시에, 설명한 그대로, 깨끗한 보트였습니다. 일본에서는 이런 것을 중요하게 여기는데 — 완벽하게 제공해주었습니다.\"", hi: "\"अविश्वसनीय रूप से व्यवस्थित। समय पर, बिल्कुल वैसा ही जैसा बताया गया, साफ़ नाव। Japan में हम इसकी कद्र करते हैं — उन्होंने पूरा किया।\"", ur: "\"ناقابل یقین حد تک منظم۔ وقت پر، بالکل جیسے بیان کیا گیا، صاف کشتی۔ Japan میں ہم اس کی قدر کرتے ہیں — انہوں نے فراہم کیا۔\""
  },
  "reviews.r19.info": {
    en: "Solo · Japan", tr: "Tek · Japonya", de: "Solo · Japan",
    es: "Solo · Japón", ru: "Соло · Япония", ar: "فردي · اليابان",
    fa: "مسافر تنها · ژاپن", fr: "Solo · Japon", it: "Singolo · Giappone", zh: "独行 · 日本", id: "Solo · Jepang", ms: "Bersendirian · Jepun", pl: "Solo · Japonia", bg: "Сам · Япония", ro: "Individual · Japonia", uk: "Solo · Japan", ja: "Solo · Japan", ko: "Solo · Japan", hi: "Solo · Japan", ur: "اکیلے · Japan"
  },
  "reviews.r20": {
    en: "\"Booked the morning of the cruise. Confirmed within 10 minutes. Paid cash on the boat. Could not be easier.\"",
    tr: "\"Tur sabahı rezervasyon yaptık. 10 dakikada onaylandı. Teknede nakit ödedik. Daha kolay olamazdı.\"",
    de: "\"Morgens am Tag der Tour gebucht. Binnen 10 Minuten bestätigt. Bar an Bord bezahlt. Könnte nicht einfacher sein.\"",
    es: "\"Reservamos la mañana del crucero. Confirmado en 10 minutos. Pagamos en efectivo en el barco. No podría ser más fácil.\"",
    ru: "\"Забронировали утром в день круиза. Подтвердили за 10 минут. Оплатили наличными на борту. Проще не бывает.\"",
    ar: "\"حجزنا صباح يوم الرحلة. تم التأكيد خلال 10 دقائق. دفعنا نقدًا على القارب. لا يمكن أن يكون أسهل.\"",
    fa: "«صبح همان روز تور رزرو کردم. ظرف ۱۰ دقیقه تأیید شد. روی کشتی نقدی پرداخت کردم. راحت‌تر از این نمی‌شد.»", fr: "« Réservé le matin même de la croisière. Confirmation en 10 minutes. Payé en espèces à bord. Difficile de faire plus simple. »", it: "\"Prenotato la mattina stessa della crociera. Confermato in 10 minuti. Pagato in contanti a bordo. Non potrebbe essere più semplice.\"", zh: "\"当天早上预订。10分钟内确认。船上付现金。再简单不过。\"", id: "\"Memesan pagi pelayaran. Dikonfirmasi dalam 10 menit. Membayar tunai di kapal. Tidak bisa lebih mudah.\"", ms: "\"Menempah pada pagi pelayaran. Disahkan dalam 10 minit. Bayar tunai di atas bot. Tidak boleh lebih mudah.\"", pl: "\"Zarezerwowałem w dniu rejsu rano. Potwierdzono w ciągu 10 minut. Zapłaciłem gotówką na pokładzie. Nie może być prościej.\"", bg: "\"Резервирах сутринта преди круиза. Потвърдено в рамките на 10 минути. Платих в брой на борда. Не може да бъде по-лесно.\"", ro: "\"Am rezervat în dimineața croazierei. Confirmat în 10 minute. Plătit cash pe vapor. Nu putea fi mai ușor.\"", uk: "\"Забронював вранці в день круїзу. Підтвердження за 10 хвилин. Заплатив готівкою на човні. Простіше не буває.\"", ja: "「クルーズ当日の朝に予約しました。10分以内に確認が取れました。船内で現金払いしました。これ以上簡単なことはありません。」", ko: "\"크루즈 당일 아침에 예약했습니다. 10분 만에 확정되었습니다. 보트에서 현금으로 결제했습니다. 이보다 쉬울 수 없습니다.\"", hi: "\"क्रूज़ के दिन सुबह बुक किया। 10 मिनट में कन्फर्म हुआ। नाव पर नकद भुगतान किया। इससे आसान नहीं हो सकता था।\"", ur: "\"کروز کی صبح بک کیا۔ 10 منٹ میں تصدیق۔ کشتی پر نقد ادائیگی کی۔ اس سے آسان نہیں ہو سکتا تھا۔\""
  },
  "reviews.r20.info": {
    en: "Couple · Australia", tr: "Çift · Avustralya", de: "Paar · Australien",
    es: "Pareja · Australia", ru: "Пара · Австралия", ar: "زوجان · أستراليا",
    fa: "زوج · استرالیا", fr: "Couple · Australie", it: "Coppia · Australia", zh: "情侣 · 澳大利亚", id: "Pasangan · Australia", ms: "Pasangan · Australia", pl: "Para · Australia", bg: "Двойка · Австралия", ro: "Cuplu · Australia", uk: "Couple · Australia", ja: "Couple · Australia", ko: "Couple · Australia", hi: "Couple · Australia", ur: "جوڑا · Australia"
  },
  "reviews.r21": {
    en: "\"Italian food snob here. Surprised by how good the Turkish courses were. Meze variety was genuinely impressive.\"",
    tr: "\"İtalyan yemek meraklısıyım. Türk yemeklerinin ne kadar iyi olduğuna şaşırdım. Meze çeşitliliği gerçekten etkileyiciydi.\"",
    de: "\"Italienischer Essens-Snob hier. Überrascht, wie gut die türkischen Gänge waren. Die Meze-Vielfalt war wirklich beeindruckend.\"",
    es: "\"Sibarita italiana aquí. Sorprendida por lo buenos que fueron los platos turcos. La variedad de mezes fue realmente impresionante.\"",
    ru: "\"Я итальянский гурман. Удивлена, насколько хороши были турецкие блюда. Выбор мезе впечатлил.\"",
    ar: "\"محبة للطعام الإيطالي. فوجئت بجودة الأطباق التركية. تنوع المقبلات كان مثيرًا للإعجاب.\"",
    fa: "«من در غذای ایتالیایی سخت‌گیر هستم. از خوب بودن غذاهای ترکی شگفت‌زده شدم. تنوع مزه‌ها واقعاً چشم‌گیر بود.»", fr: "« Je suis un snob de la cuisine italienne. Surpris par la qualité des plats turcs. La variété des mezzés était vraiment impressionnante. »", it: "\"Sono un esigente della cucina italiana. Sorpreso da quanto fossero buoni i piatti turchi. La varietà di meze è stata davvero impressionante.\"", zh: "\"我是个意大利美食挑剔者。土耳其菜肴的美味让我惊喜。冷盘种类确实令人印象深刻。\"", id: "\"Penggemar makanan Italia di sini. Terkejut dengan betapa enaknya hidangan Turki. Variasi meze sungguh mengesankan.\"", ms: "\"Pencinta makanan Itali di sini. Terkejut dengan sedapnya hidangan Turki. Kepelbagaian meze benar-benar mengagumkan.\"", pl: "\"Jestem włoskim snobem kulinarnym. Zaskoczyło mnie, jak dobre były tureckie dania. Różnorodność mezze była naprawdę imponująca.\"", bg: "\"Италиански познавач на храна тук. Изненадан съм колко добри бяха турските ястия. Разнообразието на мезета беше наистина впечатляващо.\"", ro: "\"Snob al mâncării italiene aici. Surprins de cât de bune au fost felurile turcești. Varietatea de mezeluri a fost cu adevărat impresionantă.\"", uk: "\"Італійський сноб щодо їжі. Здивований, наскільки смачними були турецькі страви. Різноманітність мезе справді вразила.\"", ja: "「イタリア料理にうるさい者ですが、トルコ料理のコースがこれほど美味しいとは驚きました。メゼのバラエティは本当に印象的でした。」", ko: "\"까다로운 이탈리아 음식 애호가입니다. 터키 코스 요리가 얼마나 훌륭한지 놀랐습니다. 메제 종류가 정말 인상적이었습니다.\"", hi: "\"Italian खाने का शौकीन हूँ। Turkish व्यंजन कितने अच्छे थे, यह देखकर हैरान रह गया। Meze की विविधता वास्तव में प्रभावशाली थी।\"", ur: "\"اطالوی کھانے کا شوقین یہاں۔ حیران ہوا کہ ترکی کے کورسز کتنے اچھے تھے۔ میزے کی تنوع واقعی متاثر کن تھی۔\""
  },
  "reviews.r21.info": {
    en: "Solo · Italy", tr: "Tek · İtalya", de: "Solo · Italien",
    es: "Solo · Italia", ru: "Соло · Италия", ar: "فردي · إيطاليا",
    fa: "مسافر تنها · ایتالیا", fr: "Solo · Italie", it: "Singolo · Italia", zh: "独行 · 意大利", id: "Solo · Italia", ms: "Bersendirian · Itali", pl: "Solo · Włochy", bg: "Сам · Италия", ro: "Individual · Italia", uk: "Solo · Italy", ja: "Solo · Italy", ko: "Solo · Italy", hi: "Solo · Italy", ur: "اکیلے · Italy"
  },
  "reviews.r22": {
    en: "\"Korean couple visiting Istanbul. Everyone spoke English, the whole evening flowed seamlessly. Highlight of our trip.\"",
    tr: "\"İstanbul'a gelen Koreli çift. Herkes İngilizce konuşuyordu, akşam sorunsuz akıp gitti. Seyahatimizin en güzel anı.\"",
    de: "\"Koreanisches Paar zu Besuch in Istanbul. Alle sprachen Englisch, der ganze Abend verlief reibungslos. Höhepunkt unserer Reise.\"",
    es: "\"Pareja coreana visitando Estambul. Todos hablaban inglés, toda la noche fluyó sin problemas. Lo mejor de nuestro viaje.\"",
    ru: "\"Корейская пара в Стамбуле. Все говорили по-английски, весь вечер прошёл без сучка и задоринки. Главное впечатление поездки.\"",
    ar: "\"زوجان كوريان يزوران إسطنبول. الجميع يتحدث الإنجليزية، الأمسية كلها تدفقت بسلاسة. أبرز لحظة رحلتنا.\"",
    fa: "«زوج کره‌ای در سفر به استانبول. همه انگلیسی صحبت می‌کردند و کل شب بدون مشکل پیش رفت. نقطه اوج سفر ما بود.»", fr: "« Couple coréen en visite à Istanbul. Tout le monde parlait anglais, la soirée s'est déroulée sans accroc. Le point fort de notre voyage. »", it: "\"Coppia coreana in visita a Istanbul. Tutti parlavano inglese, tutta la serata è scorsa senza intoppi. Il momento clou del nostro viaggio.\"", zh: "\"韩国情侣游伊斯坦布尔。所有人都讲英语，整个晚上流畅无缝。此行的亮点。\"", id: "\"Pasangan Korea yang mengunjungi Istanbul. Semua orang berbicara bahasa Inggris, seluruh malam mengalir dengan mulus. Sorotan perjalanan kami.\"", ms: "\"Pasangan Korea melawat Istanbul. Semua orang bertutur bahasa Inggeris, seluruh malam berjalan dengan lancar. Puncak perjalanan kami.\"", pl: "\"Koreańska para odwiedzająca Stambuł. Wszyscy mówili po angielsku, cały wieczór przebiegł płynnie. Główny punkt naszej podróży.\"", bg: "\"Корейска двойка на посещение в Истанбул. Всички говореха английски, цялата вечер протече безупречно. Връхната точка на пътуването ни.\"", ro: "\"Cuplu coreean în vizită la Istanbul. Toți vorbeau engleza, întreaga seară a curs perfect. Punctul culminant al călătoriei noastre.\"", uk: "\"Корейська пара відвідує Istanbul. Усі розмовляли англійською, весь вечір пройшов бездоганно. Найяскравіше враження від нашої подорожі.\"", ja: "「イスタンブールを訪れた韓国人カップルです。皆さん英語を話され、夜の流れがシームレスでした。旅のハイライトです。」", ko: "\"Istanbul을 방문한 한국인 커플입니다. 모든 직원이 영어를 구사했고, 저녁 내내 매끄럽게 진행되었습니다. 여행의 하이라이트였습니다.\"", hi: "\"Korean जोड़ा Istanbul की यात्रा पर। सभी अंग्रेज़ी बोलते थे, पूरी शाम सहजता से बीती। हमारी यात्रा का मुख्य आकर्षण।\"", ur: "\"کورین جوڑا Istanbul کی زیارت پر۔ سب انگلش بولتے تھے، پوری شام بغیر رکاوٹ چلی۔ ہمارے سفر کا نمایاں لمحہ۔\""
  },
  "reviews.r22.info": {
    en: "Couple · South Korea", tr: "Çift · Güney Kore", de: "Paar · Südkorea",
    es: "Pareja · Corea del Sur", ru: "Пара · Южная Корея", ar: "زوجان · كوريا الجنوبية",
    fa: "زوج · کره جنوبی", fr: "Couple · Corée du Sud", it: "Coppia · Corea del Sud", zh: "情侣 · 韩国", id: "Pasangan · Korea Selatan", ms: "Pasangan · Korea Selatan", pl: "Para · Korea Południowa", bg: "Двойка · Южна Корея", ro: "Cuplu · Coreea de Sud", uk: "Couple · South Korea", ja: "Couple · South Korea", ko: "Couple · South Korea", hi: "Couple · South Korea", ur: "جوڑا · South Korea"
  },
  "reviews.showMore": {
    en: "+5 more reviews",
    tr: "+5 yorum daha",
    de: "+5 weitere Bewertungen",
    es: "+5 reseñas más",
    ru: "+5 ещё отзывов",
    ar: "+٥ تقييمات أخرى",
    fa: "+۵ نظر دیگر", fr: "+5 avis supplémentaires", it: "+5 altre recensioni", zh: "+5条更多评价", id: "+5 ulasan lainnya", ms: "+5 ulasan lagi", pl: "+5 kolejnych opinii", bg: "+5 още отзиви", ro: "+5 mai multe recenzii", uk: "+5 ще відгуків", ja: "他5件のレビューを表示", ko: "+5 더 많은 리뷰", hi: "+5 और समीक्षाएँ", ur: "+5 مزید جائزے"
  },

  // ========== HOW IT WORKS ==========
  "how.label": {
    en: "Simple Booking", tr: "Kolay Rezervasyon", de: "Einfache Buchung",
    es: "Reserva Sencilla", ru: "Простое бронирование", ar: "حجز سهل",
    fa: "رزرو ساده", fr: "Réservation simple", it: "Prenotazione semplice", zh: "简单预订", id: "Pemesanan Sederhana", ms: "Tempahan Mudah", pl: "Prosta rezerwacja", bg: "Лесна резервация", ro: "Rezervare Simplă", uk: "Просте бронювання", ja: "簡単予約", ko: "간편한 예약", hi: "सरल बुकिंग", ur: "آسان بُکنگ"
  },
  "how.title": {
    en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert es",
    es: "Cómo Funciona", ru: "Как это работает", ar: "كيف يعمل",
    fa: "نحوه کار", fr: "Comment ça marche", it: "Come funziona", zh: "流程说明", id: "Cara Kerjanya", ms: "Cara Ia Berfungsi", pl: "Jak to działa", bg: "Как работи", ro: "Cum Funcționează", uk: "Як це працює", ja: "ご利用の流れ", ko: "이용 방법", hi: "यह कैसे काम करता है", ur: "یہ کیسے کام کرتا ہے"
  },
  "how.subtitle": {
    en: "Write or call us. We'll handle the rest.",
    tr: "Bize yazın veya arayın. Gerisini biz halledelim.",
    de: "Schreiben oder rufen Sie uns an. Wir erledigen den Rest.",
    es: "Escríbenos o llámanos. Nosotros nos encargamos del resto.",
    ru: "Напишите или позвоните нам. Мы позаботимся об остальном.",
    ar: "راسلنا أو اتصل بنا. نحن نتولى الباقي.",
    fa: "به ما بنویسید یا تماس بگیرید. باقی را ما انجام می‌دهیم.", fr: "Écrivez-nous ou appelez-nous. Nous nous occupons du reste.", it: "Ci scriva o ci chiami. Al resto pensiamo noi.", zh: "来信或致电我们。其余交给我们。", id: "Tulis atau telepon kami. Kami urus sisanya.", ms: "Tulis atau telefon kami. Kami akan uruskan selebihnya.", pl: "Napisz do nas lub zadzwoń. My zajmiemy się resztą.", bg: "Пишете ни или се обадете. Ние се грижим за останалото.", ro: "Scrieți-ne sau sunați-ne. Ne ocupăm noi de rest.", uk: "Напишіть або зателефонуйте нам. Ми подбаємо про решту.", ja: "お電話またはメッセージをお送りください。あとは私どもにお任せください。", ko: "문의만 주시면 나머지는 저희가 처리해드립니다.", hi: "हमें लिखें या कॉल करें। बाकी हम संभाल लेंगे।", ur: "ہمیں لکھیں یا کال کریں۔ باقی ہم سنبھال لیں گے۔"
  },
  "how.s1.title": {
    en: "Share Booking Details", tr: "Rezervasyon Detaylarını Girin", de: "Buchungsdetails angeben",
    es: "Comparta los detalles de la reserva", ru: "Укажите детали бронирования", ar: "شارك تفاصيل الحجز",
    fa: "جزئیات رزرو را بفرستید", fr: "Partagez les détails de réservation", it: "Condivida i dettagli della prenotazione", zh: "分享预订详情", id: "Bagikan Detail Pemesanan", ms: "Kongsi Butiran Tempahan", pl: "Podaj szczegóły rezerwacji", bg: "Споделете данните за резервацията", ro: "Împărtășiți Detaliile Rezervării", uk: "Повідомте деталі бронювання", ja: "予約内容をお知らせください", ko: "예약 정보 공유", hi: "बुकिंग विवरण साझा करें", ur: "بُکنگ کی تفصیلات شیئر کریں"
  },
  "how.s1.desc": {
    en: "Tell us the date, number of guests, and package (Standard or VIP).",
    tr: "Tarih, kişi sayısı ve paketi (Standard veya VIP) belirleyin.",
    de: "Teilen Sie uns Datum, Gästeanzahl und Paket (Standard oder VIP) mit.",
    es: "Indíquenos la fecha, el número de invitados y el paquete (Standard o VIP).",
    ru: "Укажите дату, количество гостей и пакет (Standard или VIP).",
    ar: "أخبرنا بالتاريخ وعدد الضيوف والباقة (القياسية أو VIP).",
    fa: "تاریخ، تعداد مهمانان و پکیج (استاندارد یا VIP) را به ما بگویید.", fr: "Indiquez-nous la date, le nombre d'invités et le forfait (Standard ou VIP).", it: "Ci dica la data, il numero di ospiti e il pacchetto (Standard o VIP).", zh: "告诉我们日期、宾客人数与套餐（标准或VIP）。", id: "Beritahu kami tanggal, jumlah tamu, dan paket (Standar atau VIP).", ms: "Beritahu kami tarikh, bilangan tetamu dan pakej (Standard atau VIP).", pl: "Podaj nam datę, liczbę gości i pakiet (Standard lub VIP).", bg: "Кажете ни датата, броя гости и пакета (Стандарт или VIP).", ro: "Spuneți-ne data, numărul de oaspeți și pachetul (Standard sau VIP).", uk: "Повідомте нам дату, кількість гостей та пакет (Стандарт або VIP).", ja: "ご希望の日付、人数、パッケージ（スタンダードまたはVIP）をお伝えください。", ko: "날짜, 인원 수, 패키지(스탠다드 또는 VIP)를 알려주시기 바랍니다.", hi: "हमें तारीख, अतिथियों की संख्या, और पैकेज (स्टैंडर्ड या VIP) बताएँ।", ur: "ہمیں تاریخ، مہمانوں کی تعداد، اور پیکج (Standard یا VIP) بتائیں۔"
  },
  "how.s2.title": {
    en: "Write, Call, or We'll Call You", tr: "Yazın, Arayın veya Biz Sizi Arayalım", de: "Schreiben, anrufen oder wir rufen Sie an",
    es: "Escríbenos, Llámanos o Te Llamamos", ru: "Напишите, Позвоните или Мы Вам Перезвоним", ar: "اكتب، اتصل، أو سنتصل بك",
    fa: "بنویسید، تماس بگیرید یا ما تماس می‌گیریم", fr: "Écrivez, appelez ou nous vous rappelons", it: "Scriva, chiami o La richiameremo", zh: "来信、致电或我们回拨", id: "Tulis, Telepon, atau Kami akan Menelepon Anda", ms: "Tulis, Telefon atau Kami Akan Telefon Anda", pl: "Napisz, zadzwoń lub my oddzwonimy", bg: "Пишете, обадете се или ние ще Ви се обадим", ro: "Scrieți, Sunați sau Vă Sunăm Noi", uk: "Напишіть, зателефонуйте або ми зателефонуємо Вам", ja: "お電話・メッセージ、または折り返しご連絡", ko: "메시지, 전화 또는 회신 요청", hi: "लिखें, कॉल करें, या हम आपको कॉल करेंगे", ur: "لکھیں، کال کریں، یا ہم آپ کو کال کریں گے"
  },
  "how.s2.desc": {
    en: "Message or call — whatever works for you. We respond quickly.",
    tr: "Yazılı veya sesli — size uygun şekilde iletişime geçin. Hızla dönüş yaparız.",
    de: "Schriftlich oder telefonisch — wie es Ihnen passt. Wir antworten schnell.",
    es: "Por mensaje o llamada — como prefieras. Respondemos rápido.",
    ru: "Письменно или по телефону — как вам удобно. Отвечаем быстро.",
    ar: "كتابياً أو صوتياً — كما يناسبك. نرد بسرعة.",
    fa: "پیام دهید یا تماس بگیرید — هر کدام راحت‌تر است. سریع پاسخ می‌دهیم.", fr: "Message ou appel — comme vous préférez. Nous répondons rapidement.", it: "Ci scriva o ci chiami — come preferisce. Rispondiamo rapidamente.", zh: "信息或电话均可——您方便就好。我们快速回应。", id: "Kirim pesan atau telepon — apa pun yang cocok untuk Anda. Kami merespons dengan cepat.", ms: "Hantar mesej atau telefon — apa saja yang sesuai untuk anda. Kami balas dengan cepat.", pl: "Wiadomość lub telefon — jak Państwu wygodnie. Odpowiadamy szybko.", bg: "Пишете или се обадете — както Ви е удобно. Отговаряме бързо.", ro: "Scrieți sau sunați — orice vă convine. Răspundem rapid.", uk: "Надішліть повідомлення або зателефонуйте — як Вам зручніше. Ми відповідаємо швидко.", ja: "お好きな方法でご連絡ください。迅速に対応いたします。", ko: "메시지나 전화 — 편하신 방법으로 연락 주십시오. 신속하게 답변드립니다.", hi: "संदेश भेजें या कॉल करें — जो भी आपके लिए सुविधाजनक हो। हम जल्दी जवाब देते हैं।", ur: "پیغام بھیجیں یا کال کریں — جو بھی آپ کے لیے آسان ہو۔ ہم فوری جواب دیتے ہیں۔"
  },
  "how.s3.title": {
    en: "Show Up & Pay on the Boat", tr: "Gelin & Teknede Ödeyin",
    de: "Kommen & an Bord bezahlen", es: "Llega y paga en el barco",
    ru: "Приходите и платите на борту", ar: "احضر وادفع على القارب",
    fa: "بیایید و روی کشتی پرداخت کنید", fr: "Présentez-vous & payez à bord", it: "Si presenti e paghi a bordo", zh: "到场 & 船上付款", id: "Datang & Bayar di Kapal", ms: "Hadir & Bayar di Atas Bot", pl: "Przyjdź i zapłać na pokładzie", bg: "Елате и платете на борда", ro: "Veniți și Plătiți pe Vapor", uk: "Прийдіть і сплатіть на борту", ja: "当日、船内でお支払い", ko: "선착장에서 탑승 후 결제", hi: "पहुँचें और नाव पर भुगतान करें", ur: "پہنچیں اور کشتی پر ادائیگی کریں"
  },
  "how.s3.desc": {
    en: "No prepayment needed. Just arrive at the pier, board your cruise, and pay onboard.",
    tr: "Ön ödeme gerekmez. İskeleye gelin, tekneye binin, ödemenizi teknede yapın.",
    de: "Keine Vorauszahlung. Einfach am Pier erscheinen, einsteigen und an Bord bezahlen.",
    es: "Sin prepago. Solo llega al muelle, sube a bordo y paga en el barco.",
    ru: "Предоплата не нужна. Просто приходите на пирс, садитесь на борт и платите там.",
    ar: "لا حاجة للدفع المسبق. فقط احضر إلى الرصيف واصعد على متن القارب وادفع هناك.",
    fa: "نیازی به پیش‌پرداخت نیست. فقط به اسکله بیایید، سوار شوید و روی کشتی پرداخت کنید.", fr: "Aucun prépaiement nécessaire. Rendez-vous à l'embarcadère, embarquez et payez à bord.", it: "Nessun anticipo necessario. Arrivi al molo, salga a bordo della crociera e paghi in barca.", zh: "无需预付。只需到达码头、登船、船上付款。", id: "Tanpa pembayaran di muka. Cukup tiba di dermaga, naik kapal, dan bayar di kapal.", ms: "Tiada bayaran pendahuluan diperlukan. Cuma tiba di jeti, naiki pelayaran anda dan bayar di atas kapal.", pl: "Bez przedpłaty. Wystarczy przybyć na przystań, wejść na pokład i zapłacić na statku.", bg: "Без нужда от предплащане. Просто пристигнете на кея, качете се на круиза и платете на борда.", ro: "Nu este nevoie de plată în avans. Doar ajungeți la debarcader, îmbarcați-vă și plătiți la bord.", uk: "Передоплата не потрібна. Просто прийдіть до причалу, підніміться на борт і сплатіть на кораблі.", ja: "事前のお支払いは不要です。桟橋にお越しいただき、ご乗船後に船内でお支払いください。", ko: "선결제가 필요 없습니다. 선착장에 도착하셔서 크루즈에 탑승하신 후 선상에서 결제하시면 됩니다.", hi: "कोई अग्रिम भुगतान आवश्यक नहीं। बस घाट पर पहुँचें, अपने क्रूज़ पर सवार हों, और जहाज़ पर भुगतान करें।", ur: "پیشگی ادائیگی کی ضرورت نہیں۔ بس گھاٹ پر پہنچیں، اپنی کروز میں سوار ہوں، اور بورڈ پر ادائیگی کریں۔"
  },

  // ========== LAST MINUTE ==========
  "last.title": {
    en: "Need a Cruise Tonight?", tr: "Bu Gece Tur İster misiniz?",
    de: "Heute Nacht eine Tour?", es: "¿Necesitas un crucero esta noche?",
    ru: "Нужен круиз сегодня?", ar: "هل تحتاج رحلة الليلة؟",
    fa: "امشب تور می‌خواهید؟", fr: "Besoin d'une croisière ce soir ?", it: "Ha bisogno di una crociera stasera?", zh: "今晚想游船？", id: "Butuh Pelayaran Malam Ini?", ms: "Perlukan Pelayaran Malam Ini?", pl: "Potrzebują Państwo rejsu na dziś?", bg: "Имате нужда от круиз тази вечер?", ro: "Aveți Nevoie de o Croazieră în Seara Aceasta?", uk: "Потрібен круїз сьогодні ввечері?", ja: "今夜のクルーズをお探しですか？", ko: "오늘 밤 크루즈가 필요하신가요?", hi: "आज रात क्रूज़ चाहिए?", ur: "آج رات کروز چاہیے؟"
  },
  "last.desc": {
    en: "Our team can check same-day availability for you in seconds. Message us — we respond instantly, 24/7.",
    tr: "Ekibimiz aynı gün müsaitliği saniyeler içinde kontrol edebilir. Bize yazın — 7/24 anında cevap veriyoruz.",
    de: "Unser Team prüft die Verfügbarkeit in Sekunden. Schreiben Sie uns — wir antworten sofort, 24/7.",
    es: "Nuestro equipo puede verificar la disponibilidad del mismo día en segundos. Escríbenos — respondemos al instante, 24/7.",
    ru: "Наша команда проверит наличие на сегодня за секунды. Напишите нам — мы отвечаем мгновенно, 24/7.",
    ar: "يمكن لفريقنا التحقق من توفر اليوم نفسه في ثوانٍ. راسلنا — نستجيب فوراً على مدار الساعة.",
    fa: "تیم ما می‌تواند در چند ثانیه ظرفیت همان روز را برای شما بررسی کند. پیام دهید — ۲۴/۷ فوراً پاسخ می‌دهیم.", fr: "Notre équipe peut vérifier la disponibilité du jour même en quelques secondes. Écrivez-nous — nous répondons instantanément, 24h/24 7j/7.", it: "Il nostro team può verificare la disponibilità in giornata per Lei in pochi secondi. Ci scriva — rispondiamo all'istante, 7/24.", zh: "我们团队可在几秒内为您查询当日余位。发信息给我们——我们7/24即时回应。", id: "Tim kami dapat memeriksa ketersediaan hari yang sama untuk Anda dalam hitungan detik. Kirim pesan kepada kami — kami merespons secara instan, 24/7.", ms: "Pasukan kami boleh menyemak kekosongan hari sama untuk anda dalam beberapa saat. Hantar mesej kepada kami — kami balas serta-merta, 24/7.", pl: "Nasz zespół może sprawdzić dostępność tego samego dnia w kilka sekund. Prosimy napisać — odpowiadamy natychmiast, 24/7.", bg: "Екипът ни може да провери наличността за същия ден за секунди. Пишете ни — отговаряме мигновено, 24/7.", ro: "Echipa noastră poate verifica disponibilitatea pentru aceeași zi în câteva secunde. Scrieți-ne — răspundem instant, 24/7.", uk: "Наша команда може перевірити наявність місць на сьогодні за лічені секунди. Напишіть нам — ми відповідаємо миттєво, 24/7.", ja: "当日の空き状況を数秒で確認いたします。メッセージをお送りください。24時間年中無休で即座に対応いたします。", ko: "저희 팀이 당일 예약 가능 여부를 몇 초 안에 확인해드립니다. 메시지 주시면 24시간 연중무휴로 즉시 답변드립니다.", hi: "हमारी टीम सेकंडों में आपके लिए उसी दिन की उपलब्धता जाँच सकती है। हमें संदेश भेजें — हम तुरंत जवाब देते हैं, 24/7।", ur: "ہماری ٹیم آپ کے لیے اسی دن کی دستیابی سیکنڈوں میں چیک کر سکتی ہے۔ ہمیں پیغام بھیجیں — ہم فوری جواب دیتے ہیں، 24/7۔"
  },
  "last.cta": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et",
    de: "Entdecken & buchen", es: "Explorar y Reservar",
    ru: "Узнать и забронировать", ar: "استكشف واحجز",
    fa: "مشاهده و رزرو", fr: "Explorer & réserver", it: "Esplora e Prenota", zh: "查看与预订", id: "Jelajahi & Pesan", ms: "Terokai & Tempah", pl: "Przeglądaj i rezerwuj", bg: "Разгледайте и резервирайте", ro: "Explorați și Rezervați", uk: "Дослідити і забронювати", ja: "詳細を見る・予約する", ko: "둘러보기 & 예약", hi: "देखें और बुक करें", ur: "دریافت کریں اور بُک کریں"
  },
  "last.summary": {
    en: "20:30 · 3 hours · Dinner & Live Show · Pay on the boat",
    tr: "20:30 · 3 saat · Yemek & Canlı Şov · Teknede ödeme",
    de: "20:30 · 3 Stunden · Abendessen & Live-Show · Zahlung an Bord",
    es: "20:30 · 3 horas · Cena y Show en Vivo · Pago en el barco",
    ru: "20:30 · 3 часа · Ужин и живое шоу · Оплата на борту",
    ar: "20:30 · 3 ساعات · عشاء وعرض حي · الدفع على القارب",
    fa: "۲۰:۳۰ · ۳ ساعت · شام و نمایش زنده · پرداخت روی کشتی", fr: "20h30 · 3 heures · Dîner & spectacle live · Paiement à bord", it: "20:30 · 3 ore · Cena e spettacolo dal vivo · Pagamento a bordo", zh: "20:30 · 3小时 · 晚宴与现场表演 · 船上付款", id: "20:30 · 3 jam · Makan Malam & Pertunjukan Langsung · Bayar di kapal", ms: "20:30 · 3 jam · Makan Malam & Persembahan Langsung · Bayar di atas bot", pl: "20:30 · 3 godziny · Kolacja i pokaz na żywo · Płatność na pokładzie", bg: "20:30 ч. · 3 часа · Вечеря и шоу на живо · Плащане на борда", ro: "20:30 · 3 ore · Cină și Spectacol Live · Plata pe vapor", uk: "20:30 · 3 години · Вечеря і живе шоу · Оплата на борту", ja: "20:30 · 3時間 · ディナー＆ライブショー · 船内でお支払い", ko: "20:30 · 3시간 · 디너 & 라이브 쇼 · 선상 결제", hi: "20:30 · 3 घंटे · डिनर और लाइव शो · नाव पर भुगतान करें", ur: "20:30 · 3 گھنٹے · ڈنر اور لائیو شو · کشتی پر ادائیگی"
  },

  // ========== WHY CHOOSE US ==========
  "why.label": {
    en: "Why Choose Us", tr: "Neden Biz", de: "Warum wir",
    es: "Por qué elegirnos", ru: "Почему мы", ar: "لماذا نحن",
    fa: "چرا ما را انتخاب کنید", fr: "Pourquoi nous choisir", it: "Perché sceglierci", zh: "选择我们的理由", id: "Mengapa Memilih Kami", ms: "Kenapa Pilih Kami", pl: "Dlaczego my", bg: "Защо да изберете нас", ro: "De Ce Să Ne Alegeți", uk: "Чому обирають нас", ja: "選ばれる理由", ko: "선택 이유", hi: "हमें क्यों चुनें", ur: "ہمیں کیوں منتخب کریں"
  },
  "why.title": {
    en: "We Stay With You", tr: "Yanınızdayız", de: "Wir sind für Sie da",
    es: "Estamos contigo", ru: "Мы с вами", ar: "نبقى معك",
    fa: "همراه شما می‌مانیم", fr: "Nous restons à vos côtés", it: "Restiamo con Lei", zh: "我们与您同在", id: "Kami Tetap Bersama Anda", ms: "Kami Kekal Bersama Anda", pl: "Jesteśmy z Państwem", bg: "Оставаме с Вас", ro: "Rămânem cu Dumneavoastră", uk: "Ми поруч з Вами", ja: "私たちはいつもお客様とともに", ko: "저희는 항상 함께합니다", hi: "हम आपके साथ रहते हैं", ur: "ہم آپ کے ساتھ رہتے ہیں"
  },
  "why.before": {
    en: "Before", tr: "Öncesinde", de: "Vorher", es: "Antes", ru: "До", ar: "قبل",
    fa: "پیش از تور", fr: "Avant", it: "Prima", zh: "行前", id: "Sebelum", ms: "Sebelum", pl: "Przed", bg: "Преди", ro: "Înainte", uk: "До", ja: "ご予約前", ko: "사전", hi: "पहले", ur: "پہلے"
  },
  "why.before.desc": {
    en: "We help you choose the perfect package, answer all your questions, and confirm your reservation.",
    tr: "Mükemmel paketi seçmenize yardım eder, tüm sorularınızı cevaplar ve rezervasyonunuzu onaylarız.",
    de: "Wir helfen beim perfekten Paket, beantworten alle Fragen und bestätigen Ihre Buchung.",
    es: "Te ayudamos a elegir el paquete perfecto, respondemos todas tus preguntas y confirmamos tu reserva.",
    ru: "Мы поможем выбрать идеальный пакет, ответим на все вопросы и подтвердим бронирование.",
    ar: "نساعدك في اختيار الباقة المثالية ونجيب على جميع أسئلتك ونؤكد حجزك.",
    fa: "کمک می‌کنیم پکیج مناسب را انتخاب کنید، به همه سؤالات پاسخ می‌دهیم و رزرو شما را تأیید می‌کنیم.", fr: "Nous vous aidons à choisir le forfait idéal, répondons à toutes vos questions et confirmons votre réservation.", it: "La aiutiamo a scegliere il pacchetto perfetto, rispondiamo a tutte le Sue domande e confermiamo la Sua prenotazione.", zh: "我们帮您挑选合适的套餐、回答所有问题并确认您的预订。", id: "Kami membantu Anda memilih paket yang sempurna, menjawab semua pertanyaan Anda, dan mengonfirmasi reservasi Anda.", ms: "Kami bantu anda memilih pakej yang sempurna, jawab semua soalan anda dan sahkan tempahan anda.", pl: "Pomożemy wybrać idealny pakiet, odpowiemy na wszystkie pytania i potwierdzimy rezerwację.", bg: "Помагаме Ви да изберете перфектния пакет, отговаряме на всички въпроси и потвърждаваме резервацията Ви.", ro: "Vă ajutăm să alegeți pachetul perfect, răspundem la toate întrebările dumneavoastră și confirmăm rezervarea.", uk: "Ми допомагаємо Вам обрати ідеальний пакет, відповідаємо на всі Ваші запитання та підтверджуємо Ваше бронювання.", ja: "最適なパッケージ選びのお手伝いをし、ご質問にお答えし、ご予約を確定いたします。", ko: "완벽한 패키지 선택을 도와드리고, 모든 질문에 답변드리며, 예약을 확정해드립니다.", hi: "हम आपको सही पैकेज चुनने में मदद करते हैं, आपके सभी सवालों के जवाब देते हैं, और आपके आरक्षण की पुष्टि करते हैं।", ur: "ہم آپ کو بہترین پیکج منتخب کرنے میں مدد کرتے ہیں، آپ کے تمام سوالات کے جوابات دیتے ہیں، اور آپ کی ریزرویشن کی تصدیق کرتے ہیں۔"
  },
  "why.during": {
    en: "During", tr: "Sırasında", de: "Während", es: "Durante", ru: "Во время", ar: "أثناء",
    fa: "حین تور", fr: "Pendant", it: "Durante", zh: "行中", id: "Selama", ms: "Semasa", pl: "W trakcie", bg: "По време", ro: "În Timpul", uk: "Під час", ja: "クルーズ中", ko: "진행 중", hi: "दौरान", ur: "دوران"
  },
  "why.during.desc": {
    en: "We check on you during the cruise to make sure everything is perfect. Any issue? We handle it immediately.",
    tr: "Tur sırasında her şeyin mükemmel olduğundan emin olmak için sizinle iletişime geçeriz. Sorun mu var? Anında çözeriz.",
    de: "Wir prüfen während der Tour, ob alles perfekt ist. Problem? Wir lösen es sofort.",
    es: "Te contactamos durante el crucero para asegurarnos de que todo sea perfecto. ¿Algún problema? Lo resolvemos de inmediato.",
    ru: "Мы связываемся с вами во время круиза, чтобы убедиться, что всё идеально. Проблема? Решим немедленно.",
    ar: "نتواصل معك أثناء الرحلة للتأكد من أن كل شيء مثالي. أي مشكلة؟ نتعامل معها فوراً.",
    fa: "در طول تور به شما سر می‌زنیم تا مطمئن شویم همه چیز عالی است. هر مشکلی پیش بیاید، فوراً حل می‌کنیم.", fr: "Nous vérifions pendant la croisière que tout est parfait. Un souci ? Nous le gérons immédiatement.", it: "La controlliamo durante la crociera per assicurarci che tutto sia perfetto. C'è un problema? Lo risolviamo immediatamente.", zh: "游船期间我们会关照您，确保一切完美。有任何问题?我们立即处理。", id: "Kami memeriksa Anda selama pelayaran untuk memastikan semuanya sempurna. Ada masalah? Kami tangani segera.", ms: "Kami menyemak anda semasa pelayaran untuk memastikan semuanya sempurna. Sebarang isu? Kami uruskan serta-merta.", pl: "Sprawdzamy Państwa podczas rejsu, aby upewnić się, że wszystko jest idealne. Jakiś problem? Rozwiązujemy go natychmiast.", bg: "Проверяваме Ви по време на круиза, за да сме сигурни, че всичко е перфектно. Някакъв проблем? Решаваме го веднага.", ro: "Vă verificăm în timpul croazierei pentru a ne asigura că totul este perfect. Vreo problemă? O rezolvăm imediat.", uk: "Ми цікавимося Вашими враженнями під час круїзу, щоб переконатися, що все ідеально. Виникла проблема? Ми вирішимо її негайно.", ja: "クルーズ中もお客様の様子を確認し、すべてが完璧であることを確かめます。何か問題があれば、即座に対応いたします。", ko: "크루즈 진행 중에도 모든 것이 완벽한지 확인합니다. 문제가 있으신가요? 즉시 해결해드립니다.", hi: "हम क्रूज़ के दौरान आपसे संपर्क करते हैं ताकि यह सुनिश्चित हो सके कि सब कुछ सही है। कोई समस्या? हम इसे तुरंत हल करते हैं।", ur: "ہم کروز کے دوران آپ سے رابطہ کرتے ہیں تاکہ یقینی بنایا جا سکے کہ سب کچھ بہترین ہے۔ کوئی مسئلہ؟ ہم فوری طور پر حل کرتے ہیں۔"
  },
  "why.after": {
    en: "After", tr: "Sonrasında", de: "Danach", es: "Después", ru: "После", ar: "بعد",
    fa: "پس از تور", fr: "Après", it: "Dopo", zh: "行后", id: "Setelah", ms: "Selepas", pl: "Po", bg: "След", ro: "După", uk: "Після", ja: "ご利用後", ko: "사후", hi: "बाद में", ur: "بعد میں"
  },
  "why.after.desc": {
    en: "We follow up for your feedback and are always here if you want to book another experience in Istanbul.",
    tr: "Geri bildiriminiz için sizinle iletişime geçeriz ve İstanbul'da başka bir deneyim rezervasyonu için her zaman buradayız.",
    de: "Wir fragen nach Ihrem Feedback und sind da, wenn Sie ein weiteres Erlebnis in Istanbul buchen möchten.",
    es: "Hacemos seguimiento para tu opinión y siempre estamos aquí si quieres reservar otra experiencia en Estambul.",
    ru: "Мы свяжемся для отзыва и всегда готовы помочь забронировать ещё одно впечатление в Стамбуле.",
    ar: "نتابع معك للحصول على رأيك ونحن دائماً هنا إذا أردت حجز تجربة أخرى في إسطنبول.",
    fa: "برای دریافت بازخورد شما پیگیری می‌کنیم و اگر بخواهید تجربه دیگری در استانبول رزرو کنید، همیشه اینجاییم.", fr: "Nous vous recontactons pour vos retours et restons disponibles si vous souhaitez réserver une autre expérience à Istanbul.", it: "La ricontattiamo per il Suo feedback e siamo sempre qui se desidera prenotare un'altra esperienza a Istanbul.", zh: "我们会跟进您的反馈,如果您想再预订一次伊斯坦布尔的体验,我们随时都在。", id: "Kami menindaklanjuti untuk umpan balik Anda dan selalu siap jika Anda ingin memesan pengalaman lain di Istanbul.", ms: "Kami susul untuk maklum balas anda dan sentiasa di sini jika anda mahu menempah pengalaman lain di Istanbul.", pl: "Kontaktujemy się w sprawie opinii i jesteśmy zawsze dostępni, jeśli chcą Państwo zarezerwować kolejne doświadczenie w Stambule.", bg: "Следим за обратната Ви връзка и винаги сме тук, ако желаете да резервирате друго преживяване в Истанбул.", ro: "Urmărim feedback-ul dumneavoastră și suntem mereu aici dacă doriți să rezervați o altă experiență în Istanbul.", uk: "Ми запитуємо Ваш відгук і завжди готові допомогти, якщо Ви захочете забронювати ще один захоплюючий досвід у Istanbul.", ja: "ご感想をお伺いし、Istanbulで他の体験をご希望の際にもいつでもご対応いたします。", ko: "고객님의 피드백을 받기 위해 후속 연락을 드리며, Istanbul에서 또 다른 경험을 예약하고 싶으실 때 언제든 도와드립니다.", hi: "हम आपकी प्रतिक्रिया के लिए संपर्क करते हैं और यदि आप Istanbul में कोई अन्य अनुभव बुक करना चाहते हैं तो हमेशा उपलब्ध हैं।", ur: "ہم آپ کے تاثرات کے لیے فالو اپ کرتے ہیں اور ہمیشہ موجود ہیں اگر آپ Istanbul میں کوئی اور تجربہ بُک کرنا چاہیں۔"
  },

  // ========== FAQ ==========
  "faq.label": {
    en: "FAQ", tr: "SSS", de: "FAQ", es: "FAQ", ru: "Вопросы", ar: "الأسئلة الشائعة",
    fa: "سؤالات متداول", fr: "FAQ", it: "FAQ", zh: "常见问题", id: "FAQ", ms: "Soalan Lazim", pl: "FAQ", bg: "Въпроси", ro: "Întrebări Frecvente", uk: "Часті питання", ja: "よくあるご質問", ko: "FAQ", hi: "FAQ", ur: "عمومی سوالات"
  },
  "faq.title": {
    en: "Frequently Asked Questions", tr: "Sık Sorulan Sorular",
    de: "Häufig gestellte Fragen", es: "Preguntas Frecuentes",
    ru: "Часто задаваемые вопросы", ar: "الأسئلة الشائعة",
    fa: "سؤالات پرتکرار", fr: "Questions fréquentes", it: "Domande frequenti", zh: "常见问题", id: "Pertanyaan yang Sering Diajukan", ms: "Soalan Kerap Ditanya", pl: "Najczęściej zadawane pytania", bg: "Често задавани въпроси", ro: "Întrebări Frecvente", uk: "Часті питання", ja: "よくあるご質問", ko: "자주 묻는 질문", hi: "अक्सर पूछे जाने वाले प्रश्न", ur: "اکثر پوچھے جانے والے سوالات"
  },
  "faq.q0": { en: "What cruise tours do you offer?", tr: "Hangi tur seçenekleriniz var?", de: "Welche Touren bieten Sie an?", es: "¿Qué cruceros ofrecen?", ru: "Какие круизы вы предлагаете?", ar: "ما هي الرحلات البحرية التي تقدمونها؟", fa: "چه تورهایی ارائه می‌کنید؟", fr: "Quelles croisières proposez-vous ?", it: "Quali tour di crociera offrite?", zh: "您提供哪些游船?", id: "Tur pelayaran apa yang Anda tawarkan?", ms: "Apakah tur pelayaran yang anda tawarkan?", pl: "Jakie rejsy oferują Państwo?", bg: "Какви круизни турове предлагате?", ro: "Ce tururi de croazieră oferiți?" },
  "faq.a0": {
    en: "We offer the <strong>Bosphorus Dinner Cruise</strong> (20:30, 3 hours — full dinner, Turkish night show with Whirling Dervish, belly dance, folk dances, live music and DJ, plus stunning night views). Departs from Kabataş Pier.",
    tr: "<strong>Bosphorus Akşam Yemekli Turu</strong> sunuyoruz (20:30, 3 saat — tam menü akşam yemeği, Mevlana sema gösterisi, oryantal dans, halk oyunları, canlı müzik ve DJ, muhteşem gece manzarası). Kabataş İskelesi'nden kalkar.",
    de: "Wir bieten die <strong>Bosporus-Dinner-Kreuzfahrt</strong> (20:30, 3 Std. — Dinner, Türkische Nacht mit Derwisch-Tanz, Bauchtanz, Volkstänzen, Live-Musik und DJ, sowie atemberaubende Nachtblicke). Ab Kabataş-Pier.",
    es: "Ofrecemos el <strong>Crucero con Cena por el Bósforo</strong> (20:30, 3 horas — cena completa, noche turca con Derviches Giradores, danza del vientre, danzas folclóricas, música en vivo y DJ, más vistas nocturnas impresionantes). Sale del muelle de Kabataş.",
    ru: "Мы предлагаем <strong>Ужин-круиз по Босфору</strong> (20:30, 3 часа — ужин, турецкая ночь с кружащимися дервишами, танец живота, народные танцы, живая музыка и DJ, плюс впечатляющие ночные виды). Отправление с причала Кабаташ.",
    ar: "نقدم <strong>رحلة عشاء البوسفور</strong> (20:30، 3 ساعات — عشاء كامل، ليلة تركية مع رقصة الدراويش المولوية، رقص شرقي، رقصات شعبية، موسيقى حية وDJ، مع مناظر ليلية رائعة). تنطلق من رصيف كاباتاش.",
    fa: "ما <strong>تور شام بسفر</strong> را ارائه می‌کنیم (۲۰:۳۰، ۳ ساعت — شام کامل، نمایش شب ترکی با رقص سماع، رقص شرقی، رقص‌های محلی، موسیقی زنده و دی‌جی، به‌علاوه مناظر خیره‌کننده شبانه). حرکت از اسکله کاباتاش.", fr: "Nous proposons la <strong>Croisière dîner sur le Bosphore</strong> (20h30, 3 heures — dîner complet, soirée turque avec derviche tourneur, danse orientale, danses folkloriques, musique live et DJ, ainsi que des vues nocturnes éblouissantes). Départ de l'embarcadère de Kabataş.", it: "Offriamo la <strong>Crociera con Cena sul Bosforo</strong> (20:30, 3 ore — cena completa, spettacolo della serata turca con Dervisci Rotanti, danza orientale, danze folkloristiche, musica dal vivo e DJ, più splendide vedute notturne). Parte dal molo di Kabataş.", zh: "我们提供<strong>博斯普鲁斯晚宴游船</strong>(20:30,3小时——完整晚宴、含旋转舞、肚皮舞、民族舞、现场音乐与DJ的土耳其之夜表演,以及震撼夜景)。从卡巴塔什码头启航。", id: "Kami menawarkan <strong>Pelayaran Makan Malam Bosphorus</strong> (20:30, 3 jam — makan malam lengkap, pertunjukan malam Turki dengan Darwis Berputar, tari oriental, tarian rakyat, musik langsung dan DJ, ditambah pemandangan malam yang memukau). Berangkat dari Dermaga Kabataş.", ms: "Kami menawarkan <strong>Pelayaran Makan Malam Bosphorus</strong> (20:30, 3 jam — makan malam penuh, persembahan malam Turki dengan Darwish Berputar, tarian oryantal, tarian rakyat, muzik langsung dan DJ, serta pemandangan malam yang mengagumkan). Bertolak dari Jeti Kabataş.", pl: "Oferujemy <strong>Rejs z kolacją po Bosforze</strong> (20:30, 3 godziny — pełna kolacja, turecki pokaz nocny z wirującym derwiszem, tańcem brzucha, tańcami ludowymi, muzyką na żywo i DJ-em oraz zapierającymi dech w piersiach widokami nocnymi). Wypłynięcie z przystani Kabataş.", bg: "Предлагаме <strong>круиз с вечеря по Босфора</strong> (20:30 ч., 3 часа — пълна вечеря, турска нощна програма с танцуващи дервиши, танц на корема, фолклорни танци, музика на живо и DJ, плюс зашеметяващи нощни гледки). Отплаване от пристанището Кабаташ.", ro: "Oferim <strong>Croaziera cu Cină pe Bosfor</strong> (20:30, 3 ore — cină completă, spectacol de seară turcească cu Derviș Rotitor, dans oriental, dansuri populare, muzică live și DJ, plus priveliști nocturne uimitoare). Pleacă din debarcaderul Kabataș.", uk: "Ми пропонуємо <strong>Bosphorus Dinner Cruise</strong> (20:30, 3 години — повноцінна вечеря, турецьке нічне шоу з танцем дервішів, танцем живота, народними танцями, живою музикою та діджеєм, а також приголомшливими нічними краєвидами). Відправлення з причалу Kabataş.", ja: "<strong>Bosphorusディナークルーズ</strong>をご提供しております（20:30出航、3時間 — フルコースディナー、旋舞教団のパフォーマンスを含むトルコナイトショー、ベリーダンス、民族舞踊、生演奏とDJ、そして美しい夜景をお楽しみいただけます）。Kabataş桟橋から出航いたします。", ko: "<strong>Bosphorus 디너 크루즈</strong>를 제공합니다 (20:30, 3시간 — 풀코스 디너, 회전 데르비시가 포함된 터키 나이트 쇼, 벨리댄스, 민속 춤, 라이브 음악과 DJ, 그리고 환상적인 야경). Kabataş 선착장에서 출발합니다.", hi: "हम <strong>Bosphorus डिनर क्रूज़</strong> प्रदान करते हैं (20:30, 3 घंटे — पूर्ण डिनर, व्हर्लिंग डर्विश के साथ तुर्की नाइट शो, बेली डांस, लोक नृत्य, लाइव संगीत और DJ, साथ ही शानदार रात के दृश्य)। Kabataş घाट से प्रस्थान।", ur: "ہم <strong>Bosphorus ڈنر کروز</strong> پیش کرتے ہیں (20:30، 3 گھنٹے — مکمل ڈنر، Turkish نائٹ شو بمع Whirling Dervish، بیلی ڈانس، لوک رقص، لائیو موسیقی اور DJ، نیز شاندار رات کے مناظر)۔ Kabataş گھاٹ سے روانگی۔"
  },
  "faq.q1": { en: "What's on the dinner menu?", tr: "Yemek menüsünde neler var?", de: "Was gibt es zum Abendessen?", es: "¿Qué hay en el menú de la cena?", ru: "Что в меню ужина?", ar: "ماذا يوجد في قائمة العشاء؟", fa: "منوی شام چیست؟", fr: "Que contient le menu du dîner ?", it: "Cosa c'è nel menu della cena?", zh: "晚宴菜单有什么?", id: "Apa yang ada di menu makan malam?", ms: "Apakah menu makan malam?", pl: "Co jest w menu kolacyjnym?", bg: "Какво е в менюто за вечеря?", ro: "Ce este în meniul de cină?" },
  "faq.a1": {
    en: "All packages include a full dinner with 7 varieties of Turkish meze, your choice of main course (fish, chicken, or meatball), and dessert. VIP packages feature a premium mixed grill platter with selected cuts. Vegetarian options are available on request.",
    tr: "Standard pakette 10 çeşit Türk mezesi (VIP'te 15+), somon/çupra/tavuk/köfte ana yemek seçenekleri ve dondurmalı pasta dahildir. VIP pakette antrikot ve biftek seçenekleri, sahneye yakın masa vardır. İstek üzerine vejetaryen menü mevcuttur.",
    de: "Alle Pakete enthalten Abendessen mit 10 Meze-Sorten Standard (15+ für VIP), Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte) und Dessert mit Eis. VIP-Pakete mit Rib-Eye/Filet.",
    es: "Todos los paquetes incluyen una cena completa con 7 variedades de meze turco, tu elección de plato principal (pescado, pollo o albóndigas) y postre. Los paquetes VIP incluyen una parrillada mixta premium.",
    ru: "Все пакеты включают полный ужин с 7 видами турецких мезе, основное блюдо на выбор (рыба, курица или котлеты) и десерт. VIP-пакеты включают премиальное ассорти гриль.",
    ar: "تشمل جميع الباقات عشاءً كاملاً مع 7 أنواع من المقبلات التركية، واختيارك للطبق الرئيسي (سمك أو دجاج أو كفتة)، وحلوى. تتميز باقات VIP بطبق مشويات فاخر.",
    fa: "همه پکیج‌ها شامل شام کامل با ۷ نوع مزه ترکی، انتخاب غذای اصلی (ماهی، مرغ یا کوفته) و دسر است. پکیج‌های VIP سینی گریل مخلوط ممتاز با برش‌های منتخب دارند. گزینه‌های گیاه‌خواری به درخواست در دسترس است.", fr: "Tous les forfaits incluent un dîner complet avec 7 variétés de mezzés turcs, un choix de plat principal (poisson, poulet ou köfte) et un dessert. Les forfaits VIP proposent un plateau de grillades premium avec des pièces sélectionnées. Des options végétariennes sont disponibles sur demande.", it: "Tutti i pacchetti includono una cena completa con 7 varietà di meze turchi, un secondo a scelta (pesce, pollo o köfte) e dolce. I pacchetti VIP prevedono un piatto misto alla griglia premium con tagli selezionati. Opzioni vegetariane disponibili su richiesta.", zh: "所有套餐均含完整晚宴——7种土耳其冷盘、主菜可选(鱼、鸡或肉丸)、甜点。VIP套餐提供尊享混合烤肉拼盘,含精选部位。可应要求提供素食选项。", id: "Semua paket termasuk makan malam lengkap dengan 7 jenis meze Turki, pilihan menu utama Anda (ikan, ayam, atau köfte), dan pencuci mulut. Paket VIP menampilkan piring mixed grill premium dengan potongan pilihan. Pilihan vegetarian tersedia atas permintaan.", ms: "Semua pakej termasuk makan malam penuh dengan 7 jenis meze Turki, pilihan hidangan utama anda (ikan, ayam atau köfte), dan pencuci mulut. Pakej VIP menampilkan pinggan panggangan campuran premium dengan potongan terpilih. Pilihan vegetarian tersedia atas permintaan.", pl: "Wszystkie pakiety zawierają pełną kolację z 7 rodzajami tureckich mezze, wybór dania głównego (ryba, kurczak lub kotlety) oraz deser. Pakiety VIP oferują półmisek mieszany premium z wybranymi kawałkami mięsa. Opcje wegetariańskie dostępne na życzenie.", bg: "Всички пакети включват пълна вечеря със 7 вида турски мезета, избор на основно ястие (риба, пиле или кюфте) и десерт. VIP пакетите предлагат премиум микс грил плато с избрани разфасовки. Вегетариански опции при заявка.", ro: "Toate pachetele includ o cină completă cu 7 sortimente de mezeluri turcești, alegerea dumneavoastră de fel principal (pește, pui sau chiftele) și desert. Pachetele VIP includ un platou mixt la grătar premium cu carne selecționată. Opțiunile vegetariene sunt disponibile la cerere.", uk: "Усі пакети включають повноцінну вечерю з 7 видами турецьких мезе, основну страву на вибір (риба, курка або котлети), та десерт. VIP пакети включають преміум-асорті з грилю з вибраними шматками м'яса. Вегетаріанські страви доступні на запит.", ja: "すべてのパッケージには、7種類のトルコ風メゼ、メインディッシュ（魚、チキン、またはミートボールからお選びいただけます）、デザートを含むフルコースディナーが含まれます。VIPパッケージでは、厳選された肉を使用したプレミアムミックスグリルプレートをご用意しております。ベジタリアンメニューもご要望に応じてご用意可能です。", ko: "모든 패키지에는 7종류의 터키식 메제, 선택 가능한 메인 요리(생선, 치킨 또는 미트볼), 그리고 디저트가 포함된 풀코스 디너가 제공됩니다. VIP 패키지는 엄선된 고기로 구성된 프리미엄 혼합 그릴 플래터가 제공됩니다. 채식 옵션은 요청 시 제공 가능합니다.", hi: "सभी पैकेजों में 7 प्रकार के तुर्की मेज़े के साथ पूर्ण डिनर, आपकी पसंद का मुख्य व्यंजन (मछली, चिकन, या मीटबॉल), और मिठाई शामिल है। VIP पैकेजों में चुनिंदा कटों के साथ प्रीमियम मिक्स्ड ग्रिल प्लेटर है। अनुरोध पर शाकाहारी विकल्प उपलब्ध हैं।", ur: "تمام پیکجز میں 7 اقسام کے Turkish میزے کے ساتھ مکمل ڈنر، آپ کی پسند کا مین کورس (مچھلی، چکن، یا میٹ بال)، اور ڈیزرٹ شامل ہیں۔ VIP پیکجز میں منتخب کٹس کے ساتھ پریمیم مکسڈ گرل پلیٹر شامل ہے۔ درخواست پر سبزی خور اختیارات دستیاب ہیں۔"
  },
  "faq.q2": { en: "Are alcoholic drinks included?", tr: "Alkollü içecekler dahil mi?", de: "Sind alkoholische Getränke inklusive?", es: "¿Están incluidas las bebidas alcohólicas?", ru: "Включены ли алкогольные напитки?", ar: "هل المشروبات الكحولية مشمولة؟", fa: "آیا نوشیدنی‌های الکلی شامل می‌شود؟", fr: "Les boissons alcoolisées sont-elles incluses ?", it: "Le bevande alcoliche sono incluse?", zh: "酒水含在内吗?", id: "Apakah minuman beralkohol termasuk?", ms: "Adakah minuman beralkohol termasuk?", pl: "Czy napoje alkoholowe są wliczone?", bg: "Включени ли са алкохолните напитки?", ro: "Băuturile alcoolice sunt incluse?" },
  "faq.a2": {
    en: "All packages include soft (non-alcoholic) drinks. You can add 2 glasses of alcohol for +€{p.alcohol2} per person, or an unlimited local alcohol package for +€{p.unlimited} per person. The local package covers vodka, gin, rakı, red and white wine. Imported spirits (whiskey, cognac) are charged separately.",
    tr: "Tüm paketlere soft (alkolsüz) içecekler dahildir. Kişi başı +€{p.alcohol2} ile 2 bardak alkol veya +€{p.unlimited} ile sınırsız yerli alkol paketi ekleyebilirsiniz. Yerli paket; votka, cin, rakı, kırmızı ve beyaz şarap ile sınırlıdır. İthal içkiler (viski, konyak) ekstra ücrete tabidir.",
    de: "Alle Pakete enthalten alkoholfreie Getränke. Für +€{p.alcohol2} pro Person 2 Gläser Alkohol oder für +€{p.unlimited} pro Person ein unbegrenztes lokales Alkoholpaket wählbar. Das lokale Paket umfasst Wodka, Gin, Rakı, Rot- und Weißwein. Importierte Spirituosen (Whisky, Cognac) werden separat berechnet.",
    es: "Todos los paquetes incluyen bebidas sin alcohol. Puedes añadir 2 copas de alcohol por +€{p.alcohol2} por persona, o un paquete de alcohol local ilimitado por +€{p.unlimited} por persona. El paquete local incluye vodka, ginebra, rakı, vino tinto y blanco. Los licores importados (whisky, coñac) se cobran aparte.",
    ru: "Все пакеты включают безалкогольные напитки. За +€{p.alcohol2} с человека можно добавить 2 бокала алкоголя, а за +€{p.unlimited} — безлимитный пакет местного алкоголя. Местный пакет включает водку, джин, ракы, красное и белое вино. Импортный алкоголь (виски, коньяк) оплачивается отдельно.",
    ar: "جميع الباقات تشمل المشروبات الخفيفة (غير الكحولية). يمكنك إضافة كأسين من الكحول مقابل +€{p.alcohol2} للشخص، أو باقة كحول محلية غير محدودة مقابل +€{p.unlimited} للشخص. تشمل الباقة المحلية: فودكا، جن، راكي، نبيذ أحمر وأبيض. المشروبات المستوردة (ويسكي، كونياك) تُحتسب بشكل منفصل.",
    fa: "همه پکیج‌ها شامل نوشیدنی‌های بدون‌الکل است. می‌توانید ۲ لیوان الکل با +€{p.alcohol2} به ازای هر نفر یا پکیج الکل داخلی نامحدود با +€{p.unlimited} به ازای هر نفر اضافه کنید. پکیج داخلی شامل ودکا، جین، راکی، شراب قرمز و سفید است. نوشیدنی‌های وارداتی (ویسکی، کنیاک) جداگانه محاسبه می‌شوند.", fr: "Tous les forfaits incluent les boissons non alcoolisées. Vous pouvez ajouter 2 verres d'alcool pour +€{p.alcohol2} par personne, ou un forfait alcool local illimité pour +€{p.unlimited} par personne. Le forfait local couvre vodka, gin, rakı, vin rouge et vin blanc. Les spiritueux importés (whisky, cognac) sont facturés séparément.", it: "Tutti i pacchetti includono bevande analcoliche. È possibile aggiungere 2 bicchieri di alcol per +€{p.alcohol2} a persona, oppure un pacchetto di alcol locale illimitato per +€{p.unlimited} a persona. Il pacchetto locale copre vodka, gin, rakı, vino rosso e bianco. I distillati d'importazione (whisky, cognac) hanno un prezzo separato.", zh: "所有套餐均含软饮(无酒精)。您可加2杯酒,+€{p.alcohol2}／人,或加无限畅饮本地酒套餐+€{p.unlimited}／人。本地套餐包括伏特加、金酒、拉克酒、红白葡萄酒。进口烈酒(威士忌、干邑)另行计价。", id: "Semua paket termasuk minuman ringan (non-alkohol). Anda dapat menambahkan 2 gelas alkohol dengan +€{p.alcohol2} per orang, atau paket alkohol lokal tanpa batas dengan +€{p.unlimited} per orang. Paket lokal mencakup vodka, gin, rakı, anggur merah dan putih. Minuman impor (wiski, cognac) dikenakan biaya terpisah.", ms: "Semua pakej termasuk minuman ringan (tanpa alkohol). Anda boleh tambah 2 gelas alkohol untuk +€{p.alcohol2} setiap orang, atau pakej alkohol tempatan tanpa had untuk +€{p.unlimited} setiap orang. Pakej tempatan merangkumi vodka, gin, rakı, wain merah dan putih. Minuman keras diimport (wiski, cognac) dikenakan bayaran berasingan.", pl: "Wszystkie pakiety zawierają napoje bezalkoholowe. Można dodać 2 kieliszki alkoholu za +€{p.alcohol2}/osobę lub pakiet nieograniczonego alkoholu lokalnego za +€{p.unlimited}/osobę. Pakiet lokalny obejmuje wódkę, gin, rakı, wino czerwone i białe. Alkohole importowane (whisky, koniak) są wyceniane osobno.", bg: "Всички пакети включват безалкохолни напитки. Можете да добавите 2 чаши алкохол за +€{p.alcohol2} на човек или неограничен местен алкохолен пакет за +€{p.unlimited} на човек. Местният пакет включва водка, джин, ракъ, червено и бяло вино. Вносните спиртни напитки (уиски, коняк) се таксуват отделно.", ro: "Toate pachetele includ băuturi răcoritoare (non-alcoolice). Puteți adăuga 2 pahare de alcool pentru +€{p.alcohol2} pe persoană sau un pachet nelimitat de alcool local pentru +€{p.unlimited} pe persoană. Pachetul local acoperă vodcă, gin, rachiu, vin roșu și alb. Băuturile spirtoase de import (whiskey, cognac) se taxează separat.", uk: "Усі пакети включають безалкогольні напої. Ви можете додати 2 келихи алкоголю за +€{p.alcohol2} на особу або пакет безлімітного місцевого алкоголю за +€{p.unlimited} на особу. Місцевий пакет включає горілку, джин, ракі, червоне та біле вино. Імпортні міцні напої (віскі, коньяк) оплачуються окремо.", ja: "すべてのパッケージにソフトドリンク（ノンアルコール）が含まれます。アルコール2杯を1名様あたり+€{p.alcohol2}で、または地元のお酒飲み放題パッケージを1名様あたり+€{p.unlimited}で追加いただけます。地元のお酒パッケージには、ウォッカ、ジン、ラク、赤ワイン、白ワインが含まれます。輸入スピリッツ（ウイスキー、コニャックなど）は別途料金となります。", ko: "모든 패키지에는 소프트 드링크(무알코올 음료)가 포함됩니다. 알코올 2잔을 1인당 +€{p.alcohol2}에 추가하실 수 있으며, 현지 알코올 무제한 패키지는 1인당 +€{p.unlimited}에 추가하실 수 있습니다. 현지 패키지에는 보드카, 진, 라크, 레드 와인, 화이트 와인이 포함됩니다. 수입 주류(위스키, 코냑)는 별도 요금이 부과됩니다.", hi: "सभी पैकेजों में सॉफ्ट (गैर-अल्कोहल) ड्रिंक्स शामिल हैं। आप प्रति व्यक्ति +€{p.alcohol2} में 2 गिलास अल्कोहल जोड़ सकते हैं, या प्रति व्यक्ति +€{p.unlimited} में असीमित स्थानीय अल्कोहल पैकेज ले सकते हैं। स्थानीय पैकेज में वोदका, जिन, राकी, रेड और व्हाइट वाइन शामिल हैं। आयातित स्पिरिट (व्हिस्की, कॉन्यैक) अलग से चार्ज की जाती हैं।", ur: "تمام پیکجز میں سافٹ (غیر الکوحل) ڈرنکس شامل ہیں۔ آپ +€{p.alcohol2} فی شخص کے عوض 2 گلاس الکوحل شامل کر سکتے ہیں، یا +€{p.unlimited} فی شخص کے عوض لامحدود مقامی الکوحل پیکج لے سکتے ہیں۔ مقامی پیکج میں ووڈکا، جن، راکی، ریڈ اور وائٹ وائن شامل ہیں۔ درآمد شدہ اسپرٹس (وہسکی، کونیاک) کی علیحدہ چارج لگائی جاتی ہے۔"
  },
  "faq.q3": { en: "Where does the cruise depart and return?", tr: "Tur nereden kalkıp nereye dönüyor?", de: "Wo ist Abfahrt und Rückkehr?", es: "¿De dónde sale y regresa el crucero?", ru: "Откуда отправляется и возвращается круиз?", ar: "من أين تغادر وتعود الرحلة؟", fa: "کشتی از کجا حرکت می‌کند و کجا بازمی‌گردد؟", fr: "D'où part et où revient la croisière ?", it: "Da dove parte e dove rientra la crociera?", zh: "游船从哪里启航与返航?", id: "Di mana pelayaran berangkat dan kembali?", ms: "Di manakah pelayaran bertolak dan kembali?", pl: "Skąd wypływa rejs i gdzie wraca?", bg: "Откъде тръгва и връща ли се круизът?", ro: "De unde pleacă și unde se întoarce croaziera?" },
  "faq.a3": {
    en: "Cruises depart from Kabataş pier at 20:30 and return to the same location between 23:00 and 23:30 (3-hour cruise). The exact meeting point will be shared via WhatsApp / Telegram / WeChat after booking.",
    tr: "Turlar Kabataş iskelesinden saat 20:30'te kalkar ve aynı noktaya 23:00 civarında döner (3 saatlik tur). Tam buluşma noktası rezervasyon sonrası WhatsApp / Telegram / WeChat ile paylaşılır.",
    de: "Abfahrt ab Kabataş-Pier um 20:30, Rückkehr zwischen 23:00 und 23:30 (3 Stunden). Den genauen Treffpunkt erhalten Sie nach Buchung per WhatsApp / Telegram / WeChat.",
    es: "Los cruceros salen del muelle de Kabataş a las 20:30 y regresan al mismo lugar entre las 23:00 y las 23:30 (crucero de 3 horas). El punto de encuentro exacto se compartirá por WhatsApp / Telegram / WeChat tras la reserva.",
    ru: "Круизы отправляются от причала Кабаташ в 20:30 и возвращаются между 23:00 и 23:30 (3 часа). Точное место встречи будет отправлено в WhatsApp / Telegram / WeChat после бронирования.",
    ar: "تغادر الرحلات من رصيف كاباتاش الساعة 20:30 وتعود إلى نفس الموقع بين 23:00 و 23:30 (رحلة 3 ساعات). سيتم مشاركة نقطة الالتقاء عبر واتساب / تليجرام / وي شات بعد الحجز.",
    fa: "تورها ساعت ۲۰:۳۰ از اسکله کاباتاش حرکت می‌کنند و بین ۲۳:۰۰ تا ۲۳:۳۰ به همان مکان بازمی‌گردند (تور ۳ ساعته). نقطه دقیق ملاقات پس از رزرو از طریق واتس‌اپ / تلگرام / وی‌چت به اشتراک گذاشته می‌شود.", fr: "Les croisières partent de l'embarcadère de Kabataş à 20h30 et retournent au même endroit entre 23h00 et 23h30 (croisière de 3 heures). Le point de rendez-vous exact sera communiqué par WhatsApp / Telegram / WeChat après la réservation.", it: "Le crociere partono dal molo di Kabataş alle 20:30 e rientrano nello stesso luogo tra le 23:00 e le 23:30 (crociera di 3 ore). Il punto d'incontro esatto sarà condiviso via WhatsApp / Telegram / WeChat dopo la prenotazione.", zh: "游船从卡巴塔什码头20:30启航,约23:00至23:30之间返回同一地点(3小时游船)。预订后具体集合地点将通过WhatsApp / Telegram / WeChat告知。", id: "Pelayaran berangkat dari dermaga Kabataş pukul 20:30 dan kembali ke lokasi yang sama antara 23:00 dan 23:30 (pelayaran 3 jam). Titik pertemuan yang tepat akan dibagikan via WhatsApp / Telegram / WeChat setelah pemesanan.", ms: "Pelayaran bertolak dari jeti Kabataş pada 20:30 dan kembali ke lokasi yang sama antara 23:00 dan 23:30 (pelayaran 3 jam). Titik pertemuan tepat akan dikongsi melalui WhatsApp / Telegram / WeChat selepas tempahan.", pl: "Rejsy wypływają z przystani Kabataş o 20:30 i wracają do tego samego miejsca między 23:00 a 23:30 (3-godzinny rejs). Dokładne miejsce spotkania zostanie udostępnione przez WhatsApp / Telegram / WeChat po rezerwacji.", bg: "Круизите тръгват от пристанището Кабаташ в 20:30 ч. и се връщат на същото място между 23:00 и 23:30 ч. (3-часов круиз). Точното място за среща ще бъде споделено чрез WhatsApp / Telegram / WeChat след резервацията.", ro: "Croazierele pleacă de la debarcaderul Kabataș la 20:30 și se întorc în aceeași locație între 23:00 și 23:30 (croazieră de 3 ore). Punctul exact de întâlnire va fi împărtășit prin WhatsApp / Telegram / WeChat după rezervare.", uk: "Круїзи відправляються з причалу Kabataş о 20:30 і повертаються до того ж місця між 23:00 та 23:30 (3-годинний круїз). Точне місце зустрічі буде надіслано через WhatsApp / Telegram / WeChat після бронювання.", ja: "クルーズは20:30にKabataş桟橋から出航し、23:00〜23:30の間に同じ場所に戻ります（3時間のクルーズ）。正確な集合場所は、ご予約後にWhatsApp・Telegram・WeChatでお知らせいたします。", ko: "크루즈는 Kabataş 선착장에서 20:30에 출발하여 23:00에서 23:30 사이에 같은 장소로 돌아옵니다 (3시간 크루즈). 정확한 만남 장소는 예약 후 WhatsApp / Telegram / WeChat을 통해 공유됩니다.", hi: "क्रूज़ 20:30 पर Kabataş घाट से निकलते हैं और 23:00 और 23:30 के बीच उसी स्थान पर वापस आते हैं (3 घंटे का क्रूज़)। बुकिंग के बाद WhatsApp / Telegram / WeChat के माध्यम से सटीक मिलने की जगह साझा की जाएगी।", ur: "کروزز Kabataş گھاٹ سے 20:30 بجے روانہ ہوتی ہیں اور 23:00 سے 23:30 کے درمیان اسی جگہ واپس آتی ہیں (3 گھنٹے کی کروز)۔ بُکنگ کے بعد صحیح ملاقات کی جگہ WhatsApp / Telegram / WeChat کے ذریعے شیئر کی جائے گی۔"
  },
  "faq.q4": { en: "What route does the cruise take?", tr: "Tur hangi rotayı izliyor?", de: "Welche Route fährt die Tour?", es: "¿Qué ruta toma el crucero?", ru: "Каким маршрутом идёт круиз?", ar: "ما هو مسار الرحلة؟", fa: "مسیر تور کدام است؟", fr: "Quel itinéraire suit la croisière ?", it: "Che itinerario segue la crociera?", zh: "游船走什么航线?", id: "Rute apa yang dilalui pelayaran?", ms: "Apakah laluan yang diambil pelayaran?", pl: "Jaką trasą płynie rejs?", bg: "Какъв маршрут следва круизът?", ro: "Ce rută urmează croaziera?" },
  "faq.a4": {
    en: "Kabataş Pier → Dolmabahçe Palace → Çırağan Palace → Ortaköy Mosque → Bosphorus Bridge → Bebek → Rumeli Fortress → FSM Bridge → Beylerbeyi Palace → Üsküdar → Maiden's Tower (visible from distance) → Kabataş Pier. Route is for reference only. Itinerary may vary due to weather or sea conditions.",
    tr: "Kabataş İskelesi → Dolmabahçe Sarayı → Çırağan Sarayı → Ortaköy Camii → Boğaz Köprüsü → Bebek → Rumeli Hisarı → FSM Köprüsü → Beylerbeyi Sarayı → Üsküdar → Kız Kulesi (uzaktan görünür) → Kabataş İskelesi. Rota yalnızca referans amaçlıdır. Hava ve deniz koşullarına göre güzergâh değişebilir.",
    de: "Kabataş-Pier → Dolmabahçe-Palast → Çırağan-Palast → Ortaköy-Moschee → Bosporus-Brücke → Bebek → Rumeli-Festung → FSM-Brücke → Beylerbeyi-Palast → Üsküdar → Leanderturm (aus der Ferne sichtbar) → Kabataş-Pier. Die Route dient nur als Referenz. Je nach Wetter- und Seebedingungen kann der Verlauf variieren.",
    es: "Embarcadero Kabataş → Palacio Dolmabahçe → Palacio Çırağan → Mezquita Ortaköy → Puente del Bósforo → Bebek → Fortaleza Rumeli → Puente FSM → Palacio Beylerbeyi → Üsküdar → Torre de la Doncella (visible en la distancia) → Embarcadero Kabataş. La ruta es solo de referencia. El itinerario puede variar según las condiciones del tiempo y del mar.",
    ru: "Пирс Кабаташ → Дворец Долмабахче → Дворец Чираган → Мечеть Ортакёй → Босфорский мост → Бебек → Крепость Румели → Мост ФСМ → Дворец Бейлербейи → Ускюдар → Девичья башня (видна издалека) → Пирс Кабаташ. Маршрут приведён для справки. Программа может меняться из-за погодных и морских условий.",
    ar: "رصيف قباطاش → قصر دولمة بهجة → قصر تشيراغان → مسجد أورتاكوي → جسر البوسفور → بيبك → قلعة روملي → جسر السلطان محمد الفاتح → قصر بيلربيي → أسكودار → برج الفتاة (يُرى من بعيد) → رصيف قباطاش. المسار للاسترشاد فقط، وقد يتغير حسب ظروف الطقس والبحر.",
    fa: "اسکله کاباتاش ← کاخ دلمه‌باغچه ← کاخ چیراغان ← مسجد اورتاکوی ← پل بسفر ← بِبِک ← قلعه روم‌ایلی ← پل فاتح سلطان محمد ← کاخ بی‌لربه‌یی ← اسکودار ← برج دختر (از فاصله دیده می‌شود) ← اسکله کاباتاش. مسیر فقط برای اطلاع است. برنامه ممکن است بسته به آب‌وهوا یا شرایط دریا تغییر کند.", fr: "Embarcadère de Kabataş → palais de Dolmabahçe → palais de Çırağan → mosquée d'Ortaköy → pont du Bosphore → Bebek → forteresse de Rumeli → pont FSM → palais de Beylerbeyi → Üsküdar → Tour de Léandre (visible de loin) → embarcadère de Kabataş. L'itinéraire est indicatif. Il peut varier en fonction de la météo ou de l'état de la mer.", it: "Molo di Kabataş → Palazzo Dolmabahçe → Palazzo di Çırağan → Moschea di Ortaköy → Ponte del Bosforo → Bebek → Rumeli Hisarı → Ponte FSM → Palazzo Beylerbeyi → Üsküdar → Torre della Fanciulla (visibile a distanza) → Molo di Kabataş. L'itinerario è solo indicativo. Può variare a causa delle condizioni meteo o del mare.", zh: "卡巴塔什码头 → 多尔玛巴切宫 → 奇拉昂宫 → 奥尔塔科伊清真寺 → 博斯普鲁斯大桥 → 贝贝克 → 鲁梅利堡垒 → FSM大桥 → 贝伊勒尔贝伊宫 → 于斯屈达尔 → 少女塔(远眺可见) → 卡巴塔什码头。航线仅供参考。实际行程可能因天气或海况而有所调整。", id: "Dermaga Kabataş → Istana Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Jembatan Bosphorus → Bebek → Benteng Rumeli → Jembatan FSM → Istana Beylerbeyi → Üsküdar → Menara Gadis (terlihat dari kejauhan) → Dermaga Kabataş. Rute hanya sebagai referensi. Itinerary dapat bervariasi karena cuaca atau kondisi laut.", ms: "Jeti Kabataş → Istana Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Jambatan Bosphorus → Bebek → Kubu Rumeli → Jambatan FSM → Istana Beylerbeyi → Üsküdar → Menara Maiden (kelihatan dari jauh) → Jeti Kabataş. Laluan hanyalah sebagai rujukan. Jadual perjalanan mungkin berubah disebabkan cuaca atau keadaan laut.", pl: "Przystań Kabataş → Pałac Dolmabahçe → Pałac Çırağan → Meczet Ortaköy → Most Bosforski → Bebek → Twierdza Rumeli Hisarı → Most FSM → Pałac Beylerbeyi → Üsküdar → Wieża Panny (widoczna z daleka) → Przystań Kabataş. Trasa ma charakter orientacyjny. Plan może się zmienić z powodu pogody lub warunków morskich.", bg: "Пристанище Кабаташ → дворец Долмабахче → дворец Чъраган → джамия Ортакьой → мост на Босфора → Бебек → Румелийска крепост → мост „Фатих Султан Мехмед“ → дворец Бейлербей → Юскюдар → Кулата на девойката (видима от разстояние) → пристанище Кабаташ. Маршрутът е само за справка. Програмата може да варира поради времето или морските условия.", ro: "Debarcaderul Kabataș → Palatul Dolmabahçe → Palatul Çırağan → Moscheea Ortaköy → Podul Bosfor → Bebek → Fortăreața Rumeli → Podul FSM → Palatul Beylerbeyi → Üsküdar → Turnul Fecioarei (vizibil de la distanță) → Debarcaderul Kabataș. Ruta este doar orientativă. Itinerariul poate varia din cauza condițiilor meteorologice sau ale mării.", uk: "Причал Kabataş → Палац Dolmabahçe → Палац Çırağan → Мечеть Ortaköy → Міст Bosphorus → Bebek → Фортеця Rumeli → Міст FSM → Палац Beylerbeyi → Üsküdar → Дівоча вежа (видно здалеку) → Причал Kabataş. Маршрут наведено для довідки. Програма може змінюватися залежно від погоди або морських умов.", ja: "Kabataş桟橋 → Dolmabahçe宮殿 → Çırağan宮殿 → Ortaköyモスク → Bosphorus大橋 → Bebek → Rumeli要塞 → FSM大橋 → Beylerbeyi宮殿 → Üsküdar → 乙女の塔（遠景） → Kabataş桟橋。このルートは参考です。天候や海況により変更となる場合がございます。", ko: "Kabataş 선착장 → Dolmabahçe 궁전 → Çırağan 궁전 → Ortaköy 모스크 → Bosphorus 다리 → Bebek → Rumeli 요새 → FSM 다리 → Beylerbeyi 궁전 → Üsküdar → 소녀의 탑 (원거리에서 관람) → Kabataş 선착장. 경로는 참고용입니다. 일정은 날씨나 해상 상태에 따라 변경될 수 있습니다.", hi: "Kabataş घाट → Dolmabahçe पैलेस → Çırağan पैलेस → Ortaköy मस्जिद → Bosphorus ब्रिज → Bebek → Rumeli किला → FSM ब्रिज → Beylerbeyi पैलेस → Üsküdar → मेडेन टॉवर (दूर से दिखाई देता है) → Kabataş घाट। मार्ग केवल संदर्भ के लिए है। मौसम या समुद्र की स्थिति के कारण यात्रा कार्यक्रम भिन्न हो सकता है।", ur: "Kabataş گھاٹ ← Dolmabahçe محل ← Çırağan محل ← Ortaköy مسجد ← Bosphorus پل ← Bebek ← Rumeli قلعہ ← FSM پل ← Beylerbeyi محل ← Üsküdar ← Maiden's ٹاور (فاصلے سے نظر آتا ہے) ← Kabataş گھاٹ۔ راستہ صرف حوالے کے لیے ہے۔ موسم یا سمندری حالات کی وجہ سے سفر نامہ تبدیل ہو سکتا ہے۔"
  },
  "faq.q5": { en: "How close are the tables to the stage?", tr: "Masalar sahneye ne kadar yakın?", de: "Wie nah sind die Tische zur Bühne?", es: "¿Qué tan cerca están las mesas del escenario?", ru: "Как близко столы к сцене?", ar: "ما مدى قرب الطاولات من المسرح؟", fa: "میزها چقدر به صحنه نزدیک‌اند؟", fr: "À quelle distance les tables sont-elles de la scène ?", it: "Quanto sono vicini i tavoli al palco?", zh: "餐桌离舞台多近?", id: "Seberapa dekat meja dengan panggung?", ms: "Sejauh mana meja berhampiran pentas?", pl: "Jak blisko sceny znajdują się stoły?", bg: "Колко близо са масите до сцената?", ro: "Cât de aproape sunt mesele de scenă?" },
  "faq.a5": {
    en: "Our boat's dining hall has a panoramic Bosphorus view. No matter where you sit, you can enjoy the full view. The stage is also designed to be visible from every seat, so the shows can be watched easily. (VIP menus are seated closer to the stage.)",
    tr: "Tekne salonumuzda panoramik Boğaz manzarası vardır. Nerede oturduğunuzdan bağımsız tüm manzaranın keyfini çıkarabilirsiniz. Aynı zamanda sahne de her yerden görülecek şekildedir, şovlar rahatlıkla izlenebilir. (VIP menüler sahneye daha yakın konumlandırılır.)",
    de: "Unser Bootssalon bietet einen Panoramablick auf den Bosporus. Egal wo Sie sitzen, Sie genießen die volle Aussicht. Die Bühne ist so gestaltet, dass sie von überall aus zu sehen ist, und die Shows sind bequem zu verfolgen. (VIP-Menüs werden näher zur Bühne platziert.)",
    es: "El salón de nuestro barco tiene vistas panorámicas al Bósforo. Donde sea que te sientes, puedes disfrutar de toda la vista. El escenario también está diseñado para ser visible desde todas partes, y los shows se pueden ver cómodamente. (Los menús VIP se colocan más cerca del escenario.)",
    ru: "В салоне нашей лодки — панорамный вид на Босфор. Где бы вы ни сидели, вы сможете наслаждаться всей панорамой. Сцена также расположена так, чтобы её было видно отовсюду, и шоу легко смотреть. (VIP-меню размещаются ближе к сцене.)",
    ar: "تتميز صالة قاربنا بإطلالة بانورامية على مضيق البوسفور. أينما جلست، يمكنك الاستمتاع بالمنظر بالكامل. كما أن المسرح مصمم ليكون مرئيًا من كل مكان، ويمكن مشاهدة العروض بسهولة. (يتم وضع قوائم VIP أقرب إلى المسرح.)",
    fa: "سالن غذاخوری کشتی ما نمای پانورامایی از بسفر دارد. هر کجا که بنشینید، می‌توانید از کل نما لذت ببرید. صحنه نیز طوری طراحی شده که از هر جایگاه دیده شود، تا نمایش‌ها به‌راحتی قابل تماشا باشند. (منوهای VIP نزدیک‌تر به صحنه جایگزین می‌شوند.)", fr: "La salle à manger de notre bateau offre une vue panoramique sur le Bosphore. Où que vous soyez assis, vous profitez de la vue complète. La scène est également conçue pour être visible de tous les sièges, afin que les spectacles soient faciles à suivre. (Les menus VIP sont placés plus près de la scène.)", it: "La sala da pranzo della nostra barca ha una vista panoramica sul Bosforo. Ovunque si sieda, può godere della vista completa. Anche il palco è progettato per essere visibile da ogni posto, quindi gli spettacoli possono essere seguiti facilmente. (I menu VIP sono posizionati più vicino al palco.)", zh: "我们船上的用餐大厅拥有博斯普鲁斯全景视野。无论坐在哪里,都能尽享全景。舞台也设计为从每个座位都能看到,表演轻松可观赏。(VIP菜单座席更靠近舞台。)", id: "Aula makan kapal kami memiliki pemandangan Bosphorus panorama. Tidak peduli di mana Anda duduk, Anda dapat menikmati pemandangan penuh. Panggung juga dirancang agar terlihat dari setiap kursi, sehingga pertunjukan dapat ditonton dengan mudah. (Menu VIP duduk lebih dekat ke panggung.)", ms: "Dewan makan bot kami mempunyai pemandangan panoramik Bosphorus. Tidak kira di mana anda duduk, anda boleh menikmati pemandangan penuh. Pentas juga direka untuk kelihatan dari setiap tempat duduk, jadi persembahan boleh ditonton dengan mudah. (Menu VIP diletakkan lebih dekat ke pentas.)", pl: "Sala jadalna naszej łodzi ma panoramiczny widok na Bosfor. Niezależnie od miejsca można cieszyć się pełnym widokiem. Scena jest również zaprojektowana tak, aby była widoczna z każdego miejsca, więc pokazy można łatwo oglądać. (Menu VIP mają miejsca bliżej sceny.)", bg: "Залата за хранене на лодката ни има панорамна гледка към Босфора. Независимо къде седнете, можете да се насладите на пълната гледка. Сцената също е проектирана да бъде видима от всяко място, така че шоутата могат да се гледат лесно. (VIP менютата са настанени по-близо до сцената.)", ro: "Sala de masă a vaporului nostru are o vedere panoramică asupra Bosforului. Indiferent unde vă așezați, vă puteți bucura de întreaga priveliște. Scena este proiectată și ea să fie vizibilă de la fiecare loc, astfel încât spectacolele pot fi urmărite cu ușurință. (Meniurile VIP sunt așezate mai aproape de scenă.)", uk: "Обідня зала нашого корабля має панорамний вид на Bosphorus. Незалежно від того, де Ви сидите, Ви зможете насолодитися повним виглядом. Сцена також спроектована так, щоб бути видимою з кожного місця, тому шоу можна легко дивитися. (Гості з VIP меню розміщуються ближче до сцени.)", ja: "当船のダイニングホールはBosphorusのパノラマビューをご覧いただけます。どのお席からでも全景をお楽しみいただけます。ステージもすべてのお席から見えるように設計されており、ショーを快適にご鑑賞いただけます。（VIPメニューのお客様はステージに近いお席となります。）", ko: "저희 보트의 식당은 Bosphorus의 파노라마 뷰를 자랑합니다. 어느 자리에 앉으시든 전체 경관을 즐기실 수 있습니다. 무대도 모든 좌석에서 잘 보이도록 설계되어 있어 쇼를 편하게 관람하실 수 있습니다. (VIP 메뉴는 무대에 더 가까운 좌석에 배정됩니다.)", hi: "हमारी नाव के डाइनिंग हॉल में Bosphorus का विहंगम दृश्य है। आप जहाँ भी बैठें, पूरे दृश्य का आनंद ले सकते हैं। मंच को भी हर सीट से दिखाई देने के लिए डिज़ाइन किया गया है, इसलिए शो आसानी से देखे जा सकते हैं। (VIP मेनू को मंच के करीब बैठाया जाता है।)", ur: "ہماری کشتی کے کھانے کے ہال میں Bosphorus کا شاندار نظارہ ہے۔ آپ جہاں بھی بیٹھیں، مکمل نظارہ لطف اندوز ہو سکتے ہیں۔ اسٹیج کو بھی ہر نشست سے نظر آنے کے لیے ڈیزائن کیا گیا ہے، تاکہ شوز آسانی سے دیکھے جا سکیں۔ (VIP مینوز کو اسٹیج کے قریب بٹھایا جاتا ہے۔)"
  },
  "faq.q6": { en: "What kind of shows and entertainment are there?", tr: "Ne tür şovlar ve eğlence var?", de: "Welche Shows und Unterhaltung gibt es?", es: "¿Qué tipo de shows y entretenimiento hay?", ru: "Какие шоу и развлечения?", ar: "ما نوع العروض والترفيه؟", fa: "چه نوع نمایش‌ها و سرگرمی‌ای وجود دارد؟", fr: "Quels spectacles et divertissements sont proposés ?", it: "Che tipo di spettacoli e intrattenimento ci sono?", zh: "有什么样的表演与娱乐?", id: "Pertunjukan dan hiburan seperti apa yang ada?", ms: "Apakah jenis persembahan dan hiburan yang ada?", pl: "Jakie pokazy i rozrywki są dostępne?", bg: "Какви са шоутата и забавлението?", ro: "Ce fel de spectacole și divertisment există?" },
  "faq.a6": {
    en: "The cruise features live singer performances, a traditional Turkish Night show with folk dances, belly dance, and DJ music. Entertainment continues uninterrupted until the end of the cruise.",
    tr: "Turda canlı şarkıcı performansları, geleneksel halk danslarıyla Türk Gecesi şovu, oryantal dans ve DJ müziği bulunur. Eğlence tur bitimine kadar kesintisiz devam eder.",
    de: "Live-Sänger, traditionelle Türkische Nacht mit Volkstänzen, Bauchtanz und DJ-Musik. Unterhaltung bis zum Ende der Tour ohne Unterbrechung.",
    es: "El crucero incluye cantante en vivo, show nocturno turco con danzas folclóricas, danza del vientre y música DJ. El entretenimiento continúa sin interrupción hasta el final del crucero.",
    ru: "На круизе — живой певец, традиционное турецкое шоу с народными танцами, танец живота и DJ-музыка. Развлечения продолжаются без перерыва до конца круиза.",
    ar: "تتميز الرحلة بعروض مغني حي، عرض الليلة التركية التقليدية مع الرقصات الشعبية، رقص شرقي وموسيقى DJ. يستمر الترفيه دون انقطاع حتى نهاية الرحلة.",
    fa: "تور شامل اجرای خواننده زنده، نمایش سنتی شب ترکی با رقص‌های محلی، رقص شرقی و موسیقی دی‌جی است. سرگرمی تا پایان تور بدون وقفه ادامه دارد.", fr: "La croisière propose des performances de chanteur en direct, une soirée turque traditionnelle avec danses folkloriques, danse orientale et musique DJ. Le divertissement se poursuit sans interruption jusqu'à la fin de la croisière.", it: "La crociera propone esibizioni di cantanti dal vivo, uno spettacolo tradizionale della Serata Turca con danze folkloristiche, danza orientale e musica DJ. L'intrattenimento continua senza interruzioni fino alla fine della crociera.", zh: "游船包括现场歌手表演、含民族舞、肚皮舞与DJ音乐的传统土耳其之夜表演。娱乐节目不间断持续至游船结束。", id: "Pelayaran menampilkan pertunjukan penyanyi langsung, pertunjukan Malam Turki tradisional dengan tarian rakyat, tari oriental, dan musik DJ. Hiburan berlanjut tanpa henti hingga akhir pelayaran.", ms: "Pelayaran menampilkan persembahan penyanyi langsung, persembahan Malam Turki tradisional dengan tarian rakyat, tarian oryantal dan muzik DJ. Hiburan berterusan tanpa henti sehingga akhir pelayaran.", pl: "Rejs oferuje występy śpiewaka na żywo, tradycyjny turecki pokaz nocny z tańcami ludowymi, tańcem brzucha i muzyką DJ-a. Rozrywka trwa nieprzerwanie do końca rejsu.", bg: "Круизът включва изпълнения на певец на живо, традиционна турска нощна програма с фолклорни танци, танц на корема и DJ музика. Забавлението продължава без прекъсване до края на круиза.", ro: "Croaziera oferă reprezentații live de cântăreț, un spectacol tradițional de Seară Turcească cu dansuri populare, dans oriental și muzică DJ. Divertismentul continuă neîntrerupt până la sfârșitul croazierei.", uk: "Круїз включає виступи живих вокалістів, традиційне шоу Турецької ночі з народними танцями, танець живота та музику від діджея. Розважальна програма триває безперервно до завершення круїзу.", ja: "クルーズでは、生歌手によるパフォーマンス、民族舞踊を含む伝統的なトルコナイトショー、ベリーダンス、DJミュージックをお楽しみいただけます。エンターテイメントはクルーズ終了まで途切れることなく続きます。", ko: "크루즈에서는 라이브 가수 공연, 민속 춤과 벨리댄스가 포함된 전통 터키의 밤 쇼, 그리고 DJ 음악을 선보입니다. 엔터테인먼트는 크루즈가 끝날 때까지 중단 없이 계속됩니다.", hi: "क्रूज़ में लाइव गायक प्रस्तुतियाँ, लोक नृत्यों के साथ पारंपरिक तुर्की नाइट शो, बेली डांस, और DJ संगीत शामिल हैं। मनोरंजन क्रूज़ के अंत तक निरंतर जारी रहता है।", ur: "کروز میں لائیو گلوکار کی پرفارمنس، لوک رقص کے ساتھ روایتی Turkish Night شو، بیلی ڈانس، اور DJ موسیقی شامل ہیں۔ تفریحی پروگرام کروز کے اختتام تک بلا تعطل جاری رہتا ہے۔"
  },
  "faq.q7": { en: "Can I book for tonight?", tr: "Bu gece için rezervasyon yapabilir miyim?", de: "Kann ich für heute Abend buchen?", es: "¿Puedo reservar para esta noche?", ru: "Можно забронировать на сегодня?", ar: "هل يمكنني الحجز لهذه الليلة؟", fa: "آیا می‌توانم برای امشب رزرو کنم؟", fr: "Puis-je réserver pour ce soir ?", it: "Posso prenotare per stasera?", zh: "可以预订今晚吗?", id: "Bisakah saya memesan untuk malam ini?", ms: "Bolehkah saya menempah untuk malam ini?", pl: "Czy mogę zarezerwować na dziś?", bg: "Мога ли да резервирам за тази вечер?", ro: "Pot rezerva pentru seara aceasta?" },
  "faq.a7": {
    en: "Yes! Same-day bookings are available until 19:30 (1 hour before departure). Just message us.",
    tr: "Evet! Aynı gün rezervasyonlar 19:30'ye kadar (kalkıştan 1 saat önce) mümkündür. Bize yazın.",
    de: "Ja! Buchung am selben Tag bis 19:30 möglich (1 Std. vor Abfahrt). Schreiben Sie uns einfach.",
    es: "¡Sí! Las reservas del mismo día están disponibles hasta las 19:30. Solo escríbenos.",
    ru: "Да! Бронирование в тот же день доступно до 19:30. Просто напишите нам.",
    ar: "نعم! الحجوزات في نفس اليوم متاحة حتى الساعة 19:30. فقط راسلنا.",
    fa: "بله! رزرو در همان روز تا ساعت ۱۹:۳۰ (یک ساعت پیش از حرکت) امکان‌پذیر است. فقط به ما پیام دهید.", fr: "Oui ! Les réservations du jour même sont possibles jusqu'à 19h30 (1 heure avant le départ). Écrivez-nous simplement.", it: "Sì! Le prenotazioni in giornata sono disponibili fino alle 19:30 (1 ora prima della partenza). Ci scriva semplicemente.", zh: "可以!当日预订可至19:30(启航前1小时)。直接发信息给我们即可。", id: "Ya! Pemesanan hari yang sama tersedia hingga pukul 19:30 (1 jam sebelum keberangkatan). Cukup kirim pesan kepada kami.", ms: "Ya! Tempahan hari sama tersedia sehingga 19:30 (1 jam sebelum bertolak). Cuma hantar mesej kepada kami.", pl: "Tak! Rezerwacje tego samego dnia są dostępne do 19:30 (1 godzina przed wypłynięciem). Wystarczy do nas napisać.", bg: "Да! Резервации за същия ден са възможни до 19:30 ч. (1 час преди отплаването). Просто ни пишете.", ro: "Da! Rezervările în aceeași zi sunt disponibile până la 19:30 (cu 1 oră înainte de plecare). Scrieți-ne.", uk: "Так! Бронювання в день відправлення можливе до 19:30 (за 1 годину до відплиття). Просто напишіть нам.", ja: "はい、可能です。当日予約は19:30(出航の1時間前)まで承っております。お気軽にメッセージをお送りください。", ko: "네! 당일 예약은 19:30(출발 1시간 전)까지 가능합니다. 저희에게 메시지를 보내주세요.", hi: "हाँ! उसी दिन की बुकिंग 19:30 तक (प्रस्थान से 1 घंटे पहले तक) उपलब्ध है। बस हमें संदेश भेजें।", ur: "جی ہاں! اسی دن کی بکنگ 19:30 تک (روانگی سے 1 گھنٹہ پہلے) دستیاب ہے۔ بس ہمیں پیغام بھیجیں۔"
  },
  "faq.q8": { en: "How do I pay?", tr: "Nasıl ödeme yapacağım?", de: "Wie wird bezahlt?", es: "¿Cómo pago?", ru: "Как оплатить?", ar: "كيف أدفع؟", fa: "چگونه پرداخت کنم؟", fr: "Comment payer ?", it: "Come si paga?", zh: "如何付款?", id: "Bagaimana cara membayar?", ms: "Bagaimana saya membayar?", pl: "Jak płacę?", bg: "Как да платя?", ro: "Cum plătesc?" },
  "faq.a8": {
    en: "No prepayment is required. You pay directly on the boat. We accept cash (EUR, TRY, USD) and credit cards.",
    tr: "Ön ödeme gerekmez. Ödemenizi doğrudan teknede yaparsınız. Nakit (EUR, TRY, USD) ve kredi kartı kabul ediyoruz.",
    de: "Keine Vorauszahlung nötig. Zahlung direkt an Bord. Bar (EUR, TRY, USD) und Kreditkarte akzeptiert.",
    es: "No se requiere prepago. Pagas directamente en el barco. Aceptamos efectivo (EUR, TRY, USD) y tarjetas.",
    ru: "Предоплата не требуется. Вы платите на борту. Принимаем наличные (EUR, TRY, USD) и карты.",
    ar: "لا يلزم الدفع المسبق. تدفع مباشرة على القارب. نقبل النقد (يورو، ليرة، دولار) وبطاقات الائتمان.",
    fa: "نیازی به پیش‌پرداخت نیست. مستقیماً روی کشتی پرداخت می‌کنید. نقدی (یورو، لیر، دلار) و کارت اعتباری می‌پذیریم.", fr: "Aucun prépaiement n'est requis. Vous payez directement à bord. Nous acceptons les espèces (EUR, TRY, USD) et les cartes bancaires.", it: "Non è richiesto alcun anticipo. Paga direttamente a bordo. Accettiamo contanti (EUR, TRY, USD) e carte di credito.", zh: "无需预付。直接在船上付款。我们接受现金(欧元、土耳其里拉、美元)和信用卡。", id: "Tidak ada pembayaran di muka yang diperlukan. Anda membayar langsung di kapal. Kami menerima tunai (EUR, TRY, USD) dan kartu kredit.", ms: "Tiada bayaran pendahuluan diperlukan. Anda membayar terus di atas bot. Kami menerima tunai (EUR, TRY, USD) dan kad kredit.", pl: "Przedpłata nie jest wymagana. Płacą Państwo bezpośrednio na pokładzie. Akceptujemy gotówkę (EUR, TRY, USD) i karty kredytowe.", bg: "Не се изисква предплащане. Плащате директно на борда. Приемаме пари в брой (EUR, TRY, USD) и кредитни карти.", ro: "Nu este necesară plata în avans. Plătiți direct pe vapor. Acceptăm numerar (EUR, TRY, USD) și carduri de credit.", uk: "Передоплата не потрібна. Ви оплачуєте безпосередньо на човні. Приймаємо готівку (EUR, TRY, USD) та кредитні картки.", ja: "事前のお支払いは不要です。船上で直接お支払いいただけます。現金(EUR、TRY、USD)およびクレジットカードをご利用いただけます。", ko: "선불 결제는 필요하지 않습니다. 보트에서 직접 결제하시면 됩니다. 현금(EUR, TRY, USD)과 신용카드를 받습니다.", hi: "कोई अग्रिम भुगतान आवश्यक नहीं है। आप सीधे नाव पर भुगतान करते हैं। हम नकद (EUR, TRY, USD) और क्रेडिट कार्ड स्वीकार करते हैं।", ur: "پیشگی ادائیگی کی ضرورت نہیں۔ آپ براہ راست کشتی پر ادائیگی کریں۔ ہم کیش (EUR, TRY, USD) اور کریڈٹ کارڈز قبول کرتے ہیں۔"
  },
  "faq.q9": { en: "Is hotel transfer available?", tr: "Otel transferi var mı?", de: "Gibt es einen Hoteltransfer?", es: "¿Hay traslado al hotel?", ru: "Есть ли трансфер из отеля?", ar: "هل يتوفر نقل من الفندق؟", fa: "آیا ترانسفر هتل در دسترس است؟", fr: "Le transfert depuis l'hôtel est-il disponible ?", it: "È disponibile il transfer dall'hotel?", zh: "有酒店接送吗?", id: "Apakah tersedia antar-jemput hotel?", ms: "Adakah pemindahan hotel tersedia?", pl: "Czy transfer z hotelu jest dostępny?", bg: "Има ли хотелски трансфер?", ro: "Transferul de la hotel este disponibil?" },
  "faq.a9": {
    en: "Yes! Hotel transfer is available for +€{p.transfer} per person, including pickup and drop-off. Service areas: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy and Beyoğlu.",
    tr: "Evet! Otel transferi kişi başı +€{p.transfer} ile mümkündür. Alım ve bırakım dahildir. Hizmet bölgeleri: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy ve Beyoğlu.",
    de: "Ja! Hoteltransfer für +€{p.transfer} pro Person, inkl. Abholung und Rückfahrt. Servicegebiete: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy und Beyoğlu.",
    es: "¡Sí! El traslado al hotel está disponible por +€{p.transfer} por persona, incluyendo recogida y devolución. Zonas de servicio: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy y Beyoğlu.",
    ru: "Да! Трансфер из отеля доступен за +€{p.transfer} с человека, включая подачу и возврат. Зоны обслуживания: Бешикташ, Сютлюдже, Сиркеджи, Топкапы, Таксим, Эминёню, Кягытхане, Фатих, Лалели, Султанахмет, Ортакёй и Бейоглу.",
    ar: "نعم! خدمة النقل من الفندق متاحة مقابل +€{p.transfer} للشخص، شاملة الاستلام والتوصيل. مناطق الخدمة: بشكتاش، سوتلوجه، سيركجي، طوبكابي، تقسيم، إمينونو، كاغيتهانه، فاتح، لاليلي، السلطان أحمد، أورتاكوي وبيوغلو.",
    fa: "بله! ترانسفر هتل با +€{p.transfer} به ازای هر نفر شامل رفت و برگشت در دسترس است. مناطق سرویس: بشیکتاش، سوتلوجه، سیرکجی، توپ‌کاپی، تکسیم، اِمینونو، کاغیت‌هانه، فاتح، لَلِه‌لی، سلطان‌احمد، اورتاکوی و بی‌اوغلو.", fr: "Oui ! Le transfert depuis l'hôtel est disponible pour +€{p.transfer} par personne, incluant la prise en charge et la dépose. Zones desservies : Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy et Beyoğlu.", it: "Sì! Il transfer dall'hotel è disponibile per +€{p.transfer} a persona, inclusi prelievo e riconsegna. Aree di servizio: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy e Beyoğlu.", zh: "有!酒店接送为+€{p.transfer}／人,含接与送。服务区域:贝西克塔什、苏特卢杰、锡尔凯吉、托普卡珀、塔克西姆、埃米诺努、卡厄特哈内、法蒂赫、拉莱利、苏丹艾哈迈德、奥尔塔科伊与贝伊奥卢。", id: "Ya! Antar-jemput hotel tersedia dengan +€{p.transfer} per orang, termasuk penjemputan dan pengantaran. Area layanan: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu.", ms: "Ya! Pemindahan hotel tersedia untuk +€{p.transfer} setiap orang, termasuk ambil dan hantar. Kawasan perkhidmatan: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy dan Beyoğlu.", pl: "Tak! Transfer z hotelu jest dostępny za +€{p.transfer}/osobę, w tym odbiór i odwiezienie. Obszary obsługi: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy i Beyoğlu.", bg: "Да! Хотелски трансфер е наличен за +€{p.transfer} на човек, включително вземане и връщане. Зони на обслужване: Бешикташ, Сютлюдже, Сиркеджи, Топкапъ, Таксим, Еминьоню, Кааатхане, Фатих, Лалели, Султанахмет, Ортакьой и Бейоглу.", ro: "Da! Transferul de la hotel este disponibil pentru +€{p.transfer} pe persoană, inclusiv preluare și ducere. Zone deservite: Beșiktaș, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy și Beyoğlu.", uk: "Так! Трансфер з готелю доступний за +€{p.transfer} з особи, включаючи доставку туди й назад. Зони обслуговування: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy та Beyoğlu.", ja: "はい、ございます。ホテル送迎サービスは、お一人様+€{p.transfer}で、お迎えとお送りを含みます。サービスエリア:ベシクタシュ、スュトリュジェ、シルケジ、トプカプ、タクシム、エミノニュ、カーウトハーネ、ファティ、ラレリ、スルタンアフメット、オルタキョイ、ベイオウル。", ko: "네! 호텔 픽업 및 드롭오프를 포함하여 1인당 +€{p.transfer}로 호텔 이동 서비스를 이용하실 수 있습니다. 서비스 지역: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy 및 Beyoğlu입니다.", hi: "हाँ! होटल ट्रांसफर +€{p.transfer} प्रति व्यक्ति पर उपलब्ध है, जिसमें पिकअप और ड्रॉप-ऑफ शामिल है। सेवा क्षेत्र: Beşiktaş, Sütlüce, Sirkeci, Topkapı, Taksim, Eminönü, Kağıthane, Fatih, Laleli, Sultanahmet, Ortaköy और Beyoğlu।", ur: "جی ہاں! ہوٹل ٹرانسفر +€{p.transfer} فی شخص دستیاب ہے، بشمول پک اپ اور ڈراپ آف۔ سروس علاقے: Beşiktaş، Sütlüce، Sirkeci، Topkapı، Taksim، Eminönü، Kağıthane، Fatih، Laleli، Sultanahmet، Ortaköy اور Beyoğlu۔"
  },
  "faq.q10": { en: "Can I cancel or change my reservation?", tr: "Rezervasyonumu iptal edebilir veya değiştirebilir miyim?", de: "Kann ich stornieren oder ändern?", es: "¿Puedo cancelar o cambiar mi reserva?", ru: "Могу ли я отменить бронирование?", ar: "هل يمكنني إلغاء أو تغيير حجزي؟", fa: "آیا می‌توانم رزرو خود را لغو یا تغییر دهم؟", fr: "Puis-je annuler ou modifier ma réservation ?", it: "Posso annullare o modificare la mia prenotazione?", zh: "可以取消或更改预订吗?", id: "Bisakah saya membatalkan atau mengubah reservasi saya?", ms: "Bolehkah saya membatalkan atau mengubah tempahan saya?", pl: "Czy mogę anulować lub zmienić rezerwację?", bg: "Мога ли да отменя или променя резервацията си?", ro: "Pot anula sau modifica rezervarea mea?" },
  "faq.a10": {
    en: "Yes. Free cancellation up to 2 hours before the cruise (until 19:00). Since there's no prepayment, the process is hassle-free.",
    tr: "Evet. Turdan 2 saat öncesine kadar (19:00) ücretsiz iptal mümkündür. Ön ödeme olmadığı için süreç zahmetsizdir.",
    de: "Ja. Kostenlose Stornierung bis 2 Std. vorher (bis 19:00). Ohne Vorauszahlung ganz unkompliziert.",
    es: "Sí. Cancelación gratuita hasta 2 horas antes del crucero (hasta las 19:00). Sin prepago, el proceso es sencillo.",
    ru: "Да. Бесплатная отмена за 2 часа до круиза (до 19:00). Поскольку предоплаты нет, процесс простой.",
    ar: "نعم. إلغاء مجاني حتى ساعتين قبل الرحلة (حتى 19:00). بما أنه لا يوجد دفع مسبق، فالعملية سهلة.",
    fa: "بله. لغو رایگان تا ۲ ساعت پیش از تور (تا ساعت ۱۹:۰۰). چون پیش‌پرداختی نیست، فرایند کاملاً بی‌دردسر است.", fr: "Oui. Annulation gratuite jusqu'à 2 heures avant la croisière (jusqu'à 19h00). Comme il n'y a pas de prépaiement, la démarche est sans souci.", it: "Sì. Cancellazione gratuita fino a 2 ore prima della crociera (fino alle 19:00). Poiché non c'è anticipo, il processo è senza complicazioni.", zh: "可以。开船前2小时(至19:00)前免费取消。由于无需预付,流程毫无麻烦。", id: "Ya. Pembatalan gratis hingga 2 jam sebelum pelayaran (hingga pukul 19:00). Karena tidak ada pembayaran di muka, prosesnya bebas repot.", ms: "Ya. Pembatalan percuma sehingga 2 jam sebelum pelayaran (sehingga 19:00). Memandangkan tiada bayaran pendahuluan, prosesnya bebas kerumitan.", pl: "Tak. Bezpłatna anulacja do 2 godzin przed rejsem (do 19:00). Ponieważ nie ma przedpłaty, proces jest bezproblemowy.", bg: "Да. Безплатна отмяна до 2 часа преди круиза (до 19:00 ч.). Тъй като няма предплащане, процесът е безпроблемен.", ro: "Da. Anulare gratuită cu până la 2 ore înainte de croazieră (până la 19:00). Deoarece nu există plată în avans, procesul este fără complicații.", uk: "Так. Безкоштовне скасування до 2 годин до початку круїзу (до 19:00). Оскільки передоплата не потрібна, процес проходить без зайвих клопотів.", ja: "はい、可能です。クルーズ出航の2時間前(19:00まで)まで無料キャンセルを承っております。事前のお支払いがないため、手続きも簡単です。", ko: "네. 크루즈 출발 2시간 전(19:00까지) 무료 취소가 가능합니다. 선불 결제가 없기 때문에 절차가 간편합니다.", hi: "हाँ। क्रूज़ से 2 घंटे पहले तक (19:00 तक) मुफ्त रद्दीकरण। चूँकि कोई अग्रिम भुगतान नहीं है, इसलिए प्रक्रिया परेशानी मुक्त है।", ur: "جی ہاں۔ کروز سے 2 گھنٹے پہلے تک (19:00 تک) مفت منسوخی۔ چونکہ کوئی پیشگی ادائیگی نہیں ہے، اس لیے یہ عمل آسان ہے۔"
  },
  "faq.q11": { en: "Where is the exact meeting point?", tr: "Tam buluşma noktası neresi?", de: "Wo ist der Treffpunkt?", es: "¿Dónde es el punto de encuentro exacto?", ru: "Где точное место встречи?", ar: "أين نقطة الالتقاء بالضبط؟", fa: "نقطه دقیق ملاقات کجاست؟", fr: "Où se trouve exactement le point de rendez-vous ?", it: "Dov'è l'esatto punto d'incontro?", zh: "确切集合地点在哪里?", id: "Di mana titik pertemuan yang tepat?", ms: "Di manakah titik pertemuan yang tepat?", pl: "Gdzie dokładnie jest miejsce spotkania?", bg: "Къде е точното място за среща?", ro: "Unde este punctul exact de întâlnire?" },
  "faq.a11": {
    en: "After your reservation is confirmed, we'll send you the exact location with a Google Maps pin on WhatsApp.",
    tr: "Rezervasyonunuz onaylandıktan sonra WhatsApp üzerinden Google Maps pini ile tam konumu göndereceğiz.",
    de: "Nach Bestätigung senden wir Ihnen den Standort mit Google Maps Pin per WhatsApp.",
    es: "Después de confirmar tu reserva, te enviaremos la ubicación exacta con un pin de Google Maps por WhatsApp.",
    ru: "После подтверждения бронирования мы отправим вам точное местоположение с пином Google Maps в WhatsApp.",
    ar: "بعد تأكيد حجزك، سنرسل لك الموقع الدقيق مع دبوس خرائط جوجل عبر واتساب.",
    fa: "پس از تأیید رزرو شما، موقعیت دقیق را با پین گوگل مپس از طریق واتس‌اپ برایتان ارسال می‌کنیم.", fr: "Une fois votre réservation confirmée, nous vous enverrons la localisation exacte avec une épingle Google Maps sur WhatsApp.", it: "Dopo la conferma della prenotazione, Le invieremo la posizione esatta con un pin di Google Maps su WhatsApp.", zh: "预订确认后,我们会通过WhatsApp发送含谷歌地图定位的确切位置。", id: "Setelah reservasi Anda dikonfirmasi, kami akan mengirimkan lokasi tepat dengan pin Google Maps via WhatsApp.", ms: "Selepas tempahan anda disahkan, kami akan hantar kepada anda lokasi tepat dengan pin Google Maps di WhatsApp.", pl: "Po potwierdzeniu rezerwacji wyślemy Państwu dokładną lokalizację z pinezką Google Maps na WhatsApp.", bg: "След като резервацията Ви бъде потвърдена, ще Ви изпратим точното място с Google Maps пин в WhatsApp.", ro: "După ce rezervarea dumneavoastră este confirmată, vă trimitem locația exactă cu un pin Google Maps pe WhatsApp.", uk: "Після підтвердження Вашого бронювання ми надішлемо Вам точне місце розташування з міткою Google Maps через WhatsApp.", ja: "ご予約確定後、WhatsAppにてGoogleマップのピンで正確な場所をお送りいたします。", ko: "예약이 확정된 후 WhatsApp으로 Google Maps 핀과 함께 정확한 위치를 보내드립니다.", hi: "आपके आरक्षण की पुष्टि के बाद, हम आपको WhatsApp पर Google Maps पिन के साथ सटीक स्थान भेजेंगे।", ur: "آپ کی ریزرویشن کی تصدیق کے بعد، ہم آپ کو WhatsApp پر Google Maps پن کے ساتھ صحیح مقام بھیج دیں گے۔"
  },
  "faq.q12": {
    en: "Is Bosphorus Night dinner cruise worth it?",
    tr: "Bosphorus Night akşam yemekli tekne turu paranıza değer mi?",
    de: "Lohnt sich die Bosphorus Night Dinner-Kreuzfahrt?",
    es: "¿Vale la pena el crucero con cena de Bosphorus Night?",
    ru: "Стоит ли круиз с ужином Bosphorus Night?",
    ar: "هل تستحق رحلة عشاء بوسفور نايت تكلفتها؟",
    fa: "آیا تور شام بسفر نایت ارزش آن را دارد؟",
    fr: "La croisière dîner Bosphorus Night vaut-elle la peine ?",
    it: "Vale la pena la crociera con cena Bosphorus Night?",
    zh: "博斯普鲁斯之夜晚餐游船值得吗?",
    id: "Apakah pelayaran makan malam Bosphorus Night layak?",
    ms: "Adakah pelayaran makan malam Bosphorus Night berbaloi?",
    pl: "Czy rejs z kolacją Bosphorus Night jest wart swojej ceny?",
    bg: "Струва ли си круизът с вечеря Bosphorus Night?",
    ro: "Merită croaziera cu cină Bosphorus Night?", uk: "Чи варта того вечеря-круїз Bosphorus Night?", ja: "Bosphorus Nightディナークルーズは価値がありますか?", ko: "Bosphorus Night 디너 크루즈는 가치가 있나요?", hi: "क्या Bosphorus Night डिनर क्रूज़ इसके लायक है?", ur: "کیا Bosphorus Night ڈنر کروز قابل قدر ہے؟"
  },
  "faq.a12": {
    en: "Bosphorus Night offers strong value at €24.30/person: 3-hour cruise with 10 mezes, main course, and ice cream cake; unlimited soft drinks; live music, DJ, 5 regional folk dances, belly dance show, and the Mevlana whirling dervish. Panoramic windows reveal the illuminated Bosphorus Bridge and waterfront palaces. 4.8★ from 11,317 reviews.",
    tr: "Bosphorus Night €24.30/kişi tarifesinde güçlü değer sunar: 3 saatlik tur, 10 meze + ana yemek + dondurmalı pasta, sınırsız meşrubat, canlı müzik, DJ, 5 yöre halk oyunu, oryantal şov ve Mevlana semazen. Panoramik camlardan aydınlatılmış Boğaz Köprüsü ve sarayların manzarası. 11.317 yorumdan 4.8★.",
    de: "Bosphorus Night bietet starken Wert ab 24 €/Person: 3-stündige Fahrt mit 10 Mezze, Hauptgang und Eistorte; unbegrenzte alkoholfreie Getränke; Live-Musik, DJ, 5 regionale Volkstänze, Bauchtanz-Show und Mevlana-Derwische. Panoramafenster zeigen die beleuchtete Bosporus-Brücke und Uferpaläste. 4,8★ aus 11.317 Bewertungen.",
    es: "Bosphorus Night ofrece gran valor a 24 €/persona: crucero de 3 horas con 10 mezes, plato principal y tarta helada; refrescos ilimitados; música en vivo, DJ, 5 danzas folclóricas regionales, danza del vientre y derviches Mevlana. Ventanas panorámicas con vista del Puente del Bósforo iluminado y palacios. 4,8★ de 11.317 reseñas.",
    ru: "Bosphorus Night предлагает большую ценность за 24 €/чел.: 3-часовой круиз с 10 мезе, основным блюдом и тортом-мороженым; безлимитные безалкогольные напитки; живая музыка, DJ, 5 региональных народных танцев, танец живота и кружащиеся дервиши Мевланы. Панорамные окна с видом на освещённый Босфорский мост и дворцы. 4,8★ из 11 317 отзывов.",
    ar: "تقدم بوسفور نايت قيمة قوية بسعر 24 يورو/شخص: رحلة 3 ساعات مع 10 مقبلات وطبق رئيسي وكعكة آيس كريم؛ مشروبات غازية غير محدودة؛ موسيقى حية، DJ، 5 رقصات شعبية إقليمية، عرض رقص شرقي ودراويش مولوية. نوافذ بانورامية تكشف جسر البوسفور المضاء والقصور. 4.8★ من 11,317 تقييم.",
    fa: "بسفر نایت با ۲۴ یورو/نفر ارزش قوی ارائه می‌دهد: تور ۳ ساعته با ۱۰ پیش‌غذا، غذای اصلی و کیک بستنی؛ نوشابه نامحدود؛ موسیقی زنده، DJ، ۵ رقص محلی منطقه‌ای، نمایش رقص شرقی و درویش‌های مولانا. پنجره‌های پانورامیک منظره پل بسفر روشن و کاخ‌ها را نمایان می‌کنند. ۴.۸★ از ۱۱٬۳۱۷ نظر.",
    fr: "Bosphorus Night offre une grande valeur à 24 €/personne : croisière de 3 heures avec 10 mezzés, plat principal et gâteau glacé ; boissons non alcoolisées illimitées ; musique live, DJ, 5 danses folkloriques régionales, spectacle de danse orientale et derviches Mevlana. Fenêtres panoramiques sur le pont du Bosphore illuminé et les palais. 4,8★ sur 11 317 avis.",
    it: "Bosphorus Night offre grande valore a 24 €/persona: crociera di 3 ore con 10 meze, piatto principale e torta gelato; bevande analcoliche illimitate; musica dal vivo, DJ, 5 danze folcloristiche regionali, spettacolo di danza del ventre e dervisci Mevlana. Finestre panoramiche con vista sul Ponte del Bosforo illuminato e palazzi. 4,8★ da 11.317 recensioni.",
    zh: "博斯普鲁斯之夜以24欧元/人提供超值体验:3小时游船,含10道开胃菜、主菜和冰淇淋蛋糕;无限畅饮软饮;现场音乐、DJ、5个地区民间舞蹈、肚皮舞表演和梅夫拉那旋转舞。全景窗户展现灯光照耀的博斯普鲁斯大桥和宫殿。11,317条评价获4.8★。",
    id: "Bosphorus Night menawarkan nilai kuat €24.30/orang: pelayaran 3 jam dengan 10 mezes, hidangan utama, dan kue es krim; minuman ringan tak terbatas; musik live, DJ, 5 tarian folklor regional, pertunjukan tari perut, dan derwis berputar Mevlana. Jendela panorama menampilkan Jembatan Bosphorus yang menyala dan istana tepi laut. 4,8★ dari 11.317 ulasan.",
    ms: "Bosphorus Night menawarkan nilai kuat pada €24.30/orang: pelayaran 3 jam dengan 10 mezes, hidangan utama dan kek ais krim; minuman ringan tanpa had; muzik langsung, DJ, 5 tarian rakyat serantau, persembahan tarian perut dan dervis berpusing Mevlana. Tingkap panoramik memaparkan Jambatan Bosphorus yang bercahaya dan istana tepi air. 4,8★ daripada 11,317 ulasan.",
    pl: "Bosphorus Night oferuje wysoką wartość za 24 €/osobę: 3-godzinny rejs z 10 mezze, daniem głównym i tortem lodowym; nielimitowane napoje bezalkoholowe; muzyka na żywo, DJ, 5 regionalnych tańców ludowych, taniec brzucha i wirujący derwisze Mevlany. Panoramiczne okna ukazują podświetlony Most Bosforski i nadbrzeżne pałace. 4,8★ z 11 317 recenzji.",
    bg: "Bosphorus Night предлага силна стойност на 24 €/човек: 3-часов круиз с 10 мезета, основно ястие и сладоледена торта; неограничени безалкохолни напитки; жива музика, DJ, 5 регионални народни танца, ориенталски танц и въртящи се дервиши Мевляна. Панорамни прозорци разкриват осветения Босфорски мост и дворците. 4,8★ от 11 317 отзива.",
    ro: "Bosphorus Night oferă valoare puternică la 24 €/persoană: croazieră de 3 ore cu 10 mezeluri, fel principal și tort înghețată; băuturi răcoritoare nelimitate; muzică live, DJ, 5 dansuri populare regionale, spectacol de dans oriental și dervișii rotitori Mevlana. Ferestre panoramice dezvăluie Podul Bosfor iluminat și palatele. 4,8★ din 11.317 recenzii.", uk: "Bosphorus Night пропонує чудове співвідношення ціни та якості за €24.30/особа: 3-годинний круїз з 10 видами мезе, основною стравою та морозивним тортом; безлімітні безалкогольні напої; жива музика, діджей, 5 регіональних народних танців, шоу танцю живота та кружляння дервішів Мевлана. Панорамні вікна відкривають вид на освітлений Босфорський міст та прибережні палаци. 4.8★ з 11 317 відгуків.", ja: "Bosphorus Nightは€24.30/お一人様で高い価値をご提供いたします:3時間のクルーズで10種類のメゼ、メインコース、アイスケーキ、ソフトドリンク飲み放題、ライブミュージック、DJ、5つの地方民族舞踊、ベリーダンスショー、メヴラーナ旋回舞踊をお楽しみいただけます。パノラマ窓からはライトアップされたボスポラス大橋と水辺の宮殿をご覧いただけます。11,317件のレビューで4.8★の評価をいただいております。", ko: "Bosphorus Night는 €24.30/1인으로 훌륭한 가치를 제공합니다: 10가지 메제, 메인 요리, 아이스크림 케이크가 포함된 3시간 크루즈, 무제한 소프트 드링크, 라이브 음악, DJ, 5개 지역 민속 춤, 벨리댄스 쇼, 그리고 메블라나 회전 데르비시를 즐기실 수 있습니다. 파노라마 창을 통해 조명이 밝힌 Bosphorus 다리와 해안가 궁전들을 감상하실 수 있습니다. 11,317개의 리뷰에서 4.8★을 받았습니다.", hi: "Bosphorus Night €24.30/व्यक्ति पर मजबूत मूल्य प्रदान करता है: 10 मेज़े, मुख्य व्यंजन, और आइसक्रीम केक के साथ 3 घंटे का क्रूज़; असीमित सॉफ्ट ड्रिंक्स; लाइव संगीत, DJ, 5 क्षेत्रीय लोक नृत्य, बेली डांस शो, और मेवलाना व्हर्लिंग दरवेश। पैनोरमिक खिड़कियाँ प्रकाशित Bosphorus ब्रिज और वॉटरफ्रंट महलों को प्रकट करती हैं। 11,317 समीक्षाओं से 4.8★।", ur: "Bosphorus Night €24.30/فی شخص پر بہترین ویلیو پیش کرتا ہے: 3 گھنٹے کا کروز جس میں 10 میزے، مین کورس، اور آئس کریم کیک؛ لامحدود سافٹ ڈرنکس؛ لائیو موسیقی، DJ، 5 علاقائی لوک رقص، بیلی ڈانس شو، اور مولانا وِرلنگ درویش۔ پینورامک کھڑکیوں سے روشن Bosphorus برج اور واٹر فرنٹ محلات نظر آتے ہیں۔ 11,317 جائزوں سے 4.8★۔"
  },
  "faq.q13": {
    en: "Why choose Bosphorus Night?",
    tr: "Neden Bosphorus Night seçilir?",
    de: "Warum Bosphorus Night wählen?",
    es: "¿Por qué elegir Bosphorus Night?",
    ru: "Почему выбрать Bosphorus Night?",
    ar: "لماذا اختيار بوسفور نايت؟",
    fa: "چرا بسفر نایت را انتخاب کنیم؟",
    fr: "Pourquoi choisir Bosphorus Night ?",
    it: "Perché scegliere Bosphorus Night?",
    zh: "为什么选择博斯普鲁斯之夜?",
    id: "Mengapa memilih Bosphorus Night?",
    ms: "Mengapa pilih Bosphorus Night?",
    pl: "Dlaczego wybrać Bosphorus Night?",
    bg: "Защо да изберете Bosphorus Night?",
    ro: "De ce să alegeți Bosphorus Night?", uk: "Чому варто обрати Bosphorus Night?", ja: "なぜBosphorus Nightを選ぶべきですか?", ko: "왜 Bosphorus Night를 선택해야 하나요?", hi: "Bosphorus Night को क्यों चुनें?", ur: "Bosphorus Night کیوں منتخب کریں؟"
  },
  "faq.a13": {
    en: "Five reasons: TÜRSAB license (A-17672), 4.8★ from 11,317 reviews, operating since 2016 (10 years), regular boat maintenance and hygienic service, and customer support in 11 languages. From €24.30/person — pay on boat, no prepayment required.",
    tr: "Beş sebep: TÜRSAB lisansı (A-17672), 11.317 yorumdan 4.8★, 2016'dan beri 10 yıllık operasyon, düzenli tekne bakımı ve hijyenik servis, 11 dilde anlık müşteri desteği. €24.30'dan başlayan fiyat — teknede ödeme, ön ödeme yok.",
    de: "Fünf Gründe: TÜRSAB-Lizenz (A-17672), 4,8★ aus 11.317 Bewertungen, seit 2016 (10 Jahre) im Betrieb, regelmäßige Bootswartung und hygienischer Service, sowie Kundensupport in 11 Sprachen. Ab 24 €/Person — Zahlung an Bord, keine Vorauszahlung.",
    es: "Cinco razones: licencia TÜRSAB (A-17672), 4,8★ de 11.317 reseñas, operando desde 2016 (10 años), mantenimiento regular del barco y servicio higiénico, y atención al cliente en 11 idiomas. Desde 24 €/persona — pago a bordo, sin prepago.",
    ru: "Пять причин: лицензия TÜRSAB (A-17672), 4,8★ из 11 317 отзывов, работа с 2016 года (10 лет), регулярное техобслуживание судна и гигиеничный сервис, поддержка клиентов на 11 языках. От 24 €/чел. — оплата на борту, без предоплаты.",
    ar: "خمسة أسباب: ترخيص TÜRSAB (A-17672)، 4.8★ من 11,317 تقييم، يعمل منذ 2016 (10 سنوات)، صيانة منتظمة للقارب وخدمة صحية، ودعم عملاء بـ 11 لغة. من 24 يورو/شخص — الدفع على القارب، لا يلزم الدفع المسبق.",
    fa: "پنج دلیل: مجوز TÜRSAB (A-17672)، ۴.۸★ از ۱۱٬۳۱۷ نظر، فعالیت از سال ۲۰۱۶ (۱۰ سال)، نگهداری منظم قایق و خدمات بهداشتی، و پشتیبانی مشتریان به ۱۱ زبان. از ۲۴ یورو/نفر — پرداخت در قایق، بدون پیش‌پرداخت.",
    fr: "Cinq raisons : licence TÜRSAB (A-17672), 4,8★ sur 11 317 avis, en activité depuis 2016 (10 ans), entretien régulier du bateau et service hygiénique, et support client en 11 langues. À partir de 24 €/personne — paiement à bord, sans prépaiement.",
    it: "Cinque ragioni: licenza TÜRSAB (A-17672), 4,8★ da 11.317 recensioni, in attività dal 2016 (10 anni), manutenzione regolare della barca e servizio igienico, e supporto clienti in 11 lingue. Da 24 €/persona — pagamento a bordo, senza anticipo.",
    zh: "五个理由:TÜRSAB许可证(A-17672)、11,317条评价获4.8★、自2016年运营(10年)、定期船只维护和卫生服务,以及11种语言的客户支持。每人24欧元起 — 船上付款,无需预付。",
    id: "Lima alasan: lisensi TÜRSAB (A-17672), 4,8★ dari 11.317 ulasan, beroperasi sejak 2016 (10 tahun), perawatan kapal rutin dan layanan higienis, serta dukungan pelanggan dalam 11 bahasa. Mulai €24.30/orang — bayar di kapal, tanpa pembayaran di muka.",
    ms: "Lima sebab: lesen TÜRSAB (A-17672), 4.8★ daripada 11,317 ulasan, beroperasi sejak 2016 (10 tahun), penyelenggaraan bot tetap dan perkhidmatan bersih, serta sokongan pelanggan dalam 11 bahasa. Bermula €24.30/orang — bayar di atas bot, tiada bayaran pendahuluan.",
    pl: "Pięć powodów: licencja TÜRSAB (A-17672), 4,8★ z 11 317 recenzji, działalność od 2016 roku (10 lat), regularna konserwacja łodzi i higieniczna obsługa oraz obsługa klienta w 11 językach. Od 24 €/osobę — płatność na łodzi, bez przedpłaty.",
    bg: "Пет причини: TÜRSAB лиценз (A-17672), 4,8★ от 11 317 отзива, работа от 2016 г. (10 години), редовна поддръжка на лодката и хигиенично обслужване, и клиентска поддръжка на 11 езика. От 24 €/човек — плащане на борда, без предплащане.",
    ro: "Cinci motive: licență TÜRSAB (A-17672), 4,8★ din 11.317 recenzii, în funcțiune din 2016 (10 ani), întreținere regulată a bărcii și serviciu igienic, și asistență clienți în 11 limbi. De la 24 €/persoană — plată la bord, fără plată în avans.", uk: "П'ять причин: ліцензія TÜRSAB (A-17672), 4.8★ з 11 317 відгуків, працюємо з 2016 року (10 років), регулярне технічне обслуговування човна та гігієнічний сервіс, а також підтримка клієнтів 11 мовами. Від €24.30/особа — оплата на човні, передоплата не потрібна.", ja: "5つの理由がございます:TÜRSAB認証(A-17672)、11,317件のレビューで4.8★の評価、2016年から運航(10年間)、定期的な船舶メンテナンスと衛生的なサービス、11言語対応のカスタマーサポート。お一人様€24.30から―船上でのお支払い、事前のお支払いは不要です。", ko: "다섯 가지 이유가 있습니다: TÜRSAB 라이선스(A-17672), 11,317개 리뷰에서 4.8★, 2016년부터 운영(10년), 정기적인 보트 유지보수 및 위생적인 서비스, 그리고 11개 언어로 제공되는 고객 지원입니다. €24.30/1인부터 시작하며, 보트에서 결제하고 선불 결제는 필요하지 않습니다.", hi: "पाँच कारण: TÜRSAB लाइसेंस (A-17672), 11,317 समीक्षाओं से 4.8★, 2016 से संचालित (10 वर्ष), नियमित नाव रखरखाव और स्वच्छ सेवा, और 11 भाषाओं में ग्राहक सहायता। €24.30/व्यक्ति से — नाव पर भुगतान करें, कोई अग्रिम भुगतान आवश्यक नहीं।", ur: "پانچ وجوہات: TÜRSAB لائسنس (A-17672)، 11,317 جائزوں سے 4.8★، 2016 سے کام کر رہے ہیں (10 سال)، باقاعدہ کشتی کی دیکھ بھال اور صحت مند خدمات، اور 11 زبانوں میں کسٹمر سپورٹ۔ €24.30/فی شخص سے — کشتی پر ادائیگی کریں، پیشگی ادائیگی کی ضرورت نہیں۔"
  },
  "faq.q14": {
    en: "How does Bosphorus Night compare to other dinner cruises?",
    tr: "Bosphorus Night diğer akşam yemekli turlardan nasıl farklı?",
    de: "Wie unterscheidet sich Bosphorus Night von anderen Dinner-Kreuzfahrten?",
    es: "¿En qué se diferencia Bosphorus Night de otros cruceros con cena?",
    ru: "Чем Bosphorus Night отличается от других круизов с ужином?",
    ar: "ما الذي يميز بوسفور نايت عن رحلات العشاء الأخرى؟",
    fa: "بسفر نایت چه تفاوتی با دیگر تورهای شام دارد؟",
    fr: "En quoi Bosphorus Night se distingue-t-elle d'autres croisières dîner ?",
    it: "Cosa distingue Bosphorus Night da altre crociere con cena?",
    zh: "博斯普鲁斯之夜与其他晚餐游船有何不同?",
    id: "Apa yang membedakan Bosphorus Night dari pelayaran makan malam lain?",
    ms: "Apa yang membezakan Bosphorus Night daripada pelayaran makan malam lain?",
    pl: "Czym Bosphorus Night różni się od innych rejsów z kolacją?",
    bg: "С какво Bosphorus Night се отличава от други круизи с вечеря?",
    ro: "Cu ce diferă Bosphorus Night de alte croaziere cu cină?", uk: "Чим Bosphorus Night відрізняється від інших круїзів з вечерею?", ja: "Bosphorus Nightは他のディナークルーズと比べてどうですか?", ko: "Bosphorus Night는 다른 디너 크루즈와 어떻게 다른가요?", hi: "अन्य डिनर क्रूज़ की तुलना में Bosphorus Night कैसा है?", ur: "Bosphorus Night دیگر ڈنر کروز سے کیسے مختلف ہے؟"
  },
  "faq.a14": {
    en: "Bosphorus Night focuses on practical advantages: pay-on-boat (no card details required at booking), free cancellation up to 2 hours before departure, optional hotel transfer (€10/person), private group and special event arrangements (proposals, birthdays, corporate dinners), and instant customer support in 11 languages via WhatsApp +90 532 244 29 22.",
    tr: "Bosphorus Night'ın pratik avantajları: teknede ödeme (rezervasyonda kart bilgisi gerekmez), kalkıştan 2 saat öncesine kadar ücretsiz iptal, otel transferi opsiyonel (€10/kişi), özel grup ve etkinlik düzenleme (evlilik teklifi, doğum günü, kurumsal yemek), WhatsApp +90 532 244 29 22 üzerinden 11 dilde anlık destek.",
    de: "Bosphorus Night fokussiert sich auf praktische Vorteile: Zahlung an Bord (keine Kartendaten bei Buchung), kostenlose Stornierung bis 2 Stunden vor Abfahrt, optionaler Hoteltransfer (10 €/Person), private Gruppen- und Sonderveranstaltungsarrangements (Heiratsanträge, Geburtstage, Firmenessen) und sofortiger Kundensupport in 11 Sprachen über WhatsApp +90 532 244 29 22.",
    es: "Bosphorus Night se enfoca en ventajas prácticas: pago a bordo (sin datos de tarjeta al reservar), cancelación gratuita hasta 2 horas antes, traslado de hotel opcional (10 €/persona), eventos privados y especiales (propuestas, cumpleaños, cenas corporativas), y atención al cliente instantánea en 11 idiomas vía WhatsApp +90 532 244 29 22.",
    ru: "Bosphorus Night ориентируется на практические преимущества: оплата на борту (не нужны данные карты при бронировании), бесплатная отмена за 2 часа до отправления, опциональный трансфер из отеля (10 €/чел.), организация частных групп и специальных мероприятий (предложения руки, дни рождения, корпоративные ужины), мгновенная поддержка на 11 языках через WhatsApp +90 532 244 29 22.",
    ar: "تركز بوسفور نايت على المزايا العملية: الدفع على القارب (لا تلزم بيانات بطاقة عند الحجز)، إلغاء مجاني حتى ساعتين قبل الرحلة، نقل اختياري من الفندق (10 يورو/شخص)، ترتيبات للمجموعات الخاصة والمناسبات الخاصة (طلبات الزواج، أعياد الميلاد، عشاء الشركات)، ودعم عملاء فوري بـ 11 لغة عبر واتساب 905322442922+.",
    fa: "بسفر نایت بر مزایای عملی تمرکز دارد: پرداخت در قایق (نیاز به اطلاعات کارت در رزرو نیست)، لغو رایگان تا ۲ ساعت قبل از حرکت، انتقال هتل اختیاری (۱۰ یورو/نفر)، رزرو گروه خصوصی و رویدادهای خاص (پیشنهاد ازدواج، تولد، شام شرکتی)، و پشتیبانی فوری مشتری به ۱۱ زبان از طریق واتس‌اپ ‎۹۰۵۳۲۲۴۴۲۹۲۲+.",
    fr: "Bosphorus Night met l'accent sur les avantages pratiques : paiement à bord (aucune coordonnée bancaire lors de la réservation), annulation gratuite jusqu'à 2 heures avant le départ, transfert d'hôtel en option (10 €/personne), arrangements privés pour groupes et événements spéciaux (demandes en mariage, anniversaires, dîners d'entreprise), et support client instantané en 11 langues via WhatsApp +90 532 244 29 22.",
    it: "Bosphorus Night si concentra sui vantaggi pratici: pagamento a bordo (nessun dato della carta richiesto alla prenotazione), cancellazione gratuita fino a 2 ore prima della partenza, trasferimento dall'hotel opzionale (10 €/persona), organizzazione di gruppi privati ed eventi speciali (proposte di matrimonio, compleanni, cene aziendali), e supporto clienti immediato in 11 lingue via WhatsApp +90 532 244 29 22.",
    zh: "博斯普鲁斯之夜专注于实用优势:船上付款(预订时无需信用卡信息)、出发前2小时免费取消、酒店接送可选(每人10欧元)、私人团体和特别活动安排(求婚、生日、企业晚宴),以及通过WhatsApp +90 532 244 29 22提供11种语言的即时客户支持。",
    id: "Bosphorus Night berfokus pada keunggulan praktis: bayar di kapal (tidak perlu detail kartu saat memesan), pembatalan gratis hingga 2 jam sebelum keberangkatan, transfer hotel opsional (€10/orang), pengaturan grup privat dan acara khusus (lamaran, ulang tahun, makan malam korporat), dan dukungan pelanggan instan dalam 11 bahasa via WhatsApp +90 532 244 29 22.",
    ms: "Bosphorus Night memberi tumpuan pada kelebihan praktikal: bayar di bot (tiada butiran kad diperlukan semasa tempahan), pembatalan percuma sehingga 2 jam sebelum bertolak, pemindahan hotel pilihan (€10/orang), pengaturan kumpulan persendirian dan acara khas (lamaran, hari jadi, makan malam korporat), serta sokongan pelanggan segera dalam 11 bahasa melalui WhatsApp +90 532 244 29 22.",
    pl: "Bosphorus Night skupia się na praktycznych korzyściach: płatność na łodzi (brak danych karty przy rezerwacji), bezpłatna anulacja do 2 godzin przed wypłynięciem, opcjonalny transfer z hotelu (10 €/osobę), organizacja prywatnych grup i wydarzeń specjalnych (oświadczyny, urodziny, kolacje firmowe) oraz natychmiastowa obsługa klienta w 11 językach przez WhatsApp +90 532 244 29 22.",
    bg: "Bosphorus Night се фокусира върху практическите предимства: плащане на борда (без данни на карта при резервация), безплатна отмяна до 2 часа преди отплаване, опционален трансфер от хотел (10 €/човек), организиране на частни групи и специални събития (предложения, рождени дни, корпоративни вечери), и моментална клиентска поддръжка на 11 езика чрез WhatsApp +90 532 244 29 22.",
    ro: "Bosphorus Night se concentrează pe avantaje practice: plată la bord (fără detalii de card la rezervare), anulare gratuită până la 2 ore înainte de plecare, transfer opțional de la hotel (10 €/persoană), aranjamente private de grup și evenimente speciale (cereri în căsătorie, aniversări, cine corporative), și asistență clienți instantanee în 11 limbi prin WhatsApp +90 532 244 29 22.", uk: "Bosphorus Night зосереджений на практичних перевагах: оплата на човні (дані картки не потрібні при бронюванні), безкоштовне скасування до 2 годин до відправлення, опціональний трансфер з готелю (€10/особа), організація приватних груп та спеціальних подій (пропозиції одруження, дні народження, корпоративні вечері), а також миттєва підтримка клієнтів 11 мовами через WhatsApp +90 532 244 29 22.", ja: "Bosphorus Nightは実用的な利点に注力しております:船上でのお支払い(予約時にカード情報不要)、出航の2時間前まで無料キャンセル、オプションのホテル送迎(€10/お一人様)、プライベートグループや特別イベントの手配(プロポーズ、誕生日、企業ディナー)、そしてWhatsApp +90 532 244 29 22にて11言語対応の即時カスタマーサポートをご提供しております。", ko: "Bosphorus Night는 실용적인 장점에 중점을 둡니다: 보트 현장 결제(예약 시 카드 정보 불필요), 출발 2시간 전까지 무료 취소, 선택 가능한 호텔 이동 서비스(€10/1인), 프라이빗 그룹 및 특별 이벤트 준비(프러포즈, 생일, 기업 만찬), 그리고 WhatsApp +90 532 244 29 22를 통한 11개 언어로 제공되는 즉각적인 고객 지원입니다.", hi: "Bosphorus Night व्यावहारिक लाभों पर ध्यान केंद्रित करता है: नाव पर भुगतान (बुकिंग के समय कार्ड विवरण की आवश्यकता नहीं), प्रस्थान से 2 घंटे पहले तक मुफ्त रद्दीकरण, वैकल्पिक होटल ट्रांसफर (€10/व्यक्ति), निजी समूह और विशेष कार्यक्रम व्यवस्था (प्रस्ताव, जन्मदिन, कॉर्पोरेट डिनर), और WhatsApp +90 532 244 29 22 के माध्यम से 11 भाषाओं में त्वरित ग्राहक सहायता।", ur: "Bosphorus Night عملی فوائد پر توجہ مرکوز کرتا ہے: کشتی پر ادائیگی (بکنگ کے وقت کارڈ کی تفصیلات درکار نہیں)، روانگی سے 2 گھنٹے پہلے تک مفت منسوخی، اختیاری ہوٹل ٹرانسفر (€10/فی شخص)، نجی گروپ اور خصوصی تقریبات کا انتظام (شادی کی تجویز، سالگرہ، کارپوریٹ ڈنرز)، اور WhatsApp +90 532 244 29 22 کے ذریعے 11 زبانوں میں فوری کسٹمر سپورٹ۔"
  },

  // ========== BOTTOM CTA ==========
  "cta.title": {
    en: "Ready to Book Your Bosphorus Dinner Cruise?", tr: "Boğaz Yemekli Turunuzu Rezerve Etmeye Hazır mısınız?",
    de: "Bereit für Ihre Bosporus-Abendfahrt?", es: "¿Listo para reservar tu crucero con cena por el Bósforo?",
    ru: "Готовы забронировать ужин-круиз по Босфору?", ar: "هل أنت مستعد لحجز رحلة عشاء على البوسفور؟",
    fa: "آماده رزرو تور شام بسفر خود هستید؟", fr: "Prêt à réserver votre croisière dîner sur le Bosphore ?", it: "Pronto a prenotare la Sua crociera con cena sul Bosforo?", zh: "准备好预订博斯普鲁斯晚宴游船了吗?", id: "Siap Memesan Pelayaran Makan Malam Bosphorus Anda?", ms: "Sedia Menempah Pelayaran Makan Malam Bosphorus Anda?", pl: "Gotowi na rezerwację rejsu z kolacją po Bosforze?", bg: "Готови ли сте да резервирате Вашия круиз с вечеря по Босфора?", ro: "Sunteți Gata să Rezervați Croaziera cu Cină pe Bosfor?", uk: "Готові забронювати Вашу вечерю-круїз Босфором?", ja: "ボスポラスディナークルーズのご予約はお済みですか?", ko: "Bosphorus 디너 크루즈를 예약할 준비가 되셨나요?", hi: "अपनी Bosphorus डिनर क्रूज़ बुक करने के लिए तैयार हैं?", ur: "اپنے Bosphorus ڈنر کروز کو بک کرنے کے لیے تیار ہیں؟"
  },
  "cta.desc": {
    en: "Chat with us now to check availability and reserve your spot in minutes. No prepayment needed.",
    tr: "Müsaitliği kontrol etmek ve yerinizi dakikalar içinde ayırtmak için şimdi bizimle sohbet edin. Ön ödeme gerekmez.",
    de: "Jetzt per Chat Verfügbarkeit prüfen und Ihren Platz in Minuten sichern. Keine Vorauszahlung.",
    es: "Chatea con nosotros ahora para verificar disponibilidad y reservar tu lugar en minutos. Sin prepago.",
    ru: "Напишите нам сейчас, чтобы проверить наличие и забронировать место за минуты. Без предоплаты.",
    ar: "تواصل معنا الآن للتحقق من التوفر واحجز مكانك في دقائق. بدون دفع مسبق.",
    fa: "همین حالا با ما گفت‌وگو کنید تا ظرفیت را بررسی و جای خود را در چند دقیقه رزرو کنیم. نیازی به پیش‌پرداخت نیست.", fr: "Discutez avec nous maintenant pour vérifier la disponibilité et réserver votre place en quelques minutes. Aucun prépaiement nécessaire.", it: "Chatti con noi ora per verificare la disponibilità e riservare il Suo posto in pochi minuti. Nessun anticipo necessario.", zh: "现在联系我们查询余位,几分钟内即可预订座位。无需预付。", id: "Chat dengan kami sekarang untuk memeriksa ketersediaan dan memesan tempat Anda dalam hitungan menit. Tidak ada pembayaran di muka.", ms: "Sembang dengan kami sekarang untuk menyemak kekosongan dan menempah tempat anda dalam beberapa minit. Tiada bayaran pendahuluan diperlukan.", pl: "Napisz do nas teraz, aby sprawdzić dostępność i zarezerwować miejsce w kilka minut. Bez przedpłaty.", bg: "Пишете ни сега, за да проверите наличността и да запазите мястото си за минути. Без нужда от предплащане.", ro: "Discutați cu noi acum pentru a verifica disponibilitatea și a rezerva locul dumneavoastră în câteva minute. Fără plată în avans.", uk: "Напишіть нам зараз, щоб перевірити доступність та зарезервувати місце за лічені хвилини. Передоплата не потрібна.", ja: "今すぐチャットで空き状況を確認し、数分でご予約を完了できます。事前のお支払いは不要です。", ko: "지금 저희와 채팅하여 예약 가능 여부를 확인하고 몇 분 안에 자리를 예약하세요. 선불 결제가 필요하지 않습니다.", hi: "उपलब्धता जाँचने और मिनटों में अपनी जगह आरक्षित करने के लिए अभी हमसे चैट करें। कोई अग्रिम भुगतान आवश्यक नहीं।", ur: "دستیابی چیک کرنے اور منٹوں میں اپنی جگہ محفوظ کرنے کے لیے ابھی ہم سے بات کریں۔ پیشگی ادائیگی کی ضرورت نہیں۔"
  },
  "cta.today": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Tour wählen",
    es: "Elige tu crucero", ru: "Выберите свой круиз", ar: "اختر رحلتك",
    fa: "تور خود را انتخاب کنید", fr: "Choisissez votre croisière", it: "Scelga la Sua crociera", zh: "选择您的游船", id: "Pilih Pelayaran Anda", ms: "Pilih Pelayaran Anda", pl: "Wybierz swój rejs", bg: "Изберете Вашия круиз", ro: "Alegeți Croaziera Dumneavoastră", uk: "Оберіть Ваш круїз", ja: "クルーズを選ぶ", ko: "크루즈 선택하기", hi: "अपनी क्रूज़ चुनें", ur: "اپنا کروز منتخب کریں"
  },

  // ========== FOOTER ==========
  "footer.tagline": {
    en: "Your Bosphorus Night Awaits",
    tr: "Boğaz Geceniz Sizi Bekliyor",
    de: "Ihre Bosporus-Nacht wartet",
    es: "Tu Noche del Bósforo te Espera",
    ru: "Ваша босфорская ночь ждёт",
    ar: "ليلة البوسفور في انتظارك",
    fa: "شب بسفر شما در انتظار است", fr: "Votre soirée sur le Bosphore vous attend", it: "La Sua notte sul Bosforo La attende", zh: "您的博斯普鲁斯之夜正在等候", id: "Malam Bosphorus Anda Menanti", ms: "Malam Bosphorus Anda Menanti", pl: "Państwa noc nad Bosforem czeka", bg: "Вашата нощ на Босфора Ви очаква", ro: "Noaptea Dumneavoastră pe Bosfor Vă Așteaptă", uk: "Ваша ніч на Bosphorus Night чекає", ja: "あなたのボスポラスナイトが待っています", ko: "당신의 Bosphorus Night가 기다립니다", hi: "आपकी Bosphorus रात का इंतज़ार है", ur: "آپ کی Bosphorus رات منتظر ہے"
  },
  "footer.desc": {
    en: "We help you find the best cruise experience on the Bosphorus.",
    tr: "Boğaz'da en iyi tur deneyimini bulmanıza yardımcı oluyoruz.",
    de: "Wir helfen Ihnen, die beste Bootstour am Bosporus zu finden.",
    es: "Te ayudamos a encontrar la mejor experiencia de crucero en el Bósforo.",
    ru: "Мы помогаем найти лучший круиз по Босфору.",
    ar: "نساعدك في العثور على أفضل تجربة رحلة بحرية على البوسفور.",
    fa: "کمک می‌کنیم بهترین تجربه تور در بسفر را پیدا کنید.", fr: "Nous vous aidons à trouver la meilleure expérience de croisière sur le Bosphore.", it: "La aiutiamo a trovare la migliore esperienza di crociera sul Bosforo.", zh: "我们帮您找到博斯普鲁斯上最佳的游船体验。", id: "Kami membantu Anda menemukan pengalaman pelayaran terbaik di Bosphorus.", ms: "Kami bantu anda mencari pengalaman pelayaran terbaik di Bosphorus.", pl: "Pomagamy znaleźć najlepsze doświadczenie rejsu nad Bosforem.", bg: "Помагаме Ви да намерите най-доброто круизно преживяване по Босфора.", ro: "Vă ajutăm să găsiți cea mai bună experiență de croazieră pe Bosfor.", uk: "Ми допомагаємо Вам знайти найкращий круїз на Босфорі.", ja: "ボスポラスで最高のクルーズ体験をお手伝いいたします。", ko: "저희는 Bosphorus에서 최고의 크루즈 경험을 찾을 수 있도록 도와드립니다.", hi: "हम आपको Bosphorus पर सर्वोत्तम क्रूज़ अनुभव खोजने में मदद करते हैं।", ur: "ہم آپ کو Bosphorus پر بہترین کروز تجربہ تلاش کرنے میں مدد کرتے ہیں۔"
  },
  "footer.quicklinks": {
    en: "Quick Links", tr: "Hızlı Bağlantılar", de: "Schnelllinks", es: "Enlaces Rápidos",
    ru: "Быстрые ссылки", ar: "روابط سريعة",
    fa: "لینک‌های سریع", fr: "Liens rapides", it: "Link rapidi", zh: "快速链接", id: "Tautan Cepat", ms: "Pautan Pantas", pl: "Szybkie linki", bg: "Бързи връзки", ro: "Linkuri Rapide", uk: "Швидкі посилання", ja: "クイックリンク", ko: "빠른 링크", hi: "त्वरित लिंक", ur: "فوری لنکس"
  },
  "footer.contact": {
    en: "Contact", tr: "İletişim", de: "Kontakt", es: "Contacto", ru: "Контакты", ar: "اتصل بنا",
    fa: "تماس", fr: "Contact", it: "Contatti", zh: "联系方式", id: "Kontak", ms: "Hubungi", pl: "Kontakt", bg: "Контакт", ro: "Contact", uk: "Контакти", ja: "お問い合わせ", ko: "연락처", hi: "संपर्क", ur: "رابطہ"
  },
  "footer.legal": {
    en: "Legal", tr: "Yasal", de: "Rechtliches", es: "Legal", ru: "Юридическая информация", ar: "قانوني",
    fa: "حقوقی", fr: "Mentions légales", it: "Legale", zh: "法律条款", id: "Legal", ms: "Undang-undang", pl: "Informacje prawne", bg: "Правна информация", ro: "Juridic", uk: "Правова інформація", ja: "法的情報", ko: "법적 정보", hi: "कानूनी", ur: "قانونی"
  },
  "footer.howworks": {
    en: "How It Works", tr: "Nasıl Çalışır", de: "So funktioniert es", es: "Cómo Funciona",
    ru: "Как это работает", ar: "كيف يعمل",
    fa: "نحوه کار", fr: "Comment ça marche", it: "Come funziona", zh: "流程说明", id: "Cara Kerjanya", ms: "Cara Ia Berfungsi", pl: "Jak to działa", bg: "Как работи", ro: "Cum Funcționează", uk: "Як це працює", ja: "ご利用方法", ko: "이용 방법", hi: "यह कैसे काम करता है", ur: "یہ کیسے کام کرتا ہے"
  },
  "footer.privacy": {
    en: "Privacy Policy", tr: "Gizlilik Politikası", de: "Datenschutz", es: "Política de Privacidad",
    ru: "Политика конфиденциальности", ar: "سياسة الخصوصية",
    fa: "سیاست حریم خصوصی", fr: "Politique de confidentialité", it: "Informativa sulla privacy", zh: "隐私政策", id: "Kebijakan Privasi", ms: "Dasar Privasi", pl: "Polityka prywatności", bg: "Политика за поверителност", ro: "Politica de Confidențialitate", uk: "Політика конфіденційності", ja: "プライバシーポリシー", ko: "개인정보 보호정책", hi: "गोपनीयता नीति", ur: "رازداری کی پالیسی"
  },
  "footer.terms": {
    en: "Terms & Conditions", tr: "Şartlar ve Koşullar", de: "AGB", es: "Términos y Condiciones",
    ru: "Условия использования", ar: "الشروط والأحكام",
    fa: "شرایط و قوانین", fr: "Conditions générales", it: "Termini e condizioni", zh: "条款与条件", id: "Syarat & Ketentuan", ms: "Terma & Syarat", pl: "Warunki i zasady", bg: "Общи условия", ro: "Termeni și Condiții", uk: "Умови та положення", ja: "利用規約", ko: "이용 약관", hi: "नियम और शर्तें", ur: "شرائط و ضوابط"
  },
  "footer.cancellation": {
    en: "Cancellation Policy", tr: "İptal Politikası", de: "Stornierung", es: "Política de Cancelación",
    ru: "Политика отмены", ar: "سياسة الإلغاء",
    fa: "سیاست لغو", fr: "Politique d'annulation", it: "Politica di cancellazione", zh: "取消政策", id: "Kebijakan Pembatalan", ms: "Dasar Pembatalan", pl: "Polityka anulacji", bg: "Политика за отмяна", ro: "Politica de Anulare", uk: "Політика скасування", ja: "キャンセルポリシー", ko: "취소 정책", hi: "रद्दीकरण नीति", ur: "منسوخی کی پالیسی"
  },
  "footer.rights": {
    en: "All rights reserved.", tr: "Tüm hakları saklıdır.", de: "Alle Rechte vorbehalten.",
    es: "Todos los derechos reservados.", ru: "Все права защищены.", ar: "جميع الحقوق محفوظة.",
    fa: "تمامی حقوق محفوظ است.", fr: "Tous droits réservés.", it: "Tutti i diritti riservati.", zh: "保留所有权利。", id: "Semua hak dilindungi.", ms: "Semua hak terpelihara.", pl: "Wszelkie prawa zastrzeżone.", bg: "Всички права запазени.", ro: "Toate drepturile rezervate.", uk: "Усі права захищені.", ja: "All rights reserved.", ko: "모든 권리 보유.", hi: "सर्वाधिकार सुरक्षित।", ur: "تمام حقوق محفوظ ہیں۔"
  },
  "footer.location": {
    en: "Kabataş & Eminönü, Istanbul", tr: "Kabataş & Eminönü, İstanbul",
    de: "Kabataş & Eminönü, Istanbul", es: "Kabataş y Eminönü, Estambul",
    ru: "Кабаташ и Эминёню, Стамбул", ar: "كاباتاش وأمينونو، إسطنبول",
    fa: "کاباتاش و اِمینونو، استانبول", fr: "Kabataş & Eminönü, Istanbul", it: "Kabataş ed Eminönü, Istanbul", zh: "卡巴塔什与埃米诺努,伊斯坦布尔", id: "Kabataş & Eminönü, Istanbul", ms: "Kabataş & Eminönü, Istanbul", pl: "Kabataş i Eminönü, Stambuł", bg: "Кабаташ и Еминьоню, Истанбул", ro: "Kabataș și Eminönü, Istanbul", uk: "Kabataş і Eminönü, Istanbul", ja: "Kabataş & Eminönü, Istanbul", ko: "Kabataş & Eminönü, Istanbul", hi: "Kabataş & Eminönü, Istanbul", ur: "Kabataş اور Eminönü، Istanbul"
  },

  "footer.popularTours": {
    en: "Popular Tours", tr: "Popüler Turlar", de: "Beliebte Touren", es: "Tours Populares",
    ru: "Популярные туры", ar: "الرحلات الشائعة",
    fa: "تورهای محبوب", fr: "Tours populaires", it: "Tour popolari", zh: "热门游船", id: "Tur Populer", ms: "Tur Popular", pl: "Popularne wycieczki", bg: "Популярни турове", ro: "Tururi Populare", uk: "Популярні тури", ja: "人気ツアー", ko: "인기 투어", hi: "लोकप्रिय टूर", ur: "مقبول ٹورز"
  },
  "footer.daytimeCruise": {
    en: "Bosphorus Daytime Cruise", tr: "Boğaz Gündüz Turu", de: "Bosporus-Tagestour", es: "Crucero Diurno por el Bósforo",
    ru: "Дневной круиз по Босфору", ar: "رحلة البوسفور النهارية",
    fa: "تور روزانه بسفر", fr: "Croisière diurne sur le Bosphore", it: "Crociera Diurna sul Bosforo", zh: "博斯普鲁斯白天游船", id: "Pelayaran Siang Bosphorus", ms: "Pelayaran Siang Bosphorus", pl: "Dzienny rejs po Bosforze", bg: "Дневен круиз по Босфора", ro: "Croazieră de Zi pe Bosfor", uk: "Денний круїз Босфором", ja: "Bosphorus昼間クルーズ", ko: "Bosphorus 주간 크루즈", hi: "Bosphorus दिन का क्रूज़", ur: "Bosphorus دن کا کروز"
  },
  "footer.sunsetCruise": {
    en: "Bosphorus Sunset Cruise", tr: "Boğaz Günbatımı Turu", de: "Bosporus-Sonnenuntergangstour", es: "Crucero al Atardecer por el Bósforo",
    ru: "Круиз по Босфору на закате", ar: "رحلة غروب البوسفور",
    fa: "تور غروب بسفر", fr: "Croisière coucher de soleil sur le Bosphore", it: "Crociera al Tramonto sul Bosforo", zh: "博斯普鲁斯日落游船", id: "Pelayaran Matahari Terbenam Bosphorus", ms: "Pelayaran Matahari Terbenam Bosphorus", pl: "Rejs o zachodzie słońca po Bosforze", bg: "Залезен круиз по Босфора", ro: "Croazieră la Apus pe Bosfor", uk: "Круїз на заході сонця Босфором", ja: "Bosphorusサンセットクルーズ", ko: "Bosphorus 선셋 크루즈", hi: "Bosphorus सनसेट क्रूज़", ur: "Bosphorus سن سیٹ کروز"
  },
  "footer.dinnerCruise": {
    en: "Bosphorus Dinner Cruise", tr: "Boğaz Yemekli Turu", de: "Bosporus-Abendfahrt", es: "Crucero con Cena por el Bósforo",
    ru: "Ужин-круиз по Босфору", ar: "رحلة عشاء البوسفور",
    fa: "تور شام بسفر", fr: "Croisière dîner sur le Bosphore", it: "Crociera con Cena sul Bosforo", zh: "博斯普鲁斯晚宴游船", id: "Pelayaran Makan Malam Bosphorus", ms: "Pelayaran Makan Malam Bosphorus", pl: "Rejs z kolacją po Bosforze", bg: "Круиз с вечеря по Босфора", ro: "Croazieră cu Cină pe Bosfor", uk: "Вечеря-круїз Босфором", ja: "Bosphorusディナークルーズ", ko: "Bosphorus 디너 크루즈", hi: "Bosphorus डिनर क्रूज़", ur: "Bosphorus ڈنر کروز"
  },
  "footer.tonightCruise": {
    en: "Bosphorus Cruise Tonight", tr: "Bu Gece Boğaz Turu", de: "Bosporus-Tour Heute Abend", es: "Crucero por el Bósforo Esta Noche",
    ru: "Круиз по Босфору сегодня", ar: "رحلة البوسفور الليلة",
    fa: "تور بسفر برای امشب", fr: "Croisière sur le Bosphore ce soir", it: "Crociera sul Bosforo Stasera", zh: "今晚博斯普鲁斯游船", id: "Pelayaran Bosphorus Malam Ini", ms: "Pelayaran Bosphorus Malam Ini", pl: "Rejs po Bosforze dziś wieczorem", bg: "Круиз по Босфора тази вечер", ro: "Croazieră pe Bosfor în Seara Aceasta", uk: "Круїз Bosphorus сьогодні ввечері", ja: "今夜のボスポラスクルーズ", ko: "오늘 밤 보스포러스 크루즈", hi: "आज रात Bosphorus क्रूज़", ur: "آج رات Bosphorus کروز"
  },
  "footer.aboutUs": {
    en: "About Us", tr: "Hakkımızda", de: "Über Uns", es: "Sobre Nosotros",
    ru: "О нас", ar: "من نحن",
    fa: "درباره ما", fr: "À propos", it: "Chi siamo", zh: "关于我们", id: "Tentang Kami", ms: "Tentang Kami", pl: "O nas", bg: "За нас", ro: "Despre Noi", uk: "Про нас", ja: "私たちについて", ko: "회사 소개", hi: "हमारे बारे में", ur: "ہمارے بارے میں"
  },
  "footer.blog": {
    en: "Blog", tr: "Blog", de: "Blog", es: "Blog",
    ru: "Блог", ar: "المدونة",
    fa: "وبلاگ", fr: "Blog", it: "Blog", zh: "博客", id: "Blog", ms: "Blog", pl: "Blog", bg: "Блог", ro: "Blog", uk: "Блог", ja: "ブログ", ko: "블로그", hi: "ब्लॉग", ur: "بلاگ"
  },

  // ========== DINNER PACKAGE CARDS ==========
  "dinner.std.title": {
    en: "Standard Menu", tr: "Standart Menü", de: "Standard-Menü", es: "Menú Estándar",
    ru: "Стандартное меню", ar: "القائمة القياسية",
    fa: "منوی استاندارد", fr: "Menu Standard", it: "Menu Standard", zh: "标准菜单", id: "Menu Standar", ms: "Menu Standard", pl: "Menu Standard", bg: "Стандартно меню", ro: "Meniu Standard", uk: "Стандартне меню", ja: "スタンダードメニュー", ko: "스탠다드 메뉴", hi: "स्टैंडर्ड मेन्यू", ur: "معیاری مینو"
  },
  "dinner.std.desc": {
    en: "3-hour Bosphorus dinner cruise with full menu, Mevlana, folk dance, belly dance & DJ. Departs 20:30 from Kabataş.",
    tr: "3 saatlik Boğaz yemekli turu: tam menü, Mevlana, halk oyunları, oryantal ve DJ. Kabataş'tan 20:30 kalkış.",
    de: "3-stündige Bosporus-Dinnerfahrt mit komplettem Menü, Mevlana, Volkstanz, Bauchtanz und DJ. Abfahrt 20:30 ab Kabataş.",
    es: "Crucero con cena de 3 horas por el Bósforo: menú completo, Mevlana, danzas folclóricas, danza del vientre y DJ. Salida 20:30 desde Kabataş.",
    ru: "3-часовой круиз с ужином по Босфору: полное меню, Мевляна, народные танцы, танец живота и DJ. Отправление в 20:30 от Кабаташа.",
    ar: "رحلة بحرية مع عشاء لمدة 3 ساعات في البوسفور: قائمة كاملة، مولانا، رقص شعبي، رقص شرقي و DJ. الانطلاق الساعة 20:30 من كاباتاش.",
    fa: "تور شام سه‌ساعته بسفر: منوی کامل، مولانا، رقص محلی، رقص شرقی و DJ. حرکت ساعت 20:30 از کاباتاش.", fr: "Croisière dîner de 3 heures sur le Bosphore : menu complet, Mevlana, danses folkloriques, danse du ventre et DJ. Départ 20h30 de Kabataş.", it: "Crociera con cena di 3 ore sul Bosforo: menù completo, Mevlana, danze popolari, danza del ventre e DJ. Partenza alle 20:30 da Kabataş.", zh: "3小时博斯普鲁斯晚餐游船:完整菜单、梅夫拉那旋转舞、土耳其民间舞、肚皮舞和DJ。20:30从卡巴塔什码头出发。", id: "Pelayaran makan malam Bosphorus 3 jam: menu lengkap, Mevlana, tari rakyat, tari perut, dan DJ. Berangkat pukul 20:30 dari Kabataş.", ms: "Pelayaran makan malam Bosphorus 3 jam: menu penuh, Mevlana, tarian rakyat, tarian perut & DJ. Bertolak 20:30 dari Kabataş.", pl: "3-godzinny rejs z kolacją po Bosforze: pełne menu, Mevlana, tańce ludowe, taniec brzucha i DJ. Odjazd o 20:30 z Kabataş.", bg: "3-часов круиз с вечеря по Босфора: пълно меню, Мевляна, народни танци, кючек и DJ. Тръгване в 20:30 от Кабаташ.", ro: "Croazieră cu cină de 3 ore pe Bosfor: meniu complet, Mevlana, dansuri populare, dans din buric și DJ. Plecare 20:30 din Kabataş.", uk: "3-годинний вечерній круїз по Босфору з повним меню, Мевлана, народними танцями, танцем живота та DJ. Відправлення о 20:30 з Kabataş.", ja: "3時間のボスポラスディナークルーズ。フルメニュー、メヴレヴィー旋舞、民族舞踊、ベリーダンス、DJをお楽しみいただけます。Kabataşより20:30出航。", ko: "3시간 보스포러스 디너 크루즈로 풀 메뉴, 메블라나 공연, 민속 무용, 벨리댄스 및 DJ가 포함됩니다. Kabataş에서 20:30에 출발합니다.", hi: "3 घंटे की Bosphorus डिनर क्रूज़ पूर्ण मेन्यू के साथ, मेवलाना, लोक नृत्य, बेली डांस और DJ। Kabataş से 20:30 बजे प्रस्थान।", ur: "مکمل مینو کے ساتھ 3 گھنٹے کی Bosphorus ڈنر کروز، مولانا، لوک رقص، بیلی ڈانس اور DJ۔ Kabataş سے 20:30 پر روانگی۔"
  },
  "dinner.vip.title": {
    en: "VIP Menu", tr: "VIP Menü", de: "VIP-Menü", es: "Menú VIP",
    ru: "VIP меню", ar: "قائمة VIP",
    fa: "منوی VIP", fr: "Menu VIP", it: "Menu VIP", zh: "VIP菜单", id: "Menu VIP", ms: "Menu VIP", pl: "Menu VIP", bg: "VIP меню", ro: "Meniu VIP", uk: "VIP меню", ja: "VIPメニュー", ko: "VIP 메뉴", hi: "VIP मेन्यू", ur: "VIP مینو"
  },
  "dinner.vip.desc": {
    en: "Premium dining at the best table near the stage. Upgraded menu with premium mezes, steak options, and VIP service throughout the night.",
    tr: "Sahneye en yakın masada premium yemek deneyimi. Zengin meze seçkisi, biftek seçenekleri ve gece boyunca VIP hizmet.",
    de: "Premium-Dinner am besten Tisch nahe der Bühne. Erweitertes Menü mit Premium-Meze, Steak und VIP-Service die ganze Nacht.",
    es: "Cena premium en la mejor mesa cerca del escenario. Menú mejorado con mezes premium, opciones de bistec y servicio VIP toda la noche.",
    ru: "Премиум-ужин за лучшим столом у сцены. Расширенное меню с премиум-мезе, стейками и VIP-обслуживанием всю ночь.",
    ar: "عشاء فاخر على أفضل طاولة بالقرب من المسرح. قائمة مطورة مع مقبلات فاخرة وخيارات ستيك وخدمة VIP طوال الليل.",
    fa: "غذاخوری ممتاز در بهترین میز نزدیک صحنه. منوی ارتقا یافته با مزه‌های ممتاز، گزینه‌های استیک و خدمات VIP در تمام شب.", fr: "Dîner premium à la meilleure table près de la scène. Menu rehaussé avec mezzés premium, options steak et service VIP toute la soirée.", it: "Cena premium al miglior tavolo vicino al palco. Menu aggiornato con meze premium, opzioni di bistecca e servizio VIP per tutta la serata.", zh: "靠近舞台最佳餐桌的高级用餐。升级菜单含尊享冷盘、牛排选项,以及整晚的VIP服务。", id: "Santap premium di meja terbaik dekat panggung. Menu yang ditingkatkan dengan meze premium, pilihan steak, dan layanan VIP sepanjang malam.", ms: "Santapan premium di meja terbaik berdekatan pentas. Menu dinaik taraf dengan meze premium, pilihan stik dan layanan VIP sepanjang malam.", pl: "Premium kolacja przy najlepszym stole w pobliżu sceny. Ulepszone menu z premium mezze, opcjami stekowymi i obsługą VIP przez cały wieczór.", bg: "Премиум вечеря на най-добрата маса близо до сцената. Подобрено меню с премиум мезета, варианти със стек и VIP обслужване през цялата нощ.", ro: "Cină premium la cea mai bună masă lângă scenă. Meniu îmbunătățit cu mezeluri premium, opțiuni de steak și serviciu VIP pe toată durata serii.", uk: "Преміальна вечеря за найкращим столиком біля сцени. Покращене меню з преміальними мезе, стейками на вибір та VIP-обслуговуванням протягом усього вечора.", ja: "ステージに最も近い特等席でのプレミアムダイニング。厳選メゼ、ステーキオプション、そして一晩中VIPサービスをご提供いたします。", ko: "무대 근처 최고의 테이블에서 프리미엄 식사를 즐기실 수 있습니다. 프리미엄 메제, 스테이크 옵션 및 밤새 제공되는 VIP 서비스로 업그레이드된 메뉴입니다.", hi: "स्टेज के पास सबसे अच्छी टेबल पर प्रीमियम भोजन। प्रीमियम मेज़े, स्टेक विकल्पों के साथ उन्नत मेन्यू, और पूरी रात VIP सेवा।", ur: "اسٹیج کے قریب بہترین میز پر پریمیم ڈائننگ۔ پریمیم میزے، اسٹیک کے اختیارات، اور پوری رات VIP سروس کے ساتھ اپ گریڈ شدہ مینو۔"
  },
  "dinner.payOnBoat": {
    en: "Pay on the boat", tr: "Teknede ödeme", de: "Zahlung an Bord", es: "Paga en el barco",
    ru: "Оплата на борту", ar: "الدفع على متن القارب",
    fa: "پرداخت در قایق", fr: "Payer à bord", it: "Paga a bordo", zh: "船上付款", id: "Bayar di perahu", ms: "Bayar di atas bot", pl: "Płatność na łodzi", bg: "Плащане на лодката", ro: "Plata pe vapor", uk: "Оплата на борту", ja: "船上でお支払い", ko: "선상 결제", hi: "बोट पर भुगतान करें", ur: "کشتی پر ادائیگی کریں"
  },
  "dinner.nearStage": {
    en: "Near the stage", tr: "Sahneye yakın", de: "Nahe der Bühne", es: "Cerca del escenario",
    ru: "У сцены", ar: "بالقرب من المسرح",
    fa: "نزدیک صحنه", fr: "Près de la scène", it: "Vicino al palco", zh: "靠近舞台", id: "Dekat panggung", ms: "Berdekatan pentas", pl: "Blisko sceny", bg: "Близо до сцената", ro: "Lângă scenă", uk: "Біля сцени", ja: "ステージ近くの席", ko: "무대 근처", hi: "स्टेज के पास", ur: "اسٹیج کے قریب"
  },
  "dinner.freeCancel": {
    en: "Free cancel 2hrs", tr: "2 saat önce ücretsiz iptal", de: "Gratis-Storno 2 Std.", es: "Cancelación gratis 2hrs",
    ru: "Бесплатная отмена за 2ч", ar: "إلغاء مجاني قبل ساعتين",
    fa: "لغو رایگان ۲ ساعت پیش", fr: "Annulation gratuite 2h", it: "Cancellazione gratuita 2h", zh: "2小时前免费取消", id: "Batal gratis 2 jam", ms: "Batal percuma 2jam", pl: "Bezpłatna anulacja 2h", bg: "Безплатна отмяна 2 ч.", ro: "Anulare gratuită 2 ore", uk: "Безкоштовне скасування 2 год", ja: "2時間前まで無料キャンセル", ko: "2시간 전 무료 취소", hi: "2 घंटे पहले निःशुल्क रद्द करें", ur: "2 گھنٹے میں مفت منسوخی"
  },
  "dinner.halalTax": {
    en: "Halal options · Wine & cocktails · Taxes incl.",
    tr: "Helal seçenekler · Şarap ve kokteyl · Vergi dahil",
    de: "Halal Optionen · Wein & Cocktails · Steuer inkl.",
    es: "Opciones halal · Vino y cócteles · Impuestos incl.",
    ru: "Халяль-варианты · Вино и коктейли · Налоги вкл.",
    ar: "خيارات حلال · نبيذ وكوكتيلات · الضرائب شاملة",
    fa: "گزینه‌های حلال · شراب و کوکتل · مالیات شامل",
    fr: "Options halal · Vin & cocktails · Taxes incl.",
    it: "Opzioni halal · Vino e cocktail · Tasse incl.",
    zh: "清真选项 · 葡萄酒与鸡尾酒 · 含税",
    id: "Opsi halal · Anggur & koktail · Termasuk pajak",
    ms: "Pilihan halal · Wain & koktel · Termasuk cukai",
    pl: "Opcje halal · Wino & koktajle · Podatki wlicz.",
    bg: "Халал опции · Вино и коктейли · Вкл. данъци",
    ro: "Opțiuni halal · Vin și cocktailuri · Taxe incl.", uk: "Халяльні страви · Вино та коктейлі · Податки включено", ja: "ハラル対応可 &middot; ワイン&カクテル &middot; 税込", ko: "할랄 옵션 &middot; 와인 및 칵테일 &middot; 세금 포함", hi: "हलाल विकल्प · वाइन और कॉकटेल · टैक्स शामिल", ur: "حلال اختیارات &middot; وائن اور کاک ٹیلز &middot; ٹیکس شامل ہیں۔"
  },
  "meeting.share": {
    en: "Exact meeting location will be shared via WhatsApp, Telegram or WeChat after booking.",
    tr: "Tam buluşma noktası rezervasyondan sonra WhatsApp, Telegram veya WeChat üzerinden paylaşılacaktır.",
    de: "Der genaue Treffpunkt wird nach der Buchung über WhatsApp, Telegram oder WeChat geteilt.",
    es: "La ubicación exacta del encuentro se compartirá vía WhatsApp, Telegram o WeChat después de la reserva.",
    ru: "Точное место встречи будет отправлено через WhatsApp, Telegram или WeChat после бронирования.",
    ar: "سيتم مشاركة موقع اللقاء الدقيق عبر واتساب أو تيليجرام أو ويتشات بعد الحجز.",
    fa: "نقطه دقیق ملاقات پس از رزرو از طریق واتس‌اپ، تلگرام یا وی‌چت به اشتراک گذاشته می‌شود.", fr: "Le point de rendez-vous exact sera communiqué par WhatsApp, Telegram ou WeChat après la réservation.", it: "La posizione esatta del punto d'incontro sarà condivisa via WhatsApp, Telegram o WeChat dopo la prenotazione.", zh: "预订后将通过WhatsApp、Telegram或WeChat分享具体集合位置。", id: "Lokasi pertemuan yang tepat akan dibagikan via WhatsApp, Telegram atau WeChat setelah pemesanan.", ms: "Lokasi pertemuan tepat akan dikongsi melalui WhatsApp, Telegram atau WeChat selepas tempahan.", pl: "Dokładna lokalizacja spotkania zostanie udostępniona przez WhatsApp, Telegram lub WeChat po rezerwacji.", bg: "Точното място за среща ще бъде споделено чрез WhatsApp, Telegram или WeChat след резервацията.", ro: "Locația exactă de întâlnire va fi împărtășită prin WhatsApp, Telegram sau WeChat după rezervare.", uk: "Точне місце зустрічі буде надіслано через WhatsApp, Telegram або WeChat після бронювання.", ja: "正確な集合場所は、ご予約後にWhatsApp、Telegram、またはWeChatにてお知らせいたします。", ko: "정확한 미팅 장소는 예약 후 WhatsApp, Telegram 또는 WeChat을 통해 공유됩니다.", hi: "बुकिंग के बाद WhatsApp, Telegram या WeChat के माध्यम से सटीक मिलने का स्थान साझा किया जाएगा।", ur: "بُکنگ کے بعد ملاقات کی صحیح جگہ WhatsApp، Telegram یا WeChat کے ذریعے شیئر کی جائے گی۔"
  },
  "meeting.howToFind": {
    en: "How to find us — walking directions",
    tr: "Bize nasıl gelirsiniz — yürüyüş tarifi",
    de: "So finden Sie uns — Wegbeschreibung zu Fuß",
    es: "Cómo encontrarnos — indicaciones a pie",
    ru: "Как нас найти — пешая навигация",
    ar: "كيفية الوصول إلينا — اتجاهات المشي",
    fa: "چگونه ما را پیدا کنید — مسیر پیاده‌روی", fr: "Comment nous trouver — indications à pied", it: "Come trovarci — indicazioni a piedi", zh: "如何找到我们——步行指引", id: "Cara menemukan kami — petunjuk jalan kaki", ms: "Cara mencari kami — arah berjalan", pl: "Jak nas znaleźć — wskazówki dojścia", bg: "Как да ни намерите — пешеходни указания", ro: "Cum să ne găsiți — indicații pe jos", uk: "Як нас знайти — пішохідні маршрути", ja: "集合場所への行き方 — 徒歩ルート", ko: "찾아오시는 방법 — 도보 안내", hi: "हमें कैसे खोजें — पैदल मार्ग निर्देश", ur: "ہمیں کیسے تلاش کریں — پیدل سمتیں"
  },
  "meeting.videoDolmabahce": {
    en: "From Dolmabahçe", tr: "Dolmabahçe'den", de: "Von Dolmabahçe",
    es: "Desde Dolmabahçe", ru: "От Долмабахче", ar: "من دولمة بهجة",
    fa: "از دلمه‌باغچه", fr: "Depuis Dolmabahçe", it: "Da Dolmabahçe", zh: "从多尔玛巴切", id: "Dari Dolmabahçe", ms: "Dari Dolmabahçe", pl: "Od Dolmabahçe", bg: "От Долмабахче", ro: "De la Dolmabahçe", uk: "Від Dolmabahçe", ja: "Dolmabahçeから", ko: "Dolmabahçe에서", hi: "Dolmabahçe से", ur: "Dolmabahçe سے"
  },
  "meeting.videoTram": {
    en: "From Tram Station", tr: "Tramvay İstasyonundan", de: "Von der Tramstation",
    es: "Desde la Estación de Tranvía", ru: "От трамвайной остановки", ar: "من محطة الترام",
    fa: "از ایستگاه تراموا", fr: "Depuis la station de tramway", it: "Dalla Fermata del Tram", zh: "从电车站", id: "Dari Stasiun Tram", ms: "Dari Stesen Tram", pl: "Od stacji tramwajowej", bg: "От трамвайната спирка", ro: "De la Stația de Tramvai", uk: "Від трамвайної зупинки", ja: "トラム駅から", ko: "트램 역에서", hi: "ट्राम स्टेशन से", ur: "ٹرام اسٹیشن سے"
  },
  "meeting.videoWalk": {
    en: "Watch walking route", tr: "Yürüyüş rotasını izle", de: "Gehroute ansehen",
    es: "Ver ruta a pie", ru: "Смотреть пеший маршрут", ar: "شاهد مسار المشي",
    fa: "مشاهده مسیر پیاده‌روی", fr: "Voir l'itinéraire à pied", it: "Guarda il percorso a piedi", zh: "查看步行路线", id: "Tonton rute jalan kaki", ms: "Tonton laluan berjalan", pl: "Obejrzyj trasę pieszą", bg: "Гледайте пешеходния маршрут", ro: "Vedeți ruta pe jos", uk: "Дивитися пішохідний маршрут", ja: "徒歩ルート動画", ko: "도보 경로 보기", hi: "पैदल मार्ग देखें", ur: "پیدل راستہ دیکھیں"
  },
  "meeting.videoWalk2": {
    en: "Watch walking route", tr: "Yürüyüş rotasını izle", de: "Gehroute ansehen",
    es: "Ver ruta a pie", ru: "Смотреть пеший маршрут", ar: "شاهد مسار المشي",
    fa: "مشاهده مسیر پیاده‌روی", fr: "Voir l'itinéraire à pied", it: "Guarda il percorso a piedi", zh: "查看步行路线", id: "Tonton rute jalan kaki", ms: "Tonton laluan berjalan", pl: "Obejrzyj trasę pieszą", bg: "Гледайте пешеходния маршрут", ro: "Vedeți ruta pe jos", uk: "Дивитися пішохідний маршрут", ja: "徒歩ルート動画", ko: "도보 경로 보기", hi: "पैदल मार्ग देखें", ur: "پیدل راستہ دیکھیں"
  },
  "dropoff.title": {
    en: "Drop-off", tr: "Dönüş", de: "Rückfahrt", es: "Regreso", ru: "Возвращение", ar: "العودة",
    fa: "بازگشت", fr: "Dépose", it: "Riconsegna", zh: "送返", id: "Pengantaran", ms: "Hantar balik", pl: "Odwiezienie", bg: "Връщане", ro: "Ducere", uk: "Висадка", ja: "降船場所", ko: "하선 장소", hi: "ड्रॉप-ऑफ", ur: "واپسی کی جگہ"
  },
  "dropoff.desc": {
    en: "All guests are dropped off at <strong class=\"text-white/80\">Kabataş Pier</strong> between 23:30. If you booked hotel transfer, the same driver who picked you up will be waiting at the pier to take you back to your hotel.",
    tr: "Tüm misafirler <strong class=\"text-white/80\">Kabataş İskelesi</strong>'nde 23:30 arası bırakılır. Otel transferi aldıysanız, sizi otelinizden alan şoförümüz iskelede sizi bekliyor olacak ve otelinize geri götürecek.",
    de: "Alle Gäste werden zwischen 23:30 am <strong class=\"text-white/80\">Kabataş-Pier</strong> abgesetzt. Wenn Sie einen Hoteltransfer gebucht haben, wartet derselbe Fahrer, der Sie abgeholt hat, am Pier und bringt Sie zurück zum Hotel.",
    es: "Todos los invitados son dejados en el <strong class=\"text-white/80\">muelle de Kabataş</strong> alrededor de las 23:30. Si reservó traslado al hotel, el mismo chofer que le recogió le estará esperando en el muelle para llevarle de vuelta al hotel.",
    ru: "Всех гостей высаживают на <strong class=\"text-white/80\">причале Кабаташ</strong> около 23:30. Если вы забронировали трансфер, тот же водитель, который вас забрал, будет ждать на причале, чтобы отвезти вас обратно в отель.",
    ar: "يتم إنزال جميع الضيوف عند <strong class=\"text-white/80\">رصيف كاباتاش</strong> بين الساعة 23:30. إذا حجزت نقل الفندق، سينتظرك نفس السائق الذي أقلّك على الرصيف ليعيدك إلى فندقك.",
    fa: "همه مهمانان بین ۲۳:۳۰ در <strong class=\"text-white/80\">اسکله کاباتاش</strong> پیاده می‌شوند. اگر ترانسفر هتل رزرو کرده باشید، همان راننده‌ای که شما را سوار کرده بود در اسکله منتظر خواهد بود تا شما را به هتل بازگرداند.", fr: "Tous les invités sont déposés à l'<strong class=\"text-white/80\">embarcadère de Kabataş</strong> entre 23h30. Si vous avez réservé le transfert depuis l'hôtel, le même chauffeur qui vous a pris en charge vous attendra à l'embarcadère pour vous ramener à votre hôtel.", it: "Tutti gli ospiti vengono riaccompagnati al <strong class=\"text-white/80\">Molo di Kabataş</strong> intorno alle 23:30. Se ha prenotato il transfer dall'hotel, lo stesso autista che L'ha prelevata La attenderà al molo per riportarLa in hotel.", zh: "所有宾客于23:30至23:30之间在<strong class=\"text-white/80\">卡巴塔什码头</strong>下船。若您预订了酒店接送,接您来的同一位司机会在码头等候,送您返回酒店。", id: "Semua tamu diantar di <strong class=\"text-white/80\">Dermaga Kabataş</strong> sekitar pukul 23:30. Jika Anda memesan antar-jemput hotel, sopir yang sama yang menjemput Anda akan menunggu di dermaga untuk mengantar Anda kembali ke hotel.", ms: "Semua tetamu dihantar balik di <strong class=\"text-white/80\">Jeti Kabataş</strong> sekitar 23:30. Jika anda menempah pemindahan hotel, pemandu yang sama yang menjemput anda akan menunggu di jeti untuk membawa anda kembali ke hotel anda.", pl: "Wszyscy goście są odwożeni na <strong class=\"text-white/80\">Przystań Kabataş</strong> między 23:30. Jeśli zarezerwowali Państwo transfer z hotelu, ten sam kierowca, który Państwa odebrał, będzie czekać na przystani, aby zabrać Państwa z powrotem do hotelu.", bg: "Всички гости се връщат на <strong class=\"text-white/80\">пристанището Кабаташ</strong> около 23:30 ч. Ако сте резервирали хотелски трансфер, същият шофьор, който Ви е взел, ще Ви чака на пристанището, за да Ви върне в хотела.", ro: "Toți oaspeții sunt duși la <strong class=\"text-white/80\">Debarcaderul Kabataș</strong> între 23:30. Dacă ați rezervat transfer de la hotel, același șofer care v-a preluat va aștepta la debarcader pentru a vă duce înapoi la hotel.", uk: "Усі гості висаджуються на <strong class=\"text-white/80\">пірсі Kabataş</strong> близько 23:30. Якщо Ви забронювали трансфер до готелю, той самий водій, який Вас забрав, чекатиме на пірсі, щоб повернути Вас до готелю.", ja: "すべてのお客様は23:30頃に<strong class=\"text-white/80\">Kabataş桟橋</strong>にて降船となります。ホテル送迎をご予約のお客様は、お迎えに来た同じドライバーが桟橋でお待ちし、ホテルまでお送りいたします。", ko: "모든 고객님께서는 23:30경 <strong class=\"text-white/80\">Kabataş Pier</strong>에서 하선하십니다. 호텔 픽업 서비스를 예약하신 경우, 픽업을 담당했던 동일한 기사님이 부두에서 대기하여 호텔까지 모셔다 드립니다.", hi: "सभी मेहमानों को 23:30 के बीच <strong class=\"text-white/80\">Kabataş पियर</strong> पर उतारा जाता है। यदि आपने होटल ट्रांसफर बुक किया है, तो वही ड्राइवर जो आपको लेने आया था पियर पर आपका इंतज़ार कर रहा होगा और आपको आपके होटल वापस ले जाएगा।", ur: "تمام مہمانوں کو 23:30 کے درمیان <strong class=\"text-white/80\">Kabataş Pier</strong> پر اتارا جاتا ہے۔ اگر آپ نے ہوٹل ٹرانسفر بُک کیا ہے، تو وہی ڈرائیور جو آپ کو لے کر آیا تھا گھاٹ پر آپ کا انتظار کر رہا ہو گا تاکہ آپ کو واپس آپ کے ہوٹل لے جائے۔"
  },
  "dinner.menuLabel": {
    en: "What's Included", tr: "Dahil Olanlar", de: "Inklusive", es: "Incluido",
    ru: "Включено", ar: "يشمل",
    fa: "آنچه شامل می‌شود", fr: "Ce qui est inclus", it: "Cosa è incluso", zh: "包含内容", id: "Apa yang Termasuk", ms: "Apa yang Termasuk", pl: "Co jest wliczone", bg: "Какво е включено", ro: "Ce Este Inclus", uk: "Що включено", ja: "含まれるもの", ko: "포함 사항", hi: "क्या शामिल है", ur: "کیا شامل ہے"
  },
  "dinner.std.item1": {
    en: "10 varieties of Turkish meze", tr: "10 çeşit Türk mezesi",
    de: "10 Sorten türkischer Meze", es: "10 variedades de meze turco",
    ru: "10 видов турецких мезе", ar: "10 أنواع من المقبلات التركية",
    fa: "۱۰ نوع مزه ترکی", fr: "10 variétés de mezzés turcs", it: "10 varietà di meze turchi", zh: "10种土耳其冷盘", id: "10 jenis meze Turki", ms: "10 jenis meze Turki", pl: "10 rodzajów tureckich mezze", bg: "10 вида турски мезета", ro: "10 sortimente de mezeluri turcești", uk: "10 видів турецьких мезе", ja: "トルコ風メゼ10種", ko: "10가지 종류의 터키식 메제", hi: "10 प्रकार के तुर्की मेज़े", ur: "ترکی میزے کی 10 اقسام"
  },
  "dinner.std.item2": {
    en: "Warm appetizer: paçanga börek (beef pastırma & kashar cheese)", tr: "Ara sıcak: paçanga böreği (dana pastırması ve kaşar peyniri)",
    de: "Warme Vorspeise: Paçanga Börek (Rinder-Pastirma & Kashar-Käse)", es: "Entrante caliente: paçanga börek (pastırma de ternera y queso kashar)",
    ru: "Горячая закуска: пачанга бёрек (говяжья пастырма и сыр кашар)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة بقرية وجبن قشقوان)",
    fa: "پیش‌غذای گرم: پاچانگا بورِگی (پاسترمای گوساله و پنیر کاشار)", fr: "Entrée chaude : paçanga böreği (pastırma de bœuf & kashar)", it: "Antipasto caldo: paçanga börek (pastırma di manzo e formaggio kashar)", zh: "热前菜:帕尚加酥卷(牛肉帕斯特玛与卡沙尔奶酪)", id: "Hidangan pembuka hangat: paçanga börek (pastırma sapi & keju kashar)", ms: "Pembuka selera panas: paçanga börek (pastırma daging lembu & keju kashar)", pl: "Ciepła przystawka: paçanga böreği (wołowa pastırma i ser kashar)", bg: "Топло предястие: пачанга бюрек (говежди пастърма и кашкавал)", ro: "Aperitiv cald: paçanga börek (pastırma de vită și cașcaval kashar)", uk: "Тепла закуска: пачанга бюрек (яловича пастирма та сир кашар)", ja: "温前菜：パチャンガ・ボレック（牛肉のパストゥルマ&カシャールチーズ）", ko: "따뜻한 애피타이저: 파창아 뵈렉 (소고기 파스트르마 & 카샤르 치즈)", hi: "गरम ऐपेटाइज़र: पाचंगा बोरेक (बीफ पस्तुर्मा और कशर चीज़)", ur: "گرم اپیٹائزر: پاچانگا بوریک (بیف پاسترما اور کشر چیز)"
  },
  "dinner.std.item3": {
    en: "Main course (with seasonal salad, choose one): salmon, sea bream, chicken, meatball, or vegetarian platter (falafel, roasted potatoes, bulgur pilaf, stewed vegetables & onion rings)",
    tr: "Ana yemek (mevsim salatasıyla birlikte, birini seçin): somon, çipura, tavuk, köfte veya vejetaryen tabağı (falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası)",
    de: "Hauptgang (mit Saisonsalat, Auswahl): Lachs, Dorade, Hähnchen, Köfte oder vegetarischer Teller (Falafel, geröstete Kartoffeln, Bulgur-Pilaw, geschmortes Gemüse & Zwiebelringe)",
    es: "Plato principal (con ensalada de temporada, elija uno): salmón, dorada, pollo, albóndigas o plato vegetariano (falafel, patatas asadas, pilaf de bulgur, verduras estofadas y aros de cebolla)",
    ru: "Основное блюдо (с сезонным салатом, на выбор): лосось, дорада, курица, фрикадельки или вегетарианская тарелка (фалафель, жареный картофель, плов булгур, тушёные овощи и луковые кольца)",
    ar: "طبق رئيسي (مع سلطة موسمية، اختر واحد): سلمون، دنيس، دجاج، كفتة أو طبق نباتي (فلافل، بطاطا مقلية، بلغر، خضروات مطبوخة وحلقات بصل)",
    fa: "غذای اصلی (با سالاد فصلی، یکی را انتخاب کنید): سالمون، شانک، مرغ، کوفته یا سینی گیاه‌خواری (فلافل، سیب‌زمینی برشته، پلو بلغور، خورش سبزیجات و حلقه‌های پیاز)", fr: "Plat principal (avec salade de saison, au choix) : saumon, dorade, poulet, köfte ou plateau végétarien (falafel, pommes de terre rôties, pilaf de boulgour, légumes mijotés & rondelles d'oignon)", it: "Secondo (con insalata di stagione, a scelta): salmone, orata, pollo, köfte o piatto vegetariano (falafel, patate arrosto, pilaf di bulgur, verdure stufate e anelli di cipolla)", zh: "主菜(配时令沙拉,任选一款):三文鱼、鲷鱼、鸡肉、肉丸或素食拼盘(法拉费、烤土豆、布格麦饭、炖蔬菜与洋葱圈)", id: "Menu utama (dengan salad musiman, pilih satu): salmon, sea bream, ayam, köfte, atau piring vegetarian (falafel, kentang panggang, pilaf bulgur, sayuran rebus & cincin bawang)", ms: "Hidangan utama (dengan salad bermusim, pilih satu): salmon, sea bream, ayam, köfte atau pinggan vegetarian (falafel, kentang panggang, nasi bulgur, sayur rebus & cincin bawang)", pl: "Danie główne (z sezonową sałatką, do wyboru): łosoś, dorada, kurczak, kotlety lub półmisek wegetariański (falafel, pieczone ziemniaki, pilaw bulgur, warzywa duszone i krążki cebulowe)", bg: "Основно ястие (със сезонна салата, избор на едно): сьомга, ципура, пиле, кюфте или вегетарианско плато (фалафел, печени картофи, булгурен пилаф, задушени зеленчуци и лукови кръгчета)", ro: "Fel principal (cu salată de sezon, alegeți unul): somon, dorado, pui, chiftele sau platou vegetarian (falafel, cartofi copți, pilaf de bulgur, legume înăbușite și rondele de ceapă)", uk: "Основна страва (з сезонним салатом, на вибір): лосось, дорада, курка, котлета або вегетаріанське плато (фалафель, запечена картопля, булгур-пілав, тушковані овочі та цибульні кільця)", ja: "メインディッシュ（季節のサラダ付き、1品お選びください）：サーモン、鯛、チキン、ミートボール、またはベジタリアンプレート（ファラフェル、ローストポテト、ブルグルピラフ、野菜の煮込み、オニオンリング）", ko: "메인 요리 (계절 샐러드 포함, 하나 선택): 연어, 도미, 치킨, 미트볼, 또는 베지테리안 플래터 (팔라펠, 구운 감자, 불구르 필라프, 찐 야채 & 어니언 링)", hi: "मुख्य व्यंजन (मौसमी सलाद के साथ, एक चुनें): सैल्मन, सी ब्रीम, चिकन, मीटबॉल, या शाकाहारी थाली (फलाफेल, रोस्टेड आलू, बुलगुर पिलाफ, स्टीव्ड सब्जियां और प्याज के छल्ले)", ur: "مین کورس (سیزنل سلاد کے ساتھ، ایک منتخب کریں): سالمن، سی بریم، چکن، میٹ بال، یا سبزی خور پلیٹر (فلافل، روسٹڈ آلو، بلغور پلاؤ، سٹیود سبزیاں اور پیاز کے رنگز)"
  },
  "dinner.std.item4": {
    en: "Dessert: ice cream cake", tr: "Tatlı: dondurmalı pasta",
    de: "Dessert: Eistorte", es: "Postre: tarta helada",
    ru: "Десерт: торт-мороженое", ar: "حلوى: كعكة الآيس كريم",
    fa: "دسر: کیک با بستنی", fr: "Dessert : gâteau glacé", it: "Dolce: torta gelato", zh: "甜点:冰淇淋蛋糕", id: "Pencuci mulut: kue es krim", ms: "Pencuci mulut: kek aiskrim", pl: "Deser: ciasto lodowe", bg: "Десерт: торта със сладолед", ro: "Desert: tort cu înghețată", uk: "Десерт: морозивний торт", ja: "デザート：アイスクリームケーキ", ko: "디저트: 아이스크림 케이크", hi: "मिठाई: आइसक्रीम केक", ur: "ڈیزرٹ: آئس کریم کیک"
  },
  "dinner.std.item5": {
    en: "Unlimited soft drinks (water, cola, juice)", tr: "Sınırsız meşrubat (su, kola, meyve suyu)",
    de: "Unbegrenzte Softdrinks (Wasser, Cola, Saft)", es: "Refrescos ilimitados (agua, cola, zumo)",
    ru: "Безлимитные безалкогольные напитки (вода, кола, сок)", ar: "مشروبات غازية غير محدودة (ماء، كولا، عصير)",
    fa: "نوشیدنی‌های بدون‌الکل نامحدود (آب، نوشابه، آب‌میوه)", fr: "Boissons non alcoolisées à volonté (eau, cola, jus)", it: "Bevande analcoliche illimitate (acqua, cola, succhi)", zh: "无限畅饮软饮(水、可乐、果汁)", id: "Minuman ringan tanpa batas (air, cola, jus)", ms: "Minuman ringan tanpa had (air, kola, jus)", pl: "Nieograniczone napoje bezalkoholowe (woda, cola, sok)", bg: "Неограничени безалкохолни напитки (вода, кола, сок)", ro: "Băuturi răcoritoare nelimitate (apă, cola, suc)", uk: "Безлімітні безалкогольні напої (вода, кола, сік)", ja: "ソフトドリンク飲み放題（お水、コーラ、ジュース）", ko: "무제한 소프트 드링크 (생수, 콜라, 주스)", hi: "असीमित सॉफ्ट ड्रिंक्स (पानी, कोला, जूस)", ur: "لامحدود سافٹ ڈرنکس (پانی، کولا، جوس)"
  },
  "dinner.std.item6": {
    en: "Whirling Dervish show, 5 folk dances, belly dance, live music & DJ", tr: "Sema gösterisi, 5 halk dansı, oryantal dans, canlı müzik ve DJ",
    de: "Derwisch-Show, 5 Volkstänze, Bauchtanz, Livemusik & DJ", es: "Show de derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ",
    ru: "Шоу дервишей, 5 народных танцев, танец живота, живая музыка и DJ", ar: "عرض الدراويش، 5 رقصات شعبية، رقص شرقي، موسيقى حية و DJ",
    fa: "نمایش سماع، ۵ رقص محلی، رقص شرقی، موسیقی زنده و دی‌جی", fr: "Spectacle du derviche tourneur, 5 danses folkloriques, danse orientale, musique live & DJ", it: "Spettacolo dei Dervisci Rotanti, 5 danze folkloristiche, danza orientale, musica dal vivo e DJ", zh: "旋转舞表演、5种民族舞、肚皮舞、现场音乐与DJ", id: "Pertunjukan Darwis Berputar, 5 tarian rakyat, tari oriental, musik langsung & DJ", ms: "Persembahan Darwish Berputar, 5 tarian rakyat, tarian oryantal, muzik langsung & DJ", pl: "Pokaz wirującego derwisza, 5 tańców ludowych, taniec brzucha, muzyka na żywo i DJ", bg: "Шоу с танцуващи дервиши, 5 фолклорни танца, танц на корема, музика на живо и DJ", ro: "Spectacol Derviș Rotitor, 5 dansuri populare, dans oriental, muzică live și DJ", uk: "Шоу крутних дервішів, 5 народних танців, танець живота, жива музика та DJ", ja: "メヴレヴィー旋舞ショー、民族舞踊5種、ベリーダンス、生演奏、DJ", ko: "메블라나 쇼, 5가지 민속 무용, 벨리댄스, 라이브 음악 & DJ", hi: "व्हर्लिंग दरवेश शो, 5 लोक नृत्य, बेली डांस, लाइव संगीत और DJ", ur: "وِرلنگ درویش شو، 5 لوک رقص، بیلی ڈانس، لائیو میوزک اور DJ"
  },
  "dinner.std.item7": {
    en: "Open-air deck & panoramic viewing terrace",
    tr: "Açık güverte ve panoramik seyir terası",
    de: "Open-Air-Deck und Panoramaterrasse",
    es: "Cubierta al aire libre y terraza panorámica",
    ru: "Открытая палуба и панорамная терраса",
    ar: "سطح مكشوف وشرفة بانورامية",
    fa: "عرشه باز و تراس نمای پانوراما", fr: "Pont extérieur & terrasse panoramique", it: "Ponte all'aperto e terrazza panoramica", zh: "露天甲板与全景观景露台", id: "Dek terbuka & teras pemandangan panorama", ms: "Dek terbuka & teres pemandangan panoramik", pl: "Otwarty pokład i panoramiczny taras widokowy", bg: "Открита палуба и панорамна тераса", ro: "Punte deschisă și terasă panoramică", uk: "Відкрита палуба та панорамна оглядова тераса", ja: "オープンエアデッキ&パノラマ展望テラス", ko: "야외 데크 & 파노라마 전망 테라스", hi: "ओपन-एयर डेक और पैनोरमिक व्यूइंग टेरेस", ur: "اوپن ایئر ڈیک اور پینورامک ویونگ ٹیرس"
  },
  "dinner.vip.item1": {
    en: "15+ varieties of Turkish meze, served as a traditional spread", tr: "15+ çeşit Türk mezesi, geleneksel serpme olarak servis",
    de: "15+ Sorten türkische Meze, traditionell serviert", es: "15+ variedades de meze turco, servido como spread tradicional",
    ru: "15+ видов турецких мезе, поданных в традиционном стиле", ar: "15+ نوع من المقبلات التركية، تقدم بأسلوب تقليدي",
    fa: "۱۵+ نوع مزه ترکی، به‌صورت سفره سنتی سرو می‌شود", fr: "15+ variétés de mezzés turcs, servis en partage traditionnel", it: "15+ varietà di meze turchi, serviti come tradizionale banchetto", zh: "15+种土耳其冷盘,以传统拼盘方式呈现", id: "15+ jenis meze Turki, disajikan sebagai hamparan tradisional", ms: "15+ jenis meze Turki, dihidangkan sebagai hidangan tradisional", pl: "15+ rodzajów tureckich mezze, serwowane jako tradycyjny serpme", bg: "15+ вида турски мезета, сервирани като традиционно плато", ro: "15+ sortimente de mezeluri turcești, servite ca șir tradițional", uk: "Понад 15 видів турецьких мезе, подаються у традиційному стилі", ja: "トルコ風メゼ15種以上、伝統的なスタイルでご提供", ko: "15가지 이상의 터키식 메제, 전통 스타일로 제공", hi: "15+ प्रकार के तुर्की मेज़े, पारंपरिक प्रसार के रूप में परोसे गए", ur: "ترکی میزے کی 15+ اقسام، روایتی انداز میں پیش کی جاتی ہیں"
  },
  "dinner.vip.item2": {
    en: "Warm appetizer: paçanga börek (beef pastırma & kashar cheese)", tr: "Ara sıcak: paçanga böreği (dana pastırması ve kaşar peyniri)",
    de: "Warme Vorspeise: Paçanga Börek (Rinder-Pastirma & Kashar-Käse)", es: "Entrante caliente: paçanga börek (pastırma de ternera y queso kashar)",
    ru: "Горячая закуска: пачанга бёрек (говяжья пастырма и сыр кашар)", ar: "مقبلات ساخنة: باچانغا بوريك (بسطرمة بقرية وجبن قشقوان)",
    fa: "پیش‌غذای گرم: پاچانگا بورِگی (پاسترمای گوساله و پنیر کاشار)", fr: "Entrée chaude : paçanga böreği (pastırma de bœuf & kashar)", it: "Antipasto caldo: paçanga börek (pastırma di manzo e formaggio kashar)", zh: "热前菜:帕尚加酥卷(牛肉帕斯特玛与卡沙尔奶酪)", id: "Hidangan pembuka hangat: paçanga börek (pastırma sapi & keju kashar)", ms: "Pembuka selera panas: paçanga börek (pastırma daging lembu & keju kashar)", pl: "Ciepła przystawka: paçanga böreği (wołowa pastırma i ser kashar)", bg: "Топло предястие: пачанга бюрек (говежди пастърма и кашкавал)", ro: "Aperitiv cald: paçanga börek (pastırma de vită și cașcaval kashar)", uk: "Тепла закуска: пачанга бюрек (яловича пастирма та сир кашар)", ja: "温前菜：パチャンガ・ボレック（牛肉のパストゥルマ&カシャールチーズ）", ko: "따뜻한 애피타이저: 파창아 뵈렉 (소고기 파스트르마 & 카샤르 치즈)", hi: "गरम ऐपेटाइज़र: पाचंगा बोरेक (बीफ पस्तुर्मा और कशर चीज़)", ur: "گرم اپیٹائزر: پاچانگا بوریک (بیف پاسترما اور کشر چیز)"
  },
  "dinner.vip.item3": {
    en: "Main course (with seasonal salad, choose one): salmon, sea bream, chicken, meatball, beef tenderloin, rib-eye, or vegetarian platter (falafel, roasted potatoes, bulgur pilaf, stewed vegetables & onion rings)",
    tr: "Ana yemek (mevsim salatasıyla birlikte, birini seçin): somon, çipura, tavuk, köfte, dana bonfile, antrikot veya vejetaryen tabağı (falafel, patates tavası, bulgur pilavı, sebze ve soğan halkası)",
    de: "Hauptgang (mit Saisonsalat, Auswahl): Lachs, Dorade, Hähnchen, Köfte, Rinderfilet, Rib-Eye oder vegetarischer Teller (Falafel, geröstete Kartoffeln, Bulgur-Pilaw, geschmortes Gemüse & Zwiebelringe)",
    es: "Plato principal (con ensalada de temporada, elija uno): salmón, dorada, pollo, albóndigas, solomillo de ternera, chuletón o plato vegetariano (falafel, patatas asadas, pilaf de bulgur, verduras estofadas y aros de cebolla)",
    ru: "Основное блюдо (с сезонным салатом, на выбор): лосось, дорада, курица, фрикадельки, говяжья вырезка, рибай или вегетарианская тарелка (фалафель, жареный картофель, плов булгур, тушёные овощи и луковые кольца)",
    ar: "طبق رئيسي (مع سلطة موسمية، اختر واحد): سلمون، دنيس، دجاج، كفتة، فيليه لحم بقري، ريب آي أو طبق نباتي (فلافل، بطاطا مقلية، بلغر، خضروات مطبوخة وحلقات بصل)",
    fa: "غذای اصلی (با سالاد فصلی، یکی را انتخاب کنید): سالمون، شانک، مرغ، کوفته، فیله گوساله، راسته یا سینی گیاه‌خواری (فلافل، سیب‌زمینی برشته، پلو بلغور، خورش سبزیجات و حلقه‌های پیاز)", fr: "Plat principal (avec salade de saison, au choix) : saumon, dorade, poulet, köfte, filet de bœuf, entrecôte ou plateau végétarien (falafel, pommes de terre rôties, pilaf de boulgour, légumes mijotés & rondelles d'oignon)", it: "Secondo (con insalata di stagione, a scelta): salmone, orata, pollo, köfte, filetto di manzo, costata o piatto vegetariano (falafel, patate arrosto, pilaf di bulgur, verdure stufate e anelli di cipolla)", zh: "主菜(配时令沙拉,任选一款):三文鱼、鲷鱼、鸡肉、肉丸、牛里脊、肋眼或素食拼盘(法拉费、烤土豆、布格麦饭、炖蔬菜与洋葱圈)", id: "Menu utama (dengan salad musiman, pilih satu): salmon, sea bream, ayam, köfte, tenderloin sapi, rib-eye, atau piring vegetarian (falafel, kentang panggang, pilaf bulgur, sayuran rebus & cincin bawang)", ms: "Hidangan utama (dengan salad bermusim, pilih satu): salmon, sea bream, ayam, köfte, fillet daging lembu, rib-eye atau pinggan vegetarian (falafel, kentang panggang, nasi bulgur, sayur rebus & cincin bawang)", pl: "Danie główne (z sezonową sałatką, do wyboru): łosoś, dorada, kurczak, kotlety, polędwica wołowa, antrykot lub półmisek wegetariański (falafel, pieczone ziemniaki, pilaw bulgur, warzywa duszone i krążki cebulowe)", bg: "Основно ястие (със сезонна салата, избор на едно): сьомга, ципура, пиле, кюфте, телешко бонфиле, антрекот или вегетарианско плато (фалафел, печени картофи, булгурен пилаф, задушени зеленчуци и лукови кръгчета)", ro: "Fel principal (cu salată de sezon, alegeți unul): somon, dorado, pui, chiftele, mușchi de vită, antricot sau platou vegetarian (falafel, cartofi copți, pilaf de bulgur, legume înăbușite și rondele de ceapă)", uk: "Основна страва (з сезонним салатом, на вибір): лосось, дорада, курка, котлета, яловича вирізка, рібай або вегетаріанське плато (фалафель, запечена картопля, булгур-пілав, тушковані овочі та цибульні кільця)", ja: "メインディッシュ（季節のサラダ付き、1品お選びください）：サーモン、鯛、チキン、ミートボール、牛フィレ肉、リブアイ、またはベジタリアンプレート（ファラフェル、ローストポテト、ブルグルピラフ、野菜の煮込み、オニオンリング）", ko: "메인 요리 (계절 샐러드 포함, 하나 선택): 연어, 도미, 치킨, 미트볼, 소고기 안심, 립아이, 또는 베지테리안 플래터 (팔라펠, 구운 감자, 불구르 필라프, 찐 야채 & 어니언 링)", hi: "मुख्य व्यंजन (मौसमी सलाद के साथ, एक चुनें): सैल्मन, सी ब्रीम, चिकन, मीटबॉल, बीफ टेंडरलॉइन, रिब-आई, या शाकाहारी थाली (फलाफेल, रोस्टेड आलू, बुलगुर पिलाफ, स्टीव्ड सब्जियां और प्याज के छल्ले)", ur: "مین کورس (سیزنل سلاد کے ساتھ، ایک منتخب کریں): سالمن، سی بریم، چکن، میٹ بال، بیف ٹینڈرلوئن، رِب آئی، یا سبزی خور پلیٹر (فلافل، روسٹڈ آلو، بلغور پلاؤ، سٹیود سبزیاں اور پیاز کے رنگز)"
  },
  "dinner.vip.item4": {
    en: "Dessert: ice cream cake", tr: "Tatlı: dondurmalı pasta",
    de: "Dessert: Eistorte", es: "Postre: tarta helada",
    ru: "Десерт: торт-мороженое", ar: "حلوى: كعكة الآيس كريم",
    fa: "دسر: کیک با بستنی", fr: "Dessert : gâteau glacé", it: "Dolce: torta gelato", zh: "甜点:冰淇淋蛋糕", id: "Pencuci mulut: kue es krim", ms: "Pencuci mulut: kek aiskrim", pl: "Deser: ciasto lodowe", bg: "Десерт: торта със сладолед", ro: "Desert: tort cu înghețată", uk: "Десерт: морозивний торт", ja: "デザート：アイスクリームケーキ", ko: "디저트: 아이스크림 케이크", hi: "मिठाई: आइसक्रीम केक", ur: "میٹھا: آئس کریم کیک"
  },
  "dinner.vip.item5": {
    en: "Unlimited soft drinks (water, cola, juice)", tr: "Sınırsız meşrubat (su, kola, meyve suyu)",
    de: "Unbegrenzte Softdrinks (Wasser, Cola, Saft)", es: "Refrescos ilimitados (agua, cola, zumo)",
    ru: "Безлимитные безалкогольные напитки (вода, кола, сок)", ar: "مشروبات غازية غير محدودة (ماء، كولا، عصير)",
    fa: "نوشیدنی‌های بدون‌الکل نامحدود (آب، نوشابه، آب‌میوه)", fr: "Boissons non alcoolisées à volonté (eau, cola, jus)", it: "Bevande analcoliche illimitate (acqua, cola, succhi)", zh: "无限畅饮软饮(水、可乐、果汁)", id: "Minuman ringan tanpa batas (air, cola, jus)", ms: "Minuman ringan tanpa had (air, kola, jus)", pl: "Nieograniczone napoje bezalkoholowe (woda, cola, sok)", bg: "Неограничени безалкохолни напитки (вода, кола, сок)", ro: "Băuturi răcoritoare nelimitate (apă, cola, suc)", uk: "Безлімітні безалкогольні напої (вода, кола, сік)", ja: "ソフトドリンク飲み放題（お水、コーラ、ジュース）", ko: "무제한 소프트 드링크 (생수, 콜라, 주스)", hi: "असीमित सॉफ्ट ड्रिंक्स (पानी, कोला, जूस)", ur: "غیر محدود سافٹ ڈرنکس (پانی، کولا، جوس)"
  },
  "dinner.vip.item6": {
    en: "Whirling Dervish show, 5 folk dances, belly dance, live music & DJ", tr: "Sema gösterisi, 5 halk dansı, oryantal dans, canlı müzik ve DJ",
    de: "Derwisch-Show, 5 Volkstänze, Bauchtanz, Livemusik & DJ", es: "Show de derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ",
    ru: "Шоу дервишей, 5 народных танцев, танец живота, живая музыка и DJ", ar: "عرض الدراويش، 5 رقصات شعبية، رقص شرقي، موسيقى حية و DJ",
    fa: "نمایش سماع، ۵ رقص محلی، رقص شرقی، موسیقی زنده و دی‌جی", fr: "Spectacle du derviche tourneur, 5 danses folkloriques, danse orientale, musique live & DJ", it: "Spettacolo dei Dervisci Rotanti, 5 danze folkloristiche, danza orientale, musica dal vivo e DJ", zh: "旋转舞表演、5种民族舞、肚皮舞、现场音乐与DJ", id: "Pertunjukan Darwis Berputar, 5 tarian rakyat, tari oriental, musik langsung & DJ", ms: "Persembahan Darwish Berputar, 5 tarian rakyat, tarian oryantal, muzik langsung & DJ", pl: "Pokaz wirującego derwisza, 5 tańców ludowych, taniec brzucha, muzyka na żywo i DJ", bg: "Шоу с танцуващи дервиши, 5 фолклорни танца, танц на корема, музика на живо и DJ", ro: "Spectacol Derviș Rotitor, 5 dansuri populare, dans oriental, muzică live și DJ", uk: "Шоу крутних дервішів, 5 народних танців, танець живота, жива музика & діджей", ja: "旋回舞踊、民族舞踊5種、ベリーダンス、生演奏＆DJ", ko: "회전 데르비시 쇼, 5가지 민속 무용, 벨리 댄스, 라이브 음악 & DJ", hi: "व्हर्लिंग दरवेश शो, 5 लोक नृत्य, बेली डांस, लाइव म्यूज़िक और DJ", ur: "وَرلنگ درویش شو، 5 لوک رقص، بیلی ڈانس، لائیو میوزک اور DJ"
  },
  "dinner.vip.item7": {
    en: "Open-air deck & panoramic viewing terrace",
    tr: "Açık güverte ve panoramik seyir terası",
    de: "Open-Air-Deck und Panoramaterrasse",
    es: "Cubierta al aire libre y terraza panorámica",
    ru: "Открытая палуба и панорамная терраса",
    ar: "سطح مكشوف وشرفة بانورامية",
    fa: "عرشه باز و تراس نمای پانوراما", fr: "Pont extérieur & terrasse panoramique", it: "Ponte all'aperto e terrazza panoramica", zh: "露天甲板与全景观景露台", id: "Dek terbuka & teras pemandangan panorama", ms: "Dek terbuka & teres pemandangan panoramik", pl: "Otwarty pokład i panoramiczny taras widokowy", bg: "Открита палуба и панорамна тераса", ro: "Punte deschisă și terasă panoramică", uk: "Відкрита палуба & панорамна оглядова тераса", ja: "オープンデッキ＆パノラマ展望テラス", ko: "야외 데크 & 파노라마 전망 테라스", hi: "ओपन-एयर डेक और पैनोरमिक व्यूइंग टेरेस", ur: "کھلی ہوا والی ڈیک اور پینورامک دیکھنے کی چھت"
  },
  "dinner.perPerson": {
    en: " / person", tr: " / kişi", de: " / Person", es: " / persona",
    ru: " / чел.", ar: " / شخص",
    fa: " / نفر", fr: " / personne", it: " / persona", zh: "／人", id: " / orang", ms: " / orang", pl: " / osoba", bg: " / човек", ro: " / persoană", uk: " / особа", ja: " / お一人様", ko: " / 1인", hi: " / प्रति व्यक्ति", ur: " / فی شخص"
  },
  "dinner.optionalLabel": {
    en: "Optional Add-ons", tr: "Eklenebilir Seçenekler", de: "Optionale Extras", es: "Complementos Opcionales",
    ru: "Дополнительные опции", ar: "إضافات اختيارية",
    fa: "افزودنی‌های اختیاری", fr: "Options supplémentaires", it: "Extra opzionali", zh: "可选附加项", id: "Tambahan Opsional", ms: "Tambahan Pilihan", pl: "Dodatki opcjonalne", bg: "Опционални добавки", ro: "Suplimente Opționale", uk: "Додаткові опції", ja: "オプション追加", ko: "선택 가능한 추가 옵션", hi: "वैकल्पिक ऐड-ऑन्स", ur: "اختیاری اضافے"
  },
  "dinner.addAlcoholTitle": {
    en: "Alcohol Package: +€{p.unlimited}/person", tr: "Alkol Paketi: +€{p.unlimited}/kişi", de: "Alkoholpaket: +€{p.unlimited}/Person", es: "Paquete Alcohol: +€{p.unlimited}/persona",
    ru: "Пакет алкоголя: +€{p.unlimited}/чел.", ar: "باقة كحول: +€{p.unlimited}/شخص",
    fa: "پکیج الکل: +€{p.unlimited}/نفر", fr: "Forfait alcool : +€{p.unlimited}/personne", it: "Pacchetto alcolico: +€{p.unlimited}/persona", zh: "酒水套餐:+€{p.unlimited}／人", id: "Paket Alkohol: +€{p.unlimited}/orang", ms: "Pakej Alkohol: +€{p.unlimited}/orang", pl: "Pakiet alkoholowy: +€{p.unlimited}/osobę", bg: "Алкохолен пакет: +€{p.unlimited}/човек", ro: "Pachet Alcool: +€{p.unlimited}/persoană", uk: "Алкогольний пакет: +€{p.unlimited}/особа", ja: "アルコールパッケージ：+€{p.unlimited}/お一人様", ko: "주류 패키지: +€{p.unlimited}/1인", hi: "अल्कोहल पैकेज: +€{p.unlimited}/प्रति व्यक्ति", ur: "الکحل پیکیج: +€{p.unlimited}/فی شخص"
  },
  "dinner.addAlcoholDesc": {
    en: "Unlimited local wine, beer, rakı, vodka, gin", tr: "Sınırsız yerli şarap, bira, rakı, votka, cin",
    de: "Unbegrenzt Wein, Bier, Raki, Wodka, Gin", es: "Vino local, cerveza, rakı, vodka, gin ilimitados",
    ru: "Безлимитное местное вино, пиво, ракы, водка, джин", ar: "نبيذ محلي، بيرة، راكي، فودكا، جن بلا حدود",
    fa: "شراب، آبجو، راکی، ودکا و جین داخلی نامحدود", fr: "Vin local, bière, rakı, vodka, gin à volonté", it: "Vino locale, birra, rakı, vodka, gin illimitati", zh: "无限畅饮本地葡萄酒、啤酒、拉克酒、伏特加、金酒", id: "Anggur lokal tanpa batas, bir, rakı, vodka, gin", ms: "Wain tempatan tanpa had, bir, rakı, vodka, gin", pl: "Nieograniczone lokalne wino, piwo, rakı, wódka, gin", bg: "Неограничено местно вино, бира, ракъ, водка, джин", ro: "Vin, bere, rachiu, vodcă, gin local nelimitat", uk: "Безлімітні місцеві вино, пиво, ракі, горілка, джин", ja: "地元産ワイン、ビール、ラク、ウォッカ、ジン飲み放題", ko: "무제한 현지 와인, 맥주, 라크, 보드카, 진", hi: "असीमित स्थानीय वाइन, बीयर, राकी, वोदका, जिन", ur: "غیر محدود مقامی وائن، بیئر، راکی، ووڈکا، جن"
  },
  "dinner.addTransferTitle": {
    en: "Hotel Transfer: +€{p.transfer}/person", tr: "Otel Transferi: +€{p.transfer}/kişi", de: "Hoteltransfer: +€{p.transfer}/Person", es: "Traslado Hotel: +€{p.transfer}/persona",
    ru: "Трансфер из отеля: +€{p.transfer}/чел.", ar: "نقل فندقي: +€{p.transfer}/شخص",
    fa: "ترانسفر هتل: +€{p.transfer}/نفر", fr: "Transfert d'hôtel : +€{p.transfer}/personne", it: "Transfer dall'hotel: +€{p.transfer}/persona", zh: "酒店接送:+€{p.transfer}／人", id: "Antar-jemput Hotel: +€{p.transfer}/orang", ms: "Pemindahan Hotel: +€{p.transfer}/orang", pl: "Transfer z hotelu: +€{p.transfer}/osobę", bg: "Хотелски трансфер: +€{p.transfer}/човек", ro: "Transfer de la Hotel: +€{p.transfer}/persoană", uk: "Трансфер з готелю: +€{p.transfer}/особа", ja: "ホテル送迎：+€{p.transfer}/お一人様", ko: "호텔 픽업: +€{p.transfer}/1인", hi: "होटल ट्रांसफर: +€{p.transfer}/प्रति व्यक्ति", ur: "ہوٹل ٹرانسفر: +€{p.transfer}/فی شخص"
  },
  "dinner.addTransferDesc": {
    en: "Pickup & drop-off from your hotel", tr: "Otelinizden alınır ve bırakılır",
    de: "Abholung & Rückfahrt von Ihrem Hotel", es: "Recogida y regreso desde su hotel",
    ru: "Заберём и отвезём обратно в ваш отель", ar: "التقاط وتوصيل من فندقك",
    fa: "رفت و برگشت از هتل شما", fr: "Prise en charge & dépose depuis votre hôtel", it: "Prelievo e riconsegna dal Suo hotel", zh: "从您的酒店接送", id: "Penjemputan & pengantaran dari hotel Anda", ms: "Ambil & hantar dari hotel anda", pl: "Odbiór i odwiezienie z hotelu", bg: "Вземане и връщане от хотела", ro: "Preluare și ducere de la hotelul dumneavoastră", uk: "Зустріч і доставка з Вашого готелю", ja: "ご宿泊先ホテルからの往復送迎", ko: "호텔 픽업 및 복귀 서비스", hi: "आपके होटल से पिकअप और ड्रॉप-ऑफ", ur: "آپ کے ہوٹل سے پک اپ اور ڈراپ آف"
  },
  "dinner.addRomanticTitle": {
    en: "Romantic Table: +€{p.romantic}/table", tr: "Romantik Masa: +€{p.romantic}/masa", de: "Romantik-Tisch: +€{p.romantic}/Tisch", es: "Mesa Romántica: +€{p.romantic}/mesa",
    ru: "Романтический стол: +€{p.romantic}/стол", ar: "طاولة رومانسية: +€{p.romantic}/طاولة",
    fa: "میز رمانتیک: +€{p.romantic}/میز", fr: "Table romantique : +€{p.romantic}/table", it: "Tavolo romantico: +€{p.romantic}/tavolo", zh: "浪漫餐桌:+€{p.romantic}／桌", id: "Meja Romantis: +€{p.romantic}/meja", ms: "Meja Romantik: +€{p.romantic}/meja", pl: "Stół romantyczny: +€{p.romantic}/stół", bg: "Романтична маса: +€{p.romantic}/маса", ro: "Masă Romantică: +€{p.romantic}/masă", uk: "Романтичний столик: +€{p.romantic}/столик", ja: "ロマンティックテーブル：+€{p.romantic}/テーブル", ko: "로맨틱 테이블: +€{p.romantic}/테이블당", hi: "रोमांटिक टेबल: +€{p.romantic}/प्रति टेबल", ur: "رومانوی ٹیبل: +€{p.romantic}/ٹیبل"
  },
  "dinner.addRomanticDesc": {
    en: "Candles, flowers & special setup", tr: "Mumlar, çiçekler ve özel düzenleme",
    de: "Kerzen, Blumen & besondere Deko", es: "Velas, flores y decoración especial",
    ru: "Свечи, цветы и особое оформление", ar: "شموع وزهور وترتيب خاص",
    fa: "شمع، گل و چیدمان ویژه", fr: "Bougies, fleurs & décoration spéciale", it: "Candele, fiori e allestimento speciale", zh: "蜡烛、鲜花与特别布置", id: "Lilin, bunga & pengaturan khusus", ms: "Lilin, bunga & susunan istimewa", pl: "Świece, kwiaty i specjalna aranżacja", bg: "Свещи, цветя и специална украса", ro: "Lumânări, flori și aranjament special", uk: "Свічки, квіти & спеціальне оформлення", ja: "キャンドル、お花、特別セッティング", ko: "캔들, 꽃 & 특별 세팅", hi: "मोमबत्तियाँ, फूल और विशेष सजावट", ur: "موم بتیاں، پھول اور خاص انتظامات"
  },
  "dinner.mostPopular": {
    en: "Most Popular", tr: "En Popüler", de: "Beliebteste", es: "Más Popular",
    ru: "Самый популярный", ar: "الأكثر شعبية",
    fa: "محبوب‌ترین", fr: "Le plus populaire", it: "Più Popolare", zh: "最受欢迎", id: "Paling Populer", ms: "Paling Popular", pl: "Najpopularniejszy", bg: "Най-популярен", ro: "Cel Mai Popular", uk: "Найпопулярніше", ja: "一番人気", ko: "가장 인기 있는", hi: "सबसे लोकप्रिय", ur: "سب سے زیادہ مقبول"
  },
  "dinner.bookBtn": {
    en: "Book Now", tr: "Rezervasyon Yaptır", de: "Jetzt Buchen", es: "Reservar Ahora",
    ru: "Забронировать", ar: "احجز الآن",
    fa: "همین حالا رزرو کنید", fr: "Réserver", it: "Prenota ora", zh: "立即预订", id: "Pesan Sekarang", ms: "Tempah Sekarang", pl: "Zarezerwuj teraz", bg: "Резервирайте сега", ro: "Rezervați Acum", uk: "Забронювати зараз", ja: "今すぐ予約", ko: "지금 예약하기", hi: "अभी बुक करें", ur: "ابھی بک کریں"
  },

  // ========== COMPARISON TABLE (STD vs VIP) ==========
  "compare.title": {
    en: "Compare Standard vs VIP — full feature breakdown",
    tr: "Standard ve VIP karşılaştırma — tüm özellikler",
    de: "Standard vs. VIP — vollständiger Vergleich",
    es: "Comparar Estándar vs VIP — desglose completo",
    ru: "Сравнить Стандарт и VIP — полный список",
    ar: "قارن العادي مع VIP — تفصيل كامل",
    fa: "مقایسه استاندارد و VIP — جزئیات کامل",
    fr: "Comparer Standard vs VIP — détail complet",
    it: "Confronta Standard e VIP — dettagli completi",
    zh: "标准与VIP对比 — 完整功能详情",
    id: "Bandingkan Standar vs VIP — rincian lengkap",
    ms: "Bandingkan Standard vs VIP — perincian penuh",
    pl: "Porównaj Standard i VIP — pełne zestawienie",
    bg: "Сравнение Стандарт срещу VIP — пълно сравнение",
    ro: "Comparați Standard și VIP — detalii complete", uk: "Порівняння Standard та VIP — повний огляд можливостей", ja: "スタンダードとVIPの比較 — 全機能の詳細", ko: "스탠다드 vs VIP 비교 — 전체 기능 상세 안내", hi: "स्टैंडर्ड बनाम VIP की तुलना करें — पूर्ण विशेषताओं का विवरण", ur: "سٹینڈرڈ اور VIP کا موازنہ — مکمل خصوصیات کی تفصیل"
  },
  "compare.featureLabel": {
    en: "Feature", tr: "Özellik", de: "Merkmal", es: "Característica",
    ru: "Особенность", ar: "الميزة", fa: "ویژگی", fr: "Caractéristique",
    it: "Caratteristica", zh: "功能", id: "Fitur", ms: "Ciri",
    pl: "Cecha", bg: "Характеристика", ro: "Caracteristică", uk: "Характеристика", ja: "項目", ko: "기능", hi: "विशेषता", ur: "خصوصیت"
  },
  "compare.std": {
    en: "Standard", tr: "Standard", de: "Standard", es: "Estándar",
    ru: "Стандарт", ar: "العادي", fa: "استاندارد", fr: "Standard",
    it: "Standard", zh: "标准", id: "Standar", ms: "Standard",
    pl: "Standard", bg: "Стандарт", ro: "Standard", uk: "Standard", ja: "スタンダード", ko: "스탠다드", hi: "स्टैंडर्ड", ur: "سٹینڈرڈ"
  },
  "compare.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP",
    pl: "VIP", bg: "VIP", ro: "VIP", uk: "VIP", ja: "VIP", ko: "VIP", hi: "VIP", ur: "VIP"
  },
  "compare.duration": {
    en: "Duration", tr: "Süre", de: "Dauer", es: "Duración",
    ru: "Продолжительность", ar: "المدة", fa: "مدت زمان", fr: "Durée",
    it: "Durata", zh: "时长", id: "Durasi", ms: "Tempoh",
    pl: "Czas trwania", bg: "Продължителност", ro: "Durată", uk: "Тривалість", ja: "所要時間", ko: "소요 시간", hi: "अवधि", ur: "دورانیہ"
  },
  "compare.durationVal": {
    en: "3 hours · 20:30 departure from Kabataş",
    tr: "3 saat · Kabataş'tan 20:30 kalkış",
    de: "3 Stunden · 20:30 Abfahrt ab Kabataş",
    es: "3 horas · salida 20:30 desde Kabataş",
    ru: "3 часа · отправление в 20:30 от Кабаташ",
    ar: "3 ساعات · انطلاق الساعة 20:30 من كاباتاش",
    fa: "۳ ساعت · حرکت ساعت ۲۰:۳۰ از کاباتاش",
    fr: "3 heures · départ 20h30 de Kabataş",
    it: "3 ore · partenza ore 20:30 da Kabataş",
    zh: "3小时 · 20:30从卡巴塔什出发",
    id: "3 jam · berangkat pukul 20:30 dari Kabataş",
    ms: "3 jam · bertolak 20:30 dari Kabataş",
    pl: "3 godziny · odjazd o 20:30 z Kabataş",
    bg: "3 часа · тръгване в 20:30 от Кабаташ",
    ro: "3 ore · plecare 20:30 din Kabataş", uk: "3 години · відправлення о 20:30 з Kabataş", ja: "3時間 · Kabataşより20:30出航", ko: "3시간 · Kabataş에서 20:30 출발", hi: "3 घंटे · 20:30 पर Kabataş से प्रस्थान", ur: "3 گھنٹے · 20:30 پر Kabataş سے روانگی"
  },
  "compare.meze": {
    en: "Meze courses", tr: "Meze çeşidi", de: "Meze-Gänge",
    es: "Mezes", ru: "Меззе", ar: "أطباق المازة",
    fa: "مزه‌ها", fr: "Mezzés", it: "Meze",
    zh: "前菜小吃", id: "Hidangan meze", ms: "Hidangan meze",
    pl: "Przystawki meze", bg: "Мезета", ro: "Mezeluri", uk: "Мезе", ja: "メゼ（前菜）", ko: "메제 코스", hi: "मेज़े कोर्सेज़", ur: "مزے کورسز"
  },
  "compare.mezeStd": {
    en: "10 varieties",
    tr: "10 çeşit",
    de: "10 Sorten",
    es: "10 variedades",
    ru: "10 видов",
    ar: "10 أصناف",
    fa: "۱۰ نوع",
    fr: "10 variétés",
    it: "10 varietà",
    zh: "10种",
    id: "10 jenis",
    ms: "10 jenis",
    pl: "10 rodzajów",
    bg: "10 вида",
    ro: "10 sortimente", uk: "10 видів", ja: "10種類", ko: "10가지 종류", hi: "10 प्रकार", ur: "10 اقسام"
  },
  "compare.mezeVip": {
    en: "15+ varieties (premium spread)",
    tr: "15+ çeşit (zengin sofra)",
    de: "15+ Sorten (Premium-Auswahl)",
    es: "15+ variedades (selección premium)",
    ru: "15+ видов (премиум-набор)",
    ar: "15+ صنفا (تشكيلة فاخرة)",
    fa: "+۱۵ نوع (سفره ویژه)",
    fr: "15+ variétés (sélection premium)",
    it: "15+ varietà (selezione premium)",
    zh: "15+种(尊享拼盘)",
    id: "15+ jenis (sajian premium)",
    ms: "15+ jenis (hidangan premium)",
    pl: "15+ rodzajów (wybór premium)",
    bg: "15+ вида (премиум селекция)",
    ro: "15+ sortimente (selecție premium)", uk: "15+ видів (преміум асортимент)", ja: "15種類以上（プレミアム盛り合わせ）", ko: "15가지 이상 종류 (프리미엄 구성)", hi: "15+ प्रकार (प्रीमियम वैरायटी)", ur: "15+ اقسام (پریمیم اسپریڈ)"
  },
  "compare.main": {
    en: "Main course", tr: "Ana yemek", de: "Hauptgericht",
    es: "Plato principal", ru: "Основное блюдо", ar: "الطبق الرئيسي",
    fa: "غذای اصلی", fr: "Plat principal", it: "Portata principale",
    zh: "主菜", id: "Hidangan utama", ms: "Hidangan utama",
    pl: "Danie główne", bg: "Основно ястие", ro: "Fel principal", uk: "Основна страва", ja: "メインディッシュ", ko: "메인 코스", hi: "मुख्य व्यंजन", ur: "مین کورس"
  },
  "compare.mainStd": {
    en: "Salmon, sea bream, chicken, meatball, vegetarian",
    tr: "Somon, çipura, tavuk, köfte, vejetaryen",
    de: "Lachs, Dorade, Hähnchen, Fleischbällchen, vegetarisch",
    es: "Salmón, dorada, pollo, albóndigas, vegetariano",
    ru: "Лосось, дорада, курица, котлеты, вегетарианский",
    ar: "سلمون، دنيس، دجاج، كفتة، نباتي",
    fa: "سالمون، سی‌بریم، مرغ، کوفته، گیاهی",
    fr: "Saumon, dorade, poulet, boulettes, végétarien",
    it: "Salmone, orata, pollo, polpette, vegetariano",
    zh: "三文鱼、鲷鱼、鸡肉、肉丸、素食",
    id: "Salmon, kakap, ayam, bakso, vegetarian",
    ms: "Salmon, ikan dorade, ayam, bebola daging, vegetarian",
    pl: "Łosoś, dorada, kurczak, klopsiki, wegetariańskie",
    bg: "Сьомга, лаврак, пиле, кюфтета, вегетариански",
    ro: "Somon, dorada, pui, chiftele, vegetarian", uk: "Лосось, дорадо, курка, котлети, вегетаріанське", ja: "サーモン、鯛、チキン、ミートボール、ベジタリアン", ko: "연어, 도미, 치킨, 미트볼, 채식 옵션", hi: "सैल्मन, सी ब्रीम, चिकन, मीटबॉल, शाकाहारी", ur: "سالمن، سمندری بریم، چکن، میٹ بال، سبزی خور"
  },
  "compare.mainVip": {
    en: "Standard options + beef tenderloin & rib-eye",
    tr: "Standart seçenekler + dana bonfile ve antrikot",
    de: "Standard-Optionen + Rinderfilet & Rib-Eye",
    es: "Opciones estándar + lomo de res y rib-eye",
    ru: "Стандартные опции + говяжья вырезка и рибай",
    ar: "الخيارات العادية + لحم بقري فيليه ورب آي",
    fa: "گزینه‌های استاندارد + فیله گوساله و ریب‌آی",
    fr: "Options standard + filet de bœuf & faux-filet",
    it: "Opzioni standard + filetto di manzo & costata",
    zh: "标准选项 + 牛里脊和肋眼牛排",
    id: "Pilihan standar + tenderloin sapi & rib-eye",
    ms: "Pilihan standard + tenderloin daging lembu & rib-eye",
    pl: "Opcje standardowe + polędwica wołowa i antrykot",
    bg: "Стандартни опции + говежди филе и рибай",
    ro: "Opțiuni standard + mușchiuleț de vită & rib-eye", uk: "Опції Standard + яловича вирізка & рібай", ja: "スタンダードの選択肢＋牛フィレ肉＆リブアイ", ko: "스탠다드 옵션 + 소고기 안심 & 립아이", hi: "स्टैंडर्ड विकल्प + बीफ टेंडरलॉइन और रिब-आई", ur: "سٹینڈرڈ آپشنز + بیف ٹینڈرلوائن اور رِب آئے"
  },
  "compare.table": {
    en: "Table location", tr: "Masa konumu", de: "Tischposition",
    es: "Ubicación de mesa", ru: "Расположение столика", ar: "موقع الطاولة",
    fa: "موقعیت میز", fr: "Emplacement de la table", it: "Posizione del tavolo",
    zh: "餐桌位置", id: "Lokasi meja", ms: "Lokasi meja",
    pl: "Lokalizacja stolika", bg: "Местоположение на масата", ro: "Locația mesei", uk: "Розташування столика", ja: "テーブル位置", ko: "테이블 위치", hi: "टेबल की स्थिति", ur: "ٹیبل کی جگہ"
  },
  "compare.tableStd": {
    en: "General hall seating",
    tr: "Genel salonda oturma",
    de: "Sitzplatz im allgemeinen Saal",
    es: "Asiento en sala general",
    ru: "Места в общем зале",
    ar: "جلوس في القاعة العامة",
    fa: "نشستن در سالن عمومی",
    fr: "Place dans la salle générale",
    it: "Posto in sala generale",
    zh: "大厅一般座位",
    id: "Tempat duduk aula umum",
    ms: "Tempat duduk dewan umum",
    pl: "Miejsce w sali ogólnej",
    bg: "Седалка в общата зала",
    ro: "Loc în sala generală", uk: "Загальний зал", ja: "一般ホール席", ko: "일반 홀 좌석", hi: "सामान्य हॉल में बैठने की व्यवस्था", ur: "عام ہال میں نشست"
  },
  "compare.tableVip": {
    en: "Premium table near the stage",
    tr: "Sahneye yakın premium masa",
    de: "Premium-Tisch nahe der Bühne",
    es: "Mesa premium cerca del escenario",
    ru: "Премиум-столик у сцены",
    ar: "طاولة فاخرة بالقرب من المسرح",
    fa: "میز ممتاز نزدیک صحنه",
    fr: "Table premium près de la scène",
    it: "Tavolo premium vicino al palco",
    zh: "靠近舞台的尊享餐桌",
    id: "Meja premium dekat panggung",
    ms: "Meja premium berdekatan pentas",
    pl: "Stolik premium przy scenie",
    bg: "Премиум маса близо до сцената",
    ro: "Masă premium lângă scenă", uk: "Преміум столик біля сцени", ja: "ステージ近くのプレミアムテーブル", ko: "무대 근처 프리미엄 테이블", hi: "मंच के पास प्रीमियम टेबल", ur: "اسٹیج کے قریب پریمیم ٹیبل"
  },
  "compare.service": {
    en: "Service style", tr: "Servis tarzı", de: "Service-Stil",
    es: "Estilo de servicio", ru: "Стиль обслуживания", ar: "أسلوب الخدمة",
    fa: "سبک سرویس", fr: "Style de service", it: "Stile di servizio",
    zh: "服务方式", id: "Gaya layanan", ms: "Gaya layanan",
    pl: "Styl obsługi", bg: "Стил на обслужване", ro: "Stil de servire", uk: "Стиль обслуговування", ja: "サービススタイル", ko: "서비스 스타일", hi: "सेवा शैली", ur: "سروس کا انداز"
  },
  "compare.serviceStd": {
    en: "Standard table service",
    tr: "Standart masa servisi",
    de: "Standard-Tischservice",
    es: "Servicio de mesa estándar",
    ru: "Стандартное обслуживание",
    ar: "خدمة طاولة عادية",
    fa: "سرویس میز استاندارد",
    fr: "Service à table standard",
    it: "Servizio al tavolo standard",
    zh: "标准餐桌服务",
    id: "Layanan meja standar",
    ms: "Layanan meja standard",
    pl: "Standardowa obsługa kelnerska",
    bg: "Стандартно обслужване на маса",
    ro: "Serviciu la masă standard", uk: "Стандартне обслуговування столиків", ja: "スタンダードテーブルサービス", ko: "기본 테이블 서비스", hi: "स्टैंडर्ड टेबल सेवा", ur: "معیاری میز کی خدمت"
  },
  "compare.serviceVip": {
    en: "Attentive VIP service",
    tr: "Özenli VIP servis",
    de: "Aufmerksamer VIP-Service",
    es: "Servicio VIP atento",
    ru: "Внимательное VIP-обслуживание",
    ar: "خدمة VIP مميزة",
    fa: "سرویس VIP ویژه",
    fr: "Service VIP attentionné",
    it: "Servizio VIP attento",
    zh: "贴心VIP服务",
    id: "Layanan VIP atensi tinggi",
    ms: "Layanan VIP penuh perhatian",
    pl: "Uważna obsługa VIP",
    bg: "Внимателно VIP обслужване",
    ro: "Serviciu VIP atent", uk: "Уважний VIP-сервіс", ja: "きめ細やかなVIPサービス", ko: "세심한 VIP 서비스", hi: "विशेष VIP सेवा", ur: "خصوصی VIP خدمت"
  },
  "compare.show": {
    en: "Live entertainment", tr: "Canlı gösteri", de: "Live-Unterhaltung",
    es: "Espectáculo en vivo", ru: "Живое выступление", ar: "عرض حي",
    fa: "اجرای زنده", fr: "Spectacle en direct", it: "Spettacolo dal vivo",
    zh: "现场表演", id: "Hiburan langsung", ms: "Persembahan langsung",
    pl: "Występy na żywo", bg: "Шоу на живо", ro: "Spectacol live", uk: "Живі розваги", ja: "ライブエンターテイメント", ko: "라이브 공연", hi: "लाइव मनोरंजन", ur: "براہِ راست تفریحی پروگرام"
  },
  "compare.showVal": {
    en: "Whirling Dervish · 5 folk dances · belly dance · live music · DJ",
    tr: "Mevlana · 5 halk oyunu · oryantal · canlı müzik · DJ",
    de: "Mevlana · 5 Volkstänze · Bauchtanz · Livemusik · DJ",
    es: "Mevlana · 5 danzas folclóricas · danza del vientre · música en vivo · DJ",
    ru: "Мевляна · 5 народных танцев · танец живота · живая музыка · DJ",
    ar: "مولانا · 5 رقصات شعبية · رقص شرقي · موسيقى حية · DJ",
    fa: "مولانا · ۵ رقص محلی · رقص شرقی · موسیقی زنده · DJ",
    fr: "Mevlana · 5 danses folkloriques · danse du ventre · musique live · DJ",
    it: "Mevlana · 5 danze popolari · danza del ventre · musica dal vivo · DJ",
    zh: "梅夫拉那旋转舞 · 5个民间舞蹈 · 肚皮舞 · 现场音乐 · DJ",
    id: "Mevlana · 5 tarian rakyat · tari perut · musik langsung · DJ",
    ms: "Mevlana · 5 tarian rakyat · tarian perut · muzik langsung · DJ",
    pl: "Mevlana · 5 tańców ludowych · taniec brzucha · muzyka na żywo · DJ",
    bg: "Мевляна · 5 народни танца · кючек · музика на живо · DJ",
    ro: "Mevlana · 5 dansuri populare · dans din buric · muzică live · DJ", uk: "Танець дервішів · 5 народних танців · танець живота · жива музика · DJ", ja: "旋回舞踏 · 5つの民族舞踊 · ベリーダンス · 生演奏 · DJ", ko: "Whirling Dervish · 5가지 민속 춤 · 벨리댄스 · 라이브 음악 · DJ", hi: "Whirling Dervish · 5 लोक नृत्य · बेली डांस · लाइव संगीत · DJ", ur: "Whirling Dervish · 5 لوک رقص · بیلی ڈانس · لائیو موسیقی · DJ"
  },
  "compare.drinks": {
    en: "Soft drinks", tr: "Meşrubat", de: "Erfrischungsgetränke",
    es: "Refrescos", ru: "Безалкогольные напитки", ar: "المشروبات الغازية",
    fa: "نوشابه‌ها", fr: "Boissons non alcoolisées", it: "Bibite analcoliche",
    zh: "软饮料", id: "Minuman ringan", ms: "Minuman ringan",
    pl: "Napoje bezalkoholowe", bg: "Безалкохолни напитки", ro: "Băuturi răcoritoare", uk: "Безалкогольні напої", ja: "ソフトドリンク", ko: "음료", hi: "सॉफ्ट ड्रिंक्स", ur: "سافٹ ڈرنکس"
  },
  "compare.drinksVal": {
    en: "Unlimited",
    tr: "Sınırsız",
    de: "Unbegrenzt",
    es: "Ilimitados",
    ru: "Без ограничений",
    ar: "غير محدودة",
    fa: "نامحدود",
    fr: "Illimitées",
    it: "Illimitate",
    zh: "无限畅饮",
    id: "Tak terbatas",
    ms: "Tanpa had",
    pl: "Bez limitu",
    bg: "Неограничени",
    ro: "Nelimitate", uk: "Безлімітно", ja: "飲み放題", ko: "무제한", hi: "असीमित", ur: "لامحدود"
  },
  "compare.payment": {
    en: "Payment", tr: "Ödeme", de: "Zahlung",
    es: "Pago", ru: "Оплата", ar: "الدفع",
    fa: "پرداخت", fr: "Paiement", it: "Pagamento",
    zh: "付款", id: "Pembayaran", ms: "Pembayaran",
    pl: "Płatność", bg: "Плащане", ro: "Plată", uk: "Оплата", ja: "お支払い方法", ko: "결제", hi: "भुगतान", ur: "ادائیگی"
  },
  "compare.paymentVal": {
    en: "Pay on the boat (no prepayment)",
    tr: "Teknede ödeme (ön ödeme yok)",
    de: "Zahlung an Bord (keine Vorauszahlung)",
    es: "Paga en el barco (sin prepago)",
    ru: "Оплата на борту (без предоплаты)",
    ar: "الدفع على متن القارب (بدون دفع مسبق)",
    fa: "پرداخت در قایق (بدون پیش‌پرداخت)",
    fr: "Paiement à bord (sans prépaiement)",
    it: "Pagamento a bordo (nessun prepagamento)",
    zh: "船上付款(无需预付)",
    id: "Bayar di perahu (tanpa pembayaran di muka)",
    ms: "Bayar di atas bot (tiada bayaran pendahuluan)",
    pl: "Płatność na łodzi (bez przedpłaty)",
    bg: "Плащане на лодката (без предплата)",
    ro: "Plata pe vapor (fără plată în avans)", uk: "Оплата на кораблі (без передоплати)", ja: "船上でのお支払い（事前決済不要）", ko: "보트에서 결제 (사전 결제 불필요)", hi: "नाव पर भुगतान करें (कोई अग्रिम भुगतान नहीं)", ur: "کشتی پر ادائیگی کریں (پیشگی ادائیگی نہیں)"
  },
  "compare.cancellation": {
    en: "Cancellation", tr: "İptal", de: "Stornierung",
    es: "Cancelación", ru: "Отмена", ar: "الإلغاء",
    fa: "لغو", fr: "Annulation", it: "Cancellazione",
    zh: "取消政策", id: "Pembatalan", ms: "Pembatalan",
    pl: "Anulacja", bg: "Отказ", ro: "Anulare", uk: "Скасування", ja: "キャンセル", ko: "취소", hi: "रद्दीकरण", ur: "منسوخی"
  },
  "compare.cancellationVal": {
    en: "Free up to 2 hours before departure",
    tr: "Tur saatinden 2 saat öncesine kadar ücretsiz",
    de: "Kostenlos bis 2 Stunden vor Abfahrt",
    es: "Gratis hasta 2 horas antes de la salida",
    ru: "Бесплатно до 2 часов до отправления",
    ar: "مجاني حتى ساعتين قبل الانطلاق",
    fa: "رایگان تا ۲ ساعت قبل از حرکت",
    fr: "Gratuite jusqu'à 2 heures avant le départ",
    it: "Gratuita fino a 2 ore prima della partenza",
    zh: "出发前2小时内免费取消",
    id: "Gratis hingga 2 jam sebelum keberangkatan",
    ms: "Percuma sehingga 2 jam sebelum bertolak",
    pl: "Bezpłatna do 2 godzin przed odjazdem",
    bg: "Безплатно до 2 часа преди тръгване",
    ro: "Gratuită până la 2 ore înainte de plecare", uk: "Безкоштовно до 2 годин до відправлення", ja: "出航の2時間前まで無料キャンセル可", ko: "출발 2시간 전까지 무료 취소", hi: "प्रस्थान से 2 घंटे पहले तक निःशुल्क", ur: "روانگی سے 2 گھنٹے پہلے تک مفت منسوخی"
  },
  "compare.price": {
    en: "Price per person", tr: "Kişi başı fiyat", de: "Preis pro Person",
    es: "Precio por persona", ru: "Цена за человека", ar: "السعر للشخص",
    fa: "قیمت برای هر نفر", fr: "Prix par personne", it: "Prezzo a persona",
    zh: "每人价格", id: "Harga per orang", ms: "Harga setiap orang",
    pl: "Cena za osobę", bg: "Цена на човек", ro: "Preț per persoană", uk: "Ціна на особу", ja: "お一人様料金", ko: "1인당 가격", hi: "प्रति व्यक्ति मूल्य", ur: "فی شخص قیمت"
  },
  "compare.note": {
    en: "All packages depart from Kabataş Pier · TÜRSAB licensed (A-17672)",
    tr: "Tüm paketler Kabataş İskelesi'nden kalkar · TÜRSAB lisanslı (A-17672)",
    de: "Alle Pakete fahren ab Kabataş Pier · TÜRSAB-lizenziert (A-17672)",
    es: "Todos los paquetes salen del muelle de Kabataş · Licencia TÜRSAB (A-17672)",
    ru: "Все пакеты отправляются от причала Кабаташ · Лицензия TÜRSAB (A-17672)",
    ar: "جميع الباقات تنطلق من رصيف كاباتاش · مرخصة من TÜRSAB (A-17672)",
    fa: "همه بسته‌ها از اسکله کاباتاش حرکت می‌کنند · دارای مجوز TÜRSAB (A-17672)",
    fr: "Tous les forfaits partent du quai de Kabataş · Licence TÜRSAB (A-17672)",
    it: "Tutti i pacchetti partono dal molo di Kabataş · Licenza TÜRSAB (A-17672)",
    zh: "所有套餐均从卡巴塔什码头出发 · TÜRSAB持牌(A-17672)",
    id: "Semua paket berangkat dari Dermaga Kabataş · Berlisensi TÜRSAB (A-17672)",
    ms: "Semua pakej bertolak dari Jeti Kabataş · Berlesen TÜRSAB (A-17672)",
    pl: "Wszystkie pakiety odpływają z nabrzeża Kabataş · Licencja TÜRSAB (A-17672)",
    bg: "Всички пакети тръгват от пристана Кабаташ · Лицензиран TÜRSAB (A-17672)",
    ro: "Toate pachetele pleacă din Kabataş Pier · Licențiat TÜRSAB (A-17672)", uk: "Всі пакети відправляються з пірсу Kabataş · Ліцензія TÜRSAB (A-17672)", ja: "全プラン共通：Kabataş桟橋より出航 · TÜRSAB認可取得（A-17672）", ko: "모든 패키지는 Kabataş 부두에서 출발합니다 · TÜRSAB 인증 (A-17672)", hi: "सभी पैकेज Kabataş Pier से प्रस्थान करते हैं · TÜRSAB लाइसेंस प्राप्त (A-17672)", ur: "تمام پیکجز Kabataş Pier سے روانہ ہوتے ہیں · TÜRSAB لائسنس یافتہ (A-17672)"
  },

  // ========== BOOKING COUNT ==========
  "booking.count": {
    en: "guests booked for tonight — join them!",
    tr: "kişi bu akşam için rezervasyon yaptı — siz de katılın!",
    de: "Gäste haben für heute Abend gebucht — seien Sie dabei!",
    es: "personas reservaron para esta noche — ¡únete!",
    ru: "гостей забронировали на сегодня — присоединяйтесь!",
    ar: "ضيف حجزوا لهذه الليلة — انضم إليهم!",
    fa: "مهمان برای امشب رزرو کرده‌اند — شما هم بپیوندید!", fr: "invités réservés pour ce soir — rejoignez-les !", it: "ospiti prenotati per stasera — si unisca a loro!", zh: "位宾客已预订今晚——快加入他们!", id: "tamu memesan untuk malam ini — bergabunglah dengan mereka!", ms: "tetamu menempah untuk malam ini — sertai mereka!", pl: "gości zarezerwowało na dziś — dołącz do nich!", bg: "гости са резервирали за тази вечер — присъединете се към тях!", ro: "oaspeți rezervați pentru seara aceasta — alăturați-vă!", uk: "гостей забронювали на сьогодні — приєднуйтесь до них!", ja: "名様が本日ご予約済みです — ぜひご一緒に！", ko: "명의 고객이 오늘 밤 예약했습니다 — 함께하세요!", hi: "मेहमान आज रात के लिए बुक कर चुके हैं — आप भी शामिल हों!", ur: "مہمانوں نے آج رات کے لیے بکنگ کرائی ہے — آپ بھی شامل ہوں!"
  },

  // ========== COUNTDOWN ==========
  "cd.closes": {
    en: "Tonight's booking closes in:", tr: "Bu geceki rezervasyon kapanışına:",
    de: "Buchung schließt in:", es: "La reserva de esta noche cierra en:",
    ru: "Бронирование на сегодня закрывается через:", ar: "يغلق حجز الليلة خلال:",
    fa: "رزرو امشب بسته می‌شود در:", fr: "Les réservations de ce soir ferment dans :", it: "Le prenotazioni di stasera si chiudono tra:", zh: "今晚预订将在以下时间关闭:", id: "Pemesanan malam ini ditutup dalam:", ms: "Tempahan malam ini ditutup dalam:", pl: "Rezerwacja na dzisiaj kończy się za:", bg: "Резервациите за тази вечер приключват след:", ro: "Rezervarea pentru seara aceasta se închide în:", uk: "Бронювання на сьогодні закривається через:", ja: "本日のご予約締切まで：", ko: "오늘 밤 예약 마감까지:", hi: "आज रात की बुकिंग समाप्त होगी:", ur: "آج رات کی بکنگ بند ہونے میں:"
  },
  "cd.hours": {
    en: "Hours", tr: "Saat", de: "Std", es: "Horas", ru: "Часы", ar: "ساعات",
    fa: "ساعت", fr: "Heures", it: "Ore", zh: "时", id: "Jam", ms: "Jam", pl: "godz.", bg: "часа", ro: "Ore", uk: "Годин", ja: "時間", ko: "시간", hi: "घंटे", ur: "گھنٹے"
  },
  "cd.min": {
    en: "Min", tr: "Dk", de: "Min", es: "Min", ru: "Мин", ar: "دقائق",
    fa: "دقیقه", fr: "Min", it: "Min", zh: "分", id: "Menit", ms: "Min", pl: "min", bg: "мин", ro: "Min", uk: "Хв", ja: "分", ko: "분", hi: "मिनट", ur: "منٹ"
  },
  "cd.sec": {
    en: "Sec", tr: "Sn", de: "Sek", es: "Seg", ru: "Сек", ar: "ثواني",
    fa: "ثانیه", fr: "Sec", it: "Sec", zh: "秒", id: "Detik", ms: "Saat", pl: "sek", bg: "сек", ro: "Sec", uk: "Сек", ja: "秒", ko: "초", hi: "सेकंड", ur: "سیکنڈ"
  },
  "cd.expired": {
    en: "Tonight's cruise is fully booked", tr: "Bu geceki tur dolmuştur",
    de: "Heutige Tour ist ausgebucht", es: "El crucero de esta noche está completo",
    ru: "Круиз на сегодня полностью забронирован", ar: "رحلة الليلة محجوزة بالكامل",
    fa: "تور امشب کاملاً رزرو شده است", fr: "La croisière de ce soir est complète", it: "La crociera di stasera è completamente prenotata", zh: "今晚游船已满座", id: "Pelayaran malam ini sudah penuh", ms: "Pelayaran malam ini telah penuh ditempah", pl: "Rejs na dziś jest w pełni zarezerwowany", bg: "Круизът тази вечер е изцяло резервиран", ro: "Croaziera din seara aceasta este complet rezervată", uk: "Круїз на сьогодні повністю заброньовано", ja: "本日のクルーズは満席となりました", ko: "오늘 밤 크루즈는 만석입니다", hi: "आज रात की क्रूज पूरी तरह बुक हो चुकी है", ur: "آج رات کی کروز مکمل طور پر بک ہو چکی ہے"
  },
  "cd.tomorrow": {
    en: "Tomorrow's cruise available — book now!", tr: "Yarınki tur müsait — hemen rezervasyon yapın!",
    de: "Tour morgen verfügbar — jetzt buchen!", es: "Crucero de mañana disponible — ¡reserva ahora!",
    ru: "Круиз на завтра доступен — бронируйте сейчас!", ar: "رحلة الغد متاحة — احجز الآن!",
    fa: "تور فردا در دسترس است — همین حالا رزرو کنید!", fr: "La croisière de demain est disponible — réservez maintenant !", it: "Crociera di domani disponibile — prenoti ora!", zh: "明日游船有余位——快预订!", id: "Pelayaran besok tersedia — pesan sekarang!", ms: "Pelayaran esok tersedia — tempah sekarang!", pl: "Rejs na jutro dostępny — zarezerwuj teraz!", bg: "Круизът за утре е наличен — резервирайте сега!", ro: "Croaziera de mâine disponibilă — rezervați acum!", uk: "Круїз на завтра доступний — бронюйте зараз!", ja: "明日のクルーズ予約受付中 — 今すぐご予約ください！", ko: "내일 크루즈 예약 가능 — 지금 예약하세요!", hi: "कल की क्रूज उपलब्ध है — अभी बुक करें!", ur: "کل کی کروز دستیاب ہے — ابھی بک کریں!"
  },

  // ========== WHATSAPP ==========
  "wa.tooltip": {
    en: "Chat with us!", tr: "Bize yazın!", de: "Chatten Sie mit uns!",
    es: "¡Escríbenos!", ru: "Напишите нам!", ar: "تواصل معنا!",
    fa: "با ما گفت‌وگو کنید!", fr: "Discutez avec nous !", it: "Chatti con noi!", zh: "联系我们!", id: "Chat dengan kami!", ms: "Sembang dengan kami!", pl: "Napisz do nas!", bg: "Пишете ни!", ro: "Discutați cu noi!", uk: "Напишіть нам!", ja: "チャットでお問い合わせ", ko: "채팅으로 문의하세요!", hi: "हमसे बात करें!", ur: "ہم سے بات کریں!"
  },

  // ========== TOUR PANELS ==========
  "tour.daytime.label": {
    en: "Sightseeing Tour", tr: "Gezi Turu", de: "Sightseeing-Tour", es: "Tour Turístico", ru: "Обзорная экскурсия", ar: "جولة سياحية",
    fa: "تور بازدید", fr: "Visite touristique", it: "Tour turistico", zh: "观光游船", id: "Tur Wisata", ms: "Tur Pemandangan", pl: "Wycieczka krajoznawcza", bg: "Обзорен тур", ro: "Tur de Vizitare", uk: "Оглядова екскурсія", ja: "観光クルーズ", ko: "관광 투어", hi: "दर्शनीय स्थल यात्रा", ur: "سیاحتی ٹور"
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
    fa: "نمادهای استانبول را زیر نور روز کشف کنید. از کنار برج دختر، کاخ دلمه‌باغچه و پل بسفر عبور کنید.", fr: "Découvrez les monuments emblématiques d'Istanbul à la lumière du jour. Naviguez devant la Tour de Léandre, le palais de Dolmabahçe et le pont du Bosphore.", it: "Scopra i monumenti iconici di Istanbul alla luce del giorno. Navighi accanto alla Torre della Fanciulla, al Palazzo Dolmabahçe e al Ponte del Bosforo.", zh: "在阳光下探索伊斯坦布尔的标志性地标。驶过少女塔、多尔玛巴切宫与博斯普鲁斯大桥。", id: "Temukan landmark ikonik Istanbul di bawah sinar matahari. Berlayar melewati Menara Gadis, Istana Dolmabahçe, dan Jembatan Bosphorus.", ms: "Terokai mercu tanda ikonik Istanbul di bawah cahaya matahari. Belayar melepasi Menara Maiden, Istana Dolmabahçe dan Jambatan Bosphorus.", pl: "Odkryj kultowe zabytki Stambułu w świetle dnia. Płyń obok Wieży Panny, Pałacu Dolmabahçe i Mostu Bosforskiego.", bg: "Открийте емблематичните забележителности на Истанбул на дневна светлина. Плавайте покрай Кулата на девойката, двореца Долмабахче и моста на Босфора.", ro: "Descoperiți reperele iconice ale Istanbulului în lumina zilei. Navigați pe lângă Turnul Fecioarei, Palatul Dolmabahçe și Podul Bosfor.", uk: "Відкрийте для себе знакові пам'ятки Istanbul при денному світлі. Пропливіть повз Дівочу вежу, палац Dolmabahçe та міст через Bosphorus.", ja: "日中のIstanbulの象徴的なランドマークをご覧いただけます。乙女の塔、Dolmabahçe宮殿、Bosphorus大橋を船上からお楽しみください。", ko: "낮 동안 Istanbul의 상징적인 명소들을 둘러보세요. 처녀의 탑, Dolmabahçe 궁전, Bosphorus 대교를 지나갑니다.", hi: "दिन के उजाले में Istanbul के प्रतिष्ठित स्थलों को देखें। Maiden's Tower, Dolmabahce Palace और Bosphorus Bridge के पास से गुजरें।", ur: "دن کی روشنی میں Istanbul کے مشہور مقامات دریافت کریں۔ Maiden's Tower، Dolmabahce Palace، اور Bosphorus Bridge سے گزریں۔"
  },
  "tour.daytime.short": { en: "Day", tr: "Gündüz", de: "Tag", es: "Día", ru: "День", ar: "نهار", fa: "روز", fr: "Jour", it: "Giorno", zh: "白天", id: "Siang", ms: "Siang", pl: "Dzień", bg: "Ден", ro: "Zi" },
  "tour.sunset.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض",
    fa: "شام و نمایش", fr: "Dîner & spectacle", it: "Cena e spettacolo", zh: "晚宴与表演", id: "Makan Malam & Pertunjukan", ms: "Makan Malam & Persembahan", pl: "Kolacja i pokaz", bg: "Вечеря и шоу", ro: "Cină și Spectacol", uk: "Вечеря та шоу", ja: "ディナー&ショー", ko: "디너 & 쇼", hi: "डिनर और शो", ur: "ڈنر اور شو"
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
    fa: "تماشای غروب خورشید بر روی بسفر همراه با شام و سرگرمی زنده. ساعت طلایی روی آب فراموش‌نشدنی است.", fr: "Regardez le soleil se coucher sur le Bosphore tout en profitant d'un dîner et d'un divertissement en direct. L'heure dorée sur l'eau est inoubliable.", it: "Guardi il tramonto sul Bosforo mentre gusta la cena e l'intrattenimento dal vivo. L'ora dorata sull'acqua è indimenticabile.", zh: "一边享用晚宴与现场娱乐,一边欣赏博斯普鲁斯日落。水上黄金时段难以忘怀。", id: "Saksikan matahari terbenam di atas Bosphorus sambil menikmati makan malam dan hiburan langsung. Golden hour di atas air tak terlupakan.", ms: "Saksikan matahari terbenam di atas Bosphorus sambil menikmati makan malam dan hiburan langsung. Waktu keemasan di atas air tidak dapat dilupakan.", pl: "Obserwuj zachód słońca nad Bosforem podczas kolacji i rozrywki na żywo. Złota godzina na wodzie jest niezapomniana.", bg: "Наблюдавайте залеза над Босфора, докато се наслаждавате на вечеря и забавление на живо. Златният час на вода е незабравим.", ro: "Priviți soarele apunând peste Bosfor în timp ce vă bucurați de cină și divertisment live. Ora aurie pe apă este de neuitat.", uk: "Спостерігайте за заходом сонця над Bosphorus, насолоджуючись вечерею та живими розвагами. Золота година на воді — незабутня.", ja: "Bosphorusに沈む夕日を眺めながら、ディナーとライブエンターテイメントをお楽しみください。水上から望む黄金の時間は忘れられない思い出となります。", ko: "Bosphorus 위로 지는 석양을 감상하며 디너와 라이브 공연을 즐기세요. 물 위의 황금빛 시간은 잊을 수 없는 순간입니다.", hi: "Bosphorus पर सूर्यास्त देखते हुए डिनर और लाइव मनोरंजन का आनंद लें। पानी पर सुनहरी शाम अविस्मरणीय है।", ur: "Bosphorus پر غروبِ آفتاب دیکھیں جبکہ ڈنر اور لائیو تفریح سے لطف اندوز ہوں۔ پانی پر سنہری لمحات ناقابلِ فراموش ہیں۔"
  },
  "tour.sunset.short": { en: "Sunset", tr: "Gün Batımı", de: "Abend", es: "Atardecer", ru: "Закат", ar: "غروب", fa: "غروب", fr: "Coucher", it: "Tramonto", zh: "日落", id: "Matahari Terbenam", ms: "Matahari Terbenam", pl: "Zachód słońca", bg: "Залез", ro: "Apus" },
  "tour.sunset.maintenanceBadge": {
    en: "In Maintenance",
    tr: "Bakımda",
    de: "In Wartung",
    es: "En Mantenimiento",
    ru: "На обслуживании",
    ar: "قيد الصيانة",
    fa: "در تعمیرات", fr: "En maintenance", it: "In manutenzione", zh: "维护中", id: "Dalam Pemeliharaan", ms: "Dalam Penyelenggaraan", pl: "W konserwacji", bg: "В поддръжка", ro: "În Mentenanță", uk: "На технічному обслуговуванні", ja: "メンテナンス中", ko: "점검 중", hi: "रखरखाव में", ur: "مرمت میں"
  },
  "tour.sunset.maintenanceMsg": {
    en: "Temporarily unavailable — our sunset boat is in maintenance. We'll be back soon.",
    tr: "Bakım sebebiyle kısa süreliğine bu turda hizmet veremiyoruz. En kısa sürede döneceğiz.",
    de: "Vorübergehend nicht verfügbar — unser Sunset-Boot ist in Wartung. Wir sind bald zurück.",
    es: "Temporalmente no disponible — nuestro barco del atardecer está en mantenimiento. Volveremos pronto.",
    ru: "Временно недоступно — наша лодка на закате на техническом обслуживании. Скоро вернёмся.",
    ar: "غير متاح مؤقتاً — قارب الغروب قيد الصيانة. سنعود قريباً.",
    fa: "موقتاً در دسترس نیست — کشتی غروب ما در تعمیرات است. به‌زودی بازمی‌گردیم.", fr: "Temporairement indisponible — notre bateau coucher de soleil est en maintenance. Nous serons de retour bientôt.", it: "Temporaneamente non disponibile — la nostra barca del tramonto è in manutenzione. Torneremo presto.", zh: "暂时无法提供——我们的日落游船正在维护中。我们很快回归。", id: "Sementara tidak tersedia — kapal matahari terbenam kami dalam pemeliharaan. Kami akan segera kembali.", ms: "Tidak tersedia sementara — bot matahari terbenam kami dalam penyelenggaraan. Kami akan kembali tidak lama lagi.", pl: "Chwilowo niedostępne — nasza łódź na zachód słońca jest w konserwacji. Wkrótce wrócimy.", bg: "Временно недостъпен — залезната ни лодка е в поддръжка. Скоро ще се върнем.", ro: "Temporar indisponibil — vaporul nostru de apus este în mentenanță. Vom reveni în curând.", uk: "Тимчасово недоступно — наш човен на заході сонця на технічному обслуговуванні. Скоро повернемося.", ja: "一時的にご利用いただけません — サンセットクルーズ船はメンテナンス中です。まもなく再開いたします。", ko: "일시적으로 이용 불가 — 석양 크루즈 보트가 점검 중입니다. 곧 돌아오겠습니다.", hi: "अस्थायी रूप से अनुपलब्ध — हमारी सनसेट नाव रखरखाव में है। हम जल्द वापस आएंगे।", ur: "عارضی طور پر دستیاب نہیں — ہماری غروبِ آفتاب والی کشتی مرمت میں ہے۔ ہم جلد واپس آئیں گے۔"
  },
  "tour.dinner.label": {
    en: "Dinner & Show", tr: "Yemek & Şov", de: "Abendessen & Show", es: "Cena y Show", ru: "Ужин и шоу", ar: "عشاء وعرض",
    fa: "شام و نمایش", fr: "Dîner & spectacle", it: "Cena e spettacolo", zh: "晚宴与表演", id: "Makan Malam & Pertunjukan", ms: "Makan Malam & Persembahan", pl: "Kolacja i pokaz", bg: "Вечеря и шоу", ro: "Cină și Spectacol", uk: "Вечеря та шоу", ja: "ディナー&ショー", ko: "디너 & 쇼", hi: "डिनर और शो", ur: "ڈنر اور شو"
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
    fa: "نهایت شب بسفر. شام سه‌کورس، سرگرمی زنده و خط آسمان نورانی استانبول از روی آب.", fr: "La soirée ultime sur le Bosphore. Dîner 3 plats, divertissement en direct et l'horizon d'Istanbul illuminé vu depuis l'eau.", it: "La serata definitiva sul Bosforo. Cena a 3 portate, intrattenimento dal vivo e lo skyline illuminato di Istanbul dall'acqua.", zh: "终极博斯普鲁斯之夜。三道菜晚宴、现场娱乐,以及水面上伊斯坦布尔的璀璨天际线。", id: "Malam Bosphorus tertinggi. Makan malam 3 hidangan, hiburan langsung, dan cakrawala Istanbul yang bermandikan cahaya dari atas air.", ms: "Malam Bosphorus yang paling hebat. Makan malam 3 hidangan, hiburan langsung dan ufuk Istanbul yang diterangi dari atas air.", pl: "Najlepsza noc nad Bosforem. 3-daniowa kolacja, rozrywka na żywo i podświetlona panorama Stambułu z wody.", bg: "Върховната нощ на Босфора. Тристепенна вечеря, забавление на живо и осветеният силует на Истанбул от водата.", ro: "Noaptea supremă pe Bosfor. Cină cu 3 feluri, divertisment live și silueta iluminată a Istanbulului de pe apă.", uk: "Найкращий вечір на Bosphorus. Вечеря з 3 страв, живі розваги та освітлений горизонт Istanbul з води.", ja: "極上のBosphorus Nightをお過ごしください。3コースディナー、ライブエンターテイメント、そして水上から眺めるIstanbulの夜景をお楽しみいただけます。", ko: "최고의 Bosphorus 밤을 경험하세요. 3코스 디너, 라이브 공연, 그리고 물 위에서 바라보는 Istanbul의 환상적인 야경을 즐기실 수 있습니다.", hi: "अंतिम Bosphorus रात्रि। 3-कोर्स डिनर, लाइव मनोरंजन, और पानी से Istanbul का प्रकाशित क्षितिज।", ur: "حتمی Bosphorus رات۔ 3 کورس ڈنر، لائیو تفریحی پروگرام، اور پانی سے Istanbul کا روشن منظر۔"
  },
  "tour.dinner.short": { en: "Dinner", tr: "Gece", de: "Dinner", es: "Cena", ru: "Ужин", ar: "عشاء", fa: "شام", fr: "Dîner", it: "Cena", zh: "晚宴", id: "Makan Malam", ms: "Makan Malam", pl: "Kolacja", bg: "Вечеря", ro: "Cină" },
  "tour.popular": { en: "Popular", tr: "Popüler", de: "Beliebt", es: "Popular", ru: "Популярный", ar: "شائع", fa: "محبوب", fr: "Populaire", it: "Popolare", zh: "热门", id: "Populer", ms: "Popular", pl: "Popularny", bg: "Популярен", ro: "Popular" },
  "tour.explore": {
    en: "Explore & Book", tr: "Keşfet & Rezerve Et", de: "Entdecken & buchen", es: "Explorar y Reservar", ru: "Узнать и забронировать", ar: "استكشف واحجز",
    fa: "مشاهده و رزرو", fr: "Explorer & réserver", it: "Esplora e Prenota", zh: "查看与预订", id: "Jelajahi & Pesan", ms: "Terokai & Tempah", pl: "Przeglądaj i rezerwuj", bg: "Разгледайте и резервирайте", ro: "Explorați și Rezervați", uk: "Дослідити та забронювати", ja: "詳細を見る・ご予約", ko: "둘러보기 & 예약", hi: "देखें और बुक करें", ur: "دریافت کریں اور بک کریں"
  },

  // ========== BOATS SECTION ==========
  "boats.label": {
    en: "Choose Your Cruise", tr: "Turunu Seç", de: "Tour wählen", es: "Elija su Crucero", ru: "Выберите круиз", ar: "اختر رحلتك",
    fa: "تور خود را انتخاب کنید", fr: "Choisissez votre croisière", it: "Scelga la Sua crociera", zh: "选择您的游船", id: "Pilih Pelayaran Anda", ms: "Pilih Pelayaran Anda", pl: "Wybierz swój rejs", bg: "Изберете Вашия круиз", ro: "Alegeți Croaziera Dumneavoastră", uk: "Оберіть Ваш круїз", ja: "クルーズをお選びください", ko: "크루즈 선택", hi: "अपनी क्रूज चुनें", ur: "اپنی کروز منتخب کریں"
  },
  "boats.title": {
    en: "Choose Your Experience", tr: "Deneyimini Seç", de: "Erlebnis wählen", es: "Elija su Experiencia", ru: "Выберите впечатление", ar: "اختر تجربتك",
    fa: "تجربه خود را انتخاب کنید", fr: "Choisissez votre expérience", it: "Scelga la Sua esperienza", zh: "选择您的体验", id: "Pilih Pengalaman Anda", ms: "Pilih Pengalaman Anda", pl: "Wybierz swoje doświadczenie", bg: "Изберете Вашето преживяване", ro: "Alegeți Experiența Dumneavoastră", uk: "Оберіть Свій Досвід", ja: "お好みの体験をお選びください", ko: "원하시는 경험을 선택하세요", hi: "अपना अनुभव चुनें", ur: "اپنا تجربہ منتخب کریں"
  },
  "boats.desc": {
    en: "Pick the experience that fits your mood on the Bosphorus.", tr: "Boğaz'da ruh halinize uygun deneyimi seçin.", de: "Wählen Sie das Erlebnis, das zu Ihrer Stimmung am Bosporus passt.", es: "Elija la experiencia que mejor se adapte a su estado de ánimo en el Bósforo.", ru: "Выберите впечатление от Босфора, которое подходит вам.", ar: "اختر التجربة التي تناسب مزاجك على البوسفور.",
    fa: "تجربه‌ای متناسب با حال و هوای خود روی بسفر را انتخاب کنید.", fr: "Choisissez l'expérience qui correspond à votre humeur sur le Bosphore.", it: "Scelga l'esperienza più adatta al Suo umore sul Bosforo.", zh: "挑选最契合您博斯普鲁斯心情的体验。", id: "Pilih pengalaman yang sesuai dengan suasana hati Anda di Bosphorus.", ms: "Pilih pengalaman yang sesuai dengan mood anda di Bosphorus.", pl: "Wybierz doświadczenie, które pasuje do Państwa nastroju nad Bosforem.", bg: "Изберете преживяването, което подхожда на настроението Ви на Босфора.", ro: "Alegeți experiența care se potrivește stării dumneavoastră pe Bosfor.", uk: "Виберіть досвід, який відповідає Вашому настрою на Босфорі.", ja: "Bosphorusでの気分に合った体験をお選びいただけます。", ko: "보스포러스에서 귀하의 기분에 맞는 경험을 선택하시기 바랍니다.", hi: "बोस्फोरस पर अपने मूड के अनुसार अनुभव चुनें।", ur: "باسفورس پر اپنے موڈ کے مطابق تجربہ منتخب کریں۔"
  },
  "boats.viewpkg": {
    en: "View Packages →", tr: "Paketleri Gör →", de: "Pakete ansehen →", es: "Ver Paquetes →", ru: "Смотреть пакеты →", ar: "عرض الباقات ←",
    fa: "مشاهده پکیج‌ها ←", fr: "Voir les forfaits →", it: "Vedi i pacchetti →", zh: "查看套餐 →", id: "Lihat Paket →", ms: "Lihat Pakej →", pl: "Zobacz pakiety →", bg: "Вижте пакетите →", ro: "Vedeți Pachetele →", uk: "Переглянути Пакети →", ja: "パッケージを見る →", ko: "패키지 보기 →", hi: "पैकेज देखें →", ur: "پیکجز دیکھیں ←"
  },
  "boats.daytime.desc": {
    en: "Scenic Bosphorus sightseeing under the sunlight. Maiden's Tower, palaces, and bridges.", tr: "Gün ışığında Boğaz manzarası. Kız Kulesi, saraylar ve köprüler.", de: "Bosporus-Sightseeing im Sonnenlicht. Leanderturm, Paläste und Brücken.", es: "Turismo panorámico por el Bósforo bajo la luz del sol. Torre de la Doncella, palacios y puentes.", ru: "Живописная экскурсия по Босфору при дневном свете. Девичья башня, дворцы и мосты.", ar: "مشاهدة معالم البوسفور تحت أشعة الشمس. برج الفتاة والقصور والجسور.",
    fa: "گشت زیبای بسفر زیر نور خورشید. برج دختر، کاخ‌ها و پل‌ها.", fr: "Tour panoramique du Bosphore à la lumière du soleil. Tour de Léandre, palais et ponts.", it: "Tour panoramico del Bosforo alla luce del sole. Torre della Fanciulla, palazzi e ponti.", zh: "阳光下的博斯普鲁斯风光观光。少女塔、宫殿与桥梁。", id: "Pemandangan wisata Bosphorus di bawah sinar matahari. Menara Gadis, istana, dan jembatan.", ms: "Tur pemandangan Bosphorus yang indah di bawah cahaya matahari. Menara Maiden, istana dan jambatan.", pl: "Malowniczy rejs krajoznawczy po Bosforze w świetle słonecznym. Wieża Panny, pałace i mosty.", bg: "Живописно разглеждане на Босфора на слънчева светлина. Кулата на девойката, двореци и мостове.", ro: "Tur panoramic de vizitare pe Bosfor în lumina soarelui. Turnul Fecioarei, palate și poduri.", uk: "Мальовничі екскурсії Босфором при денному світлі. Дівоча вежа, палаци та мости.", ja: "日中の美しいBosphorus観光。乙女の塔、宮殿、橋をご覧いただけます。", ko: "햇빛 아래 보스포러스의 아름다운 관광. 소녀의 탑, 궁전, 그리고 다리들을 감상하실 수 있습니다.", hi: "सूर्य के प्रकाश में बोस्फोरस का सुंदर दर्शन। मेडेन्स टॉवर, महल और पुल।", ur: "سورج کی روشنی میں باسفورس کی خوبصورت سیر۔ میڈنز ٹاور، محلات اور پل۔"
  },
  "boats.sunset.desc": {
    en: "Golden hour dinner cruise with live entertainment as the sun sets over the Bosphorus.", tr: "Boğaz üzerinde gün batımında canlı eğlence eşliğinde yemekli tur.", de: "Dinner-Tour zur goldenen Stunde mit Live-Show bei Sonnenuntergang.", es: "Crucero con cena en la hora dorada con entretenimiento en vivo al atardecer.", ru: "Ужин-круиз в золотой час с живыми шоу на закате над Босфором.", ar: "رحلة عشاء في الساعة الذهبية مع ترفيه حي أثناء غروب الشمس فوق البوسفور.",
    fa: "تور شام ساعت طلایی با سرگرمی زنده در حالی که خورشید بر بسفر غروب می‌کند.", fr: "Croisière dîner de l'heure dorée avec divertissement en direct pendant le coucher de soleil sur le Bosphore.", it: "Crociera con cena nell'ora dorata con intrattenimento dal vivo mentre il sole tramonta sul Bosforo.", zh: "黄金时段晚宴游船,现场娱乐伴夕阳沉入博斯普鲁斯。", id: "Pelayaran makan malam golden hour dengan hiburan langsung saat matahari terbenam di atas Bosphorus.", ms: "Pelayaran makan malam waktu keemasan dengan hiburan langsung ketika matahari terbenam di atas Bosphorus.", pl: "Rejs z kolacją w złotej godzinie z rozrywką na żywo, gdy słońce zachodzi nad Bosforem.", bg: "Круиз с вечеря в златния час със забавление на живо, докато слънцето залязва над Босфора.", ro: "Croazieră cu cină la ora aurie cu divertisment live în timp ce soarele apune peste Bosfor.", uk: "Вечеря-круїз у золоту годину з живими розвагами, коли сонце заходить над Босфором.", ja: "夕日がBosphorusに沈む中、ライブエンターテイメントと共にお楽しみいただくゴールデンアワーディナークルーズ。", ko: "보스포러스 위로 해가 지는 동안 라이브 공연과 함께하는 골든아워 디너 크루즈입니다.", hi: "सूर्यास्त के समय बोस्फोरस पर लाइव मनोरंजन के साथ गोल्डन आवर डिनर क्रूज़।", ur: "سنہری لمحات میں ڈنر کروز لائیو تفریح کے ساتھ جب سورج باسفورس پر غروب ہو۔"
  },
  "boats.dinner.desc": {
    en: "The ultimate night experience. Dinner, live shows, and Istanbul's illuminated skyline.", tr: "En özel gece deneyimi. Yemek, canlı şovlar ve İstanbul'un ışıklı silüeti.", de: "Das ultimative Nachterlebnis. Dinner, Live-Shows und Istanbuls Skyline.", es: "La experiencia nocturna definitiva. Cena, shows en vivo y el horizonte iluminado de Estambul.", ru: "Лучший ночной опыт. Ужин, живые шоу и освещённая панорама Стамбула.", ar: "التجربة الليلية المثالية. عشاء وعروض حية وأفق إسطنبول المضيء.",
    fa: "نهایت تجربه شبانه. شام، نمایش‌های زنده و خط آسمان نورانی استانبول.", fr: "L'expérience nocturne ultime. Dîner, spectacles en direct et horizon illuminé d'Istanbul.", it: "L'esperienza notturna definitiva. Cena, spettacoli dal vivo e lo skyline illuminato di Istanbul.", zh: "终极夜晚体验。晚宴、现场表演,以及伊斯坦布尔璀璨天际线。", id: "Pengalaman malam tertinggi. Makan malam, pertunjukan langsung, dan cakrawala Istanbul yang bermandikan cahaya.", ms: "Pengalaman malam yang paling hebat. Makan malam, persembahan langsung dan ufuk Istanbul yang diterangi.", pl: "Najlepsze doświadczenie nocne. Kolacja, pokazy na żywo i podświetlona panorama Stambułu.", bg: "Върховното нощно преживяване. Вечеря, шоута на живо и осветеният силует на Истанбул.", ro: "Experiența supremă nocturnă. Cină, spectacole live și silueta iluminată a Istanbulului.", uk: "Найкращий нічний досвід. Вечеря, живі шоу та ілюмінована панорама Istanbul.", ja: "究極のナイトクルーズ体験。ディナー、ライブショー、そしてIstanbulの輝く夜景をお楽しみください。", ko: "최고의 야간 경험. 디너, 라이브 쇼, 그리고 조명으로 빛나는 이스탄불의 스카이라인을 즐기실 수 있습니다.", hi: "अंतिम रात्रि अनुभव। डिनर, लाइव शो और Istanbul की रोशनी से जगमगाती स्काईलाइन।", ur: "حتمی رات کا تجربہ۔ ڈنر، لائیو شوز، اور Istanbul کا روشن آسمان۔"
  },

  // ========== BOOKING PANEL ==========
  "booking.selected": {
    en: "selected", tr: "seçili", de: "ausgewählt", es: "seleccionado", ru: "выбран", ar: "محدد",
    fa: "انتخاب شده", fr: "sélectionné", it: "selezionato", zh: "已选", id: "terpilih", ms: "dipilih", pl: "wybrane", bg: "избран", ro: "selectat", uk: "обрано", ja: "選択中", ko: "선택됨", hi: "चयनित", ur: "منتخب شدہ"
  },
  "booking.title": {
    en: "Book Your Cruise", tr: "Turunu Rezerve Et", de: "Tour buchen",
    es: "Reserve su Crucero", ru: "Забронируйте круиз", ar: "احجز رحلتك",
    fa: "رزرو تور خود", fr: "Réservez votre croisière", it: "Prenoti la Sua crociera", zh: "预订您的游船", id: "Pesan Pelayaran Anda", ms: "Tempah Pelayaran Anda", pl: "Zarezerwuj swój rejs", bg: "Резервирайте Вашия круиз", ro: "Rezervați Croaziera Dumneavoastră", uk: "Забронюйте Свій Круїз", ja: "クルーズのご予約", ko: "크루즈 예약하기", hi: "अपनी क्रूज़ बुक करें", ur: "اپنا کروز بک کریں"
  },
  "booking.tonight": {
    en: "Tonight", tr: "Bu Gece", de: "Heute Abend", es: "Esta Noche", ru: "Сегодня", ar: "الليلة",
    fa: "امشب", fr: "Ce soir", it: "Stasera", zh: "今晚", id: "Malam Ini", ms: "Malam Ini", pl: "Dziś wieczorem", bg: "Тази вечер", ro: "Seara Aceasta", uk: "Сьогодні Ввечері", ja: "今夜", ko: "오늘 밤", hi: "आज रात", ur: "آج رات"
  },
  "booking.date": {
    en: "Date", tr: "Tarih", de: "Datum", es: "Fecha", ru: "Дата", ar: "التاريخ",
    fa: "تاریخ", fr: "Date", it: "Data", zh: "日期", id: "Tanggal", ms: "Tarikh", pl: "Data", bg: "Дата", ro: "Data", uk: "Дата", ja: "日付", ko: "날짜", hi: "तारीख", ur: "تاریخ"
  },
  "booking.adults": {
    en: "Adults", tr: "Yetişkin", de: "Erwachsene", es: "Adultos", ru: "Взрослые", ar: "بالغون",
    fa: "بزرگسالان", fr: "Adultes", it: "Adulti", zh: "成人", id: "Dewasa", ms: "Dewasa", pl: "Dorośli", bg: "Възрастни", ro: "Adulți", uk: "Дорослі", ja: "大人", ko: "성인", hi: "वयस्क", ur: "بالغ افراد"
  },
  "booking.children": {
    en: "Children", tr: "Çocuk", de: "Kinder", es: "Niños", ru: "Дети", ar: "أطفال",
    fa: "کودکان", fr: "Enfants", it: "Bambini", zh: "儿童", id: "Anak", ms: "Kanak-kanak", pl: "Dzieci", bg: "Деца", ro: "Copii", uk: "Діти", ja: "お子様", ko: "어린이", hi: "बच्चे", ur: "بچے"
  },
  "booking.childAges": {
    en: "Child Ages", tr: "Çocuk Yaşları", de: "Kinderalter", es: "Edades de los Niños", ru: "Возраст детей", ar: "أعمار الأطفال",
    fa: "سن کودکان", fr: "Âges des enfants", it: "Età dei bambini", zh: "儿童年龄", id: "Usia Anak", ms: "Umur Kanak-kanak", pl: "Wiek dzieci", bg: "Възрасти на децата", ro: "Vârstele Copiilor", uk: "Вік Дітей", ja: "お子様の年齢", ko: "어린이 나이", hi: "बच्चों की उम्र", ur: "بچوں کی عمریں"
  },
  "booking.childNote": {
    en: "0-3 age: Free  |  4-8 age: 50% off  |  9+ age: Full price", tr: "0-3 yaş: Ücretsiz  |  4-8 yaş: %50 indirim  |  9+ yaş: Tam fiyat",
    de: "0-3 J.: Gratis  |  4-8 J.: 50% Rabatt  |  9+ J.: Vollpreis", es: "0-3 años: Gratis  |  4-8 años: 50% desc.  |  9+ años: Precio completo",
    ru: "0-3 лет: Бесплатно  |  4-8 лет: 50% скидка  |  9+ лет: Полная цена", ar: "0-3 سنة: مجاني  |  4-8 سنة: خصم 50%  |  9+ سنة: السعر الكامل",
    fa: "۰ تا ۳ سال: رایگان  |  ۴ تا ۸ سال: ۵۰٪ تخفیف  |  ۹ سال به بالا: قیمت کامل", fr: "0-3 ans : gratuit  |  4-8 ans : -50 %  |  9+ : tarif plein", it: "0-3 anni: Gratis  |  4-8 anni: 50% di sconto  |  9+ anni: Prezzo pieno", zh: "0-3岁:免费  |  4-8岁:半价  |  9岁以上:全价", id: "Usia 0-3: Gratis  |  Usia 4-8: Diskon 50%  |  Usia 9+: Harga penuh", ms: "0-3 tahun: Percuma  |  4-8 tahun: Diskaun 50%  |  9+ tahun: Harga penuh", pl: "0-3 lata: bezpłatnie  |  4-8 lat: 50% zniżki  |  9+ lat: pełna cena", bg: "0–3 години: безплатно  |  4–8 години: 50% отстъпка  |  9+ години: пълна цена", ro: "0-3 ani: Gratuit  |  4-8 ani: 50% reducere  |  9+ ani: Preț întreg", uk: "0-3 роки: Безкоштовно  |  4-8 років: Знижка 50%  |  9+ років: Повна ціна", ja: "0-3歳：無料  |  4-8歳：50%割引  |  9歳以上：通常料金", ko: "0-3세: 무료  |  4-8세: 50% 할인  |  9세 이상: 정상 요금", hi: "0-3 उम्र: निःशुल्क  |  4-8 उम्र: 50% छूट  |  9+ उम्र: पूर्ण मूल्य", ur: "0-3 عمر: مفت  |  4-8 عمر: 50% رعایت  |  9+ عمر: مکمل قیمت"
  },
  "booking.boat": {
    en: "Cruise", tr: "Tekne", de: "Tour", es: "Crucero", ru: "Круиз", ar: "الرحلة",
    fa: "تور", fr: "Croisière", it: "Crociera", zh: "游船", id: "Pelayaran", ms: "Pelayaran", pl: "Rejs", bg: "Круиз", ro: "Croazieră", uk: "Круїз", ja: "クルーズ", ko: "크루즈", hi: "क्रूज़", ur: "کروز"
  },
  "booking.package": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة",
    fa: "پکیج", fr: "Forfait", it: "Pacchetto", zh: "套餐", id: "Paket", ms: "Pakej", pl: "Pakiet", bg: "Пакет", ro: "Pachet", uk: "Пакет", ja: "パッケージ", ko: "패키지", hi: "पैकेज", ur: "پیکج"
  },
  "booking.extras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Дополнения", ar: "إضافات",
    fa: "افزودنی‌ها", fr: "Options", it: "Extra", zh: "附加项", id: "Tambahan", ms: "Tambahan", pl: "Dodatki", bg: "Добавки", ro: "Suplimente", uk: "Додатково", ja: "オプション", ko: "추가 옵션", hi: "अतिरिक्त", ur: "اضافی خدمات"
  },
  "booking.drinkLabel": {
    en: "Drink Selection", tr: "İçecek Seçimi", de: "Getränkewahl",
    es: "Selección de Bebidas", ru: "Выбор напитков", ar: "اختيار المشروبات",
    fa: "انتخاب نوشیدنی", fr: "Choix de boisson", it: "Selezione bevande", zh: "饮品选择", id: "Pilihan Minuman", ms: "Pilihan Minuman", pl: "Wybór napojów", bg: "Избор на напитки", ro: "Selectare Băuturi", uk: "Вибір Напоїв", ja: "ドリンク選択", ko: "음료 선택", hi: "ड्रिंक का चयन", ur: "مشروبات کا انتخاب"
  },
  "booking.transfer": {
    en: "Hotel Transfer (+€{p.transfer}/person)", tr: "Otel Transferi (+€{p.transfer}/kişi)", de: "Hoteltransfer (+€{p.transfer}/Person)",
    es: "Traslado al Hotel (+€{p.transfer}/persona)", ru: "Трансфер из отеля (+€{p.transfer}/чел.)", ar: "نقل من الفندق (+€{p.transfer}/شخص)",
    fa: "ترانسفر هتل (+€{p.transfer}/نفر)", fr: "Transfert d'hôtel (+€{p.transfer}/personne)", it: "Transfer dall'hotel (+€{p.transfer}/persona)", zh: "酒店接送(+€{p.transfer}／人)", id: "Antar-jemput Hotel (+€{p.transfer}/orang)", ms: "Pemindahan Hotel (+€{p.transfer}/orang)", pl: "Transfer z hotelu (+€{p.transfer}/osobę)", bg: "Хотелски трансфер (+€{p.transfer}/човек)", ro: "Transfer de la Hotel (+€{p.transfer}/persoană)", uk: "Трансфер з Готелю (+€{p.transfer}/особа)", ja: "ホテル送迎（+€{p.transfer}/お一人様）", ko: "호텔 픽업 (+€{p.transfer}/1인)", hi: "होटल ट्रांसफर (+€{p.transfer}/व्यक्ति)", ur: "ہوٹل ٹرانسفر (+€{p.transfer}/فی شخص)"
  },
  "booking.romantic": {
    en: "Romantic Table (+€{p.romantic}/table)", tr: "Romantik Masa (+€{p.romantic}/masa)", de: "Romantik-Tisch (+€{p.romantic}/Tisch)",
    es: "Mesa Romántica (+€{p.romantic}/mesa)", ru: "Романтический стол (+€{p.romantic}/стол)", ar: "طاولة رومانسية (+€{p.romantic}/طاولة)",
    fa: "میز رمانتیک (+€{p.romantic}/میز)", fr: "Table romantique (+€{p.romantic}/table)", it: "Tavolo romantico (+€{p.romantic}/tavolo)", zh: "浪漫餐桌(+€{p.romantic}／桌)", id: "Meja Romantis (+€{p.romantic}/meja)", ms: "Meja Romantik (+€{p.romantic}/meja)", pl: "Stół romantyczny (+€{p.romantic}/stół)", bg: "Романтична маса (+€{p.romantic}/маса)", ro: "Masă Romantică (+€{p.romantic}/masă)", uk: "Романтичний Столик (+€{p.romantic}/столик)", ja: "ロマンチックテーブル（+€{p.romantic}/テーブル）", ko: "로맨틱 테이블 (+€{p.romantic}/테이블)", hi: "रोमांटिक टेबल (+€{p.romantic}/टेबल)", ur: "رومانوی ٹیبل (+€{p.romantic}/فی ٹیبل)"
  },
  "booking.total": {
    en: "Total", tr: "Toplam", de: "Gesamt", es: "Total", ru: "Итого", ar: "الإجمالي",
    fa: "مجموع", fr: "Total", it: "Totale", zh: "合计", id: "Total", ms: "Jumlah", pl: "Łącznie", bg: "Общо", ro: "Total", uk: "Разом", ja: "合計", ko: "합계", hi: "कुल", ur: "کل رقم"
  },
  "booking.payNote": {
    en: "Pay on the boat — No prepayment", tr: "Teknede ödeyin — Ön ödeme yok",
    de: "Zahlung an Bord — Keine Vorauszahlung", es: "Paga en el barco — Sin prepago",
    ru: "Оплата на борту — без предоплаты", ar: "ادفع على القارب — بدون دفع مسبق",
    fa: "پرداخت روی کشتی — بدون پیش‌پرداخت", fr: "Paiement à bord — aucun prépaiement", it: "Pagamento a bordo — Nessun anticipo", zh: "船上付款——无需预付", id: "Bayar di kapal — Tanpa pembayaran di muka", ms: "Bayar di atas bot — Tiada bayaran pendahuluan", pl: "Płatność na pokładzie — bez przedpłaty", bg: "Плащане на борда — без предплащане", ro: "Plata pe vapor — Fără plată în avans", uk: "Оплата на човні — Без передоплати", ja: "船上でのお支払い — 事前決済不要", ko: "보트에서 결제 — 선결제 불필요", hi: "नाव पर भुगतान करें — कोई अग्रिम भुगतान नहीं", ur: "کشتی پر ادائیگی کریں — پیشگی ادائیگی نہیں"
  },
  "booking.cta": {
    en: "Book via WhatsApp", tr: "WhatsApp'tan Rezervasyon", de: "Per WhatsApp buchen",
    es: "Reservar por WhatsApp", ru: "Забронировать через WhatsApp", ar: "احجز عبر واتساب",
    fa: "رزرو از طریق واتس‌اپ", fr: "Réserver via WhatsApp", it: "Prenota via WhatsApp", zh: "通过WhatsApp预订", id: "Pesan via WhatsApp", ms: "Tempah melalui WhatsApp", pl: "Zarezerwuj przez WhatsApp", bg: "Резервирайте в WhatsApp", ro: "Rezervați prin WhatsApp", uk: "Забронювати через WhatsApp", ja: "WhatsAppで予約する", ko: "WhatsApp으로 예약하기", hi: "WhatsApp के माध्यम से बुक करें", ur: "WhatsApp کے ذریعے بک کریں"
  },
  "booking.from": {
    en: "From", tr: "Başlayan", de: "Ab", es: "Desde", ru: "От", ar: "من",
    fa: "از", fr: "À partir de", it: "Da", zh: "起", id: "Mulai", ms: "Dari", pl: "Od", bg: "От", ro: "De la", uk: "Від", ja: "〜", ko: "부터", hi: "से", ur: "سے شروع"
  },
  "booking.perPerson": {
    en: "/ person", tr: "/ kişi", de: "/ Person", es: "/ persona", ru: "/ чел.", ar: "/ شخص",
    fa: "/ نفر", fr: "/ personne", it: "/ persona", zh: "／人", id: "/ orang", ms: "/ orang", pl: "/ osoba", bg: "/ човек", ro: "/ persoană", uk: "/ особа", ja: "/ お一人様", ko: "/ 1인", hi: "/ व्यक्ति", ur: "/ فی شخص"
  },
  "booking.bookNow": {
    en: "Book Now", tr: "Hemen Rezerve Et", de: "Jetzt Buchen", es: "Reservar Ahora", ru: "Забронировать", ar: "احجز الآن",
    fa: "همین حالا رزرو کنید", fr: "Réserver", it: "Prenota ora", zh: "立即预订", id: "Pesan Sekarang", ms: "Tempah Sekarang", pl: "Zarezerwuj teraz", bg: "Резервирайте сега", ro: "Rezervați Acum", uk: "Забронювати Зараз", ja: "今すぐ予約", ko: "지금 예약하기", hi: "अभी बुक करें", ur: "ابھی بک کریں"
  },

  // ========== PACKAGE NAMES ==========
  "pkg.std.name": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "قياسي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard", uk: "Стандарт", ja: "スタンダード", ko: "스탠다드", hi: "Standard", ur: "معیاری"
  },
  "pkg.prem.name": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "بريميوم",
    fa: "پرمیوم", fr: "Premium", it: "Premium", zh: "高级", id: "Premium", ms: "Premium", pl: "Premium", bg: "Премиум", ro: "Premium", uk: "Преміум", ja: "プレミアム", ko: "프리미엄", hi: "Premium", ur: "پریمیم"
  },
  "pkg.vip.name": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP", uk: "VIP", ja: "VIP", ko: "VIP", hi: "VIP", ur: "VIP"
  },
  "pkg.bestValue": {
    en: "Best Value", tr: "En İyi Değer", de: "Bestes Angebot", es: "Mejor Valor", ru: "Лучшее предложение", ar: "أفضل قيمة",
    fa: "بهترین ارزش", fr: "Meilleur rapport qualité-prix", it: "Miglior Rapporto", zh: "最超值", id: "Nilai Terbaik", ms: "Nilai Terbaik", pl: "Najlepsza wartość", bg: "Най-добра стойност", ro: "Cel Mai Bun Raport", uk: "Найкраща Ціна", ja: "お得", ko: "최고의 가성비", hi: "सर्वोत्तम मूल्य", ur: "بہترین ویلیو"
  },

  // ========== PACKAGE FEATURES ==========
  "pkg.feat.cruise": {
    en: "3-hour Bosphorus night cruise", tr: "3 saat Boğaz gece turu", de: "3-stündige Bosporus-Nachtfahrt", es: "Crucero nocturno de 3 horas por el Bósforo", ru: "3-часовой ночной круиз по Босфору", ar: "رحلة ليلية في البوسفور لمدة 3 ساعة",
    fa: "تور شبانه سه‌ساعته بسفر", fr: "Croisière nocturne de 3 heures sur le Bosphore", it: "Crociera notturna sul Bosforo di 3 ore", zh: "3小时博斯普鲁斯夜游", id: "Pelayaran malam Bosphorus 3 jam", ms: "Pelayaran malam Bosphorus 3 jam", pl: "3-godzinny nocny rejs po Bosforze", bg: "3-часов нощен круиз по Босфора", ro: "Croazieră nocturnă de 3 ore pe Bosfor", uk: "3-годинний нічний круїз Босфором", ja: "ボスポラス海峡3時間のナイトクルーズ", ko: "3시간 보스포러스 야간 크루즈", hi: "3 घंटे की Bosphorus नाइट क्रूज़", ur: "3 گھنٹے کی Bosphorus رات کی کروز"
  },
  "pkg.feat.dinner": {
    en: "Dinner — 10 meze + salad + main course + dessert", tr: "Akşam yemeği — 10 meze + salata + ana yemek + tatlı", de: "Abendessen — 10 Meze + Salat + Hauptgang + Dessert", es: "Cena — 10 meze + ensalada + plato principal + postre", ru: "Ужин — 10 мезе + салат + основное блюдо + десерт", ar: "عشاء — 10 مقبلات + سلطة + طبق رئيسي + حلوى",
    fa: "شام — ۱۰ نوع مزه + سالاد + غذای اصلی + دسر", fr: "Dîner — 10 mezzés + salade + plat principal + dessert", it: "Cena — 10 meze + insalata + secondo + dolce", zh: "晚宴——10道冷盘+沙拉+主菜+甜点", id: "Makan malam — 10 meze + salad + menu utama + pencuci mulut", ms: "Makan malam — 10 meze + salad + hidangan utama + pencuci mulut", pl: "Kolacja — 10 mezze + sałatka + danie główne + deser", bg: "Вечеря — 10 мезета + салата + основно ястие + десерт", ro: "Cină — 10 mezeluri + salată + fel principal + desert", uk: "Вечеря — 10 мезе + салат + основна страва + десерт", ja: "ディナー — メゼ10品 + サラダ + メインコース + デザート", ko: "저녁 식사 — 메제 10가지 + 샐러드 + 메인 코스 + 디저트", hi: "डिनर — 10 मेज़े + सलाद + मुख्य व्यंजन + मिठाई", ur: "ڈنر — 10 میزے + سلاد + مین کورس + ڈیزرٹ"
  },
  "pkg.feat.choices": {
    en: "4 choices: vegetarian, fish, chicken, meatball", tr: "4 seçenek: vejetaryen, balık, tavuk, köfte", de: "4 Optionen: vegetarisch, Fisch, Hähnchen, Frikadellen", es: "4 opciones: vegetariano, pescado, pollo, albóndigas", ru: "4 варианта: вегетарианское, рыба, курица, котлеты", ar: "4 خيارات: نباتي، سمك، دجاج، كفتة",
    fa: "۴ انتخاب: گیاه‌خواری، ماهی، مرغ، کوفته", fr: "4 choix : végétarien, poisson, poulet, köfte", it: "4 scelte: vegetariano, pesce, pollo, köfte", zh: "4种选择:素食、鱼、鸡肉、肉丸", id: "4 pilihan: vegetarian, ikan, ayam, köfte", ms: "4 pilihan: vegetarian, ikan, ayam, köfte", pl: "4 opcje: wegetariańskie, ryba, kurczak, kotlety", bg: "4 избора: вегетарианско, риба, пиле, кюфте", ro: "4 alegeri: vegetarian, pește, pui, chiftele", uk: "4 варіанти: вегетаріанський, риба, курка, котлети", ja: "4種類からお選びいただけます：ベジタリアン、魚、チキン、ミートボール", ko: "4가지 선택: 채식, 생선, 치킨, 미트볼", hi: "4 विकल्प: शाकाहारी, मछली, चिकन, मीटबॉल", ur: "4 اختیارات: سبزی خور، مچھلی، چکن، کوفتہ"
  },
  "pkg.feat.drinks": {
    en: "Unlimited soft drinks", tr: "Sınırsız alkolsüz içecek", de: "Unbegrenzte Softdrinks", es: "Refrescos ilimitados", ru: "Безлимитные безалкогольные напитки", ar: "مشروبات غازية غير محدودة",
    fa: "نوشیدنی‌های بدون‌الکل نامحدود", fr: "Boissons non alcoolisées à volonté", it: "Bevande analcoliche illimitate", zh: "无限畅饮软饮", id: "Minuman ringan tanpa batas", ms: "Minuman ringan tanpa had", pl: "Nieograniczone napoje bezalkoholowe", bg: "Неограничени безалкохолни напитки", ro: "Băuturi răcoritoare nelimitate", uk: "Безлімітні безалкогольні напої", ja: "ソフトドリンク飲み放題", ko: "무제한 소프트 드링크", hi: "असीमित सॉफ्ट ड्रिंक्स", ur: "لامحدود سافٹ ڈرنکس"
  },
  "pkg.feat.table": {
    en: "Private table", tr: "Özel masa", de: "Privater Tisch", es: "Mesa privada", ru: "Отдельный столик", ar: "طاولة خاصة",
    fa: "میز خصوصی", fr: "Table privée", it: "Tavolo privato", zh: "专属餐桌", id: "Meja privat", ms: "Meja peribadi", pl: "Prywatny stół", bg: "Лична маса", ro: "Masă privată", uk: "Приватний столик", ja: "プライベートテーブル", ko: "프라이빗 테이블", hi: "प्राइवेट टेबल", ur: "نجی ٹیبل"
  },
  "pkg.feat.show": {
    en: "Live entertainment & Turkish night show", tr: "Canlı eğlence & Türk gecesi şovu", de: "Live-Show & Türkische Nacht", es: "Entretenimiento en vivo y show nocturno turco", ru: "Живое шоу и турецкая ночь", ar: "ترفيه حي وعرض ليلة تركية",
    fa: "سرگرمی زنده و نمایش شب ترکی", fr: "Divertissement en direct & soirée turque", it: "Intrattenimento dal vivo e spettacolo della serata turca", zh: "现场娱乐与土耳其之夜表演", id: "Hiburan langsung & pertunjukan malam Turki", ms: "Hiburan langsung & persembahan malam Turki", pl: "Rozrywka na żywo i turecki pokaz nocny", bg: "Забавление на живо и турска нощна програма", ro: "Divertisment live și spectacol de seară turcească", uk: "Живі виступи та турецьке шоу", ja: "ライブエンターテイメント&トルコナイトショー", ko: "라이브 엔터테인먼트 & 터키 나이트 쇼", hi: "लाइव मनोरंजन और तुर्की नाइट शो", ur: "لائیو تفریح اور ترکی نائٹ شو"
  },
  "pkg.feat.tablePrem": {
    en: "Private table — stage view or window seat", tr: "Özel masa — sahne görüşü veya pencere kenarı", de: "Privater Tisch — Bühnensicht oder Fenster", es: "Mesa privada — vista al escenario o ventana", ru: "Отдельный столик — вид на сцену или у окна", ar: "طاولة خاصة — إطلالة على المسرح أو مقعد بجانب النافذة",
    fa: "میز خصوصی — دید به صحنه یا جایگاه کنار پنجره", fr: "Table privée — vue sur scène ou près de la fenêtre", it: "Tavolo privato — vista sul palco o posto finestrato", zh: "专属餐桌——舞台视野或靠窗座位", id: "Meja privat — pemandangan panggung atau kursi jendela", ms: "Meja peribadi — pemandangan pentas atau tempat duduk tepi tingkap", pl: "Prywatny stół — widok na scenę lub miejsce przy oknie", bg: "Лична маса — изглед към сцената или до прозореца", ro: "Masă privată — vedere la scenă sau loc la fereastră", uk: "Приватний столик — вид на сцену або біля вікна", ja: "プライベートテーブル — ステージビューまたは窓側のお席", ko: "프라이빗 테이블 — 스테이지 뷰 또는 창가 좌석", hi: "प्राइवेट टेबल — स्टेज व्यू या खिड़की की सीट", ur: "نجی ٹیبل — اسٹیج ویو یا کھڑکی کی نشست"
  },
  "pkg.feat.dinnerVip": {
    en: "VIP menu — premium meze, mixed grill & special dishes", tr: "VIP menü — premium meze, karışık ızgara & özel yemekler", de: "VIP-Menü — Premium-Meze, Mixed Grill & Extras", es: "Menú VIP — meze premium, parrillada mixta y platos especiales", ru: "VIP-меню — премиум мезе, микс-гриль и спецблюда", ar: "قائمة VIP — مقبلات فاخرة، مشويات مشكلة وأطباق خاصة",
    fa: "منوی VIP — مزه‌های ممتاز، گریل مخلوط و غذاهای ویژه", fr: "Menu VIP — mezzés premium, grillades & plats spéciaux", it: "Menu VIP — meze premium, piatto misto alla griglia e piatti speciali", zh: "VIP菜单——尊享冷盘、混合烤肉与特色菜肴", id: "Menu VIP — meze premium, mixed grill & hidangan khusus", ms: "Menu VIP — meze premium, panggangan campuran & hidangan istimewa", pl: "Menu VIP — premium mezze, półmisek mieszany i dania specjalne", bg: "VIP меню — премиум мезета, микс грил и специални ястия", ro: "Meniu VIP — mezeluri premium, grătar mixt și preparate speciale", uk: "VIP меню — преміум мезе, мікс-гриль та спеціальні страви", ja: "VIPメニュー — プレミアムメゼ、ミックスグリル&特別料理", ko: "VIP 메뉴 — 프리미엄 메제, 믹스 그릴 & 스페셜 요리", hi: "VIP मेन्यू — प्रीमियम मेज़े, मिक्स्ड ग्रिल और विशेष व्यंजन", ur: "VIP مینو — پریمیم میزے، مکسڈ گرل اور خصوصی پکوان"
  },
  "pkg.feat.tableVip": {
    en: "Private VIP table — best location", tr: "Özel VIP masa — en iyi konum", de: "Privater VIP-Tisch — beste Lage", es: "Mesa VIP privada — mejor ubicación", ru: "VIP-столик — лучшее расположение", ar: "طاولة VIP خاصة — أفضل موقع",
    fa: "میز خصوصی VIP — بهترین موقعیت", fr: "Table VIP privée — meilleur emplacement", it: "Tavolo VIP privato — miglior posizione", zh: "专属VIP餐桌——最佳位置", id: "Meja VIP privat — lokasi terbaik", ms: "Meja VIP peribadi — lokasi terbaik", pl: "Prywatny stół VIP — najlepsza lokalizacja", bg: "Лична VIP маса — най-доброто място", ro: "Masă VIP privată — cea mai bună locație", uk: "Приватний VIP столик — найкраще розташування", ja: "プライベートVIPテーブル — 最高のロケーション", ko: "프라이빗 VIP 테이블 — 최고의 위치", hi: "प्राइवेट VIP टेबल — सर्वोत्तम स्थान", ur: "نجی VIP ٹیبل — بہترین جگہ"
  },
  "pkg.feat.priority": {
    en: "Priority boarding & VIP service", tr: "Öncelikli biniş & VIP hizmet", de: "Bevorzugter Einstieg & VIP-Service", es: "Embarque prioritario y servicio VIP", ru: "Приоритетная посадка и VIP-обслуживание", ar: "أولوية الصعود وخدمة VIP",
    fa: "سوار شدن با اولویت و خدمات VIP", fr: "Embarquement prioritaire & service VIP", it: "Imbarco prioritario e servizio VIP", zh: "优先登船与VIP服务", id: "Naik kapal prioritas & layanan VIP", ms: "Keutamaan menaiki bot & perkhidmatan VIP", pl: "Priorytetowe wejście na pokład i obsługa VIP", bg: "Приоритетно качване и VIP обслужване", ro: "Îmbarcare prioritară și serviciu VIP", uk: "Пріоритетна посадка та VIP обслуговування", ja: "優先乗船&VIPサービス", ko: "우선 탑승 & VIP 서비스", hi: "प्राथमिकता बोर्डिंग और VIP सेवा", ur: "ترجیحی بورڈنگ اور VIP سروس"
  },

  // ========== EXTRAS ==========
  "pkg.extras": {
    en: "Optional extras:", tr: "Opsiyonel ekstralar:", de: "Optionale Extras:", es: "Extras opcionales:", ru: "Дополнительные опции:", ar: "إضافات اختيارية:",
    fa: "افزودنی‌های اختیاری:", fr: "Options supplémentaires :", it: "Extra opzionali:", zh: "可选附加项:", id: "Tambahan opsional:", ms: "Tambahan pilihan:", pl: "Dodatki opcjonalne:", bg: "Опционални добавки:", ro: "Suplimente opționale:", uk: "Додаткові опції:", ja: "オプション追加：", ko: "선택 가능한 추가 옵션:", hi: "वैकल्पिक अतिरिक्त सुविधाएं:", ur: "اختیاری اضافی خدمات:"
  },
  "pkg.badge.alcohol": {
    en: "Alcohol €{p.unlimited}", tr: "Alkol €{p.unlimited}", de: "Alkohol €{p.unlimited}", es: "Alcohol €{p.unlimited}", ru: "Алкоголь €{p.unlimited}", ar: "كحول €{p.unlimited}",
    fa: "الکل €{p.unlimited}", fr: "Alcool €{p.unlimited}", it: "Alcol €{p.unlimited}", zh: "酒水€{p.unlimited}", id: "Alkohol €{p.unlimited}", ms: "Alkohol €{p.unlimited}", pl: "Alkohol €{p.unlimited}", bg: "Алкохол €{p.unlimited}", ro: "Alcool €{p.unlimited}", uk: "Алкоголь €{p.unlimited}", ja: "アルコール €{p.unlimited}", ko: "주류 €{p.unlimited}", hi: "अल्कोहल €{p.unlimited}", ur: "الکحل €{p.unlimited}"
  },
  "pkg.badge.transfer": {
    en: "Transfer €{p.transfer}", tr: "Transfer €{p.transfer}", de: "Transfer €{p.transfer}", es: "Traslado €{p.transfer}", ru: "Трансфер €{p.transfer}", ar: "نقل €{p.transfer}",
    fa: "ترانسفر €{p.transfer}", fr: "Transfert €{p.transfer}", it: "Transfer €{p.transfer}", zh: "接送€{p.transfer}", id: "Antar-jemput €{p.transfer}", ms: "Pemindahan €{p.transfer}", pl: "Transfer €{p.transfer}", bg: "Трансфер €{p.transfer}", ro: "Transfer €{p.transfer}", uk: "Трансфер €{p.transfer}", ja: "送迎 €{p.transfer}", ko: "교통편 €{p.transfer}", hi: "ट्रांसफर €{p.transfer}", ur: "ٹرانسفر €{p.transfer}"
  },
  "pkg.badge.romantic": {
    en: "Romantic €25", tr: "Romantik €25", de: "Romantik €25", es: "Romántico €25", ru: "Романтика €25", ar: "رومانسي €25",
    fa: "رمانتیک €25", fr: "Romantique €25", it: "Romantico €25", zh: "浪漫€25", id: "Romantis €25", ms: "Romantik €25", pl: "Romantyczny €25", bg: "Романтична €25", ro: "Romantic €25", uk: "Романтик €25", ja: "ロマンティック €25", ko: "로맨틱 €25", hi: "रोमांटिक €25", ur: "رومانٹک €25"
  },

  // ========== PACKAGE OPTIONS ==========
  "pkg.opt.std": {
    en: "Standard", tr: "Standart", de: "Standard", es: "Estándar", ru: "Стандарт", ar: "قياسي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard", uk: "Стандарт", ja: "スタンダード", ko: "Standard", hi: "स्टैंडर्ड", ur: "اسٹینڈرڈ"
  },
  "pkg.opt.prem": {
    en: "Premium", tr: "Premium", de: "Premium", es: "Premium", ru: "Премиум", ar: "بريميوم",
    fa: "پرمیوم", fr: "Premium", it: "Premium", zh: "高级", id: "Premium", ms: "Premium", pl: "Premium", bg: "Премиум", ro: "Premium", uk: "Преміум", ja: "プレミアム", ko: "Premium", hi: "प्रीमियम", ur: "پریمیم"
  },
  "pkg.opt.vip": {
    en: "VIP", tr: "VIP", de: "VIP", es: "VIP", ru: "VIP", ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP", uk: "VIP", ja: "VIP", ko: "VIP", hi: "VIP", ur: "VIP"
  },

  // ========== BOOKING DRINK SELECTION ==========
  "booking.softDrinkBtn": {
    en: "Soft Drinks", tr: "Alkolsüz", de: "Softdrinks", es: "Sin Alcohol", ru: "Безалкогольные", ar: "مشروبات غازية",
    fa: "نوشیدنی‌های بدون‌الکل", fr: "Boissons non alcoolisées", it: "Bevande analcoliche", zh: "软饮", id: "Minuman Ringan", ms: "Minuman Ringan", pl: "Napoje bezalkoholowe", bg: "Безалкохолни напитки", ro: "Băuturi Răcoritoare", uk: "Безалкогольні напої", ja: "ソフトドリンク", ko: "소프트 드링크", hi: "सॉफ्ट ड्रिंक्स", ur: "سافٹ ڈرنکس"
  },
  "booking.glass2Btn": {
    en: "2 Glasses +€{p.alcohol2}", tr: "2 Kadeh +€{p.alcohol2}", de: "2 Gläser +€{p.alcohol2}", es: "2 Copas +€{p.alcohol2}", ru: "2 бокала +€{p.alcohol2}", ar: "كأسان +€{p.alcohol2}",
    fa: "۲ لیوان +€{p.alcohol2}", fr: "2 verres +€{p.alcohol2}", it: "2 bicchieri +€{p.alcohol2}", zh: "2杯酒+€{p.alcohol2}", id: "2 Gelas +€{p.alcohol2}", ms: "2 Gelas +€{p.alcohol2}", pl: "2 kieliszki +€{p.alcohol2}", bg: "2 чаши +€{p.alcohol2}", ro: "2 Pahare +€{p.alcohol2}", uk: "2 келихи +€{p.alcohol2}", ja: "グラス2杯 +€{p.alcohol2}", ko: "2잔 +€{p.alcohol2}", hi: "2 ग्लास +€{p.alcohol2}", ur: "2 گلاس +€{p.alcohol2}"
  },
  "booking.unlimitedBtn": {
    en: "Unlimited +€{p.unlimited}", tr: "Sınırsız +€{p.unlimited}", de: "Unbegrenzt +€{p.unlimited}", es: "Ilimitado +€{p.unlimited}", ru: "Безлимит +€{p.unlimited}", ar: "غير محدود +€{p.unlimited}",
    fa: "نامحدود +€{p.unlimited}", fr: "Illimité +€{p.unlimited}", it: "Illimitato +€{p.unlimited}", zh: "无限畅饮+€{p.unlimited}", id: "Tanpa Batas +€{p.unlimited}", ms: "Tanpa Had +€{p.unlimited}", pl: "Nieograniczone +€{p.unlimited}", bg: "Неограничено +€{p.unlimited}", ro: "Nelimitat +€{p.unlimited}", uk: "Безліміт +€{p.unlimited}", ja: "飲み放題 +€{p.unlimited}", ko: "무제한 +€{p.unlimited}", hi: "असीमित +€{p.unlimited}", ur: "لامحدود +€{p.unlimited}"
  },
  "booking.drinkWarn": {
    en: "⚠ Please select a drink option", tr: "⚠ Lütfen içecek seçimi yapın", de: "⚠ Bitte Getränk wählen", es: "⚠ Seleccione una opción de bebida", ru: "⚠ Выберите вариант напитков", ar: "⚠ يرجى اختيار خيار المشروبات",
    fa: "⚠ لطفاً یک گزینه نوشیدنی انتخاب کنید", fr: "⚠ Veuillez sélectionner une option de boisson", it: "⚠ Per favore selezioni un'opzione bevande", zh: "⚠ 请选择一种饮品", id: "⚠ Silakan pilih opsi minuman", ms: "⚠ Sila pilih pilihan minuman", pl: "⚠ Proszę wybrać opcję napojów", bg: "⚠ Моля, изберете опция за напитки", ro: "⚠ Vă rugăm să selectați o opțiune de băutură", uk: "⚠ Будь ласка, оберіть опцію напоїв", ja: "⚠ ドリンクオプションをお選びください", ko: "⚠ 음료 옵션을 선택해 주십시오", hi: "⚠ कृपया एक ड्रिंक विकल्प चुनें", ur: "⚠ براہ کرم ڈرنک کا اختیار منتخب کریں"
  },
  "booking.softInfo": {
    en: "All guests get unlimited soft drinks", tr: "Tüm misafirler sınırsız alkolsüz içecek alır", de: "Alle Gäste erhalten unbegrenzt Softdrinks", es: "Todos los huéspedes reciben refrescos ilimitados", ru: "Все гости получат безлимитные безалкогольные напитки", ar: "جميع الضيوف يحصلون على مشروبات غازية غير محدودة",
    fa: "همه مهمانان نوشیدنی‌های بدون‌الکل نامحدود دریافت می‌کنند", fr: "Tous les invités ont les boissons non alcoolisées à volonté", it: "Tutti gli ospiti ricevono bevande analcoliche illimitate", zh: "所有宾客可无限畅饮软饮", id: "Semua tamu mendapat minuman ringan tanpa batas", ms: "Semua tetamu mendapat minuman ringan tanpa had", pl: "Wszyscy goście otrzymują nieograniczone napoje bezalkoholowe", bg: "Всички гости получават неограничени безалкохолни напитки", ro: "Toți oaspeții primesc băuturi răcoritoare nelimitate", uk: "Усі гості отримують безлімітні безалкогольні напої", ja: "全てのお客様にソフトドリンク飲み放題が含まれております", ko: "모든 고객님께 무제한 소프트 드링크가 제공됩니다", hi: "सभी अतिथियों को असीमित सॉफ्ट ड्रिंक्स मिलते हैं", ur: "تمام مہمانوں کو لامحدود سافٹ ڈرنکس ملتے ہیں"
  },

  // ========== GALLERY TABS ==========
  "gal.tab.all": {
    en: "All", tr: "Hepsi", de: "Alle", es: "Todo", ru: "Все", ar: "الكل",
    fa: "همه", fr: "Tous", it: "Tutte", zh: "全部", id: "Semua", ms: "Semua", pl: "Wszystko", bg: "Всички", ro: "Toate", uk: "Усі", ja: "すべて", ko: "전체", hi: "सभी", ur: "تمام"
  },
  "gal.tab.boat": {
    en: "Boat", tr: "Tekne", de: "Boot", es: "Barco", ru: "Судно", ar: "القارب",
    fa: "کشتی", fr: "Bateau", it: "Barca", zh: "游船", id: "Kapal", ms: "Bot", pl: "Łódź", bg: "Лодка", ro: "Vapor", uk: "Яхта", ja: "船", ko: "보트", hi: "बोट", ur: "کشتی"
  },
  "gal.tab.dining": {
    en: "Dining", tr: "Yemek", de: "Essen", es: "Cena", ru: "Ужин", ar: "العشاء",
    fa: "غذاخوری", fr: "Repas", it: "Cena", zh: "用餐", id: "Santap", ms: "Santapan", pl: "Kolacja", bg: "Вечеря", ro: "Cină", uk: "Вечеря", ja: "お食事", ko: "다이닝", hi: "डाइनिंग", ur: "کھانا"
  },
  "gal.tab.views": {
    en: "Views", tr: "Manzara", de: "Aussicht", es: "Vistas", ru: "Виды", ar: "المناظر",
    fa: "مناظر", fr: "Vues", it: "Vedute", zh: "景色", id: "Pemandangan", ms: "Pemandangan", pl: "Widoki", bg: "Гледки", ro: "Priveliști", uk: "Краєвиди", ja: "景色", ko: "전망", hi: "दृश्य", ur: "مناظر"
  },
  "gal.tab.entertainment": {
    en: "Entertainment", tr: "Eğlence", de: "Show", es: "Show", ru: "Шоу", ar: "الترفيه",
    fa: "سرگرمی", fr: "Divertissement", it: "Intrattenimento", zh: "娱乐", id: "Hiburan", ms: "Hiburan", pl: "Rozrywka", bg: "Забавление", ro: "Divertisment", uk: "Розваги", ja: "エンターテイメント", ko: "엔터테인먼트", hi: "मनोरंजन", ur: "تفریح"
  },
  "gal.tab.atmosphere": {
    en: "Atmosphere", tr: "Atmosfer", de: "Atmosphäre", es: "Ambiente", ru: "Атмосфера", ar: "الأجواء",
    fa: "فضا", fr: "Atmosphère", it: "Atmosfera", zh: "氛围", id: "Suasana", ms: "Suasana", pl: "Atmosfera", bg: "Атмосфера", ro: "Atmosferă", uk: "Атмосфера", ja: "雰囲気", ko: "분위기", hi: "वातावरण", ur: "ماحول"
  },

  // ========== GALLERY CAPTIONS ==========
  "gal.1.title": {
    en: "Bosphorus Night View", tr: "Boğaz Gece Manzarası", de: "Bosporus-Nachtblick", es: "Vista Nocturna del Bósforo", ru: "Ночной вид Босфора", ar: "منظر البوسفور الليلي",
    fa: "منظره شبانه بسفر", fr: "Vue nocturne du Bosphore", it: "Vista notturna sul Bosforo", zh: "博斯普鲁斯夜景", id: "Pemandangan Malam Bosphorus", ms: "Pemandangan Malam Bosphorus", pl: "Nocny widok Bosforu", bg: "Нощна гледка на Босфора", ro: "Priveliște Nocturnă pe Bosfor", uk: "Bosphorus Night — вид", ja: "Bosphorus Nightの眺め", ko: "Bosphorus Night 전망", hi: "Bosphorus Night का दृश्य", ur: "Bosphorus Night منظر"
  },
  "gal.1.desc": {
    en: "Istanbul's iconic skyline at night", tr: "İstanbul'un ikonik gece silüeti", de: "Istanbuls ikonische Skyline bei Nacht", es: "El icónico horizonte nocturno de Estambul", ru: "Ночной горизонт Стамбула", ar: "أفق إسطنبول الليلي الأيقوني",
    fa: "خط آسمان نمادین استانبول در شب", fr: "L'horizon iconique d'Istanbul la nuit", it: "Lo skyline iconico di Istanbul di notte", zh: "伊斯坦布尔标志性夜间天际线", id: "Cakrawala ikonik Istanbul di malam hari", ms: "Ufuk ikonik Istanbul pada waktu malam", pl: "Kultowa panorama Stambułu nocą", bg: "Емблематичният силует на Истанбул през нощта", ro: "Silueta iconică a Istanbulului noaptea", uk: "Iconic панорама Istanbul вночі", ja: "Istanbulの象徴的な夜景", ko: "밤의 Istanbul 상징적인 스카이라인", hi: "रात में Istanbul का प्रतिष्ठित स्काईलाइन", ur: "رات کو Istanbul کا مشہور اسکائی لائن"
  },
  "gal.2.title": {
    en: "Dinner Setup", tr: "Yemek Düzeni", de: "Tischdekoration", es: "Montaje de Cena", ru: "Сервировка ужина", ar: "ترتيب العشاء",
    fa: "چیدمان شام", fr: "Dressage de table", it: "Allestimento della cena", zh: "晚宴布置", id: "Pengaturan Makan Malam", ms: "Susunan Makan Malam", pl: "Aranżacja kolacji", bg: "Сервиране на вечеря", ro: "Aranjament de Cină", uk: "Сервірування вечері", ja: "ディナーセッティング", ko: "디너 세팅", hi: "डिनर सेटअप", ur: "ڈنر کی ترتیب"
  },
  "gal.2.desc": {
    en: "Premium table arrangement", tr: "Premium masa düzeni", de: "Premium-Tischarrangement", es: "Arreglo de mesa premium", ru: "Премиальная сервировка", ar: "ترتيب طاولة فاخر",
    fa: "آرایش ممتاز میز", fr: "Décoration de table premium", it: "Allestimento tavolo premium", zh: "高级餐桌摆设", id: "Pengaturan meja premium", ms: "Susunan meja premium", pl: "Premium ustawienie stołu", bg: "Премиум подредба на масата", ro: "Aranjament premium de masă", uk: "Преміальне оформлення столів", ja: "プレミアムなテーブルアレンジメント", ko: "프리미엄 테이블 배치", hi: "प्रीमियम टेबल व्यवस्था", ur: "پریمیم ٹیبل کا انتظام"
  },
  "gal.a1.title": {
    en: "Velvet Dining Hall", tr: "Kadife Yemek Salonu", de: "Samt-Speisesaal", es: "Salón de Terciopelo", ru: "Бархатный зал", ar: "قاعة طعام مخملية",
    fa: "سالن غذاخوری مخمل", fr: "Salle à manger en velours", it: "Sala da pranzo in velluto", zh: "丝绒用餐大厅", id: "Aula Makan Beludru", ms: "Dewan Makan Baldu", pl: "Aksamitna sala jadalna", bg: "Велурена зала за вечеря", ro: "Sală de Masă din Catifea", uk: "Оксамитова обідня зала", ja: "ベルベットダイニングホール", ko: "벨벳 다이닝 홀", hi: "वेलवेट डाइनिंग हॉल", ur: "ویلویٹ ڈائننگ ہال"
  },
  "gal.a1.desc": {
    en: "Premium seating with crystal glassware", tr: "Kristal cam takımıyla premium oturma", de: "Premium-Sitze mit Kristallgläsern", es: "Asientos premium con cristalería", ru: "Премиум-места с хрусталем", ar: "مقاعد فاخرة مع أدوات زجاجية كريستالية",
    fa: "جایگاه ممتاز با ظروف کریستال", fr: "Placement premium avec verrerie en cristal", it: "Posti a sedere premium con cristalleria", zh: "高级座席配水晶杯具", id: "Tempat duduk premium dengan gelas kristal", ms: "Tempat duduk premium dengan perkakas kaca kristal", pl: "Premium miejsca z kryształowym szkłem", bg: "Премиум места с кристални чаши", ro: "Locuri premium cu pahare de cristal", uk: "Преміальні місця з кришталевим посудом", ja: "クリスタルグラスウェアを備えたプレミアムシート", ko: "크리스탈 유리잔과 함께하는 프리미엄 좌석", hi: "क्रिस्टल ग्लासवेयर के साथ प्रीमियम बैठक व्यवस्था", ur: "کرسٹل شیشے کے برتنوں کے ساتھ پریمیم نشستیں"
  },
  "gal.a2.title": {
    en: "Signature Mezes", tr: "Özel Meze Tabağı", de: "Signature-Mezes", es: "Mezes de la Casa", ru: "Фирменные мезе", ar: "مقبلات مميزة",
    fa: "مزه‌های ویژه", fr: "Mezzés signature", it: "Meze d'autore", zh: "招牌冷盘", id: "Meze Andalan", ms: "Meze Istimewa", pl: "Charakterystyczne mezze", bg: "Подпис мезета", ro: "Mezeluri Semnătură", uk: "Фірмові мезе", ja: "シグネチャーメゼ", ko: "시그니처 메제", hi: "सिग्नेचर मेज़े", ur: "مخصوص میزے"
  },
  "gal.a2.desc": {
    en: "Turkish starter selection", tr: "Türk başlangıç seçkisi", de: "Türkische Vorspeisenauswahl", es: "Selección de entrantes turcos", ru: "Турецкие закуски на выбор", ar: "مقبلات تركية متنوعة",
    fa: "مجموعه پیش‌غذاهای ترکی", fr: "Sélection d'entrées turques", it: "Selezione di antipasti turchi", zh: "土耳其前菜精选", id: "Pilihan hidangan pembuka Turki", ms: "Pilihan pembuka selera Turki", pl: "Turecki wybór przystawek", bg: "Турски избор на предястия", ro: "Selecție de aperitive turcești", uk: "Вибір турецьких закусок", ja: "トルコ風前菜の盛り合わせ", ko: "터키식 전채 요리 모음", hi: "तुर्की स्टार्टर चयन", ur: "ترکی اسٹارٹر کا انتخاب"
  },
  "gal.3.title": {
    en: "Luxury Yacht Tour", tr: "Lüks Yat Turu", de: "Luxusyacht-Tour", es: "Tour en Yate de Lujo", ru: "Тур на люкс-яхте", ar: "جولة يخت فاخرة",
    fa: "تور کشتی لوکس", fr: "Tour en yacht de luxe", it: "Tour in yacht di lusso", zh: "豪华游艇之旅", id: "Tur Yacht Mewah", ms: "Tur Yacht Mewah", pl: "Wycieczka luksusowym jachtem", bg: "Тур с луксозна яхта", ro: "Tur cu Iaht de Lux", uk: "Тур на розкішній яхті", ja: "ラグジュアリーヨットツアー", ko: "럭셔리 요트 투어", hi: "लक्ज़री यॉट टूर", ur: "لگژری یاٹ ٹور"
  },
  "gal.3.desc": {
    en: "Watch the full experience", tr: "Tam deneyimi izleyin", de: "Erleben Sie das volle Erlebnis", es: "Vea la experiencia completa", ru: "Полный опыт круиза", ar: "شاهد التجربة الكاملة",
    fa: "تماشای کل تجربه", fr: "Découvrez toute l'expérience", it: "Guardi l'esperienza completa", zh: "观看完整体验", id: "Saksikan pengalaman lengkap", ms: "Tonton pengalaman penuh", pl: "Obejrzyj pełne doświadczenie", bg: "Вижте пълното преживяване", ro: "Priviți experiența completă", uk: "Подивіться весь досвід", ja: "クルーズ体験の全容をご覧ください", ko: "전체 경험을 감상하세요", hi: "संपूर्ण अनुभव देखें", ur: "مکمل تجربہ دیکھیے"
  },
  "gal.4.title": {
    en: "Istanbul Skyline", tr: "İstanbul Silüeti", de: "Istanbul Skyline", es: "Horizonte de Estambul", ru: "Горизонт Стамбула", ar: "أفق إسطنبول",
    fa: "خط آسمان استانبول", fr: "Horizon d'Istanbul", it: "Skyline di Istanbul", zh: "伊斯坦布尔天际线", id: "Cakrawala Istanbul", ms: "Ufuk Istanbul", pl: "Panorama Stambułu", bg: "Силует на Истанбул", ro: "Silueta Istanbulului", uk: "Панорама Istanbul", ja: "Istanbulのスカイライン", ko: "Istanbul 스카이라인", hi: "Istanbul स्काईलाइन", ur: "Istanbul اسکائی لائن"
  },
  "gal.4.desc": {
    en: "Maiden's Tower & beyond", tr: "Kız Kulesi ve ötesi", de: "Leanderturm & mehr", es: "Torre de la Doncella y más", ru: "Девичья башня и далее", ar: "برج الفتاة وما وراءه",
    fa: "برج دختر و فراتر", fr: "Tour de Léandre & au-delà", it: "Torre della Fanciulla e oltre", zh: "少女塔及其他", id: "Menara Gadis & lebih jauh", ms: "Menara Maiden & sekitarnya", pl: "Wieża Panny i dalej", bg: "Кулата на девойката и отвъд", ro: "Turnul Fecioarei și dincolo", uk: "Дівоча вежа та інше", ja: "乙女の塔と美しい景色", ko: "maiden's Tower와 그 너머", hi: "मेडन्स टावर और उससे आगे", ur: "میڈنز ٹاور اور اس سے آگے"
  },
  "gal.5.title": {
    en: "Turkish Night Show", tr: "Türk Gecesi Şovu", de: "Türkische Nachtshow", es: "Show Nocturno Turco", ru: "Турецкая ночь", ar: "عرض الليلة التركية",
    fa: "نمایش شب ترکی", fr: "Soirée turque", it: "Spettacolo della serata turca", zh: "土耳其之夜表演", id: "Pertunjukan Malam Turki", ms: "Persembahan Malam Turki", pl: "Turecki pokaz nocny", bg: "Турска нощна програма", ro: "Spectacol de Seară Turcească", uk: "Турецьке нічне шоу", ja: "トルコナイトショー", ko: "터키의 밤 쇼", hi: "तुर्की नाइट शो", ur: "ترکی نائٹ شو"
  },
  "gal.5.desc": {
    en: "Live dance & music", tr: "Canlı dans ve müzik", de: "Live-Tanz & Musik", es: "Danza y música en vivo", ru: "Живые танцы и музыка", ar: "رقص وموسيقى حية",
    fa: "رقص و موسیقی زنده", fr: "Danse & musique en direct", it: "Danza e musica dal vivo", zh: "现场舞蹈与音乐", id: "Tari & musik langsung", ms: "Tarian & muzik langsung", pl: "Taniec i muzyka na żywo", bg: "Танци и музика на живо", ro: "Dans și muzică live", uk: "Живі танці та музика", ja: "ライブダンス&音楽", ko: "라이브 댄스 & 음악", hi: "लाइव नृत्य और संगीत", ur: "لائیو رقص اور موسیقی"
  },
  "gal.6.title": {
    en: "Under the Bridge", tr: "Köprü Altından", de: "Unter der Brücke", es: "Bajo el Puente", ru: "Под мостом", ar: "تحت الجسر",
    fa: "زیر پل", fr: "Sous le pont", it: "Sotto il ponte", zh: "大桥之下", id: "Di Bawah Jembatan", ms: "Di Bawah Jambatan", pl: "Pod mostem", bg: "Под моста", ro: "Sub Pod", uk: "Під мостом", ja: "橋の下を通過", ko: "다리 아래에서", hi: "ब्रिज के नीचे", ur: "پل کے نیچے"
  },
  "gal.6.desc": {
    en: "Bosphorus Bridge at night", tr: "Boğaziçi Köprüsü gece", de: "Bosporus-Brücke bei Nacht", es: "Puente del Bósforo de noche", ru: "Мост через Босфор ночью", ar: "جسر البوسفور ليلاً",
    fa: "پل بسفر در شب", fr: "Pont du Bosphore la nuit", it: "Il Ponte del Bosforo di notte", zh: "夜晚的博斯普鲁斯大桥", id: "Jembatan Bosphorus di malam hari", ms: "Jambatan Bosphorus pada waktu malam", pl: "Most Bosforski nocą", bg: "Мостът на Босфора през нощта", ro: "Podul Bosfor noaptea", uk: "Міст через Bosphorus вночі", ja: "夜のBosphorus大橋", ko: "밤의 Bosphorus 다리", hi: "रात में Bosphorus ब्रिज", ur: "Bosphorus برج رات کے وقت"
  },
  "gal.v3.title": {
    en: "Live Show Highlights", tr: "Canlı Şov Anları", de: "Live-Show-Highlights", es: "Momentos del Show en Vivo", ru: "Лучшие моменты шоу", ar: "أبرز لحظات العرض الحي",
    fa: "نقاط برجسته نمایش زنده", fr: "Temps forts du spectacle", it: "I momenti dello spettacolo", zh: "现场表演精彩瞬间", id: "Sorotan Pertunjukan Langsung", ms: "Sorotan Persembahan Langsung", pl: "Najlepsze momenty pokazu", bg: "Акценти от живото шоу", ro: "Momente din spectacolul live", uk: "Найкращі моменти шоу", ja: "ライブショーハイライト", ko: "라이브 쇼 하이라이트", hi: "लाइव शो हाइलाइट्स", ur: "لائیو شو کی خاص باتیں"
  },
  "gal.v3.desc": {
    en: "Turkish night on the Bosphorus", tr: "Boğaz'da Türk gecesi", de: "Türkische Nacht am Bosporus", es: "Noche turca en el Bósforo", ru: "Турецкая ночь на Босфоре", ar: "ليلة تركية على البوسفور",
    fa: "شب ترکی در بسفر", fr: "Soirée turque sur le Bosphore", it: "Serata turca sul Bosforo", zh: "博斯普鲁斯的土耳其之夜", id: "Malam Turki di Bosphorus", ms: "Malam Turki di Bosphorus", pl: "Turecka noc nad Bosforem", bg: "Турска нощ на Босфора", ro: "Seară turcească pe Bosfor", uk: "Турецька ніч на Bosphorus", ja: "Bosphorusで楽しむトルコの夜", ko: "Bosphorus에서의 터키의 밤", hi: "Bosphorus पर तुर्की रात", ur: "Bosphorus پر ترکی کی رات"
  },
  "gal.v4.title": {
    en: "Dinner & Atmosphere", tr: "Yemek ve Atmosfer", de: "Dinner & Atmosphäre", es: "Cena y Ambiente", ru: "Ужин и атмосфера", ar: "العشاء والأجواء",
    fa: "شام و فضا", fr: "Dîner & Ambiance", it: "Cena e atmosfera", zh: "晚餐与氛围", id: "Makan Malam & Suasana", ms: "Makan Malam & Suasana", pl: "Kolacja i atmosfera", bg: "Вечеря и атмосфера", ro: "Cină și atmosferă", uk: "Вечеря та атмосфера", ja: "ディナー&雰囲気", ko: "디너 & 분위기", hi: "डिनर और माहौल", ur: "ڈنر اور ماحول"
  },
  "gal.v4.desc": {
    en: "A taste of the evening", tr: "Akşamdan bir tat", de: "Ein Vorgeschmack auf den Abend", es: "Un anticipo de la velada", ru: "Вкус вечера", ar: "لمحة عن المساء",
    fa: "طعمی از شب", fr: "Un avant-goût de la soirée", it: "Un assaggio della serata", zh: "夜晚的一份品味", id: "Cicipan malam ini", ms: "Cita rasa malam ini", pl: "Smak wieczoru", bg: "Вкус от вечерта", ro: "O mostră a serii", uk: "Смак вечора", ja: "素敵な夜のひととき", ko: "저녁의 맛을 느껴보세요", hi: "शाम का एक स्वाद", ur: "شام کا ایک مزہ"
  },
  "gal.v5.title": {
    en: "Guest Moments", tr: "Misafir Anları", de: "Gäste-Momente", es: "Momentos de los Invitados", ru: "Моменты гостей", ar: "لحظات الضيوف",
    fa: "لحظات مهمانان", fr: "Moments des invités", it: "Momenti degli ospiti", zh: "宾客瞬间", id: "Momen Tamu", ms: "Detik Tetamu", pl: "Chwile gości", bg: "Моменти с гостите", ro: "Momente ale oaspeților", uk: "Моменти гостей", ja: "お客様の思い出", ko: "게스트 순간", hi: "अतिथि पल", ur: "مہمانوں کے لمحات"
  },
  "gal.v5.desc": {
    en: "Happy travellers aboard", tr: "Mutlu yolcular gemide", de: "Glückliche Gäste an Bord", es: "Viajeros felices a bordo", ru: "Счастливые путешественники на борту", ar: "مسافرون سعداء على متن السفينة",
    fa: "مسافران شاد در کشتی", fr: "Voyageurs heureux à bord", it: "Viaggiatori felici a bordo", zh: "船上的快乐旅客", id: "Para pelancong bahagia di atas kapal", ms: "Para pengembara gembira di atas kapal", pl: "Szczęśliwi podróżni na pokładzie", bg: "Щастливи пътници на борда", ro: "Călători fericiți la bord", uk: "Щасливі мандрівники на борту", ja: "船上で笑顔の旅行者たち", ko: "선상의 행복한 여행자들", hi: "बोर्ड पर खुश यात्री", ur: "جہاز پر خوش سیاح"
  },
  "gal.v6.title": {
    en: "Boat Tour", tr: "Tekne Turu", de: "Bootstour", es: "Tour en Barco", ru: "Морская прогулка", ar: "جولة بالقارب",
    fa: "تور قایق", fr: "Tour en bateau", it: "Tour in barca", zh: "游船之旅", id: "Tur Perahu", ms: "Pelayaran Perahu", pl: "Wycieczka łodzią", bg: "Обиколка с лодка", ro: "Tur cu barca", uk: "Прогулянка на катері", ja: "ボートツアー", ko: "보트 투어", hi: "बोट टूर", ur: "بوٹ ٹور"
  },
  "gal.v6.desc": {
    en: "Sailing the Bosphorus", tr: "Boğaz'da yelken", de: "Segeln auf dem Bosporus", es: "Navegando el Bósforo", ru: "Плавание по Босфору", ar: "الإبحار في البوسفور",
    fa: "قایقرانی در بسفر", fr: "Navigation sur le Bosphore", it: "Navigando il Bosforo", zh: "畅游博斯普鲁斯", id: "Berlayar di Bosphorus", ms: "Belayar di Bosphorus", pl: "Żeglowanie po Bosforze", bg: "Плаване по Босфора", ro: "Navigând pe Bosfor", uk: "Плавання по Bosphorus", ja: "Bosphorusを航行", ko: "Bosphorus 항해", hi: "Bosphorus में नौकायन", ur: "Bosphorus پر سفر"
  },
  "gal.7.title": {
    en: "Premium Cuisine", tr: "Premium Mutfak", de: "Premium-Küche", es: "Cocina Premium", ru: "Премиум-кухня", ar: "مطبخ فاخر",
    fa: "آشپزی ممتاز", fr: "Cuisine premium", it: "Cucina premium", zh: "高级美食", id: "Masakan Premium", ms: "Masakan Premium", pl: "Kuchnia premium", bg: "Премиум кухня", ro: "Bucătărie Premium", uk: "Преміальна кухня", ja: "プレミアム料理", ko: "프리미엄 요리", hi: "प्रीमियम व्यंजन", ur: "پریمیم کھانے"
  },
  "gal.7.desc": {
    en: "10 meze + main course + dessert", tr: "10 meze + ana yemek + tatlı", de: "10 Meze + Hauptgang + Dessert", es: "10 meze + plato principal + postre", ru: "10 мезе + основное + десерт", ar: "10 مقبلات + طبق رئيسي + حلوى",
    fa: "۱۰ مزه + غذای اصلی + دسر", fr: "10 mezzés + plat principal + dessert", it: "10 meze + secondo + dolce", zh: "10道冷盘+主菜+甜点", id: "10 meze + menu utama + pencuci mulut", ms: "10 meze + hidangan utama + pencuci mulut", pl: "10 mezze + danie główne + deser", bg: "10 мезета + основно ястие + десерт", ro: "10 mezeluri + fel principal + desert", uk: "10 мезе + основна страва + десерт", ja: "メゼ10品+メインコース+デザート", ko: "메제 10가지 + 메인 코스 + 디저트", hi: "10 मेज़े + मुख्य व्यंजन + मिठाई", ur: "10 میزے + مین کورس + ڈیزرٹ"
  },
  "gal.8.title": {
    en: "Romantic Evening", tr: "Romantik Akşam", de: "Romantischer Abend", es: "Noche Romántica", ru: "Романтический вечер", ar: "أمسية رومانسية",
    fa: "شب رمانتیک", fr: "Soirée romantique", it: "Serata romantica", zh: "浪漫之夜", id: "Malam Romantis", ms: "Petang Romantik", pl: "Romantyczny wieczór", bg: "Романтична вечер", ro: "Seară Romantică", uk: "Романтичний вечір", ja: "ロマンティックな夜", ko: "로맨틱한 저녁", hi: "रोमांटिक शाम", ur: "رومانوی شام"
  },
  "gal.8.desc": {
    en: "Perfect for couples", tr: "Çiftler için mükemmel", de: "Perfekt für Paare", es: "Perfecto para parejas", ru: "Идеально для пар", ar: "مثالية للأزواج",
    fa: "ایده‌آل برای زوج‌ها", fr: "Parfait pour les couples", it: "Perfetta per le coppie", zh: "完美的情侣选择", id: "Sempurna untuk pasangan", ms: "Sempurna untuk pasangan", pl: "Idealnie dla par", bg: "Перфектно за двойки", ro: "Perfect pentru cupluri", uk: "Ідеально для пар", ja: "カップルに最適です", ko: "커플에게 완벽합니다", hi: "जोड़ों के लिए परफेक्ट", ur: "جوڑوں کے لیے بہترین"
  },
  "gal.9.title": {
    en: "Classic Cruise", tr: "Klasik Tur", de: "Klassische Kreuzfahrt", es: "Crucero Clásico", ru: "Классический круиз", ar: "رحلة كلاسيكية",
    fa: "تور کلاسیک", fr: "Croisière Classique", it: "Crociera classica", zh: "经典游船", id: "Pelayaran Klasik", ms: "Pelayaran Klasik", pl: "Klasyczny rejs", bg: "Класически круиз", ro: "Croazieră Clasică", uk: "Класичний круїз", ja: "クラシッククルーズ", ko: "클래식 크루즈", hi: "क्लासिक क्रूज़", ur: "کلاسک کروز"
  },
  "gal.9.desc": {
    en: "Elegant vessel on the Bosphorus", tr: "Boğaz'da zarif tekne", de: "Elegantes Schiff auf dem Bosporus", es: "Embarcación elegante en el Bósforo", ru: "Элегантное судно на Босфоре", ar: "سفينة أنيقة في البوسفور",
    fa: "کشتی شیک بر روی بسفر", fr: "Bateau élégant sur le Bosphore", it: "Elegante imbarcazione sul Bosforo", zh: "博斯普鲁斯上的优雅船艇", id: "Kapal elegan di Bosphorus", ms: "Kapal elegan di atas Bosphorus", pl: "Elegancka jednostka nad Bosforem", bg: "Елегантен съд по Босфора", ro: "Vas elegant pe Bosfor", uk: "Елегантне судно на Bosphorus", ja: "Bosphorusを優雅に航行する船", ko: "Bosphorus 위의 우아한 선박", hi: "Bosphorus पर सुरुचिपूर्ण जहाज़", ur: "Bosphorus پر شاندار جہاز"
  },
  "gal.10.title": {
    en: "Night Atmosphere", tr: "Gece Atmosferi", de: "Nacht-Atmosphäre", es: "Ambiente Nocturno", ru: "Ночная атмосфера", ar: "أجواء الليل",
    fa: "فضای شبانه", fr: "Ambiance nocturne", it: "Atmosfera notturna", zh: "夜晚氛围", id: "Suasana Malam", ms: "Suasana Malam", pl: "Nocna atmosfera", bg: "Нощна атмосфера", ro: "Atmosferă Nocturnă", uk: "Нічна атмосфера", ja: "夜の雰囲気", ko: "밤의 분위기", hi: "रात का माहौल", ur: "رات کا ماحول"
  },
  "gal.10.desc": {
    en: "Unforgettable ambiance", tr: "Unutulmaz ambiyans", de: "Unvergessliche Atmosphäre", es: "Ambiente inolvidable", ru: "Незабываемая атмосфера", ar: "أجواء لا تُنسى",
    fa: "جوی فراموش‌نشدنی", fr: "Ambiance inoubliable", it: "Ambiente indimenticabile", zh: "难以忘怀的氛围", id: "Ambiance tak terlupakan", ms: "Suasana yang tidak dapat dilupakan", pl: "Niezapomniany nastrój", bg: "Незабравима обстановка", ro: "Ambianță de neuitat", uk: "Незабутня атмосфера", ja: "忘れられないひととき", ko: "잊을 수 없는 분위기", hi: "अविस्मरणीय वातावरण", ur: "ناقابل فراموش فضا"
  },

  // ========== BOARDING SECTION ==========
  "boarding.label": {
    en: "Your Evening Begins", tr: "Akşamınız Başlıyor", de: "Ihr Abend beginnt", es: "Su Noche Comienza", ru: "Ваш вечер начинается", ar: "مساؤكم يبدأ",
    fa: "شب شما آغاز می‌شود", fr: "Votre soirée commence", it: "La Sua serata ha inizio", zh: "您的夜晚开始", id: "Malam Anda Dimulai", ms: "Petang Anda Bermula", pl: "Państwa wieczór się zaczyna", bg: "Вашата вечер започва", ro: "Seara Dumneavoastră Începe", uk: "Ваш вечір починається", ja: "素敵な夜の始まり", ko: "저녁 시간이 시작됩니다", hi: "आपकी संध्या का आरंभ", ur: "آپ کی شام کا آغاز"
  },
  "boarding.title": {
    en: "Welcome Aboard", tr: "Gemiye Hoş Geldiniz", de: "Willkommen an Bord", es: "Bienvenido a Bordo", ru: "Добро пожаловать на борт", ar: "مرحبًا على متن السفينة",
    fa: "به کشتی خوش آمدید", fr: "Bienvenue à bord", it: "Benvenuto a bordo", zh: "欢迎登船", id: "Selamat Datang di Kapal", ms: "Selamat Datang ke Kapal", pl: "Witamy na pokładzie", bg: "Добре дошли на борда", ro: "Bine Ați Venit la Bord", uk: "Ласкаво просимо на борт", ja: "ようこそボスポラス・ナイトへ", ko: "승선을 환영합니다", hi: "स्वागत है जहाज़ पर", ur: "جہاز پر خوش آمدید"
  },
  "boarding.music": {
    en: "Live music welcomes you", tr: "Canlı müzik sizi karşılıyor", de: "Live-Musik empfängt Sie", es: "La música en vivo te da la bienvenida", ru: "Живая музыка встречает вас", ar: "الموسيقى الحية ترحب بكم",
    fa: "موسیقی زنده به شما خوشامد می‌گوید", fr: "La musique live vous accueille", it: "La musica dal vivo La accoglie", zh: "现场音乐迎接您", id: "Musik langsung menyambut Anda", ms: "Muzik langsung mengalu-alukan anda", pl: "Muzyka na żywo wita Państwa", bg: "Музика на живо Ви посреща", ro: "Muzica live vă întâmpină", uk: "Вас вітає жива музика", ja: "生演奏でお出迎え", ko: "라이브 음악이 여러분을 환영합니다", hi: "लाइव संगीत से स्वागत", ur: "براہ راست موسیقی آپ کا استقبال کرتی ہے"
  },
  "boarding.music.desc": {
    en: "Live singer welcomes you as you step on board", tr: "Gemiye adım attığınızda canlı şarkıcı sizi karşılıyor", de: "Live-Sänger begrüßt Sie beim Betreten des Schiffes", es: "Un cantante en vivo te da la bienvenida al subir a bordo", ru: "Живой певец встречает вас при посадке", ar: "مغني حي يرحب بكم عند صعودكم على متن السفينة",
    fa: "خواننده زنده هنگام سوار شدن به شما خوشامد می‌گوید", fr: "Un chanteur en direct vous accueille dès votre arrivée à bord", it: "Un cantante dal vivo La accoglie mentre sale a bordo", zh: "您登船的一刻,现场歌手迎接您", id: "Penyanyi langsung menyambut Anda saat melangkah naik ke kapal", ms: "Penyanyi langsung mengalu-alukan anda ketika anda menaiki bot", pl: "Śpiewak na żywo wita Państwa, gdy wchodzicie na pokład", bg: "Певец на живо Ви посреща, когато стъпите на борда", ro: "Cântărețul live vă întâmpină când pășiți la bord", uk: "Співак вітає Вас, коли Ви піднімаєтеся на борт", ja: "ご乗船の際、生歌でお迎えいたします", ko: "승선하시는 순간 라이브 가수가 여러분을 환영합니다", hi: "जैसे ही आप जहाज़ पर कदम रखते हैं, लाइव गायक आपका स्वागत करता है", ur: "جیسے ہی آپ جہاز پر قدم رکھتے ہیں، لائیو گلوکار آپ کا استقبال کرتا ہے"
  },
  "boarding.table": {
    en: "Your reserved table awaits", tr: "Rezerve masanız hazır", de: "Ihr reservierter Tisch wartet", es: "Su mesa reservada le espera", ru: "Ваш зарезервированный стол ждёт", ar: "طاولتكم المحجوزة بانتظاركم",
    fa: "میز رزرو شده شما منتظرتان است", fr: "Votre table réservée vous attend", it: "Il Suo tavolo riservato L'attende", zh: "您的专属餐桌已备", id: "Meja yang Anda pesan menanti", ms: "Meja tempahan anda menanti", pl: "Państwa zarezerwowany stół czeka", bg: "Запазената Ви маса Ви очаква", ro: "Masa dumneavoastră rezervată vă așteaptă", uk: "Ваш зарезервований столик чекає", ja: "ご予約のお席をご用意", ko: "예약하신 테이블이 준비되어 있습니다", hi: "आपकी आरक्षित मेज़ तैयार है", ur: "آپ کی مخصوص میز منتظر ہے"
  },
  "boarding.table.desc": {
    en: "Pre-assigned private seating with the best views", tr: "En iyi manzaralı özel oturma düzeni", de: "Vorab zugewiesene Plätze mit bester Aussicht", es: "Asientos privados preasignados con las mejores vistas", ru: "Заранее назначенные места с лучшим видом", ar: "مقاعد خاصة مخصصة مسبقًا بأفضل الإطلالات",
    fa: "جایگاه خصوصی از پیش تعیین شده با بهترین مناظر", fr: "Placement privé pré-attribué avec les meilleures vues", it: "Posto privato pre-assegnato con le migliori vedute", zh: "预先安排的专属座席,拥有最佳视野", id: "Tempat duduk privat yang sudah ditetapkan dengan pemandangan terbaik", ms: "Tempat duduk peribadi yang telah ditetapkan dengan pemandangan terbaik", pl: "Wcześniej przypisane prywatne miejsca z najlepszymi widokami", bg: "Предварително определени лични места с най-добри гледки", ro: "Loc privat pre-atribuit cu cele mai bune priveliști", uk: "Попередньо призначені приватні місця з найкращими краєвидами", ja: "最高の眺望をお楽しみいただける専用席を事前にご用意しております", ko: "최고의 전망을 자랑하는 전용 좌석이 미리 배정되어 있습니다", hi: "सर्वोत्तम दृश्यों के साथ पूर्व-निर्धारित निजी बैठक व्यवस्था", ur: "بہترین مناظر کے ساتھ پہلے سے مختص نجی نشست"
  },
  "boarding.meze": {
    en: "Meze & drinks before departure", tr: "Kalkış öncesi meze ve içecekler", de: "Meze & Getränke vor Abfahrt", es: "Meze y bebidas antes de la salida", ru: "Мезе и напитки перед отплытием", ar: "مقبلات ومشروبات قبل المغادرة",
    fa: "مزه و نوشیدنی پیش از حرکت", fr: "Mezzés & boissons avant le départ", it: "Meze e bevande prima della partenza", zh: "启航前的冷盘与饮品", id: "Meze & minuman sebelum keberangkatan", ms: "Meze & minuman sebelum bertolak", pl: "Mezze i napoje przed wypłynięciem", bg: "Мезета и напитки преди отплаването", ro: "Mezeluri și băuturi înainte de plecare", uk: "Мезе та напої перед відправленням", ja: "出航前のメゼと飲み物", ko: "출항 전 메제와 음료를 즐기십시오", hi: "प्रस्थान से पहले मेज़े और पेय", ur: "روانگی سے قبل Meze اور مشروبات"
  },
  "boarding.meze.desc": {
    en: "Start with Turkish meze and refreshments while we prepare to sail", tr: "Kalkışa hazırlanırken Türk mezeleri ve içeceklerle başlayın", de: "Beginnen Sie mit türkischen Meze und Erfrischungen", es: "Comience con meze turco y refrescos mientras nos preparamos", ru: "Начните с турецких мезе и напитков пока мы готовимся к отплытию", ar: "ابدأ بالمقبلات التركية والمشروبات أثناء التحضير للإبحار",
    fa: "با مزه ترکی و نوشیدنی‌های سرد شروع کنید تا آماده حرکت شویم", fr: "Commencez par des mezzés turcs et des rafraîchissements pendant que nous préparons l'appareillage", it: "Inizi con meze turchi e bevande mentre ci prepariamo a salpare", zh: "在我们准备启航时,先品尝土耳其冷盘与饮品", id: "Mulailah dengan meze Turki dan penyegar saat kami bersiap berlayar", ms: "Mulakan dengan meze Turki dan minuman segar semasa kami bersedia untuk belayar", pl: "Zacznij od tureckich mezze i odświeżenia, gdy przygotowujemy się do wypłynięcia", bg: "Започнете с турски мезета и освежителни напитки, докато се подготвяме за плаване", ro: "Începeți cu mezeluri turcești și răcoritoare în timp ce pregătim plecarea", uk: "Почніть з турецьких мезе та прохолодних напоїв, поки ми готуємося до відплиття", ja: "出航準備の間、トルコ風メゼとお飲み物をお楽しみください", ko: "출항 준비를 하는 동안 터키식 메제와 다과로 시작하십시오", hi: "जब हम यात्रा की तैयारी कर रहे हों, तब तुर्की मेज़े और पेय पदार्थों के साथ शुरुआत करें", ur: "جب ہم سفر کی تیاری کرتے ہیں تو ترکی Meze اور تازہ مشروبات سے آغاز کریں"
  },
  "boarding.sail": {
    en: "Show begins as we set sail", tr: "Yelken açılınca şov başlıyor", de: "Die Show beginnt mit dem Ablegen", es: "El show comienza al zarpar", ru: "Шоу начинается с отплытием", ar: "يبدأ العرض مع الإبحار",
    fa: "نمایش با حرکت کشتی آغاز می‌شود", fr: "Le spectacle commence au départ", it: "Lo spettacolo inizia al momento della partenza", zh: "启航时表演开始", id: "Pertunjukan dimulai saat kami berlayar", ms: "Persembahan bermula ketika kami bertolak", pl: "Pokaz zaczyna się wraz z wypłynięciem", bg: "Шоуто започва, когато отплаваме", ro: "Spectacolul începe când ridicăm ancora", uk: "Шоу починається, коли ми відпливаємо", ja: "出航とともにショー開始", ko: "출항과 함께 쇼가 시작됩니다", hi: "जैसे ही हम रवाना होते हैं, शो शुरू होता है", ur: "جیسے ہی ہم روانہ ہوتے ہیں شو شروع ہوتا ہے"
  },
  "boarding.sail.desc": {
    en: "The entertainment starts the moment we leave the pier", tr: "İskeleden ayrıldığımız an eğlence başlıyor", de: "Die Unterhaltung beginnt sobald wir den Pier verlassen", es: "El entretenimiento comienza en cuanto dejamos el muelle", ru: "Развлечения начинаются в момент отхода от пирса", ar: "يبدأ الترفيه لحظة مغادرة الرصيف",
    fa: "سرگرمی از لحظه‌ای که اسکله را ترک می‌کنیم آغاز می‌شود", fr: "Le divertissement démarre dès que nous quittons l'embarcadère", it: "L'intrattenimento inizia nel momento in cui lasciamo il molo", zh: "我们离开码头的那一刻,娱乐节目开启", id: "Hiburan dimulai saat kami meninggalkan dermaga", ms: "Hiburan bermula pada saat kami meninggalkan jeti", pl: "Rozrywka zaczyna się w chwili, gdy opuszczamy przystań", bg: "Забавлението започва в момента, в който напуснем пристанището", ro: "Divertismentul începe în momentul în care părăsim debarcaderul", uk: "Розважальна програма стартує в момент, коли ми залишаємо пірс", ja: "桟橋を離れた瞬間からエンターテイメントが始まります", ko: "부두를 떠나는 순간부터 공연이 시작됩니다", hi: "जिस क्षण हम घाट छोड़ते हैं, मनोरंजन शुरू हो जाता है", ur: "تفریح اسی لمحے شروع ہوتی ہے جب ہم گھاٹ سے نکلتے ہیں"
  },

  // ========== ARRIVAL SECTION ==========
  "arrival.label": {
    en: "End of Cruise", tr: "Turun Sonu", de: "Ende der Kreuzfahrt", es: "Fin del Crucero", ru: "Конец круиза", ar: "نهاية الرحلة",
    fa: "پایان تور", fr: "Fin de la croisière", it: "Fine della crociera", zh: "游船结束", id: "Akhir Pelayaran", ms: "Akhir Pelayaran", pl: "Koniec rejsu", bg: "Край на круиза", ro: "Sfârșitul Croazierei", uk: "Завершення круїзу", ja: "クルーズ終了", ko: "크루즈 종료", hi: "क्रूज़ की समाप्ति", ur: "کروز کا اختتام"
  },
  "arrival.title": {
    en: "Return to Kabataş", tr: "Kabataş'a Dönüş", de: "Rückkehr nach Kabataş", es: "Regreso a Kabataş", ru: "Возвращение в Кабаташ", ar: "العودة إلى كاباتاش",
    fa: "بازگشت به کاباتاش", fr: "Retour à Kabataş", it: "Ritorno a Kabataş", zh: "返回卡巴塔什", id: "Kembali ke Kabataş", ms: "Kembali ke Kabataş", pl: "Powrót do Kabataş", bg: "Завръщане в Кабаташ", ro: "Întoarcere la Kabataș", uk: "Повернення до Kabataş", ja: "Kabataşへ帰港", ko: "Kabataş로 돌아갑니다", hi: "Kabataş वापसी", ur: "Kabataş واپسی"
  },
  "arrival.pier": {
    en: "Back to Kabataş Pier", tr: "Kabataş İskelesi'ne dönüş", de: "Zurück zum Kabataş Pier", es: "De vuelta al muelle de Kabataş", ru: "Обратно к пирсу Кабаташ", ar: "العودة إلى رصيف كاباتاش",
    fa: "بازگشت به اسکله کاباتاش", fr: "Retour à l'embarcadère de Kabataş", it: "Ritorno al molo di Kabataş", zh: "返回卡巴塔什码头", id: "Kembali ke Dermaga Kabataş", ms: "Kembali ke Jeti Kabataş", pl: "Z powrotem na przystań Kabataş", bg: "Обратно на пристанището Кабаташ", ro: "Înapoi la Debarcaderul Kabataș", uk: "Назад до пірсу Kabataş", ja: "Kabataş桟橋へ戻ります", ko: "Kabataş 부두로 복귀", hi: "Kabataş घाट पर वापसी", ur: "Kabataş گھاٹ کی طرف واپسی"
  },
  "arrival.pier.desc": {
    en: "We return to the same pier where we departed", tr: "Kalktığımız iskeleye geri dönüyoruz", de: "Wir kehren zum selben Pier zurück", es: "Regresamos al mismo muelle de partida", ru: "Мы возвращаемся к тому же причалу", ar: "نعود إلى نفس الرصيف الذي غادرنا منه",
    fa: "به همان اسکله‌ای که از آن حرکت کردیم بازمی‌گردیم", fr: "Nous retournons au même embarcadère que celui du départ", it: "Rientriamo allo stesso molo da cui siamo partiti", zh: "我们返回启航时的同一码头", id: "Kami kembali ke dermaga yang sama tempat kami berangkat", ms: "Kami kembali ke jeti yang sama tempat kami bertolak", pl: "Wracamy na tę samą przystań, z której wypłynęliśmy", bg: "Връщаме се на същото пристанище, откъдето тръгнахме", ro: "Ne întoarcem la același debarcader de unde am plecat", uk: "Ми повертаємося до того самого пірсу, звідки відправилися", ja: "出発した桟橋と同じ場所へ帰港いたします", ko: "출발했던 동일한 부두로 돌아갑니다", hi: "हम उसी घाट पर लौटते हैं जहाँ से हमने प्रस्थान किया था", ur: "ہم اسی گھاٹ پر واپس آتے ہیں جہاں سے ہم نے روانگی کی تھی"
  },
  "arrival.photos": {
    en: "Final photos on deck", tr: "Güvertede son fotoğraflar", de: "Letzte Fotos an Deck", es: "Últimas fotos en cubierta", ru: "Последние фото на палубе", ar: "صور أخيرة على السطح",
    fa: "آخرین عکس‌ها روی عرشه", fr: "Photos finales sur le pont", it: "Ultime foto sul ponte", zh: "甲板上最后的留影", id: "Foto terakhir di dek", ms: "Foto terakhir di dek", pl: "Ostatnie zdjęcia na pokładzie", bg: "Последни снимки на палубата", ro: "Ultimele fotografii pe punte", uk: "Останні фото на палубі", ja: "デッキでの最後の記念撮影", ko: "갑판에서 마지막 사진 촬영", hi: "डेक पर अंतिम फ़ोटो", ur: "ڈیک پر آخری تصاویر"
  },
  "arrival.photos.desc": {
    en: "Capture the last moments of the Istanbul skyline", tr: "İstanbul silüetinin son anlarını yakalayın", de: "Fangen Sie die letzten Momente der Istanbul-Skyline ein", es: "Capture los últimos momentos del horizonte de Estambul", ru: "Запечатлейте последние моменты панорамы Стамбула", ar: "التقط آخر لحظات أفق إسطنبول",
    fa: "آخرین لحظات خط آسمان استانبول را ثبت کنید", fr: "Capturez les derniers instants de l'horizon d'Istanbul", it: "Catturi gli ultimi momenti dello skyline di Istanbul", zh: "捕捉伊斯坦布尔天际线的最后时刻", id: "Tangkap momen terakhir cakrawala Istanbul", ms: "Rakam detik terakhir ufuk Istanbul", pl: "Uchwyć ostatnie chwile panoramy Stambułu", bg: "Заснемете последните моменти от силуета на Истанбул", ro: "Surprindeți ultimele momente ale siluetei Istanbulului", uk: "Зафіксуйте останні моменти на тлі панорами Istanbul", ja: "Istanbulのスカイラインとの最後のひとときをお写真に収めてください", ko: "Istanbul 스카이라인의 마지막 순간을 담아가십시오", hi: "Istanbul की क्षितिज रेखा के अंतिम पलों को कैद करें", ur: "Istanbul کے افق کے آخری لمحات کو قید کریں"
  },
  "arrival.transfer": {
    en: "Your transfer awaits", tr: "Transferiniz hazır", de: "Ihr Transfer wartet", es: "Su traslado le espera", ru: "Ваш трансфер ждёт", ar: "النقل بانتظاركم",
    fa: "ترانسفر شما منتظر است", fr: "Votre transfert vous attend", it: "Il Suo transfer L'attende", zh: "您的接送车在等候", id: "Antar-jemput Anda menanti", ms: "Pemindahan anda menanti", pl: "Państwa transfer czeka", bg: "Вашият трансфер Ви очаква", ro: "Transferul dumneavoastră vă așteaptă", uk: "Ваш трансфер чекає", ja: "お迎えの送迎をご用意", ko: "교통편이 대기하고 있습니다", hi: "आपका ट्रांसफर तैयार है", ur: "آپ کی ٹرانسفر منتظر ہے"
  },
  "arrival.transfer.desc": {
    en: "If you booked a transfer, your driver will be waiting at the pier", tr: "Transfer rezervasyonu yaptıysanız şoförünüz iskelede bekliyor olacak", de: "Wenn Sie einen Transfer gebucht haben, wartet Ihr Fahrer am Pier", es: "Si reservó un traslado, su conductor estará esperando en el muelle", ru: "Если вы заказали трансфер, водитель будет ждать на пирсе", ar: "إذا حجزت نقلًا، سيكون سائقك بانتظارك في الرصيف",
    fa: "اگر ترانسفر رزرو کرده باشید، راننده شما در اسکله منتظر خواهد بود", fr: "Si vous avez réservé un transfert, votre chauffeur vous attendra à l'embarcadère", it: "Se ha prenotato il transfer, il Suo autista La attenderà al molo", zh: "若您预订了接送服务,您的司机将在码头等候", id: "Jika Anda memesan antar-jemput, sopir Anda akan menunggu di dermaga", ms: "Jika anda menempah pemindahan, pemandu anda akan menunggu di jeti", pl: "Jeśli zarezerwowali Państwo transfer, kierowca będzie czekać na przystani", bg: "Ако сте резервирали трансфер, шофьорът Ви ще чака на пристанището", ro: "Dacă ați rezervat un transfer, șoferul dumneavoastră vă va aștepta la debarcader", uk: "Якщо Ви замовили трансфер, Ваш водій чекатиме на пірсі", ja: "送迎をご予約のお客様は、桟橋でドライバーがお待ちしております", ko: "교통편을 예약하신 경우, 기사님이 부두에서 대기하고 계십니다", hi: "यदि आपने ट्रांसफर बुक किया है, तो आपका ड्राइवर घाट पर प्रतीक्षा कर रहा होगा", ur: "اگر آپ نے ٹرانسفر بک کی ہے، تو آپ کا ڈرائیور گھاٹ پر منتظر ہوگا"
  },
  "arrival.night": {
    en: "An unforgettable night", tr: "Unutulmaz bir gece", de: "Eine unvergessliche Nacht", es: "Una noche inolvidable", ru: "Незабываемая ночь", ar: "ليلة لا تُنسى",
    fa: "یک شب فراموش‌نشدنی", fr: "Une soirée inoubliable", it: "Una serata indimenticabile", zh: "难以忘怀的一夜", id: "Malam yang tak terlupakan", ms: "Malam yang tidak dapat dilupakan", pl: "Niezapomniana noc", bg: "Незабравима нощ", ro: "O noapte de neuitat", uk: "Незабутня ніч", ja: "忘れられない夜", ko: "잊을 수 없는 밤", hi: "एक अविस्मरणीय रात", ur: "ایک ناقابل فراموش رات"
  },
  "arrival.night.desc": {
    en: "Take the magic of Istanbul's night with you", tr: "İstanbul gecesinin büyüsünü yanınızda götürün", de: "Nehmen Sie den Zauber der Istanbuler Nacht mit", es: "Llévese la magia de la noche de Estambul", ru: "Возьмите с собой магию ночного Стамбула", ar: "خذ معك سحر ليل إسطنبول",
    fa: "جادوی شب استانبول را با خود ببرید", fr: "Emportez avec vous la magie de la nuit d'Istanbul", it: "Porti con sé la magia della notte di Istanbul", zh: "将伊斯坦布尔夜晚的魔力带回家", id: "Bawa pulang keajaiban malam Istanbul bersama Anda", ms: "Bawa pulang keajaiban malam Istanbul bersama anda", pl: "Zabierz magię nocnego Stambułu ze sobą", bg: "Вземете магията на нощния Истанбул със себе си", ro: "Luați cu dumneavoastră magia nopții Istanbulului", uk: "Заберіть з собою магію нічного Istanbul", ja: "Istanbulの夜の魔法をお持ち帰りください", ko: "Istanbul 밤의 마법을 간직하고 가십시오", hi: "Istanbul की रात का जादू अपने साथ ले जाएँ", ur: "Istanbul کی رات کا جادو اپنے ساتھ لے جائیں"
  },

  // ========== BOARDING & ARRIVAL TIMES ==========
  "boarding.time.day": {
    en: "Day Cruise: Boarding 10:00 · Departure 10:30",
    tr: "Gündüz Turu: Biniş 10:00 · Kalkış 10:30",
    de: "Tageskreuzfahrt: Boarding 10:00 · Abfahrt 10:30",
    es: "Crucero Diurno: Embarque 10:00 · Salida 10:30",
    ru: "Дневной круиз: Посадка 10:00 · Отправление 10:30",
    ar: "رحلة نهارية: الصعود 10:00 · المغادرة 10:30",
    fa: "تور روزانه: سوار شدن ۱۰:۰۰ · حرکت ۱۰:۳۰", fr: "Croisière diurne : embarquement 10h00 · départ 10h30", it: "Crociera Diurna: Imbarco 10:00 · Partenza 10:30", zh: "白天游船:10:00登船 · 10:30启航", id: "Pelayaran Siang: Naik kapal 10:00 · Keberangkatan 10:30", ms: "Pelayaran Siang: Menaiki 10:00 · Bertolak 10:30", pl: "Dzienny rejs: wejście 10:00 · wypłynięcie 10:30", bg: "Дневен круиз: качване 10:00 · отплаване 10:30", ro: "Croazieră de Zi: Îmbarcare 10:00 · Plecare 10:30", uk: "Денний круїз: Посадка 10:00 &middot; Відправлення 10:30", ja: "デイクルーズ：乗船 10:00 &middot; 出航 10:30", ko: "데이 크루즈: 승선 10:00 · 출항 10:30", hi: "दिन क्रूज़: बोर्डिंग 10:00 &middot; प्रस्थान 10:30", ur: "ڈے کروز: بورڈنگ 10:00 &middot; روانگی 10:30"
  },
  "boarding.time.sunset": {
    en: "Sunset Cruise: Boarding 17:00 · Departure 17:15",
    tr: "Gün Batımı Turu: Biniş 17:00 · Kalkış 17:15",
    de: "Sonnenuntergangskreuzfahrt: Boarding 17:00 · Abfahrt 17:15",
    es: "Crucero al Atardecer: Embarque 17:00 · Salida 17:15",
    ru: "Круиз на закате: Посадка 17:00 · Отправление 17:15",
    ar: "رحلة غروب الشمس: الصعود 17:00 · المغادرة 17:15",
    fa: "تور غروب: سوار شدن ۱۷:۰۰ · حرکت ۱۷:۱۵", fr: "Croisière coucher de soleil : embarquement 17h00 · départ 17h15", it: "Crociera al Tramonto: Imbarco 17:00 · Partenza 17:15", zh: "日落游船:17:00登船 · 17:15启航", id: "Pelayaran Matahari Terbenam: Naik kapal 17:00 · Keberangkatan 17:15", ms: "Pelayaran Matahari Terbenam: Menaiki 17:00 · Bertolak 17:15", pl: "Rejs o zachodzie słońca: wejście 17:00 · wypłynięcie 17:15", bg: "Залезен круиз: качване 17:00 · отплаване 17:15", ro: "Croazieră la Apus: Îmbarcare 17:00 · Plecare 17:15", uk: "Круїз на заході сонця: Посадка 17:00 &middot; Відправлення 17:15", ja: "サンセットクルーズ：乗船 17:00 &middot; 出航 17:15", ko: "선셋 크루즈: 승선 17:00 · 출항 17:15", hi: "सूर्यास्त क्रूज़: बोर्डिंग 17:00 &middot; प्रस्थान 17:15", ur: "سن سیٹ کروز: بورڈنگ 17:00 &middot; روانگی 17:15"
  },
  "boarding.time.night": {
    en: "Night Cruise: Boarding 19:30 · Departure 20:30",
    tr: "Gece Turu: Biniş 19:30 · Kalkış 20:30",
    de: "Nachtkreuzfahrt: Boarding 19:30 · Abfahrt 20:30",
    es: "Crucero Nocturno: Embarque 19:30 · Salida 20:30",
    ru: "Ночной круиз: Посадка 19:30 · Отправление 20:30",
    ar: "رحلة ليلية: الصعود 19:30 · المغادرة 20:30",
    fa: "تور شبانه: سوار شدن ۲۰:۰۰ · حرکت ۲۰:۳۰", fr: "Croisière nocturne : embarquement 20h00 · départ 20h30", it: "Crociera Notturna: Imbarco 19:30 · Partenza 20:30", zh: "夜间游船:19:30登船 · 20:30启航", id: "Pelayaran Malam: Naik kapal 19:30 · Keberangkatan 20:30", ms: "Pelayaran Malam: Menaiki 19:30 · Bertolak 20:30", pl: "Nocny rejs: wejście 19:30 · wypłynięcie 20:30", bg: "Нощен круиз: качване 19:30 · отплаване 20:30", ro: "Croazieră de Noapte: Îmbarcare 19:30 · Plecare 20:30", uk: "Нічний круїз: Посадка 19:30 &middot; Відправлення 20:30", ja: "ナイトクルーズ：乗船 19:30 &middot; 出航 20:30", ko: "나이트 크루즈: 승선 19:30 · 출항 20:30", hi: "रात्रि क्रूज़: बोर्डिंग 19:30 &middot; प्रस्थान 20:30", ur: "نائٹ کروز: بورڈنگ 19:30 &middot; روانگی 20:30"
  },
  "boarding.time.pier": {
    en: "Kabataş Pier",
    tr: "Kabataş İskelesi",
    de: "Kabataş Pier",
    es: "Muelle de Kabataş",
    ru: "Причал Кабаташ",
    ar: "رصيف كاباتاش",
    fa: "اسکله کاباتاش", fr: "Embarcadère de Kabataş", it: "Molo di Kabataş", zh: "卡巴塔什码头", id: "Dermaga Kabataş", ms: "Jeti Kabataş", pl: "Przystań Kabataş", bg: "Пристанище Кабаташ", ro: "Debarcaderul Kabataș", uk: "Пірс Kabataş", ja: "Kabataş桟橋", ko: "Kabataş Pier", hi: "Kabataş Pier", ur: "Kabataş گھاٹ"
  },
  "arrival.time.day": {
    en: "Day Cruise: Return ~12:30",
    tr: "Gündüz Turu: Dönüş ~12:30",
    de: "Tageskreuzfahrt: Rückkehr ~12:30",
    es: "Crucero Diurno: Regreso ~12:30",
    ru: "Дневной круиз: Возвращение ~12:30",
    ar: "رحلة نهارية: العودة ~12:30",
    fa: "تور روزانه: بازگشت حدود ۱۲:۳۰", fr: "Croisière diurne : retour ~12h30", it: "Crociera Diurna: Ritorno ~12:30", zh: "白天游船:约12:30返航", id: "Pelayaran Siang: Kembali ~12:30", ms: "Pelayaran Siang: Kembali ~12:30", pl: "Dzienny rejs: powrót ~12:30", bg: "Дневен круиз: завръщане ~12:30", ro: "Croazieră de Zi: Întoarcere ~12:30", uk: "Денний круїз: Повернення ~12:30", ja: "デイクルーズ：帰港 ~12:30", ko: "데이 크루즈: 복귀 ~12:30", hi: "दिन क्रूज़: वापसी ~12:30", ur: "ڈے کروز: واپسی ~12:30"
  },
  "arrival.time.sunset": {
    en: "Sunset Cruise: Return ~19:30",
    tr: "Gün Batımı Turu: Dönüş ~19:30",
    de: "Sonnenuntergangskreuzfahrt: Rückkehr ~19:30",
    es: "Crucero al Atardecer: Regreso ~19:30",
    ru: "Круиз на закате: Возвращение ~19:30",
    ar: "رحلة غروب الشمس: العودة ~19:30",
    fa: "تور غروب: بازگشت حدود ۱۹:۳۰", fr: "Croisière coucher de soleil : retour ~19h30", it: "Crociera al Tramonto: Ritorno ~19:30", zh: "日落游船:约19:30返航", id: "Pelayaran Matahari Terbenam: Kembali ~19:30", ms: "Pelayaran Matahari Terbenam: Kembali ~19:30", pl: "Rejs o zachodzie słońca: powrót ~19:30", bg: "Залезен круиз: завръщане ~19:30", ro: "Croazieră la Apus: Întoarcere ~19:30", uk: "Круїз на заході сонця: Повернення ~19:30", ja: "サンセットクルーズ：帰港 ~19:30", ko: "선셋 크루즈: 복귀 ~19:30", hi: "सूर्यास्त क्रूज़: वापसी ~19:30", ur: "سن سیٹ کروز: واپسی ~19:30"
  },
  "arrival.time.night": {
    en: "Night Cruise: Return 23:30",
    tr: "Gece Turu: Dönüş 23:30",
    de: "Nachtkreuzfahrt: Rückkehr ~23:30",
    es: "Crucero Nocturno: Regreso ~23:30",
    ru: "Ночной круиз: Возвращение 23:30",
    ar: "رحلة ليلية: العودة ~23:30",
    fa: "تور شبانه: بازگشت ۲۳:۳۰", fr: "Croisière nocturne : retour 23h30", it: "Crociera Notturna: Ritorno 23:30", zh: "夜间游船:23:30返航", id: "Pelayaran Malam: Kembali 23:30", ms: "Pelayaran Malam: Kembali 23:30", pl: "Nocny rejs: powrót 23:30", bg: "Нощен круиз: завръщане 23:30", ro: "Croazieră de Noapte: Întoarcere 23:30", uk: "Нічний круїз: Повернення 23:30", ja: "ナイトクルーズ：帰港 23:30", ko: "나이트 크루즈: 복귀 23:30", hi: "रात्रि क्रूज़: वापसी 23:30", ur: "نائٹ کروز: واپسی 23:30"
  },
  "arrival.time.pier": {
    en: "Kabataş Pier",
    tr: "Kabataş İskelesi",
    de: "Kabataş Pier",
    es: "Muelle de Kabataş",
    ru: "Причал Кабаташ",
    ar: "رصيف كاباتاش",
    fa: "اسکله کاباتاش", fr: "Embarcadère de Kabataş", it: "Molo di Kabataş", zh: "卡巴塔什码头", id: "Dermaga Kabataş", ms: "Jeti Kabataş", pl: "Przystań Kabataş", bg: "Пристанище Кабаташ", ro: "Debarcaderul Kabataș", uk: "Пірс Kabataş", ja: "Kabataş桟橋", ko: "Kabataş Pier", hi: "Kabataş Pier", ur: "Kabataş گھاٹ"
  },

  // ========== WIZARD (Mobile Booking Panel) ==========
  "wizard.step1of4": {
    en: "Step 1 of 4",
    tr: "Adım 1 / 4",
    de: "Schritt 1 von 4",
    es: "Paso 1 de 4",
    ru: "Шаг 1 из 4",
    ar: "الخطوة 1 من 4",
    fa: "مرحله ۱ از ۴", fr: "Étape 1 sur 4", it: "Passo 1 di 4", zh: "第1步(共4步)", id: "Langkah 1 dari 4", ms: "Langkah 1 daripada 4", pl: "Krok 1 z 4", bg: "Стъпка 1 от 4", ro: "Pasul 1 din 4", uk: "Крок 1 з 4", ja: "ステップ1/4", ko: "1/4 단계", hi: "चरण 1 में से 4", ur: "مرحلہ 1 از 4"
  },
  "wizard.step2of4": {
    en: "Step 2 of 4",
    tr: "Adım 2 / 4",
    de: "Schritt 2 von 4",
    es: "Paso 2 de 4",
    ru: "Шаг 2 из 4",
    ar: "الخطوة 2 من 4",
    fa: "مرحله ۲ از ۴", fr: "Étape 2 sur 4", it: "Passo 2 di 4", zh: "第2步(共4步)", id: "Langkah 2 dari 4", ms: "Langkah 2 daripada 4", pl: "Krok 2 z 4", bg: "Стъпка 2 от 4", ro: "Pasul 2 din 4", uk: "Крок 2 з 4", ja: "ステップ2/4", ko: "2/4 단계", hi: "चरण 2 में से 4", ur: "مرحلہ 2 از 4"
  },
  "wizard.step3of4": {
    en: "Step 3 of 4",
    tr: "Adım 3 / 4",
    de: "Schritt 3 von 4",
    es: "Paso 3 de 4",
    ru: "Шаг 3 из 4",
    ar: "الخطوة 3 من 4",
    fa: "مرحله ۳ از ۴", fr: "Étape 3 sur 4", it: "Passo 3 di 4", zh: "第3步(共4步)", id: "Langkah 3 dari 4", ms: "Langkah 3 daripada 4", pl: "Krok 3 z 4", bg: "Стъпка 3 от 4", ro: "Pasul 3 din 4", uk: "Крок 3 з 4", ja: "ステップ3/4", ko: "4단계 중 3단계", hi: "चरण 3 का 4", ur: "مرحلہ 3 از 4"
  },
  "wizard.step4of4": {
    en: "Step 4 of 4",
    tr: "Adım 4 / 4",
    de: "Schritt 4 von 4",
    es: "Paso 4 de 4",
    ru: "Шаг 4 из 4",
    ar: "الخطوة 4 من 4",
    fa: "مرحله ۴ از ۴", fr: "Étape 4 sur 4", it: "Passo 4 di 4", zh: "第4步(共4步)", id: "Langkah 4 dari 4", ms: "Langkah 4 daripada 4", pl: "Krok 4 z 4", bg: "Стъпка 4 от 4", ro: "Pasul 4 din 4", uk: "Крок 4 з 4", ja: "ステップ4/4", ko: "4단계 중 4단계", hi: "चरण 4 का 4", ur: "مرحلہ 4 از 4"
  },
  "wizard.standard": {
    en: "Standard",
    tr: "Standart",
    de: "Standard",
    es: "Estándar",
    ru: "Стандарт",
    ar: "قياسي",
    fa: "استاندارد", fr: "Standard", it: "Standard", zh: "标准", id: "Standar", ms: "Standard", pl: "Standard", bg: "Стандарт", ro: "Standard", uk: "Стандарт", ja: "スタンダード", ko: "Standard", hi: "Standard", ur: "معیاری"
  },
  "wizard.vip": {
    en: "VIP",
    tr: "VIP",
    de: "VIP",
    es: "VIP",
    ru: "VIP",
    ar: "VIP",
    fa: "VIP", fr: "VIP", it: "VIP", zh: "VIP", id: "VIP", ms: "VIP", pl: "VIP", bg: "VIP", ro: "VIP", uk: "VIP", ja: "VIP", ko: "VIP", hi: "VIP", ur: "VIP"
  },
  "wizard.language": {
    en: "Preferred Language",
    tr: "Tercih Edilen Dil",
    de: "Bevorzugte Sprache",
    es: "Idioma preferido",
    ru: "Предпочитаемый язык",
    ar: "اللغة المفضلة",
    fa: "زبان ترجیحی", fr: "Langue préférée", it: "Lingua preferita", zh: "首选语言", id: "Bahasa Pilihan", ms: "Bahasa Pilihan", pl: "Preferowany język", bg: "Предпочитан език", ro: "Limba Preferată", uk: "Бажана мова", ja: "ご希望の言語", ko: "선호 언어", hi: "पसंदीदा भाषा", ur: "ترجیحی زبان"
  },
  "wizard.back": {
    en: "Back",
    tr: "Geri",
    de: "Zurück",
    es: "Atrás",
    ru: "Назад",
    ar: "رجوع",
    fa: "بازگشت", fr: "Retour", it: "Indietro", zh: "返回", id: "Kembali", ms: "Kembali", pl: "Wstecz", bg: "Назад", ro: "Înapoi", uk: "Назад", ja: "戻る", ko: "뒤로", hi: "पीछे", ur: "واپس"
  },
  "wizard.next": {
    en: "Next",
    tr: "İleri",
    de: "Weiter",
    es: "Siguiente",
    ru: "Далее",
    ar: "التالي",
    fa: "بعدی", fr: "Suivant", it: "Avanti", zh: "下一步", id: "Berikutnya", ms: "Seterusnya", pl: "Dalej", bg: "Напред", ro: "Următorul", uk: "Далі", ja: "次へ", ko: "다음", hi: "आगे", ur: "اگلا"
  },
  "wizard.softDrinks": {
    en: "Soft Drinks",
    tr: "Alkolsüz",
    de: "Alkoholfrei",
    es: "Sin alcohol",
    ru: "Безалкогольные",
    ar: "مشروبات غازية",
    fa: "نوشیدنی‌های بدون‌الکل", fr: "Boissons non alcoolisées", it: "Bevande analcoliche", zh: "软饮", id: "Minuman Ringan", ms: "Minuman Ringan", pl: "Napoje bezalkoholowe", bg: "Безалкохолни напитки", ro: "Băuturi Răcoritoare", uk: "Безалкогольні напої", ja: "ソフトドリンク", ko: "무알콜 음료", hi: "सॉफ्ट ड्रिंक्स", ur: "نرم مشروبات"
  },
  "wizard.glass2": {
    en: "2 Glasses +€{p.alcohol2}",
    tr: "2 Kadeh +€{p.alcohol2}",
    de: "2 Gläser +7 €",
    es: "2 copas +7 €",
    ru: "2 бокала +7 €",
    ar: "كأسان +٧€",
    fa: "۲ لیوان +€{p.alcohol2}", fr: "2 verres +€{p.alcohol2}", it: "2 bicchieri +€{p.alcohol2}", zh: "2杯酒+€{p.alcohol2}", id: "2 Gelas +€{p.alcohol2}", ms: "2 Gelas +€{p.alcohol2}", pl: "2 kieliszki +€{p.alcohol2}", bg: "2 чаши +€{p.alcohol2}", ro: "2 Pahare +€{p.alcohol2}", uk: "2 келихи +€{p.alcohol2}", ja: "グラス2杯 +€{p.alcohol2}", ko: "2잔 +€{p.alcohol2}", hi: "2 ग्लास +€{p.alcohol2}", ur: "2 گلاس +€{p.alcohol2}"
  },
  "wizard.unlimited": {
    en: "Unlimited +€{p.unlimited}",
    tr: "Sınırsız +€{p.unlimited}",
    de: "Unbegrenzt +15 €",
    es: "Ilimitado +15 €",
    ru: "Безлимит +15 €",
    ar: "غير محدود +١٥€",
    fa: "نامحدود +€{p.unlimited}", fr: "Illimité +€{p.unlimited}", it: "Illimitato +€{p.unlimited}", zh: "无限畅饮+€{p.unlimited}", id: "Tanpa Batas +€{p.unlimited}", ms: "Tanpa Had +€{p.unlimited}", pl: "Nieograniczone +€{p.unlimited}", bg: "Неограничено +€{p.unlimited}", ro: "Nelimitat +€{p.unlimited}", uk: "Необмежено +€{p.unlimited}", ja: "飲み放題 +€{p.unlimited}", ko: "무제한 +€{p.unlimited}", hi: "असीमित +€{p.unlimited}", ur: "لامحدود +€{p.unlimited}"
  },
  "wizard.softDesc": {
    en: "Unlimited tea, coffee, water, cola & juice",
    tr: "Sınırsız çay, kahve, su, kola ve meyve suyu",
    de: "Unbegrenzt Tee, Kaffee, Wasser, Cola & Saft",
    es: "Té, café, agua, cola y zumo ilimitados",
    ru: "Безлимитный чай, кофе, вода, кола и сок",
    ar: "شاي وقهوة وماء وكولا وعصير بلا حدود",
    fa: "چای، قهوه، آب، نوشابه و آب‌میوه نامحدود", fr: "Thé, café, eau, cola & jus à volonté", it: "Tè, caffè, acqua, cola e succhi illimitati", zh: "无限畅饮茶、咖啡、水、可乐与果汁", id: "Teh, kopi, air, cola & jus tanpa batas", ms: "Teh, kopi, air, kola & jus tanpa had", pl: "Nieograniczona herbata, kawa, woda, cola i sok", bg: "Неограничен чай, кафе, вода, кола и сок", ro: "Ceai, cafea, apă, cola și suc nelimitate", uk: "Необмежена кількість чаю, кави, води, коли та соку", ja: "お茶、コーヒー、お水、コーラ、ジュース飲み放題", ko: "차, 커피, 생수, 콜라 & 주스 무제한 제공", hi: "असीमित चाय, कॉफी, पानी, कोला और जूस", ur: "لامحدود چائے، کافی، پانی، کولا اور جوس"
  },
  "wizard.glass2Desc": {
    en: "Choose from local wine, beer, rakı, vodka, or gin",
    tr: "Yerli şarap, bira, rakı, vodka veya cin seçin",
    de: "Auswahl aus lokalem Wein, Bier, Rakı, Wodka oder Gin",
    es: "Elija entre vino local, cerveza, rakı, vodka o ginebra",
    ru: "На выбор: местное вино, пиво, ракы, водка или джин",
    ar: "اختر من النبيذ المحلي أو البيرة أو العرق أو الفودكا أو الجن",
    fa: "از بین شراب، آبجو، راکی، ودکا یا جین داخلی انتخاب کنید", fr: "Au choix : vin local, bière, rakı, vodka ou gin", it: "Scelga tra vino locale, birra, rakı, vodka o gin", zh: "可选本地葡萄酒、啤酒、拉克酒、伏特加或金酒", id: "Pilih dari anggur lokal, bir, rakı, vodka, atau gin", ms: "Pilih daripada wain tempatan, bir, rakı, vodka atau gin", pl: "Wybór lokalnego wina, piwa, rakı, wódki lub ginu", bg: "Избор от местно вино, бира, ракъ, водка или джин", ro: "Alegeți din vin local, bere, rachiu, vodcă sau gin", uk: "Оберіть з місцевого вина, пива, ракі, горілки або джину", ja: "地元産ワイン、ビール、ラク、ウォッカ、ジンからお選びいただけます", ko: "현지 와인, 맥주, 라크, 보드카 또는 진 중 선택 가능", hi: "स्थानीय वाइन, बीयर, राकी, वोदका या जिन में से चुनें", ur: "مقامی شراب، بیئر، راکی، ووڈکا، یا جن میں سے انتخاب کریں"
  },
  "wizard.unlimitedDesc": {
    en: "Unlimited local wine, beer, rakı, vodka, gin all night",
    tr: "Gece boyunca sınırsız yerli şarap, bira, rakı, vodka, cin",
    de: "Die ganze Nacht unbegrenzt lokaler Wein, Bier, Rakı, Wodka, Gin",
    es: "Vino local, cerveza, rakı, vodka y ginebra ilimitados toda la noche",
    ru: "Безлимитное местное вино, пиво, ракы, водка, джин всю ночь",
    ar: "نبيذ محلي وبيرة وعرق وفودكا وجن بلا حدود طوال الليل",
    fa: "شراب، آبجو، راکی، ودکا و جین داخلی نامحدود در تمام شب", fr: "Vin local, bière, rakı, vodka, gin à volonté toute la soirée", it: "Vino locale, birra, rakı, vodka, gin illimitati tutta la notte", zh: "整晚无限畅饮本地葡萄酒、啤酒、拉克酒、伏特加、金酒", id: "Anggur lokal tanpa batas, bir, rakı, vodka, gin sepanjang malam", ms: "Wain tempatan tanpa had, bir, rakı, vodka, gin sepanjang malam", pl: "Nieograniczone lokalne wino, piwo, rakı, wódka, gin całą noc", bg: "Неограничено местно вино, бира, ракъ, водка, джин цяла нощ", ro: "Vin local, bere, rachiu, vodcă, gin nelimitate toată noaptea", uk: "Необмежена кількість місцевого вина, пива, ракі, горілки, джину протягом вечора", ja: "地元産ワイン、ビール、ラク、ウォッカ、ジンが終夜飲み放題", ko: "현지 와인, 맥주, 라크, 보드카, 진 밤새 무제한 제공", hi: "पूरी रात असीमित स्थानीय वाइन, बीयर, राकी, वोदका, जिन", ur: "پوری رات لامحدود مقامی شراب، بیئر، راکی، ووڈکا، جن"
  },
  "wizard.transferLabel": {
    en: "Hotel Transfer",
    tr: "Otel Transferi",
    de: "Hoteltransfer",
    es: "Traslado al hotel",
    ru: "Трансфер из отеля",
    ar: "نقل من الفندق",
    fa: "ترانسفر هتل", fr: "Transfert d'hôtel", it: "Transfer dall'hotel", zh: "酒店接送", id: "Antar-jemput Hotel", ms: "Pemindahan Hotel", pl: "Transfer z hotelu", bg: "Хотелски трансфер", ro: "Transfer de la Hotel", uk: "Трансфер з готелю", ja: "ホテル送迎", ko: "호텔 픽업/샌딩", hi: "होटल ट्रांसफर", ur: "ہوٹل ٹرانسفر"
  },
  "wizard.no": {
    en: "No",
    tr: "Hayır",
    de: "Nein",
    es: "No",
    ru: "Нет",
    ar: "لا",
    fa: "خیر", fr: "Non", it: "No", zh: "否", id: "Tidak", ms: "Tidak", pl: "Nie", bg: "Не", ro: "Nu", uk: "Ні", ja: "なし", ko: "아니오", hi: "नहीं", ur: "نہیں"
  },
  "wizard.transferYes": {
    en: "Yes +€{p.transfer}/person",
    tr: "Evet +€{p.transfer}/kişi",
    de: "Ja +10 €/Person",
    es: "Sí +10 €/persona",
    ru: "Да +10 €/чел.",
    ar: "نعم +١٠€/شخص",
    fa: "بله +€{p.transfer}/نفر", fr: "Oui +€{p.transfer}/personne", it: "Sì +€{p.transfer}/persona", zh: "是 +€{p.transfer}／人", id: "Ya +€{p.transfer}/orang", ms: "Ya +€{p.transfer}/orang", pl: "Tak +€{p.transfer}/osobę", bg: "Да +€{p.transfer}/човек", ro: "Da +€{p.transfer}/persoană", uk: "Так +€{p.transfer}/особа", ja: "あり +€{p.transfer}/お一人様", ko: "예 +€{p.transfer}/1인", hi: "हाँ +€{p.transfer}/व्यक्ति", ur: "ہاں +€{p.transfer}/فی شخص"
  },
  "wizard.transferChoose": {
    en: "Please choose a transfer option",
    tr: "Lütfen transfer seçeneğini belirleyin",
    de: "Bitte wählen Sie eine Transferoption",
    es: "Por favor selecciona una opción de traslado",
    ru: "Пожалуйста, выберите вариант трансфера",
    ar: "يرجى اختيار خيار النقل",
    fa: "لطفاً یک گزینه ترانسفر انتخاب کنید", fr: "Veuillez choisir une option de transfert", it: "Per favore scelga un'opzione di transfer", zh: "请选择接送选项", id: "Silakan pilih opsi antar-jemput", ms: "Sila pilih pilihan pemindahan", pl: "Prosimy wybrać opcję transferu", bg: "Моля, изберете опция за трансфер", ro: "Vă rugăm să alegeți o opțiune de transfer", uk: "Будь ласка, оберіть варіант трансферу", ja: "送迎オプションをお選びください", ko: "픽업/샌딩 옵션을 선택해 주십시오", hi: "कृपया ट्रांसफर विकल्प चुनें", ur: "براہ کرم ٹرانسفر کا اختیار منتخب کریں"
  },
  "wizard.transferDesc": {
    en: "Pickup & drop-off from your hotel",
    tr: "Otelinizden alım ve bırakım",
    de: "Abholung & Rückfahrt von Ihrem Hotel",
    es: "Recogida y regreso desde su hotel",
    ru: "Встреча и доставка от вашего отеля",
    ar: "التوصيل من وإلى فندقك",
    fa: "رفت و برگشت از هتل شما", fr: "Prise en charge & dépose depuis votre hôtel", it: "Prelievo e riconsegna dal Suo hotel", zh: "从您的酒店接送", id: "Penjemputan & pengantaran dari hotel Anda", ms: "Ambil & hantar dari hotel anda", pl: "Odbiór i odwiezienie z hotelu", bg: "Вземане и връщане от хотела", ro: "Preluare și ducere de la hotelul dumneavoastră", uk: "Зустріч і доставка до Вашого готелю", ja: "ホテルからの往復送迎", ko: "호텔 픽업 및 샌딩 서비스", hi: "आपके होटल से पिकअप और ड्रॉप-ऑफ", ur: "آپ کے ہوٹل سے پک اپ اور ڈراپ آف"
  },
  "wizard.romanticLabel": {
    en: "Romantic Table",
    tr: "Romantik Masa",
    de: "Romantischer Tisch",
    es: "Mesa romántica",
    ru: "Романтический столик",
    ar: "طاولة رومانسية",
    fa: "میز رمانتیک", fr: "Table romantique", it: "Tavolo romantico", zh: "浪漫餐桌", id: "Meja Romantis", ms: "Meja Romantik", pl: "Stół romantyczny", bg: "Романтична маса", ro: "Masă Romantică", uk: "Романтичний столик", ja: "ロマンティックテーブル", ko: "로맨틱 테이블", hi: "रोमांटिक टेबल", ur: "رومانوی میز"
  },
  "wizard.romanticYes": {
    en: "Yes +€{p.romantic}",
    tr: "Evet +€{p.romantic}",
    de: "Ja +15 €",
    es: "Sí +15 €",
    ru: "Да +15 €",
    ar: "نعم +١٥€",
    fa: "بله +€{p.romantic}", fr: "Oui +€{p.romantic}", it: "Sì +€{p.romantic}", zh: "是 +€{p.romantic}", id: "Ya +€{p.romantic}", ms: "Ya +€{p.romantic}", pl: "Tak +€{p.romantic}", bg: "Да +€{p.romantic}", ro: "Da +€{p.romantic}", uk: "Так +€{p.romantic}", ja: "あり +€{p.romantic}", ko: "예 +€{p.romantic}", hi: "हाँ +€{p.romantic}", ur: "ہاں +€{p.romantic}"
  },
  "wizard.romanticDesc": {
    en: "Candles, flowers & special setup",
    tr: "Mumlar, çiçekler ve özel düzenleme",
    de: "Kerzen, Blumen & besondere Dekoration",
    es: "Velas, flores y decoración especial",
    ru: "Свечи, цветы и особое оформление",
    ar: "شموع وزهور وإعداد خاص",
    fa: "شمع، گل و چیدمان ویژه", fr: "Bougies, fleurs & décoration spéciale", it: "Candele, fiori e allestimento speciale", zh: "蜡烛、鲜花与特别布置", id: "Lilin, bunga & pengaturan khusus", ms: "Lilin, bunga & susunan istimewa", pl: "Świece, kwiaty i specjalna aranżacja", bg: "Свещи, цветя и специална украса", ro: "Lumânări, flori și aranjament special", uk: "Свічки, квіти та особливе оформлення", ja: "キャンドル、お花、特別なセッティング", ko: "촛불, 꽃 & 특별 세팅", hi: "मोमबत्तियाँ, फूल और विशेष सजावट", ur: "موم بتیاں، پھول اور خصوصی انتظامات"
  },
  "wizard.summaryTitle": {
    en: "Booking Summary",
    tr: "Rezervasyon Özeti",
    de: "Buchungsübersicht",
    es: "Resumen de la reserva",
    ru: "Сводка бронирования",
    ar: "ملخص الحجز",
    fa: "خلاصه رزرو", fr: "Récapitulatif", it: "Riepilogo della prenotazione", zh: "预订摘要", id: "Ringkasan Pemesanan", ms: "Ringkasan Tempahan", pl: "Podsumowanie rezerwacji", bg: "Обобщение на резервацията", ro: "Sumar Rezervare", uk: "Підсумок бронювання", ja: "ご予約内容", ko: "예약 요약", hi: "बुकिंग सारांश", ur: "بکنگ کا خلاصہ"
  },
  "wizard.checkAvail": {
    en: "Check Availability",
    tr: "Müsaitlik Kontrolü",
    de: "Verfügbarkeit prüfen",
    es: "Consultar disponibilidad",
    ru: "Проверить наличие",
    ar: "تحقق من التوفر",
    fa: "بررسی ظرفیت", fr: "Vérifier la disponibilité", it: "Verifica disponibilità", zh: "查询余位", id: "Cek Ketersediaan", ms: "Semak Kekosongan", pl: "Sprawdź dostępność", bg: "Проверете наличността", ro: "Verificați Disponibilitatea", uk: "Перевірити наявність", ja: "空席状況を確認", ko: "예약 가능 여부 확인", hi: "उपलब्धता जाँचें", ur: "دستیابی چیک کریں"
  },
  "wizard.confirmMsg": {
    en: "We'll confirm instantly",
    tr: "Anında onay vereceğiz",
    de: "Wir bestätigen sofort",
    es: "Confirmaremos al instante",
    ru: "Подтвердим мгновенно",
    ar: "سنؤكد فوراً",
    fa: "فوراً تأیید می‌کنیم", fr: "Nous confirmons instantanément", it: "Confermeremo all'istante", zh: "我们将即时确认", id: "Kami akan mengonfirmasi secara instan", ms: "Kami akan sahkan serta-merta", pl: "Potwierdzimy natychmiast", bg: "Ще потвърдим мигновено", ro: "Vom confirma instant", uk: "Ми підтвердимо миттєво", ja: "即座に確定いたします", ko: "즉시 확인해 드립니다", hi: "हम तुरंत पुष्टि करेंगे", ur: "ہم فوری طور پر تصدیق کریں گے"
  },
  "wizard.trust1": {
    en: "\u2713 Free cancellation 2hrs before",
    tr: "\u2713 2 saat öncesine kadar ücretsiz iptal",
    de: "\u2713 Kostenlose Stornierung bis 2 Std. vorher",
    es: "\u2713 Cancelación gratuita hasta 2 h antes",
    ru: "\u2713 Бесплатная отмена за 2 часа",
    ar: "\u2713 إلغاء مجاني قبل ساعتين",
    fa: "✓ لغو رایگان ۲ ساعت پیش", fr: "✓ Annulation gratuite 2h avant", it: "✓ Cancellazione gratuita 2 ore prima", zh: "✓ 开船前2小时免费取消", id: "✓ Pembatalan gratis 2 jam sebelumnya", ms: "✓ Pembatalan percuma 2 jam sebelum", pl: "✓ Bezpłatna anulacja 2h przed", bg: "✓ Безплатна отмяна 2 ч. преди", ro: "✓ Anulare gratuită cu 2 ore înainte", uk: "\\u2713 Безкоштовне скасування за 2 години до початку", ja: "\\u2713 2時間前まで無料キャンセル可", ko: "\\u2713 2시간 전까지 무료 취소", hi: "\\u2713 2 घंटे पहले तक निःशुल्क रद्दीकरण", ur: "\\u2713 2 گھنٹے پہلے مفت منسوخی"
  },
  "wizard.trust2": {
    en: "\u2713 No prepayment required",
    tr: "\u2713 Ön ödeme gerekmiyor",
    de: "\u2713 Keine Vorauszahlung nötig",
    es: "\u2713 Sin pago anticipado",
    ru: "\u2713 Предоплата не требуется",
    ar: "\u2713 لا يلزم دفع مسبق",
    fa: "✓ بدون نیاز به پیش‌پرداخت", fr: "✓ Aucun prépaiement requis", it: "✓ Nessun anticipo richiesto", zh: "✓ 无需预付", id: "✓ Tanpa pembayaran di muka", ms: "✓ Tiada bayaran pendahuluan diperlukan", pl: "✓ Bez przedpłaty", bg: "✓ Не се изисква предплащане", ro: "✓ Fără plată în avans", uk: "\\u2713 Передоплата не потрібна", ja: "\\u2713 事前決済不要", ko: "\\u2713 선결제 불필요", hi: "\\u2713 कोई अग्रिम भुगतान आवश्यक नहीं", ur: "\\u2713 پیشگی ادائیگی کی ضرورت نہیں"
  },
  "wizard.trust3": {
    en: "\u2713 Pay on the boat",
    tr: "\u2713 Teknede ödeyin",
    de: "\u2713 Bezahlung an Bord",
    es: "\u2713 Pague en el barco",
    ru: "\u2713 Оплата на борту",
    ar: "\u2713 ادفع على متن القارب",
    fa: "✓ پرداخت روی کشتی", fr: "✓ Paiement à bord", it: "✓ Pagamento a bordo", zh: "✓ 船上付款", id: "✓ Bayar di kapal", ms: "✓ Bayar di atas bot", pl: "✓ Płatność na pokładzie", bg: "✓ Плащане на борда", ro: "✓ Plata pe vapor", uk: "\\u2713 Оплата на борту", ja: "\\u2713 船上でのお支払い", ko: "\\u2713 보트에서 결제", hi: "\\u2713 नाव पर भुगतान करें", ur: "\\u2713 کشتی پر ادائیگی کریں"
  },

  // ========== WIZARD — NEW KEYS ==========
  "wizard.drinkNote": {
    en: "Choose a drink option for each adult guest",
    tr: "Her yetişkin misafir için bir içecek seçeneği belirleyin",
    de: "Wählen Sie eine Getränkeoption für jeden erwachsenen Gast",
    es: "Elija una opción de bebida para cada adulto",
    ru: "Выберите вариант напитков для каждого взрослого гостя",
    ar: "اختر خيار مشروب لكل ضيف بالغ",
    fa: "برای هر مهمان بزرگسال یک گزینه نوشیدنی انتخاب کنید", fr: "Choisissez une boisson pour chaque adulte", it: "Scelga un'opzione bevande per ogni ospite adulto", zh: "为每位成人宾客选择饮品", id: "Pilih opsi minuman untuk setiap tamu dewasa", ms: "Pilih pilihan minuman untuk setiap tetamu dewasa", pl: "Wybierz opcję napojów dla każdego dorosłego gościa", bg: "Изберете опция за напитки за всеки възрастен гост", ro: "Alegeți o opțiune de băutură pentru fiecare adult", uk: "Оберіть варіант напоїв для кожного дорослого гостя", ja: "大人のお客様ごとにドリンクオプションをお選びください", ko: "각 성인 고객님의 음료 옵션을 선택해 주십시오", hi: "प्रत्येक वयस्क अतिथि के लिए एक ड्रिंक विकल्प चुनें", ur: "ہر بالغ مہمان کے لیے مشروبات کا اختیار منتخب کریں"
  },
  "wizard.drinkWarning": {
    en: "Please assign drinks for all adults before continuing",
    tr: "Devam etmeden önce tüm yetişkinlere içecek atayın",
    de: "Bitte weisen Sie allen Erwachsenen Getränke zu, bevor Sie fortfahren",
    es: "Asigne bebidas a todos los adultos antes de continuar",
    ru: "Назначьте напитки всем взрослым перед продолжением",
    ar: "يرجى تحديد المشروبات لجميع البالغين قبل المتابعة",
    fa: "لطفاً پیش از ادامه برای همه بزرگسالان نوشیدنی انتخاب کنید", fr: "Veuillez attribuer une boisson à chaque adulte avant de continuer", it: "Per favore assegni le bevande a tutti gli adulti prima di continuare", zh: "请先为所有成人选择饮品再继续", id: "Silakan tetapkan minuman untuk semua orang dewasa sebelum melanjutkan", ms: "Sila tetapkan minuman untuk semua dewasa sebelum meneruskan", pl: "Prosimy przypisać napoje dla wszystkich dorosłych przed kontynuowaniem", bg: "Моля, задайте напитки за всички възрастни, преди да продължите", ro: "Vă rugăm să atribuiți băuturi pentru toți adulții înainte de a continua", uk: "Будь ласка, оберіть напої для всіх дорослих перед продовженням", ja: "続けるには、すべての大人のお客様のドリンクをお選びください", ko: "계속 진행하시려면 모든 성인의 음료를 지정해 주십시오", hi: "कृपया आगे बढ़ने से पहले सभी वयस्कों के लिए ड्रिंक्स निर्धारित करें", ur: "براہ کرم جاری رکھنے سے پہلے تمام بالغ افراد کے لیے مشروبات منتخب کریں"
  },
  "wizard.transferWarning": {
    en: "Please choose a transfer option before continuing",
    tr: "Devam etmeden önce transfer seçeneğini belirleyin",
    de: "Bitte wählen Sie eine Transferoption, bevor Sie fortfahren",
    es: "Seleccione una opción de traslado antes de continuar",
    ru: "Выберите вариант трансфера перед продолжением",
    ar: "يرجى اختيار خيار النقل قبل المتابعة",
    fa: "لطفاً پیش از ادامه یک گزینه ترانسفر انتخاب کنید", fr: "Veuillez choisir une option de transfert avant de continuer", it: "Per favore scelga un'opzione di transfer prima di continuare", zh: "请先选择接送选项再继续", id: "Silakan pilih opsi antar-jemput sebelum melanjutkan", ms: "Sila pilih pilihan pemindahan sebelum meneruskan", pl: "Prosimy wybrać opcję transferu przed kontynuowaniem", bg: "Моля, изберете опция за трансфер, преди да продължите", ro: "Vă rugăm să alegeți o opțiune de transfer înainte de a continua", uk: "Будь ласка, оберіть варіант трансферу перед продовженням", ja: "続けるには、送迎オプションをお選びください", ko: "계속 진행하시려면 픽업/샌딩 옵션을 선택해 주십시오", hi: "कृपया आगे बढ़ने से पहले ट्रांसफर विकल्प चुनें", ur: "براہ کرم جاری رکھنے سے پہلے ٹرانسفر کا اختیار منتخب کریں"
  },
  "wizard.packageWarning": {
    en: "Please choose a package before continuing",
    tr: "Devam etmeden önce paketi seçin",
    de: "Bitte wählen Sie ein Paket, bevor Sie fortfahren",
    es: "Seleccione un paquete antes de continuar",
    ru: "Выберите пакет перед продолжением",
    ar: "يرجى اختيار باقة قبل المتابعة",
    fa: "لطفاً پیش از ادامه یک پکیج انتخاب کنید", fr: "Veuillez choisir un forfait avant de continuer", it: "Per favore scelga un pacchetto prima di continuare", zh: "请先选择套餐再继续", id: "Silakan pilih paket sebelum melanjutkan", ms: "Sila pilih pakej sebelum meneruskan", pl: "Prosimy wybrać pakiet przed kontynuowaniem", bg: "Моля, изберете пакет, преди да продължите", ro: "Vă rugăm să alegeți un pachet înainte de a continua", uk: "Будь ласка, оберіть пакет перед продовженням", ja: "続行する前にパッケージをお選びください", ko: "계속하시기 전에 패키지를 선택해 주시기 바랍니다", hi: "कृपया जारी रखने से पहले एक पैकेज चुनें", ur: "براہ کرم جاری رکھنے سے پہلے ایک پیکیج منتخب کریں"
  },
  "wizard.packageChoose": {
    en: "Please choose a package",
    tr: "Lütfen paketi seçin",
    de: "Bitte wählen Sie ein Paket",
    es: "Por favor seleccione un paquete",
    ru: "Пожалуйста, выберите пакет",
    ar: "يرجى اختيار باقة",
    fa: "لطفاً یک پکیج انتخاب کنید", fr: "Veuillez choisir un forfait", it: "Per favore scelga un pacchetto", zh: "请选择套餐", id: "Silakan pilih paket", ms: "Sila pilih pakej", pl: "Prosimy wybrać pakiet", bg: "Моля, изберете пакет", ro: "Vă rugăm să alegeți un pachet", uk: "Будь ласка, оберіть пакет", ja: "パッケージをお選びください", ko: "패키지를 선택해 주시기 바랍니다", hi: "कृपया एक पैकेज चुनें", ur: "براہ کرم ایک پیکیج منتخب کریں"
  },
  "wizard.adultsWarning": {
    en: "Please enter at least one adult before continuing",
    tr: "Devam etmeden önce en az bir yetişkin seçin",
    de: "Bitte wählen Sie mindestens einen Erwachsenen, bevor Sie fortfahren",
    es: "Seleccione al menos un adulto antes de continuar",
    ru: "Укажите хотя бы одного взрослого перед продолжением",
    ar: "يرجى إدخال بالغ واحد على الأقل قبل المتابعة",
    fa: "لطفاً پیش از ادامه دست‌کم یک بزرگسال وارد کنید", fr: "Veuillez indiquer au moins un adulte avant de continuer", it: "Per favore inserisca almeno un adulto prima di continuare", zh: "请至少填入一位成人再继续", id: "Silakan masukkan minimal satu dewasa sebelum melanjutkan", ms: "Sila masukkan sekurang-kurangnya seorang dewasa sebelum meneruskan", pl: "Prosimy wprowadzić co najmniej jednego dorosłego przed kontynuowaniem", bg: "Моля, въведете поне един възрастен, преди да продължите", ro: "Vă rugăm să introduceți cel puțin un adult înainte de a continua", uk: "Будь ласка, вкажіть щонайменше одного дорослого перед продовженням", ja: "続行する前に大人の人数を1名以上ご入力ください", ko: "계속하시기 전에 최소 1명의 성인을 입력해 주시기 바랍니다", hi: "कृपया जारी रखने से पहले कम से कम एक वयस्क दर्ज करें", ur: "براہ کرم جاری رکھنے سے پہلے کم از کم ایک بالغ درج کریں"
  },
  "wizard.adultsChoose": {
    en: "Please enter at least one adult",
    tr: "Lütfen en az bir yetişkin seçin",
    de: "Bitte wählen Sie mindestens einen Erwachsenen",
    es: "Por favor seleccione al menos un adulto",
    ru: "Пожалуйста, укажите хотя бы одного взрослого",
    ar: "يرجى إدخال بالغ واحد على الأقل",
    fa: "لطفاً دست‌کم یک بزرگسال وارد کنید", fr: "Veuillez indiquer au moins un adulte", it: "Per favore inserisca almeno un adulto", zh: "请至少填入一位成人", id: "Silakan masukkan minimal satu dewasa", ms: "Sila masukkan sekurang-kurangnya seorang dewasa", pl: "Prosimy wprowadzić co najmniej jednego dorosłego", bg: "Моля, въведете поне един възрастен", ro: "Vă rugăm să introduceți cel puțin un adult", uk: "Будь ласка, вкажіть щонайменше одного дорослого", ja: "大人の人数を1名以上ご入力ください", ko: "최소 1명의 성인을 입력해 주시기 바랍니다", hi: "कृपया कम से कम एक वयस्क दर्ज करें", ur: "براہ کرم کم از کم ایک بالغ درج کریں"
  },
  "wizard.childAgeWarning": {
    en: "Please select age for each child before continuing",
    tr: "Devam etmeden önce her çocuk için yaş seçin",
    de: "Bitte wählen Sie für jedes Kind ein Alter, bevor Sie fortfahren",
    es: "Seleccione la edad de cada niño antes de continuar",
    ru: "Выберите возраст для каждого ребёнка перед продолжением",
    ar: "يرجى اختيار عمر لكل طفل قبل المتابعة",
    fa: "لطفاً پیش از ادامه برای هر کودک سن انتخاب کنید", fr: "Veuillez sélectionner l'âge de chaque enfant avant de continuer", it: "Per favore selezioni l'età di ogni bambino prima di continuare", zh: "请先为每位儿童选择年龄再继续", id: "Silakan pilih usia untuk setiap anak sebelum melanjutkan", ms: "Sila pilih umur untuk setiap kanak-kanak sebelum meneruskan", pl: "Prosimy wybrać wiek dla każdego dziecka przed kontynuowaniem", bg: "Моля, изберете възраст за всяко дете, преди да продължите", ro: "Vă rugăm să selectați vârsta pentru fiecare copil înainte de a continua", uk: "Будь ласка, виберіть вік для кожної дитини перед продовженням", ja: "続行する前にお子様全員の年齢をご選択ください", ko: "계속하시기 전에 각 어린이의 연령을 선택해 주시기 바랍니다", hi: "कृपया जारी रखने से पहले प्रत्येक बच्चे की आयु चुनें", ur: "براہ کرم جاری رکھنے سے پہلے ہر بچے کی عمر منتخب کریں"
  },
  "wizard.childAgeChoose": {
    en: "Please select age for each child",
    tr: "Lütfen her çocuk için yaş seçin",
    de: "Bitte wählen Sie für jedes Kind ein Alter",
    es: "Seleccione la edad de cada niño",
    ru: "Выберите возраст для каждого ребёнка",
    ar: "يرجى اختيار عمر لكل طفل",
    fa: "لطفاً برای هر کودک سن انتخاب کنید", fr: "Veuillez sélectionner l'âge de chaque enfant", it: "Per favore selezioni l'età di ogni bambino", zh: "请为每位儿童选择年龄", id: "Silakan pilih usia untuk setiap anak", ms: "Sila pilih umur untuk setiap kanak-kanak", pl: "Prosimy wybrać wiek dla każdego dziecka", bg: "Моля, изберете възраст за всяко дете", ro: "Vă rugăm să selectați vârsta pentru fiecare copil", uk: "Будь ласка, виберіть вік для кожної дитини", ja: "お子様全員の年齢をご選択ください", ko: "각 어린이의 연령을 선택해 주시기 바랍니다", hi: "कृपया प्रत्येक बच्चे की आयु चुनें", ur: "براہ کرم ہر بچے کی عمر منتخب کریں"
  },
  "wizard.selectAge": {
    en: "Select age",
    tr: "Yaş seçin",
    de: "Alter wählen",
    es: "Elegir edad",
    ru: "Выберите возраст",
    ar: "اختر العمر",
    fa: "انتخاب سن", fr: "Sélectionner l'âge", it: "Selezioni l'età", zh: "选择年龄", id: "Pilih usia", ms: "Pilih umur", pl: "Wybierz wiek", bg: "Изберете възраст", ro: "Selectați vârsta", uk: "Виберіть вік", ja: "年齢を選択", ko: "연령 선택", hi: "आयु चुनें", ur: "عمر منتخب کریں"
  },
  "wizard.viewPackages": {
    en: "Click to review packages",
    tr: "Paketleri incelemek için tıklayın",
    de: "Pakete ansehen",
    es: "Ver detalles de los paquetes",
    ru: "Посмотреть пакеты",
    ar: "اضغط لمعاينة الباقات",
    fa: "برای مرور پکیج‌ها کلیک کنید", fr: "Cliquez pour revoir les forfaits", it: "Clicchi per rivedere i pacchetti", zh: "点击查看套餐", id: "Klik untuk meninjau paket", ms: "Klik untuk semak pakej", pl: "Kliknij, aby sprawdzić pakiety", bg: "Кликнете, за да прегледате пакетите", ro: "Faceți clic pentru a revedea pachetele", uk: "Натисніть, щоб переглянути пакети", ja: "クリックしてパッケージを確認", ko: "패키지 확인하기", hi: "पैकेज देखने के लिए क्लिक करें", ur: "پیکیجز کا جائزہ لینے کے لیے کلک کریں"
  },
  "wizard.glass2Label": {
    en: "2 Glasses of Alcohol",
    tr: "2 Kadeh Alkol",
    de: "2 Gläser Alkohol",
    es: "2 copas de alcohol",
    ru: "2 бокала алкоголя",
    ar: "كأسان من الكحول",
    fa: "۲ لیوان الکل", fr: "2 verres d'alcool", it: "2 bicchieri di alcol", zh: "2杯酒", id: "2 Gelas Alkohol", ms: "2 Gelas Alkohol", pl: "2 kieliszki alkoholu", bg: "2 чаши алкохол", ro: "2 Pahare de Alcool", uk: "2 келихи алкоголю", ja: "アルコール2杯", ko: "알코올 음료 2잔", hi: "2 ग्लास अल्कोहल", ur: "شراب کے 2 گلاس"
  },
  "wizard.glass2Note": {
    en: "+€{p.alcohol2}/person · Wine, beer, rakı, vodka, or gin",
    tr: "+€{p.alcohol2}/kişi · Şarap, bira, rakı, vodka veya cin",
    de: "+15 €/Person · Wein, Bier, Rakı, Wodka oder Gin",
    es: "+15 €/persona · Vino, cerveza, rakı, vodka o ginebra",
    ru: "+15 €/чел. · Вино, пиво, ракы, водка или джин",
    ar: "+١٥€/شخص · نبيذ أو بيرة أو عرق أو فودكا أو جن",
    fa: "+€{p.alcohol2}/نفر · شراب، آبجو، راکی، ودکا یا جین", fr: "+€{p.alcohol2}/personne · vin, bière, rakı, vodka ou gin", it: "+€{p.alcohol2}/persona · Vino, birra, rakı, vodka o gin", zh: "+€{p.alcohol2}／人 · 葡萄酒、啤酒、拉克酒、伏特加或金酒", id: "+€{p.alcohol2}/orang · Anggur, bir, rakı, vodka, atau gin", ms: "+€{p.alcohol2}/orang · Wain, bir, rakı, vodka atau gin", pl: "+€{p.alcohol2}/osobę · Wino, piwo, rakı, wódka lub gin", bg: "+€{p.alcohol2}/човек · вино, бира, ракъ, водка или джин", ro: "+€{p.alcohol2}/persoană · Vin, bere, rachiu, vodcă sau gin", uk: "+€{p.alcohol2}/особа &middot; Вино, пиво, ракі, горілка або джин", ja: "+€{p.alcohol2}/お一人様 &middot; ワイン、ビール、ラク、ウォッカ、またはジン", ko: "+€{p.alcohol2}/인 &middot; 와인, 맥주, 라크, 보드카 또는 진", hi: "+€{p.alcohol2}/व्यक्ति &middot; वाइन, बीयर, राकी, वोदका, या जिन", ur: "+€{p.alcohol2}/فی شخص &middot; شراب، بیئر، راکی، ووڈکا، یا جن"
  },
  "wizard.unlimitedLabel": {
    en: "Unlimited Alcohol",
    tr: "Sınırsız Alkol",
    de: "Unbegrenzter Alkohol",
    es: "Alcohol ilimitado",
    ru: "Безлимитный алкоголь",
    ar: "كحول غير محدود",
    fa: "الکل نامحدود", fr: "Alcool illimité", it: "Alcol illimitato", zh: "无限畅饮酒水", id: "Alkohol Tanpa Batas", ms: "Alkohol Tanpa Had", pl: "Nieograniczony alkohol", bg: "Неограничен алкохол", ro: "Alcool Nelimitat", uk: "Необмежений алкоголь", ja: "アルコール飲み放題", ko: "무제한 알코올", hi: "असीमित अल्कोहल", ur: "لامحدود شراب"
  },
  "wizard.unlimitedNote": {
    en: "+€{p.unlimited}/person · Wine, beer, rakı, vodka, gin all night",
    tr: "+€{p.unlimited}/kişi · Gece boyunca şarap, bira, rakı, vodka, cin",
    de: "+30 €/Person · Wein, Bier, Rakı, Wodka, Gin die ganze Nacht",
    es: "+30 €/persona · Vino, cerveza, rakı, vodka, ginebra toda la noche",
    ru: "+30 €/чел. · Вино, пиво, ракы, водка, джин всю ночь",
    ar: "+٣٠€/شخص · نبيذ وبيرة وعرق وفودكا وجن طوال الليل",
    fa: "+€{p.unlimited}/نفر · شراب، آبجو، راکی، ودکا و جین در تمام شب", fr: "+€{p.unlimited}/personne · vin, bière, rakı, vodka, gin toute la soirée", it: "+€{p.unlimited}/persona · Vino, birra, rakı, vodka, gin tutta la notte", zh: "+€{p.unlimited}／人 · 整晚无限畅饮葡萄酒、啤酒、拉克酒、伏特加、金酒", id: "+€{p.unlimited}/orang · Anggur, bir, rakı, vodka, gin sepanjang malam", ms: "+€{p.unlimited}/orang · Wain, bir, rakı, vodka, gin sepanjang malam", pl: "+€{p.unlimited}/osobę · Wino, piwo, rakı, wódka, gin całą noc", bg: "+€{p.unlimited}/човек · вино, бира, ракъ, водка, джин цяла нощ", ro: "+€{p.unlimited}/persoană · Vin, bere, rachiu, vodcă, gin toată noaptea", uk: "+€{p.unlimited}/особа &middot; Вино, пиво, ракі, горілка, джин весь вечір", ja: "+€{p.unlimited}/お一人様 &middot; ワイン、ビール、ラク、ウォッカ、ジンを終夜お楽しみいただけます", ko: "+€{p.unlimited}/인 &middot; 와인, 맥주, 라크, 보드카, 진 밤새 무제한", hi: "+€{p.unlimited}/व्यक्ति &middot; वाइन, बीयर, राकी, वोदका, जिन पूरी रात", ur: "+€{p.unlimited}/فی شخص &middot; شراب، بیئر، راکی، ووڈکا، جن پوری رات"
  },
  "wizard.softNote": {
    en: "Included free",
    tr: "Ücretsiz dahil",
    de: "Kostenlos inklusive",
    es: "Incluido gratis",
    ru: "Включено бесплатно",
    ar: "مشمول مجانًا",
    fa: "به‌صورت رایگان شامل می‌شود", fr: "Inclus gratuitement", it: "Incluso gratis", zh: "免费包含", id: "Termasuk gratis", ms: "Termasuk percuma", pl: "Wliczone bezpłatnie", bg: "Включено безплатно", ro: "Inclus gratuit", uk: "Включено безкоштовно", ja: "無料で含まれております", ko: "무료 포함", hi: "निःशुल्क शामिल", ur: "مفت شامل ہے"
  },
  "wizard.drinkComplete": {
    en: "Drink selection complete",
    tr: "İçecek seçimi tamamlandı",
    de: "Getränkeauswahl abgeschlossen",
    es: "Selección de bebidas completa",
    ru: "Выбор напитков завершён",
    ar: "تم اختيار المشروبات",
    fa: "انتخاب نوشیدنی کامل شد", fr: "Choix des boissons terminé", it: "Selezione bevande completata", zh: "饮品选择完成", id: "Pemilihan minuman selesai", ms: "Pilihan minuman selesai", pl: "Wybór napojów zakończony", bg: "Изборът на напитки е завършен", ro: "Selectare băuturi completă", uk: "Вибір напоїв завершено", ja: "ドリンクの選択が完了しました", ko: "음료 선택 완료", hi: "पेय चयन पूर्ण", ur: "مشروبات کا انتخاب مکمل ہو گیا"
  },
  "wizard.drinkRemaining": {
    en: "Please select drinks for all guests",
    tr: "Tüm misafirler için içecek seçin",
    de: "Bitte wählen Sie Getränke für alle Gäste",
    es: "Seleccione bebidas para todos los huéspedes",
    ru: "Выберите напитки для всех гостей",
    ar: "يرجى اختيار المشروبات لجميع الضيوف",
    fa: "لطفاً برای همه مهمانان نوشیدنی انتخاب کنید", fr: "Veuillez sélectionner les boissons pour tous les invités", it: "Per favore selezioni le bevande per tutti gli ospiti", zh: "请为所有宾客选择饮品", id: "Silakan pilih minuman untuk semua tamu", ms: "Sila pilih minuman untuk semua tetamu", pl: "Prosimy wybrać napoje dla wszystkich gości", bg: "Моля, изберете напитки за всички гости", ro: "Vă rugăm să selectați băuturi pentru toți oaspeții", uk: "Будь ласка, оберіть напої для всіх гостей", ja: "全てのお客様のドリンクをご選択ください", ko: "모든 게스트의 음료를 선택해 주시기 바랍니다", hi: "कृपया सभी मेहमानों के लिए पेय चुनें", ur: "براہ کرم تمام مہمانوں کے لیے مشروبات منتخب کریں"
  },

  // ========== WIZARD — STEP 3 (Reservation Details) ==========
  "wizard.reservationDetails": {
    en: "Reservation Details",
    tr: "Rezervasyon Bilgileri",
    de: "Reservierungsdetails",
    es: "Detalles de la reserva",
    ru: "Данные бронирования",
    ar: "تفاصيل الحجز",
    fa: "جزئیات رزرو", fr: "Détails de la réservation", it: "Dettagli della prenotazione", zh: "预订详情", id: "Detail Reservasi", ms: "Butiran Tempahan", pl: "Szczegóły rezerwacji", bg: "Подробности за резервацията", ro: "Detalii Rezervare", uk: "Деталі бронювання", ja: "ご予約詳細", ko: "예약 세부사항", hi: "आरक्षण विवरण", ur: "ریزرویشن کی تفصیلات"
  },
  "wizard.guestName": {
    en: "Guest Name",
    tr: "Misafir Adı",
    de: "Gastname",
    es: "Nombre del huésped",
    ru: "Имя гостя",
    ar: "اسم الضيف",
    fa: "نام مهمان", fr: "Nom de l'invité", it: "Nome dell'ospite", zh: "宾客姓名", id: "Nama Tamu", ms: "Nama Tetamu", pl: "Imię i nazwisko gościa", bg: "Име на госта", ro: "Numele Oaspetelui", uk: "Ім'я гостя", ja: "お名前", ko: "게스트 성함", hi: "मेहमान का नाम", ur: "مہمان کا نام"
  },
  "wizard.namePlaceholder": {
    en: "Full name",
    tr: "Ad Soyad",
    de: "Vollständiger Name",
    es: "Nombre completo",
    ru: "Полное имя",
    ar: "الاسم الكامل",
    fa: "نام کامل", fr: "Nom complet", it: "Nome e cognome", zh: "全名", id: "Nama lengkap", ms: "Nama penuh", pl: "Imię i nazwisko", bg: "Пълно име", ro: "Nume complet", uk: "Повне ім'я", ja: "フルネーム", ko: "전체 이름", hi: "पूरा नाम", ur: "پورا نام"
  },
  "wizard.phone": {
    en: "Phone Number",
    tr: "Telefon Numarası",
    de: "Telefonnummer",
    es: "Número de teléfono",
    ru: "Номер телефона",
    ar: "رقم الهاتف",
    fa: "شماره تلفن", fr: "Numéro de téléphone", it: "Numero di telefono", zh: "电话号码", id: "Nomor Telepon", ms: "Nombor Telefon", pl: "Numer telefonu", bg: "Телефонен номер", ro: "Număr de Telefon", uk: "Номер телефону", ja: "電話番号", ko: "전화번호", hi: "फ़ोन नंबर", ur: "فون نمبر"
  },
  "wizard.phonePlaceholder": {
    en: "+XX XXX XXX XXXX",
    tr: "+XX XXX XXX XXXX",
    de: "+XX XXX XXX XXXX",
    es: "+XX XXX XXX XXXX",
    ru: "+XX XXX XXX XXXX",
    ar: "+XX XXX XXX XXXX",
    fa: "+XX XXX XXX XXXX", fr: "+XX XXX XXX XXXX", it: "+XX XXX XXX XXXX", zh: "+XX XXX XXX XXXX", id: "+XX XXX XXX XXXX", ms: "+XX XXX XXX XXXX", pl: "+XX XXX XXX XXXX", bg: "+XX XXX XXX XXXX", ro: "+XX XXX XXX XXXX", uk: "+XX XXX XXX XXXX", ja: "+XX XXX XXX XXXX", ko: "+XX XXX XXX XXXX", hi: "+XX XXX XXX XXXX", ur: "+XX XXX XXX XXXX"
  },
  "wizard.stepPackage": {
    en: "Package", tr: "Paket", de: "Paket", es: "Paquete", ru: "Пакет", ar: "الباقة",
    fa: "پکیج", fr: "Forfait", it: "Pacchetto", zh: "套餐", id: "Paket", ms: "Pakej", pl: "Pakiet", bg: "Пакет", ro: "Pachet", uk: "Пакет", ja: "パッケージ", ko: "패키지", hi: "पैकेज", ur: "پیکیج"
  },
  "wizard.stepExtras": {
    en: "Extras", tr: "Ekstralar", de: "Extras", es: "Extras", ru: "Допы", ar: "إضافات",
    fa: "افزودنی‌ها", fr: "Options", it: "Extra", zh: "附加项", id: "Tambahan", ms: "Tambahan", pl: "Dodatki", bg: "Добавки", ro: "Suplimente", uk: "Додатково", ja: "追加オプション", ko: "추가 옵션", hi: "अतिरिक्त", ur: "اضافی"
  },
  "wizard.stepInfo": {
    en: "Info", tr: "Bilgi", de: "Info", es: "Info", ru: "Инфо", ar: "معلومات",
    fa: "اطلاعات", fr: "Infos", it: "Info", zh: "信息", id: "Info", ms: "Maklumat", pl: "Dane", bg: "Данни", ro: "Info", uk: "Інформація", ja: "情報入力", ko: "정보", hi: "जानकारी", ur: "معلومات"
  },
  "wizard.stepTicket": {
    en: "Ticket", tr: "Bilet", de: "Ticket", es: "Billete", ru: "Билет", ar: "تذكرة",
    fa: "بلیت", fr: "Billet", it: "Biglietto", zh: "票券", id: "Tiket", ms: "Tiket", pl: "Bilet", bg: "Билет", ro: "Bilet", uk: "Квиток", ja: "チケット", ko: "티켓", hi: "टिकट", ur: "ٹکٹ"
  },
  "wizard.enterName": {
    en: "Please enter your name", tr: "Lütfen adınızı girin", de: "Bitte geben Sie Ihren Namen ein", es: "Por favor ingrese su nombre",
    ru: "Пожалуйста, введите ваше имя", ar: "يرجى إدخال اسمك",
    fa: "لطفاً نام خود را وارد کنید", fr: "Veuillez saisir votre nom", it: "Per favore inserisca il Suo nome", zh: "请输入您的姓名", id: "Silakan masukkan nama Anda", ms: "Sila masukkan nama anda", pl: "Prosimy wprowadzić imię i nazwisko", bg: "Моля, въведете името си", ro: "Vă rugăm să introduceți numele dumneavoastră", uk: "Будь ласка, введіть Ваше ім'я", ja: "お名前をご入力ください", ko: "성함을 입력해 주시기 바랍니다", hi: "कृपया अपना नाम दर्ज करें", ur: "براہ کرم اپنا نام درج کریں"
  },
  "wizard.invalidName": {
    en: "Please enter a valid name", tr: "Lütfen geçerli bir isim girin", de: "Bitte geben Sie einen gültigen Namen ein", es: "Por favor ingrese un nombre válido",
    ru: "Пожалуйста, введите действительное имя", ar: "يرجى إدخال اسم صحيح",
    fa: "لطفاً نام معتبر وارد کنید", fr: "Veuillez saisir un nom valide", it: "Per favore inserisca un nome valido", zh: "请输入有效的姓名", id: "Silakan masukkan nama yang valid", ms: "Sila masukkan nama yang sah", pl: "Prosimy wprowadzić prawidłowe imię i nazwisko", bg: "Моля, въведете валидно име", ro: "Vă rugăm să introduceți un nume valid", uk: "Будь ласка, введіть коректне ім'я", ja: "有効なお名前をご入力ください", ko: "올바른 이름을 입력해 주시기 바랍니다", hi: "कृपया एक मान्य नाम दर्ज करें", ur: "براہ کرم درست نام درج کریں"
  },
  "wizard.enterPhone": {
    en: "Please enter your phone number", tr: "Lütfen telefon numaranızı girin", de: "Bitte geben Sie Ihre Telefonnummer ein", es: "Por favor ingrese su número de teléfono",
    ru: "Пожалуйста, введите номер телефона", ar: "يرجى إدخال رقم هاتفك",
    fa: "لطفاً شماره تلفن خود را وارد کنید", fr: "Veuillez saisir votre numéro de téléphone", it: "Per favore inserisca il Suo numero di telefono", zh: "请输入您的电话号码", id: "Silakan masukkan nomor telepon Anda", ms: "Sila masukkan nombor telefon anda", pl: "Prosimy wprowadzić numer telefonu", bg: "Моля, въведете телефонния си номер", ro: "Vă rugăm să introduceți numărul dumneavoastră de telefon", uk: "Будь ласка, введіть Ваш номер телефону", ja: "電話番号をご入力ください", ko: "전화번호를 입력해 주시기 바랍니다", hi: "कृपया अपना फ़ोन नंबर दर्ज करें", ur: "براہ کرم اپنا فون نمبر درج کریں"
  },
  "wizard.pickCountry": {
    en: "Please select your country code", tr: "Lütfen ülke kodunu seçin", de: "Bitte Ländervorwahl auswählen", es: "Por favor seleccione su código de país",
    ru: "Пожалуйста, выберите код страны", ar: "يرجى اختيار رمز بلدك",
    fa: "لطفاً کد کشور خود را انتخاب کنید", fr: "Veuillez sélectionner votre indicatif pays", it: "Per favore selezioni il prefisso del Suo Paese", zh: "请选择您的国家代码", id: "Silakan pilih kode negara Anda", ms: "Sila pilih kod negara anda", pl: "Prosimy wybrać kod kraju", bg: "Моля, изберете кода на държавата си", ro: "Vă rugăm să selectați codul țării dumneavoastră", uk: "Будь ласка, оберіть код Вашої країни", ja: "国コードをご選択ください", ko: "국가 코드를 선택해 주시기 바랍니다", hi: "कृपया अपना देश कोड चुनें", ur: "براہ کرم اپنا ملکی کوڈ منتخب کریں"
  },
  "wizard.countryPlaceholder": {
    en: "Country", tr: "Ülke", de: "Land", es: "País",
    ru: "Страна", ar: "الدولة",
    fa: "کشور", fr: "Pays", it: "Paese", zh: "国家", id: "Negara", ms: "Negara", pl: "Kraj", bg: "Държава", ro: "Țară", uk: "Країна", ja: "国", ko: "국가", hi: "देश", ur: "ملک"
  },
  "wizard.invalidPhone": {
    en: "Please enter a valid phone number", tr: "Lütfen geçerli bir telefon numarası girin", de: "Bitte geben Sie eine gültige Telefonnummer ein", es: "Por favor ingrese un número de teléfono válido",
    ru: "Пожалуйста, введите действительный номер телефона", ar: "يرجى إدخال رقم هاتف صحيح",
    fa: "لطفاً شماره تلفن معتبر وارد کنید", fr: "Veuillez saisir un numéro de téléphone valide", it: "Per favore inserisca un numero di telefono valido", zh: "请输入有效的电话号码", id: "Silakan masukkan nomor telepon yang valid", ms: "Sila masukkan nombor telefon yang sah", pl: "Prosimy wprowadzić prawidłowy numer telefonu", bg: "Моля, въведете валиден телефонен номер", ro: "Vă rugăm să introduceți un număr de telefon valid", uk: "Будь ласка, введіть коректний номер телефону", ja: "有効な電話番号をご入力ください", ko: "올바른 전화번호를 입력해 주시기 바랍니다", hi: "कृपया एक मान्य फ़ोन नंबर दर्ज करें", ur: "براہ کرم درست فون نمبر درج کریں"
  },
  "wizard.selectContact": {
    en: "Please select a contact method", tr: "Lütfen iletişim tercihinizi seçin", de: "Bitte wählen Sie eine Kontaktmethode", es: "Por favor seleccione un método de contacto",
    ru: "Пожалуйста, выберите способ связи", ar: "يرجى اختيار طريقة الاتصال",
    fa: "لطفاً یک روش تماس انتخاب کنید", fr: "Veuillez sélectionner un moyen de contact", it: "Per favore selezioni un metodo di contatto", zh: "请选择一种联系方式", id: "Silakan pilih metode kontak", ms: "Sila pilih kaedah hubungan", pl: "Prosimy wybrać metodę kontaktu", bg: "Моля, изберете метод за контакт", ro: "Vă rugăm să selectați o metodă de contact", uk: "Будь ласка, оберіть спосіб зв'язку", ja: "ご連絡方法をお選びください", ko: "연락 방법을 선택해 주십시오", hi: "कृपया संपर्क का तरीका चुनें", ur: "براہ کرم رابطے کا طریقہ منتخب کریں"
  },
  "wizard.contactWhatsappHint": {
    en: "Fastest reply", tr: "En hızlı cevap", de: "Schnellste Antwort", es: "Respuesta más rápida",
    ru: "Самый быстрый ответ", ar: "أسرع رد",
    fa: "سریع‌ترین پاسخ", fr: "Réponse la plus rapide", it: "Risposta più rapida", zh: "回复最快", id: "Balasan tercepat", ms: "Balasan terpantas", pl: "Najszybsza odpowiedź", bg: "Най-бърз отговор", ro: "Cel mai rapid răspuns", uk: "Найшвидша відповідь", ja: "最速返信", ko: "가장 빠른 답변", hi: "सबसे तेज़ जवाब", ur: "تیز ترین جواب"
  },
  "wizard.contactTelegramHint": {
    en: "Alternative", tr: "Alternatif", de: "Alternative", es: "Alternativa",
    ru: "Альтернатива", ar: "بديل",
    fa: "جایگزین", fr: "Alternative", it: "Alternativa", zh: "备用方式", id: "Alternatif", ms: "Alternatif", pl: "Alternatywa", bg: "Алтернатива", ro: "Alternativă", uk: "Альтернатива", ja: "代替手段", ko: "대체 수단", hi: "वैकल्पिक", ur: "متبادل"
  },
  "floatingWa.tooltip": {
    en: "Reply in 2 min", tr: "2 dakikada cevap", de: "Antwort in 2 Min", es: "Respuesta en 2 min",
    ru: "Ответ за 2 мин", ar: "رد خلال دقيقتين",
    fa: "پاسخ در ۲ دقیقه", fr: "Réponse en 2 min", it: "Risposta in 2 min", zh: "2 分钟内回复", id: "Balas dalam 2 menit", ms: "Balas dalam 2 minit", pl: "Odpowiedź w 2 min", bg: "Отговор за 2 мин", ro: "Răspuns în 2 min",
    hi: "2 मिनट में जवाब", ur: "2 منٹ میں جواب", uk: "Відповідь за 2 хв", ja: "2分以内に返信", ko: "2분 내 답변"
  },
  "floatingWa.label": {
    en: "We're online · Chat now",
    tr: "Çevrimiçiyiz · Hemen yaz",
    de: "Wir sind online · Jetzt chatten",
    es: "Estamos en línea · Chatea ahora",
    ru: "Мы онлайн · Напишите сейчас",
    ar: "نحن متصلون · تواصل الآن",
    fa: "ما آنلاین هستیم · همین حالا چت کنید",
    fr: "Nous sommes en ligne · Discutez maintenant",
    it: "Siamo online · Scrivi ora",
    zh: "我们在线 · 立即聊天",
    id: "Kami online · Chat sekarang",
    ms: "Kami dalam talian · Sembang sekarang",
    pl: "Jesteśmy online · Napisz teraz",
    bg: "Онлайн сме · Пишете сега",
    ro: "Suntem online · Discută acum",
    hi: "हम ऑनलाइन हैं · अभी चैट करें",
    ur: "ہم آن لائن ہیں · ابھی چیٹ کریں", uk: "Ми онлайн &middot; Напишіть зараз", ja: "オンライン対応中 &middot; 今すぐチャット", ko: "온라인 상담 중 &middot; 지금 채팅하기"
  },
  "floatingWa.message": {
    en: "Hi! I'd like to ask about the Bosphorus Night cruise.",
    tr: "Merhaba! Bosphorus Night turu hakkında bilgi almak istiyorum.",
    de: "Hallo! Ich möchte mich über die Bosphorus Night Kreuzfahrt informieren.",
    es: "¡Hola! Me gustaría preguntar sobre el crucero Bosphorus Night.",
    ru: "Здравствуйте! Хотел бы узнать о круизе Bosphorus Night.",
    ar: "مرحبا! أود أن أستفسر عن رحلة Bosphorus Night.",
    fa: "سلام! می‌خواهم درباره تور Bosphorus Night اطلاعات بگیرم.",
    fr: "Bonjour ! Je souhaiterais des informations sur la croisière Bosphorus Night.",
    it: "Salve! Vorrei avere informazioni sulla crociera Bosphorus Night.",
    zh: "您好!我想咨询 Bosphorus Night 游船。",
    id: "Halo! Saya ingin bertanya tentang Bosphorus Night cruise.",
    ms: "Hai! Saya ingin bertanya tentang Bosphorus Night cruise.",
    pl: "Cześć! Chciałbym zapytać o rejs Bosphorus Night.",
    bg: "Здравейте! Бих искал да попитам за круиза Bosphorus Night.",
    ro: "Bună! Aș dori să întreb despre croaziera Bosphorus Night.",
    hi: "नमस्ते! मैं Bosphorus Night क्रूज़ के बारे में जानकारी चाहता हूँ।",
    ur: "ہیلو! میں Bosphorus Night کروز کے بارے میں پوچھنا چاہتا ہوں۔", uk: "Вітаю! Хотів би запитати про круїз Bosphorus Night.", ja: "こんにちは！Bosphorus Nightクルーズについてお伺いしたいことがあります。", ko: "안녕하세요! Bosphorus Night 크루즈에 대해 문의하고 싶습니다."
  },
  "wizard.enterAddress": {
    en: "Please enter your pickup address", tr: "Lütfen alım adresinizi girin", de: "Bitte geben Sie Ihre Abholadresse ein", es: "Por favor ingrese su dirección de recogida",
    ru: "Пожалуйста, введите адрес подачи", ar: "يرجى إدخال عنوان الاستلام",
    fa: "لطفاً آدرس سوار شدن خود را وارد کنید", fr: "Veuillez saisir votre adresse de prise en charge", it: "Per favore inserisca il Suo indirizzo di prelievo", zh: "请输入您的接送地址", id: "Silakan masukkan alamat penjemputan Anda", ms: "Sila masukkan alamat ambil anda", pl: "Prosimy wprowadzić adres odbioru", bg: "Моля, въведете адреса си за вземане", ro: "Vă rugăm să introduceți adresa dumneavoastră de preluare", uk: "Будь ласка, введіть адресу для трансферу", ja: "送迎先のご住所をご入力ください", ko: "픽업 주소를 입력해 주십시오", hi: "कृपया अपना पिकअप पता दर्ज करें", ur: "براہ کرم اپنا پک اپ پتہ درج کریں"
  },
  "wizard.phoneNote": {
    en: "We will contact you via this number for booking confirmation",
    tr: "Rezervasyon onayı için bu numara üzerinden sizinle iletişime geçeceğiz",
    de: "Wir werden Sie über diese Nummer für die Buchungsbestätigung kontaktieren",
    es: "Le contactaremos a este número para confirmar la reserva",
    ru: "Мы свяжемся с вами по этому номеру для подтверждения бронирования",
    ar: "سنتواصل معك عبر هذا الرقم لتأكيد الحجز",
    fa: "از این شماره برای تأیید رزرو با شما تماس خواهیم گرفت", fr: "Nous vous contacterons à ce numéro pour la confirmation", it: "La contatteremo tramite questo numero per la conferma della prenotazione", zh: "我们将通过此号码联系您确认预订", id: "Kami akan menghubungi Anda via nomor ini untuk konfirmasi pemesanan", ms: "Kami akan menghubungi anda melalui nombor ini untuk pengesahan tempahan", pl: "Skontaktujemy się z Państwem pod tym numerem w celu potwierdzenia rezerwacji", bg: "Ще се свържем с Вас на този номер за потвърждение на резервацията", ro: "Vă vom contacta prin acest număr pentru confirmarea rezervării", uk: "Ми зв'яжемося з Вами за цим номером для підтвердження бронювання", ja: "ご予約確認のため、こちらの番号よりご連絡させていただきます", ko: "예약 확인을 위해 이 번호로 연락드리겠습니다", hi: "बुकिंग की पुष्टि के लिए हम इस नंबर पर आपसे संपर्क करेंगे", ur: "ہم بکنگ کی تصدیق کے لیے اس نمبر پر آپ سے رابطہ کریں گے"
  },
  "wizard.pickupAddress": {
    en: "Where should we pick you up?",
    tr: "Sizi nereden alalım?",
    de: "Wo sollen wir Sie abholen?",
    es: "¿Dónde le recogemos?",
    ru: "Где вас забрать?",
    ar: "من أين نأخذكم؟",
    fa: "شما را از کجا سوار کنیم؟", fr: "Où devons-nous vous chercher?", it: "Dove vi veniamo a prendere?", zh: "在哪里接您？", id: "Di mana kami menjemput Anda?", ms: "Di mana kami akan menjemput Anda?", pl: "Skąd Państwa zabrać?", bg: "Откъде да Ви вземем?", ro: "De unde să vă luăm?", uk: "Звідки Вас забрати?", ja: "どちらまでお迎えに上がりましょうか？", ko: "어디에서 픽업해 드릴까요?", hi: "हमें आपको कहाँ से पिकअप करना चाहिए?", ur: "ہمیں آپ کو کہاں سے لینا چاہیے؟"
  },
  "wizard.addressPlaceholder": {
    en: "Enter hotel name or address",
    tr: "Otel adı veya adres yazın",
    de: "Hotelname oder Adresse eingeben",
    es: "Escribe el hotel o la dirección",
    ru: "Введите название отеля или адрес",
    ar: "اكتب اسم الفندق أو العنوان",
    fa: "نام هتل یا آدرس را بنویسید", fr: "Tapez le nom de l'hôtel ou l'adresse", it: "Inserisci il nome dell'hotel o l'indirizzo", zh: "输入酒店名称或地址", id: "Ketik nama hotel atau alamat", ms: "Taip nama hotel atau alamat", pl: "Wpisz nazwę hotelu lub adres", bg: "Напишете името на хотела или адреса", ro: "Tastați numele hotelului sau adresa", uk: "Введіть назву готелю або адресу", ja: "ホテル名または住所を入力", ko: "호텔명 또는 주소를 입력하세요", hi: "होटल का नाम या पता दर्ज करें", ur: "ہوٹل کا نام یا پتہ درج کریں"
  },
  "wizard.pickFromList": {
    en: "Please pick your address from the dropdown list",
    tr: "Lütfen adresinizi açılan listeden seçin",
    de: "Bitte wählen Sie Ihre Adresse aus der Liste",
    es: "Por favor, seleccione su dirección de la lista desplegable",
    ru: "Пожалуйста, выберите ваш адрес из списка",
    ar: "يرجى اختيار عنوانك من القائمة المنسدلة",
    fa: "لطفاً آدرس خود را از فهرست بازشو انتخاب کنید", fr: "Veuillez choisir votre adresse dans la liste déroulante", it: "Per favore scelga il Suo indirizzo dal menu a tendina", zh: "请从下拉列表中选择您的地址", id: "Silakan pilih alamat Anda dari daftar dropdown", ms: "Sila pilih alamat anda dari senarai lungsur", pl: "Prosimy wybrać adres z listy rozwijanej", bg: "Моля, изберете адреса си от падащия списък", ro: "Vă rugăm să alegeți adresa din lista derulantă", uk: "Будь ласка, оберіть Вашу адресу зі списку", ja: "ドロップダウンリストからご住所をお選びください", ko: "드롭다운 목록에서 주소를 선택해 주십시오", hi: "कृपया ड्रॉपडाउन सूची से अपना पता चुनें", ur: "براہ کرم ڈراپ ڈاؤن فہرست سے اپنا پتہ منتخب کریں"
  },
  "wizard.continueWithoutTransfer": {
    en: "Continue without transfer · I'll come myself",
    tr: "Transfer olmadan devam et · Kendim geleceğim",
    de: "Ohne Transfer fortfahren · Ich komme selbst",
    es: "Continuar sin traslado · Iré por mi cuenta",
    ru: "Продолжить без трансфера · Я приеду сам",
    ar: "المتابعة بدون نقل · سآتي بنفسي",
    fa: "ادامه بدون ترانسفر · خودم می‌آیم", fr: "Continuer sans transfert · je viendrai moi-même", it: "Continua senza transfer · Verrò da solo", zh: "不预订接送继续 · 我自行前往", id: "Lanjutkan tanpa antar-jemput · Saya akan datang sendiri", ms: "Teruskan tanpa pemindahan · Saya akan datang sendiri", pl: "Kontynuuj bez transferu · Przyjadę sam", bg: "Продължете без трансфер · ще дойда сам", ro: "Continuați fără transfer · Vin singur", uk: "Продовжити без трансферу &middot; Я приїду сам", ja: "送迎なしで続ける &middot; 自分で向かいます", ko: "픽업 서비스 없이 계속 &middot; 직접 가겠습니다", hi: "ट्रांसफर के बिना जारी रखें &middot; मैं स्वयं आऊंगा/आऊंगी", ur: "ٹرانسفر کے بغیر جاری رکھیں &middot; میں خود آؤں گا/گی"
  },
  "wizard.transferTimeBlockedTitle": {
    en: "Today's transfer window closed",
    tr: "Bugünkü transfer saati kapandı",
    de: "Heutiges Transferfenster geschlossen",
    es: "Traslado de hoy cerrado",
    ru: "Сегодняшний трансфер закрыт",
    ar: "خدمة النقل اليوم مغلقة",
    fa: "پنجره ترانسفر امروز بسته شد",
    fr: "Transfert d'aujourd'hui fermé",
    it: "Finestra di transfer di oggi chiusa",
    zh: "今日接送已关闭",
    id: "Antar-jemput hari ini ditutup",
    ms: "Pemindahan hari ini ditutup",
    pl: "Dzisiejszy transfer zamknięty",
    bg: "Днешният трансфер е затворен",
    ro: "Transferul de astăzi este închis", uk: "Сьогоднішній трансфер закрито", ja: "本日の送迎受付は終了しました", ko: "오늘의 픽업 시간이 마감되었습니다", hi: "आज का ट्रांसफर समय समाप्त हो गया", ur: "آج کی ٹرانسفر کی مدت ختم ہو گئی"
  },
  "wizard.transferTimeBlockedBody": {
    en: "Today's hotel transfer closed at 18:00. You can still join the cruise — reach Kabataş Pier on your own by 20:30.",
    tr: "Bugün için otel transferimiz saat 18:00'da kapandı. Kabataş İskelesi'ne 20:30'a kadar kendi ulaşımınızla gelirseniz tura yetişirsiniz.",
    de: "Der Hoteltransfer für heute hat um 18:00 Uhr geschlossen. Sie können der Bootsfahrt trotzdem beitreten – kommen Sie bis 20:30 Uhr selbst zum Kabataş-Anleger.",
    es: "El traslado al hotel de hoy cerró a las 18:00. Aún puede unirse al crucero — llegue al muelle de Kabataş por su cuenta antes de las 20:30.",
    ru: "Сегодняшний трансфер из отеля закрылся в 18:00. Вы всё ещё можете присоединиться к круизу — доберитесь до причала Кабаташ самостоятельно до 20:30.",
    ar: "أُغلقت خدمة النقل من الفندق اليوم الساعة 18:00. لا يزال بإمكانك الانضمام إلى الرحلة — توجّه إلى ميناء كاباتاش بنفسك قبل الساعة 20:30.",
    fa: "ترانسفر هتل امروز ساعت ۱۸:۰۰ بسته شد. هنوز می‌توانید به کروز بپیوندید — تا ساعت ۲۰:۳۰ خودتان به اسکله کاباتاش بروید.",
    fr: "Le transfert hôtel d'aujourd'hui a fermé à 18h00. Vous pouvez quand même rejoindre la croisière — venez par vos propres moyens au quai de Kabataş avant 20h30.",
    it: "Il transfer dall'hotel di oggi è chiuso alle 18:00. Puoi comunque salire a bordo — raggiungi il molo di Kabataş autonomamente entro le 20:30.",
    zh: "今日酒店接送已于18:00关闭。您仍可参加游船 — 请于20:30前自行抵达卡巴塔什码头。",
    id: "Antar-jemput hotel hari ini ditutup pukul 18:00. Anda tetap dapat mengikuti pelayaran — datang sendiri ke Dermaga Kabataş sebelum 20:30.",
    ms: "Pemindahan hotel hari ini ditutup pada 18:00. Anda masih boleh menyertai pelayaran — sampai ke Jeti Kabataş sendiri sebelum 20:30.",
    pl: "Dzisiejszy transfer z hotelu zamknięto o 18:00. Nadal możesz dołączyć do rejsu — dotrzyj do nabrzeża Kabataş samodzielnie do 20:30.",
    bg: "Днешният трансфер от хотела затвори в 18:00. Все още можете да се присъедините към круиза — стигнете до пристана Кабаташ сами до 20:30.",
    ro: "Transferul de la hotel de astăzi s-a închis la ora 18:00. Vă puteți alătura încă croazierei — ajungeți la Dana Kabataş pe cont propriu până la 20:30.", uk: "Трансфер з готелю на сьогодні закрився о 18:00. Ви все ще можете приєднатися до круїзу — дістаньтеся до Kabataş самостійно до 20:30.", ja: "本日のホテル送迎は18:00で受付終了いたしました。クルーズへのご参加は可能です — 20:30までにKabataş埠頭まで直接お越しください。", ko: "오늘의 호텔 픽업은 18:00에 마감되었습니다. 크루즈 탑승은 여전히 가능합니다 — 20:30까지 Kabataş 선착장으로 직접 오시면 됩니다.", hi: "आज का होटल ट्रांसफर 18:00 बजे बंद हो गया। आप अभी भी क्रूज़ में शामिल हो सकते हैं — 20:30 बजे तक Kabataş Pier पर स्वयं पहुँचें।", ur: "آج کی ہوٹل ٹرانسفر 18:00 بجے بند ہو گئی۔ آپ اب بھی کروز میں شامل ہو سکتے ہیں — 20:30 تک خود Kabataş پیئر پہنچ جائیں۔"
  },
  "wizard.transferTimeBlockedAction": {
    en: "I'll come to Kabataş myself",
    tr: "Kabataş'a kendim geleceğim",
    de: "Ich komme selbst nach Kabataş",
    es: "Iré a Kabataş por mi cuenta",
    ru: "Я приеду в Кабаташ сам",
    ar: "سآتي إلى كاباتاش بنفسي",
    fa: "خودم به کاباتاش می‌آیم",
    fr: "Je viendrai moi-même à Kabataş",
    it: "Verrò da solo a Kabataş",
    zh: "我自行前往卡巴塔什",
    id: "Saya akan datang sendiri ke Kabataş",
    ms: "Saya akan datang sendiri ke Kabataş",
    pl: "Sam dotrę do Kabataş",
    bg: "Сам ще дойда до Кабаташ",
    ro: "Voi veni singur la Kabataş", uk: "Я приїду до Kabataş сам", ja: "Kabataşまで自分で向かいます", ko: "Kabataş에 직접 가겠습니다", hi: "मैं Kabataş स्वयं आऊंगा/आऊंगी", ur: "میں خود Kabataş آؤں گا/گی"
  },
  "wizard.useButtonAbove": {
    en: "Tap the button above to continue without transfer",
    tr: "Transfer olmadan devam etmek için yukarıdaki butona basın",
    de: "Tippen Sie oben auf die Schaltfläche, um ohne Transfer fortzufahren",
    es: "Pulse el botón superior para continuar sin traslado",
    ru: "Нажмите кнопку выше, чтобы продолжить без трансфера",
    ar: "اضغط على الزر أعلاه للمتابعة بدون نقل",
    fa: "برای ادامه بدون ترانسفر روی دکمه بالا بزنید", fr: "Touchez le bouton ci-dessus pour continuer sans transfert", it: "Tocchi il pulsante sopra per continuare senza transfer", zh: "点击上方按钮不预订接送继续", id: "Ketuk tombol di atas untuk melanjutkan tanpa antar-jemput", ms: "Ketik butang di atas untuk teruskan tanpa pemindahan", pl: "Dotknij przycisku powyżej, aby kontynuować bez transferu", bg: "Натиснете бутона горе, за да продължите без трансфер", ro: "Apăsați butonul de mai sus pentru a continua fără transfer", uk: "Натисніть кнопку вище, щоб продовжити без трансферу", ja: "送迎なしで続けるには上記のボタンをタップしてください", ko: "픽업 서비스 없이 계속하려면 위 버튼을 눌러주십시오", hi: "ट्रांसफर के बिना जारी रखने के लिए ऊपर दिए गए बटन को दबाएं", ur: "ٹرانسفر کے بغیر جاری رکھنے کے لیے اوپر والا بٹن دبائیں"
  },
  "wizard.roomNumber": {
    en: "Room Number",
    tr: "Oda Numarası",
    de: "Zimmernummer",
    es: "Número de habitación",
    ru: "Номер комнаты",
    ar: "رقم الغرفة",
    fa: "شماره اتاق", fr: "Numéro de chambre", it: "Numero di stanza", zh: "房间号", id: "Nomor Kamar", ms: "Nombor Bilik", pl: "Numer pokoju", bg: "Номер на стая", ro: "Numărul Camerei", uk: "Номер кімнати", ja: "お部屋番号", ko: "객실 번호", hi: "कमरा नंबर", ur: "کمرہ نمبر"
  },
  "wizard.roomNumberPlaceholder": {
    en: "e.g. 507",
    tr: "örn. 507",
    de: "z.B. 507",
    es: "ej. 507",
    ru: "напр. 507",
    ar: "مثال: 507",
    fa: "مثلاً ۵۰۷", fr: "ex. 507", it: "es. 507", zh: "例如507", id: "mis. 507", ms: "cth. 507", pl: "np. 507", bg: "напр. 507", ro: "ex. 507", uk: "наприклад, 507", ja: "例：507", ko: "예: 507", hi: "उदाहरण 507", ur: "مثلاً 507"
  },
  "wizard.roomNumberNote": {
    en: "So our driver can find you easily. If you don't know yet, you can leave it empty — driver will ask at the lobby.",
    tr: "Şoförümüzün sizi kolay bulabilmesi için. Henüz bilmiyorsanız boş bırakabilirsiniz — şoför lobide ismen soracak.",
    de: "Damit unser Fahrer Sie leicht findet. Wenn Sie noch nicht wissen, können Sie es leer lassen — der Fahrer fragt an der Rezeption.",
    es: "Para que nuestro chofer le encuentre fácilmente. Si aún no lo sabe, puede dejarlo vacío — el chofer preguntará en el lobby.",
    ru: "Чтобы водитель легко вас нашёл. Если ещё не знаете, можете оставить пустым — водитель спросит в лобби.",
    ar: "حتى يتمكن سائقنا من إيجادك بسهولة. إذا لم تعرف بعد، يمكنك تركه فارغًا — سيسأل السائق في البهو.",
    fa: "تا راننده ما به‌راحتی شما را پیدا کند. اگر هنوز نمی‌دانید، می‌توانید خالی بگذارید — راننده در لابی سؤال خواهد کرد.", fr: "Pour que notre chauffeur vous trouve facilement. Si vous ne le savez pas encore, laissez vide — le chauffeur demandera à la réception.", it: "Così il nostro autista può trovarLa facilmente. Se non lo conosce ancora, può lasciarlo vuoto — l'autista chiederà alla reception.", zh: "便于司机顺利找到您。若尚不知晓,可留空——司机将在大堂询问。", id: "Agar sopir kami dapat menemukan Anda dengan mudah. Jika Anda belum tahu, Anda dapat mengosongkannya — sopir akan menanyakan di lobi.", ms: "Supaya pemandu kami mudah mencari anda. Jika anda belum tahu, anda boleh biarkan kosong — pemandu akan bertanya di lobi.", pl: "Aby nasz kierowca mógł Państwa łatwo znaleźć. Jeśli jeszcze Państwo nie wiedzą, można zostawić puste — kierowca zapyta w recepcji.", bg: "За да може шофьорът ни да Ви намери лесно. Ако все още не знаете, може да оставите полето празно — шофьорът ще попита на рецепцията.", ro: "Pentru ca șoferul nostru să vă găsească ușor. Dacă nu știți încă, puteți lăsa gol — șoferul va întreba la recepție.", uk: "Щоб наш водій міг легко Вас знайти. Якщо Ви ще не знаєте номер, можете залишити поле порожнім — водій запитає на ресепшені.", ja: "ドライバーがスムーズにお迎えできるようご記入ください。まだ不明な場合は空欄のままで結構です — ドライバーがロビーでご確認いたします。", ko: "기사님이 쉽게 찾을 수 있도록 알려주세요. 아직 모르시면 비워두셔도 됩니다 — 기사님이 로비에서 확인하겠습니다.", hi: "ताकि हमारा ड्राइवर आपको आसानी से ढूंढ सके। अगर आपको अभी तक पता नहीं है, तो आप इसे खाली छोड़ सकते हैं — ड्राइवर लॉबी में पूछ लेगा।", ur: "تاکہ ہمارا ڈرائیور آپ کو آسانی سے تلاش کر سکے۔ اگر آپ کو ابھی معلوم نہیں تو خالی چھوڑ سکتے ہیں — ڈرائیور لابی میں پوچھ لے گا۔"
  },
  "wizard.contactPref": {
    en: "How should we reach you?",
    tr: "Sizinle nereden iletişime geçelim?",
    de: "Wie sollen wir Sie erreichen?",
    es: "¿Cómo le contactamos?",
    ru: "Как с вами связаться?",
    ar: "كيف نتواصل معك؟",
    fa: "چگونه با شما تماس بگیریم؟", fr: "Comment vous joindre ?", it: "Come possiamo contattarLa?", zh: "通过哪个渠道联系您?", id: "Bagaimana kami menghubungi Anda?", ms: "Bagaimana kami hubungi anda?", pl: "Jak mamy się skontaktować?", bg: "Как да се свържем с Вас?", ro: "Cum vă contactăm?", uk: "Як нам з Вами зв'язатися?", ja: "ご連絡方法はどちらがよろしいですか？", ko: "어떻게 연락드리면 될까요?", hi: "हम आपसे कैसे संपर्क करें?", ur: "ہمیں آپ سے کیسے رابطہ کرنا چاہیے؟"
  },
  "wizard.contactWarning": {
    en: "Please fill in your name and phone number",
    tr: "Lütfen adınızı ve telefon numaranızı girin",
    de: "Bitte geben Sie Ihren Namen und Ihre Telefonnummer ein",
    es: "Por favor, introduzca su nombre y número de teléfono",
    ru: "Пожалуйста, укажите ваше имя и номер телефона",
    ar: "يرجى ملء الاسم ورقم الهاتف",
    fa: "لطفاً نام و شماره تلفن خود را پر کنید", fr: "Veuillez remplir votre nom et numéro de téléphone", it: "Per favore compili il Suo nome e numero di telefono", zh: "请填写您的姓名与电话号码", id: "Silakan isi nama dan nomor telepon Anda", ms: "Sila isi nama dan nombor telefon anda", pl: "Prosimy wypełnić imię, nazwisko i numer telefonu", bg: "Моля, попълнете името и телефонния си номер", ro: "Vă rugăm să completați numele și numărul dumneavoastră de telefon", uk: "Будь ласка, заповніть Ваше ім'я та номер телефону", ja: "お名前とお電話番号をご記入ください", ko: "성함과 전화번호를 입력해 주십시오", hi: "कृपया अपना नाम और फ़ोन नंबर भरें", ur: "براہ کرم اپنا نام اور فون نمبر درج کریں"
  },
  "wizard.reviewBooking": {
    en: "Please review your booking",
    tr: "Lütfen biletinizi kontrol edin",
    de: "Bitte überprüfen Sie Ihre Buchung",
    es: "Por favor, revise su reserva",
    ru: "Пожалуйста, проверьте ваше бронирование",
    ar: "يرجى مراجعة حجزك",
    fa: "لطفاً رزرو خود را مرور کنید", fr: "Veuillez vérifier votre réservation", it: "Per favore controlli la Sua prenotazione", zh: "请查看您的预订", id: "Silakan tinjau pemesanan Anda", ms: "Sila semak tempahan anda", pl: "Prosimy sprawdzić rezerwację", bg: "Моля, прегледайте резервацията си", ro: "Vă rugăm să revedeți rezervarea dumneavoastră", uk: "Будь ласка, перевірте Ваше бронювання", ja: "ご予約内容をご確認ください", ko: "예약 내용을 확인해 주십시오", hi: "कृपया अपनी बुकिंग की समीक्षा करें", ur: "براہ کرم اپنی بکنگ کا جائزہ لیں"
  },
  "ticket.guestName": {
    en: "Guest Name", tr: "Misafir Adı", de: "Gastname", es: "Nombre del Huésped",
    ru: "Имя гостя", ar: "اسم الضيف",
    fa: "نام مهمان", fr: "Nom de l'invité", it: "Nome dell'ospite", zh: "宾客姓名", id: "Nama Tamu", ms: "Nama Tetamu", pl: "Imię i nazwisko gościa", bg: "Име на госта", ro: "Numele Oaspetelui", uk: "Ім'я гостя", ja: "ゲスト名", ko: "예약자 성함", hi: "अतिथि का नाम", ur: "مہمان کا نام"
  },
  "ticket.phone": {
    en: "Phone", tr: "Telefon", de: "Telefon", es: "Teléfono",
    ru: "Телефон", ar: "الهاتف",
    fa: "تلفن", fr: "Téléphone", it: "Telefono", zh: "电话", id: "Telepon", ms: "Telefon", pl: "Telefon", bg: "Телефон", ro: "Telefon", uk: "Телефон", ja: "電話番号", ko: "전화번호", hi: "फ़ोन", ur: "فون"
  },
  "ticket.pickupAddress": {
    en: "Pickup Address", tr: "Alım Adresi", de: "Abholadresse", es: "Dirección de Recogida",
    ru: "Адрес подачи", ar: "عنوان الاستلام",
    fa: "آدرس سوار شدن", fr: "Adresse de prise en charge", it: "Indirizzo di prelievo", zh: "接送地址", id: "Alamat Penjemputan", ms: "Alamat Ambil", pl: "Adres odbioru", bg: "Адрес за вземане", ro: "Adresa de Preluare", uk: "Адреса трансферу", ja: "送迎先住所", ko: "픽업 주소", hi: "पिकअप पता", ur: "پک اپ پتہ"
  },

  // ========== TICKET / BOARDING PASS ==========
  "ticket.boardingPass": {
    en: "Boarding Pass", tr: "Biniş Kartı", de: "Bordkarte", es: "Tarjeta de Embarque",
    ru: "Посадочный талон", ar: "بطاقة الصعود",
    fa: "کارت سوار شدن", fr: "Carte d'embarquement", it: "Carta d'imbarco", zh: "登船牌", id: "Tiket Naik Kapal", ms: "Pas Menaiki", pl: "Karta pokładowa", bg: "Бордна карта", ro: "Tichet de Îmbarcare", uk: "Посадковий талон", ja: "乗船パス", ko: "탑승권", hi: "बोर्डिंग पास", ur: "بورڈنگ پاس"
  },
  "ticket.date": {
    en: "Date", tr: "Tarih", de: "Datum", es: "Fecha",
    ru: "Дата", ar: "التاريخ",
    fa: "تاریخ", fr: "Date", it: "Data", zh: "日期", id: "Tanggal", ms: "Tarikh", pl: "Data", bg: "Дата", ro: "Data", uk: "Дата", ja: "日付", ko: "날짜", hi: "तारीख", ur: "تاریخ"
  },
  "ticket.guests": {
    en: "Guests", tr: "Misafirler", de: "Gäste", es: "Huéspedes",
    ru: "Гости", ar: "الضيوف",
    fa: "مهمانان", fr: "Invités", it: "Ospiti", zh: "宾客", id: "Tamu", ms: "Tetamu", pl: "Goście", bg: "Гости", ro: "Oaspeți", uk: "Гості", ja: "人数", ko: "인원", hi: "अतिथि", ur: "مہمان"
  },
  "ticket.drinks": {
    en: "Drinks", tr: "İçecekler", de: "Getränke", es: "Bebidas",
    ru: "Напитки", ar: "المشروبات",
    fa: "نوشیدنی‌ها", fr: "Boissons", it: "Bevande", zh: "饮品", id: "Minuman", ms: "Minuman", pl: "Napoje", bg: "Напитки", ro: "Băuturi", uk: "Напої", ja: "ドリンク", ko: "음료", hi: "पेय पदार्थ", ur: "مشروبات"
  },
  "ticket.transfer": {
    en: "Transfer", tr: "Transfer", de: "Transfer", es: "Transfer",
    ru: "Трансфер", ar: "النقل",
    fa: "ترانسفر", fr: "Transfert", it: "Transfer", zh: "接送", id: "Antar-jemput", ms: "Pemindahan", pl: "Transfer", bg: "Трансфер", ro: "Transfer", uk: "Трансфер", ja: "送迎", ko: "픽업 서비스", hi: "ट्रांसफर", ur: "ٹرانسفر"
  },
  "ticket.special": {
    en: "Special", tr: "Özel", de: "Besonderes", es: "Especial",
    ru: "Особое", ar: "خاص",
    fa: "ویژه", fr: "Spécial", it: "Speciale", zh: "特别事项", id: "Khusus", ms: "Istimewa", pl: "Specjalne", bg: "Специално", ro: "Special", uk: "Спеціальне", ja: "スペシャル", ko: "특별", hi: "विशेष", ur: "خصوصی"
  },
  "ticket.romanticSetup": {
    en: "Romantic Table Setup", tr: "Romantik Masa Düzeni", de: "Romantischer Tisch", es: "Mesa Romántica",
    ru: "Романтическая сервировка", ar: "ترتيب طاولة رومانسية",
    fa: "چیدمان میز رمانتیک", fr: "Décoration table romantique", it: "Allestimento tavolo romantico", zh: "浪漫餐桌布置", id: "Pengaturan Meja Romantis", ms: "Susunan Meja Romantik", pl: "Aranżacja stolika romantycznego", bg: "Подреждане на романтична маса", ro: "Aranjament Masă Romantică", uk: "Романтичне оформлення столу", ja: "ロマンチックなテーブルセッティング", ko: "로맨틱 테이블 세팅", hi: "रोमांटिक टेबल सेटअप", ur: "رومانوی میز کی تیاری"
  },
  "ticket.meetingPoint": {
    en: "Meeting Point", tr: "Buluşma Noktası", de: "Treffpunkt", es: "Punto de Encuentro",
    ru: "Место встречи", ar: "نقطة الالتقاء",
    fa: "نقطه ملاقات", fr: "Point de rendez-vous", it: "Punto d'incontro", zh: "集合地点", id: "Titik Pertemuan", ms: "Titik Pertemuan", pl: "Miejsce spotkania", bg: "Място за среща", ro: "Punct de Întâlnire", uk: "Місце зустрічі", ja: "集合場所", ko: "집합 장소", hi: "मिलने का स्थान", ur: "ملاقات کی جگہ"
  },
  "ticket.hotelPickup": {
    en: "Hotel Pickup", tr: "Otelden Alınma", de: "Hotelabholung", es: "Recogida en Hotel",
    ru: "Из отеля", ar: "الاستلام من الفندق",
    fa: "سوار شدن از هتل", fr: "Prise en charge hôtel", it: "Prelievo in hotel", zh: "酒店接送", id: "Penjemputan Hotel", ms: "Jemputan Hotel", pl: "Odbiór z hotelu", bg: "Вземане от хотела", ro: "Preluare de la Hotel", uk: "Трансфер з готелю", ja: "ホテル送迎", ko: "호텔 픽업", hi: "होटल पिकअप", ur: "ہوٹل سے پک اپ"
  }
};


// Node.js build-time export (ignored in browser)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { T, LANGUAGES };
}
