/**
 * Turkish translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Boğaz Yemekli Tur İstanbul — Premium Gece Turu, €{p.dinnerStd}\'den',
      description: 'İstanbul\'un en çok tercih edilen Boğaz yemekli turu. 3 saatlik akşam seferi, Türk yemekleri, canlı halk oyunları ve DJ, panoramik gece manzaraları. TÜRSAB lisanslı. Teknede ödeme — ön ödeme yok.'
    },
    hero: {
      h1: 'İstanbul Boğazı\'nda Yemekli Boğaz Turu',
      subtitle: 'Üç saatlik canlı eğlence, çok çeşitli Türk ziyafeti ve Boğaz\'ın gece en etkileyici manzarası.',
      badge: '4.8★ · 11.317 yorum'
    },
    intro: [
      '**Boğaz yemekli turu**, İstanbul\'un en ikonik akşam deneyimidir. 20:00\'de Kabataş İskelesi\'nden başlayan turumuz, aydınlatılmış Boğaz ve Fatih Sultan Mehmet köprülerinin altından süzülürken çok çeşitli Türk yemekleri, canlı halk oyunları, oryantal dans ve 23:00\'e kadar güverteyi canlı tutan DJ seti sunar.',
      'İstanbul\'un gece manzarasını dolduran sıradan tur teknelerinin aksine, **Boğaz yemekli turumuz** TÜRSAB lisanslıdır (A-17672) ve Google ile TripAdvisor\'da 11.317\'den fazla gezgin tarafından 4.8★ olarak değerlendirilmiştir. Grubu küçük, hizmeti sıcak tutarız — ve teknede ödediğiniz için önceden rezervasyon yapmanın hiçbir riski yoktur.',
      'Yıldönümü mü kutluyorsunuz, aileniz için premium bir İstanbul akşamı mı arıyorsunuz, yoksa şehrin en fotojenik gün batımı-gece geçişini mi istiyorsunuz — İstanbul sakinlerinin ilk önerdiği yemekli tur bu.'
    ],
    highlights: [
      { title: 'Çok çeşitli Türk ziyafeti', desc: '10 çeşit meze, sıcak başlangıç (paçanga böreği), ana yemek seçimi (somon / çipura / tavuk / köfte / vejetaryen), dondurmalı pasta tatlı, sınırsız meşrubat.' },
      { title: 'Canlı halk oyunları, oryantal dans ve DJ', desc: 'Mevlana sema gösterisi, 5 geleneksel Türk halk oyunu, klasik oryantal dans, canlı Türk müzisyenleri, ardından tur boyunca DJ seti.' },
      { title: 'Tam Boğaz gece rotası', desc: 'Kabataş → Dolmabahçe → Çırağan Sarayı → Ortaköy Camii → Bebek → Rumeli Hisarı → FSM Köprüsü → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: '€{p.dinnerStd}/kişi\'den — teknede ödeme', desc: 'Standart yemekli tur €{p.dinnerStd} (eski €{p.dinnerStdOriginal}). VIP tur sahne önü ve premium menü ile €{p.dinnerVip}. Ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' }
    ],
    faq: [
      { q: 'Boğaz yemekli turu ne zaman başlıyor?', a: 'Biniş Kabataş İskelesi\'nde 20:00\'de başlıyor. Tekne 21:00\'de hareket ediyor ve yaklaşık 00:00\'de dönüyor. Yerinize oturmak ve rahat etmek için 15-20 dakika erken gelmenizi öneririz.' },
      { q: 'Boğaz yemekli turu ne kadar?', a: 'Standart tur €{p.dinnerStd}/kişi (normal fiyat €{p.dinnerStdOriginal}). VIP tur sahne önü ve premium menü ile €{p.dinnerVip}/kişi. 0-3 yaş ücretsiz, 4-8 yaş %50 indirimli. Ödeme teknede yapılır — ön ödeme yoktur.' },
      { q: 'Alkol yemekli tura dahil mi?', a: 'Sınırsız meşrubat (su, kola, meyve suyu) fiyata dahildir. Alkol paketleri opsiyoneldir: 2 bardak +€{p.alcohol2}/kişi veya sınırsız yerli alkol (şarap, bira, rakı, vodka, cin) +€{p.unlimited}/kişi. İthal içkiler teknede ayrı fiyatlandırılır.' },
      { q: 'Otel transferi var mı?', a: 'Evet — alma ve bırakma hizmeti +€{p.transfer}/kişi\'dir. Hizmet bölgeleri: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane ve Sütlüce. Rezervasyon sihirbazında seçebilirsiniz.' },
      { q: 'Boğaz yemekli turu helal mi?', a: 'Kesinlikle. Teknedeki tüm et ürünleri helal sertifikalıdır. Alkol opsiyonel bir eklentidir (misafirlere dayatılmaz) ve alkolsüz masa tercih edenler için oturma düzeni doğal olarak ayrılır. Ekstra ücret olmadan vejetaryen alternatifler de sunuyoruz.' },
      { q: 'Ne giymeliyim?', a: 'Smart casual. İstanbul\'un akşamları yaz bile olsa rüzgarlı olabilir — ince bir ceket veya şal öneririz. Kıyafet kuralı zorunlu değil, ama mayo, parmak arası veya spor giysi yemek ortamına uygun değil.' }
    ],
    cta: {
      primary: 'Hemen Rezerve Et · Teknede Ödeme',
      secondary: 'Kalkıştan 2 saat öncesine kadar ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Çocuklu Boğaz Turu — Aile Dostu Yemekli Tur İstanbul',
      description: 'Aile dostu Boğaz yemekli tur. 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. Kapalı güvenli alan, çocuk menüsü, erken kalkış. €{p.dinnerStd}/yetişkin\'den — teknede ödeme.'
    },
    hero: {
      h1: 'Çocuklu Boğaz Turu',
      subtitle: 'Çocuklu aileler için tasarlanmış aile dostu bir Boğaz akşamı — yemek, eğlence ve güvenli, rahat bir atmosfer.',
      badge: 'Aile Dostu · Helal · 0-3 Yaş Ücretsiz'
    },
    intro: [
      '**Çocuklu Boğaz turu**, İstanbul\'un en aile dostu akşam seçeneğidir. Her gece düzinelerce aileyi ağırlıyoruz — her detayı çocukları rahat ettirmek için tasarladık: küçüklerin sıcak kalması için kapalı oturma, erişilebilir çocuk dostu menü (sade ızgara tavuk, makarna, sınırsız meşrubat) ve geç saat huysuzluklarından kaçınmak için erken biniş.',
      'Sadece yetişkin partisi olan teknelerin aksine, **aileler için Boğaz yemekli turumuz** sıcak ve kapsayıcı kalır. **0-3 yaş çocuklar ücretsiz** (transfer dahil), 4-8 yaş **%50 indirimli**, 9+ yaş tam fiyat — gizli ücret yok. Canlı halk oyunları, oryantal dans ve sema gösterisi nazik aile eğlencesidir, gece kulübü değil.',
      'İstanbul\'a yeni yürümeye başlayan çocuğunuzla uzun bir hafta sonu için mi geliyorsunuz, yoksa gençleri ilk Avrupa gezisine mi getiriyorsunuz — bu, İstanbul ailelerinin önerdiği turdur. Güvenli, helal sertifikalı, TÜRSAB lisanslı ve 11.317+ gezgin tarafından 4.8★.'
    ],
    highlights: [
      { title: '0-3 yaş tamamen ücretsiz', desc: 'Bebek ve yürümeye başlayanlara ücret yok. 4-8 yaş yetişkin fiyatının %50\'si. 9 yaştan itibaren tam misafir. Şeffaf, sürpriz yok.' },
      { title: 'Kapalı iç oturma alanı', desc: 'Soğuk aylarda tam kapalı ve ısıtmalı. Çocuklar sıcak kalır, rüzgardan korunur. Hava güzel olduğunda açık güverte de mevcut — seçim sizin.' },
      { title: 'Talep üzerine çocuk menüsü', desc: 'Sade ızgara tavuk, makarna, ekmek ve sebze — ekstra ücret yok. Sınırsız meşrubat (kola, meyve suyu, su). Önceden bildirin — küçükler için sürpriz acılı meze yok.' },
      { title: 'Aile güvenli eğlence', desc: 'Sema gösterisi (çocuklar için büyüleyici), 5 geleneksel halk oyunu, canlı Türk müziği ve DJ seti. Hepsi aile dostu — yetişkin içerik yok. Çocuklar sıklıkla dansa katılır.' }
    ],
    faq: [
      { q: 'Boğaz turu küçük çocuklar için güvenli mi?', a: 'Evet — teknemiz TÜRSAB lisanslı, güvenli pencereli kapalı iç oturma alanına sahip, her boyut için can yelekleri mevcut ve profesyonel ekip ailelerle deneyimli. Yürümeye başlayanlar için iç güverteyi, 6+ yaş için açık güverteyi öneririz.' },
      { q: 'Boğaz turunda çocuk fiyatı nedir?', a: 'Çocuklar **0-3 yaş: ÜCRETSİZ** (ücret yok, gizli ücret yok). **4-8 yaş: %50 indirim** yetişkin fiyatından — yani Standart turda €{p.dinnerStd}/2 = çocuk başına €12. **9+ yaş: tam yetişkin fiyatı.** Otel transferi 0-3 yaş için ücretsiz, 4+ için standart (€{p.transfer}/kişi).' },
      { q: 'Teknede çocuk menüsü var mı?', a: 'Evet — sade ızgara tavuk, makarna, ekmek, mevsim sebzeleri ve sınırsız meşrubat. Alerji veya titiz yiyicilere rezervasyonda bildirin, çocuğunuzun mutlulukla yiyeceği bir şey hazırlarız.' },
      { q: 'Müzik veya şov çocuklar için çok yüksek sesli mi?', a: 'Canlı performanslar belirlenmiş tek bir sahne alanında yapılır — çocuklarınız sese duyarlıysa, arka masada daha sessiz bir yere otururuz. Şov toplam 40 dakika sürer, geri kalan akşam ortam Türk müziği ve orta sesli DJ.' },
      { q: 'Bebeğim turda uyursa ne olur?', a: 'Sorun yok — birçoğu uyur. İç oturma alanında bir bebek veya yürümeye başlayanın rahatça kestirebileceği banket tarzı kanepeler var. Gerekirse ekibimizden sıcak battaniye isteyin. Ekstra ücret yok.' },
      { q: 'Gemide bebek arabası getirmeli miyim?', a: 'Getirebilirsiniz ama büyük bebek arabalarını otelde (veya transfer aldıysanız şoförümüzle — güvende tutarız) bırakmanızı öneririz. Teknemizin dar koridorları var ve güverteler basamaklı. Teknede hafif bir bebek taşıyıcı daha kolay.' }
    ],
    cta: {
      primary: 'Aile Turunu Rezerve Et · Teknede Ödeme',
      secondary: 'Kalkıştan 2 saat öncesine kadar ücretsiz iptal · Ön ödeme yok',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantik Boğaz Turu — Çiftler İçin Mumlu Akşam Yemeği | İstanbul',
      description: 'İstanbul\'un en romantik Boğaz turu. Mumlu masa, güller, VIP düzenleme, çok çeşitli akşam yemeği, aydınlatılmış köprüler altında. Yıldönümü, balayı, sürpriz — €{p.dinnerStd}/kişi\'den rezerve edin.'
    },
    hero: {
      h1: 'Romantik Boğaz Turu',
      subtitle: 'Mumlu akşam yemeği, güllerle süslü masa, aydınlatılmış köprüler ve İstanbul\'un en ikonik gece gökyüzü altında sadece ikinizin paylaşacağı özel bir an.',
      badge: 'Yıldönümü · Balayı · Özel Gece'
    },
    intro: [
      '**Romantik Boğaz turu**, İstanbul\'un çiftler için en ikonik akşamıdır. Güneş Dolmabahçe Sarayı\'nın üzerinden batar ve Boğaz Köprüsü renkleriyle aydınlanırken, siz ve partneriniz özel bir masada çok çeşitli Türk ziyafetini paylaşıyorsunuz — mumlar, taze çiçekler ve güvertede süzülen canlı keman ile.',
      'Romantik masa düzenimiz (+€{p.romantic}/masa) herhangi bir yeri özel bir ana dönüştürür: kırmızı güller, parlayan mumlar, el yazısı bir hoşgeldiniz notu. Yıldızlar altında şarap için sınırsız alkol paketi ekleyin (+€{p.unlimited}/kişi) veya dahil olan meşrubatlarla sade tutun. Her iki durumda da ekip sessizce gerisini halleder.',
      'Yıldönümü kutluyor olun, partnerinize sürpriz planlıyor veya sadece Avrupa\'nın en romantik şehrinde unutulmaz bir gece yaşamak istiyorsanız — İstanbul çiftlerinin ilk tercih ettiği tur budur. 4.8★ puan, TÜRSAB lisanslı ve — en önemlisi — teknede ödeme, yani sadece akşamın kendisine söz veriyorsunuz.'
    ],
    highlights: [
      { title: 'Mumlu romantik masa', desc: 'Romantik masa düzenini +€{p.romantic}/masa ile ekleyin: taze kırmızı güller, parlayan mumlar, masa örtüsünde gül yaprakları ve el yazısı kart. Fotoğraflar dahil.' },
      { title: 'En iyi gün batımı-gece geçişi masaları', desc: 'Pencere kenarı masaları çiftlere ayrılır. Boğaz Köprüsü\'nün aydınlanışını, Kız Kulesi\'nin ışıltısını ve Ortaköy Camii\'nin aydınlanmasını özel masanızdan izleyin.' },
      { title: 'Canlı keman ve samimi atmosfer', desc: 'Yemek sırasında canlı keman ve akustik Türk müziği yavaş, romantik bir atmosfer yaratır. Sonrasında DJ devreye girer ve çiftler açık güvertedeki ışıklar altında dans eder.' },
      { title: 'Şarap, şampanya, premium eşleştirmeler', desc: '2 kadeh alkol (+€{p.alcohol2}/kişi) veya sınırsız yerli şarap, bira, rakı (+€{p.unlimited}/kişi) ekleyin. İthal şampanya ve premium eşleştirmeler talep üzerine — rezervasyonda sorun.' }
    ],
    faq: [
      { q: 'Bu turu romantik yapan ne?', a: 'Özel masa, mumlu düzen (opsiyonel +€{p.romantic}), çok çeşitli Türk yemeği, canlı keman ve akustik müzik, başınızın üzerinden geçen aydınlatılmış Boğaz köprülerinin kombinasyonu. Deneyimi çiftler için tasarlıyoruz — erken sessiz atmosfer, sonra enerjik DJ ve dans. Ritmi siz seçiyorsunuz.' },
      { q: 'Partnerim için sürpriz düzenleyebilir misiniz — doğum günü, yıldönümü, evlilik teklifi?', a: 'Evet — rezervasyonda bildirin. Doğum günü pastası (ücretsiz), özel masa düzenlemesi, sizin dilinizde el yazısı kart veya doğru anda masaya bir şey getirmek için personelimizle koordine edebiliriz. Evlilik teklifleri için gizlice planlayabilmemiz için WhatsApp\'tan direkt yazmanızı öneririz.' },
      { q: '2 kişi için romantik tur ne kadar?', a: '2 kişi Standart: 2 × €{p.dinnerStd} = €48. Romantik düzen ekleyin +€{p.romantic} = €63. 2 kişi VIP: 2 × €{p.dinnerVip} = €110 + romantik €{p.romantic} = €125. Ön ödeme yok — teknede ödeme. Sınırsız alkol için 2 × €{p.unlimited} = €60 daha.' },
      { q: 'Romantik Boğaz turu özel mi — sadece bize mi?', a: 'Hayır — diğer çiftler ve misafirlerle paylaşılan bir tur (toplam 60-80\'e kadar). **Masanız** özel (sadece sizin grubunuz için), ama teknede başka misafirler de var. 2 kişi için tamamen özel tekne istiyorsanız, bu ayrı bir **Özel Boğaz Turu** (talep üzerine düzenleyebiliriz — yazın).' },
      { q: 'Kendi çiçeklerimizi, pastamızı veya hediyemizi getirebilir miyiz?', a: 'Elbette. İstediğinizi getirin — personelimiz gizlice sürpriz hediyeyi yerleştirmeye, tatlıda yüzük kutusu gizlemeye veya kendinizin getirdiği çiçekleri sergilemeye yardım eder. Mantarlama ücreti gibi ekstralar yok. Sadece zamanlamayı koordine edebilmemiz için bildirin.' },
      { q: 'Romantik bir Boğaz turu için ne giymeliyiz?', a: 'Smart casual\'dan şık\'a — birçok çift şık giyinir (elbiseler, ceketler). Kesin bir kıyafet kuralı yok, ama atmosfer rahat turizmden daha özel. İnce bir ceket veya şal getirin — yaz bile olsa güverte serin olabilir. Yemekten sonra dans planlıyorsanız rahat ayakkabı.' }
    ],
    cta: {
      primary: 'Romantik Tur Rezerve Et · Teknede Ödeme',
      secondary: 'Rezervasyon sihirbazında romantik masa düzeni (+€{p.romantic}) ekleyin · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece İçin Müsaitlik'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: '%100 Helal Boğaz Yemekli Tur — İstanbul | Müslüman Dostu',
      description: 'Helal sertifikalı Boğaz yemekli tur. %100 helal et, alkol opsiyonel (asla dayatılmaz), aile uygun eğlence, namaz vakitleri saygılı. €{p.dinnerStd}/kişi\'den.'
    },
    hero: {
      h1: 'İstanbul\'da Helal Boğaz Turu',
      subtitle: '%100 helal sertifikalı menü, alkol her zaman opsiyonel, aile dostu eğlence ve Müslüman gezginler için saygılı bir atmosfer — Boğaz akşamı, doğru yapılmış hali.',
      badge: '%100 Helal · Aile Dostu · Müslüman Sahibi'
    },
    intro: [
      '**Helal Boğaz turu**, İstanbul\'un Müslüman gezginler için en saygın yemekli turudur. Teknemizde servis edilen her et — somon, çipura, tavuk, kuzu köfte, dana bonfile, antrikot — onaylı tedarikçilerden **helal sertifikalıdır**. Aynı menüyü her misafire servis ediyoruz; ayrı "helal bölümü" yok çünkü tüm tekne varsayılan olarak helal.',
      'Alkol **opsiyonel bir eklentidir** — misafirlere asla dayatılmaz ve oturma düzeni alkolsüz masa tercih edenleri doğal olarak ayırır. Sınırsız alkol paketi (+€{p.unlimited}/kişi) isteyen misafirler için orada, ama dahil olan sınırsız meşrubatlar (su, kola, meyve suyu) çoğu Müslüman aile için yeterli. Ekibimiz tercihlerinizi varsayım yapmadan saygılı olacak şekilde eğitilmiştir.',
      'İstanbul\'un en ikonik akşamını ödün vermeden isteyen Suudi Arabistan, BAE, Kuveyt, Katar, İran, Malezya, Endonezya, Pakistan ve Fas\'tan gelen gezginler için **helal dostu Boğaz turu** önemlidir. TÜRSAB lisanslı, 4.8★ ve teknede ödeme — deneyimin standartlarınızı karşıladığından emin olana kadar hiçbir şeye söz vermezsiniz.'
    ],
    highlights: [
      { title: '%100 helal sertifikalı menü', desc: 'Tüm et (somon, çipura, tavuk, köfte, dana, antrikot) onaylı tedarikçilerden helal sertifikalıdır. Mutfak helal hazırlığı takip eder. Domuz ürünü veya helal olmayan katkı yok. Vejetaryen seçenekleri her zaman mevcut.' },
      { title: 'Alkol opsiyonel, asla dayatılmaz', desc: 'Alkol paketleri eklentidir — varsayılan olarak dahil değildir. Meşrubatlar (su, kola, meyve suyu) sınırsız ve ücretsiz. Açıkça talep etmedikçe masanız alkolsüz kalır. Ekip seçiminize sessizce saygı gösterir.' },
      { title: 'Aile dostu eğlence', desc: 'Sema gösterisi, geleneksel Türk halk oyunları, canlı Türk müziği. Gece kulübü tarzı performans yok, uygunsuz içerik yok. Çocuklar için güvenli, aileler için saygılı. Oryantal dans geleneksel bir sanat formu, mütevazı sunulur.' },
      { title: 'Namaz vaktine saygı', desc: 'Akşam veya yatsı biniş zamanına denk gelirse (20:00-21:00), personelimiz kalkıştan önce Kabataş İskelesi\'ndeki sessiz namaz alanına yönlendirebilir. Rezervasyonda bildirmeniz yeterli.' }
    ],
    faq: [
      { q: 'Boğaz turu %100 helal mi?', a: 'Evet — menüdeki her et ürünü (balık, tavuk, köfte, dana bonfile, antrikot, kuzu) onaylı tedarikçilerden helal sertifikalıdır. Mutfak helal hazırlama standartlarını takip eder. Teknede hiçbir yerde domuz servis edilmez. Bu bir "helal seçeneği" değil — menünün tamamı helal.' },
      { q: 'Bu turda diğer misafirler alkol içiyor mu?', a: 'Bazı misafirler opsiyonel alkol paketi ekliyor (+€{p.unlimited}/kişi). Masalar doğal olarak ayrıdır — alkolsüz bir bölüm talep edebilirsiniz. Bir misafir tarafından özel olarak sipariş edilmedikçe ekip alkol getirmez. Meşrubatlar (sınırsız) herkes için dahildir.' },
      { q: 'Bu tur çocuklu Müslüman aileler için uygun mu?', a: 'Evet — İstanbul\'un en aile saygın turlarından biridir. Eğlence mütevazı (halk oyunları, sema, Türk müziği), 3 yaş altı çocuklar ücretsiz, 4-8 yaş %50 indirim. Gece kulübü atmosferi yok. Körfez bölgesi, Endonezya, Malezya, Pakistan ve Fas\'tan aileler düzenli olarak bu turu rezerve eder.' },
      { q: 'Teknede namaz kılabilir miyim?', a: 'Teknede özel bir namaz odası yok, ama 20:00 binişten önce namaz kılmanızı öneririz (akşam namazı genellikle bu pencereye denk gelir). Kabataş İskelesi\'nde namaz olanakları var. 21:00-00:00 seyir sırasında namaz kılmanız gerekirse (yatsı), ekiple konuşun — güvertede sessiz bir köşe ayarlayabiliriz.' },
      { q: '4 kişilik bir Müslüman aile (2 yetişkin, 2 çocuk) için fiyatlar nedir?', a: 'Standart tur: 2 × €{p.dinnerStd} + 2 × €12 (4-8 yaş yarı fiyat) = €72. Çocuklar 3 yaş altıysa ücretsiz: 2 × €{p.dinnerStd} = €48. Yetişkin başına €10 otel transferi ekleyin. Toplam: 4 kişilik aile için €48-92, ön ödeme yok, teknede ödeme.' },
      { q: 'Otel transferi de helal mi?', a: 'Otel transferi sadece bir araba yolculuğu — yemek veya içecek söz konusu değil, bu yüzden helal endişesi yok. Şoförlerimiz profesyonel, saygılı ve dakiktir. Transfer alanları Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih ve Müslüman gezginlerin genellikle konakladığı diğer 8 merkezi bölgeyi kapsar.' }
    ],
    cta: {
      primary: 'Helal Tur Rezerve Et · Teknede Ödeme',
      secondary: '2 saat öncesine ücretsiz iptal · Ön ödeme yok · Helal sertifikalı',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Boğaz VIP Turu — Premium Yemek, Sahne Önü Koltuklar | İstanbul',
      description: 'İstanbul\'da Boğaz VIP yemekli tur. Premium mezeler, biftek seçenekleri, sahne önü oturma, öncelikli hizmet. €{p.dinnerVipOriginal}\'den, şimdi €{p.dinnerVip}/kişi. Teknede ödeme.'
    },
    hero: {
      h1: 'Boğaz VIP Turu',
      subtitle: 'Sahne önü oturma, biftek seçenekli premium Türk menüsü ve öncelikli hizmet — teknedeki en iyi masayı isteyen gezginler için yükseltilmiş Boğaz akşamı.',
      badge: 'En Popüler · %40 İNDİRİM · Sahne Önü Koltuklar'
    },
    intro: [
      '**Boğaz VIP turu** sizi teknedeki en iyi yerlere yerleştirir: sema gösterisi, halk oyunları, oryantal dans ve canlı müziğin doğrudan görüldüğü sahne önü masalar. Premium menü ana yemek seçeneklerine dana bonfile ve antrikot ekler (Standart\'ın tavuk/somon\'una karşı), ayrıca 15+ çeşit geleneksel Türk mezesi cömert bir serpme olarak servis edilir.',
      '**VIP Boğaz yemekli turumuz** misafirlerimiz tarafından En Popüler olarak derecelendirilmiştir — çünkü €{p.dinnerVip}/kişi\'de (eski €{p.dinnerVipOriginal}, %40 indirim), deneyim bir turist turundan çok ince yemek restoranına yakındır. Özel masa, özenli garson hizmeti ve Dolmabahçe, Ortaköy Camii ve aydınlatılmış Boğaz Köprüsü\'nün aynı muhteşem manzaraları.',
      'İş gezgini olun, bir dönüm noktası kutluyor veya sadece "İstanbul\'dayız bir kez — düzgün yapalım" diye düşünüyor olun, bu tekrarlayan ziyaretçilerin rezerve ettiği **Boğaz VIP turu**\'dur. TÜRSAB lisanslı, 11.317+ yorumla 4.8★, teknede ödeme, kalkıştan 2 saat öncesine kadar ücretsiz iptal.'
    ],
    highlights: [
      { title: 'Sahne önü özel masa', desc: 'Performans sahnesinin doğrudan önünde rezerve oturma — sema gösterisi, halk oyunları ve oryantal dansın en iyi görünümü. Masanız, paylaşılmıyor. Fotoğrafçılar bu koltukları seviyor.' },
      { title: '15+ meze + premium ana yemekler', desc: '15+ çeşit Türk mezesi geleneksel serpme olarak servis edilir. Ana yemek seçenekleri arasında dana bonfile ve antrikot (Standart\'ta sadece tavuk/somon). Aynı tatlı ve sınırsız meşrubat.' },
      { title: 'Öncelikli garson hizmeti', desc: 'Özel garson önce masanıza hizmet eder — yenileme, menü rehberliği, alkol eklentilerini koordine etme, özel istekler. Kalabalık bir odada dikkat için mücadele etmiyorsunuz.' },
      { title: '%40 İNDİRİM — eski €{p.dinnerVipOriginal}, şimdi €{p.dinnerVip}', desc: 'Normal fiyat €{p.dinnerVipOriginal}/kişi. Şu anki lansman fiyatı €{p.dinnerVip}/kişi — %40 indirim. Teknede ödeme, ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' }
    ],
    faq: [
      { q: 'VIP ile Standart Boğaz turu arasındaki fark nedir?', a: 'VIP şunları alır: (1) en iyi manzaralı sahne önü oturma, (2) Standart\'ın 10\'una karşı 15+ meze, (3) ana yemek seçeneklerine dana bonfile + antrikot eklenir, (4) öncelikli garson hizmeti. Aynı 3 saatlik tur, aynı eğlence, aynı rota. €{p.dinnerVip} vs €{p.dinnerStd}.' },
      { q: 'VIP fiyatı €{p.dinnerVip} gerçekten %40 indirim mi?', a: 'Evet — normal fiyat €{p.dinnerVipOriginal}/kişi (herhangi bir rezervasyon sitesinde kontrol edin). €{p.dinnerVip}\'i direkt rezervasyon fiyatı olarak uyguluyoruz, aracı ücretlerini kesiyoruz. Çoğu yerin Standart için aldığı fiyattan daha az VIP alıyorsunuz.' },
      { q: 'Alkol VIP tura dahil mi?', a: 'Hayır — alkol ayrı bir eklentidir (Standart ile aynı). 2 kadeh: +€{p.alcohol2}/kişi. Sınırsız yerli alkol (şarap, bira, rakı, vodka, cin): +€{p.unlimited}/kişi. Premium ithal içkiler ayrı fiyatlandırılır. Sınırsız meşrubat dahil ve ücretsizdir.' },
      { q: 'Standart\'a bindikten sonra VIP\'e yükseltebilir miyim?', a: 'Müsaitliğe bağlı — VIP masalar açıksa, evet. Farkı (€{p.dinnerVip} - €{p.dinnerStd} = €31) teknede ödersiniz. Ama VIP\'i önceden rezerve etmenizi öneririz: en iyi sahne önü koltuklar ön rezervasyonlara gider.' },
      { q: 'Boğaz VIP turu nasıl rezerve edilir?', a: 'Bu sayfadaki rezervasyon sihirbazını kullanın — Adım 1\'de "VIP" seçin, tarihinizi belirleyin, misafir sayısını girin, sonra iletişim bilgileri. Talebiniz WhatsApp / Telegram / WeChat üzerinden gider ve anında onaylarız. Şimdi değil, teknede ödeme.' },
      { q: 'VIP turu müşterilerle iş yemeği için uygun mu?', a: 'Evet — VIP, İstanbul\'daki iş yemekleri için en yaygın tercihtir. Özel masa, konuşma için yeterince sessiz, etkileyici menü ve manzara. Birçok misafir müşterileri ağırlamak için VIP + sınırsız alkol rezerve eder. Helal sertifikalı (Körfez iş gezginleri için iyi). Rezervasyonda bildirin, daha sessiz bir arka-VIP masası ayıralım.' }
    ],
    cta: {
      primary: 'VIP Rezerve Et · Teknede Ödeme',
      secondary: 'Eski €{p.dinnerVipOriginal}, şimdi €{p.dinnerVip} · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Standart Seçeneği Görün (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Özel Boğaz Turu — Kendi Teknenizi Kiralayın | İstanbul',
      description: 'Gruplar, aileler, kurumsal etkinlikler, düğünler için özel Boğaz turu kiralama. Özel tekne, özel menü, esnek süre. Minimum 25 misafir. Fiyat için WhatsApp\'tan yazın.'
    },
    hero: {
      h1: 'Özel Boğaz Turu',
      subtitle: 'Tüm tekneyi grubunuz için kiralayın — aile kutlamaları, kurumsal yemekler, doğum günleri, nişanlar, düğünler. Özel kullanım, özel menü, esnek zamanlama.',
      badge: 'Özel Kiralama · 25+ Misafir · Özel Menü'
    },
    intro: [
      '**Özel Boğaz turu**, tüm teknenin sizin olması demektir — başka misafir yok, paylaşılan masa yok, paylaşılan dans pisti yok. Aile buluşmaları, kurumsal yemekler, doğum günü partileri, bekarlığa veda geceleri veya düğün resepsiyonları için mükemmel. Tekne, ekip, menü, eğlence ve zamanlama grubunuza uyum sağlar.',
      '**Özel Boğaz turu kiralamamız** **25\'ten 80 misafire** kadar grupları destekler. Daha küçük gruplar yine de özel deneyim talep edebilir — teknenin operasyon maliyetini karşılayan minimum ücretle fiyat veririz. Daha büyük gruplar (düğün boyutu) özel fiyatlandırma alır ve genellikle özel dekorasyon, canlı grup, pasta servisi ve uzatılmış süre (standart 3 yerine 4-5 saat) içerir.',
      'Müşteriler için kurumsal etkinlik, 50. doğum günü partisi veya İstanbul\'un en ikonik köprülerinin altında düğün resepsiyonu düzenliyor olsanız bile, bu **İstanbul etkinlik planlayıcılarının güvendiği özel tur**\'dur. 4.8★ puan, TÜRSAB lisanslı, tam İngilizce konuşan ekip ve her konuda esnek — rota, menü, müzik, zamanlama.'
    ],
    highlights: [
      { title: 'Tüm tekne, sadece sizin için', desc: 'Başka misafir yok. Grubunuz her güverteye, her masaya sahip. Kendi müziğinizi, kıyafet kodunuzu, programınızı belirleyin. Gizlilik önemlidir — buna saygı gösteriyoruz.' },
      { title: 'Özel menü ve içecek paketi', desc: 'Menüyü özelleştirmek için şefimizle çalışın: belirli mezeler, ana yemek seçimleri, kültürünüze veya diyet ihtiyaçlarınıza özel yemekler. Alkol paketleri, şampanya kadehleri, özel kokteyl barları tümü düzenlenebilir.' },
      { title: 'Esnek süre ve kalkış', desc: 'Standart 3 saat 4-5 saate uzayabilir. 12:00 gündüz, 17:30 gün batımı veya 21:00 gece kalkışını seçin. Hafta sonu yerine hafta içi mi istiyorsunuz? Sorun — programınızla çalışacağız.' },
      { title: 'Özel dekor, grup, program', desc: 'Özel dekorasyonlar (balonlar, pankartlar, çiçek düzeni), DJ yerine canlı grup, düğün pastası servisi, fotoğrafçı koordinasyonu, konuşmalar — etkinliğinizin ihtiyacı her neyse ekleyin. Biz sadece tekne işletmecileri değil, etkinlik planlayıcılarız.' }
    ],
    faq: [
      { q: 'Özel Boğaz turu ne kadar?', a: '25+ grup için, genellikle €{p.dinnerStd}-€{p.dinnerVip}/kişi + grup büyüklüğüne, tarihe ve süreye bağlı tekne kiralama ücreti. Grup büyüklüğünüz, tarihiniz ve gereksinimleriniz ile WhatsApp\'tan yazın — 1 saat içinde fiyat veririz. Çoğu etkinlik €2.000-€6.000 toplam aralığa girer.' },
      { q: 'Özel Boğaz turu için minimum grup büyüklüğü nedir?', a: 'Teknik olarak 25 misafir özel turu ekonomik olarak uygulanabilir kılar. Daha küçük gruplar (10-24) yine de özel kiralayabilir ama ~25 kişiye eşdeğer bir minimum ücret öderler. Gerçekten küçük gruplar için (2-10), normal Standart veya VIP turu düşünün — masanız zaten özel, sadece tekne paylaşılıyor.' },
      { q: 'Boğaz turunda düğün yapabilir miyim?', a: 'Evet — yılda 10-15 düğün resepsiyonu düzenliyoruz. Oturarak yemek için 80\'e kadar, kokteyl tarzı için 100\'e kadar kapasite. Fotoğrafçınız, düğün planlayıcınız, grubunuz veya şefiniz ile koordine ederiz. Özel pasta servisi, ilk dans pisti, şampanya kadehi düzenlenebilir. Düğün fiyatı için WhatsApp\'tan yazın.' },
      { q: 'Kurumsal etkinlikler ve ekip yemekleri için ne olacak?', a: 'Kurumsal özel turlar en yaygın rezervasyonlarımız. Şirket yemeği, müşteri ağırlama, ürün lansmanı, ekip kutlaması — hepsi işe yarar. KDV dökümü ile fatura sağlayabilir, ekibiniz için otel transferleri düzenleyebilir ve talep üzerine markalı malzemeleri (masa aksesuarları, tabela) koordine edebiliriz.' },
      { q: 'Eğlenceniz yerine canlı grup veya DJ getirebilir miyim?', a: 'Evet — kendi canlı grubunuzu, DJ\'inizi, fotoğrafçınızı getirebilirsiniz. Veya standart olanımızı (sema, halk oyuncular, oryantal, DJ) koruyun ve üstüne kendinizinkini ekleyin. Tekne PA sistemine ve dans pistine sahiptir. Ses kontrollerini koordine edebilmemiz için önceden bildirin.' },
      { q: 'Özel Boğaz turu fiyatı nasıl talep ederim?', a: 'En kolayı: +90 532 520 1700\'den (1) grup büyüklüğünüz, (2) tercih ettiğiniz tarih, (3) sebep (düğün, kurumsal, doğum günü), (4) özel gereksinimler ile WhatsApp\'tan yazın. İş saatlerinde 1 saat, gece 12 saat içinde yanıt veririz. Detayları görüşmek için görüntülü arama da ayarlayabiliriz.' }
    ],
    cta: {
      primary: 'Özel Fiyat İçin WhatsApp',
      secondary: 'Özel menü, grup 25-80, esnek süre · 1 saat altında yanıt',
      tertiary: 'Standart Tur Seçeneği (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Çiftler İçin Boğaz Turu — Su Üstünde Randevu Gecesi | İstanbul',
      description: 'Çiftler için Boğaz yemekli turu. Özel masa, aydınlatılmış köprüler, canlı müzik, romantik masa düzeni opsiyonu. €{p.dinnerStd}/kişi\'den. Teknede ödeme — İstanbul\'da mükemmel randevu gecesi.'
    },
    hero: {
      h1: 'Çiftler İçin Boğaz Turu',
      subtitle: 'Boğaz\'da bir randevu gecesi — özel masa, canlı müzik, başınızın üzerinden geçen aydınlatılmış köprüler. İstanbul\'daki ilk randevunuz olsun veya onuncu yıldönümünüz, bu akşam işe yarar.',
      badge: 'Özel Masa · Canlı Müzik · Teknede Ödeme'
    },
    intro: [
      '**Çiftler için Boğaz turu**, İstanbul\'un favori randevu gecesidir. Her çift yıldönümü kutlamıyor — bazen dünyanın en romantik şehrindesiniz ve birlikte harika bir akşam istiyorsunuz. Bu tur sunar: iki kişilik özel masa, yavaş bir çok çeşitli Türk akşam yemeği, yemek sırasında canlı keman ve akustik müzik ve yavaşça geçen aydınlatılmış Boğaz Köprüsü.',
      'Atmosfer **sıcak ama aşırı romantik değil** — zorunlu evlilik teklifi müziği yok, rahatsız edici "yeni evli" koordineli alkışlar yok. Yersiniz, içersiniz, konuşursunuz, İstanbul\'un ışıklarını izlersiniz. Romantik masa düzeni eklemek isterseniz (mumlar, güller, +€{p.romantic}), harika — yoksa sadece yemek bile zaten özel.',
      'İstanbul\'da partnerinizle 3 gün için misiniz, mütevazı bir dönüm noktasını kutluyor veya gelecekteki bir evlilik teklifi keşif gezisi mi planlıyorsunuz — **çiftler için Boğaz turu** dünyanın en çok fotoğraflanan şehirlerinden birinde birlikte olmak için size 3 saatlik bir akşam verir. 4.8★, teknede ödeme, ücretsiz iptal.'
    ],
    highlights: [
      { title: 'İki kişilik özel masa', desc: 'Özel 2 kişilik masa, paylaşılmıyor. Çiftlere pencere kenarı oturma önceliği. Pencerenizin hemen dışında gün batımı ve gece Boğaz fotoğrafları.' },
      { title: 'Yavaş tempolu çok çeşitli yemek', desc: '10 çeşit Türk mezesi, sıcak başlangıç, ana yemek (somon, çipura, tavuk, köfte veya vejetaryen), dondurmalı pasta tatlı. 3 saat boyunca yavaşça servis edilir — acele ettirilmiyorsunuz.' },
      { title: 'Canlı keman ve hafif müzik', desc: 'Yemek sırasında canlı keman ve akustik Türk müziği sohbete uygun samimi bir atmosfer yaratır. Sonra, dans etmek isteyen çiftler için DJ devreye girer.' },
      { title: 'Özel geceler için eklentiler', desc: 'Romantik masa düzeni (mumlar, güller): +€{p.romantic}. Sınırsız yerli alkol (şarap, rakı): +€{p.unlimited}/kişi. Otel transferi (gidiş-dönüş): +€{p.transfer}/kişi. Akşamınıza uyanı seçin.' }
    ],
    faq: [
      { q: 'Bu Boğaz turu özel bir durum değil, sıradan bir randevu gecesi için uygun mu?', a: 'Evet — çiftlerimizin çoğu belirli bir şey kutlamıyor, sadece harika bir randevu gecesi geçiriyor. Atmosfer aşırı olmadan sıcak ve hoş. Ekstra istiyorsanız romantik masa düzeni (+€{p.romantic}) ekleyebilir veya sadece standart akşamın tadını çıkarabilirsiniz.' },
      { q: '2 kişi için Boğaz turu ne kadar?', a: '2 kişi Standart: 2 × €{p.dinnerStd} = €48. 2 kişi VIP: 2 × €{p.dinnerVip} = €110. İkisi için otel transferi ekleyin: +€{p.transfer}×2 = €20. İkisi için sınırsız alkol ekleyin: +€{p.unlimited}×2 = €60. Ön ödeme yok — teknede ödeme.' },
      { q: 'Çiftler kendi şarap veya şampanyalarını getirebilir mi?', a: 'Dışarıdan alkole izin vermiyoruz (işletme lisans sebebi). Ama sınırsız yerli şarabımız (+€{p.unlimited}/kişi) var ve ücret karşılığında premium ithal şaraplar veya şampanya ayarlayabiliriz — rezervasyonda sorun. Prosecco, Chianti ve Cabernet popüler premium istekler.' },
      { q: 'Alkol içmiyorsak sorun olur mu — sıra dışı mıyız?', a: 'Hiç değil — birçok çift alkolü tamamen atlıyor, ya helal sebeplerden ya da sadece tercihen. Sınırsız meşrubatlar (su, meyve suyu, kola) dahil. Masanız alkolsüzse kimse iki kere bakmaz. Suudi Arabistan, İran ve Endonezya\'dan birçok Müslüman çift bu turu rezerve eder.' },
      { q: 'Çiftler için Boğaz turu en iyi ne zaman — gün batımı mı gece mi?', a: 'Gece (21:00 kalkış) en ikonik olanı — aydınlatılmış köprüler, su üzerinde yansımalar, aydınlanmış saraylar. Gün batımı (17:30 kalkış) daha erken ve altın saat güzelliği ama yemekli tur spesifik olarak 21:00. İkisini de isterseniz, çoğu çift gün batımı ve gece turlarını farklı günlerde rezerve eder.' },
      { q: 'Dans pisti var mı — dans edebilir miyiz?', a: 'Evet — yemek servisinden sonra (~22:30), DJ başlar ve açık güverte dans alanı olur. Birçok çift arka planda Boğaz Köprüsü ile ışıklar altında yavaş şarkılar eşliğinde dans eder. İstanbul\'da çekeceğiniz en iyi fotoğraflardan bazıları.' }
    ],
    cta: {
      primary: 'Randevu Gecesi Rezerve Et · Teknede Ödeme',
      secondary: 'Romantik düzen (+€{p.romantic}) ekleyin · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Romantik Boğaz Turunu Görün'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Boğaz Gün Batımı Turu — Altın Saat ve Yemek | İstanbul',
      description: 'İstanbul\'da Boğaz gün batımı turu. 17:30\'da biniş, Dolmabahçe ve Ortaköy Camii\'nin altın ışıkta parlayışını izleyin, yemek aydınlatılmış geceye devam eder. 3 saatlik tur, €35/kişi\'den.'
    },
    hero: {
      h1: 'Boğaz Gün Batımı Turu',
      subtitle: 'Boğaz\'da sihirli saat — minare silüetleri arkasından güneşin batışını izlerken Dolmabahçe, Ortaköy Camii ve gece için aydınlanan Boğaz Köprüsü\'nden geçin.',
      badge: 'Altın Saat · 17:30 Kalkış · En İyi Fotoğraflar'
    },
    intro: [
      '**Boğaz gün batımı turu** İstanbul\'u en fotojenik halinde yakalar. 17:30\'da binin ve 20 dakika içinde güneş Avrupa yakası minarelerinin arkasından düşmeye başlar — Dolmabahçe Sarayı\'nı altın renge boyar, Boğaz suyunu bakır kıvamına getirir ve Ortaköy Camii\'yi parlayan gökyüzüne siluet yapar. Bu turdan her akıllı telefon fotoğrafı profesyonel çekim gibi görünür.',
      '**Gün batımı Boğaz turumuz** altın saat sırasında başlayan ve köprüler gece için aydınlanırken devam eden tam bir Türk yemeği içerir. Tatlı geldiğinde aydınlatılmış Boğaz Köprüsü\'nün altında yelken açıyorsunuz — karanlık suya yansıyan 30 milyon ışık. Gündüzden geceye geçiş, 3 saatte yapılmış, tüm olay bu.',
      'Altın saati kovalayan bir fotoğrafçı, gün ve gecenin en iyisini isteyen bir gezgin veya "İstanbul anı fotoğrafı" arayan bir çift olsanız bile, bu ziyaretçilere önerilen **Boğaz gün batımı yemekli turu**\'dur. 4.8★ puan, TÜRSAB lisanslı, teknede ödeme, ön ödeme yok.'
    ],
    highlights: [
      { title: 'Tepe altın saat — 17:30 kalkış', desc: '17:30\'da binin, gün batımı yazın ~18:30 / kışın 17:00\'de gerçekleşir. Turun ilk 40 dakikası kovaladığınız altın saattir. Kamera hazır — bu çekim.' },
      { title: 'Gündüz-gece geçişi dahil', desc: 'Sadece gün batımı değil — alacakaranlığa, sonra aydınlatılmış Boğaz\'a yelken açıyoruz. Bir turda 3 farklı ışık evresi görürsünüz: altın, mavi saat ve tam aydınlatılmış gece.' },
      { title: 'Tur sırasında tam yemek', desc: '10 çeşit Türk mezesi, sıcak başlangıç, ana yemek (somon, çipura, tavuk, köfte, vejetaryen), dondurmalı pasta. Gece turu ile aynı kaliteli menü, gün batımı sırasında servis edilir.' },
      { title: 'Dolmabahçe, Ortaköy, Boğaz Köprüsü — hepsi parlıyor', desc: 'Rota Dolmabahçe Sarayı (gün batımında altın), Ortaköy Camii (silüetli kubbe), Boğaz Köprüsü (aydınlanıyor), Rumeli Hisarı, Beylerbeyi Sarayı\'ndan geçer. Her dönüm noktası en iyi ışıkta.' }
    ],
    faq: [
      { q: 'Boğaz gün batımı turu ne zaman kalkıyor?', a: 'Biniş 17:00\'de başlıyor, tekne 17:30\'da hareket ediyor, yaklaşık 20:30\'da dönüyor. Bunu suda güneşin battığı tam zamanda olacak şekilde ayarlıyoruz — mevsime göre biraz değişir (yazın 18:30, kışın 17:00). Mevsimsel olarak kalkışı 15-30 dakika ayarlıyoruz.' },
      { q: 'Boğaz gün batımı turu yemekli tur ile aynı mı?', a: 'Benzer ama farklı zaman. Gün batımı turu 17:30\'da yemek tur sırasında servis edilerek kalkar (altın saat + erken gece). Yemekli tur 21:00\'de — karanlık sonrası, saf gece manzaraları. Aynı tekne, aynı menü, aynı eğlence — sadece farklı aydınlatma. Bazı misafirler ikisini de farklı günlerde yapar.' },
      { q: 'Boğaz gün batımı turu fiyatı nedir?', a: 'Standart gün batımı turu €35/kişi\'den (3 saat, tam yemek, canlı eğlence). Sahne önü oturma ve premium mezelerle VIP seçenek €55/kişi. Teknede ödeme — ön ödeme yok. 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat.' },
      { q: 'Gün batımı turu yemekli (gece) turdan daha mı iyi?', a: '"Daha iyi" ne istediğinize bağlı. Gün batımı = en iyi fotoğraflar, altın ışık, daha yavaş ritim, daha erken akşam. Gece = en ikonik ışıklar (aydınlatılmış köprüler), en iyi eğlence, daha geç yemek. Fotoğrafçılar gün batımını seçer. Randevu gecesi çiftleri gece seçer. Çocuklu aileler genellikle gün batımını seçer (erken biter).' },
      { q: 'Gün batımı turuna ne getirmeliyim?', a: 'Akıllı telefon veya kamera fotoğraflar için (altın saat yalvarır). İnce ceket — gün batımında rüzgar artar ve erken akşam güvertede hızlı soğuyabilir. İlk 30 dakika için güneş gözlüğü. Smart-casual kıyafet — yemek yiyorsunuz, ama kesin bir kıyafet kuralı yok.' },
      { q: 'Aydınlatılmış köprüleri gece görmek için turda kalabilir miyim?', a: 'Gün batımı turu 3 saat (17:30-20:30), bu yüzden sonunda Boğaz Köprüsü\'nü tamamen aydınlatılmış ve Kız Kulesi\'ni aydınlanmış olarak görürsünüz. TEPE gece manzaralarını (21:00-00:00, tüm restoran ve anıtlar tam aydınlatılmış) istiyorsanız, 21:00 yemekli turu rezerve edin. İkisinin en iyisi: farklı gecelerde ikisini de rezerve edin.' }
    ],
    cta: {
      primary: 'Gün Batımı Turu Rezerve Et · Teknede Ödeme',
      secondary: '17:30 kalkış · Gün batımı + yemek dahil · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Gece Yemekli Turu Görün (21:00)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Boğaz Gece Turu — Aydınlatılmış İstanbul Yemekli Tur',
      description: 'Boğaz gece turu yemek ve canlı şov ile. 21:00 kalkış, aydınlatılmış köprüler, Türk halk oyunları, 3 saat su üstünde. €{p.dinnerStd}/kişi\'den — teknede ödeme.'
    },
    hero: {
      h1: 'Boğaz Gece Turu',
      subtitle: 'İstanbul\'un aydınlatılmış köprüleri, aydınlanan saraylar ve 30 milyon ışığı yansıtan ayna gibi Boğaz suyu — İstanbul akşamını tanımlayan gece turu.',
      badge: 'Aydınlatılmış Köprüler · Canlı Şov · Yemek Dahil'
    },
    intro: [
      '**Boğaz gece turu** İstanbul\'da en çok önerilen akşam aktivitesidir. Nedeni şudur: karanlıktan sonra Boğaz dönüşür. Boğaz Köprüsü mavi, mor ve altın arasında geçer. Dolmabahçe Sarayı sıcak sarıya parlar. Ortaköy Camii siyah suya mükemmel yansır. Her İstanbul dönüm noktası geceleri tepe dramaya ulaşır.',
      '**Yemekli Boğaz gece turumuz** tam ikonik akşamı paketler: 3 saat su üstünde (21:00-00:00), çok çeşitli Türk ziyafeti, canlı halk oyunları (sema, 5 halk oyunu, oryantal dans), canlı müzik ve gecenin sonuna kadar güverteyi canlı tutan DJ seti. Her misafir aynı programı alır — en iyi bölümleri atlayan "temel" bir seçenek yok.',
      'İlk İstanbul geziniz olsa ve "geceleyin yapmanız gereken tek şey" arıyor olsanız bile, daha önce burada olduysanız ve şehirdeki en fotojenik 3 saati istiyorsanız bile, bu 11.317+ gezginden 4.8★ puanlı **Boğaz gece turu**\'dur. TÜRSAB lisanslı, teknede ödeme, ön ödeme yok.'
    ],
    highlights: [
      { title: 'Tepe dramada aydınlatılmış Boğaz', desc: 'Boğaz Köprüsü renk değiştirir (mavi, mor, altın), saraylar sarı parlar, Ortaköy Camii siyah suya yansır. 21:00-00:00 tüm İstanbul dönüm noktaları için tepe aydınlatma.' },
      { title: 'Teknede geleneksel Türk şov', desc: 'Sema gösterisi, 5 geleneksel halk oyunu (Türkiye\'nin farklı bölgelerinden), oryantal dans, canlı Türk müziği, sonra DJ seti. 40 dakika performans, sonra müzik + yemek devam eder.' },
      { title: 'Tam çok çeşitli yemek', desc: '10 çeşit Türk mezesi, sıcak başlangıç (paçanga böreği), ana yemek (somon, çipura, tavuk, köfte, vejetaryen — seçiminiz), tatlı (dondurmalı pasta), sınırsız meşrubat. Helal sertifikalı.' },
      { title: 'Tam Boğaz rotası', desc: 'Kabataş → Dolmabahçe → Çırağan Sarayı → Ortaköy Camii → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet Köprüsü → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kız Kulesi → Kabataş.' }
    ],
    faq: [
      { q: 'Boğaz gece turu ne zaman?', a: 'Kabataş İskelesi\'nde 20:00\'den biniş. Tekne 21:00\'de hareket, yaklaşık 00:00 (gece yarısı) dönüyor. Yerleşmek ve koltuk seçmek için 20 dakika önce gelmenizi öneririz.' },
      { q: 'Boğaz gece turu ne kadar?', a: 'Standart gece turu (3 saat, yemek, şov): €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}). Sahne önü koltuk ve premium menü ile VIP: €{p.dinnerVip}/kişi (eski €{p.dinnerVipOriginal}). 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. Teknede ödeme.' },
      { q: 'Boğaz gece turu ile yemekli tur arasındaki fark nedir?', a: 'Aynı şey, farklı anahtar kelime. "Boğaz gece turu" birçok gezginin aradığı şekildir; "yemekli tur" endüstri terimidir. Aynı tekne, aynı 3 saatlik program, aynı menü, aynı şov. Hangi arama terimini tercih ederseniz seçin — deneyim aynı.' },
      { q: 'Boğaz gece turu gün batımı turuna karşı değerlilik mi?', a: 'Gece turu = aydınlatılmış İstanbul, tepe ışık draması, tam eğlence programı, aydınlatılmış köprülerin en ikonik fotoğrafları. Gün batımı = altın saat, daha yavaş ritim, 20:30\'da biter. Sadece bir tane yapıyorsanız: gece turu daha ikonik. Birçoğu farklı günlerde ikisini de yapar.' },
      { q: 'İstanbul\'daki ilk günümde Boğaz gece turu yapabilir miyim?', a: 'Evet — öneriyoruz. Birçok gezgin ilk akşamları için gece turunu rezerve ediyor çünkü size tam bir oryantasyon veriyor: tüm büyük dönüm noktaları sudan, iyi yemek ve eğlence ile. Jet lag 1. günde gezmeye çalışmaktan daha kolay. Merkezi bölgelerden otel transferi mevcut.' },
      { q: 'Türkçe bilmiyorum — tur İngilizce mi?', a: 'Ekip İngilizce konuşuyor. Eğlence (sema, halk oyunları, müzik) dil gerektirmez. Yemek menüsü İngilizce. WhatsApp / Telegram / WeChat üzerinden rezervasyon birden fazla dilde çalışır (İngilizce, Arapça, Rusça, Almanca, Fransızca, İspanyolca). Türkçeye gerek yok.' }
    ],
    cta: {
      primary: 'Gece Turu Rezerve Et · Teknede Ödeme',
      secondary: '21:00 kalkış · 3 saat · Yemek + şov dahil · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'İstanbul Yemekli Tur — Premium Boğaz Gece Turu, €{p.dinnerStd}\'den',
      description: 'İstanbul\'un en çok tercih edilen Boğaz yemekli turu. 3 saatlik akşam, Türk ziyafeti, canlı halk oyunları, aydınlatılmış köprüler. TÜRSAB lisanslı, teknede ödeme, ön ödeme yok.'
    },
    hero: {
      h1: 'İstanbul Yemekli Tur',
      subtitle: 'İstanbul\'daki en iyi yemekli tur — Boğaz\'da 3 saat, çok çeşitli Türk ziyafeti, canlı eğlence ve şehrin en ikonik dönüm noktalarının gece manzaraları.',
      badge: '4.8★ · 11.317 yorum · TÜRSAB A-17672'
    },
    intro: [
      '**İstanbul\'da yemekli tur** mu arıyorsunuz? Çoğu gezginin önerdiğini buldunuz. Boğaz\'da 3 saatlik akşamımız tam bir çok çeşitli Türk yemeğini, canlı halk oyunlarını ve şehrin en fotojenik manzaralarını birleştiriyor — hepsi 21:00\'de Kabataş İskelesi\'nden kalkan rahat bir tekneden.',
      '**İstanbul yemekli tur** deneyimi: 20:00\'de binin, yerleşin, kalkarken Dolmabahçe Sarayı\'nın yanından geçişini izleyin, Ortaköy Camii\'ne yaklaşırken yemek başlar, şov başlar (sema, halk oyunları, oryantal), tatlı geldiğinde aydınlatılmış Boğaz Köprüsü\'nün altındasınız. Gece yarısına kadar ikonik fotoğraf kolajı ve dolu bir mideyle Kabataş\'a geri dönüyorsunuz.',
      'Standart tur için €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}) veya sahne önü koltuklarla VIP için €{p.dinnerVip}/kişi (eski €{p.dinnerVipOriginal}). Teknede ödeme — ön ödeme yok, risk yok. TÜRSAB A-17672 lisanslı, 11.317+ gezgin tarafından 4.8★ puanlı.'
    ],
    highlights: [
      { title: 'Tam çok çeşitli Türk yemeği', desc: '10 çeşit meze, sıcak başlangıç, ana yemek (somon/çipura/tavuk/köfte/vejetaryen), dondurmalı pasta. Helal sertifikalı. Sınırsız meşrubat dahil.' },
      { title: 'Canlı Türk halk oyunları şovu', desc: 'Sema gösterisi, 5 geleneksel halk oyunu, oryantal dans, canlı Türk müziği, DJ. 40 dakika performans, ortam müziği devam eder.' },
      { title: 'Tam Boğaz gece rotası', desc: '3 saatlik tur: Dolmabahçe, Çırağan, Ortaköy Camii, Boğaz Köprüsü, Bebek, Rumeli Hisarı, FSM Köprüsü, Beylerbeyi, Üsküdar, Kız Kulesi. Hem Avrupa hem Asya yakası.' },
      { title: '€{p.dinnerStd}\'den — teknede ödeme', desc: 'Standart: €{p.dinnerStd} (eski €{p.dinnerStdOriginal}). Premium menülü VIP: €{p.dinnerVip} (eski €{p.dinnerVipOriginal}). Ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' }
    ],
    faq: [
      { q: 'İstanbul\'da yemekli tur ne kadar?', a: 'Standart yemekli turumuz €{p.dinnerStd}/kişi (normal fiyat €{p.dinnerStdOriginal}). Sahne önü oturma ve premium menü ile VIP €{p.dinnerVip}/kişi (normal fiyat €{p.dinnerVipOriginal}). 0-3 yaş ücretsiz, 4-8 yaş %50 indirimli. Teknede ödeme — ön ödeme yok.' },
      { q: 'İstanbul yemekli tur fiyatına ne dahil?', a: 'Boğaz\'da 3 saatlik tur, çok çeşitli Türk yemeği (meze, sıcak başlangıç, ana yemek, tatlı), sınırsız meşrubat, canlı halk oyunları şovu (sema, halk oyunları, oryantal), canlı müzik + DJ, açık güverte erişimi, vergiler dahil. Otel transferi ve alkol opsiyonel eklentilerdir.' },
      { q: 'İstanbul yemekli turu nereden kalkıyor?', a: 'Kabataş İskelesi, İstanbul — Avrupa yakasında, Dolmabahçe Sarayı\'nın yanında. Rezervasyondan sonra WhatsApp / Telegram / WeChat aracılığıyla tam buluşma yeri paylaşılır. Dolmabahçe tramvay durağı ve Kabataş tramvay istasyonundan yürüyüş videoları yukarıdaki buluşma noktası bölümünde.' },
      { q: 'Yemekli tur ne kadar sürer — ve ne zaman başlar?', a: 'Toplam 3 saat. 20:00\'den biniş, tekne 21:00\'de tam hareket ediyor, yaklaşık 00:00 (gece yarısı) dönüyor. Yerleşmek ve koltuğunuzu seçmek için 15-20 dakika önce gelmenizi öneririz.' },
      { q: 'Önceden rezerve etmem gerekli mi, yoksa gelebilir miyim?', a: 'Önceden rezerve edin — koltuklar dolar, özellikle hafta sonları ve tatillerde. Aynı gün rezervasyon sık sık mümkün ama garanti değil. Bu sayfadaki sihirbaz 1 dakikadan az sürede size yer verir. Teknede ödeme, dolayısıyla erken rezerve etmenin finansal riski yok.' },
      { q: 'İstanbul yemekli turu vejetaryen / helal / diyet kısıtlamaları için uygun mu?', a: 'Evet — tüm et helal sertifikalı. Vejetaryen ana yemek (falafel, kavrulmuş patates, bulgur pilavı, sebze yahnisi, soğan halkaları) ekstra ücret olmadan mevcut. Alerjiler rezervasyonda bildirilirse karşılanabilir. Alkol opsiyonel eklenti, asla dayatılmaz.' }
    ],
    cta: {
      primary: 'Yemekli Tur Rezerve Et · Teknede Ödeme',
      secondary: '4.8★ · TÜRSAB lisanslı · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'İstanbul Gece Turu — Boğaz\'da En İyi Akşam Deneyimi',
      description: 'İstanbul\'un en çok tercih edilen gece turu: 3 saatlik Boğaz turu yemek, canlı halk oyunları ve aydınlatılmış köprülerle. 4.8★, TÜRSAB lisanslı, teknede ödeme. Net İstanbul akşamı.'
    },
    hero: {
      h1: 'İstanbul Gece Turu',
      subtitle: 'İstanbul sakinlerinin ilk önerdiği gece turu — yemekli, canlı eğlenceli ve şehrin en ikonik aydınlatılmış manzaralarına sahip 3 saatlik Boğaz turu.',
      badge: 'İkonik İstanbul Akşamı · 3 Saat · Yemek Dahil'
    },
    intro: [
      'Bir **İstanbul gece turu** üç şey yapmalı: size şehrin ikonik manzaralarını vermeli, sizi iyi beslemeli ve sizi eğlendirmeli. Boğaz yemekli turumuz üçünü de tek bir 3 saatlik akşamda yapıyor — ve çoğu İstanbul rehberinin bunu #1 gece turu deneyimi olarak önermesinin nedeni bu.',
      '**İstanbul gece turu** rotası aydınlatılmış en iyi dönüm noktalarını kapsar: Dolmabahçe Sarayı, Ortaköy Camii, Boğaz Köprüsü (renk geçer), Bebek mahallesi, Rumeli Hisarı, FSM Köprüsü, Beylerbeyi Sarayı, Üsküdar\'ın Asya kıyısı ve uzaktaki Kız Kulesi. Çoğu şehir turu bunları otobüsten gösterir — biz sudan gösteriyoruz, en dramatik oldukları yerden.',
      'Yemek dahil (çok çeşitli Türk menüsü), canlı Türk halk oyunları şovu, sema, oryantal dans ve DJ seti. İstanbul\'da 2-3 günseniz, bu en büyük yumruğu atan tek akşam. 11.317+ gezginden 4.8★, teknede ödeme, ön ödeme yok.'
    ],
    highlights: [
      { title: 'Tüm ikonik İstanbul gece manzaraları', desc: 'Dolmabahçe Sarayı, Ortaköy Camii, aydınlatılmış Boğaz Köprüsü, Rumeli Hisarı, FSM Köprüsü, Beylerbeyi Sarayı, Kız Kulesi. Her büyük dönüm noktası tepe gece aydınlatmasında.' },
      { title: 'Tam Türk yemeği dahil', desc: '10 meze, sıcak başlangıç, ana yemek (somon/çipura/tavuk/köfte/vejetaryen), tatlı, sınırsız meşrubat. Helal sertifikalı. €{p.dinnerStd}/kişi\'de fiyatlandırılmış — her şey dahil.' },
      { title: 'Canlı halk oyunları + sema + oryantal', desc: 'Geleneksel Türk eğlencesi: Mevlana sema gösterisi, 5 bölgesel halk oyunu, oryantal dans, canlı müzik, DJ. 40 dakika performans, tüm akşam ortam müziği.' },
      { title: 'İlk kez İstanbul\'a gelenler için kolay', desc: 'Merkezi buluşma noktası (Kabataş İskelesi), otel transferi (+€{p.transfer}/kişi), İngilizce konuşan ekip, teknede ödeme. Sıfır lojistik stresi. Gelin, keyfini çıkarın, gidin.' }
    ],
    faq: [
      { q: 'İstanbul\'daki en iyi gece turu nedir?', a: 'Boğaz yemekli turu sürekli #1 olarak sıralanır. Nedenleri: (1) size tüm ikonik gece manzaralarını sudan verir, (2) yemek ve şovu tek bir pakette içerir, (3) 3 saat yorulmadan çok şey görmeye yeterli, (4) merkezi buluşma noktası, (5) teknede ödeme rezervasyon sürtünmesini azaltır. Çoğu İstanbul seyahat rehberi bunu "yapılacak tek mecburi gece şeyi" olarak önerir.' },
      { q: 'İstanbul gece turu ne kadar?', a: 'Yemekli Boğaz gece turumuz: Standart €{p.dinnerStd}/kişi, VIP €{p.dinnerVip}/kişi. Tur, yemek, eğlence, meşrubat dahil. Opsiyonel: alkol +€{p.unlimited}/kişi, otel transferi +€{p.transfer}/kişi. Teknede ödeme — ön ödeme yok.' },
      { q: 'İstanbul gece turu solo gezginler için güvenli mi?', a: 'Evet — çok güvenli. TÜRSAB lisanslı tekne, profesyonel İngilizce konuşan ekip, güvertede CCTV, can yelekleri mevcut. Birçok solo gezgin bu turu rezerve eder. Paylaşılan veya özel bir masada yemek yersiniz (seçiminiz) ve akşam kapsayıcıdır — isterseniz diğer gezginlerle tanışırsınız veya kendinize kalırsınız.' },
      { q: 'İstanbul\'daki gece turu için en iyi zaman nedir?', a: 'Boğaz yemekli turumuz 21:00-00:00 (3 saat). Bu tüm İstanbul dönüm noktaları için tepe aydınlatma zamanı — köprüler tam aydınlatılmış, saraylar parlıyor, su üzerinde ay. Daha erken isterseniz (altın saat), bunun yerine 17:30 gün batımı turunu düşünün.' },
      { q: 'İstanbul gece turu buluşma noktasına nasıl giderim?', a: 'Buluşma noktası Kabataş İskelesi (merkezi Avrupa yakası, Dolmabahçe Sarayı\'nın yanında). Tramvay ile: T1 Kabataş istasyonuna (hat sonu). Taksi ile: Taksim\'den ~15 dk. Yürüyerek: Taksim\'den İnönü Caddesi aşağı 20 dk. Bu sayfada yürüyüş-yönergesi videoları var. Tercih ederseniz +€{p.transfer}/kişi ile otel transferi mevcut.' },
      { q: 'İstanbul gece turunu aynı gün rezerve edebilir miyim?', a: 'Sık sık evet, özellikle hafta içi. Hafta sonları daha hızlı dolar. Bu sayfadaki rezervasyon sihirbazı bu gece için müsaitliği kontrol etmenize ve 1 dakikadan az sürede rezerve etmenize olanak tanır. Acil aynı gün talepleri için +90 532 520 1700\'den WhatsApp\'tan yazın.' }
    ],
    cta: {
      primary: 'Gece Turu Rezerve Et · Teknede Ödeme',
      secondary: '€{p.dinnerStd}/kişi\'den · Yemek + şov dahil · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'İstanbul Tekne Turu — Yemekli ve Şovlu Boğaz Turu',
      description: 'İstanbul\'un en iyi tekne turu: 3 saatlik Boğaz turu tam yemek, canlı halk oyunları ve aydınlatılmış gece manzaralarıyla. €{p.dinnerStd}/kişi\'den, teknede ödeme, 4.8★ puan.'
    },
    hero: {
      h1: 'İstanbul Tekne Turu',
      subtitle: 'Gezginlerin en çok rezerve ettiği İstanbul tekne turu — Türk yemeği, canlı eğlence ve şehrin sudan ikonik manzaralarıyla Boğaz turu.',
      badge: '4.8★ · TÜRSAB A-17672 · Teknede Ödeme'
    },
    intro: [
      '"İstanbul tekne turu" aradığınızda, şehri sudan tanımlayan tek şeyi arıyorsunuz: Boğaz. 3 saatlik Boğaz tekne turumuz sizi her büyük İstanbul dönüm noktasının — Dolmabahçe Sarayı, Ortaköy Camii, Boğaz Köprüsü, Rumeli Hisarı, Beylerbeyi Sarayı ve Kız Kulesi — yanından tam Türk yemeği ve canlı eğlence ile götürür.',
      'Daha az Boğaz kapsayan ve yemek ile eğlenceyi atlayan 1 saatlik birçok sightseeing feribotundan farklı olarak, **İstanbul tekne turumuz** tam akşam deneyimidir: 20:00\'de Kabataş İskelesi\'nden biniş, gece yarısına kadar tur, 10 meze, ana yemek, tatlı, sema, halk oyunları, oryantal dans ve DJ. Turu ALDIĞINIZ gibi gece dışarı çıkışını da alıyorsunuz.',
      'İstanbul\'da bir geceniz varsa veya tam bir haftanız varsa, bu **İstanbul tekne turu** işi yapar. 11.317+ gezginden 4.8★, TÜRSAB lisanslı (A-17672), helal sertifikalı menü ve teknede ödeme — deneyimden memnun kalana kadar finansal taahhüt yok.'
    ],
    highlights: [
      { title: 'Tüm büyük Boğaz dönüm noktaları', desc: 'Dolmabahçe, Çırağan, Ortaköy Camii, Boğaz Köprüsü, Bebek, Rumeli Hisarı, FSM Köprüsü, Beylerbeyi Sarayı, Üsküdar, Kız Kulesi. Bir turda hem Avrupa hem Asya kıyıları.' },
      { title: 'Yemek + şov dahil', desc: 'Sadece bir tekne turu değil — tam çok çeşitli Türk yemeği, canlı halk oyunları performansları, sema, oryantal dans, DJ. 3 saati eğlenceli kılan, sadece sightseeing değil.' },
      { title: 'Akşam kalkış (en iyi aydınlatma)', desc: '21:00 kalkış aydınlatılmış Boğaz\'ı tam ışıltısında yakalar — köprüler, saraylar, camiler hepsi aydınlatılmış. Aynı dönüm noktalarını düz ışıkta gösteren gündüz turlarından daha dramatik.' },
      { title: 'Kolay rezervasyon, kolay ödeme', desc: 'Bu sayfadaki sihirbaz ile 1 dakikadan az sürede rezerve edin. Teknede ödeme — ön ödeme yok. +€{p.transfer}/kişi\'den otel transferi mevcut. Kalkıştan 2 saat öncesine ücretsiz iptal.' }
    ],
    faq: [
      { q: 'İstanbul\'daki en iyi tekne turu nedir?', a: 'Boğaz yemekli turu sürekli #1 olarak sıralanır. Tüm büyük dönüm noktalarını kapsar, yemek ve eğlenceyi içerir ve dönüm noktalarının aydınlatıldığı akşam çalışır. Diğer seçenekler (hop-on feribotlar, sabah sightseeing tekneleri) daha kısa rotaları kapsar, yemeği atlar ve eğlence içermez. Bir İstanbul akşamı için bu en tam tekne turu.' },
      { q: 'İstanbul tekne turu ne kadar sürer?', a: '3 saat. Kabataş İskelesi\'nde 20:00\'den biniş, 21:00 kalkış, ~00:00 dönüş. Dolmabahçe\'den Rumeli Hisarı\'na ve geri tam Boğaz\'ı kapsar. Yorulmadan tam yemek + şov için yeterli zaman.' },
      { q: 'İstanbul tekne turu ne kadar?', a: 'Yemekli tekne turumuz: Standart €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}), premium menülü VIP €{p.dinnerVip}/kişi (eski €{p.dinnerVipOriginal}). 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. Teknede ödeme. Alkol ve otel transferi opsiyonel eklentilerdir.' },
      { q: 'İstanbul tekne turları nereden kalkıyor?', a: 'Teknemiz Kabataş İskelesi\'nden, merkezi Avrupa yakası İstanbul, Dolmabahçe Sarayı\'nın yanından kalkıyor. T1 tramvay (Kabataş istasyonu), Taksim\'den 15 dk taksi veya Taksim\'den 20 dk yürüyüş ile erişilebilir. Merkezi bölgelerden +€{p.transfer}/kişi ile otel transferi mevcut.' },
      { q: 'Bu tekne turu çocuklu aileler için uygun mu?', a: 'Evet — çok aile dostu. 0-3 yaş çocuklar ücretsiz, 4-8 yaş %50 indirim. Kapalı iç oturma, talep üzerine çocuk menüsü ve eğlence (sema, halk oyunları) çocuklar için ilgi çekici. Dünyanın her yerinden birçok aile bu turu rezerve eder.' },
      { q: 'Tekne turuna bir şey getirmem gerekiyor mu?', a: 'Pasaport veya kimlik kartı (tekne kaydı için), ince ceket (güverte serin olabilir), dans planlıyorsanız rahat ayakkabılar. Fotoğraflar için akıllı telefon. Teknede ödeme için nakit veya kart (ikisi de kabul edilir). Diğer her şey — yemek, içecek, eğlence — teknede.' }
    ],
    cta: {
      primary: 'Tekne Turu Rezerve Et · Teknede Ödeme',
      secondary: '3 saat · Yemek + şov · €{p.dinnerStd}/kişi\'den · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Boğaz Gezisi — Premium İstanbul Tur Deneyimi, €{p.dinnerStd}\'den',
      description: 'Boğaz gezinizi planlayın: 3 saatlik yemekli tur Türk ziyafeti, canlı halk oyunları şovu, aydınlatılmış gece manzaralarıyla. 4.8★ puan, teknede ödeme, transfer için 12 hizmet bölgesi.'
    },
    hero: {
      h1: 'Boğaz Gezisi',
      subtitle: 'Gezginlerin en çok önerdiği Boğaz gezisi — her büyük İstanbul dönüm noktasını, yemek, eğlence ve gece manzaralarıyla kapsayan 3 saatlik yemekli tur.',
      badge: 'Tam Boğaz Deneyimi · Akşam Kalkış'
    },
    intro: [
      'Bir **Boğaz gezisi** 1 saatlik sightseeing feribotu veya yemekli tam bir akşam turu anlamına gelebilir — biz ikincisini yapıyoruz ve çoğu gezgin bunu daha iyi değerli deneyim buluyor. 3 saat, €{p.dinnerStd}/kişi, yemek ve eğlence dahil. Sadece dönüm noktalarından geçmiyorsunuz — yiyorsunuz, şov izliyorsunuz ve akşamın keyfini çıkarıyorsunuz.',
      '**Boğaz gezimiz** rotası görmeye değer her şeyi kapsar: Dolmabahçe Sarayı (Osmanlı Sultanı\'nın 19. yüzyıl konutu), Ortaköy Camii (İstanbul\'un en çok fotoğraflanan camilerinden biri), Boğaz Köprüsü (geceleri renk değiştirir), Rumeli Hisarı (Fatih Sultan Mehmet tarafından 1452\'de inşa edildi), Beylerbeyi Sarayı (Asya yakası) ve küçük bir adada Kız Kulesi. Hepsi İngilizce konuşan ekip tarafından açıklanır.',
      'İstanbul\'da 24 saat veya bir haftaseniz, bu size bir akşamda en çoğunu veren **Boğaz gezisi**\'dir. 11.317+ gezginden 4.8★ puan, TÜRSAB A-17672 lisanslı, helal dostu menü, teknede ödeme — ön ödeme riski yok.'
    ],
    highlights: [
      { title: 'Tek seferde tam Boğaz', desc: 'Avrupa kıyısı (Dolmabahçe, Ortaköy, Rumeli Hisarı), Asya kıyısı (Beylerbeyi, Üsküdar), her iki Boğaz köprüsü, Kız Kulesi. Her büyük dönüm noktası 3 saatte görünür.' },
      { title: 'Yemek + eğlence dahil', desc: 'Sadece sightseeing feribotu değil — mezeler, ana yemek, tatlı ile tam Türk yemeği. Canlı halk oyunları şovu, sema, oryantal, DJ. Sadece manzaranın ötesinde eğlence değeri.' },
      { title: 'Akşam = en iyi aydınlatma', desc: 'Gündüz Boğaz gezileri size dönüm noktalarını düz ışıkta gösterir. Akşam gezileri her şeyi aydınlatılmış yakalar: parlayan saraylar, renkli köprüler, karanlık suya yansıyan camiler. Daha iyi fotoğraflar, daha dramatik.' },
      { title: '€{p.dinnerStd}\'den — teknede ödeme', desc: 'Ön ödeme gerekmez. Teknede ödeme (nakit veya kart). Kalkıştan 2 saat öncesine kadar ücretsiz iptal. 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. Şeffaf fiyatlandırma.' }
    ],
    faq: [
      { q: 'İstanbul\'da en iyi Boğaz gezileri nelerdir?', a: 'Akşam yemekli tur sürekli en üst sıralarda. Gündüz seçenekleri (1 saatlik halka feribotları, 2 saatlik sightseeing tekneleri) daha azını gösterir ve yemek içermez. Değer için 3 saatlik yemekli, şovlu ve merkezi dönüş noktalı bir turu yenmek zordur. Turumuzun €{p.dinnerStd} maliyeti ayrı bir yemek + eğlence akşamı ihtiyacını ortadan kaldırır.' },
      { q: 'Bir Boğaz gezisi ne kadar sürer?', a: 'Boğaz gezimiz toplam 3 saat (21:00 kalkış, 00:00 dönüş). Daha kısa seçenekler var (1 saatlik sightseeing feribotları, 90 dakikalık turlar) ama yemek ve eğlenceyi atlarlar. Tam akşam deneyimi için 3 saat idealdir — her şeyi görmek için yeterli, yorucu değil.' },
      { q: 'Boğaz gezisi değerli mi?', a: 'Evet — hemen hemen her İstanbul seyahat rehberi "Boğaz turu"nu ilk 5 mutlaka yapılacak olarak listeler. Şehir bu boğazın etrafında inşa edildi; Boğaz\'ı sudan görmediyseniz İstanbul\'u gerçekten görmemişsinizdir. Bizim özel akşam turumuz yemek ve eğlence ekler, sadece sightseeing yerine tam bir akşam dışarı çıkışı yapar.' },
      { q: 'Boğaz gezisine ne getirmeliyim?', a: 'Pasaport veya kimlik kartı (tekne kaydı için), ince ceket (akşamlar güverte serin), akıllı telefon/kamera, dans pisti için rahat ayakkabılar. Ödeme için nakit veya kart. Diğer her şey teknede. Toplu taşıma kullanmak istemiyorsanız +€{p.transfer}/kişi ile otel transferi mevcut.' },
      { q: 'Boğaz gezisi çocuklar için uygun mu?', a: 'Evet — çok çocuk dostu. 0-3 yaş çocuklar ücretsiz (transfer dahil), 4-8 yaş %50 indirim. Kapalı iç oturma, talep üzerine çocuk menüsü ve eğlence nazik ve ilgi çekicidir. Birçok aile bunu İstanbul gezilerinin bir önemli olayı olarak rezerve eder.' },
      { q: 'Boğaz gezisi durakları nelerdir?', a: 'Sürekli bir tur — dönüm noktalarında durmuyoruz (inme yok). Tekne her dönüm noktasının yakınından geçer, ekip ne gördüğünüzü açıklar, masanızda rahat kalırsınız veya fotoğraflar için açık güverteye geçersiniz. Kuyruk yok, yürüme yok — sadece suda sorunsuz 3 saat.' }
    ],
    cta: {
      primary: 'Boğaz Gezisi Rezerve Et · Teknede Ödeme',
      secondary: '3 saat · Yemek + şov · 2 saat öncesine ücretsiz iptal · TÜRSAB lisanslı',
      tertiary: 'Müsaitlik Kontrol Et'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Boğaz Turu Biletleri — Direkt Rezervasyon, €{p.dinnerStd}\'den Teknede Ödeme',
      description: 'Boğaz turu biletlerini direkt satın alın. Standart €{p.dinnerStd}, VIP €{p.dinnerVip}. Ön ödeme yok, teknede ödeme. 2 saat öncesine ücretsiz iptal. 4.8★ puan, TÜRSAB A-17672.'
    },
    hero: {
      h1: 'Boğaz Turu Biletleri',
      subtitle: 'Aracı ücretlerini atlayın — Boğaz turu biletlerinizi direkt bize alın. Ön ödeme yok, teknede ödeme, kalkıştan 2 saat öncesine ücretsiz iptal.',
      badge: 'Direkt Rezervasyon · Ön Ödeme Yok · %40 İNDİRİM'
    },
    intro: [
      '**Boğaz turu biletleri** arıyor musunuz? Direkt alın. Biletlerimiz €{p.dinnerStd} (Standart) veya €{p.dinnerVip} (VIP) — normal fiyattan %40 indirim (€{p.dinnerStdOriginal} ve €{p.dinnerVipOriginal}). Üçüncü taraf rezervasyon siteleri genellikle %20-40 komisyon ekler. Direkt rezervasyon yaparak tasarruf edersiniz — ve yine teknede ödeyebilirsiniz.',
      '**Boğaz turu bilet** süreçimiz: bu sayfadaki sihirbazı 1 dakikadan az sürede doldurun (tarih, misafir sayısı, paket, iletişim), WhatsApp / Telegram / WeChat aracılığıyla anında onaylarız, 20:00\'de Kabataş İskelesi\'nde görünürsünüz, teknede ödersiniz, 3 saatlik yemekli turun keyfini çıkarırsınız. Yazdırılacak fiziksel bilet yok, e-postalanacak kupon yok — onay biletiniz.',
      'Ister bu geceki yemekli turu rezerve ediyor olun veya gelecek hafta belirli bir tarih için ayırıyor olun, **Boğaz turu biletleri direkt** en hızlı yoldur. 4.8★ puan, TÜRSAB lisanslı (A-17672), helal sertifikalı menü ve otel transferi ile alkol eklentilerini destekler.'
    ],
    highlights: [
      { title: 'Direkt rezervasyon — aracı ücreti yok', desc: '€{p.dinnerStd} Standart, €{p.dinnerVip} VIP. Üçüncü taraf siteler aynı tur için €30-80+ alır. Bize direkt rezervasyon yaparak tasarruf edersiniz. Gizli ücret yok, komisyon markup\'ı yok.' },
      { title: 'Teknede ödeme — ön ödeme yok', desc: 'Şimdi yerinizi ayırın, gemiye bindiğinizde ödeyin. Nakit veya kart kabul edilir. Kalkıştan 2+ saat önce iptal ederseniz ücretsiz. Erken ayırmanın finansal riski sıfır.' },
      { title: '1 dakikadan az sürede onay', desc: 'Sihirbazı doldurun → WhatsApp / Telegram / WeChat aracılığıyla onaylarız. Yazdırılacak e-postalı PDF kuponu yok. Mesajımız biletinizdir. 20:00\'de iskeleye gelin.' },
      { title: '%40 İNDİRİM şu anki lansman fiyatı', desc: 'Standart eski €{p.dinnerStdOriginal}, şimdi €{p.dinnerStd}. VIP eski €{p.dinnerVipOriginal}, şimdi €{p.dinnerVip}. %40 indirim çünkü direkt rezervasyon yapıyorsunuz. Süreli bir numara değil — standart direkt-rezervasyon fiyatımız.' }
    ],
    faq: [
      { q: 'Boğaz turu biletleri ne kadar?', a: 'Standart: €{p.dinnerStd}/kişi (normal €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/kişi (normal €{p.dinnerVipOriginal}). 3 saatlik tur, çok çeşitli Türk yemeği, canlı halk oyunları şovu, sınırsız meşrubat dahil. 0-3 yaş ücretsiz, 4-8 yaş %50 indirim. Teknede ödeme — ön ödeme yok.' },
      { q: 'Boğaz turu biletlerini nereden satın alabilirim?', a: 'Bu sayfada direkt — rezervasyon sihirbazını doldurun, WhatsApp / Telegram / WeChat aracılığıyla anında onaylarız. Teknede ödeme. Üçüncü taraf platformlar (Viator, GetYourGuide, Klook) da bilet satar ama genellikle €30-80+ alır — bu aracı markup\'ıdır. Direkt en ucuz ve en hızlı.' },
      { q: 'Boğaz turu biletini yazdırmam gerekiyor mu?', a: 'Hayır — fiziksel bilet veya kupon gerekmez. Rezervasyondan sonra, buluşma noktası, zaman ve rezervasyon adınızla WhatsApp (veya Telegram/WeChat) aracılığıyla size bir onay gönderiyoruz. Sadece iskelede telefonunuzu gösterin. Bu kadar.' },
      { q: 'Boğaz turu biletimi iptal veya iade edebilir miyim?', a: 'Evet — kalkıştan 2 saat öncesine kadar ücretsiz iptal. Sadece WhatsApp\'tan yazın. Henüz ödemediğiniz için (teknede ödeme), iade gerekmiyor — sadece gelmezsiniz, ücret yok. Ön ödemeli üçüncü taraf biletlerinden çok daha esnek.' },
      { q: 'Boğaz turu biletleri aynı gün mevcut mu?', a: 'Sık sık evet, özellikle hafta içi. Hafta sonları ve tatiller daha hızlı dolar. Rezervasyon sihirbazı aracılığıyla müsaitliği kontrol edin — gerçek zamanlı güncelleniyor. Aynı gün rezervasyon genellikle 21:00 kalkıştan birkaç saat öncesine kadar mümkün. Acil istekler için WhatsApp.' },
      { q: 'Çocuk Boğaz turu biletleri ücretsiz mi?', a: 'Çocuklar **0-3 yaş tamamen ücretsiz** (ücret yok, gizli ücret yok, transfer dahil). **4-8 yaş %50 indirimli** (Standart\'ta €{p.dinnerStd}/2 = €12). **9+ yaş tam yetişkin fiyatı.** Fiyatlar üst sınırlı ve şeffaf — "bebek ek ücreti" hileleri yok.' }
    ],
    cta: {
      primary: 'Bilet Al · Teknede Ödeme',
      secondary: 'Direkt rezervasyon · Ön ödeme yok · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Müsaitlik Kontrol Et'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Son Dakika Boğaz Turu — Bu Gece İçin Rezervasyon, Teknede Ödeme',
      description: 'Bu gece için son dakika Boğaz turu rezervasyonu. Aynı gün müsaitlik, teknede ödeme, ön ödeme yok. Dakikalar içinde WhatsApp onayı. €{p.dinnerStd}/kişi\'den.'
    },
    hero: {
      h1: 'Son Dakika Boğaz Turu',
      subtitle: 'Bu geceki müsaitlik, dakikalar içinde onaylandı. Ön ödeme yok, önceden yazdırılmış kupon yok — sadece iskeleye gelin ve akşamın keyfini çıkarın.',
      badge: 'Aynı Gün Rezervasyon · Dakikalar İçinde Onaylandı · Teknede Ödeme'
    },
    intro: [
      'Bu öğleden sonra İstanbul\'a indi mi ve bu akşam harika bir gece mi istiyorsunuz? **Son dakika Boğaz turu** işe yarar. Sabah karar veren birçok gezgin olduğunu bildiğimiz için aynı gün rezervasyonları için özellikle koltuk ayırıyoruz. Buradaki sihirbazı doldurun, dakikalar içinde WhatsApp üzerinden onaylarız, 20:00\'de Kabataş İskelesi\'nde görünürsünüz, teknede ödersiniz, keyfini çıkarırsınız.',
      '**Son dakika Boğaz turumuz** ön rezervasyonlarla aynı akşam programına sahiptir: su üstünde 3 saat (21:00-00:00), çok çeşitli Türk yemeği, canlı halk oyunları şovu, sema, oryantal dans, DJ. Aydınlatılmış Dolmabahçe Sarayı, Ortaköy Camii, Boğaz Köprüsü — aynı ikonik manzaralar. Aynı €{p.dinnerStd} Standart veya €{p.dinnerVip} VIP fiyatı.',
      'Aynı gün iptal kalkıştan 2 saat öncesine kadar ücretsizdir, çünkü **teknede ödeme** henüz hiçbir şeye söz vermediğiniz anlamına gelir. 14:00\'te rezerve ettiniz ve 19:00\'a kadar planlarınızı değiştirdiniz ise sadece WhatsApp\'tan yazın — iade yok, sorun yok. Gezginlerin takdir ettiği **son dakika İstanbul turu** esnekliği bu.'
    ],
    highlights: [
      { title: 'Bu geceki koltuklar hâlâ mevcut', desc: 'Aynı gün rezervasyonları için günlük 5-10 koltuk ayırıyoruz. Yukarıdaki sihirbazı kontrol edin — gerçek zamanlı müsaitlik. Bugünün turu doluysa, yarınki genellikle açık.' },
      { title: '5 dakikadan az sürede onay', desc: 'Sihirbazı doldurun → WhatsApp/Telegram/WeChat mesajı onayla → bitti. Beklemek için e-posta kuponu yok, yazdırılacak QR kod yok. Mesajımız biletinizdir.' },
      { title: 'Gemiye binene kadar sıfır ödeme', desc: 'Teknede ödeme, nakit veya kart. Gelmezseniz (plan değişikliği, hastalık, hava), ücret yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal. Gerçekten son dakika dostu.' },
      { title: 'Aynı gün otel transferi sık sık mevcut', desc: 'Otel transferi normal olarak 24 saatlik bildirim gerektirir, ancak 14:00-17:00 arası aynı gün rezervasyonları için genellikle +€{p.transfer}/kişi ile alma ayarlayabiliriz. Acil transfer istekleri için WhatsApp.' }
    ],
    faq: [
      { q: 'Gerçekten bu gece için Boğaz turu rezerve edebilir miyim?', a: 'Evet — sıklıkla. Aynı gün rezervasyonları için koltuk ayırıyoruz. Bu geceki müsaitlik için yukarıdaki sihirbazı kontrol edin. Koltuklar mevcutsa, 18:00\'e kadar (kalkıştan 3 saat önce) rezerve edebilirsiniz. Hafta sonları daha sıkışık — mümkünse günün daha erken saatinde rezerve edin.' },
      { q: 'Ne kadar son dakika rezerve edebilirim?', a: '21:00 teknesi için 18:00\'e kadar rezervasyon açık kalır. 18:00\'den sonra, +90 532 520 1700\'den WhatsApp\'tan bize direkt yazın — koltuklar açıksa manuel onaylayabiliriz. 19:30\'dan sonra Kabataş İskelesi\'nde değilseniz ve hızlıca binebilmedikçe çok sıkışık.' },
      { q: 'Son dakika Boğaz turu daha pahalı mı?', a: 'Hayır — ön rezervasyonla aynı fiyat. €{p.dinnerStd} Standart, €{p.dinnerVip} VIP. "Dalgalı fiyatlandırma" veya son dakika primi yapmıyoruz. Aynı tekne, aynı yemek, aynı şov, aynı fiyat.' },
      { q: 'Bu gecenin turu tamamen doluysa ne olur?', a: 'Yarınki tur genellikle açık — yılda 365 gün, günlük çalışıyoruz. Yarın için rezerve edebilir ve yine de "son dakika" olabilirsiniz, yani yeni karar verdiniz. Hafta içi turlar hafta sonlarından daha fazla alana sahip.' },
      { q: 'Son dakika otel transferi ayarlayabilir misiniz?', a: 'Aynı gün transferi 21:00 turu için ~17:00\'e kadar mümkündür. 17:00\'den sonra, müsait bir şoförümüz olmayabilir — bu durumda Kabataş İskelesi\'ne taksi alabilirsiniz (Taksim\'den 15 dk, Sultanahmet\'ten 10 dk, ~€10-15). Merkezi ve kolay.' },
      { q: 'Zaten Kabataş\'ta isem ve binmek istersem ne olur?', a: 'İskeledeyseniz ve açık koltuklar varsa, yürüyüp binebilirsiniz. Bize WhatsApp\'tan yazın veya ekibe sorun — yer varsa sizi ekleyeceğiz. Aynı teknede ödeme fiyatı. Tur terimleriyle "walk-on" denir — burada çalışır.' }
    ],
    cta: {
      primary: 'Bu Gece Rezerve Et · Teknede Ödeme',
      secondary: 'Aynı gün rezervasyon · Dakikalar içinde onaylandı · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Acil Rezervasyonlar İçin WhatsApp'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'İstanbul Tur Fiyatı — Şeffaf Oranlar, €{p.dinnerStd}\'den Teknede Ödeme',
      description: 'İstanbul Boğaz turu fiyatları: Standart €{p.dinnerStd}, VIP €{p.dinnerVip}. 0-3 yaş ücretsiz. Şeffaf eklentiler (alkol +€{p.unlimited}, transfer +€{p.transfer}). Gizli ücret yok.'
    },
    hero: {
      h1: 'İstanbul Tur Fiyatı',
      subtitle: 'Şeffaf fiyatlandırma, gizli ücret yok. Standart €{p.dinnerStd}/kişi, VIP €{p.dinnerVip}/kişi — ve şimdi değil, teknede ödüyorsunuz.',
      badge: 'Şeffaf · %40 İNDİRİM Direkt · 0-3 Yaş Ücretsiz'
    },
    intro: [
      '**İstanbul tur fiyatları** çok değişir — yemeği atlayan €15 bütçe feribotlarından €150+ resort tarzı yatlara kadar. Fiyatlandırmamız ortada ve en iyi değeri verir: Standart için 3 saatlik şovlu tam yemekli tur için €{p.dinnerStd}, sahne önü premium deneyim için VIP için €{p.dinnerVip}. Gizli ücret yok, sürpriz ek ücret yok.',
      'Detaylı bir **İstanbul tur fiyatı** dökümü, çünkü şeffaflık önemli:\n\n- **Standart Yemekli Tur**: €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}, %40 indirim). 3 saatlik tur, 10 meze, ana yemek, tatlı, sınırsız meşrubat, canlı şov dahil.\n- **VIP Yemekli Tur**: €{p.dinnerVip}/kişi (eski €{p.dinnerVipOriginal}). Sahne önü koltuklar, 15+ meze, dana bonfile/antrikot seçenekleri, öncelikli hizmet ekler.\n- **0-3 Yaş**: Ücretsiz. 4-8 yaş: %50 indirim. 9+ yaş: tam fiyat.\n\nEklentiler (opsiyonel):\n- 2 kadeh alkol: +€{p.alcohol2}/kişi\n- Sınırsız yerli alkol: +€{p.unlimited}/kişi\n- Otel transferi gidiş-dönüş: +€{p.transfer}/kişi\n- Romantik masa düzeni: +€{p.romantic}/masa',
      'Ve önemlisi: **teknede ödeme**. Teknede olana kadar bir sent bile söz vermezsiniz. Kalkıştan 2 saat öncesine kadar ücretsiz iptal. Taahhüt yok, risk yok — bulacağınız en tüketici dostu **İstanbul tur fiyatlandırması**.'
    ],
    highlights: [
      { title: 'Standart: €{p.dinnerStd} (eski €{p.dinnerStdOriginal})', desc: 'Normal fiyattan %40 indirim. 3 saatlik tur, tam Türk yemeği, canlı şov, sınırsız meşrubat. En popüler paket — harika bir akşam için ihtiyacınız olan her şeyi kapsar.' },
      { title: 'VIP: €{p.dinnerVip} (eski €{p.dinnerVipOriginal})', desc: 'Normal fiyattan %40 indirim. Sahne önü koltuklar, 15+ meze, premium ana yemek (dana bonfile, antrikot), öncelikli garson hizmeti ekler. Özel günler veya premium gezginler için.' },
      { title: 'Çocuk fiyatı: 0-3 ücretsiz, 4-8 yarı fiyat', desc: '0-3 tamamen ücretsiz (ücret yok). 4-8 yetişkin fiyatından %50 indirim. 9+ tam yetişkin fiyatı. Şeffaf, aile fiyatlandırma hileleri yok. Transfer de 0-3 için ücretsiz.' },
      { title: 'Eklentiler — sadece istediğinizde', desc: 'Alkol: €{p.alcohol2} veya €{p.unlimited}/kişi. Transfer: €{p.transfer}/kişi. Romantik masa: €{p.romantic}/masa. Hepsi opsiyonel, paketlenmemiş. Sadece ihtiyacınız olanı seçin.' }
    ],
    faq: [
      { q: 'İstanbul turu ne kadar?', a: 'Standart Yemekli Tur: €{p.dinnerStd}/kişi (normal €{p.dinnerStdOriginal}, %40 indirim). VIP: €{p.dinnerVip}/kişi (normal €{p.dinnerVipOriginal}, %40 indirim). 0-3 yaş ücretsiz, 4-8 yaş yarı fiyat. Teknede ödeme — ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' },
      { q: 'İstanbul tur fiyatında gizli ücret var mı?', a: 'Hayır. Fiyat şunları içerir: 3 saatlik tur, tam yemek (meze, başlangıç, ana yemek, tatlı), sınırsız meşrubat, canlı şov, vergiler. Opsiyonel eklentiler (alkol, transfer, romantik masa) ayrı ve şeffaf fiyatlandırılmıştır — sadece eklediğiniz için ödersiniz. "Servis ücreti", "liman ücreti", sürpriz ek ücret yok.' },
      { q: 'İstanbul tur fiyatı neden %40 indirim — bu bir hile mi?', a: 'Hile yok. Normal fiyat €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal}, üçüncü taraf rezervasyon sitelerinin (Viator, GetYourGuide, Klook) aldığı fiyattır — komisyonlarıyla. Direkt rezerve edin ve €{p.dinnerStd}/€{p.dinnerVip} alın. %40 fark bu. Zaman sınırlı veya dalgalı fiyatlandırma numaraları yok.' },
      { q: 'İstanbul tur fiyatı diğer seçeneklerle nasıl karşılaştırılır?', a: 'Halka feribotları: €5-10, 1 saat, yemek yok, eğlence yok, sadece sightseeing. Bütçe yemekli turlar: €20-30, kalabalık, ortalama yemek, kısa şov. Bizim Standart (€{p.dinnerStd}): 3 saat, tam yemek, tam şov, özel masa, TÜRSAB lisanslı. VIP (€{p.dinnerVip}): sahne önü, premium menü. Resort yatlar: €100-150+, solo gezginler/çiftler için aşırı.' },
      { q: 'İstanbul tur fiyatını ön ödemem gerekli mi?', a: 'Hayır — **teknede ödeme**. Şimdi rezerve edersiniz (1 dakikalık sihirbaz), WhatsApp\'tan onaylarız, 20:00\'de gelirsiniz ve teknede ödersiniz (nakit veya kart). 2 saat öncesine kadar ücretsiz iptal. Memnun olana kadar sıfır finansal taahhüt.' },
      { q: 'İstanbul tur fiyatında grup indirimi var mı?', a: '10+ gruplar için %5-10 indirim sunabiliriz — grup büyüklüğünüzle WhatsApp\'tan yazın. 25+ için özel tur (grubunuz için tüm tekne, özel menü) düşünün. 2-9 kişi için standart fiyatlar geçerli — zaten normal fiyattan %40 indirim.' }
    ],
    cta: {
      primary: 'Rezerve Et · Teknede Ödeme',
      secondary: '€{p.dinnerStd}/kişi\'den · 0-3 yaş ücretsiz · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Boğaz Sightseeing — Tüm İstanbul Dönüm Noktaları Sudan',
      description: 'Boğaz sightseeing turu her büyük dönüm noktasını kapsar: Dolmabahçe, Ortaköy Camii, Boğaz Köprüsü, Rumeli Hisarı, Beylerbeyi, Kız Kulesi. 3 saatlik akşam turu yemek ile, €{p.dinnerStd}.'
    },
    hero: {
      h1: 'Boğaz Sightseeing',
      subtitle: 'İstanbul\'un tüm ikonik dönüm noktaları — sudan, gece, yemek ile. Tek bir 3 saatlik tur Dolmabahçe, Ortaköy Camii, Boğaz Köprüsü, Rumeli Hisarı ve daha fazlasını kapsar.',
      badge: '10+ Dönüm Noktası · Avrupa ve Asya Kıyıları · 3 Saat'
    },
    intro: [
      '**Boğaz sightseeing** sudan herhangi bir otobüs turunu yener. Boğaz, şehrin en tarihi su yoludur — Osmanlı sultanları, Bizans imparatorları, Yunan tüccarları ve Rus savaş gemileri hepsi geçti. Bugün 3 saatlik turumuz, İngilizce konuşan ekibimizin yorumlarıyla, ufuk çizgisini tanımlayan her büyük İstanbul dönüm noktasından geçer.',
      '**Boğaz sightseeing turumuz** rotası (akşam kalkış, 21:00-00:00):\n\n1. **Dolmabahçe Sarayı** — 19. yüzyıl Osmanlı konutu, geceleri aydınlatılır\n2. **Çırağan Sarayı** — şimdi lüks otel, kraliyet tarihi\n3. **Ortaköy Camii** — İstanbul\'un en çok fotoğraflanan camilerinden biri, suda\n4. **Boğaz Köprüsü** — geceleri mavi, mor, altın arasında geçer\n5. **Bebek** — şık Avrupa yakası mahalle\n6. **Rumeli Hisarı** — 1452\'de Fatih Sultan Mehmet tarafından Konstantinopolis fethinden önce inşa edildi\n7. **Fatih Sultan Mehmet Köprüsü** — ikinci Boğaz köprüsü, dramatik kemer\n8. **Beylerbeyi Sarayı** — Asya yakası, Osmanlı yazlık konutu\n9. **Üsküdar** — İstanbul\'un Asya yakası, geleneksel mahalle\n10. **Kız Kulesi** — küçük ada kulesi, İstanbul\'un en romantik sembollerinden biri',
      'Yemek ve eğlence dahildir — ayrı değil — yani **Boğaz sightseeing** tam bir akşama dönüşür. Çok çeşitli Türk yemeği, canlı halk oyunları şovu, sema, oryantal dans, DJ. 11.317+ gezginden 4.8★ puan, TÜRSAB A-17672 lisanslı.'
    ],
    highlights: [
      { title: '10+ büyük İstanbul dönüm noktası', desc: 'Dolmabahçe Sarayı, Çırağan Sarayı, Ortaköy Camii, Boğaz Köprüsü, Rumeli Hisarı, FSM Köprüsü, Beylerbeyi Sarayı, Üsküdar, Kız Kulesi. Tek bir turda her temel İstanbul dönüm noktası.' },
      { title: 'Hem Avrupa hem Asya kıyıları', desc: 'Giderken Avrupa yakası (Dolmabahçe → Rumeli Hisarı), dönerken Asya yakası (Beylerbeyi → Üsküdar). Bir 3 saatlik turda iki kıta — sadece İstanbul bunu yapmanıza izin verir.' },
      { title: 'Akşam sightseeing = aydınlatılmış manzaralar', desc: 'Gündüz sightseeing dönüm noktalarını düz ışıkta gösterir. Gece turu onları tepe dramada yakalar: saraylar sarı parlıyor, köprüler renkli, camiler karanlık suya yansımış. Fotoğraflar için daha iyi, daha unutulmaz.' },
      { title: 'Yemek + şov dahil', desc: 'Sightseeing + yemek + eğlence bir pakette. Turdan sonra ayrı yemek planlamaya gerek yok. €{p.dinnerStd}/kişi\'den, teknede ödeme, toplam 3 saat.' }
    ],
    faq: [
      { q: 'Hangi Boğaz dönüm noktalarını göreceğim?', a: 'Sırayla: Dolmabahçe Sarayı, Çırağan Sarayı, Ortaköy Camii, Boğaz Köprüsü, Bebek mahallesi, Rumeli Hisarı, Fatih Sultan Mehmet Köprüsü, Anadolu Hisarı, Beylerbeyi Sarayı, Kuzguncuk, Üsküdar ve Kız Kulesi (uzaktan görünür). Tek bir 3 saatlik rotada 10+ büyük dönüm noktası.' },
      { q: 'Boğaz sightseeing gündüz mü gece mi daha iyi?', a: 'Farklı deneyimler. Gündüz: mimari detayların daha net görünümü, fotoğraflar için daha parlak. Gece: dramatik aydınlatma, gizemli atmosfer, suda daha az tekne. Çoğu gezgin gece turunu tercih eder çünkü dönüm noktaları daha büyüleyici görünür — ve yemek + şov bunu tam bir akşam yapar.' },
      { q: 'Tekne dönüm noktalarında fotoğraf için duruyor mu?', a: 'Sürekli bir tur — duraklar yok (inme yok). Tekne her dönüm noktasının yakınından geçer, ekip ne gördüğünüzü açıklar, fotoğraflar için açık güverteye geçebilirsiniz. Kuyruk yok, yürüme yok, zamanlama stresi yok — sadece sorunsuz bir 3 saatlik fotoğraf fırsatı.' },
      { q: 'Ekip sightseeing sırasında yorum veriyor mu?', a: 'Evet — İngilizce konuşan ekip her büyük dönüm noktasından geçerken kısa yorum sağlar (tarih, mimari, eğlenceli gerçekler). Rehberli bir ders değil, daha çok yemek yerken arkadaşça bir açıklama gibi. Daha derin tarih için gündüz İstanbul yürüyüş turuyla eşleştirmeyi öneririz.' },
      { q: 'Boğaz sightseeing hop-on feribottan nasıl farklı?', a: 'Hop-on feribotları (Şehir Hatları halka tekneleri): €5-10, 1-2 saat, temel, yemek yok, kalabalık. Bizim tur: €{p.dinnerStd}, 3 saat, tam yemek, canlı şov, özel masa, İngilizce yorum. Konforlu ciddi sightseeing için akşam turu daha iyi. Hızlı bütçe geçişi için halka feribotu işe yarar.' },
      { q: 'Tekneden dönüm noktalarını fotoğraflayabilir miyim?', a: 'Evet — mutlaka. Açık güverte fotoğrafçılık için mükemmel noktalara sahiptir. Dönüm noktaları teknenin 100-200 metre yakınından geçer. Akıllı telefon fotoğrafları harika çıkar; DSLR/mirrorless kullanıcıları özellikle erken akşamın altın-mavi saat geçişinde muhteşem çekimler alabilir.' }
    ],
    cta: {
      primary: 'Sightseeing Turu Rezerve Et · Teknede Ödeme',
      secondary: '10+ dönüm noktası · Yemek + şov · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  }

};
