/**
 * Romanian translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 * Formal polite register (dumneavoastră).
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Croazieră cu Cină pe Bosfor Istanbul — Tur Nocturn Premium, de la €{p.dinnerStd}',
      description: 'Cea mai apreciată croazieră cu cină pe Bosfor din Istanbul. Croazieră nocturnă de 3 ore, bucătărie turcească, dansuri populare live și DJ, priveliști panoramice ale Istanbulului nocturn. Licențiat TÜRSAB. Plata pe vapor — fără plată în avans.'
    },
    hero: {
      h1: 'Croazieră cu Cină pe Bosfor în Istanbul',
      subtitle: 'Trei ore de divertisment live, o cină turcească generoasă cu multiple feluri și cele mai impresionante priveliști nocturne ale Bosforului.',
      badge: '4,8★ · 11.317 recenzii'
    },
    intro: [
      '**Croaziera cu cină pe Bosfor** este cea mai iconică experiență de seară din Istanbul. Turul nostru pleacă la ora 20:00 de la debarcaderul Kabataș și navighează pe sub podurile Bosfor și Fatih Sultan Mehmet iluminate, oferindu-vă o cină turcească cu multiple feluri, dansuri populare live, dans oriental și un set DJ care animă puntea până la 23:00.',
      'Spre deosebire de vapoarele obișnuite care populează peisajul nocturn al Istanbulului, **croaziera noastră cu cină pe Bosfor** este licențiată TÜRSAB (A-17672) și evaluată cu 4,8★ de peste 11.317 călători pe Google și TripAdvisor. Menținem grupurile mici și serviciul călduros — și, pentru că plătiți pe vapor, nu există niciun risc în a face rezervarea în avans.',
      'Fie că sărbătoriți o aniversare, căutați o seară premium în Istanbul pentru familia dumneavoastră, fie că doriți cea mai fotogenică tranziție apus-noapte a orașului — aceasta este croaziera cu cină recomandată în primul rând de localnicii din Istanbul.'
    ],
    highlights: [
      { title: 'Cină turcească cu multiple feluri', desc: '10 sortimente de mezeluri, aperitiv cald (paçanga böreği), alegere de fel principal (somon / biban de mare / pui / chiftele / vegetarian), tort cu înghețată la desert, băuturi răcoritoare nelimitate.' },
      { title: 'Dansuri populare live, dans oriental și DJ', desc: 'Spectacol Mevlana sema, 5 dansuri populare turcești tradiționale, dans oriental clasic, muzicieni turci live, urmați de un set DJ pe durata întregii croaziere.' },
      { title: 'Traseul complet nocturn al Bosforului', desc: 'Kabataș → Dolmabahçe → Palatul Çırağan → Moscheea Ortaköy → Bebek → Rumeli Hisarı → Podul FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataș.' },
      { title: 'De la €{p.dinnerStd}/persoană — plata pe vapor', desc: 'Croazieră Standard €{p.dinnerStd} (fost €{p.dinnerStdOriginal}). Croaziera VIP cu loc în față la scenă și meniu premium €{p.dinnerVip}. Fără plată în avans. Anulare gratuită cu până la 2 ore înainte de plecare.' }
    ],
    faq: [
      { q: 'Când începe croaziera cu cină pe Bosfor?', a: 'Îmbarcarea începe la ora 20:00 la debarcaderul Kabataș. Vaporul pleacă la 21:00 și se întoarce în jurul orei 00:00. Vă recomandăm să ajungeți cu 15-20 de minute mai devreme pentru a vă așeza și a vă relaxa.' },
      { q: 'Cât costă croaziera cu cină pe Bosfor?', a: 'Croaziera Standard €{p.dinnerStd}/persoană (preț normal €{p.dinnerStdOriginal}). Croaziera VIP cu loc în față la scenă și meniu premium €{p.dinnerVip}/persoană. 0-3 ani gratuit, 4-8 ani cu 50% reducere. Plata se face pe vapor — fără plată în avans.' },
      { q: 'Alcoolul este inclus în croaziera cu cină?', a: 'Băuturile răcoritoare nelimitate (apă, cola, suc) sunt incluse în preț. Pachetele cu alcool sunt opționale: 2 pahare +€{p.alcohol2}/persoană sau alcool local nelimitat (vin, bere, rachiu, vodcă, gin) +€{p.unlimited}/persoană. Băuturile de import se taxează separat pe vapor.' },
      { q: 'Există transfer de la hotel?', a: 'Da — serviciul de preluare și ducere înapoi este +€{p.transfer}/persoană. Zone deservite: Beșiktaș, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane și Sütlüce. Puteți selecta această opțiune în formularul de rezervare.' },
      { q: 'Croaziera cu cină pe Bosfor este halal?', a: 'Absolut. Toate produsele din carne de pe vapor sunt certificate halal. Alcoolul este un supliment opțional (niciodată impus oaspeților), iar aranjamentul meselor separă în mod natural oaspeții care preferă o masă fără alcool. Oferim și alternative vegetariene fără costuri suplimentare.' },
      { q: 'Ce ar trebui să port?', a: 'Ținută smart casual. Serile la Istanbul pot fi răcoroase chiar și vara — recomandăm o jachetă subțire sau un șal. Nu există cod vestimentar obligatoriu, dar costumele de baie, șlapii sau hainele sport nu sunt potrivite pentru atmosfera cinei.' }
    ],
    cta: {
      primary: 'Rezervați Acum · Plata pe Vapor',
      secondary: 'Anulare gratuită cu până la 2 ore înainte de plecare',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Croazieră pe Bosfor cu Copii — Croazieră cu Cină pentru Familie Istanbul',
      description: 'Croazieră cu cină pe Bosfor prietenoasă cu familiile. 0-3 ani gratuit, 4-8 ani la jumătate de preț. Spațiu interior sigur, meniu pentru copii, plecare devreme. De la €{p.dinnerStd}/adult — plata pe vapor.'
    },
    hero: {
      h1: 'Croazieră pe Bosfor cu Copii',
      subtitle: 'O seară pe Bosfor concepută pentru familiile cu copii — cină, divertisment și o atmosferă sigură și confortabilă.',
      badge: 'Prietenos cu Familia · Halal · 0-3 Ani Gratuit'
    },
    intro: [
      '**Croaziera pe Bosfor cu copii** este cea mai familiaristă opțiune de seară din Istanbul. Găzduim zeci de familii în fiecare seară — am conceput fiecare detaliu pentru ca cei mici să se simtă confortabil: zonă interioară acoperită ca să stea la căldură, un meniu accesibil pentru copii (pui simplu la grătar, paste, băuturi răcoritoare nelimitate) și îmbarcare devreme pentru a evita crizele de nervi de la ore târzii.',
      'Spre deosebire de vapoarele doar pentru adulți, **croaziera noastră cu cină pe Bosfor pentru familii** rămâne caldă și incluzivă. **Copiii 0-3 ani sunt gratuit** (transfer inclus), 4-8 ani beneficiază de **50% reducere**, 9+ ani plătesc preț întreg — fără costuri ascunse. Dansurile populare live, dansul oriental și spectacolul sema sunt un divertisment delicat pentru familie, nu un club de noapte.',
      'Fie că veniți la Istanbul pentru un weekend prelungit cu copilul mic, fie că aduceți adolescenții în prima lor călătorie europeană — acesta este turul recomandat de familiile din Istanbul. Sigur, certificat halal, licențiat TÜRSAB și evaluat cu 4,8★ de peste 11.317 călători.'
    ],
    highlights: [
      { title: '0-3 ani complet gratuit', desc: 'Fără taxe pentru bebeluși și copii mici. 4-8 ani plătesc 50% din tariful pentru adulți. De la 9 ani în sus, oaspete cu preț întreg. Transparent, fără surprize.' },
      { title: 'Zonă interioară acoperită', desc: 'Complet acoperită și încălzită în lunile reci. Copiii stau la căldură, protejați de vânt. Puntea deschisă este disponibilă și când vremea este frumoasă — alegerea vă aparține.' },
      { title: 'Meniu pentru copii la cerere', desc: 'Pui simplu la grătar, paste, pâine și legume — fără cost suplimentar. Băuturi răcoritoare nelimitate (cola, suc, apă). Anunțați-ne în avans — fără surprize de mezeluri picante pentru cei mici.' },
      { title: 'Divertisment sigur pentru familie', desc: 'Spectacol sema (fascinant pentru copii), 5 dansuri populare tradiționale, muzică turcească live și set DJ. Totul este prietenos cu familia — fără conținut pentru adulți. Copiii se alătură adesea la dans.' }
    ],
    faq: [
      { q: 'Croaziera pe Bosfor este sigură pentru copiii mici?', a: 'Da — vaporul nostru este licențiat TÜRSAB, are o zonă interioară acoperită cu ferestre sigure, veste de salvare de toate mărimile disponibile și un echipaj profesionist cu experiență pentru familii. Recomandăm puntea interioară pentru copiii mici și puntea deschisă pentru cei de 6+ ani.' },
      { q: 'Care este prețul pentru copii la croaziera pe Bosfor?', a: 'Copiii **0-3 ani: GRATUIT** (fără taxe, fără costuri ascunse). **4-8 ani: 50% reducere** din tariful pentru adulți — adică €12/copil la Standard (€{p.dinnerStd}/2). **9+ ani: preț întreg pentru adulți.** Transferul de la hotel este gratuit pentru 0-3 ani, standard pentru 4+ (€{p.transfer}/persoană).' },
      { q: 'Există meniu pentru copii pe vapor?', a: 'Da — pui simplu la grătar, paste, pâine, legume de sezon și băuturi răcoritoare nelimitate. Anunțați-ne alergiile sau preferințele alimentare la rezervare și pregătim ceva ce copilul dumneavoastră va mânca cu plăcere.' },
      { q: 'Muzica sau spectacolul sunt prea zgomotoase pentru copii?', a: 'Spectacolele live au loc într-o singură zonă a scenei — dacă copiii dumneavoastră sunt sensibili la zgomot, vă așezăm la o masă mai liniștită în spate. Spectacolul durează în total 40 de minute, restul serii fiind muzică turcească de fundal și DJ la volum moderat.' },
      { q: 'Ce se întâmplă dacă bebelușul adoarme în timpul croazierei?', a: 'Nicio problemă — mulți adorm. Zona interioară are canapele tip banchetă pe care un bebeluș sau un copil mic poate dormi confortabil. Cereți echipajului o pătură caldă dacă este nevoie. Fără costuri suplimentare.' },
      { q: 'Ar trebui să aduc căruciorul la bord?', a: 'Puteți, dar vă recomandăm să lăsați căruciorul mare la hotel (sau la șoferul nostru dacă ați rezervat transfer — îl păstrăm în siguranță). Vaporul nostru are culoare înguste și punți cu trepte. Un marsupiu ușor este mai comod pe vapor.' }
    ],
    cta: {
      primary: 'Rezervați Croaziera de Familie · Plata pe Vapor',
      secondary: 'Anulare gratuită cu până la 2 ore înainte · Fără plată în avans',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Croazieră Romantică pe Bosfor — Cină la Lumina Lumânărilor pentru Cupluri | Istanbul',
      description: 'Cea mai romantică croazieră pe Bosfor din Istanbul. Masă la lumina lumânărilor, trandafiri, aranjament VIP, cină cu multiple feluri, sub podurile iluminate. Aniversare, lună de miere, surpriză — rezervați de la €{p.dinnerStd}/persoană.'
    },
    hero: {
      h1: 'Croazieră Romantică pe Bosfor',
      subtitle: 'Cină la lumina lumânărilor, masă împodobită cu trandafiri, poduri iluminate și un moment special doar al dumneavoastră sub cel mai iconic cer nocturn al Istanbulului.',
      badge: 'Aniversare · Lună de Miere · Seară Specială'
    },
    intro: [
      '**Croaziera romantică pe Bosfor** este cea mai iconică seară pentru cupluri din Istanbul. În timp ce soarele apune deasupra Palatului Dolmabahçe și Podul Bosfor se aprinde în culori, dumneavoastră și partenerul împărțiți o cină turcească cu multiple feluri la o masă privată — cu lumânări, flori proaspete și vioară live plutind pe punte.',
      'Aranjamentul nostru pentru masă romantică (+€{p.romantic}/masă) transformă orice loc într-un moment special: trandafiri roșii, lumânări strălucitoare, un bilețel de bun venit scris de mână. Adăugați pachetul de alcool nelimitat pentru vin sub stele (+€{p.unlimited}/persoană) sau păstrați-l simplu cu băuturile răcoritoare incluse. Indiferent de alegere, echipajul se ocupă discret de restul.',
      'Fie că sărbătoriți o aniversare, planificați o surpriză pentru partener sau pur și simplu doriți o seară de neuitat în cel mai romantic oraș al Europei — acesta este turul preferat de cuplurile din Istanbul. Evaluare 4,8★, licențiat TÜRSAB și — cel mai important — plata pe vapor, deci promiteți doar seara în sine.'
    ],
    highlights: [
      { title: 'Masă romantică la lumina lumânărilor', desc: 'Adăugați aranjamentul pentru masă romantică cu +€{p.romantic}/masă: trandafiri roșii proaspeți, lumânări strălucitoare, petale de trandafir pe față de masă și felicitare scrisă de mână. Fotografii incluse.' },
      { title: 'Cele mai bune mese pentru tranziția apus-noapte', desc: 'Mesele de la fereastră sunt rezervate pentru cupluri. Priviți Podul Bosfor aprinzându-se, Turnul Fecioarei strălucind și Moscheea Ortaköy iluminându-se de la masa dumneavoastră privată.' },
      { title: 'Vioară live și atmosferă intimă', desc: 'Vioara live și muzica turcească acustică în timpul cinei creează o atmosferă lentă și romantică. Apoi intervine DJ-ul, iar cuplurile dansează pe puntea deschisă sub lumini.' },
      { title: 'Vin, șampanie, asocieri premium', desc: 'Adăugați 2 pahare alcool (+€{p.alcohol2}/persoană) sau vin, bere, rachiu local nelimitat (+€{p.unlimited}/persoană). Șampanie de import și asocieri premium la cerere — întrebați la rezervare.' }
    ],
    faq: [
      { q: 'Ce face această croazieră romantică?', a: 'Combinația de masă privată, aranjament cu lumânări (opțional +€{p.romantic}), cină turcească cu multiple feluri, vioară live și muzică acustică și podurile iluminate ale Bosforului care trec deasupra capului. Concepem experiența pentru cupluri — atmosferă liniștită la început, apoi DJ energic și dans. Ritmul îl alegeți dumneavoastră.' },
      { q: 'Puteți aranja o surpriză pentru partenerul meu — zi de naștere, aniversare, cerere în căsătorie?', a: 'Da — spuneți-ne la rezervare. Putem coordona cu personalul nostru tort aniversar (gratuit), aranjament special al mesei, felicitare scrisă de mână în limba dumneavoastră sau aducerea unui element la masă la momentul potrivit. Pentru cererile în căsătorie, vă recomandăm să ne scrieți direct pe WhatsApp ca să putem planifica discret.' },
      { q: 'Cât costă croaziera romantică pentru 2 persoane?', a: '2 persoane Standard: 2 × €{p.dinnerStd} = €48. Adăugați aranjamentul romantic +€{p.romantic} = €63. 2 persoane VIP: 2 × €{p.dinnerVip} = €110 + aranjament romantic €{p.romantic} = €125. Fără plată în avans — plata pe vapor. Alcool nelimitat încă 2 × €{p.unlimited} = €60.' },
      { q: 'Croaziera romantică pe Bosfor este privată — doar pentru noi?', a: 'Nu — este o croazieră partajată cu alte cupluri și oaspeți (până la 60-80 în total). **Masa dumneavoastră** este privată (doar pentru grupul dumneavoastră), dar pe vapor există și alți oaspeți. Dacă doriți un vapor complet privat pentru 2 persoane, aceea este o **Croazieră Privată pe Bosfor** separată (pe care o putem aranja la cerere — scrieți-ne).' },
      { q: 'Putem aduce propriile flori, tort sau cadou?', a: 'Desigur. Aduceți orice doriți — personalul nostru vă ajută să așezați discret cadoul-surpriză, să ascundeți cutia inelului în desert sau să expuneți florile pe care le-ați adus. Nu există taxe suplimentare de genul dopului de plută. Doar spuneți-ne ca să putem coordona momentul.' },
      { q: 'Ce ar trebui să purtăm pentru o croazieră romantică pe Bosfor?', a: 'De la smart casual la elegant — multe cupluri se îmbracă frumos (rochii, sacouri). Nu există cod vestimentar strict, dar atmosfera este mai specială decât turismul casual. Aduceți o jachetă subțire sau un șal — puntea poate fi răcoroasă chiar și vara. Încălțăminte confortabilă dacă plănuiți să dansați după cină.' }
    ],
    cta: {
      primary: 'Rezervați Croaziera Romantică · Plata pe Vapor',
      secondary: 'Adăugați aranjamentul pentru masă romantică (+€{p.romantic}) în formularul de rezervare · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate pentru Seara Aceasta'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Croazieră cu Cină 100% Halal pe Bosfor — Istanbul | Prietenos Musulmanilor',
      description: 'Croazieră cu cină pe Bosfor certificată halal. Carne 100% halal, alcool opțional (niciodată impus), divertisment potrivit familiei, respect pentru orele de rugăciune. De la €{p.dinnerStd}/persoană.'
    },
    hero: {
      h1: 'Croazieră Halal pe Bosfor în Istanbul',
      subtitle: 'Meniu 100% certificat halal, alcool întotdeauna opțional, divertisment prietenos cu familia și atmosferă respectuoasă pentru călătorii musulmani — seara pe Bosfor, făcută corect.',
      badge: '100% Halal · Prietenos cu Familia · Proprietate Musulmană'
    },
    intro: [
      '**Croaziera halal pe Bosfor** este cea mai respectuoasă croazieră cu cină din Istanbul pentru călătorii musulmani. Fiecare carne servită pe vaporul nostru — somon, biban de mare, pui, chiftele de miel, mușchi de vită, antricot — este **certificată halal** de la furnizori aprobați. Servim același meniu fiecărui oaspete; fără „secțiune halal" separată, pentru că întregul vapor este halal în mod implicit.',
      'Alcoolul este **un supliment opțional** — niciodată impus oaspeților, iar aranjamentul meselor separă în mod natural oaspeții care preferă o masă fără alcool. Pentru oaspeții care doresc pachetul de alcool nelimitat (+€{p.unlimited}/persoană), este acolo, dar băuturile răcoritoare nelimitate incluse (apă, cola, suc) sunt suficiente pentru majoritatea familiilor musulmane. Echipajul nostru este instruit să respecte preferințele dumneavoastră fără presupuneri.',
      '**Croaziera prietenoasă halal pe Bosfor** contează pentru călătorii din Arabia Saudită, EAU, Kuweit, Qatar, Iran, Malaezia, Indonezia, Pakistan și Maroc care doresc cea mai iconică seară din Istanbul fără compromisuri. Licențiat TÜRSAB, 4,8★ și plata pe vapor — nu promiteți nimic până nu sunteți sigur că experiența vă îndeplinește standardele.'
    ],
    highlights: [
      { title: 'Meniu 100% certificat halal', desc: 'Toată carnea (somon, biban de mare, pui, chiftele, vită, antricot) este certificată halal de la furnizori aprobați. Bucătăria urmează pregătirea halal. Fără produse din porc sau aditivi non-halal. Opțiunile vegetariene sunt întotdeauna disponibile.' },
      { title: 'Alcoolul opțional, niciodată impus', desc: 'Pachetele de alcool sunt supliment — nu sunt incluse în mod implicit. Băuturile răcoritoare (apă, cola, suc) sunt nelimitate și gratuite. Masa dumneavoastră rămâne fără alcool dacă nu cereți în mod explicit. Echipajul respectă în tăcere alegerea dumneavoastră.' },
      { title: 'Divertisment prietenos cu familia', desc: 'Spectacol sema, dansuri populare turcești tradiționale, muzică turcească live. Fără spectacole în stil de club de noapte, fără conținut nepotrivit. Sigur pentru copii, respectuos pentru familii. Dansul oriental este o formă de artă tradițională, prezentată cu modestie.' },
      { title: 'Respect pentru orele de rugăciune', desc: 'Dacă îmbarcarea coincide cu maghrib sau ișa (20:00-21:00), personalul nostru vă poate îndruma către zona liniștită de rugăciune de la debarcaderul Kabataș înainte de plecare. Doar anunțați-ne la rezervare.' }
    ],
    faq: [
      { q: 'Croaziera pe Bosfor este 100% halal?', a: 'Da — fiecare produs din carne din meniu (pește, pui, chiftele, mușchi de vită, antricot, miel) este certificat halal de la furnizori aprobați. Bucătăria urmează standardele de pregătire halal. Pe vapor nu se servește nicăieri porc. Nu este o „opțiune halal" — întreg meniul este halal.' },
      { q: 'Alți oaspeți de pe vapor beau alcool?', a: 'Unii oaspeți adaugă pachetul de alcool opțional (+€{p.unlimited}/persoană). Mesele sunt separate în mod natural — puteți cere o zonă fără alcool. Echipajul nu aduce alcool decât dacă este comandat în mod specific de un oaspete. Băuturile răcoritoare (nelimitate) sunt incluse pentru toată lumea.' },
      { q: 'Această croazieră este potrivită pentru familii musulmane cu copii?', a: 'Da — este una dintre cele mai respectate croaziere pentru familii din Istanbul. Divertismentul este modest (dansuri populare, sema, muzică turcească), copiii sub 3 ani sunt gratuit, 4-8 ani beneficiază de 50% reducere. Fără atmosferă de club de noapte. Familiile din Golf, Indonezia, Malaezia, Pakistan și Maroc rezervă regulat această croazieră.' },
      { q: 'Pot să mă rog pe vapor?', a: 'Nu există o sală de rugăciune dedicată pe vapor, dar vă recomandăm să vă rugați înainte de îmbarcarea de la 20:00 (rugăciunea maghrib coincide adesea cu acest interval). Debarcaderul Kabataș are facilități de rugăciune. Dacă trebuie să vă rugați în timpul navigației 21:00-00:00 (ișa), vorbiți cu echipajul — putem aranja un colț liniștit pe punte.' },
      { q: 'Care sunt prețurile pentru o familie musulmană de 4 persoane (2 adulți, 2 copii)?', a: 'Croazieră Standard: 2 × €{p.dinnerStd} + 2 × €12 (jumătate de preț 4-8 ani) = €72. Dacă copiii sunt sub 3 ani, gratuit: 2 × €{p.dinnerStd} = €48. Adăugați €10 transfer de la hotel per adult. Total: €48-92 pentru familia de 4 persoane, fără plată în avans, plata pe vapor.' },
      { q: 'Transferul de la hotel este și el halal?', a: 'Transferul de la hotel este doar o călătorie cu mașina — nu este implicată mâncare sau băutură, deci nu există preocupare halal. Șoferii noștri sunt profesioniști, respectuoși și punctuali. Zonele de transfer acoperă Sultanahmet, Taksim, Beșiktaș, Laleli, Fatih și alte 8 cartiere centrale în care călătorii musulmani cazează de obicei.' }
    ],
    cta: {
      primary: 'Rezervați Croaziera Halal · Plata pe Vapor',
      secondary: 'Anulare gratuită cu 2 ore înainte · Fără plată în avans · Certificat halal',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Croazieră VIP pe Bosfor — Cină Premium, Locuri în Față la Scenă | Istanbul',
      description: 'Croazieră VIP cu cină pe Bosfor în Istanbul. Mezeluri premium, opțiuni de steak, locuri în față la scenă, serviciu prioritar. De la €{p.dinnerVipOriginal}, acum €{p.dinnerVip}/persoană. Plata pe vapor.'
    },
    hero: {
      h1: 'Croazieră VIP pe Bosfor',
      subtitle: 'Locuri în față la scenă, meniu turcesc premium cu opțiuni de steak și serviciu prioritar — o seară pe Bosfor la nivel superior pentru călătorii care vor cea mai bună masă de pe vapor.',
      badge: 'Cel Mai Popular · 40% REDUCERE · Locuri în Față la Scenă'
    },
    intro: [
      '**Croaziera VIP pe Bosfor** vă așază la cele mai bune locuri de pe vapor: mese în față la scenă cu vedere directă la spectacolul sema, dansurile populare, dansul oriental și muzica live. Meniul premium adaugă mușchi de vită și antricot la alegerile de fel principal (față de pui/somon la Standard), plus 15+ sortimente de mezeluri turcești tradiționale servite ca un șir generos.',
      '**Croaziera VIP cu cină pe Bosfor** a fost desemnată Cea Mai Populară de oaspeții noștri — pentru că la €{p.dinnerVip}/persoană (fost €{p.dinnerVipOriginal}, 40% reducere), experiența seamănă mai mult cu un restaurant fine dining decât cu un tur turistic. Masă privată, serviciu atent al chelnerilor și aceleași priveliști spectaculoase ale Dolmabahçe, Moscheei Ortaköy și Podului Bosfor iluminat.',
      'Fie că sunteți călător de afaceri, sărbătoriți un eveniment important sau vă gândiți „suntem la Istanbul o singură dată — să facem totul ca lumea", aceasta este **croaziera VIP pe Bosfor** rezervată de vizitatorii care se întorc. Licențiat TÜRSAB, 4,8★ cu 11.317+ recenzii, plata pe vapor, anulare gratuită cu până la 2 ore înainte de plecare.'
    ],
    highlights: [
      { title: 'Masă privată în față la scenă', desc: 'Locuri rezervate direct în fața scenei de spectacol — cea mai bună vedere la spectacolul sema, dansurile populare și dansul oriental. Masa dumneavoastră, nu partajată. Fotografilor le plac aceste locuri.' },
      { title: '15+ mezeluri + felurile principale premium', desc: '15+ sortimente de mezeluri turcești servite ca șir tradițional. Alegerile de fel principal includ mușchi de vită și antricot (la Standard doar pui/somon). Același desert și băuturi răcoritoare nelimitate.' },
      { title: 'Serviciu prioritar al chelnerilor', desc: 'Un chelner dedicat vă servește masa mai întâi — reumpleri, ghidaj meniu, coordonarea suplimentelor de alcool, cereri speciale. Nu luptați pentru atenție într-o cameră aglomerată.' },
      { title: '40% REDUCERE — fost €{p.dinnerVipOriginal}, acum €{p.dinnerVip}', desc: 'Preț normal €{p.dinnerVipOriginal}/persoană. Prețul actual de lansare €{p.dinnerVip}/persoană — 40% reducere. Plata pe vapor, fără plată în avans. Anulare gratuită cu până la 2 ore înainte de plecare.' }
    ],
    faq: [
      { q: 'Care este diferența între VIP și Croaziera Standard pe Bosfor?', a: 'VIP obține: (1) locuri în față la scenă cu cea mai bună vedere, (2) 15+ mezeluri față de 10 la Standard, (3) mușchi de vită + antricot adăugate la opțiunile de fel principal, (4) serviciu prioritar al chelnerilor. Același tur de 3 ore, același divertisment, același traseu. €{p.dinnerVip} față de €{p.dinnerStd}.' },
      { q: 'Prețul VIP de €{p.dinnerVip} este cu adevărat 40% reducere?', a: 'Da — prețul normal este €{p.dinnerVipOriginal}/persoană (verificați pe orice site de rezervări). Aplicăm €{p.dinnerVip} ca preț de rezervare directă, reducând taxele intermediarilor. Obțineți VIP pentru mai puțin decât percep majoritatea locurilor pentru Standard.' },
      { q: 'Alcoolul este inclus în croaziera VIP?', a: 'Nu — alcoolul este un supliment separat (la fel ca la Standard). 2 pahare: +€{p.alcohol2}/persoană. Alcool local nelimitat (vin, bere, rachiu, vodcă, gin): +€{p.unlimited}/persoană. Băuturile premium de import se taxează separat. Băuturile răcoritoare nelimitate sunt incluse și gratuite.' },
      { q: 'Pot face upgrade la VIP după ce urc pe vaporul Standard?', a: 'Depinde de disponibilitate — dacă mesele VIP sunt libere, da. Plătiți diferența (€{p.dinnerVip} - €{p.dinnerStd} = €31) pe vapor. Dar vă recomandăm să rezervați VIP în avans: cele mai bune locuri în față la scenă merg la rezervările anticipate.' },
      { q: 'Cum rezerv croaziera VIP pe Bosfor?', a: 'Folosiți formularul de rezervare de pe această pagină — selectați „VIP" la Pasul 1, stabiliți data, introduceți numărul de oaspeți, apoi datele de contact. Cererea dumneavoastră vine prin WhatsApp / Telegram / WeChat și confirmăm instant. Plata pe vapor, nu acum.' },
      { q: 'Croaziera VIP este potrivită pentru cine de afaceri cu clienți?', a: 'Da — VIP este alegerea cea mai frecventă pentru cine de afaceri în Istanbul. Masă privată, suficient de liniștită pentru conversație, meniu și priveliști impresionante. Mulți oaspeți rezervă VIP + alcool nelimitat pentru a găzdui clienți. Certificat halal (bun pentru călătorii de afaceri din Golf). Anunțați-ne la rezervare, aranjăm o masă VIP mai liniștită în spate.' }
    ],
    cta: {
      primary: 'Rezervați VIP · Plata pe Vapor',
      secondary: 'Fost €{p.dinnerVipOriginal}, acum €{p.dinnerVip} · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Vedeți Opțiunea Standard (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Croazieră Privată pe Bosfor — Închiriați Propriul Vapor | Istanbul',
      description: 'Închiriere croazieră privată pe Bosfor pentru grupuri, familii, evenimente corporate, nunți. Vapor privat, meniu personalizat, durată flexibilă. Minim 25 de oaspeți. Scrieți pe WhatsApp pentru preț.'
    },
    hero: {
      h1: 'Croazieră Privată pe Bosfor',
      subtitle: 'Închiriați întregul vapor pentru grupul dumneavoastră — sărbători de familie, cine corporate, zile de naștere, logodne, nunți. Utilizare exclusivă, meniu personalizat, program flexibil.',
      badge: 'Închiriere Privată · 25+ Oaspeți · Meniu Personalizat'
    },
    intro: [
      '**Croaziera privată pe Bosfor** înseamnă că întregul vapor este al dumneavoastră — fără alți oaspeți, fără mese partajate, fără ring de dans comun. Perfect pentru reuniuni de familie, cine corporate, petreceri aniversare, burlăcițe sau recepții de nuntă. Vaporul, echipajul, meniul, divertismentul și programul se adaptează grupului dumneavoastră.',
      '**Închirierea noastră privată pe Bosfor** susține grupuri **de la 25 la 80 de oaspeți**. Grupurile mai mici pot încă solicita experiența privată — oferim un preț minim care acoperă costul de operare al vaporului. Grupurile mai mari (dimensiune nuntă) primesc prețuri personalizate și includ de obicei decor special, formație live, servirea tortului și durată extinsă (4-5 ore în loc de 3 standard).',
      'Fie că organizați un eveniment corporate pentru clienți, o petrecere aniversară de 50 de ani sau o recepție de nuntă sub cele mai iconice poduri ale Istanbulului, aceasta este **croaziera privată de încredere a organizatorilor de evenimente din Istanbul**. Evaluare 4,8★, licențiat TÜRSAB, echipaj complet vorbitor de engleză și flexibilitate totală — rută, meniu, muzică, program.'
    ],
    highlights: [
      { title: 'Întregul vapor, doar pentru dumneavoastră', desc: 'Fără alți oaspeți. Grupul dumneavoastră deține fiecare punte, fiecare masă. Stabiliți propria muzică, cod vestimentar, program. Intimitatea contează — o respectăm.' },
      { title: 'Meniu personalizat și pachet de băuturi', desc: 'Lucrați cu bucătarul nostru pentru a personaliza meniul: mezeluri specifice, alegeri de fel principal, preparate adaptate culturii sau nevoilor dietetice. Pachete de alcool, cupe de șampanie, baruri de cocktail personalizate — toate pot fi aranjate.' },
      { title: 'Durată și plecare flexibile', desc: '3 ore standard pot fi extinse la 4-5 ore. Alegeți plecarea de zi la 12:00, apus la 17:30 sau seară la 21:00. Doriți zi lucrătoare în loc de weekend? Nicio problemă — ne adaptăm la programul dumneavoastră.' },
      { title: 'Decor personalizat, formație, program', desc: 'Decorațiuni personalizate (baloane, bannere, aranjamente florale), formație live în loc de DJ, servirea tortului de nuntă, coordonare fotograf, discursuri — adăugați orice are nevoie evenimentul dumneavoastră. Suntem organizatori de evenimente, nu doar operatori de vapor.' }
    ],
    faq: [
      { q: 'Cât costă o croazieră privată pe Bosfor?', a: 'Pentru grupuri 25+, de obicei €{p.dinnerStd}-€{p.dinnerVip}/persoană + taxă de închiriere vapor în funcție de dimensiunea grupului, data și durată. Scrieți-ne pe WhatsApp cu dimensiunea grupului, data și cerințele dumneavoastră — oferim preț într-o oră. Majoritatea evenimentelor se încadrează în intervalul total €2.000-€6.000.' },
      { q: 'Care este dimensiunea minimă a grupului pentru o croazieră privată pe Bosfor?', a: 'Tehnic, 25 de oaspeți fac croaziera privată fezabilă economic. Grupurile mai mici (10-24) pot închiria privat, dar plătesc un preț minim echivalent cu ~25 de persoane. Pentru grupuri cu adevărat mici (2-10), luați în considerare croaziera obișnuită Standard sau VIP — masa dumneavoastră este deja privată, doar vaporul este partajat.' },
      { q: 'Pot organiza o nuntă pe croaziera pe Bosfor?', a: 'Da — organizăm 10-15 recepții de nuntă pe an. Capacitate de până la 80 pentru cină așezată, până la 100 pentru stil cocktail. Coordonăm cu fotograful, organizatorul de nuntă, formația sau bucătarul dumneavoastră. Servire personalizată a tortului, ring pentru primul dans, cupă de șampanie — toate pot fi aranjate. Scrieți pe WhatsApp pentru preț de nuntă.' },
      { q: 'Cum rămâne cu evenimentele corporate și cinele de echipă?', a: 'Croazierele private corporate sunt cele mai frecvente rezervări ale noastre. Cină de companie, găzduire clienți, lansare de produs, sărbătoare de echipă — toate funcționează. Putem furniza factură cu defalcare TVA, aranja transferuri de la hotel pentru echipa dumneavoastră și coordona materiale cu brand (accesorii de masă, bannere) la cerere.' },
      { q: 'Pot aduce propria formație live sau DJ în loc de divertismentul dumneavoastră?', a: 'Da — puteți aduce propria formație live, DJ, fotograf. Sau păstrați-l pe al nostru standard (sema, dansatori populari, oriental, DJ) și adăugați pe al dumneavoastră deasupra. Vaporul are sistem PA și ring de dans. Anunțați-ne în avans ca să putem coordona controalele audio.' },
      { q: 'Cum solicit un preț pentru croaziera privată pe Bosfor?', a: 'Cel mai ușor: scrieți-ne pe WhatsApp la +90 532 520 1700 cu (1) dimensiunea grupului, (2) data preferată, (3) motivul (nuntă, corporate, zi de naștere), (4) cerințe speciale. Răspundem într-o oră în timpul programului, 12 ore noaptea. Putem aranja și un apel video pentru a discuta detaliile.' }
    ],
    cta: {
      primary: 'WhatsApp pentru Preț Personalizat',
      secondary: 'Meniu personalizat, grup 25-80, durată flexibilă · Răspuns sub 1 oră',
      tertiary: 'Opțiunea Croazieră Standard (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Croazieră pe Bosfor pentru Cupluri — Seară Romantică pe Apă | Istanbul',
      description: 'Croazieră cu cină pe Bosfor pentru cupluri. Masă privată, poduri iluminate, muzică live, opțiune aranjament romantic. De la €{p.dinnerStd}/persoană. Plata pe vapor — seara perfectă în Istanbul.'
    },
    hero: {
      h1: 'Croazieră pe Bosfor pentru Cupluri',
      subtitle: 'O seară romantică pe Bosfor — masă privată, muzică live, poduri iluminate care trec deasupra capului. Fie că este prima dumneavoastră întâlnire în Istanbul sau a zecea aniversare, această seară funcționează.',
      badge: 'Masă Privată · Muzică Live · Plata pe Vapor'
    },
    intro: [
      '**Croaziera pe Bosfor pentru cupluri** este seara preferată din Istanbul. Nu fiecare cuplu sărbătorește o aniversare — uneori sunteți doar în cel mai romantic oraș al lumii și vreți o seară minunată împreună. Această croazieră oferă: masă privată pentru doi, cină turcească lentă cu multiple feluri, vioară live și muzică acustică în timpul cinei și Podul Bosfor iluminat trecând încet.',
      'Atmosfera este **caldă, dar nu excesiv romantică** — fără muzică de cerere în căsătorie obligatorie, fără aplauze coordonate stânjenitoare pentru „proaspătul căsătorit". Mâncați, beți, vorbiți, priviți luminile Istanbulului. Dacă doriți să adăugați aranjamentul pentru masă romantică (lumânări, trandafiri, +€{p.romantic}), excelent — altfel, doar cina în sine este deja specială.',
      'Fie că sunteți în Istanbul 3 zile cu partenerul, sărbătoriți un eveniment modest sau planificați o călătorie exploratorie pentru o viitoare cerere în căsătorie — **croaziera pe Bosfor pentru cupluri** vă oferă 3 ore de seară împreună în unul dintre cele mai fotografiate orașe ale lumii. 4,8★, plata pe vapor, anulare gratuită.'
    ],
    highlights: [
      { title: 'Masă privată pentru doi', desc: 'Masă privată pentru 2 persoane, nu partajată. Prioritate la mesele de la fereastră pentru cupluri. Fotografii la apus și pe Bosforul nocturn chiar în afara ferestrei dumneavoastră.' },
      { title: 'Cină lentă cu multiple feluri', desc: '10 sortimente de mezeluri turcești, aperitiv cald, fel principal (somon, biban de mare, pui, chiftele sau vegetarian), tort cu înghețată la desert. Servit lent pe parcursul a 3 ore — nu sunteți grăbiți.' },
      { title: 'Vioară live și muzică ușoară', desc: 'Vioara live și muzica turcească acustică în timpul cinei creează o atmosferă intimă, potrivită conversației. Apoi intervine DJ-ul pentru cuplurile care vor să danseze.' },
      { title: 'Suplimente pentru seri speciale', desc: 'Aranjament pentru masă romantică (lumânări, trandafiri): +€{p.romantic}. Alcool local nelimitat (vin, rachiu): +€{p.unlimited}/persoană. Transfer de la hotel (dus-întors): +€{p.transfer}/persoană. Alegeți ce se potrivește serii dumneavoastră.' }
    ],
    faq: [
      { q: 'Această croazieră pe Bosfor este potrivită pentru o seară obișnuită, nu pentru o ocazie specială?', a: 'Da — majoritatea cuplurilor noastre nu sărbătoresc ceva anume, ci pur și simplu au o seară frumoasă împreună. Atmosfera este caldă și plăcută fără a fi excesivă. Puteți adăuga aranjamentul pentru masă romantică (+€{p.romantic}) dacă doriți extra, sau pur și simplu să vă bucurați de seara standard.' },
      { q: 'Cât costă croaziera pe Bosfor pentru 2 persoane?', a: '2 persoane Standard: 2 × €{p.dinnerStd} = €48. 2 persoane VIP: 2 × €{p.dinnerVip} = €110. Adăugați transfer de la hotel pentru doi: +€{p.transfer}×2 = €20. Adăugați alcool nelimitat pentru doi: +€{p.unlimited}×2 = €60. Fără plată în avans — plata pe vapor.' },
      { q: 'Cuplurile pot aduce propriul vin sau șampanie?', a: 'Nu permitem alcool din exterior (din motive de licență de operare). Dar avem vin local nelimitat (+€{p.unlimited}/persoană) și putem aranja vinuri premium de import sau șampanie contra unei taxe — întrebați la rezervare. Prosecco, Chianti și Cabernet sunt cererile premium populare.' },
      { q: 'Este o problemă dacă nu bem alcool — suntem neobișnuiți?', a: 'Deloc — multe cupluri sar complet peste alcool, fie din motive halal, fie pur și simplu din preferință. Băuturile răcoritoare nelimitate (apă, suc, cola) sunt incluse. Nimeni nu se uită de două ori dacă masa dumneavoastră este fără alcool. Multe cupluri musulmane din Arabia Saudită, Iran și Indonezia rezervă această croazieră.' },
      { q: 'Când este cel mai bine croaziera pe Bosfor pentru cupluri — apus sau seară?', a: 'Seara (plecare 21:00) este cea mai iconică — poduri iluminate, reflexii pe apă, palate luminate. Apusul (plecare 17:30) este mai devreme și are frumusețe de oră aurie, dar croaziera cu cină este specific la 21:00. Dacă doriți ambele, majoritatea cuplurilor rezervă croazierele de apus și de seară în zile diferite.' },
      { q: 'Există ring de dans — putem dansa?', a: 'Da — după servirea cinei (~22:30), DJ-ul începe și puntea deschisă devine zona de dans. Multe cupluri dansează melodii lente sub lumini cu Podul Bosfor în fundal. Câteva dintre cele mai frumoase fotografii pe care le veți face în Istanbul.' }
    ],
    cta: {
      primary: 'Rezervați Seara Romantică · Plata pe Vapor',
      secondary: 'Adăugați aranjament romantic (+€{p.romantic}) · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Vedeți Croaziera Romantică pe Bosfor'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Croazieră la Apus pe Bosfor — Ora de Aur și Cina | Istanbul',
      description: 'Croazieră la apus pe Bosfor în Istanbul. Îmbarcare la 17:30, priviți Dolmabahçe și Moscheea Ortaköy strălucind în lumina aurie, cina continuă în noaptea iluminată. Croazieră de 3 ore, de la €35/persoană.'
    },
    hero: {
      h1: 'Croazieră la Apus pe Bosfor',
      subtitle: 'Ora magică pe Bosfor — priviți soarele coborând în spatele silueta minaretelor în timp ce treceți pe lângă Dolmabahçe, Moscheea Ortaköy și Podul Bosfor care se aprinde pentru noapte.',
      badge: 'Ora Aurie · Plecare 17:30 · Cele Mai Bune Fotografii'
    },
    intro: [
      '**Croaziera la apus pe Bosfor** surprinde Istanbulul în cea mai fotogenică ipostază. Urcați la 17:30 și în 20 de minute soarele începe să coboare în spatele minaretelor malului european — colorând Palatul Dolmabahçe în auriu, transformând apa Bosforului în cupru și făcând din Moscheea Ortaköy o siluetă pe cerul strălucitor. Fiecare fotografie cu smartphone din această croazieră arată ca un film profesionist.',
      '**Croaziera noastră la apus pe Bosfor** include o cină turcească completă care începe în timpul orei de aur și continuă în timp ce podurile se aprind pentru noapte. Până la desert, navigați sub Podul Bosfor iluminat — 30 de milioane de lumini reflectate în apa întunecată. Tranziția de la zi la noapte, împachetată în 3 ore, este toată afacerea.',
      'Fie că sunteți fotograf urmărind ora de aur, călător care dorește ce este mai bun din zi și noapte sau un cuplu care caută „fotografia momentului din Istanbul" — aceasta este **croaziera cu cină la apus pe Bosfor** recomandată vizitatorilor. Evaluare 4,8★, licențiat TÜRSAB, plata pe vapor, fără plată în avans.'
    ],
    highlights: [
      { title: 'Ora de aur de vârf — plecare 17:30', desc: 'Urcați la 17:30, apusul are loc în jurul orei 18:30 vara / 17:00 iarna. Primele 40 de minute ale croazierei sunt ora de aur pe care o urmăriți. Camera pregătită — aceasta este fotografia.' },
      { title: 'Tranziție zi-noapte inclusă', desc: 'Nu doar apus — navigăm în amurg, apoi în Bosforul iluminat. Vedeți 3 faze diferite de lumină într-o singură croazieră: auriu, ora albastră și noapte complet iluminată.' },
      { title: 'Cină completă în timpul croazierei', desc: '10 sortimente de mezeluri turcești, aperitiv cald, fel principal (somon, biban de mare, pui, chiftele, vegetarian), tort cu înghețată. Același meniu de calitate ca la croaziera de seară, servit în timpul apusului.' },
      { title: 'Dolmabahçe, Ortaköy, Podul Bosfor — toate strălucesc', desc: 'Traseul trece pe lângă Palatul Dolmabahçe (auriu la apus), Moscheea Ortaköy (cupolă în siluetă), Podul Bosfor (aprinzându-se), Rumeli Hisarı, Palatul Beylerbeyi. Fiecare reper în cea mai bună lumină.' }
    ],
    faq: [
      { q: 'Când pleacă croaziera la apus pe Bosfor?', a: 'Îmbarcarea începe la 17:00, vaporul pleacă la 17:30, se întoarce în jurul orei 20:30. Aranjăm acest lucru să se întâmple exact când soarele apune pe apă — variază ușor cu sezonul (vara 18:30, iarna 17:00). Ajustăm plecarea cu 15-30 de minute sezonier.' },
      { q: 'Croaziera la apus pe Bosfor este aceeași cu croaziera cu cină?', a: 'Similar, dar la ore diferite. Croaziera la apus pleacă la 17:30 cu cina servită în timpul croazierei (ora de aur + seară devreme). Croaziera cu cină este la 21:00 — după întuneric, priveliști nocturne pure. Același vapor, același meniu, același divertisment — doar iluminare diferită. Unii oaspeți le fac pe ambele în zile diferite.' },
      { q: 'Cât costă croaziera la apus pe Bosfor?', a: 'Croaziera la apus Standard de la €35/persoană (3 ore, cină completă, divertisment live). Opțiunea VIP cu loc în față la scenă și mezeluri premium €55/persoană. Plata pe vapor — fără plată în avans. 0-3 ani gratuit, 4-8 ani la jumătate de preț.' },
      { q: 'Croaziera la apus este mai bună decât croaziera cu cină (de seară)?', a: '„Mai bună" depinde de ce vreți. Apus = cele mai bune fotografii, lumină aurie, ritm mai lent, seară mai devreme. Seară = cele mai iconice lumini (poduri iluminate), cel mai bun divertisment, cină mai târzie. Fotografii aleg apusul. Cuplurile la seara romantică aleg seara. Familiile cu copii aleg de obicei apusul (se termină devreme).' },
      { q: 'Ce să aduc la croaziera la apus?', a: 'Smartphone sau cameră pentru fotografii (ora de aur cerșește). Jachetă subțire — vântul crește la apus și puntea poate deveni rapid rece seara devreme. Ochelari de soare pentru primele 30 de minute. Ținută smart-casual — luați cina, dar fără cod vestimentar strict.' },
      { q: 'Pot rămâne pe croazieră pentru a vedea podurile iluminate noaptea?', a: 'Croaziera la apus este de 3 ore (17:30-20:30), deci la sfârșit veți vedea Podul Bosfor complet iluminat și Turnul Fecioarei luminat. Dacă doriți priveliștile nocturne de VÂRF (21:00-00:00, toate restaurantele și monumentele complet iluminate), rezervați croaziera cu cină de la 21:00. Cea mai bună soluție: rezervați ambele în seri diferite.' }
    ],
    cta: {
      primary: 'Rezervați Croaziera la Apus · Plata pe Vapor',
      secondary: 'Plecare 17:30 · Apus + cină incluse · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Vedeți Croaziera cu Cină de Seară (21:00)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tur Nocturn pe Bosfor — Croazieră cu Cină în Istanbulul Iluminat',
      description: 'Tur nocturn pe Bosfor cu cină și spectacol live. Plecare 21:00, poduri iluminate, dansuri populare turcești, 3 ore pe apă. De la €{p.dinnerStd}/persoană — plata pe vapor.'
    },
    hero: {
      h1: 'Tur Nocturn pe Bosfor',
      subtitle: 'Podurile iluminate ale Istanbulului, palatele luminate și apa Bosforului ca o oglindă reflectând 30 de milioane de lumini — turul nocturn care definește seara la Istanbul.',
      badge: 'Poduri Iluminate · Spectacol Live · Cină Inclusă'
    },
    intro: [
      '**Turul nocturn pe Bosfor** este cea mai recomandată activitate de seară din Istanbul. Iată de ce: după întuneric, Bosforul se transformă. Podul Bosfor alternează între albastru, violet și auriu. Palatul Dolmabahçe strălucește în galben cald. Moscheea Ortaköy se reflectă perfect în apa neagră. Fiecare reper al Istanbulului atinge punctul culminant de dramatism noaptea.',
      '**Turul nostru nocturn pe Bosfor cu cină** ambalează seara iconică completă: 3 ore pe apă (21:00-00:00), cină turcească cu multiple feluri, dansuri populare live (sema, 5 dansuri populare, dans oriental), muzică live și set DJ care animă puntea până la sfârșitul nopții. Fiecare oaspete primește același program — fără opțiune „de bază" care sare cele mai bune părți.',
      'Fie că este prima dumneavoastră vizită la Istanbul și căutați „singurul lucru pe care trebuie să-l faceți noaptea", fie că ați mai fost aici și doriți cele mai fotogenice 3 ore din oraș, acesta este **turul nocturn pe Bosfor** evaluat cu 4,8★ de peste 11.317 călători. Licențiat TÜRSAB, plata pe vapor, fără plată în avans.'
    ],
    highlights: [
      { title: 'Bosforul iluminat la punctul culminant de dramatism', desc: 'Podul Bosfor își schimbă culoarea (albastru, violet, auriu), palatele strălucesc galben, Moscheea Ortaköy se reflectă în apa neagră. 21:00-00:00 iluminare maximă pentru toate reperele Istanbulului.' },
      { title: 'Spectacol turcesc tradițional pe vapor', desc: 'Spectacol sema, 5 dansuri populare tradiționale (din regiuni diferite ale Turciei), dans oriental, muzică turcească live, apoi set DJ. 40 de minute de spectacol, apoi muzica + cina continuă.' },
      { title: 'Cină completă cu multiple feluri', desc: '10 sortimente de mezeluri turcești, aperitiv cald (paçanga böreği), fel principal (somon, biban de mare, pui, chiftele, vegetarian — alegerea dumneavoastră), desert (tort cu înghețată), băuturi răcoritoare nelimitate. Certificat halal.' },
      { title: 'Traseu complet pe Bosfor', desc: 'Kabataș → Dolmabahçe → Palatul Çırağan → Moscheea Ortaköy → Bebek → Rumeli Hisarı → Podul Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Turnul Fecioarei → Kabataș.' }
    ],
    faq: [
      { q: 'Când este turul nocturn pe Bosfor?', a: 'Îmbarcarea de la ora 20:00 la debarcaderul Kabataș. Vaporul pleacă la 21:00, revine în jurul orei 00:00 (miezul nopții). Vă recomandăm să ajungeți cu 20 de minute mai devreme pentru a vă instala și alege locul.' },
      { q: 'Cât costă turul nocturn pe Bosfor?', a: 'Turul nocturn Standard (3 ore, cină, spectacol): €{p.dinnerStd}/persoană (fost €{p.dinnerStdOriginal}). VIP cu loc în față la scenă și meniu premium: €{p.dinnerVip}/persoană (fost €{p.dinnerVipOriginal}). 0-3 ani gratuit, 4-8 ani la jumătate de preț. Plata pe vapor.' },
      { q: 'Care este diferența între turul nocturn pe Bosfor și croaziera cu cină?', a: 'Același lucru, cuvânt cheie diferit. „Tur nocturn pe Bosfor" este modul în care caută mulți călători; „croazieră cu cină" este termenul din industrie. Același vapor, același program de 3 ore, același meniu, același spectacol. Alegeți termenul de căutare preferat — experiența este aceeași.' },
      { q: 'Turul nocturn pe Bosfor sau croaziera la apus — care e mai valoros?', a: 'Turul nocturn = Istanbul iluminat, dramatism maxim de lumină, program complet de divertisment, cele mai iconice fotografii ale podurilor iluminate. Apusul = oră aurie, ritm mai lent, se termină la 20:30. Dacă faceți doar unul: turul nocturn este mai iconic. Mulți le fac pe ambele în zile diferite.' },
      { q: 'Pot face turul nocturn pe Bosfor în prima mea zi la Istanbul?', a: 'Da — recomandăm. Mulți călători rezervă turul nocturn pentru prima lor seară pentru că vă oferă o orientare completă: toate reperele majore de pe apă, cu mâncare bună și divertisment. Mai ușor decât să luptați cu jet lag-ul încercând să faceți turul pe jos în Ziua 1. Transfer de la hotel disponibil din cartierele centrale.' },
      { q: 'Nu vorbesc turcă — turul este în engleză?', a: 'Echipajul vorbește engleză. Divertismentul (sema, dansuri populare, muzică) nu necesită limbaj. Meniul de cină este în engleză. Rezervarea prin WhatsApp / Telegram / WeChat funcționează în mai multe limbi (engleză, arabă, rusă, germană, franceză, spaniolă). Nu este nevoie de turcă.' }
    ],
    cta: {
      primary: 'Rezervați Turul Nocturn · Plata pe Vapor',
      secondary: 'Plecare 21:00 · 3 ore · Cină + spectacol incluse · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Croazieră cu Cină Istanbul — Tur Premium Nocturn pe Bosfor, de la €{p.dinnerStd}',
      description: 'Cea mai apreciată croazieră cu cină pe Bosfor din Istanbul. Seară de 3 ore, cină turcească, dansuri populare live, poduri iluminate. Licențiat TÜRSAB, plata pe vapor, fără plată în avans.'
    },
    hero: {
      h1: 'Croazieră cu Cină Istanbul',
      subtitle: 'Cea mai bună croazieră cu cină din Istanbul — 3 ore pe Bosfor, cină turcească cu multiple feluri, divertisment live și priveliștile nocturne ale celor mai iconice repere ale orașului.',
      badge: '4,8★ · 11.317 recenzii · TÜRSAB A-17672'
    },
    intro: [
      'Căutați o **croazieră cu cină în Istanbul**? Ați găsit ce recomandă majoritatea călătorilor. Seara noastră de 3 ore pe Bosfor combină o cină turcească completă cu multiple feluri, dansuri populare live și cele mai fotogenice priveliști ale orașului — totul de pe un vapor confortabil care pleacă la ora 21:00 de la debarcaderul Kabataș.',
      'Experiența **croazierei cu cină Istanbul**: urcați la 20:00, vă așezați, priviți Palatul Dolmabahçe în timp ce plecăm, cina începe când ne apropiem de Moscheea Ortaköy, spectacolul începe (sema, dansuri populare, oriental), iar până la desert sunteți sub Podul Bosfor iluminat. Până la miezul nopții vă întoarceți la Kabataș cu un colaj iconic de fotografii și stomacul plin.',
      '€{p.dinnerStd}/persoană pentru croaziera Standard (fost €{p.dinnerStdOriginal}) sau €{p.dinnerVip}/persoană pentru VIP cu locuri în față la scenă (fost €{p.dinnerVipOriginal}). Plata pe vapor — fără plată în avans, fără risc. Licențiat TÜRSAB A-17672, evaluat cu 4,8★ de peste 11.317 călători.'
    ],
    highlights: [
      { title: 'Cină turcească completă cu multiple feluri', desc: '10 sortimente de mezeluri, aperitiv cald, fel principal (somon/biban de mare/pui/chiftele/vegetarian), tort cu înghețată. Certificat halal. Băuturi răcoritoare nelimitate incluse.' },
      { title: 'Spectacol de dansuri populare turcești live', desc: 'Spectacol sema, 5 dansuri populare tradiționale, dans oriental, muzică turcească live, DJ. 40 de minute de spectacol, muzica de fundal continuă.' },
      { title: 'Traseul complet nocturn pe Bosfor', desc: 'Tur de 3 ore: Dolmabahçe, Çırağan, Moscheea Ortaköy, Podul Bosfor, Bebek, Rumeli Hisarı, Podul FSM, Beylerbeyi, Üsküdar, Turnul Fecioarei. Ambele maluri, european și asiatic.' },
      { title: 'De la €{p.dinnerStd} — plata pe vapor', desc: 'Standard: €{p.dinnerStd} (fost €{p.dinnerStdOriginal}). VIP cu meniu premium: €{p.dinnerVip} (fost €{p.dinnerVipOriginal}). Fără plată în avans. Anulare gratuită cu până la 2 ore înainte de plecare.' }
    ],
    faq: [
      { q: 'Cât costă croaziera cu cină în Istanbul?', a: 'Croaziera noastră cu cină Standard €{p.dinnerStd}/persoană (preț normal €{p.dinnerStdOriginal}). VIP cu loc în față la scenă și meniu premium €{p.dinnerVip}/persoană (preț normal €{p.dinnerVipOriginal}). 0-3 ani gratuit, 4-8 ani cu 50% reducere. Plata pe vapor — fără plată în avans.' },
      { q: 'Ce este inclus în prețul croazierei cu cină Istanbul?', a: 'Tur de 3 ore pe Bosfor, cină turcească cu multiple feluri (mezeluri, aperitiv cald, fel principal, desert), băuturi răcoritoare nelimitate, spectacol de dansuri populare live (sema, dansuri populare, oriental), muzică live + DJ, acces punte deschisă, taxe incluse. Transferul de la hotel și alcoolul sunt suplimente opționale.' },
      { q: 'De unde pleacă croaziera cu cină Istanbul?', a: 'Debarcaderul Kabataș, Istanbul — pe malul european, lângă Palatul Dolmabahçe. Locul exact de întâlnire se comunică prin WhatsApp / Telegram / WeChat după rezervare. Videoclipurile de drum pe jos de la stația de tramvai Dolmabahçe și stația de tramvai Kabataș se află în secțiunea punctului de întâlnire de mai sus.' },
      { q: 'Cât durează croaziera cu cină — și când începe?', a: 'Total 3 ore. Îmbarcare de la 20:00, vaporul pleacă exact la 21:00, revine în jurul orei 00:00 (miezul nopții). Vă recomandăm să ajungeți cu 15-20 de minute mai devreme pentru a vă instala și alege locul.' },
      { q: 'Trebuie să rezerv în avans sau pot veni direct?', a: 'Rezervați în avans — locurile se ocupă, mai ales în weekenduri și vacanțe. Rezervările în aceeași zi sunt adesea posibile, dar nu garantate. Formularul de pe această pagină vă asigură un loc în mai puțin de 1 minut. Plata pe vapor, deci nu există risc financiar să rezervați devreme.' },
      { q: 'Croaziera cu cină Istanbul este potrivită pentru vegetarieni / halal / restricții alimentare?', a: 'Da — toată carnea este certificată halal. Fel principal vegetarian (falafel, cartofi prăjiți, pilaf de bulgur, tocană de legume, rondele de ceapă) disponibil fără cost suplimentar. Alergiile pot fi acomodate dacă sunt anunțate la rezervare. Alcoolul este un supliment opțional, niciodată impus.' }
    ],
    cta: {
      primary: 'Rezervați Croaziera cu Cină · Plata pe Vapor',
      secondary: '4,8★ · Licențiat TÜRSAB · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tur de Istanbul Noaptea — Cea Mai Bună Experiență de Seară pe Bosfor',
      description: 'Cel mai apreciat tur de Istanbul noaptea: croazieră pe Bosfor de 3 ore cu cină, dansuri populare live și poduri iluminate. 4,8★, licențiat TÜRSAB, plata pe vapor. Seara perfectă în Istanbul.'
    },
    hero: {
      h1: 'Tur de Istanbul Noaptea',
      subtitle: 'Turul nocturn recomandat în primul rând de localnicii din Istanbul — croazieră pe Bosfor de 3 ore cu cină, divertisment live și cele mai iconice priveliști iluminate ale orașului.',
      badge: 'Seara Iconică din Istanbul · 3 Ore · Cină Inclusă'
    },
    intro: [
      'Un **tur de Istanbul noaptea** trebuie să facă trei lucruri: să vă arate reperele iconice ale orașului, să vă hrănească bine și să vă distreze. Croaziera noastră cu cină pe Bosfor le face pe toate trei într-o singură seară de 3 ore — și de aceea majoritatea ghidurilor din Istanbul o recomandă ca experiența #1 de tur nocturn.',
      'Traseul **turului de Istanbul noaptea** acoperă cele mai bune repere iluminate: Palatul Dolmabahçe, Moscheea Ortaköy, Podul Bosfor (își schimbă culorile), cartierul Bebek, Rumeli Hisarı, Podul FSM, Palatul Beylerbeyi, malul asiatic Üsküdar și Turnul Fecioarei în depărtare. Majoritatea tururilor orașului vi le arată din autobuz — noi vi le arătăm de pe apă, de unde sunt cele mai dramatice.',
      'Cina este inclusă (meniu turcesc cu multiple feluri), spectacol de dansuri populare turcești live, sema, dans oriental și set DJ. Dacă sunteți în Istanbul 2-3 zile, aceasta este singura seară care dă cel mai puternic pumn. 4,8★ de la peste 11.317 călători, plata pe vapor, fără plată în avans.'
    ],
    highlights: [
      { title: 'Toate priveliștile nocturne iconice din Istanbul', desc: 'Palatul Dolmabahçe, Moscheea Ortaköy, Podul Bosfor iluminat, Rumeli Hisarı, Podul FSM, Palatul Beylerbeyi, Turnul Fecioarei. Fiecare reper major la iluminarea nocturnă de vârf.' },
      { title: 'Cină turcească completă inclusă', desc: '10 mezeluri, aperitiv cald, fel principal (somon/biban de mare/pui/chiftele/vegetarian), desert, băuturi răcoritoare nelimitate. Certificat halal. Prețat la €{p.dinnerStd}/persoană — totul inclus.' },
      { title: 'Dansuri populare live + sema + oriental', desc: 'Divertisment turcesc tradițional: spectacol Mevlana sema, 5 dansuri populare regionale, dans oriental, muzică live, DJ. 40 de minute de spectacol, muzică de fundal toată seara.' },
      { title: 'Ușor pentru prima dată în Istanbul', desc: 'Punct central de întâlnire (debarcaderul Kabataș), transfer de la hotel (+€{p.transfer}/persoană), echipaj vorbitor de engleză, plata pe vapor. Zero stres logistic. Veniți, bucurați-vă, plecați.' }
    ],
    faq: [
      { q: 'Care este cel mai bun tur nocturn din Istanbul?', a: 'Croaziera cu cină pe Bosfor este constant clasată pe #1. Motivele: (1) vă oferă toate priveliștile nocturne iconice de pe apă, (2) include cina și spectacolul într-un singur pachet, (3) 3 ore sunt suficiente pentru a vedea mult fără oboseală, (4) punct central de întâlnire, (5) plata pe vapor reduce frecarea rezervării. Majoritatea ghidurilor de călătorie din Istanbul o recomandă ca „singurul lucru obligatoriu de făcut noaptea".' },
      { q: 'Cât costă turul de Istanbul noaptea?', a: 'Turul nostru nocturn cu cină pe Bosfor: Standard €{p.dinnerStd}/persoană, VIP €{p.dinnerVip}/persoană. Inclus turul, cina, divertismentul, băuturile răcoritoare. Opțional: alcool +€{p.unlimited}/persoană, transfer de la hotel +€{p.transfer}/persoană. Plata pe vapor — fără plată în avans.' },
      { q: 'Turul de Istanbul noaptea este sigur pentru călătorii solo?', a: 'Da — foarte sigur. Vapor licențiat TÜRSAB, echipaj profesionist vorbitor de engleză, CCTV pe punte, veste de salvare disponibile. Mulți călători solo rezervă acest tur. Cinați la o masă partajată sau privată (la alegere) și seara este incluzivă — întâlniți alți călători dacă doriți sau păstrați-vă pentru dumneavoastră.' },
      { q: 'Care este cel mai bun moment pentru un tur nocturn în Istanbul?', a: 'Turul nostru cu cină pe Bosfor este 21:00-00:00 (3 ore). Acesta este momentul de iluminare de vârf pentru toate reperele Istanbulului — poduri complet iluminate, palate strălucitoare, luna pe apă. Dacă doriți mai devreme (ora aurie), luați în considerare turul la apus de la 17:30.' },
      { q: 'Cum ajung la punctul de întâlnire pentru turul nocturn din Istanbul?', a: 'Punctul de întâlnire este debarcaderul Kabataș (malul european central, lângă Palatul Dolmabahçe). Cu tramvaiul: T1 până la stația Kabataș (capăt de linie). Cu taxiul: ~15 min din Taksim. Pe jos: 20 min din Taksim pe Bulevardul İnönü. Pe această pagină există videoclipuri cu direcțiile pe jos. Transfer de la hotel disponibil cu +€{p.transfer}/persoană dacă preferați.' },
      { q: 'Pot rezerva turul de Istanbul noaptea în aceeași zi?', a: 'Adesea da, mai ales în zilele lucrătoare. Weekendurile se umplu mai repede. Formularul de rezervare de pe această pagină vă permite să verificați disponibilitatea pentru diseară și să rezervați în mai puțin de 1 minut. Pentru cereri urgente în aceeași zi, scrieți-ne pe WhatsApp la +90 532 520 1700.' }
    ],
    cta: {
      primary: 'Rezervați Turul Nocturn · Plata pe Vapor',
      secondary: 'De la €{p.dinnerStd}/persoană · Cină + spectacol incluse · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Tur cu Vaporul în Istanbul — Croazieră pe Bosfor cu Cină și Spectacol',
      description: 'Cel mai bun tur cu vaporul din Istanbul: croazieră pe Bosfor de 3 ore cu cină completă, dansuri populare live și priveliști nocturne iluminate. De la €{p.dinnerStd}/persoană, plata pe vapor, evaluare 4,8★.'
    },
    hero: {
      h1: 'Tur cu Vaporul în Istanbul',
      subtitle: 'Cel mai rezervat tur cu vaporul din Istanbul de către călători — croazieră pe Bosfor cu mâncare turcească, divertisment live și priveliștile iconice ale orașului de pe apă.',
      badge: '4,8★ · TÜRSAB A-17672 · Plata pe Vapor'
    },
    intro: [
      'Când căutați „tur cu vaporul în Istanbul", căutați singurul lucru care definește orașul de pe apă: Bosforul. Turul nostru cu vaporul pe Bosfor de 3 ore vă trece pe lângă fiecare reper major din Istanbul — Palatul Dolmabahçe, Moscheea Ortaköy, Podul Bosfor, Rumeli Hisarı, Palatul Beylerbeyi și Turnul Fecioarei — cu cină turcească completă și divertisment live.',
      'Spre deosebire de multele feriboturi turistice de 1 oră care acoperă mai puțin din Bosfor și sar peste cină și divertisment, **turul nostru cu vaporul în Istanbul** este o experiență completă de seară: îmbarcare la 20:00 la debarcaderul Kabataș, tur până la miezul nopții, 10 mezeluri, fel principal, desert, sema, dansuri populare, dans oriental și DJ. Obțineți și ieșirea de seară ca parte a turului.',
      'Fie că aveți o seară sau o săptămână întreagă la Istanbul, acest **tur cu vaporul în Istanbul** face treaba. 4,8★ de la peste 11.317 călători, licențiat TÜRSAB (A-17672), meniu certificat halal și plata pe vapor — fără angajament financiar până nu sunteți mulțumit de experiență.'
    ],
    highlights: [
      { title: 'Toate reperele majore ale Bosforului', desc: 'Dolmabahçe, Çırağan, Moscheea Ortaköy, Podul Bosfor, Bebek, Rumeli Hisarı, Podul FSM, Palatul Beylerbeyi, Üsküdar, Turnul Fecioarei. Ambele maluri, european și asiatic, într-un singur tur.' },
      { title: 'Cină + spectacol incluse', desc: 'Nu doar un tur cu vaporul — cină turcească completă cu multiple feluri, spectacole de dansuri populare live, sema, dans oriental, DJ. Ceea ce face 3 ore distractive, nu doar turism.' },
      { title: 'Plecare de seară (cea mai bună iluminare)', desc: 'Plecarea de la 21:00 surprinde Bosforul iluminat în plină strălucire — poduri, palate, moschei toate iluminate. Mai dramatic decât tururile de zi care arată aceleași repere în lumină plată.' },
      { title: 'Rezervare ușoară, plată ușoară', desc: 'Rezervați cu formularul de pe această pagină în mai puțin de 1 minut. Plata pe vapor — fără plată în avans. Transfer de la hotel disponibil de la +€{p.transfer}/persoană. Anulare gratuită cu 2 ore înainte de plecare.' }
    ],
    faq: [
      { q: 'Care este cel mai bun tur cu vaporul în Istanbul?', a: 'Croaziera cu cină pe Bosfor este constant clasată pe #1. Acoperă toate reperele majore, include cina și divertismentul și rulează seara când reperele sunt iluminate. Alte opțiuni (feriboturi hop-on, vapoare turistice de dimineață) acoperă trasee mai scurte, sar cina și nu includ divertisment. Pentru o seară în Istanbul, acesta este cel mai complet tur cu vaporul.' },
      { q: 'Cât durează turul cu vaporul în Istanbul?', a: '3 ore. Îmbarcare de la 20:00 la debarcaderul Kabataș, plecare 21:00, revenire ~00:00. Acoperă Bosforul complet de la Dolmabahçe la Rumeli Hisarı și înapoi. Suficient timp pentru cină completă + spectacol fără oboseală.' },
      { q: 'Cât costă turul cu vaporul în Istanbul?', a: 'Turul nostru cu vaporul și cină: Standard €{p.dinnerStd}/persoană (fost €{p.dinnerStdOriginal}), VIP cu meniu premium €{p.dinnerVip}/persoană (fost €{p.dinnerVipOriginal}). 0-3 ani gratuit, 4-8 ani la jumătate de preț. Plata pe vapor. Alcoolul și transferul de la hotel sunt suplimente opționale.' },
      { q: 'De unde pleacă tururile cu vaporul în Istanbul?', a: 'Vaporul nostru pleacă de la debarcaderul Kabataș, malul european central al Istanbulului, lângă Palatul Dolmabahçe. Accesibil cu tramvaiul T1 (stația Kabataș), taxi 15 min din Taksim sau pe jos 20 min din Taksim. Transfer de la hotel disponibil din cartierele centrale cu +€{p.transfer}/persoană.' },
      { q: 'Acest tur cu vaporul este potrivit pentru familiile cu copii?', a: 'Da — foarte prietenos cu familia. Copiii 0-3 ani sunt gratuit, 4-8 ani 50% reducere. Zonă interioară acoperită, meniu pentru copii la cerere și divertisment (sema, dansuri populare) captivant pentru copii. Multe familii din toată lumea rezervă acest tur.' },
      { q: 'Trebuie să aduc ceva la turul cu vaporul?', a: 'Pașaport sau carte de identitate (pentru înregistrarea pe vapor), jachetă subțire (puntea poate fi răcoroasă), încălțăminte confortabilă dacă plănuiți să dansați. Smartphone pentru fotografii. Numerar sau card pentru plata pe vapor (ambele acceptate). Orice altceva — mâncare, băutură, divertisment — este pe vapor.' }
    ],
    cta: {
      primary: 'Rezervați Turul cu Vaporul · Plata pe Vapor',
      secondary: '3 ore · Cină + spectacol · De la €{p.dinnerStd}/persoană · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Excursie pe Bosfor — Experiență Premium de Tur în Istanbul, de la €{p.dinnerStd}',
      description: 'Planificați excursia pe Bosfor: croazieră cu cină de 3 ore cu ospăț turcesc, spectacol de dansuri populare live, priveliști nocturne iluminate. Evaluare 4,8★, plata pe vapor, 12 zone de transfer.'
    },
    hero: {
      h1: 'Excursie pe Bosfor',
      subtitle: 'Excursia pe Bosfor cea mai recomandată de călători — croazieră cu cină de 3 ore care acoperă fiecare reper major din Istanbul, cu mâncare, divertisment și priveliști nocturne.',
      badge: 'Experiență Completă pe Bosfor · Plecare de Seară'
    },
    intro: [
      'O **excursie pe Bosfor** poate însemna un feribot turistic de 1 oră sau o seară completă de tur cu cină — noi facem aceasta a doua și majoritatea călătorilor consideră că este experiența de valoare mai bună. 3 ore, €{p.dinnerStd}/persoană, cină și divertisment incluse. Nu treceți doar pe lângă repere — mâncați, priviți spectacolul și vă bucurați de seară.',
      'Traseul **excursiei noastre pe Bosfor** acoperă tot ce merită văzut: Palatul Dolmabahçe (reședința sultanului otoman din secolul al XIX-lea), Moscheea Ortaköy (una dintre cele mai fotografiate moschei din Istanbul), Podul Bosfor (își schimbă culoarea noaptea), Rumeli Hisarı (construit de Fatih Sultan Mehmet în 1452), Palatul Beylerbeyi (malul asiatic) și Turnul Fecioarei pe o insulă mică. Toate explicate de echipaj vorbitor de engleză.',
      'Fie că sunteți în Istanbul 24 de ore sau o săptămână, aceasta este **excursia pe Bosfor** care vă oferă cel mai mult într-o singură seară. Evaluare 4,8★ de la peste 11.317 călători, licențiat TÜRSAB A-17672, meniu prietenos halal, plata pe vapor — fără risc de plată în avans.'
    ],
    highlights: [
      { title: 'Bosforul complet dintr-o singură lovitură', desc: 'Malul european (Dolmabahçe, Ortaköy, Rumeli Hisarı), malul asiatic (Beylerbeyi, Üsküdar), ambele poduri ale Bosforului, Turnul Fecioarei. Fiecare reper major vizibil în 3 ore.' },
      { title: 'Cină + divertisment incluse', desc: 'Nu doar feribot turistic — cină turcească completă cu mezeluri, fel principal, desert. Spectacol de dansuri populare live, sema, oriental, DJ. Valoare de divertisment dincolo de doar peisaj.' },
      { title: 'Seară = cea mai bună iluminare', desc: 'Excursiile de zi pe Bosfor vă arată reperele în lumină plată. Excursiile de seară surprind totul iluminat: palate strălucitoare, poduri colorate, moschei reflectate în apa întunecată. Fotografii mai bune, mai dramatice.' },
      { title: 'De la €{p.dinnerStd} — plata pe vapor', desc: 'Nu este necesară plata în avans. Plata pe vapor (numerar sau card). Anulare gratuită cu până la 2 ore înainte de plecare. 0-3 ani gratuit, 4-8 ani la jumătate de preț. Prețuri transparente.' }
    ],
    faq: [
      { q: 'Care sunt cele mai bune excursii pe Bosfor în Istanbul?', a: 'Turul cu cină de seară este constant pe primele locuri. Opțiunile de zi (feriboturi în buclă de 1 oră, vapoare turistice de 2 ore) arată mai puțin și nu includ cină. Pentru valoare, este greu de învins un tur de 3 ore cu cină, spectacol și punct central de întâlnire. Costul turului nostru €{p.dinnerStd} elimină nevoia unei seri separate cu cină + divertisment.' },
      { q: 'Cât durează o excursie pe Bosfor?', a: 'Excursia noastră pe Bosfor durează 3 ore în total (plecare 21:00, revenire 00:00). Există opțiuni mai scurte (feriboturi turistice de 1 oră, tururi de 90 de minute), dar sar cina și divertismentul. Pentru experiența completă de seară, 3 ore sunt ideale — suficient pentru a vedea totul fără a obosi.' },
      { q: 'Excursia pe Bosfor merită?', a: 'Da — aproape fiecare ghid de călătorie din Istanbul listează „croaziera pe Bosfor" în top 5 lucruri obligatorii. Orașul a fost construit în jurul acestui strâmtoare; dacă nu ați văzut Bosforul de pe apă, nu ați văzut cu adevărat Istanbulul. Turul nostru specific de seară adaugă cină și divertisment, făcând o ieșire completă de seară în loc de doar turism.' },
      { q: 'Ce să aduc la excursia pe Bosfor?', a: 'Pașaport sau carte de identitate (pentru înregistrarea pe vapor), jachetă subțire (seara puntea este răcoroasă), smartphone/cameră, încălțăminte confortabilă pentru ringul de dans. Numerar sau card pentru plată. Orice altceva este pe vapor. Transfer de la hotel disponibil cu +€{p.transfer}/persoană dacă nu doriți să folosiți transportul public.' },
      { q: 'Excursia pe Bosfor este potrivită pentru copii?', a: 'Da — foarte prietenoasă cu copiii. Copiii 0-3 ani sunt gratuit (transfer inclus), 4-8 ani 50% reducere. Zonă interioară acoperită, meniu pentru copii la cerere și divertisment delicat și captivant. Multe familii rezervă această excursie ca punctul culminant al călătoriei lor în Istanbul.' },
      { q: 'Care sunt opririle excursiei pe Bosfor?', a: 'Este un tur continuu — nu ne oprim la repere (fără coborâre). Vaporul trece pe lângă fiecare reper, echipajul explică ce vedeți, vă relaxați la masă sau ieșiți pe puntea deschisă pentru fotografii. Fără cozi, fără mers pe jos — doar 3 ore fără probleme pe apă.' }
    ],
    cta: {
      primary: 'Rezervați Excursia pe Bosfor · Plata pe Vapor',
      secondary: '3 ore · Cină + spectacol · Anulare gratuită cu 2 ore înainte · Licențiat TÜRSAB',
      tertiary: 'Verificați Disponibilitatea'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bilete Croazieră pe Bosfor — Rezervare Directă, de la €{p.dinnerStd} Plata pe Vapor',
      description: 'Cumpărați bilete pentru croaziera pe Bosfor direct. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Fără plată în avans, plata pe vapor. Anulare gratuită cu 2 ore înainte. Evaluare 4,8★, TÜRSAB A-17672.'
    },
    hero: {
      h1: 'Bilete Croazieră pe Bosfor',
      subtitle: 'Săriți peste taxele intermediarilor — cumpărați biletele pentru croaziera pe Bosfor direct de la noi. Fără plată în avans, plata pe vapor, anulare gratuită cu până la 2 ore înainte de plecare.',
      badge: 'Rezervare Directă · Fără Plată în Avans · 40% REDUCERE'
    },
    intro: [
      'Căutați **bilete pentru croaziera pe Bosfor**? Cumpărați direct. Biletele noastre sunt €{p.dinnerStd} (Standard) sau €{p.dinnerVip} (VIP) — 40% reducere față de prețul normal (€{p.dinnerStdOriginal} și €{p.dinnerVipOriginal}). Site-urile de rezervări terți adaugă de obicei 20-40% comision. Rezervând direct, economisiți — și tot plătiți pe vapor.',
      'Procesul nostru de **bilete pentru croaziera pe Bosfor**: completați formularul de pe această pagină în mai puțin de 1 minut (data, număr de oaspeți, pachet, contact), confirmăm instant prin WhatsApp / Telegram / WeChat, apăreți la debarcaderul Kabataș la 20:00, plătiți pe vapor, vă bucurați de croaziera cu cină de 3 ore. Fără bilet fizic de imprimat, fără cupon de primit pe email — confirmarea este biletul dumneavoastră.',
      'Fie că rezervați croaziera cu cină pentru diseară sau o rezervați pentru o dată specifică săptămâna viitoare, **biletele pentru croaziera pe Bosfor direct** sunt cel mai rapid mod. Evaluare 4,8★, licențiat TÜRSAB (A-17672), meniu certificat halal și suportă suplimente de transfer de la hotel și alcool.'
    ],
    highlights: [
      { title: 'Rezervare directă — fără taxe de intermediar', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Site-urile terți percep €30-80+ pentru același tur. Economisiți rezervând direct de la noi. Fără taxe ascunse, fără adaos de comision.' },
      { title: 'Plata pe vapor — fără plată în avans', desc: 'Rezervați acum locul, plătiți când urcați pe vapor. Numerar sau card acceptate. Gratuit dacă anulați cu 2+ ore înainte de plecare. Zero risc financiar să rezervați devreme.' },
      { title: 'Confirmare în mai puțin de 1 minut', desc: 'Completați formularul → confirmăm prin WhatsApp / Telegram / WeChat. Fără cupon PDF de email de imprimat. Mesajul nostru este biletul dumneavoastră. Ajungeți la debarcader la 20:00.' },
      { title: 'Preț actual de lansare 40% REDUCERE', desc: 'Standard fost €{p.dinnerStdOriginal}, acum €{p.dinnerStd}. VIP fost €{p.dinnerVipOriginal}, acum €{p.dinnerVip}. 40% reducere pentru că rezervați direct. Nu este un truc cu termen limitat — este prețul nostru standard de rezervare directă.' }
    ],
    faq: [
      { q: 'Cât costă biletele pentru croaziera pe Bosfor?', a: 'Standard: €{p.dinnerStd}/persoană (normal €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/persoană (normal €{p.dinnerVipOriginal}). Include turul de 3 ore, cină turcească cu multiple feluri, spectacol de dansuri populare live, băuturi răcoritoare nelimitate. 0-3 ani gratuit, 4-8 ani 50% reducere. Plata pe vapor — fără plată în avans.' },
      { q: 'De unde pot cumpăra bilete pentru croaziera pe Bosfor?', a: 'Direct de pe această pagină — completați formularul de rezervare, confirmăm instant prin WhatsApp / Telegram / WeChat. Plata pe vapor. Platformele terți (Viator, GetYourGuide, Klook) vând și bilete, dar de obicei percep €30-80+ — acesta este adaosul intermediarului. Direct este cel mai ieftin și mai rapid.' },
      { q: 'Trebuie să imprim biletul pentru croaziera pe Bosfor?', a: 'Nu — nu este necesar bilet fizic sau cupon. După rezervare, vă trimitem o confirmare prin WhatsApp (sau Telegram/WeChat) cu punctul de întâlnire, ora și numele rezervării. Doar arătați telefonul la debarcader. Atât.' },
      { q: 'Pot anula sau returna biletul pentru croaziera pe Bosfor?', a: 'Da — anulare gratuită cu până la 2 ore înainte de plecare. Doar scrieți pe WhatsApp. Pentru că încă nu ați plătit (plata pe vapor), nu este necesară restituire — pur și simplu nu veniți, fără costuri. Mult mai flexibil decât biletele plătite în avans de la terți.' },
      { q: 'Biletele pentru croaziera pe Bosfor sunt disponibile în aceeași zi?', a: 'Adesea da, mai ales în zilele lucrătoare. Weekendurile și vacanțele se umplu mai repede. Verificați disponibilitatea prin formularul de rezervare — se actualizează în timp real. Rezervarea în aceeași zi este de obicei posibilă cu câteva ore înainte de plecarea de la 21:00. Pentru cereri urgente, WhatsApp.' },
      { q: 'Biletele pentru copii la croaziera pe Bosfor sunt gratuite?', a: 'Copiii **0-3 ani complet gratuit** (fără taxe, fără costuri ascunse, transfer inclus). **4-8 ani 50% reducere** (€{p.dinnerStd}/2 = €12 la Standard). **9+ ani preț întreg pentru adulți.** Prețuri plafonate și transparente — fără trucuri de „supliment pentru bebeluș".' }
    ],
    cta: {
      primary: 'Cumpărați Bilete · Plata pe Vapor',
      secondary: 'Rezervare directă · Fără plată în avans · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Verificați Disponibilitatea'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Croazieră pe Bosfor în Ultimul Moment — Rezervare pentru Diseară, Plata pe Vapor',
      description: 'Rezervare croazieră pe Bosfor în ultimul moment pentru diseară. Disponibilitate în aceeași zi, plata pe vapor, fără plată în avans. Confirmare WhatsApp în câteva minute. De la €{p.dinnerStd}/persoană.'
    },
    hero: {
      h1: 'Croazieră pe Bosfor în Ultimul Moment',
      subtitle: 'Disponibilitate pentru diseară, confirmată în câteva minute. Fără plată în avans, fără cupon pre-imprimat — doar veniți la debarcader și bucurați-vă de seară.',
      badge: 'Rezervare în Aceeași Zi · Confirmat în Câteva Minute · Plata pe Vapor'
    },
    intro: [
      'Ați aterizat în Istanbul în această după-amiază și doriți o seară minunată diseară? **Croaziera pe Bosfor în ultimul moment** funcționează. Rezervăm special locuri pentru rezervările în aceeași zi, pentru că știm că mulți călători decid dimineața. Completați formularul aici, confirmăm prin WhatsApp în câteva minute, apăreți la debarcaderul Kabataș la 20:00, plătiți pe vapor, vă bucurați.',
      '**Croaziera noastră pe Bosfor în ultimul moment** are același program de seară ca rezervările anticipate: 3 ore pe apă (21:00-00:00), cină turcească cu multiple feluri, spectacol de dansuri populare live, sema, dans oriental, DJ. Palatul Dolmabahçe iluminat, Moscheea Ortaköy, Podul Bosfor — aceleași priveliști iconice. Același preț €{p.dinnerStd} Standard sau €{p.dinnerVip} VIP.',
      'Anularea în aceeași zi este gratuită cu până la 2 ore înainte de plecare, deoarece **plata pe vapor** înseamnă că încă nu ați promis nimic. Ați rezervat la 14:00 și v-ați schimbat planurile până la 19:00? Doar scrieți pe WhatsApp — fără restituire, fără problemă. Aceasta este flexibilitatea **turului de Istanbul în ultimul moment** pe care călătorii o apreciază.'
    ],
    highlights: [
      { title: 'Locuri încă disponibile pentru diseară', desc: 'Rezervăm 5-10 locuri pe zi pentru rezervările în aceeași zi. Verificați formularul de mai sus — disponibilitate în timp real. Dacă turul de astăzi este plin, cel de mâine este de obicei deschis.' },
      { title: 'Confirmare în mai puțin de 5 minute', desc: 'Completați formularul → mesaj de confirmare WhatsApp/Telegram/WeChat → gata. Fără cupon email de așteptat, fără cod QR de imprimat. Mesajul nostru este biletul dumneavoastră.' },
      { title: 'Zero plată până când urcați pe vapor', desc: 'Plata pe vapor, numerar sau card. Dacă nu veniți (schimbare de planuri, boală, vreme), fără costuri. Anulare gratuită cu până la 2 ore înainte de plecare. Cu adevărat prietenos cu ultimul moment.' },
      { title: 'Transfer de la hotel în aceeași zi adesea disponibil', desc: 'Transferul de la hotel necesită normal notificare de 24 de ore, dar pentru rezervările în aceeași zi între 14:00-17:00 putem aranja adesea preluarea cu +€{p.transfer}/persoană. Pentru cereri urgente de transfer, WhatsApp.' }
    ],
    faq: [
      { q: 'Chiar pot rezerva croaziera pe Bosfor pentru diseară?', a: 'Da — des. Rezervăm locuri pentru rezervările în aceeași zi. Verificați formularul de mai sus pentru disponibilitatea din seara aceasta. Dacă sunt locuri disponibile, puteți rezerva până la 18:00 (3 ore înainte de plecare). Weekendurile sunt mai aglomerate — rezervați mai devreme în zi dacă este posibil.' },
      { q: 'Cât de în ultimul moment pot rezerva?', a: 'Rezervările rămân deschise până la 18:00 pentru vaporul de la 21:00. După 18:00, scrieți-ne direct pe WhatsApp la +90 532 520 1700 — dacă sunt locuri libere, putem confirma manual. După 19:30 este foarte aglomerat dacă nu sunteți deja la debarcaderul Kabataș și vă puteți îmbarca rapid.' },
      { q: 'Croaziera pe Bosfor în ultimul moment este mai scumpă?', a: 'Nu — același preț ca rezervarea anticipată. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Nu facem „prețuri dinamice" sau surtaxe pentru ultimul moment. Același vapor, aceeași cină, același spectacol, același preț.' },
      { q: 'Ce se întâmplă dacă turul din această seară este complet?', a: 'Turul de mâine este de obicei deschis — operăm 365 de zile pe an, în fiecare zi. Puteți rezerva pentru mâine și tot să fiți „în ultimul moment", însemnând că tocmai ați decis. Tururile din zilele lucrătoare au mai mult spațiu decât weekendurile.' },
      { q: 'Puteți aranja transferul de la hotel în ultimul moment?', a: 'Transferul în aceeași zi este posibil până la ~17:00 pentru turul de la 21:00. După 17:00, s-ar putea să nu avem șofer disponibil — în acest caz, puteți lua un taxi la debarcaderul Kabataș (15 min din Taksim, 10 min din Sultanahmet, ~€10-15). Central și ușor.' },
      { q: 'Dacă sunt deja la Kabataș și vreau să urc?', a: 'Dacă sunteți la debarcader și sunt locuri libere, puteți urca pur și simplu. Scrieți-ne pe WhatsApp sau întrebați echipajul — dacă este loc, vă adăugăm. Același preț, plata pe vapor. În termeni de tur se numește „walk-on" — funcționează aici.' }
    ],
    cta: {
      primary: 'Rezervați pentru Diseară · Plata pe Vapor',
      secondary: 'Rezervare în aceeași zi · Confirmat în câteva minute · Anulare gratuită cu 2 ore înainte',
      tertiary: 'WhatsApp pentru Rezervări Urgente'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Preț Croazieră Istanbul — Tarife Transparente, de la €{p.dinnerStd} Plata pe Vapor',
      description: 'Prețuri croaziere pe Bosfor în Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. 0-3 ani gratuit. Suplimente transparente (alcool +€{p.unlimited}, transfer +€{p.transfer}). Fără taxe ascunse.'
    },
    hero: {
      h1: 'Preț Croazieră Istanbul',
      subtitle: 'Prețuri transparente, fără taxe ascunse. Standard €{p.dinnerStd}/persoană, VIP €{p.dinnerVip}/persoană — și plătiți pe vapor, nu acum.',
      badge: 'Transparent · 40% REDUCERE Direct · 0-3 Ani Gratuit'
    },
    intro: [
      '**Prețurile croazierelor din Istanbul** variază foarte mult — de la feriboturi economice de €15 care sar peste cină până la iahturi resort de €150+. Prețul nostru este la mijloc și oferă cea mai bună valoare: €{p.dinnerStd} pentru Standard cu croazieră completă cu cină și spectacol de 3 ore, €{p.dinnerVip} pentru VIP cu experiență premium în față la scenă. Fără taxe ascunse, fără suplimente surpriză.',
      'O defalcare detaliată a **prețului croazierei din Istanbul**, pentru că transparența contează:\n\n- **Croazieră cu Cină Standard**: €{p.dinnerStd}/persoană (fost €{p.dinnerStdOriginal}, 40% reducere). Include tur de 3 ore, 10 mezeluri, fel principal, desert, băuturi răcoritoare nelimitate, spectacol live.\n- **Croazieră cu Cină VIP**: €{p.dinnerVip}/persoană (fost €{p.dinnerVipOriginal}). Adaugă locuri în față la scenă, 15+ mezeluri, opțiuni de mușchi de vită/antricot, serviciu prioritar.\n- **0-3 ani**: Gratuit. 4-8 ani: 50% reducere. 9+ ani: preț întreg.\n\nSuplimente (opționale):\n- 2 pahare alcool: +€{p.alcohol2}/persoană\n- Alcool local nelimitat: +€{p.unlimited}/persoană\n- Transfer de la hotel dus-întors: +€{p.transfer}/persoană\n- Aranjament masă romantică: +€{p.romantic}/masă',
      'Și important: **plata pe vapor**. Nu promiteți un ban până când nu sunteți pe vapor. Anulare gratuită cu până la 2 ore înainte de plecare. Fără angajament, fără risc — cel mai **prietenos cu consumatorul preț pentru croaziera din Istanbul** pe care îl veți găsi.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (fost €{p.dinnerStdOriginal})', desc: '40% reducere față de prețul normal. Tur de 3 ore, cină turcească completă, spectacol live, băuturi răcoritoare nelimitate. Cel mai popular pachet — acoperă tot ce aveți nevoie pentru o seară frumoasă.' },
      { title: 'VIP: €{p.dinnerVip} (fost €{p.dinnerVipOriginal})', desc: '40% reducere față de prețul normal. Adaugă locuri în față la scenă, 15+ mezeluri, fel principal premium (mușchi de vită, antricot), serviciu prioritar al chelnerilor. Pentru ocazii speciale sau călători premium.' },
      { title: 'Preț pentru copii: 0-3 gratuit, 4-8 la jumătate de preț', desc: '0-3 complet gratuit (fără taxe). 4-8 cu 50% reducere din tariful adult. 9+ preț întreg adult. Transparent, fără trucuri de prețuri familiale. Transferul este și el gratuit pentru 0-3.' },
      { title: 'Suplimente — doar când le doriți', desc: 'Alcool: €{p.alcohol2} sau €{p.unlimited}/persoană. Transfer: €{p.transfer}/persoană. Masă romantică: €{p.romantic}/masă. Toate opționale, neîmpachetate. Alegeți doar ce aveți nevoie.' }
    ],
    faq: [
      { q: 'Cât costă un tur în Istanbul?', a: 'Croazieră cu Cină Standard: €{p.dinnerStd}/persoană (normal €{p.dinnerStdOriginal}, 40% reducere). VIP: €{p.dinnerVip}/persoană (normal €{p.dinnerVipOriginal}, 40% reducere). 0-3 ani gratuit, 4-8 ani la jumătate de preț. Plata pe vapor — fără plată în avans. Anulare gratuită cu până la 2 ore înainte de plecare.' },
      { q: 'Există taxe ascunse în prețul turului din Istanbul?', a: 'Nu. Prețul include: tur de 3 ore, cină completă (mezeluri, aperitiv, fel principal, desert), băuturi răcoritoare nelimitate, spectacol live, taxe. Suplimentele opționale (alcool, transfer, masă romantică) sunt separate și cu preț transparent — plătiți doar pentru ce adăugați. Fără „taxă de serviciu", „taxă portuară", supliment surpriză.' },
      { q: 'De ce prețul turului din Istanbul este 40% reducere — este un truc?', a: 'Fără truc. Prețul normal €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} este ce percep site-urile de rezervări terți (Viator, GetYourGuide, Klook) — cu comisioanele lor. Rezervați direct și obțineți €{p.dinnerStd}/€{p.dinnerVip}. Aceasta este diferența de 40%. Fără trucuri de preț limitat sau dinamic.' },
      { q: 'Cum se compară prețul turului din Istanbul cu alte opțiuni?', a: 'Feriboturi în buclă: €5-10, 1 oră, fără cină, fără divertisment, doar turism. Tururi economice cu cină: €20-30, aglomerate, mâncare medie, spectacol scurt. Standardul nostru (€{p.dinnerStd}): 3 ore, cină completă, spectacol complet, masă privată, licențiat TÜRSAB. VIP (€{p.dinnerVip}): în față la scenă, meniu premium. Iahturi resort: €100-150+, excesiv pentru călătorii solo/cupluri.' },
      { q: 'Trebuie să plătesc în avans prețul turului din Istanbul?', a: 'Nu — **plata pe vapor**. Rezervați acum (formular de 1 minut), confirmăm pe WhatsApp, veniți la 20:00 și plătiți pe vapor (numerar sau card). Anulare gratuită cu până la 2 ore înainte. Zero angajament financiar până nu sunteți mulțumit.' },
      { q: 'Există reduceri de grup la prețul turului din Istanbul?', a: 'Pentru grupuri de 10+, putem oferi 5-10% reducere — scrieți pe WhatsApp cu dimensiunea grupului. Pentru 25+, luați în considerare turul privat (întregul vapor pentru grupul dumneavoastră, meniu personalizat). Pentru 2-9 persoane se aplică prețurile standard — deja 40% reducere față de prețul normal.' }
    ],
    cta: {
      primary: 'Rezervați · Plata pe Vapor',
      secondary: 'De la €{p.dinnerStd}/persoană · 0-3 ani gratuit · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Turism pe Bosfor — Toate Reperele Istanbulului de pe Apă',
      description: 'Turul turistic pe Bosfor acoperă fiecare reper major: Dolmabahçe, Moscheea Ortaköy, Podul Bosfor, Rumeli Hisarı, Beylerbeyi, Turnul Fecioarei. Tur de seară de 3 ore cu cină, €{p.dinnerStd}.'
    },
    hero: {
      h1: 'Turism pe Bosfor',
      subtitle: 'Toate reperele iconice ale Istanbulului — de pe apă, noaptea, cu cină. Un singur tur de 3 ore acoperă Dolmabahçe, Moscheea Ortaköy, Podul Bosfor, Rumeli Hisarı și multe altele.',
      badge: '10+ Repere · Maluri European și Asiatic · 3 Ore'
    },
    intro: [
      '**Turismul pe Bosfor** de pe apă bate orice tur cu autobuzul. Bosforul este cea mai istorică cale navigabilă a orașului — sultani otomani, împărați bizantini, negustori greci și nave de război ruse au trecut cu toții pe aici. Astăzi turul nostru de 3 ore, cu comentarii de la echipajul vorbitor de engleză, trece pe lângă fiecare reper major al Istanbulului care definește zarea.',
      'Traseul **turului nostru turistic pe Bosfor** (plecare de seară, 21:00-00:00):\n\n1. **Palatul Dolmabahçe** — reședința otomană din secolul al XIX-lea, iluminată noaptea\n2. **Palatul Çırağan** — acum hotel de lux, istorie regală\n3. **Moscheea Ortaköy** — una dintre cele mai fotografiate moschei din Istanbul, pe apă\n4. **Podul Bosfor** — alternează noaptea între albastru, violet, auriu\n5. **Bebek** — cartier elegant de pe malul european\n6. **Rumeli Hisarı** — construit de Fatih Sultan Mehmet în 1452 înainte de cucerirea Constantinopolului\n7. **Podul Fatih Sultan Mehmet** — al doilea pod al Bosforului, arc dramatic\n8. **Palatul Beylerbeyi** — malul asiatic, reședință de vară otomană\n9. **Üsküdar** — malul asiatic al Istanbulului, cartier tradițional\n10. **Turnul Fecioarei** — turn pe mica insulă, unul dintre cele mai romantice simboluri ale Istanbulului',
      'Cina și divertismentul sunt incluse — nu separat — astfel **turismul pe Bosfor** se transformă într-o seară completă. Cină turcească cu multiple feluri, spectacol de dansuri populare live, sema, dans oriental, DJ. Evaluare 4,8★ de la peste 11.317 călători, licențiat TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ repere majore ale Istanbulului', desc: 'Palatul Dolmabahçe, Palatul Çırağan, Moscheea Ortaköy, Podul Bosfor, Rumeli Hisarı, Podul FSM, Palatul Beylerbeyi, Üsküdar, Turnul Fecioarei. Fiecare reper esențial din Istanbul într-un singur tur.' },
      { title: 'Ambele maluri, european și asiatic', desc: 'Malul european la ducere (Dolmabahçe → Rumeli Hisarı), malul asiatic la întoarcere (Beylerbeyi → Üsküdar). Două continente într-un tur de 3 ore — doar Istanbulul vă permite acest lucru.' },
      { title: 'Turism de seară = priveliști iluminate', desc: 'Turismul de zi arată reperele în lumină plată. Turul de seară le surprinde la punctul culminant de dramatism: palate galbene strălucitoare, poduri colorate, moschei reflectate în apa întunecată. Mai bune pentru fotografii, mai memorabile.' },
      { title: 'Cină + spectacol incluse', desc: 'Turism + cină + divertisment într-un pachet. Nu trebuie să planificați cină separată după tur. De la €{p.dinnerStd}/persoană, plata pe vapor, total 3 ore.' }
    ],
    faq: [
      { q: 'Ce repere ale Bosforului voi vedea?', a: 'În ordine: Palatul Dolmabahçe, Palatul Çırağan, Moscheea Ortaköy, Podul Bosfor, cartierul Bebek, Rumeli Hisarı, Podul Fatih Sultan Mehmet, Anadolu Hisarı, Palatul Beylerbeyi, Kuzguncuk, Üsküdar și Turnul Fecioarei (vizibil în depărtare). 10+ repere majore într-un singur traseu de 3 ore.' },
      { q: 'Turismul pe Bosfor este mai bun ziua sau noaptea?', a: 'Experiențe diferite. Ziua: vedere mai clară a detaliilor arhitecturale, mai luminoasă pentru fotografii. Noaptea: iluminare dramatică, atmosferă mistică, mai puține vapoare pe apă. Majoritatea călătorilor preferă turul de noapte pentru că reperele par mai magice — iar cina + spectacolul fac din aceasta o seară completă.' },
      { q: 'Vaporul se oprește la repere pentru fotografii?', a: 'Este un tur continuu — fără opriri (fără coborâre). Vaporul trece pe lângă fiecare reper, echipajul explică ce vedeți, puteți ieși pe puntea deschisă pentru fotografii. Fără cozi, fără mers pe jos, fără stres de programare — doar o oportunitate continuă de fotografii de 3 ore.' },
      { q: 'Echipajul comentează în timpul turismului?', a: 'Da — echipajul vorbitor de engleză oferă comentarii scurte pe măsură ce trecem pe lângă fiecare reper major (istorie, arhitectură, curiozități). Nu este o lecție ghidată, mai mult o explicație prietenoasă în timp ce cinați. Pentru istorie mai profundă, recomandăm să faceți pereche cu un tur pe jos în Istanbul în timpul zilei.' },
      { q: 'Cum diferă turismul pe Bosfor de feribotul hop-on?', a: 'Feriboturile hop-on (vapoarele în buclă Șehir Hatları): €5-10, 1-2 ore, de bază, fără cină, aglomerate. Turul nostru: €{p.dinnerStd}, 3 ore, cină completă, spectacol live, masă privată, comentariu în engleză. Pentru turism serios și confortabil, turul de seară este mai bun. Pentru tranzit rapid și economic, feribotul în buclă funcționează.' },
      { q: 'Pot fotografia reperele de pe vapor?', a: 'Da — absolut. Puntea deschisă are locuri excelente pentru fotografie. Reperele trec la 100-200 de metri de vapor. Fotografiile cu smartphone-ul ies grozav; utilizatorii de DSLR/mirrorless pot obține cadre magnifice, în special în tranziția de la ora aurie la ora albastră de la începutul serii.' }
    ],
    cta: {
      primary: 'Rezervați Turul Turistic · Plata pe Vapor',
      secondary: '10+ repere · Cină + spectacol · Anulare gratuită cu 2 ore înainte',
      tertiary: 'Disponibilitate în Seara Aceasta'
    }
  }

};
