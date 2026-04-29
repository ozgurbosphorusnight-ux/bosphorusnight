/**
 * Indonesian (Bahasa Indonesia) translations for all 17 landing pages.
 * Keyed by slug. Each entry mirrors the structure of content/pages/{slug}.js
 * but with translated strings only — non-translatable fields (images, tourType, schema)
 * are NOT duplicated here; build script reads them from the English master.
 * Target audience: Indonesian Muslim tourists (halal-friendly emphasis).
 * Tone: formal polite (Anda form), warm, welcoming, premium.
 */
module.exports = {

  'bosphorus-dinner-cruise': {
    meta: {
      title: 'Pelayaran Makan Malam Bosphorus dari €{p.dinnerStd} — Tur Malam Istanbul + Show',
      description: 'Pelayaran makan malam 3 jam di Bosphorus: menu Turki multi-hidangan dan pertunjukan folklor langsung. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    hero: {
      h1: 'Pelayaran Makan Malam Bosphorus di Istanbul',
      subtitle: 'Tiga jam hiburan langsung, jamuan Turki berlimpah, dan pemandangan malam Bosphorus yang paling memukau.',
      badge: '4,8★ · 11.317 ulasan'
    },
    intro: [
      '**Pelayaran makan malam Bosphorus** adalah pengalaman malam paling ikonik di Istanbul. Tur kami dimulai dari Dermaga Kabataş pukul 20:00, meluncur di bawah Jembatan Bosphorus dan Jembatan Fatih Sultan Mehmet yang bermandikan cahaya, menyajikan jamuan hidangan Turki berlimpah, pertunjukan tarian rakyat langsung, tari oriental, dan set DJ yang menghidupkan dek hingga pukul 23:00.',
      'Berbeda dari kapal wisata biasa yang memenuhi pemandangan malam Istanbul, **pelayaran makan malam Bosphorus kami** berlisensi TÜRSAB (A-17672) dan mendapat peringkat 4,8★ dari lebih dari 11.317 wisatawan di Google dan TripAdvisor. Kami menjaga grup tetap kecil dan layanan tetap hangat — dan karena Anda membayar di kapal, tidak ada risiko sama sekali untuk memesan terlebih dahulu.',
      'Entah Anda merayakan hari jadi, mencari malam Istanbul premium bersama keluarga, atau menginginkan transisi matahari terbenam ke malam paling fotogenik di kota ini — inilah pelayaran makan malam yang direkomendasikan lebih dulu oleh penduduk Istanbul.'
    ],
    highlights: [
      { title: 'Jamuan Turki berlimpah', desc: '10 jenis meze, hidangan pembuka hangat (paçanga böreği), pilihan menu utama (salmon / sea bass / ayam / köfte / vegetarian), kue es krim penutup, minuman ringan tanpa batas. Semuanya halal.' },
      { title: 'Tarian rakyat langsung, tari oriental & DJ', desc: 'Pertunjukan sema Mevlana, 5 tarian rakyat tradisional Turki, tari oriental klasik, musisi Turki langsung, dilanjutkan set DJ sepanjang pelayaran.' },
      { title: 'Rute malam Bosphorus lengkap', desc: 'Kabataş → Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Bebek → Rumeli Hisarı → Jembatan FSM → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Kabataş.' },
      { title: 'Mulai €{p.dinnerStd}/orang — bayar di kapal', desc: 'Pelayaran makan malam Standar €{p.dinnerStd} (sebelumnya €{p.dinnerStdOriginal}). Pelayaran VIP dengan kursi depan panggung dan menu premium €{p.dinnerVip}. Tanpa pembayaran di muka. Pembatalan gratis hingga 2 jam sebelum keberangkatan.' }
    ],
    faq: [
      { q: 'Kapan pelayaran makan malam Bosphorus dimulai?', a: 'Naik kapal dimulai pukul 20:00 di Dermaga Kabataş. Kapal berangkat pukul 21:00 dan kembali sekitar pukul 00:00. Kami sarankan datang 15-20 menit lebih awal untuk duduk dan bersantai.' },
      { q: 'Berapa harga pelayaran makan malam Bosphorus?', a: 'Pelayaran Standar €{p.dinnerStd}/orang (harga normal €{p.dinnerStdOriginal}). Pelayaran VIP dengan kursi depan panggung dan menu premium €{p.dinnerVip}/orang. Usia 0-3 tahun gratis, usia 4-8 tahun diskon 50%. Pembayaran dilakukan di kapal — tanpa pembayaran di muka.' },
      { q: 'Apakah alkohol termasuk dalam pelayaran makan malam?', a: 'Minuman ringan tanpa batas (air, cola, jus buah) termasuk dalam harga. Paket alkohol bersifat opsional: 2 gelas +€{p.alcohol2}/orang atau alkohol lokal tanpa batas (anggur, bir, rakı, vodka, gin) +€{p.unlimited}/orang. Minuman impor dikenakan harga terpisah di kapal.' },
      { q: 'Apakah tersedia antar-jemput hotel?', a: 'Ya — layanan antar-jemput +€{p.transfer}/orang. Area layanan: Beşiktaş, Taksim, Sultanahmet, Sirkeci, Eminönü, Ortaköy, Beyoğlu, Fatih, Laleli, Topkapı, Kağıthane, dan Sütlüce. Anda dapat memilihnya di wizard pemesanan.' },
      { q: 'Apakah pelayaran makan malam Bosphorus halal?', a: 'Tentu saja. Semua produk daging di kapal **bersertifikat halal**. Alkohol adalah tambahan opsional (tidak pernah dipaksakan kepada tamu) dan pengaturan tempat duduk secara alami memisahkan bagi mereka yang memilih meja bebas alkohol. Kami juga menyediakan alternatif vegetarian tanpa biaya tambahan.' },
      { q: 'Apa yang sebaiknya saya kenakan?', a: 'Smart casual. Malam hari di Istanbul bisa berangin meski di musim panas — kami sarankan membawa jaket tipis atau syal. Tidak ada aturan berpakaian ketat, tetapi baju renang, sandal jepit, atau pakaian olahraga tidak sesuai untuk suasana makan malam.' }
    ],
    cta: {
      primary: 'Pesan Sekarang · Bayar di Kapal',
      secondary: 'Pembatalan gratis hingga 2 jam sebelum keberangkatan',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'bosphorus-with-kids': {
    meta: {
      title: 'Bosphorus dengan Anak — Pelayaran Keluarga dari €{p.dinnerStd}/dewasa',
      description: 'Pelayaran makan malam Bosphorus ramah keluarga. Anak 0-3 gratis, 4-8 setengah harga. Ruang dalam aman, menu anak. Pembatalan gratis, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Bersama Anak',
      subtitle: 'Malam Bosphorus yang ramah keluarga, dirancang untuk keluarga dengan anak — makan malam, hiburan, dan suasana yang aman dan nyaman.',
      badge: 'Ramah Keluarga · Halal · Usia 0-3 Gratis'
    },
    intro: [
      '**Pelayaran Bosphorus bersama anak** adalah pilihan malam paling ramah keluarga di Istanbul. Setiap malam kami menyambut puluhan keluarga — kami merancang setiap detail agar anak-anak merasa nyaman: tempat duduk di dalam ruangan agar si kecil tetap hangat, menu ramah anak yang mudah diterima (ayam panggung sederhana, pasta, minuman ringan tanpa batas), dan naik kapal lebih awal untuk menghindari anak rewel saat larut malam.',
      'Berbeda dari kapal yang hanya untuk orang dewasa, **pelayaran makan malam Bosphorus kami untuk keluarga** tetap hangat dan inklusif. **Anak usia 0-3 tahun gratis** (termasuk antar-jemput), usia 4-8 tahun **diskon 50%**, usia 9+ harga penuh — tanpa biaya tersembunyi. Tarian rakyat langsung, tari oriental, dan pertunjukan sema adalah hiburan keluarga yang sopan, bukan kelab malam. Semua daging **bersertifikat halal**.',
      'Entah Anda datang ke Istanbul untuk akhir pekan panjang bersama balita, atau membawa remaja dalam perjalanan pertama mereka ke Eropa — inilah tur yang direkomendasikan keluarga Istanbul. Aman, bersertifikat halal, berlisensi TÜRSAB, dan mendapat peringkat 4,8★ dari 11.317+ wisatawan.'
    ],
    highlights: [
      { title: 'Usia 0-3 tahun sepenuhnya gratis', desc: 'Tanpa biaya untuk bayi dan balita. Usia 4-8 tahun 50% dari harga dewasa. Mulai usia 9 tahun sebagai tamu penuh. Transparan, tanpa kejutan.' },
      { title: 'Area duduk dalam ruangan', desc: 'Tertutup penuh dan berpemanas di bulan-bulan dingin. Anak-anak tetap hangat, terlindung dari angin. Dek terbuka juga tersedia saat cuaca bagus — pilihan ada di Anda.' },
      { title: 'Menu anak sesuai permintaan', desc: 'Ayam panggang sederhana, pasta, roti, dan sayuran — tanpa biaya tambahan. Minuman ringan tanpa batas (cola, jus, air). Semua halal. Beritahukan sebelumnya — tidak ada kejutan meze pedas untuk si kecil.' },
      { title: 'Hiburan aman untuk keluarga', desc: 'Pertunjukan sema (memukau bagi anak-anak), 5 tarian rakyat tradisional, musik Turki langsung, dan set DJ. Semua ramah keluarga — tanpa konten dewasa. Anak-anak sering ikut menari.' }
    ],
    faq: [
      { q: 'Apakah pelayaran Bosphorus aman untuk anak kecil?', a: 'Ya — kapal kami berlisensi TÜRSAB, memiliki area duduk dalam ruangan dengan jendela pengaman, pelampung tersedia dalam semua ukuran, dan kru profesional berpengalaman dengan keluarga. Kami sarankan dek dalam untuk balita, dek terbuka untuk usia 6+.' },
      { q: 'Berapa harga anak untuk pelayaran Bosphorus?', a: 'Anak **usia 0-3 tahun: GRATIS** (tanpa biaya, tanpa biaya tersembunyi). **Usia 4-8 tahun: diskon 50%** dari harga dewasa — yaitu pada tur Standar €{p.dinnerStd}/2 = €12 per anak. **Usia 9+ tahun: harga dewasa penuh.** Antar-jemput hotel gratis untuk usia 0-3, standar untuk usia 4+ (€{p.transfer}/orang).' },
      { q: 'Apakah ada menu anak di kapal?', a: 'Ya — ayam panggang sederhana, pasta, roti, sayuran musiman, dan minuman ringan tanpa batas. Semua halal. Beritahukan alergi atau pemakan pilih-pilih saat pemesanan, kami akan menyiapkan sesuatu yang akan dimakan anak Anda dengan senang hati.' },
      { q: 'Apakah musik atau pertunjukan terlalu keras untuk anak?', a: 'Pertunjukan langsung diadakan di satu area panggung yang ditentukan — jika anak Anda sensitif terhadap suara, kami akan mendudukkan Anda di meja belakang yang lebih tenang. Pertunjukan total 40 menit, sisa malam berupa musik Turki latar dan DJ dengan volume sedang.' },
      { q: 'Bagaimana jika bayi saya tertidur selama pelayaran?', a: 'Tidak masalah — banyak yang tertidur. Area duduk dalam memiliki sofa gaya banquette tempat bayi atau balita dapat tidur dengan nyaman. Minta selimut hangat dari kru kami jika perlu. Tanpa biaya tambahan.' },
      { q: 'Apakah saya perlu membawa kereta bayi?', a: 'Anda boleh, tetapi kami sarankan meninggalkan kereta bayi besar di hotel (atau dengan sopir kami jika Anda memesan antar-jemput — kami akan menjaganya). Kapal kami memiliki lorong sempit dan dek berundak. Gendongan ringan lebih mudah di kapal.' }
    ],
    cta: {
      primary: 'Pesan Tur Keluarga · Bayar di Kapal',
      secondary: 'Pembatalan gratis hingga 2 jam sebelum keberangkatan · Tanpa pembayaran di muka',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'romantic-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Romantis Bosphorus dari €{p.dinnerStd} — Makan Malam Lilin Berdua',
      description: 'Pelayaran romantis Bosphorus: meja lilin, mawar, makan malam multi-hidangan di bawah jembatan bercahaya. Dari €{p.dinnerStd}/orang. Pembatalan gratis, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Romantis Bosphorus',
      subtitle: 'Makan malam dengan lilin, meja dihias mawar, jembatan bermandikan cahaya, dan momen khusus hanya untuk Anda berdua di bawah langit malam Istanbul paling ikonik.',
      badge: 'Hari Jadi · Bulan Madu · Malam Istimewa'
    },
    intro: [
      '**Pelayaran romantis Bosphorus** adalah malam paling ikonik di Istanbul untuk pasangan. Saat matahari terbenam di balik Istana Dolmabahçe dan Jembatan Bosphorus menyala dengan warna-warni, Anda dan pasangan berbagi jamuan Turki berlimpah di meja privat — dengan lilin, bunga segar, dan biola langsung yang mengalun di dek.',
      'Pengaturan meja romantis kami (+€{p.romantic}/meja) mengubah tempat apa pun menjadi momen istimewa: mawar merah, lilin berkelip, catatan selamat datang tulisan tangan. Tambahkan paket alkohol tanpa batas untuk anggur di bawah bintang (+€{p.unlimited}/orang) atau tetap sederhana dengan minuman ringan yang sudah termasuk. Apa pun pilihannya, kru akan mengurus sisanya dengan diam-diam.',
      'Entah Anda merayakan hari jadi, merencanakan kejutan untuk pasangan, atau hanya ingin malam tak terlupakan di kota paling romantis di Eropa — inilah tur yang dipilih pasangan Istanbul lebih dulu. Peringkat 4,8★, berlisensi TÜRSAB, dan — yang paling penting — bayar di kapal, jadi Anda hanya berjanji untuk malam itu sendiri.'
    ],
    highlights: [
      { title: 'Meja romantis dengan lilin', desc: 'Tambahkan pengaturan meja romantis dengan +€{p.romantic}/meja: mawar merah segar, lilin berkelip, kelopak mawar di atas taplak meja, dan kartu tulisan tangan. Termasuk foto.' },
      { title: 'Meja terbaik untuk transisi matahari terbenam ke malam', desc: 'Meja dekat jendela diperuntukkan bagi pasangan. Saksikan Jembatan Bosphorus menyala, Menara Gadis berkilauan, dan Masjid Ortaköy bercahaya dari meja privat Anda.' },
      { title: 'Biola langsung dan suasana intim', desc: 'Biola langsung dan musik akustik Turki selama makan malam menciptakan suasana lambat dan romantis. Setelahnya, DJ masuk dan pasangan berdansa di bawah lampu dek terbuka.' },
      { title: 'Anggur, sampanye, pasangan premium', desc: 'Tambahkan 2 gelas alkohol (+€{p.alcohol2}/orang) atau anggur, bir, rakı lokal tanpa batas (+€{p.unlimited}/orang). Sampanye impor dan pasangan premium tersedia sesuai permintaan — tanyakan saat pemesanan.' }
    ],
    faq: [
      { q: 'Apa yang membuat tur ini romantis?', a: 'Kombinasi meja privat, pengaturan lilin (opsional +€{p.romantic}), jamuan Turki berlimpah, biola langsung dan musik akustik, dan jembatan Bosphorus bermandikan cahaya yang melintas di atas. Kami merancang pengalaman ini untuk pasangan — suasana tenang di awal, lalu DJ energik dan berdansa. Iramanya Anda yang tentukan.' },
      { q: 'Bisakah Anda mengatur kejutan untuk pasangan — ulang tahun, hari jadi, lamaran?', a: 'Ya — beritahukan saat pemesanan. Kami dapat berkoordinasi dengan staf kami untuk kue ulang tahun (gratis), pengaturan meja khusus, kartu tulisan tangan dalam bahasa Anda, atau mengantarkan sesuatu ke meja pada saat yang tepat. Untuk lamaran, kami sarankan pesan langsung via WhatsApp agar kami dapat merencanakannya secara diam-diam.' },
      { q: 'Berapa harga pelayaran romantis untuk 2 orang?', a: '2 orang Standar: 2 × €{p.dinnerStd} = €48. Tambah pengaturan romantis +€{p.romantic} = €63. 2 orang VIP: 2 × €{p.dinnerVip} = €110 + romantis €{p.romantic} = €125. Tanpa pembayaran di muka — bayar di kapal. Tambah €60 untuk alkohol tanpa batas 2 × €{p.unlimited}.' },
      { q: 'Apakah pelayaran romantis Bosphorus privat — hanya untuk kami?', a: 'Tidak — ini pelayaran bersama dengan pasangan dan tamu lain (total hingga 60-80 orang). **Meja Anda** privat (hanya untuk grup Anda), tetapi ada tamu lain di kapal. Jika Anda ingin kapal sepenuhnya privat hanya untuk 2 orang, itu adalah **Pelayaran Bosphorus Privat** terpisah (kami dapat mengaturnya sesuai permintaan — hubungi kami).' },
      { q: 'Bisakah kami membawa bunga, kue, atau hadiah sendiri?', a: 'Tentu saja. Bawa apa pun yang Anda inginkan — staf kami dapat membantu meletakkan hadiah kejutan secara diam-diam, menyembunyikan kotak cincin di dalam makanan penutup, atau memajang bunga yang Anda bawa sendiri. Tanpa biaya tambahan seperti biaya corkage. Beritahukan saja agar kami dapat mengoordinasikan waktunya.' },
      { q: 'Apa yang sebaiknya kami kenakan untuk pelayaran romantis Bosphorus?', a: 'Smart casual hingga elegan — banyak pasangan berdandan rapi (gaun, jaket). Tidak ada aturan berpakaian ketat, tetapi suasananya lebih istimewa daripada turisme santai. Bawa jaket tipis atau syal — dek bisa sejuk bahkan di musim panas. Sepatu nyaman jika Anda berencana berdansa setelah makan malam.' }
    ],
    cta: {
      primary: 'Pesan Pelayaran Romantis · Bayar di Kapal',
      secondary: 'Tambahkan pengaturan meja romantis (+€{p.romantic}) di wizard pemesanan · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'halal-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Makan Malam Halal Bosphorus dari €{p.dinnerStd} — Show + Tur Malam',
      description: 'Pelayaran makan malam 3 jam di Bosphorus: pertunjukan folklor langsung, jembatan bercahaya, panorama Bosphorus malam. Menu halal tersedia. Pembatalan gratis.'
    },
    hero: {
      h1: 'Pelayaran Halal Bosphorus di Istanbul',
      subtitle: 'Menu bersertifikat halal 100%, alkohol selalu opsional, hiburan ramah keluarga, dan suasana penuh hormat untuk wisatawan Muslim — malam Bosphorus, dilakukan dengan benar.',
      badge: '100% Halal · Ramah Keluarga · Pemilik Muslim'
    },
    intro: [
      '**Pelayaran halal Bosphorus** adalah pelayaran makan malam paling dihormati di Istanbul untuk wisatawan Muslim. Setiap daging yang disajikan di kapal kami — salmon, sea bass, ayam, köfte domba, daging sapi tenderloin, ribeye — **bersertifikat halal** dari pemasok resmi. Kami menyajikan menu yang sama untuk setiap tamu; tidak ada "bagian halal" terpisah karena seluruh kapal halal secara default.',
      'Alkohol adalah **tambahan opsional** — tidak pernah dipaksakan kepada tamu, dan pengaturan tempat duduk secara alami memisahkan mereka yang memilih meja bebas alkohol. Paket alkohol tanpa batas (+€{p.unlimited}/orang) tersedia bagi tamu yang menginginkannya, tetapi minuman ringan tanpa batas yang sudah termasuk (air, cola, jus) cukup untuk sebagian besar keluarga Muslim. Kru kami dilatih untuk menghormati preferensi Anda tanpa berasumsi.',
      '**Pelayaran Bosphorus ramah halal** penting bagi wisatawan dari Arab Saudi, UEA, Kuwait, Qatar, Iran, Malaysia, **Indonesia**, Pakistan, dan Maroko yang menginginkan malam paling ikonik di Istanbul tanpa kompromi. Berlisensi TÜRSAB, 4,8★, dan bayar di kapal — Anda tidak berjanji apa-apa sampai Anda yakin pengalaman ini memenuhi standar Anda.'
    ],
    highlights: [
      { title: 'Menu bersertifikat halal 100%', desc: 'Semua daging (salmon, sea bass, ayam, köfte, daging sapi, ribeye) bersertifikat halal dari pemasok resmi. Dapur mengikuti persiapan halal. Tanpa produk babi atau aditif non-halal. Pilihan vegetarian selalu tersedia.' },
      { title: 'Alkohol opsional, tidak pernah dipaksakan', desc: 'Paket alkohol adalah tambahan — tidak termasuk secara default. Minuman ringan (air, cola, jus) tanpa batas dan gratis. Meja Anda tetap bebas alkohol kecuali Anda memintanya secara eksplisit. Kru menghormati pilihan Anda dengan diam-diam.' },
      { title: 'Hiburan ramah keluarga', desc: 'Pertunjukan sema, tarian rakyat tradisional Turki, musik Turki langsung. Tanpa pertunjukan gaya kelab malam, tanpa konten yang tidak pantas. Aman untuk anak-anak, penuh hormat untuk keluarga. Tari oriental adalah bentuk seni tradisional, disajikan dengan sopan.' },
      { title: 'Menghormati waktu sholat', desc: 'Jika naik kapal bertepatan dengan waktu Maghrib atau Isya (20:00-21:00), staf kami dapat mengarahkan Anda ke area sholat yang tenang di Dermaga Kabataş sebelum keberangkatan. Beritahukan saja saat pemesanan.' }
    ],
    faq: [
      { q: 'Apakah pelayaran Bosphorus 100% halal?', a: 'Ya — setiap produk daging di menu (ikan, ayam, köfte, daging sapi tenderloin, ribeye, domba) bersertifikat halal dari pemasok resmi. Dapur mengikuti standar persiapan halal. Tidak ada babi yang disajikan di mana pun di kapal. Ini bukan "pilihan halal" — seluruh menunya halal.' },
      { q: 'Apakah tamu lain minum alkohol di pelayaran ini?', a: 'Beberapa tamu menambahkan paket alkohol opsional (+€{p.unlimited}/orang). Meja secara alami terpisah — Anda dapat meminta bagian bebas alkohol. Kru tidak akan membawakan alkohol kecuali dipesan secara khusus oleh tamu. Minuman ringan (tanpa batas) termasuk untuk semua orang.' },
      { q: 'Apakah tur ini cocok untuk keluarga Muslim dengan anak-anak?', a: 'Ya — ini salah satu tur yang paling dihormati keluarga di Istanbul. Hiburan sopan (tarian rakyat, sema, musik Turki), anak usia di bawah 3 tahun gratis, usia 4-8 diskon 50%. Tanpa suasana kelab malam. Keluarga dari kawasan Teluk, Indonesia, Malaysia, Pakistan, dan Maroko rutin memesan tur ini.' },
      { q: 'Bisakah saya sholat di kapal?', a: 'Tidak ada ruang sholat khusus di kapal, tetapi kami sarankan sholat sebelum naik kapal pukul 20:00 (sholat Maghrib biasanya jatuh dalam jendela ini). Ada fasilitas sholat di Dermaga Kabataş. Jika Anda perlu sholat selama pelayaran pukul 21:00-00:00 (Isya), bicarakan dengan kru — kami dapat mengatur sudut tenang di dek.' },
      { q: 'Berapa harga untuk keluarga Muslim 4 orang (2 dewasa, 2 anak)?', a: 'Pelayaran Standar: 2 × €{p.dinnerStd} + 2 × €12 (usia 4-8 setengah harga) = €72. Jika anak di bawah 3 tahun, mereka gratis: 2 × €{p.dinnerStd} = €48. Tambah antar-jemput hotel €10 per dewasa. Total: €48-92 untuk keluarga 4 orang, tanpa pembayaran di muka, bayar di kapal.' },
      { q: 'Apakah antar-jemput hotel juga halal?', a: 'Antar-jemput hotel hanyalah perjalanan mobil — tidak melibatkan makanan atau minuman, jadi tidak ada masalah halal. Sopir kami profesional, penuh hormat, dan tepat waktu. Area antar-jemput mencakup Sultanahmet, Taksim, Beşiktaş, Laleli, Fatih, dan 8 kawasan pusat lainnya tempat wisatawan Muslim biasanya menginap.' }
    ],
    cta: {
      primary: 'Pesan Pelayaran Halal · Bayar di Kapal',
      secondary: 'Pembatalan gratis hingga 2 jam sebelumnya · Tanpa pembayaran di muka · Bersertifikat halal',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'bosphorus-vip': {
    meta: {
      title: 'Pelayaran VIP Bosphorus dari €{p.dinnerVip} — Makan Malam Premium',
      description: 'Pelayaran makan malam VIP Bosphorus: meze premium, pilihan steak, meja depan panggung, layanan prioritas. Sebelumnya €{p.dinnerVipOriginal}, sekarang €{p.dinnerVip}.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus VIP',
      subtitle: 'Kursi depan panggung, menu Turki premium dengan pilihan steak, dan layanan prioritas — malam Bosphorus yang ditingkatkan untuk wisatawan yang menginginkan meja terbaik di kapal.',
      badge: 'Paling Populer · DISKON 40% · Kursi Depan Panggung'
    },
    intro: [
      '**Pelayaran Bosphorus VIP** menempatkan Anda di tempat terbaik di kapal: meja depan panggung dengan pandangan langsung ke pertunjukan sema, tarian rakyat, tari oriental, dan musik langsung. Menu premium menambahkan daging sapi tenderloin dan ribeye ke pilihan menu utama (dibandingkan ayam/salmon di Standar), ditambah 15+ jenis meze Turki tradisional yang disajikan sebagai hamparan berlimpah. Semua daging halal.',
      '**Pelayaran makan malam VIP Bosphorus kami** dinilai Paling Populer oleh tamu kami — karena dengan €{p.dinnerVip}/orang (sebelumnya €{p.dinnerVipOriginal}, diskon 40%), pengalamannya lebih mirip restoran fine dining daripada tur wisata. Meja privat, layanan pelayan penuh perhatian, dan pemandangan megah yang sama dari Dolmabahçe, Masjid Ortaköy, dan Jembatan Bosphorus yang bermandikan cahaya.',
      'Entah Anda adalah pelancong bisnis, merayakan pencapaian, atau sekadar berpikir "kami hanya sekali ke Istanbul — mari lakukan dengan benar", inilah **pelayaran Bosphorus VIP** yang dipesan tamu kembali. Berlisensi TÜRSAB, 4,8★ dari 11.317+ ulasan, bayar di kapal, pembatalan gratis hingga 2 jam sebelum keberangkatan.'
    ],
    highlights: [
      { title: 'Meja privat depan panggung', desc: 'Tempat duduk khusus langsung di depan panggung pertunjukan — pemandangan terbaik sema, tarian rakyat, dan tari oriental. Meja Anda, tidak dibagi. Fotografer menyukai kursi-kursi ini.' },
      { title: '15+ meze + menu utama premium', desc: '15+ jenis meze Turki disajikan sebagai hamparan tradisional. Pilihan menu utama termasuk daging sapi tenderloin dan ribeye (hanya ayam/salmon di Standar). Semua bersertifikat halal. Makanan penutup dan minuman ringan tanpa batas yang sama.' },
      { title: 'Layanan pelayan prioritas', desc: 'Pelayan khusus melayani meja Anda terlebih dahulu — isi ulang, panduan menu, koordinasi tambahan alkohol, permintaan khusus. Anda tidak perlu bersaing untuk perhatian di ruangan ramai.' },
      { title: 'DISKON 40% — sebelumnya €{p.dinnerVipOriginal}, sekarang €{p.dinnerVip}', desc: 'Harga normal €{p.dinnerVipOriginal}/orang. Harga peluncuran saat ini €{p.dinnerVip}/orang — diskon 40%. Bayar di kapal, tanpa pembayaran di muka. Pembatalan gratis hingga 2 jam sebelum keberangkatan.' }
    ],
    faq: [
      { q: 'Apa perbedaan antara pelayaran Bosphorus VIP dan Standar?', a: 'VIP mendapatkan: (1) tempat duduk depan panggung dengan pemandangan terbaik, (2) 15+ meze vs 10 di Standar, (3) daging sapi tenderloin + ribeye ditambahkan ke pilihan menu utama, (4) layanan pelayan prioritas. Pelayaran 3 jam yang sama, hiburan yang sama, rute yang sama. €{p.dinnerVip} vs €{p.dinnerStd}.' },
      { q: 'Apakah harga VIP €{p.dinnerVip} benar-benar diskon 40%?', a: 'Ya — harga normal €{p.dinnerVipOriginal}/orang (periksa di situs pemesanan mana pun). Kami menerapkan €{p.dinnerVip} sebagai harga pemesanan langsung, memotong biaya perantara. Anda mendapatkan VIP dengan harga kurang dari yang dikenakan tempat lain untuk Standar.' },
      { q: 'Apakah alkohol termasuk dalam pelayaran VIP?', a: 'Tidak — alkohol adalah tambahan terpisah (sama seperti Standar). 2 gelas: +€{p.alcohol2}/orang. Alkohol lokal tanpa batas (anggur, bir, rakı, vodka, gin): +€{p.unlimited}/orang. Minuman impor premium dikenakan harga terpisah. Minuman ringan tanpa batas termasuk dan gratis.' },
      { q: 'Bisakah saya upgrade ke VIP setelah naik ke Standar?', a: 'Tergantung ketersediaan — jika ada meja VIP yang tersedia, ya. Anda membayar selisih (€{p.dinnerVip} - €{p.dinnerStd} = €31) di kapal. Namun kami sarankan pesan VIP terlebih dahulu: kursi depan panggung terbaik diberikan kepada reservasi awal.' },
      { q: 'Bagaimana cara memesan pelayaran Bosphorus VIP?', a: 'Gunakan wizard pemesanan di halaman ini — pilih "VIP" di Langkah 1, tetapkan tanggal Anda, masukkan jumlah tamu, lalu detail kontak. Permintaan Anda dikirim melalui WhatsApp / Telegram / WeChat dan kami konfirmasi secara instan. Bayar di kapal, bukan sekarang.' },
      { q: 'Apakah pelayaran VIP cocok untuk makan malam bisnis dengan klien?', a: 'Ya — VIP adalah pilihan paling umum untuk makan malam bisnis di Istanbul. Meja privat, cukup tenang untuk bercakap-cakap, menu yang mengesankan, dan pemandangan. Banyak tamu memesan VIP + alkohol tanpa batas untuk menjamu klien. Bersertifikat halal (baik untuk pelancong bisnis Teluk). Beritahukan saat pemesanan, kami akan menyiapkan meja VIP belakang yang lebih tenang.' }
    ],
    cta: {
      primary: 'Pesan VIP · Bayar di Kapal',
      secondary: 'Sebelumnya €{p.dinnerVipOriginal}, sekarang €{p.dinnerVip} · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Lihat Pilihan Standar (€{p.dinnerStd})'
    }
  },

  'private-bosphorus-cruise': {
    meta: {
      title: 'Pelayaran Pribadi Bosphorus — Sewa Kapal di Istanbul (25+ tamu)',
      description: 'Pelayaran pribadi Bosphorus untuk grup, pernikahan, acara perusahaan. Kapal eksklusif, menu khusus, durasi fleksibel. Pembatalan gratis. WhatsApp untuk penawaran.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Privat',
      subtitle: 'Sewa seluruh kapal untuk grup Anda — perayaan keluarga, makan malam korporat, ulang tahun, pertunangan, pernikahan. Penggunaan eksklusif, menu khusus, waktu fleksibel.',
      badge: 'Sewa Privat · 25+ Tamu · Menu Khusus'
    },
    intro: [
      '**Pelayaran Bosphorus privat** berarti seluruh kapal menjadi milik Anda — tanpa tamu lain, tanpa meja bersama, tanpa lantai dansa bersama. Sempurna untuk reuni keluarga, makan malam korporat, pesta ulang tahun, perpisahan lajang, atau resepsi pernikahan. Kapal, kru, menu, hiburan, dan waktu semua beradaptasi dengan grup Anda. Semua menu halal.',
      '**Sewa pelayaran Bosphorus privat kami** mendukung grup dari **25 hingga 80 tamu**. Grup lebih kecil masih dapat meminta pengalaman privat — kami akan memberikan harga dengan biaya minimum yang menutupi biaya operasi kapal. Grup lebih besar (ukuran pernikahan) mendapatkan harga khusus dan biasanya termasuk dekorasi khusus, band langsung, layanan kue, dan durasi yang diperpanjang (4-5 jam, bukan 3 jam standar).',
      'Entah Anda mengadakan acara korporat untuk klien, pesta ulang tahun ke-50, atau resepsi pernikahan di bawah jembatan paling ikonik Istanbul, inilah **tur privat yang dipercaya perencana acara Istanbul**. Peringkat 4,8★, berlisensi TÜRSAB, kru berbahasa Inggris penuh, dan fleksibel dalam segala hal — rute, menu, musik, waktu.'
    ],
    highlights: [
      { title: 'Seluruh kapal, hanya untuk Anda', desc: 'Tanpa tamu lain. Grup Anda memiliki setiap dek, setiap meja. Tetapkan musik Anda sendiri, aturan berpakaian, jadwal. Privasi penting — kami menghormatinya.' },
      { title: 'Menu khusus dan paket minuman', desc: 'Bekerja dengan chef kami untuk menyesuaikan menu: meze spesifik, pilihan menu utama, hidangan khusus untuk budaya atau kebutuhan diet Anda (termasuk sepenuhnya halal). Paket alkohol, toast sampanye, bar koktail khusus semua dapat diatur.' },
      { title: 'Durasi dan keberangkatan fleksibel', desc: '3 jam standar dapat diperpanjang menjadi 4-5 jam. Pilih keberangkatan siang 12:00, matahari terbenam 17:30, atau malam 21:00. Ingin hari kerja bukan akhir pekan? Tidak masalah — kami akan bekerja dengan jadwal Anda.' },
      { title: 'Dekorasi khusus, band, program', desc: 'Dekorasi khusus (balon, spanduk, rangkaian bunga), band langsung menggantikan DJ, layanan kue pernikahan, koordinasi fotografer, pidato — tambahkan apa pun yang dibutuhkan acara Anda. Kami bukan hanya operator kapal, kami perencana acara.' }
    ],
    faq: [
      { q: 'Berapa harga pelayaran Bosphorus privat?', a: 'Untuk grup 25+, biasanya €{p.dinnerStd}-€{p.dinnerVip}/orang + biaya sewa kapal tergantung ukuran grup, tanggal, dan durasi. Kirim pesan via WhatsApp dengan ukuran grup, tanggal, dan persyaratan — kami akan memberikan harga dalam 1 jam. Sebagian besar acara masuk dalam kisaran €2.000-€6.000 total.' },
      { q: 'Berapa ukuran grup minimum untuk pelayaran Bosphorus privat?', a: 'Secara teknis, 25 tamu membuat pelayaran privat ekonomis. Grup lebih kecil (10-24) masih dapat menyewa privat tetapi membayar biaya minimum yang setara dengan ~25 orang. Untuk grup sangat kecil (2-10), pertimbangkan tur Standar atau VIP reguler — meja Anda sudah privat, hanya kapal yang bersama.' },
      { q: 'Bisakah saya mengadakan pernikahan di pelayaran Bosphorus?', a: 'Ya — kami mengadakan 10-15 resepsi pernikahan per tahun. Kapasitas hingga 80 orang untuk makan malam duduk, hingga 100 untuk gaya koktail. Kami dapat berkoordinasi dengan fotografer, perencana pernikahan, band, atau chef Anda. Layanan kue khusus, lantai dansa pertama, toast sampanye dapat diatur. Kirim pesan WhatsApp untuk harga pernikahan.' },
      { q: 'Bagaimana dengan acara korporat dan makan malam tim?', a: 'Tur privat korporat adalah pemesanan kami yang paling umum. Makan malam perusahaan, hiburan klien, peluncuran produk, perayaan tim — semua berfungsi. Kami dapat menyediakan faktur dengan rincian PPN, mengatur antar-jemput hotel untuk tim Anda, dan berkoordinasi dengan materi bermerek (aksen meja, papan nama) sesuai permintaan.' },
      { q: 'Bisakah saya membawa band atau DJ sendiri, bukan hiburan Anda?', a: 'Ya — Anda dapat membawa band langsung, DJ, fotografer sendiri. Atau pertahankan yang standar kami (sema, penari rakyat, oriental, DJ) dan tambahkan milik Anda sendiri di atasnya. Kapal memiliki sistem PA dan lantai dansa. Beritahukan sebelumnya agar kami dapat mengoordinasikan kontrol suara.' },
      { q: 'Bagaimana cara meminta harga pelayaran Bosphorus privat?', a: 'Termudah: kirim WhatsApp ke +90 532 244 29 22 dengan (1) ukuran grup, (2) tanggal pilihan, (3) alasan (pernikahan, korporat, ulang tahun), (4) persyaratan khusus. Kami merespons dalam 1 jam selama jam kerja, 12 jam di malam hari. Kami juga dapat mengatur panggilan video untuk membahas detail.' }
    ],
    cta: {
      primary: 'WhatsApp untuk Harga Privat',
      secondary: 'Menu khusus, grup 25-80, durasi fleksibel · Respons di bawah 1 jam',
      tertiary: 'Pilihan Tur Standar (€{p.dinnerStd})'
    }
  },

  'bosphorus-for-couples': {
    meta: {
      title: 'Bosphorus untuk Pasangan dari €{p.dinnerStd} — Malam Romantis Istanbul',
      description: 'Pelayaran makan malam Bosphorus untuk pasangan. Meja pribadi, jembatan bercahaya, dekorasi romantis opsional. Dari €{p.dinnerStd}/orang. Pembatalan gratis, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus untuk Pasangan',
      subtitle: 'Malam kencan di Bosphorus — meja privat, musik langsung, jembatan bermandikan cahaya melintas di atas. Entah ini kencan pertama Anda di Istanbul atau hari jadi kesepuluh, malam ini berhasil.',
      badge: 'Meja Privat · Musik Langsung · Bayar di Kapal'
    },
    intro: [
      '**Pelayaran Bosphorus untuk pasangan** adalah malam kencan favorit Istanbul. Tidak setiap pasangan merayakan hari jadi — kadang-kadang Anda berada di kota paling romantis di dunia dan ingin malam yang indah bersama. Tur ini menyediakan: meja privat untuk dua orang, makan malam Turki berlimpah yang lambat, biola langsung dan musik akustik selama makan malam, dan Jembatan Bosphorus bermandikan cahaya yang perlahan melintas.',
      'Suasananya **hangat tapi tidak terlalu romantis** — tanpa musik lamaran paksa, tanpa tepuk tangan terkoordinasi "pengantin baru" yang memalukan. Anda makan, minum, berbicara, menonton lampu Istanbul. Jika Anda ingin menambahkan pengaturan meja romantis (lilin, mawar, +€{p.romantic}), bagus — jika tidak, hanya makan malam saja sudah istimewa.',
      'Entah Anda di Istanbul selama 3 hari bersama pasangan, merayakan pencapaian sederhana, atau merencanakan kunjungan pengintaian untuk lamaran masa depan — **pelayaran Bosphorus untuk pasangan** memberi Anda malam 3 jam untuk bersama di salah satu kota paling banyak difoto di dunia. 4,8★, bayar di kapal, pembatalan gratis.'
    ],
    highlights: [
      { title: 'Meja privat untuk dua orang', desc: 'Meja privat untuk 2 orang, tidak dibagi. Prioritas tempat duduk dekat jendela untuk pasangan. Foto matahari terbenam dan Bosphorus malam tepat di luar jendela Anda.' },
      { title: 'Makan malam berlimpah dengan tempo lambat', desc: '10 jenis meze Turki, hidangan pembuka hangat, menu utama (salmon, sea bass, ayam, köfte, atau vegetarian), kue es krim penutup. Semua halal. Disajikan perlahan selama 3 jam — Anda tidak diburu-buru.' },
      { title: 'Biola langsung dan musik lembut', desc: 'Biola langsung dan musik akustik Turki selama makan malam menciptakan suasana intim yang cocok untuk bercakap-cakap. Kemudian, DJ mengambil alih untuk pasangan yang ingin berdansa.' },
      { title: 'Tambahan untuk malam khusus', desc: 'Pengaturan meja romantis (lilin, mawar): +€{p.romantic}. Alkohol lokal tanpa batas (anggur, rakı): +€{p.unlimited}/orang. Antar-jemput hotel (pulang-pergi): +€{p.transfer}/orang. Pilih yang sesuai dengan malam Anda.' }
    ],
    faq: [
      { q: 'Apakah pelayaran Bosphorus ini cocok untuk malam kencan biasa, bukan acara khusus?', a: 'Ya — sebagian besar pasangan kami tidak merayakan sesuatu yang spesifik, hanya menjalani malam kencan yang indah. Suasananya hangat dan menyenangkan tanpa berlebihan. Anda dapat menambahkan pengaturan meja romantis (+€{p.romantic}) jika ingin sesuatu yang ekstra, atau hanya menikmati malam standar.' },
      { q: 'Berapa harga pelayaran Bosphorus untuk 2 orang?', a: '2 orang Standar: 2 × €{p.dinnerStd} = €48. 2 orang VIP: 2 × €{p.dinnerVip} = €110. Tambah antar-jemput hotel untuk dua orang: +€{p.transfer}×2 = €20. Tambah alkohol tanpa batas untuk dua orang: +€{p.unlimited}×2 = €60. Tanpa pembayaran di muka — bayar di kapal.' },
      { q: 'Bisakah pasangan membawa anggur atau sampanye sendiri?', a: 'Kami tidak mengizinkan alkohol dari luar (alasan lisensi bisnis). Tetapi kami memiliki anggur lokal tanpa batas (+€{p.unlimited}/orang), dan kami dapat mengatur anggur impor premium atau sampanye dengan biaya — tanyakan saat pemesanan. Prosecco, Chianti, dan Cabernet adalah permintaan premium populer.' },
      { q: 'Bagaimana jika kami tidak minum alkohol — apakah kami tidak biasa?', a: 'Tidak sama sekali — banyak pasangan melewatkan alkohol sepenuhnya, baik karena alasan halal atau hanya preferensi. Minuman ringan tanpa batas (air, jus, cola) termasuk. Jika meja Anda bebas alkohol, tidak ada yang akan melihat dua kali. Banyak pasangan Muslim dari Arab Saudi, Iran, dan Indonesia memesan tur ini.' },
      { q: 'Kapan waktu terbaik pelayaran Bosphorus untuk pasangan — matahari terbenam atau malam?', a: 'Malam (keberangkatan 21:00) adalah yang paling ikonik — jembatan bermandikan cahaya, pantulan di atas air, istana yang menyala. Matahari terbenam (keberangkatan 17:30) lebih awal dan memiliki keindahan golden hour tetapi pelayaran makan malam secara khusus pukul 21:00. Jika ingin keduanya, sebagian besar pasangan memesan tur matahari terbenam dan malam pada hari yang berbeda.' },
      { q: 'Apakah ada lantai dansa — bisakah kami berdansa?', a: 'Ya — setelah penyajian makan malam (~22:30), DJ dimulai dan dek terbuka menjadi area dansa. Banyak pasangan berdansa mengikuti lagu lambat di bawah lampu dengan Jembatan Bosphorus di latar belakang. Beberapa foto terbaik yang akan Anda ambil di Istanbul.' }
    ],
    cta: {
      primary: 'Pesan Malam Kencan · Bayar di Kapal',
      secondary: 'Tambahkan pengaturan romantis (+€{p.romantic}) · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Lihat Pelayaran Romantis Bosphorus'
    }
  },

  'bosphorus-sunset-cruise': {
    meta: {
      title: 'Pelayaran Senja Bosphorus dari €35 — Jam Emas + Makan Malam',
      description: 'Pelayaran senja Bosphorus dari Kabataş, berangkat 17:30. Istana dalam cahaya emas, makan malam berlanjut ke malam bercahaya. 3 jam. Pembatalan gratis, bayar di kapal.'
    },
    hero: {
      h1: 'Pelayaran Matahari Terbenam Bosphorus',
      subtitle: 'Jam ajaib di Bosphorus — saksikan matahari terbenam di balik siluet menara, saat Anda melewati Dolmabahçe, Masjid Ortaköy, dan Jembatan Bosphorus yang menyala untuk malam.',
      badge: 'Golden Hour · Keberangkatan 17:30 · Foto Terbaik'
    },
    intro: [
      '**Pelayaran matahari terbenam Bosphorus** menangkap Istanbul pada saat paling fotogeniknya. Naik kapal pukul 17:30 dan dalam 20 menit matahari mulai jatuh di balik menara-menara sisi Eropa — menyepuh Istana Dolmabahçe dengan warna emas, mengubah air Bosphorus menjadi warna tembaga, dan memberi siluet Masjid Ortaköy terhadap langit yang berkilau. Setiap foto smartphone dari tur ini terlihat seperti pemotretan profesional.',
      '**Pelayaran matahari terbenam Bosphorus kami** termasuk jamuan Turki lengkap (semua halal) yang dimulai selama golden hour dan berlanjut saat jembatan menyala untuk malam. Saat makanan penutup tiba, Anda berlayar di bawah Jembatan Bosphorus yang bermandikan cahaya — 30 juta lampu memantul di atas air gelap. Transisi siang ke malam, dikemas dalam 3 jam, itulah intinya.',
      'Entah Anda seorang fotografer yang mengejar golden hour, wisatawan yang menginginkan yang terbaik dari siang dan malam, atau pasangan yang mencari "foto momen Istanbul" — inilah **pelayaran makan malam matahari terbenam Bosphorus** yang direkomendasikan kepada pengunjung. Peringkat 4,8★, berlisensi TÜRSAB, bayar di kapal, tanpa pembayaran di muka.'
    ],
    highlights: [
      { title: 'Puncak golden hour — keberangkatan 17:30', desc: 'Naik kapal pukul 17:30, matahari terbenam terjadi ~18:30 di musim panas / 17:00 di musim dingin. 40 menit pertama tur adalah golden hour yang Anda kejar. Kamera siap — ini pemotretannya.' },
      { title: 'Transisi siang-ke-malam termasuk', desc: 'Tidak hanya matahari terbenam — kami berlayar ke senja, lalu Bosphorus yang bermandikan cahaya. Anda melihat 3 fase cahaya berbeda dalam satu tur: emas, blue hour, dan malam bermandikan cahaya penuh.' },
      { title: 'Makan malam lengkap selama pelayaran', desc: '10 jenis meze Turki, hidangan pembuka hangat, menu utama (salmon, sea bass, ayam, köfte, vegetarian), kue es krim penutup. Semua halal. Menu berkualitas sama dengan tur malam, disajikan selama matahari terbenam.' },
      { title: 'Dolmabahçe, Ortaköy, Jembatan Bosphorus — semua bersinar', desc: 'Rute melewati Istana Dolmabahçe (emas saat matahari terbenam), Masjid Ortaköy (kubah bersiluet), Jembatan Bosphorus (menyala), Rumeli Hisarı, Istana Beylerbeyi. Setiap landmark dalam cahaya terbaiknya.' }
    ],
    faq: [
      { q: 'Kapan pelayaran matahari terbenam Bosphorus berangkat?', a: 'Naik kapal dimulai pukul 17:00, kapal berangkat pukul 17:30, kembali sekitar pukul 20:30. Kami mengatur agar matahari terbenam persis saat Anda di atas air — sedikit bervariasi menurut musim (18:30 di musim panas, 17:00 di musim dingin). Kami menyesuaikan keberangkatan 15-30 menit secara musiman.' },
      { q: 'Apakah pelayaran matahari terbenam Bosphorus sama dengan pelayaran makan malam?', a: 'Mirip tetapi waktu berbeda. Pelayaran matahari terbenam berangkat pukul 17:30 dengan makan malam disajikan selama tur (golden hour + awal malam). Pelayaran makan malam pukul 21:00 — setelah gelap, pemandangan malam murni. Kapal sama, menu sama, hiburan sama — hanya pencahayaan berbeda. Beberapa tamu mengikuti keduanya di hari berbeda.' },
      { q: 'Berapa harga pelayaran matahari terbenam Bosphorus?', a: 'Pelayaran matahari terbenam Standar mulai €35/orang (3 jam, makan malam lengkap, hiburan langsung). Pilihan VIP dengan tempat duduk depan panggung dan meze premium €55/orang. Bayar di kapal — tanpa pembayaran di muka. Usia 0-3 gratis, usia 4-8 setengah harga.' },
      { q: 'Apakah pelayaran matahari terbenam lebih baik daripada pelayaran makan malam (malam)?', a: '"Lebih baik" tergantung apa yang Anda inginkan. Matahari terbenam = foto terbaik, cahaya emas, tempo lebih lambat, malam lebih awal. Malam = lampu paling ikonik (jembatan bermandikan cahaya), hiburan terbaik, makan malam lebih larut. Fotografer memilih matahari terbenam. Pasangan malam kencan memilih malam. Keluarga dengan anak-anak biasanya memilih matahari terbenam (berakhir lebih awal).' },
      { q: 'Apa yang harus saya bawa ke pelayaran matahari terbenam?', a: 'Smartphone atau kamera untuk foto (golden hour mengundang). Jaket tipis — angin meningkat saat matahari terbenam dan dek bisa cepat dingin di awal malam. Kacamata hitam untuk 30 menit pertama. Pakaian smart casual — Anda sedang makan malam, tetapi tidak ada aturan berpakaian ketat.' },
      { q: 'Bisakah saya tetap dalam tur untuk melihat jembatan bermandikan cahaya di malam hari?', a: 'Pelayaran matahari terbenam adalah 3 jam (17:30-20:30), jadi di akhir Anda melihat Jembatan Bosphorus bermandikan cahaya penuh dan Menara Gadis menyala. Jika Anda menginginkan pemandangan malam PUNCAK (21:00-00:00, semua restoran dan monumen bermandikan cahaya penuh), pesan pelayaran makan malam 21:00. Yang terbaik dari keduanya: pesan keduanya pada malam berbeda.' }
    ],
    cta: {
      primary: 'Pesan Pelayaran Matahari Terbenam · Bayar di Kapal',
      secondary: 'Keberangkatan 17:30 · Matahari terbenam + makan malam termasuk · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Lihat Pelayaran Makan Malam (21:00)'
    }
  },

  'bosphorus-night-tour': {
    meta: {
      title: 'Tur Malam Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam + Show Live',
      description: 'Tur malam 3 jam Bosphorus dengan makan malam dan show langsung. Berangkat 21:00 dari Kabataş, jembatan bercahaya. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    hero: {
      h1: 'Tur Malam Bosphorus',
      subtitle: 'Jembatan bermandikan cahaya Istanbul, istana yang menyala, dan air Bosphorus seperti cermin memantulkan 30 juta lampu — tur malam yang mendefinisikan malam Istanbul.',
      badge: 'Jembatan Bermandikan Cahaya · Pertunjukan Langsung · Makan Malam Termasuk'
    },
    intro: [
      '**Tur malam Bosphorus** adalah aktivitas malam yang paling direkomendasikan di Istanbul. Inilah alasannya: setelah gelap, Bosphorus berubah. Jembatan Bosphorus bergantian antara biru, ungu, dan emas. Istana Dolmabahçe bersinar kuning hangat. Masjid Ortaköy terpantul sempurna di atas air hitam. Setiap landmark Istanbul mencapai puncak drama di malam hari.',
      '**Tur malam makan malam Bosphorus kami** mengemas malam ikonik lengkap: 3 jam di atas air (21:00-00:00), jamuan Turki berlimpah (semua halal), tarian rakyat langsung (sema, 5 tarian rakyat, tari oriental), musik langsung, dan set DJ yang menghidupkan dek hingga akhir malam. Setiap tamu mendapatkan program yang sama — tidak ada opsi "dasar" yang melewatkan bagian terbaik.',
      'Entah ini kunjungan Istanbul pertama Anda dan Anda mencari "satu hal yang harus dilakukan di malam hari", atau Anda pernah ke sini dan ingin 3 jam paling fotogenik di kota ini, inilah **tur malam Bosphorus** yang dinilai 4,8★ dari 11.317+ wisatawan. Berlisensi TÜRSAB, bayar di kapal, tanpa pembayaran di muka.'
    ],
    highlights: [
      { title: 'Bosphorus bermandikan cahaya dalam puncak drama', desc: 'Jembatan Bosphorus berubah warna (biru, ungu, emas), istana bersinar kuning, Masjid Ortaköy terpantul di air hitam. Pencahayaan puncak untuk semua landmark Istanbul pukul 21:00-00:00.' },
      { title: 'Pertunjukan Turki tradisional di kapal', desc: 'Pertunjukan sema, 5 tarian rakyat tradisional (dari wilayah Turki berbeda), tari oriental, musik Turki langsung, lalu set DJ. Pertunjukan 40 menit, lalu musik + makan malam berlanjut.' },
      { title: 'Makan malam berlimpah lengkap', desc: '10 jenis meze Turki, hidangan pembuka hangat (paçanga böreği), menu utama (salmon, sea bass, ayam, köfte, vegetarian — pilihan Anda), makanan penutup (kue es krim), minuman ringan tanpa batas. Bersertifikat halal.' },
      { title: 'Rute Bosphorus lengkap', desc: 'Kabataş → Dolmabahçe → Istana Çırağan → Masjid Ortaköy → Bebek → Rumeli Hisarı → Jembatan Fatih Sultan Mehmet → Anadolu Hisarı → Beylerbeyi → Kuzguncuk → Üsküdar → Menara Gadis → Kabataş.' }
    ],
    faq: [
      { q: 'Kapan tur malam Bosphorus?', a: 'Naik kapal dari pukul 20:00 di Dermaga Kabataş. Kapal berangkat pukul 21:00, kembali sekitar pukul 00:00 (tengah malam). Kami sarankan datang 20 menit lebih awal untuk menetap dan memilih tempat duduk.' },
      { q: 'Berapa harga tur malam Bosphorus?', a: 'Tur malam Standar (3 jam, makan malam, pertunjukan): €{p.dinnerStd}/orang (sebelumnya €{p.dinnerStdOriginal}). VIP dengan kursi depan panggung dan menu premium: €{p.dinnerVip}/orang (sebelumnya €{p.dinnerVipOriginal}). Usia 0-3 gratis, usia 4-8 setengah harga. Bayar di kapal.' },
      { q: 'Apa perbedaan antara tur malam Bosphorus dan pelayaran makan malam?', a: 'Hal yang sama, kata kunci berbeda. "Tur malam Bosphorus" adalah cara banyak wisatawan mencarinya; "pelayaran makan malam" adalah istilah industri. Kapal sama, jadwal 3 jam sama, menu sama, pertunjukan sama. Pilih istilah pencarian apa pun yang Anda sukai — pengalamannya sama.' },
      { q: 'Apakah tur malam Bosphorus sepadan dibanding tur matahari terbenam?', a: 'Tur malam = Istanbul bermandikan cahaya, drama cahaya puncak, program hiburan lengkap, foto paling ikonik dari jembatan yang menyala. Matahari terbenam = golden hour, tempo lebih lambat, berakhir pukul 20:30. Jika hanya melakukan satu: tur malam lebih ikonik. Banyak yang melakukan keduanya pada hari berbeda.' },
      { q: 'Bisakah saya mengikuti tur malam Bosphorus di hari pertama saya di Istanbul?', a: 'Ya — kami merekomendasikannya. Banyak wisatawan memesan tur malam untuk malam pertama mereka karena memberikan orientasi lengkap: semua landmark besar dari air, makan malam dan hiburan yang baik. Lebih mudah daripada mencoba berjalan-jalan di hari 1 dengan jet lag. Antar-jemput hotel tersedia dari kawasan pusat.' },
      { q: 'Saya tidak bisa berbahasa Turki — apakah turnya dalam bahasa Inggris?', a: 'Kru berbicara bahasa Inggris. Hiburan (sema, tarian rakyat, musik) tidak memerlukan bahasa. Menu makan malam dalam bahasa Inggris. Pemesanan via WhatsApp / Telegram / WeChat tersedia dalam banyak bahasa (Inggris, Indonesia, Arab, Rusia, Jerman, Prancis, Spanyol). Tidak perlu bahasa Turki.' }
    ],
    cta: {
      primary: 'Pesan Tur Malam · Bayar di Kapal',
      secondary: 'Keberangkatan 21:00 · 3 jam · Makan malam + pertunjukan termasuk · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'dinner-cruise-istanbul': {
    meta: {
      title: 'Pelayaran Makan Malam Istanbul dari €{p.dinnerStd} — Tur Malam Bosphorus',
      description: 'Pelayaran makan malam 3 jam di Istanbul Bosphorus. Menu Turki multi-hidangan, folklor langsung, jembatan bercahaya. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    hero: {
      h1: 'Pelayaran Makan Malam Istanbul',
      subtitle: 'Pelayaran makan malam terbaik di Istanbul — 3 jam di Bosphorus, jamuan Turki berlimpah, hiburan langsung, dan pemandangan malam landmark paling ikonik di kota ini.',
      badge: '4,8★ · 11.317 ulasan · TÜRSAB A-17672'
    },
    intro: [
      'Mencari **pelayaran makan malam di Istanbul**? Anda telah menemukan yang paling direkomendasikan wisatawan. Malam 3 jam kami di Bosphorus memadukan jamuan Turki berlimpah, tarian rakyat langsung, dan pemandangan paling fotogenik di kota — semua dari kapal nyaman yang berangkat dari Dermaga Kabataş pukul 21:00.',
      'Pengalaman **pelayaran makan malam Istanbul**: naik kapal pukul 20:00, tetap duduk, saksikan Istana Dolmabahçe melintas saat Anda berangkat, makan malam dimulai saat mendekati Masjid Ortaköy, pertunjukan dimulai (sema, tarian rakyat, oriental), dan pada saat makanan penutup Anda berada di bawah Jembatan Bosphorus yang bermandikan cahaya. Anda kembali ke Kabataş pada tengah malam dengan kolase foto ikonik dan perut kenyang.',
      '€{p.dinnerStd}/orang untuk tur Standar (sebelumnya €{p.dinnerStdOriginal}) atau €{p.dinnerVip}/orang untuk VIP dengan kursi depan panggung (sebelumnya €{p.dinnerVipOriginal}). Bayar di kapal — tanpa pembayaran di muka, tanpa risiko. Berlisensi TÜRSAB A-17672, dinilai 4,8★ oleh 11.317+ wisatawan. Semua daging halal.'
    ],
    highlights: [
      { title: 'Makan malam Turki berlimpah lengkap', desc: '10 jenis meze, hidangan pembuka hangat, menu utama (salmon/sea bass/ayam/köfte/vegetarian), kue es krim penutup. Bersertifikat halal. Minuman ringan tanpa batas termasuk.' },
      { title: 'Pertunjukan tarian rakyat Turki langsung', desc: 'Pertunjukan sema, 5 tarian rakyat tradisional, tari oriental, musik Turki langsung, DJ. Pertunjukan 40 menit, musik latar berlanjut.' },
      { title: 'Rute malam Bosphorus lengkap', desc: 'Tur 3 jam: Dolmabahçe, Çırağan, Masjid Ortaköy, Jembatan Bosphorus, Bebek, Rumeli Hisarı, Jembatan FSM, Beylerbeyi, Üsküdar, Menara Gadis. Kedua sisi Eropa dan Asia.' },
      { title: 'Mulai €{p.dinnerStd} — bayar di kapal', desc: 'Standar: €{p.dinnerStd} (sebelumnya €{p.dinnerStdOriginal}). VIP dengan menu premium: €{p.dinnerVip} (sebelumnya €{p.dinnerVipOriginal}). Tanpa pembayaran di muka. Pembatalan gratis hingga 2 jam sebelum keberangkatan.' }
    ],
    faq: [
      { q: 'Berapa harga pelayaran makan malam di Istanbul?', a: 'Pelayaran makan malam Standar kami €{p.dinnerStd}/orang (harga normal €{p.dinnerStdOriginal}). VIP dengan kursi depan panggung dan menu premium €{p.dinnerVip}/orang (harga normal €{p.dinnerVipOriginal}). Usia 0-3 gratis, usia 4-8 diskon 50%. Bayar di kapal — tanpa pembayaran di muka.' },
      { q: 'Apa saja yang termasuk dalam harga pelayaran makan malam Istanbul?', a: 'Tur 3 jam di Bosphorus, makan malam Turki berlimpah (meze, hidangan pembuka hangat, menu utama, makanan penutup — semua halal), minuman ringan tanpa batas, pertunjukan tarian rakyat langsung (sema, tarian rakyat, oriental), musik langsung + DJ, akses dek terbuka, pajak termasuk. Antar-jemput hotel dan alkohol adalah tambahan opsional.' },
      { q: 'Dari mana pelayaran makan malam Istanbul berangkat?', a: 'Dermaga Kabataş, Istanbul — sisi Eropa, di sebelah Istana Dolmabahçe. Titik pertemuan lengkap dibagikan via WhatsApp / Telegram / WeChat setelah pemesanan. Video berjalan dari halte trem Dolmabahçe dan stasiun trem Kabataş ada di bagian titik pertemuan di atas.' },
      { q: 'Berapa lama pelayaran makan malam — dan kapan dimulai?', a: 'Total 3 jam. Naik kapal dari pukul 20:00, kapal berangkat penuh pukul 21:00, kembali sekitar pukul 00:00 (tengah malam). Kami sarankan datang 15-20 menit lebih awal untuk menetap dan memilih tempat duduk.' },
      { q: 'Apakah saya perlu pesan di muka, atau bisa datang langsung?', a: 'Pesan di muka — tempat duduk terisi, terutama akhir pekan dan hari libur. Pemesanan hari yang sama sering dimungkinkan tetapi tidak dijamin. Wizard di halaman ini mengamankan tempat Anda dalam kurang dari 1 menit. Bayar di kapal, jadi tidak ada risiko finansial untuk memesan lebih awal.' },
      { q: 'Apakah pelayaran makan malam Istanbul cocok untuk vegetarian / halal / batasan diet?', a: 'Ya — semua daging bersertifikat halal. Menu utama vegetarian (falafel, kentang panggang, pilaf bulgur, rebusan sayur, bawang goreng) tersedia tanpa biaya tambahan. Alergi dapat diakomodasi jika diberitahukan saat pemesanan. Alkohol adalah tambahan opsional, tidak pernah dipaksakan.' }
    ],
    cta: {
      primary: 'Pesan Pelayaran Makan Malam · Bayar di Kapal',
      secondary: '4,8★ · Berlisensi TÜRSAB · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'istanbul-night-tour': {
    meta: {
      title: 'Tur Malam Istanbul dari €{p.dinnerStd} — Pelayaran Makan Malam Bosphorus + Show',
      description: 'Pelayaran 3 jam Bosphorus dengan makan malam dan show langsung. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal. 11.317 ulasan. Antar-jemput hotel opsional.'
    },
    hero: {
      h1: 'Tur Malam Istanbul',
      subtitle: 'Tur malam yang pertama kali direkomendasikan penduduk Istanbul — pelayaran Bosphorus 3 jam dengan makan malam, hiburan langsung, dan pemandangan bermandikan cahaya paling ikonik di kota ini.',
      badge: 'Malam Istanbul Ikonik · 3 Jam · Makan Malam Termasuk'
    },
    intro: [
      '**Tur malam Istanbul** harus melakukan tiga hal: memberi Anda pemandangan ikonik kota, memberi Anda makan dengan baik, dan menghibur Anda. Pelayaran makan malam Bosphorus kami melakukan ketiganya dalam satu malam 3 jam — dan itulah mengapa sebagian besar panduan Istanbul merekomendasikannya sebagai pengalaman tur malam #1.',
      'Rute **tur malam Istanbul** mencakup landmark bermandikan cahaya terbaik: Istana Dolmabahçe, Masjid Ortaköy, Jembatan Bosphorus (berubah warna), lingkungan Bebek, Rumeli Hisarı, Jembatan FSM, Istana Beylerbeyi, pantai Asia Üsküdar, dan Menara Gadis yang jauh. Sebagian besar tur kota menunjukkan ini dari bus — kami menunjukkannya dari air, dari tempat paling dramatis.',
      'Makan malam termasuk (menu Turki berlimpah, semua halal), pertunjukan tarian rakyat Turki langsung, sema, tari oriental, dan set DJ. Jika Anda di Istanbul selama 2-3 hari, inilah satu malam yang memberikan pukulan terbesar. 4,8★ dari 11.317+ wisatawan, bayar di kapal, tanpa pembayaran di muka.'
    ],
    highlights: [
      { title: 'Semua pemandangan malam Istanbul ikonik', desc: 'Istana Dolmabahçe, Masjid Ortaköy, Jembatan Bosphorus bermandikan cahaya, Rumeli Hisarı, Jembatan FSM, Istana Beylerbeyi, Menara Gadis. Setiap landmark besar dalam pencahayaan malam puncak.' },
      { title: 'Makan malam Turki lengkap termasuk', desc: '10 meze, hidangan pembuka hangat, menu utama (salmon/sea bass/ayam/köfte/vegetarian), makanan penutup, minuman ringan tanpa batas. Bersertifikat halal. Dihargai pada €{p.dinnerStd}/orang — semua termasuk.' },
      { title: 'Tarian rakyat langsung + sema + oriental', desc: 'Hiburan Turki tradisional: pertunjukan sema Mevlana, 5 tarian rakyat daerah, tari oriental, musik langsung, DJ. Pertunjukan 40 menit, musik latar sepanjang malam.' },
      { title: 'Mudah untuk pendatang baru pertama di Istanbul', desc: 'Titik pertemuan pusat (Dermaga Kabataş), antar-jemput hotel (+€{p.transfer}/orang), kru berbahasa Inggris, bayar di kapal. Tanpa stres logistik. Datang, nikmati, pergi.' }
    ],
    faq: [
      { q: 'Apa tur malam terbaik di Istanbul?', a: 'Pelayaran makan malam Bosphorus secara konsisten menempati peringkat #1. Alasannya: (1) memberi Anda semua pemandangan malam ikonik dari air, (2) memadukan makan malam dan pertunjukan dalam satu paket, (3) 3 jam cukup untuk melihat banyak tanpa kelelahan, (4) titik pertemuan pusat, (5) bayar di kapal mengurangi friksi pemesanan. Sebagian besar panduan perjalanan Istanbul merekomendasikannya sebagai "satu hal malam yang wajib dilakukan".' },
      { q: 'Berapa harga tur malam Istanbul?', a: 'Tur malam pelayaran Bosphorus kami: Standar €{p.dinnerStd}/orang, VIP €{p.dinnerVip}/orang. Termasuk pelayaran, makan malam, hiburan, minuman ringan. Opsional: alkohol +€{p.unlimited}/orang, antar-jemput hotel +€{p.transfer}/orang. Bayar di kapal — tanpa pembayaran di muka.' },
      { q: 'Apakah tur malam Istanbul aman untuk wisatawan solo?', a: 'Ya — sangat aman. Kapal berlisensi TÜRSAB, kru profesional berbahasa Inggris, CCTV di dek, pelampung tersedia. Banyak wisatawan solo memesan tur ini. Anda makan malam di meja bersama atau privat (pilihan Anda) dan malamnya inklusif — Anda bertemu wisatawan lain jika mau, atau menyendiri.' },
      { q: 'Kapan waktu terbaik untuk tur malam di Istanbul?', a: 'Pelayaran makan malam Bosphorus kami 21:00-00:00 (3 jam). Ini adalah waktu pencahayaan puncak untuk semua landmark Istanbul — jembatan bermandikan cahaya penuh, istana bersinar, bulan di atas air. Jika Anda menginginkan lebih awal (golden hour), pertimbangkan pelayaran matahari terbenam 17:30.' },
      { q: 'Bagaimana saya sampai ke titik pertemuan tur malam Istanbul?', a: 'Titik pertemuan adalah Dermaga Kabataş (sisi Eropa pusat, di sebelah Istana Dolmabahçe). Dengan trem: T1 ke stasiun Kabataş (akhir jalur). Dengan taksi: ~15 menit dari Taksim. Berjalan: 20 menit turun İnönü Caddesi dari Taksim. Video petunjuk arah ada di halaman ini. Antar-jemput hotel tersedia dengan +€{p.transfer}/orang jika Anda lebih suka.' },
      { q: 'Bisakah saya memesan tur malam Istanbul hari yang sama?', a: 'Sering kali ya, terutama hari kerja. Akhir pekan terisi lebih cepat. Wizard pemesanan di halaman ini memungkinkan Anda memeriksa ketersediaan untuk malam ini dan memesan dalam kurang dari 1 menit. Untuk permintaan mendesak hari yang sama, kirim WhatsApp ke +90 532 244 29 22.' }
    ],
    cta: {
      primary: 'Pesan Tur Malam · Bayar di Kapal',
      secondary: 'Mulai €{p.dinnerStd}/orang · Makan malam + pertunjukan termasuk · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'istanbul-boat-tour': {
    meta: {
      title: 'Tur Kapal Istanbul dari €{p.dinnerStd} — Bosphorus + Makan Malam + Show',
      description: 'Tur kapal 3 jam: pelayaran Bosphorus, makan malam Turki lengkap, folklor langsung, pemandangan malam bercahaya. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    hero: {
      h1: 'Tur Perahu Istanbul',
      subtitle: 'Tur perahu Istanbul yang paling banyak dipesan wisatawan — pelayaran Bosphorus dengan makan malam Turki, hiburan langsung, dan pemandangan ikonik kota dari air.',
      badge: '4,8★ · TÜRSAB A-17672 · Bayar di Kapal'
    },
    intro: [
      'Saat Anda mencari "tur perahu Istanbul", Anda mencari satu hal yang mendefinisikan kota ini dari air: Bosphorus. Tur perahu Bosphorus 3 jam kami membawa Anda melewati setiap landmark Istanbul besar — Istana Dolmabahçe, Masjid Ortaköy, Jembatan Bosphorus, Rumeli Hisarı, Istana Beylerbeyi, dan Menara Gadis — dengan makan malam Turki lengkap dan hiburan langsung.',
      'Berbeda dari banyak feri sightseeing 1 jam yang mencakup Bosphorus lebih sedikit dan melewatkan makan malam dan hiburan, **tur perahu Istanbul kami** adalah pengalaman malam lengkap: naik kapal pukul 20:00 di Dermaga Kabataş, pelayaran hingga tengah malam, 10 meze, menu utama, makanan penutup, sema, tarian rakyat, tari oriental, dan DJ. Anda mendapatkan tur DAN malam ke luar sekaligus.',
      'Entah Anda memiliki satu malam di Istanbul atau satu minggu penuh, **tur perahu Istanbul** ini menyelesaikan tugas. 4,8★ dari 11.317+ wisatawan, berlisensi TÜRSAB (A-17672), menu bersertifikat halal, dan bayar di kapal — tanpa komitmen finansial sampai Anda puas dengan pengalamannya.'
    ],
    highlights: [
      { title: 'Semua landmark besar Bosphorus', desc: 'Dolmabahçe, Çırağan, Masjid Ortaköy, Jembatan Bosphorus, Bebek, Rumeli Hisarı, Jembatan FSM, Istana Beylerbeyi, Üsküdar, Menara Gadis. Kedua pantai Eropa dan Asia dalam satu tur.' },
      { title: 'Makan malam + pertunjukan termasuk', desc: 'Bukan hanya tur perahu — jamuan Turki berlimpah lengkap (semua halal), pertunjukan tarian rakyat langsung, sema, tari oriental, DJ. Yang membuat 3 jam menghibur, bukan hanya sightseeing.' },
      { title: 'Keberangkatan malam (pencahayaan terbaik)', desc: 'Keberangkatan 21:00 menangkap Bosphorus bermandikan cahaya dalam kemegahan penuh — jembatan, istana, masjid semua menyala. Lebih dramatis daripada tur siang yang menunjukkan landmark yang sama dalam cahaya datar.' },
      { title: 'Pemesanan mudah, pembayaran mudah', desc: 'Pesan dalam kurang dari 1 menit dengan wizard di halaman ini. Bayar di kapal — tanpa pembayaran di muka. Antar-jemput hotel tersedia mulai +€{p.transfer}/orang. Pembatalan gratis hingga 2 jam sebelum keberangkatan.' }
    ],
    faq: [
      { q: 'Apa tur perahu terbaik di Istanbul?', a: 'Pelayaran makan malam Bosphorus secara konsisten menempati peringkat #1. Mencakup semua landmark besar, termasuk makan malam dan hiburan, dan berjalan di malam hari ketika landmark bermandikan cahaya. Pilihan lain (feri hop-on, perahu sightseeing pagi) mencakup rute lebih pendek, melewatkan makan malam, dan tidak termasuk hiburan. Untuk malam Istanbul, inilah tur perahu paling lengkap.' },
      { q: 'Berapa lama tur perahu Istanbul?', a: '3 jam. Naik kapal dari pukul 20:00 di Dermaga Kabataş, keberangkatan 21:00, kembali ~00:00. Mencakup Bosphorus penuh dari Dolmabahçe hingga Rumeli Hisarı dan kembali. Cukup waktu untuk makan malam + pertunjukan lengkap tanpa kelelahan.' },
      { q: 'Berapa harga tur perahu Istanbul?', a: 'Tur perahu makan malam kami: Standar €{p.dinnerStd}/orang (sebelumnya €{p.dinnerStdOriginal}), VIP dengan menu premium €{p.dinnerVip}/orang (sebelumnya €{p.dinnerVipOriginal}). Usia 0-3 gratis, usia 4-8 setengah harga. Bayar di kapal. Alkohol dan antar-jemput hotel adalah tambahan opsional.' },
      { q: 'Dari mana tur perahu Istanbul berangkat?', a: 'Perahu kami berangkat dari Dermaga Kabataş, sisi Eropa pusat Istanbul, di sebelah Istana Dolmabahçe. Dapat dicapai dengan trem T1 (stasiun Kabataş), taksi 15 menit dari Taksim, atau jalan kaki 20 menit dari Taksim. Antar-jemput hotel tersedia dengan +€{p.transfer}/orang dari kawasan pusat.' },
      { q: 'Apakah tur perahu ini cocok untuk keluarga dengan anak-anak?', a: 'Ya — sangat ramah keluarga. Anak usia 0-3 tahun gratis, usia 4-8 diskon 50%. Tempat duduk dalam ruangan, menu anak sesuai permintaan, dan hiburan (sema, tarian rakyat) menarik bagi anak-anak. Menu halal. Banyak keluarga dari seluruh dunia memesan tur ini.' },
      { q: 'Apakah saya perlu membawa sesuatu untuk tur perahu?', a: 'Paspor atau KTP (untuk pendaftaran kapal), jaket tipis (dek bisa sejuk), sepatu nyaman jika Anda berencana berdansa. Smartphone untuk foto. Tunai atau kartu untuk bayar di kapal (keduanya diterima). Semua yang lain — makanan, minuman, hiburan — ada di kapal.' }
    ],
    cta: {
      primary: 'Pesan Tur Perahu · Bayar di Kapal',
      secondary: '3 jam · Makan malam + pertunjukan · Mulai €{p.dinnerStd}/orang · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'bosphorus-trip': {
    meta: {
      title: 'Perjalanan Bosphorus dari €{p.dinnerStd} — Pelayaran Makan Malam Istanbul + Show',
      description: 'Perjalanan 3 jam di Bosphorus: makan malam Turki, folklor langsung, pemandangan malam bercahaya. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal.'
    },
    hero: {
      h1: 'Perjalanan Bosphorus',
      subtitle: 'Perjalanan Bosphorus yang paling direkomendasikan wisatawan — pelayaran makan malam 3 jam yang mencakup setiap landmark besar Istanbul, dengan makan malam, hiburan, dan pemandangan malam.',
      badge: 'Pengalaman Bosphorus Lengkap · Keberangkatan Malam'
    },
    intro: [
      'Sebuah **perjalanan Bosphorus** dapat berarti feri sightseeing 1 jam atau tur malam lengkap dengan makan malam — kami melakukan yang terakhir, dan sebagian besar wisatawan menganggapnya sebagai pengalaman yang lebih bernilai. 3 jam, €{p.dinnerStd}/orang, makan malam dan hiburan termasuk. Anda tidak hanya melewati landmark — Anda makan, menonton pertunjukan, dan menikmati malam.',
      'Rute **perjalanan Bosphorus kami** mencakup semua yang layak dilihat: Istana Dolmabahçe (kediaman Sultan Utsmani abad ke-19), Masjid Ortaköy (salah satu masjid paling banyak difoto di Istanbul), Jembatan Bosphorus (berubah warna di malam hari), Rumeli Hisarı (dibangun oleh Mehmed Sang Penakluk pada 1452), Istana Beylerbeyi (sisi Asia), dan Menara Gadis di pulau kecil. Semua dijelaskan oleh kru berbahasa Inggris.',
      'Entah Anda di Istanbul selama 24 jam atau seminggu, inilah **perjalanan Bosphorus** yang memberi Anda paling banyak dalam satu malam. Peringkat 4,8★ dari 11.317+ wisatawan, berlisensi TÜRSAB A-17672, menu ramah halal, bayar di kapal — tanpa risiko pembayaran di muka.'
    ],
    highlights: [
      { title: 'Bosphorus lengkap dalam sekali jalan', desc: 'Pantai Eropa (Dolmabahçe, Ortaköy, Rumeli Hisarı), pantai Asia (Beylerbeyi, Üsküdar), kedua jembatan Bosphorus, Menara Gadis. Setiap landmark besar terlihat dalam 3 jam.' },
      { title: 'Makan malam + hiburan termasuk', desc: 'Bukan hanya feri sightseeing — makan malam Turki lengkap dengan meze, menu utama, makanan penutup (semua halal). Pertunjukan tarian rakyat langsung, sema, oriental, DJ. Nilai hiburan melampaui sekadar pemandangan.' },
      { title: 'Malam = pencahayaan terbaik', desc: 'Perjalanan Bosphorus siang menunjukkan landmark dalam cahaya datar. Perjalanan malam menangkap semuanya bermandikan cahaya: istana bersinar, jembatan berwarna, masjid terpantul di air gelap. Foto lebih baik, lebih dramatis.' },
      { title: 'Mulai €{p.dinnerStd} — bayar di kapal', desc: 'Tidak perlu pembayaran di muka. Bayar di kapal (tunai atau kartu). Pembatalan gratis hingga 2 jam sebelum keberangkatan. Usia 0-3 gratis, usia 4-8 setengah harga. Harga transparan.' }
    ],
    faq: [
      { q: 'Apa perjalanan Bosphorus terbaik di Istanbul?', a: 'Tur makan malam malam secara konsisten menempati peringkat teratas. Pilihan siang (feri lingkaran 1 jam, perahu sightseeing 2 jam) menunjukkan lebih sedikit dan tidak termasuk makan malam. Untuk nilai, sulit mengalahkan tur 3 jam dengan makan malam, pertunjukan, dan titik kembali pusat. Biaya tur kami €{p.dinnerStd} menghilangkan kebutuhan untuk malam makan malam + hiburan terpisah.' },
      { q: 'Berapa lama perjalanan Bosphorus?', a: 'Perjalanan Bosphorus kami total 3 jam (keberangkatan 21:00, kembali 00:00). Ada pilihan lebih pendek (feri sightseeing 1 jam, tur 90 menit) tetapi mereka melewatkan makan malam dan hiburan. 3 jam ideal untuk pengalaman malam lengkap — cukup untuk melihat semuanya, tidak melelahkan.' },
      { q: 'Apakah perjalanan Bosphorus layak?', a: 'Ya — hampir setiap panduan perjalanan Istanbul menempatkan "tur Bosphorus" dalam 5 hal yang wajib dilakukan. Kota ini dibangun di sekitar selat ini; jika Anda belum melihat Bosphorus dari air, Anda belum benar-benar melihat Istanbul. Tur malam khusus kami menambahkan makan malam dan hiburan, menjadikannya malam ke luar lengkap daripada hanya sightseeing.' },
      { q: 'Apa yang harus saya bawa dalam perjalanan Bosphorus?', a: 'Paspor atau KTP (untuk pendaftaran kapal), jaket tipis (dek sejuk di malam hari), smartphone/kamera, sepatu nyaman untuk lantai dansa. Tunai atau kartu untuk pembayaran. Semua yang lain ada di kapal. Antar-jemput hotel tersedia dengan +€{p.transfer}/orang jika Anda tidak ingin menggunakan transportasi umum.' },
      { q: 'Apakah perjalanan Bosphorus cocok untuk anak-anak?', a: 'Ya — sangat ramah anak. Anak usia 0-3 tahun gratis (termasuk antar-jemput), usia 4-8 diskon 50%. Tempat duduk dalam ruangan, menu anak sesuai permintaan, dan hiburan yang sopan dan menarik. Menu halal. Banyak keluarga memesan ini sebagai salah satu sorotan perjalanan Istanbul mereka.' },
      { q: 'Apa saja pemberhentian perjalanan Bosphorus?', a: 'Ini tur berkelanjutan — kami tidak berhenti di landmark (tanpa turun). Perahu melewati dekat setiap landmark, kru menjelaskan apa yang Anda lihat, Anda tetap nyaman di meja Anda atau berpindah ke dek terbuka untuk foto. Tanpa antrean, tanpa berjalan — hanya 3 jam mulus di atas air.' }
    ],
    cta: {
      primary: 'Pesan Perjalanan Bosphorus · Bayar di Kapal',
      secondary: '3 jam · Makan malam + pertunjukan · Pembatalan gratis hingga 2 jam sebelumnya · Berlisensi TÜRSAB',
      tertiary: 'Periksa Ketersediaan'
    }
  },

  'bosphorus-cruise-tickets': {
    meta: {
      title: 'Tiket Pelayaran Bosphorus dari €{p.dinnerStd} — Bayar di Kapal',
      description: 'Tiket langsung pelayaran Bosphorus. Standar €{p.dinnerStd}, VIP €{p.dinnerVip}. Tanpa uang muka, bayar di kapal. Pembatalan gratis hingga 2 jam sebelumnya. 11.317 ulasan.'
    },
    hero: {
      h1: 'Tiket Pelayaran Bosphorus',
      subtitle: 'Lewati biaya perantara — beli tiket pelayaran Bosphorus Anda langsung dari kami. Tanpa pembayaran di muka, bayar di kapal, pembatalan gratis hingga 2 jam sebelum keberangkatan.',
      badge: 'Pemesanan Langsung · Tanpa Pembayaran di Muka · DISKON 40%'
    },
    intro: [
      'Mencari **tiket pelayaran Bosphorus**? Beli langsung. Tiket kami €{p.dinnerStd} (Standar) atau €{p.dinnerVip} (VIP) — diskon 40% dari harga normal (€{p.dinnerStdOriginal} dan €{p.dinnerVipOriginal}). Situs pemesanan pihak ketiga biasanya menambahkan komisi 20-40%. Dengan pemesanan langsung, Anda hemat — dan Anda masih bisa bayar di kapal.',
      'Proses **tiket pelayaran Bosphorus** kami: isi wizard di halaman ini dalam kurang dari 1 menit (tanggal, jumlah tamu, paket, kontak), kami konfirmasi secara instan via WhatsApp / Telegram / WeChat, Anda muncul pukul 20:00 di Dermaga Kabataş, bayar di kapal, nikmati tur makan malam 3 jam. Tanpa tiket fisik untuk dicetak, tanpa voucher yang dikirim via email — konfirmasi kami adalah tiket Anda.',
      'Entah Anda memesan pelayaran makan malam malam ini atau mengamankan tanggal tertentu minggu depan, **tiket pelayaran Bosphorus langsung** adalah cara tercepat. Peringkat 4,8★, berlisensi TÜRSAB (A-17672), menu bersertifikat halal, dan mendukung antar-jemput hotel serta tambahan alkohol.'
    ],
    highlights: [
      { title: 'Pemesanan langsung — tanpa biaya perantara', desc: '€{p.dinnerStd} Standar, €{p.dinnerVip} VIP. Situs pihak ketiga mengenakan €30-80+ untuk tur yang sama. Anda hemat dengan memesan langsung dari kami. Tanpa biaya tersembunyi, tanpa markup komisi.' },
      { title: 'Bayar di kapal — tanpa pembayaran di muka', desc: 'Amankan tempat Anda sekarang, bayar saat Anda naik ke kapal. Tunai atau kartu diterima. Jika Anda membatalkan 2+ jam sebelum keberangkatan, gratis. Nol risiko finansial untuk memesan lebih awal.' },
      { title: 'Konfirmasi dalam kurang dari 1 menit', desc: 'Isi wizard → kami konfirmasi via WhatsApp / Telegram / WeChat. Tanpa voucher PDF yang dikirim email untuk dicetak. Pesan kami adalah tiket Anda. Datang pukul 20:00 ke dermaga.' },
      { title: 'Harga peluncuran DISKON 40% saat ini', desc: 'Standar sebelumnya €{p.dinnerStdOriginal}, sekarang €{p.dinnerStd}. VIP sebelumnya €{p.dinnerVipOriginal}, sekarang €{p.dinnerVip}. Diskon 40% karena Anda memesan langsung. Bukan penawaran waktu terbatas — ini harga pemesanan langsung standar kami.' }
    ],
    faq: [
      { q: 'Berapa harga tiket pelayaran Bosphorus?', a: 'Standar: €{p.dinnerStd}/orang (normal €{p.dinnerStdOriginal}). VIP: €{p.dinnerVip}/orang (normal €{p.dinnerVipOriginal}). Termasuk tur 3 jam, makan malam Turki berlimpah (semua halal), pertunjukan tarian rakyat langsung, minuman ringan tanpa batas. Usia 0-3 gratis, usia 4-8 diskon 50%. Bayar di kapal — tanpa pembayaran di muka.' },
      { q: 'Di mana saya bisa membeli tiket pelayaran Bosphorus?', a: 'Langsung di halaman ini — isi wizard pemesanan, kami konfirmasi secara instan via WhatsApp / Telegram / WeChat. Bayar di kapal. Platform pihak ketiga (Viator, GetYourGuide, Klook) juga menjual tiket tetapi biasanya mengenakan €30-80+ — itu markup perantara. Langsung adalah yang termurah dan tercepat.' },
      { q: 'Apakah saya perlu mencetak tiket pelayaran Bosphorus?', a: 'Tidak — tidak perlu tiket fisik atau voucher. Setelah pemesanan, kami mengirim konfirmasi via WhatsApp (atau Telegram/WeChat) dengan titik pertemuan, waktu, dan nama pemesanan Anda. Cukup tunjukkan ponsel Anda di dermaga. Itu saja.' },
      { q: 'Bisakah saya membatalkan atau mengembalikan tiket pelayaran Bosphorus saya?', a: 'Ya — pembatalan gratis hingga 2 jam sebelum keberangkatan. Cukup kirim WhatsApp. Karena Anda belum membayar (bayar di kapal), tidak perlu pengembalian uang — Anda hanya tidak muncul, tanpa biaya. Jauh lebih fleksibel daripada tiket pihak ketiga yang dibayar di muka.' },
      { q: 'Apakah tiket pelayaran Bosphorus tersedia hari yang sama?', a: 'Sering kali ya, terutama hari kerja. Akhir pekan dan hari libur terisi lebih cepat. Periksa ketersediaan via wizard pemesanan — diperbarui secara real-time. Pemesanan hari yang sama biasanya dimungkinkan hingga beberapa jam sebelum keberangkatan 21:00. Untuk permintaan mendesak, WhatsApp.' },
      { q: 'Apakah tiket pelayaran Bosphorus anak gratis?', a: 'Anak **usia 0-3 tahun sepenuhnya gratis** (tanpa biaya, tanpa biaya tersembunyi, termasuk antar-jemput). **Usia 4-8 tahun diskon 50%** (€{p.dinnerStd}/2 = €12 di Standar). **Usia 9+ harga dewasa penuh.** Harga tetap dan transparan — tanpa trik "biaya tambahan bayi".' }
    ],
    cta: {
      primary: 'Beli Tiket · Bayar di Kapal',
      secondary: 'Pemesanan langsung · Tanpa pembayaran di muka · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Periksa Ketersediaan'
    }
  },

  'last-minute-bosphorus': {
    meta: {
      title: 'Bosphorus Last Minute dari €{p.dinnerStd} — Pesan Malam Ini, Bayar di Kapal',
      description: 'Pemesanan pelayaran Bosphorus hari yang sama. Konfirmasi WhatsApp dalam menit. Berangkat 21:00 dari Kabataş. Pembatalan gratis, bayar di kapal. 11.317 ulasan.'
    },
    hero: {
      h1: 'Pelayaran Bosphorus Menit Terakhir',
      subtitle: 'Ketersediaan untuk malam ini, dikonfirmasi dalam beberapa menit. Tanpa pembayaran di muka, tanpa voucher yang dicetak sebelumnya — cukup datang ke dermaga dan nikmati malam.',
      badge: 'Pemesanan Hari yang Sama · Dikonfirmasi dalam Menit · Bayar di Kapal'
    },
    intro: [
      'Baru mendarat di Istanbul sore ini dan ingin malam yang hebat malam ini? **Pelayaran Bosphorus menit terakhir** berhasil. Kami menyisihkan kursi khusus untuk pemesanan hari yang sama karena kami tahu banyak wisatawan yang memutuskan di pagi hari. Isi wizard di sini, kami konfirmasi dalam beberapa menit via WhatsApp, Anda muncul pukul 20:00 di Dermaga Kabataş, bayar di kapal, nikmati.',
      '**Pelayaran Bosphorus menit terakhir kami** memiliki program malam yang sama dengan pemesanan awal: 3 jam di atas air (21:00-00:00), jamuan Turki berlimpah (semua halal), pertunjukan tarian rakyat langsung, sema, tari oriental, DJ. Istana Dolmabahçe bermandikan cahaya, Masjid Ortaköy, Jembatan Bosphorus — pemandangan ikonik yang sama. Harga €{p.dinnerStd} Standar atau €{p.dinnerVip} VIP yang sama.',
      'Pembatalan hari yang sama gratis hingga 2 jam sebelum keberangkatan, karena **bayar di kapal** berarti Anda belum berjanji apa pun. Memesan pukul 14:00 dan rencana berubah pukul 19:00? Kirim WhatsApp saja — tanpa pengembalian uang, tanpa masalah. Itulah fleksibilitas **tur Istanbul menit terakhir** yang dihargai wisatawan.'
    ],
    highlights: [
      { title: 'Kursi malam ini masih tersedia', desc: 'Kami menyisihkan 5-10 kursi sehari untuk pemesanan hari yang sama. Periksa wizard di atas — ketersediaan real-time. Jika tur malam ini penuh, biasanya tur besok terbuka.' },
      { title: 'Konfirmasi dalam kurang dari 5 menit', desc: 'Isi wizard → kami konfirmasi pesan WhatsApp/Telegram/WeChat → selesai. Tanpa voucher email untuk ditunggu, tanpa kode QR untuk dicetak. Pesan kami adalah tiket Anda.' },
      { title: 'Nol pembayaran sampai Anda naik', desc: 'Bayar di kapal, tunai atau kartu. Jika Anda tidak muncul (perubahan rencana, sakit, cuaca), tanpa biaya. Pembatalan gratis hingga 2 jam sebelum keberangkatan. Benar-benar ramah menit terakhir.' },
      { title: 'Antar-jemput hotel hari yang sama sering tersedia', desc: 'Antar-jemput hotel biasanya memerlukan pemberitahuan 24 jam, tetapi untuk pemesanan hari yang sama antara pukul 14:00-17:00, kami biasanya dapat mengatur penjemputan dengan +€{p.transfer}/orang. Untuk permintaan antar-jemput mendesak, WhatsApp.' }
    ],
    faq: [
      { q: 'Bisakah saya benar-benar memesan pelayaran Bosphorus untuk malam ini?', a: 'Ya — sering. Kami menyisihkan kursi untuk pemesanan hari yang sama. Periksa wizard di atas untuk ketersediaan malam ini. Jika kursi tersedia, Anda dapat memesan hingga pukul 18:00 (3 jam sebelum keberangkatan). Akhir pekan lebih ketat — pesan lebih awal di hari itu jika mungkin.' },
      { q: 'Seberapa menit terakhir saya bisa memesan?', a: 'Pemesanan tetap terbuka hingga pukul 18:00 untuk kapal 21:00. Setelah pukul 18:00, kirim WhatsApp langsung ke +90 532 244 29 22 — kami dapat konfirmasi manual jika kursi terbuka. Setelah pukul 19:30 sangat ketat kecuali Anda sudah di Dermaga Kabataş dan dapat naik dengan cepat.' },
      { q: 'Apakah pelayaran Bosphorus menit terakhir lebih mahal?', a: 'Tidak — harga sama dengan pemesanan awal. €{p.dinnerStd} Standar, €{p.dinnerVip} VIP. Kami tidak melakukan "harga fluktuatif" atau premium menit terakhir. Kapal sama, makan malam sama, pertunjukan sama, harga sama.' },
      { q: 'Bagaimana jika tur malam ini sepenuhnya penuh?', a: 'Tur besok biasanya terbuka — kami beroperasi setiap hari, 365 hari setahun. Anda dapat memesan untuk besok dan masih "menit terakhir", artinya Anda baru memutuskan. Tur hari kerja memiliki lebih banyak ruang daripada akhir pekan.' },
      { q: 'Bisakah Anda mengatur antar-jemput hotel menit terakhir?', a: 'Antar-jemput hari yang sama dimungkinkan hingga ~17:00 untuk tur 21:00. Setelah pukul 17:00, kami mungkin tidak memiliki sopir yang tersedia — dalam hal ini Anda dapat naik taksi ke Dermaga Kabataş (15 menit dari Taksim, 10 menit dari Sultanahmet, ~€10-15). Terpusat dan mudah.' },
      { q: 'Bagaimana jika saya sudah di Kabataş dan ingin naik?', a: 'Jika Anda di dermaga dan ada kursi terbuka, Anda dapat berjalan dan naik. Kirim WhatsApp atau tanya kru — kami akan menambahkan Anda jika ada ruang. Harga bayar di kapal yang sama. Dalam istilah tur, itu disebut "walk-on" — berfungsi di sini.' }
    ],
    cta: {
      primary: 'Pesan Malam Ini · Bayar di Kapal',
      secondary: 'Pemesanan hari yang sama · Dikonfirmasi dalam menit · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'WhatsApp untuk Pemesanan Mendesak'
    }
  },

  'istanbul-cruise-price': {
    meta: {
      title: 'Harga Pelayaran Istanbul dari €{p.dinnerStd} — Tarif Transparan',
      description: 'Harga pelayaran Bosphorus Istanbul: Standar €{p.dinnerStd}, VIP €{p.dinnerVip}. Anak 0-3 gratis, 4-8 setengah harga. Add-on transparan. Pembatalan gratis.'
    },
    hero: {
      h1: 'Harga Pelayaran Istanbul',
      subtitle: 'Harga transparan, tanpa biaya tersembunyi. Standar €{p.dinnerStd}/orang, VIP €{p.dinnerVip}/orang — dan Anda membayar di kapal, bukan sekarang.',
      badge: 'Transparan · DISKON 40% Langsung · Usia 0-3 Gratis'
    },
    intro: [
      '**Harga pelayaran Istanbul** sangat bervariasi — dari feri anggaran €15 yang melewatkan makan malam hingga kapal pesiar gaya resort €150+. Harga kami ada di tengah dan memberikan nilai terbaik: €{p.dinnerStd} untuk pelayaran makan malam 3 jam lengkap dengan pertunjukan untuk Standar, €{p.dinnerVip} untuk VIP dengan pengalaman premium depan panggung. Tanpa biaya tersembunyi, tanpa biaya tambahan kejutan.',
      'Rincian **harga pelayaran Istanbul** terperinci, karena transparansi penting:\n\n- **Pelayaran Makan Malam Standar**: €{p.dinnerStd}/orang (sebelumnya €{p.dinnerStdOriginal}, diskon 40%). Termasuk pelayaran 3 jam, 10 meze, menu utama, makanan penutup, minuman ringan tanpa batas, pertunjukan langsung. Semua halal.\n- **Pelayaran Makan Malam VIP**: €{p.dinnerVip}/orang (sebelumnya €{p.dinnerVipOriginal}). Menambahkan kursi depan panggung, 15+ meze, pilihan daging sapi tenderloin/ribeye, layanan prioritas.\n- **Usia 0-3**: Gratis. Usia 4-8: diskon 50%. Usia 9+: harga penuh.\n\nTambahan (opsional):\n- 2 gelas alkohol: +€{p.alcohol2}/orang\n- Alkohol lokal tanpa batas: +€{p.unlimited}/orang\n- Antar-jemput hotel pulang-pergi: +€{p.transfer}/orang\n- Pengaturan meja romantis: +€{p.romantic}/meja',
      'Dan yang terpenting: **bayar di kapal**. Anda tidak berjanji satu sen pun sampai Anda di kapal. Pembatalan gratis hingga 2 jam sebelum keberangkatan. Tanpa komitmen, tanpa risiko — **harga pelayaran Istanbul** paling ramah konsumen yang akan Anda temukan.'
    ],
    highlights: [
      { title: 'Standar: €{p.dinnerStd} (sebelumnya €{p.dinnerStdOriginal})', desc: 'Diskon 40% dari harga normal. Pelayaran 3 jam, makan malam Turki lengkap (semua halal), pertunjukan langsung, minuman ringan tanpa batas. Paket paling populer — mencakup semua yang Anda butuhkan untuk malam yang hebat.' },
      { title: 'VIP: €{p.dinnerVip} (sebelumnya €{p.dinnerVipOriginal})', desc: 'Diskon 40% dari harga normal. Menambahkan kursi depan panggung, 15+ meze, menu utama premium (daging sapi tenderloin, ribeye), layanan pelayan prioritas. Untuk acara khusus atau wisatawan premium.' },
      { title: 'Harga anak: 0-3 gratis, 4-8 setengah harga', desc: '0-3 sepenuhnya gratis (tanpa biaya). 4-8 diskon 50% dari harga dewasa. 9+ harga dewasa penuh. Transparan, tanpa trik harga keluarga. Antar-jemput juga gratis untuk 0-3.' },
      { title: 'Tambahan — hanya saat Anda inginkan', desc: 'Alkohol: €{p.alcohol2} atau €{p.unlimited}/orang. Antar-jemput: €{p.transfer}/orang. Meja romantis: €{p.romantic}/meja. Semua opsional, tidak dibundel. Pilih hanya yang Anda butuhkan.' }
    ],
    faq: [
      { q: 'Berapa harga pelayaran Istanbul?', a: 'Pelayaran Makan Malam Standar: €{p.dinnerStd}/orang (normal €{p.dinnerStdOriginal}, diskon 40%). VIP: €{p.dinnerVip}/orang (normal €{p.dinnerVipOriginal}, diskon 40%). Usia 0-3 gratis, usia 4-8 setengah harga. Bayar di kapal — tanpa pembayaran di muka. Pembatalan gratis hingga 2 jam sebelum keberangkatan.' },
      { q: 'Apakah ada biaya tersembunyi dalam harga pelayaran Istanbul?', a: 'Tidak. Harga termasuk: pelayaran 3 jam, makan malam lengkap (meze, pembuka, menu utama, makanan penutup — semua halal), minuman ringan tanpa batas, pertunjukan langsung, pajak. Tambahan opsional (alkohol, antar-jemput, meja romantis) diberi harga terpisah dan transparan — Anda membayar hanya untuk yang Anda tambahkan. Tanpa "biaya layanan", "biaya pelabuhan", biaya tambahan kejutan.' },
      { q: 'Mengapa harga pelayaran Istanbul diskon 40% — apakah ini tipuan?', a: 'Tanpa tipuan. Harga normal €{p.dinnerStdOriginal}/€{p.dinnerVipOriginal} adalah yang dikenakan situs pemesanan pihak ketiga (Viator, GetYourGuide, Klook) — dengan komisi mereka. Pesan langsung dan dapatkan €{p.dinnerStd}/€{p.dinnerVip}. Itulah perbedaan 40%. Tidak ada trik waktu terbatas atau harga fluktuatif.' },
      { q: 'Bagaimana harga pelayaran Istanbul dibandingkan dengan pilihan lain?', a: 'Feri lingkaran: €5-10, 1 jam, tanpa makan malam, tanpa hiburan, hanya sightseeing. Pelayaran makan malam anggaran: €20-30, ramai, makanan biasa, pertunjukan pendek. Standar kami (€{p.dinnerStd}): 3 jam, makan malam lengkap, pertunjukan lengkap, meja privat, berlisensi TÜRSAB, menu halal. VIP (€{p.dinnerVip}): depan panggung, menu premium. Kapal pesiar resort: €100-150+, berlebihan untuk wisatawan solo/pasangan.' },
      { q: 'Apakah saya perlu membayar harga pelayaran Istanbul di muka?', a: 'Tidak — **bayar di kapal**. Anda memesan sekarang (wizard 1 menit), kami konfirmasi via WhatsApp, Anda datang pukul 20:00 dan bayar di kapal (tunai atau kartu). Pembatalan gratis hingga 2 jam sebelumnya. Nol komitmen finansial sampai Anda puas.' },
      { q: 'Apakah ada diskon grup untuk harga pelayaran Istanbul?', a: 'Untuk grup 10+ kami dapat menawarkan diskon 5-10% — kirim WhatsApp dengan ukuran grup Anda. Untuk 25+, pertimbangkan tur privat (seluruh kapal untuk grup Anda, menu khusus). Untuk 2-9 orang, harga standar berlaku — sudah diskon 40% dari harga normal.' }
    ],
    cta: {
      primary: 'Pesan · Bayar di Kapal',
      secondary: 'Mulai €{p.dinnerStd}/orang · Usia 0-3 gratis · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  },

  'bosphorus-sightseeing': {
    meta: {
      title: 'Sightseeing Bosphorus dari €{p.dinnerStd} — Landmark Istanbul dari Air',
      description: 'Pelayaran sightseeing Bosphorus: Dolmabahçe, Ortaköy, Jembatan Bosphorus, Rumeli, Beylerbeyi, Menara Gadis. Tur malam 3 jam dengan makan malam. Pembatalan gratis.'
    },
    hero: {
      h1: 'Sightseeing Bosphorus',
      subtitle: 'Semua landmark ikonik Istanbul — dari air, di malam hari, dengan makan malam. Satu tur 3 jam mencakup Dolmabahçe, Masjid Ortaköy, Jembatan Bosphorus, Rumeli Hisarı, dan lainnya.',
      badge: '10+ Landmark · Pantai Eropa & Asia · 3 Jam'
    },
    intro: [
      '**Sightseeing Bosphorus** dari air mengalahkan tur bus mana pun. Bosphorus adalah jalur air paling bersejarah di kota — sultan Utsmani, kaisar Bizantium, pedagang Yunani, dan kapal perang Rusia semua melewatinya. Hari ini tur 3 jam kami, dengan komentar dari kru berbahasa Inggris kami, melewati setiap landmark besar Istanbul yang mendefinisikan cakrawala.',
      'Rute **tur sightseeing Bosphorus kami** (keberangkatan malam, 21:00-00:00):\n\n1. **Istana Dolmabahçe** — kediaman Utsmani abad ke-19, bermandikan cahaya di malam hari\n2. **Istana Çırağan** — sekarang hotel mewah, sejarah kerajaan\n3. **Masjid Ortaköy** — salah satu masjid paling banyak difoto di Istanbul, di atas air\n4. **Jembatan Bosphorus** — bergantian biru, ungu, emas di malam hari\n5. **Bebek** — lingkungan sisi Eropa yang elegan\n6. **Rumeli Hisarı** — dibangun pada 1452 oleh Mehmed Sang Penakluk sebelum penaklukan Konstantinopel\n7. **Jembatan Fatih Sultan Mehmet** — jembatan Bosphorus kedua, lengkung dramatis\n8. **Istana Beylerbeyi** — sisi Asia, kediaman musim panas Utsmani\n9. **Üsküdar** — sisi Asia Istanbul, lingkungan tradisional\n10. **Menara Gadis** — menara pulau kecil, salah satu simbol paling romantis Istanbul',
      'Makan malam dan hiburan termasuk — tidak terpisah — jadi **sightseeing Bosphorus** berubah menjadi malam lengkap. Jamuan Turki berlimpah (semua halal), pertunjukan tarian rakyat langsung, sema, tari oriental, DJ. Peringkat 4,8★ dari 11.317+ wisatawan, berlisensi TÜRSAB A-17672.'
    ],
    highlights: [
      { title: '10+ landmark Istanbul besar', desc: 'Istana Dolmabahçe, Istana Çırağan, Masjid Ortaköy, Jembatan Bosphorus, Rumeli Hisarı, Jembatan FSM, Istana Beylerbeyi, Üsküdar, Menara Gadis. Setiap landmark Istanbul penting dalam satu tur.' },
      { title: 'Kedua pantai Eropa dan Asia', desc: 'Sisi Eropa saat berangkat (Dolmabahçe → Rumeli Hisarı), sisi Asia saat kembali (Beylerbeyi → Üsküdar). Dua benua dalam satu tur 3 jam — hanya Istanbul yang memungkinkan Anda melakukan itu.' },
      { title: 'Sightseeing malam = pemandangan bermandikan cahaya', desc: 'Sightseeing siang menunjukkan landmark dalam cahaya datar. Tur malam menangkapnya dalam drama puncak: istana bersinar kuning, jembatan berwarna-warni, masjid terpantul di air gelap. Lebih baik untuk foto, lebih tak terlupakan.' },
      { title: 'Makan malam + pertunjukan termasuk', desc: 'Sightseeing + makan malam + hiburan dalam satu paket. Tidak perlu merencanakan makan malam terpisah setelah tur. Mulai €{p.dinnerStd}/orang, bayar di kapal, total 3 jam.' }
    ],
    faq: [
      { q: 'Landmark Bosphorus apa yang akan saya lihat?', a: 'Secara berurutan: Istana Dolmabahçe, Istana Çırağan, Masjid Ortaköy, Jembatan Bosphorus, lingkungan Bebek, Rumeli Hisarı, Jembatan Fatih Sultan Mehmet, Anadolu Hisarı, Istana Beylerbeyi, Kuzguncuk, Üsküdar, dan Menara Gadis (terlihat dari kejauhan). 10+ landmark besar dalam satu rute 3 jam.' },
      { q: 'Apakah sightseeing Bosphorus lebih baik siang atau malam?', a: 'Pengalaman berbeda. Siang: pandangan lebih jelas tentang detail arsitektur, lebih terang untuk foto. Malam: pencahayaan dramatis, suasana misterius, lebih sedikit kapal di air. Sebagian besar wisatawan lebih memilih tur malam karena landmark terlihat lebih memukau — dan makan malam + pertunjukan menjadikannya malam lengkap.' },
      { q: 'Apakah kapal berhenti di landmark untuk foto?', a: 'Ini tur berkelanjutan — tanpa pemberhentian (tanpa turun). Kapal melewati dekat setiap landmark, kru menjelaskan apa yang Anda lihat, Anda dapat berpindah ke dek terbuka untuk foto. Tanpa antrean, tanpa berjalan, tanpa stres waktu — hanya kesempatan foto 3 jam mulus.' },
      { q: 'Apakah kru memberikan komentar selama sightseeing?', a: 'Ya — kru berbahasa Inggris memberikan komentar singkat (sejarah, arsitektur, fakta menarik) saat kami melewati setiap landmark besar. Bukan ceramah terpandu, lebih seperti penjelasan ramah sambil makan. Untuk sejarah lebih dalam, kami sarankan memadukan dengan tur jalan kaki Istanbul di siang hari.' },
      { q: 'Bagaimana sightseeing Bosphorus berbeda dari feri hop-on?', a: 'Feri hop-on (perahu lingkaran Şehir Hatları): €5-10, 1-2 jam, dasar, tanpa makan malam, ramai. Tur kami: €{p.dinnerStd}, 3 jam, makan malam lengkap (halal), pertunjukan langsung, meja privat, komentar bahasa Inggris. Tur malam lebih baik untuk sightseeing serius yang nyaman. Feri lingkaran berfungsi untuk transit anggaran cepat.' },
      { q: 'Bisakah saya memotret landmark dari kapal?', a: 'Ya — tentu saja. Dek terbuka memiliki titik sempurna untuk fotografi. Landmark melewati dalam jarak 100-200 meter dari kapal. Foto smartphone keluar bagus; pengguna DSLR/mirrorless dapat mendapatkan bidikan menakjubkan terutama selama transisi golden-ke-blue hour di awal malam.' }
    ],
    cta: {
      primary: 'Pesan Tur Sightseeing · Bayar di Kapal',
      secondary: '10+ landmark · Makan malam + pertunjukan · Pembatalan gratis hingga 2 jam sebelumnya',
      tertiary: 'Ketersediaan Malam Ini'
    }
  }

};
