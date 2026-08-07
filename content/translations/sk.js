/**
 * Slovak translations for all 17 landing pages.
 * Mirror of ro.js structure. Formal "vy" form.
 * "Bosphorus" → "Bospor". Brand → "Nočný Bospor".
 * Turkish place names unchanged with diacritics.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Plavba s Večerou po Bospore od €{p.dinnerStd} — Večerná Túra Istanbul + Show',
      description: 'Plavba s večerou 3 hodiny po Bospore: turecké viacchodové menu a živá folklórna šou. Odchod 21:00 z Kabataşu. Bezplatné storno, platba na palube.'
    },
    hero: {
      h1: 'Plavba s Večerou po Bospore v Istanbule',
      subtitle: 'Tri hodiny živej zábavy, štedrá turecká viacchodová večera a najúchvatnejšie nočné výhľady na Bospor.',
      badge: '4,8★ · 11.317 recenzií'
    },
    intro: [
      '**Plavba s večerou po Bospore** je najikonickejší večerný zážitok Istanbulu. Naša túra odchádza o 20:00 z prístaviska Kabataş a pláva pod osvetlenými mostami Bospor a Fatih Sultan Mehmet, ponúka vám tureckú viacchodovú večeru, živé ľudové tance, orientálny tanec a DJ set, ktorý udržiava palubu živú až do 23:00.',
      'Na rozdiel od bežných turistických lodí, ktoré napĺňajú nočnú krajinu Istanbulu, je **naša plavba s večerou po Bospore** licencovaná TÜRSAB (A-17672) a hodnotená 4,8★ viac ako 11.317 cestovateľmi. Skupiny udržiavame malé a obsluhu vrelú — a keďže platíte na palube, nie je žiadne riziko v rezervácii vopred.',
      'Či už oslavujete narodeniny, hľadáte prémiový večer v Istanbule pre svoju rodinu, alebo chcete najfotogenickejší prechod zo západu slnka do noci v meste — toto je plavba s večerou, ktorú v prvom rade odporúčajú miestni obyvatelia Istanbulu.'
    ],
    highlights: [
      { title: 'Turecká viacchodová večera', desc: '10 variantov studených mezze, teplý predjedlo (paçanga böreği), hlavný chod na výber (losos / morský okún / kura / mäsové guľôčky / vegetariánske), zmrzlinová torta ako dezert, neobmedzené nealkoholické nápoje.' },
      { title: 'Živé ľudové tance, orientálny tanec a DJ', desc: 'Predstavenie Mevlana sema, 5 tradičných tureckých ľudových tancov, klasický orientálny tanec, živí turecký hudobníci, nasledovaní DJ setom počas celej plavby.' },
      { title: 'Kompletná nočná trasa po Bospore', desc: 'Kabataş → Dolmabahçe → Palác Çırağan → Mešita Ortaköy → Bebek → Rumeli Hisarı → Most FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Od €{p.dinnerStd}/osoba — platba na palube', desc: 'Plavba s večerou €{p.dinnerStd} (predtým €{p.dinnerStdOriginal}). Bez platby vopred. Bezplatné storno až 2 hodiny pred odchodom.' }
    ],
    faq: [
      { q: 'Kedy začína plavba s večerou po Bospore?', a: 'Nalodenie začína o 20:00 na prístavisku Kabataş. Loď odchádza o 21:00 a vracia sa okolo 00:00. Odporúčame prísť 15-20 minút skôr, aby ste sa usadili a uvoľnili.' },
      { q: 'Koľko stojí plavba s večerou po Bospore?', a: 'Plavba s večerou €{p.dinnerStd}/osoba (bežná cena €{p.dinnerStdOriginal}). 0-3 roky zadarmo, 4-8 rokov 50% zľava. Platba na palube — bez platby vopred.' },
      { q: 'Je alkohol zahrnutý v plavbe s večerou?', a: 'Neobmedzené nealkoholické nápoje (voda, kola, džús) sú zahrnuté v cene. Alkoholový balíček je voliteľný: 2 poháre (víno, pivo, rakı, vodka alebo gin) +€{p.alcohol2}/osoba. Ďalšie a dovážané nápoje sa účtujú zvlášť na palube.' },
      { q: 'Existuje transfer z hotela?', a: 'Áno — služba vyzdvihnutia a odvozu späť je +€{p.transfer}/osoba. Obsluhované zóny: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Sütlüce a Şişli. Túto možnosť si môžete vybrať v rezervačnom formulári.' },
      { q: 'Je plavba s večerou po Bospore halal?', a: 'Absolútne. Všetko mäso podávané na palube je halal certifikované. Alkohol je voliteľný doplnok (nikdy nevnucovaný hosťom) a usporiadanie stolov prirodzene oddeľuje hostí, ktorí preferujú jedlo bez alkoholu. Ponúkame aj vegetariánske alternatívy bez ďalších nákladov.' },
      { q: 'Ako sa mám obliecť?', a: 'Smart casual oblečenie. Večery v Istanbule môžu byť chladné aj v lete — odporúčame ľahkú bundu alebo šál. Nie je povinný odevný predpis, ale plavky, žabky alebo športové oblečenie nie sú vhodné pre atmosféru večere.' }
    ],
    cta: {
      primary: 'Rezervovať · Platba na Palube',
      secondary: 'Bezplatné storno až 2 hodiny pred odchodom',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bospor s Deťmi — Rodinná Plavba od €{p.dinnerStd}/dospelý',
      description: 'Plavba s večerou po Bospore rodinne priateľská. Deti 0-3 zadarmo, 4-8 polovičná cena. Bezpečný vnútorný priestor, detské menu.'
    },
    hero: {
      h1: 'Plavba po Bospore s Deťmi',
      subtitle: 'Večer na Bospore navrhnutý pre rodiny s deťmi — večera, zábava a bezpečná, pohodlná atmosféra.',
      badge: 'Rodinne Priateľské · Halal · 0-3 Roky Zadarmo'
    },
    intro: [
      '**Plavba po Bospore s deťmi** je najviac rodinne priateľská večerná možnosť v Istanbule. Každý večer hosťujeme desiatky rodín — navrhli sme každý detail tak, aby sa najmenší cítili pohodlne: zastrešený vnútorný priestor pre udržanie tepla, dostupné detské menu (jednoduché grilované kura, cestoviny, neobmedzené nealkoholické nápoje) a včasné nalodenie, aby sa predišlo záchvatom v neskorých hodinách.',
      'Na rozdiel od lodí len pre dospelých zostáva **naša plavba s večerou po Bospore pre rodiny** vrelá a inkluzívna. **Deti 0-3 roky sú zadarmo** (transfer zahrnutý), 4-8 rokov majú **50% zľavu**, 9+ rokov platí plnú cenu — bez skrytých nákladov. Živé ľudové tance, orientálny tanec a predstavenie sema sú jemná rodinná zábava, nie nočný klub.',
      'Či už prichádzate do Istanbulu na predĺžený víkend s batoľaťom, alebo vediete tínedžerov na ich prvú európsku cestu — toto je túra odporúčaná rodinami v Istanbule. Bezpečná, halal certifikovaná, licencovaná TÜRSAB a hodnotená 4,8★ viac ako 11.317 cestovateľmi.'
    ],
    highlights: [
      { title: '0-3 roky úplne zadarmo', desc: 'Žiadne poplatky za bábätká a batoľatá. 4-8 rokov platí 50% z ceny pre dospelých. Od 9 rokov hosť s plnou cenou. Transparentné, bez prekvapení.' },
      { title: 'Zastrešený vnútorný priestor', desc: 'Plne zastrešený a vyhrievaný v chladných mesiacoch. Deti zostanú v teple, chránené pred vetrom. Otvorená paluba je tiež k dispozícii, keď je pekné počasie — voľba je na vás.' },
      { title: 'Detské menu na požiadanie', desc: 'Jednoduché grilované kura, cestoviny, chlieb a zelenina — bez ďalších nákladov. Neobmedzené nealkoholické nápoje (kola, džús, voda). Dajte nám vedieť vopred — žiadne prekvapenia s pikantným mezze pre najmenších.' },
      { title: 'Bezpečná rodinná zábava', desc: 'Predstavenie sema (fascinujúce pre deti), 5 tradičných ľudových tancov, živá turecká hudba a DJ set. Všetko je rodinne priateľské — žiadny obsah pre dospelých. Deti sa často pripájajú k tancu.' }
    ],
    faq: [
      { q: 'Je plavba po Bospore bezpečná pre malé deti?', a: 'Áno — naša loď je licencovaná TÜRSAB, má zastrešený vnútorný priestor s bezpečnými oknami, záchranné vesty všetkých veľkostí k dispozícii a profesionálnu posádku so skúsenosťami s rodinami. Odporúčame vnútornú palubu pre malé deti a otvorenú palubu pre 6+ rokov.' },
      { q: 'Aká je cena pre deti na plavbe po Bospore?', a: 'Deti **0-3 roky: ZADARMO** (žiadne poplatky, žiadne skryté náklady). **4-8 rokov: 50% zľava** z ceny pre dospelých — teda €12/dieťa na Štandarde (€{p.dinnerStd}/2). **9+ rokov: plná cena pre dospelých.** Transfer z hotela je zadarmo pre 0-3 roky, štandardný pre 4+ (€{p.transfer}/osoba).' },
      { q: 'Existuje detské menu na palube?', a: 'Áno — jednoduché grilované kura, cestoviny, chlieb, sezónna zelenina a neobmedzené nealkoholické nápoje. Dajte nám vedieť o alergiách alebo diétnych preferenciách pri rezervácii a pripravíme niečo, čo bude vaše dieťa jesť s radosťou.' },
      { q: 'Je hudba alebo šou pre deti príliš hlasná?', a: 'Živé šou prebiehajú v jednej oblasti pódia — ak sú vaše deti citlivé na hluk, posadíme vás k tichšiemu stolu vzadu. Šou trvá celkovo 40 minút, zvyšok večera je tureckou hudbou v pozadí a DJ na strednej hlasitosti.' },
      { q: 'Čo sa stane, ak dieťa zaspí počas plavby?', a: 'Žiadny problém — mnoho z nich zaspí. Vnútorný priestor má pohovky typu lavica, kde môže bábätko alebo malé dieťa pohodlne spať. V prípade potreby požiadajte posádku o teplú deku. Žiadne ďalšie náklady.' },
      { q: 'Mám si priviezť kočík na palubu?', a: 'Môžete, ale odporúčame nechať veľký kočík v hoteli (alebo u nášho vodiča, ak ste si rezervovali transfer — bezpečne ho uschováme). Naša loď má úzke chodby a paluby so schodmi. Ľahký nosič je na palube pohodlnejší.' }
    ],
    cta: {
      primary: 'Rezervovať Rodinnú Plavbu · Platba na Palube',
      secondary: 'Bezplatné storno až 2 hodiny vopred · Bez platby vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantická Plavba po Bospore od €{p.dinnerStd} — Večera pri Sviečkach',
      description: 'Romantická plavba po Bospore: stôl pri sviečkach, ruže, viacchodová večera pod osvetlenými mostami. Od €{p.dinnerStd}/osoba. Bezplatné storno, platba na palube.'
    },
    hero: {
      h1: 'Romantická Plavba po Bospore',
      subtitle: 'Večera pri sviečkach, stôl ozdobený ružami, osvetlené mosty a zvláštny okamih len pre vás pod najikonickejším nočným nebom Istanbulu.',
      badge: 'Výročie · Svadobná Cesta · Zvláštny Večer'
    },
    intro: [
      '**Romantická plavba po Bospore** je najikonickejším večerom pre páry v Istanbule. Zatiaľ čo slnko zapadá nad Palácom Dolmabahçe a most Bospor sa rozžiari farbami, vy a váš partner zdieľate tureckú viacchodovú večeru pri súkromnom stole — so sviečkami, čerstvými kvetmi a živými husľami vznášajúcimi sa po palube.',
      'Naše romantické usporiadanie stola (+€{p.romantic}/stôl) premení každé miesto na zvláštny okamih: červené ruže, žiariace sviečky, ručne písaný uvítací lístok. Pridajte balíček 2 pohárov alkoholu pre víno pod hviezdami (+€{p.alcohol2}/osoba) alebo to udržiavajte jednoduché s nápojmi zahrnutými. Nech si vyberiete čokoľvek, posádka sa diskrétne postará o zvyšok.',
      'Či už oslavujete výročie, plánujete prekvapenie pre svojho partnera alebo jednoducho chcete nezabudnuteľný večer v najromantickejšom meste Európy — toto je túra, ktorú preferujú páry v Istanbule. Hodnotenie 4,8★, licencované TÜRSAB a — najdôležitejšie — platba na palube, takže sľubujete iba samotný večer.'
    ],
    highlights: [
      { title: 'Romantický stôl pri sviečkach', desc: 'Pridajte romantické usporiadanie stola s +€{p.romantic}/stôl: čerstvé červené ruže, žiariace sviečky, lupienky ruží na obruse a ručne písaná karta. Fotografie zahrnuté.' },
      { title: 'Najlepšie stoly pre prechod zo západu slnka do noci', desc: 'Stoly pri okne sú vyhradené pre páry. Sledujte rozsvietenie mostu Bospor, žiaru Dievčej veže a osvetlenie mešity Ortaköy zo svojho súkromného stola.' },
      { title: 'Živé husle a intímna atmosféra', desc: 'Živé husle a akustická turecká hudba počas večere vytvárajú pomalú, romantickú atmosféru. Potom nastupuje DJ a páry tancujú na otvorenej palube pod svetlami.' },
      { title: 'Víno, šampanské, prémiové páry', desc: 'Pridajte balíček 2 pohárov alkoholu (+€{p.alcohol2}/osoba) — miestne víno, pivo alebo rakı. Dovážané šampanské a prémiové páry na požiadanie — opýtajte sa pri rezervácii.' }
    ],
    faq: [
      { q: 'Čo robí túto plavbu romantickou?', a: 'Kombinácia súkromného stola, usporiadania so sviečkami (voliteľné +€{p.romantic}), turecká viacchodová večera, živé husle a akustická hudba a osvetlené mosty Bosporu prechádzajúce nad vami. Zážitok navrhujeme pre páry — pokojná atmosféra na začiatku, potom energický DJ a tanec. Tempo si vyberáte vy.' },
      { q: 'Môžete usporiadať prekvapenie pre môjho partnera — narodeniny, výročie, žiadosť o ruku?', a: 'Áno — dajte nám vedieť pri rezervácii. Môžeme koordinovať s naším personálom narodeninovú tortu (zadarmo), zvláštne usporiadanie stola, ručne písanú kartu vo vašom jazyku alebo priniesť prvok k stolu v správnu chvíľu. Pre žiadosti o ruku odporúčame napísať nám priamo cez WhatsApp, aby sme mohli diskrétne plánovať.' },
      { q: 'Koľko stojí romantická plavba pre 2 osoby?', a: '2 osoby: 2 × €{p.dinnerStd} = €48.60. Pridajte romantické usporiadanie +€{p.romantic} = €63,60. Bez platby vopred — platba na palube. Balíček 2 pohárov alkoholu pre dvoch: ďalšie 2 × €{p.alcohol2} = €20.' },
      { q: 'Je romantická plavba po Bospore súkromná — len pre nás?', a: 'Nie — je to zdieľaná plavba s ďalšími pármi a hosťami (celkovo až 60-80). **Váš stôl** je súkromný (iba pre vašu skupinu), ale na palube sú aj ďalší hostia. Ak chcete úplne súkromnú loď pre 2 osoby, to je samostatná **Súkromná plavba po Bospore** (ktorú môžeme zorganizovať na požiadanie — napíšte nám).' },
      { q: 'Môžeme si priniesť vlastné kvety, tortu alebo darček?', a: 'Samozrejme. Prineste, čo chcete — naša posádka vám pomôže diskrétne umiestniť prekvapujúci darček, schovať škatuľku s prsteňom do dezertu alebo vystaviť kvety, ktoré ste priniesli. Žiadne dodatočné poplatky za korkové. Stačí nám dať vedieť, aby sme mohli koordinovať okamih.' },
      { q: 'Čo by sme si mali obliecť na romantickú plavbu po Bospore?', a: 'Od smart casual po elegantné — mnoho párov sa oblieka pekne (šaty, sako). Nie je prísny odevný predpis, ale atmosféra je výnimočnejšia ako ležérna turistika. Vezmite si ľahkú bundu alebo šál — paluba môže byť chladná aj v lete. Pohodlné topánky, ak plánujete tancovať po večeri.' }
    ],
    cta: {
      primary: 'Rezervovať Romantickú Plavbu · Platba na Palube',
      secondary: 'Pridajte romantické usporiadanie stola (+€{p.romantic}) v rezervačnom formulári · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Plavba s Večerou po Bospore od €{p.dinnerStd} — Show + Večerná Túra',
      description: 'Plavba s večerou 3 hodiny po Bospore: živá folklórna šou, osvetlené mosty, panoráma Bosporu v noci. Halal menu k dispozícii na požiadanie.'
    },
    hero: {
      h1: 'Halal Plavba po Bospore v Istanbule',
      subtitle: '100% halal certifikované menu, alkohol vždy voliteľný, rodinne priateľská zábava a úctivá atmosféra pre moslimských cestovateľov — večer na Bospore, správne urobený.',
      badge: '100% Halal · Rodinne Priateľské · Moslimský Vlastník'
    },
    intro: [
      '**Halal plavba po Bospore** je najúctivejšia plavba s večerou v Istanbule pre moslimských cestovateľov. Všetko mäso podávané na našej lodi — losos, morský okún, kura, jahňacie mäsové guľôčky, hovädzia sviečková, rib eye — je **halal certifikované** od schválených dodávateľov. Servírujeme rovnaké menu každému hosťovi; žiadna samostatná "halal sekcia", pretože celá loď je štandardne halal.',
      'Alkohol je **voliteľný doplnok** — nikdy nevnucovaný hosťom a usporiadanie stolov prirodzene oddeľuje hostí, ktorí preferujú jedlo bez alkoholu. Pre hostí, ktorí chcú balíček 2 pohárov alkoholu (+€{p.alcohol2}/osoba), je k dispozícii, ale zahrnuté neobmedzené nealkoholické nápoje (voda, kola, džús) sú pre väčšinu moslimských rodín postačujúce. Naša posádka je vyškolená rešpektovať vaše preferencie bez predpokladov.',
      '**Halal priateľská plavba po Bospore** záleží pre cestovateľov zo Saudskej Arábie, SAE, Kuvajtu, Kataru, Iránu, Malajzie, Indonézie, Pakistanu a Maroka, ktorí chcú najikonickejší večer Istanbulu bez kompromisov. Licencované TÜRSAB, 4,8★ a platba na palube — nesľubujte nič, kým si nie ste istí, že zážitok spĺňa vaše štandardy.'
    ],
    highlights: [
      { title: '100% halal certifikované menu', desc: 'Všetko mäso (losos, morský okún, kura, mäsové guľôčky, hovädzie, rib eye) je halal certifikované od schválených dodávateľov. Kuchyňa dodržiava halal prípravu. Žiadne bravčové produkty ani neHalal prísady. Vegetariánske možnosti sú vždy k dispozícii.' },
      { title: 'Alkohol voliteľný, nikdy nevnucovaný', desc: 'Alkoholové balíčky sú doplnok — nie sú v predvolenom nastavení zahrnuté. Nealkoholické nápoje (voda, kola, džús) sú neobmedzené a zadarmo. Váš stôl zostáva bez alkoholu, pokiaľ výslovne nepožiadate. Posádka ticho rešpektuje vašu voľbu.' },
      { title: 'Rodinne priateľská zábava', desc: 'Predstavenie sema, tradičné turecké ľudové tance, živá turecká hudba. Žiadne šou v štýle nočného klubu, žiadny nevhodný obsah. Bezpečné pre deti, úctivé pre rodiny. Orientálny tanec je tradičná umelecká forma, prezentovaná so skromnosťou.' },
      { title: 'Rešpekt k modlitebným hodinám', desc: 'Ak nalodenie pripadne na maghrib alebo isha (20:00-21:00), naša posádka vás môže nasmerovať do tichej modlitebnej zóny na prístavisku Kabataş pred odchodom. Stačí nám dať vedieť pri rezervácii.' }
    ],
    faq: [
      { q: 'Je plavba po Bospore 100% halal?', a: 'Áno — každý mäsový produkt v menu (ryby, kura, mäsové guľôčky, hovädzia sviečková, rib eye, jahňacie) je halal certifikovaný od schválených dodávateľov. Kuchyňa dodržiava halal štandardy prípravy. Bravčové sa na palube nikde nepodáva. Nie je to "halal možnosť" — celé menu je halal.' },
      { q: 'Pijú ostatní hostia na palube alkohol?', a: 'Niektorí hostia pridávajú voliteľný balíček 2 pohárov (+€{p.alcohol2}/osoba). Stoly sú prirodzene oddelené — môžete požiadať o zónu bez alkoholu. Posádka neprináša alkohol, pokiaľ si ho hosť konkrétne neobjedná. Nealkoholické nápoje (neobmedzené) sú zahrnuté pre všetkých.' },
      { q: 'Je táto plavba vhodná pre moslimské rodiny s deťmi?', a: 'Áno — je to jedna z najuznávanejších plavieb pre rodiny v Istanbule. Zábava je skromná (ľudové tance, sema, turecká hudba), deti do 3 rokov sú zadarmo, 4-8 rokov majú 50% zľavu. Žiadna atmosféra nočného klubu. Rodiny zo Zálivu, Indonézie, Malajzie, Pakistanu a Maroka pravidelne rezervujú túto plavbu.' },
      { q: 'Môžem sa modliť na palube?', a: 'Na palube nie je vyhradená modlitebňa, ale odporúčame modliť sa pred nalodením o 20:00 (maghribská modlitba často spadá do tohto intervalu). Prístavisko Kabataş má modlitebné zariadenia. Ak sa potrebujete modliť počas plavby 21:00-00:00 (isha), hovorte s posádkou — môžeme zariadiť tiché miesto na palube.' },
      { q: 'Aké sú ceny pre moslimskú rodinu 4 osôb (2 dospelí, 2 deti)?', a: 'Plavba s večerou: 2 × €{p.dinnerStd} + 2 × €12.15 (polovičná cena 4-8 rokov) = €72.90. Ak sú deti mladšie ako 3 roky, zadarmo: 2 × €{p.dinnerStd} = €48.60. Pridajte €{p.transfer} transfer z hotela na dospelého. Celkovo: €48.60–€92.90 pre rodinu 4, bez platby vopred, platba na palube.' },
      { q: 'Je transfer z hotela tiež halal?', a: 'Transfer z hotela je len jazda autom — bez jedla alebo pitia, takže žiadne halal obavy. Naši vodiči sú profesionálni, úctiví a presní. Transferové zóny pokrývajú Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli a 8 ďalších centrálnych štvrtí, kde sa moslimskí cestovatelia zvyčajne ubytovávajú.' }
    ],
    cta: {
      primary: 'Rezervovať Halal Plavbu · Platba na Palube',
      secondary: 'Bezplatné storno 2 hodiny vopred · Bez platby vopred · Halal certifikované',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP zážitok na Bospore od €{p.dinnerStd} — prémiová večera na Bospore',
      description: 'Plavba s večerou po Bospore na VIP úrovni: kompletné turecké menu, živá šou, možnosť stola pri pódiu, pozorná obsluha. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Platba na lodi, bezplatné zrušenie.'
    },
    hero: {
      h1: 'VIP zážitok na Bospore — plavba s večerou',
      subtitle: 'Jedno menu, jeden štandard: prémiové pre všetkých. Trojhodinový večer na Bospore na palube lode AMOR — bohatá turecká večera, živá šou na pódiu a na želanie súkromný stôl pri pódiu. Nepredávame samostatnú „VIP triedu“ — to najlepšie servírujeme každému hosťovi.',
      badge: 'ZĽAVA 40% · Jedno menu, prémiový štandard · Platba na lodi'
    },
    intro: [
      'Mnohé lode na Bospore delia hostí na „štandardných“ a „VIP“. My nie. Na palube lode **AMOR** je jediné večerné menu, pripravené s rovnakou starostlivosťou pre všetkých: 10 druhov tureckých meze, teplý predkrm, hlavné jedlo podľa výberu (losos, morský vlk, kurča alebo köfte), zmrzlinová torta a neobmedzené nealkoholické nápoje. Celý zábavný program je tiež v cene — obrad vírivých dervišov, 5 ľudových tancov, brušný tanec, živá hudba a DJ — všetko v cene €{p.dinnerStd}/osobu.',
      'Pocit VIP sa začína pri vašom stole. Ak chcete byť čo najbližšie k pódiu a výhľadom, pridajte si **súkromný stôl pri pódiu** (+€{p.romantic}/stôl) a miesto vám rezervujeme vopred — najlepší uhol na dervišov, ľudové tance aj osvetlený Bospor. Obľúbená voľba párov, osláv a milovníkov fotografovania.',
      'AMOR je moderná loď: 42 metrov, 3 paluby, až 400 hostí, v zime vykurovaná a v lete klimatizovaná. Trojhodinová trasa vypláva z Kabataşu (nástup od 20:00, odchod 21:00, návrat 00:00) popri Dolmabahçe, mešite Ortaköy, pevnosti Rumeli a svetlách mosta cez Bospor. Licencia TÜRSAB (A-17672), 4,9★ na Google. Bez platby vopred — platíte na lodi a zrušenie je bezplatné až do 2 hodín pred odplávaním.'
    ],
    highlights: [
      { title: 'Jedno menu, prémiový štandard', desc: 'Samostatné „VIP menu“ neexistuje — pretože naše jediné menu je už na tejto úrovni. 10 druhov meze, teplý predkrm, 4 hlavné jedlá na výber, dezert a neobmedzené nealkoholické nápoje, servírované s rovnakou starostlivosťou pri každom stole.' },
      { title: 'Súkromný stôl pri pódiu (+€{p.romantic}/stôl)', desc: 'Stoly najbližšie k dervišom, ľudovým tancom a brušnému tancu rezervujeme vopred. Výborný výhľad na pódium aj na Bospor. Váš stôl je súkromný, nie zdieľaný.' },
      { title: 'Pozorná obsluha pri stole', desc: 'Náš tím vás obslúži priamo pri stole: jedlá, odporúčania z menu, nápoje navyše, špeciálne želania. Žiadne rady v dave.' },
      { title: 'ZĽAVA 40% — predtým €{p.dinnerStdOriginal}, teraz €{p.dinnerStd}', desc: 'Cena pri priamej rezervácii: €{p.dinnerStd}/osobu (cenníková cena €{p.dinnerStdOriginal}). Platba na lodi, bez zálohy. Bezplatné zrušenie až do 2 hodín pred odplávaním.' }
    ],
    faq: [
      { q: 'Predávate „VIP balík“? Aký je rozdiel oproti štandardu?', a: 'Nepredávame samostatný VIP balík — je jedno menu, ktoré dostávajú všetci v rovnakom prémiovom štandarde. To, čo nazývame „VIP zážitkom“, je prispôsobenie vášho večera: súkromný stôl pri pódiu (+€{p.romantic}/stôl), pozorná obsluha pri stole a voliteľné nápoje navyše. Plavba trvá 3 hodiny, €{p.dinnerStd}/osobu.' },
      { q: 'Je €{p.dinnerStd} naozaj zľava 40%?', a: 'Áno — naša cenníková cena je €{p.dinnerStdOriginal}/osobu. €{p.dinnerStd} je cena pri priamej rezervácii, bez provízií sprostredkovateľov. Platíte na lodi a žiadna záloha sa neplatí.' },
      { q: 'Čo je v menu?', a: '10 druhov tureckých meze, teplý predkrm, hlavné jedlo podľa výberu (losos, morský vlk, kurča alebo köfte) a zmrzlinová torta ako dezert, k tomu neobmedzené nealkoholické nápoje. Program je v cene: obrad dervišov, 5 ľudových tancov, brušný tanec, živá hudba a DJ.' },
      { q: 'Je alkohol v cene?', a: 'Nie — alkohol je samostatný doplnok: 2 poháre miestneho vína alebo piva za +€{p.alcohol2}/osobu. Nealkoholické nápoje sú neobmedzene a zdarma v cene. Prémiové dovážané destiláty sa účtujú osobitne na lodi.' },
      { q: 'Ako si zaistím stôl pri pódiu?', a: 'Stačí pri rezervácii zvoliť doplnok „súkromný stôl pri pódiu“ (+€{p.romantic}/stôl) — stôl bude rezervovaný na vaše meno. Najlepšie miesta sa obsadzujú vopred, preto ho odporúčame pridať ešte pred dňom plavby.' },
      { q: 'Aká je to loď?', a: 'AMOR — moderná osobná loď dlhá 42 metrov s 3 palubami a kapacitou 400 hostí, v zime vykurovaná a v lete klimatizovaná. Odplávanie z móla Kabataş: nástup 20:00, odchod 21:00, návrat 00:00. Trasa: Dolmabahçe, Ortaköy, pevnosť Rumeli, Beylerbeyi a svetlá mosta cez Bospor.' }
    ],
    cta: {
      primary: 'Rezervujte si stôl · Platba na lodi',
      secondary: 'Predtým €{p.dinnerStdOriginal}, teraz €{p.dinnerStd} · Bezplatné zrušenie 2 hodiny vopred',
      tertiary: 'Pridať súkromný stôl pri pódiu (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Súkromná Plavba po Bospore — Prenájom Lode Istanbul (25+ hostí)',
      description: 'Súkromná plavba po Bospore pre skupiny, svadby, firemné akcie. Exkluzívna loď, prispôsobené menu, flexibilný čas. Bezplatné storno.'
    },
    hero: {
      h1: 'Súkromná Plavba po Bospore',
      subtitle: 'Prenajmite si celú loď pre svoju skupinu — rodinné oslavy, firemné večere, narodeniny, zasnúbenia, svadby. Exkluzívne použitie, prispôsobené menu, flexibilný program.',
      badge: 'Súkromný Prenájom · 25+ Hostí · Prispôsobené Menu'
    },
    intro: [
      '**Súkromná plavba po Bospore** znamená, že celá loď je vaša — žiadni ďalší hostia, žiadne zdieľané stoly, žiadny spoločný tanečný parket. Ideálne pre rodinné stretnutia, firemné večere, narodeninové oslavy, rozlúčky so slobodou alebo svadobné hostiny. Loď, posádka, menu, zábava a program sa prispôsobujú vašej skupine.',
      '**Náš súkromný prenájom po Bospore** podporuje skupiny **od 25 do 80 hostí**. Menšie skupiny môžu stále požiadať o súkromný zážitok — ponúkame minimálnu cenu, ktorá pokrýva prevádzkové náklady lode. Väčšie skupiny (svadobná veľkosť) získavajú prispôsobené ceny a zvyčajne zahŕňajú špeciálnu dekoráciu, živú kapelu, podávanie torty a predĺžený čas (4-5 hodín namiesto 3 štandardných).',
      'Či už organizujete firemnú akciu pre klientov, oslavu 50. narodenín alebo svadobnú hostinu pod najikonickejšími mostami Istanbulu, toto je **súkromná plavba, ktorej dôverujú organizátori akcií v Istanbule**. Hodnotenie 4,8★, licencované TÜRSAB, plne anglicky hovoriaca posádka a plná flexibilita — trasa, menu, hudba, program.'
    ],
    highlights: [
      { title: 'Celá loď, len pre vás', desc: 'Žiadni ďalší hostia. Vaša skupina vlastní každú palubu, každý stôl. Nastavte si vlastnú hudbu, odevný predpis, program. Súkromie je dôležité — rešpektujeme ho.' },
      { title: 'Prispôsobené menu a balíček nápojov', desc: 'Spolupracujte s naším šéfkuchárom na prispôsobení menu: špecifické mezze, voľby hlavného chodu, príprava prispôsobená kultúre alebo diétnym potrebám. Alkoholové balíčky, poháre šampanského, prispôsobené koktailové bary — všetko sa dá zariadiť.' },
      { title: 'Flexibilný čas a odchod', desc: '3 štandardné hodiny sa dajú predĺžiť na 4-5 hodín. Vyberte si denný odchod o 12:00, západ slnka o 17:30 alebo večer o 21:00. Chcete pracovný deň namiesto víkendu? Žiadny problém — prispôsobíme sa vášmu programu.' },
      { title: 'Prispôsobená dekorácia, kapela, program', desc: 'Prispôsobené dekorácie (balóny, transparenty, kvetinové aranžmány), živá kapela namiesto DJ, podávanie svadobnej torty, koordinácia s fotografom, prejavy — pridajte, čo vaša akcia potrebuje. Sme organizátori akcií, nielen prevádzkovatelia lode.' }
    ],
    faq: [
      { q: 'Koľko stojí súkromná plavba po Bospore?', a: 'Pre skupiny 25+, zvyčajne od €{p.dinnerStd}/osoba + poplatok za prenájom lode v závislosti od veľkosti skupiny, dátumu a času. Napíšte nám cez WhatsApp s veľkosťou skupiny, dátumom a požiadavkami — cenu poskytneme do hodiny. Väčšina akcií sa zmestí do celkového rozsahu €2.000-€6.000.' },
      { q: 'Aká je minimálna veľkosť skupiny pre súkromnú plavbu po Bospore?', a: 'Technicky 25 hostí robí súkromnú plavbu ekonomicky uskutočniteľnou. Menšie skupiny (10-24) môžu prenajímať súkromne, ale platia minimálnu cenu zodpovedajúcu ~25 osobám. Pre skutočne malé skupiny (2-10) zvážte bežnú plavbu s večerou — váš stôl je už súkromný, zdieľaná je len loď.' },
      { q: 'Môžem usporiadať svadbu na plavbe po Bospore?', a: 'Áno — organizujeme 10-15 svadobných hostín ročne. Kapacita až 80 pre sediacu večeru, až 100 pre koktailový štýl. Koordinujeme s vaším fotografom, svadobným organizátorom, kapelou alebo šéfkuchárom. Prispôsobené podávanie torty, tanečný parket pre prvý tanec, pohár šampanského — všetko sa dá zariadiť. Napíšte cez WhatsApp pre svadobnú cenu.' },
      { q: 'Čo firemné akcie a tímové večere?', a: 'Súkromné firemné plavby sú naše najčastejšie rezervácie. Firemná večera, hostenie klientov, uvedenie produktu, oslava tímu — všetko funguje. Môžeme poskytnúť faktúru s rozpisom DPH, zariadiť transfery z hotela pre váš tím a koordinovať materiály so značkou (stolné dekorácie, transparenty) na požiadanie.' },
      { q: 'Môžem si priviezť vlastnú živú kapelu alebo DJ namiesto vašej zábavy?', a: 'Áno — môžete si priviezť vlastnú živú kapelu, DJ, fotografa. Alebo si nechajte našu štandardnú (sema, ľudoví tanečníci, orientálny, DJ) a pridajte tú svoju navrch. Loď má PA systém a tanečný parket. Dajte nám vedieť vopred, aby sme mohli koordinovať zvukové ovládanie.' },
      { q: 'Ako požiadať o cenu za súkromnú plavbu po Bospore?', a: 'Najjednoduchšie: napíšte nám cez WhatsApp na +90 532 244 29 22 s (1) veľkosťou skupiny, (2) preferovaným dátumom, (3) dôvodom (svadba, firemná, narodeniny), (4) zvláštnymi požiadavkami. Odpovedáme do hodiny v pracovnej dobe, 12 hodín v noci. Môžeme tiež zariadiť videohovor na prediskutovanie podrobností.' }
    ],
    cta: {
      primary: 'WhatsApp pre Prispôsobenú Cenu',
      secondary: 'Prispôsobené menu, skupina 25-80, flexibilný čas · Odpoveď do 1 hodiny',
      tertiary: 'Možnosť Štandardnej Plavby (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bospor pre Páry od €{p.dinnerStd} — Romantický Večer Istanbul',
      description: 'Plavba s večerou po Bospore pre páry. Súkromný stôl, osvetlené mosty, romantická dekorácia voliteľne. Od €{p.dinnerStd}/osoba.'
    },
    hero: {
      h1: 'Plavba po Bospore pre Páry',
      subtitle: 'Romantický večer na Bospore — súkromný stôl, živá hudba, osvetlené mosty prechádzajúce nad vami. Či už je to vaše prvé rande v Istanbule alebo desiate výročie, tento večer funguje.',
      badge: 'Súkromný Stôl · Živá Hudba · Platba na Palube'
    },
    intro: [
      '**Plavba po Bospore pre páry** je obľúbený večer v Istanbule. Nie každý pár oslavuje výročie — niekedy ste jednoducho v najromantickejšom meste sveta a chcete úžasný večer spolu. Táto plavba ponúka: súkromný stôl pre dvoch, pomalú tureckú viacchodovú večeru, živé husle a akustickú hudbu počas večere a osvetlený most Bospor pomaly prechádzajúci.',
      'Atmosféra je **vrelá, ale nie prehnane romantická** — žiadna povinná hudba k žiadosti o ruku, žiadny trápny koordinovaný potlesk pre "novomanželov". Jedzte, pite, zhovárajte sa, sledujte svetlá Istanbulu. Ak chcete pridať romantické usporiadanie stola (sviečky, ruže, +€{p.romantic}), výborne — inak je samotná večera už zvláštna.',
      'Či už ste v Istanbule 3 dni so svojím partnerom, oslavujete skromnú udalosť alebo plánujete prieskumnú cestu pre budúcu žiadosť o ruku — **plavba po Bospore pre páry** vám ponúka 3 hodiny večera spolu v jednom z najfotografovaných miest sveta. 4,8★, platba na palube, bezplatné storno.'
    ],
    highlights: [
      { title: 'Súkromný stôl pre dvoch', desc: 'Súkromný stôl pre 2 osoby, nezdieľaný. Priorita stolov pri okne pre páry. Fotografie západu slnka a nočného Bosporu priamo pri vašom okne.' },
      { title: 'Pomalá viacchodová večera', desc: '10 variantov tureckých mezze, teplý predjedlo, hlavný chod (losos, morský okún, kura, mäsové guľôčky alebo vegetariánske), zmrzlinová torta ako dezert. Podávaná pomaly počas 3 hodín — neponáhľate sa.' },
      { title: 'Živé husle a tichá hudba', desc: 'Živé husle a akustická turecká hudba počas večere vytvárajú intímnu atmosféru vhodnú pre konverzáciu. Potom nastupuje DJ pre páry, ktoré chcú tancovať.' },
      { title: 'Doplnky pre zvláštne večery', desc: 'Romantické usporiadanie stola (sviečky, ruže): +€{p.romantic}. 2 poháre alkoholu (víno, pivo alebo rakı): +€{p.alcohol2}/osoba. Transfer z hotela (tam a späť): +€{p.transfer}/osoba. Vyberte si, čo sa hodí k vášmu večeru.' }
    ],
    faq: [
      { q: 'Je táto plavba po Bospore vhodná pre obyčajný večer, nie pre zvláštnu príležitosť?', a: 'Áno — väčšina našich párov neoslavuje nič zvláštne, len majú krásny večer spolu. Atmosféra je vrelá a príjemná bez toho, aby bola prehnaná. Môžete pridať romantické usporiadanie stola (+€{p.romantic}), ak chcete extra, alebo si jednoducho užiť štandardný večer.' },
      { q: 'Koľko stojí plavba po Bospore pre 2 osoby?', a: '2 osoby: 2 × €{p.dinnerStd} = €48.60. Pridajte transfer z hotela pre dvoch: +€{p.transfer}×2 = €10. Pridajte balíček 2 pohárov alkoholu pre dvoch: +€{p.alcohol2}×2 = €20. Bez platby vopred — platba na palube.' },
      { q: 'Môžu si páry priviezť vlastné víno alebo šampanské?', a: 'Nepovoľujeme externý alkohol (z dôvodov prevádzkovej licencie). Ale máme balíček 2 pohárov miestneho vína alebo piva (+€{p.alcohol2}/osoba) a môžeme zariadiť dovážané prémiové vína alebo šampanské za poplatok — opýtajte sa pri rezervácii. Prosecco, Chianti a Cabernet sú obľúbené prémiové požiadavky.' },
      { q: 'Je problém, ak nepijeme alkohol — sme neobvyklí?', a: 'Vôbec nie — mnoho párov úplne preskakuje alkohol, či už z halal dôvodov alebo jednoducho z preferencie. Neobmedzené nealkoholické nápoje (voda, džús, kola) sú zahrnuté. Nikto sa nepozrie dvakrát, ak je váš stôl bez alkoholu. Mnoho moslimských párov zo Saudskej Arábie, Iránu a Indonézie rezervuje túto plavbu.' },
      { q: 'Kedy je plavba po Bospore pre páry najlepšia — západ slnka alebo večer?', a: 'Plavba odchádza každý večer o 21:00 — a v lete (máj–august) tento jeden odchod pokryje oboje: nástup od 20:00 počas zlatej hodiny, západ slnka priamo okolo odchodu a potom osvetlené mosty a žiariace paláce. V zime je to čisto plavba nočných svetiel. Tak či onak, jedna rezervácia dá párom najikonickejšiu verziu Bosporu.' },
      { q: 'Je tam tanečný parket — môžeme tancovať?', a: 'Áno — po obsluhe večere (~22:30) začína DJ a otvorená paluba sa stáva tanečnou zónou. Mnoho párov tancuje pomalé piesne pod svetlami s mostom Bospor v pozadí. Niektoré z najkrajších fotografií, ktoré v Istanbule urobíte.' }
    ],
    cta: {
      primary: 'Rezervovať Romantický Večer · Platba na Palube',
      secondary: 'Pridajte romantické usporiadanie (+€{p.romantic}) · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Zobraziť Romantickú Plavbu po Bospore'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Plavba po Bospore: Západ Slnka + Večera od €{p.dinnerStd}',
      description: 'Zažite západ slnka na Bospore a potom večerajte pod osvetlenými mostami. Nalodenie 20:00 na Kabataşi, odchod 21:00. 3 hodiny, plná večera. Platba na palube.'
    },
    hero: {
      h1: 'Plavba po Bospore so Západom Slnka a Večerou',
      subtitle: 'Nastúpte o 20:00, keď sa nebo nad minaretmi sfarbí do zlata — a potom večerajte na vode, zatiaľ čo sa Dolmabahçe, mešita Ortaköy a most Bospor rozsvecujú na noc.',
      badge: 'Nalodenie 20:00 · Odchod 21:00 · Od Západu Slnka po Nočné Svetlá'
    },
    intro: [
      '**Plavba pri západe slnka po Bospore** v Istanbule je predovšetkým o jednom: o prechode. Naša plavba sa naloďuje na prístavisku Kabataş od 20:00 — a počas dlhých večerov od mája do augusta sa zlatá hodina odohráva, zatiaľ čo sa usadzujete na palube. Slnko zapadá nad minaretmi európskeho pobrežia práve okolo odchodu o 21:00, takže ho sledujete z vody: Palác Dolmabahçe zaliaty zlatom, mešita Ortaköy ako silueta proti žiariacemu nebu.',
      '**Naša plavba po Bospore od západu slnka do noci** zahŕňa plnú tureckú večeru — 10 variantov mezze, teplý predkrm, hlavný chod na výber, dezert — podávanú, zatiaľ čo mesto zapína svoje svetlá. Kým príde dezert, plávate pod osvetleným mostom Bospor s 30 miliónmi svetiel odrážajúcimi sa v tmavej vode. Premena zo súmraku do plnej noci, celá v rámci jednej 3-hodinovej plavby, je presne to, o čo tu ide.',
      'Či už ste fotograf naháňajúci posledné svetlo, pár túžiaci po tej "istanbulskej spomienkovej fotografii", alebo prvá návšteva mesta a chcete klasický večer na vode — toto je **plavba s večerou pri západe slnka po Bospore**, ktorú miestni odporúčajú návštevníkom. Od €{p.dinnerStd}/osoba, hodnotenie 4,8★, licencované TÜRSAB, platba na palube — bez platby vopred.'
    ],
    highlights: [
      { title: 'Letné západy slnka presne pri odchode', desc: 'Od mája do augusta zapadá slnko v Istanbule zhruba medzi 20:15–20:45 — nalodenie o 20:00 vám dáva zlatú hodinu na palube a odchod o 21:00 vás dostane na vodu presne na samotný západ slnka. Fotoaparát pripravený — toto je tá fotografia.' },
      { title: 'Modrá hodina prechádzajúca do plnej noci', desc: 'Nielen západ slnka — plavba prechádza súmrakom až do plne osvetleného Bosporu. Zlaté svetlo, modrá hodina a potom 30 miliónov svetiel mostov na tmavej vode: tri svetelné fázy v jedinom večeri.' },
      { title: 'Plná večera počas plavby', desc: '10 variantov tureckých mezze, teplý predkrm, hlavný chod (losos, morská pražma, kura, köfte, vegetariánske), zmrzlinová torta, neobmedzené nealkoholické nápoje — podávané, zatiaľ čo sa rozsvecujú svetlá mesta.' },
      { title: 'Dolmabahçe, Ortaköy, most Bospor — všetko žiari', desc: 'Trasa prechádza okolo Paláca Dolmabahçe, mešity Ortaköy, mostu Bospor, pevnosti Rumeli Hisarı a Paláca Beylerbeyi práve vtedy, keď sa ich svetlá rozsvecujú. Každý pamätník vo svojom najlepšom svetle.' }
    ],
    faq: [
      { q: 'Kedy odchádza plavba pri západe slnka po Bospore?', a: 'Nalodenie začína o 20:00 na prístavisku Kabataş, loď odchádza o 21:00 a vracia sa okolo 00:00. V lete (máj–august) zapadá slnko zhruba medzi 20:15–20:45 — zlatá hodina prebieha počas naloďovania a samotný západ slnka nastáva práve okolo odchodu, videný priamo z vody.' },
      { q: 'Je plavba pri západe slnka po Bospore rovnaká ako plavba s večerou?', a: 'Áno — je to jedna plavba. Existuje jediný denný odchod o 21:00 s plnou večerou a živými šou na palube. Počas dlhých letných večerov funguje zároveň ako plavba pri západe slnka: naloďujete sa počas zlatej hodiny a plávate cez modrú hodinu do osvetlenej noci. V zime je tá istá plavba čistým zážitkom nočných svetiel.' },
      { q: 'Koľko stojí plavba pri západe slnka po Bospore?', a: 'Od €{p.dinnerStd}/osoba za plavbu (3 hodiny, plná večera, živá zábava). Platba na palube — bez platby vopred. Deti 0-3 roky zadarmo, 4-8 rokov polovičná cena.' },
      { q: 'Kedy je najlepšie obdobie roka na plavbu pri západe slnka po Bospore?', a: 'Od mája do augusta. Neskoré istanbulské západy slnka (20:15–20:45) sa presne kryjú s odchodom o 21:00, takže dostanete zlatú hodinu, západ slnka aj osvetlené mosty v jedinom večeri. Na jeseň a v zime slnko zapadá skôr a tá istá plavba sa stáva plnohodnotným zážitkom nočných svetiel — rovnako fotogenickým, len s inou atmosférou.' },
      { q: 'Čo si vziať na plavbu pri západe slnka?', a: 'Smartfón alebo fotoaparát — zlatá hodina a osvetlené mosty si o to priam pýtajú. Ľahkú bundu: po západe slnka sa na palube zdvihne vánok. Smart-casual oblečenie — večeriate, ale bez prísneho odevného predpisu.' },
      { q: 'Uvidím na tejto plavbe osvetlené mosty v noci?', a: 'Áno — to je druhá polovica večera. Plavba prebieha 21:00–00:00, takže po západe slnka a modrej hodine plávate pod plne osvetleným mostom Bospor, okolo rozsvietených palácov a Dievčej veže, a okolo 00:00 sa vraciate na Kabataş.' },
      { q: 'Kedy zapadá slnko v Istanbule?', a: 'V lete (jún–júl) zapadá slnko v Istanbule okolo 21:00–20:45. V zime okolo 16:30–17:00. Pre zážitok kombinujúci západ slnka a noc zachytáva plavba s večerou Nočný Bospor s odchodom o 21:00 z Kabataşu v lete neskorú zlatú hodinu a modrú hodinu — a osvetlené pamätníky po celý rok.' },
      { q: 'Oplatí sa plavba pri západe slnka po Bospore?', a: 'Áno — západ slnka nad mostom Bospor patrí k charakteristickým výhľadom Istanbulu. Plavba s večerou Nočný Bospor o 21:00 (€{p.dinnerStd}/osoba) zachytáva modrú hodinu po západe slnka plus osvetlené paláce, s plnou večerou a živými šou počas 3 hodín.' }
    ],
    cta: {
      primary: 'Rezervovať Plavbu pri Západe Slnka · Platba na Palube',
      secondary: 'Nalodenie 20:00 · Odchod 21:00 · Večera zahrnutá · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Zobraziť Všetky Detaily Plavby s Večerou'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Nočná Túra po Bospore od €{p.dinnerStd} — Plavba s Večerou + Živá Show',
      description: 'Nočná túra 3 hodiny po Bospore s večerou a živou šou. Odchod 21:00 z Kabataşu, osvetlené mosty. Bezplatné storno, platba na palube.'
    },
    hero: {
      h1: 'Nočná Túra po Bospore',
      subtitle: 'Osvetlené mosty Istanbulu, rozsvietené paláce a voda Bosporu ako zrkadlo odrážajúce 30 miliónov svetiel — nočná túra, ktorá definuje večer v Istanbule.',
      badge: 'Osvetlené Mosty · Živá Show · Večera Zahrnutá'
    },
    intro: [
      '**Nočná túra po Bospore** je najodporúčanejšia večerná aktivita v Istanbule. Tu je prečo: po zotmení sa Bospor transformuje. Most Bospor strieda modrú, fialovú a zlatú. Palác Dolmabahçe žiari teple žlto. Mešita Ortaköy sa dokonale odráža v čiernej vode. Každý pamätník Istanbulu dosahuje svoj dramatický vrchol v noci.',
      '**Naša nočná túra po Bospore s večerou** zabaľuje kompletný ikonický večer: 3 hodiny na vode (21:00-00:00), turecká viacchodová večera, živé ľudové tance (sema, 5 ľudových tancov, orientálny tanec), živá hudba a DJ set, ktorý udržiava palubu živú až do konca noci. Každý hosť dostane rovnaký program — žiadna "základná" možnosť, ktorá preskakuje najlepšie časti.',
      'Či už je to vaša prvá návšteva Istanbulu a hľadáte "jedinú vec, ktorú musíte v noci urobiť", alebo ste tu boli skôr a chcete najfotogenickejšie 3 hodiny mesta, toto je **nočná túra po Bospore** hodnotená 4,8★ viac ako 11.317 cestovateľmi. Licencované TÜRSAB, platba na palube, bez platby vopred.'
    ],
    highlights: [
      { title: 'Osvetlený Bospor v dramatickom vrchole', desc: 'Most Bospor mení farbu (modrá, fialová, zlatá), paláce žiaria žlto, mešita Ortaköy sa odráža v tmavej vode. 21:00-00:00 maximálne osvetlenie pre všetky pamätníky Istanbulu.' },
      { title: 'Tradičná turecká šou na palube', desc: 'Predstavenie sema, 5 tradičných ľudových tancov (z rôznych regiónov Turecka), orientálny tanec, živá turecká hudba, potom DJ set. 40 minút šou, potom pokračuje hudba + večera.' },
      { title: 'Plná viacchodová večera', desc: '10 variantov tureckých mezze, teplý predjedlo (paçanga böreği), hlavný chod (losos, morský okún, kura, mäsové guľôčky, vegetariánske — vaša voľba), dezert (zmrzlinová torta), neobmedzené nealkoholické nápoje. Halal certifikované.' },
      { title: 'Kompletná trasa po Bospore', desc: 'Kabataş → Dolmabahçe → Palác Çırağan → Mešita Ortaköy → Bebek → Rumeli Hisarı → Most Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Dievčia veža → Kabataş.' }
    ],
    faq: [
      { q: 'Kedy je nočná túra po Bospore?', a: 'Nalodenie od 20:00 na prístavisku Kabataş. Loď odchádza o 21:00, vracia sa okolo 00:00. Odporúčame prísť 20 minút skôr, aby ste sa usadili a vybrali si miesto.' },
      { q: 'Koľko stojí nočná túra po Bospore?', a: 'Nočná túra (3 hodiny, večera, šou): €{p.dinnerStd}/osoba (predtým €{p.dinnerStdOriginal}). 0-3 roky zadarmo, 4-8 rokov polovičná cena. Platba na palube.' },
      { q: 'Aký je rozdiel medzi nočnou túrou po Bospore a plavbou s večerou?', a: 'Rovnaká vec, iné kľúčové slovo. "Nočná túra po Bospore" je, ako hľadá mnoho cestovateľov; "plavba s večerou" je odvetvový termín. Rovnaká loď, rovnaký 3-hodinový program, rovnaké menu, rovnaká šou. Vyberte si preferovaný vyhľadávací termín — zážitok je rovnaký.' },
      { q: 'Nočná túra po Bospore alebo plavba pri západe slnka — čo stojí za viac?', a: 'Nočná túra = osvetlený Istanbul, maximálna svetelná dráma, kompletný program zábavy, najikonickejšie fotografie osvetlených mostov. A je to jedna plavba: v lete (máj–august) nalodenie od 20:00 zachytáva zlatú hodinu a slnko zapadá práve okolo odchodu o 21:00 — takže ten istý večer pokryje západ slnka aj noc. Netreba si vyberať ani rezervovať dvakrát.' },
      { q: 'Môžem absolvovať nočnú túru po Bospore prvý deň v Istanbule?', a: 'Áno — odporúčame. Mnoho cestovateľov si rezervuje nočnú túru na svoj prvý večer, pretože vám ponúka kompletnú orientáciu: všetky hlavné pamätníky z vody, s dobrým jedlom a zábavou. Ľahšie ako bojovať s jet lagom pri pokuse o pešiu turistiku v Deň 1. Transfer z hotela k dispozícii z centrálnych štvrtí.' },
      { q: 'Nehovorím po turecky — je túra v angličtine?', a: 'Posádka hovorí anglicky. Zábava (sema, ľudové tance, hudba) nevyžaduje jazyk. Menu večere je v angličtine. Rezervácia cez WhatsApp / Telegram funguje vo viacerých jazykoch (angličtina, arabčina, ruština, nemčina, francúzština, španielčina). Tureckú nepotrebujete.' }
    ],
    cta: {
      primary: 'Rezervovať Nočnú Túru · Platba na Palube',
      secondary: 'Odchod 21:00 · 3 hodiny · Večera + šou zahrnuté · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Plavba s Večerou v Istanbule od €{p.dinnerStd} — Nočná Túra po Bospore',
      description: 'Plavba s večerou 3 hodiny v Istanbule po Bospore. Turecké viacchodové menu, živý folklór, osvetlené mosty. Bezplatné storno, platba na palube. 11.317 recenzií.'
    },
    hero: {
      h1: 'Plavba s Večerou v Istanbule',
      subtitle: 'Najlepšia plavba s večerou v Istanbule — 3 hodiny po Bospore, turecká viacchodová večera, živá zábava a nočné výhľady na najikonickejšie pamätníky mesta.',
      badge: '4,8★ · 11.317 recenzií · TÜRSAB A-17672'
    },
    intro: [
      'Hľadáte **plavbu s večerou v Istanbule**? Našli ste, čo väčšina cestovateľov odporúča. Náš 3-hodinový večer po Bospore kombinuje plnú tureckú viacchodovú večeru, živé ľudové tance a najfotogenickejšie výhľady mesta — všetko z pohodlnej lode, ktorá odchádza o 21:00 z prístaviska Kabataş.',
      'Zážitok **plavby s večerou v Istanbule**: nastúpte o 20:00, sadnite si, sledujte Palác Dolmabahçe, zatiaľ čo odchádzame, večera začína, keď sa približujeme k mešite Ortaköy, šou začína (sema, ľudové tance, orientálny), a do dezertu ste pod osvetleným mostom Bospor. O polnoci sa vraciate do Kabataşu s ikonickou kolážou fotografií a plným žalúdkom.',
      '€{p.dinnerStd}/osoba (predtým €{p.dinnerStdOriginal}). Platba na palube — bez platby vopred, bez rizika. Licencované TÜRSAB A-17672, hodnotené 4,8★ viac ako 11.317 cestovateľmi.'
    ],
    highlights: [
      { title: 'Plná turecká viacchodová večera', desc: '10 variantov mezze, teplý predjedlo, hlavný chod (losos/morský okún/kura/mäsové guľôčky/vegetariánske), zmrzlinová torta. Halal certifikované. Neobmedzené nealkoholické nápoje zahrnuté.' },
      { title: 'Živá šou tureckých ľudových tancov', desc: 'Predstavenie sema, 5 tradičných ľudových tancov, orientálny tanec, živá turecká hudba, DJ. 40 minút šou, kontinuálna hudba v pozadí.' },
      { title: 'Kompletná nočná trasa po Bospore', desc: '3-hodinová túra: Dolmabahçe, Çırağan, mešita Ortaköy, most Bospor, Bebek, Rumeli Hisarı, most FSM, Beylerbeyi, Üsküdar, Dievčia veža. Oba brehy, európsky a ázijský.' },
      { title: 'Od €{p.dinnerStd} — platba na palube', desc: 'Plavba s večerou: €{p.dinnerStd} (predtým €{p.dinnerStdOriginal}). Bez platby vopred. Bezplatné storno až 2 hodiny pred odchodom.' }
    ],
    faq: [
      { q: 'Koľko stojí plavba s večerou v Istanbule?', a: 'Naša plavba s večerou stojí €{p.dinnerStd}/osoba (bežná cena €{p.dinnerStdOriginal}). 0-3 roky zadarmo, 4-8 rokov 50% zľava. Platba na palube — bez platby vopred.' },
      { q: 'Čo je zahrnuté v cene plavby s večerou v Istanbule?', a: '3-hodinová túra po Bospore, turecká viacchodová večera (mezze, teplý predjedlo, hlavný chod, dezert), neobmedzené nealkoholické nápoje, živá šou ľudových tancov (sema, ľudové tance, orientálny), živá hudba + DJ, prístup na otvorenú palubu, dane zahrnuté. Transfer z hotela a alkohol sú voliteľné doplnky.' },
      { q: 'Odkiaľ odchádza plavba s večerou v Istanbule?', a: 'Prístavisko Kabataş, Istanbul — na európskom brehu, blízko Paláca Dolmabahçe. Presné miesto stretnutia je oznámené po rezervácii cez WhatsApp / Telegram. Pešie videá zo zastávky električky Dolmabahçe a zastávky električky Kabataş sa nachádzajú v sekcii miesta stretnutia vyššie.' },
      { q: 'Ako dlho trvá plavba s večerou — a kedy začína?', a: 'Celkovo 3 hodiny. Nalodenie od 20:00, loď odchádza presne o 21:00, vracia sa okolo 00:00. Odporúčame prísť 15-20 minút skôr, aby ste sa usadili a vybrali si miesto.' },
      { q: 'Musím rezervovať vopred alebo môžem prísť priamo?', a: 'Rezervujte vopred — miesta sa plnia, najmä cez víkendy a sviatky. Rezervácie v rovnaký deň sú často možné, ale nie garantované. Formulár na tejto stránke vám zabezpečí miesto za menej ako 1 minútu. Platba na palube, takže nie je žiadne finančné riziko v skorej rezervácii.' },
      { q: 'Je plavba s večerou v Istanbule vhodná pre vegetariánov / halal / diétne obmedzenia?', a: 'Áno — všetko mäso je halal certifikované. Vegetariánsky hlavný chod (falafel, hranolky, bulgur pilaf, zeleninový guláš, cibuľové krúžky) k dispozícii bez ďalších nákladov. Alergie možno zohľadniť, ak sú oznámené pri rezervácii. Alkohol je voliteľný doplnok, nikdy nevnucovaný.' }
    ],
    cta: {
      primary: 'Rezervovať Plavbu s Večerou · Platba na Palube',
      secondary: '4,8★ · Licencované TÜRSAB · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Nočná Túra v Istanbule od €{p.dinnerStd} — Plavba s Večerou po Bospore + Show',
      description: 'Plavba 3 hodiny po Bospore s večerou a živou šou. Odchod 21:00 z Kabataşu. Bezplatné storno, platba na palube. 11.317 recenzií. Transfer z hotela voliteľný.'
    },
    hero: {
      h1: 'Túra cez Istanbul v Noci',
      subtitle: 'Nočná túra v prvom rade odporúčaná miestnymi obyvateľmi Istanbulu — plavba po Bospore 3 hodiny s večerou, živou zábavou a najikonickejšími osvetlenými výhľadmi mesta.',
      badge: 'Ikonický Večer Istanbulu · 3 Hodiny · Večera Zahrnutá'
    },
    intro: [
      '**Túra cez Istanbul v noci** musí robiť tri veci: ukázať vám ikonické pamätníky mesta, dobre vás nakŕmiť a pobaviť. Naša plavba s večerou po Bospore robí všetky tri za jeden 3-hodinový večer — a preto väčšina sprievodcov Istanbulu ju odporúča ako #1 zážitok nočnej túry.',
      'Trasa **túry cez Istanbul v noci** pokrýva najlepšie osvetlené pamätníky: Palác Dolmabahçe, Mešita Ortaköy, Most Bospor (mení farby), štvrť Bebek, Rumeli Hisarı, Most FSM, Palác Beylerbeyi, ázijské pobrežie Üsküdar a Dievčia veža v diaľke. Väčšina mestských túr vám ich ukáže z autobusu — my vám ich ukážeme z vody, kde sú najdramatickejšie.',
      'Večera je zahrnutá (turecké viacchodové menu), živá šou tureckých ľudových tancov, sema, orientálny tanec a DJ set. Ak ste v Istanbule 2-3 dni, je to jediný večer, ktorý dáva najsilnejší úder. 4,8★ z viac ako 11.317 cestovateľov, platba na palube, bez platby vopred.'
    ],
    highlights: [
      { title: 'Všetky ikonické nočné výhľady Istanbulu', desc: 'Palác Dolmabahçe, mešita Ortaköy, osvetlený most Bospor, Rumeli Hisarı, most FSM, Palác Beylerbeyi, Dievčia veža. Každý hlavný pamätník pri vrchole nočného osvetlenia.' },
      { title: 'Plná turecká večera zahrnutá', desc: '10 mezze, teplý predjedlo, hlavný chod (losos/morský okún/kura/mäsové guľôčky/vegetariánske), dezert, neobmedzené nealkoholické nápoje. Halal certifikované. Cena €{p.dinnerStd}/osoba — všetko zahrnuté.' },
      { title: 'Živé ľudové tance + sema + orientálny', desc: 'Tradičná turecká zábava: Mevlana sema predstavenie, 5 regionálnych ľudových tancov, orientálny tanec, živá hudba, DJ. 40 minút šou, hudba v pozadí celý večer.' },
      { title: 'Ľahké pre prvú návštevu Istanbulu', desc: 'Centrálne miesto stretnutia (prístavisko Kabataş), transfer z hotela (+€{p.transfer}/osoba), anglicky hovoriaca posádka, platba na palube. Nulový logistický stres. Príďte, užite si, choďte.' }
    ],
    faq: [
      { q: 'Aká je najlepšia nočná túra v Istanbule?', a: 'Plavba s večerou po Bospore je trvalo zaradená na #1. Dôvody: (1) ponúka vám všetky ikonické nočné výhľady z vody, (2) zahŕňa večeru a šou v jednom balíku, (3) 3 hodiny stačia na to, aby sme videli veľa bez únavy, (4) centrálne miesto stretnutia, (5) platba na palube znižuje rezervačné trenie. Väčšina sprievodcov po Istanbule ju odporúča ako "jedinú povinnú vec, ktorú v noci robiť".' },
      { q: 'Koľko stojí túra cez Istanbul v noci?', a: 'Naša nočná túra s večerou po Bospore: €{p.dinnerStd}/osoba. Zahrnuté túra, večera, zábava, nealkoholické nápoje. Voliteľne: alkohol (2 poháre) +€{p.alcohol2}/osoba, transfer z hotela +€{p.transfer}/osoba. Platba na palube — bez platby vopred.' },
      { q: 'Je túra cez Istanbul v noci bezpečná pre sólo cestovateľov?', a: 'Áno — veľmi bezpečná. Loď licencovaná TÜRSAB, profesionálna anglicky hovoriaca posádka, CCTV na palube, záchranné vesty k dispozícii. Mnoho sólo cestovateľov rezervuje túto túru. Večerajte pri zdieľanom alebo súkromnom stole (vaša voľba) a večer je inkluzívny — stretnite ďalších cestovateľov, ak chcete, alebo si ho nechajte pre seba.' },
      { q: 'Aký je najlepší čas na nočnú túru v Istanbule?', a: 'Naša plavba s večerou po Bospore je 21:00-00:00 (3 hodiny). Toto je vrcholný čas osvetlenia pre všetky pamätníky Istanbulu — mosty plne osvetlené, paláce žiaria, mesiac na vode. Ak chcete aj zlatú hodinu, príďte v lete: nástup začína o 20:00 a od mája do augusta slnko zapadá priamo okolo odchodu o 21:00 — tá istá plavba pokryje oboje.' },
      { q: 'Ako sa dostanem na miesto stretnutia pre nočnú túru v Istanbule?', a: 'Miesto stretnutia je prístavisko Kabataş (centrálne európske pobrežie, blízko Paláca Dolmabahçe). Električkou: T1 do stanice Kabataş (koniec linky). Taxíkom: ~15 min z Taksimu. Pešo: 20 min z Taksimu po Bulvári İnönü. Na tejto stránke sú videá s pešími pokynmi. Transfer z hotela k dispozícii s +€{p.transfer}/osoba, ak preferujete.' },
      { q: 'Môžem rezervovať túru cez Istanbul v noci v rovnaký deň?', a: 'Často áno, najmä v pracovných dňoch. Víkendy sa plnia rýchlejšie. Rezervačný formulár na tejto stránke vám umožní skontrolovať dostupnosť na dnes večer a rezervovať za menej ako 1 minútu. Pre naliehavé požiadavky v rovnaký deň napíšte cez WhatsApp na +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Rezervovať Nočnú Túru · Platba na Palube',
      secondary: 'Od €{p.dinnerStd}/osoba · Večera + šou zahrnuté · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Loďná Túra Istanbul od €{p.dinnerStd} — Bospor + Večera + Show',
      description: 'Loďná túra 3 hodiny: plavba po Bospore, plná turecká večera, živý folklór, osvetlené nočné krajiny. Bezplatné storno, platba na palube. 11.317 recenzií.'
    },
    hero: {
      h1: 'Loďná Túra v Istanbule',
      subtitle: 'Najrezervovanejšia loďná túra v Istanbule cestovateľmi — plavba po Bospore s tureckým jedlom, živou zábavou a ikonickými výhľadmi mesta z vody.',
      badge: '4,8★ · TÜRSAB A-17672 · Platba na Palube'
    },
    intro: [
      'Keď hľadáte "loďná túra v Istanbule", hľadáte jedinú vec, ktorá definuje mesto z vody: Bospor. Naša 3-hodinová loďná túra po Bospore vás vedie okolo každého hlavného pamätníka Istanbulu — Palác Dolmabahçe, mešita Ortaköy, most Bospor, Rumeli Hisarı, Palác Beylerbeyi a Dievčia veža — s plnou tureckou večerou a živou zábavou.',
      'Na rozdiel od mnohých 1-hodinových turistických trajektov, ktoré pokrývajú menej z Bosporu a preskakujú večeru a zábavu, je **naša loďná túra v Istanbule** kompletný večerný zážitok: nalodenie o 20:00 na prístavisku Kabataş, túra do polnoci, 10 mezze, hlavný chod, dezert, sema, ľudové tance, orientálny tanec a DJ. Dostanete tiež večerný výlet ako súčasť túry.',
      'Či už máte večer alebo celý týždeň v Istanbule, táto **loďná túra v Istanbule** robí svoju prácu. 4,8★ z viac ako 11.317 cestovateľov, licencované TÜRSAB (A-17672), halal certifikované menu a platba na palube — žiadny finančný záväzok, kým nie ste spokojní so zážitkom.'
    ],
    highlights: [
      { title: 'Všetky hlavné pamätníky Bosporu', desc: 'Dolmabahçe, Çırağan, mešita Ortaköy, most Bospor, Bebek, Rumeli Hisarı, most FSM, Palác Beylerbeyi, Üsküdar, Dievčia veža. Oba brehy, európsky a ázijský, v jednej túre.' },
      { title: 'Večera + šou zahrnuté', desc: 'Nielen loďná túra — plná turecká viacchodová večera, živé šou ľudových tancov, sema, orientálny tanec, DJ. Čo robí 3 hodiny zábavnými, nielen turistiku.' },
      { title: 'Večerný odchod (najlepšie osvetlenie)', desc: 'Odchod o 21:00 zachytáva osvetlený Bospor v plnej žiare — mosty, paláce, mešity všetky osvetlené. Dramatickejšie ako denné túry, ktoré ukazujú rovnaké pamätníky v plochom svetle.' },
      { title: 'Ľahká rezervácia, ľahká platba', desc: 'Rezervujte s formulárom na tejto stránke za menej ako 1 minútu. Platba na palube — bez platby vopred. Transfer z hotela k dispozícii od +€{p.transfer}/osoba. Bezplatné storno 2 hodiny pred odchodom.' }
    ],
    faq: [
      { q: 'Aká je najlepšia loďná túra v Istanbule?', a: 'Plavba s večerou po Bospore je trvalo zaradená na #1. Pokrýva všetky hlavné pamätníky, zahŕňa večeru a zábavu a beží večer, keď sú pamätníky osvetlené. Iné možnosti (hop-on trajekty, ranné turistické lode) pokrývajú kratšie trasy, preskakujú večeru a nezahŕňajú zábavu. Pre večer v Istanbule je toto najkompletnejšia loďná túra.' },
      { q: 'Ako dlho trvá loďná túra v Istanbule?', a: '3 hodiny. Nalodenie od 20:00 na prístavisku Kabataş, odchod 21:00, návrat ~00:00. Pokrýva celý Bospor od Dolmabahçe k Rumeli Hisarı a späť. Dostatok času na plnú večeru + šou bez únavy.' },
      { q: 'Koľko stojí loďná túra v Istanbule?', a: 'Naša loďná túra s večerou: €{p.dinnerStd}/osoba (predtým €{p.dinnerStdOriginal}). 0-3 roky zadarmo, 4-8 rokov polovičná cena. Platba na palube. Alkohol a transfer z hotela sú voliteľné doplnky.' },
      { q: 'Odkiaľ odchádzajú loďné túry v Istanbule?', a: 'Naša loď odchádza z prístaviska Kabataş, centrálneho európskeho pobrežia Istanbulu, blízko Paláca Dolmabahçe. Dostupné električkou T1 (stanica Kabataş), taxíkom 15 min z Taksimu alebo pešo 20 min z Taksimu. Transfer z hotela k dispozícii z centrálnych štvrtí s +€{p.transfer}/osoba.' },
      { q: 'Je táto loďná túra vhodná pre rodiny s deťmi?', a: 'Áno — veľmi rodinne priateľská. Deti 0-3 roky zadarmo, 4-8 rokov 50% zľava. Zastrešený vnútorný priestor, detské menu na požiadanie a zábava (sema, ľudové tance) pútavé pre deti. Mnoho rodín z celého sveta rezervuje túto túru.' },
      { q: 'Musím niečo priviezť na loďnú túru?', a: 'Pas alebo občiansky preukaz (na registráciu na palube), ľahká bunda (paluba môže byť chladná), pohodlné topánky, ak plánujete tancovať. Smartfón na fotografie. Hotovosť alebo karta na platbu na palube (obe prijímané). Všetko ostatné — jedlo, nápoje, zábava — je na palube.' }
    ],
    cta: {
      primary: 'Rezervovať Loďnú Túru · Platba na Palube',
      secondary: '3 hodiny · Večera + šou · Od €{p.dinnerStd}/osoba · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Výlet po Bospore od €{p.dinnerStd} — Plavba s Večerou Istanbul + Show',
      description: 'Výlet 3 hodiny po Bospore: turecká večera, živý folklór, osvetlené nočné krajiny. Odchod 21:00 z Kabataşu. Bezplatné storno, platba na palube.'
    },
    hero: {
      h1: 'Výlet po Bospore',
      subtitle: 'Výlet po Bospore najviac odporúčaný cestovateľmi — plavba s večerou 3 hodiny pokrývajúca každý hlavný pamätník Istanbulu, s jedlom, zábavou a nočnými výhľadmi.',
      badge: 'Kompletný Zážitok po Bospore · Večerný Odchod'
    },
    intro: [
      '**Výlet po Bospore** môže znamenať 1-hodinový turistický trajekt alebo kompletný večer túry s večerou — my robíme to druhé a väčšina cestovateľov to považuje za zážitok lepšej hodnoty. 3 hodiny, €{p.dinnerStd}/osoba, večera a zábava zahrnuté. Neprechádzate iba okolo pamätníkov — jete, sledujete šou a užívate si večer.',
      'Trasa **nášho výletu po Bospore** pokrýva všetko, čo stojí za to vidieť: Palác Dolmabahçe (osmanská rezidencia sultána z 19. storočia), mešita Ortaköy (jedna z najfotografovanejších mešít Istanbulu), most Bospor (mení farby v noci), Rumeli Hisarı (postavený Fatihom Sultanom Mehmetom v roku 1452), Palác Beylerbeyi (ázijské pobrežie) a Dievčia veža na malom ostrove. Všetko vysvetlené anglicky hovoriacou posádkou.',
      'Či už ste v Istanbule 24 hodín alebo týždeň, toto je **výlet po Bospore**, ktorý vám dáva najviac za jeden večer. Hodnotenie 4,8★ z viac ako 11.317 cestovateľov, licencované TÜRSAB A-17672, halal priateľské menu, platba na palube — žiadne riziko platby vopred.'
    ],
    highlights: [
      { title: 'Celý Bospor jedným ťahom', desc: 'Európske pobrežie (Dolmabahçe, Ortaköy, Rumeli Hisarı), ázijské pobrežie (Beylerbeyi, Üsküdar), oba mosty Bosporu, Dievčia veža. Každý hlavný pamätník viditeľný za 3 hodiny.' },
      { title: 'Večera + zábava zahrnuté', desc: 'Nielen turistický trajekt — plná turecká večera s mezze, hlavným chodom, dezertom. Živá šou ľudových tancov, sema, orientálny, DJ. Hodnota zábavy nad iba krajinou.' },
      { title: 'Večer = najlepšie osvetlenie', desc: 'Denné výlety po Bospore vám ukazujú pamätníky v plochom svetle. Večerné výlety zachytávajú všetko osvetlené: žiariace paláce, farebné mosty, mešity odrážajúce sa v tmavej vode. Lepšie fotografie, dramatickejšie.' },
      { title: 'Od €{p.dinnerStd} — platba na palube', desc: 'Nie je potrebná platba vopred. Platba na palube (hotovosť alebo karta). Bezplatné storno až 2 hodiny pred odchodom. 0-3 roky zadarmo, 4-8 rokov polovičná cena. Transparentné ceny.' }
    ],
    faq: [
      { q: 'Aké sú najlepšie výlety po Bospore v Istanbule?', a: 'Večerná túra s večerou je trvalo na najvyšších miestach. Denné možnosti (1-hodinové slučkové trajekty, 2-hodinové turistické lode) ukazujú menej a nezahŕňajú večeru. Pre hodnotu je ťažké prekonať 3-hodinovú túru s večerou, šou a centrálnym miestom stretnutia. Náklady na našu túru €{p.dinnerStd} eliminujú potrebu samostatného večera s večerou + zábavou.' },
      { q: 'Ako dlho trvá výlet po Bospore?', a: 'Náš výlet po Bospore trvá celkovo 3 hodiny (odchod 21:00, návrat 00:00). Existujú kratšie možnosti (1-hodinové turistické trajekty, 90-minútové túry), ale preskakujú večeru a zábavu. Pre kompletný večerný zážitok sú 3 hodiny ideálne — dosť na to, aby sme videli všetko bez toho, aby sme sa unavili.' },
      { q: 'Stojí výlet po Bospore za to?', a: 'Áno — takmer každý sprievodca po Istanbule uvádza "plavbu po Bospore" v top 5 povinných vecí. Mesto bolo postavené okolo tohto prielivu; ak ste nevideli Bospor z vody, naozaj ste nevideli Istanbul. Naša špecifická večerná túra pridáva večeru a zábavu, takže je to kompletný večerný výlet, nie len turistika.' },
      { q: 'Čo si vziať na výlet po Bospore?', a: 'Pas alebo občiansky preukaz (na registráciu na palube), ľahká bunda (večer je paluba chladná), smartfón/fotoaparát, pohodlné topánky pre tanečný parket. Hotovosť alebo karta na platbu. Všetko ostatné je na palube. Transfer z hotela k dispozícii s +€{p.transfer}/osoba, ak nechcete používať verejnú dopravu.' },
      { q: 'Je výlet po Bospore vhodný pre deti?', a: 'Áno — veľmi priateľský k deťom. Deti 0-3 roky zadarmo (transfer zahrnutý), 4-8 rokov 50% zľava. Zastrešený vnútorný priestor, detské menu na požiadanie a jemná a pútavá zábava. Mnoho rodín rezervuje tento výlet ako vrchol svojej cesty do Istanbulu.' },
      { q: 'Aké sú zastávky výletu po Bospore?', a: 'Je to kontinuálna túra — žiadne zastávky (žiadne vystupovanie). Loď prechádza okolo každého pamätníka, posádka vysvetľuje, čo vidíte, oddychujete pri stole alebo idete na otvorenú palubu na fotografie. Žiadne rady, žiadne chodenie — len 3 bezproblémové hodiny na vode.' }
    ],
    cta: {
      primary: 'Rezervovať Výlet po Bospore · Platba na Palube',
      secondary: '3 hodiny · Večera + šou · Bezplatné storno 2 hodiny vopred · Licencované TÜRSAB',
      tertiary: 'Skontrolovať Dostupnosť'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Lístky Plavba po Bospore od €{p.dinnerStd} — Platba na Palube',
      description: 'Priame lístky na plavbu po Bospore od €{p.dinnerStd}/osoba. Bez platby vopred, platba na palube. Bezplatné storno až 2h vopred.'
    },
    hero: {
      h1: 'Lístky na Plavbu po Bospore',
      subtitle: 'Preskočte poplatky sprostredkovateľov — kúpte si lístky na plavbu po Bospore priamo od nás. Bez platby vopred, platba na palube, bezplatné storno až 2 hodiny pred odchodom.',
      badge: 'Priama Rezervácia · Bez Platby Vopred · 40% ZĽAVA'
    },
    intro: [
      'Hľadáte **lístky na plavbu po Bospore**? Kúpte priamo. Náš lístok stojí €{p.dinnerStd}/osoba — 40% zľava oproti bežnej cene (€{p.dinnerStdOriginal}). Tretie strany rezervačných stránok zvyčajne pridávajú 20-40% provízie. Rezerváciou priamo ušetríte — a stále platíte na palube.',
      'Náš proces **lístkov na plavbu po Bospore**: vyplňte formulár na tejto stránke za menej ako 1 minútu (dátum, počet hostí, kontakt), okamžite potvrdíme cez WhatsApp / Telegram, dostavíte sa na prístavisko Kabataş o 20:00, platíte na palube, užívate si 3-hodinovú plavbu s večerou. Žiadny fyzický lístok na tlač, žiadny kupón na prijatie e-mailom — potvrdenie je váš lístok.',
      'Či už rezervujete plavbu s večerou na dnes večer alebo rezervujete na konkrétny dátum budúci týždeň, **priame lístky na plavbu po Bospore** sú najrýchlejším spôsobom. Hodnotenie 4,8★, licencované TÜRSAB (A-17672), halal certifikované menu a podporuje doplnky transfer z hotela a alkohol.'
    ],
    highlights: [
      { title: 'Priama rezervácia — bez poplatkov sprostredkovateľov', desc: '€{p.dinnerStd}/osoba — jedna transparentná cena. Stránky tretích strán účtujú €30-80+ za rovnakú túru. Ušetrite rezerváciou priamo u nás. Žiadne skryté poplatky, žiadny príplatok provízie.' },
      { title: 'Platba na palube — bez platby vopred', desc: 'Rezervujte miesto teraz, zaplaťte, keď nastúpite na loď. Hotovosť alebo karta prijímané. Zadarmo, ak zrušíte 2+ hodiny pred odchodom. Nulové finančné riziko v skorej rezervácii.' },
      { title: 'Potvrdenie za menej ako 1 minútu', desc: 'Vyplňte formulár → potvrdíme cez WhatsApp / Telegram. Žiadny kupón PDF na e-mail na tlač. Naša správa je váš lístok. Príďte na prístavisko o 20:00.' },
      { title: 'Aktuálna zavádzacia cena 40% ZĽAVA', desc: 'Predtým €{p.dinnerStdOriginal}, teraz €{p.dinnerStd}. 40% zľava, pretože rezervujete priamo. Žiadny trik s časovým limitom — je to naša štandardná cena priamej rezervácie.' }
    ],
    faq: [
      { q: 'Koľko stoja lístky na plavbu po Bospore?', a: '€{p.dinnerStd}/osoba (bežne €{p.dinnerStdOriginal}). Zahŕňa 3-hodinovú túru, tureckú viacchodovú večeru, živú šou ľudových tancov, neobmedzené nealkoholické nápoje. 0-3 roky zadarmo, 4-8 rokov 50% zľava. Platba na palube — bez platby vopred.' },
      { q: 'Kde môžem kúpiť lístky na plavbu po Bospore?', a: 'Priamo z tejto stránky — vyplňte rezervačný formulár, okamžite potvrdíme cez WhatsApp / Telegram. Platba na palube. Platformy tretích strán (Viator, GetYourGuide, Klook) tiež predávajú lístky, ale zvyčajne účtujú €30-80+ — toto je príplatok sprostredkovateľa. Priamo je najlacnejšie a najrýchlejšie.' },
      { q: 'Musím vytlačiť lístok na plavbu po Bospore?', a: 'Nie — nie je potrebný fyzický lístok alebo kupón. Po rezervácii vám pošleme potvrdenie cez WhatsApp (alebo Telegram) s miestom stretnutia, časom a názvom rezervácie. Stačí ukázať telefón na prístavisku. Hotovo.' },
      { q: 'Môžem zrušiť alebo vrátiť lístok na plavbu po Bospore?', a: 'Áno — bezplatné storno až 2 hodiny pred odchodom. Stačí napísať cez WhatsApp. Keďže ste ešte nezaplatili (platba na palube), nie je potrebné vrátenie peňazí — jednoducho nepríďte, bez nákladov. Oveľa flexibilnejšie ako vopred zaplatené lístky od tretích strán.' },
      { q: 'Sú lístky na plavbu po Bospore k dispozícii v rovnaký deň?', a: 'Často áno, najmä v pracovných dňoch. Víkendy a sviatky sa plnia rýchlejšie. Skontrolujte dostupnosť cez rezervačný formulár — aktualizuje sa v reálnom čase. Rezervácia v rovnaký deň je zvyčajne možná s niekoľkými hodinami pred odchodom o 21:00. Pre naliehavé požiadavky, WhatsApp.' },
      { q: 'Sú lístky pre deti na plavbu po Bospore zadarmo?', a: 'Deti **0-3 roky úplne zadarmo** (žiadne poplatky, žiadne skryté náklady, transfer zahrnutý). **4-8 rokov 50% zľava** (€{p.dinnerStd}/2 = €12,15). **9+ rokov plná cena pre dospelých.** Pevné a transparentné ceny — žiadne triky "príplatku pre bábätko".' }
    ],
    cta: {
      primary: 'Kúpiť Lístky · Platba na Palube',
      secondary: 'Priama rezervácia · Bez platby vopred · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Skontrolovať Dostupnosť'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bospor Last Minute od €{p.dinnerStd} — Rezervujte Dnes, Plaťte na Palube',
      description: 'Rezervácia plavby po Bospore v rovnaký deň. Potvrdenie WhatsApp za minúty. Odchod 21:00 z Kabataşu. Bezplatné storno, platba na palube. 11.317 recenzií.'
    },
    hero: {
      h1: 'Plavba po Bospore v Poslednej Chvíli',
      subtitle: 'Dostupnosť na dnes večer, potvrdené za niekoľko minút. Bez platby vopred, bez predtlačeného kupónu — stačí prísť na prístavisko a užiť si večer.',
      badge: 'Rezervácia v Rovnaký Deň · Potvrdené za Niekoľko Minút · Platba na Palube'
    },
    intro: [
      'Pristali ste v Istanbule dnes popoludní a chcete krásny večer dnes? **Plavba po Bospore v poslednej chvíli** funguje. Špeciálne rezervujeme miesta pre rezervácie v rovnaký deň, pretože vieme, že mnoho cestovateľov sa rozhoduje ráno. Vyplňte formulár tu, potvrdíme cez WhatsApp za niekoľko minút, dostavíte sa na prístavisko Kabataş o 20:00, platíte na palube, užívate si.',
      '**Naša plavba po Bospore v poslednej chvíli** má rovnaký večerný program ako predbežné rezervácie: 3 hodiny na vode (21:00-00:00), turecká viacchodová večera, živá šou ľudových tancov, sema, orientálny tanec, DJ. Osvetlený Palác Dolmabahçe, mešita Ortaköy, most Bospor — rovnaké ikonické výhľady. Rovnaká cena: €{p.dinnerStd}/osoba.',
      'Storno v rovnaký deň je zadarmo až 2 hodiny pred odchodom, pretože **platba na palube** znamená, že ste ešte nič nesľúbili. Rezervovali ste o 14:00 a zmenili svoje plány do 19:00? Stačí napísať cez WhatsApp — žiadne vrátenie peňazí, žiadny problém. Toto je flexibilita **túry po Istanbule v poslednej chvíli**, ktorú cestovatelia oceňujú.'
    ],
    highlights: [
      { title: 'Miesta stále k dispozícii na dnes večer', desc: 'Rezervujeme 5-10 miest denne pre rezervácie v rovnaký deň. Skontrolujte formulár vyššie — dostupnosť v reálnom čase. Ak je dnešná túra plná, zajtrajšia je zvyčajne otvorená.' },
      { title: 'Potvrdenie za menej ako 5 minút', desc: 'Vyplňte formulár → potvrdzovacia správa WhatsApp/Telegram → hotovo. Žiadny e-mailový kupón na čakanie, žiadny QR kód na tlač. Naša správa je váš lístok.' },
      { title: 'Nulová platba, kým nenastúpite na loď', desc: 'Platba na palube, hotovosť alebo karta. Ak nepríde (zmena plánov, choroba, počasie), bez nákladov. Bezplatné storno až 2 hodiny pred odchodom. Naozaj priateľské k poslednej chvíli.' },
      { title: 'Transfer z hotela v rovnaký deň často k dispozícii', desc: 'Transfer z hotela zvyčajne vyžaduje 24-hodinové oznámenie, ale pre rezervácie v rovnaký deň medzi 14:00-18:30 môžeme často zariadiť vyzdvihnutie s +€{p.transfer}/osoba. Pre naliehavé požiadavky na transfer, WhatsApp.' }
    ],
    faq: [
      { q: 'Môžem skutočne rezervovať plavbu po Bospore na dnes večer?', a: 'Áno — často. Rezervujeme miesta pre rezervácie v rovnaký deň. Skontrolujte formulár vyššie pre dostupnosť dnes večer. Ak sú miesta k dispozícii, môžete rezervovať do 20:00. Víkendy sú rušnejšie — rezervujte skôr v deň, ak je to možné.' },
      { q: 'Ako last minute môžem rezervovať?', a: 'Rezervácie zostávajú otvorené do 20:00 pre loď o 21:00. Po 20:00 nám napíšte priamo cez WhatsApp na +90 532 244 29 22 — ak sú voľné miesta, môžeme potvrdiť manuálne.' },
      { q: 'Je plavba po Bospore v poslednej chvíli drahšia?', a: 'Nie — rovnaká cena ako predbežná rezervácia. €{p.dinnerStd}/osoba. Nerobíme "dynamické ceny" ani príplatky za poslednú chvíľu. Rovnaká loď, rovnaká večera, rovnaká šou, rovnaká cena.' },
      { q: 'Čo sa stane, ak je dnešná túra plná?', a: 'Zajtrajšia túra je zvyčajne otvorená — prevádzkujeme 365 dní v roku, každý deň. Môžete rezervovať na zajtra a stále byť "last minute", čo znamená, že ste sa práve rozhodli. Túry v pracovných dňoch majú viac priestoru ako víkendy.' },
      { q: 'Môžete zariadiť transfer z hotela v poslednej chvíli?', a: 'Transfer v rovnaký deň je možný do ~18:30 pre túru o 21:00. Po 18:30 nemusíme mať k dispozícii vodiča — v tomto prípade si môžete vziať taxík na prístavisko Kabataş (15 min z Taksimu, 10 min zo Sultanahmetu, ~€10-15). Centrálne a ľahké.' },
      { q: 'Ak som už v Kabataşi a chcem nastúpiť?', a: 'Ak ste na prístavisku a sú voľné miesta, môžete jednoducho nastúpiť. Napíšte nám cez WhatsApp alebo sa opýtajte posádky — ak je miesto, pridáme vás. Rovnaká cena, platba na palube. V tour-termínoch sa to nazýva "walk-on" — funguje to tu.' }
    ],
    cta: {
      primary: 'Rezervovať na Dnes Večer · Platba na Palube',
      secondary: 'Rezervácia v rovnaký deň · Potvrdené za niekoľko minút · Bezplatné storno 2 hodiny vopred',
      tertiary: 'WhatsApp pre Naliehavé Rezervácie'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Cena Plavba Istanbul od €{p.dinnerStd} — Transparentné Tarify',
      description: 'Ceny plavby po Bospore Istanbul: €{p.dinnerStd}/osoba. Deti 0-3 zadarmo, 4-8 polovičná cena. Transparentné doplnky.'
    },
    hero: {
      h1: 'Cena Plavba Istanbul',
      subtitle: 'Transparentné ceny, žiadne skryté poplatky. €{p.dinnerStd}/osoba — a platíte na palube, nie teraz.',
      badge: 'Transparentné · 40% ZĽAVA Priamo · 0-3 Roky Zadarmo'
    },
    intro: [
      '**Ceny plavieb v Istanbule** sa veľmi líšia — od rozpočtových trajektov za €15, ktoré preskakujú večeru, až po rezortné jachty za €150+. Naša cena je uprostred a ponúka najlepšiu hodnotu: €{p.dinnerStd}/osoba za plnú 3-hodinovú plavbu s večerou a šou. Žiadne skryté poplatky, žiadne prekvapujúce príplatky.',
      'Podrobný rozpis **ceny plavby v Istanbule**, pretože transparentnosť záleží:\n\n- **Plavba s Večerou**: €{p.dinnerStd}/osoba (predtým €{p.dinnerStdOriginal}, 40% zľava). Zahŕňa 3-hodinovú túru, 10 mezze, hlavný chod, dezert, neobmedzené nealkoholické nápoje, živú šou.\n- **0-3 roky**: Zadarmo. 4-8 rokov: 50% zľava. 9+ rokov: plná cena.\n\nDoplnky (voliteľné):\n- 2 poháre alkoholu: +€{p.alcohol2}/osoba\n- Transfer z hotela tam a späť: +€{p.transfer}/osoba\n- Romantické usporiadanie stola: +€{p.romantic}/stôl',
      'A dôležité: **platba na palube**. Nesľúbite ani cent, kým nie ste na lodi. Bezplatné storno až 2 hodiny pred odchodom. Žiadny záväzok, žiadne riziko — najviac **priateľská cena pre spotrebiteľa plavby v Istanbule**, ktorú nájdete.'
    ],
    highlights: [
      { title: 'Plavba s večerou: €{p.dinnerStd} (predtým €{p.dinnerStdOriginal})', desc: '40% zľava oproti bežnej cene. 3-hodinová túra, plná turecká večera, živá šou, neobmedzené nealkoholické nápoje. Jedna transparentná cena — pokrýva všetko, čo potrebujete pre krásny večer.' },
      { title: 'Všetko zahrnuté v cene', desc: '3-hodinová túra, 10 mezze, teplý predkrm, hlavný chod, dezert, neobmedzené nealkoholické nápoje, živá šou a všetky dane. Žiadne skryté poplatky ani prekvapenia na palube.' },
      { title: 'Cena pre deti: 0-3 zadarmo, 4-8 polovičná cena', desc: '0-3 úplne zadarmo (žiadne poplatky). 4-8 s 50% zľavou z ceny pre dospelých. 9+ plná cena pre dospelých. Transparentné, žiadne triky rodinných cien. Transfer je tiež zadarmo pre 0-3.' },
      { title: 'Doplnky — len keď ich chcete', desc: 'Alkohol (2 poháre): +€{p.alcohol2}/osoba. Transfer: €{p.transfer}/osoba. Romantický stôl: €{p.romantic}/stôl. Všetko voliteľné, nezabalené. Vyberte si len to, čo potrebujete.' }
    ],
    faq: [
      { q: 'Koľko stojí túra v Istanbule?', a: 'Plavba s večerou: €{p.dinnerStd}/osoba (bežne €{p.dinnerStdOriginal}, 40% zľava). 0-3 roky zadarmo, 4-8 rokov polovičná cena. Platba na palube — bez platby vopred. Bezplatné storno až 2 hodiny pred odchodom.' },
      { q: 'Sú v cene túry v Istanbule skryté poplatky?', a: 'Nie. Cena zahŕňa: 3-hodinovú túru, plnú večeru (mezze, predjedlo, hlavný chod, dezert), neobmedzené nealkoholické nápoje, živú šou, dane. Voliteľné doplnky (alkohol, transfer, romantický stôl) sú samostatné a s transparentnou cenou — platíte iba za to, čo pridáte. Žiadny "servisný poplatok", "prístavný poplatok", prekvapujúci príplatok.' },
      { q: 'Prečo je cena túry v Istanbule 40% zľava — je to trik?', a: 'Žiadny trik. Bežná cena €{p.dinnerStdOriginal} je to, čo účtujú stránky tretích strán (Viator, GetYourGuide, Klook) — s ich províziami. Rezervujte priamo a získajte €{p.dinnerStd}. Toto je rozdiel 40%. Žiadne triky s limitovanou alebo dynamickou cenou.' },
      { q: 'Ako sa porovnáva cena túry v Istanbule s ostatnými možnosťami?', a: 'Slučkové trajekty: €5-10, 1 hodina, bez večere, bez zábavy, len turistika. Rozpočtové túry s večerou: €20-30, preplnené, priemerné jedlo, krátka šou. Naša plavba (€{p.dinnerStd}): 3 hodiny, plná večera, plná šou, súkromný stôl, licencované TÜRSAB. Rezortné jachty: €100-150+, prehnané pre sólo cestovateľov/páry.' },
      { q: 'Musím cenu túry v Istanbule platiť vopred?', a: 'Nie — **platba na palube**. Rezervujte teraz (1-minútový formulár), potvrdíme cez WhatsApp, príďte o 20:00 a platte na palube (hotovosť alebo karta). Bezplatné storno až 2 hodiny vopred. Nulový finančný záväzok, kým nie ste spokojní.' },
      { q: 'Sú skupinové zľavy na cenu túry v Istanbule?', a: 'Pre skupiny 10+ môžeme ponúknuť 5-10% zľavu — napíšte cez WhatsApp s veľkosťou skupiny. Pre 25+ zvážte súkromnú túru (celá loď pre vašu skupinu, prispôsobené menu). Pre 2-9 osôb platia štandardné ceny — už 40% zľava oproti bežnej cene.' }
    ],
    cta: {
      primary: 'Rezervovať · Platba na Palube',
      secondary: 'Od €{p.dinnerStd}/osoba · 0-3 roky zadarmo · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Pamiatky Bosporu od €{p.dinnerStd} — Istanbul Pamiatky z Vody',
      description: 'Plavba za pamiatkami Bosporu: Dolmabahçe, Ortaköy, most Bospor, Rumeli, Beylerbeyi, Dievčia veža. Večerná túra 3h s večerou. Bezplatné storno, platba na palube.'
    },
    hero: {
      h1: 'Turistika na Bospore',
      subtitle: 'Všetky ikonické pamätníky Istanbulu — z vody, v noci, s večerou. Jedna túra 3 hodiny pokrýva Dolmabahçe, mešitu Ortaköy, most Bospor, Rumeli Hisarı a oveľa viac.',
      badge: '10+ Pamätníkov · Európske a Ázijské Pobrežia · 3 Hodiny'
    },
    intro: [
      '**Turistika na Bospore** z vody prekonáva každú autobusovú túru. Bospor je najhistorickejšia vodná cesta mesta — osmanskí sultáni, byzantskí cisári, grécki obchodníci a ruské vojnové lode tu všetci prešli. Dnes naša 3-hodinová túra, s komentárom od anglicky hovoriacej posádky, prechádza okolo každého hlavného pamätníka Istanbulu, ktorý definuje panorámu.',
      'Trasa **našej turistickej túry po Bospore** (večerný odchod, 21:00-00:00):\n\n1. **Palác Dolmabahçe** — osmanská rezidencia z 19. storočia, osvetlená v noci\n2. **Palác Çırağan** — teraz luxusný hotel, kráľovská história\n3. **Mešita Ortaköy** — jedna z najfotografovanejších mešít Istanbulu, na vode\n4. **Most Bospor** — v noci strieda modrú, fialovú, zlatú\n5. **Bebek** — elegantná štvrť na európskom pobreží\n6. **Rumeli Hisarı** — postavený Fatihom Sultanom Mehmetom v roku 1452 pred dobytím Konštantínopolu\n7. **Most Fatih Sultan Mehmet** — druhý most Bosporu, dramatický oblúk\n8. **Palác Beylerbeyi** — ázijské pobrežie, osmanská letná rezidencia\n9. **Üsküdar** — ázijské pobrežie Istanbulu, tradičná štvrť\n10. **Dievčia veža** — veža na malom ostrove, jeden z najromantickejších symbolov Istanbulu',
      'Večera a zábava sú zahrnuté — nie samostatne — takže **turistika na Bospore** sa mení na kompletný večer. Turecká viacchodová večera, živá šou ľudových tancov, sema, orientálny tanec, DJ. Hodnotenie 4,8★ z viac ako 11.317 cestovateľov, licencované TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ hlavných pamätníkov Istanbulu', desc: 'Palác Dolmabahçe, Palác Çırağan, mešita Ortaköy, most Bospor, Rumeli Hisarı, most FSM, Palác Beylerbeyi, Üsküdar, Dievčia veža. Každý zásadný pamätník Istanbulu v jednej túre.' },
      { title: 'Oba brehy, európsky a ázijský', desc: 'Európske pobrežie pri ceste tam (Dolmabahçe → Rumeli Hisarı), ázijské pobrežie pri ceste späť (Beylerbeyi → Üsküdar). Dva kontinenty v 3-hodinovej túre — iba Istanbul vám to umožňuje.' },
      { title: 'Večerná turistika = osvetlené výhľady', desc: 'Denná turistika vám ukazuje pamätníky v plochom svetle. Večerná túra ich zachytáva v dramatickom vrchole: žiariace žlté paláce, farebné mosty, mešity odrážajúce sa v tmavej vode. Lepšie pre fotografie, zapamätateľnejšie.' },
      { title: 'Večera + šou zahrnuté', desc: 'Turistika + večera + zábava v jednom balíku. Nemusíte plánovať samostatnú večeru po túre. Od €{p.dinnerStd}/osoba, platba na palube, celkovo 3 hodiny.' }
    ],
    faq: [
      { q: 'Ktoré pamätníky Bosporu uvidím?', a: 'V poradí: Palác Dolmabahçe, Palác Çırağan, mešita Ortaköy, most Bospor, štvrť Bebek, Rumeli Hisarı, most Fatih Sultan Mehmet, Anadolu Hisarı, Palác Beylerbeyi, Kuzguncuk, Üsküdar a Dievčia veža (viditeľná v diaľke). 10+ hlavných pamätníkov v jednej 3-hodinovej trase.' },
      { q: 'Je turistika na Bospore lepšia cez deň alebo v noci?', a: 'Rôzne zážitky. Deň: jasnejší výhľad na architektonické detaily, jasnejšie pre fotografie. Noc: dramatické osvetlenie, mystická atmosféra, menej lodí na vode. Väčšina cestovateľov preferuje nočnú túru, pretože pamätníky vyzerajú magickejšie — a večera + šou z nej robí kompletný večer.' },
      { q: 'Zastavuje sa loď pri pamätníkoch na fotografie?', a: 'Je to kontinuálna túra — žiadne zastávky (žiadne vystupovanie). Loď prechádza okolo každého pamätníka, posádka vysvetľuje, čo vidíte, môžete ísť na otvorenú palubu na fotografie. Žiadne rady, žiadne chodenie, žiadny stres z plánu — len kontinuálna 3-hodinová príležitosť na fotografovanie.' },
      { q: 'Komentuje posádka počas turistiky?', a: 'Áno — anglicky hovoriaca posádka ponúka krátke komentáre, keď prechádzame okolo každého hlavného pamätníka (história, architektúra, zaujímavosti). Nie je to vedená lekcia, skôr priateľské vysvetlenie, zatiaľ čo večeriate. Pre hlbšiu históriu odporúčame spárovať s pešou túrou v Istanbule počas dňa.' },
      { q: 'Ako sa turistika na Bospore líši od hop-on trajektu?', a: 'Hop-on trajekty (slučkové lode Şehir Hatları): €5-10, 1-2 hodiny, základné, bez večere, preplnené. Naša túra: €{p.dinnerStd}, 3 hodiny, plná večera, živá šou, súkromný stôl, komentár v angličtine. Pre seriózne a pohodlné turistiku je večerná túra lepšia. Pre rýchly a ekonomický transit funguje slučkový trajekt.' },
      { q: 'Môžem fotiť pamätníky z lode?', a: 'Áno — absolútne. Otvorená paluba má vynikajúce miesta na fotografovanie. Pamätníky prechádzajú 100-200 metrov od lode. Fotografie smartfónu vychádzajú skvele; používatelia DSLR/bezzrkadloviek môžu získať veľkolepé kompozície, najmä pri prechode zo zlatej hodiny do modrej hodiny v skorom večere.' }
    ],
    cta: {
      primary: 'Rezervovať Turistickú Túru · Platba na Palube',
      secondary: '10+ pamätníkov · Večera + šou · Bezplatné storno 2 hodiny vopred',
      tertiary: 'Dostupnosť Dnes Večer'
    }
  }

};
