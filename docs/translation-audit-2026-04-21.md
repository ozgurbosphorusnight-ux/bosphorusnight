# Translation Audit — 2026-04-21

Tüm `dist/{lang}/*.html` dosyalarında sistematik kontrol.

## Dil bazlı özet

| lang | files | issues | breakdown |
|---|---:|---:|---|
| tr | 18 | 0 | - |
| de | 18 | 156 | alt-english-leak=36, data-activity-english-leak=36, description-english-leak=18, og-english-leak:og:description=18, turkish-comment=18, title-english-leak=15, og-english-leak:og:title=15 |
| es | 18 | 80 | data-activity-english-leak=36, turkish-comment=18, title-english-leak=7, og-english-leak:og:title=7, description-english-leak=6, og-english-leak:og:description=6 |
| ru | 18 | 18 | turkish-comment=18 |
| ar | 18 | 18 | turkish-comment=18 |
| fa | 18 | 18 | turkish-comment=18 |
| fr | 18 | 96 | alt-english-leak=54, turkish-comment=18, description-english-leak=7, og-english-leak:og:description=7, title-english-leak=5, og-english-leak:og:title=5 |
| it | 18 | 88 | alt-english-leak=36, turkish-comment=18, title-english-leak=9, og-english-leak:og:title=9, description-english-leak=8, og-english-leak:og:description=8 |
| zh | 18 | 18 | turkish-comment=18 |
| id | 18 | 66 | alt-english-leak=36, turkish-comment=18, description-english-leak=5, og-english-leak:og:description=5, title-english-leak=1, og-english-leak:og:title=1 |
| ms | 18 | 24 | turkish-comment=18, description-english-leak=3, og-english-leak:og:description=3 |
| pl | 18 | 58 | alt-english-leak=36, turkish-comment=18, description-english-leak=2, og-english-leak:og:description=2 |
| bg | 18 | 18 | turkish-comment=18 |
| ro | 18 | 22 | turkish-comment=18, description-english-leak=2, og-english-leak:og:description=2 |
| en | 18 | 293 | en-has-turkish-chars=275, turkish-comment=18 |

## Kategori bazlı toplam (tüm diller birleşik)

| category | count |
|---|---:|
| en-has-turkish-chars | 275 |
| turkish-comment | 252 |
| alt-english-leak | 198 |
| data-activity-english-leak | 72 |
| description-english-leak | 51 |
| og-english-leak:og:description | 51 |
| title-english-leak | 37 |
| og-english-leak:og:title | 37 |

## Örnek bulgular (dil bazlı, her kategori için 3 örnek)

### de

**title-english-leak**
- `dist/de/bosphorus-cruise-tickets.html:205` — Bosporus-Cruise-Tickets — Direktbuchung, ab €24 Zahlung an Bord
- `dist/de/bosphorus-dinner-cruise.html:205` — Bosporus-Dinner-Cruise Istanbul — Premium-Nachttour ab €24
- `dist/de/bosphorus-for-couples.html:205` — Bosporus-Tour für Paare — Date Night auf dem Wasser | Istanbul

**description-english-leak**
- `dist/de/bosphorus-cruise-tickets.html:206` — Kaufen Sie Bosporus-Cruise-Tickets direkt. Standard €24, VIP €55. Keine Vorauszahlung, Zah
- `dist/de/bosphorus-dinner-cruise.html:206` — Istanbuls bestbewertete Bosporus-Schifffahrt mit Dinner. 3-stündige Abendfahrt, mehrgängig
- `dist/de/bosphorus-for-couples.html:206` — Bosporus-Dinner-Cruise für Paare. Privater Tisch, beleuchtete Brücken, Livemusik, Option f

**og-english-leak:og:title**
- `dist/de/bosphorus-cruise-tickets.html:207` — Bosporus-Cruise-Tickets — Direktbuchung, ab €24 Zahlung an Bord
- `dist/de/bosphorus-dinner-cruise.html:207` — Bosporus-Dinner-Cruise Istanbul — Premium-Nachttour ab €24
- `dist/de/bosphorus-for-couples.html:207` — Bosporus-Tour für Paare — Date Night auf dem Wasser | Istanbul

**og-english-leak:og:description**
- `dist/de/bosphorus-cruise-tickets.html:208` — Kaufen Sie Bosporus-Cruise-Tickets direkt. Standard €24, VIP €55. Keine Vorauszahlung, Zah
- `dist/de/bosphorus-dinner-cruise.html:208` — Istanbuls bestbewertete Bosporus-Schifffahrt mit Dinner. 3-stündige Abendfahrt, mehrgängig
- `dist/de/bosphorus-for-couples.html:208` — Bosporus-Dinner-Cruise für Paare. Privater Tisch, beleuchtete Brücken, Livemusik, Option f

