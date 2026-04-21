/**
 * German translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Bosporus-Dinner-Cruise Istanbul — Premium-Nachttour ab €{p.dinnerStd}',
      description: 'Istanbuls bestbewertete Bosporus-Schifffahrt mit Dinner. 3-stündige Abendfahrt, mehrgängiges türkisches Festmahl, Live-Folklore & DJ, panoramische Nachtansichten. TÜRSAB-lizenziert. Zahlung an Bord — keine Vorauszahlung.'
    },
    hero: {
      h1: 'Bosporus-Dinner-Cruise in Istanbul',
      subtitle: 'Drei Stunden Live-Unterhaltung, ein mehrgängiges türkisches Festmahl und die gefeiertsten Nachtansichten des Bosporus.',
      badge: '4,8★ · 11.317 Bewertungen'
    },
    intro: [
      'Die **Bosporus-Schifffahrt mit Dinner** ist Istanbuls ikonischstes Abenderlebnis. Unser Schiff legt um 20:00 Uhr am Kabataş-Pier ab und gleitet unter den beleuchteten Bögen der Bosporus- und Fatih-Sultan-Mehmet-Brücken hindurch, während Sie ein mehrgängiges türkisches Festmahl, Live-Folklore-Aufführungen, orientalischen Tanz und ein DJ-Set genießen, das das Deck bis 23:00 Uhr zum Leben erweckt.',
      'Im Gegensatz zu den vielen generischen Tourbooten, die die Istanbuler Nachtkulisse bevölkern, ist unsere **Bosporus-Schifffahrt mit Dinner** TÜRSAB-lizenziert (A-17672) und wurde von mehr als 11.317 Reisenden auf Google und TripAdvisor mit 4,8★ bewertet. Wir halten die Gruppe klein, den Service herzlich — und da Sie an Bord zahlen, gehen Sie mit einer Vorabbuchung kein Risiko ein.',
      'Ob Sie einen Jahrestag feiern, einen Premium-Abend in Istanbul mit Ihrer Familie suchen oder einfach den fotogensten Übergang von Sonnenuntergang zu Nacht der Stadt erleben möchten — dies ist die Dinner-Cruise, die Einheimische in Istanbul zuerst empfehlen.'
    ],
    highlights: [
      { title: 'Mehrgängiges türkisches Festmahl', desc: '10 Mezze-Sorten, warme Vorspeise (Paçanga Böreği), Hauptgang nach Wahl (Lachs / Wolfsbarsch / Hähnchen / Köfte / vegetarisch), Eisbomben-Dessert, unbegrenzte alkoholfreie Getränke.' },
      { title: 'Live-Folklore, orientalischer Tanz & DJ', desc: 'Mevlana-Sema-Vorführung, 5 traditionelle türkische Volkstänze, klassischer orientalischer Tanz, Live-Musiker, gefolgt von einem DJ-Set während der gesamten Fahrt.' },
      { title: 'Komplette Bosporus-Nachtroute', desc: 'Kabataş → Dolmabahçe → Çırağan-Palast → Ortaköy-Moschee → Bebek → Rumeli Hisarı → FSM-Brücke → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Ab €{p.dinnerStd}/Person — Zahlung an Bord', desc: 'Standard-Dinner-Cruise €{p.dinnerStd} (vorher €{p.dinnerStdOriginal}). VIP-Cruise mit Bühnennähe und Premium-Menü für €{p.dinnerVip}. Keine Vorauszahlung. Kostenlose Stornierung bis 2 Stunden vor Abfahrt.' }
    ],
    faq: [
      { q: 'Wann beginnt die Bosporus-Dinner-Cruise?', a: 'Das Einsteigen beginnt um 20:00 Uhr am Kabataş-Pier. Das Schiff legt um 21:00 Uhr ab und kehrt gegen 00:00 Uhr zurück. Wir empfehlen, 15–20 Minuten früher einzutreffen, um Ihren Platz einzunehmen und sich einzurichten.' },
      { q: 'Wie viel kostet die Bosporus-Dinner-Cruise?', a: 'Die Standardtour kostet €{p.dinnerStd}/Person (regulärer Preis €{p.dinnerStdOriginal}). Die VIP-Tour mit Bühnennähe und Premium-Menü kostet €{p.dinnerVip}/Person. Kinder 0–3 Jahre gratis, 4–8 Jahre 50% Ermäßigung. Die Zahlung erfolgt an Bord — keine Vorauszahlung.' },
      { q: 'Ist Alkohol in der Dinner-Cruise enthalten?', a: 'Unbegrenzte alkoholfreie Getränke (Wasser, Cola, Säfte) sind im Preis inbegriffen. Alkoholpakete sind optional: 2 Gläser +€{p.alcohol2}/Person oder unbegrenzt lokaler Alkohol (Wein, Bier, Raki, Wodka, Gin) +€{p.unlimited}/Person. Importierte Spirituosen werden an Bord separat berechnet.' },
      { q: 'Gibt es einen Hoteltransfer?', a: 'Ja — Abhol- und Bringservice kostet +€{p.transfer}/Person. Servicegebiete: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane und Sütlüce. Sie können dies im Buchungsassistenten auswählen.' },
      { q: 'Ist die Bosporus-Dinner-Cruise halal?', a: 'Absolut. Alle Fleischprodukte an Bord sind halal-zertifiziert. Alkohol ist ein optionales Extra (wird Gästen nicht aufgedrängt), und die Sitzordnung trennt natürlich diejenigen, die einen alkoholfreien Tisch bevorzugen. Wir bieten auch vegetarische Alternativen ohne Aufpreis.' },
      { q: 'Was soll ich anziehen?', a: 'Smart Casual. Istanbuler Abende können auch im Sommer windig sein — wir empfehlen eine leichte Jacke oder einen Schal. Es gibt keine obligatorische Kleiderordnung, aber Badekleidung, Flip-Flops oder Sportkleidung passen nicht zum Dinner-Ambiente.' }
    ],
    cta: {
      primary: 'Jetzt buchen · Zahlung an Bord',
      secondary: 'Kostenlose Stornierung bis 2 Stunden vor Abfahrt',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosporus-Tour mit Kindern — Familienfreundliche Dinner-Cruise Istanbul',
      description: 'Familienfreundliche Bosporus-Dinner-Cruise. 0–3 Jahre gratis, 4–8 Jahre halber Preis. Geschützter Innenbereich, Kindermenü, frühe Abfahrt. Ab €{p.dinnerStd}/Erwachsener — Zahlung an Bord.'
    },
    hero: {
      h1: 'Bosporus-Tour mit Kindern',
      subtitle: 'Ein familienfreundlicher Bosporus-Abend speziell für Familien mit Kindern — Essen, Unterhaltung und eine sichere, entspannte Atmosphäre.',
      badge: 'Familienfreundlich · Halal · 0–3 Jahre gratis'
    },
    intro: [
      'Die **Bosporus-Tour mit Kindern** ist Istanbuls familienfreundlichste Abendoption. Wir empfangen jeden Abend Dutzende Familien — jedes Detail ist darauf ausgerichtet, Kindern den Aufenthalt angenehm zu gestalten: geschützte Innenplätze, damit die Kleinen warm bleiben, ein zugängliches kinderfreundliches Menü (einfach gegrilltes Hähnchen, Nudeln, unbegrenzte alkoholfreie Getränke) und frühes Einsteigen, um Überreizung zu vermeiden.',
      'Im Gegensatz zu reinen Erwachsenen-Partybooten bleibt unsere **Bosporus-Dinner-Cruise für Familien** herzlich und einladend. **Kinder 0–3 Jahre sind gratis** (inklusive Transfer), 4–8 Jahre erhalten **50 % Ermäßigung**, ab 9 Jahren voller Preis — keine versteckten Gebühren. Die Live-Folklore, der orientalische Tanz und die Sema-Vorführung sind sanfte Familienunterhaltung, kein Nachtclub.',
      'Ob Sie für ein langes Wochenende mit Ihrem Kleinkind nach Istanbul kommen oder Ihre Teenager auf ihre erste Europareise mitnehmen — dies ist die Tour, die Istanbuler Familien empfehlen. Sicher, halal-zertifiziert, TÜRSAB-lizenziert und 4,8★ von über 11.317 Reisenden.'
    ],
    highlights: [
      { title: '0–3 Jahre komplett gratis', desc: 'Keine Gebühr für Babys und Kleinkinder. 4–8 Jahre zahlen 50 % des Erwachsenenpreises. Ab 9 Jahren voller Gast. Transparent, keine Überraschungen.' },
      { title: 'Geschützter Innenbereich', desc: 'In den kalten Monaten vollständig geschlossen und beheizt. Kinder bleiben warm, geschützt vor Wind. Bei schönem Wetter ist auch das Oberdeck verfügbar — die Wahl liegt bei Ihnen.' },
      { title: 'Kindermenü auf Anfrage', desc: 'Einfach gegrilltes Hähnchen, Nudeln, Brot und Gemüse — ohne Aufpreis. Unbegrenzte alkoholfreie Getränke (Cola, Säfte, Wasser). Bitte vorher Bescheid geben — keine unerwartet scharfen Mezze für die Kleinen.' },
      { title: 'Familiensichere Unterhaltung', desc: 'Sema-Vorführung (für Kinder faszinierend), 5 traditionelle Volkstänze, türkische Livemusik und DJ-Set. Alles familienfreundlich — keine Erwachseneninhalte. Kinder tanzen oft mit.' }
    ],
    faq: [
      { q: 'Ist die Bosporus-Tour sicher für kleine Kinder?', a: 'Ja — unser Schiff ist TÜRSAB-lizenziert, hat einen geschlossenen Innenbereich mit sicheren Fenstern, Rettungswesten in allen Größen und eine professionelle, familienerfahrene Crew. Wir empfehlen das Innendeck für Kleinkinder und das Oberdeck ab 6 Jahren.' },
      { q: 'Wie viel kosten Kinder auf der Bosporus-Tour?', a: 'Kinder **0–3 Jahre: GRATIS** (keine Gebühr, keine versteckten Kosten). **4–8 Jahre: 50 % Ermäßigung** auf den Erwachsenenpreis — also auf der Standardtour €{p.dinnerStd}/2 = €12 pro Kind. **Ab 9 Jahren: voller Erwachsenenpreis.** Hoteltransfer ist für 0–3 Jahre gratis, ab 4 Jahren regulär (€{p.transfer}/Person).' },
      { q: 'Gibt es ein Kindermenü an Bord?', a: 'Ja — einfach gegrilltes Hähnchen, Nudeln, Brot, saisonales Gemüse und unbegrenzte alkoholfreie Getränke. Teilen Sie Allergien oder wählerische Esser bei der Buchung mit, und wir bereiten etwas zu, das Ihr Kind gerne isst.' },
      { q: 'Ist die Musik oder Show zu laut für Kinder?', a: 'Live-Aufführungen finden in einem einzigen ausgewiesenen Bühnenbereich statt — wenn Ihre Kinder geräuschempfindlich sind, setzen wir Sie an einen ruhigeren Tisch weiter hinten. Die Show dauert insgesamt 40 Minuten, der Rest des Abends ist entspannte türkische Musik und ein DJ in gemäßigter Lautstärke.' },
      { q: 'Was passiert, wenn mein Baby während der Tour einschläft?', a: 'Kein Problem — viele tun das. Der Innenbereich hat bankähnliche Sofas, auf denen ein Baby oder Kleinkind bequem schlummern kann. Bitten Sie unsere Crew bei Bedarf um eine warme Decke. Kein Aufpreis.' },
      { q: 'Soll ich einen Kinderwagen an Bord bringen?', a: 'Sie können, aber wir empfehlen, große Kinderwagen im Hotel zu lassen (oder beim Fahrer, wenn Sie einen Transfer gebucht haben — wir passen auf). Unser Schiff hat schmale Gänge und die Decks sind terrassiert. Eine leichte Babytrage ist an Bord praktischer.' }
    ],
    cta: {
      primary: 'Familientour buchen · Zahlung an Bord',
      secondary: 'Kostenlose Stornierung bis 2 Stunden vor Abfahrt · Keine Vorauszahlung',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Romantische Bosporus-Cruise — Dinner bei Kerzenschein für Paare | Istanbul',
      description: 'Istanbuls romantischste Bosporus-Cruise. Tisch bei Kerzenschein, Rosen, VIP-Arrangement, mehrgängiges Dinner, unter beleuchteten Brücken. Jahrestag, Flitterwochen, Überraschung — ab €{p.dinnerStd}/Person buchen.'
    },
    hero: {
      h1: 'Romantische Bosporus-Cruise',
      subtitle: 'Dinner bei Kerzenschein, mit Rosen geschmückter Tisch, beleuchtete Brücken und ein besonderer Moment nur für Sie beide unter Istanbuls ikonischstem Nachthimmel.',
      badge: 'Jahrestag · Flitterwochen · Besondere Nacht'
    },
    intro: [
      'Die **romantische Bosporus-Cruise** ist Istanbuls ikonischster Abend für Paare. Während die Sonne über dem Dolmabahçe-Palast untergeht und die Bosporus-Brücke in ihren Farben erstrahlt, teilen Sie und Ihr Partner ein mehrgängiges türkisches Festmahl an einem privaten Tisch — mit Kerzen, frischen Blumen und einer Live-Violine, die über das Deck schwebt.',
      'Unser romantisches Tischarrangement (+€{p.romantic}/Tisch) verwandelt jeden Ort in einen besonderen Moment: rote Rosen, flackernde Kerzen, eine handgeschriebene Willkommenskarte. Fügen Sie das unbegrenzte Alkoholpaket (+€{p.unlimited}/Person) für Wein unter den Sternen hinzu oder bleiben Sie bei den inklusiven alkoholfreien Getränken. In beiden Fällen kümmert sich die Crew diskret um den Rest.',
      'Ob Sie einen Jahrestag feiern, Ihrem Partner eine Überraschung bereiten oder einfach eine unvergessliche Nacht in Europas romantischster Stadt erleben möchten — dies ist die Tour, die Paare in Istanbul zuerst wählen. 4,8★ Bewertung, TÜRSAB-lizenziert und — am wichtigsten — Zahlung an Bord, sodass Sie sich nur auf den Abend selbst festlegen.'
    ],
    highlights: [
      { title: 'Romantischer Tisch bei Kerzenschein', desc: 'Fügen Sie das romantische Tischarrangement für +€{p.romantic}/Tisch hinzu: frische rote Rosen, flackernde Kerzen, Rosenblätter auf der Tischdecke und eine handgeschriebene Karte. Fotos inklusive.' },
      { title: 'Beste Tische für den Sonnenuntergang-Nacht-Übergang', desc: 'Fenstertische sind für Paare reserviert. Beobachten Sie die Beleuchtung der Bosporus-Brücke, das Leuchten des Mädchenturms und die Illumination der Ortaköy-Moschee von Ihrem privaten Tisch aus.' },
      { title: 'Live-Violine und intime Atmosphäre', desc: 'Live-Violine und akustische türkische Musik während des Dinners schaffen eine langsame, romantische Atmosphäre. Später übernimmt der DJ, und Paare tanzen unter den Lichtern auf dem Oberdeck.' },
      { title: 'Wein, Champagner, Premium-Arrangements', desc: 'Fügen Sie 2 Gläser Alkohol (+€{p.alcohol2}/Person) oder unbegrenzten lokalen Wein, Bier, Raki (+€{p.unlimited}/Person) hinzu. Importierter Champagner und Premium-Arrangements auf Anfrage — fragen Sie bei der Buchung.' }
    ],
    faq: [
      { q: 'Was macht diese Tour romantisch?', a: 'Die Kombination aus privatem Tisch, Kerzenlicht-Arrangement (optional +€{p.romantic}), mehrgängigem türkischem Dinner, Live-Violine und akustischer Musik sowie den beleuchteten Bosporus-Brücken über Ihnen. Wir gestalten das Erlebnis für Paare — frühe ruhige Atmosphäre, später energiegeladener DJ und Tanz. Sie bestimmen das Tempo.' },
      { q: 'Können Sie eine Überraschung für meinen Partner arrangieren — Geburtstag, Jahrestag, Antrag?', a: 'Ja — geben Sie es bei der Buchung an. Wir können eine Geburtstagstorte (kostenlos), spezielle Tischdekoration, eine handgeschriebene Karte in Ihrer Sprache oder die Koordination mit unserem Personal, um im richtigen Moment etwas an den Tisch zu bringen, arrangieren. Für Heiratsanträge empfehlen wir, uns direkt per WhatsApp zu schreiben, damit wir diskret planen können.' },
      { q: 'Wie viel kostet die romantische Tour für 2 Personen?', a: '2 Personen Standard: 2 × €{p.dinnerStd} = €48. Mit romantischem Arrangement +€{p.romantic} = €63. 2 Personen VIP: 2 × €{p.dinnerVip} = €110 + Romantik €{p.romantic} = €125. Keine Vorauszahlung — Zahlung an Bord. Für unbegrenzten Alkohol zusätzlich 2 × €{p.unlimited} = €60.' },
      { q: 'Ist die romantische Bosporus-Cruise privat — nur für uns beide?', a: 'Nein — es ist eine geteilte Tour mit anderen Paaren und Gästen (insgesamt bis zu 60–80). **Ihr Tisch** ist privat (nur für Ihre Gruppe), aber es gibt andere Gäste an Bord. Wenn Sie ein komplett privates Schiff für 2 Personen wünschen, ist dies eine separate **private Bosporus-Tour** (können wir auf Anfrage arrangieren — schreiben Sie uns).' },
      { q: 'Können wir unsere eigenen Blumen, Kuchen oder Geschenke mitbringen?', a: 'Absolut. Bringen Sie mit, was Sie möchten — unser Personal hilft, eine Überraschungsgabe diskret zu platzieren, eine Ringbox im Dessert zu verstecken oder Blumen, die Sie selbst mitgebracht haben, zu arrangieren. Keine Korkengebühren oder Extras. Teilen Sie uns nur das Timing mit, damit wir koordinieren können.' },
      { q: 'Was sollen wir für eine romantische Bosporus-Cruise anziehen?', a: 'Smart Casual bis elegant — viele Paare kleiden sich schick (Kleider, Sakkos). Keine strenge Kleiderordnung, aber die Atmosphäre ist besonderer als entspannter Tourismus. Bringen Sie eine leichte Jacke oder einen Schal mit — das Deck kann auch im Sommer kühl sein. Bequeme Schuhe, wenn Sie nach dem Dinner tanzen möchten.'}
    ],
    cta: {
      primary: 'Romantische Tour buchen · Zahlung an Bord',
      secondary: 'Fügen Sie das romantische Arrangement (+€{p.romantic}) im Buchungsassistenten hinzu · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit für heute Abend'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: '100 % Halal Bosporus-Dinner-Cruise — Istanbul | Muslimfreundlich',
      description: 'Halal-zertifizierte Bosporus-Dinner-Cruise. 100 % halal Fleisch, Alkohol optional (nie aufgedrängt), familienfreundliche Unterhaltung, respektvoll bei Gebetszeiten. Ab €{p.dinnerStd}/Person.'
    },
    hero: {
      h1: 'Halal Bosporus-Cruise in Istanbul',
      subtitle: '100 % halal-zertifiziertes Menü, Alkohol stets optional, familienfreundliche Unterhaltung und eine respektvolle Atmosphäre für muslimische Reisende — Bosporus-Abend, richtig gemacht.',
      badge: '100 % Halal · Familienfreundlich · In muslimischem Besitz'
    },
    intro: [
      'Die **Halal Bosporus-Cruise** ist Istanbuls respektvollste Dinner-Cruise für muslimische Reisende. Jedes Fleisch, das auf unserem Schiff serviert wird — Lachs, Wolfsbarsch, Hähnchen, Lamm-Köfte, Rinderfilet, Rib-Eye — ist **halal-zertifiziert** von zugelassenen Lieferanten. Wir servieren allen Gästen dasselbe Menü; es gibt keinen separaten „Halal-Bereich“, da das gesamte Schiff standardmäßig halal ist.',
      'Alkohol ist ein **optionales Extra** — wird Gästen nie aufgedrängt, und die Sitzordnung trennt natürlich diejenigen, die einen alkoholfreien Tisch bevorzugen. Für Gäste, die das unbegrenzte Alkoholpaket (+€{p.unlimited}/Person) wünschen, ist es vorhanden, aber die inklusiven unbegrenzten alkoholfreien Getränke (Wasser, Cola, Säfte) reichen den meisten muslimischen Familien aus. Unser Personal ist geschult, respektvoll zu sein, ohne Annahmen über Ihre Vorlieben zu treffen.',
      'Die **halalfreundliche Bosporus-Cruise** ist wichtig für Reisende aus Saudi-Arabien, VAE, Kuwait, Katar, Iran, Malaysia, Indonesien, Pakistan und Marokko, die Istanbuls ikonischsten Abend ohne Kompromisse erleben möchten. TÜRSAB-lizenziert, 4,8★ und Zahlung an Bord — Sie legen sich zu nichts fest, bis Sie sicher sind, dass das Erlebnis Ihren Standards entspricht.'
    ],
    highlights: [
      { title: '100 % halal-zertifiziertes Menü', desc: 'Alles Fleisch (Lachs, Wolfsbarsch, Hähnchen, Köfte, Rind, Rib-Eye) ist halal-zertifiziert von zugelassenen Lieferanten. Die Küche folgt der Halal-Zubereitung. Keine Schweinefleischprodukte oder nicht-halal Zusätze. Vegetarische Optionen immer verfügbar.' },
      { title: 'Alkohol optional, nie aufgedrängt', desc: 'Alkoholpakete sind ein Extra — standardmäßig nicht enthalten. Alkoholfreie Getränke (Wasser, Cola, Säfte) sind unbegrenzt und kostenlos. Solange Sie nicht ausdrücklich darum bitten, bleibt Ihr Tisch alkoholfrei. Die Crew respektiert Ihre Wahl diskret.' },
      { title: 'Familienfreundliche Unterhaltung', desc: 'Sema-Vorführung, traditionelle türkische Volkstänze, türkische Livemusik. Keine Nachtclub-Vorführungen, keine unangemessenen Inhalte. Sicher für Kinder, respektvoll für Familien. Orientalischer Tanz ist eine traditionelle Kunstform, bescheiden präsentiert.' },
      { title: 'Respekt vor Gebetszeiten', desc: 'Wenn die Maghrib- oder Isha-Zeit mit dem Einsteigen (20:00–21:00) zusammenfällt, kann unser Personal Sie vor der Abfahrt zum ruhigen Gebetsbereich am Kabataş-Pier weisen. Teilen Sie es einfach bei der Buchung mit.' }
    ],
    faq: [
      { q: 'Ist die Bosporus-Tour 100 % halal?', a: 'Ja — jedes Fleischprodukt auf der Speisekarte (Fisch, Hähnchen, Köfte, Rinderfilet, Rib-Eye, Lamm) ist halal-zertifiziert von zugelassenen Lieferanten. Die Küche folgt den Halal-Zubereitungsstandards. Kein Schweinefleisch wird irgendwo an Bord serviert. Dies ist keine „Halal-Option“ — das gesamte Menü ist halal.' },
      { q: 'Trinken andere Gäste auf dieser Tour Alkohol?', a: 'Einige Gäste fügen das optionale Alkoholpaket hinzu (+€{p.unlimited}/Person). Die Tische sind natürlich getrennt — Sie können einen alkoholfreien Bereich anfordern. Die Crew bringt Alkohol nur, wenn er von einem Gast ausdrücklich bestellt wird. Alkoholfreie Getränke (unbegrenzt) sind für alle inklusive.' },
      { q: 'Ist diese Tour für muslimische Familien mit Kindern geeignet?', a: 'Ja — es ist eine der familienfreundlichsten Touren Istanbuls. Die Unterhaltung ist bescheiden (Volkstänze, Sema, türkische Musik), Kinder unter 3 Jahren sind gratis, 4–8 Jahre erhalten 50 % Ermäßigung. Keine Nachtclub-Atmosphäre. Familien aus der Golfregion, Indonesien, Malaysia, Pakistan und Marokko buchen diese Tour regelmäßig.' },
      { q: 'Kann ich an Bord beten?', a: 'Es gibt keinen speziellen Gebetsraum an Bord, aber wir empfehlen, vor dem Einsteigen um 20:00 Uhr zu beten (das Maghrib-Gebet fällt oft in dieses Fenster). Am Kabataş-Pier gibt es Gebetsmöglichkeiten. Wenn Sie während der Fahrt von 21:00 bis 00:00 Uhr beten müssen (Isha), sprechen Sie mit der Crew — wir können eine ruhige Ecke auf dem Deck einrichten.' },
      { q: 'Wie hoch sind die Preise für eine muslimische Familie mit 4 Personen (2 Erwachsene, 2 Kinder)?', a: 'Standardtour: 2 × €{p.dinnerStd} + 2 × €12 (4–8 Jahre halber Preis) = €72. Wenn die Kinder unter 3 Jahre alt sind, gratis: 2 × €{p.dinnerStd} = €48. Fügen Sie €10 Hoteltransfer pro Erwachsenem hinzu. Gesamt: €48–92 für eine 4-köpfige Familie, keine Vorauszahlung, Zahlung an Bord.' },
      { q: 'Ist der Hoteltransfer auch halal?', a: 'Der Hoteltransfer ist nur eine Autofahrt — es geht nicht um Essen oder Getränke, also gibt es keine Halal-Bedenken. Unsere Fahrer sind professionell, respektvoll und pünktlich. Die Transferbereiche umfassen Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih und 8 weitere zentrale Gebiete, in denen muslimische Reisende typischerweise unterkommen.' }
    ],
    cta: {
      primary: 'Halal-Tour buchen · Zahlung an Bord',
      secondary: 'Kostenlose Stornierung bis 2 Stunden vorher · Keine Vorauszahlung · Halal-zertifiziert',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Bosporus VIP-Cruise — Premium-Dinner, Bühnennähe | Istanbul',
      description: 'Bosporus VIP-Dinner-Cruise in Istanbul. Premium-Mezze, Steak-Optionen, Plätze nahe der Bühne, prioritärer Service. Von €{p.dinnerVipOriginal}, jetzt €{p.dinnerVip}/Person. Zahlung an Bord.'
    },
    hero: {
      h1: 'Bosporus VIP-Cruise',
      subtitle: 'Plätze nahe der Bühne, Premium-türkisches Menü mit Steak-Optionen und prioritärem Service — ein aufgewerteter Bosporus-Abend für Reisende, die den besten Tisch an Bord wollen.',
      badge: 'Beliebteste · 40% RABATT · Plätze nahe der Bühne'
    },
    intro: [
      'Die **Bosporus VIP-Cruise** platziert Sie an die besten Plätze des Schiffes: Tische nahe der Bühne mit direkter Sicht auf die Sema-Vorführung, die Volkstänze, den orientalischen Tanz und die Livemusik. Das Premium-Menü fügt Rinderfilet und Rib-Eye als Hauptgangoptionen hinzu (im Gegensatz zum Hähnchen/Lachs der Standardversion), plus über 15 Sorten traditioneller türkischer Mezze, großzügig als Festplatte serviert.',
      'Unsere **VIP Bosporus-Dinner-Cruise** wird von unseren Gästen als Beliebteste bewertet — denn bei €{p.dinnerVip}/Person (vorher €{p.dinnerVipOriginal}, 40 % Rabatt) kommt das Erlebnis eher einem Fine-Dining-Restaurant als einer Touristentour nahe. Privater Tisch, aufmerksamer Kellnerservice und dieselben atemberaubenden Aussichten auf Dolmabahçe, die Ortaköy-Moschee und die beleuchtete Bosporus-Brücke.',
      'Ob Sie Geschäftsreisender sind, einen Meilenstein feiern oder einfach denken „wir sind nur einmal in Istanbul — machen wir es richtig“, dies ist die **Bosporus VIP-Cruise**, die Stammgäste buchen. TÜRSAB-lizenziert, 4,8★ mit über 11.317 Bewertungen, Zahlung an Bord, kostenlose Stornierung bis 2 Stunden vor Abfahrt.'
    ],
    highlights: [
      { title: 'Privater Tisch nahe der Bühne', desc: 'Reservierte Plätze direkt vor der Aufführungsbühne — beste Sicht auf Sema-Vorführung, Volkstänze und orientalischen Tanz. Ihr Tisch, nicht geteilt. Fotografen lieben diese Plätze.' },
      { title: '15+ Mezze + Premium-Hauptgänge', desc: 'Über 15 Sorten türkischer Mezze als traditionelle Festplatte serviert. Hauptgangoptionen beinhalten Rinderfilet und Rib-Eye (Standard hat nur Hähnchen/Lachs). Gleiches Dessert und unbegrenzte alkoholfreie Getränke.' },
      { title: 'Prioritärer Kellnerservice', desc: 'Ein dedizierter Kellner bedient zuerst Ihren Tisch — Nachschub, Menüberatung, Koordination von Alkoholextras, Sonderwünsche. Sie müssen nicht in einem vollen Raum um Aufmerksamkeit kämpfen.' },
      { title: '40 % RABATT — vorher €{p.dinnerVipOriginal}, jetzt €{p.dinnerVip}', desc: 'Regulärer Preis €{p.dinnerVipOriginal}/Person. Aktueller Einführungspreis €{p.dinnerVip}/Person — 40 % Rabatt. Zahlung an Bord, keine Vorauszahlung. Kostenlose Stornierung bis 2 Stunden vor Abfahrt.' }
    ],
    faq: [
      { q: 'Was ist der Unterschied zwischen VIP und Standard Bosporus-Cruise?', a: 'VIP erhält: (1) Plätze nahe der Bühne mit bester Sicht, (2) über 15 Mezze gegenüber 10 bei Standard, (3) Rinderfilet + Rib-Eye als Hauptgangoptionen hinzugefügt, (4) prioritären Kellnerservice. Dieselbe 3-stündige Tour, gleiche Unterhaltung, gleiche Route. €{p.dinnerVip} vs. €{p.dinnerStd}.' },
      { q: 'Ist der VIP-Preis von €{p.dinnerVip} wirklich 40 % Rabatt?', a: 'Ja — der reguläre Preis beträgt €{p.dinnerVipOriginal}/Person (überprüfen Sie auf jeder Buchungsseite). Wir wenden €{p.dinnerVip} als Direktbuchungspreis an und schneiden Zwischenhändlergebühren weg. Sie erhalten VIP für weniger, als die meisten Orte für Standard verlangen.' },
      { q: 'Ist Alkohol in der VIP-Tour enthalten?', a: 'Nein — Alkohol ist ein separates Extra (wie bei Standard). 2 Gläser: +€{p.alcohol2}/Person. Unbegrenzt lokaler Alkohol (Wein, Bier, Raki, Wodka, Gin): +€{p.unlimited}/Person. Premium-Importspirituosen werden separat berechnet. Unbegrenzte alkoholfreie Getränke sind inklusive und kostenlos.' },
      { q: 'Kann ich nach dem Einsteigen bei Standard auf VIP upgraden?', a: 'Abhängig von der Verfügbarkeit — wenn VIP-Tische offen sind, ja. Sie zahlen die Differenz (€{p.dinnerVip} - €{p.dinnerStd} = €31) an Bord. Aber wir empfehlen, VIP im Voraus zu buchen: Die besten Plätze nahe der Bühne gehen an Vorausbuchungen.' },
      { q: 'Wie buche ich die Bosporus VIP-Cruise?', a: 'Verwenden Sie den Buchungsassistenten auf dieser Seite — wählen Sie in Schritt 1 „VIP“, geben Sie Ihr Datum und die Anzahl der Gäste an und dann Kontaktdaten. Ihre Anfrage geht über WhatsApp / Telegram / WeChat, und wir bestätigen sofort. Zahlung an Bord, nicht jetzt.' },
      { q: 'Ist die VIP-Tour für Geschäftsessen mit Kunden geeignet?', a: 'Ja — VIP ist die häufigste Wahl für Geschäftsessen in Istanbul. Privater Tisch, leise genug zum Sprechen, beeindruckendes Menü und Aussicht. Viele Gäste buchen VIP + unbegrenzten Alkohol, um Kunden zu bewirten. Halal-zertifiziert (gut für Geschäftsreisende aus dem Golf). Teilen Sie es bei der Buchung mit, und wir reservieren einen ruhigeren Tisch im hinteren VIP-Bereich.' }
    ],
    cta: {
      primary: 'VIP buchen · Zahlung an Bord',
      secondary: 'Vorher €{p.dinnerVipOriginal}, jetzt €{p.dinnerVip} · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Standardoption ansehen (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Private Bosporus-Cruise — Chartern Sie Ihr eigenes Schiff | Istanbul',
      description: 'Private Bosporus-Cruise-Charter für Gruppen, Familien, Firmenveranstaltungen, Hochzeiten. Privates Schiff, individuelles Menü, flexible Dauer. Minimum 25 Gäste. Schreiben Sie uns auf WhatsApp für ein Angebot.'
    },
    hero: {
      h1: 'Private Bosporus-Cruise',
      subtitle: 'Chartern Sie das gesamte Schiff für Ihre Gruppe — Familienfeiern, Firmenessen, Geburtstage, Verlobungen, Hochzeiten. Private Nutzung, individuelles Menü, flexible Zeitplanung.',
      badge: 'Private Charter · 25+ Gäste · Individuelles Menü'
    },
    intro: [
      'Eine **private Bosporus-Cruise** bedeutet, dass das gesamte Schiff Ihnen gehört — keine anderen Gäste, keine geteilten Tische, keine geteilte Tanzfläche. Perfekt für Familientreffen, Firmenessen, Geburtstagsfeiern, Junggesellenabschiede oder Hochzeitsempfänge. Das Schiff, die Crew, das Menü, die Unterhaltung und der Zeitplan passen sich Ihrer Gruppe an.',
      'Unsere **private Bosporus-Cruise-Charter** unterstützt Gruppen von **25 bis 80 Gästen**. Kleinere Gruppen können immer noch das private Erlebnis anfordern — wir bieten eine Mindestgebühr an, die die Betriebskosten des Schiffs deckt. Größere Gruppen (Hochzeitsgröße) erhalten individuelle Preisgestaltung und beinhalten oft benutzerdefinierte Dekoration, Live-Band, Kuchenservice und verlängerte Dauer (4–5 statt der standardmäßigen 3 Stunden).',
      'Ob Sie eine Firmenveranstaltung für Kunden, eine Geburtstagsparty zum 50. oder einen Hochzeitsempfang unter Istanbuls ikonischsten Brücken planen, dies ist die **private Tour, der Istanbuler Eventplaner vertrauen**. 4,8★ Bewertung, TÜRSAB-lizenziert, komplett englischsprachige Crew und flexibel in allem — Route, Menü, Musik, Zeitplan.'
    ],
    highlights: [
      { title: 'Das gesamte Schiff, nur für Sie', desc: 'Keine anderen Gäste. Ihre Gruppe hat jedes Deck, jeden Tisch. Legen Sie Ihre eigene Musik, Ihren Dresscode, Ihr Programm fest. Privatsphäre ist wichtig — wir respektieren das.' },
      { title: 'Individuelles Menü und Getränkepaket', desc: 'Arbeiten Sie mit unserem Küchenchef zusammen, um das Menü anzupassen: spezifische Mezze, Hauptgangauswahl, Gerichte, die Ihrer Kultur oder diätetischen Bedürfnissen entsprechen. Alkoholpakete, Champagner-Empfänge, individuelle Cocktailbars — alles arrangierbar.' },
      { title: 'Flexible Dauer und Abfahrt', desc: 'Die Standarddauer von 3 Stunden kann auf 4–5 Stunden verlängert werden. Wählen Sie Abfahrt 12:00 tagsüber, 17:30 Sonnenuntergang oder 21:00 nachts. Wochentag statt Wochenende? Kein Problem — wir arbeiten mit Ihrem Zeitplan.' },
      { title: 'Individuelle Dekoration, Band, Programm', desc: 'Individuelle Dekorationen (Luftballons, Banner, Blumenarrangements), Live-Band statt DJ, Hochzeitstortenservice, Fotografen-Koordination, Reden — fügen Sie hinzu, was immer Ihre Veranstaltung benötigt. Wir sind nicht nur Bootsbetreiber, wir sind Eventplaner.' }
    ],
    faq: [
      { q: 'Wie viel kostet eine private Bosporus-Cruise?', a: 'Für Gruppen von 25+ sind es typischerweise €{p.dinnerStd}–€{p.dinnerVip}/Person + eine Schiffscharter-Gebühr basierend auf Gruppengröße, Datum und Dauer. Schreiben Sie uns auf WhatsApp mit Ihrer Gruppengröße, Ihrem Datum und Ihren Anforderungen — wir antworten innerhalb einer Stunde mit einem Angebot. Die meisten Veranstaltungen fallen in den Bereich €2.000–€6.000 gesamt.' },
      { q: 'Was ist die Mindestgruppengröße für eine private Bosporus-Cruise?', a: 'Technisch macht 25 Gäste die private Tour wirtschaftlich tragfähig. Kleinere Gruppen (10–24) können immer noch privat chartern, zahlen aber eine Mindestgebühr, die etwa 25 Personen entspricht. Für wirklich kleine Gruppen (2–10) denken Sie an die reguläre Standard- oder VIP-Tour — Ihr Tisch ist bereits privat, nur das Schiff wird geteilt.' },
      { q: 'Kann ich eine Hochzeit auf der Bosporus-Cruise veranstalten?', a: 'Ja — wir veranstalten jährlich 10–15 Hochzeitsempfänge. Kapazität bis 80 für ein Sitz-Dinner, bis 100 im Cocktailstil. Wir koordinieren mit Ihrem Fotografen, Hochzeitsplaner, Ihrer Band oder Ihrem Küchenchef. Individueller Tortenservice, erster Tanz, Champagner-Empfang arrangierbar. Schreiben Sie uns auf WhatsApp für Hochzeitspreise.' },
      { q: 'Was ist mit Firmenveranstaltungen und Team-Dinnern?', a: 'Firmen-Privatcruises sind unsere häufigsten Buchungen. Firmen-Dinner, Kundenbewirtung, Produkteinführung, Teamfeier — alles funktioniert. Wir können Rechnungen mit MwSt.-Ausweis bereitstellen, Hoteltransfers für Ihr Team arrangieren und auf Anfrage mit gebrandeten Materialien (Tischaccessoires, Beschilderung) koordinieren.' },
      { q: 'Kann ich eine Live-Band oder einen DJ anstelle Ihrer Unterhaltung mitbringen?', a: 'Ja — Sie können Ihre eigene Live-Band, Ihren DJ, Fotografen mitbringen. Oder behalten Sie unsere standardmäßige (Sema, Volkstänzer, orientalisch, DJ) und fügen Sie Ihre eigene obendrauf. Das Schiff hat eine PA-Anlage und Tanzfläche. Teilen Sie uns im Voraus mit, damit wir die Tontechnik koordinieren können.' },
      { q: 'Wie fordere ich ein Angebot für die private Bosporus-Cruise an?', a: 'Am einfachsten: Schreiben Sie uns auf WhatsApp unter +90 532 244 29 22 mit (1) Ihrer Gruppengröße, (2) bevorzugtem Datum, (3) Grund (Hochzeit, Firma, Geburtstag), (4) besonderen Anforderungen. Wir antworten innerhalb einer Stunde während der Geschäftszeiten, innerhalb von 12 Stunden nachts. Wir können auch einen Videoanruf arrangieren, um Details zu besprechen.' }
    ],
    cta: {
      primary: 'WhatsApp für privates Angebot',
      secondary: 'Individuelles Menü, Gruppe 25–80, flexible Dauer · Antwort in unter einer Stunde',
      tertiary: 'Standard-Touroption (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosporus-Tour für Paare — Date Night auf dem Wasser | Istanbul',
      description: 'Bosporus-Dinner-Cruise für Paare. Privater Tisch, beleuchtete Brücken, Livemusik, Option für romantisches Tischarrangement. Ab €{p.dinnerStd}/Person. Zahlung an Bord — die perfekte Date Night in Istanbul.'
    },
    hero: {
      h1: 'Bosporus-Tour für Paare',
      subtitle: 'Eine Date Night auf dem Bosporus — privater Tisch, Livemusik, beleuchtete Brücken über Ihnen. Ob Ihr erstes Date in Istanbul oder Ihr zehnter Jahrestag, dieser Abend funktioniert.',
      badge: 'Privater Tisch · Livemusik · Zahlung an Bord'
    },
    intro: [
      'Eine **Bosporus-Tour für Paare** ist Istanbuls beliebteste Date Night. Nicht jedes Paar feiert einen Jahrestag — manchmal sind Sie in der romantischsten Stadt der Welt und möchten einen tollen Abend zusammen. Diese Tour bietet: einen privaten Tisch für zwei, ein langsames mehrgängiges türkisches Dinner, Live-Violine und akustische Musik während des Essens und die langsam vorbeiziehende beleuchtete Bosporus-Brücke.',
      'Die Atmosphäre ist **herzlich, aber nicht übertrieben romantisch** — keine aufgezwungene Antragsmusik, kein peinliches koordiniertes Klatschen für „Neuvermählte“. Sie essen, trinken, unterhalten sich, beobachten Istanbuls Lichter. Wenn Sie ein romantisches Tischarrangement hinzufügen möchten (Kerzen, Rosen, +€{p.romantic}), großartig — wenn nicht, ist nur das Dinner bereits etwas Besonderes.',
      'Ob Sie drei Tage mit Ihrem Partner in Istanbul sind, einen kleinen Meilenstein feiern oder eine zukünftige Antragsreise planen — die **Bosporus-Tour für Paare** gibt Ihnen einen 3-stündigen Abend zu zweit in einer der meistfotografierten Städte der Welt. 4,8★, Zahlung an Bord, kostenlose Stornierung.'
    ],
    highlights: [
      { title: 'Privater Tisch für zwei', desc: 'Reservierter 2-Personen-Tisch, nicht geteilt. Paare haben Vorrang bei Fenstertischen. Sonnenuntergangs- und Nacht-Bosporus-Fotos direkt vor Ihrem Fenster.' },
      { title: 'Entspanntes mehrgängiges Dinner', desc: '10 türkische Mezze-Sorten, warme Vorspeise, Hauptgang (Lachs, Wolfsbarsch, Hähnchen, Köfte oder vegetarisch), Eisbomben-Dessert. Langsam serviert über 3 Stunden — Sie werden nicht gehetzt.' },
      { title: 'Live-Violine und sanfte Musik', desc: 'Live-Violine und akustische türkische Musik während des Dinners schaffen eine intime Atmosphäre, geeignet für Gespräche. Später übernimmt der DJ für Paare, die tanzen möchten.' },
      { title: 'Extras für besondere Abende', desc: 'Romantisches Tischarrangement (Kerzen, Rosen): +€{p.romantic}. Unbegrenzt lokaler Alkohol (Wein, Raki): +€{p.unlimited}/Person. Hoteltransfer (hin und zurück): +€{p.transfer}/Person. Wählen Sie, was zu Ihrem Abend passt.' }
    ],
    faq: [
      { q: 'Ist diese Bosporus-Tour für eine normale Date Night geeignet, nicht für einen besonderen Anlass?', a: 'Ja — die meisten unserer Paare feiern nichts Bestimmtes, sie haben einfach eine tolle Date Night. Die Atmosphäre ist herzlich und einladend, ohne übertrieben zu sein. Sie können ein romantisches Tischarrangement (+€{p.romantic}) hinzufügen, wenn Sie Extras wünschen, oder einfach den Standardabend genießen.' },
      { q: 'Wie viel kostet die Bosporus-Tour für 2 Personen?', a: '2 Personen Standard: 2 × €{p.dinnerStd} = €48. 2 Personen VIP: 2 × €{p.dinnerVip} = €110. Hoteltransfer für beide: +€{p.transfer}×2 = €20. Unbegrenzter Alkohol für beide: +€{p.unlimited}×2 = €60. Keine Vorauszahlung — Zahlung an Bord.' },
      { q: 'Können Paare ihren eigenen Wein oder Champagner mitbringen?', a: 'Wir erlauben keinen Alkohol von außen (aus Lizenzgründen). Aber wir haben unbegrenzt lokalen Wein (+€{p.unlimited}/Person) und können Premium-Importweine oder Champagner gegen Aufpreis arrangieren — fragen Sie bei der Buchung. Prosecco, Chianti und Cabernet sind beliebte Premium-Anfragen.' },
      { q: 'Ist es in Ordnung, wenn wir keinen Alkohol trinken — sind wir ungewöhnlich?', a: 'Ganz und gar nicht — viele Paare lassen Alkohol ganz weg, entweder aus Halal-Gründen oder einfach aus Vorliebe. Unbegrenzte alkoholfreie Getränke (Wasser, Säfte, Cola) sind inklusive. Niemand schaut zweimal hin, wenn Ihr Tisch alkoholfrei ist. Viele muslimische Paare aus Saudi-Arabien, dem Iran und Indonesien buchen diese Tour.' },
      { q: 'Wann ist die Bosporus-Tour für Paare am besten — Sonnenuntergang oder Nacht?', a: 'Die Nachttour (Abfahrt 21:00) ist die ikonischste — beleuchtete Brücken, Reflexionen auf dem Wasser, angestrahlte Paläste. Die Sonnenuntergangstour (Abfahrt 17:30) ist früher und bietet Schönheit der goldenen Stunde, aber die Dinner-Cruise ist speziell um 21:00. Wenn Sie beide möchten, buchen die meisten Paare die Sonnenuntergangs- und Nachttouren an verschiedenen Tagen.' },
      { q: 'Gibt es eine Tanzfläche — können wir tanzen?', a: 'Ja — nach dem Dinner-Service (~22:30) beginnt der DJ, und das Oberdeck wird zum Tanzbereich. Viele Paare tanzen unter den Lichtern zu langsamen Songs mit der Bosporus-Brücke im Hintergrund. Einige der besten Fotos, die Sie in Istanbul machen.' }
    ],
    cta: {
      primary: 'Date Night buchen · Zahlung an Bord',
      secondary: 'Romantisches Arrangement (+€{p.romantic}) hinzufügen · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Romantische Bosporus-Cruise ansehen'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Bosporus-Sonnenuntergangscruise — Goldene Stunde und Dinner | Istanbul',
      description: 'Bosporus-Sonnenuntergangscruise in Istanbul. Einsteigen um 17:30, erleben Sie, wie Dolmabahçe und die Ortaköy-Moschee im goldenen Licht erstrahlen, während das Dinner in die beleuchtete Nacht übergeht. 3-stündige Tour, ab €35/Person.'
    },
    hero: {
      h1: 'Bosporus-Sonnenuntergangscruise',
      subtitle: 'Die magische Stunde auf dem Bosporus — beobachten Sie, wie die Sonne hinter Minarett-Silhouetten untergeht, während Sie an Dolmabahçe, der Ortaköy-Moschee und der Bosporus-Brücke vorbeifahren, die sich für die Nacht beleuchtet.',
      badge: 'Goldene Stunde · 17:30 Abfahrt · Beste Fotos'
    },
    intro: [
      'Die **Bosporus-Sonnenuntergangscruise** erfasst Istanbul von seiner fotogensten Seite. Steigen Sie um 17:30 ein, und innerhalb von 20 Minuten beginnt die Sonne hinter den europäischen Minaretten zu versinken — sie färbt den Dolmabahçe-Palast golden, bringt das Bosporus-Wasser zum Kupferton und lässt die Ortaköy-Moschee als Silhouette vor einem leuchtenden Himmel erscheinen. Jedes Smartphone-Foto dieser Tour sieht aus wie ein Profi-Shot.',
      'Unsere **Sonnenuntergangs-Bosporus-Cruise** beinhaltet ein komplettes türkisches Dinner, das während der goldenen Stunde beginnt und weiter serviert wird, während sich die Brücken für die Nacht beleuchten. Wenn das Dessert kommt, segeln Sie unter einer beleuchteten Bosporus-Brücke — 30 Millionen Lichter spiegeln sich auf dunklem Wasser. Der Übergang von Tag zu Nacht, verpackt in 3 Stunden, das ist das ganze Ereignis.',
      'Ob Sie ein Fotograf auf der Jagd nach der goldenen Stunde, ein Reisender, der das Beste aus Tag und Nacht möchte, oder ein Paar auf der Suche nach dem „Istanbul-Moment-Foto“ sind — dies ist die **Bosporus-Sonnenuntergangs-Dinner-Cruise**, die Besuchern empfohlen wird. 4,8★ Bewertung, TÜRSAB-lizenziert, Zahlung an Bord, keine Vorauszahlung.'
    ],
    highlights: [
      { title: 'Goldene Stunde auf dem Höhepunkt — Abfahrt 17:30', desc: 'Einsteigen um 17:30, Sonnenuntergang findet im Sommer gegen 18:30 / im Winter gegen 17:00 statt. Die ersten 40 Minuten der Tour sind die goldene Stunde, die Sie suchen. Kamera bereit — das ist der Shot.' },
      { title: 'Tag-zu-Nacht-Übergang inklusive', desc: 'Nicht nur Sonnenuntergang — wir segeln in die Dämmerung, dann auf den beleuchteten Bosporus. Sie sehen 3 verschiedene Lichtphasen auf einer Tour: golden, blaue Stunde und voll beleuchtete Nacht.' },
      { title: 'Komplettes Dinner während der Tour', desc: '10 türkische Mezze-Sorten, warme Vorspeise, Hauptgang (Lachs, Wolfsbarsch, Hähnchen, Köfte, vegetarisch), Eisbomben-Dessert. Gleiches Qualitätsmenü wie bei der Nachttour, serviert während des Sonnenuntergangs.' },
      { title: 'Dolmabahçe, Ortaköy, Bosporus-Brücke — alle leuchten', desc: 'Die Route führt am Dolmabahçe-Palast (golden bei Sonnenuntergang), der Ortaköy-Moschee (silhouettierte Kuppel), der Bosporus-Brücke (wird beleuchtet), Rumeli Hisarı, dem Beylerbeyi-Palast vorbei. Jedes Wahrzeichen im besten Licht.' }
    ],
    faq: [
      { q: 'Wann legt die Bosporus-Sonnenuntergangscruise ab?', a: 'Das Einsteigen beginnt um 17:00, das Schiff legt um 17:30 ab und kehrt gegen 20:30 zurück. Wir timen dies so, dass der Sonnenuntergang genau dann auf dem Wasser stattfindet — es variiert saisonal (Sommer 18:30, Winter 17:00). Wir passen die Abfahrt saisonal um 15–30 Minuten an.' },
      { q: 'Ist die Bosporus-Sonnenuntergangscruise dasselbe wie die Dinner-Cruise?', a: 'Ähnlich, aber unterschiedliche Zeit. Die Sonnenuntergangscruise fährt um 17:30 ab, mit Dinner-Service während der Tour (goldene Stunde + früher Abend). Die Dinner-Cruise ist um 21:00 — nach Einbruch der Dunkelheit, reine Nachtansichten. Gleiches Schiff, gleiches Menü, gleiche Unterhaltung — nur andere Beleuchtung. Einige Gäste machen beide an verschiedenen Tagen.' },
      { q: 'Wie viel kostet die Bosporus-Sonnenuntergangscruise?', a: 'Die Standard-Sonnenuntergangscruise ab €35/Person (3 Stunden, komplettes Dinner, Live-Unterhaltung). VIP-Option mit Plätzen nahe der Bühne und Premium-Mezze €55/Person. Zahlung an Bord — keine Vorauszahlung. 0–3 Jahre gratis, 4–8 Jahre halber Preis.' },
      { q: 'Ist die Sonnenuntergangscruise besser als die Dinner-Cruise (Nacht)?', a: '„Besser“ hängt davon ab, was Sie möchten. Sonnenuntergang = beste Fotos, goldenes Licht, langsameres Tempo, früherer Abend. Nacht = ikonischste Lichter (beleuchtete Brücken), beste Unterhaltung, späteres Dinner. Fotografen wählen Sonnenuntergang. Date-Night-Paare wählen Nacht. Familien mit Kindern wählen meist Sonnenuntergang (endet früher).' },
      { q: 'Was soll ich zur Sonnenuntergangscruise mitbringen?', a: 'Smartphone oder Kamera für Fotos (die goldene Stunde verlangt danach). Leichte Jacke — Wind nimmt bei Sonnenuntergang zu, und das Deck kann am frühen Abend schnell abkühlen. Sonnenbrille für die ersten 30 Minuten. Smart-Casual-Kleidung — Sie essen, aber keine strikte Kleiderordnung.' },
      { q: 'Kann ich an der Tour teilnehmen, um die beleuchteten Brücken nachts zu sehen?', a: 'Die Sonnenuntergangscruise dauert 3 Stunden (17:30–20:30), sodass Sie am Ende die voll beleuchtete Bosporus-Brücke und den beleuchteten Mädchenturm sehen. Für die SPITZEN-Nachtansichten (21:00–00:00, alle Restaurants und Wahrzeichen voll beleuchtet) buchen Sie die Dinner-Cruise um 21:00. Das Beste aus beiden: Buchen Sie beide an verschiedenen Abenden.' }
    ],
    cta: {
      primary: 'Sonnenuntergangs-Tour buchen · Zahlung an Bord',
      secondary: 'Abfahrt 17:30 · Sonnenuntergang + Dinner inklusive · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Nacht-Dinner-Cruise ansehen (21:00)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Bosporus-Nachttour — Beleuchtete Istanbul-Dinner-Cruise',
      description: 'Bosporus-Nachttour mit Dinner und Live-Show. Abfahrt 21:00, beleuchtete Brücken, türkische Volkstänze, 3 Stunden auf dem Wasser. Ab €{p.dinnerStd}/Person — Zahlung an Bord.'
    },
    hero: {
      h1: 'Bosporus-Nachttour',
      subtitle: 'Istanbuls beleuchtete Brücken, angestrahlte Paläste und Bosporus-Wasser wie ein Spiegel, das 30 Millionen Lichter reflektiert — die Nachttour, die den Istanbuler Abend definiert.',
      badge: 'Beleuchtete Brücken · Live-Show · Dinner inklusive'
    },
    intro: [
      'Die **Bosporus-Nachttour** ist die meistempfohlene Abendaktivität in Istanbul. Der Grund: Nach Einbruch der Dunkelheit verwandelt sich der Bosporus. Die Bosporus-Brücke wechselt zwischen Blau, Violett und Gold. Der Dolmabahçe-Palast leuchtet warm gelb. Die Ortaköy-Moschee spiegelt sich perfekt auf schwarzem Wasser. Jedes Istanbuler Wahrzeichen erreicht seinen dramatischen Höhepunkt in der Nacht.',
      'Unsere **Bosporus-Nachttour mit Dinner** packt den kompletten ikonischen Abend: 3 Stunden auf dem Wasser (21:00–00:00), ein mehrgängiges türkisches Festmahl, Live-Folklore (Sema, 5 Volkstänze, orientalischer Tanz), Livemusik und ein DJ-Set, das das Deck bis zum Ende des Abends lebendig hält. Jeder Gast erhält das gleiche Programm — keine „Basic“-Option, die die besten Teile auslässt.',
      'Ob es Ihr erster Istanbul-Besuch ist und Sie nach „der einen Sache, die man abends machen muss“ suchen, oder ob Sie schon einmal hier waren und die fotogensten 3 Stunden der Stadt möchten, dies ist die **Bosporus-Nachttour**, bewertet mit 4,8★ von über 11.317 Reisenden. TÜRSAB-lizenziert, Zahlung an Bord, keine Vorauszahlung.'
    ],
    highlights: [
      { title: 'Bosporus auf dem Höhepunkt dramatisch beleuchtet', desc: 'Die Bosporus-Brücke wechselt die Farben (blau, violett, gold), Paläste leuchten gelb, die Ortaköy-Moschee spiegelt sich auf schwarzem Wasser. 21:00–00:00 ist die Spitzenbeleuchtungszeit für alle Istanbuler Wahrzeichen.' },
      { title: 'Traditionelle türkische Show an Bord', desc: 'Sema-Vorführung, 5 traditionelle Volkstänze (aus verschiedenen Regionen der Türkei), orientalischer Tanz, türkische Livemusik, gefolgt von einem DJ-Set. 40 Minuten Aufführung, dann geht die Musik + Dinner weiter.' },
      { title: 'Komplettes mehrgängiges Dinner', desc: '10 türkische Mezze-Sorten, warme Vorspeise (Paçanga Böreği), Hauptgang (Lachs, Wolfsbarsch, Hähnchen, Köfte, vegetarisch — Ihre Wahl), Dessert (Eisbombe), unbegrenzte alkoholfreie Getränke. Halal-zertifiziert.' },
      { title: 'Komplette Bosporus-Route', desc: 'Kabataş → Dolmabahçe → Çırağan-Palast → Ortaköy-Moschee → Bebek → Rumeli Hisarı → Fatih-Sultan-Mehmet-Brücke → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Mädchenturm → Kabataş.' }
    ],
    faq: [
      { q: 'Wann findet die Bosporus-Nachttour statt?', a: 'Einsteigen ab 20:00 Uhr am Kabataş-Pier. Das Schiff legt um 21:00 ab und kehrt gegen 00:00 (Mitternacht) zurück. Wir empfehlen, 20 Minuten früher einzutreffen, um sich einzurichten und einen Sitzplatz zu wählen.' },
      { q: 'Wie viel kostet die Bosporus-Nachttour?', a: 'Standard-Nachttour (3 Stunden, Dinner, Show): €{p.dinnerStd}/Person (vorher €{p.dinnerStdOriginal}). VIP mit Plätzen nahe der Bühne und Premium-Menü: €{p.dinnerVip}/Person (vorher €{p.dinnerVipOriginal}). 0–3 Jahre gratis, 4–8 Jahre halber Preis. Zahlung an Bord.' },
      { q: 'Was ist der Unterschied zwischen Bosporus-Nachttour und Dinner-Cruise?', a: 'Dasselbe, anderes Keyword. „Bosporus-Nachttour“ ist, wie viele Reisende suchen; „Dinner-Cruise“ ist der Branchenbegriff. Gleiches Schiff, gleiches 3-stündiges Programm, gleiches Menü, gleiche Show. Welchen Suchbegriff Sie auch bevorzugen — das Erlebnis ist identisch.' },
      { q: 'Ist die Bosporus-Nachttour die Sonnenuntergangstour wert?', a: 'Nachttour = beleuchtetes Istanbul, dramatischer Höhepunkt der Beleuchtung, komplettes Unterhaltungsprogramm, ikonischste Fotos der beleuchteten Brücken. Sonnenuntergang = goldene Stunde, langsameres Tempo, endet um 20:30. Wenn Sie nur eine machen: Die Nachttour ist ikonischer. Viele machen beide an verschiedenen Tagen.' },
      { q: 'Kann ich die Bosporus-Nachttour an meinem ersten Tag in Istanbul machen?', a: 'Ja — wir empfehlen es. Viele Reisende buchen die Nachttour für ihren ersten Abend, weil sie eine komplette Orientierung bietet: alle Hauptwahrzeichen vom Wasser, gutes Essen und Unterhaltung. Einfacher mit Jetlag als Sightseeing am Tag 1. Hoteltransfer aus den zentralen Bezirken verfügbar.' },
      { q: 'Ich spreche kein Türkisch — ist die Tour auf Englisch?', a: 'Die Crew spricht Englisch. Die Unterhaltung (Sema, Volkstänze, Musik) erfordert keine Sprache. Die Speisekarte ist auf Englisch. Die Buchung über WhatsApp / Telegram / WeChat funktioniert in mehreren Sprachen (Englisch, Arabisch, Russisch, Deutsch, Französisch, Spanisch). Kein Türkisch erforderlich.' }
    ],
    cta: {
      primary: 'Nachttour buchen · Zahlung an Bord',
      secondary: 'Abfahrt 21:00 · 3 Stunden · Dinner + Show inklusive · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Dinner-Cruise Istanbul — Premium Bosporus-Nachttour, ab €{p.dinnerStd}',
      description: 'Istanbuls bestbewertete Bosporus-Dinner-Cruise. 3-stündiger Abend, türkisches Festmahl, Live-Folklore, beleuchtete Brücken. TÜRSAB-lizenziert, Zahlung an Bord, keine Vorauszahlung.'
    },
    hero: {
      h1: 'Dinner-Cruise Istanbul',
      subtitle: 'Die beste Dinner-Cruise in Istanbul — 3 Stunden auf dem Bosporus, mehrgängiges türkisches Festmahl, Live-Unterhaltung und nächtliche Ausblicke auf die ikonischsten Wahrzeichen der Stadt.',
      badge: '4,8★ · 11.317 Bewertungen · TÜRSAB A-17672'
    },
    intro: [
      'Suchen Sie eine **Dinner-Cruise in Istanbul**? Sie haben gefunden, was die meisten Reisenden empfehlen. Unser 3-stündiger Abend auf dem Bosporus vereint ein komplettes mehrgängiges türkisches Essen, Live-Folklore und die fotogensten Ausblicke der Stadt — alles von einem entspannten Schiff, das um 21:00 Uhr vom Kabataş-Pier ablegt.',
      'Das **Dinner-Cruise Istanbul**-Erlebnis: Einsteigen um 20:00, einrichten, beobachten, wie Sie am Dolmabahçe-Palast vorbeifahren, Dinner beginnt bei der Annäherung an die Ortaköy-Moschee, Show startet (Sema, Volkstänze, orientalisch), beim Dessert sind Sie unter der beleuchteten Bosporus-Brücke. Kehren Sie um Mitternacht mit einer ikonischen Foto-Collage und einem vollen Magen nach Kabataş zurück.',
      '€{p.dinnerStd}/Person für die Standardtour (vorher €{p.dinnerStdOriginal}) oder €{p.dinnerVip}/Person für VIP mit Plätzen nahe der Bühne (vorher €{p.dinnerVipOriginal}). Zahlung an Bord — keine Vorauszahlung, kein Risiko. TÜRSAB A-17672 lizenziert, 4,8★ von über 11.317 Reisenden.'
    ],
    highlights: [
      { title: 'Komplettes mehrgängiges türkisches Dinner', desc: '10 Mezze-Sorten, warme Vorspeise, Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte/vegetarisch), Eisbomben-Dessert. Halal-zertifiziert. Unbegrenzte alkoholfreie Getränke inklusive.' },
      { title: 'Live-türkische Folkloreshow', desc: 'Sema-Vorführung, 5 traditionelle Volkstänze, orientalischer Tanz, türkische Livemusik, DJ. 40 Minuten Aufführung, Hintergrundmusik geht weiter.' },
      { title: 'Komplette Bosporus-Nachtroute', desc: '3-stündige Tour: Dolmabahçe, Çırağan, Ortaköy-Moschee, Bosporus-Brücke, Bebek, Rumeli Hisarı, FSM-Brücke, Beylerbeyi, Üsküdar, Mädchenturm. Sowohl europäische als auch asiatische Seite.' },
      { title: 'Ab €{p.dinnerStd} — Zahlung an Bord', desc: 'Standard: €{p.dinnerStd} (vorher €{p.dinnerStdOriginal}). VIP mit Premium-Menü: €{p.dinnerVip} (vorher €{p.dinnerVipOriginal}). Keine Vorauszahlung. Kostenlose Stornierung bis 2 Stunden vor Abfahrt.' }
    ],
    faq: [
      { q: 'Wie viel kostet eine Dinner-Cruise in Istanbul?', a: 'Unsere Standard-Dinner-Cruise kostet €{p.dinnerStd}/Person (regulärer Preis €{p.dinnerStdOriginal}). VIP mit Plätzen nahe der Bühne und Premium-Menü kostet €{p.dinnerVip}/Person (regulärer Preis €{p.dinnerVipOriginal}). 0–3 Jahre gratis, 4–8 Jahre 50 % Ermäßigung. Zahlung an Bord — keine Vorauszahlung.' },
      { q: 'Was ist im Preis einer Dinner-Cruise Istanbul enthalten?', a: '3-stündige Bosporus-Tour, mehrgängiges türkisches Dinner (Mezze, warme Vorspeise, Hauptgang, Dessert), unbegrenzte alkoholfreie Getränke, Live-Folkloreshow (Sema, Volkstänze, orientalisch), Livemusik + DJ, Zugang zum Oberdeck, Steuern inklusive. Hoteltransfer und Alkohol sind optionale Extras.' },
      { q: 'Wo startet die Dinner-Cruise Istanbul?', a: 'Kabataş-Pier, Istanbul — auf der europäischen Seite, neben dem Dolmabahçe-Palast. Der genaue Treffpunkt wird nach der Buchung per WhatsApp / Telegram / WeChat geteilt. Gehvideos von der Dolmabahçe-Straßenbahnhaltestelle und dem Kabataş-Tram-Bahnhof finden Sie im Abschnitt Treffpunkt oben.' },
      { q: 'Wie lange dauert die Dinner-Cruise — und wann beginnt sie?', a: 'Insgesamt 3 Stunden. Einsteigen ab 20:00, Schiff legt pünktlich um 21:00 ab, Rückkehr gegen 00:00 (Mitternacht). Wir empfehlen, 15–20 Minuten früher einzutreffen, um sich einzurichten und Ihren Sitzplatz zu wählen.' },
      { q: 'Muss ich im Voraus buchen, oder kann ich einfach kommen?', a: 'Im Voraus buchen — die Plätze füllen sich, besonders an Wochenenden und Feiertagen. Gleichtagsbuchungen sind oft möglich, aber nicht garantiert. Der Assistent auf dieser Seite bringt Sie in weniger als einer Minute zu einem Platz. Zahlung an Bord, also kein finanzielles Risiko beim frühen Buchen.' },
      { q: 'Ist die Dinner-Cruise Istanbul für vegetarische / halal / diätetische Einschränkungen geeignet?', a: 'Ja — alles Fleisch ist halal-zertifiziert. Vegetarische Hauptgänge (Falafel, Bratkartoffeln, Bulgur-Pilaw, Gemüseeintopf, Zwiebelringe) ohne Aufpreis verfügbar. Allergien können bei Angabe bei der Buchung berücksichtigt werden. Alkohol ist ein optionales Extra, wird nie aufgedrängt.' }
    ],
    cta: {
      primary: 'Dinner-Cruise buchen · Zahlung an Bord',
      secondary: '4,8★ · TÜRSAB-lizenziert · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Istanbul-Nachttour — Bestes Abenderlebnis auf dem Bosporus',
      description: 'Istanbuls bestbewertete Nachttour: 3-stündige Bosporus-Cruise mit Dinner, Live-Folklore und beleuchteten Brücken. 4,8★, TÜRSAB-lizenziert, Zahlung an Bord. Der definitive Istanbuler Abend.'
    },
    hero: {
      h1: 'Istanbul-Nachttour',
      subtitle: 'Die Nachttour, die Einheimische in Istanbul zuerst empfehlen — eine 3-stündige Bosporus-Cruise mit Dinner, Live-Unterhaltung und den ikonischsten beleuchteten Ausblicken der Stadt.',
      badge: 'Ikonischer Istanbuler Abend · 3 Stunden · Dinner inklusive'
    },
    intro: [
      'Eine **Istanbul-Nachttour** sollte drei Dinge leisten: Ihnen die ikonischen Ausblicke der Stadt zeigen, Sie gut verköstigen und Sie unterhalten. Unsere Bosporus-Dinner-Cruise macht alle drei an einem einzigen 3-stündigen Abend — und deshalb empfehlen die meisten Istanbul-Reiseführer sie als die Nr. 1 Nachttour-Erfahrung.',
      'Die Route der **Istanbul-Nachttour** deckt die beste beleuchtete Sehenswürdigkeiten ab: Dolmabahçe-Palast, Ortaköy-Moschee, Bosporus-Brücke (wechselt Farben), Bebek-Viertel, Rumeli Hisarı, FSM-Brücke, Beylerbeyi-Palast, das asiatische Ufer von Üsküdar und der Mädchenturm in der Ferne. Die meisten Stadtführungen zeigen Ihnen diese vom Bus — wir zeigen sie vom Wasser, von wo sie am dramatischsten sind.',
      'Dinner inklusive (mehrgängiges türkisches Menü), eine Live-türkische Folkloreshow, Sema, orientalischer Tanz und DJ-Set. Wenn Sie 2–3 Tage in Istanbul sind, ist dies der eine Abend, der am meisten bietet. 4,8★ von über 11.317 Reisenden, Zahlung an Bord, keine Vorauszahlung.'
    ],
    highlights: [
      { title: 'Alle ikonischen Istanbuler Nachtansichten', desc: 'Dolmabahçe-Palast, Ortaköy-Moschee, beleuchtete Bosporus-Brücke, Rumeli Hisarı, FSM-Brücke, Beylerbeyi-Palast, Mädchenturm. Jedes Hauptwahrzeichen in Spitzennachtbeleuchtung.' },
      { title: 'Komplettes türkisches Dinner inklusive', desc: '10 Mezze, warme Vorspeise, Hauptgang (Lachs/Wolfsbarsch/Hähnchen/Köfte/vegetarisch), Dessert, unbegrenzte alkoholfreie Getränke. Halal-zertifiziert. Preis von €{p.dinnerStd}/Person — alles inklusive.' },
      { title: 'Live-Folklore + Sema + orientalisch', desc: 'Traditionelle türkische Unterhaltung: Mevlana-Sema-Vorführung, 5 regionale Volkstänze, orientalischer Tanz, Livemusik, DJ. 40 Minuten Aufführung, den ganzen Abend Hintergrundmusik.' },
      { title: 'Einfach für Istanbul-Erstbesucher', desc: 'Zentraler Treffpunkt (Kabataş-Pier), Hoteltransfer (+€{p.transfer}/Person), englischsprachige Crew, Zahlung an Bord. Null Logistikstress. Kommen, genießen, gehen.' }
    ],
    faq: [
      { q: 'Was ist die beste Nachttour in Istanbul?', a: 'Die Bosporus-Dinner-Cruise wird konsequent als Nr. 1 eingestuft. Gründe: (1) Sie zeigt alle ikonischen Nachtansichten vom Wasser, (2) sie kombiniert Dinner und Show in einem Paket, (3) 3 Stunden sind ausreichend, um viel zu sehen, ohne müde zu werden, (4) zentraler Treffpunkt, (5) Zahlung an Bord reduziert Buchungsreibung. Die meisten Istanbul-Reiseführer empfehlen sie als „die eine Pflichtaktivität bei Nacht“.' },
      { q: 'Wie viel kostet die Istanbul-Nachttour?', a: 'Unsere Bosporus-Nacht-Dinner-Cruise: Standard €{p.dinnerStd}/Person, VIP €{p.dinnerVip}/Person. Tour, Dinner, Unterhaltung, alkoholfreie Getränke inklusive. Optional: Alkohol +€{p.unlimited}/Person, Hoteltransfer +€{p.transfer}/Person. Zahlung an Bord — keine Vorauszahlung.' },
      { q: 'Ist die Istanbul-Nachttour sicher für Alleinreisende?', a: 'Ja — sehr sicher. TÜRSAB-lizenziertes Schiff, professionelle englischsprachige Crew, CCTV an Deck, Rettungswesten verfügbar. Viele Alleinreisende buchen diese Tour. Sie essen entweder an einem gemeinschaftlichen oder privaten Tisch (Ihre Wahl), und der Abend ist einladend — treffen Sie andere Reisende, wenn Sie wollen, oder bleiben Sie für sich.' },
      { q: 'Was ist die beste Zeit für eine Nachttour in Istanbul?', a: 'Unsere Bosporus-Dinner-Cruise findet von 21:00–00:00 statt (3 Stunden). Das ist die Spitzenbeleuchtungszeit für alle Istanbuler Wahrzeichen — Brücken voll beleuchtet, Paläste leuchtend, Mond auf dem Wasser. Wenn Sie früher möchten (goldene Stunde), denken Sie stattdessen an die 17:30 Sonnenuntergangscruise.' },
      { q: 'Wie komme ich zum Treffpunkt der Istanbul-Nachttour?', a: 'Der Treffpunkt ist der Kabataş-Pier (zentrale europäische Seite, neben dem Dolmabahçe-Palast). Mit der Straßenbahn: T1 zur Kabataş-Station (Endhaltestelle). Mit dem Taxi: ~15 Min. vom Taksim. Zu Fuß: 20 Min. vom Taksim die İnönü-Straße hinunter. Auf dieser Seite finden Sie Videos mit Wegbeschreibungen. Hoteltransfer verfügbar für +€{p.transfer}/Person, wenn Sie es bevorzugen.' },
      { q: 'Kann ich die Istanbul-Nachttour am selben Tag buchen?', a: 'Oft ja, besonders an Wochentagen. Wochenenden füllen sich schneller. Der Buchungsassistent auf dieser Seite ermöglicht es Ihnen, die Verfügbarkeit für heute Abend zu prüfen und in weniger als einer Minute zu buchen. Für dringende Gleichtagsanfragen schreiben Sie uns auf WhatsApp unter +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Nachttour buchen · Zahlung an Bord',
      secondary: 'Ab €{p.dinnerStd}/Person · Dinner + Show inklusive · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Istanbul-Bootstour — Bosporus-Cruise mit Dinner und Show',
      description: 'Istanbuls beste Bootstour: 3-stündige Bosporus-Cruise mit komplettem Dinner, Live-Folklore und beleuchteten Nachtansichten. Ab €{p.dinnerStd}/Person, Zahlung an Bord, 4,8★ Bewertung.'
    },
    hero: {
      h1: 'Istanbul-Bootstour',
      subtitle: 'Die meistgebuchte Istanbul-Bootstour — eine Bosporus-Cruise mit türkischem Dinner, Live-Unterhaltung und ikonischen Ansichten der Stadt vom Wasser aus.',
      badge: '4,8★ · TÜRSAB A-17672 · Zahlung an Bord'
    },
    intro: [
      'Wenn Sie nach einer „Istanbul-Bootstour“ suchen, suchen Sie nach der einen Sache, die die Stadt vom Wasser aus definiert: dem Bosporus. Unsere 3-stündige Bosporus-Bootstour führt Sie an jedem Istanbuler Hauptwahrzeichen vorbei — Dolmabahçe-Palast, Ortaköy-Moschee, Bosporus-Brücke, Rumeli Hisarı, Beylerbeyi-Palast und Mädchenturm — mit einem kompletten türkischen Dinner und Live-Unterhaltung.',
      'Im Gegensatz zu vielen 1-stündigen Sightseeing-Fähren, die weniger vom Bosporus abdecken und Dinner und Unterhaltung weglassen, ist unsere **Istanbul-Bootstour** das komplette Abenderlebnis: Einsteigen am Kabataş-Pier um 20:00, Tour bis Mitternacht, 10 Mezze, Hauptgang, Dessert, Sema, Volkstänze, orientalischer Tanz und DJ. Sie bekommen die Tour UND den Abend.',
      'Ob Sie eine Nacht in Istanbul haben oder eine ganze Woche, diese **Istanbul-Bootstour** macht die Arbeit. 4,8★ von über 11.317 Reisenden, TÜRSAB-lizenziert (A-17672), halal-zertifiziertes Menü und Zahlung an Bord — keine finanzielle Verpflichtung, bis Sie mit dem Erlebnis zufrieden sind.'
    ],
    highlights: [
      { title: 'Alle Haupt-Bosporus-Wahrzeichen', desc: 'Dolmabahçe, Çırağan, Ortaköy-Moschee, Bosporus-Brücke, Bebek, Rumeli Hisarı, FSM-Brücke, Beylerbeyi-Palast, Üsküdar, Mädchenturm. Sowohl europäische als auch asiatische Ufer in einer Tour.' },
      { title: 'Dinner + Show inklusive', desc: 'Nicht nur eine Bootstour — komplettes mehrgängiges türkisches Dinner, Live-Folklore-Aufführungen, Sema, orientalischer Tanz, DJ. Was die 3 Stunden unterhaltsam macht, nicht nur Sightseeing.' },
      { title: 'Abendabfahrt (beste Beleuchtung)', desc: 'Abfahrt 21:00 erfasst den Bosporus voll beleuchtet — Brücken, Paläste, Moscheen alle erleuchtet. Dramatischer als Tagestouren, die dieselben Wahrzeichen bei flachem Licht zeigen.' },
      { title: 'Einfache Buchung, einfache Zahlung', desc: 'Buchen Sie in weniger als 1 Minute mit dem Assistenten auf dieser Seite. Zahlung an Bord — keine Vorauszahlung. Hoteltransfer verfügbar ab +€{p.transfer}/Person. Kostenlose Stornierung bis 2 Stunden vor Abfahrt.' }
    ],
    faq: [
      { q: 'Was ist die beste Bootstour in Istanbul?', a: 'Die Bosporus-Dinner-Cruise wird konsequent als Nr. 1 eingestuft. Sie deckt alle Hauptwahrzeichen ab, beinhaltet Dinner und Unterhaltung und läuft abends, wenn die Wahrzeichen beleuchtet sind. Andere Optionen (Hop-on-Fähren, morgendliche Sightseeing-Boote) decken kürzere Routen ab, lassen Dinner aus und beinhalten keine Unterhaltung. Dies ist die umfassendste Bootstour für einen Istanbuler Abend.' },
      { q: 'Wie lange dauert die Istanbul-Bootstour?', a: '3 Stunden. Einsteigen ab 20:00 am Kabataş-Pier, Abfahrt 21:00, Rückkehr ~00:00. Deckt den kompletten Bosporus von Dolmabahçe nach Rumeli Hisarı und zurück ab. Genug Zeit für ein komplettes Dinner + Show, ohne müde zu werden.' },
      { q: 'Wie viel kostet eine Istanbul-Bootstour?', a: 'Unsere Dinner-Bootstour: Standard €{p.dinnerStd}/Person (vorher €{p.dinnerStdOriginal}), VIP mit Premium-Menü €{p.dinnerVip}/Person (vorher €{p.dinnerVipOriginal}). 0–3 Jahre gratis, 4–8 Jahre halber Preis. Zahlung an Bord. Alkohol und Hoteltransfer sind optionale Extras.' },
      { q: 'Wo starten Istanbul-Bootstouren?', a: 'Unser Schiff startet vom Kabataş-Pier im zentralen europäischen Teil Istanbuls, neben dem Dolmabahçe-Palast. Erreichbar mit T1-Straßenbahn (Kabataş-Station), 15 Min. Taxi vom Taksim oder 20 Min. zu Fuß vom Taksim. Hoteltransfer verfügbar aus zentralen Bezirken für +€{p.transfer}/Person.' },
      { q: 'Ist diese Bootstour für Familien mit Kindern geeignet?', a: 'Ja — sehr familienfreundlich. Kinder 0–3 Jahre gratis, 4–8 Jahre 50 % Ermäßigung. Geschützter Innenbereich, Kindermenü auf Anfrage und Unterhaltung (Sema, Volkstänze) sind ansprechend für Kinder. Viele Familien aus aller Welt buchen diese Tour.' },
      { q: 'Muss ich etwas zur Bootstour mitbringen?', a: 'Reisepass oder Personalausweis (für die Bootsregistrierung), leichte Jacke (das Deck kann kühl sein), bequeme Schuhe, wenn Sie tanzen möchten. Smartphone für Fotos. Bargeld oder Karte für die Zahlung an Bord (beide akzeptiert). Alles andere — Dinner, Getränke, Unterhaltung — ist an Bord.' }
    ],
    cta: {
      primary: 'Bootstour buchen · Zahlung an Bord',
      secondary: '3 Stunden · Dinner + Show · Ab €{p.dinnerStd}/Person · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Bosporus-Ausflug — Premium-Istanbul-Tour-Erlebnis, ab €{p.dinnerStd}',
      description: 'Planen Sie Ihren Bosporus-Ausflug: 3-stündige Dinner-Cruise mit türkischem Festmahl, Live-Folkloreshow, beleuchteten Nachtansichten. 4,8★ Bewertung, Zahlung an Bord, 12 Servicegebiete für Transfer.'
    },
    hero: {
      h1: 'Bosporus-Ausflug',
      subtitle: 'Der meistempfohlene Bosporus-Ausflug — eine 3-stündige Dinner-Cruise, die jedes Istanbuler Hauptwahrzeichen mit Dinner, Unterhaltung und nächtlichen Ausblicken abdeckt.',
      badge: 'Komplettes Bosporus-Erlebnis · Abendabfahrt'
    },
    intro: [
      'Ein **Bosporus-Ausflug** kann eine 1-stündige Sightseeing-Fähre oder eine komplette Dinner-Abendtour bedeuten — wir machen Letzteres, und die meisten Reisenden finden es das bessere Erlebnis. 3 Stunden, €{p.dinnerStd}/Person, Dinner und Unterhaltung inklusive. Sie fahren nicht nur an Wahrzeichen vorbei — Sie essen, sehen eine Show und genießen den Abend.',
      'Die Route unseres **Bosporus-Ausflugs** deckt alles Sehenswerte ab: Dolmabahçe-Palast (die Residenz des osmanischen Sultans aus dem 19. Jahrhundert), Ortaköy-Moschee (eine der meistfotografierten Moscheen Istanbuls), Bosporus-Brücke (wechselt nachts Farben), Rumeli Hisarı (1452 von Sultan Mehmet dem Eroberer erbaut), Beylerbeyi-Palast (asiatische Seite) und der Mädchenturm auf einer kleinen Insel. Alles wird von der englischsprachigen Crew erklärt.',
      'Ob Sie 24 Stunden oder eine Woche in Istanbul sind, dies ist der **Bosporus-Ausflug**, der Ihnen das meiste an einem Abend gibt. 4,8★ von über 11.317 Reisenden, TÜRSAB A-17672 lizenziert, halalfreundliches Menü, Zahlung an Bord — kein Risiko einer Vorauszahlung.'
    ],
    highlights: [
      { title: 'Kompletter Bosporus auf einmal', desc: 'Europäisches Ufer (Dolmabahçe, Ortaköy, Rumeli Hisarı), asiatisches Ufer (Beylerbeyi, Üsküdar), beide Bosporus-Brücken, Mädchenturm. Jedes Hauptwahrzeichen in 3 Stunden sichtbar.' },
      { title: 'Dinner + Unterhaltung inklusive', desc: 'Nicht nur eine Sightseeing-Fähre — komplettes türkisches Dinner mit Mezze, Hauptgang, Dessert. Live-Folkloreshow, Sema, orientalisch, DJ. Unterhaltungswert über die Aussicht hinaus.' },
      { title: 'Abend = beste Beleuchtung', desc: 'Tagesausflüge zeigen Ihnen Wahrzeichen bei flachem Licht. Abendausflüge erfassen alles beleuchtet: leuchtende Paläste, farbige Brücken, Moscheen, die sich auf dunklem Wasser spiegeln. Bessere Fotos, dramatischer.' },
      { title: 'Ab €{p.dinnerStd} — Zahlung an Bord', desc: 'Keine Vorauszahlung erforderlich. Zahlung an Bord (Bar oder Karte). Kostenlose Stornierung bis 2 Stunden vor Abfahrt. 0–3 Jahre gratis, 4–8 Jahre halber Preis. Transparente Preisgestaltung.' }
    ],
    faq: [
      { q: 'Was sind die besten Bosporus-Ausflüge in Istanbul?', a: 'Der abendliche Dinner-Cruise steht konsequent an der Spitze. Tagesoptionen (1-stündige Ringfähren, 2-stündige Sightseeing-Boote) zeigen weniger und beinhalten kein Dinner. Für das beste Preis-Leistungs-Verhältnis ist eine 3-stündige Tour mit Dinner, Show und zentralem Rückkehrpunkt schwer zu schlagen. Die €{p.dinnerStd}-Kosten unserer Tour machen einen separaten Dinner- + Unterhaltungsabend überflüssig.' },
      { q: 'Wie lange dauert ein Bosporus-Ausflug?', a: 'Unser Bosporus-Ausflug dauert insgesamt 3 Stunden (Abfahrt 21:00, Rückkehr 00:00). Es gibt kürzere Optionen (1-stündige Sightseeing-Fähren, 90-minütige Touren), aber sie lassen Dinner und Unterhaltung aus. Für das komplette Abenderlebnis sind 3 Stunden ideal — genug, um alles zu sehen, ohne müde zu werden.' },
      { q: 'Ist ein Bosporus-Ausflug lohnenswert?', a: 'Ja — fast jeder Istanbul-Reiseführer listet „Bosporus-Cruise“ unter den Top 5 Muss-Erlebnissen auf. Die Stadt wurde um diese Meerenge herum gebaut; Sie haben Istanbul nicht wirklich gesehen, wenn Sie den Bosporus nicht vom Wasser gesehen haben. Unsere spezifische Abendtour fügt Dinner und Unterhaltung hinzu, sodass sie zu einem vollständigen Abend wird, nicht nur Sightseeing.' },
      { q: 'Was soll ich zum Bosporus-Ausflug mitbringen?', a: 'Reisepass oder Personalausweis (für die Bootsregistrierung), leichte Jacke (Decks sind abends kühl), Smartphone/Kamera, bequeme Schuhe für die Tanzfläche. Bargeld oder Karte zur Zahlung. Alles andere an Bord. Hoteltransfer verfügbar für +€{p.transfer}/Person, wenn Sie keine öffentlichen Verkehrsmittel nutzen möchten.' },
      { q: 'Ist der Bosporus-Ausflug für Kinder geeignet?', a: 'Ja — sehr kinderfreundlich. Kinder 0–3 Jahre gratis (Transfer inklusive), 4–8 Jahre 50 % Ermäßigung. Geschützter Innenbereich, Kindermenü auf Anfrage und die Unterhaltung ist sanft und ansprechend. Viele Familien buchen dies als Höhepunkt ihrer Istanbul-Reisen.' },
      { q: 'Was sind die Stopps des Bosporus-Ausflugs?', a: 'Es ist eine kontinuierliche Tour — wir stoppen nicht an Wahrzeichen (kein Aussteigen). Das Schiff fährt in der Nähe jedes Wahrzeichens vorbei, die Crew erklärt, was Sie sehen, Sie bleiben bequem an Ihrem Tisch oder gehen für Fotos auf das Oberdeck. Keine Schlangen, kein Gehen — nur 3 reibungslose Stunden auf dem Wasser.' }
    ],
    cta: {
      primary: 'Bosporus-Ausflug buchen · Zahlung an Bord',
      secondary: '3 Stunden · Dinner + Show · Kostenlose Stornierung bis 2 Stunden vorher · TÜRSAB-lizenziert',
      tertiary: 'Verfügbarkeit prüfen'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bosporus-Cruise-Tickets — Direktbuchung, ab €{p.dinnerStd} Zahlung an Bord',
      description: 'Kaufen Sie Bosporus-Cruise-Tickets direkt. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Keine Vorauszahlung, Zahlung an Bord. Kostenlose Stornierung bis 2 Stunden vorher. 4,8★ Bewertung, TÜRSAB A-17672.'
    },
    hero: {
      h1: 'Bosporus-Cruise-Tickets',
      subtitle: 'Umgehen Sie Vermittlergebühren — kaufen Sie Ihre Bosporus-Cruise-Tickets direkt bei uns. Keine Vorauszahlung, Zahlung an Bord, kostenlose Stornierung bis 2 Stunden vor Abfahrt.',
      badge: 'Direktbuchung · Keine Vorauszahlung · 40% RABATT'
    },
    intro: [
      'Suchen Sie **Bosporus-Cruise-Tickets**? Kaufen Sie direkt. Unsere Tickets kosten €{p.dinnerStd} (Standard) oder €{p.dinnerVip} (VIP) — 40 % Rabatt auf den regulären Preis (€{p.dinnerStdOriginal} und €{p.dinnerVipOriginal}). Drittanbieter-Buchungsseiten schlagen oft 20–40 % Provision auf. Direktbuchung spart Ihnen Geld — und Sie können weiterhin an Bord bezahlen.',
      'Unser **Bosporus-Cruise-Ticket**-Prozess: Füllen Sie den Assistenten auf dieser Seite in weniger als einer Minute aus (Datum, Gästezahl, Paket, Kontakt), wir bestätigen sofort per WhatsApp / Telegram / WeChat, Sie erscheinen um 20:00 am Kabataş-Pier, Sie zahlen an Bord, Sie genießen die 3-stündige Dinner-Cruise. Keine physischen Tickets zum Ausdrucken, kein E-Mail-Gutschein — unsere Bestätigung ist Ihr Ticket.',
      'Ob Sie die heutige Dinner-Cruise buchen oder ein bestimmtes Datum nächste Woche reservieren, **Bosporus-Cruise-Tickets direkt** ist der schnellste Weg. 4,8★ Bewertung, TÜRSAB-lizenziert (A-17672), halal-zertifiziertes Menü und unterstützt Hoteltransfer- und Alkoholextras.'
    ],
    highlights: [
      { title: 'Direktbuchung — keine Vermittlergebühren', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Drittanbieter verlangen €30–80+ für dieselbe Tour. Sie sparen durch direkte Buchung bei uns. Keine versteckten Gebühren, keine Provisionsaufschläge.' },
      { title: 'Zahlung an Bord — keine Vorauszahlung', desc: 'Reservieren Sie jetzt Ihren Platz, zahlen Sie, wenn Sie an Bord gehen. Bargeld oder Karte akzeptiert. Kostenlos, wenn Sie 2+ Stunden vor Abfahrt stornieren. Null finanzielles Risiko beim frühen Reservieren.' },
      { title: 'Bestätigung in weniger als 1 Minute', desc: 'Assistent ausfüllen → wir bestätigen per WhatsApp / Telegram / WeChat. Kein E-Mail-PDF-Gutschein zum Drucken. Unsere Nachricht ist Ihr Ticket. Kommen Sie um 20:00 zum Pier.' },
      { title: '40% RABATT aktueller Einführungspreis', desc: 'Standard vorher €{p.dinnerStdOriginal}, jetzt €{p.dinnerStd}. VIP vorher €{p.dinnerVipOriginal}, jetzt €{p.dinnerVip}. 40 % Rabatt, weil Sie direkt buchen. Keine zeitlich begrenzte Nummer — unser Standardpreis für Direktbuchungen.' }
    ],
    faq: [
      { q: 'Wie viel kosten Bosporus-Cruise-Tickets?', a: 'Standard: €{p.dinnerStd}/Person (regulär €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/Person (regulär €{p.dinnerVipOriginal}). 3-stündige Tour, mehrgängiges türkisches Dinner, Live-Folkloreshow, unbegrenzte alkoholfreie Getränke inklusive. 0–3 Jahre gratis, 4–8 Jahre 50 % Ermäßigung. Zahlung an Bord — keine Vorauszahlung.' },
      { q: 'Wo kann ich Bosporus-Cruise-Tickets kaufen?', a: 'Direkt auf dieser Seite — Buchungsassistenten ausfüllen, wir bestätigen sofort per WhatsApp / Telegram / WeChat. Zahlung an Bord. Drittanbieter-Plattformen (Viator, GetYourGuide, Klook) verkaufen auch Tickets, verlangen aber typischerweise €30–80+ — das ist der Vermittleraufschlag. Direkt ist am günstigsten und am schnellsten.' },
      { q: 'Muss ich das Bosporus-Cruise-Ticket ausdrucken?', a: 'Nein — kein physisches Ticket oder Gutschein erforderlich. Nach der Buchung senden wir Ihnen eine Bestätigung per WhatsApp (oder Telegram/WeChat) mit Treffpunkt, Uhrzeit und Buchungsname. Zeigen Sie einfach Ihr Handy am Pier. Das war\'s.' },
      { q: 'Kann ich mein Bosporus-Cruise-Ticket stornieren oder zurückerstatten?', a: 'Ja — kostenlose Stornierung bis 2 Stunden vor Abfahrt. Schreiben Sie uns einfach auf WhatsApp. Da Sie noch nicht bezahlt haben (Zahlung an Bord), ist keine Rückerstattung erforderlich — Sie erscheinen einfach nicht, keine Gebühr. Viel flexibler als vorausbezahlte Drittanbieter-Tickets.' },
      { q: 'Sind Bosporus-Cruise-Tickets am selben Tag verfügbar?', a: 'Oft ja, besonders an Wochentagen. Wochenenden und Feiertage füllen sich schneller. Überprüfen Sie die Verfügbarkeit über den Buchungsassistenten — er wird in Echtzeit aktualisiert. Gleichtagsbuchungen sind typischerweise bis ein paar Stunden vor der 21:00-Abfahrt möglich. WhatsApp für dringende Anfragen.' },
      { q: 'Sind Kinder-Bosporus-Cruise-Tickets gratis?', a: 'Kinder **0–3 Jahre komplett gratis** (keine Gebühr, keine versteckten Kosten, Transfer inklusive). **4–8 Jahre 50 % Ermäßigung** (€{p.dinnerStd}/2 = €12 bei Standard). **Ab 9 Jahren voller Erwachsenenpreis.** Preise sind nach oben begrenzt und transparent — keine „Säuglingsaufschlag“-Tricks.' }
    ],
    cta: {
      primary: 'Tickets kaufen · Zahlung an Bord',
      secondary: 'Direktbuchung · Keine Vorauszahlung · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit prüfen'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Last-Minute Bosporus-Cruise — Für heute Abend buchen, Zahlung an Bord',
      description: 'Last-Minute Bosporus-Cruise-Buchung für heute Abend. Gleichtagsverfügbarkeit, Zahlung an Bord, keine Vorauszahlung. WhatsApp-Bestätigung in Minuten. Ab €{p.dinnerStd}/Person.'
    },
    hero: {
      h1: 'Last-Minute Bosporus-Cruise',
      subtitle: 'Verfügbarkeit für heute Abend, in Minuten bestätigt. Keine Vorauszahlung, kein vorgedruckter Gutschein — kommen Sie einfach zum Pier und genießen Sie den Abend.',
      badge: 'Gleichtagsbuchung · In Minuten bestätigt · Zahlung an Bord'
    },
    intro: [
      'Sind Sie heute Nachmittag in Istanbul gelandet und möchten heute Abend einen tollen Abend? Eine **Last-Minute Bosporus-Cruise** funktioniert. Wir wissen, dass viele Reisende morgens entscheiden, daher reservieren wir speziell Plätze für Gleichtagsbuchungen. Füllen Sie den Assistenten hier aus, wir bestätigen innerhalb von Minuten per WhatsApp, Sie erscheinen um 20:00 am Kabataş-Pier, Sie zahlen an Bord, Sie genießen.',
      'Unsere **Last-Minute Bosporus-Cruise** hat das gleiche Abendprogramm wie Vorausbuchungen: 3 Stunden auf dem Wasser (21:00–00:00), mehrgängiges türkisches Dinner, Live-Folkloreshow, Sema, orientalischer Tanz, DJ. Beleuchteter Dolmabahçe-Palast, Ortaköy-Moschee, Bosporus-Brücke — dieselben ikonischen Ansichten. Gleicher €{p.dinnerStd}-Standard- oder €{p.dinnerVip}-VIP-Preis.',
      'Gleichtagsstornierung ist kostenlos bis 2 Stunden vor Abfahrt, da **Zahlung an Bord** bedeutet, dass Sie sich noch zu nichts verpflichtet haben. Haben Sie um 14:00 gebucht und Ihre Pläne bis 19:00 geändert? Schreiben Sie uns einfach auf WhatsApp — keine Rückerstattung, kein Problem. Das ist die **Last-Minute Istanbul-Tour**-Flexibilität, die Reisende schätzen.'
    ],
    highlights: [
      { title: 'Plätze für heute Abend noch verfügbar', desc: 'Wir reservieren täglich 5–10 Plätze für Gleichtagsbuchungen. Überprüfen Sie den Assistenten oben — Verfügbarkeit in Echtzeit. Wenn die heutige Tour voll ist, ist die von morgen typischerweise offen.' },
      { title: 'Bestätigung in weniger als 5 Minuten', desc: 'Assistent ausfüllen → WhatsApp/Telegram/WeChat-Bestätigungsnachricht → fertig. Kein E-Mail-Gutschein zum Warten, kein QR-Code zum Drucken. Unsere Nachricht ist Ihr Ticket.' },
      { title: 'Null Zahlung, bis Sie an Bord gehen', desc: 'Zahlung an Bord, Bargeld oder Karte. Wenn Sie nicht erscheinen (Planänderung, Krankheit, Wetter), keine Gebühr. Kostenlose Stornierung bis 2 Stunden vor Abfahrt. Wirklich Last-Minute-freundlich.' },
      { title: 'Gleichtags-Hoteltransfer oft verfügbar', desc: 'Hoteltransfer erfordert normalerweise 24-stündige Vorankündigung, aber für Gleichtagsbuchungen zwischen 14:00 und 17:00 können wir typischerweise eine Abholung für +€{p.transfer}/Person arrangieren. WhatsApp für dringende Transferanfragen.' }
    ],
    faq: [
      { q: 'Kann ich wirklich für heute Abend eine Bosporus-Cruise buchen?', a: 'Ja — oft. Wir reservieren Plätze für Gleichtagsbuchungen. Überprüfen Sie den Assistenten oben auf Verfügbarkeit für heute Abend. Wenn Plätze verfügbar sind, können Sie bis 18:00 (3 Stunden vor Abfahrt) buchen. Wochenenden sind knapper — nach Möglichkeit früher am Tag buchen.' },
      { q: 'Wie Last-Minute kann ich buchen?', a: 'Buchungen bleiben bis 18:00 für das 21:00-Schiff offen. Nach 18:00 schreiben Sie uns direkt auf WhatsApp unter +90 532 244 29 22 — wir können manuell bestätigen, wenn Plätze offen sind. Nach 19:30 wird es sehr eng, es sei denn, Sie sind am Kabataş-Pier und können schnell einsteigen.' },
      { q: 'Ist die Last-Minute Bosporus-Cruise teurer?', a: 'Nein — gleicher Preis wie Vorausbuchung. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Wir betreiben keine „dynamische Preisgestaltung“ oder Last-Minute-Aufschläge. Gleiches Schiff, gleiches Dinner, gleiche Show, gleicher Preis.' },
      { q: 'Was, wenn die heutige Tour komplett voll ist?', a: 'Die Tour von morgen ist typischerweise offen — wir fahren 365 Tage im Jahr, jeden Abend. Sie können für morgen buchen und immer noch „Last-Minute“ sein, das heißt, Sie haben sich gerade entschieden. Wochentagstouren haben mehr Platz als Wochenenden.' },
      { q: 'Können Sie Last-Minute-Hoteltransfer arrangieren?', a: 'Gleichtagstransfer ist typischerweise möglich bis ~17:00 für die 21:00-Tour. Nach 17:00 haben wir möglicherweise keinen Fahrer verfügbar — in diesem Fall können Sie ein Taxi zum Kabataş-Pier nehmen (15 Min. vom Taksim, 10 Min. vom Sultanahmet, ~€10–15). Zentral und einfach.' },
      { q: 'Was, wenn ich bereits in Kabataş bin und einsteigen möchte?', a: 'Wenn Sie am Pier sind und Plätze offen sind, können Sie einfach einsteigen. Schreiben Sie uns auf WhatsApp oder fragen Sie die Crew — wir fügen Sie hinzu, wenn Platz ist. Gleicher Zahlungs-an-Bord-Preis. Im Tour-Jargon wird es „walk-on“ genannt — funktioniert hier.' }
    ],
    cta: {
      primary: 'Für heute Abend buchen · Zahlung an Bord',
      secondary: 'Gleichtagsbuchung · In Minuten bestätigt · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'WhatsApp für dringende Buchungen'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Istanbul-Cruise-Preis — Transparente Tarife, ab €{p.dinnerStd} Zahlung an Bord',
      description: 'Istanbul Bosporus-Cruise-Preise: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. 0–3 Jahre gratis. Transparente Extras (Alkohol +€{p.unlimited}, Transfer +€{p.transfer}). Keine versteckten Gebühren.'
    },
    hero: {
      h1: 'Istanbul-Cruise-Preis',
      subtitle: 'Transparente Preisgestaltung, keine versteckten Gebühren. Standard €{p.dinnerStd}/Person, VIP €{p.dinnerVip}/Person — und Sie zahlen an Bord, nicht jetzt.',
      badge: 'Transparent · 40% RABATT direkt · 0–3 Jahre gratis'
    },
    intro: [
      '**Istanbul-Cruise-Preise** variieren stark — von €15-Budget-Fähren, die Dinner auslassen, bis zu €150+ Resort-Yachten. Unsere Preise liegen in der Mitte und bieten das beste Preis-Leistungs-Verhältnis: €{p.dinnerStd} für Standard mit einer 3-stündigen kompletten Dinner-Cruise mit Show, €{p.dinnerVip} für VIP mit Plätzen nahe der Bühne und Premium-Erlebnis. Keine versteckten Gebühren, keine Überraschungsaufschläge.',
      'Eine detaillierte **Istanbul-Cruise-Preis**-Aufschlüsselung, weil Transparenz wichtig ist:\n\n- **Standard-Dinner-Cruise**: €{p.dinnerStd}/Person (vorher €{p.dinnerStdOriginal}, 40 % Rabatt). 3-stündige Tour, 10 Mezze, Hauptgang, Dessert, unbegrenzte alkoholfreie Getränke, Live-Show inklusive.\n- **VIP-Dinner-Cruise**: €{p.dinnerVip}/Person (vorher €{p.dinnerVipOriginal}). Fügt Plätze nahe der Bühne, über 15 Mezze, Rinderfilet/Rib-Eye-Optionen, prioritären Service hinzu.\n- **0–3 Jahre**: gratis. 4–8 Jahre: 50 % Ermäßigung. Ab 9 Jahren: voller Preis.\n\nExtras (optional):\n- 2 Gläser Alkohol: +€{p.alcohol2}/Person\n- Unbegrenzter lokaler Alkohol: +€{p.unlimited}/Person\n- Hoteltransfer hin und zurück: +€{p.transfer}/Person\n- Romantisches Tischarrangement: +€{p.romantic}/Tisch',
      'Und wichtig: **Zahlung an Bord**. Sie verpflichten sich zu keinem Cent, bis Sie an Bord sind. Kostenlose Stornierung bis 2 Stunden vor Abfahrt. Keine Verpflichtung, kein Risiko — die verbraucherfreundlichste **Istanbul-Cruise-Preisgestaltung**, die Sie finden werden.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (vorher €{p.dinnerStdOriginal})', desc: '40 % Rabatt auf den regulären Preis. 3-stündige Tour, komplettes türkisches Dinner, Live-Show, unbegrenzte alkoholfreie Getränke. Das beliebteste Paket — deckt alles ab, was Sie für einen tollen Abend brauchen.' },
      { title: 'VIP: €{p.dinnerVip} (vorher €{p.dinnerVipOriginal})', desc: '40 % Rabatt auf den regulären Preis. Fügt Plätze nahe der Bühne, über 15 Mezze, Premium-Hauptgänge (Rinderfilet, Rib-Eye), prioritären Kellnerservice hinzu. Für besondere Anlässe oder Premium-Reisende.' },
      { title: 'Kinderpreis: 0–3 gratis, 4–8 halber Preis', desc: '0–3 komplett gratis (keine Gebühr). 4–8 erhalten 50 % Rabatt vom Erwachsenenpreis. Ab 9 Jahren voller Erwachsenenpreis. Transparent, keine Familienpreis-Tricks. Transfer ist auch für 0–3 gratis.' },
      { title: 'Extras — nur wenn Sie sie möchten', desc: 'Alkohol: €{p.alcohol2} oder €{p.unlimited}/Person. Transfer: €{p.transfer}/Person. Romantischer Tisch: €{p.romantic}/Tisch. Alles optional, nicht gebündelt. Wählen Sie nur, was Sie brauchen.' }
    ],
    faq: [
      { q: 'Wie viel kostet eine Istanbul-Cruise?', a: 'Standard-Dinner-Cruise: €{p.dinnerStd}/Person (regulär €{p.dinnerStdOriginal}, 40 % Rabatt). VIP: €{p.dinnerVip}/Person (regulär €{p.dinnerVipOriginal}, 40 % Rabatt). 0–3 Jahre gratis, 4–8 Jahre halber Preis. Zahlung an Bord — keine Vorauszahlung. Kostenlose Stornierung bis 2 Stunden vor Abfahrt.' },
      { q: 'Gibt es versteckte Gebühren im Istanbul-Cruise-Preis?', a: 'Nein. Der Preis beinhaltet: 3-stündige Tour, komplettes Dinner (Mezze, Vorspeise, Hauptgang, Dessert), unbegrenzte alkoholfreie Getränke, Live-Show, Steuern. Optionale Extras (Alkohol, Transfer, romantischer Tisch) sind separat und transparent bepreist — Sie zahlen nur, wenn Sie sie hinzufügen. Keine „Servicegebühren“, „Hafengebühren“ oder Überraschungsaufschläge.' },
      { q: 'Warum ist der Istanbul-Cruise-Preis 40 % Rabatt — ist das ein Trick?', a: 'Kein Trick. Der reguläre Preis ist €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal}, was Drittanbieter-Buchungsseiten (Viator, GetYourGuide, Klook) verlangen — mit ihren Provisionen. Buchen Sie direkt und erhalten Sie €{p.dinnerStd}/€{p.dinnerVip}. Das ist die 40 % Differenz. Keine zeitlich begrenzten oder dynamischen Preistricks.' },
      { q: 'Wie vergleicht sich der Istanbul-Cruise-Preis mit anderen Optionen?', a: 'Ringfähren: €5–10, 1 Stunde, kein Dinner, keine Unterhaltung, nur Sightseeing. Budget-Dinner-Cruises: €20–30, überfüllt, durchschnittliches Essen, kurze Show. Unser Standard (€{p.dinnerStd}): 3 Stunden, komplettes Dinner, komplette Show, privater Tisch, TÜRSAB-lizenziert. VIP (€{p.dinnerVip}): nahe Bühne, Premium-Menü. Resort-Yachten: €100–150+, übertrieben für Alleinreisende/Paare.' },
      { q: 'Muss ich den Istanbul-Cruise-Preis im Voraus zahlen?', a: 'Nein — **Zahlung an Bord**. Sie buchen jetzt (1-minütiger Assistent), wir bestätigen per WhatsApp, Sie kommen um 20:00 an und zahlen an Bord (Bargeld oder Karte). Kostenlose Stornierung bis 2 Stunden vorher. Null finanzielle Verpflichtung, bis Sie zufrieden sind.' },
      { q: 'Gibt es einen Gruppenrabatt auf den Istanbul-Cruise-Preis?', a: 'Für Gruppen ab 10 können wir 5–10 % Rabatt anbieten — schreiben Sie uns auf WhatsApp mit Ihrer Gruppengröße. Ab 25 denken Sie an eine private Tour (ganzes Schiff für Ihre Gruppe, individuelles Menü). Für 2–9 Personen gelten die Standardpreise — bereits 40 % Rabatt auf den regulären Preis.' }
    ],
    cta: {
      primary: 'Buchen · Zahlung an Bord',
      secondary: 'Ab €{p.dinnerStd}/Person · 0–3 Jahre gratis · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Bosporus-Sightseeing — Alle Istanbuler Wahrzeichen vom Wasser',
      description: 'Bosporus-Sightseeing-Tour deckt alle Hauptwahrzeichen ab: Dolmabahçe, Ortaköy-Moschee, Bosporus-Brücke, Rumeli Hisarı, Beylerbeyi, Mädchenturm. 3-stündige Abendtour mit Dinner, €{p.dinnerStd}.'
    },
    hero: {
      h1: 'Bosporus-Sightseeing',
      subtitle: 'Alle ikonischen Wahrzeichen Istanbuls — vom Wasser, bei Nacht, mit Dinner. Eine einzige 3-stündige Tour deckt Dolmabahçe, Ortaköy-Moschee, Bosporus-Brücke, Rumeli Hisarı und mehr ab.',
      badge: '10+ Wahrzeichen · Europäische und asiatische Ufer · 3 Stunden'
    },
    intro: [
      '**Bosporus-Sightseeing** vom Wasser schlägt jede Bustour. Der Bosporus ist die historischste Wasserstraße der Stadt — osmanische Sultane, byzantinische Kaiser, griechische Händler und russische Kriegsschiffe sind alle hindurchgefahren. Heute führt Sie unsere 3-stündige Tour mit englischsprachigen Crew-Kommentaren an jedem Istanbuler Hauptwahrzeichen vorbei, das die Skyline definiert.',
      'Unsere **Bosporus-Sightseeing-Tour**-Route (Abendabfahrt, 21:00–00:00):\n\n1. **Dolmabahçe-Palast** — osmanische Residenz aus dem 19. Jahrhundert, nachts beleuchtet\n2. **Çırağan-Palast** — jetzt Luxushotel, königliche Geschichte\n3. **Ortaköy-Moschee** — eine der meistfotografierten Moscheen Istanbuls, am Wasser\n4. **Bosporus-Brücke** — wechselt nachts zwischen Blau, Violett, Gold\n5. **Bebek** — schickes Viertel auf der europäischen Seite\n6. **Rumeli Hisarı** — 1452 von Sultan Mehmet dem Eroberer vor der Eroberung Konstantinopels erbaut\n7. **Fatih-Sultan-Mehmet-Brücke** — zweite Bosporus-Brücke, dramatischer Bogen\n8. **Beylerbeyi-Palast** — asiatische Seite, osmanische Sommerresidenz\n9. **Üsküdar** — asiatische Seite Istanbuls, traditionelles Viertel\n10. **Mädchenturm** — kleiner Inselturm, eines der romantischsten Symbole Istanbuls',
      'Dinner und Unterhaltung sind inklusive — nicht separat — sodass **Bosporus-Sightseeing** zu einem kompletten Abend wird. Mehrgängiges türkisches Dinner, Live-Folkloreshow, Sema, orientalischer Tanz, DJ. 4,8★ Bewertung von über 11.317 Reisenden, TÜRSAB A-17672 lizenziert.'
    ],
    highlights: [
      { title: '10+ Haupt-Istanbuler Wahrzeichen', desc: 'Dolmabahçe-Palast, Çırağan-Palast, Ortaköy-Moschee, Bosporus-Brücke, Rumeli Hisarı, FSM-Brücke, Beylerbeyi-Palast, Üsküdar, Mädchenturm. Jedes wesentliche Istanbuler Wahrzeichen in einer einzigen Tour.' },
      { title: 'Sowohl europäische als auch asiatische Ufer', desc: 'Europäische Seite auf dem Weg dorthin (Dolmabahçe → Rumeli Hisarı), asiatische Seite auf dem Rückweg (Beylerbeyi → Üsküdar). Zwei Kontinente in einer 3-stündigen Tour — nur Istanbul erlaubt Ihnen das.' },
      { title: 'Abend-Sightseeing = beleuchtete Ansichten', desc: 'Tages-Sightseeing zeigt Wahrzeichen bei flachem Licht. Die Nachttour erfasst sie dramatisch: Paläste leuchten gelb, Brücken farbig, Moscheen spiegeln sich auf dunklem Wasser. Besser für Fotos, unvergesslicher.' },
      { title: 'Dinner + Show inklusive', desc: 'Sightseeing + Dinner + Unterhaltung in einem Paket. Keine Notwendigkeit, nach der Tour ein separates Dinner zu planen. Ab €{p.dinnerStd}/Person, Zahlung an Bord, insgesamt 3 Stunden.' }
    ],
    faq: [
      { q: 'Welche Bosporus-Wahrzeichen werde ich sehen?', a: 'In der Reihenfolge: Dolmabahçe-Palast, Çırağan-Palast, Ortaköy-Moschee, Bosporus-Brücke, Bebek-Viertel, Rumeli Hisarı, Fatih-Sultan-Mehmet-Brücke, Anadolu Hisarı, Beylerbeyi-Palast, Kuzguncuk, Üsküdar und Mädchenturm (aus der Ferne sichtbar). Über 10 Hauptwahrzeichen in einer 3-stündigen Route.' },
      { q: 'Ist Bosporus-Sightseeing besser tagsüber oder nachts?', a: 'Unterschiedliche Erlebnisse. Tag: klarere Sicht auf architektonische Details, heller für Fotos. Nacht: dramatische Beleuchtung, mysteriöse Atmosphäre, weniger Boote auf dem Wasser. Die meisten Reisenden bevorzugen die Nachttour, weil die Wahrzeichen magischer aussehen — und Dinner + Show machen es zu einem kompletten Abend.' },
      { q: 'Stoppt das Schiff an Wahrzeichen für Fotos?', a: 'Es ist eine kontinuierliche Tour — keine Stopps (kein Aussteigen). Das Schiff fährt in der Nähe jedes Wahrzeichens vorbei, die Crew erklärt, was Sie sehen, Sie können für Fotos auf das Oberdeck gehen. Keine Schlangen, kein Gehen, kein Zeitdruck — nur eine reibungslose 3-stündige Fotomöglichkeit.' },
      { q: 'Gibt die Crew Kommentare während des Sightseeings?', a: 'Ja — die englischsprachige Crew gibt kurze Kommentare ab, während wir an jedem Hauptwahrzeichen vorbeifahren (Geschichte, Architektur, unterhaltsame Fakten). Es ist keine geführte Vorlesung, eher eine freundliche Erklärung, während Sie essen. Für tiefere Geschichte empfehlen wir, dies mit einer Istanbul-Gehtour am Tag zu kombinieren.' },
      { q: 'Wie unterscheidet sich Bosporus-Sightseeing von einer Hop-on-Fähre?', a: 'Hop-on-Fähren (Şehir-Hatları-Ringboote): €5–10, 1–2 Stunden, einfach, kein Dinner, überfüllt. Unsere Tour: €{p.dinnerStd}, 3 Stunden, komplettes Dinner, Live-Show, privater Tisch, englischer Kommentar. Die Abendtour ist besser für komfortables ernsthaftes Sightseeing. Die Ringfähre funktioniert für schnellen Budget-Transit.' },
      { q: 'Kann ich Wahrzeichen vom Boot aus fotografieren?', a: 'Ja — unbedingt. Das Oberdeck bietet ausgezeichnete Positionen zum Fotografieren. Wahrzeichen ziehen 100–200 Meter vom Boot entfernt vorbei. Smartphone-Fotos werden großartig; DSLR/spiegellose Nutzer können atemberaubende Aufnahmen machen, besonders während des Gold-zu-Blau-Stunden-Übergangs am frühen Abend.' }
    ],
    cta: {
      primary: 'Sightseeing-Tour buchen · Zahlung an Bord',
      secondary: '10+ Wahrzeichen · Dinner + Show · Kostenlose Stornierung bis 2 Stunden vorher',
      tertiary: 'Verfügbarkeit heute Abend'
    }
  }

};
