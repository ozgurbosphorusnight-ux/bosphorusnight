#!/usr/bin/env node
/**
 * One-time migration: update meta.title + meta.description across 15
 * translation files (15 langs × 17 slugs = 255 entries) to the new SEO
 * format that includes:
 *   - Price ("from €X")
 *   - Free cancellation
 *   - Pay on boat
 *   - 11,317 traveler reviews (where description has room)
 *   - Departure 21:00 from Kabataş (where applicable)
 * Removed:
 *   - "★4.8" star rating glyph
 *   - Aggressive "100% Halal" / "Muslim-friendly" hype
 *   - Vague claims like "best", "top-rated"
 *
 * Run: node scripts/update-meta-translations.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Per-language translations for all 17 slugs.
// Keep keywords for SEO (e.g. TR "Boğaz Yemekli Tur" remains primary phrase).
// Format mirrors the EN counterparts in content/pages/*.js.
const TRANSLATIONS = {
  tr: {
    'bosphorus-dinner-cruise': {
      title: 'Boğaz Yemekli Tur €{p.dinnerStd}\'den — İstanbul Gece Turu + Şov',
      description: '3 saatlik Boğaz yemekli turu: çok çeşitli Türk menüsü ve canlı halk oyunları şovu. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    'bosphorus-with-kids': {
      title: 'Çocuklu Boğaz Turu — Aile Dostu Yemekli Tur, €{p.dinnerStd}/yetişkin\'den',
      description: 'Aile dostu Boğaz yemekli turu. 0-3 yaş ücretsiz, 4-8 yarı fiyat. Güvenli iç salon, çocuk dostu menü. €{p.dinnerStd}/yetişkin\'den. Ücretsiz iptal, teknede ödeme.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Romantik Boğaz Turu €{p.dinnerStd}\'den — 2 Kişilik Mum Işığında Akşam',
      description: 'Romantik Boğaz turu: mum ışığında masa, güller, aydınlatılmış köprüler altında çok çeşitli akşam yemeği. €{p.dinnerStd}/kişi\'den. Ücretsiz iptal, teknede ödeme. Yıldönümü ve balayı için ideal.'
    },
    'halal-bosphorus-cruise': {
      title: 'Helal Boğaz Yemekli Tur €{p.dinnerStd}\'den — Canlı Şov + Gece Turu',
      description: '3 saatlik Boğaz yemekli turu: canlı halk oyunları şovu, aydınlatılmış köprüler, panoramik Boğaz gece manzaraları. Helal menü talep üzerine. Ücretsiz iptal, teknede ödeme.'
    },
    'bosphorus-trip': {
      title: 'Boğaz Gezisi €{p.dinnerStd}\'den — İstanbul Yemekli Turu + Şov',
      description: '3 saatlik Boğaz gezisi: Türk yemeği, canlı halk oyunları, aydınlatılmış gece manzaraları. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    'istanbul-boat-tour': {
      title: 'İstanbul Tekne Turu €{p.dinnerStd}\'den — Boğaz Turu + Yemek + Şov',
      description: '3 saatlik İstanbul tekne turu: Boğaz seyri, çok çeşitli Türk yemeği, canlı halk oyunları, aydınlatılmış gece manzaraları. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    'istanbul-night-tour': {
      title: 'İstanbul Gece Turu €{p.dinnerStd}\'den — Boğaz Yemekli Tur + Şov',
      description: '3 saatlik Boğaz turu, akşam yemeği ve canlı şov. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu. Otel transfer opsiyonel.'
    },
    'private-bosphorus-cruise': {
      title: 'Özel Boğaz Turu — İstanbul\'da Tekne Kiralama (25+ kişi)',
      description: 'Özel Boğaz turu kiralama: gruplar, düğünler, kurumsal etkinlikler için. Özel tekne, özel menü, esnek süre. Ücretsiz iptal. Özel teklif için WhatsApp\'tan yazın.'
    },
    'bosphorus-for-couples': {
      title: 'Çiftler İçin Boğaz Turu €{p.dinnerStd}\'den — İstanbul Randevu Gecesi',
      description: 'Çiftler için Boğaz yemekli turu. Özel masa, aydınlatılmış köprüler, romantik kurulum opsiyonu. €{p.dinnerStd}/kişi\'den. Ücretsiz iptal, teknede ödeme. 11.317 yorum.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Boğaz Gün Batımı Turu €35\'den — Altın Saat + Akşam Yemeği',
      description: 'Boğaz gün batımı turu, Kabataş\'tan 17:30 kalkış. Altın saat manzarası saraylar, akşam yemeği aydınlatılmış geceye uzanır. 3 saat. Ücretsiz iptal, teknede ödeme.'
    },
    'bosphorus-night-tour': {
      title: 'Boğaz Gece Turu €{p.dinnerStd}\'den — Yemekli Tur + Canlı Şov',
      description: '3 saatlik Boğaz gece turu: akşam yemeği ve canlı şov. 21:00\'de Kabataş\'tan kalkış, aydınlatılmış köprüler. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    'dinner-cruise-istanbul': {
      title: 'İstanbul Yemekli Tur €{p.dinnerStd}\'den — Boğaz Gece Turu',
      description: '3 saatlik İstanbul Boğaz yemekli turu. Çok çeşitli Türk menüsü, canlı halk oyunları, aydınlatılmış köprüler. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    'bosphorus-vip': {
      title: 'Boğaz VIP Turu €{p.dinnerVip}\'den — Premium Yemek, Sahne Önü Masa',
      description: 'Boğaz VIP yemekli turu: premium mezeler, dana eti seçenekleri, sahne önü masa, öncelikli servis. Eski €{p.dinnerVipOriginal}, şimdi €{p.dinnerVip}. Ücretsiz iptal, teknede ödeme.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Boğaz Turu Biletleri €{p.dinnerStd}\'den — Teknede Ödeme, Ön Ödeme Yok',
      description: 'Direkt Boğaz turu biletleri. Standart €{p.dinnerStd}, VIP €{p.dinnerVip}. Ön ödeme yok, teknede ödeme. Tur öncesi 2 saate kadar ücretsiz iptal. 11.317 gezgin yorumu.'
    },
    'last-minute-bosphorus': {
      title: 'Son Dakika Boğaz Turu €{p.dinnerStd}\'den — Bugün Rezervasyon, Teknede Ödeme',
      description: 'Aynı gün Boğaz turu rezervasyonu. WhatsApp ile dakikalar içinde onay. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    'istanbul-cruise-price': {
      title: 'İstanbul Tur Fiyatı €{p.dinnerStd}\'den — Şeffaf Oranlar, Gizli Ücret Yok',
      description: 'İstanbul Boğaz turu fiyatları: Standart €{p.dinnerStd}, VIP €{p.dinnerVip}. 0-3 yaş ücretsiz, 4-8 yarı fiyat. Eklentiler şeffaf. Ücretsiz iptal, teknede ödeme.'
    },
    'bosphorus-sightseeing': {
      title: 'Boğaz Sightseeing €{p.dinnerStd}\'den — İstanbul Dönüm Noktaları Sudan',
      description: 'Boğaz sightseeing turu: Dolmabahçe, Ortaköy, Boğaz Köprüsü, Rumeli, Beylerbeyi, Kız Kulesi. 3 saatlik akşam turu, akşam yemekli. Ücretsiz iptal, teknede ödeme.'
    }
  },

  de: {
    'bosphorus-dinner-cruise': {
      title: 'Bosporus Dinner-Kreuzfahrt ab €{p.dinnerStd} — Istanbul Nachttour + Show',
      description: '3-stündige Bosporus Dinner-Kreuzfahrt mit mehrgängigem türkischem Menü und Live-Folkloreshow. Abfahrt 21:00 ab Kabataş. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen.'
    },
    'bosphorus-with-kids': {
      title: 'Bosporus mit Kindern — Familien-Dinner-Kreuzfahrt ab €{p.dinnerStd}/Erw.',
      description: 'Familienfreundliche Bosporus Dinner-Kreuzfahrt. Kinder 0-3 frei, 4-8 halber Preis. Sicherer Innenbereich, kinderfreundliches Menü. Kostenlose Stornierung, Zahlung an Bord.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Romantische Bosporus-Kreuzfahrt ab €{p.dinnerStd} — Candle-Light-Dinner für 2',
      description: 'Romantische Bosporus-Kreuzfahrt: Tisch im Kerzenschein, Rosen, mehrgängiges Dinner unter beleuchteten Brücken. Ab €{p.dinnerStd}/Person. Kostenlose Stornierung, Zahlung an Bord.'
    },
    'halal-bosphorus-cruise': {
      title: 'Halal Bosporus Dinner-Kreuzfahrt ab €{p.dinnerStd} — Live-Show + Nachttour',
      description: '3-stündige Bosporus Dinner-Kreuzfahrt: Live-Folkloreshow, beleuchtete Brücken, Panoramablick auf den Bosporus bei Nacht. Halal-Menü auf Anfrage. Kostenlose Stornierung, Zahlung an Bord.'
    },
    'bosphorus-trip': {
      title: 'Bosporus-Trip ab €{p.dinnerStd} — Istanbul Dinner-Kreuzfahrt + Show',
      description: '3-stündiger Bosporus-Trip: türkisches Dinner, Live-Folklore, beleuchtete Nachtansichten. Abfahrt 21:00 ab Kabataş. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen.'
    },
    'istanbul-boat-tour': {
      title: 'Istanbul Bootstour ab €{p.dinnerStd} — Bosporus-Kreuzfahrt + Dinner + Show',
      description: '3-stündige Istanbul Bootstour: Bosporus-Fahrt, türkisches Dinner, Live-Folklore, beleuchtete Nachtansichten. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen.'
    },
    'istanbul-night-tour': {
      title: 'Istanbul Nachttour ab €{p.dinnerStd} — Bosporus Dinner-Kreuzfahrt + Show',
      description: '3-stündige Bosporus-Kreuzfahrt mit Dinner und Live-Show. Abfahrt 21:00 ab Kabataş. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen. Hoteltransfer optional.'
    },
    'private-bosphorus-cruise': {
      title: 'Private Bosporus-Kreuzfahrt — Boot Charter in Istanbul (25+ Gäste)',
      description: 'Private Bosporus-Kreuzfahrt-Charter für Gruppen, Hochzeiten, Firmenevents. Exklusives Boot, individuelles Menü, flexible Dauer. Kostenlose Stornierung. WhatsApp für ein Angebot.'
    },
    'bosphorus-for-couples': {
      title: 'Bosporus für Paare ab €{p.dinnerStd} — Date Night Istanbul',
      description: 'Bosporus Dinner-Kreuzfahrt für Paare. Privater Tisch, beleuchtete Brücken, romantische Tischdekoration optional. Ab €{p.dinnerStd}/Person. Kostenlose Stornierung, Zahlung an Bord.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Bosporus Sunset-Kreuzfahrt ab €35 — Goldene Stunde + Dinner',
      description: 'Bosporus Sunset-Kreuzfahrt ab Kabataş, Abfahrt 17:30. Paläste im goldenen Licht, Dinner geht in beleuchtete Nacht über. 3 Stunden. Kostenlose Stornierung, Zahlung an Bord.'
    },
    'bosphorus-night-tour': {
      title: 'Bosporus Nachttour ab €{p.dinnerStd} — Dinner-Kreuzfahrt + Live-Show',
      description: '3-stündige Bosporus-Nachttour mit Dinner und Live-Show. Abfahrt 21:00 ab Kabataş, beleuchtete Brücken. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen.'
    },
    'dinner-cruise-istanbul': {
      title: 'Dinner-Kreuzfahrt Istanbul ab €{p.dinnerStd} — Bosporus Nachttour',
      description: '3-stündige Istanbul Dinner-Kreuzfahrt auf dem Bosporus. Mehrgängiges türkisches Menü, Live-Folklore, beleuchtete Brücken. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen.'
    },
    'bosphorus-vip': {
      title: 'Bosporus VIP-Kreuzfahrt ab €{p.dinnerVip} — Premium Dinner, Bühnenplatz',
      description: 'Bosporus VIP Dinner-Kreuzfahrt: Premium-Mezze, Steak-Optionen, Tisch direkt vor der Bühne, bevorzugter Service. Vorher €{p.dinnerVipOriginal}, jetzt €{p.dinnerVip}. Kostenlose Stornierung.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Bosporus-Tickets ab €{p.dinnerStd} — Zahlung an Bord, keine Vorkasse',
      description: 'Direkte Bosporus-Kreuzfahrt-Tickets. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Keine Vorkasse, Zahlung an Bord. Kostenlose Stornierung bis 2 Std. vorher. 11.317 Bewertungen.'
    },
    'last-minute-bosphorus': {
      title: 'Last-Minute Bosporus ab €{p.dinnerStd} — Heute buchen, an Bord zahlen',
      description: 'Same-Day Bosporus-Kreuzfahrt-Buchung. WhatsApp-Bestätigung in Minuten. Abfahrt 21:00 ab Kabataş. Kostenlose Stornierung, Zahlung an Bord. 11.317 Bewertungen.'
    },
    'istanbul-cruise-price': {
      title: 'Istanbul Kreuzfahrt-Preise ab €{p.dinnerStd} — Transparent, keine versteckten Kosten',
      description: 'Istanbul Bosporus-Kreuzfahrt-Preise: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Kinder 0-3 frei, 4-8 halber Preis. Add-ons transparent. Kostenlose Stornierung, Zahlung an Bord.'
    },
    'bosphorus-sightseeing': {
      title: 'Bosporus Sightseeing ab €{p.dinnerStd} — Istanbul-Sehenswürdigkeiten vom Boot',
      description: 'Bosporus Sightseeing-Kreuzfahrt: Dolmabahçe, Ortaköy, Bosporus-Brücke, Rumeli, Beylerbeyi, Mädchenturm. 3-stündige Abendtour mit Dinner. Kostenlose Stornierung, Zahlung an Bord.'
    }
  },

  es: {
    'bosphorus-dinner-cruise': {
      title: 'Crucero con Cena Bósforo desde €{p.dinnerStd} — Tour Nocturno Estambul + Show',
      description: 'Crucero con cena de 3 horas por el Bósforo: menú turco multiplato y espectáculo folklórico en vivo. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    'bosphorus-with-kids': {
      title: 'Crucero Bósforo con Niños — Tour Familiar desde €{p.dinnerStd}/adulto',
      description: 'Crucero con cena por el Bósforo apto para familias. Niños 0-3 gratis, 4-8 mitad de precio. Salón interior seguro, menú infantil. Cancelación gratuita, pago a bordo.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Crucero Romántico Bósforo desde €{p.dinnerStd} — Cena a la Luz de Velas',
      description: 'Crucero romántico por el Bósforo: mesa a la luz de velas, rosas, cena multiplato bajo puentes iluminados. Desde €{p.dinnerStd}/persona. Cancelación gratuita, pago a bordo.'
    },
    'halal-bosphorus-cruise': {
      title: 'Crucero Halal Bósforo desde €{p.dinnerStd} — Show en Vivo + Tour Nocturno',
      description: 'Crucero con cena de 3 horas por el Bósforo: espectáculo folklórico en vivo, puentes iluminados, vistas panorámicas nocturnas. Menú halal disponible. Cancelación gratuita, pago a bordo.'
    },
    'bosphorus-trip': {
      title: 'Viaje Bósforo desde €{p.dinnerStd} — Crucero Cena Estambul + Show',
      description: 'Viaje de 3 horas por el Bósforo: cena turca, folklore en vivo, vistas nocturnas iluminadas. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    'istanbul-boat-tour': {
      title: 'Tour en Barco Estambul desde €{p.dinnerStd} — Crucero + Cena + Show',
      description: 'Tour en barco de 3 horas: crucero por el Bósforo, cena turca completa, folklore en vivo, vistas nocturnas iluminadas. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    'istanbul-night-tour': {
      title: 'Tour Nocturno Estambul desde €{p.dinnerStd} — Crucero Cena Bósforo + Show',
      description: 'Crucero de 3 horas con cena y show en vivo. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas. Traslado al hotel opcional.'
    },
    'private-bosphorus-cruise': {
      title: 'Crucero Privado Bósforo — Alquiler de Barco en Estambul (25+ invitados)',
      description: 'Crucero privado por el Bósforo para grupos, bodas, eventos corporativos. Barco exclusivo, menú a medida, duración flexible. Cancelación gratuita. WhatsApp para presupuesto.'
    },
    'bosphorus-for-couples': {
      title: 'Crucero Bósforo para Parejas desde €{p.dinnerStd} — Cita Nocturna Estambul',
      description: 'Crucero con cena para parejas en el Bósforo. Mesa privada, puentes iluminados, decoración romántica opcional. Desde €{p.dinnerStd}/persona. Cancelación gratuita, pago a bordo.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Crucero Atardecer Bósforo desde €35 — Hora Dorada + Cena',
      description: 'Crucero al atardecer por el Bósforo desde Kabataş, salida 17:30. Palacios en luz dorada, cena hasta la noche iluminada. 3 horas. Cancelación gratuita, pago a bordo.'
    },
    'bosphorus-night-tour': {
      title: 'Tour Nocturno Bósforo desde €{p.dinnerStd} — Cena + Show en Vivo',
      description: 'Tour nocturno de 3 horas por el Bósforo con cena y show en vivo. Salida 21:00 desde Kabataş, puentes iluminados. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    'dinner-cruise-istanbul': {
      title: 'Crucero con Cena Estambul desde €{p.dinnerStd} — Tour Nocturno Bósforo',
      description: 'Crucero con cena de 3 horas por el Bósforo en Estambul. Menú turco multiplato, folklore en vivo, puentes iluminados. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    'bosphorus-vip': {
      title: 'Crucero VIP Bósforo desde €{p.dinnerVip} — Cena Premium, Asientos VIP',
      description: 'Crucero VIP con cena en el Bósforo: mezes premium, opciones de carne, mesa frente al escenario, servicio prioritario. Antes €{p.dinnerVipOriginal}, ahora €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Tickets Crucero Bósforo desde €{p.dinnerStd} — Pago a Bordo, Sin Anticipo',
      description: 'Tickets directos del crucero por el Bósforo. Estándar €{p.dinnerStd}, VIP €{p.dinnerVip}. Sin anticipo, pago a bordo. Cancelación gratuita hasta 2hrs antes. 11.317 reseñas.'
    },
    'last-minute-bosphorus': {
      title: 'Bósforo Última Hora desde €{p.dinnerStd} — Reserva Hoy, Paga a Bordo',
      description: 'Reserva del crucero Bósforo el mismo día. Confirmación por WhatsApp en minutos. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    'istanbul-cruise-price': {
      title: 'Precio Crucero Estambul desde €{p.dinnerStd} — Tarifas Transparentes, Sin Sorpresas',
      description: 'Precios crucero Bósforo Estambul: Estándar €{p.dinnerStd}, VIP €{p.dinnerVip}. Niños 0-3 gratis, 4-8 mitad. Add-ons transparentes. Cancelación gratuita, pago a bordo.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bósforo desde €{p.dinnerStd} — Monumentos Estambul Desde el Agua',
      description: 'Crucero sightseeing por el Bósforo: Dolmabahçe, Ortaköy, Puente del Bósforo, Rumeli, Beylerbeyi, Torre de la Doncella. Tour de 3hrs con cena. Cancelación gratuita.'
    }
  },

  ru: {
    'bosphorus-dinner-cruise': {
      title: 'Ужин-круиз Босфор от €{p.dinnerStd} — Ночной тур Стамбул + Шоу',
      description: 'Ужин-круиз 3 часа по Босфору: турецкое многоблюдное меню и фольклорное шоу. Отправление 21:00 от Кабаташ. Бесплатная отмена, оплата на борту. 11 317 отзывов.'
    },
    'bosphorus-with-kids': {
      title: 'Босфор с детьми — Семейный круиз от €{p.dinnerStd}/взр.',
      description: 'Семейный ужин-круиз по Босфору. Дети 0-3 бесплатно, 4-8 за полцены. Безопасный салон, детское меню. От €{p.dinnerStd}/взрослый. Бесплатная отмена, оплата на борту.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Романтический круиз Босфор от €{p.dinnerStd} — Ужин при свечах',
      description: 'Романтический круиз по Босфору: стол при свечах, розы, многоблюдный ужин под подсвеченными мостами. От €{p.dinnerStd}/чел. Бесплатная отмена, оплата на борту.'
    },
    'halal-bosphorus-cruise': {
      title: 'Халяль ужин-круиз Босфор от €{p.dinnerStd} — Шоу + Ночной тур',
      description: 'Ужин-круиз 3 часа по Босфору: фольклорное шоу, подсвеченные мосты, панорама ночного Босфора. Халяль меню по запросу. Бесплатная отмена, оплата на борту.'
    },
    'bosphorus-trip': {
      title: 'Поездка по Босфору от €{p.dinnerStd} — Ужин-круиз Стамбул + Шоу',
      description: 'Поездка 3 часа по Босфору: турецкий ужин, фольклорное шоу, подсвеченные ночные виды. Отправление 21:00 от Кабаташ. Бесплатная отмена, оплата на борту. 11 317 отзывов.'
    },
    'istanbul-boat-tour': {
      title: 'Тур на катере Стамбул от €{p.dinnerStd} — Босфор + Ужин + Шоу',
      description: 'Тур на катере 3 часа: круиз по Босфору, полный турецкий ужин, фольклорное шоу, подсвеченные ночные виды. Бесплатная отмена, оплата на борту. 11 317 отзывов.'
    },
    'istanbul-night-tour': {
      title: 'Ночной тур Стамбул от €{p.dinnerStd} — Босфор Ужин-круиз + Шоу',
      description: 'Круиз 3 часа по Босфору с ужином и шоу. Отправление 21:00 от Кабаташ. Бесплатная отмена, оплата на борту. 11 317 отзывов. Трансфер из отеля по желанию.'
    },
    'private-bosphorus-cruise': {
      title: 'Частный круиз Босфор — Аренда катера в Стамбуле (25+ гостей)',
      description: 'Частный круиз по Босфору для групп, свадеб, корпоративных мероприятий. Эксклюзивный катер, индивидуальное меню, гибкая длительность. Бесплатная отмена. WhatsApp для расчёта.'
    },
    'bosphorus-for-couples': {
      title: 'Босфор для пар от €{p.dinnerStd} — Свидание в Стамбуле',
      description: 'Ужин-круиз для пар по Босфору. Отдельный стол, подсвеченные мосты, романтическое оформление по желанию. От €{p.dinnerStd}/чел. Бесплатная отмена, оплата на борту.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Закатный круиз Босфор от €35 — Золотой час + Ужин',
      description: 'Закатный круиз по Босфору от Кабаташ, отправление 17:30. Дворцы в золотом свете, ужин переходит в подсвеченную ночь. 3 часа. Бесплатная отмена, оплата на борту.'
    },
    'bosphorus-night-tour': {
      title: 'Ночной тур по Босфору от €{p.dinnerStd} — Ужин-круиз + Шоу',
      description: 'Ночной тур 3 часа по Босфору: ужин и живое шоу. Отправление 21:00 от Кабаташ, подсвеченные мосты. Бесплатная отмена, оплата на борту. 11 317 отзывов.'
    },
    'dinner-cruise-istanbul': {
      title: 'Ужин-круиз Стамбул от €{p.dinnerStd} — Ночной тур по Босфору',
      description: 'Ужин-круиз 3 часа по Босфору в Стамбуле. Турецкое многоблюдное меню, фольклорное шоу, подсвеченные мосты. Бесплатная отмена, оплата на борту. 11 317 отзывов.'
    },
    'bosphorus-vip': {
      title: 'VIP круиз Босфор от €{p.dinnerVip} — Премиум ужин, VIP-стол',
      description: 'VIP ужин-круиз по Босфору: премиум мезе, варианты со стейком, стол перед сценой, приоритетное обслуживание. Было €{p.dinnerVipOriginal}, сейчас €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Билеты на круиз Босфор от €{p.dinnerStd} — Оплата на борту, без предоплаты',
      description: 'Прямые билеты на круиз по Босфору. Стандарт €{p.dinnerStd}, VIP €{p.dinnerVip}. Без предоплаты, оплата на борту. Бесплатная отмена за 2ч. 11 317 отзывов.'
    },
    'last-minute-bosphorus': {
      title: 'Босфор в последнюю минуту от €{p.dinnerStd} — Сегодня, оплата на борту',
      description: 'Бронирование круиза по Босфору в день поездки. Подтверждение по WhatsApp за минуты. Отправление 21:00 от Кабаташ. Бесплатная отмена, оплата на борту.'
    },
    'istanbul-cruise-price': {
      title: 'Цены круиз Стамбул от €{p.dinnerStd} — Прозрачные тарифы',
      description: 'Цены круизов по Босфору в Стамбуле: Стандарт €{p.dinnerStd}, VIP €{p.dinnerVip}. Дети 0-3 бесплатно, 4-8 за полцены. Доплаты прозрачны. Бесплатная отмена.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Босфор от €{p.dinnerStd} — Достопримечательности Стамбула',
      description: 'Sightseeing круиз по Босфору: Долмабахче, Ортакёй, Мост Босфор, Румели, Бейлербейи, Девичья башня. Вечерний тур 3 часа с ужином. Бесплатная отмена, оплата на борту.'
    }
  },

  ar: {
    'bosphorus-dinner-cruise': {
      title: 'رحلة عشاء البوسفور من €{p.dinnerStd} — جولة إسطنبول الليلية + عرض',
      description: 'رحلة عشاء 3 ساعات على البوسفور: قائمة تركية متعددة الأطباق وعرض فولكلوري حي. الانطلاق 21:00 من كاباتاش. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'bosphorus-with-kids': {
      title: 'البوسفور مع الأطفال — رحلة عائلية من €{p.dinnerStd}/بالغ',
      description: 'رحلة عشاء عائلية على البوسفور. الأطفال 0-3 مجاناً، 4-8 نصف السعر. صالة آمنة بالداخل، قائمة للأطفال. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'romantic-bosphorus-cruise': {
      title: 'رحلة بوسفور رومانسية من €{p.dinnerStd} — عشاء على ضوء الشموع',
      description: 'رحلة رومانسية على البوسفور: طاولة على ضوء الشموع، ورود، عشاء متعدد الأطباق تحت الجسور المضاءة. من €{p.dinnerStd}/شخص. إلغاء مجاني، الدفع على المركب.'
    },
    'halal-bosphorus-cruise': {
      title: 'رحلة عشاء حلال على البوسفور من €{p.dinnerStd} — عرض حي + جولة ليلية',
      description: 'رحلة عشاء 3 ساعات على البوسفور: عرض فولكلوري حي، جسور مضاءة، إطلالة بانورامية على البوسفور ليلاً. قائمة حلال متاحة. إلغاء مجاني، الدفع على المركب.'
    },
    'bosphorus-trip': {
      title: 'رحلة البوسفور من €{p.dinnerStd} — رحلة عشاء إسطنبول + عرض',
      description: 'رحلة 3 ساعات على البوسفور: عشاء تركي، عرض فولكلوري حي، إطلالات ليلية مضاءة. الانطلاق 21:00 من كاباتاش. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'istanbul-boat-tour': {
      title: 'جولة قارب إسطنبول من €{p.dinnerStd} — البوسفور + عشاء + عرض',
      description: 'جولة قارب 3 ساعات: رحلة على البوسفور، عشاء تركي كامل، عرض فولكلوري، إطلالات ليلية مضاءة. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'istanbul-night-tour': {
      title: 'جولة إسطنبول الليلية من €{p.dinnerStd} — رحلة عشاء البوسفور + عرض',
      description: 'رحلة 3 ساعات على البوسفور مع عشاء وعرض حي. الانطلاق 21:00 من كاباتاش. إلغاء مجاني، الدفع على المركب. 11،317 تقييم. نقل من الفندق متاح.'
    },
    'private-bosphorus-cruise': {
      title: 'رحلة خاصة على البوسفور — تأجير قارب في إسطنبول (25+ ضيف)',
      description: 'رحلة خاصة على البوسفور للمجموعات، حفلات الزفاف، الفعاليات. قارب حصري، قائمة مخصصة، مدة مرنة. إلغاء مجاني. واتساب للحصول على عرض.'
    },
    'bosphorus-for-couples': {
      title: 'البوسفور للأزواج من €{p.dinnerStd} — موعد ليلي في إسطنبول',
      description: 'رحلة عشاء للأزواج على البوسفور. طاولة خاصة، جسور مضاءة، تجهيز رومانسي اختياري. من €{p.dinnerStd}/شخص. إلغاء مجاني، الدفع على المركب.'
    },
    'bosphorus-sunset-cruise': {
      title: 'رحلة غروب البوسفور من €35 — الساعة الذهبية + عشاء',
      description: 'رحلة غروب البوسفور من كاباتاش، الانطلاق 17:30. القصور بضوء ذهبي، العشاء يستمر إلى الليل المضاء. 3 ساعات. إلغاء مجاني، الدفع على المركب.'
    },
    'bosphorus-night-tour': {
      title: 'جولة البوسفور الليلية من €{p.dinnerStd} — رحلة عشاء + عرض حي',
      description: 'جولة ليلية 3 ساعات على البوسفور مع عشاء وعرض حي. الانطلاق 21:00 من كاباتاش، جسور مضاءة. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'dinner-cruise-istanbul': {
      title: 'رحلة عشاء إسطنبول من €{p.dinnerStd} — جولة البوسفور الليلية',
      description: 'رحلة عشاء 3 ساعات على البوسفور في إسطنبول. قائمة تركية متعددة، عرض فولكلوري حي، جسور مضاءة. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'bosphorus-vip': {
      title: 'رحلة VIP على البوسفور من €{p.dinnerVip} — عشاء فاخر، طاولة VIP',
      description: 'رحلة عشاء VIP على البوسفور: مزة فاخرة، خيارات شريحة لحم، طاولة أمام المسرح، خدمة ذات أولوية. كان €{p.dinnerVipOriginal}، الآن €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'تذاكر رحلة البوسفور من €{p.dinnerStd} — الدفع على المركب، بدون مقدم',
      description: 'تذاكر مباشرة لرحلة البوسفور. عادي €{p.dinnerStd}، VIP €{p.dinnerVip}. بدون مقدم، الدفع على المركب. إلغاء مجاني حتى ساعتين قبل. 11،317 تقييم.'
    },
    'last-minute-bosphorus': {
      title: 'البوسفور في اللحظة الأخيرة من €{p.dinnerStd} — احجز اليوم، ادفع على المركب',
      description: 'حجز رحلة البوسفور في نفس اليوم. تأكيد عبر واتساب في دقائق. الانطلاق 21:00 من كاباتاش. إلغاء مجاني، الدفع على المركب. 11،317 تقييم.'
    },
    'istanbul-cruise-price': {
      title: 'سعر رحلة إسطنبول من €{p.dinnerStd} — أسعار شفافة، بدون رسوم خفية',
      description: 'أسعار رحلات البوسفور في إسطنبول: عادي €{p.dinnerStd}، VIP €{p.dinnerVip}. الأطفال 0-3 مجاناً، 4-8 نصف السعر. إضافات شفافة. إلغاء مجاني، الدفع على المركب.'
    },
    'bosphorus-sightseeing': {
      title: 'جولة معالم البوسفور من €{p.dinnerStd} — معالم إسطنبول من الماء',
      description: 'جولة معالم البوسفور: دولمابهتشة، أورتاكوي، جسر البوسفور، روملي، بيلربيي، برج الفتاة. جولة مسائية 3 ساعات مع عشاء. إلغاء مجاني، الدفع على المركب.'
    }
  },

  fr: {
    'bosphorus-dinner-cruise': {
      title: 'Croisière Dîner Bosphore dès €{p.dinnerStd} — Tour Nocturne Istanbul + Spectacle',
      description: 'Croisière dîner 3h sur le Bosphore : menu turc multi-plats et spectacle folklorique en direct. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'bosphorus-with-kids': {
      title: 'Bosphore avec Enfants — Croisière Familiale dès €{p.dinnerStd}/adulte',
      description: 'Croisière dîner Bosphore familiale. Enfants 0-3 gratuits, 4-8 demi-tarif. Salle intérieure sécurisée, menu enfants. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Croisière Romantique Bosphore dès €{p.dinnerStd} — Dîner aux Chandelles',
      description: 'Croisière romantique sur le Bosphore : table aux chandelles, roses, dîner multi-plats sous les ponts illuminés. Dès €{p.dinnerStd}/personne. Annulation gratuite, paiement à bord.'
    },
    'halal-bosphorus-cruise': {
      title: 'Croisière Dîner Halal Bosphore dès €{p.dinnerStd} — Spectacle + Tour Nocturne',
      description: 'Croisière dîner 3h sur le Bosphore : spectacle folklorique en direct, ponts illuminés, vues panoramiques nocturnes. Menu halal disponible. Annulation gratuite, paiement à bord.'
    },
    'bosphorus-trip': {
      title: 'Excursion Bosphore dès €{p.dinnerStd} — Croisière Dîner Istanbul + Spectacle',
      description: 'Excursion 3h sur le Bosphore : dîner turc, folklore en direct, vues nocturnes illuminées. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'istanbul-boat-tour': {
      title: 'Tour en Bateau Istanbul dès €{p.dinnerStd} — Croisière + Dîner + Spectacle',
      description: 'Tour en bateau 3h : croisière Bosphore, dîner turc complet, folklore en direct, vues nocturnes illuminées. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'istanbul-night-tour': {
      title: 'Tour Nocturne Istanbul dès €{p.dinnerStd} — Croisière Dîner Bosphore + Spectacle',
      description: 'Croisière 3h sur le Bosphore avec dîner et spectacle en direct. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord. 11 317 avis. Transfert hôtel optionnel.'
    },
    'private-bosphorus-cruise': {
      title: 'Croisière Privée Bosphore — Location de Bateau à Istanbul (25+ invités)',
      description: 'Croisière privée Bosphore pour groupes, mariages, événements d\'entreprise. Bateau exclusif, menu sur mesure, durée flexible. Annulation gratuite. WhatsApp pour devis.'
    },
    'bosphorus-for-couples': {
      title: 'Bosphore pour Couples dès €{p.dinnerStd} — Soirée Romantique Istanbul',
      description: 'Croisière dîner Bosphore pour couples. Table privée, ponts illuminés, décor romantique optionnel. Dès €{p.dinnerStd}/personne. Annulation gratuite, paiement à bord.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Croisière Coucher de Soleil Bosphore dès €35 — Heure Dorée + Dîner',
      description: 'Croisière coucher de soleil Bosphore depuis Kabataş, départ 17h30. Palais à la lumière dorée, dîner jusqu\'à la nuit illuminée. 3 heures. Annulation gratuite, paiement à bord.'
    },
    'bosphorus-night-tour': {
      title: 'Tour Nocturne Bosphore dès €{p.dinnerStd} — Croisière Dîner + Spectacle',
      description: 'Tour nocturne 3h sur le Bosphore avec dîner et spectacle en direct. Départ 21h00 de Kabataş, ponts illuminés. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'dinner-cruise-istanbul': {
      title: 'Croisière Dîner Istanbul dès €{p.dinnerStd} — Tour Nocturne Bosphore',
      description: 'Croisière dîner 3h à Istanbul sur le Bosphore. Menu turc multi-plats, folklore en direct, ponts illuminés. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'bosphorus-vip': {
      title: 'Croisière VIP Bosphore dès €{p.dinnerVip} — Dîner Premium, Place VIP',
      description: 'Croisière dîner VIP Bosphore : mezzés premium, options viande, table devant la scène, service prioritaire. Avant €{p.dinnerVipOriginal}, maintenant €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Billets Croisière Bosphore dès €{p.dinnerStd} — Paiement à Bord, Sans Acompte',
      description: 'Billets directs croisière Bosphore. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Sans acompte, paiement à bord. Annulation gratuite jusqu\'à 2h avant. 11 317 avis.'
    },
    'last-minute-bosphorus': {
      title: 'Bosphore Dernière Minute dès €{p.dinnerStd} — Réservez Ce Soir',
      description: 'Réservation croisière Bosphore le jour même. Confirmation WhatsApp en minutes. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    'istanbul-cruise-price': {
      title: 'Prix Croisière Istanbul dès €{p.dinnerStd} — Tarifs Transparents',
      description: 'Prix croisière Bosphore Istanbul : Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Enfants 0-3 gratuits, 4-8 demi-tarif. Suppléments transparents. Annulation gratuite.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bosphore dès €{p.dinnerStd} — Monuments Istanbul depuis l\'Eau',
      description: 'Croisière sightseeing Bosphore : Dolmabahçe, Ortaköy, Pont Bosphore, Rumeli, Beylerbeyi, Tour de Léandre. Tour soirée 3h avec dîner. Annulation gratuite.'
    }
  },

  it: {
    'bosphorus-dinner-cruise': {
      title: 'Crociera Cena Bosforo da €{p.dinnerStd} — Tour Notturno Istanbul + Show',
      description: 'Crociera cena 3 ore sul Bosforo: menu turco multi-portate e spettacolo folkloristico dal vivo. Partenza 21:00 da Kabataş. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'bosphorus-with-kids': {
      title: 'Bosforo con Bambini — Crociera Famiglia da €{p.dinnerStd}/adulto',
      description: 'Crociera cena Bosforo per famiglie. Bambini 0-3 gratis, 4-8 metà prezzo. Sala interna sicura, menu bambini. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Crociera Romantica Bosforo da €{p.dinnerStd} — Cena a Lume di Candela',
      description: 'Crociera romantica sul Bosforo: tavolo a lume di candela, rose, cena multi-portate sotto i ponti illuminati. Da €{p.dinnerStd}/persona. Cancellazione gratuita, pagamento a bordo.'
    },
    'halal-bosphorus-cruise': {
      title: 'Crociera Cena Halal Bosforo da €{p.dinnerStd} — Show Live + Tour Notturno',
      description: 'Crociera cena 3 ore sul Bosforo: spettacolo folkloristico dal vivo, ponti illuminati, panorama notturno. Menu halal disponibile su richiesta. Cancellazione gratuita, pagamento a bordo.'
    },
    'bosphorus-trip': {
      title: 'Gita Bosforo da €{p.dinnerStd} — Crociera Cena Istanbul + Show',
      description: 'Gita 3 ore sul Bosforo: cena turca, folklore dal vivo, viste notturne illuminate. Partenza 21:00 da Kabataş. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'istanbul-boat-tour': {
      title: 'Tour in Barca Istanbul da €{p.dinnerStd} — Crociera + Cena + Show',
      description: 'Tour in barca 3 ore: crociera Bosforo, cena turca completa, folklore dal vivo, viste notturne illuminate. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'istanbul-night-tour': {
      title: 'Tour Notturno Istanbul da €{p.dinnerStd} — Crociera Cena Bosforo + Show',
      description: 'Crociera 3 ore sul Bosforo con cena e spettacolo dal vivo. Partenza 21:00 da Kabataş. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni. Transfer hotel opzionale.'
    },
    'private-bosphorus-cruise': {
      title: 'Crociera Privata Bosforo — Noleggio Barca a Istanbul (25+ ospiti)',
      description: 'Crociera privata Bosforo per gruppi, matrimoni, eventi aziendali. Barca esclusiva, menu personalizzato, durata flessibile. Cancellazione gratuita. WhatsApp per preventivo.'
    },
    'bosphorus-for-couples': {
      title: 'Bosforo per Coppie da €{p.dinnerStd} — Serata Romantica Istanbul',
      description: 'Crociera cena per coppie sul Bosforo. Tavolo privato, ponti illuminati, allestimento romantico opzionale. Da €{p.dinnerStd}/persona. Cancellazione gratuita, pagamento a bordo.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Crociera Tramonto Bosforo da €35 — Ora Dorata + Cena',
      description: 'Crociera tramonto Bosforo da Kabataş, partenza 17:30. Palazzi nella luce dorata, cena fino alla notte illuminata. 3 ore. Cancellazione gratuita, pagamento a bordo.'
    },
    'bosphorus-night-tour': {
      title: 'Tour Notturno Bosforo da €{p.dinnerStd} — Crociera Cena + Show Live',
      description: 'Tour notturno 3 ore sul Bosforo con cena e spettacolo dal vivo. Partenza 21:00 da Kabataş, ponti illuminati. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'dinner-cruise-istanbul': {
      title: 'Crociera Cena Istanbul da €{p.dinnerStd} — Tour Notturno Bosforo',
      description: 'Crociera cena 3 ore a Istanbul sul Bosforo. Menu turco multi-portate, folklore dal vivo, ponti illuminati. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'bosphorus-vip': {
      title: 'Crociera VIP Bosforo da €{p.dinnerVip} — Cena Premium, Posto VIP',
      description: 'Crociera cena VIP Bosforo: meze premium, opzioni di carne, tavolo davanti al palco, servizio prioritario. Prima €{p.dinnerVipOriginal}, ora €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Biglietti Crociera Bosforo da €{p.dinnerStd} — Pagamento a Bordo, Niente Anticipo',
      description: 'Biglietti diretti crociera Bosforo. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Niente anticipo, pagamento a bordo. Cancellazione gratuita fino a 2h prima. 11.317 recensioni.'
    },
    'last-minute-bosphorus': {
      title: 'Bosforo Last Minute da €{p.dinnerStd} — Prenota Stasera, Paga a Bordo',
      description: 'Prenotazione crociera Bosforo stesso giorno. Conferma WhatsApp in minuti. Partenza 21:00 da Kabataş. Cancellazione gratuita, pagamento a bordo. 11.317 recensioni.'
    },
    'istanbul-cruise-price': {
      title: 'Prezzo Crociera Istanbul da €{p.dinnerStd} — Tariffe Trasparenti',
      description: 'Prezzi crociera Bosforo Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Bambini 0-3 gratis, 4-8 metà prezzo. Add-on trasparenti. Cancellazione gratuita.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bosforo da €{p.dinnerStd} — Monumenti Istanbul dall\'Acqua',
      description: 'Crociera sightseeing Bosforo: Dolmabahçe, Ortaköy, Ponte Bosforo, Rumeli, Beylerbeyi, Torre della Vergine. Tour serale 3h con cena. Cancellazione gratuita.'
    }
  },

  zh: {
    'bosphorus-dinner-cruise': {
      title: '博斯普鲁斯晚餐游船 €{p.dinnerStd}起 — 伊斯坦布尔夜游 + 表演',
      description: '3小时博斯普鲁斯晚餐游船：多道土耳其菜单和现场民俗表演。21:00从卡巴塔什出发。免费取消，船上付款。11,317条游客评价。'
    },
    'bosphorus-with-kids': {
      title: '亲子博斯普鲁斯游船 — 家庭晚餐游船 €{p.dinnerStd}/成人起',
      description: '家庭友好的博斯普鲁斯晚餐游船。0-3岁免费，4-8岁半价。安全室内座位，儿童菜单。免费取消，船上付款。11,317条评价。'
    },
    'romantic-bosphorus-cruise': {
      title: '博斯普鲁斯浪漫游船 €{p.dinnerStd}起 — 烛光晚餐双人游',
      description: '博斯普鲁斯浪漫游船：烛光餐桌、玫瑰、灯火通明大桥下的多道晚餐。每人€{p.dinnerStd}起。免费取消，船上付款。'
    },
    'halal-bosphorus-cruise': {
      title: '清真博斯普鲁斯晚餐游船 €{p.dinnerStd}起 — 现场表演 + 夜游',
      description: '3小时博斯普鲁斯晚餐游船：现场民俗表演、灯火通明大桥、博斯普鲁斯夜景全景。提供清真菜单。免费取消，船上付款。'
    },
    'bosphorus-trip': {
      title: '博斯普鲁斯之旅 €{p.dinnerStd}起 — 伊斯坦布尔晚餐游船 + 表演',
      description: '3小时博斯普鲁斯之旅：土耳其晚餐、现场民俗表演、灯火通明夜景。21:00从卡巴塔什出发。免费取消，船上付款。11,317条评价。'
    },
    'istanbul-boat-tour': {
      title: '伊斯坦布尔游船游 €{p.dinnerStd}起 — 博斯普鲁斯 + 晚餐 + 表演',
      description: '3小时伊斯坦布尔游船游：博斯普鲁斯巡游、完整土耳其晚餐、现场民俗表演、灯火通明夜景。免费取消，船上付款。11,317条评价。'
    },
    'istanbul-night-tour': {
      title: '伊斯坦布尔夜游 €{p.dinnerStd}起 — 博斯普鲁斯晚餐游船 + 表演',
      description: '3小时博斯普鲁斯游船配晚餐和现场表演。21:00从卡巴塔什出发。免费取消，船上付款。11,317条游客评价。可选酒店接送。'
    },
    'private-bosphorus-cruise': {
      title: '博斯普鲁斯包船 — 伊斯坦布尔船只租赁（25+客人）',
      description: '博斯普鲁斯包船游船：团体、婚礼、企业活动。专属船只、定制菜单、灵活时长。免费取消。WhatsApp获取报价。'
    },
    'bosphorus-for-couples': {
      title: '情侣博斯普鲁斯游船 €{p.dinnerStd}起 — 伊斯坦布尔约会之夜',
      description: '情侣博斯普鲁斯晚餐游船。私人桌、灯火通明大桥、可选浪漫布置。每人€{p.dinnerStd}起。免费取消，船上付款。'
    },
    'bosphorus-sunset-cruise': {
      title: '博斯普鲁斯日落游船 €35起 — 黄金时刻 + 晚餐',
      description: '博斯普鲁斯日落游船从卡巴塔什出发，17:30启航。金色光芒中的宫殿，晚餐持续到灯火通明的夜晚。3小时。免费取消，船上付款。'
    },
    'bosphorus-night-tour': {
      title: '博斯普鲁斯夜游 €{p.dinnerStd}起 — 晚餐游船 + 现场表演',
      description: '3小时博斯普鲁斯夜游配晚餐和现场表演。21:00从卡巴塔什出发，灯火通明大桥。免费取消，船上付款。11,317条评价。'
    },
    'dinner-cruise-istanbul': {
      title: '伊斯坦布尔晚餐游船 €{p.dinnerStd}起 — 博斯普鲁斯夜游',
      description: '3小时伊斯坦布尔博斯普鲁斯晚餐游船。多道土耳其菜单、现场民俗表演、灯火通明大桥。免费取消，船上付款。11,317条评价。'
    },
    'bosphorus-vip': {
      title: '博斯普鲁斯VIP游船 €{p.dinnerVip}起 — 高级晚餐、舞台前座位',
      description: '博斯普鲁斯VIP晚餐游船：高级开胃菜、牛排选项、舞台前餐桌、优先服务。原€{p.dinnerVipOriginal}，现€{p.dinnerVip}。'
    },
    'bosphorus-cruise-tickets': {
      title: '博斯普鲁斯游船票 €{p.dinnerStd}起 — 船上付款，无需预付',
      description: '直接预订博斯普鲁斯游船票。标准€{p.dinnerStd}，VIP €{p.dinnerVip}。无需预付，船上付款。出发前2小时免费取消。11,317条评价。'
    },
    'last-minute-bosphorus': {
      title: '博斯普鲁斯当日预订 €{p.dinnerStd}起 — 今晚预订，船上付款',
      description: '当日博斯普鲁斯游船预订。WhatsApp几分钟内确认。21:00从卡巴塔什出发。免费取消，船上付款。11,317条评价。'
    },
    'istanbul-cruise-price': {
      title: '伊斯坦布尔游船价格 €{p.dinnerStd}起 — 透明价格，无隐藏费用',
      description: '伊斯坦布尔博斯普鲁斯游船价格：标准€{p.dinnerStd}，VIP €{p.dinnerVip}。0-3岁免费，4-8岁半价。附加项透明。免费取消，船上付款。'
    },
    'bosphorus-sightseeing': {
      title: '博斯普鲁斯观光 €{p.dinnerStd}起 — 水上看伊斯坦布尔地标',
      description: '博斯普鲁斯观光游船：多尔玛巴赫切宫、奥尔塔科伊、博斯普鲁斯大桥、鲁梅利、贝勒贝伊、少女塔。3小时夜游配晚餐。免费取消。'
    }
  },

  fa: {
    'bosphorus-dinner-cruise': {
      title: 'کروز شام بسفر از €{p.dinnerStd} — تور شب استانبول + شو',
      description: 'کروز شام ۳ ساعته در بسفر: منوی متنوع ترکی و شوی فولکلور زنده. حرکت ۲۱:۰۰ از کاباتاش. لغو رایگان، پرداخت در کشتی. ۱۱،۳۱۷ نظر مسافر.'
    },
    'bosphorus-with-kids': {
      title: 'بسفر با کودکان — کروز خانوادگی از €{p.dinnerStd}/بزرگسال',
      description: 'کروز شام خانوادگی بسفر. کودکان ۰-۳ رایگان، ۴-۸ نیم بها. سالن داخلی امن، منوی کودک. لغو رایگان، پرداخت در کشتی.'
    },
    'romantic-bosphorus-cruise': {
      title: 'کروز رمانتیک بسفر از €{p.dinnerStd} — شام شمعی برای دو نفر',
      description: 'کروز رمانتیک بسفر: میز شمعی، گل رز، شام چندپرس زیر پل‌های نورانی. از €{p.dinnerStd}/نفر. لغو رایگان، پرداخت در کشتی.'
    },
    'halal-bosphorus-cruise': {
      title: 'کروز شام حلال بسفر از €{p.dinnerStd} — شو زنده + تور شب',
      description: 'کروز شام ۳ ساعته در بسفر: شوی فولکلور زنده، پل‌های نورانی، چشم‌انداز پانوراما شب. منوی حلال در دسترس. لغو رایگان، پرداخت در کشتی.'
    },
    'bosphorus-trip': {
      title: 'سفر بسفر از €{p.dinnerStd} — کروز شام استانبول + شو',
      description: 'سفر ۳ ساعته در بسفر: شام ترکی، فولکلور زنده، چشم‌اندازهای شب نورانی. حرکت ۲۱:۰۰ از کاباتاش. لغو رایگان، پرداخت در کشتی.'
    },
    'istanbul-boat-tour': {
      title: 'تور قایق استانبول از €{p.dinnerStd} — بسفر + شام + شو',
      description: 'تور قایق ۳ ساعته: کروز بسفر، شام کامل ترکی، فولکلور زنده، چشم‌اندازهای شب نورانی. لغو رایگان، پرداخت در کشتی. ۱۱،۳۱۷ نظر.'
    },
    'istanbul-night-tour': {
      title: 'تور شب استانبول از €{p.dinnerStd} — کروز شام بسفر + شو',
      description: 'کروز ۳ ساعته بسفر با شام و شوی زنده. حرکت ۲۱:۰۰ از کاباتاش. لغو رایگان، پرداخت در کشتی. ۱۱،۳۱۷ نظر. ترانسفر هتل اختیاری.'
    },
    'private-bosphorus-cruise': {
      title: 'کروز خصوصی بسفر — اجاره قایق در استانبول (۲۵+ مهمان)',
      description: 'کروز خصوصی بسفر برای گروه‌ها، عروسی‌ها، رویدادهای شرکتی. قایق اختصاصی، منوی سفارشی، مدت زمان منعطف. لغو رایگان. واتساپ برای پیشنهاد.'
    },
    'bosphorus-for-couples': {
      title: 'بسفر برای زوج‌ها از €{p.dinnerStd} — شب رمانتیک استانبول',
      description: 'کروز شام بسفر برای زوج‌ها. میز خصوصی، پل‌های نورانی، چیدمان رمانتیک اختیاری. از €{p.dinnerStd}/نفر. لغو رایگان، پرداخت در کشتی.'
    },
    'bosphorus-sunset-cruise': {
      title: 'کروز غروب بسفر از €۳۵ — ساعت طلایی + شام',
      description: 'کروز غروب بسفر از کاباتاش، حرکت ۱۷:۳۰. کاخ‌ها در نور طلایی، شام تا شب نورانی ادامه می‌یابد. ۳ ساعت. لغو رایگان، پرداخت در کشتی.'
    },
    'bosphorus-night-tour': {
      title: 'تور شب بسفر از €{p.dinnerStd} — کروز شام + شوی زنده',
      description: 'تور شب ۳ ساعته بسفر با شام و شوی زنده. حرکت ۲۱:۰۰ از کاباتاش، پل‌های نورانی. لغو رایگان، پرداخت در کشتی. ۱۱،۳۱۷ نظر.'
    },
    'dinner-cruise-istanbul': {
      title: 'کروز شام استانبول از €{p.dinnerStd} — تور شب بسفر',
      description: 'کروز شام ۳ ساعته در استانبول روی بسفر. منوی متنوع ترکی، فولکلور زنده، پل‌های نورانی. لغو رایگان، پرداخت در کشتی. ۱۱،۳۱۷ نظر.'
    },
    'bosphorus-vip': {
      title: 'کروز VIP بسفر از €{p.dinnerVip} — شام پریمیوم، میز جلوی صحنه',
      description: 'کروز شام VIP بسفر: مزه پریمیوم، گزینه‌های گوشت، میز جلوی صحنه، خدمات اولویت‌دار. قبلاً €{p.dinnerVipOriginal}، اکنون €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'بلیت کروز بسفر از €{p.dinnerStd} — پرداخت در کشتی، بدون پیش‌پرداخت',
      description: 'بلیت مستقیم کروز بسفر. استاندارد €{p.dinnerStd}، VIP €{p.dinnerVip}. بدون پیش‌پرداخت، پرداخت در کشتی. لغو رایگان تا ۲ ساعت قبل.'
    },
    'last-minute-bosphorus': {
      title: 'بسفر دقیقه آخر از €{p.dinnerStd} — امشب رزرو کنید، در کشتی پرداخت',
      description: 'رزرو کروز بسفر همان روز. تأیید واتساپ در دقایق. حرکت ۲۱:۰۰ از کاباتاش. لغو رایگان، پرداخت در کشتی. ۱۱،۳۱۷ نظر.'
    },
    'istanbul-cruise-price': {
      title: 'قیمت کروز استانبول از €{p.dinnerStd} — قیمت‌های شفاف',
      description: 'قیمت‌های کروز بسفر استانبول: استاندارد €{p.dinnerStd}، VIP €{p.dinnerVip}. کودکان ۰-۳ رایگان، ۴-۸ نیم بها. افزودنی‌ها شفاف. لغو رایگان.'
    },
    'bosphorus-sightseeing': {
      title: 'تماشای بسفر از €{p.dinnerStd} — جاذبه‌های استانبول از روی آب',
      description: 'کروز تماشایی بسفر: دلمه‌باغچه، اورتاکوی، پل بسفر، روملی، بیلربیی، برج دختر. تور شب ۳ ساعته با شام. لغو رایگان، پرداخت در کشتی.'
    }
  },

  id: {
    'bosphorus-dinner-cruise': {
      title: 'Pelayaran Makan Malam Bosphorus dari €{p.dinnerStd} — Tur Malam Istanbul + Show',
      description: 'Pelayaran makan malam 3 jam di Bosphorus: menu Turki multi-hidangan dan pertunjukan folklor langsung. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    'bosphorus-with-kids': {
      title: 'Bosphorus dengan Anak — Pelayaran Keluarga dari €{p.dinnerStd}/dewasa',
      description: 'Pelayaran makan malam Bosphorus ramah keluarga. Anak 0-3 gratis, 4-8 setengah harga. Ruang dalam aman, menu anak. Pembatalan gratis, bayar di kapal.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Pelayaran Romantis Bosphorus dari €{p.dinnerStd} — Makan Malam Lilin Berdua',
      description: 'Pelayaran romantis Bosphorus: meja lilin, mawar, makan malam multi-hidangan di bawah jembatan bercahaya. Dari €{p.dinnerStd}/orang. Pembatalan gratis, bayar di kapal.'
    },
    'halal-bosphorus-cruise': {
      title: 'Pelayaran Makan Malam Halal Bosphorus dari €{p.dinnerStd} — Show + Tur Malam',
      description: 'Pelayaran makan malam 3 jam di Bosphorus: pertunjukan folklor langsung, jembatan bercahaya, panorama Bosphorus malam. Menu halal tersedia. Pembatalan gratis.'
    },
    'bosphorus-trip': {
      title: 'Perjalanan Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam Istanbul + Show',
      description: 'Perjalanan 3 jam di Bosphorus: makan malam Turki, folklor langsung, pemandangan malam bercahaya. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal.'
    },
    'istanbul-boat-tour': {
      title: 'Tur Kapal Istanbul dari €{p.dinnerStd} — Bosphorus + Makan Malam + Show',
      description: 'Tur kapal 3 jam: pelayaran Bosphorus, makan malam Turki lengkap, folklor langsung, pemandangan malam bercahaya. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    'istanbul-night-tour': {
      title: 'Tur Malam Istanbul dari €{p.dinnerStd} — Pelayaran Makan Malam Bosphorus + Show',
      description: 'Pelayaran 3 jam Bosphorus dengan makan malam dan show langsung. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal. 11.317 ulasan. Antar-jemput hotel opsional.'
    },
    'private-bosphorus-cruise': {
      title: 'Pelayaran Pribadi Bosphorus — Sewa Kapal di Istanbul (25+ tamu)',
      description: 'Pelayaran pribadi Bosphorus untuk grup, pernikahan, acara perusahaan. Kapal eksklusif, menu khusus, durasi fleksibel. Pembatalan gratis. WhatsApp untuk penawaran.'
    },
    'bosphorus-for-couples': {
      title: 'Bosphorus untuk Pasangan dari €{p.dinnerStd} — Malam Romantis Istanbul',
      description: 'Pelayaran makan malam Bosphorus untuk pasangan. Meja pribadi, jembatan bercahaya, dekorasi romantis opsional. Dari €{p.dinnerStd}/orang. Pembatalan gratis, bayar di kapal.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Pelayaran Senja Bosphorus dari €35 — Jam Emas + Makan Malam',
      description: 'Pelayaran senja Bosphorus dari Kabataş, berangkat 17:30. Istana dalam cahaya emas, makan malam berlanjut ke malam bercahaya. 3 jam. Pembatalan gratis, bayar di kapal.'
    },
    'bosphorus-night-tour': {
      title: 'Tur Malam Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam + Show Live',
      description: 'Tur malam 3 jam Bosphorus dengan makan malam dan show langsung. Berangkat 21:00 dari Kabataş, jembatan bercahaya. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    'dinner-cruise-istanbul': {
      title: 'Pelayaran Makan Malam Istanbul dari €{p.dinnerStd} — Tur Malam Bosphorus',
      description: 'Pelayaran makan malam 3 jam di Istanbul Bosphorus. Menu Turki multi-hidangan, folklor langsung, jembatan bercahaya. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    'bosphorus-vip': {
      title: 'Pelayaran VIP Bosphorus dari €{p.dinnerVip} — Makan Malam Premium',
      description: 'Pelayaran makan malam VIP Bosphorus: meze premium, pilihan steak, meja depan panggung, layanan prioritas. Sebelumnya €{p.dinnerVipOriginal}, sekarang €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Tiket Pelayaran Bosphorus dari €{p.dinnerStd} — Bayar di Kapal',
      description: 'Tiket langsung pelayaran Bosphorus. Standar €{p.dinnerStd}, VIP €{p.dinnerVip}. Tanpa uang muka, bayar di kapal. Pembatalan gratis hingga 2 jam sebelumnya. 11.317 ulasan.'
    },
    'last-minute-bosphorus': {
      title: 'Bosphorus Last Minute dari €{p.dinnerStd} — Pesan Malam Ini, Bayar di Kapal',
      description: 'Pemesanan pelayaran Bosphorus hari yang sama. Konfirmasi WhatsApp dalam menit. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    'istanbul-cruise-price': {
      title: 'Harga Pelayaran Istanbul dari €{p.dinnerStd} — Tarif Transparan',
      description: 'Harga pelayaran Bosphorus Istanbul: Standar €{p.dinnerStd}, VIP €{p.dinnerVip}. Anak 0-3 gratis, 4-8 setengah harga. Add-on transparan. Pembatalan gratis.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bosphorus dari €{p.dinnerStd} — Landmark Istanbul dari Air',
      description: 'Pelayaran sightseeing Bosphorus: Dolmabahçe, Ortaköy, Jembatan Bosphorus, Rumeli, Beylerbeyi, Menara Gadis. Tur malam 3 jam dengan makan malam. Pembatalan gratis.'
    }
  },

  ms: {
    'bosphorus-dinner-cruise': {
      title: 'Pelayaran Makan Malam Bosphorus dari €{p.dinnerStd} — Tur Malam Istanbul + Persembahan',
      description: 'Pelayaran makan malam 3 jam di Bosphorus: menu Turki pelbagai hidangan dan persembahan folklor langsung. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal.'
    },
    'bosphorus-with-kids': {
      title: 'Bosphorus dengan Anak — Pelayaran Keluarga dari €{p.dinnerStd}/dewasa',
      description: 'Pelayaran makan malam Bosphorus mesra keluarga. Anak 0-3 percuma, 4-8 separuh harga. Ruang dalam selamat, menu kanak-kanak. Pembatalan percuma, bayar di kapal.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Pelayaran Romantik Bosphorus dari €{p.dinnerStd} — Makan Malam Lilin',
      description: 'Pelayaran romantik Bosphorus: meja lilin, ros, makan malam pelbagai hidangan di bawah jambatan bercahaya. Dari €{p.dinnerStd}/orang. Pembatalan percuma, bayar di kapal.'
    },
    'halal-bosphorus-cruise': {
      title: 'Pelayaran Makan Malam Halal Bosphorus dari €{p.dinnerStd} — Persembahan + Tur Malam',
      description: 'Pelayaran makan malam 3 jam Bosphorus: persembahan folklor langsung, jambatan bercahaya, panorama Bosphorus malam. Menu halal tersedia atas permintaan. Pembatalan percuma.'
    },
    'bosphorus-trip': {
      title: 'Perjalanan Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam + Persembahan',
      description: 'Perjalanan 3 jam Bosphorus: makan malam Turki, folklor langsung, pemandangan malam bercahaya. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal.'
    },
    'istanbul-boat-tour': {
      title: 'Tur Bot Istanbul dari €{p.dinnerStd} — Bosphorus + Makan Malam + Persembahan',
      description: 'Tur bot 3 jam: pelayaran Bosphorus, makan malam Turki lengkap, folklor langsung, pemandangan malam bercahaya. Pembatalan percuma, bayar di kapal. 11,317 ulasan.'
    },
    'istanbul-night-tour': {
      title: 'Tur Malam Istanbul dari €{p.dinnerStd} — Pelayaran Bosphorus + Persembahan',
      description: 'Pelayaran 3 jam Bosphorus dengan makan malam dan persembahan langsung. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal. 11,317 ulasan. Pengangkutan hotel pilihan.'
    },
    'private-bosphorus-cruise': {
      title: 'Pelayaran Persendirian Bosphorus — Sewa Bot di Istanbul (25+ tetamu)',
      description: 'Pelayaran persendirian Bosphorus untuk kumpulan, perkahwinan, acara korporat. Bot eksklusif, menu khas, tempoh fleksibel. Pembatalan percuma. WhatsApp untuk sebut harga.'
    },
    'bosphorus-for-couples': {
      title: 'Bosphorus untuk Pasangan dari €{p.dinnerStd} — Malam Romantik Istanbul',
      description: 'Pelayaran makan malam Bosphorus untuk pasangan. Meja peribadi, jambatan bercahaya, hiasan romantik pilihan. Dari €{p.dinnerStd}/orang. Pembatalan percuma, bayar di kapal.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Pelayaran Matahari Terbenam Bosphorus dari €35 — Jam Emas + Makan Malam',
      description: 'Pelayaran matahari terbenam Bosphorus dari Kabataş, bertolak 17:30. Istana dalam cahaya emas, makan malam berterusan ke malam bercahaya. 3 jam. Pembatalan percuma.'
    },
    'bosphorus-night-tour': {
      title: 'Tur Malam Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam + Persembahan',
      description: 'Tur malam 3 jam Bosphorus dengan makan malam dan persembahan langsung. Bertolak 21:00 dari Kabataş, jambatan bercahaya. Pembatalan percuma, bayar di kapal.'
    },
    'dinner-cruise-istanbul': {
      title: 'Pelayaran Makan Malam Istanbul dari €{p.dinnerStd} — Tur Malam Bosphorus',
      description: 'Pelayaran makan malam 3 jam di Istanbul Bosphorus. Menu Turki pelbagai hidangan, folklor langsung, jambatan bercahaya. Pembatalan percuma, bayar di kapal. 11,317 ulasan.'
    },
    'bosphorus-vip': {
      title: 'Pelayaran VIP Bosphorus dari €{p.dinnerVip} — Makan Malam Premium',
      description: 'Pelayaran makan malam VIP Bosphorus: meze premium, pilihan steak, meja hadapan pentas, perkhidmatan keutamaan. Sebelumnya €{p.dinnerVipOriginal}, kini €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Tiket Pelayaran Bosphorus dari €{p.dinnerStd} — Bayar di Kapal',
      description: 'Tiket langsung pelayaran Bosphorus. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Tiada deposit, bayar di kapal. Pembatalan percuma hingga 2 jam sebelumnya. 11,317 ulasan.'
    },
    'last-minute-bosphorus': {
      title: 'Bosphorus Saat Akhir dari €{p.dinnerStd} — Tempah Malam Ini, Bayar di Kapal',
      description: 'Tempahan pelayaran Bosphorus hari yang sama. Pengesahan WhatsApp dalam minit. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal. 11,317 ulasan.'
    },
    'istanbul-cruise-price': {
      title: 'Harga Pelayaran Istanbul dari €{p.dinnerStd} — Kadar Telus',
      description: 'Harga pelayaran Bosphorus Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Anak 0-3 percuma, 4-8 separuh harga. Tambahan telus. Pembatalan percuma.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bosphorus dari €{p.dinnerStd} — Mercu Tanda Istanbul dari Air',
      description: 'Pelayaran sightseeing Bosphorus: Dolmabahçe, Ortaköy, Jambatan Bosphorus, Rumeli, Beylerbeyi, Menara Dara. Tur petang 3 jam dengan makan malam. Pembatalan percuma.'
    }
  },

  pl: {
    'bosphorus-dinner-cruise': {
      title: 'Rejs z Kolacją Bosfor od €{p.dinnerStd} — Tour Nocny Stambuł + Pokaz',
      description: 'Rejs z kolacją 3 godziny po Bosforze: tureckie wielodaniowe menu i pokaz folklorystyczny na żywo. Wypłynięcie 21:00 z Kabataş. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    'bosphorus-with-kids': {
      title: 'Bosfor z Dziećmi — Rejs Rodzinny od €{p.dinnerStd}/dorosły',
      description: 'Rodzinny rejs z kolacją po Bosforze. Dzieci 0-3 gratis, 4-8 połowa ceny. Bezpieczna sala, menu dla dzieci. Bezpłatne anulowanie, płatność na pokładzie. 11 317 opinii.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Romantyczny Rejs Bosfor od €{p.dinnerStd} — Kolacja przy Świecach dla 2',
      description: 'Romantyczny rejs po Bosforze: stół przy świecach, róże, wielodaniowa kolacja pod oświetlonymi mostami. Od €{p.dinnerStd}/osoba. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    'halal-bosphorus-cruise': {
      title: 'Halal Rejs z Kolacją Bosfor od €{p.dinnerStd} — Pokaz Live + Tour Nocny',
      description: 'Rejs z kolacją 3 godziny po Bosforze: pokaz folklorystyczny na żywo, oświetlone mosty, panoramiczny Bosfor nocą. Menu halal dostępne na życzenie. Bezpłatne anulowanie.'
    },
    'bosphorus-trip': {
      title: 'Wycieczka Bosfor od €{p.dinnerStd} — Rejs z Kolacją Stambuł + Pokaz',
      description: 'Wycieczka 3 godziny po Bosforze: turecka kolacja, folklor na żywo, oświetlone widoki nocne. Wypłynięcie 21:00 z Kabataş. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    'istanbul-boat-tour': {
      title: 'Wycieczka Łodzią Stambuł od €{p.dinnerStd} — Bosfor + Kolacja + Pokaz',
      description: 'Wycieczka łodzią 3 godziny: rejs Bosfor, pełna turecka kolacja, folklor na żywo, oświetlone widoki nocne. Bezpłatne anulowanie, płatność na pokładzie. 11 317 opinii.'
    },
    'istanbul-night-tour': {
      title: 'Tour Nocny Stambuł od €{p.dinnerStd} — Rejs z Kolacją Bosfor + Pokaz',
      description: 'Rejs 3 godziny po Bosforze z kolacją i pokazem na żywo. Wypłynięcie 21:00 z Kabataş. Bezpłatne anulowanie, płatność na pokładzie. 11 317 opinii. Transfer z hotelu opcjonalny.'
    },
    'private-bosphorus-cruise': {
      title: 'Prywatny Rejs Bosfor — Czarter Łodzi w Stambule (25+ gości)',
      description: 'Prywatny rejs Bosfor dla grup, ślubów, wydarzeń firmowych. Ekskluzywna łódź, menu na zamówienie, elastyczny czas. Bezpłatne anulowanie. WhatsApp po wycenę.'
    },
    'bosphorus-for-couples': {
      title: 'Bosfor dla Par od €{p.dinnerStd} — Romantyczny Wieczór Stambuł',
      description: 'Rejs z kolacją Bosfor dla par. Prywatny stolik, oświetlone mosty, romantyczna aranżacja opcjonalna. Od €{p.dinnerStd}/osoba. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Rejs o Zachodzie Bosfor od €35 — Złota Godzina + Kolacja',
      description: 'Rejs o zachodzie Bosfor z Kabataş, wypłynięcie 17:30. Pałace w złotym świetle, kolacja przechodzi w oświetloną noc. 3 godziny. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    'bosphorus-night-tour': {
      title: 'Tour Nocny Bosfor od €{p.dinnerStd} — Rejs z Kolacją + Pokaz Live',
      description: 'Tour nocny 3 godziny po Bosforze z kolacją i pokazem na żywo. Wypłynięcie 21:00 z Kabataş, oświetlone mosty. Bezpłatne anulowanie, płatność na pokładzie. 11 317 opinii.'
    },
    'dinner-cruise-istanbul': {
      title: 'Rejs z Kolacją Stambuł od €{p.dinnerStd} — Tour Nocny Bosfor',
      description: 'Rejs z kolacją 3 godziny w Stambule po Bosforze. Tureckie wielodaniowe menu, folklor na żywo, oświetlone mosty. Bezpłatne anulowanie, płatność na pokładzie. 11 317 opinii.'
    },
    'bosphorus-vip': {
      title: 'Rejs VIP Bosfor od €{p.dinnerVip} — Premium Kolacja, Miejsce VIP',
      description: 'VIP rejs z kolacją Bosfor: premium meze, opcje stekowe, stolik przy scenie, priorytetowa obsługa. Wcześniej €{p.dinnerVipOriginal}, teraz €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Bilety na Rejs Bosfor od €{p.dinnerStd} — Płatność na Pokładzie',
      description: 'Bezpośrednie bilety na rejs Bosfor. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Bez przedpłaty, płatność na pokładzie. Bezpłatne anulowanie do 2h przed. 11 317 opinii.'
    },
    'last-minute-bosphorus': {
      title: 'Bosfor Last Minute od €{p.dinnerStd} — Rezerwuj Dziś, Płać na Pokładzie',
      description: 'Rezerwacja rejsu Bosfor tego samego dnia. Potwierdzenie WhatsApp w minutach. Wypłynięcie 21:00 z Kabataş. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    'istanbul-cruise-price': {
      title: 'Cena Rejsu Stambuł od €{p.dinnerStd} — Przejrzyste Stawki',
      description: 'Ceny rejsów Bosfor Stambuł: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Dzieci 0-3 gratis, 4-8 połowa ceny. Dodatki przejrzyste. Bezpłatne anulowanie.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bosfor od €{p.dinnerStd} — Zabytki Stambułu z Wody',
      description: 'Rejs sightseeing Bosfor: Dolmabahçe, Ortaköy, Most Bosfor, Rumeli, Beylerbeyi, Wieża Panny. Tour wieczorny 3h z kolacją. Bezpłatne anulowanie, płatność na pokładzie.'
    }
  },

  bg: {
    'bosphorus-dinner-cruise': {
      title: 'Круиз с Вечеря Босфор от €{p.dinnerStd} — Нощен Тур Истанбул + Шоу',
      description: 'Круиз с вечеря 3 часа по Босфора: турско многоблюдово меню и фолклорно шоу на живо. Тръгване 21:00 от Кабаташ. Безплатна отмяна, плащане на борда. 11 317 отзива.'
    },
    'bosphorus-with-kids': {
      title: 'Босфор с Деца — Семеен Круиз от €{p.dinnerStd}/възрастен',
      description: 'Семеен круиз с вечеря по Босфора. Деца 0-3 безплатно, 4-8 половин цена. Безопасна вътрешна зала, детско меню. Безплатна отмяна, плащане на борда.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Романтичен Круиз Босфор от €{p.dinnerStd} — Вечеря на Свещи за 2',
      description: 'Романтичен круиз по Босфора: маса на свещи, рози, многоблюдова вечеря под осветените мостове. От €{p.dinnerStd}/човек. Безплатна отмяна, плащане на борда.'
    },
    'halal-bosphorus-cruise': {
      title: 'Халал Круиз с Вечеря Босфор от €{p.dinnerStd} — Шоу + Нощен Тур',
      description: 'Круиз с вечеря 3 часа по Босфора: фолклорно шоу на живо, осветени мостове, панорамен Босфор нощем. Халал меню налично. Безплатна отмяна, плащане на борда.'
    },
    'bosphorus-trip': {
      title: 'Пътуване Босфор от €{p.dinnerStd} — Круиз с Вечеря Истанбул + Шоу',
      description: 'Пътуване 3 часа по Босфора: турска вечеря, фолклор на живо, осветени нощни гледки. Тръгване 21:00 от Кабаташ. Безплатна отмяна, плащане на борда.'
    },
    'istanbul-boat-tour': {
      title: 'Лодка Тур Истанбул от €{p.dinnerStd} — Босфор + Вечеря + Шоу',
      description: 'Лодка тур 3 часа: круиз Босфор, пълна турска вечеря, фолклор на живо, осветени нощни гледки. Безплатна отмяна, плащане на борда. 11 317 отзива.'
    },
    'istanbul-night-tour': {
      title: 'Нощен Тур Истанбул от €{p.dinnerStd} — Круиз с Вечеря Босфор + Шоу',
      description: 'Круиз 3 часа по Босфора с вечеря и шоу на живо. Тръгване 21:00 от Кабаташ. Безплатна отмяна, плащане на борда. 11 317 отзива. Хотел трансфер опционален.'
    },
    'private-bosphorus-cruise': {
      title: 'Частен Круиз Босфор — Чартър на Лодка в Истанбул (25+ гости)',
      description: 'Частен круиз Босфор за групи, сватби, корпоративни събития. Ексклузивна лодка, индивидуално меню, гъвкава продължителност. Безплатна отмяна. WhatsApp за оферта.'
    },
    'bosphorus-for-couples': {
      title: 'Босфор за Двойки от €{p.dinnerStd} — Романтична Вечер Истанбул',
      description: 'Круиз с вечеря Босфор за двойки. Частна маса, осветени мостове, романтична украса опционално. От €{p.dinnerStd}/човек. Безплатна отмяна, плащане на борда.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Залезен Круиз Босфор от €35 — Златен Час + Вечеря',
      description: 'Залезен круиз Босфор от Кабаташ, тръгване 17:30. Дворци в златна светлина, вечеря преминава в осветена нощ. 3 часа. Безплатна отмяна, плащане на борда.'
    },
    'bosphorus-night-tour': {
      title: 'Нощен Тур Босфор от €{p.dinnerStd} — Круиз с Вечеря + Шоу Live',
      description: 'Нощен тур 3 часа по Босфора с вечеря и шоу на живо. Тръгване 21:00 от Кабаташ, осветени мостове. Безплатна отмяна, плащане на борда. 11 317 отзива.'
    },
    'dinner-cruise-istanbul': {
      title: 'Круиз с Вечеря Истанбул от €{p.dinnerStd} — Нощен Тур Босфор',
      description: 'Круиз с вечеря 3 часа в Истанбул по Босфора. Турско многоблюдово меню, фолклор на живо, осветени мостове. Безплатна отмяна, плащане на борда. 11 317 отзива.'
    },
    'bosphorus-vip': {
      title: 'VIP Круиз Босфор от €{p.dinnerVip} — Премиум Вечеря, Място VIP',
      description: 'VIP круиз с вечеря Босфор: премиум мезе, стек опции, маса пред сцената, приоритетно обслужване. Преди €{p.dinnerVipOriginal}, сега €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Билети Круиз Босфор от €{p.dinnerStd} — Плащане на Борда',
      description: 'Директни билети за круиз Босфор. Стандарт €{p.dinnerStd}, VIP €{p.dinnerVip}. Без аванс, плащане на борда. Безплатна отмяна до 2ч преди. 11 317 отзива.'
    },
    'last-minute-bosphorus': {
      title: 'Босфор Последна Минута от €{p.dinnerStd} — Резервирай Тази Вечер',
      description: 'Резервация круиз Босфор за същия ден. Потвърждение по WhatsApp за минути. Тръгване 21:00 от Кабаташ. Безплатна отмяна, плащане на борда.'
    },
    'istanbul-cruise-price': {
      title: 'Цена Круиз Истанбул от €{p.dinnerStd} — Прозрачни Тарифи',
      description: 'Цени круиз Босфор Истанбул: Стандарт €{p.dinnerStd}, VIP €{p.dinnerVip}. Деца 0-3 безплатно, 4-8 половин цена. Добавки прозрачни. Безплатна отмяна.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Босфор от €{p.dinnerStd} — Забележителности Истанбул от Водата',
      description: 'Sightseeing круиз Босфор: Долмабахче, Ортакьой, Мост Босфор, Румели, Бейлербейи, Девическата кула. Вечерен тур 3ч с вечеря. Безплатна отмяна, плащане на борда.'
    }
  },

  ro: {
    'bosphorus-dinner-cruise': {
      title: 'Croazieră Cină Bosfor de la €{p.dinnerStd} — Tur Nocturn Istanbul + Spectacol',
      description: 'Croazieră cu cină 3 ore pe Bosfor: meniu turcesc multifel și spectacol folcloric live. Plecare 21:00 din Kabataş. Anulare gratuită, plată la bord. 11.317 recenzii.'
    },
    'bosphorus-with-kids': {
      title: 'Bosfor cu Copii — Croazieră de Familie de la €{p.dinnerStd}/adult',
      description: 'Croazieră cu cină Bosfor prietenoasă cu familia. Copii 0-3 gratis, 4-8 jumătate de preț. Sală interioară sigură, meniu pentru copii. Anulare gratuită, plată la bord.'
    },
    'romantic-bosphorus-cruise': {
      title: 'Croazieră Romantică Bosfor de la €{p.dinnerStd} — Cină la Lumânări',
      description: 'Croazieră romantică Bosfor: masă la lumânări, trandafiri, cină multifel sub poduri iluminate. De la €{p.dinnerStd}/persoană. Anulare gratuită, plată la bord.'
    },
    'halal-bosphorus-cruise': {
      title: 'Croazieră Cină Halal Bosfor de la €{p.dinnerStd} — Spectacol + Tur Nocturn',
      description: 'Croazieră cu cină 3 ore pe Bosfor: spectacol folcloric live, poduri iluminate, panoramă Bosfor noaptea. Meniu halal disponibil la cerere. Anulare gratuită, plată la bord.'
    },
    'bosphorus-trip': {
      title: 'Excursie Bosfor de la €{p.dinnerStd} — Croazieră Cină Istanbul + Spectacol',
      description: 'Excursie 3 ore pe Bosfor: cină turcească, folclor live, peisaje nocturne iluminate. Plecare 21:00 din Kabataş. Anulare gratuită, plată la bord. 11.317 recenzii.'
    },
    'istanbul-boat-tour': {
      title: 'Tur cu Barca Istanbul de la €{p.dinnerStd} — Bosfor + Cină + Spectacol',
      description: 'Tur cu barca 3 ore: croazieră Bosfor, cină turcească completă, folclor live, peisaje nocturne iluminate. Anulare gratuită, plată la bord. 11.317 recenzii.'
    },
    'istanbul-night-tour': {
      title: 'Tur Nocturn Istanbul de la €{p.dinnerStd} — Croazieră Cină Bosfor + Spectacol',
      description: 'Croazieră 3 ore pe Bosfor cu cină și spectacol live. Plecare 21:00 din Kabataş. Anulare gratuită, plată la bord. 11.317 recenzii. Transfer hotel opțional.'
    },
    'private-bosphorus-cruise': {
      title: 'Croazieră Privată Bosfor — Închiriere Barcă Istanbul (25+ invitați)',
      description: 'Croazieră privată Bosfor pentru grupuri, nunți, evenimente corporate. Barcă exclusivă, meniu personalizat, durată flexibilă. Anulare gratuită. WhatsApp pentru ofertă.'
    },
    'bosphorus-for-couples': {
      title: 'Bosfor pentru Cupluri de la €{p.dinnerStd} — Seară Romantică Istanbul',
      description: 'Croazieră cu cină Bosfor pentru cupluri. Masă privată, poduri iluminate, decor romantic opțional. De la €{p.dinnerStd}/persoană. Anulare gratuită, plată la bord.'
    },
    'bosphorus-sunset-cruise': {
      title: 'Croazieră Apus Bosfor de la €35 — Ora de Aur + Cină',
      description: 'Croazieră apus Bosfor din Kabataş, plecare 17:30. Palate în lumină aurie, cină continuă în noaptea iluminată. 3 ore. Anulare gratuită, plată la bord.'
    },
    'bosphorus-night-tour': {
      title: 'Tur Nocturn Bosfor de la €{p.dinnerStd} — Croazieră Cină + Spectacol Live',
      description: 'Tur nocturn 3 ore pe Bosfor cu cină și spectacol live. Plecare 21:00 din Kabataş, poduri iluminate. Anulare gratuită, plată la bord. 11.317 recenzii.'
    },
    'dinner-cruise-istanbul': {
      title: 'Croazieră Cină Istanbul de la €{p.dinnerStd} — Tur Nocturn Bosfor',
      description: 'Croazieră cu cină 3 ore în Istanbul pe Bosfor. Meniu turcesc multifel, folclor live, poduri iluminate. Anulare gratuită, plată la bord. 11.317 recenzii.'
    },
    'bosphorus-vip': {
      title: 'Croazieră VIP Bosfor de la €{p.dinnerVip} — Cină Premium, Loc VIP',
      description: 'Croazieră cu cină VIP Bosfor: meze premium, opțiuni de friptură, masă în fața scenei, serviciu prioritar. Anterior €{p.dinnerVipOriginal}, acum €{p.dinnerVip}.'
    },
    'bosphorus-cruise-tickets': {
      title: 'Bilete Croazieră Bosfor de la €{p.dinnerStd} — Plată la Bord',
      description: 'Bilete directe croazieră Bosfor. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Fără avans, plată la bord. Anulare gratuită până cu 2h înainte. 11.317 recenzii.'
    },
    'last-minute-bosphorus': {
      title: 'Bosfor Last Minute de la €{p.dinnerStd} — Rezervă Astăzi, Plătește la Bord',
      description: 'Rezervare croazieră Bosfor în aceeași zi. Confirmare WhatsApp în minute. Plecare 21:00 din Kabataş. Anulare gratuită, plată la bord. 11.317 recenzii.'
    },
    'istanbul-cruise-price': {
      title: 'Preț Croazieră Istanbul de la €{p.dinnerStd} — Tarife Transparente',
      description: 'Prețuri croazieră Bosfor Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Copii 0-3 gratis, 4-8 jumătate de preț. Suplimente transparente. Anulare gratuită.'
    },
    'bosphorus-sightseeing': {
      title: 'Sightseeing Bosfor de la €{p.dinnerStd} — Obiective Istanbul de pe Apă',
      description: 'Croazieră sightseeing Bosfor: Dolmabahçe, Ortaköy, Pod Bosfor, Rumeli, Beylerbeyi, Turnul Fecioarei. Tur seară 3h cu cină. Anulare gratuită, plată la bord.'
    }
  }
};

// === Update each translation file ===
let totalUpdates = 0;
for (const [lang, slugs] of Object.entries(TRANSLATIONS)) {
  const filePath = path.join(ROOT, 'content', 'translations', `${lang}.js`);
  if (!fs.existsSync(filePath)) {
    console.log(`⏭  Skip: ${lang}.js not found`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let updates = 0;

  for (const [slug, meta] of Object.entries(slugs)) {
    // Match the meta block right after `'<slug>': { meta: { ... }`
    // Captures the full title:'...', description:'...' fields.
    // Some translation files use double-quoted strings, so accept both.
    const escapedSlug = slug.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const pattern = new RegExp(
      `(['"]${escapedSlug}['"]\\s*:\\s*\\{\\s*meta:\\s*\\{)\\s*title:\\s*(?:'(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*")\\s*,\\s*description:\\s*(?:'(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*")\\s*(\\})`,
      'm'
    );
    const escapedTitle = meta.title.replace(/'/g, "\\'");
    const escapedDesc = meta.description.replace(/'/g, "\\'");
    const replacement = `$1\n      title: '${escapedTitle}',\n      description: '${escapedDesc}'\n    $2`;
    const before = content;
    content = content.replace(pattern, replacement);
    if (content !== before) updates++;
  }

  fs.writeFileSync(filePath, content);
  console.log(`✓ ${lang}.js: ${updates}/${Object.keys(slugs).length} slugs updated`);
  totalUpdates += updates;
}

console.log(`\nDone. ${totalUpdates} meta blocks updated across 12 languages.`);