**alt-english-leak**
- `dist/de/bosphorus-cruise-tickets.html:992` — alt="Bauchtanz-Show"
- `dist/de/bosphorus-cruise-tickets.html:1040` — alt="Tanzende-Derwische-Show"
- `dist/de/bosphorus-dinner-cruise.html:995` — alt="Bauchtanz-Show"

**data-activity-english-leak**
- `dist/de/bosphorus-cruise-tickets.html:282` — data-activity="💃 Volkstanz-Show beginnt"
- `dist/de/bosphorus-cruise-tickets.html:289` — data-activity="🔥 Bauchtanz-Show"
- `dist/de/bosphorus-dinner-cruise.html:282` — data-activity="💃 Volkstanz-Show beginnt"

**turkish-comment**
- `dist/de/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/de/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/de/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

### es

**data-activity-english-leak**
- `dist/es/bosphorus-cruise-tickets.html:282` — data-activity="💃 Comienza el show de danzas folclóricas"
- `dist/es/bosphorus-cruise-tickets.html:289` — data-activity="🔥 Show de danza del vientre"
- `dist/es/bosphorus-dinner-cruise.html:282` — data-activity="💃 Comienza el show de danzas folclóricas"

**turkish-comment**
- `dist/es/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/es/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/es/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**title-english-leak**
- `dist/es/bosphorus-dinner-cruise.html:205` — Crucero con Cena por el Bósforo Estambul — Tour Nocturno Premium, desde €24
- `dist/es/bosphorus-night-tour.html:205` — Tour Nocturno por el Bósforo — Crucero con Cena en Estambul Iluminado
- `dist/es/bosphorus-trip.html:205` — Excursión por el Bósforo — Experiencia Premium de Tour Estambul, desde €24

**og-english-leak:og:title**
- `dist/es/bosphorus-dinner-cruise.html:207` — Crucero con Cena por el Bósforo Estambul — Tour Nocturno Premium, desde €24
- `dist/es/bosphorus-night-tour.html:207` — Tour Nocturno por el Bósforo — Crucero con Cena en Estambul Iluminado
- `dist/es/bosphorus-trip.html:207` — Excursión por el Bósforo — Experiencia Premium de Tour Estambul, desde €24

**description-english-leak**
- `dist/es/bosphorus-night-tour.html:206` — Tour nocturno por el Bósforo con cena y espectáculo en vivo. Salida 21:00, puentes ilumina
- `dist/es/bosphorus-sightseeing.html:206` — El tour turístico por el Bósforo cubre todos los grandes monumentos: Dolmabahçe, Mezquita 
- `dist/es/bosphorus-sunset-cruise.html:206` — Crucero al atardecer por el Bósforo en Estambul. Embarque a las 17:30, contemple cómo Dolm

**og-english-leak:og:description**
- `dist/es/bosphorus-night-tour.html:208` — Tour nocturno por el Bósforo con cena y espectáculo en vivo. Salida 21:00, puentes ilumina
- `dist/es/bosphorus-sightseeing.html:208` — El tour turístico por el Bósforo cubre todos los grandes monumentos: Dolmabahçe, Mezquita 
- `dist/es/bosphorus-sunset-cruise.html:208` — Crucero al atardecer por el Bósforo en Estambul. Embarque a las 17:30, contemple cómo Dolm

### ru

**turkish-comment**
- `dist/ru/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ru/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ru/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

### ar

**turkish-comment**
- `dist/ar/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ar/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ar/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

### fa

**turkish-comment**
- `dist/fa/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/fa/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/fa/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

### fr

**alt-english-leak**
- `dist/fr/bosphorus-cruise-tickets.html:949` — alt="Table premium"
- `dist/fr/bosphorus-cruise-tickets.html:962` — alt="Table de dîner élégante"
- `dist/fr/bosphorus-cruise-tickets.html:1030` — alt="Steak premium et vin"

**turkish-comment**
- `dist/fr/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/fr/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/fr/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**title-english-leak**
- `dist/fr/bosphorus-dinner-cruise.html:205` — Croisière dîner Bosphore Istanbul — Soirée premium, dès €24
- `dist/fr/bosphorus-trip.html:205` — Excursion sur le Bosphore — Expérience premium à Istanbul, dès €24
- `dist/fr/bosphorus-vip.html:205` — Croisière VIP Bosphore — Dîner premium, tables face à la scène | Istanbul

**og-english-leak:og:title**
- `dist/fr/bosphorus-dinner-cruise.html:207` — Croisière dîner Bosphore Istanbul — Soirée premium, dès €24
- `dist/fr/bosphorus-trip.html:207` — Excursion sur le Bosphore — Expérience premium à Istanbul, dès €24
- `dist/fr/bosphorus-vip.html:207` — Croisière VIP Bosphore — Dîner premium, tables face à la scène | Istanbul

