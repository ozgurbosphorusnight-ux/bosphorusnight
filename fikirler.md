# Fikirler & Geliştirme Planı

> Bu dosya sitede yapılacak geliştirme fikirlerini, durumlarını ve notlarını içerir.
> Son güncelleme: 2026-04-01

---

## Onaylanan Fikirler

### 1. Canlı Fiyat Hesaplayıcı (Interactive Price Calculator)
- **Ne:** Müşteri tekne + paket + kişi sayısı + ekstraları (alkol, transfer, romantik masa, evlilik teklifi) seçer, anlık toplam fiyatı görür
- **Sonuç:** "Book via WhatsApp" butonuna basınca tüm seçimler hazır mesaj olarak WhatsApp'a gider
- **Neden:** Müşteri net fiyatı görünce karar vermesi hızlanır. WhatsApp'a düşen mesaj hazır olur, AI chatbot'un işi kolaylaşır
- **Durum:** [ ] Bekliyor

### 2. Tonight's Cruise — Canlı Durum Bloğu
- **Ne:** "Tonight's cruise departs at 21:00 — 12 spots left" + doluluk progress bar
- **Neden:** Urgency + scarcity = en güçlü satış tetikleyicisi. "Bu akşam bir şey yapalım" diyen turist için kritik
- **Not:** Başlangıçta saate/güne göre değişen simüle veri, ileride gerçek doluluk verisi bağlanacak
- **Durum:** [ ] Bekliyor

### 3. Compare Packages — Karşılaştırma Tablosu
- **Ne:** Tekne ve paketleri yan yana karşılaştırma tablosu veya toggle ile "bu pakette ne var, şunda ne var"
- **Neden:** 3 tekne x 3 paket = 9 kombinasyon. Müşteri kaybolabiliyor. Karşılaştırma karar vermeyi hızlandırır
- **Durum:** [ ] Bekliyor

### 4. WhatsApp Akıllı Ön-Doldurulmuş Mesajlar
- **Ne:** Her CTA butonundan farklı bir ön mesaj gider. Paket kartından: "Hi! I'd like to book the Premium package on the Luxury Yacht for tonight, 2 guests."
- **Neden:** Müşteri ne yazacağını düşünmez, chatbot doğru akışa girer
- **Not:** Fiyat hesaplayıcı ile entegre çalışacak — seçimler otomatik mesaja dönüşecek
- **Durum:** [ ] Bekliyor

### 5. Hava Durumu Entegrasyonu
- **Ne:** Hero veya Last-Minute bölümünde İstanbul'un o anki hava durumu: "Tonight: 22°C, Clear skies — Perfect for a cruise!"
- **Neden:** Gece turu satılıyor. "Hava güzel" bilgisi = "bu gece gidelim" kararı. Yağmurda "Indoor dining available" mesajı
- **API:** OpenWeatherMap veya WeatherAPI (ücretsiz tier yeterli)
- **Durum:** [ ] Bekliyor

### 6. Exit-Intent Popup
- **Ne:** Kullanıcı siteden çıkmak üzereyken: "Wait! Get 10% off tonight's cruise — Chat with us now" + WhatsApp butonu
- **Tetikleme:** Desktop: fare tarayıcı üstüne çıkınca. Mobil: scroll-up veya geri butonu
- **Neden:** Kaybedilmek üzere olan müşteriyi son hamleyle yakalama
- **Not:** Sadece 1 kez gösterilecek (session başına), agresif olmamalı
- **Durum:** [ ] Bekliyor

### 7. Instagram Canlı Feed
- **Ne:** Instagram'dan son paylaşımları çeken küçük bir grid, galeri bölümüne veya altına
- **Neden:** Stok fotoğraf yerine gerçek içerik = güven. Hesap açıldığında site otomatik beslenir
- **Bağımlılık:** Instagram Business hesabı açılması gerekiyor
- **Durum:** [ ] Bekliyor

---

## Reddedilen / Ertelenen Fikirler

### Kalkış Noktası Haritası + "How to Get There"
- **Karar:** Farklı düşünülecek
- **Not:** Fikir kötü değil ama farklı bir yaklaşım aranacak

