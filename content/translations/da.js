/**
 * Danish translations for all 17 landing pages.
 * Mirror of ro.js structure. Modern Danish "du" form.
 * "Bosphorus" → "Bosporus". Brand → "Bosporus om natten" / "aftenkrydstogt på Bosporus".
 * Turkish place names unchanged with diacritics.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Bosporus Middagskrydstogt fra €{p.dinnerStd} — Aftentur Istanbul + Show',
      description: 'Middagskrydstogt på 3 timer på Bosporus: tyrkisk flerretters menu og live folkloreshow. Afgang 20:30 fra Kabataş. Gratis afbestilling, betaling om bord.'
    },
    hero: {
      h1: 'Bosporus Middagskrydstogt i Istanbul',
      subtitle: 'Tre timer med live underholdning, en generøs tyrkisk flerretters middag og de mest imponerende natudsigter over Bosporus.',
      badge: '4,8★ · 11.317 anmeldelser'
    },
    intro: [
      '**Bosporus middagskrydstogtet** er den mest ikoniske aftenoplevelse i Istanbul. Vores tur afgår kl. 19:30 fra Kabataş-anløbsbroen og sejler under de oplyste Bosporus- og Fatih Sultan Mehmet-broer, med en tyrkisk flerretters middag, live folkedanse, orientalsk dans og et DJ-sæt, der holder dækket levende indtil kl. 23:00.',
      'I modsætning til de almindelige turistbåde, der fylder Istanbuls natlandskab, er **vores Bosporus middagskrydstogt** licenseret af TÜRSAB (A-17672) og bedømt med 4,8★ af mere end 11.317 rejsende. Vi holder grupperne små og servicen varm — og da du betaler om bord, er der ingen risiko ved at booke på forhånd.',
      'Uanset om du fejrer en fødselsdag, søger en premium aften i Istanbul for din familie eller ønsker byens mest fotogeniske solnedgang-til-nat overgang — dette er middagskrydstogtet, som først anbefales af de lokale i Istanbul.'
    ],
    highlights: [
      { title: 'Tyrkisk flerretters middag', desc: '10 varianter af koldt mezze, varm forret (paçanga böreği), valg af hovedret (laks / havbars / kylling / kødboller / vegetarisk), iskage til dessert, ubegrænsede sodavand.' },
      { title: 'Live folkedans, orientalsk dans og DJ', desc: 'Mevlana sema-forestilling, 5 traditionelle tyrkiske folkedanse, klassisk orientalsk dans, live tyrkiske musikere, efterfulgt af et DJ-sæt under hele krydstogtet.' },
      { title: 'Komplet natrute på Bosporus', desc: 'Kabataş → Dolmabahçe → Çırağan-paladset → Ortaköy-moskeen → Bebek → Rumeli Hisarı → FSM-broen → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Fra €{p.dinnerStd}/person — betaling om bord', desc: 'Standard krydstogt €{p.dinnerStd} (tidligere €{p.dinnerStdOriginal}). VIP-krydstogt med plads foran scenen og premium menu €{p.dinnerVip}. Ingen forudbetaling. Gratis afbestilling indtil 2 timer før afgang.' }
    ],
    faq: [
      { q: 'Hvornår starter Bosporus middagskrydstogtet?', a: 'Ombordstigning begynder kl. 19:30 ved Kabataş-anløbsbroen. Båden afgår kl. 20:30 og vender tilbage omkring kl. 23:30. Vi anbefaler at ankomme 15-20 minutter tidligere for at installere dig og slappe af.' },
      { q: 'Hvad koster Bosporus middagskrydstogtet?', a: 'Standard krydstogt €{p.dinnerStd}/person (normal pris €{p.dinnerStdOriginal}). VIP-krydstogt med plads foran scenen og premium menu €{p.dinnerVip}/person. 0-3 år gratis, 4-8 år 50% rabat. Betaling om bord — ingen forudbetaling.' },
      { q: 'Er alkohol inkluderet i middagskrydstogtet?', a: 'Ubegrænsede sodavand (vand, cola, juice) er inkluderet i prisen. Alkoholpakker er valgfri: 2 glas +€{p.alcohol2}/person eller ubegrænset lokal alkohol (vin, øl, rakı, vodka, gin) +€{p.unlimited}/person. Importerede drikkevarer faktureres separat om bord.' },
      { q: 'Er der hoteltransfer?', a: 'Ja — afhentnings- og afleveringsservice er +€{p.transfer}/person. Betjente zoner: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane og Sütlüce. Du kan vælge denne mulighed i reservationsformularen.' },
      { q: 'Er Bosporus middagskrydstogtet halal?', a: 'Absolut. Alt kød serveret om bord er halal-certificeret. Alkohol er et valgfrit tillæg (aldrig pålagt gæsterne), og bordopsætningen adskiller naturligt gæster, der foretrækker et alkoholfrit måltid. Vi tilbyder også vegetariske alternativer uden ekstra omkostninger.' },
      { q: 'Hvordan skal jeg klæde mig?', a: 'Smart casual påklædning. Aftener i Istanbul kan være kølige selv om sommeren — vi anbefaler en let jakke eller et tørklæde. Der er ingen obligatorisk påklædningskode, men badetøj, klipklappere eller sportstøj er ikke passende til middagsatmosfæren.' }
    ],
    cta: {
      primary: 'Book Nu · Betaling om Bord',
      secondary: 'Gratis afbestilling indtil 2 timer før afgang',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosporus med Børn — Familiekrydstogt fra €{p.dinnerStd}/voksen',
      description: 'Bosporus middagskrydstogt familievenligt. Børn 0-3 gratis, 4-8 halv pris. Sikkert indendørs område, børnemenu.'
    },
    hero: {
      h1: 'Bosporuskrydstogt med Børn',
      subtitle: 'En aften på Bosporus designet til familier med børn — middag, underholdning og en sikker, komfortabel atmosfære.',
      badge: 'Familievenligt · Halal · 0-3 År Gratis'
    },
    intro: [
      '**Bosporuskrydstogtet med børn** er den mest familievenlige aftenmulighed i Istanbul. Vi modtager dusinvis af familier hver aften — vi har designet hver detalje, så de små føler sig komfortable: overdækket indendørs område for at holde varmen, en tilgængelig børnemenu (enkel grillet kylling, pasta, ubegrænsede sodavand) og tidlig ombordstigning for at undgå raserianfald sent på aftenen.',
      'I modsætning til både kun for voksne forbliver **vores Bosporus middagskrydstogt for familier** varmt og inkluderende. **Børn 0-3 år er gratis** (transfer inkluderet), 4-8 år får **50% rabat**, 9+ år betaler fuld pris — ingen skjulte omkostninger. De live folkedanse, orientalsk dans og sema-forestillingen er delikat familieunderholdning, ikke en natklub.',
      'Uanset om du kommer til Istanbul for en forlænget weekend med din lille, eller tager teenagerne med på deres første europæiske rejse — dette er turen anbefalet af familierne i Istanbul. Sikker, halal-certificeret, licenseret af TÜRSAB og bedømt med 4,8★ af mere end 11.317 rejsende.'
    ],
    highlights: [
      { title: '0-3 år helt gratis', desc: 'Ingen omkostninger for babyer og småbørn. 4-8 år betaler 50% af voksenprisen. Fra 9 år gæst med fuld pris. Gennemsigtigt, ingen overraskelser.' },
      { title: 'Overdækket indendørs område', desc: 'Helt overdækket og opvarmet i de kolde måneder. Børnene holder sig varme, beskyttet mod vinden. Det åbne dæk er også tilgængeligt, når vejret er godt — valget er dit.' },
      { title: 'Børnemenu på forespørgsel', desc: 'Enkel grillet kylling, pasta, brød og grøntsager — uden ekstra omkostninger. Ubegrænsede sodavand (cola, juice, vand). Lad os vide det på forhånd — ingen overraskelser med krydret mezze til de små.' },
      { title: 'Sikker familieunderholdning', desc: 'Sema-forestilling (fascinerende for børn), 5 traditionelle folkedanse, live tyrkisk musik og DJ-sæt. Alt er familievenligt — intet voksenindhold. Børnene slutter sig ofte til dansen.' }
    ],
    faq: [
      { q: 'Er Bosporuskrydstogtet sikkert for små børn?', a: 'Ja — vores båd er licenseret af TÜRSAB, har et overdækket indendørs område med sikre vinduer, redningsveste i alle størrelser tilgængelige og et professionelt mandskab med familieerfaring. Vi anbefaler indendørsdækket til små børn og det åbne dæk til 6+ år.' },
      { q: 'Hvad er prisen for børn på Bosporuskrydstogtet?', a: 'Børn **0-3 år: GRATIS** (ingen omkostninger, ingen skjulte omkostninger). **4-8 år: 50% rabat** på voksenprisen — det vil sige €12/barn på Standard (€{p.dinnerStd}/2). **9+ år: fuld voksenpris.** Hoteltransfer er gratis for 0-3 år, standard for 4+ (€{p.transfer}/person).' },
      { q: 'Er der en børnemenu om bord?', a: 'Ja — enkel grillet kylling, pasta, brød, sæsongrøntsager og ubegrænsede sodavand. Fortæl os om allergier eller kostpræferencer ved reservation, og vi forbereder noget, dit barn vil spise med glæde.' },
      { q: 'Er musikken eller showet for højt for børn?', a: 'Live-showene foregår i ét område af scenen — hvis dine børn er lydfølsomme, sætter vi jer ved et roligere bord bagest. Showet varer i alt 40 minutter, resten af aftenen er baggrunds-tyrkisk musik og DJ ved moderat lydstyrke.' },
      { q: 'Hvad sker der, hvis babyen falder i søvn under krydstogtet?', a: 'Intet problem — mange falder i søvn. Indendørsområdet har sofaer, hvor en baby eller lille barn kan sove komfortabelt. Bed mandskabet om et varmt tæppe om nødvendigt. Ingen ekstra omkostninger.' },
      { q: 'Skal jeg tage klapvognen med om bord?', a: 'Du kan, men vi anbefaler at lade den store klapvogn være på hotellet (eller hos vores chauffør, hvis du har booket transfer — vi opbevarer den sikkert). Vores båd har smalle gange og dæk med trin. En let bæresele er mere behagelig om bord.' }
    ],
    cta: {
      primary: 'Book Familiekrydstogtet · Betaling om Bord',
      secondary: 'Gratis afbestilling indtil 2 timer før · Ingen forudbetaling',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantisk Bosporuskrydstogt fra €{p.dinnerStd} — Middag ved Levende Lys',
      description: 'Romantisk Bosporuskrydstogt: bord ved levende lys, roser, flerretters middag under oplyste broer. Fra €{p.dinnerStd}/person. Gratis afbestilling, betaling om bord.'
    },
    hero: {
      h1: 'Romantisk Bosporuskrydstogt',
      subtitle: 'Middag ved levende lys, bord pyntet med roser, oplyste broer og et særligt øjeblik kun for dig under Istanbuls mest ikoniske natlige himmel.',
      badge: 'Fødselsdag · Bryllupsrejse · Speciel Aften'
    },
    intro: [
      '**Det romantiske Bosporuskrydstogt** er den mest ikoniske aften for par i Istanbul. Mens solen går ned over Dolmabahçe-paladset og Bosporus-broen lyser op i farver, deler du og din partner en tyrkisk flerretters middag ved et privat bord — med stearinlys, friske blomster og live violin, der svæver hen over dækket.',
      'Vores romantiske bordopsætning (+€{p.romantic}/bord) gør hvert sted til et specielt øjeblik: røde roser, glødende stearinlys, en håndskrevet velkomstseddel. Tilføj den ubegrænsede alkoholpakke for vin under stjernerne (+€{p.unlimited}/person) eller hold det enkelt med de inkluderede sodavand. Uanset hvilket valg, tager mandskabet sig diskret af resten.',
      'Uanset om du fejrer en fødselsdag, planlægger en overraskelse til din partner eller blot ønsker en uforglemmelig aften i Europas mest romantiske by — dette er turen, der foretrækkes af par i Istanbul. Bedømmelse 4,8★, licenseret af TÜRSAB og — vigtigst af alt — betaling om bord, så du kun lover selve aftenen.'
    ],
    highlights: [
      { title: 'Romantisk bord ved levende lys', desc: 'Tilføj den romantiske bordopsætning med +€{p.romantic}/bord: friske røde roser, glødende stearinlys, rosenblade på dugen og håndskrevet kort. Fotos inkluderet.' },
      { title: 'De bedste borde til solnedgang-til-nat overgang', desc: 'Vinduebordene er reserveret til par. Se Bosporus-broen lyse op, Jomfrutårnet skinne og Ortaköy-moskeen blive oplyst fra dit private bord.' },
      { title: 'Live violin og intim atmosfære', desc: 'Live violin og akustisk tyrkisk musik under middagen skaber en langsom, romantisk atmosfære. Derefter kommer DJ\'en, og par danser på det åbne dæk under lysene.' },
      { title: 'Vin, champagne, premium pairings', desc: 'Tilføj 2 glas alkohol (+€{p.alcohol2}/person) eller ubegrænset lokal vin, øl, rakı (+€{p.unlimited}/person). Importeret champagne og premium pairings efter forespørgsel — spørg ved reservation.' }
    ],
    faq: [
      { q: 'Hvad gør dette krydstogt romantisk?', a: 'Kombinationen af privat bord, stearinlysopsætning (valgfri +€{p.romantic}), tyrkisk flerretters middag, live violin og akustisk musik og de oplyste Bosporus-broer, der passerer ovenover. Vi designer oplevelsen til par — rolig atmosfære i starten, derefter energisk DJ og dans. Tempoet vælger du.' },
      { q: 'Kan I arrangere en overraskelse til min partner — fødselsdag, bryllupsrejse, frieri?', a: 'Ja — fortæl os det ved reservation. Vi kan koordinere med vores personale fødselsdagskage (gratis), speciel bordopsætning, håndskrevet kort på dit sprog eller bringe et element til bordet på det rigtige tidspunkt. For frierier anbefaler vi at skrive direkte til os via WhatsApp, så vi kan planlægge diskret.' },
      { q: 'Hvad koster det romantiske krydstogt for 2 personer?', a: '2 personer Standard: 2 × €{p.dinnerStd} = €48,60. Tilføj den romantiske opsætning +€{p.romantic} = €63,60. 2 personer VIP: 2 × €{p.dinnerVip} = €110,40 + romantisk opsætning €{p.romantic} = €125,40. Ingen forudbetaling — betaling om bord. Ubegrænset alkohol yderligere 2 × €{p.unlimited} = €60.' },
      { q: 'Er det romantiske Bosporuskrydstogt privat — kun for os?', a: 'Nej — det er et delt krydstogt med andre par og gæster (op til 60-80 i alt). **Dit bord** er privat (kun for din gruppe), men der er andre gæster om bord. Hvis du vil have en helt privat båd til 2 personer, er det et separat **Privat Bosporuskrydstogt** (som vi kan arrangere efter forespørgsel — skriv til os).' },
      { q: 'Kan vi medbringe egne blomster, kage eller gave?', a: 'Selvfølgelig. Tag med, hvad du vil — vores personale hjælper dig med diskret at placere overraskelsesgaven, gemme ringæsken i desserten eller vise de blomster, du har medbragt. Ingen ekstra propgebyrer. Fortæl os det bare, så vi kan koordinere øjeblikket.' },
      { q: 'Hvad skal vi have på til et romantisk Bosporuskrydstogt?', a: 'Fra smart casual til elegant — mange par klæder sig pænt (kjoler, blazere). Der er ingen streng påklædningskode, men atmosfæren er mere speciel end afslappet turisme. Tag en let jakke eller tørklæde med — dækket kan være køligt selv om sommeren. Behagelige sko, hvis du planlægger at danse efter middagen.' }
    ],
    cta: {
      primary: 'Book det Romantiske Krydstogt · Betaling om Bord',
      secondary: 'Tilføj romantisk bordopsætning (+€{p.romantic}) i reservationsformularen · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Bosporus Middagskrydstogt fra €{p.dinnerStd} — Show + Aftentur',
      description: 'Middagskrydstogt 3 timer på Bosporus: live folkloreshow, oplyste broer, Bosporus-panorama om natten. Halalmenu tilgængelig efter forespørgsel.'
    },
    hero: {
      h1: 'Halal Bosporuskrydstogt i Istanbul',
      subtitle: '100% halal-certificeret menu, alkohol altid valgfri, familievenlig underholdning og respektfuld atmosfære for muslimske rejsende — aftenen på Bosporus, gjort korrekt.',
      badge: '100% Halal · Familievenligt · Muslimsk Ejer'
    },
    intro: [
      '**Halal Bosporuskrydstogtet** er det mest respektfulde middagskrydstogt i Istanbul for muslimske rejsende. Alt kød serveret på vores båd — laks, havbars, kylling, lammekødboller, oksefilet, ribeye — er **halal-certificeret** fra godkendte leverandører. Vi serverer den samme menu til hver gæst; ingen separat "halal-sektion", fordi hele båden er halal som standard.',
      'Alkohol er **et valgfrit tillæg** — aldrig pålagt gæsterne, og bordopsætningen adskiller naturligt gæster, der foretrækker et alkoholfrit måltid. For gæster, der ønsker den ubegrænsede alkoholpakke (+€{p.unlimited}/person), er den der, men de inkluderede ubegrænsede sodavand (vand, cola, juice) er nok for de fleste muslimske familier. Vores mandskab er trænet til at respektere dine præferencer uden antagelser.',
      '**Det halal-venlige Bosporuskrydstogt** betyder noget for rejsende fra Saudi-Arabien, UAE, Kuwait, Qatar, Iran, Malaysia, Indonesien, Pakistan og Marokko, der ønsker Istanbuls mest ikoniske aften uden kompromiser. Licenseret af TÜRSAB, 4,8★ og betaling om bord — lov ikke noget, før du er sikker på, at oplevelsen opfylder dine standarder.'
    ],
    highlights: [
      { title: '100% halal-certificeret menu', desc: 'Alt kød (laks, havbars, kylling, kødboller, oksekød, ribeye) er halal-certificeret fra godkendte leverandører. Køkkenet følger halal-tilberedning. Ingen svinekødsprodukter eller ikke-halal-tilsætningsstoffer. Vegetariske muligheder er altid tilgængelige.' },
      { title: 'Alkohol valgfri, aldrig pålagt', desc: 'Alkoholpakker er tillæg — ikke inkluderet som standard. Sodavand (vand, cola, juice) er ubegrænsede og gratis. Dit bord forbliver alkoholfrit, medmindre du eksplicit beder om det. Mandskabet respekterer stiltiende dit valg.' },
      { title: 'Familievenlig underholdning', desc: 'Sema-forestilling, traditionelle tyrkiske folkedanse, live tyrkisk musik. Ingen natklub-style shows, intet upassende indhold. Sikker for børn, respektfuld for familier. Orientalsk dans er en traditionel kunstform, præsenteret med beskedenhed.' },
      { title: 'Respekt for bønnetider', desc: 'Hvis ombordstigning falder sammen med maghrib eller isha (19:30-20:30), kan vores personale guide dig til den stille bønnezone ved Kabataş-anløbsbroen før afgang. Bare fortæl os det ved reservation.' }
    ],
    faq: [
      { q: 'Er Bosporuskrydstogtet 100% halal?', a: 'Ja — hvert kødprodukt på menuen (fisk, kylling, kødboller, oksefilet, ribeye, lam) er halal-certificeret fra godkendte leverandører. Køkkenet følger halal-tilberedningsstandarder. Svinekød serveres ingen steder om bord. Det er ikke en "halal-mulighed" — hele menuen er halal.' },
      { q: 'Drikker andre gæster om bord alkohol?', a: 'Nogle gæster tilføjer den valgfri alkoholpakke (+€{p.unlimited}/person). Bordene er naturligt adskilt — du kan bede om en alkoholfri zone. Mandskabet bringer ikke alkohol, medmindre det er specifikt bestilt af en gæst. Sodavand (ubegrænset) er inkluderet for alle.' },
      { q: 'Er dette krydstogt passende for muslimske familier med børn?', a: 'Ja — det er et af de mest respekterede krydstogter for familier i Istanbul. Underholdningen er beskeden (folkedanse, sema, tyrkisk musik), børn under 3 år er gratis, 4-8 år får 50% rabat. Ingen natklub-atmosfære. Familier fra Golfen, Indonesien, Malaysia, Pakistan og Marokko booker regelmæssigt dette krydstogt.' },
      { q: 'Kan jeg bede om bord?', a: 'Der er ikke et dedikeret bønnerum om bord, men vi anbefaler at bede før ombordstigning kl. 19:30 (maghrib-bønnen falder ofte sammen med dette tidsinterval). Kabataş-anløbsbroen har bønnefaciliteter. Hvis du skal bede under sejladsen 20:30-23:30 (isha), tal med mandskabet — vi kan arrangere et stille hjørne på dækket.' },
      { q: 'Hvad er priserne for en muslimsk familie på 4 personer (2 voksne, 2 børn)?', a: 'Standard krydstogt: 2 × €{p.dinnerStd} + 2 × €12 (halv pris 4-8 år) = €72,60. Hvis børnene er under 3 år, gratis: 2 × €{p.dinnerStd} = €48,60. Tilføj €{p.transfer} hoteltransfer per voksen. I alt: €48-92 for familien på 4, ingen forudbetaling, betaling om bord.' },
      { q: 'Er hoteltransferen også halal?', a: 'Hoteltransferen er bare en biltur — ingen mad eller drikke involveret, så ingen halal-bekymring. Vores chauffører er professionelle, respektfulde og punktlige. Transferzonerne dækker Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih og 8 andre centrale kvarterer, hvor muslimske rejsende normalt bor.' }
    ],
    cta: {
      primary: 'Book Halal Krydstogtet · Betaling om Bord',
      secondary: 'Gratis afbestilling 2 timer før · Ingen forudbetaling · Halal-certificeret',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP Bosporuskrydstogt fra €{p.dinnerVip} — Premium Middag, VIP-plads',
      description: 'VIP Bosporus middagskrydstogt: premium mezze, bøfvalg, bord foran scenen, prioriteret service. Tidligere €{p.dinnerVipOriginal}, nu €{p.dinnerVip}.'
    },
    hero: {
      h1: 'VIP Bosporuskrydstogt',
      subtitle: 'Pladser foran scenen, premium tyrkisk menu med bøfvalg og prioriteret service — en aften på Bosporus på højere niveau for rejsende, der vil have det bedste måltid om bord.',
      badge: 'Mest Populært · 40% RABAT · Pladser Foran'
    },
    intro: [
      '**VIP Bosporuskrydstogtet** placerer dig på de bedste pladser om bord: borde foran scenen med direkte udsigt til sema-forestillingen, folkedansene, orientalsk dans og live musik. Premium menuen tilføjer oksefilet og ribeye til hovedretsvalgene (i stedet for kylling/laks på Standard), plus 15+ varianter af traditionelle tyrkiske mezze serveret som en generøs opsætning.',
      '**VIP Bosporus middagskrydstogtet** er blevet udnævnt som Mest Populært af vores gæster — fordi oplevelsen ved €{p.dinnerVip}/person (tidligere €{p.dinnerVipOriginal}, 40% rabat) ligner mere en fine dining-restaurant end en turisttur. Privat bord, opmærksom tjenerservice og de samme spektakulære udsigter til Dolmabahçe, Ortaköy-moskeen og oplyste Bosporus-bro.',
      'Uanset om du er forretningsrejsende, fejrer en vigtig begivenhed eller tænker "vi er i Istanbul én gang — lad os gøre alt rigtigt", er dette **VIP Bosporuskrydstogtet** booket af tilbagevendende besøgende. Licenseret af TÜRSAB, 4,8★ med 11.317+ anmeldelser, betaling om bord, gratis afbestilling indtil 2 timer før afgang.'
    ],
    highlights: [
      { title: 'Privat bord foran scenen', desc: 'Pladser reserveret direkte foran show-scenen — den bedste udsigt til sema-forestillingen, folkedansene og orientalsk dans. Dit bord, ikke delt. Fotografer elsker disse pladser.' },
      { title: '15+ mezze + premium hovedretter', desc: '15+ varianter tyrkiske mezze serveret som traditionel opsætning. Hovedretsvalg inkluderer oksefilet og ribeye (på Standard kun kylling/laks). Samme dessert og ubegrænsede sodavand.' },
      { title: 'Prioriteret tjenerservice', desc: 'En dedikeret tjener betjener dit bord først — påfyldninger, menuvejledning, koordinering af alkoholtillæg, specielle forespørgsler. Kæmp ikke om opmærksomhed i et travlt rum.' },
      { title: '40% RABAT — tidligere €{p.dinnerVipOriginal}, nu €{p.dinnerVip}', desc: 'Normal pris €{p.dinnerVipOriginal}/person. Nuværende lanceringspris €{p.dinnerVip}/person — 40% rabat. Betaling om bord, ingen forudbetaling. Gratis afbestilling indtil 2 timer før afgang.' }
    ],
    faq: [
      { q: 'Hvad er forskellen mellem VIP og Standard Bosporuskrydstogtet?', a: 'VIP får: (1) pladser foran scenen med den bedste udsigt, (2) 15+ mezze mod 10 på Standard, (3) oksefilet + ribeye tilføjet til hovedretsmulighederne, (4) prioriteret tjenerservice. Samme tur på 3 timer, samme underholdning, samme rute. €{p.dinnerVip} mod €{p.dinnerStd}.' },
      { q: 'Er VIP-prisen på €{p.dinnerVip} virkelig 40% rabat?', a: 'Ja — den normale pris er €{p.dinnerVipOriginal}/person (tjek på enhver bookingside). Vi anvender €{p.dinnerVip} som direkte bookingpris, med reduktion af mellemmandsomkostningerne. Du får VIP for mindre, end de fleste steder opkræver for Standard.' },
      { q: 'Er alkohol inkluderet i VIP-krydstogtet?', a: 'Nej — alkohol er et separat tillæg (ligesom på Standard). 2 glas: +€{p.alcohol2}/person. Ubegrænset lokal alkohol (vin, øl, rakı, vodka, gin): +€{p.unlimited}/person. Importerede premiumdrikke faktureres separat. Ubegrænsede sodavand er inkluderet og gratis.' },
      { q: 'Kan jeg opgradere til VIP, efter jeg er gået om bord på Standardbåden?', a: 'Afhænger af tilgængelighed — hvis VIP-borde er ledige, ja. Du betaler forskellen (€{p.dinnerVip} - €{p.dinnerStd}) om bord. Men vi anbefaler at booke VIP på forhånd: de bedste pladser foran scenen går til forhåndsbookinger.' },
      { q: 'Hvordan booker jeg VIP Bosporuskrydstogtet?', a: 'Brug reservationsformularen på denne side — vælg "VIP" i Trin 1, indstil datoen, indtast antallet af gæster, derefter kontaktoplysningerne. Din forespørgsel kommer via WhatsApp / Telegram / WeChat, og vi bekræfter med det samme. Betaling om bord, ikke nu.' },
      { q: 'Er VIP-krydstogtet egnet til forretningsmiddage med kunder?', a: 'Ja — VIP er det hyppigste valg til forretningsmiddage i Istanbul. Privat bord, stille nok til samtale, imponerende menu og udsigter. Mange gæster booker VIP + ubegrænset alkohol til at modtage kunder. Halal-certificeret (godt for forretningsrejsende fra Golfen). Fortæl os det ved reservation, vi arrangerer et roligere VIP-bord bagest.' }
    ],
    cta: {
      primary: 'Book VIP · Betaling om Bord',
      secondary: 'Tidligere €{p.dinnerVipOriginal}, nu €{p.dinnerVip} · Gratis afbestilling 2 timer før',
      tertiary: 'Se Standardmulighed (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Privat Bosporuskrydstogt — Bådudlejning Istanbul (25+ gæster)',
      description: 'Privat Bosporuskrydstogt til grupper, bryllupper, firmaarrangementer. Eksklusiv båd, skræddersyet menu, fleksibel varighed. Gratis afbestilling.'
    },
    hero: {
      h1: 'Privat Bosporuskrydstogt',
      subtitle: 'Lej hele båden til din gruppe — familiefejringer, firmamiddage, fødselsdage, forlovelser, bryllupper. Eksklusiv brug, skræddersyet menu, fleksibelt program.',
      badge: 'Privat Udlejning · 25+ Gæster · Skræddersyet Menu'
    },
    intro: [
      '**Det private Bosporuskrydstogt** betyder, at hele båden er din — ingen andre gæster, ingen delte borde, ingen fælles dansegulv. Perfekt til familiesammenkomster, firmamiddage, fødselsdagsfester, polterabender eller bryllupsreceptioner. Båden, mandskabet, menuen, underholdningen og programmet tilpasser sig din gruppe.',
      '**Vores private Bosporus-udlejning** understøtter grupper **fra 25 til 80 gæster**. Mindre grupper kan stadig anmode om den private oplevelse — vi tilbyder en minimumspris, der dækker bådens driftsomkostninger. Større grupper (bryllupsstørrelse) får skræddersyede priser og inkluderer normalt speciel dekoration, live band, kageservice og forlænget varighed (4-5 timer i stedet for de 3 standard).',
      'Uanset om du arrangerer et firmaarrangement for kunder, en 50-års fødselsdagsfest eller en bryllupsreception under Istanbuls mest ikoniske broer, er dette **det private krydstogt, som arrangørerne af begivenheder i Istanbul stoler på**. Bedømmelse 4,8★, licenseret af TÜRSAB, fuldt ud engelsktalende mandskab og total fleksibilitet — rute, menu, musik, program.'
    ],
    highlights: [
      { title: 'Hele båden, kun for dig', desc: 'Ingen andre gæster. Din gruppe har hvert dæk, hvert bord. Indstil din egen musik, påklædningskode, program. Privatliv er vigtigt — vi respekterer det.' },
      { title: 'Skræddersyet menu og drikkevarepakke', desc: 'Arbejd sammen med vores kok for at tilpasse menuen: specifikke mezze, hovedretsvalg, tilberedninger tilpasset kultur eller diætbehov. Alkoholpakker, champagneglas, skræddersyede cocktailbarer — alt kan arrangeres.' },
      { title: 'Fleksibel varighed og afgang', desc: 'De 3 standard timer kan forlænges til 4-5 timer. Vælg dagafgang kl. 12:00, solnedgang kl. 17:30 eller aften kl. 20:30. Vil du have en hverdag i stedet for weekend? Intet problem — vi tilpasser os dit program.' },
      { title: 'Skræddersyet dekoration, band, program', desc: 'Skræddersyede dekorationer (balloner, bannere, blomsterarrangementer), live band i stedet for DJ, bryllupskageservice, fotografkoordinering, taler — tilføj hvad din begivenhed har brug for. Vi er begivenhedsarrangører, ikke kun bådoperatører.' }
    ],
    faq: [
      { q: 'Hvad koster et privat Bosporuskrydstogt?', a: 'For grupper 25+, normalt €{p.dinnerStd}-€{p.dinnerVip}/person + bådudlejningsgebyr afhængigt af gruppestørrelse, dato og varighed. Skriv til os via WhatsApp med gruppestørrelse, dato og krav — vi giver pris inden for en time. De fleste begivenheder passer i det samlede interval €2.000-€6.000.' },
      { q: 'Hvad er den mindste gruppestørrelse for et privat Bosporuskrydstogt?', a: 'Teknisk gør 25 gæster det private krydstogt økonomisk muligt. Mindre grupper (10-24) kan leje privat, men betaler en minimumspris svarende til ~25 personer. For virkelig små grupper (2-10), overvej det normale Standard- eller VIP-krydstogt — dit bord er allerede privat, kun båden er delt.' },
      { q: 'Kan jeg arrangere et bryllup på Bosporuskrydstogtet?', a: 'Ja — vi arrangerer 10-15 bryllupsreceptioner om året. Kapacitet op til 80 til siddende middag, op til 100 til cocktailstil. Vi koordinerer med din fotograf, bryllupsarrangør, band eller kok. Skræddersyet kageservice, dansegulv til første dans, champagneglas — alt kan arrangeres. Skriv via WhatsApp for bryllupspris.' },
      { q: 'Hvad med firmaarrangementer og teammiddage?', a: 'Private firmakrydstogter er vores hyppigste bookinger. Firmamiddag, kundemodtagelse, produktlancering, teamfejring — alt fungerer. Vi kan levere faktura med momsopdeling, arrangere hoteltransfers til dit team og koordinere brandede materialer (borddekorationer, bannere) efter forespørgsel.' },
      { q: 'Kan jeg medbringe mit eget live band eller DJ i stedet for jeres underholdning?', a: 'Ja — du kan medbringe dit eget live band, DJ, fotograf. Eller hold vores standard (sema, folkedansere, orientalsk, DJ) og tilføj din ovenpå. Båden har PA-system og dansegulv. Lad os vide det på forhånd, så vi kan koordinere lydkontrollerne.' },
      { q: 'Hvordan anmoder jeg om en pris for det private Bosporuskrydstogt?', a: 'Det letteste: skriv til os via WhatsApp på +90 532 244 29 22 med (1) gruppestørrelse, (2) ønsket dato, (3) årsag (bryllup, firma, fødselsdag), (4) specielle krav. Vi svarer inden for en time i åbningstiden, 12 timer om natten. Vi kan også arrangere et videoopkald for at diskutere detaljerne.' }
    ],
    cta: {
      primary: 'WhatsApp for Skræddersyet Pris',
      secondary: 'Skræddersyet menu, gruppe 25-80, fleksibel varighed · Svar inden for 1 time',
      tertiary: 'Mulighed Standard Krydstogt (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosporus for Par fra €{p.dinnerStd} — Romantisk Aften Istanbul',
      description: 'Bosporus middagskrydstogt for par. Privat bord, oplyste broer, romantisk dekoration valgfri. Fra €{p.dinnerStd}/person.'
    },
    hero: {
      h1: 'Bosporuskrydstogt for Par',
      subtitle: 'En romantisk aften på Bosporus — privat bord, live musik, oplyste broer der passerer ovenover. Uanset om det er din første date i Istanbul eller den tiende fødselsdag, virker denne aften.',
      badge: 'Privat Bord · Live Musik · Betaling om Bord'
    },
    intro: [
      '**Bosporuskrydstogtet for par** er den foretrukne aften i Istanbul. Ikke hvert par fejrer en fødselsdag — nogle gange er du bare i verdens mest romantiske by og vil have en vidunderlig aften sammen. Dette krydstogt tilbyder: privat bord til to, langsom tyrkisk flerretters middag, live violin og akustisk musik under middagen og den oplyste Bosporus-bro, der passerer langsomt.',
      'Atmosfæren er **varm, men ikke overdrevent romantisk** — ingen obligatorisk frieri-musik, ingen pinligt koordineret klapsalve for "de nygifte". Spis, drik, tal, se Istanbuls lys. Hvis du vil tilføje den romantiske bordopsætning (stearinlys, roser, +€{p.romantic}), fremragende — ellers er selve middagen allerede speciel.',
      'Uanset om du er i Istanbul i 3 dage med din partner, fejrer en beskeden begivenhed eller planlægger en udforskende rejse til et fremtidigt frieri — **Bosporuskrydstogtet for par** giver dig 3 timers aften sammen i en af verdens mest fotograferede byer. 4,8★, betaling om bord, gratis afbestilling.'
    ],
    highlights: [
      { title: 'Privat bord til to', desc: 'Privat bord til 2 personer, ikke delt. Prioritet til vinduebordene for par. Fotos af solnedgang og natlig Bosporus lige uden for dit vindue.' },
      { title: 'Langsom flerretters middag', desc: '10 varianter af tyrkiske mezze, varm forret, hovedret (laks, havbars, kylling, kødboller eller vegetarisk), iskage til dessert. Serveret langsomt over 3 timer — du har ikke travlt.' },
      { title: 'Live violin og blød musik', desc: 'Live violin og akustisk tyrkisk musik under middagen skaber en intim atmosfære, passende til samtale. Derefter kommer DJ\'en for par, der vil danse.' },
      { title: 'Tillæg til specielle aftener', desc: 'Romantisk bordopsætning (stearinlys, roser): +€{p.romantic}. Ubegrænset lokal alkohol (vin, rakı): +€{p.unlimited}/person. Hoteltransfer (tur-retur): +€{p.transfer}/person. Vælg, hvad der passer til din aften.' }
    ],
    faq: [
      { q: 'Er dette Bosporuskrydstogt passende til en normal aften, ikke til en speciel lejlighed?', a: 'Ja — de fleste af vores par fejrer ikke noget særligt, har bare en dejlig aften sammen. Atmosfæren er varm og behagelig uden at være overdreven. Du kan tilføje den romantiske bordopsætning (+€{p.romantic}), hvis du vil have ekstra, eller bare nyde standardaftenen.' },
      { q: 'Hvad koster Bosporuskrydstogtet for 2 personer?', a: '2 personer Standard: 2 × €{p.dinnerStd} = €48,60. 2 personer VIP: 2 × €{p.dinnerVip} = €110,40. Tilføj hoteltransfer for to: +€{p.transfer}×2 = €20. Tilføj ubegrænset alkohol for to: +€{p.unlimited}×2 = €60. Ingen forudbetaling — betaling om bord.' },
      { q: 'Kan par medbringe deres egen vin eller champagne?', a: 'Vi tillader ikke ekstern alkohol (af licensgrunde). Men vi har ubegrænset lokal vin (+€{p.unlimited}/person) og kan arrangere importerede premiumvine eller champagne mod et gebyr — spørg ved reservation. Prosecco, Chianti og Cabernet er de populære premiumforespørgsler.' },
      { q: 'Er det et problem, hvis vi ikke drikker alkohol — er vi usædvanlige?', a: 'Slet ikke — mange par springer alkohol helt over, enten af halal-grunde eller blot af præference. Ubegrænsede sodavand (vand, juice, cola) er inkluderet. Ingen ser to gange, hvis dit bord er alkoholfrit. Mange muslimske par fra Saudi-Arabien, Iran og Indonesien booker dette krydstogt.' },
      { q: 'Hvornår er Bosporuskrydstogtet for par bedst — solnedgang eller aften?', a: 'Aftenen (afgang 20:30) er den mest ikoniske — oplyste broer, refleksioner på vandet, oplyste paladser. Solnedgangen (afgang 17:30) er tidligere og har gylden time-skønhed, men middagskrydstogtet er specifikt kl. 20:30. Hvis du vil have begge dele, booker de fleste par solnedgangs- og aftenkrydstogterne på forskellige dage.' },
      { q: 'Er der et dansegulv — kan vi danse?', a: 'Ja — efter middagsservicen (~22:30) starter DJ\'en, og det åbne dæk bliver dansezonen. Mange par danser langsomme sange under lysene med Bosporus-broen i baggrunden. Nogle af de smukkeste fotos, du vil tage i Istanbul.' }
    ],
    cta: {
      primary: 'Book den Romantiske Aften · Betaling om Bord',
      secondary: 'Tilføj romantisk opsætning (+€{p.romantic}) · Gratis afbestilling 2 timer før',
      tertiary: 'Se Romantisk Bosporuskrydstogt'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Bosporus Solnedgangskrydstogt fra €35 — Gylden Time + Middag',
      description: 'Bosporus solnedgangskrydstogt fra Kabataş, afgang 17:30. Paladser i gyldent lys, kontinuerlig middag i den oplyste nat. 3 timer. Gratis afbestilling, betaling om bord.'
    },
    hero: {
      h1: 'Solnedgangskrydstogt på Bosporus',
      subtitle: 'Den magiske time på Bosporus — se solen gå ned bag silhuetten af minareterne, mens du passerer Dolmabahçe, Ortaköy-moskeen og Bosporus-broen, der lyser op til natten.',
      badge: 'Gylden Time · Afgang 17:30 · Bedste Fotos'
    },
    intro: [
      '**Bosporus solnedgangskrydstogtet** fanger Istanbul i sin mest fotogeniske positur. Gå om bord kl. 17:30, og inden for 20 minutter begynder solen at gå ned bag minareterne på den europæiske kyst — farver Dolmabahçe-paladset gyldent, forvandler Bosporus-vandet til kobber og gør Ortaköy-moskeen til en silhuet mod den strålende himmel. Hvert smartphone-foto på dette krydstogt ligner en professionel film.',
      '**Vores Bosporus solnedgangskrydstogt** inkluderer en fuld tyrkisk middag, der starter under den gyldne time og fortsætter, mens broerne lyser op til natten. Når desserten kommer, sejler du under den oplyste Bosporus-bro — 30 millioner lys reflekteret i det mørke vand. Overgangen fra dag til nat, pakket ind i 3 timer, er alt.',
      'Uanset om du er fotograf, der jagter den gyldne time, rejsende, der vil have det bedste fra dag og nat, eller et par, der søger "Istanbul-øjebliksbilledet" — dette er **Bosporus solnedgangs-middagskrydstogtet** anbefalet til besøgende. Bedømmelse 4,8★, licenseret af TÜRSAB, betaling om bord, ingen forudbetaling.'
    ],
    highlights: [
      { title: 'Top gylden time — afgang 17:30', desc: 'Gå om bord kl. 17:30, solnedgang sker omkring kl. 18:30 om sommeren / 17:00 om vinteren. De første 40 minutter af krydstogtet er den gyldne time, du jager. Kamera klar — dette er fotoet.' },
      { title: 'Dag-til-nat overgang inkluderet', desc: 'Ikke kun solnedgang — vi sejler i tusmørke, derefter i oplyst Bosporus. Se 3 forskellige lysfaser i ét krydstogt: gyldent, blå time og fuldt oplyst nat.' },
      { title: 'Fuld middag under krydstogtet', desc: '10 varianter tyrkiske mezze, varm forret, hovedret (laks, havbars, kylling, kødboller, vegetarisk), iskage. Samme kvalitetsmenu som aftenkrydstogtet, serveret under solnedgangen.' },
      { title: 'Dolmabahçe, Ortaköy, Bosporus-broen — alt skinner', desc: 'Ruten passerer Dolmabahçe-paladset (gyldent ved solnedgang), Ortaköy-moskeen (kuppel i silhuet), Bosporus-broen (der lyser op), Rumeli Hisarı, Beylerbeyi-paladset. Hvert vartegn i sit bedste lys.' }
    ],
    faq: [
      { q: 'Hvornår afgår Bosporus solnedgangskrydstogtet?', a: 'Ombordstigning begynder kl. 17:00, båden afgår kl. 17:30, vender tilbage omkring kl. 20:30. Vi arrangerer dette, så det sker præcis, når solen går ned på vandet — varierer let med sæsonen (sommer 18:30, vinter 17:00). Vi justerer afgangen med 15-30 minutter sæsonmæssigt.' },
      { q: 'Er Bosporus solnedgangskrydstogtet det samme som middagskrydstogtet?', a: 'Lignende, men på forskellige tidspunkter. Solnedgangskrydstogtet afgår kl. 17:30 med middagen serveret under krydstogtet (gylden time + tidlig aften). Middagskrydstogtet er kl. 20:30 — efter mørket, rene natudsigter. Samme båd, samme menu, samme underholdning — kun forskellig belysning. Nogle gæster gør begge dele på forskellige dage.' },
      { q: 'Hvad koster Bosporus solnedgangskrydstogtet?', a: 'Standard solnedgangskrydstogt fra €35/person (3 timer, fuld middag, live underholdning). VIP-mulighed med plads foran scenen og premium mezze €55/person. Betaling om bord — ingen forudbetaling. 0-3 år gratis, 4-8 år halv pris.' },
      { q: 'Er solnedgangskrydstogtet bedre end middagskrydstogtet (aften)?', a: '"Bedre" afhænger af, hvad du vil have. Solnedgang = bedste fotos, gyldent lys, langsommere tempo, tidligere aften. Aften = mest ikoniske lys (oplyste broer), bedste underholdning, senere middag. Fotografer vælger solnedgang. Par på romantisk aften vælger aften. Familier med børn vælger normalt solnedgang (slutter tidligt).' },
      { q: 'Hvad skal jeg tage med til solnedgangskrydstogtet?', a: 'Smartphone eller kamera til fotos (den gyldne time tigger). Let jakke — vinden stiger ved solnedgang, og dækket kan hurtigt blive koldt tidligt på aftenen. Solbriller til de første 30 minutter. Smart-casual påklædning — du spiser middag, men uden streng påklædningskode.' },
      { q: 'Kan jeg blive på krydstogtet for at se de oplyste broer om natten?', a: 'Solnedgangskrydstogtet er på 3 timer (17:30-20:30), så til sidst vil du se Bosporus-broen fuldt oplyst og Jomfrutårnet tændt. Hvis du vil have TOP-natudsigterne (20:30-23:30, alle restauranter og monumenter fuldt oplyst), book middagskrydstogtet kl. 20:30. Bedste løsning: book begge dele på forskellige aftener.' }
    ],
    cta: {
      primary: 'Book Solnedgangskrydstogtet · Betaling om Bord',
      secondary: 'Afgang 17:30 · Solnedgang + middag inkluderet · Gratis afbestilling 2 timer før',
      tertiary: 'Se Aften Middagskrydstogt (20:30)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Bosporus Nattour fra €{p.dinnerStd} — Middagskrydstogt + Live Show',
      description: 'Nattour på 3 timer på Bosporus med middag og live show. Afgang 20:30 fra Kabataş, oplyste broer. Gratis afbestilling, betaling om bord.'
    },
    hero: {
      h1: 'Bosporus Nattour',
      subtitle: 'Istanbuls oplyste broer, de oplyste paladser og Bosporus-vandet som et spejl, der reflekterer 30 millioner lys — nattouren, der definerer aftenen i Istanbul.',
      badge: 'Oplyste Broer · Live Show · Middag Inkluderet'
    },
    intro: [
      '**Bosporus nattouren** er den mest anbefalede aftenaktivitet i Istanbul. Her er hvorfor: efter mørkets frembrud transformeres Bosporus. Bosporus-broen skifter mellem blå, lilla og gylden. Dolmabahçe-paladset stråler varmt gult. Ortaköy-moskeen reflekteres perfekt i det sorte vand. Hvert vartegn i Istanbul når sit dramatiske højdepunkt om natten.',
      '**Vores Bosporus nattour med middag** pakker den komplette ikoniske aften ind: 3 timer på vandet (20:30-23:30), tyrkisk flerretters middag, live folkedanse (sema, 5 folkedanse, orientalsk dans), live musik og DJ-sæt, der holder dækket levende indtil aftenens slutning. Hver gæst får det samme program — ingen "basis"-mulighed, der springer de bedste dele over.',
      'Uanset om det er dit første besøg i Istanbul, og du leder efter "den ene ting, du skal gøre om natten", eller om du har været her før og vil have byens mest fotogeniske 3 timer, er dette **Bosporus nattouren** bedømt med 4,8★ af mere end 11.317 rejsende. Licenseret af TÜRSAB, betaling om bord, ingen forudbetaling.'
    ],
    highlights: [
      { title: 'Den oplyste Bosporus på dramatisk top', desc: 'Bosporus-broen skifter farve (blå, lilla, gylden), paladserne stråler gule, Ortaköy-moskeen reflekteres i det mørke vand. 20:30-23:30 maksimal belysning for alle Istanbuls vartegn.' },
      { title: 'Traditionelt tyrkisk show om bord', desc: 'Sema-forestilling, 5 traditionelle folkedanse (fra forskellige regioner af Tyrkiet), orientalsk dans, live tyrkisk musik, derefter DJ-sæt. 40 minutter show, derefter fortsætter musikken + middagen.' },
      { title: 'Fuld flerretters middag', desc: '10 varianter tyrkiske mezze, varm forret (paçanga böreği), hovedret (laks, havbars, kylling, kødboller, vegetarisk — dit valg), dessert (iskage), ubegrænsede sodavand. Halal-certificeret.' },
      { title: 'Komplet Bosporus-rute', desc: 'Kabataş → Dolmabahçe → Çırağan-paladset → Ortaköy-moskeen → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet-broen → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Jomfrutårnet → Kabataş.' }
    ],
    faq: [
      { q: 'Hvornår er Bosporus nattouren?', a: 'Ombordstigning fra kl. 19:30 ved Kabataş-anløbsbroen. Båden afgår kl. 20:30, vender tilbage omkring kl. 23:30. Vi anbefaler at ankomme 20 minutter tidligere for at installere dig og vælge plads.' },
      { q: 'Hvad koster Bosporus nattouren?', a: 'Standard nattour (3 timer, middag, show): €{p.dinnerStd}/person (tidligere €{p.dinnerStdOriginal}). VIP med plads foran scenen og premium menu: €{p.dinnerVip}/person (tidligere €{p.dinnerVipOriginal}). 0-3 år gratis, 4-8 år halv pris. Betaling om bord.' },
      { q: 'Hvad er forskellen mellem Bosporus nattouren og middagskrydstogtet?', a: 'Det samme, andet nøgleord. "Bosporus nattour" er, hvordan mange rejsende søger; "middagskrydstogt" er branchterminologi. Samme båd, samme program på 3 timer, samme menu, samme show. Vælg den søgeterm, du foretrækker — oplevelsen er den samme.' },
      { q: 'Bosporus nattour eller solnedgangskrydstogt — hvilket er mere værd?', a: 'Nattour = oplyst Istanbul, maksimalt lysdrama, fuldt underholdningsprogram, de mest ikoniske fotos af oplyste broer. Solnedgang = gylden time, langsommere tempo, slutter kl. 20:30. Hvis du kun gør én: nattouren er mere ikonisk. Mange gør begge dele på forskellige dage.' },
      { q: 'Kan jeg gøre Bosporus nattouren på min første dag i Istanbul?', a: 'Ja — vi anbefaler det. Mange rejsende booker nattouren til deres første aften, fordi den giver dig en komplet orientering: alle hovedvartegn fra vandet, med god mad og underholdning. Lettere end at kæmpe mod jetlag, mens du prøver at lave gåturisme på Dag 1. Hoteltransfer tilgængelig fra centrale kvarterer.' },
      { q: 'Jeg taler ikke tyrkisk — er touren på engelsk?', a: 'Mandskabet taler engelsk. Underholdningen (sema, folkedanse, musik) kræver ikke sprog. Middagsmenuen er på engelsk. Reservation via WhatsApp / Telegram / WeChat fungerer på flere sprog (engelsk, arabisk, russisk, tysk, fransk, spansk). Ingen tyrkisk nødvendig.' }
    ],
    cta: {
      primary: 'Book Nattouren · Betaling om Bord',
      secondary: 'Afgang 20:30 · 3 timer · Middag + show inkluderet · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Middagskrydstogt i Istanbul fra €{p.dinnerStd} — Bosporus Nattour',
      description: 'Middagskrydstogt på 3 timer i Istanbul på Bosporus. Tyrkisk flerretters menu, live folklore, oplyste broer. Gratis afbestilling, betaling om bord. 11.317 anmeldelser.'
    },
    hero: {
      h1: 'Middagskrydstogt i Istanbul',
      subtitle: 'Det bedste middagskrydstogt i Istanbul — 3 timer på Bosporus, tyrkisk flerretters middag, live underholdning og natudsigter til byens mest ikoniske vartegn.',
      badge: '4,8★ · 11.317 anmeldelser · TÜRSAB A-17672'
    },
    intro: [
      'Leder du efter et **middagskrydstogt i Istanbul**? Du har fundet, hvad de fleste rejsende anbefaler. Vores 3-timers aften på Bosporus kombinerer en fuld tyrkisk flerretters middag, live folkedanse og byens mest fotogeniske udsigter — alt fra en komfortabel båd, der afgår kl. 20:30 fra Kabataş-anløbsbroen.',
      'Oplevelsen af **middagskrydstogtet i Istanbul**: gå om bord kl. 19:30, sæt dig, se Dolmabahçe-paladset, mens vi afgår, middagen starter, når vi nærmer os Ortaköy-moskeen, showet begynder (sema, folkedanse, orientalsk), og når desserten kommer, er du under den oplyste Bosporus-bro. Ved midnat vender du tilbage til Kabataş med en ikonisk fotokollage og en mæt mave.',
      '€{p.dinnerStd}/person for standardkrydstogtet (tidligere €{p.dinnerStdOriginal}) eller €{p.dinnerVip}/person for VIP med pladser foran scenen (tidligere €{p.dinnerVipOriginal}). Betaling om bord — ingen forudbetaling, ingen risiko. Licenseret af TÜRSAB A-17672, bedømt med 4,8★ af mere end 11.317 rejsende.'
    ],
    highlights: [
      { title: 'Fuld tyrkisk flerretters middag', desc: '10 varianter mezze, varm forret, hovedret (laks/havbars/kylling/kødboller/vegetarisk), iskage. Halal-certificeret. Ubegrænsede sodavand inkluderet.' },
      { title: 'Live tyrkisk folkedans-show', desc: 'Sema-forestilling, 5 traditionelle folkedanse, orientalsk dans, live tyrkisk musik, DJ. 40 minutter show, kontinuerlig baggrundsmusik.' },
      { title: 'Komplet natrute på Bosporus', desc: 'Tur på 3 timer: Dolmabahçe, Çırağan, Ortaköy-moskeen, Bosporus-broen, Bebek, Rumeli Hisarı, FSM-broen, Beylerbeyi, Üsküdar, Jomfrutårnet. Begge kyster, europæisk og asiatisk.' },
      { title: 'Fra €{p.dinnerStd} — betaling om bord', desc: 'Standard: €{p.dinnerStd} (tidligere €{p.dinnerStdOriginal}). VIP med premium menu: €{p.dinnerVip} (tidligere €{p.dinnerVipOriginal}). Ingen forudbetaling. Gratis afbestilling indtil 2 timer før afgang.' }
    ],
    faq: [
      { q: 'Hvad koster middagskrydstogtet i Istanbul?', a: 'Vores standard middagskrydstogt €{p.dinnerStd}/person (normal pris €{p.dinnerStdOriginal}). VIP med plads foran scenen og premium menu €{p.dinnerVip}/person (normal pris €{p.dinnerVipOriginal}). 0-3 år gratis, 4-8 år 50% rabat. Betaling om bord — ingen forudbetaling.' },
      { q: 'Hvad er inkluderet i prisen for Istanbul middagskrydstogtet?', a: 'Tur på 3 timer på Bosporus, tyrkisk flerretters middag (mezze, varm forret, hovedret, dessert), ubegrænsede sodavand, live folkedans-show (sema, folkedanse, orientalsk), live musik + DJ, adgang til åbent dæk, skatter inkluderet. Hoteltransfer og alkohol er valgfri tillæg.' },
      { q: 'Hvorfra afgår Istanbul middagskrydstogtet?', a: 'Kabataş-anløbsbroen, Istanbul — på den europæiske kyst, tæt på Dolmabahçe-paladset. Det nøjagtige mødested meddeles efter reservation via WhatsApp / Telegram / WeChat. Gangvideoerne fra Dolmabahçe sporvognsstation og Kabataş sporvognsstation findes i mødestedssektionen ovenfor.' },
      { q: 'Hvor lang er middagskrydstogtet — og hvornår starter det?', a: 'I alt 3 timer. Ombordstigning fra kl. 19:30, båden afgår præcis kl. 20:30, vender tilbage omkring kl. 23:30. Vi anbefaler at ankomme 15-20 minutter tidligere for at installere dig og vælge plads.' },
      { q: 'Skal jeg booke på forhånd, eller kan jeg komme direkte?', a: 'Book på forhånd — pladserne fyldes op, især i weekender og ferier. Reservationer samme dag er ofte mulige, men ikke garanterede. Formularen på denne side sikrer dig en plads på mindre end 1 minut. Betaling om bord, så der er ingen økonomisk risiko ved at booke tidligt.' },
      { q: 'Er Istanbul middagskrydstogtet passende for vegetarer / halal / kostbegrænsninger?', a: 'Ja — alt kød er halal-certificeret. Vegetarisk hovedret (falafel, pommes frites, bulgur-pilaf, grøntsagsgryderet, løgringe) tilgængelig uden ekstra omkostninger. Allergier kan tilgodeses, hvis de annonceres ved reservation. Alkohol er et valgfrit tillæg, aldrig pålagt.' }
    ],
    cta: {
      primary: 'Book Middagskrydstogtet · Betaling om Bord',
      secondary: '4,8★ · TÜRSAB-licenseret · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Istanbul Nattour fra €{p.dinnerStd} — Bosporus Middagskrydstogt + Show',
      description: 'Krydstogt på 3 timer på Bosporus med middag og live show. Afgang 20:30 fra Kabataş. Gratis afbestilling, betaling om bord. 11.317 anmeldelser. Hoteltransfer valgfri.'
    },
    hero: {
      h1: 'Tour gennem Istanbul om Natten',
      subtitle: 'Nattouren, der primært anbefales af de lokale i Istanbul — Bosporuskrydstogt på 3 timer med middag, live underholdning og byens mest ikoniske oplyste udsigter.',
      badge: 'Istanbuls Ikoniske Aften · 3 Timer · Middag Inkluderet'
    },
    intro: [
      'En **tour gennem Istanbul om natten** skal gøre tre ting: vise dig byens ikoniske vartegn, give dig god mad og underholde dig. Vores Bosporus middagskrydstogt gør alle tre i én aften på 3 timer — og det er derfor, de fleste Istanbul-guides anbefaler det som den #1 nattour-oplevelse.',
      'Ruten af **touren gennem Istanbul om natten** dækker de bedste oplyste vartegn: Dolmabahçe-paladset, Ortaköy-moskeen, Bosporus-broen (skifter farve), Bebek-kvarteret, Rumeli Hisarı, FSM-broen, Beylerbeyi-paladset, asiatisk kyst Üsküdar og Jomfrutårnet i det fjerne. De fleste byture viser dig dem fra bussen — vi viser dem fra vandet, hvor de er mest dramatiske.',
      'Middagen er inkluderet (tyrkisk flerretters menu), live tyrkisk folkedans-show, sema, orientalsk dans og DJ-sæt. Hvis du er i Istanbul i 2-3 dage, er dette den eneste aften, der giver det stærkeste slag. 4,8★ af mere end 11.317 rejsende, betaling om bord, ingen forudbetaling.'
    ],
    highlights: [
      { title: 'Alle Istanbuls ikoniske natudsigter', desc: 'Dolmabahçe-paladset, Ortaköy-moskeen, oplyst Bosporus-bro, Rumeli Hisarı, FSM-broen, Beylerbeyi-paladset, Jomfrutårnet. Hvert hovedvartegn ved top natbelysning.' },
      { title: 'Fuld tyrkisk middag inkluderet', desc: '10 mezze, varm forret, hovedret (laks/havbars/kylling/kødboller/vegetarisk), dessert, ubegrænsede sodavand. Halal-certificeret. Prissat til €{p.dinnerStd}/person — alt inkluderet.' },
      { title: 'Live folkedanse + sema + orientalsk', desc: 'Traditionel tyrkisk underholdning: Mevlana sema-forestilling, 5 regionale folkedanse, orientalsk dans, live musik, DJ. 40 minutter show, baggrundsmusik hele aftenen.' },
      { title: 'Let for første gang i Istanbul', desc: 'Centralt mødested (Kabataş-anløbsbroen), hoteltransfer (+€{p.transfer}/person), engelsktalende mandskab, betaling om bord. Nul logistisk stress. Kom, nyd, gå.' }
    ],
    faq: [
      { q: 'Hvad er den bedste nattour i Istanbul?', a: 'Bosporus middagskrydstogtet rangerer konsekvent som #1. Grundene: (1) det giver dig alle de ikoniske natudsigter fra vandet, (2) inkluderer middagen og showet i én pakke, (3) 3 timer er nok til at se meget uden træthed, (4) centralt mødested, (5) betaling om bord reducerer bookingfriktion. De fleste Istanbul-rejseguider anbefaler det som "den ene obligatoriske ting at gøre om natten".' },
      { q: 'Hvad koster touren gennem Istanbul om natten?', a: 'Vores nattour med middag på Bosporus: Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person. Inkluderet touren, middagen, underholdningen, sodavand. Valgfrit: alkohol +€{p.unlimited}/person, hoteltransfer +€{p.transfer}/person. Betaling om bord — ingen forudbetaling.' },
      { q: 'Er touren gennem Istanbul om natten sikker for solo-rejsende?', a: 'Ja — meget sikker. Båd licenseret af TÜRSAB, professionelt engelsktalende mandskab, CCTV på dækket, redningsveste tilgængelige. Mange solo-rejsende booker denne tour. Spis ved et delt eller privat bord (efter eget valg), og aftenen er inkluderende — mød andre rejsende, hvis du vil, eller hold det for dig selv.' },
      { q: 'Hvad er det bedste tidspunkt for en nattour i Istanbul?', a: 'Vores middagstour på Bosporus er 20:30-23:30 (3 timer). Dette er top-belysningstidspunktet for alle Istanbuls vartegn — broer fuldt oplyst, paladser strålende, månen på vandet. Hvis du vil have tidligere (gylden time), overvej solnedgangsturen kl. 17:30.' },
      { q: 'Hvordan kommer jeg til mødestedet for nattouren i Istanbul?', a: 'Mødestedet er Kabataş-anløbsbroen (central europæisk kyst, tæt på Dolmabahçe-paladset). Med sporvognen: T1 til Kabataş station (linjens slutning). Med taxi: ~15 min fra Taksim. Til fods: 20 min fra Taksim via İnönü-boulevarden. På denne side er der videoer med gåvejledningerne. Hoteltransfer tilgængelig med +€{p.transfer}/person, hvis du foretrækker det.' },
      { q: 'Kan jeg booke touren gennem Istanbul om natten samme dag?', a: 'Ofte ja, især på hverdage. Weekender fyldes hurtigere op. Reservationsformularen på denne side lader dig tjekke tilgængelighed for i aften og booke på mindre end 1 minut. For hastende forespørgsler samme dag, skriv via WhatsApp på +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Book Nattouren · Betaling om Bord',
      secondary: 'Fra €{p.dinnerStd}/person · Middag + show inkluderet · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Bådtour Istanbul fra €{p.dinnerStd} — Bosporus + Middag + Show',
      description: 'Bådtour på 3 timer: Bosporuskrydstogt, fuld tyrkisk middag, live folklore, oplyste natudsigter. Gratis afbestilling, betaling om bord. 11.317 anmeldelser.'
    },
    hero: {
      h1: 'Bådtour i Istanbul',
      subtitle: 'Den mest bookede bådtour i Istanbul af rejsende — Bosporuskrydstogt med tyrkisk mad, live underholdning og byens ikoniske udsigter fra vandet.',
      badge: '4,8★ · TÜRSAB A-17672 · Betaling om Bord'
    },
    intro: [
      'Når du søger "bådtour i Istanbul", søger du den ene ting, der definerer byen fra vandet: Bosporus. Vores 3-timers Bosporus bådtour bringer dig forbi hvert hovedvartegn i Istanbul — Dolmabahçe-paladset, Ortaköy-moskeen, Bosporus-broen, Rumeli Hisarı, Beylerbeyi-paladset og Jomfrutårnet — med fuld tyrkisk middag og live underholdning.',
      'I modsætning til de mange turistfærger på 1 time, der dækker mindre af Bosporus og springer middagen og underholdningen over, er **vores bådtour i Istanbul** en komplet aftenoplevelse: ombordstigning kl. 19:30 ved Kabataş-anløbsbroen, tour indtil midnat, 10 mezze, hovedret, dessert, sema, folkedanse, orientalsk dans og DJ. Du får også aftenudgangen som en del af touren.',
      'Uanset om du har en aften eller en hel uge i Istanbul, gør denne **bådtour i Istanbul** arbejdet. 4,8★ af mere end 11.317 rejsende, licenseret af TÜRSAB (A-17672), halal-certificeret menu og betaling om bord — ingen økonomisk forpligtelse, før du er tilfreds med oplevelsen.'
    ],
    highlights: [
      { title: 'Alle hovedvartegn på Bosporus', desc: 'Dolmabahçe, Çırağan, Ortaköy-moskeen, Bosporus-broen, Bebek, Rumeli Hisarı, FSM-broen, Beylerbeyi-paladset, Üsküdar, Jomfrutårnet. Begge kyster, europæisk og asiatisk, i én tour.' },
      { title: 'Middag + show inkluderet', desc: 'Ikke kun en bådtour — fuld tyrkisk flerretters middag, live folkedans-shows, sema, orientalsk dans, DJ. Hvad der gør 3 timer sjove, ikke kun turisme.' },
      { title: 'Aftenafgang (bedste belysning)', desc: 'Afgangen kl. 20:30 fanger den oplyste Bosporus i fuld stråleglans — broer, paladser, moskeer alle oplyste. Mere dramatisk end dagsture, der viser de samme vartegn i fladt lys.' },
      { title: 'Let booking, let betaling', desc: 'Book med formularen på denne side på mindre end 1 minut. Betaling om bord — ingen forudbetaling. Hoteltransfer tilgængelig fra +€{p.transfer}/person. Gratis afbestilling 2 timer før afgang.' }
    ],
    faq: [
      { q: 'Hvad er den bedste bådtour i Istanbul?', a: 'Bosporus middagskrydstogtet rangerer konsekvent som #1. Det dækker alle hovedvartegn, inkluderer middagen og underholdningen og kører om aftenen, når vartegnene er oplyste. Andre muligheder (hop-on-færger, morgenturistbåde) dækker kortere ruter, springer middagen over og inkluderer ikke underholdning. For en aften i Istanbul er dette den mest komplette bådtour.' },
      { q: 'Hvor lang er bådtouren i Istanbul?', a: '3 timer. Ombordstigning fra kl. 19:30 ved Kabataş-anløbsbroen, afgang 20:30, retur ~23:30. Dækker hele Bosporus fra Dolmabahçe til Rumeli Hisarı og tilbage. Nok tid til fuld middag + show uden træthed.' },
      { q: 'Hvad koster bådtouren i Istanbul?', a: 'Vores bådtour med middag: Standard €{p.dinnerStd}/person (tidligere €{p.dinnerStdOriginal}), VIP med premium menu €{p.dinnerVip}/person (tidligere €{p.dinnerVipOriginal}). 0-3 år gratis, 4-8 år halv pris. Betaling om bord. Alkohol og hoteltransfer er valgfri tillæg.' },
      { q: 'Hvorfra afgår bådture i Istanbul?', a: 'Vores båd afgår fra Kabataş-anløbsbroen, central europæisk kyst i Istanbul, tæt på Dolmabahçe-paladset. Tilgængelig med sporvognen T1 (Kabataş station), taxi 15 min fra Taksim eller til fods 20 min fra Taksim. Hoteltransfer tilgængelig fra centrale kvarterer med +€{p.transfer}/person.' },
      { q: 'Er denne bådtour passende for familier med børn?', a: 'Ja — meget familievenlig. Børn 0-3 år gratis, 4-8 år 50% rabat. Overdækket indendørs område, børnemenu på forespørgsel og underholdning (sema, folkedanse) fængslende for børn. Mange familier fra hele verden booker denne tour.' },
      { q: 'Skal jeg medbringe noget til bådturen?', a: 'Pas eller ID-kort (til registrering om bord), let jakke (dækket kan være køligt), behagelige sko, hvis du planlægger at danse. Smartphone til fotos. Kontant eller kort til betaling om bord (begge accepteres). Alt andet — mad, drikke, underholdning — er om bord.' }
    ],
    cta: {
      primary: 'Book Bådturen · Betaling om Bord',
      secondary: '3 timer · Middag + show · Fra €{p.dinnerStd}/person · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Bosporustur fra €{p.dinnerStd} — Istanbul Middagskrydstogt + Show',
      description: 'Tur på 3 timer på Bosporus: tyrkisk middag, live folklore, oplyste natudsigter. Afgang 20:30 fra Kabataş. Gratis afbestilling, betaling om bord.'
    },
    hero: {
      h1: 'Tur på Bosporus',
      subtitle: 'Bosporusturen, som mest anbefales af rejsende — middagskrydstogt på 3 timer, der dækker hvert hovedvartegn i Istanbul, med mad, underholdning og natudsigter.',
      badge: 'Komplet Bosporus-oplevelse · Aftenafgang'
    },
    intro: [
      'En **Bosporustur** kan betyde en turistfærge på 1 time eller en komplet aften af tour med middag — vi gør den anden, og de fleste rejsende finder det oplevelsen af bedre værdi. 3 timer, €{p.dinnerStd}/person, middag og underholdning inkluderet. Du passerer ikke kun forbi vartegn — du spiser, ser showet og nyder aftenen.',
      'Ruten af **vores Bosporustur** dækker alt, hvad der er værd at se: Dolmabahçe-paladset (19. århundredes osmannisk sultans residens), Ortaköy-moskeen (en af de mest fotograferede moskeer i Istanbul), Bosporus-broen (skifter farve om natten), Rumeli Hisarı (bygget af Fatih Sultan Mehmet i 1452), Beylerbeyi-paladset (asiatisk kyst) og Jomfrutårnet på en lille ø. Alt forklaret af engelsktalende mandskab.',
      'Uanset om du er i Istanbul i 24 timer eller en uge, er dette **Bosporusturen**, der giver dig mest på én aften. Bedømmelse 4,8★ af mere end 11.317 rejsende, licenseret af TÜRSAB A-17672, halal-venlig menu, betaling om bord — ingen risiko for forudbetaling.'
    ],
    highlights: [
      { title: 'Hele Bosporus i ét slag', desc: 'Europæisk kyst (Dolmabahçe, Ortaköy, Rumeli Hisarı), asiatisk kyst (Beylerbeyi, Üsküdar), begge Bosporus-broer, Jomfrutårnet. Hvert hovedvartegn synligt på 3 timer.' },
      { title: 'Middag + underholdning inkluderet', desc: 'Ikke kun turistfærge — fuld tyrkisk middag med mezze, hovedret, dessert. Live folkedans-show, sema, orientalsk, DJ. Underholdningsværdi ud over bare landskab.' },
      { title: 'Aften = bedste belysning', desc: 'Dagsture på Bosporus viser dig vartegnene i fladt lys. Aftenture fanger alt oplyst: strålende paladser, farvede broer, moskeer reflekteret i mørkt vand. Bedre fotos, mere dramatiske.' },
      { title: 'Fra €{p.dinnerStd} — betaling om bord', desc: 'Ingen forudbetaling krævet. Betaling om bord (kontant eller kort). Gratis afbestilling indtil 2 timer før afgang. 0-3 år gratis, 4-8 år halv pris. Gennemsigtige priser.' }
    ],
    faq: [
      { q: 'Hvad er de bedste Bosporusture i Istanbul?', a: 'Aftenmiddagsturen rangerer konsekvent højest. Dagsmulighederne (loop-færger på 1 time, turistbåde på 2 timer) viser mindre og inkluderer ikke middag. For værdi er det svært at slå en 3-timers tur med middag, show og centralt mødested. Vores tur €{p.dinnerStd} eliminerer behovet for en separat aften med middag + underholdning.' },
      { q: 'Hvor lang er en Bosporustur?', a: 'Vores Bosporustur varer 3 timer i alt (afgang 20:30, retur 23:30). Der er kortere muligheder (turistfærger på 1 time, ture på 90 minutter), men de springer middagen og underholdningen over. For den komplette aftenoplevelse er 3 timer ideelt — nok til at se alt uden at blive træt.' },
      { q: 'Er Bosporusturen det værd?', a: 'Ja — næsten enhver Istanbul-rejseguide lister "Bosporuskrydstogt" i top 5 obligatoriske ting. Byen blev bygget omkring dette stræde; hvis du ikke har set Bosporus fra vandet, har du ikke rigtig set Istanbul. Vores specifikke aftentour tilføjer middag og underholdning, hvilket gør det til en komplet aftenudflugt i stedet for bare turisme.' },
      { q: 'Hvad skal jeg tage med på Bosporusturen?', a: 'Pas eller ID-kort (til registrering om bord), let jakke (om aftenen er dækket køligt), smartphone/kamera, behagelige sko til dansegulvet. Kontant eller kort til betaling. Alt andet er om bord. Hoteltransfer tilgængelig med +€{p.transfer}/person, hvis du ikke vil bruge offentlig transport.' },
      { q: 'Er Bosporusturen passende for børn?', a: 'Ja — meget børnevenlig. Børn 0-3 år gratis (transfer inkluderet), 4-8 år 50% rabat. Overdækket indendørs område, børnemenu på forespørgsel og delikat og fængslende underholdning. Mange familier booker denne tur som højdepunktet af deres rejse til Istanbul.' },
      { q: 'Hvad er stoppene på Bosporusturen?', a: 'Det er en kontinuerlig tour — ingen stop (ingen afstigning). Båden passerer hvert vartegn, mandskabet forklarer, hvad du ser, du slapper af ved bordet eller går ud på det åbne dæk for fotos. Ingen køer, ingen gang — bare 3 problemfrie timer på vandet.' }
    ],
    cta: {
      primary: 'Book Bosporusturen · Betaling om Bord',
      secondary: '3 timer · Middag + show · Gratis afbestilling 2 timer før · TÜRSAB-licenseret',
      tertiary: 'Tjek Tilgængelighed'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bosporuskrydstogt Billetter fra €{p.dinnerStd} — Betaling om Bord',
      description: 'Direkte Bosporuskrydstogt billetter. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Ingen forudbetaling, betaling om bord. Gratis afbestilling indtil 2t før.'
    },
    hero: {
      h1: 'Bosporuskrydstogt Billetter',
      subtitle: 'Spring mellemmandsomkostningerne over — køb Bosporuskrydstogt billetter direkte hos os. Ingen forudbetaling, betaling om bord, gratis afbestilling indtil 2 timer før afgang.',
      badge: 'Direkte Booking · Ingen Forudbetaling · 40% RABAT'
    },
    intro: [
      'Leder du efter **Bosporuskrydstogt billetter**? Køb direkte. Vores billetter er €{p.dinnerStd} (Standard) eller €{p.dinnerVip} (VIP) — 40% rabat på den normale pris (€{p.dinnerStdOriginal} og €{p.dinnerVipOriginal}). Tredjepartsbookingsider tilføjer normalt 20-40% kommission. Ved at booke direkte sparer du — og betaler stadig om bord.',
      'Vores **Bosporuskrydstogt billetter**-proces: udfyld formularen på denne side på mindre end 1 minut (dato, antal gæster, pakke, kontakt), vi bekræfter med det samme via WhatsApp / Telegram / WeChat, du møder kl. 19:30 ved Kabataş-anløbsbroen, betaler om bord, nyder middagskrydstogtet på 3 timer. Ingen fysisk billet at printe, ingen voucher at modtage via e-mail — bekræftelsen er din billet.',
      'Uanset om du booker middagskrydstogtet for i aften eller booker for en specifik dato næste uge, er **direkte Bosporuskrydstogt billetter** den hurtigste måde. Bedømmelse 4,8★, licenseret af TÜRSAB (A-17672), halal-certificeret menu og understøtter hoteltransfer- og alkoholtillæg.'
    ],
    highlights: [
      { title: 'Direkte booking — ingen mellemmandsomkostninger', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Tredjepartssider opkræver €30-80+ for den samme tour. Spar ved at booke direkte hos os. Ingen skjulte omkostninger, intet kommissionstillæg.' },
      { title: 'Betaling om bord — ingen forudbetaling', desc: 'Book pladsen nu, betal når du går om bord. Kontant eller kort accepteret. Gratis, hvis du afbestiller 2+ timer før afgang. Nul økonomisk risiko ved at booke tidligt.' },
      { title: 'Bekræftelse på mindre end 1 minut', desc: 'Udfyld formularen → vi bekræfter via WhatsApp / Telegram / WeChat. Ingen PDF-vouchermail at printe. Vores besked er din billet. Kom til anløbsbroen kl. 19:30.' },
      { title: 'Nuværende lanceringspris 40% RABAT', desc: 'Standard tidligere €{p.dinnerStdOriginal}, nu €{p.dinnerStd}. VIP tidligere €{p.dinnerVipOriginal}, nu €{p.dinnerVip}. 40% rabat, fordi du booker direkte. Intet tricks med tidsbegrænsning — det er vores standard direkte bookingpris.' }
    ],
    faq: [
      { q: 'Hvad koster Bosporuskrydstogt billetterne?', a: 'Standard: €{p.dinnerStd}/person (normal €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/person (normal €{p.dinnerVipOriginal}). Inkluderer turen på 3 timer, tyrkisk flerretters middag, live folkedans-show, ubegrænsede sodavand. 0-3 år gratis, 4-8 år 50% rabat. Betaling om bord — ingen forudbetaling.' },
      { q: 'Hvor kan jeg købe Bosporuskrydstogt billetter?', a: 'Direkte fra denne side — udfyld reservationsformularen, vi bekræfter med det samme via WhatsApp / Telegram / WeChat. Betaling om bord. Tredjepartsplatforme (Viator, GetYourGuide, Klook) sælger også billetter, men opkræver normalt €30-80+ — dette er mellemmandstillægget. Direkte er det billigste og hurtigste.' },
      { q: 'Skal jeg printe Bosporuskrydstogt billetten?', a: 'Nej — ingen fysisk billet eller voucher nødvendig. Efter reservation sender vi dig en bekræftelse via WhatsApp (eller Telegram/WeChat) med mødested, tid og reservationsnavn. Vis bare din telefon ved anløbsbroen. Færdig.' },
      { q: 'Kan jeg afbestille eller returnere Bosporuskrydstogt billetten?', a: 'Ja — gratis afbestilling indtil 2 timer før afgang. Skriv bare via WhatsApp. Da du endnu ikke har betalt (betaling om bord), er ingen refusion nødvendig — kom bare ikke, uden omkostninger. Meget mere fleksibelt end forudbetalte billetter fra tredjeparter.' },
      { q: 'Er Bosporuskrydstogt billetter tilgængelige samme dag?', a: 'Ofte ja, især på hverdage. Weekender og ferier fyldes hurtigere op. Tjek tilgængelighed via reservationsformularen — den opdateres i realtid. Reservation samme dag er normalt mulig med få timer før afgangen kl. 20:30. For hastende forespørgsler, WhatsApp.' },
      { q: 'Er Bosporuskrydstogt billetter for børn gratis?', a: 'Børn **0-3 år helt gratis** (ingen omkostninger, ingen skjulte omkostninger, transfer inkluderet). **4-8 år 50% rabat** (€{p.dinnerStd}/2 = €12 på Standard). **9+ år fuld voksenpris.** Faste og gennemsigtige priser — ingen "babytillægs"-tricks.' }
    ],
    cta: {
      primary: 'Køb Billetter · Betaling om Bord',
      secondary: 'Direkte booking · Ingen forudbetaling · Gratis afbestilling 2 timer før',
      tertiary: 'Tjek Tilgængelighed'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosporus Last Minute fra €{p.dinnerStd} — Book i Dag, Betal om Bord',
      description: 'Bosporuskrydstogt reservation samme dag. WhatsApp bekræftelse på minutter. Afgang 20:30 fra Kabataş. Gratis afbestilling, betaling om bord. 11.317 anmeldelser.'
    },
    hero: {
      h1: 'Bosporuskrydstogt i Sidste Øjeblik',
      subtitle: 'Tilgængelighed for i aften, bekræftet på få minutter. Ingen forudbetaling, ingen forudtrykt voucher — bare kom til anløbsbroen og nyd aftenen.',
      badge: 'Reservation Samme Dag · Bekræftet på Få Minutter · Betaling om Bord'
    },
    intro: [
      'Landet i Istanbul i eftermiddag og vil have en dejlig aften i aften? **Bosporuskrydstogtet i sidste øjeblik** virker. Vi reserverer specielt pladser til reservationer samme dag, fordi vi ved, at mange rejsende beslutter sig om morgenen. Udfyld formularen her, vi bekræfter via WhatsApp på få minutter, du møder kl. 19:30 ved Kabataş-anløbsbroen, betaler om bord, nyder.',
      '**Vores Bosporuskrydstogt i sidste øjeblik** har det samme aftenprogram som forhåndsbookinger: 3 timer på vandet (20:30-23:30), tyrkisk flerretters middag, live folkedans-show, sema, orientalsk dans, DJ. Oplyst Dolmabahçe-palads, Ortaköy-moskeen, Bosporus-broen — de samme ikoniske udsigter. Samme pris €{p.dinnerStd} Standard eller €{p.dinnerVip} VIP.',
      'Afbestilling samme dag er gratis indtil 2 timer før afgang, fordi **betaling om bord** betyder, at du endnu ikke har lovet noget. Bookede du kl. 14:00 og ændrede dine planer ved kl. 19:00? Skriv bare via WhatsApp — ingen refusion, intet problem. Dette er fleksibiliteten af **Istanbul-touren i sidste øjeblik**, som rejsende værdsætter.'
    ],
    highlights: [
      { title: 'Pladser stadig tilgængelige for i aften', desc: 'Vi reserverer 5-10 pladser om dagen til reservationer samme dag. Tjek formularen ovenfor — realtidstilgængelighed. Hvis dagens tour er fuld, er morgendagens normalt åben.' },
      { title: 'Bekræftelse på mindre end 5 minutter', desc: 'Udfyld formularen → bekræftelsesbesked WhatsApp/Telegram/WeChat → klar. Ingen e-mailvoucher at vente på, ingen QR-kode at printe. Vores besked er din billet.' },
      { title: 'Nul betaling indtil du går om bord', desc: 'Betaling om bord, kontant eller kort. Hvis du ikke kommer (planændring, sygdom, vejr), ingen omkostninger. Gratis afbestilling indtil 2 timer før afgang. Virkelig venlig i sidste øjeblik.' },
      { title: 'Hoteltransfer samme dag ofte tilgængelig', desc: 'Hoteltransferen kræver normalt 24 timers varsel, men for reservationer samme dag mellem 14:00-18:00 kan vi ofte arrangere afhentning med +€{p.transfer}/person. For hastende transferforespørgsler, WhatsApp.' }
    ],
    faq: [
      { q: 'Kan jeg virkelig booke Bosporuskrydstogtet for i aften?', a: 'Ja — ofte. Vi reserverer pladser til reservationer samme dag. Tjek formularen ovenfor for tilgængelighed i aften. Hvis der er pladser tilgængelige, kan du booke indtil kl. 18:00 (3 timer før afgang). Weekender er mere travle — book tidligere på dagen, hvis muligt.' },
      { q: 'Hvor last minute kan jeg booke?', a: 'Reservationerne forbliver åbne indtil kl. 18:00 for båden kl. 20:30. Efter kl. 18:00, skriv direkte til os via WhatsApp på +90 532 244 29 22 — hvis der er ledige pladser, kan vi bekræfte manuelt. Efter kl. 19:30 er det meget stramt, medmindre du allerede er ved Kabataş-anløbsbroen og hurtigt kan gå om bord.' },
      { q: 'Er Bosporuskrydstogtet i sidste øjeblik dyrere?', a: 'Nej — samme pris som forhåndsbooking. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Vi laver ikke "dynamiske priser" eller tillæg for sidste øjeblik. Samme båd, samme middag, samme show, samme pris.' },
      { q: 'Hvad sker der, hvis aftens tour er fuld?', a: 'Morgendagens tour er normalt åben — vi opererer 365 dage om året, hver dag. Du kan booke til i morgen og stadig være "last minute", hvilket betyder, at du lige har besluttet dig. Hverdagsture har mere plads end weekender.' },
      { q: 'Kan I arrangere hoteltransfer i sidste øjeblik?', a: 'Transfer samme dag er muligt indtil ~18:00 for turen kl. 20:30. Efter kl. 18:00 har vi muligvis ingen chauffør tilgængelig — i dette tilfælde kan du tage en taxa til Kabataş-anløbsbroen (15 min fra Taksim, 10 min fra Sultanahmet, ~€10-15). Centralt og let.' },
      { q: 'Hvis jeg allerede er ved Kabataş og vil gå om bord?', a: 'Hvis du er ved anløbsbroen, og der er ledige pladser, kan du bare gå om bord. Skriv til os via WhatsApp eller spørg mandskabet — hvis der er plads, tilføjer vi dig. Samme pris, betaling om bord. I tour-termer kaldes det "walk-on" — det fungerer her.' }
    ],
    cta: {
      primary: 'Book til i Aften · Betaling om Bord',
      secondary: 'Reservation samme dag · Bekræftet på få minutter · Gratis afbestilling 2 timer før',
      tertiary: 'WhatsApp til Hastende Reservationer'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Istanbul Krydstogt Pris fra €{p.dinnerStd} — Gennemsigtige Tariffer',
      description: 'Bosporus krydstogt priser Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Børn 0-3 gratis, 4-8 halv pris. Gennemsigtige tillæg.'
    },
    hero: {
      h1: 'Istanbul Krydstogt Pris',
      subtitle: 'Gennemsigtige priser, ingen skjulte omkostninger. Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person — og du betaler om bord, ikke nu.',
      badge: 'Gennemsigtigt · 40% RABAT Direkte · 0-3 År Gratis'
    },
    intro: [
      '**Istanbul krydstogt priser** varierer meget — fra budget-færger på €15, der springer middagen over, til resortyachter på €150+. Vores pris er midt i mellem og tilbyder den bedste værdi: €{p.dinnerStd} for Standard med fuldt middagskrydstogt og show på 3 timer, €{p.dinnerVip} for VIP med premium oplevelse foran scenen. Ingen skjulte omkostninger, ingen overraskelsestillæg.',
      'En detaljeret opdeling af **Istanbul krydstogt prisen**, fordi gennemsigtighed betyder noget:\n\n- **Standard Middagskrydstogt**: €{p.dinnerStd}/person (tidligere €{p.dinnerStdOriginal}, 40% rabat). Inkluderer tour på 3 timer, 10 mezze, hovedret, dessert, ubegrænsede sodavand, live show.\n- **VIP Middagskrydstogt**: €{p.dinnerVip}/person (tidligere €{p.dinnerVipOriginal}). Tilføjer pladser foran scenen, 15+ mezze, oksefilet/ribeye-muligheder, prioriteret service.\n- **0-3 år**: Gratis. 4-8 år: 50% rabat. 9+ år: fuld pris.\n\nTillæg (valgfri):\n- 2 glas alkohol: +€{p.alcohol2}/person\n- Ubegrænset lokal alkohol: +€{p.unlimited}/person\n- Hoteltransfer tur-retur: +€{p.transfer}/person\n- Romantisk bordopsætning: +€{p.romantic}/bord',
      'Og vigtigt: **betaling om bord**. Du lover ikke en cent, før du er på båden. Gratis afbestilling indtil 2 timer før afgang. Ingen forpligtelse, ingen risiko — den mest **forbrugervenlige pris for Istanbul-krydstogtet**, du vil finde.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (tidligere €{p.dinnerStdOriginal})', desc: '40% rabat på den normale pris. Tour på 3 timer, fuld tyrkisk middag, live show, ubegrænsede sodavand. Den mest populære pakke — dækker alt, hvad du har brug for til en dejlig aften.' },
      { title: 'VIP: €{p.dinnerVip} (tidligere €{p.dinnerVipOriginal})', desc: '40% rabat på den normale pris. Tilføjer pladser foran scenen, 15+ mezze, premium hovedret (oksefilet, ribeye), prioriteret tjenerservice. Til specielle lejligheder eller premium rejsende.' },
      { title: 'Pris for børn: 0-3 gratis, 4-8 halv pris', desc: '0-3 helt gratis (ingen omkostninger). 4-8 med 50% rabat på voksenprisen. 9+ fuld voksenpris. Gennemsigtigt, ingen familieprisricks. Transferen er også gratis for 0-3.' },
      { title: 'Tillæg — kun når du vil have dem', desc: 'Alkohol: €{p.alcohol2} eller €{p.unlimited}/person. Transfer: €{p.transfer}/person. Romantisk bord: €{p.romantic}/bord. Alt valgfrit, ikke pakket. Vælg kun, hvad du har brug for.' }
    ],
    faq: [
      { q: 'Hvad koster en tour i Istanbul?', a: 'Standard Middagskrydstogt: €{p.dinnerStd}/person (normal €{p.dinnerStdOriginal}, 40% rabat). VIP: €{p.dinnerVip}/person (normal €{p.dinnerVipOriginal}, 40% rabat). 0-3 år gratis, 4-8 år halv pris. Betaling om bord — ingen forudbetaling. Gratis afbestilling indtil 2 timer før afgang.' },
      { q: 'Er der skjulte omkostninger i Istanbul-tourprisen?', a: 'Nej. Prisen inkluderer: tour på 3 timer, fuld middag (mezze, forret, hovedret, dessert), ubegrænsede sodavand, live show, skatter. De valgfri tillæg (alkohol, transfer, romantisk bord) er separate og med gennemsigtig pris — du betaler kun for, hvad du tilføjer. Ingen "servicegebyr", "havnegebyr", overraskelsestillæg.' },
      { q: 'Hvorfor er Istanbul-tourprisen 40% rabat — er det et trick?', a: 'Intet trick. Den normale pris €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} er, hvad tredjepartsbookingsider (Viator, GetYourGuide, Klook) opkræver — med deres kommissioner. Book direkte og få €{p.dinnerStd}/€{p.dinnerVip}. Dette er forskellen på 40%. Ingen tricks med begrænset eller dynamisk pris.' },
      { q: 'Hvordan sammenligner Istanbul-tourprisen med andre muligheder?', a: 'Loop-færger: €5-10, 1 time, ingen middag, ingen underholdning, kun turisme. Budget-ture med middag: €20-30, fyldte, gennemsnitlig mad, kort show. Vores Standard (€{p.dinnerStd}): 3 timer, fuld middag, fuldt show, privat bord, TÜRSAB-licenseret. VIP (€{p.dinnerVip}): foran scenen, premium menu. Resortyachter: €100-150+, overdrevet for solo-rejsende/par.' },
      { q: 'Skal jeg betale Istanbul-tourprisen på forhånd?', a: 'Nej — **betaling om bord**. Book nu (formular på 1 minut), vi bekræfter via WhatsApp, kom kl. 19:30 og betal om bord (kontant eller kort). Gratis afbestilling indtil 2 timer før. Nul økonomisk forpligtelse, før du er tilfreds.' },
      { q: 'Er der grupperabatter på Istanbul-tourprisen?', a: 'For grupper på 10+, kan vi tilbyde 5-10% rabat — skriv via WhatsApp med gruppestørrelsen. For 25+, overvej den private tour (hele båden til din gruppe, skræddersyet menu). For 2-9 personer gælder standardpriserne — allerede 40% rabat på den normale pris.' }
    ],
    cta: {
      primary: 'Reservér · Betaling om Bord',
      secondary: 'Fra €{p.dinnerStd}/person · 0-3 år gratis · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Bosporus Seværdigheder fra €{p.dinnerStd} — Istanbul Seværdigheder fra Vandet',
      description: 'Bosporus seværdighedskrydstogt: Dolmabahçe, Ortaköy, Bosporus-broen, Rumeli, Beylerbeyi, Jomfrutårnet. Aftentur 3t med middag. Gratis afbestilling, betaling om bord.'
    },
    hero: {
      h1: 'Turisme på Bosporus',
      subtitle: 'Alle Istanbuls ikoniske vartegn — fra vandet, om natten, med middag. Én tour på 3 timer dækker Dolmabahçe, Ortaköy-moskeen, Bosporus-broen, Rumeli Hisarı og meget mere.',
      badge: '10+ Vartegn · Europæiske og Asiatiske Kyster · 3 Timer'
    },
    intro: [
      '**Turisme på Bosporus** fra vandet slår enhver bustour. Bosporus er byens mest historiske vandvej — osmanniske sultaner, byzantinske kejsere, græske handlende og russiske krigsskibe er alle passeret her. I dag passerer vores tour på 3 timer, med kommentarer fra det engelsktalende mandskab, hvert hovedvartegn i Istanbul, der definerer skylinen.',
      'Ruten af **vores turistiske tour på Bosporus** (aftenafgang, 20:30-23:30):\n\n1. **Dolmabahçe-paladset** — 19. århundredes osmannisk residens, oplyst om natten\n2. **Çırağan-paladset** — nu luksushotel, kongelig historie\n3. **Ortaköy-moskeen** — en af de mest fotograferede moskeer i Istanbul, over vandet\n4. **Bosporus-broen** — skifter om natten mellem blå, lilla, gylden\n5. **Bebek** — elegant kvarter på den europæiske kyst\n6. **Rumeli Hisarı** — bygget af Fatih Sultan Mehmet i 1452 før erobringen af Konstantinopel\n7. **Fatih Sultan Mehmet-broen** — anden Bosporus-bro, dramatisk bue\n8. **Beylerbeyi-paladset** — asiatisk kyst, osmannisk sommerresidens\n9. **Üsküdar** — Istanbuls asiatiske kyst, traditionelt kvarter\n10. **Jomfrutårnet** — tårn på lille ø, et af Istanbuls mest romantiske symboler',
      'Middagen og underholdningen er inkluderet — ikke separat — så **turisme på Bosporus** transformeres til en komplet aften. Tyrkisk flerretters middag, live folkedans-show, sema, orientalsk dans, DJ. Bedømmelse 4,8★ af mere end 11.317 rejsende, licenseret af TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ hovedvartegn i Istanbul', desc: 'Dolmabahçe-paladset, Çırağan-paladset, Ortaköy-moskeen, Bosporus-broen, Rumeli Hisarı, FSM-broen, Beylerbeyi-paladset, Üsküdar, Jomfrutårnet. Hvert essentielt vartegn i Istanbul i én tour.' },
      { title: 'Begge kyster, europæisk og asiatisk', desc: 'Europæisk kyst på vej derhen (Dolmabahçe → Rumeli Hisarı), asiatisk kyst på vej tilbage (Beylerbeyi → Üsküdar). To kontinenter i en tour på 3 timer — kun Istanbul tillader dig dette.' },
      { title: 'Aftenturisme = oplyste udsigter', desc: 'Dagsturisme viser dig vartegnene i fladt lys. Aftenturen fanger dem på dramatisk top: strålende gule paladser, farvede broer, moskeer reflekteret i mørkt vand. Bedre for fotos, mere mindeværdige.' },
      { title: 'Middag + show inkluderet', desc: 'Turisme + middag + underholdning i én pakke. Du behøver ikke planlægge separat middag efter touren. Fra €{p.dinnerStd}/person, betaling om bord, i alt 3 timer.' }
    ],
    faq: [
      { q: 'Hvilke Bosporus-vartegn vil jeg se?', a: 'I rækkefølge: Dolmabahçe-paladset, Çırağan-paladset, Ortaköy-moskeen, Bosporus-broen, Bebek-kvarteret, Rumeli Hisarı, Fatih Sultan Mehmet-broen, Anadolu Hisarı, Beylerbeyi-paladset, Kuzguncuk, Üsküdar og Jomfrutårnet (synligt i det fjerne). 10+ hovedvartegn i én rute på 3 timer.' },
      { q: 'Er turisme på Bosporus bedre om dagen eller om natten?', a: 'Forskellige oplevelser. Dag: klarere udsigt til arkitektoniske detaljer, lysere for fotos. Nat: dramatisk belysning, mystisk atmosfære, færre både på vandet. De fleste rejsende foretrækker nattouren, fordi vartegnene virker mere magiske — og middagen + showet gør det til en komplet aften.' },
      { q: 'Stopper båden ved vartegn for fotos?', a: 'Det er en kontinuerlig tour — ingen stop (ingen afstigning). Båden passerer hvert vartegn, mandskabet forklarer, hvad du ser, du kan gå ud på det åbne dæk for fotos. Ingen køer, ingen gang, ingen tidsplanstres — bare en kontinuerlig fotomulighed på 3 timer.' },
      { q: 'Kommenterer mandskabet under turismen?', a: 'Ja — det engelsktalende mandskab giver korte kommentarer, mens vi passerer hvert hovedvartegn (historie, arkitektur, kuriositeter). Det er ikke en guidet lektion, mere en venlig forklaring, mens du spiser middag. For dybere historie anbefaler vi at parre med en gåtur i Istanbul i dagtimerne.' },
      { q: 'Hvordan adskiller turisme på Bosporus sig fra hop-on-færgen?', a: 'Hop-on-færger (loop-både af Şehir Hatları): €5-10, 1-2 timer, basis, ingen middag, fyldte. Vores tour: €{p.dinnerStd}, 3 timer, fuld middag, live show, privat bord, kommentar på engelsk. For seriøs og komfortabel turisme er aftenturen bedre. For hurtig og økonomisk transit fungerer loop-færgen.' },
      { q: 'Kan jeg fotografere vartegnene fra båden?', a: 'Ja — absolut. Det åbne dæk har fremragende pladser til fotografi. Vartegnene passerer 100-200 meter fra båden. Smartphone-fotos kommer fantastisk ud; DSLR/mirrorless-brugere kan få storslåede kompositioner, især i overgangen fra gylden time til blå time i begyndelsen af aftenen.' }
    ],
    cta: {
      primary: 'Book Turisttouren · Betaling om Bord',
      secondary: '10+ vartegn · Middag + show · Gratis afbestilling 2 timer før',
      tertiary: 'Tilgængelighed i Aften'
    }
  }

};
