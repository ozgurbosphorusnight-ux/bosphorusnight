/**
 * Turkish translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Boğaz Yemekli Tur €{p.dinnerStd}\'den — İstanbul Gece Turu + Şov',
      description: '3 saatlik Boğaz yemekli turu: çok çeşitli Türk menüsü ve canlı halk oyunları şovu. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme.'
    },
    hero: {
      h1: 'İstanbul Boğazı\'nda Yemekli Boğaz Turu',
      subtitle: 'Üç saatlik canlı eğlence, çok çeşitli Türk ziyafeti ve Boğaz\'ın gece en etkileyici manzarası.',
      badge: '4.8★ · 11.317 yorum'
    },
    intro: [
      '**Boğaz yemekli turu**, İstanbul\'un en ikonik akşam deneyimidir. 20:00\'de Kabataş İskelesi\'nden başlayan turumuz, aydınlatılmış Boğaz ve Fatih Sultan Mehmet köprülerinin altından süzülürken çok çeşitli Türk yemekleri, canlı halk oyunları, oryantal dans ve 23:00\'e kadar güverteyi canlı tutan DJ seti sunar.',
      'İstanbul\'un gece manzarasını dolduran sıradan tur teknelerinin aksine, **Boğaz yemekli turumuz** TÜRSAB lisanslıdır (A-17672) ve 11.317\'den fazla gezgin tarafından 4.8★ olarak değerlendirilmiştir. Grubu küçük, hizmeti sıcak tutarız — ve teknede ödediğiniz için önceden rezervasyon yapmanın hiçbir riski yoktur.',
      'Yıldönümü mü kutluyorsunuz, aileniz için premium bir İstanbul akşamı mı arıyorsunuz, yoksa şehrin en fotojenik gün batımı-gece geçişini mi istiyorsunuz — İstanbul sakinlerinin ilk önerdiği yemekli tur bu.'
    ],
    highlights: [
      { title: 'Çok çeşitli Türk ziyafeti', desc: '10 çeşit meze, sıcak başlangıç (paçanga böreği), ana yemek seçimi (somon / çipura / tavuk / köfte / vejetaryen), dondurmalı pasta tatlı, sınırsız meşrubat.' },
      { title: 'Canlı halk oyunları, oryantal dans ve DJ', desc: 'Sekiz gösteri: Oba Dombra, Mevlana sema, Sarı Gelin, Azerbaycan potpurisi, klasik oryantal dans, Anadolu potpurisi ve Gürcü-Kafkas bıçak dansı — ardından canlı saksafon ve tur boyunca DJ seti.' },
      { title: 'Tam Boğaz gece rotası', desc: 'Kabataş → Dolmabahçe → Çırağan Sarayı → Ortaköy Camii → Bebek → Rumeli Hisarı → FSM Köprüsü → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: '€{p.dinnerStd}/kişi\'den — teknede ödeme', desc: 'Yemekli tur €{p.dinnerStd} (eski €{p.dinnerStdOriginal}). Ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' }
    ],
    faq: [
      { q: 'Boğaz yemekli turu ne zaman başlıyor?', a: 'Biniş Kabataş İskelesi\'nde 20:00\'de başlıyor. Tekne 21:00\'de hareket ediyor ve yaklaşık 00:00\'da dönüyor. Yerinize oturmak ve rahat etmek için 15-20 dakika erken gelmenizi öneririz.' },
      { q: 'Boğaz yemekli turu ne kadar?', a: 'Yemekli tur €{p.dinnerStd}/kişi (normal fiyat €{p.dinnerStdOriginal}). 0-3 yaş ücretsiz, 4-9 yaş %50 indirimli. Ödeme teknede yapılır — ön ödeme yoktur.' },
      { q: 'Alkol yemekli tura dahil mi?', a: 'Sınırsız meşrubat (su, kola, meyve suyu) fiyata dahildir. Alkol paketi opsiyoneldir: 2 bardak (şarap, bira, rakı, vodka veya cin) +€{p.alcohol2}/kişi. Ek içecekler ve ithal içkiler teknede ayrı fiyatlandırılır.' },
      { q: 'Otel transferi var mı?', a: 'Evet — alma ve bırakma hizmeti +€{p.transfer}/kişi\'dir. Hizmet bölgeleri: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Sütlüce ve Şişli. Rezervasyon sihirbazında seçebilirsiniz.' },
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
      title: 'Çocuklu Boğaz Turu — Aile Dostu Yemekli Tur, €{p.dinnerStd}/yetişkin\'den',
      description: 'Aile dostu Boğaz yemekli turu. 0-3 yaş ücretsiz, 4-9 yarı fiyat. Güvenli iç salon, çocuk dostu menü. €{p.dinnerStd}/yetişkin\'den. Ücretsiz iptal, teknede ödeme.'
    },
    hero: {
      h1: 'Çocuklu Boğaz Turu',
      subtitle: 'Çocuklu aileler için tasarlanmış aile dostu bir Boğaz akşamı — yemek, eğlence ve güvenli, rahat bir atmosfer.',
      badge: 'Aile Dostu · Helal · 0-3 Yaş Ücretsiz'
    },
    intro: [
      '**Çocuklu Boğaz turu**, İstanbul\'un en aile dostu akşam seçeneğidir. Her gece düzinelerce aileyi ağırlıyoruz — her detayı çocukları rahat ettirmek için tasarladık: küçüklerin sıcak kalması için kapalı oturma, erişilebilir çocuk dostu menü (sade ızgara tavuk, makarna, sınırsız meşrubat) ve geç saat huysuzluklarından kaçınmak için erken biniş.',
      'Sadece yetişkin partisi olan teknelerin aksine, **aileler için Boğaz yemekli turumuz** sıcak ve kapsayıcı kalır. **0-3 yaş çocuklar ücretsiz** (transfer dahil), 4-9 yaş **%50 indirimli**, 10+ yaş tam fiyat — gizli ücret yok. Canlı halk oyunları, oryantal dans ve sema gösterisi nazik aile eğlencesidir, gece kulübü değil.',
      'İstanbul\'a yeni yürümeye başlayan çocuğunuzla uzun bir hafta sonu için mi geliyorsunuz, yoksa gençleri ilk Avrupa gezisine mi getiriyorsunuz — bu, İstanbul ailelerinin önerdiği turdur. Güvenli, helal sertifikalı, TÜRSAB lisanslı ve 11.317+ gezgin tarafından 4.8★.'
    ],
    highlights: [
      { title: '0-3 yaş tamamen ücretsiz', desc: 'Bebek ve yürümeye başlayanlara ücret yok. 4-9 yaş yetişkin fiyatının %50\'si. 9 yaştan itibaren tam misafir. Şeffaf, sürpriz yok.' },
      { title: 'Kapalı iç oturma alanı', desc: 'Soğuk aylarda tam kapalı ve ısıtmalı. Çocuklar sıcak kalır, rüzgardan korunur. Hava güzel olduğunda açık güverte de mevcut — seçim sizin.' },
      { title: 'Talep üzerine çocuk menüsü', desc: 'Sade ızgara tavuk, makarna, ekmek ve sebze — ekstra ücret yok. Sınırsız meşrubat (kola, meyve suyu, su). Önceden bildirin — küçükler için sürpriz acılı meze yok.' },
      { title: 'Aile güvenli eğlence', desc: 'Sema gösterisi (çocuklar için büyüleyici), Oba Dombra ve Anadolu, Azerbaycan ile Kafkasya halk oyunları — gösterişli bıçak dansı dahil — ayrıca canlı Türk müziği ve saksafonlu DJ seti. Hepsi aile dostu — yetişkin içerik yok. Çocuklar sıklıkla dansa katılır.' }
    ],
    faq: [
      { q: 'Boğaz turu küçük çocuklar için güvenli mi?', a: 'Evet — teknemiz TÜRSAB lisanslı, güvenli pencereli kapalı iç oturma alanına sahip, her boyut için can yelekleri mevcut ve profesyonel ekip ailelerle deneyimli. Yürümeye başlayanlar için iç güverteyi, 6+ yaş için açık güverteyi öneririz.' },
      { q: 'Boğaz turunda çocuk fiyatı nedir?', a: 'Çocuklar **0-3 yaş: ÜCRETSİZ** (ücret yok, gizli ücret yok). **4-9 yaş: %50 indirim** yetişkin fiyatından — yani Standart turda €{p.dinnerStd}/2 = çocuk başına €12. **10+ yaş: tam yetişkin fiyatı.** Otel transferi 0-3 yaş için ücretsiz, 4+ için standart (€{p.transfer}/kişi).' },
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
      title: 'Romantik Boğaz Turu €{p.dinnerStd}\'den — 2 Kişilik Mum Işığında Akşam',
      description: 'Romantik Boğaz turu: mum ışığında masa, güller, aydınlatılmış köprüler altında çok çeşitli akşam yemeği. €{p.dinnerStd}/kişi\'den.'
    },
    hero: {
      h1: 'Romantik Boğaz Turu',
      subtitle: 'Mumlu akşam yemeği, güllerle süslü masa, aydınlatılmış köprüler ve İstanbul\'un en ikonik gece gökyüzü altında sadece ikinizin paylaşacağı özel bir an.',
      badge: 'Yıldönümü · Balayı · Özel Gece'
    },
    intro: [
      '**Romantik Boğaz turu**, İstanbul\'un çiftler için en ikonik akşamıdır. Güneş Dolmabahçe Sarayı\'nın üzerinden batar ve Boğaz Köprüsü renkleriyle aydınlanırken, siz ve partneriniz özel bir masada çok çeşitli Türk ziyafetini paylaşıyorsunuz — mumlar, taze çiçekler ve güvertede süzülen canlı keman ile.',
      'Romantik masa düzenimiz (+€{p.romantic}/masa) herhangi bir yeri özel bir ana dönüştürür: kırmızı güller, parlayan mumlar, el yazısı bir hoşgeldiniz notu. Yıldızlar altında şarap için 2 kadehlik alkol paketini ekleyin (+€{p.alcohol2}/kişi) veya dahil olan meşrubatlarla sade tutun. Her iki durumda da ekip sessizce gerisini halleder.',
      'Yıldönümü kutluyor olun, partnerinize sürpriz planlıyor veya sadece Avrupa\'nın en romantik şehrinde unutulmaz bir gece yaşamak istiyorsanız — İstanbul çiftlerinin ilk tercih ettiği tur budur. 4.8★ puan, TÜRSAB lisanslı ve — en önemlisi — teknede ödeme, yani sadece akşamın kendisine söz veriyorsunuz.'
    ],
    highlights: [
      { title: 'Mumlu romantik masa', desc: 'Romantik masa düzenini +€{p.romantic}/masa ile ekleyin: taze kırmızı güller, parlayan mumlar, masa örtüsünde gül yaprakları ve el yazısı kart. Fotoğraflar dahil.' },
      { title: 'En iyi gün batımı-gece geçişi masaları', desc: 'Pencere kenarı masaları çiftlere ayrılır. Boğaz Köprüsü\'nün aydınlanışını, Kız Kulesi\'nin ışıltısını ve Ortaköy Camii\'nin aydınlanmasını özel masanızdan izleyin.' },
      { title: 'Canlı keman ve samimi atmosfer', desc: 'Yemek sırasında canlı keman ve akustik Türk müziği yavaş, romantik bir atmosfer yaratır. Sonrasında DJ devreye girer ve çiftler açık güvertedeki ışıklar altında dans eder.' },
      { title: 'Şarap, şampanya, premium eşleştirmeler', desc: '2 kadeh alkol ekleyin — yerli şarap, bira, rakı (+€{p.alcohol2}/kişi). İthal şampanya ve premium eşleştirmeler talep üzerine — rezervasyonda sorun.' }
    ],
    faq: [
      { q: 'Bu turu romantik yapan ne?', a: 'Özel masa, mumlu düzen (opsiyonel +€{p.romantic}), çok çeşitli Türk yemeği, canlı keman ve akustik müzik, başınızın üzerinden geçen aydınlatılmış Boğaz köprülerinin kombinasyonu. Deneyimi çiftler için tasarlıyoruz — erken sessiz atmosfer, sonra enerjik DJ ve dans. Ritmi siz seçiyorsunuz.' },
      { q: 'Partnerim için sürpriz düzenleyebilir misiniz — doğum günü, yıldönümü, evlilik teklifi?', a: 'Evet — rezervasyonda bildirin. Doğum günü pastası (ücretsiz), özel masa düzenlemesi, sizin dilinizde el yazısı kart veya doğru anda masaya bir şey getirmek için personelimizle koordine edebiliriz. Evlilik teklifleri için gizlice planlayabilmemiz için WhatsApp\'tan direkt yazmanızı öneririz.' },
      { q: '2 kişi için romantik tur ne kadar?', a: '2 kişi için yemekli tur: 2 × €{p.dinnerStd} = €48.60. Romantik düzen ekleyin +€{p.romantic} = €63.60. Ön ödeme yok — teknede ödeme. 2 kadehlik alkol paketi için 2 × €{p.alcohol2} = €20 daha.' },
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
      title: 'Helal Boğaz Yemekli Tur €{p.dinnerStd}\'den — Canlı Şov + Gece Turu',
      description: '3 saatlik Boğaz yemekli turu: canlı halk oyunları şovu, aydınlatılmış köprüler, panoramik Boğaz gece manzaraları. Helal menü talep üzerine.'
    },
    hero: {
      h1: 'İstanbul\'da Helal Boğaz Turu',
      subtitle: '%100 helal sertifikalı menü, alkol her zaman opsiyonel, aile dostu eğlence ve Müslüman gezginler için saygılı bir atmosfer — Boğaz akşamı, doğru yapılmış hali.',
      badge: '%100 Helal · Aile Dostu · Müslüman Sahibi'
    },
    intro: [
      '**Helal Boğaz turu**, İstanbul\'un Müslüman gezginler için en saygın yemekli turudur. Teknemizde servis edilen her et — somon, çipura, tavuk, kuzu köfte, dana bonfile, antrikot — onaylı tedarikçilerden **helal sertifikalıdır**. Aynı menüyü her misafire servis ediyoruz; ayrı "helal bölümü" yok çünkü tüm tekne varsayılan olarak helal.',
      'Alkol **opsiyonel bir eklentidir** — misafirlere asla dayatılmaz ve oturma düzeni alkolsüz masa tercih edenleri doğal olarak ayırır. 2 bardaklık alkol paketi (+€{p.alcohol2}/kişi) isteyen misafirler için orada, ama dahil olan sınırsız meşrubatlar (su, kola, meyve suyu) çoğu Müslüman aile için yeterli. Ekibimiz tercihlerinizi varsayım yapmadan saygılı olacak şekilde eğitilmiştir.',
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
      { q: 'Bu turda diğer misafirler alkol içiyor mu?', a: 'Bazı misafirler opsiyonel 2 bardaklık alkol paketini ekliyor (+€{p.alcohol2}/kişi). Masalar doğal olarak ayrıdır — alkolsüz bir bölüm talep edebilirsiniz. Bir misafir tarafından özel olarak sipariş edilmedikçe ekip alkol getirmez. Meşrubatlar (sınırsız) herkes için dahildir.' },
      { q: 'Bu tur çocuklu Müslüman aileler için uygun mu?', a: 'Evet — İstanbul\'un en aile saygın turlarından biridir. Eğlence mütevazı (halk oyunları, sema, Türk müziği), 3 yaş altı çocuklar ücretsiz, 4-9 yaş %50 indirim. Gece kulübü atmosferi yok. Körfez bölgesi, Endonezya, Malezya, Pakistan ve Fas\'tan aileler düzenli olarak bu turu rezerve eder.' },
      { q: 'Teknede namaz kılabilir miyim?', a: 'Teknede özel bir namaz odası yok, ama 20:00 binişten önce namaz kılmanızı öneririz (akşam namazı genellikle bu pencereye denk gelir). Kabataş İskelesi\'nde namaz olanakları var. 21:00-00:00 seyir sırasında namaz kılmanız gerekirse (yatsı), ekiple konuşun — güvertede sessiz bir köşe ayarlayabiliriz.' },
      { q: '4 kişilik bir Müslüman aile (2 yetişkin, 2 çocuk) için fiyatlar nedir?', a: 'Yemekli tur: 2 × €{p.dinnerStd} + 2 × €19.30 (4-9 yaş €5 indirim) = €87.20. Çocuklar 3 yaş altıysa ücretsiz: 2 × €{p.dinnerStd} = €48.60. Yetişkin başına €5 otel transferi ekleyin. Toplam: 4 kişilik aile için €48.60–€92.90, ön ödeme yok, teknede ödeme.' },
      { q: 'Otel transferi de helal mi?', a: 'Otel transferi sadece bir araba yolculuğu — yemek veya içecek söz konusu değil, bu yüzden helal endişesi yok. Şoförlerimiz profesyonel, saygılı ve dakiktir. Transfer alanları Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli ve Müslüman gezginlerin genellikle konakladığı diğer 8 merkezi bölgeyi kapsar.' }
    ],
    cta: {
      primary: 'Helal Tur Rezerve Et · Teknede Ödeme',
      secondary: '2 saat öncesine ücretsiz iptal · Ön ödeme yok · Helal sertifikalı',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Boğaz VIP Deneyimi €{p.dinnerStd}\'den — Boğaz\'da Premium Akşam Yemeği',
      description: 'VIP seviyesinde Boğaz yemekli turu: eksiksiz Türk menüsü, canlı gösteriler, sahne yakını masa seçeneği, özenli servis. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Teknede ödeme, ücretsiz iptal.'
    },
    hero: {
      h1: 'Boğaz\'da VIP Deneyim — Akşam Yemekli Tur',
      subtitle: 'Tek menü, tek standart: herkese premium. AMOR teknesinde 3 saatlik Boğaz akşamı — zengin Türk menüsü, canlı sahne gösterileri ve isteyene sahne yakını özel masa. Ayrı bir "VIP sınıfı" satmıyoruz; en iyi halini her misafire sunuyoruz.',
      badge: '%40 İNDİRİM · Tek Menü, Premium Standart · Teknede Ödeme'
    },
    intro: [
      'Birçok Boğaz teknesi misafirlerini "Standart" ve "VIP" diye ikiye ayırır. Biz ayırmıyoruz. **AMOR**\'da tek bir akşam yemeği menüsü var ve herkes için aynı özenle hazırlanıyor: 10 çeşit meze, sıcak başlangıç, seçmeli ana yemek (somon, levrek, tavuk veya köfte), dondurmalı pasta ve sınırsız meşrubat. Sekiz bölümlük eğlence programı da dahil — Oba Dombra, sema gösterisi, Anadolu ve Azerbaycan halk oyunları, oryantal, Kafkas bıçak dansı, canlı müzik ve saksafonlu DJ finali — hepsi €{p.dinnerStd}/kişi fiyatın içinde.',
      'VIP hissi masanızla başlar. Sahneye ve manzaraya en yakın masalardan birini isterseniz **sahne yakını özel masa** eklentisiyle (+€{p.romantic}/masa) yeriniz önceden ayrılır — semazeni, halk oyunlarını ve aydınlatılmış Boğaz\'ı en iyi açıdan izlersiniz. Çiftlerin, kutlamaların ve fotoğraf sevenlerin favorisi.',
      'AMOR 42 metrelik, 3 katlı, 400 misafir kapasiteli, kışın ısıtmalı yazın klimalı modern bir tekne. 3 saatlik rota Kabataş\'tan başlar (giriş 20:00\'den itibaren, kalkış 21:00, dönüş 00:00): Dolmabahçe, Ortaköy Camii, Rumeli Hisarı ve Boğaz Köprüsü ışıkları. TÜRSAB lisanslı (A-17672), Google\'da 4.9★. Ön ödeme yok — teknede ödersiniz, kalkışa 2 saat kalaya kadar ücretsiz iptal.'
    ],
    highlights: [
      { title: 'Tek menü, premium standart', desc: 'Ayrı bir "VIP menü" yok — çünkü tek menümüz zaten o seviyede. 10 çeşit meze, sıcak başlangıç, 4 seçenekli ana yemek, tatlı ve sınırsız meşrubat her masaya aynı özenle servis edilir.' },
      { title: 'Sahne yakını özel masa (+€{p.romantic}/masa)', desc: 'Semazen, halk oyunları ve oryantal gösteriye en yakın masalar önceden rezerve edilir. Sahneye ve Boğaz\'a hâkim konum. Masanız size özeldir, paylaşımlı değildir.' },
      { title: 'Özenli masa servisi', desc: 'Garson ekibimiz masanıza servis yapar: ikramlar, menü yönlendirmesi, içecek eklentileri, özel istekler. Kalabalıkta sıra beklemezsiniz.' },
      { title: '%40 İNDİRİM — eski €{p.dinnerStdOriginal}, şimdi €{p.dinnerStd}', desc: 'Doğrudan rezervasyon fiyatı: €{p.dinnerStd}/kişi (liste fiyatı €{p.dinnerStdOriginal}). Teknede ödeme, ön ödeme yok. Kalkışa 2 saat kalaya kadar ücretsiz iptal.' }
    ],
    faq: [
      { q: '"VIP paketi" mi satıyorsunuz? Standart ile farkı ne?', a: 'Ayrı bir VIP paketi satmıyoruz — tek menümüz var ve herkese aynı premium standartta servis ediliyor. "VIP deneyim" dediğimiz şey akşamınızı kişiselleştirmek: sahne yakını özel masa eklentisi (+€{p.romantic}/masa), özenli masa servisi ve isteğe bağlı içecek eklentileri. Tur 3 saat, fiyat €{p.dinnerStd}/kişi.' },
      { q: '€{p.dinnerStd} gerçekten %40 indirim mi?', a: 'Evet — liste fiyatımız €{p.dinnerStdOriginal}/kişi. €{p.dinnerStd}, aracı komisyonlarını devre dışı bırakan doğrudan rezervasyon fiyatıdır. Ödemeyi teknede yaparsınız, ön ödeme yoktur.' },
      { q: 'Menüde ne var?', a: '10 çeşit meze, sıcak başlangıç, seçmeli ana yemek (somon, levrek, tavuk veya köfte), dondurmalı pasta ve sınırsız meşrubat. Sekiz bölümlük eğlence programı dahil: Oba Dombra, sema gösterisi, Anadolu ve Azerbaycan halk oyunları, oryantal, Kafkas bıçak dansı, canlı müzik ve saksafonlu DJ finali.' },
      { q: 'Alkol dahil mi?', a: 'Hayır — alkol ayrı eklentidir: kişi başı 2 kadeh yerli şarap veya bira +€{p.alcohol2}. Sınırsız meşrubat ücretsiz dahildir. Premium ithal içkiler teknede ayrıca fiyatlandırılır.' },
      { q: 'Sahne yakını masayı nasıl garantilerim?', a: 'Rezervasyon sırasında "sahne yakını özel masa" eklentisini (+€{p.romantic}/masa) seçmeniz yeterli — masanız isminize ayrılır. En iyi konumlar ön rezervasyonlarla dolduğu için tur gününden önce eklemenizi öneririz.' },
      { q: 'Tekne nasıl bir tekne?', a: 'AMOR — 42 metre, 3 kat, 400 misafir kapasiteli, kışın ısıtmalı yazın klimalı modern bir yolcu teknesi. Kalkış Kabataş İskelesi\'nden: giriş 20:00, kalkış 21:00, dönüş 00:00. Rota: Dolmabahçe, Ortaköy, Rumeli Hisarı, Beylerbeyi ve Boğaz Köprüsü ışıkları.' }
    ],
    cta: {
      primary: 'Yerinizi Ayırtın · Teknede Ödeme',
      secondary: 'Eski €{p.dinnerStdOriginal}, şimdi €{p.dinnerStd} · 2 saat öncesine kadar ücretsiz iptal',
      tertiary: 'Sahne yakını özel masa ekleyin (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Özel Boğaz Turu — İstanbul\'da Tekne Kiralama (25+ kişi)',
      description: 'Özel Boğaz turu kiralama: gruplar, düğünler, kurumsal etkinlikler için. Özel tekne, özel menü, esnek süre. Ücretsiz iptal. Özel teklif için WhatsApp\'tan yazın.'
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
      { q: 'Özel Boğaz turu ne kadar?', a: '25+ grup için, genellikle €{p.dinnerStd}/kişi + grup büyüklüğüne, tarihe ve süreye bağlı tekne kiralama ücreti. Grup büyüklüğünüz, tarihiniz ve gereksinimleriniz ile WhatsApp\'tan yazın — 1 saat içinde fiyat veririz. Çoğu etkinlik €2.000-€6.000 toplam aralığa girer.' },
      { q: 'Özel Boğaz turu için minimum grup büyüklüğü nedir?', a: 'Teknik olarak 25 misafir özel turu ekonomik olarak uygulanabilir kılar. Daha küçük gruplar (10-24) yine de özel kiralayabilir ama ~25 kişiye eşdeğer bir minimum ücret öderler. Gerçekten küçük gruplar için (2-10), normal yemekli turu düşünün — masanız zaten özel, sadece tekne paylaşılıyor.' },
      { q: 'Boğaz turunda düğün yapabilir miyim?', a: 'Evet — yılda 10-15 düğün resepsiyonu düzenliyoruz. Oturarak yemek için 80\'e kadar, kokteyl tarzı için 100\'e kadar kapasite. Fotoğrafçınız, düğün planlayıcınız, grubunuz veya şefiniz ile koordine ederiz. Özel pasta servisi, ilk dans pisti, şampanya kadehi düzenlenebilir. Düğün fiyatı için WhatsApp\'tan yazın.' },
      { q: 'Kurumsal etkinlikler ve ekip yemekleri için ne olacak?', a: 'Kurumsal özel turlar en yaygın rezervasyonlarımız. Şirket yemeği, müşteri ağırlama, ürün lansmanı, ekip kutlaması — hepsi işe yarar. KDV dökümü ile fatura sağlayabilir, ekibiniz için otel transferleri düzenleyebilir ve talep üzerine markalı malzemeleri (masa aksesuarları, tabela) koordine edebiliriz.' },
      { q: 'Eğlenceniz yerine canlı grup veya DJ getirebilir miyim?', a: 'Evet — kendi canlı grubunuzu, DJ\'inizi, fotoğrafçınızı getirebilirsiniz. Veya standart olanımızı (sema, halk oyuncular, oryantal, DJ) koruyun ve üstüne kendinizinkini ekleyin. Tekne PA sistemine ve dans pistine sahiptir. Ses kontrollerini koordine edebilmemiz için önceden bildirin.' },
      { q: 'Özel Boğaz turu fiyatı nasıl talep ederim?', a: 'En kolayı: +90 532 244 29 22\'den (1) grup büyüklüğünüz, (2) tercih ettiğiniz tarih, (3) sebep (düğün, kurumsal, doğum günü), (4) özel gereksinimler ile WhatsApp\'tan yazın. İş saatlerinde 1 saat, gece 12 saat içinde yanıt veririz. Detayları görüşmek için görüntülü arama da ayarlayabiliriz.' }
    ],
    cta: {
      primary: 'Özel Fiyat İçin WhatsApp',
      secondary: 'Özel menü, grup 25-80, esnek süre · 1 saat altında yanıt',
      tertiary: 'Yemekli Tur Seçeneği (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Çiftler İçin Boğaz Turu €{p.dinnerStd}\'den — İstanbul Randevu Gecesi',
      description: 'Çiftler için Boğaz yemekli turu. Özel masa, aydınlatılmış köprüler, romantik kurulum opsiyonu. €{p.dinnerStd}/kişi\'den. Ücretsiz iptal, teknede ödeme.'
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
      { title: 'Özel geceler için eklentiler', desc: 'Romantik masa düzeni (mumlar, güller): +€{p.romantic}. 2 kadehlik alkol paketi (şarap, rakı): +€{p.alcohol2}/kişi. Otel transferi (gidiş-dönüş): +€{p.transfer}/kişi. Akşamınıza uyanı seçin.' }
    ],
    faq: [
      { q: 'Bu Boğaz turu özel bir durum değil, sıradan bir randevu gecesi için uygun mu?', a: 'Evet — çiftlerimizin çoğu belirli bir şey kutlamıyor, sadece harika bir randevu gecesi geçiriyor. Atmosfer aşırı olmadan sıcak ve hoş. Ekstra istiyorsanız romantik masa düzeni (+€{p.romantic}) ekleyebilir veya sadece standart akşamın tadını çıkarabilirsiniz.' },
      { q: '2 kişi için Boğaz turu ne kadar?', a: '2 kişi için yemekli tur: 2 × €{p.dinnerStd} = €48.60. İkisi için otel transferi ekleyin: +€{p.transfer}×2 = €10. İkisi için 2 kadehlik alkol paketi ekleyin: +€{p.alcohol2}×2 = €20. Ön ödeme yok — teknede ödeme.' },
      { q: 'Çiftler kendi şarap veya şampanyalarını getirebilir mi?', a: 'Dışarıdan alkole izin vermiyoruz (işletme lisans sebebi). Ama yerli şaraplı 2 kadehlik alkol paketimiz (+€{p.alcohol2}/kişi) var ve ücret karşılığında premium ithal şaraplar veya şampanya ayarlayabiliriz — rezervasyonda sorun. Prosecco, Chianti ve Cabernet popüler premium istekler.' },
      { q: 'Alkol içmiyorsak sorun olur mu — sıra dışı mıyız?', a: 'Hiç değil — birçok çift alkolü tamamen atlıyor, ya helal sebeplerden ya da sadece tercihen. Sınırsız meşrubatlar (su, meyve suyu, kola) dahil. Masanız alkolsüzse kimse iki kere bakmaz. Suudi Arabistan, İran ve Endonezya\'dan birçok Müslüman çift bu turu rezerve eder.' },
      { q: 'Çiftler için Boğaz turu en iyi ne zaman — gün batımı mı gece mi?', a: 'Tur her akşam 21:00\'de kalkar — ve yazın (Mayıs-Ağustos) bu tek kalkış ikisini de kapsar: 20:00\'den itibaren altın saatte biniş, tam kalkış civarında gün batımı, ardından aydınlatılmış köprüler ve ışıl ışıl saraylar. Kışın ise saf bir gece ışıkları turudur. Her iki durumda da tek rezervasyonla çiftler Boğaz\'ın en ikonik halini yaşar.' },
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
      title: 'Boğaz Gün Batımı ve Yemekli Tur €{p.dinnerStd}\'den',
      description: 'Boğaz\'da gün batımını yakalayın, sonra aydınlatılmış köprülerin altında yemeğinizi yiyin. Kabataş\'ta 20:00 biniş, 21:00 kalkış. 3 saat, tam yemek. Teknede ödeme.'
    },
    hero: {
      h1: 'Boğaz Gün Batımı ve Yemekli Tur',
      subtitle: 'Gökyüzü minarelerin üzerinde altına dönerken 20:00\'de binin — sonra Dolmabahçe, Ortaköy Camii ve Boğaz Köprüsü gece için aydınlanırken su üstünde yemeğinizin tadını çıkarın.',
      badge: 'Biniş 20:00 · Kalkış 21:00 · Gün Batımından Şehir Işıklarına'
    },
    intro: [
      'İstanbul\'da **Boğaz gün batımı turu** deneyiminin özü tek bir şeydir: geçiş anı. Turumuz Kabataş İskelesi\'nde 20:00\'den itibaren biniş alır — Mayıs\'tan Ağustos\'a uzanan uzun akşamlarda, siz güvertede yerinizi alırken altın saat gözlerinizin önünde açılır. Güneş, Avrupa yakası minarelerinin üzerinde tam 21:00 kalkışı civarında batar; yani onu sudan izlersiniz: altına boyanmış Dolmabahçe Sarayı, parlayan gökyüzüne siluet olmuş Ortaköy Camii.',
      '**Gün batımından geceye Boğaz turumuz** tam bir Türk akşam yemeği içerir — 10 çeşit meze, sıcak başlangıç, ana yemek seçimi, tatlı — şehir ışıklarını yakarken servis edilir. Tatlı geldiğinde, karanlık suya yansıyan 30 milyon ışığıyla aydınlatılmış Boğaz Köprüsü\'nün altından geçiyor olursunuz. Alacakaranlıktan tam geceye geçiş, hepsi tek bir 3 saatlik turun içinde — bütün mesele bu.',
      'Son ışığı kovalayan bir fotoğrafçı, o "İstanbul anı fotoğrafı"nın peşindeki bir çift veya su üstünde klasik bir akşam isteyen ilk kez gelen bir gezgin olun — bu, yerlilerin ziyaretçilere önerdiği **Boğaz gün batımı yemekli turu**\'dur. €{p.dinnerStd}/kişi\'den, 4.8★ puan, TÜRSAB lisanslı, teknede ödeme — ön ödeme yok.'
    ],
    highlights: [
      { title: 'Yaz gün batımları tam kalkış saatinde', desc: 'Mayıs\'tan Ağustos\'a İstanbul\'da güneş yaklaşık 20:15–20:45 arasında batar — 20:00 biniş size güvertede altın saati verir, 21:00 kalkış ise sizi gün batımının tam ortasında suya çıkarır. Kamera hazır olsun — o kare bu.' },
      { title: 'Mavi saatten tam geceye', desc: 'Sadece gün batımı değil — tur alacakaranlıktan geçip tamamen aydınlatılmış Boğaz\'a açılır. Altın ışık, mavi saat, sonra karanlık suda 30 milyon köprü ışığı: tek akşamda üç ışık evresi.' },
      { title: 'Tur boyunca tam akşam yemeği', desc: '10 çeşit Türk mezesi, sıcak başlangıç, ana yemek (somon, çipura, tavuk, köfte, vejetaryen), dondurmalı pasta, sınırsız meşrubat — şehir ışıkları yanarken servis edilir.' },
      { title: 'Dolmabahçe, Ortaköy, Boğaz Köprüsü — hepsi parlıyor', desc: 'Rota, ışıkları yanarken Dolmabahçe Sarayı, Ortaköy Camii, Boğaz Köprüsü, Rumeli Hisarı ve Beylerbeyi Sarayı\'nın önünden geçer. Her simge yapı en iyi ışığında.' }
    ],
    faq: [
      { q: 'Boğaz gün batımı turu saat kaçta kalkıyor?', a: 'Biniş Kabataş İskelesi\'nde 20:00\'de başlar, tekne 21:00\'de kalkar ve yaklaşık 00:00\'da döner. Yazın (Mayıs–Ağustos) güneş yaklaşık 20:15–20:45 arasında batar — altın saat siz binerken yaşanır, gün batımının kendisi ise tam kalkış civarında sudan izlenir.' },
      { q: 'Boğaz gün batımı turu yemekli turla aynı mı?', a: 'Evet — tek bir tur var. Her gün 21:00\'de tek kalkış yapılır; teknede tam akşam yemeği ve canlı şovlar vardır. Uzun yaz akşamlarında bu tur aynı zamanda bir gün batımı turudur: altın saatte biner, mavi saatten geçerek aydınlatılmış geceye açılırsınız. Kışın ise aynı tur saf bir gece ışıkları deneyimine dönüşür.' },
      { q: 'Boğaz gün batımı turunun fiyatı nedir?', a: 'Tur €{p.dinnerStd}/kişi\'den başlar (3 saat, tam yemek, canlı eğlence). Teknede ödeme — ön ödeme yok. 0-3 yaş ücretsiz, 4-9 yaş €5 indirim.' },
      { q: 'Boğaz gün batımı turu için yılın en iyi zamanı ne zaman?', a: 'Mayıs\'tan Ağustos\'a. İstanbul\'un geç gün batımları (20:15–20:45) 21:00 kalkışıyla örtüşür; böylece altın saati, gün batımını ve aydınlatılmış köprüleri tek akşamda yaşarsınız. Sonbahar ve kışta güneş daha erken batar ve aynı tur tam bir gece ışıkları deneyimine dönüşür — aynı derecede fotojenik, farklı bir atmosfer.' },
      { q: 'Gün batımı turuna ne getirmeliyim?', a: 'Akıllı telefon veya kamera — altın saat ve aydınlatılmış köprüler adeta fotoğraf ister. İnce bir ceket: gün batımından sonra güvertede rüzgar artar. Smart-casual kıyafet — yemek yiyorsunuz ama katı bir kıyafet kuralı yok.' },
      { q: 'Bu turda aydınlatılmış köprüleri gece görüyor muyum?', a: 'Evet — akşamın ikinci yarısı tam da bu. Tur 21:00–00:00 arasında sürer; gün batımı ve mavi saatten sonra tamamen aydınlatılmış Boğaz Köprüsü\'nün altından geçer, ışıklı sarayların ve Kız Kulesi\'nin önünden süzülür ve 00:00 civarında Kabataş\'a dönersiniz.' },
      { q: 'İstanbul\'da güneş saat kaçta batıyor?', a: 'Yazın (Haziran–Temmuz) İstanbul\'da gün batımı yaklaşık 20:30–20:45 civarındadır. Kışın ise yaklaşık 16:30–17:00. Gün batımı ve gece deneyimini bir arada isteyenler için Bosphorus Night\'ın Kabataş\'tan kalkan 21:00 yemekli turu, yazın geç altın saati ve mavi saati, yıl boyunca ise aydınlatılmış simge yapıları yakalar.' },
      { q: 'Boğaz gün batımı turuna değer mi?', a: 'Evet — Boğaz Köprüsü üzerinde gün batımı, İstanbul\'un imza manzaralarından biridir. Bosphorus Night\'ın 21:00 yemekli turu (€{p.dinnerStd}/kişi) 3 saat boyunca gün batımı sonrası mavi saati ve aydınlatılmış sarayları, tam akşam yemeği ve canlı şovlarla birlikte sunar.' }
    ],
    cta: {
      primary: 'Gün Batımı Turunu Rezerve Et · Teknede Ödeme',
      secondary: 'Biniş 20:00 · Kalkış 21:00 · Yemek dahil · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Yemekli Turun Tüm Detaylarını Görün'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Boğaz Gece Turu €{p.dinnerStd}\'den — Yemekli Tur + Canlı Şov',
      description: '3 saatlik Boğaz gece turu: akşam yemeği ve canlı şov. 21:00\'de Kabataş\'tan kalkış, aydınlatılmış köprüler. Ücretsiz iptal, teknede ödeme.'
    },
    hero: {
      h1: 'Boğaz Gece Turu',
      subtitle: 'İstanbul\'un aydınlatılmış köprüleri, aydınlanan saraylar ve 30 milyon ışığı yansıtan ayna gibi Boğaz suyu — İstanbul akşamını tanımlayan gece turu.',
      badge: 'Aydınlatılmış Köprüler · Canlı Şov · Yemek Dahil'
    },
    intro: [
      '**Boğaz gece turu** İstanbul\'da en çok önerilen akşam aktivitesidir. Nedeni şudur: karanlıktan sonra Boğaz dönüşür. Boğaz Köprüsü mavi, mor ve altın arasında geçer. Dolmabahçe Sarayı sıcak sarıya parlar. Ortaköy Camii siyah suya mükemmel yansır. Her İstanbul dönüm noktası geceleri tepe dramaya ulaşır.',
      '**Yemekli Boğaz gece turumuz** tam ikonik akşamı paketler: 3 saat su üstünde (21:00-00:00), çok çeşitli Türk ziyafeti, sekiz bölümlük canlı halk oyunları programı (Oba Dombra, sema, Anadolu ve Azerbaycan halk oyunları, oryantal dans, Kafkas bıçak dansı), canlı müzik ve gecenin sonuna kadar güverteyi canlı tutan saksafonlu DJ seti. Her misafir aynı programı alır — en iyi bölümleri atlayan "temel" bir seçenek yok.',
      'İlk İstanbul geziniz olsa ve "geceleyin yapmanız gereken tek şey" arıyor olsanız bile, daha önce burada olduysanız ve şehirdeki en fotojenik 3 saati istiyorsanız bile, bu 11.317+ gezginden 4.8★ puanlı **Boğaz gece turu**\'dur. TÜRSAB lisanslı, teknede ödeme, ön ödeme yok.'
    ],
    highlights: [
      { title: 'Tepe dramada aydınlatılmış Boğaz', desc: 'Boğaz Köprüsü renk değiştirir (mavi, mor, altın), saraylar sarı parlar, Ortaköy Camii siyah suya yansır. 21:00-00:00 tüm İstanbul dönüm noktaları için tepe aydınlatma.' },
      { title: 'Teknede geleneksel Türk şov', desc: 'Sekiz gösteri: Oba Dombra, sema gösterisi, Sarı Gelin, Azerbaycan potpurisi, oryantal dans, Anadolu potpurisi ve Gürcü-Kafkas bıçak dansı, sonra canlı saksafon ve DJ seti. 40 dakika performans, sonra müzik + yemek devam eder.' },
      { title: 'Tam çok çeşitli yemek', desc: '10 çeşit Türk mezesi, sıcak başlangıç (paçanga böreği), ana yemek (somon, çipura, tavuk, köfte, vejetaryen — seçiminiz), tatlı (dondurmalı pasta), sınırsız meşrubat. Helal sertifikalı.' },
      { title: 'Tam Boğaz rotası', desc: 'Kabataş → Dolmabahçe → Çırağan Sarayı → Ortaköy Camii → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet Köprüsü → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kız Kulesi → Kabataş.' }
    ],
    faq: [
      { q: 'Boğaz gece turu ne zaman?', a: 'Kabataş İskelesi\'nde 20:00\'den biniş. Tekne 21:00\'de hareket, yaklaşık 00:00 dönüyor. Yerleşmek ve koltuk seçmek için 20 dakika önce gelmenizi öneririz.' },
      { q: 'Boğaz gece turu ne kadar?', a: 'Gece turu (3 saat, yemek, şov): €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}). 0-3 yaş ücretsiz, 4-9 yaş €5 indirim. Teknede ödeme.' },
      { q: 'Boğaz gece turu ile yemekli tur arasındaki fark nedir?', a: 'Aynı şey, farklı anahtar kelime. "Boğaz gece turu" birçok gezginin aradığı şekildir; "yemekli tur" endüstri terimidir. Aynı tekne, aynı 3 saatlik program, aynı menü, aynı şov. Hangi arama terimini tercih ederseniz seçin — deneyim aynı.' },
      { q: 'Boğaz gece turu gün batımı turuna karşı değerlilik mi?', a: 'Gece turu = aydınlatılmış İstanbul, tepe ışık draması, tam eğlence programı, aydınlatılmış köprülerin en ikonik fotoğrafları. Üstelik tek bir tur: yazın (Mayıs-Ağustos) 20:00\'den itibaren biniş altın saati yakalar ve güneş tam 21:00 kalkışı civarında batar — yani aynı akşam hem gün batımını hem geceyi kapsar. Seçim yapmaya veya iki kez rezervasyon yapmaya gerek yok.' },
      { q: 'İstanbul\'daki ilk günümde Boğaz gece turu yapabilir miyim?', a: 'Evet — öneriyoruz. Birçok gezgin ilk akşamları için gece turunu rezerve ediyor çünkü size tam bir oryantasyon veriyor: tüm büyük dönüm noktaları sudan, iyi yemek ve eğlence ile. Jet lag 1. günde gezmeye çalışmaktan daha kolay. Merkezi bölgelerden otel transferi mevcut.' },
      { q: 'Türkçe bilmiyorum — tur İngilizce mi?', a: 'Ekip İngilizce konuşuyor. Eğlence (sema, halk oyunları, müzik) dil gerektirmez. Yemek menüsü İngilizce. WhatsApp / Telegram üzerinden rezervasyon birden fazla dilde çalışır (İngilizce, Arapça, Rusça, Almanca, Fransızca, İspanyolca). Türkçeye gerek yok.' }
    ],
    cta: {
      primary: 'Gece Turu Rezerve Et · Teknede Ödeme',
      secondary: '21:00 kalkış · 3 saat · Yemek + şov dahil · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'İstanbul Yemekli Tur €{p.dinnerStd}\'den — Boğaz Gece Turu',
      description: '3 saatlik İstanbul Boğaz yemekli turu. Çok çeşitli Türk menüsü, canlı halk oyunları, aydınlatılmış köprüler. Ücretsiz iptal, teknede ödeme.'
    },
    hero: {
      h1: 'İstanbul Yemekli Tur',
      subtitle: 'İstanbul\'daki en iyi yemekli tur — Boğaz\'da 3 saat, çok çeşitli Türk ziyafeti, canlı eğlence ve şehrin en ikonik dönüm noktalarının gece manzaraları.',
      badge: '4.8★ · 11.317 yorum · TÜRSAB A-17672'
    },
    intro: [
      '**İstanbul\'da yemekli tur** mu arıyorsunuz? Çoğu gezginin önerdiğini buldunuz. Boğaz\'da 3 saatlik akşamımız tam bir çok çeşitli Türk yemeğini, canlı halk oyunlarını ve şehrin en fotojenik manzaralarını birleştiriyor — hepsi 21:00\'de Kabataş İskelesi\'nden kalkan rahat bir tekneden.',
      '**İstanbul yemekli tur** deneyimi: 20:00\'de binin, yerleşin, kalkarken Dolmabahçe Sarayı\'nın yanından geçişini izleyin, Ortaköy Camii\'ne yaklaşırken yemek başlar, şov başlar (sema, halk oyunları, oryantal), tatlı geldiğinde aydınlatılmış Boğaz Köprüsü\'nün altındasınız. Gece yarısına kadar ikonik fotoğraf kolajı ve dolu bir mideyle Kabataş\'a geri dönüyorsunuz.',
      'Yemekli tur €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}). Teknede ödeme — ön ödeme yok, risk yok. TÜRSAB A-17672 lisanslı, 11.317+ gezgin tarafından 4.8★ puanlı.'
    ],
    highlights: [
      { title: 'Tam çok çeşitli Türk yemeği', desc: '10 çeşit meze, sıcak başlangıç, ana yemek (somon/çipura/tavuk/köfte/vejetaryen), dondurmalı pasta. Helal sertifikalı. Sınırsız meşrubat dahil.' },
      { title: 'Canlı Türk halk oyunları şovu', desc: 'Sekiz gösteri: Oba Dombra, sema gösterisi, Sarı Gelin, Azerbaycan potpurisi, oryantal dans, Anadolu potpurisi, Gürcü-Kafkas bıçak dansı, sonra canlı saksafon ve DJ. 40 dakika performans, ortam müziği devam eder.' },
      { title: 'Tam Boğaz gece rotası', desc: '3 saatlik tur: Dolmabahçe, Çırağan, Ortaköy Camii, Boğaz Köprüsü, Bebek, Rumeli Hisarı, FSM Köprüsü, Beylerbeyi, Üsküdar, Kız Kulesi. Hem Avrupa hem Asya yakası.' },
      { title: '€{p.dinnerStd}\'den — teknede ödeme', desc: 'Yemekli tur €{p.dinnerStd} (eski €{p.dinnerStdOriginal}). Ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' }
    ],
    faq: [
    {
      q: "Şov programında hangi gösteriler var?",
      a: "Sekiz gösteri: Oba Dombra (Orta Asya şaman ritmi), Mevlana semazen gösterisi, Sarı Gelin, Azerbaycan potpurisi, oryantal şov, Türk / Anadolu potpurisi, geleneksel bıçak şovunun yer aldığı Gürcü Gandagan ve Kafkas potpurisi, kapanışta canlı saksafon ve DJ. Program tur boyunca akar; sıra akşamdan akşama değişebilir."
    },
      { q: 'İstanbul\'da yemekli tur ne kadar?', a: 'Yemekli turumuz €{p.dinnerStd}/kişi (normal fiyat €{p.dinnerStdOriginal}). 0-3 yaş ücretsiz, 4-9 yaş %50 indirimli. Teknede ödeme — ön ödeme yok.' },
      { q: 'İstanbul yemekli tur fiyatına ne dahil?', a: 'Boğaz\'da 3 saatlik tur, çok çeşitli Türk yemeği (meze, sıcak başlangıç, ana yemek, tatlı), sınırsız meşrubat, canlı halk oyunları şovu (sema, halk oyunları, oryantal), canlı müzik + DJ, açık güverte erişimi, vergiler dahil. Otel transferi ve alkol opsiyonel eklentilerdir.' },
      { q: 'İstanbul yemekli turu nereden kalkıyor?', a: 'Kabataş İskelesi, İstanbul — Avrupa yakasında, Dolmabahçe Sarayı\'nın yanında. Rezervasyondan sonra WhatsApp / Telegram aracılığıyla tam buluşma yeri paylaşılır. Dolmabahçe tramvay durağı ve Kabataş tramvay istasyonundan yürüyüş videoları yukarıdaki buluşma noktası bölümünde.' },
      { q: 'Yemekli tur ne kadar sürer — ve ne zaman başlar?', a: 'Toplam 3 saat. 20:00\'den biniş, tekne 21:00\'de tam hareket ediyor, yaklaşık 00:00 dönüyor. Yerleşmek ve koltuğunuzu seçmek için 15-20 dakika önce gelmenizi öneririz.' },
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
      title: 'İstanbul Gece Turu €{p.dinnerStd}\'den — Boğaz Yemekli Tur + Şov',
      description: '3 saatlik Boğaz turu, akşam yemeği ve canlı şov. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu. Otel transfer opsiyonel.'
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
      { title: 'Canlı halk oyunları + sema + oryantal', desc: 'Sekiz bölümlük canlı program: Oba Dombra, Mevlana sema gösterisi, Sarı Gelin, Azerbaycan potpurisi, oryantal dans, Anadolu potpurisi, Gürcü-Kafkas bıçak dansı, sonra canlı saksafon ve DJ. 40 dakika performans, tüm akşam ortam müziği.' },
      { title: 'İlk kez İstanbul\'a gelenler için kolay', desc: 'Merkezi buluşma noktası (Kabataş İskelesi), otel transferi (+€{p.transfer}/kişi), İngilizce konuşan ekip, teknede ödeme. Sıfır lojistik stresi. Gelin, keyfini çıkarın, gidin.' }
    ],
    faq: [
      { q: 'İstanbul\'daki en iyi gece turu nedir?', a: 'Boğaz yemekli turu sürekli #1 olarak sıralanır. Nedenleri: (1) size tüm ikonik gece manzaralarını sudan verir, (2) yemek ve şovu tek bir pakette içerir, (3) 3 saat yorulmadan çok şey görmeye yeterli, (4) merkezi buluşma noktası, (5) teknede ödeme rezervasyon sürtünmesini azaltır. Çoğu İstanbul seyahat rehberi bunu "yapılacak tek mecburi gece şeyi" olarak önerir.' },
      { q: 'İstanbul gece turu ne kadar?', a: 'Yemekli Boğaz gece turumuz €{p.dinnerStd}/kişi. Tur, yemek, eğlence, meşrubat dahil. Opsiyonel: 2 kadeh alkol +€{p.alcohol2}/kişi, otel transferi +€{p.transfer}/kişi. Teknede ödeme — ön ödeme yok.' },
      { q: 'İstanbul gece turu solo gezginler için güvenli mi?', a: 'Evet — çok güvenli. TÜRSAB lisanslı tekne, profesyonel İngilizce konuşan ekip, güvertede CCTV, can yelekleri mevcut. Birçok solo gezgin bu turu rezerve eder. Paylaşılan veya özel bir masada yemek yersiniz (seçiminiz) ve akşam kapsayıcıdır — isterseniz diğer gezginlerle tanışırsınız veya kendinize kalırsınız.' },
      { q: 'İstanbul\'daki gece turu için en iyi zaman nedir?', a: 'Boğaz yemekli turumuz 21:00-00:00 (3 saat). Bu tüm İstanbul dönüm noktaları için tepe aydınlatma zamanı — köprüler tam aydınlatılmış, saraylar parlıyor, su üzerinde ay. Altın saati de isterseniz yazın gelin: biniş 20:00\'de başlar ve Mayıs-Ağustos arasında güneş tam 21:00 kalkışı civarında batar — aynı tur ikisini de kapsar.' },
      { q: 'İstanbul gece turu buluşma noktasına nasıl giderim?', a: 'Buluşma noktası Kabataş İskelesi (merkezi Avrupa yakası, Dolmabahçe Sarayı\'nın yanında). Tramvay ile: T1 Kabataş istasyonuna (hat sonu). Taksi ile: Taksim\'den ~15 dk. Yürüyerek: Taksim\'den İnönü Caddesi aşağı 20 dk. Bu sayfada yürüyüş-yönergesi videoları var. Tercih ederseniz +€{p.transfer}/kişi ile otel transferi mevcut.' },
      { q: 'İstanbul gece turunu aynı gün rezerve edebilir miyim?', a: 'Sık sık evet, özellikle hafta içi. Hafta sonları daha hızlı dolar. Bu sayfadaki rezervasyon sihirbazı bu gece için müsaitliği kontrol etmenize ve 1 dakikadan az sürede rezerve etmenize olanak tanır. Acil aynı gün talepleri için +90 532 244 29 22\'den WhatsApp\'tan yazın.' }
    ],
    cta: {
      primary: 'Gece Turu Rezerve Et · Teknede Ödeme',
      secondary: '€{p.dinnerStd}/kişi\'den · Yemek + şov dahil · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Bu Gece Müsaitlik'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'İstanbul Tekne Turu €{p.dinnerStd}\'den — Boğaz Turu + Yemek + Şov',
      description: '3 saatlik İstanbul tekne turu: Boğaz seyri, çok çeşitli Türk yemeği, canlı halk oyunları, aydınlatılmış gece manzaraları. Ücretsiz iptal, teknede ödeme.'
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
      { q: 'İstanbul tekne turu ne kadar?', a: 'Yemekli tekne turumuz €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}). 0-3 yaş ücretsiz, 4-9 yaş €5 indirim. Teknede ödeme. Alkol ve otel transferi opsiyonel eklentilerdir.' },
      { q: 'İstanbul tekne turları nereden kalkıyor?', a: 'Teknemiz Kabataş İskelesi\'nden, merkezi Avrupa yakası İstanbul, Dolmabahçe Sarayı\'nın yanından kalkıyor. T1 tramvay (Kabataş istasyonu), Taksim\'den 15 dk taksi veya Taksim\'den 20 dk yürüyüş ile erişilebilir. Merkezi bölgelerden +€{p.transfer}/kişi ile otel transferi mevcut.' },
      { q: 'Bu tekne turu çocuklu aileler için uygun mu?', a: 'Evet — çok aile dostu. 0-3 yaş çocuklar ücretsiz, 4-9 yaş %50 indirim. Kapalı iç oturma, talep üzerine çocuk menüsü ve eğlence (sema, halk oyunları) çocuklar için ilgi çekici. Dünyanın her yerinden birçok aile bu turu rezerve eder.' },
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
      title: 'Boğaz Gezisi €{p.dinnerStd}\'den — İstanbul Yemekli Turu + Şov',
      description: '3 saatlik Boğaz gezisi: Türk yemeği, canlı halk oyunları, aydınlatılmış gece manzaraları. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme.'
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
      { title: '€{p.dinnerStd}\'den — teknede ödeme', desc: 'Ön ödeme gerekmez. Teknede ödeme (nakit veya kart). Kalkıştan 2 saat öncesine kadar ücretsiz iptal. 0-3 yaş ücretsiz, 4-9 yaş €5 indirim. Şeffaf fiyatlandırma.' }
    ],
    faq: [
      { q: 'İstanbul\'da en iyi Boğaz gezileri nelerdir?', a: 'Akşam yemekli tur sürekli en üst sıralarda. Gündüz seçenekleri (1 saatlik halka feribotları, 2 saatlik sightseeing tekneleri) daha azını gösterir ve yemek içermez. Değer için 3 saatlik yemekli, şovlu ve merkezi dönüş noktalı bir turu yenmek zordur. Turumuzun €{p.dinnerStd} maliyeti ayrı bir yemek + eğlence akşamı ihtiyacını ortadan kaldırır.' },
      { q: 'Bir Boğaz gezisi ne kadar sürer?', a: 'Boğaz gezimiz toplam 3 saat (21:00 kalkış, 00:00 dönüş). Daha kısa seçenekler var (1 saatlik sightseeing feribotları, 90 dakikalık turlar) ama yemek ve eğlenceyi atlarlar. Tam akşam deneyimi için 3 saat idealdir — her şeyi görmek için yeterli, yorucu değil.' },
      { q: 'Boğaz gezisi değerli mi?', a: 'Evet — hemen hemen her İstanbul seyahat rehberi "Boğaz turu"nu ilk 5 mutlaka yapılacak olarak listeler. Şehir bu boğazın etrafında inşa edildi; Boğaz\'ı sudan görmediyseniz İstanbul\'u gerçekten görmemişsinizdir. Bizim özel akşam turumuz yemek ve eğlence ekler, sadece sightseeing yerine tam bir akşam dışarı çıkışı yapar.' },
      { q: 'Boğaz gezisine ne getirmeliyim?', a: 'Pasaport veya kimlik kartı (tekne kaydı için), ince ceket (akşamlar güverte serin), akıllı telefon/kamera, dans pisti için rahat ayakkabılar. Ödeme için nakit veya kart. Diğer her şey teknede. Toplu taşıma kullanmak istemiyorsanız +€{p.transfer}/kişi ile otel transferi mevcut.' },
      { q: 'Boğaz gezisi çocuklar için uygun mu?', a: 'Evet — çok çocuk dostu. 0-3 yaş çocuklar ücretsiz (transfer dahil), 4-9 yaş %50 indirim. Kapalı iç oturma, talep üzerine çocuk menüsü ve eğlence nazik ve ilgi çekicidir. Birçok aile bunu İstanbul gezilerinin bir önemli olayı olarak rezerve eder.' },
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
      title: 'Boğaz Turu Biletleri €{p.dinnerStd}\'den — Teknede Ödeme, Ön Ödeme Yok',
      description: 'Direkt Boğaz turu biletleri — €{p.dinnerStd}/kişi. Ön ödeme yok, teknede ödeme. Tur öncesi 2 saate kadar ücretsiz iptal.'
    },
    hero: {
      h1: 'Boğaz Turu Biletleri',
      subtitle: 'Aracı ücretlerini atlayın — Boğaz turu biletlerinizi direkt bize alın. Ön ödeme yok, teknede ödeme, kalkıştan 2 saat öncesine ücretsiz iptal.',
      badge: 'Direkt Rezervasyon · Ön Ödeme Yok · %40 İNDİRİM'
    },
    intro: [
      '**Boğaz turu biletleri** arıyor musunuz? Direkt alın. Biletimiz €{p.dinnerStd}/kişi — normal fiyattan %40 indirim (€{p.dinnerStdOriginal}). Üçüncü taraf rezervasyon siteleri genellikle %20-40 komisyon ekler. Direkt rezervasyon yaparak tasarruf edersiniz — ve yine teknede ödeyebilirsiniz.',
      '**Boğaz turu bilet** süreçimiz: bu sayfadaki sihirbazı 1 dakikadan az sürede doldurun (tarih, misafir sayısı, paket, iletişim), WhatsApp / Telegram aracılığıyla anında onaylarız, 20:00\'de Kabataş İskelesi\'nde görünürsünüz, teknede ödersiniz, 3 saatlik yemekli turun keyfini çıkarırsınız. Yazdırılacak fiziksel bilet yok, e-postalanacak kupon yok — onay biletiniz.',
      'Ister bu geceki yemekli turu rezerve ediyor olun veya gelecek hafta belirli bir tarih için ayırıyor olun, **Boğaz turu biletleri direkt** en hızlı yoldur. 4.8★ puan, TÜRSAB lisanslı (A-17672), helal sertifikalı menü ve otel transferi ile alkol eklentilerini destekler.'
    ],
    highlights: [
      { title: 'Direkt rezervasyon — aracı ücreti yok', desc: '€{p.dinnerStd}/kişi, tek şeffaf fiyat. Üçüncü taraf siteler aynı tur için €30-80+ alır. Bize direkt rezervasyon yaparak tasarruf edersiniz. Gizli ücret yok, komisyon markup\'ı yok.' },
      { title: 'Teknede ödeme — ön ödeme yok', desc: 'Şimdi yerinizi ayırın, gemiye bindiğinizde ödeyin. Nakit veya kart kabul edilir. Kalkıştan 2+ saat önce iptal ederseniz ücretsiz. Erken ayırmanın finansal riski sıfır.' },
      { title: '1 dakikadan az sürede onay', desc: 'Sihirbazı doldurun → WhatsApp / Telegram aracılığıyla onaylarız. Yazdırılacak e-postalı PDF kuponu yok. Mesajımız biletinizdir. 20:00\'de iskeleye gelin.' },
      { title: '%40 İNDİRİM şu anki lansman fiyatı', desc: 'Eski fiyat €{p.dinnerStdOriginal}, şimdi €{p.dinnerStd}. %40 indirim çünkü direkt rezervasyon yapıyorsunuz. Süreli bir numara değil — standart direkt-rezervasyon fiyatımız.' }
    ],
    faq: [
      { q: 'Boğaz turu biletleri ne kadar?', a: 'Bilet €{p.dinnerStd}/kişi (normal €{p.dinnerStdOriginal}). 3 saatlik tur, çok çeşitli Türk yemeği, canlı halk oyunları şovu, sınırsız meşrubat dahil. 0-3 yaş ücretsiz, 4-9 yaş %50 indirim. Teknede ödeme — ön ödeme yok.' },
      { q: 'Boğaz turu biletlerini nereden satın alabilirim?', a: 'Bu sayfada direkt — rezervasyon sihirbazını doldurun, WhatsApp / Telegram aracılığıyla anında onaylarız. Teknede ödeme. Üçüncü taraf platformlar (Viator, GetYourGuide, Klook) da bilet satar ama genellikle €30-80+ alır — bu aracı markup\'ıdır. Direkt en ucuz ve en hızlı.' },
      { q: 'Boğaz turu biletini yazdırmam gerekiyor mu?', a: 'Hayır — fiziksel bilet veya kupon gerekmez. Rezervasyondan sonra, buluşma noktası, zaman ve rezervasyon adınızla WhatsApp (veya Telegram) aracılığıyla size bir onay gönderiyoruz. Sadece iskelede telefonunuzu gösterin. Bu kadar.' },
      { q: 'Boğaz turu biletimi iptal veya iade edebilir miyim?', a: 'Evet — kalkıştan 2 saat öncesine kadar ücretsiz iptal. Sadece WhatsApp\'tan yazın. Henüz ödemediğiniz için (teknede ödeme), iade gerekmiyor — sadece gelmezsiniz, ücret yok. Ön ödemeli üçüncü taraf biletlerinden çok daha esnek.' },
      { q: 'Boğaz turu biletleri aynı gün mevcut mu?', a: 'Sık sık evet, özellikle hafta içi. Hafta sonları ve tatiller daha hızlı dolar. Rezervasyon sihirbazı aracılığıyla müsaitliği kontrol edin — gerçek zamanlı güncelleniyor. Aynı gün rezervasyon genellikle 21:00 kalkıştan birkaç saat öncesine kadar mümkün. Acil istekler için WhatsApp.' },
      { q: 'Çocuk Boğaz turu biletleri ücretsiz mi?', a: 'Çocuklar **0-3 yaş tamamen ücretsiz** (ücret yok, gizli ücret yok, transfer dahil). **4-9 yaş %50 indirimli** (€{p.dinnerStd} − €5 = €19.30). **10+ yaş tam yetişkin fiyatı.** Fiyatlar üst sınırlı ve şeffaf — "bebek ek ücreti" hileleri yok.' }
    ],
    cta: {
      primary: 'Bilet Al · Teknede Ödeme',
      secondary: 'Direkt rezervasyon · Ön ödeme yok · 2 saat öncesine ücretsiz iptal',
      tertiary: 'Müsaitlik Kontrol Et'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Son Dakika Boğaz Turu €{p.dinnerStd}\'den — Bugün Rezervasyon, Teknede Ödeme',
      description: 'Aynı gün Boğaz turu rezervasyonu. WhatsApp ile dakikalar içinde onay. 21:00\'de Kabataş\'tan kalkış. Ücretsiz iptal, teknede ödeme. 11.317 gezgin yorumu.'
    },
    hero: {
      h1: 'Son Dakika Boğaz Turu',
      subtitle: 'Bu geceki müsaitlik, dakikalar içinde onaylandı. Ön ödeme yok, önceden yazdırılmış kupon yok — sadece iskeleye gelin ve akşamın keyfini çıkarın.',
      badge: 'Aynı Gün Rezervasyon · Dakikalar İçinde Onaylandı · Teknede Ödeme'
    },
    intro: [
      'Bu öğleden sonra İstanbul\'a indi mi ve bu akşam harika bir gece mi istiyorsunuz? **Son dakika Boğaz turu** işe yarar. Sabah karar veren birçok gezgin olduğunu bildiğimiz için aynı gün rezervasyonları için özellikle koltuk ayırıyoruz. Buradaki sihirbazı doldurun, dakikalar içinde WhatsApp üzerinden onaylarız, 20:00\'de Kabataş İskelesi\'nde görünürsünüz, teknede ödersiniz, keyfini çıkarırsınız.',
      '**Son dakika Boğaz turumuz** ön rezervasyonlarla aynı akşam programına sahiptir: su üstünde 3 saat (21:00-00:00), çok çeşitli Türk yemeği, canlı halk oyunları şovu, sema, oryantal dans, DJ. Aydınlatılmış Dolmabahçe Sarayı, Ortaköy Camii, Boğaz Köprüsü — aynı ikonik manzaralar. Aynı €{p.dinnerStd} fiyatı.',
      'Aynı gün iptal kalkıştan 2 saat öncesine kadar ücretsizdir, çünkü **teknede ödeme** henüz hiçbir şeye söz vermediğiniz anlamına gelir. 14:00\'te rezerve ettiniz ve 19:00\'a kadar planlarınızı değiştirdiniz ise sadece WhatsApp\'tan yazın — iade yok, sorun yok. Gezginlerin takdir ettiği **son dakika İstanbul turu** esnekliği bu.'
    ],
    highlights: [
      { title: 'Bu geceki koltuklar hâlâ mevcut', desc: 'Aynı gün rezervasyonları için günlük 5-10 koltuk ayırıyoruz. Yukarıdaki sihirbazı kontrol edin — gerçek zamanlı müsaitlik. Bugünün turu doluysa, yarınki genellikle açık.' },
      { title: '5 dakikadan az sürede onay', desc: 'Sihirbazı doldurun → WhatsApp/Telegram mesajı onayla → bitti. Beklemek için e-posta kuponu yok, yazdırılacak QR kod yok. Mesajımız biletinizdir.' },
      { title: 'Gemiye binene kadar sıfır ödeme', desc: 'Teknede ödeme, nakit veya kart. Gelmezseniz (plan değişikliği, hastalık, hava), ücret yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal. Gerçekten son dakika dostu.' },
      { title: 'Aynı gün otel transferi sık sık mevcut', desc: 'Otel transferi normal olarak 24 saatlik bildirim gerektirir, ancak 14:00-18:30 arası aynı gün rezervasyonları için genellikle +€{p.transfer}/kişi ile alma ayarlayabiliriz. Acil transfer istekleri için WhatsApp.' }
    ],
    faq: [
      { q: 'Gerçekten bu gece için Boğaz turu rezerve edebilir miyim?', a: 'Evet — sıklıkla. Aynı gün rezervasyonları için koltuk ayırıyoruz. Bu geceki müsaitlik için yukarıdaki sihirbazı kontrol edin. Koltuklar mevcutsa, 20:00\'ye kadar rezerve edebilirsiniz. Hafta sonları daha sıkışık — mümkünse günün daha erken saatinde rezerve edin.' },
      { q: 'Ne kadar son dakika rezerve edebilirim?', a: '21:00 teknesi için 20:00\'ye kadar rezervasyon açık kalır. 20:00\'den sonra, +90 532 244 29 22\'den WhatsApp\'tan bize direkt yazın — koltuklar açıksa manuel onaylayabiliriz.' },
      { q: 'Son dakika Boğaz turu daha pahalı mı?', a: 'Hayır — ön rezervasyonla aynı fiyat: €{p.dinnerStd}/kişi. "Dalgalı fiyatlandırma" veya son dakika primi yapmıyoruz. Aynı tekne, aynı yemek, aynı şov, aynı fiyat.' },
      { q: 'Bu gecenin turu tamamen doluysa ne olur?', a: 'Yarınki tur genellikle açık — yılda 365 gün, günlük çalışıyoruz. Yarın için rezerve edebilir ve yine de "son dakika" olabilirsiniz, yani yeni karar verdiniz. Hafta içi turlar hafta sonlarından daha fazla alana sahip.' },
      { q: 'Son dakika otel transferi ayarlayabilir misiniz?', a: 'Aynı gün transferi 21:00 turu için ~18:30\'a kadar mümkündür. 18:30\'dan sonra, müsait bir şoförümüz olmayabilir — bu durumda Kabataş İskelesi\'ne taksi alabilirsiniz (Taksim\'den 15 dk, Sultanahmet\'ten 10 dk, ~€10-15). Merkezi ve kolay.' },
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
      title: 'İstanbul Tur Fiyatı €{p.dinnerStd}\'den — Şeffaf Oranlar, Gizli Ücret Yok',
      description: 'İstanbul Boğaz turu fiyatları: yemekli tur €{p.dinnerStd}/kişi. 0-3 yaş ücretsiz, 4-9 yarı fiyat. Eklentiler şeffaf. Ücretsiz iptal, teknede ödeme.'
    },
    hero: {
      h1: 'İstanbul Tur Fiyatı',
      subtitle: 'Şeffaf fiyatlandırma, gizli ücret yok. Tek paket, €{p.dinnerStd}/kişi — ve şimdi değil, teknede ödüyorsunuz.',
      badge: 'Şeffaf · %40 İNDİRİM Direkt · 0-3 Yaş Ücretsiz'
    },
    intro: [
      '**İstanbul tur fiyatları** çok değişir — yemeği atlayan €15 bütçe feribotlarından €150+ resort tarzı yatlara kadar. Fiyatlandırmamız ortada ve en iyi değeri verir: 3 saatlik şovlu tam yemekli tur için tek paket €{p.dinnerStd}/kişi. Gizli ücret yok, sürpriz ek ücret yok.',
      'Detaylı bir **İstanbul tur fiyatı** dökümü, çünkü şeffaflık önemli:\n\n- **Yemekli Tur**: €{p.dinnerStd}/kişi (eski €{p.dinnerStdOriginal}, %40 indirim). 3 saatlik tur, 10 meze, ana yemek, tatlı, sınırsız meşrubat, canlı şov dahil.\n- **0-3 Yaş**: Ücretsiz. 4-9 yaş: %50 indirim. 10+ yaş: tam fiyat.\n\nEklentiler (opsiyonel):\n- 2 kadeh alkol: +€{p.alcohol2}/kişi\n- Otel transferi gidiş-dönüş: +€{p.transfer}/kişi\n- Romantik masa düzeni: +€{p.romantic}/masa',
      'Ve önemlisi: **teknede ödeme**. Teknede olana kadar bir sent bile söz vermezsiniz. Kalkıştan 2 saat öncesine kadar ücretsiz iptal. Taahhüt yok, risk yok — bulacağınız en tüketici dostu **İstanbul tur fiyatlandırması**.'
    ],
    highlights: [
      { title: 'Yemekli Tur: €{p.dinnerStd} (eski €{p.dinnerStdOriginal})', desc: 'Normal fiyattan %40 indirim. 3 saatlik tur, tam Türk yemeği, canlı şov, sınırsız meşrubat. Tek paket — harika bir akşam için ihtiyacınız olan her şeyi kapsar.' },
      { title: 'Teknede ödeme — €0 peşin', desc: 'Şimdi rezerve edin, binişte ödeyin (nakit veya kart). Kalkıştan 2 saat öncesine kadar ücretsiz iptal. Erken rezervasyonda sıfır finansal risk.' },
      { title: 'Çocuk fiyatı: 0-3 ücretsiz, 4-9 yarı fiyat', desc: '0-3 tamamen ücretsiz (ücret yok). 4-9 yetişkin fiyatından %50 indirim. 10+ tam yetişkin fiyatı. Şeffaf, aile fiyatlandırma hileleri yok. Transfer de 0-3 için ücretsiz.' },
      { title: 'Eklentiler — sadece istediğinizde', desc: 'Alkol (2 kadeh): +€{p.alcohol2}/kişi. Transfer: €{p.transfer}/kişi. Romantik masa: €{p.romantic}/masa. Hepsi opsiyonel, paketlenmemiş. Sadece ihtiyacınız olanı seçin.' }
    ],
    faq: [
      { q: 'İstanbul turu ne kadar?', a: 'Yemekli Tur: €{p.dinnerStd}/kişi (normal €{p.dinnerStdOriginal}, %40 indirim). 0-3 yaş ücretsiz, 4-9 yaş €5 indirim. Teknede ödeme — ön ödeme yok. Kalkıştan 2 saat öncesine kadar ücretsiz iptal.' },
      { q: 'İstanbul tur fiyatında gizli ücret var mı?', a: 'Hayır. Fiyat şunları içerir: 3 saatlik tur, tam yemek (meze, başlangıç, ana yemek, tatlı), sınırsız meşrubat, canlı şov, vergiler. Opsiyonel eklentiler (alkol, transfer, romantik masa) ayrı ve şeffaf fiyatlandırılmıştır — sadece eklediğiniz için ödersiniz. "Servis ücreti", "liman ücreti", sürpriz ek ücret yok.' },
      { q: 'İstanbul tur fiyatı neden %40 indirim — bu bir hile mi?', a: 'Hile yok. Normal fiyat €{p.dinnerStdOriginal}, üçüncü taraf rezervasyon sitelerinin (Viator, GetYourGuide, Klook) aldığı fiyattır — komisyonlarıyla. Direkt rezerve edin ve €{p.dinnerStd} alın. %40 fark bu. Zaman sınırlı veya dalgalı fiyatlandırma numaraları yok.' },
      { q: 'İstanbul tur fiyatı diğer seçeneklerle nasıl karşılaştırılır?', a: 'Halka feribotları: €5-10, 1 saat, yemek yok, eğlence yok, sadece sightseeing. Bütçe yemekli turlar: €20-30, kalabalık, ortalama yemek, kısa şov. Bizim yemekli turumuz (€{p.dinnerStd}): 3 saat, tam yemek, tam şov, özel masa, TÜRSAB lisanslı. Resort yatlar: €100-150+, solo gezginler/çiftler için aşırı.' },
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
      title: 'Boğaz Sightseeing €{p.dinnerStd}\'den — İstanbul Dönüm Noktaları Sudan',
      description: 'Boğaz sightseeing turu: Dolmabahçe, Ortaköy, Boğaz Köprüsü, Rumeli, Beylerbeyi, Kız Kulesi. 3 saatlik akşam turu, akşam yemekli. Ücretsiz iptal, teknede ödeme.'
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
