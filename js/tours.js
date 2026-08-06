// ========== TOUR CONFIGURATION ==========
// Tüm tur verileri tek dosyadan yönetilir.
// Resim, fiyat, saat, açıklama değiştirmek için sadece bu dosyayı düzenleyin.

// Custom SVG icons for tour types
const TOUR_ICONS = {
  daytime: '<svg class="w-4 h-4 inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
  sunset: '<svg class="w-4 h-4 inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 18h20M6 14a6 6 0 0112 0"/><path d="M12 6v2M5.64 9.64l1.41 1.41M18.36 9.64l-1.41 1.41"/></svg>',
  dinner: '<svg class="w-4 h-4 inline-block align-middle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/><circle cx="17" cy="5" r="1" fill="currentColor" stroke="none"/></svg>'
};

const TOURS = {
  daytime: {
    icon: TOUR_ICONS.daytime,
    time: '12:00',
    duration: '1.5',
    durationUnit: { en: 'Hours', tr: 'Saat', de: 'Stunden', es: 'Horas', ru: 'Часа', ar: 'ساعة', fa: 'ساعت', fr: 'Heures', it: 'Ore', zh: '小时', id: 'Jam', ms: 'Jam', pl: 'Godzin', bg: 'Часа', ro: 'Ore' },
    pier: 'Kabataş Pier',
    todayLabel: { en: 'Today', tr: 'Bugün', de: 'Heute', es: 'Hoy', ru: 'Сегодня', ar: 'اليوم', fa: 'امروز', fr: 'Aujourd\'hui', it: 'Oggi', zh: '今天', id: 'Hari ini', ms: 'Hari ini', pl: 'Dzisiaj', bg: 'Днес', ro: 'Astăzi' },
    bgImage: '/assets/tours/daytime/boat-panorama.jpg',
    prices: {
      classic:  { standard: 20, premium: 30, vip: 45 },
      premium:  { standard: 25, premium: 35, vip: 50 },
      luxury:   { standard: 30, premium: 40, vip: 55 }
    },
    boats: ['classic', 'premium'],
    heroImage: '/assets/tours/daytime/boat-panorama.jpg',
    pills: [
      {
        label: { en: '12:00', tr: '12:00', de: '12:00', es: '12:00', ru: '12:00', ar: '12:00', fa: '12:00', fr: '12:00', it: '12:00', zh: '12:00', id: '12:00', ms: '12:00', pl: '12:00', bg: '12:00', ro: '12:00' },
        imgs: ['/assets/tours/daytime/lufer-bridge.jpg', '/assets/tours/daytime/boat-panorama.jpg', '/assets/tours/daytime/dolmabahce.jpg'],
        desc: { en: 'Departs from Kabataş Pier at 12:00', tr: 'Kabataş İskelesi\'nden 12:00\'de kalkar', de: 'Abfahrt vom Kabataş Pier um 12:00', es: 'Sale del muelle de Kabataş a las 12:00', ru: 'Отправление с причала Кабаташ в 12:00', ar: 'المغادرة من رصيف كاباتاش الساعة 12:00', fa: 'حرکت از اسکله کاباتاش ساعت 12:00', fr: 'Départ de l\'embarcadère de Kabataş à 12h00', it: 'Partenza dal molo di Kabataş alle 12:00', zh: '12:00从卡巴塔什码头出发', id: 'Berangkat dari Dermaga Kabataş pukul 12:00', ms: 'Berlepas dari Jeti Kabataş pada 12:00', pl: 'Odjazd z przystani Kabataş o 12:00', bg: 'Отплаване от кейа Кабаташ в 12:00', ro: 'Plecare de la debarcaderul Kabataş la 12:00' }
      },
      {
        label: { en: '1.5 Hours', tr: '1.5 Saat', de: '1,5 Std.', es: '1.5 Horas', ru: '1,5 часа', ar: '1.5 ساعة', fa: '1.5 ساعت', fr: '1,5 Heures', it: '1,5 Ore', zh: '1.5 小时', id: '1,5 Jam', ms: '1.5 Jam', pl: '1,5 Godziny', bg: '1,5 Часа', ro: '1,5 Ore' },
        imgs: ['/assets/tours/daytime/boat-aerial.jpg', '/assets/tours/daytime/lufer-bridge.jpg', '/assets/tours/daytime/boat-panorama.jpg'],
        desc: { en: 'Scenic route past 10+ iconic landmarks', tr: '10+ ikonik noktadan geçen manzara rotası', de: 'Panoramaroute mit 10+ Sehenswürdigkeiten', es: 'Ruta panorámica por 10+ monumentos', ru: 'Живописный маршрут мимо 10+ достопримечательностей', ar: 'مسار بانورامي عبر 10+ معالم', fa: 'مسیر منظره از کنار بیش از 10 مکان دیدنی', fr: 'Itinéraire panoramique devant plus de 10 monuments emblématiques', it: 'Percorso panoramico oltre 10+ monumenti iconici', zh: '经过10多个标志性地标的观光路线', id: 'Rute pemandangan melewati 10+ landmark ikonik', ms: 'Laluan pemandangan melepasi 10+ mercu tanda ikonik', pl: 'Malownicza trasa obok 10+ ikonicznych zabytków', bg: 'Живописен маршрут покрай 10+ емблематични забележителности', ro: 'Rută panoramică pe lângă 10+ monumente emblematice' }
      },
      {
        label: { en: 'Sightseeing', tr: 'Gezi', de: 'Besichtigung', es: 'Turismo', ru: 'Экскурсия', ar: 'مشاهدة', fa: 'تماشا', fr: 'Visite', it: 'Visita turistica', zh: '观光', id: 'Wisata', ms: 'Lawatan', pl: 'Zwiedzanie', bg: 'Разглеждане', ro: 'Turism' },
        imgs: ['/assets/tours/daytime/deck-guests.jpg', '/assets/tours/daytime/boat-aerial.jpg', '/assets/tours/daytime/dolmabahce.jpg'],
        desc: { en: 'Open-air deck with panoramic Bosphorus views', tr: 'Panoramik Boğaz manzaralı açık güverte', de: 'Freiluftdeck mit Panoramablick auf den Bosporus', es: 'Cubierta al aire libre con vistas panorámicas', ru: 'Открытая палуба с панорамным видом', ar: 'سطح مفتوح مع إطلالة بانورامية', fa: 'عرشه روباز با منظره پانوراما از بسفر', fr: 'Pont en plein air avec vues panoramiques sur le Bosphore', it: 'Ponte all\'aperto con vista panoramica sul Bosforo', zh: '开放式甲板,博斯普鲁斯全景', id: 'Dek terbuka dengan pemandangan panorama Bosphorus', ms: 'Dek terbuka dengan pemandangan panorama Bosphorus', pl: 'Otwarty pokład z panoramicznym widokiem na Bosfor', bg: 'Открита палуба с панорамна гледка към Босфора', ro: 'Punte în aer liber cu vederi panoramice asupra Bosforului' }
      },
      {
        label: { en: 'Kabataş', tr: 'Kabataş', de: 'Kabataş', es: 'Kabataş', ru: 'Кабаташ', ar: 'كاباتاش', fa: 'کاباتاش', fr: 'Kabataş', it: 'Kabataş', zh: '卡巴塔什', id: 'Kabataş', ms: 'Kabataş', pl: 'Kabataş', bg: 'Кабаташ', ro: 'Kabataş' },
        imgs: ['/assets/tours/daytime/dolmabahce.jpg', '/assets/tours/daytime/lufer-bridge.jpg', '/assets/tours/daytime/deck-guests.jpg'],
        desc: { en: 'Kabataş Pier — easy to reach from Taksim & Sultanahmet', tr: 'Kabataş İskelesi — Taksim ve Sultanahmet\'ten kolay ulaşım', de: 'Kabataş Pier — leicht erreichbar von Taksim & Sultanahmet', es: 'Muelle de Kabataş — fácil acceso desde Taksim y Sultanahmet', ru: 'Причал Кабаташ — легко добраться из Таксим и Султанахмет', ar: 'رصيف كاباتاش — سهل الوصول من تقسيم والسلطان أحمد', fa: 'اسکله کاباتاش — دسترسی آسان از تکسیم و سلطان احمد', fr: 'Embarcadère de Kabataş — facilement accessible depuis Taksim et Sultanahmet', it: 'Molo di Kabataş — facile da raggiungere da Taksim e Sultanahmet', zh: '卡巴塔什码头 — 从塔克西姆和苏丹艾哈迈德轻松到达', id: 'Dermaga Kabataş — mudah dijangkau dari Taksim & Sultanahmet', ms: 'Jeti Kabataş — mudah sampai dari Taksim & Sultanahmet', pl: 'Przystań Kabataş — łatwy dojazd z Taksim i Sultanahmet', bg: 'Кей Кабаташ — лесен достъп от Таксим и Султанахмет', ro: 'Debarcaderul Kabataş — ușor de ajuns din Taksim și Sultanahmet' }
      }
    ],
    images: {
      top: [
        '/assets/tours/daytime/dolmabahce.jpg',
        '/assets/tours/daytime/lufer-bridge.jpg'
      ],
      bottom: [
        '/assets/tours/daytime/deck-guests.jpg',
        '/assets/tours/daytime/boat-aerial.jpg',
        '/assets/tours/daytime/boat-panorama.jpg'
      ],
      side: [
        '/assets/tours/daytime/boat-panorama.jpg',
        '/assets/tours/daytime/lufer-bridge.jpg',
        '/assets/tours/daytime/dolmabahce.jpg'
      ]
    }
  },

  sunset: {
    icon: TOUR_ICONS.sunset,
    time: '17:30',
    duration: '3',
    durationUnit: { en: 'Hours', tr: 'Saat', de: 'Stunden', es: 'Horas', ru: 'Часа', ar: 'ساعات', fa: 'ساعت', fr: 'Heures', it: 'Ore', zh: '小时', id: 'Jam', ms: 'Jam', pl: 'Godzin', bg: 'Часа', ro: 'Ore' },
    pier: 'Kabataş Pier',
    todayLabel: { en: 'This Evening', tr: 'Bu Akşam', de: 'Heute Abend', es: 'Esta Tarde', ru: 'Сегодня вечером', ar: 'هذا المساء', fa: 'امشب', fr: 'Ce soir', it: 'Stasera', zh: '今晚', id: 'Malam Ini', ms: 'Malam Ini', pl: 'Dziś wieczorem', bg: 'Тази вечер', ro: 'În seara aceasta' },
    bgImage: '/assets/tours/sunset/amor-sunset-golden.jpg',
    prices: {
      classic:  { standard: 35, premium: 50, vip: 70 },
      premium:  { standard: 45, premium: 60, vip: 80 },
      luxury:   { standard: 55, premium: 70, vip: 90 }
    },
    boats: ['classic', 'premium', 'luxury'],
    heroImage: '/assets/tours/sunset/amor-sunset-golden.jpg',
    pills: [
      {
        label: { en: '17:30', tr: '17:30', de: '17:30', es: '17:30', ru: '17:30', ar: '17:30', fa: '17:30', fr: '17:30', it: '17:30', zh: '17:30', id: '17:30', ms: '17:30', pl: '17:30', bg: '17:30', ro: '17:30' },
        imgs: ['/assets/tours/sunset/amor-sunset-dramatic.jpg', '/assets/tours/sunset/amor-sunset-golden.jpg', '/assets/tours/sunset/amor-night-drone.jpg'],
        desc: { en: 'Golden hour departure at 17:30', tr: 'Gün batımı kalkışı 17:30', de: 'Abfahrt zur goldenen Stunde um 17:30', es: 'Salida a la hora dorada a las 17:30', ru: 'Отправление в золотой час в 17:30', ar: 'مغادرة الساعة الذهبية 17:30', fa: 'حرکت در ساعت طلایی 17:30', fr: 'Départ à l\'heure dorée à 17h30', it: 'Partenza nell\'ora d\'oro alle 17:30', zh: '17:30黄金时刻出发', id: 'Keberangkatan saat golden hour pukul 17:30', ms: 'Perlepasan pada waktu keemasan 17:30', pl: 'Odjazd o złotej godzinie 17:30', bg: 'Отплаване в златния час в 17:30', ro: 'Plecare la ora de aur 17:30' }
      },
      {
        label: { en: '3 Hours', tr: '3 Saat', de: '3 Std.', es: '3 Horas', ru: '3 часа', ar: '3 ساعات', fa: '3 ساعت', fr: '3 Heures', it: '3 Ore', zh: '3 小时', id: '3 Jam', ms: '3 Jam', pl: '3 Godziny', bg: '3 Часа', ro: '3 Ore' },
        imgs: ['/assets/tours/sunset/amor-pier-closeup.jpg', '/assets/tours/sunset/amor-sunset-golden.jpg', '/assets/tours/sunset/amor-front-lights.jpg'],
        desc: { en: '3-hour cruise into the sunset', tr: 'Gün batımına doğru 3 saatlik tur', de: '3-stündige Fahrt in den Sonnenuntergang', es: 'Crucero de 3 horas hacia el atardecer', ru: '3-часовой круиз на закат', ar: 'رحلة 3 ساعات نحو غروب الشمس', fa: 'کروز 3 ساعته به سمت غروب آفتاب', fr: 'Croisière de 3 heures vers le coucher de soleil', it: 'Crociera di 3 ore verso il tramonto', zh: '3小时日落巡游', id: 'Pelayaran 3 jam menuju matahari terbenam', ms: 'Pelayaran 3 jam ke arah matahari terbenam', pl: 'Trzygodzinny rejs ku zachodowi słońca', bg: '3-часов круиз към залеза', ro: 'Croazieră de 3 ore către apus' }
      },
      {
        label: { en: 'Dinner', tr: 'Yemek', de: 'Abendessen', es: 'Cena', ru: 'Ужин', ar: 'عشاء', fa: 'شام', fr: 'Dîner', it: 'Cena', zh: '晚餐', id: 'Makan Malam', ms: 'Makan Malam', pl: 'Kolacja', bg: 'Вечеря', ro: 'Cină' },
        imgs: ['/assets/tours/sunset/amor-main-course.jpg', '/assets/tours/sunset/amor-dining-wine.jpg', '/assets/tours/sunset/amor-table-night.jpg'],
        desc: { en: 'Full dinner service as the sun goes down', tr: 'Gün batarken tam yemek servisi', de: 'Vollständiges Abendessen bei Sonnenuntergang', es: 'Cena completa mientras se pone el sol', ru: 'Полный ужин на закате', ar: 'عشاء كامل مع غروب الشمس', fa: 'سرویس کامل شام هنگام غروب آفتاب', fr: 'Service de dîner complet au coucher du soleil', it: 'Servizio cena completo al tramonto', zh: '日落时分全套晚餐服务', id: 'Layanan makan malam lengkap saat matahari terbenam', ms: 'Perkhidmatan makan malam penuh ketika matahari terbenam', pl: 'Pełen serwis kolacji o zachodzie słońca', bg: 'Пълно вечерно меню при залез', ro: 'Serviciu complet de cină la apusul soarelui' }
      },
      {
        label: { en: 'Live Shows', tr: 'Canlı Şov', de: 'Live-Shows', es: 'Shows en Vivo', ru: 'Живое шоу', ar: 'عروض حية', fa: 'برنامه‌های زنده', fr: 'Spectacles en direct', it: 'Spettacoli dal vivo', zh: '现场表演', id: 'Pertunjukan Langsung', ms: 'Persembahan Langsung', pl: 'Pokazy na żywo', bg: 'Живи представления', ro: 'Spectacole live' },
        imgs: ['/assets/tours/sunset/amor-hall-blue.jpg', '/assets/tours/sunset/amor-hall-dining.jpg', '/assets/tours/sunset/amor-night-pier.jpg'],
        desc: { en: 'Live singer, DJ & Turkish night shows', tr: 'Canlı şarkıcı, DJ ve Türk gecesi şovları', de: 'Live-Sänger, DJ & türkische Nachtshows', es: 'Cantante en vivo, DJ y shows turcos', ru: 'Живой певец, DJ и турецкие шоу', ar: 'مغني حي، DJ وعروض تركية', fa: 'خواننده زنده، دی‌جی و برنامه‌های شب ترکی', fr: 'Chanteur en direct, DJ et spectacles de nuit turcs', it: 'Cantante dal vivo, DJ e spettacoli della notte turca', zh: '现场歌手、DJ及土耳其之夜表演', id: 'Penyanyi langsung, DJ & pertunjukan malam Turki', ms: 'Penyanyi langsung, DJ & persembahan malam Turki', pl: 'Śpiewak na żywo, DJ i tureckie pokazy nocne', bg: 'Жив певец, DJ и турски нощни шоута', ro: 'Cântăreț live, DJ și spectacole de noapte turcești' }
      }
    ],
    images: {
      top: [
        '/assets/tours/sunset/amor-sunset-dramatic.jpg',
        '/assets/tours/sunset/amor-dining-wine.jpg'
      ],
      bottom: [
        '/assets/tours/sunset/amor-kebab-plate.jpg',
        '/assets/tours/sunset/amor-fish-seabass.jpg',
        '/assets/tours/sunset/amor-hall-blue-wide.jpg'
      ],
      side: [
        '/assets/tours/sunset/amor-sunset-golden.jpg',
        '/assets/tours/sunset/amor-hall-night-view.jpg',
        '/assets/tours/sunset/amor-hall-stairs.jpg'
      ]
    }
  },

  dinner: {
    icon: TOUR_ICONS.dinner,
    time: '21:00',
    duration: '3',
    durationUnit: { en: 'Hours', tr: 'Saat', de: 'Stunden', es: 'Horas', ru: 'Часа', ar: 'ساعات', fa: 'ساعت', fr: 'Heures', it: 'Ore', zh: '小时', id: 'Jam', ms: 'Jam', pl: 'Godzin', bg: 'Часа', ro: 'Ore' },
    pier: 'Kabataş Pier',
    todayLabel: { en: 'Tonight', tr: 'Bu Gece', de: 'Heute Abend', es: 'Esta Noche', ru: 'Сегодня', ar: 'الليلة', fa: 'امشب', fr: 'Ce soir', it: 'Stanotte', zh: '今晚', id: 'Malam Ini', ms: 'Malam Ini', pl: 'Dziś wieczorem', bg: 'Тази нощ', ro: 'La noapte' },
    bgImage: '/assets/tours/dinner/boat-night-bridge.jpg',
    prices: {
      classic:  { standard: 24, vip: 55 },
      premium:  { standard: 24, vip: 55 },
      luxury:   { standard: 24, vip: 55 }
    },
    dinnerPrices: {
      standard: {
        nonAlcMP: { old: 40, new: 24 },
        alcMP: { old: 60, new: 35 },
        nonAlcTransfer: { old: 55, new: 34 },
        alcTransfer: { old: 75, new: 45 }
      },
      vip: {
        nonAlcMP: { old: 90, new: 55 },
        alcMP: { old: 100, new: 60 },
        nonAlcTransfer: { old: 110, new: 65 },
        alcTransfer: { old: 115, new: 70 }
      }
    },
    boats: ['classic'],
    heroImage: '/assets/tours/dinner/boat-night-bridge.jpg',
    pills: [
      {
        label: { en: '21:00', tr: '21:00', de: '21:00', es: '21:00', ru: '21:00', ar: '21:00', fa: '21:00', fr: '21:00', it: '21:00', zh: '21:00', id: '21:00', ms: '21:00', pl: '21:00', bg: '21:00', ro: '21:00' },
        imgs: ['/assets/tours/dinner/boat-night-bridge.jpg', '/assets/tours/dinner/boat-pier.jpg', '/assets/tours/dinner/hall-wide.jpg'],
        desc: { en: 'Night departure from Kabataş Pier at 21:00', tr: 'Kabataş İskelesi\'nden 21:00\'de gece kalkışı', de: 'Nachtabfahrt vom Kabataş Pier um 21:00', es: 'Salida nocturna del muelle de Kabataş a las 21:00', ru: 'Ночное отправление с причала Кабаташ в 21:00', ar: 'مغادرة ليلية من رصيف كاباتاش الساعة 21:00', fa: 'حرکت شبانه از اسکله کاباتاش ساعت 21:00', fr: 'Départ nocturne depuis l\'embarcadère de Kabataş à 21h00', it: 'Partenza notturna dal molo di Kabataş alle 21:00', zh: '21:00从卡巴塔什码头夜间出发', id: 'Keberangkatan malam dari Dermaga Kabataş pukul 21:00', ms: 'Perlepasan malam dari Jeti Kabataş pada 21:00', pl: 'Wieczorny odjazd z przystani Kabataş o 21:00', bg: 'Вечерно отплаване от кейа Кабаташ в 21:00', ro: 'Plecare nocturnă de la debarcaderul Kabataş la 21:00' }
      },
      {
        label: { en: '3 Hours', tr: '3 Saat', de: '3 Std.', es: '3 Horas', ru: '3 часа', ar: '3 ساعات', fa: '3 ساعت', fr: '3 Heures', it: '3 Ore', zh: '3 小时', id: '3 Jam', ms: '3 Jam', pl: '3 Godziny', bg: '3 Часа', ro: '3 Ore' },
        imgs: ['/assets/tours/dinner/boat-night-bridge.jpg', '/assets/tours/dinner/hall-wide.jpg', '/assets/tours/dinner/hall-wide.jpg'],
        desc: { en: '3-hour cruise past illuminated landmarks', tr: 'Işıklı noktalarda 3 saatlik tur', de: '3-stündige Fahrt an beleuchteten Sehenswürdigkeiten', es: 'Crucero de 3 horas por monumentos iluminados', ru: '3-часовой круиз мимо освещённых достопримечательностей', ar: 'رحلة 3 ساعات عبر المعالم المضيئة', fa: 'کروز 3 ساعته از کنار بناهای تاریخی روشن', fr: 'Croisière de 3 heures devant des monuments illuminés', it: 'Crociera di 3 ore davanti ai monumenti illuminati', zh: '3小时游览灯光璀璨的地标', id: 'Pelayaran 3 jam melewati landmark yang bercahaya', ms: 'Pelayaran 3 jam melepasi mercu tanda yang bercahaya', pl: 'Trzygodzinny rejs obok oświetlonych zabytków', bg: '3-часов круиз покрай осветени забележителности', ro: 'Croazieră de 3 ore pe lângă monumente iluminate' }
      },
      {
        label: { en: 'Dinner', tr: 'Yemek', de: 'Abendessen', es: 'Cena', ru: 'Ужин', ar: 'عشاء', fa: 'شام', fr: 'Dîner', it: 'Cena', zh: '晚餐', id: 'Makan Malam', ms: 'Makan Malam', pl: 'Kolacja', bg: 'Вечеря', ro: 'Cină' },
        imgs: ['/assets/tours/dinner/dining-romantic.jpg', '/assets/tours/dinner/steak-wine.jpg', '/assets/tours/dinner/table-candle.jpg', '/assets/tours/dinner/waiter-service.jpg'],
        desc: { en: '3-course dinner: meze, main course & dessert', tr: '3 çeşit yemek: meze, ana yemek ve tatlı', de: '3-Gänge-Menü: Meze, Hauptgericht & Dessert', es: 'Cena de 3 platos: meze, principal y postre', ru: '3-блюдное меню: мезе, горячее и десерт', ar: 'عشاء 3 أطباق: مقبلات، طبق رئيسي وحلوى', fa: 'شام 3 پرس: مزه، غذای اصلی و دسر', fr: 'Dîner 3 plats : meze, plat principal et dessert', it: 'Cena a 3 portate: meze, piatto principale e dolce', zh: '三道菜晚餐:前菜、主菜和甜点', id: 'Makan malam 3 hidangan: meze, hidangan utama & pencuci mulut', ms: 'Makan malam 3 hidangan: meze, hidangan utama & pencuci mulut', pl: 'Kolacja 3-daniowa: meze, danie główne i deser', bg: 'Вечеря от 3 ястия: мезета, основно ястие и десерт', ro: 'Cină în 3 feluri: meze, fel principal și desert' }
      },
      {
        label: { en: 'Live Shows', tr: 'Canlı Şov', de: 'Live-Shows', es: 'Shows en Vivo', ru: 'Живое шоу', ar: 'عروض حية', fa: 'برنامه‌های زنده', fr: 'Spectacles en direct', it: 'Spettacoli dal vivo', zh: '现场表演', id: 'Pertunjukan Langsung', ms: 'Persembahan Langsung', pl: 'Pokazy na żywo', bg: 'Живи представления', ro: 'Spectacole live' },
        imgs: ['/assets/tours/dinner/folk-dance.jpg', '/assets/tours/dinner/belly-dance.jpg', '/assets/tours/dinner/whirling-dervish.jpg', '/assets/tours/dinner/violin.jpg'],
        desc: { en: 'Live singer, Turkish night, belly dance & DJ music', tr: 'Canlı şarkıcı, Türk gecesi, oryantal dans ve DJ müziği', de: 'Live-Sänger, türkische Nacht, Bauchtanz & DJ-Musik', es: 'Cantante en vivo, noche turca, danza del vientre y DJ', ru: 'Живой певец, турецкая ночь, танец живота и DJ', ar: 'مغني حي، ليلة تركية، رقص شرقي وموسيقى DJ', fa: 'خواننده زنده، شب ترکی، رقص شرقی و موسیقی دی‌جی', fr: 'Chanteur en direct, nuit turque, danse du ventre et musique DJ', it: 'Cantante dal vivo, notte turca, danza del ventre e musica DJ', zh: '现场歌手、土耳其之夜、肚皮舞和DJ音乐', id: 'Penyanyi langsung, malam Turki, tari perut & musik DJ', ms: 'Penyanyi langsung, malam Turki, tarian perut & muzik DJ', pl: 'Śpiewak na żywo, turecka noc, taniec brzucha i muzyka DJ', bg: 'Жив певец, турска нощ, кючек и DJ музика', ro: 'Cântăreț live, noaptea turcească, dans din buric și muzică DJ' }
      },
      {
        label: { en: 'Night Views', tr: 'Gece Manzarası', de: 'Nachtblick', es: 'Vistas Nocturnas', ru: 'Ночные виды', ar: 'مناظر ليلية', fa: 'مناظر شبانه', fr: 'Vues nocturnes', it: 'Vedute notturne', zh: '夜景', id: 'Pemandangan Malam', ms: 'Pemandangan Malam', pl: 'Widoki nocne', bg: 'Нощни гледки', ro: 'Priveliști nocturne' },
        imgs: ['/assets/tours/dinner/boat-night-bridge.jpg', '/assets/tours/dinner/boat-pier.jpg', '/assets/tours/dinner/hall-wide.jpg'],
        desc: { en: 'Bosphorus Bridge & Istanbul skyline lit up at night', tr: 'Boğaz Köprüsü ve gece aydınlanan İstanbul silüeti', de: 'Bosporus-Brücke & beleuchtete Skyline Istanbuls', es: 'Puente del Bósforo y horizonte de Estambul iluminado', ru: 'Босфорский мост и ночная панорама Стамбула', ar: 'جسر البوسفور وأفق إسطنبول المضيء ليلاً', fa: 'پل بسفر و افق استانبول در شب', fr: 'Pont du Bosphore et skyline d\'Istanbul illuminés la nuit', it: 'Ponte sul Bosforo e skyline di Istanbul illuminati di notte', zh: '夜晚亮灯的博斯普鲁斯大桥与伊斯坦布尔天际线', id: 'Jembatan Bosphorus & cakrawala Istanbul yang bercahaya malam', ms: 'Jambatan Bosphorus & ufuk Istanbul yang bercahaya pada waktu malam', pl: 'Most nad Bosforem i oświetlona panorama Stambułu nocą', bg: 'Мостът над Босфора и силуетът на Истанбул, осветени през нощта', ro: 'Podul Bosfor și panorama Istanbulului iluminate noaptea' }
      }
    ],
    images: {
      top: [
        '/assets/tours/dinner/boat-pier.jpg',
        '/assets/tours/dinner/whirling-dervish.jpg'
      ],
      bottom: [
        '/assets/tours/dinner/folk-dance.jpg',
        '/assets/tours/dinner/steak-wine.jpg',
        '/assets/tours/dinner/cocktails.jpg'
      ],
      side: [
        '/assets/tours/dinner/boat-night-bridge.jpg',
        '/assets/tours/dinner/dining-romantic.jpg',
        '/assets/tours/dinner/belly-dance.jpg'
      ]
    }
  }
};