**description-english-leak**
- `dist/fr/bosphorus-for-couples.html:206` — Croisière dîner sur le Bosphore pour couples. Table privée, ponts illuminés, musique live,
- `dist/fr/bosphorus-sightseeing.html:206` — La visite du Bosphore couvre tous les monuments majeurs : Dolmabahçe, mosquée d'Ortaköy, p
- `dist/fr/bosphorus-vip.html:206` — Croisière dîner VIP sur le Bosphore à Istanbul. Mezzés premium, choix de steak, tables fac

**og-english-leak:og:description**
- `dist/fr/bosphorus-for-couples.html:208` — Croisière dîner sur le Bosphore pour couples. Table privée, ponts illuminés, musique live,
- `dist/fr/bosphorus-sightseeing.html:208` — La visite du Bosphore couvre tous les monuments majeurs : Dolmabahçe, mosquée d'Ortaköy, p
- `dist/fr/bosphorus-vip.html:208` — Croisière dîner VIP sur le Bosphore à Istanbul. Mezzés premium, choix de steak, tables fac

### it

**alt-english-leak**
- `dist/it/bosphorus-cruise-tickets.html:948` — alt="Tavolo premium"
- `dist/it/bosphorus-cruise-tickets.html:1028` — alt="Bistecca premium e vino"
- `dist/it/bosphorus-dinner-cruise.html:951` — alt="Tavolo premium"

**turkish-comment**
- `dist/it/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/it/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/it/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**title-english-leak**
- `dist/it/bosphorus-dinner-cruise.html:205` — Crociera con Cena sul Bosforo Istanbul — Tour Notturno Premium, da €24
- `dist/it/bosphorus-for-couples.html:205` — Tour del Bosforo per Coppie — Serata Romantica sull'Acqua | Istanbul
- `dist/it/bosphorus-night-tour.html:205` — Tour Notturno sul Bosforo — Crociera con Cena nella Istanbul Illuminata

**og-english-leak:og:title**
- `dist/it/bosphorus-dinner-cruise.html:207` — Crociera con Cena sul Bosforo Istanbul — Tour Notturno Premium, da €24
- `dist/it/bosphorus-for-couples.html:207` — Tour del Bosforo per Coppie — Serata Romantica sull'Acqua | Istanbul
- `dist/it/bosphorus-night-tour.html:207` — Tour Notturno sul Bosforo — Crociera con Cena nella Istanbul Illuminata

**description-english-leak**
- `dist/it/bosphorus-night-tour.html:206` — Tour notturno sul Bosforo con cena e spettacolo dal vivo. Partenza alle 21:00, ponti illum
- `dist/it/bosphorus-sightseeing.html:206` — Il tour di visita al Bosforo copre ogni grande monumento: Dolmabahçe, Moschea di Ortaköy, 
- `dist/it/bosphorus-sunset-cruise.html:206` — Crociera al tramonto sul Bosforo a Istanbul. Imbarco alle 17:30, osservi Dolmabahçe e la M

**og-english-leak:og:description**
- `dist/it/bosphorus-night-tour.html:208` — Tour notturno sul Bosforo con cena e spettacolo dal vivo. Partenza alle 21:00, ponti illum
- `dist/it/bosphorus-sightseeing.html:208` — Il tour di visita al Bosforo copre ogni grande monumento: Dolmabahçe, Moschea di Ortaköy, 
- `dist/it/bosphorus-sunset-cruise.html:208` — Crociera al tramonto sul Bosforo a Istanbul. Imbarco alle 17:30, osservi Dolmabahçe e la M

### zh

**turkish-comment**
- `dist/zh/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/zh/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/zh/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

### id

**alt-english-leak**
- `dist/id/bosphorus-cruise-tickets.html:1027` — alt="Steak Premium & Wine"
- `dist/id/bosphorus-cruise-tickets.html:1119` — alt="Kebab Ayam & Wine"
- `dist/id/bosphorus-dinner-cruise.html:1030` — alt="Steak Premium & Wine"

