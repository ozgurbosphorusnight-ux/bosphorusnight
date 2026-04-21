/**
 * Italian translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  "bosphorus-dinner-cruise": {
    meta: {
      title: "Crociera con Cena sul Bosforo Istanbul — Tour Notturno Premium, da €{p.dinnerStd}",
      description: "La crociera con cena sul Bosforo più apprezzata di Istanbul. Navigazione serale di 3 ore, banchetto turco a più portate, folklore dal vivo e DJ, vedute notturne panoramiche. Licenza TÜRSAB. Pagamento a bordo — nessun anticipo."
    },
    hero: {
      h1: "Crociera con Cena sul Bosforo a Istanbul",
      subtitle: "Tre ore di intrattenimento dal vivo, un sontuoso banchetto turco a più portate e le vedute notturne più celebri del Bosforo.",
      badge: "4,8★ · 11.317 recensioni"
    },
    intro: [
      "La **crociera con cena sul Bosforo** è l'esperienza serale più iconica di Istanbul. La nostra barca salpa alle 20:00 dal molo di Kabataş e scivola sotto le arcate illuminate dei ponti del Bosforo e di Fatih Sultan Mehmet, mentre Lei gusta un banchetto turco a più portate, spettacoli folkloristici dal vivo, danza orientale e un set DJ che anima il ponte fino alle 23:00.",
      "A differenza delle numerose barche turistiche generiche che popolano la notte di Istanbul, la nostra **crociera con cena sul Bosforo** è autorizzata TÜRSAB (A-17672) e valutata 4,8★ da oltre 11.317 viaggiatori su Google e TripAdvisor. Manteniamo il gruppo ristretto, il servizio caloroso — e poiché il pagamento avviene a bordo, prenotare in anticipo non comporta alcun rischio.",
      "Che stia celebrando un anniversario, cercando una serata premium a Istanbul per la Sua famiglia, o desideri semplicemente il passaggio tramonto-notte più fotogenico della città — questa è la crociera con cena che gli abitanti di Istanbul raccomandano per primi."
    ],
    highlights: [
      { title: "Banchetto turco a più portate", desc: "10 varietà di meze, antipasto caldo (paçanga böreği), secondo a scelta (salmone / branzino / pollo / köfte / vegetariano), dolce con bomba gelato, bevande analcoliche illimitate." },
      { title: "Folklore dal vivo, danza orientale e DJ", desc: "Cerimonia Sema dei Mevlana, 5 danze folkloristiche turche tradizionali, danza orientale classica, musicisti turchi dal vivo, seguiti da un set DJ per tutta la crociera." },
      { title: "Itinerario notturno completo del Bosforo", desc: "Kabataş → Dolmabahçe → Palazzo di Çırağan → Moschea di Ortaköy → Bebek → Rumeli Hisarı → Ponte FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş." },
      { title: "Da €{p.dinnerStd}/persona — pagamento a bordo", desc: "Crociera con cena Standard €{p.dinnerStd} (prima €{p.dinnerStdOriginal}). Crociera VIP con posti vicino al palco e menu premium a €{p.dinnerVip}. Nessun anticipo. Cancellazione gratuita fino a 2 ore prima della partenza." }
    ],
    faq: [
      { q: "Quando inizia la crociera con cena sul Bosforo?", a: "L'imbarco inizia alle 20:00 al molo di Kabataş. La barca parte alle 21:00 e rientra intorno alle 00:00. Raccomandiamo di arrivare 15-20 minuti in anticipo per accomodarsi e sistemarsi." },
      { q: "Quanto costa la crociera con cena sul Bosforo?", a: "Il tour Standard costa €{p.dinnerStd}/persona (prezzo pieno €{p.dinnerStdOriginal}). Il tour VIP con posti vicino al palco e menu premium costa €{p.dinnerVip}/persona. Bambini 0-3 anni gratis, 4-8 anni al 50%. Il pagamento avviene a bordo — nessun anticipo." },
      { q: "L'alcol è incluso nella crociera con cena?", a: "Le bevande analcoliche illimitate (acqua, cola, succhi) sono incluse nel prezzo. I pacchetti alcolici sono opzionali: 2 bicchieri +€{p.alcohol2}/persona oppure alcol locale illimitato (vino, birra, rakı, vodka, gin) +€{p.unlimited}/persona. I distillati d'importazione sono a prezzo separato a bordo." },
      { q: "È previsto il transfer dall'hotel?", a: "Sì — il servizio di andata e ritorno costa +€{p.transfer}/persona. Aree di servizio: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane e Sütlüce. Può selezionarlo nella procedura guidata di prenotazione." },
      { q: "La crociera con cena sul Bosforo è halal?", a: "Assolutamente sì. Tutti i prodotti a base di carne a bordo sono certificati halal. L'alcol è un extra opzionale (mai imposto agli ospiti) e la disposizione dei tavoli separa naturalmente chi preferisce un tavolo senza alcol. Offriamo anche alternative vegetariane senza supplemento." },
      { q: "Come devo vestirmi?", a: "Smart casual. Le serate di Istanbul possono essere ventose anche in estate — raccomandiamo una giacca leggera o uno scialle. Non c'è un dress code obbligatorio, ma costumi da bagno, infradito o abbigliamento sportivo non si addicono all'atmosfera della cena." }
    ],
    cta: {
      primary: "Prenota Ora · Pagamento a Bordo",
      secondary: "Cancellazione gratuita fino a 2 ore prima della partenza",
      tertiary: "Disponibilità Stasera"
    }
  },

  "bosphorus-with-kids": {
    meta: {
      title: "Tour del Bosforo con Bambini — Crociera con Cena a Misura di Famiglia Istanbul",
      description: "Crociera con cena sul Bosforo a misura di famiglia. 0-3 anni gratis, 4-8 anni metà prezzo. Area interna sicura, menu per bambini, partenza anticipata. Da €{p.dinnerStd}/adulto — pagamento a bordo."
    },
    hero: {
      h1: "Tour del Bosforo con Bambini",
      subtitle: "Una serata sul Bosforo a misura di famiglia, pensata per famiglie con bambini — cena, intrattenimento e un'atmosfera sicura e accogliente.",
      badge: "A Misura di Famiglia · Halal · 0-3 Anni Gratis"
    },
    intro: [
      "Il **tour del Bosforo con bambini** è l'opzione serale più a misura di famiglia di Istanbul. Accogliamo decine di famiglie ogni sera — abbiamo progettato ogni dettaglio per il comfort dei più piccoli: posti a sedere interni coperti per tenerli al caldo, un menu per bambini accessibile (pollo alla griglia semplice, pasta, bevande analcoliche illimitate) e imbarco anticipato per evitare i capricci da stanchezza.",
      "A differenza delle barche solo per adulti, la nostra **crociera con cena sul Bosforo per famiglie** rimane calorosa e inclusiva. **I bambini 0-3 anni sono gratis** (transfer incluso), 4-8 anni **50% di sconto**, 9+ prezzo pieno — senza costi nascosti. Folklore dal vivo, danza orientale e cerimonia Sema sono intrattenimenti delicati, adatti alle famiglie, non da night club.",
      "Che stia venendo a Istanbul per un lungo weekend con il Suo bambino piccolo, o portando gli adolescenti al loro primo viaggio europeo — questo è il tour che le famiglie di Istanbul raccomandano. Sicuro, certificato halal, autorizzato TÜRSAB e valutato 4,8★ da oltre 11.317 viaggiatori."
    ],
    highlights: [
      { title: "0-3 anni completamente gratis", desc: "Nessun costo per neonati e bambini piccoli. 4-8 anni al 50% del prezzo adulto. Dai 9 anni ospite a pieno titolo. Trasparente, senza sorprese." },
      { title: "Area interna al coperto", desc: "Completamente al coperto e riscaldata nei mesi freddi. I bambini restano al caldo, al riparo dal vento. Ponte esterno disponibile anche con bel tempo — la scelta è Sua." },
      { title: "Menu per bambini su richiesta", desc: "Pollo alla griglia semplice, pasta, pane e verdure — senza supplemento. Bevande analcoliche illimitate (cola, succhi, acqua). Ci avvisi in anticipo — niente meze piccanti a sorpresa per i più piccoli." },
      { title: "Intrattenimento sicuro per famiglie", desc: "Cerimonia Sema (affascinante per i bambini), 5 danze folkloristiche tradizionali, musica turca dal vivo e set DJ. Tutto a misura di famiglia — nessun contenuto per adulti. I bambini spesso si uniscono ai balli." }
    ],
    faq: [
      { q: "Il tour del Bosforo è sicuro per i bambini piccoli?", a: "Sì — la nostra barca è autorizzata TÜRSAB, dispone di un'area interna coperta con finestre di sicurezza, giubbotti di salvataggio di ogni taglia disponibili, e l'equipaggio è esperto con le famiglie. Raccomandiamo il ponte interno per i più piccoli e il ponte esterno per i bambini dai 6 anni in su." },
      { q: "Qual è il prezzo per bambini del tour del Bosforo?", a: "I bambini **0-3 anni: GRATIS** (nessun costo, nessuna tariffa nascosta). **4-8 anni: 50% di sconto** sul prezzo adulto — quindi sul tour Standard €{p.dinnerStd}/2 = €12 per bambino. **9+ anni: prezzo adulto intero.** Il transfer hotel è gratis per i 0-3 anni, standard (€{p.transfer}/persona) per i 4+." },
      { q: "C'è un menu per bambini a bordo?", a: "Sì — pollo alla griglia semplice, pasta, pane, verdure di stagione e bevande analcoliche illimitate. Ci informi di allergie o di bambini schizzinosi alla prenotazione, e prepareremo qualcosa che Suo figlio mangerà con piacere." },
      { q: "La musica o lo spettacolo sono troppo forti per i bambini?", a: "Le esibizioni dal vivo si svolgono in un'unica area palco designata — se i Suoi bambini sono sensibili ai suoni, Le daremo un tavolo più tranquillo nella parte posteriore. Lo spettacolo dura in totale 40 minuti, e il resto della serata è musica turca d'atmosfera e DJ a volume moderato." },
      { q: "Cosa succede se il mio bambino si addormenta durante il tour?", a: "Nessun problema — molti lo fanno. L'area interna ha divani stile banchetto dove un neonato o un bambino piccolo può appisolarsi comodamente. Chieda al nostro equipaggio una coperta calda se necessario. Nessun supplemento." },
      { q: "Devo portare un passeggino a bordo?", a: "Può, ma raccomandiamo di lasciare i passeggini ingombranti in hotel (o con il nostro autista se ha preso il transfer — lo custodiremo al sicuro). La nostra barca ha corridoi stretti e ponti con gradini. Un marsupio leggero funziona meglio a bordo." }
    ],
    cta: {
      primary: "Prenota Tour Famiglia · Pagamento a Bordo",
      secondary: "Cancellazione gratuita fino a 2 ore prima della partenza · Nessun anticipo",
      tertiary: "Disponibilità Stasera"
    }
  },

  "romantic-bosphorus-cruise": {
    meta: {
      title: "Crociera Romantica sul Bosforo — Cena a Lume di Candela per Coppie | Istanbul",
      description: "La crociera sul Bosforo più romantica di Istanbul. Tavolo a lume di candela, rose, allestimento VIP, cena a più portate, sotto ponti illuminati. Anniversario, luna di miele, sorpresa — prenoti da €{p.dinnerStd}/persona."
    },
    hero: {
      h1: "Crociera Romantica sul Bosforo",
      subtitle: "Una cena a lume di candela, un tavolo ornato di rose, ponti illuminati e un momento speciale condiviso solo tra voi due sotto il cielo notturno più iconico di Istanbul.",
      badge: "Anniversario · Luna di Miele · Serata Speciale"
    },
    intro: [
      "La **crociera romantica sul Bosforo** è la serata più iconica di Istanbul per le coppie. Mentre il sole tramonta dietro il Palazzo Dolmabahçe e il Ponte del Bosforo si accende di colori, Lei e il Suo partner condividete un sontuoso banchetto turco a più portate a un tavolo privato — con candele, fiori freschi e violino dal vivo che scivola sul ponte.",
      "Il nostro allestimento romantico (+€{p.romantic}/tavolo) trasforma qualsiasi posto in un momento speciale: rose rosse, candele scintillanti, un biglietto di benvenuto scritto a mano. Aggiunga il pacchetto alcolico illimitato per brindare sotto le stelle (+€{p.unlimited}/persona) o mantenga tutto semplice con le bevande analcoliche incluse. In entrambi i casi, l'equipaggio si occupa del resto in silenzio.",
      "Che stia festeggiando un anniversario, preparando una sorpresa per il Suo partner o desiderando semplicemente una serata indimenticabile nella città più romantica d'Europa — questo è il tour che le coppie di Istanbul scelgono per prime. Valutazione 4,8★, autorizzato TÜRSAB, e — cosa più importante — pagamento a bordo, quindi Lei si impegna solo per la serata stessa."
    ],
    highlights: [
      { title: "Tavolo romantico a lume di candela", desc: "Aggiunga l'allestimento romantico a +€{p.romantic}/tavolo: rose rosse fresche, candele scintillanti, petali di rosa sulla tovaglia e biglietto scritto a mano. Foto incluse." },
      { title: "I migliori tavoli per la transizione tramonto-notte", desc: "I tavoli vicino alla finestra sono riservati alle coppie. Osservi l'accensione del Ponte del Bosforo, il brillio della Torre della Fanciulla e l'illuminazione della Moschea di Ortaköy dal Suo tavolo privato." },
      { title: "Violino dal vivo e atmosfera intima", desc: "Violino dal vivo e musica turca acustica durante la cena creano un'atmosfera lenta e romantica. Successivamente il DJ prende il sopravvento e le coppie ballano sotto le luci del ponte esterno." },
      { title: "Vino, champagne, abbinamenti premium", desc: "Aggiunga 2 bicchieri di alcol (+€{p.alcohol2}/persona) o vino, birra e rakı locali illimitati (+€{p.unlimited}/persona). Champagne d'importazione e abbinamenti premium su richiesta — chieda alla prenotazione." }
    ],
    faq: [
      { q: "Cosa rende romantico questo tour?", a: "La combinazione di tavolo privato, allestimento a lume di candela (opzionale +€{p.romantic}), cucina turca a più portate, violino dal vivo e musica acustica, e i ponti illuminati del Bosforo che passano sopra di Voi. Progettiamo l'esperienza per le coppie — atmosfera tranquilla all'inizio, poi DJ e ballo energici. Lei sceglie il ritmo." },
      { q: "Potete organizzare una sorpresa per il mio partner — compleanno, anniversario, proposta di matrimonio?", a: "Sì — ci avvisi alla prenotazione. Possiamo coordinare una torta di compleanno (gratuita), un allestimento speciale del tavolo, un biglietto scritto a mano nella Sua lingua, o far portare al tavolo dal nostro staff qualcosa al momento giusto. Per le proposte di matrimonio, raccomandiamo di scriverci direttamente su WhatsApp per poter pianificare in segreto." },
      { q: "Quanto costa un tour romantico per 2 persone?", a: "2 persone Standard: 2 × €{p.dinnerStd} = €48. Aggiunga l'allestimento romantico +€{p.romantic} = €63. 2 persone VIP: 2 × €{p.dinnerVip} = €110 + romantico €{p.romantic} = €125. Nessun anticipo — pagamento a bordo. Per l'alcol illimitato, altri 2 × €{p.unlimited} = €60." },
      { q: "La crociera romantica sul Bosforo è privata — solo per noi?", a: "No — è un tour condiviso con altre coppie e ospiti (fino a 60-80 in totale). Il **Suo tavolo** è privato (solo per il Suo gruppo), ma ci sono altri ospiti sulla barca. Se desidera una barca completamente privata per 2 persone, si tratta di un **Tour Privato del Bosforo** separato (possiamo organizzarlo su richiesta — ci scriva)." },
      { q: "Possiamo portare i nostri fiori, torta o regalo?", a: "Certamente. Porti ciò che desidera — il nostro staff aiuterà a sistemare discretamente il regalo a sorpresa, nascondere un anello nel dolce, o esporre i fiori che ha portato Lei. Nessun diritto di tappo o supplemento. Ci avvisi solo per poter coordinare i tempi." },
      { q: "Come dobbiamo vestirci per una crociera romantica sul Bosforo?", a: "Da smart casual a elegante — molte coppie si vestono in modo raffinato (abiti, giacche). Non c'è un dress code rigido, ma l'atmosfera è più particolare del turismo casual. Porti una giacca leggera o uno scialle — il ponte può essere fresco anche in estate. Scarpe comode se prevede di ballare dopo cena." }
    ],
    cta: {
      primary: "Prenota Tour Romantico · Pagamento a Bordo",
      secondary: "Aggiunga l'allestimento romantico (+€{p.romantic}) nella procedura guidata · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  },

  "halal-bosphorus-cruise": {
    meta: {
      title: "Crociera con Cena sul Bosforo 100% Halal — Istanbul | A Misura di Musulmani",
      description: "Crociera con cena sul Bosforo certificata halal. Carne 100% halal, alcol opzionale (mai imposto), intrattenimento adatto alle famiglie, rispetto degli orari di preghiera. Da €{p.dinnerStd}/persona."
    },
    hero: {
      h1: "Crociera Halal sul Bosforo a Istanbul",
      subtitle: "Menu 100% certificato halal, alcol sempre opzionale, intrattenimento a misura di famiglia e un'atmosfera rispettosa per i viaggiatori musulmani — la serata sul Bosforo, fatta come si deve.",
      badge: "100% Halal · A Misura di Famiglia · Proprietà Musulmana"
    },
    intro: [
      "La **crociera halal sul Bosforo** è la crociera con cena più rispettata di Istanbul per i viaggiatori musulmani. Ogni carne servita sulla nostra barca — salmone, branzino, pollo, köfte di agnello, filetto di manzo, costata — è **certificata halal** da fornitori approvati. Serviamo lo stesso menu a ogni ospite; nessuna \"sezione halal\" separata perché l'intera barca è halal di default.",
      "L'alcol è un **extra opzionale** — mai imposto agli ospiti, e la disposizione dei tavoli separa naturalmente chi preferisce un tavolo senza alcol. Per gli ospiti che desiderano il pacchetto alcolico illimitato (+€{p.unlimited}/persona) è disponibile, ma le bevande analcoliche illimitate incluse (acqua, cola, succhi) sono sufficienti per la maggior parte delle famiglie musulmane. Il nostro staff è formato per rispettare le Sue preferenze senza dare nulla per scontato.",
      "La **crociera del Bosforo halal-friendly** è importante per i viaggiatori provenienti da Arabia Saudita, Emirati Arabi Uniti, Kuwait, Qatar, Iran, Malesia, Indonesia, Pakistan e Marocco che desiderano l'esperienza serale più iconica di Istanbul senza compromessi. Autorizzato TÜRSAB, 4,8★ e pagamento a bordo — Lei non si impegna a nulla finché non è sicuro che l'esperienza soddisfi i Suoi standard."
    ],
    highlights: [
      { title: "Menu 100% certificato halal", desc: "Tutta la carne (salmone, branzino, pollo, köfte, manzo, costata) è certificata halal da fornitori approvati. La cucina segue la preparazione halal. Nessun prodotto a base di maiale o additivo non halal. Opzioni vegetariane sempre disponibili." },
      { title: "Alcol opzionale, mai imposto", desc: "I pacchetti alcolici sono extra — non inclusi di default. Le bevande analcoliche (acqua, cola, succhi) sono illimitate e gratuite. Il Suo tavolo rimane senza alcol se non lo richiede esplicitamente. Lo staff rispetta la Sua scelta silenziosamente." },
      { title: "Intrattenimento a misura di famiglia", desc: "Cerimonia Sema, danze folkloristiche turche tradizionali, musica turca dal vivo. Nessuna performance in stile night club, nessun contenuto inappropriato. Sicuro per i bambini, rispettoso per le famiglie. La danza orientale è una forma d'arte tradizionale, presentata con modestia." },
      { title: "Rispetto degli orari di preghiera", desc: "Se il maghrib o l'isha coincide con l'orario di imbarco (20:00-21:00), il nostro staff può indicarLe l'area di preghiera silenziosa al molo di Kabataş prima della partenza. Basta avvisare alla prenotazione." }
    ],
    faq: [
      { q: "La crociera sul Bosforo è 100% halal?", a: "Sì — ogni prodotto a base di carne nel menu (pesce, pollo, köfte, filetto di manzo, costata, agnello) è certificato halal da fornitori approvati. La cucina segue gli standard di preparazione halal. Nessun maiale viene servito da nessuna parte sulla barca. Non è un'\"opzione halal\" — l'intero menu è halal." },
      { q: "Gli altri ospiti bevono alcol in questo tour?", a: "Alcuni ospiti aggiungono il pacchetto alcolico opzionale (+€{p.unlimited}/persona). I tavoli sono naturalmente separati — può richiedere una sezione senza alcol. Lo staff non porta alcol a meno che non sia specificamente ordinato da un ospite. Le bevande analcoliche (illimitate) sono incluse per tutti." },
      { q: "Questo tour è adatto alle famiglie musulmane con bambini?", a: "Sì — è uno dei tour più rispettosi delle famiglie di Istanbul. Intrattenimento modesto (folklore, Sema, musica turca), bambini sotto i 3 anni gratis, 4-8 anni 50% di sconto. Nessuna atmosfera da night club. Le famiglie della regione del Golfo, Indonesia, Malesia, Pakistan e Marocco prenotano regolarmente questo tour." },
      { q: "Posso pregare a bordo?", a: "Non c'è una sala preghiera dedicata a bordo, ma raccomandiamo di pregare prima dell'imbarco alle 20:00 (il maghrib di solito cade in questa finestra). Ci sono strutture per la preghiera al molo di Kabataş. Se ha bisogno di pregare durante la navigazione 21:00-00:00 (isha), parli con l'equipaggio — possiamo organizzare un angolo tranquillo sul ponte." },
      { q: "Quali sono i prezzi per una famiglia musulmana di 4 persone (2 adulti, 2 bambini)?", a: "Tour Standard: 2 × €{p.dinnerStd} + 2 × €12 (4-8 anni metà prezzo) = €72. Se i bambini hanno meno di 3 anni è gratis: 2 × €{p.dinnerStd} = €48. Aggiunga €10 di transfer hotel per adulto. Totale: €48-92 per una famiglia di 4, nessun anticipo, pagamento a bordo." },
      { q: "Anche il transfer hotel è halal?", a: "Il transfer hotel è solo un tragitto in auto — nessun cibo o bevanda coinvolti, quindi nessuna questione halal. I nostri autisti sono professionali, rispettosi e puntuali. Le zone di transfer coprono Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih e altre 8 aree centrali dove alloggiano di solito i viaggiatori musulmani." }
    ],
    cta: {
      primary: "Prenota Tour Halal · Pagamento a Bordo",
      secondary: "Cancellazione gratuita 2 ore prima · Nessun anticipo · Certificato halal",
      tertiary: "Disponibilità Stasera"
    }
  },

  "bosphorus-vip": {
    meta: {
      title: "Tour VIP sul Bosforo — Cena Premium, Posti Vicino al Palco | Istanbul",
      description: "Crociera VIP con cena sul Bosforo a Istanbul. Meze premium, opzioni di bistecca, posti vicino al palco, servizio prioritario. Da €{p.dinnerVipOriginal}, ora €{p.dinnerVip}/persona. Pagamento a bordo."
    },
    hero: {
      h1: "Tour VIP sul Bosforo",
      subtitle: "Posti vicino al palco, menu turco premium con opzioni di bistecca e servizio prioritario — la serata sul Bosforo elevata, per i viaggiatori che desiderano il miglior tavolo a bordo.",
      badge: "Più Popolare · 40% DI SCONTO · Posti Vicino al Palco"
    },
    intro: [
      "Il **tour VIP sul Bosforo** La colloca nei posti migliori a bordo: tavoli vicino al palco con vista diretta sulla cerimonia Sema, danze folkloristiche, danza orientale e musica dal vivo. Il menu premium aggiunge filetto di manzo e costata alle scelte di secondo (rispetto a pollo/salmone dello Standard), più 15+ varietà di meze turchi tradizionali serviti in un generoso buffet.",
      "La nostra **crociera VIP con cena sul Bosforo** è valutata dai nostri ospiti come la Più Popolare — perché a €{p.dinnerVip}/persona (prima €{p.dinnerVipOriginal}, 40% di sconto), l'esperienza è più vicina a un ristorante raffinato che a un tour turistico. Tavolo privato, servizio attento del cameriere, e le stesse splendide vedute di Dolmabahçe, della Moschea di Ortaköy e del Ponte del Bosforo illuminato.",
      "Che sia un viaggiatore d'affari, stia celebrando un traguardo importante o pensi semplicemente \"siamo a Istanbul una volta — facciamolo bene\", questo è il **tour VIP sul Bosforo** che i visitatori abituali prenotano. Autorizzato TÜRSAB, 4,8★ con 11.317+ recensioni, pagamento a bordo, cancellazione gratuita fino a 2 ore prima della partenza."
    ],
    highlights: [
      { title: "Tavolo privato vicino al palco", desc: "Posti riservati direttamente davanti al palco delle esibizioni — vista migliore sulla cerimonia Sema, folklore e danza orientale. Il Suo tavolo, non condiviso. I fotografi adorano questi posti." },
      { title: "15+ meze + secondi premium", desc: "15+ varietà di meze turchi serviti come buffet tradizionale. Le opzioni di secondo includono filetto di manzo e costata (solo pollo/salmone nello Standard). Stesso dolce e bevande analcoliche illimitate." },
      { title: "Servizio prioritario del cameriere", desc: "Un cameriere dedicato serve il Suo tavolo per primo — rifornimenti, consigli sul menu, coordinamento degli extra alcolici, richieste speciali. Non deve lottare per essere notato in una sala affollata." },
      { title: "40% DI SCONTO — prima €{p.dinnerVipOriginal}, ora €{p.dinnerVip}", desc: "Prezzo pieno €{p.dinnerVipOriginal}/persona. Prezzo di lancio attuale €{p.dinnerVip}/persona — 40% di sconto. Pagamento a bordo, nessun anticipo. Cancellazione gratuita fino a 2 ore prima della partenza." }
    ],
    faq: [
      { q: "Qual è la differenza tra il tour VIP e Standard sul Bosforo?", a: "Il VIP include: (1) posti vicino al palco con la migliore vista, (2) 15+ meze contro i 10 dello Standard, (3) filetto di manzo + costata aggiunti alle opzioni di secondo, (4) servizio prioritario del cameriere. Stessa durata di 3 ore, stesso intrattenimento, stesso itinerario. €{p.dinnerVip} contro €{p.dinnerStd}." },
      { q: "Il prezzo VIP di €{p.dinnerVip} è davvero il 40% di sconto?", a: "Sì — il prezzo pieno è €{p.dinnerVipOriginal}/persona (controlli su qualsiasi sito di prenotazione). Applichiamo €{p.dinnerVip} come prezzo per prenotazione diretta, tagliando le commissioni degli intermediari. Ottiene il VIP a meno di quanto la maggior parte dei posti addebita per lo Standard." },
      { q: "L'alcol è incluso nel tour VIP?", a: "No — l'alcol è un extra separato (come con lo Standard). 2 bicchieri: +€{p.alcohol2}/persona. Alcol locale illimitato (vino, birra, rakı, vodka, gin): +€{p.unlimited}/persona. I distillati premium d'importazione sono a prezzo separato. Le bevande analcoliche illimitate sono incluse e gratuite." },
      { q: "Posso passare al VIP dopo essere salito a bordo dello Standard?", a: "Dipende dalla disponibilità — se i tavoli VIP sono aperti, sì. Pagherebbe la differenza (€{p.dinnerVip} - €{p.dinnerStd} = €31) a bordo. Ma raccomandiamo di prenotare il VIP in anticipo: i migliori posti vicino al palco vanno alle prenotazioni anticipate." },
      { q: "Come prenoto il tour VIP sul Bosforo?", a: "Usi la procedura guidata di prenotazione su questa pagina — selezioni \"VIP\" al Passo 1, imposti la data, inserisca il numero di ospiti, poi i dettagli di contatto. La Sua richiesta arriva via WhatsApp / Telegram / WeChat e confermiamo immediatamente. Pagamento a bordo, non ora." },
      { q: "Il tour VIP è adatto a una cena di lavoro con clienti?", a: "Sì — il VIP è la scelta più frequente per le cene di lavoro a Istanbul. Tavolo privato, sufficientemente silenzioso per conversare, menu e viste d'effetto. Molti ospiti prenotano VIP + alcol illimitato per intrattenere i clienti. Certificato halal (ottimo per i viaggiatori d'affari del Golfo). Ci avvisi alla prenotazione, riserveremo un tavolo VIP più appartato." }
    ],
    cta: {
      primary: "Prenota VIP · Pagamento a Bordo",
      secondary: "Prima €{p.dinnerVipOriginal}, ora €{p.dinnerVip} · Cancellazione gratuita 2 ore prima",
      tertiary: "Vedi Opzione Standard (€{p.dinnerStd})"
    }
  },

  "private-bosphorus-cruise": {
    meta: {
      title: "Crociera Privata sul Bosforo — Noleggi la Sua Barca | Istanbul",
      description: "Noleggio di crociera privata sul Bosforo per gruppi, famiglie, eventi aziendali, matrimoni. Barca privata, menu personalizzato, durata flessibile. Minimo 25 ospiti. Ci scriva su WhatsApp per un preventivo."
    },
    hero: {
      h1: "Crociera Privata sul Bosforo",
      subtitle: "Noleggi l'intera barca per il Suo gruppo — celebrazioni familiari, cene aziendali, compleanni, fidanzamenti, matrimoni. Uso esclusivo, menu personalizzato, orari flessibili.",
      badge: "Noleggio Privato · 25+ Ospiti · Menu Personalizzato"
    },
    intro: [
      "Una **crociera privata sul Bosforo** significa che l'intera barca è Sua — nessun altro ospite, nessun tavolo condiviso, nessuna pista da ballo condivisa. Perfetto per riunioni familiari, cene aziendali, feste di compleanno, addii al celibato/nubilato o ricevimenti di matrimonio. Barca, equipaggio, menu, intrattenimento e tempistica si adattano al Suo gruppo.",
      "Il nostro **noleggio di crociera privata sul Bosforo** supporta gruppi da **25 a 80 ospiti**. Gruppi più piccoli possono comunque richiedere un'esperienza privata — forniamo un preventivo con una tariffa minima che copre i costi operativi della barca. Gruppi più grandi (dimensione matrimonio) ricevono prezzi dedicati e spesso includono decorazioni personalizzate, band dal vivo, servizio della torta e durata estesa (4-5 ore invece delle 3 standard).",
      "Che stia organizzando un evento aziendale per clienti, una festa per il 50° compleanno o un ricevimento di matrimonio sotto i ponti più iconici di Istanbul, questo è il **tour privato di cui si fidano i pianificatori di eventi di Istanbul**. Valutazione 4,8★, autorizzato TÜRSAB, equipaggio completamente anglofono e flessibile su tutto — itinerario, menu, musica, orari."
    ],
    highlights: [
      { title: "Intera barca, solo per Lei", desc: "Nessun altro ospite. Il Suo gruppo ha ogni ponte, ogni tavolo. Scelga la Sua musica, il Suo dress code, il Suo programma. La privacy conta — la rispettiamo." },
      { title: "Menu personalizzato e pacchetto bevande", desc: "Lavori con il nostro chef per personalizzare il menu: meze specifici, scelte di secondo, piatti adatti alla Sua cultura o alle Sue esigenze alimentari. Pacchetti alcolici, flute di champagne, bar personalizzati per cocktail — tutto gestibile." },
      { title: "Durata e partenza flessibili", desc: "Le 3 ore standard possono estendersi a 4-5 ore. Scelga partenza diurna alle 12:00, tramonto alle 17:30 o serale alle 21:00. Preferisce un giorno feriale al weekend? Nessun problema — lavoreremo con il Suo programma." },
      { title: "Decorazioni personalizzate, band, programma", desc: "Decorazioni personalizzate (palloncini, striscioni, composizioni floreali), band dal vivo invece del DJ, servizio della torta nuziale, coordinamento del fotografo, discorsi — aggiunga ciò di cui il Suo evento ha bisogno. Non siamo solo operatori di barche, siamo pianificatori di eventi." }
    ],
    faq: [
      { q: "Quanto costa una crociera privata sul Bosforo?", a: "Per gruppi di 25+, tipicamente €{p.dinnerStd}-€{p.dinnerVip}/persona + tariffa di noleggio della barca a seconda delle dimensioni del gruppo, data e durata. Ci scriva su WhatsApp con le dimensioni del Suo gruppo, la data e i requisiti — forniremo un preventivo entro 1 ora. La maggior parte degli eventi rientra nella fascia €2.000-€6.000 totali." },
      { q: "Qual è la dimensione minima del gruppo per una crociera privata sul Bosforo?", a: "Tecnicamente 25 ospiti rendono un tour privato economicamente fattibile. Gruppi più piccoli (10-24) possono comunque noleggiare privatamente ma pagano una tariffa minima equivalente a ~25 persone. Per gruppi davvero piccoli (2-10), consideri il normale tour Standard o VIP — il Suo tavolo è comunque privato, solo la barca è condivisa." },
      { q: "Posso celebrare un matrimonio sul tour del Bosforo?", a: "Sì — ospitiamo 10-15 ricevimenti di matrimonio all'anno. Capacità fino a 80 per cena seduta, fino a 100 per stile cocktail. Possiamo coordinare con il Suo fotografo, wedding planner, band o chef. Servizio della torta personalizzato, primo ballo, flute di champagne gestibili. Ci scriva su WhatsApp per il preventivo matrimonio." },
      { q: "E per eventi aziendali e cene di team?", a: "I tour privati aziendali sono tra le nostre prenotazioni più frequenti. Cene aziendali, hosting clienti, lanci di prodotto, celebrazioni di team — tutto funziona. Possiamo fornire fattura con dettaglio IVA, organizzare transfer hotel per il Suo team e coordinare materiali brandizzati (accessori da tavolo, segnaletica) su richiesta." },
      { q: "Posso portare la mia band dal vivo o DJ invece del Vostro intrattenimento?", a: "Sì — può portare la Sua band dal vivo, DJ o fotografo. Oppure mantenga il nostro standard (Sema, folklore, orientale, DJ) e aggiunga il Suo sopra. La barca dispone di sistema PA e pista da ballo. Ci avvisi in anticipo per poter coordinare il controllo audio." },
      { q: "Come richiedo un preventivo per una crociera privata sul Bosforo?", a: "Il modo più semplice: ci scriva su WhatsApp al +90 532 244 29 22 con (1) dimensioni del gruppo, (2) data preferita, (3) motivo (matrimonio, aziendale, compleanno), (4) requisiti speciali. Rispondiamo entro 1 ora in orario lavorativo, 12 ore di notte. Possiamo anche organizzare una videochiamata per discutere i dettagli." }
    ],
    cta: {
      primary: "WhatsApp per Preventivo Privato",
      secondary: "Menu personalizzato, gruppo 25-80, durata flessibile · Risposta in meno di 1 ora",
      tertiary: "Opzione Tour Standard (€{p.dinnerStd})"
    }
  },

  "bosphorus-for-couples": {
    meta: {
      title: "Tour del Bosforo per Coppie — Serata Romantica sull'Acqua | Istanbul",
      description: "Crociera con cena sul Bosforo per coppie. Tavolo privato, ponti illuminati, musica dal vivo, opzione allestimento romantico. Da €{p.dinnerStd}/persona. Pagamento a bordo — la serata romantica perfetta a Istanbul."
    },
    hero: {
      h1: "Tour del Bosforo per Coppie",
      subtitle: "Una serata romantica sul Bosforo — tavolo privato, musica dal vivo, ponti illuminati che scorrono sopra di Voi. Che sia il Vostro primo appuntamento a Istanbul o il decimo anniversario, questa serata funziona.",
      badge: "Tavolo Privato · Musica dal Vivo · Pagamento a Bordo"
    },
    intro: [
      "Il **tour del Bosforo per coppie** è la serata romantica preferita di Istanbul. Non tutte le coppie festeggiano un anniversario — a volte siete semplicemente nella città più romantica del mondo e volete una bella serata insieme. Questo tour offre: tavolo privato per due, cena turca lenta e a più portate, violino dal vivo e musica acustica durante la cena, e il Ponte del Bosforo illuminato che passa lentamente sopra di Voi.",
      "L'atmosfera è **calorosa ma non esageratamente romantica** — nessuna musica forzata da proposta di matrimonio, nessun imbarazzante applauso coordinato per \"sposini\". Mangiate, bevete, parlate, osservate le luci di Istanbul. Se desidera aggiungere un allestimento romantico al tavolo (candele, rose, +€{p.romantic}), bene — altrimenti anche solo la cena è già speciale.",
      "Che stia a Istanbul per 3 giorni con il Suo partner, stia celebrando un traguardo modesto o stia pianificando una ricognizione per una futura proposta di matrimonio — il **tour del Bosforo per coppie** Le regala 3 ore di serata insieme in una delle città più fotografate del mondo. 4,8★, pagamento a bordo, cancellazione gratuita."
    ],
    highlights: [
      { title: "Tavolo privato per due", desc: "Tavolo dedicato da 2 posti, non condiviso. Priorità ai posti vicino alla finestra per le coppie. Foto al tramonto e notturne del Bosforo appena fuori dal Vostro vetro." },
      { title: "Cena lenta a più portate", desc: "10 varietà di meze turchi, antipasto caldo, secondo (salmone, branzino, pollo, köfte o vegetariano), dolce con bomba gelato. Servito lentamente nell'arco di 3 ore — non Vi vengono messi fretta." },
      { title: "Violino dal vivo e musica leggera", desc: "Violino dal vivo e musica turca acustica durante la cena creano un'atmosfera intima adatta alla conversazione. Poi, il DJ prende il sopravvento per le coppie che vogliono ballare." },
      { title: "Extra per serate speciali", desc: "Allestimento romantico (candele, rose): +€{p.romantic}. Alcol locale illimitato (vino, rakı): +€{p.unlimited}/persona. Transfer hotel (andata-ritorno): +€{p.transfer}/persona. Scelga ciò che si addice alla Vostra serata." }
    ],
    faq: [
      { q: "Questo tour del Bosforo è adatto a una serata romantica casuale, non per un'occasione speciale?", a: "Sì — la maggior parte delle nostre coppie non sta festeggiando qualcosa in particolare, sta solo trascorrendo una bella serata insieme. L'atmosfera è calorosa e piacevole senza essere eccessiva. Può aggiungere un allestimento romantico (+€{p.romantic}) se desidera qualcosa in più, o godersi semplicemente la serata standard." },
      { q: "Quanto costa il tour del Bosforo per 2 persone?", a: "2 persone Standard: 2 × €{p.dinnerStd} = €48. 2 persone VIP: 2 × €{p.dinnerVip} = €110. Aggiunga il transfer hotel per due: +€{p.transfer}×2 = €20. Aggiunga l'alcol illimitato per due: +€{p.unlimited}×2 = €60. Nessun anticipo — pagamento a bordo." },
      { q: "Le coppie possono portare il proprio vino o champagne?", a: "Non permettiamo alcol esterno (per motivi di licenza). Ma abbiamo vino locale illimitato (+€{p.unlimited}/persona) e possiamo organizzare vini premium d'importazione o champagne con un supplemento — chieda alla prenotazione. Prosecco, Chianti e Cabernet sono richieste premium popolari." },
      { q: "Va bene se non beviamo — siamo fuori posto?", a: "Niente affatto — molte coppie saltano completamente l'alcol, per ragioni halal o semplicemente per preferenza. Le bevande analcoliche illimitate (acqua, succhi, cola) sono incluse. Se il Vostro tavolo è senza alcol nessuno se ne accorge. Molte coppie musulmane dall'Arabia Saudita, Iran e Indonesia prenotano questo tour." },
      { q: "Qual è il momento migliore per il tour del Bosforo per coppie — tramonto o notte?", a: "La notte (partenza alle 21:00) è la più iconica — ponti illuminati, riflessi sull'acqua, palazzi illuminati. Il tramonto (partenza alle 17:30) è più presto e ha la bellezza dell'ora dorata, ma la crociera con cena è specificamente alle 21:00. Se desidera entrambi, molte coppie prenotano i tour al tramonto e notturno in giorni diversi." },
      { q: "C'è una pista da ballo — possiamo ballare?", a: "Sì — dopo il servizio della cena (~22:30), il DJ parte e il ponte esterno diventa area ballo. Molte coppie ballano lentamente sotto le luci con il Ponte del Bosforo sullo sfondo. Alcune delle migliori foto che scatterete a Istanbul." }
    ],
    cta: {
      primary: "Prenota Serata Romantica · Pagamento a Bordo",
      secondary: "Aggiunga l'allestimento romantico (+€{p.romantic}) · Cancellazione gratuita 2 ore prima",
      tertiary: "Vedi Crociera Romantica sul Bosforo"
    }
  },

  "bosphorus-sunset-cruise": {
    meta: {
      title: "Crociera al Tramonto sul Bosforo — Ora Dorata e Cena | Istanbul",
      description: "Crociera al tramonto sul Bosforo a Istanbul. Imbarco alle 17:30, osservi Dolmabahçe e la Moschea di Ortaköy brillare nella luce dorata, cena mentre prosegue la notte illuminata. Tour di 3 ore, da €35/persona."
    },
    hero: {
      h1: "Crociera al Tramonto sul Bosforo",
      subtitle: "L'ora magica sul Bosforo — osservi il sole tramontare dietro le silhouette dei minareti mentre naviga oltre Dolmabahçe, la Moschea di Ortaköy e il Ponte del Bosforo che si accende per la notte.",
      badge: "Ora Dorata · Partenza alle 17:30 · Foto Migliori"
    },
    intro: [
      "La **crociera al tramonto sul Bosforo** cattura Istanbul al suo massimo fotogenico. Si imbarchi alle 17:30 e in 20 minuti il sole comincerà a calare dietro i minareti della sponda europea — dipingendo il Palazzo Dolmabahçe d'oro, trasformando l'acqua del Bosforo in rame e rendendo la Moschea di Ortaköy una silhouette contro il cielo acceso. Ogni foto con lo smartphone da questo tour sembra uno scatto professionale.",
      "La nostra **crociera al tramonto sul Bosforo** include una cena turca completa che inizia durante l'ora dorata e prosegue mentre i ponti si accendono per la notte. Quando arriva il dolce, state navigando sotto il Ponte del Bosforo illuminato — 30 milioni di luci riflesse sull'acqua scura. La transizione dal giorno alla notte, racchiusa in 3 ore, è tutto ciò di cui si tratta.",
      "Che sia un fotografo a caccia dell'ora dorata, un viaggiatore che desidera il meglio sia del giorno che della notte, o una coppia in cerca di \"quella foto di Istanbul\" — questa è la **crociera al tramonto con cena sul Bosforo** raccomandata ai visitatori. Valutazione 4,8★, autorizzato TÜRSAB, pagamento a bordo, nessun anticipo."
    ],
    highlights: [
      { title: "Ora dorata di picco — partenza alle 17:30", desc: "Imbarchi alle 17:30, il tramonto avviene intorno alle 18:30 in estate / 17:00 in inverno. I primi 40 minuti del tour sono l'ora dorata che sta inseguendo. Fotocamera pronta — questo è lo scatto." },
      { title: "Transizione giorno-notte inclusa", desc: "Non solo il tramonto — navighiamo nel crepuscolo, poi nel Bosforo illuminato. Vedrà 3 fasi di luce diverse in un solo tour: dorata, ora blu e notte pienamente illuminata." },
      { title: "Cena completa durante la crociera", desc: "10 varietà di meze turchi, antipasto caldo, secondo (salmone, branzino, pollo, köfte, vegetariano), dolce con bomba gelato. Stesso menu di qualità del tour notturno, servito durante il tramonto." },
      { title: "Dolmabahçe, Ortaköy, Ponte del Bosforo — tutto brilla", desc: "L'itinerario passa per il Palazzo Dolmabahçe (dorato al tramonto), la Moschea di Ortaköy (cupola in silhouette), il Ponte del Bosforo (che si accende), Rumeli Hisarı, il Palazzo Beylerbeyi. Ogni monumento nella sua luce migliore." }
    ],
    faq: [
      { q: "Quando parte la crociera al tramonto sul Bosforo?", a: "L'imbarco inizia alle 17:00, la barca parte alle 17:30, rientra intorno alle 20:30. Regoliamo l'orario perché il tramonto avvenga in acqua al momento esatto — varia leggermente con la stagione (18:30 in estate, 17:00 in inverno). Regoliamo la partenza di 15-30 minuti stagionalmente." },
      { q: "La crociera al tramonto sul Bosforo è uguale alla crociera con cena?", a: "Simile ma a orari diversi. Il tour al tramonto parte alle 17:30 con cena servita durante la crociera (ora dorata + sera presto). La crociera con cena è alle 21:00 — dopo il buio, vedute notturne pure. Stessa barca, stesso menu, stesso intrattenimento — solo illuminazione diversa. Alcuni ospiti fanno entrambi in giorni diversi." },
      { q: "Qual è il prezzo della crociera al tramonto sul Bosforo?", a: "Tour al tramonto Standard da €35/persona (3 ore, cena completa, intrattenimento dal vivo). Opzione VIP con posti vicino al palco e meze premium €55/persona. Pagamento a bordo — nessun anticipo. 0-3 anni gratis, 4-8 anni metà prezzo." },
      { q: "Il tour al tramonto è meglio della crociera con cena (notturna)?", a: "\"Meglio\" dipende da cosa vuole. Tramonto = foto migliori, luce dorata, ritmo più lento, sera più presto. Notte = luci più iconiche (ponti illuminati), intrattenimento migliore, cena più tardi. I fotografi scelgono il tramonto. Le coppie in serata romantica scelgono la notte. Le famiglie con bambini spesso scelgono il tramonto (finisce prima)." },
      { q: "Cosa devo portare al tour al tramonto?", a: "Smartphone o fotocamera per le foto (l'ora dorata lo implora). Giacca leggera — il vento aumenta al tramonto e il ponte può raffreddarsi rapidamente nella sera presto. Occhiali da sole per i primi 30 minuti. Abbigliamento smart-casual — sta cenando, ma non c'è un dress code rigido." },
      { q: "Posso restare sul tour per vedere i ponti illuminati di notte?", a: "Il tour al tramonto dura 3 ore (17:30-20:30), quindi alla fine vede il Ponte del Bosforo completamente illuminato e la Torre della Fanciulla accesa. Se desidera le vedute notturne di PICCO (21:00-00:00, tutti i ristoranti e monumenti pienamente illuminati), prenoti la crociera con cena delle 21:00. Il meglio dei due: prenoti entrambi in serate diverse." }
    ],
    cta: {
      primary: "Prenota Tour al Tramonto · Pagamento a Bordo",
      secondary: "Partenza alle 17:30 · Tramonto + cena inclusi · Cancellazione gratuita 2 ore prima",
      tertiary: "Vedi Crociera con Cena Notturna (21:00)"
    }
  },

  "bosphorus-night-tour": {
    meta: {
      title: "Tour Notturno sul Bosforo — Crociera con Cena nella Istanbul Illuminata",
      description: "Tour notturno sul Bosforo con cena e spettacolo dal vivo. Partenza alle 21:00, ponti illuminati, folklore turco, 3 ore sull'acqua. Da €{p.dinnerStd}/persona — pagamento a bordo."
    },
    hero: {
      h1: "Tour Notturno sul Bosforo",
      subtitle: "I ponti illuminati di Istanbul, i palazzi accesi e l'acqua del Bosforo come specchio che riflette 30 milioni di luci — il tour notturno che definisce una serata a Istanbul.",
      badge: "Ponti Illuminati · Spettacolo dal Vivo · Cena Inclusa"
    },
    intro: [
      "Il **tour notturno sul Bosforo** è l'attività serale più raccomandata a Istanbul. Il motivo: dopo il tramonto il Bosforo si trasforma. Il Ponte del Bosforo passa dal blu al viola all'oro. Il Palazzo Dolmabahçe brilla di giallo caldo. La Moschea di Ortaköy si riflette perfettamente nell'acqua nera. Ogni monumento di Istanbul raggiunge la sua massima spettacolarità di notte.",
      "La nostra **crociera con cena notturna sul Bosforo** racchiude la serata iconica al completo: 3 ore sull'acqua (21:00-00:00), banchetto turco a più portate, folklore dal vivo (Sema, 5 danze folkloristiche, danza orientale), musica dal vivo e un set DJ che anima il ponte fino alla fine della serata. Ogni ospite riceve lo stesso programma — non esiste un'opzione \"base\" che salta le parti migliori.",
      "Che sia il Suo primo viaggio a Istanbul e stia cercando \"l'unica cosa da fare di sera\", o sia già stato qui e voglia le 3 ore più fotogeniche in città, questo è il **tour notturno sul Bosforo** valutato 4,8★ da 11.317+ viaggiatori. Autorizzato TÜRSAB, pagamento a bordo, nessun anticipo."
    ],
    highlights: [
      { title: "Bosforo illuminato al massimo della spettacolarità", desc: "Il Ponte del Bosforo cambia colore (blu, viola, oro), i palazzi brillano di giallo, la Moschea di Ortaköy si riflette nell'acqua nera. 21:00-00:00 è l'illuminazione di picco per tutti i monumenti di Istanbul." },
      { title: "Spettacolo turco tradizionale a bordo", desc: "Cerimonia Sema, 5 danze folkloristiche tradizionali (da regioni diverse della Turchia), danza orientale, musica turca dal vivo, poi set DJ. 40 minuti di esibizioni, poi musica + cena proseguono." },
      { title: "Cena completa a più portate", desc: "10 varietà di meze turchi, antipasto caldo (paçanga böreği), secondo (salmone, branzino, pollo, köfte, vegetariano — a scelta), dolce (bomba gelato), bevande analcoliche illimitate. Certificato halal." },
      { title: "Itinerario completo del Bosforo", desc: "Kabataş → Dolmabahçe → Palazzo di Çırağan → Moschea di Ortaköy → Bebek → Rumeli Hisarı → Ponte Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Torre della Fanciulla → Kabataş." }
    ],
    faq: [
      { q: "Quando è il tour notturno sul Bosforo?", a: "Imbarco dalle 20:00 al molo di Kabataş. La barca parte alle 21:00, rientra intorno alle 00:00 (mezzanotte). Raccomandiamo di arrivare 20 minuti prima per sistemarsi e scegliere il posto." },
      { q: "Quanto costa il tour notturno sul Bosforo?", a: "Tour notturno Standard (3 ore, cena, spettacolo): €{p.dinnerStd}/persona (prima €{p.dinnerStdOriginal}). VIP con posti vicino al palco e menu premium: €{p.dinnerVip}/persona (prima €{p.dinnerVipOriginal}). 0-3 anni gratis, 4-8 anni metà prezzo. Pagamento a bordo." },
      { q: "Qual è la differenza tra tour notturno sul Bosforo e crociera con cena?", a: "Stessa cosa, parola chiave diversa. \"Tour notturno sul Bosforo\" è come molti viaggiatori lo cercano; \"crociera con cena\" è il termine del settore. Stessa barca, stesso programma di 3 ore, stesso menu, stesso spettacolo. Scelga qualsiasi termine di ricerca preferisca — l'esperienza è la stessa." },
      { q: "Tour notturno sul Bosforo o crociera al tramonto — quale vale di più?", a: "Tour notturno = Istanbul illuminata, drammaticità di luce al massimo, programma di intrattenimento completo, le foto più iconiche dei ponti illuminati. Tramonto = ora dorata, ritmo più lento, finisce alle 20:30. Se ne fa solo uno: il tour notturno è più iconico. Molti fanno entrambi in giorni diversi." },
      { q: "Posso fare il tour notturno sul Bosforo il mio primo giorno a Istanbul?", a: "Sì — lo raccomandiamo. Molti viaggiatori prenotano il tour notturno per la loro prima serata perché offre un orientamento completo: tutti i grandi monumenti dall'acqua, con buona cena e intrattenimento. Più facile del jet lag rispetto a cercare di visitare il giorno 1. Transfer hotel disponibili dalle aree centrali." },
      { q: "Non parlo turco — il tour è in inglese?", a: "L'equipaggio parla inglese. L'intrattenimento (Sema, folklore, musica) non richiede lingua. Il menu della cena è in inglese. La prenotazione via WhatsApp / Telegram / WeChat funziona in più lingue (inglese, arabo, russo, tedesco, francese, spagnolo). Non serve turco." }
    ],
    cta: {
      primary: "Prenota Tour Notturno · Pagamento a Bordo",
      secondary: "Partenza alle 21:00 · 3 ore · Cena + spettacolo inclusi · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  },

  "dinner-cruise-istanbul": {
    meta: {
      title: "Crociera con Cena Istanbul — Tour Notturno Premium sul Bosforo, da €{p.dinnerStd}",
      description: "La crociera con cena sul Bosforo più apprezzata di Istanbul. Serata di 3 ore, banchetto turco, folklore dal vivo, ponti illuminati. Autorizzato TÜRSAB, pagamento a bordo, nessun anticipo."
    },
    hero: {
      h1: "Crociera con Cena Istanbul",
      subtitle: "La migliore crociera con cena di Istanbul — 3 ore sul Bosforo, sontuoso banchetto turco a più portate, intrattenimento dal vivo e vedute notturne dei monumenti più iconici della città.",
      badge: "4,8★ · 11.317 recensioni · TÜRSAB A-17672"
    },
    intro: [
      "Cerca una **crociera con cena a Istanbul**? Ha trovato quella che la maggior parte dei viaggiatori raccomanda. La nostra serata di 3 ore sul Bosforo combina un sontuoso banchetto turco a più portate, folklore dal vivo e le vedute più fotogeniche della città — il tutto da una barca confortevole che parte alle 21:00 dal molo di Kabataş.",
      "L'esperienza della **crociera con cena a Istanbul**: imbarchi alle 20:00, si accomodi, osservi il Palazzo Dolmabahçe passare mentre salpiamo, la cena inizia mentre ci avviciniamo alla Moschea di Ortaköy, lo spettacolo comincia (Sema, folklore, orientale), e quando arriva il dolce si trova sotto il Ponte del Bosforo illuminato. Torna a Kabataş entro mezzanotte con un collage fotografico iconico e lo stomaco pieno.",
      "€{p.dinnerStd}/persona per il tour Standard (prima €{p.dinnerStdOriginal}) o €{p.dinnerVip}/persona per il VIP con posti vicino al palco (prima €{p.dinnerVipOriginal}). Pagamento a bordo — nessun anticipo, nessun rischio. Autorizzato TÜRSAB A-17672, valutato 4,8★ da oltre 11.317 viaggiatori."
    ],
    highlights: [
      { title: "Cena turca completa a più portate", desc: "10 varietà di meze, antipasto caldo, secondo (salmone/branzino/pollo/köfte/vegetariano), dolce con bomba gelato. Certificato halal. Bevande analcoliche illimitate incluse." },
      { title: "Spettacolo di folklore turco dal vivo", desc: "Cerimonia Sema, 5 danze folkloristiche tradizionali, danza orientale, musica turca dal vivo, DJ. 40 minuti di esibizioni, la musica d'atmosfera prosegue." },
      { title: "Itinerario notturno completo del Bosforo", desc: "Tour di 3 ore: Dolmabahçe, Çırağan, Moschea di Ortaköy, Ponte del Bosforo, Bebek, Rumeli Hisarı, Ponte FSM, Beylerbeyi, Üsküdar, Torre della Fanciulla. Sia sponda europea che asiatica." },
      { title: "Da €{p.dinnerStd} — pagamento a bordo", desc: "Standard: €{p.dinnerStd} (prima €{p.dinnerStdOriginal}). VIP con menu premium: €{p.dinnerVip} (prima €{p.dinnerVipOriginal}). Nessun anticipo. Cancellazione gratuita fino a 2 ore prima della partenza." }
    ],
    faq: [
      { q: "Quanto costa una crociera con cena a Istanbul?", a: "La nostra crociera con cena Standard costa €{p.dinnerStd}/persona (prezzo pieno €{p.dinnerStdOriginal}). Il VIP con posti vicino al palco e menu premium costa €{p.dinnerVip}/persona (prezzo pieno €{p.dinnerVipOriginal}). 0-3 anni gratis, 4-8 anni al 50%. Pagamento a bordo — nessun anticipo." },
      { q: "Cosa è incluso nel prezzo della crociera con cena a Istanbul?", a: "Tour di 3 ore sul Bosforo, cena turca a più portate (meze, antipasto caldo, secondo, dolce), bevande analcoliche illimitate, spettacolo di folklore dal vivo (Sema, folklore, orientale), musica dal vivo + DJ, accesso al ponte esterno, tasse incluse. Transfer hotel e alcol sono extra opzionali." },
      { q: "Da dove parte la crociera con cena a Istanbul?", a: "Molo di Kabataş, Istanbul — sul lato europeo, accanto al Palazzo Dolmabahçe. Il luogo esatto dell'incontro viene condiviso via WhatsApp / Telegram / WeChat dopo la prenotazione. I video delle indicazioni a piedi dalla fermata del tram Dolmabahçe e dalla stazione del tram Kabataş sono nella sezione del punto d'incontro sopra." },
      { q: "Quanto dura la crociera con cena — e quando inizia?", a: "3 ore totali. Imbarco dalle 20:00, la barca parte puntuale alle 21:00, rientra intorno alle 00:00 (mezzanotte). Raccomandiamo di arrivare 15-20 minuti prima per sistemarsi e scegliere il posto." },
      { q: "Devo prenotare in anticipo, o posso presentarmi e basta?", a: "Prenoti in anticipo — i posti si riempiono, specialmente nei weekend e nei festivi. La prenotazione nello stesso giorno è spesso possibile ma non garantita. La procedura guidata su questa pagina Le riserva un posto in meno di 1 minuto. Pagamento a bordo, quindi prenotare in anticipo non comporta alcun rischio finanziario." },
      { q: "La crociera con cena a Istanbul è adatta a vegetariani / halal / restrizioni dietetiche?", a: "Sì — tutta la carne è certificata halal. Secondo vegetariano (falafel, patate arrosto, pilaf di bulgur, stufato di verdure, anelli di cipolla) disponibile senza supplemento. Le allergie possono essere gestite se segnalate alla prenotazione. L'alcol è un extra opzionale, mai imposto." }
    ],
    cta: {
      primary: "Prenota Crociera con Cena · Pagamento a Bordo",
      secondary: "4,8★ · Autorizzato TÜRSAB · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  },

  "istanbul-night-tour": {
    meta: {
      title: "Tour Notturno di Istanbul — La Migliore Esperienza Serale sul Bosforo",
      description: "Il tour notturno più apprezzato di Istanbul: tour di 3 ore sul Bosforo con cena, folklore dal vivo e ponti illuminati. 4,8★, autorizzato TÜRSAB, pagamento a bordo. Una serata a Istanbul ben definita."
    },
    hero: {
      h1: "Tour Notturno di Istanbul",
      subtitle: "Il tour notturno che gli abitanti di Istanbul raccomandano per primo — un tour di 3 ore sul Bosforo con cena, intrattenimento dal vivo e le vedute illuminate più iconiche della città.",
      badge: "Serata Iconica a Istanbul · 3 Ore · Cena Inclusa"
    },
    intro: [
      "Un **tour notturno di Istanbul** deve fare tre cose: mostrarLe le viste iconiche della città, nutrirLa bene e intrattenerLa. La nostra crociera con cena sul Bosforo fa tutte e tre in un'unica serata di 3 ore — ed è il motivo per cui la maggior parte delle guide di Istanbul la raccomanda come esperienza di tour notturno #1.",
      "L'itinerario del **tour notturno di Istanbul** copre i monumenti illuminati migliori: Palazzo Dolmabahçe, Moschea di Ortaköy, Ponte del Bosforo (cambia colore), quartiere di Bebek, Rumeli Hisarı, Ponte FSM, Palazzo Beylerbeyi, la costa asiatica di Üsküdar e la Torre della Fanciulla in lontananza. La maggior parte dei city tour li mostra dall'autobus — noi li mostriamo dall'acqua, da dove sono più drammatici.",
      "Cena inclusa (menu turco a più portate), spettacolo di folklore turco dal vivo, Sema, danza orientale e set DJ. Se è a Istanbul per 2-3 giorni, questa è l'unica serata che offre di più. 4,8★ da 11.317+ viaggiatori, pagamento a bordo, nessun anticipo."
    ],
    highlights: [
      { title: "Tutte le viste notturne iconiche di Istanbul", desc: "Palazzo Dolmabahçe, Moschea di Ortaköy, Ponte del Bosforo illuminato, Rumeli Hisarı, Ponte FSM, Palazzo Beylerbeyi, Torre della Fanciulla. Ogni grande monumento nella sua massima illuminazione notturna." },
      { title: "Cena turca completa inclusa", desc: "10 meze, antipasto caldo, secondo (salmone/branzino/pollo/köfte/vegetariano), dolce, bevande analcoliche illimitate. Certificato halal. Prezzo a €{p.dinnerStd}/persona — tutto incluso." },
      { title: "Folklore dal vivo + Sema + orientale", desc: "Intrattenimento turco tradizionale: cerimonia Sema Mevlana, 5 danze folkloristiche regionali, danza orientale, musica dal vivo, DJ. 40 minuti di esibizioni, musica d'atmosfera per tutta la serata." },
      { title: "Facile per chi arriva a Istanbul per la prima volta", desc: "Punto d'incontro centrale (molo di Kabataş), transfer hotel (+€{p.transfer}/persona), equipaggio anglofono, pagamento a bordo. Zero stress logistico. Arrivi, si goda la serata, vada." }
    ],
    faq: [
      { q: "Qual è il miglior tour notturno a Istanbul?", a: "La crociera con cena sul Bosforo è costantemente classificata #1. Motivi: (1) offre tutte le vedute notturne iconiche dall'acqua, (2) include cena e spettacolo in un unico pacchetto, (3) 3 ore sono sufficienti per vedere molto senza stancarsi, (4) punto d'incontro centrale, (5) il pagamento a bordo riduce l'attrito della prenotazione. La maggior parte delle guide di viaggio di Istanbul la raccomanda come \"l'unica cosa da fare di sera\"." },
      { q: "Quanto costa un tour notturno di Istanbul?", a: "La nostra crociera con cena notturna sul Bosforo: Standard €{p.dinnerStd}/persona, VIP €{p.dinnerVip}/persona. Include tour, cena, intrattenimento, bevande analcoliche. Opzionali: alcol +€{p.unlimited}/persona, transfer hotel +€{p.transfer}/persona. Pagamento a bordo — nessun anticipo." },
      { q: "Il tour notturno di Istanbul è sicuro per i viaggiatori solitari?", a: "Sì — molto sicuro. Barca autorizzata TÜRSAB, equipaggio professionale anglofono, CCTV a bordo, giubbotti di salvataggio disponibili. Molti viaggiatori solitari prenotano questo tour. Cena a un tavolo condiviso o privato (a Sua scelta), e la serata è inclusiva — può conoscere altri viaggiatori se vuole, o restare per conto Suo." },
      { q: "Qual è il momento migliore per un tour notturno a Istanbul?", a: "La nostra crociera con cena sul Bosforo è dalle 21:00 alle 00:00 (3 ore). Questo è l'orario di illuminazione di picco per tutti i monumenti di Istanbul — ponti pienamente illuminati, palazzi brillanti, luna sull'acqua. Se preferisce qualcosa prima (ora dorata), consideri invece la crociera al tramonto delle 17:30." },
      { q: "Come arrivo al punto d'incontro del tour notturno di Istanbul?", a: "Il punto d'incontro è il molo di Kabataş (lato europeo centrale, accanto al Palazzo Dolmabahçe). Con il tram: T1 fino alla stazione Kabataş (capolinea). In taxi: ~15 min da Taksim. A piedi: 20 min in discesa da Taksim lungo Viale İnönü. Su questa pagina ci sono video delle indicazioni a piedi. Transfer hotel disponibile a +€{p.transfer}/persona se preferisce." },
      { q: "Posso prenotare un tour notturno di Istanbul nello stesso giorno?", a: "Spesso sì, specialmente nei giorni feriali. I weekend si riempiono più rapidamente. La procedura guidata di prenotazione su questa pagina Le permette di verificare la disponibilità per stasera e prenotare in meno di 1 minuto. Per richieste urgenti nello stesso giorno, ci scriva su WhatsApp al +90 532 244 29 22." }
    ],
    cta: {
      primary: "Prenota Tour Notturno · Pagamento a Bordo",
      secondary: "Da €{p.dinnerStd}/persona · Cena + spettacolo inclusi · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  },

  "istanbul-boat-tour": {
    meta: {
      title: "Tour in Barca a Istanbul — Crociera sul Bosforo con Cena e Spettacolo",
      description: "Il miglior tour in barca a Istanbul: tour di 3 ore sul Bosforo con cena completa, folklore dal vivo e vedute notturne illuminate. Da €{p.dinnerStd}/persona, pagamento a bordo, valutazione 4,8★."
    },
    hero: {
      h1: "Tour in Barca a Istanbul",
      subtitle: "Il tour in barca di Istanbul più prenotato dai viaggiatori — un tour sul Bosforo con cena turca, intrattenimento dal vivo e le viste iconiche della città dall'acqua.",
      badge: "4,8★ · TÜRSAB A-17672 · Pagamento a Bordo"
    },
    intro: [
      "Quando cerca \"tour in barca a Istanbul\", sta cercando l'unica cosa che definisce la città dall'acqua: il Bosforo. Il nostro tour in barca di 3 ore sul Bosforo La porta oltre ogni grande monumento di Istanbul — Palazzo Dolmabahçe, Moschea di Ortaköy, Ponte del Bosforo, Rumeli Hisarı, Palazzo Beylerbeyi e Torre della Fanciulla — con una cena turca completa e intrattenimento dal vivo.",
      "A differenza dei numerosi traghetti turistici di 1 ora che coprono meno Bosforo e saltano cena e intrattenimento, il nostro **tour in barca a Istanbul** è l'esperienza serale completa: imbarco alle 20:00 al molo di Kabataş, tour fino a mezzanotte, 10 meze, secondo, dolce, Sema, folklore, danza orientale e DJ. Riceve il tour E anche la serata fuori.",
      "Se ha una notte a Istanbul o una settimana intera, questo **tour in barca a Istanbul** fa il lavoro. 4,8★ da 11.317+ viaggiatori, autorizzato TÜRSAB (A-17672), menu certificato halal e pagamento a bordo — nessun impegno finanziario finché non è soddisfatto dell'esperienza."
    ],
    highlights: [
      { title: "Tutti i grandi monumenti del Bosforo", desc: "Dolmabahçe, Çırağan, Moschea di Ortaköy, Ponte del Bosforo, Bebek, Rumeli Hisarı, Ponte FSM, Palazzo Beylerbeyi, Üsküdar, Torre della Fanciulla. Sia sponda europea che asiatica in un solo tour." },
      { title: "Cena + spettacolo inclusi", desc: "Non solo un tour in barca — cena turca completa a più portate, esibizioni di folklore dal vivo, Sema, danza orientale, DJ. Ciò che rende le 3 ore divertenti, non solo turistiche." },
      { title: "Partenza serale (illuminazione migliore)", desc: "La partenza delle 21:00 cattura il Bosforo illuminato al massimo splendore — ponti, palazzi, moschee tutti accesi. Più drammatico dei tour diurni che mostrano gli stessi monumenti in luce piatta." },
      { title: "Prenotazione facile, pagamento facile", desc: "Prenoti in meno di 1 minuto con la procedura guidata su questa pagina. Pagamento a bordo — nessun anticipo. Transfer hotel disponibile da +€{p.transfer}/persona. Cancellazione gratuita 2 ore prima della partenza." }
    ],
    faq: [
      { q: "Qual è il miglior tour in barca a Istanbul?", a: "La crociera con cena sul Bosforo è costantemente classificata #1. Copre tutti i grandi monumenti, include cena e intrattenimento, e opera in serata quando i monumenti sono illuminati. Altre opzioni (traghetti hop-on, barche turistiche mattutine) coprono itinerari più brevi, saltano la cena e non includono intrattenimento. Per una serata a Istanbul, è il tour in barca più completo." },
      { q: "Quanto dura un tour in barca a Istanbul?", a: "3 ore. Imbarco dalle 20:00 al molo di Kabataş, partenza alle 21:00, rientro ~00:00. Copre l'intero Bosforo da Dolmabahçe a Rumeli Hisarı e ritorno. Tempo sufficiente per cena completa + spettacolo senza affaticarsi." },
      { q: "Quanto costa un tour in barca a Istanbul?", a: "Il nostro tour in barca con cena: Standard €{p.dinnerStd}/persona (prima €{p.dinnerStdOriginal}), VIP con menu premium €{p.dinnerVip}/persona (prima €{p.dinnerVipOriginal}). 0-3 anni gratis, 4-8 anni metà prezzo. Pagamento a bordo. Alcol e transfer hotel sono extra opzionali." },
      { q: "Da dove partono i tour in barca a Istanbul?", a: "La nostra barca parte dal molo di Kabataş, lato europeo centrale di Istanbul, accanto al Palazzo Dolmabahçe. Accessibile con il tram T1 (stazione Kabataş), 15 min di taxi da Taksim o 20 min a piedi da Taksim. Transfer hotel disponibile a +€{p.transfer}/persona dalle aree centrali." },
      { q: "Questo tour in barca è adatto alle famiglie con bambini?", a: "Sì — molto a misura di famiglia. Bambini 0-3 anni gratis, 4-8 anni 50% di sconto. Area interna al coperto, menu per bambini su richiesta e intrattenimento (Sema, folklore) coinvolgente per i bambini. Molte famiglie da tutto il mondo prenotano questo tour." },
      { q: "Devo portare qualcosa per il tour in barca?", a: "Passaporto o carta d'identità (per la registrazione a bordo), giacca leggera (il ponte può essere fresco), scarpe comode se prevede di ballare. Smartphone per le foto. Contanti o carta per il pagamento a bordo (entrambi accettati). Tutto il resto — cena, bevande, intrattenimento — è a bordo." }
    ],
    cta: {
      primary: "Prenota Tour in Barca · Pagamento a Bordo",
      secondary: "3 ore · Cena + spettacolo · Da €{p.dinnerStd}/persona · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  },

  "bosphorus-trip": {
    meta: {
      title: "Gita sul Bosforo — Esperienza di Tour Premium a Istanbul, da €{p.dinnerStd}",
      description: "Pianifichi la Sua gita sul Bosforo: crociera con cena di 3 ore con banchetto turco, spettacolo di folklore dal vivo, vedute notturne illuminate. Valutazione 4,8★, pagamento a bordo, 12 aree di servizio per il transfer."
    },
    hero: {
      h1: "Gita sul Bosforo",
      subtitle: "La gita sul Bosforo più raccomandata dai viaggiatori — una crociera con cena di 3 ore che copre ogni grande monumento di Istanbul, con cena, intrattenimento e vedute notturne.",
      badge: "Esperienza Completa del Bosforo · Partenza Serale"
    },
    intro: [
      "Una **gita sul Bosforo** può significare un traghetto turistico di 1 ora o un'intera serata con cena — noi facciamo la seconda, e la maggior parte dei viaggiatori la trova di miglior valore. 3 ore, €{p.dinnerStd}/persona, cena e intrattenimento inclusi. Non passa solo oltre i monumenti — mangia, guarda uno spettacolo e si gode la serata.",
      "L'itinerario della nostra **gita sul Bosforo** copre tutto ciò che vale la pena vedere: Palazzo Dolmabahçe (residenza del Sultano ottomano del XIX secolo), Moschea di Ortaköy (una delle moschee più fotografate di Istanbul), Ponte del Bosforo (cambia colore di notte), Rumeli Hisarı (costruito nel 1452 da Fatih Sultan Mehmet), Palazzo Beylerbeyi (lato asiatico) e la Torre della Fanciulla su un'isoletta. Tutto spiegato dall'equipaggio anglofono.",
      "Se è a Istanbul per 24 ore o una settimana, questa è la **gita sul Bosforo** che Le offre il massimo in una serata. Valutazione 4,8★ da oltre 11.317 viaggiatori, autorizzato TÜRSAB A-17672, menu halal-friendly, pagamento a bordo — nessun rischio di anticipo."
    ],
    highlights: [
      { title: "Bosforo completo in un'unica gita", desc: "Sponda europea (Dolmabahçe, Ortaköy, Rumeli Hisarı), sponda asiatica (Beylerbeyi, Üsküdar), entrambi i ponti del Bosforo, Torre della Fanciulla. Ogni grande monumento visibile in 3 ore." },
      { title: "Cena + intrattenimento inclusi", desc: "Non solo un traghetto turistico — cena turca completa con meze, secondo, dolce. Spettacolo di folklore dal vivo, Sema, orientale, DJ. Valore di intrattenimento oltre la sola vista." },
      { title: "Sera = illuminazione migliore", desc: "Le gite diurne sul Bosforo mostrano i monumenti in luce piatta. Le gite serali catturano tutto illuminato: palazzi brillanti, ponti colorati, moschee riflesse nell'acqua scura. Foto migliori, più drammatico." },
      { title: "Da €{p.dinnerStd} — pagamento a bordo", desc: "Nessun anticipo richiesto. Pagamento a bordo (contanti o carta). Cancellazione gratuita fino a 2 ore prima della partenza. 0-3 anni gratis, 4-8 anni metà prezzo. Prezzi trasparenti." }
    ],
    faq: [
      { q: "Quali sono le migliori gite sul Bosforo a Istanbul?", a: "La crociera con cena serale è costantemente in cima. Le opzioni diurne (traghetti di linea di 1 ora, barche turistiche di 2 ore) mostrano meno e non includono cena. Per il valore, è difficile battere un tour di 3 ore con cena, spettacolo e punto di ritorno centrale. Il costo di €{p.dinnerStd} del nostro tour elimina la necessità di una serata separata per cena + intrattenimento." },
      { q: "Quanto dura una gita sul Bosforo?", a: "La nostra gita sul Bosforo dura 3 ore totali (partenza alle 21:00, rientro alle 00:00). Ci sono opzioni più brevi (traghetti turistici di 1 ora, tour di 90 minuti) ma saltano cena e intrattenimento. Per l'esperienza serale completa, 3 ore sono ideali — abbastanza per vedere tutto senza stancarsi." },
      { q: "Vale la pena fare una gita sul Bosforo?", a: "Sì — quasi ogni guida di viaggio di Istanbul elenca un \"tour sul Bosforo\" tra i primi 5 must-do. La città è stata costruita attorno a questo stretto; se non ha visto il Bosforo dall'acqua, non ha realmente visto Istanbul. Il nostro tour serale specifico aggiunge cena e intrattenimento, trasformandolo in una serata fuori completa piuttosto che solo turismo." },
      { q: "Cosa devo portare per una gita sul Bosforo?", a: "Passaporto o carta d'identità (per la registrazione a bordo), giacca leggera (le serate possono essere fresche sul ponte), smartphone/fotocamera, scarpe comode per la pista da ballo. Contanti o carta per il pagamento. Tutto il resto è a bordo. Transfer hotel disponibile a +€{p.transfer}/persona se non vuole usare i mezzi pubblici." },
      { q: "La gita sul Bosforo è adatta ai bambini?", a: "Sì — molto a misura di bambini. Bambini 0-3 anni gratis (transfer incluso), 4-8 anni 50% di sconto. Area interna al coperto, menu per bambini su richiesta e intrattenimento delicato e coinvolgente. Molte famiglie prenotano questo come momento clou del loro viaggio a Istanbul." },
      { q: "Quali sono le fermate della gita sul Bosforo?", a: "È un tour continuo — non ci fermiamo ai monumenti (nessuna discesa). La barca passa vicino a ogni monumento, l'equipaggio spiega cosa sta vedendo, Lei resta comodo al Suo tavolo o si sposta sul ponte esterno per le foto. Niente code, niente camminate — solo 3 ore senza interruzioni sull'acqua." }
    ],
    cta: {
      primary: "Prenota Gita sul Bosforo · Pagamento a Bordo",
      secondary: "3 ore · Cena + spettacolo · Cancellazione gratuita 2 ore prima · Autorizzato TÜRSAB",
      tertiary: "Verifica Disponibilità"
    }
  },

  "bosphorus-cruise-tickets": {
    meta: {
      title: "Biglietti Crociera sul Bosforo — Prenotazione Diretta, da €{p.dinnerStd} Pagamento a Bordo",
      description: "Acquisti i biglietti per la crociera sul Bosforo direttamente. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Nessun anticipo, pagamento a bordo. Cancellazione gratuita 2 ore prima. Valutazione 4,8★, TÜRSAB A-17672."
    },
    hero: {
      h1: "Biglietti Crociera sul Bosforo",
      subtitle: "Salti le commissioni degli intermediari — acquisti i biglietti per la crociera sul Bosforo direttamente da noi. Nessun anticipo, pagamento a bordo, cancellazione gratuita fino a 2 ore prima della partenza.",
      badge: "Prenotazione Diretta · Nessun Anticipo · 40% DI SCONTO"
    },
    intro: [
      "Cerca **biglietti per la crociera sul Bosforo**? Li prenda direttamente. I nostri biglietti costano €{p.dinnerStd} (Standard) o €{p.dinnerVip} (VIP) — 40% di sconto sul prezzo pieno (€{p.dinnerStdOriginal} e €{p.dinnerVipOriginal}). I siti di prenotazione di terze parti tipicamente aggiungono 20-40% di commissione. Prenotando direttamente Lei risparmia — e può comunque pagare a bordo.",
      "Il nostro processo per i **biglietti della crociera sul Bosforo**: compili la procedura guidata su questa pagina in meno di 1 minuto (data, numero di ospiti, pacchetto, contatti), confermiamo immediatamente via WhatsApp / Telegram / WeChat, si presenta al molo di Kabataş alle 20:00, paga a bordo, si gode la crociera con cena di 3 ore. Nessun biglietto fisico da stampare, nessun voucher da inviare via email — la nostra conferma è il Suo biglietto.",
      "Che stia prenotando la crociera con cena di stasera o riservando una data specifica per la prossima settimana, i **biglietti per la crociera sul Bosforo diretti** sono il modo più veloce. Valutazione 4,8★, autorizzato TÜRSAB (A-17672), menu certificato halal e supporto per extra transfer hotel e alcol."
    ],
    highlights: [
      { title: "Prenotazione diretta — nessuna commissione intermediaria", desc: "€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. I siti di terze parti addebitano €30-80+ per lo stesso tour. Risparmia prenotando direttamente con noi. Nessun costo nascosto, nessuna maggiorazione di commissione." },
      { title: "Pagamento a bordo — nessun anticipo", desc: "Riservi il Suo posto ora, paghi quando sale a bordo. Contanti o carta accettati. Gratis se cancella 2+ ore prima della partenza. Zero rischio finanziario nel riservare in anticipo." },
      { title: "Conferma in meno di 1 minuto", desc: "Compili la procedura guidata → confermiamo via WhatsApp / Telegram / WeChat. Nessun voucher PDF da aspettare via email. Il nostro messaggio è il Suo biglietto. Si presenti al molo alle 20:00." },
      { title: "40% DI SCONTO prezzo di lancio attuale", desc: "Standard prima €{p.dinnerStdOriginal}, ora €{p.dinnerStd}. VIP prima €{p.dinnerVipOriginal}, ora €{p.dinnerVip}. 40% di sconto perché sta prenotando direttamente. Non è un numero a tempo — è la nostra tariffa standard per prenotazione diretta." }
    ],
    faq: [
      { q: "Quanto costano i biglietti per la crociera sul Bosforo?", a: "Standard: €{p.dinnerStd}/persona (prezzo pieno €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/persona (prezzo pieno €{p.dinnerVipOriginal}). Include tour di 3 ore, cena turca a più portate, spettacolo di folklore dal vivo, bevande analcoliche illimitate. 0-3 anni gratis, 4-8 anni 50% di sconto. Pagamento a bordo — nessun anticipo." },
      { q: "Dove posso acquistare i biglietti per la crociera sul Bosforo?", a: "Direttamente su questa pagina — compili la procedura guidata di prenotazione, confermiamo immediatamente via WhatsApp / Telegram / WeChat. Pagamento a bordo. Anche piattaforme di terze parti (Viator, GetYourGuide, Klook) vendono biglietti ma addebitano tipicamente €30-80+ — questa è la maggiorazione dell'intermediario. Diretto è il più economico e veloce." },
      { q: "Devo stampare il biglietto della crociera sul Bosforo?", a: "No — nessun biglietto fisico o voucher richiesto. Dopo la prenotazione, Le inviamo una conferma via WhatsApp (o Telegram/WeChat) con punto d'incontro, orario e nome della prenotazione. Mostri semplicemente il Suo telefono al molo. Tutto qui." },
      { q: "Posso cancellare o rimborsare il biglietto della crociera sul Bosforo?", a: "Sì — cancellazione gratuita fino a 2 ore prima della partenza. Basta che ci scriva su WhatsApp. Poiché non ha ancora pagato (pagamento a bordo), nessun rimborso è necessario — semplicemente non si presenta, nessun addebito. Molto più flessibile dei biglietti prepagati di terze parti." },
      { q: "I biglietti per la crociera sul Bosforo sono disponibili nello stesso giorno?", a: "Spesso sì, specialmente nei giorni feriali. Weekend e festivi si riempiono più rapidamente. Verifichi la disponibilità tramite la procedura guidata — si aggiorna in tempo reale. La prenotazione nello stesso giorno è di solito possibile fino a poche ore prima della partenza delle 21:00. Per richieste urgenti, WhatsApp." },
      { q: "I biglietti per bambini della crociera sul Bosforo sono gratis?", a: "I bambini **0-3 anni sono completamente gratis** (nessun costo, nessuna tariffa nascosta, transfer incluso). **4-8 anni 50% di sconto** (€{p.dinnerStd}/2 = €12 su Standard). **9+ anni prezzo adulto intero.** Prezzi con massimale e trasparenti — nessun trucco del \"supplemento neonato\"." }
    ],
    cta: {
      primary: "Acquista Biglietti · Pagamento a Bordo",
      secondary: "Prenotazione diretta · Nessun anticipo · Cancellazione gratuita 2 ore prima",
      tertiary: "Verifica Disponibilità"
    }
  },

  "last-minute-bosphorus": {
    meta: {
      title: "Crociera sul Bosforo Last Minute — Prenoti per Stasera, Pagamento a Bordo",
      description: "Prenotazione last minute della crociera sul Bosforo per stasera. Disponibilità nello stesso giorno, pagamento a bordo, nessun anticipo. Conferma su WhatsApp in pochi minuti. Da €{p.dinnerStd}/persona."
    },
    hero: {
      h1: "Crociera sul Bosforo Last Minute",
      subtitle: "Disponibilità per stasera, confermata in pochi minuti. Nessun anticipo, nessun voucher prestampato — venga semplicemente al molo e si goda la serata.",
      badge: "Prenotazione Stesso Giorno · Confermata in Minuti · Pagamento a Bordo"
    },
    intro: [
      "È atterrato a Istanbul questo pomeriggio e desidera una bella serata stasera? La **crociera sul Bosforo last minute** funziona. Sappiamo che molti viaggiatori decidono la mattina stessa, quindi riserviamo posti specificamente per le prenotazioni nello stesso giorno. Compili la procedura guidata qui, confermiamo in pochi minuti via WhatsApp, si presenta al molo di Kabataş alle 20:00, paga a bordo e si gode la serata.",
      "La nostra **crociera sul Bosforo last minute** ha lo stesso programma serale delle prenotazioni anticipate: 3 ore sull'acqua (21:00-00:00), banchetto turco a più portate, spettacolo di folklore dal vivo, Sema, danza orientale, DJ. Palazzo Dolmabahçe illuminato, Moschea di Ortaköy, Ponte del Bosforo — le stesse vedute iconiche. Stesso prezzo €{p.dinnerStd} Standard o €{p.dinnerVip} VIP.",
      "La cancellazione nello stesso giorno è gratuita fino a 2 ore prima della partenza, perché **pagamento a bordo** significa che non si è ancora impegnato a nulla. Ha prenotato alle 14:00 e ha cambiato idea alle 19:00? Scriva semplicemente su WhatsApp — niente rimborso, nessun problema. Questa è la flessibilità del **tour last minute a Istanbul** che i viaggiatori apprezzano."
    ],
    highlights: [
      { title: "Posti per stasera ancora disponibili", desc: "Riserviamo 5-10 posti al giorno per prenotazioni nello stesso giorno. Verifichi la procedura guidata sopra — disponibilità in tempo reale. Se il tour di stasera è pieno, quello di domani è di solito aperto." },
      { title: "Conferma in meno di 5 minuti", desc: "Compili la procedura guidata → messaggio di conferma WhatsApp/Telegram/WeChat → fatto. Nessun voucher email da aspettare, nessun QR code da stampare. Il nostro messaggio è il Suo biglietto." },
      { title: "Zero pagamento fino a bordo", desc: "Pagamento a bordo, contanti o carta. Se non si presenta (cambio di piani, malattia, meteo), nessun addebito. Cancellazione gratuita fino a 2 ore prima della partenza. Davvero a misura di last minute." },
      { title: "Transfer hotel nello stesso giorno spesso disponibile", desc: "Il transfer hotel richiede normalmente 24 ore di preavviso, ma per prenotazioni nello stesso giorno tra le 14:00-17:00 di solito possiamo organizzare il ritiro a +€{p.transfer}/persona. Per richieste urgenti di transfer, WhatsApp." }
    ],
    faq: [
      { q: "Posso davvero prenotare la crociera sul Bosforo per stasera?", a: "Sì — spesso. Riserviamo posti per prenotazioni nello stesso giorno. Verifichi la procedura guidata sopra per la disponibilità di stasera. Se ci sono posti disponibili, può prenotare fino alle 18:00 (3 ore prima della partenza). I weekend sono più stretti — prenoti prima durante il giorno se possibile." },
      { q: "Quanto last minute posso prenotare?", a: "Le prenotazioni restano aperte fino alle 18:00 per la barca delle 21:00. Dopo le 18:00, ci scriva direttamente su WhatsApp al +90 532 244 29 22 — possiamo confermare manualmente se ci sono posti aperti. Dopo le 19:30 è molto stretto a meno che non sia al molo di Kabataş e possa imbarcarsi rapidamente." },
      { q: "La crociera sul Bosforo last minute è più costosa?", a: "No — stesso prezzo della prenotazione anticipata. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Non applichiamo \"prezzi dinamici\" o sovrapprezzo last minute. Stessa barca, stessa cena, stesso spettacolo, stesso prezzo." },
      { q: "E se il tour di stasera è completamente pieno?", a: "Il tour di domani è di solito aperto — operiamo 365 giorni all'anno, ogni giorno. Può prenotare per domani e essere ancora \"last minute\" nel senso che ha appena deciso. I tour dei giorni feriali hanno più spazio dei weekend." },
      { q: "Può organizzare il transfer hotel last minute?", a: "Il transfer nello stesso giorno è possibile fino a ~17:00 per il tour delle 21:00. Dopo le 17:00, potremmo non avere un autista disponibile — in tal caso può prendere un taxi per il molo di Kabataş (15 min da Taksim, 10 min da Sultanahmet, ~€10-15). Centrale e facile." },
      { q: "E se sono già a Kabataş e voglio imbarcarmi?", a: "Se è al molo e ci sono posti aperti, può presentarsi e imbarcarsi. Ci scriva su WhatsApp o chieda all'equipaggio — La aggiungeremo se c'è spazio. Stesso prezzo pagamento a bordo. In gergo turistico si chiama \"walk-on\" — qui funziona." }
    ],
    cta: {
      primary: "Prenota per Stasera · Pagamento a Bordo",
      secondary: "Prenotazione stesso giorno · Confermata in minuti · Cancellazione gratuita 2 ore prima",
      tertiary: "WhatsApp per Prenotazioni Urgenti"
    }
  },

  "istanbul-cruise-price": {
    meta: {
      title: "Prezzo Crociera Istanbul — Tariffe Trasparenti, da €{p.dinnerStd} Pagamento a Bordo",
      description: "Prezzi della crociera sul Bosforo a Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. 0-3 anni gratis. Extra trasparenti (alcol +€{p.unlimited}, transfer +€{p.transfer}). Nessun costo nascosto."
    },
    hero: {
      h1: "Prezzo Crociera Istanbul",
      subtitle: "Prezzi trasparenti, nessun costo nascosto. Standard €{p.dinnerStd}/persona, VIP €{p.dinnerVip}/persona — e paga a bordo, non ora.",
      badge: "Trasparente · 40% DI SCONTO Diretto · 0-3 Anni Gratis"
    },
    intro: [
      "I **prezzi delle crociere a Istanbul** variano molto — da traghetti economici da €15 che saltano la cena a yacht in stile resort da €150+. I nostri prezzi si collocano al centro e offrono il miglior valore: €{p.dinnerStd} per lo Standard per una crociera con cena completa di 3 ore con spettacolo, €{p.dinnerVip} per il VIP per l'esperienza premium vicino al palco. Nessun costo nascosto, nessun supplemento a sorpresa.",
      "Una ripartizione dettagliata del **prezzo della crociera a Istanbul**, perché la trasparenza conta:\n\n- **Crociera con Cena Standard**: €{p.dinnerStd}/persona (prima €{p.dinnerStdOriginal}, 40% di sconto). Include tour di 3 ore, 10 meze, secondo, dolce, bevande analcoliche illimitate, spettacolo dal vivo.\n- **Crociera con Cena VIP**: €{p.dinnerVip}/persona (prima €{p.dinnerVipOriginal}). Aggiunge posti vicino al palco, 15+ meze, opzioni filetto di manzo/costata, servizio prioritario.\n- **0-3 Anni**: Gratis. 4-8 anni: 50% di sconto. 9+: prezzo pieno.\n\nExtra (opzionali):\n- 2 bicchieri di alcol: +€{p.alcohol2}/persona\n- Alcol locale illimitato: +€{p.unlimited}/persona\n- Transfer hotel andata-ritorno: +€{p.transfer}/persona\n- Allestimento tavolo romantico: +€{p.romantic}/tavolo",
      "E soprattutto: **pagamento a bordo**. Non si impegna di un centesimo finché non è sulla barca. Cancellazione gratuita fino a 2 ore prima della partenza. Nessun impegno, nessun rischio — il **prezzo di crociera a Istanbul** più a misura di consumatore che troverà."
    ],
    highlights: [
      { title: "Standard: €{p.dinnerStd} (prima €{p.dinnerStdOriginal})", desc: "40% di sconto sul prezzo pieno. Tour di 3 ore, cena turca completa, spettacolo dal vivo, bevande analcoliche illimitate. Il pacchetto più popolare — copre tutto ciò che serve per una bella serata." },
      { title: "VIP: €{p.dinnerVip} (prima €{p.dinnerVipOriginal})", desc: "40% di sconto sul prezzo pieno. Aggiunge posti vicino al palco, 15+ meze, secondi premium (filetto di manzo, costata), servizio prioritario del cameriere. Per occasioni speciali o viaggiatori premium." },
      { title: "Prezzi bambini: 0-3 gratis, 4-8 metà prezzo", desc: "0-3 completamente gratis (nessun costo). 4-8 50% di sconto sul prezzo adulto. 9+ prezzo adulto intero. Trasparente, nessun trucco sui prezzi familiari. Transfer anche gratis per 0-3 anni." },
      { title: "Extra — solo se li vuole", desc: "Alcol: €{p.alcohol2} o €{p.unlimited}/persona. Transfer: €{p.transfer}/persona. Tavolo romantico: €{p.romantic}/tavolo. Tutto opzionale, non in pacchetto. Scelga solo ciò di cui ha bisogno." }
    ],
    faq: [
      { q: "Quanto costa una crociera a Istanbul?", a: "Crociera con Cena Standard: €{p.dinnerStd}/persona (pieno €{p.dinnerStdOriginal}, 40% di sconto). VIP: €{p.dinnerVip}/persona (pieno €{p.dinnerVipOriginal}, 40% di sconto). 0-3 anni gratis, 4-8 anni metà prezzo. Pagamento a bordo — nessun anticipo. Cancellazione gratuita fino a 2 ore prima della partenza." },
      { q: "Ci sono costi nascosti nel prezzo della crociera a Istanbul?", a: "No. Il prezzo include: tour di 3 ore, cena completa (meze, antipasto, secondo, dolce), bevande analcoliche illimitate, spettacolo dal vivo, tasse. Gli extra opzionali (alcol, transfer, tavolo romantico) sono separati e con prezzi trasparenti — paga solo per ciò che aggiunge. Nessun \"supplemento di servizio\", \"tassa portuale\" o spese a sorpresa." },
      { q: "Perché il prezzo della crociera a Istanbul è al 40% di sconto — è un trucco?", a: "Nessun trucco. Il prezzo pieno è €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal}, che è quanto addebitano i siti di prenotazione di terze parti (Viator, GetYourGuide, Klook) — con le loro commissioni. Prenoti direttamente e paga €{p.dinnerStd}/€{p.dinnerVip}. Il 40% è la differenza. Nessun tempo limitato o trucchi di prezzi dinamici." },
      { q: "Come si confronta il prezzo della crociera a Istanbul con altre opzioni?", a: "Traghetti di linea: €5-10, 1 ora, senza cena, senza intrattenimento, solo turismo. Crociere con cena economiche: €20-30, affollate, cibo mediocre, spettacolo breve. Il nostro Standard (€{p.dinnerStd}): 3 ore, cena completa, spettacolo completo, tavolo privato, autorizzato TÜRSAB. VIP (€{p.dinnerVip}): vicino al palco, menu premium. Yacht resort: €100-150+, eccessivo per viaggiatori solitari/coppie." },
      { q: "Devo pagare in anticipo il prezzo della crociera a Istanbul?", a: "No — **pagamento a bordo**. Prenoti ora (procedura guidata di 1 minuto), confermiamo via WhatsApp, si presenta alle 20:00 e paga a bordo (contanti o carta). Cancellazione gratuita fino a 2 ore prima. Zero impegno finanziario finché non è soddisfatto." },
      { q: "Ci sono sconti di gruppo sul prezzo della crociera a Istanbul?", a: "Per gruppi di 10+, possiamo offrire il 5-10% di sconto — ci scriva su WhatsApp con la dimensione del Suo gruppo. Per 25+, consideri il tour privato (intera barca per il Suo gruppo, menu personalizzato). Per 2-9 persone si applicano le tariffe standard — già al 40% di sconto sul prezzo pieno." }
    ],
    cta: {
      primary: "Prenota · Pagamento a Bordo",
      secondary: "Da €{p.dinnerStd}/persona · 0-3 anni gratis · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  },

  "bosphorus-sightseeing": {
    meta: {
      title: "Visita al Bosforo — Tutti i Monumenti di Istanbul dall'Acqua",
      description: "Il tour di visita al Bosforo copre ogni grande monumento: Dolmabahçe, Moschea di Ortaköy, Ponte del Bosforo, Rumeli Hisarı, Beylerbeyi, Torre della Fanciulla. Tour serale di 3 ore con cena, €{p.dinnerStd}."
    },
    hero: {
      h1: "Visita al Bosforo",
      subtitle: "Tutti i monumenti iconici di Istanbul — dall'acqua, di notte, con cena. Un unico tour di 3 ore copre Dolmabahçe, Moschea di Ortaköy, Ponte del Bosforo, Rumeli Hisarı e altro ancora.",
      badge: "10+ Monumenti · Sponde Europea e Asiatica · 3 Ore"
    },
    intro: [
      "La **visita al Bosforo** dall'acqua batte qualsiasi tour in autobus. Il Bosforo è la via d'acqua più storica della città — sultani ottomani, imperatori bizantini, mercanti greci e navi da guerra russe sono passati tutti di qui. Oggi il nostro tour di 3 ore, con commento dell'equipaggio anglofono, passa per ogni grande monumento di Istanbul che definisce lo skyline.",
      "Itinerario del nostro **tour di visita al Bosforo** (partenza serale, 21:00-00:00):\n\n1. **Palazzo Dolmabahçe** — residenza ottomana del XIX secolo, illuminata di notte\n2. **Palazzo di Çırağan** — ora hotel di lusso, storia reale\n3. **Moschea di Ortaköy** — una delle moschee più fotografate di Istanbul, sull'acqua\n4. **Ponte del Bosforo** — cambia tra blu, viola, oro di notte\n5. **Bebek** — quartiere elegante della sponda europea\n6. **Rumeli Hisarı** — costruito nel 1452 da Fatih Sultan Mehmet prima della conquista di Costantinopoli\n7. **Ponte Fatih Sultan Mehmet** — secondo ponte sul Bosforo, arco drammatico\n8. **Palazzo Beylerbeyi** — sponda asiatica, residenza estiva ottomana\n9. **Üsküdar** — sponda asiatica di Istanbul, quartiere tradizionale\n10. **Torre della Fanciulla** — torre su isoletta, uno dei simboli più romantici di Istanbul",
      "Cena e intrattenimento sono inclusi — non separati — quindi la **visita al Bosforo** si trasforma in una serata completa. Cena turca a più portate, spettacolo di folklore dal vivo, Sema, danza orientale, DJ. Valutazione 4,8★ da oltre 11.317 viaggiatori, autorizzato TÜRSAB A-17672."
    ],
    highlights: [
      { title: "10+ grandi monumenti di Istanbul", desc: "Palazzo Dolmabahçe, Palazzo di Çırağan, Moschea di Ortaköy, Ponte del Bosforo, Rumeli Hisarı, Ponte FSM, Palazzo Beylerbeyi, Üsküdar, Torre della Fanciulla. Ogni monumento essenziale di Istanbul in un unico tour." },
      { title: "Sia sponda europea che asiatica", desc: "All'andata sponda europea (Dolmabahçe → Rumeli Hisarı), al ritorno sponda asiatica (Beylerbeyi → Üsküdar). Due continenti in un tour di 3 ore — solo Istanbul Le permette di farlo." },
      { title: "Visita serale = vedute illuminate", desc: "La visita diurna mostra i monumenti in luce piatta. Il tour notturno li cattura nella massima drammaticità: palazzi che brillano di giallo, ponti colorati, moschee riflesse nell'acqua scura. Meglio per le foto, più memorabile." },
      { title: "Cena + spettacolo inclusi", desc: "Visita + cena + intrattenimento in un unico pacchetto. Non serve pianificare una cena separata dopo il tour. Da €{p.dinnerStd}/persona, pagamento a bordo, 3 ore totali." }
    ],
    faq: [
      { q: "Quali monumenti del Bosforo vedrò?", a: "In ordine: Palazzo Dolmabahçe, Palazzo di Çırağan, Moschea di Ortaköy, Ponte del Bosforo, quartiere di Bebek, Rumeli Hisarı, Ponte Fatih Sultan Mehmet, Anadolu Hisarı, Palazzo Beylerbeyi, Kuzguncuk, Üsküdar e Torre della Fanciulla (visibile in lontananza). 10+ grandi monumenti in un unico itinerario di 3 ore." },
      { q: "La visita al Bosforo è meglio di giorno o di notte?", a: "Esperienze diverse. Giorno: visione più chiara dei dettagli architettonici, più luminoso per le foto. Notte: illuminazione drammatica, atmosfera misteriosa, meno barche sull'acqua. La maggior parte dei viaggiatori preferisce il tour notturno perché i monumenti appaiono più magici — e cena + spettacolo lo rendono una serata completa." },
      { q: "La barca si ferma ai monumenti per le foto?", a: "È un tour continuo — nessuna fermata (nessuna discesa). La barca passa vicino a ogni monumento, l'equipaggio spiega cosa sta vedendo, può spostarsi sul ponte esterno per le foto. Niente code, niente camminate, niente stress di tempi — solo 3 ore senza interruzioni di opportunità fotografiche." },
      { q: "L'equipaggio fa commenti durante la visita?", a: "Sì — l'equipaggio anglofono fornisce brevi commenti mentre passiamo ogni grande monumento (storia, architettura, curiosità). Non è una lezione guidata, più come una spiegazione amichevole mentre cena. Per una storia più approfondita, raccomandiamo di abbinare con un tour a piedi di Istanbul diurno." },
      { q: "Come si differenzia la visita al Bosforo da un traghetto hop-on?", a: "Traghetti hop-on (barche di linea Şehir Hatları): €5-10, 1-2 ore, base, senza cena, affollati. Il nostro tour: €{p.dinnerStd}, 3 ore, cena completa, spettacolo dal vivo, tavolo privato, commento in inglese. Il tour serale è migliore per una visita seria e confortevole. Il traghetto di linea funziona per attraversate economiche veloci." },
      { q: "Posso fotografare i monumenti dalla barca?", a: "Sì — assolutamente. Il ponte esterno ha ottimi punti per la fotografia. I monumenti passano a 100-200 metri dalla barca. Le foto con smartphone vengono benissimo; gli utenti di DSLR/mirrorless possono ottenere scatti straordinari, specialmente durante la transizione ora dorata-ora blu della sera presto." }
    ],
    cta: {
      primary: "Prenota Tour di Visita · Pagamento a Bordo",
      secondary: "10+ monumenti · Cena + spettacolo · Cancellazione gratuita 2 ore prima",
      tertiary: "Disponibilità Stasera"
    }
  }

};
