/**
 * Norwegian (Bokmål) translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 * Informal register (du/deg).
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Middag på Bosporos fra €{p.dinnerStd} — Nattcruise Istanbul + Show',
      description: '3-timers middagscruise på Bosporos: tyrkisk flerrettsmeny og live folkeshow. Avgang 20:30 fra Kabataş. Gratis avbestilling, betal om bord.'
    },
    hero: {
      h1: 'Middagscruise på Bosporos i Istanbul',
      subtitle: 'Tre timer med live underholdning, en raus tyrkisk middag med flere retter og de mest imponerende natteutsiktene over Bosporos.',
      badge: '4,8★ · 11 317 anmeldelser'
    },
    intro: [
      '**Middagscruiset på Bosporos** er Istanbuls mest ikoniske kveldsopplevelse. Turen starter kl. 19:30 ved Kabataş-kaia og seiler under de opplyste Bosporos- og Fatih Sultan Mehmet-broene, og byr på en tyrkisk flerrettsmiddag, live folkedans, orientalsk dans og et DJ-sett som fyller dekket til kl. 23:00.',
      'I motsetning til vanlige fartøyer som preger Istanbuls kveldsbilde er **vårt middagscruise på Bosporos** TÜRSAB-lisensiert (A-17672) og gitt 4,8★ av over 11 317 reisende. Vi holder gruppene små og servicen varm — og fordi du betaler om bord, er det ingen risiko ved å reservere på forhånd.',
      'Enten du feirer et jubileum, søker en premium kveld i Istanbul med familien, eller vil ha byens mest fotogene solnedgang-til-natt-overgang — dette er middagscruiset som Istanbuls lokale anbefaler fremst.'
    ],
    highlights: [
      { title: 'Tyrkisk middag med flere retter', desc: '10 mezesorter, varm forrett (paçanga böreği), valg av hovedrett (laks / havabbor / kylling / kjøttboller / vegetar), iskakert til dessert, ubegrenset leskedrikk.' },
      { title: 'Live folkedans, orientalsk dans og DJ', desc: 'Mevlana sema-forestilling, 5 tradisjonelle tyrkiske folkedanser, orientalsk dans, live tyrkiske musikere, etterfulgt av DJ-sett gjennom hele cruiset.' },
      { title: 'Komplett natterute langs Bosporos', desc: 'Kabataş → Dolmabahçe → Çırağan-palasset → Ortaköy-moskeen → Bebek → Rumeli Hisarı → FSM-broen → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Fra €{p.dinnerStd}/person — betal om bord', desc: 'Standard cruise €{p.dinnerStd} (opprinnelig €{p.dinnerStdOriginal}). VIP-cruise med scenenær plass og premiummeny €{p.dinnerVip}. Ingen forskuddsbetaling. Gratis avbestilling inntil 2 timer før avgang.' }
    ],
    faq: [
      { q: 'Når starter middagscruiset på Bosporos?', a: 'Ombordstigning starter kl. 19:30 ved Kabataş-kaia. Fartøyet avgår kl. 20:30 og returnerer rundt kl. 23:30. Vi anbefaler at du ankommer 15–20 minutter tidlig for å sette deg til rette og slappe av.' },
      { q: 'Hva koster middagscruiset på Bosporos?', a: 'Standard cruise €{p.dinnerStd}/person (ordinær pris €{p.dinnerStdOriginal}). VIP-cruise med scenenær plass og premiummeny €{p.dinnerVip}/person. 0–3 år gratis, 4–8 år 50 % rabatt. Betaling skjer om bord — ingen forskuddsbetaling.' },
      { q: 'Er alkohol inkludert i middagscruiset?', a: 'Ubegrenset leskedrikk (vann, cola, juice) er inkludert i prisen. Alkoholpakker er valgfrie: 2 glass +€{p.alcohol2}/person eller ubegrenset lokal alkohol (vin, øl, rakı, vodka, gin) +€{p.unlimited}/person. Importsprit faktureres separat om bord.' },
      { q: 'Finnes det hotellhenting?', a: 'Ja — henting og kjøring tilbake er +€{p.transfer}/person. Betjente soner: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane og Sütlüce. Du kan velge dette alternativet i reservasjonsskjemaet.' },
      { q: 'Er middagscruiset på Bosporos halal?', a: 'Absolutt. Alt kjøtt om bord er halalsertifisert. Alkohol er et valgfritt tillegg (aldri påtvunget gjester), og bordordningen skiller naturlig gjester som foretrekker et alkoholfritt bord. Vi tilbyr også vegetaralternativer uten ekstra kostnad.' },
      { q: 'Hva bør jeg ha på meg?', a: 'Smart casual. Kveldene i Istanbul kan være kjølige selv om sommeren — vi anbefaler en lett jakke eller sjal. Det er ingen streng dresscode, men badedrakt, flip-flops eller sportstøy passer ikke til middagsatmosfæren.' }
    ],
    cta: {
      primary: 'Bestill nå · Betal om bord',
      secondary: 'Gratis avbestilling inntil 2 timer før avgang',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosporos med barn — Familiecruise fra €{p.dinnerStd}/voksen',
      description: 'Familievennlig middagscruise på Bosporos. Barn 0–3 gratis, 4–8 halv pris. Trygt innendørs område, barnemeny.'
    },
    hero: {
      h1: 'Cruise på Bosporos med barn',
      subtitle: 'En kveld på Bosporos tilrettelagt for familier med barn — middag, underholdning og en trygg, komfortabel atmosfære.',
      badge: 'Familievennlig · Halal · 0–3 år gratis'
    },
    intro: [
      '**Bosporos-cruiset med barn** er Istanbuls mest familievennlige kveldsalternativ. Vi tar imot dusinvis av familier hver kveld — vi har tenkt på hvert eneste detalj slik at de minste har det komfortabelt: overbygget innendørs sone for å holde varmen, en tilgjengelig barnemeny (enkel grillet kylling, pasta, ubegrenset leskedrikk) og tidlig ombordstigning for å unngå senkveldstrøtt.',
      'I motsetning til kun-voksen-skip forblir **vårt familiemiddagscruise på Bosporos** varmt og inkluderende. **Barn 0–3 år er gratis** (transfer inkludert), 4–8 år får **50 % rabatt**, 9+ år betaler full pris — ingen skjulte kostnader. Live folkedans, orientalsk dans og sema-forestillingen er familievennlig underholdning, ikke en nattklubb.',
      'Enten du er i Istanbul i en langhelg med småbarn, eller tar tenåringene med på sin første europareise — dette er turen som Istanbuls familier anbefaler. Trygg, halalsertifisert, TÜRSAB-lisensiert og gitt 4,8★ av over 11 317 reisende.'
    ],
    highlights: [
      { title: '0–3 år helt gratis', desc: 'Ingen avgifter for babyer og småbarn. 4–8 år betaler 50 % av voksenpris. Fra 9 år er det full voksengjestepris. Transparent, ingen overraskelser.' },
      { title: 'Overbygget innendørs sone', desc: 'Fullt overbygget og oppvarmet i kjølige måneder. Barna holder seg varme og vindavskjermede. Åpent dekk er tilgjengelig når været er fint — valget er ditt.' },
      { title: 'Barnemeny på forespørsel', desc: 'Enkel grillet kylling, pasta, brød og grønnsaker — uten ekstra kostnad. Ubegrenset leskedrikk (cola, juice, vann). Gi oss beskjed på forhånd — ingen krydrede mezeoppdagelser for de minste.' },
      { title: 'Trygg familieunderholdning', desc: 'Sema-forestilling (fascinerende for barn), 5 tradisjonelle folkedanser, live tyrkisk musikk og DJ-sett. Alt er familievennlig — ingen voksent innhold. Barna er ofte med å danse.' }
    ],
    faq: [
      { q: 'Er Bosporos-cruiset trygt for små barn?', a: 'Ja — fartøyet vårt er TÜRSAB-lisensiert, har en overbygget innendørs sone med sikre vinduer, redningsvester i alle størrelser tilgjengelig og et profesjonelt mannskap med erfaring fra familier. Vi anbefaler innendørsdekket for småbarn og åpent dekk for barn fra 6 år.' },
      { q: 'Hva er barneprisene på Bosporos-cruiset?', a: 'Barn **0–3 år: GRATIS** (ingen avgifter, ingen skjulte kostnader). **4–8 år: 50 % rabatt** av voksenprisen — altså €12/barn på Standard (€{p.dinnerStd}/2). **9+ år: full voksenpris.** Hotelloverføring er gratis for 0–3 år, standard for 4+ (€{p.transfer}/person).' },
      { q: 'Finnes det barnemeny om bord?', a: 'Ja — enkel grillet kylling, pasta, brød, sesonggrønnsaker og ubegrenset leskedrikk. Gi oss beskjed om allergier eller matpreferanser ved bestilling, så lager vi noe barnet ditt vil like.' },
      { q: 'Er musikken eller forestillingen for høylydt for barn?', a: 'Live-forestillingene skjer i ett scenområde — hvis barna dine er lydfølsomme, plasserer vi deg ved et roligere bord lenger bak. Forestillingen varer totalt 40 minutter, resten av kvelden er moderat volum tyrkisk bakgrunnsmusikk og DJ.' },
      { q: 'Hva skjer hvis babyen sovner under cruiset?', a: 'Ingen problem — mange gjør det. Innendørsområdet har benkseter der en baby eller et lite barn kan sove komfortabelt. Be mannskapet om et varmt teppe ved behov. Ingen ekstra kostnad.' },
      { q: 'Bør jeg ta med barnevognen om bord?', a: 'Du kan, men vi anbefaler å la stor barnevogn stå på hotellet (eller hos sjåføren vår hvis du har bestilt overføring — vi oppbevarer den trygt). Fartøyet vårt har smale korridorer og dekk med trapper. En lett bæresele er mer praktisk om bord.' }
    ],
    cta: {
      primary: 'Bestill familiecruiset · Betal om bord',
      secondary: 'Gratis avbestilling inntil 2 timer · Ingen forskuddsbetaling',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantisk Bosporos-cruise fra €{p.dinnerStd} — Middag ved levende lys',
      description: 'Romantisk Bosporos-cruise: bord med levende lys, roser, flerrettsmiddag under opplyste broer. Fra €{p.dinnerStd}/person. Gratis avbestilling, betal om bord.'
    },
    hero: {
      h1: 'Romantisk cruise på Bosporos',
      subtitle: 'Middag ved stearinlysets skjær, rosendekorert bord, opplyste broer og et spesielt øyeblikk bare for dere to under Istanbuls mest ikoniske natthimmel.',
      badge: 'Jubileum · Bryllupsreise · Spesiell kveld'
    },
    intro: [
      '**Det romantiske Bosporos-cruiset** er Istanbuls mest ikoniske parkveld. Mens solen går ned bak Dolmabahçe-palasset og Bosporosbroen tennes i farger, deler du og partneren din en tyrkisk flerrettsmiddag ved et privat bord — med levende lys, friske blomster og fiolin som svever på dekket.',
      'Vår romantiske bordoppsett (+€{p.romantic}/bord) gjør ethvert sete til et spesielt øyeblikk: røde roser, glødende stearinlys, et håndskrevet velkomstbrev. Legg til ubegrenset alkoholpakke for vin under stjernene (+€{p.unlimited}/person) eller hold det enkelt med de inkluderte lesedrikker. Uansett valg tar mannskapet diskret hånd om resten.',
      'Enten du feirer et jubileum, planlegger en overraskelse for partneren eller bare vil ha en uforglemmelig kveld i Europas mest romantiske by — dette er turen som Istanbuls par elsker. Rangert 4,8★, TÜRSAB-lisensiert og — viktigst av alt — betal om bord, så lover du bare selve kvelden.'
    ],
    highlights: [
      { title: 'Romantisk bord ved levende lys', desc: 'Legg til romantisk bordoppsett for +€{p.romantic}/bord: friske røde roser, glødende stearinlys, rosenblader på duken og håndskrevet hilsenkort. Fotografering inkludert.' },
      { title: 'De beste bordene for solnedgang-til-natt-overgangen', desc: 'Vindusbordet er reservert for par. Se Bosporosbroen tennes, Jomfrutårnet skinne og Ortaköy-moskeen lyse opp fra ditt private bord.' },
      { title: 'Live fiolin og intim atmosfære', desc: 'Live fiolin og akustisk tyrkisk musikk under middagen skaper en langsom, romantisk stemning. Deretter kommer DJ-en, og par danser på åpent dekk under lysene.' },
      { title: 'Vin, champagne, premiumkombinasjoner', desc: 'Legg til 2 glass alkohol (+€{p.alcohol2}/person) eller ubegrenset vin, øl, lokal rakı (+€{p.unlimited}/person). Importchampagne og premiumkombinasjoner på forespørsel — spør ved bestilling.' }
    ],
    faq: [
      { q: 'Hva gjør dette cruiset romantisk?', a: 'Kombinasjonen av privat bord, lysoppsett (valgfritt +€{p.romantic}), tyrkisk flerrettsmiddag, live fiolin og akustisk musikk og Bosporosens opplyste broer over hodet. Vi legger opp opplevelsen for par — rolig stemning i starten, deretter energisk DJ og dans. Du bestemmer tempoet.' },
      { q: 'Kan dere ordne en overraskelse for partneren min — bursdag, jubileum, frieri?', a: 'Ja — fortell oss det ved bestilling. Vi kan koordinere med personalet: jubileumskake (gratis), spesiell bordsetting, håndskrevet hilsen på ditt språk eller levering av noe til bordet på rett tidspunkt. For frieri anbefaler vi å skrive direkte til oss på WhatsApp slik at vi kan planlegge diskret.' },
      { q: 'Hva koster det romantiske cruiset for 2 personer?', a: '2 Standard: 2 × €{p.dinnerStd} = €48. Legg til romantisk oppsett +€{p.romantic} = €63. 2 VIP: 2 × €{p.dinnerVip} = €110 + romantisk oppsett €{p.romantic} = €125. Ingen forskuddsbetaling — betal om bord. Ubegrenset alkohol ytterligere 2 × €{p.unlimited} = €60.' },
      { q: 'Er det romantiske Bosporos-cruiset privat — bare for oss?', a: 'Nei — det er et delt cruise med andre par og gjester (opptil 60–80 totalt). **Bordet ditt** er privat (kun for gruppen din), men det er andre gjester om bord. Ønsker du et helt privat fartøy for 2, er det et separat **Privat Bosporos-cruise** (som vi kan arrangere på forespørsel — skriv til oss).' },
      { q: 'Kan vi ta med egne blomster, kake eller gave?', a: 'Selvfølgelig. Ta med hva du vil — personalet hjelper deg diskret med å plassere overraskelsesgaven, skjule ringskrinet i desserten eller vise frem blomstene du har tatt med. Ingen korkpenger eller ekstra avgifter. Bare si ifra slik at vi kan koordinere tidspunktet.' },
      { q: 'Hva bør vi ha på oss til et romantisk Bosporos-cruise?', a: 'Smart casual til elegant — mange par kler seg fint (kjoler, dressjakker). Det er ingen streng dresscode, men stemningen er mer spesiell enn vanlig turisme. Ta med en lett jakke eller sjal — dekket kan bli kjølig selv om sommeren. Komfortable sko hvis du planlegger å danse etter middag.' }
    ],
    cta: {
      primary: 'Bestill det romantiske cruiset · Betal om bord',
      secondary: 'Legg til romantisk bordsetting (+€{p.romantic}) i bestillingsskjemaet · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Bosporos-middagscruise fra €{p.dinnerStd} — Show + Natttur',
      description: '3-timers middagscruise på Bosporos: live folkeshow, opplyste broer, Bosporos-panorama om natten. Halalmeny tilgjengelig på forespørsel.'
    },
    hero: {
      h1: 'Halal cruise på Bosporos i Istanbul',
      subtitle: '100 % halalsertifisert meny, alkohol alltid valgfritt, familievennlig underholdning og respektfull atmosfære for muslimske reisende — kvelden på Bosporos, gjort riktig.',
      badge: '100 % Halal · Familievennlig · Muslimsk eierskap'
    },
    intro: [
      '**Halal-cruiset på Bosporos** er Istanbuls mest respektfulle middagscruise for muslimske reisende. Hvert kjøttstykke som serveres om bord — laks, havabbor, kylling, lammekjøttboller, oksefilet, entrecôte — er **halalsertifisert** fra godkjente leverandører. Vi serverer samme meny til alle gjester; ingen separat "halal-seksjon", fordi hele fartøyet er halal som standard.',
      'Alkohol er **et valgfritt tillegg** — aldri påtvunget gjester, og bordordningen skiller naturlig gjester som foretrekker et alkoholfritt bord. For gjester som ønsker ubegrenset alkoholpakke (+€{p.unlimited}/person), er det tilgjengelig, men den ubegrensede lesedrikken inkludert (vann, cola, juice) er tilstrekkelig for de fleste muslimske familier. Mannskapet er opplært til å respektere dine preferanser uten forutsetninger.',
      '**Det halal-vennlige Bosporos-cruiset** betyr noe for reisende fra Saudi-Arabia, UAE, Kuwait, Qatar, Iran, Malaysia, Indonesia, Pakistan og Marokko som ønsker Istanbuls mest ikoniske kveld uten kompromisser. TÜRSAB-lisensiert, 4,8★ og betal om bord — du lover ingenting før du er sikker på at opplevelsen oppfyller dine standarder.'
    ],
    highlights: [
      { title: '100 % halalsertifisert meny', desc: 'Alt kjøtt (laks, havabbor, kylling, kjøttboller, okse, entrecôte) er halalsertifisert fra godkjente leverandører. Kjøkkenet følger halalpreparering. Ingen svinekjøtt eller ikke-halal-tilsetningsstoffer. Vegetaralternativer alltid tilgjengelig.' },
      { title: 'Alkohol valgfritt, aldri påtvunget', desc: 'Alkoholpakker er tillegg — ikke inkludert som standard. Lesedrikker (vann, cola, juice) er ubegrenset og gratis. Bordet ditt forblir alkoholfritt hvis du ikke eksplisitt ber om det. Mannskapet respekterer valget ditt i stillhet.' },
      { title: 'Familievennlig underholdning', desc: 'Sema-forestilling, tradisjonelle tyrkiske folkedanser, live tyrkisk musikk. Ingen natteklubbstil-show, intet upassende innhold. Trygt for barn, respektfullt for familier. Orientalsk dans er en tradisjonell kunstform, fremstilt med verdighet.' },
      { title: 'Respekt for bønnetider', desc: 'Hvis ombordstigning sammenfaller med maghrib eller isja (19:30–20:30), kan personalet vise deg til det stille bønnerommet ved Kabataş-kaia før avgang. Gi oss bare beskjed ved bestilling.' }
    ],
    faq: [
      { q: 'Er Bosporos-cruiset 100 % halal?', a: 'Ja — hvert kjøttprodukt på menyen (fisk, kylling, kjøttboller, oksefilet, entrecôte, lam) er halalsertifisert fra godkjente leverandører. Kjøkkenet følger halalprepareringsstandard. Det serveres ikke svinekjøtt noe sted om bord. Det er ikke et "halal-alternativ" — hele menyen er halal.' },
      { q: 'Drikker andre gjester om bord alkohol?', a: 'Noen gjester legger til den valgfrie alkoholpakken (+€{p.unlimited}/person). Bordene er naturlig separert — du kan be om en alkoholfri sone. Mannskapet bringer ikke alkohol med mindre en gjest eksplisitt bestiller det. Lesedrikker (ubegrenset) er inkludert for alle.' },
      { q: 'Er dette cruiset egnet for muslimske familier med barn?', a: 'Ja — det er ett av Istanbuls mest respekterte familiecruiser. Underholdningen er beskjeden (folkedanser, sema, tyrkisk musikk), barn under 3 år er gratis, 4–8 år får 50 % rabatt. Ingen natteklubb-atmosfære. Familier fra Gulfen, Indonesia, Malaysia, Pakistan og Marokko bestiller jevnlig dette cruiset.' },
      { q: 'Kan jeg be om bord?', a: 'Det er ikke noe dedikert bønnerom om bord, men vi anbefaler å be før ombordstigning kl. 19:30 (maghrib-bønn faller ofte i dette intervallet). Kabataş-kaia har bønnefasiliteter. Hvis du trenger å be under seilasen 20:30–23:30 (isja), snakk med mannskapet — vi kan arrangere et stille hjørne på dekk.' },
      { q: 'Hva er prisene for en muslimsk familie på 4 (2 voksne, 2 barn)?', a: 'Standard cruise: 2 × €{p.dinnerStd} + 2 × €12 (halvpris 4–8 år) = €72. Hvis barna er under 3 år, gratis: 2 × €{p.dinnerStd} = €48. Legg til €10 hotelloverføring per voksen. Totalt: €48–92 for familie på 4, ingen forskuddsbetaling, betal om bord.' },
      { q: 'Er hotelloverføringen også halal?', a: 'Hotelloverføringen er bare en biltransport — ingen mat eller drikke er involvert, så det er ingen halal-bekymring. Sjåførene våre er profesjonelle, respektfulle og punktlige. Overføringsonene dekker Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih og 8 andre sentrale bydeler der muslimske reisende vanligvis bor.' }
    ],
    cta: {
      primary: 'Bestill halal-cruiset · Betal om bord',
      secondary: 'Gratis avbestilling 2 timer før · Ingen forskuddsbetaling · Halalsertifisert',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP Bosporos-cruise fra €{p.dinnerVip} — Premium middag, VIP-plass',
      description: 'VIP Bosporos-middagscruise: premiummeze, biffvalg, scenenær plass, prioritetsservice. Tidligere €{p.dinnerVipOriginal}, nå €{p.dinnerVip}.'
    },
    hero: {
      h1: 'VIP-cruise på Bosporos',
      subtitle: 'Frontrow-plasser ved scenen, premium tyrkisk meny med biffvalg og prioritetsservice — en kveld på Bosporos på neste nivå for reisende som vil ha det beste bordet om bord.',
      badge: 'Mest populær · 40 % RABATT · Frontrow-plasser'
    },
    intro: [
      '**VIP-cruiset på Bosporos** plasserer deg ved de beste plassene om bord: scenenære bord med direkte utsikt til sema-forestillingen, folkedansene, orientalsk dans og live musikk. Premiummenyen legger til oksefilet og entrecôte til hovedrettsvalg (mot kylling/laks på Standard), pluss 15+ tyrkiske tradisjonsmeze servert som en raus oppsats.',
      '**VIP-middagscruiset på Bosporos** er kåret til Mest Populær av gjestene våre — fordi til €{p.dinnerVip}/person (fra €{p.dinnerVipOriginal}, 40 % rabatt) ligner opplevelsen mer et fine dining-restaurant enn en turisttur. Privat bord, oppmerksomme kelnere og de samme spektakulære utsiktene mot Dolmabahçe, Ortaköy-moskeen og den opplyste Bosporosbroen.',
      'Enten du er forretningsreisende, feirer noe viktig eller tenker "vi er i Istanbul én gang — la oss gjøre det ordentlig", er dette **VIP-Bosporos-cruiset** bestilt av besøkende som kommer tilbake. TÜRSAB-lisensiert, 4,8★ med 11 317+ anmeldelser, betal om bord, gratis avbestilling inntil 2 timer før avgang.'
    ],
    highlights: [
      { title: 'Privat bord frontrow ved scenen', desc: 'Reserverte plasser rett foran showscenen — best utsikt til sema-forestillingen, folkedansene og orientalsk dans. Bordet ditt, ikke delt. Fotografer elsker disse plassene.' },
      { title: '15+ meze + premium hovedretter', desc: '15+ tyrkiske mezevarianter servert som tradisjonell oppsats. Hovedrettsvalg inkluderer oksefilet og entrecôte (Standard har kun kylling/laks). Samme dessert og ubegrenset lesedrikk.' },
      { title: 'Prioritetskjelnerservice', desc: 'En dedikert kelner serverer bordet ditt først — påfyll, menyhjelp, koordinering av alkoholtillegg, spesielle ønsker. Du kjemper ikke om oppmerksomhet i et overfylt rom.' },
      { title: '40 % RABATT — fra €{p.dinnerVipOriginal}, nå €{p.dinnerVip}', desc: 'Ordinær pris €{p.dinnerVipOriginal}/person. Nåværende lanseringspris €{p.dinnerVip}/person — 40 % rabatt. Betal om bord, ingen forskuddsbetaling. Gratis avbestilling inntil 2 timer før avgang.' }
    ],
    faq: [
      { q: 'Hva er forskjellen mellom VIP og Standard Bosporos-cruise?', a: 'VIP får: (1) frontrow-plasser med best utsikt, (2) 15+ meze mot 10 på Standard, (3) oksefilet + entrecôte lagt til hovedrettsvalg, (4) prioritetskjelnerservice. Samme 3-timers tur, samme underholdning, samme rute. €{p.dinnerVip} mot €{p.dinnerStd}.' },
      { q: 'Er VIP-prisen €{p.dinnerVip} virkelig 40 % rabatt?', a: 'Ja — ordinær pris er €{p.dinnerVipOriginal}/person (sjekk på hvilken som helst bookingside). Vi bruker €{p.dinnerVip} som direktebestillingspris, og kutter mellomledd-avgiftene. Du får VIP for mindre enn de fleste steder tar for Standard.' },
      { q: 'Er alkohol inkludert i VIP-cruiset?', a: 'Nei — alkohol er et separat tillegg (akkurat som på Standard). 2 glass: +€{p.alcohol2}/person. Ubegrenset lokal alkohol (vin, øl, rakı, vodka, gin): +€{p.unlimited}/person. Premium importdrikker faktureres separat. Ubegrenset lesedrikk er inkludert og gratis.' },
      { q: 'Kan jeg oppgradere til VIP etter å ha gått om bord på Standard?', a: 'Avhenger av tilgjengelighet — hvis VIP-bordene er ledige, ja. Du betaler differansen (€{p.dinnerVip} - €{p.dinnerStd} = €31) om bord. Men vi anbefaler å bestille VIP på forhånd: de beste frontrow-plassene går til forhåndsbestillinger.' },
      { q: 'Hvordan bestiller jeg VIP-cruiset på Bosporos?', a: 'Bruk bestillingsskjemaet på denne siden — velg "VIP" i trinn 1, sett dato, oppgi antall gjester, deretter kontaktopplysninger. Forespørselen din kommer via WhatsApp / Telegram / WeChat og vi bekrefter umiddelbart. Betal om bord, ikke nå.' },
      { q: 'Er VIP-cruiset egnet for forretningsmiddager med kunder?', a: 'Ja — VIP er det hyppigste valget for forretningsmiddager i Istanbul. Privat bord, rolig nok for samtale, imponerende meny og utsikt. Mange gjester bestiller VIP + ubegrenset alkohol for å ta imot kunder. Halalsertifisert (bra for golfstatenes forretningsreisende). Gi oss beskjed ved bestilling, vi ordner et roligere VIP-bord lenger bak.' }
    ],
    cta: {
      primary: 'Bestill VIP · Betal om bord',
      secondary: 'Fra €{p.dinnerVipOriginal}, nå €{p.dinnerVip} · Gratis avbestilling 2 timer før',
      tertiary: 'Se Standard-alternativet (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Privat Bosporos-cruise — Båtleie Istanbul (25+ gjester)',
      description: 'Privat Bosporos-cruise for grupper, bryllup, bedriftsarrangementer. Eksklusivt fartøy, tilpasset meny, fleksibel varighet. Gratis avbestilling.'
    },
    hero: {
      h1: 'Privat cruise på Bosporos',
      subtitle: 'Lei hele fartøyet for gruppen din — familiesammenkomster, bedriftsmiddager, bursdager, forlovelser, bryllup. Eksklusiv bruk, tilpasset meny, fleksibelt program.',
      badge: 'Privat leie · 25+ gjester · Tilpasset meny'
    },
    intro: [
      '**Det private Bosporos-cruiset** betyr at hele fartøyet er ditt — ingen andre gjester, ingen delte bord, ingen felles dansegulv. Perfekt for familiegjenforeninger, bedriftsmiddager, bursdagsfester, utdrikkingslag eller bryllupsseremonier. Fartøyet, mannskapet, menyen, underholdningen og programmet tilpasses gruppen din.',
      '**Vår private Bosporos-leie** tar **fra 25 til 80 gjester**. Mindre grupper kan fortsatt be om den private opplevelsen — vi tilbyr en minstepris som dekker driftskostnaden. Større grupper (bryllupsformat) får tilpassede priser og inkluderer vanligvis spesiell dekor, live band, kakeskjæring og utvidet varighet (4–5 timer i stedet for standard 3).',
      'Enten du arrangerer et bedriftsarrangement for kunder, en 50-årsfeiring eller en bryllupsreepsjon under Istanbuls mest ikoniske broer, er dette **det pålitelige private cruiset for Istanbuls eventarrangører**. Rangert 4,8★, TÜRSAB-lisensiert, fullt engelsktalende mannskap og total fleksibilitet — rute, meny, musikk, program.'
    ],
    highlights: [
      { title: 'Hele fartøyet, bare for dere', desc: 'Ingen andre gjester. Gruppen din eier hvert dekk, hvert bord. Sett din egen musikk, dresscode, program. Privatliv betyr noe — vi respekterer det.' },
      { title: 'Tilpasset meny og drikkepakke', desc: 'Samarbeid med kokken vår for å tilpasse menyen: spesifikke meze, hovedrettsvalg, retter tilpasset kultur eller diettbehov. Alkoholpakker, champagneskåler, tilpassede cocktailbarer — alt kan arrangeres.' },
      { title: 'Fleksibel varighet og avgang', desc: 'Standard 3 timer kan utvides til 4–5 timer. Velg dagsavgang kl. 12:00, solnedgangsavgang kl. 17:30 eller kveldsavgang kl. 20:30. Ønsker du ukedag i stedet for helg? Ingen problem — vi tilpasser oss programmet ditt.' },
      { title: 'Tilpasset dekor, band, program', desc: 'Tilpasset dekor (ballonger, bannere, blomsterdekor), live band i stedet for DJ, bryllupskakeskjæring, fotografkoordinering, taler — legg til hva arrangementet trenger. Vi er eventarrangører, ikke bare fartøydrivere.' }
    ],
    faq: [
      { q: 'Hva koster et privat Bosporos-cruise?', a: 'For grupper 25+, vanligvis €{p.dinnerStd}–€{p.dinnerVip}/person + fartøyleieavgift avhengig av gruppestørrelse, dato og varighet. Skriv til oss på WhatsApp med gruppestørrelse, dato og krav — vi gir pris innen én time. De fleste arrangementer faller i intervallet €2 000–€6 000 totalt.' },
      { q: 'Hva er minimum gruppestørrelse for et privat Bosporos-cruise?', a: 'Teknisk sett gjør 25 gjester privat cruise økonomisk gjennomførbart. Mindre grupper (10–24) kan leie privat, men betaler en minstepris tilsvarende ~25 personer. For virkelig små grupper (2–10) bør du vurdere ordinært Standard- eller VIP-cruise — bordet ditt er allerede privat, bare fartøyet er delt.' },
      { q: 'Kan jeg arrangere bryllup på Bosporos-cruiset?', a: 'Ja — vi arrangerer 10–15 bryllupsseremonier per år. Kapasitet opp til 80 for middagssetting, opp til 100 for cocktailstil. Vi koordinerer med fotografen, bryllupsarrangøren, bandet eller kokken din. Tilpasset kakeskjæring, første dans-ring, champagneskål — alt kan arrangeres. Skriv på WhatsApp for bryllupshenvendelse.' },
      { q: 'Hva med bedriftsarrangementer og teamdinner?', a: 'Private bedriftscruiser er våre hyppigste bestillinger. Selskapsmiddag, kundebevertning, produktlansering, teamfeiring — alt fungerer. Vi kan levere faktura med MVA-spesifikasjon, arrangere hotelloverføringer for teamet ditt og koordinere merkevare-materiell (bordpynt, bannere) på forespørsel.' },
      { q: 'Kan jeg ta med eget live band eller DJ i stedet for underholdningen din?', a: 'Ja — du kan ta med ditt eget live band, DJ, fotograf. Eller behold vårt standard (sema, folkedansere, orientalsk, DJ) og legg ditt til i tillegg. Fartøyet har PA-anlegg og dansegulv. Gi oss beskjed på forhånd slik at vi kan koordinere lydkontrollen.' },
      { q: 'Hvordan ber jeg om pris for privat Bosporos-cruise?', a: 'Enklest: skriv til oss på WhatsApp +90 532 244 29 22 med (1) gruppestørrelse, (2) foretrukket dato, (3) anledning (bryllup, bedrift, bursdag), (4) spesielle krav. Vi svarer innen én time i åpningstiden, 12 timer om natten. Vi kan også arrangere en videosamtale for å diskutere detaljer.' }
    ],
    cta: {
      primary: 'WhatsApp for tilpasset pris',
      secondary: 'Tilpasset meny, gruppe 25–80, fleksibel varighet · Svar innen 1 time',
      tertiary: 'Standard cruise-alternativet (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosporos for par fra €{p.dinnerStd} — Romantisk kveld i Istanbul',
      description: 'Bosporos-middagscruise for par. Privat bord, opplyste broer, valgfri romantisk dekor. Fra €{p.dinnerStd}/person.'
    },
    hero: {
      h1: 'Cruise på Bosporos for par',
      subtitle: 'En romantisk kveld på Bosporos — privat bord, live musikk, opplyste broer over hodet. Enten det er din første date i Istanbul eller tiende jubileum, fungerer denne kvelden.',
      badge: 'Privat bord · Live musikk · Betal om bord'
    },
    intro: [
      '**Bosporos-cruiset for par** er Istanbuls favorittkveld. Ikke alle par feirer et jubileum — noen ganger er dere bare i verdens mest romantiske by og vil ha en fantastisk kveld sammen. Dette cruiset tilbyr: privat bord for to, langsom tyrkisk flerrettsmiddag, live fiolin og akustisk musikk under middagen og den opplyste Bosporosbroen som glir forbi.',
      'Atmosfæren er **varm, men ikke overdrevent romantisk** — ingen obligatorisk ekteskapstilbud-musikk, ingen pinlige koordinerte applaus for "de nygift". Spis, drikk, snakk, se lyset av Istanbul. Vil du legge til romantisk bordoppsett (levende lys, roser, +€{p.romantic})? Utmerket — ellers er selve middagen allerede spesiell.',
      'Enten du er i Istanbul i 3 dager med partneren, feirer noe rolig eller planlegger en utforskningsreise for et fremtidig frieri — **Bosporos-cruiset for par** gir deg 3 timer kveldstur i en av verdens mest fotograferte byer. 4,8★, betal om bord, gratis avbestilling.'
    ],
    highlights: [
      { title: 'Privat bord for to', desc: 'Privat bord for 2, ikke delt. Prioritet til vindusbordet for par. Solnedgangs- og Bosporos-nattfotografering rett utenfor vinduet ditt.' },
      { title: 'Langsom flerrettsmiddag', desc: '10 tyrkiske mezevarianter, varm forrett, hovedrett (laks, havabbor, kylling, kjøttboller eller vegetar), iskakert til dessert. Servert langsomt over 3 timer — du har ikke hastverk.' },
      { title: 'Live fiolin og lett musikk', desc: 'Live fiolin og akustisk tyrkisk musikk under middagen skaper en intim atmosfære som egner seg for samtale. Deretter kommer DJ-en for par som vil danse.' },
      { title: 'Tillegg for spesielle kvelder', desc: 'Romantisk bordoppsett (levende lys, roser): +€{p.romantic}. Ubegrenset lokal alkohol (vin, rakı): +€{p.unlimited}/person. Hotelloverføring (tur-retur): +€{p.transfer}/person. Velg hva som passer kvelden din.' }
    ],
    faq: [
      { q: 'Er dette Bosporos-cruiset egnet for en vanlig kveld, ikke en spesiell anledning?', a: 'Ja — de fleste parene våre feirer ikke noe spesielt, de har bare en fin kveld sammen. Atmosfæren er varm og hyggelig uten å overdrive. Du kan legge til romantisk bordoppsett (+€{p.romantic}) om du vil ha ekstra, eller bare nyte standarden — den er allerede spesiell.' },
      { q: 'Hva koster Bosporos-cruiset for 2 personer?', a: '2 Standard: 2 × €{p.dinnerStd} = €48. 2 VIP: 2 × €{p.dinnerVip} = €110. Legg til hotelloverføring for to: +€{p.transfer}×2 = €20. Legg til ubegrenset alkohol for to: +€{p.unlimited}×2 = €60. Ingen forskuddsbetaling — betal om bord.' },
      { q: 'Kan par ta med sin egen vin eller champagne?', a: 'Vi tillater ikke alkohol utenfra (av lisensårsaker). Men vi har ubegrenset lokal vin (+€{p.unlimited}/person) og kan arrangere premium importviner eller champagne mot en avgift — spør ved bestilling. Prosecco, Chianti og Cabernet er populære premiumbestillinger.' },
      { q: 'Er det et problem hvis vi ikke drikker alkohol — er det uvanlig?', a: 'Ikke i det hele tatt — mange par hopper helt over alkohol, enten av halalårsaker eller preferanse. Ubegrenset lesedrikk (vann, juice, cola) er inkludert. Ingen ser dobbelt om bordet ditt er alkoholfritt. Mange muslimske par fra Saudi-Arabia, Iran og Indonesia bestiller dette cruiset.' },
      { q: 'Når er Bosporos-cruiset best for par — solnedgang eller kveld?', a: 'Kveld (avgang 20:30) er mest ikonisk — opplyste broer, vannrefleksjoner, opplyste palasser. Solnedgang (avgang 17:30) er tidligere og har gyldentime-skjønnhet, men middagscruiset er spesifikt kl. 20:30. Vil du ha begge, bestiller de fleste par solnedgangs- og kveldscruis på forskjellige dager.' },
      { q: 'Er det dansegulv — kan vi danse?', a: 'Ja — etter middagen (~22:30) starter DJ-en og åpent dekk blir dansesonen. Mange par danser langsomme låter under lysene med Bosporosbroen i bakgrunnen. Noen av de fineste bildene du tar i Istanbul.' }
    ],
    cta: {
      primary: 'Bestill den romantiske kvelden · Betal om bord',
      secondary: 'Legg til romantisk oppsett (+€{p.romantic}) · Gratis avbestilling 2 timer før',
      tertiary: 'Se det romantiske Bosporos-cruiset'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Solnedgangscruise på Bosporos fra €35 — Gylden time + middag',
      description: 'Solnedgangscruise på Bosporos fra Kabataş, avgang 17:30. Palasser i gyllent lys, middag som fortsetter inn i den opplyste natten. 3 timer. Gratis avbestilling, betal om bord.'
    },
    hero: {
      h1: 'Solnedgangscruise på Bosporos',
      subtitle: 'Den magiske timen på Bosporos — se solen gå ned bak minaretsilhuettene mens du seiler forbi Dolmabahçe, Ortaköy-moskeen og Bosporosbroen som tennes for natten.',
      badge: 'Gylden time · Avgang 17:30 · Beste bilder'
    },
    intro: [
      '**Solnedgangscruiset på Bosporos** fanger Istanbul i sin mest fotogene positur. Gå om bord kl. 17:30 og i løpet av 20 minutter begynner solen å synke bak minaretene på den europeiske bredden — og maler Dolmabahçe-palasset i gull, forvandler Bosporos-vannet til kobber og gjør Ortaköy-moskeen til en silhuett mot den strålende himmelen. Hvert smarttelefonfoto fra dette cruiset ser ut som en profesjonell film.',
      '**Vårt solnedgangscruise på Bosporos** inkluderer en komplett tyrkisk middag som starter under gyldentime og fortsetter mens broene tennes for natten. Til desserten seiler du under den opplyste Bosporosbroen — 30 millioner lys reflektert i det mørke vannet. Overgangen fra dag til natt, pakket inn i 3 timer, er hele greia.',
      'Enten du er fotograf på jakt etter gyldentime, reisende som vil ha det beste av dag og natt, eller et par som søker "det øyeblikksbildet fra Istanbul" — dette er **det anbefalte solnedgangsmiddagscruiset på Bosporos**. Rangert 4,8★, TÜRSAB-lisensiert, betal om bord, ingen forskuddsbetaling.'
    ],
    highlights: [
      { title: 'Topp gyldentime — avgang 17:30', desc: 'Gå om bord kl. 17:30, solnedgang skjer rundt kl. 18:30 om sommeren / 17:00 om vinteren. De første 40 minuttene av cruiset er gyldentime du jakter på. Kamera klar — dette er bildet.' },
      { title: 'Dag-til-natt-overgang inkludert', desc: 'Ikke bare solnedgang — vi seiler inn i skumringen, deretter inn i det opplyste Bosporos. Se 3 forskjellige lysfaser på ett cruise: gull, blå time og fullt opplyst natt.' },
      { title: 'Komplett middag under cruiset', desc: '10 tyrkiske mezevarianter, varm forrett, hovedrett (laks, havabbor, kylling, kjøttboller, vegetar), iskakert. Samme kvalitetsmeny som kveldscruis, servert under solnedgangen.' },
      { title: 'Dolmabahçe, Ortaköy, Bosporosbroen — alle skinner', desc: 'Ruten passerer Dolmabahçe-palasset (gull ved solnedgang), Ortaköy-moskeen (kuppel i silhuett), Bosporosbroen (tennes), Rumeli Hisarı, Beylerbeyi-palasset. Hvert landemerke i sitt beste lys.' }
    ],
    faq: [
      { q: 'Når avgår solnedgangscruiset på Bosporos?', a: 'Ombordstigning starter kl. 17:00, fartøyet avgår kl. 17:30, returnerer rundt kl. 20:30. Vi legger opp tidspunktet slik at det skjer akkurat når solen går ned over vannet — varierer litt med sesongen (sommer 18:30, vinter 17:00). Vi justerer avgangstidspunktet 15–30 minutter sesongmessig.' },
      { q: 'Er solnedgangscruiset det samme som middagscruiset?', a: 'Likt, men til forskjellige tider. Solnedgangscruiset avgår kl. 17:30 med middag servert under cruiset (gyldentime + tidlig kveld). Middagscruiset er kl. 20:30 — etter mørkets frembrudd, rene nattutsikter. Samme fartøy, samme meny, samme underholdning — bare forskjellig lys. Noen gjester gjør begge på forskjellige dager.' },
      { q: 'Hva koster solnedgangscruiset på Bosporos?', a: 'Standard solnedgangscruise fra €35/person (3 timer, komplett middag, live underholdning). VIP-alternativet med frontrow-plass og premiummeze €55/person. Betal om bord — ingen forskuddsbetaling. 0–3 år gratis, 4–8 år halvpris.' },
      { q: 'Er solnedgangscruiset bedre enn middagscruiset (kveldscruiset)?', a: '"Bedre" avhenger av hva du vil. Solnedgang = beste bilder, gyllent lys, roligere tempo, tidligere kveld. Kveld = mest ikoniske lys (opplyste broer), best underholdning, senere middag. Fotografer velger solnedgang. Par på romantisk kveld velger kveld. Familier med barn velger vanligvis solnedgang (slutter tidlig).' },
      { q: 'Hva bør jeg ta med til solnedgangscruiset?', a: 'Smarttelefon eller kamera for bilder (gyldentime tigger). Lett jakke — vinden tiltar ved solnedgang og dekket kan bli raskt kjølig tidlig på kvelden. Solbriller for de første 30 minuttene. Smart casual — du spiser middag, men ingen streng dresscode.' },
      { q: 'Kan jeg bli på cruiset for å se de opplyste broene om natten?', a: 'Solnedgangscruiset er 3 timer (17:30–20:30), så mot slutten vil du se Bosporosbroen fullt opplyst og det opplyste Jomfrutårnet. Vil du ha de TOPP nattutsiktene (20:30–23:30, alle restauranter og monumenter fullt opplyst), bestill middagscruiset fra kl. 20:30. Beste løsning: bestill begge på forskjellige kvelder.' }
    ],
    cta: {
      primary: 'Bestill solnedgangscruiset · Betal om bord',
      secondary: 'Avgang 17:30 · Solnedgang + middag inkludert · Gratis avbestilling 2 timer før',
      tertiary: 'Se kveldsscruiset (20:30)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Bosporos om natten fra €{p.dinnerStd} — Middagscruise + Live show',
      description: '3-timers natttur på Bosporos med middag og live show. Avgang 20:30 fra Kabataş, opplyste broer. Gratis avbestilling, betal om bord.'
    },
    hero: {
      h1: 'Natttur på Bosporos',
      subtitle: 'Istanbuls opplyste broer, opplyste palasser og Bosporos-vannet som ett speil som reflekterer 30 millioner lys — nattturen som definerer kvelden i Istanbul.',
      badge: 'Opplyste broer · Live show · Middag inkludert'
    },
    intro: [
      '**Nattturen på Bosporos** er Istanbuls mest anbefalte kveldsaktivitet. Her er grunnen: etter mørkets frembrudd forvandler Bosporos seg. Bosporosbroen veksler mellom blå, lilla og gull. Dolmabahçe-palasset skinner i varm gul. Ortaköy-moskeen reflekteres perfekt i det sorte vannet. Hvert Istanbul-landemerke når sitt dramatiske høydepunkt om natten.',
      '**Vår natttur på Bosporos med middag** pakker inn den komplette ikoniske kvelden: 3 timer på vannet (20:30–23:30), tyrkisk flerrettsmiddag, live folkedanser (sema, 5 folkedanser, orientalsk), live musikk og DJ-sett som fyller dekket til slutten av natten. Hver gjest får samme program — ingen "basis"-alternativ som hopper over de beste delene.',
      'Enten det er ditt første besøk i Istanbul og du leter etter "det eneste du må gjøre om natten", eller du har vært her før og vil ha byens mest fotogene 3 timer, er dette **nattturen på Bosporos** gitt 4,8★ av over 11 317 reisende. TÜRSAB-lisensiert, betal om bord, ingen forskuddsbetaling.'
    ],
    highlights: [
      { title: 'Bosporos opplyst på sitt dramatiske høydepunkt', desc: 'Bosporosbroen skifter farge (blå, lilla, gull), palassene skinner gult, Ortaköy-moskeen reflekteres i det sorte vannet. 20:30–23:30 maksimal belysning for alle Istanbuls landemerker.' },
      { title: 'Tradisjonell tyrkisk show om bord', desc: 'Sema-forestilling, 5 tradisjonelle folkedanser (fra ulike regioner i Tyrkia), orientalsk dans, live tyrkisk musikk, deretter DJ-sett. 40 minutters show, deretter musikk + middag fortsetter.' },
      { title: 'Komplett flerrettsmiddag', desc: '10 tyrkiske mezevarianter, varm forrett (paçanga böreği), hovedrett (laks, havabbor, kylling, kjøttboller, vegetar — ditt valg), dessert (iskakert), ubegrenset lesedrikk. Halalsertifisert.' },
      { title: 'Komplett Bosporos-rute', desc: 'Kabataş → Dolmabahçe → Çırağan-palasset → Ortaköy-moskeen → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet-broen → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Jomfrutårnet → Kabataş.' }
    ],
    faq: [
      { q: 'Når er nattturen på Bosporos?', a: 'Ombordstigning fra kl. 19:30 ved Kabataş-kaia. Fartøyet avgår kl. 20:30, returnerer rundt kl. 23:30. Vi anbefaler at du ankommer 20 minutter tidlig for å slå deg ned og velge plass.' },
      { q: 'Hva koster nattturen på Bosporos?', a: 'Standard natttur (3 timer, middag, show): €{p.dinnerStd}/person (fra €{p.dinnerStdOriginal}). VIP med frontrow-plass og premiummeny: €{p.dinnerVip}/person (fra €{p.dinnerVipOriginal}). 0–3 år gratis, 4–8 år halvpris. Betal om bord.' },
      { q: 'Hva er forskjellen mellom nattturen på Bosporos og middagscruiset?', a: 'Det er det samme, bare et annet søkeord. "Natttur på Bosporos" er hvordan mange reisende søker; "middagscruise" er bransjebetegnelsen. Samme fartøy, samme 3-timers program, samme meny, samme show. Velg ditt foretrukne søkeord — opplevelsen er identisk.' },
      { q: 'Natttur på Bosporos eller solnedgangscruise — hva er mest verdt?', a: 'Natttur = opplyst Istanbul, maksimalt lyslig drama, fullt underholdningsprogram, de mest ikoniske bildene av opplyste broer. Solnedgang = gyldentime, roligere tempo, slutter kl. 20:30. Gjør du bare én: nattturen er mest ikonisk. Mange gjør begge på forskjellige dager.' },
      { q: 'Kan jeg ta nattturen på Bosporos på min første dag i Istanbul?', a: 'Ja — vi anbefaler det. Mange reisende bestiller nattturen den første kvelden fordi den gir deg en komplett orientering: alle de viktigste landemerkene fra vannet, med god mat og underholdning. Enklere enn å slite med jet lag og prøve å gå tur på dag 1. Hotelloverføring tilgjengelig fra sentrale bydeler.' },
      { q: 'Jeg snakker ikke tyrkisk — er turen på engelsk?', a: 'Mannskapet snakker engelsk. Underholdningen (sema, folkedanser, musikk) krever ikke språk. Middagsmenyen er på engelsk. Bestilling via WhatsApp / Telegram / WeChat fungerer på flere språk (engelsk, arabisk, russisk, tysk, fransk, spansk). Tyrkisk er ikke nødvendig.' }
    ],
    cta: {
      primary: 'Bestill nattturen · Betal om bord',
      secondary: 'Avgang 20:30 · 3 timer · Middag + show inkludert · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Middagscruise Istanbul fra €{p.dinnerStd} — Natttur Bosporos',
      description: '3-timers middagscruise i Istanbul på Bosporos. Tyrkisk flerrettsmeny, live folkeshow, opplyste broer. Gratis avbestilling, betal om bord. 11 317 anmeldelser.'
    },
    hero: {
      h1: 'Middagscruise Istanbul',
      subtitle: 'Istanbuls beste middagscruise — 3 timer på Bosporos, tyrkisk flerrettsmiddag, live underholdning og nattutsikter over byens mest ikoniske landemerker.',
      badge: '4,8★ · 11 317 anmeldelser · TÜRSAB A-17672'
    },
    intro: [
      'Leter du etter et **middagscruise i Istanbul**? Du har funnet det som de fleste reisende anbefaler. Vår 3-timers kveld på Bosporos kombinerer en komplett tyrkisk flerrettsmiddag, live folkedanser og byens mest fotogene utsikter — alt fra et komfortabelt fartøy som avgår kl. 20:30 fra Kabataş-kaia.',
      'Opplevelsen av **middagscruiset i Istanbul**: gå om bord kl. 19:30, sett deg til rette, se Dolmabahçe-palasset mens vi avgår, middagen starter når vi nærmer oss Ortaköy-moskeen, showet begynner (sema, folkedanser, orientalsk), og til desserten er du under den opplyste Bosporosbroen. Til midnatt er du tilbake ved Kabataş med et ikonisk bildekollasj og full mage.',
      '€{p.dinnerStd}/person for Standard cruise (fra €{p.dinnerStdOriginal}) eller €{p.dinnerVip}/person for VIP med frontrow-plasser (fra €{p.dinnerVipOriginal}). Betal om bord — ingen forskuddsbetaling, ingen risiko. TÜRSAB-lisensiert A-17672, rangert 4,8★ av over 11 317 reisende.'
    ],
    highlights: [
      { title: 'Komplett tyrkisk flerrettsmiddag', desc: '10 mezevarianter, varm forrett, hovedrett (laks/havabbor/kylling/kjøttboller/vegetar), iskakert. Halalsertifisert. Ubegrenset lesedrikk inkludert.' },
      { title: 'Live tyrkisk folkedansshow', desc: 'Sema-forestilling, 5 tradisjonelle folkedanser, orientalsk dans, live tyrkisk musikk, DJ. 40 minutters show, bakgrunnsmusikk fortsetter.' },
      { title: 'Komplett Bosporos-nattrute', desc: '3-timers tur: Dolmabahçe, Çırağan, Ortaköy-moskeen, Bosporosbroen, Bebek, Rumeli Hisarı, FSM-broen, Beylerbeyi, Üsküdar, Jomfrutårnet. Begge bredder, europeisk og asiatisk.' },
      { title: 'Fra €{p.dinnerStd} — betal om bord', desc: 'Standard: €{p.dinnerStd} (fra €{p.dinnerStdOriginal}). VIP med premiummeny: €{p.dinnerVip} (fra €{p.dinnerVipOriginal}). Ingen forskuddsbetaling. Gratis avbestilling inntil 2 timer før avgang.' }
    ],
    faq: [
      { q: 'Hva koster middagscruiset i Istanbul?', a: 'Vårt Standard middagscruise €{p.dinnerStd}/person (ordinær pris €{p.dinnerStdOriginal}). VIP med frontrow-plass og premiummeny €{p.dinnerVip}/person (ordinær pris €{p.dinnerVipOriginal}). 0–3 år gratis, 4–8 år 50 % rabatt. Betal om bord — ingen forskuddsbetaling.' },
      { q: 'Hva er inkludert i prisen for middagscruiset i Istanbul?', a: '3-timers tur på Bosporos, tyrkisk flerrettsmiddag (meze, varm forrett, hovedrett, dessert), ubegrenset lesedrikk, live folkedansshow (sema, folkedanser, orientalsk), live musikk + DJ, tilgang åpent dekk, avgifter inkludert. Hotelloverføring og alkohol er valgfrie tillegg.' },
      { q: 'Hvor avgår middagscruiset i Istanbul fra?', a: 'Kabataş-kaia, Istanbul — på den europeiske bredden, nær Dolmabahçe-palasset. Nøyaktig møtepunkt kommuniseres via WhatsApp / Telegram / WeChat etter bestilling. Gåvideo fra Dolmabahçe-tramvaystopp og Kabataş-tramvaystopp finnes i møtepunkt-seksjonen ovenfor.' },
      { q: 'Hvor lenge varer middagscruiset — og når starter det?', a: 'Totalt 3 timer. Ombordstigning fra kl. 19:30, fartøyet avgår nøyaktig kl. 20:30, returnerer rundt kl. 23:30. Vi anbefaler at du ankommer 15–20 minutter tidlig for å slå deg ned og velge plass.' },
      { q: 'Må jeg bestille på forhånd, eller kan jeg bare komme?', a: 'Bestill på forhånd — plassene fylles opp, spesielt i helger og ferier. Siste-minutt-bestillinger er ofte mulig, men ikke garantert. Skjemaet på denne siden sikrer deg en plass på under 1 minutt. Betal om bord, så det er ingen finansiell risiko ved å bestille tidlig.' },
      { q: 'Er middagscruiset i Istanbul egnet for vegetarianere / halal / kostrestriksjoner?', a: 'Ja — alt kjøtt er halalsertifisert. Vegetarisk hovedrett (falafel, stekte poteter, bulgurpilav, grønnsaksstuing, løkringer) tilgjengelig uten ekstra kostnad. Allergier kan tilrettelegges hvis beskjed gis ved bestilling. Alkohol er et valgfritt tillegg, aldri påtvunget.' }
    ],
    cta: {
      primary: 'Bestill middagscruiset · Betal om bord',
      secondary: '4,8★ · TÜRSAB-lisensiert · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Natttur Istanbul fra €{p.dinnerStd} — Middagscruise Bosporos + Show',
      description: '3-timers cruise på Bosporos med middag og live show. Avgang 20:30 fra Kabataş. Gratis avbestilling, betal om bord. 11 317 anmeldelser. Valgfri hotelloverføring.'
    },
    hero: {
      h1: 'Istanbul om natten',
      subtitle: 'Istanbuls mest anbefalte natttur — 3-timers Bosporos-cruise med middag, live underholdning og byens mest ikoniske opplyste utsikter.',
      badge: 'Ikonisk Istanbul-kveld · 3 timer · Middag inkludert'
    },
    intro: [
      'En **natttur i Istanbul** må gjøre tre ting: vise deg byens ikoniske landemerker, gi deg god mat og underholde deg. Vårt Bosporos-middagscruise gjør alle tre på én 3-timers kveld — og det er derfor de fleste Istanbul-guider anbefaler det som #1 natttur-opplevelse.',
      'Ruten for **nattturen i Istanbul** dekker de beste opplyste landemerkene: Dolmabahçe-palasset, Ortaköy-moskeen, Bosporosbroen (skifter farge), Bebek-bydelen, Rumeli Hisarı, FSM-broen, Beylerbeyi-palasset, asiatisk kyst Üsküdar og Jomfrutårnet i det fjerne. De fleste bybusser viser deg dem fra buss — vi viser deg dem fra vannet, der de er mest dramatiske.',
      'Middag er inkludert (tyrkisk flerrettsmeny), live tyrkisk folkedansshow, sema, orientalsk dans og DJ-sett. Er du i Istanbul i 2–3 dager, er dette den ene kvelden som gir sterkest inntrykk. 4,8★ av over 11 317 reisende, betal om bord, ingen forskuddsbetaling.'
    ],
    highlights: [
      { title: 'Alle Istanbuls ikoniske nattutsikter', desc: 'Dolmabahçe-palasset, Ortaköy-moskeen, opplyst Bosporosbro, Rumeli Hisarı, FSM-broen, Beylerbeyi-palasset, Jomfrutårnet. Hvert viktig landemerke ved topp nattbelysning.' },
      { title: 'Komplett tyrkisk middag inkludert', desc: '10 meze, varm forrett, hovedrett (laks/havabbor/kylling/kjøttboller/vegetar), dessert, ubegrenset lesedrikk. Halalsertifisert. Priset til €{p.dinnerStd}/person — alt inkludert.' },
      { title: 'Live folkedanser + sema + orientalsk', desc: 'Tradisjonell tyrkisk underholdning: Mevlana sema-forestilling, 5 regionale folkedanser, orientalsk dans, live musikk, DJ. 40 minutters show, bakgrunnsmusikk hele kvelden.' },
      { title: 'Enkelt for førstegangsbøsøk i Istanbul', desc: 'Sentralt møtepunkt (Kabataş-kaia), hotelloverføring (+€{p.transfer}/person), engelsktalende mannskap, betal om bord. Null logistisk stress. Kom, nyt, dra.' }
    ],
    faq: [
      { q: 'Hva er den beste nattturen i Istanbul?', a: 'Bosporos-middagscruiset er konsekvent rangert #1. Grunner: (1) gir deg alle ikoniske nattutsikter fra vannet, (2) inkluderer middag og show i én pakke, (3) 3 timer er nok til å se mye uten trøtthet, (4) sentralt møtepunkt, (5) betal om bord reduserer bestillingsfriksjon. De fleste Istanbul-reiseguider anbefaler det som "det eneste obligatoriske om natten".' },
      { q: 'Hva koster nattturen i Istanbul?', a: 'Vår natttur med middag på Bosporos: Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person. Inkludert tur, middag, underholdning, lesedrikker. Valgfritt: alkohol +€{p.unlimited}/person, hotelloverføring +€{p.transfer}/person. Betal om bord — ingen forskuddsbetaling.' },
      { q: 'Er nattturen i Istanbul trygg for soloreisende?', a: 'Ja — meget trygt. TÜRSAB-lisensiert fartøy, profesjonelt engelsktalende mannskap, CCTV på dekk, redningsvester tilgjengelig. Mange soloreisende bestiller denne turen. Spis ved delt eller privat bord (ditt valg) og kvelden er inkluderende — møt andre reisende om du vil, eller hold for deg selv.' },
      { q: 'Hva er beste tidspunkt for natttur i Istanbul?', a: 'Vårt middagscruise på Bosporos er 20:30–23:30 (3 timer). Dette er topp belysingstidspunktet for alle Istanbuls landemerker — broer fullt opplyst, glødende palasser, månen på vannet. Vil du ha det tidligere (gyldentime), vurder solnedgangscruiset fra kl. 17:30.' },
      { q: 'Hvordan kommer jeg til møtestedet for nattturen i Istanbul?', a: 'Møtestedet er Kabataş-kaia (europeisk sentrum, nær Dolmabahçe-palasset). Med trikk: T1 til Kabataş-stopp (endestasjon). Med taxi: ~15 min fra Taksim. Til fots: 20 min fra Taksim via İnönü Bulvarı. Gåvideoer finnes på denne siden. Hotelloverføring tilgjengelig for +€{p.transfer}/person hvis du foretrekker det.' },
      { q: 'Kan jeg bestille nattturen i Istanbul samme dag?', a: 'Ofte ja, spesielt hverdager. Helger fylles raskere. Bestillingsskjemaet på denne siden lar deg sjekke tilgjengelighet for i kveld og bestille på under 1 minutt. For hastehenvendelser samme dag, skriv til oss på WhatsApp +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Bestill nattturen · Betal om bord',
      secondary: 'Fra €{p.dinnerStd}/person · Middag + show inkludert · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Båttur Istanbul fra €{p.dinnerStd} — Bosporos + Middag + Show',
      description: '3-timers båttur: Bosporos-cruise, komplett tyrkisk middag, live folkeshow, opplyste nattutsikter. Gratis avbestilling, betal om bord. 11 317 anmeldelser.'
    },
    hero: {
      h1: 'Båttur i Istanbul',
      subtitle: 'Istanbuls mest bestilte båttur av reisende — Bosporos-cruise med tyrkisk mat, live underholdning og byens ikoniske utsikter fra vannet.',
      badge: '4,8★ · TÜRSAB A-17672 · Betal om bord'
    },
    intro: [
      'Når du søker etter "båttur i Istanbul", søker du etter det ene som definerer byen fra vannet: Bosporos. Vår 3-timers Bosporos-båttur tar deg forbi hvert viktig Istanbul-landemerke — Dolmabahçe-palasset, Ortaköy-moskeen, Bosporosbroen, Rumeli Hisarı, Beylerbeyi-palasset og Jomfrutårnet — med komplett tyrkisk middag og live underholdning.',
      'I motsetning til mange turistferger på 1 time som dekker mindre av Bosporos og hopper over middag og underholdning, er **vår båttur i Istanbul** en komplett kveldsopplevelse: ombordstigning kl. 19:30 ved Kabataş-kaia, tur til midnatt, 10 meze, hovedrett, dessert, sema, folkedanser, orientalsk dans og DJ. Du får også kveldsutgangen som del av turen.',
      'Enten du har én kveld eller en hel uke i Istanbul, gjør **denne båtturen i Istanbul** jobben. 4,8★ av over 11 317 reisende, TÜRSAB-lisensiert (A-17672), halalsertifisert meny og betal om bord — ingen finansiell forpliktelse til du er fornøyd med opplevelsen.'
    ],
    highlights: [
      { title: 'Alle viktige Bosporos-landemerker', desc: 'Dolmabahçe, Çırağan, Ortaköy-moskeen, Bosporosbroen, Bebek, Rumeli Hisarı, FSM-broen, Beylerbeyi-palasset, Üsküdar, Jomfrutårnet. Begge bredder, europeisk og asiatisk, på én tur.' },
      { title: 'Middag + show inkludert', desc: 'Ikke bare båttur — komplett tyrkisk flerrettsmiddag, live folkedansshow, sema, orientalsk dans, DJ. Det som gjør 3 timer morsomt, ikke bare sightseeing.' },
      { title: 'Kveldsavgang (best belysning)', desc: 'Avgang kl. 20:30 fanger Bosporos opplyst i full glans — broer, palasser, moskeer alle opplyst. Mer dramatisk enn dagsturer som viser de samme landemerkene i flatt lys.' },
      { title: 'Enkel bestilling, enkel betaling', desc: 'Bestill med skjemaet på denne siden på under 1 minutt. Betal om bord — ingen forskuddsbetaling. Hotelloverføring tilgjengelig fra +€{p.transfer}/person. Gratis avbestilling 2 timer før avgang.' }
    ],
    faq: [
      { q: 'Hva er den beste båtturen i Istanbul?', a: 'Bosporos-middagscruiset er konsekvent rangert #1. Dekker alle viktige landemerker, inkluderer middag og underholdning og kjører om kvelden når landemerkene er opplyst. Andre alternativer (hop-on ferger, morgenturistbåter) dekker kortere ruter, hopper over middag og inkluderer ikke underholdning. For én kveld i Istanbul er dette den mest komplette båtturen.' },
      { q: 'Hvor lenge varer båtturen i Istanbul?', a: '3 timer. Ombordstigning fra kl. 19:30 ved Kabataş-kaia, avgang 20:30, retur ~23:30. Dekker Bosporos fra Dolmabahçe til Rumeli Hisarı og tilbake. Nok tid for komplett middag + show uten trøtthet.' },
      { q: 'Hva koster båtturen i Istanbul?', a: 'Vår båt- og middagstur: Standard €{p.dinnerStd}/person (fra €{p.dinnerStdOriginal}), VIP med premiummeny €{p.dinnerVip}/person (fra €{p.dinnerVipOriginal}). 0–3 år gratis, 4–8 år halvpris. Betal om bord. Alkohol og hotelloverføring er valgfrie tillegg.' },
      { q: 'Hvor avgår båtturene i Istanbul fra?', a: 'Fartøyet vårt avgår fra Kabataş-kaia, europeisk sentrum av Istanbul, nær Dolmabahçe-palasset. Tilgjengelig med trikk T1 (Kabataş-stopp), taxi 15 min fra Taksim eller til fots 20 min fra Taksim. Hotelloverføring tilgjengelig fra sentrale bydeler for +€{p.transfer}/person.' },
      { q: 'Er denne båtturen egnet for familier med barn?', a: 'Ja — veldig familievennlig. Barn 0–3 år er gratis, 4–8 år 50 % rabatt. Overbygget innendørs sone, barnemeny på forespørsel og underholdning (sema, folkedanser) som er fengende for barn. Mange familier fra hele verden bestiller denne turen.' },
      { q: 'Må jeg ta med noe til båtturen?', a: 'Pass eller ID (for registrering om bord), lett jakke (dekket kan bli kjølig), komfortable sko hvis du planlegger å danse. Smarttelefon for bilder. Kontanter eller kort for betaling om bord (begge akseptert). Alt annet — mat, drikke, underholdning — er om bord.' }
    ],
    cta: {
      primary: 'Bestill båtturen · Betal om bord',
      secondary: '3 timer · Middag + show · Fra €{p.dinnerStd}/person · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Bosporos-tur fra €{p.dinnerStd} — Middagscruise Istanbul + Show',
      description: '3-timers tur på Bosporos: tyrkisk middag, live folkeshow, opplyste nattutsikter. Avgang 20:30 fra Kabataş. Gratis avbestilling, betal om bord. 11 317 anmeldelser.'
    },
    hero: {
      h1: 'Tur på Bosporos',
      subtitle: 'Den mest anbefalte Bosporos-turen av reisende — 3-timers middagscruise som dekker hvert viktig Istanbul-landemerke, med mat, underholdning og nattutsikter.',
      badge: 'Komplett Bosporos-opplevelse · Kveldsavgang'
    },
    intro: [
      'En **tur på Bosporos** kan bety en 1-times turistferge eller en komplett middagskveldstur — vi gjør det siste og de fleste reisende finner det mer verdt. 3 timer, €{p.dinnerStd}/person, middag og underholdning inkludert. Du seiler ikke bare forbi landemerker — du spiser, ser showet og nyter kvelden.',
      'Ruten for **vår Bosporos-tur** dekker alt som er verdt å se: Dolmabahçe-palasset (19. århundrets osmanske sultansresidens), Ortaköy-moskeen (en av Istanbuls mest fotograferte moskeer), Bosporosbroen (skifter farge om natten), Rumeli Hisarı (bygd av Fatih Sultan Mehmet i 1452), Beylerbeyi-palasset (asiatisk bredde) og Jomfrutårnet på en liten øy. Alt forklart av engelsktalende mannskap.',
      'Enten du er i Istanbul i 24 timer eller en uke, er dette **Bosporos-turen** som gir deg mest på én kveld. Rangert 4,8★ av over 11 317 reisende, TÜRSAB-lisensiert A-17672, halal-vennlig meny, betal om bord — ingen risiko for forskuddsbetaling.'
    ],
    highlights: [
      { title: 'Hele Bosporos i ett', desc: 'Europeisk bredde (Dolmabahçe, Ortaköy, Rumeli Hisarı), asiatisk bredde (Beylerbeyi, Üsküdar), begge Bosporos-broer, Jomfrutårnet. Hvert viktig landemerke synlig på 3 timer.' },
      { title: 'Middag + underholdning inkludert', desc: 'Ikke bare turistferge — komplett tyrkisk middag med meze, hovedrett, dessert. Live folkedansshow, sema, orientalsk dans, DJ. Underholdningsverdi utover bare utsikt.' },
      { title: 'Kveld = best belysning', desc: 'Dagsture på Bosporos viser deg landemerkene i flatt lys. Kveldsturer fanger alt opplyst: glødende palasser, fargede broer, moskeer reflektert i det mørke vannet. Bedre bilder, mer dramatisk.' },
      { title: 'Fra €{p.dinnerStd} — betal om bord', desc: 'Ingen forskuddsbetaling nødvendig. Betal om bord (kontanter eller kort). Gratis avbestilling inntil 2 timer før avgang. 0–3 år gratis, 4–8 år halvpris. Transparente priser.' }
    ],
    faq: [
      { q: 'Hva er de beste turene på Bosporos i Istanbul?', a: 'Kveldsturene med middag er konsekvent øverst. Dagsalternativer (1-times rundturer, 2-timers turistbåter) viser mindre og inkluderer ikke middag. For verdi er det vanskelig å slå en 3-timers tur med middag, show og sentralt møtepunkt. Kostnaden for turen vår €{p.dinnerStd} eliminerer behovet for separat kveldsmat + underholdning.' },
      { q: 'Hvor lenge varer en Bosporos-tur?', a: 'Vår Bosporos-tur varer totalt 3 timer (avgang 20:30, retur 23:30). Det finnes kortere alternativer (1-times turistferger, 90-minutters turer), men de hopper over middag og underholdning. For den komplette kveldsopplevelsen er 3 timer ideelt — nok til å se alt uten å bli trøtt.' },
      { q: 'Er Bosporos-turen verdt det?', a: 'Ja — nesten alle Istanbul-reiseguider lister "Bosporos-cruise" i topp 5 must-do. Byen er bygd rundt dette sundet; hvis du ikke har sett Bosporos fra vannet, har du egentlig ikke sett Istanbul. Vår spesifikke kveldstur legger til middag og underholdning, og gjør det til en komplett kveldstur i stedet for bare sightseeing.' },
      { q: 'Hva bør jeg ta med til Bosporos-turen?', a: 'Pass eller ID (for registrering om bord), lett jakke (kveldsdekket er kjølig), smarttelefon/kamera, komfortable sko for dansegulvet. Kontanter eller kort for betaling. Alt annet er om bord. Hotelloverføring tilgjengelig for +€{p.transfer}/person hvis du ikke vil bruke kollektivtransport.' },
      { q: 'Er Bosporos-turen egnet for barn?', a: 'Ja — veldig barnefamilie-vennlig. Barn 0–3 år er gratis (transfer inkludert), 4–8 år 50 % rabatt. Overbygget innendørs sone, barnemeny på forespørsel og forsiktig, fengende underholdning. Mange familier bestiller denne turen som høydepunktet i Istanbul-turen.' },
      { q: 'Hva er stoppene på Bosporos-turen?', a: 'Det er en kontinuerlig tur — vi stopper ikke ved landemerker (ingen ilandstigning). Fartøyet seiler forbi hvert landemerke, mannskapet forklarer hva du ser, du slapper av ved bordet eller går ut på åpent dekk for bilder. Ingen køer, ingen gåing, ingen stressplanlegging — bare 3 rolige timer på vannet.' }
    ],
    cta: {
      primary: 'Bestill Bosporos-turen · Betal om bord',
      secondary: '3 timer · Middag + show · Gratis avbestilling 2 timer før · TÜRSAB-lisensiert',
      tertiary: 'Sjekk tilgjengelighet'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bosporos-cruisebilletter fra €{p.dinnerStd} — Betal om bord',
      description: 'Direkte Bosporos-cruisebilletter. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Ingen forskudd, betal om bord. Gratis avbestilling inntil 2 timer før.'
    },
    hero: {
      h1: 'Bosporos-cruisebilletter',
      subtitle: 'Hopp over mellomledd-avgiftene — kjøp Bosporos-cruisebilletene direkte fra oss. Ingen forskuddsbetaling, betal om bord, gratis avbestilling inntil 2 timer før avgang.',
      badge: 'Direktebestilling · Ingen forskuddsbetaling · 40 % RABATT'
    },
    intro: [
      'Leter du etter **Bosporos-cruisebilletter**? Kjøp direkte. Billettene våre er €{p.dinnerStd} (Standard) eller €{p.dinnerVip} (VIP) — 40 % rabatt på ordinær pris (€{p.dinnerStdOriginal} og €{p.dinnerVipOriginal}). Tredjeparts bestillingssider legger vanligvis til 20–40 % provisjon. Ved å bestille direkte sparer du — og betaler fortsatt om bord.',
      'Prosessen for **Bosporos-cruisebilletter**: fyll ut skjemaet på denne siden på under 1 minutt (dato, antall gjester, pakke, kontakt), vi bekrefter umiddelbart via WhatsApp / Telegram / WeChat, møt opp ved Kabataş-kaia kl. 19:30, betal om bord, nyt 3-timers middagscruise. Ingen fysisk billett å skrive ut, ingen kupong å motta på e-post — bekreftelsen er billetten din.',
      'Enten du bestiller kveldens middagscruise eller bestiller til en bestemt dato neste uke, er **direkte Bosporos-cruisebilletter** den raskeste måten. Rangert 4,8★, TÜRSAB-lisensiert (A-17672), halalsertifisert meny og støtter tillegg for hotelloverføring og alkohol.'
    ],
    highlights: [
      { title: 'Direktebestilling — ingen mellomledd-avgift', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Tredjeparts sider tar €30–80+ for samme tur. Spar ved å bestille direkte fra oss. Ingen skjulte avgifter, ingen provisjonstillegg.' },
      { title: 'Betal om bord — ingen forskuddsbetaling', desc: 'Reserver plassen nå, betal når du går om bord. Kontanter eller kort akseptert. Gratis hvis du avbestiller 2+ timer før avgang. Null finansiell risiko ved å bestille tidlig.' },
      { title: 'Bekreftelse på under 1 minutt', desc: 'Fyll ut skjema → vi bekrefter via WhatsApp / Telegram / WeChat. Ingen PDF-kupong å skrive ut fra e-post. Meldingen vår er billetten din. Møt opp ved kaia kl. 19:30.' },
      { title: 'Nåværende lanseringspris 40 % RABATT', desc: 'Standard fra €{p.dinnerStdOriginal}, nå €{p.dinnerStd}. VIP fra €{p.dinnerVipOriginal}, nå €{p.dinnerVip}. 40 % rabatt fordi du bestiller direkte. Ikke et tidsbegrenset triks — det er vår standard direktebestillingspris.' }
    ],
    faq: [
      { q: 'Hva koster Bosporos-cruisebillettene?', a: 'Standard: €{p.dinnerStd}/person (ordinær €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/person (ordinær €{p.dinnerVipOriginal}). Inkluderer 3-timers tur, tyrkisk flerrettsmiddag, live folkedansshow, ubegrenset lesedrikk. 0–3 år gratis, 4–8 år 50 % rabatt. Betal om bord — ingen forskuddsbetaling.' },
      { q: 'Hvor kan jeg kjøpe Bosporos-cruisebilletter?', a: 'Direkte fra denne siden — fyll ut bestillingsskjemaet, vi bekrefter umiddelbart via WhatsApp / Telegram / WeChat. Betal om bord. Tredjepartsplattformer (Viator, GetYourGuide, Klook) selger også billetter, men tar vanligvis €30–80+ — det er mellomledd-tillegget. Direkte er billigst og raskest.' },
      { q: 'Trenger jeg å skrive ut Bosporos-cruisebilletten?', a: 'Nei — ingen fysisk billett eller kupong er nødvendig. Etter bestilling sender vi deg en bekreftelse via WhatsApp (eller Telegram/WeChat) med møtepunkt, tid og reservasjonsnavn. Bare vis telefonen ved kaia. Det er alt.' },
      { q: 'Kan jeg avbestille eller returnere Bosporos-cruisebilletten?', a: 'Ja — gratis avbestilling inntil 2 timer før avgang. Bare skriv på WhatsApp. Fordi du ennå ikke har betalt (betal om bord), er ingen refusjon nødvendig — bare ikke møt opp, ingen kostnad. Mye mer fleksibelt enn forhåndsbetalte billetter fra tredjeparter.' },
      { q: 'Er Bosporos-cruisebilletter tilgjengelig samme dag?', a: 'Ofte ja, spesielt hverdager. Helger og ferier fylles raskere. Sjekk tilgjengelighet via bestillingsskjemaet — oppdateres i sanntid. Siste-minutt-bestilling er vanligvis mulig noen timer før avgang kl. 20:30. For hastehenvendelser, WhatsApp.' },
      { q: 'Er barnebilletter til Bosporos-cruiset gratis?', a: 'Barn **0–3 år helt gratis** (ingen avgifter, ingen skjulte kostnader, transfer inkludert). **4–8 år 50 % rabatt** (€{p.dinnerStd}/2 = €12 på Standard). **9+ år full voksenpris.** Transparente, tak-satte priser — ingen "babygebyr"-triks.' }
    ],
    cta: {
      primary: 'Kjøp billetter · Betal om bord',
      secondary: 'Direktebestilling · Ingen forskuddsbetaling · Gratis avbestilling 2 timer før',
      tertiary: 'Sjekk tilgjengelighet'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosporos i siste liten fra €{p.dinnerStd} — Bestill i dag, betal om bord',
      description: 'Bestill Bosporos-cruise samme dag. WhatsApp-bekreftelse på minutter. Avgang 20:30 fra Kabataş. Gratis avbestilling, betal om bord. 11 317 anmeldelser.'
    },
    hero: {
      h1: 'Bosporos-cruise i siste liten',
      subtitle: 'Tilgjengelighet for i kveld, bekreftet på minutter. Ingen forskuddsbetaling, ingen ferdigtrykket kupong — bare møt opp ved kaia og nyt kvelden.',
      badge: 'Siste-minutt-bestilling · Bekreftet på minutter · Betal om bord'
    },
    intro: [
      'Landet du i Istanbul i ettermiddag og vil ha en flott kveld i kveld? **Bosporos-cruise i siste liten** fungerer. Vi reserverer spesielt plasser for siste-minutt-bestillinger, fordi vi vet at mange reisende bestemmer seg om morgenen. Fyll ut skjemaet her, vi bekrefter via WhatsApp på minutter, møt opp ved Kabataş-kaia kl. 19:30, betal om bord, nyt.',
      '**Vårt siste-minutt Bosporos-cruise** har samme kveldsplan som forhåndsbestillinger: 3 timer på vannet (20:30–23:30), tyrkisk flerrettsmiddag, live folkedansshow, sema, orientalsk dans, DJ. Dolmabahçe-palasset opplyst, Ortaköy-moskeen, Bosporosbroen — de samme ikoniske utsiktene. Samme pris €{p.dinnerStd} Standard eller €{p.dinnerVip} VIP.',
      'Avbestilling samme dag er gratis inntil 2 timer før avgang, fordi **betal om bord** betyr at du ennå ikke har lovet noe. Bestilte kl. 14:00 og ombestemte deg innen kl. 19:00? Bare skriv på WhatsApp — ingen refusjon, ingen problem. Dette er fleksibiliteten med **siste-minutt Istanbul-turen** som reisende setter pris på.'
    ],
    highlights: [
      { title: 'Plasser fortsatt tilgjengelig for i kveld', desc: 'Vi reserverer 5–10 plasser per dag for siste-minutt-bestillinger. Sjekk skjemaet ovenfor — tilgjengelighet i sanntid. Hvis dagens tur er full, er morgendagens vanligvis åpen.' },
      { title: 'Bekreftelse på under 5 minutter', desc: 'Fyll ut skjema → WhatsApp/Telegram/WeChat-bekreftelsesmelding → ferdig. Ingen e-postkupong å vente på, ingen QR-kode å skrive ut. Meldingen vår er billetten din.' },
      { title: 'Null betaling til du er om bord', desc: 'Betal om bord, kontanter eller kort. Hvis du ikke kommer (planendring, sykdom, vær), ingen kostnad. Gratis avbestilling inntil 2 timer før avgang. Virkelig siste-minutt-vennlig.' },
      { title: 'Hotelloverføring samme dag ofte tilgjengelig', desc: 'Hotelloverføring krever normalt 24 timers varsel, men for siste-minutt-bestillinger mellom kl. 14:00–18:00 kan vi ofte ordne henting for +€{p.transfer}/person. For hasteovertransportforespørsler, WhatsApp.' }
    ],
    faq: [
      { q: 'Kan jeg virkelig bestille Bosporos-cruiset for i kveld?', a: 'Ja — ofte. Vi reserverer plasser for siste-minutt-bestillinger. Sjekk skjemaet ovenfor for tilgjengelighet i kveld. Hvis det er ledige plasser, kan du bestille inntil kl. 18:00 (3 timer før avgang). Helger er mer travel — bestill tidligere på dagen om mulig.' },
      { q: 'Hvor siste minutt kan jeg bestille?', a: 'Bestillinger holdes åpne til kl. 18:00 for kl. 20:30-fartøyet. Etter kl. 18:00, skriv direkte til oss på WhatsApp +90 532 244 29 22 — hvis det er ledige plasser, kan vi bekrefte manuelt. Etter kl. 19:30 er det veldig travelt med mindre du allerede er ved Kabataş-kaia og kan gå om bord raskt.' },
      { q: 'Er siste-minutt Bosporos-cruise dyrere?', a: 'Nei — samme pris som forhåndsbestilling. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Vi har ingen "dynamisk prising" eller siste-minutt-tillegg. Samme fartøy, samme middag, samme show, samme pris.' },
      { q: 'Hva skjer hvis dagens tur er fullbooket?', a: 'Morgendagens tur er vanligvis åpen — vi opererer 365 dager i året, hver dag. Du kan bestille til i morgen og fortsatt være "siste minutt", noe som betyr at du nettopp bestemte deg. Hverdagstur har mer plass enn helgetur.' },
      { q: 'Kan dere ordne hotelloverføring i siste liten?', a: 'Siste-minutt-overføring er mulig inntil ~kl. 18:00 for kl. 20:30-turen. Etter kl. 18:00 har vi kanskje ikke tilgjengelig sjåfør — i så fall kan du ta taxi til Kabataş-kaia (15 min fra Taksim, 10 min fra Sultanahmet, ~€10–15). Sentralt og enkelt.' },
      { q: 'Hva hvis jeg allerede er ved Kabataş og vil gå om bord?', a: 'Hvis du er ved kaia og det er ledige plasser, kan du bare gå om bord. Skriv til oss på WhatsApp eller spør mannskapet — hvis det er plass, legger vi deg til. Samme pris, betal om bord. I turtermer kalles dette "walk-on" — det fungerer her.' }
    ],
    cta: {
      primary: 'Bestill for i kveld · Betal om bord',
      secondary: 'Siste-minutt-bestilling · Bekreftet på minutter · Gratis avbestilling 2 timer før',
      tertiary: 'WhatsApp for hastebestillinger'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Cruisepris Istanbul fra €{p.dinnerStd} — Transparente priser',
      description: 'Bosporos-cruisepriser Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Barn 0–3 gratis, 4–8 halvpris. Transparente tillegg.'
    },
    hero: {
      h1: 'Cruisepris Istanbul',
      subtitle: 'Transparente priser, ingen skjulte avgifter. Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person — og du betaler om bord, ikke nå.',
      badge: 'Transparent · 40 % RABATT direkte · 0–3 år gratis'
    },
    intro: [
      '**Cruisepriser i Istanbul** varierer mye — fra €15 budsjettsferger som hopper over middag til €150+ resortjakter. Prisen vår er i midten og gir best verdi: €{p.dinnerStd} for Standard med komplett 3-timers middagscruise og show, €{p.dinnerVip} for VIP med premium frontrow-opplevelse. Ingen skjulte avgifter, ingen overraskelsestillegg.',
      'En detaljert gjennomgang av **Istanbul cruisepris**, fordi transparens er viktig:\n\n- **Standard middagscruise**: €{p.dinnerStd}/person (fra €{p.dinnerStdOriginal}, 40 % rabatt). Inkluderer 3-timers tur, 10 meze, hovedrett, dessert, ubegrenset lesedrikk, live show.\n- **VIP middagscruise**: €{p.dinnerVip}/person (fra €{p.dinnerVipOriginal}). Legger til frontrow-plasser, 15+ meze, oksefilet/entrecôte, prioritetsservice.\n- **0–3 år**: Gratis. 4–8 år: 50 % rabatt. 9+ år: full pris.\n\nTillegg (valgfrie):\n- 2 glass alkohol: +€{p.alcohol2}/person\n- Ubegrenset lokal alkohol: +€{p.unlimited}/person\n- Hotelloverføring tur-retur: +€{p.transfer}/person\n- Romantisk bordoppsett: +€{p.romantic}/bord',
      'Og viktig: **betal om bord**. Du lover ikke en krone til du er om bord. Gratis avbestilling inntil 2 timer før avgang. Ingen forpliktelse, ingen risiko — den mest **forbrukervennlige Istanbul cruiseprisen** du finner.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (fra €{p.dinnerStdOriginal})', desc: '40 % rabatt på ordinær pris. 3-timers tur, komplett tyrkisk middag, live show, ubegrenset lesedrikk. Den mest populære pakken — dekker alt du trenger for en fin kveld.' },
      { title: 'VIP: €{p.dinnerVip} (fra €{p.dinnerVipOriginal})', desc: '40 % rabatt på ordinær pris. Legger til frontrow-plasser, 15+ meze, premium hovedrett (oksefilet, entrecôte), prioritetskjelnerservice. For spesielle anledninger eller premiumreisende.' },
      { title: 'Barnepris: 0–3 gratis, 4–8 halvpris', desc: '0–3 helt gratis (ingen avgifter). 4–8 med 50 % rabatt på voksenprisen. 9+ full voksenpris. Transparent, ingen familiepristricks. Overføring er også gratis for 0–3.' },
      { title: 'Tillegg — kun når du vil ha det', desc: 'Alkohol: €{p.alcohol2} eller €{p.unlimited}/person. Overføring: €{p.transfer}/person. Romantisk bord: €{p.romantic}/bord. Alle valgfrie, ikke bundlet. Velg bare det du trenger.' }
    ],
    faq: [
      { q: 'Hva koster en tur i Istanbul?', a: 'Middagscruise Standard: €{p.dinnerStd}/person (ordinær €{p.dinnerStdOriginal}, 40 % rabatt). VIP: €{p.dinnerVip}/person (ordinær €{p.dinnerVipOriginal}, 40 % rabatt). 0–3 år gratis, 4–8 år halvpris. Betal om bord — ingen forskuddsbetaling. Gratis avbestilling inntil 2 timer før avgang.' },
      { q: 'Er det skjulte avgifter i Istanbul-turprisen?', a: 'Nei. Prisen inkluderer: 3-timers tur, komplett middag (meze, forrett, hovedrett, dessert), ubegrenset lesedrikk, live show, avgifter. Valgfrie tillegg (alkohol, overføring, romantisk bord) er separate og transparent priset — du betaler bare for det du legger til. Ingen "servicegebyr", "havneavgift", overraskelsestillegg.' },
      { q: 'Hvorfor er Istanbul-turprisen 40 % rabatt — er det et triks?', a: 'Intet triks. Ordinær pris €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} er hva tredjepartssider (Viator, GetYourGuide, Klook) tar — med provisjonene sine. Bestill direkte og du får €{p.dinnerStd}/€{p.dinnerVip}. Det er 40 %-forskjellen. Ingen tidsbestemte eller dynamiske pristricks.' },
      { q: 'Hvordan sammenlignes Istanbul-turprisen med andre alternativer?', a: 'Rundturferger: €5–10, 1 time, ingen middag, ingen underholdning, bare sightseeing. Budsjettpakkede middagsturer: €20–30, overfylte, gjennomsnittlig mat, kort show. Vår Standard (€{p.dinnerStd}): 3 timer, komplett middag, fullt show, privat bord, TÜRSAB-lisensiert. VIP (€{p.dinnerVip}): frontrow, premiummeny. Resortjakter: €100–150+, overdrevent for solo/par.' },
      { q: 'Trenger jeg å betale Istanbul-turprisen på forhånd?', a: 'Nei — **betal om bord**. Bestill nå (1-minutts skjema), vi bekrefter på WhatsApp, kom kl. 19:30 og betal om bord (kontanter eller kort). Gratis avbestilling inntil 2 timer før. Null finansiell forpliktelse til du er fornøyd.' },
      { q: 'Er det grupperabatter på Istanbul-turprisen?', a: 'For grupper på 10+, kan vi tilby 5–10 % rabatt — skriv på WhatsApp med gruppestørrelsen. For 25+, vurder privat tur (hele fartøyet for gruppen din, tilpasset meny). For 2–9 personer gjelder standardpriser — allerede 40 % rabatt på ordinær pris.' }
    ],
    cta: {
      primary: 'Bestill · Betal om bord',
      secondary: 'Fra €{p.dinnerStd}/person · 0–3 år gratis · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Sightseeing Bosporos fra €{p.dinnerStd} — Istanbul-landemerker fra vannet',
      description: 'Bosporos-sightseeing-cruise: Dolmabahçe, Ortaköy, Bosporosbro, Rumeli, Beylerbeyi, Jomfrutårnet. 3-timers kveldstur med middag. Gratis avbestilling, betal om bord.'
    },
    hero: {
      h1: 'Sightseeing på Bosporos',
      subtitle: 'Alle Istanbuls ikoniske landemerker — fra vannet, om natten, med middag. Én 3-timers tur dekker Dolmabahçe, Ortaköy-moskeen, Bosporosbroen, Rumeli Hisarı og mer.',
      badge: '10+ landemerker · Europeisk og asiatisk bredde · 3 timer'
    },
    intro: [
      '**Bosporos-sightseeing** fra vannet slår enhver busstur. Bosporos er byens mest historiske skipslei — osmanske sultaner, bysantinske keisere, greske handelsmenn og russiske krigsski har alle passert her. I dag seiler vår 3-timers tur, med kommentarer fra engelsktalende mannskap, forbi hvert viktig Istanbul-landemerke som definerer byens silhuett.',
      'Ruten for **vår Bosporos-sightseeing-tur** (kveldsavgang, 20:30–23:30):\n\n1. **Dolmabahçe-palasset** — 19. århundrets osmanske residens, opplyst om natten\n2. **Çırağan-palasset** — nå luksushotell, kongelig historie\n3. **Ortaköy-moskeen** — en av Istanbuls mest fotograferte moskeer, ved vannet\n4. **Bosporosbroen** — veksler om natten mellom blå, lilla, gull\n5. **Bebek** — elegant bydel på europeisk bredde\n6. **Rumeli Hisarı** — bygd av Fatih Sultan Mehmet i 1452 før Konstantinopels fall\n7. **Fatih Sultan Mehmet-broen** — Bosporos\' andre bro, dramatisk bue\n8. **Beylerbeyi-palasset** — asiatisk bredde, osmansk sommerresidens\n9. **Üsküdar** — asiatisk Istanbul-kyst, tradisjonell bydel\n10. **Jomfrutårnet** — tårn på liten øy, et av Istanbuls mest romantiske symboler',
      'Middag og underholdning er inkludert — ikke separat — så **Bosporos-sightseeing** blir til en komplett kveld. Tyrkisk flerrettsmiddag, live folkedansshow, sema, orientalsk dans, DJ. Rangert 4,8★ av over 11 317 reisende, TÜRSAB-lisensiert A-17672.'
    ],
    highlights: [
      { title: '10+ viktige Istanbul-landemerker', desc: 'Dolmabahçe-palasset, Çırağan-palasset, Ortaköy-moskeen, Bosporosbroen, Rumeli Hisarı, FSM-broen, Beylerbeyi-palasset, Üsküdar, Jomfrutårnet. Hvert viktig Istanbul-landemerke på én tur.' },
      { title: 'Begge bredder, europeisk og asiatisk', desc: 'Europeisk bredde på veien dit (Dolmabahçe → Rumeli Hisarı), asiatisk bredde på veien tilbake (Beylerbeyi → Üsküdar). To kontinenter på én 3-timers tur — bare Istanbul lar deg gjøre det.' },
      { title: 'Kveldstur = opplyste utsikter', desc: 'Dagstur viser landemerkene i flatt lys. Kveldstur fanger dem ved dramatisk høydepunkt: gyllengule palasser, fargede broer, moskeer reflektert i det mørke vannet. Bedre bilder, mer minneverdig.' },
      { title: 'Middag + show inkludert', desc: 'Sightseeing + middag + underholdning i én pakke. Trenger ikke planlegge separat middag etter turen. Fra €{p.dinnerStd}/person, betal om bord, totalt 3 timer.' }
    ],
    faq: [
      { q: 'Hvilke Bosporos-landemerker vil jeg se?', a: 'I rekkefølge: Dolmabahçe-palasset, Çırağan-palasset, Ortaköy-moskeen, Bosporosbroen, Bebek-bydelen, Rumeli Hisarı, Fatih Sultan Mehmet-broen, Anadolu Hisarı, Beylerbeyi-palasset, Kuzguncuk, Üsküdar og Jomfrutårnet (synlig i det fjerne). 10+ viktige landemerker på én 3-timers rute.' },
      { q: 'Er Bosporos-sightseeing best på dagen eller om natten?', a: 'Ulike opplevelser. Dag: klarere syn av arkitektoniske detaljer, lysere for bilder. Natt: dramatisk belysning, mystisk atmosfære, færre skip på vannet. De fleste reisende foretrekker natttur fordi landemerkene ser mer magiske ut — og middag + show gjør det til en komplett kveld.' },
      { q: 'Stopper fartøyet ved landemerker for bilder?', a: 'Det er en kontinuerlig tur — ingen stopp (ingen ilandstigning). Fartøyet seiler forbi hvert landemerke, mannskapet forklarer hva du ser, du kan gå ut på åpent dekk for bilder. Ingen køer, ingen gåing, ingen stressplanlegging — bare en kontinuerlig 3-timers bildemulighet.' },
      { q: 'Kommenterer mannskapet under sightseeing?', a: 'Ja — engelsktalende mannskap gir korte kommentarer mens vi passerer hvert viktig landemerke (historie, arkitektur, fakta). Det er ikke en guidet forelesning, mer en vennlig forklaring mens du spiser. For dypere historie anbefaler vi å kombinere med en Istanbul-gåtur på dagtid.' },
      { q: 'Hvordan skiller Bosporos-sightseeing seg fra hop-on-fergen?', a: 'Hop-on-ferger (Şehir Hatları-rundturferger): €5–10, 1–2 timer, basalt, ingen middag, overfylte. Turen vår: €{p.dinnerStd}, 3 timer, komplett middag, live show, privat bord, engelskkommentar. For seriøs og komfortabel sightseeing er kveldstur bedre. For rask og rimelig transport fungerer rundturfergen.' },
      { q: 'Kan jeg fotografere landemerkene fra fartøyet?', a: 'Ja — absolutt. Åpent dekk har utmerkede fotograferingssteder. Landemerkene passerer 100–200 meter fra fartøyet. Smarttelefonfoto blir flotte; DSLR/speilløse brukere kan få praktfulle opptak, spesielt i gyldentime-til-blå-time-overgangen tidlig på kvelden.' }
    ],
    cta: {
      primary: 'Bestill sightseeing-turen · Betal om bord',
      secondary: '10+ landemerker · Middag + show · Gratis avbestilling 2 timer før',
      tertiary: 'Tilgjengelighet i kveld'
    }
  }

};
