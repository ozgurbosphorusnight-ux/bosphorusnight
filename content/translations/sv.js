/**
 * Swedish translations for all 17 landing pages.
 * Mirror of ro.js structure. Modern Swedish "du" form.
 * "Bosphorus" → "Bosporen". Brand → "Bosporen om natten" / "kvällskryssning på Bosporen".
 * Turkish place names unchanged with diacritics.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Middagskryssning på Bosporen från €{p.dinnerStd} — Kvällstur Istanbul + Show',
      description: 'Middagskryssning 3 timmar på Bosporen: turkisk flerrättersmeny och folkloreshow live. Avgång 20:30 från Kabataş. Gratis avbokning, betalning ombord.'
    },
    hero: {
      h1: 'Middagskryssning på Bosporen i Istanbul',
      subtitle: 'Tre timmar live underhållning, en generös turkisk flerrättersmiddag och de mest imponerande nattvyerna över Bosporen.',
      badge: '4,8★ · 11.317 recensioner'
    },
    intro: [
      '**Middagskryssningen på Bosporen** är Istanbuls mest ikoniska kvällsupplevelse. Vår tur avgår 19:30 från Kabataş-bryggan och seglar under de upplysta broarna Bosporen och Fatih Sultan Mehmet, och bjuder dig på en turkisk flerrättersmiddag, livefolkdans, orientalisk dans och ett DJ-set som håller däcket levande fram till 23:00.',
      'Till skillnad från de vanliga turistbåtarna som fyller Istanbuls nattlandskap är **vår middagskryssning på Bosporen** licensierad av TÜRSAB (A-17672) och betygsatt 4,8★ av över 11.317 resenärer. Vi håller grupperna små och servicen varm — och eftersom du betalar ombord finns ingen risk att boka i förväg.',
      'Oavsett om du firar en födelsedag, söker en premiumkväll i Istanbul för din familj eller vill ha stadens mest fotogeniska övergång från solnedgång till natt — detta är middagskryssningen som främst rekommenderas av Istanbuls invånare.'
    ],
    highlights: [
      { title: 'Turkisk flerrättersmiddag', desc: '10 varianter kalla mezzer, varm förrätt (paçanga böreği), val av huvudrätt (lax / havsabborre / kyckling / köttbullar / vegetariskt), glasstårta som dessert, obegränsade läsk.' },
      { title: 'Livefolkdans, orientalisk dans och DJ', desc: 'Mevlana sema-föreställning, 5 traditionella turkiska folkdanser, klassisk orientalisk dans, live turkiska musiker, följt av ett DJ-set under hela kryssningen.' },
      { title: 'Komplett nattrutt på Bosporen', desc: 'Kabataş → Dolmabahçe → Çırağan-palatset → Ortaköy-moskén → Bebek → Rumeli Hisarı → FSM-bron → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Från €{p.dinnerStd}/person — betalning ombord', desc: 'Standardkryssning €{p.dinnerStd} (tidigare €{p.dinnerStdOriginal}). VIP-kryssning med plats framför scenen och premiummeny €{p.dinnerVip}. Ingen förskottsbetalning. Gratis avbokning fram till 2 timmar före avgång.' }
    ],
    faq: [
      { q: 'När börjar middagskryssningen på Bosporen?', a: 'Ombordstigning börjar 19:30 vid Kabataş-bryggan. Båten avgår 20:30 och återvänder runt 23:30. Vi rekommenderar att komma 15-20 minuter tidigare för att installera dig och slappna av.' },
      { q: 'Vad kostar middagskryssningen på Bosporen?', a: 'Standardkryssning €{p.dinnerStd}/person (normalt pris €{p.dinnerStdOriginal}). VIP-kryssning med plats framför scenen och premiummeny €{p.dinnerVip}/person. 0-3 år gratis, 4-8 år 50% rabatt. Betalning ombord — ingen förskottsbetalning.' },
      { q: 'Är alkohol inkluderad i middagskryssningen?', a: 'Obegränsade läsk (vatten, cola, juice) ingår i priset. Alkoholpaket är valfria: 2 glas +€{p.alcohol2}/person eller obegränsad lokal alkohol (vin, öl, rakı, vodka, gin) +€{p.unlimited}/person. Importerade drycker faktureras separat ombord.' },
      { q: 'Finns hotelltransfer?', a: 'Ja — hämtnings- och återlämningstjänst är +€{p.transfer}/person. Betjänade zoner: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane och Sütlüce. Du kan välja detta alternativ i bokningsformuläret.' },
      { q: 'Är middagskryssningen på Bosporen halal?', a: 'Absolut. Allt kött som serveras ombord är halal-certifierat. Alkohol är ett valfritt tillägg (aldrig påtvingat gäster), och bordsuppställningen separerar naturligt gäster som föredrar en alkoholfri måltid. Vi erbjuder också vegetariska alternativ utan extra kostnad.' },
      { q: 'Hur ska jag klä mig?', a: 'Smart casual klädsel. Kvällar i Istanbul kan vara svala även på sommaren — vi rekommenderar en lätt jacka eller en sjal. Det finns ingen obligatorisk klädkod, men baddräkter, flipflops eller sportkläder passar inte middagsstämningen.' }
    ],
    cta: {
      primary: 'Boka Nu · Betalning Ombord',
      secondary: 'Gratis avbokning fram till 2 timmar före avgång',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosporen med Barn — Familjekryssning från €{p.dinnerStd}/vuxen',
      description: 'Middagskryssning på Bosporen familjevänlig. Barn 0-3 gratis, 4-8 halva priset. Säkert inomhusområde, barnmeny.'
    },
    hero: {
      h1: 'Bosporenkryssning med Barn',
      subtitle: 'En kväll på Bosporen designad för familjer med barn — middag, underhållning och en säker, bekväm atmosfär.',
      badge: 'Familjevänligt · Halal · 0-3 År Gratis'
    },
    intro: [
      '**Bosporenkryssningen med barn** är det mest familjevänliga kvällsalternativet i Istanbul. Vi tar emot dussintals familjer varje kväll — vi har designat varje detalj så att de minsta känner sig bekväma: täckt inomhusområde för att hålla värmen, en lättillgänglig barnmeny (enkel grillad kyckling, pasta, obegränsade läsk) och tidig ombordstigning för att undvika utbrott sent på kvällen.',
      'Till skillnad från båtar enbart för vuxna förblir **vår middagskryssning på Bosporen för familjer** varm och inkluderande. **Barn 0-3 år är gratis** (transfer ingår), 4-8 år får **50% rabatt**, 9+ år betalar fullt pris — inga dolda kostnader. Livefolkdansen, orientalisk dans och sema-föreställningen är delikat familjeunderhållning, ingen nattklubb.',
      'Oavsett om du kommer till Istanbul för en förlängd helg med ditt småbarn eller tar med tonåringar på deras första europeiska resa — detta är turen som rekommenderas av familjer i Istanbul. Säker, halal-certifierad, licensierad av TÜRSAB och betygsatt 4,8★ av över 11.317 resenärer.'
    ],
    highlights: [
      { title: '0-3 år helt gratis', desc: 'Inga avgifter för bebisar och småbarn. 4-8 år betalar 50% av vuxenpriset. Från 9 år gäst med fullt pris. Transparent, inga överraskningar.' },
      { title: 'Täckt inomhusområde', desc: 'Helt täckt och uppvärmt under kalla månader. Barnen håller sig varma, skyddade från vinden. Det öppna däcket är också tillgängligt när vädret är fint — valet är ditt.' },
      { title: 'Barnmeny på begäran', desc: 'Enkel grillad kyckling, pasta, bröd och grönsaker — utan extra kostnad. Obegränsade läsk (cola, juice, vatten). Meddela oss i förväg — inga överraskningar med kryddiga mezzer för de minsta.' },
      { title: 'Säker familjeunderhållning', desc: 'Sema-föreställning (fascinerande för barn), 5 traditionella folkdanser, live turkisk musik och DJ-set. Allt är familjevänligt — inget vuxeninnehåll. Barnen ansluter sig ofta till dansen.' }
    ],
    faq: [
      { q: 'Är Bosporenkryssningen säker för små barn?', a: 'Ja — vår båt är licensierad av TÜRSAB, har ett täckt inomhusområde med säkra fönster, flytvästar i alla storlekar tillgängliga och en professionell besättning med familjeerfarenhet. Vi rekommenderar inomhusdäcket för små barn och det öppna däcket för 6+ år.' },
      { q: 'Vad är priset för barn på Bosporenkryssningen?', a: 'Barn **0-3 år: GRATIS** (inga avgifter, inga dolda kostnader). **4-8 år: 50% rabatt** på vuxenpriset — det vill säga €12/barn på Standard (€{p.dinnerStd}/2). **9+ år: fullt vuxenpris.** Hotelltransfer är gratis för 0-3 år, standard för 4+ (€{p.transfer}/person).' },
      { q: 'Finns det en barnmeny ombord?', a: 'Ja — enkel grillad kyckling, pasta, bröd, säsongsgrönsaker och obegränsade läsk. Berätta för oss om allergier eller kostpreferenser vid bokning och vi förbereder något ditt barn äter med glädje.' },
      { q: 'Är musiken eller showen för hög för barn?', a: 'Live-showerna äger rum i ett område av scenen — om dina barn är ljudkänsliga sätter vi er vid ett tystare bord längst bak. Showen varar totalt 40 minuter, resten av kvällen är turkisk bakgrundsmusik och DJ på måttlig volym.' },
      { q: 'Vad händer om bebisen somnar under kryssningen?', a: 'Inget problem — många somnar. Inomhusområdet har soffor där en bebis eller liten barn kan sova bekvämt. Be besättningen om en varm filt vid behov. Inga extra kostnader.' },
      { q: 'Ska jag ta med barnvagnen ombord?', a: 'Du kan, men vi rekommenderar att lämna den stora barnvagnen på hotellet (eller hos vår chaufför om du har bokat transfer — vi förvarar den säkert). Vår båt har smala korridorer och däck med trappor. En lätt bärsele är bekvämare ombord.' }
    ],
    cta: {
      primary: 'Boka Familjekryssningen · Betalning Ombord',
      secondary: 'Gratis avbokning fram till 2 timmar före · Ingen förskottsbetalning',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantisk Bosporenkryssning från €{p.dinnerStd} — Middag vid Levande Ljus',
      description: 'Romantisk Bosporenkryssning: bord vid levande ljus, rosor, flerrättersmiddag under upplysta broar. Från €{p.dinnerStd}/person. Gratis avbokning, betalning ombord.'
    },
    hero: {
      h1: 'Romantisk Bosporenkryssning',
      subtitle: 'Middag vid levande ljus, bord pryddet med rosor, upplysta broar och ett speciellt ögonblick bara för dig under Istanbuls mest ikoniska natthimmel.',
      badge: 'Bröllopsdag · Smekmånad · Speciell Kväll'
    },
    intro: [
      '**Den romantiska Bosporenkryssningen** är den mest ikoniska kvällen för par i Istanbul. Medan solen går ner över Dolmabahçe-palatset och Bosporenbron tänds i färger delar du och din partner en turkisk flerrättersmiddag vid ett privat bord — med ljus, färska blommor och liveviolin som svävar över däcket.',
      'Vår romantiska borduppställning (+€{p.romantic}/bord) förvandlar varje plats till ett speciellt ögonblick: röda rosor, glödande ljus, en handskriven välkomstlapp. Lägg till det obegränsade alkoholpaketet för vin under stjärnorna (+€{p.unlimited}/person) eller håll det enkelt med de inkluderade läsken. Oavsett val tar besättningen diskret hand om resten.',
      'Oavsett om du firar en bröllopsdag, planerar en överraskning till din partner eller bara vill ha en oförglömlig kväll i Europas mest romantiska stad — detta är turen som föredras av par i Istanbul. Betyg 4,8★, licensierad av TÜRSAB och — viktigast — betalning ombord, så du lovar bara själva kvällen.'
    ],
    highlights: [
      { title: 'Romantiskt bord vid levande ljus', desc: 'Lägg till den romantiska borduppställningen med +€{p.romantic}/bord: färska röda rosor, glödande ljus, rosenblad på duken och handskrivet kort. Foton inkluderade.' },
      { title: 'De bästa borden för övergången solnedgång-till-natt', desc: 'Fönsterborden är reserverade för par. Se Bosporenbron tändas, Jungfrutornet lysa och Ortaköy-moskén bli upplyst från ditt privata bord.' },
      { title: 'Liveviolin och intim atmosfär', desc: 'Liveviolin och akustisk turkisk musik under middagen skapar en långsam, romantisk atmosfär. Sedan kommer DJ:n, och par dansar på det öppna däcket under ljusen.' },
      { title: 'Vin, champagne, premiumkombinationer', desc: 'Lägg till 2 glas alkohol (+€{p.alcohol2}/person) eller obegränsat lokalt vin, öl, rakı (+€{p.unlimited}/person). Importerad champagne och premiumkombinationer på begäran — fråga vid bokning.' }
    ],
    faq: [
      { q: 'Vad gör denna kryssning romantisk?', a: 'Kombinationen av privat bord, ljusuppställning (valfri +€{p.romantic}), turkisk flerrättersmiddag, liveviolin och akustisk musik och Bosporens upplysta broar som passerar ovanför. Vi designar upplevelsen för par — lugn atmosfär i början, sedan energisk DJ och dans. Tempot väljer du.' },
      { q: 'Kan ni arrangera en överraskning till min partner — födelsedag, smekmånad, frieri?', a: 'Ja — berätta för oss vid bokning. Vi kan koordinera med vår personal födelsedagstårta (gratis), speciell borduppställning, handskrivet kort på ditt språk eller ta ett element till bordet vid rätt tidpunkt. För frierier rekommenderar vi att skriva direkt till oss via WhatsApp så vi kan planera diskret.' },
      { q: 'Vad kostar den romantiska kryssningen för 2 personer?', a: '2 personer Standard: 2 × €{p.dinnerStd} = €48,60. Lägg till romantiska uppställningen +€{p.romantic} = €63,60. 2 personer VIP: 2 × €{p.dinnerVip} = €110,40 + romantisk uppställning €{p.romantic} = €125,40. Ingen förskottsbetalning — betalning ombord. Obegränsad alkohol ytterligare 2 × €{p.unlimited} = €60.' },
      { q: 'Är den romantiska Bosporenkryssningen privat — bara för oss?', a: 'Nej — det är en delad kryssning med andra par och gäster (upp till 60-80 totalt). **Ditt bord** är privat (bara för din grupp), men det finns andra gäster ombord. Om du vill ha en helt privat båt för 2 personer är det en separat **Privat Bosporenkryssning** (som vi kan arrangera på begäran — skriv till oss).' },
      { q: 'Kan vi ta med egna blommor, tårta eller present?', a: 'Självklart. Ta med vad du vill — vår personal hjälper dig att diskret placera överraskningspresenten, gömma ringasken i desserten eller visa upp blommorna du tagit med. Inga extra korkavgifter. Berätta bara för oss så vi kan koordinera ögonblicket.' },
      { q: 'Vad ska vi ha på oss för en romantisk Bosporenkryssning?', a: 'Från smart casual till elegant — många par klär sig fint (klänningar, kavajer). Det finns ingen sträng klädkod, men atmosfären är mer speciell än vardaglig turism. Ta med en lätt jacka eller sjal — däcket kan vara svalt även på sommaren. Bekväma skor om du planerar att dansa efter middagen.' }
    ],
    cta: {
      primary: 'Boka den Romantiska Kryssningen · Betalning Ombord',
      secondary: 'Lägg till romantisk borduppställning (+€{p.romantic}) i bokningsformuläret · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Middagskryssning Bosporen från €{p.dinnerStd} — Show + Kvällstur',
      description: 'Middagskryssning 3 timmar på Bosporen: live folkloreshow, upplysta broar, Bosporenpanorama på natten. Halalmeny tillgänglig på begäran.'
    },
    hero: {
      h1: 'Halal Bosporenkryssning i Istanbul',
      subtitle: '100% halal-certifierad meny, alkohol alltid valfri, familjevänlig underhållning och respektfull atmosfär för muslimska resenärer — kvällen på Bosporen, korrekt gjord.',
      badge: '100% Halal · Familjevänligt · Muslimsk Ägare'
    },
    intro: [
      '**Halal Bosporenkryssningen** är den mest respektfulla middagskryssningen i Istanbul för muslimska resenärer. Allt kött som serveras på vår båt — lax, havsabborre, kyckling, lammköttbullar, oxfilé, ribeye — är **halal-certifierat** från godkända leverantörer. Vi serverar samma meny till varje gäst; ingen separat "halal-sektion", eftersom hela båten är halal som standard.',
      'Alkohol är **ett valfritt tillägg** — aldrig påtvingat gäster, och bordsuppställningen separerar naturligt gäster som föredrar en alkoholfri måltid. För gäster som vill ha det obegränsade alkoholpaketet (+€{p.unlimited}/person) finns det där, men de inkluderade obegränsade läsken (vatten, cola, juice) räcker för de flesta muslimska familjer. Vår besättning är utbildad att respektera dina preferenser utan antaganden.',
      '**Den halal-vänliga Bosporenkryssningen** är viktig för resenärer från Saudiarabien, FAE, Kuwait, Qatar, Iran, Malaysia, Indonesien, Pakistan och Marocko som vill ha Istanbuls mest ikoniska kväll utan kompromisser. Licensierad av TÜRSAB, 4,8★ och betalning ombord — lova inget förrän du är säker på att upplevelsen uppfyller dina standarder.'
    ],
    highlights: [
      { title: '100% halal-certifierad meny', desc: 'Allt kött (lax, havsabborre, kyckling, köttbullar, nötkött, ribeye) är halal-certifierat från godkända leverantörer. Köket följer halal-beredning. Inga fläskprodukter eller icke-halal-tillsatser. Vegetariska alternativ är alltid tillgängliga.' },
      { title: 'Alkohol valfri, aldrig påtvingad', desc: 'Alkoholpaket är tillägg — inte inkluderade som standard. Läsk (vatten, cola, juice) är obegränsade och gratis. Ditt bord förblir alkoholfritt om du inte uttryckligen ber om det. Besättningen respekterar tyst ditt val.' },
      { title: 'Familjevänlig underhållning', desc: 'Sema-föreställning, traditionella turkiska folkdanser, live turkisk musik. Inga nattklubbsliknande shower, inget olämpligt innehåll. Säker för barn, respektfull för familjer. Orientalisk dans är en traditionell konstform, presenterad med blygsamhet.' },
      { title: 'Respekt för bönetider', desc: 'Om ombordstigning sammanfaller med maghrib eller isha (19:30-20:30) kan vår personal vägleda dig till den tysta bönezonen vid Kabataş-bryggan före avgång. Berätta bara för oss vid bokning.' }
    ],
    faq: [
      { q: 'Är Bosporenkryssningen 100% halal?', a: 'Ja — varje köttprodukt i menyn (fisk, kyckling, köttbullar, oxfilé, ribeye, lamm) är halal-certifierad från godkända leverantörer. Köket följer halal-beredningsstandarder. Fläsk serveras ingenstans ombord. Det är inte ett "halal-alternativ" — hela menyn är halal.' },
      { q: 'Dricker andra gäster ombord alkohol?', a: 'Vissa gäster lägger till det valfria alkoholpaketet (+€{p.unlimited}/person). Borden är naturligt separerade — du kan be om en alkoholfri zon. Besättningen tar inte med alkohol om det inte är specifikt beställt av en gäst. Läsk (obegränsat) är inkluderade för alla.' },
      { q: 'Är denna kryssning lämplig för muslimska familjer med barn?', a: 'Ja — det är en av de mest respekterade kryssningarna för familjer i Istanbul. Underhållningen är blygsam (folkdanser, sema, turkisk musik), barn under 3 år är gratis, 4-8 år får 50% rabatt. Ingen nattklubbsatmosfär. Familjer från Gulfen, Indonesien, Malaysia, Pakistan och Marocko bokar regelbundet denna kryssning.' },
      { q: 'Kan jag be ombord?', a: 'Det finns inget dedikerat bönerum ombord, men vi rekommenderar att be före ombordstigning 19:30 (maghrib-bönen sammanfaller ofta med detta tidsintervall). Kabataş-bryggan har bönefaciliteter. Om du behöver be under seglingen 20:30-23:30 (isha), prata med besättningen — vi kan arrangera ett tyst hörn på däcket.' },
      { q: 'Vad är priserna för en muslimsk familj på 4 personer (2 vuxna, 2 barn)?', a: 'Standardkryssning: 2 × €{p.dinnerStd} + 2 × €12 (halva priset 4-8 år) = €72,60. Om barnen är under 3 år, gratis: 2 × €{p.dinnerStd} = €48,60. Lägg till €{p.transfer} hotelltransfer per vuxen. Totalt: €48-92 för familjen på 4, ingen förskottsbetalning, betalning ombord.' },
      { q: 'Är hotelltransfern också halal?', a: 'Hotelltransfern är bara en bilfärd — ingen mat eller dryck inblandad, så ingen halal-oro. Våra chaufförer är professionella, respektfulla och punktliga. Transferzonerna täcker Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih och 8 andra centrala stadsdelar där muslimska resenärer vanligtvis bor.' }
    ],
    cta: {
      primary: 'Boka Halal Kryssningen · Betalning Ombord',
      secondary: 'Gratis avbokning 2 timmar före · Ingen förskottsbetalning · Halal-certifierad',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'VIP Bosporenkryssning från €{p.dinnerVip} — Premiummiddag, VIP-plats',
      description: 'VIP middagskryssning på Bosporen: premiummezzer, biffalternativ, bord framför scenen, prioriterad service. Tidigare €{p.dinnerVipOriginal}, nu €{p.dinnerVip}.'
    },
    hero: {
      h1: 'VIP Bosporenkryssning',
      subtitle: 'Platser framför scenen, premium turkisk meny med biffalternativ och prioriterad service — en kväll på Bosporen på högre nivå för resenärer som vill ha den bästa måltiden ombord.',
      badge: 'Mest Populärt · 40% RABATT · Platser Framtill'
    },
    intro: [
      '**VIP Bosporenkryssningen** placerar dig på de bästa platserna ombord: bord framför scenen med direkt utsikt över sema-föreställningen, folkdanserna, orientalisk dans och livemusik. Premiummenyn lägger till oxfilé och ribeye till huvudrättsvalen (istället för kyckling/lax på Standard), plus 15+ varianter av traditionella turkiska mezzer serverade som en generös uppställning.',
      '**VIP middagskryssningen på Bosporen** har utsetts till Mest Populär av våra gäster — för vid €{p.dinnerVip}/person (tidigare €{p.dinnerVipOriginal}, 40% rabatt) liknar upplevelsen mer en fine dining-restaurang än en turisttur. Privat bord, uppmärksam servitörsservice och samma spektakulära utsikter över Dolmabahçe, Ortaköy-moskén och upplysta Bosporenbron.',
      'Oavsett om du är affärsresande, firar en viktig händelse eller tänker "vi är i Istanbul en gång — låt oss göra allt rätt", är detta **VIP Bosporenkryssningen** bokad av återkommande besökare. Licensierad av TÜRSAB, 4,8★ med 11.317+ recensioner, betalning ombord, gratis avbokning fram till 2 timmar före avgång.'
    ],
    highlights: [
      { title: 'Privat bord framför scenen', desc: 'Platser reserverade direkt framför showscenen — den bästa utsikten över sema-föreställningen, folkdanserna och orientalisk dans. Ditt bord, inte delat. Fotografer älskar dessa platser.' },
      { title: '15+ mezzer + premium huvudrätter', desc: '15+ varianter turkiska mezzer serverade som traditionell uppställning. Huvudrättsval inkluderar oxfilé och ribeye (på Standard endast kyckling/lax). Samma dessert och obegränsade läsk.' },
      { title: 'Prioriterad servitörsservice', desc: 'En dedikerad servitör betjänar ditt bord först — påfyllningar, menyvägledning, koordinering av alkoholtillägg, specialönskemål. Slåss inte om uppmärksamhet i ett upptaget rum.' },
      { title: '40% RABATT — tidigare €{p.dinnerVipOriginal}, nu €{p.dinnerVip}', desc: 'Normalt pris €{p.dinnerVipOriginal}/person. Nuvarande lanseringspris €{p.dinnerVip}/person — 40% rabatt. Betalning ombord, ingen förskottsbetalning. Gratis avbokning fram till 2 timmar före avgång.' }
    ],
    faq: [
      { q: 'Vad är skillnaden mellan VIP och Standard Bosporenkryssningen?', a: 'VIP får: (1) platser framför scenen med bästa utsikten, (2) 15+ mezzer mot 10 på Standard, (3) oxfilé + ribeye tillagt till huvudrättsalternativen, (4) prioriterad servitörsservice. Samma tur på 3 timmar, samma underhållning, samma rutt. €{p.dinnerVip} mot €{p.dinnerStd}.' },
      { q: 'Är VIP-priset på €{p.dinnerVip} verkligen 40% rabatt?', a: 'Ja — det normala priset är €{p.dinnerVipOriginal}/person (kontrollera på vilken bokningssajt som helst). Vi tillämpar €{p.dinnerVip} som direkt bokningspris, med minskning av mellanhandsavgifter. Du får VIP för mindre än vad de flesta platser tar för Standard.' },
      { q: 'Är alkohol inkluderad i VIP-kryssningen?', a: 'Nej — alkohol är ett separat tillägg (precis som på Standard). 2 glas: +€{p.alcohol2}/person. Obegränsad lokal alkohol (vin, öl, rakı, vodka, gin): +€{p.unlimited}/person. Importerade premiumdrycker faktureras separat. Obegränsade läsk är inkluderade och gratis.' },
      { q: 'Kan jag uppgradera till VIP efter att jag har gått ombord på Standardbåten?', a: 'Beror på tillgänglighet — om VIP-bord är lediga, ja. Du betalar skillnaden (€{p.dinnerVip} - €{p.dinnerStd}) ombord. Men vi rekommenderar att boka VIP i förväg: de bästa platserna framför scenen går till förhandsbokningar.' },
      { q: 'Hur bokar jag VIP Bosporenkryssningen?', a: 'Använd bokningsformuläret på denna sida — välj "VIP" i Steg 1, ställ in datum, ange antal gäster, sedan kontaktuppgifter. Din förfrågan kommer via WhatsApp / Telegram och vi bekräftar direkt. Betalning ombord, inte nu.' },
      { q: 'Är VIP-kryssningen lämplig för affärsmiddagar med kunder?', a: 'Ja — VIP är det vanligaste valet för affärsmiddagar i Istanbul. Privat bord, tillräckligt tyst för samtal, imponerande meny och utsikter. Många gäster bokar VIP + obegränsad alkohol för att ta emot kunder. Halal-certifierad (bra för affärsresande från Gulfen). Berätta för oss vid bokning, vi arrangerar ett tystare VIP-bord längst bak.' }
    ],
    cta: {
      primary: 'Boka VIP · Betalning Ombord',
      secondary: 'Tidigare €{p.dinnerVipOriginal}, nu €{p.dinnerVip} · Gratis avbokning 2 timmar före',
      tertiary: 'Se Standardalternativ (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Privat Bosporenkryssning — Båtuthyrning Istanbul (25+ gäster)',
      description: 'Privat Bosporenkryssning för grupper, bröllop, företagsevenemang. Exklusiv båt, anpassad meny, flexibel varaktighet. Gratis avbokning.'
    },
    hero: {
      h1: 'Privat Bosporenkryssning',
      subtitle: 'Hyr hela båten för din grupp — familjefiranden, företagsmiddagar, födelsedagar, förlovningar, bröllop. Exklusiv användning, anpassad meny, flexibelt program.',
      badge: 'Privat Uthyrning · 25+ Gäster · Anpassad Meny'
    },
    intro: [
      '**Den privata Bosporenkryssningen** betyder att hela båten är din — inga andra gäster, inga delade bord, inget gemensamt dansgolv. Perfekt för familjeträffar, företagsmiddagar, födelsedagsfester, möhippor eller bröllopsmottagningar. Båten, besättningen, menyn, underhållningen och programmet anpassar sig till din grupp.',
      '**Vår privata Bosporenuthyrning** stödjer grupper **från 25 till 80 gäster**. Mindre grupper kan fortfarande begära den privata upplevelsen — vi erbjuder ett minimumpris som täcker båtens driftskostnader. Större grupper (bröllopsstorlek) får anpassade priser och inkluderar vanligtvis speciell dekoration, liveband, tårtservering och förlängd varaktighet (4-5 timmar istället för de 3 standard).',
      'Oavsett om du organiserar ett företagsevenemang för kunder, en 50-årsfest eller en bröllopsmottagning under Istanbuls mest ikoniska broar, är detta **den privata kryssningen som evenemangsarrangörer i Istanbul litar på**. Betyg 4,8★, licensierad av TÜRSAB, helt engelsktalande besättning och total flexibilitet — rutt, meny, musik, program.'
    ],
    highlights: [
      { title: 'Hela båten, bara för dig', desc: 'Inga andra gäster. Din grupp äger varje däck, varje bord. Ställ in din egen musik, klädkod, program. Integritet är viktigt — vi respekterar det.' },
      { title: 'Anpassad meny och dryckespaket', desc: 'Arbeta med vår kock för att anpassa menyn: specifika mezzer, huvudrättsval, beredningar anpassade till kultur eller kostbehov. Alkoholpaket, champagneglas, anpassade cocktailbarer — allt kan arrangeras.' },
      { title: 'Flexibel varaktighet och avgång', desc: 'De 3 standardtimmarna kan förlängas till 4-5 timmar. Välj dagavgång 12:00, solnedgång 17:30 eller kväll 20:30. Vill du ha en vardag istället för helg? Inget problem — vi anpassar oss till ditt program.' },
      { title: 'Anpassad dekoration, band, program', desc: 'Anpassade dekorationer (ballonger, banderoller, blomsterarrangemang), liveband istället för DJ, bröllopstårtservering, fotografkoordinering, tal — lägg till vad ditt evenemang behöver. Vi är evenemangsarrangörer, inte bara båtoperatörer.' }
    ],
    faq: [
      { q: 'Vad kostar en privat Bosporenkryssning?', a: 'För grupper 25+, vanligtvis €{p.dinnerStd}-€{p.dinnerVip}/person + båtuthyrningsavgift beroende på gruppstorlek, datum och varaktighet. Skriv till oss via WhatsApp med gruppstorlek, datum och krav — vi ger pris inom en timme. De flesta evenemang passar inom det totala intervallet €2.000-€6.000.' },
      { q: 'Vad är den minsta gruppstorleken för en privat Bosporenkryssning?', a: 'Tekniskt gör 25 gäster den privata kryssningen ekonomiskt möjlig. Mindre grupper (10-24) kan hyra privat, men betalar ett minimumpris motsvarande ~25 personer. För verkligt små grupper (2-10) överväg den vanliga Standard- eller VIP-kryssningen — ditt bord är redan privat, bara båten delas.' },
      { q: 'Kan jag arrangera ett bröllop på Bosporenkryssningen?', a: 'Ja — vi arrangerar 10-15 bröllopsmottagningar per år. Kapacitet upp till 80 för sittande middag, upp till 100 för cocktailstil. Vi koordinerar med din fotograf, bröllopsarrangör, band eller kock. Anpassad tårtservering, dansgolv för första dansen, champagneglas — allt kan arrangeras. Skriv via WhatsApp för bröllopspris.' },
      { q: 'Hur är det med företagsevenemang och teammiddagar?', a: 'Privata företagskryssningar är våra vanligaste bokningar. Företagsmiddag, kundmottagning, produktlansering, teamfirande — allt fungerar. Vi kan tillhandahålla faktura med momsuppdelning, arrangera hoteltransfers för ditt team och koordinera märkesmaterial (bordsdekorationer, banderoller) på begäran.' },
      { q: 'Kan jag ta med mitt eget liveband eller DJ istället för er underhållning?', a: 'Ja — du kan ta med ditt eget liveband, DJ, fotograf. Eller behåll vår standard (sema, folkdansare, orientalisk, DJ) och lägg till din ovanpå. Båten har PA-system och dansgolv. Berätta för oss i förväg så vi kan koordinera ljudkontrollerna.' },
      { q: 'Hur begär jag ett pris för den privata Bosporenkryssningen?', a: 'Det enklaste: skriv till oss via WhatsApp på +90 532 244 29 22 med (1) gruppstorlek, (2) önskat datum, (3) anledning (bröllop, företag, födelsedag), (4) specialkrav. Vi svarar inom en timme under kontorstid, 12 timmar på natten. Vi kan också arrangera ett videosamtal för att diskutera detaljerna.' }
    ],
    cta: {
      primary: 'WhatsApp för Anpassat Pris',
      secondary: 'Anpassad meny, grupp 25-80, flexibel varaktighet · Svar inom 1 timme',
      tertiary: 'Alternativ Standardkryssning (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosporen för Par från €{p.dinnerStd} — Romantisk Kväll Istanbul',
      description: 'Middagskryssning på Bosporen för par. Privat bord, upplysta broar, romantisk dekoration valfri. Från €{p.dinnerStd}/person.'
    },
    hero: {
      h1: 'Bosporenkryssning för Par',
      subtitle: 'En romantisk kväll på Bosporen — privat bord, livemusik, upplysta broar som passerar ovanför. Oavsett om det är din första dejt i Istanbul eller den tionde bröllopsdagen, fungerar denna kväll.',
      badge: 'Privat Bord · Livemusik · Betalning Ombord'
    },
    intro: [
      '**Bosporenkryssningen för par** är den favoritkvällen i Istanbul. Inte varje par firar en bröllopsdag — ibland är du bara i världens mest romantiska stad och vill ha en underbar kväll tillsammans. Denna kryssning erbjuder: privat bord för två, långsam turkisk flerrättersmiddag, liveviolin och akustisk musik under middagen och den upplysta Bosporenbron som passerar långsamt.',
      'Atmosfären är **varm, men inte överdrivet romantisk** — ingen obligatorisk frieri-musik, inga pinsamt koordinerade applåder för "de nygifta". Ät, drick, prata, se Istanbuls ljus. Om du vill lägga till den romantiska borduppställningen (ljus, rosor, +€{p.romantic}), utmärkt — annars är själva middagen redan speciell.',
      'Oavsett om du är i Istanbul i 3 dagar med din partner, firar en blygsam händelse eller planerar en utforskande resa för ett framtida frieri — **Bosporenkryssningen för par** ger dig 3 timmars kväll tillsammans i en av världens mest fotograferade städer. 4,8★, betalning ombord, gratis avbokning.'
    ],
    highlights: [
      { title: 'Privat bord för två', desc: 'Privat bord för 2 personer, inte delat. Prioritet till fönsterborden för par. Foton av solnedgång och nattlig Bosporen precis vid ditt fönster.' },
      { title: 'Långsam flerrättersmiddag', desc: '10 varianter turkiska mezzer, varm förrätt, huvudrätt (lax, havsabborre, kyckling, köttbullar eller vegetariskt), glasstårta som dessert. Serveras långsamt över 3 timmar — du har ingen brådska.' },
      { title: 'Liveviolin och mjuk musik', desc: 'Liveviolin och akustisk turkisk musik under middagen skapar en intim atmosfär lämpad för samtal. Sedan kommer DJ:n för par som vill dansa.' },
      { title: 'Tillägg för speciella kvällar', desc: 'Romantisk borduppställning (ljus, rosor): +€{p.romantic}. Obegränsad lokal alkohol (vin, rakı): +€{p.unlimited}/person. Hotelltransfer (tur och retur): +€{p.transfer}/person. Välj vad som passar din kväll.' }
    ],
    faq: [
      { q: 'Är denna Bosporenkryssning lämplig för en vanlig kväll, inte för en speciell tillfälle?', a: 'Ja — de flesta av våra par firar inget särskilt, har bara en fin kväll tillsammans. Atmosfären är varm och trevlig utan att vara överdriven. Du kan lägga till den romantiska borduppställningen (+€{p.romantic}) om du vill ha extra, eller bara njuta av standardkvällen.' },
      { q: 'Vad kostar Bosporenkryssningen för 2 personer?', a: '2 personer Standard: 2 × €{p.dinnerStd} = €48,60. 2 personer VIP: 2 × €{p.dinnerVip} = €110,40. Lägg till hotelltransfer för två: +€{p.transfer}×2 = €20. Lägg till obegränsad alkohol för två: +€{p.unlimited}×2 = €60. Ingen förskottsbetalning — betalning ombord.' },
      { q: 'Kan par ta med eget vin eller champagne?', a: 'Vi tillåter inte extern alkohol (av licensskäl). Men vi har obegränsat lokalt vin (+€{p.unlimited}/person) och kan arrangera importerade premiumviner eller champagne mot en avgift — fråga vid bokning. Prosecco, Chianti och Cabernet är de populära premiumförfrågningarna.' },
      { q: 'Är det ett problem om vi inte dricker alkohol — är vi ovanliga?', a: 'Inte alls — många par hoppar över alkoholen helt, antingen av halal-skäl eller bara av preferens. Obegränsade läsk (vatten, juice, cola) är inkluderade. Ingen tittar två gånger om ditt bord är alkoholfritt. Många muslimska par från Saudiarabien, Iran och Indonesien bokar denna kryssning.' },
      { q: 'När är Bosporenkryssningen för par bäst — solnedgång eller kväll?', a: 'Kvällen (avgång 20:30) är den mest ikoniska — upplysta broar, reflektioner på vattnet, upplysta palats. Solnedgången (avgång 17:30) är tidigare och har gyllene timme-skönhet, men middagskryssningen är specifikt 20:30. Om du vill ha båda bokar de flesta par solnedgångs- och kvällskryssningarna på olika dagar.' },
      { q: 'Finns det ett dansgolv — kan vi dansa?', a: 'Ja — efter middagsservicen (~22:30) börjar DJ:n och det öppna däcket blir danszonen. Många par dansar långsamma låtar under ljusen med Bosporenbron i bakgrunden. Några av de vackraste fotona du kommer att ta i Istanbul.' }
    ],
    cta: {
      primary: 'Boka den Romantiska Kvällen · Betalning Ombord',
      secondary: 'Lägg till romantisk uppställning (+€{p.romantic}) · Gratis avbokning 2 timmar före',
      tertiary: 'Se Romantisk Bosporenkryssning'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Bosporen Solnedgångskryssning från €35 — Gyllene Timme + Middag',
      description: 'Bosporen solnedgångskryssning från Kabataş, avgång 17:30. Palats i gyllene ljus, fortsatt middag i den upplysta natten. 3 timmar. Gratis avbokning, betalning ombord.'
    },
    hero: {
      h1: 'Solnedgångskryssning på Bosporen',
      subtitle: 'Den magiska timmen på Bosporen — se solen sjunka bakom minareternas siluett medan du passerar Dolmabahçe, Ortaköy-moskén och Bosporenbron som tänds för natten.',
      badge: 'Gyllene Timme · Avgång 17:30 · Bästa Foton'
    },
    intro: [
      '**Bosporen solnedgångskryssning** fångar Istanbul i sin mest fotogeniska pose. Gå ombord 17:30 och inom 20 minuter börjar solen sjunka bakom minareterna på den europeiska kusten — färgar Dolmabahçe-palatset guld, förvandlar Bosporens vatten till koppar och gör Ortaköy-moskén till en siluett mot den strålande himlen. Varje smartphone-foto på denna kryssning ser ut som en professionell film.',
      '**Vår Bosporen solnedgångskryssning** inkluderar en full turkisk middag som börjar under den gyllene timmen och fortsätter medan broarna tänds för natten. Vid desserten seglar du under den upplysta Bosporenbron — 30 miljoner ljus reflekterade i det mörka vattnet. Övergången från dag till natt, paketerad i 3 timmar, är allt.',
      'Oavsett om du är fotograf som jagar gyllene timmen, resenär som vill ha det bästa av dag och natt eller ett par som söker "Istanbul-ögonblicket" — detta är **Bosporen solnedgångsmiddagskryssning** rekommenderad till besökare. Betyg 4,8★, licensierad av TÜRSAB, betalning ombord, ingen förskottsbetalning.'
    ],
    highlights: [
      { title: 'Topp gyllene timme — avgång 17:30', desc: 'Gå ombord 17:30, solnedgång sker runt 18:30 på sommaren / 17:00 på vintern. De första 40 minuterna av kryssningen är den gyllene timmen du jagar. Kamera redo — detta är fotot.' },
      { title: 'Dag-till-natt övergång inkluderad', desc: 'Inte bara solnedgång — vi seglar i skymning, sedan i upplyst Bosporen. Se 3 olika ljusfaser i en kryssning: guld, blå timme och helt upplyst natt.' },
      { title: 'Full middag under kryssningen', desc: '10 varianter turkiska mezzer, varm förrätt, huvudrätt (lax, havsabborre, kyckling, köttbullar, vegetariskt), glasstårta. Samma kvalitetsmeny som kvällskryssningen, serveras under solnedgången.' },
      { title: 'Dolmabahçe, Ortaköy, Bosporenbron — allt lyser', desc: 'Rutten passerar Dolmabahçe-palatset (guld vid solnedgång), Ortaköy-moskén (kupol i siluett), Bosporenbron (som tänds), Rumeli Hisarı, Beylerbeyi-palatset. Varje landmärke i sitt bästa ljus.' }
    ],
    faq: [
      { q: 'När avgår Bosporen solnedgångskryssning?', a: 'Ombordstigning börjar 17:00, båten avgår 17:30, återvänder runt 20:30. Vi arrangerar detta så att det händer precis när solen går ner på vattnet — varierar något med säsongen (sommar 18:30, vinter 17:00). Vi justerar avgången säsongsvis med 15-30 minuter.' },
      { q: 'Är Bosporen solnedgångskryssning samma som middagskryssningen?', a: 'Liknande, men vid olika tider. Solnedgångskryssningen avgår 17:30 med middagen serverad under kryssningen (gyllene timme + tidig kväll). Middagskryssningen är 20:30 — efter mörkrets inbrott, rena nattvyer. Samma båt, samma meny, samma underhållning — bara olika belysning. Vissa gäster gör båda på olika dagar.' },
      { q: 'Vad kostar Bosporen solnedgångskryssning?', a: 'Standard solnedgångskryssning från €35/person (3 timmar, full middag, live underhållning). VIP-alternativ med plats framför scenen och premiummezzer €55/person. Betalning ombord — ingen förskottsbetalning. 0-3 år gratis, 4-8 år halva priset.' },
      { q: 'Är solnedgångskryssningen bättre än middagskryssningen (kvällen)?', a: '"Bättre" beror på vad du vill ha. Solnedgång = bästa foton, gyllene ljus, långsammare tempo, tidigare kväll. Kväll = mest ikoniska ljus (upplysta broar), bästa underhållning, senare middag. Fotografer väljer solnedgång. Par på romantisk kväll väljer kväll. Familjer med barn väljer vanligtvis solnedgång (slutar tidigt).' },
      { q: 'Vad ska jag ta med till solnedgångskryssningen?', a: 'Smartphone eller kamera för foton (gyllene timmen tigger). Lätt jacka — vinden ökar vid solnedgång och däcket kan snabbt bli kallt tidigt på kvällen. Solglasögon för de första 30 minuterna. Smart-casual klädsel — du äter middag, men utan sträng klädkod.' },
      { q: 'Kan jag stanna på kryssningen för att se de upplysta broarna på natten?', a: 'Solnedgångskryssningen är 3 timmar (17:30-20:30), så i slutet kommer du att se Bosporenbron helt upplyst och Jungfrutornet tänt. Om du vill ha TOPP-nattvyerna (20:30-23:30, alla restauranger och monument helt upplysta), boka middagskryssningen 20:30. Bästa lösning: boka båda på olika kvällar.' }
    ],
    cta: {
      primary: 'Boka Solnedgångskryssningen · Betalning Ombord',
      secondary: 'Avgång 17:30 · Solnedgång + middag inkluderade · Gratis avbokning 2 timmar före',
      tertiary: 'Se Kvällsmiddagskryssning (20:30)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Bosporen Nattur från €{p.dinnerStd} — Middagskryssning + Live Show',
      description: 'Nattur 3 timmar på Bosporen med middag och live show. Avgång 20:30 från Kabataş, upplysta broar. Gratis avbokning, betalning ombord.'
    },
    hero: {
      h1: 'Bosporen Nattur',
      subtitle: 'Istanbuls upplysta broar, de upplysta palatsen och Bosporens vatten som en spegel som reflekterar 30 miljoner ljus — natturen som definierar kvällen i Istanbul.',
      badge: 'Upplysta Broar · Live Show · Middag Inkluderad'
    },
    intro: [
      '**Bosporen natturen** är den mest rekommenderade kvällsaktiviteten i Istanbul. Här är varför: efter mörkrets inbrott förvandlas Bosporen. Bosporenbron växlar mellan blå, lila och guld. Dolmabahçe-palatset lyser varmt gult. Ortaköy-moskén reflekteras perfekt i det svarta vattnet. Varje landmärke i Istanbul når sin dramatiska topp på natten.',
      '**Vår Bosporen nattur med middag** paketerar den kompletta ikoniska kvällen: 3 timmar på vattnet (20:30-23:30), turkisk flerrättersmiddag, livefolkdans (sema, 5 folkdanser, orientalisk dans), livemusik och DJ-set som håller däcket levande till slutet av natten. Varje gäst får samma program — inget "bas"-alternativ som hoppar över de bästa delarna.',
      'Oavsett om det är ditt första besök i Istanbul och du letar efter "den enda saken du måste göra på natten", eller om du har varit här tidigare och vill ha stadens mest fotogeniska 3 timmar, är detta **Bosporen natturen** betygsatt 4,8★ av över 11.317 resenärer. Licensierad av TÜRSAB, betalning ombord, ingen förskottsbetalning.'
    ],
    highlights: [
      { title: 'Den upplysta Bosporen på dramatisk topp', desc: 'Bosporenbron ändrar färg (blå, lila, guld), palatsen lyser gula, Ortaköy-moskén reflekteras i det mörka vattnet. 20:30-23:30 maximal belysning för alla Istanbuls landmärken.' },
      { title: 'Traditionell turkisk show ombord', desc: 'Sema-föreställning, 5 traditionella folkdanser (från olika regioner i Turkiet), orientalisk dans, live turkisk musik, sedan DJ-set. 40 minuter show, sedan fortsätter musiken + middagen.' },
      { title: 'Full flerrättersmiddag', desc: '10 varianter turkiska mezzer, varm förrätt (paçanga böreği), huvudrätt (lax, havsabborre, kyckling, köttbullar, vegetariskt — ditt val), dessert (glasstårta), obegränsade läsk. Halal-certifierad.' },
      { title: 'Komplett Bosporenrutt', desc: 'Kabataş → Dolmabahçe → Çırağan-palatset → Ortaköy-moskén → Bebek → Rumeli Hisarı → Fatih Sultan Mehmet-bron → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Jungfrutornet → Kabataş.' }
    ],
    faq: [
      { q: 'När är Bosporen natturen?', a: 'Ombordstigning från 19:30 vid Kabataş-bryggan. Båten avgår 20:30, återvänder runt 23:30. Vi rekommenderar att komma 20 minuter tidigare för att installera dig och välja plats.' },
      { q: 'Vad kostar Bosporen natturen?', a: 'Standard nattur (3 timmar, middag, show): €{p.dinnerStd}/person (tidigare €{p.dinnerStdOriginal}). VIP med plats framför scenen och premiummeny: €{p.dinnerVip}/person (tidigare €{p.dinnerVipOriginal}). 0-3 år gratis, 4-8 år halva priset. Betalning ombord.' },
      { q: 'Vad är skillnaden mellan Bosporen natturen och middagskryssningen?', a: 'Samma sak, annat nyckelord. "Bosporen nattur" är hur många resenärer söker; "middagskryssning" är branschtermen. Samma båt, samma 3-timmars program, samma meny, samma show. Välj den söktermen du föredrar — upplevelsen är densamma.' },
      { q: 'Bosporen nattur eller solnedgångskryssning — vilken är värd mer?', a: 'Nattur = upplyst Istanbul, maximalt ljusdrama, fullständigt underhållningsprogram, de mest ikoniska fotona av upplysta broar. Solnedgång = gyllene timme, långsammare tempo, slutar 20:30. Om du bara gör en: natturen är mer ikonisk. Många gör båda på olika dagar.' },
      { q: 'Kan jag göra Bosporen natturen på min första dag i Istanbul?', a: 'Ja — vi rekommenderar det. Många resenärer bokar natturen för sin första kväll eftersom den ger dig en komplett orientering: alla huvudlandmärken från vattnet, med bra mat och underhållning. Lättare än att kämpa mot jetlag medan du försöker göra promenadturism på Dag 1. Hotelltransfer tillgänglig från centrala stadsdelar.' },
      { q: 'Jag talar inte turkiska — är turen på engelska?', a: 'Besättningen talar engelska. Underhållningen (sema, folkdanser, musik) kräver inget språk. Middagsmenyn är på engelska. Bokning via WhatsApp / Telegram fungerar på flera språk (engelska, arabiska, ryska, tyska, franska, spanska). Inget turkiska behövs.' }
    ],
    cta: {
      primary: 'Boka Natturen · Betalning Ombord',
      secondary: 'Avgång 20:30 · 3 timmar · Middag + show inkluderade · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Middagskryssning i Istanbul från €{p.dinnerStd} — Bosporen Nattur',
      description: 'Middagskryssning 3 timmar i Istanbul på Bosporen. Turkisk flerrättersmeny, live folklore, upplysta broar. Gratis avbokning, betalning ombord. 11.317 recensioner.'
    },
    hero: {
      h1: 'Middagskryssning i Istanbul',
      subtitle: 'Den bästa middagskryssningen i Istanbul — 3 timmar på Bosporen, turkisk flerrättersmiddag, live underhållning och nattvyer av stadens mest ikoniska landmärken.',
      badge: '4,8★ · 11.317 recensioner · TÜRSAB A-17672'
    },
    intro: [
      'Söker du en **middagskryssning i Istanbul**? Du har hittat det som de flesta resenärer rekommenderar. Vår 3-timmars kväll på Bosporen kombinerar en full turkisk flerrättersmiddag, livefolkdans och stadens mest fotogeniska utsikter — allt från en bekväm båt som avgår 20:30 från Kabataş-bryggan.',
      'Upplevelsen av **middagskryssningen i Istanbul**: gå ombord 19:30, sätt dig, se Dolmabahçe-palatset medan vi avgår, middagen börjar när vi närmar oss Ortaköy-moskén, showen börjar (sema, folkdanser, orientalisk), och vid desserten är du under den upplysta Bosporenbron. Vid midnatt återvänder du till Kabataş med ett ikoniskt fotokollage och en full mage.',
      '€{p.dinnerStd}/person för standardkryssningen (tidigare €{p.dinnerStdOriginal}) eller €{p.dinnerVip}/person för VIP med platser framför scenen (tidigare €{p.dinnerVipOriginal}). Betalning ombord — ingen förskottsbetalning, ingen risk. Licensierad av TÜRSAB A-17672, betygsatt 4,8★ av över 11.317 resenärer.'
    ],
    highlights: [
      { title: 'Full turkisk flerrättersmiddag', desc: '10 varianter mezzer, varm förrätt, huvudrätt (lax/havsabborre/kyckling/köttbullar/vegetariskt), glasstårta. Halal-certifierad. Obegränsade läsk inkluderade.' },
      { title: 'Live turkisk folkdans-show', desc: 'Sema-föreställning, 5 traditionella folkdanser, orientalisk dans, live turkisk musik, DJ. 40 minuter show, kontinuerlig bakgrundsmusik.' },
      { title: 'Komplett nattrutt på Bosporen', desc: '3-timmars tur: Dolmabahçe, Çırağan, Ortaköy-moskén, Bosporenbron, Bebek, Rumeli Hisarı, FSM-bron, Beylerbeyi, Üsküdar, Jungfrutornet. Båda kusterna, europeisk och asiatisk.' },
      { title: 'Från €{p.dinnerStd} — betalning ombord', desc: 'Standard: €{p.dinnerStd} (tidigare €{p.dinnerStdOriginal}). VIP med premiummeny: €{p.dinnerVip} (tidigare €{p.dinnerVipOriginal}). Ingen förskottsbetalning. Gratis avbokning fram till 2 timmar före avgång.' }
    ],
    faq: [
      { q: 'Vad kostar middagskryssningen i Istanbul?', a: 'Vår standardmiddagskryssning €{p.dinnerStd}/person (normalt pris €{p.dinnerStdOriginal}). VIP med plats framför scenen och premiummeny €{p.dinnerVip}/person (normalt pris €{p.dinnerVipOriginal}). 0-3 år gratis, 4-8 år 50% rabatt. Betalning ombord — ingen förskottsbetalning.' },
      { q: 'Vad ingår i priset för Istanbul middagskryssningen?', a: '3-timmars tur på Bosporen, turkisk flerrättersmiddag (mezzer, varm förrätt, huvudrätt, dessert), obegränsade läsk, live folkdans-show (sema, folkdanser, orientalisk), livemusik + DJ, tillgång till öppet däck, skatter inkluderade. Hotelltransfer och alkohol är valfria tillägg.' },
      { q: 'Var avgår Istanbul middagskryssningen från?', a: 'Kabataş-bryggan, Istanbul — på den europeiska kusten, nära Dolmabahçe-palatset. Den exakta mötesplatsen meddelas efter bokning via WhatsApp / Telegram. Promenadvideorna från Dolmabahçe spårvagnshållplats och Kabataş spårvagnshållplats finns i mötesplatssektionen ovan.' },
      { q: 'Hur lång är middagskryssningen — och när börjar den?', a: 'Totalt 3 timmar. Ombordstigning från 19:30, båten avgår exakt 20:30, återvänder runt 23:30. Vi rekommenderar att komma 15-20 minuter tidigare för att installera dig och välja plats.' },
      { q: 'Måste jag boka i förväg eller kan jag komma direkt?', a: 'Boka i förväg — platserna fylls, särskilt på helger och helgdagar. Bokningar samma dag är ofta möjliga men inte garanterade. Formuläret på denna sida säkrar dig en plats på mindre än 1 minut. Betalning ombord, så det finns ingen ekonomisk risk att boka tidigt.' },
      { q: 'Är Istanbul middagskryssningen lämplig för vegetarianer / halal / kostrestriktioner?', a: 'Ja — allt kött är halal-certifierat. Vegetarisk huvudrätt (falafel, pommes frites, bulgurpilaff, grönsaksgryta, lökringar) tillgänglig utan extra kostnad. Allergier kan tillgodoses om de meddelas vid bokning. Alkohol är ett valfritt tillägg, aldrig påtvingat.' }
    ],
    cta: {
      primary: 'Boka Middagskryssningen · Betalning Ombord',
      secondary: '4,8★ · TÜRSAB-licensierad · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Istanbul Nattur från €{p.dinnerStd} — Bosporen Middagskryssning + Show',
      description: 'Kryssning 3 timmar på Bosporen med middag och live show. Avgång 20:30 från Kabataş. Gratis avbokning, betalning ombord. 11.317 recensioner. Hotelltransfer valfri.'
    },
    hero: {
      h1: 'Tur genom Istanbul på Natten',
      subtitle: 'Natturen som främst rekommenderas av invånarna i Istanbul — Bosporenkryssning 3 timmar med middag, live underhållning och stadens mest ikoniska upplysta utsikter.',
      badge: 'Istanbuls Ikoniska Kväll · 3 Timmar · Middag Inkluderad'
    },
    intro: [
      'En **tur genom Istanbul på natten** måste göra tre saker: visa dig stadens ikoniska landmärken, ge dig bra mat och underhålla dig. Vår Bosporen middagskryssning gör alla tre på en 3-timmars kväll — och det är därför de flesta Istanbul-guiderna rekommenderar den som #1 nattur-upplevelse.',
      'Rutten av **turen genom Istanbul på natten** täcker de bästa upplysta landmärkena: Dolmabahçe-palatset, Ortaköy-moskén, Bosporenbron (ändrar färg), Bebek-stadsdelen, Rumeli Hisarı, FSM-bron, Beylerbeyi-palatset, asiatisk kust Üsküdar och Jungfrutornet i fjärran. De flesta stadsturerna visar dig dem från bussen — vi visar dem från vattnet, där de är mest dramatiska.',
      'Middagen är inkluderad (turkisk flerrättersmeny), live turkisk folkdans-show, sema, orientalisk dans och DJ-set. Om du är i Istanbul i 2-3 dagar är detta den enda kvällen som ger den starkaste smällen. 4,8★ av över 11.317 resenärer, betalning ombord, ingen förskottsbetalning.'
    ],
    highlights: [
      { title: 'Alla Istanbuls ikoniska nattvyer', desc: 'Dolmabahçe-palatset, Ortaköy-moskén, upplyst Bosporenbron, Rumeli Hisarı, FSM-bron, Beylerbeyi-palatset, Jungfrutornet. Varje huvudlandmärke vid toppnattbelysning.' },
      { title: 'Full turkisk middag inkluderad', desc: '10 mezzer, varm förrätt, huvudrätt (lax/havsabborre/kyckling/köttbullar/vegetariskt), dessert, obegränsade läsk. Halal-certifierad. Prissatt till €{p.dinnerStd}/person — allt inkluderat.' },
      { title: 'Livefolkdanser + sema + orientalisk', desc: 'Traditionell turkisk underhållning: Mevlana sema-föreställning, 5 regionala folkdanser, orientalisk dans, livemusik, DJ. 40 minuter show, bakgrundsmusik hela kvällen.' },
      { title: 'Lätt för första gången i Istanbul', desc: 'Central mötesplats (Kabataş-bryggan), hotelltransfer (+€{p.transfer}/person), engelsktalande besättning, betalning ombord. Noll logistisk stress. Kom, njut, gå.' }
    ],
    faq: [
      { q: 'Vad är den bästa natturen i Istanbul?', a: 'Bosporen middagskryssning rankas konsekvent på #1. Anledningarna: (1) den ger dig alla ikoniska nattvyer från vattnet, (2) inkluderar middagen och showen i ett paket, (3) 3 timmar räcker för att se mycket utan trötthet, (4) central mötesplats, (5) betalning ombord minskar bokningsfriktion. De flesta Istanbul-reseguider rekommenderar den som "det enda obligatoriska att göra på natten".' },
      { q: 'Vad kostar turen genom Istanbul på natten?', a: 'Vår nattur med middag på Bosporen: Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person. Inkluderat turen, middagen, underhållningen, läsken. Valfritt: alkohol +€{p.unlimited}/person, hotelltransfer +€{p.transfer}/person. Betalning ombord — ingen förskottsbetalning.' },
      { q: 'Är turen genom Istanbul på natten säker för solo-resenärer?', a: 'Ja — mycket säker. Båt licensierad av TÜRSAB, professionell engelsktalande besättning, CCTV på däck, flytvästar tillgängliga. Många solo-resenärer bokar denna tur. Ät middag vid ett delat eller privat bord (ditt val) och kvällen är inkluderande — träffa andra resenärer om du vill eller behåll det för dig själv.' },
      { q: 'Vad är den bästa tiden för en nattur i Istanbul?', a: 'Vår middagstur på Bosporen är 20:30-23:30 (3 timmar). Detta är toppbelysningsögonblicket för alla Istanbuls landmärken — broar helt upplysta, palats strålande, månen på vattnet. Om du vill ha tidigare (gyllene timme), överväg solnedgångsturen från 17:30.' },
      { q: 'Hur tar jag mig till mötesplatsen för natturen i Istanbul?', a: 'Mötesplatsen är Kabataş-bryggan (central europeisk kust, nära Dolmabahçe-palatset). Med spårvagnen: T1 till stationen Kabataş (linjens slut). Med taxi: ~15 min från Taksim. Till fots: 20 min från Taksim via İnönü-boulevarden. På denna sida finns videor med promenadanvisningarna. Hotelltransfer tillgänglig med +€{p.transfer}/person om du föredrar.' },
      { q: 'Kan jag boka turen genom Istanbul på natten samma dag?', a: 'Ofta ja, särskilt på vardagar. Helger fylls snabbare. Bokningsformuläret på denna sida låter dig kontrollera tillgängligheten för ikväll och boka på mindre än 1 minut. För brådskande förfrågningar samma dag, skriv via WhatsApp på +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Boka Natturen · Betalning Ombord',
      secondary: 'Från €{p.dinnerStd}/person · Middag + show inkluderade · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Båttur Istanbul från €{p.dinnerStd} — Bosporen + Middag + Show',
      description: 'Båttur 3 timmar: Bosporenkryssning, full turkisk middag, live folklore, upplysta nattlandskap. Gratis avbokning, betalning ombord. 11.317 recensioner.'
    },
    hero: {
      h1: 'Båttur i Istanbul',
      subtitle: 'Den mest bokade båtturen i Istanbul av resenärer — Bosporenkryssning med turkisk mat, live underhållning och stadens ikoniska utsikter från vattnet.',
      badge: '4,8★ · TÜRSAB A-17672 · Betalning Ombord'
    },
    intro: [
      'När du söker "båttur i Istanbul" söker du den enda saken som definierar staden från vattnet: Bosporen. Vår 3-timmars Bosporen båttur tar dig förbi varje huvudlandmärke i Istanbul — Dolmabahçe-palatset, Ortaköy-moskén, Bosporenbron, Rumeli Hisarı, Beylerbeyi-palatset och Jungfrutornet — med full turkisk middag och live underhållning.',
      'Till skillnad från de många 1-timmars turistfärjor som täcker mindre av Bosporen och hoppar över middagen och underhållningen, är **vår båttur i Istanbul** en komplett kvällsupplevelse: ombordstigning 19:30 vid Kabataş-bryggan, tur till midnatt, 10 mezzer, huvudrätt, dessert, sema, folkdanser, orientalisk dans och DJ. Du får också kvällsutflykten som en del av turen.',
      'Oavsett om du har en kväll eller en hel vecka i Istanbul, gör denna **båttur i Istanbul** jobbet. 4,8★ av över 11.317 resenärer, licensierad av TÜRSAB (A-17672), halal-certifierad meny och betalning ombord — ingen ekonomisk förpliktelse förrän du är nöjd med upplevelsen.'
    ],
    highlights: [
      { title: 'Alla huvudlandmärken på Bosporen', desc: 'Dolmabahçe, Çırağan, Ortaköy-moskén, Bosporenbron, Bebek, Rumeli Hisarı, FSM-bron, Beylerbeyi-palatset, Üsküdar, Jungfrutornet. Båda kusterna, europeisk och asiatisk, i en tur.' },
      { title: 'Middag + show inkluderade', desc: 'Inte bara en båttur — full turkisk flerrättersmiddag, livefolkdansshow, sema, orientalisk dans, DJ. Vad som gör 3 timmar roliga, inte bara turism.' },
      { title: 'Kvällsavgång (bästa belysning)', desc: 'Avgången 20:30 fångar den upplysta Bosporen i full glans — broar, palats, moskéer alla upplysta. Mer dramatisk än dagsturer som visar samma landmärken i platt ljus.' },
      { title: 'Lätt bokning, lätt betalning', desc: 'Boka med formuläret på denna sida på mindre än 1 minut. Betalning ombord — ingen förskottsbetalning. Hotelltransfer tillgänglig från +€{p.transfer}/person. Gratis avbokning 2 timmar före avgång.' }
    ],
    faq: [
      { q: 'Vad är den bästa båtturen i Istanbul?', a: 'Bosporen middagskryssning rankas konsekvent på #1. Den täcker alla huvudlandmärken, inkluderar middagen och underhållningen och kör på kvällen när landmärkena är upplysta. Andra alternativ (hop-on färjor, morgon-turistbåtar) täcker kortare rutter, hoppar över middagen och inkluderar inte underhållning. För en kväll i Istanbul är detta den mest kompletta båtturen.' },
      { q: 'Hur lång är båtturen i Istanbul?', a: '3 timmar. Ombordstigning från 19:30 vid Kabataş-bryggan, avgång 20:30, retur ~23:30. Täcker hela Bosporen från Dolmabahçe till Rumeli Hisarı och tillbaka. Tillräckligt med tid för full middag + show utan trötthet.' },
      { q: 'Vad kostar båtturen i Istanbul?', a: 'Vår båttur med middag: Standard €{p.dinnerStd}/person (tidigare €{p.dinnerStdOriginal}), VIP med premiummeny €{p.dinnerVip}/person (tidigare €{p.dinnerVipOriginal}). 0-3 år gratis, 4-8 år halva priset. Betalning ombord. Alkohol och hotelltransfer är valfria tillägg.' },
      { q: 'Var avgår båttur i Istanbul från?', a: 'Vår båt avgår från Kabataş-bryggan, central europeisk kust av Istanbul, nära Dolmabahçe-palatset. Tillgänglig med spårvagn T1 (Kabataş station), taxi 15 min från Taksim eller till fots 20 min från Taksim. Hotelltransfer tillgänglig från centrala stadsdelar med +€{p.transfer}/person.' },
      { q: 'Är denna båttur lämplig för familjer med barn?', a: 'Ja — mycket familjevänlig. Barn 0-3 år gratis, 4-8 år 50% rabatt. Täckt inomhusområde, barnmeny på begäran och underhållning (sema, folkdanser) fängslande för barn. Många familjer från hela världen bokar denna tur.' },
      { q: 'Måste jag ta med något till båtturen?', a: 'Pass eller ID-kort (för registrering ombord), lätt jacka (däcket kan vara svalt), bekväma skor om du planerar att dansa. Smartphone för foton. Kontanter eller kort för betalning ombord (båda accepteras). Allt annat — mat, dryck, underhållning — är ombord.' }
    ],
    cta: {
      primary: 'Boka Båtturen · Betalning Ombord',
      secondary: '3 timmar · Middag + show · Från €{p.dinnerStd}/person · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Bosporenresa från €{p.dinnerStd} — Istanbul Middagskryssning + Show',
      description: 'Resa 3 timmar på Bosporen: turkisk middag, live folklore, upplysta nattlandskap. Avgång 20:30 från Kabataş. Gratis avbokning, betalning ombord.'
    },
    hero: {
      h1: 'Resa på Bosporen',
      subtitle: 'Bosporenresan som mest rekommenderas av resenärer — middagskryssning 3 timmar som täcker varje huvudlandmärke i Istanbul, med mat, underhållning och nattvyer.',
      badge: 'Komplett Bosporen-upplevelse · Kvällsavgång'
    },
    intro: [
      'En **Bosporenresa** kan betyda en 1-timmars turistfärja eller en komplett kväll med tur med middag — vi gör det andra och de flesta resenärer tycker det är upplevelsen av bättre värde. 3 timmar, €{p.dinnerStd}/person, middag och underhållning inkluderade. Du passerar inte bara förbi landmärken — du äter, ser showen och njuter av kvällen.',
      'Rutten av **vår Bosporenresa** täcker allt värt att se: Dolmabahçe-palatset (1800-tals osmansk sultans residens), Ortaköy-moskén (en av de mest fotograferade moskéerna i Istanbul), Bosporenbron (ändrar färg på natten), Rumeli Hisarı (byggd av Fatih Sultan Mehmet 1452), Beylerbeyi-palatset (asiatisk kust) och Jungfrutornet på en liten ö. Allt förklarat av engelsktalande besättning.',
      'Oavsett om du är i Istanbul 24 timmar eller en vecka, är detta **Bosporenresan** som ger dig mest på en kväll. Betyg 4,8★ av över 11.317 resenärer, licensierad av TÜRSAB A-17672, halal-vänlig meny, betalning ombord — ingen risk för förskottsbetalning.'
    ],
    highlights: [
      { title: 'Hela Bosporen i ett enda svep', desc: 'Europeisk kust (Dolmabahçe, Ortaköy, Rumeli Hisarı), asiatisk kust (Beylerbeyi, Üsküdar), båda Bosporenbroar, Jungfrutornet. Varje huvudlandmärke synligt på 3 timmar.' },
      { title: 'Middag + underhållning inkluderade', desc: 'Inte bara turistfärja — full turkisk middag med mezzer, huvudrätt, dessert. Livefolkdansshow, sema, orientalisk, DJ. Underhållningsvärde bortom bara landskap.' },
      { title: 'Kväll = bästa belysning', desc: 'Dagsresor på Bosporen visar dig landmärkena i platt ljus. Kvällsresor fångar allt upplyst: strålande palats, färgade broar, moskéer reflekterade i mörkt vatten. Bättre foton, mer dramatiska.' },
      { title: 'Från €{p.dinnerStd} — betalning ombord', desc: 'Ingen förskottsbetalning krävs. Betalning ombord (kontanter eller kort). Gratis avbokning fram till 2 timmar före avgång. 0-3 år gratis, 4-8 år halva priset. Transparenta priser.' }
    ],
    faq: [
      { q: 'Vilka är de bästa Bosporenresorna i Istanbul?', a: 'Kvällsmiddagsturen rankas konsekvent på toppen. Dagsalternativen (1-timmars loop-färjor, 2-timmars turistbåtar) visar mindre och inkluderar inte middag. För värde är det svårt att slå en 3-timmars tur med middag, show och central mötesplats. Kostnaden för vår tur €{p.dinnerStd} eliminerar behovet av en separat kväll med middag + underhållning.' },
      { q: 'Hur lång är en Bosporenresa?', a: 'Vår Bosporenresa varar totalt 3 timmar (avgång 20:30, retur 23:30). Det finns kortare alternativ (1-timmars turistfärjor, 90-minuters turer), men de hoppar över middagen och underhållningen. För den kompletta kvällsupplevelsen är 3 timmar idealiskt — tillräckligt för att se allt utan att bli trött.' },
      { q: 'Är Bosporenresan värt det?', a: 'Ja — nästan varje Istanbul-reseguide listar "Bosporenkryssning" i top 5 obligatoriska saker. Staden byggdes runt detta sund; om du inte har sett Bosporen från vattnet har du inte riktigt sett Istanbul. Vår specifika kvällstur lägger till middag och underhållning, vilket gör det till en komplett kvällsutflykt istället för bara turism.' },
      { q: 'Vad ska jag ta med på Bosporenresan?', a: 'Pass eller ID-kort (för registrering ombord), lätt jacka (på kvällen är däcket svalt), smartphone/kamera, bekväma skor för dansgolvet. Kontanter eller kort för betalning. Allt annat är ombord. Hotelltransfer tillgänglig med +€{p.transfer}/person om du inte vill använda kollektivtrafik.' },
      { q: 'Är Bosporenresan lämplig för barn?', a: 'Ja — mycket barnvänlig. Barn 0-3 år gratis (transfer inkluderad), 4-8 år 50% rabatt. Täckt inomhusområde, barnmeny på begäran och delikat och fängslande underhållning. Många familjer bokar denna resa som höjdpunkten på sin resa till Istanbul.' },
      { q: 'Vilka är stoppen för Bosporenresan?', a: 'Det är en kontinuerlig tur — inga stopp (ingen avstigning). Båten passerar varje landmärke, besättningen förklarar vad du ser, du slappnar av vid bordet eller går ut på det öppna däcket för foton. Inga köer, ingen promenad — bara 3 problemfria timmar på vattnet.' }
    ],
    cta: {
      primary: 'Boka Bosporenresan · Betalning Ombord',
      secondary: '3 timmar · Middag + show · Gratis avbokning 2 timmar före · TÜRSAB-licensierad',
      tertiary: 'Kontrollera Tillgänglighet'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bosporenkryssning Biljetter från €{p.dinnerStd} — Betalning Ombord',
      description: 'Direkta Bosporenkryssning biljetter. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Ingen förskottsbetalning, betalning ombord. Gratis avbokning fram till 2t före.'
    },
    hero: {
      h1: 'Bosporenkryssning Biljetter',
      subtitle: 'Hoppa över mellanhandskostnaderna — köp Bosporenkryssning biljetter direkt från oss. Ingen förskottsbetalning, betalning ombord, gratis avbokning fram till 2 timmar före avgång.',
      badge: 'Direkt Bokning · Ingen Förskottsbetalning · 40% RABATT'
    },
    intro: [
      'Söker du **Bosporenkryssning biljetter**? Köp direkt. Våra biljetter är €{p.dinnerStd} (Standard) eller €{p.dinnerVip} (VIP) — 40% rabatt på normalt pris (€{p.dinnerStdOriginal} och €{p.dinnerVipOriginal}). Tredjepartsbokningssajter lägger vanligtvis till 20-40% kommission. Genom att boka direkt sparar du — och betalar ändå ombord.',
      'Vår **Bosporenkryssning biljetter**-process: fyll i formuläret på denna sida på mindre än 1 minut (datum, antal gäster, paket, kontakt), vi bekräftar direkt via WhatsApp / Telegram, du dyker upp vid Kabataş-bryggan 19:30, betalar ombord, njuter av 3-timmars middagskryssningen. Ingen fysisk biljett att skriva ut, ingen kupong att ta emot via e-post — bekräftelsen är din biljett.',
      'Oavsett om du bokar middagskryssningen för ikväll eller bokar för ett specifikt datum nästa vecka, är **direkta Bosporenkryssning biljetter** det snabbaste sättet. Betyg 4,8★, licensierad av TÜRSAB (A-17672), halal-certifierad meny och stödjer hotelltransfer- och alkoholtillägg.'
    ],
    highlights: [
      { title: 'Direkt bokning — inga mellanhandskostnader', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Tredjepartssajter tar ut €30-80+ för samma tur. Spara genom att boka direkt från oss. Inga dolda avgifter, inget kommissionstillägg.' },
      { title: 'Betalning ombord — ingen förskottsbetalning', desc: 'Boka platsen nu, betala när du går ombord. Kontanter eller kort accepteras. Gratis om du avbokar 2+ timmar före avgång. Noll ekonomisk risk att boka tidigt.' },
      { title: 'Bekräftelse på mindre än 1 minut', desc: 'Fyll i formuläret → vi bekräftar via WhatsApp / Telegram. Ingen PDF-kupongmail att skriva ut. Vårt meddelande är din biljett. Kom till bryggan 19:30.' },
      { title: 'Nuvarande lanseringspris 40% RABATT', desc: 'Standard tidigare €{p.dinnerStdOriginal}, nu €{p.dinnerStd}. VIP tidigare €{p.dinnerVipOriginal}, nu €{p.dinnerVip}. 40% rabatt eftersom du bokar direkt. Inget trick med tidsgräns — det är vårt standard direktbokningspris.' }
    ],
    faq: [
      { q: 'Vad kostar Bosporenkryssning biljetter?', a: 'Standard: €{p.dinnerStd}/person (normalt €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/person (normalt €{p.dinnerVipOriginal}). Inkluderar 3-timmars turen, turkisk flerrättersmiddag, live folkdans-show, obegränsade läsk. 0-3 år gratis, 4-8 år 50% rabatt. Betalning ombord — ingen förskottsbetalning.' },
      { q: 'Var kan jag köpa Bosporenkryssning biljetter?', a: 'Direkt från denna sida — fyll i bokningsformuläret, vi bekräftar direkt via WhatsApp / Telegram. Betalning ombord. Tredjepartsplattformar (Viator, GetYourGuide, Klook) säljer också biljetter, men tar vanligtvis ut €30-80+ — detta är mellanhandstillägget. Direkt är billigast och snabbast.' },
      { q: 'Måste jag skriva ut Bosporenkryssning biljetten?', a: 'Nej — ingen fysisk biljett eller kupong behövs. Efter bokning skickar vi dig en bekräftelse via WhatsApp (eller Telegram) med mötesplats, tid och bokningsnamn. Visa bara din telefon vid bryggan. Klart.' },
      { q: 'Kan jag avboka eller returnera Bosporenkryssning biljetten?', a: 'Ja — gratis avbokning fram till 2 timmar före avgång. Skriv bara via WhatsApp. Eftersom du ännu inte har betalat (betalning ombord) krävs ingen återbetalning — kom bara inte, utan kostnader. Mycket mer flexibelt än förskottsbetalda biljetter från tredje parter.' },
      { q: 'Är Bosporenkryssning biljetter tillgängliga samma dag?', a: 'Ofta ja, särskilt på vardagar. Helger och helgdagar fylls snabbare. Kontrollera tillgänglighet via bokningsformuläret — det uppdateras i realtid. Bokning samma dag är vanligtvis möjlig med några timmar före avgången 20:30. För brådskande förfrågningar, WhatsApp.' },
      { q: 'Är Bosporenkryssning biljetter för barn gratis?', a: 'Barn **0-3 år helt gratis** (inga avgifter, inga dolda kostnader, transfer inkluderad). **4-8 år 50% rabatt** (€{p.dinnerStd}/2 = €12 på Standard). **9+ år fullt vuxenpris.** Fasta och transparenta priser — inga "babytilläggs"-trick.' }
    ],
    cta: {
      primary: 'Köp Biljetter · Betalning Ombord',
      secondary: 'Direkt bokning · Ingen förskottsbetalning · Gratis avbokning 2 timmar före',
      tertiary: 'Kontrollera Tillgänglighet'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosporen Last Minute från €{p.dinnerStd} — Boka Idag, Betala Ombord',
      description: 'Bosporenkryssning bokning samma dag. WhatsApp bekräftelse på minuter. Avgång 20:30 från Kabataş. Gratis avbokning, betalning ombord. 11.317 recensioner.'
    },
    hero: {
      h1: 'Bosporenkryssning i Sista Minuten',
      subtitle: 'Tillgänglighet för ikväll, bekräftat på några minuter. Ingen förskottsbetalning, ingen förtryckt kupong — kom bara till bryggan och njut av kvällen.',
      badge: 'Bokning Samma Dag · Bekräftad på Några Minuter · Betalning Ombord'
    },
    intro: [
      'Landat i Istanbul i eftermiddag och vill ha en härlig kväll ikväll? **Bosporenkryssningen i sista minuten** fungerar. Vi reserverar speciellt platser för bokningar samma dag, eftersom vi vet att många resenärer bestämmer sig på morgonen. Fyll i formuläret här, vi bekräftar via WhatsApp på några minuter, du dyker upp vid Kabataş-bryggan 19:30, betalar ombord, njuter.',
      '**Vår Bosporenkryssning i sista minuten** har samma kvällsprogram som förhandsbokningar: 3 timmar på vattnet (20:30-23:30), turkisk flerrättersmiddag, livefolkdansshow, sema, orientalisk dans, DJ. Upplyst Dolmabahçe-palats, Ortaköy-moskén, Bosporenbron — samma ikoniska utsikter. Samma pris €{p.dinnerStd} Standard eller €{p.dinnerVip} VIP.',
      'Avbokning samma dag är gratis fram till 2 timmar före avgång, eftersom **betalning ombord** betyder att du ännu inte har lovat något. Bokade du 14:00 och ändrade dina planer till 19:00? Skriv bara via WhatsApp — ingen återbetalning, inget problem. Detta är flexibiliteten hos **Istanbul-turen i sista minuten** som resenärer värdesätter.'
    ],
    highlights: [
      { title: 'Platser fortfarande tillgängliga för ikväll', desc: 'Vi reserverar 5-10 platser per dag för bokningar samma dag. Kontrollera formuläret ovan — realtidstillgänglighet. Om dagens tur är full är morgondagens vanligtvis öppen.' },
      { title: 'Bekräftelse på mindre än 5 minuter', desc: 'Fyll i formuläret → bekräftelsemeddelande WhatsApp/Telegram → klar. Ingen e-postkupong att vänta på, ingen QR-kod att skriva ut. Vårt meddelande är din biljett.' },
      { title: 'Noll betalning förrän du går ombord', desc: 'Betalning ombord, kontanter eller kort. Om du inte kommer (planändring, sjukdom, väder), inga kostnader. Gratis avbokning fram till 2 timmar före avgång. Verkligen vänlig i sista minuten.' },
      { title: 'Hotelltransfer samma dag ofta tillgänglig', desc: 'Hotelltransfern kräver normalt 24-timmars meddelande, men för bokningar samma dag mellan 14:00-18:00 kan vi ofta arrangera hämtning med +€{p.transfer}/person. För brådskande transferförfrågningar, WhatsApp.' }
    ],
    faq: [
      { q: 'Kan jag verkligen boka Bosporenkryssningen för ikväll?', a: 'Ja — ofta. Vi reserverar platser för bokningar samma dag. Kontrollera formuläret ovan för tillgänglighet ikväll. Om det finns tillgängliga platser kan du boka fram till 18:00 (3 timmar före avgång). Helger är mer hektiska — boka tidigare på dagen om möjligt.' },
      { q: 'Hur last minute kan jag boka?', a: 'Bokningar förblir öppna fram till 18:00 för båten 20:30. Efter 18:00, skriv till oss direkt via WhatsApp på +90 532 244 29 22 — om det finns lediga platser kan vi bekräfta manuellt. Efter 19:30 är det väldigt tight om du inte redan är vid Kabataş-bryggan och kan gå ombord snabbt.' },
      { q: 'Är Bosporenkryssningen i sista minuten dyrare?', a: 'Nej — samma pris som förhandsbokning. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Vi gör inte "dynamiska priser" eller tillägg för sista minuten. Samma båt, samma middag, samma show, samma pris.' },
      { q: 'Vad händer om kvällens tur är full?', a: 'Morgondagens tur är vanligtvis öppen — vi opererar 365 dagar om året, varje dag. Du kan boka för imorgon och fortfarande vara "last minute", vilket betyder att du just har bestämt dig. Vardagsturer har mer plats än helger.' },
      { q: 'Kan ni arrangera hotelltransfer i sista minuten?', a: 'Transfer samma dag är möjligt fram till ~18:00 för turen 20:30. Efter 18:00 kanske vi inte har en chaufför tillgänglig — i det fallet kan du ta en taxi till Kabataş-bryggan (15 min från Taksim, 10 min från Sultanahmet, ~€10-15). Central och lätt.' },
      { q: 'Om jag redan är vid Kabataş och vill gå ombord?', a: 'Om du är vid bryggan och det finns lediga platser kan du bara gå ombord. Skriv till oss via WhatsApp eller fråga besättningen — om det finns plats lägger vi till dig. Samma pris, betalning ombord. I turtermer kallas det "walk-on" — det fungerar här.' }
    ],
    cta: {
      primary: 'Boka för Ikväll · Betalning Ombord',
      secondary: 'Bokning samma dag · Bekräftad på några minuter · Gratis avbokning 2 timmar före',
      tertiary: 'WhatsApp för Brådskande Bokningar'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Istanbul Kryssningspris från €{p.dinnerStd} — Transparenta Tariffer',
      description: 'Bosporenkryssning priser Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Barn 0-3 gratis, 4-8 halva priset. Transparenta tillägg.'
    },
    hero: {
      h1: 'Istanbul Kryssningspris',
      subtitle: 'Transparenta priser, inga dolda avgifter. Standard €{p.dinnerStd}/person, VIP €{p.dinnerVip}/person — och du betalar ombord, inte nu.',
      badge: 'Transparent · 40% RABATT Direkt · 0-3 År Gratis'
    },
    intro: [
      '**Istanbul kryssningspriser** varierar mycket — från budgetfärjor på €15 som hoppar över middagen till resortyachter på €150+. Vårt pris är i mitten och erbjuder bäst värde: €{p.dinnerStd} för Standard med full middagskryssning och show 3 timmar, €{p.dinnerVip} för VIP med premiumupplevelse framför scenen. Inga dolda avgifter, inga överraskningstillägg.',
      'En detaljerad uppdelning av **Istanbul kryssningspriset**, eftersom transparens är viktigt:\n\n- **Standard Middagskryssning**: €{p.dinnerStd}/person (tidigare €{p.dinnerStdOriginal}, 40% rabatt). Inkluderar 3-timmars tur, 10 mezzer, huvudrätt, dessert, obegränsade läsk, live show.\n- **VIP Middagskryssning**: €{p.dinnerVip}/person (tidigare €{p.dinnerVipOriginal}). Lägger till platser framför scenen, 15+ mezzer, oxfilé/ribeye-alternativ, prioriterad service.\n- **0-3 år**: Gratis. 4-8 år: 50% rabatt. 9+ år: fullt pris.\n\nTillägg (valfria):\n- 2 glas alkohol: +€{p.alcohol2}/person\n- Obegränsad lokal alkohol: +€{p.unlimited}/person\n- Hotelltransfer tur och retur: +€{p.transfer}/person\n- Romantisk borduppställning: +€{p.romantic}/bord',
      'Och viktigt: **betalning ombord**. Du lovar inte ett öre förrän du är på båten. Gratis avbokning fram till 2 timmar före avgång. Ingen förpliktelse, ingen risk — det mest **konsumentvänliga priset för Istanbul-kryssningen** du kommer att hitta.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (tidigare €{p.dinnerStdOriginal})', desc: '40% rabatt på normalt pris. 3-timmars tur, full turkisk middag, live show, obegränsade läsk. Det mest populära paketet — täcker allt du behöver för en härlig kväll.' },
      { title: 'VIP: €{p.dinnerVip} (tidigare €{p.dinnerVipOriginal})', desc: '40% rabatt på normalt pris. Lägger till platser framför scenen, 15+ mezzer, premium huvudrätt (oxfilé, ribeye), prioriterad servitörsservice. För speciella tillfällen eller premiumresenärer.' },
      { title: 'Pris för barn: 0-3 gratis, 4-8 halva priset', desc: '0-3 helt gratis (inga avgifter). 4-8 med 50% rabatt på vuxenpriset. 9+ fullt vuxenpris. Transparent, inga familjepris-trick. Transfern är också gratis för 0-3.' },
      { title: 'Tillägg — bara när du vill ha dem', desc: 'Alkohol: €{p.alcohol2} eller €{p.unlimited}/person. Transfer: €{p.transfer}/person. Romantiskt bord: €{p.romantic}/bord. Allt valfritt, inte paketerat. Välj bara vad du behöver.' }
    ],
    faq: [
      { q: 'Vad kostar en tur i Istanbul?', a: 'Standard Middagskryssning: €{p.dinnerStd}/person (normalt €{p.dinnerStdOriginal}, 40% rabatt). VIP: €{p.dinnerVip}/person (normalt €{p.dinnerVipOriginal}, 40% rabatt). 0-3 år gratis, 4-8 år halva priset. Betalning ombord — ingen förskottsbetalning. Gratis avbokning fram till 2 timmar före avgång.' },
      { q: 'Finns det dolda avgifter i Istanbul-turpriset?', a: 'Nej. Priset inkluderar: 3-timmars tur, full middag (mezzer, förrätt, huvudrätt, dessert), obegränsade läsk, live show, skatter. De valfria tilläggen (alkohol, transfer, romantiskt bord) är separata och med transparent pris — du betalar bara för det du lägger till. Ingen "serviceavgift", "hamnavgift", överraskningstillägg.' },
      { q: 'Varför är Istanbul-turpriset 40% rabatt — är det ett trick?', a: 'Inget trick. Det normala priset €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} är vad tredjepartsbokningssajter (Viator, GetYourGuide, Klook) tar ut — med sina kommissioner. Boka direkt och få €{p.dinnerStd}/€{p.dinnerVip}. Detta är skillnaden på 40%. Inga trick med begränsat eller dynamiskt pris.' },
      { q: 'Hur jämför Istanbul-turpriset med andra alternativ?', a: 'Loop-färjor: €5-10, 1 timme, ingen middag, ingen underhållning, bara turism. Budgetturer med middag: €20-30, fulla, genomsnittlig mat, kort show. Vår Standard (€{p.dinnerStd}): 3 timmar, full middag, full show, privat bord, TÜRSAB-licensierad. VIP (€{p.dinnerVip}): framför scenen, premiummeny. Resortyachter: €100-150+, överdrivet för solo-resenärer/par.' },
      { q: 'Måste jag betala Istanbul-turpriset i förväg?', a: 'Nej — **betalning ombord**. Boka nu (1-minuts formulär), vi bekräftar via WhatsApp, kom 19:30 och betala ombord (kontanter eller kort). Gratis avbokning fram till 2 timmar före. Noll ekonomisk förpliktelse förrän du är nöjd.' },
      { q: 'Finns det grupprabatter på Istanbul-turpriset?', a: 'För grupper på 10+ kan vi erbjuda 5-10% rabatt — skriv via WhatsApp med gruppstorleken. För 25+, överväg den privata turen (hela båten för din grupp, anpassad meny). För 2-9 personer gäller standardpriserna — redan 40% rabatt på normalt pris.' }
    ],
    cta: {
      primary: 'Boka · Betalning Ombord',
      secondary: 'Från €{p.dinnerStd}/person · 0-3 år gratis · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Bosporen Sevärdheter från €{p.dinnerStd} — Istanbul Sevärdheter från Vattnet',
      description: 'Bosporen sevärdhetskryssning: Dolmabahçe, Ortaköy, Bosporenbron, Rumeli, Beylerbeyi, Jungfrutornet. Kvällstur 3t med middag. Gratis avbokning, betalning ombord.'
    },
    hero: {
      h1: 'Turism på Bosporen',
      subtitle: 'Alla Istanbuls ikoniska landmärken — från vattnet, på natten, med middag. En tur på 3 timmar täcker Dolmabahçe, Ortaköy-moskén, Bosporenbron, Rumeli Hisarı och mycket mer.',
      badge: '10+ Landmärken · Europeiska och Asiatiska Kusterna · 3 Timmar'
    },
    intro: [
      '**Turism på Bosporen** från vattnet slår vilken bussturer som helst. Bosporen är stadens mest historiska vattenväg — osmanska sultaner, bysantinska kejsare, grekiska handelsmän och ryska krigsfartyg har alla passerat här. Idag passerar vår 3-timmars tur, med kommentarer från den engelsktalande besättningen, varje huvudlandmärke i Istanbul som definierar skylinen.',
      'Rutten för **vår turisttur på Bosporen** (kvällsavgång, 20:30-23:30):\n\n1. **Dolmabahçe-palatset** — 1800-tals osmansk residens, upplyst på natten\n2. **Çırağan-palatset** — nu lyxhotell, kunglig historia\n3. **Ortaköy-moskén** — en av Istanbuls mest fotograferade moskéer, över vattnet\n4. **Bosporenbron** — växlar på natten mellan blå, lila, guld\n5. **Bebek** — elegant stadsdel på den europeiska kusten\n6. **Rumeli Hisarı** — byggd av Fatih Sultan Mehmet 1452 före erövringen av Konstantinopel\n7. **Fatih Sultan Mehmet-bron** — andra Bosporenbron, dramatisk båge\n8. **Beylerbeyi-palatset** — asiatisk kust, osmansk sommarresidens\n9. **Üsküdar** — Istanbuls asiatiska kust, traditionell stadsdel\n10. **Jungfrutornet** — torn på liten ö, en av Istanbuls mest romantiska symboler',
      'Middagen och underhållningen är inkluderade — inte separat — så **turism på Bosporen** förvandlas till en komplett kväll. Turkisk flerrättersmiddag, livefolkdansshow, sema, orientalisk dans, DJ. Betyg 4,8★ av över 11.317 resenärer, licensierad av TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ huvudlandmärken i Istanbul', desc: 'Dolmabahçe-palatset, Çırağan-palatset, Ortaköy-moskén, Bosporenbron, Rumeli Hisarı, FSM-bron, Beylerbeyi-palatset, Üsküdar, Jungfrutornet. Varje väsentligt landmärke i Istanbul i en tur.' },
      { title: 'Båda kusterna, europeisk och asiatisk', desc: 'Europeisk kust på vägen dit (Dolmabahçe → Rumeli Hisarı), asiatisk kust på vägen tillbaka (Beylerbeyi → Üsküdar). Två kontinenter i en 3-timmars tur — bara Istanbul tillåter dig detta.' },
      { title: 'Kvällsturism = upplysta utsikter', desc: 'Dagturism visar dig landmärkena i platt ljus. Kvällsturen fångar dem i dramatisk topp: strålande gula palats, färgade broar, moskéer reflekterade i mörkt vatten. Bättre för foton, mer minnesvärda.' },
      { title: 'Middag + show inkluderade', desc: 'Turism + middag + underhållning i ett paket. Du behöver inte planera separat middag efter turen. Från €{p.dinnerStd}/person, betalning ombord, totalt 3 timmar.' }
    ],
    faq: [
      { q: 'Vilka Bosporen-landmärken kommer jag att se?', a: 'I ordning: Dolmabahçe-palatset, Çırağan-palatset, Ortaköy-moskén, Bosporenbron, Bebek-stadsdelen, Rumeli Hisarı, Fatih Sultan Mehmet-bron, Anadolu Hisarı, Beylerbeyi-palatset, Kuzguncuk, Üsküdar och Jungfrutornet (synligt på avstånd). 10+ huvudlandmärken på en 3-timmars rutt.' },
      { q: 'Är turism på Bosporen bättre på dagen eller på natten?', a: 'Olika upplevelser. Dag: tydligare utsikt över arkitektoniska detaljer, ljusare för foton. Natt: dramatisk belysning, mystisk atmosfär, färre båtar på vattnet. De flesta resenärer föredrar natturen eftersom landmärkena verkar mer magiska — och middagen + showen gör det till en komplett kväll.' },
      { q: 'Stannar båten vid landmärken för foton?', a: 'Det är en kontinuerlig tur — inga stopp (ingen avstigning). Båten passerar varje landmärke, besättningen förklarar vad du ser, du kan gå ut på det öppna däcket för foton. Inga köer, ingen promenad, ingen schemastress — bara en kontinuerlig fotomöjlighet på 3 timmar.' },
      { q: 'Kommenterar besättningen under turismen?', a: 'Ja — den engelsktalande besättningen erbjuder korta kommentarer när vi passerar varje huvudlandmärke (historia, arkitektur, kuriositeter). Det är inte en guidad lektion, mer en vänlig förklaring medan du äter middag. För djupare historia rekommenderar vi att para ihop med en promenadtur i Istanbul under dagen.' },
      { q: 'Hur skiljer sig turism på Bosporen från hop-on-färjan?', a: 'Hop-on-färjor (loop-båtar av Şehir Hatları): €5-10, 1-2 timmar, grundläggande, ingen middag, fulla. Vår tur: €{p.dinnerStd}, 3 timmar, full middag, live show, privat bord, kommentar på engelska. För seriös och bekväm turism är kvällsturen bättre. För snabb och ekonomisk transit fungerar loop-färjan.' },
      { q: 'Kan jag fotografera landmärkena från båten?', a: 'Ja — absolut. Det öppna däcket har utmärkta platser för fotografering. Landmärkena passerar 100-200 meter från båten. Smartphone-foton blir fantastiska; DSLR/spegellösa användare kan få storslagna kompositioner, särskilt vid övergången från gyllene timme till blå timme tidigt på kvällen.' }
    ],
    cta: {
      primary: 'Boka Turistturen · Betalning Ombord',
      secondary: '10+ landmärken · Middag + show · Gratis avbokning 2 timmar före',
      tertiary: 'Tillgänglighet Ikväll'
    }
  }

};