**turkish-comment**
- `dist/id/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/id/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/id/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**description-english-leak**
- `dist/id/bosphorus-night-tour.html:206` — Tur malam Bosphorus dengan makan malam dan pertunjukan langsung. Keberangkatan 21:00, jemb
- `dist/id/bosphorus-vip.html:206` — Pelayaran makan malam VIP Bosphorus di Istanbul. Meze premium, pilihan steak, tempat duduk
- `dist/id/bosphorus-with-kids.html:206` — Pelayaran makan malam Bosphorus ramah keluarga. Usia 0-3 tahun gratis, usia 4-8 tahun sete

**og-english-leak:og:description**
- `dist/id/bosphorus-night-tour.html:208` — Tur malam Bosphorus dengan makan malam dan pertunjukan langsung. Keberangkatan 21:00, jemb
- `dist/id/bosphorus-vip.html:208` — Pelayaran makan malam VIP Bosphorus di Istanbul. Meze premium, pilihan steak, tempat duduk
- `dist/id/bosphorus-with-kids.html:208` — Pelayaran makan malam Bosphorus ramah keluarga. Usia 0-3 tahun gratis, usia 4-8 tahun sete

**title-english-leak**
- `dist/id/bosphorus-sunset-cruise.html:205` — Pelayaran Matahari Terbenam Bosphorus — Golden Hour & Makan Malam | Istanbul

**og-english-leak:og:title**
- `dist/id/bosphorus-sunset-cruise.html:207` — Pelayaran Matahari Terbenam Bosphorus — Golden Hour & Makan Malam | Istanbul

### ms

**turkish-comment**
- `dist/ms/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ms/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ms/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**description-english-leak**
- `dist/ms/bosphorus-vip.html:206` — Pelayaran makan malam VIP Bosphorus di Istanbul. Meze premium, pilihan stik, tempat duduk 
- `dist/ms/bosphorus-with-kids.html:206` — Pelayaran makan malam Bosphorus mesra keluarga. Umur 0-3 percuma, 4-8 separuh harga. Ruang
- `dist/ms/private-bosphorus-cruise.html:206` — Sewa pelayaran peribadi Bosphorus untuk kumpulan, keluarga, acara korporat, majlis perkahw

**og-english-leak:og:description**
- `dist/ms/bosphorus-vip.html:208` — Pelayaran makan malam VIP Bosphorus di Istanbul. Meze premium, pilihan stik, tempat duduk 
- `dist/ms/bosphorus-with-kids.html:208` — Pelayaran makan malam Bosphorus mesra keluarga. Umur 0-3 percuma, 4-8 separuh harga. Ruang
- `dist/ms/private-bosphorus-cruise.html:208` — Sewa pelayaran peribadi Bosphorus untuk kumpulan, keluarga, acara korporat, majlis perkahw

### pl

**alt-english-leak**
- `dist/pl/bosphorus-cruise-tickets.html:947` — alt="Aranżacja stołu premium"
- `dist/pl/bosphorus-cruise-tickets.html:1026` — alt="Stek premium i wino"
- `dist/pl/bosphorus-dinner-cruise.html:949` — alt="Aranżacja stołu premium"

**turkish-comment**
- `dist/pl/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/pl/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/pl/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**description-english-leak**
- `dist/pl/bosphorus-with-kids.html:206` — Rodzinny rejs z kolacją po Bosforze. Dzieci 0-3 lata bezpłatnie, 4-8 lat za pół ceny. Zada
- `dist/pl/private-bosphorus-cruise.html:206` — Prywatny rejs po Bosforze z wynajmem dla grup, rodzin, wydarzeń firmowych, ślubów. Wyłączn

**og-english-leak:og:description**
- `dist/pl/bosphorus-with-kids.html:208` — Rodzinny rejs z kolacją po Bosforze. Dzieci 0-3 lata bezpłatnie, 4-8 lat za pół ceny. Zada
- `dist/pl/private-bosphorus-cruise.html:208` — Prywatny rejs po Bosforze z wynajmem dla grup, rodzin, wydarzeń firmowych, ślubów. Wyłączn

### bg

**turkish-comment**
- `dist/bg/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/bg/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/bg/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

### ro

**turkish-comment**
- `dist/ro/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ro/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/ro/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la

**description-english-leak**
- `dist/ro/bosphorus-vip.html:206` — Croazieră VIP cu cină pe Bosfor în Istanbul. Mezeluri premium, opțiuni de steak, locuri în
- `dist/ro/bosphorus-with-kids.html:206` — Croazieră cu cină pe Bosfor prietenoasă cu familiile. 0-3 ani gratuit, 4-8 ani la jumătate

**og-english-leak:og:description**
- `dist/ro/bosphorus-vip.html:208` — Croazieră VIP cu cină pe Bosfor în Istanbul. Mezeluri premium, opțiuni de steak, locuri în
- `dist/ro/bosphorus-with-kids.html:208` — Croazieră cu cină pe Bosfor prietenoasă cu familiile. 0-3 ani gratuit, 4-8 ani la jumătate

### en

**en-has-turkish-chars**
- `dist/en/bosphorus-cruise-tickets.html:503` — Türkçe
- `dist/en/bosphorus-cruise-tickets.html:506` — Français
- `dist/en/bosphorus-cruise-tickets.html:916` — Warm appetizer: paçanga börek (beef pastırma & kashar cheese)

**turkish-comment**
- `dist/en/bosphorus-cruise-tickets.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/en/bosphorus-dinner-cruise.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
- `dist/en/bosphorus-for-couples.html:282` — <div class="route-marker" data-section="tour-daytime" data-svg="ciragan" data-la
