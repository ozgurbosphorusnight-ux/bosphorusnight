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
    durationUnit: { en: 'Hours', tr: 'Saat', de: 'Stunden', es: 'Horas', ru: 'Часа', ar: 'ساعة' },
    pier: 'Kabataş Pier',
    todayLabel: { en: 'Today', tr: 'Bugün', de: 'Heute', es: 'Hoy', ru: 'Сегодня', ar: 'اليوم' },
    bgImage: 'assets/tours/daytime/boat-panorama.jpg',
    prices: {
      classic:  { standard: 20, premium: 30, vip: 45 },
      premium:  { standard: 25, premium: 35, vip: 50 },
      luxury:   { standard: 30, premium: 40, vip: 55 }
    },
    boats: ['classic', 'premium'],
    heroImage: 'assets/tours/daytime/boat-panorama.jpg',
    pills: [
      {
        label: { en: '12:00', tr: '12:00', de: '12:00', es: '12:00', ru: '12:00', ar: '12:00' },
        imgs: ['assets/tours/daytime/lufer-bridge.jpg', 'assets/tours/daytime/boat-panorama.jpg', 'assets/tours/daytime/dolmabahce.jpg'],
        desc: { en: 'Departs from Kabataş Pier at 12:00', tr: 'Kabataş İskelesi\'nden 12:00\'de kalkar', de: 'Abfahrt vom Kabataş Pier um 12:00', es: 'Sale del muelle de Kabataş a las 12:00', ru: 'Отправление с причала Кабаташ в 12:00', ar: 'المغادرة من رصيف كاباتاش الساعة 12:00' }
      },
      {
        label: { en: '1.5 Hours', tr: '1.5 Saat', de: '1,5 Std.', es: '1.5 Horas', ru: '1,5 часа', ar: '1.5 ساعة' },
        imgs: ['assets/tours/daytime/boat-aerial.jpg', 'assets/tours/daytime/lufer-bridge.jpg', 'assets/tours/daytime/boat-panorama.jpg'],
        desc: { en: 'Scenic route past 10+ iconic landmarks', tr: '10+ ikonik noktadan geçen manzara rotası', de: 'Panoramaroute mit 10+ Sehenswürdigkeiten', es: 'Ruta panorámica por 10+ monumentos', ru: 'Живописный маршрут мимо 10+ достопримечательностей', ar: 'مسار بانورامي عبر 10+ معالم' }
      },
      {
        label: { en: 'Sightseeing', tr: 'Gezi', de: 'Besichtigung', es: 'Turismo', ru: 'Экскурсия', ar: 'مشاهدة' },
        imgs: ['assets/tours/daytime/deck-guests.jpg', 'assets/tours/daytime/boat-aerial.jpg', 'assets/tours/daytime/dolmabahce.jpg'],
        desc: { en: 'Open-air deck with panoramic Bosphorus views', tr: 'Panoramik Boğaz manzaralı açık güverte', de: 'Freiluftdeck mit Panoramablick auf den Bosporus', es: 'Cubierta al aire libre con vistas panorámicas', ru: 'Открытая палуба с панорамным видом', ar: 'سطح مفتوح مع إطلالة بانورامية' }
      },
      {
        label: { en: 'Kabataş', tr: 'Kabataş', de: 'Kabataş', es: 'Kabataş', ru: 'Кабаташ', ar: 'كاباتاش' },
        imgs: ['assets/tours/daytime/dolmabahce.jpg', 'assets/tours/daytime/lufer-bridge.jpg', 'assets/tours/daytime/deck-guests.jpg'],
        desc: { en: 'Kabataş Pier — easy to reach from Taksim & Sultanahmet', tr: 'Kabataş İskelesi — Taksim ve Sultanahmet\'ten kolay ulaşım', de: 'Kabataş Pier — leicht erreichbar von Taksim & Sultanahmet', es: 'Muelle de Kabataş — fácil acceso desde Taksim y Sultanahmet', ru: 'Причал Кабаташ — легко добраться из Таксим и Султанахмет', ar: 'رصيف كاباتاش — سهل الوصول من تقسيم والسلطان أحمد' }
      }
    ],
    images: {
      top: [
        'assets/tours/daytime/dolmabahce.jpg',
        'assets/tours/daytime/lufer-bridge.jpg'
      ],
      bottom: [
        'assets/tours/daytime/deck-guests.jpg',
        'assets/tours/daytime/boat-aerial.jpg',
        'assets/tours/daytime/boat-panorama.jpg'
      ],
      side: [
        'assets/tours/daytime/boat-panorama.jpg',
        'assets/tours/daytime/lufer-bridge.jpg',
        'assets/tours/daytime/dolmabahce.jpg'
      ]
    }
  },

  sunset: {
    icon: TOUR_ICONS.sunset,
    time: '17:30',
    duration: '3',
    durationUnit: { en: 'Hours', tr: 'Saat', de: 'Stunden', es: 'Horas', ru: 'Часа', ar: 'ساعات' },
    pier: 'Kabataş Pier',
    todayLabel: { en: 'This Evening', tr: 'Bu Akşam', de: 'Heute Abend', es: 'Esta Tarde', ru: 'Сегодня вечером', ar: 'هذا المساء' },
    bgImage: 'assets/tours/sunset/amor-sunset-golden.jpg',
    prices: {
      classic:  { standard: 35, premium: 50, vip: 70 },
      premium:  { standard: 45, premium: 60, vip: 80 },
      luxury:   { standard: 55, premium: 70, vip: 90 }
    },
    boats: ['classic', 'premium', 'luxury'],
    heroImage: 'assets/tours/sunset/amor-sunset-golden.jpg',
    pills: [
      {
        label: { en: '17:30', tr: '17:30', de: '17:30', es: '17:30', ru: '17:30', ar: '17:30' },
        imgs: ['assets/tours/sunset/amor-sunset-dramatic.jpg', 'assets/tours/sunset/amor-sunset-golden.jpg', 'assets/tours/sunset/amor-night-drone.jpg'],
        desc: { en: 'Golden hour departure at 17:30', tr: 'Gün batımı kalkışı 17:30', de: 'Abfahrt zur goldenen Stunde um 17:30', es: 'Salida a la hora dorada a las 17:30', ru: 'Отправление в золотой час в 17:30', ar: 'مغادرة الساعة الذهبية 17:30' }
      },
      {
        label: { en: '3 Hours', tr: '3 Saat', de: '3 Std.', es: '3 Horas', ru: '3 часа', ar: '3 ساعات' },
        imgs: ['assets/tours/sunset/amor-pier-closeup.jpg', 'assets/tours/sunset/amor-sunset-golden.jpg', 'assets/tours/sunset/amor-front-lights.jpg'],
        desc: { en: '3-hour cruise into the sunset', tr: 'Gün batımına doğru 3 saatlik tur', de: '3-stündige Fahrt in den Sonnenuntergang', es: 'Crucero de 3 horas hacia el atardecer', ru: '3-часовой круиз на закат', ar: 'رحلة 3 ساعات نحو غروب الشمس' }
      },
      {
        label: { en: 'Dinner', tr: 'Yemek', de: 'Abendessen', es: 'Cena', ru: 'Ужин', ar: 'عشاء' },
        imgs: ['assets/tours/sunset/amor-main-course.jpg', 'assets/tours/sunset/amor-dining-wine.jpg', 'assets/tours/sunset/amor-table-night.jpg'],
        desc: { en: 'Full dinner service as the sun goes down', tr: 'Gün batarken tam yemek servisi', de: 'Vollständiges Abendessen bei Sonnenuntergang', es: 'Cena completa mientras se pone el sol', ru: 'Полный ужин на закате', ar: 'عشاء كامل مع غروب الشمس' }
      },
      {
        label: { en: 'Live Shows', tr: 'Canlı Şov', de: 'Live-Shows', es: 'Shows en Vivo', ru: 'Живое шоу', ar: 'عروض حية' },
        imgs: ['assets/tours/sunset/amor-hall-blue.jpg', 'assets/tours/sunset/amor-hall-dining.jpg', 'assets/tours/sunset/amor-night-pier.jpg'],
        desc: { en: 'Live singer, DJ & Turkish night shows', tr: 'Canlı şarkıcı, DJ ve Türk gecesi şovları', de: 'Live-Sänger, DJ & türkische Nachtshows', es: 'Cantante en vivo, DJ y shows turcos', ru: 'Живой певец, DJ и турецкие шоу', ar: 'مغني حي، DJ وعروض تركية' }
      }
    ],
    images: {
      top: [
        'assets/tours/sunset/amor-sunset-dramatic.jpg',
        'assets/tours/sunset/amor-dining-wine.jpg'
      ],
      bottom: [
        'assets/tours/sunset/amor-kebab-plate.jpg',
        'assets/tours/sunset/amor-fish-seabass.jpg',
        'assets/tours/sunset/amor-hall-blue-wide.jpg'
      ],
      side: [
        'assets/tours/sunset/amor-sunset-golden.jpg',
        'assets/tours/sunset/amor-hall-night-view.jpg',
        'assets/tours/sunset/amor-hall-stairs.jpg'
      ]
    }
  },

  dinner: {
    icon: TOUR_ICONS.dinner,
    time: '21:00',
    duration: '3',
    durationUnit: { en: 'Hours', tr: 'Saat', de: 'Stunden', es: 'Horas', ru: 'Часа', ar: 'ساعات' },
    pier: 'Kabataş Pier',
    todayLabel: { en: 'Tonight', tr: 'Bu Gece', de: 'Heute Abend', es: 'Esta Noche', ru: 'Сегодня', ar: 'الليلة' },
    bgImage: 'assets/tours/dinner/boat-night-bridge.jpg',
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
    heroImage: 'assets/tours/dinner/boat-night-bridge.jpg',
    pills: [
      {
        label: { en: '21:00', tr: '21:00', de: '21:00', es: '21:00', ru: '21:00', ar: '21:00' },
        imgs: ['assets/tours/dinner/boat-night-bridge.jpg', 'assets/tours/dinner/boat-pier.jpg', 'assets/tours/dinner/hall-wide.jpg'],
        desc: { en: 'Night departure from Kabataş Pier at 21:00', tr: 'Kabataş İskelesi\'nden 21:00\'de gece kalkışı', de: 'Nachtabfahrt vom Kabataş Pier um 21:00', es: 'Salida nocturna del muelle de Kabataş a las 21:00', ru: 'Ночное отправление с причала Кабаташ в 21:00', ar: 'مغادرة ليلية من رصيف كاباتاش الساعة 21:00' }
      },
      {
        label: { en: '3 Hours', tr: '3 Saat', de: '3 Std.', es: '3 Horas', ru: '3 часа', ar: '3 ساعات' },
        imgs: ['assets/tours/dinner/boat-night-bridge.jpg', 'assets/tours/dinner/hall-wide.jpg', 'assets/tours/dinner/hall-wide.jpg'],
        desc: { en: '3-hour cruise past illuminated landmarks', tr: 'Işıklı noktalarda 3 saatlik tur', de: '3-stündige Fahrt an beleuchteten Sehenswürdigkeiten', es: 'Crucero de 3 horas por monumentos iluminados', ru: '3-часовой круиз мимо освещённых достопримечательностей', ar: 'رحلة 3 ساعات عبر المعالم المضيئة' }
      },
      {
        label: { en: 'Dinner', tr: 'Yemek', de: 'Abendessen', es: 'Cena', ru: 'Ужин', ar: 'عشاء' },
        imgs: ['assets/tours/dinner/dining-romantic.jpg', 'assets/tours/dinner/steak-wine.jpg', 'assets/tours/dinner/table-candle.jpg', 'assets/tours/dinner/waiter-service.jpg'],
        desc: { en: '3-course dinner: meze, main course & dessert', tr: '3 çeşit yemek: meze, ana yemek ve tatlı', de: '3-Gänge-Menü: Meze, Hauptgericht & Dessert', es: 'Cena de 3 platos: meze, principal y postre', ru: '3-блюдное меню: мезе, горячее и десерт', ar: 'عشاء 3 أطباق: مقبلات، طبق رئيسي وحلوى' }
      },
      {
        label: { en: 'Live Shows', tr: 'Canlı Şov', de: 'Live-Shows', es: 'Shows en Vivo', ru: 'Живое шоу', ar: 'عروض حية' },
        imgs: ['assets/tours/dinner/folk-dance.jpg', 'assets/tours/dinner/belly-dance.jpg', 'assets/tours/dinner/whirling-dervish.jpg', 'assets/tours/dinner/violin.jpg'],
        desc: { en: 'Live singer, Turkish night, belly dance & DJ music', tr: 'Canlı şarkıcı, Türk gecesi, oryantal dans ve DJ müziği', de: 'Live-Sänger, türkische Nacht, Bauchtanz & DJ-Musik', es: 'Cantante en vivo, noche turca, danza del vientre y DJ', ru: 'Живой певец, турецкая ночь, танец живота и DJ', ar: 'مغني حي، ليلة تركية، رقص شرقي وموسيقى DJ' }
      },
      {
        label: { en: 'Night Views', tr: 'Gece Manzarası', de: 'Nachtblick', es: 'Vistas Nocturnas', ru: 'Ночные виды', ar: 'مناظر ليلية' },
        imgs: ['assets/tours/dinner/boat-night-bridge.jpg', 'assets/tours/dinner/boat-pier.jpg', 'assets/tours/dinner/hall-wide.jpg'],
        desc: { en: 'Bosphorus Bridge & Istanbul skyline lit up at night', tr: 'Boğaz Köprüsü ve gece aydınlanan İstanbul silüeti', de: 'Bosporus-Brücke & beleuchtete Skyline Istanbuls', es: 'Puente del Bósforo y horizonte de Estambul iluminado', ru: 'Босфорский мост и ночная панорама Стамбула', ar: 'جسر البوسفور وأفق إسطنبول المضيء ليلاً' }
      }
    ],
    images: {
      top: [
        'assets/tours/dinner/boat-pier.jpg',
        'assets/tours/dinner/whirling-dervish.jpg'
      ],
      bottom: [
        'assets/tours/dinner/folk-dance.jpg',
        'assets/tours/dinner/steak-wine.jpg',
        'assets/tours/dinner/cocktails.jpg'
      ],
      side: [
        'assets/tours/dinner/boat-night-bridge.jpg',
        'assets/tours/dinner/dining-romantic.jpg',
        'assets/tours/dinner/belly-dance.jpg'
      ]
    }
  }
};
