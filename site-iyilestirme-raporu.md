# Site İyileştirme Raporu — Pazar Araştırmasına Dayalı
**Tarih:** 6 Nisan 2026

Pazar araştırması sonuçlarına göre sitede yapılması gereken değişiklikler.

---

## MEVCUT DURUMDA İYİ OLAN ŞEYLER (dokunma!)

Sitede zaten rakiplerden iyi olan noktalar:
- "Pay on the boat" mesajı hero, topbar ve trust bar'da mevcut
- "We Stay With You" (Before/During/After) konsepti — sektörde benzersiz
- 6 dil desteği (EN, TR, DE, ES, RU, AR) — rakiplerin çoğundan üstün
- Same-day booking vurgusu
- "Tonight" section + countdown timer — son dakika segmentini karşılıyor
- WhatsApp odaklı CTA'lar her yerde
- Mobile-first tasarım
- 7/24 destek vurgusu

---

## 1. SEO İYİLEŞTİRMELERİ (Öncelik: YÜKSEK)

### Sorun
Rakipler Google'da "bosphorus dinner cruise", "istanbul dinner cruise tonight" gibi kelimelerde üst sıralarda. Bizim sitemiz SEO açısından optimize değil.

### Yapılacaklar

**a) Meta Etiketleri Güncelle**
- Title: `Bosphorus Dinner Cruise Istanbul — Book Tonight, Pay on the Boat | Bosphorus Select`
- Description: En çok aranan kelimeleri içermeli: "bosphorus dinner cruise", "istanbul boat tour", "tonight", "pay on the boat"
- Anahtar kelimeler doğal şekilde H1/H2 başlıklarına serpiştirilmeli

**b) Structured Data (Schema.org) Ekle**
- `TouristAttraction` veya `Event` schema
- `AggregateRating` (4.8 stars, 11317 reviews)
- `Offer` (fiyat bilgileri: "from €20")
- `FAQPage` schema (FAQ bölümü için — Google'da genişletilmiş snippet)
- Bu, Google arama sonuçlarında yıldız, fiyat ve FAQ'ların doğrudan görünmesini sağlar

**c) Open Graph & Twitter Card**
- og:image eksik — paylaşımlarda görsel çıkmıyor
- Boğaz gece fotoğrafı ile og:image ekle

**d) Canonical URL & Hreflang**
- Çok dilli yapı için hreflang etiketleri ekle (Google farklı dil versiyonlarını anlar)

---

## 2. GÜVEN ARTIRICI EKLEMELER (Öncelik: YÜKSEK)

### Sorun
Araştırma gösterdi ki İstanbul cruise pazarının #1 sorunu **güven eksikliği**. Turistler "scam mi?" diye düşünüyor.

### Yapılacaklar

**a) "No Hidden Fees" Mesajı Ekle**
- Trust bar'a 5. öğe olarak eklenebilir: "No Hidden Fees — What You See Is What You Pay"
- Veya hero section'da "No prepayment" yanına eklenebilir

**b) "We Speak Your Language" Mesajı**
- Trust bar'da veya hero'da: "We speak 6 languages — we understand you"
- Araştırma gösterdi ki dil bariyeri yaygın şikayet

**c) "Not a Tourist Trap" Diferansiasyonu**
- Why Choose Us bölümüne veya ayrı bir kısa bölümle:
  - "No crowded tables — your private space"
  - "Real food, not mass catering"
  - "No pressure, no hustling"
- Rakip şikayetlerinin tam tersi mesajlar

**d) Gerçek Google Business Entegrasyonu**
- Şu an Google Reviews bar'ı var ama 11,317 review yazıyor — bu gerçek mi?
- Gerçek değilse kaldırılmalı veya gerçekçi bir sayıya düşürülmeli
- Google Business profili açılınca gerçek widget entegre edilmeli

---

## 3. "TONIGHT" SEGMENTİ GÜÇLENDİRME (Öncelik: YÜKSEK)

### Sorun
Araştırma gösterdi ki "tonight/today" anahtar kelimeleri EN YÜKSEK dönüşüm oranına sahip ve bu segmentte dijital boşluk var.

### Yapılacaklar

**a) "Tonight" Bölümünü Daha Yukarı Taşı**
- Şu an 11. sırada (lastminute section). Çok aşağıda.
- Hero'nun hemen altına veya Trust Bar'ın altına taşınabilir
- Reklam trafiğinin çoğu "tonight" aramalarından gelecek — ilk scroll'da görünmeli

**b) "Available Tonight" Badge**
- Her tur kartının üzerinde küçük bir yeşil badge: "Available Tonight"
- Dinamik olarak 19:00'dan sonra "Tomorrow" olarak değişir

**c) Countdown Timer'ı Daha Belirgin Yap**
- Şu an var ama küçük. Daha dikkat çekici olabilir

---

## 4. ÖZEL GÜN PAKETLERİ (Öncelik: ORTA-YÜKSEK)

### Sorun
Araştırma gösterdi ki "özel gün" (evlilik teklifi, doğum günü, yıldönümü) EN YÜKSEK MARJLI segment. Ancak sitede özel bir bölüm yok.

### Yapılacaklar

**a) "Special Occasions" Bölümü Ekle**
- How It Works'ün altına veya Packages bölümüne
- 3 kart: Romantic Evening / Marriage Proposal / Birthday Celebration
- Her biri premium fiyatla (€100-250)
- "Let us make it unforgettable" mesajı
- WhatsApp CTA: "Tell us about your special occasion"

**b) Upsell Badge'leri Geliştir**
- Şu an "Romantic €25" badge'i var ama çok küçük
- Bu bir bölüm olmayı hak ediyor — en yüksek marj buradan gelecek

---

