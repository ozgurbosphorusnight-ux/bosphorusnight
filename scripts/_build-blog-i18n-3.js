#!/usr/bin/env node
/**
 * Blog i18n generator — tr, de, es, ru, ar (Sprint L1 PROMPT 3).
 * Output: src/blog-i18n/{lang}/*.html (6 files × 5 langs = 30 files).
 * ar uses dir="rtl".
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'src', 'blog-i18n');

const UI = {
  tr: {
    htmlLang: 'tr', isRtl: false,
    blogLink: 'Blog', homeLink: 'Ana Sayfa',
    backToBlog: '← Bloga Dön',
    ctaTitle: 'Boğaz Turunu Rezerve Etmeye Hazır mısınız?',
    ctaText: "Anında rezervasyon için WhatsApp'tan bize ulaşın — ön ödeme yok, teknede ödersiniz.",
    ctaButton: "WhatsApp'tan Rezerve Et",
    relatedTitle: 'İlgili Yazılar',
    footerCopy: '© 2026 Bosphorus Night. Tüm hakları saklıdır.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Onlineyiz · Hemen sohbet et',
    floatingWaAria: "WhatsApp'tan sohbet et",
    waMsg: 'Merhaba!%20Bosphorus%20Night%20turu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
    dateStrings: { '04-08': '8 Nisan 2026', '04-09': '9 Nisan 2026', '04-10': '10 Nisan 2026', '04-11': '11 Nisan 2026' },
  },
  de: {
    htmlLang: 'de', isRtl: false,
    blogLink: 'Blog', homeLink: 'Startseite',
    backToBlog: '← Zurück zum Blog',
    ctaTitle: 'Bereit, Ihre Bootsfahrt zu buchen?',
    ctaText: 'Kontaktieren Sie uns auf WhatsApp für eine sofortige Buchung — keine Vorauszahlung, Zahlung an Bord.',
    ctaButton: 'Auf WhatsApp buchen',
    relatedTitle: 'Verwandte Artikel',
    footerCopy: '© 2026 Bosphorus Night. Alle Rechte vorbehalten.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Wir sind online · Jetzt chatten',
    floatingWaAria: 'Auf WhatsApp chatten',
    waMsg: 'Hallo!%20Ich%20m%C3%B6chte%20mich%20%C3%BCber%20die%20Bosphorus%20Night%20Bootsfahrt%20informieren.',
    dateStrings: { '04-08': '8. April 2026', '04-09': '9. April 2026', '04-10': '10. April 2026', '04-11': '11. April 2026' },
  },
  es: {
    htmlLang: 'es', isRtl: false,
    blogLink: 'Blog', homeLink: 'Inicio',
    backToBlog: '← Volver al Blog',
    ctaTitle: '¿Listo para reservar su crucero?',
    ctaText: 'Contáctenos por WhatsApp para reserva instantánea — sin pago anticipado, paga en el barco.',
    ctaButton: 'Reservar por WhatsApp',
    relatedTitle: 'Artículos relacionados',
    footerCopy: '© 2026 Bosphorus Night. Todos los derechos reservados.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Estamos en línea · Chatea ahora',
    floatingWaAria: 'Chatea en WhatsApp',
    waMsg: '%C2%A1Hola!%20Quisiera%20preguntar%20sobre%20el%20crucero%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 de abril de 2026', '04-09': '9 de abril de 2026', '04-10': '10 de abril de 2026', '04-11': '11 de abril de 2026' },
  },
  ru: {
    htmlLang: 'ru', isRtl: false,
    blogLink: 'Блог', homeLink: 'Главная',
    backToBlog: '← Вернуться в блог',
    ctaTitle: 'Готовы забронировать круиз?',
    ctaText: 'Свяжитесь с нами в WhatsApp для мгновенного бронирования — без предоплаты, оплата на лодке.',
    ctaButton: 'Забронировать в WhatsApp',
    relatedTitle: 'Похожие статьи',
    footerCopy: '© 2026 Bosphorus Night. Все права защищены.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Мы онлайн · Чат сейчас',
    floatingWaAria: 'Чат в WhatsApp',
    waMsg: '%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%BA%D1%80%D1%83%D0%B8%D0%B7%D0%B5%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 апреля 2026', '04-09': '9 апреля 2026', '04-10': '10 апреля 2026', '04-11': '11 апреля 2026' },
  },
  ar: {
    htmlLang: 'ar', isRtl: true,
    blogLink: 'المدونة', homeLink: 'الرئيسية',
    backToBlog: '← العودة إلى المدونة',
    ctaTitle: 'هل أنت مستعد لحجز رحلتك البحرية؟',
    ctaText: 'تواصل معنا عبر واتساب للحجز الفوري — لا حاجة للدفع المسبق، الدفع على القارب.',
    ctaButton: 'احجز عبر واتساب',
    relatedTitle: 'مقالات ذات صلة',
    footerCopy: '© 2026 Bosphorus Night. جميع الحقوق محفوظة.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'نحن متصلون · دردش الآن',
    floatingWaAria: 'دردش على واتساب',
    waMsg: '%D9%85%D8%B1%D8%AD%D8%A8%D8%A7!%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%B1%D8%AD%D9%84%D8%A9%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 أبريل 2026', '04-09': '9 أبريل 2026', '04-10': '10 أبريل 2026', '04-11': '11 أبريل 2026' },
  },
};

const ARTICLES_META = {
  'best-bosphorus-dinner-cruise-istanbul': {
    image: '/assets/tours/dinner/boat-night-bridge.jpg', date: '2026-04-11',
    relatedSlugs: ['istanbul-cruise-tonight-last-minute', 'bosphorus-sunset-cruise-guide', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'],
  },
  'istanbul-cruise-tonight-last-minute': {
    image: '/assets/tours/dinner/hall-wide.jpg', date: '2026-04-11',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'bosphorus-sunset-cruise-guide', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'],
  },
  'bosphorus-sunset-cruise-guide': {
    image: '/assets/tours/sunset/amor-sunset-dramatic.jpg', date: '2026-04-10',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'istanbul-cruise-tonight-last-minute', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'],
  },
  'things-to-know-istanbul-boat-tour': {
    image: '/assets/tours/daytime/boat-panorama.jpg', date: '2026-04-09',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'istanbul-cruise-tonight-last-minute', 'bosphorus-sunset-cruise-guide', 'bosphorus-cruise-with-kids-family'],
  },
  'bosphorus-cruise-with-kids-family': {
    image: '/assets/tours/daytime/deck-guests.jpg', date: '2026-04-08',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'things-to-know-istanbul-boat-tour', 'bosphorus-sunset-cruise-guide', 'istanbul-cruise-tonight-last-minute'],
  },
};

const T = {
  tr: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: "Boğaz turu ipuçları, rehberler ve içeriden bilgiler. Uzman makalelerimizle mükemmel İstanbul akşam yemekli tekne turunuzu planlayın.",
      ogDesc: "Boğaz turu ipuçları, rehberler ve içeriden bilgiler. Mükemmel İstanbul akşam yemekli tekne turunuzu planlayın.",
      h1: 'Blog',
      lead: 'Tur ipuçları, İstanbul rehberleri ve içeriden bilgilerle mükemmel Boğaz deneyiminizi planlayın.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 Nisan 2026', title: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur', blurb: "İstanbul'un en yüksek puanlı akşam yemekli tekne turu deneyimi hakkında bilmeniz gereken her şey. Paketlerden fiyatlandırmaya, eğlenceden büyüleyici gece manzaralarına kadar.", alt: 'Geceleri aydınlatılmış köprünün altındaki Boğaz akşam yemekli tur teknesi' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 Nisan 2026', title: 'Bu Akşam Boğaz Turu — Son Dakika Rezervasyon Rehberi', blurb: 'Bu akşam Boğaz turuna çıkmak ister misiniz? Son dakika rezervasyonu, müsaitlik ve yerinizi nasıl ayırtacağınızla ilgili her şey burada.', alt: 'Lüks bir Boğaz turu yemek salonunun iç görünümü' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 Nisan 2026', title: 'Boğaz Gün Batımı Turu Rehberi', blurb: "İstanbul'un altın saatini sudan yaşayın. Gün batımı akşam yemekli turu hakkında her şey — zamanlama, ne beklenir ve neden unutulmaz.", alt: 'Boğaz boğazı üzerinde dramatik gün batımı' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 Nisan 2026', title: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey', blurb: 'Boğaz turu mu planlıyorsunuz? Ne giyeceğinizden deniz tutmasına kadar, her ilk turistin bilmesi gereken 10 önemli şey.', alt: "Boğaz'da seyreden bir teknenin panoramik manzarası" },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 Nisan 2026', title: 'Çocuklarla Boğaz Turu — Aile Rehberi', blurb: 'Akşam yemekli tur çocuklar için uygun mu? Kesinlikle. 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. İşte tam aile planlama rehberiniz.', alt: "Boğaz turunun güvertesinin tadını çıkaran aileler" },
      ],
      readMore: 'Devamını Oku →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur — Eksiksiz Rehber',
      desc: "İstanbul'un en iyi akşam yemekli tekne turu hakkında bilmeniz gereken her şey. €24'ten başlayan paketler, canlı Türk şovları, büyüleyici gece manzaraları. Anında rezervasyon.",
      h1: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur',
      alt: 'Geceleri aydınlatılmış Boğaziçi Köprüsü altından süzülen lüks tur teknesi',
      body: [
        ['p', "İstanbul, dünyada iki kıtanın etrafınızda aydınlandığını izlerken su üzerinde yemek yiyebileceğiniz birkaç şehirden biridir. Boğaz akşam yemekli turu sadece bir yemek değil — şehrin sunduğu en ikonik akşam deneyimidir. İstanbul'u ilk kez ziyaret ediyor veya başka bir gezi için geri dönüyor olun, Boğaz'da geçirilen bir gece yıllarca hatırlayacağınız bir şeydir."],
        ['h2', 'Onu Özel Kılan Nedir'],
        ['p', "Boğaz, Avrupa ve Asya'yı ayıran 30 kilometre uzunluğunda bir su yoludur. Geceleri kıyılarındaki tarihi saraylar, camiler ve köprüler muhteşem bir şekilde aydınlatılır. Teknedeki masanızdan Dolmabahçe Sarayı'nın karanlık yamacın aksine beyaz parıldadığını, Kız Kulesi'nin sıcak sarı ışığıyla suda yalnız durduğunu ve iki büyük asma köprünün — Boğaziçi Köprüsü ve Fatih Sultan Mehmet Köprüsü — kıtalar arasında renk şeritleri halinde uzandığını göreceksiniz."],
        ['p', "Tur rotası genellikle Dolmabahçe Sarayı yakınındaki Kabataş iskelesinden hareket eder. Tekne Avrupa kıyısı boyunca kuzeye yönelir, yalı olarak bilinen süslü kıyı konakları, Çırağan Sarayı ve Rumeli Hisarı'ndan geçer. Sonra Asya yakasında güneye döner, Beylerbeyi Sarayı ve Üsküdar sahili manzaralarını sunar ve geri döner. Tüm yolculuk pakete bağlı olarak yaklaşık üç ila dört saat sürer."],
        ['h2', 'Akşam Yemeği Deneyimi'],
        ['p', "Akşam yemeği Türk ve uluslararası mutfağı birleştiren set menü olarak servis edilir. Soğuk ve sıcak meze seçkisi — humus, dolma, mevsim salataları — ardından pilav ve fırınlanmış sebzelerle ızgara et veya balık ana yemek bekleyebilirsiniz. Tatlı genellikle baklava veya kadayıf gibi klasik bir Türk tatlısıdır, Türk çayı veya kahvesiyle eşleştirilir. Meşrubatlar ve su tüm paketlere dahildir, alkollü içecekler Premium ve VIP seçeneklerinde mevcuttur."],
        ['h2', 'Canlı Eğlence'],
        ['p', "Eğlence programı en önemli yönlerden biridir. Renkli bölgesel kostümlerle sergilenen tam bir geleneksel Türk halk oyunları gösterisi, enerjik bir oryantal dans gösterisi, Türk grubundan canlı müzik ve gece ilerledikçe havayı koruyan DJ seti bekleyin. Bazı turlarda dönen dervişler töreni de yer alır — yüzyıllardır Türk kültürünün bir parçası olan büyüleyici bir Sufi manevi pratiği. Şov yaklaşık 90 dakika sürer ve uluslararası misafirlere Türk sahne sanatlarının zengin bir tadını vermek için tasarlanmıştır."],
        ['h2', 'Paketler ve Fiyatlandırma'],
        ['p', "Bosphorus Night'ta iki ana paket sunuyoruz, içecekler, otel transferi ve özel günler için isteğe bağlı eklentilerle:"],
        ['ul', [
          ['<strong class="text-white/80">Standart Akşam Yemekli Tur (€24\'ten)</strong> — Tam 4 yemeklik akşam yemeği, meşrubatlar, canlı eğlence, halk oyunları ve oryantal dans gösterileri, üst güvertede DJ. Çiftler, aileler ve solo gezginler için en popüler seçenek.'],
          ['<strong class="text-white/80">VIP Akşam Yemekli Tur (€55\'ten)</strong> — Premium etleri (antrkot, dana bonfile), 15+ Türk mezesi, sahneye yakın oturma ve gelişmiş servis dahil genişletilmiş menü. Özel günler ve yıldönümleri için mükemmel.'],
        ]],
        ['p_sm', 'Eklentiler: sınırsız içecek (€30/kişi), otel transferi (€10/kişi), romantik masa düzeni (€15/rezervasyon). Teknede ödeme — ön ödeme gerekmez.'],
        ['p', "Genellikle 4-8 yaş arası çocuklar yarı fiyat öder ve 3 yaş ve altı çocuklar ücretsizdir. Ön ödeme gerekmez — teknede ödersiniz, bu da herhangi bir rezervasyon riskini ortadan kaldırır."],
        ['h2', 'Nasıl Rezervasyon Yapılır'],
        ['p', "Rezervasyon yapmanın en kolay yolu WhatsApp'tır. Sadece tercih ettiğiniz tarih, misafir sayısı ve hangi paketin sizi ilgilendirdiğini bize mesaj atın. Ekibimiz dakikalar içinde yanıt verir, müsaitliği doğrular ve tüm detayları gönderir — buluşma noktası, biniş saati ve ne beklenir. Çevrimiçi ödeme formu ve depozito yoktur. Doğrudan teknede nakit veya kartla ödersiniz."],
        ['h2', 'En İyi Deneyim İçin İpuçları'],
        ['p', "İyi bir masa kapmak için iskeleye kalkıştan en az 20 dakika önce gelin. Smart casual giyinin — tekne aşırı resmi değildir ama plaj kıyafetinden bir adım üstü daha rahat hissedersiniz. Yazın bile üst güverte rüzgarlı olabileceği için hafif bir ceket veya şal getirin. Ve telefonunuzu şarjlı tutun — özellikle tekne aydınlatılmış köprülerin altından geçerken manzaraları yakalamak isteyeceksiniz."],
        ['p', "Boğaz akşam yemekli turu, abartısız, İstanbul'u geceleri deneyimlemenin en iyi yoludur. Yemek, canlı kültür ve karanlık suda yansıyan şehir silüeti manzaralarının kombinasyonu eşsizdir. İstanbul gezinizde sadece tek bir \"büyük gece\" yapıyorsanız, bu olsun."],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Bu Akşam Boğaz Turu — Son Dakika Rehberi', blurb: 'Anında WhatsApp onayıyla aynı gün tur rezervasyonu yapın.' },
        'bosphorus-sunset-cruise-guide': { title: 'Boğaz Gün Batımı Turu Rehberi', blurb: 'Suda altın saat — nihai gün batımı deneyimi.' },
        'things-to-know-istanbul-boat-tour': { title: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey', blurb: 'İlk kez Boğaz turuna çıkanlar için temel ipuçları.' },
        'bosphorus-cruise-with-kids-family': { title: 'Çocuklarla Boğaz Turu — Aile Rehberi', blurb: '0-3 yaş ücretsiz aile dostu turlar.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Bu Akşam Boğaz Turu — İstanbul Son Dakika Rezervasyon Rehberi',
      desc: "Bu akşam Boğaz turuna çıkmak ister misiniz? İşte İstanbul'da son dakika akşam yemekli tur rezervasyonu nasıl yapılır. Aynı gün müsaitlik, anında WhatsApp rezervasyonu.",
      h1: 'Bu Akşam Boğaz Turu — Son Dakika Rezervasyon Rehberi',
      alt: 'Boğaz akşam yemekli turunun zarif yemek salonu',
      body: [
        ['p', "Saat 15:00 ve bu akşam özel bir şey yapmak istediğinize karar verdiniz. Belki bu sabah İstanbul'a vardınız ve ilk akşamınızdan en iyi şekilde yararlanmak istiyorsunuz. Belki hava beklediğinizden daha iyi çıktı ve suda bir gece aniden mükemmel geliyor. Sebep ne olursa olsun, soru basit: bu akşam için hala Boğaz akşam yemekli tur rezervasyonu yapabilir misiniz?"],
        ['p', 'Kısa cevap <strong class="text-white/90">evet</strong>. Aynı gün rezervasyonları sadece mümkün değil — yaygın. İşte İstanbul\'da son dakika tur rezervasyonu hakkında bilmeniz gereken her şey.'],
        ['h2', 'Gerçekten Aynı Gün Rezervasyon Yapabilir misiniz?'],
        ['p', "Kesinlikle. Önceden rezervasyon gerektiren birçok turistik faaliyetin aksine, Boğaz akşam yemekli turları yüzlerce misafir taşıyabilen büyük tekneler işletir. Bu, aynı günde bile neredeyse her zaman müsaitlik olduğu anlamına gelir. Yaz pik aylarında (Temmuz ve Ağustos) hafta sonu turları daha hızlı dolabilir, ancak hafta içi seferler nadiren tamamen satılır. İlkbahar ve sonbaharda son dakika yerleri pratikte garantilidir."],
        ['p', "Bosphorus Night olarak, birçok misafirin gün içinde karar verdiğini bildiğimizden WhatsApp hattımızı sabah erkenden gece geç saatlere kadar açık tutuyoruz. Ekibimiz mesajınızdan dakikalar içinde rezervasyonunuzu onaylayabilir."],
        ['h2', 'Bu Akşam Hangi Turlar Var?'],
        ['p', "Standart akşam yemekli tur, her gün Kabataş iskelesinden hareket eder. Tipik program şöyle işler: biniş 19:30 ile 20:00 civarında başlar, tekne yaklaşık 20:30'da kalkar ve tur yaklaşık üç saat sürer, yaklaşık 23:30'da iskeleye döner. Bazı operatörler ayrıca 17:30 civarında kalkan ve 21:00'a kadar dönen bir gün batımı turu sunar — ancak öğleden sonra son dakika kararı için akşam yemekli tur daha pratik bir seçenektir."],
        ['p', "Her iki paket de — Standart ve VIP — aynı gün rezervasyon için mevcuttur. Standart paket kişi başı €24'ten başlar ve tam 4 yemeklik akşam yemeği, meşrubatlar ve eğlence programını içerir. Paketinizi önceden seçmenize gerek yok; sadece bize WhatsApp'tan mesaj atın, sizinle seçenekleri gözden geçirelim."],
        ['h2', "Kabataş'a Nasıl Gidilir"],
        ['p', "Kabataş, İstanbul'un en erişilebilir noktalarından biridir. Sultanahmet'te (eski şehir) kalıyorsanız, T1 tramvayı doğrudan Kabataş'a gider — son duraktır. Yolculuk yaklaşık 25 dakika sürer. Taksim'den, üç dakikadan kısa sürede doğrudan Kabataş'a inen füniküleri (F1 hattı) kullanabilirsiniz. Asya yakasından, Kabataş veya Beşiktaş'a feribot alın. Çoğu merkezi alandan taksiler trafik ve mesafeye bağlı olarak 100-200 TL arasında değişir."],
        ['p', "İskele alanına en geç 19:30'a kadar varmanızı öneririz. Bu size buluşma noktasını bulmak, sizi tekneye yönlendirecek ekip üyemizle tanışmak ve kalkıştan önce masanıza yerleşmek için zaman verir."],
        ['h2', 'Ne Getirmeli'],
        ['p', "Basit tutun. Fotoğraflar için telefonunuzu, üst güverte için hafif bir ceket veya hırka (yaz akşamları bile suda rüzgarlı olabilir) ve teknede ödeme için nakit veya kart getirin. Kıyafet kuralı yoktur, ancak smart casual en iyi sonuç verir — şort ve terlik yerine güzel bir gömlek veya bluz düşünün. Tekne hareket halindeyken rüzgar artacağından hanımlar bir saç bağı veya eşarp isteyebilir."],
        ['h2', 'Rezervasyon Süreci'],
        ['p', 'Üç hızlı adımda nasıl çalıştığı:'],
        ['ol', [
          ['<strong class="text-white/80">Bize WhatsApp\'tan mesaj atın</strong> — Kaç misafir, tercih ettiğiniz paket (veya öneri isteyin) ve bu akşamın tarihini onaylayın.'],
          ['<strong class="text-white/80">Anında onay alın</strong> — Buluşma noktası adresi, biniş saati ve ihtiyacınız olan diğer ayrıntılarla dakikalar içinde yanıt veriyoruz.'],
          ['<strong class="text-white/80">Gelin ve tadını çıkarın</strong> — Depozito yok, ön ödeme yok, basılı bilet yok. Sadece buluşma noktasına gelin ve ekibimiz gerisini halletsin. Doğrudan teknede ödersiniz.'],
        ]],
        ['p', "Gerçekten hiçbir risk yok. Planlarınız değişir ve iptal etmeniz gerekirse, sadece WhatsApp'tan bize haber verin — kalkıştan birkaç saat öncesi bile sorun değil. İptal ücreti yok, soru sorulmaz."],
        ['p', "Yani bu akşam Boğaz akşamı gibi geliyorsa, fazla düşünmeyin. Hızlı bir WhatsApp mesajı gönderin ve birkaç saat içinde İstanbul silüeti etrafınızda parlarken suda yemek yiyeceksiniz."],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur', blurb: 'Paketler, fiyatlandırma ve ne beklenir hakkında eksiksiz rehber.' },
        'bosphorus-sunset-cruise-guide': { title: 'Boğaz Gün Batımı Turu Rehberi', blurb: 'Suda altın saat — nihai gün batımı deneyimi.' },
        'things-to-know-istanbul-boat-tour': { title: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey', blurb: 'İlk kez Boğaz turuna çıkanlar için temel ipuçları.' },
        'bosphorus-cruise-with-kids-family': { title: 'Çocuklarla Boğaz Turu — Aile Rehberi', blurb: '0-3 yaş ücretsiz aile dostu turlar.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Boğaz Gün Batımı Turu — Ne Beklenir ve Neden Buna Değer',
      desc: "İstanbul'un altın saatini sudan yaşayın. Kabataş'tan 17:30 kalkışlı, canlı şovlu 3 saatlik gün batımı akşam yemekli tur. Eksiksiz rehber içeride.",
      h1: 'Boğaz Gün Batımı Turu — Ne Beklenir ve Neden Buna Değer',
      alt: 'Cami siluetleriyle Boğaz boğazı üzerinde dramatik altın gün batımı',
      body: [
        ['p', "Fotoğrafçıların, çiftlerin ve deneyimli gezginlerin hepsinin aynı şeyi söylemesinin bir nedeni var: İstanbul'u en güzel halinde görmek istiyorsanız, gün batımını Boğaz'dan izleyin. Işığın suyu altına dönüştürmesi, minareleri kehribar tonlarında boyaması ve yavaşça şehrin akşam parıltısına yer vermesi — Türkiye'den ayrıldıktan çok sonra sizinle kalacak deneyimlerden biridir."],
        ['p', "Boğaz'daki gün batımı turu, bu doğal gösteriyi alır ve onu akşam yemeği, canlı eğlence ve hiçbir çatı barın eşleşemeyeceği panoramik manzaralarla tam bir akşam deneyimine dönüştürür."],
        ['h2', 'Gün Batımı Saati Neden Sihirli'],
        ['p', "İstanbul yaklaşık 41 derece kuzey enlemde yer alır, bu da yıl boyunca gün batımı sürelerinin önemli ölçüde değiştiği anlamına gelir. Yazın güneş yaklaşık 20:30'da batar, su üzerinde uzanan uzun bir altın saat yansıtır. İlkbahar ve sonbaharda gün batımı daha erken gelir — yaklaşık 18:00 ile 19:00 arasında — gündüzden geceye daha dramatik, daha hızlı bir geçiş yaratır. Her iki durumda da Boğaz doğal bir ayna gibi davranır, gökyüzünün renklerini yansıtır ve gösteriyi büyütür."],
        ['p', "Boğaz gün batımını eşsiz şekilde özel kılan şey silüettir. Güneş Avrupa yakasının arkasına düşerken, Süleymaniye Camii, Ayasofya ve Sultanahmet Camii'nin siluetleri turuncu-pembe gökyüzünde belirir. Bu arada Asya yakası, kıyı saraylarında ve yeşil yamaçlarında son sıcak ışığı yakalar. Tam anlamıyla güneşin iki kıta arasında battığını izliyorsunuz — Dünya'da bu perspektifi sunabilecek birkaç yer var."],
        ['h2', 'Tur Deneyimi'],
        ['p', "Gün batımı akşam yemekli tur genellikle Kabataş iskelesinden yaklaşık 17:30'da kalkar, ancak zamanlama altın saati zirvesinde yakalamak için mevsime göre hafifçe ayarlanır. Tekne boğaz boyunca kuzeye yönelir, size Dolmabahçe Sarayı, Çırağan Sarayı, Ortaköy Camii ve Boğaziçi Köprüsü manzaraları sunar — hepsi sıcak ışıkta yıkanır."],
        ['p', "Akşam yemeği güneş batmaya başladığında servis edilir. Menü Türk ve uluslararası yemekler içerir: soğuk meze tabakları, ızgara etler veya taze balık, mevsim sebzeleri ve baklava gibi geleneksel tatlılar. Meşrubatlar Standart pakette dahildir, Premium ve VIP seçenekleri alkollü içecekler ekler — ve gökyüzünün su üzerinde renk değiştirmesini izlerken bir bardak Türk şarabını yudumlamak özellikle hoştur."],
        ['p', "Karanlık çöktüğünde eğlence programı başlar. Geleneksel Türk halk oyunları, oryantal dans gösterisi, canlı müzik ve bazen dönen dervişler töreni kalan saatleri doldurur. Altın gün batımından şehrin gece aydınlatmasına geçiş kusursuzdur — bir an son ışığın söndüğünü izliyorsunuz, sonra İstanbul kıyısının parlayan ışıklarıyla çevrilisiniz."],
        ['h2', 'Fotoğraf İpuçları'],
        ['p', "Gün batımı turu bir fotoğrafçının rüyasıdır, ancak birkaç ipucu en iyi çekimleri elde etmenize yardımcı olur. İlk olarak, gün batımından yaklaşık 30 dakika önce üst güverteye çıkın — bu, ışığın en sıcak ve renklerin en canlı olduğu zamandır. Klasik minareler üzerinde gün batımı silüeti için batıya (Avrupa yakası) çekim yapın. Kompozisyonlarınıza derinlik eklemek için suyun yansımalarını kullanın."],
        ['p', "Akıllı telefon fotoğrafçıları için, hem parlak gökyüzünü hem de daha karanlık ön planı yakalamak için HDR modunu açın. Flaş kullanmaktan kaçının — ışığın doğal sıcaklığını mahveder. Panorama modu silüetin geniş yelpazesini yakalamak için güzel çalışır. Ve telefonu birkaç dakika bırakıp sadece izlemeyi unutmayın. Bazı anlar filme alınmaktan çok yaşanmakla daha iyidir."],
        ['h2', 'Ne Giymeli'],
        ['p', "Üst güverte rüzgarlı olacak, özellikle tekne hareket halindeyken. Sıcak bir yaz akşamında bile, gün batımından sonra suda sıcaklık belirgin şekilde düşer. Hafif bir ceket, hırka veya şal şarttır. Katmanlar en iyi sonucu verir — altın saatte bir tişörtle rahat olabilirsiniz ancak karanlık çöktüğünde ekstra bir katmana minnettar olursunuz. Bazı tutuşa sahip ayakkabılar, deniz spreyinden güverte hafifçe kaygan olabileceğinden topuklu veya kaygan tabanlı sandaletlerden daha iyidir."],
        ['h2', 'Gün Batımı Turu vs. Akşam Yemekli Tur — Fark Nedir?'],
        ['p', "Ana fark zaman ve atmosferdir. Gün batımı turu öğleden sonra geç saatlerde kalkar ve size o altın saat deneyimini artı geceye geçişi verir. Standart akşam yemekli tur daha geç kalkar (yaklaşık 20:00-20:30) ve tamamen gece deneyimidir — şehir ışıkları, aydınlatılmış köprüler ve daha karanlık, daha romantik bir ruh hali."],
        ['p', "İkisi arasında seçim yapıyorsanız, sizin için en önemli olanı düşünün. Gün batımı turu en iyi fotoğraf fırsatlarını ve daha çeşitli bir görsel deneyim (gündüzden geceye) sunar. Akşam yemekli tur, romantik bir akşam veya kutlama gecesi için klasik seçimdir, şehir başından sonuna kadar tamamen aydınlatılmıştır. Her ikisi de akşam yemeği ve tam eğlence programını içerir."],
        ['p', "Zamanı olanlar için ideal kombinasyon bir akşam gün batımı turu ve başka bir akşam akşam yemekli turdur — gerçekten farklı deneyimlerdir. Ancak yalnızca birini seçebiliyorsanız, gün batımı turu gerçekten benzersiz bir şey sunar: iki kıta etrafınızda gündüzden geceye solarken İstanbul'un altından gümüşe dönüşmesini izleme şansı."],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur', blurb: 'Paketler, fiyatlandırma ve ne beklenir hakkında eksiksiz rehber.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Bu Akşam Boğaz Turu — Son Dakika Rehberi', blurb: 'Anında WhatsApp onayıyla aynı gün tur rezervasyonu yapın.' },
        'things-to-know-istanbul-boat-tour': { title: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey', blurb: 'İlk kez Boğaz turuna çıkanlar için temel ipuçları.' },
        'bosphorus-cruise-with-kids-family': { title: 'Çocuklarla Boğaz Turu — Aile Rehberi', blurb: '0-3 yaş ücretsiz aile dostu turlar.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey',
      desc: 'Boğaz turu mu planlıyorsunuz? İşte 10 temel ipucu: ne giyileceği, getirileceği, ne beklenmesi gerektiği ve İstanbul tekne turunuzdan en iyi deneyimi nasıl alacağınız.',
      h1: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey',
      alt: "İstanbul silüetiyle Boğaz'da seyreden bir tur teknesinin panoramik manzarası",
      body: [
        ['p', "Boğaz turu, İstanbul'a gelen hemen her ziyaretçinin listesine koyduğu deneyimlerden biridir — ve haklı sebeple. Ancak herhangi bir seyahat deneyimi gibi, önceden birkaç şey bilmek iyi bir akşam ile harika bir akşam arasında fark yaratabilir. İstanbul tekne turunuzdan en iyi şekilde yararlanmanıza yardımcı olmak için ekibimizden on temel ipucu."],
        ['h2_sm', '1. Katman Katman Giyinin'],
        ['p', "Bu, her misafire verdiğimiz birinci tavsiyemizdir. İstanbul akşamları suda aldatıcı şekilde serin olabilir, yazın bile. Üst güverte sıcaklığı genellikle kıyıda hissettiğinizden 5 ila 8 derece daha düşüktür ve teknenin hareketinden gelen rüzgar onu daha da serin hissettirir. Hafif bir ceket, hırka veya pashmina şarttır. İlkbahar ve sonbahar aylarında, uygun bir ceket önerilir. Dışarı çıkıp açık güverteden manzaranın tadını çıkarmak istediğinizde getirdiğinize sevineceksiniz."],
        ['h2_sm', '2. Kamera Getirin (ve Telefonunuzu Şarjlı Tutun)'],
        ['p', "Boğaz geceleri olağanüstü fotojeniktir. Aydınlatılmış saraylar, renkli ışıklarla süslenmiş köprüler, alttan aydınlatılmış camiler ve karanlık suda yansıyan şehir silüeti — yakalamaya değer onlarca an olacak. Binmeden önce telefonunuzun tam şarjlı olduğundan emin olun veya küçük bir power bank getirin. Gece modu veya düşük ışık özelliği olan bir kameranız varsa, getirin. En iyi çekimlerden bazıları tekne Boğaziçi Köprüsü'nün altından geçerken üst güverteden gelir."],
        ['h2_sm', '3. En Az 20 Dakika Erken Gelin'],
        ['p', "Biniş, masa seçimi için ilk gelen, ilk hizmet alır esasındadır (rezerve pencere masası olan VIP paketi rezerve etmediyseniz). Belirtilen biniş saatinden 20 dakika önce gelmek, size pencerelere yakın veya sahneye yakın bir masa elde etme konusunda en iyi şansı verir. Buluşma noktası ekibimiz sizi tekneye yönlendirmek için orada olacak, ancak tam kalkış saatinde gelirseniz, daha az ideal bir masada olabilirsiniz."],
        ['h2_sm', '4. Doğru Tur Saatini Seçin'],
        ['p', "Genellikle iki tur seçeneği vardır: gün batımı turu (yaklaşık 17:30 kalkış) ve akşam yemekli tur (yaklaşık 20:00-20:30 kalkış). Gün batımı turu size altın saat deneyimini ve gündüzden geceye geçişi verir — fotoğrafçılar ve daha erken bir akşam tercih edenler için ideal. Akşam yemekli tur, şehir tamamen aydınlatılmış klasik gece deneyimidir. Her ikisi de tam bir akşam yemeği ve eğlence programı içerir. İlk kez geliyorsanız, akşam yemekli tur en popüler seçimdir."],
        ['h2_sm', '5. En Hızlı Yanıt İçin WhatsApp\'tan Rezerve Edin'],
        ['p', "Çeşitli çevrimiçi platformlar aracılığıyla Boğaz turlarını bulabilirsiniz, ancak doğrudan WhatsApp üzerinden rezervasyon yapmak en hızlı ve en esnek seçenektir. Anında yanıt alırsınız, gerçek zamanlı sorular sorabilirsiniz ve grup boyutunuza ve tercihlerinize göre kişisel öneriler alırsınız. Doldurulacak form yok ve e-posta onayları için beklemek yok. Sadece tarihinizi, misafir sayınızı ve tercih ettiğiniz paketi içeren bir mesaj gönderin, dakikalar içinde onaylı rezervasyonunuz olacak."],
        ['h2_sm', '6. Ön Ödeme Gerekmez'],
        ['p', "Bu birçok gezgini şaşırtır, ancak Bosphorus Night dahil saygın Boğaz tur operatörleri herhangi bir ön ödeme talep etmez. Yerinizi WhatsApp aracılığıyla rezerve eder, iskeleye gelir ve teknede ödersiniz. Bu, size finansal risk olmadığı anlamına gelir. Planlarınız değişirse, sadece bize haber verin ve ücret yoktur. Teknede ödeme nakit (Türk Lirası, Euro veya ABD Doları) veya kredi/banka kartı ile yapılabilir."],
        ['h2_sm', '7. Deniz Tutması Nadiren Sorun Olur'],
        ['p', "Boğaz bir boğazdır, açık deniz değil. Su, özellikle okyanus sularıyla karşılaştırıldığında nispeten sakindir. Tur tekneleri büyük ve kararlıdır ve rota sürekli olarak korunan boğazda kalır. Büyük çoğunluk misafir hareket rahatsızlığı yaşamaz. Özellikle hassassanız, teknenin merkezinde oturmak (pruva veya kıçta yerine) en kararlı yolculuğu sağlar. Midenizde yemek olması da yardımcı olur — bu yüzden akşam yemeği aslında iyi bir önlemdir."],
        ['h2_sm', '8. En İyi Fotoğraf Noktalarını Bilin'],
        ['p', "Turdaki en çok fotoğraflanan üç an: Boğaziçi Köprüsü'nün altından geçmek (ışıklar tam üstünüzde ve suda yansır), Kız Kulesi'nin boğazın ortasında yalnız durmasının görüntüsü ve eski şehir silüetinin camileri ve minareleriyle panoramik görünümü. Üst güverte fotoğraflar için en iyi engellenmemiş manzaraları sunar. Yemekler arasında veya eğlencedeki molalarda yukarı çıkın — personel masanızı sizin için tutacak."],
        ['h2_sm', '9. Çocuklar Hoş Karşılanır'],
        ['p', "Boğaz akşam yemekli turları aile dostudur. 6 yaş altı çocuklar ücretsiz yolculuk yapar ve 6 ila 12 yaş arası çocuklar yarı fiyat öder. Eğlence programı — özellikle halk oyunları ve müzik — çocukları büyüleme eğilimindedir. Tekneler güvenli ve geniştir, kapalı yemek alanları ve korumalı üst güverteleri vardır. Yine de, korkuluklar ve merdivenler yakınında küçük çocuklara göz kulak olun. Aile olarak seyahat ediyorsanız, uygun bir masa ayarlayabilmemiz için rezerve ederken bize bildirin."],
        ['h2_sm', '10. Ücretsiz İptal — Her Zaman'],
        ['p', "Hayat olur. Hava değişir, enerji seviyeleri düşer, planlar kayar. Bosphorus Night ile iptal her zaman ücretsizdir. Bir hafta önceden veya kalkıştan birkaç saat önce iptal etmeniz fark etmez, ücret yok ve ceza yok. Sadece bize bir WhatsApp mesajı gönderin. Bu, ön ödeme modelinin avantajlarından biridir — hiçbir şey ödemediğiniz için, iptal hızlı bir mesaj kadar basittir. Tadını çıkarmak için ruh halinde olduğunuzda gelmenizi tercih ederiz."],
        ['p_top', "Bu on ipucuyla donanmış, mümkün olan en iyi Boğaz turu deneyimine sahip olmaya hazırsınız. İstanbul'un gece güzelliği, tam bir Türk akşam yemeği ve canlı eğlencenin birleşimi, bunu dünyanın herhangi bir yerinde sahip olabileceğiniz en unutulmaz akşamlardan biri yapar. Sadece hatırlayın: katmanlar, şarjlı telefon ve erken gelin."],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur', blurb: 'Paketler, fiyatlandırma ve ne beklenir hakkında eksiksiz rehber.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Bu Akşam Boğaz Turu — Son Dakika Rehberi', blurb: 'Anında WhatsApp onayıyla aynı gün tur rezervasyonu yapın.' },
        'bosphorus-sunset-cruise-guide': { title: 'Boğaz Gün Batımı Turu Rehberi', blurb: 'Suda altın saat — nihai gün batımı deneyimi.' },
        'bosphorus-cruise-with-kids-family': { title: 'Çocuklarla Boğaz Turu — Aile Rehberi', blurb: '0-3 yaş ücretsiz aile dostu turlar.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Çocuklarla Boğaz Turu — İstanbul Aile Dostu Rehber',
      desc: 'Boğaz akşam yemekli tur çocuklar için uygun mu? Evet! 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. Aile ipuçları, ne beklenir ve nasıl rezerve edilir.',
      h1: 'Çocuklarla Boğaz Turu — Aile Dostu Rehber',
      alt: "Boğaz turunun açık güvertesinde keyif yapan aileler",
      body: [
        ['p', "İstanbul gezilerini planlayan ailelerden aldığımız en yaygın sorulardan biri: \"Boğaz akşam yemekli tur çocuklar için uygun mu?\" Cevap kararlı bir evet. Aslında, birçok aile turun tüm tatillerinin zirve noktası olduğunu söyler — sadece ebeveynler için değil, çocuklar için de. İşte ailenizi bir Boğaz turuna götürmek hakkında bilmeniz gereken her şey."],
        ['h2', 'Yaş Politikası ve Fiyatlandırma'],
        ['p', "Çocuklar için fiyatlandırmamız basit ve aile dostudur. 0-3 yaş arası çocuklar tamamen ücretsiz yolculuk yapar — bilet yok, ücret yok. 4-8 yaş arası çocuklar yetişkin fiyatının yarısını öder. 9 yaş ve üzeri çocuklar tam yetişkin ücretiyle ücretlendirilir. Bu her iki paket için de geçerlidir: Standart ve VIP."],
        ['p', "4-8 yaş arası iki çocuğu olan dört kişilik bir aile için, Boğaz akşam yemekli turu Standart paket için toplam €72 kadar düşük bir maliyettir — bu iki yetişkin bileti her biri €24 artı iki yarı fiyat çocuk bileti her biri €12. Tüm aile ile suda unutulmaz bir akşam için, bu turistik bölgelerde oturarak yenen restoranlara kıyasla mükemmel bir değer ifade eder."],
        ['h2', 'Çocuklar İçin Güvenli mi?'],
        ['p', "Boğaz akşam yemekli turlar için kullanılan tur tekneleri büyük, kararlı ticari gemilerdir — küçük özel tekneler değil. Alt güvertelerde kapalı yemek alanları ve üst güvertede uygun korkuluklar ve güvenlik bariyerleri bulunan açık seyir alanları vardır. Boğaz nispeten sakin sulara sahip bir boğazdır, bu nedenle yolculuk pürüzsüz ve kararlıdır. Deniz tutması, çocuklar arasında bile son derece nadirdir."],
        ['p', "Bununla birlikte, herhangi bir kıyı ortamında olduğu gibi, sağduyu geçerlidir. Merdivenler ve açık güverte alanları yakınında küçük çocuklara dikkatli bir göz atın. Mürettebat aile ile gemide bulunmaya alışkındır ve çocukların güvende kalmasını sağlamaya yardımcı olur, ancak ebeveyn denetimi her zaman güvenliğin ilk hattıdır."],
        ['h2', 'Çocukların En Çok Sevdiği Şeyler'],
        ['p', "Akşam yemekli turun öncelikle yetişkin bir deneyim olduğunu düşünebilirsiniz, ancak çocuklar akşamın çeşitli unsurlarına tutarlı bir şekilde tepki verir. Canlı eğlence en büyük hittir — renkli halk oyunları kostümleri, enerjik müzik ve özellikle oryantal dans gösterisi her yaştan çocuğu büyüleme eğilimindedir. Birçok çocuk alkışlayarak, koltuklarında dans ederek veya hareketleri taklit etmeye çalışarak son bulur."],
        ['p', "Tekne yolculuğunun kendisi, daha önce büyük bir gemide bulunmamış çocuklar için heyecan vericidir. Aydınlatılmış köprülerin tepeden geçtiğini izlemek, Kız Kulesi'ni görmek ve şehir ışıklarını sudan görmek genç gözler için gerçekten heyecan verici deneyimlerdir. Çocukların rüzgarı hissedebildiği ve suyun yanından geçtiğini görebildiği üst güverte genellikle favori bir yerdir."],
        ['p', "Daha büyük çocuklar (8 yaş ve üzeri) genellikle rota boyunca yer işaretleriyle ilgilenir hale gelir. Tekne onları geçerken sarayları, camileri ve kaleleri işaret etmek, turu resmi olmayan bir tarih dersine dönüştürebilir — özellikle gündüz bu siteleri ziyaret ettiyseniz."],
        ['h2', 'Çocuklar İçin Menü'],
        ['p', "Akşam yemeği menüsü set bir Türk ve uluslararası yayılımdır. Ayrı bir çocuk menüsü olmasa da, seçim çoğu çocuğun bol miktarda yiyecek bulmasına yeterince geniştir. Ekmek, pilav, ızgara tavuk ve salatalar hafif ve tanıdıktır. Soğuk meze seçimi, çocukların genellikle hoşlandığı humus ve peynir gibi öğeleri içerir. Tatlılar — özellikle baklava ve tatlı hamur işleri — daha genç misafirler arasında evrensel olarak popülerdir."],
        ['p', "Çocuğunuzun belirli diyet ihtiyaçları veya alerjileri varsa, rezerve ederken bize bildirin, mutfakla önceden kontrol edebiliriz. Meşrubatlar, su ve meyve suyu tüm paketlere dahildir, bu yüzden çocuklar susuz kalmaz."],
        ['h2', 'Aileler İçin İpuçları'],
        ['ul', [
          ['<strong class="text-white/80">Her çocuk için hafif bir ceket getirin</strong> — Üst güverte rüzgarlı olur ve çocuklar genellikle suyu ve ışıkları izleyerek dışarıda zaman geçirmek ister.'],
          ['<strong class="text-white/80">Gün batımı turunu düşünün</strong> — Daha erken kalkar (yaklaşık 17:30) ve 21:00\'da döner, bu da yaklaşık 23:30\'da dönen akşam yemekli turdan daha küçük çocukların yatma programları için daha iyi çalışır.'],
          ['<strong class="text-white/80">İyi bir masa için erken gelin</strong> — Sahneye yakın pencere kenarı masa çocuklara en iyi deneyimi verir. VIP paketleri bunu garanti eder, ancak Standart veya Premium için 20 dakika erken gelmek de yardımcı olur.'],
          ['<strong class="text-white/80">Küçük dikkat dağıtıcılar getirin</strong> — Eğlence ve manzaralar çoğu çocuğu meşgul tutsa da, küçük bir boyama kitabı veya film yüklü bir tablet, çok küçük çocuklar için daha sakin anlarda yardımcı olabilir.'],
          ['<strong class="text-white/80">Binmeden önce tuvaletleri kullanın</strong> — Teknede tuvaletler vardır, ancak pik anlarda yoğun olabilir. Kalkıştan önce hızlı bir ziyaret ilk saati daha pürüzsüz hale getirir.'],
        ]],
        ['h2', 'Aile Olarak Nasıl Rezervasyon Yapılır'],
        ['p', "Rezervasyon basittir. Yetişkin sayısı, çocuk sayısı ve yaşları, tercih ettiğiniz tarih ve hangi paketin sizi ilgilendirdiği ile bize bir WhatsApp mesajı gönderin. Toplamı hesaplayacağız (hatırlayın: 0-3 yaş ücretsiz, 4-8 yarı fiyat) ve müsaitliği anında onaylayacağız. Ön ödeme gerekmez — teknede ödersiniz."],
        ['p', "Aileniz için hangi paketin en uygun olduğundan emin değilseniz, sadece sorun. Çoğu aile için, Standart paket ihtiyacınız olan her şeyi sunar. Yetişkinler akşam yemeğiyle alkollü içeceklerin tadını çıkarmak istiyorsa, Premium yükseltme buna değer. Erken gelmeden garantili ön sıra koltuğu isteyen aileler için VIP paketi rezerve pencere masası ile idealdir."],
        ['p', "Boğaz turu, her yaş için gerçekten işe yarayan nadir İstanbul deneyimlerinden biridir. Çocuklarınız ışıkları, müziği ve geceleri suda olmanın macerasını sevecek. Tüm ailenin birlikte eğlenirken size manzaraları, yemeği ve birkaç saatlik bakımı seveceksiniz."],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'İstanbul 2026 En İyi Boğaz Akşam Yemekli Tur', blurb: 'Paketler, fiyatlandırma ve ne beklenir hakkında eksiksiz rehber.' },
        'things-to-know-istanbul-boat-tour': { title: 'İstanbul Tekne Turunuzdan Önce Bilmeniz Gereken 10 Şey', blurb: 'İlk kez Boğaz turuna çıkanlar için temel ipuçları.' },
        'bosphorus-sunset-cruise-guide': { title: 'Boğaz Gün Batımı Turu Rehberi', blurb: 'Suda altın saat — nihai gün batımı deneyimi.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Bu Akşam Boğaz Turu — Son Dakika Rehberi', blurb: 'Anında WhatsApp onayıyla aynı gün tur rezervasyonu yapın.' },
      },
    },
  },

  de: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: 'Bosphorus-Bootsfahrt-Tipps, Reiseführer und Insider-Wissen. Planen Sie Ihre perfekte Istanbul-Dinner-Bootsfahrt mit unseren Expertenartikeln.',
      ogDesc: 'Bosphorus-Bootsfahrt-Tipps, Reiseführer und Insider-Wissen. Planen Sie Ihre perfekte Istanbul-Dinner-Bootsfahrt.',
      h1: 'Blog',
      lead: 'Tipps zur Bootsfahrt, Istanbul-Reiseführer und Insider-Wissen, das Ihnen hilft, das perfekte Bosphorus-Erlebnis zu planen.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11. April 2026', title: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026', blurb: 'Alles, was Sie über Istanbuls bestbewertete Dinner-Bootsfahrt wissen müssen. Von Paketen und Preisen über Unterhaltung bis zu atemberaubenden Nachtansichten.', alt: 'Bosphorus-Dinner-Bootsfahrt nachts mit beleuchteter Brücke' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11. April 2026', title: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Buchungsführer', blurb: 'Möchten Sie heute Abend auf dem Bosphorus fahren? Hier ist alles, was Sie über Last-Minute-Buchungen, Verfügbarkeit und Platzsicherung wissen müssen.', alt: 'Innenraum eines luxuriösen Bosphorus-Bootsfahrt-Speisesaals' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10. April 2026', title: 'Bosphorus-Sonnenuntergangs-Bootsfahrt-Reiseführer', blurb: 'Erleben Sie Istanbuls Goldene Stunde vom Wasser aus. Alles über die Sonnenuntergangs-Dinner-Bootsfahrt — Zeitplan, was zu erwarten ist und warum es unvergesslich ist.', alt: 'Dramatischer Sonnenuntergang über der Meerenge von Bosphorus' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9. April 2026', title: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour', blurb: 'Planen Sie eine Bosphorus-Bootsfahrt? Von Kleidungstipps bis zu Seekrankheitstipps — hier sind 10 wesentliche Dinge, die jeder Erstbesucher wissen sollte.', alt: 'Panoramablick auf ein Boot auf dem Bosphorus' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8. April 2026', title: 'Bosphorus-Bootsfahrt mit Kindern — Familienführer', blurb: 'Ist eine Dinner-Bootsfahrt für Kinder geeignet? Absolut. Kinder unter 6 fahren kostenlos, 6-12 Jahre halbiert. Hier ist Ihr vollständiger Familienplanungsführer.', alt: 'Familien genießen das Deck einer Bosphorus-Bootsfahrt' },
      ],
      readMore: 'Mehr lesen →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026 — Vollständiger Leitfaden',
      desc: 'Alles, was Sie über Istanbuls beste Dinner-Bootsfahrt wissen müssen. Pakete ab €24, türkische Live-Shows, atemberaubende Nachtansichten. Sofort buchen.',
      h1: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026',
      alt: 'Luxuskreuzfahrtboot, das nachts unter der beleuchteten Bosphorus-Brücke gleitet',
      body: [
        ['p', 'Istanbul ist eine der wenigen Städte der Welt, in der Sie auf dem Wasser speisen können, während zwei Kontinente um Sie herum erstrahlen. Eine Bosphorus-Dinner-Bootsfahrt ist nicht nur eine Mahlzeit — sie ist das ikonischste Abenderlebnis, das die Stadt zu bieten hat. Egal, ob Sie Istanbul zum ersten Mal besuchen oder für eine weitere Reise zurückkehren, eine Nacht auf dem Bosphorus zu verbringen ist etwas, an das Sie sich jahrelang erinnern werden.'],
        ['h2', 'Was es besonders macht'],
        ['p', 'Der Bosphorus ist eine 30 Kilometer lange Wasserstraße, die Europa und Asien trennt. Nachts werden die historischen Paläste, Moscheen und Brücken entlang seiner Ufer auf spektakuläre Weise beleuchtet. Von Ihrem Tisch auf dem Boot aus sehen Sie den Dolmabahçe-Palast weiß gegen den dunklen Hügel leuchten, den Jungfrauenturm, der allein im Wasser mit seinem warmen gelben Licht steht, und die beiden großen Hängebrücken — die Bosphorus-Brücke und die Fatih-Sultan-Mehmet-Brücke — die sich zwischen den Kontinenten in farbigen Bändern erstrecken.'],
        ['p', 'Die Bootsfahrtroute startet typischerweise vom Pier Kabataş in der Nähe des Dolmabahçe-Palastes. Das Boot fährt nordwärts entlang der europäischen Küste, vorbei an den verzierten Uferresidenzen, die als yalı bekannt sind, dem Çırağan-Palast und der Festung Rumeli. Dann biegt es südwärts entlang der asiatischen Seite ab und bietet Ansichten des Beylerbeyi-Palastes und der Uferpromenade von Üsküdar, bevor es zurückkehrt. Die gesamte Reise dauert je nach Paket etwa drei bis vier Stunden.'],
        ['h2', 'Das Dinnererlebnis'],
        ['p', 'Das Abendessen wird als festes Menü serviert, das türkische und internationale Küche verbindet. Sie können eine Auswahl an kalten und warmen Vorspeisen erwarten — Hummus, gefüllte Weinblätter, saisonale Salate — gefolgt von einem Hauptgericht aus gegrilltem Fleisch oder Fisch mit Reis und gerösteten Gemüsen. Das Dessert ist typischerweise eine klassische türkische Süßspeise wie Baklava oder Kadayıf, kombiniert mit türkischem Tee oder Kaffee. Alkoholfreie Getränke und Wasser sind in allen Paketen enthalten, alkoholische Getränke sind mit Premium- und VIP-Optionen verfügbar.'],
        ['h2', 'Live-Unterhaltung'],
        ['p', 'Das Unterhaltungsprogramm ist eines der Highlights. Erwarten Sie eine komplette Reihe traditioneller türkischer Volkstänze in bunten regionalen Kostümen, eine energiegeladene Bauchtanzaufführung, Live-Musik einer türkischen Band und ein DJ-Set, das die Stimmung im Laufe des Abends aufrechterhält. Einige Bootsfahrten bieten auch eine Zeremonie der wirbelnden Derwische — eine faszinierende spirituelle Sufi-Praxis, die seit Jahrhunderten Teil der türkischen Kultur ist. Die Show dauert etwa 90 Minuten und ist darauf ausgelegt, internationalen Gästen einen reichen Geschmack der türkischen darstellenden Künste zu bieten.'],
        ['h2', 'Pakete und Preise'],
        ['p', 'Bei Bosphorus Night bieten wir zwei Hauptpakete mit optionalen Add-ons für Getränke, Hoteltransfer und besondere Anlässe an:'],
        ['ul', [
          ['<strong class="text-white/80">Standard-Dinner-Bootsfahrt (ab €24)</strong> — Vollständiges 4-Gänge-Menü, alkoholfreie Getränke, Live-Unterhaltung, Volkstanz und Bauchtanz-Shows, DJ auf dem Oberdeck. Die beliebteste Option für Paare, Familien und Alleinreisende.'],
          ['<strong class="text-white/80">VIP-Dinner-Bootsfahrt (ab €55)</strong> — Erweitertes Menü mit Premium-Fleisch (Rib-Eye, Rinderfilet), 15+ türkischen Meze, bühnennahem Sitzplatz und gehobenem Service. Perfekt für besondere Anlässe und Jubiläen.'],
        ]],
        ['p_sm', 'Add-ons: unbegrenzte Getränke (€30/Person), Hoteltransfer (€10/Person), romantische Tischdekoration (€15/Buchung). Bezahlung an Bord — keine Vorauszahlung erforderlich.'],
        ['p', 'Kinder im Alter von 6 bis 12 Jahren zahlen normalerweise den halben Preis, und Kinder unter 6 Jahren fahren kostenlos. Keine Vorauszahlung erforderlich — Sie zahlen an Bord, was jegliches Buchungsrisiko eliminiert.'],
        ['h2', 'Wie man bucht'],
        ['p', 'Der einfachste Weg zu buchen ist über WhatsApp. Senden Sie uns einfach eine Nachricht mit Ihrem Wunschtermin, der Anzahl der Gäste und welches Paket Sie interessiert. Unser Team antwortet innerhalb weniger Minuten, bestätigt die Verfügbarkeit und sendet Ihnen alle Details — Treffpunkt, Einschiffungszeit und was zu erwarten ist. Es gibt kein Online-Zahlungsformular und keine Anzahlung. Sie zahlen bar oder mit Karte direkt an Bord.'],
        ['h2', 'Tipps für das beste Erlebnis'],
        ['p', 'Kommen Sie mindestens 20 Minuten vor der Abfahrt am Pier an, um einen guten Tisch zu bekommen. Kleiden Sie sich smart casual — das Boot ist nicht übermäßig formell, aber Sie werden sich in etwas wohler fühlen, das einen Schritt über Strandkleidung hinausgeht. Bringen Sie eine leichte Jacke oder einen Schal mit, da das Oberdeck auch im Sommer windig sein kann. Und halten Sie Ihr Telefon geladen — Sie werden die Aussichten festhalten wollen, besonders wenn das Boot unter den beleuchteten Brücken hindurchfährt.'],
        ['p', 'Eine Bosphorus-Dinner-Bootsfahrt ist, ohne Übertreibung, der beste Weg, Istanbul nachts zu erleben. Die Kombination aus Essen, lebendiger Kultur und Aussichten auf die Skyline der Stadt, die sich im dunklen Wasser spiegelt, ist mit nichts anderem zu vergleichen. Wenn Sie während Ihrer Istanbul-Reise nur einen „großen Abend" verbringen, sollte es dieser sein.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Führer', blurb: 'Buchen Sie eine Bootsfahrt am selben Tag mit sofortiger WhatsApp-Bestätigung.' },
        'bosphorus-sunset-cruise-guide': { title: 'Bosphorus-Sonnenuntergangs-Bootsfahrt-Führer', blurb: 'Goldene Stunde auf dem Wasser — das ultimative Sonnenuntergangserlebnis.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour', blurb: 'Wesentliche Tipps für Erstreisende auf dem Bosphorus.' },
        'bosphorus-cruise-with-kids-family': { title: 'Bosphorus-Bootsfahrt mit Kindern — Familienführer', blurb: 'Familienfreundliche Bootsfahrten mit Kindern unter 6 kostenlos.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Buchungsführer Istanbul',
      desc: 'Möchten Sie heute Abend auf dem Bosphorus fahren? Hier ist, wie Sie eine Last-Minute-Dinner-Bootsfahrt in Istanbul buchen. Verfügbarkeit am selben Tag, sofortige WhatsApp-Buchung.',
      h1: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Buchungsführer',
      alt: 'Eleganter Speisesaal einer Bosphorus-Dinner-Bootsfahrt',
      body: [
        ['p', 'Es ist 15 Uhr und Sie haben gerade beschlossen, heute Abend etwas Besonderes zu unternehmen. Vielleicht sind Sie heute Morgen in Istanbul angekommen und möchten das Beste aus Ihrem ersten Abend machen. Vielleicht ist das Wetter besser als erwartet und eine Nacht auf dem Wasser klingt plötzlich perfekt. Was auch immer der Grund ist, die Frage ist einfach: Können Sie noch eine Bosphorus-Dinner-Bootsfahrt für heute Abend buchen?'],
        ['p', 'Die kurze Antwort ist <strong class="text-white/90">ja</strong>. Buchungen am selben Tag sind nicht nur möglich — sie sind üblich. Hier ist alles, was Sie über die Buchung einer Last-Minute-Bootsfahrt in Istanbul wissen müssen.'],
        ['h2', 'Können Sie wirklich am selben Tag buchen?'],
        ['p', 'Absolut. Im Gegensatz zu vielen Touristenaktivitäten, die Vorausbuchungen erfordern, betreiben Bosphorus-Dinner-Bootsfahrten große Schiffe, die Hunderte von Gästen aufnehmen können. Das bedeutet, dass fast immer Verfügbarkeit besteht, sogar am selben Tag. In den Sommerhochmonaten (Juli und August) können Wochenend-Bootsfahrten schneller ausgebucht sein, aber Wochentagsfahrten sind selten vollständig ausverkauft. Im Frühling und Herbst sind Last-Minute-Plätze praktisch garantiert.'],
        ['p', 'Bei Bosphorus Night halten wir unsere WhatsApp-Linie vom frühen Morgen bis spät am Abend genau deshalb offen, weil wir wissen, dass viele Gäste am selben Tag entscheiden. Unser Team kann Ihre Buchung innerhalb weniger Minuten nach Ihrer Nachricht bestätigen.'],
        ['h2', 'Welche Touren finden heute Abend statt?'],
        ['p', 'Die Standard-Dinner-Bootsfahrt startet täglich vom Pier Kabataş. Der typische Zeitplan funktioniert so: Die Einschiffung beginnt gegen 19:30 bis 20:00 Uhr, das Boot fährt etwa um 20:30 Uhr ab, und die Bootsfahrt dauert etwa drei Stunden und kehrt gegen 23:30 Uhr zum Pier zurück. Einige Betreiber bieten auch eine Sonnenuntergangs-Bootsfahrt an, die gegen 17:30 Uhr abfährt und um 21:00 Uhr zurückkehrt — obwohl für eine Last-Minute-Entscheidung am Nachmittag die abendliche Dinner-Bootsfahrt die praktischere Option ist.'],
        ['p', 'Beide Pakete — Standard und VIP — sind für Same-Day-Buchungen verfügbar. Das Standardpaket beginnt bei €24 pro Person und beinhaltet das vollständige 4-Gänge-Menü, alkoholfreie Getränke und das Unterhaltungsprogramm. Sie müssen Ihr Paket nicht im Voraus auswählen; senden Sie uns einfach eine Nachricht auf WhatsApp, und wir führen Sie durch die Optionen.'],
        ['h2', 'Wie man nach Kabataş kommt'],
        ['p', 'Kabataş ist einer der am besten erreichbaren Punkte in Istanbul. Wenn Sie in Sultanahmet (Altstadt) wohnen, fährt die Straßenbahn T1 direkt nach Kabataş — es ist die Endhaltestelle. Die Fahrt dauert etwa 25 Minuten. Von Taksim aus können Sie die Standseilbahn (Linie F1) nehmen, die in weniger als drei Minuten direkt nach Kabataş hinunterfährt. Von der asiatischen Seite nehmen Sie eine Fähre nach Kabataş oder Beşiktaş. Taxis aus den meisten zentralen Bereichen kosten zwischen 100-200 TL, je nach Verkehr und Entfernung.'],
        ['p', 'Wir empfehlen, spätestens um 19:30 Uhr am Pier zu sein. Dies gibt Ihnen Zeit, den Treffpunkt zu finden, unser Teammitglied zu treffen, das Sie zum Boot führen wird, und sich vor der Abfahrt an Ihrem Tisch niederzulassen.'],
        ['h2', 'Was mitbringen'],
        ['p', 'Halten Sie es einfach. Bringen Sie Ihr Telefon für Fotos, eine leichte Jacke oder einen Cardigan für das Oberdeck mit (auch Sommerabende können auf dem Wasser windig sein) und Bargeld oder eine Karte für die Zahlung an Bord. Es gibt keinen Dresscode, aber smart casual funktioniert am besten — denken Sie an ein schönes Hemd oder eine Bluse statt Shorts und Flip-Flops. Damen möchten vielleicht ein Haarband oder einen Schal, da der Wind zunimmt, sobald das Boot in Bewegung ist.'],
        ['h2', 'Der Buchungsprozess'],
        ['p', 'So funktioniert es in drei schnellen Schritten:'],
        ['ol', [
          ['<strong class="text-white/80">Senden Sie uns eine Nachricht auf WhatsApp</strong> — Teilen Sie uns mit, wie viele Gäste, Ihr bevorzugtes Paket (oder bitten Sie um eine Empfehlung) und bestätigen Sie das heutige Datum.'],
          ['<strong class="text-white/80">Erhalten Sie sofortige Bestätigung</strong> — Wir antworten innerhalb weniger Minuten mit der Adresse des Treffpunkts, der Einschiffungszeit und allen anderen Details, die Sie benötigen.'],
          ['<strong class="text-white/80">Erscheinen und genießen</strong> — Keine Anzahlung, keine Vorauszahlung, keine gedruckten Tickets. Kommen Sie einfach zum Treffpunkt, und unser Team kümmert sich um den Rest. Sie zahlen direkt an Bord.'],
        ]],
        ['p', 'Es gibt wirklich kein Risiko. Wenn sich Ihre Pläne ändern und Sie stornieren müssen, lassen Sie uns einfach Bescheid auf WhatsApp — selbst ein paar Stunden vor der Abfahrt ist in Ordnung. Keine Stornierungsgebühren, keine Fragen.'],
        ['p', 'Also, wenn sich heute Abend wie eine Bosphorus-Nacht anfühlt, denken Sie nicht zu viel darüber nach. Senden Sie eine schnelle WhatsApp-Nachricht, und in wenigen Stunden werden Sie auf dem Wasser dinieren, während Istanbuls Skyline um Sie herum leuchtet.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026', blurb: 'Vollständiger Leitfaden zu Paketen, Preisen und was zu erwarten ist.' },
        'bosphorus-sunset-cruise-guide': { title: 'Bosphorus-Sonnenuntergangs-Bootsfahrt-Führer', blurb: 'Goldene Stunde auf dem Wasser — das ultimative Sonnenuntergangserlebnis.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour', blurb: 'Wesentliche Tipps für Erstreisende auf dem Bosphorus.' },
        'bosphorus-cruise-with-kids-family': { title: 'Bosphorus-Bootsfahrt mit Kindern — Familienführer', blurb: 'Familienfreundliche Bootsfahrten mit Kindern unter 6 kostenlos.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Bosphorus-Sonnenuntergangs-Bootsfahrt — Was Sie erwartet und warum es sich lohnt',
      desc: 'Erleben Sie Istanbuls Goldene Stunde vom Wasser aus. 3-stündige Sonnenuntergangs-Dinner-Bootsfahrt mit Live-Shows, Abfahrt 17:30 Uhr ab Kabataş. Vollständiger Führer drinnen.',
      h1: 'Bosphorus-Sonnenuntergangs-Bootsfahrt — Was Sie erwartet und warum es sich lohnt',
      alt: 'Dramatischer goldener Sonnenuntergang über der Meerenge von Bosphorus mit Moschee-Silhouetten',
      body: [
        ['p', 'Es gibt einen Grund, warum Fotografen, Paare und erfahrene Reisende alle dasselbe sagen: Wenn Sie Istanbul in seiner schönsten Form sehen möchten, beobachten Sie den Sonnenuntergang vom Bosphorus aus. Die Art, wie das Licht das Wasser in Gold verwandelt, die Minarette in Bernsteintönen bemalt und langsam dem Abendglanz der Stadt weicht — es ist eine dieser Erfahrungen, die lange bei Ihnen bleiben, nachdem Sie die Türkei verlassen haben.'],
        ['p', 'Eine Sonnenuntergangs-Bootsfahrt auf dem Bosphorus nimmt dieses Naturschauspiel und verwandelt es in ein komplettes Abenderlebnis mit Abendessen, Live-Unterhaltung und Panoramablicken, mit denen keine Dachbar mithalten kann.'],
        ['h2', 'Warum die Sonnenuntergangsstunde magisch ist'],
        ['p', 'Istanbul liegt auf etwa 41 Grad nördlicher Breite, was bedeutet, dass die Sonnenuntergangszeiten im Laufe des Jahres erheblich variieren. Im Sommer geht die Sonne gegen 20:30 Uhr unter und wirft eine lange goldene Stunde über das Wasser. Im Frühling und Herbst kommt der Sonnenuntergang früher — gegen 18:00 bis 19:00 Uhr — und schafft einen dramatischeren, schnelleren Übergang vom Tag zur Nacht. In beiden Fällen fungiert der Bosphorus als natürlicher Spiegel, reflektiert die Farben des Himmels und verstärkt das Spektakel.'],
        ['p', 'Was den Sonnenuntergang am Bosphorus einzigartig macht, ist die Skyline. Während die Sonne hinter der europäischen Seite versinkt, erscheinen die Silhouetten der Süleymaniye-Moschee, der Hagia Sophia und der Blauen Moschee vor dem orange-rosa Himmel. Inzwischen fängt die asiatische Seite das letzte warme Licht auf ihren Uferpalästen und grünen Hügeln ein. Sie sehen buchstäblich die Sonne zwischen zwei Kontinenten untergehen — wenige Orte auf der Erde können diese Perspektive bieten.'],
        ['h2', 'Das Bootsfahrt-Erlebnis'],
        ['p', 'Die Sonnenuntergangs-Dinner-Bootsfahrt startet typischerweise gegen 17:30 Uhr vom Pier Kabataş, obwohl die Zeit leicht an die Jahreszeiten angepasst wird, um die Goldene Stunde auf ihrem Höhepunkt zu erfassen. Das Boot fährt nordwärts entlang der Meerenge und bietet Ihnen Ausblicke auf den Dolmabahçe-Palast, den Çırağan-Palast, die Ortaköy-Moschee und die Bosphorus-Brücke — alle in warmes Licht gebadet.'],
        ['p', 'Das Abendessen wird serviert, wenn die Sonne untergeht. Das Menü bietet eine Mischung aus türkischen und internationalen Gerichten: kalte Meze-Platten, gegrilltes Fleisch oder frischer Fisch, saisonale Gemüse und traditionelle Desserts wie Baklava. Alkoholfreie Getränke sind im Standardpaket enthalten, während die Premium- und VIP-Optionen alkoholische Getränke hinzufügen — und es ist besonders angenehm, ein Glas türkischen Wein zu schlürfen, während man dem Himmel beim Farbwechsel über dem Wasser zusieht.'],
        ['p', 'Wenn die Dunkelheit einbricht, beginnt das Unterhaltungsprogramm. Traditionelle türkische Volkstänze, eine Bauchtanzaufführung, Live-Musik und manchmal eine Zeremonie der wirbelnden Derwische füllen die restlichen Stunden. Der Übergang vom goldenen Sonnenuntergang zur nächtlichen Beleuchtung der Stadt ist nahtlos — in einem Moment sehen Sie das letzte Licht verblassen, und im nächsten sind Sie von den funkelnden Lichtern der Uferpromenade Istanbuls umgeben.'],
        ['h2', 'Fotografietipps'],
        ['p', 'Die Sonnenuntergangs-Bootsfahrt ist ein Traum für Fotografen, aber ein paar Tipps helfen Ihnen, die besten Aufnahmen zu machen. Erstens, gehen Sie etwa 30 Minuten vor Sonnenuntergang auf das Oberdeck — dann ist das Licht am wärmsten und die Farben am lebendigsten. Fotografieren Sie nach Westen (europäische Seite) für die klassische Sonnenuntergangs-über-Minaretten-Silhouette. Verwenden Sie die Reflexionen des Wassers, um Ihren Kompositionen Tiefe zu verleihen.'],
        ['p', 'Für Smartphone-Fotografen schalten Sie den HDR-Modus ein, um sowohl den hellen Himmel als auch den dunkleren Vordergrund zu erfassen. Vermeiden Sie den Blitz — er ruiniert die natürliche Wärme des Lichts. Der Panorama-Modus funktioniert wunderbar, um den breiten Schwung der Skyline einzufangen. Und vergessen Sie nicht, das Telefon ein paar Minuten beiseite zu legen und einfach zu schauen. Einige Momente werden besser erlebt als gefilmt.'],
        ['h2', 'Was anziehen'],
        ['p', 'Das Oberdeck wird windig sein, besonders wenn das Boot in Bewegung ist. Selbst an einem warmen Sommerabend sinkt die Temperatur nach Sonnenuntergang auf dem Wasser merklich. Eine leichte Jacke, ein Cardigan oder ein Schal ist unerlässlich. Schichten funktionieren am besten — Sie können während der goldenen Stunde in einem T-Shirt bequem sein, aber dankbar für eine zusätzliche Schicht, wenn die Dunkelheit einbricht. Schuhe mit etwas Grip sind besser als Absätze oder Sandalen mit glatter Sohle, da das Deck leicht rutschig durch Meeressprühnebel sein kann.'],
        ['h2', 'Sonnenuntergangs-Bootsfahrt vs. Dinner-Bootsfahrt — Was ist der Unterschied?'],
        ['p', 'Der Hauptunterschied liegt in Zeit und Atmosphäre. Die Sonnenuntergangs-Bootsfahrt startet am späten Nachmittag und bietet Ihnen das Erlebnis der Goldenen Stunde plus den Übergang zur Nacht. Die Standard-Dinner-Bootsfahrt startet später (gegen 20:00-20:30 Uhr) und ist vollständig ein Nachterlebnis — Stadtlichter, beleuchtete Brücken und eine dunklere, romantischere Stimmung.'],
        ['p', 'Wenn Sie zwischen den beiden wählen, überlegen Sie, was Ihnen am wichtigsten ist. Die Sonnenuntergangs-Bootsfahrt bietet die besten Fotomöglichkeiten und ein vielfältigeres visuelles Erlebnis (Tag zu Nacht). Die Dinner-Bootsfahrt ist die klassische Wahl für einen romantischen Abend oder eine festliche Nacht, mit der Stadt von Anfang an vollständig beleuchtet. Beide beinhalten Abendessen und das vollständige Unterhaltungsprogramm.'],
        ['p', 'Für diejenigen, die Zeit haben, ist die ideale Kombination eine Sonnenuntergangs-Bootsfahrt an einem Abend und eine Dinner-Bootsfahrt an einem anderen — es sind wirklich unterschiedliche Erlebnisse. Aber wenn Sie nur eines wählen können, bietet die Sonnenuntergangs-Bootsfahrt etwas wirklich Einzigartiges: die Chance, zu beobachten, wie sich Istanbul von Gold zu Silber verwandelt, während zwei Kontinente vom Tag zur Nacht um Sie herum verblassen.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026', blurb: 'Vollständiger Leitfaden zu Paketen, Preisen und was zu erwarten ist.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Führer', blurb: 'Buchen Sie eine Bootsfahrt am selben Tag mit sofortiger WhatsApp-Bestätigung.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour', blurb: 'Wesentliche Tipps für Erstreisende auf dem Bosphorus.' },
        'bosphorus-cruise-with-kids-family': { title: 'Bosphorus-Bootsfahrt mit Kindern — Familienführer', blurb: 'Familienfreundliche Bootsfahrten mit Kindern unter 6 kostenlos.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour',
      desc: 'Planen Sie eine Bosphorus-Bootsfahrt? Hier sind 10 wesentliche Tipps: was zu tragen, mitzubringen, zu erwarten und wie Sie das beste Erlebnis auf Ihrer Istanbul-Bootstour bekommen.',
      h1: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour',
      alt: 'Panoramablick auf ein Bootsfahrtboot auf dem Bosphorus mit der Skyline von Istanbul',
      body: [
        ['p', 'Eine Bosphorus-Bootsfahrt ist eine jener Erfahrungen, die praktisch jeder Besucher Istanbuls auf seine Liste setzt — und das aus gutem Grund. Aber wie bei jeder Reiseerfahrung kann das Wissen um ein paar Dinge im Voraus den Unterschied zwischen einem guten und einem großartigen Abend ausmachen. Hier sind zehn wesentliche Tipps unseres Teams, die Ihnen helfen, das Beste aus Ihrer Istanbul-Bootstour herauszuholen.'],
        ['h2_sm', '1. Kleiden Sie sich in Schichten'],
        ['p', 'Dies ist der Ratschlag Nummer eins, den wir jedem Gast geben. Istanbuler Abende können auf dem Wasser täuschend kühl sein, selbst im Sommer. Die Temperatur auf dem Oberdeck ist normalerweise 5 bis 8 Grad niedriger als am Ufer, und der Wind durch die Bewegung des Bootes lässt es noch kühler erscheinen. Eine leichte Jacke, ein Cardigan oder eine Pashmina ist unerlässlich. In den Frühlings- und Herbstmonaten wird eine richtige Jacke empfohlen. Sie werden froh sein, sie mitgebracht zu haben, wenn Sie hinausgehen und die Aussichten vom offenen Deck genießen möchten.'],
        ['h2_sm', '2. Bringen Sie eine Kamera mit (und halten Sie Ihr Telefon geladen)'],
        ['p', 'Der Bosphorus ist nachts außergewöhnlich fotogen. Beleuchtete Paläste, mit bunten Lichtern bespannte Brücken, von unten beleuchtete Moscheen und die Skyline der Stadt, die sich im dunklen Wasser spiegelt — es wird Dutzende von einfangwürdigen Momenten geben. Stellen Sie sicher, dass Ihr Telefon vor dem Einschiffen voll geladen ist, oder bringen Sie eine kleine Powerbank mit. Wenn Sie eine Kamera mit Nachtmodus oder Schwachlichtfähigkeit haben, bringen Sie sie mit. Einige der besten Aufnahmen kommen vom Oberdeck, wenn das Boot unter der Bosphorus-Brücke hindurchfährt.'],
        ['h2_sm', '3. Mindestens 20 Minuten früher ankommen'],
        ['p', 'Die Einschiffung erfolgt nach dem Prinzip „Wer zuerst kommt, mahlt zuerst" bei der Tischauswahl (es sei denn, Sie haben ein VIP-Paket mit reserviertem Fenstertisch gebucht). Wenn Sie 20 Minuten vor der angegebenen Einschiffungszeit ankommen, haben Sie die besten Chancen, einen Tisch in der Nähe der Fenster oder in der Nähe der Bühne zu bekommen. Unser Treffpunkt-Team wird dort sein, um Sie zum Boot zu führen, aber wenn Sie genau zur Abfahrtszeit ankommen, landen Sie möglicherweise an einem weniger idealen Tisch.'],
        ['h2_sm', '4. Wählen Sie die richtige Tourzeit'],
        ['p', 'Es gibt normalerweise zwei Bootsfahrt-Optionen: die Sonnenuntergangs-Bootsfahrt (Abfahrt gegen 17:30 Uhr) und die Dinner-Bootsfahrt (Abfahrt gegen 20:00-20:30 Uhr). Die Sonnenuntergangs-Bootsfahrt bietet Ihnen das Goldene-Stunden-Erlebnis und den Übergang von Tag zu Nacht — ideal für Fotografen und diejenigen, die einen früheren Abend bevorzugen. Die Dinner-Bootsfahrt ist das klassische Nachterlebnis mit der vollständig beleuchteten Stadt. Beide beinhalten ein komplettes Abendessen und Unterhaltungsprogramm. Wenn dies Ihr erstes Mal ist, ist die Dinner-Bootsfahrt die beliebteste Wahl.'],
        ['h2_sm', '5. Buchen Sie über WhatsApp für die schnellste Antwort'],
        ['p', 'Während Sie Bosphorus-Bootsfahrten über verschiedene Online-Plattformen finden können, ist die direkte Buchung über WhatsApp die schnellste und flexibelste Option. Sie erhalten eine sofortige Antwort, können Fragen in Echtzeit stellen und persönliche Empfehlungen basierend auf Ihrer Gruppengröße und Vorlieben erhalten. Es gibt kein Formular auszufüllen und kein Warten auf E-Mail-Bestätigungen. Senden Sie einfach eine Nachricht mit Ihrem Datum, der Anzahl der Gäste und dem bevorzugten Paket, und Sie haben innerhalb weniger Minuten eine bestätigte Buchung.'],
        ['h2_sm', '6. Keine Vorauszahlung erforderlich'],
        ['p', 'Dies überrascht viele Reisende, aber seriöse Bosphorus-Bootsfahrtbetreiber — einschließlich Bosphorus Night — verlangen keine Vorauszahlung. Sie buchen Ihren Platz über WhatsApp, kommen am Pier an und zahlen an Bord. Das bedeutet, dass es kein finanzielles Risiko für Sie gibt. Wenn sich Ihre Pläne ändern, lassen Sie es uns einfach wissen, und es gibt keine Gebühr. Die Zahlung an Bord kann bar (türkische Lira, Euro oder US-Dollar) oder mit Kredit-/Debitkarte erfolgen.'],
        ['h2_sm', '7. Seekrankheit ist selten ein Problem'],
        ['p', 'Der Bosphorus ist eine Meerenge, kein offenes Meer. Das Wasser ist relativ ruhig, besonders im Vergleich zu Meereswassern. Die Bootsfahrtboote sind groß und stabil, und die Route bleibt die ganze Zeit in der geschützten Meerenge. Die überwiegende Mehrheit der Gäste erlebt überhaupt kein Bewegungsunbehagen. Wenn Sie besonders empfindlich sind, bietet das Sitzen in der Mitte des Bootes (anstatt am Bug oder Heck) die stabilste Fahrt. Auch Essen im Magen hilft — also ist das Abendessen tatsächlich eine gute Vorbeugung.'],
        ['h2_sm', '8. Kennen Sie die besten Fotostellen'],
        ['p', 'Die drei am häufigsten fotografierten Momente während der Bootsfahrt sind: das Passieren unter der Bosphorus-Brücke (die Lichter sind direkt über Ihnen und spiegeln sich im Wasser), der Blick auf den Jungfrauenturm, der allein in der Mitte der Meerenge steht, und der Panoramablick auf die Skyline der Altstadt mit ihren Moscheen und Minaretten. Das Oberdeck bietet die besten ungehinderten Ansichten für Fotos. Gehen Sie zwischen den Gängen oder während der Pausen in der Unterhaltung hoch — das Personal wird Ihren Tisch für Sie halten.'],
        ['h2_sm', '9. Kinder sind willkommen'],
        ['p', 'Bosphorus-Dinner-Bootsfahrten sind familienfreundlich. Kinder unter 6 Jahren fahren kostenlos, und Kinder im Alter von 6 bis 12 Jahren zahlen den halben Preis. Das Unterhaltungsprogramm — insbesondere die Volkstänze und die Musik — fasziniert Kinder oft. Die Boote sind sicher und geräumig, mit geschlossenen Speisebereichen und bewachten Oberdecks. Trotzdem behalten Sie jüngere Kinder in der Nähe von Geländern und Treppen im Auge. Wenn Sie als Familie reisen, lassen Sie es uns bei der Buchung wissen, damit wir einen geeigneten Tisch arrangieren können.'],
        ['h2_sm', '10. Kostenlose Stornierung — Immer'],
        ['p', 'Das Leben passiert. Das Wetter ändert sich, die Energie sinkt, Pläne verschieben sich. Bei Bosphorus Night ist die Stornierung immer kostenlos. Ob Sie eine Woche im Voraus oder ein paar Stunden vor Abfahrt stornieren, es gibt keine Gebühr und keine Strafe. Senden Sie uns einfach eine WhatsApp-Nachricht. Das ist einer der Vorteile des Modells ohne Vorauszahlung — da Sie nichts bezahlt haben, ist die Stornierung so einfach wie eine schnelle Nachricht. Wir möchten lieber, dass Sie kommen, wenn Sie in der Stimmung sind, es zu genießen.'],
        ['p_top', 'Mit diesen zehn Tipps ausgestattet sind Sie bereit für das bestmögliche Bosphorus-Bootsfahrt-Erlebnis. Die Kombination aus Istanbuls Nachtsschönheit, einem kompletten türkischen Abendessen und Live-Unterhaltung macht dies zu einem der unvergesslichsten Abende, die Sie überall auf der Welt haben können. Denken Sie nur daran: Schichten, geladenes Telefon und früh ankommen.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026', blurb: 'Vollständiger Leitfaden zu Paketen, Preisen und was zu erwarten ist.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Führer', blurb: 'Buchen Sie eine Bootsfahrt am selben Tag mit sofortiger WhatsApp-Bestätigung.' },
        'bosphorus-sunset-cruise-guide': { title: 'Bosphorus-Sonnenuntergangs-Bootsfahrt-Führer', blurb: 'Goldene Stunde auf dem Wasser — das ultimative Sonnenuntergangserlebnis.' },
        'bosphorus-cruise-with-kids-family': { title: 'Bosphorus-Bootsfahrt mit Kindern — Familienführer', blurb: 'Familienfreundliche Bootsfahrten mit Kindern unter 6 kostenlos.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Bosphorus-Bootsfahrt mit Kindern — Familienfreundlicher Führer Istanbul',
      desc: 'Ist eine Bosphorus-Dinner-Bootsfahrt für Kinder geeignet? Ja! Kinder unter 6 kostenlos, 6-12 halber Preis. Familientipps, was zu erwarten ist und wie man bucht.',
      h1: 'Bosphorus-Bootsfahrt mit Kindern — Familienfreundlicher Führer',
      alt: 'Familien genießen das offene Deck einer Bosphorus-Bootsfahrt',
      body: [
        ['p', 'Eine der häufigsten Fragen, die wir von Familien erhalten, die ihre Istanbul-Reise planen, ist: „Ist eine Bosphorus-Dinner-Bootsfahrt für Kinder geeignet?" Die Antwort ist ein selbstbewusstes Ja. Tatsächlich sagen uns viele Familien, dass die Bootsfahrt der Höhepunkt ihres gesamten Urlaubs war — nicht nur für die Eltern, sondern auch für die Kinder. Hier ist alles, was Sie darüber wissen müssen, Ihre Familie auf eine Bosphorus-Bootsfahrt mitzunehmen.'],
        ['h2', 'Altersrichtlinien und Preise'],
        ['p', 'Unsere Preise für Kinder sind unkompliziert und familienfreundlich. Kinder im Alter von 0–3 Jahren fahren völlig kostenlos — kein Ticket, keine Gebühr. Kinder im Alter von 4–8 Jahren zahlen den halben Erwachsenenpreis. Kinder im Alter von 9 Jahren und älter werden zum vollen Erwachsenenpreis berechnet. Dies gilt für beide Pakete: Standard und VIP.'],
        ['p', 'Für eine vierköpfige Familie mit zwei Kindern im Alter von 4–8 Jahren kostet eine Bosphorus-Dinner-Bootsfahrt nur €72 insgesamt für das Standardpaket — das sind zwei Erwachsenentickets zu je €24 plus zwei Kindertickets zum halben Preis zu je €12. Für einen unvergesslichen Abend auf dem Wasser mit der ganzen Familie stellt das ein hervorragendes Preis-Leistungs-Verhältnis im Vergleich zu einem Sitzrestaurant in den Touristengebieten dar.'],
        ['h2', 'Ist es sicher für Kinder?'],
        ['p', 'Die für Bosphorus-Dinner-Touren verwendeten Bootsfahrtboote sind große, stabile Handelsschiffe — keine kleinen Privatboote. Sie haben geschlossene Speisebereiche auf den unteren Decks und offene Aussichtsbereiche auf dem Oberdeck mit ordnungsgemäßen Geländern und Sicherheitsbarrieren. Der Bosphorus ist eine Meerenge mit relativ ruhigem Wasser, daher ist die Fahrt sanft und stabil. Seekrankheit ist extrem selten, sogar bei Kindern.'],
        ['p', 'Trotzdem gilt wie in jeder Uferumgebung der gesunde Menschenverstand. Behalten Sie ein wachsames Auge auf Kleinkinder in der Nähe von Treppen und offenen Deckbereichen. Die Besatzung ist es gewohnt, Familien an Bord zu haben, und wird helfen, die Sicherheit der Kinder zu gewährleisten, aber elterliche Aufsicht ist immer die erste Sicherheitslinie.'],
        ['h2', 'Was Kinder am meisten genießen'],
        ['p', 'Man könnte denken, dass eine Dinner-Bootsfahrt in erster Linie ein Erwachsenenerlebnis ist, aber Kinder reagieren konsequent auf mehrere Elemente des Abends. Die Live-Unterhaltung ist der größte Hit — die bunten Volkstanzkostüme, die energiegeladene Musik und besonders die Bauchtanzaufführung neigen dazu, Kinder aller Altersgruppen zu fesseln. Viele Kinder enden mit Klatschen, Tanzen auf ihren Sitzen oder dem Versuch, die Bewegungen zu imitieren.'],
        ['p', 'Die Bootsfahrt selbst ist aufregend für Kinder, die noch nie auf einem großen Schiff waren. Die beleuchteten Brücken über sich hindurchziehen zu sehen, den Jungfrauenturm zu entdecken und die Stadtlichter vom Wasser aus zu sehen, sind alles wirklich aufregende Erlebnisse für junge Augen. Das Oberdeck, wo Kinder den Wind spüren und das vorbeiströmende Wasser sehen können, ist normalerweise ein Lieblingsplatz.'],
        ['p', 'Ältere Kinder (8 Jahre und älter) werden oft an den Sehenswürdigkeiten entlang der Route interessiert. Auf die Paläste, Moscheen und Festungen hinzuweisen, wenn das Boot sie passiert, kann die Bootsfahrt in eine informelle Geschichtsstunde verwandeln — besonders wenn Sie diese Stätten tagsüber besucht haben.'],
        ['h2', 'Das Menü für Kinder'],
        ['p', 'Das Abendmenü ist ein festes türkisches und internationales Angebot. Obwohl es kein separates Kindermenü gibt, ist die Auswahl breit genug, dass die meisten Kinder reichlich zum Essen finden. Brot, Reis, gegrilltes Huhn und Salate sind alle mild und vertraut. Die kalte Meze-Auswahl umfasst Artikel wie Hummus und Käse, die Kinder normalerweise genießen. Desserts — besonders Baklava und süße Backwaren — sind universell beliebt bei jüngeren Gästen.'],
        ['p', 'Wenn Ihr Kind spezielle Ernährungsbedürfnisse oder Allergien hat, lassen Sie es uns bei der Buchung wissen, und wir können dies im Voraus mit der Küche überprüfen. Alkoholfreie Getränke, Wasser und Saft sind in allen Paketen enthalten, sodass Kinder nicht durstig werden.'],
        ['h2', 'Tipps für Familien'],
        ['ul', [
          ['<strong class="text-white/80">Bringen Sie eine leichte Jacke für jedes Kind mit</strong> — Das Oberdeck wird windig, und Kinder wollen oft Zeit draußen verbringen, um Wasser und Lichter zu beobachten.'],
          ['<strong class="text-white/80">Erwägen Sie die Sonnenuntergangs-Bootsfahrt</strong> — Sie startet früher (gegen 17:30 Uhr) und kehrt um 21:00 Uhr zurück, was besser für die Schlafenszeitpläne jüngerer Kinder funktioniert als die Dinner-Bootsfahrt, die gegen 23:30 Uhr zurückkehrt.'],
          ['<strong class="text-white/80">Kommen Sie früh für einen guten Tisch</strong> — Ein Fenstertisch in der Nähe der Bühne bietet Kindern das beste Erlebnis. VIP-Pakete garantieren dies, aber 20 Minuten früher für Standard oder Premium anzukommen, hilft auch.'],
          ['<strong class="text-white/80">Bringen Sie kleine Ablenkungen mit</strong> — Obwohl die Unterhaltung und die Aussichten die meisten Kinder beschäftigt halten, kann ein kleines Malbuch oder ein Tablet mit einem Film während ruhigerer Momente für sehr kleine Kinder helfen.'],
          ['<strong class="text-white/80">Benutzen Sie die Toiletten vor dem Einschiffen</strong> — Das Boot hat Toiletten, aber sie können während der Spitzenmomente beschäftigt sein. Ein kurzer Besuch vor der Abfahrt macht die erste Stunde reibungsloser.'],
        ]],
        ['h2', 'Wie man als Familie bucht'],
        ['p', 'Die Buchung ist einfach. Senden Sie uns eine WhatsApp-Nachricht mit der Anzahl der Erwachsenen, der Anzahl und dem Alter der Kinder, Ihrem Wunschdatum und welches Paket Sie interessiert. Wir berechnen den Gesamtbetrag (denken Sie daran: unter 6 kostenlos, 6-12 halber Preis) und bestätigen die Verfügbarkeit sofort. Keine Vorauszahlung erforderlich — Sie zahlen an Bord.'],
        ['p', 'Wenn Sie sich nicht sicher sind, welches Paket für Ihre Familie am besten geeignet ist, fragen Sie einfach. Für die meisten Familien bietet das Standardpaket alles, was Sie brauchen. Das Premium-Upgrade lohnt sich, wenn die Erwachsenen alkoholische Getränke zum Abendessen genießen möchten. Das VIP-Paket mit reserviertem Fenstertisch ist ideal für Familien, die einen garantierten Vordersitz wollen, ohne früh anzukommen.'],
        ['p', 'Eine Bosphorus-Bootsfahrt ist eine der seltenen Istanbul-Erlebnisse, die wirklich für jedes Alter funktioniert. Ihre Kinder werden die Lichter, die Musik und das Abenteuer, nachts auf dem Wasser zu sein, lieben. Sie werden die Aussichten, das Essen und ein paar Stunden Betreuung genießen, während die ganze Familie zusammen Spaß hat.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Beste Bosphorus-Dinner-Bootsfahrt in Istanbul 2026', blurb: 'Vollständiger Leitfaden zu Paketen, Preisen und was zu erwarten ist.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Dinge zu wissen vor Ihrer Istanbul-Bootstour', blurb: 'Wesentliche Tipps für Erstreisende auf dem Bosphorus.' },
        'bosphorus-sunset-cruise-guide': { title: 'Bosphorus-Sonnenuntergangs-Bootsfahrt-Führer', blurb: 'Goldene Stunde auf dem Wasser — das ultimative Sonnenuntergangserlebnis.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Bosphorus-Bootsfahrt heute Abend — Last-Minute-Führer', blurb: 'Buchen Sie eine Bootsfahrt am selben Tag mit sofortiger WhatsApp-Bestätigung.' },
      },
    },
  },

  es: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: 'Consejos sobre cruceros por el Bósforo, guías y conocimientos privilegiados. Planifique su crucero con cena perfecto en Estambul con nuestros artículos de expertos.',
      ogDesc: 'Consejos sobre cruceros por el Bósforo, guías y conocimientos privilegiados. Planifique su crucero con cena perfecto en Estambul.',
      h1: 'Blog',
      lead: 'Consejos de crucero, guías de Estambul y conocimientos privilegiados para ayudarle a planificar la experiencia perfecta del Bósforo.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 de abril de 2026', title: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026', blurb: 'Todo lo que necesita saber sobre la experiencia de crucero con cena mejor valorada de Estambul. Desde paquetes y precios hasta entretenimiento y vistas nocturnas impresionantes.', alt: 'Barco de crucero con cena por el Bósforo de noche con puente iluminado' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 de abril de 2026', title: 'Crucero por el Bósforo esta noche — Guía de reserva de última hora', blurb: '¿Quiere navegar por el Bósforo esta noche? Aquí está todo lo que necesita saber sobre reservas de última hora, disponibilidad y cómo asegurar su lugar.', alt: 'Interior de un lujoso salón comedor de crucero por el Bósforo' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 de abril de 2026', title: 'Guía del Crucero al Atardecer por el Bósforo', blurb: 'Experimente la hora dorada de Estambul desde el agua. Todo sobre el crucero con cena al atardecer — horario, qué esperar y por qué es inolvidable.', alt: 'Atardecer dramático sobre el estrecho del Bósforo' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 de abril de 2026', title: '10 Cosas que Saber Antes de su Tour en Barco por Estambul', blurb: '¿Planea un crucero por el Bósforo? Desde qué llevar hasta consejos contra el mareo, aquí hay 10 cosas esenciales que todo principiante debería saber.', alt: 'Vista panorámica de un barco navegando por el Bósforo' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 de abril de 2026', title: 'Crucero por el Bósforo con Niños — Guía Familiar', blurb: '¿Es un crucero con cena adecuado para niños? Absolutamente. Los niños menores de 6 navegan gratis, de 6 a 12 a mitad de precio. Aquí está su guía de planificación familiar completa.', alt: 'Familias disfrutando de la cubierta de un crucero por el Bósforo' },
      ],
      readMore: 'Leer Más →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026 — Guía Completa',
      desc: 'Todo lo que necesita saber sobre el mejor crucero con cena de Estambul. Paquetes desde €24, shows turcos en vivo, impresionantes vistas nocturnas. Reserve al instante.',
      h1: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026',
      alt: 'Barco de crucero de lujo deslizándose bajo el iluminado Puente del Bósforo por la noche',
      body: [
        ['p', 'Estambul es una de las pocas ciudades del mundo donde puede cenar sobre el agua mientras observa dos continentes iluminarse a su alrededor. Un crucero con cena por el Bósforo no es solo una comida — es la experiencia nocturna más emblemática que ofrece la ciudad. Ya sea que esté visitando Estambul por primera vez o regresando para otro viaje, pasar una noche en el Bósforo es algo que recordará durante años.'],
        ['h2', 'Lo que lo hace especial'],
        ['p', 'El Bósforo es una vía fluvial de 30 kilómetros que separa Europa y Asia. Por la noche, los palacios históricos, mezquitas y puentes a lo largo de sus orillas están iluminados de manera espectacular. Desde su mesa en el barco, verá el Palacio de Dolmabahçe brillando blanco contra la ladera oscura, la Torre de la Doncella de pie sola en el agua con su cálida luz amarilla, y los dos grandes puentes colgantes — el Puente del Bósforo y el Puente Fatih Sultan Mehmet — extendiéndose entre los continentes en cintas de color.'],
        ['p', 'La ruta del crucero generalmente sale del muelle de Kabataş, cerca del área del Palacio de Dolmabahçe. El barco se dirige hacia el norte a lo largo de la costa europea, pasando por las ornamentadas residencias junto al mar conocidas como yalı, el Palacio Çırağan y la Fortaleza Rumeli. Luego gira hacia el sur por el lado asiático, ofreciendo vistas del Palacio Beylerbeyi y el malecón de Üsküdar antes de dar la vuelta. El viaje completo dura aproximadamente de tres a cuatro horas, dependiendo del paquete.'],
        ['h2', 'La Experiencia de la Cena'],
        ['p', 'La cena se sirve como un menú fijo que combina cocina turca e internacional. Puede esperar una selección de aperitivos fríos y calientes — hummus, hojas de parra rellenas, ensaladas de temporada — seguido de un plato principal de carnes a la parrilla o pescado con arroz y verduras asadas. El postre es típicamente un dulce turco clásico como baklava o kadayıf, acompañado de té o café turco. Las bebidas sin alcohol y el agua están incluidas en todos los paquetes, mientras que las bebidas alcohólicas están disponibles con las opciones Premium y VIP.'],
        ['h2', 'Entretenimiento en Vivo'],
        ['p', 'El programa de entretenimiento es uno de los puntos destacados. Espere una alineación completa de danzas folclóricas turcas tradicionales interpretadas con coloridos trajes regionales, una enérgica actuación de danza del vientre, música en vivo de una banda turca y un set de DJ que mantiene el ambiente a medida que avanza la noche. Algunos cruceros también presentan una ceremonia de derviches giradores — una hipnotizante práctica espiritual sufí que ha sido parte de la cultura turca durante siglos. El espectáculo dura aproximadamente 90 minutos y está diseñado para dar a los huéspedes internacionales un rico sabor de las artes escénicas turcas.'],
        ['h2', 'Paquetes y Precios'],
        ['p', 'En Bosphorus Night ofrecemos dos paquetes principales, con complementos opcionales para bebidas, transfer al hotel y ocasiones especiales:'],
        ['ul', [
          ['<strong class="text-white/80">Crucero con Cena Estándar (desde €24)</strong> — Cena completa de 4 platos, bebidas sin alcohol, entretenimiento en vivo, espectáculos de danza folclórica y danza del vientre, DJ en la cubierta superior. La opción más popular para parejas, familias y viajeros solitarios.'],
          ['<strong class="text-white/80">Crucero con Cena VIP (desde €55)</strong> — Menú ampliado que incluye carnes premium (rib-eye, solomillo de res), 15+ meze turcos, asientos junto al escenario y servicio elevado. Perfecto para ocasiones especiales y aniversarios.'],
        ]],
        ['p_sm', 'Complementos: bebidas ilimitadas (€30/persona), transfer al hotel (€10/persona), arreglo romántico de mesa (€15/reserva). Pague en el barco — no se requiere pago anticipado.'],
        ['p', 'Los niños de 6 a 12 años generalmente pagan la mitad del precio, y los niños menores de 6 años van gratis. No se requiere pago anticipado — paga en el barco, lo que elimina cualquier riesgo de reserva.'],
        ['h2', 'Cómo Reservar'],
        ['p', 'La forma más fácil de reservar es por WhatsApp. Simplemente envíenos un mensaje con su fecha preferida, número de invitados y qué paquete le interesa. Nuestro equipo responde en minutos, confirma la disponibilidad y le envía todos los detalles — punto de encuentro, hora de embarque y qué esperar. No hay formulario de pago en línea ni depósito. Paga en efectivo o con tarjeta directamente en el barco.'],
        ['h2', 'Consejos para la Mejor Experiencia'],
        ['p', 'Llegue al muelle al menos 20 minutos antes de la salida para conseguir una buena mesa. Vista smart casual — el barco no es excesivamente formal, pero se sentirá más cómodo con algo un paso por encima de la ropa de playa. Lleve una chaqueta ligera o un chal porque la cubierta superior puede estar ventosa incluso en verano. Y mantenga su teléfono cargado — querrá capturar las vistas, especialmente cuando el barco pasa bajo los puentes iluminados.'],
        ['p', 'Un crucero con cena por el Bósforo es, sin exagerar, la mejor manera de experimentar Estambul de noche. La combinación de comida, cultura en vivo y vistas del horizonte de la ciudad reflejándose en el agua oscura es como ninguna otra. Si solo hace una "gran noche" durante su viaje a Estambul, que sea esta.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Crucero por el Bósforo esta noche — Guía de última hora', blurb: 'Reserve un crucero el mismo día con confirmación instantánea por WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Guía del Crucero al Atardecer por el Bósforo', blurb: 'Hora dorada en el agua — la experiencia definitiva al atardecer.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Cosas que Saber Antes de su Tour en Barco por Estambul', blurb: 'Consejos esenciales para los que navegan por el Bósforo por primera vez.' },
        'bosphorus-cruise-with-kids-family': { title: 'Crucero por el Bósforo con Niños — Guía Familiar', blurb: 'Cruceros familiares con niños menores de 6 gratis.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Crucero por el Bósforo esta noche — Guía de Reserva de Última Hora Estambul',
      desc: '¿Quiere navegar por el Bósforo esta noche? Aquí cómo reservar un crucero con cena de última hora en Estambul. Disponibilidad el mismo día, reserva instantánea por WhatsApp.',
      h1: 'Crucero por el Bósforo esta noche — Guía de Reserva de Última Hora',
      alt: 'Elegante salón comedor de un crucero con cena por el Bósforo',
      body: [
        ['p', 'Son las 3 de la tarde y acaba de decidir que quiere hacer algo especial esta noche. Quizás llegó a Estambul esta mañana y quiere aprovechar al máximo su primera noche. Quizás el clima resultó mejor de lo esperado y una noche en el agua suena perfecta de repente. Sea cual sea la razón, la pregunta es simple: ¿puede aún reservar un crucero con cena por el Bósforo para esta noche?'],
        ['p', 'La respuesta corta es <strong class="text-white/90">sí</strong>. Las reservas el mismo día no solo son posibles — son comunes. Aquí está todo lo que necesita saber sobre la reserva de un crucero de última hora en Estambul.'],
        ['h2', '¿Realmente Puede Reservar el Mismo Día?'],
        ['p', 'Absolutamente. A diferencia de muchas actividades turísticas que requieren reservas anticipadas, los cruceros con cena por el Bósforo operan grandes embarcaciones que pueden acomodar a cientos de huéspedes. Esto significa que casi siempre hay disponibilidad, incluso el mismo día. Durante los meses pico de verano (julio y agosto), los cruceros de fin de semana pueden llenarse más rápido, pero las salidas entre semana rara vez se venden por completo. En primavera y otoño, los lugares de última hora están prácticamente garantizados.'],
        ['p', 'En Bosphorus Night, mantenemos nuestra línea de WhatsApp abierta desde temprano por la mañana hasta tarde por la noche específicamente porque sabemos que muchos huéspedes deciden el mismo día. Nuestro equipo puede confirmar su reserva en minutos después de su mensaje.'],
        ['h2', '¿Qué Tours Operan Esta Noche?'],
        ['p', 'El crucero estándar con cena sale diariamente del muelle de Kabataş. El horario típico funciona así: el embarque comienza alrededor de las 19:30 a 20:00, el barco sale aproximadamente a las 20:30, y el crucero dura unas tres horas, regresando al muelle alrededor de las 23:30. Algunos operadores también ofrecen un crucero al atardecer que sale alrededor de las 17:30 y regresa antes de las 21:00 — aunque para una decisión de última hora por la tarde, el crucero nocturno con cena es la opción más práctica.'],
        ['p', 'Ambos paquetes — Estándar y VIP — están disponibles para reserva el mismo día. El paquete Estándar comienza desde €24 por persona e incluye la cena completa de 4 platos, bebidas sin alcohol y el programa de entretenimiento. No necesita elegir su paquete con anticipación; simplemente envíenos un mensaje por WhatsApp y le guiaremos por las opciones.'],
        ['h2', 'Cómo Llegar a Kabataş'],
        ['p', 'Kabataş es uno de los puntos más accesibles de Estambul. Si se aloja en Sultanahmet (la ciudad vieja), el tranvía T1 va directamente a Kabataş — es la última parada. El viaje dura unos 25 minutos. Desde Taksim, puede tomar el funicular (línea F1), que desciende directamente a Kabataş en menos de tres minutos. Desde el lado asiático, tome un ferry a Kabataş o Beşiktaş. Los taxis desde la mayoría de las áreas centrales cuestan entre 100-200 TL dependiendo del tráfico y la distancia.'],
        ['p', 'Recomendamos llegar al área del muelle a más tardar a las 19:30. Esto le da tiempo para encontrar el punto de encuentro, conocer al miembro de nuestro equipo que le guiará al barco y acomodarse en su mesa antes de la salida.'],
        ['h2', 'Qué Llevar'],
        ['p', 'Manténgalo simple. Lleve su teléfono para fotos, una chaqueta ligera o un cárdigan para la cubierta superior (incluso las noches de verano pueden ser ventosas en el agua), y efectivo o tarjeta para el pago en el barco. No hay código de vestimenta, pero smart casual funciona mejor — piense en una bonita camisa o blusa en lugar de shorts y chanclas. Las damas pueden querer una goma para el pelo o un pañuelo ya que el viento aumenta una vez que el barco está en movimiento.'],
        ['h2', 'El Proceso de Reserva'],
        ['p', 'Así funciona en tres pasos rápidos:'],
        ['ol', [
          ['<strong class="text-white/80">Envíenos un mensaje por WhatsApp</strong> — Díganos cuántos invitados, su paquete preferido (o pida una recomendación) y confirme la fecha de esta noche.'],
          ['<strong class="text-white/80">Obtenga confirmación instantánea</strong> — Respondemos en minutos con la dirección del punto de encuentro, hora de embarque y cualquier otro detalle que necesite.'],
          ['<strong class="text-white/80">Preséntese y disfrute</strong> — Sin depósito, sin pago anticipado, sin boletos impresos. Solo llegue al punto de encuentro y nuestro equipo se encargará del resto. Paga directamente en el barco.'],
        ]],
        ['p', 'Genuinamente no hay riesgo involucrado. Si sus planes cambian y necesita cancelar, simplemente avísenos por WhatsApp — incluso unas pocas horas antes de la salida está bien. Sin cargos por cancelación, sin preguntas.'],
        ['p', 'Así que si esta noche se siente como una noche del Bósforo, no lo piense demasiado. Envíe un mensaje rápido por WhatsApp, y en pocas horas estará cenando sobre el agua con el horizonte de Estambul brillando a su alrededor.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026', blurb: 'Guía completa de paquetes, precios y qué esperar.' },
        'bosphorus-sunset-cruise-guide': { title: 'Guía del Crucero al Atardecer por el Bósforo', blurb: 'Hora dorada en el agua — la experiencia definitiva al atardecer.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Cosas que Saber Antes de su Tour en Barco por Estambul', blurb: 'Consejos esenciales para los que navegan por el Bósforo por primera vez.' },
        'bosphorus-cruise-with-kids-family': { title: 'Crucero por el Bósforo con Niños — Guía Familiar', blurb: 'Cruceros familiares con niños menores de 6 gratis.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Crucero al Atardecer por el Bósforo — Qué Esperar y Por Qué Vale la Pena',
      desc: 'Experimente la hora dorada de Estambul desde el agua. Crucero con cena al atardecer de 3 horas con shows en vivo, salida 17:30 desde Kabataş. Guía completa dentro.',
      h1: 'Crucero al Atardecer por el Bósforo — Qué Esperar y Por Qué Vale la Pena',
      alt: 'Dramático atardecer dorado sobre el estrecho del Bósforo con siluetas de mezquitas',
      body: [
        ['p', 'Hay una razón por la cual fotógrafos, parejas y viajeros experimentados dicen lo mismo: si quiere ver Estambul en su más bella forma, observe el atardecer desde el Bósforo. La forma en que la luz convierte el agua en oro, pinta los minaretes en tonos ámbar y lentamente da paso al resplandor nocturno de la ciudad — es una de esas experiencias que se quedan con usted mucho después de que sale de Turquía.'],
        ['p', 'Un crucero al atardecer por el Bósforo toma este espectáculo natural y lo convierte en una experiencia nocturna completa, con cena, entretenimiento en vivo y vistas panorámicas que ningún bar en la azotea puede igualar.'],
        ['h2', 'Por Qué la Hora del Atardecer es Mágica'],
        ['p', 'Estambul se encuentra a aproximadamente 41 grados de latitud norte, lo que significa que los tiempos de atardecer varían significativamente a lo largo del año. En verano, el sol se pone alrededor de las 20:30, proyectando una larga hora dorada que se extiende por el agua. En primavera y otoño, el atardecer llega más temprano — alrededor de las 18:00 a 19:00 — creando una transición más dramática y rápida del día a la noche. De cualquier manera, el Bósforo actúa como un espejo natural, reflejando los colores del cielo y amplificando el espectáculo.'],
        ['p', 'Lo que hace que el atardecer del Bósforo sea únicamente especial es el horizonte. A medida que el sol cae detrás del lado europeo, las siluetas de la Mezquita de Süleymaniye, Santa Sofía y la Mezquita Azul aparecen contra el cielo naranja-rosa. Mientras tanto, el lado asiático captura la última luz cálida en sus palacios costeros y colinas verdes. Está literalmente viendo el atardecer entre dos continentes — pocos lugares en la Tierra pueden ofrecer esa perspectiva.'],
        ['h2', 'La Experiencia del Crucero'],
        ['p', 'El crucero con cena al atardecer normalmente sale del muelle de Kabataş alrededor de las 17:30, aunque el horario se ajusta ligeramente con las estaciones para capturar la hora dorada en su punto máximo. El barco se dirige hacia el norte a lo largo del estrecho, dándole vistas del Palacio de Dolmabahçe, el Palacio Çırağan, la Mezquita de Ortaköy y el Puente del Bósforo — todos bañados en luz cálida.'],
        ['p', 'La cena se sirve cuando el sol comienza a ponerse. El menú presenta una variedad de platos turcos e internacionales: platos de meze frío, carnes a la parrilla o pescado fresco, verduras de temporada y postres tradicionales como baklava. Las bebidas sin alcohol están incluidas con el paquete Estándar, mientras que las opciones Premium y VIP agregan bebidas alcohólicas — y hay algo particularmente agradable en tomar una copa de vino turco mientras se observa el cielo cambiar de color sobre el agua.'],
        ['p', 'A medida que cae la oscuridad, comienza el programa de entretenimiento. Danzas folclóricas turcas tradicionales, una actuación de danza del vientre, música en vivo y a veces una ceremonia de derviches giradores llenan las horas restantes. La transición del atardecer dorado a la iluminación nocturna de la ciudad es perfecta — un momento está viendo la última luz desvanecerse, y al siguiente está rodeado por las luces brillantes del malecón de Estambul.'],
        ['h2', 'Consejos de Fotografía'],
        ['p', 'El crucero al atardecer es un sueño para fotógrafos, pero algunos consejos le ayudarán a obtener las mejores tomas. Primero, diríjase a la cubierta superior unos 30 minutos antes del atardecer — es cuando la luz es más cálida y los colores más vívidos. Dispare hacia el oeste (lado europeo) para la clásica silueta de atardecer sobre minaretes. Use los reflejos del agua para agregar profundidad a sus composiciones.'],
        ['p', 'Para fotógrafos con smartphone, active el modo HDR para capturar tanto el cielo brillante como el primer plano más oscuro. Evite usar el flash — arruinará la calidez natural de la luz. El modo panorámico funciona maravillosamente para capturar el amplio barrido del horizonte. Y no olvide dejar el teléfono unos minutos y simplemente observar. Algunos momentos se viven mejor que se filman.'],
        ['h2', 'Qué Vestir'],
        ['p', 'La cubierta superior estará ventosa, especialmente una vez que el barco esté en movimiento. Incluso en una cálida noche de verano, las temperaturas descienden notablemente en el agua después del atardecer. Una chaqueta ligera, un cárdigan o un chal es esencial. Las capas funcionan mejor — puede estar cómodo en una camiseta durante la hora dorada pero agradecido por una capa adicional una vez que cae la oscuridad. Los zapatos con algo de agarre son preferibles a los tacones o sandalias de suela lisa, ya que la cubierta puede estar ligeramente resbaladiza por el rocío marino.'],
        ['h2', 'Crucero al Atardecer vs. Crucero con Cena — ¿Cuál es la Diferencia?'],
        ['p', 'La principal diferencia es el momento y el ambiente. El crucero al atardecer sale a última hora de la tarde y le da esa experiencia de hora dorada más la transición a la noche. El crucero estándar con cena sale más tarde (alrededor de las 20:00-20:30) y es enteramente una experiencia nocturna — luces de la ciudad, puentes iluminados y un ambiente más oscuro y romántico.'],
        ['p', 'Si está eligiendo entre los dos, considere qué le importa más. El crucero al atardecer ofrece las mejores oportunidades fotográficas y una experiencia visual más variada (día a noche). El crucero con cena es la opción clásica para una noche romántica o una noche de celebración, con la ciudad completamente iluminada desde el principio. Ambos incluyen cena y el programa completo de entretenimiento.'],
        ['p', 'Para aquellos con tiempo, la combinación ideal es un crucero al atardecer una noche y un crucero con cena otra — son genuinamente experiencias diferentes. Pero si solo puede elegir uno, el crucero al atardecer ofrece algo verdaderamente único: la oportunidad de ver a Estambul transformarse de oro a plata mientras dos continentes se desvanecen del día a la noche a su alrededor.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026', blurb: 'Guía completa de paquetes, precios y qué esperar.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Crucero por el Bósforo esta noche — Guía de última hora', blurb: 'Reserve un crucero el mismo día con confirmación instantánea por WhatsApp.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Cosas que Saber Antes de su Tour en Barco por Estambul', blurb: 'Consejos esenciales para los que navegan por el Bósforo por primera vez.' },
        'bosphorus-cruise-with-kids-family': { title: 'Crucero por el Bósforo con Niños — Guía Familiar', blurb: 'Cruceros familiares con niños menores de 6 gratis.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 Cosas que Saber Antes de su Tour en Barco por Estambul',
      desc: '¿Planea un crucero por el Bósforo? Aquí hay 10 consejos esenciales: qué llevar, qué traer, qué esperar y cómo obtener la mejor experiencia en su tour en barco por Estambul.',
      h1: '10 Cosas que Saber Antes de su Tour en Barco por Estambul',
      alt: 'Vista panorámica de un barco de crucero por el Bósforo con el horizonte de Estambul',
      body: [
        ['p', 'Un crucero por el Bósforo es una de esas experiencias que prácticamente todos los visitantes de Estambul ponen en su lista — y por una buena razón. Pero como cualquier experiencia de viaje, conocer algunas cosas de antemano puede marcar la diferencia entre una buena noche y una excelente. Aquí hay diez consejos esenciales de nuestro equipo para ayudarle a aprovechar al máximo su tour en barco por Estambul.'],
        ['h2_sm', '1. Vístase en Capas'],
        ['p', 'Este es el consejo número uno que damos a cada huésped. Las noches de Estambul pueden ser engañosamente frescas en el agua, incluso en verano. La temperatura en la cubierta superior suele ser de 5 a 8 grados más baja que la que sintió en tierra, y el viento del movimiento del barco la hace sentir aún más fresca. Una chaqueta ligera, un cárdigan o una pashmina es esencial. Durante los meses de primavera y otoño, se recomienda una chaqueta adecuada. Le alegrará haberla traído cuando quiera salir y disfrutar de las vistas desde la cubierta abierta.'],
        ['h2_sm', '2. Lleve una Cámara (y Mantenga su Teléfono Cargado)'],
        ['p', 'El Bósforo de noche es extraordinariamente fotogénico. Palacios iluminados, puentes adornados con luces de colores, mezquitas iluminadas desde abajo, y el horizonte de la ciudad reflejándose en el agua oscura — habrá docenas de momentos dignos de capturar. Asegúrese de que su teléfono esté completamente cargado antes de embarcar, o lleve un pequeño banco de energía. Si tiene una cámara con modo nocturno o capacidad para poca luz, llévela. Algunas de las mejores tomas vienen de la cubierta superior cuando el barco pasa bajo el Puente del Bósforo.'],
        ['h2_sm', '3. Llegue al Menos 20 Minutos Antes'],
        ['p', 'El embarque es por orden de llegada para la selección de mesa (a menos que haya reservado un paquete VIP con mesa reservada junto a la ventana). Llegar 20 minutos antes de la hora de embarque indicada le da la mejor oportunidad de conseguir una mesa cerca de las ventanas o cerca del escenario. Nuestro equipo en el punto de encuentro estará allí para guiarle al barco, pero si llega justo a la hora de salida, puede terminar en una mesa menos ideal.'],
        ['h2_sm', '4. Elija la Hora Adecuada del Tour'],
        ['p', 'Generalmente hay dos opciones de crucero: el crucero al atardecer (saliendo alrededor de las 17:30) y el crucero con cena (saliendo alrededor de las 20:00-20:30). El crucero al atardecer le da la experiencia de la hora dorada y la transición del día a la noche — ideal para fotógrafos y quienes prefieren una noche más temprana. El crucero con cena es la experiencia nocturna clásica con la ciudad completamente iluminada. Ambos incluyen una cena completa y programa de entretenimiento. Si es su primera vez, el crucero con cena es la opción más popular.'],
        ['h2_sm', '5. Reserve por WhatsApp para la Respuesta Más Rápida'],
        ['p', 'Aunque puede encontrar cruceros por el Bósforo a través de varias plataformas en línea, reservar directamente a través de WhatsApp es la opción más rápida y flexible. Obtiene una respuesta instantánea, puede hacer preguntas en tiempo real y recibir recomendaciones personales basadas en el tamaño de su grupo y preferencias. No hay formulario que llenar ni esperar confirmaciones por correo electrónico. Solo envíe un mensaje con su fecha, número de invitados y paquete preferido, y tendrá una reserva confirmada en minutos.'],
        ['h2_sm', '6. No se Requiere Pago Anticipado'],
        ['p', 'Esto sorprende a muchos viajeros, pero los operadores de cruceros por el Bósforo de buena reputación — incluyendo Bosphorus Night — no requieren ningún pago por adelantado. Reserva su lugar a través de WhatsApp, llega al muelle y paga en el barco. Esto significa que no hay riesgo financiero para usted. Si sus planes cambian, simplemente nos avisa y no hay cargo. El pago en el barco se puede hacer en efectivo (liras turcas, euros o dólares estadounidenses) o con tarjeta de crédito/débito.'],
        ['h2_sm', '7. El Mareo Raramente es un Problema'],
        ['p', 'El Bósforo es un estrecho, no mar abierto. El agua es relativamente tranquila, especialmente en comparación con las aguas oceánicas. Los barcos de crucero son grandes y estables, y la ruta permanece dentro del estrecho protegido todo el tiempo. La gran mayoría de los huéspedes no experimentan incomodidad por el movimiento en absoluto. Si es particularmente sensible, sentarse en el centro del barco (en lugar de en la proa o popa) proporciona el viaje más estable. Tener comida en el estómago también ayuda — así que comer la cena es en realidad una buena prevención.'],
        ['h2_sm', '8. Conozca los Mejores Lugares para Fotos'],
        ['p', 'Los tres momentos más fotografiados del crucero son: pasar bajo el Puente del Bósforo (las luces están directamente sobre usted y se reflejan en el agua), la vista de la Torre de la Doncella de pie sola en el medio del estrecho, y la vista panorámica del horizonte de la ciudad vieja con sus mezquitas y minaretes. La cubierta superior ofrece las mejores vistas sin obstrucciones para fotos. Suba entre platos o durante las pausas del entretenimiento — el personal mantendrá su mesa para usted.'],
        ['h2_sm', '9. Los Niños son Bienvenidos'],
        ['p', 'Los cruceros con cena por el Bósforo son aptos para familias. Los niños menores de 6 años navegan gratis, y los niños de 6 a 12 años pagan la mitad del precio. El programa de entretenimiento — especialmente las danzas folclóricas y la música — tiende a fascinar a los niños. Los barcos son seguros y espaciosos, con áreas de comedor cerradas y cubiertas superiores vigiladas. Dicho esto, vigile a los niños más pequeños cerca de barandillas y escaleras. Si viaja en familia, háganoslo saber al reservar para que podamos arreglar una mesa adecuada.'],
        ['h2_sm', '10. Cancelación Gratuita — Siempre'],
        ['p', 'La vida sucede. El clima cambia, los niveles de energía bajan, los planes cambian. Con Bosphorus Night, la cancelación siempre es gratis. Ya sea que cancele con una semana de antelación o unas pocas horas antes de la salida, no hay cargo ni penalización. Solo envíenos un mensaje de WhatsApp. Esta es una de las ventajas del modelo sin pago anticipado — como no ha pagado nada, cancelar es tan simple como un mensaje rápido. Preferimos que venga cuando esté de humor para disfrutarlo.'],
        ['p_top', 'Armado con estos diez consejos, está listo para tener la mejor experiencia posible de crucero por el Bósforo. La combinación de la belleza nocturna de Estambul, una cena turca completa y entretenimiento en vivo hace de esta una de las noches más memorables que puede tener en cualquier lugar del mundo. Solo recuerde: capas, teléfono cargado y llegue temprano.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026', blurb: 'Guía completa de paquetes, precios y qué esperar.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Crucero por el Bósforo esta noche — Guía de última hora', blurb: 'Reserve un crucero el mismo día con confirmación instantánea por WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Guía del Crucero al Atardecer por el Bósforo', blurb: 'Hora dorada en el agua — la experiencia definitiva al atardecer.' },
        'bosphorus-cruise-with-kids-family': { title: 'Crucero por el Bósforo con Niños — Guía Familiar', blurb: 'Cruceros familiares con niños menores de 6 gratis.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Crucero por el Bósforo con Niños — Guía Familiar Estambul',
      desc: '¿Es un crucero con cena por el Bósforo adecuado para niños? ¡Sí! Niños menores de 6 gratis, 6-12 a mitad de precio. Consejos familiares, qué esperar y cómo reservar.',
      h1: 'Crucero por el Bósforo con Niños — Guía Familiar',
      alt: 'Familias disfrutando de la cubierta abierta de un crucero por el Bósforo',
      body: [
        ['p', 'Una de las preguntas más comunes que recibimos de familias que planean su viaje a Estambul es: "¿Es un crucero con cena por el Bósforo adecuado para niños?" La respuesta es un sí confiado. De hecho, muchas familias nos dicen que el crucero fue el punto culminante de todas sus vacaciones — no solo para los padres, sino también para los niños. Aquí está todo lo que necesita saber sobre llevar a su familia a un crucero por el Bósforo.'],
        ['h2', 'Política de Edad y Precios'],
        ['p', 'Nuestros precios para niños son simples y familiares. Los niños de 0 a 3 años navegan completamente gratis — sin boleto, sin tarifa. Los niños de 4 a 8 años pagan la mitad del precio de adulto. Los niños de 9 años y mayores se cobran a la tarifa completa de adulto. Esto se aplica a ambos paquetes: Estándar y VIP.'],
        ['p', 'Para una familia de cuatro con dos niños de 4 a 8 años, un crucero con cena por el Bósforo cuesta tan poco como €72 en total para el paquete Estándar — eso son dos boletos de adulto a €24 cada uno más dos boletos de niño a mitad de precio a €12 cada uno. Por una noche memorable en el agua con toda la familia, eso representa un excelente valor en comparación con un restaurante con mesas en las áreas turísticas.'],
        ['h2', '¿Es Seguro para Niños?'],
        ['p', 'Los barcos de crucero utilizados para los tours con cena por el Bósforo son grandes embarcaciones comerciales estables — no pequeños barcos privados. Tienen áreas de comedor cerradas en las cubiertas inferiores y áreas de observación abiertas en la cubierta superior con barandillas y barreras de seguridad adecuadas. El Bósforo es un estrecho con aguas relativamente tranquilas, por lo que el viaje es suave y estable. El mareo es extremadamente raro, incluso entre niños.'],
        ['p', 'Dicho esto, como en cualquier entorno costero, se aplica el sentido común. Mantenga un ojo vigilante sobre los niños pequeños cerca de escaleras y áreas de cubierta abierta. La tripulación está acostumbrada a tener familias a bordo y ayudará a garantizar que los niños permanezcan seguros, pero la supervisión de los padres es siempre la primera línea de seguridad.'],
        ['h2', 'Lo que Más Disfrutan los Niños'],
        ['p', 'Podría pensar que un crucero con cena es principalmente una experiencia para adultos, pero los niños responden consistentemente a varios elementos de la noche. El entretenimiento en vivo es el mayor éxito — los coloridos trajes de danza folclórica, la música enérgica y especialmente la actuación de danza del vientre tienden a cautivar a niños de todas las edades. Muchos niños terminan aplaudiendo, bailando en sus asientos o intentando imitar los movimientos.'],
        ['p', 'El paseo en barco en sí es emocionante para los niños que nunca han estado en una embarcación grande. Ver los puentes iluminados pasar por encima, divisar la Torre de la Doncella y ver las luces de la ciudad desde el agua son todas experiencias genuinamente emocionantes para ojos jóvenes. La cubierta superior, donde los niños pueden sentir el viento y ver el agua pasar, suele ser un lugar favorito.'],
        ['p', 'Los niños mayores (8 años y más) a menudo se interesan en los monumentos a lo largo de la ruta. Señalar los palacios, mezquitas y fortalezas mientras el barco pasa puede convertir el crucero en una lección informal de historia — especialmente si ha visitado estos sitios durante el día.'],
        ['h2', 'El Menú para Niños'],
        ['p', 'El menú de la cena es una variedad fija turca e internacional. Aunque no hay un menú infantil separado, la selección es lo suficientemente amplia como para que la mayoría de los niños encuentren mucho para comer. El pan, el arroz, el pollo a la parrilla y las ensaladas son todos suaves y familiares. La selección de meze frío incluye artículos como hummus y queso que los niños suelen disfrutar. Los postres — especialmente baklava y pasteles dulces — son universalmente populares con los huéspedes más jóvenes.'],
        ['p', 'Si su hijo tiene necesidades dietéticas específicas o alergias, háganoslo saber al reservar y podemos consultar con la cocina con anticipación. Las bebidas sin alcohol, agua y jugo están incluidos en todos los paquetes, por lo que los niños no tendrán sed.'],
        ['h2', 'Consejos para Familias'],
        ['ul', [
          ['<strong class="text-white/80">Lleve una chaqueta ligera para cada niño</strong> — La cubierta superior se vuelve ventosa y los niños a menudo quieren pasar tiempo afuera viendo el agua y las luces.'],
          ['<strong class="text-white/80">Considere el crucero al atardecer</strong> — Sale antes (alrededor de las 17:30) y regresa antes de las 21:00, lo que funciona mejor para los horarios de sueño de los niños más pequeños que el crucero con cena que regresa alrededor de las 23:30.'],
          ['<strong class="text-white/80">Llegue temprano para una buena mesa</strong> — Una mesa junto a la ventana cerca del escenario da a los niños la mejor experiencia. Los paquetes VIP garantizan esto, pero llegar 20 minutos antes para Estándar o Premium también ayuda.'],
          ['<strong class="text-white/80">Traiga pequeñas distracciones</strong> — Aunque el entretenimiento y las vistas mantienen a la mayoría de los niños comprometidos, tener un pequeño libro para colorear o una tableta cargada con una película puede ayudar durante los momentos más tranquilos para niños muy pequeños.'],
          ['<strong class="text-white/80">Use los baños antes de embarcar</strong> — El barco tiene baños, pero pueden estar ocupados durante los momentos pico. Una visita rápida antes de la salida hace que la primera hora sea más fluida.'],
        ]],
        ['h2', 'Cómo Reservar como Familia'],
        ['p', 'Reservar es simple. Envíenos un mensaje de WhatsApp con el número de adultos, el número y las edades de los niños, su fecha preferida y qué paquete le interesa. Calcularemos el total (recordando: menores de 6 gratis, 6-12 mitad de precio) y confirmaremos la disponibilidad al instante. No se necesita pago anticipado — paga en el barco.'],
        ['p', 'Si no está seguro de qué paquete se adapta mejor a su familia, simplemente pregunte. Para la mayoría de las familias, el paquete Estándar ofrece todo lo que necesita. La actualización Premium vale la pena si los adultos quieren disfrutar de bebidas alcohólicas con la cena. El paquete VIP con su mesa reservada junto a la ventana es ideal para familias que quieren un asiento garantizado en primera fila sin llegar temprano.'],
        ['p', 'Un crucero por el Bósforo es una de las raras experiencias de Estambul que realmente funciona para todas las edades. A sus hijos les encantarán las luces, la música y la aventura de estar en el agua por la noche. A usted le encantarán las vistas, la comida y unas horas de ser atendido mientras toda la familia se divierte junta.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Mejor Crucero con Cena por el Bósforo en Estambul 2026', blurb: 'Guía completa de paquetes, precios y qué esperar.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Cosas que Saber Antes de su Tour en Barco por Estambul', blurb: 'Consejos esenciales para los que navegan por el Bósforo por primera vez.' },
        'bosphorus-sunset-cruise-guide': { title: 'Guía del Crucero al Atardecer por el Bósforo', blurb: 'Hora dorada en el agua — la experiencia definitiva al atardecer.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Crucero por el Bósforo esta noche — Guía de última hora', blurb: 'Reserve un crucero el mismo día con confirmación instantánea por WhatsApp.' },
      },
    },
  },

  ru: {
    'index': {
      title: 'Блог — Bosphorus Night',
      desc: 'Советы по круизам по Босфору, путеводители и инсайдерские знания. Спланируйте идеальный ужин-круиз в Стамбуле с нашими экспертными статьями.',
      ogDesc: 'Советы по круизам по Босфору, путеводители и инсайдерские знания. Спланируйте идеальный ужин-круиз в Стамбуле.',
      h1: 'Блог',
      lead: 'Советы по круизам, путеводители по Стамбулу и инсайдерские знания, которые помогут вам спланировать идеальное приключение на Босфоре.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 апреля 2026', title: 'Лучший ужин-круиз по Босфору в Стамбуле 2026', blurb: 'Всё, что вам нужно знать о лучшем ужин-круизе Стамбула. От пакетов и цен до развлечений и потрясающих ночных видов.', alt: 'Корабль ужин-круиза по Босфору ночью с освещённым мостом' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 апреля 2026', title: 'Круиз по Босфору сегодня вечером — Руководство по бронированию в последнюю минуту', blurb: 'Хотите отправиться в круиз по Босфору сегодня вечером? Вот всё, что нужно знать о бронировании в последнюю минуту, наличии мест и как забронировать место.', alt: 'Интерьер роскошного обеденного зала круиза по Босфору' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 апреля 2026', title: 'Путеводитель по круизу на закате по Босфору', blurb: 'Испытайте золотой час Стамбула с воды. Всё о круизе с ужином на закате — расписание, что ожидать и почему это незабываемо.', alt: 'Драматичный закат над проливом Босфор' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 апреля 2026', title: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле', blurb: 'Планируете круиз по Босфору? От того, что надеть, до советов от морской болезни — вот 10 важных вещей, которые должен знать каждый новичок.', alt: 'Панорамный вид на лодку, плывущую по Босфору' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 апреля 2026', title: 'Круиз по Босфору с детьми — Семейный путеводитель', blurb: 'Подходит ли ужин-круиз для детей? Абсолютно. Дети до 6 лет бесплатно, 6-12 за полцены. Вот ваш полный путеводитель по семейному планированию.', alt: 'Семьи наслаждаются палубой круиза по Босфору' },
      ],
      readMore: 'Читать далее →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Лучший ужин-круиз по Босфору в Стамбуле 2026 — Полное руководство',
      desc: 'Всё, что вам нужно знать о лучшем ужин-круизе Стамбула. Пакеты от €24, живые турецкие шоу, потрясающие ночные виды. Бронируйте мгновенно.',
      h1: 'Лучший ужин-круиз по Босфору в Стамбуле 2026',
      alt: 'Роскошное круизное судно скользит под освещённым Босфорским мостом ночью',
      body: [
        ['p', 'Стамбул — один из немногих городов мира, где можно ужинать на воде, наблюдая, как вокруг вас зажигаются два континента. Ужин-круиз по Босфору — это не просто еда — это самое знаковое вечернее впечатление, которое предлагает город. Независимо от того, посещаете ли вы Стамбул впервые или возвращаетесь в очередной раз, проведённая на Босфоре ночь — это то, что вы будете помнить годами.'],
        ['h2', 'Что делает это особенным'],
        ['p', 'Босфор — это 30-километровый водный путь, разделяющий Европу и Азию. Ночью исторические дворцы, мечети и мосты вдоль его берегов освещены впечатляющим образом. Со своего столика на корабле вы увидите дворец Долмабахче, белым светящийся на фоне тёмного склона, Девичью башню, одиноко стоящую в воде с её тёплым жёлтым светом, и два больших висячих моста — Босфорский мост и мост Султана Мехмеда Фатиха — простирающиеся между континентами в лентах цвета.'],
        ['p', 'Маршрут круиза обычно отправляется с пристани Кабаташ, рядом с районом дворца Долмабахче. Корабль направляется на север вдоль европейского побережья, минуя украшенные прибрежные особняки, известные как яли, дворец Чираган и крепость Румели. Затем он поворачивает на юг вдоль азиатской стороны, открывая виды на дворец Бейлербейи и набережную Ускюдара перед возвращением. Всё путешествие занимает примерно три-четыре часа, в зависимости от пакета.'],
        ['h2', 'Впечатление от ужина'],
        ['p', 'Ужин подаётся как сет-меню, сочетающее турецкую и международную кухню. Вы можете ожидать выбор холодных и горячих закусок — хумус, фаршированные виноградные листья, сезонные салаты — затем основное блюдо из мяса на гриле или рыбы с рисом и жареными овощами. Десерт обычно представляет собой классическую турецкую сладость, такую как пахлава или кадаиф, в сочетании с турецким чаем или кофе. Безалкогольные напитки и вода включены во все пакеты, а алкогольные напитки доступны в опциях Premium и VIP.'],
        ['h2', 'Живые развлечения'],
        ['p', 'Развлекательная программа — одна из главных изюминок. Ожидайте полный состав традиционных турецких народных танцев, исполняемых в красочных региональных костюмах, энергичное выступление танца живота, живую музыку от турецкой группы и DJ-сет, который поддерживает настроение по мере продвижения вечера. Некоторые круизы также включают церемонию кружащихся дервишей — завораживающую суфийскую духовную практику, которая на протяжении веков является частью турецкой культуры. Шоу длится примерно 90 минут и предназначено для того, чтобы дать международным гостям богатый вкус турецкого исполнительского искусства.'],
        ['h2', 'Пакеты и цены'],
        ['p', 'В Bosphorus Night мы предлагаем два основных пакета с дополнительными опциями для напитков, трансфера из отеля и особых случаев:'],
        ['ul', [
          ['<strong class="text-white/80">Стандартный ужин-круиз (от €24)</strong> — Полный ужин из 4 блюд, безалкогольные напитки, живые развлечения, шоу народного танца и танца живота, DJ на верхней палубе. Самый популярный вариант для пар, семей и одиночных путешественников.'],
          ['<strong class="text-white/80">VIP ужин-круиз (от €55)</strong> — Расширенное меню, включающее премиум мясо (рибай, говяжья вырезка), 15+ турецких меззе, места рядом со сценой и улучшенное обслуживание. Идеально для особых случаев и годовщин.'],
        ]],
        ['p_sm', 'Дополнения: безлимитные напитки (€30/чел), трансфер из отеля (€10/чел), романтическая сервировка стола (€15/бронирование). Оплата на лодке — предоплата не требуется.'],
        ['p', 'Дети от 6 до 12 лет обычно платят половину цены, а дети до 6 лет — бесплатно. Предоплата не требуется — вы платите на корабле, что устраняет любые риски бронирования.'],
        ['h2', 'Как забронировать'],
        ['p', 'Самый простой способ забронировать — через WhatsApp. Просто отправьте нам сообщение с предпочитаемой датой, количеством гостей и какой пакет вас интересует. Наша команда отвечает в течение минут, подтверждает доступность и отправляет вам все детали — место встречи, время посадки и что ожидать. Нет онлайн-формы оплаты и нет депозита. Вы платите наличными или картой непосредственно на корабле.'],
        ['h2', 'Советы для лучшего впечатления'],
        ['p', 'Прибудьте на пристань не менее чем за 20 минут до отправления, чтобы получить хороший столик. Одевайтесь smart casual — корабль не слишком формальный, но вы будете чувствовать себя более комфортно в чём-то на шаг выше пляжной одежды. Возьмите лёгкую куртку или шаль, потому что верхняя палуба может быть ветреной даже летом. И держите телефон заряженным — вы захотите запечатлеть виды, особенно когда корабль проходит под освещёнными мостами.'],
        ['p', 'Ужин-круиз по Босфору, без преувеличения, — лучший способ испытать Стамбул ночью. Сочетание еды, живой культуры и видов городского горизонта, отражающихся в тёмной воде, ни с чем не сравнимо. Если вы делаете только один «большой вечер» во время поездки в Стамбул, пусть это будет именно он.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфору сегодня вечером — Руководство в последнюю минуту', blurb: 'Забронируйте круиз в тот же день с мгновенным подтверждением WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Путеводитель по круизу на закате по Босфору', blurb: 'Золотой час на воде — окончательное впечатление от заката.' },
        'things-to-know-istanbul-boat-tour': { title: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле', blurb: 'Важные советы для тех, кто впервые отправляется в круиз по Босфору.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфору с детьми — Семейный путеводитель', blurb: 'Семейные круизы с детьми до 6 лет бесплатно.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Круиз по Босфору сегодня вечером — Руководство по бронированию в последнюю минуту Стамбул',
      desc: 'Хотите отправиться в круиз по Босфору сегодня вечером? Вот как забронировать ужин-круиз в последнюю минуту в Стамбуле. Доступность в тот же день, мгновенное бронирование WhatsApp.',
      h1: 'Круиз по Босфору сегодня вечером — Руководство по бронированию в последнюю минуту',
      alt: 'Элегантный обеденный зал ужин-круиза по Босфору',
      body: [
        ['p', 'Сейчас 15:00, и вы только что решили, что хотите сделать что-то особенное сегодня вечером. Возможно, вы прибыли в Стамбул сегодня утром и хотите максимально использовать свой первый вечер. Возможно, погода оказалась лучше, чем ожидалось, и ночь на воде вдруг звучит идеально. Какова бы ни была причина, вопрос прост: можете ли вы ещё забронировать ужин-круиз по Босфору на сегодняшний вечер?'],
        ['p', 'Короткий ответ: <strong class="text-white/90">да</strong>. Бронирования в тот же день не только возможны — они обычны. Вот всё, что нужно знать о бронировании круиза в последнюю минуту в Стамбуле.'],
        ['h2', 'Можно ли действительно забронировать в тот же день?'],
        ['p', 'Абсолютно. В отличие от многих туристических мероприятий, требующих предварительного бронирования, ужин-круизы по Босфору используют большие суда, которые могут вместить сотни гостей. Это значит, что почти всегда есть свободные места, даже в тот же день. В пиковые летние месяцы (июль и август) выходные круизы могут заполняться быстрее, но будние круизы редко полностью распродаются. Весной и осенью места в последнюю минуту практически гарантированы.'],
        ['p', 'В Bosphorus Night мы держим нашу линию WhatsApp открытой с раннего утра до позднего вечера именно потому, что знаем, что многие гости решают в день поездки. Наша команда может подтвердить ваше бронирование в течение нескольких минут после вашего сообщения.'],
        ['h2', 'Какие туры проходят сегодня вечером?'],
        ['p', 'Стандартный ужин-круиз отправляется ежедневно с пристани Кабаташ. Типичное расписание работает так: посадка начинается около 19:30–20:00, корабль отправляется примерно в 20:30, а круиз длится около трёх часов, возвращаясь к пристани около 23:30. Некоторые операторы также предлагают закатный круиз, отправляющийся около 17:30 и возвращающийся к 21:00 — хотя для решения в последнюю минуту во второй половине дня вечерний ужин-круиз — более практичный вариант.'],
        ['p', 'Оба пакета — Стандарт и VIP — доступны для бронирования в тот же день. Стандартный пакет начинается от €24 за человека и включает полный ужин из 4 блюд, безалкогольные напитки и развлекательную программу. Вам не нужно выбирать пакет заранее; просто отправьте нам сообщение в WhatsApp, и мы проведём вас по вариантам.'],
        ['h2', 'Как добраться до Кабаташа'],
        ['p', 'Кабаташ — одна из самых доступных точек Стамбула. Если вы остановились в Султанахмете (старый город), трамвай T1 идёт прямо до Кабаташа — это последняя остановка. Поездка занимает около 25 минут. С Таксима вы можете сесть на фуникулёр (линия F1), который спускается прямо до Кабаташа менее чем за три минуты. С азиатской стороны возьмите паром до Кабаташа или Бешикташа. Такси из большинства центральных районов стоит от 100 до 200 TL в зависимости от трафика и расстояния.'],
        ['p', 'Мы рекомендуем прибыть в район пристани не позднее 19:30. Это даёт вам время найти место встречи, познакомиться с членом нашей команды, который проводит вас к лодке, и устроиться за столиком до отправления.'],
        ['h2', 'Что взять с собой'],
        ['p', 'Будьте простыми. Возьмите телефон для фотографий, лёгкую куртку или кардиган для верхней палубы (даже летние вечера могут быть ветреными на воде), и наличные или карту для оплаты на корабле. Дресс-кода нет, но smart casual работает лучше всего — подумайте о красивой рубашке или блузке вместо шорт и шлёпанцев. Дамам может понадобиться резинка для волос или шарф, так как ветер усиливается, когда корабль начинает двигаться.'],
        ['h2', 'Процесс бронирования'],
        ['p', 'Вот как это работает в три быстрых шага:'],
        ['ol', [
          ['<strong class="text-white/80">Отправьте нам сообщение в WhatsApp</strong> — Скажите нам, сколько гостей, ваш предпочитаемый пакет (или попросите рекомендацию) и подтвердите сегодняшнюю дату.'],
          ['<strong class="text-white/80">Получите мгновенное подтверждение</strong> — Мы отвечаем в течение минут, указав адрес места встречи, время посадки и любые другие детали, которые вам нужны.'],
          ['<strong class="text-white/80">Приходите и наслаждайтесь</strong> — Без депозита, без предоплаты, без печатных билетов. Просто прибудьте в место встречи, а наша команда позаботится обо всём остальном. Оплачивайте непосредственно на корабле.'],
        ]],
        ['p', 'Действительно никакого риска. Если ваши планы изменятся и вам нужно будет отменить, просто сообщите нам в WhatsApp — даже за пару часов до отправления — это нормально. Никаких отмен, никаких вопросов.'],
        ['p', 'Так что если сегодня кажется ночью Босфора, не думайте слишком много. Отправьте быстрое сообщение в WhatsApp, и через несколько часов вы будете ужинать на воде с горизонтом Стамбула, светящимся вокруг вас.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Лучший ужин-круиз по Босфору в Стамбуле 2026', blurb: 'Полное руководство по пакетам, ценам и тому, что ожидать.' },
        'bosphorus-sunset-cruise-guide': { title: 'Путеводитель по круизу на закате по Босфору', blurb: 'Золотой час на воде — окончательное впечатление от заката.' },
        'things-to-know-istanbul-boat-tour': { title: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле', blurb: 'Важные советы для тех, кто впервые отправляется в круиз по Босфору.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфору с детьми — Семейный путеводитель', blurb: 'Семейные круизы с детьми до 6 лет бесплатно.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Закатный круиз по Босфору — Что ожидать и почему это того стоит',
      desc: 'Испытайте золотой час Стамбула с воды. 3-часовой закатный ужин-круиз с живыми шоу, отправление 17:30 от Кабаташа. Полный путеводитель внутри.',
      h1: 'Закатный круиз по Босфору — Что ожидать и почему это того стоит',
      alt: 'Драматичный золотой закат над проливом Босфор с силуэтами мечетей',
      body: [
        ['p', 'Есть причина, по которой фотографы, пары и опытные путешественники все говорят одно и то же: если вы хотите увидеть Стамбул в его самой прекрасной форме, посмотрите закат с Босфора. То, как свет превращает воду в золото, окрашивает минареты в янтарные тона и постепенно уступает место вечернему свечению города — это одно из тех впечатлений, которое остаётся с вами надолго после того, как вы покинете Турцию.'],
        ['p', 'Закатный круиз по Босфору превращает это природное зрелище в полное вечернее впечатление, дополненное ужином, живыми развлечениями и панорамными видами, с которыми не сравнится ни один бар на крыше.'],
        ['h2', 'Почему час заката волшебен'],
        ['p', 'Стамбул расположен примерно на 41 градусе северной широты, что означает, что время заката значительно меняется в течение года. Летом солнце садится около 20:30, отбрасывая длинный золотой час, который простирается по воде. Весной и осенью закат приходит раньше — около 18:00 до 19:00 — создавая более драматичный, быстрый переход от дня к ночи. В любом случае Босфор действует как естественное зеркало, отражая цвета неба и усиливая зрелище.'],
        ['p', 'Что делает закат на Босфоре уникальным, так это горизонт. Когда солнце опускается за европейской стороной, силуэты мечети Сулеймание, Святой Софии и Голубой мечети появляются на оранжево-розовом небе. Между тем азиатская сторона ловит последний тёплый свет на своих прибрежных дворцах и зелёных холмах. Вы буквально наблюдаете, как солнце садится между двумя континентами — немногие места на Земле могут предложить такую перспективу.'],
        ['h2', 'Впечатление от круиза'],
        ['p', 'Закатный ужин-круиз обычно отправляется от пристани Кабаташ около 17:30, хотя время немного корректируется в зависимости от времени года, чтобы поймать золотой час в пик. Корабль направляется на север вдоль пролива, открывая виды на дворец Долмабахче, дворец Чираган, мечеть Ортакёй и Босфорский мост — все купаются в тёплом свете.'],
        ['p', 'Ужин подаётся, когда солнце начинает садиться. Меню включает разнообразие турецких и международных блюд: тарелки холодных меззе, мясо на гриле или свежая рыба, сезонные овощи и традиционные десерты, такие как пахлава. Безалкогольные напитки включены в Стандартный пакет, а опции Premium и VIP добавляют алкогольные напитки — и есть нечто особенно приятное в том, чтобы потягивать бокал турецкого вина, наблюдая, как небо меняет цвет над водой.'],
        ['p', 'Когда опускается темнота, начинается развлекательная программа. Традиционные турецкие народные танцы, выступление танца живота, живая музыка, а иногда церемония кружащихся дервишей заполняют оставшиеся часы. Переход от золотого заката к ночному освещению города плавный — в один момент вы наблюдаете, как угасает последний свет, а в следующий — вы окружены мерцающими огнями набережной Стамбула.'],
        ['h2', 'Советы по фотографии'],
        ['p', 'Закатный круиз — мечта фотографа, но несколько советов помогут вам получить лучшие кадры. Во-первых, поднимитесь на верхнюю палубу примерно за 30 минут до заката — это когда свет самый тёплый, а цвета самые яркие. Снимайте на запад (европейская сторона) для классического силуэта заката над минаретами. Используйте отражения воды, чтобы добавить глубины вашим композициям.'],
        ['p', 'Для смартфон-фотографов включите режим HDR, чтобы запечатлеть как яркое небо, так и более тёмный передний план. Избегайте использования вспышки — она испортит естественную теплоту света. Панорамный режим прекрасно работает для захвата широкой панорамы горизонта. И не забудьте отложить телефон на пару минут и просто смотреть. Некоторые моменты лучше пережить, чем снять.'],
        ['h2', 'Что надеть'],
        ['p', 'Верхняя палуба будет ветреной, особенно когда корабль в движении. Даже в тёплый летний вечер температура заметно падает на воде после заката. Лёгкая куртка, кардиган или шаль необходимы. Слои работают лучше всего — вам может быть комфортно в футболке во время золотого часа, но вы будете благодарны за дополнительный слой, когда наступит темнота. Обувь с некоторым сцеплением предпочтительнее каблуков или сандалий на гладкой подошве, так как палуба может быть слегка скользкой от морских брызг.'],
        ['h2', 'Закатный круиз vs. Ужин-круиз — В чём разница?'],
        ['p', 'Основная разница — время и атмосфера. Закатный круиз отправляется поздним днём и даёт вам это впечатление золотого часа плюс переход к ночи. Стандартный ужин-круиз отправляется позже (около 20:00–20:30) и полностью является ночным впечатлением — городские огни, освещённые мосты и более тёмное, более романтическое настроение.'],
        ['p', 'Если вы выбираете между двумя, подумайте, что для вас важнее всего. Закатный круиз предлагает лучшие возможности для фотографии и более разнообразный визуальный опыт (день к ночи). Ужин-круиз — классический выбор для романтического вечера или праздничного вечера с городом, полностью освещённым с самого начала. Оба включают ужин и полную развлекательную программу.'],
        ['p', 'Для тех, у кого есть время, идеальная комбинация — закатный круиз в один вечер и ужин-круиз в другой — это действительно разные впечатления. Но если вы можете выбрать только один, закатный круиз предлагает нечто действительно уникальное: возможность наблюдать, как Стамбул превращается из золотого в серебряный, когда два континента переходят от дня к ночи вокруг вас.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Лучший ужин-круиз по Босфору в Стамбуле 2026', blurb: 'Полное руководство по пакетам, ценам и тому, что ожидать.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфору сегодня вечером — Руководство в последнюю минуту', blurb: 'Забронируйте круиз в тот же день с мгновенным подтверждением WhatsApp.' },
        'things-to-know-istanbul-boat-tour': { title: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле', blurb: 'Важные советы для тех, кто впервые отправляется в круиз по Босфору.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфору с детьми — Семейный путеводитель', blurb: 'Семейные круизы с детьми до 6 лет бесплатно.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле',
      desc: 'Планируете круиз по Босфору? Вот 10 важных советов: что надеть, что взять, что ожидать и как получить лучшее впечатление от лодочной экскурсии в Стамбуле.',
      h1: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле',
      alt: 'Панорамный вид на круизный корабль на Босфоре с горизонтом Стамбула',
      body: [
        ['p', 'Круиз по Босфору — одно из тех впечатлений, которое практически каждый посетитель Стамбула вносит в свой список — и не без причины. Но как и любое путешествие, знание нескольких вещей заранее может сделать разницу между хорошим вечером и отличным. Вот десять важных советов от нашей команды, которые помогут вам получить максимум от вашей лодочной экскурсии в Стамбуле.'],
        ['h2_sm', '1. Одевайтесь слоями'],
        ['p', 'Это совет номер один, который мы даём каждому гостю. Стамбульские вечера могут быть обманчиво прохладными на воде, даже летом. Температура на верхней палубе обычно на 5–8 градусов ниже, чем то, что вы чувствовали на берегу, и ветер от движения корабля делает её ещё прохладнее. Лёгкая куртка, кардиган или пашмина обязательны. В весенние и осенние месяцы рекомендуется настоящая куртка. Вы будете рады, что взяли её, когда захотите выйти и насладиться видами с открытой палубы.'],
        ['h2_sm', '2. Возьмите камеру (и держите телефон заряженным)'],
        ['p', 'Босфор ночью необыкновенно фотогеничен. Освещённые дворцы, мосты, увешанные цветными огнями, мечети, освещённые снизу, и городской горизонт, отражающийся в тёмной воде — будут десятки моментов, достойных запечатления. Убедитесь, что ваш телефон полностью заряжен перед посадкой, или возьмите небольшой пауэрбанк. Если у вас есть камера с ночным режимом или возможностью съёмки при слабом освещении, возьмите её. Некоторые из лучших кадров получаются с верхней палубы, когда корабль проходит под Босфорским мостом.'],
        ['h2_sm', '3. Прибудьте не менее чем за 20 минут раньше'],
        ['p', 'Посадка осуществляется по принципу «первый пришёл, первый обслужен» для выбора столика (если только вы не забронировали VIP-пакет с зарезервированным столиком у окна). Прибытие за 20 минут до указанного времени посадки даёт вам лучший шанс получить столик рядом с окнами или у сцены. Наша команда на месте встречи будет там, чтобы проводить вас к кораблю, но если вы прибудете прямо во время отправления, вы можете оказаться за менее идеальным столиком.'],
        ['h2_sm', '4. Выберите правильное время тура'],
        ['p', 'Обычно есть два варианта круиза: закатный круиз (отправление около 17:30) и ужин-круиз (отправление около 20:00–20:30). Закатный круиз даёт вам впечатление золотого часа и переход от дня к ночи — идеально для фотографов и тех, кто предпочитает более ранний вечер. Ужин-круиз — это классическое ночное впечатление с полностью освещённым городом. Оба включают полный ужин и развлекательную программу. Если это ваш первый раз, ужин-круиз — самый популярный выбор.'],
        ['h2_sm', '5. Бронируйте через WhatsApp для самого быстрого ответа'],
        ['p', 'Хотя вы можете найти круизы по Босфору через различные онлайн-платформы, бронирование напрямую через WhatsApp — самый быстрый и гибкий вариант. Вы получаете мгновенный ответ, можете задавать вопросы в реальном времени и получать персональные рекомендации на основе размера вашей группы и предпочтений. Нет формы для заполнения и нет ожидания подтверждений по электронной почте. Просто отправьте сообщение с датой, количеством гостей и предпочитаемым пакетом, и у вас будет подтверждённое бронирование в течение минут.'],
        ['h2_sm', '6. Предоплата не требуется'],
        ['p', 'Это удивляет многих путешественников, но авторитетные операторы круизов по Босфору — включая Bosphorus Night — не требуют никакой предоплаты. Вы бронируете своё место через WhatsApp, прибываете на пристань и платите на корабле. Это означает, что для вас нет финансового риска. Если ваши планы изменятся, просто сообщите нам, и не будет никакой платы. Оплату на корабле можно произвести наличными (турецкие лиры, евро или доллары США) или кредитной/дебетовой картой.'],
        ['h2_sm', '7. Морская болезнь редко становится проблемой'],
        ['p', 'Босфор — это пролив, а не открытое море. Вода относительно спокойная, особенно по сравнению с океанскими водами. Круизные корабли большие и устойчивые, а маршрут всё время остаётся в защищённом проливе. Подавляющее большинство гостей вообще не испытывают дискомфорта от движения. Если вы особенно чувствительны, сидение в центре корабля (а не на носу или корме) обеспечивает самую устойчивую поездку. Еда в желудке также помогает — поэтому ужин на самом деле является хорошей профилактикой.'],
        ['h2_sm', '8. Знайте лучшие места для фотографий'],
        ['p', 'Три самых фотографируемых момента в круизе: прохождение под Босфорским мостом (огни прямо над вами и отражаются в воде), вид Девичьей башни, одиноко стоящей посреди пролива, и панорамный вид горизонта старого города с его мечетями и минаретами. Верхняя палуба предлагает лучшие беспрепятственные виды для фотографий. Поднимайтесь между блюдами или во время перерывов в развлечениях — персонал придержит ваш столик для вас.'],
        ['h2_sm', '9. Дети приветствуются'],
        ['p', 'Ужин-круизы по Босфору ориентированы на семьи. Дети до 6 лет плывут бесплатно, а дети от 6 до 12 лет платят половину цены. Развлекательная программа — особенно народные танцы и музыка — обычно завораживает детей. Корабли безопасны и просторны, с закрытыми обеденными зонами и охраняемыми верхними палубами. Тем не менее, держите малышей под присмотром рядом с перилами и лестницами. Если вы путешествуете семьёй, сообщите нам при бронировании, чтобы мы могли организовать подходящий столик.'],
        ['h2_sm', '10. Бесплатная отмена — Всегда'],
        ['p', 'Жизнь происходит. Погода меняется, уровень энергии падает, планы сдвигаются. С Bosphorus Night отмена всегда бесплатна. Отменяете ли вы за неделю или за пару часов до отправления — нет платы и нет штрафа. Просто отправьте нам сообщение в WhatsApp. Это одно из преимуществ модели без предоплаты — поскольку вы ничего не заплатили, отмена так же проста, как быстрое сообщение. Мы предпочитаем, чтобы вы пришли, когда у вас есть настроение наслаждаться.'],
        ['p_top', 'Вооружившись этими десятью советами, вы готовы получить лучшее возможное впечатление от круиза по Босфору. Сочетание ночной красоты Стамбула, полного турецкого ужина и живых развлечений делает это одним из самых запоминающихся вечеров, которые вы можете провести где-либо в мире. Просто помните: слои, заряженный телефон и приходите пораньше.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Лучший ужин-круиз по Босфору в Стамбуле 2026', blurb: 'Полное руководство по пакетам, ценам и тому, что ожидать.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфору сегодня вечером — Руководство в последнюю минуту', blurb: 'Забронируйте круиз в тот же день с мгновенным подтверждением WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Путеводитель по круизу на закате по Босфору', blurb: 'Золотой час на воде — окончательное впечатление от заката.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфору с детьми — Семейный путеводитель', blurb: 'Семейные круизы с детьми до 6 лет бесплатно.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Круиз по Босфору с детьми — Семейный путеводитель Стамбул',
      desc: 'Подходит ли ужин-круиз по Босфору для детей? Да! Дети до 6 лет бесплатно, 6-12 за полцены. Семейные советы, что ожидать и как забронировать.',
      h1: 'Круиз по Босфору с детьми — Семейный путеводитель',
      alt: 'Семьи наслаждаются открытой палубой круиза по Босфору',
      body: [
        ['p', 'Один из самых распространённых вопросов, которые мы получаем от семей, планирующих поездку в Стамбул: «Подходит ли ужин-круиз по Босфору для детей?» Ответ — уверенное да. Фактически многие семьи говорят нам, что круиз стал главным моментом всего их отпуска — не только для родителей, но и для детей. Вот всё, что нужно знать о том, чтобы взять семью в круиз по Босфору.'],
        ['h2', 'Возрастная политика и ценообразование'],
        ['p', 'Наши цены для детей просты и ориентированы на семьи. Дети в возрасте 0–3 лет плавают полностью бесплатно — без билета, без платы. Дети в возрасте 4–8 лет платят половину взрослой цены. С детей в возрасте 9 лет и старше взимается полная взрослая стоимость. Это касается обоих пакетов: Стандарт и VIP.'],
        ['p', 'Для семьи из четырёх человек с двумя детьми в возрасте 4–8 лет ужин-круиз по Босфору стоит всего €72 в общей сложности для Стандартного пакета — это два взрослых билета по €24 каждый плюс два детских билета за полцены по €12 каждый. За незабываемый вечер на воде со всей семьёй это представляет отличную ценность по сравнению с сидячим рестораном в туристических районах.'],
        ['h2', 'Безопасно ли это для детей?'],
        ['p', 'Круизные корабли, используемые для ужин-туров по Босфору, — это большие, устойчивые коммерческие суда — а не маленькие частные лодки. У них закрытые обеденные зоны на нижних палубах и открытые смотровые зоны на верхней палубе с надлежащими перилами и защитными барьерами. Босфор — это пролив с относительно спокойными водами, поэтому поездка плавная и устойчивая. Морская болезнь крайне редка, даже среди детей.'],
        ['p', 'Тем не менее, как и в любой прибрежной среде, действует здравый смысл. Держите бдительный взгляд на малышей рядом с лестницами и открытыми зонами палубы. Экипаж привык иметь семьи на борту и поможет обеспечить безопасность детей, но родительский надзор всегда является первой линией безопасности.'],
        ['h2', 'Что больше всего нравится детям'],
        ['p', 'Вы можете подумать, что ужин-круиз — это прежде всего взрослое впечатление, но дети постоянно реагируют на несколько элементов вечера. Живые развлечения — самый большой хит — красочные костюмы народного танца, энергичная музыка и особенно представление танца живота обычно очаровывают детей всех возрастов. Многие дети в итоге хлопают в ладоши, танцуют на своих местах или пытаются подражать движениям.'],
        ['p', 'Сама поездка на лодке захватывает детей, которые никогда не были на большом судне. Наблюдение за освещёнными мостами, проходящими сверху, обнаружение Девичьей башни и видение городских огней с воды — всё это поистине захватывающие впечатления для молодых глаз. Верхняя палуба, где дети могут чувствовать ветер и видеть, как мимо проходит вода, обычно является любимым местом.'],
        ['p', 'Старшие дети (8 лет и старше) часто интересуются достопримечательностями вдоль маршрута. Указывание на дворцы, мечети и крепости, когда корабль их проходит, может превратить круиз в неформальный урок истории — особенно если вы посещали эти места в течение дня.'],
        ['h2', 'Меню для детей'],
        ['p', 'Меню ужина — это установленное турецкое и международное предложение. Хотя нет отдельного детского меню, выбор достаточно широк, чтобы большинство детей нашли много еды. Хлеб, рис, курица на гриле и салаты — все мягкие и знакомые. Выбор холодных меззе включает такие позиции, как хумус и сыр, которые дети обычно любят. Десерты — особенно пахлава и сладкая выпечка — универсально популярны среди младших гостей.'],
        ['p', 'Если у вашего ребёнка есть специфические диетические потребности или аллергии, сообщите нам при бронировании, и мы сможем проверить с кухней заранее. Безалкогольные напитки, вода и сок включены во все пакеты, поэтому дети не будут испытывать жажды.'],
        ['h2', 'Советы для семей'],
        ['ul', [
          ['<strong class="text-white/80">Возьмите лёгкую куртку для каждого ребёнка</strong> — Верхняя палуба становится ветреной, и дети часто хотят проводить время на улице, наблюдая за водой и огнями.'],
          ['<strong class="text-white/80">Рассмотрите закатный круиз</strong> — Он отправляется раньше (около 17:30) и возвращается к 21:00, что лучше подходит для расписания сна младших детей, чем ужин-круиз, возвращающийся около 23:30.'],
          ['<strong class="text-white/80">Приходите пораньше для хорошего столика</strong> — Столик у окна рядом со сценой даёт детям лучшее впечатление. VIP-пакеты гарантируют это, но прибытие за 20 минут раньше для Стандарта или Premium также помогает.'],
          ['<strong class="text-white/80">Возьмите маленькие отвлекающие предметы</strong> — Хотя развлечения и виды поддерживают занятость большинства детей, наличие маленькой раскраски или планшета, загруженного фильмом, может помочь в более спокойные моменты для очень маленьких детей.'],
          ['<strong class="text-white/80">Воспользуйтесь туалетами перед посадкой</strong> — На корабле есть туалеты, но они могут быть заняты в пиковые моменты. Быстрое посещение перед отправлением делает первый час более плавным.'],
        ]],
        ['h2', 'Как забронировать как семья'],
        ['p', 'Бронирование просто. Отправьте нам сообщение в WhatsApp с количеством взрослых, количеством и возрастом детей, предпочитаемой датой и тем, какой пакет вас интересует. Мы рассчитаем итог (помня: до 6 лет бесплатно, 6-12 за полцены) и подтвердим доступность мгновенно. Предоплата не требуется — вы платите на корабле.'],
        ['p', 'Если вы не уверены, какой пакет лучше всего подходит для вашей семьи, просто спросите. Для большинства семей Стандартный пакет предлагает всё, что вам нужно. Обновление Premium стоит того, если взрослые хотят насладиться алкогольными напитками с ужином. VIP-пакет с зарезервированным столиком у окна идеален для семей, желающих гарантированное место в первом ряду без раннего прибытия.'],
        ['p', 'Круиз по Босфору — одно из редких впечатлений Стамбула, которое действительно работает для каждого возраста. Ваши дети полюбят огни, музыку и приключение быть на воде ночью. Вы полюбите виды, еду и несколько часов заботы, пока вся семья весело проводит время вместе.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Лучший ужин-круиз по Босфору в Стамбуле 2026', blurb: 'Полное руководство по пакетам, ценам и тому, что ожидать.' },
        'things-to-know-istanbul-boat-tour': { title: '10 вещей, которые нужно знать перед лодочной экскурсией в Стамбуле', blurb: 'Важные советы для тех, кто впервые отправляется в круиз по Босфору.' },
        'bosphorus-sunset-cruise-guide': { title: 'Путеводитель по круизу на закате по Босфору', blurb: 'Золотой час на воде — окончательное впечатление от заката.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфору сегодня вечером — Руководство в последнюю минуту', blurb: 'Забронируйте круиз в тот же день с мгновенным подтверждением WhatsApp.' },
      },
    },
  },

  ar: {
    'index': {
      title: 'المدونة — Bosphorus Night',
      desc: 'نصائح حول رحلات البوسفور البحرية، أدلة ومعرفة من الداخل. خطط لرحلة العشاء المثالية في إسطنبول مع مقالاتنا التخصصية.',
      ogDesc: 'نصائح حول رحلات البوسفور البحرية، أدلة ومعرفة من الداخل. خطط لرحلة العشاء المثالية في إسطنبول.',
      h1: 'المدونة',
      lead: 'نصائح للرحلات البحرية، أدلة إسطنبول، ومعرفة من الداخل لمساعدتك على تخطيط تجربة البوسفور المثالية.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 أبريل 2026', title: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026', blurb: 'كل ما تحتاج لمعرفته عن أفضل تجربة عشاء بحرية في إسطنبول. من الباقات والأسعار إلى الترفيه والمناظر الليلية الخلابة.', alt: 'قارب رحلة العشاء البحرية في البوسفور ليلاً مع جسر مضاء' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 أبريل 2026', title: 'رحلة البوسفور البحرية الليلة — دليل الحجز في اللحظة الأخيرة', blurb: 'تريد الإبحار في البوسفور الليلة؟ إليك كل ما تحتاج لمعرفته عن حجوزات اللحظة الأخيرة والتوافر وكيفية تأمين مقعدك.', alt: 'داخل قاعة طعام فاخرة لرحلة بحرية في البوسفور' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 أبريل 2026', title: 'دليل رحلة الغروب البحرية في البوسفور', blurb: 'اختبر الساعة الذهبية في إسطنبول من الماء. كل شيء عن رحلة العشاء عند الغروب — التوقيت وما تتوقعه ولماذا لا تُنسى.', alt: 'غروب درامي فوق مضيق البوسفور' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 أبريل 2026', title: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول', blurb: 'تخطط لرحلة البوسفور البحرية؟ من ما تلبسه إلى نصائح دوار البحر، إليك 10 أشياء أساسية يجب أن يعرفها كل مبتدئ.', alt: 'منظر بانورامي لقارب يبحر في البوسفور' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 أبريل 2026', title: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات', blurb: 'هل رحلة العشاء البحرية مناسبة للأطفال؟ بالتأكيد. الأطفال دون 6 سنوات مجاناً، 6-12 بنصف السعر. إليك دليل التخطيط العائلي الكامل.', alt: 'عائلات تستمتع بسطح رحلة البوسفور البحرية' },
      ],
      readMore: 'اقرأ المزيد ←',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026 — الدليل الكامل',
      desc: 'كل ما تحتاج لمعرفته عن أفضل رحلة عشاء بحرية في إسطنبول. باقات من €24، عروض تركية حية، مناظر ليلية خلابة. احجز فوراً.',
      h1: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026',
      alt: 'قارب رحلة فاخرة ينزلق تحت جسر البوسفور المضاء ليلاً',
      body: [
        ['p', 'إسطنبول هي واحدة من المدن القليلة في العالم حيث يمكنك تناول العشاء على الماء بينما تشاهد قارتين تضيئان حولك. رحلة العشاء البحرية في البوسفور ليست مجرد وجبة — إنها التجربة المسائية الأكثر شهرة التي تقدمها المدينة. سواء كنت تزور إسطنبول لأول مرة أو تعود لرحلة أخرى، فإن قضاء ليلة في البوسفور هو شيء ستتذكره لسنوات.'],
        ['h2', 'ما يجعلها مميزة'],
        ['p', 'البوسفور ممر مائي بطول 30 كيلومتراً يفصل أوروبا عن آسيا. ليلاً، تضاء القصور التاريخية والمساجد والجسور على ضفافه بطريقة مذهلة. من طاولتك على القارب، سترى قصر دولمابهتشه يتوهج بالأبيض على خلفية التلة المظلمة، وبرج الفتاة يقف وحيداً في الماء بضوئه الأصفر الدافئ، والجسرين المعلقين الكبيرين — جسر البوسفور وجسر السلطان محمد الفاتح — يمتدان بين القارتين بأشرطة من اللون.'],
        ['p', 'يبدأ مسار الرحلة عادة من رصيف كاباتاش، بالقرب من منطقة قصر دولمابهتشه. يتجه القارب شمالاً على طول الساحل الأوروبي، مروراً بالقصور الساحلية المزخرفة المعروفة باسم اليالي، وقصر تشيراغان، وقلعة روملي. ثم يدور جنوباً على طول الجانب الآسيوي، ويوفر مناظر لقصر بيلربيي وواجهة أوسكودار البحرية قبل العودة. تستغرق الرحلة بأكملها حوالي ثلاث إلى أربع ساعات، حسب الباقة.'],
        ['h2', 'تجربة العشاء'],
        ['p', 'يقدم العشاء كقائمة محددة تجمع بين المطبخ التركي والعالمي. يمكنك توقع مجموعة من المقبلات الباردة والساخنة — الحمص، وأوراق العنب المحشية، والسلطات الموسمية — يليها طبق رئيسي من اللحم المشوي أو السمك مع الأرز والخضروات المشوية. الحلوى عادة ما تكون حلوى تركية كلاسيكية مثل البقلاوة أو الكنافة، تقدم مع الشاي أو القهوة التركية. المشروبات الغازية والماء مشمولة في جميع الباقات، في حين تتوفر المشروبات الكحولية مع خياري Premium وVIP.'],
        ['h2', 'الترفيه الحي'],
        ['p', 'برنامج الترفيه هو أحد أبرز المعالم. توقع سلسلة كاملة من الرقصات الشعبية التركية التقليدية المؤداة بأزياء إقليمية ملونة، وأداء طاقة الرقص الشرقي، وموسيقى حية من فرقة تركية، ومجموعة DJ تحافظ على المزاج مع تقدم الليل. تتضمن بعض الرحلات أيضاً حفل الدراويش الدوارة — ممارسة روحية صوفية ساحرة كانت جزءاً من الثقافة التركية لعدة قرون. يستمر العرض لمدة 90 دقيقة تقريباً ومصمم ليعطي الضيوف الدوليين طعماً غنياً من الفنون الأدائية التركية.'],
        ['h2', 'الباقات والأسعار'],
        ['p', 'في Bosphorus Night نقدم باقتين رئيسيتين، مع إضافات اختيارية للمشروبات ونقل الفندق والمناسبات الخاصة:'],
        ['ul', [
          ['<strong class="text-white/80">رحلة العشاء العادية (من €24)</strong> — عشاء كامل من 4 أطباق، مشروبات غازية، ترفيه حي، عروض رقص شعبي ورقص شرقي، DJ على السطح العلوي. الخيار الأكثر شعبية للأزواج والعائلات والمسافرين بمفردهم.'],
          ['<strong class="text-white/80">رحلة العشاء VIP (من €55)</strong> — قائمة موسعة تشمل اللحوم المتميزة (ضلع العين، فيليه البقر)، 15+ مزة تركية، مقاعد بجانب المسرح، وخدمة مرتفعة. مثالية للمناسبات الخاصة والذكرى السنوية.'],
        ]],
        ['p_sm', 'الإضافات: مشروبات غير محدودة (€30/شخص)، نقل الفندق (€10/شخص)، تجهيز طاولة رومانسية (€15/حجز). الدفع على القارب — لا حاجة للدفع المسبق.'],
        ['p', 'الأطفال من سن 6 إلى 12 سنة يدفعون عادة نصف السعر، والأطفال دون 6 سنوات مجاناً. لا يلزم الدفع المسبق — تدفع على القارب، مما يلغي أي خطر للحجز.'],
        ['h2', 'كيف تحجز'],
        ['p', 'أسهل طريقة للحجز هي عبر واتساب. ما عليك سوى إرسال رسالة لنا مع تاريخك المفضل وعدد الضيوف والباقة التي تهمك. فريقنا يرد في غضون دقائق، يؤكد التوافر، ويرسل لك جميع التفاصيل — نقطة الالتقاء ووقت الصعود وما تتوقعه. لا يوجد نموذج دفع عبر الإنترنت ولا وديعة. تدفع نقداً أو ببطاقة مباشرة على القارب.'],
        ['h2', 'نصائح لأفضل تجربة'],
        ['p', 'وصل إلى الرصيف على الأقل قبل 20 دقيقة من المغادرة للحصول على طاولة جيدة. ارتد ملابس أنيقة عصرية — القارب ليس رسمياً للغاية، لكنك ستشعر براحة أكبر بشيء أعلى بخطوة من ملابس الشاطئ. أحضر سترة خفيفة أو شالاً لأن السطح العلوي يمكن أن يكون عاصفاً حتى في الصيف. وحافظ على هاتفك مشحوناً — ستريد التقاط المناظر، خاصة عندما يمر القارب تحت الجسور المضاءة.'],
        ['p', 'رحلة العشاء البحرية في البوسفور هي، دون مبالغة، أفضل طريقة لاختبار إسطنبول ليلاً. مزيج الطعام والثقافة الحية ومناظر أفق المدينة المنعكسة على الماء المظلم لا يشبه أي شيء آخر. إذا كنت تقوم بـ"ليلة كبيرة" واحدة فقط خلال رحلتك إلى إسطنبول، فاجعلها هذه.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'رحلة البوسفور البحرية الليلة — دليل اللحظة الأخيرة', blurb: 'احجز رحلة في نفس اليوم مع تأكيد فوري عبر واتساب.' },
        'bosphorus-sunset-cruise-guide': { title: 'دليل رحلة الغروب البحرية في البوسفور', blurb: 'الساعة الذهبية على الماء — التجربة المطلقة عند الغروب.' },
        'things-to-know-istanbul-boat-tour': { title: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول', blurb: 'نصائح أساسية لأول مبحرين في البوسفور.' },
        'bosphorus-cruise-with-kids-family': { title: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات', blurb: 'رحلات صديقة للعائلات مع الأطفال دون 6 سنوات مجاناً.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'رحلة البوسفور البحرية الليلة — دليل الحجز في اللحظة الأخيرة إسطنبول',
      desc: 'تريد الإبحار في البوسفور الليلة؟ إليك كيفية حجز رحلة عشاء بحرية في اللحظة الأخيرة في إسطنبول. توافر في نفس اليوم، حجز فوري عبر واتساب.',
      h1: 'رحلة البوسفور البحرية الليلة — دليل الحجز في اللحظة الأخيرة',
      alt: 'قاعة طعام أنيقة لرحلة العشاء البحرية في البوسفور',
      body: [
        ['p', 'الساعة الآن 3 مساءً وقد قررت للتو أنك تريد القيام بشيء مميز الليلة. ربما وصلت إلى إسطنبول هذا الصباح وتريد الاستفادة القصوى من أول مساء لك. ربما كان الطقس أفضل مما كان متوقعاً وأصبحت ليلة على الماء تبدو مثالية فجأة. مهما كان السبب، السؤال بسيط: هل لا يزال بإمكانك حجز رحلة عشاء بحرية في البوسفور لهذه الليلة؟'],
        ['p', 'الإجابة المختصرة هي <strong class="text-white/90">نعم</strong>. حجوزات نفس اليوم ليست فقط ممكنة — بل شائعة. إليك كل ما تحتاج لمعرفته عن حجز رحلة بحرية في اللحظة الأخيرة في إسطنبول.'],
        ['h2', 'هل يمكنك حقاً الحجز في نفس اليوم؟'],
        ['p', 'بالتأكيد. على عكس العديد من الأنشطة السياحية التي تتطلب حجوزات مسبقة، تشغل رحلات العشاء البحرية في البوسفور سفناً كبيرة يمكنها استيعاب مئات الضيوف. هذا يعني أنه دائماً تقريباً يوجد توافر، حتى في نفس اليوم. خلال أشهر الصيف الذروة (يوليو وأغسطس)، يمكن لرحلات عطلة نهاية الأسبوع أن تمتلئ بشكل أسرع، لكن رحلات أيام الأسبوع نادراً ما تباع بالكامل. في الربيع والخريف، تكون أماكن اللحظة الأخيرة مضمونة عملياً.'],
        ['p', 'في Bosphorus Night، نبقي خط واتساب مفتوحاً من الصباح الباكر حتى وقت متأخر من المساء تحديداً لأننا نعلم أن العديد من الضيوف يقررون في اليوم نفسه. يمكن لفريقنا تأكيد حجزك في غضون دقائق من رسالتك.'],
        ['h2', 'أي جولات تعمل الليلة؟'],
        ['p', 'تنطلق رحلة العشاء العادية يومياً من رصيف كاباتاش. الجدول النموذجي يعمل بهذه الطريقة: يبدأ الصعود حوالي 19:30 إلى 20:00، ينطلق القارب حوالي 20:30، وتستمر الرحلة حوالي ثلاث ساعات، عائدة إلى الرصيف حوالي 23:30. يقدم بعض المشغلين أيضاً رحلة غروب الشمس التي تنطلق حوالي 17:30 وتعود بحلول 21:00 — على الرغم من أنه بالنسبة لقرار اللحظة الأخيرة بعد الظهر، فإن رحلة عشاء المساء هي الخيار الأكثر عملية.'],
        ['p', 'كلتا الباقتين — العادية وVIP — متوفرتان للحجز في نفس اليوم. تبدأ الباقة العادية من €24 للشخص الواحد وتشمل عشاء كامل من 4 أطباق ومشروبات غازية وبرنامج ترفيهي. لست بحاجة لاختيار باقتك مسبقاً؛ فقط راسلنا على واتساب وسنشرح لك الخيارات.'],
        ['h2', 'كيف تصل إلى كاباتاش'],
        ['p', 'كاباتاش هي إحدى أكثر النقاط سهولة في الوصول في إسطنبول. إذا كنت تقيم في السلطان أحمد (المدينة القديمة)، فإن ترام T1 يذهب مباشرة إلى كاباتاش — إنها المحطة الأخيرة. تستغرق الرحلة حوالي 25 دقيقة. من ميدان تقسيم، يمكنك ركوب القطار المائل (الخط F1)، الذي ينزل مباشرة إلى كاباتاش في أقل من ثلاث دقائق. من الجانب الآسيوي، خذ عبارة إلى كاباتاش أو بشكطاش. تكلفة سيارات الأجرة من معظم المناطق المركزية بين 100-200 ليرة تركية حسب حركة المرور والمسافة.'],
        ['p', 'نوصي بالوصول إلى منطقة الرصيف بحلول 19:30 على الأكثر. هذا يمنحك الوقت للعثور على نقطة الالتقاء، ومقابلة عضو فريقنا الذي سيرشدك إلى القارب، والاستقرار في طاولتك قبل المغادرة.'],
        ['h2', 'ماذا تحضر'],
        ['p', 'حافظ على البساطة. أحضر هاتفك للصور، وسترة خفيفة أو كارديغان للسطح العلوي (حتى أمسيات الصيف يمكن أن تكون عاصفة على الماء)، ونقداً أو بطاقة للدفع على القارب. لا يوجد قواعد لباس، ولكن الأناقة العصرية تعمل بشكل أفضل — فكر في قميص أنيق أو بلوزة بدلاً من السراويل القصيرة والشباشب. قد ترغب السيدات في ربطة شعر أو وشاح حيث يزداد الرياح عندما يكون القارب في حركة.'],
        ['h2', 'عملية الحجز'],
        ['p', 'إليك كيف تعمل في ثلاث خطوات سريعة:'],
        ['ol', [
          ['<strong class="text-white/80">راسلنا على واتساب</strong> — أخبرنا بعدد الضيوف، باقتك المفضلة (أو اطلب توصية)، وأكد تاريخ الليلة.'],
          ['<strong class="text-white/80">احصل على تأكيد فوري</strong> — نرد في غضون دقائق بعنوان نقطة الالتقاء ووقت الصعود وأي تفاصيل أخرى تحتاجها.'],
          ['<strong class="text-white/80">احضر واستمتع</strong> — لا وديعة ولا دفع مسبق ولا تذاكر مطبوعة. فقط احضر إلى نقطة الالتقاء وفريقنا يهتم بالباقي. تدفع مباشرة على القارب.'],
        ]],
        ['p', 'حقاً لا توجد مخاطر متضمنة. إذا تغيرت خططك واحتجت إلى الإلغاء، فقط أخبرنا على واتساب — حتى قبل ساعات قليلة من المغادرة لا بأس. لا رسوم إلغاء، لا أسئلة تطرح.'],
        ['p', 'لذا إذا شعرت الليلة وكأنها ليلة البوسفور، فلا تفكر كثيراً. أرسل رسالة واتساب سريعة، وفي غضون ساعات قليلة ستتناول العشاء على الماء مع أفق إسطنبول يتوهج حولك.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026', blurb: 'دليل كامل للباقات والأسعار وما تتوقعه.' },
        'bosphorus-sunset-cruise-guide': { title: 'دليل رحلة الغروب البحرية في البوسفور', blurb: 'الساعة الذهبية على الماء — التجربة المطلقة عند الغروب.' },
        'things-to-know-istanbul-boat-tour': { title: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول', blurb: 'نصائح أساسية لأول مبحرين في البوسفور.' },
        'bosphorus-cruise-with-kids-family': { title: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات', blurb: 'رحلات صديقة للعائلات مع الأطفال دون 6 سنوات مجاناً.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'رحلة الغروب البحرية في البوسفور — ماذا تتوقع ولماذا تستحق ذلك',
      desc: 'اختبر الساعة الذهبية في إسطنبول من الماء. رحلة عشاء بحرية لمدة 3 ساعات عند الغروب مع عروض حية، انطلاق 17:30 من كاباتاش. دليل كامل بالداخل.',
      h1: 'رحلة الغروب البحرية في البوسفور — ماذا تتوقع ولماذا تستحق ذلك',
      alt: 'غروب ذهبي درامي فوق مضيق البوسفور مع صور ظلية للمساجد',
      body: [
        ['p', 'هناك سبب لقول المصورين والأزواج والمسافرين المتمرسين نفس الشيء: إذا كنت تريد رؤية إسطنبول في أبهى صورها، شاهد الغروب من البوسفور. الطريقة التي يحول بها الضوء الماء إلى ذهب، ويرسم المآذن بألوان العنبر، ويفسح المجال ببطء لتوهج المدينة المسائي — إنها واحدة من تلك التجارب التي تبقى معك لفترة طويلة بعد مغادرة تركيا.'],
        ['p', 'رحلة الغروب البحرية في البوسفور تأخذ هذا المشهد الطبيعي وتحوله إلى تجربة مسائية كاملة، كاملة مع العشاء والترفيه الحي والمناظر البانورامية التي لا يستطيع أي حانة على السطح أن يضاهيها.'],
        ['h2', 'لماذا ساعة الغروب سحرية'],
        ['p', 'تقع إسطنبول على دائرة عرض 41 درجة شمالاً تقريباً، مما يعني أن أوقات الغروب تختلف بشكل كبير على مدار العام. في الصيف، تغرب الشمس حوالي 20:30، ملقية ساعة ذهبية طويلة تمتد عبر الماء. في الربيع والخريف، يأتي الغروب مبكراً — حوالي 18:00 إلى 19:00 — مما يخلق انتقالاً أكثر دراماتيكية وأسرع من النهار إلى الليل. في كلتا الحالتين، يعمل البوسفور كمرآة طبيعية، يعكس ألوان السماء ويضخم المشهد.'],
        ['p', 'ما يجعل غروب البوسفور مميزاً بشكل فريد هو الأفق. مع غروب الشمس خلف الجانب الأوروبي، تظهر صور ظلية لمسجد السليمانية وآيا صوفيا والمسجد الأزرق على السماء البرتقالية الوردية. في غضون ذلك، يلتقط الجانب الآسيوي آخر ضوء دافئ على قصوره الساحلية وتلاله الخضراء. أنت حرفياً تشاهد الشمس تغرب بين قارتين — قليلة هي الأماكن على الأرض التي يمكن أن تقدم هذا المنظور.'],
        ['h2', 'تجربة الرحلة'],
        ['p', 'تنطلق رحلة العشاء عند الغروب عادة من رصيف كاباتاش حوالي 17:30، على الرغم من أن التوقيت يتم تعديله قليلاً مع الفصول لالتقاط الساعة الذهبية في ذروتها. يتجه القارب شمالاً على طول المضيق، ويعطيك مناظر لقصر دولمابهتشه وقصر تشيراغان ومسجد أورتاكوي وجسر البوسفور — جميعها مغمورة بالضوء الدافئ.'],
        ['p', 'يقدم العشاء عند بدء غروب الشمس. تتميز القائمة بمجموعة من الأطباق التركية والعالمية: أطباق المزة الباردة، اللحوم المشوية أو السمك الطازج، الخضروات الموسمية، والحلويات التقليدية مثل البقلاوة. المشروبات الغازية مشمولة في الباقة العادية، بينما تضيف خيارات Premium وVIP المشروبات الكحولية — وهناك شيء ممتع بشكل خاص في احتساء كأس من النبيذ التركي بينما تشاهد السماء تتغير لونها فوق الماء.'],
        ['p', 'مع حلول الظلام، يبدأ برنامج الترفيه. تملأ الرقصات الشعبية التركية التقليدية وعرض الرقص الشرقي والموسيقى الحية وأحياناً حفل الدراويش الدوارة الساعات المتبقية. الانتقال من الغروب الذهبي إلى إضاءة المدينة الليلية سلس — في لحظة تشاهد آخر ضوء يتلاشى، وفي اللحظة التالية أنت محاط بالأضواء المتلألئة لواجهة إسطنبول البحرية.'],
        ['h2', 'نصائح التصوير'],
        ['p', 'رحلة الغروب هي حلم المصور، لكن بعض النصائح ستساعدك على الحصول على أفضل اللقطات. أولاً، اتجه إلى السطح العلوي قبل حوالي 30 دقيقة من الغروب — حينها يكون الضوء أكثر دفئاً والألوان أكثر حيوية. صور باتجاه الغرب (الجانب الأوروبي) للحصول على الصورة الظلية الكلاسيكية للغروب فوق المآذن. استخدم انعكاسات الماء لإضافة عمق إلى تكويناتك.'],
        ['p', 'لمصوري الهواتف الذكية، قم بتشغيل وضع HDR لالتقاط كل من السماء الساطعة والمقدمة الأكثر إعتاماً. تجنب استخدام الفلاش — سيفسد دفء الضوء الطبيعي. يعمل وضع البانوراما بشكل جميل لالتقاط الامتداد الواسع للأفق. ولا تنسى وضع الهاتف جانباً لبضع دقائق وفقط الانتباه. بعض اللحظات أفضل أن تُعاش من أن تُصور.'],
        ['h2', 'ماذا ترتدي'],
        ['p', 'السطح العلوي سيكون عاصفاً، خاصة بمجرد أن يكون القارب في حركة. حتى في مساء صيفي دافئ، تنخفض درجات الحرارة بشكل ملحوظ على الماء بعد الغروب. سترة خفيفة أو كارديغان أو شال أمر ضروري. الطبقات تعمل بشكل أفضل — قد تكون مرتاحاً في قميص خلال الساعة الذهبية ولكنك ممتن لطبقة إضافية بمجرد حلول الظلام. الأحذية ذات القبضة الجيدة مفضلة على الكعب أو الصنادل ذات النعل الناعم، حيث يمكن أن يكون السطح زلقاً قليلاً من رذاذ البحر.'],
        ['h2', 'رحلة الغروب مقابل رحلة العشاء — ما الفرق؟'],
        ['p', 'الفرق الرئيسي هو التوقيت والأجواء. تنطلق رحلة الغروب في وقت متأخر من بعد الظهر وتمنحك تجربة الساعة الذهبية بالإضافة إلى الانتقال إلى الليل. تنطلق رحلة العشاء العادية لاحقاً (حوالي 20:00-20:30) وهي تجربة ليلية بالكامل — أضواء المدينة والجسور المضاءة ومزاج أكثر إعتاماً ورومانسية.'],
        ['p', 'إذا كنت تختار بين الاثنين، فكر في ما يهمك أكثر. تقدم رحلة الغروب أفضل فرص التصوير وتجربة بصرية أكثر تنوعاً (نهار إلى ليل). رحلة العشاء هي الخيار الكلاسيكي لأمسية رومانسية أو ليلة احتفالية، مع المدينة مضاءة بالكامل من البداية. كلاهما يشمل العشاء وبرنامج الترفيه الكامل.'],
        ['p', 'لأولئك الذين لديهم وقت، فإن المجموعة المثالية هي رحلة غروب في إحدى الأمسيات ورحلة عشاء في أمسية أخرى — إنها حقاً تجارب مختلفة. ولكن إذا كان بإمكانك اختيار واحدة فقط، فإن رحلة الغروب تقدم شيئاً فريداً حقاً: فرصة مشاهدة إسطنبول تتحول من الذهب إلى الفضة بينما تتلاشى قارتان من النهار إلى الليل حولك.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026', blurb: 'دليل كامل للباقات والأسعار وما تتوقعه.' },
        'istanbul-cruise-tonight-last-minute': { title: 'رحلة البوسفور البحرية الليلة — دليل اللحظة الأخيرة', blurb: 'احجز رحلة في نفس اليوم مع تأكيد فوري عبر واتساب.' },
        'things-to-know-istanbul-boat-tour': { title: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول', blurb: 'نصائح أساسية لأول مبحرين في البوسفور.' },
        'bosphorus-cruise-with-kids-family': { title: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات', blurb: 'رحلات صديقة للعائلات مع الأطفال دون 6 سنوات مجاناً.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول',
      desc: 'تخطط لرحلة البوسفور البحرية؟ إليك 10 نصائح أساسية: ماذا ترتدي، ماذا تحضر، ماذا تتوقع، وكيف تحصل على أفضل تجربة في جولة قاربك في إسطنبول.',
      h1: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول',
      alt: 'منظر بانورامي لقارب رحلة في البوسفور مع أفق إسطنبول',
      body: [
        ['p', 'رحلة البوسفور البحرية هي إحدى تلك التجارب التي يضعها عملياً كل زائر لإسطنبول على قائمته — ولسبب وجيه. ولكن كأي تجربة سفر، معرفة بعض الأشياء مسبقاً يمكن أن تحدث الفرق بين أمسية جيدة وأمسية رائعة. إليك عشر نصائح أساسية من فريقنا لمساعدتك في الحصول على أقصى استفادة من جولة قاربك في إسطنبول.'],
        ['h2_sm', '1. ارتد طبقات'],
        ['p', 'هذه هي النصيحة رقم واحد التي نقدمها لكل ضيف. يمكن أن تكون أمسيات إسطنبول باردة بشكل خادع على الماء، حتى في الصيف. عادة ما تكون درجة الحرارة على السطح العلوي أقل بمقدار 5 إلى 8 درجات مما شعرت به على الشاطئ، والرياح الناجمة عن حركة القارب تجعلها تبدو أكثر برودة. سترة خفيفة أو كارديغان أو باشمينا أمر ضروري. خلال أشهر الربيع والخريف، يوصى بسترة مناسبة. ستكون سعيداً لأنك أحضرتها عندما تريد الخروج والاستمتاع بالمناظر من السطح المفتوح.'],
        ['h2_sm', '2. أحضر كاميرا (واحتفظ بهاتفك مشحوناً)'],
        ['p', 'البوسفور ليلاً جميل بشكل استثنائي للتصوير. القصور المضاءة، والجسور المزينة بأضواء ملونة، والمساجد المضاءة من الأسفل، وأفق المدينة المنعكس على الماء المظلم — ستكون هناك عشرات اللحظات تستحق الالتقاط. تأكد من أن هاتفك مشحون بالكامل قبل الصعود، أو أحضر بنك طاقة صغير. إذا كان لديك كاميرا بوضع ليلي أو قدرة على الإضاءة المنخفضة، أحضرها. تأتي بعض أفضل اللقطات من السطح العلوي عندما يمر القارب تحت جسر البوسفور.'],
        ['h2_sm', '3. وصل قبل 20 دقيقة على الأقل'],
        ['p', 'الصعود هو الأول يأتي أولاً يخدم لاختيار الطاولة (إلا إذا حجزت باقة VIP مع طاولة نافذة محجوزة). الوصول قبل 20 دقيقة من وقت الصعود المعلن يمنحك أفضل فرصة للحصول على طاولة بالقرب من النوافذ أو قريبة من المسرح. سيكون فريق نقطة الالتقاء لدينا هناك لإرشادك إلى القارب، ولكن إذا وصلت في وقت المغادرة تماماً، فقد تنتهي في طاولة أقل مثالية.'],
        ['h2_sm', '4. اختر وقت الجولة المناسب'],
        ['p', 'عادة ما يكون هناك خياران للرحلة: رحلة الغروب (تنطلق حوالي 17:30) ورحلة العشاء (تنطلق حوالي 20:00-20:30). تمنحك رحلة الغروب تجربة الساعة الذهبية والانتقال من النهار إلى الليل — مثالية للمصورين وأولئك الذين يفضلون أمسية أبكر. رحلة العشاء هي التجربة الليلية الكلاسيكية مع المدينة مضاءة بالكامل. كلاهما يشمل عشاء كامل وبرنامج ترفيه. إذا كانت هذه هي المرة الأولى لك، فإن رحلة العشاء هي الخيار الأكثر شعبية.'],
        ['h2_sm', '5. احجز عبر واتساب للحصول على أسرع رد'],
        ['p', 'بينما يمكنك العثور على رحلات البوسفور البحرية عبر منصات إلكترونية متنوعة، فإن الحجز مباشرة عبر واتساب هو الخيار الأسرع والأكثر مرونة. تحصل على رد فوري، يمكنك طرح أسئلة في الوقت الفعلي، وتتلقى توصيات شخصية بناءً على حجم مجموعتك وتفضيلاتك. لا يوجد نموذج لملئه ولا انتظار لتأكيدات البريد الإلكتروني. فقط أرسل رسالة بتاريخك وعدد الضيوف والباقة المفضلة، وسيكون لديك حجز مؤكد في غضون دقائق.'],
        ['h2_sm', '6. لا حاجة للدفع المسبق'],
        ['p', 'هذا يفاجئ العديد من المسافرين، لكن مشغلي رحلات البوسفور البحرية ذوي السمعة الطيبة — بما في ذلك Bosphorus Night — لا يطلبون أي دفع مقدم. تحجز مقعدك عبر واتساب، تحضر إلى الرصيف، وتدفع على القارب. هذا يعني أنه لا توجد مخاطر مالية لك. إذا تغيرت خططك، فقط أخبرنا ولا توجد رسوم. يمكن سداد الدفعة على القارب نقداً (الليرة التركية أو اليورو أو الدولار الأمريكي) أو ببطاقة ائتمان/خصم.'],
        ['h2_sm', '7. دوار البحر نادراً ما يكون مشكلة'],
        ['p', 'البوسفور مضيق وليس بحراً مفتوحاً. الماء هادئ نسبياً، خاصة مقارنة بمياه المحيط. القوارب السياحية كبيرة ومستقرة، ويبقى الطريق ضمن المضيق المحمي طوال الوقت. الغالبية العظمى من الضيوف لا يعانون من أي انزعاج من الحركة على الإطلاق. إذا كنت حساساً بشكل خاص، فإن الجلوس في وسط القارب (بدلاً من المقدمة أو المؤخرة) يوفر الرحلة الأكثر استقراراً. وجود الطعام في معدتك يساعد أيضاً — لذا فإن تناول العشاء هو في الواقع وقاية جيدة.'],
        ['h2_sm', '8. اعرف أفضل أماكن التصوير'],
        ['p', 'اللحظات الثلاث الأكثر تصويراً في الرحلة هي: المرور تحت جسر البوسفور (الأضواء مباشرة فوقك وتنعكس على الماء)، منظر برج الفتاة يقف وحده في وسط المضيق، والمنظر البانورامي لأفق المدينة القديمة بمساجدها ومآذنها. يقدم السطح العلوي أفضل المناظر دون عائق للصور. اصعد بين الأطباق أو خلال فترات الاستراحة في الترفيه — سيحتفظ الموظفون بطاولتك من أجلك.'],
        ['h2_sm', '9. الأطفال مرحب بهم'],
        ['p', 'رحلات العشاء البحرية في البوسفور صديقة للعائلات. يبحر الأطفال دون 6 سنوات مجاناً، ويدفع الأطفال من 6 إلى 12 سنة نصف السعر. برنامج الترفيه — خاصة الرقصات الشعبية والموسيقى — يميل إلى افتتان الأطفال. القوارب آمنة وواسعة، مع مناطق طعام مغلقة وأسطح علوية محروسة. ومع ذلك، راقب الأطفال الأصغر سناً بالقرب من الدرابزينات والسلالم. إذا كنت تسافر كعائلة، أخبرنا عند الحجز حتى نتمكن من ترتيب طاولة مناسبة.'],
        ['h2_sm', '10. إلغاء مجاني — دائماً'],
        ['p', 'الحياة تحدث. الطقس يتغير، مستويات الطاقة تنخفض، الخطط تتحول. مع Bosphorus Night، الإلغاء دائماً مجاني. سواء ألغيت قبل أسبوع أو قبل ساعات قليلة من المغادرة، لا توجد رسوم ولا عقوبة. فقط أرسل لنا رسالة واتساب. هذه إحدى مزايا نموذج عدم الدفع المسبق — بما أنك لم تدفع شيئاً، فإن الإلغاء بسيط مثل رسالة سريعة. نفضل أن تأتي عندما تكون في مزاج للاستمتاع به.'],
        ['p_top', 'مسلحاً بهذه النصائح العشر، أنت مستعد للحصول على أفضل تجربة ممكنة لرحلة البوسفور البحرية. مزيج جمال إسطنبول الليلي والعشاء التركي الكامل والترفيه الحي يجعل هذه واحدة من أكثر الأمسيات التي لا تنسى التي يمكنك الحصول عليها في أي مكان في العالم. فقط تذكر: الطبقات، الهاتف المشحون، والوصول مبكراً.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026', blurb: 'دليل كامل للباقات والأسعار وما تتوقعه.' },
        'istanbul-cruise-tonight-last-minute': { title: 'رحلة البوسفور البحرية الليلة — دليل اللحظة الأخيرة', blurb: 'احجز رحلة في نفس اليوم مع تأكيد فوري عبر واتساب.' },
        'bosphorus-sunset-cruise-guide': { title: 'دليل رحلة الغروب البحرية في البوسفور', blurb: 'الساعة الذهبية على الماء — التجربة المطلقة عند الغروب.' },
        'bosphorus-cruise-with-kids-family': { title: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات', blurb: 'رحلات صديقة للعائلات مع الأطفال دون 6 سنوات مجاناً.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات إسطنبول',
      desc: 'هل رحلة العشاء البحرية في البوسفور مناسبة للأطفال؟ نعم! الأطفال دون 6 سنوات مجاناً، 6-12 بنصف السعر. نصائح للعائلات وما تتوقعه وكيفية الحجز.',
      h1: 'رحلة البوسفور البحرية مع الأطفال — دليل العائلات',
      alt: 'عائلات تستمتع بالسطح المفتوح لرحلة البوسفور البحرية',
      body: [
        ['p', 'إحدى الأسئلة الأكثر شيوعاً التي نتلقاها من العائلات التي تخطط لرحلتها إلى إسطنبول هي: "هل رحلة العشاء البحرية في البوسفور مناسبة للأطفال؟" الإجابة هي نعم واثق. في الواقع، تخبرنا العديد من العائلات أن الرحلة كانت أبرز معالم عطلتهم بأكملها — ليس فقط للوالدين، بل للأطفال أيضاً. إليك كل ما تحتاج لمعرفته عن أخذ عائلتك في رحلة بحرية في البوسفور.'],
        ['h2', 'سياسة العمر والأسعار'],
        ['p', 'أسعارنا للأطفال بسيطة وصديقة للعائلات. يبحر الأطفال في سن 0-3 سنوات مجاناً تماماً — لا تذكرة ولا رسوم. الأطفال في سن 4-8 سنوات يدفعون نصف سعر البالغين. يتم محاسبة الأطفال البالغين 9 سنوات وما فوق بسعر البالغين الكامل. ينطبق هذا على كلتا الباقتين: العادية وVIP.'],
        ['p', 'لعائلة من أربعة أفراد مع طفلين في سن 4-8، تكلف رحلة العشاء البحرية في البوسفور €72 إجمالاً للباقة العادية — هذه تذكرتان للبالغين بـ€24 لكل منهما زائد تذكرتي طفل بنصف السعر بـ€12 لكل منهما. لأمسية لا تُنسى على الماء مع العائلة بأكملها، هذا يمثل قيمة ممتازة مقارنة بمطعم جلوس في المناطق السياحية.'],
        ['h2', 'هل هو آمن للأطفال؟'],
        ['p', 'القوارب السياحية المستخدمة في جولات العشاء في البوسفور هي سفن تجارية كبيرة ومستقرة — وليست قوارب خاصة صغيرة. لديها مناطق طعام مغلقة على الأسطح السفلية ومناطق مشاهدة مفتوحة على السطح العلوي مع درابزينات وحواجز أمان مناسبة. البوسفور مضيق بمياه هادئة نسبياً، لذا فإن الرحلة سلسة ومستقرة. دوار البحر نادر للغاية، حتى بين الأطفال.'],
        ['p', 'مع ذلك، كما هو الحال في أي بيئة على الواجهة البحرية، تنطبق الفطرة السليمة. احتفظ بعين يقظة على الأطفال الصغار بالقرب من السلالم ومناطق السطح المفتوحة. الطاقم معتاد على وجود عائلات على متن السفينة وسيساعد في ضمان بقاء الأطفال آمنين، لكن الإشراف الأبوي هو دائماً الخط الأول للسلامة.'],
        ['h2', 'ما يستمتع به الأطفال أكثر'],
        ['p', 'قد تعتقد أن رحلة العشاء هي تجربة للبالغين بشكل أساسي، لكن الأطفال يستجيبون باستمرار لعدة عناصر من الأمسية. الترفيه الحي هو الأكثر شعبية — أزياء الرقص الشعبي الملونة، الموسيقى النشيطة، وخاصة عرض الرقص الشرقي يميل إلى أسر الأطفال من جميع الأعمار. ينتهي العديد من الأطفال بالتصفيق، أو الرقص في مقاعدهم، أو محاولة تقليد الحركات.'],
        ['p', 'ركوب القارب نفسه مثير للأطفال الذين لم يكونوا على متن سفينة كبيرة من قبل. مشاهدة الجسور المضاءة تمر فوقها، ورؤية برج الفتاة، ورؤية أضواء المدينة من الماء كلها تجارب مثيرة حقاً للعيون الشابة. السطح العلوي، حيث يمكن للأطفال الشعور بالرياح ورؤية الماء يندفع، عادة ما يكون مكاناً مفضلاً.'],
        ['p', 'الأطفال الأكبر سناً (8 سنوات وما فوق) غالباً ما يصبحون مهتمين بالمعالم على طول الطريق. الإشارة إلى القصور والمساجد والقلاع عندما يمر القارب بها يمكن أن يحول الرحلة إلى درس تاريخ غير رسمي — خاصة إذا كنت قد زرت هذه المواقع خلال النهار.'],
        ['h2', 'القائمة للأطفال'],
        ['p', 'قائمة العشاء هي مزيج تركي ودولي محدد. على الرغم من عدم وجود قائمة منفصلة للأطفال، إلا أن الاختيار واسع بما يكفي بحيث يجد معظم الأطفال الكثير ليأكلوه. الخبز والأرز والدجاج المشوي والسلطات كلها معتدلة ومألوفة. تتضمن مجموعة المزة الباردة عناصر مثل الحمص والجبن التي يستمتع بها الأطفال عادة. الحلويات — خاصة البقلاوة والمعجنات الحلوة — تحظى بشعبية عالمياً بين الضيوف الأصغر سناً.'],
        ['p', 'إذا كان لطفلك احتياجات غذائية خاصة أو حساسية، أخبرنا عند الحجز ويمكننا التحقق مع المطبخ مسبقاً. المشروبات الغازية والماء والعصير مشمولة في جميع الباقات، لذلك لن يعطش الأطفال.'],
        ['h2', 'نصائح للعائلات'],
        ['ul', [
          ['<strong class="text-white/80">أحضر سترة خفيفة لكل طفل</strong> — يصبح السطح العلوي عاصفاً ويرغب الأطفال غالباً في قضاء الوقت في الخارج لمشاهدة الماء والأضواء.'],
          ['<strong class="text-white/80">فكر في رحلة الغروب</strong> — تنطلق في وقت أبكر (حوالي 17:30) وتعود بحلول 21:00، مما يعمل بشكل أفضل لجداول نوم الأطفال الأصغر سناً من رحلة العشاء التي تعود حوالي 23:30.'],
          ['<strong class="text-white/80">وصل مبكراً لطاولة جيدة</strong> — طاولة بجانب النافذة بالقرب من المسرح تمنح الأطفال أفضل تجربة. تضمن باقات VIP ذلك، ولكن الوصول قبل 20 دقيقة للباقة العادية أو Premium يساعد أيضاً.'],
          ['<strong class="text-white/80">أحضر ملهيات صغيرة</strong> — على الرغم من أن الترفيه والمناظر تحافظ على انخراط معظم الأطفال، فإن وجود كتاب تلوين صغير أو جهاز لوحي محمل بفيلم يمكن أن يساعد خلال اللحظات الأكثر هدوءاً للأطفال الصغار جداً.'],
          ['<strong class="text-white/80">استخدم دورات المياه قبل الصعود</strong> — يحتوي القارب على دورات مياه، لكنها قد تصبح مشغولة خلال اللحظات الذروية. زيارة سريعة قبل المغادرة تجعل الساعة الأولى أكثر سلاسة.'],
        ]],
        ['h2', 'كيفية الحجز كعائلة'],
        ['p', 'الحجز بسيط. أرسل لنا رسالة واتساب بعدد البالغين، وعدد وأعمار الأطفال، وتاريخك المفضل، وأي باقة تهمك. سنحسب المجموع (تذكر: دون 6 مجاناً، 6-12 نصف السعر) وسنؤكد التوافر فوراً. لا حاجة للدفع المسبق — تدفع على القارب.'],
        ['p', 'إذا لم تكن متأكداً من الباقة الأنسب لعائلتك، اسأل فقط. لمعظم العائلات، تقدم الباقة العادية كل ما تحتاجه. الترقية إلى Premium تستحق ذلك إذا أراد البالغون الاستمتاع بالمشروبات الكحولية مع العشاء. باقة VIP بطاولتها النوافذية المحجوزة مثالية للعائلات التي تريد مقعداً مضموناً في الصف الأمامي دون الوصول مبكراً.'],
        ['p', 'رحلة البوسفور البحرية هي إحدى تجارب إسطنبول النادرة التي تعمل حقاً لكل عمر. سيحب أطفالك الأضواء والموسيقى ومغامرة كونهم على الماء ليلاً. ستحب المناظر والطعام وبضع ساعات من الرعاية بينما تستمتع العائلة بأكملها معاً.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'أفضل رحلة عشاء بحرية في البوسفور إسطنبول 2026', blurb: 'دليل كامل للباقات والأسعار وما تتوقعه.' },
        'things-to-know-istanbul-boat-tour': { title: '10 أشياء يجب معرفتها قبل جولة القارب في إسطنبول', blurb: 'نصائح أساسية لأول مبحرين في البوسفور.' },
        'bosphorus-sunset-cruise-guide': { title: 'دليل رحلة الغروب البحرية في البوسفور', blurb: 'الساعة الذهبية على الماء — التجربة المطلقة عند الغروب.' },
        'istanbul-cruise-tonight-last-minute': { title: 'رحلة البوسفور البحرية الليلة — دليل اللحظة الأخيرة', blurb: 'احجز رحلة في نفس اليوم مع تأكيد فوري عبر واتساب.' },
      },
    },
  },
};

// ============================================================
// TEMPLATE RENDERERS
// ============================================================

const HREFLANGS = ['en', 'tr', 'de', 'es', 'ru', 'ar', 'fr', 'it', 'zh', 'hi', 'ur', 'bg', 'fa', 'id', 'ms', 'pl', 'ro', 'ja', 'ko', 'uk'];

function hreflangBlock(slug) {
  const isIndex = slug === 'index';
  const enPath = isIndex ? '/blog/' : `/blog/${slug}`;
  const langPath = (l) => isIndex ? `/${l}/blog/` : `/${l}/blog/${slug}`;
  const lines = [`  <link rel="alternate" hreflang="en" href="https://www.bosphorusnight.com${enPath}">`];
  for (const l of HREFLANGS.filter(x => x !== 'en')) {
    lines.push(`  <link rel="alternate" hreflang="${l}" href="https://www.bosphorusnight.com${langPath(l)}">`);
  }
  lines.push(`  <link rel="alternate" hreflang="x-default" href="https://www.bosphorusnight.com${enPath}">`);
  return lines.join('\n');
}

function commonHeadBoilerplate() {
  return `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'navy-dark': '#0b1120',
            'navy': '#101a30',
            'navy-light': '#152240',
            'gold': '#c9a84c',
            'gold-light': '#d4b86a',
          }
        }
      }
    }
  </script>
  <!-- Google tag (gtag.js) — GA4 + Google Ads -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-P09XEBMNWE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-P09XEBMNWE');
    gtag('config', 'AW-18073952031');
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; }
  </style>`;
}

function headerHtml(lang, ui, isIndex) {
  const blogClass = isIndex
    ? 'text-[#c9a84c] text-sm transition-colors font-medium'
    : 'text-white/60 hover:text-[#c9a84c] text-sm transition-colors';
  return `  <header class="bg-[#0b1120]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/${lang}/" class="flex items-center gap-2">
        <span style="font-family:'Playfair Display',serif" class="text-xl font-bold text-[#c9a84c]">BOSPHORUS</span>
        <span style="font-family:'Playfair Display',serif" class="text-xs text-white/70 tracking-widest uppercase">Night</span>
      </a>
      <div class="flex gap-4">
        <a href="/${lang}/blog/" class="${blogClass}">${ui.blogLink}</a>
        <a href="/${lang}/" class="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">${ui.homeLink}</a>
      </div>
    </div>
  </header>`;
}

function footerHtml(ui) {
  return `  <footer class="border-t border-white/5 py-8 text-center mt-16">
    <p class="text-white/30 text-sm">${ui.footerCopy}</p>
    <p class="text-white/15 text-xs mt-2">${ui.footerLegal}</p>
  </footer>`;
}

function floatingWhatsappHtml(lang, ui) {
  return `  <!-- ========== FLOATING WHATSAPP (auto-injected via scripts/inject-floating-wa.js) ========== -->
  <a id="floatingWhatsapp"
     href="https://wa.me/905322442922?text=${ui.waMsg}"
     target="_blank"
     rel="noopener"
     onclick="if(window.bnTrack){window.bnTrack('Lead',{value:0,currency:'EUR',contact_method:'whatsapp',content_name:'floating_button',language:'${lang}'});}"
     aria-label="${ui.floatingWaAria}"
     class="group fixed left-12 bottom-20 lg:bottom-6 z-[54] inline-flex items-center pl-11 pr-4 py-1.5 rounded-full border border-[#25D366]/60 bg-[#0a0f1e]/70 backdrop-blur-md hover:border-[#25D366] hover:bg-[#0a0f1e]/90 shadow-lg shadow-black/20 transition-all duration-300">
    <svg class="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#25D366" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
      <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    <span class="text-white text-xs font-semibold whitespace-nowrap">${ui.floatingWaText}</span>
    <span class="relative flex w-2 h-2 flex-shrink-0 ml-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
    </span>
  </a>
  <script>
  (function(){
    var wa=document.getElementById('floatingWhatsapp');if(!wa)return;
    var f=function(){var b=(window.innerHeight+window.scrollY)>=(document.body.offsetHeight-80);
      wa.classList.toggle('opacity-0',b);wa.classList.toggle('translate-y-4',b);wa.classList.toggle('pointer-events-none',b);};
    window.addEventListener('scroll',f,{passive:true});window.addEventListener('resize',f);f();
  })();
  </script>`;
}

function renderBody(body) {
  return body.map(([type, content]) => {
    if (type === 'p') return `        <p>${content}</p>`;
    if (type === 'p_sm') return `        <p class="text-white/60 text-sm">${content}</p>`;
    if (type === 'p_top') return `        <p class="pt-4">${content}</p>`;
    if (type === 'h2') return `        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${content}</h2>`;
    if (type === 'h2_sm') return `        <h2 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-4">${content}</h2>`;
    if (type === 'ul') {
      const items = content.map(([item]) => `          <li>${item}</li>`).join('\n');
      return `        <ul class="list-disc list-inside space-y-2 text-white/60">\n${items}\n        </ul>`;
    }
    if (type === 'ol') {
      const items = content.map(([item]) => `          <li>${item}</li>`).join('\n');
      return `        <ol class="list-decimal list-inside space-y-2 text-white/60">\n${items}\n        </ol>`;
    }
    return '';
  }).join('\n\n');
}

function renderArticle(lang, ui, slug, t) {
  const meta = ARTICLES_META[slug];
  const dateStr = ui.dateStrings[meta.date.slice(5)];
  const canonical = `https://www.bosphorusnight.com/${lang}/blog/${slug}`;
  const imageAbs = `https://www.bosphorusnight.com${meta.image}`;
  const dirAttr = ui.isRtl ? ' dir="rtl"' : '';

  const ctaSvg = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.728-6.012-1.96l-.42-.312-2.647.887.887-2.647-.312-.42A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`;

  const relatedCards = meta.relatedSlugs.map(r => {
    const rt = t.related[r];
    return `          <a href="/${lang}/blog/${r}" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${rt.title}</h4>
            <p class="text-white/40 text-xs">${rt.blurb}</p>
          </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="${ui.htmlLang}"${dirAttr}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.bosphorusnight.com/assets/data/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="article:published_time" content="${meta.date}">
  <link rel="canonical" href="${canonical}">
${hreflangBlock(slug)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": ${JSON.stringify(t.title)},
    "description": ${JSON.stringify(t.desc)},
    "image": ${JSON.stringify(imageAbs)},
    "datePublished": "${meta.date}T00:00:00+03:00",
    "dateModified": "2026-05-17T00:00:00+03:00",
    "inLanguage": "${ui.htmlLang}",
    "author": { "@type": "Organization", "name": "Bosphorus Night", "url": "https://www.bosphorusnight.com" },
    "publisher": {
      "@type": "Organization",
      "name": "Bosphorus Night",
      "logo": { "@type": "ImageObject", "url": "https://www.bosphorusnight.com/assets/data/logo png lst.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${canonical}" }
  }
  </script>
${commonHeadBoilerplate()}
</head>
<body class="bg-[#0b1120] text-white min-h-screen">

${headerHtml(lang, ui, false)}

  <main class="max-w-3xl mx-auto px-4 py-12">
    <a href="/${lang}/blog/" class="text-[#c9a84c] text-sm hover:underline">${ui.backToBlog}</a>

    <article class="mt-8">
      <time class="text-white/30 text-xs uppercase tracking-wider">${dateStr}</time>
      <h1 style="font-family:'Playfair Display',serif" class="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">${t.h1}</h1>

      <img src="${meta.image}" alt="${t.alt}" class="w-full rounded-2xl mb-8 aspect-[16/9] object-cover">

      <div class="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-6 text-[15px]">

${renderBody(t.body)}

      </div>

      <!-- CTA -->
      <div class="bg-[#152240] border border-[#c9a84c]/20 rounded-2xl p-8 text-center mt-12">
        <h3 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-[#c9a84c] mb-3">${ui.ctaTitle}</h3>
        <p class="text-white/60 mb-6">${ui.ctaText}</p>
        <a href="https://wa.me/905322442922" target="_blank" class="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#20bd5a] transition-colors">
          ${ctaSvg}
          ${ui.ctaButton}
        </a>
      </div>

      <!-- Related Articles -->
      <div class="mt-16">
        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mb-6">${ui.relatedTitle}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
${relatedCards}
        </div>
      </div>

    </article>
  </main>

${footerHtml(ui)}

${floatingWhatsappHtml(lang, ui)}
</body>
</html>`;
}

function renderIndex(lang, ui, t) {
  const canonical = `https://www.bosphorusnight.com/${lang}/blog/`;
  const dirAttr = ui.isRtl ? ' dir="rtl"' : '';
  const cardImages = {
    'best-bosphorus-dinner-cruise-istanbul': '/assets/tours/dinner/boat-night-bridge.jpg',
    'istanbul-cruise-tonight-last-minute': '/assets/tours/dinner/hall-wide.jpg',
    'bosphorus-sunset-cruise-guide': '/assets/tours/sunset/amor-sunset-dramatic.jpg',
    'things-to-know-istanbul-boat-tour': '/assets/tours/daytime/boat-panorama.jpg',
    'bosphorus-cruise-with-kids-family': '/assets/tours/daytime/deck-guests.jpg',
  };
  const dateBySlug = {'best-bosphorus-dinner-cruise-istanbul':'2026-04-11','istanbul-cruise-tonight-last-minute':'2026-04-11','bosphorus-sunset-cruise-guide':'2026-04-10','things-to-know-istanbul-boat-tour':'2026-04-09','bosphorus-cruise-with-kids-family':'2026-04-08'};

  const blogPostsSchema = t.cards.map(c => {
    return `      { "@type": "BlogPosting", "headline": ${JSON.stringify(c.title)}, "url": "https://www.bosphorusnight.com/${lang}/blog/${c.slug}", "datePublished": "${dateBySlug[c.slug]}T00:00:00+03:00" }`;
  }).join(',\n');

  const cardsHtml = t.cards.map(c => `      <a href="/${lang}/blog/${c.slug}" class="group bg-[#152240] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-300">
        <div class="aspect-[16/9] overflow-hidden">
          <img src="${cardImages[c.slug]}" alt="${c.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-6">
          <time class="text-white/30 text-xs uppercase tracking-wider">${c.date}</time>
          <h2 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mt-2 mb-2 group-hover:text-[#c9a84c] transition-colors">${c.title}</h2>
          <p class="text-white/50 text-sm line-clamp-2">${c.blurb}</p>
          <span class="inline-block mt-4 text-[#c9a84c] text-sm font-medium">${t.readMore}</span>
        </div>
      </a>`).join('\n\n');

  return `<!DOCTYPE html>
<html lang="${ui.htmlLang}"${dirAttr}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.ogDesc}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.bosphorusnight.com/assets/data/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="Bosphorus Night Dinner Cruise">
  <link rel="canonical" href="${canonical}">
${hreflangBlock('index')}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bosphorus Night Blog",
    "description": ${JSON.stringify(t.desc)},
    "url": "${canonical}",
    "inLanguage": "${ui.htmlLang}",
    "publisher": {
      "@type": "Organization",
      "name": "Bosphorus Night",
      "logo": { "@type": "ImageObject", "url": "https://www.bosphorusnight.com/assets/data/logo png lst.png" }
    },
    "blogPost": [
${blogPostsSchema}
    ]
  }
  </script>
${commonHeadBoilerplate()}
</head>
<body class="bg-[#0b1120] text-white min-h-screen">

${headerHtml(lang, ui, true)}

  <main class="max-w-7xl mx-auto px-4 py-12">
    <div class="mb-12">
      <h1 style="font-family:'Playfair Display',serif" class="text-4xl md:text-5xl font-bold text-white mb-4">${t.h1}</h1>
      <p class="text-white/50 text-lg max-w-2xl">${t.lead}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

${cardsHtml}

    </div>
  </main>

${footerHtml(ui)}

${floatingWhatsappHtml(lang, ui)}
</body>
</html>`;
}

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const LANGS_TO_BUILD = ['tr', 'de', 'es', 'ru', 'ar'];
const ARTICLE_SLUGS = ['best-bosphorus-dinner-cruise-istanbul', 'istanbul-cruise-tonight-last-minute', 'bosphorus-sunset-cruise-guide', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'];

let written = 0;
for (const lang of LANGS_TO_BUILD) {
  const ui = UI[lang];
  const langT = T[lang];
  if (!ui || !langT) { console.error(`Missing data for ${lang}`); continue; }
  const dir = path.join(OUT, lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const idxHtml = renderIndex(lang, ui, langT.index);
  fs.writeFileSync(path.join(dir, 'index.html'), idxHtml, 'utf8');
  console.log(`  ✓ ${lang}/blog/index.html`);
  written++;

  for (const slug of ARTICLE_SLUGS) {
    const t = langT[slug];
    if (!t) { console.error(`  ✗ Missing ${lang}/${slug}`); continue; }
    const html = renderArticle(lang, ui, slug, t);
    fs.writeFileSync(path.join(dir, `${slug}.html`), html, 'utf8');
    console.log(`  ✓ ${lang}/blog/${slug}.html`);
    written++;
  }
}

console.log(`\n✅ ${written} files written to src/blog-i18n/`);

