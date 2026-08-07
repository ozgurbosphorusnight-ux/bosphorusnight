/**
 * Spanish translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Crucero con Cena Bósforo desde €{p.dinnerStd} — Tour Nocturno Estambul + Show',
      description: 'Crucero con cena de 3 horas por el Bósforo: menú turco multiplato y espectáculo folklórico en vivo. Salida 21:00 desde Kabataş.'
    },
    hero: {
      h1: 'Crucero con Cena por el Bósforo en Estambul',
      subtitle: 'Tres horas de entretenimiento en vivo, un generoso banquete turco y las vistas nocturnas más impresionantes del Bósforo.',
      badge: '4,8★ · 11.317 reseñas'
    },
    intro: [
      'El **crucero con cena por el Bósforo** es la experiencia nocturna más icónica de Estambul. Nuestro tour parte del muelle de Kabataş a las 20:00 y desliza bajo los iluminados puentes del Bósforo y Fatih Sultan Mehmet mientras sirve un generoso banquete turco, danzas folclóricas en vivo, danza oriental y un set de DJ que mantiene la cubierta con ambiente hasta las 23:00.',
      'A diferencia de los barcos turísticos corrientes que llenan el Bósforo por la noche, nuestro **crucero con cena por el Bósforo** cuenta con licencia TÜRSAB (A-17672) y ha sido calificado con 4,8★ por más de 11.317 viajeros. Mantenemos el grupo reducido y el servicio cálido — y como usted paga a bordo, reservar con antelación no tiene ningún riesgo.',
      '¿Celebra un aniversario, busca una velada premium en Estambul para su familia o quiere la transición atardecer-noche más fotogénica de la ciudad? Este es el crucero con cena que los habitantes de Estambul recomiendan primero.'
    ],
    highlights: [
      { title: 'Generoso banquete turco', desc: '10 variedades de mezze, entrante caliente (paçanga böreği), selección de plato principal (salmón / lubina / pollo / köfte / vegetariano), postre de pastel con helado, refrescos ilimitados.' },
      { title: 'Danzas folclóricas en vivo, danza oriental y DJ', desc: 'Ceremonia sema de Mevlana, 5 danzas folclóricas turcas tradicionales, danza oriental clásica, músicos turcos en vivo y, a continuación, set de DJ durante todo el tour.' },
      { title: 'Ruta nocturna completa del Bósforo', desc: 'Kabataş → Dolmabahçe → Palacio de Çırağan → Mezquita de Ortaköy → Bebek → Rumeli Hisarı → Puente FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Desde €{p.dinnerStd}/persona — pago a bordo', desc: 'Crucero con cena €{p.dinnerStd} (antes €{p.dinnerStdOriginal}). Sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿A qué hora comienza el crucero con cena por el Bósforo?', a: 'El embarque comienza a las 20:00 en el muelle de Kabataş. El barco zarpa a las 21:00 y regresa aproximadamente a las 00:00. Recomendamos llegar 15-20 minutos antes para acomodarse.' },
      { q: '¿Cuánto cuesta el crucero con cena por el Bósforo?', a: 'El crucero con cena cuesta €{p.dinnerStd}/persona (precio normal €{p.dinnerStdOriginal}). Niños de 0-3 años gratis, 4-8 años con 50% de descuento. El pago se realiza a bordo — sin prepago.' },
      { q: '¿El alcohol está incluido en el crucero con cena?', a: 'Los refrescos ilimitados (agua, cola, zumo) están incluidos en el precio. El paquete de alcohol es opcional: 2 copas (vino, cerveza, rakı, vodka o ginebra) +€{p.alcohol2}/persona. Las bebidas adicionales e importadas se tarifan aparte a bordo.' },
      { q: '¿Hay traslado desde el hotel?', a: 'Sí — el servicio de recogida y regreso cuesta +€{p.transfer}/persona. Zonas de servicio: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Sütlüce y Şişli. Puede seleccionarlo en el asistente de reservas.' },
      { q: '¿El crucero con cena por el Bósforo es halal?', a: 'Absolutamente. Todos los productos cárnicos a bordo tienen certificación halal. El alcohol es un complemento opcional (nunca se impone a los huéspedes) y la distribución de mesas separa de forma natural a quienes prefieren una mesa sin alcohol. También ofrecemos alternativas vegetarianas sin coste adicional.' },
      { q: '¿Qué debo llevar?', a: 'Smart casual. Las noches de Estambul pueden ser ventosas incluso en verano — recomendamos una chaqueta ligera o un chal. No hay código de vestimenta obligatorio, pero los bañadores, las chanclas o la ropa deportiva no son apropiados para un ambiente de cena.' }
    ],
    cta: {
      primary: 'Reservar Ahora · Pago a Bordo',
      secondary: 'Cancelación gratuita hasta 2 horas antes de la salida',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Crucero Bósforo con Niños — Tour Familiar desde €{p.dinnerStd}/adulto',
      description: 'Crucero con cena por el Bósforo apto para familias. Niños 0-3 gratis, 4-8 mitad de precio. Salón interior seguro, menú infantil.'
    },
    hero: {
      h1: 'Crucero por el Bósforo con Niños',
      subtitle: 'Una velada familiar en el Bósforo diseñada para familias con niños — cena, entretenimiento y un ambiente seguro y confortable.',
      badge: 'Apto para Familias · Halal · 0-3 Años Gratis'
    },
    intro: [
      'El **crucero por el Bósforo con niños** es la opción nocturna más familiar de Estambul. Recibimos a docenas de familias cada noche — hemos diseñado cada detalle para que los niños se sientan cómodos: asientos cubiertos para que los más pequeños se mantengan calientes, un menú infantil accesible (pollo a la plancha sencillo, pasta, refrescos ilimitados) y embarque temprano para evitar las rabietas de última hora.',
      'A diferencia de los barcos solo para adultos, nuestro **crucero con cena por el Bósforo para familias** mantiene un ambiente cálido e inclusivo. **Los niños de 0-3 años viajan gratis** (traslado incluido), los de 4-8 años con **50% de descuento** y los de 9 años o más pagan precio completo — sin cargos ocultos. Las danzas folclóricas en vivo, la danza oriental y la ceremonia sema son entretenimiento familiar amable, no de discoteca.',
      '¿Viene a Estambul con su niño pequeño para un fin de semana largo o trae a los adolescentes en su primer viaje por Europa? Este es el tour que recomiendan las familias de Estambul. Seguro, con certificación halal, licencia TÜRSAB y 4,8★ por más de 11.317 viajeros.'
    ],
    highlights: [
      { title: '0-3 años completamente gratis', desc: 'Sin cargo para bebés y niños pequeños. 4-8 años al 50% del precio del adulto. Desde los 9 años, huésped completo. Transparente, sin sorpresas.' },
      { title: 'Zona interior cubierta', desc: 'Completamente cerrada y climatizada en los meses fríos. Los niños se mantienen calientes, protegidos del viento. La cubierta exterior también está disponible cuando hace buen tiempo — usted elige.' },
      { title: 'Menú infantil bajo petición', desc: 'Pollo a la plancha sencillo, pasta, pan y verduras — sin cargo adicional. Refrescos ilimitados (cola, zumo, agua). Avise con antelación — nada de mezze picantes sorpresa para los pequeños.' },
      { title: 'Entretenimiento seguro para familias', desc: 'Ceremonia sema (fascinante para los niños), 5 danzas folclóricas tradicionales, música turca en vivo y set de DJ. Todo apto para familias — sin contenido adulto. Los niños a menudo se unen a la pista.' }
    ],
    faq: [
      { q: '¿El crucero por el Bósforo es seguro para niños pequeños?', a: 'Sí — nuestro barco tiene licencia TÜRSAB, cuenta con zona interior cubierta con ventanas seguras, chalecos salvavidas de todas las tallas y tripulación profesional con experiencia en familias. Recomendamos la cubierta interior para niños pequeños y la exterior para mayores de 6 años.' },
      { q: '¿Cuál es el precio infantil en el crucero por el Bósforo?', a: 'Los niños de **0-3 años: GRATIS** (sin cargos, sin costes ocultos). **4-8 años: 50% de descuento** sobre el precio del adulto — es decir, en el tour Estándar €{p.dinnerStd}/2 = €12 por niño. **9+ años: precio completo de adulto.** El traslado desde el hotel es gratis para 0-3 años y estándar para mayores de 4 (€{p.transfer}/persona).' },
      { q: '¿Hay menú infantil a bordo?', a: 'Sí — pollo a la plancha sencillo, pasta, pan, verduras de temporada y refrescos ilimitados. Avise en la reserva sobre alergias o comensales exigentes y prepararemos algo que su hijo comerá con gusto.' },
      { q: '¿La música o el espectáculo son demasiado ruidosos para los niños?', a: 'Las actuaciones en vivo se realizan en una sola zona designada — si sus hijos son sensibles al sonido, los sentaremos en una mesa trasera más tranquila. El espectáculo dura 40 minutos en total; el resto de la velada es música turca ambiental y DJ a volumen moderado.' },
      { q: '¿Qué pasa si mi bebé se duerme durante el tour?', a: 'No hay problema — muchos se duermen. La zona interior tiene sofás tipo banqueta donde un bebé o niño pequeño puede dormir cómodamente. Pida a nuestra tripulación una manta caliente si la necesita. Sin cargo adicional.' },
      { q: '¿Debo llevar cochecito a bordo?', a: 'Puede llevarlo, pero recomendamos dejar los cochecitos grandes en el hotel (o con nuestro conductor si ha tomado el traslado — lo guardamos seguro). Nuestro barco tiene pasillos estrechos y las cubiertas tienen escalones. Un portabebé ligero es más fácil a bordo.' }
    ],
    cta: {
      primary: 'Reservar Tour Familiar · Pago a Bordo',
      secondary: 'Cancelación gratuita hasta 2 horas antes · Sin prepago',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Crucero Romántico Bósforo desde €{p.dinnerStd} — Cena a la Luz de Velas',
      description: 'Crucero romántico por el Bósforo: mesa a la luz de velas, rosas, cena multiplato bajo puentes iluminados. Desde €{p.dinnerStd}/persona.'
    },
    hero: {
      h1: 'Crucero Romántico por el Bósforo',
      subtitle: 'Cena a la luz de las velas, mesa adornada con rosas, puentes iluminados y un momento especial para compartir solo los dos bajo el cielo nocturno más icónico de Estambul.',
      badge: 'Aniversario · Luna de Miel · Noche Especial'
    },
    intro: [
      'El **crucero romántico por el Bósforo** es la velada más icónica de Estambul para parejas. Mientras el sol se pone tras el Palacio de Dolmabahçe y el Puente del Bósforo se ilumina con sus colores, usted y su pareja comparten un generoso banquete turco en una mesa privada — con velas, flores frescas y violín en vivo deslizándose por la cubierta.',
      'Nuestra decoración de mesa romántica (+€{p.romantic}/mesa) convierte cualquier lugar en un momento especial: rosas rojas, velas encendidas, una nota de bienvenida escrita a mano. Añada el paquete de alcohol de 2 copas para brindar con vino bajo las estrellas (+€{p.alcohol2}/persona) o manténgalo sencillo con los refrescos incluidos. En cualquier caso, la tripulación se encarga discretamente del resto.',
      'Ya sea que esté celebrando un aniversario, planeando una sorpresa para su pareja o simplemente quiera vivir una noche inolvidable en la ciudad más romántica de Europa — este es el tour favorito de las parejas en Estambul. Calificación 4,8★, licencia TÜRSAB y — lo más importante — pago a bordo, por lo que solo se compromete con la velada en sí.'
    ],
    highlights: [
      { title: 'Mesa romántica a la luz de las velas', desc: 'Añada la decoración de mesa romántica por +€{p.romantic}/mesa: rosas rojas frescas, velas encendidas, pétalos de rosa sobre el mantel y tarjeta escrita a mano. Fotos incluidas.' },
      { title: 'Las mejores mesas para la transición atardecer-noche', desc: 'Las mesas junto a la ventana se reservan para parejas. Contemple la iluminación del Puente del Bósforo, el brillo de la Torre de la Doncella y la iluminación de la Mezquita de Ortaköy desde su mesa privada.' },
      { title: 'Violín en vivo y ambiente íntimo', desc: 'Durante la cena, el violín en vivo y la música turca acústica crean un ambiente lento y romántico. Después, el DJ entra en acción y las parejas bailan bajo las luces de la cubierta exterior.' },
      { title: 'Vino, champán, maridajes premium', desc: 'Añada 2 copas de alcohol — vino, cerveza y rakı locales (+€{p.alcohol2}/persona). Champán importado y maridajes premium bajo petición — pregunte al reservar.' }
    ],
    faq: [
      { q: '¿Qué hace romántico este tour?', a: 'La combinación de mesa privada, decoración a la luz de las velas (opcional +€{p.romantic}), generoso banquete turco, violín en vivo y música acústica, e iluminados puentes del Bósforo que pasan sobre su cabeza. Diseñamos la experiencia para parejas — ambiente tranquilo al principio, luego DJ enérgico y baile. Usted elige el ritmo.' },
      { q: '¿Pueden organizar una sorpresa para mi pareja — cumpleaños, aniversario, pedida de mano?', a: 'Sí — avise al reservar. Podemos coordinar una tarta de cumpleaños (gratis), una decoración especial de mesa, una tarjeta escrita a mano en su idioma o que nuestro personal lleve algo a la mesa en el momento justo. Para pedidas de mano, recomendamos escribirnos directamente por WhatsApp para planificarlo de forma discreta.' },
      { q: '¿Cuánto cuesta el tour romántico para 2 personas?', a: 'Crucero con cena para 2: 2 × €{p.dinnerStd} = €48.60. Añada la decoración romántica +€{p.romantic} = €63.60. Sin prepago — pago a bordo. Paquete de alcohol de 2 copas para 2: 2 × €{p.alcohol2} = €20 adicionales.' },
      { q: '¿El crucero romántico por el Bósforo es privado — solo para nosotros?', a: 'No — es un tour compartido con otras parejas e invitados (hasta 60-80 en total). **Su mesa** es privada (solo para su grupo), pero hay otros huéspedes a bordo. Si desea un barco totalmente privado para 2 personas, se trataría de un **Crucero Privado por el Bósforo** independiente (podemos organizarlo bajo petición — escríbanos).' },
      { q: '¿Podemos llevar nuestras propias flores, tarta o regalo?', a: 'Por supuesto. Lleve lo que desee — nuestro personal le ayudará a colocar discretamente el regalo sorpresa, a esconder la cajita del anillo en el postre o a exhibir las flores que usted haya traído. No hay cargos adicionales tipo descorche. Solo avise para que podamos coordinar el momento.' },
      { q: '¿Qué debemos llevar puesto para un crucero romántico por el Bósforo?', a: 'De smart casual a elegante — muchas parejas se visten elegantemente (vestidos, chaquetas). No hay código estricto, pero el ambiente es más especial que el turismo casual. Lleve una chaqueta ligera o un chal — la cubierta puede ser fresca incluso en verano. Calzado cómodo si piensa bailar después de la cena.' }
    ],
    cta: {
      primary: 'Reservar Tour Romántico · Pago a Bordo',
      secondary: 'Añada la decoración de mesa romántica (+€{p.romantic}) en el asistente de reservas · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Crucero Halal Bósforo desde €{p.dinnerStd} — Show en Vivo + Tour Nocturno',
      description: 'Crucero con cena de 3 horas por el Bósforo: espectáculo folklórico en vivo, puentes iluminados, vistas panorámicas nocturnas. Menú halal disponible.'
    },
    hero: {
      h1: 'Crucero Halal por el Bósforo en Estambul',
      subtitle: 'Menú con certificación 100% halal, alcohol siempre opcional, entretenimiento apto para familias y un ambiente respetuoso para viajeros musulmanes — la velada del Bósforo, bien hecha.',
      badge: '100% Halal · Apto para Familias · Propietario Musulmán'
    },
    intro: [
      'El **crucero halal por el Bósforo** es el tour con cena más respetuoso de Estambul para viajeros musulmanes. Toda la carne que servimos a bordo — salmón, lubina, pollo, köfte de cordero, solomillo de ternera, entrecot — tiene **certificación halal** de proveedores autorizados. Servimos el mismo menú a todos los huéspedes; no hay una "sección halal" aparte porque todo el barco es halal por defecto.',
      'El alcohol es un **complemento opcional** — nunca se impone a los huéspedes y la distribución de mesas separa de forma natural a quienes prefieren una mesa sin alcohol. Está disponible para quienes deseen el paquete de alcohol de 2 copas (+€{p.alcohol2}/persona), pero los refrescos ilimitados incluidos (agua, cola, zumo) son suficientes para la mayoría de familias musulmanas. Nuestra tripulación está formada para ser respetuosa con sus preferencias, sin dar nada por supuesto.',
      'El **crucero por el Bósforo apto para musulmanes** es importante para viajeros de Arabia Saudí, EAU, Kuwait, Qatar, Irán, Malasia, Indonesia, Pakistán y Marruecos que desean la velada más icónica de Estambul sin concesiones. Licencia TÜRSAB, 4,8★ y pago a bordo — no se compromete a nada hasta estar seguro de que la experiencia cumple con sus estándares.'
    ],
    highlights: [
      { title: 'Menú con certificación 100% halal', desc: 'Toda la carne (salmón, lubina, pollo, köfte, ternera, entrecot) tiene certificación halal de proveedores autorizados. La cocina sigue la preparación halal. Sin productos de cerdo ni aditivos no halal. Opciones vegetarianas siempre disponibles.' },
      { title: 'Alcohol opcional, nunca impuesto', desc: 'Los paquetes de alcohol son un complemento — no están incluidos por defecto. Los refrescos (agua, cola, zumo) son ilimitados y gratuitos. Su mesa permanecerá sin alcohol a menos que lo solicite explícitamente. La tripulación respeta silenciosamente su elección.' },
      { title: 'Entretenimiento apto para familias', desc: 'Ceremonia sema, danzas folclóricas tradicionales turcas, música turca en vivo. Sin actuaciones de estilo discoteca, sin contenido inapropiado. Seguro para niños, respetuoso para familias. La danza oriental es una forma de arte tradicional, presentada con modestia.' },
      { title: 'Respeto por los horarios de oración', desc: 'Si el embarque coincide con el maghrib o el isha (20:00-21:00), nuestro personal puede indicar un lugar tranquilo de oración en el muelle de Kabataş antes de zarpar. Solo avise al reservar.' }
    ],
    faq: [
      { q: '¿El crucero por el Bósforo es 100% halal?', a: 'Sí — todos los productos cárnicos del menú (pescado, pollo, köfte, solomillo de ternera, entrecot, cordero) tienen certificación halal de proveedores autorizados. La cocina sigue los estándares de preparación halal. No se sirve cerdo en ningún lugar del barco. No es una "opción halal" — todo el menú es halal.' },
      { q: '¿Otros huéspedes beben alcohol en este tour?', a: 'Algunos huéspedes añaden el paquete opcional de alcohol de 2 copas (+€{p.alcohol2}/persona). Las mesas están separadas de forma natural — puede solicitar una sección sin alcohol. La tripulación no trae alcohol a menos que lo pida específicamente un huésped. Los refrescos (ilimitados) están incluidos para todos.' },
      { q: '¿Este tour es adecuado para familias musulmanas con niños?', a: 'Sí — es uno de los tours más respetuosos con las familias en Estambul. El entretenimiento es modesto (danzas folclóricas, sema, música turca), los niños menores de 3 años gratis, 4-8 años con 50% de descuento. Sin ambiente de discoteca. Familias del Golfo, Indonesia, Malasia, Pakistán y Marruecos reservan este tour regularmente.' },
      { q: '¿Puedo rezar a bordo?', a: 'No hay una sala de oración específica a bordo, pero recomendamos rezar antes del embarque a las 20:00 (la oración del maghrib suele caer en esta ventana). El muelle de Kabataş tiene instalaciones de oración. Si necesita rezar durante la navegación de 21:00-00:00 (isha), hable con la tripulación — podemos organizar un rincón tranquilo en cubierta.' },
      { q: '¿Cuáles son los precios para una familia musulmana de 4 (2 adultos, 2 niños)?', a: 'Crucero con cena: 2 × €{p.dinnerStd} + 2 × €12.15 (4-8 años a mitad de precio) = €72.90. Si los niños tienen menos de 3 años, gratis: 2 × €{p.dinnerStd} = €48.60. Añada €5 por adulto de traslado al hotel. Total: €48.60–€92.90 para una familia de 4, sin prepago, pago a bordo.' },
      { q: '¿El traslado al hotel también es halal?', a: 'El traslado al hotel es solo un viaje en coche — no hay comida ni bebida, por lo que no hay preocupación halal. Nuestros conductores son profesionales, respetuosos y puntuales. Las zonas de traslado cubren Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli y otros 8 barrios céntricos donde suelen alojarse los viajeros musulmanes.' }
    ],
    cta: {
      primary: 'Reservar Tour Halal · Pago a Bordo',
      secondary: 'Cancelación gratuita 2 horas antes · Sin prepago · Certificación halal',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Experiencia VIP en el Bósforo desde €{p.dinnerStd} — Cena Premium en el Bósforo',
      description: 'Crucero con cena por el Bósforo de nivel VIP: menú turco completo, espectáculos en vivo, opción de mesa junto al escenario, servicio atento. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Pago a bordo, cancelación gratuita.'
    },
    hero: {
      h1: 'Experiencia VIP en el Bósforo — Crucero con Cena',
      subtitle: 'Un menú, un estándar: premium para todos. Una velada de 3 horas por el Bósforo a bordo del AMOR — cena turca completa, espectáculos en vivo y, si lo deseas, una mesa privada junto al escenario. No vendemos una "clase VIP" aparte: servimos lo mejor a cada huésped.',
      badge: '40% DE DESCUENTO · Un Menú, Estándar Premium · Pago a Bordo'
    },
    intro: [
      'Muchos barcos del Bósforo dividen a sus huéspedes en "Estándar" y "VIP". Nosotros no. A bordo del **AMOR** hay un único menú de cena, preparado con el mismo cuidado para todos: 10 variedades de meze turcos, un entrante caliente, plato principal a elegir (salmón, lubina, pollo o köfte), tarta helada y refrescos ilimitados. El programa de espectáculos también está incluido — ceremonia de los derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ — todo dentro del precio de €{p.dinnerStd}/persona.',
      'La sensación VIP empieza en tu mesa. Si quieres estar lo más cerca posible del escenario y de las vistas, añade la **mesa privada junto al escenario** (+€{p.romantic}/mesa) y tu sitio queda reservado por adelantado: el mejor ángulo para los derviches, las danzas folclóricas y el Bósforo iluminado. La opción favorita de parejas, celebraciones y aficionados a la fotografía.',
      'El AMOR es un barco moderno de 42 metros, 3 cubiertas y capacidad para 400 huéspedes, con calefacción en invierno y aire acondicionado en verano. La ruta de 3 horas sale de Kabataş (embarque desde las 20:00, salida 21:00, regreso 00:00) y pasa por Dolmabahçe, la mezquita de Ortaköy, la fortaleza de Rumeli y las luces del puente del Bósforo. Con licencia TÜRSAB (A-17672) y 4,9★ en Google. Sin pago anticipado: pagas a bordo, con cancelación gratuita hasta 2 horas antes de la salida.'
    ],
    highlights: [
      { title: 'Un menú, estándar premium', desc: 'No hay un "menú VIP" aparte, porque nuestro único menú ya está a ese nivel. 10 variedades de meze, entrante caliente, 4 platos principales a elegir, postre y refrescos ilimitados, servidos con el mismo cuidado en todas las mesas.' },
      { title: 'Mesa privada junto al escenario (+€{p.romantic}/mesa)', desc: 'Las mesas más cercanas a los derviches, las danzas folclóricas y la danza del vientre se reservan por adelantado. Vista privilegiada del escenario y del Bósforo. Tu mesa es privada, no compartida.' },
      { title: 'Servicio de mesa atento', desc: 'Nuestro equipo te sirve en la mesa: los platos, recomendaciones del menú, bebidas adicionales y peticiones especiales. Sin colas ni esperas.' },
      { title: '40% DE DESCUENTO — antes €{p.dinnerStdOriginal}, ahora €{p.dinnerStd}', desc: 'Precio de reserva directa: €{p.dinnerStd}/persona (precio de lista €{p.dinnerStdOriginal}). Pago a bordo, sin pago anticipado. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿Vendéis un "paquete VIP"? ¿En qué se diferencia del Estándar?', a: 'No vendemos un paquete VIP aparte: hay un único menú, servido a todos con el mismo estándar premium. Lo que llamamos "experiencia VIP" es personalizar tu velada: mesa privada junto al escenario (+€{p.romantic}/mesa), servicio de mesa atento y bebidas adicionales opcionales. El crucero dura 3 horas y cuesta €{p.dinnerStd}/persona.' },
      { q: '¿€{p.dinnerStd} es realmente un 40% de descuento?', a: 'Sí: nuestro precio de lista es €{p.dinnerStdOriginal}/persona. €{p.dinnerStd} es la tarifa de reserva directa, sin comisiones de intermediarios. Pagas a bordo y no hay pago anticipado.' },
      { q: '¿Qué incluye el menú?', a: '10 variedades de meze turcos, un entrante caliente, plato principal a elegir (salmón, lubina, pollo o köfte) y tarta helada de postre, con refrescos ilimitados. El programa de espectáculos está incluido: ceremonia de los derviches, 5 danzas folclóricas, danza del vientre, música en vivo y DJ.' },
      { q: '¿El alcohol está incluido?', a: 'No: el alcohol es un extra aparte, 2 copas de vino o cerveza local por +€{p.alcohol2}/persona. Los refrescos ilimitados sí están incluidos y son gratuitos. Las bebidas premium de importación se facturan aparte a bordo.' },
      { q: '¿Cómo garantizo una mesa junto al escenario?', a: 'Basta con seleccionar el extra "mesa privada junto al escenario" (+€{p.romantic}/mesa) al reservar: la mesa queda a tu nombre. Las mejores posiciones se llenan con reservas anticipadas, así que te recomendamos añadirla antes del día del crucero.' },
      { q: '¿Cómo es el barco?', a: 'El AMOR: un barco de pasajeros moderno de 42 metros, 3 cubiertas y capacidad para 400 huéspedes, con calefacción en invierno y aire acondicionado en verano. Salida desde el muelle de Kabataş: embarque 20:00, salida 21:00, regreso 00:00. Ruta: Dolmabahçe, Ortaköy, fortaleza de Rumeli, Beylerbeyi y las luces del puente del Bósforo.' }
    ],
    cta: {
      primary: 'Reserva tu mesa · Pago a bordo',
      secondary: 'Antes €{p.dinnerStdOriginal}, ahora €{p.dinnerStd} · Cancelación gratuita hasta 2 h antes',
      tertiary: 'Añadir mesa privada junto al escenario (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Crucero Privado Bósforo — Alquiler de Barco en Estambul (25+ invitados)',
      description: 'Crucero privado por el Bósforo para grupos, bodas, eventos corporativos. Barco exclusivo, menú a medida, duración flexible. Cancelación gratuita.'
    },
    hero: {
      h1: 'Crucero Privado por el Bósforo',
      subtitle: 'Alquile todo el barco para su grupo — celebraciones familiares, cenas corporativas, cumpleaños, pedidas de mano, bodas. Uso privado, menú personalizado, horario flexible.',
      badge: 'Alquiler Privado · Más de 25 Huéspedes · Menú Personalizado'
    },
    intro: [
      'Un **crucero privado por el Bósforo** significa que todo el barco es suyo — sin otros huéspedes, sin mesas compartidas, sin pista de baile compartida. Perfecto para reuniones familiares, cenas corporativas, fiestas de cumpleaños, despedidas de soltero/a o banquetes de boda. El barco, la tripulación, el menú, el entretenimiento y el horario se adaptan a su grupo.',
      'Nuestro **alquiler de crucero privado por el Bósforo** admite grupos de **25 a 80 huéspedes**. Los grupos más pequeños también pueden solicitar la experiencia privada — cobramos una tarifa mínima que cubre el coste operativo del barco. Los grupos más grandes (tamaño de boda) reciben precios personalizados y suelen incluir decoración personalizada, banda en vivo, servicio de tarta y duración ampliada (4-5 horas en lugar de las 3 estándar).',
      'Ya organice un evento corporativo para clientes, una fiesta de 50 cumpleaños o un banquete de boda bajo los puentes más icónicos de Estambul, este es el **tour privado en el que confían los organizadores de eventos de Estambul**. Calificación 4,8★, licencia TÜRSAB, tripulación totalmente angloparlante y flexibilidad en todo — ruta, menú, música, horario.'
    ],
    highlights: [
      { title: 'Todo el barco, solo para usted', desc: 'Sin otros huéspedes. Su grupo tiene cada cubierta, cada mesa. Elija su música, código de vestimenta, programa. La privacidad es importante — la respetamos.' },
      { title: 'Menú personalizado y paquete de bebidas', desc: 'Trabaje con nuestro chef para personalizar el menú: mezze específicos, selección de platos principales, platos específicos de su cultura o necesidades dietéticas. Paquetes de alcohol, copas de champán, barras de cócteles personalizadas, todo se puede organizar.' },
      { title: 'Duración y salida flexibles', desc: 'Las 3 horas estándar pueden ampliarse a 4-5 horas. Elija salida diurna a las 12:00, atardecer a las 17:30 o nocturna a las 21:00. ¿Prefiere entre semana en lugar del fin de semana? No hay problema — trabajaremos con su agenda.' },
      { title: 'Decoración personalizada, banda, programa', desc: 'Decoraciones personalizadas (globos, pancartas, composiciones florales), banda en vivo en lugar de DJ, servicio de tarta de boda, coordinación con fotógrafo, discursos — añada lo que su evento necesite. Somos organizadores de eventos, no solo operadores de barcos.' }
    ],
    faq: [
      { q: '¿Cuánto cuesta un crucero privado por el Bósforo?', a: 'Para grupos de más de 25, suele ser €{p.dinnerStd}/persona + tarifa de alquiler del barco según tamaño del grupo, fecha y duración. Escríbanos por WhatsApp con el tamaño de su grupo, fecha y requisitos — cotizamos en menos de 1 hora. La mayoría de eventos caen en el rango total de €2.000-€6.000.' },
      { q: '¿Cuál es el tamaño mínimo de grupo para un crucero privado por el Bósforo?', a: 'Técnicamente, 25 huéspedes hacen económicamente viable el tour privado. Los grupos más pequeños (10-24) pueden alquilar en privado, pero pagan una tarifa mínima equivalente a ~25 personas. Para grupos realmente pequeños (2-10), considere el crucero con cena normal — su mesa ya es privada, solo se comparte el barco.' },
      { q: '¿Puedo celebrar una boda en el crucero por el Bósforo?', a: 'Sí — organizamos entre 10 y 15 banquetes de boda al año. Capacidad de hasta 80 para cena sentada, hasta 100 para estilo cóctel. Coordinamos con su fotógrafo, wedding planner, banda o chef. Servicio de tarta personalizado, pista de primer baile, copas de champán pueden organizarse. Escriba por WhatsApp para precios de boda.' },
      { q: '¿Qué pasa con los eventos corporativos y cenas de equipo?', a: 'Los tours privados corporativos son nuestras reservas más habituales. Cena de empresa, agasajo a clientes, lanzamiento de producto, celebración de equipo — todo funciona. Podemos proporcionar factura con desglose de IVA, organizar traslados desde hotel para su equipo y coordinar materiales de marca (detalles de mesa, señalética) bajo petición.' },
      { q: '¿Puedo llevar mi propia banda en vivo o DJ en lugar del suyo?', a: 'Sí — puede llevar su propia banda en vivo, DJ, fotógrafo. O mantener el nuestro estándar (sema, danzas folclóricas, oriental, DJ) y añadir el suyo encima. El barco cuenta con sistema de PA y pista de baile. Avise con antelación para coordinar los controles de sonido.' },
      { q: '¿Cómo solicito un presupuesto para un crucero privado por el Bósforo?', a: 'Lo más fácil: escríbanos por WhatsApp al +90 532 244 29 22 con (1) tamaño de su grupo, (2) fecha preferida, (3) motivo (boda, corporativo, cumpleaños), (4) requisitos especiales. Respondemos en 1 hora en horario laboral, 12 horas por la noche. También podemos concertar una videollamada para discutir los detalles.' }
    ],
    cta: {
      primary: 'WhatsApp para Presupuesto Privado',
      secondary: 'Menú personalizado, grupo 25-80, duración flexible · Respuesta en menos de 1 hora',
      tertiary: 'Opción Crucero con Cena (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Crucero Bósforo para Parejas desde €{p.dinnerStd} — Cita Nocturna Estambul',
      description: 'Crucero con cena para parejas en el Bósforo. Mesa privada, puentes iluminados, decoración romántica opcional. Desde €{p.dinnerStd}/persona.'
    },
    hero: {
      h1: 'Crucero por el Bósforo para Parejas',
      subtitle: 'Una noche de cita en el Bósforo — mesa privada, música en vivo, puentes iluminados pasando sobre su cabeza. Ya sea su primera cita en Estambul o su décimo aniversario, esta velada funciona.',
      badge: 'Mesa Privada · Música en Vivo · Pago a Bordo'
    },
    intro: [
      'El **crucero por el Bósforo para parejas** es la noche de cita favorita de Estambul. No todas las parejas celebran un aniversario — a veces está en la ciudad más romántica del mundo y quiere una gran velada juntos. Este tour ofrece: mesa privada para dos, un generoso banquete turco pausado, violín en vivo y música acústica durante la cena, y el iluminado Puente del Bósforo pasando lentamente por encima.',
      'El ambiente es **cálido pero no excesivamente romántico** — sin música obligatoria de pedida de mano, sin aplausos coordinados incómodos de "recién casados". Come, bebe, conversa, contempla las luces de Estambul. Si quiere añadir la decoración de mesa romántica (velas, rosas, +€{p.romantic}), genial — si no, la cena por sí sola ya es especial.',
      'Ya esté en Estambul con su pareja durante 3 días, celebrando un hito modesto o planeando una futura visita de pedida de mano — el **crucero por el Bósforo para parejas** le ofrece una velada de 3 horas para estar juntos en una de las ciudades más fotografiadas del mundo. 4,8★, pago a bordo, cancelación gratuita.'
    ],
    highlights: [
      { title: 'Mesa privada para dos', desc: 'Mesa exclusiva de 2 personas, no compartida. Prioridad de asientos junto a la ventana para parejas. Fotos del atardecer y del Bósforo nocturno justo al otro lado de su ventana.' },
      { title: 'Cena generosa de ritmo pausado', desc: '10 variedades de mezze turcos, entrante caliente, plato principal (salmón, lubina, pollo, köfte o vegetariano), postre de pastel con helado. Servido lentamente a lo largo de 3 horas — sin prisas.' },
      { title: 'Violín en vivo y música suave', desc: 'Durante la cena, el violín en vivo y la música turca acústica crean un ambiente íntimo adecuado para la conversación. Después, entra el DJ para parejas que quieran bailar.' },
      { title: 'Complementos para noches especiales', desc: 'Decoración romántica (velas, rosas): +€{p.romantic}. Paquete de alcohol de 2 copas (vino, rakı): +€{p.alcohol2}/persona. Traslado al hotel (ida y vuelta): +€{p.transfer}/persona. Elija lo que se adapte a su velada.' }
    ],
    faq: [
      { q: '¿Este crucero por el Bósforo es adecuado para una noche de cita normal, no para una ocasión especial?', a: 'Sí — la mayoría de nuestras parejas no celebran nada concreto, solo están teniendo una gran noche de cita. El ambiente es cálido y agradable sin ser excesivo. Puede añadir la decoración de mesa romántica (+€{p.romantic}) si quiere un plus, o simplemente disfrutar de la velada estándar.' },
      { q: '¿Cuánto cuesta el crucero por el Bósforo para 2 personas?', a: 'Crucero con cena para 2: 2 × €{p.dinnerStd} = €48.60. Añada traslado al hotel para ambos: +€{p.transfer}×2 = €10. Añada el paquete de alcohol de 2 copas para ambos: +€{p.alcohol2}×2 = €20. Sin prepago — pago a bordo.' },
      { q: '¿Pueden las parejas llevar su propio vino o champán?', a: 'No permitimos alcohol del exterior (motivos de licencia comercial). Pero tenemos el paquete de alcohol de 2 copas con vino local (+€{p.alcohol2}/persona) y podemos organizar vinos importados premium o champán a un coste — pregunte al reservar. Prosecco, Chianti y Cabernet son solicitudes premium populares.' },
      { q: '¿Es raro si no bebemos alcohol — estamos fuera de lugar?', a: 'En absoluto — muchas parejas omiten el alcohol por completo, ya sea por motivos halal o simplemente por preferencia. Los refrescos ilimitados (agua, zumo, cola) están incluidos. Si su mesa no tiene alcohol, nadie lo notará. Muchas parejas musulmanas de Arabia Saudí, Irán e Indonesia reservan este tour.' },
      { q: '¿Cuál es el mejor momento para el crucero por el Bósforo para parejas — atardecer o noche?', a: 'El crucero zarpa cada noche a las 21:00 — y en verano (mayo–agosto) esa única salida lo incluye todo: embarque desde las 20:00 durante la hora dorada, la puesta de sol justo en torno a la salida, y después los puentes iluminados y los palacios encendidos. En invierno es un crucero puramente de luces nocturnas. En cualquier caso, una sola reserva ofrece a las parejas la versión más icónica del Bósforo.' },
      { q: '¿Hay pista de baile — podemos bailar?', a: 'Sí — después del servicio de cena (~22:30), el DJ comienza y la cubierta exterior se convierte en zona de baile. Muchas parejas bailan temas lentos bajo las luces con el Puente del Bósforo de fondo. Algunas de las mejores fotos que hará en Estambul.' }
    ],
    cta: {
      primary: 'Reservar Noche de Cita · Pago a Bordo',
      secondary: 'Añada decoración romántica (+€{p.romantic}) · Cancelación gratuita 2 horas antes',
      tertiary: 'Ver Crucero Romántico por el Bósforo'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Crucero Atardecer + Cena Bósforo desde €{p.dinnerStd}',
      description: 'Contemple el atardecer en el Bósforo y cene bajo los puentes iluminados. Embarque 20:00 en Kabataş, salida 21:00. 3 horas, cena completa. Pago a bordo.'
    },
    hero: {
      h1: 'Crucero al Atardecer con Cena por el Bósforo',
      subtitle: 'Embarque a las 20:00 mientras el cielo se tiñe de dorado sobre los minaretes — y cene sobre el agua mientras Dolmabahçe, la Mezquita de Ortaköy y el Puente del Bósforo se iluminan para la noche.',
      badge: 'Embarque 20:00 · Salida 21:00 · Del Atardecer a las Luces de la Ciudad'
    },
    intro: [
      'La experiencia del **crucero al atardecer por el Bósforo** en Estambul gira en torno a una cosa: la transición. Nuestro crucero embarca en el muelle de Kabataş a partir de las 20:00 — y en las largas tardes de mayo a agosto, la hora dorada se despliega mientras usted se acomoda en cubierta. El sol se pone tras los minaretes de la orilla europea justo en torno a la salida de las 21:00, así que lo contempla desde el agua: el Palacio de Dolmabahçe bañado en oro, la Mezquita de Ortaköy recortada contra un cielo resplandeciente.',
      'Nuestro **crucero del atardecer a la noche por el Bósforo** incluye una cena turca completa — 10 variedades de mezze, entrante caliente, plato principal a elegir, postre — servida mientras la ciudad enciende sus luces. Cuando llega el postre, navega bajo el iluminado Puente del Bósforo con 30 millones de luces reflejadas en el agua oscura. El paso del crepúsculo a la noche cerrada, todo dentro de un solo crucero de 3 horas, es la esencia de la experiencia.',
      'Ya sea un fotógrafo persiguiendo la última luz, una pareja en busca de "la foto del recuerdo de Estambul" o un visitante primerizo que quiere la velada clásica sobre el agua, este es el **crucero al atardecer con cena por el Bósforo** que los locales recomiendan a los visitantes. Desde €{p.dinnerStd}/persona, calificación 4,8★, licencia TÜRSAB, pago a bordo — sin prepago.'
    ],
    highlights: [
      { title: 'Atardeceres de verano justo a la salida', desc: 'De mayo a agosto, el sol de Estambul se pone aproximadamente entre las 20:15–20:45 — el embarque a las 20:00 le regala la hora dorada en cubierta, y la salida de las 21:00 le sitúa en el agua para el atardecer mismo. Cámara lista — esta es la toma.' },
      { title: 'De la hora azul a la noche cerrada', desc: 'No solo el atardecer — el crucero navega a través del crepúsculo hasta el Bósforo completamente iluminado. Luz dorada, hora azul y luego 30 millones de luces del puente sobre el agua oscura: tres fases de luz en una sola velada.' },
      { title: 'Cena completa durante el crucero', desc: '10 variedades de mezze turcos, entrante caliente, plato principal (salmón, lubina, pollo, köfte, vegetariano), postre de pastel con helado, refrescos ilimitados — servidos mientras se encienden las luces de la ciudad.' },
      { title: 'Dolmabahçe, Ortaköy, Puente del Bósforo — todos brillando', desc: 'La ruta pasa por el Palacio de Dolmabahçe, la Mezquita de Ortaköy, el Puente del Bósforo, Rumeli Hisarı y el Palacio de Beylerbeyi mientras se encienden sus luces. Cada monumento en su mejor luz.' }
    ],
    faq: [
      { q: '¿A qué hora sale el crucero al atardecer por el Bósforo?', a: 'El embarque comienza a las 20:00 en el muelle de Kabataş, el barco zarpa a las 21:00 y regresa aproximadamente a las 00:00. En verano (mayo–agosto), el sol se pone aproximadamente entre las 20:15–20:45 — la hora dorada se vive durante el embarque, y el atardecer mismo justo en torno a la salida, contemplado desde el agua.' },
      { q: '¿El crucero al atardecer por el Bósforo es lo mismo que el crucero con cena?', a: 'Sí — es un único crucero. Hay una sola salida diaria a las 21:00 con cena completa y espectáculos en vivo a bordo. En las largas tardes de verano funciona también como crucero al atardecer: embarca durante la hora dorada y navega a través de la hora azul hasta la noche iluminada. En invierno, el mismo crucero es una experiencia pura de luces nocturnas.' },
      { q: '¿Cuál es el precio del crucero al atardecer por el Bósforo?', a: 'Desde €{p.dinnerStd}/persona para el crucero (3 horas, cena completa, entretenimiento en vivo). Pago a bordo — sin prepago. Niños de 0-3 años gratis, 4-8 años a mitad de precio.' },
      { q: '¿Cuál es la mejor época del año para un crucero al atardecer por el Bósforo?', a: 'De mayo a agosto. Los atardeceres tardíos de Estambul (20:15–20:45) coinciden con la salida de las 21:00, así que disfruta de la hora dorada, el atardecer y los puentes iluminados en una sola velada. En otoño e invierno el sol se pone antes y el mismo crucero se convierte en una experiencia completa de luces nocturnas — igual de fotogénica, con otro ambiente.' },
      { q: '¿Qué debo llevar a un crucero al atardecer?', a: 'Un smartphone o una cámara — la hora dorada y los puentes iluminados lo piden a gritos. Una chaqueta ligera: la brisa aumenta en cubierta después del atardecer. Ropa smart casual — está cenando, pero no hay código de vestimenta estricto.' },
      { q: '¿Veo los puentes iluminados de noche en este crucero?', a: 'Sí — esa es la segunda mitad de la velada. El crucero navega de 21:00–00:00, así que tras el atardecer y la hora azul pasa bajo el Puente del Bósforo completamente iluminado, junto a palacios encendidos y la Torre de la Doncella, y regresa a Kabataş hacia las 00:00.' },
      { q: '¿A qué hora se pone el sol en Estambul?', a: 'En verano (junio–julio), los atardeceres de Estambul son en torno a las 21:00–20:45. En invierno, en torno a las 16:30–17:00. Para una experiencia de atardecer y noche, el crucero con cena de las 21:00 de Bosphorus Night desde Kabataş captura la última hora dorada y la hora azul en verano, y los monumentos iluminados durante todo el año.' },
      { q: '¿Vale la pena el crucero al atardecer por el Bósforo?', a: 'Sí — el atardecer sobre el Puente del Bósforo es una de las vistas emblemáticas de Estambul. El crucero con cena de las 21:00 de Bosphorus Night (€{p.dinnerStd}/persona) captura la hora azul posterior al atardecer y los palacios iluminados, con cena completa y espectáculos en vivo durante 3 horas.' }
    ],
    cta: {
      primary: 'Reservar el Crucero al Atardecer · Pago a Bordo',
      secondary: 'Embarque 20:00 · Salida 21:00 · Cena incluida · Cancelación gratuita 2 horas antes',
      tertiary: 'Ver Todos los Detalles del Crucero con Cena'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tour Nocturno Bósforo desde €{p.dinnerStd} — Cena + Show en Vivo',
      description: 'Tour nocturno de 3 horas por el Bósforo con cena y show en vivo. Salida 21:00 desde Kabataş, puentes iluminados. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Tour Nocturno por el Bósforo',
      subtitle: 'Los puentes iluminados de Estambul, los palacios encendidos y el agua del Bósforo como un espejo reflejando 30 millones de luces — el tour nocturno que define la velada en Estambul.',
      badge: 'Puentes Iluminados · Espectáculo en Vivo · Cena Incluida'
    },
    intro: [
      'El **tour nocturno por el Bósforo** es la actividad nocturna más recomendada de Estambul. La razón es esta: después del anochecer, el Bósforo se transforma. El Puente del Bósforo alterna entre azul, morado y dorado. El Palacio de Dolmabahçe brilla en amarillo cálido. La Mezquita de Ortaköy se refleja perfectamente en el agua negra. Cada monumento de Estambul alcanza su máximo dramatismo por la noche.',
      'Nuestro **tour nocturno por el Bósforo con cena** incluye la velada icónica completa: 3 horas en el agua (21:00-00:00), generoso banquete turco, danzas folclóricas en vivo (sema, 5 danzas folclóricas, danza oriental), música en vivo y set de DJ que mantiene la cubierta animada hasta el final de la noche. Cada huésped recibe el mismo programa — no hay una opción "básica" que se salte las mejores partes.',
      'Ya sea su primer viaje a Estambul buscando "lo único que hay que hacer por la noche", o ya haya estado aquí antes y quiera las 3 horas más fotogénicas de la ciudad, este es el **tour nocturno por el Bósforo** calificado con 4,8★ por más de 11.317 viajeros. Licencia TÜRSAB, pago a bordo, sin prepago.'
    ],
    highlights: [
      { title: 'Bósforo iluminado en su máximo dramatismo', desc: 'El Puente del Bósforo cambia de color (azul, morado, dorado), los palacios brillan en amarillo, la Mezquita de Ortaköy se refleja en el agua negra. 21:00-00:00 es la iluminación máxima para todos los monumentos de Estambul.' },
      { title: 'Espectáculo turco tradicional a bordo', desc: 'Ceremonia sema, 5 danzas folclóricas tradicionales (de diferentes regiones de Turquía), danza oriental, música turca en vivo, luego set de DJ. 40 minutos de actuación, luego la música + cena continúan.' },
      { title: 'Cena generosa completa', desc: '10 variedades de mezze turcos, entrante caliente (paçanga böreği), plato principal (salmón, lubina, pollo, köfte, vegetariano — su elección), postre (pastel con helado), refrescos ilimitados. Certificación halal.' },
      { title: 'Ruta completa del Bósforo', desc: 'Kabataş → Dolmabahçe → Palacio de Çırağan → Mezquita de Ortaköy → Bebek → Rumeli Hisarı → Puente Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Torre de la Doncella → Kabataş.' }
    ],
    faq: [
      { q: '¿A qué hora es el tour nocturno por el Bósforo?', a: 'Embarque a partir de las 20:00 en el muelle de Kabataş. El barco zarpa a las 21:00, regresa aproximadamente a las 00:00. Recomendamos llegar 20 minutos antes para acomodarse y elegir asiento.' },
      { q: '¿Cuánto cuesta el tour nocturno por el Bósforo?', a: 'Tour nocturno (3 horas, cena, espectáculo): €{p.dinnerStd}/persona (antes €{p.dinnerStdOriginal}). 0-3 años gratis, 4-8 años a mitad de precio. Pago a bordo.' },
      { q: '¿Cuál es la diferencia entre el tour nocturno por el Bósforo y el crucero con cena?', a: 'Es lo mismo, diferente palabra clave. "Tour nocturno por el Bósforo" es como lo buscan muchos viajeros; "crucero con cena" es el término del sector. Mismo barco, mismo programa de 3 horas, mismo menú, mismo espectáculo. Elija el término de búsqueda que prefiera — la experiencia es la misma.' },
      { q: '¿El tour nocturno por el Bósforo vale más la pena que el del atardecer?', a: 'Tour nocturno = Estambul iluminado, máximo dramatismo de luz, programa de entretenimiento completo, las fotos más icónicas de los puentes iluminados. Y es un único crucero: en verano (mayo–agosto), el embarque desde las 20:00 coincide con la hora dorada y el sol se pone justo en torno a la salida de las 21:00 — así que la misma velada cubre el atardecer y la noche. No hace falta elegir ni reservar dos veces.' },
      { q: '¿Puedo hacer el tour nocturno por el Bósforo en mi primer día en Estambul?', a: 'Sí — lo recomendamos. Muchos viajeros reservan el tour nocturno para su primera velada porque les da una orientación completa: todos los grandes monumentos desde el agua, con buena cena y entretenimiento. Es más fácil que intentar recorrer la ciudad con jet lag el día 1. Traslado desde hotel disponible desde barrios céntricos.' },
      { q: 'No hablo turco — ¿el tour es en inglés?', a: 'La tripulación habla inglés. El entretenimiento (sema, danzas folclóricas, música) no requiere idioma. El menú de cena está en inglés. La reserva por WhatsApp / Telegram funciona en varios idiomas (inglés, árabe, ruso, alemán, francés, español). No se necesita turco.' }
    ],
    cta: {
      primary: 'Reservar Tour Nocturno · Pago a Bordo',
      secondary: 'Salida 21:00 · 3 horas · Cena + espectáculo incluidos · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Crucero con Cena Estambul desde €{p.dinnerStd} — Tour Nocturno Bósforo',
      description: 'Crucero con cena de 3 horas por el Bósforo en Estambul. Menú turco multiplato, folklore en vivo, puentes iluminados. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Crucero con Cena Estambul',
      subtitle: 'El mejor crucero con cena de Estambul — 3 horas en el Bósforo, generoso banquete turco, entretenimiento en vivo y vistas nocturnas de los monumentos más icónicos de la ciudad.',
      badge: '4,8★ · 11.317 reseñas · TÜRSAB A-17672'
    },
    intro: [
      '¿Busca un **crucero con cena en Estambul**? Ha encontrado el que la mayoría de los viajeros recomienda. Nuestra velada de 3 horas en el Bósforo combina un banquete turco completo, danzas folclóricas en vivo y las vistas más fotogénicas de la ciudad — todo desde un barco cómodo que zarpa del muelle de Kabataş a las 21:00.',
      'La experiencia del **crucero con cena Estambul**: embarque a las 20:00, acomódese, contemple cómo el Palacio de Dolmabahçe pasa al zarpar, la cena comienza al acercarse a la Mezquita de Ortaköy, empieza el espectáculo (sema, danzas folclóricas, oriental), y para cuando llega el postre está bajo el iluminado Puente del Bósforo. Regresa a Kabataş hacia la medianoche con un collage icónico de fotos y el estómago lleno.',
      '€{p.dinnerStd}/persona para el crucero con cena (antes €{p.dinnerStdOriginal}). Pago a bordo — sin prepago, sin riesgo. Licencia TÜRSAB A-17672, calificado con 4,8★ por más de 11.317 viajeros.'
    ],
    highlights: [
      { title: 'Cena turca generosa completa', desc: '10 variedades de mezze, entrante caliente, plato principal (salmón/lubina/pollo/köfte/vegetariano), postre de pastel con helado. Certificación halal. Refrescos ilimitados incluidos.' },
      { title: 'Espectáculo turco de danzas folclóricas en vivo', desc: 'Ceremonia sema, 5 danzas folclóricas tradicionales, danza oriental, música turca en vivo, DJ. 40 minutos de actuación, música ambiental continúa.' },
      { title: 'Ruta nocturna completa del Bósforo', desc: 'Tour de 3 horas: Dolmabahçe, Çırağan, Mezquita de Ortaköy, Puente del Bósforo, Bebek, Rumeli Hisarı, Puente FSM, Beylerbeyi, Üsküdar, Torre de la Doncella. Tanto la orilla europea como la asiática.' },
      { title: 'Desde €{p.dinnerStd} — pago a bordo', desc: 'Crucero con cena €{p.dinnerStd} (antes €{p.dinnerStdOriginal}). Sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿Cuánto cuesta un crucero con cena en Estambul?', a: 'Nuestro crucero con cena es €{p.dinnerStd}/persona (precio normal €{p.dinnerStdOriginal}). 0-3 años gratis, 4-8 años con 50% de descuento. Pago a bordo — sin prepago.' },
      { q: '¿Qué incluye el precio del crucero con cena Estambul?', a: 'Tour de 3 horas por el Bósforo, cena turca generosa (mezze, entrante caliente, plato principal, postre), refrescos ilimitados, espectáculo de danzas folclóricas en vivo (sema, danzas folclóricas, oriental), música en vivo + DJ, acceso a cubierta exterior, impuestos incluidos. Traslado al hotel y alcohol son complementos opcionales.' },
      { q: '¿Desde dónde sale el crucero con cena Estambul?', a: 'Muelle de Kabataş, Estambul — en la orilla europea, junto al Palacio de Dolmabahçe. Compartimos el lugar exacto de encuentro por WhatsApp / Telegram tras la reserva. Los vídeos a pie desde la parada de tranvía Dolmabahçe y la estación de tranvía Kabataş están en la sección de punto de encuentro arriba.' },
      { q: '¿Cuánto dura el crucero con cena — y cuándo empieza?', a: '3 horas en total. Embarque a partir de las 20:00, el barco zarpa completo a las 21:00, regresa aproximadamente a las 00:00. Recomendamos llegar 15-20 minutos antes para acomodarse y elegir asiento.' },
      { q: '¿Necesito reservar con antelación o puedo pasarme?', a: 'Reserve con antelación — los asientos se llenan, especialmente los fines de semana y festivos. La reserva el mismo día suele ser posible pero no está garantizada. El asistente de esta página le consigue un lugar en menos de 1 minuto. Pago a bordo, por lo que no hay riesgo financiero en reservar pronto.' },
      { q: '¿El crucero con cena Estambul es adecuado para vegetarianos / halal / restricciones dietéticas?', a: 'Sí — toda la carne tiene certificación halal. Plato principal vegetariano (falafel, patatas asadas, pilav de bulgur, estofado de verduras, aros de cebolla) disponible sin cargo adicional. Las alergias pueden atenderse si se avisan al reservar. El alcohol es un complemento opcional, nunca impuesto.' }
    ],
    cta: {
      primary: 'Reservar Crucero con Cena · Pago a Bordo',
      secondary: '4,8★ · Licencia TÜRSAB · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tour Nocturno Estambul desde €{p.dinnerStd} — Crucero Cena Bósforo + Show',
      description: 'Crucero de 3 horas con cena y show en vivo. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas. Traslado al hotel opcional.'
    },
    hero: {
      h1: 'Tour Nocturno Estambul',
      subtitle: 'El tour nocturno que los habitantes de Estambul recomiendan primero — un crucero por el Bósforo de 3 horas con cena, entretenimiento en vivo y las vistas iluminadas más icónicas de la ciudad.',
      badge: 'Velada Icónica en Estambul · 3 Horas · Cena Incluida'
    },
    intro: [
      'Un **tour nocturno en Estambul** debe hacer tres cosas: mostrarle las vistas icónicas de la ciudad, alimentarle bien y entretenerle. Nuestro crucero con cena por el Bósforo hace las tres en una sola velada de 3 horas — y por eso la mayoría de las guías de Estambul lo recomiendan como la experiencia nocturna #1.',
      'La ruta del **tour nocturno Estambul** cubre los mejores monumentos iluminados: Palacio de Dolmabahçe, Mezquita de Ortaköy, Puente del Bósforo (cambia de color), el barrio de Bebek, Rumeli Hisarı, Puente FSM, Palacio de Beylerbeyi, la orilla asiática de Üsküdar y la Torre de la Doncella en la distancia. La mayoría de tours por la ciudad los muestran desde el autobús — nosotros los mostramos desde el agua, donde resultan más dramáticos.',
      'Cena incluida (menú turco generoso), espectáculo turco de danzas folclóricas en vivo, sema, danza oriental y set de DJ. Si está en Estambul 2-3 días, esta es la única velada que ofrece el mayor impacto. 4,8★ de más de 11.317 viajeros, pago a bordo, sin prepago.'
    ],
    highlights: [
      { title: 'Todas las vistas nocturnas icónicas de Estambul', desc: 'Palacio de Dolmabahçe, Mezquita de Ortaköy, Puente del Bósforo iluminado, Rumeli Hisarı, Puente FSM, Palacio de Beylerbeyi, Torre de la Doncella. Todos los grandes monumentos en su máxima iluminación nocturna.' },
      { title: 'Cena turca completa incluida', desc: '10 mezze, entrante caliente, plato principal (salmón/lubina/pollo/köfte/vegetariano), postre, refrescos ilimitados. Certificación halal. Al precio de €{p.dinnerStd}/persona — todo incluido.' },
      { title: 'Danzas folclóricas en vivo + sema + oriental', desc: 'Entretenimiento turco tradicional: ceremonia sema de Mevlana, 5 danzas folclóricas regionales, danza oriental, música en vivo, DJ. 40 minutos de actuación, música ambiental toda la velada.' },
      { title: 'Fácil para quienes visitan Estambul por primera vez', desc: 'Punto de encuentro céntrico (muelle de Kabataş), traslado al hotel (+€{p.transfer}/persona), tripulación angloparlante, pago a bordo. Cero estrés logístico. Venga, disfrute, váyase.' }
    ],
    faq: [
      { q: '¿Cuál es el mejor tour nocturno de Estambul?', a: 'El crucero con cena por el Bósforo se clasifica constantemente como #1. Las razones: (1) le muestra todas las vistas nocturnas icónicas desde el agua, (2) incluye cena y espectáculo en un solo paquete, (3) 3 horas es suficiente para ver mucho sin agotarse, (4) punto de encuentro céntrico, (5) pago a bordo reduce la fricción de la reserva. La mayoría de guías de viaje de Estambul lo recomiendan como "lo único imprescindible por la noche".' },
      { q: '¿Cuánto cuesta el tour nocturno de Estambul?', a: 'Nuestro tour nocturno con cena por el Bósforo: €{p.dinnerStd}/persona. Incluye tour, cena, entretenimiento, refrescos. Opcional: 2 copas de alcohol +€{p.alcohol2}/persona, traslado al hotel +€{p.transfer}/persona. Pago a bordo — sin prepago.' },
      { q: '¿El tour nocturno de Estambul es seguro para viajeros solos?', a: 'Sí — muy seguro. Barco con licencia TÜRSAB, tripulación profesional angloparlante, CCTV a bordo, chalecos salvavidas disponibles. Muchos viajeros solos reservan este tour. Cena en una mesa compartida o privada (su elección) y la velada es inclusiva — conoce a otros viajeros si lo desea, o se queda consigo mismo.' },
      { q: '¿Cuál es la mejor hora para un tour nocturno en Estambul?', a: 'Nuestro crucero con cena por el Bósforo es de 21:00 a 00:00 (3 horas). Es el momento de iluminación máxima para todos los monumentos de Estambul — puentes totalmente iluminados, palacios brillando, luna sobre el agua. Si también quiere la hora dorada, venga en verano: el embarque comienza a las 20:00, y de mayo a agosto el sol se pone justo en torno a la salida de las 21:00 — el mismo crucero cubre ambas cosas.' },
      { q: '¿Cómo llego al punto de encuentro del tour nocturno de Estambul?', a: 'El punto de encuentro es el muelle de Kabataş (céntrico de la orilla europea, junto al Palacio de Dolmabahçe). En tranvía: T1 hasta la estación Kabataş (fin de línea). En taxi: ~15 min desde Taksim. A pie: 20 min desde Taksim bajando por İnönü Caddesi. Esta página tiene vídeos de indicaciones a pie. Traslado al hotel disponible +€{p.transfer}/persona si lo prefiere.' },
      { q: '¿Puedo reservar el tour nocturno de Estambul el mismo día?', a: 'Frecuentemente sí, especialmente entre semana. Los fines de semana se llenan más rápido. El asistente de reservas en esta página le permite comprobar la disponibilidad para esta noche y reservar en menos de 1 minuto. Para solicitudes urgentes del mismo día, escríbanos por WhatsApp al +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Reservar Tour Nocturno · Pago a Bordo',
      secondary: 'Desde €{p.dinnerStd}/persona · Cena + espectáculo incluidos · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Tour en Barco Estambul desde €{p.dinnerStd} — Crucero + Cena + Show',
      description: 'Tour en barco de 3 horas: crucero por el Bósforo, cena turca completa, folklore en vivo, vistas nocturnas iluminadas. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Tour en Barco Estambul',
      subtitle: 'El tour en barco de Estambul más reservado por los viajeros — crucero por el Bósforo con cena turca, entretenimiento en vivo y vistas icónicas de la ciudad desde el agua.',
      badge: '4,8★ · TÜRSAB A-17672 · Pago a Bordo'
    },
    intro: [
      'Cuando busca "tour en barco Estambul", busca lo único que define a la ciudad desde el agua: el Bósforo. Nuestro tour en barco por el Bósforo de 3 horas le lleva junto a cada gran monumento de Estambul — Palacio de Dolmabahçe, Mezquita de Ortaköy, Puente del Bósforo, Rumeli Hisarı, Palacio de Beylerbeyi y la Torre de la Doncella — con cena turca completa y entretenimiento en vivo.',
      'A diferencia de muchos ferris turísticos de 1 hora que cubren menos del Bósforo y se saltan la cena y el entretenimiento, nuestro **tour en barco Estambul** es la experiencia nocturna completa: embarque a las 20:00 en el muelle de Kabataş, tour hasta la medianoche, 10 mezze, plato principal, postre, sema, danzas folclóricas, danza oriental y DJ. Obtiene el tour Y la salida nocturna.',
      'Ya tenga una noche en Estambul o una semana completa, este **tour en barco Estambul** cumple. 4,8★ de más de 11.317 viajeros, licencia TÜRSAB (A-17672), menú con certificación halal y pago a bordo — sin compromiso financiero hasta que esté satisfecho con la experiencia.'
    ],
    highlights: [
      { title: 'Todos los grandes monumentos del Bósforo', desc: 'Dolmabahçe, Çırağan, Mezquita de Ortaköy, Puente del Bósforo, Bebek, Rumeli Hisarı, Puente FSM, Palacio de Beylerbeyi, Üsküdar, Torre de la Doncella. Tanto la orilla europea como la asiática en un solo tour.' },
      { title: 'Cena + espectáculo incluidos', desc: 'No es solo un tour en barco — cena turca generosa completa, actuaciones de danzas folclóricas en vivo, sema, danza oriental, DJ. Lo que hace que 3 horas sean entretenidas, no solo turismo.' },
      { title: 'Salida nocturna (la mejor iluminación)', desc: 'La salida de las 21:00 capta el Bósforo iluminado en su máximo esplendor — puentes, palacios, mezquitas todos encendidos. Más dramático que los tours diurnos que muestran los mismos monumentos con luz plana.' },
      { title: 'Reserva fácil, pago fácil', desc: 'Reserve en menos de 1 minuto con el asistente de esta página. Pago a bordo — sin prepago. Traslado al hotel disponible desde +€{p.transfer}/persona. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿Cuál es el mejor tour en barco de Estambul?', a: 'El crucero con cena por el Bósforo se clasifica constantemente como #1. Cubre todos los grandes monumentos, incluye cena y entretenimiento y se realiza por la noche cuando los monumentos están iluminados. Otras opciones (ferris hop-on, barcos turísticos matutinos) cubren rutas más cortas, omiten la cena y no incluyen entretenimiento. Para una velada en Estambul, este es el tour en barco más completo.' },
      { q: '¿Cuánto dura el tour en barco de Estambul?', a: '3 horas. Embarque a partir de las 20:00 en el muelle de Kabataş, salida a las 21:00, regreso ~00:00. Cubre el Bósforo completo desde Dolmabahçe hasta Rumeli Hisarı y de vuelta. Tiempo suficiente para cena completa + espectáculo sin agotarse.' },
      { q: '¿Cuánto cuesta el tour en barco de Estambul?', a: 'Nuestro tour en barco con cena: €{p.dinnerStd}/persona (antes €{p.dinnerStdOriginal}). 0-3 años gratis, 4-8 años a mitad de precio. Pago a bordo. Alcohol y traslado al hotel son complementos opcionales.' },
      { q: '¿Desde dónde salen los tours en barco de Estambul?', a: 'Nuestro barco sale del muelle de Kabataş, en la céntrica orilla europea de Estambul, junto al Palacio de Dolmabahçe. Accesible en tranvía T1 (estación Kabataş), taxi de 15 min desde Taksim o paseo de 20 min desde Taksim. Traslado al hotel disponible desde barrios céntricos por +€{p.transfer}/persona.' },
      { q: '¿Este tour en barco es adecuado para familias con niños?', a: 'Sí — muy apto para familias. Niños de 0-3 años gratis, 4-8 años con 50% de descuento. Asientos interiores cubiertos, menú infantil bajo petición y entretenimiento (sema, danzas folclóricas) atractivo para los niños. Muchas familias de todo el mundo reservan este tour.' },
      { q: '¿Necesito llevar algo al tour en barco?', a: 'Pasaporte o DNI (para el registro del barco), chaqueta ligera (la cubierta puede ser fresca), calzado cómodo si piensa bailar. Smartphone para fotos. Efectivo o tarjeta para el pago a bordo (se aceptan ambos). Todo lo demás — cena, bebidas, entretenimiento — a bordo.' }
    ],
    cta: {
      primary: 'Reservar Tour en Barco · Pago a Bordo',
      secondary: '3 horas · Cena + espectáculo · Desde €{p.dinnerStd}/persona · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Viaje Bósforo desde €{p.dinnerStd} — Crucero Cena Estambul + Show',
      description: 'Viaje de 3 horas por el Bósforo: cena turca, folklore en vivo, vistas nocturnas iluminadas. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Excursión por el Bósforo',
      subtitle: 'La excursión por el Bósforo más recomendada por los viajeros — un crucero con cena de 3 horas que cubre todos los grandes monumentos de Estambul, con cena, entretenimiento y vistas nocturnas.',
      badge: 'Experiencia Completa del Bósforo · Salida Nocturna'
    },
    intro: [
      'Una **excursión por el Bósforo** puede significar un ferri turístico de 1 hora o una velada de tour completo con cena — nosotros hacemos la segunda, y la mayoría de viajeros la consideran la experiencia de mejor valor. 3 horas, €{p.dinnerStd}/persona, cena y entretenimiento incluidos. No solo pasa por los monumentos — come, ve el espectáculo y disfruta de la velada.',
      'La ruta de nuestra **excursión por el Bósforo** cubre todo lo que merece la pena ver: Palacio de Dolmabahçe (residencia del sultán otomano del siglo XIX), Mezquita de Ortaköy (una de las mezquitas más fotografiadas de Estambul), Puente del Bósforo (cambia de color por la noche), Rumeli Hisarı (construido por Fatih Sultan Mehmet en 1452), Palacio de Beylerbeyi (orilla asiática) y la Torre de la Doncella en una pequeña isla. Todo explicado por una tripulación angloparlante.',
      'Ya tenga 24 horas o una semana en Estambul, esta es la **excursión por el Bósforo** que le ofrece más en una sola velada. Calificación 4,8★ de más de 11.317 viajeros, licencia TÜRSAB A-17672, menú apto para halal, pago a bordo — sin riesgo de prepago.'
    ],
    highlights: [
      { title: 'Bósforo completo de una vez', desc: 'Orilla europea (Dolmabahçe, Ortaköy, Rumeli Hisarı), orilla asiática (Beylerbeyi, Üsküdar), ambos puentes del Bósforo, Torre de la Doncella. Todos los grandes monumentos visibles en 3 horas.' },
      { title: 'Cena + entretenimiento incluidos', desc: 'No es solo un ferri turístico — cena turca completa con mezze, plato principal, postre. Espectáculo de danzas folclóricas en vivo, sema, oriental, DJ. Valor de entretenimiento más allá de las vistas.' },
      { title: 'Noche = mejor iluminación', desc: 'Las excursiones diurnas por el Bósforo le muestran los monumentos con luz plana. Las excursiones nocturnas los captan todos iluminados: palacios brillando, puentes coloridos, mezquitas reflejadas en el agua oscura. Mejores fotos, más dramático.' },
      { title: 'Desde €{p.dinnerStd} — pago a bordo', desc: 'No se requiere prepago. Pago a bordo (efectivo o tarjeta). Cancelación gratuita hasta 2 horas antes de la salida. 0-3 años gratis, 4-8 años a mitad de precio. Precios transparentes.' }
    ],
    faq: [
      { q: '¿Cuáles son las mejores excursiones por el Bósforo en Estambul?', a: 'El crucero con cena nocturno se clasifica constantemente en la cima. Las opciones diurnas (ferris de anillo de 1 hora, barcos turísticos de 2 horas) muestran menos y no incluyen cena. Por valor, es difícil superar un tour de 3 horas con cena, espectáculo y retorno central. El coste de €{p.dinnerStd} de nuestro tour elimina la necesidad de una velada separada de cena + entretenimiento.' },
      { q: '¿Cuánto dura una excursión por el Bósforo?', a: 'Nuestra excursión por el Bósforo dura 3 horas en total (salida 21:00, regreso 00:00). Hay opciones más cortas (ferris turísticos de 1 hora, tours de 90 minutos) pero omiten cena y entretenimiento. Para la experiencia nocturna completa, 3 horas es lo ideal — suficiente para verlo todo, no agotador.' },
      { q: '¿Vale la pena la excursión por el Bósforo?', a: 'Sí — prácticamente todas las guías de viaje de Estambul listan el "tour por el Bósforo" entre las 5 cosas imprescindibles. La ciudad se construyó alrededor de este estrecho; si no ha visto el Bósforo desde el agua, no ha visto realmente Estambul. Nuestro tour nocturno específico añade cena y entretenimiento, convirtiéndolo en una velada completa en lugar de solo turismo.' },
      { q: '¿Qué debo llevar a la excursión por el Bósforo?', a: 'Pasaporte o DNI (registro del barco), chaqueta ligera (las noches son frescas en cubierta), smartphone/cámara, calzado cómodo para la pista de baile. Efectivo o tarjeta para el pago. Todo lo demás a bordo. Traslado al hotel disponible por +€{p.transfer}/persona si no quiere usar transporte público.' },
      { q: '¿La excursión por el Bósforo es adecuada para niños?', a: 'Sí — muy apta para niños. Niños de 0-3 años gratis (traslado incluido), 4-8 años con 50% de descuento. Asientos interiores cubiertos, menú infantil bajo petición y el entretenimiento es amable y atractivo. Muchas familias lo reservan como momento destacado de su viaje a Estambul.' },
      { q: '¿Cuáles son las paradas de la excursión por el Bósforo?', a: 'Es un tour continuo — no paramos en los monumentos (sin desembarcos). El barco pasa cerca de cada monumento, la tripulación explica lo que está viendo, y usted se queda cómodo en su mesa o sale a cubierta exterior para fotos. Sin colas, sin caminar — solo 3 horas fluidas en el agua.' }
    ],
    cta: {
      primary: 'Reservar Excursión por el Bósforo · Pago a Bordo',
      secondary: '3 horas · Cena + espectáculo · Cancelación gratuita 2 horas antes · Licencia TÜRSAB',
      tertiary: 'Comprobar Disponibilidad'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Tickets Crucero Bósforo desde €{p.dinnerStd} — Pago a Bordo, Sin Anticipo',
      description: 'Tickets directos del crucero por el Bósforo desde €{p.dinnerStd}/persona. Sin anticipo, pago a bordo.'
    },
    hero: {
      h1: 'Entradas para el Crucero por el Bósforo',
      subtitle: 'Sáltese las comisiones de intermediarios — compre sus entradas para el crucero por el Bósforo directamente con nosotros. Sin prepago, pago a bordo, cancelación gratuita hasta 2 horas antes de la salida.',
      badge: 'Reserva Directa · Sin Prepago · 40% DE DESCUENTO'
    },
    intro: [
      '¿Busca **entradas para el crucero por el Bósforo**? Cómprelas directamente. Nuestra entrada es €{p.dinnerStd}/persona — 40% de descuento sobre el precio normal (€{p.dinnerStdOriginal}). Los sitios de reserva de terceros suelen añadir una comisión del 20-40%. Al reservar directamente ahorra — y aun así puede pagar a bordo.',
      'Nuestro proceso de **entradas para el crucero por el Bósforo**: rellene el asistente de esta página en menos de 1 minuto (fecha, número de huéspedes, paquete, contacto), confirmamos al instante por WhatsApp / Telegram, aparece a las 20:00 en el muelle de Kabataş, paga a bordo, disfruta del crucero con cena de 3 horas. Sin entrada física para imprimir, sin cupón por correo — nuestra confirmación es su entrada.',
      'Ya sea reservando el crucero con cena de esta noche o reservando una fecha concreta de la próxima semana, las **entradas para el crucero por el Bósforo directamente** son la vía más rápida. Calificación 4,8★, licencia TÜRSAB (A-17672), menú con certificación halal y admite complementos de traslado al hotel y alcohol.'
    ],
    highlights: [
      { title: 'Reserva directa — sin comisión de intermediario', desc: '€{p.dinnerStd}/persona, un precio transparente. Los sitios de terceros cobran €30-80+ por el mismo tour. Reservando directamente con nosotros ahorra. Sin cargos ocultos, sin markup de comisión.' },
      { title: 'Pago a bordo — sin prepago', desc: 'Reserve su lugar ahora, pague al embarcar. Se acepta efectivo o tarjeta. Gratis si cancela con 2+ horas de antelación a la salida. Riesgo financiero cero al reservar con antelación.' },
      { title: 'Confirmación en menos de 1 minuto', desc: 'Rellene el asistente → confirmamos por WhatsApp / Telegram. Sin cupón PDF por correo para imprimir. Nuestro mensaje es su entrada. Venga al muelle a las 20:00.' },
      { title: '40% DE DESCUENTO precio de lanzamiento actual', desc: 'Antes €{p.dinnerStdOriginal}, ahora €{p.dinnerStd}. 40% de descuento porque reserva directamente. No es una cifra por tiempo limitado — es nuestro precio estándar de reserva directa.' }
    ],
    faq: [
      { q: '¿Cuánto cuestan las entradas para el crucero por el Bósforo?', a: '€{p.dinnerStd}/persona (normal €{p.dinnerStdOriginal}). Incluye tour de 3 horas, cena turca generosa, espectáculo de danzas folclóricas en vivo, refrescos ilimitados. 0-3 años gratis, 4-8 años con 50% de descuento. Pago a bordo — sin prepago.' },
      { q: '¿Dónde puedo comprar entradas para el crucero por el Bósforo?', a: 'Directamente en esta página — rellene el asistente de reserva, confirmamos al instante por WhatsApp / Telegram. Pago a bordo. Las plataformas de terceros (Viator, GetYourGuide, Klook) también venden entradas pero suelen cobrar €30-80+ — es el markup del intermediario. La directa es la más barata y rápida.' },
      { q: '¿Necesito imprimir la entrada del crucero por el Bósforo?', a: 'No — no se necesita entrada física ni cupón. Tras la reserva, le enviamos una confirmación por WhatsApp (o Telegram) con punto de encuentro, hora y nombre de reserva. Solo muestre su teléfono en el muelle. Eso es todo.' },
      { q: '¿Puedo cancelar o reembolsar mi entrada del crucero por el Bósforo?', a: 'Sí — cancelación gratuita hasta 2 horas antes de la salida. Solo escríbanos por WhatsApp. Como aún no ha pagado (pago a bordo), no se necesita reembolso — simplemente no viene, sin cargo. Mucho más flexible que las entradas prepagadas de terceros.' },
      { q: '¿Hay entradas para el crucero por el Bósforo disponibles el mismo día?', a: 'Frecuentemente sí, especialmente entre semana. Los fines de semana y festivos se llenan más rápido. Compruebe la disponibilidad a través del asistente de reservas — se actualiza en tiempo real. La reserva el mismo día suele ser posible hasta pocas horas antes de la salida de las 21:00. Para solicitudes urgentes, WhatsApp.' },
      { q: '¿Las entradas infantiles para el crucero por el Bósforo son gratis?', a: 'Los niños **0-3 años totalmente gratis** (sin cargos, sin costes ocultos, traslado incluido). **4-8 años con 50% de descuento** (€{p.dinnerStd}/2 = €12.15). **9+ años precio completo de adulto.** Precios con tope y transparentes — sin trucos de "recargo por bebé".' }
    ],
    cta: {
      primary: 'Comprar Entradas · Pago a Bordo',
      secondary: 'Reserva directa · Sin prepago · Cancelación gratuita 2 horas antes',
      tertiary: 'Comprobar Disponibilidad'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bósforo Última Hora desde €{p.dinnerStd} — Reserva Hoy, Paga a Bordo',
      description: 'Reserva del crucero Bósforo el mismo día. Confirmación por WhatsApp en minutos. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    hero: {
      h1: 'Crucero por el Bósforo Última Hora',
      subtitle: 'Disponibilidad para esta noche, confirmada en minutos. Sin prepago, sin cupón preimprimido — solo venga al muelle y disfrute de la velada.',
      badge: 'Reserva Mismo Día · Confirmada en Minutos · Pago a Bordo'
    },
    intro: [
      '¿Aterrizó esta tarde en Estambul y quiere una gran noche esta misma velada? El **crucero por el Bósforo de última hora** funciona. Reservamos específicamente asientos para reservas del mismo día porque sabemos que muchos viajeros deciden por la mañana. Rellene el asistente aquí, confirmamos en minutos por WhatsApp, aparece a las 20:00 en el muelle de Kabataş, paga a bordo, disfruta.',
      'Nuestro **crucero por el Bósforo de última hora** tiene el mismo programa nocturno que las reservas anticipadas: 3 horas en el agua (21:00-00:00), cena turca generosa, espectáculo de danzas folclóricas en vivo, sema, danza oriental, DJ. Palacio de Dolmabahçe, Mezquita de Ortaköy, Puente del Bósforo iluminados — las mismas vistas icónicas. Mismo precio de €{p.dinnerStd}/persona.',
      'La cancelación el mismo día es gratuita hasta 2 horas antes de la salida, porque **pagar a bordo** significa que aún no se ha comprometido a nada. Si reservó a las 14:00 y sus planes cambian para las 19:00, solo escríbanos por WhatsApp — sin reembolso, sin problema. Esta es la flexibilidad del **tour por Estambul de última hora** que los viajeros valoran.'
    ],
    highlights: [
      { title: 'Asientos para esta noche aún disponibles', desc: 'Reservamos 5-10 asientos diarios para reservas del mismo día. Compruebe el asistente arriba — disponibilidad en tiempo real. Si el tour de hoy está lleno, el de mañana suele estar libre.' },
      { title: 'Confirmación en menos de 5 minutos', desc: 'Rellene el asistente → mensaje de confirmación por WhatsApp/Telegram → listo. Sin cupón por correo que esperar, sin código QR que imprimir. Nuestro mensaje es su entrada.' },
      { title: 'Cero pago hasta que embarque', desc: 'Pago a bordo, efectivo o tarjeta. Si no viene (cambio de planes, enfermedad, tiempo), sin cargo. Cancelación gratuita hasta 2 horas antes de la salida. Realmente apto para última hora.' },
      { title: 'Traslado al hotel el mismo día frecuentemente disponible', desc: 'El traslado al hotel normalmente requiere 24 horas de aviso, pero para reservas del mismo día entre 14:00-18:30 normalmente podemos organizar la recogida por +€{p.transfer}/persona. Para solicitudes urgentes de traslado, WhatsApp.' }
    ],
    faq: [
      { q: '¿Realmente puedo reservar un crucero por el Bósforo para esta noche?', a: 'Sí — frecuentemente. Reservamos asientos para reservas del mismo día. Compruebe el asistente arriba para la disponibilidad de esta noche. Si hay asientos, puede reservar hasta las 20:00. Los fines de semana están más ajustados — reserve más temprano del día si es posible.' },
      { q: '¿Con cuánta antelación puedo reservar?', a: 'Para el barco de las 21:00, las reservas permanecen abiertas hasta las 20:00. Después de las 20:00, escríbanos directamente por WhatsApp al +90 532 244 29 22 — podemos confirmar manualmente si hay asientos.' },
      { q: '¿El crucero por el Bósforo de última hora es más caro?', a: 'No — mismo precio que la reserva anticipada: €{p.dinnerStd}/persona. No hacemos "precios dinámicos" ni prima por última hora. Mismo barco, misma cena, mismo espectáculo, mismo precio.' },
      { q: '¿Qué pasa si el tour de esta noche está totalmente lleno?', a: 'El tour de mañana suele estar libre — operamos 365 días al año, a diario. Puede reservar para mañana y aun así ser "última hora" en el sentido de que acaba de decidirlo. Los tours entre semana tienen más espacio que los de fin de semana.' },
      { q: '¿Pueden organizar un traslado al hotel de última hora?', a: 'El traslado del mismo día es posible hasta ~18:30 para el tour de las 21:00. Después de las 18:30, puede que no tengamos un conductor disponible — en ese caso, puede tomar un taxi al muelle de Kabataş (15 min desde Taksim, 10 min desde Sultanahmet, ~€10-15). Céntrico y fácil.' },
      { q: '¿Qué pasa si ya estoy en Kabataş y quiero subir?', a: 'Si está en el muelle y hay asientos libres, puede subir andando. Escríbanos por WhatsApp o pregunte a la tripulación — le añadiremos si hay espacio. Mismo precio de pago a bordo. En términos de tour se llama "walk-on" — funciona aquí.' }
    ],
    cta: {
      primary: 'Reservar para Esta Noche · Pago a Bordo',
      secondary: 'Reserva mismo día · Confirmada en minutos · Cancelación gratuita 2 horas antes',
      tertiary: 'WhatsApp para Reservas Urgentes'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Precio Crucero Estambul desde €{p.dinnerStd} — Tarifas Transparentes, Sin Sorpresas',
      description: 'Precios crucero Bósforo Estambul: crucero con cena €{p.dinnerStd}/persona. Niños 0-3 gratis, 4-8 mitad. Add-ons transparentes.'
    },
    hero: {
      h1: 'Precio del Crucero Estambul',
      subtitle: 'Precios transparentes, sin cargos ocultos. Un solo paquete, €{p.dinnerStd}/persona — y paga a bordo, no ahora.',
      badge: 'Transparente · 40% DE DESCUENTO Directo · 0-3 Años Gratis'
    },
    intro: [
      'Los **precios del crucero de Estambul** varían mucho — desde ferris económicos de €15 que omiten la cena hasta yates estilo resort de €150+. Nuestro precio está en el medio y ofrece el mejor valor: un solo paquete a €{p.dinnerStd}/persona para el tour con cena completo de 3 horas con espectáculo. Sin cargos ocultos, sin recargos sorpresa.',
      'Un desglose detallado del **precio del crucero de Estambul**, porque la transparencia importa:\n\n- **Crucero con Cena**: €{p.dinnerStd}/persona (antes €{p.dinnerStdOriginal}, 40% de descuento). Incluye tour de 3 horas, 10 mezze, plato principal, postre, refrescos ilimitados, espectáculo en vivo.\n- **0-3 años**: Gratis. 4-8 años: 50% de descuento. 9+ años: precio completo.\n\nComplementos (opcionales):\n- 2 copas de alcohol: +€{p.alcohol2}/persona\n- Traslado al hotel ida y vuelta: +€{p.transfer}/persona\n- Decoración de mesa romántica: +€{p.romantic}/mesa',
      'Y lo importante: **pago a bordo**. No se compromete con ni un céntimo hasta estar a bordo. Cancelación gratuita hasta 2 horas antes de la salida. Sin compromiso, sin riesgo — los **precios del crucero de Estambul** más favorables al consumidor que encontrará.'
    ],
    highlights: [
      { title: 'Crucero con Cena: €{p.dinnerStd} (antes €{p.dinnerStdOriginal})', desc: '40% de descuento sobre el precio normal. Tour de 3 horas, cena turca completa, espectáculo en vivo, refrescos ilimitados. Un solo paquete — cubre todo lo que necesita para una gran velada.' },
      { title: 'Pago a bordo — €0 por adelantado', desc: 'Reserve ahora y pague al embarcar (efectivo o tarjeta). Cancelación gratuita hasta 2 horas antes de la salida. Cero riesgo financiero al reservar con antelación.' },
      { title: 'Precio infantil: 0-3 gratis, 4-8 a mitad de precio', desc: '0-3 totalmente gratis (sin cargos). 4-8 al 50% del precio del adulto. 9+ precio completo de adulto. Transparente, sin trucos de precios familiares. Traslado también gratis para 0-3.' },
      { title: 'Complementos — solo cuando los quiera', desc: 'Alcohol (2 copas): +€{p.alcohol2}/persona. Traslado: €{p.transfer}/persona. Mesa romántica: €{p.romantic}/mesa. Todos opcionales, no empaquetados. Elija solo lo que necesite.' }
    ],
    faq: [
      { q: '¿Cuánto cuesta un crucero de Estambul?', a: 'Crucero con Cena: €{p.dinnerStd}/persona (normal €{p.dinnerStdOriginal}, 40% de descuento). 0-3 años gratis, 4-8 años a mitad de precio. Pago a bordo — sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' },
      { q: '¿Hay cargos ocultos en el precio del crucero de Estambul?', a: 'No. El precio incluye: tour de 3 horas, cena completa (mezze, entrante, plato principal, postre), refrescos ilimitados, espectáculo en vivo, impuestos. Los complementos opcionales (alcohol, traslado, mesa romántica) tienen precio separado y transparente — solo paga por lo que añada. Sin "tasas de servicio", "tasas portuarias", recargos sorpresa.' },
      { q: '¿Por qué el precio del crucero de Estambul tiene 40% de descuento — es un truco?', a: 'Sin trucos. El precio normal de €{p.dinnerStdOriginal} es lo que cobran los sitios de reserva de terceros (Viator, GetYourGuide, Klook) — con sus comisiones. Reserve directamente y obtiene €{p.dinnerStd}. Esa es la diferencia del 40%. Sin trucos de tiempo limitado ni precios dinámicos.' },
      { q: '¿Cómo se compara el precio del crucero de Estambul con otras opciones?', a: 'Ferris de anillo: €5-10, 1 hora, sin cena, sin entretenimiento, solo turismo. Cruceros con cena económicos: €20-30, abarrotados, cena media, espectáculo corto. Nuestro crucero con cena (€{p.dinnerStd}): 3 horas, cena completa, espectáculo completo, mesa privada, licencia TÜRSAB. Yates resort: €100-150+, excesivo para viajeros solos/parejas.' },
      { q: '¿Necesito pagar por adelantado el precio del crucero de Estambul?', a: 'No — **pago a bordo**. Reserva ahora (asistente de 1 minuto), confirmamos por WhatsApp, viene a las 20:00 y paga a bordo (efectivo o tarjeta). Cancelación gratuita hasta 2 horas antes. Cero compromiso financiero hasta estar satisfecho.' },
      { q: '¿Hay descuento de grupo en el precio del crucero de Estambul?', a: 'Para grupos de más de 10 podemos ofrecer un 5-10% de descuento — escríbanos por WhatsApp con el tamaño de su grupo. Para más de 25, considere un tour privado (todo el barco para su grupo, menú personalizado). Para 2-9 personas, se aplican las tarifas estándar — ya con 40% de descuento sobre el precio normal.' }
    ],
    cta: {
      primary: 'Reservar · Pago a Bordo',
      secondary: 'Desde €{p.dinnerStd}/persona · 0-3 años gratis · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Sightseeing Bósforo desde €{p.dinnerStd} — Monumentos Estambul Desde el Agua',
      description: 'Crucero sightseeing por el Bósforo: Dolmabahçe, Ortaköy, Puente del Bósforo, Rumeli, Beylerbeyi, Torre de la Doncella. Tour de 3hrs con cena.'
    },
    hero: {
      h1: 'Turismo por el Bósforo',
      subtitle: 'Todos los monumentos icónicos de Estambul — desde el agua, por la noche, con cena. Un solo tour de 3 horas cubre Dolmabahçe, Mezquita de Ortaköy, Puente del Bósforo, Rumeli Hisarı y más.',
      badge: 'Más de 10 Monumentos · Orillas Europea y Asiática · 3 Horas'
    },
    intro: [
      'El **turismo por el Bósforo** desde el agua supera cualquier tour en autobús. El Bósforo es la vía fluvial más histórica de la ciudad — sultanes otomanos, emperadores bizantinos, comerciantes griegos y buques de guerra rusos, todos pasaron. Hoy, nuestro tour de 3 horas, con comentarios de nuestra tripulación angloparlante, pasa por cada gran monumento de Estambul que define el horizonte.',
      'La ruta de nuestro **tour turístico por el Bósforo** (salida nocturna, 21:00-00:00):\n\n1. **Palacio de Dolmabahçe** — residencia otomana del siglo XIX, iluminada por la noche\n2. **Palacio de Çırağan** — ahora hotel de lujo, historia real\n3. **Mezquita de Ortaköy** — una de las mezquitas más fotografiadas de Estambul, junto al agua\n4. **Puente del Bósforo** — cambia entre azul, morado, dorado por la noche\n5. **Bebek** — barrio elegante de la orilla europea\n6. **Rumeli Hisarı** — construido por Fatih Sultan Mehmet en 1452 antes de la conquista de Constantinopla\n7. **Puente Fatih Sultan Mehmet** — segundo puente del Bósforo, arco dramático\n8. **Palacio de Beylerbeyi** — orilla asiática, residencia de verano otomana\n9. **Üsküdar** — orilla asiática de Estambul, barrio tradicional\n10. **Torre de la Doncella** — pequeña torre isla, uno de los símbolos más románticos de Estambul',
      'La cena y el entretenimiento están incluidos — no aparte — por lo que el **turismo por el Bósforo** se convierte en una velada completa. Cena turca generosa, espectáculo de danzas folclóricas en vivo, sema, danza oriental, DJ. Calificación 4,8★ de más de 11.317 viajeros, licencia TÜRSAB A-17672.'
    ],
    highlights: [
      { title: 'Más de 10 grandes monumentos de Estambul', desc: 'Palacio de Dolmabahçe, Palacio de Çırağan, Mezquita de Ortaköy, Puente del Bósforo, Rumeli Hisarı, Puente FSM, Palacio de Beylerbeyi, Üsküdar, Torre de la Doncella. Todos los monumentos esenciales de Estambul en un solo tour.' },
      { title: 'Orillas europea y asiática', desc: 'Orilla europea a la ida (Dolmabahçe → Rumeli Hisarı), orilla asiática a la vuelta (Beylerbeyi → Üsküdar). Dos continentes en un tour de 3 horas — solo Estambul le permite hacerlo.' },
      { title: 'Turismo nocturno = vistas iluminadas', desc: 'El turismo diurno muestra los monumentos con luz plana. El tour nocturno los capta en su máximo dramatismo: palacios brillando en amarillo, puentes coloridos, mezquitas reflejadas en el agua oscura. Mejor para fotos, más memorable.' },
      { title: 'Cena + espectáculo incluidos', desc: 'Turismo + cena + entretenimiento en un paquete. No hay que planear cena separada después del tour. Desde €{p.dinnerStd}/persona, pago a bordo, 3 horas en total.' }
    ],
    faq: [
      { q: '¿Qué monumentos del Bósforo veré?', a: 'En orden: Palacio de Dolmabahçe, Palacio de Çırağan, Mezquita de Ortaköy, Puente del Bósforo, barrio de Bebek, Rumeli Hisarı, Puente Fatih Sultan Mehmet, Anadolu Hisarı, Palacio de Beylerbeyi, Kuzguncuk, Üsküdar y Torre de la Doncella (visible desde la distancia). Más de 10 grandes monumentos en una sola ruta de 3 horas.' },
      { q: '¿El turismo por el Bósforo es mejor de día o de noche?', a: 'Experiencias diferentes. Día: vista más clara de los detalles arquitectónicos, más brillante para fotos. Noche: iluminación dramática, ambiente misterioso, menos barcos en el agua. La mayoría de viajeros prefieren el tour nocturno porque los monumentos parecen más mágicos — y la cena + espectáculo lo convierten en una velada completa.' },
      { q: '¿El barco para en los monumentos para fotos?', a: 'Es un tour continuo — sin paradas (sin desembarcos). El barco pasa cerca de cada monumento, la tripulación explica lo que está viendo, y puede salir a cubierta exterior para fotos. Sin colas, sin caminar, sin estrés de horarios — solo 3 horas fluidas de oportunidades fotográficas.' },
      { q: '¿La tripulación ofrece comentarios durante el turismo?', a: 'Sí — la tripulación angloparlante ofrece comentarios breves (historia, arquitectura, datos curiosos) al pasar por cada gran monumento. No es una clase guiada, más bien una explicación amistosa mientras come. Para una historia más profunda, recomendamos combinarlo con un tour a pie por Estambul durante el día.' },
      { q: '¿En qué se diferencia el turismo por el Bósforo de los ferris hop-on?', a: 'Ferris hop-on (barcos de anillo Şehir Hatları): €5-10, 1-2 horas, básico, sin cena, abarrotado. Nuestro tour: €{p.dinnerStd}, 3 horas, cena completa, espectáculo en vivo, mesa privada, comentarios en inglés. El tour nocturno es mejor para turismo cómodo y serio. El ferri de anillo funciona para una travesía económica rápida.' },
      { q: '¿Puedo fotografiar los monumentos desde el barco?', a: 'Sí — absolutamente. La cubierta exterior tiene excelentes puntos para fotografía. Los monumentos pasan a 100-200 metros del barco. Las fotos de smartphone salen geniales; los usuarios de DSLR/sin espejo pueden obtener tomas impresionantes especialmente durante la transición de hora dorada a hora azul del atardecer temprano.' }
    ],
    cta: {
      primary: 'Reservar Tour Turístico · Pago a Bordo',
      secondary: 'Más de 10 monumentos · Cena + espectáculo · Cancelación gratuita 2 horas antes',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  }

};
