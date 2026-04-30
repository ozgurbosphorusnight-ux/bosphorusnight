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
      description: 'Crucero con cena de 3 horas por el Bósforo: menú turco multiplato y espectáculo folklórico en vivo. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
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
      { title: 'Desde €{p.dinnerStd}/persona — pago a bordo', desc: 'Crucero con cena estándar €{p.dinnerStd} (antes €{p.dinnerStdOriginal}). Tour VIP con asientos delanteros y menú premium €{p.dinnerVip}. Sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿A qué hora comienza el crucero con cena por el Bósforo?', a: 'El embarque comienza a las 20:00 en el muelle de Kabataş. El barco zarpa a las 21:00 y regresa aproximadamente a las 00:00. Recomendamos llegar 15-20 minutos antes para acomodarse.' },
      { q: '¿Cuánto cuesta el crucero con cena por el Bósforo?', a: 'Tour estándar €{p.dinnerStd}/persona (precio normal €{p.dinnerStdOriginal}). Tour VIP con asientos delanteros y menú premium €{p.dinnerVip}/persona. Niños de 0-3 años gratis, 4-8 años con 50% de descuento. El pago se realiza a bordo — sin prepago.' },
      { q: '¿El alcohol está incluido en el crucero con cena?', a: 'Los refrescos ilimitados (agua, cola, zumo) están incluidos en el precio. Los paquetes de alcohol son opcionales: 2 copas +€{p.alcohol2}/persona o alcohol local ilimitado (vino, cerveza, rakı, vodka, ginebra) +€{p.unlimited}/persona. Las bebidas importadas se tarifan aparte a bordo.' },
      { q: '¿Hay traslado desde el hotel?', a: 'Sí — el servicio de recogida y regreso cuesta +€{p.transfer}/persona. Zonas de servicio: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane y Sütlüce. Puede seleccionarlo en el asistente de reservas.' },
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
      description: 'Crucero con cena por el Bósforo apto para familias. Niños 0-3 gratis, 4-8 mitad de precio. Salón interior seguro, menú infantil. Cancelación gratuita, pago a bordo.'
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
      description: 'Crucero romántico por el Bósforo: mesa a la luz de velas, rosas, cena multiplato bajo puentes iluminados. Desde €{p.dinnerStd}/persona. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Crucero Romántico por el Bósforo',
      subtitle: 'Cena a la luz de las velas, mesa adornada con rosas, puentes iluminados y un momento especial para compartir solo los dos bajo el cielo nocturno más icónico de Estambul.',
      badge: 'Aniversario · Luna de Miel · Noche Especial'
    },
    intro: [
      'El **crucero romántico por el Bósforo** es la velada más icónica de Estambul para parejas. Mientras el sol se pone tras el Palacio de Dolmabahçe y el Puente del Bósforo se ilumina con sus colores, usted y su pareja comparten un generoso banquete turco en una mesa privada — con velas, flores frescas y violín en vivo deslizándose por la cubierta.',
      'Nuestra decoración de mesa romántica (+€{p.romantic}/mesa) convierte cualquier lugar en un momento especial: rosas rojas, velas encendidas, una nota de bienvenida escrita a mano. Añada el paquete de alcohol ilimitado para brindar con vino bajo las estrellas (+€{p.unlimited}/persona) o manténgalo sencillo con los refrescos incluidos. En cualquier caso, la tripulación se encarga discretamente del resto.',
      'Ya sea que esté celebrando un aniversario, planeando una sorpresa para su pareja o simplemente quiera vivir una noche inolvidable en la ciudad más romántica de Europa — este es el tour favorito de las parejas en Estambul. Calificación 4,8★, licencia TÜRSAB y — lo más importante — pago a bordo, por lo que solo se compromete con la velada en sí.'
    ],
    highlights: [
      { title: 'Mesa romántica a la luz de las velas', desc: 'Añada la decoración de mesa romántica por +€{p.romantic}/mesa: rosas rojas frescas, velas encendidas, pétalos de rosa sobre el mantel y tarjeta escrita a mano. Fotos incluidas.' },
      { title: 'Las mejores mesas para la transición atardecer-noche', desc: 'Las mesas junto a la ventana se reservan para parejas. Contemple la iluminación del Puente del Bósforo, el brillo de la Torre de la Doncella y la iluminación de la Mezquita de Ortaköy desde su mesa privada.' },
      { title: 'Violín en vivo y ambiente íntimo', desc: 'Durante la cena, el violín en vivo y la música turca acústica crean un ambiente lento y romántico. Después, el DJ entra en acción y las parejas bailan bajo las luces de la cubierta exterior.' },
      { title: 'Vino, champán, maridajes premium', desc: 'Añada 2 copas de alcohol (+€{p.alcohol2}/persona) o vino, cerveza y rakı locales ilimitados (+€{p.unlimited}/persona). Champán importado y maridajes premium bajo petición — pregunte al reservar.' }
    ],
    faq: [
      { q: '¿Qué hace romántico este tour?', a: 'La combinación de mesa privada, decoración a la luz de las velas (opcional +€{p.romantic}), generoso banquete turco, violín en vivo y música acústica, e iluminados puentes del Bósforo que pasan sobre su cabeza. Diseñamos la experiencia para parejas — ambiente tranquilo al principio, luego DJ enérgico y baile. Usted elige el ritmo.' },
      { q: '¿Pueden organizar una sorpresa para mi pareja — cumpleaños, aniversario, pedida de mano?', a: 'Sí — avise al reservar. Podemos coordinar una tarta de cumpleaños (gratis), una decoración especial de mesa, una tarjeta escrita a mano en su idioma o que nuestro personal lleve algo a la mesa en el momento justo. Para pedidas de mano, recomendamos escribirnos directamente por WhatsApp para planificarlo de forma discreta.' },
      { q: '¿Cuánto cuesta el tour romántico para 2 personas?', a: '2 personas Estándar: 2 × €{p.dinnerStd} = €48. Añada la decoración romántica +€{p.romantic} = €63. 2 personas VIP: 2 × €{p.dinnerVip} = €110 + romántico €{p.romantic} = €125. Sin prepago — pago a bordo. Alcohol ilimitado para 2: 2 × €{p.unlimited} = €60 adicionales.' },
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
      description: 'Crucero con cena de 3 horas por el Bósforo: espectáculo folklórico en vivo, puentes iluminados, vistas panorámicas nocturnas. Menú halal disponible. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Crucero Halal por el Bósforo en Estambul',
      subtitle: 'Menú con certificación 100% halal, alcohol siempre opcional, entretenimiento apto para familias y un ambiente respetuoso para viajeros musulmanes — la velada del Bósforo, bien hecha.',
      badge: '100% Halal · Apto para Familias · Propietario Musulmán'
    },
    intro: [
      'El **crucero halal por el Bósforo** es el tour con cena más respetuoso de Estambul para viajeros musulmanes. Toda la carne que servimos a bordo — salmón, lubina, pollo, köfte de cordero, solomillo de ternera, entrecot — tiene **certificación halal** de proveedores autorizados. Servimos el mismo menú a todos los huéspedes; no hay una "sección halal" aparte porque todo el barco es halal por defecto.',
      'El alcohol es un **complemento opcional** — nunca se impone a los huéspedes y la distribución de mesas separa de forma natural a quienes prefieren una mesa sin alcohol. Está disponible para quienes deseen el paquete de alcohol ilimitado (+€{p.unlimited}/persona), pero los refrescos ilimitados incluidos (agua, cola, zumo) son suficientes para la mayoría de familias musulmanas. Nuestra tripulación está formada para ser respetuosa con sus preferencias, sin dar nada por supuesto.',
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
      { q: '¿Otros huéspedes beben alcohol en este tour?', a: 'Algunos huéspedes añaden el paquete de alcohol opcional (+€{p.unlimited}/persona). Las mesas están separadas de forma natural — puede solicitar una sección sin alcohol. La tripulación no trae alcohol a menos que lo pida específicamente un huésped. Los refrescos (ilimitados) están incluidos para todos.' },
      { q: '¿Este tour es adecuado para familias musulmanas con niños?', a: 'Sí — es uno de los tours más respetuosos con las familias en Estambul. El entretenimiento es modesto (danzas folclóricas, sema, música turca), los niños menores de 3 años gratis, 4-8 años con 50% de descuento. Sin ambiente de discoteca. Familias del Golfo, Indonesia, Malasia, Pakistán y Marruecos reservan este tour regularmente.' },
      { q: '¿Puedo rezar a bordo?', a: 'No hay una sala de oración específica a bordo, pero recomendamos rezar antes del embarque a las 20:00 (la oración del maghrib suele caer en esta ventana). El muelle de Kabataş tiene instalaciones de oración. Si necesita rezar durante la navegación de 21:00-00:00 (isha), hable con la tripulación — podemos organizar un rincón tranquilo en cubierta.' },
      { q: '¿Cuáles son los precios para una familia musulmana de 4 (2 adultos, 2 niños)?', a: 'Tour estándar: 2 × €{p.dinnerStd} + 2 × €12 (4-8 años a mitad de precio) = €72. Si los niños tienen menos de 3 años, gratis: 2 × €{p.dinnerStd} = €48. Añada €10 por adulto de traslado al hotel. Total: €48-92 para una familia de 4, sin prepago, pago a bordo.' },
      { q: '¿El traslado al hotel también es halal?', a: 'El traslado al hotel es solo un viaje en coche — no hay comida ni bebida, por lo que no hay preocupación halal. Nuestros conductores son profesionales, respetuosos y puntuales. Las zonas de traslado cubren Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih y otros 8 barrios céntricos donde suelen alojarse los viajeros musulmanes.' }
    ],
    cta: {
      primary: 'Reservar Tour Halal · Pago a Bordo',
      secondary: 'Cancelación gratuita 2 horas antes · Sin prepago · Certificación halal',
      tertiary: 'Disponibilidad para Esta Noche'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Crucero VIP Bósforo desde €{p.dinnerVip} — Cena Premium, Asientos VIP',
      description: 'Crucero VIP con cena en el Bósforo: mezes premium, opciones de carne, mesa frente al escenario, servicio prioritario. Antes €{p.dinnerVipOriginal}, ahora €{p.dinnerVip}.'
    },
    hero: {
      h1: 'Crucero VIP por el Bósforo',
      subtitle: 'Asientos delanteros, menú turco premium con opciones de entrecot y servicio prioritario — una velada elevada en el Bósforo para viajeros que quieren la mejor mesa del barco.',
      badge: 'El Más Popular · 40% DE DESCUENTO · Asientos Delanteros'
    },
    intro: [
      'El **crucero VIP por el Bósforo** le sitúa en los mejores lugares del barco: mesas delanteras con vista directa a la ceremonia sema, las danzas folclóricas, la danza oriental y la música en vivo. El menú premium añade solomillo de ternera y entrecot a las opciones de plato principal (frente al pollo/salmón del Estándar), además de más de 15 variedades de mezze turcos tradicionales servidos como un generoso surtido.',
      'Nuestro **crucero VIP con cena por el Bósforo** ha sido calificado como El Más Popular por nuestros huéspedes — porque a €{p.dinnerVip}/persona (antes €{p.dinnerVipOriginal}, 40% de descuento), la experiencia se acerca más a un restaurante de alta cocina que a un tour turístico. Mesa privada, servicio atento de camarero y las mismas vistas espectaculares de Dolmabahçe, la Mezquita de Ortaköy y el iluminado Puente del Bósforo.',
      'Ya sea un viajero de negocios, celebrando un hito importante o simplemente pensando "estamos en Estambul una vez — hagámoslo bien", este es el **crucero VIP por el Bósforo** que reservan los visitantes recurrentes. Licencia TÜRSAB, 4,8★ con más de 11.317 reseñas, pago a bordo y cancelación gratuita hasta 2 horas antes de la salida.'
    ],
    highlights: [
      { title: 'Mesa privada delantera', desc: 'Asientos reservados directamente frente al escenario — la mejor vista de la ceremonia sema, las danzas folclóricas y la danza oriental. Su mesa, no compartida. A los fotógrafos les encantan estos asientos.' },
      { title: 'Más de 15 mezze + platos principales premium', desc: 'Más de 15 variedades de mezze turcos servidos como surtido tradicional. Las opciones de plato principal incluyen solomillo de ternera y entrecot (en Estándar solo pollo/salmón). Mismo postre y refrescos ilimitados.' },
      { title: 'Servicio prioritario de camarero', desc: 'Un camarero dedicado atiende primero su mesa — rellenando, guiando el menú, coordinando los complementos de alcohol, solicitudes especiales. No compite por la atención en una sala llena.' },
      { title: '40% DE DESCUENTO — antes €{p.dinnerVipOriginal}, ahora €{p.dinnerVip}', desc: 'Precio normal €{p.dinnerVipOriginal}/persona. Precio de lanzamiento actual €{p.dinnerVip}/persona — 40% de descuento. Pago a bordo, sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿Cuál es la diferencia entre el VIP y el Estándar del crucero por el Bósforo?', a: 'VIP incluye: (1) asientos delanteros con la mejor vista, (2) más de 15 mezze frente a los 10 del Estándar, (3) solomillo de ternera + entrecot añadidos a las opciones de plato principal, (4) servicio prioritario de camarero. Mismo tour de 3 horas, mismo entretenimiento, misma ruta. €{p.dinnerVip} vs €{p.dinnerStd}.' },
      { q: '¿El precio VIP de €{p.dinnerVip} es realmente un 40% de descuento?', a: 'Sí — el precio normal es €{p.dinnerVipOriginal}/persona (compruébelo en cualquier sitio de reservas). Aplicamos €{p.dinnerVip} como precio de reserva directa, eliminando las comisiones de intermediarios. Obtiene VIP por menos de lo que cobran la mayoría de sitios por Estándar.' },
      { q: '¿El alcohol está incluido en el tour VIP?', a: 'No — el alcohol es un complemento aparte (igual que en el Estándar). 2 copas: +€{p.alcohol2}/persona. Alcohol local ilimitado (vino, cerveza, rakı, vodka, ginebra): +€{p.unlimited}/persona. Las bebidas premium importadas se tarifan aparte. Los refrescos ilimitados están incluidos y son gratuitos.' },
      { q: '¿Puedo mejorar a VIP después de embarcar en el Estándar?', a: 'Depende de la disponibilidad — si hay mesas VIP libres, sí. Paga la diferencia (€{p.dinnerVip} - €{p.dinnerStd} = €31) a bordo. Pero recomendamos reservar VIP con antelación: los mejores asientos delanteros van a las reservas previas.' },
      { q: '¿Cómo reservo el crucero VIP por el Bósforo?', a: 'Utilice el asistente de reservas en esta página — seleccione "VIP" en el Paso 1, elija su fecha, introduzca el número de huéspedes y luego los datos de contacto. Su solicitud llega por WhatsApp / Telegram / WeChat y confirmamos de inmediato. Paga a bordo, no ahora.' },
      { q: '¿El tour VIP es adecuado para una cena de negocios con clientes?', a: 'Sí — el VIP es la opción más habitual para cenas de negocios en Estambul. Mesa privada, suficientemente tranquila para conversar, menú y vistas impresionantes. Muchos huéspedes reservan VIP + alcohol ilimitado para agasajar a clientes. Certificación halal (bueno para viajeros de negocios del Golfo). Avise al reservar y le asignaremos una mesa VIP más tranquila al fondo.' }
    ],
    cta: {
      primary: 'Reservar VIP · Pago a Bordo',
      secondary: 'Antes €{p.dinnerVipOriginal}, ahora €{p.dinnerVip} · Cancelación gratuita 2 horas antes',
      tertiary: 'Ver Opción Estándar (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Crucero Privado Bósforo — Alquiler de Barco en Estambul (25+ invitados)',
      description: 'Crucero privado por el Bósforo para grupos, bodas, eventos corporativos. Barco exclusivo, menú a medida, duración flexible. Cancelación gratuita. WhatsApp para presupuesto.'
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
      { q: '¿Cuánto cuesta un crucero privado por el Bósforo?', a: 'Para grupos de más de 25, suele ser €{p.dinnerStd}-€{p.dinnerVip}/persona + tarifa de alquiler del barco según tamaño del grupo, fecha y duración. Escríbanos por WhatsApp con el tamaño de su grupo, fecha y requisitos — cotizamos en menos de 1 hora. La mayoría de eventos caen en el rango total de €2.000-€6.000.' },
      { q: '¿Cuál es el tamaño mínimo de grupo para un crucero privado por el Bósforo?', a: 'Técnicamente, 25 huéspedes hacen económicamente viable el tour privado. Los grupos más pequeños (10-24) pueden alquilar en privado, pero pagan una tarifa mínima equivalente a ~25 personas. Para grupos realmente pequeños (2-10), considere el tour Estándar o VIP normal — su mesa ya es privada, solo se comparte el barco.' },
      { q: '¿Puedo celebrar una boda en el crucero por el Bósforo?', a: 'Sí — organizamos entre 10 y 15 banquetes de boda al año. Capacidad de hasta 80 para cena sentada, hasta 100 para estilo cóctel. Coordinamos con su fotógrafo, wedding planner, banda o chef. Servicio de tarta personalizado, pista de primer baile, copas de champán pueden organizarse. Escriba por WhatsApp para precios de boda.' },
      { q: '¿Qué pasa con los eventos corporativos y cenas de equipo?', a: 'Los tours privados corporativos son nuestras reservas más habituales. Cena de empresa, agasajo a clientes, lanzamiento de producto, celebración de equipo — todo funciona. Podemos proporcionar factura con desglose de IVA, organizar traslados desde hotel para su equipo y coordinar materiales de marca (detalles de mesa, señalética) bajo petición.' },
      { q: '¿Puedo llevar mi propia banda en vivo o DJ en lugar del suyo?', a: 'Sí — puede llevar su propia banda en vivo, DJ, fotógrafo. O mantener el nuestro estándar (sema, danzas folclóricas, oriental, DJ) y añadir el suyo encima. El barco cuenta con sistema de PA y pista de baile. Avise con antelación para coordinar los controles de sonido.' },
      { q: '¿Cómo solicito un presupuesto para un crucero privado por el Bósforo?', a: 'Lo más fácil: escríbanos por WhatsApp al +90 532 244 29 22 con (1) tamaño de su grupo, (2) fecha preferida, (3) motivo (boda, corporativo, cumpleaños), (4) requisitos especiales. Respondemos en 1 hora en horario laboral, 12 horas por la noche. También podemos concertar una videollamada para discutir los detalles.' }
    ],
    cta: {
      primary: 'WhatsApp para Presupuesto Privado',
      secondary: 'Menú personalizado, grupo 25-80, duración flexible · Respuesta en menos de 1 hora',
      tertiary: 'Opción Tour Estándar (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Crucero Bósforo para Parejas desde €{p.dinnerStd} — Cita Nocturna Estambul',
      description: 'Crucero con cena para parejas en el Bósforo. Mesa privada, puentes iluminados, decoración romántica opcional. Desde €{p.dinnerStd}/persona. Cancelación gratuita, pago a bordo.'
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
      { title: 'Complementos para noches especiales', desc: 'Decoración romántica (velas, rosas): +€{p.romantic}. Alcohol local ilimitado (vino, rakı): +€{p.unlimited}/persona. Traslado al hotel (ida y vuelta): +€{p.transfer}/persona. Elija lo que se adapte a su velada.' }
    ],
    faq: [
      { q: '¿Este crucero por el Bósforo es adecuado para una noche de cita normal, no para una ocasión especial?', a: 'Sí — la mayoría de nuestras parejas no celebran nada concreto, solo están teniendo una gran noche de cita. El ambiente es cálido y agradable sin ser excesivo. Puede añadir la decoración de mesa romántica (+€{p.romantic}) si quiere un plus, o simplemente disfrutar de la velada estándar.' },
      { q: '¿Cuánto cuesta el crucero por el Bósforo para 2 personas?', a: '2 personas Estándar: 2 × €{p.dinnerStd} = €48. 2 personas VIP: 2 × €{p.dinnerVip} = €110. Añada traslado al hotel para ambos: +€{p.transfer}×2 = €20. Añada alcohol ilimitado para ambos: +€{p.unlimited}×2 = €60. Sin prepago — pago a bordo.' },
      { q: '¿Pueden las parejas llevar su propio vino o champán?', a: 'No permitimos alcohol del exterior (motivos de licencia comercial). Pero tenemos vino local ilimitado (+€{p.unlimited}/persona) y podemos organizar vinos importados premium o champán a un coste — pregunte al reservar. Prosecco, Chianti y Cabernet son solicitudes premium populares.' },
      { q: '¿Es raro si no bebemos alcohol — estamos fuera de lugar?', a: 'En absoluto — muchas parejas omiten el alcohol por completo, ya sea por motivos halal o simplemente por preferencia. Los refrescos ilimitados (agua, zumo, cola) están incluidos. Si su mesa no tiene alcohol, nadie lo notará. Muchas parejas musulmanas de Arabia Saudí, Irán e Indonesia reservan este tour.' },
      { q: '¿Cuál es el mejor momento para el crucero por el Bósforo para parejas — atardecer o noche?', a: 'La noche (salida 21:00) es la más icónica — puentes iluminados, reflejos en el agua, palacios iluminados. El atardecer (salida 17:30) es más temprano y con belleza de hora dorada, pero el crucero con cena es específicamente a las 21:00. Si quiere ambos, muchas parejas reservan el tour de atardecer y el de noche en días diferentes.' },
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
      title: 'Crucero Atardecer Bósforo desde €35 — Hora Dorada + Cena',
      description: 'Crucero al atardecer por el Bósforo desde Kabataş, salida 17:30. Palacios en luz dorada, cena hasta la noche iluminada. 3 horas. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Crucero al Atardecer por el Bósforo',
      subtitle: 'La hora mágica en el Bósforo — contemple la puesta de sol tras las siluetas de los minaretes mientras pasa por Dolmabahçe, la Mezquita de Ortaköy y el Puente del Bósforo iluminándose para la noche.',
      badge: 'Hora Dorada · Salida 17:30 · Las Mejores Fotos'
    },
    intro: [
      'El **crucero al atardecer por el Bósforo** captura Estambul en su momento más fotogénico. Embarque a las 17:30 y en 20 minutos el sol comenzará a caer tras los minaretes de la orilla europea — bañando el Palacio de Dolmabahçe en color dorado, volviendo el agua del Bósforo color cobre y recortando la Mezquita de Ortaköy contra un cielo resplandeciente. Cada foto de móvil en este tour parece una toma profesional.',
      'Nuestro **crucero al atardecer por el Bósforo** incluye una cena turca completa que comienza durante la hora dorada y continúa mientras los puentes se iluminan para la noche. Cuando llega el postre, navega bajo el iluminado Puente del Bósforo — 30 millones de luces reflejadas en el agua oscura. La transición del día a la noche, comprimida en 3 horas, esto es todo.',
      'Ya sea un fotógrafo persiguiendo la hora dorada, un viajero que quiere lo mejor del día y la noche o una pareja buscando "la foto del momento en Estambul", este es el **crucero al atardecer con cena por el Bósforo** recomendado para visitantes. Calificación 4,8★, licencia TÜRSAB, pago a bordo, sin prepago.'
    ],
    highlights: [
      { title: 'Hora dorada máxima — salida 17:30', desc: 'Embarque a las 17:30, el atardecer ocurre ~18:30 en verano / 17:00 en invierno. Los primeros 40 minutos del tour son la hora dorada que persigue. Cámara lista — esta es la toma.' },
      { title: 'Transición día-noche incluida', desc: 'No solo el atardecer — navegamos hacia el crepúsculo, luego hacia el Bósforo iluminado. Verá 3 fases de luz diferentes en un tour: dorada, hora azul y noche totalmente iluminada.' },
      { title: 'Cena completa durante el tour', desc: '10 variedades de mezze turcos, entrante caliente, plato principal (salmón, lubina, pollo, köfte, vegetariano), postre de pastel con helado. El mismo menú de calidad que el tour nocturno, servido durante el atardecer.' },
      { title: 'Dolmabahçe, Ortaköy, Puente del Bósforo — todos brillando', desc: 'La ruta pasa por el Palacio de Dolmabahçe (dorado al atardecer), la Mezquita de Ortaköy (cúpula recortada), el Puente del Bósforo (iluminándose), Rumeli Hisarı, el Palacio de Beylerbeyi. Cada monumento en su mejor luz.' }
    ],
    faq: [
      { q: '¿A qué hora sale el crucero al atardecer por el Bósforo?', a: 'El embarque comienza a las 17:00, el barco zarpa a las 17:30, regresa aproximadamente a las 20:30. Lo programamos para que el atardecer se produzca en el agua en el momento exacto — varía ligeramente por estación (18:30 en verano, 17:00 en invierno). Ajustamos la salida 15-30 minutos estacionalmente.' },
      { q: '¿El crucero al atardecer por el Bósforo es lo mismo que el crucero con cena?', a: 'Similar pero con horario diferente. El crucero al atardecer sale a las 17:30 con cena servida durante el tour (hora dorada + noche temprana). El crucero con cena es a las 21:00 — después del anochecer, vistas nocturnas puras. Mismo barco, mismo menú, mismo entretenimiento — solo iluminación diferente. Algunos huéspedes hacen ambos en días distintos.' },
      { q: '¿Cuál es el precio del crucero al atardecer por el Bósforo?', a: 'Tour al atardecer estándar desde €35/persona (3 horas, cena completa, entretenimiento en vivo). Opción VIP con asientos delanteros y mezze premium €55/persona. Pago a bordo — sin prepago. 0-3 años gratis, 4-8 años a mitad de precio.' },
      { q: '¿El tour al atardecer es mejor que el tour con cena (nocturno)?', a: '"Mejor" depende de lo que busque. Atardecer = mejores fotos, luz dorada, ritmo más pausado, noche más temprana. Noche = las luces más icónicas (puentes iluminados), mejor entretenimiento, cena más tarde. Los fotógrafos eligen el atardecer. Las parejas en noche de cita eligen la noche. Las familias con niños suelen elegir el atardecer (termina temprano).' },
      { q: '¿Qué debo llevar al tour al atardecer?', a: 'Smartphone o cámara para fotos (la hora dorada lo pide). Chaqueta ligera — el viento aumenta al atardecer y en la cubierta puede enfriar rápido al caer la tarde. Gafas de sol para los primeros 30 minutos. Ropa smart casual — está cenando, pero no hay código estricto.' },
      { q: '¿Puedo quedarme en el tour para ver los puentes iluminados de noche?', a: 'El tour al atardecer dura 3 horas (17:30-20:30), por lo que al final verá el Puente del Bósforo completamente iluminado y la Torre de la Doncella encendida. Si quiere las vistas nocturnas PLENAS (21:00-00:00, cuando todo el restaurante y los monumentos están totalmente iluminados), reserve el crucero con cena de las 21:00. Lo mejor de ambos: reserve ambos en noches diferentes.' }
    ],
    cta: {
      primary: 'Reservar Tour al Atardecer · Pago a Bordo',
      secondary: 'Salida 17:30 · Atardecer + cena incluida · Cancelación gratuita 2 horas antes',
      tertiary: 'Ver Crucero con Cena Nocturno (21:00)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tour Nocturno Bósforo desde €{p.dinnerStd} — Cena + Show en Vivo',
      description: 'Tour nocturno de 3 horas por el Bósforo con cena y show en vivo. Salida 21:00 desde Kabataş, puentes iluminados. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
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
      { q: '¿A qué hora es el tour nocturno por el Bósforo?', a: 'Embarque a partir de las 20:00 en el muelle de Kabataş. El barco zarpa a las 21:00, regresa aproximadamente a las 00:00 (medianoche). Recomendamos llegar 20 minutos antes para acomodarse y elegir asiento.' },
      { q: '¿Cuánto cuesta el tour nocturno por el Bósforo?', a: 'Tour nocturno estándar (3 horas, cena, espectáculo): €{p.dinnerStd}/persona (antes €{p.dinnerStdOriginal}). VIP con asientos delanteros y menú premium: €{p.dinnerVip}/persona (antes €{p.dinnerVipOriginal}). 0-3 años gratis, 4-8 años a mitad de precio. Pago a bordo.' },
      { q: '¿Cuál es la diferencia entre el tour nocturno por el Bósforo y el crucero con cena?', a: 'Es lo mismo, diferente palabra clave. "Tour nocturno por el Bósforo" es como lo buscan muchos viajeros; "crucero con cena" es el término del sector. Mismo barco, mismo programa de 3 horas, mismo menú, mismo espectáculo. Elija el término de búsqueda que prefiera — la experiencia es la misma.' },
      { q: '¿El tour nocturno por el Bósforo vale más la pena que el del atardecer?', a: 'Tour nocturno = Estambul iluminado, máximo dramatismo de luz, programa de entretenimiento completo, las fotos más icónicas de los puentes iluminados. Atardecer = hora dorada, ritmo más pausado, termina a las 20:30. Si solo hace uno: el tour nocturno es más icónico. Muchos hacen ambos en días diferentes.' },
      { q: '¿Puedo hacer el tour nocturno por el Bósforo en mi primer día en Estambul?', a: 'Sí — lo recomendamos. Muchos viajeros reservan el tour nocturno para su primera velada porque les da una orientación completa: todos los grandes monumentos desde el agua, con buena cena y entretenimiento. Es más fácil que intentar recorrer la ciudad con jet lag el día 1. Traslado desde hotel disponible desde barrios céntricos.' },
      { q: 'No hablo turco — ¿el tour es en inglés?', a: 'La tripulación habla inglés. El entretenimiento (sema, danzas folclóricas, música) no requiere idioma. El menú de cena está en inglés. La reserva por WhatsApp / Telegram / WeChat funciona en varios idiomas (inglés, árabe, ruso, alemán, francés, español). No se necesita turco.' }
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
      description: 'Crucero con cena de 3 horas por el Bósforo en Estambul. Menú turco multiplato, folklore en vivo, puentes iluminados. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
    },
    hero: {
      h1: 'Crucero con Cena Estambul',
      subtitle: 'El mejor crucero con cena de Estambul — 3 horas en el Bósforo, generoso banquete turco, entretenimiento en vivo y vistas nocturnas de los monumentos más icónicos de la ciudad.',
      badge: '4,8★ · 11.317 reseñas · TÜRSAB A-17672'
    },
    intro: [
      '¿Busca un **crucero con cena en Estambul**? Ha encontrado el que la mayoría de los viajeros recomienda. Nuestra velada de 3 horas en el Bósforo combina un banquete turco completo, danzas folclóricas en vivo y las vistas más fotogénicas de la ciudad — todo desde un barco cómodo que zarpa del muelle de Kabataş a las 21:00.',
      'La experiencia del **crucero con cena Estambul**: embarque a las 20:00, acomódese, contemple cómo el Palacio de Dolmabahçe pasa al zarpar, la cena comienza al acercarse a la Mezquita de Ortaköy, empieza el espectáculo (sema, danzas folclóricas, oriental), y para cuando llega el postre está bajo el iluminado Puente del Bósforo. Regresa a Kabataş hacia la medianoche con un collage icónico de fotos y el estómago lleno.',
      '€{p.dinnerStd}/persona para el tour Estándar (antes €{p.dinnerStdOriginal}) o €{p.dinnerVip}/persona para VIP con asientos delanteros (antes €{p.dinnerVipOriginal}). Pago a bordo — sin prepago, sin riesgo. Licencia TÜRSAB A-17672, calificado con 4,8★ por más de 11.317 viajeros.'
    ],
    highlights: [
      { title: 'Cena turca generosa completa', desc: '10 variedades de mezze, entrante caliente, plato principal (salmón/lubina/pollo/köfte/vegetariano), postre de pastel con helado. Certificación halal. Refrescos ilimitados incluidos.' },
      { title: 'Espectáculo turco de danzas folclóricas en vivo', desc: 'Ceremonia sema, 5 danzas folclóricas tradicionales, danza oriental, música turca en vivo, DJ. 40 minutos de actuación, música ambiental continúa.' },
      { title: 'Ruta nocturna completa del Bósforo', desc: 'Tour de 3 horas: Dolmabahçe, Çırağan, Mezquita de Ortaköy, Puente del Bósforo, Bebek, Rumeli Hisarı, Puente FSM, Beylerbeyi, Üsküdar, Torre de la Doncella. Tanto la orilla europea como la asiática.' },
      { title: 'Desde €{p.dinnerStd} — pago a bordo', desc: 'Estándar: €{p.dinnerStd} (antes €{p.dinnerStdOriginal}). VIP con menú premium: €{p.dinnerVip} (antes €{p.dinnerVipOriginal}). Sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' }
    ],
    faq: [
      { q: '¿Cuánto cuesta un crucero con cena en Estambul?', a: 'Nuestro crucero con cena estándar es €{p.dinnerStd}/persona (precio normal €{p.dinnerStdOriginal}). VIP con asientos delanteros y menú premium €{p.dinnerVip}/persona (precio normal €{p.dinnerVipOriginal}). 0-3 años gratis, 4-8 años con 50% de descuento. Pago a bordo — sin prepago.' },
      { q: '¿Qué incluye el precio del crucero con cena Estambul?', a: 'Tour de 3 horas por el Bósforo, cena turca generosa (mezze, entrante caliente, plato principal, postre), refrescos ilimitados, espectáculo de danzas folclóricas en vivo (sema, danzas folclóricas, oriental), música en vivo + DJ, acceso a cubierta exterior, impuestos incluidos. Traslado al hotel y alcohol son complementos opcionales.' },
      { q: '¿Desde dónde sale el crucero con cena Estambul?', a: 'Muelle de Kabataş, Estambul — en la orilla europea, junto al Palacio de Dolmabahçe. Compartimos el lugar exacto de encuentro por WhatsApp / Telegram / WeChat tras la reserva. Los vídeos a pie desde la parada de tranvía Dolmabahçe y la estación de tranvía Kabataş están en la sección de punto de encuentro arriba.' },
      { q: '¿Cuánto dura el crucero con cena — y cuándo empieza?', a: '3 horas en total. Embarque a partir de las 20:00, el barco zarpa completo a las 21:00, regresa aproximadamente a las 00:00 (medianoche). Recomendamos llegar 15-20 minutos antes para acomodarse y elegir asiento.' },
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
      { q: '¿Cuánto cuesta el tour nocturno de Estambul?', a: 'Nuestro tour nocturno con cena por el Bósforo: Estándar €{p.dinnerStd}/persona, VIP €{p.dinnerVip}/persona. Incluye tour, cena, entretenimiento, refrescos. Opcional: alcohol +€{p.unlimited}/persona, traslado al hotel +€{p.transfer}/persona. Pago a bordo — sin prepago.' },
      { q: '¿El tour nocturno de Estambul es seguro para viajeros solos?', a: 'Sí — muy seguro. Barco con licencia TÜRSAB, tripulación profesional angloparlante, CCTV a bordo, chalecos salvavidas disponibles. Muchos viajeros solos reservan este tour. Cena en una mesa compartida o privada (su elección) y la velada es inclusiva — conoce a otros viajeros si lo desea, o se queda consigo mismo.' },
      { q: '¿Cuál es la mejor hora para un tour nocturno en Estambul?', a: 'Nuestro crucero con cena por el Bósforo es de 21:00 a 00:00 (3 horas). Es el momento de iluminación máxima para todos los monumentos de Estambul — puentes totalmente iluminados, palacios brillando, luna sobre el agua. Si quiere más temprano (hora dorada), considere el crucero al atardecer de las 17:30.' },
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
      description: 'Tour en barco de 3 horas: crucero por el Bósforo, cena turca completa, folklore en vivo, vistas nocturnas iluminadas. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
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
      { q: '¿Cuánto cuesta el tour en barco de Estambul?', a: 'Nuestro tour en barco con cena: Estándar €{p.dinnerStd}/persona (antes €{p.dinnerStdOriginal}), VIP con menú premium €{p.dinnerVip}/persona (antes €{p.dinnerVipOriginal}). 0-3 años gratis, 4-8 años a mitad de precio. Pago a bordo. Alcohol y traslado al hotel son complementos opcionales.' },
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
      description: 'Viaje de 3 horas por el Bósforo: cena turca, folklore en vivo, vistas nocturnas iluminadas. Salida 21:00 desde Kabataş. Cancelación gratuita, pago a bordo. 11.317 reseñas.'
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
      description: 'Tickets directos del crucero por el Bósforo. Estándar €{p.dinnerStd}, VIP €{p.dinnerVip}. Sin anticipo, pago a bordo. Cancelación gratuita hasta 2hrs antes. 11.317 reseñas.'
    },
    hero: {
      h1: 'Entradas para el Crucero por el Bósforo',
      subtitle: 'Sáltese las comisiones de intermediarios — compre sus entradas para el crucero por el Bósforo directamente con nosotros. Sin prepago, pago a bordo, cancelación gratuita hasta 2 horas antes de la salida.',
      badge: 'Reserva Directa · Sin Prepago · 40% DE DESCUENTO'
    },
    intro: [
      '¿Busca **entradas para el crucero por el Bósforo**? Cómprelas directamente. Nuestras entradas son €{p.dinnerStd} (Estándar) o €{p.dinnerVip} (VIP) — 40% de descuento sobre el precio normal (€{p.dinnerStdOriginal} y €{p.dinnerVipOriginal}). Los sitios de reserva de terceros suelen añadir una comisión del 20-40%. Al reservar directamente ahorra — y aun así puede pagar a bordo.',
      'Nuestro proceso de **entradas para el crucero por el Bósforo**: rellene el asistente de esta página en menos de 1 minuto (fecha, número de huéspedes, paquete, contacto), confirmamos al instante por WhatsApp / Telegram / WeChat, aparece a las 20:00 en el muelle de Kabataş, paga a bordo, disfruta del crucero con cena de 3 horas. Sin entrada física para imprimir, sin cupón por correo — nuestra confirmación es su entrada.',
      'Ya sea reservando el crucero con cena de esta noche o reservando una fecha concreta de la próxima semana, las **entradas para el crucero por el Bósforo directamente** son la vía más rápida. Calificación 4,8★, licencia TÜRSAB (A-17672), menú con certificación halal y admite complementos de traslado al hotel y alcohol.'
    ],
    highlights: [
      { title: 'Reserva directa — sin comisión de intermediario', desc: '€{p.dinnerStd} Estándar, €{p.dinnerVip} VIP. Los sitios de terceros cobran €30-80+ por el mismo tour. Reservando directamente con nosotros ahorra. Sin cargos ocultos, sin markup de comisión.' },
      { title: 'Pago a bordo — sin prepago', desc: 'Reserve su lugar ahora, pague al embarcar. Se acepta efectivo o tarjeta. Gratis si cancela con 2+ horas de antelación a la salida. Riesgo financiero cero al reservar con antelación.' },
      { title: 'Confirmación en menos de 1 minuto', desc: 'Rellene el asistente → confirmamos por WhatsApp / Telegram / WeChat. Sin cupón PDF por correo para imprimir. Nuestro mensaje es su entrada. Venga al muelle a las 20:00.' },
      { title: '40% DE DESCUENTO precio de lanzamiento actual', desc: 'Estándar antes €{p.dinnerStdOriginal}, ahora €{p.dinnerStd}. VIP antes €{p.dinnerVipOriginal}, ahora €{p.dinnerVip}. 40% de descuento porque reserva directamente. No es una cifra por tiempo limitado — es nuestro precio estándar de reserva directa.' }
    ],
    faq: [
      { q: '¿Cuánto cuestan las entradas para el crucero por el Bósforo?', a: 'Estándar: €{p.dinnerStd}/persona (normal €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/persona (normal €{p.dinnerVipOriginal}). Incluye tour de 3 horas, cena turca generosa, espectáculo de danzas folclóricas en vivo, refrescos ilimitados. 0-3 años gratis, 4-8 años con 50% de descuento. Pago a bordo — sin prepago.' },
      { q: '¿Dónde puedo comprar entradas para el crucero por el Bósforo?', a: 'Directamente en esta página — rellene el asistente de reserva, confirmamos al instante por WhatsApp / Telegram / WeChat. Pago a bordo. Las plataformas de terceros (Viator, GetYourGuide, Klook) también venden entradas pero suelen cobrar €30-80+ — es el markup del intermediario. La directa es la más barata y rápida.' },
      { q: '¿Necesito imprimir la entrada del crucero por el Bósforo?', a: 'No — no se necesita entrada física ni cupón. Tras la reserva, le enviamos una confirmación por WhatsApp (o Telegram/WeChat) con punto de encuentro, hora y nombre de reserva. Solo muestre su teléfono en el muelle. Eso es todo.' },
      { q: '¿Puedo cancelar o reembolsar mi entrada del crucero por el Bósforo?', a: 'Sí — cancelación gratuita hasta 2 horas antes de la salida. Solo escríbanos por WhatsApp. Como aún no ha pagado (pago a bordo), no se necesita reembolso — simplemente no viene, sin cargo. Mucho más flexible que las entradas prepagadas de terceros.' },
      { q: '¿Hay entradas para el crucero por el Bósforo disponibles el mismo día?', a: 'Frecuentemente sí, especialmente entre semana. Los fines de semana y festivos se llenan más rápido. Compruebe la disponibilidad a través del asistente de reservas — se actualiza en tiempo real. La reserva el mismo día suele ser posible hasta pocas horas antes de la salida de las 21:00. Para solicitudes urgentes, WhatsApp.' },
      { q: '¿Las entradas infantiles para el crucero por el Bósforo son gratis?', a: 'Los niños **0-3 años totalmente gratis** (sin cargos, sin costes ocultos, traslado incluido). **4-8 años con 50% de descuento** (en Estándar €{p.dinnerStd}/2 = €12). **9+ años precio completo de adulto.** Precios con tope y transparentes — sin trucos de "recargo por bebé".' }
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
      'Nuestro **crucero por el Bósforo de última hora** tiene el mismo programa nocturno que las reservas anticipadas: 3 horas en el agua (21:00-00:00), cena turca generosa, espectáculo de danzas folclóricas en vivo, sema, danza oriental, DJ. Palacio de Dolmabahçe, Mezquita de Ortaköy, Puente del Bósforo iluminados — las mismas vistas icónicas. Mismo precio de €{p.dinnerStd} Estándar o €{p.dinnerVip} VIP.',
      'La cancelación el mismo día es gratuita hasta 2 horas antes de la salida, porque **pagar a bordo** significa que aún no se ha comprometido a nada. Si reservó a las 14:00 y sus planes cambian para las 19:00, solo escríbanos por WhatsApp — sin reembolso, sin problema. Esta es la flexibilidad del **tour por Estambul de última hora** que los viajeros valoran.'
    ],
    highlights: [
      { title: 'Asientos para esta noche aún disponibles', desc: 'Reservamos 5-10 asientos diarios para reservas del mismo día. Compruebe el asistente arriba — disponibilidad en tiempo real. Si el tour de hoy está lleno, el de mañana suele estar libre.' },
      { title: 'Confirmación en menos de 5 minutos', desc: 'Rellene el asistente → mensaje de confirmación por WhatsApp/Telegram/WeChat → listo. Sin cupón por correo que esperar, sin código QR que imprimir. Nuestro mensaje es su entrada.' },
      { title: 'Cero pago hasta que embarque', desc: 'Pago a bordo, efectivo o tarjeta. Si no viene (cambio de planes, enfermedad, tiempo), sin cargo. Cancelación gratuita hasta 2 horas antes de la salida. Realmente apto para última hora.' },
      { title: 'Traslado al hotel el mismo día frecuentemente disponible', desc: 'El traslado al hotel normalmente requiere 24 horas de aviso, pero para reservas del mismo día entre 14:00-17:00 normalmente podemos organizar la recogida por +€{p.transfer}/persona. Para solicitudes urgentes de traslado, WhatsApp.' }
    ],
    faq: [
      { q: '¿Realmente puedo reservar un crucero por el Bósforo para esta noche?', a: 'Sí — frecuentemente. Reservamos asientos para reservas del mismo día. Compruebe el asistente arriba para la disponibilidad de esta noche. Si hay asientos, puede reservar hasta las 18:00 (3 horas antes de la salida). Los fines de semana están más ajustados — reserve más temprano del día si es posible.' },
      { q: '¿Con cuánta antelación puedo reservar?', a: 'Para el barco de las 21:00, las reservas permanecen abiertas hasta las 18:00. Después de las 18:00, escríbanos directamente por WhatsApp al +90 532 244 29 22 — podemos confirmar manualmente si hay asientos. Después de las 19:30 está muy ajustado a menos que ya esté en el muelle de Kabataş y pueda embarcar rápidamente.' },
      { q: '¿El crucero por el Bósforo de última hora es más caro?', a: 'No — mismo precio que la reserva anticipada. €{p.dinnerStd} Estándar, €{p.dinnerVip} VIP. No hacemos "precios dinámicos" ni prima por última hora. Mismo barco, misma cena, mismo espectáculo, mismo precio.' },
      { q: '¿Qué pasa si el tour de esta noche está totalmente lleno?', a: 'El tour de mañana suele estar libre — operamos 365 días al año, a diario. Puede reservar para mañana y aun así ser "última hora" en el sentido de que acaba de decidirlo. Los tours entre semana tienen más espacio que los de fin de semana.' },
      { q: '¿Pueden organizar un traslado al hotel de última hora?', a: 'El traslado del mismo día es posible hasta ~17:00 para el tour de las 21:00. Después de las 17:00, puede que no tengamos un conductor disponible — en ese caso, puede tomar un taxi al muelle de Kabataş (15 min desde Taksim, 10 min desde Sultanahmet, ~€10-15). Céntrico y fácil.' },
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
      description: 'Precios crucero Bósforo Estambul: Estándar €{p.dinnerStd}, VIP €{p.dinnerVip}. Niños 0-3 gratis, 4-8 mitad. Add-ons transparentes. Cancelación gratuita, pago a bordo.'
    },
    hero: {
      h1: 'Precio del Crucero Estambul',
      subtitle: 'Precios transparentes, sin cargos ocultos. Estándar €{p.dinnerStd}/persona, VIP €{p.dinnerVip}/persona — y paga a bordo, no ahora.',
      badge: 'Transparente · 40% DE DESCUENTO Directo · 0-3 Años Gratis'
    },
    intro: [
      'Los **precios del crucero de Estambul** varían mucho — desde ferris económicos de €15 que omiten la cena hasta yates estilo resort de €150+. Nuestro precio está en el medio y ofrece el mejor valor: €{p.dinnerStd} para el tour con cena completo de 3 horas con espectáculo en Estándar, €{p.dinnerVip} para el VIP con experiencia premium con asientos delanteros. Sin cargos ocultos, sin recargos sorpresa.',
      'Un desglose detallado del **precio del crucero de Estambul**, porque la transparencia importa:\n\n- **Crucero con Cena Estándar**: €{p.dinnerStd}/persona (antes €{p.dinnerStdOriginal}, 40% de descuento). Incluye tour de 3 horas, 10 mezze, plato principal, postre, refrescos ilimitados, espectáculo en vivo.\n- **Crucero con Cena VIP**: €{p.dinnerVip}/persona (antes €{p.dinnerVipOriginal}). Añade asientos delanteros, más de 15 mezze, opciones de solomillo/entrecot de ternera, servicio prioritario.\n- **0-3 años**: Gratis. 4-8 años: 50% de descuento. 9+ años: precio completo.\n\nComplementos (opcionales):\n- 2 copas de alcohol: +€{p.alcohol2}/persona\n- Alcohol local ilimitado: +€{p.unlimited}/persona\n- Traslado al hotel ida y vuelta: +€{p.transfer}/persona\n- Decoración de mesa romántica: +€{p.romantic}/mesa',
      'Y lo importante: **pago a bordo**. No se compromete con ni un céntimo hasta estar a bordo. Cancelación gratuita hasta 2 horas antes de la salida. Sin compromiso, sin riesgo — los **precios del crucero de Estambul** más favorables al consumidor que encontrará.'
    ],
    highlights: [
      { title: 'Estándar: €{p.dinnerStd} (antes €{p.dinnerStdOriginal})', desc: '40% de descuento sobre el precio normal. Tour de 3 horas, cena turca completa, espectáculo en vivo, refrescos ilimitados. El paquete más popular — cubre todo lo que necesita para una gran velada.' },
      { title: 'VIP: €{p.dinnerVip} (antes €{p.dinnerVipOriginal})', desc: '40% de descuento sobre el precio normal. Añade asientos delanteros, más de 15 mezze, plato principal premium (solomillo de ternera, entrecot), servicio prioritario de camarero. Para ocasiones especiales o viajeros premium.' },
      { title: 'Precio infantil: 0-3 gratis, 4-8 a mitad de precio', desc: '0-3 totalmente gratis (sin cargos). 4-8 al 50% del precio del adulto. 9+ precio completo de adulto. Transparente, sin trucos de precios familiares. Traslado también gratis para 0-3.' },
      { title: 'Complementos — solo cuando los quiera', desc: 'Alcohol: €{p.alcohol2} o €{p.unlimited}/persona. Traslado: €{p.transfer}/persona. Mesa romántica: €{p.romantic}/mesa. Todos opcionales, no empaquetados. Elija solo lo que necesite.' }
    ],
    faq: [
      { q: '¿Cuánto cuesta un crucero de Estambul?', a: 'Crucero con Cena Estándar: €{p.dinnerStd}/persona (normal €{p.dinnerStdOriginal}, 40% de descuento). VIP: €{p.dinnerVip}/persona (normal €{p.dinnerVipOriginal}, 40% de descuento). 0-3 años gratis, 4-8 años a mitad de precio. Pago a bordo — sin prepago. Cancelación gratuita hasta 2 horas antes de la salida.' },
      { q: '¿Hay cargos ocultos en el precio del crucero de Estambul?', a: 'No. El precio incluye: tour de 3 horas, cena completa (mezze, entrante, plato principal, postre), refrescos ilimitados, espectáculo en vivo, impuestos. Los complementos opcionales (alcohol, traslado, mesa romántica) tienen precio separado y transparente — solo paga por lo que añada. Sin "tasas de servicio", "tasas portuarias", recargos sorpresa.' },
      { q: '¿Por qué el precio del crucero de Estambul tiene 40% de descuento — es un truco?', a: 'Sin trucos. El precio normal de €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} es lo que cobran los sitios de reserva de terceros (Viator, GetYourGuide, Klook) — con sus comisiones. Reserve directamente y obtiene €{p.dinnerStd}/€{p.dinnerVip}. Esa es la diferencia del 40%. Sin trucos de tiempo limitado ni precios dinámicos.' },
      { q: '¿Cómo se compara el precio del crucero de Estambul con otras opciones?', a: 'Ferris de anillo: €5-10, 1 hora, sin cena, sin entretenimiento, solo turismo. Cruceros con cena económicos: €20-30, abarrotados, cena media, espectáculo corto. Nuestro Estándar (€{p.dinnerStd}): 3 horas, cena completa, espectáculo completo, mesa privada, licencia TÜRSAB. VIP (€{p.dinnerVip}): asientos delanteros, menú premium. Yates resort: €100-150+, excesivo para viajeros solos/parejas.' },
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
      description: 'Crucero sightseeing por el Bósforo: Dolmabahçe, Ortaköy, Puente del Bósforo, Rumeli, Beylerbeyi, Torre de la Doncella. Tour de 3hrs con cena. Cancelación gratuita.'
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
