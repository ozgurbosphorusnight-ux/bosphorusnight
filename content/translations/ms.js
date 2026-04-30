/**
 * Malay (Bahasa Melayu) translations for all 17 landing pages.
 * Target: Malaysian + Singaporean Muslim tourists. Formal, halal-aware.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Pelayaran Makan Malam Bosphorus dari €{p.dinnerStd} — Tur Malam Istanbul + Persembahan',
      description: 'Pelayaran makan malam 3 jam di Bosphorus: menu Turki pelbagai hidangan dan persembahan folklor langsung. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Makan Malam Bosphorus di Istanbul',
      subtitle: 'Tiga jam hiburan langsung, jamuan Turki berbilang hidangan dan pemandangan malam Bosphorus yang paling mengagumkan.',
      badge: '4.8★ · 11,317 ulasan'
    },
    intro: [
      '**Pelayaran makan malam Bosphorus** ialah pengalaman petang paling ikonik di Istanbul. Pelayaran kami bermula dari Jeti Kabataş pada jam 20:00, meluncur di bawah Jambatan Bosphorus dan Jambatan Fatih Sultan Mehmet yang diterangi, sambil menghidangkan jamuan Turki berbilang hidangan, tarian rakyat langsung, tarian oryantal dan set DJ yang menghidupkan dek sehingga 23:00.',
      'Berbeza dengan bot pelancong biasa yang memenuhi pemandangan malam Istanbul, **pelayaran makan malam Bosphorus kami** berlesen TÜRSAB (A-17672) dan dinilai 4.8★ oleh lebih 11,317 pengembara. Kami mengekalkan kumpulan kecil dan perkhidmatan mesra — dan kerana anda membayar di atas bot, tiada sebarang risiko untuk membuat tempahan awal.',
      'Sama ada anda menyambut ulang tahun, mencari petang Istanbul premium untuk keluarga, atau menginginkan peralihan matahari terbenam ke malam yang paling fotogenik di bandar ini — inilah pelayaran makan malam yang pertama disyorkan oleh penduduk Istanbul.'
    ],
    highlights: [
      { title: 'Jamuan Turki berbilang hidangan', desc: '10 jenis meze, pembuka selera panas (paçanga böreği), pilihan hidangan utama (salmon / sea bass / ayam / köfte / vegetarian), kek aiskrim sebagai pencuci mulut, minuman ringan tanpa had.' },
      { title: 'Tarian rakyat langsung, oryantal dan DJ', desc: 'Persembahan sema Mevlana, 5 tarian rakyat tradisional Turki, tarian oryantal klasik, pemuzik Turki langsung, diikuti set DJ sepanjang pelayaran.' },
      { title: 'Laluan malam penuh Bosphorus', desc: 'Kabataş → Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Bebek → Rumeli Hisarı → Jambatan FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Dari €{p.dinnerStd}/orang — bayar di atas bot', desc: 'Pelayaran makan malam Standard €{p.dinnerStd} (asalnya €{p.dinnerStdOriginal}). Pelayaran VIP dengan meja hadapan pentas dan menu premium pada €{p.dinnerVip}. Tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
      { q: 'Bilakah pelayaran makan malam Bosphorus bermula?', a: 'Pendaftaran masuk bermula di Jeti Kabataş pada jam 20:00. Bot bertolak pada jam 21:00 dan kembali sekitar 00:00. Kami cadangkan anda tiba 15-20 minit lebih awal untuk menetap di tempat duduk dan berehat.' },
      { q: 'Berapakah kos pelayaran makan malam Bosphorus?', a: 'Pelayaran Standard €{p.dinnerStd}/orang (harga biasa €{p.dinnerStdOriginal}). Pelayaran VIP dengan tempat duduk hadapan pentas dan menu premium pada €{p.dinnerVip}/orang. Umur 0-3 tahun percuma, 4-8 tahun diskaun 50%. Bayaran dibuat di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Adakah alkohol termasuk dalam pelayaran makan malam?', a: 'Minuman ringan tanpa had (air, kola, jus buah) termasuk dalam harga. Pakej alkohol adalah pilihan: 2 gelas +€{p.alcohol2}/orang atau alkohol tempatan tanpa had (wain, bir, rakı, vodka, gin) +€{p.unlimited}/orang. Minuman diimport dikenakan harga berasingan di atas bot.' },
      { q: 'Adakah pemindahan hotel disediakan?', a: 'Ya — perkhidmatan ambil dan hantar +€{p.transfer}/orang. Kawasan perkhidmatan: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane dan Sütlüce. Anda boleh pilih dalam wizard tempahan.' },
      { q: 'Adakah pelayaran makan malam Bosphorus halal?', a: 'Sudah tentu. Semua produk daging di atas bot adalah diperakui halal. Alkohol adalah tambahan pilihan (tidak dipaksa kepada tetamu) dan susunan tempat duduk secara semula jadi mengasingkan mereka yang memilih meja tanpa alkohol. Kami juga menyediakan pilihan vegetarian tanpa bayaran tambahan.' },
      { q: 'Apakah pakaian yang sesuai?', a: 'Smart casual. Petang di Istanbul boleh berangin walaupun pada musim panas — kami cadangkan jaket nipis atau selendang. Tiada kod pakaian wajib, tetapi baju mandi, selipar atau pakaian sukan tidak sesuai dengan suasana makan malam.' }
    ],
    cta: {
      primary: 'Tempah Sekarang · Bayar di Atas Bot',
      secondary: 'Pembatalan percuma sehingga 2 jam sebelum bertolak',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosphorus dengan Anak — Pelayaran Keluarga dari €{p.dinnerStd}/dewasa',
      description: 'Pelayaran makan malam Bosphorus mesra keluarga. Anak 0-3 percuma, 4-8 separuh harga. Ruang dalam selamat, menu kanak-kanak. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Bersama Anak-Anak',
      subtitle: 'Petang Bosphorus yang mesra keluarga direka untuk keluarga berkanak-kanak — hidangan, hiburan dan suasana selamat serta selesa.',
      badge: 'Mesra Keluarga · Halal · 0-3 Tahun Percuma'
    },
    intro: [
      '**Pelayaran Bosphorus bersama anak-anak** ialah pilihan petang paling mesra keluarga di Istanbul. Kami menyambut berpuluh-puluh keluarga setiap malam — kami reka setiap butiran untuk membuat kanak-kanak selesa: tempat duduk dalaman agar yang kecil kekal hangat, menu mesra kanak-kanak yang mudah dicapai (ayam panggang biasa, pasta, minuman ringan tanpa had) dan pendaftaran awal untuk mengelakkan kerenah waktu malam.',
      'Berbeza dengan bot yang hanya untuk parti dewasa, **pelayaran makan malam Bosphorus kami untuk keluarga** kekal mesra dan merangkumi semua. **Kanak-kanak umur 0-3 tahun adalah percuma** (termasuk pemindahan), 4-8 tahun **diskaun 50%**, 9+ tahun pada harga penuh — tiada caj tersembunyi. Tarian rakyat langsung, tarian oryantal dan persembahan sema adalah hiburan keluarga yang sopan, bukan kelab malam.',
      'Sama ada anda datang ke Istanbul untuk hujung minggu panjang bersama anak kecil anda atau membawa remaja dalam perjalanan Eropah pertama — inilah pelayaran yang disyorkan oleh keluarga Istanbul. Selamat, diperakui halal, berlesen TÜRSAB dan dinilai 4.8★ oleh 11,317+ pengembara.'
    ],
    highlights: [
      { title: 'Umur 0-3 tahun percuma sepenuhnya', desc: 'Tiada bayaran untuk bayi dan kanak-kanak kecil. 4-8 tahun 50% daripada harga dewasa. Dari 9 tahun ke atas dikira tetamu penuh. Telus, tiada kejutan.' },
      { title: 'Ruang tempat duduk dalaman tertutup', desc: 'Tertutup penuh dan berpemanas pada bulan sejuk. Kanak-kanak kekal hangat, terlindung daripada angin. Dek terbuka juga tersedia ketika cuaca baik — pilihan anda.' },
      { title: 'Menu kanak-kanak atas permintaan', desc: 'Ayam panggang biasa, pasta, roti dan sayur — tanpa bayaran tambahan. Minuman ringan tanpa had (kola, jus, air). Beritahu awal — tiada kejutan meze pedas untuk yang kecil.' },
      { title: 'Hiburan selamat untuk keluarga', desc: 'Persembahan sema (memukau untuk kanak-kanak), 5 tarian rakyat tradisional, muzik Turki langsung dan set DJ. Semuanya mesra keluarga — tiada kandungan dewasa. Kanak-kanak sering menyertai tarian.' }
    ],
    faq: [
      { q: 'Adakah pelayaran Bosphorus selamat untuk kanak-kanak kecil?', a: 'Ya — bot kami berlesen TÜRSAB, mempunyai ruang tempat duduk dalaman dengan tingkap selamat, jaket keselamatan tersedia untuk semua saiz dan kakitangan profesional berpengalaman dengan keluarga. Kami cadangkan dek dalaman untuk kanak-kanak kecil, dek terbuka untuk umur 6+.' },
      { q: 'Apakah harga kanak-kanak untuk pelayaran Bosphorus?', a: 'Kanak-kanak **0-3 tahun: PERCUMA** (tiada bayaran, tiada caj tersembunyi). **4-8 tahun: diskaun 50%** daripada harga dewasa — iaitu €{p.dinnerStd}/2 = €12 setiap kanak-kanak untuk pelayaran Standard. **9+ tahun: harga dewasa penuh.** Pemindahan hotel percuma untuk umur 0-3, standard untuk 4+ (€{p.transfer}/orang).' },
      { q: 'Adakah terdapat menu kanak-kanak di atas bot?', a: 'Ya — ayam panggang biasa, pasta, roti, sayur bermusim dan minuman ringan tanpa had. Beritahu kami tentang alahan atau anak yang cerewet semasa tempahan, kami akan sediakan sesuatu yang anak anda akan makan dengan gembira.' },
      { q: 'Adakah muzik atau persembahan terlalu kuat untuk kanak-kanak?', a: 'Persembahan langsung dilakukan di satu kawasan pentas yang ditetapkan — jika anak anda sensitif bunyi, kami akan letakkan anda di meja belakang yang lebih senyap. Persembahan berlangsung selama 40 minit secara keseluruhan, selebihnya petang ialah muzik Turki suasana dan DJ pada kelantangan sederhana.' },
      { q: 'Bagaimana jika bayi saya tertidur semasa pelayaran?', a: 'Tiada masalah — ramai yang tidur. Ruang tempat duduk dalaman mempunyai sofa gaya banquet di mana bayi atau kanak-kanak kecil boleh tidur dengan selesa. Minta selimut hangat daripada kakitangan kami jika perlu. Tiada bayaran tambahan.' },
      { q: 'Perlukah saya bawa kereta sorong bayi ke atas kapal?', a: 'Anda boleh, tetapi kami cadangkan meninggalkan kereta sorong besar di hotel (atau dengan pemandu kami jika anda mengambil pemindahan — kami akan jaga). Bot kami mempunyai koridor sempit dan dek berundak. Pembawa bayi ringan lebih mudah di atas bot.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Keluarga · Bayar di Atas Bot',
      secondary: 'Pembatalan percuma sehingga 2 jam sebelum bertolak · Tiada bayaran pendahuluan',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Romantik Bosphorus dari €{p.dinnerStd} — Makan Malam Lilin',
      description: 'Pelayaran romantik Bosphorus: meja lilin, ros, makan malam pelbagai hidangan di bawah jambatan bercahaya. Dari €{p.dinnerStd}/orang. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Romantik Bosphorus',
      subtitle: 'Makan malam lilin, meja dihiasi bunga mawar, jambatan yang diterangi dan saat istimewa hanya untuk anda berdua di bawah langit malam paling ikonik Istanbul.',
      badge: 'Ulang Tahun · Bulan Madu · Malam Istimewa'
    },
    intro: [
      '**Pelayaran romantik Bosphorus** ialah petang paling ikonik di Istanbul untuk pasangan. Sewaktu matahari terbenam di belakang Istana Dolmabahçe dan Jambatan Bosphorus menyala dengan warna-warnanya, anda dan pasangan berkongsi jamuan Turki berbilang hidangan di meja peribadi — dengan lilin, bunga segar dan biola langsung yang mengalun di dek.',
      'Susunan meja romantik kami (+€{p.romantic}/meja) mengubah mana-mana tempat menjadi saat istimewa: bunga mawar merah, lilin berkelip, kad alu-aluan tulisan tangan. Tambah pakej alkohol tanpa had untuk minum wain di bawah bintang (+€{p.unlimited}/orang) atau kekalkan mudah dengan minuman ringan yang disertakan. Dalam kedua-dua keadaan, kakitangan akan mengurus selebihnya dengan senyap.',
      'Sama ada anda menyambut ulang tahun, merancang kejutan untuk pasangan, atau sekadar mahu malam yang tidak dapat dilupakan di bandar paling romantik di Eropah — inilah pelayaran pilihan utama pasangan Istanbul. Dinilai 4.8★, berlesen TÜRSAB dan — yang paling penting — bayaran di atas bot, jadi anda hanya berkomitmen kepada petang itu sendiri.'
    ],
    highlights: [
      { title: 'Meja romantik bercahaya lilin', desc: 'Tambah susunan meja romantik dengan +€{p.romantic}/meja: bunga mawar merah segar, lilin berkelip, kelopak mawar di atas alas meja dan kad tulisan tangan. Foto termasuk.' },
      { title: 'Meja terbaik untuk peralihan matahari terbenam ke malam', desc: 'Meja tepi tingkap dikhaskan untuk pasangan. Saksikan Jambatan Bosphorus menyala, Menara Maiden bercahaya dan Masjid Ortaköy diterangi dari meja peribadi anda.' },
      { title: 'Biola langsung dan suasana intim', desc: 'Biola langsung dan muzik Turki akustik semasa makan malam mencipta suasana perlahan dan romantik. Selepas itu, DJ mengambil alih dan pasangan menari di bawah cahaya dek terbuka.' },
      { title: 'Wain, champagne, gandingan premium', desc: 'Tambah 2 gelas alkohol (+€{p.alcohol2}/orang) atau wain tempatan, bir, rakı tanpa had (+€{p.unlimited}/orang). Champagne diimport dan gandingan premium atas permintaan — tanya semasa tempahan.' }
    ],
    faq: [
      { q: 'Apa yang menjadikan pelayaran ini romantik?', a: 'Gabungan meja peribadi, susunan lilin (pilihan +€{p.romantic}), hidangan Turki berbilang hidangan, biola langsung dan muzik akustik, dan jambatan Bosphorus yang diterangi di atas kepala. Kami reka pengalaman ini untuk pasangan — suasana senyap pada awalnya, kemudian DJ bertenaga dan tarian. Anda pilih rentaknya.' },
      { q: 'Bolehkah anda uruskan kejutan untuk pasangan saya — hari jadi, ulang tahun, lamaran?', a: 'Ya — beritahu kami semasa tempahan. Kami boleh selaraskan dengan kakitangan kami untuk kek hari jadi (percuma), susunan meja istimewa, kad tulisan tangan dalam bahasa anda, atau membawa sesuatu ke meja pada saat yang tepat. Untuk lamaran, kami cadangkan menghantar mesej terus di WhatsApp supaya kami boleh merancang secara diam-diam.' },
      { q: 'Berapakah kos pelayaran romantik untuk 2 orang?', a: '2 orang Standard: 2 × €{p.dinnerStd} = €48. Tambah susunan romantik +€{p.romantic} = €63. 2 orang VIP: 2 × €{p.dinnerVip} = €110 + romantik €{p.romantic} = €125. Tiada bayaran pendahuluan — bayar di atas bot. Untuk alkohol tanpa had, tambah 2 × €{p.unlimited} = €60.' },
      { q: 'Adakah pelayaran romantik Bosphorus peribadi — hanya untuk kami?', a: 'Tidak — ia adalah pelayaran dikongsi dengan pasangan dan tetamu lain (sehingga 60-80 secara keseluruhan). **Meja anda** adalah peribadi (hanya untuk kumpulan anda), tetapi terdapat tetamu lain di atas bot. Jika anda mahu bot peribadi sepenuhnya untuk 2 orang, itu adalah **Pelayaran Bosphorus Peribadi** yang berasingan (kami boleh uruskan atas permintaan — hantar mesej).' },
      { q: 'Bolehkah kami bawa bunga, kek atau hadiah sendiri?', a: 'Sudah tentu. Bawa apa sahaja yang anda mahu — kakitangan kami boleh membantu menyusun hadiah kejutan secara diam-diam, menyembunyikan kotak cincin dalam pencuci mulut atau memaparkan bunga yang anda bawa sendiri. Tiada caj tambahan seperti caj gabus. Cuma beritahu kami supaya kami boleh selaraskan masanya.' },
      { q: 'Apakah pakaian yang sesuai untuk pelayaran Bosphorus romantik?', a: 'Smart casual hingga berkelas — ramai pasangan berpakaian kemas (gaun, jaket). Tiada kod pakaian ketat, tetapi suasana lebih istimewa daripada pelancongan santai. Bawa jaket nipis atau selendang — dek boleh sejuk walaupun pada musim panas. Kasut selesa jika anda bercadang menari selepas makan malam.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Romantik · Bayar di Atas Bot',
      secondary: 'Tambah susunan meja romantik (+€{p.romantic}) dalam wizard tempahan · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan untuk Malam Ini'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Makan Malam Halal Bosphorus dari €{p.dinnerStd} — Persembahan + Tur Malam',
      description: 'Pelayaran makan malam 3 jam Bosphorus: persembahan folklor langsung, jambatan bercahaya, panorama Bosphorus malam. Menu halal tersedia atas permintaan. Pembatalan percuma.'
    },
    hero: {
      h1: 'Pelayaran Halal Bosphorus di Istanbul',
      subtitle: 'Menu 100% diperakui halal, alkohol sentiasa pilihan, hiburan mesra keluarga dan suasana hormat untuk pengembara Muslim — petang Bosphorus, dilakukan dengan betul.',
      badge: '100% Halal · Mesra Keluarga · Milik Muslim'
    },
    intro: [
      '**Pelayaran halal Bosphorus** ialah pelayaran makan malam paling dihormati di Istanbul untuk pengembara Muslim. Setiap daging yang dihidangkan di atas bot kami — salmon, sea bass, ayam, köfte daging kambing, fillet daging lembu, ribeye — adalah **diperakui halal** daripada pembekal yang diluluskan. Kami menghidangkan menu yang sama kepada setiap tetamu; tiada "seksyen halal" berasingan kerana seluruh bot adalah halal secara lalai.',
      'Alkohol adalah **tambahan pilihan** — tidak pernah dipaksa kepada tetamu, dan susunan tempat duduk secara semula jadi mengasingkan mereka yang memilih meja tanpa alkohol. Untuk tetamu yang inginkan pakej alkohol tanpa had (+€{p.unlimited}/orang), ia tersedia, tetapi minuman ringan tanpa had yang disertakan (air, kola, jus) adalah mencukupi untuk kebanyakan keluarga Muslim. Kakitangan kami dilatih untuk menghormati pilihan anda tanpa andaian.',
      '**Pelayaran Bosphorus mesra halal** adalah penting untuk pengembara dari Arab Saudi, UAE, Kuwait, Qatar, Iran, Malaysia, Indonesia, Pakistan dan Maghribi yang inginkan petang paling ikonik di Istanbul tanpa kompromi. Berlesen TÜRSAB, 4.8★ dan bayar di atas bot — anda tidak berkomitmen kepada apa-apa sehingga anda pasti pengalaman memenuhi piawaian anda.'
    ],
    highlights: [
      { title: 'Menu 100% diperakui halal', desc: 'Semua daging (salmon, sea bass, ayam, köfte, daging lembu, ribeye) diperakui halal daripada pembekal yang diluluskan. Dapur mengikut penyediaan halal. Tiada produk babi atau bahan tambahan tidak halal. Pilihan vegetarian sentiasa tersedia.' },
      { title: 'Alkohol pilihan, tidak pernah dipaksa', desc: 'Pakej alkohol adalah tambahan — tidak termasuk secara lalai. Minuman ringan (air, kola, jus) tanpa had dan percuma. Meja anda kekal tanpa alkohol melainkan anda meminta secara jelas. Kakitangan menghormati pilihan anda secara diam-diam.' },
      { title: 'Hiburan mesra keluarga', desc: 'Persembahan sema, tarian rakyat Turki tradisional, muzik Turki langsung. Tiada persembahan gaya kelab malam, tiada kandungan tidak sesuai. Selamat untuk kanak-kanak, dihormati untuk keluarga. Tarian oryantal adalah bentuk seni tradisional, dipersembahkan dengan sopan.' },
      { title: 'Hormat waktu solat', desc: 'Jika waktu Maghrib atau Isyak bertembung dengan masa pendaftaran masuk (20:00-21:00), kakitangan kami boleh menunjukkan kawasan solat yang senyap di Jeti Kabataş sebelum bertolak. Beritahu semasa tempahan sahaja.' }
    ],
    faq: [
      { q: 'Adakah pelayaran Bosphorus 100% halal?', a: 'Ya — setiap produk daging dalam menu (ikan, ayam, köfte, fillet daging lembu, ribeye, kambing) adalah diperakui halal daripada pembekal yang diluluskan. Dapur mengikut piawaian penyediaan halal. Tiada babi dihidangkan di mana-mana sahaja di atas bot. Ini bukan "pilihan halal" — keseluruhan menu adalah halal.' },
      { q: 'Adakah tetamu lain minum alkohol dalam pelayaran ini?', a: 'Sesetengah tetamu menambah pakej alkohol pilihan (+€{p.unlimited}/orang). Meja secara semula jadi diasingkan — anda boleh meminta seksyen tanpa alkohol. Kakitangan tidak membawa alkohol melainkan dipesan khusus oleh seorang tetamu. Minuman ringan (tanpa had) termasuk untuk semua.' },
      { q: 'Adakah pelayaran ini sesuai untuk keluarga Muslim dengan kanak-kanak?', a: 'Ya — ia adalah salah satu pelayaran paling dihormati keluarga di Istanbul. Hiburan sopan (tarian rakyat, sema, muzik Turki), kanak-kanak di bawah 3 tahun percuma, 4-8 tahun diskaun 50%. Tiada suasana kelab malam. Keluarga dari rantau Teluk, Indonesia, Malaysia, Pakistan dan Maghribi kerap menempah pelayaran ini.' },
      { q: 'Bolehkah saya bersolat di atas bot?', a: 'Tiada ruang solat khusus di atas bot, tetapi kami cadangkan bersolat sebelum pendaftaran masuk 20:00 (waktu Maghrib biasanya dalam tempoh ini). Jeti Kabataş mempunyai kemudahan solat. Jika anda perlu bersolat semasa pelayaran 21:00-00:00 (Isyak), bercakap dengan kakitangan — kami boleh sediakan sudut yang senyap di dek.' },
      { q: 'Berapakah harga untuk keluarga Muslim 4 orang (2 dewasa, 2 kanak-kanak)?', a: 'Pelayaran Standard: 2 × €{p.dinnerStd} + 2 × €12 (4-8 tahun separuh harga) = €72. Jika kanak-kanak di bawah 3 tahun maka percuma: 2 × €{p.dinnerStd} = €48. Tambah €10 pemindahan hotel setiap dewasa. Jumlah: €48-92 untuk keluarga 4 orang, tiada bayaran pendahuluan, bayar di atas bot.' },
      { q: 'Adakah pemindahan hotel juga halal?', a: 'Pemindahan hotel hanyalah perjalanan kereta — tiada makanan atau minuman terlibat, jadi tiada kebimbangan halal. Pemandu kami profesional, menghormati dan tepat pada masanya. Zon pemindahan merangkumi Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih dan 8 kawasan pusat lain yang biasa ditinggalkan oleh pengembara Muslim.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Halal · Bayar di Atas Bot',
      secondary: 'Pembatalan percuma 2 jam sebelum · Tiada bayaran pendahuluan · Diperakui halal',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Pelayaran VIP Bosphorus dari €{p.dinnerVip} — Makan Malam Premium',
      description: 'Pelayaran makan malam VIP Bosphorus: meze premium, pilihan steak, meja hadapan pentas, perkhidmatan keutamaan. Sebelumnya €{p.dinnerVipOriginal}, kini €{p.dinnerVip}.'
    },
    hero: {
      h1: 'Pelayaran VIP Bosphorus',
      subtitle: 'Tempat duduk hadapan pentas, menu Turki premium dengan pilihan stik dan layanan keutamaan — petang Bosphorus yang ditingkatkan untuk pengembara yang mahukan meja terbaik di atas bot.',
      badge: 'Paling Popular · DISKAUN 40% · Tempat Duduk Hadapan Pentas'
    },
    intro: [
      '**Pelayaran VIP Bosphorus** meletakkan anda di tempat terbaik di atas bot: meja hadapan pentas dengan pandangan terus ke persembahan sema, tarian rakyat, tarian oryantal dan muzik langsung. Menu premium menambah fillet daging lembu dan ribeye pada pilihan hidangan utama (berbanding ayam/salmon Standard), ditambah 15+ jenis meze Turki tradisional yang dihidangkan sebagai pilihan yang lumayan.',
      '**Pelayaran makan malam VIP Bosphorus kami** dinilai Paling Popular oleh tetamu kami — kerana pada €{p.dinnerVip}/orang (asalnya €{p.dinnerVipOriginal}, diskaun 40%), pengalaman ini lebih menyerupai restoran fine dining berbanding pelayaran pelancong. Meja peribadi, layanan pelayan penuh perhatian dan pemandangan megah Dolmabahçe, Masjid Ortaköy dan Jambatan Bosphorus yang diterangi — semuanya sama.',
      'Sama ada anda seorang pengembara perniagaan, menyambut saat penting atau sekadar berfikir "kami di Istanbul sekali — mari lakukan dengan betul", inilah **pelayaran VIP Bosphorus** yang ditempah oleh pengunjung berulang. Berlesen TÜRSAB, 4.8★ dengan 11,317+ ulasan, bayar di atas bot, pembatalan percuma sehingga 2 jam sebelum bertolak.'
    ],
    highlights: [
      { title: 'Meja peribadi hadapan pentas', desc: 'Tempat duduk terkhas terus di hadapan pentas persembahan — pandangan terbaik untuk persembahan sema, tarian rakyat dan tarian oryantal. Meja anda, tidak dikongsi. Jurufoto menyukai tempat duduk ini.' },
      { title: '15+ meze + hidangan utama premium', desc: '15+ jenis meze Turki dihidangkan sebagai pilihan tradisional. Pilihan hidangan utama termasuk fillet daging lembu dan ribeye (hanya ayam/salmon dalam Standard). Pencuci mulut dan minuman ringan tanpa had yang sama.' },
      { title: 'Layanan pelayan keutamaan', desc: 'Pelayan khusus melayan meja anda terlebih dahulu — isi semula, panduan menu, menyelaraskan tambahan alkohol, permintaan khas. Anda tidak perlu berebut perhatian dalam bilik yang sibuk.' },
      { title: 'DISKAUN 40% — asalnya €{p.dinnerVipOriginal}, kini €{p.dinnerVip}', desc: 'Harga biasa €{p.dinnerVipOriginal}/orang. Harga pelancaran semasa €{p.dinnerVip}/orang — diskaun 40%. Bayar di atas bot, tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
      { q: 'Apakah perbezaan antara pelayaran VIP dan Standard Bosphorus?', a: 'VIP mendapat: (1) tempat duduk hadapan pentas dengan pemandangan terbaik, (2) 15+ meze berbanding 10 Standard, (3) fillet daging lembu + ribeye ditambah pada pilihan hidangan utama, (4) layanan pelayan keutamaan. Pelayaran 3 jam yang sama, hiburan yang sama, laluan yang sama. €{p.dinnerVip} berbanding €{p.dinnerStd}.' },
      { q: 'Adakah harga VIP €{p.dinnerVip} betul-betul diskaun 40%?', a: 'Ya — harga biasa €{p.dinnerVipOriginal}/orang (semak di mana-mana laman tempahan). Kami kenakan €{p.dinnerVip} sebagai harga tempahan langsung, menghapuskan yuran perantara. Anda mendapat VIP pada harga yang kurang daripada kebanyakan tempat mengenakan untuk Standard.' },
      { q: 'Adakah alkohol termasuk dalam pelayaran VIP?', a: 'Tidak — alkohol adalah tambahan berasingan (sama seperti Standard). 2 gelas: +€{p.alcohol2}/orang. Alkohol tempatan tanpa had (wain, bir, rakı, vodka, gin): +€{p.unlimited}/orang. Minuman diimport premium dikenakan harga berasingan. Minuman ringan tanpa had termasuk dan percuma.' },
      { q: 'Bolehkah saya naik taraf kepada VIP selepas menaiki Standard?', a: 'Bergantung pada kekosongan — jika meja VIP terbuka, ya. Anda bayar perbezaannya (€{p.dinnerVip} - €{p.dinnerStd} = €31) di atas bot. Tetapi kami cadangkan menempah VIP terlebih dahulu: tempat duduk hadapan pentas terbaik pergi kepada tempahan awal.' },
      { q: 'Bagaimana untuk menempah pelayaran VIP Bosphorus?', a: 'Gunakan wizard tempahan di halaman ini — pilih "VIP" dalam Langkah 1, tetapkan tarikh anda, masukkan bilangan tetamu, kemudian butiran hubungan. Permintaan anda pergi melalui WhatsApp / Telegram / WeChat dan kami mengesahkan serta-merta. Bayar di atas bot, bukan sekarang.' },
      { q: 'Adakah pelayaran VIP sesuai untuk makan malam perniagaan dengan pelanggan?', a: 'Ya — VIP adalah pilihan paling biasa untuk makan malam perniagaan di Istanbul. Meja peribadi, cukup senyap untuk perbualan, menu dan pemandangan yang mengagumkan. Ramai tetamu menempah VIP + alkohol tanpa had untuk melayani pelanggan. Diperakui halal (baik untuk pengembara perniagaan dari Teluk). Beritahu kami semasa tempahan, kami akan sediakan meja VIP belakang yang lebih senyap.' }
    ],
    cta: {
      primary: 'Tempah VIP · Bayar di Atas Bot',
      secondary: 'Asalnya €{p.dinnerVipOriginal}, kini €{p.dinnerVip} · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Lihat Pilihan Standard (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Persendirian Bosphorus — Sewa Bot di Istanbul (25+ tetamu)',
      description: 'Pelayaran persendirian Bosphorus untuk kumpulan, perkahwinan, acara korporat. Bot eksklusif, menu khas, tempoh fleksibel. Pembatalan percuma. WhatsApp untuk sebut harga.'
    },
    hero: {
      h1: 'Pelayaran Peribadi Bosphorus',
      subtitle: 'Sewa seluruh bot untuk kumpulan anda — sambutan keluarga, makan malam korporat, hari jadi, pertunangan, majlis perkahwinan. Penggunaan eksklusif, menu tersuai, penjadualan fleksibel.',
      badge: 'Sewaan Peribadi · 25+ Tetamu · Menu Tersuai'
    },
    intro: [
      '**Pelayaran peribadi Bosphorus** bermakna seluruh bot adalah milik anda — tiada tetamu lain, tiada meja dikongsi, tiada lantai tarian dikongsi. Sesuai untuk perjumpaan keluarga, makan malam korporat, majlis hari jadi, majlis bujang, atau majlis resepsi perkahwinan. Bot, kakitangan, menu, hiburan dan masa disesuaikan dengan kumpulan anda.',
      'Sewaan **pelayaran peribadi Bosphorus kami** menyokong kumpulan dari **25 hingga 80 tetamu**. Kumpulan lebih kecil masih boleh meminta pengalaman peribadi — kami memberi harga dengan bayaran minimum yang menampung kos operasi bot. Kumpulan lebih besar (saiz perkahwinan) mendapat harga tersuai dan biasanya termasuk hiasan khas, kumpulan muzik langsung, hidangan kek dan tempoh yang dilanjutkan (4-5 jam berbanding 3 standard).',
      'Sama ada anda menganjurkan acara korporat untuk pelanggan, majlis hari jadi ke-50, atau majlis resepsi perkahwinan di bawah jambatan paling ikonik Istanbul, inilah **pelayaran peribadi yang dipercayai oleh perancang acara Istanbul**. Dinilai 4.8★, berlesen TÜRSAB, kakitangan yang fasih berbahasa Inggeris dan fleksibel dalam semua aspek — laluan, menu, muzik, masa.'
    ],
    highlights: [
      { title: 'Seluruh bot, hanya untuk anda', desc: 'Tiada tetamu lain. Kumpulan anda memiliki setiap dek, setiap meja. Tetapkan muzik anda sendiri, kod pakaian, jadual. Privasi penting — kami hormatinya.' },
      { title: 'Menu dan pakej minuman tersuai', desc: 'Bekerjasama dengan cef kami untuk menyesuaikan menu: meze khusus, pilihan hidangan utama, hidangan khas untuk budaya atau keperluan diet anda. Pakej alkohol, gelas champagne, bar koktel tersuai semuanya boleh diatur.' },
      { title: 'Tempoh dan waktu berlepas fleksibel', desc: '3 jam standard boleh dilanjutkan ke 4-5 jam. Pilih waktu siang 12:00, matahari terbenam 17:30, atau pelayaran malam 21:00. Mahu hari bekerja daripada hujung minggu? Tanya — kami akan bekerja dengan jadual anda.' },
      { title: 'Hiasan khas, kumpulan muzik, penjadualan', desc: 'Hiasan khas (belon, sepanduk, susunan bunga), kumpulan muzik langsung menggantikan DJ, hidangan kek perkahwinan, penyelarasan jurugambar, ucapan — tambah apa sahaja yang acara anda perlukan. Kami bukan sahaja pengendali bot, kami perancang acara.' }
    ],
    faq: [
      { q: 'Berapakah kos pelayaran peribadi Bosphorus?', a: 'Untuk kumpulan 25+, biasanya €{p.dinnerStd}-€{p.dinnerVip}/orang + yuran sewa bot berdasarkan saiz kumpulan, tarikh dan tempoh. Hantar mesej WhatsApp dengan saiz kumpulan, tarikh dan keperluan anda — kami memberi harga dalam masa 1 jam. Kebanyakan acara berada dalam julat €2,000-€6,000.' },
      { q: 'Apakah saiz kumpulan minimum untuk pelayaran peribadi Bosphorus?', a: 'Secara teknikal 25 tetamu menjadikan pelayaran peribadi berdaya maju secara ekonomi. Kumpulan lebih kecil (10-24) masih boleh menyewa peribadi tetapi membayar yuran minimum yang setara dengan ~25 orang. Untuk kumpulan yang benar-benar kecil (2-10), pertimbangkan pelayaran Standard atau VIP biasa — meja anda sudah peribadi, hanya bot yang dikongsi.' },
      { q: 'Bolehkah saya mengadakan majlis perkahwinan di pelayaran Bosphorus?', a: 'Ya — kami menganjurkan 10-15 majlis resepsi perkahwinan setahun. Kapasiti sehingga 80 untuk makan malam duduk, sehingga 100 gaya koktel. Kami menyelaras dengan jurugambar, perancang perkahwinan, kumpulan muzik atau cef anda. Hidangan kek khas, lantai tarian pertama, toast champagne boleh diatur. Hantar mesej WhatsApp untuk harga perkahwinan.' },
      { q: 'Bagaimana pula dengan acara korporat dan makan malam pasukan?', a: 'Pelayaran peribadi korporat adalah tempahan paling biasa kami. Makan malam syarikat, melayan pelanggan, pelancaran produk, sambutan pasukan — semua berfungsi. Kami boleh menyediakan invois dengan pecahan VAT, mengatur pemindahan hotel untuk pasukan anda, dan menyelaras bahan berjenama (alat meja, papan tanda) atas permintaan.' },
      { q: 'Bolehkah saya bawa kumpulan muzik atau DJ sendiri daripada hiburan anda?', a: 'Ya — anda boleh bawa kumpulan muzik, DJ, jurugambar sendiri. Atau kekalkan standard kami (sema, penari rakyat, oryantal, DJ) dan tambah anda sendiri di atasnya. Bot mempunyai sistem PA dan lantai tarian. Beritahu awal supaya kami boleh menyelaraskan kawalan bunyi.' },
      { q: 'Bagaimana untuk meminta harga pelayaran peribadi Bosphorus?', a: 'Paling mudah: hantar mesej WhatsApp di +90 532 244 29 22 dengan (1) saiz kumpulan, (2) tarikh pilihan, (3) sebab (perkahwinan, korporat, hari jadi), (4) keperluan khas. Kami balas dalam masa 1 jam pada waktu bekerja, 12 jam pada waktu malam. Kami juga boleh mengatur panggilan video untuk membincangkan butiran.' }
    ],
    cta: {
      primary: 'WhatsApp untuk Harga Peribadi',
      secondary: 'Menu tersuai, kumpulan 25-80, tempoh fleksibel · Jawapan dalam 1 jam',
      tertiary: 'Pilihan Pelayaran Standard (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosphorus untuk Pasangan dari €{p.dinnerStd} — Malam Romantik Istanbul',
      description: 'Pelayaran makan malam Bosphorus untuk pasangan. Meja peribadi, jambatan bercahaya, hiasan romantik pilihan. Dari €{p.dinnerStd}/orang. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus untuk Pasangan',
      subtitle: 'Malam janji temu di Bosphorus — meja peribadi, muzik langsung, jambatan diterangi di atas kepala. Sama ada janji temu pertama anda di Istanbul atau ulang tahun ke-10, petang ini berfungsi.',
      badge: 'Meja Peribadi · Muzik Langsung · Bayar di Atas Bot'
    },
    intro: [
      '**Pelayaran Bosphorus untuk pasangan** ialah malam janji temu kegemaran Istanbul. Tidak setiap pasangan menyambut ulang tahun — kadangkala anda berada di bandar paling romantik di dunia dan anda mahu petang yang hebat bersama. Pelayaran ini menyediakan: meja peribadi untuk dua orang, makan malam Turki berbilang hidangan yang perlahan, biola langsung dan muzik akustik semasa makan malam, dan Jambatan Bosphorus yang diterangi meluncur di atas.',
      'Suasananya **mesra tetapi tidak terlalu romantik** — tiada muzik lamaran wajib, tiada tepuk tangan "pengantin baru" yang diselaraskan dengan canggung. Anda makan, anda minum, anda berbual, anda menonton cahaya Istanbul. Jika anda mahu menambah susunan meja romantik (lilin, mawar, +€{p.romantic}), bagus — jika tidak, makan malam itu sendiri sudah istimewa.',
      'Sama ada anda di Istanbul selama 3 hari bersama pasangan, menyambut saat penting yang kecil, atau merancang perjalanan tinjauan lamaran masa depan — **pelayaran Bosphorus untuk pasangan** memberi anda 3 jam petang untuk bersama di salah satu bandar paling difoto di dunia. 4.8★, bayar di atas bot, pembatalan percuma.'
    ],
    highlights: [
      { title: 'Meja peribadi untuk dua orang', desc: 'Meja 2-orang khusus, tidak dikongsi. Keutamaan tempat duduk tepi tingkap untuk pasangan. Foto matahari terbenam dan malam Bosphorus tepat di luar tingkap anda.' },
      { title: 'Hidangan berbilang hidangan yang perlahan', desc: '10 jenis meze Turki, pembuka selera panas, hidangan utama (salmon, sea bass, ayam, köfte atau vegetarian), kek aiskrim sebagai pencuci mulut. Dihidangkan perlahan selama 3 jam — anda tidak tergesa-gesa.' },
      { title: 'Biola langsung dan muzik lembut', desc: 'Biola langsung dan muzik Turki akustik semasa makan malam mencipta suasana intim sesuai untuk perbualan. Kemudian, DJ mengambil alih untuk pasangan yang mahu menari.' },
      { title: 'Tambahan untuk malam istimewa', desc: 'Susunan meja romantik (lilin, mawar): +€{p.romantic}. Alkohol tempatan tanpa had (wain, rakı): +€{p.unlimited}/orang. Pemindahan hotel (pergi balik): +€{p.transfer}/orang. Pilih yang sesuai untuk petang anda.' }
    ],
    faq: [
      { q: 'Adakah pelayaran Bosphorus ini sesuai untuk malam janji temu biasa, bukan majlis istimewa?', a: 'Ya — kebanyakan pasangan kami tidak menyambut sesuatu yang khusus, hanya mempunyai malam janji temu yang hebat. Suasananya mesra dan menawan tanpa berlebihan. Anda boleh tambah susunan meja romantik (+€{p.romantic}) jika anda mahu tambahan, atau sekadar nikmati petang standard.' },
      { q: 'Berapakah kos pelayaran Bosphorus untuk 2 orang?', a: '2 orang Standard: 2 × €{p.dinnerStd} = €48. 2 orang VIP: 2 × €{p.dinnerVip} = €110. Tambah pemindahan hotel untuk dua orang: +€{p.transfer}×2 = €20. Tambah alkohol tanpa had untuk dua orang: +€{p.unlimited}×2 = €60. Tiada bayaran pendahuluan — bayar di atas bot.' },
      { q: 'Bolehkah pasangan bawa wain atau champagne sendiri?', a: 'Kami tidak membenarkan alkohol luar (sebab lesen operasi). Tetapi kami ada wain tempatan tanpa had (+€{p.unlimited}/orang) dan boleh mengatur wain premium diimport atau champagne dengan bayaran — tanya semasa tempahan. Prosecco, Chianti dan Cabernet adalah permintaan premium yang popular.' },
      { q: 'Adakah tidak apa-apa jika kami tidak minum alkohol — adakah kami pelik?', a: 'Tidak sama sekali — ramai pasangan melangkau alkohol sepenuhnya, sama ada kerana sebab halal atau sekadar pilihan. Minuman ringan tanpa had (air, jus, kola) termasuk. Tiada siapa akan pandang dua kali jika meja anda tanpa alkohol. Ramai pasangan Muslim dari Arab Saudi, Iran dan Indonesia menempah pelayaran ini.' },
      { q: 'Bilakah masa terbaik untuk pelayaran Bosphorus pasangan — matahari terbenam atau malam?', a: 'Malam (bertolak 21:00) adalah paling ikonik — jambatan diterangi, pantulan di atas air, istana bercahaya. Matahari terbenam (bertolak 17:30) lebih awal dan mempunyai keindahan waktu keemasan tetapi pelayaran makan malam khusus pada 21:00. Jika anda mahu kedua-duanya, kebanyakan pasangan menempah pelayaran matahari terbenam dan malam pada hari berbeza.' },
      { q: 'Adakah terdapat lantai tarian — bolehkah kami menari?', a: 'Ya — selepas hidangan makan malam (~22:30), DJ bermula dan dek terbuka menjadi kawasan tarian. Ramai pasangan menari lagu perlahan di bawah cahaya dengan Jambatan Bosphorus di latar belakang. Beberapa foto terbaik yang anda akan ambil di Istanbul.' }
    ],
    cta: {
      primary: 'Tempah Malam Janji Temu · Bayar di Atas Bot',
      secondary: 'Tambah susunan romantik (+€{p.romantic}) · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Lihat Pelayaran Romantik Bosphorus'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Pelayaran Matahari Terbenam Bosphorus dari €35 — Jam Emas + Makan Malam',
      description: 'Pelayaran matahari terbenam Bosphorus dari Kabataş, bertolak 17:30. Istana dalam cahaya emas, makan malam berterusan ke malam bercahaya. 3 jam. Pembatalan percuma.'
    },
    hero: {
      h1: 'Pelayaran Matahari Terbenam Bosphorus',
      subtitle: 'Jam sihir di Bosphorus — saksikan matahari jatuh di sebalik siluet menara masjid sambil meluncur melalui Dolmabahçe, Masjid Ortaköy dan Jambatan Bosphorus yang menyala untuk malam.',
      badge: 'Waktu Keemasan · Bertolak 17:30 · Foto Terbaik'
    },
    intro: [
      '**Pelayaran matahari terbenam Bosphorus** menangkap Istanbul pada paling fotogeniknya. Naik pada jam 17:30 dan dalam masa 20 minit matahari mula jatuh di sebalik menara tepi Eropah — menjadikan Istana Dolmabahçe berwarna emas, menjadikan air Bosphorus berwarna tembaga dan menjadikan Masjid Ortaköy siluet di langit yang bercahaya. Setiap foto telefon pintar daripada pelayaran ini kelihatan seperti gambar profesional.',
      '**Pelayaran matahari terbenam Bosphorus kami** merangkumi makan malam Turki lengkap yang bermula semasa waktu keemasan dan berterusan semasa jambatan menyala untuk malam. Semasa pencuci mulut tiba, anda belayar di bawah Jambatan Bosphorus yang diterangi — 30 juta lampu dipantulkan di atas air gelap. Peralihan siang ke malam, dilakukan dalam 3 jam, itulah keseluruhan peristiwa.',
      'Sama ada anda seorang jurugambar yang mengejar waktu keemasan, seorang pengembara yang mahukan yang terbaik dari siang dan malam, atau pasangan yang mencari "foto saat Istanbul" — inilah **pelayaran makan malam matahari terbenam Bosphorus** yang disyorkan kepada pengunjung. Dinilai 4.8★, berlesen TÜRSAB, bayar di atas bot, tiada bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Puncak waktu keemasan — bertolak 17:30', desc: 'Naik pada 17:30, matahari terbenam pada ~18:30 musim panas / 17:00 musim sejuk. 40 minit pertama pelayaran adalah waktu keemasan yang anda kejar. Kamera sedia — inilah gambarnya.' },
      { title: 'Peralihan siang ke malam termasuk', desc: 'Bukan hanya matahari terbenam — kami belayar ke waktu senja, kemudian Bosphorus yang diterangi. Anda melihat 3 fasa cahaya berbeza dalam satu pelayaran: keemasan, biru dan malam diterangi penuh.' },
      { title: 'Makan malam lengkap semasa pelayaran', desc: '10 jenis meze Turki, pembuka selera panas, hidangan utama (salmon, sea bass, ayam, köfte, vegetarian), kek aiskrim. Menu berkualiti sama seperti pelayaran malam, dihidangkan semasa matahari terbenam.' },
      { title: 'Dolmabahçe, Ortaköy, Jambatan Bosphorus — semua bercahaya', desc: 'Laluan melalui Istana Dolmabahçe (keemasan semasa matahari terbenam), Masjid Ortaköy (kubah siluet), Jambatan Bosphorus (menyala), Rumeli Hisarı, Istana Beylerbeyi. Setiap mercu tanda dalam cahaya terbaik.' }
    ],
    faq: [
      { q: 'Bilakah pelayaran matahari terbenam Bosphorus bertolak?', a: 'Pendaftaran masuk bermula pada 17:00, bot bertolak pada 17:30, kembali sekitar 20:30. Kami selaraskan ini dengan masa yang tepat matahari terbenam di atas air — ia berbeza sedikit mengikut musim (18:30 musim panas, 17:00 musim sejuk). Kami laraskan waktu berlepas 15-30 minit secara bermusim.' },
      { q: 'Adakah pelayaran matahari terbenam Bosphorus sama dengan pelayaran makan malam?', a: 'Serupa tetapi berbeza masa. Pelayaran matahari terbenam bertolak pada 17:30 dengan makan malam dihidangkan semasa pelayaran (waktu keemasan + awal malam). Pelayaran makan malam pada 21:00 — selepas gelap, pemandangan malam tulen. Bot yang sama, menu yang sama, hiburan yang sama — hanya pencahayaan yang berbeza. Sesetengah tetamu melakukan kedua-duanya pada hari berbeza.' },
      { q: 'Berapakah harga pelayaran matahari terbenam Bosphorus?', a: 'Pelayaran matahari terbenam Standard dari €35/orang (3 jam, makan malam lengkap, hiburan langsung). Pilihan VIP dengan tempat duduk hadapan pentas dan meze premium €55/orang. Bayar di atas bot — tiada bayaran pendahuluan. Umur 0-3 percuma, 4-8 separuh harga.' },
      { q: 'Adakah pelayaran matahari terbenam lebih baik daripada pelayaran makan malam (malam)?', a: '"Lebih baik" bergantung pada apa yang anda mahu. Matahari terbenam = foto terbaik, cahaya keemasan, rentak lebih perlahan, petang lebih awal. Malam = cahaya paling ikonik (jambatan diterangi), hiburan terbaik, makan malam lewat. Jurugambar memilih matahari terbenam. Pasangan malam janji temu memilih malam. Keluarga berkanak-kanak biasanya memilih matahari terbenam (berakhir awal).' },
      { q: 'Apa yang perlu saya bawa untuk pelayaran matahari terbenam?', a: 'Telefon pintar atau kamera untuk foto (waktu keemasan menuntutnya). Jaket nipis — angin meningkat semasa matahari terbenam dan boleh sejuk dengan cepat di dek pada awal petang. Cermin mata hitam untuk 30 minit pertama. Pakaian smart-casual — anda makan, tetapi tiada kod pakaian ketat.' },
      { q: 'Bolehkah saya kekal dalam pelayaran untuk melihat jambatan diterangi pada waktu malam?', a: 'Pelayaran matahari terbenam adalah 3 jam (17:30-20:30), jadi pada penghujungnya anda akan melihat Jambatan Bosphorus diterangi sepenuhnya dan Menara Maiden bercahaya. Jika anda mahu pemandangan malam PUNCAK (21:00-00:00, semua restoran dan monumen diterangi penuh), tempah pelayaran makan malam 21:00. Terbaik dari kedua-dua: tempah kedua-duanya pada malam berbeza.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Matahari Terbenam · Bayar di Atas Bot',
      secondary: 'Bertolak 17:30 · Matahari terbenam + makan malam termasuk · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Lihat Pelayaran Makan Malam (21:00)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tur Malam Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam + Persembahan',
      description: 'Tur malam 3 jam Bosphorus dengan makan malam dan persembahan langsung. Bertolak 21:00 dari Kabataş, jambatan bercahaya. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Malam Bosphorus',
      subtitle: 'Jambatan Istanbul yang diterangi, istana bercahaya dan air Bosphorus seperti cermin yang memantulkan 30 juta lampu — pelayaran malam yang mentakrifkan petang Istanbul.',
      badge: 'Jambatan Diterangi · Persembahan Langsung · Makan Malam Termasuk'
    },
    intro: [
      '**Pelayaran malam Bosphorus** ialah aktiviti petang paling disyorkan di Istanbul. Inilah sebabnya: selepas gelap, Bosphorus berubah. Jambatan Bosphorus bertukar antara biru, ungu dan emas. Istana Dolmabahçe bercahaya kuning hangat. Masjid Ortaköy dipantulkan dengan sempurna ke dalam air hitam. Setiap mercu tanda Istanbul mencapai drama puncak pada waktu malam.',
      '**Pelayaran malam makan malam Bosphorus kami** mengemaskan petang ikonik lengkap: 3 jam di atas air (21:00-00:00), jamuan Turki berbilang hidangan, tarian rakyat langsung (sema, 5 tarian rakyat, tarian oryantal), muzik langsung, dan set DJ yang menghidupkan dek sehingga akhir malam. Setiap tetamu mendapat program yang sama — tiada pilihan "asas" yang melangkau bahagian terbaik.',
      'Sama ada ini adalah perjalanan pertama anda ke Istanbul dan anda mencari "satu perkara yang perlu dilakukan pada waktu malam", atau anda pernah ke sini sebelum ini dan anda mahukan 3 jam paling fotogenik di bandar — inilah **pelayaran malam Bosphorus** dinilai 4.8★ oleh 11,317+ pengembara. Berlesen TÜRSAB, bayar di atas bot, tiada bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Bosphorus diterangi pada drama puncak', desc: 'Jambatan Bosphorus bertukar warna (biru, ungu, emas), istana bercahaya kuning, Masjid Ortaköy dipantulkan ke dalam air hitam. 21:00-00:00 pencahayaan puncak untuk semua mercu tanda Istanbul.' },
      { title: 'Persembahan Turki tradisional di atas bot', desc: 'Persembahan sema, 5 tarian rakyat tradisional (dari pelbagai wilayah Turki), tarian oryantal, muzik Turki langsung, kemudian set DJ. Persembahan 40 minit, kemudian muzik + makan malam berterusan.' },
      { title: 'Hidangan lengkap berbilang hidangan', desc: '10 jenis meze Turki, pembuka selera panas (paçanga böreği), hidangan utama (salmon, sea bass, ayam, köfte, vegetarian — pilihan anda), pencuci mulut (kek aiskrim), minuman ringan tanpa had. Diperakui halal.' },
      { title: 'Laluan Bosphorus penuh', desc: 'Kabataş → Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Bebek → Rumeli Hisarı → Jambatan Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Menara Maiden → Kabataş.' }
    ],
    faq: [
      { q: 'Bilakah pelayaran malam Bosphorus?', a: 'Pendaftaran masuk dari 20:00 di Jeti Kabataş. Bot bertolak pada 21:00, kembali sekitar 00:00 (tengah malam). Kami cadangkan tiba 20 minit awal untuk menetap dan memilih tempat duduk.' },
      { q: 'Berapakah harga pelayaran malam Bosphorus?', a: 'Pelayaran malam Standard (3 jam, makan malam, persembahan): €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}). VIP dengan tempat duduk hadapan pentas dan menu premium: €{p.dinnerVip}/orang (asalnya €{p.dinnerVipOriginal}). Umur 0-3 percuma, 4-8 separuh harga. Bayar di atas bot.' },
      { q: 'Apakah perbezaan antara pelayaran malam Bosphorus dan pelayaran makan malam?', a: 'Perkara yang sama, kata kunci berbeza. "Pelayaran malam Bosphorus" adalah cara kebanyakan pengembara mencari; "pelayaran makan malam" adalah istilah industri. Bot yang sama, jadual 3 jam yang sama, menu yang sama, persembahan yang sama. Pilih istilah carian mana-mana yang anda suka — pengalamannya sama.' },
      { q: 'Adakah pelayaran malam Bosphorus berbaloi berbanding pelayaran matahari terbenam?', a: 'Pelayaran malam = Istanbul diterangi, drama cahaya puncak, program hiburan penuh, foto paling ikonik jambatan diterangi. Matahari terbenam = waktu keemasan, rentak lebih perlahan, berakhir pada 20:30. Jika anda hanya melakukan satu: pelayaran malam lebih ikonik. Ramai yang melakukan kedua-duanya pada hari berbeza.' },
      { q: 'Bolehkah saya melakukan pelayaran malam Bosphorus pada hari pertama saya di Istanbul?', a: 'Ya — kami mencadangkannya. Ramai pengembara menempah pelayaran malam untuk petang pertama mereka kerana ia memberi anda orientasi lengkap: semua mercu tanda utama dari air, makan malam dan hiburan yang baik. Lebih mudah pada jet lag berbanding cuba bersiar-siar pada hari 1. Pemindahan hotel tersedia dari kawasan pusat.' },
      { q: 'Saya tidak tahu bahasa Turki — adakah pelayaran dalam bahasa Inggeris?', a: 'Kakitangan berbahasa Inggeris. Hiburan (sema, tarian rakyat, muzik) tidak memerlukan bahasa. Menu makan malam dalam bahasa Inggeris. Tempahan melalui WhatsApp / Telegram / WeChat berfungsi dalam pelbagai bahasa (Inggeris, Arab, Rusia, Jerman, Perancis, Sepanyol). Tiada keperluan untuk bahasa Turki.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Malam · Bayar di Atas Bot',
      secondary: 'Bertolak 21:00 · 3 jam · Makan malam + persembahan termasuk · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Pelayaran Makan Malam Istanbul dari €{p.dinnerStd} — Tur Malam Bosphorus',
      description: 'Pelayaran makan malam 3 jam di Istanbul Bosphorus. Menu Turki pelbagai hidangan, folklor langsung, jambatan bercahaya. Pembatalan percuma, bayar di kapal. 11,317 ulasan.'
    },
    hero: {
      h1: 'Pelayaran Makan Malam Istanbul',
      subtitle: 'Pelayaran makan malam terbaik di Istanbul — 3 jam di Bosphorus, jamuan Turki berbilang hidangan, hiburan langsung dan pemandangan malam mercu tanda paling ikonik bandar ini.',
      badge: '4.8★ · 11,317 ulasan · TÜRSAB A-17672'
    },
    intro: [
      'Mencari **pelayaran makan malam di Istanbul**? Anda menemui apa yang disyorkan oleh kebanyakan pengembara. Petang 3 jam kami di Bosphorus menggabungkan makan malam Turki berbilang hidangan penuh, tarian rakyat langsung dan pemandangan paling fotogenik bandar ini — semua dari bot yang selesa yang bertolak dari Jeti Kabataş pada 21:00.',
      'Pengalaman **pelayaran makan malam Istanbul**: naik pada 20:00, menetap, saksikan Istana Dolmabahçe berlalu semasa kami bertolak, makan malam bermula semasa kami menghampiri Masjid Ortaköy, persembahan bermula (sema, tarian rakyat, oryantal), pencuci mulut tiba semasa anda berada di bawah Jambatan Bosphorus yang diterangi. Anda kembali ke Kabataş dengan kolaj foto ikonik dan perut yang penuh menjelang tengah malam.',
      'Dari €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}) untuk pelayaran Standard, atau €{p.dinnerVip}/orang (asalnya €{p.dinnerVipOriginal}) untuk VIP dengan tempat duduk hadapan pentas. Bayar di atas bot — tiada bayaran pendahuluan, tiada risiko. Berlesen TÜRSAB A-17672, dinilai 4.8★ oleh 11,317+ pengembara.'
    ],
    highlights: [
      { title: 'Makan malam Turki berbilang hidangan lengkap', desc: '10 jenis meze, pembuka selera panas, hidangan utama (salmon/sea bass/ayam/köfte/vegetarian), kek aiskrim. Diperakui halal. Minuman ringan tanpa had termasuk.' },
      { title: 'Persembahan tarian rakyat Turki langsung', desc: 'Persembahan sema, 5 tarian rakyat tradisional, tarian oryantal, muzik Turki langsung, DJ. Persembahan 40 minit, muzik suasana berterusan.' },
      { title: 'Laluan malam Bosphorus penuh', desc: 'Pelayaran 3 jam: Dolmabahçe, Çırağan, Masjid Ortaköy, Jambatan Bosphorus, Bebek, Rumeli Hisarı, Jambatan FSM, Beylerbeyi, Üsküdar, Menara Maiden. Kedua-dua tepi Eropah dan Asia.' },
      { title: 'Dari €{p.dinnerStd} — bayar di atas bot', desc: 'Standard: €{p.dinnerStd} (asalnya €{p.dinnerStdOriginal}). VIP dengan menu premium: €{p.dinnerVip} (asalnya €{p.dinnerVipOriginal}). Tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
      { q: 'Berapakah kos pelayaran makan malam di Istanbul?', a: 'Pelayaran makan malam Standard kami €{p.dinnerStd}/orang (harga biasa €{p.dinnerStdOriginal}). VIP dengan tempat duduk hadapan pentas dan menu premium €{p.dinnerVip}/orang (harga biasa €{p.dinnerVipOriginal}). Umur 0-3 percuma, 4-8 diskaun 50%. Bayar di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Apa yang termasuk dalam harga pelayaran makan malam Istanbul?', a: 'Pelayaran 3 jam di Bosphorus, makan malam Turki berbilang hidangan (meze, pembuka selera panas, hidangan utama, pencuci mulut), minuman ringan tanpa had, persembahan tarian rakyat langsung (sema, tarian rakyat, oryantal), muzik langsung + DJ, akses dek terbuka, cukai termasuk. Pemindahan hotel dan alkohol adalah tambahan pilihan.' },
      { q: 'Dari manakah pelayaran makan malam Istanbul bertolak?', a: 'Jeti Kabataş, Istanbul — di tepi Eropah, bersebelahan Istana Dolmabahçe. Lokasi pertemuan tepat dikongsi melalui WhatsApp / Telegram / WeChat selepas tempahan. Video arah berjalan dari perhentian trem Dolmabahçe dan stesen trem Kabataş di bahagian titik pertemuan di atas.' },
      { q: 'Berapa lamakah pelayaran makan malam — dan bila ia bermula?', a: '3 jam secara keseluruhan. Pendaftaran masuk dari 20:00, bot bertolak sepenuhnya pada 21:00, kembali sekitar 00:00 (tengah malam). Kami cadangkan tiba 15-20 minit awal untuk menetap dan memilih tempat duduk.' },
      { q: 'Perlukah saya menempah awal, atau bolehkah saya hadir sahaja?', a: 'Tempah awal — tempat duduk terisi, terutamanya hujung minggu dan cuti. Tempahan hari yang sama selalunya boleh tetapi tidak dijamin. Wizard di halaman ini mengekalkan tempat anda dalam masa kurang 1 minit. Bayar di atas bot, jadi tiada risiko kewangan untuk menempah awal.' },
      { q: 'Adakah pelayaran makan malam Istanbul sesuai untuk vegetarian / halal / sekatan diet?', a: 'Ya — semua daging diperakui halal. Hidangan utama vegetarian (falafel, kentang panggang, pilaf bulgur, rebusan sayur, gelang bawang) tersedia tanpa bayaran tambahan. Alahan boleh diuruskan jika dimaklumkan semasa tempahan. Alkohol adalah tambahan pilihan, tidak pernah dipaksa.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Makan Malam · Bayar di Atas Bot',
      secondary: '4.8★ · Berlesen TÜRSAB · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tur Malam Istanbul dari €{p.dinnerStd} — Pelayaran Bosphorus + Persembahan',
      description: 'Pelayaran 3 jam Bosphorus dengan makan malam dan persembahan langsung. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal. 11,317 ulasan. Pengangkutan hotel pilihan.'
    },
    hero: {
      h1: 'Pelayaran Malam Istanbul',
      subtitle: 'Pelayaran malam yang pertama disyorkan oleh penduduk Istanbul — pelayaran Bosphorus 3 jam dengan makan malam, hiburan langsung dan pemandangan paling ikonik yang diterangi bandar ini.',
      badge: 'Petang Istanbul Ikonik · 3 Jam · Makan Malam Termasuk'
    },
    intro: [
      '**Pelayaran malam Istanbul** perlu melakukan tiga perkara: memberi anda pemandangan ikonik bandar, memberi anda makan dengan baik dan menghiburkan anda. Pelayaran makan malam Bosphorus kami melakukan ketiga-tiganya dalam satu petang 3 jam — dan itulah sebabnya kebanyakan panduan Istanbul mengesyorkannya sebagai pengalaman pelayaran malam #1.',
      'Laluan **pelayaran malam Istanbul** merangkumi mercu tanda diterangi yang terbaik: Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus (bertukar warna), kawasan Bebek, Rumeli Hisarı, Jambatan FSM, Istana Beylerbeyi, pantai Asia Üsküdar, dan Menara Maiden di kejauhan. Kebanyakan pelayaran bandar menunjukkan ini dari bas — kami menunjukkannya dari air, di mana ia paling dramatik.',
      'Makan malam termasuk (menu Turki berbilang hidangan), persembahan tarian rakyat Turki langsung, sema, tarian oryantal dan set DJ. Jika anda di Istanbul selama 2-3 hari, ini adalah satu petang yang memberi impak paling besar. 4.8★ dari 11,317+ pengembara, bayar di atas bot, tiada bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Semua pemandangan malam Istanbul ikonik', desc: 'Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus diterangi, Rumeli Hisarı, Jambatan FSM, Istana Beylerbeyi, Menara Maiden. Setiap mercu tanda utama dalam pencahayaan malam puncak.' },
      { title: 'Hidangan Turki lengkap termasuk', desc: '10 meze, pembuka selera panas, hidangan utama (salmon/sea bass/ayam/köfte/vegetarian), pencuci mulut, minuman ringan tanpa had. Diperakui halal. Berharga €{p.dinnerStd}/orang — semua termasuk.' },
      { title: 'Tarian rakyat langsung + sema + oryantal', desc: 'Hiburan Turki tradisional: persembahan sema Mevlana, 5 tarian rakyat serantau, tarian oryantal, muzik langsung, DJ. Persembahan 40 minit, muzik suasana sepanjang petang.' },
      { title: 'Mudah untuk pengunjung kali pertama ke Istanbul', desc: 'Titik pertemuan pusat (Jeti Kabataş), pemindahan hotel (+€{p.transfer}/orang), kakitangan berbahasa Inggeris, bayar di atas bot. Sifar tekanan logistik. Datang, nikmati, pulang.' }
    ],
    faq: [
      { q: 'Apakah pelayaran malam terbaik di Istanbul?', a: 'Pelayaran makan malam Bosphorus secara konsisten disenaraikan sebagai #1. Sebab: (1) ia memberi anda semua pemandangan malam ikonik dari air, (2) ia merangkumi makan malam dan persembahan dalam satu pakej, (3) 3 jam cukup untuk melihat banyak tanpa keletihan, (4) titik pertemuan pusat, (5) bayar di atas bot mengurangkan geseran tempahan. Kebanyakan panduan perjalanan Istanbul mengesyorkannya sebagai "satu perkara malam yang mesti dilakukan".' },
      { q: 'Berapakah harga pelayaran malam Istanbul?', a: 'Pelayaran malam makan malam Bosphorus kami: Standard €{p.dinnerStd}/orang, VIP €{p.dinnerVip}/orang. Termasuk pelayaran, makan malam, hiburan, minuman ringan. Pilihan: alkohol +€{p.unlimited}/orang, pemindahan hotel +€{p.transfer}/orang. Bayar di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Adakah pelayaran malam Istanbul selamat untuk pengembara solo?', a: 'Ya — sangat selamat. Bot berlesen TÜRSAB, kakitangan profesional berbahasa Inggeris, CCTV di dek, jaket keselamatan tersedia. Ramai pengembara solo menempah pelayaran ini. Anda makan di meja dikongsi atau peribadi (pilihan anda) dan petang bersifat merangkumi — anda berkenalan dengan pengembara lain jika mahu, atau kekal sendiri.' },
      { q: 'Bilakah masa terbaik untuk pelayaran malam di Istanbul?', a: 'Pelayaran makan malam Bosphorus kami ialah 21:00-00:00 (3 jam). Ini adalah masa pencahayaan puncak untuk semua mercu tanda Istanbul — jambatan diterangi penuh, istana bercahaya, bulan di atas air. Jika anda mahu lebih awal (waktu keemasan), pertimbangkan pelayaran matahari terbenam 17:30 sebagai gantinya.' },
      { q: 'Bagaimana saya sampai ke titik pertemuan pelayaran malam Istanbul?', a: 'Titik pertemuan ialah Jeti Kabataş (pusat Eropah, bersebelahan Istana Dolmabahçe). Dengan trem: T1 ke stesen Kabataş (hujung talian). Dengan teksi: ~15 min dari Taksim. Berjalan: 20 min menuruni Jalan İnönü dari Taksim. Halaman ini mempunyai video arah berjalan. Pemindahan hotel tersedia +€{p.transfer}/orang jika anda mahu.' },
      { q: 'Bolehkah saya menempah pelayaran malam Istanbul hari yang sama?', a: 'Selalunya ya, terutamanya hari bekerja. Hujung minggu penuh dengan lebih cepat. Wizard tempahan di halaman ini membolehkan anda menyemak kekosongan untuk malam ini dan menempah dalam masa kurang 1 minit. Untuk permintaan hari yang sama segera, hantar mesej WhatsApp di +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Malam · Bayar di Atas Bot',
      secondary: 'Dari €{p.dinnerStd}/orang · Makan malam + persembahan termasuk · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Tur Bot Istanbul dari €{p.dinnerStd} — Bosphorus + Makan Malam + Persembahan',
      description: 'Tur bot 3 jam: pelayaran Bosphorus, makan malam Turki lengkap, folklor langsung, pemandangan malam bercahaya. Pembatalan percuma, bayar di kapal. 11,317 ulasan.'
    },
    hero: {
      h1: 'Pelayaran Bot Istanbul',
      subtitle: 'Pelayaran bot Istanbul paling banyak ditempah oleh pengembara — pelayaran Bosphorus dengan hidangan Turki, hiburan langsung dan pemandangan ikonik bandar dari air.',
      badge: '4.8★ · TÜRSAB A-17672 · Bayar di Atas Bot'
    },
    intro: [
      'Apabila anda mencari "pelayaran bot Istanbul", anda mencari satu perkara yang mentakrifkan bandar dari air: Bosphorus. Pelayaran bot Bosphorus 3 jam kami membawa anda melepasi setiap mercu tanda utama Istanbul — Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus, Rumeli Hisarı, Istana Beylerbeyi dan Menara Maiden — dengan hidangan Turki lengkap dan hiburan langsung.',
      'Berbeza dengan banyak feri bersiar-siar 1 jam yang merangkumi kurang Bosphorus dan melangkau makan malam dan hiburan, **pelayaran bot Istanbul kami** adalah pengalaman petang lengkap: pendaftaran masuk 20:00 di Jeti Kabataş, pelayaran sehingga tengah malam, 10 meze, hidangan utama, pencuci mulut, sema, tarian rakyat, tarian oryantal dan DJ. Anda mendapat pelayaran DAN keluar malam sekali gus.',
      'Sama ada anda mempunyai satu malam di Istanbul atau seminggu penuh, **pelayaran bot Istanbul** ini menyelesaikan tugas. 4.8★ dari 11,317+ pengembara, berlesen TÜRSAB (A-17672), menu diperakui halal dan bayar di atas bot — tiada komitmen kewangan sehingga anda berpuas hati dengan pengalaman.'
    ],
    highlights: [
      { title: 'Semua mercu tanda utama Bosphorus', desc: 'Dolmabahçe, Çırağan, Masjid Ortaköy, Jambatan Bosphorus, Bebek, Rumeli Hisarı, Jambatan FSM, Istana Beylerbeyi, Üsküdar, Menara Maiden. Kedua-dua pantai Eropah dan Asia dalam satu pelayaran.' },
      { title: 'Makan malam + persembahan termasuk', desc: 'Bukan sahaja pelayaran bot — makan malam Turki berbilang hidangan penuh, persembahan tarian rakyat langsung, sema, tarian oryantal, DJ. Apa yang menjadikan 3 jam menyeronokkan, bukan sekadar bersiar-siar.' },
      { title: 'Bertolak petang (pencahayaan terbaik)', desc: 'Bertolak 21:00 menangkap Bosphorus diterangi dalam kecemerlangan puncak — jambatan, istana, masjid semua menyala. Lebih dramatik daripada pelayaran siang yang menunjukkan mercu tanda sama dalam cahaya rata.' },
      { title: 'Tempahan mudah, pembayaran mudah', desc: 'Tempah dalam kurang 1 minit dengan wizard di halaman ini. Bayar di atas bot — tiada bayaran pendahuluan. Pemindahan hotel tersedia dari +€{p.transfer}/orang. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
      { q: 'Apakah pelayaran bot terbaik di Istanbul?', a: 'Pelayaran makan malam Bosphorus secara konsisten disenaraikan sebagai #1. Ia merangkumi semua mercu tanda utama, termasuk makan malam dan hiburan, dan beroperasi pada waktu petang apabila mercu tanda diterangi. Pilihan lain (feri hop-on, bot bersiar-siar pagi) merangkumi laluan lebih pendek, melangkau makan malam dan tidak mempunyai hiburan. Untuk satu petang Istanbul, ini adalah pelayaran bot paling lengkap.' },
      { q: 'Berapa lamakah pelayaran bot Istanbul?', a: '3 jam. Pendaftaran masuk 20:00 di Jeti Kabataş, bertolak 21:00, kembali ~00:00. Merangkumi Bosphorus penuh dari Dolmabahçe ke Rumeli Hisarı dan kembali. Masa yang cukup untuk makan malam penuh + persembahan tanpa rasa tergesa-gesa.' },
      { q: 'Berapakah harga pelayaran bot Istanbul?', a: 'Pelayaran bot makan malam kami: Standard €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}), VIP dengan menu premium €{p.dinnerVip}/orang (asalnya €{p.dinnerVipOriginal}). Umur 0-3 percuma, 4-8 separuh harga. Bayar di atas bot. Alkohol dan pemindahan hotel adalah tambahan pilihan.' },
      { q: 'Dari manakah pelayaran bot Istanbul bertolak?', a: 'Bot kami bertolak dari Jeti Kabataş, pusat Istanbul tepi Eropah, bersebelahan Istana Dolmabahçe. Boleh diakses melalui trem T1 (stesen Kabataş), teksi 15 min dari Taksim atau berjalan 20 min dari Taksim. Pemindahan hotel tersedia dari kawasan pusat +€{p.transfer}/orang.' },
      { q: 'Adakah pelayaran bot ini sesuai untuk keluarga berkanak-kanak?', a: 'Ya — sangat mesra keluarga. Kanak-kanak 0-3 tahun percuma, 4-8 diskaun 50%. Tempat duduk dalaman tertutup, menu kanak-kanak atas permintaan dan hiburan (sema, tarian rakyat) menarik untuk kanak-kanak. Ramai keluarga dari seluruh dunia menempah pelayaran ini.' },
      { q: 'Perlukah saya bawa apa-apa untuk pelayaran bot?', a: 'Pasport atau kad pengenalan (untuk pendaftaran bot), jaket nipis (dek boleh sejuk), kasut selesa jika anda bercadang menari. Telefon pintar untuk foto. Tunai atau kad untuk bayar di atas bot (kedua-duanya diterima). Segala yang lain — makan malam, minuman, hiburan — disediakan di atas bot.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Bot · Bayar di Atas Bot',
      secondary: '3 jam · Makan malam + persembahan · Dari €{p.dinnerStd}/orang · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Perjalanan Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam + Persembahan',
      description: 'Perjalanan 3 jam Bosphorus: makan malam Turki, folklor langsung, pemandangan malam bercahaya. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Persiaran Bosphorus',
      subtitle: 'Persiaran Bosphorus yang paling disyorkan pengembara — pelayaran makan malam 3 jam yang merangkumi setiap mercu tanda utama Istanbul, dengan makan malam, hiburan dan pemandangan malam.',
      badge: 'Pengalaman Bosphorus Penuh · Bertolak Petang'
    },
    intro: [
      '**Persiaran Bosphorus** boleh bermaksud feri bersiar-siar 1 jam atau pelayaran petang penuh dengan makan malam — kami melakukan yang kedua, dan kebanyakan pengembara mendapati ia adalah pengalaman bernilai lebih baik. 3 jam, €{p.dinnerStd}/orang, makan malam dan hiburan termasuk. Anda bukan sahaja melepasi mercu tanda — anda makan, menonton persembahan dan menikmati petang.',
      'Laluan **persiaran Bosphorus kami** merangkumi segala yang patut dilihat: Istana Dolmabahçe (kediaman Sultan Uthmaniyah abad ke-19), Masjid Ortaköy (salah satu masjid paling difoto di Istanbul), Jambatan Bosphorus (bertukar warna pada waktu malam), Rumeli Hisarı (dibina oleh Sultan Mehmed II pada 1452), Istana Beylerbeyi (tepi Asia) dan Menara Maiden di sebuah pulau kecil. Semuanya dijelaskan oleh kakitangan berbahasa Inggeris.',
      'Sama ada anda di Istanbul selama 24 jam atau seminggu, inilah **persiaran Bosphorus** yang memberi anda paling banyak dalam satu petang. Dinilai 4.8★ oleh 11,317+ pengembara, berlesen TÜRSAB A-17672, menu mesra halal, bayar di atas bot — tiada risiko bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Bosphorus penuh dalam satu masa', desc: 'Pantai Eropah (Dolmabahçe, Ortaköy, Rumeli Hisarı), pantai Asia (Beylerbeyi, Üsküdar), kedua-dua jambatan Bosphorus, Menara Maiden. Setiap mercu tanda utama kelihatan dalam 3 jam.' },
      { title: 'Makan malam + hiburan termasuk', desc: 'Bukan sekadar feri bersiar-siar — makan malam Turki lengkap dengan meze, hidangan utama, pencuci mulut. Persembahan tarian rakyat langsung, sema, oryantal, DJ. Nilai hiburan melampaui pemandangan semata-mata.' },
      { title: 'Petang = pencahayaan terbaik', desc: 'Persiaran Bosphorus siang menunjukkan anda mercu tanda dalam cahaya rata. Persiaran petang menangkap semua diterangi: istana bercahaya, jambatan berwarna, masjid dipantulkan ke dalam air gelap. Foto lebih baik, lebih dramatik.' },
      { title: 'Dari €{p.dinnerStd} — bayar di atas bot', desc: 'Tiada bayaran pendahuluan diperlukan. Bayar di atas bot (tunai atau kad). Pembatalan percuma sehingga 2 jam sebelum bertolak. Umur 0-3 percuma, 4-8 separuh harga. Harga telus.' }
    ],
    faq: [
      { q: 'Apakah persiaran Bosphorus terbaik di Istanbul?', a: 'Pelayaran makan malam petang secara konsisten berada di kedudukan teratas. Pilihan siang (feri pengangkutan 1 jam, bot bersiar-siar 2 jam) menunjukkan kurang dan tidak termasuk makan malam. Untuk nilai, sukar untuk mengalahkan pelayaran 3 jam dengan makan malam, persembahan dan titik pergi-pulang yang pusat. Kos €{p.dinnerStd} pelayaran kami menghapuskan keperluan untuk petang makan malam + hiburan yang berasingan.' },
      { q: 'Berapa lamakah persiaran Bosphorus?', a: 'Persiaran Bosphorus kami adalah 3 jam secara keseluruhan (bertolak 21:00, kembali 00:00). Terdapat pilihan lebih pendek (feri bersiar-siar 1 jam, pelayaran 90 minit) tetapi ia melangkau makan malam dan hiburan. Untuk pengalaman petang lengkap, 3 jam adalah ideal — cukup untuk melihat segalanya, tidak meletihkan.' },
      { q: 'Adakah persiaran Bosphorus berbaloi?', a: 'Ya — hampir setiap panduan perjalanan Istanbul menyenaraikan "pelayaran Bosphorus" sebagai salah satu 5 perkara yang mesti dilakukan. Bandar dibina di sekitar selat ini; jika anda tidak melihat Bosphorus dari air, anda tidak benar-benar melihat Istanbul. Pelayaran petang khusus kami menambah makan malam dan hiburan, menjadikannya keluar petang lengkap dan bukan sekadar bersiar-siar.' },
      { q: 'Apa yang perlu saya bawa untuk persiaran Bosphorus?', a: 'Pasport atau kad pengenalan (untuk pendaftaran bot), jaket nipis (dek sejuk pada waktu petang), telefon pintar/kamera, kasut selesa untuk lantai tarian. Tunai atau kad untuk pembayaran. Segala yang lain di atas bot. Pemindahan hotel tersedia +€{p.transfer}/orang jika anda tidak mahu menggunakan pengangkutan awam.' },
      { q: 'Adakah persiaran Bosphorus sesuai untuk kanak-kanak?', a: 'Ya — sangat mesra kanak-kanak. Kanak-kanak 0-3 tahun percuma (termasuk pemindahan), 4-8 diskaun 50%. Tempat duduk dalaman tertutup, menu kanak-kanak atas permintaan dan hiburan adalah sopan dan menarik. Ramai keluarga menempah ini sebagai sorotan perjalanan Istanbul mereka.' },
      { q: 'Apakah perhentian persiaran Bosphorus?', a: 'Pelayaran berterusan — kami tidak berhenti di mercu tanda (tiada turun). Bot melepasi berhampiran setiap mercu tanda, kakitangan menerangkan apa yang anda lihat, anda kekal selesa di meja anda atau berpindah ke dek terbuka untuk foto. Tiada barisan, tiada berjalan — hanya 3 jam lancar di atas air.' }
    ],
    cta: {
      primary: 'Tempah Persiaran Bosphorus · Bayar di Atas Bot',
      secondary: '3 jam · Makan malam + persembahan · Pembatalan percuma 2 jam sebelum · Berlesen TÜRSAB',
      tertiary: 'Semak Kekosongan'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Tiket Pelayaran Bosphorus dari €{p.dinnerStd} — Bayar di Kapal',
      description: 'Tiket langsung pelayaran Bosphorus. Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Tiada deposit, bayar di kapal. Pembatalan percuma hingga 2 jam sebelumnya. 11,317 ulasan.'
    },
    hero: {
      h1: 'Tiket Pelayaran Bosphorus',
      subtitle: 'Lepaskan yuran perantara — beli tiket pelayaran Bosphorus terus dari kami. Tiada bayaran pendahuluan, bayar di atas bot, pembatalan percuma sehingga 2 jam sebelum bertolak.',
      badge: 'Tempahan Terus · Tiada Bayaran Pendahuluan · DISKAUN 40%'
    },
    intro: [
      'Mencari **tiket pelayaran Bosphorus**? Beli terus. Tiket kami €{p.dinnerStd} (Standard) atau €{p.dinnerVip} (VIP) — diskaun 40% daripada harga biasa (€{p.dinnerStdOriginal} dan €{p.dinnerVipOriginal}). Tapak tempahan pihak ketiga selalunya menambah komisen 20-40%. Dengan menempah terus, anda menjimatkan — dan anda masih boleh bayar di atas bot.',
      'Proses **tiket pelayaran Bosphorus** kami: isi wizard di halaman ini dalam kurang 1 minit (tarikh, bilangan tetamu, pakej, hubungan), kami mengesahkan serta-merta melalui WhatsApp / Telegram / WeChat, anda hadir di Jeti Kabataş pada 20:00, anda bayar di atas bot, anda nikmati pelayaran makan malam 3 jam. Tiada tiket fizikal untuk dicetak, tiada baucar untuk e-mel — pengesahan adalah tiket anda.',
      'Sama ada anda menempah pelayaran makan malam untuk malam ini atau mengamankan tarikh tertentu minggu depan, **tiket pelayaran Bosphorus terus** adalah cara paling pantas. Dinilai 4.8★, berlesen TÜRSAB (A-17672), menu diperakui halal dan menyokong tambahan alkohol serta pemindahan hotel.'
    ],
    highlights: [
      { title: 'Tempahan terus — tiada yuran perantara', desc: '€{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Tapak pihak ketiga mengenakan €30-80+ untuk pelayaran yang sama. Anda menjimatkan dengan menempah terus dengan kami. Tiada caj tersembunyi, tiada markup komisen.' },
      { title: 'Bayar di atas bot — tiada bayaran pendahuluan', desc: 'Tempah tempat anda sekarang, bayar semasa anda menaiki kapal. Tunai atau kad diterima. Percuma jika anda batal 2+ jam sebelum bertolak. Sifar risiko kewangan untuk mengamankan awal.' },
      { title: 'Pengesahan dalam kurang 1 minit', desc: 'Isi wizard → kami mengesahkan melalui WhatsApp / Telegram / WeChat. Tiada PDF beremel untuk dicetak. Mesej kami adalah tiket anda. Hadir di jeti pada 20:00.' },
      { title: 'DISKAUN 40% harga pelancaran semasa', desc: 'Standard asalnya €{p.dinnerStdOriginal}, kini €{p.dinnerStd}. VIP asalnya €{p.dinnerVipOriginal}, kini €{p.dinnerVip}. Diskaun 40% kerana anda menempah terus. Bukan nombor terhad masa — harga tempahan terus standard kami.' }
    ],
    faq: [
      { q: 'Berapakah harga tiket pelayaran Bosphorus?', a: 'Standard: €{p.dinnerStd}/orang (biasa €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/orang (biasa €{p.dinnerVipOriginal}). Termasuk pelayaran 3 jam, makan malam Turki berbilang hidangan, persembahan tarian rakyat langsung, minuman ringan tanpa had. Umur 0-3 percuma, 4-8 diskaun 50%. Bayar di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Di manakah boleh saya beli tiket pelayaran Bosphorus?', a: 'Terus di halaman ini — isi wizard tempahan, kami mengesahkan serta-merta melalui WhatsApp / Telegram / WeChat. Bayar di atas bot. Platform pihak ketiga (Viator, GetYourGuide, Klook) juga menjual tiket tetapi selalunya mengenakan €30-80+ — ini adalah markup perantara. Terus adalah paling murah dan paling pantas.' },
      { q: 'Perlukah saya mencetak tiket pelayaran Bosphorus?', a: 'Tidak — tiada tiket fizikal atau baucar diperlukan. Selepas tempahan, kami hantar pengesahan melalui WhatsApp (atau Telegram/WeChat) dengan titik pertemuan, masa dan nama tempahan anda. Cuma tunjuk telefon anda di jeti. Itu sahaja.' },
      { q: 'Bolehkah saya batal atau dapatkan bayaran balik tiket pelayaran Bosphorus saya?', a: 'Ya — pembatalan percuma sehingga 2 jam sebelum bertolak. Cuma hantar mesej WhatsApp. Kerana anda belum bayar lagi (bayar di atas bot), tiada bayaran balik diperlukan — anda hanya tidak hadir, tiada caj. Jauh lebih fleksibel daripada tiket pihak ketiga bayar pendahuluan.' },
      { q: 'Adakah tiket pelayaran Bosphorus tersedia pada hari yang sama?', a: 'Selalunya ya, terutamanya hari bekerja. Hujung minggu dan cuti penuh dengan lebih cepat. Semak kekosongan melalui wizard tempahan — ia dikemas kini masa nyata. Tempahan hari yang sama biasanya mungkin sehingga beberapa jam sebelum bertolak 21:00. Untuk permintaan segera, WhatsApp.' },
      { q: 'Adakah tiket pelayaran Bosphorus kanak-kanak percuma?', a: 'Kanak-kanak **0-3 tahun percuma sepenuhnya** (tiada bayaran, tiada caj tersembunyi, termasuk pemindahan). **4-8 tahun diskaun 50%** (€{p.dinnerStd}/2 = €12 dalam Standard). **9+ tahun harga dewasa penuh.** Harga dihadkan dan telus — tiada tipu muslihat "caj bayi".' }
    ],
    cta: {
      primary: 'Dapatkan Tiket · Bayar di Atas Bot',
      secondary: 'Tempahan terus · Tiada bayaran pendahuluan · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Semak Kekosongan'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosphorus Saat Akhir dari €{p.dinnerStd} — Tempah Malam Ini, Bayar di Kapal',
      description: 'Tempahan pelayaran Bosphorus hari yang sama. Pengesahan WhatsApp dalam minit. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal. 11,317 ulasan.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Saat Akhir',
      subtitle: 'Kekosongan untuk malam ini, disahkan dalam minit. Tiada bayaran pendahuluan, tiada baucar pra-cetak — hanya hadir di jeti dan nikmati petang.',
      badge: 'Tempahan Hari yang Sama · Disahkan dalam Minit · Bayar di Atas Bot'
    },
    intro: [
      'Tiba di Istanbul petang ini dan mahu malam yang hebat malam ini? **Pelayaran Bosphorus saat akhir** berfungsi. Kami mengekalkan tempat duduk khusus untuk tempahan hari yang sama kerana kami tahu ramai pengembara membuat keputusan pada waktu pagi. Isi wizard di sini, kami mengesahkan melalui WhatsApp dalam minit, anda hadir di Jeti Kabataş pada 20:00, anda bayar di atas bot, anda nikmati.',
      '**Pelayaran Bosphorus saat akhir kami** mempunyai program petang yang sama seperti tempahan awal: 3 jam di atas air (21:00-00:00), makan malam Turki berbilang hidangan, persembahan tarian rakyat langsung, sema, tarian oryantal, DJ. Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus yang diterangi — pemandangan ikonik yang sama. Harga €{p.dinnerStd} Standard atau €{p.dinnerVip} VIP yang sama.',
      'Pembatalan hari yang sama adalah percuma sehingga 2 jam sebelum bertolak, kerana **bayar di atas bot** bermakna anda belum berkomitmen kepada apa-apa. Tempah pada 14:00 dan ubah rancangan anda menjelang 19:00, cuma hantar mesej WhatsApp — tiada bayaran balik, tiada masalah. Itulah fleksibiliti **pelayaran Istanbul saat akhir** yang dihargai pengembara.'
    ],
    highlights: [
      { title: 'Tempat duduk untuk malam ini masih tersedia', desc: 'Kami mengekalkan 5-10 tempat duduk setiap hari untuk tempahan hari yang sama. Semak wizard di atas — kekosongan masa nyata. Jika pelayaran hari ini penuh, esok biasanya terbuka.' },
      { title: 'Pengesahan dalam kurang 5 minit', desc: 'Isi wizard → mesej pengesahan WhatsApp/Telegram/WeChat → siap. Tiada baucar e-mel untuk ditunggu, tiada kod QR untuk dicetak. Mesej kami adalah tiket anda.' },
      { title: 'Sifar pembayaran sehingga anda menaiki kapal', desc: 'Bayar di atas bot, tunai atau kad. Jika anda tidak hadir (perubahan rancangan, sakit, cuaca), tiada caj. Pembatalan percuma sehingga 2 jam sebelum bertolak. Benar-benar mesra saat akhir.' },
      { title: 'Pemindahan hotel hari yang sama selalunya tersedia', desc: 'Pemindahan hotel biasanya memerlukan notis 24 jam, tetapi untuk tempahan hari yang sama antara 14:00-17:00 kami biasanya boleh mengatur ambilan dengan +€{p.transfer}/orang. WhatsApp untuk permintaan pemindahan segera.' }
    ],
    faq: [
      { q: 'Bolehkah saya benar-benar menempah pelayaran Bosphorus untuk malam ini?', a: 'Ya — selalunya. Kami mengekalkan tempat duduk untuk tempahan hari yang sama. Semak wizard di atas untuk kekosongan malam ini. Jika tempat duduk tersedia, anda boleh tempah sehingga 18:00 (3 jam sebelum bertolak). Hujung minggu lebih ketat — tempah awal hari itu jika boleh.' },
      { q: 'Berapa lambatkah saat akhir saya boleh tempah?', a: 'Tempahan kekal terbuka sehingga 18:00 untuk bot 21:00. Selepas 18:00, hantar mesej WhatsApp terus di +90 532 244 29 22 — kami boleh sahkan secara manual jika tempat duduk terbuka. Selepas 19:30 sangat ketat melainkan anda sudah berada di Jeti Kabataş dan boleh menaiki bot dengan cepat.' },
      { q: 'Adakah pelayaran Bosphorus saat akhir lebih mahal?', a: 'Tidak — harga sama dengan tempahan awal. €{p.dinnerStd} Standard, €{p.dinnerVip} VIP. Kami tidak melakukan "harga surge" atau premium saat akhir. Bot yang sama, makan malam yang sama, persembahan yang sama, harga yang sama.' },
      { q: 'Bagaimana jika pelayaran malam ini penuh sepenuhnya?', a: 'Pelayaran esok biasanya terbuka — kami beroperasi setiap hari, 365 hari setahun. Anda boleh tempah untuk esok dan masih jadi "saat akhir" — maksudnya anda baru membuat keputusan. Pelayaran hari bekerja mempunyai lebih banyak ruang daripada hujung minggu.' },
      { q: 'Bolehkah anda mengatur pemindahan hotel saat akhir?', a: 'Pemindahan hari yang sama adalah mungkin sehingga ~17:00 untuk pelayaran 21:00. Selepas 17:00, kami mungkin tidak mempunyai pemandu tersedia — dalam kes itu, anda boleh ambil teksi ke Jeti Kabataş (15 min dari Taksim, 10 min dari Sultanahmet, ~€10-15). Pusat dan mudah.' },
      { q: 'Bagaimana jika saya sudah di Kabataş dan mahu naik kapal?', a: 'Jika anda di jeti dan tempat duduk terbuka, anda boleh berjalan dan naik. Hantar mesej WhatsApp atau tanya kakitangan — kami akan tambah anda jika ada ruang. Harga bayar di atas bot yang sama. Dalam terma pelayaran dipanggil "walk-on" — ia berfungsi di sini.' }
    ],
    cta: {
      primary: 'Tempah Malam Ini · Bayar di Atas Bot',
      secondary: 'Tempahan hari yang sama · Disahkan dalam minit · Pembatalan percuma 2 jam sebelum',
      tertiary: 'WhatsApp untuk Tempahan Segera'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Harga Pelayaran Istanbul dari €{p.dinnerStd} — Kadar Telus',
      description: 'Harga pelayaran Bosphorus Istanbul: Standard €{p.dinnerStd}, VIP €{p.dinnerVip}. Anak 0-3 percuma, 4-8 separuh harga. Tambahan telus. Pembatalan percuma.'
    },
    hero: {
      h1: 'Harga Pelayaran Istanbul',
      subtitle: 'Harga telus, tiada caj tersembunyi. Standard €{p.dinnerStd}/orang, VIP €{p.dinnerVip}/orang — dan anda membayar di atas bot, bukan sekarang.',
      badge: 'Telus · DISKAUN 40% Terus · 0-3 Tahun Percuma'
    },
    intro: [
      '**Harga pelayaran Istanbul** sangat berbeza — daripada feri bajet €15 yang melangkau makan malam kepada kapal layar gaya resort €150+. Harga kami berada di tengah dan memberikan nilai terbaik: €{p.dinnerStd} untuk Standard (pelayaran 3 jam makan malam penuh dengan persembahan), €{p.dinnerVip} untuk VIP (pengalaman premium hadapan pentas). Tiada caj tersembunyi, tiada caj tambahan mengejut.',
      'Pecahan terperinci **harga pelayaran Istanbul**, kerana ketelusan penting:\n\n- **Pelayaran Makan Malam Standard**: €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}, diskaun 40%). Termasuk pelayaran 3 jam, 10 meze, hidangan utama, pencuci mulut, minuman ringan tanpa had, persembahan langsung.\n- **Pelayaran Makan Malam VIP**: €{p.dinnerVip}/orang (asalnya €{p.dinnerVipOriginal}). Menambah tempat duduk hadapan pentas, 15+ meze, pilihan fillet daging lembu/ribeye, layanan keutamaan.\n- **Umur 0-3**: Percuma. 4-8 tahun: diskaun 50%. 9+ tahun: harga penuh.\n\nTambahan (pilihan):\n- 2 gelas alkohol: +€{p.alcohol2}/orang\n- Alkohol tempatan tanpa had: +€{p.unlimited}/orang\n- Pemindahan hotel pergi-balik: +€{p.transfer}/orang\n- Susunan meja romantik: +€{p.romantic}/meja',
      'Dan yang penting: **bayar di atas bot**. Anda tidak berkomitmen walau satu sen sehingga anda berada di atas bot. Pembatalan percuma sehingga 2 jam sebelum bertolak. Tiada komitmen, tiada risiko — harga **pelayaran Istanbul** paling mesra pengguna yang akan anda temui.'
    ],
    highlights: [
      { title: 'Standard: €{p.dinnerStd} (asalnya €{p.dinnerStdOriginal})', desc: 'Diskaun 40% daripada harga biasa. Pelayaran 3 jam, hidangan Turki lengkap, persembahan langsung, minuman ringan tanpa had. Pakej paling popular — merangkumi segala yang anda perlukan untuk petang yang hebat.' },
      { title: 'VIP: €{p.dinnerVip} (asalnya €{p.dinnerVipOriginal})', desc: 'Diskaun 40% daripada harga biasa. Menambah tempat duduk hadapan pentas, 15+ meze, hidangan utama premium (fillet daging lembu, ribeye), layanan pelayan keutamaan. Untuk majlis khas atau pengembara premium.' },
      { title: 'Harga kanak-kanak: 0-3 percuma, 4-8 separuh harga', desc: '0-3 percuma sepenuhnya (tiada bayaran). 4-8 diskaun 50% daripada harga dewasa. 9+ harga dewasa penuh. Telus, tiada tipu muslihat harga keluarga. Pemindahan juga percuma untuk 0-3.' },
      { title: 'Tambahan — hanya apabila anda mahu', desc: 'Alkohol: €{p.alcohol2} atau €{p.unlimited}/orang. Pemindahan: €{p.transfer}/orang. Meja romantik: €{p.romantic}/meja. Semua pilihan, tidak dibundelkan. Pilih hanya apa yang anda perlukan.' }
    ],
    faq: [
      { q: 'Berapakah kos pelayaran Istanbul?', a: 'Pelayaran Makan Malam Standard: €{p.dinnerStd}/orang (biasa €{p.dinnerStdOriginal}, diskaun 40%). VIP: €{p.dinnerVip}/orang (biasa €{p.dinnerVipOriginal}, diskaun 40%). Umur 0-3 percuma, 4-8 separuh harga. Bayar di atas bot — tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' },
      { q: 'Adakah terdapat caj tersembunyi dalam harga pelayaran Istanbul?', a: 'Tidak. Harga termasuk: pelayaran 3 jam, makan malam lengkap (meze, pembuka, hidangan utama, pencuci mulut), minuman ringan tanpa had, persembahan langsung, cukai. Tambahan pilihan (alkohol, pemindahan, meja romantik) diasingkan dan berharga telus — anda bayar hanya jika anda menambah. Tiada "caj perkhidmatan", "yuran pelabuhan" atau caj tambahan mengejut.' },
      { q: 'Mengapakah harga pelayaran Istanbul diskaun 40% — adakah ini tipu muslihat?', a: 'Bukan tipu muslihat. Harga biasa €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} adalah apa yang dikenakan oleh tapak tempahan pihak ketiga (Viator, GetYourGuide, Klook) — dengan komisen mereka. Tempah terus dan dapatkan €{p.dinnerStd}/€{p.dinnerVip}. Itulah perbezaan 40%. Tiada tipu muslihat harga terhad masa atau surge.' },
      { q: 'Bagaimanakah harga pelayaran Istanbul berbanding pilihan lain?', a: 'Feri pengangkutan: €5-10, 1 jam, tiada makan malam, tiada hiburan, bersiar-siar sahaja. Pelayaran makan malam bajet: €20-30, sesak, makanan sederhana, persembahan pendek. Standard kami (€{p.dinnerStd}): 3 jam, makan malam lengkap, persembahan penuh, meja peribadi, berlesen TÜRSAB. VIP (€{p.dinnerVip}): hadapan pentas, menu premium. Kapal layar resort: €100-150+, berlebihan untuk pengembara solo/pasangan.' },
      { q: 'Perlukah saya bayar harga pelayaran Istanbul pendahuluan?', a: 'Tidak — **bayar di atas bot**. Anda tempah sekarang (wizard 1 minit), kami sahkan melalui WhatsApp, anda hadir pada 20:00, dan anda bayar di atas bot (tunai atau kad). Pembatalan percuma sehingga 2 jam sebelum. Sifar komitmen kewangan sehingga anda berpuas hati.' },
      { q: 'Adakah terdapat diskaun kumpulan untuk harga pelayaran Istanbul?', a: 'Untuk kumpulan 10+, kami boleh menawarkan diskaun 5-10% — hantar mesej WhatsApp dengan saiz kumpulan anda. Untuk 25+, pertimbangkan pelayaran peribadi (seluruh bot untuk kumpulan anda, menu tersuai). Untuk 2-9 orang, harga standard terpakai — sudah diskaun 40% daripada harga biasa.' }
    ],
    cta: {
      primary: 'Tempah · Bayar di Atas Bot',
      secondary: 'Dari €{p.dinnerStd}/orang · 0-3 tahun percuma · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Sightseeing Bosphorus dari €{p.dinnerStd} — Mercu Tanda Istanbul dari Air',
      description: 'Pelayaran sightseeing Bosphorus: Dolmabahçe, Ortaköy, Jambatan Bosphorus, Rumeli, Beylerbeyi, Menara Dara. Tur petang 3 jam dengan makan malam. Pembatalan percuma.'
    },
    hero: {
      h1: 'Bersiar-Siar Bosphorus',
      subtitle: 'Semua mercu tanda ikonik Istanbul — dari air, pada waktu malam, dengan makan malam. Satu pelayaran 3 jam merangkumi Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus, Rumeli Hisarı dan banyak lagi.',
      badge: '10+ Mercu Tanda · Pantai Eropah dan Asia · 3 Jam'
    },
    intro: [
      '**Bersiar-siar Bosphorus** dari air mengalahkan mana-mana pelayaran bas. Bosphorus adalah laluan air paling bersejarah di bandar — sultan-sultan Uthmaniyah, maharaja Byzantine, pedagang Greek dan kapal perang Rusia semuanya melalui. Hari ini, pelayaran 3 jam kami, dengan ulasan daripada kakitangan berbahasa Inggeris kami, melepasi setiap mercu tanda utama Istanbul yang mentakrifkan ufuk.',
      'Laluan **pelayaran bersiar-siar Bosphorus kami** (bertolak petang, 21:00-00:00):\n\n1. **Istana Dolmabahçe** — kediaman Uthmaniyah abad ke-19, diterangi pada waktu malam\n2. **Istana Çırağan** — kini hotel mewah, sejarah diraja\n3. **Masjid Ortaköy** — salah satu masjid paling difoto di Istanbul, di atas air\n4. **Jambatan Bosphorus** — bertukar antara biru, ungu, emas pada waktu malam\n5. **Bebek** — kawasan kejiranan tepi Eropah yang bergaya\n6. **Rumeli Hisarı** — dibina 1452 oleh Sultan Mehmed II sebelum penaklukan Constantinople\n7. **Jambatan Fatih Sultan Mehmet** — jambatan Bosphorus kedua, gerbang dramatik\n8. **Istana Beylerbeyi** — tepi Asia, kediaman musim panas Uthmaniyah\n9. **Üsküdar** — tepi Asia Istanbul, kawasan kejiranan tradisional\n10. **Menara Maiden** — menara pulau kecil, salah satu simbol paling romantik Istanbul',
      'Makan malam dan hiburan termasuk — bukan berasingan — jadi **bersiar-siar Bosphorus** bertukar menjadi petang lengkap. Makan malam Turki berbilang hidangan, persembahan tarian rakyat langsung, sema, tarian oryantal, DJ. Dinilai 4.8★ oleh 11,317+ pengembara, berlesen TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ mercu tanda utama Istanbul', desc: 'Istana Dolmabahçe, Istana Çırağan, Masjid Ortaköy, Jambatan Bosphorus, Rumeli Hisarı, Jambatan FSM, Istana Beylerbeyi, Üsküdar, Menara Maiden. Setiap mercu tanda Istanbul yang penting dalam satu pelayaran.' },
      { title: 'Kedua-dua pantai Eropah dan Asia', desc: 'Tepi Eropah semasa pergi (Dolmabahçe → Rumeli Hisarı), tepi Asia semasa pulang (Beylerbeyi → Üsküdar). Dua benua dalam satu pelayaran 3 jam — hanya Istanbul membenarkan anda melakukan ini.' },
      { title: 'Bersiar-siar petang = pemandangan diterangi', desc: 'Bersiar-siar siang menunjukkan mercu tanda dalam cahaya rata. Pelayaran malam menangkapnya dalam drama puncak: istana bercahaya kuning, jambatan berwarna, masjid dipantulkan dalam air gelap. Lebih baik untuk foto, lebih tidak dapat dilupakan.' },
      { title: 'Makan malam + persembahan termasuk', desc: 'Bersiar-siar + makan malam + hiburan dalam satu pakej. Tiada keperluan merancang makan malam berasingan selepas pelayaran. Dari €{p.dinnerStd}/orang, bayar di atas bot, 3 jam secara keseluruhan.' }
    ],
    faq: [
      { q: 'Mercu tanda Bosphorus mana yang akan saya lihat?', a: 'Mengikut urutan: Istana Dolmabahçe, Istana Çırağan, Masjid Ortaköy, Jambatan Bosphorus, kawasan Bebek, Rumeli Hisarı, Jambatan Fatih Sultan Mehmet, Anadolu Hisarı, Istana Beylerbeyi, Kuzguncuk, Üsküdar dan Menara Maiden (kelihatan dari jauh). 10+ mercu tanda utama dalam satu laluan 3 jam.' },
      { q: 'Adakah bersiar-siar Bosphorus lebih baik pada waktu siang atau malam?', a: 'Pengalaman berbeza. Siang: pandangan lebih jelas butiran seni bina, lebih terang untuk foto. Malam: pencahayaan dramatik, suasana misteri, lebih sedikit bot di air. Kebanyakan pengembara memilih pelayaran malam kerana mercu tanda kelihatan lebih ajaib — dan makan malam + persembahan menjadikannya petang lengkap.' },
      { q: 'Adakah bot berhenti di mercu tanda untuk foto?', a: 'Pelayaran berterusan — tiada perhentian (tiada turun). Bot melepasi berhampiran setiap mercu tanda, kakitangan menerangkan apa yang anda lihat, anda boleh berpindah ke dek terbuka untuk foto. Tiada barisan, tiada berjalan, tiada tekanan masa — hanya peluang foto 3 jam yang lancar.' },
      { q: 'Adakah kakitangan memberi ulasan semasa bersiar-siar?', a: 'Ya — kakitangan berbahasa Inggeris memberi ulasan ringkas semasa kami melepasi setiap mercu tanda utama (sejarah, seni bina, fakta menyeronokkan). Bukan pelajaran berpandu, lebih seperti penjelasan mesra semasa anda makan. Untuk sejarah yang lebih mendalam, kami cadangkan menggandingkan dengan pelayaran berjalan Istanbul pada waktu siang.' },
      { q: 'Bagaimanakah bersiar-siar Bosphorus berbeza daripada feri hop-on?', a: 'Feri hop-on (bot pengangkutan Şehir Hatları): €5-10, 1-2 jam, asas, tiada makan malam, sesak. Pelayaran kami: €{p.dinnerStd}, 3 jam, makan malam penuh, persembahan langsung, meja peribadi, ulasan bahasa Inggeris. Pelayaran petang lebih baik untuk bersiar-siar serius dan selesa. Feri pengangkutan berfungsi untuk peralihan bajet pantas.' },
      { q: 'Bolehkah saya memfoto mercu tanda dari bot?', a: 'Ya — sudah pasti. Dek terbuka mempunyai tempat cemerlang untuk fotografi. Mercu tanda berlalu 100-200 meter dari bot. Foto telefon pintar kelihatan hebat; pengguna DSLR/mirrorless boleh mendapat gambar menakjubkan terutamanya semasa peralihan waktu keemasan-biru awal petang.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Bersiar-Siar · Bayar di Atas Bot',
      secondary: '10+ mercu tanda · Makan malam + persembahan · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  }

};
