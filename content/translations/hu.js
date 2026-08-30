/**
 * Hungarian translations for all 17 landing pages.
 * Mirror of ro.js structure. Formal "Ön" form.
 * "Bosphorus" → "Boszporusz". Brand → "Esti Boszporusz" / "éjszakai Boszporusz".
 * Turkish place names unchanged with diacritics.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Boszporusz Vacsorás Hajóút €{p.dinnerStd}-tól — Esti Túra Isztambul + Show',
      description: 'Vacsorás hajóút 3 órán át a Boszporuszon: török többfogásos menü és élő folklór show. Indulás 21:00 Kabataşból. Ingyenes lemondás, fizetés a fedélzeten.'
    },
    hero: {
      h1: 'Boszporusz Vacsorás Hajóút Isztambulban',
      subtitle: 'Három óra élő szórakozás, bőséges török többfogásos vacsora és a Boszporusz leglenyűgözőbb éjszakai panorámái.',
      badge: '4,9★ · 11.317+ vendég'
    },
    intro: [
      '**A Boszporusz vacsorás hajóút** Isztambul legikonikusabb esti élménye. Túránk 20:00-kor indul a Kabataş kikötőből és a kivilágított Boszporusz és Fatih Sultan Mehmet hidak alatt hajózik, török többfogásos vacsorát, élő népi táncokat, keleti táncot és DJ szettet kínálva, amely 23:45-ig életben tartja a fedélzetet.',
      'Az Isztambul éjszakai tájképét megtöltő szokásos turistahajókkal ellentétben **a mi Boszporusz vacsorás hajóutunk** TÜRSAB (A-17672) engedéllyel rendelkezik és 4,9★ értékelést kapott több mint 11.317 utazótól. A csoportokat kicsinek tartjuk és a kiszolgálást meleg — és mivel a fedélzeten fizet, nincs kockázat az előzetes foglalásban.',
      'Akár születésnapot ünnepel, prémium isztambuli estét keres a családjának, vagy a város legfotogénebb naplemente-éjszaka átmenetét szeretné — ez az a vacsorás hajóút, amelyet Isztambul lakói elsősorban ajánlanak.'
    ],
    highlights: [
      { title: 'Török többfogásos vacsora', desc: '10 fajta hideg mezze, meleg előétel (börek), főétel választás (lazac / tengeri sügér / csirke / húsgombóc / vegetáriánus), különleges búzadara-desszert desszertként, korlátlan üdítők.' },
      { title: 'Élő népi táncok, keleti tánc és DJ', desc: 'Nyolc produkció: Oba Dombra, Mevlana sema előadás, Sarı Gelin, azeri egyveleg, klasszikus keleti tánc, anatóliai egyveleg és a grúz-kaukázusi késtánc — ezt követi élő szaxofon és egy DJ szett az egész hajóút alatt.' },
      { title: 'Teljes éjszakai útvonal a Boszporuszon', desc: 'Kabataş → Dolmabahçe → Çırağan-palota → Ortaköy-mecset → Bebek → Rumeli Hisarı → FSM-híd → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: '€{p.dinnerStd}-tól/fő — fizetés a fedélzeten', desc: 'Vacsorás hajóút €{p.dinnerStd} (korábban €{p.dinnerStdOriginal}). Nincs előzetes fizetés. Ingyenes lemondás indulás előtt 2 óráig.' }
    ],
    faq: [
      { q: 'Mikor kezdődik a Boszporusz vacsorás hajóút?', a: 'A beszállás 20:00-kor kezdődik a Kabataş kikötőnél. A hajó 21:00-kor indul és körülbelül 00:00-kor tér vissza. Ajánljuk, hogy 15-20 perccel korábban érkezzen, hogy elhelyezkedjen és pihenjen.' },
      { q: 'Mennyibe kerül a Boszporusz vacsorás hajóút?', a: 'Vacsorás hajóút €{p.dinnerStd}/fő (normál ár €{p.dinnerStdOriginal}). 0-3 év ingyenes, 4-9 év €5 kedvezmény. Fizetés a fedélzeten — nincs előzetes fizetés.' },
      { q: 'Az alkohol benne van a vacsorás hajóútban?', a: 'A korlátlan üdítők (víz, kóla, gyümölcslé) benne vannak az árban. Az alkoholcsomag opcionális: 2 pohár (bor, sör, rakı, vodka, whisky, gin és más) +€{p.alcohol2}/fő. A további és importált italokat külön számoljuk a fedélzeten.' },
      { q: 'Van szállodai transzfer?', a: 'Igen — a felvétel és visszaszállítás szolgáltatás +€{p.transfer}/fő. Kiszolgált zónák: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Yenikapı, Sütlüce és Şişli. Ezt az opciót a foglalási űrlapon választhatja ki.' },
      { q: 'A Boszporusz vacsorás hajóút halal?', a: 'Abszolút. A fedélzeten felszolgált összes hús halal tanúsítvánnyal rendelkezik. Az alkohol opcionális kiegészítő (soha nem kényszerítjük a vendégekre), és az asztalelrendezés természetesen elkülöníti azokat a vendégeket, akik alkoholmentes étkezést részesítenek előnyben. Felárfizetés nélkül vegetáriánus alternatívákat is kínálunk.' },
      { q: 'Hogyan öltözzem?', a: 'Smart casual öltözet. Az isztambuli esték nyáron is hűvösek lehetnek — könnyű kabátot vagy kendőt ajánlunk. Nincs kötelező öltözködési kód, de a fürdőruha, papucs vagy sportruházat nem alkalmas a vacsora hangulatához.' }
    ],
    cta: {
      primary: 'Foglaljon Most · Fizetés a Fedélzeten',
      secondary: 'Ingyenes lemondás indulás előtt 2 óráig',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Boszporusz Gyerekekkel — Családi Hajóút €{p.dinnerStd}/felnőttől',
      description: 'Boszporusz vacsorás hajóút családbarát. Gyerekek 0-3 ingyenes, 4-9 €5 kedvezménnyel. Biztonságos belső tér, gyerekmenü.'
    },
    hero: {
      h1: 'Boszporusz Hajóút Gyerekekkel',
      subtitle: 'Egy este a Boszporuszon, amelyet családoknak terveztek gyerekekkel — vacsora, szórakozás és biztonságos, kényelmes légkör.',
      badge: 'Családbarát · Halal · 0-3 Év Ingyenes'
    },
    intro: [
      '**A Boszporusz hajóút gyerekekkel** Isztambul legcsaládbarátabb esti opciója. Minden este több tucat családot fogadunk — minden részletet úgy terveztünk, hogy a legkisebbek kényelmesen érezzék magukat: fedett belső tér a meleg megőrzéséhez, hozzáférhető gyerekmenü (egyszerű grillezett csirke, tészta, korlátlan üdítők) és korai beszállás, hogy elkerüljük a kései órák hisztijeit.',
      'A csak felnőtteknek szóló hajókkal ellentétben **a Boszporusz vacsorás hajóutunk családoknak** meleg és befogadó marad. **A 0-3 éves gyerekek ingyen** (transzfer beleértve), 4-9 év **€5 kedvezményt** kap, 10+ év teljes árat fizet — nincs rejtett költség. Az élő népi táncok, a keleti tánc és a sema előadás finom családi szórakozás, nem éjszakai klub.',
      'Akár hosszú hétvégére érkezik Isztambulba a kisgyermekével, akár a tinédzsereit hozza az első európai utazásukra — ez a túra, amelyet Isztambul családjai ajánlanak. Biztonságos, halal tanúsítvánnyal rendelkezik, TÜRSAB engedéllyel és 4,9★ értékeléssel rendelkezik több mint 11.317 utazótól.'
    ],
    highlights: [
      { title: '0-3 év teljesen ingyenes', desc: 'Nincs díj a csecsemőkért és kisgyermekekért. 4-9 év €5-ot fizet a felnőtt árból. 10 éves kortól vendég teljes árral. Átlátható, meglepetés nélkül.' },
      { title: 'Fedett belső tér', desc: 'A hideg hónapokban teljesen fedett és fűtött. A gyerekek melegben maradnak, védve a széltől. A nyitott fedélzet is elérhető, amikor szép az idő — a választás az Öné.' },
      { title: 'Gyerekmenü kérésre', desc: 'Egyszerű grillezett csirke, tészta, kenyér és zöldségek — felárfizetés nélkül. Korlátlan üdítők (kóla, gyümölcslé, víz). Tájékoztasson minket előre — nincs meglepetés fűszeres mezzével a legkisebbeknek.' },
      { title: 'Biztonságos családi szórakozás', desc: 'Sema előadás (lenyűgöző a gyerekeknek), Oba Dombra, valamint anatóliai, azeri és kaukázusi néptáncok — köztük a látványos késtánc — élő török zene és szaxofonos DJ szett. Minden családbarát — nincs felnőtt tartalom. A gyerekek gyakran csatlakoznak a tánchoz.' }
    ],
    faq: [
      { q: 'Biztonságos a Boszporusz hajóút kisgyermekeknek?', a: 'Igen — a hajónk TÜRSAB engedéllyel rendelkezik, fedett belső térrel biztonságos ablakokkal, minden méretű mentőmellénnyel és családi tapasztalattal rendelkező professzionális személyzettel rendelkezik. A belső fedélzetet ajánljuk kisgyermekeknek és a nyitott fedélzetet 6+ éveseknek.' },
      { q: 'Mi az ár a gyerekeknek a Boszporusz hajóútra?', a: 'Gyerekek **0-3 év: INGYENES** (nincs díj, nincs rejtett költség). **4-9 év: €5 kedvezmény** a felnőtt árból — vagyis €19.30/gyerek Standardon (€{p.dinnerStd} − €5). **10+ év: teljes felnőtt ár.** A szállodai transzfer ingyenes 0-3 évig, standard 4+ esetén (€{p.transfer}/fő).' },
      { q: 'Van gyerekmenü a fedélzeten?', a: 'Igen — egyszerű grillezett csirke, tészta, kenyér, szezonális zöldségek és korlátlan üdítők. Tájékoztasson minket az allergiákról vagy étrendi preferenciákról a foglaláskor, és olyat készítünk, amit a gyermeke örömmel fog enni.' },
      { q: 'Túl hangos a zene vagy a show a gyerekeknek?', a: 'Az élő show-k a színpad egyik területén zajlanak — ha a gyerekei zajérzékenyek, csendesebb asztalhoz ültetjük Önöket hátul. A show összesen 40 percig tart, az este többi része háttér török zene és DJ közepes hangerőn.' },
      { q: 'Mi történik, ha a baba elalszik a hajóút alatt?', a: 'Nem probléma — sokan elalszanak. A belső térben kanapépadok vannak, ahol egy baba vagy kisgyermek kényelmesen aludhat. Kérjen a személyzettől meleg takarót, ha szükséges. Nincs felár.' },
      { q: 'Vigyem a babakocsit a fedélzetre?', a: 'Lehet, de javasoljuk, hogy hagyja a nagy babakocsit a szállodában (vagy a sofőrünknél, ha transzfert foglalt — biztonságosan tároljuk). Hajónkban keskeny folyosók és lépcsős fedélzetek vannak. Egy könnyű hordozó kényelmesebb a fedélzeten.' }
    ],
    cta: {
      primary: 'Foglalja a Családi Hajóutat · Fizetés a Fedélzeten',
      secondary: 'Ingyenes lemondás 2 órával előtte · Nincs előzetes fizetés',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantikus Boszporusz Hajóút €{p.dinnerStd}-tól — Gyertyafényes Vacsora',
      description: 'Romantikus Boszporusz hajóút: gyertyafényes asztal, rózsák, többfogásos vacsora kivilágított hidak alatt. €{p.dinnerStd}/főtől. Ingyenes lemondás, fizetés a fedélzeten.'
    },
    hero: {
      h1: 'Romantikus Boszporusz Hajóút',
      subtitle: 'Gyertyafényes vacsora, rózsákkal díszített asztal, kivilágított hidak és egy különleges pillanat csak Önnek Isztambul legikonikusabb éjszakai ege alatt.',
      badge: 'Évforduló · Nászút · Különleges Este'
    },
    intro: [
      '**A romantikus Boszporusz hajóút** Isztambul legikonikusabb estéje pároknak. Miközben a nap lemegy a Dolmabahçe-palota fölött és a Boszporusz-híd színekben gyúl ki, Ön és partnere török többfogásos vacsorát osztanak meg egy privát asztalnál — gyertyákkal, friss virágokkal és élő hegedűvel a fedélzeten lebegve.',
      'Romantikus asztali elrendezésünk (+€{p.romantic}/asztal) minden helyet különleges pillanattá változtat: vörös rózsák, ragyogó gyertyák, kézzel írt üdvözlőlap. Adja hozzá a 2 pohár alkohol csomagot borhoz a csillagok alatt (+€{p.alcohol2}/fő) vagy tartsa egyszerűen a benne foglalt üdítőkkel. Bármit is választ, a személyzet diszkréten gondoskodik a többiről.',
      'Akár évfordulót ünnepel, akár meglepetést tervez a partnerének, akár csak felejthetetlen estét szeretne Európa legromantikusabb városában — ez a túra, amelyet Isztambul párjai részesítenek előnyben. 4,9★ értékelés, TÜRSAB engedéllyel és — ami a legfontosabb — fizetés a fedélzeten, így csak magát az estét ígéri.'
    ],
    highlights: [
      { title: 'Romantikus gyertyafényes asztal', desc: 'Adja hozzá a romantikus asztali elrendezést +€{p.romantic}/asztalért: friss vörös rózsák, ragyogó gyertyák, rózsaszirmok az abroszon és kézzel írt kártya. Fotók beleértve.' },
      { title: 'A legjobb asztalok a naplemente-éjszaka átmenethez', desc: 'Az ablak melletti asztalok pároknak vannak fenntartva. Nézze a Boszporusz-híd kigyulladását, a Leánytorony ragyogását és az Ortaköy-mecset kivilágítását a privát asztalától.' },
      { title: 'Élő hegedű és intim légkör', desc: 'Az élő hegedű és az akusztikus török zene a vacsora alatt lassú, romantikus légkört teremt. Aztán jön a DJ, és a párok a nyitott fedélzeten táncolnak a fények alatt.' },
      { title: 'Bor, pezsgő, prémium párosítások', desc: 'Adja hozzá a 2 pohár alkohol csomagot (+€{p.alcohol2}/fő) — bor, sör, rakı, vodka, whisky, gin és más. Importált pezsgő és prémium párosítások kérésre — kérdezzen a foglaláskor.' }
    ],
    faq: [
      { q: 'Mi teszi romantikussá ezt a hajóutat?', a: 'A privát asztal, a gyertyás elrendezés (opcionális +€{p.romantic}), a török többfogásos vacsora, az élő hegedű és akusztikus zene és a Boszporusz kivilágított hídjai, amelyek elhaladnak felette, kombinációja. Az élményt pároknak tervezzük — nyugodt légkör az elején, majd energikus DJ és tánc. A tempót Ön választja.' },
      { q: 'Tudnak meglepetést szervezni a partneremnek — születésnap, évforduló, lánykérés?', a: 'Igen — szóljon a foglaláskor. Koordinálhatunk a személyzetünkkel születésnapi tortát (ingyenes), különleges asztali elrendezést, kézzel írt kártyát az Ön nyelvén vagy elem hozását az asztalhoz a megfelelő pillanatban. Lánykérésekhez ajánljuk, hogy közvetlenül WhatsAppon írjon nekünk, hogy diszkréten tervezhessünk.' },
      { q: 'Mennyibe kerül a romantikus hajóút 2 főre?', a: '2 fő: 2 × €{p.dinnerStd} = €48.60. Adja hozzá a romantikus elrendezést +€{p.romantic} = €63,60. Nincs előzetes fizetés — fizetés a fedélzeten. 2 pohár alkohol csomag kettőnek: további 2 × €{p.alcohol2} = €20.' },
      { q: 'A romantikus Boszporusz hajóút privát — csak nekünk?', a: 'Nem — ez egy megosztott hajóút más párokkal és vendégekkel (összesen 60-80-ig). **Az Ön asztala** privát (csak az Ön csoportjának), de vannak más vendégek a fedélzeten. Ha teljesen privát hajót szeretne 2 főre, az egy külön **Privát Boszporusz Hajóút** (amelyet kérésre megszervezhetünk — írjon nekünk).' },
      { q: 'Hozhatunk saját virágokat, tortát vagy ajándékot?', a: 'Természetesen. Hozzon, amit akar — személyzetünk segít diszkréten elhelyezni a meglepetésajándékot, elrejteni a gyűrűs dobozt a desszertben vagy megjeleníteni a virágokat, amelyeket hozott. Nincs külön dugódíj. Csak szóljon, hogy koordinálhassuk a pillanatot.' },
      { q: 'Mit viseljünk romantikus Boszporusz hajóútra?', a: 'A smart casualtól az elegánsig — sok pár szépen öltözik (ruhák, zakók). Nincs szigorú öltözködési kód, de a légkör különlegesebb, mint a hétköznapi turizmus. Hozzon könnyű kabátot vagy kendőt — a fedélzet nyáron is hűvös lehet. Kényelmes cipő, ha vacsora után táncolni szeretne.' }
    ],
    cta: {
      primary: 'Foglalja a Romantikus Hajóutat · Fizetés a Fedélzeten',
      secondary: 'Adja hozzá a romantikus asztali elrendezést (+€{p.romantic}) a foglalási űrlapon · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Boszporusz Vacsorás Hajóút €{p.dinnerStd}-tól — Show + Esti Túra',
      description: 'Vacsorás hajóút 3 órán át a Boszporuszon: élő folklór show, kivilágított hidak, éjszakai Boszporusz panoráma. Halal menü kérésre elérhető.'
    },
    hero: {
      h1: 'Halal Boszporusz Hajóút Isztambulban',
      subtitle: '100% halal tanúsítvánnyal rendelkező menü, az alkohol mindig opcionális, családbarát szórakozás és tiszteletteljes légkör a muszlim utazóknak — az este a Boszporuszon, helyesen.',
      badge: '100% Halal · Családbarát · Muszlim Tulajdonú'
    },
    intro: [
      '**A halal Boszporusz hajóút** a legtiszteletteljesebb vacsorás hajóút Isztambulban a muszlim utazók számára. A hajónkon felszolgált összes hús — lazac, tengeri sügér, csirkenyárs, marhanyárs — **halal tanúsítvánnyal rendelkezik** jóváhagyott beszállítóktól. Minden vendégnek ugyanazt a menüt szolgáljuk fel; nincs külön "halal szekció", mert az egész hajó alapértelmezetten halal.',
      'Az alkohol **opcionális kiegészítő** — soha nem kényszerítjük a vendégekre, és az asztalelrendezés természetesen elkülöníti azokat a vendégeket, akik alkoholmentes étkezést részesítenek előnyben. Azoknak a vendégeknek, akik a 2 poharas alkoholcsomagot szeretnék (+€{p.alcohol2}/fő), elérhető, de a benne foglalt korlátlan üdítők (víz, kóla, gyümölcslé) elegendőek a legtöbb muszlim család számára. Személyzetünket arra képezték, hogy tiszteletben tartsa az Ön preferenciáit feltételezések nélkül.',
      '**A halal-barát Boszporusz hajóút** fontos a Szaúd-Arábiából, EAE-ből, Kuvaitból, Katarból, Iránból, Malajziából, Indonéziából, Pakisztánból és Marokkóból érkező utazók számára, akik Isztambul legikonikusabb estéjét szeretnék kompromisszumok nélkül. TÜRSAB engedéllyel, 4,9★ és fizetés a fedélzeten — ne ígérjen semmit, amíg nem biztos, hogy az élmény megfelel az Ön elvárásainak.'
    ],
    highlights: [
      { title: '100% halal tanúsítvánnyal rendelkező menü', desc: 'Az összes hús (lazac, tengeri sügér, csirkenyárs, marhanyárs) halal tanúsítvánnyal rendelkezik jóváhagyott beszállítóktól. A konyha követi a halal elkészítést. Nincsenek sertéshústermékek vagy nem halal adalékanyagok. A vegetáriánus opciók mindig elérhetők.' },
      { title: 'Az alkohol opcionális, soha nem kötelező', desc: 'Az alkoholcsomagok kiegészítők — alapértelmezetten nem tartalmazzák. Az üdítők (víz, kóla, gyümölcslé) korlátlanok és ingyenesek. Az Ön asztala alkoholmentes marad, hacsak kifejezetten nem kéri. A személyzet csendben tiszteletben tartja az Ön választását.' },
      { title: 'Családbarát szórakozás', desc: 'Sema előadás, hagyományos török népi táncok, élő török zene. Nincsenek éjszakai klub stílusú show-k, nincs nem megfelelő tartalom. Biztonságos a gyerekeknek, tiszteletteljes a családoknak. A keleti tánc hagyományos művészeti forma, szerényen bemutatva.' },
      { title: 'Tisztelet az imaidők iránt', desc: 'Ha a beszállás egybeesik a maghribbal vagy ishával (20:00-21:00), a személyzetünk a csendes imazónába vezetheti Önt a Kabataş kikötőben az indulás előtt. Csak szóljon a foglaláskor.' }
    ],
    faq: [
      { q: 'A Boszporusz hajóút 100% halal?', a: 'Igen — minden hústermék a menüben (lazac, tengeri sügér, csirkenyárs, marhanyárs) halal tanúsítvánnyal rendelkezik jóváhagyott beszállítóktól. A konyha követi a halal elkészítési szabványokat. Sehol nem szolgálnak fel sertéshúst a fedélzeten. Ez nem egy "halal opció" — az egész menü halal.' },
      { q: 'Más vendégek alkoholt isznak a fedélzeten?', a: 'Néhány vendég hozzáadja az opcionális 2 poharas alkoholcsomagot (+€{p.alcohol2}/fő). Az asztalok természetesen el vannak választva — kérhet alkoholmentes zónát. A személyzet nem hoz alkoholt, hacsak egy vendég kifejezetten meg nem rendeli. Az üdítők (korlátlanok) mindenki számára benne vannak.' },
      { q: 'Ez a hajóút alkalmas muszlim családoknak gyerekekkel?', a: 'Igen — ez Isztambul egyik legtiszteltebb hajóútja a családok számára. A szórakozás szerény (népi táncok, sema, török zene), a 3 év alatti gyerekek ingyenesek, 4-9 év €5 kedvezményt kap. Nincs éjszakai klub légkör. Az Öbölből, Indonéziából, Malajziából, Pakisztánból és Marokkóból származó családok rendszeresen foglalják ezt a hajóutat.' },
      { q: 'Imádkozhatok a fedélzeten?', a: 'A fedélzeten nincs dedikált imahelyiség, de javasoljuk, hogy a 20:00-as beszállás előtt imádkozzon (a maghrib ima gyakran egybeesik ezzel az időtartammal). A Kabataş kikötőben vannak imaeszközök. Ha a 21:00-00:00 közötti vitorlázás során kell imádkoznia (isha), beszéljen a személyzettel — el tudunk rendezni egy csendes sarkot a fedélzeten.' },
      { q: 'Mennyibe kerül egy 4 fős muszlim családnak (2 felnőtt, 2 gyerek)?', a: 'Vacsorás hajóút: 2 × €{p.dinnerStd} + 2 × €19.30 (€5 kedvezmény 4-9 év) = €87.20. Ha a gyerekek 3 év alattiak, ingyenes: 2 × €{p.dinnerStd} = €48.60. Adjon hozzá €{p.transfer} szállodai transzfert felnőttenként. Összesen: €48.60–€92.90 a 4 fős családnak, nincs előzetes fizetés, fizetés a fedélzeten.' },
      { q: 'A szállodai transzfer is halal?', a: 'A szállodai transzfer csak egy autóút — nincs étel vagy ital, tehát nincs halal aggodalom. Sofőrjeink professzionálisak, tisztelettudóak és pontosak. A transzferzónák lefedik a Sultanahmetet, Taksimot, Beşiktaşt, Lalelit, Fatihot, Şişlit és 8 másik központi negyedet, ahol a muszlim utazók általában megszállnak.' }
    ],
    cta: {
      primary: 'Foglalja a Halal Hajóutat · Fizetés a Fedélzeten',
      secondary: 'Ingyenes lemondás 2 órával előtte · Nincs előzetes fizetés · Halal tanúsítvánnyal',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Boszporusz VIP élmény €{p.dinnerStd}-tól — prémium vacsora a Boszporuszon',
      description: 'VIP szintű boszporuszi vacsorás hajóút: teljes török menü, élő műsor, színpad melletti asztal opcionálisan, figyelmes kiszolgálás. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Fizetés a hajón, ingyenes lemondás.'
    },
    hero: {
      h1: 'Boszporusz VIP élmény — vacsorás hajóút',
      subtitle: 'Egy menü, egy színvonal: prémium mindenkinek. Háromórás boszporuszi este a Bosphorus Night fedélzetén — bőséges török vacsora, élő színpadi műsor, és igény szerint privát asztal a színpad mellett. Nem árulunk külön „VIP osztályt“ — a legjobbat adjuk minden vendégnek.',
      badge: '40% KEDVEZMÉNY · Egy menü, prémium színvonal · Fizetés a hajón'
    },
    intro: [
      'A Boszporuszon sok hajó „standard“ és „VIP“ kategóriára osztja a vendégeit. Mi nem. Az **Bosphorus Night** fedélzetén egyetlen vacsoramenü van, amelyet mindenkinek ugyanolyan gondossággal készítünk el: 10 fajta török meze, meleg előétel, választható főétel (lazac, tengeri sügér, csirkenyárs vagy marhanyárs), különleges búzadara-desszert és korlátlan üdítő. A teljes, nyolc produkcióból álló műsor is benne van — Oba Dombra, kerengő dervisek szertartása, anatóliai és azeri néptáncok, hastánc, kaukázusi késtánc, élő zene és szaxofonos DJ-finálé — mindez a €{p.dinnerStd}/fő árban.',
      'A VIP érzés az asztalnál kezdődik. Ha a színpadhoz és a látványhoz szeretne a legközelebb ülni, kérje a **privát asztalt a színpad mellett** (+€{p.romantic}/asztal), és a helyét előre lefoglaljuk — a legjobb szög a dervisekhez, a néptáncokhoz és a kivilágított Boszporuszhoz. Párok, ünneplések és fotózni szeretők kedvence.',
      'Az Bosphorus Night modern hajó: 42 méter hosszú, 3 fedélzetes, akár 400 vendéget fogad, télen fűtött, nyáron légkondicionált. A háromórás útvonal Kabataşból indul (beszállás 20:00-tól, indulás 21:00, visszaérkezés 00:00), elhalad a Dolmabahçe, az Ortaköy mecset, a Rumeli erőd és a Boszporusz híd fényei mellett. TÜRSAB engedéllyel (A-17672), 4,9★ a Google-on. Nincs előre fizetés — a hajón fizet, és az indulás előtt 2 órával még ingyenesen lemondhat.'
    ],
    highlights: [
      { title: 'Egy menü, prémium színvonal', desc: 'Nincs külön „VIP menü“ — mert az egyetlen menünk már ezen a szinten van. 10 fajta meze, meleg előétel, 4 választható főétel, desszert és korlátlan üdítő, minden asztalnál ugyanolyan gondossággal felszolgálva.' },
      { title: 'Privát asztal a színpad mellett (+€{p.romantic}/asztal)', desc: 'A dervisekhez, a néptáncokhoz és a hastánchoz legközelebbi asztalokat előre lefoglaljuk. Kiváló rálátás a színpadra és a Boszporuszra. Az asztala privát, nem közös.' },
      { title: 'Figyelmes asztali kiszolgálás', desc: 'Csapatunk az asztalnál szolgálja ki: fogások, menüajánlás, extra italok, különleges kérések. Nem kell sorban állnia a tömegben.' },
      { title: '40% KEDVEZMÉNY — volt €{p.dinnerStdOriginal}, most €{p.dinnerStd}', desc: 'Közvetlen foglalási ár: €{p.dinnerStd}/fő (listaár €{p.dinnerStdOriginal}). Fizetés a hajón, előleg nélkül. Ingyenes lemondás az indulás előtt 2 óráig.' }
    ],
    faq: [
      { q: 'Árulnak „VIP csomagot“? Miben más, mint a standard?', a: 'Nem árulunk külön VIP csomagot — egyetlen menü van, amelyet mindenki ugyanazon a prémium színvonalon kap. Amit „VIP élménynek“ nevezünk, az az este személyre szabása: privát asztal a színpad mellett (+€{p.romantic}/asztal), figyelmes asztali kiszolgálás és választható italkiegészítők. A hajóút 3 órás, €{p.dinnerStd}/fő.' },
      { q: 'Tényleg 40% kedvezmény a €{p.dinnerStd}?', a: 'Igen — a listaárunk €{p.dinnerStdOriginal}/fő. A €{p.dinnerStd} a közvetlen foglalási ár, közvetítői jutalék nélkül. A hajón fizet, előleget nem kérünk.' },
      { q: 'Mi van a menüben?', a: '10 fajta török meze, meleg előétel, választható főétel (lazac, tengeri sügér, csirkenyárs vagy marhanyárs) és különleges búzadara-desszert desszertnek, korlátlan üdítővel. A nyolc produkcióból álló műsor benne van: Oba Dombra, dervisek szertartása, anatóliai és azeri néptáncok, hastánc, kaukázusi késtánc, élő zene és szaxofonos DJ-finálé.' },
      { q: 'Az alkohol benne van az árban?', a: 'Nem — az alkohol külön kiegészítő: 2 pohár bor, sör, rakı, vodka, whisky, gin és más +€{p.alcohol2}/fő áron. Az üdítők korlátlanul és ingyenesen benne vannak. A prémium importitalokat a hajón külön számoljuk el.' },
      { q: 'Hogyan biztosíthatok színpad melletti asztalt?', a: 'Elég a foglaláskor kiválasztani a „privát asztal a színpad mellett“ kiegészítőt (+€{p.romantic}/asztal) — az asztalt az Ön nevére foglaljuk. A legjobb helyek az előfoglalásokkal telnek be, ezért érdemes a hajóút napja előtt hozzáadni.' },
      { q: 'Milyen hajó ez?', a: 'Bosphorus Night — modern személyszállító hajó, 42 méter hosszú, 3 fedélzetes, 400 fő befogadóképességgel, télen fűtött, nyáron légkondicionált. Indulás a kabataşi kikötőből: beszállás 20:00, indulás 21:00, visszaérkezés 00:00. Útvonal: Dolmabahçe, Ortaköy, Rumeli erőd, Beylerbeyi és a Boszporusz híd fényei.' }
    ],
    cta: {
      primary: 'Foglalja le asztalát · Fizetés a hajón',
      secondary: 'Volt €{p.dinnerStdOriginal}, most €{p.dinnerStd} · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Privát asztal a színpad mellett (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Privát Boszporusz Hajóút — Hajóbérlés Isztambul (25+ vendég)',
      description: 'Privát Boszporusz hajóút csoportoknak, esküvőknek, vállalati rendezvényeknek. Exkluzív hajó, testreszabott menü, rugalmas időtartam. Ingyenes lemondás.'
    },
    hero: {
      h1: 'Privát Boszporusz Hajóút',
      subtitle: 'Bérelje ki az egész hajót a csoportjának — családi ünnepségek, vállalati vacsorák, születésnapok, eljegyzések, esküvők. Exkluzív használat, testreszabott menü, rugalmas program.',
      badge: 'Privát Bérlés · 25+ Vendég · Testreszabott Menü'
    },
    intro: [
      '**A privát Boszporusz hajóút** azt jelenti, hogy az egész hajó az Öné — nincsenek más vendégek, nincsenek megosztott asztalok, nincs közös táncparkett. Tökéletes családi találkozókhoz, vállalati vacsorákhoz, születésnapi bulikhoz, lánybúcsúkhoz vagy esküvői fogadásokhoz. A hajó, a személyzet, a menü, a szórakozás és a program alkalmazkodik az Ön csoportjához.',
      '**A privát Boszporusz bérlésünk** **25-80 vendég** csoportjait támogatja. A kisebb csoportok még mindig kérhetik a privát élményt — minimális árat kínálunk, amely fedezi a hajó üzemeltetési költségeit. A nagyobb csoportok (esküvői méret) testreszabott árakat kapnak, és általában tartalmaznak különleges dekorációt, élő zenekart, tortakiszolgálást és meghosszabbított időtartamot (4-5 óra a 3 standard helyett).',
      'Akár vállalati eseményt szervez ügyfeleknek, akár 50. születésnapi bulit, akár esküvői fogadást Isztambul legikonikusabb hídjai alatt, ez **a privát hajóút, amelyben Isztambul eseményszervezői megbíznak**. 4,9★ értékelés, TÜRSAB engedéllyel, teljes mértékben angolul beszélő személyzet és teljes rugalmasság — útvonal, menü, zene, program.'
    ],
    highlights: [
      { title: 'Az egész hajó, csak Önnek', desc: 'Nincsenek más vendégek. Az Ön csoportja birtokolja az összes fedélzetet, az összes asztalt. Állítsa be saját zenét, öltözködési kódot, programot. A magánélet fontos — tiszteletben tartjuk.' },
      { title: 'Testreszabott menü és italcsomag', desc: 'Dolgozzon együtt a séfünkkel a menü testreszabásához: specifikus mezzek, főétel választások, kultúrához vagy étrendi szükségletekhez igazított elkészítések. Alkoholcsomagok, pezsgőspoharak, testreszabott koktélbárok — mind elrendezhető.' },
      { title: 'Rugalmas időtartam és indulás', desc: 'A 3 standard órát 4-5 órára lehet meghosszabbítani. Válasszon nappali indulást 12:00-kor, naplementét 17:30-kor vagy estét 21:00-kor. Hétköznapot szeretne hétvége helyett? Nem probléma — alkalmazkodunk a programjához.' },
      { title: 'Testreszabott dekoráció, zenekar, program', desc: 'Testreszabott dekorációk (lufik, transzparensek, virágkompozíciók), élő zenekar DJ helyett, esküvői tortakiszolgálás, fotós koordináció, beszédek — adjon hozzá, amire az eseményének szüksége van. Eseményszervezők vagyunk, nem csak hajóüzemeltetők.' }
    ],
    faq: [
      { q: 'Mennyibe kerül egy privát Boszporusz hajóút?', a: '25+ csoportoknak általában €{p.dinnerStd}/fő ártól + hajóbérlési díj a csoport méretétől, dátumától és időtartamától függően. Írjon nekünk WhatsAppon a csoport méretével, dátumával és követelményeivel — egy órán belül árat adunk. A legtöbb esemény az összesen €2.000-€6.000 tartományba esik.' },
      { q: 'Mi a minimális csoportméret egy privát Boszporusz hajóúthoz?', a: 'Technikailag 25 vendég teszi gazdaságilag megvalósíthatóvá a privát hajóutat. A kisebb csoportok (10-24) privát bérelhetnek, de ~25 főnek megfelelő minimális árat fizetnek. Igazán kis csoportoknak (2-10) vegye figyelembe a szokásos vacsorás hajóutat — az Ön asztala már privát, csak a hajó megosztott.' },
      { q: 'Szervezhetek esküvőt a Boszporusz hajóúton?', a: 'Igen — évente 10-15 esküvői fogadást szervezünk. Kapacitás 80-ig ülő vacsorához, 100-ig koktélstílushoz. Koordinálunk az Ön fotósával, esküvőszervezőjével, zenekarával vagy séfével. Testreszabott tortakiszolgálás, táncparkett az első tánchoz, pezsgőspohár — mind elrendezhető. Írjon WhatsAppon esküvői árért.' },
      { q: 'Mi a helyzet a vállalati rendezvényekkel és csapatvacsorákkal?', a: 'A privát vállalati hajóutak a leggyakoribb foglalásaink. Cégvacsora, ügyfélfogadás, termékbevezetés, csapatünneplés — minden működik. Tudunk áfás bontású számlát biztosítani, szállodai transzfereket szervezni a csapatának és márkás anyagokat (asztaldíszek, transzparensek) koordinálni kérésre.' },
      { q: 'Hozhatok saját élő zenekart vagy DJ-t a szórakozásuk helyett?', a: 'Igen — hozhat saját élő zenekart, DJ-t, fotóst. Vagy tartsa meg a mi standardunkat (sema, népi táncosok, keleti, DJ), és adja hozzá az Önét felül. A hajón van PA rendszer és táncparkett. Szóljon előre, hogy koordinálhassuk a hangvezérlőket.' },
      { q: 'Hogyan kérhetek árat a privát Boszporusz hajóútra?', a: 'A legegyszerűbb: írjon nekünk WhatsAppon a +90 532 244 29 22-es számon (1) csoport mérete, (2) preferált dátum, (3) ok (esküvő, vállalati, születésnap), (4) különleges követelmények. Munkaidőben egy órán belül válaszolunk, éjjel 12 órán belül. Videohívást is szervezhetünk a részletek megbeszélésére.' }
    ],
    cta: {
      primary: 'WhatsApp Testreszabott Árért',
      secondary: 'Testreszabott menü, csoport 25-80, rugalmas időtartam · Válasz 1 órán belül',
      tertiary: 'Standard Hajóút Opció (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Boszporusz Pároknak €{p.dinnerStd}-tól — Romantikus Este Isztambul',
      description: 'Boszporusz vacsorás hajóút pároknak. Privát asztal, kivilágított hidak, romantikus dekoráció opcionális. €{p.dinnerStd}/főtől.'
    },
    hero: {
      h1: 'Boszporusz Hajóút Pároknak',
      subtitle: 'Romantikus este a Boszporuszon — privát asztal, élő zene, kivilágított hidak haladnak el felette. Akár az első randevú Isztambulban, akár a tizedik évforduló, ez az este működik.',
      badge: 'Privát Asztal · Élő Zene · Fizetés a Fedélzeten'
    },
    intro: [
      '**A Boszporusz hajóút pároknak** Isztambul kedvenc estéje. Nem minden pár ünnepel évfordulót — néha csak a világ legromantikusabb városában van és egy csodálatos estét szeretne együtt. Ez a hajóút a következőket kínálja: privát asztal kettőnek, lassú török többfogásos vacsora, élő hegedű és akusztikus zene a vacsora alatt és a kivilágított Boszporusz-híd, amely lassan elhalad.',
      'A légkör **meleg, de nem túlságosan romantikus** — nincs kötelező lánykérési zene, nincs kínos koordinált taps "az újházasoknak". Egyen, igyon, beszélgessen, nézze Isztambul fényeit. Ha hozzá akarja adni a romantikus asztali elrendezést (gyertyák, rózsák, +€{p.romantic}), kiváló — különben maga a vacsora már különleges.',
      'Akár 3 napig Isztambulban van a partnerével, akár szerény eseményt ünnepel, akár felfedező utazást tervez egy jövőbeli lánykéréshez — **a Boszporusz hajóút pároknak** 3 órás estét kínál együtt a világ egyik legtöbbet fotózott városában. 4,9★, fizetés a fedélzeten, ingyenes lemondás.'
    ],
    highlights: [
      { title: 'Privát asztal kettőnek', desc: 'Privát asztal 2 főre, nem megosztva. Prioritás az ablak melletti asztaloknak pároknak. Naplemente és éjszakai Boszporusz fotók közvetlenül az ablaknál.' },
      { title: 'Lassú többfogásos vacsora', desc: '10 fajta török mezze, meleg előétel, főétel (lazac, tengeri sügér, csirke, húsgombóc vagy vegetáriánus), különleges búzadara-desszert desszertként. 3 órán keresztül lassan szolgálják fel — nincs siet.' },
      { title: 'Élő hegedű és lágy zene', desc: 'Az élő hegedű és az akusztikus török zene a vacsora alatt intim légkört teremt, alkalmas a beszélgetéshez. Aztán jön a DJ a pároknak, akik táncolni szeretnének.' },
      { title: 'Kiegészítők különleges estékhez', desc: 'Romantikus asztali elrendezés (gyertyák, rózsák): +€{p.romantic}. 2 pohár alkohol (bor, sör, rakı, vodka, whisky, gin és más): +€{p.alcohol2}/fő. Szállodai transzfer (oda-vissza): +€{p.transfer}/fő. Válassza, ami illik az estéjéhez.' }
    ],
    faq: [
      { q: 'Ez a Boszporusz hajóút alkalmas hétköznapi estére, nem különleges alkalomra?', a: 'Igen — a párjaink többsége nem ünnepel semmit különöset, csak szép estét töltenek együtt. A légkör meleg és kellemes anélkül, hogy túlzó lenne. Hozzáadhatja a romantikus asztali elrendezést (+€{p.romantic}), ha extrát szeretne, vagy egyszerűen élvezze a standard estét.' },
      { q: 'Mennyibe kerül a Boszporusz hajóút 2 főre?', a: '2 fő: 2 × €{p.dinnerStd} = €48.60. Adjon hozzá szállodai transzfert kettőnek: +€{p.transfer}×2 = €10. Adja hozzá a 2 pohár alkohol csomagot kettőnek: +€{p.alcohol2}×2 = €20. Nincs előzetes fizetés — fizetés a fedélzeten.' },
      { q: 'Hozhatnak a párok saját bort vagy pezsgőt?', a: 'Nem engedélyezünk külső alkoholt (működési engedélyezési okokból). De van 2 pohár bor, sör, rakı, vodka, whisky, gin és más csomagunk (+€{p.alcohol2}/fő) és tudunk importált prémium borokat vagy pezsgőt szervezni díjazás ellenében — kérdezzen a foglaláskor. A Prosecco, Chianti és Cabernet a népszerű prémium kérések.' },
      { q: 'Probléma, ha nem iszunk alkoholt — szokatlanok vagyunk?', a: 'Egyáltalán nem — sok pár teljesen kihagyja az alkoholt, akár halal okok miatt, akár csak preferenciából. A korlátlan üdítők (víz, gyümölcslé, kóla) benne vannak. Senki sem néz kétszer, ha az Ön asztala alkoholmentes. Sok muszlim pár Szaúd-Arábiából, Iránból és Indonéziából foglalja ezt a hajóutat.' },
      { q: 'Mikor a legjobb a Boszporusz hajóút pároknak — naplemente vagy este?', a: 'A hajó minden este 21:00-kor indul — és nyáron (május–augusztus) ez az egyetlen indulás mindkettőt lefedi: beszállás 20:00-tól az aranyóra alatt, a naplemente épp az indulás körül, majd a kivilágított hidak és a fényben úszó paloták. Télen tisztán esti fények hajóútja. Bárhogy is, a párok egyetlen foglalással a Boszporusz legikonikusabb változatát kapják.' },
      { q: 'Van táncparkett — tudunk táncolni?', a: 'Igen — a vacsora kiszolgálása után (~22:30) elindul a DJ és a nyitott fedélzet a tánczónává válik. Sok pár lassú dalokat táncol a fények alatt a Boszporusz-híddal a háttérben. Néhány a legszebb fotók közül, amiket Isztambulban készít.' }
    ],
    cta: {
      primary: 'Foglalja a Romantikus Estét · Fizetés a Fedélzeten',
      secondary: 'Adja hozzá a romantikus elrendezést (+€{p.romantic}) · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Lásd a Romantikus Boszporusz Hajóutat'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Boszporusz Naplemente és Vacsorás Hajóút €{p.dinnerStd}-tól',
      description: 'Élje át a Boszporusz naplementéjét, majd vacsorázzon a kivilágított hidak alatt. Beszállás 20:00-kor Kabataşnál, indulás 21:00. 3 óra, teljes vacsora. Fizetés a fedélzeten.'
    },
    hero: {
      h1: 'Boszporusz Naplemente és Vacsorás Hajóút',
      subtitle: 'Szálljon fel 20:00-kor, amikor az ég aranyszínbe borul a minaretek felett — majd vacsorázzon a vízen, miközben a Dolmabahçe, az Ortaköy-mecset és a Boszporusz-híd kigyúl az éjszakára.',
      badge: 'Beszállás 20:00 · Indulás 21:00 · Naplementétől a Városi Fényekig'
    },
    intro: [
      '**A Boszporusz naplemente hajóút** élménye Isztambulban egyetlen dologról szól: az átmenetről. Hajóutunkra a beszállás a Kabataş kikötőben 20:00-tól kezdődik — és a májustól augusztusig tartó hosszú estéken az aranyóra épp akkor bontakozik ki, amíg Ön elhelyezkedik a fedélzeten. A nap nagyjából a 21:00-as indulás idején nyugszik le az európai part minaretei mögött, így a vízről nézheti végig: a Dolmabahçe-palota aranyban fürdik, az Ortaköy-mecset sziluettként rajzolódik ki a ragyogó ég előtt.',
      '**A naplementétől éjszakáig tartó Boszporusz hajóutunk** teljes török vacsorát tartalmaz — 10 fajta mezze, meleg előétel, választható főétel, desszert — amelyet akkor szolgálnak fel, amikor a város felkapcsolja fényeit. Mire a desszert megérkezik, Ön már a kivilágított Boszporusz-híd alatt hajózik, 30 millió fény tükröződik a sötét vízen. Az alkonyattól a teljes éjszakáig tartó átváltozás, egyetlen 3 órás hajóútba sűrítve — pontosan ez a lényeg.',
      'Akár az utolsó fényt üldöző fotós, akár "az isztambuli emlékfotóra" vágyó pár, akár először itt járó utazó, aki a klasszikus estét szeretné a vízen — ez **az a Boszporusz naplemente vacsorás hajóút**, amelyet a helyiek ajánlanak a látogatóknak. €{p.dinnerStd}/főtől, 4,9★ értékelés, TÜRSAB engedéllyel, fizetés a fedélzeten — nincs előzetes fizetés.'
    ],
    highlights: [
      { title: 'Nyári naplementék pont az induláskor', desc: 'Májustól augusztusig a nap Isztambulban nagyjából 20:15–20:45 között nyugszik le — a 20:00-as beszállás aranyórát ad a fedélzeten, a 21:00-as indulással pedig magát a naplementét a vízről nézi végig. Kamera készenlétben — ez az a fotó.' },
      { title: 'Kék órától a teljes éjszakáig', desc: 'Nem csak naplemente — a hajóút az alkonyaton át a teljesen kivilágított Boszporuszig hajózik. Arany fény, kék óra, majd 30 millió hídfény a sötét vízen: három fényfázis egyetlen estén.' },
      { title: 'Teljes vacsora a hajóút alatt', desc: '10 fajta török mezze, meleg előétel, főétel (lazac, tengeri sügér, csirke, húsgombóc, vegetáriánus), különleges búzadara-desszert, korlátlan üdítők — akkor szolgálják fel, amikor a városi fények kigyúlnak.' },
      { title: 'Dolmabahçe, Ortaköy, Boszporusz-híd — minden ragyog', desc: 'Az útvonal elhalad a Dolmabahçe-palota, az Ortaköy-mecset, a Boszporusz-híd, a Rumeli Hisarı és a Beylerbeyi-palota mellett, épp amikor fényeik kigyúlnak. Minden nevezetesség a legjobb fényben.' }
    ],
    faq: [
      { q: 'Mikor indul a Boszporusz naplemente hajóút?', a: 'A beszállás 20:00-kor kezdődik a Kabataş kikötőben, a hajó 21:00-kor indul és körülbelül 00:00-kor tér vissza. Nyáron (május–augusztus) a nap nagyjából 20:15–20:45 között nyugszik le — az aranyóra a beszállás alatt zajlik, maga a naplemente pedig épp az indulás körül, a vízről nézve.' },
      { q: 'A Boszporusz naplemente hajóút ugyanaz, mint a vacsorás hajóút?', a: 'Igen — ez egyetlen hajóút. Naponta egyetlen indulás van 21:00-kor, teljes vacsorával és élő show-kkal a fedélzeten. A hosszú nyári estéken egyben naplemente hajóút is: az aranyóra alatt száll fel, majd a kék órán át hajózik a kivilágított éjszakába. Télen ugyanez a hajóút tiszta éjszakai fényélmény.' },
      { q: 'Mennyibe kerül a Boszporusz naplemente hajóút?', a: '€{p.dinnerStd}/főtől a hajóútnál (3 óra, teljes vacsora, élő szórakozás). Fizetés a fedélzeten — nincs előzetes fizetés. 0-3 év ingyenes, 4-9 év €5 kedvezménnyel.' },
      { q: 'Mikor a legjobb az év során a Boszporusz naplemente hajóút?', a: 'Májustól augusztusig. Isztambul kései naplementéi (20:15–20:45) egybeesnek a 21:00-as indulással, így egy estén megkapja az aranyórát, a naplementét és a kivilágított hidakat. Ősszel és télen a nap korábban nyugszik le, és ugyanez a hajóút teljes éjszakai fényélménnyé válik — ugyanolyan fotogén, más hangulattal.' },
      { q: 'Mit vigyek magammal a naplemente hajóútra?', a: 'Okostelefont vagy kamerát — az aranyóra és a kivilágított hidak szinte követelik. Egy könnyű kabátot: a szél felerősödik a fedélzeten a naplemente után. Smart-casual öltözet — vacsorázik, de nincs szigorú öltözködési kód.' },
      { q: 'Látom a kivilágított hidakat éjjel ezen a hajóúton?', a: 'Igen — ez az este második fele. A hajóút 21:00–00:00 között tart, így a naplemente és a kék óra után a teljesen kivilágított Boszporusz-híd alatt hajózik, elhalad a kivilágított paloták és a Leánytorony mellett, majd 00:00 körül visszatér Kabataşhoz.' },
      { q: 'Hány órakor nyugszik le a nap Isztambulban?', a: 'Nyáron (június–július) az isztambuli naplemente 21:00–20:45 körül van. Télen 16:30–17:00 körül. Naplemente és éjszakai élményhez a Bosphorus Night 21:00-as vacsorás hajóútja Kabataşból nyáron elkapja a kései aranyórát és a kék órát, a kivilágított nevezetességeket pedig egész évben.' },
      { q: 'Megéri a Boszporusz naplemente hajóút?', a: 'Igen — a naplemente a Boszporusz-híd felett Isztambul egyik ikonikus látványa. A Bosphorus Night 21:00-as vacsorás hajóútja (€{p.dinnerStd}/fő) elkapja a naplemente utáni kék órát és a kivilágított palotákat, teljes vacsorával és élő show-kkal 3 órán át.' }
    ],
    cta: {
      primary: 'Foglalja a Naplemente Hajóutat · Fizetés a Fedélzeten',
      secondary: 'Beszállás 20:00 · Indulás 21:00 · Vacsora beleértve · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Lásd a Teljes Vacsorás Hajóút Részleteit'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Boszporusz Éjszakai Túra €{p.dinnerStd}-tól — Vacsorás Hajóút + Élő Show',
      description: 'Éjszakai túra 3 órán át a Boszporuszon vacsorával és élő show-val. Indulás 21:00 Kabataşból, kivilágított hidak. Ingyenes lemondás, fizetés a fedélzeten.'
    },
    hero: {
      h1: 'Boszporusz Éjszakai Túra',
      subtitle: 'Isztambul kivilágított hídjai, a kivilágított paloták és a Boszporusz vize, mint egy tükör, amely 30 millió fényt tükröz — az éjszakai túra, amely meghatározza az estét Isztambulban.',
      badge: 'Kivilágított Hidak · Élő Show · Vacsora Beleértve'
    },
    intro: [
      '**A Boszporusz éjszakai túra** a legjobban ajánlott esti tevékenység Isztambulban. Itt van, miért: sötétedés után a Boszporusz átalakul. A Boszporusz-híd váltakozik a kék, lila és arany között. A Dolmabahçe-palota meleg sárgán ragyog. Az Ortaköy-mecset tökéletesen tükröződik a fekete vízben. Isztambul minden nevezetessége éjjel éri el drámai csúcsát.',
      '**A Boszporusz éjszakai túránk vacsorával** csomagolja a teljes ikonikus estét: 3 óra a vízen (21:00-00:00), török többfogásos vacsora, nyolc produkcióból álló élő folklórműsor (Oba Dombra, sema, anatóliai és azeri néptáncok, keleti tánc, kaukázusi késtánc), élő zene és szaxofonos DJ szett, amely az éjszaka végéig életben tartja a fedélzetet. Minden vendég ugyanazt a programot kapja — nincs "alap" opció, amely kihagyja a legjobb részeket.',
      'Akár az első isztambuli látogatása és "az egyetlen dolgot keresi, amit éjjel kell csinálnia", akár már járt itt és a város legfotogénebb 3 óráját szeretné, ez **a Boszporusz éjszakai túra** 4,9★ értékeléssel rendelkezik több mint 11.317 utazótól. TÜRSAB engedéllyel, fizetés a fedélzeten, nincs előzetes fizetés.'
    ],
    highlights: [
      { title: 'A kivilágított Boszporusz drámai csúcson', desc: 'A Boszporusz-híd színt változtat (kék, lila, arany), a paloták sárgán ragyognak, az Ortaköy-mecset tükröződik a sötét vízben. 21:00-00:00 maximális megvilágítás az összes isztambuli nevezetességhez.' },
      { title: 'Hagyományos török show a fedélzeten', desc: 'Nyolc produkció: Oba Dombra, sema előadás, Sarı Gelin, azeri egyveleg, keleti tánc, anatóliai egyveleg és a grúz-kaukázusi késtánc, majd élő szaxofon és DJ szett. 40 perc show, majd folytatódik a zene + vacsora.' },
      { title: 'Teljes többfogásos vacsora', desc: '10 fajta török mezze, meleg előétel (börek), főétel (lazac, tengeri sügér, csirke, húsgombóc, vegetáriánus — az Ön választása), desszert (különleges búzadara-desszert), korlátlan üdítők. Halal tanúsítvánnyal.' },
      { title: 'Teljes Boszporusz útvonal', desc: 'Kabataş → Dolmabahçe → Çırağan-palota → Ortaköy-mecset → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet-híd → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Leánytorony → Kabataş.' }
    ],
    faq: [
      { q: 'Mikor van a Boszporusz éjszakai túra?', a: 'Beszállás 20:00-tól a Kabataş kikötőben. A hajó 21:00-kor indul, körülbelül 00:00-kor tér vissza. Ajánljuk, hogy 20 perccel korábban érkezzen, hogy elhelyezkedjen és helyet válasszon.' },
      { q: 'Mennyibe kerül a Boszporusz éjszakai túra?', a: 'Éjszakai túra (3 óra, vacsora, show): €{p.dinnerStd}/fő (korábban €{p.dinnerStdOriginal}). 0-3 év ingyenes, 4-9 év €5 kedvezménnyel. Fizetés a fedélzeten.' },
      { q: 'Mi a különbség a Boszporusz éjszakai túra és a vacsorás hajóút között?', a: 'Ugyanaz, más kulcsszó. A "Boszporusz éjszakai túra" az, ahogyan sok utazó keres; a "vacsorás hajóút" az iparági kifejezés. Ugyanaz a hajó, ugyanaz a 3 órás program, ugyanaz a menü, ugyanaz a show. Válassza a preferált keresési kifejezést — az élmény ugyanaz.' },
      { q: 'Boszporusz éjszakai túra vagy naplemente hajóút — melyik ér többet?', a: 'Éjszakai túra = kivilágított Isztambul, maximális fénydráma, teljes szórakozási program, a legikonikusabb fotók a kivilágított hidakról. És ez egyetlen hajóút: nyáron (május–augusztus) a 20:00-tól kezdődő beszállás elkapja az aranyórát, a nap pedig épp a 21:00-as indulás körül nyugszik le — így ugyanaz az este lefedi a naplementét és az éjszakát is. Nem kell választania vagy kétszer foglalnia.' },
      { q: 'Megcsinálhatom a Boszporusz éjszakai túrát az első isztambuli napon?', a: 'Igen — ajánljuk. Sok utazó az első estéjére foglalja az éjszakai túrát, mert teljes tájékozódást nyújt: az összes fő nevezetesség a vízről, jó étellel és szórakozással. Könnyebb, mint a jetlag elleni harc, miközben próbál gyalogos turizmust csinálni az 1. napon. Szállodai transzfer elérhető központi negyedekből.' },
      { q: 'Nem beszélek törökül — a túra angol?', a: 'A személyzet beszél angolul. A szórakozás (sema, népi táncok, zene) nem igényel nyelvet. A vacsora menüje angol. A foglalás WhatsApp / Telegram-en több nyelven működik (angol, arab, orosz, német, francia, spanyol). Nincs szükség törökre.' }
    ],
    cta: {
      primary: 'Foglalja az Éjszakai Túrát · Fizetés a Fedélzeten',
      secondary: 'Indulás 21:00 · 3 óra · Vacsora + show beleértve · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Vacsorás Hajóút Isztambulban €{p.dinnerStd}-tól — Boszporusz Éjszakai Túra',
      description: 'Vacsorás hajóút 3 órán át Isztambulban a Boszporuszon. Török többfogásos menü, élő folklór, kivilágított hidak. Ingyenes lemondás, fizetés a fedélzeten. 11.317+ vendég.'
    },
    hero: {
      h1: 'Vacsorás Hajóút Isztambulban',
      subtitle: 'A legjobb vacsorás hajóút Isztambulban — 3 óra a Boszporuszon, török többfogásos vacsora, élő szórakozás és a város legikonikusabb nevezetességeinek éjszakai kilátásai.',
      badge: '4,9★ · 11.317+ vendég · TÜRSAB A-17672'
    },
    intro: [
      'Keres egy **vacsorás hajóutat Isztambulban**? Megtalálta, amit a legtöbb utazó ajánl. A 3 órás esténk a Boszporuszon teljes török többfogásos vacsorát, élő népi táncokat és a város legfotogénebb kilátásait egyesíti — mindezt egy kényelmes hajóról, amely 21:00-kor indul a Kabataş kikötőből.',
      'A **vacsorás hajóút Isztambulban** élménye: szálljon fel 20:00-kor, üljön le, nézze a Dolmabahçe-palotát, miközben indulunk, a vacsora elkezdődik, amikor megközelítjük az Ortaköy-mecsetet, a show elkezdődik (sema, népi táncok, keleti), és a desszertre a kivilágított Boszporusz-híd alatt van. Éjfélkor visszatér Kabataşba egy ikonikus fotókollázzsal és tele hassal.',
      '€{p.dinnerStd}/fő (korábban €{p.dinnerStdOriginal}). Fizetés a fedélzeten — nincs előzetes fizetés, nincs kockázat. TÜRSAB A-17672 engedéllyel, 4,9★ értékeléssel több mint 11.317 utazótól.'
    ],
    highlights: [
      { title: 'Teljes török többfogásos vacsora', desc: '10 fajta mezze, meleg előétel, főétel (lazac/tengeri sügér/csirke/húsgombóc/vegetáriánus), különleges búzadara-desszert. Halal tanúsítvánnyal. Korlátlan üdítők beleértve.' },
      { title: 'Élő török népi tánc show', desc: 'Nyolc produkció: Oba Dombra, sema előadás, Sarı Gelin, azeri egyveleg, keleti tánc, anatóliai egyveleg, grúz-kaukázusi késtánc, majd élő szaxofon és DJ. 40 perc show, folyamatos háttérzene.' },
      { title: 'Teljes éjszakai útvonal a Boszporuszon', desc: '3 órás túra: Dolmabahçe, Çırağan, Ortaköy-mecset, Boszporusz-híd, Bebek, Rumeli Hisarı, FSM-híd, Beylerbeyi, Üsküdar, Leánytorony. Mindkét part, európai és ázsiai.' },
      { title: '€{p.dinnerStd}-tól — fizetés a fedélzeten', desc: 'Vacsorás hajóút: €{p.dinnerStd} (korábban €{p.dinnerStdOriginal}). Nincs előzetes fizetés. Ingyenes lemondás indulás előtt 2 óráig.' }
    ],
    faq: [
    {
      q: "Milyen műsorszámok vannak a vacsorás hajóút programjában?",
      a: "Nyolc produkció: Oba Dombra (közép-ázsiai sámánritmus), a kerengő dervisek Mevlana-szertartása, Sarı Gelin, azeri egyveleg, orientális show (hastánc), török-anatóliai egyveleg, a grúz Gandagan és egy kaukázusi egyveleg a hagyományos késtánccal, végül élő szaxofon és DJ. A program az egész hajóút alatt zajlik, a sorrend változhat."
    },
      { q: 'Mennyibe kerül a vacsorás hajóút Isztambulban?', a: 'Vacsorás hajóútunk €{p.dinnerStd}/fő (normál ár €{p.dinnerStdOriginal}). 0-3 év ingyenes, 4-9 év €5 kedvezmény. Fizetés a fedélzeten — nincs előzetes fizetés.' },
      { q: 'Mi tartozik bele az isztambuli vacsorás hajóút árába?', a: '3 órás túra a Boszporuszon, török többfogásos vacsora (mezze, meleg előétel, főétel, desszert), korlátlan üdítők, élő népi tánc show (sema, népi táncok, keleti), élő zene + DJ, hozzáférés a nyitott fedélzethez, adók beleértve. A szállodai transzfer és az alkohol opcionális kiegészítők.' },
      { q: 'Honnan indul az isztambuli vacsorás hajóút?', a: 'Kabataş kikötő, Isztambul — az európai parton, a Dolmabahçe-palota közelében. A pontos találkozási helyet foglalás után WhatsApp / Telegram-en közöljük. A Dolmabahçe villamosmegállóból és a Kabataş villamosmegállóból induló gyalogos videók a fenti találkozási hely szakaszban találhatók.' },
      { q: 'Meddig tart a vacsorás hajóút — és mikor kezdődik?', a: 'Összesen 3 óra. Beszállás 20:00-tól, a hajó pontosan 21:00-kor indul, körülbelül 00:00-kor tér vissza. Ajánljuk, hogy 15-20 perccel korábban érkezzen, hogy elhelyezkedjen és helyet válasszon.' },
      { q: 'Előre kell foglalnom, vagy közvetlenül jöhetek?', a: 'Foglaljon előre — a helyek megtelnek, különösen hétvégén és ünnepnapokon. Az aznapi foglalások gyakran lehetségesek, de nem garantáltak. Az ezen az oldalon található űrlap kevesebb mint 1 perc alatt biztosítja az Ön helyét. Fizetés a fedélzeten, tehát nincs anyagi kockázat a korai foglalásban.' },
      { q: 'Az isztambuli vacsorás hajóút alkalmas vegetáriánusoknak / halalnak / étrendi korlátozásoknak?', a: 'Igen — minden hús halal tanúsítvánnyal rendelkezik. Vegetáriánus főétel (falafel, sült krumpli, bulgur pilaf, zöldségpörkölt, hagymakarikák) felárfizetés nélkül elérhető. Az allergiák kezelhetők, ha a foglaláskor bejelentik. Az alkohol opcionális kiegészítő, soha nem kényszerítjük.' }
    ],
    cta: {
      primary: 'Foglalja a Vacsorás Hajóutat · Fizetés a Fedélzeten',
      secondary: '4,9★ · TÜRSAB engedéllyel · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Isztambul Éjszakai Túra €{p.dinnerStd}-tól — Boszporusz Vacsorás Hajóút + Show',
      description: 'Hajóút 3 órán át a Boszporuszon vacsorával és élő show-val. Indulás 21:00 Kabataşból. Ingyenes lemondás, fizetés a fedélzeten. 11.317+ vendég. Szállodai transzfer opcionális.'
    },
    hero: {
      h1: 'Túra Isztambulban Éjjel',
      subtitle: 'Az éjszakai túra, amelyet Isztambul lakói elsősorban ajánlanak — 3 órás Boszporusz hajóút vacsorával, élő szórakozással és a város legikonikusabb kivilágított kilátásaival.',
      badge: 'Isztambul Ikonikus Estéje · 3 Óra · Vacsora Beleértve'
    },
    intro: [
      'Egy **isztambuli éjszakai túrának** három dolgot kell tennie: meg kell mutatnia a város ikonikus nevezetességeit, jól meg kell etetnie és szórakoztatnia. A mi Boszporusz vacsorás hajóutunk mindhármat egyetlen 3 órás estén belül elvégzi — és ezért az isztambuli útikönyvek többsége az #1 éjszakai túra élménynek ajánlja.',
      'Az **isztambuli éjszakai túra** útvonala lefedi a legjobb kivilágított nevezetességeket: Dolmabahçe-palota, Ortaköy-mecset, Boszporusz-híd (színt változtat), Bebek negyed, Rumeli Hisarı, FSM-híd, Beylerbeyi-palota, ázsiai part Üsküdar és a Leánytorony a távolban. A városi túrák többsége a buszról mutatja meg őket — mi a vízről mutatjuk meg, ahol a legdrámaibbak.',
      'A vacsora benne van (török többfogásos menü), élő török népi tánc show, sema, keleti tánc és DJ szett. Ha 2-3 napig Isztambulban van, ez az egyetlen este, amely a legerősebb ütést adja. 4,9★ több mint 11.317 utazótól, fizetés a fedélzeten, nincs előzetes fizetés.'
    ],
    highlights: [
      { title: 'Isztambul összes ikonikus éjszakai kilátása', desc: 'Dolmabahçe-palota, Ortaköy-mecset, kivilágított Boszporusz-híd, Rumeli Hisarı, FSM-híd, Beylerbeyi-palota, Leánytorony. Minden fő nevezetesség a csúcs éjszakai megvilágításnál.' },
      { title: 'Teljes török vacsora beleértve', desc: '10 mezze, meleg előétel, főétel (lazac/tengeri sügér/csirke/húsgombóc/vegetáriánus), desszert, korlátlan üdítők. Halal tanúsítvánnyal. €{p.dinnerStd}/fő áron — minden benne.' },
      { title: 'Élő népi táncok + sema + keleti', desc: 'Nyolc produkcióból álló élő műsor: Oba Dombra, Mevlana sema előadás, Sarı Gelin, azeri egyveleg, keleti tánc, anatóliai egyveleg, grúz-kaukázusi késtánc, majd élő szaxofon és DJ. 40 perc show, háttérzene egész este.' },
      { title: 'Könnyű az első isztambuli alkalomra', desc: 'Központi találkozási hely (Kabataş kikötő), szállodai transzfer (+€{p.transfer}/fő), angolul beszélő személyzet, fizetés a fedélzeten. Nulla logisztikai stressz. Jöjjön, élvezze, menjen.' }
    ],
    faq: [
      { q: 'Mi a legjobb éjszakai túra Isztambulban?', a: 'A Boszporusz vacsorás hajóút következetesen #1 helyen áll. Az okok: (1) megadja az összes ikonikus éjszakai kilátást a vízről, (2) tartalmazza a vacsorát és a show-t egy csomagban, (3) 3 óra elég ahhoz, hogy sokat lássunk fáradtság nélkül, (4) központi találkozási hely, (5) a fedélzeten való fizetés csökkenti a foglalási súrlódást. Az isztambuli útikönyvek többsége "az egyetlen kötelező éjszakai dolognak" ajánlja.' },
      { q: 'Mennyibe kerül a túra Isztambulban éjjel?', a: 'Éjszakai túránk vacsorával a Boszporuszon: €{p.dinnerStd}/fő. Beleértve a túrát, a vacsorát, a szórakozást, az üdítőket. Opcionális: alkohol (2 pohár) +€{p.alcohol2}/fő, szállodai transzfer +€{p.transfer}/fő. Fizetés a fedélzeten — nincs előzetes fizetés.' },
      { q: 'Biztonságos az isztambuli túra éjjel az egyedülálló utazóknak?', a: 'Igen — nagyon biztonságos. TÜRSAB engedéllyel rendelkező hajó, professzionális angolul beszélő személyzet, CCTV a fedélzeten, mentőmellények elérhetők. Sok egyedülálló utazó foglalja ezt a túrát. Megosztott vagy privát asztalnál vacsorázik (saját választás) és az este befogadó — találkozzon más utazókkal, ha szeretné, vagy tartsa meg magának.' },
      { q: 'Mi a legjobb idő egy éjszakai túrához Isztambulban?', a: 'A Boszporuszi vacsorás túránk 21:00-00:00 (3 óra). Ez a csúcs megvilágítási idő Isztambul összes nevezetességéhez — hidak teljesen kivilágítva, paloták ragyognak, hold a víz felett. Ha az aranyórát is szeretné, jöjjön nyáron: a beszállás 20:00-kor kezdődik, és május–augusztus között a nap épp a 21:00-as indulás körül nyugszik le — ugyanaz a hajóút mindkettőt lefedi.' },
      { q: 'Hogyan jutok el a találkozási helyre az isztambuli éjszakai túrához?', a: 'A találkozási hely a Kabataş kikötő (központi európai part, a Dolmabahçe-palota közelében). Villamossal: T1 a Kabataş állomásig (a vonal vége). Taxival: ~15 perc Taksimból. Gyalog: 20 perc Taksimból az İnönü körúton. Ezen az oldalon vannak videók a gyalogos útvonalakkal. Szállodai transzfer elérhető +€{p.transfer}/fő-ért, ha szeretné.' },
      { q: 'Foglalhatom az isztambuli túrát éjjel aznapra?', a: 'Gyakran igen, különösen hétköznapokon. A hétvégék gyorsabban megtelnek. Az ezen az oldalon található foglalási űrlap lehetővé teszi, hogy ellenőrizze a ma esti elérhetőséget és kevesebb mint 1 perc alatt foglaljon. Sürgős aznapi kérésekért írjon WhatsAppon a +90 532 244 29 22-es számon.' }
    ],
    cta: {
      primary: 'Foglalja az Éjszakai Túrát · Fizetés a Fedélzeten',
      secondary: '€{p.dinnerStd}/főtől · Vacsora + show beleértve · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Hajós Túra Isztambul €{p.dinnerStd}-tól — Boszporusz + Vacsora + Show',
      description: 'Hajós túra 3 órán át: Boszporusz hajóút, teljes török vacsora, élő folklór, kivilágított éjszakai tájak. Ingyenes lemondás, fizetés a fedélzeten. 11.317+ vendég.'
    },
    hero: {
      h1: 'Hajós Túra Isztambulban',
      subtitle: 'A legtöbbet foglalt hajós túra Isztambulban az utazók által — Boszporusz hajóút török étellel, élő szórakozással és a város ikonikus kilátásaival a vízről.',
      badge: '4,9★ · TÜRSAB A-17672 · Fizetés a Fedélzeten'
    },
    intro: [
      'Amikor a "hajós túra Isztambulban" kifejezést keresi, azt az egy dolgot keresi, amely a vízről meghatározza a várost: a Boszporuszt. A 3 órás Boszporusz hajós túránk elviszi Önt Isztambul minden fő nevezetessége mellett — Dolmabahçe-palota, Ortaköy-mecset, Boszporusz-híd, Rumeli Hisarı, Beylerbeyi-palota és Leánytorony — teljes török vacsorával és élő szórakozással.',
      'A sok 1 órás turisztikai komppal ellentétben, amelyek kevesebb Boszporuszt fednek le és kihagyják a vacsorát és a szórakozást, **a hajós túránk Isztambulban** teljes esti élmény: beszállás 20:00-kor a Kabataş kikötőnél, túra éjfélig, 10 mezze, főétel, desszert, sema, népi táncok, keleti tánc és DJ. Az esti kimenőt is megkapja a túra részeként.',
      'Akár egy estéje van Isztambulban, akár egy egész hete, ez a **hajós túra Isztambulban** elvégzi a munkát. 4,9★ több mint 11.317 utazótól, TÜRSAB engedéllyel (A-17672), halal tanúsítvánnyal rendelkező menü és fizetés a fedélzeten — nincs anyagi kötelezettség, amíg elégedett az élménnyel.'
    ],
    highlights: [
      { title: 'Az összes fő Boszporusz nevezetesség', desc: 'Dolmabahçe, Çırağan, Ortaköy-mecset, Boszporusz-híd, Bebek, Rumeli Hisarı, FSM-híd, Beylerbeyi-palota, Üsküdar, Leánytorony. Mindkét part, európai és ázsiai, egy túrában.' },
      { title: 'Vacsora + show beleértve', desc: 'Nem csak egy hajós túra — teljes török többfogásos vacsora, élő népi tánc show-k, sema, keleti tánc, DJ. Ami szórakoztatóvá teszi a 3 órát, nem csak turizmus.' },
      { title: 'Esti indulás (legjobb megvilágítás)', desc: 'A 21:00-as indulás teljes ragyogásban fogja meg a kivilágított Boszporuszt — hidak, paloták, mecsetek mind kivilágítva. Drámaibb, mint a nappali túrák, amelyek ugyanazokat a nevezetességeket sík fényben mutatják.' },
      { title: 'Könnyű foglalás, könnyű fizetés', desc: 'Foglaljon az ezen az oldalon található űrlappal kevesebb mint 1 perc alatt. Fizetés a fedélzeten — nincs előzetes fizetés. Szállodai transzfer elérhető +€{p.transfer}/főtől. Ingyenes lemondás 2 órával az indulás előtt.' }
    ],
    faq: [
      { q: 'Mi a legjobb hajós túra Isztambulban?', a: 'A Boszporusz vacsorás hajóút következetesen #1 helyen áll. Lefedi az összes fő nevezetességet, tartalmazza a vacsorát és a szórakozást és este fut, amikor a nevezetességek kivilágítva vannak. Más opciók (hop-on kompok, reggeli turisztikai hajók) rövidebb útvonalakat fednek le, kihagyják a vacsorát és nem tartalmaznak szórakozást. Egy isztambuli estére ez a legteljesebb hajós túra.' },
      { q: 'Meddig tart a hajós túra Isztambulban?', a: '3 óra. Beszállás 20:00-tól a Kabataş kikötőnél, indulás 21:00, visszatérés ~00:00. Lefedi a teljes Boszporuszt Dolmabahçe-tól Rumeli Hisarı-ig és vissza. Elég idő a teljes vacsorához + show-hoz fáradtság nélkül.' },
      { q: 'Mennyibe kerül a hajós túra Isztambulban?', a: 'Hajós túránk vacsorával: €{p.dinnerStd}/fő (korábban €{p.dinnerStdOriginal}). 0-3 év ingyenes, 4-9 év €5 kedvezménnyel. Fizetés a fedélzeten. Az alkohol és a szállodai transzfer opcionális kiegészítők.' },
      { q: 'Honnan indulnak a hajós túrák Isztambulban?', a: 'A hajónk a Kabataş kikötőből indul, Isztambul központi európai partjáról, a Dolmabahçe-palota közelében. Elérhető T1 villamossal (Kabataş állomás), taxival 15 perc Taksimból vagy gyalog 20 perc Taksimból. Szállodai transzfer elérhető központi negyedekből +€{p.transfer}/fővel.' },
      { q: 'Ez a hajós túra alkalmas családoknak gyerekekkel?', a: 'Igen — nagyon családbarát. Gyerekek 0-3 év ingyenes, 4-9 év €5 kedvezmény. Fedett belső tér, gyerekmenü kérésre és szórakozás (sema, népi táncok), amely lebilincselő a gyerekeknek. Sok család a világ minden tájáról foglalja ezt a túrát.' },
      { q: 'Vinnem kell valamit a hajós túrára?', a: 'Útlevél vagy személyi igazolvány (a fedélzeten való regisztrációhoz), könnyű kabát (a fedélzet hűvös lehet), kényelmes cipő, ha táncolni szeretne. Okostelefon a fotókhoz. Készpénz vagy kártya a fedélzeti fizetéshez (mindkettő elfogadott). Minden más — étel, ital, szórakozás — a fedélzeten van.' }
    ],
    cta: {
      primary: 'Foglalja a Hajós Túrát · Fizetés a Fedélzeten',
      secondary: '3 óra · Vacsora + show · €{p.dinnerStd}/főtől · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Boszporusz Kirándulás €{p.dinnerStd}-tól — Isztambul Vacsorás Hajóút + Show',
      description: 'Kirándulás 3 órán át a Boszporuszon: török vacsora, élő folklór, kivilágított éjszakai tájak. Indulás 21:00 Kabataşból. Ingyenes lemondás, fizetés a fedélzeten.'
    },
    hero: {
      h1: 'Kirándulás a Boszporuszon',
      subtitle: 'A Boszporusz kirándulás, amelyet az utazók a leginkább ajánlanak — 3 órás vacsorás hajóút, amely lefedi Isztambul minden fő nevezetességét, étellel, szórakozással és éjszakai kilátásokkal.',
      badge: 'Teljes Boszporusz Élmény · Esti Indulás'
    },
    intro: [
      'Egy **Boszporusz kirándulás** jelenthet 1 órás turisztikai kompot vagy teljes esti túrát vacsorával — mi a másodikat csináljuk és az utazók többsége jobb értékű élménynek tartja. 3 óra, €{p.dinnerStd}/fő, vacsora és szórakozás beleértve. Nem csak elhalad a nevezetességek mellett — eszik, nézi a show-t és élvezi az estét.',
      'A **Boszporusz kirándulásunk** útvonala lefed mindent, amit érdemes látni: Dolmabahçe-palota (19. századi oszmán szultáni rezidencia), Ortaköy-mecset (Isztambul egyik legfotózottabb mecsete), Boszporusz-híd (éjjel színt változtat), Rumeli Hisarı (Fatih Sultan Mehmet építette 1452-ben), Beylerbeyi-palota (ázsiai part) és Leánytorony egy kis szigeten. Minden megmagyarázva angolul beszélő személyzet által.',
      'Akár 24 órája van Isztambulban, akár egy hete, ez **a Boszporusz kirándulás**, amely a legtöbbet adja egy estén. 4,9★ értékelés több mint 11.317 utazótól, TÜRSAB A-17672 engedéllyel, halal-barát menü, fizetés a fedélzeten — nincs előzetes fizetési kockázat.'
    ],
    highlights: [
      { title: 'A teljes Boszporusz egyetlen csapásra', desc: 'Európai part (Dolmabahçe, Ortaköy, Rumeli Hisarı), ázsiai part (Beylerbeyi, Üsküdar), mindkét Boszporusz-híd, Leánytorony. Minden fő nevezetesség látható 3 órán belül.' },
      { title: 'Vacsora + szórakozás beleértve', desc: 'Nem csak turisztikai komp — teljes török vacsora mezzével, főétellel, desszerttel. Élő népi tánc show, sema, keleti, DJ. Szórakoztatási érték a táj mellett.' },
      { title: 'Este = legjobb megvilágítás', desc: 'A nappali Boszporusz kirándulások sík fényben mutatják a nevezetességeket. Az esti kirándulások mindent kivilágítva fognak meg: ragyogó paloták, színes hidak, sötét vízben tükröződő mecsetek. Jobb fotók, drámaibbak.' },
      { title: '€{p.dinnerStd}-tól — fizetés a fedélzeten', desc: 'Nincs szükség előzetes fizetésre. Fizetés a fedélzeten (készpénz vagy kártya). Ingyenes lemondás indulás előtt 2 óráig. 0-3 év ingyenes, 4-9 év €5 kedvezménnyel. Átlátható árak.' }
    ],
    faq: [
      { q: 'Mik a legjobb Boszporusz kirándulások Isztambulban?', a: 'Az esti vacsorás túra következetesen az első helyeken áll. A nappali opciók (1 órás hurok kompok, 2 órás turisztikai hajók) kevesebbet mutatnak és nem tartalmaznak vacsorát. Az érték szempontjából nehéz felülmúlni egy 3 órás túrát vacsorával, show-val és központi találkozási hellyel. A túránk €{p.dinnerStd} ára kiküszöböli egy külön vacsorás + szórakozós este szükségességét.' },
      { q: 'Meddig tart egy Boszporusz kirándulás?', a: 'A Boszporusz kirándulásunk összesen 3 órás (indulás 21:00, visszatérés 00:00). Vannak rövidebb opciók (1 órás turisztikai kompok, 90 perces túrák), de kihagyják a vacsorát és a szórakozást. A teljes esti élményhez 3 óra ideális — elég ahhoz, hogy mindent lássunk anélkül, hogy elfáradnánk.' },
      { q: 'Megéri a Boszporusz kirándulás?', a: 'Igen — szinte minden isztambuli útikönyv a top 5 kötelező dolog között sorolja fel a "Boszporusz hajóutat". A város e szoros köré épült; ha nem látta a Boszporuszt a vízről, nem igazán látta Isztambult. A specifikus esti túránk vacsorát és szórakozást ad hozzá, így teljes esti kirándulás lesz belőle, nem csak turizmus.' },
      { q: 'Mit vigyek a Boszporusz kirándulásra?', a: 'Útlevél vagy személyi igazolvány (a fedélzeten való regisztrációhoz), könnyű kabát (este a fedélzet hűvös), okostelefon/kamera, kényelmes cipő a táncparkettre. Készpénz vagy kártya a fizetéshez. Minden más a fedélzeten van. Szállodai transzfer elérhető +€{p.transfer}/fővel, ha nem szeretne tömegközlekedést használni.' },
      { q: 'A Boszporusz kirándulás alkalmas gyerekeknek?', a: 'Igen — nagyon gyerekbarát. Gyerekek 0-3 év ingyenes (transzfer beleértve), 4-9 év €5 kedvezmény. Fedett belső tér, gyerekmenü kérésre és finom és lebilincselő szórakozás. Sok család foglalja ezt a kirándulást az isztambuli utazásuk csúcspontjaként.' },
      { q: 'Mik a Boszporusz kirándulás megállói?', a: 'Folyamatos túra — nincsenek megállók (nincs leszállás). A hajó elhalad minden nevezetesség mellett, a személyzet elmagyarázza, mit lát, kikapcsolódik az asztalnál vagy kimegy a nyitott fedélzetre fotózni. Nincsenek sorok, nincs séta — csak 3 zökkenőmentes óra a vízen.' }
    ],
    cta: {
      primary: 'Foglalja a Boszporusz Kirándulást · Fizetés a Fedélzeten',
      secondary: '3 óra · Vacsora + show · Ingyenes lemondás 2 órával előtte · TÜRSAB engedéllyel',
      tertiary: 'Ellenőrizze az Elérhetőséget'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Boszporusz Hajóút Jegyek €{p.dinnerStd}-tól — Fizetés a Fedélzeten',
      description: 'Közvetlen Boszporusz hajóút jegyek €{p.dinnerStd}/fő ártól. Nincs előzetes fizetés, fizetés a fedélzeten. Ingyenes lemondás 2 óráig előtte.'
    },
    hero: {
      h1: 'Boszporusz Hajóút Jegyek',
      subtitle: 'Hagyja ki a közvetítői díjakat — vásárolja meg a Boszporusz hajóút jegyeket közvetlenül tőlünk. Nincs előzetes fizetés, fizetés a fedélzeten, ingyenes lemondás indulás előtt 2 óráig.',
      badge: 'Közvetlen Foglalás · Nincs Előzetes Fizetés · 40% KEDVEZMÉNY'
    },
    intro: [
      'Keres **Boszporusz hajóút jegyeket**? Vásároljon közvetlenül. A jegyünk €{p.dinnerStd}/fő — 40% kedvezmény a normál árhoz képest (€{p.dinnerStdOriginal}). A harmadik fél foglalási oldalak általában 20-40% jutalékot adnak hozzá. Közvetlen foglalással spórol — és még mindig a fedélzeten fizet.',
      'A **Boszporusz hajóút jegyek** folyamatunk: töltse ki az űrlapot ezen az oldalon kevesebb mint 1 perc alatt (dátum, vendégek száma, kapcsolat), azonnal megerősítjük WhatsApp / Telegram-en, megjelenik a Kabataş kikötőnél 20:00-kor, fizet a fedélzeten, élvezi a 3 órás vacsorás hajóutat. Nincs nyomtatandó fizikai jegy, nincs e-mailben kapott kupon — a megerősítés az Ön jegye.',
      'Akár ma estére foglalja a vacsorás hajóutat, akár egy specifikus jövő heti dátumra, **a közvetlen Boszporusz hajóút jegyek** a leggyorsabb módja. 4,9★ értékelés, TÜRSAB engedéllyel (A-17672), halal tanúsítvánnyal rendelkező menü és támogatja a szállodai transzfer és alkohol kiegészítőket.'
    ],
    highlights: [
      { title: 'Közvetlen foglalás — nincs közvetítői díj', desc: '€{p.dinnerStd}/fő — egyetlen átlátható ár. A harmadik fél oldalak €30-80+-t kérnek ugyanazért a túráért. Spóroljon közvetlen foglalással. Nincsenek rejtett díjak, nincs jutalékfelár.' },
      { title: 'Fizetés a fedélzeten — nincs előzetes fizetés', desc: 'Foglalja le most a helyet, fizessen, amikor felszáll a hajóra. Készpénz vagy kártya elfogadott. Ingyenes, ha 2+ órával az indulás előtt lemondja. Nulla anyagi kockázat a korai foglalásban.' },
      { title: 'Megerősítés kevesebb mint 1 perc alatt', desc: 'Töltse ki az űrlapot → megerősítjük WhatsApp / Telegram-en. Nincs PDF kuponmail nyomtatáshoz. Az üzenetünk az Ön jegye. Jöjjön a kikötőhöz 20:00-ra.' },
      { title: 'Jelenlegi bevezető ár 40% KEDVEZMÉNY', desc: 'Korábban €{p.dinnerStdOriginal}, most €{p.dinnerStd}. 40% kedvezmény, mert közvetlenül foglal. Nem időkorlátos trükk — ez a standard közvetlen foglalási árunk.' }
    ],
    faq: [
      { q: 'Mennyibe kerülnek a Boszporusz hajóút jegyek?', a: '€{p.dinnerStd}/fő (normál €{p.dinnerStdOriginal}). Tartalmazza a 3 órás túrát, török többfogásos vacsorát, élő népi tánc show-t, korlátlan üdítőket. 0-3 év ingyenes, 4-9 év €5 kedvezmény. Fizetés a fedélzeten — nincs előzetes fizetés.' },
      { q: 'Hol vásárolhatok Boszporusz hajóút jegyeket?', a: 'Közvetlenül ezen az oldalon — töltse ki a foglalási űrlapot, azonnal megerősítjük WhatsApp / Telegram-en. Fizetés a fedélzeten. A harmadik fél platformok (Viator, GetYourGuide, Klook) is árulnak jegyeket, de általában €30-80+-t kérnek — ez a közvetítői felár. A közvetlen a legolcsóbb és a leggyorsabb.' },
      { q: 'Nyomtatnom kell a Boszporusz hajóút jegyet?', a: 'Nem — nincs szükség fizikai jegyre vagy kuponra. Foglalás után megerősítést küldünk WhatsApp-on (vagy Telegram-en) a találkozási hellyel, idővel és a foglalás nevével. Csak mutassa a telefonját a kikötőnél. Kész.' },
      { q: 'Le tudom mondani vagy visszaadni a Boszporusz hajóút jegyet?', a: 'Igen — ingyenes lemondás indulás előtt 2 óráig. Csak írjon WhatsApp-on. Mivel még nem fizetett (fizetés a fedélzeten), nincs szükség visszatérítésre — egyszerűen ne jöjjön, költségek nélkül. Sokkal rugalmasabb, mint a harmadik felek előre fizetett jegyei.' },
      { q: 'Elérhetők a Boszporusz hajóút jegyek aznapra?', a: 'Gyakran igen, különösen hétköznapokon. A hétvégék és ünnepek gyorsabban megtelnek. Ellenőrizze az elérhetőséget a foglalási űrlapon — valós időben frissül. Az aznapi foglalás általában néhány órával a 21:00-as indulás előtt lehetséges. Sürgős kérésekért WhatsApp.' },
      { q: 'A Boszporusz hajóút jegyek gyerekeknek ingyenesek?', a: 'Gyerekek **0-3 év teljesen ingyenes** (nincs díj, nincs rejtett költség, transzfer beleértve). **4-9 év €5 kedvezmény** (€{p.dinnerStd} − €5 = €19.30). **10+ év teljes felnőtt ár.** Fix és átlátható árak — nincsenek "baba felár" trükkök.' }
    ],
    cta: {
      primary: 'Jegyek Vásárlása · Fizetés a Fedélzeten',
      secondary: 'Közvetlen foglalás · Nincs előzetes fizetés · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Ellenőrizze az Elérhetőséget'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Boszporusz Last Minute €{p.dinnerStd}-tól — Foglaljon Ma, Fizessen a Fedélzeten',
      description: 'Boszporusz hajóút foglalás aznap. WhatsApp megerősítés percek alatt. Indulás 21:00 Kabataşból. Ingyenes lemondás, fizetés a fedélzeten. 11.317+ vendég.'
    },
    hero: {
      h1: 'Boszporusz Hajóút Last Minute',
      subtitle: 'Elérhetőség ma estére, percek alatt megerősítve. Nincs előzetes fizetés, nincs előre nyomtatott kupon — csak jöjjön a kikötőhöz és élvezze az estét.',
      badge: 'Aznapi Foglalás · Percek Alatt Megerősítve · Fizetés a Fedélzeten'
    },
    intro: [
      'Ma délután szállt le Isztambulban és szép estét szeretne ma este? **A Boszporusz hajóút last minute** működik. Külön helyeket tartunk fenn aznapi foglalásokhoz, mert tudjuk, hogy sok utazó reggel dönt. Töltse ki az űrlapot itt, percek alatt megerősítjük WhatsApp-on, megjelenik a Kabataş kikötőnél 20:00-kor, fizet a fedélzeten, élvez.',
      '**A Boszporusz hajóútunk last minute** ugyanazt az esti programot kínálja, mint az előzetes foglalások: 3 óra a vízen (21:00-00:00), török többfogásos vacsora, élő népi tánc show, sema, keleti tánc, DJ. Kivilágított Dolmabahçe-palota, Ortaköy-mecset, Boszporusz-híd — ugyanazok az ikonikus kilátások. Ugyanaz az ár: €{p.dinnerStd}/fő.',
      'Az aznapi lemondás ingyenes indulás előtt 2 óráig, mert **a fedélzeten való fizetés** azt jelenti, hogy még semmit nem ígért. 14:00-kor foglalt és 19:00-ra megváltoztatta a terveit? Csak írjon WhatsApp-on — nincs visszatérítés, nincs probléma. Ez **az isztambuli túra last minute** rugalmassága, amit az utazók értékelnek.'
    ],
    highlights: [
      { title: 'Helyek még elérhetők ma estére', desc: 'Naponta 5-10 helyet tartunk fenn aznapi foglalásokhoz. Ellenőrizze a fenti űrlapot — valós idejű elérhetőség. Ha a mai túra megtelt, a holnapi általában nyitott.' },
      { title: 'Megerősítés kevesebb mint 5 perc alatt', desc: 'Töltse ki az űrlapot → megerősítő üzenet WhatsApp/Telegram → kész. Nincs várnivaló e-mail kupon, nincs nyomtatandó QR kód. Az üzenetünk az Ön jegye.' },
      { title: 'Nulla fizetés, amíg fel nem száll a hajóra', desc: 'Fizetés a fedélzeten, készpénz vagy kártya. Ha nem jön (tervváltoztatás, betegség, időjárás), nincs költség. Ingyenes lemondás indulás előtt 2 óráig. Valóban barátságos a last minute-ben.' },
      { title: 'Szállodai transzfer aznap gyakran elérhető', desc: 'A szállodai transzfer normál esetben 24 órás értesítést igényel, de aznapi foglalásokhoz 14:00-18:30 között gyakran tudunk felvételt szervezni +€{p.transfer}/fővel. Sürgős transzfer kérésekért WhatsApp.' }
    ],
    faq: [
      { q: 'Valóban lefoglalhatom a Boszporusz hajóutat ma estére?', a: 'Igen — gyakran. Aznapi foglalásokhoz helyeket tartunk fenn. Ellenőrizze a fenti űrlapot a ma esti elérhetőségért. Ha vannak elérhető helyek, 21:00-ig foglalhat. A hétvégék mozgalmasabbak — foglaljon korábban a nap folyamán, ha lehet.' },
      { q: 'Mennyire last minute foglalhatok?', a: 'A foglalás 21:00-ig, egészen az indulásig nyitva marad. Ha már nagyon közel az indulás, írjon nekünk közvetlenül WhatsAppon a +90 532 244 29 22 számon — ha van szabad hely, kézzel visszaigazoljuk.' },
      { q: 'Drágább a Boszporusz hajóút last minute?', a: 'Nem — ugyanaz az ár, mint az előzetes foglalás. €{p.dinnerStd}/fő. Nem alkalmazunk "dinamikus árakat" vagy last minute felárakat. Ugyanaz a hajó, ugyanaz a vacsora, ugyanaz a show, ugyanaz az ár.' },
      { q: 'Mi történik, ha a ma esti túra megtelt?', a: 'A holnapi túra általában nyitott — 365 napon át üzemelünk, minden nap. Foglalhat holnapra és még mindig "last minute" lehet, vagyis most döntött. A hétköznapi túrákon több hely van, mint hétvégén.' },
      { q: 'Tudnak last minute szállodai transzfert szervezni?', a: 'Aznapi transzfer ~18:30-ig lehetséges a 21:00-as túrához. 18:30 után lehet, hogy nincs elérhető sofőrünk — ebben az esetben taxit vehet a Kabataş kikötőhöz (15 perc Taksimból, 10 perc Sultanahmetből, ~€10-15). Központi és könnyű.' },
      { q: 'Ha már Kabataşban vagyok és fel akarok szállni?', a: 'Ha a kikötőnél van és vannak szabad helyek, egyszerűen felszállhat. Írjon nekünk WhatsApp-on vagy kérdezze meg a személyzetet — ha van hely, hozzáadjuk. Ugyanaz az ár, fizetés a fedélzeten. A túra kifejezésekkel ezt "walk-on"-nak hívják — itt működik.' }
    ],
    cta: {
      primary: 'Foglaljon Ma Estére · Fizetés a Fedélzeten',
      secondary: 'Aznapi foglalás · Percek alatt megerősítve · Ingyenes lemondás 2 órával előtte',
      tertiary: 'WhatsApp Sürgős Foglalásokhoz'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Isztambul Hajóút Ár €{p.dinnerStd}-tól — Átlátható Tarifák',
      description: 'Boszporusz hajóút árak Isztambul: €{p.dinnerStd}/fő. Gyerekek 0-3 ingyenes, 4-9 €5 kedvezménnyel. Átlátható kiegészítők.'
    },
    hero: {
      h1: 'Isztambul Hajóút Ár',
      subtitle: 'Átlátható árak, nincsenek rejtett díjak. €{p.dinnerStd}/fő — és a fedélzeten fizet, nem most.',
      badge: 'Átlátható · 40% KEDVEZMÉNY Közvetlen · 0-3 Év Ingyenes'
    },
    intro: [
      '**Az isztambuli hajóút árak** nagyon változatosak — a vacsorát kihagyó €15-os költségvetésű kompoktól az €150+-os üdülő jachtokig. A mi árunk középen van és a legjobb értéket kínálja: €{p.dinnerStd}/fő a teljes 3 órás vacsorás hajóútért show-val. Nincsenek rejtett díjak, nincsenek meglepetés felárak.',
      'Az **isztambuli hajóút ár** részletes bontása, mert az átláthatóság számít:\n\n- **Vacsorás Hajóút**: €{p.dinnerStd}/fő (korábban €{p.dinnerStdOriginal}, 40% kedvezmény). Tartalmazza a 3 órás túrát, 10 mezzét, főételt, desszertet, korlátlan üdítőket, élő show-t.\n- **0-3 év**: Ingyenes. 4-9 év: €5 kedvezmény. 10+ év: teljes ár.\n\nKiegészítők (opcionálisak):\n- 2 pohár alkohol: +€{p.alcohol2}/fő\n- Szállodai transzfer oda-vissza: +€{p.transfer}/fő\n- Romantikus asztali elrendezés: +€{p.romantic}/asztal',
      'És fontos: **fizetés a fedélzeten**. Egy fillért sem ígér, amíg nincs a hajón. Ingyenes lemondás indulás előtt 2 óráig. Nincs elkötelezettség, nincs kockázat — a legtöbb **fogyasztóbarát ár az isztambuli hajóútra**, amit talál.'
    ],
    highlights: [
      { title: 'Vacsorás hajóút: €{p.dinnerStd} (korábban €{p.dinnerStdOriginal})', desc: '40% kedvezmény a normál árhoz képest. 3 órás túra, teljes török vacsora, élő show, korlátlan üdítők. Egyetlen átlátható ár — mindent fedez, ami egy szép estéhez kell.' },
      { title: 'Minden benne van az árban', desc: '3 órás túra, 10 mezze, meleg előétel, főétel, desszert, korlátlan üdítők, élő show és minden adó. Nincsenek rejtett díjak vagy meglepetések a fedélzeten.' },
      { title: 'Ár gyerekeknek: 0-3 ingyenes, 4-9 €5 kedvezménnyel', desc: '0-3 teljesen ingyenes (nincs díj). 4-9 €5 kedvezménnyel a felnőtt árból. 10+ teljes felnőtt ár. Átlátható, nincsenek családi ártrükkök. A transzfer is ingyenes 0-3-nak.' },
      { title: 'Kiegészítők — csak amikor szeretné', desc: 'Alkohol (2 pohár): +€{p.alcohol2}/fő. Transzfer: €{p.transfer}/fő. Romantikus asztal: €{p.romantic}/asztal. Minden opcionális, nem csomagolt. Csak azt válassza, amire szüksége van.' }
    ],
    faq: [
      { q: 'Mennyibe kerül egy túra Isztambulban?', a: 'Vacsorás hajóút: €{p.dinnerStd}/fő (normál €{p.dinnerStdOriginal}, 40% kedvezmény). 0-3 év ingyenes, 4-9 év €5 kedvezménnyel. Fizetés a fedélzeten — nincs előzetes fizetés. Ingyenes lemondás indulás előtt 2 óráig.' },
      { q: 'Vannak rejtett díjak az isztambuli túra árában?', a: 'Nem. Az ár tartalmazza: 3 órás túra, teljes vacsora (mezze, előétel, főétel, desszert), korlátlan üdítők, élő show, adók. Az opcionális kiegészítők (alkohol, transzfer, romantikus asztal) külön és átlátható árral szerepelnek — csak azt fizeti, amit hozzáad. Nincs "szolgáltatási díj", "kikötői díj", meglepetés felár.' },
      { q: 'Miért 40% kedvezmény az isztambuli túra ára — trükk?', a: 'Nincs trükk. A normál ár €{p.dinnerStdOriginal} az, amit a harmadik fél foglalási oldalak (Viator, GetYourGuide, Klook) kérnek — a jutalékaikkal. Foglaljon közvetlenül és kapja meg €{p.dinnerStd}-ért. Ez a 40%-os különbség. Nincsenek időkorlátos vagy dinamikus ár trükkök.' },
      { q: 'Hogyan hasonlítható össze az isztambuli túra ára más opciókkal?', a: 'Hurok kompok: €5-10, 1 óra, nincs vacsora, nincs szórakozás, csak turizmus. Költségvetésű túrák vacsorával: €20-30, zsúfoltak, átlagos étel, rövid show. A mi hajóutunk (€{p.dinnerStd}): 3 óra, teljes vacsora, teljes show, privát asztal, TÜRSAB engedéllyel. Üdülő jachtok: €100-150+, túlzott egyedülálló utazóknak/pároknak.' },
      { q: 'Előre kell fizetnem az isztambuli túra árát?', a: 'Nem — **fizetés a fedélzeten**. Foglaljon most (1 perces űrlap), megerősítjük WhatsApp-on, jöjjön 20:00-ra és fizessen a fedélzeten (készpénz vagy kártya). Ingyenes lemondás 2 órával előtte. Nulla anyagi elkötelezettség, amíg nem elégedett.' },
      { q: 'Vannak csoportos kedvezmények az isztambuli túra árán?', a: '10+ csoportoknak 5-10% kedvezményt ajánlhatunk — írjon WhatsApp-on a csoport méretével. 25+ esetén vegye figyelembe a privát túrát (az egész hajó az Ön csoportjának, testreszabott menü). 2-9 fő esetén a standard árak érvényesek — már 40% kedvezmény a normál árhoz képest.' }
    ],
    cta: {
      primary: 'Foglaljon · Fizetés a Fedélzeten',
      secondary: '€{p.dinnerStd}/főtől · 0-3 év ingyenes · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Boszporusz Látnivalók €{p.dinnerStd}-tól — Isztambul Látnivalók a Vízről',
      description: 'Boszporusz látnivaló hajóút: Dolmabahçe, Ortaköy, Boszporusz-híd, Rumeli, Beylerbeyi, Leánytorony. Esti túra 3ó vacsorával. Ingyenes lemondás, fizetés a fedélzeten.'
    },
    hero: {
      h1: 'Turizmus a Boszporuszon',
      subtitle: 'Isztambul összes ikonikus nevezetessége — a vízről, éjjel, vacsorával. Egy 3 órás túra lefedi a Dolmabahçe-t, Ortaköy-mecsetet, Boszporusz-hidat, Rumeli Hisarı-t és sok mást.',
      badge: '10+ Nevezetesség · Európai és Ázsiai Partok · 3 Óra'
    },
    intro: [
      '**A turizmus a Boszporuszon** a vízről felülmúlja bármilyen busztúrát. A Boszporusz a város legtörténelmibb vízi útja — oszmán szultánok, bizánci császárok, görög kereskedők és orosz hadihajók mind áthaladtak itt. Ma a 3 órás túránk az angolul beszélő személyzet kommentárjával elhalad Isztambul minden fő nevezetessége mellett, amely meghatározza a sziluettet.',
      'A **turisztikai túránk** útvonala a Boszporuszon (esti indulás, 21:00-00:00):\n\n1. **Dolmabahçe-palota** — 19. századi oszmán rezidencia, éjjel kivilágítva\n2. **Çırağan-palota** — most luxushotel, királyi történelem\n3. **Ortaköy-mecset** — Isztambul egyik legfotózottabb mecsete, a vízen\n4. **Boszporusz-híd** — éjjel váltakozik kék, lila, arany között\n5. **Bebek** — elegáns negyed az európai parton\n6. **Rumeli Hisarı** — Fatih Sultan Mehmet építette 1452-ben Konstantinápoly elfoglalása előtt\n7. **Fatih Sultan Mehmet-híd** — második Boszporusz-híd, drámai ív\n8. **Beylerbeyi-palota** — ázsiai part, oszmán nyári rezidencia\n9. **Üsküdar** — Isztambul ázsiai partja, hagyományos negyed\n10. **Leánytorony** — torony egy kis szigeten, Isztambul egyik legromantikusabb szimbóluma',
      'A vacsora és a szórakozás benne van — nem külön — tehát **a turizmus a Boszporuszon** teljes estévé válik. Török többfogásos vacsora, élő népi tánc show, sema, keleti tánc, DJ. 4,9★ értékelés több mint 11.317 utazótól, TÜRSAB A-17672 engedéllyel.'
    ],
    highlights: [
      { title: '10+ fő nevezetesség Isztambulban', desc: 'Dolmabahçe-palota, Çırağan-palota, Ortaköy-mecset, Boszporusz-híd, Rumeli Hisarı, FSM-híd, Beylerbeyi-palota, Üsküdar, Leánytorony. Isztambul minden lényeges nevezetessége egy túrában.' },
      { title: 'Mindkét part, európai és ázsiai', desc: 'Európai part odafelé (Dolmabahçe → Rumeli Hisarı), ázsiai part visszafelé (Beylerbeyi → Üsküdar). Két kontinens egy 3 órás túrán — csak Isztambul engedi meg ezt.' },
      { title: 'Esti turizmus = kivilágított kilátások', desc: 'A nappali turizmus sík fényben mutatja a nevezetességeket. Az esti túra drámai csúcson fogja meg őket: ragyogó sárga paloták, színes hidak, sötét vízben tükröződő mecsetek. Jobb a fotókhoz, emlékezetesebb.' },
      { title: 'Vacsora + show beleértve', desc: 'Turizmus + vacsora + szórakozás egy csomagban. Nem kell külön vacsorát terveznie a túra után. €{p.dinnerStd}/főtől, fizetés a fedélzeten, összesen 3 óra.' }
    ],
    faq: [
      { q: 'Mely Boszporusz nevezetességeket fogom látni?', a: 'Sorrendben: Dolmabahçe-palota, Çırağan-palota, Ortaköy-mecset, Boszporusz-híd, Bebek negyed, Rumeli Hisarı, Fatih Sultan Mehmet-híd, Anadolu Hisarı, Beylerbeyi-palota, Kuzguncuk, Üsküdar és Leánytorony (a távolban látható). 10+ fő nevezetesség egy 3 órás útvonalon.' },
      { q: 'A turizmus a Boszporuszon jobb nappal vagy éjjel?', a: 'Különböző élmények. Nappal: tisztább kilátás az építészeti részletekre, világosabb a fotókhoz. Éjjel: drámai megvilágítás, misztikus hangulat, kevesebb hajó a vízen. Az utazók többsége az éjszakai túrát részesíti előnyben, mert a nevezetességek varázslatosabbnak tűnnek — és a vacsora + show teljes estévé teszi.' },
      { q: 'A hajó megáll a nevezetességeknél fotózásra?', a: 'Folyamatos túra — nincsenek megállók (nincs leszállás). A hajó elhalad minden nevezetesség mellett, a személyzet elmagyarázza, mit lát, kimehet a nyitott fedélzetre fotózni. Nincsenek sorok, nincs séta, nincs ütemezési stressz — csak egy folyamatos 3 órás fotózási lehetőség.' },
      { q: 'Kommentál a személyzet a turizmus alatt?', a: 'Igen — az angolul beszélő személyzet rövid kommentárokat kínál, ahogy elhaladunk minden fő nevezetesség mellett (történelem, építészet, érdekességek). Nem vezetett lecke, inkább baráti magyarázat, miközben vacsorázik. Mélyebb történelemhez ajánljuk, hogy párosítsa egy nappali isztambuli gyalogos túrával.' },
      { q: 'Hogyan különbözik a turizmus a Boszporuszon a hop-on komptól?', a: 'A hop-on kompok (Şehir Hatları hurok hajók): €5-10, 1-2 óra, alapszintű, nincs vacsora, zsúfoltak. A mi túránk: €{p.dinnerStd}, 3 óra, teljes vacsora, élő show, privát asztal, angol kommentár. Komoly és kényelmes turizmushoz az esti túra jobb. Gyors és gazdaságos közlekedéshez a hurok komp működik.' },
      { q: 'Fotózhatom a nevezetességeket a hajóról?', a: 'Igen — abszolút. A nyitott fedélzeten kiváló helyek vannak a fotózáshoz. A nevezetességek 100-200 méterre haladnak el a hajótól. Az okostelefon fotók nagyszerűen sikerülnek; a DSLR/tükör nélküli felhasználók nagyszerű kompozíciókat kaphatnak, különösen az aranyórából a kék órába való átmenetnél kora este.' }
    ],
    cta: {
      primary: 'Foglalja a Turisztikai Túrát · Fizetés a Fedélzeten',
      secondary: '10+ nevezetesség · Vacsora + show · Ingyenes lemondás 2 órával előtte',
      tertiary: 'Elérhetőség Ma Este'
    }
  }

};
