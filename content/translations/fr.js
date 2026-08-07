/**
 * French translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Croisière Dîner Bosphore dès €{p.dinnerStd} — Tour Nocturne Istanbul + Spectacle',
      description: 'Croisière dîner 3h sur le Bosphore : menu turc multi-plats et spectacle folklorique en direct. Départ 21h00 de Kabataş.'
    },
    hero: {
      h1: "Croisière dîner sur le Bosphore à Istanbul",
      subtitle: "Trois heures de divertissement en direct, un généreux festin turc et les vues nocturnes les plus saisissantes du Bosphore.",
      badge: "4,8★ · 11 317 avis"
    },
    intro: [
      "La **croisière dîner sur le Bosphore** est l'expérience nocturne la plus emblématique d'Istanbul. Notre croisière part de l'embarcadère de Kabataş à 20h00 et glisse sous les ponts illuminés du Bosphore et Fatih Sultan Mehmet, tout en proposant un festin turc varié, des danses folkloriques en direct, une danse orientale et un set DJ qui anime le pont jusqu'à 23h00.",
      "Contrairement aux bateaux de croisière ordinaires qui peuplent les nuits d'Istanbul, notre **croisière dîner sur le Bosphore** est agréée TÜRSAB (A-17672) et a été notée 4,8★ par plus de 11 317 voyageurs. Nous gardons le groupe restreint et le service chaleureux — et comme vous payez à bord, réserver à l'avance ne présente aucun risque.",
      "Que vous fêtiez un anniversaire, cherchiez une soirée istanbouliote premium en famille, ou souhaitiez la plus belle transition coucher de soleil-nuit de la ville — c'est la croisière dîner que les Istanbouliotes recommandent en premier."
    ],
    highlights: [
      { title: "Festin turc varié", desc: "10 mezzés, une entrée chaude (paçanga böreği), un plat principal au choix (saumon / dorade / poulet / köfte / végétarien), un gâteau glacé en dessert, boissons non alcoolisées à volonté." },
      { title: "Danses folkloriques, danse orientale et DJ en direct", desc: "Huit numéros : Oba Dombra, cérémonie des derviches tourneurs Mevlana, Sarı Gelin, pot-pourri azerbaïdjanais, danse orientale classique, pot-pourri anatolien et la danse des couteaux géorgienne et caucasienne — puis saxophone live et set DJ pendant toute la croisière." },
      { title: "Parcours nocturne complet du Bosphore", desc: "Kabataş → Dolmabahçe → Palais Çırağan → Mosquée d'Ortaköy → Bebek → Rumeli Hisarı → Pont FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş." },
      { title: "Dès €{p.dinnerStd}/pers. — paiement à bord", desc: "Croisière dîner €{p.dinnerStd} (ancien €{p.dinnerStdOriginal}). Aucun prépaiement. Annulation gratuite jusqu'à 2 heures avant le départ." }
    ],
    faq: [
      { q: "Quand commence la croisière dîner sur le Bosphore ?", a: "L'embarquement commence à 20h00 à l'embarcadère de Kabataş. Le bateau part à 21h00 et revient vers 00h00. Nous vous recommandons d'arriver 15 à 20 minutes en avance pour vous installer confortablement." },
      { q: "Combien coûte la croisière dîner sur le Bosphore ?", a: "La croisière dîner est à €{p.dinnerStd}/pers. (tarif habituel €{p.dinnerStdOriginal}). 0-3 ans gratuit, 4-9 ans à €5. Le paiement s'effectue à bord — aucun prépaiement." },
      { q: "L'alcool est-il inclus dans le dîner-croisière ?", a: "Les boissons non alcoolisées (eau, cola, jus de fruits) à volonté sont incluses dans le prix. Le forfait alcool est en option : 2 verres (vin, bière, rakı, vodka ou gin) +€{p.alcohol2}/pers. Les boissons supplémentaires et les spiritueux importés sont facturés séparément à bord." },
      { q: "Proposez-vous un transfert depuis l'hôtel ?", a: "Oui — l'aller-retour est à +€{p.transfer}/pers. Zones desservies : Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Sütlüce et Şişli. Vous pouvez le sélectionner dans l'assistant de réservation." },
      { q: "La croisière dîner est-elle halal ?", a: "Absolument. Toutes les viandes servies à bord sont certifiées halal. L'alcool est un supplément optionnel (jamais imposé aux convives) et le plan de table sépare naturellement ceux qui préfèrent une table sans alcool. Des alternatives végétariennes sont également proposées sans frais supplémentaires." },
      { q: "Quelle tenue porter ?", a: "Smart casual. Les soirées à Istanbul peuvent être venteuses même en été — nous recommandons une veste légère ou un châle. Aucun code vestimentaire strict, mais maillots de bain, tongs ou tenue de sport ne conviennent pas au cadre du dîner." }
    ],
    cta: {
      primary: "Réserver maintenant · Paiement à bord",
      secondary: "Annulation gratuite jusqu'à 2 heures avant le départ",
      tertiary: "Disponibilités ce soir"
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosphore avec Enfants — Croisière Familiale dès €{p.dinnerStd}/adulte',
      description: 'Croisière dîner Bosphore familiale. Enfants 0-3 gratuits, 4-9 demi-tarif. Salle intérieure sécurisée, menu enfants. Annulation gratuite, paiement à bord.'
    },
    hero: {
      h1: "Croisière sur le Bosphore avec enfants",
      subtitle: "Une soirée familiale sur le Bosphore conçue pour les familles avec enfants — dîner, divertissement et une atmosphère sûre et détendue.",
      badge: "Familiale · Halal · 0-3 ans gratuit"
    },
    intro: [
      "La **croisière sur le Bosphore avec enfants** est l'option nocturne la plus adaptée aux familles à Istanbul. Nous accueillons des dizaines de familles chaque soir — chaque détail a été pensé pour le confort des enfants : un espace intérieur abrité pour garder les petits au chaud, un menu enfants accessible (poulet grillé nature, pâtes, boissons non alcoolisées à volonté) et un embarquement tôt pour éviter les caprices de fin de soirée.",
      "Contrairement aux bateaux réservés aux adultes, notre **dîner-croisière sur le Bosphore pour les familles** reste chaleureux et inclusif. **Les enfants de 0 à 3 ans sont gratuits** (transfert inclus), 4-9 ans à **€5 de réduction**, 10+ ans tarif plein — aucun frais caché. Les danses folkloriques, la danse orientale et la cérémonie des derviches constituent un divertissement familial doux, ce n'est pas une boîte de nuit.",
      "Que vous veniez à Istanbul pour un long week-end avec votre bambin ou que vous emmeniez vos adolescents pour leur premier voyage européen — c'est la croisière que les familles d'Istanbul recommandent. Sûre, certifiée halal, agréée TÜRSAB et notée 4,8★ par 11 317+ voyageurs."
    ],
    highlights: [
      { title: "0-3 ans entièrement gratuits", desc: "Aucun frais pour les bébés et tout-petits. 4-9 ans à €5 du tarif adulte. À partir de 9 ans, tarif plein. Transparence totale, aucune surprise." },
      { title: "Salle intérieure abritée", desc: "Entièrement couverte et chauffée pendant les mois froids. Les enfants restent au chaud, à l'abri du vent. Pont extérieur également disponible par beau temps — à vous de choisir." },
      { title: "Menu enfants sur demande", desc: "Poulet grillé nature, pâtes, pain et légumes — sans frais supplémentaires. Boissons non alcoolisées à volonté (cola, jus, eau). Prévenez-nous à l'avance — pas de mezzé épicé surprise pour les petits." },
      { title: "Divertissement sûr pour les familles", desc: "Cérémonie des derviches (fascinante pour les enfants), Oba Dombra et danses folkloriques d'Anatolie, d'Azerbaïdjan et du Caucase — dont la spectaculaire danse des couteaux — ainsi que musique turque en direct et set saxophone et DJ. Tout est familial — aucun contenu adulte. Les enfants rejoignent souvent la danse." }
    ],
    faq: [
      { q: "La croisière sur le Bosphore est-elle sûre pour les jeunes enfants ?", a: "Oui — notre bateau est agréé TÜRSAB, dispose d'un espace intérieur avec fenêtres sécurisées, de gilets de sauvetage dans toutes les tailles, et d'un équipage professionnel expérimenté avec les familles. Nous recommandons le pont intérieur pour les tout-petits, le pont extérieur pour les 6 ans et plus." },
      { q: "Quel est le tarif enfant pour la croisière sur le Bosphore ?", a: "Les enfants de **0 à 3 ans : GRATUIT** (aucun frais, aucun frais caché). **4-9 ans : €5 de réduction** sur le tarif adulte — soit €{p.dinnerStd}/2 = €12 par enfant pour la croisière Standard. **10+ ans : tarif adulte plein.** Le transfert depuis l'hôtel est gratuit pour les 0-3 ans, standard pour les 4+ (€{p.transfer}/pers.)." },
      { q: "Y a-t-il un menu enfants à bord ?", a: "Oui — poulet grillé nature, pâtes, pain, légumes de saison et boissons non alcoolisées à volonté. Signalez-nous les allergies ou les enfants difficiles lors de la réservation, nous préparerons quelque chose que votre enfant mangera avec plaisir." },
      { q: "La musique ou le spectacle sont-ils trop forts pour les enfants ?", a: "Les performances en direct se déroulent sur une seule zone de scène dédiée — si vos enfants sont sensibles au bruit, nous vous placerons à une table à l'arrière dans un endroit plus calme. Le spectacle dure 40 minutes au total, le reste de la soirée reste en musique turque d'ambiance et DJ à volume modéré." },
      { q: "Que se passe-t-il si mon bébé s'endort pendant la croisière ?", a: "Aucun souci — beaucoup dorment. L'espace intérieur dispose de banquettes où un bébé ou un tout-petit peut faire une sieste confortablement. Demandez à notre équipage une couverture chaude si besoin. Aucun frais supplémentaire." },
      { q: "Dois-je amener une poussette à bord ?", a: "Vous pouvez, mais nous recommandons de laisser les grandes poussettes à l'hôtel (ou avec notre chauffeur si vous avez pris le transfert — nous la garderons en sécurité). Notre bateau a des coursives étroites et les ponts sont à niveaux. Un porte-bébé léger est plus pratique à bord." }
    ],
    cta: {
      primary: "Réserver la croisière familiale · Paiement à bord",
      secondary: "Annulation gratuite jusqu'à 2 heures avant · Aucun prépaiement",
      tertiary: "Disponibilités ce soir"
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Croisière Romantique Bosphore dès €{p.dinnerStd} — Dîner aux Chandelles',
      description: 'Croisière romantique sur le Bosphore : table aux chandelles, roses, dîner multi-plats sous les ponts illuminés. Dès €{p.dinnerStd}/personne.'
    },
    hero: {
      h1: "Croisière romantique sur le Bosphore",
      subtitle: "Dîner aux chandelles, table ornée de roses, ponts illuminés et un moment privé sous le ciel nocturne le plus emblématique d'Istanbul, à partager à deux.",
      badge: "Anniversaire · Lune de miel · Soirée spéciale"
    },
    intro: [
      "La **croisière romantique sur le Bosphore** est la soirée la plus emblématique d'Istanbul pour les couples. Tandis que le soleil se couche derrière le palais de Dolmabahçe et que le pont du Bosphore s'illumine de couleurs, vous partagez un généreux festin turc à une table privée avec votre partenaire — bougies, fleurs fraîches et violon en direct qui glisse sur le pont.",
      "Notre arrangement de table romantique (+€{p.romantic}/table) transforme n'importe quel endroit en moment spécial : roses rouges, bougies scintillantes, mot de bienvenue manuscrit. Ajoutez le forfait alcool de 2 verres pour boire du vin sous les étoiles (+€{p.alcohol2}/pers.) ou restez sobre avec les boissons non alcoolisées incluses. Dans tous les cas, l'équipage s'occupe discrètement du reste.",
      "Que vous fêtiez un anniversaire, prépariez une surprise pour votre partenaire ou souhaitiez simplement vivre une nuit inoubliable dans la ville la plus romantique d'Europe — c'est la croisière que les couples d'Istanbul choisissent en premier. Note de 4,8★, agréée TÜRSAB et — surtout — paiement à bord, vous ne vous engagez donc que pour la soirée elle-même."
    ],
    highlights: [
      { title: "Table romantique aux chandelles", desc: "Ajoutez l'arrangement de table romantique à +€{p.romantic}/table : roses rouges fraîches, bougies scintillantes, pétales de rose sur la nappe et carte manuscrite. Photos incluses." },
      { title: "Meilleures tables pour la transition coucher de soleil-nuit", desc: "Les tables près des fenêtres sont réservées aux couples. Regardez le pont du Bosphore s'illuminer, la Tour de Léandre scintiller et la mosquée d'Ortaköy s'éclairer depuis votre table privée." },
      { title: "Violon en direct et ambiance intime", desc: "Violon en direct et musique turque acoustique pendant le dîner créent une ambiance lente et romantique. Ensuite, le DJ prend le relais et les couples dansent sous les lumières sur le pont extérieur." },
      { title: "Vin, champagne, accords premium", desc: "Ajoutez 2 verres d'alcool — vin local, bière, rakı (+€{p.alcohol2}/pers.). Champagne importé et accords premium sur demande — mentionnez-le à la réservation." }
    ],
    faq: [
      { q: "Qu'est-ce qui rend cette croisière romantique ?", a: "La combinaison d'une table privée, d'un arrangement aux chandelles (optionnel +€{p.romantic}), d'un généreux dîner turc, d'un violon en direct et de musique acoustique, et des ponts illuminés du Bosphore qui passent au-dessus. Nous concevons l'expérience pour les couples — atmosphère calme en début de soirée, puis DJ énergique et danse. Vous choisissez le rythme." },
      { q: "Pouvez-vous organiser une surprise pour mon partenaire — anniversaire, anniversaire de mariage, demande en mariage ?", a: "Oui — indiquez-le à la réservation. Nous pouvons coordonner un gâteau d'anniversaire (offert), un arrangement de table spécial, une carte manuscrite dans votre langue, ou avec notre personnel pour apporter quelque chose à table au bon moment. Pour les demandes en mariage, nous recommandons d'écrire directement sur WhatsApp pour planifier discrètement." },
      { q: "Combien coûte la croisière romantique pour 2 personnes ?", a: "Dîner-croisière pour 2 : 2 × €{p.dinnerStd} = €48.60. Ajoutez l'arrangement romantique +€{p.romantic} = €63.60. Aucun prépaiement — paiement à bord. Pour le forfait alcool de 2 verres, ajoutez 2 × €{p.alcohol2} = €20." },
      { q: "La croisière romantique sur le Bosphore est-elle privée — uniquement pour nous ?", a: "Non — c'est une croisière partagée avec d'autres couples et convives (jusqu'à 60-80 au total). **Votre table** est privée (uniquement pour votre groupe), mais d'autres convives sont à bord. Si vous souhaitez un bateau entièrement privé pour 2 personnes, il s'agit d'une **Croisière privée sur le Bosphore** séparée (nous pouvons l'organiser sur demande — écrivez-nous)." },
      { q: "Pouvons-nous apporter nos propres fleurs, gâteau ou cadeaux ?", a: "Bien sûr. Apportez ce que vous voulez — notre personnel aidera à placer discrètement un cadeau surprise, cacher une bague dans le dessert ou disposer des fleurs que vous apportez. Aucun frais supplémentaire comme un droit de bouchon. Prévenez-nous simplement pour que nous puissions coordonner le timing." },
      { q: "Quelle tenue porter pour une croisière romantique sur le Bosphore ?", a: "Smart casual à chic — beaucoup de couples s'habillent élégamment (robes, vestes). Aucun code vestimentaire strict, mais l'atmosphère est plus spéciale que le tourisme décontracté. Apportez une veste légère ou un châle — même en été, le pont peut être frais. Chaussures confortables si vous prévoyez de danser après le dîner." }
    ],
    cta: {
      primary: "Réserver la croisière romantique · Paiement à bord",
      secondary: "Ajoutez l'arrangement romantique (+€{p.romantic}) dans l'assistant · Annulation gratuite jusqu'à 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Croisière Dîner Halal Bosphore dès €{p.dinnerStd} — Spectacle + Tour Nocturne',
      description: 'Croisière dîner 3h sur le Bosphore : spectacle folklorique en direct, ponts illuminés, vues panoramiques nocturnes. Menu halal disponible.'
    },
    hero: {
      h1: "Croisière halal sur le Bosphore à Istanbul",
      subtitle: "Menu 100 % halal certifié, alcool toujours optionnel, divertissement familial et atmosphère respectueuse pour les voyageurs musulmans — la soirée sur le Bosphore, bien faite.",
      badge: "100 % halal · Familiale · Propriétaire musulman"
    },
    intro: [
      "La **croisière halal sur le Bosphore** est la croisière dîner la plus respectueuse d'Istanbul pour les voyageurs musulmans. Toute viande servie à bord — saumon, dorade, poulet, köfte d'agneau, filet de bœuf, entrecôte — est **certifiée halal** par des fournisseurs approuvés. Nous servons le même menu à tous les convives ; il n'y a pas de « section halal » séparée car tout le bateau est halal par défaut.",
      "L'alcool est un **supplément optionnel** — il n'est jamais imposé aux convives et le plan de table sépare naturellement ceux qui préfèrent une table sans alcool. Il est disponible pour les convives qui souhaitent le forfait alcool de 2 verres (+€{p.alcohol2}/pers.), mais les boissons non alcoolisées illimitées incluses (eau, cola, jus) suffisent pour la plupart des familles musulmanes. Notre équipage est formé pour être respectueux de vos préférences sans présumer.",
      "La **croisière sur le Bosphore halal-friendly** est importante pour les voyageurs d'Arabie saoudite, des EAU, du Koweït, du Qatar, d'Iran, de Malaisie, d'Indonésie, du Pakistan et du Maroc qui souhaitent la soirée la plus emblématique d'Istanbul sans compromis. Agréée TÜRSAB, 4,8★ et paiement à bord — vous ne vous engagez à rien tant que vous n'êtes pas certain que l'expérience répond à vos standards."
    ],
    highlights: [
      { title: "Menu 100 % halal certifié", desc: "Toute viande (saumon, dorade, poulet, köfte, bœuf, entrecôte) est certifiée halal par des fournisseurs approuvés. La cuisine suit la préparation halal. Aucun produit porcin ni additif non halal. Options végétariennes toujours disponibles." },
      { title: "Alcool optionnel, jamais imposé", desc: "Les forfaits alcool sont un supplément — non inclus par défaut. Les boissons non alcoolisées (eau, cola, jus) sont illimitées et gratuites. Votre table reste sans alcool sauf demande explicite. L'équipage respecte discrètement votre choix." },
      { title: "Divertissement familial", desc: "Cérémonie des derviches, danses folkloriques turques traditionnelles, musique turque en direct. Aucune performance de type boîte de nuit, aucun contenu inapproprié. Sûr pour les enfants, respectueux pour les familles. La danse orientale est une forme d'art traditionnelle, présentée avec pudeur." },
      { title: "Respect des horaires de prière", desc: "Si l'embarquement coïncide avec la prière du maghrib ou de l'isha (20h00-21h00), notre personnel peut vous indiquer un espace de prière calme à l'embarcadère de Kabataş avant le départ. Signalez-le simplement à la réservation." }
    ],
    faq: [
      { q: "La croisière sur le Bosphore est-elle 100 % halal ?", a: "Oui — chaque produit carné du menu (poisson, poulet, köfte, filet de bœuf, entrecôte, agneau) est certifié halal par des fournisseurs approuvés. La cuisine suit les standards de préparation halal. Aucun porc n'est servi nulle part sur le bateau. Ce n'est pas une « option halal » — l'intégralité du menu est halal." },
      { q: "Les autres convives boivent-ils de l'alcool sur cette croisière ?", a: "Certains convives ajoutent le forfait optionnel de 2 verres d'alcool (+€{p.alcohol2}/pers.). Les tables sont naturellement séparées — vous pouvez demander une section sans alcool. L'équipage n'apporte pas d'alcool sauf commande spécifique d'un convive. Les boissons non alcoolisées (à volonté) sont incluses pour tous." },
      { q: "Cette croisière convient-elle aux familles musulmanes avec enfants ?", a: "Oui — c'est l'une des croisières les plus respectueuses pour les familles à Istanbul. Le divertissement est pudique (danses folkloriques, derviches, musique turque), les enfants de moins de 3 ans sont gratuits, 4-9 ans à €5. Aucune ambiance de boîte de nuit. Les familles du Golfe, d'Indonésie, de Malaisie, du Pakistan et du Maroc réservent régulièrement cette croisière." },
      { q: "Puis-je prier à bord ?", a: "Il n'y a pas de salle de prière dédiée à bord, mais nous recommandons de prier avant l'embarquement à 20h00 (la prière du maghrib tombe généralement dans cette fenêtre). Des installations de prière existent à l'embarcadère de Kabataş. Si vous devez prier pendant la navigation (isha), parlez à l'équipage — nous pouvons organiser un coin calme sur le pont." },
      { q: "Quels sont les tarifs pour une famille musulmane de 4 personnes (2 adultes, 2 enfants) ?", a: "Croisière dîner : 2 × €{p.dinnerStd} + 2 × €19.30 (4-9 ans €5 de réduction) = €87.20. Si les enfants ont moins de 3 ans, c'est gratuit : 2 × €{p.dinnerStd} = €48.60. Ajoutez €5 de transfert hôtel par adulte. Total : €48.60–€92.90 pour une famille de 4, aucun prépaiement, paiement à bord." },
      { q: "Le transfert depuis l'hôtel est-il aussi halal ?", a: "Le transfert est simplement un trajet en voiture — aucun repas ni boisson n'est impliqué, donc aucune préoccupation halal. Nos chauffeurs sont professionnels, respectueux et ponctuels. Les zones de transfert couvrent Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli et 8 autres zones centrales où les voyageurs musulmans séjournent habituellement." }
    ],
    cta: {
      primary: "Réserver la croisière halal · Paiement à bord",
      secondary: "Annulation gratuite jusqu'à 2h avant · Aucun prépaiement · Certifié halal",
      tertiary: "Disponibilités ce soir"
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Expérience VIP sur le Bosphore dès €{p.dinnerStd} — Dîner Premium sur le Bosphore',
      description: 'Croisière-dîner sur le Bosphore de niveau VIP : menu turc complet, spectacles en direct, table près de la scène en option, service attentionné. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Paiement à bord, annulation gratuite.'
    },
    hero: {
      h1: 'Expérience VIP sur le Bosphore — Croisière Dîner',
      subtitle: 'Un seul menu, un seul standard : le premium pour tous. Une soirée de 3 heures sur le Bosphore à bord de l\'AMOR — dîner turc généreux, spectacles en direct et, en option, une table privée près de la scène. Nous ne vendons pas de "classe VIP" séparée : nous servons le meilleur à chaque invité.',
      badge: '40% DE RÉDUCTION · Un Menu, Standard Premium · Paiement à Bord'
    },
    intro: [
      'Beaucoup de bateaux du Bosphore séparent leurs invités entre "Standard" et "VIP". Pas nous. À bord de l\'**AMOR**, il y a un seul menu, préparé avec le même soin pour tous : 10 variétés de meze turcs, une entrée chaude, un plat principal au choix (saumon, bar, poulet ou köfte), un gâteau glacé et des boissons sans alcool à volonté. Le programme de spectacles en huit numéros est également inclus — Oba Dombra, cérémonie des derviches tourneurs, danses folkloriques d\'Anatolie et d\'Azerbaïdjan, danse orientale, danse des couteaux caucasienne, musique live et un final saxophone et DJ — le tout compris dans le prix de €{p.dinnerStd}/personne.',
      'Le sentiment VIP commence à votre table. Si vous souhaitez être au plus près de la scène et de la vue, ajoutez la **table privée près de la scène** (+€{p.romantic}/table) : votre place est réservée à l\'avance, avec le meilleur angle sur les derviches, les danses folkloriques et le Bosphore illuminé. Le choix préféré des couples, des célébrations et des amateurs de photo.',
      'L\'AMOR est un bateau moderne de 42 mètres, 3 ponts, jusqu\'à 400 invités, chauffé en hiver et climatisé en été. La route de 3 heures part de Kabataş (embarquement dès 20h00, départ 21h00, retour 00h00) et longe Dolmabahçe, la mosquée d\'Ortaköy, la forteresse de Rumeli et les lumières du pont du Bosphore. Licence TÜRSAB (A-17672), 4,9★ sur Google. Aucun prépaiement : vous payez à bord, avec annulation gratuite jusqu\'à 2 heures avant le départ.'
    ],
    highlights: [
      { title: 'Un seul menu, standard premium', desc: 'Il n\'y a pas de "menu VIP" séparé — parce que notre menu unique est déjà à ce niveau. 10 variétés de meze, entrée chaude, 4 plats principaux au choix, dessert et boissons sans alcool à volonté, servis avec le même soin à chaque table.' },
      { title: 'Table privée près de la scène (+€{p.romantic}/table)', desc: 'Les tables les plus proches des derviches, des danses folkloriques et de la danse orientale sont réservées à l\'avance. Vue imprenable sur la scène et le Bosphore. Votre table est privée, jamais partagée.' },
      { title: 'Service à table attentionné', desc: 'Notre équipe vous sert directement à table : les plats, les conseils sur le menu, les boissons en supplément, les demandes particulières. Pas de file d\'attente.' },
      { title: '40% DE RÉDUCTION — avant €{p.dinnerStdOriginal}, maintenant €{p.dinnerStd}', desc: 'Tarif de réservation directe : €{p.dinnerStd}/personne (prix public €{p.dinnerStdOriginal}). Paiement à bord, sans prépaiement. Annulation gratuite jusqu\'à 2 heures avant le départ.' }
    ],
    faq: [
      { q: 'Vendez-vous un "forfait VIP" ? Quelle différence avec le Standard ?', a: 'Nous ne vendons pas de forfait VIP séparé : il y a un seul menu, servi à tous avec le même standard premium. Ce que nous appelons "expérience VIP", c\'est personnaliser votre soirée : table privée près de la scène (+€{p.romantic}/table), service à table attentionné et boissons en option. La croisière dure 3 heures, €{p.dinnerStd}/personne.' },
      { q: '€{p.dinnerStd}, est-ce vraiment 40% de réduction ?', a: 'Oui — notre prix public est de €{p.dinnerStdOriginal}/personne. €{p.dinnerStd} est le tarif de réservation directe, sans commissions d\'intermédiaires. Vous payez à bord, il n\'y a aucun prépaiement.' },
      { q: 'Que contient le menu ?', a: '10 variétés de meze turcs, une entrée chaude, un plat principal au choix (saumon, bar, poulet ou köfte) et un gâteau glacé en dessert, avec boissons sans alcool à volonté. Le programme en huit numéros est inclus : Oba Dombra, cérémonie des derviches, danses folkloriques d\'Anatolie et d\'Azerbaïdjan, danse orientale, danse des couteaux caucasienne, musique live et un final saxophone et DJ.' },
      { q: 'L\'alcool est-il inclus ?', a: 'Non — l\'alcool est un supplément séparé : 2 verres de vin ou de bière locale pour +€{p.alcohol2}/personne. Les boissons sans alcool sont incluses à volonté et gratuites. Les spiritueux premium importés sont facturés séparément à bord.' },
      { q: 'Comment garantir une table près de la scène ?', a: 'Il suffit de sélectionner l\'option "table privée près de la scène" (+€{p.romantic}/table) lors de la réservation : la table est réservée à votre nom. Les meilleures places partent avec les réservations anticipées, nous vous conseillons donc de l\'ajouter avant le jour de la croisière.' },
      { q: 'Quel type de bateau est-ce ?', a: 'L\'AMOR — un bateau de passagers moderne de 42 mètres, 3 ponts, d\'une capacité de 400 invités, chauffé en hiver et climatisé en été. Départ du quai de Kabataş : embarquement 20h00, départ 21h00, retour 00h00. Itinéraire : Dolmabahçe, Ortaköy, forteresse de Rumeli, Beylerbeyi et les lumières du pont du Bosphore.' }
    ],
    cta: {
      primary: 'Réservez votre table · Paiement à bord',
      secondary: 'Avant €{p.dinnerStdOriginal}, maintenant €{p.dinnerStd} · Annulation gratuite jusqu\'à 2 h avant',
      tertiary: 'Ajouter une table privée près de la scène (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Croisière Privée Bosphore — Location de Bateau à Istanbul (25+ invités)',
      description: 'Croisière privée Bosphore pour groupes, mariages, événements d\'entreprise. Bateau exclusif, menu sur mesure, durée flexible. Annulation gratuite.'
    },
    hero: {
      h1: "Croisière privée sur le Bosphore",
      subtitle: "Louez le bateau entier pour votre groupe — réunions familiales, dîners d'entreprise, anniversaires, fiançailles, mariages. Usage privé, menu personnalisé, horaires flexibles.",
      badge: "Location privée · 25+ convives · Menu personnalisé"
    },
    intro: [
      "La **croisière privée sur le Bosphore** signifie que tout le bateau est à vous — aucun autre convive, aucune table partagée, aucune piste de danse partagée. Idéal pour les réunions familiales, dîners d'entreprise, anniversaires, enterrements de vie de jeune fille/garçon ou réceptions de mariage. Le bateau, l'équipage, le menu, le divertissement et le timing s'adaptent à votre groupe.",
      "Notre **location de croisière privée sur le Bosphore** accueille des groupes de **25 à 80 convives**. Les groupes plus petits peuvent tout de même demander l'expérience privée — nous établissons un devis avec un tarif minimum couvrant les coûts d'exploitation du bateau. Les plus grands groupes (taille mariage) bénéficient d'un tarif personnalisé et incluent souvent décoration sur mesure, groupe live, service du gâteau et durée prolongée (4-5 heures au lieu des 3 standard).",
      "Que vous organisiez un événement d'entreprise pour des clients, une fête d'anniversaire pour les 50 ans ou une réception de mariage sous les ponts les plus emblématiques d'Istanbul, c'est la **croisière privée que les organisateurs d'événements d'Istanbul recommandent**. Note 4,8★, agréée TÜRSAB, équipage parlant couramment anglais et flexibilité sur tout — parcours, menu, musique, timing."
    ],
    highlights: [
      { title: "Tout le bateau, rien que pour vous", desc: "Aucun autre convive. Votre groupe a tous les ponts, toutes les tables. Choisissez votre musique, votre code vestimentaire, votre programme. La confidentialité compte — nous la respectons." },
      { title: "Menu et forfait boissons personnalisés", desc: "Travaillez avec notre chef pour personnaliser le menu : mezzés spécifiques, choix de plats, plats adaptés à votre culture ou besoins diététiques. Forfaits alcool, flûtes de champagne, bars à cocktails sur mesure — tout peut être organisé." },
      { title: "Durée et départ flexibles", desc: "La durée standard de 3 heures peut s'étendre à 4-5 heures. Choisissez le départ de jour à 12h00, coucher de soleil à 17h30 ou nuit à 21h00. Vous voulez un jour de semaine au lieu du week-end ? Aucun problème — nous nous adapterons à votre agenda." },
      { title: "Décor, groupe, programme personnalisés", desc: "Décorations personnalisées (ballons, banderoles, arrangement floral), groupe live au lieu de DJ, service de gâteau de mariage, coordination photographe, discours — tout ce dont votre événement a besoin. Nous sommes des organisateurs d'événements, pas seulement des exploitants de bateau." }
    ],
    faq: [
      { q: "Combien coûte une croisière privée sur le Bosphore ?", a: "Pour 25+ personnes, généralement €{p.dinnerStd}/pers. + frais de location de bateau selon la taille du groupe, la date et la durée. Écrivez-nous sur WhatsApp avec votre taille de groupe, date et exigences — nous établissons un devis dans l'heure. La plupart des événements tombent dans la fourchette €2 000-€6 000 au total." },
      { q: "Quelle est la taille minimale de groupe pour une croisière privée sur le Bosphore ?", a: "Techniquement, 25 convives rendent une croisière privée économiquement viable. Les groupes plus petits (10-24) peuvent toujours réserver en privé mais paient un tarif minimum équivalent à ~25 personnes. Pour les très petits groupes (2-10), envisagez plutôt le dîner-croisière régulier — votre table est déjà privée, seul le bateau est partagé." },
      { q: "Puis-je organiser un mariage sur la croisière Bosphore ?", a: "Oui — nous organisons 10-15 réceptions de mariage par an. Capacité jusqu'à 80 en dîner assis, jusqu'à 100 en style cocktail. Nous coordonnons avec votre photographe, wedding planner, groupe ou chef. Service de gâteau personnalisé, ouverture de bal, flûtes de champagne possibles. Écrivez sur WhatsApp pour un devis mariage." },
      { q: "Et pour les événements d'entreprise et dîners d'équipe ?", a: "Les croisières privées d'entreprise sont nos réservations les plus fréquentes. Dîner client, accueil client, lancement de produit, célébration d'équipe — tout fonctionne. Nous pouvons fournir une facture avec détail de TVA, organiser les transferts hôtel pour votre équipe et coordonner le matériel brandé sur demande (éléments de table, signalétique)." },
      { q: "Puis-je amener un groupe live ou DJ à la place de votre divertissement ?", a: "Oui — vous pouvez amener votre propre groupe live, DJ, photographe. Ou garder le nôtre (derviches, danseurs folkloriques, oriental, DJ) et ajouter le vôtre par-dessus. Le bateau dispose d'un système son et d'une piste de danse. Prévenez-nous à l'avance pour que nous puissions coordonner les niveaux sonores." },
      { q: "Comment demander un devis pour une croisière privée sur le Bosphore ?", a: "Le plus simple : écrivez sur WhatsApp au +90 532 244 29 22 avec (1) votre taille de groupe, (2) date préférée, (3) motif (mariage, entreprise, anniversaire), (4) exigences particulières. Nous répondons en 1 heure en journée, 12 heures la nuit. Nous pouvons aussi organiser un appel vidéo pour discuter des détails." }
    ],
    cta: {
      primary: "WhatsApp pour devis privé",
      secondary: "Menu personnalisé, groupe 25-80, durée flexible · Réponse en moins d'1h",
      tertiary: "Voir le dîner-croisière (€{p.dinnerStd})"
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosphore pour Couples dès €{p.dinnerStd} — Soirée Romantique Istanbul',
      description: 'Croisière dîner Bosphore pour couples. Table privée, ponts illuminés, décor romantique optionnel. Dès €{p.dinnerStd}/personne.'
    },
    hero: {
      h1: "Croisière sur le Bosphore pour couples",
      subtitle: "Une soirée en tête-à-tête sur le Bosphore — table privée, musique live, ponts illuminés au-dessus de vous. Que ce soit votre premier rendez-vous à Istanbul ou votre dixième anniversaire, cette soirée fonctionne.",
      badge: "Table privée · Musique live · Paiement à bord"
    },
    intro: [
      "La **croisière sur le Bosphore pour couples** est la soirée en tête-à-tête préférée d'Istanbul. Tous les couples ne célèbrent pas un anniversaire — parfois vous êtes simplement dans la ville la plus romantique du monde et vous voulez une belle soirée ensemble. Cette croisière vous offre : une table privée pour deux, un dîner turc varié servi lentement, du violon en direct et de la musique acoustique pendant le repas, et le pont du Bosphore illuminé qui passe doucement au-dessus.",
      "L'ambiance est **chaleureuse mais pas trop romantique** — pas de musique de demande en mariage forcée, pas d'applaudissements coordonnés gênants pour les « jeunes mariés ». Vous mangez, buvez, discutez, regardez les lumières d'Istanbul. Si vous souhaitez ajouter un arrangement de table romantique (bougies, roses, +€{p.romantic}), parfait — sinon le dîner seul est déjà spécial.",
      "Que vous soyez à Istanbul pour 3 jours avec votre partenaire, que vous fêtiez un événement discret ou que vous prépariez une future demande en mariage — la **croisière sur le Bosphore pour couples** vous offre 3 heures ensemble dans l'une des villes les plus photographiées du monde. 4,8★, paiement à bord, annulation gratuite."
    ],
    highlights: [
      { title: "Table privée pour deux", desc: "Table privée dédiée pour 2, non partagée. Priorité aux couples pour les places près des fenêtres. Photos du Bosphore au coucher du soleil et de nuit juste derrière votre fenêtre." },
      { title: "Dîner varié servi lentement", desc: "10 mezzés turcs, entrée chaude, plat principal (saumon, dorade, poulet, köfte ou végétarien), gâteau glacé en dessert. Servi lentement sur 3 heures — vous n'êtes pas pressés." },
      { title: "Violon en direct et musique douce", desc: "Violon en direct et musique turque acoustique pendant le dîner créent une ambiance intime propice à la conversation. Ensuite, le DJ prend le relais pour les couples qui veulent danser." },
      { title: "Suppléments pour soirées spéciales", desc: "Arrangement de table romantique (bougies, roses) : +€{p.romantic}. Forfait alcool de 2 verres (vin, rakı) : +€{p.alcohol2}/pers. Transfert hôtel (aller-retour) : +€{p.transfer}/pers. Choisissez ce qui correspond à votre soirée." }
    ],
    faq: [
      { q: "Cette croisière Bosphore convient-elle pour une soirée décontractée, pas une occasion spéciale ?", a: "Oui — la plupart de nos couples ne célèbrent rien de particulier, ils passent simplement une belle soirée ensemble. L'ambiance est chaleureuse et accueillante sans être excessive. Vous pouvez ajouter l'arrangement romantique (+€{p.romantic}) si vous voulez un extra, ou simplement profiter de la soirée standard." },
      { q: "Combien coûte la croisière sur le Bosphore pour 2 personnes ?", a: "Dîner-croisière pour 2 : 2 × €{p.dinnerStd} = €48.60. Ajoutez le transfert hôtel pour les deux : +€{p.transfer}×2 = €10. Ajoutez le forfait alcool de 2 verres pour les deux : +€{p.alcohol2}×2 = €20. Aucun prépaiement — paiement à bord." },
      { q: "Les couples peuvent-ils apporter leur propre vin ou champagne ?", a: "Nous n'autorisons pas l'alcool extérieur (raison de licence d'exploitation). Mais nous avons le forfait alcool de 2 verres avec vin local (+€{p.alcohol2}/pers.) et pouvons organiser des vins importés premium ou du champagne moyennant des frais — demandez à la réservation. Prosecco, Chianti et Cabernet sont des demandes premium populaires." },
      { q: "Est-ce un problème si nous ne buvons pas d'alcool — sommes-nous inhabituels ?", a: "Pas du tout — beaucoup de couples sautent complètement l'alcool, pour des raisons halal ou simplement par préférence. Les boissons non alcoolisées illimitées (eau, jus, cola) sont incluses. Personne ne regardera deux fois si votre table est sans alcool. Beaucoup de couples musulmans d'Arabie saoudite, d'Iran et d'Indonésie réservent cette croisière." },
      { q: "Quand est le meilleur moment pour la croisière en couple — coucher de soleil ou nuit ?", a: "La croisière part chaque soir à 21h00 — et en été (mai–août), ce départ unique combine les deux : embarquement dès 20h00 pendant l'heure dorée, coucher de soleil juste au moment du départ, puis les ponts illuminés et les palais éclairés. En hiver, c'est une pure croisière nocturne sous les lumières. Dans les deux cas, une seule réservation offre aux couples la version la plus emblématique du Bosphore." },
      { q: "Y a-t-il une piste de danse — pouvons-nous danser ?", a: "Oui — après le service du dîner (~22h30), le DJ commence et le pont extérieur devient la zone de danse. Beaucoup de couples dansent sur des chansons lentes sous les lumières avec le pont du Bosphore en arrière-plan. Certaines des meilleures photos que vous prendrez à Istanbul." }
    ],
    cta: {
      primary: "Réserver la soirée en couple · Paiement à bord",
      secondary: "Ajoutez l'arrangement romantique (+€{p.romantic}) · Annulation gratuite jusqu'à 2h avant",
      tertiary: "Voir la croisière romantique"
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Croisière Coucher de Soleil & Dîner sur le Bosphore dès €{p.dinnerStd}',
      description: 'Admirez le coucher de soleil sur le Bosphore, puis dînez sous les ponts illuminés. Embarquement 20:00 à Kabataş, départ 21:00. 3 heures, dîner complet. Paiement à bord.'
    },
    hero: {
      h1: 'Croisière coucher de soleil & dîner sur le Bosphore',
      subtitle: 'Embarquez à 20:00 tandis que le ciel se dore au-dessus des minarets — puis dînez sur l\'eau pendant que Dolmabahçe, la mosquée d\'Ortaköy et le pont du Bosphore s\'illuminent pour la nuit.',
      badge: 'Embarquement 20:00 · Départ 21:00 · Du coucher de soleil aux lumières de la ville'
    },
    intro: [
      'L\'expérience de la **croisière coucher de soleil sur le Bosphore** à Istanbul tient en un mot : la transition. Notre croisière embarque à l\'embarcadère de Kabataş dès 20:00 — et lors des longues soirées de mai à août, l\'heure dorée se déploie pendant que vous vous installez sur le pont. Le soleil se couche derrière les minarets de la rive européenne juste autour du départ de 21:00, et vous l\'admirez depuis l\'eau : le palais de Dolmabahçe baigné d\'or, la mosquée d\'Ortaköy silhouettée contre le ciel flamboyant.',
      'Notre **croisière du coucher de soleil à la nuit sur le Bosphore** inclut un dîner turc complet — 10 variétés de mezzés, entrée chaude, plat principal au choix, dessert — servi tandis que la ville allume ses lumières. Au moment du dessert, vous naviguez sous le pont du Bosphore illuminé, 30 millions de lumières se reflétant dans l\'eau sombre. Ce passage du crépuscule à la nuit complète, en une seule croisière de 3 heures, c\'est là tout l\'intérêt.',
      'Que vous soyez photographe en quête de la dernière lumière, un couple cherchant « la photo souvenir d\'Istanbul » ou un visiteur qui veut la soirée classique sur l\'eau, c\'est la **croisière dîner au coucher de soleil sur le Bosphore** que les locaux recommandent aux visiteurs. Dès €{p.dinnerStd}/pers., note 4,8★, agréée TÜRSAB, paiement à bord — aucun prépaiement.'
    ],
    highlights: [
      { title: 'Couchers de soleil d\'été pile au départ', desc: 'De mai à août, le soleil se couche à Istanbul entre environ 20:15 et 20:45 — l\'embarquement à 20:00 vous offre l\'heure dorée sur le pont, et le départ de 21:00 vous place sur l\'eau pour le coucher de soleil lui-même. Caméra prête — c\'est la photo.' },
      { title: 'De l\'heure bleue à la nuit complète', desc: 'Pas seulement le coucher de soleil — la croisière traverse le crépuscule jusqu\'au Bosphore entièrement illuminé. Lumière dorée, heure bleue, puis 30 millions de lumières de pont sur l\'eau sombre : trois phases de lumière en une seule soirée.' },
      { title: 'Dîner complet pendant la croisière', desc: '10 variétés de mezzés turcs, entrée chaude, plat principal (saumon, dorade, poulet, köfte, végétarien), gâteau glacé, boissons non alcoolisées à volonté — servis tandis que les lumières de la ville s\'allument.' },
      { title: 'Dolmabahçe, Ortaköy, pont du Bosphore — tous illuminés', desc: 'Le parcours passe devant le palais de Dolmabahçe, la mosquée d\'Ortaköy, le pont du Bosphore, Rumeli Hisarı et le palais de Beylerbeyi au moment où leurs lumières s\'allument. Chaque monument dans sa plus belle lumière.' }
    ],
    faq: [
      { q: 'À quelle heure part la croisière coucher de soleil sur le Bosphore ?', a: 'L\'embarquement commence à 20:00 à l\'embarcadère de Kabataş, le bateau part à 21:00 et revient vers 00:00. En été (mai–août), le soleil se couche entre environ 20:15 et 20:45 — l\'heure dorée a lieu pendant l\'embarquement, et le coucher de soleil lui-même juste autour du départ, admiré depuis l\'eau.' },
      { q: 'La croisière coucher de soleil sur le Bosphore est-elle la même que la croisière dîner ?', a: 'Oui — c\'est une seule et même croisière. Il y a un seul départ quotidien à 21:00, avec dîner complet et spectacles live à bord. Lors des longues soirées d\'été, elle fait aussi office de croisière coucher de soleil : vous embarquez pendant l\'heure dorée et naviguez à travers l\'heure bleue jusqu\'à la nuit illuminée. En hiver, la même croisière devient une pure expérience de lumières nocturnes.' },
      { q: 'Quel est le prix de la croisière coucher de soleil sur le Bosphore ?', a: 'Dès €{p.dinnerStd}/pers. pour la croisière (3 heures, dîner complet, divertissement live). Paiement à bord — aucun prépaiement. 0-3 ans gratuit, 4-9 ans €5 de réduction.' },
      { q: 'Quelle est la meilleure période de l\'année pour une croisière coucher de soleil sur le Bosphore ?', a: 'De mai à août. Les couchers de soleil tardifs d\'Istanbul (20:15–20:45) coïncident avec le départ de 21:00 : vous profitez de l\'heure dorée, du coucher de soleil et des ponts illuminés en une seule soirée. En automne et en hiver, le soleil se couche plus tôt et la même croisière devient une expérience complète de lumières nocturnes — tout aussi photogénique, ambiance différente.' },
      { q: 'Que dois-je apporter pour une croisière au coucher de soleil ?', a: 'Un smartphone ou un appareil photo — l\'heure dorée et les ponts illuminés le réclament. Une veste légère : la brise se lève sur le pont après le coucher du soleil. Tenue smart-casual — vous dînez, mais aucun code vestimentaire strict.' },
      { q: 'Voit-on les ponts illuminés de nuit pendant cette croisière ?', a: 'Oui — c\'est toute la seconde moitié de la soirée. La croisière navigue de 21:00 à 00:00 : après le coucher de soleil et l\'heure bleue, vous passez sous le pont du Bosphore entièrement illuminé, devant les palais éclairés et la Tour de Léandre, avant de revenir à Kabataş vers 00:00.' },
      { q: 'À quelle heure le soleil se couche-t-il à Istanbul ?', a: 'En été (juin–juillet), le soleil se couche à Istanbul vers 21:00–20:45. En hiver, vers 16:30–17:00. Pour une expérience coucher de soleil et nuit, la croisière dîner de 21:00 de Bosphorus Night au départ de Kabataş capture la fin de l\'heure dorée et l\'heure bleue en été, et les monuments illuminés toute l\'année.' },
      { q: 'La croisière coucher de soleil sur le Bosphore vaut-elle le coup ?', a: 'Oui — le coucher de soleil sur le pont du Bosphore est l\'une des vues emblématiques d\'Istanbul. La croisière dîner de 21:00 de Bosphorus Night (€{p.dinnerStd}/pers.) capture l\'heure bleue après le coucher du soleil ainsi que les palais illuminés, avec un dîner complet et des spectacles live pendant 3 heures.' }
    ],
    cta: {
      primary: 'Réserver la croisière coucher de soleil · Paiement à bord',
      secondary: 'Embarquement 20:00 · Départ 21:00 · Dîner inclus · Annulation gratuite jusqu\'à 2h avant',
      tertiary: 'Voir tous les détails de la croisière dîner'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tour Nocturne Bosphore dès €{p.dinnerStd} — Croisière Dîner + Spectacle',
      description: 'Tour nocturne 3h sur le Bosphore avec dîner et spectacle en direct. Départ 21h00 de Kabataş, ponts illuminés. Annulation gratuite, paiement à bord.'
    },
    hero: {
      h1: "Croisière nocturne sur le Bosphore",
      subtitle: "Les ponts illuminés d'Istanbul, les palais éclairés et les eaux miroir du Bosphore reflétant 30 millions de lumières — la croisière nocturne qui définit la soirée istanbouliote.",
      badge: "Ponts illuminés · Spectacle live · Dîner inclus"
    },
    intro: [
      "La **croisière nocturne sur le Bosphore** est l'activité de soirée la plus recommandée à Istanbul. Et voici pourquoi : après la tombée de la nuit, le Bosphore se transforme. Le pont du Bosphore change entre bleu, violet et or. Le palais de Dolmabahçe brille d'un jaune chaleureux. La mosquée d'Ortaköy se reflète parfaitement dans l'eau noire. Chaque monument d'Istanbul atteint son drame maximal la nuit.",
      "Notre **croisière nocturne avec dîner sur le Bosphore** rassemble la soirée emblématique complète : 3 heures sur l'eau (21h00-00h00), festin turc varié, un programme folklorique en direct de huit numéros (Oba Dombra, derviches, danses folkloriques d'Anatolie et d'Azerbaïdjan, danse orientale, danse des couteaux caucasienne), musique live et set saxophone et DJ qui anime le pont jusqu'à la fin de la nuit. Chaque convive reçoit le même programme — aucune option « basique » qui saute les meilleures parties.",
      "Que ce soit votre premier voyage à Istanbul et que vous cherchiez « la seule chose à faire la nuit », ou que vous soyez déjà venu et vouliez les 3 heures les plus photogéniques de la ville — c'est la **croisière nocturne sur le Bosphore** notée 4,8★ par 11 317+ voyageurs. Agréée TÜRSAB, paiement à bord, aucun prépaiement."
    ],
    highlights: [
      { title: "Bosphore illuminé à son apogée", desc: "Le pont du Bosphore change de couleur (bleu, violet, or), les palais brillent en jaune, la mosquée d'Ortaköy se reflète dans l'eau noire. 21h00-00h00, éclairage maximal de tous les monuments d'Istanbul." },
      { title: "Spectacle turc traditionnel à bord", desc: "Huit numéros : Oba Dombra, cérémonie des derviches, Sarı Gelin, pot-pourri azerbaïdjanais, danse orientale, pot-pourri anatolien et la danse des couteaux géorgienne et caucasienne, puis saxophone live et set DJ. 40 minutes de performance, puis musique + dîner continuent." },
      { title: "Dîner varié complet", desc: "10 mezzés turcs, entrée chaude (paçanga böreği), plat principal (saumon, dorade, poulet, köfte, végétarien — votre choix), dessert (gâteau glacé), boissons non alcoolisées à volonté. Certifié halal." },
      { title: "Parcours complet du Bosphore", desc: "Kabataş → Dolmabahçe → Palais Çırağan → Mosquée d'Ortaköy → Bebek → Rumeli Hisarı → Pont Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Tour de Léandre → Kabataş." }
    ],
    faq: [
      { q: "Quand est la croisière nocturne sur le Bosphore ?", a: "Embarquement à partir de 20h00 à l'embarcadère de Kabataş. Le bateau part à 21h00, revient vers 00h00. Nous recommandons d'arriver 20 minutes à l'avance pour vous installer et choisir votre place." },
      { q: "Combien coûte la croisière nocturne sur le Bosphore ?", a: "Croisière nocturne (3 heures, dîner, spectacle) : €{p.dinnerStd}/pers. (ancien €{p.dinnerStdOriginal}). 0-3 ans gratuit, 4-9 ans €5 de réduction. Paiement à bord." },
      { q: "Quelle est la différence entre croisière nocturne et croisière dîner sur le Bosphore ?", a: "La même chose, mot-clé différent. « Croisière nocturne sur le Bosphore » est la façon dont beaucoup de voyageurs cherchent ; « croisière dîner » est le terme du secteur. Même bateau, même programme de 3 heures, même menu, même spectacle. Choisissez le terme de recherche que vous préférez — l'expérience est la même." },
      { q: "Croisière nocturne contre croisière coucher de soleil sur le Bosphore ?", a: "C'est la même croisière — un seul départ, chaque soir à 21h00. En été (mai–août), il combine les deux : embarquement dès 20h00 pendant l'heure dorée, coucher de soleil juste au moment du départ, puis les ponts illuminés et le programme de divertissement complet. En hiver, c'est une pure croisière nocturne sous les lumières. Dans les deux cas, une seule réservation vous offre la version la plus emblématique du Bosphore." },
      { q: "Puis-je faire la croisière nocturne sur le Bosphore mon premier jour à Istanbul ?", a: "Oui — nous la recommandons. Beaucoup de voyageurs réservent la croisière nocturne pour leur première soirée car elle vous donne une orientation complète : tous les grands monuments depuis l'eau, avec bon dîner et divertissement. Plus facile que d'essayer de faire du tourisme le jour 1 avec le décalage horaire. Transfert hôtel disponible depuis les zones centrales." },
      { q: "Je ne parle pas turc — la croisière est-elle en anglais ?", a: "L'équipage parle anglais. Le divertissement (derviches, danses folkloriques, musique) ne nécessite pas de langue. Le menu du dîner est en anglais. La réservation via WhatsApp / Telegram fonctionne dans plusieurs langues (anglais, arabe, russe, allemand, français, espagnol). Aucun turc nécessaire." }
    ],
    cta: {
      primary: "Réserver croisière nocturne · Paiement à bord",
      secondary: "Départ 21h00 · 3 heures · Dîner + spectacle inclus · Annulation gratuite 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Croisière Dîner Istanbul dès €{p.dinnerStd} — Tour Nocturne Bosphore',
      description: 'Croisière dîner 3h à Istanbul sur le Bosphore. Menu turc multi-plats, folklore en direct, ponts illuminés. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    hero: {
      h1: "Dîner-croisière Istanbul",
      subtitle: "La meilleure dîner-croisière d'Istanbul — 3 heures sur le Bosphore, festin turc varié, divertissement live et vues nocturnes des monuments les plus emblématiques de la ville.",
      badge: "4,8★ · 11 317 avis · TÜRSAB A-17672"
    },
    intro: [
      "Vous cherchez une **dîner-croisière à Istanbul** ? Vous avez trouvé celle que la plupart des voyageurs recommandent. Notre soirée de 3 heures sur le Bosphore combine un repas turc varié complet, des danses folkloriques en direct et les vues les plus photogéniques de la ville — tout cela depuis un bateau confortable partant de l'embarcadère de Kabataş à 21h00.",
      "L'expérience **dîner-croisière Istanbul** : embarquez à 20h00, installez-vous, regardez le palais de Dolmabahçe défiler au départ, le dîner commence en approchant de la mosquée d'Ortaköy, le spectacle démarre (derviches, danses folkloriques, danse orientale), au moment du dessert vous êtes sous le pont du Bosphore illuminé. Vers minuit, retour à Kabataş avec un collage de photos emblématiques et l'estomac plein.",
      "À €{p.dinnerStd}/pers. (ancien €{p.dinnerStdOriginal}) pour le dîner-croisière. Paiement à bord — aucun prépaiement, aucun risque. Agréée TÜRSAB A-17672, notée 4,8★ par 11 317+ voyageurs."
    ],
    highlights: [
      { title: "Dîner turc varié complet", desc: "10 mezzés, entrée chaude, plat principal (saumon/dorade/poulet/köfte/végétarien), gâteau glacé. Certifié halal. Boissons non alcoolisées à volonté incluses." },
      { title: "Spectacle de danses folkloriques turques live", desc: "Huit numéros : Oba Dombra, cérémonie des derviches, Sarı Gelin, pot-pourri azerbaïdjanais, danse orientale, pot-pourri anatolien, danse des couteaux géorgienne et caucasienne, puis saxophone live et DJ. 40 minutes de performance, musique d'ambiance continue." },
      { title: "Parcours nocturne complet du Bosphore", desc: "Croisière de 3 heures : Dolmabahçe, Çırağan, mosquée d'Ortaköy, pont du Bosphore, Bebek, Rumeli Hisarı, pont FSM, Beylerbeyi, Üsküdar, Tour de Léandre. Rives européenne et asiatique." },
      { title: "Dès €{p.dinnerStd} — paiement à bord", desc: "Dîner-croisière €{p.dinnerStd} (ancien €{p.dinnerStdOriginal}). Aucun prépaiement. Annulation gratuite jusqu'à 2h avant le départ." }
    ],
    faq: [
    {
      q: "Quels spectacles composent le programme de la croisière-dîner ?",
      a: "Huit numéros : Oba Dombra (rythme chamanique d'Asie centrale), la cérémonie des derviches tourneurs Mevlana, Sarı Gelin, un pot-pourri azerbaïdjanais, le spectacle oriental (danse du ventre), un pot-pourri turc et anatolien, le Gandagan géorgien et un pot-pourri caucasien avec sa danse des couteaux traditionnelle, puis un final au saxophone live et DJ. Le programme se déroule tout au long de la croisière ; l'ordre peut varier."
    },
      { q: "Combien coûte un dîner-croisière à Istanbul ?", a: "Notre dîner-croisière est à €{p.dinnerStd}/pers. (tarif habituel €{p.dinnerStdOriginal}). 0-3 ans gratuit, 4-9 ans €5. Paiement à bord — aucun prépaiement." },
      { q: "Qu'inclut le prix du dîner-croisière Istanbul ?", a: "Croisière de 3 heures sur le Bosphore, dîner turc varié (mezzés, entrée chaude, plat principal, dessert), boissons non alcoolisées à volonté, spectacle de danses folkloriques live (derviches, danses folkloriques, orientale), musique live + DJ, accès pont extérieur, taxes incluses. Le transfert hôtel et l'alcool sont des suppléments optionnels." },
      { q: "D'où part le dîner-croisière Istanbul ?", a: "Embarcadère de Kabataş, Istanbul — rive européenne, à côté du palais de Dolmabahçe. Le point de rencontre exact est partagé via WhatsApp / Telegram après réservation. Vidéos de marche depuis l'arrêt de tramway Dolmabahçe et la station de tramway Kabataş dans la section point de rencontre ci-dessus." },
      { q: "Combien de temps dure la dîner-croisière — et quand commence-t-elle ?", a: "3 heures au total. Embarquement à partir de 20h00, le bateau part à 21h00 précises, revient vers 00h00. Nous recommandons d'arriver 15-20 minutes en avance pour vous installer et choisir votre place." },
      { q: "Dois-je réserver à l'avance ou puis-je me présenter ?", a: "Réservez à l'avance — les places se remplissent, surtout les week-ends et vacances. Les réservations du jour même sont souvent possibles mais non garanties. L'assistant sur cette page vous place en moins d'1 minute. Paiement à bord, donc aucun risque financier à réserver tôt." },
      { q: "Le dîner-croisière Istanbul convient-il pour végétarien / halal / régimes spéciaux ?", a: "Oui — toute viande est certifiée halal. Le plat végétarien (falafel, pommes de terre rôties, pilaf de boulgour, ragoût de légumes, rondelles d'oignon) est disponible sans frais supplémentaires. Les allergies peuvent être prises en compte si mentionnées à la réservation. L'alcool est un supplément optionnel, jamais imposé." }
    ],
    cta: {
      primary: "Réserver dîner-croisière · Paiement à bord",
      secondary: "4,8★ · Agréée TÜRSAB · Annulation gratuite jusqu'à 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tour Nocturne Istanbul dès €{p.dinnerStd} — Croisière Dîner Bosphore + Spectacle',
      description: 'Croisière 3h sur le Bosphore avec dîner et spectacle en direct. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    hero: {
      h1: "Visite nocturne d'Istanbul",
      subtitle: "La visite nocturne que les Istanbouliotes recommandent en premier — une croisière de 3 heures sur le Bosphore avec dîner, divertissement live et les vues illuminées les plus emblématiques de la ville.",
      badge: "Soirée istanbouliote emblématique · 3 heures · Dîner inclus"
    },
    intro: [
      "Une **visite nocturne à Istanbul** devrait faire trois choses : vous montrer les vues emblématiques de la ville, bien vous nourrir et vous divertir. Notre dîner-croisière sur le Bosphore fait les trois en une seule soirée de 3 heures — et c'est pourquoi la plupart des guides d'Istanbul la recommandent comme expérience de visite nocturne #1.",
      "Le parcours de la **visite nocturne d'Istanbul** couvre les meilleurs monuments illuminés : palais de Dolmabahçe, mosquée d'Ortaköy, pont du Bosphore (change de couleur), quartier de Bebek, Rumeli Hisarı, pont FSM, palais de Beylerbeyi, rive asiatique d'Üsküdar et la Tour de Léandre au loin. La plupart des tours urbains vous montrent cela depuis un bus — nous vous le montrons depuis l'eau, où ils sont le plus spectaculaires.",
      "Dîner inclus (menu turc varié), spectacle de danses folkloriques turques live, derviches, danse orientale et set DJ. Si vous êtes à Istanbul pour 2-3 jours, c'est la seule soirée qui frappe le plus fort. 4,8★ de 11 317+ voyageurs, paiement à bord, aucun prépaiement."
    ],
    highlights: [
      { title: "Toutes les vues nocturnes emblématiques d'Istanbul", desc: "Palais de Dolmabahçe, mosquée d'Ortaköy, pont du Bosphore illuminé, Rumeli Hisarı, pont FSM, palais de Beylerbeyi, Tour de Léandre. Chaque monument majeur dans son éclairage nocturne maximal." },
      { title: "Dîner turc complet inclus", desc: "10 mezzés, entrée chaude, plat principal (saumon/dorade/poulet/köfte/végétarien), dessert, boissons non alcoolisées à volonté. Certifié halal. Tarifé à €{p.dinnerStd}/pers. — tout inclus." },
      { title: "Danses folkloriques live + derviches + orientale", desc: "Programme live en huit numéros : Oba Dombra, cérémonie des derviches Mevlana, Sarı Gelin, pot-pourri azerbaïdjanais, danse orientale, pot-pourri anatolien, danse des couteaux géorgienne et caucasienne, puis saxophone live et DJ. 40 minutes de performance, musique d'ambiance toute la soirée." },
      { title: "Facile pour les premières visites à Istanbul", desc: "Point de rencontre central (embarcadère de Kabataş), transfert hôtel (+€{p.transfer}/pers.), équipage anglophone, paiement à bord. Aucun stress logistique. Venez, profitez, partez." }
    ],
    faq: [
      { q: "Quelle est la meilleure visite nocturne d'Istanbul ?", a: "Le dîner-croisière sur le Bosphore est constamment classé #1. Raisons : (1) il vous donne tous les monuments nocturnes emblématiques depuis l'eau, (2) il inclut dîner et spectacle en un seul forfait, (3) 3 heures suffisent pour voir beaucoup sans être fatigué, (4) point de rencontre central, (5) paiement à bord réduit la friction de réservation. La plupart des guides de voyage Istanbul le recommandent comme « la seule chose incontournable à faire la nuit »." },
      { q: "Combien coûte la visite nocturne d'Istanbul ?", a: "Notre dîner-croisière nocturne sur le Bosphore : €{p.dinnerStd}/pers. Croisière, dîner, divertissement, boissons non alcoolisées inclus. Optionnel : 2 verres d'alcool +€{p.alcohol2}/pers., transfert hôtel +€{p.transfer}/pers. Paiement à bord — aucun prépaiement." },
      { q: "La visite nocturne d'Istanbul est-elle sûre pour les voyageurs solo ?", a: "Oui — très sûre. Bateau agréé TÜRSAB, équipage professionnel anglophone, CCTV sur le pont, gilets de sauvetage disponibles. Beaucoup de voyageurs solo réservent cette croisière. Vous dînez à une table partagée ou privée (votre choix) et la soirée est inclusive — rencontrez d'autres voyageurs si vous le souhaitez ou restez entre vous." },
      { q: "Quel est le meilleur moment pour une visite nocturne d'Istanbul ?", a: "Notre dîner-croisière sur le Bosphore a lieu de 21h00 à 00h00 (3 heures). C'est l'heure d'éclairage maximal pour tous les monuments d'Istanbul — ponts entièrement illuminés, palais qui brillent, lune sur l'eau. Si vous voulez aussi l'heure dorée, venez en été : l'embarquement commence à 20h00, et de mai à août le soleil se couche juste au moment du départ de 21h00 — la même croisière combine les deux." },
      { q: "Comment me rendre au point de rencontre de la visite nocturne d'Istanbul ?", a: "Le point de rencontre est l'embarcadère de Kabataş (rive européenne centrale, à côté du palais de Dolmabahçe). En tramway : T1 jusqu'à la station Kabataş (fin de ligne). En taxi : ~15 min depuis Taksim. À pied : 20 min en descendant la rue İnönü depuis Taksim. Vidéos pas à pas sur cette page. Transfert hôtel disponible à +€{p.transfer}/pers. si vous préférez." },
      { q: "Puis-je réserver la visite nocturne d'Istanbul le jour même ?", a: "Souvent oui, surtout en semaine. Les week-ends se remplissent plus vite. L'assistant de réservation sur cette page vous permet de vérifier les disponibilités pour ce soir et de réserver en moins d'1 minute. Pour les demandes urgentes du jour même, écrivez sur WhatsApp au +90 532 244 29 22." }
    ],
    cta: {
      primary: "Réserver la visite nocturne · Paiement à bord",
      secondary: "Dès €{p.dinnerStd}/pers. · Dîner + spectacle inclus · Annulation gratuite jusqu'à 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Tour en Bateau Istanbul dès €{p.dinnerStd} — Croisière + Dîner + Spectacle',
      description: 'Tour en bateau 3h : croisière Bosphore, dîner turc complet, folklore en direct, vues nocturnes illuminées. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    hero: {
      h1: "Tour en bateau à Istanbul",
      subtitle: "Le tour en bateau le plus réservé à Istanbul — croisière sur le Bosphore avec cuisine turque, divertissement live et les vues emblématiques de la ville depuis l'eau.",
      badge: "4,8★ · TÜRSAB A-17672 · Paiement à bord"
    },
    intro: [
      "Quand vous cherchez « tour en bateau Istanbul », vous cherchez la seule chose qui définit la ville depuis l'eau : le Bosphore. Notre tour en bateau de 3 heures sur le Bosphore vous emmène devant chaque monument majeur d'Istanbul — palais de Dolmabahçe, mosquée d'Ortaköy, pont du Bosphore, Rumeli Hisarı, palais de Beylerbeyi et Tour de Léandre — avec un dîner turc complet et un divertissement live.",
      "Contrairement aux nombreux ferries touristiques d'1 heure qui couvrent moins du Bosphore et sautent le dîner et le divertissement, notre **tour en bateau Istanbul** est l'expérience complète de soirée : embarquement à 20h00 à l'embarcadère de Kabataş, départ 21h00, retour vers 00h00, 10 mezzés, plat principal, dessert, derviches, danses folkloriques, danse orientale et DJ. Vous obtenez le tour ET la sortie nocturne en une seule fois.",
      "Que vous ayez une soirée ou une semaine complète à Istanbul, ce **tour en bateau Istanbul** fait le travail. 4,8★ de 11 317+ voyageurs, agréé TÜRSAB (A-17672), menu certifié halal et paiement à bord — aucun engagement financier tant que vous n'êtes pas satisfait de l'expérience."
    ],
    highlights: [
      { title: "Tous les grands monuments du Bosphore", desc: "Dolmabahçe, Çırağan, mosquée d'Ortaköy, pont du Bosphore, Bebek, Rumeli Hisarı, pont FSM, palais de Beylerbeyi, Üsküdar, Tour de Léandre. Rives européenne et asiatique en une croisière." },
      { title: "Dîner + spectacle inclus", desc: "Pas seulement un tour en bateau — dîner turc varié complet, performances de danses folkloriques live, derviches, danse orientale, DJ. Ce qui rend les 3 heures divertissantes, pas juste touristiques." },
      { title: "Départ en soirée (meilleur éclairage)", desc: "Le départ à 21h00 capture le Bosphore illuminé à son apogée — ponts, palais, mosquées tous éclairés. Plus spectaculaire que les tours de jour qui montrent les mêmes monuments en lumière plate." },
      { title: "Réservation facile, paiement facile", desc: "Réservez en moins d'1 minute avec l'assistant sur cette page. Paiement à bord — aucun prépaiement. Transfert hôtel disponible dès +€{p.transfer}/pers. Annulation gratuite jusqu'à 2h avant le départ." }
    ],
    faq: [
      { q: "Quel est le meilleur tour en bateau à Istanbul ?", a: "Le dîner-croisière sur le Bosphore est constamment classé #1. Il couvre tous les monuments majeurs, inclut dîner et divertissement, et a lieu en soirée quand les monuments sont illuminés. Les autres options (ferries hop-on, bateaux touristiques du matin) couvrent des parcours plus courts, sautent le dîner et n'incluent pas de divertissement. Pour une soirée à Istanbul, c'est le tour en bateau le plus complet." },
      { q: "Combien de temps dure le tour en bateau à Istanbul ?", a: "3 heures. Embarquement à partir de 20h00 à l'embarcadère de Kabataş, départ à 21h00, retour ~00h00. Couvre tout le Bosphore de Dolmabahçe à Rumeli Hisarı et retour. Assez de temps pour un dîner + spectacle complet sans être fatiguant." },
      { q: "Combien coûte le tour en bateau à Istanbul ?", a: "Notre tour en bateau avec dîner : €{p.dinnerStd}/pers. (ancien €{p.dinnerStdOriginal}). 0-3 ans gratuit, 4-9 ans €5 de réduction. Paiement à bord. L'alcool et le transfert hôtel sont des suppléments optionnels." },
      { q: "D'où partent les tours en bateau à Istanbul ?", a: "Notre bateau part de l'embarcadère de Kabataş, rive européenne centrale d'Istanbul, à côté du palais de Dolmabahçe. Accessible par tramway T1 (station Kabataş), taxi 15 min depuis Taksim ou 20 min à pied depuis Taksim. Transfert hôtel disponible depuis les zones centrales à +€{p.transfer}/pers." },
      { q: "Ce tour en bateau convient-il aux familles avec enfants ?", a: "Oui — très adapté aux familles. 0-3 ans gratuit, 4-9 ans €5. Salle intérieure abritée, menu enfants sur demande et divertissement (derviches, danses folkloriques) captivant pour les enfants. Beaucoup de familles du monde entier réservent ce tour." },
      { q: "Dois-je apporter quelque chose pour le tour en bateau ?", a: "Passeport ou carte d'identité (pour l'enregistrement bateau), veste légère (le pont peut être frais), chaussures confortables si vous prévoyez de danser. Smartphone pour les photos. Espèces ou carte pour le paiement à bord (les deux sont acceptés). Tout le reste — nourriture, boissons, divertissement — est à bord." }
    ],
    cta: {
      primary: "Réserver tour en bateau · Paiement à bord",
      secondary: "3 heures · Dîner + spectacle · Dès €{p.dinnerStd}/pers. · Annulation gratuite 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Excursion Bosphore dès €{p.dinnerStd} — Croisière Dîner Istanbul + Spectacle',
      description: 'Excursion 3h sur le Bosphore : dîner turc, folklore en direct, vues nocturnes illuminées. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord.'
    },
    hero: {
      h1: "Excursion sur le Bosphore",
      subtitle: "L'excursion sur le Bosphore la plus recommandée par les voyageurs — une croisière dîner de 3 heures couvrant chaque monument majeur d'Istanbul, avec dîner, divertissement et vues nocturnes.",
      badge: "Expérience complète du Bosphore · Départ en soirée"
    },
    intro: [
      "Une **excursion sur le Bosphore** peut signifier un ferry touristique d'1 heure ou une soirée complète avec dîner-croisière — nous faisons la seconde et la plupart des voyageurs trouvent qu'elle offre un meilleur rapport qualité-prix. 3 heures, €{p.dinnerStd}/pers., dîner et divertissement inclus. Vous ne faites pas que passer devant les monuments — vous mangez, regardez un spectacle et profitez de la soirée.",
      "Le parcours de notre **excursion sur le Bosphore** couvre tout ce qui vaut la peine d'être vu : palais de Dolmabahçe (résidence du sultan ottoman du 19e siècle), mosquée d'Ortaköy (l'une des mosquées les plus photographiées d'Istanbul), pont du Bosphore (change de couleur la nuit), Rumeli Hisarı (construit par Fatih Sultan Mehmet en 1452), palais de Beylerbeyi (rive asiatique) et Tour de Léandre sur une petite île. Tout expliqué par un équipage anglophone.",
      "Que vous ayez 24 heures ou une semaine à Istanbul, c'est l'**excursion sur le Bosphore** qui vous donne le plus en une soirée. Note 4,8★ de 11 317+ voyageurs, agréée TÜRSAB A-17672, menu halal-friendly, paiement à bord — aucun risque de prépaiement."
    ],
    highlights: [
      { title: "Bosphore complet en une seule fois", desc: "Rive européenne (Dolmabahçe, Ortaköy, Rumeli Hisarı), rive asiatique (Beylerbeyi, Üsküdar), les deux ponts du Bosphore, Tour de Léandre. Chaque monument majeur visible en 3 heures." },
      { title: "Dîner + divertissement inclus", desc: "Pas qu'un ferry touristique — dîner turc complet avec mezzés, plat principal, dessert. Spectacle de danses folkloriques live, derviches, orientale, DJ. Valeur de divertissement au-delà du simple panorama." },
      { title: "Soirée = meilleur éclairage", desc: "Les excursions sur le Bosphore de jour vous montrent les monuments en lumière plate. Les excursions en soirée capturent tout illuminé : palais qui brillent, ponts colorés, mosquées reflétées dans l'eau sombre. Meilleures photos, plus spectaculaire." },
      { title: "Dès €{p.dinnerStd} — paiement à bord", desc: "Aucun prépaiement requis. Paiement à bord (espèces ou carte). Annulation gratuite jusqu'à 2h avant le départ. 0-3 ans gratuit, 4-9 ans €5 de réduction. Tarification transparente." }
    ],
    faq: [
      { q: "Quelles sont les meilleures excursions sur le Bosphore à Istanbul ?", a: "Le dîner-croisière en soirée est constamment en haut des classements. Les options de jour (ferries circulaires d'1 heure, bateaux touristiques de 2 heures) montrent moins et n'incluent pas de dîner. Pour le rapport qualité-prix, difficile de battre une croisière de 3 heures avec dîner, spectacle et point de retour central. Le coût de notre excursion à €{p.dinnerStd} élimine le besoin d'une soirée dîner + divertissement séparée." },
      { q: "Combien de temps dure une excursion sur le Bosphore ?", a: "Notre excursion sur le Bosphore dure 3 heures au total (départ 21h00, retour 00h00). Des options plus courtes existent (ferries touristiques d'1 heure, circuits de 90 min) mais ils sautent dîner et divertissement. Pour une expérience de soirée complète, 3 heures est idéal — assez pour tout voir sans se fatiguer." },
      { q: "L'excursion sur le Bosphore vaut-elle le coup ?", a: "Oui — presque tous les guides de voyage d'Istanbul listent le « tour du Bosphore » parmi les 5 incontournables. La ville est construite autour de ce détroit ; si vous n'avez pas vu le Bosphore depuis l'eau, vous n'avez pas vraiment vu Istanbul. Notre excursion en soirée spécifique ajoute dîner et divertissement, en faisant une soirée complète au lieu d'une simple visite." },
      { q: "Que dois-je apporter pour une excursion sur le Bosphore ?", a: "Passeport ou carte d'identité (pour l'enregistrement bateau), veste légère (le pont est frais en soirée), smartphone/appareil photo, chaussures confortables pour la piste de danse. Espèces ou carte pour le paiement. Tout le reste est à bord. Transfert hôtel disponible à +€{p.transfer}/pers. si vous ne voulez pas utiliser les transports." },
      { q: "L'excursion sur le Bosphore convient-elle aux enfants ?", a: "Oui — très adaptée aux enfants. 0-3 ans gratuit (transfert inclus), 4-9 ans €5. Salle intérieure abritée, menu enfants sur demande et divertissement doux et captivant. Beaucoup de familles la réservent comme événement phare de leur séjour à Istanbul." },
      { q: "Quels sont les arrêts de l'excursion sur le Bosphore ?", a: "C'est une croisière continue — nous ne nous arrêtons pas aux monuments (pas de descente). Le bateau passe près de chaque monument, l'équipage explique ce que vous voyez, vous restez confortablement à votre table ou passez sur le pont extérieur pour les photos. Pas de files, pas de marche — juste 3 heures fluides sur l'eau." }
    ],
    cta: {
      primary: "Réserver excursion Bosphore · Paiement à bord",
      secondary: "3 heures · Dîner + spectacle · Annulation gratuite 2h avant · Agréée TÜRSAB",
      tertiary: "Vérifier disponibilités"
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Billets Croisière Bosphore dès €{p.dinnerStd} — Paiement à Bord, Sans Acompte',
      description: 'Billets directs croisière Bosphore dès €{p.dinnerStd}/pers. Sans acompte, paiement à bord. Annulation gratuite jusqu\'à 2h avant.'
    },
    hero: {
      h1: "Billets croisière sur le Bosphore",
      subtitle: "Évitez les frais d'intermédiaires — achetez vos billets de croisière Bosphore directement chez nous. Aucun prépaiement, paiement à bord, annulation gratuite jusqu'à 2 heures avant le départ.",
      badge: "Réservation directe · Aucun prépaiement · -40 %"
    },
    intro: [
      "Vous cherchez des **billets pour la croisière sur le Bosphore** ? Achetez-les directement. Notre billet est à €{p.dinnerStd}/pers. — 40 % de réduction sur le tarif habituel (€{p.dinnerStdOriginal}). Les sites de réservation tiers ajoutent généralement 20-40 % de commission. En réservant en direct, vous économisez — et vous pouvez toujours payer à bord.",
      "Notre processus de **billet croisière Bosphore** : remplissez l'assistant sur cette page en moins d'1 minute (date, nombre de convives, forfait, contact), nous confirmons instantanément via WhatsApp / Telegram, vous vous présentez à l'embarcadère de Kabataş à 20h00, vous payez à bord, vous profitez de la dîner-croisière de 3 heures. Aucun billet physique à imprimer, aucun coupon à envoyer par e-mail — notre confirmation est votre billet.",
      "Que vous réserviez la dîner-croisière pour ce soir ou bloquiez une date précise la semaine prochaine, les **billets croisière Bosphore directs** sont le moyen le plus rapide. Note 4,8★, agréée TÜRSAB (A-17672), menu certifié halal et suppléments transfert hôtel et alcool disponibles."
    ],
    highlights: [
      { title: "Réservation directe — aucun frais d'intermédiaire", desc: "€{p.dinnerStd}/pers., un prix transparent. Les sites tiers facturent €30-80+ pour la même croisière. Réservez directement chez nous et économisez. Aucuns frais cachés, aucune majoration de commission." },
      { title: "Paiement à bord — aucun prépaiement", desc: "Réservez votre place maintenant, payez quand vous montez à bord. Espèces ou carte acceptées. Gratuit si vous annulez 2+ heures avant le départ. Aucun risque financier à réserver tôt." },
      { title: "Confirmation en moins d'1 minute", desc: "Remplissez l'assistant → nous confirmons via WhatsApp / Telegram. Aucun coupon PDF à imprimer. Notre message est votre billet. Venez à l'embarcadère à 20h00." },
      { title: "-40 % tarif de lancement actuel", desc: "Ancien tarif €{p.dinnerStdOriginal}, maintenant €{p.dinnerStd}. -40 % parce que vous réservez directement. Pas un chiffre temporaire — notre tarif standard de réservation directe." }
    ],
    faq: [
      { q: "Combien coûtent les billets croisière Bosphore ?", a: "€{p.dinnerStd}/pers. (habituel €{p.dinnerStdOriginal}). Inclut croisière de 3 heures, dîner turc varié, spectacle de danses folkloriques live, boissons non alcoolisées à volonté. 0-3 ans gratuit, 4-9 ans €5. Paiement à bord — aucun prépaiement." },
      { q: "Où puis-je acheter des billets croisière Bosphore ?", a: "Directement sur cette page — remplissez l'assistant de réservation, nous confirmons instantanément via WhatsApp / Telegram. Paiement à bord. Les plateformes tierces (Viator, GetYourGuide, Klook) vendent aussi des billets mais facturent généralement €30-80+ — c'est la majoration d'intermédiaire. Direct est le moins cher et le plus rapide." },
      { q: "Dois-je imprimer mon billet croisière Bosphore ?", a: "Non — aucun billet ou coupon physique nécessaire. Après réservation, nous vous envoyons une confirmation via WhatsApp (ou Telegram) avec le point de rencontre, l'heure et votre nom de réservation. Présentez simplement votre téléphone à l'embarcadère. C'est tout." },
      { q: "Puis-je annuler ou me faire rembourser mon billet croisière Bosphore ?", a: "Oui — annulation gratuite jusqu'à 2 heures avant le départ. Écrivez simplement sur WhatsApp. Comme vous n'avez pas encore payé (paiement à bord), aucun remboursement nécessaire — vous ne venez simplement pas, aucuns frais. Beaucoup plus flexible que les billets tiers prépayés." },
      { q: "Les billets croisière Bosphore sont-ils disponibles le jour même ?", a: "Souvent oui, surtout en semaine. Les week-ends et vacances se remplissent plus vite. Vérifiez les disponibilités via l'assistant de réservation — il se met à jour en temps réel. Les réservations du jour même sont généralement possibles jusqu'à quelques heures avant le départ de 21h00. Pour les demandes urgentes, WhatsApp." },
      { q: "Les billets enfants pour la croisière Bosphore sont-ils gratuits ?", a: "Les enfants **0-3 ans sont entièrement gratuits** (aucun frais, aucun frais caché, transfert inclus). **4-9 ans à €5** (€{p.dinnerStd} − €5 = €19.30). **10+ ans tarif adulte plein.** Les prix sont plafonnés et transparents — pas d'astuces « supplément bébé »." }
    ],
    cta: {
      primary: "Acheter billets · Paiement à bord",
      secondary: "Réservation directe · Aucun prépaiement · Annulation gratuite 2h avant",
      tertiary: "Vérifier disponibilités"
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosphore Dernière Minute dès €{p.dinnerStd} — Réservez Ce Soir',
      description: 'Réservation croisière Bosphore le jour même. Confirmation WhatsApp en minutes. Départ 21h00 de Kabataş. Annulation gratuite, paiement à bord. 11 317 avis.'
    },
    hero: {
      h1: "Croisière Bosphore dernière minute",
      subtitle: "Disponibilités ce soir, confirmées en quelques minutes. Aucun prépaiement, aucun coupon pré-imprimé — venez simplement à l'embarcadère et profitez de la soirée.",
      badge: "Réservation jour même · Confirmée en minutes · Paiement à bord"
    },
    intro: [
      "Vous avez atterri à Istanbul cet après-midi et vous voulez une belle soirée ce soir ? La **croisière Bosphore dernière minute** fonctionne. Nous réservons spécifiquement des places pour les réservations du jour même car nous savons que beaucoup de voyageurs décident le matin. Remplissez l'assistant ici, nous confirmons en quelques minutes sur WhatsApp, vous vous présentez à l'embarcadère de Kabataş à 20h00, vous payez à bord, vous en profitez.",
      "Notre **croisière Bosphore dernière minute** a le même programme de soirée que les réservations anticipées : 3 heures sur l'eau (21h00-00h00), dîner turc varié, spectacle de danses folkloriques live, derviches, danse orientale, DJ. Palais de Dolmabahçe illuminé, mosquée d'Ortaköy, pont du Bosphore — mêmes vues emblématiques. Même tarif : €{p.dinnerStd}/pers.",
      "L'annulation jour même est gratuite jusqu'à 2 heures avant le départ car **paiement à bord** signifie que vous ne vous êtes encore engagé à rien. Si vous avez réservé à 14h00 et changé de plans à 19h00, écrivez simplement sur WhatsApp — aucun remboursement, aucun problème. C'est la flexibilité de **tour Istanbul dernière minute** que les voyageurs apprécient."
    ],
    highlights: [
      { title: "Places encore disponibles ce soir", desc: "Nous réservons 5-10 places par jour pour les réservations du jour même. Vérifiez l'assistant ci-dessus — disponibilité en temps réel. Si la croisière de ce soir est pleine, celle de demain est généralement ouverte." },
      { title: "Confirmation en moins de 5 minutes", desc: "Remplissez l'assistant → message de confirmation WhatsApp/Telegram → c'est fait. Aucun coupon e-mail à attendre, aucun QR code à imprimer. Notre message est votre billet." },
      { title: "Zéro paiement jusqu'à l'embarquement", desc: "Paiement à bord, espèces ou carte. Si vous ne venez pas (changement de plans, maladie, météo), aucuns frais. Annulation gratuite jusqu'à 2h avant le départ. Vraiment adapté dernière minute." },
      { title: "Transfert hôtel souvent disponible le jour même", desc: "Le transfert hôtel nécessite normalement 24h de préavis, mais pour les réservations jour même entre 14h00-18h00 nous pouvons souvent organiser le pickup à +€{p.transfer}/pers. Pour les demandes urgentes, WhatsApp." }
    ],
    faq: [
      { q: "Puis-je vraiment réserver la croisière Bosphore pour ce soir ?", a: "Oui — souvent. Nous réservons des places pour les réservations du jour même. Vérifiez l'assistant ci-dessus pour les disponibilités ce soir. Si des places sont disponibles, vous pouvez réserver jusqu'à 18h00 (3 heures avant le départ). Les week-ends sont plus serrés — réservez tôt dans la journée si possible." },
      { q: "Jusqu'à quand puis-je réserver en dernière minute ?", a: "Les réservations restent ouvertes jusqu'à 18h00 pour le bateau de 21h00. Après 18h00, écrivez-nous directement sur WhatsApp au +90 532 244 29 22 — nous pouvons confirmer manuellement si des places sont libres. Après 20h00, c'est très serré sauf si vous êtes déjà à l'embarcadère de Kabataş et pouvez embarquer rapidement." },
      { q: "La croisière Bosphore dernière minute est-elle plus chère ?", a: "Non — même prix que la réservation anticipée : €{p.dinnerStd}/pers. Nous ne faisons pas de « tarification dynamique » ni de prime de dernière minute. Même bateau, même dîner, même spectacle, même prix." },
      { q: "Que se passe-t-il si la croisière de ce soir est complète ?", a: "La croisière de demain est généralement ouverte — nous opérons 365 jours par an, tous les jours. Vous pouvez réserver pour demain et rester « dernière minute », au sens où vous venez de décider. Les croisières en semaine ont plus de places que les week-ends." },
      { q: "Pouvez-vous organiser un transfert hôtel dernière minute ?", a: "Le transfert jour même est possible jusqu'à ~18h00 pour la croisière de 21h00. Après 18h00, nous n'aurons peut-être pas de chauffeur disponible — dans ce cas, vous pouvez prendre un taxi jusqu'à l'embarcadère de Kabataş (15 min depuis Taksim, 10 min depuis Sultanahmet, ~€10-15). Central et facile." },
      { q: "Et si je suis déjà à Kabataş et veux embarquer ?", a: "Si vous êtes à l'embarcadère et qu'il y a des places libres, vous pouvez monter à bord. Écrivez-nous sur WhatsApp ou demandez à l'équipage — nous vous ajouterons s'il y a de la place. Même tarif paiement à bord. En termes de tourisme on appelle cela « walk-on » — ça marche ici." }
    ],
    cta: {
      primary: "Réserver ce soir · Paiement à bord",
      secondary: "Réservation jour même · Confirmée en minutes · Annulation gratuite 2h avant",
      tertiary: "WhatsApp pour réservations urgentes"
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Prix Croisière Istanbul dès €{p.dinnerStd} — Tarifs Transparents',
      description: 'Prix croisière Bosphore Istanbul : dîner-croisière €{p.dinnerStd}/pers. Enfants 0-3 gratuits, 4-9 demi-tarif. Suppléments transparents.'
    },
    hero: {
      h1: "Prix croisière Istanbul",
      subtitle: "Tarification transparente, aucuns frais cachés. Un seul forfait, €{p.dinnerStd}/pers. — et vous payez à bord, pas maintenant.",
      badge: "Transparent · -40 % direct · 0-3 ans gratuit"
    },
    intro: [
      "Les **prix des croisières à Istanbul** varient énormément — des ferries budget à €15 qui sautent le dîner aux yachts style resort à €150+. Notre tarification est au milieu et offre le meilleur rapport qualité-prix : un seul forfait à €{p.dinnerStd}/pers. pour le dîner-croisière de 3 heures avec spectacle. Aucuns frais cachés, aucune majoration surprise.",
      "Une ventilation détaillée du **prix de la croisière Istanbul**, car la transparence compte :\n\n- **Dîner-croisière** : €{p.dinnerStd}/pers. (ancien €{p.dinnerStdOriginal}, -40 %). Inclut croisière de 3 heures, 10 mezzés, plat principal, dessert, boissons non alcoolisées à volonté, spectacle live.\n- **0-3 ans** : Gratuit. 4-9 ans : €5. 10+ ans : tarif plein.\n\nSuppléments (optionnels) :\n- 2 verres d'alcool : +€{p.alcohol2}/pers.\n- Transfert hôtel aller-retour : +€{p.transfer}/pers.\n- Arrangement de table romantique : +€{p.romantic}/table",
      "Et surtout : **paiement à bord**. Vous n'engagez pas un centime tant que vous n'êtes pas sur le bateau. Annulation gratuite jusqu'à 2 heures avant le départ. Aucun engagement, aucun risque — la **tarification de croisière Istanbul** la plus favorable au consommateur que vous trouverez."
    ],
    highlights: [
      { title: "Dîner-croisière : €{p.dinnerStd} (ancien €{p.dinnerStdOriginal})", desc: "40 % de réduction sur le tarif habituel. Croisière de 3 heures, dîner turc complet, spectacle live, boissons non alcoolisées à volonté. Un seul forfait — couvre tout ce dont vous avez besoin pour une belle soirée." },
      { title: "Paiement à bord — €0 d'avance", desc: "Réservez maintenant, payez à l'embarquement (espèces ou carte). Annulation gratuite jusqu'à 2 heures avant le départ. Zéro risque financier à réserver tôt." },
      { title: "Tarif enfants : 0-3 gratuit, 4-9 moitié prix", desc: "0-3 entièrement gratuits (aucun frais). 4-9 avec €5 de réduction sur le tarif adulte. 10+ tarif adulte plein. Transparent, aucune astuce de tarification familiale. Transfert également gratuit pour les 0-3." },
      { title: "Suppléments — uniquement quand vous les voulez", desc: "Alcool (2 verres) : +€{p.alcohol2}/pers. Transfert : €{p.transfer}/pers. Table romantique : €{p.romantic}/table. Tous optionnels, non groupés. Choisissez uniquement ce dont vous avez besoin." }
    ],
    faq: [
      { q: "Combien coûte la croisière à Istanbul ?", a: "Dîner-croisière : €{p.dinnerStd}/pers. (habituel €{p.dinnerStdOriginal}, -40 %). 0-3 ans gratuit, 4-9 ans €5 de réduction. Paiement à bord — aucun prépaiement. Annulation gratuite jusqu'à 2 heures avant le départ." },
      { q: "Y a-t-il des frais cachés dans le prix de la croisière Istanbul ?", a: "Non. Le prix inclut : croisière de 3 heures, dîner complet (mezzés, entrée, plat, dessert), boissons non alcoolisées à volonté, spectacle live, taxes. Les suppléments optionnels (alcool, transfert, table romantique) sont séparés et tarifés de manière transparente — vous payez uniquement ce que vous ajoutez. Aucuns « frais de service », « frais de port », aucune majoration surprise." },
      { q: "Pourquoi le prix de la croisière Istanbul est-il -40 % — est-ce une arnaque ?", a: "Aucune arnaque. Le tarif habituel est €{p.dinnerStdOriginal}, ce que les sites de réservation tiers (Viator, GetYourGuide, Klook) facturent — avec leurs commissions. Réservez directement et obtenez €{p.dinnerStd}. C'est la différence de 40 %. Aucune astuce de tarification limitée dans le temps ou dynamique." },
      { q: "Comment le prix de la croisière Istanbul se compare-t-il à d'autres options ?", a: "Ferries circulaires : €5-10, 1 heure, pas de dîner, pas de divertissement, juste tourisme. Dîner-croisières budget : €20-30, bondé, dîner moyen, spectacle court. Notre dîner-croisière (€{p.dinnerStd}) : 3 heures, dîner complet, spectacle complet, table privée, agréée TÜRSAB. Yachts resort : €100-150+, excessif pour voyageurs solo/couples." },
      { q: "Dois-je prépayer le prix de la croisière Istanbul ?", a: "Non — **paiement à bord**. Vous réservez maintenant (assistant 1 minute), nous confirmons sur WhatsApp, vous venez à 20h00 et payez à bord (espèces ou carte). Annulation gratuite jusqu'à 2 heures avant. Zéro engagement financier jusqu'à votre satisfaction." },
      { q: "Y a-t-il une réduction de groupe sur le prix de la croisière Istanbul ?", a: "Pour les groupes de 10+, nous pouvons offrir 5-10 % de réduction — écrivez sur WhatsApp avec votre taille de groupe. Pour 25+, envisagez une croisière privée (bateau entier pour votre groupe, menu personnalisé). Pour 2-9 personnes, les tarifs standards s'appliquent — déjà 40 % de réduction sur le tarif habituel." }
    ],
    cta: {
      primary: "Réserver · Paiement à bord",
      secondary: "Dès €{p.dinnerStd}/pers. · 0-3 ans gratuit · Annulation gratuite 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Sightseeing Bosphore dès €{p.dinnerStd} — Monuments Istanbul depuis l\'Eau',
      description: 'Croisière sightseeing Bosphore : Dolmabahçe, Ortaköy, Pont Bosphore, Rumeli, Beylerbeyi, Tour de Léandre. Tour soirée 3h avec dîner. Annulation gratuite.'
    },
    hero: {
      h1: "Visite du Bosphore",
      subtitle: "Tous les monuments emblématiques d'Istanbul — depuis l'eau, la nuit, avec dîner. Une seule croisière de 3 heures couvre Dolmabahçe, la mosquée d'Ortaköy, le pont du Bosphore, Rumeli Hisarı et plus.",
      badge: "10+ monuments · Rives européenne et asiatique · 3 heures"
    },
    intro: [
      "La **visite du Bosphore** depuis l'eau bat tout tour en bus. Le Bosphore est la voie d'eau la plus historique de la ville — sultans ottomans, empereurs byzantins, marchands grecs et navires de guerre russes l'ont tous traversé. Aujourd'hui, notre croisière de 3 heures, avec commentaires de notre équipage anglophone, passe devant chaque monument majeur d'Istanbul qui définit la ligne d'horizon.",
      "Le parcours de notre **visite du Bosphore** (départ en soirée, 21h00-00h00) :\n\n1. **Palais de Dolmabahçe** — résidence ottomane du 19e siècle, illuminée la nuit\n2. **Palais de Çırağan** — maintenant hôtel de luxe, histoire royale\n3. **Mosquée d'Ortaköy** — l'une des mosquées les plus photographiées d'Istanbul, sur l'eau\n4. **Pont du Bosphore** — change entre bleu, violet, or la nuit\n5. **Bebek** — quartier chic de la rive européenne\n6. **Rumeli Hisarı** — construit par Fatih Sultan Mehmet en 1452 avant la conquête de Constantinople\n7. **Pont Fatih Sultan Mehmet** — deuxième pont du Bosphore, arche spectaculaire\n8. **Palais de Beylerbeyi** — rive asiatique, résidence ottomane d'été\n9. **Üsküdar** — rive asiatique d'Istanbul, quartier traditionnel\n10. **Tour de Léandre** — petite tour insulaire, l'un des symboles les plus romantiques d'Istanbul",
      "Dîner et divertissement inclus — pas séparés — donc la **visite du Bosphore** devient une soirée complète. Dîner turc varié, spectacle de danses folkloriques live, derviches, danse orientale, DJ. Note 4,8★ de 11 317+ voyageurs, agréée TÜRSAB A-17672."
    ],
    highlights: [
      { title: "10+ monuments majeurs d'Istanbul", desc: "Palais de Dolmabahçe, palais de Çırağan, mosquée d'Ortaköy, pont du Bosphore, Rumeli Hisarı, pont FSM, palais de Beylerbeyi, Üsküdar, Tour de Léandre. Chaque monument essentiel d'Istanbul en une seule croisière." },
      { title: "Rives européenne et asiatique", desc: "Rive européenne à l'aller (Dolmabahçe → Rumeli Hisarı), rive asiatique au retour (Beylerbeyi → Üsküdar). Deux continents en une croisière de 3 heures — seule Istanbul vous laisse faire cela." },
      { title: "Visite en soirée = vues illuminées", desc: "Les visites de jour montrent les monuments en lumière plate. La visite de nuit les capture à leur apogée dramatique : palais qui brillent en jaune, ponts colorés, mosquées reflétées dans l'eau sombre. Meilleur pour les photos, plus mémorable." },
      { title: "Dîner + spectacle inclus", desc: "Visite + dîner + divertissement en un seul forfait. Pas besoin de planifier un dîner séparé après la visite. Dès €{p.dinnerStd}/pers., paiement à bord, total 3 heures." }
    ],
    faq: [
      { q: "Quels monuments du Bosphore vais-je voir ?", a: "Dans l'ordre : palais de Dolmabahçe, palais de Çırağan, mosquée d'Ortaköy, pont du Bosphore, quartier de Bebek, Rumeli Hisarı, pont Fatih Sultan Mehmet, Anadolu Hisarı, palais de Beylerbeyi, Kuzguncuk, Üsküdar et Tour de Léandre (visible au loin). 10+ monuments majeurs sur un seul parcours de 3 heures." },
      { q: "Visite du Bosphore : jour ou nuit — laquelle est meilleure ?", a: "Expériences différentes. Jour : vue plus claire des détails architecturaux, plus lumineux pour les photos. Nuit : éclairage spectaculaire, atmosphère mystérieuse, moins de bateaux sur l'eau. La plupart des voyageurs préfèrent la visite de nuit car les monuments semblent plus magiques — et dîner + spectacle en font une soirée complète." },
      { q: "Le bateau s'arrête-t-il aux monuments pour les photos ?", a: "C'est une croisière continue — pas d'arrêts (pas de descente). Le bateau passe près de chaque monument, l'équipage explique ce que vous voyez, vous pouvez passer sur le pont extérieur pour les photos. Pas de files, pas de marche, pas de stress de timing — juste une opportunité photo fluide de 3 heures." },
      { q: "L'équipage commente-t-il pendant la visite ?", a: "Oui — l'équipage anglophone fournit de brefs commentaires (histoire, architecture, anecdotes) en passant devant chaque monument majeur. Pas une leçon guidée, plus comme une explication amicale pendant le dîner. Pour une histoire plus approfondie, nous recommandons de combiner avec une visite à pied d'Istanbul en journée." },
      { q: "En quoi la visite du Bosphore diffère-t-elle du ferry hop-on ?", a: "Ferries hop-on (bateaux circulaires Şehir Hatları) : €5-10, 1-2 heures, basiques, pas de dîner, bondés. Notre visite : €{p.dinnerStd}, 3 heures, dîner complet, spectacle live, table privée, commentaires en anglais. La visite en soirée est meilleure pour du tourisme confortable et sérieux. Le ferry circulaire fonctionne pour un transit budget rapide." },
      { q: "Puis-je photographier les monuments depuis le bateau ?", a: "Oui — absolument. Le pont extérieur a de bons spots pour la photographie. Les monuments passent à 100-200 mètres du bateau. Les photos smartphone sortent très bien ; les utilisateurs de DSLR/hybride peuvent obtenir de superbes prises, surtout pendant la transition heure dorée-heure bleue du début de soirée." }
    ],
    cta: {
      primary: "Réserver visite · Paiement à bord",
      secondary: "10+ monuments · Dîner + spectacle · Annulation gratuite 2h avant",
      tertiary: "Disponibilités ce soir"
    }
  }

};
