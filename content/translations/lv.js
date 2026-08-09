/**
 * Latvian translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 * Informal register (tu/tev).
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Vakariņas pa Bosforu no €{p.dinnerStd} — nakts kruīzs Stambulā + šovs',
      description: '3 stundu vakariņu kruīzs pa Bosforu: turku vairāku ēdienu ēdienkarte un dzīvs tautas šovs. Atiešana 21:00 no Kabataş. Bezmaksas atcelšana, maksā uz kuģa.'
    },
    hero: {
      h1: 'Vakariņu kruīzs pa Bosforu Stambulā',
      subtitle: 'Trīs stundas ar dzīvu izklaidi, dāsnas turku vairāku ēdienu vakariņas un visiespaidīgākie nakts skati pa Bosforu.',
      badge: '4,8★ · 11 317 atsauksmes'
    },
    intro: [
      '**Vakariņu kruīzs pa Bosforu** ir Stambulas ikoniskākā vakara pieredze. Tūre sākas plkst. 20:00 pie Kabataş piestātnes un kuģo zem izgaismotā Bosfora un Fatih Sultan Mehmet tilta, piedāvājot turku vairāku ēdienu vakariņas, dzīvas tautas dejas, austrumu deju un DJ programmu, kas piepilda klāju līdz plkst. 23:00.',
      'Atšķirībā no parastajiem kuģiem, kas iezīmē Stambulas vakara ainavu, **mūsu Bosfora vakariņu kruīzs** ir TÜRSAB licencēts (A-17672) un saņēmis 4,8★ no vairāk nekā 11 317 ceļotājiem. Grupas turam nelielas, servisu siltu — un, tā kā maksā uz kuģa, iepriekš rezervēt nav nekāda riska.',
      'Vienalga, vai svini jubileju, meklē premium vakaru Stambulā ar ģimeni vai vēlies pilsētas fotogēnāko saulrieta-uz-nakti pāreju — šis ir vakariņu kruīzs, ko Stambulas vietējie iesaka pirmajā vietā.'
    ],
    highlights: [
      { title: 'Turku vairāku ēdienu vakariņas', desc: '10 meze veidi, silta uzkoda (paçanga böreği), galvenā ēdiena izvēle (lasis / jūras asaris / vista / frikadeles / veģetārais), saldējuma kūka desertā, neierobežoti bezalkoholiskie dzērieni.' },
      { title: 'Dzīvas tautas dejas, austrumu deja un DJ', desc: 'Astoņi priekšnesumi: Oba Dombra, Mevlana sema priekšnesums, Sarı Gelin, azerbaidžāņu popūrijs, austrumu deja, Anatolijas popūrijs un gruzīnu-kaukāziešu deja ar nažiem — kam seko dzīvs saksofons un DJ programma visa kruīza laikā.' },
      { title: 'Pilns nakts maršruts pa Bosforu', desc: 'Kabataş → Dolmabahçe → Çırağan pils → Ortaköy mošeja → Bebek → Rumeli Hisarı → FSM tilts → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'No €{p.dinnerStd}/personai — maksā uz kuģa', desc: 'Vakariņu kruīzs €{p.dinnerStd} (sākotnēji €{p.dinnerStdOriginal}). Bez priekšapmaksas. Bezmaksas atcelšana līdz 2 stundām pirms atiešanas.' }
    ],
    faq: [
      { q: 'Kad sākas vakariņu kruīzs pa Bosforu?', a: 'Iekāpšana sākas plkst. 20:00 pie Kabataş piestātnes. Kuģis atiet plkst. 21:00 un atgriežas ap plkst. 00:00. Iesakām ierasties 15–20 minūtes ātrāk, lai apsēstos un atpūstos.' },
      { q: 'Cik maksā vakariņu kruīzs pa Bosforu?', a: 'Vakariņu kruīzs €{p.dinnerStd}/personai (parastā cena €{p.dinnerStdOriginal}). 0–3 gadi bez maksas, 4–9 gadi €5 atlaide. Maksā uz kuģa — bez priekšapmaksas.' },
      { q: 'Vai vakariņu kruīzā ir iekļauts alkohols?', a: 'Neierobežoti bezalkoholiskie dzērieni (ūdens, kola, sula) ir iekļauti cenā. Alkohola pakete ir brīvprātīga: 2 glāzes (vīns, alus, rakı, degvīns, viskijs, džins un citi) +€{p.alcohol2}/personai. Papildu un importētie dzērieni tiek rēķināti atsevišķi uz kuģa.' },
      { q: 'Vai ir pieejama paņemšana no viesnīcas?', a: 'Jā — paņemšana un nogādāšana atpakaļ ir +€{p.transfer}/personai. Apkalpotās zonas: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Yenikapı, Sütlüce un Şişli. Šo iespēju vari izvēlēties rezervācijas veidlapā.' },
      { q: 'Vai vakariņu kruīzs pa Bosforu ir halal?', a: 'Pilnīgi. Visa gaļa uz kuģa ir halal sertificēta. Alkohols ir brīvprātīgs papildinājums (nekad netiek uzspiests viesiem), un galdu izkārtojums dabiski nodala viesus, kas dod priekšroku bezalkohola galdam. Bez papildu maksas piedāvājam arī veģetāros variantus.' },
      { q: 'Ko vajadzētu vilkt mugurā?', a: 'Smart casual. Stambulas vakari var būt vēsi pat vasarā — iesakām vieglu jaku vai šalli. Stingra apģērba koda nav, bet peldkostīms, flip-flops vai sporta apģērbs neatbilst vakariņu atmosfērai.' }
    ],
    cta: {
      primary: 'Rezervē tagad · Maksā uz kuģa',
      secondary: 'Bezmaksas atcelšana līdz 2 stundām pirms atiešanas',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosfors ar bērniem — ģimenes kruīzs no €{p.dinnerStd}/pieaugušajam',
      description: 'Ģimenei draudzīgs vakariņu kruīzs pa Bosforu. Bērni 0–3 bez maksas, 4–9 puscena. Droša iekštelpu zona, bērnu ēdienkarte.'
    },
    hero: {
      h1: 'Kruīzs pa Bosforu ar bērniem',
      subtitle: 'Vakars pa Bosforu, kas pielāgots ģimenēm ar bērniem — vakariņas, izklaide un droša, ērta atmosfēra.',
      badge: 'Ģimenei draudzīgs · Halal · 0–3 gadi bez maksas'
    },
    intro: [
      '**Kruīzs pa Bosforu ar bērniem** ir Stambulas ģimenēm draudzīgākais vakara variants. Mēs uzņemam desmitiem ģimeņu katru vakaru — esam padomājuši par katru detaļu, lai mazākajiem būtu ērti: pārklāta iekštelpu zona siltuma saglabāšanai, pieejama bērnu ēdienkarte (vienkārša grilēta vista, makaroni, neierobežoti bezalkoholiskie dzērieni) un agrā iekāpšana, lai izvairītos no novēlotas noguruma.',
      'Atšķirībā no tikai pieaugušo kuģiem, **mūsu Bosfora ģimenes vakariņu kruīzs** paliek silts un iekļaujošs. **Bērni 0–3 gadi bez maksas** (transfērs iekļauts), 4–9 gadi saņem **€5 atlaidi**, 10+ gadi maksā pilnu cenu — bez slēptām izmaksām. Dzīvās tautas dejas, austrumu deja un sema priekšnesums ir ģimenei draudzīga izklaide, nevis naktsklubs.',
      'Vienalga, vai esi Stambulā garajā nedēļas nogalē ar mazuļiem vai ved pusaudžus pirmajā Eiropas braucienā — šī ir tūre, ko iesaka Stambulas ģimenes. Droša, halal sertificēta, TÜRSAB licencēta un saņēmusi 4,8★ no vairāk nekā 11 317 ceļotājiem.'
    ],
    highlights: [
      { title: '0–3 gadi pilnīgi bez maksas', desc: 'Mazuļiem un maziem bērniem nekādas maksas. 4–9 gadi maksā €5 no pieaugušā cenas. No 10 gadiem pilna pieaugušā cena. Caurspīdīgi, bez pārsteigumiem.' },
      { title: 'Pārklāta iekštelpu zona', desc: 'Pilnībā pārklāta un apsildīta vēsajos mēnešos. Bērni paliek silti un pasargāti no vēja. Atklātais klājs pieejams, kad laikapstākļi ir labi — izvēle ir tava.' },
      { title: 'Bērnu ēdienkarte pēc pieprasījuma', desc: 'Vienkārša grilēta vista, makaroni, maize un dārzeņi — bez papildu maksas. Neierobežoti bezalkoholiskie dzērieni (kola, sula, ūdens). Paziņo iepriekš — bez pikantajiem meze atklājumiem mazākajiem.' },
      { title: 'Droša ģimenes izklaide', desc: 'Sema priekšnesums (saistošs bērniem), Oba Dombra un tautas dejas no Anatolijas, Azerbaidžānas un Kaukāza — tostarp iespaidīgā deja ar nažiem — kā arī dzīva turku mūzika un saksofona un DJ programma. Viss ģimenei draudzīgs — bez pieaugušo satura. Bērni bieži dejo līdzi.' }
    ],
    faq: [
      { q: 'Vai Bosfora kruīzs ir drošs maziem bērniem?', a: 'Jā — mūsu kuģis ir TÜRSAB licencēts, tam ir pārklāta iekštelpu zona ar drošiem logiem, pieejamas glābšanas vestes visos izmēros un profesionāla komanda ar pieredzi ģimenēs. Iesakām iekštelpu klāju mazuļiem un atklāto klāju bērniem no 6 gadiem.' },
      { q: 'Kādas ir bērnu cenas Bosfora kruīzā?', a: 'Bērni **0–3 gadi: BEZ MAKSAS** (nekādas maksas, nekādas slēptas izmaksas). **4–9 gadi: €5 atlaide** no pieaugušā cenas — t.i., €19.30/bērnam Standarta paketē (€{p.dinnerStd} − €5). **10+ gadi: pilna pieaugušā cena.** Viesnīcas transfērs ir bez maksas 0–3 gadiem, standarta 4+ (€{p.transfer}/personai).' },
      { q: 'Vai uz kuģa ir bērnu ēdienkarte?', a: 'Jā — vienkārša grilēta vista, makaroni, maize, sezonas dārzeņi un neierobežoti bezalkoholiskie dzērieni. Paziņo par alerģijām vai ēšanas vēlmēm rezervējot, un mēs pagatavosim ko tādu, kas tavam bērnam patiks.' },
      { q: 'Vai mūzika vai priekšnesums ir pārāk skaļš bērniem?', a: 'Dzīvie priekšnesumi notiek vienā skatuves zonā — ja tavi bērni ir jutīgi pret skaņu, ievietosim tevi pie klusāka galda tālāk aizmugurē. Priekšnesums kopā ilgst 40 minūtes, atlikušajā vakara daļā ir vidēja skaļuma turku fona mūzika un DJ.' },
      { q: 'Kas notiek, ja mazulis kruīza laikā aizmieg?', a: 'Nekādu problēmu — daudzi to dara. Iekštelpu zonā ir solu sēdvietas, kur mazulis vai mazs bērns var ērti gulēt. Pajautā komandai siltu segu, ja vajag. Bez papildu maksas.' },
      { q: 'Vai man jāņem līdzi ratiņi uz kuģa?', a: 'Vari, bet iesakām lielos ratiņus atstāt viesnīcā (vai pie mūsu šofera, ja esi rezervējis transfēru — droši glabāsim). Mūsu kuģim ir šauri koridori un klāji ar kāpnēm. Vieglais nesēja josta ir praktiskāka uz kuģa.' }
    ],
    cta: {
      primary: 'Rezervē ģimenes kruīzu · Maksā uz kuģa',
      secondary: 'Bezmaksas atcelšana 2 stundas · Bez priekšapmaksas',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantisks Bosfora kruīzs no €{p.dinnerStd} — vakariņas sveču gaismā',
      description: 'Romantisks Bosfora kruīzs: galds sveču gaismā, rozes, vairāku ēdienu vakariņas zem izgaismotajiem tiltiem. No €{p.dinnerStd}/personai. Bezmaksas atcelšana, maksā uz kuģa.'
    },
    hero: {
      h1: 'Romantisks kruīzs pa Bosforu',
      subtitle: 'Vakariņas sveču gaismā, ar rozēm rotāts galds, izgaismoti tilti un īpašs mirklis tikai jums diviem zem Stambulas ikoniskākajām nakts debesīm.',
      badge: 'Jubileja · Medusmēnesis · Īpašs vakars'
    },
    intro: [
      '**Romantiskais Bosfora kruīzs** ir Stambulas ikoniskākais pāru vakars. Kamēr saule riet aiz Dolmabahçe pils un Bosfora tilts iedegas krāsās, tu un tavs partneris dalāties ar turku vairāku ēdienu vakariņām pie privāta galda — ar svecēm, svaigiem ziediem un vijoles skaņām, kas vijas pa klāju.',
      'Mūsu romantiskā galda klājums (+€{p.romantic}/galdam) padara jebkuru vietu par īpašu mirkli: sarkanas rozes, mirdzošas sveces, ar roku rakstīta sveiciena vēstule. Pievieno 2 glāzes alkohola vīnam zem zvaigznēm (+€{p.alcohol2}/personai) vai paturi vienkāršu ar iekļautajiem bezalkoholiskajiem dzērieniem. Lai kā tu izvēlies, komanda neuzkrītoši parūpēsies par pārējo.',
      'Vienalga, vai svini jubileju, plāno pārsteigumu partnerim vai vienkārši vēlies neaizmirstamu vakaru Eiropas romantiskākajā pilsētā — šī ir tūre, ko Stambulas pāri mīl. Novērtēta ar 4,8★, TÜRSAB licencēta un — vissvarīgāk — maksā uz kuģa, tāpēc tu apsoli tikai pašu vakaru.'
    ],
    highlights: [
      { title: 'Romantisks galds sveču gaismā', desc: 'Pievieno romantisko galda klājumu par +€{p.romantic}/galdam: svaigas sarkanas rozes, mirdzošas sveces, rožu ziedlapas uz galdauta un ar roku rakstīta apsveikuma kartīte. Fotografēšana iekļauta.' },
      { title: 'Labākie galdi saulriets-uz-nakts pārejai', desc: 'Galds pie loga rezervēts pāriem. Skaties, kā iedegas Bosfora tilts, mirdz Jaunavas tornis un izgaismojas Ortaköy mošeja no tava privātā galda.' },
      { title: 'Dzīvā vijole un intīma atmosfēra', desc: 'Dzīvā vijole un akustiska turku mūzika vakariņu laikā rada lēnu, romantisku noskaņu. Pēc tam parādās DJ, un pāri dejo uz atklātā klāja zem gaismām.' },
      { title: 'Vīns, šampanietis, premium kombinācijas', desc: 'Pievieno 2 alkohola glāzes (+€{p.alcohol2}/personai) — vīnu, alu, rakı, degvīnu, viskiju, džinu un citus. Importētais šampanietis un premium kombinācijas pēc pieprasījuma — pajautā rezervējot.' }
    ],
    faq: [
      { q: 'Kas padara šo kruīzu romantisku?', a: 'Privāta galda, gaismas klājuma (brīvprātīgi +€{p.romantic}), turku vairāku ēdienu vakariņu, dzīvās vijoles un akustiskās mūzikas un Bosfora izgaismoto tiltu virs galvas kombinācija. Mēs veidojam pieredzi pāriem — mierīga noskaņa sākumā, pēc tam enerģisks DJ un dejas. Tu nosaki tempu.' },
      { q: 'Vai jūs varat organizēt pārsteigumu manam partnerim — dzimšanas dienu, jubileju, bildinājumu?', a: 'Jā — pasaki mums rezervējot. Mēs varam koordinēt ar personālu: jubilejas torte (bez maksas), īpašs galda klājums, ar roku rakstīts apsveikums tavā valodā vai kā piegāde uz galdu īstajā brīdī. Bildinājumam iesakām rakstīt mums WhatsApp tieši, lai varētu plānot diskrēti.' },
      { q: 'Cik maksā romantiskais kruīzs 2 personām?', a: '2 personām: 2 × €{p.dinnerStd} = €48.60. Pievieno romantisko klājumu +€{p.romantic} = €63.60. Bez priekšapmaksas — maksā uz kuģa. 2 glāzes alkohola diviem: 2 × €{p.alcohol2} = €20.' },
      { q: 'Vai romantiskais Bosfora kruīzs ir privāts — tikai mums?', a: 'Nē — tas ir kopīgs kruīzs ar citiem pāriem un viesiem (līdz 60–80 kopā). **Tavs galds** ir privāts (tikai tavai grupai), bet uz kuģa ir arī citi viesi. Ja vēlies pilnīgi privātu kuģi 2 personām, tas ir atsevišķs **privāts Bosfora kruīzs** (ko varam organizēt pēc pieprasījuma — raksti mums).' },
      { q: 'Vai mēs varam paņemt savus ziedus, kūku vai dāvanu?', a: 'Protams. Paņem ko vēlies — personāls diskrēti palīdzēs ievietot pārsteiguma dāvanu, paslēpt gredzena kastīti desertā vai parādīt tavus atvestos ziedus. Bez korķa naudas vai papildu maksām. Vienkārši paziņo, lai varētu koordinēt laiku.' },
      { q: 'Ko mums vajadzētu vilkt mugurā romantiskam Bosfora kruīzam?', a: 'Smart casual līdz elegants — daudzi pāri ģērbjas izsmalcināti (kleitas, žaketes). Stingra apģērba koda nav, bet noskaņa ir īpašāka nekā parastā tūrismā. Paņem vieglu jaku vai šalli — klājs var kļūt vēss pat vasarā. Ērti apavi, ja plāno dejot pēc vakariņām.' }
    ],
    cta: {
      primary: 'Rezervē romantisko kruīzu · Maksā uz kuģa',
      secondary: 'Pievieno romantisko galda klājumu (+€{p.romantic}) rezervācijas veidlapā · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Bosfora vakariņu kruīzs no €{p.dinnerStd} — šovs + nakts tūre',
      description: '3 stundu vakariņu kruīzs pa Bosforu: dzīvs tautas šovs, izgaismoti tilti, Bosfora panorāma naktī. Halal ēdienkarte pieejama pēc pieprasījuma.'
    },
    hero: {
      h1: 'Halal kruīzs pa Bosforu Stambulā',
      subtitle: '100% halal sertificēta ēdienkarte, alkohols vienmēr brīvprātīgs, ģimenei draudzīga izklaide un cieņpilna atmosfēra musulmaņu ceļotājiem — vakars pa Bosforu, izdarīts pareizi.',
      badge: '100% Halal · Ģimenei draudzīgs · Musulmaņu īpašums'
    },
    intro: [
      '**Halal Bosfora kruīzs** ir Stambulas cieņpilnākais vakariņu kruīzs musulmaņu ceļotājiem. Katrs gaļas gabals, kas tiek pasniegts uz kuģa — lasis, jūras asaris, vista, jēra frikadeles, liellopa fileja, ribu steiks — ir **halal sertificēts** no apstiprinātiem piegādātājiem. Mēs pasniedzam vienu un to pašu ēdienkarti visiem viesiem; nav atsevišķas "halal sekcijas", jo viss kuģis ir halal pēc noklusējuma.',
      'Alkohols ir **brīvprātīgs papildinājums** — nekad netiek uzspiests viesiem, un galdu izkārtojums dabiski nodala viesus, kas dod priekšroku bezalkohola galdam. Viesiem, kas vēlas 2 glāžu alkohola paketi (+€{p.alcohol2}/personai), tā ir pieejama, bet iekļautie neierobežotie bezalkoholiskie dzērieni (ūdens, kola, sula) ir pietiekami lielākajai daļai musulmaņu ģimeņu. Komanda ir apmācīta cienīt tavas preferences bez pieņēmumiem.',
      '**Halal-draudzīgais Bosfora kruīzs** ir nozīmīgs ceļotājiem no Saūda Arābijas, AAE, Kuveitas, Kataras, Irānas, Malaizijas, Indonēzijas, Pakistānas un Marokas, kas vēlas Stambulas ikoniskāko vakaru bez kompromisiem. TÜRSAB licencēts, 4,8★ un maksā uz kuģa — tu neapsoli neko, pirms neesi pārliecināts, ka pieredze atbilst taviem standartiem.'
    ],
    highlights: [
      { title: '100% halal sertificēta ēdienkarte', desc: 'Visa gaļa (lasis, jūras asaris, vista, frikadeles, liellopa, ribu steiks) ir halal sertificēta no apstiprinātiem piegādātājiem. Virtuve ievēro halal sagatavošanu. Bez cūkgaļas vai ne-halal piedevām. Veģetārās iespējas vienmēr pieejamas.' },
      { title: 'Alkohols brīvprātīgs, nekad neuzspiests', desc: 'Alkohola paketes ir papildinājumi — nav iekļauti pēc noklusējuma. Bezalkoholiskie dzērieni (ūdens, kola, sula) ir neierobežoti un bez maksas. Tavs galds paliek bez alkohola, ja tu to skaidri nelūdz. Komanda klusi ciena tavu izvēli.' },
      { title: 'Ģimenei draudzīga izklaide', desc: 'Sema priekšnesums, tradicionālās turku tautas dejas, dzīva turku mūzika. Nav naktsklubu stila šovu, nav nepiemērota satura. Droši bērniem, cieņpilni ģimenēm. Austrumu deja ir tradicionālā mākslas forma, pasniegta ar cieņu.' },
      { title: 'Cieņa pret lūgšanu laikiem', desc: 'Ja iekāpšana sakrīt ar maghrib vai isha (20:00–21:00), personāls var pavadīt tevi uz kluso lūgšanu telpu pie Kabataş piestātnes pirms atiešanas. Vienkārši paziņo mums rezervējot.' }
    ],
    faq: [
      { q: 'Vai Bosfora kruīzs ir 100% halal?', a: 'Jā — katrs gaļas produkts ēdienkartē (zivs, vista, frikadeles, liellopa fileja, ribu steiks, jērs) ir halal sertificēts no apstiprinātiem piegādātājiem. Virtuve ievēro halal sagatavošanas standartu. Cūkgaļa nekur uz kuģa netiek pasniegta. Tā nav "halal iespēja" — visa ēdienkarte ir halal.' },
      { q: 'Vai citi viesi uz kuģa lieto alkoholu?', a: 'Daži viesi pievieno brīvprātīgo 2 glāžu alkohola paketi (+€{p.alcohol2}/personai). Galdi ir dabiski nodalīti — vari lūgt bezalkohola zonu. Komanda nenes alkoholu, ja vien viesis to skaidri nepasūta. Bezalkoholiskie dzērieni (neierobežoti) ir iekļauti visiem.' },
      { q: 'Vai šis kruīzs ir piemērots musulmaņu ģimenēm ar bērniem?', a: 'Jā — tas ir viens no Stambulas cieņpilnākajiem ģimenes kruīziem. Izklaide ir pieticīga (tautas dejas, sema, turku mūzika), bērni līdz 3 gadiem ir bez maksas, 4–9 gadi saņem €5 atlaidi. Bez naktsklubu atmosfēras. Ģimenes no Persijas līča, Indonēzijas, Malaizijas, Pakistānas un Marokas regulāri rezervē šo kruīzu.' },
      { q: 'Vai es varu lūgties uz kuģa?', a: 'Uz kuģa nav atvēlētas lūgšanu telpas, bet iesakām lūgties pirms iekāpšanas plkst. 20:00 (maghrib lūgšana bieži iekrīt šajā intervālā). Kabataş piestātnē ir lūgšanu telpas. Ja kuģošanas laikā 21:00–00:00 (isha) tev jālūdzas, runā ar komandu — varam sarunāt klusu stūri uz klāja.' },
      { q: 'Kādas ir cenas musulmaņu ģimenei no 4 (2 pieaugušie, 2 bērni)?', a: 'Vakariņu kruīzs: 2 × €{p.dinnerStd} + 2 × €19.30 (€5 atlaide 4–9 gadi) = €87.20. Ja bērni ir līdz 3 gadiem, bez maksas: 2 × €{p.dinnerStd} = €48.60. Pievieno €5 viesnīcas transfēru katram pieaugušajam. Kopā: €48.60–€92.90 ģimenei no 4, bez priekšapmaksas, maksā uz kuģa.' },
      { q: 'Vai viesnīcas transfērs arī ir halal?', a: 'Viesnīcas transfērs ir tikai automašīnas transports — nav iesaistīta nedz ēdiens, nedz dzērieni, tāpēc nav halal raizes. Mūsu šoferi ir profesionāli, cieņpilni un punktuāli. Transfēra zonas aptver Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli un 9 citus centrālos rajonus, kur musulmaņu ceļotāji parasti uzturas.' }
    ],
    cta: {
      primary: 'Rezervē halal kruīzu · Maksā uz kuģa',
      secondary: 'Bezmaksas atcelšana 2 stundas iepriekš · Bez priekšapmaksas · Halal sertificēts',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP pieredze Bosforā no €{p.dinnerStd} — premium vakariņas Bosforā',
      description: 'Bosfora vakariņu kruīzs VIP līmenī: pilna turku ēdienkarte, dzīvie šovi, galds pie skatuves pēc izvēles, uzmanīga apkalpošana. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Maksā uz kuģa, bezmaksas atcelšana.'
    },
    hero: {
      h1: 'VIP pieredze Bosforā — vakariņu kruīzs',
      subtitle: 'Viena ēdienkarte, viens standarts: premium ikvienam. Trīs stundu vakars Bosforā uz kuģa AMOR — bagātīgas turku vakariņas, dzīvie šovi uz skatuves un, ja vēlies, privāts galds pie skatuves. Mēs nepārdodam atsevišķu „VIP klasi“ — labāko pasniedzam katram viesim.',
      badge: '40% ATLAIDE · Viena ēdienkarte, premium standarts · Maksā uz kuģa'
    },
    intro: [
      'Daudzi kuģi Bosforā sadala viesus „standarta“ un „VIP“ grupās. Mēs to nedarām. Uz kuģa **AMOR** ir viena vakariņu ēdienkarte, gatavota ar vienādu rūpību visiem: 10 veidu turku meze, silta uzkoda, galvenais ēdiens pēc tavas izvēles (lasis, jūrasasaris, vista vai köfte), saldējuma torte un neierobežoti bezalkoholiskie dzērieni. Iekļauta arī visa astoņu priekšnesumu izklaides programma — Oba Dombra, virpuļojošo dervišu ceremonija, Anatolijas un Azerbaidžānas tautas dejas, austrumu deja, kaukāziešu deja ar nažiem, dzīvā mūzika un fināls ar saksofonu un DJ — viss par €{p.dinnerStd}/personai.',
      'VIP sajūta sākas pie tava galda. Ja vēlies būt pēc iespējas tuvāk skatuvei un skatiem, pievieno **privāto galdu pie skatuves** (+€{p.romantic}/galdam), un vieta tiek rezervēta iepriekš — labākais rakurss uz dervišiem, tautas dejām un izgaismoto Bosforu. Iemīļotākā izvēle pāriem, svinībām un fotografēšanas cienītājiem.',
      'AMOR ir moderns kuģis: 42 metri, 3 klāji, līdz 400 viesiem, ziemā apsildāms un vasarā ar gaisa kondicionieri. Trīs stundu maršruts sākas Kabatašā (iekāpšana no 20:00, izbraukšana 21:00, atgriešanās 00:00) garām Dolmabahčei, Ortakojas mošejai, Rumeli cietoksnim un Bosfora tilta gaismām. TÜRSAB licence (A-17672), 4,9★ Google. Bez priekšapmaksas — maksā uz kuģa, un atcelšana ir bez maksas līdz 2 stundām pirms izbraukšanas.'
    ],
    highlights: [
      { title: 'Viena ēdienkarte, premium standarts', desc: 'Atsevišķas „VIP ēdienkartes“ nav — jo mūsu vienīgā ēdienkarte jau ir tādā līmenī. 10 veidu meze, silta uzkoda, 4 galvenie ēdieni pēc izvēles, deserts un neierobežoti bezalkoholiskie dzērieni, pasniegti ar vienādu rūpību pie katra galda.' },
      { title: 'Privāts galds pie skatuves (+€{p.romantic}/galdam)', desc: 'Galdi, kas ir vistuvāk dervišiem, tautas dejām un austrumu dejai, tiek rezervēti iepriekš. Lielisks skats uz skatuvi un Bosforu. Tavs galds ir privāts, nevis koplietošanas.' },
      { title: 'Uzmanīga apkalpošana pie galda', desc: 'Mūsu komanda apkalpo tevi pie galda: ēdieni, ieteikumi no ēdienkartes, papildu dzērieni, īpašas vēlmes. Nav jāstāv rindā pūlī.' },
      { title: '40% ATLAIDE — bija €{p.dinnerStdOriginal}, tagad €{p.dinnerStd}', desc: 'Tiešās rezervācijas cena: €{p.dinnerStd}/personai (cenrāža cena €{p.dinnerStdOriginal}). Maksā uz kuģa, bez priekšapmaksas. Bezmaksas atcelšana līdz 2 stundām pirms izbraukšanas.' }
    ],
    faq: [
      { q: 'Vai jūs pārdodat „VIP paketi“? Ar ko tā atšķiras no standarta?', a: 'Mēs nepārdodam atsevišķu VIP paketi — ir viena ēdienkarte, ko visiem pasniedz vienā un tajā pašā premium standartā. Tas, ko saucam par „VIP pieredzi“, ir tava vakara pielāgošana: privāts galds pie skatuves (+€{p.romantic}/galdam), uzmanīga apkalpošana pie galda un neobligāti dzērienu papildinājumi. Kruīzs ilgst 3 stundas, €{p.dinnerStd}/personai.' },
      { q: 'Vai €{p.dinnerStd} tiešām ir 40% atlaide?', a: 'Jā — mūsu cenrāža cena ir €{p.dinnerStdOriginal}/personai. €{p.dinnerStd} ir tiešās rezervācijas cena bez starpnieku komisijām. Tu maksā uz kuģa, un priekšapmaksas nav.' },
      { q: 'Kas ir ēdienkartē?', a: '10 veidu turku meze, silta uzkoda, galvenais ēdiens pēc izvēles (lasis, jūrasasaris, vista vai köfte) un saldējuma torte desertā, kā arī neierobežoti bezalkoholiskie dzērieni. Astoņu priekšnesumu programma ir iekļauta: Oba Dombra, dervišu ceremonija, Anatolijas un Azerbaidžānas tautas dejas, austrumu deja, kaukāziešu deja ar nažiem, dzīvā mūzika un fināls ar saksofonu un DJ.' },
      { q: 'Vai alkohols ir iekļauts?', a: 'Nē — alkohols ir atsevišķs papildinājums: 2 glāzes — vīns, alus, rakı, degvīns, viskijs, džins un citi — par +€{p.alcohol2}/personai. Bezalkoholiskie dzērieni ir iekļauti neierobežoti un bez maksas. Premium importētie dzērieni tiek rēķināti atsevišķi uz kuģa.' },
      { q: 'Kā nodrošināt galdu pie skatuves?', a: 'Rezervējot vienkārši izvēlies papildinājumu „privāts galds pie skatuves“ (+€{p.romantic}/galdam) — galds tiks rezervēts uz tavu vārdu. Labākās vietas aizņem iepriekšējas rezervācijas, tāpēc iesakām pievienot to pirms kruīza dienas.' },
      { q: 'Kāds ir kuģis?', a: 'AMOR — moderns pasažieru kuģis 42 metru garumā ar 3 klājiem un 400 viesu ietilpību, ziemā apsildāms un vasarā ar gaisa kondicionieri. Izbraukšana no Kabatašas piestātnes: iekāpšana 20:00, izbraukšana 21:00, atgriešanās 00:00. Maršruts: Dolmabahče, Ortakoja, Rumeli cietoksnis, Beilerbeji un Bosfora tilta gaismas.' }
    ],
    cta: {
      primary: 'Rezervē savu galdu · Maksā uz kuģa',
      secondary: 'Bija €{p.dinnerStdOriginal}, tagad €{p.dinnerStd} · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pievieno privāto galdu pie skatuves (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Privāts Bosfora kruīzs — kuģa noma Stambulā (25+ viesi)',
      description: 'Privāts Bosfora kruīzs grupām, kāzām, korporatīvajiem pasākumiem. Ekskluzīvs kuģis, pielāgota ēdienkarte, elastīgs ilgums. Bezmaksas atcelšana.'
    },
    hero: {
      h1: 'Privāts kruīzs pa Bosforu',
      subtitle: 'Iznomā visu kuģi savai grupai — ģimenes sapulces, korporatīvās vakariņas, dzimšanas dienas, saderināšanās, kāzas. Ekskluzīva lietošana, pielāgota ēdienkarte, elastīga programma.',
      badge: 'Privāta noma · 25+ viesi · Pielāgota ēdienkarte'
    },
    intro: [
      '**Privāts Bosfora kruīzs** nozīmē, ka viss kuģis ir tavs — nav citu viesu, nav koplietojamu galdu, nav kopīgas deju grīdas. Ideāli ģimenes saietiem, korporatīvajām vakariņām, dzimšanas dienu ballītēm, vecpuišu vakariem vai kāzu ceremonijām. Kuģis, komanda, ēdienkarte, izklaide un programma tiek pielāgota tavai grupai.',
      '**Mūsu privātā Bosfora noma** uzņem **no 25 līdz 80 viesiem**. Mazākas grupas joprojām var pieprasīt privātu pieredzi — piedāvājam minimālo cenu, kas sedz darbības izmaksas. Lielākas grupas (kāzu formāts) saņem pielāgotas cenas un parasti ietver īpašu dekoru, dzīvu grupu, kūkas griešanu un pagarinātu ilgumu (4–5 stundas standarta 3 vietā).',
      'Vienalga, vai organizē korporatīvo pasākumu klientiem, 50. dzimšanas dienas svinības vai kāzu uzņemšanu zem Stambulas ikoniskākajiem tiltiem, šis ir **uzticamais privātais kruīzs Stambulas pasākumu organizatoriem**. Novērtēts ar 4,8★, TÜRSAB licencēts, pilnībā angliski runājoša komanda un pilnīga elastība — maršruts, ēdienkarte, mūzika, programma.'
    ],
    highlights: [
      { title: 'Viss kuģis, tikai jums', desc: 'Bez citiem viesiem. Tava grupa pārvalda katru klāju, katru galdu. Iestati savu mūziku, apģērba kodu, programmu. Privātums ir svarīgs — mēs to cienām.' },
      { title: 'Pielāgota ēdienkarte un dzērienu pakete', desc: 'Sadarbojies ar mūsu pavāru, lai pielāgotu ēdienkarti: konkrēti meze, galvenā ēdiena izvēles, ēdieni, kas pielāgoti kultūrai vai uztura vajadzībām. Alkohola paketes, šampanieša tosti, pielāgoti kokteiļu bāri — visu var organizēt.' },
      { title: 'Elastīgs ilgums un atiešana', desc: 'Standarta 3 stundas var pagarināt līdz 4–5 stundām. Izvēlies dienas atiešanu plkst. 12:00, saulrieta atiešanu plkst. 17:30 vai vakara atiešanu plkst. 21:00. Vēlies darba dienu, nevis nedēļas nogali? Nekādu problēmu — pielāgojamies tavai programmai.' },
      { title: 'Pielāgots dekors, grupa, programma', desc: 'Pielāgots dekors (baloni, baneri, ziedu noformējums), dzīvā grupa DJ vietā, kāzu kūkas griešana, fotogrāfa koordinēšana, runas — pievieno to, kas pasākumam vajadzīgs. Esam pasākumu organizatori, ne tikai kuģu operatori.' }
    ],
    faq: [
      { q: 'Cik maksā privāts Bosfora kruīzs?', a: 'Grupām 25+ parasti €{p.dinnerStd}/personai + kuģa nomas maksa atkarībā no grupas lieluma, datuma un ilguma. Raksti mums WhatsApp ar grupas lielumu, datumu un prasībām — sniegsim cenu vienas stundas laikā. Lielākā daļa pasākumu iekļaujas €2 000–€6 000 intervālā kopā.' },
      { q: 'Kāds ir minimālais grupas lielums privātam Bosfora kruīzam?', a: 'Tehniski 25 viesi padara privāto kruīzu ekonomiski iespējamu. Mazākas grupas (10–24) var nomāt privāti, bet maksā minimālo cenu, kas atbilst aptuveni 25 personām. Patiešām mazām grupām (2–10) jāizvērtē parastais kopīgais kruīzs — tavs galds jau ir privāts, tikai kuģis ir koplietojams.' },
      { q: 'Vai varu rīkot kāzas Bosfora kruīzā?', a: 'Jā — mēs organizējam 10–15 kāzu ceremonijas gadā. Ietilpība līdz 80 vakariņu iekārtojumam, līdz 100 kokteiļu stilam. Mēs koordinējam ar tavu fotogrāfu, kāzu organizatoru, grupu vai pavāru. Pielāgota kūkas griešana, pirmā deja, šampanieša tosts — visu var organizēt. Raksti WhatsApp par kāzu pieprasījumu.' },
      { q: 'Kā ar korporatīvajiem pasākumiem un komandas vakariņām?', a: 'Privātie korporatīvie kruīzi ir mūsu biežākās rezervācijas. Uzņēmuma vakariņas, klientu uzņemšana, produkta laidiens, komandas svinības — viss strādā. Mēs varam sniegt rēķinu ar PVN specifikāciju, organizēt viesnīcu transfērus tavai komandai un koordinēt zīmola materiālus (galda noformējumus, banerus) pēc pieprasījuma.' },
      { q: 'Vai varu paņemt savu dzīvo grupu vai DJ tavas izklaides vietā?', a: 'Jā — vari paņemt savu dzīvo grupu, DJ, fotogrāfu. Vai paturi mūsu standarta (sema, tautas dejotājus, austrumu deju, DJ) un pievieno savu klāt. Kuģim ir PA sistēma un deju grīda. Paziņo iepriekš, lai varētu koordinēt skaņas vadību.' },
      { q: 'Kā lūgt cenu privātam Bosfora kruīzam?', a: 'Vienkāršāk: raksti mums WhatsApp +90 532 244 29 22 ar (1) grupas lielumu, (2) vēlamo datumu, (3) iemeslu (kāzas, korporatīvais, dzimšanas diena), (4) īpašām prasībām. Atbildam vienas stundas laikā darba laikā, 12 stundu laikā naktī. Varam arī sarunāt video zvanu, lai apspriestu detaļas.' }
    ],
    cta: {
      primary: 'WhatsApp pielāgotai cenai',
      secondary: 'Pielāgota ēdienkarte, grupa 25–80, elastīgs ilgums · Atbilde 1 stundas laikā',
      tertiary: 'Standarta kruīza iespēja (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosfors pāriem no €{p.dinnerStd} — romantisks vakars Stambulā',
      description: 'Bosfora vakariņu kruīzs pāriem. Privāts galds, izgaismoti tilti, brīvprātīgs romantiskais dekors. No €{p.dinnerStd}/personai.'
    },
    hero: {
      h1: 'Kruīzs pa Bosforu pāriem',
      subtitle: 'Romantisks vakars pa Bosforu — privāts galds, dzīvā mūzika, izgaismoti tilti virs galvas. Vienalga, vai tas ir tavs pirmais randiņš Stambulā vai desmitā jubileja, šis vakars strādā.',
      badge: 'Privāts galds · Dzīvā mūzika · Maksā uz kuģa'
    },
    intro: [
      '**Bosfora kruīzs pāriem** ir Stambulas iemīļotais vakars. Ne visi pāri svin jubileju — dažreiz jūs vienkārši esat pasaules romantiskākajā pilsētā un vēlaties brīnišķīgu vakaru kopā. Šis kruīzs piedāvā: privātu galdu diviem, lēnas turku vairāku ēdienu vakariņas, dzīvo vijoli un akustisko mūziku vakariņu laikā un izgaismoto Bosfora tiltu, kas slīd garām.',
      'Atmosfēra ir **silta, bet ne pārmēru romantiska** — bez obligātas laulību piedāvājuma mūzikas, bez neērtām koordinētām aplausiem "tikko apprecējušajiem". Ēd, dzer, runā, skaties Stambulas gaismās. Vēlies pievienot romantisko galda klājumu (sveces, rozes, +€{p.romantic})? Lieliski — citādi pašas vakariņas jau ir īpašas.',
      'Vienalga, vai esi Stambulā 3 dienas ar partneri, svini ko mierīgi vai plāno izpētes braucienu nākotnes bildinājumam — **Bosfora kruīzs pāriem** dod tev 3 stundu vakara tūri vienā no pasaules fotografētākajām pilsētām. 4,8★, maksā uz kuģa, bezmaksas atcelšana.'
    ],
    highlights: [
      { title: 'Privāts galds diviem', desc: 'Privāts galds 2 personām, nav koplietojams. Prioritāte galdam pie loga pāriem. Saulrieta un Bosfora nakts fotografēšana tieši aiz tava loga.' },
      { title: 'Lēnas vairāku ēdienu vakariņas', desc: '10 turku meze veidi, silta uzkoda, galvenais ēdiens (lasis, jūras asaris, vista, frikadeles vai veģetārais), saldējuma kūka desertā. Pasniegti lēni 3 stundu laikā — tev nav steigas.' },
      { title: 'Dzīvā vijole un viegla mūzika', desc: 'Dzīvā vijole un akustiska turku mūzika vakariņu laikā rada intīmu atmosfēru, kas piemērota sarunai. Pēc tam parādās DJ pāriem, kas vēlas dejot.' },
      { title: 'Papildinājumi īpašiem vakariem', desc: 'Romantiskais galda klājums (sveces, rozes): +€{p.romantic}. 2 glāzes alkohola (vīns, alus, rakı, degvīns, viskijs, džins un citi): +€{p.alcohol2}/personai. Viesnīcas transfērs (turp un atpakaļ): +€{p.transfer}/personai. Izvēlies to, kas der tavam vakaram.' }
    ],
    faq: [
      { q: 'Vai šis Bosfora kruīzs ir piemērots parastam vakaram, nevis īpašam gadījumam?', a: 'Jā — vairums mūsu pāru nesvin neko īpašu, viņi vienkārši pavada labu vakaru kopā. Atmosfēra ir silta un patīkama bez pārspīlējumiem. Vari pievienot romantisko galda klājumu (+€{p.romantic}), ja vēlies vairāk, vai vienkārši izbaudīt standartu — tas jau ir īpašs.' },
      { q: 'Cik maksā Bosfora kruīzs 2 personām?', a: '2 personām: 2 × €{p.dinnerStd} = €48.60. Pievieno viesnīcas transfēru diviem: +€{p.transfer}×2 = €10. Pievieno 2 glāzes alkohola diviem: +€{p.alcohol2}×2 = €20. Bez priekšapmaksas — maksā uz kuģa.' },
      { q: 'Vai pāri var paņemt savu vīnu vai šampanieti?', a: 'Mēs neatļaujam ārējo alkoholu (licences dēļ). Bet mums ir alkohola papildinājums — vīns, alus, rakı, degvīns, viskijs, džins un citi (2 glāzes +€{p.alcohol2}/personai) un varam organizēt premium importētus vīnus vai šampanieti par maksu — pajautā rezervējot. Prosecco, Chianti un Cabernet ir populāri premium pasūtījumi.' },
      { q: 'Vai ir problēma, ja mēs nelietojam alkoholu — vai tas ir neparasti?', a: 'Nemaz — daudzi pāri pilnībā izlaiž alkoholu, vai nu halal iemeslu, vai preferenču dēļ. Neierobežoti bezalkoholiskie dzērieni (ūdens, sula, kola) ir iekļauti. Neviens uz tavu galdu nedalītu skatieni, ja tas ir bez alkohola. Daudzi musulmaņu pāri no Saūda Arābijas, Irānas un Indonēzijas rezervē šo kruīzu.' },
      { q: 'Kad Bosfora kruīzs ir labākais pāriem — saulrietā vai vakarā?', a: 'Kruīzs atiet katru vakaru plkst. 21:00 — un vasarā (no maija līdz augustam) šī viena atiešana aptver abus: uzkāpšana uz klāja no plkst. 20:00 zelta stundas laikā, saulriets tieši ap atiešanas brīdi, pēc tam izgaismotie tilti un apgaismotās pilis. Ziemā tas ir tīrs nakts gaismu kruīzs. Jebkurā gadījumā viena rezervācija sniedz pāriem visikoniskāko Bosfora versiju.' },
      { q: 'Vai ir deju grīda — vai mēs varam dejot?', a: 'Jā — pēc vakariņām (~22:30) sākas DJ un atklātais klājs kļūst par deju zonu. Daudzi pāri dejo lēnās dziesmas zem gaismām ar Bosfora tiltu fonā. Daži no skaistākajiem kadriem, ko uzņemsi Stambulā.' }
    ],
    cta: {
      primary: 'Rezervē romantisko vakaru · Maksā uz kuģa',
      secondary: 'Pievieno romantisko klājumu (+€{p.romantic}) · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Skatīt romantisko Bosfora kruīzu'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Saulrieta un vakariņu kruīzs pa Bosforu no €{p.dinnerStd}',
      description: 'Noķer saulrietu pār Bosforu un vakariņo zem izgaismotajiem tiltiem. Iekāpšana 20:00 pie Kabataş, atiešana 21:00. 3 stundas, pilnas vakariņas. Maksā uz kuģa.'
    },
    hero: {
      h1: 'Saulrieta un vakariņu kruīzs pa Bosforu',
      subtitle: 'Iekāp plkst. 20:00, kad debesis virs minaretiem kļūst zeltainas — un vakariņo uz ūdens, kamēr Dolmabahçe, Ortaköy mošeja un Bosfora tilts iedegas naktij.',
      badge: 'Iekāpšana 20:00 · Atiešana 21:00 · No saulrieta līdz pilsētas gaismām'
    },
    intro: [
      '**Saulrieta kruīzs pa Bosforu** Stambulā ir par vienu lietu: pāreju. Mūsu kruīza iekāpšana pie Kabataş piestātnes sākas plkst. 20:00 — un garajos vakaros no maija līdz augustam zelta stunda risinās, kamēr tu iekārtojies uz klāja. Saule riet aiz Eiropas krasta minaretiem tieši ap atiešanu plkst. 21:00, tāpēc to vēro no ūdens: Dolmabahçe pils zeltā, Ortaköy mošeja kā siluets pret mirdzošajām debesīm.',
      'Mūsu **kruīzs pa Bosforu no saulrieta līdz naktij** ietver pilnas turku vakariņas — 10 meze veidi, silta uzkoda, galvenais ēdiens pēc izvēles, deserts — kas tiek pasniegtas, kamēr pilsēta ieslēdz savas gaismas. Līdz desertam tu kuģo zem izgaismotā Bosfora tilta ar 30 miljoniem gaismu, kas atspoguļojas tumšajā ūdenī. Pāreja no krēslas uz pilnu nakti — viss vienā 3 stundu kruīzā — ir šī vakara būtība.',
      'Vienalga, vai esi fotogrāfs, kas medī pēdējo gaismu, pāris, kas meklē "to Stambulas momentbildi", vai pirmreizējs apmeklētājs, kas vēlas klasisko vakaru uz ūdens — šis ir **saulrieta vakariņu kruīzs pa Bosforu**, ko vietējie iesaka viesiem. No €{p.dinnerStd}/personai, novērtēts ar 4,8★, TÜRSAB licencēts, maksā uz kuģa — bez priekšapmaksas.'
    ],
    highlights: [
      { title: 'Vasaras saulrieti tieši pie atiešanas', desc: 'No maija līdz augustam saule Stambulā riet aptuveni starp 20:15 un 20:45 — iekāpšana plkst. 20:00 dāvā zelta stundu uz klāja, un atiešana plkst. 21:00 nozīmē, ka pašu saulrietu redzi jau no ūdens. Kamera gatava — šī ir bilde.' },
      { title: 'No zilās stundas līdz pilnai naktij', desc: 'Ne tikai saulriets — kruīzs iet cauri krēslai līdz pilnībā izgaismotajam Bosforam. Zelta gaisma, zilā stunda, tad 30 miljoni tilta gaismu tumšajā ūdenī: trīs gaismas fāzes vienā vakarā.' },
      { title: 'Pilnas vakariņas kruīza laikā', desc: '10 turku meze veidi, silta uzkoda, galvenais ēdiens (lasis, jūras asaris, vista, frikadeles, veģetārais), saldējuma kūka, neierobežoti bezalkoholiskie dzērieni — pasniegts, kamēr iedegas pilsētas gaismas.' },
      { title: 'Dolmabahçe, Ortaköy, Bosfora tilts — visi mirdz', desc: 'Maršruts iet garām Dolmabahçe pilij, Ortaköy mošejai, Bosfora tiltam, Rumeli Hisarı un Beylerbeyi pilij tieši tad, kad iedegas to gaismas. Katrs orientieris savā labākajā gaismā.' }
    ],
    faq: [
      { q: 'Kad atiet saulrieta kruīzs pa Bosforu?', a: 'Iekāpšana sākas plkst. 20:00 pie Kabataş piestātnes, kuģis atiet plkst. 21:00 un atgriežas ap plkst. 00:00. Vasarā (maijs–augusts) saule riet aptuveni starp 20:15 un 20:45 — zelta stunda notiek iekāpšanas laikā, un pats saulriets tieši ap atiešanu, vērojams no ūdens.' },
      { q: 'Vai saulrieta kruīzs pa Bosforu ir tas pats, kas vakariņu kruīzs?', a: 'Jā — tas ir viens kruīzs. Ir viena ikdienas atiešana plkst. 21:00 ar pilnām vakariņām un dzīviem šoviem uz kuģa. Garajos vasaras vakaros tas vienlaikus ir arī saulrieta kruīzs: iekāp zelta stundas laikā un kuģo cauri zilajai stundai līdz izgaismotajai naktij. Ziemā tas pats kruīzs ir tīra nakts gaismu pieredze.' },
      { q: 'Cik maksā saulrieta kruīzs pa Bosforu?', a: 'No €{p.dinnerStd}/personai kruīzam (3 stundas, pilnas vakariņas, dzīva izklaide). Maksā uz kuģa — bez priekšapmaksas. Bērni 0–3 gadi bez maksas, 4–9 gadi puscena.' },
      { q: 'Kurš gadalaiks ir labākais saulrieta kruīzam pa Bosforu?', a: 'No maija līdz augustam. Stambulas vēlie saulrieti (20:15–20:45) sakrīt ar atiešanu plkst. 21:00, tāpēc vienā vakarā iegūsti zelta stundu, saulrietu un izgaismotos tiltus. Rudenī un ziemā saule riet agrāk, un tas pats kruīzs kļūst par pilnu nakts gaismu pieredzi — tikpat fotogēnisku, tikai citā noskaņā.' },
      { q: 'Ko ņemt līdzi saulrieta kruīzam?', a: 'Viedtālruni vai kameru — zelta stunda un izgaismotie tilti to prasa. Vieglu jaku: pēc saulrieta vējš uz klāja pastiprinās. Smart casual apģērbu — tu ēd vakariņas, bet stingra apģērba koda nav.' },
      { q: 'Vai šajā kruīzā redzēšu izgaismotos tiltus naktī?', a: 'Jā — tā ir vakara otrā puse. Kruīzs notiek 21:00–00:00, tāpēc pēc saulrieta un zilās stundas tu kuģo zem pilnībā izgaismotā Bosfora tilta, garām izgaismotajām pilīm un Jaunavas tornim, un atgriezies Kabataş ap plkst. 00:00.' },
      { q: 'Cikos Stambulā riet saule?', a: 'Vasarā (jūnijs–jūlijs) saule Stambulā riet ap 21:00–20:45. Ziemā — ap 16:30–17:00. Saulrieta un nakts pieredzei Bosphorus Night vakariņu kruīzs plkst. 21:00 no Kabataş vasarā noķer vēlo zelta stundu un zilo stundu, bet izgaismotos orientierus — visu gadu.' },
      { q: 'Vai saulrieta kruīzs pa Bosforu ir tā vērts?', a: 'Jā — saulriets pār Bosfora tiltu ir viens no Stambulas vizītkartes skatiem. Bosphorus Night vakariņu kruīzs plkst. 21:00 (€{p.dinnerStd}/personai) noķer zilo stundu pēc saulrieta un izgaismotās pilis, ar pilnām vakariņām un dzīviem šoviem 3 stundu garumā.' }
    ],
    cta: {
      primary: 'Rezervē saulrieta kruīzu · Maksā uz kuģa',
      secondary: 'Iekāpšana 20:00 · Atiešana 21:00 · Vakariņas iekļautas · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Skatīt pilnu vakariņu kruīza informāciju'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Bosfors naktī no €{p.dinnerStd} — vakariņu kruīzs + dzīvs šovs',
      description: '3 stundu nakts tūre pa Bosforu ar vakariņām un dzīvu šovu. Atiešana 21:00 no Kabataş, izgaismotie tilti. Bezmaksas atcelšana, maksā uz kuģa.'
    },
    hero: {
      h1: 'Nakts tūre pa Bosforu',
      subtitle: 'Stambulas izgaismotie tilti, izgaismotās pilis un Bosfora ūdens kā spogulis, kas atspoguļo 30 miljonus gaismu — nakts tūre, kas definē vakaru Stambulā.',
      badge: 'Izgaismotie tilti · Dzīvs šovs · Vakariņas iekļautas'
    },
    intro: [
      '**Nakts tūre pa Bosforu** ir Stambulas ieteicamākā vakara aktivitāte. Lūk, kāpēc: pēc tumsas iestāšanās Bosfors transformējas. Bosfora tilts mainās starp zilu, violetu un zeltu. Dolmabahçe pils mirdz siltā dzeltenā krāsā. Ortaköy mošeja perfekti atspoguļojas melnajā ūdenī. Katrs Stambulas orientieris naktī sasniedz savu dramatisko virsotni.',
      '**Mūsu nakts tūre pa Bosforu ar vakariņām** iepako pilno ikonisko vakaru: 3 stundas uz ūdens (21:00–00:00), turku vairāku ēdienu vakariņas, astoņu priekšnesumu dzīvā folkloras programma (Oba Dombra, sema, Anatolijas un Azerbaidžānas tautas dejas, austrumu deja, kaukāziešu deja ar nažiem), dzīvā mūzika un saksofona un DJ programma, kas piepilda klāju līdz nakts beigām. Katrs viesis saņem to pašu programmu — bez "pamata" iespējas, kas izlaiž labākās daļas.',
      'Vienalga, vai šī ir tava pirmā vizīte Stambulā un meklē "vienīgo, kas jādara naktī", vai esi bijis te iepriekš un vēlies pilsētas fotogēnākās 3 stundas, šī ir **nakts tūre pa Bosforu**, kas saņēmusi 4,8★ no vairāk nekā 11 317 ceļotājiem. TÜRSAB licencēta, maksā uz kuģa, bez priekšapmaksas.'
    ],
    highlights: [
      { title: 'Bosfors izgaismots savā dramatiskajā virsotnē', desc: 'Bosfora tilts maina krāsas (zila, violeta, zelts), pilis mirdz dzelteni, Ortaköy mošeja atspoguļojas melnajā ūdenī. 21:00–00:00 maksimālais izgaismojums visiem Stambulas orientieriem.' },
      { title: 'Tradicionāls turku šovs uz kuģa', desc: 'Astoņi priekšnesumi: Oba Dombra, sema priekšnesums, Sarı Gelin, azerbaidžāņu popūrijs, austrumu deja, Anatolijas popūrijs un gruzīnu-kaukāziešu deja ar nažiem, pēc tam dzīvs saksofons un DJ programma. 40 minūšu šovs, pēc tam mūzika + vakariņas turpinās.' },
      { title: 'Pilnas vairāku ēdienu vakariņas', desc: '10 turku meze veidi, silta uzkoda (paçanga böreği), galvenais ēdiens (lasis, jūras asaris, vista, frikadeles, veģetārais — tava izvēle), deserts (saldējuma kūka), neierobežoti bezalkoholiskie dzērieni. Halal sertificēts.' },
      { title: 'Pilns Bosfora maršruts', desc: 'Kabataş → Dolmabahçe → Çırağan pils → Ortaköy mošeja → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet tilts → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Jaunavas tornis → Kabataş.' }
    ],
    faq: [
      { q: 'Kad ir nakts tūre pa Bosforu?', a: 'Iekāpšana no plkst. 20:00 pie Kabataş piestātnes. Kuģis atiet plkst. 21:00, atgriežas ap plkst. 00:00. Iesakām ierasties 20 minūtes ātrāk, lai apsēstos un izvēlētos vietu.' },
      { q: 'Cik maksā nakts tūre pa Bosforu?', a: 'Mūsu nakts tūre (3 stundas, vakariņas, šovs): €{p.dinnerStd}/personai (no €{p.dinnerStdOriginal}) — viena ēdienkarte visiem viesiem. 0–3 gadi bez maksas, 4–9 gadi puscena. Maksā uz kuģa.' },
      { q: 'Kāda ir atšķirība starp nakts tūri pa Bosforu un vakariņu kruīzu?', a: 'Tas ir tas pats, tikai cits meklēšanas vārds. "Nakts tūre pa Bosforu" ir tas, kā daudzi ceļotāji meklē; "vakariņu kruīzs" ir nozares termins. Tas pats kuģis, tā pati 3 stundu programma, tā pati ēdienkarte, tas pats šovs. Izvēlies savu vēlamo meklēšanas vārdu — pieredze ir identiska.' },
      { q: 'Nakts tūre pa Bosforu vai saulrieta kruīzs — kas ir vērtīgāks?', a: 'Nakts tūre = izgaismota Stambula, maksimāla gaismas drāma, pilna izklaides programma, ikoniskākās bildes izgaismotajiem tiltiem. Un tas ir viens kruīzs: vasarā (no maija līdz augustam) iekāpšana no plkst. 20:00 noķer zelta stundu, un saule riet tieši ap atiešanu plkst. 21:00 — tāpēc viens un tas pats vakars aptver gan saulrietu, gan nakti. Nav jāizvēlas un nav jārezervē divreiz.' },
      { q: 'Vai varu doties nakts tūrē pa Bosforu savā pirmajā dienā Stambulā?', a: 'Jā — iesakām. Daudzi ceļotāji rezervē nakts tūri pirmajā vakarā, jo tā sniedz pilnu orientēšanos: visi galvenie orientieri no ūdens, ar labu ēdienu un izklaidi. Vienkāršāk nekā cīnīties ar laika starpību un mēģināt staigāt 1. dienā. Viesnīcas transfērs pieejams no centrālajiem rajoniem.' },
      { q: 'Es nerunāju turku valodā — vai tūre ir angliski?', a: 'Komanda runā angliski. Izklaidei (sema, tautas dejas, mūzika) nav nepieciešama valoda. Vakariņu ēdienkarte ir angļu valodā. Rezervācija pa WhatsApp / Telegram strādā vairākās valodās (angļu, arābu, krievu, vācu, franču, spāņu). Turku valoda nav nepieciešama.' }
    ],
    cta: {
      primary: 'Rezervē nakts tūri · Maksā uz kuģa',
      secondary: 'Atiešana 21:00 · 3 stundas · Vakariņas + šovs iekļauti · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Vakariņu kruīzs Stambulā no €{p.dinnerStd} — nakts tūre pa Bosforu',
      description: '3 stundu vakariņu kruīzs Stambulā pa Bosforu. Turku vairāku ēdienu ēdienkarte, dzīvs tautas šovs, izgaismotie tilti. Bezmaksas atcelšana, maksā uz kuģa. 11 317 atsauksmes.'
    },
    hero: {
      h1: 'Vakariņu kruīzs Stambulā',
      subtitle: 'Stambulas labākais vakariņu kruīzs — 3 stundas pa Bosforu, turku vairāku ēdienu vakariņas, dzīva izklaide un nakts skati uz pilsētas ikoniskākajiem orientieriem.',
      badge: '4,8★ · 11 317 atsauksmes · TÜRSAB A-17672'
    },
    intro: [
      'Meklē **vakariņu kruīzu Stambulā**? Tu esi atradis to, ko iesaka vairums ceļotāju. Mūsu 3 stundu vakars pa Bosforu apvieno pilnas turku vairāku ēdienu vakariņas, dzīvas tautas dejas un pilsētas fotogēnākos skatus — visu no ērta kuģa, kas atiet plkst. 21:00 no Kabataş piestātnes.',
      'Pieredze **vakariņu kruīzā Stambulā**: iekāp plkst. 20:00, apsēdies, skaties Dolmabahçe pili, kamēr atejam, vakariņas sākas, kad tuvojamies Ortaköy mošejai, šovs sākas (sema, tautas dejas, austrumu), un līdz desertam tu būsi zem izgaismotā Bosfora tilta. Līdz pusnaktij tu būsi atpakaļ Kabataş ar ikoniskām bildēm un pilnu vēderu.',
      '€{p.dinnerStd}/personai (no €{p.dinnerStdOriginal}) — viena ēdienkarte visiem viesiem. Maksā uz kuģa — bez priekšapmaksas, bez riska. TÜRSAB licencēts A-17672, novērtēts ar 4,8★ no vairāk nekā 11 317 ceļotājiem.'
    ],
    highlights: [
      { title: 'Pilnas turku vairāku ēdienu vakariņas', desc: '10 meze veidi, silta uzkoda, galvenais ēdiens (lasis/jūras asaris/vista/frikadeles/veģetārais), saldējuma kūka. Halal sertificēts. Neierobežoti bezalkoholiskie dzērieni iekļauti.' },
      { title: 'Dzīvs turku tautas deju šovs', desc: 'Astoņi priekšnesumi: Oba Dombra, sema priekšnesums, Sarı Gelin, azerbaidžāņu popūrijs, austrumu deja, Anatolijas popūrijs, gruzīnu-kaukāziešu deja ar nažiem, pēc tam dzīvs saksofons un DJ. 40 minūšu šovs, fona mūzika turpinās.' },
      { title: 'Pilns Bosfora nakts maršruts', desc: '3 stundu tūre: Dolmabahçe, Çırağan, Ortaköy mošeja, Bosfora tilts, Bebek, Rumeli Hisarı, FSM tilts, Beylerbeyi, Üsküdar, Jaunavas tornis. Abi krasti, eiropas un āzijas.' },
      { title: 'No €{p.dinnerStd} — maksā uz kuģa', desc: '€{p.dinnerStd}/personai (no €{p.dinnerStdOriginal}) — viena ēdienkarte visiem viesiem. Bez priekšapmaksas. Bezmaksas atcelšana līdz 2 stundām pirms atiešanas.' }
    ],
    faq: [
    {
      q: "Kādi šovi ir vakariņu kruīza programmā?",
      a: "Astoņi priekšnesumi: Oba Dombra (Vidusāzijas šamaņu ritms), Mevlanas griežošos dervišu ceremonija, Sarı Gelin, azerbaidžāņu popurijs, austrumnieciskais šovs (vēderdeja), turku un Anatolijas popurijs, gruzīnu Gandagan un Kaukāza popurijs ar tradicionālo nažu deju, kā arī noslēgumā dzīvs saksofons un DJ. Programma norisinās visa kruīza laikā, un secība var mainīties."
    },
      { q: 'Cik maksā vakariņu kruīzs Stambulā?', a: 'Mūsu vakariņu kruīzs €{p.dinnerStd}/personai (parastā cena €{p.dinnerStdOriginal}) — viena ēdienkarte visiem viesiem. 0–3 gadi bez maksas, 4–9 gadi €5 atlaide. Maksā uz kuģa — bez priekšapmaksas.' },
      { q: 'Kas ir iekļauts vakariņu kruīza Stambulā cenā?', a: '3 stundu tūre pa Bosforu, turku vairāku ēdienu vakariņas (meze, silta uzkoda, galvenais ēdiens, deserts), neierobežoti bezalkoholiskie dzērieni, dzīvs tautas deju šovs (sema, tautas dejas, austrumu), dzīvā mūzika + DJ, pieeja atklātajam klājam, nodokļi iekļauti. Viesnīcas transfērs un alkohols ir brīvprātīgi papildinājumi.' },
      { q: 'No kurienes atiet vakariņu kruīzs Stambulā?', a: 'Kabataş piestātne, Stambula — Eiropas krastā, netālu no Dolmabahçe pils. Precīzais tikšanās punkts tiek paziņots pa WhatsApp / Telegram pēc rezervācijas. Gājēju video no Dolmabahçe tramvaja pieturas un Kabataş tramvaja pieturas atrodami tikšanās vietas sadaļā augstāk.' },
      { q: 'Cik ilgs ir vakariņu kruīzs — un kad tas sākas?', a: 'Kopā 3 stundas. Iekāpšana no plkst. 20:00, kuģis atiet precīzi plkst. 21:00, atgriežas ap plkst. 00:00. Iesakām ierasties 15–20 minūtes ātrāk, lai apsēstos un izvēlētos vietu.' },
      { q: 'Vai man jārezervē iepriekš, vai varu vienkārši ierasties?', a: 'Rezervē iepriekš — vietas piepildās, īpaši nedēļas nogalēs un brīvdienās. Pēdējās minūtes rezervācijas bieži ir iespējamas, bet ne garantētas. Veidlapa šajā lapā nodrošina tev vietu mazāk nekā 1 minūtes laikā. Maksā uz kuģa, tāpēc nav finansiāla riska rezervēt agri.' },
      { q: 'Vai vakariņu kruīzs Stambulā ir piemērots veģetāriešiem / halal / uztura ierobežojumiem?', a: 'Jā — visa gaļa ir halal sertificēta. Veģetārais galvenais ēdiens (falafels, ceptie kartupeļi, bulguro plovs, dārzeņu sautējums, sīpolu gredzeni) pieejams bez papildu maksas. Alerģijas var pielāgot, ja paziņo rezervējot. Alkohols ir brīvprātīgs papildinājums, nekad netiek uzspiests.' }
    ],
    cta: {
      primary: 'Rezervē vakariņu kruīzu · Maksā uz kuģa',
      secondary: '4,8★ · TÜRSAB licencēts · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Nakts tūre Stambulā no €{p.dinnerStd} — vakariņu kruīzs pa Bosforu + šovs',
      description: '3 stundu kruīzs pa Bosforu ar vakariņām un dzīvu šovu. Atiešana 21:00 no Kabataş. Bezmaksas atcelšana, maksā uz kuģa. 11 317 atsauksmes. Brīvprātīgs viesnīcas transfērs.'
    },
    hero: {
      h1: 'Stambula naktī',
      subtitle: 'Stambulas ieteicamākā nakts tūre — 3 stundu Bosfora kruīzs ar vakariņām, dzīvu izklaidi un pilsētas ikoniskākajiem izgaismotajiem skatiem.',
      badge: 'Ikoniska Stambulas nakts · 3 stundas · Vakariņas iekļautas'
    },
    intro: [
      '**Nakts tūrei Stambulā** jādara trīs lietas: parādīt tev pilsētas ikoniskos orientierus, dot tev labu ēdienu un tevi izklaidēt. Mūsu Bosfora vakariņu kruīzs dara visus trīs vienā 3 stundu vakarā — un tāpēc vairums Stambulas ceļvežu to iesaka kā #1 nakts tūres pieredzi.',
      '**Nakts tūres Stambulā** maršruts aptver labākos izgaismotos orientierus: Dolmabahçe pils, Ortaköy mošeja, Bosfora tilts (maina krāsas), Bebek rajons, Rumeli Hisarı, FSM tilts, Beylerbeyi pils, Āzijas krasta Üsküdar un tālumā Jaunavas tornis. Vairums pilsētas autobusu rāda tev šos no autobusa — mēs rādām tos no ūdens, kur tie ir visdramatiskākie.',
      'Vakariņas ir iekļautas (turku vairāku ēdienu ēdienkarte), dzīvs turku tautas deju šovs, sema, austrumu deja un DJ programma. Ja esi Stambulā 2–3 dienas, šis ir tas viens vakars, kas atstāj spēcīgāko iespaidu. 4,8★ no vairāk nekā 11 317 ceļotājiem, maksā uz kuģa, bez priekšapmaksas.'
    ],
    highlights: [
      { title: 'Visi Stambulas ikoniskie nakts skati', desc: 'Dolmabahçe pils, Ortaköy mošeja, izgaismotais Bosfora tilts, Rumeli Hisarı, FSM tilts, Beylerbeyi pils, Jaunavas tornis. Katrs svarīgais orientieris savā maksimālajā nakts izgaismojumā.' },
      { title: 'Pilnas turku vakariņas iekļautas', desc: '10 meze, silta uzkoda, galvenais ēdiens (lasis/jūras asaris/vista/frikadeles/veģetārais), deserts, neierobežoti bezalkoholiskie dzērieni. Halal sertificēts. Cena €{p.dinnerStd}/personai — viss iekļauts.' },
      { title: 'Dzīvas tautas dejas + sema + austrumu', desc: 'Astoņu priekšnesumu dzīvā programma: Oba Dombra, Mevlana sema priekšnesums, Sarı Gelin, azerbaidžāņu popūrijs, austrumu deja, Anatolijas popūrijs, gruzīnu-kaukāziešu deja ar nažiem, pēc tam dzīvs saksofons un DJ. 40 minūšu šovs, fona mūzika visu vakaru.' },
      { title: 'Viegli pirmajiem apmeklētājiem Stambulā', desc: 'Centrāls tikšanās punkts (Kabataş piestātne), viesnīcas transfērs (+€{p.transfer}/personai), angliski runājoša komanda, maksā uz kuģa. Nulle loģistikas stresa. Atnāc, izbaudi, dodies.' }
    ],
    faq: [
      { q: 'Kāda ir labākā nakts tūre Stambulā?', a: 'Bosfora vakariņu kruīzs konsekventi ierindojas #1 vietā. Iemesli: (1) tas dod tev visus ikoniskos nakts skatus no ūdens, (2) ietver vakariņas un šovu vienā paketē, (3) 3 stundas ir pietiekami, lai redzētu daudz bez noguruma, (4) centrāls tikšanās punkts, (5) maksā uz kuģa samazina rezervācijas berzi. Vairums Stambulas ceļvežu to iesaka kā "vienīgo obligāto naktī".' },
      { q: 'Cik maksā nakts tūre Stambulā?', a: 'Mūsu nakts tūre ar vakariņām pa Bosforu: €{p.dinnerStd}/personai. Iekļauta tūre, vakariņas, izklaide, bezalkoholiskie dzērieni. Brīvprātīgi: 2 glāzes alkohola +€{p.alcohol2}/personai, viesnīcas transfērs +€{p.transfer}/personai. Maksā uz kuģa — bez priekšapmaksas.' },
      { q: 'Vai nakts tūre Stambulā ir droša vieniem ceļotājiem?', a: 'Jā — ļoti droša. TÜRSAB licencēts kuģis, profesionāla angliski runājoša komanda, CCTV uz klāja, pieejamas glābšanas vestes. Daudzi vieni ceļotāji rezervē šo tūri. Ēd pie koplietojama vai privāta galda (tava izvēle), un vakars ir iekļaujošs — satiec citus ceļotājus, ja vēlies, vai paliec sev.' },
      { q: 'Kad ir labākais laiks nakts tūrei Stambulā?', a: 'Mūsu Bosfora vakariņu kruīzs ir 21:00–00:00 (3 stundas). Tas ir maksimālais izgaismojuma laiks visiem Stambulas orientieriem — pilnībā izgaismoti tilti, mirdzošas pilis, mēness uz ūdens. Ja vēlies arī zelta stundu, brauc vasarā: uzkāpšana uz klāja sākas plkst. 20:00, un no maija līdz augustam saule riet tieši ap plkst. 21:00 atiešanu — viens un tas pats kruīzs aptver abus.' },
      { q: 'Kā nokļūt līdz nakts tūres tikšanās vietai Stambulā?', a: 'Tikšanās vieta ir Kabataş piestātne (Eiropas centrs, netālu no Dolmabahçe pils). Ar tramvaju: T1 līdz Kabataş pieturai (gala stacija). Ar taksi: ~15 min no Taksim. Kājām: 20 min no Taksim pa İnönü Bulvarı. Gājēju video atrodami šajā lapā. Viesnīcas transfērs pieejams par +€{p.transfer}/personai, ja dod priekšroku.' },
      { q: 'Vai varu rezervēt nakts tūri Stambulā tajā pašā dienā?', a: 'Bieži jā, īpaši darba dienās. Nedēļas nogales piepildās ātrāk. Rezervācijas veidlapa šajā lapā ļauj pārbaudīt pieejamību šovakar un rezervēt mazāk nekā 1 minūtes laikā. Steidzamiem tās pašas dienas pieprasījumiem raksti mums WhatsApp +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Rezervē nakts tūri · Maksā uz kuģa',
      secondary: 'No €{p.dinnerStd}/personai · Vakariņas + šovs iekļauti · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Kuģa tūre Stambulā no €{p.dinnerStd} — Bosfors + vakariņas + šovs',
      description: '3 stundu kuģa tūre: Bosfora kruīzs, pilnas turku vakariņas, dzīvs tautas šovs, izgaismotie nakts skati. Bezmaksas atcelšana, maksā uz kuģa. 11 317 atsauksmes.'
    },
    hero: {
      h1: 'Kuģa tūre Stambulā',
      subtitle: 'Stambulas visvairāk rezervētā kuģa tūre — Bosfora kruīzs ar turku ēdienu, dzīvu izklaidi un pilsētas ikoniskajiem skatiem no ūdens.',
      badge: '4,8★ · TÜRSAB A-17672 · Maksā uz kuģa'
    },
    intro: [
      'Kad meklē "kuģa tūri Stambulā", tu meklē to vienu, kas definē pilsētu no ūdens: Bosforu. Mūsu 3 stundu Bosfora kuģa tūre ved tevi garām katram svarīgam Stambulas orientierim — Dolmabahçe pilij, Ortaköy mošejai, Bosfora tiltam, Rumeli Hisarı, Beylerbeyi pilij un Jaunavas tornim — ar pilnām turku vakariņām un dzīvu izklaidi.',
      'Atšķirībā no daudzajiem 1 stundas tūristu prāmjiem, kas aptver mazāk Bosfora un izlaiž vakariņas un izklaidi, **mūsu kuģa tūre Stambulā** ir pilna vakara pieredze: iekāpšana plkst. 20:00 pie Kabataş piestātnes, tūre līdz pusnaktij, 10 meze, galvenais ēdiens, deserts, sema, tautas dejas, austrumu deja un DJ. Saņem arī vakara izeju kā tūres daļu.',
      'Vienalga, vai tev ir viens vakars vai vesela nedēļa Stambulā, **šī kuģa tūre Stambulā** dara darbu. 4,8★ no vairāk nekā 11 317 ceļotājiem, TÜRSAB licencēta (A-17672), halal sertificēta ēdienkarte un maksā uz kuģa — bez finansiālas saistības līdz brīdim, kad esi apmierināts ar pieredzi.'
    ],
    highlights: [
      { title: 'Visi svarīgie Bosfora orientieri', desc: 'Dolmabahçe, Çırağan, Ortaköy mošeja, Bosfora tilts, Bebek, Rumeli Hisarı, FSM tilts, Beylerbeyi pils, Üsküdar, Jaunavas tornis. Abi krasti, eiropas un āzijas, vienā tūrē.' },
      { title: 'Vakariņas + šovs iekļauti', desc: 'Ne tikai kuģa tūre — pilnas turku vairāku ēdienu vakariņas, dzīvs tautas deju šovs, sema, austrumu deja, DJ. Kas padara 3 stundas jautras, ne tikai apskates.' },
      { title: 'Vakara atiešana (labākais izgaismojums)', desc: 'Atiešana plkst. 21:00 iemūžina Bosforu pilnībā izgaismotā krāšņumā — tilti, pilis, mošejas, visas izgaismotas. Dramatiskākas nekā dienas tūres, kas rāda tos pašus orientierus plakanā gaismā.' },
      { title: 'Vienkārša rezervācija, vienkārša samaksa', desc: 'Rezervē ar veidlapu šajā lapā mazāk nekā 1 minūtes laikā. Maksā uz kuģa — bez priekšapmaksas. Viesnīcas transfērs pieejams no +€{p.transfer}/personai. Bezmaksas atcelšana 2 stundas pirms atiešanas.' }
    ],
    faq: [
      { q: 'Kāda ir labākā kuģa tūre Stambulā?', a: 'Bosfora vakariņu kruīzs konsekventi ierindojas #1. Aptver visus svarīgos orientierus, ietver vakariņas un izklaidi un kursē vakarā, kad orientieri ir izgaismoti. Citas iespējas (hop-on prāmji, rīta tūristu kuģi) aptver īsākus maršrutus, izlaiž vakariņas un nepiedāvā izklaidi. Vienam vakaram Stambulā šī ir vispilnīgākā kuģa tūre.' },
      { q: 'Cik ilgi turpinās kuģa tūre Stambulā?', a: '3 stundas. Iekāpšana no plkst. 20:00 pie Kabataş piestātnes, atiešana 21:00, atgriešanās ~00:00. Aptver Bosforu no Dolmabahçe līdz Rumeli Hisarı un atpakaļ. Pietiekami laika pilnām vakariņām + šovam bez noguruma.' },
      { q: 'Cik maksā kuģa tūre Stambulā?', a: 'Mūsu kuģa un vakariņu tūre: €{p.dinnerStd}/personai (no €{p.dinnerStdOriginal}) — viena ēdienkarte visiem viesiem. 0–3 gadi bez maksas, 4–9 gadi puscena. Maksā uz kuģa. Alkohols un viesnīcas transfērs ir brīvprātīgi papildinājumi.' },
      { q: 'No kurienes atiet kuģa tūres Stambulā?', a: 'Mūsu kuģis atiet no Kabataş piestātnes, Eiropas Stambulas centra, netālu no Dolmabahçe pils. Pieejams ar tramvaju T1 (Kabataş pietura), taksi 15 min no Taksim vai kājām 20 min no Taksim. Viesnīcas transfērs pieejams no centrālajiem rajoniem par +€{p.transfer}/personai.' },
      { q: 'Vai šī kuģa tūre ir piemērota ģimenēm ar bērniem?', a: 'Jā — ļoti ģimenei draudzīga. Bērni 0–3 gadi bez maksas, 4–9 gadi €5 atlaide. Pārklāta iekštelpu zona, bērnu ēdienkarte pēc pieprasījuma un izklaide (sema, tautas dejas), kas saista bērnus. Daudzas ģimenes no visas pasaules rezervē šo tūri.' },
      { q: 'Vai man jāņem kas līdzi kuģa tūrei?', a: 'Pase vai ID (reģistrācijai uz kuģa), viegla jaka (klājs var kļūt vēss), ērti apavi, ja plāno dejot. Viedtālrunis bildēm. Skaidra nauda vai karte samaksai uz kuģa (abas pieņemtas). Viss pārējais — ēdiens, dzērieni, izklaide — ir uz kuģa.' }
    ],
    cta: {
      primary: 'Rezervē kuģa tūri · Maksā uz kuģa',
      secondary: '3 stundas · Vakariņas + šovs · No €{p.dinnerStd}/personai · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Bosfora ekskursija no €{p.dinnerStd} — vakariņu kruīzs Stambulā + šovs',
      description: '3 stundu ekskursija pa Bosforu: turku vakariņas, dzīvs tautas šovs, izgaismotie nakts skati. Atiešana 21:00 no Kabataş. Bezmaksas atcelšana, maksā uz kuģa. 11 317 atsauksmes.'
    },
    hero: {
      h1: 'Ekskursija pa Bosforu',
      subtitle: 'Visieteicamākā Bosfora ekskursija ceļotāju vidū — 3 stundu vakariņu kruīzs, kas aptver katru svarīgu Stambulas orientieri, ar ēdienu, izklaidi un nakts skatiem.',
      badge: 'Pilna Bosfora pieredze · Vakara atiešana'
    },
    intro: [
      '**Ekskursija pa Bosforu** var nozīmēt 1 stundas tūristu prāmi vai pilnu vakariņu vakara tūri — mēs darām pēdējo un vairums ceļotāju to atrod vērtīgāku. 3 stundas, €{p.dinnerStd}/personai, vakariņas un izklaide iekļauta. Tu nekuģojies tikai garām orientieriem — tu ēd, skaties šovu un baudi vakaru.',
      'Maršruts **mūsu Bosfora ekskursijai** aptver visu, ko vērts redzēt: Dolmabahçe pils (19. gadsimta osmaņu sultānu rezidence), Ortaköy mošeja (viena no Stambulas fotografētākajām mošejām), Bosfora tilts (maina krāsas naktī), Rumeli Hisarı (Fatih Sultan Mehmet uzcelta 1452. gadā), Beylerbeyi pils (Āzijas krasts) un Jaunavas tornis uz nelielas saliņas. Visu paskaidro angliski runājoša komanda.',
      'Vienalga, vai esi Stambulā 24 stundas vai nedēļu, šī ir **Bosfora ekskursija**, kas dod tev visvairāk vienā vakarā. Novērtēta ar 4,8★ no vairāk nekā 11 317 ceļotājiem, TÜRSAB licencēta A-17672, halal draudzīga ēdienkarte, maksā uz kuģa — bez priekšapmaksas riska.'
    ],
    highlights: [
      { title: 'Viss Bosfors vienā', desc: 'Eiropas krasts (Dolmabahçe, Ortaköy, Rumeli Hisarı), Āzijas krasts (Beylerbeyi, Üsküdar), abi Bosfora tilti, Jaunavas tornis. Katrs svarīgais orientieris redzams 3 stundu laikā.' },
      { title: 'Vakariņas + izklaide iekļautas', desc: 'Ne tikai tūristu prāmis — pilnas turku vakariņas ar meze, galveno ēdienu, desertu. Dzīvs tautas deju šovs, sema, austrumu deja, DJ. Izklaides vērtība pāri vienkāršam skatam.' },
      { title: 'Vakars = labākais izgaismojums', desc: 'Dienas tūres pa Bosforu rāda orientierus plakanā gaismā. Vakara tūres iemūžina visu izgaismotu: mirdzošas pilis, krāsainie tilti, mošejas atspoguļotas tumšajā ūdenī. Labākas bildes, dramatiskāk.' },
      { title: 'No €{p.dinnerStd} — maksā uz kuģa', desc: 'Bez priekšapmaksas. Maksā uz kuģa (skaidrā vai ar karti). Bezmaksas atcelšana līdz 2 stundām pirms atiešanas. 0–3 gadi bez maksas, 4–9 gadi puscena. Caurspīdīgas cenas.' }
    ],
    faq: [
      { q: 'Kādas ir labākās ekskursijas pa Bosforu Stambulā?', a: 'Vakara tūres ar vakariņām konsekventi ir augšgalā. Dienas iespējas (1 stundas apļa tūres, 2 stundu tūristu kuģi) rāda mazāk un neietver vakariņas. Vērtības ziņā grūti pārspēt 3 stundu tūri ar vakariņām, šovu un centrālo tikšanās punktu. Mūsu tūres izmaksas €{p.dinnerStd} novērš atsevišķas vakara maltītes + izklaides nepieciešamību.' },
      { q: 'Cik ilgs ir Bosfora tūres ilgums?', a: 'Mūsu Bosfora ekskursija ilgst kopā 3 stundas (atiešana 21:00, atgriešanās 00:00). Ir īsākas iespējas (1 stundas tūristu prāmji, 90 minūšu tūres), bet tās izlaiž vakariņas un izklaidi. Pilnai vakara pieredzei 3 stundas ir ideāli — pietiekami, lai redzētu visu bez noguruma.' },
      { q: 'Vai Bosfora ekskursija ir vērts?', a: 'Jā — gandrīz visi Stambulas ceļvedi iekļauj "Bosfora kruīzu" 5 galvenajās obligātajās lietās. Pilsēta uzbūvēta ap šo jūras šaurumu; ja neesi redzējis Bosforu no ūdens, tad īsti neesi redzējis Stambulu. Mūsu konkrētā vakara tūre pievieno vakariņas un izklaidi, padarot to par pilnu vakara ekskursiju, nevis tikai apskati.' },
      { q: 'Ko vajadzētu ņemt līdzi Bosfora ekskursijai?', a: 'Pase vai ID (reģistrācijai uz kuģa), viegla jaka (vakara klājs ir vēss), viedtālrunis/kamera, ērti apavi deju grīdai. Skaidra nauda vai karte samaksai. Viss pārējais ir uz kuģa. Viesnīcas transfērs pieejams par +€{p.transfer}/personai, ja nevēlies izmantot sabiedrisko transportu.' },
      { q: 'Vai Bosfora ekskursija ir piemērota bērniem?', a: 'Jā — ļoti ģimenei draudzīga. Bērni 0–3 gadi bez maksas (transfērs iekļauts), 4–9 gadi €5 atlaide. Pārklāta iekštelpu zona, bērnu ēdienkarte pēc pieprasījuma un maiga, saistoša izklaide. Daudzas ģimenes rezervē šo tūri kā Stambulas brauciena augstāko punktu.' },
      { q: 'Kādi ir Bosfora ekskursijas pieturpunkti?', a: 'Tā ir nepārtraukta tūre — mēs nepieturam pie orientieriem (bez izkāpšanas). Kuģis kuģo garām katram orientierim, komanda paskaidro, ko redzi, atpūties pie galda vai izej uz atklātā klāja bildēm. Bez rindām, bez staigāšanas, bez plānošanas stresa — tikai 3 mierīgas stundas uz ūdens.' }
    ],
    cta: {
      primary: 'Rezervē Bosfora ekskursiju · Maksā uz kuģa',
      secondary: '3 stundas · Vakariņas + šovs · Bezmaksas atcelšana 2 stundas iepriekš · TÜRSAB licencēts',
      tertiary: 'Pārbaudīt pieejamību'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bosfora kruīza biļetes no €{p.dinnerStd} — maksā uz kuģa',
      description: 'Tiešās Bosfora kruīza biļetes. €{p.dinnerStd}/personai, viena ēdienkarte. Bez priekšapmaksas, maksā uz kuģa. Bezmaksas atcelšana līdz 2 stundām pirms.'
    },
    hero: {
      h1: 'Bosfora kruīza biļetes',
      subtitle: 'Izlaid starpnieku maksas — pērc Bosfora kruīza biļetes tieši no mums. Bez priekšapmaksas, maksā uz kuģa, bezmaksas atcelšana līdz 2 stundām pirms atiešanas.',
      badge: 'Tiešā rezervācija · Bez priekšapmaksas · 40% ATLAIDE'
    },
    intro: [
      'Meklē **Bosfora kruīza biļetes**? Pērc tieši. Mūsu biļetes ir €{p.dinnerStd} — 40% atlaide no parastās cenas (€{p.dinnerStdOriginal}). Trešo pušu rezervācijas vietnes parasti pievieno 20–40% komisiju. Rezervējot tieši, tu ietaupi — un joprojām maksā uz kuģa.',
      'Process **Bosfora kruīza biļetēm**: aizpildi veidlapu šajā lapā mazāk nekā 1 minūtes laikā (datums, viesu skaits, pakete, kontakti), mēs apstiprināsim nekavējoties pa WhatsApp / Telegram, ierodies pie Kabataş piestātnes plkst. 20:00, maksā uz kuģa, baudi 3 stundu vakariņu kruīzu. Nav fiziskas biļetes, ko izdrukāt, nav kupona, kas jāsaņem e-pastā — apstiprinājums ir tava biļete.',
      'Vienalga, vai rezervē šī vakara vakariņu kruīzu vai rezervē uz konkrētu datumu nākamajā nedēļā, **tiešās Bosfora kruīza biļetes** ir ātrākais veids. Novērtētas ar 4,8★, TÜRSAB licencētas (A-17672), halal sertificēta ēdienkarte un atbalsta papildinājumus viesnīcas transfēram un alkoholam.'
    ],
    highlights: [
      { title: 'Tiešā rezervācija — bez starpnieku maksas', desc: '€{p.dinnerStd}/personai. Trešo pušu vietnes ņem €30–80+ par to pašu tūri. Ietaupi, rezervējot tieši no mums. Bez slēptām maksām, bez komisijas pievienojuma.' },
      { title: 'Maksā uz kuģa — bez priekšapmaksas', desc: 'Rezervē vietu tagad, maksā, kad iekāp. Skaidra nauda vai karte pieņemta. Bez maksas, ja atceļ 2+ stundas pirms atiešanas. Nulle finansiālā riska rezervēt agri.' },
      { title: 'Apstiprinājums mazāk nekā 1 minūtes laikā', desc: 'Aizpildi veidlapu → apstiprināsim pa WhatsApp / Telegram. Bez PDF kupona, kas jādrukā no e-pasta. Mūsu ziņojums ir tava biļete. Ierodies pie piestātnes plkst. 20:00.' },
      { title: 'Pašreizējā uzsākšanas cena 40% ATLAIDE', desc: 'No €{p.dinnerStdOriginal}, tagad €{p.dinnerStd}. 40% atlaide, jo rezervē tieši. Nav laika ierobežots triks — tā ir mūsu standarta tiešās rezervācijas cena.' }
    ],
    faq: [
      { q: 'Cik maksā Bosfora kruīza biļetes?', a: '€{p.dinnerStd}/personai (parastā €{p.dinnerStdOriginal}). Ietver 3 stundu tūri, turku vairāku ēdienu vakariņas, dzīvu tautas deju šovu, neierobežotus bezalkoholiskos dzērienus. 0–3 gadi bez maksas, 4–9 gadi €5 atlaide. Maksā uz kuģa — bez priekšapmaksas.' },
      { q: 'Kur varu nopirkt Bosfora kruīza biļetes?', a: 'Tieši no šīs lapas — aizpildi rezervācijas veidlapu, mēs apstiprināsim nekavējoties pa WhatsApp / Telegram. Maksā uz kuģa. Trešo pušu platformas (Viator, GetYourGuide, Klook) arī pārdod biļetes, bet parasti ņem €30–80+ — tas ir starpnieku pievienojums. Tiešais ir lētāks un ātrāks.' },
      { q: 'Vai man jāizdrukā Bosfora kruīza biļete?', a: 'Nē — nav nepieciešama fiziska biļete vai kupons. Pēc rezervācijas nosūtīsim apstiprinājumu pa WhatsApp (vai Telegram) ar tikšanās vietu, laiku un rezervācijas vārdu. Vienkārši parādi telefonu pie piestātnes. Tas ir viss.' },
      { q: 'Vai varu atcelt vai atgriezt Bosfora kruīza biļeti?', a: 'Jā — bezmaksas atcelšana līdz 2 stundām pirms atiešanas. Vienkārši raksti pa WhatsApp. Tā kā vēl neesi samaksājis (maksā uz kuģa), atmaksa nav nepieciešama — vienkārši neieradīsies, bez maksas. Daudz elastīgāk nekā iepriekš apmaksātas biļetes no trešajām pusēm.' },
      { q: 'Vai Bosfora kruīza biļetes ir pieejamas tajā pašā dienā?', a: 'Bieži jā, īpaši darba dienās. Nedēļas nogales un brīvdienas piepildās ātrāk. Pārbaudi pieejamību ar rezervācijas veidlapu — atjaunina reālā laikā. Pēdējās minūtes rezervācija parasti iespējama dažas stundas pirms atiešanas plkst. 21:00. Steidzamiem pieprasījumiem — WhatsApp.' },
      { q: 'Vai bērnu biļetes Bosfora kruīzam ir bez maksas?', a: 'Bērni **0–3 gadi pilnīgi bez maksas** (nekādas maksas, nekādas slēptas izmaksas, transfērs iekļauts). **4–9 gadi €5 atlaide** (€{p.dinnerStd} − €5 = €19.30 Standartā). **10+ gadi pilna pieaugušā cena.** Caurspīdīgas, fiksētas cenas — bez "mazuļa maksas" trikiem.' }
    ],
    cta: {
      primary: 'Pirkt biļetes · Maksā uz kuģa',
      secondary: 'Tiešā rezervācija · Bez priekšapmaksas · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pārbaudīt pieejamību'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosfors pēdējā brīdī no €{p.dinnerStd} — rezervē šodien, maksā uz kuģa',
      description: 'Rezervē Bosfora kruīzu tajā pašā dienā. WhatsApp apstiprinājums minūtēs. Atiešana 21:00 no Kabataş. Bezmaksas atcelšana, maksā uz kuģa. 11 317 atsauksmes.'
    },
    hero: {
      h1: 'Bosfora kruīzs pēdējā brīdī',
      subtitle: 'Pieejamība šovakar, apstiprināta minūtēs. Bez priekšapmaksas, bez gatava kupona — vienkārši ierodies pie piestātnes un baudi vakaru.',
      badge: 'Pēdējās minūtes rezervācija · Apstiprināts minūtēs · Maksā uz kuģa'
    },
    intro: [
      'Nolaidies Stambulā pēcpusdienā un vēlies lielisku vakaru šovakar? **Bosfora kruīzs pēdējā brīdī** strādā. Mēs īpaši rezervējam vietas pēdējās minūtes rezervācijām, jo zinām, ka daudzi ceļotāji izlemj no rīta. Aizpildi veidlapu šeit, mēs apstiprināsim pa WhatsApp minūtēs, ierodies pie Kabataş piestātnes plkst. 20:00, maksā uz kuģa, baudi.',
      '**Mūsu pēdējā brīža Bosfora kruīzam** ir tā pati vakara programma kā iepriekšējām rezervācijām: 3 stundas uz ūdens (21:00–00:00), turku vairāku ēdienu vakariņas, dzīvs tautas deju šovs, sema, austrumu deja, DJ. Dolmabahçe pils izgaismota, Ortaköy mošeja, Bosfora tilts — tie paši ikoniskie skati. Tā pati cena €{p.dinnerStd}/personai.',
      'Atcelšana tajā pašā dienā ir bez maksas līdz 2 stundām pirms atiešanas, jo **maksā uz kuģa** nozīmē, ka tu vēl neesi neko apsolījis. Rezervēji plkst. 14:00 un pārdomāji līdz plkst. 19:00? Vienkārši raksti WhatsApp — nav atmaksas, nav problēmas. Šī ir elastība ar **pēdējās minūtes Stambulas tūri**, ko ceļotāji novērtē.'
    ],
    highlights: [
      { title: 'Vietas joprojām pieejamas šovakar', desc: 'Mēs rezervējam 5–10 vietas dienā pēdējās minūtes rezervācijām. Pārbaudi veidlapu augstāk — pieejamība reālā laikā. Ja šodienas tūre ir pilna, rītdienas parasti ir atvērta.' },
      { title: 'Apstiprinājums mazāk nekā 5 minūtēs', desc: 'Aizpildi veidlapu → WhatsApp/Telegram apstiprinājuma ziņojums → gatavs. Bez e-pasta kupona, ko gaidīt, bez QR koda, ko drukāt. Mūsu ziņojums ir tava biļete.' },
      { title: 'Nulle maksājuma, līdz esi uz kuģa', desc: 'Maksā uz kuģa, skaidrā vai ar karti. Ja neatnāc (plānu maiņa, slimība, laikapstākļi), bez maksas. Bezmaksas atcelšana līdz 2 stundām pirms atiešanas. Patiesi pēdējās minūtes draudzīgs.' },
      { title: 'Viesnīcas transfērs tajā pašā dienā bieži pieejams', desc: 'Viesnīcas transfēram parasti nepieciešama 24 stundu iepriekšēja paziņošana, bet pēdējās minūtes rezervācijām starp plkst. 14:00–18:30 mēs bieži varam organizēt paņemšanu par +€{p.transfer}/personai. Steidzamiem transfēra pieprasījumiem — WhatsApp.' }
    ],
    faq: [
      { q: 'Vai patiešām varu rezervēt Bosfora kruīzu šovakar?', a: 'Jā — bieži. Mēs rezervējam vietas pēdējās minūtes rezervācijām. Pārbaudi veidlapu augstāk par pieejamību šovakar. Ja ir brīvas vietas, vari rezervēt līdz plkst. 21:00. Nedēļas nogales ir aizņemtākas — rezervē agrāk dienā, ja iespējams.' },
      { q: 'Cik pēdējā brīdī varu rezervēt?', a: 'Rezervācijas ir atvērtas līdz plkst. 21:00 — līdz pat atiešanas brīdim. Ja līdz atiešanai palicis pavisam maz laika, rakstiet mums tieši WhatsApp uz +90 532 244 29 22 — ja vietas ir brīvas, apstiprināsim manuāli.' },
      { q: 'Vai pēdējās minūtes Bosfora kruīzs ir dārgāks?', a: 'Nē — tā pati cena kā iepriekšējai rezervācijai. €{p.dinnerStd}/personai. Mums nav "dinamiskās cenu noteikšanas" vai pēdējās minūtes pievienojuma. Tas pats kuģis, tās pašas vakariņas, tas pats šovs, tā pati cena.' },
      { q: 'Kas notiek, ja šodienas tūre ir pilnībā rezervēta?', a: 'Rītdienas tūre parasti ir atvērta — mēs darbojamies 365 dienas gadā, katru dienu. Vari rezervēt rītdien un joprojām būt "pēdējā minūtē", kas nozīmē, ka tikko izlēmi. Darba dienas tūrei ir vairāk vietas nekā nedēļas nogales tūrei.' },
      { q: 'Vai varat organizēt viesnīcas transfēru pēdējā brīdī?', a: 'Pēdējās minūtes transfērs iespējams līdz ~plkst. 18:30 plkst. 21:00 tūrei. Pēc plkst. 18:30 mums var nebūt pieejama šofera — tādā gadījumā vari paņemt taksi līdz Kabataş piestātnei (15 min no Taksim, 10 min no Sultanahmet, ~€10–15). Centrāli un viegli.' },
      { q: 'Kas, ja jau esmu pie Kabataş un gribu iekāpt?', a: 'Ja esi pie piestātnes un ir brīvas vietas, vari vienkārši iekāpt. Raksti mums WhatsApp vai pajautā komandai — ja ir vieta, pievienosim tevi. Tā pati cena, maksā uz kuģa. Tūres nozarē to sauc par "walk-on" — šeit tas strādā.' }
    ],
    cta: {
      primary: 'Rezervē šovakar · Maksā uz kuģa',
      secondary: 'Pēdējās minūtes rezervācija · Apstiprināts minūtēs · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'WhatsApp steidzamām rezervācijām'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Kruīza cena Stambulā no €{p.dinnerStd} — caurspīdīgas cenas',
      description: 'Bosfora kruīza cenas Stambulā: €{p.dinnerStd}/personai, viena ēdienkarte. Bērni 0–3 bez maksas, 4–9 puscena. Caurspīdīgi papildinājumi.'
    },
    hero: {
      h1: 'Kruīza cena Stambulā',
      subtitle: 'Caurspīdīgas cenas, bez slēptām maksām. €{p.dinnerStd}/personai — un tu maksā uz kuģa, ne tagad.',
      badge: 'Caurspīdīgs · 40% ATLAIDE tieši · 0–3 gadi bez maksas'
    },
    intro: [
      '**Kruīzu cenas Stambulā** ļoti atšķiras — no €15 budžeta prāmjiem, kas izlaiž vakariņas, līdz €150+ kūrorta jahtām. Mūsu cena ir vidū un dod labāko vērtību: €{p.dinnerStd} ar pilnu 3 stundu vakariņu kruīzu un dzīvu šovu. Bez slēptām maksām, bez pārsteiguma pievienojumiem.',
      'Detalizēts pārskats par **Stambulas kruīza cenu**, jo caurspīdīgums ir svarīgs:\n\n- **Vakariņu kruīzs**: €{p.dinnerStd}/personai (no €{p.dinnerStdOriginal}, 40% atlaide). Ietver 3 stundu tūri, 10 meze, galveno ēdienu, desertu, neierobežotus bezalkoholiskos dzērienus, dzīvu šovu.\n- **0–3 gadi**: Bez maksas. 4–9 gadi: €5 atlaide. 10+ gadi: pilna cena.\n\nPapildinājumi (brīvprātīgi):\n- 2 glāzes alkohola: +€{p.alcohol2}/personai\n- Viesnīcas transfērs turp un atpakaļ: +€{p.transfer}/personai\n- Romantiskais galda klājums: +€{p.romantic}/galdam',
      'Un svarīgi: **maksā uz kuģa**. Tu neapsoli ne centu, līdz esi uz kuģa. Bezmaksas atcelšana līdz 2 stundām pirms atiešanas. Bez saistībām, bez riska — patērētājam draudzīgākā **Stambulas kruīza cena**, ko atradīsi.'
    ],
    highlights: [
      { title: 'Standarta: €{p.dinnerStd} (no €{p.dinnerStdOriginal})', desc: '40% atlaide no parastās cenas. 3 stundu tūre, pilnas turku vakariņas, dzīvs šovs, neierobežoti bezalkoholiskie dzērieni. Vispopulārākā pakete — sedz visu, kas vajadzīgs labam vakaram.' },
      { title: 'Maksā uz kuģa — €0 priekšapmaksa', desc: 'Rezervācija ir bez maksas un bez kartes datiem. Samaksā uz kuģa vakariņu kruīza laikā. Bezmaksas atcelšana līdz 2 stundām pirms atiešanas.' },
      { title: 'Bērnu cena: 0–3 bez maksas, 4–9 puscena', desc: '0–3 pilnīgi bez maksas (nekādu maksu). 4–9 ar €5 atlaidi no pieaugušā cenas. 10+ pilna pieaugušā cena. Caurspīdīgs, bez ģimenes cenu trikiem. Transfērs arī bez maksas 0–3.' },
      { title: 'Papildinājumi — tikai kad gribi', desc: 'Alkohols (2 glāzes): €{p.alcohol2}/personai. Transfērs: €{p.transfer}/personai. Romantiskais galds: €{p.romantic}/galdam. Visi brīvprātīgi, nav iesaiņoti. Izvēlies tikai to, kas vajadzīgs.' }
    ],
    faq: [
      { q: 'Cik maksā ekskursija Stambulā?', a: 'Vakariņu kruīzs: €{p.dinnerStd}/personai (parastā €{p.dinnerStdOriginal}, 40% atlaide). 0–3 gadi bez maksas, 4–9 gadi puscena. Maksā uz kuģa — bez priekšapmaksas. Bezmaksas atcelšana līdz 2 stundām pirms atiešanas.' },
      { q: 'Vai Stambulas ekskursijas cenā ir slēptas maksas?', a: 'Nē. Cena ietver: 3 stundu tūri, pilnas vakariņas (meze, uzkoda, galveno ēdienu, desertu), neierobežotus bezalkoholiskos dzērienus, dzīvu šovu, nodokļus. Brīvprātīgie papildinājumi (alkohols, transfērs, romantiskais galds) ir atsevišķi un caurspīdīgi cenoti — tu maksā tikai par to, ko pievieno. Bez "servisa maksas", "ostas nodevas", pārsteiguma pievienojumiem.' },
      { q: 'Kāpēc Stambulas ekskursijas cenai ir 40% atlaide — vai tas ir triks?', a: 'Bez trika. Parastā cena €{p.dinnerStdOriginal} ir tā, ko ņem trešo pušu vietnes (Viator, GetYourGuide, Klook) — ar savām komisijām. Rezervē tieši un saņem €{p.dinnerStd}. Tā ir 40% atšķirība. Bez laika ierobežotām vai dinamiskām cenu trikiem.' },
      { q: 'Kā Stambulas ekskursijas cena salīdzinās ar citām iespējām?', a: 'Apļa prāmji: €5–10, 1 stunda, bez vakariņām, bez izklaides, tikai apskate. Budžeta paku vakara tūres: €20–30, pārpildītas, vidējs ēdiens, īss šovs. Mūsu kruīzs (€{p.dinnerStd}): 3 stundas, pilnas vakariņas, pilns šovs, privāts galds, TÜRSAB licencēts. Kūrorta jahtas: €100–150+, pārmērīgi vieniem/pāriem.' },
      { q: 'Vai man jāmaksā Stambulas ekskursijas cena iepriekš?', a: 'Nē — **maksā uz kuģa**. Rezervē tagad (1 minūtes veidlapa), mēs apstiprināsim pa WhatsApp, atnāc plkst. 20:00 un maksā uz kuģa (skaidrā vai ar karti). Bezmaksas atcelšana līdz 2 stundām iepriekš. Nulle finansiālas saistības, līdz esi apmierināts.' },
      { q: 'Vai ir grupu atlaides Stambulas ekskursijas cenai?', a: 'Grupām 10+ varam piedāvāt 5–10% atlaidi — raksti WhatsApp ar grupas lielumu. 25+ apsver privāto tūri (viss kuģis tavai grupai, pielāgota ēdienkarte). 2–9 cilvēkiem piemērojamas standarta cenas — jau 40% atlaide no parastās cenas.' }
    ],
    cta: {
      primary: 'Rezervē · Maksā uz kuģa',
      secondary: 'No €{p.dinnerStd}/personai · 0–3 gadi bez maksas · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Bosfora apskate no €{p.dinnerStd} — Stambulas orientieri no ūdens',
      description: 'Bosfora apskates kruīzs: Dolmabahçe, Ortaköy, Bosfora tilts, Rumeli, Beylerbeyi, Jaunavas tornis. 3 stundu vakara tūre ar vakariņām. Bezmaksas atcelšana, maksā uz kuģa.'
    },
    hero: {
      h1: 'Apskate pa Bosforu',
      subtitle: 'Visi Stambulas ikoniskie orientieri — no ūdens, naktī, ar vakariņām. Viena 3 stundu tūre aptver Dolmabahçe, Ortaköy mošeju, Bosfora tiltu, Rumeli Hisarı un vairāk.',
      badge: '10+ orientieri · Eiropas un Āzijas krasts · 3 stundas'
    },
    intro: [
      '**Bosfora apskate** no ūdens pārspēj jebkuru autobusa tūri. Bosfors ir pilsētas vēsturiskākais kuģu ceļš — osmaņu sultāni, bizantiešu imperatori, grieķu tirgotāji un krievu karakuģi visi te ir gājuši garām. Šodien mūsu 3 stundu tūre, ar komentāriem no angliski runājošas komandas, kuģo garām katram svarīgam Stambulas orientierim, kas definē pilsētas siluetu.',
      'Maršruts **mūsu Bosfora apskates tūrei** (vakara atiešana, 21:00–00:00):\n\n1. **Dolmabahçe pils** — 19. gadsimta osmaņu rezidence, izgaismota naktī\n2. **Çırağan pils** — tagad luksusa viesnīca, karaliska vēsture\n3. **Ortaköy mošeja** — viena no Stambulas fotografētākajām mošejām, pie ūdens\n4. **Bosfora tilts** — mainās naktī starp zilu, violetu, zeltu\n5. **Bebek** — elegants rajons Eiropas krastā\n6. **Rumeli Hisarı** — Fatih Sultan Mehmet uzcelts 1452. gadā pirms Konstantinopoles krišanas\n7. **Fatih Sultan Mehmet tilts** — Bosfora otrais tilts, dramatisks loks\n8. **Beylerbeyi pils** — Āzijas krasts, osmaņu vasaras rezidence\n9. **Üsküdar** — Āzijas Stambulas piekraste, tradicionāls rajons\n10. **Jaunavas tornis** — tornis uz nelielas saliņas, viens no Stambulas romantiskākajiem simboliem',
      'Vakariņas un izklaide ir iekļautas — ne atsevišķi — tāpēc **Bosfora apskate** kļūst par pilnu vakaru. Turku vairāku ēdienu vakariņas, dzīvs tautas deju šovs, sema, austrumu deja, DJ. Novērtēts ar 4,8★ no vairāk nekā 11 317 ceļotājiem, TÜRSAB licencēts A-17672.'
    ],
    highlights: [
      { title: '10+ svarīgi Stambulas orientieri', desc: 'Dolmabahçe pils, Çırağan pils, Ortaköy mošeja, Bosfora tilts, Rumeli Hisarı, FSM tilts, Beylerbeyi pils, Üsküdar, Jaunavas tornis. Katrs svarīgais Stambulas orientieris vienā tūrē.' },
      { title: 'Abi krasti, Eiropas un Āzijas', desc: 'Eiropas krasts uz turieni (Dolmabahçe → Rumeli Hisarı), Āzijas krasts atpakaļceļā (Beylerbeyi → Üsküdar). Divi kontinenti vienā 3 stundu tūrē — tikai Stambula ļauj to darīt.' },
      { title: 'Vakara tūre = izgaismoti skati', desc: 'Dienas tūre rāda orientierus plakanā gaismā. Vakara tūre iemūžina tos dramatiskajā virsotnē: zelta dzelteni pilis, krāsainie tilti, mošejas atspoguļotas tumšajā ūdenī. Labākas bildes, neaizmirstamāk.' },
      { title: 'Vakariņas + šovs iekļauti', desc: 'Apskate + vakariņas + izklaide vienā paketē. Nav jāplāno atsevišķas vakariņas pēc tūres. No €{p.dinnerStd}/personai, maksā uz kuģa, kopā 3 stundas.' }
    ],
    faq: [
      { q: 'Kādus Bosfora orientierus es redzēšu?', a: 'Pēc kārtas: Dolmabahçe pils, Çırağan pils, Ortaköy mošeja, Bosfora tilts, Bebek rajons, Rumeli Hisarı, Fatih Sultan Mehmet tilts, Anadolu Hisarı, Beylerbeyi pils, Kuzguncuk, Üsküdar un Jaunavas tornis (redzams tālumā). 10+ svarīgi orientieri vienā 3 stundu maršrutā.' },
      { q: 'Vai Bosfora apskate ir labāka dienā vai naktī?', a: 'Dažādas pieredzes. Diena: skaidrāks arhitektūras detaļu skats, gaišāks bildēm. Nakts: dramatisks izgaismojums, mistiska atmosfēra, mazāk kuģu uz ūdens. Vairums ceļotāju izvēlas nakts tūri, jo orientieri izskatās maģiskāki — un vakariņas + šovs padara to par pilnu vakaru.' },
      { q: 'Vai kuģis pietur pie orientieriem bildēm?', a: 'Tā ir nepārtraukta tūre — bez pieturām (bez izkāpšanas). Kuģis kuģo garām katram orientierim, komanda paskaidro, ko redzi, vari iziet uz atklātā klāja bildēm. Bez rindām, bez staigāšanas, bez plānošanas stresa — vienkārši nepārtraukta 3 stundu bilžu iespēja.' },
      { q: 'Vai komanda komentē apskates laikā?', a: 'Jā — angliski runājoša komanda sniedz īsus komentārus, kamēr ejam garām katram svarīgam orientierim (vēsture, arhitektūra, fakti). Tā nav vadīta lekcija, drīzāk draudzīgs paskaidrojums, kamēr tu ēd. Dziļākai vēsturei iesakām apvienot ar Stambulas pastaigas tūri dienā.' },
      { q: 'Kā Bosfora apskate atšķiras no hop-on prāmja?', a: 'Hop-on prāmji (Şehir Hatları apļa prāmji): €5–10, 1–2 stundas, vienkārši, bez vakariņām, pārpildīti. Mūsu tūre: €{p.dinnerStd}, 3 stundas, pilnas vakariņas, dzīvs šovs, privāts galds, angļu komentāri. Nopietnai un ērtai apskatei vakara tūre ir labāka. Ātrai un lētai transportēšanai apļa prāmis strādā.' },
      { q: 'Vai varu fotografēt orientierus no kuģa?', a: 'Jā — pilnīgi. Atklātajam klājam ir izcilas fotografēšanas vietas. Orientieri paiet 100–200 metru attālumā no kuģa. Viedtālruņa foto iznāk lieliski; DSLR/spoguļkameru lietotāji var iegūt brīnišķīgus kadrus, īpaši zelta stundas-uz-zilās-stundas pārejā agrā vakarā.' }
    ],
    cta: {
      primary: 'Rezervē apskates tūri · Maksā uz kuģa',
      secondary: '10+ orientieri · Vakariņas + šovs · Bezmaksas atcelšana 2 stundas iepriekš',
      tertiary: 'Pieejamība šovakar'
    }
  }

};
