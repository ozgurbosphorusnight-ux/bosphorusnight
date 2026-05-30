/**
 * Slovenian translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 * Informal register (ti).
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Večerja po Bosporju od €{p.dinnerStd} — nočna plovba Istanbul + predstava',
      description: '3-urna večerna plovba po Bosporju: turški meni z več hodi in ljudska predstava v živo. Odhod 20:30 iz Kabataşa. Brezplačna odpoved, plačaš na ladji.'
    },
    hero: {
      h1: 'Večerna plovba po Bosporju v Istanbulu',
      subtitle: 'Tri ure žive zabave, izdatna turška večerja z več hodi in najbolj očarljivi nočni pogledi na Bospor.',
      badge: '4,8★ · 11 317 ocen'
    },
    intro: [
      '**Večerna plovba po Bosporju** je najbolj ikonična večerna izkušnja Istanbula. Plovba se začne ob 19:30 na pomolu Kabataş in pluje pod osvetljenima mostovoma čez Bospor in Fatih Sultan Mehmet, ponudi turško večerjo z več hodi, ljudske plese v živo, trebušni ples in DJ-set, ki napolni krov do 23:00.',
      'V nasprotju z običajnimi plovili, ki barvajo večerno podobo Istanbula, je **naša večerna plovba po Bosporju** licencirana pri TÜRSAB (A-17672) in jo je z oceno 4,8★ ocenilo več kot 11 317 popotnikov. Skupine ohranjamo majhne in storitev toplo — ker plačaš na ladji, ni nobenega tveganja pri rezervaciji vnaprej.',
      'Ne glede na to, ali praznuješ obletnico, iščeš premium večer v Istanbulu z družino ali si želiš najbolj fotogenega prehoda iz sončnega zahoda v noč — to je večerna plovba, ki jo lokalni Istanbulčani priporočajo najprej.'
    ],
    highlights: [
      { title: 'Turška večerja z več hodi', desc: '10 vrst meze, topla predjed (paçanga böreği), izbira glavne jedi (losos / orada / piščanec / mesne kroglice / vegetarijansko), sladoledna torta za sladico, neomejene brezalkoholne pijače.' },
      { title: 'Živi ljudski plesi, trebušni ples in DJ', desc: 'Predstava Mevlana sema, 5 tradicionalnih turških ljudskih plesov, trebušni ples, turški glasbeniki v živo, sledi DJ-set skozi celotno plovbo.' },
      { title: 'Popolna nočna pot ob Bosporju', desc: 'Kabataş → Dolmabahçe → palača Çırağan → mošeja Ortaköy → Bebek → Rumeli Hisarı → most FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Od €{p.dinnerStd}/oseba — plačaš na ladji', desc: 'Standardna plovba €{p.dinnerStd} (prvotno €{p.dinnerStdOriginal}). VIP plovba z mizo ob odru in premium menijem €{p.dinnerVip}. Brez predplačila. Brezplačna odpoved do 2 uri pred odhodom.' }
    ],
    faq: [
      { q: 'Kdaj se začne večerna plovba po Bosporju?', a: 'Vkrcanje se začne ob 19:30 na pomolu Kabataş. Plovilo izpluje ob 20:30 in se vrne okoli 23:30. Priporočamo, da prideš 15–20 minut prej, da se namestiš in sprostiš.' },
      { q: 'Koliko stane večerna plovba po Bosporju?', a: 'Standardna plovba €{p.dinnerStd}/osebo (redna cena €{p.dinnerStdOriginal}). VIP plovba z mizo ob odru in premium menijem €{p.dinnerVip}/osebo. 0–3 leta brezplačno, 4–8 let 50 % popust. Plačilo poteka na ladji — brez predplačila.' },
      { q: 'Ali je alkohol vključen v večerno plovbo?', a: 'Neomejene brezalkoholne pijače (voda, kola, sok) so vključene v ceno. Paketi alkohola so izbirni: 2 kozarca +€{p.alcohol2}/osebo ali neomejen lokalni alkohol (vino, pivo, rakija, vodka, gin) +€{p.unlimited}/osebo. Uvožene pijače se zaračunajo posebej na ladji.' },
      { q: 'Ali obstaja prevzem iz hotela?', a: 'Da — prevoz v obe smeri stane +€{p.transfer}/osebo. Področja: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane in Sütlüce. To možnost lahko izbereš v obrazcu za rezervacijo.' },
      { q: 'Ali je večerna plovba po Bosporju halal?', a: 'Vsekakor. Vse meso na krovu je halal certificirano. Alkohol je izbirni dodatek (nikoli vsiljen gostom), in razporeditev miz naravno loči goste, ki imajo raje mizo brez alkohola. Brez doplačila ponujamo tudi vegetarijanske možnosti.' },
      { q: 'Kaj naj oblečem?', a: 'Pametno sproščeno. Večeri v Istanbulu so lahko hladni tudi poleti — priporočamo lahek suknjič ali šal. Ni strogega kodeksa oblačenja, vendar kopalke, japonke ali športna oblačila ne sodijo k vzdušju večerje.' }
    ],
    cta: {
      primary: 'Rezerviraj zdaj · Plačaš na ladji',
      secondary: 'Brezplačna odpoved do 2 uri pred odhodom',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bospor z otroki — družinska plovba od €{p.dinnerStd}/odrasli',
      description: 'Družinam prijazna večerna plovba po Bosporju. Otroci 0–3 brezplačno, 4–8 polovična cena. Varen pokrit prostor, otroški meni.'
    },
    hero: {
      h1: 'Plovba po Bosporju z otroki',
      subtitle: 'Večer na Bosporju, prilagojen družinam z otroki — večerja, zabava in varno, udobno vzdušje.',
      badge: 'Družinam prijazno · Halal · 0–3 leta brezplačno'
    },
    intro: [
      '**Plovba po Bosporju z otroki** je najbolj družinam prijazna večerna možnost v Istanbulu. Vsak večer sprejmemo na desetine družin — premislili smo o vseh podrobnostih, da so najmlajši udobni: pokrit notranji prostor za toploto, dostopen otroški meni (preprosta piščančja pečenka, testenine, neomejene brezalkoholne pijače) in zgodnejše vkrcanje, da se izognemo pozni utrujenosti.',
      'V nasprotju z ladjami samo za odrasle je **naša družinska večerna plovba po Bosporju** topla in vključujoča. **Otroci 0–3 leta so brezplačno** (prevoz vključen), 4–8 let imajo **50 % popust**, 9+ let plača polno ceno — brez skritih stroškov. Živi ljudski plesi, trebušni ples in predstava sema so družinam prijazna zabava, ne nočni klub.',
      'Ne glede na to, ali si v Istanbulu za podaljšan vikend z majhnimi otroki ali pelješ najstnike na njihovo prvo evropsko potovanje — to je plovba, ki jo priporočajo istanbulske družine. Varno, halal certificirano, licencirano pri TÜRSAB in ocenjeno z 4,8★ s strani več kot 11 317 popotnikov.'
    ],
    highlights: [
      { title: '0–3 leta povsem brezplačno', desc: 'Brez stroškov za dojenčke in malčke. 4–8 let plača 50 % cene odraslega. Od 9 let polna cena odraslega. Pregledno, brez presenečenj.' },
      { title: 'Pokrit notranji prostor', desc: 'Popolnoma pokrit in ogrevan v hladnih mesecih. Otroci ostanejo topli in zaščiteni pred vetrom. Odprt krov je na voljo, kadar je vreme lepo — izbira je tvoja.' },
      { title: 'Otroški meni na zahtevo', desc: 'Preprosta piščančja pečenka, testenine, kruh in zelenjava — brez doplačila. Neomejene brezalkoholne pijače (kola, sok, voda). Sporoči nam vnaprej — brez začinjenih meze odkritij za najmlajše.' },
      { title: 'Varna družinska zabava', desc: 'Predstava sema (otroke očara), 5 tradicionalnih ljudskih plesov, glasba v živo in DJ-set. Vse je družinam prijazno — brez vsebine za odrasle. Otroci se pogosto pridružijo plesu.' }
    ],
    faq: [
      { q: 'Ali je plovba po Bosporju varna za majhne otroke?', a: 'Da — naše plovilo je licencirano pri TÜRSAB, ima pokrit notranji prostor z varnimi okni, rešilne jopiče vseh velikosti in profesionalno posadko z izkušnjami z družinami. Za malčke priporočamo notranji krov in odprt krov za otroke od 6 let.' },
      { q: 'Kakšne so cene za otroke na plovbi po Bosporju?', a: 'Otroci **0–3 leta: BREZPLAČNO** (brez stroškov, brez skritih dajatev). **4–8 let: 50 % popust** na ceno odraslega — torej €12/otrok pri Standardu (€{p.dinnerStd}/2). **9+ let: polna cena odraslega.** Hotelski prevoz je brezplačen za 0–3 leta, standarden za 4+ (€{p.transfer}/osebo).' },
      { q: 'Ali je na krovu otroški meni?', a: 'Da — preprosta piščančja pečenka, testenine, kruh, sezonska zelenjava in neomejene brezalkoholne pijače. Sporoči nam alergije ali prehranske preference pri rezervaciji, in pripravili bomo nekaj, kar bo tvojemu otroku všeč.' },
      { q: 'Ali sta glasba ali predstava preglasni za otroke?', a: 'Predstave v živo potekajo v enem območju odra — če so tvoji otroci občutljivi na zvok, te bomo posadili k mirnejši mizi dlje zadaj. Predstava traja skupaj 40 minut, preostali del večera je zmerna glasnost turške glasbe v ozadju in DJ.' },
      { q: 'Kaj se zgodi, če dojenček zaspi med plovbo?', a: 'Nič hudega — mnogi to počnejo. Notranji prostor ima klopne sedeže, kjer lahko dojenček ali majhen otrok udobno spi. Posadko prosi za toplo odejo, če jo potrebuješ. Brez doplačila.' },
      { q: 'Ali naj vzamem voziček na krov?', a: 'Lahko, vendar priporočamo, da večji voziček pustiš v hotelu (ali pri našem vozniku, če si rezerviral prevoz — varno ga bomo shranili). Naše plovilo ima ozke hodnike in krove s stopnicami. Lahka nosilka je na krovu bolj praktična.' }
    ],
    cta: {
      primary: 'Rezerviraj družinsko plovbo · Plačaš na ladji',
      secondary: 'Brezplačna odpoved do 2 uri · Brez predplačila',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantična plovba po Bosporju od €{p.dinnerStd} — večerja pri svečah',
      description: 'Romantična plovba po Bosporju: miza pri svečah, vrtnice, večerja z več hodi pod osvetljenimi mostovi. Od €{p.dinnerStd}/osebo. Brezplačna odpoved, plačaš na ladji.'
    },
    hero: {
      h1: 'Romantična plovba po Bosporju',
      subtitle: 'Večerja pri sijaju sveč, miza, okrašena z vrtnicami, osvetljeni mostovi in poseben trenutek samo za vaju dva pod najbolj ikoničnim nočnim nebom Istanbula.',
      badge: 'Obletnica · Medeni tedni · Posebna noč'
    },
    intro: [
      '**Romantična plovba po Bosporju** je najbolj ikonična večer za pare v Istanbulu. Medtem ko sonce zahaja za palačo Dolmabahçe in se most čez Bospor obarva v barvah, ti in tvoj partner delita turško večerjo z več hodi za zasebno mizo — s svečami, svežimi rožami in violino, ki lebdi na krovu.',
      'Naša romantična postavitev mize (+€{p.romantic}/miza) vsak sedež spremeni v poseben trenutek: rdeče vrtnice, plamteči svečniki, ročno napisano pozdravno pismo. Dodaj paket neomejenega alkohola za vino pod zvezdami (+€{p.unlimited}/oseba) ali pa ohrani preprosto z vključenimi brezalkoholnimi pijačami. Ne glede na izbiro za vse ostalo diskretno poskrbi posadka.',
      'Ne glede na to, ali praznuješ obletnico, načrtuješ presenečenje za partnerja ali si želiš le nepozaben večer v najbolj romantičnem mestu Evrope — to je plovba, ki jo istanbulski pari obožujejo. Ocenjena z 4,8★, licencirana pri TÜRSAB in — kar je najpomembneje — plačaš na ladji, tako da obljubiš le sam večer.'
    ],
    highlights: [
      { title: 'Romantična miza pri svečah', desc: 'Dodaj romantično postavitev mize za +€{p.romantic}/miza: sveže rdeče vrtnice, plamteče sveče, cvetni listi na prtu in ročno napisana voščilna kartica. Fotografiranje vključeno.' },
      { title: 'Najboljše mize za prehod iz sončnega zahoda v noč', desc: 'Miza ob oknu je rezervirana za pare. Glej, kako se prižge most čez Bospor, kako sije Dekliški stolp in kako se osvetli mošeja Ortaköy — vse z tvoje zasebne mize.' },
      { title: 'Violina v živo in intimno vzdušje', desc: 'Violina v živo in akustična turška glasba med večerjo ustvarjata počasno, romantično vzdušje. Nato pride DJ in pari plešejo na odprtem krovu pod lučmi.' },
      { title: 'Vino, šampanjec, premium kombinacije', desc: 'Dodaj 2 kozarca alkohola (+€{p.alcohol2}/oseba) ali neomejeno vino, pivo, lokalno rakijo (+€{p.unlimited}/oseba). Uvoženi šampanjec in premium kombinacije na zahtevo — vprašaj pri rezervaciji.' }
    ],
    faq: [
      { q: 'Kaj naredi to plovbo romantično?', a: 'Kombinacija zasebne mize, postavitve s svečami (izbirno +€{p.romantic}), turške večerje z več hodi, žive violine in akustične glasbe ter osvetljeni mostovi Bosporja nad glavo. Izkušnjo prilagajamo parom — mirno vzdušje na začetku, nato energičen DJ in ples. Tempo določaš ti.' },
      { q: 'Ali lahko priredite presenečenje za mojega partnerja — rojstni dan, obletnica, snubitev?', a: 'Da — povej nam pri rezervaciji. Z osebjem lahko uskladimo: obletniško torto (brezplačno), posebno postavitev mize, ročno napisano voščilo v tvojem jeziku ali dostavo nečesa k mizi v pravem trenutku. Za snubitev priporočamo, da nam pišeš neposredno na WhatsApp, da lahko diskretno načrtujemo.' },
      { q: 'Koliko stane romantična plovba za 2 osebi?', a: '2 Standard: 2 × €{p.dinnerStd} = €48. Dodaj romantično postavitev +€{p.romantic} = €63. 2 VIP: 2 × €{p.dinnerVip} = €110 + romantična postavitev €{p.romantic} = €125. Brez predplačila — plačaš na ladji. Neomejen alkohol dodatno 2 × €{p.unlimited} = €60.' },
      { q: 'Ali je romantična plovba po Bosporju zasebna — samo za naju?', a: 'Ne — gre za skupno plovbo z drugimi pari in gosti (skupaj do 60–80). **Tvoja miza** je zasebna (samo za tvojo skupino), vendar so na krovu drugi gostje. Če želiš popolnoma zasebno plovilo za 2, je to ločena **zasebna plovba po Bosporju** (ki jo lahko uredimo na zahtevo — piši nam).' },
      { q: 'Ali lahko prinesemo lastne rože, torto ali darilo?', a: 'Seveda. Prinesi, kar želiš — osebje ti bo diskretno pomagalo postaviti darilo presenečenja, skriti škatlico z obročkom v sladici ali izpostaviti rože, ki si jih prinesel. Brez doplačila za zamašek ali drugih dajatev. Le povej, da lahko uskladimo trenutek.' },
      { q: 'Kaj naj oblečeva za romantično plovbo po Bosporju?', a: 'Pametno sproščeno do elegantno — veliko parov se obleče lepše (obleke, suknjiči). Ni strogega kodeksa oblačenja, vendar je vzdušje bolj posebno kot pri običajnem turizmu. Vzemi lahek suknjič ali šal — krov je lahko hladen tudi poleti. Udobni čevlji, če nameravata plesati po večerji.' }
    ],
    cta: {
      primary: 'Rezerviraj romantično plovbo · Plačaš na ladji',
      secondary: 'Dodaj romantično postavitev mize (+€{p.romantic}) v obrazcu rezervacije · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal večerna plovba po Bosporju od €{p.dinnerStd} — predstava + nočna pot',
      description: '3-urna večerna plovba po Bosporju: ljudska predstava v živo, osvetljeni mostovi, nočna panorama Bosporja. Halal meni na voljo na zahtevo.'
    },
    hero: {
      h1: 'Halal plovba po Bosporju v Istanbulu',
      subtitle: '100 % halal certificiran meni, alkohol je vedno izbiren, družinam prijazna zabava in spoštljivo vzdušje za muslimanske popotnike — večer na Bosporju, kot mora biti.',
      badge: '100 % halal · Družinam prijazno · Muslimansko lastništvo'
    },
    intro: [
      '**Halal plovba po Bosporju** je najbolj spoštljiva večerna plovba v Istanbulu za muslimanske popotnike. Vsak kos mesa, ki ga postrežemo na krovu — losos, orada, piščanec, jagnječje mesne kroglice, goveji file, rib-eye — je **halal certificiran** od odobrenih dobaviteljev. Isti meni postrežemo vsem gostom; ni ločenega "halal dela", ker je celotno plovilo halal kot standard.',
      'Alkohol je **izbirni dodatek** — nikoli vsiljen gostom, in razporeditev miz naravno loči goste, ki imajo raje mizo brez alkohola. Za goste, ki želijo paket neomejenega alkohola (+€{p.unlimited}/osebo), je na voljo, vendar so neomejene brezalkoholne pijače, ki so vključene (voda, kola, sok), zadostne za večino muslimanskih družin. Posadka je usposobljena, da spoštuje tvoje preference brez predpostavk.',
      '**Halal plovba po Bosporju** ima velik pomen za popotnike iz Saudske Arabije, ZAE, Kuvajta, Katarja, Irana, Malezije, Indonezije, Pakistana in Maroka, ki si želijo najbolj ikoničen večer Istanbula brez kompromisov. Licencirano pri TÜRSAB, 4,8★ in plačaš na ladji — ničesar ne obljubiš, dokler nisi prepričan, da izkušnja izpolnjuje tvoje standarde.'
    ],
    highlights: [
      { title: '100 % halal certificiran meni', desc: 'Vse meso (losos, orada, piščanec, mesne kroglice, govedina, rib-eye) je halal certificirano od odobrenih dobaviteljev. Kuhinja sledi halal pripravi. Brez svinjine ali ne-halal aditivov. Vegetarijanske možnosti so vedno na voljo.' },
      { title: 'Alkohol izbiren, nikoli vsiljen', desc: 'Paketi alkohola so dodatki — niso vključeni kot standard. Brezalkoholne pijače (voda, kola, sok) so neomejene in brezplačne. Tvoja miza ostaja brez alkohola, če tega izrecno ne zahtevaš. Posadka tiho spoštuje tvojo izbiro.' },
      { title: 'Družinam prijazna zabava', desc: 'Predstava sema, tradicionalni turški ljudski plesi, turška glasba v živo. Brez nočno-klubskih predstav, brez neprimerne vsebine. Varno za otroke, spoštljivo do družin. Trebušni ples je tradicionalna umetnostna oblika, predstavljena z dostojanstvom.' },
      { title: 'Spoštovanje časov molitve', desc: 'Če vkrcanje sovpada z magribom ali išo (19:30–20:30), te lahko osebje pred odhodom pospremi do tihega molilnega prostora pri pomolu Kabataş. Le sporoči nam pri rezervaciji.' }
    ],
    faq: [
      { q: 'Ali je plovba po Bosporju 100 % halal?', a: 'Da — vsak mesni izdelek na meniju (riba, piščanec, mesne kroglice, goveji file, rib-eye, jagnjetina) je halal certificiran od odobrenih dobaviteljev. Kuhinja sledi standardom halal priprave. Nikjer na krovu se ne streže svinjina. Ni "halal opcija" — celoten meni je halal.' },
      { q: 'Ali drugi gostje na krovu pijejo alkohol?', a: 'Nekateri gostje dodajo izbirni paket alkohola (+€{p.unlimited}/osebo). Mize so naravno ločene — lahko zahtevaš območje brez alkohola. Posadka ne prinaša alkohola, razen če ga gost izrecno naroči. Brezalkoholne pijače (neomejeno) so vključene za vse.' },
      { q: 'Ali je ta plovba primerna za muslimanske družine z otroki?', a: 'Da — je ena najbolj spoštovanih družinskih plovb v Istanbulu. Zabava je skromna (ljudski plesi, sema, turška glasba), otroci pod 3 leta brezplačno, 4–8 let 50 % popust. Brez vzdušja nočnega kluba. Družine iz Zaliva, Indonezije, Malezije, Pakistana in Maroka redno rezervirajo to plovbo.' },
      { q: 'Ali lahko molim na krovu?', a: 'Ni namenske molilnice na krovu, vendar priporočamo, da pred vkrcanjem ob 19:30 opraviš molitev (molitev magrib pogosto pade v ta interval). Pomol Kabataş ima molilne prostore. Če moraš moliti med plovbo 20:30–23:30 (iša), se posvetuj s posadko — uredimo lahko tih kotiček na krovu.' },
      { q: 'Kakšne so cene za muslimansko družino 4 oseb (2 odrasla, 2 otroka)?', a: 'Standardna plovba: 2 × €{p.dinnerStd} + 2 × €12 (polovična cena 4–8 let) = €72. Če sta otroka pod 3 leta, brezplačno: 2 × €{p.dinnerStd} = €48. Dodaj €10 hotelskega prevoza na odraslega. Skupaj: €48–92 za družino 4 oseb, brez predplačila, plačaš na ladji.' },
      { q: 'Ali je tudi hotelski prevoz halal?', a: 'Hotelski prevoz je le prevoz z avtom — vključenih ni hrane ali pijače, zato ni halal pomislekov. Naši vozniki so profesionalni, spoštljivi in točni. Območja prevoza pokrivajo Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih in 8 drugih osrednjih sosesk, kjer muslimanski popotniki običajno bivajo.' }
    ],
    cta: {
      primary: 'Rezerviraj halal plovbo · Plačaš na ladji',
      secondary: 'Brezplačna odpoved 2 uri prej · Brez predplačila · Halal certificirano',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP plovba po Bosporju od €{p.dinnerVip} — premium večerja, VIP sedeži',
      description: 'VIP večerna plovba po Bosporju: premium meze, izbira zrezkov, mesto blizu odra, prednostna postrežba. Prej €{p.dinnerVipOriginal}, zdaj €{p.dinnerVip}.'
    },
    hero: {
      h1: 'VIP plovba po Bosporju',
      subtitle: 'Sedeži v prvi vrsti ob odru, premium turški meni z izbiro zrezkov in prednostna postrežba — večer na Bosporju na višji ravni za popotnike, ki si želijo najboljše mize na krovu.',
      badge: 'Najbolj priljubljeno · 40 % POPUST · Sedeži v prvi vrsti'
    },
    intro: [
      '**VIP plovba po Bosporju** te postavi na najboljša mesta na krovu: mize ob odru z neposrednim pogledom na predstavo sema, ljudske plese, trebušni ples in glasbo v živo. Premium meni dodaja goveji file in rib-eye k izbiri glavnih jedi (proti piščancu/lososu pri Standardu), poleg 15+ tradicionalnih turških meze, postreženih kot izdaten razgrnjen krožnik.',
      '**VIP večerna plovba po Bosporju** je s strani naših gostov ocenjena kot najbolj priljubljena — ker pri €{p.dinnerVip}/osebo (od €{p.dinnerVipOriginal}, 40 % popust) izkušnja bolj spominja na fine dining restavracijo kot na turistično plovbo. Zasebna miza, pozorni natakarji in isti spektakularni pogledi na Dolmabahçe, mošejo Ortaköy in osvetljeni most čez Bospor.',
      'Ne glede na to, ali si poslovni popotnik, praznuješ nekaj pomembnega ali razmišljaš "v Istanbulu smo enkrat — naredimo to kot je treba", je ta **VIP plovba po Bosporju** rezervacija, ki jo izberejo obiskovalci, ki se vračajo. Licencirano pri TÜRSAB, 4,8★ z 11 317+ ocenami, plačaš na ladji, brezplačna odpoved do 2 uri pred odhodom.'
    ],
    highlights: [
      { title: 'Zasebna miza v prvi vrsti ob odru', desc: 'Rezervirani sedeži takoj pred odrom — najboljši pogled na predstavo sema, ljudske plese in trebušni ples. Tvoja miza, ne deljena. Fotografi obožujejo ta mesta.' },
      { title: '15+ meze + premium glavne jedi', desc: '15+ vrst turških meze, postreženih kot tradicionalen razgrnjen krožnik. Izbira glavne jedi vključuje goveji file in rib-eye (Standard ima samo piščanca/lososa). Ista sladica in neomejene brezalkoholne pijače.' },
      { title: 'Prednostna postrežba natakarja', desc: 'Predan natakar prvi postreže tvojo mizo — dolivanje, pomoč pri meniju, koordinacija dodatkov alkohola, posebne želje. Ne tekmuješ za pozornost v natrpani sobi.' },
      { title: '40 % POPUST — od €{p.dinnerVipOriginal}, zdaj €{p.dinnerVip}', desc: 'Redna cena €{p.dinnerVipOriginal}/osebo. Trenutna lansirana cena €{p.dinnerVip}/osebo — 40 % popust. Plačaš na ladji, brez predplačila. Brezplačna odpoved do 2 uri pred odhodom.' }
    ],
    faq: [
      { q: 'Kakšna je razlika med VIP in Standard plovbo po Bosporju?', a: 'VIP dobi: (1) sedeže v prvi vrsti z najboljšim razgledom, (2) 15+ meze proti 10 pri Standardu, (3) dodan goveji file + rib-eye k izbiri glavnih jedi, (4) prednostno postrežbo natakarja. Ista 3-urna plovba, ista zabava, ista pot. €{p.dinnerVip} proti €{p.dinnerStd}.' },
      { q: 'Ali je VIP cena €{p.dinnerVip} resnično 40 % popust?', a: 'Da — redna cena je €{p.dinnerVipOriginal}/osebo (preveri na katerikoli rezervacijski strani). €{p.dinnerVip} uporabljamo kot ceno neposredne rezervacije, brez provizij posrednikov. Dobiš VIP za manj, kot večina mest zaračuna za Standard.' },
      { q: 'Ali je alkohol vključen v VIP plovbo?', a: 'Ne — alkohol je ločen dodatek (tako kot pri Standardu). 2 kozarca: +€{p.alcohol2}/osebo. Neomejen lokalni alkohol (vino, pivo, rakija, vodka, gin): +€{p.unlimited}/osebo. Premium uvožene pijače se zaračunajo posebej. Neomejene brezalkoholne pijače so vključene in brezplačne.' },
      { q: 'Ali lahko nadgradim na VIP po vkrcanju na Standard?', a: 'Odvisno od razpoložljivosti — če so VIP mize proste, da. Razliko plačaš na ladji (€{p.dinnerVip} - €{p.dinnerStd} = €31). Vendar priporočamo vnaprejšnjo rezervacijo VIP: najboljše mize v prvi vrsti pripadajo vnaprejšnjim rezervacijam.' },
      { q: 'Kako rezerviram VIP plovbo po Bosporju?', a: 'Uporabi obrazec za rezervacijo na tej strani — v 1. koraku izberi "VIP", nastavi datum, vnesi število gostov, nato kontaktne podatke. Tvoja zahteva pride prek WhatsAppa / Telegrama in takoj potrdimo. Plačaš na ladji, ne zdaj.' },
      { q: 'Ali je VIP plovba primerna za poslovne večerje s strankami?', a: 'Da — VIP je najpogostejša izbira za poslovne večerje v Istanbulu. Zasebna miza, dovolj mirno za pogovor, impresiven meni in razgled. Veliko gostov rezervira VIP + neomejen alkohol za sprejem strank. Halal certificirano (dobro za poslovne popotnike iz držav Zaliva). Sporoči nam pri rezervaciji, uredili bomo mirnejšo VIP mizo dlje zadaj.' }
    ],
    cta: {
      primary: 'Rezerviraj VIP · Plačaš na ladji',
      secondary: 'Od €{p.dinnerVipOriginal}, zdaj €{p.dinnerVip} · Brezplačna odpoved 2 uri prej',
      tertiary: 'Oglej si Standard možnost (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Zasebna plovba po Bosporju — najem ladje Istanbul (25+ gostov)',
      description: 'Zasebna plovba po Bosporju za skupine, poroke, podjetniške dogodke. Ekskluzivno plovilo, meni po meri, prilagodljiva dolžina. Brezplačna odpoved.'
    },
    hero: {
      h1: 'Zasebna plovba po Bosporju',
      subtitle: 'Najemi celotno plovilo za svojo skupino — družinska srečanja, poslovne večerje, rojstni dnevi, zaroke, poroke. Ekskluzivna uporaba, meni po meri, prilagodljiv program.',
      badge: 'Zasebni najem · 25+ gostov · Meni po meri'
    },
    intro: [
      '**Zasebna plovba po Bosporju** pomeni, da je celotno plovilo tvoje — brez drugih gostov, brez deljenih miz, brez skupnega plesišča. Popolno za družinska srečanja, poslovne večerje, rojstnodnevne zabave, dekliščine ali poročne obrede. Plovilo, posadka, meni, zabava in program so prilagojeni tvoji skupini.',
      '**Naš zasebni najem Bosporja** sprejema **od 25 do 80 gostov**. Manjše skupine lahko še vedno zahtevajo zasebno izkušnjo — ponujamo minimalno ceno, ki pokrije stroške obratovanja. Večje skupine (poročni format) dobijo cene po meri in običajno vključujejo posebno dekoracijo, glasbo v živo, rezanje torte in podaljšano trajanje (4–5 ur namesto standardnih 3).',
      'Ne glede na to, ali pripravljaš podjetniški dogodek za stranke, praznovanje 50. rojstnega dne ali poročno gostijo pod najbolj ikoničnimi mostovi Istanbula, je to **zanesljiva zasebna plovba za istanbulske organizatorje dogodkov**. Ocenjena z 4,8★, licencirana pri TÜRSAB, popolnoma angleško govoreča posadka in popolna prilagodljivost — pot, meni, glasba, program.'
    ],
    highlights: [
      { title: 'Celotno plovilo, samo za vas', desc: 'Brez drugih gostov. Tvoja skupina obvlada vsak krov, vsako mizo. Določi svojo glasbo, kodeks oblačenja, program. Zasebnost je pomembna — to spoštujemo.' },
      { title: 'Meni in paket pijač po meri', desc: 'Sodeluj z našim šefom in prilagodi meni: specifični meze, izbira glavnih jedi, jedi prilagojene kulturi ali prehranskim potrebam. Paketi alkohola, šampanjski toasti, koktajlski bari po meri — vse je mogoče urediti.' },
      { title: 'Prilagodljiva dolžina in odhod', desc: 'Standardne 3 ure se lahko podaljšajo na 4–5 ur. Izberi dnevni odhod ob 12:00, odhod ob sončnem zahodu ob 17:30 ali večerni odhod ob 20:30. Želiš med tednom namesto vikend? Brez težav — prilagodimo se tvojemu programu.' },
      { title: 'Dekoracija, glasba, program po meri', desc: 'Dekoracija po meri (baloni, transparenti, cvetlični aranžmaji), glasba v živo namesto DJ-ja, rezanje poročne torte, koordinacija s fotografom, govori — dodaj, kar dogodek potrebuje. Smo organizatorji dogodkov, ne le upravljavci plovil.' }
    ],
    faq: [
      { q: 'Koliko stane zasebna plovba po Bosporju?', a: 'Za skupine 25+ običajno €{p.dinnerStd}–€{p.dinnerVip}/osebo + najemnina plovila glede na velikost skupine, datum in trajanje. Piši nam na WhatsApp z velikostjo skupine, datumom in zahtevami — cena v eni uri. Večina dogodkov pade v razpon €2 000–€6 000 skupaj.' },
      { q: 'Kakšna je minimalna velikost skupine za zasebno plovbo po Bosporju?', a: 'Tehnično 25 gostov naredi zasebno plovbo ekonomsko izvedljivo. Manjše skupine (10–24) lahko najamejo zasebno, vendar plačajo minimalno ceno, enakovredno ~25 osebam. Za resnično majhne skupine (2–10) razmisli o običajni Standard ali VIP plovbi — tvoja miza je že zasebna, deljeno je le plovilo.' },
      { q: 'Ali lahko priredim poroko na plovbi po Bosporju?', a: 'Da — letno priredimo 10–15 poročnih obredov. Kapaciteta do 80 za večerno postavitev, do 100 za koktajl stil. Uskladimo se s tvojim fotografom, organizatorjem poroke, glasbeno skupino ali šefom. Rezanje torte po meri, krog prvega plesa, šampanjski toast — vse je mogoče urediti. Piši na WhatsApp za poročno povpraševanje.' },
      { q: 'Kaj pa podjetniški dogodki in team building večerje?', a: 'Zasebne podjetniške plovbe so naše najpogostejše rezervacije. Korporativne večerje, sprejem strank, predstavitev izdelka, praznovanje ekipe — vse deluje. Lahko izdamo račun s specifikacijo DDV, uredimo hotelski prevoz za tvojo ekipo in koordiniramo blagovno znamko (namizne dekoracije, transparenti) na zahtevo.' },
      { q: 'Ali lahko prinesem lastno glasbeno skupino ali DJ namesto vaše zabave?', a: 'Da — lahko prineseš svojo glasbeno skupino, DJ-ja, fotografa. Ali pa obdrži naš standard (sema, ljudski plesalci, trebušni ples, DJ) in dodaj svoje poleg. Plovilo ima PA sistem in plesišče. Sporoči nam vnaprej, da lahko uskladimo zvok.' },
      { q: 'Kako zahtevam ceno za zasebno plovbo po Bosporju?', a: 'Najlažje: piši nam na WhatsApp +90 532 244 29 22 z (1) velikostjo skupine, (2) zaželenim datumom, (3) priložnostjo (poroka, podjetje, rojstni dan), (4) posebnimi zahtevami. Odgovorimo v eni uri v delovnem času, 12 ur ponoči. Lahko uredimo tudi video klic za razpravo o podrobnostih.' }
    ],
    cta: {
      primary: 'WhatsApp za ceno po meri',
      secondary: 'Meni po meri, skupina 25–80, prilagodljiva dolžina · Odgovor v 1 uri',
      tertiary: 'Standardna plovba (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bospor za pare od €{p.dinnerStd} — romantičen večer v Istanbulu',
      description: 'Večerna plovba po Bosporju za pare. Zasebna miza, osvetljeni mostovi, izbirna romantična dekoracija. Od €{p.dinnerStd}/osebo.'
    },
    hero: {
      h1: 'Plovba po Bosporju za pare',
      subtitle: 'Romantičen večer na Bosporju — zasebna miza, glasba v živo, osvetljeni mostovi nad glavo. Ne glede na to, ali je vajin prvi zmenek v Istanbulu ali deseta obletnica, deluje.',
      badge: 'Zasebna miza · Glasba v živo · Plačaš na ladji'
    },
    intro: [
      '**Plovba po Bosporju za pare** je najljubši večer Istanbula. Vsi pari ne praznujejo obletnice — včasih sta le v najbolj romantičnem mestu na svetu in si želita čudovit večer skupaj. Ta plovba ponuja: zasebno mizo za dva, počasno turško večerjo z več hodi, živo violino in akustično glasbo med večerjo in osvetljeni most čez Bospor, ki drsi mimo.',
      'Vzdušje je **toplo, a ne pretirano romantično** — brez obvezne glasbe za zaroke, brez nerodnih usklajenih aplavzov za "novoporočence". Jejta, pijta, klepetajta, glejta luč Istanbula. Bi rad dodal romantično postavitev mize (sveče, vrtnice, +€{p.romantic})? Odlično — drugače je sama večerja že posebna.',
      'Ne glede na to, ali sta v Istanbulu 3 dni s partnerjem, praznujeta nekaj v miru ali načrtujeta raziskovalno potovanje za prihodnjo snubitev — **plovba po Bosporju za pare** vama daje 3 ure večerne plovbe v enem najbolj fotografiranih mest na svetu. 4,8★, plačaš na ladji, brezplačna odpoved.'
    ],
    highlights: [
      { title: 'Zasebna miza za dva', desc: 'Zasebna miza za 2, ne deljena. Prednost pri mizi ob oknu za pare. Fotografiranje ob sončnem zahodu in nočnem Bosporju takoj zunaj tvojega okna.' },
      { title: 'Počasna večerja z več hodi', desc: '10 vrst turških meze, topla predjed, glavna jed (losos, orada, piščanec, mesne kroglice ali vegetarijansko), sladoledna torta za sladico. Postreženo počasi v 3 urah — nimaš mudi.' },
      { title: 'Violina v živo in lahka glasba', desc: 'Violina v živo in akustična turška glasba med večerjo ustvarjata intimno vzdušje, primerno za pogovor. Nato pride DJ za pare, ki želijo plesati.' },
      { title: 'Dodatki za posebne večere', desc: 'Romantična postavitev mize (sveče, vrtnice): +€{p.romantic}. Neomejen lokalni alkohol (vino, rakija): +€{p.unlimited}/osebo. Hotelski prevoz (v obe smeri): +€{p.transfer}/osebo. Izberi, kar ustreza vajinemu večeru.' }
    ],
    faq: [
      { q: 'Ali je ta plovba po Bosporju primerna za običajen večer, ne posebno priložnost?', a: 'Da — večina najinih parov ne praznuje ničesar posebnega, le imata lep večer skupaj. Vzdušje je toplo in prijetno brez pretiravanja. Lahko dodaš romantično postavitev mize (+€{p.romantic}), če želiš več, ali pa uživaj v standardu — že tako je posebna.' },
      { q: 'Koliko stane plovba po Bosporju za 2 osebi?', a: '2 Standard: 2 × €{p.dinnerStd} = €48. 2 VIP: 2 × €{p.dinnerVip} = €110. Dodaj hotelski prevoz za dva: +€{p.transfer}×2 = €20. Dodaj neomejen alkohol za dva: +€{p.unlimited}×2 = €60. Brez predplačila — plačaš na ladji.' },
      { q: 'Ali lahko pari prinesejo svoje vino ali šampanjec?', a: 'Ne dovolimo alkohola od zunaj (iz licenčnih razlogov). Vendar imamo neomejeno lokalno vino (+€{p.unlimited}/osebo) in lahko uredimo premium uvožena vina ali šampanjec za doplačilo — vprašaj pri rezervaciji. Prosecco, Chianti in Cabernet so priljubljene premium izbire.' },
      { q: 'Ali je problem, če ne pijeva alkohola — je to neobičajno?', a: 'Sploh ne — veliko parov povsem preskoči alkohol, bodisi iz halal razlogov bodisi po preferenci. Neomejene brezalkoholne pijače (voda, sok, kola) so vključene. Nihče ne pogleda dvakrat, če je tvoja miza brez alkohola. Veliko muslimanskih parov iz Saudske Arabije, Irana in Indonezije rezervira to plovbo.' },
      { q: 'Kdaj je plovba po Bosporju najboljša za pare — sončni zahod ali večer?', a: 'Večer (odhod 20:30) je najbolj ikoničen — osvetljeni mostovi, odsevi v vodi, osvetljene palače. Sončni zahod (odhod 17:30) je zgodnejši in ima lepoto zlate ure, vendar je večerna plovba specifično ob 20:30. Če želita oba, večina parov rezervira sončni zahod in večerno plovbo na različne dni.' },
      { q: 'Ali je plesišče — lahko pleševa?', a: 'Da — po večerji (~22:30) začne DJ in odprt krov postane plesno območje. Veliko parov pleše počasne pesmi pod lučmi z mostom čez Bospor v ozadju. Nekatere najlepše fotografije, ki jih boš naredil v Istanbulu.' }
    ],
    cta: {
      primary: 'Rezerviraj romantičen večer · Plačaš na ladji',
      secondary: 'Dodaj romantično postavitev (+€{p.romantic}) · Brezplačna odpoved 2 uri prej',
      tertiary: 'Oglej si romantično plovbo po Bosporju'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Plovba po Bosporju ob sončnem zahodu od €35 — zlata ura + večerja',
      description: 'Plovba po Bosporju ob sončnem zahodu iz Kabataşa, odhod 17:30. Palače v zlati svetlobi, večerja se nadaljuje v osvetljeno noč. 3 ure. Brezplačna odpoved, plačaš na ladji.'
    },
    hero: {
      h1: 'Plovba po Bosporju ob sončnem zahodu',
      subtitle: 'Čarobna ura na Bosporju — glej, kako sonce zahaja za silhuete minaretov, medtem ko pluješ mimo Dolmabahçeja, mošeje Ortaköy in mostu čez Bospor, ki se prižge za noč.',
      badge: 'Zlata ura · Odhod 17:30 · Najboljše fotografije'
    },
    intro: [
      '**Plovba po Bosporju ob sončnem zahodu** ujame Istanbul v najbolj fotogenem trenutku. Vkrcaš se ob 17:30 in v 20 minutah začne sonce zahajati za minaretje na evropski obali — palačo Dolmabahçe pobarva z zlatom, vodo Bosporja spremeni v baker in mošejo Ortaköy spremeni v silhueto ob žarečem nebu. Vsaka fotografija s telefonom s te plovbe izgleda kot profesionalen film.',
      '**Naša plovba po Bosporju ob sončnem zahodu** vključuje popolno turško večerjo, ki se začne ob zlati uri in se nadaljuje, medtem ko se mostovi prižgejo za noč. Do sladice pluješ pod osvetljenim mostom čez Bospor — 30 milijonov luči, odsevanih v temni vodi. Prehod iz dneva v noč, zavit v 3 ure, je celotna zgodba.',
      'Ne glede na to, ali si fotograf, ki lovi zlato uro, popotnik, ki si želi najboljše od dneva in noči, ali par, ki išče "ta posnetek iz Istanbula" — to je **priporočena večerna plovba po Bosporju ob sončnem zahodu**. Ocenjena z 4,8★, licencirana pri TÜRSAB, plačaš na ladji, brez predplačila.'
    ],
    highlights: [
      { title: 'Vrh zlate ure — odhod 17:30', desc: 'Vkrcanje ob 17:30, sončni zahod se zgodi okoli 18:30 poleti / 17:00 pozimi. Prvih 40 minut plovbe je zlata ura, ki jo loviš. Kamera pripravljena — to je posnetek.' },
      { title: 'Vključen prehod iz dneva v noč', desc: 'Ne le sončni zahod — plovba v mrak, nato v osvetljen Bospor. Glej 3 različne svetlobne faze v eni plovbi: zlato, modra ura in popolnoma osvetljena noč.' },
      { title: 'Popolna večerja med plovbo', desc: '10 vrst turških meze, topla predjed, glavna jed (losos, orada, piščanec, mesne kroglice, vegetarijansko), sladoledna torta. Isti kakovostni meni kot na večerni plovbi, postrežen med sončnim zahodom.' },
      { title: 'Dolmabahçe, Ortaköy, most čez Bospor — vse sije', desc: 'Pot mimo palače Dolmabahçe (zlata ob sončnem zahodu), mošeje Ortaköy (kupola v silhueti), mostu čez Bospor (se prižge), Rumeli Hisarı, palače Beylerbeyi. Vsaka znamenitost v svoji najboljši svetlobi.' }
    ],
    faq: [
      { q: 'Kdaj odpluje plovba po Bosporju ob sončnem zahodu?', a: 'Vkrcanje se začne ob 17:00, plovilo izpluje ob 17:30, vrne se okoli 20:30. Časovno usklajeno, da se zgodi prav, ko sonce zahaja nad vodo — sezonsko se nekoliko razlikuje (poletje 18:30, zima 17:00). Odhod sezonsko prilagajamo 15–30 minut.' },
      { q: 'Ali je plovba ob sončnem zahodu enaka kot večerna plovba?', a: 'Podobni, vendar ob različnem času. Plovba ob sončnem zahodu odpluje ob 17:30 z večerjo, postreženo med plovbo (zlata ura + zgodnji večer). Večerna plovba je ob 20:30 — po mraku, čisti nočni pogledi. Isto plovilo, isti meni, ista zabava — le različna svetloba. Nekateri gostje naredijo oba na različne dni.' },
      { q: 'Koliko stane plovba po Bosporju ob sončnem zahodu?', a: 'Standardna plovba ob sončnem zahodu od €35/osebo (3 ure, popolna večerja, živa zabava). VIP možnost z mesta v prvi vrsti in premium meze €55/osebo. Plačaš na ladji — brez predplačila. 0–3 let brezplačno, 4–8 let polovična cena.' },
      { q: 'Ali je plovba ob sončnem zahodu boljša od večerne plovbe (nočne plovbe)?', a: '"Boljše" je odvisno od tega, kaj želiš. Sončni zahod = najboljše fotografije, zlata svetloba, počasnejši tempo, zgodnejši večer. Večer = najbolj ikonične luči (osvetljeni mostovi), najboljša zabava, kasnejša večerja. Fotografi izberejo sončni zahod. Pari na romantičen večer izberejo večer. Družine z otroki običajno izberejo sončni zahod (konča zgodaj).' },
      { q: 'Kaj naj vzamem na plovbo ob sončnem zahodu?', a: 'Pametni telefon ali kamero za fotografije (zlata ura prosi). Lahek suknjič — veter se okrepi ob sončnem zahodu in krov se lahko zgodaj zvečer hitro ohladi. Sončna očala za prvih 30 minut. Pametno sproščeno — večerjaš, vendar ni strogega kodeksa oblačenja.' },
      { q: 'Ali lahko ostanem na plovbi, da vidim osvetljene mostove ponoči?', a: 'Plovba ob sončnem zahodu traja 3 ure (17:30–20:30), tako da boš proti koncu videl most čez Bospor popolnoma osvetljen in osvetljen Dekliški stolp. Če želiš VRHUNSKE nočne razglede (20:30–23:30, vse restavracije in spomeniki popolnoma osvetljeni), rezerviraj večerno plovbo od 20:30. Najboljša rešitev: rezerviraj oba na različna večera.' }
    ],
    cta: {
      primary: 'Rezerviraj plovbo ob sončnem zahodu · Plačaš na ladji',
      secondary: 'Odhod 17:30 · Sončni zahod + večerja vključena · Brezplačna odpoved 2 uri prej',
      tertiary: 'Oglej si večerno plovbo (20:30)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Bospor ponoči od €{p.dinnerStd} — večerna plovba + predstava v živo',
      description: '3-urna nočna pot po Bosporju z večerjo in predstavo v živo. Odhod 20:30 iz Kabataşa, osvetljeni mostovi. Brezplačna odpoved, plačaš na ladji.'
    },
    hero: {
      h1: 'Nočna pot po Bosporju',
      subtitle: 'Osvetljeni mostovi Istanbula, osvetljene palače in voda Bosporja kot ogledalo, ki odseva 30 milijonov luči — nočna pot, ki definira večer v Istanbulu.',
      badge: 'Osvetljeni mostovi · Predstava v živo · Večerja vključena'
    },
    intro: [
      '**Nočna pot po Bosporju** je najbolj priporočena večerna dejavnost v Istanbulu. Tukaj je razlog: po mraku se Bospor preobrazi. Most čez Bospor se menja med modro, vijolično in zlato. Palača Dolmabahçe sije v topli rumeni. Mošeja Ortaköy se popolno odseva v črni vodi. Vsaka istanbulska znamenitost doseže svoj dramatični vrhunec ponoči.',
      '**Naša nočna pot po Bosporju z večerjo** zavije celoten ikonični večer: 3 ure na vodi (20:30–23:30), turška večerja z več hodi, živi ljudski plesi (sema, 5 ljudskih plesov, trebušni), glasba v živo in DJ-set, ki napolni krov do konca noči. Vsak gost dobi isti program — brez "osnovne" možnosti, ki preskoči najboljše dele.',
      'Ne glede na to, ali je tvoj prvi obisk Istanbula in iščeš "edino stvar, ki jo moraš narediti ponoči", ali si bil že tu in želiš najbolj fotogenih 3 ur mesta, je to **nočna pot po Bosporju**, ki jo je z oceno 4,8★ ocenilo več kot 11 317 popotnikov. Licencirano pri TÜRSAB, plačaš na ladji, brez predplačila.'
    ],
    highlights: [
      { title: 'Bospor osvetljen na dramatičnem vrhuncu', desc: 'Most čez Bospor menja barvo (modra, vijolična, zlata), palače sijejo rumeno, mošeja Ortaköy se odseva v črni vodi. 20:30–23:30 maksimalna osvetlitev za vse istanbulske znamenitosti.' },
      { title: 'Tradicionalna turška predstava na krovu', desc: 'Predstava sema, 5 tradicionalnih ljudskih plesov (iz različnih turških regij), trebušni ples, turška glasba v živo, nato DJ-set. 40-minutna predstava, nato glasba + večerja se nadaljuje.' },
      { title: 'Popolna večerja z več hodi', desc: '10 vrst turških meze, topla predjed (paçanga böreği), glavna jed (losos, orada, piščanec, mesne kroglice, vegetarijansko — tvoja izbira), sladica (sladoledna torta), neomejene brezalkoholne pijače. Halal certificirano.' },
      { title: 'Popolna pot po Bosporju', desc: 'Kabataş → Dolmabahçe → palača Çırağan → mošeja Ortaköy → Bebek → Rumeli Hisarı → most Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Dekliški stolp → Kabataş.' }
    ],
    faq: [
      { q: 'Kdaj je nočna pot po Bosporju?', a: 'Vkrcanje od 19:30 na pomolu Kabataş. Plovilo izpluje ob 20:30, vrne se okoli 23:30. Priporočamo, da prideš 20 minut prej, da se namestiš in izbereš sedež.' },
      { q: 'Koliko stane nočna pot po Bosporju?', a: 'Standardna nočna pot (3 ure, večerja, predstava): €{p.dinnerStd}/osebo (od €{p.dinnerStdOriginal}). VIP s sedežem v prvi vrsti in premium menijem: €{p.dinnerVip}/osebo (od €{p.dinnerVipOriginal}). 0–3 let brezplačno, 4–8 let polovična cena. Plačaš na ladji.' },
      { q: 'Kakšna je razlika med nočno potjo po Bosporju in večerno plovbo?', a: 'Je ista stvar, le druga ključna beseda. "Nočna pot po Bosporju" je, kako mnogi popotniki iščejo; "večerna plovba" je strokovno ime. Isto plovilo, isti 3-urni program, isti meni, ista predstava. Izberi svojo zaželeno ključno besedo — izkušnja je enaka.' },
      { q: 'Nočna pot po Bosporju ali plovba ob sončnem zahodu — kaj je bolj vredno?', a: 'Nočna pot = osvetljen Istanbul, največja svetlobna drama, popoln program zabave, najbolj ikonične fotografije osvetljenih mostov. Sončni zahod = zlata ura, počasnejši tempo, konča ob 20:30. Če narediš samo eno: nočna pot je bolj ikonična. Veliko gostov naredi oba na različne dni.' },
      { q: 'Ali lahko grem na nočno pot po Bosporju prvi dan v Istanbulu?', a: 'Da — priporočamo. Veliko popotnikov rezervira nočno pot prvi večer, ker ti daje popolno orientacijo: vse glavne znamenitosti z vode, z dobro hrano in zabavo. Lažje kot bori s časovnim zamikom in poskuša hoditi 1. dan. Hotelski prevoz na voljo iz osrednjih sosesk.' },
      { q: 'Ne govorim turško — ali je tura v angleščini?', a: 'Posadka govori angleško. Zabava (sema, ljudski plesi, glasba) ne zahteva jezika. Večerni meni je v angleščini. Rezervacija prek WhatsAppa / Telegrama deluje v več jezikih (angleški, arabski, ruski, nemški, francoski, španski). Turščina ni potrebna.' }
    ],
    cta: {
      primary: 'Rezerviraj nočno pot · Plačaš na ladji',
      secondary: 'Odhod 20:30 · 3 ure · Večerja + predstava vključena · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Večerna plovba Istanbul od €{p.dinnerStd} — nočna pot Bospor',
      description: '3-urna večerna plovba v Istanbulu po Bosporju. Turški meni z več hodi, ljudska predstava v živo, osvetljeni mostovi. Brezplačna odpoved, plačaš na ladji. 11 317 ocen.'
    },
    hero: {
      h1: 'Večerna plovba Istanbul',
      subtitle: 'Najboljša večerna plovba v Istanbulu — 3 ure po Bosporju, turška večerja z več hodi, živa zabava in nočni pogledi na najbolj ikonične znamenitosti mesta.',
      badge: '4,8★ · 11 317 ocen · TÜRSAB A-17672'
    },
    intro: [
      'Iščeš **večerno plovbo v Istanbulu**? Našel si tisto, ki jo priporoča večina popotnikov. Naš 3-urni večer na Bosporju združuje popolno turško večerjo z več hodi, ljudske plese v živo in najbolj fotogene poglede mesta — vse z udobnega plovila, ki odpluje ob 20:30 s pomola Kabataş.',
      'Izkušnja **večerne plovbe v Istanbulu**: vkrcanje ob 19:30, namestitev, pogled na palačo Dolmabahçe, ko odhajamo, večerja se začne, ko se približamo mošeji Ortaköy, predstava se začne (sema, ljudski plesi, trebušni), in do sladice si pod osvetljenim mostom čez Bospor. Do polnoči si nazaj v Kabataşu z ikoničnim foto kolažem in polnim trebuhom.',
      '€{p.dinnerStd}/osebo za Standard plovbo (od €{p.dinnerStdOriginal}) ali €{p.dinnerVip}/osebo za VIP s sedeži v prvi vrsti (od €{p.dinnerVipOriginal}). Plačaš na ladji — brez predplačila, brez tveganja. Licencirano pri TÜRSAB A-17672, ocenjeno z 4,8★ s strani več kot 11 317 popotnikov.'
    ],
    highlights: [
      { title: 'Popolna turška večerja z več hodi', desc: '10 vrst meze, topla predjed, glavna jed (losos/orada/piščanec/mesne kroglice/vegetarijansko), sladoledna torta. Halal certificirano. Neomejene brezalkoholne pijače vključene.' },
      { title: 'Predstava turških ljudskih plesov v živo', desc: 'Predstava sema, 5 tradicionalnih ljudskih plesov, trebušni ples, turška glasba v živo, DJ. 40-minutna predstava, glasba v ozadju se nadaljuje.' },
      { title: 'Popolna nočna pot po Bosporju', desc: '3-urna plovba: Dolmabahçe, Çırağan, mošeja Ortaköy, most čez Bospor, Bebek, Rumeli Hisarı, most FSM, Beylerbeyi, Üsküdar, Dekliški stolp. Obe obali, evropska in azijska.' },
      { title: 'Od €{p.dinnerStd} — plačaš na ladji', desc: 'Standard: €{p.dinnerStd} (od €{p.dinnerStdOriginal}). VIP s premium menijem: €{p.dinnerVip} (od €{p.dinnerVipOriginal}). Brez predplačila. Brezplačna odpoved do 2 uri pred odhodom.' }
    ],
    faq: [
      { q: 'Koliko stane večerna plovba v Istanbulu?', a: 'Naša standardna večerna plovba €{p.dinnerStd}/osebo (redna cena €{p.dinnerStdOriginal}). VIP s sedežem v prvi vrsti in premium menijem €{p.dinnerVip}/osebo (redna cena €{p.dinnerVipOriginal}). 0–3 let brezplačno, 4–8 let 50 % popust. Plačaš na ladji — brez predplačila.' },
      { q: 'Kaj je vključeno v ceno večerne plovbe v Istanbulu?', a: '3-urna plovba po Bosporju, turška večerja z več hodi (meze, topla predjed, glavna jed, sladica), neomejene brezalkoholne pijače, ljudska predstava v živo (sema, ljudski plesi, trebušni), glasba v živo + DJ, dostop do odprtega krova, davki vključeni. Hotelski prevoz in alkohol sta izbirna dodatka.' },
      { q: 'Od kod odpluje večerna plovba v Istanbulu?', a: 'Pomol Kabataş, Istanbul — na evropski obali, blizu palače Dolmabahçe. Točno mesto srečanja je sporočeno prek WhatsAppa / Telegrama po rezervaciji. Video poti peš od tramvajske postaje Dolmabahçe in tramvajske postaje Kabataş sta v zgornjem razdelku mesta srečanja.' },
      { q: 'Kako dolgo traja večerna plovba — in kdaj se začne?', a: 'Skupaj 3 ure. Vkrcanje od 19:30, plovilo odpluje točno ob 20:30, vrne se okoli 23:30. Priporočamo, da prideš 15–20 minut prej, da se namestiš in izbereš sedež.' },
      { q: 'Ali moram rezervirati vnaprej ali lahko le pridem?', a: 'Rezerviraj vnaprej — sedeži se zapolnijo, zlasti ob vikendih in praznikih. Rezervacije v zadnjem trenutku so pogosto možne, vendar niso zagotovljene. Obrazec na tej strani ti zagotovi mesto v manj kot 1 minuti. Plačaš na ladji, tako da ni finančnega tveganja pri zgodnji rezervaciji.' },
      { q: 'Ali je večerna plovba v Istanbulu primerna za vegetarijance / halal / prehranske omejitve?', a: 'Da — vse meso je halal certificirano. Vegetarijanska glavna jed (falafel, pečen krompir, bulgur pilav, dušena zelenjava, čebulni obročki) na voljo brez doplačila. Alergije lahko upoštevamo, če sporočiš pri rezervaciji. Alkohol je izbirni dodatek, nikoli vsiljen.' }
    ],
    cta: {
      primary: 'Rezerviraj večerno plovbo · Plačaš na ladji',
      secondary: '4,8★ · Licencirano pri TÜRSAB · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Nočna pot Istanbul od €{p.dinnerStd} — večerna plovba Bospor + predstava',
      description: '3-urna plovba po Bosporju z večerjo in predstavo v živo. Odhod 20:30 iz Kabataşa. Brezplačna odpoved, plačaš na ladji. 11 317 ocen. Izbirni hotelski prevoz.'
    },
    hero: {
      h1: 'Istanbul ponoči',
      subtitle: 'Najbolj priporočena nočna pot Istanbula — 3-urna plovba po Bosporju z večerjo, živo zabavo in najbolj ikoničnimi osvetljenimi pogledi mesta.',
      badge: 'Ikoničen istanbulski večer · 3 ure · Večerja vključena'
    },
    intro: [
      '**Nočna pot v Istanbulu** mora narediti tri stvari: pokazati ti ikonične znamenitosti mesta, dati ti dobro hrano in te zabavati. Naša večerna plovba po Bosporju opravi vse tri v enem 3-urnem večeru — zato jo večina istanbulskih vodičev priporoča kot #1 izkušnjo nočne poti.',
      'Pot **nočne poti v Istanbulu** zajema najboljše osvetljene znamenitosti: palačo Dolmabahçe, mošejo Ortaköy, most čez Bospor (menja barve), sosesko Bebek, Rumeli Hisarı, most FSM, palačo Beylerbeyi, azijsko obalo Üsküdar in Dekliški stolp v daljavi. Večina mestnih busov ti jih pokaže z avtobusa — mi ti jih pokažemo z vode, kjer so najbolj dramatični.',
      'Vključena je večerja (turški meni z več hodi), predstava turških ljudskih plesov v živo, sema, trebušni ples in DJ-set. Če si v Istanbulu 2–3 dni, je to en večer, ki naredi najmočnejši vtis. 4,8★ s strani več kot 11 317 popotnikov, plačaš na ladji, brez predplačila.'
    ],
    highlights: [
      { title: 'Vse ikonične nočne poglede Istanbula', desc: 'Palača Dolmabahçe, mošeja Ortaköy, osvetljen most čez Bospor, Rumeli Hisarı, most FSM, palača Beylerbeyi, Dekliški stolp. Vsaka glavna znamenitost ob vrhuncu nočne osvetlitve.' },
      { title: 'Popolna turška večerja vključena', desc: '10 meze, topla predjed, glavna jed (losos/orada/piščanec/mesne kroglice/vegetarijansko), sladica, neomejene brezalkoholne pijače. Halal certificirano. Cena €{p.dinnerStd}/osebo — vse vključeno.' },
      { title: 'Živi ljudski plesi + sema + trebušni', desc: 'Tradicionalna turška zabava: predstava Mevlana sema, 5 regionalnih ljudskih plesov, trebušni ples, glasba v živo, DJ. 40-minutna predstava, glasba v ozadju ves večer.' },
      { title: 'Enostavno za prvi obisk Istanbula', desc: 'Osrednje mesto srečanja (pomol Kabataş), hotelski prevoz (+€{p.transfer}/osebo), angleško govoreča posadka, plačaš na ladji. Nič logistike, nič stresa. Pridi, uživaj, odidi.' }
    ],
    faq: [
      { q: 'Katera je najboljša nočna pot v Istanbulu?', a: 'Večerna plovba po Bosporju je dosledno uvrščena #1. Razlogi: (1) ponuja vse ikonične nočne poglede z vode, (2) vključuje večerjo in predstavo v enem paketu, (3) 3 ure je dovolj, da vidiš veliko brez utrujenosti, (4) osrednje mesto srečanja, (5) plačaš na ladji zmanjšuje trenje pri rezervaciji. Večina istanbulskih vodičev jo priporoča kot "edino obvezno stvar ponoči".' },
      { q: 'Koliko stane nočna pot v Istanbulu?', a: 'Naša nočna pot z večerjo po Bosporju: Standard €{p.dinnerStd}/osebo, VIP €{p.dinnerVip}/osebo. Vključena plovba, večerja, zabava, brezalkoholne pijače. Izbirno: alkohol +€{p.unlimited}/osebo, hotelski prevoz +€{p.transfer}/osebo. Plačaš na ladji — brez predplačila.' },
      { q: 'Ali je nočna pot v Istanbulu varna za solo popotnike?', a: 'Da — zelo varna. Plovilo licencirano pri TÜRSAB, profesionalna angleško govoreča posadka, CCTV na krovu, rešilne jopiče na voljo. Veliko solo popotnikov rezervira to plovbo. Jeste pri deljeni ali zasebni mizi (tvoja izbira) in večer je vključujoč — spoznaj druge popotnike, če želiš, ali ostani sam.' },
      { q: 'Kdaj je najboljši čas za nočno pot v Istanbulu?', a: 'Naša večerna plovba po Bosporju je 20:30–23:30 (3 ure). To je vrh osvetlitve za vse istanbulske znamenitosti — mostovi popolnoma osvetljeni, sijoče palače, luna na vodi. Če želiš prej (zlata ura), razmisli o plovbi ob sončnem zahodu od 17:30.' },
      { q: 'Kako pridem do mesta srečanja nočne poti v Istanbulu?', a: 'Mesto srečanja je pomol Kabataş (evropski center, blizu palače Dolmabahçe). S tramvajem: T1 do postaje Kabataş (končna postaja). S taksijem: ~15 min iz Taksima. Peš: 20 min iz Taksima po İnönü Bulvarı. Video poti so na tej strani. Hotelski prevoz na voljo za +€{p.transfer}/osebo, če raje.' },
      { q: 'Ali lahko rezerviram nočno pot v Istanbulu na isti dan?', a: 'Pogosto da, zlasti med tednom. Vikendi se zapolnijo hitreje. Obrazec za rezervacijo na tej strani ti omogoča preveriti razpoložljivost za nocoj in rezervirati v manj kot 1 minuti. Za nujne zadeve istega dne piši na WhatsApp +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Rezerviraj nočno pot · Plačaš na ladji',
      secondary: 'Od €{p.dinnerStd}/osebo · Večerja + predstava vključeno · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Plovba z ladjo Istanbul od €{p.dinnerStd} — Bospor + večerja + predstava',
      description: '3-urna plovba z ladjo: plovba po Bosporju, popolna turška večerja, ljudska predstava v živo, osvetljeni nočni pogledi. Brezplačna odpoved, plačaš na ladji. 11 317 ocen.'
    },
    hero: {
      h1: 'Plovba z ladjo v Istanbulu',
      subtitle: 'Najbolj rezervirana plovba z ladjo v Istanbulu s strani popotnikov — plovba po Bosporju s turško hrano, živo zabavo in ikoničnimi pogledi mesta z vode.',
      badge: '4,8★ · TÜRSAB A-17672 · Plačaš na ladji'
    },
    intro: [
      'Ko iščeš "plovba z ladjo v Istanbulu", iščeš tisto, kar mesto definira z vode: Bospor. Naša 3-urna plovba z ladjo po Bosporju te pelje mimo vsake glavne istanbulske znamenitosti — palače Dolmabahçe, mošeje Ortaköy, mostu čez Bospor, Rumeli Hisarı, palače Beylerbeyi in Dekliškega stolpa — s popolno turško večerjo in živo zabavo.',
      'V nasprotju z mnogimi turistnimi trajekti 1-urnih plovb, ki pokrivajo manj Bosporja in preskočijo večerjo ter zabavo, je **naša plovba z ladjo v Istanbulu** popolna večerna izkušnja: vkrcanje ob 19:30 na pomolu Kabataş, plovba do polnoči, 10 meze, glavna jed, sladica, sema, ljudski plesi, trebušni ples in DJ. Dobiš tudi nočni razgled kot del plovbe.',
      'Ne glede na to, ali imaš en večer ali cel teden v Istanbulu, **ta plovba z ladjo v Istanbulu** opravi delo. 4,8★ s strani več kot 11 317 popotnikov, licencirano pri TÜRSAB (A-17672), halal certificiran meni in plačaš na ladji — brez finančne obveze, dokler nisi zadovoljen z izkušnjo.'
    ],
    highlights: [
      { title: 'Vse glavne znamenitosti Bosporja', desc: 'Dolmabahçe, Çırağan, mošeja Ortaköy, most čez Bospor, Bebek, Rumeli Hisarı, most FSM, palača Beylerbeyi, Üsküdar, Dekliški stolp. Obe obali, evropska in azijska, v eni plovbi.' },
      { title: 'Večerja + predstava vključeno', desc: 'Ne le plovba — popolna turška večerja z več hodi, predstava ljudskih plesov v živo, sema, trebušni ples, DJ. To naredi 3 ure zabavnih, ne le ogled znamenitosti.' },
      { title: 'Večerni odhod (najboljša osvetlitev)', desc: 'Odhod ob 20:30 ujame Bospor osvetljen v polnem sijaju — mostovi, palače, mošeje vse osvetljene. Bolj dramatično kot dnevne ture, ki kažejo iste znamenitosti v ravni svetlobi.' },
      { title: 'Enostavna rezervacija, enostavno plačilo', desc: 'Rezerviraj z obrazcem na tej strani v manj kot 1 minuti. Plačaš na ladji — brez predplačila. Hotelski prevoz na voljo od +€{p.transfer}/osebo. Brezplačna odpoved 2 uri pred odhodom.' }
    ],
    faq: [
      { q: 'Katera je najboljša plovba z ladjo v Istanbulu?', a: 'Večerna plovba po Bosporju je dosledno uvrščena #1. Pokriva vse glavne znamenitosti, vključuje večerjo in zabavo ter pluje zvečer, ko so znamenitosti osvetljene. Druge možnosti (hop-on trajekti, jutranji turistični čolni) pokrivajo krajše poti, preskočijo večerjo in ne vključujejo zabave. Za en večer v Istanbulu je to najbolj popolna plovba z ladjo.' },
      { q: 'Kako dolgo traja plovba z ladjo v Istanbulu?', a: '3 ure. Vkrcanje od 19:30 na pomolu Kabataş, odhod 20:30, vrnitev ~23:30. Pokriva Bospor od Dolmabahçeja do Rumeli Hisarı in nazaj. Dovolj časa za popolno večerjo + predstavo brez utrujenosti.' },
      { q: 'Koliko stane plovba z ladjo v Istanbulu?', a: 'Naša plovba z ladjo in večerja: Standard €{p.dinnerStd}/osebo (od €{p.dinnerStdOriginal}), VIP s premium menijem €{p.dinnerVip}/osebo (od €{p.dinnerVipOriginal}). 0–3 let brezplačno, 4–8 let polovična cena. Plačaš na ladji. Alkohol in hotelski prevoz sta izbirna dodatka.' },
      { q: 'Od kod odplujejo plovbe z ladjo v Istanbulu?', a: 'Naše plovilo odpluje s pomola Kabataş, evropskega centra Istanbula, blizu palače Dolmabahçe. Dostopno s tramvajem T1 (postaja Kabataş), taksijem 15 min iz Taksima ali peš 20 min iz Taksima. Hotelski prevoz na voljo iz osrednjih sosesk za +€{p.transfer}/osebo.' },
      { q: 'Ali je ta plovba primerna za družine z otroki?', a: 'Da — zelo družinam prijazno. Otroci 0–3 let brezplačno, 4–8 let 50 % popust. Pokrit notranji prostor, otroški meni na zahtevo in zabava (sema, ljudski plesi), ki je očarljiva za otroke. Veliko družin z vsega sveta rezervira to plovbo.' },
      { q: 'Ali moram kaj prinesti na plovbo z ladjo?', a: 'Potni list ali osebno (za registracijo na krovu), lahek suknjič (krov se lahko ohladi), udobne čevlje, če nameravaš plesati. Pametni telefon za fotografije. Gotovino ali kartico za plačilo na ladji (oba sprejeta). Vse drugo — hrana, pijača, zabava — je na krovu.' }
    ],
    cta: {
      primary: 'Rezerviraj plovbo z ladjo · Plačaš na ladji',
      secondary: '3 ure · Večerja + predstava · Od €{p.dinnerStd}/osebo · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Pot po Bosporju od €{p.dinnerStd} — večerna plovba Istanbul + predstava',
      description: '3-urna pot po Bosporju: turška večerja, ljudska predstava v živo, osvetljeni nočni pogledi. Odhod 20:30 iz Kabataşa. Brezplačna odpoved, plačaš na ladji. 11 317 ocen.'
    },
    hero: {
      h1: 'Pot po Bosporju',
      subtitle: 'Najbolj priporočena pot po Bosporju s strani popotnikov — 3-urna večerna plovba, ki pokriva vsako glavno istanbulsko znamenitost, s hrano, zabavo in nočnimi pogledi.',
      badge: 'Popolna izkušnja Bosporja · Večerni odhod'
    },
    intro: [
      '**Pot po Bosporju** lahko pomeni 1-urni turistični trajekt ali popolno večerno plovbo z večerjo — mi delamo slednje in večina popotnikov meni, da je vrednejša. 3 ure, €{p.dinnerStd}/osebo, vključeno z večerjo in zabavo. Ne pluješ le mimo znamenitosti — ješ, gledaš predstavo in uživaš v večeru.',
      'Pot **naše poti po Bosporju** pokriva vse, kar je vredno videti: palačo Dolmabahçe (otomanska rezidenca sultanov iz 19. stoletja), mošejo Ortaköy (ena najbolj fotografiranih mošej v Istanbulu), most čez Bospor (menja barve ponoči), Rumeli Hisarı (zgradil Fatih Sultan Mehmet leta 1452), palačo Beylerbeyi (azijska obala) in Dekliški stolp na majhnem otoku. Vse pojasnjuje angleško govoreča posadka.',
      'Ne glede na to, ali si v Istanbulu 24 ur ali en teden, je to **pot po Bosporju**, ki ti daje največ v enem večeru. Ocenjeno z 4,8★ s strani več kot 11 317 popotnikov, licencirano pri TÜRSAB A-17672, halal prijazen meni, plačaš na ladji — brez tveganja predplačila.'
    ],
    highlights: [
      { title: 'Cel Bospor v enem', desc: 'Evropska obala (Dolmabahçe, Ortaköy, Rumeli Hisarı), azijska obala (Beylerbeyi, Üsküdar), oba mostova čez Bospor, Dekliški stolp. Vsaka glavna znamenitost vidna v 3 urah.' },
      { title: 'Večerja + zabava vključeno', desc: 'Ne le turistični trajekt — popolna turška večerja z meze, glavno jedjo, sladico. Predstava ljudskih plesov v živo, sema, trebušni ples, DJ. Zabavna vrednost onkraj le razgleda.' },
      { title: 'Večer = najboljša osvetlitev', desc: 'Dnevne plovbe po Bosporju ti kažejo znamenitosti v ravni svetlobi. Večerne plovbe jih ujamejo na dramatičnem vrhuncu: sijoče palače, obarvani mostovi, mošeje, odsevane v temni vodi. Boljše fotografije, bolj dramatično.' },
      { title: 'Od €{p.dinnerStd} — plačaš na ladji', desc: 'Predplačilo ni potrebno. Plačaš na ladji (gotovina ali kartica). Brezplačna odpoved do 2 uri pred odhodom. 0–3 let brezplačno, 4–8 let polovična cena. Pregledne cene.' }
    ],
    faq: [
      { q: 'Katere so najboljše poti po Bosporju v Istanbulu?', a: 'Večerne plovbe z večerjo so dosledno na vrhu. Dnevne možnosti (1-urne krožne plovbe, 2-urne turistne ladje) kažejo manj in ne vključujejo večerje. Glede vrednosti je težko premagati 3-urno plovbo z večerjo, predstavo in osrednjim mestom srečanja. Cena naše plovbe €{p.dinnerStd} odpravi potrebo po ločeni večerji + zabavi.' },
      { q: 'Kako dolgo traja pot po Bosporju?', a: 'Naša pot po Bosporju traja skupaj 3 ure (odhod 20:30, vrnitev 23:30). Obstajajo krajše možnosti (1-urne turistne trajeke, 90-minutne plovbe), vendar preskočijo večerjo in zabavo. Za popolno večerno izkušnjo je 3 ure idealno — dovolj, da vidiš vse brez utrujenosti.' },
      { q: 'Ali je pot po Bosporju vredna?', a: 'Da — skoraj vsi istanbulski potovalni vodniki uvrščajo "plovbo po Bosporju" v top 5 obveznih stvari. Mesto je zgrajeno okoli te ožine; če nisi videl Bosporja z vode, pravzaprav nisi videl Istanbula. Naša specifična večerna plovba doda večerjo in zabavo, tako da postane popoln večer namesto le ogleda.' },
      { q: 'Kaj naj vzamem na pot po Bosporju?', a: 'Potni list ali osebno (za registracijo na krovu), lahek suknjič (večerni krov je hladen), pametni telefon/kamero, udobne čevlje za plesišče. Gotovino ali kartico za plačilo. Vse drugo je na krovu. Hotelski prevoz na voljo za +€{p.transfer}/osebo, če ne želiš uporabiti javnega prevoza.' },
      { q: 'Ali je pot po Bosporju primerna za otroke?', a: 'Da — zelo družinam prijazno. Otroci 0–3 let brezplačno (prevoz vključen), 4–8 let 50 % popust. Pokrit notranji prostor, otroški meni na zahtevo in nežna, očarljiva zabava. Veliko družin rezervira to plovbo kot vrhunec turneje po Istanbulu.' },
      { q: 'Kakšni so postanki na poti po Bosporju?', a: 'Je neprekinjena plovba — ne ustavljamo se ob znamenitostih (brez izkrcavanja). Plovilo pluje mimo vsake znamenitosti, posadka pojasni, kaj vidiš, ti se sprostiš pri mizi ali greš ven na odprt krov za fotografije. Brez vrst, brez hoje, brez stresnega načrtovanja — le 3 mirne ure na vodi.' }
    ],
    cta: {
      primary: 'Rezerviraj pot po Bosporju · Plačaš na ladji',
      secondary: '3 ure · Večerja + predstava · Brezplačna odpoved 2 uri prej · Licencirano pri TÜRSAB',
      tertiary: 'Preveri razpoložljivost'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Vstopnice za plovbo po Bosporju od €{p.dinnerStd} — plačaš na ladji',
      description: 'Vstopnice za plovbo po Bosporju neposredno. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Brez predplačila, plačaš na ladji. Brezplačna odpoved do 2 uri prej.'
    },
    hero: {
      h1: 'Vstopnice za plovbo po Bosporju',
      subtitle: 'Preskoči provizije posrednikov — kupi vstopnice za plovbo po Bosporju neposredno pri nas. Brez predplačila, plačaš na ladji, brezplačna odpoved do 2 uri pred odhodom.',
      badge: 'Neposredna rezervacija · Brez predplačila · 40 % POPUST'
    },
    intro: [
      'Iščeš **vstopnice za plovbo po Bosporju**? Kupi neposredno. Naše vstopnice so €{p.dinnerStd} (Standard) ali €{p.dinnerVip} (VIP) — 40 % popust na redno ceno (€{p.dinnerStdOriginal} in €{p.dinnerVipOriginal}). Tretje rezervacijske strani običajno dodajo 20–40 % provizije. Z neposredno rezervacijo prihraniš — in še vedno plačaš na ladji.',
      'Postopek za **vstopnice za plovbo po Bosporju**: izpolni obrazec na tej strani v manj kot 1 minuti (datum, število gostov, paket, kontakt), takoj potrdimo prek WhatsAppa / Telegrama, pridi na pomol Kabataş ob 19:30, plačaš na ladji, uživaj v 3-urni večerni plovbi. Brez fizične vstopnice za tisk, brez kupona za prejem po elektronski pošti — potrditev je tvoja vstopnica.',
      'Ne glede na to, ali rezerviraš nocojšnjo večerno plovbo ali na določen datum naslednji teden, so **neposredne vstopnice za plovbo po Bosporju** najhitrejši način. Ocenjeno z 4,8★, licencirano pri TÜRSAB (A-17672), halal certificiran meni in podpira dodatke za hotelski prevoz in alkohol.'
    ],
    highlights: [
      { title: 'Neposredna rezervacija — brez provizij posrednikov', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Tretje strani zaračunajo €30–80+ za isto plovbo. Prihrani z neposredno rezervacijo pri nas. Brez skritih dajatev, brez dodatkov za provizije.' },
      { title: 'Plačaš na ladji — brez predplačila', desc: 'Rezerviraj mesto zdaj, plačaj, ko se vkrcaš. Sprejeta gotovina ali kartica. Brezplačno, če odpoveš 2+ uri pred odhodom. Brez finančnega tveganja pri zgodnji rezervaciji.' },
      { title: 'Potrditev v manj kot 1 minuti', desc: 'Izpolni obrazec → potrdimo prek WhatsAppa / Telegrama. Brez PDF kupona za tiskanje iz elektronske pošte. Naše sporočilo je tvoja vstopnica. Pridi na pomol ob 19:30.' },
      { title: 'Trenutna lansirna cena 40 % POPUST', desc: 'Standard od €{p.dinnerStdOriginal}, zdaj €{p.dinnerStd}. VIP od €{p.dinnerVipOriginal}, zdaj €{p.dinnerVip}. 40 % popust, ker rezerviraš neposredno. Ni časovno omejen trik — to je naša standardna cena neposredne rezervacije.' }
    ],
    faq: [
      { q: 'Koliko stanejo vstopnice za plovbo po Bosporju?', a: 'Standard: €{p.dinnerStd}/osebo (redna €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/osebo (redna €{p.dinnerVipOriginal}). Vključuje 3-urno plovbo, turško večerjo z več hodi, ljudsko predstavo v živo, neomejene brezalkoholne pijače. 0–3 let brezplačno, 4–8 let 50 % popust. Plačaš na ladji — brez predplačila.' },
      { q: 'Kje lahko kupim vstopnice za plovbo po Bosporju?', a: 'Neposredno s te strani — izpolni obrazec za rezervacijo, takoj potrdimo prek WhatsAppa / Telegrama. Plačaš na ladji. Tretje platforme (Viator, GetYourGuide, Klook) prav tako prodajajo vstopnice, vendar običajno zaračunajo €30–80+ — to je doplačilo posrednikov. Neposredno je najceneje in najhitreje.' },
      { q: 'Ali moram natisniti vstopnico za plovbo po Bosporju?', a: 'Ne — fizična vstopnica ali kupon ni potreben. Po rezervaciji ti pošljemo potrditev prek WhatsAppa (ali Telegrama) z mestom srečanja, časom in imenom rezervacije. Le pokaži telefon na pomolu. To je vse.' },
      { q: 'Ali lahko odpovem ali vrnem vstopnico za plovbo po Bosporju?', a: 'Da — brezplačna odpoved do 2 uri pred odhodom. Le piši na WhatsApp. Ker še nisi plačal (plačaš na ladji), vračilo denarja ni potrebno — le ne pridi, brez stroškov. Veliko bolj prilagodljivo kot vnaprej plačane vstopnice tretjih strani.' },
      { q: 'Ali so vstopnice za plovbo po Bosporju na voljo isti dan?', a: 'Pogosto da, zlasti med tednom. Vikendi in prazniki se zapolnijo hitreje. Preveri razpoložljivost prek obrazca za rezervacijo — posodablja se v realnem času. Rezervacija v zadnjem trenutku je običajno možna nekaj ur pred odhodom ob 20:30. Za nujne zadeve WhatsApp.' },
      { q: 'Ali so otroške vstopnice za plovbo po Bosporju brezplačne?', a: 'Otroci **0–3 leta povsem brezplačno** (brez stroškov, brez skritih dajatev, prevoz vključen). **4–8 let 50 % popust** (€{p.dinnerStd}/2 = €12 pri Standardu). **9+ let polna cena odraslega.** Pregledno določene cene — brez "trika za dojenčke".' }
    ],
    cta: {
      primary: 'Kupi vstopnice · Plačaš na ladji',
      secondary: 'Neposredna rezervacija · Brez predplačila · Brezplačna odpoved 2 uri prej',
      tertiary: 'Preveri razpoložljivost'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bospor v zadnjem trenutku od €{p.dinnerStd} — rezerviraj danes, plačaš na ladji',
      description: 'Rezerviraj plovbo po Bosporju isti dan. Potrditev na WhatsAppu v nekaj minutah. Odhod 20:30 iz Kabataşa. Brezplačna odpoved, plačaš na ladji. 11 317 ocen.'
    },
    hero: {
      h1: 'Plovba po Bosporju v zadnjem trenutku',
      subtitle: 'Razpoložljivost za nocoj, potrjena v nekaj minutah. Brez predplačila, brez vnaprej natisnjenega kupona — le pridi na pomol in uživaj v večeru.',
      badge: 'Rezervacija v zadnjem trenutku · Potrjeno v nekaj minutah · Plačaš na ladji'
    },
    intro: [
      'Si pristal v Istanbulu danes popoldne in želiš odličen večer nocoj? **Plovba po Bosporju v zadnjem trenutku** deluje. Posebej rezerviramo sedeže za rezervacije v zadnjem trenutku, saj vemo, da se veliko popotnikov odloča zjutraj. Izpolni obrazec tukaj, potrdimo prek WhatsAppa v nekaj minutah, pridi na pomol Kabataş ob 19:30, plačaš na ladji, uživaj.',
      '**Naša plovba po Bosporju v zadnjem trenutku** ima isti večerni program kot vnaprejšnje rezervacije: 3 ure na vodi (20:30–23:30), turška večerja z več hodi, predstava ljudskih plesov v živo, sema, trebušni ples, DJ. Osvetljena palača Dolmabahçe, mošeja Ortaköy, most čez Bospor — isti ikonični pogledi. Ista cena €{p.dinnerStd} Standard ali €{p.dinnerVip} VIP.',
      'Odpoved istega dne je brezplačna do 2 uri pred odhodom, ker **plačaš na ladji** pomeni, da še ničesar nisi obljubil. Rezervirano ob 14:00 in si si premislil do 19:00? Le piši na WhatsApp — brez vračila, brez težav. To je prilagodljivost **istanbulske ture v zadnjem trenutku**, ki jo popotniki cenijo.'
    ],
    highlights: [
      { title: 'Sedeži še na voljo za nocoj', desc: 'Rezerviramo 5–10 sedežev na dan za rezervacije v zadnjem trenutku. Preveri zgornji obrazec — razpoložljivost v realnem času. Če je današnja plovba polna, je jutrišnja običajno odprta.' },
      { title: 'Potrditev v manj kot 5 minutah', desc: 'Izpolni obrazec → WhatsApp/Telegram sporočilo o potrditvi → končano. Brez čakanja na elektronski kupon, brez tiskanja QR kode. Naše sporočilo je tvoja vstopnica.' },
      { title: 'Nič plačila, dokler nisi na krovu', desc: 'Plačaš na ladji, gotovina ali kartica. Če ne prideš (sprememba načrta, bolezen, vreme), brez stroškov. Brezplačna odpoved do 2 uri pred odhodom. Resnično prijazno za zadnji trenutek.' },
      { title: 'Hotelski prevoz istega dne pogosto na voljo', desc: 'Hotelski prevoz običajno zahteva 24-urno obvestilo, vendar za rezervacije v zadnjem trenutku med 14:00–18:00 lahko pogosto uredimo prevzem za +€{p.transfer}/osebo. Za nujne zahteve po prevozu WhatsApp.' }
    ],
    faq: [
      { q: 'Ali lahko res rezerviram plovbo po Bosporju za nocoj?', a: 'Da — pogosto. Rezerviramo sedeže za rezervacije v zadnjem trenutku. Preveri zgornji obrazec za nocojšnjo razpoložljivost. Če so prosta mesta, lahko rezerviraš do 18:00 (3 ure pred odhodom). Vikendi so bolj zaposleni — rezerviraj prej v dnevu, če je možno.' },
      { q: 'Kako pozno lahko rezerviram?', a: 'Rezervacije ostajajo odprte do 18:00 za plovilo ob 20:30. Po 18:00 piši neposredno na WhatsApp +90 532 244 29 22 — če so prosta mesta, lahko ročno potrdimo. Po 19:30 je zelo zaposleno, razen če si že pri pomolu Kabataş in se lahko hitro vkrcaš.' },
      { q: 'Ali je plovba po Bosporju v zadnjem trenutku dražja?', a: 'Ne — ista cena kot vnaprejšnja rezervacija. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Nimamo "dinamičnega oblikovanja cen" ali doplačil za zadnji trenutek. Isto plovilo, ista večerja, ista predstava, ista cena.' },
      { q: 'Kaj se zgodi, če je današnja plovba polno rezervirana?', a: 'Jutrišnja plovba je običajno odprta — obratujemo 365 dni v letu, vsak dan. Lahko rezerviraš za jutri in si še vedno "zadnji trenutek", kar pomeni, da si se ravnokar odločil. Plovba med tednom ima več prostora kot ob vikendu.' },
      { q: 'Ali lahko uredite hotelski prevoz v zadnjem trenutku?', a: 'Prevoz v zadnjem trenutku je možen do ~18:00 za plovbo ob 20:30. Po 18:00 morda nimamo na voljo voznika — v tem primeru lahko vzameš taksi do pomola Kabataş (15 min iz Taksima, 10 min iz Sultanahmeta, ~€10–15). Osrednje in enostavno.' },
      { q: 'Kaj če sem že pri Kabataşu in se želim vkrcati?', a: 'Če si pri pomolu in so prosta mesta, se lahko le vkrcaš. Piši na WhatsApp ali vprašaj posadko — če je prostor, te dodamo. Ista cena, plačaš na ladji. V izrazih turneje se temu reče "walk-on" — tukaj deluje.' }
    ],
    cta: {
      primary: 'Rezerviraj za nocoj · Plačaš na ladji',
      secondary: 'Rezervacija v zadnjem trenutku · Potrjeno v nekaj minutah · Brezplačna odpoved 2 uri prej',
      tertiary: 'WhatsApp za nujne rezervacije'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Cena plovbe Istanbul od €{p.dinnerStd} — pregledne cene',
      description: 'Cene plovbe po Bosporju Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Otroci 0–3 brezplačno, 4–8 polovična cena. Pregledni dodatki.'
    },
    hero: {
      h1: 'Cena plovbe Istanbul',
      subtitle: 'Pregledne cene, brez skritih dajatev. Standard €{p.dinnerStd}/osebo, VIP €{p.dinnerVip}/osebo — in plačaš na ladji, ne zdaj.',
      badge: 'Pregledno · 40 % POPUST neposredno · 0–3 let brezplačno'
    },
    intro: [
      '**Cene plovbe v Istanbulu** se zelo razlikujejo — od €15 proračunskih trajektov, ki preskočijo večerjo, do €150+ resortskih jaht. Naša cena je v sredini in ponuja najboljšo vrednost: €{p.dinnerStd} za Standard z popolno 3-urno večerno plovbo in predstavo, €{p.dinnerVip} za VIP s premium izkušnjo v prvi vrsti. Brez skritih dajatev, brez presenečenj.',
      'Podroben pregled **cene plovbe v Istanbulu**, ker je preglednost pomembna:\n\n- **Standard večerna plovba**: €{p.dinnerStd}/osebo (od €{p.dinnerStdOriginal}, 40 % popust). Vključuje 3-urno plovbo, 10 meze, glavno jed, sladico, neomejene brezalkoholne pijače, predstavo v živo.\n- **VIP večerna plovba**: €{p.dinnerVip}/osebo (od €{p.dinnerVipOriginal}). Dodaja sedeže v prvi vrsti, 15+ meze, goveji file/rib-eye, prednostno postrežbo.\n- **0–3 let**: brezplačno. 4–8 let: 50 % popust. 9+ let: polna cena.\n\nDodatki (izbirni):\n- 2 kozarca alkohola: +€{p.alcohol2}/osebo\n- Neomejen lokalni alkohol: +€{p.unlimited}/osebo\n- Hotelski prevoz v obe smeri: +€{p.transfer}/osebo\n- Romantična postavitev mize: +€{p.romantic}/miza',
      'In pomembno: **plačaš na ladji**. Ne obljubiš niti centa, dokler nisi na krovu. Brezplačna odpoved do 2 uri pred odhodom. Brez obveze, brez tveganja — najbolj **uporabniku prijazna cena plovbe v Istanbulu**, kar jih boš našel.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (od €{p.dinnerStdOriginal})', desc: '40 % popust na redno ceno. 3-urna plovba, popolna turška večerja, predstava v živo, neomejene brezalkoholne pijače. Najbolj priljubljen paket — pokriva vse, kar potrebuješ za lep večer.' },
      { title: 'VIP: €{p.dinnerVip} (od €{p.dinnerVipOriginal})', desc: '40 % popust na redno ceno. Doda sedeže v prvi vrsti, 15+ meze, premium glavno jed (goveji file, rib-eye), prednostno postrežbo natakarja. Za posebne priložnosti ali premium popotnike.' },
      { title: 'Cene za otroke: 0–3 brezplačno, 4–8 polovična cena', desc: '0–3 povsem brezplačno (brez stroškov). 4–8 s 50 % popustom na ceno odraslega. 9+ polna cena odraslega. Pregledno, brez trikov z družinskimi cenami. Prevoz je tudi brezplačen za 0–3.' },
      { title: 'Dodatki — samo, ko jih želiš', desc: 'Alkohol: €{p.alcohol2} ali €{p.unlimited}/osebo. Prevoz: €{p.transfer}/osebo. Romantična miza: €{p.romantic}/miza. Vse izbirno, ne v paketu. Izberi le, kar potrebuješ.' }
    ],
    faq: [
      { q: 'Koliko stane plovba v Istanbulu?', a: 'Večerna plovba Standard: €{p.dinnerStd}/osebo (redna €{p.dinnerStdOriginal}, 40 % popust). VIP: €{p.dinnerVip}/osebo (redna €{p.dinnerVipOriginal}, 40 % popust). 0–3 let brezplačno, 4–8 let polovična cena. Plačaš na ladji — brez predplačila. Brezplačna odpoved do 2 uri pred odhodom.' },
      { q: 'Ali so v ceni plovbe v Istanbulu skrite dajatve?', a: 'Ne. Cena vključuje: 3-urno plovbo, popolno večerjo (meze, predjed, glavno jed, sladico), neomejene brezalkoholne pijače, predstavo v živo, davke. Izbirni dodatki (alkohol, prevoz, romantična miza) so ločeni in pregledno ovrednoteni — plačaš le za to, kar dodaš. Brez "servisne dajatve", "pristaniške dajatve", nepričakovanih doplačil.' },
      { q: 'Zakaj je cena plovbe v Istanbulu 40 % popust — je to trik?', a: 'Brez trika. Redna cena €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} je tisto, kar zaračunajo strani tretjih oseb (Viator, GetYourGuide, Klook) — s svojimi provizijami. Rezerviraj neposredno in dobiš €{p.dinnerStd}/€{p.dinnerVip}. To je 40 % razlika. Brez časovno omejenih ali dinamičnih cenovnih trikov.' },
      { q: 'Kako se cena plovbe v Istanbulu primerja z drugimi možnostmi?', a: 'Krožni trajekti: €5–10, 1 ura, brez večerje, brez zabave, le ogled. Proračunsko zapakirane večerne plovbe: €20–30, prenatrpane, povprečna hrana, kratka predstava. Naš Standard (€{p.dinnerStd}): 3 ure, popolna večerja, popolna predstava, zasebna miza, licencirano pri TÜRSAB. VIP (€{p.dinnerVip}): prva vrsta, premium meni. Resortske jahte: €100–150+, pretirano za solo/pare.' },
      { q: 'Ali moram ceno plovbe v Istanbulu plačati vnaprej?', a: 'Ne — **plačaš na ladji**. Rezerviraj zdaj (1-minutni obrazec), potrdimo na WhatsAppu, pridi ob 19:30 in plačaj na ladji (gotovina ali kartica). Brezplačna odpoved do 2 uri prej. Brez finančne obveze, dokler nisi zadovoljen.' },
      { q: 'Ali so popusti za skupine pri ceni plovbe v Istanbulu?', a: 'Za skupine 10+ lahko ponudimo 5–10 % popust — piši na WhatsApp z velikostjo skupine. Za 25+ razmisli o zasebni plovbi (celotno plovilo za tvojo skupino, meni po meri). Za 2–9 oseb veljajo standardne cene — že 40 % popust na redno ceno.' }
    ],
    cta: {
      primary: 'Rezerviraj · Plačaš na ladji',
      secondary: 'Od €{p.dinnerStd}/osebo · 0–3 let brezplačno · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Ogled Bosporja od €{p.dinnerStd} — istanbulske znamenitosti z vode',
      description: 'Plovba ogleda Bosporja: Dolmabahçe, Ortaköy, most čez Bospor, Rumeli, Beylerbeyi, Dekliški stolp. 3-urna večerna plovba z večerjo. Brezplačna odpoved, plačaš na ladji.'
    },
    hero: {
      h1: 'Ogled Bosporja',
      subtitle: 'Vse ikonične znamenitosti Istanbula — z vode, ponoči, z večerjo. Ena 3-urna plovba pokriva Dolmabahçe, mošejo Ortaköy, most čez Bospor, Rumeli Hisarı in več.',
      badge: '10+ znamenitosti · Evropska in azijska obala · 3 ure'
    },
    intro: [
      '**Ogled Bosporja** z vode premaga vsako turo z avtobusom. Bospor je najbolj zgodovinska ladijska pot mesta — otomanski sultani, bizantinski cesarji, grški trgovci in ruske vojne ladje, vsi so plovbili tukaj. Danes naša 3-urna plovba, z razlagami angleško govoreče posadke, pluje mimo vsake glavne istanbulske znamenitosti, ki definira silhueto mesta.',
      'Pot **naše plovbe ogleda Bosporja** (večerni odhod, 20:30–23:30):\n\n1. **Palača Dolmabahçe** — otomanska rezidenca iz 19. stoletja, ponoči osvetljena\n2. **Palača Çırağan** — zdaj luksuzni hotel, kraljeva zgodovina\n3. **Mošeja Ortaköy** — ena najbolj fotografiranih mošej v Istanbulu, ob vodi\n4. **Most čez Bospor** — ponoči menja med modro, vijolično, zlato\n5. **Bebek** — elegantna soseska na evropski obali\n6. **Rumeli Hisarı** — zgradil Fatih Sultan Mehmet leta 1452 pred padcem Konstantinopla\n7. **Most Fatih Sultan Mehmet** — drugi most čez Bospor, dramatičen lok\n8. **Palača Beylerbeyi** — azijska obala, otomanska poletna rezidenca\n9. **Üsküdar** — azijska istanbulska obala, tradicionalna soseska\n10. **Dekliški stolp** — stolp na majhnem otoku, eden najbolj romantičnih simbolov Istanbula',
      'Vključeni sta večerja in zabava — ne ločeno — tako da **ogled Bosporja** postane popoln večer. Turška večerja z več hodi, predstava ljudskih plesov v živo, sema, trebušni ples, DJ. Ocenjeno z 4,8★ s strani več kot 11 317 popotnikov, licencirano pri TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ glavnih istanbulskih znamenitosti', desc: 'Palača Dolmabahçe, palača Çırağan, mošeja Ortaköy, most čez Bospor, Rumeli Hisarı, most FSM, palača Beylerbeyi, Üsküdar, Dekliški stolp. Vsaka glavna istanbulska znamenitost v eni plovbi.' },
      { title: 'Obe obali, evropska in azijska', desc: 'Evropska obala na poti tja (Dolmabahçe → Rumeli Hisarı), azijska obala na poti nazaj (Beylerbeyi → Üsküdar). Dve celini v eni 3-urni plovbi — le Istanbul ti to omogoča.' },
      { title: 'Večerna plovba = osvetljeni pogledi', desc: 'Dnevne plovbe kažejo znamenitosti v ravni svetlobi. Večerne plovbe jih ujamejo na dramatičnem vrhuncu: zlato rumene palače, obarvani mostovi, mošeje, odsevane v temni vodi. Boljše fotografije, bolj nepozabno.' },
      { title: 'Vključena večerja + predstava', desc: 'Ogled + večerja + zabava v enem paketu. Ni treba načrtovati ločene večerje po plovbi. Od €{p.dinnerStd}/osebo, plačaš na ladji, skupaj 3 ure.' }
    ],
    faq: [
      { q: 'Katere znamenitosti Bosporja bom videl?', a: 'V vrstnem redu: palača Dolmabahçe, palača Çırağan, mošeja Ortaköy, most čez Bospor, soseska Bebek, Rumeli Hisarı, most Fatih Sultan Mehmet, Anadolu Hisarı, palača Beylerbeyi, Kuzguncuk, Üsküdar in Dekliški stolp (viden v daljavi). 10+ glavnih znamenitosti v eni 3-urni poti.' },
      { q: 'Ali je ogled Bosporja boljši podnevi ali ponoči?', a: 'Različne izkušnje. Dan: jasnejši pogled na arhitekturne podrobnosti, svetleje za fotografije. Noč: dramatična osvetlitev, mistično vzdušje, manj ladij na vodi. Večina popotnikov ima raje nočno plovbo, ker znamenitosti izgledajo bolj čarobne — in večerja + predstava jo naredita za popoln večer.' },
      { q: 'Ali se plovilo ustavi pri znamenitostih za fotografije?', a: 'Je neprekinjena plovba — brez postankov (brez izkrcavanja). Plovilo pluje mimo vsake znamenitosti, posadka pojasni, kaj vidiš, lahko greš ven na odprt krov za fotografije. Brez vrst, brez hoje, brez stresnega načrtovanja — le neprekinjena 3-urna priložnost za fotografiranje.' },
      { q: 'Ali posadka komentira med ogledom?', a: 'Da — angleško govoreča posadka daje kratke komentarje, ko gremo mimo vsake glavne znamenitosti (zgodovina, arhitektura, dejstva). Ni vodeno predavanje, bolj prijazna razlaga med jedjo. Za poglobljeno zgodovino priporočamo kombinacijo s hojo po Istanbulu podnevi.' },
      { q: 'Kako se ogled Bosporja razlikuje od hop-on trajekta?', a: 'Hop-on trajekti (krožni trajekti Şehir Hatları): €5–10, 1–2 uri, osnovno, brez večerje, prenatrpani. Naša plovba: €{p.dinnerStd}, 3 ure, popolna večerja, predstava v živo, zasebna miza, angleški komentar. Za resen in udoben ogled je večerna plovba boljša. Za hiter in cenovno ugoden prevoz deluje krožni trajekt.' },
      { q: 'Ali lahko fotografiram znamenitosti s plovila?', a: 'Da — vsekakor. Odprt krov ima odlične točke za fotografiranje. Znamenitosti se mimo plovila 100–200 metrov. Fotografije s pametnim telefonom so super; uporabniki DSLR/brezzrcalnih kamer lahko dobijo veličastne posnetke, zlasti pri prehodu iz zlate ure v modro uro zgodaj zvečer.' }
    ],
    cta: {
      primary: 'Rezerviraj plovbo ogleda · Plačaš na ladji',
      secondary: '10+ znamenitosti · Večerja + predstava · Brezplačna odpoved 2 uri prej',
      tertiary: 'Razpoložljivost nocoj'
    }
  }

};
