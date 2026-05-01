# CLAUDE.md — Bosphorus Night AI Project

Bu dosya projenin kalıcı bellek dosyasıdır. Her yeni Claude Code oturumunda ilk olarak bu dosya okunur. Yeni bir şey öğrenildiğinde veya karar verildiğinde buraya eklenir.

---

## 1. PROJE KİMLİĞİ

- **İş:** Bosphorus Night — İstanbul lüks Boğaz akşam yemekli tekne turu
- **Site:** www.bosphorusnight.com
- **Sahip:** Özgür
- **Lokasyon:** İstanbul, Türkiye
- **TÜRSAB Lisans:** A-17672
- **Müşteri profili:** Uluslararası turistler (EN, TR, DE, ES, RU, AR)
- **Müşteri tabanı:** 11.317+ geçmiş misafir (iç rezervasyon sistemi, 2014'ten beri) · 4.8★ iç memnuniyet ortalaması
- **Public yorum profili (1 May 2026):** Google 6 yorum · TripAdvisor profil yok · GBP yeni açıldı 29 Nis
- **Rakipler:** Mega Lüfer, Bosphorus Cruise, Bosporus Cruise, Dinner Cruise Bosphorus, Tourlance, Bosfor, Pereme, Turna

---

## 2. PROJENİN AMACI

**Tam otonom AI sistemi.** Özgür hiçbir müşteriyle doğrudan muhatap olmayacak. AI tüm operasyonu yönetecek:

1. Siteden form → WhatsApp/Telegram/WeChat'e mesaj düştüğünde cevap verecek
2. Satış konuşması → rezervasyon → bilet üretimi
3. Tur öncesi teyit mesajları
4. Transfer 30 dk kala bildirim
5. Tur sırası check-in
6. Tur sonrası teşekkür + Google yorum + video mesaj talebi
7. Cevaplamayan müşterilere akıllı takip
8. İkinci satış, retention, "arkadaşını getir"
9. Telefon (ileride) — gelen/giden arama
10. Reklamlar (ileride) — Meta + Google + TikTok otomatik yönetim

**Özgür'ün günlük yükü:** 10 dakika. Sabah WhatsApp'a günlük özet düşer, onay kuyruğundaki kritik kararlara bakar.

---

## 3. ÜRÜN VE FİYATLAR

### Turlar

| Kod | Tur | Süre | Kalkış | Fiyat | Orijinal | Maliyet | Marj |
|---|---|---|---|---|---|---|---|
| DAYTIME_STD | Daytime Cruise | 1.5 saat | 12:00 | €20 | — | ⏳ bekleniyor | — |
| SUNSET_STD | Sunset Cruise | 3 saat | 17:30 | €35 | — | ⏳ bekleniyor | — |
| DINNER_STD | Standard Dinner Cruise | 3 saat | 21:00 | €24 | €40 | €18 | €6 |
| DINNER_VIP | VIP Dinner Cruise | 3 saat | 21:00 | €55 | €90 | €40 | €15 |

**Buluşma:** Kabataş İskelesi. Giriş 20:00'den itibaren, kalkış 21:00. Ödeme: Pay on the boat (ön ödeme yok).

**Rota:** Dolmabahçe → Çırağan → Ortaköy → Bebek → Rumeli Hisarı → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş

### Eklentiler

Eklentiler dinner paketlerine **ek delta fiyat** olarak uygulanır — toplam paket fiyatı değildir.

| Kod | İsim | Satış | Maliyet | Marj | Tip |
|---|---|---|---|---|---|
| ALCOHOL_2GLASS | 2 bardak alkol | €15 | €10 | €5 | per_person |
| ALCOHOL_UNLIMITED | Sınırsız alkol | €30 | €20 | €10 | per_person |
| HOTEL_TRANSFER | Otel transferi | €10 | €5 | €5 | per_person |
| ROMANTIC_TABLE | Romantik masa | €15 | €10 | €5 | per_booking |

**Örnek:** DINNER_STD (€24) + ALCOHOL_UNLIMITED (€30) = **€54/kişi** satış.

**PROPOSAL_PACKAGE kaldırıldı** — artık standart paket olarak satılmıyor. Müşteri "evlilik teklifi" talep ederse eskalasyona gider (§ 8).

### Standart Dinner Menüsü
10 çeşit meze, sıcak başlangıç, ana yemek (salmon/levrek/tavuk/köfte), dondurmalı pasta, sınırsız meşrubat, Mevlana + 5 halk oyunu + oryantal + canlı müzik + DJ.

### VIP Dinner Menüsü
15+ premium meze, ana yemek eki (rib-eye, dana bonfile), sahneye yakın masa, VIP servis.

### Çocuk Politikası (2026-04-20 netleştirildi)

| Yaş | Paket fiyatı | Transfer |
|---|---|---|
| 0-3 (dahil) | Ücretsiz | Ücretsiz |
| 4-8 (dahil) | %50 indirimli | Normal (€10) |
| 9+ | Tam fiyat | Normal (€10) |

**Sınır:** 3 yaş dahil ücretsiz, 4'e girdiyse indirimli başlar; 8 dahil indirimli, 9'a girdiyse tam fiyat.

### İptal
2 saat öncesine kadar ücretsiz iptal, pay on boat olduğu için para iadesi konu değil.

### Transfer Kuralı (2026-04-20 netleştirildi)
Aynı gün (tur tarihi = bugün) için saat dilimleri:
- **00:00-17:00** → normal, AI kendisi alır
- **17:00-19:30** → **gri bölge**: AI Özgür'e escalation, Özgür Telegram'dan "al/reddet" komutu verir (Aşama 4 sonrası). Şimdilik default: AI reddeder.
- **19:30-21:00** → transfer imkansız, müşteri Kabataş'a kendi gelirse yetişir
- **21:00+** → bugünün turu kalktı

Yarın veya sonraki tarih için transfer her zaman mümkün (saat sınırı yok).

---

## 4. 10 AŞAMALI İNŞA PLANI

| # | Aşama | Durum |
|---|-------|-------|
| 0 | Hazırlık (hesaplar) | ✅ BİTTİ |
| 1 | Veri katmanı (Supabase) | ✅ BİTTİ |
| 2 | Backend iskelet (Node.js + Express) | ✅ BİTTİ |
| 3 | AI beyin (Claude API + prompt + hafıza) | ✅ BİTTİ — Mode A + Mode B parite, 5 iyileştirme (A-E) 2026-04-19'da tamamlandı. Canlı test geçti. |
| 4 | WhatsApp sales agent MVP | 🟡 SANDBOX CANLI 28 Nis — production Meta onayı bekleniyor |
| **4.A** | **SEO Sprint #1 (organik altyapı + meta + schema + GBP)** | ✅ BİTTİ — 2026-04-29 (272 sayfa update + GBP setup + hero video) |
| **4.B** | **AI Pre-launch Hardening (router + güvenlik + few-shot)** | 🔴 AKTİF — 2026-04-28, Twilio onay penceresinde paralel |
| 5 | Güvenlik ağları (onay, kill switch, anomali) | ⏳ |
| 5.A | SEO Sprint #2 (Event schema + PAA optimize + tour-specific og:image + Internal linking + Core Web Vitals + Tailwind build) | 🔴 SIRADA |
| 6 | Operation agent (teyit, takip, transfer) + Multi-agent altyapı (Paperclip-inspired) | ⏳ |
| 6.A | SEO Sprint #3 (OTA citations: TripAdvisor + GetYourGuide + Viator + Klook, weekly GBP posts, AggregateRating, backlinks) | ⏳ |
| 6.B | Country-specific SEO (DE, RU, AR öncelikli: GBP ülke, hreflang geo-variants, Almanca blog, .de domain, partner backlink'ler) | ⏳ |
| 7 | Dashboard + günlük rapor | ⏳ |
| 7.A | SEO Dashboard (GSC API + Yandex API + Bing API → sabah raporu) | ⏳ |
| 8 | Çoklu kanal (Telegram ✅, WeChat, Klook OTA) + retention | ⏳ |
| 8.A | Baidu Webmaster (Çin pazarı) + Yandex boost (Rus pazarı) | ⏳ |
| 9 | Voice agent (Vapi + ElevenLabs) | ⏳ |
| 9.A | Voice Search SEO (Speakable schema, FAQ voice-optimize) | ⏳ |
| 10 | Ads agent (Meta + Google + TikTok) | ⏳ |
| 10.A | Programmatic SEO landing pages (her kampanya kelimesine) | ⏳ |
| **11** | **Turizm ürün genişlemesi — aynı site, ek SKU'lar (son aşama)** | ⏳ |
| **P6** | **Panel Sprint 6 — Rezervasyonlar sayfası yenileme (paralel)** | 🟡 AKTİF — 2026-04-23 |
| **P7** | **Panel Sprint 7 — Konuşmalar sayfası yenileme (paralel)** | 🟡 AKTİF — 2026-04-23 |

**Kural:** Bir aşama bitmeden sonrakine geçilmez. Her aşama sonunda canlı test.
Panel sprint'leri (P-prefix) AI aşamalarına paralel ilerleyebilir; Aşama 4 WhatsApp kurulumu beklerken panel tarafında görsel + CRUD işleri yapılıyor.

### Panel Sprint 6 — Rezervasyonlar sayfası yenileme maddeleri (sırayla)

Panel `/reservations` sayfası komple yenileniyor. Her madde ayrı commit.

| # | Madde | Süre | Durum |
|---|---|---|---|
| 1 | API query params: search + status[] + date_range (tur+kayıt) + package + channel | 25 dk | ⏳ |
| 2 | API: limit/offset + total count (load more desteği) | 10 dk | ⏳ |
| 3 | API: `/reservations/export` PDF endpoint (filtrelenmiş liste, Puppeteer) | 30 dk | ⏳ |
| 4 | UI: `ReservationFilters` component — 6 ana filtre (arama, durum chip, tur/kayıt tarihi, paket, kanal) | 45 dk | ⏳ |
| 5 | UI: Hızlı butonlar — Bugün / Yarın / Bu Hafta / Bu Ay / Gelecek / Geçmiş | 15 dk | ⏳ |
| 6 | UI: Ek filtreler — kişi aralığı, tutar aralığı, dil, transfer var/yok | 20 dk | ⏳ |
| 7 | UI: Derin filtreler — eskalasyon, AI/insan, büyük grup kısayolu | 20 dk | ⏳ |
| 8 | UI: Aktif filtre chipleri (× ile kapat) + "Hepsini temizle" | 15 dk | ⏳ |
| 9 | UI: "20 daha yükle" butonu + "N/toplam" sayacı | 10 dk | ⏳ |
| 10 | UI: Sütun başlıklarından sıralama (tarih, tutar, kayıt tarihi, isim) | 15 dk | ⏳ |
| 11 | UI: Satır başına durum butonları — ✅ Geldi / ❌ Gelmedi / 🚫 İptal (manuel transition) | 15 dk | ⏳ |
| 12 | API: `PATCH /reservations/[id]/status` endpoint + `system_logs` kayıt | 15 dk | ⏳ |
| 13 | UI: PDF indir butonu (filtre bilgisiyle + toplam ciro + kişi özet) | 10 dk | ⏳ |
| 14 | Canlı test — 7 rez üstünde her filtre + sıralama + pdf + durum değişimi | 20 dk | ⏳ |

**Toplam: ~4.5 saat net iş, 1-2 günlük çalışma.**

**Paket seçenekleri filtrede:** `DINNER_STD` · `DINNER_VIP` (DAYTIME/SUNSET maliyeti netleşince eklenir).
**Kanal seçenekleri filtrede:** `WhatsApp` · `Telegram` · `WeChat` (Aşama 4/8 açıldıkça dolar).
**Durum seçenekleri:** `pending` · `confirmed` · `completed` · `cancelled` · `no_show` — default seçili `pending + confirmed`.

**Aşama 6 ile bağlantı:** Madde 11'deki manuel durum butonları, Aşama 6 Operation Agent geldiğinde aynı `PATCH .../status` endpoint'ini kullanarak otomatikleşir (confirmed/completed/no_show transitions). Şimdi manuel, sonra otomatik — altyapı aynı.

### Panel Sprint 7 — Konuşmalar sayfası yenileme maddeleri

Panel `/conversations` sayfası komple yenileniyor.

| # | Madde | Süre | Durum |
|---|---|---|---|
| 1 | API query params: search + channel + language + status + result + date_range | 25 dk | ⏳ |
| 2 | API: limit/offset + total count + sıralama | 10 dk | ⏳ |
| 3 | API: `/conversations/export` PDF endpoint | 25 dk | ⏳ |
| 4 | API: `POST /conversations/[id]/analyze` — Observer anlık analiz tetikleyici | 20 dk | ⏳ |
| 5 | API: `/conversations/active-count` — son 5 dk aktifler sayısı | 10 dk | ⏳ |
| 6 | UI: `ConversationFilters` — arama, kanal, dil, durum, sonuç, tarih | 45 dk | ⏳ |
| 7 | UI: Dil sütunu — bayrak + kod (🇹🇷 TR / 🇺🇸 EN / 🇩🇪 DE / vb.) | 15 dk | ⏳ |
| 8 | UI: Durum çipleri renkli — active=yeşil, closed=gri, escalated=kırmızı | 10 dk | ⏳ |
| 9 | UI: Sonuç genişlet — rezervasyon ✓ / iptal / eskalasyon / pending / ayrıldı | 15 dk | ⏳ |
| 10 | UI: Müşteri ismine tıklayınca → `/customers/[id]` detay sayfası | 10 dk | ⏳ |
| 11 | UI: Satıra tıklayınca → `/conversations/[id]` mesaj timeline (zaten var) | 5 dk | ⏳ |
| 12 | UI: Satır sonunda 🔍 "Observer ile analiz et" butonu (quality score toast) | 20 dk | ⏳ |
| 13 | UI: Üstte "🟢 Şu an N yazıyor" badge — tıklayınca aktifleri filtreler | 15 dk | ⏳ |
| 14 | UI: "20 daha yükle" butonu + "N/toplam" sayacı + sıralama | 15 dk | ⏳ |
| 15 | UI: Aktif filtre chipleri (× ile kapat) + hepsini temizle | 10 dk | ⏳ |
| 16 | UI: PDF indir butonu | 10 dk | ⏳ |
| 17 | Canlı test — 8 konuşma üstünde tüm filtre + analiz + pdf | 20 dk | ⏳ |

**Toplam: ~4.5 saat net iş.**

**Paylaşılan altyapı (Sprint 6 + 7):**
Her iki sprint'te ortak kullanılacak komponentler önce çıkartılacak — `ListFilters`, `LoadMoreButton`, `FilterChips`, `PdfExportButton` — böylece her iki sayfa için de tek kaynak.

**Tahmini toplam (Sprint 6 + 7 beraber): ~7-9 saat**, paylaşılan infra ile kazanılan ~1 saat dahil.

### Aşama 4.A — SEO Sprint #1 Maddeleri (sırayla)

Aşama 4 WhatsApp işiyle paralel yürüyecek. Her madde ayrı commit, Özgür onayıyla tek tek.

| # | Madde | Süre | Durum |
|---|---|---|---|
| 1 | Blog sayfalarını build'e dahil et (build-all.js + sitemap) | 30 dk | ⏳ |
| 2 | Yandex verification hash güncelle (745... → 976b... → c5b81ef1cac4597c) | 15 dk | ✅ (2026-04-24) |
| 3 | Bing Webmaster Tools verify + sitemap submit | 20 dk | ⏳ |
| 4 | Blog yazılarına Article schema JSON-LD ekle (5 yazı) | 45 dk | ⏳ |
| 5 | og:locale meta tag (16 dil — en_US, tr_TR vs.) | 30 dk | ⏳ |
| 6 | Google Analytics 4 (GA4) property kurulumu + gtag G-ID | 30 dk | ⏳ |
| 7 | Ana sayfaya Tour/TouristTrip schema × 4 paket | 45 dk | ⏳ |
| 8 | Ana sayfaya Event schema (günlük 21:00 kalkış) | 30 dk | ⏳ |
| 9 | Tailwind CDN → build-time CSS extraction | 2-3 sa | ⏳ |
| 10 | Görsel optimize: JPG → WebP/AVIF (build pipeline) | 2-3 sa | ⏳ |
| 11 | og:image width/height meta tag ekle (1200×630) | 10 dk | ⏳ |
| 12 | Internal linking — ana sayfa 17 landing → blog cross-link | 1 sa | ⏳ |
| 13 | robots.txt'e AI bot rules (GPTBot, ClaudeBot) | 10 dk | ⏳ |
| 14 | Structured data validation (Google Rich Results Test × 17 sayfa) | 1 sa | ⏳ |

**Toplam tahmini süre:** 12-15 saat net iş, 3-5 gün içine yayılır.

**4.A SONUÇ (29 Nis):** 14/14 madde tamam. Schema image array (272 sayfa) + 14 dilde meta rewrite + GBP setup (kategori, foto, video, hizmet) + Search Console re-index + hero video deploy. Sandbox canlı, Local Pack profilinde 5★ ilk yorum.

### Aşama 5.A — SEO Sprint #2 Maddeleri (sırayla — 2-3 hafta dağılımlı)

**Amaç:** 4.A'nın altyapısı kuruldu, 5.A **görünür sıralama büyümesi** için. Hedef: 8 hafta içinde Local Pack + PAA box + Featured snippet + Travel Listings'te görünmek.

| # | Madde | Süre | Etki | Durum |
|---|---|---|---|---|
| 1 | **People Also Ask (PAA) optimize** — landing page FAQ'lerini Google'ın gerçek sorduğu sorulara birebir eşle (`Is X worth it?`, `How much does X cost?`, `Is X better at night or day?`). 40-60 kelimelik direkt cevap. FAQPage schema otomatik güncellenir. | 2 sa | 🔴 PAA box çıkar | ⏳ |
| 2 | **Event schema** (günlük 21:00 tur) — `<script type="application/ld+json">` Event JSON-LD, recurring schema. Google search'te "Tonight at 21:00 — Book now" kart çıkar | 30 dk | 🔴 Event carousel | ⏳ |
| 3 | **Tour-specific og:image** — 17 sayfa hep aynı og-image yerine her tur tipine özel: `og-dinner.jpg`, `og-sunset.jpg`, `og-romantic.jpg`, `og-vip.jpg`, `og-kids.jpg` (1200×630 crop, gallery'den) | 1 sa | 🟡 Sosyal paylaşım kalitesi | ⏳ |
| 4 | **Internal linking** — 17 landing page birbirine cross-link (Bosphorus Dinner → Romantic, VIP, Sunset). 70+ link. Topical authority sinyali | 1 sa | 🔴 Topical authority | ⏳ |
| 5 | **Core Web Vitals audit + iyileştirme** — pagespeed.web.dev test, LCP < 2.5s, CLS < 0.1 hedefi. Lazy load galleries, preload hero poster, critical CSS inline | 2-3 sa | 🟡 Sıralama sinyali | ⏳ |
| 6 | **Tailwind CDN → build-time CSS** — 4.A Madde 9'dan ertelendi. CSS extraction, ~50KB → 8KB | 2-3 sa | 🟡 Page speed | ⏳ |
| 7 | **Image alt text audit** — tüm `<img>` tag'lerinde alt attribute, anahtar kelimeli. Boş veya generic olanları yenile | 30 dk | 🟢 Image search | ⏳ |
| 8 | **YouTube video SEO** — kanaldaki 6 promo video için: anahtar kelimeli title, ilk 150 karakter description, tags ("bosphorus cruise istanbul night tour"), özel thumbnail | 1 sa (sen) | 🔴 YouTube search + Google video carousel | ⏳ |
| 9 | **Bing Webmaster Tools verify + sitemap** — 4.A Madde 3'ten ertelendi | 20 dk | 🟡 Bing trafik | ⏳ |
| 10 | **og:image width/height meta tag** — 4.A Madde 11'den ertelendi (1200×630 explicit) | 10 dk | 🟢 Sosyal preview | ⏳ |
| 11 | **robots.txt AI bot rules** — 4.A Madde 13'ten ertelendi (GPTBot, ClaudeBot izinleri) | 10 dk | 🟢 AI tarama | ✅ 1 May (commit 23401d5) — 19 AI bot açık Allow + tüm arama motorları |
| 12 | **og:locale meta tag** (16 dil) — 4.A Madde 5'ten ertelendi | 30 dk | 🟢 Locale targeting | ⏳ |
| 13 | **GA4 (Google Analytics 4)** kurulum doğrulama — gtag çalışıyor mu, conversion'lar takip ediliyor mu | 30 dk | 🟢 Veri toplama | ⏳ |
| 14 | **Rich Results Test** — 17 sayfa × Google Rich Results Test, schema hatası varsa düzelt | 1 sa | 🟡 Schema doğrulama | ⏳ |
| 15 | **`/reviews` sayfası oluştur** — Google Related Searches'te "Bosphorus Cruise reviews" + "Istanbul dinner cruise reviews" cevapsız. Tek sayfa: TripAdvisor + Google review embed + AggregateRating schema. Yorum keyword trafiği kapatılır. | 2-3 sa | 🔴 "reviews" arama trafiği | ⏳ |
| 16 | **Title'larda "Best" kelimesi** — Google Related Searches'te "Best Bosphorus dinner cruise Istanbul" + "Best dinner cruise in Istanbul" var. İlgili landing page title'larına "Best" ekle (örn. "Best Bosphorus Dinner Cruise Istanbul from €24"). 14 dilde rewrite gerekir. CTR +%20-30 beklenir. | 1 sa | 🔴 CTR + "best" arama trafiği | ⏳ |

### Aşama 6.A — SEO Sprint #3 Maddeleri (OTA + içerik + backlink, 4-6 hafta)

**Amaç:** Google "Travel Listings" (Yer siteleri) kutusunda görünmek + uzun vade backlink/yorum profilini güçlendirmek.

| # | Madde | Süre | Etki | Durum |
|---|---|---|---|---|
| 1 | **TripAdvisor profil oluştur + optimize** — Profil yok (1 May 2026), önce sayfa kayıt et, sonra description, kategori, photo upload, owner response. İlk 50 yorum birikene kadar yatırım | 3-4 sa (sen) | 🔴 Direkt referrer + Google authority | ⏳ |
| 2 | **TripAdvisor → Viator booking aktive** — TripAdvisor sahip Viator. Liste otomatik Viator'a yansır, %20 komisyon | 30 dk | 🔴 Viator carousel'de görün | ⏳ |
| 3 | **GetYourGuide partner başvuru** — getyourguide.com/supplier-portal/login. Avrupa pazarı #1. Onay 1-2 hafta. Komisyon %25-30 | 1 sa başvuru + bekleme | 🔴 Travel Listings carousel | ⏳ |
| 4 | **Klook partner başvuru** — Asya odaklı (Çin, Japon, Kore turist). Komisyon %15-25 | 1 sa başvuru + bekleme | 🟡 Asya pazarı | ⏳ |
| 5 | **Civitatis** (İspanya/Latin Amerika) başvuru | 30 dk | 🟢 Hispanic pazarı | ⏳ |
| 6 | **GBP weekly post** otomasyonu — AI agent her Pazartesi GBP'ye post atar (örn: "Tonight 21:00 cruise, €24, WhatsApp +90...") | 2 sa kod | 🟡 GBP engagement signal | ⏳ |
| 7 | **AggregateRating schema** — Google'a 50+ yorum birikince TouristTrip schema'ya AggregateRating ekle. Search'te ★ yıldızlar çıkar | 30 dk | 🔴 SERP CTR +%30 | ⏳ |
| 8 | **Google review toplama otomasyonu** — Tur sonrası AI agent WhatsApp/Telegram review link'i atar. Bilet PNG'sine QR | 1 sa kod | 🔴 Yorum hacmi | ⏳ |
| 9 | **Hotel partnerlik backlinks** — Hilton/Conrad/Four Seasons konsiyerjlerine broşür + site link karşılığı | 1-2 hafta | 🔴 Yüksek otorite link | ⏳ |
| 10 | **Travel blogger outreach** — İstanbul travel bloggerlarına free tour + "honest review" istek. 5-10 blogger | 1 hafta | 🔴 Backlink + sosyal kanıt | ⏳ |
| 11 | **HARO / press requests** — Help A Reporter Out, gazetecilere "Bosphorus Night uzman alıntı" verme | sürekli | 🟡 PR backlink | ⏳ |
| 12 | **Schema LocalBusiness ek alanlar** — `paymentAccepted`, `currenciesAccepted`, `priceRange` | 30 dk | 🟢 Schema completeness | ⏳ |

**Toplam tahmini süre:** 8-12 saat net iş + 4-6 hafta beklemeler (OTA onayları, blogger response).

### İçerik Pazarlama (Aşama 5.A paralel — blog post serisi)

**Amaç:** Anahtar kelime hedefli, uzun-form blog content. Site authority + organik trafik.

| # | Konu (anahtar kelime) | Tahmini | Durum |
|---|---|---|---|
| 1 | "Top 10 Things to Do in Istanbul at Night" | 4-6 sa | ⏳ |
| 2 | "Best Bosphorus Cruise Guide 2026" | 4-6 sa | ⏳ |
| 3 | "Istanbul Itinerary: 3 Days Perfect Trip" | 4-6 sa | ⏳ |
| 4 | "Why Pay-on-Boat is Better Than Prepayment" | 3-4 sa | ⏳ |
| 5 | "Romantic Istanbul: Best Date Ideas" | 4-6 sa | ⏳ |
| 6 | "Istanbul vs Dubai: Which is Better for Couples?" | 4-6 sa | ⏳ |
| 7 | "Halal Travel Istanbul: Muslim-Friendly Guide" | 4-6 sa | ⏳ |
| 8 | "Bosphorus Bridge Lights: Photographer's Guide" | 3-4 sa | ⏳ |
| 9 | "First-Timer's Istanbul Guide" | 4-6 sa | ⏳ |
| 10 | "Best Time to Visit Istanbul" (mevsim odaklı) | 3-4 sa | ⏳ |

Her makale: **1500-2500 kelime, anahtar kelime hedefli, internal link'li** (landing pages'e cross-link).

**Beklenen etki:** 6 ay sonra organik trafik 3-5x artar. AI agent (Aşama 5.A 8 madde) ile daha sonra otomatize edilebilir.

### Aşama 8 — WeChat Official Account entegrasyonu (Çin pazarı)

Aşama 8'in alt-iş kalemi. Telegram + retention ile birlikte ele alınacak. **Karar henüz verilmedi**, konuşulacak (29 Nis 2026 not edildi).

**Bağlam:** Site wizard'ında WeChat seçeneği görsel olarak var ama CTA butonu ölü (`href="#"`, [js/main.js:3105-3107](js/main.js#L3105-L3107)). Çinli müşteri seçerse hiçbir yere gitmiyor — sessiz kırık. Ya kaldırılacak (ara çözüm) ya da gerçek entegrasyon yapılacak.

**Önemli arka plan:** Çin'de WhatsApp + Telegram bloklu (sadece VPN'liler kullanır). WeChat olmadan Çinli turist alımı çok düşük. Ama Tencent onayı zorlu süreç.

#### Faz 1 — Hesap kurulumu (Özgür, 2-4 hafta beklemeli)

| # | İş | Süre | Maliyet |
|---|---|---|---|
| 1 | WeChat Official Account başvurusu — **Service Account (服务号)** tipi (Subscription Account API'si zayıf) | 2 sa belge | $99/yıl Tencent verify fee |
| 2 | Belge hazırlığı: TÜRSAB A-17672 lisansı İngilizce tercüme + apostil, ticaret sicil gazetesi apostil, Özgür pasaport | 1 hafta | ~₺2.000-3.000 tercüme/apostil |
| 3 | Hong Kong şirket alternatifi (Çin supervisor zorunluluğu çıkarsa) | 1 hafta | $300-500 kurulum + ~$200/yıl |
| 4 | Tencent onay süreci | 2-4 hafta bekleme | — |
| 5 | Onay sonrası AppID + AppSecret + Token + EncodingAESKey | — | — |

**Risk:** %30 ihtimalle ilk seferde reddediliyor (belge eksiği). Hong Kong şirketi olmazsa onay %50.

#### Faz 2 — Teknik entegrasyon (~25 sa net iş)

WhatsApp/Telegram **gibi değil**: XML protokol + AES şifreleme + 48 saat pencere kuralı.

| # | İş | Dosya | Süre |
|---|---|---|---|
| 1 | `npm install xml2js wechat-crypto` | package.json | 30 dk |
| 2 | Webhook handler (XML parse + AES decrypt) | `src/channels/wechat.js` | 4 sa |
| 3 | `sendMessage(openid, body)` — Customer Service Messages API | `src/channels/wechat.js` | 3 sa |
| 4 | Media upload — bilet PNG Tencent CDN'e yükle, `media_id` al, mesaja ekle (PNG direct URL gönderilemiyor) | `src/channels/wechat.js` | 3 sa |
| 5 | Migration 019: `customers.wechat_openid` UNIQUE | migration | 30 dk |
| 6 | Customer matching — OpenID resolve, sales agent adapter | `src/agents/sales.js` + queries | 2 sa |
| 7 | `/webhooks/wechat` endpoint — signature verify + routing | `src/index.js` | 2 sa |
| 8 | Sales agent — WeChat 48 sa pencere kuralı (proaktif mesaj yasak, sadece template) | sales.js | 4 sa |
| 9 | Template message kaydı (Tencent panel) — "Rezervasyon teyidi", "Tur hatırlatma", "Transfer geliyor" 3 şablon | Tencent panel + kod | 1 sa kayıt + 1-2 gün Tencent onay |
| 10 | Site wizard handoff — WeChat'te `wa.me`/`t.me` gibi link yok. Çözüm: QR modal aç → müşteri WeChat'te tara → bot'a düşer | `js/main.js` wizard | 3 sa |
| 11 | Test (VPN ile Çinli arkadaş veya fake hesap) | sandbox | 4 sa |

#### Kritik teknik tuzaklar

1. **48 saat pencere kuralı** — Müşteri yazdıktan 48 sa içinde free-form cevap, sonra sadece **önceden Tencent onaylı template message**. "Tura 30 dk kala transfer hatırlatma" → template gerekli, free-form değil.
2. **Bilet PNG sorunu** — Dış URL kabul edilmiyor, her bilet için Tencent CDN upload + `media_id` al. Geçici media 3 gün, kalıcı için ayrı flow.
3. **Test imkansız (VPN olmadan)** — Çin dışından mp.weixin.qq.com kısmen bloklu, geliştirici dokümanları Çince orijinalden okunması gerekebiliyor.
4. **Customer Service personel limiti** — Service Account'ta max 10 "agent". AI tek agent olarak çalışır, OK.
5. **TÜRSAB Çin'de tanınmıyor** — Marketing'de "Government-licensed Istanbul tour operator" daha iyi çalışıyor.

#### Karar verilecekler

- [ ] Şu ana kadar kaç Çinli müşteri sinyali geldi? (TripAdvisor + form + Telegram). <5/ay ise erteleme mantıklı.
- [ ] Çin pazarı stratejik öncelik mi? (Klook partner — Aşama 6.A Madde 4 başvuru + Aşama 8 Klook entegrasyonu — ile birlikte yürür; **karar 29 Nis: Klook önce, WeChat paralel beklemede**)
- [ ] Hong Kong şirketi açma iştahı var mı?
- [ ] **Ara çözüm:** Tencent onayı beklerken wizard'da WeChat seçeneği kaldırılsın mı yoksa Telegram fallback mı? (şu an ölü buton, dönüşüm sızıntısı)

**Beklenen etki:** Çinli turist hacmi 0 → ayda 20-50 (Klook + WeChat birlikte). Customer base çeşitlenmesi.

### Aşama 8 — Klook OTA entegrasyonu (Asya + global pazar)

Aşama 8'in ikinci alt-iş kalemi (WeChat'le birlikte). **Strateji kararı (29 Nis 2026):** Çinli turist için Telegram işe yaramaz (Çin'de bloklu, sadece VPN'liler), WeChat ise Tencent verify çilesi (2-4 hafta + ~$300 + ret riski). **Klook bu iki çözümün ortak köprüsü** — onların verified hesabı + müşteri ilişkisi + ödeme + Çince destek. Biz sadece booking + tur günü ops alıyoruz. Aynı entegrasyonla Japon, Kore, Singapur, Tayvan müşterisi de geliyor.

**Sıralama kararı (29 Nis 2026):** Önce kendi sitemiz tam sisteme oturmalı (Aşama 4 WhatsApp production + Aşama 6 ops agent), **sonra** Klook entegrasyonu. Klook müşterisi sales agent'a düşmez (Klook chat bizden uzak), doğrudan **ops agent'a** akar.

#### Faz 1 — Başvuru (Özgür, 1-2 hafta beklemeli)

| # | İş | Süre | Maliyet |
|---|---|---|---|
| 1 | **Fiyat stratejisi karar** — Klook %15-25 komisyon alır, mevcut €24 STD'de marj sıfırlanır. Yol seçimi: Klook'a yüksek fiyat (€34 STD / €75 VIP) veya sadece VIP koy veya müşteri kazanımı yatırımı | 1-2 sa konuşma | — |
| 2 | merchant.klook.com → "Become a Partner" formu | 30 dk | — |
| 3 | Belge: TÜRSAB A-17672 İngilizce tercüme + apostil (WeChat için zaten hazırlanıyorsa paylaşımlı), ticaret sicil, sigorta poliçe, banka bilgisi (USD/HKD wire) | 1 hafta | ~₺2.000 (apostil paylaşımlı) |
| 4 | Yüksek çözünürlüklü 10-15 foto (1920×1080), İngilizce + (ideal) Çince ürün açıklamaları | 2-3 sa | — |
| 5 | Klook account manager onay süreci | 1-2 hafta bekleme | — |
| 6 | Onay sonrası: ürün listing'i Klook AM ile birlikte yapılır + komisyon oranı pazarlık | 1 sa | — |

**Başvuru kanalı:** TripAdvisor → Viator zinciri Klook'a yansımaz, **doğrudan Klook merchant portal**'dan başvuru gerekiyor.

#### Faz 2 — Teknik entegrasyon (yöntem seçimi)

Klook **direkt Partner API'si yeni başlayanlara açık değil** — typical 100+ booking/ay hacim threshold + account manager onayı. Üç yol var:

| Yol | Yöntem | Süre | Avantaj | Dezavantaj |
|---|---|---|---|---|
| **A — Email parser** (önerim) | Klook her booking'i email atar → Gmail Pub/Sub webhook → parser → `reservations` INSERT | ~6 sa | Onay çıkar çıkmaz çalışır, $0 ek maliyet | Email format değişirse parser kırılır (yılda 1-2x) |
| **B — Bokun channel manager** | Bokun aracı Klook + GetYourGuide + Viator + Airbnb tek panel + API'sinden çekersin | ~12 sa kod + ~$50-100/ay Bokun fee | 4 OTA tek başvuru, sağlam API | Bokun bağımlılığı, mimariyi adapte et |
| **C — Direkt Klook API** | Klook native API | ~20 sa | Tam kontrol, native | Account manager onayı şart, hacim sonrası 3-6 ay |

#### Yol A teknik plan (önerim — başlangıç için)

| # | İş | Dosya | Süre |
|---|---|---|---|
| 1 | Gmail API kurulum (reservation@bosphorusnight.com Pub/Sub topic + service account) | google-cloud + .env | 1 sa |
| 2 | Webhook handler — Pub/Sub push notification al, mesaj ID'siyle Gmail API'den HTML body çek | `src/channels/klook-email.js` | 2 sa |
| 3 | HTML parser — Klook email template'inden müşteri/paket/tarih/kişi/ödeme parse et | `src/channels/klook-email.js` | 2 sa |
| 4 | Migration 020: `reservations.channel='klook'` enum + `klook_booking_id` UNIQUE kolon | migration | 30 dk |
| 5 | Customer resolve — email/ad'la mevcut `customers` eşle, yeni ise INSERT (channel='klook') | sales adapter + queries | 1 sa |
| 6 | Ops agent `channel='klook'` flag — T-24sa teyit, T-30dk transfer, tur günü WhatsApp/SMS bağlantısı (Klook chat'te olmaz) | ops.js | 1 sa |
| 7 | Test — Klook sandbox booking → email → DB → ops trigger | sandbox | 1 sa |

#### Kritik tuzaklar

1. **Komisyon marj baskısı** — Mevcut DINNER_STD €24'te %25 komisyon = €0 marj. Klook'ta **fiyat yüksek tutulmalı** (€34+) veya **sadece VIP** satılmalı. Sözleşmedeki "Best Price Guarantee" maddesini dikkatli oku — sitendekinden yüksek fiyat yasak olabilir.
2. **Sales agent Klook müşterisine konuşmaz** — Klook "Customer Communication Policy" gereği müşteri Klook chat'inden çıkamaz. AI sales agent sadece direct kanal (web wizard, WhatsApp, Telegram) kullanır. Klook müşterisi tamamen ops agent'ın işi.
3. **Müşteri telefonu görünmeyebilir** — Klook müşteri telefonunu paylaşmayabilir. **Çözüm:** Klook profilinde "WhatsApp number required at checkout" iste, yoksa tur günü ops zincirinde kopukluk olur.
4. **İade politikası farkı** — Klook müşterinin ödediği parayı tutar, biz tur sonrası ödeme alırız. **Risk:** No-show'da Klook müşteriye iade verir, biz boş yere boat hazırlamış oluruz. Sözleşmede "tour-day cancellation = no refund" şartı kritik.
5. **Türkçe destek beklenmesin (özellik, bug değil)** — Klook Çin/Asya müşterisi tamamen Klook'un sorumluluğu, biz sadece tur günü iletişim. Sales pipeline yükü Klook üstünde.

#### Karar verilecekler

- [ ] Klook fiyat stratejisi: yüksek fiyat (€34/€75) mi, sadece VIP mi, müşteri kazanımı yatırımı mı?
- [ ] Faz 2 yolu: A (email parser, hızlı) mı, B (Bokun, 4 OTA bir arada) mi?
- [ ] Klook üstünden ilk pilot pazar Çin mi, Japonya/Kore mi, hepsi mi (listeleme dilleri buna göre)?
- [ ] Aşama sıralaması teyidi: Aşama 4 + Aşama 6 bittikten sonra Aşama 8'in ilk kalemi Klook mu olsun? (WeChat onayı paralel beklemeli)

**Beklenen etki:** Asya pazarına 0 → ayda 20-40 booking erişim. Komisyon sonrası net €1-3K/ay ek ciro (fiyat stratejisine göre). WeChat onayı geldiğinde 2 kanal birden açılır, etki 2x'e çıkar.

### Aşama 11 — Turizm Ürün Genişlemesi (son aşama, Aşama 10 bittikten sonra)

Stratejik karar (2026-04-22): İş **sadece turizm dikeyinde** büyüyecek. Sağlık turizmi, saç ekimi, diş, estetik, oturma izni/vatandaşlık gibi farklı dikeyler masa dışı. Tek dikeyde derinlik, çok dikeyde dağılma değil.

Bosphorus Night markasının ve motorunun üstüne **aynı site + aynı wizard + aynı AI agent + aynı Supabase şema** üstüne turizm SKU'ları eklenecek. Her SKU için: `packages` tablosuna satır, AI agent'a ürün context'i, wizard'a ürün kartı, partner operatörle revenue share sözleşmesi.

| # | Ürün | Partner | Tahmini müşteri başı marj |
|---|------|---------|---------------------------|
| 1 | VIP havalimanı transfer | Lüks transfer firması (2-3 seçenek) | €40-80 |
| 2 | Yat / özel tekne kiralama (saatlik + günlük) | Yat sahipleri | €60-200 |
| 3 | Kapadokya sıcak hava balonu (aracılık) | Kapadokya balon operatörleri | €25-50/kişi |
| 4 | Hamam + masaj rezervasyonu | Çemberlitaş/Süleymaniye/Hürrem Sultan | €15-40/kişi |
| 5 | İstanbul 2-3 günlük paket (uçak+otel+tekne+şehir turu) | Otel + tur operatör kombinasyonu | değişken, yüksek sepet |
| 6 | Gece kulübü + premium restoran rezervasyonu | Mekanlarla doğrudan | %20-30 komisyon |

**Yapılacaklar:**
1. Partner sözleşmeleri (her SKU için en az 2 yedek operatör)
2. `packages.category` ve `packages.vertical_code` kolonları — wizard doğru akışa yönlendirsin
3. AI agent için her ürüne ait upsell kuralları (ör. tekne tur sonrası Kapadokya öner)
4. Ayrı teyit + operasyon akışı (transfer tekne ile aynı mantıkta değil)
5. Reklam (Aşama 10) bittikten sonra her ürüne ayrı kampanya

**Beklenen etki:** Ortalama müşteri değeri €70 → €180+, customer lifetime value 2-3x.

### Aşama 6 ön-iş — Multi-Agent Altyapı (Paperclip-inspired)

Operation agent (Aşama 6) gelmeden önce **agent orkestrasyon altyapısı** kurulacak. İlham kaynağı: [Paperclip](https://github.com/paperclipai/paperclip) — açık kaynak (MIT), self-hosted AI agent yönetim platformu. Lokal klon: `_temp/paperclip/` (geçici, pattern'ler kendi koduna geçince silinecek).

**Çalınacak 4 pattern (kendi kodumuzla, dependency yok):**

1. **Org chart** → Supabase `agents` tablosu: code, role, reports_to, monthly_budget_eur, current_spend_eur, status, goals jsonb, heartbeat_cron, system_prompt_ref. Yeni agent eklemek = DB satırı eklemek.
2. **Ticket sistemi** → Supabase `agent_tickets` tablosu: id, assigned_to, parent_id, type, priority, status, context, due_at. Mevcut `escalations` bunun alt-türü olur.
3. **Heartbeat scheduler** → n8n cron + agent başına schedule (SALES webhook, OPS 10 dk, ADS 6 sa, ORCH sabah 09:00).
4. **Budget guard** → `src/safety/budget-guard.js`, her Claude API çağrısından önce check, %80 uyarı + %100 auto-pause + Özgür bildirimi.

**Migration 008** ile bu altyapı kurulur, sonra OPS (Aşama 6), VOICE (Aşama 9), ADS (Aşama 10) agent'ları aynı altyapı üstüne **DB satırı olarak** eklenir — kod çoğaltma yok.

**Detay:** `memory/paperclip_reference.md` ve `_temp/paperclip/_NEDEN_BURADA.md`.

---

## 5. TECH STACK — KESİNLEŞMİŞ KARARLAR

### AI Beyin
- **Claude API (Anthropic)** — tüm AI konuşmaları
- Ana model: `claude-sonnet-4-5`
- Karmaşık kararlar: `claude-opus-4-7`
- **Prompt caching zorunlu** — maliyet %60-70 düşüyor
- GPT / Gemini KULLANILMAYACAK

### Backend
- Node.js 20 + Express
- Hetzner VPS (CX22, €4.51/ay, Nuremberg) — Aşama 2 sonunda
- PM2 process manager
- nginx reverse proxy + Let's Encrypt SSL
- Subdomain: `api.bosphorusnight.com`

### Veri
- **Supabase (PostgreSQL)** — Frankfurt, **tek proje** (site + AI birleşti 2026-04-17)
- Proje: `bosphorus-ai`
- URL: `https://kknbiemjtcfpuznyptai.supabase.co`
- Site env vars (Vercel) da bu projeye bağlı — hem admin panel hem AI beyin aynı DB
- Eski `bosphorusnight` Supabase'i kullanılmıyor (paused'a alınacak)
- Airtable KULLANILMIYOR

### İletişim Kanalları
- **Twilio → WhatsApp Business API** (Meta onayı bekleniyor)
- Telegram Bot API (Aşama 8)
- WeChat Official Account (Aşama 8)
- **Vapi.ai + ElevenLabs** → telefon (Aşama 9)

### Dashboard & Orkestrasyon
- **Retool** — kontrol paneli (Aşama 7)
- **n8n (self-hosted)** — scheduled jobs (Aşama 6+)
- Make.com KULLANILMIYOR

### Geliştirme
- VS Code + Claude Code
- GitHub (private repo)
- Git version control
- Windows lokal makine

---

## 6. VERİTABANI ŞEMASI — 17 TABLO

Tek Supabase'de (bosphorus-ai). Site ile AI birleşti 2026-04-17. Seed data yüklü (2 paket + 4 eklenti). DAYTIME_STD ve SUNSET_STD için maliyet bekleniyor.

### AI Tabloları (9)
1. **customers** — müşteri (phone UNIQUE, preferred_language, tags, customer_type). Site uyumluluğu için `language`, `last_contact`, `first_contact` generated kolonlar; `hotel`, `hotel_address` plain shim.
2. **packages** — paket (code, tour_type, tier, name_translations jsonb, **description_translations jsonb**, price_eur, cost_eur, inclusions jsonb)
3. **addons** — eklenti (code, name_translations jsonb, **description_translations jsonb**, price_type: per_person/per_table/per_booking)
4. **availability** — tarih bazlı doluluk (date + package_id UNIQUE)
5. **reservations** — rezervasyon (reservation_code, margin_eur GENERATED, status, ai_generated)
6. **conversations** — sohbet (customer_id, channel, status, summary, message_count)
7. **messages** — mesaj (direction, sender, content, input_tokens, output_tokens, cost_eur)
8. **escalations** — eskalasyon (reason, priority, ai_summary, suggested_response, status)
9. **system_logs** — audit trail (level, source, event_type, metadata jsonb)

### Site Tabloları (8 — 2026-04-17'de taşındı)
10. **boats** — tekneler (3 kayıt: Tosunpaşa, Lüfer, AMOR). BIGSERIAL id, slug UNIQUE, login_code + owner_code.
11. **admin_users** — admin panel kullanıcıları (2 kayıt: ozgur/admin_sahip, personel1/admin_personel). BIGSERIAL id.
12. **competitors** — rakip firmalar (8 kayıt). BIGSERIAL id, domain UNIQUE.
13. **competitor_scans** — Gemini tarama sonuçları (36 kayıt). raw_data + packages jsonb.
14. **competitor_price_history** — fiyat değişim geçmişi (şu an boş).
15. **competitor_reports** — Claude analiz raporları (7 kayıt). recommendations jsonb.
16. **transactions** — tekne cari hareketleri. **reservation_id UUID** (site'ta BIGINT'ti).
17. **settings** — key-value ayarlar (2 kayıt: Google Ads refresh + access token).

### Shim Kolonları (migration 004 — site kodu uyumluluğu)
Site kodu eski kolon isimlerini bekliyor, AI schema farklı:
- `reservations`: `cruise_date` ← tour_date, `guests` ← adults+children+infants, `total_price` ← total_price_eur, `special_request` ← special_requests (hepsi GENERATED). `customer_phone`, `customer_name`, `package`, `currency`, `notes` plain (INSERT'te elle).
- `customers`: `language` ← preferred_language, `last_contact` ← last_contact_at, `first_contact` ← first_contact_at (GENERATED). `hotel`, `hotel_address` plain.
- Long-term: Aşama 3-4'te site kodu AI schema'ya tam adapte olunca shim'ler silinebilir.

### Yüklenen Seed Data
- 2 paket yüklendi: DINNER_STD, DINNER_VIP (11 dilde isim, tr+en açıklama, kategorili inclusions)
- 4 eklenti yüklendi: ALCOHOL_2GLASS, ALCOHOL_UNLIMITED, HOTEL_TRANSFER, ROMANTIC_TABLE
- **Bekleyen:** DAYTIME_STD ve SUNSET_STD (maliyet netleşince eklenecek)
- **Kaldırılan:** PROPOSAL_PACKAGE (satışta değil, sadece eskalasyon)

### Yeni Kolon (Aşama 2'de eklendi)
- `packages.description_translations` (jsonb) ve `addons.description_translations` (jsonb) — migration 001
- Pattern: `name_translations` ile aynı. Şimdilik 2 dilde dolu (tr, en); 9 dili Claude anlık çevirir.

### Trigger'lar
Tüm `updated_at` alanları otomatik güncellenir.

### İndeksler
customers.phone, customers.last_contact_at, packages.is_active, availability.date, reservations.customer_id, reservations.tour_date, reservations.status, conversations.customer_id, conversations.last_message_at, messages.conversation_id, messages.created_at, escalations.status, escalations.priority, system_logs.timestamp, system_logs.level.

---

## 7. KRİTİK PRENSİPLER — HER ZAMAN UYGULANACAK

1. **Hiçbir şey hardcoded değil.** Fiyat/paket/prompt hepsi Supabase'de veya `.env`'de.
2. **Prompt caching zorunlu.** `cache_control: {"type": "ephemeral"}` her çağrıda.
3. **Her aksiyon loglanır.** `system_logs` veya `messages` tablosuna.
4. **Güvenlik ağları default açık.** Onay kuyruğu + kill switch + anomali algılama.
5. **11 dil desteklenir.** en, tr, de, es, ru, ar, fr, it, zh, hi, ur. Paket isimleri 11 dilde Supabase'de; açıklamalar 2 dilde (tr, en) + Claude anlık çeviri. Dil otomatik algılanır.
6. **Hata toleransı düşük.** Try/catch her yerde, fallback mesajları hazır.
7. **Özgür gibi konuşur.** Bot gibi değil. Değişken gecikmeler (2-5 sn), doğal bölmeler.
8. **Token/maliyet kaydı.** Her Claude çağrısının Euro maliyeti `messages`'a.
9. **Küçük adımlar.** Her aşama canlı test olmadan kapanmaz.
10. **Özgür müşteriyle konuşmaz.** Bu yüzden eskalasyon > satıştan önemli.

---

## 8. ESKALASYON TETİKLEYİCİLERİ

Bu durumlarda AI cevap vermez, Özgür'e Telegram/WhatsApp bildirimi gider:

- **Bloklanmış durumlar** (AI rezervasyon oluşturmaz, Özgür karar):
  - Şikayet sinyali, agresif müşteri
  - Özel tekne talepleri (30+ kişi)
  - Evlilik teklifi talebi (AI önerir, müşteri onaylarsa escalation)
  - Menü dışı özel istek (kosher, alerji)
  - Bot 2 denemede anlamadıysa
  - Müşteri "insanla konuşmak istiyorum"
  - Fiyat pazarlığı
  - Tur öncesi 2 saat kala iptal/değişiklik
- **Bildirim gider ama AI satışa devam eder** (Özgür komut verirse müdahale):
  - €500+ rezervasyon
  - 30+ kişi grup (büyük grup, otomatik onay)
  - Blocked adres için transfer ısrarı
  - Fiyat uyuşmazlığı €10+ delta (wizard vs DB)
  - Transfer bölge dışı reddetme

---

## 9. "BOT GİBİ KONUŞMAMA" STRATEJİSİ

- Sistem promptuna Özgür'ün 20-30 gerçek WhatsApp konuşması eklenecek (sonra)
- Değişken cevap gecikmeleri (2-5 saniye)
- "Typing..." göstergesi aktif
- Tek uzun mesaj yerine 2-3 kısa mesaj
- Emoji dozunu müşterinin tarzına göre ayarla
- İlk cevapta "Merhaba, Bosphorus Night'tan Özgür" değil, doğrudan soruya gir

---

## 10. EKONOMİK BAĞLAM

### Birim ekonomi
- Satış: €24/kişi (Dinner Standard)
- Maliyet: €18/kişi (geçici)
- Brüt marj: €6/kişi = %25
- Ortalama rezervasyon: ~2.8 kişi
- Rezervasyon başı brüt kâr: ~€17

### AI operasyon maliyeti
- Rezervasyon başına ~€0.43 (prompt caching ile)
- Brüt kârın %2.5'i — çok sağlıklı

### Reklam gerçekliği
- Sağlıklı reklam maliyeti: €8-12 / rezervasyon
- €15 üstü tehlikeli, €16 üstü zarar
- İlk 3 ay reklama bütçe YOK

### Strateji
- Organik trafiğin dönüşüm oranını %30'dan %50'ye çıkar
- Upsell sıkı (romantik masa, transfer, alkol, VIP yükseltme)
- Retention ile 2. kez gelen müşteriyi çoğalt
- Reklam Aşama 10'da

### Hacim hedefi
- Başlangıç: 50 rez/ay
- 6 ayda 100-200 rez/ay
- 200+ rez/ay üstünde ciddi kâr

---

## 11. TASARIM PATTERN'LARI

### Modüler yapı
Her ajan ayrı dosya. Orchestrator → ajanları çağırır → her ajan tek iş yapar.

### Repository pattern
`src/db/queries/` içinde her tablo için query fonksiyonları. İş mantığı Supabase'e doğrudan bağlı değil.

### Channel adapter pattern
`src/channels/whatsapp.js`, `telegram.js`, `wechat.js` — aynı interface (sendMessage, receiveMessage). Orchestrator kanalı bilmez.

### Prompt versioning
`src/claude/prompts/` içinde .md dosyaları. Her prompt versiyonlu.

### Error handling
Her async fonksiyon try/catch. Hatalar `system_logs`'a. Kritik hatalarda Özgür'e bildirim.

### Graceful degradation
Claude API down → fallback mesaj. Supabase down → in-memory queue + alarm. Hiçbir müşteri cevapsız kalmaz.

---

## 12. DOSYA YAPISI

```
bosphorus-night-ai/
├── CLAUDE.md             (bu dosya — proje belleği)
├── .env                  (secret, git'e girmez)
├── .env.example          (şablon)
├── .gitignore
├── package.json
├── README.md
├── src/
│   ├── index.js          (Express entry)
│   ├── config.js         (env parser)
│   ├── db/
│   │   ├── supabase.js   (client wrapper)
│   │   └── queries/      (tablo bazlı query'ler)
│   ├── channels/         (whatsapp [Aşama 4], telegram, wechat, web-form)
│   ├── agents/           (sales [Mode A+B], orchestrator, ops, voice)
│   ├── claude/           (client, system-prompt, confirmation-prompt, intent-classifier, memory, tools/)
│   │   └── tools/        (check-availability, calculate-price, create-reservation, update-reservation, cancel-reservation, trigger-escalation)
│   ├── safety/           (approval, escalation, kill-switch, anomaly) [Aşama 5]
│   ├── scheduled/        (pre-tour, during-tour, post-tour, follow-up) [Aşama 6]
│   └── utils/            (logger, language, ticket-renderer, wizard-parser, name-validator, transfer-zones, markdown-stripper)
├── public/tickets/       (generated boarding pass PNGs)
└── docs/
```

---

## 13. NE KULLANMIYORUZ (KARAR VERİLDİ)

- ❌ GPT (OpenAI) — satış için Claude daha iyi
- ❌ Gemini — uzun hafıza zayıf
- ❌ Airtable — limitleri var, vektör yok
- ❌ Make.com — işlem başı pahalı, n8n daha iyi
- ❌ Zapier — gereksiz
- ❌ Google Sheets as database — scaling problemi

---

## 14. İLETİŞİM TARZI

- **Özgür:** iş kararları, onaylar, gerçek rakamlar
- **Claude Code:** teknik uygulama — dosya oluştur, kod yaz, test et, deploy et
- **Claude (chat):** strateji ve yönlendirme, Özgür üzerinden komut geçer
- Dil: **Türkçe** (kod yorumları EN, müşteri mesajları 6 dil)
- "Tamam" / "devam et" → bir sonraki adım
- Hata: net göster + çözüm öner
- Her aşama sonunda: özet + sıradaki adım

---

## 15. GELECEK AŞAMALAR İÇİN NOTLAR

**Aşama 3'te lazım:**
- Özgür'ün 20-30 gerçek WhatsApp konuşması (prompt için)
- "Red çizgiler" listesi
- Kritik karar kuralları (kaç kişi otomatik, ne zaman eskalasyon)

**Aşama 4'te:** WhatsApp Business API onayı gerekecek.

**Aşama 9'da:** ElevenLabs ses klonu kararı (Özgür'ün sesi veya AI sesi).

**Aşama 10'da:** Rakip reklam istihbaratı (Meta Ads Library ile).

---

## 16. ŞU ANKİ GÖREV — AŞAMA 4 — WHATSAPP BUSINESS API (TWILIO)

### KRİTİK: PROJE LOKASYONU
**AI projesi:** `C:\Projects\bosphorus-night-ai` (site reposundan ayrı)
**Site reposu:** `c:\Users\DELL\Desktop\bosphorusnight`

### Durum — Aşama 3 tamamlandı (2026-04-19)
- Mode A (wizard teyit) + Mode B (açık sohbet) canlı
- Bilet PNG renderer (Puppeteer), harita konumu
- Intent classifier (mid-flow modifications)
- Update + cancel reservation tools
- Transfer zones (13 yer + Hilton Bosphorus) single-source
- Nezaket kuralı + saat-aware tarih teyidi
- Markdown strip, garbage name detect
- E2E test script: `npm run test:wizard`

### Aşama 4 Amaç
AI'ı gerçek WhatsApp'a bağla. Müşteri mesajları Twilio webhook üzerinden AI'a gelsin, AI cevapları + bilet + harita Twilio üzerinden WhatsApp'a geri gitsin. Bundan sonra gerçek trafik alınabilir.

### Ön Koşullar (Özgür)
1. **Twilio hesabı aç** — twilio.com/try-twilio
2. **Meta WhatsApp Business onayı** — Twilio sandbox üzerinden başla, production için 1-2 hafta onay süreci
3. **Business numara** — Bosphorus Night için WhatsApp Business numarası

### ✅ Sunucu hazır (19 Nisan 2026 gece bitti)
- Hetzner CCX13 (Nuremberg): IP 178.104.154.29, ayda €19.69
- `https://api.bosphorusnight.com` — SSL aktif, AI 7/24 çalışıyor
- SSH erişim: `ssh root@178.104.154.29` (Özgür'ün laptop key'i ile)
- Detay: memory/hetzner_server.md

### Teknik Yapılacaklar (AI projesi)
1. Twilio SDK kurulum: `npm install twilio`
2. `src/channels/whatsapp.js` doldurma:
   - Inbound webhook handler
   - Outbound `sendMessage(to, body, mediaUrl?)` fonksiyonu
   - PersistentAction ile location message
3. `/webhooks/whatsapp` endpoint (`src/index.js`):
   - Twilio signature doğrulama
   - Inbound mesajı `handleIncomingMessage` (sales agent) fonksiyonuna yönlendir
   - Response'u Twilio TwiML veya REST API ile geri gönder
4. Bilet PNG hosting:
   - `public/tickets/*.png` dosyalarını publicly accessible URL'ye taşı
   - Seçenek A: Supabase Storage (önerilen)
   - Seçenek B: Cloudflare R2 / DigitalOcean Spaces
   - Seçenek C: Hetzner üzerinde nginx serve
5. Hetzner VPS kurulumu:
   - CX22 sipariş
   - nginx + Let's Encrypt (api.bosphorusnight.com)
   - PM2 ile pm2 start
   - `.env` production değerleri
6. Test:
   - Twilio sandbox'ta manuel mesaj
   - Wizard'dan gelen mesaj → AI → bilet gönderim
   - Mode B sohbet → rezervasyon → bilet
   - Harita konumu inmemi kontrol et

---

### Aşama 4.B — AI Pre-launch Hardening (paralel, Twilio onay penceresinde)

**Amaç:** Aşama 4 trafiği gelmeden önce AI sistemini "doğru" mimariye oturt — intent-aware routing + güvenlik temelleri + tone kalibrasyonu. Twilio + Meta onayı 1-2 hafta passive sürerken bu işler paralel halledilir.

**Plan dosyası:** `~/.claude/plans/biz-hangi-a-amaday-z-a-amalar-zippy-yao.md` (28 Nisan 2026 onayı)

**3 katmanlı mimari:**
```
[1. String fast-path]  → niyet kelimesi varsa direkt model seç (10ms, 0 maliyet)
[2. Guard / Router AI] → Haiku 4.5, niyet+abuse+confidence (300ms, ~$0.0002)
[3. Specialist AI]     → Cascade, intent'e göre Sonnet/DeepSeek/Opus
[4. Observer AI]       → Mevcut, 24sa retrospektif kalite
```

**Hedeflenen sonuç:**
- Aylık LLM faturası %50-60 düşer
- Abuse/injection saldırıları sales agent'a ulaşmaz
- Per-conversation cost cap ile maliyet patlaması imkansız
- Aşama 4 trafiği gelmeden sistem hardened

**Verilmiş kararlar (28 Nisan 2026):**
- **Router model:** Claude Haiku 4.5 (kalite + hız dengesi en iyi)
- **Mimari:** Hibrit — %70 string fast-path + %30 router AI
- **Few-shot tone:** Karma — Özgür birkaç gerçek WhatsApp konuşması paylaşır + AI 4 arketip için (Alman çift, Arap aile, Çin solo, Amerikalı bal ayı) yapay örnek üretir, Özgür onaylar
- **Faz sıralaması:** Henüz karar verilmedi — implementasyon başlamadan önce yeniden konuşulacak (A→B→C, B→A→C, paralel?)

#### Faz A — Güvenlik temelleri (~1.5 gün)

| # | İş | Dosya | Süre | Durum |
|---|---|---|---|---|
| 1 | Per-customer conversation cap (20 warn / 40 block, 24sa rolling, manuel açma /aç) | `src/safety/conversation-cap.js` + cap-messages.js + sales.js + telegram-admin.js, migration 018 | 2 sa | ✅ 29 Nis (commit 7fd1978) |
| 2 | ~~Reservation code → nanoid~~ — **KAPATILDI 29 Nis**: mevcut format `BN20260427DKQ3S` zaten random (5ch base36 + tarih), Özgür "yeterli" dedi. Brute force riski düşük. | — | — | ✅ kabul edildi |
| 3 | ~~Tool authorization audit~~ — **ZATEN YAPILMIŞ**: sales.js:218-226 enrichedInput pattern AI input'unu gerçek customer.id ile override ediyor; 4 hassas tool'da DB `eq('customer_id', ...)` koruması var. Saldırgan başkasının kodunu öğrense bile iptal edemez. | — | — | ✅ doğrulandı 29 Nis |
| 4 | Prompt injection guard (2 katmanlı: SAFETY_RULES prompt + ~30 pattern regex pre-filter) | shared-rules.js + system-prompt.js + sales.js + prompt-injection-detector.js | 2 sa | ✅ 29 Nis (commit 2a58ed4) |
| 5 | Anomaly detector v0.1 (3 kural: R1 hızlı tekrar rez, R2 yeni müşteri büyük grup, R3 tg-phone mismatch) | anomaly-detector.js + create-reservation.js | 1.5 sa | ✅ 29 Nis (commit a164351) |

#### Faz B — Akıllı routing (~2 gün)

| # | İş | Dosya | Süre | Durum |
|---|---|---|---|---|
| 6 | String fast-path (kelime → model) | `src/llm/router.js` (üstüne layer) | 4 sa | ☐ |
| 7 | Guard / Router AI (Haiku 4.5, confidence skor) | yeni `src/llm/guard-router.js` | 1 gün | ☐ |
| 8 | Upward escalation on low confidence | `src/llm/router.js` | 4 sa | ☐ |

#### Faz C — Prompt kalitesi (~0.5 gün)

| # | İş | Dosya | Süre | Durum |
|---|---|---|---|---|
| 9 | Few-shot tone örnekleri (4 arketip) | yeni `src/claude/prompts/sales-system.md` | 4 sa | ☐ |

**Erteleme (Aşama 4 trafiği başladıktan sonra):** Tam JS→MD prompt refactor, system prompt audit (~2000 token tekrar temizlik), Observer audit log derinleştirme — ölçüm verisiyle yapılacak.

**Verification:** Plan dosyasındaki "Verification" bölümüne bak.

---

### Eski "Aşama 2" talimatları aşağıda arşiv olarak tutuluyor (referans)

### Eski Amaç (Aşama 2 — tamamlandı)
Node.js + Express backend iskeleti kurmak. Supabase'e bağlanmak. İlk endpoint'leri açmak.

### Adım Adım Yapılacaklar

#### 1. Ortam Kontrolü
- `node --version` (v20+ olmalı, değilse Özgür'e Windows için kurulum talimatı ver)
- `npm --version`

#### 2. package.json
- `npm init -y` çalıştır, sonra düzenle:
  - `"name": "bosphorus-night-ai"`
  - `"version": "0.1.0"`
  - `"description": "Bosphorus Night — Autonomous AI system for sales and operations"`
  - `"main": "src/index.js"`
  - `"type": "module"` (ES modules)
  - `"scripts"`:
    - `"start": "node src/index.js"`
    - `"dev": "nodemon src/index.js"`
    - `"db:check": "node src/scripts/db-check.js"`

#### 3. Dependencies
```
npm install express @supabase/supabase-js @anthropic-ai/sdk dotenv pino pino-pretty
npm install -D nodemon
```

#### 4. Klasör Yapısı (CLAUDE.md § 12'deki yapı + placeholder TODO'lar)
```
src/
├── index.js                    (DOLU)
├── config.js                   (DOLU)
├── db/
│   ├── supabase.js             (DOLU)
│   └── queries/.gitkeep
├── channels/
│   ├── whatsapp.js             (// TODO Aşama 4)
│   ├── telegram.js             (// TODO Aşama 8)
│   ├── wechat.js               (// TODO Aşama 8)
│   └── web-form.js             (// TODO Aşama 4)
├── agents/
│   ├── orchestrator.js         (// TODO Aşama 3)
│   ├── sales.js                (// TODO Aşama 4)
│   ├── ops.js                  (// TODO Aşama 6)
│   └── voice.js                (// TODO Aşama 9)
├── claude/
│   ├── client.js               (// TODO Aşama 3)
│   ├── memory.js               (// TODO Aşama 3)
│   └── prompts/.gitkeep
├── safety/
│   ├── approval-queue.js       (// TODO Aşama 5)
│   ├── escalation.js           (// TODO Aşama 5)
│   ├── kill-switch.js          (// TODO Aşama 5)
│   └── anomaly-detector.js     (// TODO Aşama 5)
├── scheduled/
│   ├── pre-tour.js             (// TODO Aşama 6)
│   ├── during-tour.js          (// TODO Aşama 6)
│   ├── post-tour.js            (// TODO Aşama 6)
│   └── follow-up.js            (// TODO Aşama 6)
├── utils/
│   ├── logger.js               (DOLU)
│   ├── language.js             (// TODO Aşama 3)
│   └── ticket-pdf.js           (// TODO Aşama 4)
└── scripts/
    └── db-check.js             (DOLU — Supabase bağlantı testi)
```

#### 5. `.gitignore`
```
node_modules/
.env
*.log
dist/
.DS_Store
Thumbs.db
.vscode/
.idea/
```

#### 6. `.env.example`
```
# Server
PORT=3000
NODE_ENV=development

# Supabase (yeni API Keys sistemi — Publishable + Secret)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
# Supabase DB (migration/seed için direkt postgres bağlantısı)
SUPABASE_DB_HOST=db.your-project.supabase.co
SUPABASE_DB_PORT=5432
SUPABASE_DB_USER=postgres
SUPABASE_DB_NAME=postgres
SUPABASE_DB_PASSWORD=

# Anthropic (Aşama 3'te dolacak)
ANTHROPIC_API_KEY=
CLAUDE_MODEL=claude-sonnet-4-5
CLAUDE_MODEL_ORCHESTRATOR=claude-opus-4-7

# Business
OWNER_WHATSAPP=+905322442922
BUSINESS_TIMEZONE=Europe/Istanbul
DEFAULT_LANGUAGE=en
SUPPORTED_LANGUAGES=en,tr,de,es,ru,ar,fr,it,zh,hi,ur

# Safety
APPROVAL_QUEUE_ENABLED=true
KILL_SWITCH_ENABLED=true
APPROVAL_QUEUE_TIMEOUT_SEC=60

# Logging
LOG_LEVEL=info
```

#### 7. `src/config.js`
- `dotenv/config` import
- Tüm env'leri parse + export
- Zorunlu kontrol: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`
- Eksikse net hata + program durur
- Opsiyonel eksik → uyarı

#### 8. `src/utils/logger.js`
- pino + pino-pretty
- Dev: renkli, okunabilir; Prod: JSON
- Timestamp + level + message
- Export: `logger`

#### 9. `src/db/supabase.js`
İki client:
- `supabasePublic` — publishable key (tarayıcı/public tarafı için)
- `supabaseAdmin` — secret key (sunucu tarafı, tüm yetki)
- Auth disable: `{ auth: { persistSession: false, autoRefreshToken: false } }`

#### 10. `src/index.js`
- Express + JSON body parser
- Logger middleware (her request log)
- Endpoints:
  - `GET /` → `{ name, version, status }`
  - `GET /health` → `{ status, timestamp, uptime }`
  - `GET /db-check` → Supabase packages tablosundan ilk 5 kayıt
- 404 handler + global error handler
- `app.listen(PORT, ...)` ile başlat

#### 11. `src/scripts/db-check.js`
`npm run db:check` ile çalışır:
- Supabase admin client
- packages + addons tablolarını çek
- Sayıları + kayıtları konsola bas

#### 12. `README.md`
- Proje adı + amaç
- Kurulum: `npm install`
- Çalıştır: `npm run dev`
- `.env.example` → `.env` kopyala
- Endpoint listesi
- DB test: `npm run db:check`

### Yapma Şu An
- ❌ `git init` (sonra)
- ❌ Claude API entegrasyonu (Aşama 3)
- ❌ WhatsApp/Twilio (Aşama 4)
- ❌ Hetzner deploy (sonra)

### Tamamlandığında Özgür'e Bildir
1. Oluşturulan dosya listesi
2. `npm install` başarılı mı
3. Sıradaki adım: `.env` doldurması lazım
4. Hangi 3 değer:
   - `SUPABASE_URL` = `https://kknbiemjtcfpuznyptai.supabase.co`
   - `SUPABASE_PUBLISHABLE_KEY` (Supabase dashboard → Settings → API Keys → Publishable key → default → `sb_publishable_...`)
   - `SUPABASE_SECRET_KEY` (aynı sayfa → Secret keys, ⚠️ gizli, `sb_secret_...`)

### Tarz Kuralları
- Kod yorumları: İngilizce
- Console/log mesajları: Türkçe (Özgür okuyacak)
- ES module syntax (`import/export`, `type: "module"`)
- Modern JS (async/await, optional chaining)
- Her async fonksiyonda try/catch

---

## 17. PROJE DOSYALARI — REFERANSLAR

**`C:\Projects\bosphorus-night-ai\AŞAMALAR.md`** — Her aşamanın detaylı uygulama rehberi
- Aşama 3'ten Aşama 10'a kadar her aşama için adım adım talimat
- Her aşamaya başlamadan önce ilgili bölümü oku
- "GİRİŞ KONTROLÜ", "Özgür'den toplanacak veriler", "Teknik uygulama", "Canlı test", "Başarı kriterleri" bölümleri var
- Aşama 2 tamamlanınca → AŞAMALAR.md'de Aşama 3'e bak
- Detaylı aşama talimatları için **AŞAMALAR.md dosyasına bak**

---

## 18. ÇALIŞMA KURALI

Bir aşamadan diğerine geçerken bu dosyanın § 4 bölümündeki "Aşama X — Durum" satırını ✅ olarak güncelle. Yeni kararlar çıkarsa ilgili bölüme ekle. Bu dosya projenin canlı belleği.

**Her yeni Claude Code oturumunda:**
1. Bu dosyayı oku
2. Özgür'e "nerede kaldık" diye sorma — sen söyle
3. Sıradaki adımı öner, onayla, başla

---

**DOSYA SONU**
