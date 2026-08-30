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
      description: 'Pelayaran makan malam 3 jam di Bosphorus: menu Turki pelbagai hidangan dan persembahan folklor langsung. Bertolak 21:00 dari Kabataş.'
    },
    hero: {
      h1: 'Pelayaran Makan Malam Bosphorus di Istanbul',
      subtitle: 'Tiga jam hiburan langsung, jamuan Turki berbilang hidangan dan pemandangan malam Bosphorus yang paling mengagumkan.',
      badge: '4.9★ · 11,317+ tetamu'
    },
    intro: [
      '**Pelayaran makan malam Bosphorus** ialah pengalaman petang paling ikonik di Istanbul. Pelayaran kami bermula dari Jeti Kabataş pada jam 20:00, meluncur di bawah Jambatan Bosphorus dan Jambatan Fatih Sultan Mehmet yang diterangi, sambil menghidangkan jamuan Turki berbilang hidangan, tarian rakyat langsung, tarian oryantal dan set DJ yang menghidupkan dek sehingga 23:45.',
      'Berbeza dengan bot pelancong biasa yang memenuhi pemandangan malam Istanbul, **pelayaran makan malam Bosphorus kami** berlesen TÜRSAB (A-17672) dan dinilai 4.9★ oleh lebih 11,317 pengembara. Kami mengekalkan kumpulan kecil dan perkhidmatan mesra — dan kerana anda membayar di atas bot, tiada sebarang risiko untuk membuat tempahan awal.',
      'Sama ada anda menyambut ulang tahun, mencari petang Istanbul premium untuk keluarga, atau menginginkan peralihan matahari terbenam ke malam yang paling fotogenik di bandar ini — inilah pelayaran makan malam yang pertama disyorkan oleh penduduk Istanbul.'
    ],
    highlights: [
      { title: 'Jamuan Turki berbilang hidangan', desc: '10 jenis meze, pembuka selera panas (börek), pilihan hidangan utama (salmon / sea bass / sate ayam / sate daging / vegetarian), pencuci mulut semolina istimewa sebagai pencuci mulut, minuman ringan tanpa had.' },
      { title: 'Tarian rakyat langsung, oryantal dan DJ', desc: 'Lapan persembahan: Oba Dombra, persembahan sema Mevlana, Sarı Gelin, medli Azerbaijan, tarian oryantal klasik, medli Anatolia, dan tarian pisau Georgia-Kaukasus — diikuti saksofon langsung dan set DJ sepanjang pelayaran.' },
      { title: 'Laluan malam penuh Bosphorus', desc: 'Kabataş → Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Bebek → Rumeli Hisarı → Jambatan FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Dari €{p.dinnerStd}/orang — bayar di atas bot', desc: 'Pelayaran makan malam €{p.dinnerStd} (asalnya €{p.dinnerStdOriginal}). Tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
      { q: 'Bilakah pelayaran makan malam Bosphorus bermula?', a: 'Pendaftaran masuk bermula di Jeti Kabataş pada jam 20:00. Bot bertolak pada jam 21:00 dan kembali sekitar 00:00. Kami cadangkan anda tiba 15-20 minit lebih awal untuk menetap di tempat duduk dan berehat.' },
      { q: 'Berapakah kos pelayaran makan malam Bosphorus?', a: 'Pelayaran makan malam €{p.dinnerStd}/orang (harga biasa €{p.dinnerStdOriginal}). Umur 0-3 tahun percuma, 4-9 tahun diskaun €5. Bayaran dibuat di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Adakah alkohol termasuk dalam pelayaran makan malam?', a: 'Minuman ringan tanpa had (air, kola, jus buah) termasuk dalam harga. Pakej alkohol adalah pilihan: 2 gelas (wain, bir, rakı, vodka, wiski, gin dan lain-lain) +€{p.alcohol2}/orang. Minuman tambahan dan minuman diimport dikenakan harga berasingan di atas bot.' },
      { q: 'Adakah pemindahan hotel disediakan?', a: 'Ya — perkhidmatan ambil dan hantar +€{p.transfer}/orang. Kawasan perkhidmatan: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, Yenikapı, Sütlüce dan Şişli. Anda boleh pilih dalam wizard tempahan.' },
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
      description: 'Pelayaran makan malam Bosphorus mesra keluarga. Anak 0-3 percuma, 4-9 diskaun €5. Ruang dalam selamat, menu kanak-kanak. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Bersama Anak-Anak',
      subtitle: 'Petang Bosphorus yang mesra keluarga direka untuk keluarga berkanak-kanak — hidangan, hiburan dan suasana selamat serta selesa.',
      badge: 'Mesra Keluarga · Halal · 0-3 Tahun Percuma'
    },
    intro: [
      '**Pelayaran Bosphorus bersama anak-anak** ialah pilihan petang paling mesra keluarga di Istanbul. Kami menyambut berpuluh-puluh keluarga setiap malam — kami reka setiap butiran untuk membuat kanak-kanak selesa: tempat duduk dalaman agar yang kecil kekal hangat, menu mesra kanak-kanak yang mudah dicapai (ayam panggang biasa, pasta, minuman ringan tanpa had) dan pendaftaran awal untuk mengelakkan kerenah waktu malam.',
      'Berbeza dengan bot yang hanya untuk parti dewasa, **pelayaran makan malam Bosphorus kami untuk keluarga** kekal mesra dan merangkumi semua. **Kanak-kanak umur 0-3 tahun adalah percuma** (termasuk pemindahan), 4-9 tahun **diskaun €5**, 10+ tahun pada harga penuh — tiada caj tersembunyi. Tarian rakyat langsung, tarian oryantal dan persembahan sema adalah hiburan keluarga yang sopan, bukan kelab malam.',
      'Sama ada anda datang ke Istanbul untuk hujung minggu panjang bersama anak kecil anda atau membawa remaja dalam perjalanan Eropah pertama — inilah pelayaran yang disyorkan oleh keluarga Istanbul. Selamat, diperakui halal, berlesen TÜRSAB dan dinilai 4.9★ oleh 11,317+ pengembara.'
    ],
    highlights: [
      { title: 'Umur 0-3 tahun percuma sepenuhnya', desc: 'Tiada bayaran untuk bayi dan kanak-kanak kecil. 4-9 tahun €5 daripada harga dewasa. Dari 10 tahun ke atas dikira tetamu penuh. Telus, tiada kejutan.' },
      { title: 'Ruang tempat duduk dalaman tertutup', desc: 'Tertutup penuh dan berpemanas pada bulan sejuk. Kanak-kanak kekal hangat, terlindung daripada angin. Dek terbuka juga tersedia ketika cuaca baik — pilihan anda.' },
      { title: 'Menu kanak-kanak atas permintaan', desc: 'Ayam panggang biasa, pasta, roti dan sayur — tanpa bayaran tambahan. Minuman ringan tanpa had (kola, jus, air). Beritahu awal — tiada kejutan meze pedas untuk yang kecil.' },
      { title: 'Hiburan selamat untuk keluarga', desc: 'Persembahan sema (memukau untuk kanak-kanak), Oba Dombra, serta tarian rakyat dari Anatolia, Azerbaijan dan Kaukasus — termasuk tarian pisau yang menakjubkan — ditambah muzik Turki langsung dan set saksofon dan DJ. Semuanya mesra keluarga — tiada kandungan dewasa. Kanak-kanak sering menyertai tarian.' }
    ],
    faq: [
      { q: 'Adakah pelayaran Bosphorus selamat untuk kanak-kanak kecil?', a: 'Ya — bot kami berlesen TÜRSAB, mempunyai ruang tempat duduk dalaman dengan tingkap selamat, jaket keselamatan tersedia untuk semua saiz dan kakitangan profesional berpengalaman dengan keluarga. Kami cadangkan dek dalaman untuk kanak-kanak kecil, dek terbuka untuk umur 6+.' },
      { q: 'Apakah harga kanak-kanak untuk pelayaran Bosphorus?', a: 'Kanak-kanak **0-3 tahun: PERCUMA** (tiada bayaran, tiada caj tersembunyi). **4-9 tahun: diskaun €5** daripada harga dewasa — iaitu €{p.dinnerStd} − €5 = €19.30 setiap kanak-kanak untuk pelayaran Standard. **10+ tahun: harga dewasa penuh.** Pemindahan hotel percuma untuk umur 0-3, standard untuk 4+ (€{p.transfer}/orang).' },
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
      description: 'Pelayaran romantik Bosphorus: meja lilin, ros, makan malam pelbagai hidangan di bawah jambatan bercahaya. Dari €{p.dinnerStd}/orang.'
    },
    hero: {
      h1: 'Pelayaran Romantik Bosphorus',
      subtitle: 'Makan malam lilin, meja dihiasi bunga mawar, jambatan yang diterangi dan saat istimewa hanya untuk anda berdua di bawah langit malam paling ikonik Istanbul.',
      badge: 'Ulang Tahun · Bulan Madu · Malam Istimewa'
    },
    intro: [
      '**Pelayaran romantik Bosphorus** ialah petang paling ikonik di Istanbul untuk pasangan. Sewaktu matahari terbenam di belakang Istana Dolmabahçe dan Jambatan Bosphorus menyala dengan warna-warnanya, anda dan pasangan berkongsi jamuan Turki berbilang hidangan di meja peribadi — dengan lilin, bunga segar dan biola langsung yang mengalun di dek.',
      'Susunan meja romantik kami (+€{p.romantic}/meja) mengubah mana-mana tempat menjadi saat istimewa: bunga mawar merah, lilin berkelip, kad alu-aluan tulisan tangan. Tambah pakej alkohol 2 gelas untuk minum wain di bawah bintang (+€{p.alcohol2}/orang) atau kekalkan mudah dengan minuman ringan yang disertakan. Dalam kedua-dua keadaan, kakitangan akan mengurus selebihnya dengan senyap.',
      'Sama ada anda menyambut ulang tahun, merancang kejutan untuk pasangan, atau sekadar mahu malam yang tidak dapat dilupakan di bandar paling romantik di Eropah — inilah pelayaran pilihan utama pasangan Istanbul. Dinilai 4.9★, berlesen TÜRSAB dan — yang paling penting — bayaran di atas bot, jadi anda hanya berkomitmen kepada petang itu sendiri.'
    ],
    highlights: [
      { title: 'Meja romantik bercahaya lilin', desc: 'Tambah susunan meja romantik dengan +€{p.romantic}/meja: bunga mawar merah segar, lilin berkelip, kelopak mawar di atas alas meja dan kad tulisan tangan. Foto termasuk.' },
      { title: 'Meja terbaik untuk peralihan matahari terbenam ke malam', desc: 'Meja tepi tingkap dikhaskan untuk pasangan. Saksikan Jambatan Bosphorus menyala, Menara Maiden bercahaya dan Masjid Ortaköy diterangi dari meja peribadi anda.' },
      { title: 'Biola langsung dan suasana intim', desc: 'Biola langsung dan muzik Turki akustik semasa makan malam mencipta suasana perlahan dan romantik. Selepas itu, DJ mengambil alih dan pasangan menari di bawah cahaya dek terbuka.' },
      { title: 'Wain, champagne, gandingan premium', desc: 'Tambah 2 gelas alkohol — wain, bir, rakı, vodka, wiski, gin dan lain-lain, wain, bir, rakı, vodka, wiski, gin dan lain-lain (+€{p.alcohol2}/orang). Champagne diimport dan gandingan premium atas permintaan — tanya semasa tempahan.' }
    ],
    faq: [
      { q: 'Apa yang menjadikan pelayaran ini romantik?', a: 'Gabungan meja peribadi, susunan lilin (pilihan +€{p.romantic}), hidangan Turki berbilang hidangan, biola langsung dan muzik akustik, dan jambatan Bosphorus yang diterangi di atas kepala. Kami reka pengalaman ini untuk pasangan — suasana senyap pada awalnya, kemudian DJ bertenaga dan tarian. Anda pilih rentaknya.' },
      { q: 'Bolehkah anda uruskan kejutan untuk pasangan saya — hari jadi, ulang tahun, lamaran?', a: 'Ya — beritahu kami semasa tempahan. Kami boleh selaraskan dengan kakitangan kami untuk kek hari jadi (percuma), susunan meja istimewa, kad tulisan tangan dalam bahasa anda, atau membawa sesuatu ke meja pada saat yang tepat. Untuk lamaran, kami cadangkan menghantar mesej terus di WhatsApp supaya kami boleh merancang secara diam-diam.' },
      { q: 'Berapakah kos pelayaran romantik untuk 2 orang?', a: 'Pelayaran makan malam untuk 2 orang: 2 × €{p.dinnerStd} = €48.60. Tambah susunan romantik +€{p.romantic} = €63.60. Tiada bayaran pendahuluan — bayar di atas bot. Untuk pakej alkohol 2 gelas, tambah 2 × €{p.alcohol2} = €20.' },
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
      description: 'Pelayaran makan malam 3 jam Bosphorus: persembahan folklor langsung, jambatan bercahaya, panorama Bosphorus malam. Menu halal tersedia atas permintaan.'
    },
    hero: {
      h1: 'Pelayaran Halal Bosphorus di Istanbul',
      subtitle: 'Menu 100% diperakui halal, alkohol sentiasa pilihan, hiburan mesra keluarga dan suasana hormat untuk pengembara Muslim — petang Bosphorus, dilakukan dengan betul.',
      badge: '100% Halal · Mesra Keluarga · Milik Muslim'
    },
    intro: [
      '**Pelayaran halal Bosphorus** ialah pelayaran makan malam paling dihormati di Istanbul untuk pengembara Muslim. Setiap daging yang dihidangkan di atas bot kami — salmon, sea bass, sate ayam, sate daging — adalah **diperakui halal** daripada pembekal yang diluluskan. Kami menghidangkan menu yang sama kepada setiap tetamu; tiada "seksyen halal" berasingan kerana seluruh bot adalah halal secara lalai.',
      'Alkohol adalah **tambahan pilihan** — tidak pernah dipaksa kepada tetamu, dan susunan tempat duduk secara semula jadi mengasingkan mereka yang memilih meja tanpa alkohol. Untuk tetamu yang inginkan pakej alkohol 2 gelas (+€{p.alcohol2}/orang), ia tersedia, tetapi minuman ringan tanpa had yang disertakan (air, kola, jus) adalah mencukupi untuk kebanyakan keluarga Muslim. Kakitangan kami dilatih untuk menghormati pilihan anda tanpa andaian.',
      '**Pelayaran Bosphorus mesra halal** adalah penting untuk pengembara dari Arab Saudi, UAE, Kuwait, Qatar, Iran, Malaysia, Indonesia, Pakistan dan Maghribi yang inginkan petang paling ikonik di Istanbul tanpa kompromi. Berlesen TÜRSAB, 4.9★ dan bayar di atas bot — anda tidak berkomitmen kepada apa-apa sehingga anda pasti pengalaman memenuhi piawaian anda.'
    ],
    highlights: [
      { title: 'Menu 100% diperakui halal', desc: 'Semua daging (salmon, sea bass, sate ayam, sate daging) diperakui halal daripada pembekal yang diluluskan. Dapur mengikut penyediaan halal. Tiada produk babi atau bahan tambahan tidak halal. Pilihan vegetarian sentiasa tersedia.' },
      { title: 'Alkohol pilihan, tidak pernah dipaksa', desc: 'Pakej alkohol adalah tambahan — tidak termasuk secara lalai. Minuman ringan (air, kola, jus) tanpa had dan percuma. Meja anda kekal tanpa alkohol melainkan anda meminta secara jelas. Kakitangan menghormati pilihan anda secara diam-diam.' },
      { title: 'Hiburan mesra keluarga', desc: 'Persembahan sema, tarian rakyat Turki tradisional, muzik Turki langsung. Tiada persembahan gaya kelab malam, tiada kandungan tidak sesuai. Selamat untuk kanak-kanak, dihormati untuk keluarga. Tarian oryantal adalah bentuk seni tradisional, dipersembahkan dengan sopan.' },
      { title: 'Hormat waktu solat', desc: 'Jika waktu Maghrib atau Isyak bertembung dengan masa pendaftaran masuk (20:00-21:00), kakitangan kami boleh menunjukkan kawasan solat yang senyap di Jeti Kabataş sebelum bertolak. Beritahu semasa tempahan sahaja.' }
    ],
    faq: [
      { q: 'Adakah pelayaran Bosphorus 100% halal?', a: 'Ya — setiap produk daging dalam menu (salmon, sea bass, sate ayam, sate daging) adalah diperakui halal daripada pembekal yang diluluskan. Dapur mengikut piawaian penyediaan halal. Tiada babi dihidangkan di mana-mana sahaja di atas bot. Ini bukan "pilihan halal" — keseluruhan menu adalah halal.' },
      { q: 'Adakah tetamu lain minum alkohol dalam pelayaran ini?', a: 'Sesetengah tetamu menambah pakej alkohol 2 gelas pilihan (+€{p.alcohol2}/orang). Meja secara semula jadi diasingkan — anda boleh meminta seksyen tanpa alkohol. Kakitangan tidak membawa alkohol melainkan dipesan khusus oleh seorang tetamu. Minuman ringan (tanpa had) termasuk untuk semua.' },
      { q: 'Adakah pelayaran ini sesuai untuk keluarga Muslim dengan kanak-kanak?', a: 'Ya — ia adalah salah satu pelayaran paling dihormati keluarga di Istanbul. Hiburan sopan (tarian rakyat, sema, muzik Turki), kanak-kanak di bawah 3 tahun percuma, 4-9 tahun diskaun €5. Tiada suasana kelab malam. Keluarga dari rantau Teluk, Indonesia, Malaysia, Pakistan dan Maghribi kerap menempah pelayaran ini.' },
      { q: 'Bolehkah saya bersolat di atas bot?', a: 'Tiada ruang solat khusus di atas bot, tetapi kami cadangkan bersolat sebelum pendaftaran masuk 20:00 (waktu Maghrib biasanya dalam tempoh ini). Jeti Kabataş mempunyai kemudahan solat. Jika anda perlu bersolat semasa pelayaran 21:00-00:00 (Isyak), bercakap dengan kakitangan — kami boleh sediakan sudut yang senyap di dek.' },
      { q: 'Berapakah harga untuk keluarga Muslim 4 orang (2 dewasa, 2 kanak-kanak)?', a: 'Pelayaran makan malam: 2 × €{p.dinnerStd} + 2 × €19.30 (4-9 tahun diskaun €5) = €87.20. Jika kanak-kanak di bawah 3 tahun maka percuma: 2 × €{p.dinnerStd} = €48.60. Tambah €5 pemindahan hotel setiap dewasa. Jumlah: €48.60–€92.90 untuk keluarga 4 orang, tiada bayaran pendahuluan, bayar di atas bot.' },
      { q: 'Adakah pemindahan hotel juga halal?', a: 'Pemindahan hotel hanyalah perjalanan kereta — tiada makanan atau minuman terlibat, jadi tiada kebimbangan halal. Pemandu kami profesional, menghormati dan tepat pada masanya. Zon pemindahan merangkumi Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, Şişli dan 8 kawasan pusat lain yang biasa ditinggalkan oleh pengembara Muslim.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Halal · Bayar di Atas Bot',
      secondary: 'Pembatalan percuma 2 jam sebelum · Tiada bayaran pendahuluan · Diperakui halal',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Pengalaman VIP Bosphorus dari €{p.dinnerStd} — Makan Malam Premium di Bosphorus',
      description: 'Pelayaran makan malam Bosphorus bertaraf VIP: menu Turki lengkap, persembahan langsung, pilihan meja dekat pentas, layanan teliti. €{p.dinnerStdOriginal} → €{p.dinnerStd}. Bayar di atas bot, pembatalan percuma.'
    },
    hero: {
      h1: 'Pengalaman VIP Bosphorus — Pelayaran Makan Malam',
      subtitle: 'Satu menu, satu piawaian: premium untuk semua. Malam 3 jam di Bosphorus di atas Bosphorus Night — makan malam Turki yang menyeluruh, persembahan pentas secara langsung, dan meja peribadi dekat pentas jika anda mahu. Kami tidak menjual "kelas VIP" berasingan; kami menghidangkan yang terbaik kepada setiap tetamu.',
      badge: 'DISKAUN 40% · Satu Menu, Piawaian Premium · Bayar di Atas Bot'
    },
    intro: [
      'Banyak bot di Bosphorus membahagikan tetamu kepada "Standard" dan "VIP". Kami tidak. Di atas **Bosphorus Night** hanya ada satu menu makan malam, disediakan dengan penjagaan yang sama untuk semua: 10 jenis meze Turki, pembuka selera panas, hidangan utama pilihan anda (salmon, siakap, sate ayam atau sate daging), pencuci mulut semolina istimewa, dan minuman ringan tanpa had. Program persembahan lapan bahagian turut disertakan — Oba Dombra, upacara darwis berpusing, tarian rakyat Anatolia dan Azerbaijan, tarian perut, tarian pisau Kaukasus, muzik secara langsung dan penutup dengan saksofon dan DJ — semuanya dalam harga €{p.dinnerStd}/orang.',
      'Rasa VIP bermula di meja anda. Jika anda mahu sedekat mungkin dengan pentas dan pemandangan, tambah **meja peribadi dekat pentas** (+€{p.romantic}/meja) dan tempat anda ditempah lebih awal — sudut terbaik untuk menyaksikan darwis, tarian rakyat dan Bosphorus yang bercahaya. Pilihan kegemaran pasangan, sambutan istimewa dan peminat fotografi.',
      'Bosphorus Night ialah bot moden sepanjang 42 meter, 3 dek, memuatkan sehingga 400 tetamu, berpemanas pada musim sejuk dan berhawa dingin pada musim panas. Laluan 3 jam bertolak dari Kabataş (menaiki bot dari 20:00, bertolak 21:00, pulang 00:00) melalui Dolmabahçe, Masjid Ortaköy, Kubu Rumeli dan lampu Jambatan Bosphorus. Berlesen TÜRSAB (A-17672), 4.9★ di Google. Tiada bayaran pendahuluan — anda membayar di atas bot, dengan pembatalan percuma sehingga 2 jam sebelum bertolak.'
    ],
    highlights: [
      { title: 'Satu menu, piawaian premium', desc: 'Tiada "menu VIP" berasingan — kerana satu-satunya menu kami memang sudah pada tahap itu. 10 jenis meze, pembuka selera panas, 4 pilihan hidangan utama, pencuci mulut dan minuman ringan tanpa had, dihidangkan dengan penjagaan yang sama ke setiap meja.' },
      { title: 'Meja peribadi dekat pentas (+€{p.romantic}/meja)', desc: 'Meja paling hampir dengan darwis, tarian rakyat dan tarian perut ditempah lebih awal. Pandangan terbaik ke pentas dan Bosphorus. Meja anda peribadi, bukan dikongsi.' },
      { title: 'Layanan meja yang teliti', desc: 'Pasukan kami melayan terus di meja anda: hidangan, panduan menu, tambahan minuman, permintaan khas. Tiada beratur dalam kesesakan.' },
      { title: 'DISKAUN 40% — dahulu €{p.dinnerStdOriginal}, kini €{p.dinnerStd}', desc: 'Harga tempahan terus: €{p.dinnerStd}/orang (harga senarai €{p.dinnerStdOriginal}). Bayar di atas bot, tiada pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
      { q: 'Adakah anda menjual "pakej VIP"? Apa bezanya dengan Standard?', a: 'Kami tidak menjual pakej VIP berasingan — ada satu menu yang dihidangkan kepada semua dengan piawaian premium yang sama. Apa yang kami panggil "pengalaman VIP" ialah menyesuaikan malam anda: meja peribadi dekat pentas (+€{p.romantic}/meja), layanan meja yang teliti dan tambahan minuman pilihan. Pelayaran mengambil masa 3 jam, €{p.dinnerStd}/orang.' },
      { q: 'Adakah €{p.dinnerStd} benar-benar diskaun 40%?', a: 'Ya — harga senarai kami €{p.dinnerStdOriginal}/orang. €{p.dinnerStd} ialah kadar tempahan terus tanpa komisen orang tengah. Anda membayar di atas bot dan tiada bayaran pendahuluan.' },
      { q: 'Apa yang ada dalam menu?', a: '10 jenis meze Turki, pembuka selera panas, hidangan utama pilihan (salmon, siakap, sate ayam atau sate daging) dan pencuci mulut semolina istimewa sebagai pencuci mulut, dengan minuman ringan tanpa had. Program persembahan lapan bahagian disertakan: Oba Dombra, upacara darwis, tarian rakyat Anatolia dan Azerbaijan, tarian perut, tarian pisau Kaukasus, muzik secara langsung dan penutup dengan saksofon dan DJ.' },
      { q: 'Adakah alkohol termasuk?', a: 'Tidak — alkohol ialah tambahan berasingan: 2 gelas wain, bir, rakı, vodka, wiski, gin dan lain-lain tempatan pada +€{p.alcohol2}/orang. Minuman ringan tanpa had disertakan percuma. Minuman import premium dikira berasingan di atas bot.' },
      { q: 'Bagaimana memastikan meja dekat pentas?', a: 'Cukup pilih tambahan "meja peribadi dekat pentas" (+€{p.romantic}/meja) semasa menempah — meja akan ditempah atas nama anda. Kedudukan terbaik cepat penuh dengan tempahan awal, jadi sebaiknya ditambah sebelum hari pelayaran.' },
      { q: 'Bot jenis apakah ini?', a: 'Bosphorus Night — bot penumpang moden sepanjang 42 meter, 3 dek, berkapasiti 400 tetamu, berpemanas pada musim sejuk dan berhawa dingin pada musim panas. Bertolak dari Jeti Kabataş: menaiki bot 20:00, bertolak 21:00, pulang 00:00. Laluan: Dolmabahçe, Ortaköy, Kubu Rumeli, Beylerbeyi dan lampu Jambatan Bosphorus.' }
    ],
    cta: {
      primary: 'Tempah Meja Anda · Bayar di Atas Bot',
      secondary: 'Dahulu €{p.dinnerStdOriginal}, kini €{p.dinnerStd} · Pembatalan percuma sehingga 2 jam sebelum',
      tertiary: 'Tambah meja peribadi dekat pentas (+€{p.romantic})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Persendirian Bosphorus — Sewa Bot di Istanbul (25+ tetamu)',
      description: 'Pelayaran persendirian Bosphorus untuk kumpulan, perkahwinan, acara korporat. Bot eksklusif, menu khas, tempoh fleksibel. Pembatalan percuma.'
    },
    hero: {
      h1: 'Pelayaran Peribadi Bosphorus',
      subtitle: 'Sewa seluruh bot untuk kumpulan anda — sambutan keluarga, makan malam korporat, hari jadi, pertunangan, majlis perkahwinan. Penggunaan eksklusif, menu tersuai, penjadualan fleksibel.',
      badge: 'Sewaan Peribadi · 25+ Tetamu · Menu Tersuai'
    },
    intro: [
      '**Pelayaran peribadi Bosphorus** bermakna seluruh bot adalah milik anda — tiada tetamu lain, tiada meja dikongsi, tiada lantai tarian dikongsi. Sesuai untuk perjumpaan keluarga, makan malam korporat, majlis hari jadi, majlis bujang, atau majlis resepsi perkahwinan. Bot, kakitangan, menu, hiburan dan masa disesuaikan dengan kumpulan anda.',
      'Sewaan **pelayaran peribadi Bosphorus kami** menyokong kumpulan dari **25 hingga 80 tetamu**. Kumpulan lebih kecil masih boleh meminta pengalaman peribadi — kami memberi harga dengan bayaran minimum yang menampung kos operasi bot. Kumpulan lebih besar (saiz perkahwinan) mendapat harga tersuai dan biasanya termasuk hiasan khas, kumpulan muzik langsung, hidangan kek dan tempoh yang dilanjutkan (4-5 jam berbanding 3 standard).',
      'Sama ada anda menganjurkan acara korporat untuk pelanggan, majlis hari jadi ke-50, atau majlis resepsi perkahwinan di bawah jambatan paling ikonik Istanbul, inilah **pelayaran peribadi yang dipercayai oleh perancang acara Istanbul**. Dinilai 4.9★, berlesen TÜRSAB, kakitangan yang fasih berbahasa Inggeris dan fleksibel dalam semua aspek — laluan, menu, muzik, masa.'
    ],
    highlights: [
      { title: 'Seluruh bot, hanya untuk anda', desc: 'Tiada tetamu lain. Kumpulan anda memiliki setiap dek, setiap meja. Tetapkan muzik anda sendiri, kod pakaian, jadual. Privasi penting — kami hormatinya.' },
      { title: 'Menu dan pakej minuman tersuai', desc: 'Bekerjasama dengan cef kami untuk menyesuaikan menu: meze khusus, pilihan hidangan utama, hidangan khas untuk budaya atau keperluan diet anda. Pakej alkohol, gelas champagne, bar koktel tersuai semuanya boleh diatur.' },
      { title: 'Tempoh dan waktu berlepas fleksibel', desc: '3 jam standard boleh dilanjutkan ke 4-5 jam. Pilih waktu siang 12:00, matahari terbenam 17:30, atau pelayaran malam 21:00. Mahu hari bekerja daripada hujung minggu? Tanya — kami akan bekerja dengan jadual anda.' },
      { title: 'Hiasan khas, kumpulan muzik, penjadualan', desc: 'Hiasan khas (belon, sepanduk, susunan bunga), kumpulan muzik langsung menggantikan DJ, hidangan kek perkahwinan, penyelarasan jurugambar, ucapan — tambah apa sahaja yang acara anda perlukan. Kami bukan sahaja pengendali bot, kami perancang acara.' }
    ],
    faq: [
      { q: 'Berapakah kos pelayaran peribadi Bosphorus?', a: 'Untuk kumpulan 25+, biasanya €{p.dinnerStd}/orang + yuran sewa bot berdasarkan saiz kumpulan, tarikh dan tempoh. Hantar mesej WhatsApp dengan saiz kumpulan, tarikh dan keperluan anda — kami memberi harga dalam masa 1 jam. Kebanyakan acara berada dalam julat €2,000-€6,000.' },
      { q: 'Apakah saiz kumpulan minimum untuk pelayaran peribadi Bosphorus?', a: 'Secara teknikal 25 tetamu menjadikan pelayaran peribadi berdaya maju secara ekonomi. Kumpulan lebih kecil (10-24) masih boleh menyewa peribadi tetapi membayar yuran minimum yang setara dengan ~25 orang. Untuk kumpulan yang benar-benar kecil (2-10), pertimbangkan pelayaran makan malam biasa — meja anda sudah peribadi, hanya bot yang dikongsi.' },
      { q: 'Bolehkah saya mengadakan majlis perkahwinan di pelayaran Bosphorus?', a: 'Ya — kami menganjurkan 10-15 majlis resepsi perkahwinan setahun. Kapasiti sehingga 80 untuk makan malam duduk, sehingga 100 gaya koktel. Kami menyelaras dengan jurugambar, perancang perkahwinan, kumpulan muzik atau cef anda. Hidangan kek khas, lantai tarian pertama, toast champagne boleh diatur. Hantar mesej WhatsApp untuk harga perkahwinan.' },
      { q: 'Bagaimana pula dengan acara korporat dan makan malam pasukan?', a: 'Pelayaran peribadi korporat adalah tempahan paling biasa kami. Makan malam syarikat, melayan pelanggan, pelancaran produk, sambutan pasukan — semua berfungsi. Kami boleh menyediakan invois dengan pecahan VAT, mengatur pemindahan hotel untuk pasukan anda, dan menyelaras bahan berjenama (alat meja, papan tanda) atas permintaan.' },
      { q: 'Bolehkah saya bawa kumpulan muzik atau DJ sendiri daripada hiburan anda?', a: 'Ya — anda boleh bawa kumpulan muzik, DJ, jurugambar sendiri. Atau kekalkan standard kami (sema, penari rakyat, oryantal, DJ) dan tambah anda sendiri di atasnya. Bot mempunyai sistem PA dan lantai tarian. Beritahu awal supaya kami boleh menyelaraskan kawalan bunyi.' },
      { q: 'Bagaimana untuk meminta harga pelayaran peribadi Bosphorus?', a: 'Paling mudah: hantar mesej WhatsApp di +90 532 244 29 22 dengan (1) saiz kumpulan, (2) tarikh pilihan, (3) sebab (perkahwinan, korporat, hari jadi), (4) keperluan khas. Kami balas dalam masa 1 jam pada waktu bekerja, 12 jam pada waktu malam. Kami juga boleh mengatur panggilan video untuk membincangkan butiran.' }
    ],
    cta: {
      primary: 'WhatsApp untuk Harga Peribadi',
      secondary: 'Menu tersuai, kumpulan 25-80, tempoh fleksibel · Jawapan dalam 1 jam',
      tertiary: 'Pilihan Pelayaran Makan Malam (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosphorus untuk Pasangan dari €{p.dinnerStd} — Malam Romantik Istanbul',
      description: 'Pelayaran makan malam Bosphorus untuk pasangan. Meja peribadi, jambatan bercahaya, hiasan romantik pilihan. Dari €{p.dinnerStd}/orang.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus untuk Pasangan',
      subtitle: 'Malam janji temu di Bosphorus — meja peribadi, muzik langsung, jambatan diterangi di atas kepala. Sama ada janji temu pertama anda di Istanbul atau ulang tahun ke-10, petang ini berfungsi.',
      badge: 'Meja Peribadi · Muzik Langsung · Bayar di Atas Bot'
    },
    intro: [
      '**Pelayaran Bosphorus untuk pasangan** ialah malam janji temu kegemaran Istanbul. Tidak setiap pasangan menyambut ulang tahun — kadangkala anda berada di bandar paling romantik di dunia dan anda mahu petang yang hebat bersama. Pelayaran ini menyediakan: meja peribadi untuk dua orang, makan malam Turki berbilang hidangan yang perlahan, biola langsung dan muzik akustik semasa makan malam, dan Jambatan Bosphorus yang diterangi meluncur di atas.',
      'Suasananya **mesra tetapi tidak terlalu romantik** — tiada muzik lamaran wajib, tiada tepuk tangan "pengantin baru" yang diselaraskan dengan canggung. Anda makan, anda minum, anda berbual, anda menonton cahaya Istanbul. Jika anda mahu menambah susunan meja romantik (lilin, mawar, +€{p.romantic}), bagus — jika tidak, makan malam itu sendiri sudah istimewa.',
      'Sama ada anda di Istanbul selama 3 hari bersama pasangan, menyambut saat penting yang kecil, atau merancang perjalanan tinjauan lamaran masa depan — **pelayaran Bosphorus untuk pasangan** memberi anda 3 jam petang untuk bersama di salah satu bandar paling difoto di dunia. 4.9★, bayar di atas bot, pembatalan percuma.'
    ],
    highlights: [
      { title: 'Meja peribadi untuk dua orang', desc: 'Meja 2-orang khusus, tidak dikongsi. Keutamaan tempat duduk tepi tingkap untuk pasangan. Foto matahari terbenam dan malam Bosphorus tepat di luar tingkap anda.' },
      { title: 'Hidangan berbilang hidangan yang perlahan', desc: '10 jenis meze Turki, pembuka selera panas, hidangan utama (salmon, sea bass, sate ayam, sate daging atau vegetarian), pencuci mulut semolina istimewa sebagai pencuci mulut. Dihidangkan perlahan selama 3 jam — anda tidak tergesa-gesa.' },
      { title: 'Biola langsung dan muzik lembut', desc: 'Biola langsung dan muzik Turki akustik semasa makan malam mencipta suasana intim sesuai untuk perbualan. Kemudian, DJ mengambil alih untuk pasangan yang mahu menari.' },
      { title: 'Tambahan untuk malam istimewa', desc: 'Susunan meja romantik (lilin, mawar): +€{p.romantic}. Pakej alkohol 2 gelas (wain, bir, rakı, vodka, wiski, gin dan lain-lain): +€{p.alcohol2}/orang. Pemindahan hotel (pergi balik): +€{p.transfer}/orang. Pilih yang sesuai untuk petang anda.' }
    ],
    faq: [
      { q: 'Adakah pelayaran Bosphorus ini sesuai untuk malam janji temu biasa, bukan majlis istimewa?', a: 'Ya — kebanyakan pasangan kami tidak menyambut sesuatu yang khusus, hanya mempunyai malam janji temu yang hebat. Suasananya mesra dan menawan tanpa berlebihan. Anda boleh tambah susunan meja romantik (+€{p.romantic}) jika anda mahu tambahan, atau sekadar nikmati petang standard.' },
      { q: 'Berapakah kos pelayaran Bosphorus untuk 2 orang?', a: 'Pelayaran makan malam untuk 2 orang: 2 × €{p.dinnerStd} = €48.60. Tambah pemindahan hotel untuk dua orang: +€{p.transfer}×2 = €10. Tambah pakej alkohol 2 gelas untuk dua orang: +€{p.alcohol2}×2 = €20. Tiada bayaran pendahuluan — bayar di atas bot.' },
      { q: 'Bolehkah pasangan bawa wain atau champagne sendiri?', a: 'Kami tidak membenarkan alkohol luar (sebab lesen operasi). Tetapi kami ada pakej alkohol 2 gelas (wain, bir, rakı, vodka, wiski, gin dan lain-lain) (+€{p.alcohol2}/orang) dan boleh mengatur wain premium diimport atau champagne dengan bayaran — tanya semasa tempahan. Prosecco, Chianti dan Cabernet adalah permintaan premium yang popular.' },
      { q: 'Adakah tidak apa-apa jika kami tidak minum alkohol — adakah kami pelik?', a: 'Tidak sama sekali — ramai pasangan melangkau alkohol sepenuhnya, sama ada kerana sebab halal atau sekadar pilihan. Minuman ringan tanpa had (air, jus, kola) termasuk. Tiada siapa akan pandang dua kali jika meja anda tanpa alkohol. Ramai pasangan Muslim dari Arab Saudi, Iran dan Indonesia menempah pelayaran ini.' },
      { q: 'Bilakah masa terbaik untuk pelayaran Bosphorus pasangan — matahari terbenam atau malam?', a: 'Pelayaran bertolak 21:00 setiap malam — dan pada musim panas (Mei–Ogos) satu pelayaran itu merangkumi kedua-duanya: menaiki bot dari 20:00 semasa waktu keemasan, matahari terbenam tepat sekitar waktu bertolak, kemudian jambatan yang diterangi dan istana yang bercahaya. Pada musim sejuk, ia adalah pelayaran lampu malam sepenuhnya. Apa pun, satu tempahan memberi pasangan versi Bosphorus yang paling ikonik.' },
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
      title: 'Pelayaran Matahari Terbenam & Makan Malam Bosphorus dari €{p.dinnerStd}',
      description: 'Saksikan matahari terbenam Bosphorus, kemudian nikmati makan malam di bawah jambatan yang diterangi. Naik 20:00 di Kabataş, bertolak 21:00. 3 jam, makan malam penuh. Bayar di atas bot.'
    },
    hero: {
      h1: 'Pelayaran Matahari Terbenam & Makan Malam Bosphorus',
      subtitle: 'Naik pada 20:00 ketika langit bertukar keemasan di atas menara-menara masjid — kemudian makan malam di atas air sambil Dolmabahçe, Masjid Ortaköy dan Jambatan Bosphorus menyala untuk malam.',
      badge: 'Naik 20:00 · Bertolak 21:00 · Matahari Terbenam hingga Lampu Bandar'
    },
    intro: [
      'Pengalaman **pelayaran matahari terbenam Bosphorus** di Istanbul adalah tentang satu perkara: peralihan. Pelayaran kami menerima tetamu di Jeti Kabataş dari jam 20:00 — dan pada petang yang panjang dari Mei hingga Ogos, waktu keemasan berlangsung sementara anda menetap di dek. Matahari terbenam di sebalik menara-menara tepi Eropah tepat sekitar waktu bertolak 21:00, jadi anda menyaksikannya dari air: Istana Dolmabahçe bermandikan cahaya emas, Masjid Ortaköy bersiluet di langit yang bercahaya.',
      '**Pelayaran Bosphorus dari senja ke malam** kami merangkumi makan malam Turki lengkap — 10 jenis meze, pembuka selera panas, pilihan hidangan utama, pencuci mulut — dihidangkan ketika bandar menyalakan lampunya. Menjelang pencuci mulut tiba, anda sedang belayar di bawah Jambatan Bosphorus yang diterangi, dengan 30 juta lampu terpantul di atas air gelap. Peralihan dari senja ke malam sepenuhnya, semuanya dalam satu pelayaran 3 jam — itulah intipatinya.',
      'Sama ada anda seorang jurugambar yang mengejar cahaya terakhir, pasangan yang mahukan "foto kenangan Istanbul" itu, atau pengunjung kali pertama yang inginkan petang klasik di atas air — inilah **pelayaran makan malam matahari terbenam Bosphorus** yang disyorkan penduduk tempatan kepada pelawat. Dari €{p.dinnerStd}/orang, dinilai 4.9★, berlesen TÜRSAB, bayar di atas bot — tiada bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Matahari terbenam musim panas tepat waktu bertolak', desc: 'Dari Mei hingga Ogos, matahari Istanbul terbenam antara kira-kira 20:15 dan 20:45 — naik pada 20:00 memberi anda waktu keemasan di dek, dan waktu bertolak 21:00 meletakkan anda di atas air tepat untuk matahari terbenam itu sendiri. Kamera sedia — inilah gambarnya.' },
      { title: 'Waktu biru hingga malam sepenuhnya', desc: 'Bukan sekadar matahari terbenam — pelayaran belayar melalui waktu senja hingga ke Bosphorus yang diterangi sepenuhnya. Cahaya keemasan, waktu biru, kemudian 30 juta lampu jambatan di atas air gelap: tiga fasa cahaya dalam satu petang.' },
      { title: 'Makan malam lengkap semasa pelayaran', desc: '10 jenis meze Turki, pembuka selera panas, hidangan utama (salmon, ikan siakap, sate ayam, sate daging, vegetarian), pencuci mulut semolina istimewa, minuman ringan tanpa had — dihidangkan ketika lampu bandar mula menyala.' },
      { title: 'Dolmabahçe, Ortaköy, Jambatan Bosphorus — semua bercahaya', desc: 'Laluan melalui Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus, Rumeli Hisarı dan Istana Beylerbeyi ketika lampu mereka mula menyala. Setiap mercu tanda dalam cahaya terbaiknya.' }
    ],
    faq: [
      { q: 'Pukul berapakah pelayaran matahari terbenam Bosphorus bertolak?', a: 'Pendaftaran masuk bermula pada 20:00 di Jeti Kabataş, bot bertolak pada 21:00 dan kembali sekitar 00:00. Pada musim panas (Mei–Ogos) matahari terbenam antara kira-kira 20:15 dan 20:45 — waktu keemasan berlangsung semasa anda menaiki bot, dan matahari terbenam itu sendiri berlaku tepat sekitar waktu bertolak, disaksikan dari air.' },
      { q: 'Adakah pelayaran matahari terbenam Bosphorus sama dengan pelayaran makan malam?', a: 'Ya — ia satu pelayaran yang sama. Terdapat satu pelayaran harian tunggal pada 21:00 dengan makan malam penuh dan persembahan langsung di atas bot. Pada petang musim panas yang panjang, ia turut menjadi pelayaran matahari terbenam: anda naik semasa waktu keemasan dan belayar melalui waktu biru hingga ke malam yang diterangi. Pada musim sejuk, pelayaran yang sama menjadi pengalaman lampu malam sepenuhnya.' },
      { q: 'Berapakah harga pelayaran matahari terbenam Bosphorus?', a: 'Dari €{p.dinnerStd}/orang untuk pelayaran (3 jam, makan malam penuh, hiburan langsung). Bayar di atas bot — tiada bayaran pendahuluan. Kanak-kanak 0-3 percuma, 4-9 diskaun €5.' },
      { q: 'Bilakah waktu terbaik dalam setahun untuk pelayaran matahari terbenam Bosphorus?', a: 'Mei hingga Ogos. Matahari terbenam lewat di Istanbul (20:15–20:45) bertepatan dengan waktu bertolak 21:00, jadi anda mendapat waktu keemasan, matahari terbenam dan jambatan yang diterangi dalam satu petang. Pada musim luruh dan musim sejuk matahari terbenam lebih awal, dan pelayaran yang sama menjadi pengalaman lampu malam sepenuhnya — sama fotogenik, suasana berbeza.' },
      { q: 'Apa yang perlu saya bawa untuk pelayaran matahari terbenam?', a: 'Telefon pintar atau kamera — waktu keemasan dan jambatan yang bercahaya memang menuntutnya. Jaket nipis: angin bertiup lebih kencang di dek selepas matahari terbenam. Pakaian smart-casual — anda makan malam, tetapi tiada kod pakaian ketat.' },
      { q: 'Adakah saya dapat melihat jambatan yang diterangi pada waktu malam dalam pelayaran ini?', a: 'Ya — itulah separuh kedua petang anda. Pelayaran berlangsung 21:00–00:00, jadi selepas matahari terbenam dan waktu biru anda belayar di bawah Jambatan Bosphorus yang diterangi sepenuhnya, melepasi istana-istana bercahaya dan Menara Maiden, dan kembali ke Kabataş sekitar 00:00.' },
      { q: 'Pukul berapakah matahari terbenam di Istanbul?', a: 'Pada musim panas (Jun–Julai), matahari terbenam di Istanbul sekitar 21:00–20:45. Pada musim sejuk, sekitar 16:30–17:00. Untuk pengalaman matahari terbenam dan malam, pelayaran makan malam 21:00 Bosphorus Night dari Kabataş menangkap waktu keemasan lewat dan waktu biru pada musim panas, serta mercu tanda yang diterangi sepanjang tahun.' },
      { q: 'Adakah pelayaran matahari terbenam Bosphorus berbaloi?', a: 'Ya — matahari terbenam di atas Jambatan Bosphorus adalah salah satu pemandangan paling ikonik Istanbul. Pelayaran makan malam 21:00 Bosphorus Night (€{p.dinnerStd}/orang) menangkap waktu biru selepas matahari terbenam serta istana-istana yang diterangi, dengan makan malam penuh dan persembahan langsung selama 3 jam.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Matahari Terbenam · Bayar di Atas Bot',
      secondary: 'Naik 20:00 · Bertolak 21:00 · Makan malam termasuk · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Lihat Butiran Penuh Pelayaran Makan Malam'
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
      '**Pelayaran malam makan malam Bosphorus kami** mengemaskan petang ikonik lengkap: 3 jam di atas air (21:00-00:00), jamuan Turki berbilang hidangan, program folklor langsung lapan bahagian (Oba Dombra, sema, tarian rakyat Anatolia dan Azerbaijan, tarian oryantal, tarian pisau Kaukasus), muzik langsung, dan set saksofon dan DJ yang menghidupkan dek sehingga akhir malam. Setiap tetamu mendapat program yang sama — tiada pilihan "asas" yang melangkau bahagian terbaik.',
      'Sama ada ini adalah perjalanan pertama anda ke Istanbul dan anda mencari "satu perkara yang perlu dilakukan pada waktu malam", atau anda pernah ke sini sebelum ini dan anda mahukan 3 jam paling fotogenik di bandar — inilah **pelayaran malam Bosphorus** dinilai 4.9★ oleh 11,317+ pengembara. Berlesen TÜRSAB, bayar di atas bot, tiada bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Bosphorus diterangi pada drama puncak', desc: 'Jambatan Bosphorus bertukar warna (biru, ungu, emas), istana bercahaya kuning, Masjid Ortaköy dipantulkan ke dalam air hitam. 21:00-00:00 pencahayaan puncak untuk semua mercu tanda Istanbul.' },
      { title: 'Persembahan Turki tradisional di atas bot', desc: 'Lapan persembahan: Oba Dombra, persembahan sema, Sarı Gelin, medli Azerbaijan, tarian oryantal, medli Anatolia, dan tarian pisau Georgia-Kaukasus, kemudian saksofon langsung dan set DJ. Persembahan 40 minit, kemudian muzik + makan malam berterusan.' },
      { title: 'Hidangan lengkap berbilang hidangan', desc: '10 jenis meze Turki, pembuka selera panas (börek), hidangan utama (salmon, sea bass, sate ayam, sate daging, vegetarian — pilihan anda), pencuci mulut (pencuci mulut semolina istimewa), minuman ringan tanpa had. Diperakui halal.' },
      { title: 'Laluan Bosphorus penuh', desc: 'Kabataş → Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Bebek → Rumeli Hisarı → Jambatan Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Menara Maiden → Kabataş.' }
    ],
    faq: [
      { q: 'Bilakah pelayaran malam Bosphorus?', a: 'Pendaftaran masuk dari 20:00 di Jeti Kabataş. Bot bertolak pada 21:00, kembali sekitar 00:00. Kami cadangkan tiba 20 minit awal untuk menetap dan memilih tempat duduk.' },
      { q: 'Berapakah harga pelayaran malam Bosphorus?', a: 'Pelayaran malam (3 jam, makan malam, persembahan): €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}). Umur 0-3 percuma, 4-9 diskaun €5. Bayar di atas bot.' },
      { q: 'Apakah perbezaan antara pelayaran malam Bosphorus dan pelayaran makan malam?', a: 'Perkara yang sama, kata kunci berbeza. "Pelayaran malam Bosphorus" adalah cara kebanyakan pengembara mencari; "pelayaran makan malam" adalah istilah industri. Bot yang sama, jadual 3 jam yang sama, menu yang sama, persembahan yang sama. Pilih istilah carian mana-mana yang anda suka — pengalamannya sama.' },
      { q: 'Adakah pelayaran malam Bosphorus berbaloi berbanding pelayaran matahari terbenam?', a: 'Pelayaran malam = Istanbul diterangi, drama cahaya puncak, program hiburan penuh, foto paling ikonik jambatan yang diterangi. Dan ia hanya satu pelayaran: pada musim panas (Mei–Ogos), menaiki bot dari 20:00 menangkap waktu keemasan dan matahari terbenam tepat sekitar waktu bertolak 21:00 — jadi petang yang sama merangkumi matahari terbenam dan malam. Tidak perlu memilih atau menempah dua kali.' },
      { q: 'Bolehkah saya melakukan pelayaran malam Bosphorus pada hari pertama saya di Istanbul?', a: 'Ya — kami mencadangkannya. Ramai pengembara menempah pelayaran malam untuk petang pertama mereka kerana ia memberi anda orientasi lengkap: semua mercu tanda utama dari air, makan malam dan hiburan yang baik. Lebih mudah pada jet lag berbanding cuba bersiar-siar pada hari 1. Pemindahan hotel tersedia dari kawasan pusat.' },
      { q: 'Saya tidak tahu bahasa Turki — adakah pelayaran dalam bahasa Inggeris?', a: 'Kakitangan berbahasa Inggeris. Hiburan (sema, tarian rakyat, muzik) tidak memerlukan bahasa. Menu makan malam dalam bahasa Inggeris. Tempahan melalui WhatsApp / Telegram berfungsi dalam pelbagai bahasa (Inggeris, Arab, Rusia, Jerman, Perancis, Sepanyol). Tiada keperluan untuk bahasa Turki.' }
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
      description: 'Pelayaran makan malam 3 jam di Istanbul Bosphorus. Menu Turki pelbagai hidangan, folklor langsung, jambatan bercahaya. Pembatalan percuma, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Makan Malam Istanbul',
      subtitle: 'Pelayaran makan malam terbaik di Istanbul — 3 jam di Bosphorus, jamuan Turki berbilang hidangan, hiburan langsung dan pemandangan malam mercu tanda paling ikonik bandar ini.',
      badge: '4.9★ · 11,317+ tetamu · TÜRSAB A-17672'
    },
    intro: [
      'Mencari **pelayaran makan malam di Istanbul**? Anda menemui apa yang disyorkan oleh kebanyakan pengembara. Petang 3 jam kami di Bosphorus menggabungkan makan malam Turki berbilang hidangan penuh, tarian rakyat langsung dan pemandangan paling fotogenik bandar ini — semua dari bot yang selesa yang bertolak dari Jeti Kabataş pada 21:00.',
      'Pengalaman **pelayaran makan malam Istanbul**: naik pada 20:00, menetap, saksikan Istana Dolmabahçe berlalu semasa kami bertolak, makan malam bermula semasa kami menghampiri Masjid Ortaköy, persembahan bermula (sema, tarian rakyat, oryantal), pencuci mulut tiba semasa anda berada di bawah Jambatan Bosphorus yang diterangi. Anda kembali ke Kabataş dengan kolaj foto ikonik dan perut yang penuh menjelang tengah malam.',
      'Dari €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}) untuk pelayaran makan malam. Bayar di atas bot — tiada bayaran pendahuluan, tiada risiko. Berlesen TÜRSAB A-17672, dinilai 4.9★ oleh 11,317+ pengembara.'
    ],
    highlights: [
      { title: 'Makan malam Turki berbilang hidangan lengkap', desc: '10 jenis meze, pembuka selera panas, hidangan utama (salmon/sea bass/sate ayam/sate daging/vegetarian), pencuci mulut semolina istimewa. Diperakui halal. Minuman ringan tanpa had termasuk.' },
      { title: 'Persembahan tarian rakyat Turki langsung', desc: 'Lapan persembahan: Oba Dombra, persembahan sema, Sarı Gelin, medli Azerbaijan, tarian oryantal, medli Anatolia, tarian pisau Georgia-Kaukasus, kemudian saksofon langsung dan DJ. Persembahan 40 minit, muzik suasana berterusan.' },
      { title: 'Laluan malam Bosphorus penuh', desc: 'Pelayaran 3 jam: Dolmabahçe, Çırağan, Masjid Ortaköy, Jambatan Bosphorus, Bebek, Rumeli Hisarı, Jambatan FSM, Beylerbeyi, Üsküdar, Menara Maiden. Kedua-dua tepi Eropah dan Asia.' },
      { title: 'Dari €{p.dinnerStd} — bayar di atas bot', desc: 'Pelayaran makan malam €{p.dinnerStd} (asalnya €{p.dinnerStdOriginal}). Tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' }
    ],
    faq: [
    {
      q: "Persembahan apa yang ada dalam program pelayaran makan malam?",
      a: "Lapan persembahan: Oba Dombra (irama shaman Asia Tengah), upacara darwis berpusing Mevlana, Sarı Gelin, medley Azerbaijan, persembahan oryantal (tarian perut), medley Turki dan Anatolia, Gandagan Georgia serta medley Caucasus dengan tarian pisau tradisionalnya, dan penutup saksofon langsung dan DJ. Program berjalan sepanjang pelayaran; urutannya boleh berubah."
    },
      { q: 'Berapakah kos pelayaran makan malam di Istanbul?', a: 'Pelayaran makan malam kami €{p.dinnerStd}/orang (harga biasa €{p.dinnerStdOriginal}). Umur 0-3 percuma, 4-9 diskaun €5. Bayar di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Apa yang termasuk dalam harga pelayaran makan malam Istanbul?', a: 'Pelayaran 3 jam di Bosphorus, makan malam Turki berbilang hidangan (meze, pembuka selera panas, hidangan utama, pencuci mulut), minuman ringan tanpa had, persembahan tarian rakyat langsung (sema, tarian rakyat, oryantal), muzik langsung + DJ, akses dek terbuka, cukai termasuk. Pemindahan hotel dan alkohol adalah tambahan pilihan.' },
      { q: 'Dari manakah pelayaran makan malam Istanbul bertolak?', a: 'Jeti Kabataş, Istanbul — di tepi Eropah, bersebelahan Istana Dolmabahçe. Lokasi pertemuan tepat dikongsi melalui WhatsApp / Telegram selepas tempahan. Video arah berjalan dari perhentian trem Dolmabahçe dan stesen trem Kabataş di bahagian titik pertemuan di atas.' },
      { q: 'Berapa lamakah pelayaran makan malam — dan bila ia bermula?', a: '3 jam secara keseluruhan. Pendaftaran masuk dari 20:00, bot bertolak sepenuhnya pada 21:00, kembali sekitar 00:00. Kami cadangkan tiba 15-20 minit awal untuk menetap dan memilih tempat duduk.' },
      { q: 'Perlukah saya menempah awal, atau bolehkah saya hadir sahaja?', a: 'Tempah awal — tempat duduk terisi, terutamanya hujung minggu dan cuti. Tempahan hari yang sama selalunya boleh tetapi tidak dijamin. Wizard di halaman ini mengekalkan tempat anda dalam masa kurang 1 minit. Bayar di atas bot, jadi tiada risiko kewangan untuk menempah awal.' },
      { q: 'Adakah pelayaran makan malam Istanbul sesuai untuk vegetarian / halal / sekatan diet?', a: 'Ya — semua daging diperakui halal. Hidangan utama vegetarian (falafel, kentang panggang, pilaf bulgur, rebusan sayur, gelang bawang) tersedia tanpa bayaran tambahan. Alahan boleh diuruskan jika dimaklumkan semasa tempahan. Alkohol adalah tambahan pilihan, tidak pernah dipaksa.' }
    ],
    cta: {
      primary: 'Tempah Pelayaran Makan Malam · Bayar di Atas Bot',
      secondary: '4.9★ · Berlesen TÜRSAB · Pembatalan percuma 2 jam sebelum',
      tertiary: 'Kekosongan Malam Ini'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tur Malam Istanbul dari €{p.dinnerStd} — Pelayaran Bosphorus + Persembahan',
      description: 'Pelayaran 3 jam Bosphorus dengan makan malam dan persembahan langsung. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal. 11,317+ tetamu.'
    },
    hero: {
      h1: 'Pelayaran Malam Istanbul',
      subtitle: 'Pelayaran malam yang pertama disyorkan oleh penduduk Istanbul — pelayaran Bosphorus 3 jam dengan makan malam, hiburan langsung dan pemandangan paling ikonik yang diterangi bandar ini.',
      badge: 'Petang Istanbul Ikonik · 3 Jam · Makan Malam Termasuk'
    },
    intro: [
      '**Pelayaran malam Istanbul** perlu melakukan tiga perkara: memberi anda pemandangan ikonik bandar, memberi anda makan dengan baik dan menghiburkan anda. Pelayaran makan malam Bosphorus kami melakukan ketiga-tiganya dalam satu petang 3 jam — dan itulah sebabnya kebanyakan panduan Istanbul mengesyorkannya sebagai pengalaman pelayaran malam #1.',
      'Laluan **pelayaran malam Istanbul** merangkumi mercu tanda diterangi yang terbaik: Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus (bertukar warna), kawasan Bebek, Rumeli Hisarı, Jambatan FSM, Istana Beylerbeyi, pantai Asia Üsküdar, dan Menara Maiden di kejauhan. Kebanyakan pelayaran bandar menunjukkan ini dari bas — kami menunjukkannya dari air, di mana ia paling dramatik.',
      'Makan malam termasuk (menu Turki berbilang hidangan), persembahan tarian rakyat Turki langsung, sema, tarian oryantal dan set DJ. Jika anda di Istanbul selama 2-3 hari, ini adalah satu petang yang memberi impak paling besar. 4.9★ dari 11,317+ pengembara, bayar di atas bot, tiada bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Semua pemandangan malam Istanbul ikonik', desc: 'Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus diterangi, Rumeli Hisarı, Jambatan FSM, Istana Beylerbeyi, Menara Maiden. Setiap mercu tanda utama dalam pencahayaan malam puncak.' },
      { title: 'Hidangan Turki lengkap termasuk', desc: '10 meze, pembuka selera panas, hidangan utama (salmon/sea bass/sate ayam/sate daging/vegetarian), pencuci mulut, minuman ringan tanpa had. Diperakui halal. Berharga €{p.dinnerStd}/orang — semua termasuk.' },
      { title: 'Tarian rakyat langsung + sema + oryantal', desc: 'Program langsung lapan bahagian: Oba Dombra, persembahan sema Mevlana, Sarı Gelin, medli Azerbaijan, tarian oryantal, medli Anatolia, tarian pisau Georgia-Kaukasus, kemudian saksofon langsung dan DJ. Persembahan 40 minit, muzik suasana sepanjang petang.' },
      { title: 'Mudah untuk pengunjung kali pertama ke Istanbul', desc: 'Titik pertemuan pusat (Jeti Kabataş), pemindahan hotel (+€{p.transfer}/orang), kakitangan berbahasa Inggeris, bayar di atas bot. Sifar tekanan logistik. Datang, nikmati, pulang.' }
    ],
    faq: [
      { q: 'Apakah pelayaran malam terbaik di Istanbul?', a: 'Pelayaran makan malam Bosphorus secara konsisten disenaraikan sebagai #1. Sebab: (1) ia memberi anda semua pemandangan malam ikonik dari air, (2) ia merangkumi makan malam dan persembahan dalam satu pakej, (3) 3 jam cukup untuk melihat banyak tanpa keletihan, (4) titik pertemuan pusat, (5) bayar di atas bot mengurangkan geseran tempahan. Kebanyakan panduan perjalanan Istanbul mengesyorkannya sebagai "satu perkara malam yang mesti dilakukan".' },
      { q: 'Berapakah harga pelayaran malam Istanbul?', a: 'Pelayaran malam makan malam Bosphorus kami: €{p.dinnerStd}/orang. Termasuk pelayaran, makan malam, hiburan, minuman ringan. Pilihan: 2 gelas alkohol +€{p.alcohol2}/orang, pemindahan hotel +€{p.transfer}/orang. Bayar di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Adakah pelayaran malam Istanbul selamat untuk pengembara solo?', a: 'Ya — sangat selamat. Bot berlesen TÜRSAB, kakitangan profesional berbahasa Inggeris, CCTV di dek, jaket keselamatan tersedia. Ramai pengembara solo menempah pelayaran ini. Anda makan di meja dikongsi atau peribadi (pilihan anda) dan petang bersifat merangkumi — anda berkenalan dengan pengembara lain jika mahu, atau kekal sendiri.' },
      { q: 'Bilakah masa terbaik untuk pelayaran malam di Istanbul?', a: 'Pelayaran makan malam Bosphorus kami ialah 21:00-00:00 (3 jam). Ini adalah masa pencahayaan puncak untuk semua mercu tanda Istanbul — jambatan diterangi penuh, istana bercahaya, bulan di atas air. Jika anda juga mahu waktu keemasan, datanglah pada musim panas: menaiki bot bermula 20:00, dan pada Mei–Ogos matahari terbenam tepat sekitar waktu bertolak 21:00 — pelayaran yang sama merangkumi kedua-duanya.' },
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
      description: 'Tur bot 3 jam: pelayaran Bosphorus, makan malam Turki lengkap, folklor langsung, pemandangan malam bercahaya. Pembatalan percuma, bayar di kapal. 11,317+ tetamu.'
    },
    hero: {
      h1: 'Pelayaran Bot Istanbul',
      subtitle: 'Pelayaran bot Istanbul paling banyak ditempah oleh pengembara — pelayaran Bosphorus dengan hidangan Turki, hiburan langsung dan pemandangan ikonik bandar dari air.',
      badge: '4.9★ · TÜRSAB A-17672 · Bayar di Atas Bot'
    },
    intro: [
      'Apabila anda mencari "pelayaran bot Istanbul", anda mencari satu perkara yang mentakrifkan bandar dari air: Bosphorus. Pelayaran bot Bosphorus 3 jam kami membawa anda melepasi setiap mercu tanda utama Istanbul — Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus, Rumeli Hisarı, Istana Beylerbeyi dan Menara Maiden — dengan hidangan Turki lengkap dan hiburan langsung.',
      'Berbeza dengan banyak feri bersiar-siar 1 jam yang merangkumi kurang Bosphorus dan melangkau makan malam dan hiburan, **pelayaran bot Istanbul kami** adalah pengalaman petang lengkap: pendaftaran masuk 20:00 di Jeti Kabataş, pelayaran sehingga tengah malam, 10 meze, hidangan utama, pencuci mulut, sema, tarian rakyat, tarian oryantal dan DJ. Anda mendapat pelayaran DAN keluar malam sekali gus.',
      'Sama ada anda mempunyai satu malam di Istanbul atau seminggu penuh, **pelayaran bot Istanbul** ini menyelesaikan tugas. 4.9★ dari 11,317+ pengembara, berlesen TÜRSAB (A-17672), menu diperakui halal dan bayar di atas bot — tiada komitmen kewangan sehingga anda berpuas hati dengan pengalaman.'
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
      { q: 'Berapakah harga pelayaran bot Istanbul?', a: 'Pelayaran bot makan malam kami: €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}). Umur 0-3 percuma, 4-9 diskaun €5. Bayar di atas bot. Alkohol dan pemindahan hotel adalah tambahan pilihan.' },
      { q: 'Dari manakah pelayaran bot Istanbul bertolak?', a: 'Bot kami bertolak dari Jeti Kabataş, pusat Istanbul tepi Eropah, bersebelahan Istana Dolmabahçe. Boleh diakses melalui trem T1 (stesen Kabataş), teksi 15 min dari Taksim atau berjalan 20 min dari Taksim. Pemindahan hotel tersedia dari kawasan pusat +€{p.transfer}/orang.' },
      { q: 'Adakah pelayaran bot ini sesuai untuk keluarga berkanak-kanak?', a: 'Ya — sangat mesra keluarga. Kanak-kanak 0-3 tahun percuma, 4-9 diskaun €5. Tempat duduk dalaman tertutup, menu kanak-kanak atas permintaan dan hiburan (sema, tarian rakyat) menarik untuk kanak-kanak. Ramai keluarga dari seluruh dunia menempah pelayaran ini.' },
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
      'Sama ada anda di Istanbul selama 24 jam atau seminggu, inilah **persiaran Bosphorus** yang memberi anda paling banyak dalam satu petang. Dinilai 4.9★ oleh 11,317+ pengembara, berlesen TÜRSAB A-17672, menu mesra halal, bayar di atas bot — tiada risiko bayaran pendahuluan.'
    ],
    highlights: [
      { title: 'Bosphorus penuh dalam satu masa', desc: 'Pantai Eropah (Dolmabahçe, Ortaköy, Rumeli Hisarı), pantai Asia (Beylerbeyi, Üsküdar), kedua-dua jambatan Bosphorus, Menara Maiden. Setiap mercu tanda utama kelihatan dalam 3 jam.' },
      { title: 'Makan malam + hiburan termasuk', desc: 'Bukan sekadar feri bersiar-siar — makan malam Turki lengkap dengan meze, hidangan utama, pencuci mulut. Persembahan tarian rakyat langsung, sema, oryantal, DJ. Nilai hiburan melampaui pemandangan semata-mata.' },
      { title: 'Petang = pencahayaan terbaik', desc: 'Persiaran Bosphorus siang menunjukkan anda mercu tanda dalam cahaya rata. Persiaran petang menangkap semua diterangi: istana bercahaya, jambatan berwarna, masjid dipantulkan ke dalam air gelap. Foto lebih baik, lebih dramatik.' },
      { title: 'Dari €{p.dinnerStd} — bayar di atas bot', desc: 'Tiada bayaran pendahuluan diperlukan. Bayar di atas bot (tunai atau kad). Pembatalan percuma sehingga 2 jam sebelum bertolak. Umur 0-3 percuma, 4-9 diskaun €5. Harga telus.' }
    ],
    faq: [
      { q: 'Apakah persiaran Bosphorus terbaik di Istanbul?', a: 'Pelayaran makan malam petang secara konsisten berada di kedudukan teratas. Pilihan siang (feri pengangkutan 1 jam, bot bersiar-siar 2 jam) menunjukkan kurang dan tidak termasuk makan malam. Untuk nilai, sukar untuk mengalahkan pelayaran 3 jam dengan makan malam, persembahan dan titik pergi-pulang yang pusat. Kos €{p.dinnerStd} pelayaran kami menghapuskan keperluan untuk petang makan malam + hiburan yang berasingan.' },
      { q: 'Berapa lamakah persiaran Bosphorus?', a: 'Persiaran Bosphorus kami adalah 3 jam secara keseluruhan (bertolak 21:00, kembali 00:00). Terdapat pilihan lebih pendek (feri bersiar-siar 1 jam, pelayaran 90 minit) tetapi ia melangkau makan malam dan hiburan. Untuk pengalaman petang lengkap, 3 jam adalah ideal — cukup untuk melihat segalanya, tidak meletihkan.' },
      { q: 'Adakah persiaran Bosphorus berbaloi?', a: 'Ya — hampir setiap panduan perjalanan Istanbul menyenaraikan "pelayaran Bosphorus" sebagai salah satu 5 perkara yang mesti dilakukan. Bandar dibina di sekitar selat ini; jika anda tidak melihat Bosphorus dari air, anda tidak benar-benar melihat Istanbul. Pelayaran petang khusus kami menambah makan malam dan hiburan, menjadikannya keluar petang lengkap dan bukan sekadar bersiar-siar.' },
      { q: 'Apa yang perlu saya bawa untuk persiaran Bosphorus?', a: 'Pasport atau kad pengenalan (untuk pendaftaran bot), jaket nipis (dek sejuk pada waktu petang), telefon pintar/kamera, kasut selesa untuk lantai tarian. Tunai atau kad untuk pembayaran. Segala yang lain di atas bot. Pemindahan hotel tersedia +€{p.transfer}/orang jika anda tidak mahu menggunakan pengangkutan awam.' },
      { q: 'Adakah persiaran Bosphorus sesuai untuk kanak-kanak?', a: 'Ya — sangat mesra kanak-kanak. Kanak-kanak 0-3 tahun percuma (termasuk pemindahan), 4-9 diskaun €5. Tempat duduk dalaman tertutup, menu kanak-kanak atas permintaan dan hiburan adalah sopan dan menarik. Ramai keluarga menempah ini sebagai sorotan perjalanan Istanbul mereka.' },
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
      description: 'Tiket langsung pelayaran Bosphorus dari €{p.dinnerStd}/orang. Tiada deposit, bayar di kapal. Pembatalan percuma hingga 2 jam sebelumnya.'
    },
    hero: {
      h1: 'Tiket Pelayaran Bosphorus',
      subtitle: 'Lepaskan yuran perantara — beli tiket pelayaran Bosphorus terus dari kami. Tiada bayaran pendahuluan, bayar di atas bot, pembatalan percuma sehingga 2 jam sebelum bertolak.',
      badge: 'Tempahan Terus · Tiada Bayaran Pendahuluan · DISKAUN 40%'
    },
    intro: [
      'Mencari **tiket pelayaran Bosphorus**? Beli terus. Tiket kami €{p.dinnerStd}/orang — diskaun 40% daripada harga biasa (€{p.dinnerStdOriginal}). Tapak tempahan pihak ketiga selalunya menambah komisen 20-40%. Dengan menempah terus, anda menjimatkan — dan anda masih boleh bayar di atas bot.',
      'Proses **tiket pelayaran Bosphorus** kami: isi wizard di halaman ini dalam kurang 1 minit (tarikh, bilangan tetamu, pakej, hubungan), kami mengesahkan serta-merta melalui WhatsApp / Telegram, anda hadir di Jeti Kabataş pada 20:00, anda bayar di atas bot, anda nikmati pelayaran makan malam 3 jam. Tiada tiket fizikal untuk dicetak, tiada baucar untuk e-mel — pengesahan adalah tiket anda.',
      'Sama ada anda menempah pelayaran makan malam untuk malam ini atau mengamankan tarikh tertentu minggu depan, **tiket pelayaran Bosphorus terus** adalah cara paling pantas. Dinilai 4.9★, berlesen TÜRSAB (A-17672), menu diperakui halal dan menyokong tambahan alkohol serta pemindahan hotel.'
    ],
    highlights: [
      { title: 'Tempahan terus — tiada yuran perantara', desc: '€{p.dinnerStd}/orang, satu harga telus. Tapak pihak ketiga mengenakan €30-80+ untuk pelayaran yang sama. Anda menjimatkan dengan menempah terus dengan kami. Tiada caj tersembunyi, tiada markup komisen.' },
      { title: 'Bayar di atas bot — tiada bayaran pendahuluan', desc: 'Tempah tempat anda sekarang, bayar semasa anda menaiki kapal. Tunai atau kad diterima. Percuma jika anda batal 2+ jam sebelum bertolak. Sifar risiko kewangan untuk mengamankan awal.' },
      { title: 'Pengesahan dalam kurang 1 minit', desc: 'Isi wizard → kami mengesahkan melalui WhatsApp / Telegram. Tiada PDF beremel untuk dicetak. Mesej kami adalah tiket anda. Hadir di jeti pada 20:00.' },
      { title: 'DISKAUN 40% harga pelancaran semasa', desc: 'Asalnya €{p.dinnerStdOriginal}, kini €{p.dinnerStd}. Diskaun 40% kerana anda menempah terus. Bukan nombor terhad masa — harga tempahan terus standard kami.' }
    ],
    faq: [
      { q: 'Berapakah harga tiket pelayaran Bosphorus?', a: 'Tiket €{p.dinnerStd}/orang (biasa €{p.dinnerStdOriginal}). Termasuk pelayaran 3 jam, makan malam Turki berbilang hidangan, persembahan tarian rakyat langsung, minuman ringan tanpa had. Umur 0-3 percuma, 4-9 diskaun €5. Bayar di atas bot — tiada bayaran pendahuluan.' },
      { q: 'Di manakah boleh saya beli tiket pelayaran Bosphorus?', a: 'Terus di halaman ini — isi wizard tempahan, kami mengesahkan serta-merta melalui WhatsApp / Telegram. Bayar di atas bot. Platform pihak ketiga (Viator, GetYourGuide, Klook) juga menjual tiket tetapi selalunya mengenakan €30-80+ — ini adalah markup perantara. Terus adalah paling murah dan paling pantas.' },
      { q: 'Perlukah saya mencetak tiket pelayaran Bosphorus?', a: 'Tidak — tiada tiket fizikal atau baucar diperlukan. Selepas tempahan, kami hantar pengesahan melalui WhatsApp (atau Telegram) dengan titik pertemuan, masa dan nama tempahan anda. Cuma tunjuk telefon anda di jeti. Itu sahaja.' },
      { q: 'Bolehkah saya batal atau dapatkan bayaran balik tiket pelayaran Bosphorus saya?', a: 'Ya — pembatalan percuma sehingga 2 jam sebelum bertolak. Cuma hantar mesej WhatsApp. Kerana anda belum bayar lagi (bayar di atas bot), tiada bayaran balik diperlukan — anda hanya tidak hadir, tiada caj. Jauh lebih fleksibel daripada tiket pihak ketiga bayar pendahuluan.' },
      { q: 'Adakah tiket pelayaran Bosphorus tersedia pada hari yang sama?', a: 'Selalunya ya, terutamanya hari bekerja. Hujung minggu dan cuti penuh dengan lebih cepat. Semak kekosongan melalui wizard tempahan — ia dikemas kini masa nyata. Tempahan hari yang sama biasanya mungkin sehingga beberapa jam sebelum bertolak 21:00. Untuk permintaan segera, WhatsApp.' },
      { q: 'Adakah tiket pelayaran Bosphorus kanak-kanak percuma?', a: 'Kanak-kanak **0-3 tahun percuma sepenuhnya** (tiada bayaran, tiada caj tersembunyi, termasuk pemindahan). **4-9 tahun diskaun €5** (€{p.dinnerStd} − €5 = €19.30). **10+ tahun harga dewasa penuh.** Harga dihadkan dan telus — tiada tipu muslihat "caj bayi".' }
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
      description: 'Tempahan pelayaran Bosphorus hari yang sama. Pengesahan WhatsApp dalam minit. Bertolak 21:00 dari Kabataş. Pembatalan percuma, bayar di kapal. 11,317+ tetamu.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Saat Akhir',
      subtitle: 'Kekosongan untuk malam ini, disahkan dalam minit. Tiada bayaran pendahuluan, tiada baucar pra-cetak — hanya hadir di jeti dan nikmati petang.',
      badge: 'Tempahan Hari yang Sama · Disahkan dalam Minit · Bayar di Atas Bot'
    },
    intro: [
      'Tiba di Istanbul petang ini dan mahu malam yang hebat malam ini? **Pelayaran Bosphorus saat akhir** berfungsi. Kami mengekalkan tempat duduk khusus untuk tempahan hari yang sama kerana kami tahu ramai pengembara membuat keputusan pada waktu pagi. Isi wizard di sini, kami mengesahkan melalui WhatsApp dalam minit, anda hadir di Jeti Kabataş pada 20:00, anda bayar di atas bot, anda nikmati.',
      '**Pelayaran Bosphorus saat akhir kami** mempunyai program petang yang sama seperti tempahan awal: 3 jam di atas air (21:00-00:00), makan malam Turki berbilang hidangan, persembahan tarian rakyat langsung, sema, tarian oryantal, DJ. Istana Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus yang diterangi — pemandangan ikonik yang sama. Harga sama: €{p.dinnerStd}/orang.',
      'Pembatalan hari yang sama adalah percuma sehingga 2 jam sebelum bertolak, kerana **bayar di atas bot** bermakna anda belum berkomitmen kepada apa-apa. Tempah pada 14:00 dan ubah rancangan anda menjelang 19:00, cuma hantar mesej WhatsApp — tiada bayaran balik, tiada masalah. Itulah fleksibiliti **pelayaran Istanbul saat akhir** yang dihargai pengembara.'
    ],
    highlights: [
      { title: 'Tempat duduk untuk malam ini masih tersedia', desc: 'Kami mengekalkan 5-10 tempat duduk setiap hari untuk tempahan hari yang sama. Semak wizard di atas — kekosongan masa nyata. Jika pelayaran hari ini penuh, esok biasanya terbuka.' },
      { title: 'Pengesahan dalam kurang 5 minit', desc: 'Isi wizard → mesej pengesahan WhatsApp/Telegram → siap. Tiada baucar e-mel untuk ditunggu, tiada kod QR untuk dicetak. Mesej kami adalah tiket anda.' },
      { title: 'Sifar pembayaran sehingga anda menaiki kapal', desc: 'Bayar di atas bot, tunai atau kad. Jika anda tidak hadir (perubahan rancangan, sakit, cuaca), tiada caj. Pembatalan percuma sehingga 2 jam sebelum bertolak. Benar-benar mesra saat akhir.' },
      { title: 'Pemindahan hotel hari yang sama selalunya tersedia', desc: 'Pemindahan hotel biasanya memerlukan notis 24 jam, tetapi untuk tempahan hari yang sama antara 14:00-18:30 kami biasanya boleh mengatur ambilan dengan +€{p.transfer}/orang. WhatsApp untuk permintaan pemindahan segera.' }
    ],
    faq: [
      { q: 'Bolehkah saya benar-benar menempah pelayaran Bosphorus untuk malam ini?', a: 'Ya — selalunya. Kami mengekalkan tempat duduk untuk tempahan hari yang sama. Semak wizard di atas untuk kekosongan malam ini. Jika tempat duduk tersedia, anda boleh tempah sehingga 21:00. Hujung minggu lebih ketat — tempah awal hari itu jika boleh.' },
      { q: 'Berapa lambatkah saat akhir saya boleh tempah?', a: 'Tempahan kekal dibuka sehingga pukul 21:00 — tepat sehingga waktu berlepas. Jika sudah terlalu hampir dengan waktu berlepas, hantar mesej terus kepada kami di WhatsApp +90 532 244 29 22 — jika masih ada tempat, kami sahkan secara manual.' },
      { q: 'Adakah pelayaran Bosphorus saat akhir lebih mahal?', a: 'Tidak — harga sama dengan tempahan awal: €{p.dinnerStd}/orang. Kami tidak melakukan "harga surge" atau premium saat akhir. Bot yang sama, makan malam yang sama, persembahan yang sama, harga yang sama.' },
      { q: 'Bagaimana jika pelayaran malam ini penuh sepenuhnya?', a: 'Pelayaran esok biasanya terbuka — kami beroperasi setiap hari, 365 hari setahun. Anda boleh tempah untuk esok dan masih jadi "saat akhir" — maksudnya anda baru membuat keputusan. Pelayaran hari bekerja mempunyai lebih banyak ruang daripada hujung minggu.' },
      { q: 'Bolehkah anda mengatur pemindahan hotel saat akhir?', a: 'Pemindahan hari yang sama adalah mungkin sehingga ~18:30 untuk pelayaran 21:00. Selepas 18:30, kami mungkin tidak mempunyai pemandu tersedia — dalam kes itu, anda boleh ambil teksi ke Jeti Kabataş (15 min dari Taksim, 10 min dari Sultanahmet, ~€10-15). Pusat dan mudah.' },
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
      description: 'Harga pelayaran Bosphorus Istanbul: pelayaran makan malam €{p.dinnerStd}/orang. Anak 0-3 percuma, 4-9 diskaun €5. Tambahan telus. Pembatalan percuma.'
    },
    hero: {
      h1: 'Harga Pelayaran Istanbul',
      subtitle: 'Harga telus, tiada caj tersembunyi. Satu pakej, €{p.dinnerStd}/orang — dan anda membayar di atas bot, bukan sekarang.',
      badge: 'Telus · DISKAUN 40% Terus · 0-3 Tahun Percuma'
    },
    intro: [
      '**Harga pelayaran Istanbul** sangat berbeza — daripada feri bajet €15 yang melangkau makan malam kepada kapal layar gaya resort €150+. Harga kami berada di tengah dan memberikan nilai terbaik: satu pakej €{p.dinnerStd}/orang untuk pelayaran 3 jam makan malam penuh dengan persembahan. Tiada caj tersembunyi, tiada caj tambahan mengejut.',
      'Pecahan terperinci **harga pelayaran Istanbul**, kerana ketelusan penting:\n\n- **Pelayaran Makan Malam**: €{p.dinnerStd}/orang (asalnya €{p.dinnerStdOriginal}, diskaun 40%). Termasuk pelayaran 3 jam, 10 meze, hidangan utama, pencuci mulut, minuman ringan tanpa had, persembahan langsung.\n- **Umur 0-3**: Percuma. 4-9 tahun: diskaun €5. 10+ tahun: harga penuh.\n\nTambahan (pilihan):\n- 2 gelas alkohol: +€{p.alcohol2}/orang\n- Pemindahan hotel pergi-balik: +€{p.transfer}/orang\n- Susunan meja romantik: +€{p.romantic}/meja',
      'Dan yang penting: **bayar di atas bot**. Anda tidak berkomitmen walau satu sen sehingga anda berada di atas bot. Pembatalan percuma sehingga 2 jam sebelum bertolak. Tiada komitmen, tiada risiko — harga **pelayaran Istanbul** paling mesra pengguna yang akan anda temui.'
    ],
    highlights: [
      { title: 'Pelayaran Makan Malam: €{p.dinnerStd} (asalnya €{p.dinnerStdOriginal})', desc: 'Diskaun 40% daripada harga biasa. Pelayaran 3 jam, hidangan Turki lengkap, persembahan langsung, minuman ringan tanpa had. Satu pakej — merangkumi segala yang anda perlukan untuk petang yang hebat.' },
      { title: 'Bayar di atas bot — €0 pendahuluan', desc: 'Tempah sekarang, bayar semasa menaiki bot (tunai atau kad). Pembatalan percuma sehingga 2 jam sebelum bertolak. Sifar risiko kewangan apabila menempah awal.' },
      { title: 'Harga kanak-kanak: 0-3 percuma, 4-9 diskaun €5', desc: '0-3 percuma sepenuhnya (tiada bayaran). 4-9 diskaun €5 daripada harga dewasa. 10+ harga dewasa penuh. Telus, tiada tipu muslihat harga keluarga. Pemindahan juga percuma untuk 0-3.' },
      { title: 'Tambahan — hanya apabila anda mahu', desc: 'Alkohol (2 gelas): +€{p.alcohol2}/orang. Pemindahan: €{p.transfer}/orang. Meja romantik: €{p.romantic}/meja. Semua pilihan, tidak dibundelkan. Pilih hanya apa yang anda perlukan.' }
    ],
    faq: [
      { q: 'Berapakah kos pelayaran Istanbul?', a: 'Pelayaran Makan Malam: €{p.dinnerStd}/orang (biasa €{p.dinnerStdOriginal}, diskaun 40%). Umur 0-3 percuma, 4-9 diskaun €5. Bayar di atas bot — tiada bayaran pendahuluan. Pembatalan percuma sehingga 2 jam sebelum bertolak.' },
      { q: 'Adakah terdapat caj tersembunyi dalam harga pelayaran Istanbul?', a: 'Tidak. Harga termasuk: pelayaran 3 jam, makan malam lengkap (meze, pembuka, hidangan utama, pencuci mulut), minuman ringan tanpa had, persembahan langsung, cukai. Tambahan pilihan (alkohol, pemindahan, meja romantik) diasingkan dan berharga telus — anda bayar hanya jika anda menambah. Tiada "caj perkhidmatan", "yuran pelabuhan" atau caj tambahan mengejut.' },
      { q: 'Mengapakah harga pelayaran Istanbul diskaun 40% — adakah ini tipu muslihat?', a: 'Bukan tipu muslihat. Harga biasa €{p.dinnerStdOriginal} adalah apa yang dikenakan oleh tapak tempahan pihak ketiga (Viator, GetYourGuide, Klook) — dengan komisen mereka. Tempah terus dan dapatkan €{p.dinnerStd}. Itulah perbezaan 40%. Tiada tipu muslihat harga terhad masa atau surge.' },
      { q: 'Bagaimanakah harga pelayaran Istanbul berbanding pilihan lain?', a: 'Feri pengangkutan: €5-10, 1 jam, tiada makan malam, tiada hiburan, bersiar-siar sahaja. Pelayaran makan malam bajet: €20-30, sesak, makanan sederhana, persembahan pendek. Pelayaran makan malam kami (€{p.dinnerStd}): 3 jam, makan malam lengkap, persembahan penuh, meja peribadi, berlesen TÜRSAB. Kapal layar resort: €100-150+, berlebihan untuk pengembara solo/pasangan.' },
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
      description: 'Pelayaran sightseeing Bosphorus: Dolmabahçe, Ortaköy, Jambatan Bosphorus, Rumeli, Beylerbeyi, Menara Dara. Tur petang 3 jam dengan makan malam.'
    },
    hero: {
      h1: 'Bersiar-Siar Bosphorus',
      subtitle: 'Semua mercu tanda ikonik Istanbul — dari air, pada waktu malam, dengan makan malam. Satu pelayaran 3 jam merangkumi Dolmabahçe, Masjid Ortaköy, Jambatan Bosphorus, Rumeli Hisarı dan banyak lagi.',
      badge: '10+ Mercu Tanda · Pantai Eropah dan Asia · 3 Jam'
    },
    intro: [
      '**Bersiar-siar Bosphorus** dari air mengalahkan mana-mana pelayaran bas. Bosphorus adalah laluan air paling bersejarah di bandar — sultan-sultan Uthmaniyah, maharaja Byzantine, pedagang Greek dan kapal perang Rusia semuanya melalui. Hari ini, pelayaran 3 jam kami, dengan ulasan daripada kakitangan berbahasa Inggeris kami, melepasi setiap mercu tanda utama Istanbul yang mentakrifkan ufuk.',
      'Laluan **pelayaran bersiar-siar Bosphorus kami** (bertolak petang, 21:00-00:00):\n\n1. **Istana Dolmabahçe** — kediaman Uthmaniyah abad ke-19, diterangi pada waktu malam\n2. **Istana Çırağan** — kini hotel mewah, sejarah diraja\n3. **Masjid Ortaköy** — salah satu masjid paling difoto di Istanbul, di atas air\n4. **Jambatan Bosphorus** — bertukar antara biru, ungu, emas pada waktu malam\n5. **Bebek** — kawasan kejiranan tepi Eropah yang bergaya\n6. **Rumeli Hisarı** — dibina 1452 oleh Sultan Mehmed II sebelum penaklukan Constantinople\n7. **Jambatan Fatih Sultan Mehmet** — jambatan Bosphorus kedua, gerbang dramatik\n8. **Istana Beylerbeyi** — tepi Asia, kediaman musim panas Uthmaniyah\n9. **Üsküdar** — tepi Asia Istanbul, kawasan kejiranan tradisional\n10. **Menara Maiden** — menara pulau kecil, salah satu simbol paling romantik Istanbul',
      'Makan malam dan hiburan termasuk — bukan berasingan — jadi **bersiar-siar Bosphorus** bertukar menjadi petang lengkap. Makan malam Turki berbilang hidangan, persembahan tarian rakyat langsung, sema, tarian oryantal, DJ. Dinilai 4.9★ oleh 11,317+ pengembara, berlesen TÜRSAB A-17672.'
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
