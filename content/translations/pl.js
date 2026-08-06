/**
 * Polish translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Rejs z Kolacją Bosfor od €{p.dinnerStd} — Tour Nocny Stambuł + Pokaz',
      description: 'Rejs z kolacją 3 godziny po Bosforze: tureckie wielodaniowe menu i pokaz folklorystyczny na żywo. Wypłynięcie 21:00 z Kabataş.'
    },
    hero: {
      h1: 'Rejs z Kolacją po Bosforze w Stambule',
      subtitle: 'Trzy godziny rozrywki na żywo, bogata turecka uczta i najbardziej widowiskowe nocne widoki Bosforu.',
      badge: '4,8★ · 11 317 opinii'
    },
    intro: [
      '**Rejs z kolacją po Bosforze** to najbardziej kultowe wieczorne doświadczenie w Stambule. Nasz rejs rozpoczyna się o 20:00 przy przystani Kabataş — płynąc pod podświetlonymi mostami Bosforu i Fatih Sultan Mehmet, serwujemy bogatą kuchnię turecką, pokazy tańca ludowego, taniec brzucha i set DJ-a, który trzyma pokład w ruchu aż do 23:00.',
      'W przeciwieństwie do zwykłych łodzi turystycznych tłoczących się po Bosforze, nasz **rejs z kolacją po Bosforze** posiada licencję TÜRSAB (A-17672) i został oceniony na 4,8★ przez ponad 11 317 podróżnych. Utrzymujemy kameralne grupy i ciepłą obsługę — a ponieważ płacą Państwo na pokładzie, rezerwacja z wyprzedzeniem nie wiąże się z żadnym ryzykiem.',
      'Czy świętują Państwo rocznicę, szukają premium stambulskiego wieczoru dla rodziny, czy pragną najbardziej fotogenicznego przejścia z zachodu słońca w noc — to jest rejs z kolacją, który mieszkańcy Stambułu polecają w pierwszej kolejności.'
    ],
    highlights: [
      { title: 'Bogata turecka uczta', desc: '10 rodzajów mezze, ciepła przystawka (paçanga böreği), danie główne do wyboru (łosoś / dorada / kurczak / kotlety / wegetariańskie), ciasto deserowe z lodami, nieograniczone napoje bezalkoholowe.' },
      { title: 'Tańce ludowe, taniec brzucha i DJ na żywo', desc: 'Pokaz sema Mewlana, 5 tradycyjnych tureckich tańców ludowych, klasyczny taniec brzucha, tureccy muzycy na żywo, a następnie set DJ-a przez cały rejs.' },
      { title: 'Pełna nocna trasa po Bosforze', desc: 'Kabataş → Dolmabahçe → Pałac Çırağan → Meczet Ortaköy → Bebek → Rumeli Hisarı → Most FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Od €{p.dinnerStd}/osobę — płatność na pokładzie', desc: 'Rejs z kolacją €{p.dinnerStd} (dawniej €{p.dinnerStdOriginal}). Bez przedpłaty. Bezpłatna anulacja do 2 godzin przed odpłynięciem.' }
    ],
    faq: [
      { q: 'O której zaczyna się rejs z kolacją po Bosforze?', a: 'Wejście na pokład przy przystani Kabataş rozpoczyna się o 20:00. Łódź wypływa o 21:00 i wraca około 00:00. Zalecamy przybycie 15-20 minut wcześniej, aby zająć miejsce i się rozgościć.' },
      { q: 'Ile kosztuje rejs z kolacją po Bosforze?', a: 'Rejs z kolacją €{p.dinnerStd}/osobę (cena regularna €{p.dinnerStdOriginal}). Dzieci 0-3 lata bezpłatnie, 4-8 lat 50% zniżki. Płatność odbywa się na pokładzie — bez przedpłaty.' },
      { q: 'Czy alkohol jest wliczony w cenę rejsu z kolacją?', a: 'Nieograniczone napoje bezalkoholowe (woda, cola, soki) są wliczone w cenę. Pakiet alkoholowy jest opcjonalny: 2 kieliszki (wino, piwo, rakı, wódka lub gin) +€{p.alcohol2}/osobę. Dodatkowe napoje i alkohole importowane wyceniane są osobno na pokładzie.' },
      { q: 'Czy oferują Państwo transfer z hotelu?', a: 'Tak — odbiór i odwiezienie kosztują +€{p.transfer}/osobę. Strefy obsługi: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Sütlüce i Şişli. Mogą Państwo wybrać w kreatorze rezerwacji.' },
      { q: 'Czy rejs z kolacją po Bosforze jest halal?', a: 'Zdecydowanie. Wszystkie produkty mięsne na pokładzie posiadają certyfikat halal. Alkohol jest opcjonalnym dodatkiem (nie jest narzucany gościom), a układ miejsc naturalnie oddziela stoły preferujące bezalkoholową atmosferę. Bez dodatkowych opłat oferujemy również opcje wegetariańskie.' },
      { q: 'W co powinienem się ubrać?', a: 'Smart casual. Wieczory w Stambule mogą być wietrzne nawet latem — zalecamy cienką marynarkę lub szal. Nie ma obowiązkowego dress code\'u, ale strój kąpielowy, klapki czy odzież sportowa nie pasują do atmosfery kolacji.' }
    ],
    cta: {
      primary: 'Zarezerwuj Teraz · Płatność na Pokładzie',
      secondary: 'Bezpłatna anulacja do 2 godzin przed odpłynięciem',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosfor z Dziećmi — Rejs Rodzinny od €{p.dinnerStd}/dorosły',
      description: 'Rodzinny rejs z kolacją po Bosforze. Dzieci 0-3 gratis, 4-8 połowa ceny. Bezpieczna sala, menu dla dzieci. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    hero: {
      h1: 'Rejs po Bosforze z Dziećmi',
      subtitle: 'Rodzinny wieczór na Bosforze stworzony dla rodzin z dziećmi — kolacja, rozrywka oraz bezpieczna, komfortowa atmosfera.',
      badge: 'Rodzinny · Halal · Dzieci 0-3 Bezpłatnie'
    },
    intro: [
      '**Rejs po Bosforze z dziećmi** to najbardziej przyjazna rodzinom wieczorna opcja w Stambule. Każdej nocy witamy dziesiątki rodzin — każdy szczegół zaprojektowaliśmy z myślą o komforcie dzieci: zadaszone miejsca siedzące, aby najmłodsi byli w cieple, dostępne menu przyjazne dzieciom (proste grillowane kurczaki, makaron, nieograniczone napoje bezalkoholowe) oraz wczesne wejście na pokład, aby uniknąć późnych wieczornych marudzeń.',
      'W przeciwieństwie do łodzi wyłącznie dla dorosłych, nasz **rejs z kolacją po Bosforze dla rodzin** pozostaje ciepły i inkluzywny. **Dzieci 0-3 lata bezpłatnie** (transfer wliczony), 4-8 lat **50% zniżki**, od 9 lat cena pełna — żadnych ukrytych opłat. Tańce ludowe, taniec brzucha i pokaz sema to delikatna rodzinna rozrywka, a nie klub nocny.',
      'Niezależnie od tego, czy przyjeżdżają Państwo do Stambułu na długi weekend z maluchem, czy przywożą nastolatki na ich pierwszą podróż po Europie — to jest rejs, który polecają stambulskie rodziny. Bezpieczny, z certyfikatem halal, z licencją TÜRSAB i oceną 4,8★ od ponad 11 317 podróżnych.'
    ],
    highlights: [
      { title: 'Dzieci 0-3 lata całkowicie bezpłatnie', desc: 'Bez opłat za niemowlęta i maluchy. 4-8 lat 50% ceny dorosłego. Od 9 lat pełny gość. Przejrzyście, bez niespodzianek.' },
      { title: 'Zadaszona strefa wewnętrzna', desc: 'W chłodniejszych miesiącach w pełni zadaszona i ogrzewana. Dzieci pozostają w cieple, chronione przed wiatrem. Przy dobrej pogodzie dostępny również otwarty pokład — wybór należy do Państwa.' },
      { title: 'Menu dla dzieci na życzenie', desc: 'Proste grillowane kurczaki, makaron, chleb i warzywa — bez dodatkowych opłat. Nieograniczone napoje bezalkoholowe (cola, sok, woda). Prosimy o wcześniejszą informację — żadnych zaskakujących pikantnych mezze dla maluchów.' },
      { title: 'Rozrywka bezpieczna dla rodzin', desc: 'Pokaz sema (fascynujący dla dzieci), 5 tradycyjnych tańców ludowych, turecka muzyka na żywo i set DJ-a. Wszystko przyjazne rodzinom — bez treści dla dorosłych. Dzieci często dołączają do tańca.' }
    ],
    faq: [
      { q: 'Czy rejs po Bosforze jest bezpieczny dla małych dzieci?', a: 'Tak — nasza łódź posiada licencję TÜRSAB, zadaszoną strefę wewnętrzną z bezpiecznymi oknami, kamizelki ratunkowe w każdym rozmiarze i profesjonalną załogę doświadczoną z rodzinami. Zalecamy wewnętrzny pokład dla maluchów, otwarty pokład dla dzieci od 6 lat.' },
      { q: 'Ile kosztuje rejs po Bosforze dla dzieci?', a: 'Dzieci **0-3 lata: BEZPŁATNIE** (bez opłat, bez ukrytych kosztów). **4-8 lat: 50% zniżki** od ceny dorosłego — czyli w rejsie Standard €{p.dinnerStd}/2 = €12 za dziecko. **Od 9 lat: pełna cena dorosłego.** Transfer hotelowy bezpłatny dla 0-3 lat, standardowy od 4 lat (€{p.transfer}/osobę).' },
      { q: 'Czy na pokładzie jest menu dla dzieci?', a: 'Tak — proste grillowane kurczaki, makaron, chleb, sezonowe warzywa i nieograniczone napoje bezalkoholowe. Prosimy poinformować przy rezerwacji o alergiach lub wybrednych zjadaczach, a przygotujemy coś, co Państwa dziecko z radością zje.' },
      { q: 'Czy muzyka lub pokaz nie są za głośne dla dzieci?', a: 'Występy na żywo odbywają się w jednej wyznaczonej strefie sceny — jeśli dziecko jest wrażliwe na dźwięki, posadzimy Państwa przy tylnym, cichszym stole. Pokaz trwa łącznie 40 minut, a resztę wieczoru wypełnia muzyka ambient po turecku i DJ na umiarkowanej głośności.' },
      { q: 'Co jeśli moje dziecko zaśnie podczas rejsu?', a: 'Nie ma problemu — wielu zasypia. W strefie wewnętrznej mamy kanapy bankietowe, na których niemowlę lub maluch może wygodnie się zdrzemnąć. Poproszą Państwo załogę o ciepły koc, jeśli będzie potrzebny. Bez dodatkowych opłat.' },
      { q: 'Czy zabierać wózek na pokład?', a: 'Można, ale zalecamy pozostawienie dużych wózków w hotelu (lub u naszego kierowcy, jeśli wzięli Państwo transfer — bezpiecznie go przypilnujemy). Nasza łódź ma wąskie korytarze, a pokłady są schodkowe. Na pokładzie łatwiejszy będzie lekki nosidełko.' }
    ],
    cta: {
      primary: 'Zarezerwuj Rejs Rodzinny · Płatność na Pokładzie',
      secondary: 'Bezpłatna anulacja do 2 godzin przed odpłynięciem · Bez przedpłaty',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantyczny Rejs Bosfor od €{p.dinnerStd} — Kolacja przy Świecach dla 2',
      description: 'Romantyczny rejs po Bosforze: stół przy świecach, róże, wielodaniowa kolacja pod oświetlonymi mostami. Od €{p.dinnerStd}/osoba.'
    },
    hero: {
      h1: 'Romantyczny Rejs po Bosforze',
      subtitle: 'Kolacja przy świecach, stół udekorowany różami, podświetlone mosty i wyjątkowa chwila tylko dla Państwa dwojga pod najbardziej kultowym nocnym niebem Stambułu.',
      badge: 'Rocznica · Miesiąc Miodowy · Wyjątkowy Wieczór'
    },
    intro: [
      '**Romantyczny rejs po Bosforze** to najbardziej kultowy wieczór dla par w Stambule. Gdy słońce zachodzi nad Pałacem Dolmabahçe, a Most Bosforski rozbłyska kolorami, Państwo i partner dzielą bogatą turecką ucztę przy prywatnym stole — ze świecami, świeżymi kwiatami i skrzypcami na żywo niosącymi się po pokładzie.',
      'Nasza aranżacja stolika romantycznego (+€{p.romantic}/stół) zamienia każde miejsce w wyjątkową chwilę: czerwone róże, migoczące świece, odręcznie napisany bilecik powitalny. Dodaj pakiet 2 kieliszków na wino pod gwiazdami (+€{p.alcohol2}/osobę) lub pozostań przy dołączonych napojach bezalkoholowych. Tak czy inaczej, załoga dyskretnie zajmie się resztą.',
      'Niezależnie od tego, czy świętują Państwo rocznicę, planują niespodziankę dla partnera, czy po prostu chcą niezapomniany wieczór w najbardziej romantycznym mieście Europy — to jest rejs, który pary w Stambule wybierają w pierwszej kolejności. Ocena 4,8★, licencja TÜRSAB i — co najważniejsze — płatność na pokładzie, więc zobowiązują się Państwo wyłącznie do samego wieczoru.'
    ],
    highlights: [
      { title: 'Stół romantyczny przy świecach', desc: 'Dodaj aranżację stolika romantycznego za +€{p.romantic}/stół: świeże czerwone róże, migoczące świece, płatki róż na obrusie i odręcznie napisana kartka. Zdjęcia wliczone.' },
      { title: 'Najlepsze stoliki na przejście z zachodu słońca w noc', desc: 'Stoliki przy oknach są zarezerwowane dla par. Oglądajcie rozbłysk Mostu Bosforskiego, migotanie Wieży Panny i podświetlenie Meczetu Ortaköy z własnego, prywatnego stołu.' },
      { title: 'Skrzypce na żywo i kameralna atmosfera', desc: 'Podczas kolacji skrzypce na żywo i akustyczna muzyka turecka tworzą powolną, romantyczną atmosferę. Później pojawia się DJ, a pary tańczą pod światłami na otwartym pokładzie.' },
      { title: 'Wino, szampan, dobory premium', desc: 'Dodaj 2 kieliszki alkoholu — lokalne wino, piwo, rakı (+€{p.alcohol2}/osobę). Szampan importowany i dobory premium na życzenie — prosimy pytać przy rezerwacji.' }
    ],
    faq: [
      { q: 'Co czyni ten rejs romantycznym?', a: 'Połączenie prywatnego stołu, aranżacji przy świecach (opcjonalnie +€{p.romantic}), bogatej tureckiej kolacji, skrzypiec na żywo i muzyki akustycznej oraz podświetlonych mostów Bosforu przepływających nad głowami. Projektujemy doświadczenie dla par — wczesna cicha atmosfera, później energiczny DJ i taniec. Państwo wybierają rytm.' },
      { q: 'Czy możecie zaaranżować niespodziankę dla mojego partnera — urodziny, rocznicę, oświadczyny?', a: 'Tak — prosimy poinformować przy rezerwacji. Możemy skoordynować tort urodzinowy (bezpłatny), specjalną aranżację stołu, odręcznie napisaną kartkę w Państwa języku lub dostarczenie czegoś do stołu w odpowiednim momencie. W przypadku oświadczyn zalecamy napisanie bezpośrednio na WhatsApp, aby mogliśmy zaplanować wszystko dyskretnie.' },
      { q: 'Ile kosztuje romantyczny rejs dla 2 osób?', a: 'Rejs z kolacją dla 2 osób: 2 × €{p.dinnerStd} = €48.60. Dodaj aranżację romantyczną +€{p.romantic} = €63.60. Bez przedpłaty — płatność na pokładzie. Pakiet 2 kieliszków dodatkowo 2 × €{p.alcohol2} = €20.' },
      { q: 'Czy romantyczny rejs po Bosforze jest prywatny — tylko dla nas?', a: 'Nie — to rejs współdzielony z innymi parami i gośćmi (do 60-80 łącznie). Państwa **stół** jest prywatny (tylko dla Państwa grupy), ale na pokładzie są również inni goście. Jeśli chcą Państwo całkowicie prywatnej łodzi tylko dla 2 osób, jest to oddzielny **Prywatny Rejs po Bosforze** (możemy zaaranżować na życzenie — prosimy napisać).' },
      { q: 'Czy możemy przynieść własne kwiaty, tort lub prezent?', a: 'Oczywiście. Przynieście, co chcecie — załoga pomoże dyskretnie umieścić niespodziewany prezent, ukryć pudełko z pierścionkiem w deserze lub wyeksponować kwiaty, które Państwo przynieśli. Żadnych opłat za korkowe czy podobnych ekstra. Prosimy tylko poinformować, abyśmy mogli skoordynować czas.' },
      { q: 'W co powinniśmy się ubrać na romantyczny rejs po Bosforze?', a: 'Od smart casual do eleganckiego — wiele par ubiera się elegancko (sukienki, marynarki). Nie ma ścisłego dress code\'u, ale atmosfera jest bardziej wyjątkowa niż zwykły casual turystyczny. Proszę zabrać cienką marynarkę lub szal — pokład może być chłodny nawet latem. Wygodne obuwie, jeśli planują Państwo tańczyć po kolacji.' }
    ],
    cta: {
      primary: 'Zarezerwuj Romantyczny Rejs · Płatność na Pokładzie',
      secondary: 'Dodaj aranżację romantyczną (+€{p.romantic}) w kreatorze rezerwacji · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Halal Rejs z Kolacją Bosfor od €{p.dinnerStd} — Pokaz Live + Tour Nocny',
      description: 'Rejs z kolacją 3 godziny po Bosforze: pokaz folklorystyczny na żywo, oświetlone mosty, panoramiczny Bosfor nocą. Menu halal dostępne na życzenie.'
    },
    hero: {
      h1: 'Halal Rejs po Bosforze w Stambule',
      subtitle: 'Menu z certyfikatem 100% halal, alkohol zawsze opcjonalny, rozrywka przyjazna rodzinom oraz atmosfera pełna szacunku dla muzułmańskich podróżnych — wieczór na Bosforze zrobiony jak należy.',
      badge: '100% Halal · Przyjazny Rodzinom · Muzułmański Właściciel'
    },
    intro: [
      '**Halal rejs po Bosforze** to najbardziej szanowany rejs z kolacją w Stambule dla muzułmańskich podróżnych. Każde mięso serwowane na naszej łodzi — łosoś, dorada, kurczak, kotlety jagnięce, polędwica wołowa, antrykot — posiada **certyfikat halal** od zatwierdzonych dostawców. Serwujemy to samo menu każdemu gościowi; nie ma oddzielnej "sekcji halal", ponieważ cała łódź jest halal domyślnie.',
      'Alkohol jest **dodatkiem opcjonalnym** — nigdy nie jest narzucany gościom, a układ miejsc naturalnie oddziela stoły preferujące bezalkoholową atmosferę. Dla gości, którzy chcą pakietu alkoholowego 2 kieliszków (+€{p.alcohol2}/osobę), jest on dostępny, ale wliczone nieograniczone napoje bezalkoholowe (woda, cola, sok) wystarczą większości muzułmańskich rodzin. Nasza załoga jest przeszkolona w zachowywaniu szacunku bez przyjmowania założeń o Państwa preferencjach.',
      '**Halal-przyjazny rejs po Bosforze** ma znaczenie dla podróżnych z Arabii Saudyjskiej, ZEA, Kuwejtu, Kataru, Iranu, Malezji, Indonezji, Pakistanu i Maroka, którzy chcą najbardziej kultowego wieczoru w Stambule bez kompromisów. Licencja TÜRSAB, 4,8★ i płatność na pokładzie — nie zobowiązują się Państwo do niczego, dopóki nie upewnią się, że doświadczenie spełnia Państwa standardy.'
    ],
    highlights: [
      { title: 'Menu z certyfikatem 100% halal', desc: 'Całe mięso (łosoś, dorada, kurczak, kotlety, wołowina, antrykot) posiada certyfikat halal od zatwierdzonych dostawców. Kuchnia przestrzega zasad przygotowania halal. Bez produktów wieprzowych i dodatków niehalal. Opcje wegetariańskie zawsze dostępne.' },
      { title: 'Alkohol opcjonalny, nigdy narzucany', desc: 'Pakiety alkoholowe to dodatek — nie są domyślnie wliczone. Napoje bezalkoholowe (woda, cola, sok) są nieograniczone i bezpłatne. Stół pozostaje bezalkoholowy, chyba że wyraźnie Państwo poproszą. Załoga dyskretnie szanuje Państwa wybór.' },
      { title: 'Rozrywka przyjazna rodzinom', desc: 'Pokaz sema, tradycyjne tureckie tańce ludowe, turecka muzyka na żywo. Bez klubowych występów, bez nieodpowiednich treści. Bezpieczne dla dzieci, pełne szacunku dla rodzin. Taniec brzucha to tradycyjna forma sztuki, prezentowana skromnie.' },
      { title: 'Szacunek dla czasu modlitwy', desc: 'Jeśli czas wejścia na pokład przypada na Maghrib lub Iszę (20:00-21:00), nasza załoga może przed odpłynięciem skierować Państwa do cichej strefy modlitewnej na przystani Kabataş. Wystarczy poinformować przy rezerwacji.' }
    ],
    faq: [
      { q: 'Czy rejs po Bosforze jest w 100% halal?', a: 'Tak — każdy produkt mięsny w menu (ryby, kurczak, kotlety, polędwica wołowa, antrykot, jagnięcina) posiada certyfikat halal od zatwierdzonych dostawców. Kuchnia przestrzega standardów przygotowania halal. Wieprzowina nie jest serwowana nigdzie na łodzi. To nie jest "opcja halal" — całe menu jest halal.' },
      { q: 'Czy inni goście na tym rejsie piją alkohol?', a: 'Niektórzy goście dodają opcjonalny pakiet 2 kieliszków (+€{p.alcohol2}/osobę). Stoły są naturalnie oddzielone — mogą Państwo poprosić o sekcję bezalkoholową. Załoga nie przynosi alkoholu, chyba że zostanie wyraźnie zamówiony przez gościa. Napoje bezalkoholowe (nieograniczone) są wliczone dla wszystkich.' },
      { q: 'Czy ten rejs jest odpowiedni dla muzułmańskich rodzin z dziećmi?', a: 'Tak — to jeden z najbardziej szanowanych dla rodzin rejsów w Stambule. Rozrywka jest skromna (tańce ludowe, sema, muzyka turecka), dzieci poniżej 3 lat bezpłatnie, 4-8 lat 50% zniżki. Bez klubowej atmosfery. Rodziny z regionu Zatoki, Indonezji, Malezji, Pakistanu i Maroka regularnie rezerwują ten rejs.' },
      { q: 'Czy mogę modlić się na pokładzie?', a: 'Na łodzi nie ma dedykowanego pomieszczenia modlitewnego, ale zalecamy modlitwę przed wejściem na pokład o 20:00 (Maghrib zwykle mieści się w tym oknie). Na przystani Kabataş dostępne są udogodnienia modlitewne. Jeśli muszą Państwo modlić się podczas rejsu 21:00-00:00 (Isza), proszę porozmawiać z załogą — możemy zorganizować cichy kąt na pokładzie.' },
      { q: 'Jakie są ceny dla muzułmańskiej rodziny 4-osobowej (2 dorosłych, 2 dzieci)?', a: 'Rejs z kolacją: 2 × €{p.dinnerStd} + 2 × €12.15 (4-8 lat pół ceny) = €72.90. Jeśli dzieci poniżej 3 lat są bezpłatne: 2 × €{p.dinnerStd} = €48.60. Dodaj €5 transfer hotelowy na dorosłego. Suma: €48.60–€92.90 dla rodziny 4-osobowej, bez przedpłaty, płatność na pokładzie.' },
      { q: 'Czy transfer hotelowy jest również halal?', a: 'Transfer hotelowy to tylko przejazd samochodem — nie dotyczy jedzenia ani napojów, więc kwestia halal nie ma zastosowania. Nasi kierowcy są profesjonalni, szanujący i punktualni. Strefy transferu obejmują Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli i 8 innych centralnych dzielnic, gdzie muzułmańscy podróżni zazwyczaj się zatrzymują.' }
    ],
    cta: {
      primary: 'Zarezerwuj Halal Rejs · Płatność na Pokładzie',
      secondary: 'Bezpłatna anulacja do 2 godzin · Bez przedpłaty · Certyfikat halal',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Doświadczenie VIP na Bosforze od €{p.dinnerStd} — premium kolacja na Bosforze',
      description: 'Rejs z kolacją po Bosforze w standardzie VIP: pełne tureckie menu, pokazy na żywo, opcjonalny stolik przy scenie, uważna obsługa. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Płatność na pokładzie, bezpłatna anulacja.'
    },
    hero: {
      h1: 'Doświadczenie VIP na Bosforze — rejs z kolacją',
      subtitle: 'Jedno menu, jeden standard: premium dla każdego. Trzygodzinny wieczór na Bosforze na pokładzie AMOR — obfita turecka kolacja, pokazy na scenie na żywo i opcjonalny prywatny stolik przy scenie. Nie sprzedajemy osobnej "klasy VIP" — to, co mamy najlepsze, podajemy każdemu gościowi.',
      badge: '40% RABATU · Jedno menu, standard premium · Płatność na pokładzie'
    },
    intro: [
      'Wiele statków na Bosforze dzieli gości na "Standard" i "VIP". My nie. Na pokładzie **AMOR** jest jedno menu kolacyjne, przygotowywane z taką samą starannością dla wszystkich: 10 rodzajów tureckich meze, ciepła przystawka, danie główne do wyboru (łosoś, labraks, kurczak lub köfte), lodowy tort i napoje bezalkoholowe bez ograniczeń. Cały program rozrywkowy również jest wliczony — ceremonia wirujących derwiszy, 5 tańców ludowych, taniec brzucha, muzyka na żywo i DJ — wszystko w cenie €{p.dinnerStd}/osobę.',
      'Poczucie VIP zaczyna się przy Twoim stoliku. Jeśli chcesz być najbliżej sceny i widoków, dodaj **prywatny stolik przy scenie** (+€{p.romantic}/stolik), a miejsce zostanie zarezerwowane z wyprzedzeniem — najlepszy kąt na derwiszy, tańce ludowe i rozświetlony Bosfor. Ulubiony wybór par, uroczystości i miłośników fotografii.',
      'AMOR to nowoczesny statek: 42 metry, 3 pokłady, do 400 gości, ogrzewany zimą i klimatyzowany latem. Trzygodzinna trasa startuje z Kabataş (wejście na pokład od 20:00, wypłynięcie 21:00, powrót 00:00) i prowadzi obok Dolmabahçe, meczetu Ortaköy, twierdzy Rumeli oraz świateł mostu na Bosforze. Licencja TÜRSAB (A-17672), 4,9★ w Google. Bez przedpłaty — płacisz na pokładzie, a bezpłatna anulacja obowiązuje do 2 godzin przed wypłynięciem.'
    ],
    highlights: [
      { title: 'Jedno menu, standard premium', desc: 'Nie ma osobnego "menu VIP" — bo nasze jedyne menu już jest na tym poziomie. 10 rodzajów meze, ciepła przystawka, 4 dania główne do wyboru, deser i napoje bezalkoholowe bez ograniczeń, podawane z taką samą starannością przy każdym stoliku.' },
      { title: 'Prywatny stolik przy scenie (+€{p.romantic}/stolik)', desc: 'Stoliki najbliżej derwiszy, tańców ludowych i tańca brzucha rezerwujemy z wyprzedzeniem. Doskonały widok na scenę i Bosfor. Twój stolik jest prywatny, nie dzielony z nikim.' },
      { title: 'Uważna obsługa przy stoliku', desc: 'Nasz zespół obsługuje Cię przy stoliku: dania, podpowiedzi z menu, dodatkowe napoje, specjalne życzenia. Bez kolejek w tłumie.' },
      { title: '40% RABATU — było €{p.dinnerStdOriginal}, teraz €{p.dinnerStd}', desc: 'Cena rezerwacji bezpośredniej: €{p.dinnerStd}/osobę (cena katalogowa €{p.dinnerStdOriginal}). Płatność na pokładzie, bez przedpłaty. Bezpłatna anulacja do 2 godzin przed wypłynięciem.' }
    ],
    faq: [
      { q: 'Czy sprzedajecie "pakiet VIP"? Czym różni się od Standardu?', a: 'Nie sprzedajemy osobnego pakietu VIP — jest jedno menu, podawane wszystkim w tym samym standardzie premium. To, co nazywamy "doświadczeniem VIP", to dopasowanie wieczoru do Ciebie: prywatny stolik przy scenie (+€{p.romantic}/stolik), uważna obsługa przy stoliku i opcjonalne dodatki do picia. Rejs trwa 3 godziny, €{p.dinnerStd}/osobę.' },
      { q: 'Czy €{p.dinnerStd} to naprawdę 40% rabatu?', a: 'Tak — nasza cena katalogowa to €{p.dinnerStdOriginal}/osobę. €{p.dinnerStd} to stawka rezerwacji bezpośredniej, bez prowizji pośredników. Płacisz na pokładzie, nie ma żadnej przedpłaty.' },
      { q: 'Co jest w menu?', a: '10 rodzajów tureckich meze, ciepła przystawka, danie główne do wyboru (łosoś, labraks, kurczak lub köfte) i lodowy tort na deser, a do tego napoje bezalkoholowe bez ograniczeń. Program rozrywkowy jest wliczony: ceremonia derwiszy, 5 tańców ludowych, taniec brzucha, muzyka na żywo i DJ.' },
      { q: 'Czy alkohol jest wliczony?', a: 'Nie — alkohol to osobny dodatek: 2 kieliszki lokalnego wina lub piwa za +€{p.alcohol2}/osobę. Napoje bezalkoholowe są wliczone bez ograniczeń i bezpłatnie. Premium alkohole importowane rozliczane są osobno na pokładzie.' },
      { q: 'Jak zagwarantować sobie stolik przy scenie?', a: 'Wystarczy przy rezerwacji wybrać dodatek "prywatny stolik przy scenie" (+€{p.romantic}/stolik) — stolik zostanie zarezerwowany na Twoje nazwisko. Najlepsze miejsca zajmują rezerwacje z wyprzedzeniem, dlatego warto dodać go przed dniem rejsu.' },
      { q: 'Jaki to statek?', a: 'AMOR — nowoczesny statek pasażerski o długości 42 metrów, 3 pokłady, pojemność 400 gości, ogrzewany zimą i klimatyzowany latem. Wypłynięcie z nabrzeża Kabataş: wejście na pokład 20:00, wypłynięcie 21:00, powrót 00:00. Trasa: Dolmabahçe, Ortaköy, twierdza Rumeli, Beylerbeyi i światła mostu na Bosforze.' }
    ],
    cta: {
      primary: 'Zarezerwuj stolik · Płatność na pokładzie',
      secondary: 'Było €{p.dinnerStdOriginal}, teraz €{p.dinnerStd} · Bezpłatna anulacja do 2 godzin przed',
      tertiary: 'Dodaj prywatny stolik przy scenie (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Prywatny Rejs Bosfor — Czarter Łodzi w Stambule (25+ gości)',
      description: 'Prywatny rejs Bosfor dla grup, ślubów, wydarzeń firmowych. Ekskluzywna łódź, menu na zamówienie, elastyczny czas. Bezpłatne anulowanie. WhatsApp po wycenę.'
    },
    hero: {
      h1: 'Prywatny Rejs po Bosforze',
      subtitle: 'Wynajmij całą łódź dla swojej grupy — uroczystości rodzinne, kolacje firmowe, urodziny, zaręczyny, wesela. Ekskluzywne użytkowanie, niestandardowe menu, elastyczny harmonogram.',
      badge: 'Wynajem Prywatny · 25+ Gości · Menu Niestandardowe'
    },
    intro: [
      '**Prywatny rejs po Bosforze** oznacza, że cała łódź jest Państwa — żadnych innych gości, żadnych współdzielonych stołów, żadnych współdzielonych parkietów tanecznych. Idealny na spotkania rodzinne, kolacje firmowe, przyjęcia urodzinowe, wieczory kawalerskie/panieńskie lub przyjęcia weselne. Łódź, załoga, menu, rozrywka i harmonogram dostosowują się do Państwa grupy.',
      'Nasz **wynajem prywatnego rejsu po Bosforze** obsługuje grupy od **25 do 80 gości**. Mniejsze grupy mogą nadal poprosić o doświadczenie prywatne — wyceniamy je z opłatą minimalną, która pokrywa koszty operacyjne łodzi. Większe grupy (rozmiar weselny) otrzymują wycenę niestandardową i zwykle obejmują dekoracje specjalne, zespół na żywo, serwis tortu i wydłużony czas (4-5 godzin zamiast standardowych 3).',
      'Niezależnie od tego, czy organizują Państwo wydarzenie firmowe dla klientów, 50. przyjęcie urodzinowe, czy przyjęcie weselne pod najbardziej kultowymi mostami Stambułu, to jest **prywatny rejs**, któremu ufają stambulscy planiści wydarzeń. Ocena 4,8★, licencja TÜRSAB, w pełni anglojęzyczna załoga i elastyczność we wszystkim — trasa, menu, muzyka, harmonogram.'
    ],
    highlights: [
      { title: 'Cała łódź, tylko dla Państwa', desc: 'Żadnych innych gości. Państwa grupa ma każdy pokład, każdy stół. Wybierają Państwo swoją muzykę, swój dress code, swój program. Prywatność ma znaczenie — szanujemy to.' },
      { title: 'Niestandardowe menu i pakiet napojów', desc: 'Współpracujcie z naszym szefem kuchni, aby dostosować menu: konkretne mezze, wybory dań głównych, potrawy specyficzne dla Państwa kultury lub potrzeb dietetycznych. Pakiety alkoholowe, kieliszki szampana, niestandardowe bary koktajlowe — wszystko można zaaranżować.' },
      { title: 'Elastyczny czas trwania i godzina wypłynięcia', desc: 'Standardowe 3 godziny można wydłużyć do 4-5. Wybierają Państwo wypłynięcie dzienne o 12:00, zachód słońca o 17:30 lub noc o 21:00. Chcą Państwo dzień powszedni zamiast weekendu? Nie problem — dostosujemy się do Państwa harmonogramu.' },
      { title: 'Niestandardowy wystrój, zespół, program', desc: 'Dodaj niestandardowe dekoracje (balony, banery, aranżacje kwiatowe), zespół na żywo zamiast DJ-a, serwis tortu weselnego, koordynację fotografa, przemówienia — cokolwiek Państwa wydarzenie wymaga. Jesteśmy planistami wydarzeń, nie tylko operatorami łodzi.' }
    ],
    faq: [
      { q: 'Ile kosztuje prywatny rejs po Bosforze?', a: 'Dla grup 25+ zwykle €{p.dinnerStd}/osobę + opłata za wynajem łodzi w zależności od wielkości grupy, daty i czasu trwania. Proszę napisać na WhatsApp z wielkością grupy, datą i wymaganiami — wyceniamy w ciągu 1 godziny. Większość wydarzeń mieści się w przedziale €2000-€6000 całkowitej.' },
      { q: 'Jakie jest minimum wielkości grupy dla prywatnego rejsu po Bosforze?', a: 'Technicznie 25 gości czyni prywatny rejs ekonomicznie wykonalnym. Mniejsze grupy (10-24) mogą nadal wynająć prywatnie, ale zapłacą opłatę minimalną równoważną około 25 osobom. Dla naprawdę małych grup (2-10) proszę rozważyć zwykły rejs z kolacją — Państwa stół już jest prywatny, tylko łódź jest współdzielona.' },
      { q: 'Czy mogę zorganizować ślub na rejsie po Bosforze?', a: 'Tak — organizujemy 10-15 przyjęć weselnych rocznie. Pojemność do 80 na kolację zasiadaną, do 100 w stylu koktajlowym. Skoordynujemy się z Państwa fotografem, planistą ślubu, zespołem lub szefem kuchni. Można zaaranżować niestandardowy serwis tortu, pierwszy taniec, wznoszenie toastów szampanem. Proszę napisać na WhatsApp w sprawie wyceny ślubu.' },
      { q: 'A co z wydarzeniami firmowymi i kolacjami zespołowymi?', a: 'Prywatne rejsy firmowe to nasze najczęstsze rezerwacje. Kolacja firmowa, goszczenie klientów, premiera produktu, uroczystość zespołu — wszystko działa. Możemy wystawić fakturę z rozbiciem VAT, zaaranżować transfery hotelowe dla zespołu i koordynować materiały brandowe (akcesoria stołowe, banery) na życzenie.' },
      { q: 'Czy mogę przywieźć własny zespół na żywo lub DJ-a zamiast Państwa rozrywki?', a: 'Tak — mogą Państwo przywieźć własny zespół na żywo, DJ-a, fotografa. Lub zachować naszą standardową (sema, tancerze ludowi, taniec brzucha, DJ) i dodać własną na wierzch. Łódź posiada system PA i parkiet taneczny. Prosimy informować z wyprzedzeniem, abyśmy mogli skoordynować sprawdzenie dźwięku.' },
      { q: 'Jak poprosić o wycenę prywatnego rejsu po Bosforze?', a: 'Najłatwiej: proszę napisać na WhatsApp na +90 532 244 29 22 z (1) wielkością grupy, (2) preferowaną datą, (3) okazją (ślub, firmowe, urodziny), (4) specjalnymi wymaganiami. Odpowiadamy w ciągu 1 godziny w godzinach pracy, 12 godzin w nocy. Możemy również umówić rozmowę wideo, aby omówić szczegóły.' }
    ],
    cta: {
      primary: 'WhatsApp po Wycenę Prywatną',
      secondary: 'Niestandardowe menu, grupa 25-80, elastyczny czas · Odpowiedź w mniej niż 1 godzinę',
      tertiary: 'Opcja Rejsu z Kolacją (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosfor dla Par od €{p.dinnerStd} — Romantyczny Wieczór Stambuł',
      description: 'Rejs z kolacją Bosfor dla par. Prywatny stolik, oświetlone mosty, romantyczna aranżacja opcjonalna. Od €{p.dinnerStd}/osoba.'
    },
    hero: {
      h1: 'Rejs po Bosforze dla Par',
      subtitle: 'Randka na Bosforze — prywatny stół, muzyka na żywo, podświetlone mosty przepływające nad głowami. Niezależnie od tego, czy to Państwa pierwsza randka w Stambule, czy dziesiąta rocznica, ten wieczór się sprawdzi.',
      badge: 'Prywatny Stół · Muzyka na Żywo · Płatność na Pokładzie'
    },
    intro: [
      '**Rejs po Bosforze dla par** to ulubiony wieczór randkowy w Stambule. Nie każda para świętuje rocznicę — czasami po prostu są Państwo w najbardziej romantycznym mieście świata i chcą wspaniałego wieczoru razem. Ten rejs to zapewnia: prywatny stół dla dwojga, powolna bogata turecka kolacja, skrzypce na żywo i muzyka akustyczna podczas jedzenia oraz podświetlony Most Bosforski przepływający powoli nad głowami.',
      'Atmosfera jest **ciepła, ale nie przesadnie romantyczna** — żadnej przymusowej muzyki zaręczynowej, żadnych skoordynowanych oklasków "nowożeńcy". Jecie, pijecie, rozmawiacie, oglądacie światła Stambułu. Jeśli chcą Państwo dodać aranżację stolika romantycznego (świece, róże, +€{p.romantic}), wspaniale — jeśli nie, sama kolacja już jest wyjątkowa.',
      'Niezależnie od tego, czy są Państwo w Stambule na 3 dni z partnerem, świętują skromny kamień milowy, czy planują przyszłą wyprawę zaręczynową — **rejs po Bosforze dla par** daje 3-godzinny wieczór bycia razem w jednym z najczęściej fotografowanych miast świata. 4,8★, płatność na pokładzie, bezpłatna anulacja.'
    ],
    highlights: [
      { title: 'Prywatny stół dla dwojga', desc: 'Dedykowany stolik 2-osobowy, nie współdzielony. Pary mają priorytet na miejsca przy oknie. Zdjęcia zachodu słońca i nocnego Bosforu tuż za oknem.' },
      { title: 'Powolna bogata kolacja', desc: '10 rodzajów tureckich mezze, ciepła przystawka, danie główne (łosoś, dorada, kurczak, kotlety lub wegetariańskie), ciasto deserowe z lodami. Serwowane powoli przez 3 godziny — nie są Państwo pospieszani.' },
      { title: 'Skrzypce na żywo i delikatna muzyka', desc: 'Podczas kolacji skrzypce na żywo i akustyczna muzyka turecka tworzą kameralną atmosferę sprzyjającą rozmowie. Później pojawia się DJ dla par, które chcą tańczyć.' },
      { title: 'Dodatki na wyjątkowy wieczór', desc: 'Aranżacja stolika romantycznego (świece, róże): +€{p.romantic}. Pakiet 2 kieliszków alkoholu (wino, rakı): +€{p.alcohol2}/osobę. Transfer hotelowy (tam i z powrotem): +€{p.transfer}/osobę. Wybierają Państwo, co pasuje do wieczoru.' }
    ],
    faq: [
      { q: 'Czy ten rejs po Bosforze pasuje na zwykłą randkę, nie specjalną okazję?', a: 'Tak — większość naszych par nie świętuje niczego konkretnego, po prostu spędza wspaniałą randkę. Atmosfera jest ciepła i miła, bez przesady. Mogą Państwo dodać aranżację stolika romantycznego (+€{p.romantic}) jeśli chcą czegoś ekstra, lub po prostu cieszyć się standardowym wieczorem.' },
      { q: 'Ile kosztuje rejs po Bosforze dla 2 osób?', a: 'Rejs z kolacją dla 2 osób: 2 × €{p.dinnerStd} = €48.60. Dodaj transfer hotelowy dla obu: +€{p.transfer}×2 = €10. Dodaj pakiet 2 kieliszków dla obu: +€{p.alcohol2}×2 = €20. Bez przedpłaty — płatność na pokładzie.' },
      { q: 'Czy pary mogą przynieść własne wino lub szampana?', a: 'Nie zezwalamy na alkohol z zewnątrz (z powodów licencji operacyjnej). Ale mamy pakiet 2 kieliszków z lokalnym winem (+€{p.alcohol2}/osobę) i możemy zorganizować premium wina importowane lub szampana za dodatkową opłatą — prosimy pytać przy rezerwacji. Prosecco, Chianti i Cabernet to popularne prośby premium.' },
      { q: 'Czy to w porządku, jeśli nie pijemy alkoholu — czy będziemy wyglądać nietypowo?', a: 'Wcale nie — wiele par całkowicie pomija alkohol, z powodów halal lub po prostu preferencji. Nieograniczone napoje bezalkoholowe (woda, sok, cola) są wliczone. Jeśli Państwa stół jest bezalkoholowy, nikt nie zwróci na to uwagi. Wiele muzułmańskich par z Arabii Saudyjskiej, Iranu i Indonezji rezerwuje ten rejs.' },
      { q: 'Kiedy jest najlepszy rejs po Bosforze dla par — zachód słońca czy noc?', a: 'Rejs wypływa codziennie o 21:00 — a latem (maj–sierpień) to jedno wypłynięcie łączy jedno i drugie: wejście na pokład od 20:00 podczas złotej godziny, zachód słońca tuż w okolicach wypłynięcia, a potem podświetlone mosty i rozświetlone pałace. Zimą to czysto nocny rejs wśród świateł. Tak czy inaczej, jedna rezerwacja daje parom najbardziej kultową wersję Bosforu.' },
      { q: 'Czy jest parkiet do tańca — czy możemy tańczyć?', a: 'Tak — po kolacji (~22:30) pojawia się DJ, a otwarty pokład zamienia się w strefę taneczną. Wiele par tańczy powolne piosenki pod światłami z Mostem Bosforskim w tle. Niektóre z najlepszych zdjęć, jakie Państwo zrobią w Stambule.' }
    ],
    cta: {
      primary: 'Zarezerwuj Randkę · Płatność na Pokładzie',
      secondary: 'Dodaj aranżację romantyczną (+€{p.romantic}) · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Zobacz Romantyczny Rejs po Bosforze'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Rejs o Zachodzie Słońca z Kolacją po Bosforze od €{p.dinnerStd}',
      description: 'Złap zachód słońca nad Bosforem, potem kolacja pod podświetlonymi mostami. Wejście 20:00 w Kabataş, wypłynięcie 21:00. 3 godziny, pełna kolacja. Płatność na pokładzie.'
    },
    hero: {
      h1: 'Rejs o Zachodzie Słońca z Kolacją po Bosforze',
      subtitle: 'Wejdź na pokład o 20:00, gdy niebo nad minaretami złoci się — a potem zjedz kolację na wodzie, podczas gdy Dolmabahçe, Meczet Ortaköy i Most Bosforski rozświetlają się na noc.',
      badge: 'Wejście na Pokład 20:00 · Wypłynięcie 21:00 · Od Zachodu Słońca po Światła Miasta'
    },
    intro: [
      '**Rejs o zachodzie słońca po Bosforze** w Stambule to przede wszystkim jedno: moment przejścia. Wejście na pokład przy przystani Kabataş rozpoczyna się o 20:00 — a w długie wieczory od maja do sierpnia złota godzina rozgrywa się, gdy Państwo rozgaszczają się na pokładzie. Słońce zachodzi za minaretami europejskiej strony mniej więcej w porze wypłynięcia o 21:00, więc oglądają je Państwo z wody: Pałac Dolmabahçe skąpany w złocie, Meczet Ortaköy w sylwecie na tle rozżarzonego nieba.',
      'Nasz **rejs po Bosforze od zachodu słońca do nocy** obejmuje pełną turecką kolację — 10 rodzajów mezze, ciepła przystawka, danie główne do wyboru, deser — serwowaną, gdy miasto zapala swoje światła. Zanim pojawi się deser, płyną Państwo pod podświetlonym Mostem Bosforskim, a 30 milionów świateł odbija się w ciemnej wodzie. Przejście od zmierzchu do pełnej nocy, wszystko w jednym 3-godzinnym rejsie — na tym polega cała magia.',
      'Niezależnie od tego, czy są Państwo fotografem goniącym za ostatnim światłem, parą szukającą "tego stambulskiego zdjęcia na pamiątkę", czy pierwszym razem w Stambule i chcą klasycznego wieczoru na wodzie — to jest **rejs o zachodzie słońca z kolacją po Bosforze**, który miejscowi polecają odwiedzającym. Od €{p.dinnerStd}/osobę, ocena 4,8★, licencja TÜRSAB, płatność na pokładzie — bez przedpłaty.'
    ],
    highlights: [
      { title: 'Letnie zachody słońca dokładnie przy wypłynięciu', desc: 'Od maja do sierpnia słońce w Stambule zachodzi mniej więcej między 20:15–20:45 — wejście na pokład o 20:00 daje Państwu złotą godzinę na pokładzie, a wypłynięcie o 21:00 stawia Państwa na wodzie dokładnie w porze samego zachodu. Aparat w pogotowiu — to jest to ujęcie.' },
      { title: 'Niebieska godzina przechodząca w pełną noc', desc: 'Nie tylko zachód słońca — rejs płynie przez zmierzch aż do w pełni podświetlonego Bosforu. Złote światło, niebieska godzina, a potem 30 milionów świateł mostu na ciemnej wodzie: trzy fazy światła w jeden wieczór.' },
      { title: 'Pełna kolacja podczas rejsu', desc: '10 rodzajów tureckich mezze, ciepła przystawka, danie główne (łosoś, dorada, kurczak, kotlety, wegetariańskie), ciasto deserowe z lodami, nieograniczone napoje bezalkoholowe — serwowane, gdy zapalają się światła miasta.' },
      { title: 'Dolmabahçe, Ortaköy, Most Bosforski — wszystko świeci', desc: 'Trasa przechodzi obok Pałacu Dolmabahçe, Meczetu Ortaköy, Mostu Bosforskiego, Rumeli Hisarı i Pałacu Beylerbeyi w chwili, gdy zapalają się ich światła. Każdy punkt orientacyjny w swoim najlepszym świetle.' }
    ],
    faq: [
      { q: 'O której wypływa rejs o zachodzie słońca po Bosforze?', a: 'Wejście na pokład rozpoczyna się o 20:00 przy przystani Kabataş, łódź wypływa o 21:00 i wraca około 00:00. Latem (maj–sierpień) słońce zachodzi mniej więcej między 20:15–20:45 — złota godzina trwa, gdy Państwo wchodzą na pokład, a sam zachód słońca przypada dokładnie na porę wypłynięcia, oglądany z wody.' },
      { q: 'Czy rejs o zachodzie słońca po Bosforze to to samo co rejs z kolacją?', a: 'Tak — to jeden rejs. Jest jedno codzienne wypłynięcie o 21:00 z pełną kolacją i pokazami na żywo na pokładzie. W długie letnie wieczory pełni on również rolę rejsu o zachodzie słońca: wchodzą Państwo na pokład podczas złotej godziny i płyną przez niebieską godzinę w podświetloną noc. Zimą ten sam rejs to czyste doświadczenie nocnych świateł.' },
      { q: 'Jaka jest cena rejsu o zachodzie słońca po Bosforze?', a: 'Od €{p.dinnerStd}/osobę za rejs (3 godziny, pełna kolacja, rozrywka na żywo). Płatność na pokładzie — bez przedpłaty. Dzieci 0-3 lata bezpłatnie, 4-8 lat pół ceny.' },
      { q: 'Kiedy jest najlepsza pora roku na rejs o zachodzie słońca po Bosforze?', a: 'Od maja do sierpnia. Późne stambulskie zachody słońca (20:15–20:45) zbiegają się z wypłynięciem o 21:00, więc w jeden wieczór dostają Państwo złotą godzinę, zachód słońca i podświetlone mosty. Jesienią i zimą słońce zachodzi wcześniej i ten sam rejs staje się pełnym doświadczeniem nocnych świateł — równie fotogenicznym, w innym nastroju.' },
      { q: 'Co zabrać na rejs o zachodzie słońca?', a: 'Smartfon lub aparat — złota godzina i podświetlone mosty aż się o to proszą. Lekką kurtkę: po zachodzie słońca wiatr na pokładzie się wzmaga. Strój smart-casual — jedzą Państwo kolację, ale nie ma ścisłego dress code\'u.' },
      { q: 'Czy na tym rejsie zobaczę podświetlone mosty nocą?', a: 'Tak — to druga połowa wieczoru. Rejs trwa 21:00–00:00, więc po zachodzie słońca i niebieskiej godzinie płyną Państwo pod w pełni podświetlonym Mostem Bosforskim, obok rozświetlonych pałaców i Wieży Panny, a do Kabataş wracają około 00:00.' },
      { q: 'O której zachodzi słońce w Stambule?', a: 'Latem (czerwiec–lipiec) słońce w Stambule zachodzi około 21:00–20:45. Zimą około 16:30–17:00. Na doświadczenie zachodu słońca i nocy rejs z kolacją Bosphorus Night o 21:00 z Kabataş łapie latem późną złotą godzinę i niebieską godzinę, a podświetlone zabytki przez cały rok.' },
      { q: 'Czy rejs o zachodzie słońca po Bosforze jest wart swojej ceny?', a: 'Tak — zachód słońca nad Mostem Bosforskim to jeden z najbardziej charakterystycznych widoków Stambułu. Rejs z kolacją Bosphorus Night o 21:00 (€{p.dinnerStd}/osobę) łapie niebieską godzinę po zachodzie słońca oraz podświetlone pałace, z pełną kolacją i pokazami na żywo przez 3 godziny.' }
    ],
    cta: {
      primary: 'Zarezerwuj Rejs o Zachodzie Słońca · Płatność na Pokładzie',
      secondary: 'Wejście na pokład 20:00 · Wypłynięcie 21:00 · Kolacja wliczona · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Zobacz Pełne Szczegóły Rejsu z Kolacją'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tour Nocny Bosfor od €{p.dinnerStd} — Rejs z Kolacją + Pokaz Live',
      description: 'Tour nocny 3 godziny po Bosforze z kolacją i pokazem na żywo. Wypłynięcie 21:00 z Kabataş, oświetlone mosty. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    hero: {
      h1: 'Nocny Rejs po Bosforze',
      subtitle: 'Podświetlone mosty Stambułu, rozświetlone pałace i Bosfor jak lustro odbijające 30 milionów świateł — nocny rejs, który definiuje stambulski wieczór.',
      badge: 'Podświetlone Mosty · Pokaz na Żywo · Kolacja Wliczona'
    },
    intro: [
      '**Nocny rejs po Bosforze** to najbardziej polecana wieczorna aktywność w Stambule. Powód jest taki: po zmroku Bosfor się przemienia. Most Bosforski cyklicznie przechodzi między błękitem, fioletem i złotem. Pałac Dolmabahçe świeci ciepłym żółtym światłem. Meczet Ortaköy idealnie odbija się w czarnej wodzie. Każdy stambulski punkt orientacyjny osiąga szczyt dramatyzmu nocą.',
      'Nasz **nocny rejs po Bosforze z kolacją** pakuje cały kultowy wieczór: 3 godziny na wodzie (21:00-00:00), bogata turecka uczta, tańce ludowe na żywo (sema, 5 tańców ludowych, taniec brzucha), muzyka na żywo i set DJ-a, który utrzymuje pokład w ruchu do końca nocy. Każdy gość otrzymuje ten sam program — żadnej "podstawowej" opcji, która pomija najlepsze części.',
      'Niezależnie od tego, czy to Państwa pierwsza podróż do Stambułu i szukają "tej jedynej rzeczy do zrobienia nocą", czy byli tu wcześniej i chcą najbardziej fotogenicznych 3 godzin w mieście — to jest **nocny rejs po Bosforze** oceniony na 4,8★ przez ponad 11 317 podróżnych. Licencja TÜRSAB, płatność na pokładzie, bez przedpłaty.'
    ],
    highlights: [
      { title: 'Podświetlony Bosfor w szczycie dramatyzmu', desc: 'Most Bosforski zmienia kolory (niebieski, fioletowy, złoty), pałace świecą żółto, Meczet Ortaköy odbija się w czarnej wodzie. 21:00-00:00 to szczytowe oświetlenie dla wszystkich stambulskich punktów orientacyjnych.' },
      { title: 'Tradycyjny turecki pokaz na pokładzie', desc: 'Pokaz sema, 5 tradycyjnych tańców ludowych (z różnych regionów Turcji), taniec brzucha, turecka muzyka na żywo, potem set DJ-a. 40 minut występu, potem muzyka + kolacja kontynuują.' },
      { title: 'Pełna bogata kolacja', desc: '10 rodzajów tureckich mezze, ciepła przystawka (paçanga böreği), danie główne (łosoś, dorada, kurczak, kotlety, wegetariańskie — Państwa wybór), deser (ciasto z lodami), nieograniczone napoje bezalkoholowe. Certyfikat halal.' },
      { title: 'Pełna trasa Bosforu', desc: 'Kabataş → Dolmabahçe → Pałac Çırağan → Meczet Ortaköy → Bebek → Rumeli Hisarı → Most Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Wieża Panny → Kabataş.' }
    ],
    faq: [
      { q: 'O której jest nocny rejs po Bosforze?', a: 'Wejście na pokład przy przystani Kabataş od 20:00. Łódź wypływa o 21:00, wraca około 00:00. Zalecamy przybycie 20 minut wcześniej, aby się rozgościć i wybrać miejsce.' },
      { q: 'Ile kosztuje nocny rejs po Bosforze?', a: 'Rejs nocny (3 godziny, kolacja, pokaz): €{p.dinnerStd}/osobę (dawniej €{p.dinnerStdOriginal}). Dzieci 0-3 lata bezpłatnie, 4-8 lat pół ceny. Płatność na pokładzie.' },
      { q: 'Jaka jest różnica między nocnym rejsem po Bosforze a rejsem z kolacją?', a: 'To samo, inne słowo kluczowe. "Nocny rejs po Bosforze" to jak szukają podróżni; "rejs z kolacją" to termin branżowy. Ta sama łódź, ten sam 3-godzinny program, to samo menu, ten sam pokaz. Proszę wybrać preferowany termin wyszukiwania — doświadczenie jest takie samo.' },
      { q: 'Nocny rejs po Bosforze vs rejs o zachodzie słońca?', a: 'Nocny rejs = podświetlony Stambuł, szczytowy dramatyzm światła, pełny program rozrywki, najbardziej kultowe zdjęcia podświetlonych mostów. A to jeden rejs: latem (maj–sierpień) wejście na pokład od 20:00 łapie złotą godzinę, a słońce zachodzi tuż w okolicach wypłynięcia o 21:00 — ten sam wieczór obejmuje więc zachód słońca i noc. Nie trzeba wybierać ani rezerwować dwa razy.' },
      { q: 'Czy mogę wybrać nocny rejs po Bosforze w moim pierwszym dniu w Stambule?', a: 'Tak — zalecamy to. Wielu podróżnych rezerwuje nocny rejs na pierwszy wieczór, ponieważ daje pełną orientację: wszystkie wielkie punkty orientacyjne z wody, dobra kolacja i rozrywka. Łatwiejsze z jet lagiem niż próba zwiedzania pieszo w dniu 1. Transfer hotelowy z centralnych dzielnic dostępny.' },
      { q: 'Nie mówię po turecku — czy rejs jest po angielsku?', a: 'Załoga mówi po angielsku. Rozrywka (sema, tańce ludowe, muzyka) nie wymaga języka. Menu kolacji po angielsku. Rezerwacja przez WhatsApp / Telegram działa w wielu językach (angielski, arabski, rosyjski, niemiecki, francuski, hiszpański). Turecki niepotrzebny.' }
    ],
    cta: {
      primary: 'Zarezerwuj Nocny Rejs · Płatność na Pokładzie',
      secondary: 'Wypłynięcie 21:00 · 3 godziny · Kolacja + pokaz wliczone · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Rejs z Kolacją Stambuł od €{p.dinnerStd} — Tour Nocny Bosfor',
      description: 'Rejs z kolacją 3 godziny w Stambule po Bosforze. Tureckie wielodaniowe menu, folklor na żywo, oświetlone mosty.'
    },
    hero: {
      h1: 'Rejs z Kolacją w Stambule',
      subtitle: 'Najlepszy rejs z kolacją w Stambule — 3 godziny na Bosforze, bogata turecka uczta, rozrywka na żywo i nocne widoki najbardziej kultowych zabytków miasta.',
      badge: '4,8★ · 11 317 opinii · TÜRSAB A-17672'
    },
    intro: [
      'Szukają Państwo **rejsu z kolacją w Stambule**? Znaleźli Państwo to, co większość podróżnych poleca. Nasz 3-godzinny wieczór na Bosforze łączy pełną bogatą turecką kolację, tańce ludowe na żywo i najbardziej fotogeniczne widoki miasta — wszystko z komfortowej łodzi wypływającej o 21:00 z przystani Kabataş.',
      'Doświadczenie **rejsu z kolacją w Stambule**: wejście na pokład o 20:00, rozgoszczenie się, obserwacja przepłynięcia obok Pałacu Dolmabahçe przy wypływaniu, zaczyna się kolacja podczas zbliżania do Meczetu Ortaköy, zaczyna się pokaz (sema, tańce ludowe, taniec brzucha), do momentu deseru płyną Państwo pod podświetlonym Mostem Bosforskim. Wracają do Kabataş do północy z ikonicznym kolażem zdjęć i pełnym brzuchem.',
      '€{p.dinnerStd}/osobę (dawniej €{p.dinnerStdOriginal}) za rejs z kolacją. Płatność na pokładzie — bez przedpłaty, bez ryzyka. Licencja TÜRSAB A-17672, oceniony na 4,8★ przez ponad 11 317 podróżnych.'
    ],
    highlights: [
      { title: 'Pełna bogata turecka kolacja', desc: '10 rodzajów mezze, ciepła przystawka, danie główne (łosoś/dorada/kurczak/kotlety/wegetariańskie), ciasto z lodami. Certyfikat halal. Nieograniczone napoje bezalkoholowe wliczone.' },
      { title: 'Pokaz tureckich tańców ludowych na żywo', desc: 'Pokaz sema, 5 tradycyjnych tańców ludowych, taniec brzucha, turecka muzyka na żywo, DJ. 40 minut występu, muzyka ambient kontynuuje.' },
      { title: 'Pełna nocna trasa po Bosforze', desc: '3-godzinny rejs: Dolmabahçe, Çırağan, Meczet Ortaköy, Most Bosforski, Bebek, Rumeli Hisarı, Most FSM, Beylerbeyi, Üsküdar, Wieża Panny. Zarówno strona europejska jak i azjatycka.' },
      { title: 'Od €{p.dinnerStd} — płatność na pokładzie', desc: 'Rejs z kolacją €{p.dinnerStd} (dawniej €{p.dinnerStdOriginal}). Bez przedpłaty. Bezpłatna anulacja do 2 godzin przed odpłynięciem.' }
    ],
    faq: [
      { q: 'Ile kosztuje rejs z kolacją w Stambule?', a: 'Nasz rejs z kolacją €{p.dinnerStd}/osobę (cena regularna €{p.dinnerStdOriginal}). Dzieci 0-3 lata bezpłatnie, 4-8 lat 50% zniżki. Płatność na pokładzie — bez przedpłaty.' },
      { q: 'Co jest wliczone w cenę rejsu z kolacją w Stambule?', a: '3-godzinny rejs po Bosforze, bogata turecka kolacja (mezze, ciepła przystawka, danie główne, deser), nieograniczone napoje bezalkoholowe, pokaz tańców ludowych na żywo (sema, tańce ludowe, taniec brzucha), muzyka na żywo + DJ, dostęp do otwartego pokładu, podatki wliczone. Transfer hotelowy i alkohol są opcjonalnymi dodatkami.' },
      { q: 'Skąd wypływa rejs z kolacją w Stambule?', a: 'Przystań Kabataş, Stambuł — strona europejska, obok Pałacu Dolmabahçe. Dokładny punkt zbiórki udostępniany po rezerwacji przez WhatsApp / Telegram. Filmy trasy pieszo z przystanku tramwajowego Dolmabahçe i stacji tramwajowej Kabataş w sekcji punktu zbiórki powyżej.' },
      { q: 'Jak długo trwa rejs z kolacją — i kiedy się zaczyna?', a: '3 godziny łącznie. Wejście na pokład od 20:00, łódź wypływa dokładnie o 21:00, wraca około 00:00. Zalecamy przybycie 15-20 minut wcześniej, aby się rozgościć i wybrać miejsce.' },
      { q: 'Czy muszę rezerwować z wyprzedzeniem, czy mogę po prostu przyjść?', a: 'Proszę rezerwować z wyprzedzeniem — miejsca się zapełniają, szczególnie w weekendy i święta. Rezerwacja tego samego dnia często możliwa, ale nie gwarantowana. Kreator na tej stronie załatwi miejsce w mniej niż 1 minutę. Płatność na pokładzie, więc nie ma ryzyka finansowego przy wcześniejszej rezerwacji.' },
      { q: 'Czy rejs z kolacją w Stambule nadaje się dla wegetarian / halal / ograniczeń dietetycznych?', a: 'Tak — całe mięso posiada certyfikat halal. Wegetariańskie danie główne (falafel, pieczone ziemniaki, pilaw z bulguru, gulasz warzywny, krążki cebulowe) dostępne bez dodatkowej opłaty. Alergie można uwzględnić, jeśli zostaną zgłoszone przy rezerwacji. Alkohol opcjonalny dodatek, nigdy narzucany.' }
    ],
    cta: {
      primary: 'Zarezerwuj Rejs z Kolacją · Płatność na Pokładzie',
      secondary: '4,8★ · Licencja TÜRSAB · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tour Nocny Stambuł od €{p.dinnerStd} — Rejs z Kolacją Bosfor + Pokaz',
      description: 'Rejs 3 godziny po Bosforze z kolacją i pokazem na żywo. Wypłynięcie 21:00 z Kabataş. Bezpłatne anulowanie, płatność na pokładzie. 11 317 opinii.'
    },
    hero: {
      h1: 'Nocna Wycieczka po Stambule',
      subtitle: 'Pierwsza polecana przez mieszkańców Stambułu nocna wycieczka — 3-godzinny rejs po Bosforze z kolacją, rozrywką na żywo i najbardziej kultowymi podświetlonymi widokami miasta.',
      badge: 'Kultowy Stambulski Wieczór · 3 Godziny · Kolacja Wliczona'
    },
    intro: [
      '**Nocna wycieczka po Stambule** powinna zrobić trzy rzeczy: pokazać kultowe widoki miasta, dobrze nakarmić i zapewnić rozrywkę. Nasz rejs z kolacją po Bosforze robi wszystkie trzy w jednym 3-godzinnym wieczorze — i to właśnie dlatego większość przewodników po Stambule poleca to jako #1 doświadczenie nocnej wycieczki.',
      'Trasa **nocnej wycieczki po Stambule** obejmuje najlepsze podświetlone zabytki: Pałac Dolmabahçe, Meczet Ortaköy, Most Bosforski (zmienia kolor), dzielnica Bebek, Rumeli Hisarı, Most FSM, Pałac Beylerbeyi, azjatyckie wybrzeże Üsküdar i odległa Wieża Panny. Większość wycieczek miejskich pokazuje je z autobusu — my pokazujemy z wody, tam gdzie są najbardziej dramatyczne.',
      'Kolacja wliczona (bogate menu tureckie), pokaz tureckich tańców ludowych na żywo, sema, taniec brzucha i set DJ-a. Jeśli są Państwo w Stambule 2-3 dni, to jeden wieczór o największej sile uderzenia. 4,8★ od ponad 11 317 podróżnych, płatność na pokładzie, bez przedpłaty.'
    ],
    highlights: [
      { title: 'Wszystkie kultowe nocne widoki Stambułu', desc: 'Pałac Dolmabahçe, Meczet Ortaköy, podświetlony Most Bosforski, Rumeli Hisarı, Most FSM, Pałac Beylerbeyi, Wieża Panny. Każdy wielki zabytek w szczytowym nocnym oświetleniu.' },
      { title: 'Pełna turecka kolacja wliczona', desc: '10 mezze, ciepła przystawka, danie główne (łosoś/dorada/kurczak/kotlety/wegetariańskie), deser, nieograniczone napoje bezalkoholowe. Certyfikat halal. W cenie €{p.dinnerStd}/osobę — wszystko wliczone.' },
      { title: 'Tańce ludowe na żywo + sema + taniec brzucha', desc: 'Tradycyjna turecka rozrywka: pokaz sema Mewlana, 5 regionalnych tańców ludowych, taniec brzucha, muzyka na żywo, DJ. 40 minut występu, muzyka ambient przez cały wieczór.' },
      { title: 'Łatwe dla osób pierwszy raz w Stambule', desc: 'Centralny punkt zbiórki (przystań Kabataş), transfer hotelowy (+€{p.transfer}/osobę), anglojęzyczna załoga, płatność na pokładzie. Zero stresu logistycznego. Przyjść, cieszyć się, wyjść.' }
    ],
    faq: [
      { q: 'Jaka jest najlepsza nocna wycieczka w Stambule?', a: 'Rejs z kolacją po Bosforze konsekwentnie zajmuje #1. Dlaczego: (1) daje wszystkie kultowe nocne widoki z wody, (2) zawiera kolację i pokaz w jednym pakiecie, (3) 3 godziny wystarczy, aby zobaczyć dużo bez zmęczenia, (4) centralny punkt zbiórki, (5) płatność na pokładzie redukuje tarcia rezerwacyjne. Większość przewodników podróży po Stambule poleca to jako "jedyną rzecz obowiązkowo do zrobienia nocą".' },
      { q: 'Ile kosztuje nocna wycieczka po Stambule?', a: 'Nasz rejs z kolacją po Bosforze: €{p.dinnerStd}/osobę. Rejs, kolacja, rozrywka, napoje bezalkoholowe wliczone. Opcjonalnie: 2 kieliszki alkoholu +€{p.alcohol2}/osobę, transfer hotelowy +€{p.transfer}/osobę. Płatność na pokładzie — bez przedpłaty.' },
      { q: 'Czy nocna wycieczka po Stambule jest bezpieczna dla podróżnych solo?', a: 'Tak — bardzo bezpieczna. Łódź z licencją TÜRSAB, profesjonalna anglojęzyczna załoga, CCTV na pokładzie, kamizelki ratunkowe dostępne. Wielu podróżnych solo rezerwuje ten rejs. Jecie Państwo przy współdzielonym lub prywatnym stole (wybór), a wieczór jest inkluzywny — poznają Państwo innych podróżnych, jeśli chcą, lub pozostaną sami.' },
      { q: 'Kiedy jest najlepszy czas na nocną wycieczkę po Stambule?', a: 'Nasz rejs z kolacją po Bosforze trwa 21:00-00:00 (3 godziny). To czas szczytowego oświetlenia wszystkich stambulskich zabytków — mosty w pełni podświetlone, pałace świecą, księżyc nad wodą. Jeśli zależy Państwu także na złotej godzinie, proszę przyjechać latem: wejście na pokład zaczyna się o 20:00, a od maja do sierpnia słońce zachodzi tuż w okolicach wypłynięcia o 21:00 — ten sam rejs obejmuje jedno i drugie.' },
      { q: 'Jak dotrzeć do punktu zbiórki nocnej wycieczki w Stambule?', a: 'Punkt zbiórki to przystań Kabataş (centralna strona europejska, obok Pałacu Dolmabahçe). Tramwajem: T1 do stacji Kabataş (koniec linii). Taksówką: z Taksim ~15 min. Pieszo: z Taksim w dół İnönü Caddesi 20 min. Filmy z instrukcjami pieszo na tej stronie. Transfer hotelowy +€{p.transfer}/osobę dostępny, jeśli wolą Państwo.' },
      { q: 'Czy mogę zarezerwować nocną wycieczkę po Stambule tego samego dnia?', a: 'Często tak, szczególnie w dni powszednie. Weekendy zapełniają się szybciej. Kreator rezerwacji na tej stronie pozwala sprawdzić dostępność na dziś wieczór i zarezerwować w mniej niż 1 minutę. W przypadku pilnych próśb na ten sam dzień proszę napisać na WhatsApp +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Zarezerwuj Nocną Wycieczkę · Płatność na Pokładzie',
      secondary: 'Od €{p.dinnerStd}/osobę · Kolacja + pokaz wliczone · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Wycieczka Łodzią Stambuł od €{p.dinnerStd} — Bosfor + Kolacja + Pokaz',
      description: 'Wycieczka łodzią 3 godziny: rejs Bosfor, pełna turecka kolacja, folklor na żywo, oświetlone widoki nocne. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    hero: {
      h1: 'Wycieczka Łodzią po Stambule',
      subtitle: 'Najczęściej rezerwowana wycieczka łodzią po Stambule przez podróżnych — rejs po Bosforze z turecką kolacją, rozrywką na żywo i kultowymi widokami miasta z wody.',
      badge: '4,8★ · TÜRSAB A-17672 · Płatność na Pokładzie'
    },
    intro: [
      'Gdy wyszukują Państwo "wycieczki łodzią po Stambule", szukają jednej rzeczy, która definiuje miasto z wody: Bosforu. Nasza 3-godzinna wycieczka łodzią po Bosforze zabiera Państwa obok każdego wielkiego stambulskiego zabytku — Pałac Dolmabahçe, Meczet Ortaköy, Most Bosforski, Rumeli Hisarı, Pałac Beylerbeyi i Wieża Panny — z pełną turecką kolacją i rozrywką na żywo.',
      'W przeciwieństwie do wielu 1-godzinnych promów widokowych, które obejmują mniej Bosforu i pomijają kolację i rozrywkę, nasza **wycieczka łodzią po Stambule** to pełne wieczorne doświadczenie: wejście na pokład o 20:00 przy przystani Kabataş, rejs do północy, 10 mezze, danie główne, deser, sema, tańce ludowe, taniec brzucha i DJ. Otrzymują Państwo wycieczkę ORAZ wieczór w mieście w jednym.',
      'Czy mają Państwo jedną noc w Stambule, czy cały tydzień, ta **wycieczka łodzią po Stambule** wykonuje zadanie. 4,8★ od ponad 11 317 podróżnych, licencja TÜRSAB (A-17672), menu z certyfikatem halal i płatność na pokładzie — bez zobowiązań finansowych, dopóki nie będą Państwo zadowoleni z doświadczenia.'
    ],
    highlights: [
      { title: 'Wszystkie wielkie zabytki Bosforu', desc: 'Dolmabahçe, Çırağan, Meczet Ortaköy, Most Bosforski, Bebek, Rumeli Hisarı, Most FSM, Pałac Beylerbeyi, Üsküdar, Wieża Panny. Zarówno wybrzeże europejskie jak i azjatyckie w jednym rejsie.' },
      { title: 'Kolacja + pokaz wliczone', desc: 'Nie tylko wycieczka łodzią — pełna bogata turecka kolacja, występy tańców ludowych na żywo, sema, taniec brzucha, DJ. To właśnie czyni te 3 godziny zabawnymi, nie tylko widokowymi.' },
      { title: 'Wieczorne wypłynięcie (najlepsze oświetlenie)', desc: 'Wypłynięcie 21:00 chwyta podświetlony Bosfor w pełnej glorii — mosty, pałace, meczety wszystkie podświetlone. Bardziej dramatyczne niż wycieczki dzienne pokazujące te same zabytki w płaskim świetle.' },
      { title: 'Łatwa rezerwacja, łatwa płatność', desc: 'Zarezerwuj w mniej niż 1 minutę kreatorem na tej stronie. Płatność na pokładzie — bez przedpłaty. Transfer hotelowy dostępny od +€{p.transfer}/osobę. Bezpłatna anulacja do 2 godzin przed odpłynięciem.' }
    ],
    faq: [
      { q: 'Jaka jest najlepsza wycieczka łodzią w Stambule?', a: 'Rejs z kolacją po Bosforze konsekwentnie zajmuje #1. Obejmuje wszystkie wielkie zabytki, zawiera kolację i rozrywkę, działa wieczorem, gdy zabytki są podświetlone. Inne opcje (promy hop-on, poranne łodzie widokowe) obejmują krótsze trasy, pomijają kolację i nie zawierają rozrywki. Na stambulski wieczór to najpełniejsza wycieczka łodzią.' },
      { q: 'Jak długo trwa wycieczka łodzią po Stambule?', a: '3 godziny. Wejście na pokład przy przystani Kabataş od 20:00, wypłynięcie 21:00, powrót ~00:00. Obejmuje cały Bosfor od Dolmabahçe do Rumeli Hisarı i z powrotem. Wystarczający czas na pełną kolację + pokaz bez zmęczenia.' },
      { q: 'Ile kosztuje wycieczka łodzią po Stambule?', a: 'Nasza wycieczka łodzią z kolacją: €{p.dinnerStd}/osobę (dawniej €{p.dinnerStdOriginal}). Dzieci 0-3 lata bezpłatnie, 4-8 lat pół ceny. Płatność na pokładzie. Alkohol i transfer hotelowy to opcjonalne dodatki.' },
      { q: 'Skąd wypływają wycieczki łodzią po Stambule?', a: 'Nasza łódź wypływa z przystani Kabataş, centralna strona europejska Stambułu, obok Pałacu Dolmabahçe. Dostępna tramwajem T1 (stacja Kabataş), taksówką 15 min z Taksim lub pieszo 20 min z Taksim. Transfer hotelowy z centralnych dzielnic dostępny za +€{p.transfer}/osobę.' },
      { q: 'Czy ta wycieczka łodzią nadaje się dla rodzin z dziećmi?', a: 'Tak — bardzo przyjazna rodzinom. Dzieci 0-3 lata bezpłatnie, 4-8 lat 50% zniżki. Zadaszone siedzenia wewnętrzne, menu dla dzieci na życzenie, rozrywka (sema, tańce ludowe) angażująca dla dzieci. Wiele rodzin z całego świata rezerwuje ten rejs.' },
      { q: 'Czy muszę coś zabrać na wycieczkę łodzią?', a: 'Paszport lub dowód (do rejestracji na łodzi), cienką marynarkę (pokład może być chłodny), wygodne buty, jeśli planują Państwo tańczyć. Smartfon do zdjęć. Gotówka lub karta do płatności na pokładzie (oba akceptowane). Wszystko inne — kolacja, napoje, rozrywka — na pokładzie.' }
    ],
    cta: {
      primary: 'Zarezerwuj Wycieczkę Łodzią · Płatność na Pokładzie',
      secondary: '3 godziny · Kolacja + pokaz · Od €{p.dinnerStd}/osobę · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Wycieczka Bosfor od €{p.dinnerStd} — Rejs z Kolacją Stambuł + Pokaz',
      description: 'Wycieczka 3 godziny po Bosforze: turecka kolacja, folklor na żywo, oświetlone widoki nocne. Wypłynięcie 21:00 z Kabataş.'
    },
    hero: {
      h1: 'Wycieczka po Bosforze',
      subtitle: 'Najczęściej polecana wycieczka po Bosforze przez podróżnych — 3-godzinny rejs z kolacją obejmujący każdy wielki stambulski zabytek, z kolacją, rozrywką i nocnymi widokami.',
      badge: 'Pełne Doświadczenie Bosforu · Wieczorne Wypłynięcie'
    },
    intro: [
      '**Wycieczka po Bosforze** może oznaczać 1-godzinny prom widokowy lub pełen wieczór z kolacją — robimy to drugie, a większość podróżnych uznaje to za lepszą wartość. 3 godziny, €{p.dinnerStd}/osobę, kolacja i rozrywka wliczone. Nie tylko przepływają Państwo obok zabytków — jedzą, oglądają pokaz i cieszą się wieczorem.',
      'Trasa naszej **wycieczki po Bosforze** obejmuje wszystko, co warto zobaczyć: Pałac Dolmabahçe (19-wieczna rezydencja sułtana osmańskiego), Meczet Ortaköy (jeden z najczęściej fotografowanych meczetów Stambułu), Most Bosforski (zmienia kolor w nocy), Rumeli Hisarı (zbudowany w 1452 przez Mehmeta Zdobywcę), Pałac Beylerbeyi (strona azjatycka) i Wieża Panny na małej wyspie. Wszystko wyjaśnione przez anglojęzyczną załogę.',
      'Czy mają Państwo 24 godziny w Stambule, czy tydzień, to jest **wycieczka po Bosforze**, która daje najwięcej w jeden wieczór. Ocena 4,8★ od ponad 11 317 podróżnych, licencja TÜRSAB A-17672, menu przyjazne halal, płatność na pokładzie — bez ryzyka przedpłaty.'
    ],
    highlights: [
      { title: 'Pełen Bosfor w jednym rejsie', desc: 'Wybrzeże europejskie (Dolmabahçe, Ortaköy, Rumeli Hisarı), wybrzeże azjatyckie (Beylerbeyi, Üsküdar), oba mosty bosforskie, Wieża Panny. Każdy wielki zabytek widoczny w 3 godziny.' },
      { title: 'Kolacja + rozrywka wliczone', desc: 'Nie tylko prom widokowy — pełna turecka kolacja z mezze, daniem głównym, deserem. Pokaz tańców ludowych na żywo, sema, taniec brzucha, DJ. Wartość rozrywki poza samym widokiem.' },
      { title: 'Wieczór = najlepsze oświetlenie', desc: 'Dzienne wycieczki po Bosforze pokazują zabytki w płaskim świetle. Wieczorne wycieczki chwytają wszystko podświetlone: świecące pałace, kolorowe mosty, meczety odbite w ciemnej wodzie. Lepsze zdjęcia, bardziej dramatyczne.' },
      { title: 'Od €{p.dinnerStd} — płatność na pokładzie', desc: 'Nie wymagana przedpłata. Płatność na pokładzie (gotówka lub karta). Bezpłatna anulacja do 2 godzin przed odpłynięciem. Dzieci 0-3 lata bezpłatnie, 4-8 lat pół ceny. Przejrzyste ceny.' }
    ],
    faq: [
      { q: 'Jakie są najlepsze wycieczki po Bosforze w Stambule?', a: 'Wieczorny rejs z kolacją konsekwentnie plasuje się na szczycie. Opcje dzienne (1-godzinne promy publiczne, 2-godzinne łodzie widokowe) pokazują mniej i nie zawierają kolacji. Dla wartości trudno pobić 3-godzinny rejs z kolacją, pokazem i centralnym punktem zwrotnym. Koszt naszego rejsu €{p.dinnerStd} eliminuje potrzebę oddzielnej kolacji + wieczoru rozrywki.' },
      { q: 'Jak długo trwa wycieczka po Bosforze?', a: 'Nasza wycieczka po Bosforze trwa 3 godziny łącznie (wypłynięcie 21:00, powrót 00:00). Istnieją krótsze opcje (1-godzinne promy widokowe, 90-minutowe wycieczki), ale pomijają kolację i rozrywkę. Na pełne wieczorne doświadczenie 3 godziny są idealne — wystarczy, aby zobaczyć wszystko bez zmęczenia.' },
      { q: 'Czy wycieczka po Bosforze jest tego warta?', a: 'Tak — prawie każdy przewodnik podróży po Stambule wymienia "rejs po Bosforze" jako jedną z top 5 rzeczy obowiązkowo do zrobienia. Miasto zostało zbudowane wokół tej cieśniny; jeśli nie widzieli Państwo Bosforu z wody, nie widzieli Państwo Stambułu naprawdę. Nasza szczególna wieczorna wycieczka dodaje kolację i rozrywkę, czyniąc to pełnym wieczorem wyjścia zamiast tylko widokowania.' },
      { q: 'Co zabrać na wycieczkę po Bosforze?', a: 'Paszport lub dowód (do rejestracji na łodzi), cienka marynarka (wieczory na pokładzie chłodne), smartfon/aparat, wygodne buty na parkiet. Gotówka lub karta do płatności. Wszystko inne na pokładzie. Transfer hotelowy dostępny za +€{p.transfer}/osobę, jeśli wolą Państwo nie używać transportu publicznego.' },
      { q: 'Czy wycieczka po Bosforze jest odpowiednia dla dzieci?', a: 'Tak — bardzo przyjazna dzieciom. Dzieci 0-3 lata bezpłatnie (transfer wliczony), 4-8 lat 50% zniżki. Zadaszone siedzenia wewnętrzne, menu dla dzieci na życzenie, rozrywka delikatna i angażująca. Wiele rodzin rezerwuje to jako główny element swojej podróży do Stambułu.' },
      { q: 'Jakie są postoje w wycieczce po Bosforze?', a: 'To ciągły rejs — nie zatrzymujemy się na zabytkach (bez zejść). Łódź przepływa blisko każdego zabytku, załoga wyjaśnia, co Państwo widzą, pozostają Państwo wygodnie przy stole lub wychodzą na otwarty pokład do zdjęć. Bez kolejek, bez chodzenia — po prostu płynne 3 godziny na wodzie.' }
    ],
    cta: {
      primary: 'Zarezerwuj Wycieczkę po Bosforze · Płatność na Pokładzie',
      secondary: '3 godziny · Kolacja + pokaz · Bezpłatna anulacja do 2 godzin · Licencja TÜRSAB',
      tertiary: 'Sprawdź Dostępność'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bilety na Rejs Bosfor od €{p.dinnerStd} — Płatność na Pokładzie',
      description: 'Bezpośrednie bilety na rejs Bosfor od €{p.dinnerStd}/osobę. Bez przedpłaty, płatność na pokładzie. Bezpłatne anulowanie do 2h przed.'
    },
    hero: {
      h1: 'Bilety na Rejs po Bosforze',
      subtitle: 'Pomiń opłaty pośrednika — kup bilety na rejs po Bosforze bezpośrednio od nas. Bez przedpłaty, płatność na pokładzie, bezpłatna anulacja do 2 godzin przed odpłynięciem.',
      badge: 'Rezerwacja Bezpośrednia · Bez Przedpłaty · 40% ZNIŻKI'
    },
    intro: [
      'Szukają Państwo **biletów na rejs po Bosforze**? Proszę kupić bezpośrednio. Nasz bilet to €{p.dinnerStd}/osobę — 40% zniżki od ceny regularnej (€{p.dinnerStdOriginal}). Strony rezerwacyjne osób trzecich zazwyczaj dodają 20-40% prowizji. Rezerwując bezpośrednio, oszczędzają Państwo — a nadal mogą płacić na pokładzie.',
      'Nasz proces **biletów na rejs po Bosforze**: wypełnić kreatora na tej stronie w mniej niż 1 minutę (data, liczba gości, pakiet, kontakt), potwierdzamy natychmiast przez WhatsApp / Telegram, zjawiają się Państwo o 20:00 przy przystani Kabataş, płacą na pokładzie, cieszą 3-godzinnym rejsem z kolacją. Bez fizycznego biletu do wydrukowania, bez kuponu do emaila — nasze potwierdzenie to Państwa bilet.',
      'Niezależnie od tego, czy rezerwują Państwo rejs z kolacją na dziś wieczór czy zaklepują konkretną datę na przyszły tydzień, **bilety na rejs po Bosforze bezpośrednio** to najszybsza droga. Ocena 4,8★, licencja TÜRSAB (A-17672), menu z certyfikatem halal i obsługa dodatków transferu hotelowego i alkoholowych.'
    ],
    highlights: [
      { title: 'Rezerwacja bezpośrednia — bez opłat pośrednika', desc: '€{p.dinnerStd}/osobę, jedna przejrzysta cena. Strony osób trzecich pobierają €30-80+ za tę samą wycieczkę. Rezerwując bezpośrednio u nas, oszczędzają Państwo. Bez ukrytych opłat, bez narzutu prowizji.' },
      { title: 'Płatność na pokładzie — bez przedpłaty', desc: 'Zarezerwuj miejsce teraz, zapłać przy wejściu na pokład. Akceptowana gotówka lub karta. Bezpłatne, jeśli anulują Państwo 2+ godziny przed odpłynięciem. Zero ryzyka finansowego przy wcześniejszym zaklepaniu.' },
      { title: 'Potwierdzenie w mniej niż 1 minutę', desc: 'Wypełnij kreatora → potwierdzamy przez WhatsApp / Telegram. Bez PDF kuponu do wydrukowania. Nasza wiadomość to Państwa bilet. Zjawić się o 20:00 przy przystani.' },
      { title: '40% ZNIŻKI cena launchowa', desc: 'Dawniej €{p.dinnerStdOriginal}, teraz €{p.dinnerStd}. 40% zniżki, ponieważ rezerwują Państwo bezpośrednio. Nie jest to liczba ograniczona czasowo — to nasza standardowa cena bezpośredniej rezerwacji.' }
    ],
    faq: [
      { q: 'Ile kosztują bilety na rejs po Bosforze?', a: 'Bilet €{p.dinnerStd}/osobę (regularnie €{p.dinnerStdOriginal}). 3-godzinny rejs, bogata turecka kolacja, pokaz tańców ludowych na żywo, nieograniczone napoje bezalkoholowe wliczone. Dzieci 0-3 lata bezpłatnie, 4-8 lat 50% zniżki. Płatność na pokładzie — bez przedpłaty.' },
      { q: 'Gdzie mogę kupić bilety na rejs po Bosforze?', a: 'Bezpośrednio na tej stronie — wypełnić kreatora rezerwacji, potwierdzamy natychmiast przez WhatsApp / Telegram. Płatność na pokładzie. Platformy osób trzecich (Viator, GetYourGuide, Klook) również sprzedają bilety, ale zazwyczaj pobierają €30-80+ — to narzut pośrednika. Bezpośrednio to najtaniej i najszybciej.' },
      { q: 'Czy muszę wydrukować bilet na rejs po Bosforze?', a: 'Nie — fizyczny bilet lub kupon nie jest wymagany. Po rezerwacji wysyłamy Państwu potwierdzenie przez WhatsApp (lub Telegram) z punktem zbiórki, czasem i nazwiskiem na rezerwacji. Po prostu pokazać telefon przy przystani. To wszystko.' },
      { q: 'Czy mogę anulować lub zwrócić bilet na rejs po Bosforze?', a: 'Tak — bezpłatna anulacja do 2 godzin przed odpłynięciem. Po prostu napisać na WhatsApp. Ponieważ nie zapłacili Państwo jeszcze (płatność na pokładzie), zwrot nie jest potrzebny — po prostu nie zjawiają się, bez opłaty. Znacznie bardziej elastyczne niż opłacone z góry bilety osób trzecich.' },
      { q: 'Czy bilety na rejs po Bosforze są dostępne tego samego dnia?', a: 'Często tak, szczególnie w dni powszednie. Weekendy i święta zapełniają się szybciej. Sprawdź dostępność przez kreatora rezerwacji — aktualizuje się w czasie rzeczywistym. Rezerwacja tego samego dnia zazwyczaj możliwa do kilku godzin przed wypłynięciem 21:00. WhatsApp na pilne prośby.' },
      { q: 'Czy bilety dziecięce na rejs po Bosforze są bezpłatne?', a: 'Dzieci **0-3 lata całkowicie bezpłatnie** (bez opłat, bez ukrytych kosztów, transfer wliczony). **4-8 lat 50% zniżki** (€{p.dinnerStd}/2 = €12.15). **Od 9 lat pełna cena dorosłego.** Ceny pułapowe i przejrzyste — bez sztuczek "opłata za niemowlęta".' }
    ],
    cta: {
      primary: 'Kup Bilety · Płatność na Pokładzie',
      secondary: 'Rezerwacja bezpośrednia · Bez przedpłaty · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Sprawdź Dostępność'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosfor Last Minute od €{p.dinnerStd} — Rezerwuj Dziś, Płać na Pokładzie',
      description: 'Rezerwacja rejsu Bosfor tego samego dnia. Potwierdzenie WhatsApp w minutach. Wypłynięcie 21:00 z Kabataş. Bezpłatne anulowanie, płatność na pokładzie.'
    },
    hero: {
      h1: 'Rejs po Bosforze na Ostatnią Chwilę',
      subtitle: 'Dostępność na dziś wieczór, potwierdzona w ciągu minut. Bez przedpłaty, bez wcześniej drukowanych kuponów — po prostu zjawiają się Państwo przy przystani i cieszą wieczorem.',
      badge: 'Rezerwacja Tego Samego Dnia · Potwierdzenie w Minutach · Płatność na Pokładzie'
    },
    intro: [
      'Wylądowali Państwo w Stambule dziś po południu i chcą wspaniałego wieczoru? **Rejs po Bosforze na ostatnią chwilę** się sprawdza. Wiemy, że wielu podróżnych decyduje się rano, więc specjalnie rezerwujemy miejsca na rezerwacje tego samego dnia. Wypełnij kreatora tutaj, potwierdzamy przez WhatsApp w minutach, zjawiają się Państwo o 20:00 przy przystani Kabataş, płacą na pokładzie, cieszą.',
      'Nasz **rejs po Bosforze na ostatnią chwilę** ma taki sam program wieczorny jak rezerwacje z wyprzedzeniem: 3 godziny na wodzie (21:00-00:00), bogata turecka kolacja, pokaz tańców ludowych na żywo, sema, taniec brzucha, DJ. Podświetlony Pałac Dolmabahçe, Meczet Ortaköy, Most Bosforski — te same kultowe widoki. Ta sama cena: €{p.dinnerStd}/osobę.',
      'Anulacja tego samego dnia jest bezpłatna do 2 godzin przed odpłynięciem, ponieważ **płatność na pokładzie** oznacza, że nie zobowiązali się Państwo jeszcze do niczego. Zarezerwowali o 14:00 i zmienili plany o 19:00? Po prostu napisać na WhatsApp — bez zwrotu, bez problemu. To elastyczność **wycieczki po Stambule na ostatnią chwilę**, którą podróżni doceniają.'
    ],
    highlights: [
      { title: 'Miejsca na dziś wieczór wciąż dostępne', desc: 'Rezerwujemy 5-10 miejsc dziennie na rezerwacje tego samego dnia. Sprawdź kreator powyżej — dostępność w czasie rzeczywistym. Jeśli dzisiejszy rejs jest pełny, jutrzejszy zwykle otwarty.' },
      { title: 'Potwierdzenie w mniej niż 5 minut', desc: 'Wypełnij kreator → wiadomość potwierdzająca WhatsApp/Telegram → gotowe. Brak kuponu emailowego na oczekiwanie, brak kodu QR do wydrukowania. Nasza wiadomość to Państwa bilet.' },
      { title: 'Zero płatności do wejścia na pokład', desc: 'Płatność na pokładzie, gotówka lub karta. Jeśli się Państwo nie zjawią (zmiana planów, choroba, pogoda), bez opłaty. Bezpłatna anulacja do 2 godzin przed odpłynięciem. Naprawdę przyjazne ostatniej chwili.' },
      { title: 'Transfer hotelowy tego samego dnia często dostępny', desc: 'Transfer hotelowy normalnie wymaga 24-godzinnego powiadomienia, ale dla rezerwacji tego samego dnia między 14:00-18:00 zazwyczaj możemy zorganizować odbiór za +€{p.transfer}/osobę. WhatsApp na pilne prośby transferowe.' }
    ],
    faq: [
      { q: 'Czy naprawdę mogę zarezerwować rejs po Bosforze na dziś wieczór?', a: 'Tak — często. Rezerwujemy miejsca na rezerwacje tego samego dnia. Sprawdź kreator powyżej pod kątem dostępności na dziś wieczór. Jeśli miejsca dostępne, mogą Państwo rezerwować do 18:00 (3 godziny przed odpłynięciem). Weekendy bardziej napięte — rezerwować wcześniej w ciągu dnia, jeśli możliwe.' },
      { q: 'Jak w ostatniej chwili mogę zarezerwować?', a: 'Rezerwacja pozostaje otwarta do 18:00 dla łodzi 21:00. Po 18:00 proszę napisać bezpośrednio na WhatsApp +90 532 244 29 22 — jeśli miejsca otwarte, możemy potwierdzić ręcznie. Po 20:00 jest bardzo napięte, chyba że są Państwo już przy przystani Kabataş i mogą szybko wejść.' },
      { q: 'Czy rejs po Bosforze na ostatnią chwilę jest droższy?', a: 'Nie — ta sama cena co rezerwacja z wyprzedzeniem: €{p.dinnerStd}/osobę. Nie stosujemy "dynamicznych cen" ani dopłaty last-minute. Ta sama łódź, ta sama kolacja, ten sam pokaz, ta sama cena.' },
      { q: 'Co jeśli dzisiejszy rejs jest kompletnie pełny?', a: 'Jutrzejszy zwykle otwarty — operujemy codziennie, 365 dni w roku. Mogą Państwo zarezerwować na jutro i wciąż być "last minute" w sensie, że dopiero zdecydowali. Rejsy w dni powszednie mają więcej miejsca niż weekendy.' },
      { q: 'Czy możecie zorganizować transfer hotelowy na ostatnią chwilę?', a: 'Transfer tego samego dnia możliwy do ~18:00 dla rejsu 21:00. Po 18:00 możemy nie mieć dostępnego kierowcy — w takim przypadku mogą Państwo wziąć taksówkę do przystani Kabataş (15 min z Taksim, 10 min z Sultanahmet, ~€10-15). Centralnie i łatwo.' },
      { q: 'Co jeśli jestem już przy Kabataş i chcę wejść na pokład?', a: 'Jeśli są Państwo przy przystani i są otwarte miejsca, można podejść i wejść na pokład. Napisać do nas na WhatsApp lub zapytać załogę — dodamy Państwa, jeśli miejsce. Ta sama cena płatności na pokładzie. Nazywa się to "walk-on" w terminologii rejsów — tutaj działa.' }
    ],
    cta: {
      primary: 'Zarezerwuj na Dziś · Płatność na Pokładzie',
      secondary: 'Rezerwacja tego samego dnia · Potwierdzenie w minutach · Bezpłatna anulacja do 2 godzin',
      tertiary: 'WhatsApp dla Pilnych Rezerwacji'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Cena Rejsu Stambuł od €{p.dinnerStd} — Przejrzyste Stawki',
      description: 'Ceny rejsów Bosfor Stambuł: rejs z kolacją €{p.dinnerStd}/osobę. Dzieci 0-3 gratis, 4-8 połowa ceny. Dodatki przejrzyste. Bezpłatne anulowanie.'
    },
    hero: {
      h1: 'Cena Rejsu po Stambule',
      subtitle: 'Przejrzyste ceny, bez ukrytych opłat. Jeden pakiet, €{p.dinnerStd}/osobę — i płacą Państwo na pokładzie, nie teraz.',
      badge: 'Przejrzyste · 40% ZNIŻKI Bezpośrednio · Dzieci 0-3 Bezpłatnie'
    },
    intro: [
      '**Ceny rejsów po Stambule** mocno się różnią — od €15 promów budżetowych pomijających kolację po €150+ jachty w stylu resort. Nasze ceny są pośrodku i dają najlepszą wartość: jeden pakiet za €{p.dinnerStd}/osobę na 3-godzinny rejs z pełną kolacją i pokazem. Bez ukrytych opłat, bez zaskakujących dopłat.',
      'Szczegółowe rozbicie **cen rejsów po Stambule**, ponieważ przejrzystość ma znaczenie:\n\n- **Rejs z Kolacją**: €{p.dinnerStd}/osobę (dawniej €{p.dinnerStdOriginal}, 40% zniżki). 3-godzinny rejs, 10 mezze, danie główne, deser, nieograniczone napoje bezalkoholowe, pokaz na żywo wliczone.\n- **Dzieci 0-3 lata**: Bezpłatnie. 4-8 lat: 50% zniżki. Od 9 lat: pełna cena.\n\nDodatki (opcjonalne):\n- 2 kieliszki alkoholu: +€{p.alcohol2}/osobę\n- Transfer hotelowy tam i z powrotem: +€{p.transfer}/osobę\n- Aranżacja stolika romantycznego: +€{p.romantic}/stół',
      'I co ważne: **płatność na pokładzie**. Nie zobowiązują się Państwo ani do centa, dopóki nie znajdą się na łodzi. Bezpłatna anulacja do 2 godzin przed odpłynięciem. Bez zobowiązania, bez ryzyka — najbardziej przyjazne konsumentowi **cennik rejsów po Stambule**, jaki znajdą Państwo.'
    ],
    highlights: [
      { title: 'Rejs z Kolacją: €{p.dinnerStd} (dawniej €{p.dinnerStdOriginal})', desc: '40% zniżki od ceny regularnej. 3-godzinny rejs, pełna turecka kolacja, pokaz na żywo, nieograniczone napoje bezalkoholowe. Jeden pakiet — obejmuje wszystko, co potrzebne do wspaniałego wieczoru.' },
      { title: 'Płatność na pokładzie — €0 z góry', desc: 'Proszę zarezerwować teraz i zapłacić przy wejściu na pokład (gotówka lub karta). Bezpłatna anulacja do 2 godzin przed odpłynięciem. Zero ryzyka finansowego przy wczesnej rezerwacji.' },
      { title: 'Cena dziecka: 0-3 bezpłatnie, 4-8 pół ceny', desc: '0-3 lata całkowicie bezpłatnie (bez opłat). 4-8 lat 50% zniżki od ceny dorosłego. Od 9 lat pełna cena dorosłego. Przejrzyste, bez sztuczek cenowych rodzinnych. Transfer również bezpłatny dla 0-3.' },
      { title: 'Dodatki — tylko gdy ich Państwo chcą', desc: 'Alkohol (2 kieliszki): +€{p.alcohol2}/osobę. Transfer: €{p.transfer}/osobę. Stół romantyczny: €{p.romantic}/stół. Wszystkie opcjonalne, niepakietowe. Wybierają Państwo tylko to, czego potrzebują.' }
    ],
    faq: [
      { q: 'Ile kosztuje rejs po Stambule?', a: 'Rejs z Kolacją: €{p.dinnerStd}/osobę (regularnie €{p.dinnerStdOriginal}, 40% zniżki). Dzieci 0-3 lata bezpłatnie, 4-8 lat pół ceny. Płatność na pokładzie — bez przedpłaty. Bezpłatna anulacja do 2 godzin przed odpłynięciem.' },
      { q: 'Czy w cenie rejsu po Stambule są ukryte opłaty?', a: 'Nie. Cena zawiera: 3-godzinny rejs, pełną kolację (mezze, przystawka, danie główne, deser), nieograniczone napoje bezalkoholowe, pokaz na żywo, podatki. Opcjonalne dodatki (alkohol, transfer, stół romantyczny) są oddzielne i przejrzyście wycenione — płacą Państwo tylko za to, co dodadzą. Bez "opłaty serwisowej", "opłaty portowej", zaskakujących dopłat.' },
      { q: 'Dlaczego cena rejsu po Stambule to 40% zniżki — czy to sztuczka?', a: 'Bez sztuczek. Cena regularna to €{p.dinnerStdOriginal}, co pobierają strony rezerwacyjne osób trzecich (Viator, GetYourGuide, Klook) — z ich prowizjami. Rezerwować bezpośrednio i otrzymają Państwo €{p.dinnerStd}. To właśnie różnica 40%. Żadnych sztuczek ograniczonych czasowo ani dynamicznych cen.' },
      { q: 'Jak cena rejsu po Stambule porównuje się do innych opcji?', a: 'Promy publiczne: €5-10, 1 godzina, bez kolacji, bez rozrywki, tylko widokowanie. Budżetowe rejsy z kolacją: €20-30, tłoczno, przeciętna kolacja, krótki pokaz. Nasz rejs z kolacją (€{p.dinnerStd}): 3 godziny, pełna kolacja, pełen pokaz, prywatny stół, licencja TÜRSAB. Jachty resort: €100-150+, przesada dla podróżnych solo/par.' },
      { q: 'Czy muszę zapłacić cenę rejsu po Stambule z góry?', a: 'Nie — **płatność na pokładzie**. Rezerwują Państwo teraz (1-minutowy kreator), potwierdzamy na WhatsApp, zjawiają się o 20:00 i płacą na pokładzie (gotówka lub karta). Bezpłatna anulacja do 2 godzin przed odpłynięciem. Zero zobowiązania finansowego do momentu zadowolenia.' },
      { q: 'Czy w cenie rejsu po Stambule są zniżki grupowe?', a: 'Dla grup 10+ możemy zaoferować 5-10% zniżki — proszę napisać na WhatsApp z wielkością grupy. Dla 25+ proszę rozważyć prywatny rejs (cała łódź dla Państwa grupy, niestandardowe menu). Dla 2-9 osób obowiązują standardowe ceny — już 40% zniżki od regularnej.' }
    ],
    cta: {
      primary: 'Zarezerwuj · Płatność na Pokładzie',
      secondary: 'Od €{p.dinnerStd}/osobę · Dzieci 0-3 bezpłatnie · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Sightseeing Bosfor od €{p.dinnerStd} — Zabytki Stambułu z Wody',
      description: 'Rejs sightseeing Bosfor: Dolmabahçe, Ortaköy, Most Bosfor, Rumeli, Beylerbeyi, Wieża Panny. Tour wieczorny 3h z kolacją.'
    },
    hero: {
      h1: 'Zwiedzanie Bosforu',
      subtitle: 'Wszystkie kultowe zabytki Stambułu — z wody, nocą, z kolacją. Jeden 3-godzinny rejs obejmuje Dolmabahçe, Meczet Ortaköy, Most Bosforski, Rumeli Hisarı i więcej.',
      badge: '10+ Zabytków · Wybrzeża Europejskie i Azjatyckie · 3 Godziny'
    },
    intro: [
      '**Zwiedzanie Bosforu** z wody pokonuje każdą wycieczkę autobusową. Bosfor to najbardziej historyczna droga wodna miasta — sułtani osmańscy, cesarze bizantyjscy, kupcy greccy i rosyjskie okręty wojenne — wszyscy tędy przepłynęli. Dziś nasz 3-godzinny rejs, z komentarzem naszej anglojęzycznej załogi, przepływa obok każdego wielkiego stambulskiego zabytku, który definiuje panoramę.',
      'Trasa naszej **wycieczki zwiedzającej po Bosforze** (wieczorne wypłynięcie, 21:00-00:00):\n\n1. **Pałac Dolmabahçe** — 19-wieczna rezydencja osmańska, podświetlona nocą\n2. **Pałac Çırağan** — obecnie luksusowy hotel, historia królewska\n3. **Meczet Ortaköy** — jeden z najczęściej fotografowanych meczetów Stambułu, na wodzie\n4. **Most Bosforski** — cyklicznie między błękitem, fioletem, złotem w nocy\n5. **Bebek** — elegancka dzielnica europejska\n6. **Rumeli Hisarı** — zbudowany w 1452 przez Mehmeta Zdobywcę przed podbojem Konstantynopola\n7. **Most Fatih Sultan Mehmet** — drugi most bosforski, dramatyczne łuki\n8. **Pałac Beylerbeyi** — strona azjatycka, letnia rezydencja osmańska\n9. **Üsküdar** — azjatycka strona Stambułu, tradycyjna dzielnica\n10. **Wieża Panny** — wieża na małej wyspie, jeden z najromantyczniejszych symboli Stambułu',
      'Kolacja i rozrywka wliczone — nie oddzielne — więc **zwiedzanie Bosforu** zamienia się w pełen wieczór. Bogata turecka kolacja, pokaz tańców ludowych na żywo, sema, taniec brzucha, DJ. Ocena 4,8★ od ponad 11 317 podróżnych, licencja TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ wielkich stambulskich zabytków', desc: 'Pałac Dolmabahçe, Pałac Çırağan, Meczet Ortaköy, Most Bosforski, Rumeli Hisarı, Most FSM, Pałac Beylerbeyi, Üsküdar, Wieża Panny. Każdy niezbędny stambulski zabytek w jednym rejsie.' },
      { title: 'Zarówno wybrzeże europejskie jak i azjatyckie', desc: 'Płynąc wybrzeże europejskie (Dolmabahçe → Rumeli Hisarı), wracając wybrzeże azjatyckie (Beylerbeyi → Üsküdar). Dwa kontynenty w jednym 3-godzinnym rejsie — tylko Stambuł pozwala Państwu to zrobić.' },
      { title: 'Wieczorne zwiedzanie = podświetlone widoki', desc: 'Dzienne zwiedzanie pokazuje zabytki w płaskim świetle. Rejs nocny chwyta je w szczycie dramatyzmu: pałace świecą żółto, mosty kolorowe, meczety odbite w ciemnej wodzie. Lepsze na zdjęcia, bardziej niezapomniane.' },
      { title: 'Kolacja + pokaz wliczone', desc: 'Zwiedzanie + kolacja + rozrywka w jednym pakiecie. Nie trzeba planować oddzielnej kolacji po wycieczce. Od €{p.dinnerStd}/osobę, płatność na pokładzie, 3 godziny łącznie.' }
    ],
    faq: [
      { q: 'Które zabytki Bosforu zobaczę?', a: 'W kolejności: Pałac Dolmabahçe, Pałac Çırağan, Meczet Ortaköy, Most Bosforski, dzielnica Bebek, Rumeli Hisarı, Most Fatih Sultan Mehmet, Anadolu Hisarı, Pałac Beylerbeyi, Kuzguncuk, Üsküdar i Wieża Panny (widoczna z daleka). 10+ wielkich zabytków na jednej 3-godzinnej trasie.' },
      { q: 'Zwiedzanie Bosforu: dzień czy noc lepsze?', a: 'Różne doświadczenia. Dzień: wyraźniejsze widoki szczegółów architektonicznych, jaśniejsze na zdjęciach. Noc: dramatyczne oświetlenie, tajemnicza atmosfera, mniej łodzi na wodzie. Większość podróżnych preferuje rejs nocny, ponieważ zabytki wyglądają bardziej magicznie — a kolacja + pokaz czynią z niego pełen wieczór.' },
      { q: 'Czy łódź zatrzymuje się na zabytkach na zdjęcia?', a: 'To ciągły rejs — bez postojów (bez zejść). Łódź przepływa blisko każdego zabytku, załoga wyjaśnia co Państwo widzą, można przejść na otwarty pokład do zdjęć. Bez kolejek, bez chodzenia, bez stresu czasowego — po prostu płynne 3 godziny okazji do zdjęć.' },
      { q: 'Czy załoga komentuje podczas zwiedzania?', a: 'Tak — anglojęzyczna załoga zapewnia krótki komentarz przy każdym wielkim zabytku (historia, architektura, ciekawostki). To nie jest przewodnik, bardziej jak przyjacielskie wyjaśnienie podczas jedzenia. Na głębszą historię zalecamy połączyć z dzienną wycieczką pieszo po Stambule.' },
      { q: 'Czym zwiedzanie Bosforu różni się od promu hop-on?', a: 'Promy hop-on (Şehir Hatları łodzie publiczne): €5-10, 1-2 godziny, podstawowe, bez kolacji, tłoczno. Nasza wycieczka: €{p.dinnerStd}, 3 godziny, pełna kolacja, pokaz na żywo, prywatny stół, komentarz po angielsku. Rejs wieczorny lepszy na komfortowe, poważne zwiedzanie. Prom publiczny dobry na szybkie przejście budżetowe.' },
      { q: 'Czy mogę fotografować zabytki z łodzi?', a: 'Tak — zdecydowanie. Otwarty pokład ma doskonałe punkty na fotografię. Zabytki przepływają 100-200 metrów od łodzi. Zdjęcia ze smartfona wychodzą świetnie; użytkownicy DSLR/bezlustrowców mogą uchwycić wspaniałe ujęcia, szczególnie podczas wczesnowieczornego przejścia złoto-niebieskiej godziny.' }
    ],
    cta: {
      primary: 'Zarezerwuj Wycieczkę Zwiedzającą · Płatność na Pokładzie',
      secondary: '10+ zabytków · Kolacja + pokaz · Bezpłatna anulacja do 2 godzin',
      tertiary: 'Dostępność na Dziś'
    }
  }

};