## 5. DÖNÜŞÜM OPTİMİZASYONU (Öncelik: YÜKSEK)

### Yapılacaklar

**a) Google Analytics 4 (GA4) Ekle**
- Şu an hiç tracking yok — reklam harcamasını ölçemeyiz!
- GA4 script'i head'e eklenmeli
- WhatsApp tıklamalarını "conversion event" olarak tanımla

**b) Facebook Pixel Ekle**
- Meta Ads kampanyaları için gerekli
- Retargeting yapabilmek için şart

**c) UTM Parametreleri için Hazırlık**
- WhatsApp linklerine utm_source, utm_medium eklenebilir yapı
- Hangi reklamdan geldiğini takip etmek için

**d) WhatsApp Pre-filled Message'ları İyileştir**
- Şu an genel mesaj: "Hello, I'd like to book a Bosphorus dinner cruise."
- Paket seçimine göre farklı mesajlar: "Hi, I'm interested in the Premium Sunset Cruise for tonight."
- Bu, AI chatbot'un müşteriyi hemen doğru yönlendirmesini sağlar

---

## 6. MOBİL PERFORMANS (Öncelik: YÜKSEK)

### Sorun
Araştırma: Mobil trafik %60-70, bounce rate hedefi <%51, yüklenme <2.2sn olmalı.

### Yapılacaklar

**a) Görsel Optimizasyonu**
- Hero background Unsplash'tan yükleniyor (1920px) — çok ağır
- Tüm görseller WebP formatına çevrilmeli
- Lazy loading zaten var ama hero image hariç

**b) CDN Tailwind Yerine Build**
- `cdn.tailwindcss.com` kullanılıyor — bu production için uygun değil
- Tailwind CSS build edilip minified CSS olarak kullanılmalı
- ~300KB → ~15KB'a düşer

**c) Font Optimizasyonu**
- 2 Google Font yükleniyor (Playfair + Inter)
- `font-display: swap` zaten var ama subset edilebilir

---

## 7. FAQ GÜÇLENDİRME (Öncelik: ORTA)

### Sorun
Araştırmada yaygın şikayetlere karşılık gelen FAQ'lar eksik.

### Eklenecek FAQ'lar
- "Is this safe? How do I know it's not a scam?" → "Pay on the boat" + "We're a registered agency" + "Real WhatsApp support"
- "Will the tables be crowded?" → "Private table guaranteed for all packages"
- "Is the food actually good?" → Menü detayları + vegetarian/halal seçenekler
- "Can I cancel?" → "Free cancellation — just let us know on WhatsApp"
- "Which cruise is best for couples?" → Romantik paket önerisi

---

## 8. İÇERİK İYİLEŞTİRMELERİ (Öncelik: ORTA)

### Yapılacaklar

**a) "From €35" → "From €20" Hero'da**
- Daytime cruise €20'den başlıyor ama hero'da €35 yazıyorsa, daha yüksek fiyat algısı yaratır
- "From €20" daha çekici giriş fiyatı

**b) Review'lar Bölümü**
- Şu an WhatsApp tarzı sahte review'lar var
- Gerçek müşteriler gelmeden önce "Guest Experiences" olarak kalabilir
- Ama "11,317 reviews" sayısı gerçekçi değilse düşürülmeli

**c) Galeri Bölümü**
- Gerçek fotoğraflar geldikçe stok fotoğrafları değiştir
- Video eklenmesi çok etkili olur (15-30sn Reels tarzı)

---

## 9. REKLAM LANDING PAGE VARYANTLARI (Öncelik: UZUN VADE)

### Konsept
Farklı reklam kampanyaları için farklı landing page versiyonları:

- **tonight.html** — "Tonight" araması yapanlar için: sadece countdown + tonight paketi + WhatsApp CTA
- **couples.html** — "Romantic dinner cruise" arayanlar için: romantik görseller + couples package
- **vip.html** — "Luxury bosphorus cruise" arayanlar için: VIP paket odaklı

Bu, dönüşüm oranını önemli ölçüde artırır çünkü her ziyaretçi aradığı şeyi hemen bulur.

---

## ÖNCELİK SIRASI

| Sıra | İş | Etki | Zorluk | Zaman |
|------|-----|------|--------|-------|
| 1 | GA4 + Facebook Pixel ekle | Kritik (ölçüm olmadan reklam olmaz) | Kolay | 30 dk |
| 2 | SEO meta tag + structured data | Yüksek (organik trafik) | Orta | 1-2 saat |
| 3 | "Tonight" bölümünü yukarı taşı | Yüksek (dönüşüm) | Kolay | 30 dk |
| 4 | "No hidden fees" + güven mesajları | Yüksek (güven) | Kolay | 30 dk |
| 5 | WhatsApp mesajlarını kişiselleştir | Orta-Yüksek (dönüşüm) | Kolay | 30 dk |
| 6 | Tailwind build (CDN'den kurtul) | Yüksek (hız) | Orta | 1 saat |
| 7 | Özel gün paketi bölümü | Orta-Yüksek (gelir) | Orta | 2-3 saat |
| 8 | Görsel WebP optimizasyonu | Orta (hız) | Orta | 1 saat |
| 9 | FAQ genişletme | Orta | Kolay | 30 dk |
| 10 | Landing page varyantları | Orta (uzun vade) | Yüksek | 3-5 saat |

---

## YAPMAYACAKLARIMIZ (şimdilik)

- Online ödeme sistemi ekleme — model "pay on the boat"
- Çok sayfalı siteye geçiş — tek sayfa yeterli, dönüşüm odaklı
- Karmaşık booking form — WhatsApp daha etkili
- Blog/içerik pazarlaması — ilk aşamada değil, reklam öncelikli
