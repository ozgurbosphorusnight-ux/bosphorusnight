/**
 * Portuguese (Portugal) translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 * Formal polite register (você implicit, "Bósforo" for Bosphorus).
 * Brand "Bosphorus Night" is generic in body text → "Bósforo Noturno" / "noite no Bósforo".
 * Domain bosphorusnight.com stays Latin in URLs only.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Cruzeiro com Jantar no Bósforo desde €{p.dinnerStd} — Passeio Noturno em Istambul + Show',
      description: 'Cruzeiro com jantar de 3 horas no Bósforo: menu turco de vários pratos e show folclórico ao vivo. Partida às 20:30 de Kabataş. Cancelamento gratuito, pagamento a bordo.'
    },
    hero: {
      h1: 'Cruzeiro com Jantar no Bósforo em Istambul',
      subtitle: 'Três horas de entretenimento ao vivo, um generoso jantar turco de vários pratos e as mais impressionantes vistas noturnas do Bósforo.',
      badge: '4,8★ · 11.317 avaliações'
    },
    intro: [
      '**O cruzeiro com jantar no Bósforo** é a experiência noturna mais icónica de Istambul. O nosso passeio parte às 19:30 do cais de Kabataş e navega sob as pontes iluminadas do Bósforo e Fatih Sultan Mehmet, oferecendo-lhe um jantar turco de vários pratos, danças folclóricas ao vivo, dança oriental e um set de DJ que anima o convés até às 23:00.',
      'Ao contrário dos barcos turísticos comuns que enchem a paisagem noturna de Istambul, **o nosso cruzeiro com jantar no Bósforo** é licenciado pela TÜRSAB (A-17672) e avaliado com 4,8★ por mais de 11.317 viajantes. Mantemos os grupos pequenos e o serviço caloroso — e, como o pagamento é feito a bordo, não há nenhum risco em reservar com antecedência.',
      'Quer esteja a celebrar um aniversário, à procura de uma noite premium em Istambul para a sua família, ou queira a transição pôr-do-sol-noite mais fotogénica da cidade — este é o cruzeiro com jantar recomendado em primeiro lugar pelos habitantes de Istambul.'
    ],
    highlights: [
      { title: 'Jantar turco de vários pratos', desc: '10 variedades de mezze frios, entrada quente (paçanga böreği), prato principal à escolha (salmão / robalo / frango / almôndegas / vegetariano), bolo gelado de sobremesa, refrigerantes ilimitados.' },
      { title: 'Danças folclóricas ao vivo, dança oriental e DJ', desc: 'Espetáculo Mevlana sema, 5 danças folclóricas turcas tradicionais, dança oriental clássica, músicos turcos ao vivo, seguidos de um set de DJ durante todo o cruzeiro.' },
      { title: 'Rota noturna completa do Bósforo', desc: 'Kabataş → Dolmabahçe → Palácio Çırağan → Mesquita de Ortaköy → Bebek → Rumeli Hisarı → Ponte FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Desde €{p.dinnerStd}/pessoa — pagamento a bordo', desc: 'Cruzeiro Standard €{p.dinnerStd} (antes €{p.dinnerStdOriginal}). Cruzeiro VIP com lugar frente ao palco e menu premium €{p.dinnerVip}. Sem pagamento antecipado. Cancelamento gratuito até 2 horas antes da partida.' }
    ],
    faq: [
      { q: 'A que horas começa o cruzeiro com jantar no Bósforo?', a: 'O embarque começa às 19:30 no cais de Kabataş. O barco parte às 20:30 e regressa por volta das 23:30. Recomendamos chegar 15-20 minutos mais cedo para se acomodar e relaxar.' },
      { q: 'Quanto custa o cruzeiro com jantar no Bósforo?', a: 'Cruzeiro Standard €{p.dinnerStd}/pessoa (preço normal €{p.dinnerStdOriginal}). Cruzeiro VIP com lugar frente ao palco e menu premium €{p.dinnerVip}/pessoa. 0-3 anos grátis, 4-8 anos com 50% de desconto. O pagamento é feito a bordo — sem pagamento antecipado.' },
      { q: 'O álcool está incluído no cruzeiro com jantar?', a: 'Os refrigerantes ilimitados (água, cola, sumo) estão incluídos no preço. Os pacotes de álcool são opcionais: 2 copos +€{p.alcohol2}/pessoa ou álcool local ilimitado (vinho, cerveja, rakı, vodka, gin) +€{p.unlimited}/pessoa. As bebidas importadas são cobradas separadamente a bordo.' },
      { q: 'Existe transfer do hotel?', a: 'Sim — o serviço de recolha e regresso é +€{p.transfer}/pessoa. Zonas servidas: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Sütlüce e Şişli. Pode selecionar esta opção no formulário de reserva.' },
      { q: 'O cruzeiro com jantar no Bósforo é halal?', a: 'Absolutamente. Toda a carne servida a bordo é certificada halal. O álcool é um suplemento opcional (nunca imposto aos hóspedes), e a disposição das mesas separa naturalmente os hóspedes que preferem uma refeição sem álcool. Também oferecemos alternativas vegetarianas sem custo adicional.' },
      { q: 'Como me devo vestir?', a: 'Traje smart casual. As noites em Istambul podem ser frescas mesmo no verão — recomendamos um casaco leve ou um xaile. Não há código de vestuário obrigatório, mas fatos de banho, chinelos ou roupa desportiva não são adequados para a atmosfera do jantar.' }
    ],
    cta: {
      primary: 'Reserve Agora · Pagamento a Bordo',
      secondary: 'Cancelamento gratuito até 2 horas antes da partida',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bósforo com Crianças — Cruzeiro Familiar desde €{p.dinnerStd}/adulto',
      description: 'Cruzeiro com jantar no Bósforo amigo da família. Crianças 0-3 grátis, 4-8 meio preço. Salão interior seguro, menu infantil.'
    },
    hero: {
      h1: 'Cruzeiro no Bósforo com Crianças',
      subtitle: 'Uma noite no Bósforo concebida para famílias com crianças — jantar, entretenimento e uma atmosfera segura e confortável.',
      badge: 'Amigo da Família · Halal · 0-3 Anos Grátis'
    },
    intro: [
      '**O cruzeiro no Bósforo com crianças** é a opção noturna mais familiar de Istambul. Recebemos dezenas de famílias todas as noites — concebemos cada detalhe para que os mais pequenos se sintam confortáveis: zona interior coberta para se manterem aquecidos, um menu acessível para crianças (frango simples grelhado, massa, refrigerantes ilimitados) e embarque cedo para evitar birras de hora tardia.',
      'Ao contrário dos barcos só para adultos, **o nosso cruzeiro com jantar no Bósforo para famílias** mantém-se caloroso e inclusivo. **Crianças 0-3 anos são grátis** (transfer incluído), 4-8 anos beneficiam de **50% de desconto**, 9+ anos pagam preço inteiro — sem custos escondidos. As danças folclóricas ao vivo, a dança oriental e o espetáculo sema são entretenimento delicado para a família, não um clube noturno.',
      'Quer venha a Istambul para um fim-de-semana prolongado com o seu bebé, ou traga os adolescentes na sua primeira viagem europeia — este é o passeio recomendado pelas famílias de Istambul. Seguro, certificado halal, licenciado pela TÜRSAB e avaliado com 4,8★ por mais de 11.317 viajantes.'
    ],
    highlights: [
      { title: '0-3 anos completamente grátis', desc: 'Sem taxas para bebés e crianças pequenas. 4-8 anos pagam 50% do preço de adulto. A partir dos 9 anos, hóspede com preço inteiro. Transparente, sem surpresas.' },
      { title: 'Zona interior coberta', desc: 'Totalmente coberta e aquecida nos meses frios. As crianças mantêm-se quentes, protegidas do vento. O convés aberto também está disponível quando o tempo está bom — a escolha é sua.' },
      { title: 'Menu infantil a pedido', desc: 'Frango simples grelhado, massa, pão e legumes — sem custo adicional. Refrigerantes ilimitados (cola, sumo, água). Avise-nos com antecedência — sem surpresas de mezze picantes para os mais pequenos.' },
      { title: 'Entretenimento seguro para a família', desc: 'Espetáculo sema (fascinante para crianças), 5 danças folclóricas tradicionais, música turca ao vivo e set de DJ. Tudo amigo da família — sem conteúdo para adultos. As crianças muitas vezes juntam-se à dança.' }
    ],
    faq: [
      { q: 'O cruzeiro no Bósforo é seguro para crianças pequenas?', a: 'Sim — o nosso barco é licenciado pela TÜRSAB, tem uma zona interior coberta com janelas seguras, coletes salva-vidas de todos os tamanhos disponíveis e uma tripulação profissional experiente com famílias. Recomendamos o convés interior para crianças pequenas e o convés aberto para os de 6+ anos.' },
      { q: 'Qual é o preço para crianças no cruzeiro no Bósforo?', a: 'Crianças **0-3 anos: GRÁTIS** (sem taxas, sem custos escondidos). **4-8 anos: 50% de desconto** sobre o preço de adulto — ou seja, €12/criança no Standard (€{p.dinnerStd}/2). **9+ anos: preço inteiro de adulto.** O transfer do hotel é grátis para 0-3 anos, standard para 4+ (€{p.transfer}/pessoa).' },
      { q: 'Existe menu infantil a bordo?', a: 'Sim — frango simples grelhado, massa, pão, legumes da época e refrigerantes ilimitados. Avise-nos sobre alergias ou preferências alimentares na reserva e preparamos algo que a sua criança vai comer com prazer.' },
      { q: 'A música ou o espetáculo são demasiado barulhentos para crianças?', a: 'Os espetáculos ao vivo decorrem numa única zona do palco — se as suas crianças são sensíveis ao ruído, sentamo-los numa mesa mais tranquila ao fundo. O espetáculo dura 40 minutos no total, sendo o resto da noite música turca de fundo e DJ a volume moderado.' },
      { q: 'O que acontece se o bebé adormecer durante o cruzeiro?', a: 'Sem problema — muitos adormecem. A zona interior tem sofás tipo banco onde um bebé ou criança pequena pode dormir confortavelmente. Peça à tripulação uma manta quente se necessário. Sem custos adicionais.' },
      { q: 'Devo levar o carrinho de bebé a bordo?', a: 'Pode, mas recomendamos deixar o carrinho grande no hotel (ou com o nosso motorista se reservou transfer — guardamo-lo em segurança). O nosso barco tem corredores estreitos e conveses com degraus. Um porta-bebés ligeiro é mais cómodo a bordo.' }
    ],
    cta: {
      primary: 'Reserve o Cruzeiro Familiar · Pagamento a Bordo',
      secondary: 'Cancelamento gratuito até 2 horas antes · Sem pagamento antecipado',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Cruzeiro Romântico no Bósforo desde €{p.dinnerStd} — Jantar à Luz das Velas',
      description: 'Cruzeiro romântico no Bósforo: mesa à luz das velas, rosas, jantar de vários pratos sob pontes iluminadas. Desde €{p.dinnerStd}/pessoa. Cancelamento gratuito, pagamento a bordo.'
    },
    hero: {
      h1: 'Cruzeiro Romântico no Bósforo',
      subtitle: 'Jantar à luz das velas, mesa adornada com rosas, pontes iluminadas e um momento especial só para si sob o mais icónico céu noturno de Istambul.',
      badge: 'Aniversário · Lua-de-Mel · Noite Especial'
    },
    intro: [
      '**O cruzeiro romântico no Bósforo** é a noite mais icónica para casais em Istambul. Enquanto o sol se põe sobre o Palácio de Dolmabahçe e a Ponte do Bósforo se acende em cores, você e o seu parceiro partilham um jantar turco de vários pratos numa mesa privada — com velas, flores frescas e violino ao vivo a flutuar pelo convés.',
      'O nosso arranjo de mesa romântica (+€{p.romantic}/mesa) transforma qualquer lugar num momento especial: rosas vermelhas, velas brilhantes, um bilhete de boas-vindas escrito à mão. Adicione o pacote de álcool ilimitado para vinho sob as estrelas (+€{p.unlimited}/pessoa) ou mantenha-o simples com os refrigerantes incluídos. Qualquer que seja a escolha, a tripulação trata discretamente do resto.',
      'Quer esteja a celebrar um aniversário, a planear uma surpresa para o seu parceiro ou simplesmente queira uma noite inesquecível na cidade mais romântica da Europa — este é o passeio preferido pelos casais em Istambul. Avaliação 4,8★, licenciado pela TÜRSAB e — o mais importante — pagamento a bordo, por isso só promete a noite em si.'
    ],
    highlights: [
      { title: 'Mesa romântica à luz das velas', desc: 'Adicione o arranjo de mesa romântica com +€{p.romantic}/mesa: rosas vermelhas frescas, velas brilhantes, pétalas de rosa na toalha de mesa e cartão escrito à mão. Fotografias incluídas.' },
      { title: 'As melhores mesas para a transição pôr-do-sol-noite', desc: 'As mesas à janela são reservadas para casais. Veja a Ponte do Bósforo a acender-se, a Torre da Donzela a brilhar e a Mesquita de Ortaköy a iluminar-se a partir da sua mesa privada.' },
      { title: 'Violino ao vivo e atmosfera íntima', desc: 'O violino ao vivo e a música turca acústica durante o jantar criam uma atmosfera lenta e romântica. Depois entra o DJ, e os casais dançam no convés aberto sob luzes.' },
      { title: 'Vinho, champanhe, harmonizações premium', desc: 'Adicione 2 copos de álcool (+€{p.alcohol2}/pessoa) ou vinho, cerveja, rakı local ilimitados (+€{p.unlimited}/pessoa). Champanhe importado e harmonizações premium a pedido — pergunte na reserva.' }
    ],
    faq: [
      { q: 'O que torna este cruzeiro romântico?', a: 'A combinação de mesa privada, arranjo com velas (opcional +€{p.romantic}), jantar turco de vários pratos, violino ao vivo e música acústica e as pontes iluminadas do Bósforo passando por cima. Concebemos a experiência para casais — atmosfera tranquila no início, depois DJ energético e dança. O ritmo escolhe-o você.' },
      { q: 'Podem organizar uma surpresa para o meu parceiro — aniversário, lua-de-mel, pedido de casamento?', a: 'Sim — diga-nos na reserva. Podemos coordenar com a nossa equipa bolo de aniversário (gratuito), arranjo especial de mesa, cartão escrito à mão no seu idioma ou levar um elemento à mesa no momento certo. Para pedidos de casamento, recomendamos que nos escreva diretamente pelo WhatsApp para podermos planear discretamente.' },
      { q: 'Quanto custa o cruzeiro romântico para 2 pessoas?', a: '2 pessoas Standard: 2 × €{p.dinnerStd} = €48,60. Adicione o arranjo romântico +€{p.romantic} = €63,60. 2 pessoas VIP: 2 × €{p.dinnerVip} = €110,40 + arranjo romântico €{p.romantic} = €125,40. Sem pagamento antecipado — pagamento a bordo. Álcool ilimitado mais 2 × €{p.unlimited} = €60.' },
      { q: 'O cruzeiro romântico no Bósforo é privado — só para nós?', a: 'Não — é um cruzeiro partilhado com outros casais e hóspedes (até 60-80 no total). **A sua mesa** é privada (só para o seu grupo), mas há outros hóspedes a bordo. Se quer um barco totalmente privado para 2 pessoas, isso é um **Cruzeiro Privado no Bósforo** separado (que podemos organizar a pedido — escreva-nos).' },
      { q: 'Podemos trazer as nossas próprias flores, bolo ou presente?', a: 'Com certeza. Traga o que quiser — a nossa equipa ajuda-o a colocar discretamente o presente-surpresa, a esconder a caixa do anel na sobremesa ou a expor as flores que trouxe. Não há taxas adicionais tipo rolha. Apenas diga-nos para podermos coordenar o momento.' },
      { q: 'O que devemos vestir para um cruzeiro romântico no Bósforo?', a: 'De smart casual a elegante — muitos casais vestem-se bem (vestidos, blazers). Não há código de vestuário rigoroso, mas a atmosfera é mais especial do que turismo casual. Leve um casaco leve ou xaile — o convés pode estar fresco mesmo no verão. Calçado confortável se planeia dançar após o jantar.' }
    ],
    cta: {
      primary: 'Reserve o Cruzeiro Romântico · Pagamento a Bordo',
      secondary: 'Adicione o arranjo de mesa romântica (+€{p.romantic}) no formulário de reserva · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Cruzeiro com Jantar Halal no Bósforo desde €{p.dinnerStd} — Show + Passeio Noturno',
      description: 'Cruzeiro com jantar de 3 horas no Bósforo: show folclórico ao vivo, pontes iluminadas, panorama noturno do Bósforo. Menu halal disponível a pedido.'
    },
    hero: {
      h1: 'Cruzeiro Halal no Bósforo em Istambul',
      subtitle: 'Menu 100% certificado halal, álcool sempre opcional, entretenimento amigo da família e atmosfera respeitosa para viajantes muçulmanos — a noite no Bósforo, feita corretamente.',
      badge: '100% Halal · Amigo da Família · Propriedade Muçulmana'
    },
    intro: [
      '**O cruzeiro halal no Bósforo** é o cruzeiro com jantar mais respeitoso de Istambul para viajantes muçulmanos. Cada carne servida no nosso barco — salmão, robalo, frango, almôndegas de borrego, lombo de vaca, entrecosto — é **certificada halal** de fornecedores aprovados. Servimos o mesmo menu a cada hóspede; sem "secção halal" separada, porque todo o barco é halal por defeito.',
      'O álcool é **um suplemento opcional** — nunca imposto aos hóspedes, e a disposição das mesas separa naturalmente os hóspedes que preferem uma refeição sem álcool. Para os hóspedes que querem o pacote de álcool ilimitado (+€{p.unlimited}/pessoa), está lá, mas os refrigerantes ilimitados incluídos (água, cola, sumo) são suficientes para a maioria das famílias muçulmanas. A nossa tripulação é treinada para respeitar as suas preferências sem suposições.',
      '**O cruzeiro amigo halal no Bósforo** importa para viajantes da Arábia Saudita, EAU, Kuwait, Qatar, Irão, Malásia, Indonésia, Paquistão e Marrocos que querem a noite mais icónica de Istambul sem compromissos. Licenciado pela TÜRSAB, 4,8★ e pagamento a bordo — não prometa nada até ter a certeza de que a experiência cumpre os seus padrões.'
    ],
    highlights: [
      { title: 'Menu 100% certificado halal', desc: 'Toda a carne (salmão, robalo, frango, almôndegas, vaca, entrecosto) é certificada halal de fornecedores aprovados. A cozinha segue a preparação halal. Sem produtos de porco ou aditivos não-halal. Opções vegetarianas estão sempre disponíveis.' },
      { title: 'Álcool opcional, nunca imposto', desc: 'Os pacotes de álcool são suplemento — não estão incluídos por defeito. Os refrigerantes (água, cola, sumo) são ilimitados e gratuitos. A sua mesa permanece sem álcool a menos que peça explicitamente. A tripulação respeita silenciosamente a sua escolha.' },
      { title: 'Entretenimento amigo da família', desc: 'Espetáculo sema, danças folclóricas turcas tradicionais, música turca ao vivo. Sem espetáculos estilo clube noturno, sem conteúdo inapropriado. Seguro para crianças, respeitoso para famílias. A dança oriental é uma forma de arte tradicional, apresentada com modéstia.' },
      { title: 'Respeito pelas horas de oração', desc: 'Se o embarque coincide com maghrib ou isha (19:30-20:30), a nossa equipa pode encaminhá-lo para a zona de oração tranquila no cais de Kabataş antes da partida. Apenas avise-nos na reserva.' }
    ],
    faq: [
      { q: 'O cruzeiro no Bósforo é 100% halal?', a: 'Sim — cada produto de carne no menu (peixe, frango, almôndegas, lombo de vaca, entrecosto, borrego) é certificado halal de fornecedores aprovados. A cozinha segue os padrões de preparação halal. Não se serve porco em lado nenhum a bordo. Não é uma "opção halal" — todo o menu é halal.' },
      { q: 'Outros hóspedes a bordo bebem álcool?', a: 'Alguns hóspedes adicionam o pacote de álcool opcional (+€{p.unlimited}/pessoa). As mesas estão separadas naturalmente — pode pedir uma zona sem álcool. A tripulação não traz álcool a menos que seja especificamente pedido por um hóspede. Os refrigerantes (ilimitados) estão incluídos para todos.' },
      { q: 'Este cruzeiro é adequado para famílias muçulmanas com crianças?', a: 'Sim — é um dos cruzeiros mais respeitados para famílias em Istambul. O entretenimento é modesto (danças folclóricas, sema, música turca), crianças menores de 3 anos são grátis, 4-8 anos beneficiam de 50% de desconto. Sem atmosfera de clube noturno. Famílias do Golfo, Indonésia, Malásia, Paquistão e Marrocos reservam regularmente este cruzeiro.' },
      { q: 'Posso rezar a bordo?', a: 'Não há uma sala de oração dedicada a bordo, mas recomendamos rezar antes do embarque das 19:30 (a oração maghrib coincide frequentemente com este intervalo). O cais de Kabataş tem instalações de oração. Se precisar de rezar durante a navegação 20:30-23:30 (isha), fale com a tripulação — podemos arranjar um canto tranquilo no convés.' },
      { q: 'Quais são os preços para uma família muçulmana de 4 pessoas (2 adultos, 2 crianças)?', a: 'Cruzeiro Standard: 2 × €{p.dinnerStd} + 2 × €12 (meio preço 4-8 anos) = €72,60. Se as crianças tiverem menos de 3 anos, grátis: 2 × €{p.dinnerStd} = €48,60. Adicione €{p.transfer} de transfer do hotel por adulto. Total: €48-92 para a família de 4, sem pagamento antecipado, pagamento a bordo.' },
      { q: 'O transfer do hotel também é halal?', a: 'O transfer do hotel é apenas uma viagem de carro — sem comida ou bebida envolvidas, por isso não há preocupação halal. Os nossos motoristas são profissionais, respeitosos e pontuais. As zonas de transfer cobrem Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli e outros 8 bairros centrais onde os viajantes muçulmanos costumam ficar hospedados.' }
    ],
    cta: {
      primary: 'Reserve o Cruzeiro Halal · Pagamento a Bordo',
      secondary: 'Cancelamento gratuito 2 horas antes · Sem pagamento antecipado · Certificado halal',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Cruzeiro VIP no Bósforo desde €{p.dinnerVip} — Jantar Premium, Lugar VIP',
      description: 'Cruzeiro com jantar VIP no Bósforo: mezze premium, opções de bife, mesa frente ao palco, serviço prioritário. Antes €{p.dinnerVipOriginal}, agora €{p.dinnerVip}.'
    },
    hero: {
      h1: 'Cruzeiro VIP no Bósforo',
      subtitle: 'Lugares à frente do palco, menu turco premium com opções de bife e serviço prioritário — uma noite no Bósforo a um nível superior para viajantes que querem a melhor refeição a bordo.',
      badge: 'O Mais Popular · 40% DESCONTO · Lugares Frente ao Palco'
    },
    intro: [
      '**O cruzeiro VIP no Bósforo** coloca-o nos melhores lugares a bordo: mesas à frente do palco com vista direta para o espetáculo sema, as danças folclóricas, a dança oriental e a música ao vivo. O menu premium adiciona lombo de vaca e entrecosto às escolhas de prato principal (em vez de frango/salmão no Standard), além de 15+ variedades de mezze turcos tradicionais servidos como um conjunto generoso.',
      '**O cruzeiro VIP com jantar no Bósforo** foi designado O Mais Popular pelos nossos hóspedes — porque a €{p.dinnerVip}/pessoa (antes €{p.dinnerVipOriginal}, 40% de desconto), a experiência parece-se mais a um restaurante fine dining do que a um passeio turístico. Mesa privada, serviço atento dos empregados e as mesmas vistas espetaculares de Dolmabahçe, Mesquita de Ortaköy e Ponte do Bósforo iluminada.',
      'Quer seja um viajante de negócios, esteja a celebrar um evento importante ou pense "estamos em Istambul uma só vez — façamos tudo como deve ser", este é **o cruzeiro VIP no Bósforo** reservado pelos visitantes que regressam. Licenciado pela TÜRSAB, 4,8★ com 11.317+ avaliações, pagamento a bordo, cancelamento gratuito até 2 horas antes da partida.'
    ],
    highlights: [
      { title: 'Mesa privada à frente do palco', desc: 'Lugares reservados diretamente em frente ao palco do espetáculo — a melhor vista para o espetáculo sema, as danças folclóricas e a dança oriental. A sua mesa, não partilhada. Os fotógrafos adoram estes lugares.' },
      { title: '15+ mezze + pratos principais premium', desc: '15+ variedades de mezze turcos servidos como conjunto tradicional. As escolhas de prato principal incluem lombo de vaca e entrecosto (no Standard apenas frango/salmão). Mesma sobremesa e refrigerantes ilimitados.' },
      { title: 'Serviço prioritário dos empregados', desc: 'Um empregado dedicado serve a sua mesa primeiro — reabastecimentos, orientação do menu, coordenação dos suplementos de álcool, pedidos especiais. Não lute pela atenção numa sala cheia.' },
      { title: '40% DESCONTO — antes €{p.dinnerVipOriginal}, agora €{p.dinnerVip}', desc: 'Preço normal €{p.dinnerVipOriginal}/pessoa. Preço atual de lançamento €{p.dinnerVip}/pessoa — 40% de desconto. Pagamento a bordo, sem pagamento antecipado. Cancelamento gratuito até 2 horas antes da partida.' }
    ],
    faq: [
      { q: 'Qual é a diferença entre VIP e o Cruzeiro Standard no Bósforo?', a: 'O VIP recebe: (1) lugares à frente do palco com a melhor vista, (2) 15+ mezze em vez de 10 no Standard, (3) lombo de vaca + entrecosto adicionados às opções de prato principal, (4) serviço prioritário dos empregados. Mesmo passeio de 3 horas, mesmo entretenimento, mesma rota. €{p.dinnerVip} contra €{p.dinnerStd}.' },
      { q: 'O preço VIP de €{p.dinnerVip} é realmente 40% de desconto?', a: 'Sim — o preço normal é €{p.dinnerVipOriginal}/pessoa (verifique em qualquer site de reservas). Aplicamos €{p.dinnerVip} como preço de reserva direta, reduzindo as taxas dos intermediários. Obtém VIP por menos do que a maioria dos locais cobra pelo Standard.' },
      { q: 'O álcool está incluído no cruzeiro VIP?', a: 'Não — o álcool é um suplemento separado (tal como no Standard). 2 copos: +€{p.alcohol2}/pessoa. Álcool local ilimitado (vinho, cerveja, rakı, vodka, gin): +€{p.unlimited}/pessoa. As bebidas premium importadas são cobradas separadamente. Os refrigerantes ilimitados estão incluídos e gratuitos.' },
      { q: 'Posso fazer upgrade para VIP depois de embarcar no barco Standard?', a: 'Depende da disponibilidade — se as mesas VIP estiverem livres, sim. Paga a diferença (€{p.dinnerVip} - €{p.dinnerStd}) a bordo. Mas recomendamos reservar VIP com antecedência: os melhores lugares à frente do palco vão para as reservas antecipadas.' },
      { q: 'Como reservo o cruzeiro VIP no Bósforo?', a: 'Use o formulário de reserva nesta página — selecione "VIP" no Passo 1, defina a data, introduza o número de hóspedes, depois os dados de contacto. O seu pedido chega via WhatsApp / Telegram e confirmamos instantaneamente. Pagamento a bordo, não agora.' },
      { q: 'O cruzeiro VIP é adequado para jantares de negócios com clientes?', a: 'Sim — o VIP é a escolha mais frequente para jantares de negócios em Istambul. Mesa privada, tranquila o suficiente para conversa, menu e vistas impressionantes. Muitos hóspedes reservam VIP + álcool ilimitado para receber clientes. Certificado halal (bom para viajantes de negócios do Golfo). Avise-nos na reserva, arranjamos uma mesa VIP mais tranquila ao fundo.' }
    ],
    cta: {
      primary: 'Reserve VIP · Pagamento a Bordo',
      secondary: 'Antes €{p.dinnerVipOriginal}, agora €{p.dinnerVip} · Cancelamento gratuito 2 horas antes',
      tertiary: 'Ver Opção Standard (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Cruzeiro Privado no Bósforo — Aluguer de Barco em Istambul (25+ convidados)',
      description: 'Cruzeiro privado no Bósforo para grupos, casamentos, eventos corporativos. Barco exclusivo, menu personalizado, duração flexível. Cancelamento gratuito.'
    },
    hero: {
      h1: 'Cruzeiro Privado no Bósforo',
      subtitle: 'Alugue o barco inteiro para o seu grupo — celebrações familiares, jantares corporativos, aniversários, noivados, casamentos. Utilização exclusiva, menu personalizado, programa flexível.',
      badge: 'Aluguer Privado · 25+ Convidados · Menu Personalizado'
    },
    intro: [
      '**O cruzeiro privado no Bósforo** significa que o barco inteiro é seu — sem outros hóspedes, sem mesas partilhadas, sem pista de dança comum. Perfeito para reuniões familiares, jantares corporativos, festas de aniversário, despedidas de solteira ou receções de casamento. O barco, a tripulação, o menu, o entretenimento e o programa adaptam-se ao seu grupo.',
      '**O nosso aluguer privado no Bósforo** suporta grupos **de 25 a 80 convidados**. Grupos mais pequenos ainda podem solicitar a experiência privada — oferecemos um preço mínimo que cobre o custo de operação do barco. Grupos maiores (tamanho de casamento) recebem preços personalizados e geralmente incluem decoração especial, banda ao vivo, serviço de bolo e duração estendida (4-5 horas em vez das 3 standard).',
      'Quer esteja a organizar um evento corporativo para clientes, uma festa de 50 anos ou uma receção de casamento sob as pontes mais icónicas de Istambul, este é **o cruzeiro privado de confiança dos organizadores de eventos de Istambul**. Avaliação 4,8★, licenciado pela TÜRSAB, tripulação totalmente falante de inglês e flexibilidade total — rota, menu, música, programa.'
    ],
    highlights: [
      { title: 'O barco inteiro, só para si', desc: 'Sem outros hóspedes. O seu grupo controla cada convés, cada mesa. Defina a sua própria música, código de vestuário, programa. A privacidade importa — respeitamo-la.' },
      { title: 'Menu personalizado e pacote de bebidas', desc: 'Trabalhe com o nosso chef para personalizar o menu: mezze específicos, escolhas de prato principal, preparações adaptadas à cultura ou necessidades dietéticas. Pacotes de álcool, copos de champanhe, bares de cocktails personalizados — tudo pode ser organizado.' },
      { title: 'Duração e partida flexíveis', desc: 'As 3 horas standard podem ser estendidas para 4-5 horas. Escolha a partida diurna às 12:00, pôr-do-sol às 17:30 ou noturna às 20:30. Quer um dia útil em vez de fim-de-semana? Sem problema — adaptamo-nos ao seu programa.' },
      { title: 'Decoração personalizada, banda, programa', desc: 'Decorações personalizadas (balões, faixas, arranjos florais), banda ao vivo em vez de DJ, serviço de bolo de casamento, coordenação com fotógrafo, discursos — adicione o que o seu evento precisa. Somos organizadores de eventos, não apenas operadores de barco.' }
    ],
    faq: [
      { q: 'Quanto custa um cruzeiro privado no Bósforo?', a: 'Para grupos 25+, geralmente €{p.dinnerStd}-€{p.dinnerVip}/pessoa + taxa de aluguer do barco em função do tamanho do grupo, data e duração. Escreva-nos pelo WhatsApp com o tamanho do grupo, data e requisitos — fornecemos preço numa hora. A maioria dos eventos encaixa-se no intervalo total €2.000-€6.000.' },
      { q: 'Qual é o tamanho mínimo do grupo para um cruzeiro privado no Bósforo?', a: 'Tecnicamente, 25 hóspedes tornam o cruzeiro privado economicamente viável. Grupos mais pequenos (10-24) podem alugar privadamente, mas pagam um preço mínimo equivalente a ~25 pessoas. Para grupos verdadeiramente pequenos (2-10), considere o cruzeiro Standard ou VIP normal — a sua mesa já é privada, apenas o barco é partilhado.' },
      { q: 'Posso organizar um casamento no cruzeiro no Bósforo?', a: 'Sim — organizamos 10-15 receções de casamento por ano. Capacidade até 80 para jantar sentado, até 100 para estilo cocktail. Coordenamos com o seu fotógrafo, organizador de casamento, banda ou chef. Serviço personalizado de bolo, pista para a primeira dança, copo de champanhe — tudo pode ser organizado. Escreva pelo WhatsApp para preço de casamento.' },
      { q: 'E quanto a eventos corporativos e jantares de equipa?', a: 'Cruzeiros privados corporativos são as nossas reservas mais frequentes. Jantar da empresa, receção de clientes, lançamento de produto, celebração de equipa — tudo funciona. Podemos fornecer fatura com decomposição de IVA, organizar transfers do hotel para a sua equipa e coordenar materiais com marca (decorações de mesa, faixas) a pedido.' },
      { q: 'Posso trazer a minha própria banda ao vivo ou DJ em vez do vosso entretenimento?', a: 'Sim — pode trazer a sua própria banda ao vivo, DJ, fotógrafo. Ou mantenha o nosso standard (sema, dançarinos folclóricos, oriental, DJ) e adicione o seu por cima. O barco tem sistema PA e pista de dança. Avise-nos com antecedência para podermos coordenar os controlos áudio.' },
      { q: 'Como solicito um preço para o cruzeiro privado no Bósforo?', a: 'O mais fácil: escreva-nos pelo WhatsApp em +90 532 244 29 22 com (1) tamanho do grupo, (2) data preferida, (3) motivo (casamento, corporativo, aniversário), (4) requisitos especiais. Respondemos numa hora durante o horário de funcionamento, 12 horas à noite. Podemos também organizar uma videochamada para discutir os detalhes.' }
    ],
    cta: {
      primary: 'WhatsApp para Preço Personalizado',
      secondary: 'Menu personalizado, grupo 25-80, duração flexível · Resposta em menos de 1 hora',
      tertiary: 'Opção Cruzeiro Standard (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bósforo para Casais desde €{p.dinnerStd} — Noite Romântica em Istambul',
      description: 'Cruzeiro com jantar no Bósforo para casais. Mesa privada, pontes iluminadas, decoração romântica opcional. Desde €{p.dinnerStd}/pessoa.'
    },
    hero: {
      h1: 'Cruzeiro no Bósforo para Casais',
      subtitle: 'Uma noite romântica no Bósforo — mesa privada, música ao vivo, pontes iluminadas passando por cima. Quer seja o seu primeiro encontro em Istambul ou o décimo aniversário, esta noite funciona.',
      badge: 'Mesa Privada · Música ao Vivo · Pagamento a Bordo'
    },
    intro: [
      '**O cruzeiro no Bósforo para casais** é a noite preferida em Istambul. Nem todos os casais celebram um aniversário — às vezes estão apenas na cidade mais romântica do mundo e querem uma noite maravilhosa juntos. Este cruzeiro oferece: mesa privada para dois, jantar turco lento de vários pratos, violino ao vivo e música acústica durante o jantar e a Ponte do Bósforo iluminada a passar devagar.',
      'A atmosfera é **calorosa, mas não excessivamente romântica** — sem música obrigatória de pedido de casamento, sem aplausos coordenados embaraçosos para "os recém-casados". Comam, bebam, conversem, vejam as luzes de Istambul. Se quer adicionar o arranjo de mesa romântica (velas, rosas, +€{p.romantic}), excelente — caso contrário, apenas o jantar em si já é especial.',
      'Quer esteja em Istambul 3 dias com o seu parceiro, celebrando um evento modesto ou a planear uma viagem exploratória para um futuro pedido de casamento — **o cruzeiro no Bósforo para casais** oferece-lhe 3 horas de noite juntos numa das cidades mais fotografadas do mundo. 4,8★, pagamento a bordo, cancelamento gratuito.'
    ],
    highlights: [
      { title: 'Mesa privada para dois', desc: 'Mesa privada para 2 pessoas, não partilhada. Prioridade nas mesas à janela para casais. Fotografias do pôr-do-sol e do Bósforo noturno mesmo à sua janela.' },
      { title: 'Jantar lento de vários pratos', desc: '10 variedades de mezze turcos, entrada quente, prato principal (salmão, robalo, frango, almôndegas ou vegetariano), bolo gelado de sobremesa. Servido lentamente ao longo de 3 horas — não tem pressa.' },
      { title: 'Violino ao vivo e música suave', desc: 'O violino ao vivo e a música turca acústica durante o jantar criam uma atmosfera íntima, adequada para conversa. Depois entra o DJ para os casais que querem dançar.' },
      { title: 'Suplementos para noites especiais', desc: 'Arranjo de mesa romântica (velas, rosas): +€{p.romantic}. Álcool local ilimitado (vinho, rakı): +€{p.unlimited}/pessoa. Transfer do hotel (ida e volta): +€{p.transfer}/pessoa. Escolha o que combina com a sua noite.' }
    ],
    faq: [
      { q: 'Este cruzeiro no Bósforo é adequado para uma noite normal, não para uma ocasião especial?', a: 'Sim — a maioria dos nossos casais não celebra nada em particular, apenas têm uma bela noite juntos. A atmosfera é calorosa e agradável sem ser excessiva. Pode adicionar o arranjo de mesa romântica (+€{p.romantic}) se quer extra, ou simplesmente desfrutar da noite standard.' },
      { q: 'Quanto custa o cruzeiro no Bósforo para 2 pessoas?', a: '2 pessoas Standard: 2 × €{p.dinnerStd} = €48,60. 2 pessoas VIP: 2 × €{p.dinnerVip} = €110,40. Adicione transfer do hotel para dois: +€{p.transfer}×2 = €20. Adicione álcool ilimitado para dois: +€{p.unlimited}×2 = €60. Sem pagamento antecipado — pagamento a bordo.' },
      { q: 'Os casais podem trazer o seu próprio vinho ou champanhe?', a: 'Não permitimos álcool do exterior (por motivos de licença operacional). Mas temos vinho local ilimitado (+€{p.unlimited}/pessoa) e podemos organizar vinhos premium importados ou champanhe por uma taxa — pergunte na reserva. Prosecco, Chianti e Cabernet são os pedidos premium populares.' },
      { q: 'É um problema se não bebermos álcool — somos invulgares?', a: 'De forma alguma — muitos casais saltam completamente o álcool, seja por motivos halal, seja simplesmente por preferência. Os refrigerantes ilimitados (água, sumo, cola) estão incluídos. Ninguém olha duas vezes se a sua mesa está sem álcool. Muitos casais muçulmanos da Arábia Saudita, Irão e Indonésia reservam este cruzeiro.' },
      { q: 'Quando é melhor o cruzeiro no Bósforo para casais — pôr-do-sol ou noite?', a: 'A noite (partida 20:30) é a mais icónica — pontes iluminadas, reflexos na água, palácios iluminados. O pôr-do-sol (partida 17:30) é mais cedo e tem beleza de hora dourada, mas o cruzeiro com jantar é especificamente às 20:30. Se quer ambos, a maioria dos casais reserva os cruzeiros do pôr-do-sol e da noite em dias diferentes.' },
      { q: 'Existe pista de dança — podemos dançar?', a: 'Sim — após o serviço do jantar (~22:30), o DJ começa e o convés aberto torna-se a zona de dança. Muitos casais dançam canções lentas sob luzes com a Ponte do Bósforo no fundo. Algumas das fotografias mais bonitas que vai tirar em Istambul.' }
    ],
    cta: {
      primary: 'Reserve a Noite Romântica · Pagamento a Bordo',
      secondary: 'Adicione o arranjo romântico (+€{p.romantic}) · Cancelamento gratuito 2 horas antes',
      tertiary: 'Ver Cruzeiro Romântico no Bósforo'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Cruzeiro Pôr-do-Sol no Bósforo desde €35 — Hora Dourada + Jantar',
      description: 'Cruzeiro pôr-do-sol no Bósforo desde Kabataş, partida 17:30. Palácios em luz dourada, jantar contínuo na noite iluminada. 3 horas. Cancelamento gratuito, pagamento a bordo.'
    },
    hero: {
      h1: 'Cruzeiro ao Pôr-do-Sol no Bósforo',
      subtitle: 'A hora mágica no Bósforo — veja o sol a descer atrás da silhueta dos minaretes enquanto passa por Dolmabahçe, a Mesquita de Ortaköy e a Ponte do Bósforo que se acende para a noite.',
      badge: 'Hora Dourada · Partida 17:30 · As Melhores Fotografias'
    },
    intro: [
      '**O cruzeiro ao pôr-do-sol no Bósforo** capta Istambul na sua pose mais fotogénica. Embarque às 17:30 e em 20 minutos o sol começa a descer atrás dos minaretes da costa europeia — colorindo o Palácio de Dolmabahçe de dourado, transformando a água do Bósforo em cobre e fazendo da Mesquita de Ortaköy uma silhueta contra o céu brilhante. Cada fotografia de smartphone neste cruzeiro parece um filme profissional.',
      '**O nosso cruzeiro ao pôr-do-sol no Bósforo** inclui um jantar turco completo que começa durante a hora dourada e continua enquanto as pontes se acendem para a noite. Quando chega a sobremesa, navega sob a Ponte do Bósforo iluminada — 30 milhões de luzes refletidas na água escura. A transição do dia para a noite, empacotada em 3 horas, é tudo o que importa.',
      'Quer seja fotógrafo a perseguir a hora dourada, viajante que quer o melhor do dia e da noite ou um casal que procura "a fotografia do momento de Istambul" — este é **o cruzeiro com jantar ao pôr-do-sol no Bósforo** recomendado aos visitantes. Avaliação 4,8★, licenciado pela TÜRSAB, pagamento a bordo, sem pagamento antecipado.'
    ],
    highlights: [
      { title: 'Hora dourada de pico — partida 17:30', desc: 'Embarque às 17:30, o pôr-do-sol ocorre por volta das 18:30 no verão / 17:00 no inverno. Os primeiros 40 minutos do cruzeiro são a hora dourada que persegue. Câmara preparada — esta é a fotografia.' },
      { title: 'Transição dia-noite incluída', desc: 'Não apenas pôr-do-sol — navegamos no crepúsculo, depois no Bósforo iluminado. Veja 3 fases diferentes de luz num único cruzeiro: dourado, hora azul e noite totalmente iluminada.' },
      { title: 'Jantar completo durante o cruzeiro', desc: '10 variedades de mezze turcos, entrada quente, prato principal (salmão, robalo, frango, almôndegas, vegetariano), bolo gelado. Mesmo menu de qualidade que o cruzeiro noturno, servido durante o pôr-do-sol.' },
      { title: 'Dolmabahçe, Ortaköy, Ponte do Bósforo — tudo brilha', desc: 'A rota passa pelo Palácio de Dolmabahçe (dourado ao pôr-do-sol), Mesquita de Ortaköy (cúpula em silhueta), Ponte do Bósforo (a acender-se), Rumeli Hisarı, Palácio de Beylerbeyi. Cada marco na sua melhor luz.' }
    ],
    faq: [
      { q: 'Quando parte o cruzeiro ao pôr-do-sol no Bósforo?', a: 'O embarque começa às 17:00, o barco parte às 17:30, regressa por volta das 20:30. Organizamos isto para acontecer exatamente quando o sol se põe na água — varia ligeiramente com a estação (verão 18:30, inverno 17:00). Ajustamos a partida em 15-30 minutos sazonalmente.' },
      { q: 'O cruzeiro ao pôr-do-sol no Bósforo é o mesmo que o cruzeiro com jantar?', a: 'Similar, mas em horas diferentes. O cruzeiro ao pôr-do-sol parte às 17:30 com o jantar servido durante o cruzeiro (hora dourada + início da noite). O cruzeiro com jantar é às 20:30 — após o anoitecer, vistas noturnas puras. Mesmo barco, mesmo menu, mesmo entretenimento — apenas iluminação diferente. Alguns hóspedes fazem ambos em dias diferentes.' },
      { q: 'Quanto custa o cruzeiro ao pôr-do-sol no Bósforo?', a: 'Cruzeiro ao pôr-do-sol Standard desde €35/pessoa (3 horas, jantar completo, entretenimento ao vivo). Opção VIP com lugar à frente do palco e mezze premium €55/pessoa. Pagamento a bordo — sem pagamento antecipado. 0-3 anos grátis, 4-8 anos a meio preço.' },
      { q: 'O cruzeiro ao pôr-do-sol é melhor do que o cruzeiro com jantar (noturno)?', a: '"Melhor" depende do que quer. Pôr-do-sol = as melhores fotografias, luz dourada, ritmo mais lento, noite mais cedo. Noite = as luzes mais icónicas (pontes iluminadas), o melhor entretenimento, jantar mais tarde. Os fotógrafos escolhem o pôr-do-sol. Os casais em noite romântica escolhem a noite. As famílias com crianças geralmente escolhem o pôr-do-sol (termina cedo).' },
      { q: 'O que levar para o cruzeiro ao pôr-do-sol?', a: 'Smartphone ou câmara para fotografias (a hora dourada implora). Casaco leve — o vento aumenta ao pôr-do-sol e o convés pode rapidamente ficar frio ao início da noite. Óculos de sol para os primeiros 30 minutos. Traje smart-casual — vai jantar, mas sem código de vestuário rigoroso.' },
      { q: 'Posso ficar no cruzeiro para ver as pontes iluminadas à noite?', a: 'O cruzeiro ao pôr-do-sol é de 3 horas (17:30-20:30), por isso no final vai ver a Ponte do Bósforo totalmente iluminada e a Torre da Donzela acesa. Se quer as vistas noturnas de PICO (20:30-23:30, todos os restaurantes e monumentos totalmente iluminados), reserve o cruzeiro com jantar das 20:30. A melhor solução: reserve ambos em noites diferentes.' }
    ],
    cta: {
      primary: 'Reserve o Cruzeiro ao Pôr-do-Sol · Pagamento a Bordo',
      secondary: 'Partida 17:30 · Pôr-do-sol + jantar incluídos · Cancelamento gratuito 2 horas antes',
      tertiary: 'Ver Cruzeiro com Jantar Noturno (20:30)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Passeio Noturno no Bósforo desde €{p.dinnerStd} — Cruzeiro com Jantar + Show ao Vivo',
      description: 'Passeio noturno de 3 horas no Bósforo com jantar e show ao vivo. Partida 20:30 de Kabataş, pontes iluminadas. Cancelamento gratuito, pagamento a bordo.'
    },
    hero: {
      h1: 'Passeio Noturno no Bósforo',
      subtitle: 'As pontes iluminadas de Istambul, os palácios acesos e a água do Bósforo como um espelho a refletir 30 milhões de luzes — o passeio noturno que define a noite em Istambul.',
      badge: 'Pontes Iluminadas · Show ao Vivo · Jantar Incluído'
    },
    intro: [
      '**O passeio noturno no Bósforo** é a atividade noturna mais recomendada em Istambul. Eis porquê: depois do anoitecer, o Bósforo transforma-se. A Ponte do Bósforo alterna entre azul, violeta e dourado. O Palácio de Dolmabahçe brilha amarelo-quente. A Mesquita de Ortaköy reflete-se perfeitamente na água preta. Cada marco de Istambul atinge o seu pico dramático à noite.',
      '**O nosso passeio noturno no Bósforo com jantar** empacota a noite icónica completa: 3 horas na água (20:30-23:30), jantar turco de vários pratos, danças folclóricas ao vivo (sema, 5 danças folclóricas, dança oriental), música ao vivo e set de DJ que anima o convés até ao fim da noite. Cada hóspede recebe o mesmo programa — sem opção "básica" que salta as melhores partes.',
      'Quer seja a sua primeira visita a Istambul e procura "a única coisa a fazer à noite", quer já tenha estado aqui antes e queira as 3 horas mais fotogénicas da cidade, este é **o passeio noturno no Bósforo** avaliado com 4,8★ por mais de 11.317 viajantes. Licenciado pela TÜRSAB, pagamento a bordo, sem pagamento antecipado.'
    ],
    highlights: [
      { title: 'O Bósforo iluminado no pico de dramatismo', desc: 'A Ponte do Bósforo muda de cor (azul, violeta, dourado), os palácios brilham amarelos, a Mesquita de Ortaköy reflete-se na água escura. 20:30-23:30 iluminação máxima para todos os marcos de Istambul.' },
      { title: 'Show turco tradicional a bordo', desc: 'Espetáculo sema, 5 danças folclóricas tradicionais (de regiões diferentes da Turquia), dança oriental, música turca ao vivo, depois set de DJ. 40 minutos de espetáculo, depois a música + o jantar continuam.' },
      { title: 'Jantar completo de vários pratos', desc: '10 variedades de mezze turcos, entrada quente (paçanga böreği), prato principal (salmão, robalo, frango, almôndegas, vegetariano — a sua escolha), sobremesa (bolo gelado), refrigerantes ilimitados. Certificado halal.' },
      { title: 'Rota completa do Bósforo', desc: 'Kabataş → Dolmabahçe → Palácio Çırağan → Mesquita de Ortaköy → Bebek → Rumeli Hisarı → Ponte Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Torre da Donzela → Kabataş.' }
    ],
    faq: [
      { q: 'Quando é o passeio noturno no Bósforo?', a: 'Embarque a partir das 19:30 no cais de Kabataş. O barco parte às 20:30, regressa por volta das 23:30. Recomendamos chegar 20 minutos mais cedo para se instalar e escolher o lugar.' },
      { q: 'Quanto custa o passeio noturno no Bósforo?', a: 'Passeio noturno Standard (3 horas, jantar, show): €{p.dinnerStd}/pessoa (antes €{p.dinnerStdOriginal}). VIP com lugar à frente do palco e menu premium: €{p.dinnerVip}/pessoa (antes €{p.dinnerVipOriginal}). 0-3 anos grátis, 4-8 anos a meio preço. Pagamento a bordo.' },
      { q: 'Qual é a diferença entre o passeio noturno no Bósforo e o cruzeiro com jantar?', a: 'A mesma coisa, palavra-chave diferente. "Passeio noturno no Bósforo" é como muitos viajantes procuram; "cruzeiro com jantar" é o termo da indústria. Mesmo barco, mesmo programa de 3 horas, mesmo menu, mesmo show. Escolha o termo de pesquisa preferido — a experiência é a mesma.' },
      { q: 'Passeio noturno no Bósforo ou cruzeiro ao pôr-do-sol — qual vale mais?', a: 'Passeio noturno = Istambul iluminada, dramatismo máximo de luz, programa completo de entretenimento, as fotografias mais icónicas das pontes iluminadas. Pôr-do-sol = hora dourada, ritmo mais lento, termina às 20:30. Se faz apenas um: o passeio noturno é mais icónico. Muitos fazem ambos em dias diferentes.' },
      { q: 'Posso fazer o passeio noturno no Bósforo no meu primeiro dia em Istambul?', a: 'Sim — recomendamos. Muitos viajantes reservam o passeio noturno para a sua primeira noite porque oferece uma orientação completa: todos os marcos principais a partir da água, com boa comida e entretenimento. Mais fácil do que lutar com o jet lag a tentar fazer turismo a pé no Dia 1. Transfer do hotel disponível dos bairros centrais.' },
      { q: 'Não falo turco — o passeio é em inglês?', a: 'A tripulação fala inglês. O entretenimento (sema, danças folclóricas, música) não requer linguagem. O menu do jantar está em inglês. A reserva via WhatsApp / Telegram funciona em vários idiomas (inglês, árabe, russo, alemão, francês, espanhol). Não é necessário turco.' }
    ],
    cta: {
      primary: 'Reserve o Passeio Noturno · Pagamento a Bordo',
      secondary: 'Partida 20:30 · 3 horas · Jantar + show incluídos · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Cruzeiro com Jantar em Istambul desde €{p.dinnerStd} — Passeio Noturno no Bósforo',
      description: 'Cruzeiro com jantar de 3 horas em Istambul no Bósforo. Menu turco de vários pratos, folclore ao vivo, pontes iluminadas. Cancelamento gratuito, pagamento a bordo. 11.317 avaliações.'
    },
    hero: {
      h1: 'Cruzeiro com Jantar em Istambul',
      subtitle: 'O melhor cruzeiro com jantar em Istambul — 3 horas no Bósforo, jantar turco de vários pratos, entretenimento ao vivo e as vistas noturnas dos marcos mais icónicos da cidade.',
      badge: '4,8★ · 11.317 avaliações · TÜRSAB A-17672'
    },
    intro: [
      'À procura de um **cruzeiro com jantar em Istambul**? Encontrou o que a maioria dos viajantes recomenda. A nossa noite de 3 horas no Bósforo combina um jantar turco completo de vários pratos, danças folclóricas ao vivo e as vistas mais fotogénicas da cidade — tudo a partir de um barco confortável que parte às 20:30 do cais de Kabataş.',
      'A experiência do **cruzeiro com jantar em Istambul**: embarca às 19:30, senta-se, vê o Palácio de Dolmabahçe enquanto partimos, o jantar começa quando nos aproximamos da Mesquita de Ortaköy, o show começa (sema, danças folclóricas, oriental), e quando chega a sobremesa está sob a Ponte do Bósforo iluminada. À meia-noite regressa a Kabataş com uma colagem icónica de fotografias e o estômago cheio.',
      '€{p.dinnerStd}/pessoa para o cruzeiro Standard (antes €{p.dinnerStdOriginal}) ou €{p.dinnerVip}/pessoa para VIP com lugares à frente do palco (antes €{p.dinnerVipOriginal}). Pagamento a bordo — sem pagamento antecipado, sem risco. Licenciado pela TÜRSAB A-17672, avaliado com 4,8★ por mais de 11.317 viajantes.'
    ],
    highlights: [
      { title: 'Jantar turco completo de vários pratos', desc: '10 variedades de mezze, entrada quente, prato principal (salmão/robalo/frango/almôndegas/vegetariano), bolo gelado. Certificado halal. Refrigerantes ilimitados incluídos.' },
      { title: 'Show de danças folclóricas turcas ao vivo', desc: 'Espetáculo sema, 5 danças folclóricas tradicionais, dança oriental, música turca ao vivo, DJ. 40 minutos de espetáculo, música de fundo contínua.' },
      { title: 'Rota noturna completa no Bósforo', desc: 'Passeio de 3 horas: Dolmabahçe, Çırağan, Mesquita de Ortaköy, Ponte do Bósforo, Bebek, Rumeli Hisarı, Ponte FSM, Beylerbeyi, Üsküdar, Torre da Donzela. Ambas as costas, europeia e asiática.' },
      { title: 'Desde €{p.dinnerStd} — pagamento a bordo', desc: 'Standard: €{p.dinnerStd} (antes €{p.dinnerStdOriginal}). VIP com menu premium: €{p.dinnerVip} (antes €{p.dinnerVipOriginal}). Sem pagamento antecipado. Cancelamento gratuito até 2 horas antes da partida.' }
    ],
    faq: [
      { q: 'Quanto custa o cruzeiro com jantar em Istambul?', a: 'O nosso cruzeiro com jantar Standard €{p.dinnerStd}/pessoa (preço normal €{p.dinnerStdOriginal}). VIP com lugar à frente do palco e menu premium €{p.dinnerVip}/pessoa (preço normal €{p.dinnerVipOriginal}). 0-3 anos grátis, 4-8 anos com 50% de desconto. Pagamento a bordo — sem pagamento antecipado.' },
      { q: 'O que está incluído no preço do cruzeiro com jantar em Istambul?', a: 'Passeio de 3 horas no Bósforo, jantar turco de vários pratos (mezze, entrada quente, prato principal, sobremesa), refrigerantes ilimitados, show de danças folclóricas ao vivo (sema, danças folclóricas, oriental), música ao vivo + DJ, acesso ao convés aberto, taxas incluídas. O transfer do hotel e o álcool são suplementos opcionais.' },
      { q: 'De onde parte o cruzeiro com jantar em Istambul?', a: 'Cais de Kabataş, Istambul — na costa europeia, perto do Palácio de Dolmabahçe. O local exato de encontro é comunicado via WhatsApp / Telegram após a reserva. Os vídeos de caminhada da estação de elétrico de Dolmabahçe e da estação de elétrico de Kabataş encontram-se na secção do ponto de encontro acima.' },
      { q: 'Quanto dura o cruzeiro com jantar — e quando começa?', a: 'Total 3 horas. Embarque a partir das 19:30, o barco parte exatamente às 20:30, regressa por volta das 23:30. Recomendamos chegar 15-20 minutos mais cedo para se instalar e escolher o lugar.' },
      { q: 'Tenho de reservar com antecedência ou posso ir diretamente?', a: 'Reserve com antecedência — os lugares enchem-se, especialmente aos fins-de-semana e feriados. As reservas no próprio dia são frequentemente possíveis, mas não garantidas. O formulário nesta página assegura-lhe um lugar em menos de 1 minuto. Pagamento a bordo, por isso não há risco financeiro em reservar cedo.' },
      { q: 'O cruzeiro com jantar em Istambul é adequado para vegetarianos / halal / restrições alimentares?', a: 'Sim — toda a carne é certificada halal. Prato principal vegetariano (falafel, batatas fritas, pilaf de bulgur, guisado de legumes, rodelas de cebola) disponível sem custo adicional. As alergias podem ser acomodadas se anunciadas na reserva. O álcool é um suplemento opcional, nunca imposto.' }
    ],
    cta: {
      primary: 'Reserve o Cruzeiro com Jantar · Pagamento a Bordo',
      secondary: '4,8★ · Licenciado pela TÜRSAB · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Passeio Noturno em Istambul desde €{p.dinnerStd} — Cruzeiro com Jantar no Bósforo + Show',
      description: 'Cruzeiro de 3 horas no Bósforo com jantar e show ao vivo. Partida 20:30 de Kabataş. Cancelamento gratuito, pagamento a bordo. 11.317 avaliações. Transfer do hotel opcional.'
    },
    hero: {
      h1: 'Passeio em Istambul à Noite',
      subtitle: 'O passeio noturno recomendado em primeiro lugar pelos habitantes de Istambul — cruzeiro no Bósforo de 3 horas com jantar, entretenimento ao vivo e as vistas iluminadas mais icónicas da cidade.',
      badge: 'A Noite Icónica de Istambul · 3 Horas · Jantar Incluído'
    },
    intro: [
      'Um **passeio em Istambul à noite** tem de fazer três coisas: mostrar-lhe os marcos icónicos da cidade, alimentá-lo bem e entretê-lo. O nosso cruzeiro com jantar no Bósforo faz as três numa só noite de 3 horas — e é por isso que a maioria dos guias de Istambul o recomenda como a experiência #1 de passeio noturno.',
      'A rota do **passeio em Istambul à noite** cobre os melhores marcos iluminados: Palácio de Dolmabahçe, Mesquita de Ortaköy, Ponte do Bósforo (muda de cor), bairro de Bebek, Rumeli Hisarı, Ponte FSM, Palácio de Beylerbeyi, costa asiática de Üsküdar e Torre da Donzela ao longe. A maioria dos passeios pela cidade mostram-lhe estes a partir do autocarro — nós mostramo-los a partir da água, de onde são mais dramáticos.',
      'O jantar está incluído (menu turco de vários pratos), show de danças folclóricas turcas ao vivo, sema, dança oriental e set de DJ. Se está em Istambul 2-3 dias, esta é a única noite que dá o impacto mais forte. 4,8★ de mais de 11.317 viajantes, pagamento a bordo, sem pagamento antecipado.'
    ],
    highlights: [
      { title: 'Todas as vistas noturnas icónicas de Istambul', desc: 'Palácio de Dolmabahçe, Mesquita de Ortaköy, Ponte do Bósforo iluminada, Rumeli Hisarı, Ponte FSM, Palácio de Beylerbeyi, Torre da Donzela. Cada marco principal na iluminação noturna de pico.' },
      { title: 'Jantar turco completo incluído', desc: '10 mezze, entrada quente, prato principal (salmão/robalo/frango/almôndegas/vegetariano), sobremesa, refrigerantes ilimitados. Certificado halal. Avaliado a €{p.dinnerStd}/pessoa — tudo incluído.' },
      { title: 'Danças folclóricas ao vivo + sema + oriental', desc: 'Entretenimento turco tradicional: espetáculo Mevlana sema, 5 danças folclóricas regionais, dança oriental, música ao vivo, DJ. 40 minutos de espetáculo, música de fundo toda a noite.' },
      { title: 'Fácil para a primeira vez em Istambul', desc: 'Ponto de encontro central (cais de Kabataş), transfer do hotel (+€{p.transfer}/pessoa), tripulação falante de inglês, pagamento a bordo. Zero stress logístico. Venha, divirta-se, vá.' }
    ],
    faq: [
      { q: 'Qual é o melhor passeio noturno em Istambul?', a: 'O cruzeiro com jantar no Bósforo está consistentemente classificado em #1. As razões: (1) oferece-lhe todas as vistas noturnas icónicas a partir da água, (2) inclui o jantar e o show num único pacote, (3) 3 horas são suficientes para ver muito sem cansaço, (4) ponto de encontro central, (5) pagamento a bordo reduz o atrito da reserva. A maioria dos guias de viagem de Istambul recomenda-o como "a única coisa obrigatória a fazer à noite".' },
      { q: 'Quanto custa o passeio em Istambul à noite?', a: 'O nosso passeio noturno com jantar no Bósforo: Standard €{p.dinnerStd}/pessoa, VIP €{p.dinnerVip}/pessoa. Incluído o passeio, o jantar, o entretenimento, os refrigerantes. Opcional: álcool +€{p.unlimited}/pessoa, transfer do hotel +€{p.transfer}/pessoa. Pagamento a bordo — sem pagamento antecipado.' },
      { q: 'O passeio em Istambul à noite é seguro para viajantes solo?', a: 'Sim — muito seguro. Barco licenciado pela TÜRSAB, tripulação profissional falante de inglês, CCTV no convés, coletes salva-vidas disponíveis. Muitos viajantes solo reservam este passeio. Jante numa mesa partilhada ou privada (à escolha) e a noite é inclusiva — conheça outros viajantes se quiser ou guarde-se para si.' },
      { q: 'Qual é a melhor altura para um passeio noturno em Istambul?', a: 'O nosso passeio com jantar no Bósforo é 20:30-23:30 (3 horas). Este é o momento de iluminação de pico para todos os marcos de Istambul — pontes totalmente iluminadas, palácios brilhantes, a lua na água. Se quer mais cedo (hora dourada), considere o passeio ao pôr-do-sol das 17:30.' },
      { q: 'Como chego ao ponto de encontro para o passeio noturno em Istambul?', a: 'O ponto de encontro é o cais de Kabataş (costa europeia central, perto do Palácio de Dolmabahçe). De elétrico: T1 até à estação Kabataş (final da linha). De táxi: ~15 min de Taksim. A pé: 20 min de Taksim pelo Bulevar İnönü. Nesta página existem vídeos com as direções a pé. Transfer do hotel disponível com +€{p.transfer}/pessoa se preferir.' },
      { q: 'Posso reservar o passeio em Istambul à noite no próprio dia?', a: 'Frequentemente sim, especialmente em dias úteis. Os fins-de-semana enchem-se mais depressa. O formulário de reserva nesta página permite-lhe verificar a disponibilidade para esta noite e reservar em menos de 1 minuto. Para pedidos urgentes no próprio dia, escreva pelo WhatsApp em +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Reserve o Passeio Noturno · Pagamento a Bordo',
      secondary: 'Desde €{p.dinnerStd}/pessoa · Jantar + show incluídos · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Passeio de Barco em Istambul desde €{p.dinnerStd} — Bósforo + Jantar + Show',
      description: 'Passeio de barco de 3 horas: cruzeiro no Bósforo, jantar turco completo, folclore ao vivo, paisagens noturnas iluminadas. Cancelamento gratuito, pagamento a bordo. 11.317 avaliações.'
    },
    hero: {
      h1: 'Passeio de Barco em Istambul',
      subtitle: 'O passeio de barco mais reservado em Istambul pelos viajantes — cruzeiro no Bósforo com comida turca, entretenimento ao vivo e as vistas icónicas da cidade a partir da água.',
      badge: '4,8★ · TÜRSAB A-17672 · Pagamento a Bordo'
    },
    intro: [
      'Quando procura "passeio de barco em Istambul", procura a única coisa que define a cidade a partir da água: o Bósforo. O nosso passeio de barco no Bósforo de 3 horas leva-o por cada marco principal de Istambul — Palácio de Dolmabahçe, Mesquita de Ortaköy, Ponte do Bósforo, Rumeli Hisarı, Palácio de Beylerbeyi e Torre da Donzela — com jantar turco completo e entretenimento ao vivo.',
      'Ao contrário dos muitos ferries turísticos de 1 hora que cobrem menos do Bósforo e saltam o jantar e o entretenimento, **o nosso passeio de barco em Istambul** é uma experiência noturna completa: embarque às 19:30 no cais de Kabataş, passeio até à meia-noite, 10 mezze, prato principal, sobremesa, sema, danças folclóricas, dança oriental e DJ. Recebe também a saída noturna como parte do passeio.',
      'Quer tenha uma noite ou uma semana inteira em Istambul, este **passeio de barco em Istambul** faz o trabalho. 4,8★ de mais de 11.317 viajantes, licenciado pela TÜRSAB (A-17672), menu certificado halal e pagamento a bordo — sem compromisso financeiro até estar satisfeito com a experiência.'
    ],
    highlights: [
      { title: 'Todos os marcos principais do Bósforo', desc: 'Dolmabahçe, Çırağan, Mesquita de Ortaköy, Ponte do Bósforo, Bebek, Rumeli Hisarı, Ponte FSM, Palácio de Beylerbeyi, Üsküdar, Torre da Donzela. Ambas as costas, europeia e asiática, num único passeio.' },
      { title: 'Jantar + show incluídos', desc: 'Não apenas um passeio de barco — jantar turco completo de vários pratos, espetáculos de danças folclóricas ao vivo, sema, dança oriental, DJ. O que torna as 3 horas divertidas, não apenas turismo.' },
      { title: 'Partida noturna (a melhor iluminação)', desc: 'A partida das 20:30 capta o Bósforo iluminado em pleno brilho — pontes, palácios, mesquitas todos iluminados. Mais dramático do que os passeios diurnos que mostram os mesmos marcos em luz plana.' },
      { title: 'Reserva fácil, pagamento fácil', desc: 'Reserve com o formulário nesta página em menos de 1 minuto. Pagamento a bordo — sem pagamento antecipado. Transfer do hotel disponível desde +€{p.transfer}/pessoa. Cancelamento gratuito 2 horas antes da partida.' }
    ],
    faq: [
      { q: 'Qual é o melhor passeio de barco em Istambul?', a: 'O cruzeiro com jantar no Bósforo está consistentemente classificado em #1. Cobre todos os marcos principais, inclui o jantar e o entretenimento e funciona à noite quando os marcos estão iluminados. Outras opções (ferries hop-on, barcos turísticos matinais) cobrem rotas mais curtas, saltam o jantar e não incluem entretenimento. Para uma noite em Istambul, este é o passeio de barco mais completo.' },
      { q: 'Quanto dura o passeio de barco em Istambul?', a: '3 horas. Embarque a partir das 19:30 no cais de Kabataş, partida às 20:30, regresso ~23:30. Cobre o Bósforo completo de Dolmabahçe a Rumeli Hisarı e de volta. Tempo suficiente para jantar completo + show sem cansaço.' },
      { q: 'Quanto custa o passeio de barco em Istambul?', a: 'O nosso passeio de barco com jantar: Standard €{p.dinnerStd}/pessoa (antes €{p.dinnerStdOriginal}), VIP com menu premium €{p.dinnerVip}/pessoa (antes €{p.dinnerVipOriginal}). 0-3 anos grátis, 4-8 anos a meio preço. Pagamento a bordo. O álcool e o transfer do hotel são suplementos opcionais.' },
      { q: 'De onde partem os passeios de barco em Istambul?', a: 'O nosso barco parte do cais de Kabataş, costa europeia central de Istambul, perto do Palácio de Dolmabahçe. Acessível pelo elétrico T1 (estação Kabataş), táxi 15 min de Taksim ou a pé 20 min de Taksim. Transfer do hotel disponível dos bairros centrais com +€{p.transfer}/pessoa.' },
      { q: 'Este passeio de barco é adequado para famílias com crianças?', a: 'Sim — muito amigo da família. Crianças 0-3 anos grátis, 4-8 anos 50% de desconto. Zona interior coberta, menu infantil a pedido e entretenimento (sema, danças folclóricas) cativante para crianças. Muitas famílias de todo o mundo reservam este passeio.' },
      { q: 'Tenho de levar alguma coisa para o passeio de barco?', a: 'Passaporte ou cartão de identidade (para registo no barco), casaco leve (o convés pode estar fresco), calçado confortável se planeia dançar. Smartphone para fotografias. Dinheiro ou cartão para pagamento a bordo (ambos aceites). Tudo o resto — comida, bebida, entretenimento — está a bordo.' }
    ],
    cta: {
      primary: 'Reserve o Passeio de Barco · Pagamento a Bordo',
      secondary: '3 horas · Jantar + show · Desde €{p.dinnerStd}/pessoa · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Excursão no Bósforo desde €{p.dinnerStd} — Cruzeiro com Jantar em Istambul + Show',
      description: 'Excursão de 3 horas no Bósforo: jantar turco, folclore ao vivo, paisagens noturnas iluminadas. Partida 20:30 de Kabataş. Cancelamento gratuito, pagamento a bordo. 11.317 avaliações.'
    },
    hero: {
      h1: 'Excursão no Bósforo',
      subtitle: 'A excursão no Bósforo mais recomendada pelos viajantes — cruzeiro com jantar de 3 horas que cobre cada marco principal de Istambul, com comida, entretenimento e vistas noturnas.',
      badge: 'Experiência Completa no Bósforo · Partida Noturna'
    },
    intro: [
      'Uma **excursão no Bósforo** pode significar um ferry turístico de 1 hora ou uma noite completa de passeio com jantar — nós fazemos a segunda e a maioria dos viajantes considera-a a experiência de melhor valor. 3 horas, €{p.dinnerStd}/pessoa, jantar e entretenimento incluídos. Não passa apenas pelos marcos — come, vê o show e desfruta da noite.',
      'A rota da **nossa excursão no Bósforo** cobre tudo o que vale a pena ver: Palácio de Dolmabahçe (residência do sultão otomano do século XIX), Mesquita de Ortaköy (uma das mesquitas mais fotografadas de Istambul), Ponte do Bósforo (muda de cor à noite), Rumeli Hisarı (construído por Fatih Sultan Mehmet em 1452), Palácio de Beylerbeyi (costa asiática) e Torre da Donzela numa pequena ilha. Tudo explicado pela tripulação falante de inglês.',
      'Quer esteja em Istambul 24 horas ou uma semana, esta é a **excursão no Bósforo** que lhe dá mais numa única noite. Avaliação 4,8★ de mais de 11.317 viajantes, licenciado pela TÜRSAB A-17672, menu amigo halal, pagamento a bordo — sem risco de pagamento antecipado.'
    ],
    highlights: [
      { title: 'O Bósforo completo num único golpe', desc: 'Costa europeia (Dolmabahçe, Ortaköy, Rumeli Hisarı), costa asiática (Beylerbeyi, Üsküdar), ambas as pontes do Bósforo, Torre da Donzela. Cada marco principal visível em 3 horas.' },
      { title: 'Jantar + entretenimento incluídos', desc: 'Não apenas ferry turístico — jantar turco completo com mezze, prato principal, sobremesa. Show de danças folclóricas ao vivo, sema, oriental, DJ. Valor de entretenimento para além da paisagem.' },
      { title: 'Noite = a melhor iluminação', desc: 'As excursões diurnas no Bósforo mostram-lhe os marcos em luz plana. As excursões noturnas captam tudo iluminado: palácios brilhantes, pontes coloridas, mesquitas refletidas na água escura. Fotografias melhores, mais dramáticas.' },
      { title: 'Desde €{p.dinnerStd} — pagamento a bordo', desc: 'Não é necessário pagamento antecipado. Pagamento a bordo (dinheiro ou cartão). Cancelamento gratuito até 2 horas antes da partida. 0-3 anos grátis, 4-8 anos a meio preço. Preços transparentes.' }
    ],
    faq: [
      { q: 'Quais são as melhores excursões no Bósforo em Istambul?', a: 'O passeio com jantar noturno está consistentemente nos primeiros lugares. As opções diurnas (ferries em loop de 1 hora, barcos turísticos de 2 horas) mostram menos e não incluem jantar. Pelo valor, é difícil bater um passeio de 3 horas com jantar, show e ponto de encontro central. O custo do nosso passeio €{p.dinnerStd} elimina a necessidade de uma noite separada com jantar + entretenimento.' },
      { q: 'Quanto dura uma excursão no Bósforo?', a: 'A nossa excursão no Bósforo dura 3 horas no total (partida 20:30, regresso 23:30). Existem opções mais curtas (ferries turísticos de 1 hora, passeios de 90 minutos), mas saltam o jantar e o entretenimento. Para a experiência noturna completa, 3 horas são ideais — suficiente para ver tudo sem cansaço.' },
      { q: 'A excursão no Bósforo vale a pena?', a: 'Sim — quase todos os guias de viagem de Istambul listam "cruzeiro no Bósforo" no top 5 das coisas obrigatórias. A cidade foi construída em torno deste estreito; se não viu o Bósforo a partir da água, não viu realmente Istambul. O nosso passeio noturno específico adiciona jantar e entretenimento, tornando uma saída noturna completa em vez de apenas turismo.' },
      { q: 'O que levar para a excursão no Bósforo?', a: 'Passaporte ou cartão de identidade (para registo no barco), casaco leve (à noite o convés está fresco), smartphone/câmara, calçado confortável para a pista de dança. Dinheiro ou cartão para pagamento. Tudo o resto está a bordo. Transfer do hotel disponível com +€{p.transfer}/pessoa se não quer usar transportes públicos.' },
      { q: 'A excursão no Bósforo é adequada para crianças?', a: 'Sim — muito amiga das crianças. Crianças 0-3 anos grátis (transfer incluído), 4-8 anos 50% de desconto. Zona interior coberta, menu infantil a pedido e entretenimento delicado e cativante. Muitas famílias reservam esta excursão como ponto alto da sua viagem a Istambul.' },
      { q: 'Quais são as paragens da excursão no Bósforo?', a: 'É um passeio contínuo — não paramos nos marcos (sem desembarque). O barco passa por cada marco, a tripulação explica o que está a ver, descontrai-se à mesa ou sai para o convés aberto para fotografias. Sem filas, sem caminhar — apenas 3 horas sem problemas na água.' }
    ],
    cta: {
      primary: 'Reserve a Excursão no Bósforo · Pagamento a Bordo',
      secondary: '3 horas · Jantar + show · Cancelamento gratuito 2 horas antes · Licenciado pela TÜRSAB',
      tertiary: 'Verificar Disponibilidade'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Bilhetes Cruzeiro Bósforo desde €{p.dinnerStd} — Pagamento a Bordo',
      description: 'Bilhetes diretos para o cruzeiro no Bósforo. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Sem pagamento antecipado, pagamento a bordo. Cancelamento gratuito até 2h antes.'
    },
    hero: {
      h1: 'Bilhetes para Cruzeiro no Bósforo',
      subtitle: 'Salte as taxas dos intermediários — compre os bilhetes para o cruzeiro no Bósforo diretamente connosco. Sem pagamento antecipado, pagamento a bordo, cancelamento gratuito até 2 horas antes da partida.',
      badge: 'Reserva Direta · Sem Pagamento Antecipado · 40% DESCONTO'
    },
    intro: [
      'À procura de **bilhetes para o cruzeiro no Bósforo**? Compre diretamente. Os nossos bilhetes são €{p.dinnerStd} (Standard) ou €{p.dinnerVip} (VIP) — 40% de desconto sobre o preço normal (€{p.dinnerStdOriginal} e €{p.dinnerVipOriginal}). Os sites de reservas de terceiros adicionam geralmente 20-40% de comissão. Reservando diretamente, poupa — e ainda paga a bordo.',
      'O nosso processo de **bilhetes para o cruzeiro no Bósforo**: preencha o formulário nesta página em menos de 1 minuto (data, número de hóspedes, pacote, contacto), confirmamos instantaneamente via WhatsApp / Telegram, aparece no cais de Kabataş às 19:30, paga a bordo, desfruta do cruzeiro com jantar de 3 horas. Sem bilhete físico para imprimir, sem cupão para receber por e-mail — a confirmação é o seu bilhete.',
      'Quer reserve o cruzeiro com jantar para esta noite ou reserve para uma data específica na próxima semana, **os bilhetes diretos para o cruzeiro no Bósforo** são a forma mais rápida. Avaliação 4,8★, licenciado pela TÜRSAB (A-17672), menu certificado halal e suporta suplementos de transfer do hotel e álcool.'
    ],
    highlights: [
      { title: 'Reserva direta — sem taxas de intermediário', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Os sites de terceiros cobram €30-80+ pelo mesmo passeio. Poupe reservando diretamente connosco. Sem taxas escondidas, sem acréscimo de comissão.' },
      { title: 'Pagamento a bordo — sem pagamento antecipado', desc: 'Reserve agora o lugar, pague quando embarcar no barco. Dinheiro ou cartão aceites. Grátis se cancelar 2+ horas antes da partida. Zero risco financeiro em reservar cedo.' },
      { title: 'Confirmação em menos de 1 minuto', desc: 'Preencha o formulário → confirmamos via WhatsApp / Telegram. Sem cupão PDF de e-mail para imprimir. A nossa mensagem é o seu bilhete. Chegue ao cais às 19:30.' },
      { title: 'Preço atual de lançamento 40% DESCONTO', desc: 'Standard antes €{p.dinnerStdOriginal}, agora €{p.dinnerStd}. VIP antes €{p.dinnerVipOriginal}, agora €{p.dinnerVip}. 40% de desconto porque reserva diretamente. Não é um truque com prazo limitado — é o nosso preço standard de reserva direta.' }
    ],
    faq: [
      { q: 'Quanto custam os bilhetes para o cruzeiro no Bósforo?', a: 'Standard: €{p.dinnerStd}/pessoa (normal €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/pessoa (normal €{p.dinnerVipOriginal}). Inclui o passeio de 3 horas, jantar turco de vários pratos, show de danças folclóricas ao vivo, refrigerantes ilimitados. 0-3 anos grátis, 4-8 anos 50% de desconto. Pagamento a bordo — sem pagamento antecipado.' },
      { q: 'Onde posso comprar bilhetes para o cruzeiro no Bósforo?', a: 'Diretamente nesta página — preencha o formulário de reserva, confirmamos instantaneamente via WhatsApp / Telegram. Pagamento a bordo. As plataformas de terceiros (Viator, GetYourGuide, Klook) também vendem bilhetes, mas geralmente cobram €30-80+ — é o acréscimo do intermediário. Direto é o mais barato e mais rápido.' },
      { q: 'Tenho de imprimir o bilhete para o cruzeiro no Bósforo?', a: 'Não — não é necessário bilhete físico ou cupão. Após a reserva, enviamos-lhe uma confirmação via WhatsApp (ou Telegram) com o ponto de encontro, hora e nome da reserva. Apenas mostre o telefone no cais. Pronto.' },
      { q: 'Posso cancelar ou devolver o bilhete para o cruzeiro no Bósforo?', a: 'Sim — cancelamento gratuito até 2 horas antes da partida. Apenas escreva pelo WhatsApp. Como ainda não pagou (pagamento a bordo), não é necessário reembolso — simplesmente não venha, sem custos. Muito mais flexível do que os bilhetes pagos antecipadamente de terceiros.' },
      { q: 'Os bilhetes para o cruzeiro no Bósforo estão disponíveis no próprio dia?', a: 'Frequentemente sim, especialmente em dias úteis. Os fins-de-semana e feriados enchem-se mais depressa. Verifique a disponibilidade através do formulário de reserva — atualiza-se em tempo real. A reserva no próprio dia é geralmente possível com algumas horas antes da partida das 20:30. Para pedidos urgentes, WhatsApp.' },
      { q: 'Os bilhetes para crianças no cruzeiro no Bósforo são grátis?', a: 'Crianças **0-3 anos completamente grátis** (sem taxas, sem custos escondidos, transfer incluído). **4-8 anos 50% de desconto** (€{p.dinnerStd}/2 = €12 no Standard). **9+ anos preço inteiro de adulto.** Preços fixos e transparentes — sem truques de "suplemento para bebé".' }
    ],
    cta: {
      primary: 'Comprar Bilhetes · Pagamento a Bordo',
      secondary: 'Reserva direta · Sem pagamento antecipado · Cancelamento gratuito 2 horas antes',
      tertiary: 'Verificar Disponibilidade'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bósforo Last Minute desde €{p.dinnerStd} — Reserve Hoje, Pague a Bordo',
      description: 'Reserva de cruzeiro no Bósforo no próprio dia. Confirmação WhatsApp em minutos. Partida 20:30 de Kabataş. Cancelamento gratuito, pagamento a bordo. 11.317 avaliações.'
    },
    hero: {
      h1: 'Cruzeiro no Bósforo no Último Momento',
      subtitle: 'Disponibilidade para esta noite, confirmada em poucos minutos. Sem pagamento antecipado, sem cupão pré-impresso — apenas venha ao cais e desfrute da noite.',
      badge: 'Reserva no Próprio Dia · Confirmado em Poucos Minutos · Pagamento a Bordo'
    },
    intro: [
      'Aterrou em Istambul esta tarde e quer uma bela noite hoje? **O cruzeiro no Bósforo no último momento** funciona. Reservamos especialmente lugares para reservas no próprio dia, porque sabemos que muitos viajantes decidem de manhã. Preencha o formulário aqui, confirmamos via WhatsApp em poucos minutos, aparece no cais de Kabataş às 19:30, paga a bordo, desfruta.',
      '**O nosso cruzeiro no Bósforo no último momento** tem o mesmo programa noturno que as reservas antecipadas: 3 horas na água (20:30-23:30), jantar turco de vários pratos, show de danças folclóricas ao vivo, sema, dança oriental, DJ. Palácio de Dolmabahçe iluminado, Mesquita de Ortaköy, Ponte do Bósforo — as mesmas vistas icónicas. Mesmo preço €{p.dinnerStd} Standard ou €{p.dinnerVip} VIP.',
      'O cancelamento no próprio dia é gratuito até 2 horas antes da partida, porque **o pagamento a bordo** significa que ainda não prometeu nada. Reservou às 14:00 e mudou os seus planos até às 19:00? Apenas escreva pelo WhatsApp — sem reembolso, sem problema. Esta é a flexibilidade do **passeio em Istambul no último momento** que os viajantes apreciam.'
    ],
    highlights: [
      { title: 'Lugares ainda disponíveis para esta noite', desc: 'Reservamos 5-10 lugares por dia para reservas no próprio dia. Verifique o formulário acima — disponibilidade em tempo real. Se o passeio de hoje estiver cheio, o de amanhã está geralmente aberto.' },
      { title: 'Confirmação em menos de 5 minutos', desc: 'Preencha o formulário → mensagem de confirmação WhatsApp/Telegram → pronto. Sem cupão de e-mail para esperar, sem código QR para imprimir. A nossa mensagem é o seu bilhete.' },
      { title: 'Zero pagamento até embarcar no barco', desc: 'Pagamento a bordo, dinheiro ou cartão. Se não vier (mudança de planos, doença, tempo), sem custos. Cancelamento gratuito até 2 horas antes da partida. Verdadeiramente amigo do último momento.' },
      { title: 'Transfer do hotel no próprio dia frequentemente disponível', desc: 'O transfer do hotel requer normalmente notificação de 24 horas, mas para reservas no próprio dia entre as 14:00-18:00 podemos frequentemente organizar a recolha com +€{p.transfer}/pessoa. Para pedidos urgentes de transfer, WhatsApp.' }
    ],
    faq: [
      { q: 'Posso mesmo reservar o cruzeiro no Bósforo para esta noite?', a: 'Sim — frequentemente. Reservamos lugares para reservas no próprio dia. Verifique o formulário acima para a disponibilidade desta noite. Se houver lugares disponíveis, pode reservar até às 18:00 (3 horas antes da partida). Os fins-de-semana são mais movimentados — reserve mais cedo no dia se possível.' },
      { q: 'Quão last minute posso reservar?', a: 'As reservas permanecem abertas até às 18:00 para o barco das 20:30. Após as 18:00, escreva-nos diretamente pelo WhatsApp em +90 532 244 29 22 — se houver lugares livres, podemos confirmar manualmente. Após as 19:30 é muito apertado, a menos que já esteja no cais de Kabataş e possa embarcar rapidamente.' },
      { q: 'O cruzeiro no Bósforo no último momento é mais caro?', a: 'Não — mesmo preço que a reserva antecipada. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Não fazemos "preços dinâmicos" ou sobretaxas para o último momento. Mesmo barco, mesmo jantar, mesmo show, mesmo preço.' },
      { q: 'O que acontece se o passeio desta noite estiver cheio?', a: 'O passeio de amanhã está geralmente aberto — operamos 365 dias por ano, todos os dias. Pode reservar para amanhã e ainda ser "último momento", significando que acabou de decidir. Os passeios em dias úteis têm mais espaço do que aos fins-de-semana.' },
      { q: 'Podem organizar o transfer do hotel no último momento?', a: 'O transfer no próprio dia é possível até cerca das 18:00 para o passeio das 20:30. Após as 18:00, podemos não ter motorista disponível — neste caso, pode apanhar um táxi para o cais de Kabataş (15 min de Taksim, 10 min de Sultanahmet, ~€10-15). Central e fácil.' },
      { q: 'Se já estou em Kabataş e quero embarcar?', a: 'Se está no cais e há lugares livres, pode simplesmente embarcar. Escreva-nos pelo WhatsApp ou pergunte à tripulação — se houver lugar, adicionamo-lo. Mesmo preço, pagamento a bordo. Em termos turísticos chama-se "walk-on" — funciona aqui.' }
    ],
    cta: {
      primary: 'Reserve para Esta Noite · Pagamento a Bordo',
      secondary: 'Reserva no próprio dia · Confirmado em poucos minutos · Cancelamento gratuito 2 horas antes',
      tertiary: 'WhatsApp para Reservas Urgentes'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Preço Cruzeiro Istambul desde €{p.dinnerStd} — Tarifas Transparentes',
      description: 'Preços do cruzeiro no Bósforo em Istambul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Crianças 0-3 grátis, 4-8 meio preço. Suplementos transparentes.'
    },
    hero: {
      h1: 'Preço Cruzeiro Istambul',
      subtitle: 'Preços transparentes, sem taxas escondidas. Standard €{p.dinnerStd}/pessoa, VIP €{p.dinnerVip}/pessoa — e paga a bordo, não agora.',
      badge: 'Transparente · 40% DESCONTO Direto · 0-3 Anos Grátis'
    },
    intro: [
      '**Os preços dos cruzeiros em Istambul** variam muito — desde ferries económicos de €15 que saltam o jantar até iates resort de €150+. O nosso preço está no meio e oferece o melhor valor: €{p.dinnerStd} para Standard com cruzeiro completo com jantar e show de 3 horas, €{p.dinnerVip} para VIP com experiência premium à frente do palco. Sem taxas escondidas, sem suplementos surpresa.',
      'Uma decomposição detalhada do **preço do cruzeiro em Istambul**, porque a transparência importa:\n\n- **Cruzeiro com Jantar Standard**: €{p.dinnerStd}/pessoa (antes €{p.dinnerStdOriginal}, 40% de desconto). Inclui passeio de 3 horas, 10 mezze, prato principal, sobremesa, refrigerantes ilimitados, show ao vivo.\n- **Cruzeiro com Jantar VIP**: €{p.dinnerVip}/pessoa (antes €{p.dinnerVipOriginal}). Adiciona lugares à frente do palco, 15+ mezze, opções de lombo de vaca/entrecosto, serviço prioritário.\n- **0-3 anos**: Grátis. 4-8 anos: 50% de desconto. 9+ anos: preço inteiro.\n\nSuplementos (opcionais):\n- 2 copos álcool: +€{p.alcohol2}/pessoa\n- Álcool local ilimitado: +€{p.unlimited}/pessoa\n- Transfer do hotel ida e volta: +€{p.transfer}/pessoa\n- Arranjo de mesa romântica: +€{p.romantic}/mesa',
      'E importante: **pagamento a bordo**. Não promete um cêntimo até estar no barco. Cancelamento gratuito até 2 horas antes da partida. Sem compromisso, sem risco — o **preço para o cruzeiro em Istambul mais amigo do consumidor** que vai encontrar.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (antes €{p.dinnerStdOriginal})', desc: '40% de desconto sobre o preço normal. Passeio de 3 horas, jantar turco completo, show ao vivo, refrigerantes ilimitados. O pacote mais popular — cobre tudo o que precisa para uma bela noite.' },
      { title: 'VIP: €{p.dinnerVip} (antes €{p.dinnerVipOriginal})', desc: '40% de desconto sobre o preço normal. Adiciona lugares à frente do palco, 15+ mezze, prato principal premium (lombo de vaca, entrecosto), serviço prioritário dos empregados. Para ocasiões especiais ou viajantes premium.' },
      { title: 'Preço para crianças: 0-3 grátis, 4-8 a meio preço', desc: '0-3 completamente grátis (sem taxas). 4-8 com 50% de desconto do preço de adulto. 9+ preço inteiro de adulto. Transparente, sem truques de preços familiares. O transfer também é grátis para 0-3.' },
      { title: 'Suplementos — apenas quando os quer', desc: 'Álcool: €{p.alcohol2} ou €{p.unlimited}/pessoa. Transfer: €{p.transfer}/pessoa. Mesa romântica: €{p.romantic}/mesa. Tudo opcional, não empacotado. Escolha apenas o que precisa.' }
    ],
    faq: [
      { q: 'Quanto custa um passeio em Istambul?', a: 'Cruzeiro com Jantar Standard: €{p.dinnerStd}/pessoa (normal €{p.dinnerStdOriginal}, 40% de desconto). VIP: €{p.dinnerVip}/pessoa (normal €{p.dinnerVipOriginal}, 40% de desconto). 0-3 anos grátis, 4-8 anos a meio preço. Pagamento a bordo — sem pagamento antecipado. Cancelamento gratuito até 2 horas antes da partida.' },
      { q: 'Existem taxas escondidas no preço do passeio em Istambul?', a: 'Não. O preço inclui: passeio de 3 horas, jantar completo (mezze, entrada, prato principal, sobremesa), refrigerantes ilimitados, show ao vivo, taxas. Os suplementos opcionais (álcool, transfer, mesa romântica) são separados e com preço transparente — paga apenas pelo que adiciona. Sem "taxa de serviço", "taxa portuária", suplemento surpresa.' },
      { q: 'Porque é que o preço do passeio em Istambul é 40% de desconto — é um truque?', a: 'Sem truque. O preço normal €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} é o que os sites de reservas de terceiros (Viator, GetYourGuide, Klook) cobram — com as suas comissões. Reserve diretamente e obtenha €{p.dinnerStd}/€{p.dinnerVip}. Esta é a diferença de 40%. Sem truques de preço limitado ou dinâmico.' },
      { q: 'Como se compara o preço do passeio em Istambul com outras opções?', a: 'Ferries em loop: €5-10, 1 hora, sem jantar, sem entretenimento, apenas turismo. Passeios económicos com jantar: €20-30, cheios, comida média, show curto. O nosso Standard (€{p.dinnerStd}): 3 horas, jantar completo, show completo, mesa privada, licenciado pela TÜRSAB. VIP (€{p.dinnerVip}): à frente do palco, menu premium. Iates resort: €100-150+, excessivo para viajantes solo/casais.' },
      { q: 'Tenho de pagar antecipadamente o preço do passeio em Istambul?', a: 'Não — **pagamento a bordo**. Reserve agora (formulário de 1 minuto), confirmamos via WhatsApp, venha às 19:30 e pague a bordo (dinheiro ou cartão). Cancelamento gratuito até 2 horas antes. Zero compromisso financeiro até estar satisfeito.' },
      { q: 'Existem descontos de grupo no preço do passeio em Istambul?', a: 'Para grupos de 10+, podemos oferecer 5-10% de desconto — escreva pelo WhatsApp com o tamanho do grupo. Para 25+, considere o passeio privado (o barco inteiro para o seu grupo, menu personalizado). Para 2-9 pessoas aplicam-se os preços standard — já 40% de desconto sobre o preço normal.' }
    ],
    cta: {
      primary: 'Reservar · Pagamento a Bordo',
      secondary: 'Desde €{p.dinnerStd}/pessoa · 0-3 anos grátis · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Visita Turística no Bósforo desde €{p.dinnerStd} — Pontos Turísticos de Istambul a Partir da Água',
      description: 'Cruzeiro turístico no Bósforo: Dolmabahçe, Ortaköy, Ponte do Bósforo, Rumeli, Beylerbeyi, Torre da Donzela. Passeio noturno 3h com jantar. Cancelamento gratuito, pagamento a bordo.'
    },
    hero: {
      h1: 'Turismo no Bósforo',
      subtitle: 'Todos os marcos icónicos de Istambul — a partir da água, à noite, com jantar. Um único passeio de 3 horas cobre Dolmabahçe, Mesquita de Ortaköy, Ponte do Bósforo, Rumeli Hisarı e muito mais.',
      badge: '10+ Marcos · Costas Europeia e Asiática · 3 Horas'
    },
    intro: [
      '**O turismo no Bósforo** a partir da água supera qualquer passeio de autocarro. O Bósforo é a via navegável mais histórica da cidade — sultões otomanos, imperadores bizantinos, comerciantes gregos e navios de guerra russos passaram todos por aqui. Hoje o nosso passeio de 3 horas, com comentários da tripulação falante de inglês, passa por cada marco principal de Istambul que define o horizonte.',
      'A rota do **nosso passeio turístico no Bósforo** (partida noturna, 20:30-23:30):\n\n1. **Palácio de Dolmabahçe** — residência otomana do século XIX, iluminada à noite\n2. **Palácio Çırağan** — agora hotel de luxo, história real\n3. **Mesquita de Ortaköy** — uma das mesquitas mais fotografadas de Istambul, sobre a água\n4. **Ponte do Bósforo** — alterna à noite entre azul, violeta, dourado\n5. **Bebek** — bairro elegante da costa europeia\n6. **Rumeli Hisarı** — construído por Fatih Sultan Mehmet em 1452 antes da conquista de Constantinopla\n7. **Ponte Fatih Sultan Mehmet** — segunda ponte do Bósforo, arco dramático\n8. **Palácio de Beylerbeyi** — costa asiática, residência de verão otomana\n9. **Üsküdar** — costa asiática de Istambul, bairro tradicional\n10. **Torre da Donzela** — torre na pequena ilha, um dos símbolos mais românticos de Istambul',
      'O jantar e o entretenimento estão incluídos — não separadamente — por isso **o turismo no Bósforo** transforma-se numa noite completa. Jantar turco de vários pratos, show de danças folclóricas ao vivo, sema, dança oriental, DJ. Avaliação 4,8★ de mais de 11.317 viajantes, licenciado pela TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ marcos principais de Istambul', desc: 'Palácio de Dolmabahçe, Palácio Çırağan, Mesquita de Ortaköy, Ponte do Bósforo, Rumeli Hisarı, Ponte FSM, Palácio de Beylerbeyi, Üsküdar, Torre da Donzela. Cada marco essencial de Istambul num único passeio.' },
      { title: 'Ambas as costas, europeia e asiática', desc: 'Costa europeia na ida (Dolmabahçe → Rumeli Hisarı), costa asiática no regresso (Beylerbeyi → Üsküdar). Dois continentes num passeio de 3 horas — só Istambul lhe permite isto.' },
      { title: 'Turismo noturno = vistas iluminadas', desc: 'O turismo diurno mostra os marcos em luz plana. O passeio noturno capta-os no pico de dramatismo: palácios amarelos brilhantes, pontes coloridas, mesquitas refletidas na água escura. Melhores para fotografias, mais memoráveis.' },
      { title: 'Jantar + show incluídos', desc: 'Turismo + jantar + entretenimento num único pacote. Não precisa de planear jantar separado depois do passeio. Desde €{p.dinnerStd}/pessoa, pagamento a bordo, total 3 horas.' }
    ],
    faq: [
      { q: 'Que marcos do Bósforo vou ver?', a: 'Por ordem: Palácio de Dolmabahçe, Palácio Çırağan, Mesquita de Ortaköy, Ponte do Bósforo, bairro de Bebek, Rumeli Hisarı, Ponte Fatih Sultan Mehmet, Anadolu Hisarı, Palácio de Beylerbeyi, Kuzguncuk, Üsküdar e Torre da Donzela (visível ao longe). 10+ marcos principais numa única rota de 3 horas.' },
      { q: 'O turismo no Bósforo é melhor de dia ou à noite?', a: 'Experiências diferentes. Dia: vista mais clara dos detalhes arquitetónicos, mais luminoso para fotografias. Noite: iluminação dramática, atmosfera mística, menos barcos na água. A maioria dos viajantes prefere o passeio noturno porque os marcos parecem mais mágicos — e o jantar + show fazem disto uma noite completa.' },
      { q: 'O barco para nos marcos para fotografias?', a: 'É um passeio contínuo — sem paragens (sem desembarque). O barco passa por cada marco, a tripulação explica o que está a ver, pode sair para o convés aberto para fotografias. Sem filas, sem caminhar, sem stress de horário — apenas uma oportunidade contínua de fotografias de 3 horas.' },
      { q: 'A tripulação comenta durante o turismo?', a: 'Sim — a tripulação falante de inglês oferece comentários breves à medida que passamos por cada marco principal (história, arquitetura, curiosidades). Não é uma aula guiada, mais uma explicação amigável enquanto janta. Para história mais profunda, recomendamos emparelhar com um passeio a pé em Istambul durante o dia.' },
      { q: 'Como difere o turismo no Bósforo do ferry hop-on?', a: 'Os ferries hop-on (barcos em loop da Şehir Hatları): €5-10, 1-2 horas, básicos, sem jantar, cheios. O nosso passeio: €{p.dinnerStd}, 3 horas, jantar completo, show ao vivo, mesa privada, comentários em inglês. Para turismo sério e confortável, o passeio noturno é melhor. Para trânsito rápido e económico, o ferry em loop funciona.' },
      { q: 'Posso fotografar os marcos a partir do barco?', a: 'Sim — absolutamente. O convés aberto tem ótimos lugares para fotografia. Os marcos passam a 100-200 metros do barco. As fotografias de smartphone saem ótimas; os utilizadores de DSLR/mirrorless podem obter enquadramentos magníficos, especialmente na transição da hora dourada para a hora azul ao início da noite.' }
    ],
    cta: {
      primary: 'Reserve o Passeio Turístico · Pagamento a Bordo',
      secondary: '10+ marcos · Jantar + show · Cancelamento gratuito 2 horas antes',
      tertiary: 'Disponibilidade Esta Noite'
    }
  }

};
