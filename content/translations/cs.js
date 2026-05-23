/**
 * Czech translations for all 17 landing pages.
 * Mirror of ro.js structure. Formal "vy" form.
 * "Bosphorus" → "Bospor". Brand → "Bospor v noci" / "noční Bospor".
 * Turkish place names unchanged with diacritics.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Plavba s Večeří po Bosporu od €{p.dinnerStd} — Večerní Túra Istanbul + Show',
      description: 'Plavba s večeří 3 hodiny po Bosporu: turecké vícechodové menu a živá folklorní show. Odjezd 20:30 z Kabataşe. Bezplatné storno, platba na palubě.'
    },
    hero: {
      h1: 'Plavba s Večeří po Bosporu v Istanbulu',
      subtitle: 'Tři hodiny živé zábavy, štědrá turecká vícechodová večeře a nejúchvatnější noční výhledy na Bospor.',
      badge: '4,8★ · 11.317 recenzí'
    },
    intro: [
      '**Plavba s večeří po Bosporu** je nejikoničtějším večerním zážitkem Istanbulu. Naše túra odjíždí v 19:30 z přístaviště Kabataş a pluje pod osvětlenými mosty Bospor a Fatih Sultan Mehmet, nabízí vám tureckou vícechodovou večeři, živé lidové tance, orientální tanec a DJ set, který udržuje palubu živou až do 23:00.',
      'Na rozdíl od běžných turistických lodí, které zaplňují noční krajinu Istanbulu, je **naše plavba s večeří po Bosporu** licencována TÜRSAB (A-17672) a hodnocena 4,8★ více než 11.317 cestovateli. Skupiny udržujeme malé a obsluhu vřelou — a protože platíte na palubě, není žádné riziko v rezervaci předem.',
      'Ať už slavíte narozeniny, hledáte prémiový večer v Istanbulu pro svou rodinu, nebo chcete nejfotogeničtější přechod ze západu slunce do noci ve městě — toto je plavba s večeří, kterou v první řadě doporučují místní obyvatelé Istanbulu.'
    ],
    highlights: [
      { title: 'Turecká vícechodová večeře', desc: '10 variant studených mezze, teplý předkrm (paçanga böreği), hlavní chod na výběr (losos / mořský okoun / kuře / masové kuličky / vegetariánské), zmrzlinový dort jako dezert, neomezené nealkoholické nápoje.' },
      { title: 'Živé lidové tance, orientální tanec a DJ', desc: 'Vystoupení Mevlana sema, 5 tradičních tureckých lidových tanců, klasický orientální tanec, živí turečtí hudebníci, následovaní DJ setem po celou dobu plavby.' },
      { title: 'Kompletní noční trasa po Bosporu', desc: 'Kabataş → Dolmabahçe → Palác Çırağan → Mešita Ortaköy → Bebek → Rumeli Hisarı → Most FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Od €{p.dinnerStd}/osoba — platba na palubě', desc: 'Standardní plavba €{p.dinnerStd} (dříve €{p.dinnerStdOriginal}). VIP plavba s místem před pódiem a prémiovým menu €{p.dinnerVip}. Bez platby předem. Bezplatné storno až 2 hodiny před odjezdem.' }
    ],
    faq: [
      { q: 'Kdy začíná plavba s večeří po Bosporu?', a: 'Nalodění začíná v 19:30 na přístavišti Kabataş. Loď odjíždí ve 20:30 a vrací se kolem 23:30. Doporučujeme přijet 15-20 minut dříve, abyste se usadili a uvolnili.' },
      { q: 'Kolik stojí plavba s večeří po Bosporu?', a: 'Standardní plavba €{p.dinnerStd}/osoba (běžná cena €{p.dinnerStdOriginal}). VIP plavba s místem před pódiem a prémiovým menu €{p.dinnerVip}/osoba. 0-3 roky zdarma, 4-8 let 50% sleva. Platba na palubě — bez platby předem.' },
      { q: 'Je alkohol zahrnut v plavbě s večeří?', a: 'Neomezené nealkoholické nápoje (voda, kola, džus) jsou zahrnuty v ceně. Alkoholové balíčky jsou volitelné: 2 sklenice +€{p.alcohol2}/osoba nebo neomezený místní alkohol (víno, pivo, rakı, vodka, gin) +€{p.unlimited}/osoba. Dovážené nápoje se účtují zvlášť na palubě.' },
      { q: 'Existuje transfer z hotelu?', a: 'Ano — služba vyzvednutí a odvozu zpět je +€{p.transfer}/osoba. Obsluhované zóny: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane a Sütlüce. Tuto možnost si můžete vybrat v rezervačním formuláři.' },
      { q: 'Je plavba s večeří po Bosporu halal?', a: 'Absolutně. Veškeré maso podávané na palubě je halal certifikované. Alkohol je volitelný doplněk (nikdy nevnucovaný hostům) a uspořádání stolů přirozeně odděluje hosty, kteří preferují jídlo bez alkoholu. Nabízíme také vegetariánské alternativy bez dalších nákladů.' },
      { q: 'Jak se mám obléknout?', a: 'Smart casual oblečení. Večery v Istanbulu mohou být chladné i v létě — doporučujeme lehkou bundu nebo šál. Není povinný oděvový předpis, ale plavky, žabky nebo sportovní oblečení nejsou vhodné pro atmosféru večeře.' }
    ],
    cta: {
      primary: 'Rezervovat · Platba na Palubě',
      secondary: 'Bezplatné storno až 2 hodiny před odjezdem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bospor s Dětmi — Rodinná Plavba od €{p.dinnerStd}/dospělý',
      description: 'Plavba s večeří po Bosporu rodinně přátelská. Děti 0-3 zdarma, 4-8 poloviční cena. Bezpečný vnitřní prostor, dětské menu.'
    },
    hero: {
      h1: 'Plavba po Bosporu s Dětmi',
      subtitle: 'Večer na Bosporu navržený pro rodiny s dětmi — večeře, zábava a bezpečná, pohodlná atmosféra.',
      badge: 'Rodinně Přátelské · Halal · 0-3 Roky Zdarma'
    },
    intro: [
      '**Plavba po Bosporu s dětmi** je nejvíce rodinně přátelská večerní možnost v Istanbulu. Každý večer hostíme desítky rodin — navrhli jsme každý detail tak, aby se nejmenší cítili pohodlně: zastřešený vnitřní prostor pro udržení tepla, dostupné dětské menu (jednoduché grilované kuře, těstoviny, neomezené nealkoholické nápoje) a brzké nalodění, aby se předešlo záchvatům v pozdních hodinách.',
      'Na rozdíl od lodí pouze pro dospělé zůstává **naše plavba s večeří po Bosporu pro rodiny** vřelá a inkluzivní. **Děti 0-3 roky jsou zdarma** (transfer zahrnut), 4-8 let mají **50% slevu**, 9+ let platí plnou cenu — bez skrytých nákladů. Živé lidové tance, orientální tanec a vystoupení sema jsou jemná rodinná zábava, ne noční klub.',
      'Ať už přijíždíte do Istanbulu na prodloužený víkend s batoletem, nebo vezete teenagery na jejich první evropskou cestu — toto je túra doporučená rodinami v Istanbulu. Bezpečná, halal certifikovaná, licencovaná TÜRSAB a hodnocená 4,8★ více než 11.317 cestovateli.'
    ],
    highlights: [
      { title: '0-3 roky zcela zdarma', desc: 'Žádné poplatky za miminka a batolata. 4-8 let platí 50% z ceny pro dospělé. Od 9 let host s plnou cenou. Transparentní, bez překvapení.' },
      { title: 'Zastřešený vnitřní prostor', desc: 'Plně zastřešený a vytápěný v chladných měsících. Děti zůstanou v teple, chráněné před větrem. Otevřená paluba je také k dispozici, když je hezké počasí — volba je na vás.' },
      { title: 'Dětské menu na vyžádání', desc: 'Jednoduché grilované kuře, těstoviny, chléb a zelenina — bez dalších nákladů. Neomezené nealkoholické nápoje (kola, džus, voda). Dejte nám vědět předem — žádná překvapení s pikantním mezze pro nejmenší.' },
      { title: 'Bezpečná rodinná zábava', desc: 'Vystoupení sema (fascinující pro děti), 5 tradičních lidových tanců, živá turecká hudba a DJ set. Vše je rodinně přátelské — žádný obsah pro dospělé. Děti se často připojují k tanci.' }
    ],
    faq: [
      { q: 'Je plavba po Bosporu bezpečná pro malé děti?', a: 'Ano — naše loď je licencovaná TÜRSAB, má zastřešený vnitřní prostor s bezpečnými okny, záchranné vesty všech velikostí k dispozici a profesionální posádku se zkušenostmi s rodinami. Doporučujeme vnitřní palubu pro malé děti a otevřenou palubu pro 6+ let.' },
      { q: 'Jaká je cena pro děti na plavbě po Bosporu?', a: 'Děti **0-3 roky: ZDARMA** (žádné poplatky, žádné skryté náklady). **4-8 let: 50% sleva** z ceny pro dospělé — tedy €12/dítě na Standardu (€{p.dinnerStd}/2). **9+ let: plná cena pro dospělé.** Transfer z hotelu je zdarma pro 0-3 roky, standardní pro 4+ (€{p.transfer}/osoba).' },
      { q: 'Existuje dětské menu na palubě?', a: 'Ano — jednoduché grilované kuře, těstoviny, chléb, sezónní zelenina a neomezené nealkoholické nápoje. Dejte nám vědět o alergiích nebo dietních preferencích při rezervaci a připravíme něco, co bude vaše dítě jíst s radostí.' },
      { q: 'Je hudba nebo show pro děti příliš hlasitá?', a: 'Živé show probíhají v jedné oblasti pódia — pokud jsou vaše děti citlivé na hluk, posadíme vás k tiššímu stolu vzadu. Show trvá celkem 40 minut, zbytek večera je tureckou hudbou v pozadí a DJ na střední hlasitosti.' },
      { q: 'Co se stane, když dítě usne během plavby?', a: 'Žádný problém — mnoho jich usne. Vnitřní prostor má pohovky typu lavice, kde může miminko nebo malé dítě pohodlně spát. V případě potřeby požádejte posádku o teplou deku. Žádné další náklady.' },
      { q: 'Mám si přivézt kočárek na palubu?', a: 'Můžete, ale doporučujeme nechat velký kočárek v hotelu (nebo u našeho řidiče, pokud jste si rezervovali transfer — bezpečně ho uschováme). Naše loď má úzké chodby a paluby se schody. Lehký nosič je na palubě pohodlnější.' }
    ],
    cta: {
      primary: 'Rezervovat Rodinnou Plavbu · Platba na Palubě',
      secondary: 'Bezplatné storno až 2 hodiny předem · Bez platby předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantická Plavba po Bosporu od €{p.dinnerStd} — Večeře při Svíčkách',
      description: 'Romantická plavba po Bosporu: stůl při svíčkách, růže, vícechodová večeře pod osvětlenými mosty. Od €{p.dinnerStd}/osoba. Bezplatné storno, platba na palubě.'
    },
    hero: {
      h1: 'Romantická Plavba po Bosporu',
      subtitle: 'Večeře při svíčkách, stůl ozdobený růžemi, osvětlené mosty a zvláštní okamžik jen pro vás pod nejikoničtějším nočním nebem Istanbulu.',
      badge: 'Výročí · Líbánky · Zvláštní Večer'
    },
    intro: [
      '**Romantická plavba po Bosporu** je nejikoničtějším večerem pro páry v Istanbulu. Zatímco slunce zapadá nad Palácem Dolmabahçe a most Bospor se rozzáří barvami, vy a váš partner sdílíte tureckou vícechodovou večeři u soukromého stolu — se svíčkami, čerstvými květinami a živými houslemi vznášejícími se po palubě.',
      'Naše romantické uspořádání stolu (+€{p.romantic}/stůl) promění každé místo ve zvláštní okamžik: červené růže, zářící svíčky, ručně psaný uvítací lístek. Přidejte balíček neomezeného alkoholu pro víno pod hvězdami (+€{p.unlimited}/osoba) nebo to udržujte jednoduché s nápoji zahrnutými. Ať si vyberete cokoli, posádka se diskrétně postará o zbytek.',
      'Ať už slavíte výročí, plánujete překvapení pro svého partnera nebo prostě chcete nezapomenutelný večer v nejromantičtějším městě Evropy — toto je túra, kterou preferují páry v Istanbulu. Hodnocení 4,8★, licencováno TÜRSAB a — nejdůležitější — platba na palubě, takže slibujete pouze samotný večer.'
    ],
    highlights: [
      { title: 'Romantický stůl při svíčkách', desc: 'Přidejte romantické uspořádání stolu s +€{p.romantic}/stůl: čerstvé červené růže, zářící svíčky, okvětní lístky růží na ubrusu a ručně psaná karta. Fotografie zahrnuty.' },
      { title: 'Nejlepší stoly pro přechod ze západu slunce do noci', desc: 'Stoly u okna jsou vyhrazeny pro páry. Sledujte rozsvícení mostu Bospor, záři Dívčí věže a osvětlení mešity Ortaköy ze svého soukromého stolu.' },
      { title: 'Živé housle a intimní atmosféra', desc: 'Živé housle a akustická turecká hudba během večeře vytvářejí pomalou, romantickou atmosféru. Pak nastupuje DJ a páry tančí na otevřené palubě pod světly.' },
      { title: 'Víno, šampaňské, prémiové páry', desc: 'Přidejte 2 sklenice alkoholu (+€{p.alcohol2}/osoba) nebo neomezené místní víno, pivo, rakı (+€{p.unlimited}/osoba). Dovážené šampaňské a prémiové páry na vyžádání — zeptejte se při rezervaci.' }
    ],
    faq: [
      { q: 'Co dělá tuto plavbu romantickou?', a: 'Kombinace soukromého stolu, uspořádání se svíčkami (volitelné +€{p.romantic}), turecká vícechodová večeře, živé housle a akustická hudba a osvětlené mosty Bosporu procházející nad vámi. Zážitek navrhujeme pro páry — klidná atmosféra na začátku, pak energický DJ a tanec. Tempo si vybíráte vy.' },
      { q: 'Můžete uspořádat překvapení pro mého partnera — narozeniny, výročí, žádost o ruku?', a: 'Ano — dejte nám vědět při rezervaci. Můžeme koordinovat s naším personálem narozeninový dort (zdarma), zvláštní uspořádání stolu, ručně psanou kartu ve vašem jazyce nebo přinést prvek ke stolu ve správnou chvíli. Pro žádosti o ruku doporučujeme napsat nám přímo přes WhatsApp, abychom mohli diskrétně plánovat.' },
      { q: 'Kolik stojí romantická plavba pro 2 osoby?', a: '2 osoby Standard: 2 × €{p.dinnerStd} = €48,60. Přidejte romantické uspořádání +€{p.romantic} = €63,60. 2 osoby VIP: 2 × €{p.dinnerVip} = €110,40 + romantické uspořádání €{p.romantic} = €125,40. Bez platby předem — platba na palubě. Neomezený alkohol další 2 × €{p.unlimited} = €60.' },
      { q: 'Je romantická plavba po Bosporu soukromá — jen pro nás?', a: 'Ne — je to sdílená plavba s dalšími páry a hosty (celkem až 60-80). **Váš stůl** je soukromý (pouze pro vaši skupinu), ale na palubě jsou i další hosté. Pokud chcete zcela soukromou loď pro 2 osoby, to je samostatná **Soukromá plavba po Bosporu** (kterou můžeme zorganizovat na vyžádání — napište nám).' },
      { q: 'Můžeme si přinést vlastní květiny, dort nebo dárek?', a: 'Samozřejmě. Přineste, co chcete — naše posádka vám pomůže diskrétně umístit překvapivý dárek, schovat krabičku s prstenem do dezertu nebo vystavit květiny, které jste přinesli. Žádné dodatečné poplatky za korkovné. Stačí nám dát vědět, abychom mohli koordinovat okamžik.' },
      { q: 'Co bychom měli mít na sobě na romantickou plavbu po Bosporu?', a: 'Od smart casual po elegantní — mnoho párů se obléká pěkně (šaty, sako). Není přísný oděvový předpis, ale atmosféra je výjimečnější než ležérní turistika. Vezměte si lehkou bundu nebo šál — paluba může být chladná i v létě. Pohodlné boty, pokud plánujete tančit po večeři.' }
    ],
    cta: {
      primary: 'Rezervovat Romantickou Plavbu · Platba na Palubě',
      secondary: 'Přidejte romantické uspořádání stolu (+€{p.romantic}) v rezervačním formuláři · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Plavba s Večeří po Bosporu od €{p.dinnerStd} — Show + Večerní Túra',
      description: 'Plavba s večeří 3 hodiny po Bosporu: živá folklorní show, osvětlené mosty, panorama Bosporu v noci. Halal menu k dispozici na vyžádání.'
    },
    hero: {
      h1: 'Halal Plavba po Bosporu v Istanbulu',
      subtitle: '100% halal certifikované menu, alkohol vždy volitelný, rodinně přátelská zábava a uctivá atmosféra pro muslimské cestovatele — večer na Bosporu, správně udělaný.',
      badge: '100% Halal · Rodinně Přátelské · Muslimský Vlastník'
    },
    intro: [
      '**Halal plavba po Bosporu** je nejuctivější plavba s večeří v Istanbulu pro muslimské cestovatele. Veškeré maso podávané na naší lodi — losos, mořský okoun, kuře, jehněčí masové kuličky, hovězí svíčková, rib eye — je **halal certifikované** od schválených dodavatelů. Servírujeme stejné menu každému hostovi; žádná samostatná "halal sekce", protože celá loď je standardně halal.',
      'Alkohol je **volitelný doplněk** — nikdy nevnucovaný hostům a uspořádání stolů přirozeně odděluje hosty, kteří preferují jídlo bez alkoholu. Pro hosty, kteří chtějí balíček neomezeného alkoholu (+€{p.unlimited}/osoba), je k dispozici, ale zahrnuté neomezené nealkoholické nápoje (voda, kola, džus) jsou pro většinu muslimských rodin dostačující. Naše posádka je vyškolena respektovat vaše preference bez předpokladů.',
      '**Halal přátelská plavba po Bosporu** záleží pro cestovatele ze Saúdské Arábie, SAE, Kuvajtu, Kataru, Íránu, Malajsie, Indonésie, Pákistánu a Maroka, kteří chtějí nejikoničtější večer Istanbulu bez kompromisů. Licencováno TÜRSAB, 4,8★ a platba na palubě — neslibujte nic, dokud si nejste jisti, že zážitek splňuje vaše standardy.'
    ],
    highlights: [
      { title: '100% halal certifikované menu', desc: 'Veškeré maso (losos, mořský okoun, kuře, masové kuličky, hovězí, rib eye) je halal certifikované od schválených dodavatelů. Kuchyně dodržuje halal přípravu. Žádné vepřové produkty ani neHalal přísady. Vegetariánské možnosti jsou vždy k dispozici.' },
      { title: 'Alkohol volitelný, nikdy nevnucovaný', desc: 'Alkoholové balíčky jsou doplněk — nejsou ve výchozím nastavení zahrnuty. Nealkoholické nápoje (voda, kola, džus) jsou neomezené a zdarma. Váš stůl zůstává bez alkoholu, pokud výslovně nepožádáte. Posádka tiše respektuje vaši volbu.' },
      { title: 'Rodinně přátelská zábava', desc: 'Vystoupení sema, tradiční turecké lidové tance, živá turecká hudba. Žádná show ve stylu nočního klubu, žádný nevhodný obsah. Bezpečné pro děti, uctivé pro rodiny. Orientální tanec je tradiční umělecká forma, prezentovaná se skromností.' },
      { title: 'Respekt k modlitebním hodinám', desc: 'Pokud nalodění připadne na maghrib nebo isha (19:30-20:30), naše posádka vás může nasměrovat do tiché modlitební zóny na přístavišti Kabataş před odjezdem. Stačí nám dát vědět při rezervaci.' }
    ],
    faq: [
      { q: 'Je plavba po Bosporu 100% halal?', a: 'Ano — každý masný produkt v menu (ryby, kuře, masové kuličky, hovězí svíčková, rib eye, jehněčí) je halal certifikovaný od schválených dodavatelů. Kuchyně dodržuje halal standardy přípravy. Vepřové se na palubě nikde nepodává. Není to "halal možnost" — celé menu je halal.' },
      { q: 'Pijí ostatní hosté na palubě alkohol?', a: 'Někteří hosté přidávají volitelný alkoholový balíček (+€{p.unlimited}/osoba). Stoly jsou přirozeně odděleny — můžete požádat o zónu bez alkoholu. Posádka nepřináší alkohol, pokud si jej host konkrétně neobjedná. Nealkoholické nápoje (neomezené) jsou zahrnuty pro všechny.' },
      { q: 'Je tato plavba vhodná pro muslimské rodiny s dětmi?', a: 'Ano — je to jedna z nejuctívanějších plaveb pro rodiny v Istanbulu. Zábava je skromná (lidové tance, sema, turecká hudba), děti do 3 let zdarma, 4-8 let mají 50% slevu. Žádná atmosféra nočního klubu. Rodiny ze Zálivu, Indonésie, Malajsie, Pákistánu a Maroka pravidelně rezervují tuto plavbu.' },
      { q: 'Mohu se modlit na palubě?', a: 'Na palubě není vyhrazená modlitební místnost, ale doporučujeme modlit se před naloděním v 19:30 (maghribská modlitba často spadá do tohoto intervalu). Přístaviště Kabataş má modlitební zařízení. Pokud se potřebujete modlit během plavby 20:30-23:30 (isha), promluvte s posádkou — můžeme zařídit tiché místo na palubě.' },
      { q: 'Jaké jsou ceny pro muslimskou rodinu 4 osob (2 dospělí, 2 děti)?', a: 'Standardní plavba: 2 × €{p.dinnerStd} + 2 × €12 (poloviční cena 4-8 let) = €72,60. Pokud jsou děti mladší 3 let, zdarma: 2 × €{p.dinnerStd} = €48,60. Přidejte €{p.transfer} transfer z hotelu na dospělého. Celkem: €48-92 pro rodinu 4, bez platby předem, platba na palubě.' },
      { q: 'Je transfer z hotelu také halal?', a: 'Transfer z hotelu je jen jízda autem — bez jídla nebo pití, takže žádné halal obavy. Naši řidiči jsou profesionální, uctiví a přesní. Transferové zóny pokrývají Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih a 8 dalších centrálních čtvrtí, kde se muslimští cestovatelé obvykle ubytovávají.' }
    ],
    cta: {
      primary: 'Rezervovat Halal Plavbu · Platba na Palubě',
      secondary: 'Bezplatné storno 2 hodiny předem · Bez platby předem · Halal certifikováno',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP Plavba po Bosporu od €{p.dinnerVip} — Prémiová Večeře, VIP Místo',
      description: 'VIP plavba s večeří po Bosporu: prémiové mezze, možnosti steaku, stůl před pódiem, prioritní obsluha. Dříve €{p.dinnerVipOriginal}, nyní €{p.dinnerVip}.'
    },
    hero: {
      h1: 'VIP Plavba po Bosporu',
      subtitle: 'Místa před pódiem, prémiové turecké menu s možnostmi steaku a prioritní obsluha — večer na Bosporu na vyšší úrovni pro cestovatele, kteří chtějí nejlepší jídlo na palubě.',
      badge: 'Nejoblíbenější · 40% SLEVA · Místa Vepředu'
    },
    intro: [
      '**VIP plavba po Bosporu** vás usadí na nejlepší místa na palubě: stoly před pódiem s přímým výhledem na vystoupení sema, lidové tance, orientální tanec a živou hudbu. Prémiové menu přidává hovězí svíčkovou a rib eye k volbám hlavního chodu (místo kuřete/lososa u Standardu) plus 15+ variant tradičních tureckých mezze podávaných jako štědré uspořádání.',
      '**VIP plavba s večeří po Bosporu** byla našimi hosty označena za Nejoblíbenější — protože při €{p.dinnerVip}/osoba (dříve €{p.dinnerVipOriginal}, 40% sleva) se zážitek podobá spíše fine dining restauraci než turistické túře. Soukromý stůl, pozorná obsluha číšníků a stejné velkolepé výhledy na Dolmabahçe, mešitu Ortaköy a osvětlený most Bospor.',
      'Ať už jste obchodní cestující, slavíte důležitou událost nebo si myslíte "jsme v Istanbulu jednou — udělejme všechno správně", toto je **VIP plavba po Bosporu** rezervovaná vracejícími se návštěvníky. Licencováno TÜRSAB, 4,8★ s 11.317+ recenzemi, platba na palubě, bezplatné storno až 2 hodiny před odjezdem.'
    ],
    highlights: [
      { title: 'Soukromý stůl před pódiem', desc: 'Místa rezervovaná přímo před pódiem show — nejlepší výhled na vystoupení sema, lidové tance a orientální tanec. Váš stůl, nesdílený. Fotografové tato místa milují.' },
      { title: '15+ mezze + prémiové hlavní chody', desc: '15+ variant tureckých mezze podávaných jako tradiční uspořádání. Volby hlavního chodu zahrnují hovězí svíčkovou a rib eye (u Standardu pouze kuře/losos). Stejný dezert a neomezené nealkoholické nápoje.' },
      { title: 'Prioritní obsluha číšníků', desc: 'Vyhrazený číšník obsluhuje váš stůl jako první — doplňky, vedení menu, koordinace alkoholových doplňků, zvláštní požadavky. Nebojujte o pozornost v rušné místnosti.' },
      { title: '40% SLEVA — dříve €{p.dinnerVipOriginal}, nyní €{p.dinnerVip}', desc: 'Běžná cena €{p.dinnerVipOriginal}/osoba. Aktuální zaváděcí cena €{p.dinnerVip}/osoba — 40% sleva. Platba na palubě, bez platby předem. Bezplatné storno až 2 hodiny před odjezdem.' }
    ],
    faq: [
      { q: 'Jaký je rozdíl mezi VIP a Standardní plavbou po Bosporu?', a: 'VIP získává: (1) místa před pódiem s nejlepším výhledem, (2) 15+ mezze proti 10 u Standardu, (3) hovězí svíčkovou + rib eye přidané k možnostem hlavního chodu, (4) prioritní obsluhu číšníků. Stejná túra 3 hodiny, stejná zábava, stejná trasa. €{p.dinnerVip} proti €{p.dinnerStd}.' },
      { q: 'Je cena VIP €{p.dinnerVip} skutečně 40% sleva?', a: 'Ano — běžná cena je €{p.dinnerVipOriginal}/osoba (zkontrolujte na jakékoli rezervační stránce). Aplikujeme €{p.dinnerVip} jako cenu přímé rezervace, snižujeme poplatky zprostředkovatelů. Získáte VIP za méně, než si většina míst účtuje za Standard.' },
      { q: 'Je alkohol zahrnut ve VIP plavbě?', a: 'Ne — alkohol je samostatný doplněk (stejně jako u Standardu). 2 sklenice: +€{p.alcohol2}/osoba. Neomezený místní alkohol (víno, pivo, rakı, vodka, gin): +€{p.unlimited}/osoba. Dovážené prémiové nápoje se účtují zvlášť. Neomezené nealkoholické nápoje jsou zahrnuty a zdarma.' },
      { q: 'Mohu si vylepšit na VIP poté, co jsem nastoupil na Standardní loď?', a: 'Záleží na dostupnosti — pokud jsou VIP stoly volné, ano. Zaplatíte rozdíl (€{p.dinnerVip} - €{p.dinnerStd}) na palubě. Ale doporučujeme rezervovat VIP předem: nejlepší místa před pódiem jdou předběžným rezervacím.' },
      { q: 'Jak rezervovat VIP plavbu po Bosporu?', a: 'Použijte rezervační formulář na této stránce — vyberte "VIP" v Kroku 1, nastavte datum, zadejte počet hostů, pak kontaktní údaje. Váš požadavek přijde přes WhatsApp / Telegram / WeChat a okamžitě potvrdíme. Platba na palubě, ne nyní.' },
      { q: 'Je VIP plavba vhodná pro obchodní večeře s klienty?', a: 'Ano — VIP je nejčastější volbou pro obchodní večeře v Istanbulu. Soukromý stůl, dostatečně tichý pro konverzaci, působivé menu a výhledy. Mnoho hostů rezervuje VIP + neomezený alkohol pro hostění klientů. Halal certifikováno (dobré pro obchodní cestovatele ze Zálivu). Dejte nám vědět při rezervaci, zařídíme tišší VIP stůl vzadu.' }
    ],
    cta: {
      primary: 'Rezervovat VIP · Platba na Palubě',
      secondary: 'Dříve €{p.dinnerVipOriginal}, nyní €{p.dinnerVip} · Bezplatné storno 2 hodiny předem',
      tertiary: 'Zobrazit Standardní Možnost (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Soukromá Plavba po Bosporu — Pronájem Lodi Istanbul (25+ hostů)',
      description: 'Soukromá plavba po Bosporu pro skupiny, svatby, firemní akce. Exkluzivní loď, přizpůsobené menu, flexibilní doba. Bezplatné storno.'
    },
    hero: {
      h1: 'Soukromá Plavba po Bosporu',
      subtitle: 'Pronajměte si celou loď pro svou skupinu — rodinné oslavy, firemní večeře, narozeniny, zásnuby, svatby. Exkluzivní použití, přizpůsobené menu, flexibilní program.',
      badge: 'Soukromý Pronájem · 25+ Hostů · Přizpůsobené Menu'
    },
    intro: [
      '**Soukromá plavba po Bosporu** znamená, že celá loď je vaše — žádní další hosté, žádné sdílené stoly, žádný společný taneční parket. Ideální pro rodinná setkání, firemní večeře, narozeninové oslavy, rozlučky se svobodou nebo svatební hostiny. Loď, posádka, menu, zábava a program se přizpůsobí vaší skupině.',
      '**Náš soukromý pronájem po Bosporu** podporuje skupiny **od 25 do 80 hostů**. Menší skupiny mohou stále požádat o soukromý zážitek — nabízíme minimální cenu, která pokrývá provozní náklady lodi. Větší skupiny (svatební velikost) získávají přizpůsobené ceny a obvykle zahrnují speciální dekoraci, živou kapelu, podávání dortu a prodlouženou dobu (4-5 hodin místo 3 standardních).',
      'Ať už organizujete firemní akci pro klienty, oslavu 50. narozenin nebo svatební hostinu pod nejikoničtějšími mosty Istanbulu, toto je **soukromá plavba, kterou důvěřují organizátoři akcí v Istanbulu**. Hodnocení 4,8★, licencováno TÜRSAB, plně anglicky mluvící posádka a plná flexibilita — trasa, menu, hudba, program.'
    ],
    highlights: [
      { title: 'Celá loď, jen pro vás', desc: 'Žádní další hosté. Vaše skupina vlastní každou palubu, každý stůl. Nastavte si vlastní hudbu, oděvový předpis, program. Soukromí je důležité — respektujeme ho.' },
      { title: 'Přizpůsobené menu a balíček nápojů', desc: 'Spolupracujte s naším šéfkuchařem na přizpůsobení menu: specifické mezze, volby hlavního chodu, příprava přizpůsobená kultuře nebo dietním potřebám. Alkoholové balíčky, sklenice šampaňského, přizpůsobené koktejlové bary — vše lze zařídit.' },
      { title: 'Flexibilní doba a odjezd', desc: '3 standardní hodiny lze prodloužit na 4-5 hodin. Vyberte si denní odjezd ve 12:00, západ slunce v 17:30 nebo večer ve 20:30. Chcete pracovní den místo víkendu? Žádný problém — přizpůsobíme se vašemu programu.' },
      { title: 'Přizpůsobená dekorace, kapela, program', desc: 'Přizpůsobené dekorace (balónky, transparenty, květinové aranžmá), živá kapela místo DJ, podávání svatebního dortu, koordinace s fotografem, projevy — přidejte, co vaše akce potřebuje. Jsme organizátoři akcí, ne jen provozovatelé lodi.' }
    ],
    faq: [
      { q: 'Kolik stojí soukromá plavba po Bosporu?', a: 'Pro skupiny 25+, obvykle €{p.dinnerStd}-€{p.dinnerVip}/osoba + poplatek za pronájem lodi v závislosti na velikosti skupiny, datu a době. Napište nám přes WhatsApp s velikostí skupiny, datem a požadavky — cenu poskytneme do hodiny. Většina akcí se vejde do celkového rozmezí €2.000-€6.000.' },
      { q: 'Jaká je minimální velikost skupiny pro soukromou plavbu po Bosporu?', a: 'Technicky 25 hostů činí soukromou plavbu ekonomicky proveditelnou. Menší skupiny (10-24) mohou pronajímat soukromě, ale platí minimální cenu odpovídající ~25 osobám. Pro skutečně malé skupiny (2-10) zvažte běžnou Standardní nebo VIP plavbu — váš stůl je již soukromý, sdílena je pouze loď.' },
      { q: 'Mohu uspořádat svatbu na plavbě po Bosporu?', a: 'Ano — organizujeme 10-15 svatebních hostin ročně. Kapacita až 80 pro sedící večeři, až 100 pro koktejlový styl. Koordinujeme s vaším fotografem, svatebním organizátorem, kapelou nebo šéfkuchařem. Přizpůsobené podávání dortu, taneční parket pro první tanec, sklenice šampaňského — vše lze zařídit. Napište přes WhatsApp pro svatební cenu.' },
      { q: 'Co firemní akce a týmové večeře?', a: 'Soukromé firemní plavby jsou naše nejčastější rezervace. Firemní večeře, hostění klientů, uvedení produktu, oslava týmu — vše funguje. Můžeme poskytnout fakturu s rozpisem DPH, zařídit transfery z hotelu pro váš tým a koordinovat materiály se značkou (stolní dekorace, transparenty) na vyžádání.' },
      { q: 'Mohu si přivézt vlastní živou kapelu nebo DJ místo vaší zábavy?', a: 'Ano — můžete si přivézt vlastní živou kapelu, DJ, fotografa. Nebo si nechte naši standardní (sema, lidoví tanečníci, orientální, DJ) a přidejte tu svou navrch. Loď má PA systém a taneční parket. Dejte nám vědět předem, abychom mohli koordinovat zvukové ovládání.' },
      { q: 'Jak požádat o cenu za soukromou plavbu po Bosporu?', a: 'Nejjednodušší: napište nám přes WhatsApp na +90 532 244 29 22 s (1) velikostí skupiny, (2) preferovaným datem, (3) důvodem (svatba, firemní, narozeniny), (4) zvláštními požadavky. Odpovídáme do hodiny v pracovní době, 12 hodin v noci. Můžeme také zařídit videohovor k projednání podrobností.' }
    ],
    cta: {
      primary: 'WhatsApp pro Přizpůsobenou Cenu',
      secondary: 'Přizpůsobené menu, skupina 25-80, flexibilní doba · Odpověď do 1 hodiny',
      tertiary: 'Možnost Standardní Plavby (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bospor pro Páry od €{p.dinnerStd} — Romantický Večer Istanbul',
      description: 'Plavba s večeří po Bosporu pro páry. Soukromý stůl, osvětlené mosty, romantická dekorace volitelně. Od €{p.dinnerStd}/osoba.'
    },
    hero: {
      h1: 'Plavba po Bosporu pro Páry',
      subtitle: 'Romantický večer na Bosporu — soukromý stůl, živá hudba, osvětlené mosty procházející nad vámi. Ať už je to vaše první rande v Istanbulu nebo desáté výročí, tento večer funguje.',
      badge: 'Soukromý Stůl · Živá Hudba · Platba na Palubě'
    },
    intro: [
      '**Plavba po Bosporu pro páry** je oblíbený večer v Istanbulu. Ne každý pár slaví výročí — někdy jste prostě v nejromantičtějším městě světa a chcete úžasný večer společně. Tato plavba nabízí: soukromý stůl pro dva, pomalou tureckou vícechodovou večeři, živé housle a akustickou hudbu během večeře a osvětlený most Bospor pomalu procházející.',
      'Atmosféra je **vřelá, ale ne přehnaně romantická** — žádná povinná hudba k žádosti o ruku, žádný trapný koordinovaný potlesk pro "novomanžele". Jezte, pijte, povídejte si, sledujte světla Istanbulu. Pokud chcete přidat romantické uspořádání stolu (svíčky, růže, +€{p.romantic}), výborně — jinak je samotná večeře již zvláštní.',
      'Ať už jste v Istanbulu 3 dny se svým partnerem, slavíte skromnou událost nebo plánujete průzkumnou cestu pro budoucí žádost o ruku — **plavba po Bosporu pro páry** vám nabízí 3 hodiny večera společně v jednom z nejfotografovanějších měst světa. 4,8★, platba na palubě, bezplatné storno.'
    ],
    highlights: [
      { title: 'Soukromý stůl pro dva', desc: 'Soukromý stůl pro 2 osoby, nesdílený. Priorita stolů u okna pro páry. Fotografie západu slunce a nočního Bosporu přímo u vašeho okna.' },
      { title: 'Pomalá vícechodová večeře', desc: '10 variant tureckých mezze, teplý předkrm, hlavní chod (losos, mořský okoun, kuře, masové kuličky nebo vegetariánské), zmrzlinový dort jako dezert. Podáváno pomalu po dobu 3 hodin — nespěcháte.' },
      { title: 'Živé housle a tichá hudba', desc: 'Živé housle a akustická turecká hudba během večeře vytvářejí intimní atmosféru vhodnou pro konverzaci. Pak nastupuje DJ pro páry, které chtějí tančit.' },
      { title: 'Doplňky pro zvláštní večery', desc: 'Romantické uspořádání stolu (svíčky, růže): +€{p.romantic}. Neomezený místní alkohol (víno, rakı): +€{p.unlimited}/osoba. Transfer z hotelu (tam a zpět): +€{p.transfer}/osoba. Vyberte si, co se hodí k vašemu večeru.' }
    ],
    faq: [
      { q: 'Je tato plavba po Bosporu vhodná pro obyčejný večer, ne pro zvláštní příležitost?', a: 'Ano — většina našich párů neslaví nic zvláštního, jen mají krásný večer společně. Atmosféra je vřelá a příjemná, aniž by byla přehnaná. Můžete přidat romantické uspořádání stolu (+€{p.romantic}), pokud chcete extra, nebo si prostě užít standardní večer.' },
      { q: 'Kolik stojí plavba po Bosporu pro 2 osoby?', a: '2 osoby Standard: 2 × €{p.dinnerStd} = €48,60. 2 osoby VIP: 2 × €{p.dinnerVip} = €110,40. Přidejte transfer z hotelu pro dva: +€{p.transfer}×2 = €20. Přidejte neomezený alkohol pro dva: +€{p.unlimited}×2 = €60. Bez platby předem — platba na palubě.' },
      { q: 'Mohou si páry přivézt vlastní víno nebo šampaňské?', a: 'Nepovolujeme externí alkohol (z důvodů provozní licence). Ale máme neomezené místní víno (+€{p.unlimited}/osoba) a můžeme zařídit dovážená prémiová vína nebo šampaňské za poplatek — zeptejte se při rezervaci. Prosecco, Chianti a Cabernet jsou oblíbené prémiové požadavky.' },
      { q: 'Je problém, když nepijeme alkohol — jsme neobvyklí?', a: 'Vůbec ne — mnoho párů zcela přeskakuje alkohol, ať už z halal důvodů nebo prostě z preference. Neomezené nealkoholické nápoje (voda, džus, kola) jsou zahrnuty. Nikdo se nepodívá dvakrát, pokud je váš stůl bez alkoholu. Mnoho muslimských párů ze Saúdské Arábie, Íránu a Indonésie rezervuje tuto plavbu.' },
      { q: 'Kdy je plavba po Bosporu pro páry nejlepší — západ slunce nebo večer?', a: 'Večer (odjezd 20:30) je nejikoničtější — osvětlené mosty, odrazy na vodě, osvětlené paláce. Západ slunce (odjezd 17:30) je dřívější a má krásu zlaté hodiny, ale plavba s večeří je specificky ve 20:30. Pokud chcete obojí, většina párů rezervuje plavby západu slunce a večerní v různých dnech.' },
      { q: 'Je tam taneční parket — můžeme tančit?', a: 'Ano — po obsluze večeře (~22:30) začíná DJ a otevřená paluba se stává taneční zónou. Mnoho párů tančí pomalé písně pod světly s mostem Bospor v pozadí. Některé z nejkrásnějších fotografií, které v Istanbulu pořídíte.' }
    ],
    cta: {
      primary: 'Rezervovat Romantický Večer · Platba na Palubě',
      secondary: 'Přidejte romantické uspořádání (+€{p.romantic}) · Bezplatné storno 2 hodiny předem',
      tertiary: 'Zobrazit Romantickou Plavbu po Bosporu'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Plavba Západ Slunce Bospor od €35 — Zlatá Hodina + Večeře',
      description: 'Plavba západ slunce Bospor z Kabataşe, odjezd 17:30. Paláce ve zlatém světle, pokračující večeře v osvětlené noci. 3 hodiny. Bezplatné storno, platba na palubě.'
    },
    hero: {
      h1: 'Plavba při Západu Slunce po Bosporu',
      subtitle: 'Magická hodina na Bosporu — sledujte slunce klesající za siluetu minaretů, zatímco procházíte kolem Dolmabahçe, mešity Ortaköy a mostu Bospor rozsvěcujícího se na noc.',
      badge: 'Zlatá Hodina · Odjezd 17:30 · Nejlepší Fotografie'
    },
    intro: [
      '**Plavba při západu slunce po Bosporu** zachycuje Istanbul v jeho nejfotogeničtější póze. Nastupte v 17:30 a do 20 minut začne slunce klesat za minarety evropského pobřeží — zbarvuje Palác Dolmabahçe do zlata, mění vodu Bosporu v měď a dělá z mešity Ortaköy siluetu proti zářícímu nebi. Každá fotografie ze smartphonu na této plavbě vypadá jako profesionální film.',
      '**Naše plavba při západu slunce po Bosporu** zahrnuje plnou tureckou večeři, která začíná během zlaté hodiny a pokračuje, zatímco se mosty rozsvěcují na noc. K dezertu plujete pod osvětleným mostem Bospor — 30 milionů světel odrážejících se v tmavé vodě. Přechod ze dne do noci, zabalený do 3 hodin, je vše.',
      'Ať už jste fotograf hledající zlatou hodinu, cestovatel, který chce to nejlepší ze dne i noci, nebo pár hledající "fotografii okamžiku Istanbulu" — toto je **plavba s večeří při západu slunce po Bosporu** doporučená návštěvníkům. Hodnocení 4,8★, licencováno TÜRSAB, platba na palubě, bez platby předem.'
    ],
    highlights: [
      { title: 'Vrcholná zlatá hodina — odjezd 17:30', desc: 'Nastupte v 17:30, západ slunce nastává kolem 18:30 v létě / 17:00 v zimě. Prvních 40 minut plavby je zlatá hodina, kterou pronásledujete. Připravený fotoaparát — toto je fotografie.' },
      { title: 'Přechod den-noc zahrnut', desc: 'Nejen západ slunce — plujeme za soumraku, pak v osvětleném Bosporu. Uvidíte 3 různé fáze světla v jediné plavbě: zlatou, modrou hodinu a plně osvětlenou noc.' },
      { title: 'Plná večeře během plavby', desc: '10 variant tureckých mezze, teplý předkrm, hlavní chod (losos, mořský okoun, kuře, masové kuličky, vegetariánské), zmrzlinový dort. Stejné kvalitní menu jako u večerní plavby, podávané během západu slunce.' },
      { title: 'Dolmabahçe, Ortaköy, most Bospor — vše září', desc: 'Trasa prochází kolem Paláce Dolmabahçe (zlatý při západu slunce), mešity Ortaköy (kupole v siluetě), mostu Bospor (rozsvěcujícího se), Rumeli Hisarı, Paláce Beylerbeyi. Každý památník ve svém nejlepším světle.' }
    ],
    faq: [
      { q: 'Kdy odjíždí plavba při západu slunce po Bosporu?', a: 'Nalodění začíná v 17:00, loď odjíždí v 17:30, vrací se kolem 20:30. Toto zařizujeme, aby se to stalo přesně tehdy, kdy slunce zapadá na vodu — mírně se liší podle sezóny (léto 18:30, zima 17:00). Odjezd upravujeme sezónně o 15-30 minut.' },
      { q: 'Je plavba při západu slunce po Bosporu stejná jako plavba s večeří?', a: 'Podobná, ale v různých časech. Plavba při západu slunce odjíždí v 17:30 s večeří podávanou během plavby (zlatá hodina + raný večer). Plavba s večeří je ve 20:30 — po setmění, čisté noční výhledy. Stejná loď, stejné menu, stejná zábava — jen jiné osvětlení. Někteří hosté dělají obě v různých dnech.' },
      { q: 'Kolik stojí plavba při západu slunce po Bosporu?', a: 'Standardní plavba při západu slunce od €35/osoba (3 hodiny, plná večeře, živá zábava). VIP možnost s místem před pódiem a prémiovými mezze €55/osoba. Platba na palubě — bez platby předem. 0-3 roky zdarma, 4-8 let poloviční cena.' },
      { q: 'Je plavba při západu slunce lepší než plavba s večeří (večerní)?', a: '"Lepší" záleží na tom, co chcete. Západ slunce = nejlepší fotografie, zlaté světlo, pomalejší tempo, dřívější večer. Večer = nejikoničtější světla (osvětlené mosty), nejlepší zábava, pozdější večeře. Fotografové si vybírají západ slunce. Páry na romantický večer si vybírají večer. Rodiny s dětmi si obvykle vybírají západ slunce (končí brzy).' },
      { q: 'Co si vzít na plavbu při západu slunce?', a: 'Smartphone nebo fotoaparát na fotografie (zlatá hodina prosí). Lehká bunda — vítr se zvyšuje při západu slunce a paluba může rychle vychladnout v raném večeru. Sluneční brýle na prvních 30 minut. Smart-casual oblečení — večeříte, ale bez přísného oděvového předpisu.' },
      { q: 'Mohu zůstat na plavbě a vidět osvětlené mosty v noci?', a: 'Plavba při západu slunce je 3 hodiny (17:30-20:30), takže na konci uvidíte most Bospor plně osvětlený a Dívčí věž rozsvícenou. Pokud chcete VRCHOLNÉ noční výhledy (20:30-23:30, všechny restaurace a památky plně osvětlené), rezervujte plavbu s večeří ve 20:30. Nejlepší řešení: rezervujte obě v různých večerech.' }
    ],
    cta: {
      primary: 'Rezervovat Plavbu při Západu Slunce · Platba na Palubě',
      secondary: 'Odjezd 17:30 · Západ slunce + večeře zahrnuty · Bezplatné storno 2 hodiny předem',
      tertiary: 'Zobrazit Večerní Plavbu s Večeří (20:30)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Noční Túra po Bosporu od €{p.dinnerStd} — Plavba s Večeří + Živá Show',
      description: 'Noční túra 3 hodiny po Bosporu s večeří a živou show. Odjezd 20:30 z Kabataşe, osvětlené mosty. Bezplatné storno, platba na palubě.'
    },
    hero: {
      h1: 'Noční Túra po Bosporu',
      subtitle: 'Osvětlené mosty Istanbulu, rozsvícené paláce a voda Bosporu jako zrcadlo odrážející 30 milionů světel — noční túra, která definuje večer v Istanbulu.',
      badge: 'Osvětlené Mosty · Živá Show · Večeře Zahrnuta'
    },
    intro: [
      '**Noční túra po Bosporu** je nejdoporučovanější večerní aktivita v Istanbulu. Zde je proč: po setmění se Bospor transformuje. Most Bospor střídá modrou, fialovou a zlatou. Palác Dolmabahçe září teple žlutě. Mešita Ortaköy se dokonale odráží v černé vodě. Každý památník Istanbulu dosahuje své dramatické vrchol v noci.',
      '**Naše noční túra po Bosporu s večeří** zabaluje kompletní ikonický večer: 3 hodiny na vodě (20:30-23:30), turecká vícechodová večeře, živé lidové tance (sema, 5 lidových tanců, orientální tanec), živá hudba a DJ set, který udržuje palubu živou až do konce noci. Každý host dostane stejný program — žádná "základní" možnost, která vynechává nejlepší části.',
      'Ať už je to vaše první návštěva Istanbulu a hledáte "jedinou věc, kterou musíte v noci dělat", nebo jste tu byli dříve a chcete nejfotogeničtějších 3 hodin města, toto je **noční túra po Bosporu** hodnocená 4,8★ více než 11.317 cestovateli. Licencováno TÜRSAB, platba na palubě, bez platby předem.'
    ],
    highlights: [
      { title: 'Osvětlený Bospor v dramatickém vrcholu', desc: 'Most Bospor mění barvu (modrá, fialová, zlatá), paláce září žlutě, mešita Ortaköy se odráží v tmavé vodě. 20:30-23:30 maximální osvětlení pro všechny památníky Istanbulu.' },
      { title: 'Tradiční turecká show na palubě', desc: 'Vystoupení sema, 5 tradičních lidových tanců (z různých regionů Turecka), orientální tanec, živá turecká hudba, pak DJ set. 40 minut show, pak pokračuje hudba + večeře.' },
      { title: 'Plná vícechodová večeře', desc: '10 variant tureckých mezze, teplý předkrm (paçanga böreği), hlavní chod (losos, mořský okoun, kuře, masové kuličky, vegetariánské — vaše volba), dezert (zmrzlinový dort), neomezené nealkoholické nápoje. Halal certifikováno.' },
      { title: 'Kompletní trasa po Bosporu', desc: 'Kabataş → Dolmabahçe → Palác Çırağan → Mešita Ortaköy → Bebek → Rumeli Hisarı → Most Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Dívčí věž → Kabataş.' }
    ],
    faq: [
      { q: 'Kdy je noční túra po Bosporu?', a: 'Nalodění od 19:30 na přístavišti Kabataş. Loď odjíždí ve 20:30, vrací se kolem 23:30. Doporučujeme přijet 20 minut dříve, abyste se usadili a vybrali si místo.' },
      { q: 'Kolik stojí noční túra po Bosporu?', a: 'Standardní noční túra (3 hodiny, večeře, show): €{p.dinnerStd}/osoba (dříve €{p.dinnerStdOriginal}). VIP s místem před pódiem a prémiovým menu: €{p.dinnerVip}/osoba (dříve €{p.dinnerVipOriginal}). 0-3 roky zdarma, 4-8 let poloviční cena. Platba na palubě.' },
      { q: 'Jaký je rozdíl mezi noční túrou po Bosporu a plavbou s večeří?', a: 'Stejná věc, jiné klíčové slovo. "Noční túra po Bosporu" je, jak hledá mnoho cestovatelů; "plavba s večeří" je oborový termín. Stejná loď, stejný 3hodinový program, stejné menu, stejná show. Vyberte si preferovaný vyhledávací termín — zážitek je stejný.' },
      { q: 'Noční túra po Bosporu nebo plavba při západu slunce — co stojí za více?', a: 'Noční túra = osvětlený Istanbul, maximální světelné drama, kompletní program zábavy, nejikoničtější fotografie osvětlených mostů. Západ slunce = zlatá hodina, pomalejší tempo, končí ve 20:30. Pokud děláte jen jednu: noční túra je ikoničtější. Mnozí dělají obě v různých dnech.' },
      { q: 'Mohu absolvovat noční túru po Bosporu první den v Istanbulu?', a: 'Ano — doporučujeme. Mnoho cestovatelů si rezervuje noční túru na svůj první večer, protože vám nabízí kompletní orientaci: všechny hlavní památníky z vody, s dobrým jídlem a zábavou. Snazší než bojovat s jet lagem při pokusu o pěší turistiku v Den 1. Transfer z hotelu k dispozici z centrálních čtvrtí.' },
      { q: 'Nemluvím turecky — je túra v angličtině?', a: 'Posádka mluví anglicky. Zábava (sema, lidové tance, hudba) nevyžaduje jazyk. Menu večeře je v angličtině. Rezervace přes WhatsApp / Telegram / WeChat funguje v několika jazycích (angličtina, arabština, ruština, němčina, francouzština, španělština). Turečtinu není třeba.' }
    ],
    cta: {
      primary: 'Rezervovat Noční Túru · Platba na Palubě',
      secondary: 'Odjezd 20:30 · 3 hodiny · Večeře + show zahrnuty · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Plavba s Večeří v Istanbulu od €{p.dinnerStd} — Noční Túra po Bosporu',
      description: 'Plavba s večeří 3 hodiny v Istanbulu po Bosporu. Turecké vícechodové menu, živý folklór, osvětlené mosty. Bezplatné storno, platba na palubě. 11.317 recenzí.'
    },
    hero: {
      h1: 'Plavba s Večeří v Istanbulu',
      subtitle: 'Nejlepší plavba s večeří v Istanbulu — 3 hodiny po Bosporu, turecká vícechodová večeře, živá zábava a noční výhledy na nejikoničtější památníky města.',
      badge: '4,8★ · 11.317 recenzí · TÜRSAB A-17672'
    },
    intro: [
      'Hledáte **plavbu s večeří v Istanbulu**? Našli jste to, co většina cestovatelů doporučuje. Náš 3hodinový večer po Bosporu kombinuje plnou tureckou vícechodovou večeři, živé lidové tance a nejfotogeničtější výhledy města — vše z pohodlné lodi, která odjíždí ve 20:30 z přístaviště Kabataş.',
      'Zážitek **plavby s večeří v Istanbulu**: nastupte v 19:30, posaďte se, sledujte Palác Dolmabahçe, zatímco odjíždíme, večeře začíná, když se přibližujeme k mešitě Ortaköy, show začíná (sema, lidové tance, orientální), a do dezertu jste pod osvětleným mostem Bospor. O půlnoci se vracíte do Kabataşe s ikonickou kolážou fotografií a plným žaludkem.',
      '€{p.dinnerStd}/osoba za standardní plavbu (dříve €{p.dinnerStdOriginal}) nebo €{p.dinnerVip}/osoba za VIP s místy před pódiem (dříve €{p.dinnerVipOriginal}). Platba na palubě — bez platby předem, bez rizika. Licencováno TÜRSAB A-17672, hodnoceno 4,8★ více než 11.317 cestovateli.'
    ],
    highlights: [
      { title: 'Plná turecká vícechodová večeře', desc: '10 variant mezze, teplý předkrm, hlavní chod (losos/mořský okoun/kuře/masové kuličky/vegetariánské), zmrzlinový dort. Halal certifikováno. Neomezené nealkoholické nápoje zahrnuty.' },
      { title: 'Živá show tureckých lidových tanců', desc: 'Vystoupení sema, 5 tradičních lidových tanců, orientální tanec, živá turecká hudba, DJ. 40 minut show, kontinuální hudba na pozadí.' },
      { title: 'Kompletní noční trasa po Bosporu', desc: '3hodinová túra: Dolmabahçe, Çırağan, mešita Ortaköy, most Bospor, Bebek, Rumeli Hisarı, most FSM, Beylerbeyi, Üsküdar, Dívčí věž. Oba břehy, evropský a asijský.' },
      { title: 'Od €{p.dinnerStd} — platba na palubě', desc: 'Standard: €{p.dinnerStd} (dříve €{p.dinnerStdOriginal}). VIP s prémiovým menu: €{p.dinnerVip} (dříve €{p.dinnerVipOriginal}). Bez platby předem. Bezplatné storno až 2 hodiny před odjezdem.' }
    ],
    faq: [
      { q: 'Kolik stojí plavba s večeří v Istanbulu?', a: 'Naše standardní plavba s večeří €{p.dinnerStd}/osoba (běžná cena €{p.dinnerStdOriginal}). VIP s místem před pódiem a prémiovým menu €{p.dinnerVip}/osoba (běžná cena €{p.dinnerVipOriginal}). 0-3 roky zdarma, 4-8 let 50% sleva. Platba na palubě — bez platby předem.' },
      { q: 'Co je zahrnuto v ceně plavby s večeří v Istanbulu?', a: '3hodinová túra po Bosporu, turecká vícechodová večeře (mezze, teplý předkrm, hlavní chod, dezert), neomezené nealkoholické nápoje, živá show lidových tanců (sema, lidové tance, orientální), živá hudba + DJ, přístup na otevřenou palubu, daně zahrnuty. Transfer z hotelu a alkohol jsou volitelné doplňky.' },
      { q: 'Odkud odjíždí plavba s večeří v Istanbulu?', a: 'Přístaviště Kabataş, Istanbul — na evropském břehu, blízko Paláce Dolmabahçe. Přesné místo setkání je sděleno po rezervaci přes WhatsApp / Telegram / WeChat. Pěší videa ze zastávky tramvaje Dolmabahçe a zastávky tramvaje Kabataş se nacházejí v sekci místa setkání výše.' },
      { q: 'Jak dlouho trvá plavba s večeří — a kdy začíná?', a: 'Celkem 3 hodiny. Nalodění od 19:30, loď odjíždí přesně ve 20:30, vrací se kolem 23:30. Doporučujeme přijet 15-20 minut dříve, abyste se usadili a vybrali si místo.' },
      { q: 'Musím rezervovat předem nebo mohu přijít přímo?', a: 'Rezervujte předem — místa se plní, zejména o víkendech a svátcích. Rezervace ve stejný den jsou často možné, ale ne zaručené. Formulář na této stránce vám zajistí místo za méně než 1 minutu. Platba na palubě, takže není žádné finanční riziko v rané rezervaci.' },
      { q: 'Je plavba s večeří v Istanbulu vhodná pro vegetariány / halal / dietní omezení?', a: 'Ano — veškeré maso je halal certifikované. Vegetariánský hlavní chod (falafel, hranolky, bulgur pilaf, zeleninový guláš, cibulové kroužky) k dispozici bez dalších nákladů. Alergie lze zohlednit, pokud jsou oznámeny při rezervaci. Alkohol je volitelný doplněk, nikdy nevnucovaný.' }
    ],
    cta: {
      primary: 'Rezervovat Plavbu s Večeří · Platba na Palubě',
      secondary: '4,8★ · Licencováno TÜRSAB · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Noční Túra v Istanbulu od €{p.dinnerStd} — Plavba s Večeří po Bosporu + Show',
      description: 'Plavba 3 hodiny po Bosporu s večeří a živou show. Odjezd 20:30 z Kabataşe. Bezplatné storno, platba na palubě. 11.317 recenzí. Transfer z hotelu volitelný.'
    },
    hero: {
      h1: 'Túra po Istanbulu v Noci',
      subtitle: 'Noční túra v první řadě doporučená místními obyvateli Istanbulu — plavba po Bosporu 3 hodiny s večeří, živou zábavou a nejikoničtějšími osvětlenými výhledy města.',
      badge: 'Ikonický Večer Istanbulu · 3 Hodiny · Večeře Zahrnuta'
    },
    intro: [
      '**Túra po Istanbulu v noci** musí dělat tři věci: ukázat vám ikonické památníky města, dobře vás nakrmit a pobavit. Naše plavba s večeří po Bosporu dělá všechny tři za jeden 3hodinový večer — a proto ji většina průvodců Istanbulu doporučuje jako #1 zážitek noční túry.',
      'Trasa **túry po Istanbulu v noci** pokrývá nejlepší osvětlené památníky: Palác Dolmabahçe, Mešita Ortaköy, Most Bospor (mění barvy), čtvrť Bebek, Rumeli Hisarı, Most FSM, Palác Beylerbeyi, asijské pobřeží Üsküdar a Dívčí věž v dálce. Většina městských túr vám je ukáže z autobusu — my vám je ukážeme z vody, kde jsou nejdramatičtější.',
      'Večeře je zahrnuta (turecké vícechodové menu), živá show tureckých lidových tanců, sema, orientální tanec a DJ set. Pokud jste v Istanbulu 2-3 dny, je to jediný večer, který dává nejsilnější úder. 4,8★ z více než 11.317 cestovatelů, platba na palubě, bez platby předem.'
    ],
    highlights: [
      { title: 'Všechny ikonické noční výhledy Istanbulu', desc: 'Palác Dolmabahçe, mešita Ortaköy, osvětlený most Bospor, Rumeli Hisarı, most FSM, Palác Beylerbeyi, Dívčí věž. Každý hlavní památník ve vrcholu nočního osvětlení.' },
      { title: 'Plná turecká večeře zahrnuta', desc: '10 mezze, teplý předkrm, hlavní chod (losos/mořský okoun/kuře/masové kuličky/vegetariánské), dezert, neomezené nealkoholické nápoje. Halal certifikováno. Cena €{p.dinnerStd}/osoba — vše zahrnuto.' },
      { title: 'Živé lidové tance + sema + orientální', desc: 'Tradiční turecká zábava: vystoupení Mevlana sema, 5 regionálních lidových tanců, orientální tanec, živá hudba, DJ. 40 minut show, hudba na pozadí celý večer.' },
      { title: 'Snadné pro první návštěvu Istanbulu', desc: 'Centrální místo setkání (přístaviště Kabataş), transfer z hotelu (+€{p.transfer}/osoba), anglicky mluvící posádka, platba na palubě. Nulový logistický stres. Přijďte, užijte si, odejděte.' }
    ],
    faq: [
      { q: 'Jaká je nejlepší noční túra v Istanbulu?', a: 'Plavba s večeří po Bosporu je trvale řazena na #1. Důvody: (1) nabízí vám všechny ikonické noční výhledy z vody, (2) zahrnuje večeři a show v jednom balíčku, (3) 3 hodiny stačí na to, aby viděli mnoho bez únavy, (4) centrální místo setkání, (5) platba na palubě snižuje rezervační tření. Většina průvodců po Istanbulu ji doporučuje jako "jedinou povinnou věc, kterou v noci dělat".' },
      { q: 'Kolik stojí túra po Istanbulu v noci?', a: 'Naše noční túra s večeří po Bosporu: Standard €{p.dinnerStd}/osoba, VIP €{p.dinnerVip}/osoba. Zahrnuje túru, večeři, zábavu, nealkoholické nápoje. Volitelně: alkohol +€{p.unlimited}/osoba, transfer z hotelu +€{p.transfer}/osoba. Platba na palubě — bez platby předem.' },
      { q: 'Je túra po Istanbulu v noci bezpečná pro sólo cestovatele?', a: 'Ano — velmi bezpečná. Loď licencovaná TÜRSAB, profesionální anglicky mluvící posádka, CCTV na palubě, záchranné vesty k dispozici. Mnoho sólo cestovatelů rezervuje tuto túru. Večeřte u sdíleného nebo soukromého stolu (vaše volba) a večer je inkluzivní — potkejte další cestovatele, pokud chcete, nebo si jej nechte pro sebe.' },
      { q: 'Jaký je nejlepší čas na noční túru v Istanbulu?', a: 'Naše večerní túra po Bosporu je 20:30-23:30 (3 hodiny). Toto je vrcholný čas osvětlení pro všechny památníky Istanbulu — mosty plně osvětlené, paláce září, měsíc na vodě. Pokud chcete dříve (zlatá hodina), zvažte túru při západu slunce od 17:30.' },
      { q: 'Jak se dostanu na místo setkání pro noční túru v Istanbulu?', a: 'Místo setkání je přístaviště Kabataş (centrální evropské pobřeží, blízko Paláce Dolmabahçe). Tramvají: T1 do stanice Kabataş (konec linky). Taxíkem: ~15 min z Taksimu. Pěšky: 20 min z Taksimu po Bulváru İnönü. Na této stránce jsou videa s pěšími pokyny. Transfer z hotelu k dispozici s +€{p.transfer}/osoba, pokud preferujete.' },
      { q: 'Mohu rezervovat túru po Istanbulu v noci ve stejný den?', a: 'Často ano, zejména v pracovních dnech. Víkendy se plní rychleji. Rezervační formulář na této stránce vám umožní zkontrolovat dostupnost na dnes večer a rezervovat za méně než 1 minutu. Pro naléhavé požadavky ve stejný den, napište přes WhatsApp na +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Rezervovat Noční Túru · Platba na Palubě',
      secondary: 'Od €{p.dinnerStd}/osoba · Večeře + show zahrnuty · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Lodní Túra Istanbul od €{p.dinnerStd} — Bospor + Večeře + Show',
      description: 'Lodní túra 3 hodiny: plavba po Bosporu, plná turecká večeře, živý folklór, osvětlené noční krajiny. Bezplatné storno, platba na palubě. 11.317 recenzí.'
    },
    hero: {
      h1: 'Lodní Túra v Istanbulu',
      subtitle: 'Nejrezervovanější lodní túra v Istanbulu cestovateli — plavba po Bosporu s tureckým jídlem, živou zábavou a ikonickými výhledy města z vody.',
      badge: '4,8★ · TÜRSAB A-17672 · Platba na Palubě'
    },
    intro: [
      'Když hledáte "lodní túra v Istanbulu", hledáte jedinou věc, která definuje město z vody: Bospor. Naše 3hodinová lodní túra po Bosporu vás vede kolem každého hlavního památníku Istanbulu — Palác Dolmabahçe, mešita Ortaköy, most Bospor, Rumeli Hisarı, Palác Beylerbeyi a Dívčí věž — s plnou tureckou večeří a živou zábavou.',
      'Na rozdíl od mnoha 1hodinových turistických trajektů, které pokrývají méně z Bosporu a vynechávají večeři a zábavu, je **naše lodní túra v Istanbulu** kompletní večerní zážitek: nalodění v 19:30 na přístavišti Kabataş, túra do půlnoci, 10 mezze, hlavní chod, dezert, sema, lidové tance, orientální tanec a DJ. Dostanete také večerní výlet jako součást túry.',
      'Ať už máte večer nebo celý týden v Istanbulu, tato **lodní túra v Istanbulu** dělá svou práci. 4,8★ z více než 11.317 cestovatelů, licencováno TÜRSAB (A-17672), halal certifikované menu a platba na palubě — žádný finanční závazek, dokud nejste spokojeni se zážitkem.'
    ],
    highlights: [
      { title: 'Všechny hlavní památníky Bosporu', desc: 'Dolmabahçe, Çırağan, mešita Ortaköy, most Bospor, Bebek, Rumeli Hisarı, most FSM, Palác Beylerbeyi, Üsküdar, Dívčí věž. Oba břehy, evropský a asijský, v jedné túře.' },
      { title: 'Večeře + show zahrnuty', desc: 'Ne jen lodní túra — plná turecká vícechodová večeře, živé show lidových tanců, sema, orientální tanec, DJ. Co dělá 3 hodiny zábavnými, ne jen turistiku.' },
      { title: 'Večerní odjezd (nejlepší osvětlení)', desc: 'Odjezd ve 20:30 zachycuje osvětlený Bospor v plné záři — mosty, paláce, mešity vše osvětlené. Dramatičtější než denní túry, které ukazují stejné památníky v plochém světle.' },
      { title: 'Snadná rezervace, snadná platba', desc: 'Rezervujte s formulářem na této stránce za méně než 1 minutu. Platba na palubě — bez platby předem. Transfer z hotelu k dispozici od +€{p.transfer}/osoba. Bezplatné storno 2 hodiny před odjezdem.' }
    ],
    faq: [
      { q: 'Jaká je nejlepší lodní túra v Istanbulu?', a: 'Plavba s večeří po Bosporu je trvale řazena na #1. Pokrývá všechny hlavní památníky, zahrnuje večeři a zábavu a běží večer, když jsou památníky osvětlené. Jiné možnosti (hop-on trajekty, ranní turistické lodě) pokrývají kratší trasy, vynechávají večeři a nezahrnují zábavu. Pro večer v Istanbulu je toto nejkompletnější lodní túra.' },
      { q: 'Jak dlouho trvá lodní túra v Istanbulu?', a: '3 hodiny. Nalodění od 19:30 na přístavišti Kabataş, odjezd 20:30, návrat ~23:30. Pokrývá celý Bospor od Dolmabahçe k Rumeli Hisarı a zpět. Dostatek času na plnou večeři + show bez únavy.' },
      { q: 'Kolik stojí lodní túra v Istanbulu?', a: 'Naše lodní túra s večeří: Standard €{p.dinnerStd}/osoba (dříve €{p.dinnerStdOriginal}), VIP s prémiovým menu €{p.dinnerVip}/osoba (dříve €{p.dinnerVipOriginal}). 0-3 roky zdarma, 4-8 let poloviční cena. Platba na palubě. Alkohol a transfer z hotelu jsou volitelné doplňky.' },
      { q: 'Odkud odjíždí lodní túry v Istanbulu?', a: 'Naše loď odjíždí z přístaviště Kabataş, centrálního evropského pobřeží Istanbulu, blízko Paláce Dolmabahçe. Dostupné tramvají T1 (stanice Kabataş), taxíkem 15 min z Taksimu nebo pěšky 20 min z Taksimu. Transfer z hotelu k dispozici z centrálních čtvrtí s +€{p.transfer}/osoba.' },
      { q: 'Je tato lodní túra vhodná pro rodiny s dětmi?', a: 'Ano — velmi rodinně přátelská. Děti 0-3 roky zdarma, 4-8 let 50% sleva. Zastřešený vnitřní prostor, dětské menu na vyžádání a zábava (sema, lidové tance) poutavé pro děti. Mnoho rodin z celého světa rezervuje tuto túru.' },
      { q: 'Musím něco přivézt na lodní túru?', a: 'Pas nebo občanský průkaz (pro registraci na palubě), lehká bunda (paluba může být chladná), pohodlné boty, pokud plánujete tančit. Smartphone na fotografie. Hotovost nebo karta pro platbu na palubě (obojí přijímáno). Vše ostatní — jídlo, nápoje, zábava — je na palubě.' }
    ],
    cta: {
      primary: 'Rezervovat Lodní Túru · Platba na Palubě',
      secondary: '3 hodiny · Večeře + show · Od €{p.dinnerStd}/osoba · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Výlet po Bosporu od €{p.dinnerStd} — Plavba s Večeří Istanbul + Show',
      description: 'Výlet 3 hodiny po Bosporu: turecká večeře, živý folklór, osvětlené noční krajiny. Odjezd 20:30 z Kabataşe. Bezplatné storno, platba na palubě.'
    },
    hero: {
      h1: 'Výlet po Bosporu',
      subtitle: 'Výlet po Bosporu nejvíce doporučovaný cestovateli — plavba s večeří 3 hodiny pokrývající každý hlavní památník Istanbulu, s jídlem, zábavou a nočními výhledy.',
      badge: 'Kompletní Zážitek po Bosporu · Večerní Odjezd'
    },
    intro: [
      '**Výlet po Bosporu** může znamenat 1hodinový turistický trajekt nebo kompletní večer túry s večeří — my děláme to druhé a většina cestovatelů to považuje za zážitek lepší hodnoty. 3 hodiny, €{p.dinnerStd}/osoba, večeře a zábava zahrnuty. Nejen procházíte kolem památníků — jíte, sledujete show a užíváte si večer.',
      'Trasa **našeho výletu po Bosporu** pokrývá vše, co stojí za to vidět: Palác Dolmabahçe (osmanská rezidence sultána z 19. století), mešita Ortaköy (jedna z nejfotografovanějších mešit Istanbulu), most Bospor (mění barvy v noci), Rumeli Hisarı (postavený Fatihem Sultanem Mehmetem v roce 1452), Palác Beylerbeyi (asijské pobřeží) a Dívčí věž na malém ostrově. Vše vysvětlené anglicky mluvící posádkou.',
      'Ať už jste v Istanbulu 24 hodin nebo týden, toto je **výlet po Bosporu**, který vám dává nejvíce za jeden večer. Hodnocení 4,8★ z více než 11.317 cestovatelů, licencováno TÜRSAB A-17672, halal přátelské menu, platba na palubě — žádné riziko platby předem.'
    ],
    highlights: [
      { title: 'Celý Bospor jedním tahem', desc: 'Evropské pobřeží (Dolmabahçe, Ortaköy, Rumeli Hisarı), asijské pobřeží (Beylerbeyi, Üsküdar), oba mosty Bosporu, Dívčí věž. Každý hlavní památník viditelný za 3 hodiny.' },
      { title: 'Večeře + zábava zahrnuty', desc: 'Ne jen turistický trajekt — plná turecká večeře s mezze, hlavním chodem, dezertem. Živá show lidových tanců, sema, orientální, DJ. Hodnota zábavy nad pouhou krajinu.' },
      { title: 'Večer = nejlepší osvětlení', desc: 'Denní výlety po Bosporu vám ukazují památníky v plochém světle. Večerní výlety zachycují vše osvětlené: zářící paláce, barevné mosty, mešity odrážející se v tmavé vodě. Lepší fotografie, dramatičtější.' },
      { title: 'Od €{p.dinnerStd} — platba na palubě', desc: 'Není vyžadována platba předem. Platba na palubě (hotovost nebo karta). Bezplatné storno až 2 hodiny před odjezdem. 0-3 roky zdarma, 4-8 let poloviční cena. Transparentní ceny.' }
    ],
    faq: [
      { q: 'Jaké jsou nejlepší výlety po Bosporu v Istanbulu?', a: 'Večerní túra s večeří je trvale na nejvyšších místech. Denní možnosti (1hodinové smyčkové trajekty, 2hodinové turistické lodě) ukazují méně a nezahrnují večeři. Pro hodnotu je těžké překonat 3hodinovou túru s večeří, show a centrálním místem setkání. Náklady na naši túru €{p.dinnerStd} eliminují potřebu samostatného večera s večeří + zábavou.' },
      { q: 'Jak dlouho trvá výlet po Bosporu?', a: 'Náš výlet po Bosporu trvá celkem 3 hodiny (odjezd 20:30, návrat 23:30). Existují kratší možnosti (1hodinové turistické trajekty, 90minutové túry), ale vynechávají večeři a zábavu. Pro kompletní večerní zážitek jsou 3 hodiny ideální — dost na to, aby viděli vše bez únavy.' },
      { q: 'Stojí výlet po Bosporu za to?', a: 'Ano — téměř každý průvodce po Istanbulu uvádí "plavbu po Bosporu" v top 5 povinných věcí. Město bylo postaveno kolem této úžiny; pokud jste neviděli Bospor z vody, opravdu jste neviděli Istanbul. Naše specifická večerní túra přidává večeři a zábavu, takže je to kompletní večerní výlet, ne jen turistika.' },
      { q: 'Co si vzít na výlet po Bosporu?', a: 'Pas nebo občanský průkaz (pro registraci na palubě), lehká bunda (večer je paluba chladná), smartphone/fotoaparát, pohodlné boty pro taneční parket. Hotovost nebo karta na platbu. Vše ostatní je na palubě. Transfer z hotelu k dispozici s +€{p.transfer}/osoba, pokud nechcete používat veřejnou dopravu.' },
      { q: 'Je výlet po Bosporu vhodný pro děti?', a: 'Ano — velmi přátelský k dětem. Děti 0-3 roky zdarma (transfer zahrnut), 4-8 let 50% sleva. Zastřešený vnitřní prostor, dětské menu na vyžádání a jemná a poutavá zábava. Mnoho rodin rezervuje tento výlet jako vrchol své cesty do Istanbulu.' },
      { q: 'Jaké jsou zastávky výletu po Bosporu?', a: 'Je to kontinuální túra — žádné zastávky (žádné vystupování). Loď prochází kolem každého památníku, posádka vysvětluje, co vidíte, odpočíváte u stolu nebo jdete na otevřenou palubu pro fotografie. Žádné fronty, žádné chození — jen 3 bezproblémové hodiny na vodě.' }
    ],
    cta: {
      primary: 'Rezervovat Výlet po Bosporu · Platba na Palubě',
      secondary: '3 hodiny · Večeře + show · Bezplatné storno 2 hodiny předem · Licencováno TÜRSAB',
      tertiary: 'Zkontrolovat Dostupnost'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Vstupenky Plavba po Bosporu od €{p.dinnerStd} — Platba na Palubě',
      description: 'Přímé vstupenky na plavbu po Bosporu. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Bez platby předem, platba na palubě. Bezplatné storno až 2h předem.'
    },
    hero: {
      h1: 'Vstupenky na Plavbu po Bosporu',
      subtitle: 'Přeskočte poplatky zprostředkovatelů — kupte si vstupenky na plavbu po Bosporu přímo od nás. Bez platby předem, platba na palubě, bezplatné storno až 2 hodiny před odjezdem.',
      badge: 'Přímá Rezervace · Bez Platby Předem · 40% SLEVA'
    },
    intro: [
      'Hledáte **vstupenky na plavbu po Bosporu**? Kupte přímo. Naše vstupenky jsou €{p.dinnerStd} (Standard) nebo €{p.dinnerVip} (VIP) — 40% sleva oproti běžné ceně (€{p.dinnerStdOriginal} a €{p.dinnerVipOriginal}). Třetí strany rezervačních stránek obvykle přidávají 20-40% provize. Rezervací přímo ušetříte — a stále platíte na palubě.',
      'Náš proces **vstupenek na plavbu po Bosporu**: vyplňte formulář na této stránce za méně než 1 minutu (datum, počet hostů, balíček, kontakt), okamžitě potvrdíme přes WhatsApp / Telegram / WeChat, dostavíte se na přístaviště Kabataş v 19:30, platíte na palubě, užíváte si 3hodinovou plavbu s večeří. Žádná fyzická vstupenka k tisku, žádný kupón k přijetí e-mailem — potvrzení je vaše vstupenka.',
      'Ať už rezervujete plavbu s večeří na dnes večer nebo rezervujete na konkrétní datum příští týden, **přímé vstupenky na plavbu po Bosporu** jsou nejrychlejším způsobem. Hodnocení 4,8★, licencováno TÜRSAB (A-17672), halal certifikované menu a podporuje doplňky transfer z hotelu a alkohol.'
    ],
    highlights: [
      { title: 'Přímá rezervace — bez poplatků zprostředkovatelů', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Stránky třetích stran účtují €30-80+ za stejnou túru. Ušetřete rezervací přímo u nás. Žádné skryté poplatky, žádný příplatek provize.' },
      { title: 'Platba na palubě — bez platby předem', desc: 'Rezervujte místo nyní, zaplaťte, když nastoupíte na loď. Hotovost nebo karta přijímány. Zdarma, pokud zrušíte 2+ hodiny před odjezdem. Nulové finanční riziko v rané rezervaci.' },
      { title: 'Potvrzení za méně než 1 minutu', desc: 'Vyplňte formulář → potvrzujeme přes WhatsApp / Telegram / WeChat. Žádný kupón PDF k e-mailu k tisku. Naše zpráva je vaše vstupenka. Přijďte na přístaviště v 19:30.' },
      { title: 'Aktuální zaváděcí cena 40% SLEVA', desc: 'Standard dříve €{p.dinnerStdOriginal}, nyní €{p.dinnerStd}. VIP dříve €{p.dinnerVipOriginal}, nyní €{p.dinnerVip}. 40% sleva, protože rezervujete přímo. Není to trik s časovým limitem — je to naše standardní cena přímé rezervace.' }
    ],
    faq: [
      { q: 'Kolik stojí vstupenky na plavbu po Bosporu?', a: 'Standard: €{p.dinnerStd}/osoba (běžně €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/osoba (běžně €{p.dinnerVipOriginal}). Zahrnuje 3hodinovou túru, tureckou vícechodovou večeři, živou show lidových tanců, neomezené nealkoholické nápoje. 0-3 roky zdarma, 4-8 let 50% sleva. Platba na palubě — bez platby předem.' },
      { q: 'Kde mohu koupit vstupenky na plavbu po Bosporu?', a: 'Přímo z této stránky — vyplňte rezervační formulář, okamžitě potvrdíme přes WhatsApp / Telegram / WeChat. Platba na palubě. Platformy třetích stran (Viator, GetYourGuide, Klook) také prodávají vstupenky, ale obvykle účtují €30-80+ — toto je příplatek zprostředkovatele. Přímo je nejlevnější a nejrychlejší.' },
      { q: 'Musím si vstupenku na plavbu po Bosporu vytisknout?', a: 'Ne — není potřeba fyzická vstupenka nebo kupón. Po rezervaci vám pošleme potvrzení přes WhatsApp (nebo Telegram/WeChat) s místem setkání, časem a jménem rezervace. Stačí ukázat telefon na přístavišti. Hotovo.' },
      { q: 'Mohu zrušit nebo vrátit vstupenku na plavbu po Bosporu?', a: 'Ano — bezplatné storno až 2 hodiny před odjezdem. Stačí napsat přes WhatsApp. Protože jste ještě nezaplatili (platba na palubě), není potřeba vrácení peněz — prostě nepřijďte, bez nákladů. Mnohem flexibilnější než předem placené vstupenky od třetích stran.' },
      { q: 'Jsou vstupenky na plavbu po Bosporu k dispozici ve stejný den?', a: 'Často ano, zejména v pracovních dnech. Víkendy a svátky se plní rychleji. Zkontrolujte dostupnost přes rezervační formulář — aktualizuje se v reálném čase. Rezervace ve stejný den je obvykle možná s několika hodinami před odjezdem ve 20:30. Pro naléhavé požadavky, WhatsApp.' },
      { q: 'Jsou vstupenky pro děti na plavbu po Bosporu zdarma?', a: 'Děti **0-3 roky zcela zdarma** (žádné poplatky, žádné skryté náklady, transfer zahrnut). **4-8 let 50% sleva** (€{p.dinnerStd}/2 = €12 u Standardu). **9+ let plná cena pro dospělé.** Pevné a transparentní ceny — žádné triky "příplatku pro miminko".' }
    ],
    cta: {
      primary: 'Koupit Vstupenky · Platba na Palubě',
      secondary: 'Přímá rezervace · Bez platby předem · Bezplatné storno 2 hodiny předem',
      tertiary: 'Zkontrolovat Dostupnost'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bospor Last Minute od €{p.dinnerStd} — Rezervujte Dnes, Plaťte na Palubě',
      description: 'Rezervace plavby po Bosporu ve stejný den. Potvrzení WhatsApp za minuty. Odjezd 20:30 z Kabataşe. Bezplatné storno, platba na palubě. 11.317 recenzí.'
    },
    hero: {
      h1: 'Plavba po Bosporu na Poslední Chvíli',
      subtitle: 'Dostupnost na dnes večer, potvrzeno za několik minut. Bez platby předem, bez předtištěného kupónu — stačí přijít na přístaviště a užít si večer.',
      badge: 'Rezervace ve Stejný Den · Potvrzeno za Několik Minut · Platba na Palubě'
    },
    intro: [
      'Přistáli jste v Istanbulu dnes odpoledne a chcete krásný večer dnes? **Plavba po Bosporu na poslední chvíli** funguje. Speciálně rezervujeme místa pro rezervace ve stejný den, protože víme, že mnoho cestovatelů se rozhoduje ráno. Vyplňte formulář zde, potvrzujeme přes WhatsApp za několik minut, dostavíte se na přístaviště Kabataş v 19:30, platíte na palubě, užíváte si.',
      '**Naše plavba po Bosporu na poslední chvíli** má stejný večerní program jako předběžné rezervace: 3 hodiny na vodě (20:30-23:30), turecká vícechodová večeře, živá show lidových tanců, sema, orientální tanec, DJ. Osvětlený Palác Dolmabahçe, mešita Ortaköy, most Bospor — stejné ikonické výhledy. Stejná cena €{p.dinnerStd} Standard nebo €{p.dinnerVip} VIP.',
      'Storno ve stejný den je zdarma až 2 hodiny před odjezdem, protože **platba na palubě** znamená, že jste ještě nic neslíbili. Rezervovali jste ve 14:00 a změnili své plány do 19:00? Stačí napsat přes WhatsApp — žádné vrácení peněz, žádný problém. Toto je flexibilita **túry po Istanbulu na poslední chvíli**, kterou cestovatelé oceňují.'
    ],
    highlights: [
      { title: 'Místa stále k dispozici na dnes večer', desc: 'Rezervujeme 5-10 míst denně pro rezervace ve stejný den. Zkontrolujte formulář výše — dostupnost v reálném čase. Pokud je dnešní túra plná, ta zítřejší je obvykle otevřená.' },
      { title: 'Potvrzení za méně než 5 minut', desc: 'Vyplňte formulář → potvrzovací zpráva WhatsApp/Telegram/WeChat → hotovo. Žádný e-mail s kupónem, na který čekat, žádný QR kód k tisku. Naše zpráva je vaše vstupenka.' },
      { title: 'Nulová platba, dokud nenastoupíte na loď', desc: 'Platba na palubě, hotovost nebo karta. Pokud nepřijdete (změna plánů, nemoc, počasí), bez nákladů. Bezplatné storno až 2 hodiny před odjezdem. Skutečně přátelské k poslední chvíli.' },
      { title: 'Transfer z hotelu ve stejný den často k dispozici', desc: 'Transfer z hotelu obvykle vyžaduje 24hodinové oznámení, ale pro rezervace ve stejný den mezi 14:00-18:00 můžeme často zařídit vyzvednutí s +€{p.transfer}/osoba. Pro naléhavé požadavky na transfer, WhatsApp.' }
    ],
    faq: [
      { q: 'Mohu skutečně rezervovat plavbu po Bosporu na dnes večer?', a: 'Ano — často. Rezervujeme místa pro rezervace ve stejný den. Zkontrolujte formulář výše pro dostupnost dnes večer. Pokud jsou místa k dispozici, můžete rezervovat do 18:00 (3 hodiny před odjezdem). Víkendy jsou rušnější — rezervujte dříve v den, pokud je to možné.' },
      { q: 'Jak last minute mohu rezervovat?', a: 'Rezervace zůstávají otevřené do 18:00 pro loď v 20:30. Po 18:00 nám napište přímo přes WhatsApp na +90 532 244 29 22 — pokud jsou volná místa, můžeme potvrdit ručně. Po 19:30 je to velmi těsné, pokud již nejste na přístavišti Kabataş a nemůžete rychle nastoupit.' },
      { q: 'Je plavba po Bosporu na poslední chvíli dražší?', a: 'Ne — stejná cena jako předběžná rezervace. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Neděláme "dynamické ceny" ani příplatky za poslední chvíli. Stejná loď, stejná večeře, stejná show, stejná cena.' },
      { q: 'Co se stane, pokud je dnešní túra plná?', a: 'Zítřejší túra je obvykle otevřená — provozujeme 365 dní v roce, každý den. Můžete rezervovat na zítra a stále být "last minute", což znamená, že jste se právě rozhodli. Túry v pracovní dny mají více prostoru než víkendy.' },
      { q: 'Můžete zařídit transfer z hotelu na poslední chvíli?', a: 'Transfer ve stejný den je možný do ~18:00 pro túru ve 20:30. Po 18:00 nemusíme mít k dispozici řidiče — v tomto případě si můžete vzít taxi na přístaviště Kabataş (15 min z Taksimu, 10 min ze Sultanahmetu, ~€10-15). Centrální a snadné.' },
      { q: 'Pokud jsem již v Kabataşi a chci nastoupit?', a: 'Pokud jste na přístavišti a jsou volná místa, můžete prostě nastoupit. Napište nám přes WhatsApp nebo se zeptejte posádky — pokud je místo, přidáme vás. Stejná cena, platba na palubě. V turistických termínech se tomu říká "walk-on" — funguje to zde.' }
    ],
    cta: {
      primary: 'Rezervovat na Dnes Večer · Platba na Palubě',
      secondary: 'Rezervace ve stejný den · Potvrzeno za několik minut · Bezplatné storno 2 hodiny předem',
      tertiary: 'WhatsApp pro Naléhavé Rezervace'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Cena Plavba Istanbul od €{p.dinnerStd} — Transparentní Tarify',
      description: 'Ceny plavby po Bosporu Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Děti 0-3 zdarma, 4-8 poloviční cena. Transparentní doplňky.'
    },
    hero: {
      h1: 'Cena Plavba Istanbul',
      subtitle: 'Transparentní ceny, žádné skryté poplatky. Standard €{p.dinnerStd}/osoba, VIP €{p.dinnerVip}/osoba — a platíte na palubě, ne nyní.',
      badge: 'Transparentní · 40% SLEVA Přímo · 0-3 Roky Zdarma'
    },
    intro: [
      '**Ceny plaveb v Istanbulu** se velmi liší — od rozpočtových trajektů za €15, které vynechávají večeři, až po resortní jachty za €150+. Naše cena je uprostřed a nabízí nejlepší hodnotu: €{p.dinnerStd} za Standard s plnou plavbou s večeří a show 3 hodiny, €{p.dinnerVip} za VIP s prémiovým zážitkem před pódiem. Bez skrytých poplatků, bez překvapivých příplatků.',
      'Podrobný rozpis **ceny plavby v Istanbulu**, protože transparentnost záleží:\n\n- **Standardní Plavba s Večeří**: €{p.dinnerStd}/osoba (dříve €{p.dinnerStdOriginal}, 40% sleva). Zahrnuje 3hodinovou túru, 10 mezze, hlavní chod, dezert, neomezené nealkoholické nápoje, živou show.\n- **VIP Plavba s Večeří**: €{p.dinnerVip}/osoba (dříve €{p.dinnerVipOriginal}). Přidává místa před pódiem, 15+ mezze, možnosti hovězí svíčková/rib eye, prioritní obsluhu.\n- **0-3 roky**: Zdarma. 4-8 let: 50% sleva. 9+ let: plná cena.\n\nDoplňky (volitelné):\n- 2 sklenice alkoholu: +€{p.alcohol2}/osoba\n- Neomezený místní alkohol: +€{p.unlimited}/osoba\n- Transfer z hotelu tam a zpět: +€{p.transfer}/osoba\n- Romantické uspořádání stolu: +€{p.romantic}/stůl',
      'A důležité: **platba na palubě**. Neslíbíte ani cent, dokud nejste na lodi. Bezplatné storno až 2 hodiny před odjezdem. Žádný závazek, žádné riziko — nejvíce **přátelská cena pro spotřebitele plavby v Istanbulu**, kterou najdete.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (dříve €{p.dinnerStdOriginal})', desc: '40% sleva oproti běžné ceně. 3hodinová túra, plná turecká večeře, živá show, neomezené nealkoholické nápoje. Nejoblíbenější balíček — pokrývá vše, co potřebujete pro krásný večer.' },
      { title: 'VIP: €{p.dinnerVip} (dříve €{p.dinnerVipOriginal})', desc: '40% sleva oproti běžné ceně. Přidává místa před pódiem, 15+ mezze, prémiový hlavní chod (hovězí svíčková, rib eye), prioritní obsluhu číšníků. Pro zvláštní příležitosti nebo prémiové cestovatele.' },
      { title: 'Cena pro děti: 0-3 zdarma, 4-8 poloviční cena', desc: '0-3 zcela zdarma (žádné poplatky). 4-8 s 50% slevou z ceny pro dospělé. 9+ plná cena pro dospělé. Transparentní, bez triků rodinných cen. Transfer je také zdarma pro 0-3.' },
      { title: 'Doplňky — jen když je chcete', desc: 'Alkohol: €{p.alcohol2} nebo €{p.unlimited}/osoba. Transfer: €{p.transfer}/osoba. Romantický stůl: €{p.romantic}/stůl. Vše volitelné, nezabaleno. Vyberte si jen to, co potřebujete.' }
    ],
    faq: [
      { q: 'Kolik stojí túra v Istanbulu?', a: 'Standardní Plavba s Večeří: €{p.dinnerStd}/osoba (běžně €{p.dinnerStdOriginal}, 40% sleva). VIP: €{p.dinnerVip}/osoba (běžně €{p.dinnerVipOriginal}, 40% sleva). 0-3 roky zdarma, 4-8 let poloviční cena. Platba na palubě — bez platby předem. Bezplatné storno až 2 hodiny před odjezdem.' },
      { q: 'Jsou v ceně túry v Istanbulu skryté poplatky?', a: 'Ne. Cena zahrnuje: 3hodinovou túru, plnou večeři (mezze, předkrm, hlavní chod, dezert), neomezené nealkoholické nápoje, živou show, daně. Volitelné doplňky (alkohol, transfer, romantický stůl) jsou samostatné a s transparentní cenou — platíte pouze za to, co přidáte. Žádný "servisní poplatek", "přístavní poplatek", překvapivý příplatek.' },
      { q: 'Proč je cena túry v Istanbulu 40% sleva — je to trik?', a: 'Bez triku. Běžná cena €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} je to, co účtují stránky třetích stran (Viator, GetYourGuide, Klook) — s jejich provizemi. Rezervujte přímo a získejte €{p.dinnerStd}/€{p.dinnerVip}. Toto je rozdíl 40%. Žádné triky s limitovanou nebo dynamickou cenou.' },
      { q: 'Jak se srovnává cena túry v Istanbulu s ostatními možnostmi?', a: 'Smyčkové trajekty: €5-10, 1 hodina, bez večeře, bez zábavy, jen turistika. Rozpočtové túry s večeří: €20-30, přeplněné, průměrné jídlo, krátká show. Náš Standard (€{p.dinnerStd}): 3 hodiny, plná večeře, plná show, soukromý stůl, licencováno TÜRSAB. VIP (€{p.dinnerVip}): před pódiem, prémiové menu. Resortní jachty: €100-150+, přehnané pro sólo cestovatele/páry.' },
      { q: 'Musím cenu túry v Istanbulu platit předem?', a: 'Ne — **platba na palubě**. Rezervujte nyní (1minutový formulář), potvrzujeme přes WhatsApp, přijďte v 19:30 a platte na palubě (hotovost nebo karta). Bezplatné storno až 2 hodiny předem. Nulový finanční závazek, dokud nejste spokojeni.' },
      { q: 'Jsou skupinové slevy na cenu túry v Istanbulu?', a: 'Pro skupiny 10+ můžeme nabídnout 5-10% slevu — napište přes WhatsApp s velikostí skupiny. Pro 25+ zvažte soukromou túru (celá loď pro vaši skupinu, přizpůsobené menu). Pro 2-9 osob platí standardní ceny — již 40% sleva oproti běžné ceně.' }
    ],
    cta: {
      primary: 'Rezervovat · Platba na Palubě',
      secondary: 'Od €{p.dinnerStd}/osoba · 0-3 roky zdarma · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Památky Bosporu od €{p.dinnerStd} — Istanbul Památky z Vody',
      description: 'Plavba za památkami Bosporu: Dolmabahçe, Ortaköy, most Bospor, Rumeli, Beylerbeyi, Dívčí věž. Večerní túra 3h s večeří. Bezplatné storno, platba na palubě.'
    },
    hero: {
      h1: 'Turistika na Bosporu',
      subtitle: 'Všechny ikonické památky Istanbulu — z vody, v noci, s večeří. Jedna 3hodinová túra pokrývá Dolmabahçe, mešitu Ortaköy, most Bospor, Rumeli Hisarı a mnoho dalšího.',
      badge: '10+ Památek · Evropské a Asijské Pobřeží · 3 Hodiny'
    },
    intro: [
      '**Turistika na Bosporu** z vody překonává každou autobusovou túru. Bospor je nejhistoričtější vodní cesta města — osmanští sultáni, byzantští císaři, řečtí obchodníci a ruské válečné lodě zde všichni prošli. Dnes naše 3hodinová túra, s komentářem od anglicky mluvící posádky, prochází kolem každého hlavního památníku Istanbulu, který definuje panorama.',
      'Trasa **naší turistické túry po Bosporu** (večerní odjezd, 20:30-23:30):\n\n1. **Palác Dolmabahçe** — osmanská rezidence z 19. století, osvětlená v noci\n2. **Palác Çırağan** — nyní luxusní hotel, královská historie\n3. **Mešita Ortaköy** — jedna z nejfotografovanějších mešit Istanbulu, na vodě\n4. **Most Bospor** — v noci střídá modrou, fialovou, zlatou\n5. **Bebek** — elegantní čtvrť na evropském pobřeží\n6. **Rumeli Hisarı** — postaven Fatihem Sultanem Mehmetem v roce 1452 před dobytím Konstantinopole\n7. **Most Fatih Sultan Mehmet** — druhý most Bosporu, dramatický oblouk\n8. **Palác Beylerbeyi** — asijské pobřeží, osmanská letní rezidence\n9. **Üsküdar** — asijské pobřeží Istanbulu, tradiční čtvrť\n10. **Dívčí věž** — věž na malém ostrově, jeden z nejromantičtějších symbolů Istanbulu',
      'Večeře a zábava jsou zahrnuty — ne samostatně — takže **turistika na Bosporu** se mění v kompletní večer. Turecká vícechodová večeře, živá show lidových tanců, sema, orientální tanec, DJ. Hodnocení 4,8★ z více než 11.317 cestovatelů, licencováno TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ hlavních památek Istanbulu', desc: 'Palác Dolmabahçe, Palác Çırağan, mešita Ortaköy, most Bospor, Rumeli Hisarı, most FSM, Palác Beylerbeyi, Üsküdar, Dívčí věž. Každý zásadní památník Istanbulu v jedné túře.' },
      { title: 'Oba břehy, evropský a asijský', desc: 'Evropské pobřeží při cestě tam (Dolmabahçe → Rumeli Hisarı), asijské pobřeží při cestě zpět (Beylerbeyi → Üsküdar). Dva kontinenty v 3hodinové túře — pouze Istanbul vám to umožňuje.' },
      { title: 'Večerní turistika = osvětlené výhledy', desc: 'Denní turistika vám ukazuje památníky v plochém světle. Večerní túra je zachycuje v dramatickém vrcholu: zářící žluté paláce, barevné mosty, mešity odrážející se v tmavé vodě. Lepší pro fotografie, zapamatovatelnější.' },
      { title: 'Večeře + show zahrnuty', desc: 'Turistika + večeře + zábava v jednom balíčku. Nemusíte plánovat samostatnou večeři po túře. Od €{p.dinnerStd}/osoba, platba na palubě, celkem 3 hodiny.' }
    ],
    faq: [
      { q: 'Které památky Bosporu uvidím?', a: 'V pořadí: Palác Dolmabahçe, Palác Çırağan, mešita Ortaköy, most Bospor, čtvrť Bebek, Rumeli Hisarı, most Fatih Sultan Mehmet, Anadolu Hisarı, Palác Beylerbeyi, Kuzguncuk, Üsküdar a Dívčí věž (viditelná v dálce). 10+ hlavních památek v jedné 3hodinové trase.' },
      { q: 'Je turistika na Bosporu lepší ve dne nebo v noci?', a: 'Různé zážitky. Den: jasnější výhled na architektonické detaily, jasnější pro fotografie. Noc: dramatické osvětlení, mystická atmosféra, méně lodí na vodě. Většina cestovatelů preferuje noční túru, protože památníky vypadají kouzelněji — a večeře + show z toho dělá kompletní večer.' },
      { q: 'Zastavuje se loď u památek pro fotografie?', a: 'Je to kontinuální túra — žádné zastávky (žádné vystupování). Loď prochází kolem každého památníku, posádka vysvětluje, co vidíte, můžete jít na otevřenou palubu pro fotografie. Žádné fronty, žádné chození, žádný stres z plánu — jen kontinuální 3hodinová příležitost k focení.' },
      { q: 'Komentuje posádka během turistiky?', a: 'Ano — anglicky mluvící posádka nabízí krátké komentáře, když procházíme kolem každého hlavního památníku (historie, architektura, zajímavosti). Není to vedená lekce, spíše přátelské vysvětlení, zatímco večeříte. Pro hlubší historii doporučujeme spárovat s pěší túrou v Istanbulu během dne.' },
      { q: 'Jak se turistika na Bosporu liší od hop-on trajektu?', a: 'Hop-on trajekty (smyčkové lodě Şehir Hatları): €5-10, 1-2 hodiny, základní, bez večeře, přeplněné. Naše túra: €{p.dinnerStd}, 3 hodiny, plná večeře, živá show, soukromý stůl, komentář v angličtině. Pro seriózní a pohodlnou turistiku je večerní túra lepší. Pro rychlý a ekonomický transit funguje smyčkový trajekt.' },
      { q: 'Mohu fotit památky z lodi?', a: 'Ano — absolutně. Otevřená paluba má vynikající místa pro fotografování. Památníky procházejí 100-200 metrů od lodi. Fotografie smartphonu vycházejí skvěle; uživatelé DSLR/bezzrcadlovek mohou získat velkolepé kompozice, zejména při přechodu ze zlaté hodiny do modré hodiny v raném večeru.' }
    ],
    cta: {
      primary: 'Rezervovat Turistickou Túru · Platba na Palubě',
      secondary: '10+ památek · Večeře + show · Bezplatné storno 2 hodiny předem',
      tertiary: 'Dostupnost Dnes Večer'
    }
  }

};
