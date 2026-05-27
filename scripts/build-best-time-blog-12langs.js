#!/usr/bin/env node
/**
 * Build the `best-time-bosphorus-cruise.html` blog post in 12 missing languages.
 * Output: src/blog-i18n/{lang}/best-time-bosphorus-cruise.html
 *
 * Approach: structured i18n data per lang + EN template → render.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT_ROOT = path.join(ROOT, 'src', 'blog-i18n');

// ========================================================================
// PER-LANGUAGE STRINGS — title, meta, h1, body sections, CTA, related, chrome
// ========================================================================
const T = {
  cs: {
    htmlLang: 'cs', dir: 'ltr',
    title: 'Kdy je nejlepší čas rezervovat plavbu po Bosporu v Istanbulu? (Průvodce 2026)',
    metaDesc: 'Průvodce rezervací plavby po Bosporu měsíc po měsíci: nejlepší roční období, plavba při západu slunce vs. večerní, jak dlouho dopředu rezervovat, dostupnost na stejný den a jak se vyhnout pasti předplatby.',
    ogImageAlt: 'Loď večerní plavby po Bosporu projíždí v noci pod osvětleným Mostem přes Bospor',
    date: '17. května 2026',
    h1: 'Kdy je nejlepší čas rezervovat plavbu po Bosporu v Istanbulu? (Průvodce 2026)',
    intro: 'Pokud plánujete plavbu po Bosporu v Istanbulu, otázka <em>kdy</em> je téměř stejně důležitá jako otázka, <em>kterého</em> provozovatele si vyberete. Správný měsíc, správný čas odjezdu a správné množství předstihu mohou proměnit průměrný večer v nejpamátnější část vaší celé cesty. Tento průvodce rozebírá přesně, kdy rezervovat — podle ročního období, podle hodiny a podle počtu dní dopředu — na základě toho, co funguje nejlépe pro první návštěvníky i opakované cestující.',
    h2_yearly: 'Nejlepší roční období — měsíc po měsíci',
    yearlyIntro: 'Istanbulské klima je mírnější, než většina cestujících očekává, ale samotný Bospor se může cítit překvapivě jinak než pevninské atrakce města. Zde je to, co každé roční období nabízí.',
    h3_spring: 'Jaro (duben až červen) — ideální období',
    springText: 'Toto je nejčastěji doporučované období. Denní teploty se pohybují mezi 15 a 25 °C, večery jsou příjemné spíše než chladné, a déšť, který občas zůstává z března, se do konce dubna z velké části vyčistí. Davy jsou znatelně řidší než v létě, což znamená snadnější výběr sedadel a uvolněnější atmosféru na palubě. Tulipánová sezóna v dubnu dodává parkům podél evropského břehu zvláštní vizuální půvab. Pokud chcete nejjistější jednoznačnou odpověď na otázku "kdy bych měl plout po Bosporu", je to květen.',
    h3_summer: 'Léto (červenec až srpen) — vrchol sezóny',
    summerText: 'Nejdelší dny roku připadají na konec června a červenec, se západem slunce po 20:30. To je pro plavby při západu slunce skutečně kouzelné, ale také nejrušnější doba, což znamená, že plavby se rychle plní, víkendové večery jsou spolehlivě vyprodané a samotné město je horké a přeplněné. Přes den může teplota dosáhnout 30 až 35 °C, i když vánek na vodě udržuje plavbu pohodlnou. Pokud cestujete v létě, rezervujte si pár dní dopředu na všední dny a alespoň týden dopředu na pátek nebo sobotu.',
    h3_autumn: 'Podzim (září až říjen) — druhé ideální období',
    autumnText: 'Září si zachovává letní teplo bez davů. Říjen přináší chladnější večery a první náznaky podzimního světla, které je obzvláště lichotivé pro fotografii. Déšť je častější ke konci října, ale Bospor jen zřídka ruší plavby, pokud počasí není kruté. To je sezóna, kterou mnoho fotografů a gastronomicky zaměřených cestujících tiše preferuje — menu se posouvají k vydatnějším sezónním pokrmům a měkké zlaté světlo kolem mostů je nejvíce filmové.',
    h3_winter: 'Zima (listopad až únor) — podceňovaná sezóna',
    winterText: 'Zimní plavby v Istanbulu mají tichou krásu, kterou většina cestujících podceňuje. Osvětlené mosty vypadají proti tmavé zimní obloze ještě dramatičtěji, davy jsou minimální a často můžete rezervovat na stejný den i o víkendech. Teploty se večer pohybují kolem 5 až 12 °C, takže vrstvené oblečení a teplá bunda jsou nezbytné, ale uzavřené jídelny jsou vytápěné a pohodlné. Ceny jsou na nejnižší úrovni a město máte téměř pro sebe. Vynechejte pouze tehdy, pokud je předpověď silného deště nebo trvalého větru nad 30 km/h — obojí může mírně zkrátit trasu.',
    h3_holidays: 'Svátky a zvláštní termíny',
    holidaysText: 'Několik konkrétních termínů se vyprodává mnohem dříve než zbytek roku. Silvestrovské plavby jsou obvykle vyprodány dva až tři týdny dopředu a často nabízejí speciální program s rozšířeným menu a živou show. Valentýn (14. února) je podobně rezervován jeden až dva týdny dopředu, s doporučenými romantickými stoly. Den republiky (29. října) a oba náboženské svátky (Ramadán Bajram a Kurban Bajram, data se každý rok mění) přinášejí příliv domácích tureckých cestujících — rezervujte si alespoň čtyři dny dopředu, pokud váš výlet připadá na jeden z nich.',
    h2_daily: 'Nejlepší denní doba — západ slunce nebo večer?',
    dailyIntro: 'Toto je nejčastěji kladená otázka o plavbách po Bosporu a neexistuje na ni jediná správná odpověď — záleží na tom, co chcete.',
    h3_sunset: 'Plavba při západu slunce (odjezd 17:30)',
    sunsetText1: 'Plavba při západu slunce vám dává obojí: zlatou hodinu nad paláci a mešitami, následovanou raným přechodem do osvětlené noční krajiny. Fotografie je v prvních 40 minutách absolutně nejlepší. Tempo je pomalejší a kontemplativnější, večeře se podává, zatímco obloha ještě má barvu, a vrátíte se na břeh kolem 20:30 — dostatečně brzy, abyste mohli pokračovat ve svém večeru, pokud chcete.',
    sunsetText2: 'Plavba při západu slunce se hodí pro fotografy, páry na první noci ve městě, rodiny s dětmi, které preferují dřívější večeři, a všechny, kteří chtějí být v posteli do 22:00. Kompromis: méně z plného nočního zábavního programu (DJ část je kratší) a zmeškáte vrchol noční iluminace města.',
    h3_night: 'Večerní plavba s večeří (odjezd 20:30)',
    nightText1: 'Toto je ikonický istanbulský večer — Most přes Bospor procházející barvami, palácové fasády zářící žlutě, kopule mešit odrážející se v černé vodě. Nalodění začíná v 19:30, odjezd je v 20:30 přesně, návrat je kolem 23:30. Zábavní program je v plné síle: úvod s tančícími derviši Mevlana, pět tradičních tureckých lidových tanců, orientální tanec, živí hudebníci a DJ set, který udržuje palubu v pohybu až do připlutí.',
    nightText2: 'Večerní plavba se hodí pro romantické večery, oslavy výročí, skupiny hledající plný zážitek a cestující, kteří chtějí nejfotogeničtější večerní výhledy, jaké Istanbul nabízí. Kompromis: začíná pozdě a končí pozdě, což může být po plném dni prohlídek náročné.',
    h3_both: 'Můžete absolvovat obě?',
    bothText: 'Ano — a mnoho cestujících, kteří zůstávají tři nebo více nocí, dělá přesně to. Tyto dvě plavby jsou skutečně různé zážitky, ne nadbytečné. Plavba při západu slunce v první večer a večerní plavba později během cesty vám poskytne dvě různé vzpomínky ze stejné vodní cesty. Trasa je stejná, ale světlo, atmosféra a zábavní program jsou dost odlišné, aby se necítily opakující.',
    h2_advance: 'Jak dlouho dopředu byste měli rezervovat?',
    advanceIntro: 'Zde se většina cestujících buď nadměrně připravuje, nebo se dostane do pasti na poslední chvíli. Zde je praktické rozdělení:',
    bullet1: '<strong>Všední dny, mimo sezónu (lis–bře):</strong> Rezervace na stejný den je v pořádku. Mnoho provozovatelů má dostupnost až do raného večera.',
    bullet2: '<strong>Všední dny, mezisezóna (dub, kvě, zář, říj):</strong> Rezervujte si den dopředu, abyste si zajistili preferovaná sedadla.',
    bullet3: '<strong>Všední dny, hlavní sezóna (čvn–srp):</strong> Rezervujte si dva až tři dny dopředu.',
    bullet4: '<strong>Víkendy, jakákoliv sezóna:</strong> Rezervujte si alespoň tři dny dopředu. Sobotní večery jsou nejrušnější.',
    bullet5: '<strong>Svátky a zvláštní termíny:</strong> Rezervujte si jeden až tři týdny dopředu (viz seznam výše).',
    advanceFooter: 'Jeden důležitý detail: čas rezervace je důležitější než datum v kalendáři. Provozovatelé v Istanbulu obvykle přestávají přijímat rezervace na stejný den jednu až dvě hodiny před odjezdem (kolem 19:30 pro večerní plavby). Poté, i když jsou volná sedadla, kuchyně dokončila porce a manifest je uzamčen.',
    h2_sameday: 'Rezervace na stejný den — kdy funguje, kdy ne',
    samedayText1: 'Pokud se rozhodnete absolvovat plavbu po Bosporu ve stejný den, vaše šance silně závisí na třech faktorech: dni v týdnu, ročním období a čase, kdy podáte žádost. Úterý v únoru požadované ve 14:00 téměř jistě najde sedadla. Sobota v červenci požadovaná v 17:00 už může být vyprodaná.',
    samedayText2: 'WhatsApp je nejrychlejší způsob, jak zkontrolovat dostupnost na stejný den — většina provozovatelů odpovídá během minut. Vyhněte se platformám třetích stran pro rezervace na stejný den; obvykle mají zpoždění jedné až dvou hodin pro potvrzení, do té doby plavba často již odplula.',
    h2_pricing: 'Ceny a vzorce poptávky',
    pricingText1: 'Přímé rezervační ceny standardní večerní plavby po Bosporu jsou v průběhu roku pozoruhodně stabilní — obvykle €24 až €30 na osobu v závislosti na provozovateli. Co se mění, je dostupnost, ne hlavní cena. Platformy třetích stran (Viator, GetYourGuide, Klook) navyšují ceny na €50 až €100 a účtují nejvyšší příplatky ve špičkových termínech, proto vám přímá rezervace ušetří nejvíce právě tehdy, když to nejvíce potřebujete.',
    pricingText2: 'Jedna past, které se vyhnout: předplatba platformám třetích stran v hlavní sezóně. Pokud má váš let zpoždění nebo si to rozmyslíte, vrácení peněz je pomalé a často částečné. Přímá rezervace s platbou na palubě znamená nulovou finanční expozici, dokud nenastoupíte.',
    h2_recommendation: 'Praktické doporučení',
    recommendationText1: 'Pokud chcete nejspolehlivější jednoznačnou odpověď: <strong>rezervujte si večerní plavbu s večeří na všední večer v květnu nebo září, dva dny dopředu, přímo s provozovatelem licencovaným TÜRSAB, který přijímá platbu na palubě</strong>. Získáte dobré počasí, zvládnutelné davy, plný zábavní program, férové ceny a žádné riziko předplatby. Bospor v noci provozuje denní odjezdy v 20:30 z mola Kabataş přesně podle tohoto modelu — licencováno (A-17672), platba na palubě, bezplatné storno až dvě hodiny předem a hodnocení 4,8 hvězdiček napříč více než 11 000 recenzemi cestujících.',
    recommendationText2: 'Ať si vyberete jakýkoliv měsíc nebo hodinu, Bospor odmění téměř jakékoliv načasování. Průliv má způsob, jak vypadat magicky z každého úhlu, v každé sezóně, v každém světle. "Nejlepší čas" je kdykoliv tam můžete být s někým, na kom vám záleží.',
    ctaTitle: 'Připraveni vidět Istanbul z vody?',
    ctaText: 'Po veškerém plánování ukončete svůj den nejikoničtějším zážitkem města — plavbou po Bosporu s večeří, živou hudbou, tanečními show a výhledy na dva kontinenty, které se kolem vás rozsvěcují.',
    ctaButton: 'Rezervujte si plavbu — od €24,30',
    relatedTitle: 'Související články',
    related1Title: 'Nejlepší večerní plavba po Bosporu v Istanbulu 2026',
    related1Blurb: 'Kompletní průvodce balíčky, cenami a tím, co očekávat.',
    related2Title: 'Plavba po Bosporu při západu slunce — co očekávat',
    related2Blurb: 'Zlatá hodina nad vodou, kompletní průvodce.',
    related3Title: 'Plavba po Bosporu dnes večer — průvodce na poslední chvíli',
    related3Blurb: 'Rezervujte plavbu na stejný den s okamžitým potvrzením přes WhatsApp.',
    related4Title: '10 věcí, které byste měli vědět před vaší istanbulskou plavbou lodí',
    related4Blurb: 'Základní tipy pro první cestující po Bosporu.',
    backToBlog: '← Zpět na blog',
    blogLink: 'Blog', homeLink: 'Domů',
    footerCopy: '© 2026 Bosphorus Night. Všechna práva vyhrazena.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Jsme online · Chatujte hned', floatingWaAria: 'Chatovat na WhatsApp',
    waMsg: 'Ahoj!%20Chci%20se%20zeptat%20na%20plavbu%20Bosphorus%20Night.',
  },
  da: {
    htmlLang: 'da', dir: 'ltr',
    title: 'Hvornår er det bedste tidspunkt at booke en Bosporus-krydstogt i Istanbul? (Guide 2026)',
    metaDesc: 'Måned-for-måned guide til at booke en Bosporus-krydstogt: bedste sæsoner, solnedgang vs. natafgang, hvor langt i forvejen man skal booke, dagstilgængelighed, og hvordan man undgår forudbetalingsfælden.',
    ogImageAlt: 'En Bosporus-middagskrydstogtsbåd passerer under den oplyste Bosporus-bro om natten',
    date: '17. maj 2026',
    h1: 'Hvornår er det bedste tidspunkt at booke en Bosporus-krydstogt i Istanbul? (Guide 2026)',
    intro: 'Hvis du planlægger en Bosporus-krydstogt i Istanbul, betyder spørgsmålet om <em>hvornår</em> næsten lige så meget som <em>hvilken</em> operatør du vælger. Den rette måned, det rette afgangstidspunkt og det rette antal dages varsel kan forvandle en gennemsnitlig aften til den mest mindeværdige del af hele din rejse. Denne guide opdeler præcis, hvornår du skal booke — efter sæson, time og antal dage i forvejen — baseret på hvad der fungerer bedst for både førstegangsbesøgende og tilbagevendende rejsende.',
    h2_yearly: 'Bedste tid på året — måned for måned',
    yearlyIntro: 'Istanbuls klima er mere mildt, end de fleste rejsende forventer, men selve Bosporus kan føles overraskende anderledes end byens landbaserede attraktioner. Her er, hvad hver sæson tilbyder.',
    h3_spring: 'Forår (april til juni) — det perfekte tidspunkt',
    springText: 'Dette er det mest universelt anbefalede vindue. Dagstemperaturer ligger mellem 15 og 25 °C, aftener er behagelige snarere end kølige, og regnen, der lejlighedsvist hænger ved fra marts, er for det meste klaret op i slutningen af april. Folkemængder er betydeligt tyndere end om sommeren, hvilket betyder lettere pladsvalg og en mere afslappet atmosfære om bord. Tulipansæsonen i april tilføjer en særlig visuel appel til parkerne langs den europæiske kyst. Hvis du vil have det sikreste enkeltsvar på "hvornår skal jeg sejle Bosporus," er det maj.',
    h3_summer: 'Sommer (juli til august) — højsæson',
    summerText: 'Årets længste dage falder i slutningen af juni og juli, med solnedgang efter 20:30. Dette er virkelig magisk for solnedgangskrydstogter, men også den travleste tid, hvilket betyder, at krydstogter fyldes hurtigere, weekendaftener er pålideligt udsolgt, og selve byen er varm og overfyldt. I dagtimerne kan det nå 30 til 35 °C, selvom brisen på vandet holder krydstogtet behageligt. Hvis du rejser om sommeren, skal du booke et par dage i forvejen til hverdage og mindst en uge i forvejen til fredag eller lørdag.',
    h3_autumn: 'Efterår (september til oktober) — det andet perfekte tidspunkt',
    autumnText: 'September bevarer sommerens varme uden folkemængderne. Oktober bringer køligere aftener og de første antydninger af efterårslys, hvilket er særligt flatterende for fotografering. Regn bliver hyppigere mod slutningen af oktober, men Bosporus aflyser sjældent krydstogter, medmindre vejret er alvorligt. Dette er den sæson, mange fotografer og madfokuserede rejsende stille foretrækker — menuerne skifter mod mere fyldige sæsonbestemte retter, og det bløde gyldne lys omkring broerne er på sit mest filmiske.',
    h3_winter: 'Vinter (november til februar) — den undervurderede sæson',
    winterText: 'Vinterkrydstogter i Istanbul har en stille skønhed, som de fleste rejsende undervurderer. De oplyste broer ser endnu mere dramatiske ud mod den mørke vinterhimmel, folkemængderne er minimale, og du kan ofte booke samme dag, selv i weekenderne. Temperaturer svæver omkring 5 til 12 °C om aftenen, så lagdelt tøj og en varm jakke er essentielle, men de indelukkede spisesale er opvarmede og komfortable. Priserne er på deres laveste, og du har byen næsten for dig selv. Spring kun over, hvis der er udsigt til kraftig regn eller vedvarende vind over 30 km/t — begge dele kan forkorte ruten en smule.',
    h3_holidays: 'Helligdage og særlige datoer',
    holidaysText: 'Et par specifikke datoer fyldes meget tidligere end resten af året. Nytårsaftenskrydstogter er typisk udsolgt to til tre uger i forvejen og kører ofte et særligt program med udvidet menu og live show. Valentinsdag (14. februar) er ligeledes booket op en til to uger i forvejen, med anbefalede romantiske bordopstillinger. Republikkens dag (29. oktober) og de to religiøse helligdage (Ramadan Bayram og Kurban Bayram, datoer skifter hvert år) bringer en bølge af indenlandske tyrkiske rejsende — book mindst fire dage i forvejen, hvis din rejse falder i en af disse.',
    h2_daily: 'Bedste tid på dagen — solnedgang eller nat?',
    dailyIntro: 'Dette er det mest stillede spørgsmål om Bosporus-krydstogter, og der er ikke et enkelt rigtigt svar — det afhænger af, hvad du vil.',
    h3_sunset: 'Solnedgangskrydstogt (17:30 afgang)',
    sunsetText1: 'Solnedgangskrydstogtet giver dig begge verdener: den gyldne time over paladser og moskeer, efterfulgt af den tidlige overgang til det oplyste natlandskab. Fotografering er på sit absolut bedste i de første 40 minutter. Tempoet er langsommere og mere kontemplativt, middagen serveres, mens himlen stadig har farve, og du er tilbage på land omkring 20:30 — tidligt nok til at fortsætte din aften, hvis du vil.',
    sunsetText2: 'Solnedgangskrydstogtet passer til fotografer, par på deres første aften i byen, familier med børn, der foretrækker tidligere middage, og alle, der vil i seng inden 22:00. Kompromiset: mindre af det fulde natunderholdningsprogram (DJ-delen er kortere), og du går glip af højdepunktet af byens natbelysning.',
    h3_night: 'Nat-middagskrydstogt (20:30 afgang)',
    nightText1: 'Dette er den ikoniske Istanbul-aften — Bosporus-broen cykler gennem farver, paladsfacader gløder gult, moskekupler reflekteres på sort vand. Ombordstigning starter 19:30, afgang er præcis 20:30, retur er omkring 23:30. Underholdningsprogrammet er på sit fyldigste: Mevlana hvirvlende dervish-åbner, fem traditionelle tyrkiske folkedans, mavedans, levende musikere og et DJ-sæt, der holder dækket i live indtil dokningen.',
    nightText2: 'Nat-krydstogtet passer til dateaftener, jubilæumsfejringer, grupper, der søger den fulde oplevelse, og rejsende, der vil have de mest fotogene aftensyn, Istanbul har at byde på. Kompromiset: du starter senere og slutter sent, hvilket kan være hårdt efter en fuld dag med sightseeing.',
    h3_both: 'Kan du gøre begge?',
    bothText: 'Ja — og mange rejsende, der bliver i tre eller flere nætter, gør præcis det. De to krydstogter er ægte forskellige oplevelser, ikke overflødige. Et solnedgangskrydstogt din første aften og et middagskrydstogt senere i turen giver dig to forskellige minder fra den samme vandvej. Ruten er den samme, men lyset, stemningen og underholdningsprogrammet er forskellige nok til, at det ikke føles gentaget.',
    h2_advance: 'Hvor langt i forvejen skal du booke?',
    advanceIntro: 'Her overforbereder de fleste rejsende sig enten eller bliver fanget i sidste øjeblik. Her er en praktisk opdeling:',
    bullet1: '<strong>Hverdage, lavsæson (nov–mar):</strong> Samme-dag-booking er fint. Mange operatører har tilgængelighed indtil tidlig aften.',
    bullet2: '<strong>Hverdage, mellemsæson (apr, maj, sep, okt):</strong> Book en dag i forvejen for at garantere foretrukne pladser.',
    bullet3: '<strong>Hverdage, højsæson (jun–aug):</strong> Book to til tre dage i forvejen.',
    bullet4: '<strong>Weekender, enhver sæson:</strong> Book mindst tre dage i forvejen. Lørdag aften er travlest.',
    bullet5: '<strong>Helligdage og særlige datoer:</strong> Book en til tre uger i forvejen (se listen ovenfor).',
    advanceFooter: 'En vigtig detalje: bookingtidspunktet betyder mere end kalenderdatoen. Operatører i Istanbul stopper typisk med at acceptere samme-dag-reservationer en til to timer før afgang (omkring 19:30 for natkrydstogter). Derefter, selvom der er tomme pladser, har køkkenet afsluttet portioner, og passagerlisten er låst.',
    h2_sameday: 'Samme-dag-booking — hvornår det virker, hvornår ikke',
    samedayText1: 'Hvis du beslutter dig for at tage en Bosporus-krydstogt samme dag, afhænger dine odds stærkt af tre faktorer: ugedagen, sæsonen og tidspunktet, du laver anmodningen. En tirsdag i februar anmodet kl. 14:00 vil næsten helt sikkert finde pladser. En lørdag i juli anmodet kl. 17:00 kan allerede være udsolgt.',
    samedayText2: 'WhatsApp er den hurtigste måde at tjekke samme-dag-tilgængelighed på — de fleste operatører svarer inden for minutter. Undgå tredjepartsplatforme for samme-dag-bookinger; de har typisk en forsinkelse på en til to timer for bekræftelse, og på det tidspunkt er krydstogtet ofte allerede afgået.',
    h2_pricing: 'Priser og efterspørgselsmønstre',
    pricingText1: 'Direkte bookingpriser for standard Bosporus-middagskrydstogtet er bemærkelsesværdigt stabile gennem året — typisk €24 til €30 pr. person afhængigt af operatøren. Det, der ændrer sig, er tilgængelighed, ikke overskriftsprisen. Tredjepartsplatforme (Viator, GetYourGuide, Klook) puster priserne op til €50 til €100 og opkræver de højeste tillæg på spidsdage, hvilket er grunden til, at direkte booking sparer dig mest præcist, når du har brug for det mest.',
    pricingText2: 'En fælde at undgå: forudbetaling til tredjepartsplatforme i højsæsonen. Hvis dit fly er forsinket, eller du ombestemmer dig, er refusionen langsom og ofte delvis. Direkte booking med betaling-om-bord betyder nul finansiel eksponering, indtil du går om bord.',
    h2_recommendation: 'En praktisk anbefaling',
    recommendationText1: 'Hvis du vil have det mest pålidelige enkeltsvar: <strong>book et nat-middagskrydstogt på en hverdagsaften i maj eller september, to dage i forvejen, direkte med en TÜRSAB-licenseret operatør, der accepterer betaling om bord</strong>. Du får godt vejr, håndterbare folkemængder, det fulde underholdningsprogram, fair prissætning og ingen forudbetalingsrisiko. Bosphorus Night kører daglige 20:30-afgange fra Kabataş Pier med præcis denne model — licenseret (A-17672), betaling om bord, gratis afbestilling op til to timer før, og en 4,8-stjernet rating på tværs af mere end 11.000 rejsendes anmeldelser.',
    recommendationText2: 'Uanset hvilken måned eller time du vælger, belønner Bosporus næsten enhver timing. Strædet har en måde at se magisk ud på fra hver vinkel, i hver sæson, i hvert lys. Det "bedste tidspunkt" er, når du kan være der med nogen, der betyder noget for dig.',
    ctaTitle: 'Klar til at se Istanbul fra vandet?',
    ctaText: 'Efter al planlægningen, afslut din dag med byens mest ikoniske oplevelse — en Bosporus-middagskrydstogt med live musik, danseshow og udsigt til to kontinenter, der lyser op omkring dig.',
    ctaButton: 'Book din krydstogt — fra €24,30',
    relatedTitle: 'Relaterede artikler',
    related1Title: 'Bedste Bosporus-middagskrydstogt i Istanbul 2026',
    related1Blurb: 'Komplet guide til pakker, priser og hvad du kan forvente.',
    related2Title: 'Bosporus-solnedgangskrydstogt — hvad du kan forvente',
    related2Blurb: 'Gylden time over vandet, fuld guide.',
    related3Title: 'Bosporus-krydstogt i aften — sidste øjebliksguide',
    related3Blurb: 'Book en samme-dags krydstogt med øjeblikkelig WhatsApp-bekræftelse.',
    related4Title: '10 ting at vide før din Istanbul-bådture',
    related4Blurb: 'Essentielle tips for førstegangs Bosporus-krydstogtsejlere.',
    backToBlog: '← Tilbage til blog',
    blogLink: 'Blog', homeLink: 'Hjem',
    footerCopy: '© 2026 Bosphorus Night. Alle rettigheder forbeholdes.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Vi er online · Chat nu', floatingWaAria: 'Chat på WhatsApp',
    waMsg: 'Hej!%20Jeg%20vil%20gerne%20høre%20om%20Bosphorus%20Night%20krydstogtet.',
  },
  el: {
    htmlLang: 'el', dir: 'ltr',
    title: 'Πότε είναι η καλύτερη ώρα να κλείσετε μια κρουαζιέρα στον Βόσπορο στην Κωνσταντινούπολη; (Οδηγός 2026)',
    metaDesc: 'Οδηγός μήνα προς μήνα για την κράτηση μιας κρουαζιέρας στον Βόσπορο: καλύτερες εποχές, αναχώρηση δύσης ηλίου εναντίον νύχτας, πόσο νωρίτερα να κλείσετε, διαθεσιμότητα ίδιας μέρας και πώς να αποφύγετε την παγίδα προπληρωμής.',
    ogImageAlt: 'Ένα σκάφος κρουαζιέρας με δείπνο στον Βόσπορο περνά κάτω από τη φωτισμένη Γέφυρα του Βοσπόρου τη νύχτα',
    date: '17 Μαΐου 2026',
    h1: 'Πότε είναι η καλύτερη ώρα να κλείσετε μια κρουαζιέρα στον Βόσπορο στην Κωνσταντινούπολη; (Οδηγός 2026)',
    intro: 'Αν σχεδιάζετε μια κρουαζιέρα στον Βόσπορο στην Κωνσταντινούπολη, το ερώτημα του <em>πότε</em> έχει σχεδόν την ίδια σημασία με το <em>ποιον</em> διαχειριστή θα επιλέξετε. Ο σωστός μήνας, η σωστή ώρα αναχώρησης και η σωστή προειδοποίηση μπορούν να μετατρέψουν ένα μέτριο βράδυ στο πιο αξέχαστο μέρος ολόκληρου του ταξιδιού σας. Αυτός ο οδηγός αναλύει ακριβώς πότε να κλείσετε — ανά εποχή, ανά ώρα και ανά αριθμό ημερών — με βάση το τι λειτουργεί καλύτερα για πρωτοεπισκέπτες και επαναλαμβανόμενους ταξιδιώτες.',
    h2_yearly: 'Καλύτερη εποχή του χρόνου — μήνα προς μήνα',
    yearlyIntro: 'Το κλίμα της Κωνσταντινούπολης είναι πιο εύκρατο απ\' ό,τι περιμένουν οι περισσότεροι ταξιδιώτες, αλλά ο ίδιος ο Βόσπορος μπορεί να μοιάζει εκπληκτικά διαφορετικός από τα χερσαία αξιοθέατα της πόλης. Δείτε τι προσφέρει κάθε εποχή.',
    h3_spring: 'Άνοιξη (Απρίλιος έως Ιούνιος) — η ιδανική περίοδος',
    springText: 'Αυτό είναι το πιο ευρέως συνιστώμενο παράθυρο. Οι ημερήσιες θερμοκρασίες κυμαίνονται μεταξύ 15 και 25 °C, τα βράδια είναι ευχάριστα παρά ψυχρά, και η βροχή που περιστασιακά παραμένει από τον Μάρτιο έχει ως επί το πλείστον καθαρίσει μέχρι τα τέλη Απριλίου. Το πλήθος είναι αισθητά αραιότερο από το καλοκαίρι, που σημαίνει ευκολότερη επιλογή θέσης και πιο χαλαρή ατμόσφαιρα στο σκάφος. Η εποχή των τουλιπών τον Απρίλιο προσθέτει ιδιαίτερη οπτική γοητεία στα πάρκα κατά μήκος της ευρωπαϊκής ακτής. Αν θέλετε την πιο ασφαλή μοναδική απάντηση στο "πότε να κάνω κρουαζιέρα στον Βόσπορο", είναι ο Μάιος.',
    h3_summer: 'Καλοκαίρι (Ιούλιος έως Αύγουστος) — υψηλή σεζόν',
    summerText: 'Οι μεγαλύτερες μέρες του χρόνου πέφτουν στα τέλη Ιουνίου και Ιουλίου, με τη δύση να εκτείνεται μετά τις 20:30. Αυτό είναι πραγματικά μαγικό για κρουαζιέρες δύσης ηλίου αλλά και η πιο πολυσύχναστη εποχή, που σημαίνει ότι οι κρουαζιέρες γεμίζουν πιο γρήγορα, τα Σαββατοκύριακα είναι αξιόπιστα εξαντλημένα και η ίδια η πόλη είναι ζεστή και υπερβολικά γεμάτη. Κατά τη διάρκεια της ημέρας μπορεί να φτάσει τους 30 με 35 °C, αν και το αεράκι στο νερό κρατά την κρουαζιέρα άνετη. Αν ταξιδεύετε καλοκαίρι, κλείστε λίγες μέρες νωρίτερα για καθημερινές και τουλάχιστον μια εβδομάδα νωρίτερα για Παρασκευή ή Σάββατο.',
    h3_autumn: 'Φθινόπωρο (Σεπτέμβριος έως Οκτώβριος) — η άλλη ιδανική εποχή',
    autumnText: 'Ο Σεπτέμβριος διατηρεί τη ζεστασιά του καλοκαιριού χωρίς το πλήθος. Ο Οκτώβριος φέρνει πιο δροσερά βράδια και τις πρώτες υποσχέσεις φθινοπωρινού φωτός, το οποίο είναι ιδιαίτερα κολακευτικό για φωτογραφία. Η βροχή γίνεται πιο συχνή προς τα τέλη Οκτωβρίου, αλλά ο Βόσπορος σπάνια ακυρώνει κρουαζιέρες εκτός εάν ο καιρός είναι σοβαρός. Αυτή είναι η εποχή που πολλοί φωτογράφοι και ταξιδιώτες με φαγητοκεντρικό προσανατολισμό προτιμούν ήσυχα — τα μενού στρέφονται προς πιο γερά εποχιακά πιάτα και το απαλό χρυσό φως γύρω από τις γέφυρες είναι στην πιο κινηματογραφική του μορφή.',
    h3_winter: 'Χειμώνας (Νοέμβριος έως Φεβρουάριος) — η υποτιμημένη εποχή',
    winterText: 'Οι χειμερινές κρουαζιέρες στην Κωνσταντινούπολη έχουν μια ήσυχη ομορφιά που οι περισσότεροι ταξιδιώτες υποτιμούν. Οι φωτισμένες γέφυρες φαίνονται ακόμα πιο δραματικές απέναντι από τον σκοτεινό χειμερινό ουρανό, το πλήθος είναι ελάχιστο και μπορείτε συχνά να κλείσετε την ίδια μέρα ακόμα και Σαββατοκύριακα. Οι θερμοκρασίες κυμαίνονται γύρω στους 5 με 12 °C το βράδυ, οπότε ρούχα σε στρώσεις και ένα ζεστό μπουφάν είναι απαραίτητα, αλλά οι κλειστές αίθουσες είναι θερμασμένες και άνετες. Οι τιμές είναι στα χαμηλότερα επίπεδα και έχετε σχεδόν την πόλη μόνο για εσάς. Παραλείψτε μόνο εάν υπάρχει πρόβλεψη για έντονη βροχή ή συνεχή άνεμο πάνω από 30 km/h — και τα δύο μπορούν να συντομεύσουν ελαφρά τη διαδρομή.',
    h3_holidays: 'Διακοπές και ειδικές ημερομηνίες',
    holidaysText: 'Μερικές συγκεκριμένες ημερομηνίες γεμίζουν πολύ νωρίτερα από τον υπόλοιπο χρόνο. Οι κρουαζιέρες της Παραμονής Πρωτοχρονιάς συνήθως εξαντλούνται δύο έως τρεις εβδομάδες νωρίτερα και συχνά εκτελούν ένα ειδικό πρόγραμμα με εκτεταμένο μενού και ζωντανή παράσταση. Η Ημέρα του Αγίου Βαλεντίνου (14 Φεβρουαρίου) είναι παρομοίως κλεισμένη μία έως δύο εβδομάδες νωρίτερα, με συνιστώμενα ρομαντικά τραπέζια. Η Ημέρα της Δημοκρατίας (29 Οκτωβρίου) και οι δύο θρησκευτικές γιορτές (Ραμαζάν Μπαϊράμ και Κουρμπάν Μπαϊράμ, οι ημερομηνίες αλλάζουν κάθε χρόνο) φέρνουν ένα κύμα εγχώριων Τούρκων ταξιδιωτών — κλείστε τουλάχιστον τέσσερις μέρες νωρίτερα αν το ταξίδι σας πέφτει σε μία από αυτές.',
    h2_daily: 'Καλύτερη ώρα της ημέρας — δύση ή νύχτα;',
    dailyIntro: 'Αυτή είναι η πιο συχνά κάνουσα ερώτηση για τις κρουαζιέρες του Βοσπόρου, και δεν υπάρχει μια μοναδική σωστή απάντηση — εξαρτάται από το τι θέλετε.',
    h3_sunset: 'Κρουαζιέρα δύσης ηλίου (αναχώρηση 17:30)',
    sunsetText1: 'Η κρουαζιέρα δύσης σας δίνει και τους δύο κόσμους: τη χρυσή ώρα πάνω από τα παλάτια και τα τζαμιά, ακολουθούμενη από την πρώιμη μετάβαση στο φωτισμένο νυχτερινό τοπίο. Η φωτογραφία είναι στα απόλυτα καλύτερά της τα πρώτα 40 λεπτά. Ο ρυθμός είναι πιο αργός και πιο διαλογιστικός, το δείπνο σερβίρεται ενώ ο ουρανός εξακολουθεί να έχει χρώμα, και είστε πίσω στην ξηρά γύρω στις 20:30 — αρκετά νωρίς για να συνεχίσετε το βράδυ σας αν θέλετε.',
    sunsetText2: 'Η κρουαζιέρα δύσης ταιριάζει σε φωτογράφους, ζευγάρια στην πρώτη τους νύχτα στην πόλη, οικογένειες με παιδιά που προτιμούν πρώιμα δείπνα και σε όποιον θέλει να είναι στο κρεβάτι μέχρι τις 22:00. Ο συμβιβασμός: λιγότερο από το πλήρες νυχτερινό πρόγραμμα ψυχαγωγίας (το τμήμα DJ είναι μικρότερο) και χάνετε την κορυφή της νυχτερινής φωταγώγησης της πόλης.',
    h3_night: 'Νυχτερινή κρουαζιέρα με δείπνο (αναχώρηση 20:30)',
    nightText1: 'Αυτό είναι το εμβληματικό βράδυ της Κωνσταντινούπολης — η Γέφυρα του Βοσπόρου να εναλλάσσει χρώματα, οι όψεις των παλατιών να λάμπουν κίτρινες, οι θόλοι των τζαμιών να αντικατοπτρίζονται στο μαύρο νερό. Η επιβίβαση ξεκινά στις 19:30, η αναχώρηση είναι ακριβώς στις 20:30, η επιστροφή είναι γύρω στις 23:30. Το πρόγραμμα ψυχαγωγίας είναι στο πληρέστερο: εναρκτήρια εμφάνιση Μεβλανά με τους περιστρεφόμενους δερβίσηδες, πέντε παραδοσιακούς τουρκικούς λαϊκούς χορούς, χορό της κοιλιάς, ζωντανούς μουσικούς και ένα σετ DJ που κρατά το κατάστρωμα ζωντανό μέχρι την προσάραξη.',
    nightText2: 'Η νυχτερινή κρουαζιέρα ταιριάζει σε ραντεβού, εορτασμούς επετείων, ομάδες που αναζητούν την πλήρη εμπειρία και ταξιδιώτες που θέλουν τις πιο φωτογενείς βραδινές θέες που έχει να προσφέρει η Κωνσταντινούπολη. Ο συμβιβασμός: ξεκινάτε αργότερα και τελειώνετε αργά, που μπορεί να είναι δύσκολο μετά από μια γεμάτη μέρα περιήγησης.',
    h3_both: 'Μπορείτε να κάνετε και τις δύο;',
    bothText: 'Ναι — και πολλοί ταξιδιώτες που μένουν τρεις ή περισσότερες νύχτες κάνουν ακριβώς αυτό. Οι δύο κρουαζιέρες είναι πραγματικά διαφορετικές εμπειρίες, όχι περιττές. Μια κρουαζιέρα δύσης το πρώτο σας βράδυ και μια κρουαζιέρα δείπνου αργότερα στο ταξίδι σας δίνει δύο ξεχωριστές αναμνήσεις από την ίδια υδάτινη οδό. Η διαδρομή είναι η ίδια, αλλά το φως, η διάθεση και το πρόγραμμα ψυχαγωγίας είναι αρκετά διαφορετικά ώστε να μην αισθάνεται επαναλαμβανόμενο.',
    h2_advance: 'Πόσο νωρίτερα πρέπει να κλείσετε;',
    advanceIntro: 'Εδώ οι περισσότεροι ταξιδιώτες είτε προετοιμάζονται υπερβολικά είτε πιάνονται την τελευταία στιγμή. Δείτε μια πρακτική ανάλυση:',
    bullet1: '<strong>Καθημερινές, χαμηλή σεζόν (Νοε–Μαρ):</strong> Η κράτηση ίδιας ημέρας είναι εντάξει. Πολλοί διαχειριστές έχουν διαθεσιμότητα μέχρι αργά το απόγευμα.',
    bullet2: '<strong>Καθημερινές, μέση σεζόν (Απρ, Μαι, Σεπ, Οκτ):</strong> Κλείστε μια μέρα νωρίτερα για να εξασφαλίσετε προτιμώμενες θέσεις.',
    bullet3: '<strong>Καθημερινές, υψηλή σεζόν (Ιουν–Αυγ):</strong> Κλείστε δύο έως τρεις μέρες νωρίτερα.',
    bullet4: '<strong>Σαββατοκύριακα, κάθε σεζόν:</strong> Κλείστε τουλάχιστον τρεις μέρες νωρίτερα. Τα Σαββατόβραδα είναι τα πιο πολυσύχναστα.',
    bullet5: '<strong>Διακοπές και ειδικές ημερομηνίες:</strong> Κλείστε μία έως τρεις εβδομάδες νωρίτερα (δείτε τη λίστα παραπάνω).',
    advanceFooter: 'Μια σημαντική λεπτομέρεια: η ώρα κράτησης έχει μεγαλύτερη σημασία από την ημερομηνία στο ημερολόγιο. Οι διαχειριστές στην Κωνσταντινούπολη συνήθως σταματούν να δέχονται κρατήσεις ίδιας μέρας μία έως δύο ώρες πριν την αναχώρηση (γύρω στις 19:30 για νυχτερινές κρουαζιέρες). Μετά από αυτό, ακόμη και αν υπάρχουν άδειες θέσεις, η κουζίνα έχει οριστικοποιήσει μερίδες και η λίστα επιβατών είναι κλειδωμένη.',
    h2_sameday: 'Κράτηση ίδιας ημέρας — πότε δουλεύει, πότε όχι',
    samedayText1: 'Αν αποφασίσετε να κάνετε μια κρουαζιέρα στον Βόσπορο την ίδια μέρα, οι πιθανότητές σας εξαρτώνται σε μεγάλο βαθμό από τρεις παράγοντες: την ημέρα της εβδομάδας, την εποχή και την ώρα που κάνετε το αίτημα. Μια Τρίτη τον Φεβρουάριο που ζητηθεί στις 14:00 είναι σχεδόν βέβαιο ότι θα βρει θέσεις. Ένα Σάββατο τον Ιούλιο που ζητηθεί στις 17:00 μπορεί ήδη να έχει εξαντληθεί.',
    samedayText2: 'Το WhatsApp είναι ο γρηγορότερος τρόπος ελέγχου διαθεσιμότητας ίδιας ημέρας — οι περισσότεροι διαχειριστές απαντούν εντός λεπτών. Αποφύγετε πλατφόρμες τρίτων για κρατήσεις ίδιας ημέρας· συνήθως έχουν καθυστέρηση μιας ή δύο ωρών για επιβεβαίωση, μέχρι την οποία η κρουαζιέρα έχει συχνά ήδη αναχωρήσει.',
    h2_pricing: 'Τιμολόγηση και μοτίβα ζήτησης',
    pricingText1: 'Οι τιμές απευθείας κράτησης για την τυπική κρουαζιέρα δείπνου στον Βόσπορο είναι εντυπωσιακά σταθερές κατά τη διάρκεια του έτους — συνήθως €24 έως €30 ανά άτομο ανάλογα με τον διαχειριστή. Αυτό που αλλάζει είναι η διαθεσιμότητα, όχι η αναφερόμενη τιμή. Πλατφόρμες τρίτων (Viator, GetYourGuide, Klook) φουσκώνουν τις τιμές σε €50 έως €100 και χρεώνουν τις υψηλότερες προσαυξήσεις σε ημέρες αιχμής, γι\' αυτό η απευθείας κράτηση σας εξοικονομεί τα περισσότερα ακριβώς όταν τη χρειάζεστε περισσότερο.',
    pricingText2: 'Μια παγίδα προς αποφυγή: προπληρωμή σε πλατφόρμες τρίτων κατά την υψηλή σεζόν. Αν η πτήση σας καθυστερήσει ή αλλάξετε γνώμη, η επιστροφή χρημάτων είναι αργή και συχνά μερική. Η απευθείας κράτηση με πληρωμή στο σκάφος σημαίνει μηδενική οικονομική έκθεση μέχρι να επιβιβαστείτε.',
    h2_recommendation: 'Μια πρακτική σύσταση',
    recommendationText1: 'Αν θέλετε την πιο αξιόπιστη μοναδική απάντηση: <strong>κλείστε μια νυχτερινή κρουαζιέρα με δείπνο για μια καθημερινή βραδιά Μαΐου ή Σεπτεμβρίου, δύο μέρες νωρίτερα, απευθείας με έναν διαχειριστή με άδεια TÜRSAB που δέχεται πληρωμή στο σκάφος</strong>. Θα έχετε καλό καιρό, διαχειρίσιμα πλήθη, το πλήρες πρόγραμμα ψυχαγωγίας, δίκαιες τιμές και κανέναν κίνδυνο προπληρωμής. Η Bosphorus Night εκτελεί καθημερινές αναχωρήσεις στις 20:30 από τον λιμενίσκο Kabataş με ακριβώς αυτό το μοντέλο — αδειοδοτημένη (A-17672), πληρωμή στο σκάφος, δωρεάν ακύρωση μέχρι δύο ώρες πριν, και βαθμολογία 4,8 αστέρων σε περισσότερες από 11.000 κριτικές ταξιδιωτών.',
    recommendationText2: 'Όποιον μήνα ή ώρα κι αν επιλέξετε, ο Βόσπορος ανταμείβει σχεδόν κάθε χρονική στιγμή. Το στενό έχει έναν τρόπο να φαίνεται μαγικό από κάθε γωνία, σε κάθε εποχή, σε κάθε φως. Η "καλύτερη ώρα" είναι όποτε μπορείτε να είστε εκεί με κάποιον που έχει σημασία για εσάς.',
    ctaTitle: 'Έτοιμοι να δείτε την Κωνσταντινούπολη από το νερό;',
    ctaText: 'Μετά από όλο τον σχεδιασμό, τελειώστε τη μέρα σας με τη πιο εμβληματική εμπειρία της πόλης — μια κρουαζιέρα δείπνου στον Βόσπορο με ζωντανή μουσική, παραστάσεις χορού και θέες δύο ηπείρων να ανάβουν γύρω σας.',
    ctaButton: 'Κλείστε την κρουαζιέρα σας — από €24,30',
    relatedTitle: 'Σχετικά άρθρα',
    related1Title: 'Καλύτερη Κρουαζιέρα Δείπνου στον Βόσπορο στην Κωνσταντινούπολη 2026',
    related1Blurb: 'Πλήρης οδηγός για πακέτα, τιμολόγηση και τι να περιμένετε.',
    related2Title: 'Κρουαζιέρα Δύσης Ηλίου στον Βόσπορο — τι να περιμένετε',
    related2Blurb: 'Χρυσή ώρα πάνω από το νερό, πλήρης οδηγός.',
    related3Title: 'Κρουαζιέρα στον Βόσπορο απόψε — οδηγός τελευταίας στιγμής',
    related3Blurb: 'Κλείστε κρουαζιέρα ίδιας ημέρας με άμεση επιβεβαίωση WhatsApp.',
    related4Title: '10 πράγματα που πρέπει να γνωρίζετε πριν την πλοιάρια Κωνσταντινούπολη',
    related4Blurb: 'Βασικές συμβουλές για πρώτη φορά κρουαζιερόπλοους Βοσπόρου.',
    backToBlog: '← Πίσω στο Blog',
    blogLink: 'Blog', homeLink: 'Αρχική',
    footerCopy: '© 2026 Bosphorus Night. Όλα τα δικαιώματα διατηρούνται.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Είμαστε online · Συνομιλήστε τώρα', floatingWaAria: 'Συνομιλία WhatsApp',
    waMsg: 'Γεια!%20Θα%20ήθελα%20να%20ρωτήσω%20για%20την%20κρουαζιέρα%20Bosphorus%20Night.',
  },
};

// Load remaining 9 langs from the separate data files
for (const lang of ['fi', 'hu', 'lv', 'nl', 'no', 'pt', 'sk', 'sl', 'sv']) {
  T[lang] = require(`./blog-i18n-data-best-time/${lang}.js`);
}

// ========================================================================
// HTML TEMPLATE
// ========================================================================
function render(lang, t) {
  const langPath = lang === 'en' ? '' : `/${lang}`;
  const canonical = `https://www.bosphorusnight.com${langPath}/blog/best-time-bosphorus-cruise`;
  const escAttr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

  // Hreflang: 32 langs (we'll inject the standard block including all 12 new langs since they're now being built)
  const ALL_LANGS = ['en','ar','bg','cs','da','de','el','es','fa','fi','fr','hi','hu','id','it','ja','ko','lv','ms','nl','no','pl','pt','ro','ru','sk','sl','sv','tr','uk','ur','zh'];
  const hreflangLines = ALL_LANGS.map(l => {
    const p = l === 'en' ? '' : `/${l}`;
    return `  <link rel="alternate" hreflang="${l}" href="https://www.bosphorusnight.com${p}/blog/best-time-bosphorus-cruise">`;
  }).join('\n');
  const xDefault = `  <link rel="alternate" hreflang="x-default" href="https://www.bosphorusnight.com/blog/best-time-bosphorus-cruise">`;

  return `<!DOCTYPE html>
<html lang="${t.htmlLang}"${t.dir === 'rtl' ? ' dir="rtl"' : ''}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/assets/data/favicon.png?v=5" type="image/png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/data/favicon.png?v=5">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/data/favicon.png?v=5">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/data/favicon.png?v=5">
  <title>${t.title}</title>
  <meta name="description" content="${escAttr(t.metaDesc)}">
  <meta property="og:title" content="${escAttr(t.title)}">
  <meta property="og:description" content="${escAttr(t.metaDesc)}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.bosphorusnight.com/assets/data/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="article:published_time" content="2026-05-17">
${hreflangLines}
${xDefault}
  <link rel="canonical" href="${canonical}">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${escAttr(t.title)}",
    "description": "${escAttr(t.metaDesc)}",
    "image": "https://www.bosphorusnight.com/assets/tours/dinner/boat-night-bridge.jpg",
    "datePublished": "2026-05-17T00:00:00+03:00",
    "dateModified": "2026-05-17T00:00:00+03:00",
    "inLanguage": "${t.htmlLang}",
    "author": { "@type": "Organization", "name": "Bosphorus Night", "url": "https://www.bosphorusnight.com" },
    "publisher": {
      "@type": "Organization",
      "name": "Bosphorus Night",
      "logo": { "@type": "ImageObject", "url": "https://www.bosphorusnight.com/assets/data/logo png lst.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${canonical}" }
  }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { theme: { extend: { colors: { 'navy-dark':'#0b1120','navy':'#101a30','navy-light':'#152240','gold':'#c9a84c','gold-light':'#d4b86a' } } } }
  </script>
  <!-- Google tag (gtag.js) — GA4 + Google Ads -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-P09XEBMNWE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-P09XEBMNWE');
    gtag('config', 'AW-18073952031');
  </script>
  <style>body { font-family: 'Inter', sans-serif; }</style>
</head>
<body class="bg-[#0b1120] text-white min-h-screen">

  <header class="bg-[#0b1120]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/${lang}/" class="flex items-center overflow-visible" dir="ltr"><img src="/assets/data/bn lg.png" alt="Bosphorus Night" class="h-[150px] lg:h-[180px] w-auto max-w-none -ml-2 mt-1"></a>
      <div class="flex gap-4">
        <a href="/${lang}/blog/" class="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">${t.blogLink}</a>
        <a href="/${lang}/" class="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">${t.homeLink}</a>
      </div>
    </div>
  </header>

  <main class="max-w-3xl mx-auto px-4 py-12">
    <a href="/${lang}/blog/" class="text-[#c9a84c] text-sm hover:underline">${t.backToBlog}</a>

    <article class="mt-8">
      <time class="text-white/30 text-xs uppercase tracking-wider">${t.date}</time>
      <h1 style="font-family:'Playfair Display',serif" class="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">${t.h1}</h1>

      <img src="/assets/tours/dinner/boat-night-bridge.jpg" alt="${escAttr(t.ogImageAlt)}" class="w-full rounded-2xl mb-8 aspect-[16/9] object-cover">

      <div class="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-6 text-[15px]">

        <p>${t.intro}</p>

        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${t.h2_yearly}</h2>
        <p>${t.yearlyIntro}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_spring}</h3>
        <p>${t.springText}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_summer}</h3>
        <p>${t.summerText}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_autumn}</h3>
        <p>${t.autumnText}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_winter}</h3>
        <p>${t.winterText}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_holidays}</h3>
        <p>${t.holidaysText}</p>

        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${t.h2_daily}</h2>
        <p>${t.dailyIntro}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_sunset}</h3>
        <p>${t.sunsetText1}</p>
        <p>${t.sunsetText2}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_night}</h3>
        <p>${t.nightText1}</p>
        <p>${t.nightText2}</p>

        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-2">${t.h3_both}</h3>
        <p>${t.bothText}</p>

        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${t.h2_advance}</h2>
        <p>${t.advanceIntro}</p>

        <ul class="list-disc pl-6 space-y-2">
          <li>${t.bullet1}</li>
          <li>${t.bullet2}</li>
          <li>${t.bullet3}</li>
          <li>${t.bullet4}</li>
          <li>${t.bullet5}</li>
        </ul>

        <p>${t.advanceFooter}</p>

        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${t.h2_sameday}</h2>
        <p>${t.samedayText1}</p>
        <p>${t.samedayText2}</p>

        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${t.h2_pricing}</h2>
        <p>${t.pricingText1}</p>
        <p>${t.pricingText2}</p>

        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${t.h2_recommendation}</h2>
        <p>${t.recommendationText1}</p>
        <p>${t.recommendationText2}</p>

      </div>

      <!-- CTA -->
      <div class="mt-12 max-w-3xl mx-auto text-center bg-gradient-to-br from-[#152240] to-[#101a30] border border-[#c9a84c]/20 rounded-2xl p-10">
        <h3 style="font-family:'Playfair Display',serif" class="text-2xl md:text-3xl font-bold text-white mb-4">${t.ctaTitle}</h3>
        <p class="text-white/60 mb-8">${t.ctaText}</p>
        <a href="/${lang}/" class="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b86a] text-[#0b1120] font-semibold px-8 py-3 rounded-full transition-colors">
          ${t.ctaButton}
          <span>&rarr;</span>
        </a>
      </div>

      <!-- Related Articles -->
      <div class="mt-16">
        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mb-6">${t.relatedTitle}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/${lang}/blog/best-bosphorus-dinner-cruise-istanbul" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${t.related1Title}</h4>
            <p class="text-white/40 text-xs">${t.related1Blurb}</p>
          </a>
          <a href="/${lang}/blog/bosphorus-sunset-cruise-guide" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${t.related2Title}</h4>
            <p class="text-white/40 text-xs">${t.related2Blurb}</p>
          </a>
          <a href="/${lang}/blog/istanbul-cruise-tonight-last-minute" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${t.related3Title}</h4>
            <p class="text-white/40 text-xs">${t.related3Blurb}</p>
          </a>
          <a href="/${lang}/blog/things-to-know-istanbul-boat-tour" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${t.related4Title}</h4>
            <p class="text-white/40 text-xs">${t.related4Blurb}</p>
          </a>
        </div>
      </div>

    </article>
  </main>

  <footer class="border-t border-white/5 py-8 text-center mt-16">
    <p class="text-white/30 text-sm">${t.footerCopy}</p>
    <p class="text-white/15 text-xs mt-2">${t.footerLegal}</p>
  </footer>

  <a id="floatingWhatsapp"
     href="https://wa.me/905322442922?text=${t.waMsg}"
     target="_blank" rel="noopener"
     aria-label="${escAttr(t.floatingWaAria)}"
     class="group fixed left-12 bottom-20 lg:bottom-6 z-[54] inline-flex items-center pl-11 pr-4 py-1.5 rounded-full border border-[#25D366]/60 bg-[#0a0f1e]/70 backdrop-blur-md hover:border-[#25D366] hover:bg-[#0a0f1e]/90 shadow-lg shadow-black/20 transition-all duration-300">
    <svg class="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#25D366" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
      <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    <span class="text-white text-xs font-semibold whitespace-nowrap">${t.floatingWaText}</span>
    <span class="relative flex w-2 h-2 flex-shrink-0 ml-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
    </span>
  </a>
</body>
</html>`;
}

// ========================================================================
// MAIN
// ========================================================================
let written = 0;
for (const lang of Object.keys(T)) {
  const t = T[lang];
  const dir = path.join(OUT_ROOT, lang);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, 'best-time-bosphorus-cruise.html');
  fs.writeFileSync(filePath, render(lang, t), 'utf8');
  console.log(`  ✓ ${lang}/best-time-bosphorus-cruise.html`);
  written++;
}
console.log(`\n✅ Wrote ${written} files.`);