### Saat Bazlı Dinamik Karşılama Mesajları
- **Karar:** Farklı düşünülecek
- **Not:** Countdown zaten var, üzerine eklenmesi düşünülecek

### "Build Your Evening" Mini Wizard
- **Karar:** Farklı düşünülecek
- **Not:** Fiyat hesaplayıcı benzer bir işlev görecek, wizard ayrıca gerekli olmayabilir

### Rota Animasyonu (Boğaz Haritası)
- **Karar:** Farklı düşünülecek
- **Not:** Güzel fikir ama teknik olarak farklı bir yaklaşım aranacak

### Exit-Intent Popup (İlk Versiyon)
- **Karar:** Farklı düşünülecek → Sonra onaylandı (yukarıda)

### Segment Seçimi (Couples / Families / Groups)
- **Karar:** Sitede yapılmayacak
- **Not:** AI chatbot WhatsApp'ta otomatik yapacak: "Is this for a special occasion?" / "How many guests?"

---

## Uygulama Öncelik Sırası (Önerilen)

| Sıra | Özellik | Zorluk | Etki | Bağımlılık |
|------|---------|--------|------|------------|
| 1 | WhatsApp Akıllı Mesajlar | Kolay | Yüksek | Yok |
| 2 | Fiyat Hesaplayıcı | Orta | Çok Yüksek | Yok |
| 3 | Tonight's Cruise Bloğu | Kolay | Yüksek | Yok |
| 4 | Karşılaştırma Tablosu | Orta | Orta-Yüksek | Yok |
| 5 | Exit-Intent Popup | Kolay | Orta | Yok |
| 6 | Hava Durumu | Orta | Orta | API key |
| 7 | Instagram Feed | Orta | Orta | Instagram hesabı |

---

## Belki İleride Yapılacaklar (Parking Lot)

### 8. Tarih Seçici (Date Picker)
- **Ne:** Basit takvim — müşteri hangi gece gitmek istediğini seçer. Seçilen tarih WhatsApp mesajına otomatik eklenir. Bugün seçilirse "Tonight!" vurgusu + countdown
- **Neden:** "Yarın gitmek istiyorum" diyen turist için net akış. AI chatbot'a tarih hazır gider
- **Durum:** 🔵 Belki ileride

### 9. "Cruise Experience" Mini Video Trailer (15-30 sn)
- **Ne:** Hero bölümünde play butonu olan kısa tanıtım videosu. Boğaz manzarası, yemek, eğlence, gülümseyen misafirler — hızlı kesimlerle
- **Neden:** 15 saniyelik video dönüşümü ciddi artırır. Fotoğrafın anlattığını video 10 kat güçlü anlatır
- **Bağımlılık:** Gerçek video içeriği gerekiyor
- **Durum:** 🔵 Belki ileride

### 14. "Ask a Question" Hızlı Butonlar
- **Ne:** FAQ bölümünde veya floating olarak hazır soru butonları: "Can I book for tonight?" / "Is transfer included?" / "What's on the menu?" — tıklayınca WhatsApp'a o soru hazır gider
- **Neden:** FAQ okuyan ama emin olmayan müşteriyi WhatsApp'a yönlendirir. Sorulardan satışa geçiş
- **Durum:** 🔵 Belki ileride

### 16. Çoklu Kalkış Noktası Seçimi
- **Ne:** Kabataş mı Eminönü mü? Müşteri kalkış noktasını seçsin, seçim WhatsApp mesajına eklensin. "Which one is closer to my hotel?" → WhatsApp'a yönlendirme
- **Neden:** Turist "nereden biniyorum" stresini siteye girmeden çözer
- **Durum:** 🔵 Belki ileride

---

## Notlar
- Tüm özellikler mobile-first tasarlanacak
- Mevcut tasarım diline uygun olacak (dark navy, gold accent, premium hissi)
- Her özellik 6 dil desteğiyle uyumlu olacak (translations.js)
- Fiyat hesaplayıcı + akıllı WhatsApp mesajları birlikte çalışacak
- Tonight's Cruise bloğu mevcut countdown ile entegre edilebilir
