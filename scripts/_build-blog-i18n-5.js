#!/usr/bin/env node
/**
 * Blog i18n generator — id, ms, pl, bg, ro (Sprint L1 PROMPT 5).
 * Reads EN blog/*.html as template (boilerplate) and injects translated strings.
 * Output: src/blog-i18n/{lang}/*.html (6 files × 5 langs = 30 files).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'src', 'blog-i18n');

// ============================================================
// PER-LANGUAGE UI STRINGS
// ============================================================
const UI = {
  id: {
    htmlLang: 'id',
    blogLink: 'Blog',
    homeLink: 'Beranda',
    backToBlog: '← Kembali ke Blog',
    ctaTitle: 'Siap Memesan Pelayaran Anda?',
    ctaText: 'Hubungi kami di WhatsApp untuk pemesanan instan — tanpa pembayaran di muka, bayar di kapal.',
    ctaButton: 'Pesan via WhatsApp',
    relatedTitle: 'Artikel Terkait',
    footerCopy: '© 2026 Bosphorus Night. Hak cipta dilindungi.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Kami online · Chat sekarang',
    floatingWaAria: 'Chat di WhatsApp',
    waMsg: 'Halo!%20Saya%20ingin%20bertanya%20tentang%20pelayaran%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 April 2026', '04-09': '9 April 2026', '04-10': '10 April 2026', '04-11': '11 April 2026' },
  },
  ms: {
    htmlLang: 'ms',
    blogLink: 'Blog',
    homeLink: 'Laman Utama',
    backToBlog: '← Kembali ke Blog',
    ctaTitle: 'Sedia untuk Menempah Pelayaran Anda?',
    ctaText: 'Hubungi kami di WhatsApp untuk tempahan segera — tiada bayaran pendahuluan, bayar di kapal.',
    ctaButton: 'Tempah di WhatsApp',
    relatedTitle: 'Artikel Berkaitan',
    footerCopy: '© 2026 Bosphorus Night. Semua hak terpelihara.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Kami dalam talian · Chat sekarang',
    floatingWaAria: 'Chat di WhatsApp',
    waMsg: 'Hai!%20Saya%20ingin%20bertanya%20tentang%20pelayaran%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 April 2026', '04-09': '9 April 2026', '04-10': '10 April 2026', '04-11': '11 April 2026' },
  },
  pl: {
    htmlLang: 'pl',
    blogLink: 'Blog',
    homeLink: 'Strona główna',
    backToBlog: '← Powrót do bloga',
    ctaTitle: 'Gotowy zarezerwować rejs?',
    ctaText: 'Skontaktuj się z nami na WhatsApp w celu natychmiastowej rezerwacji — bez przedpłaty, płatność na statku.',
    ctaButton: 'Zarezerwuj na WhatsApp',
    relatedTitle: 'Powiązane artykuły',
    footerCopy: '© 2026 Bosphorus Night. Wszelkie prawa zastrzeżone.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Jesteśmy online · Czat teraz',
    floatingWaAria: 'Czat na WhatsApp',
    waMsg: 'Cześć!%20Chciałbym%20zapytać%20o%20rejs%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 kwietnia 2026', '04-09': '9 kwietnia 2026', '04-10': '10 kwietnia 2026', '04-11': '11 kwietnia 2026' },
  },
  bg: {
    htmlLang: 'bg',
    blogLink: 'Блог',
    homeLink: 'Начало',
    backToBlog: '← Обратно към блога',
    ctaTitle: 'Готови ли сте да резервирате круиза си?',
    ctaText: 'Свържете се с нас в WhatsApp за моментална резервация — без предплащане, плащане на кораба.',
    ctaButton: 'Резервирай в WhatsApp',
    relatedTitle: 'Свързани статии',
    footerCopy: '© 2026 Bosphorus Night. Всички права запазени.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Ние сме онлайн · Чат сега',
    floatingWaAria: 'Чат в WhatsApp',
    waMsg: 'Здравейте!%20Бих%20искал%20да%20попитам%20за%20круиза%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 април 2026', '04-09': '9 април 2026', '04-10': '10 април 2026', '04-11': '11 април 2026' },
  },
  ro: {
    htmlLang: 'ro',
    blogLink: 'Blog',
    homeLink: 'Acasă',
    backToBlog: '← Înapoi la blog',
    ctaTitle: 'Gata să rezervați croaziera?',
    ctaText: 'Contactați-ne pe WhatsApp pentru rezervare instantanee — fără plată în avans, plătiți pe barcă.',
    ctaButton: 'Rezervă pe WhatsApp',
    relatedTitle: 'Articole conexe',
    footerCopy: '© 2026 Bosphorus Night. Toate drepturile rezervate.',
    footerLegal: 'Samerames Tur Turizm Seyahat Org. ve Reklam Ltd. Sti. · TÜRSAB A-17672',
    floatingWaText: 'Suntem online · Discută acum',
    floatingWaAria: 'Discută pe WhatsApp',
    waMsg: 'Bună!%20Aș%20dori%20să%20întreb%20despre%20croaziera%20Bosphorus%20Night.',
    dateStrings: { '04-08': '8 aprilie 2026', '04-09': '9 aprilie 2026', '04-10': '10 aprilie 2026', '04-11': '11 aprilie 2026' },
  },
};

// ============================================================
// PER-ARTICLE COMMON DATA (image, dates, related links)
// ============================================================
const ARTICLES_META = {
  'best-bosphorus-dinner-cruise-istanbul': {
    image: '/assets/tours/dinner/boat-night-bridge.jpg',
    date: '2026-04-11',
    relatedSlugs: ['istanbul-cruise-tonight-last-minute', 'bosphorus-sunset-cruise-guide', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'],
  },
  'istanbul-cruise-tonight-last-minute': {
    image: '/assets/tours/dinner/hall-wide.jpg',
    date: '2026-04-11',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'bosphorus-sunset-cruise-guide', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'],
  },
  'bosphorus-sunset-cruise-guide': {
    image: '/assets/tours/sunset/amor-sunset-dramatic.jpg',
    date: '2026-04-10',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'istanbul-cruise-tonight-last-minute', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'],
  },
  'things-to-know-istanbul-boat-tour': {
    image: '/assets/tours/daytime/boat-panorama.jpg',
    date: '2026-04-09',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'istanbul-cruise-tonight-last-minute', 'bosphorus-sunset-cruise-guide', 'bosphorus-cruise-with-kids-family'],
  },
  'bosphorus-cruise-with-kids-family': {
    image: '/assets/tours/daytime/deck-guests.jpg',
    date: '2026-04-08',
    relatedSlugs: ['best-bosphorus-dinner-cruise-istanbul', 'things-to-know-istanbul-boat-tour', 'bosphorus-sunset-cruise-guide', 'istanbul-cruise-tonight-last-minute'],
  },
};

const INDEX_DATES = { 'best-bosphorus-dinner-cruise-istanbul': '04-11', 'istanbul-cruise-tonight-last-minute': '04-11', 'bosphorus-sunset-cruise-guide': '04-10', 'things-to-know-istanbul-boat-tour': '04-09', 'bosphorus-cruise-with-kids-family': '04-08' };

// ============================================================
// PER-LANGUAGE × PER-ARTICLE TRANSLATIONS
// ============================================================
// Each entry: { title, desc, h1, alt, body, related: { slug: {title, blurb} } }
// body is an array of {type, text} objects. type: 'p' | 'h2' | 'ul' | 'ol'
// ============================================================
const T = {
  id: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: 'Tips pelayaran Bosphorus, panduan, dan pengetahuan orang dalam. Rencanakan pelayaran makan malam Istanbul yang sempurna dengan artikel ahli kami.',
      ogDesc: 'Tips pelayaran Bosphorus, panduan, dan pengetahuan orang dalam. Rencanakan pelayaran makan malam Istanbul yang sempurna.',
      h1: 'Blog',
      lead: 'Tips pelayaran, panduan Istanbul, dan pengetahuan orang dalam untuk membantu Anda merencanakan pengalaman Bosphorus yang sempurna.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 April 2026', title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Semua yang perlu Anda ketahui tentang pengalaman pelayaran makan malam terbaik di Istanbul. Dari paket dan harga hingga hiburan dan pemandangan malam yang menakjubkan.', alt: 'Kapal pelayaran makan malam Bosphorus di malam hari dengan jembatan bercahaya' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 April 2026', title: 'Pelayaran Bosphorus Malam Ini — Panduan Last Minute', blurb: 'Ingin berlayar di Bosphorus malam ini? Inilah semua yang perlu Anda ketahui tentang pemesanan last minute, ketersediaan, dan cara mengamankan tempat Anda.', alt: 'Interior aula makan pelayaran Bosphorus mewah' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 April 2026', title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Rasakan golden hour Istanbul dari air. Semua tentang pelayaran makan malam saat matahari terbenam — waktu, apa yang diharapkan, dan mengapa tak terlupakan.', alt: 'Matahari terbenam yang dramatis di atas Selat Bosphorus' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 April 2026', title: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul', blurb: 'Merencanakan pelayaran Bosphorus? Dari apa yang harus dikenakan hingga tips mabuk laut, berikut 10 hal penting yang harus diketahui setiap pemula.', alt: 'Pemandangan panorama kapal yang berlayar di Bosphorus' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 April 2026', title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Apakah pelayaran makan malam cocok untuk anak-anak? Tentu saja. Anak di bawah 6 tahun gratis berlayar, usia 6-12 setengah harga. Berikut panduan perencanaan keluarga lengkap Anda.', alt: 'Keluarga menikmati dek pelayaran Bosphorus' },
      ],
      readMore: 'Baca Selengkapnya →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026 — Panduan Lengkap',
      desc: 'Semua yang perlu Anda ketahui tentang pelayaran makan malam terbaik di Istanbul. Paket mulai €24, pertunjukan langsung Turki, pemandangan malam menakjubkan. Pesan instan.',
      h1: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026',
      alt: 'Kapal pelayaran mewah meluncur di bawah Jembatan Bosphorus yang bercahaya pada malam hari',
      body: [
        ['p', 'Istanbul adalah salah satu dari sedikit kota di dunia di mana Anda dapat bersantap di atas air sambil menyaksikan dua benua bersinar di sekitar Anda. Pelayaran makan malam Bosphorus bukan hanya sekadar makanan — ini adalah pengalaman malam paling ikonik yang ditawarkan kota ini. Apakah Anda mengunjungi Istanbul untuk pertama kalinya atau kembali untuk perjalanan lain, menghabiskan malam di Bosphorus adalah sesuatu yang akan Anda ingat selama bertahun-tahun.'],
        ['h2', 'Apa yang Membuatnya Istimewa'],
        ['p', 'Selat Bosphorus adalah jalur air sepanjang 30 kilometer yang memisahkan Eropa dan Asia. Pada malam hari, istana, masjid, dan jembatan bersejarah di sepanjang pantainya diterangi secara spektakuler. Dari meja Anda di atas kapal, Anda akan melihat Istana Dolmabahçe bersinar putih di latar belakang bukit gelap, Maiden\'s Tower berdiri sendiri di air dengan cahaya kuning hangatnya, dan dua jembatan gantung besar — Jembatan Bosphorus dan Jembatan Fatih Sultan Mehmet — terbentang antara dua benua dalam pita warna.'],
        ['p', 'Rute pelayaran biasanya berangkat dari dermaga Kabataş, dekat kawasan Istana Dolmabahçe. Kapal menuju utara di sepanjang pantai Eropa, melewati rumah-rumah tepi laut yang indah yang dikenal sebagai yalı, Istana Çırağan, dan Benteng Rumeli. Kemudian berbelok ke selatan di sisi Asia, menawarkan pemandangan Istana Beylerbeyi dan tepi laut Üsküdar sebelum kembali. Seluruh perjalanan memakan waktu sekitar tiga hingga empat jam, tergantung paketnya.'],
        ['h2', 'Pengalaman Makan Malam'],
        ['p', 'Makan malam disajikan sebagai menu set yang memadukan masakan Turki dan internasional. Anda dapat mengharapkan pilihan hidangan pembuka dingin dan panas — hummus, daun anggur isi, salad musiman — diikuti oleh hidangan utama daging panggang atau ikan dengan nasi dan sayuran panggang. Hidangan penutup biasanya adalah manisan klasik Turki seperti baklava atau kadayıf, dipadukan dengan teh atau kopi Turki. Minuman ringan dan air termasuk dalam semua paket, sementara minuman beralkohol tersedia dengan opsi Premium dan VIP.'],
        ['h2', 'Hiburan Langsung'],
        ['p', 'Program hiburan adalah salah satu sorotan. Harapkan rangkaian lengkap tarian rakyat Turki tradisional yang dibawakan dalam kostum regional berwarna-warni, pertunjukan tari perut yang energik, musik langsung dari band Turki, dan set DJ yang menjaga suasana saat malam berlanjut. Beberapa pelayaran juga menampilkan upacara darwis berputar — praktik spiritual Sufi yang memukau yang telah menjadi bagian dari budaya Turki selama berabad-abad. Pertunjukan berlangsung sekitar 90 menit dan dirancang untuk memberikan tamu internasional rasa seni pertunjukan Turki yang kaya.'],
        ['h2', 'Paket dan Harga'],
        ['p', 'Di Bosphorus Night kami menawarkan dua paket utama, dengan add-on opsional untuk minuman, antar-jemput hotel, dan acara khusus:'],
        ['ul', [
          ['<strong class="text-white/80">Pelayaran Makan Malam Standar (mulai €24)</strong> — Makan malam 4 hidangan lengkap, minuman ringan, hiburan langsung, pertunjukan tari rakyat dan tari perut, DJ di dek atas. Pilihan paling populer untuk pasangan, keluarga, dan pelancong solo.'],
          ['<strong class="text-white/80">Pelayaran Makan Malam VIP (mulai €55)</strong> — Menu yang diperluas termasuk daging premium (rib-eye, beef tenderloin), 15+ meze Turki, tempat duduk dekat panggung, dan layanan yang ditingkatkan. Sempurna untuk acara khusus dan hari jadi.'],
        ]],
        ['p_sm', 'Add-on: minuman tanpa batas (€30/orang), antar-jemput hotel (€10/orang), pengaturan meja romantis (€15/pemesanan). Bayar di kapal — tidak perlu pembayaran di muka.'],
        ['p', 'Anak-anak usia 6 hingga 12 tahun biasanya membayar setengah harga, dan anak di bawah 6 tahun gratis. Tidak diperlukan pembayaran di muka — Anda membayar di kapal, yang menghilangkan semua risiko pemesanan.'],
        ['h2', 'Cara Memesan'],
        ['p', 'Cara termudah untuk memesan adalah melalui WhatsApp. Cukup kirim pesan kepada kami dengan tanggal yang Anda inginkan, jumlah tamu, dan paket mana yang menarik bagi Anda. Tim kami merespons dalam hitungan menit, mengkonfirmasi ketersediaan, dan mengirimi Anda semua detail — titik pertemuan, waktu naik, dan apa yang diharapkan. Tidak ada formulir pembayaran online dan tidak ada deposit. Anda membayar tunai atau kartu langsung di kapal.'],
        ['h2', 'Tips untuk Pengalaman Terbaik'],
        ['p', 'Tiba di dermaga setidaknya 20 menit sebelum keberangkatan untuk mendapatkan meja yang baik. Berpakaian smart casual — kapal tidak terlalu formal, tetapi Anda akan merasa lebih nyaman dengan sesuatu yang sedikit di atas pakaian pantai. Bawa jaket ringan atau selendang karena dek atas bisa berangin bahkan di musim panas. Dan jaga agar ponsel Anda tetap terisi — Anda pasti ingin mengabadikan pemandangan, terutama saat kapal melewati jembatan-jembatan yang menyala.'],
        ['p', 'Pelayaran makan malam Bosphorus, tanpa berlebihan, adalah cara terbaik untuk merasakan Istanbul di malam hari. Kombinasi makanan, budaya langsung, dan pemandangan cakrawala kota yang tercermin di atas air gelap tidak seperti yang lain. Jika Anda hanya melakukan satu "malam besar" selama perjalanan Istanbul Anda, jadikan ini yang itu.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Last Minute', blurb: 'Pesan pelayaran hari yang sama dengan konfirmasi WhatsApp instan.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam terbaik.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul', blurb: 'Tips penting untuk pelayar Bosphorus pertama kali.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran ramah keluarga dengan anak di bawah 6 tahun gratis.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Pelayaran Bosphorus Malam Ini — Panduan Pemesanan Last Minute Istanbul',
      desc: 'Ingin berlayar di Bosphorus malam ini? Inilah cara memesan pelayaran makan malam last minute di Istanbul. Ketersediaan hari yang sama, pemesanan WhatsApp instan.',
      h1: 'Pelayaran Bosphorus Malam Ini — Panduan Pemesanan Last Minute',
      alt: 'Aula makan elegan dari pelayaran makan malam Bosphorus',
      body: [
        ['p', 'Saat ini pukul 3 sore dan Anda baru saja memutuskan ingin melakukan sesuatu yang istimewa malam ini. Mungkin Anda tiba di Istanbul pagi ini dan ingin memaksimalkan malam pertama Anda. Mungkin cuaca ternyata lebih baik dari yang diharapkan dan malam di atas air tiba-tiba terdengar sempurna. Apa pun alasannya, pertanyaannya sederhana: dapatkah Anda masih memesan pelayaran makan malam Bosphorus untuk malam ini?'],
        ['p', 'Jawaban singkatnya adalah <strong class="text-white/90">ya</strong>. Pemesanan hari yang sama bukan hanya mungkin — itu hal yang umum. Berikut semua yang perlu Anda ketahui tentang memesan pelayaran last minute di Istanbul.'],
        ['h2', 'Apakah Anda Benar-benar Bisa Memesan Hari yang Sama?'],
        ['p', 'Tentu saja. Tidak seperti banyak aktivitas wisata yang memerlukan reservasi di muka, pelayaran makan malam Bosphorus mengoperasikan kapal besar yang dapat menampung ratusan tamu. Ini berarti hampir selalu ada ketersediaan, bahkan pada hari yang sama. Selama bulan-bulan puncak musim panas (Juli dan Agustus), pelayaran akhir pekan bisa terisi lebih cepat, tetapi pelayaran hari kerja jarang terjual habis sepenuhnya. Di musim semi dan musim gugur, tempat last minute praktis dijamin.'],
        ['p', 'Di Bosphorus Night, kami menjaga jalur WhatsApp kami terbuka dari pagi hingga larut malam khusus karena kami tahu banyak tamu memutuskan pada hari itu. Tim kami dapat mengkonfirmasi pemesanan Anda dalam hitungan menit setelah pesan Anda.'],
        ['h2', 'Tur Mana yang Berjalan Malam Ini?'],
        ['p', 'Pelayaran makan malam standar berangkat setiap hari dari dermaga Kabataş. Jadwal tipikal bekerja seperti ini: naik kapal dimulai sekitar pukul 19:30 hingga 20:00, kapal berangkat sekitar pukul 20:30, dan pelayaran berlangsung sekitar tiga jam, kembali ke dermaga sekitar pukul 23:30. Beberapa operator juga menawarkan pelayaran matahari terbenam yang berangkat sekitar pukul 17:30 dan kembali pada pukul 21:00 — meskipun untuk keputusan last minute di sore hari, pelayaran makan malam adalah pilihan yang lebih praktis.'],
        ['p', 'Kedua paket — Standar dan VIP — tersedia untuk pemesanan hari yang sama. Paket Standar dimulai dari €24 per orang dan termasuk makan malam 4 hidangan lengkap, minuman ringan, dan program hiburan. Anda tidak perlu memilih paket Anda di muka; cukup kirim pesan kepada kami di WhatsApp dan kami akan memandu Anda melalui pilihan-pilihannya.'],
        ['h2', 'Cara Menuju Kabataş'],
        ['p', 'Kabataş adalah salah satu titik paling mudah diakses di Istanbul. Jika Anda tinggal di Sultanahmet (kota tua), trem T1 berjalan langsung ke Kabataş — itu adalah pemberhentian terakhir. Perjalanan memakan waktu sekitar 25 menit. Dari Taksim, Anda dapat naik funicular (jalur F1), yang turun langsung ke Kabataş dalam waktu kurang dari tiga menit. Dari sisi Asia, naik feri ke Kabataş atau Beşiktaş. Taksi dari sebagian besar area pusat berharga antara 100-200 TL tergantung lalu lintas dan jarak.'],
        ['p', 'Kami merekomendasikan tiba di area dermaga paling lambat pukul 19:30. Ini memberi Anda waktu untuk menemukan titik pertemuan, bertemu anggota tim kami yang akan memandu Anda ke kapal, dan menetap di meja Anda sebelum keberangkatan.'],
        ['h2', 'Apa yang Harus Dibawa'],
        ['p', 'Sederhana saja. Bawa ponsel Anda untuk foto, jaket ringan atau cardigan untuk dek atas (bahkan malam musim panas bisa berangin di atas air), dan tunai atau kartu untuk pembayaran di kapal. Tidak ada aturan berpakaian, tetapi smart casual paling cocok — pikirkan kemeja atau blus yang bagus daripada celana pendek dan sandal jepit. Wanita mungkin ingin ikat rambut atau syal karena angin akan meningkat setelah kapal bergerak.'],
        ['h2', 'Proses Pemesanan'],
        ['p', 'Berikut cara kerjanya dalam tiga langkah cepat:'],
        ['ol', [
          ['<strong class="text-white/80">Kirim pesan kepada kami di WhatsApp</strong> — Beritahu kami berapa banyak tamu, paket yang Anda inginkan (atau minta rekomendasi), dan konfirmasikan tanggal malam ini.'],
          ['<strong class="text-white/80">Dapatkan konfirmasi instan</strong> — Kami membalas dalam hitungan menit dengan alamat titik pertemuan, waktu naik kapal, dan detail lain yang Anda butuhkan.'],
          ['<strong class="text-white/80">Datang dan nikmati</strong> — Tanpa deposit, tanpa pembayaran di muka, tanpa tiket cetak. Cukup tiba di titik pertemuan dan tim kami yang mengurus sisanya. Anda membayar langsung di kapal.'],
        ]],
        ['p', 'Benar-benar tidak ada risiko yang terlibat. Jika rencana Anda berubah dan Anda perlu membatalkan, beri tahu kami di WhatsApp — bahkan beberapa jam sebelum keberangkatan tidak masalah. Tidak ada biaya pembatalan, tidak ada pertanyaan yang diajukan.'],
        ['p', 'Jadi jika malam ini terasa seperti malam Bosphorus, jangan terlalu memikirkannya. Kirim pesan WhatsApp cepat, dan dalam beberapa jam Anda akan bersantap di atas air dengan cakrawala Istanbul bersinar di sekitar Anda.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap paket, harga, dan apa yang diharapkan.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam terbaik.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul', blurb: 'Tips penting untuk pelayar Bosphorus pertama kali.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran ramah keluarga dengan anak di bawah 6 tahun gratis.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Pelayaran Matahari Terbenam Bosphorus — Apa yang Diharapkan & Mengapa Layak',
      desc: 'Rasakan golden hour Istanbul dari air. Pelayaran makan malam matahari terbenam 3 jam dengan pertunjukan langsung, berangkat 17:30 dari Kabataş. Panduan lengkap di dalam.',
      h1: 'Pelayaran Matahari Terbenam Bosphorus — Apa yang Diharapkan & Mengapa Layak',
      alt: 'Matahari terbenam keemasan dramatis di atas Selat Bosphorus dengan siluet masjid',
      body: [
        ['p', 'Ada alasan mengapa para fotografer, pasangan, dan pelancong berpengalaman semua mengatakan hal yang sama: jika Anda ingin melihat Istanbul pada momen terindahnya, saksikan matahari terbenam dari Bosphorus. Cara cahaya mengubah air menjadi emas, mewarnai menara-menara dengan nuansa kuning, dan perlahan-lahan beralih ke cahaya malam kota — itu adalah salah satu pengalaman yang akan tetap bersama Anda lama setelah Anda meninggalkan Turki.'],
        ['p', 'Pelayaran matahari terbenam di Bosphorus mengambil tontonan alam ini dan mengubahnya menjadi pengalaman malam yang lengkap, dengan makan malam, hiburan langsung, dan pemandangan panorama yang tidak dapat ditandingi oleh bar rooftop mana pun.'],
        ['h2', 'Mengapa Jam Matahari Terbenam Begitu Ajaib'],
        ['p', 'Istanbul terletak di sekitar lintang 41 derajat utara, yang berarti waktu matahari terbenam bervariasi secara signifikan sepanjang tahun. Di musim panas, matahari terbenam sekitar pukul 20:30, melemparkan golden hour panjang yang membentang di atas air. Di musim semi dan musim gugur, matahari terbenam datang lebih awal — sekitar pukul 18:00 hingga 19:00 — menciptakan transisi yang lebih dramatis dan lebih cepat dari siang ke malam. Bagaimanapun, Bosphorus bertindak sebagai cermin alami, memantulkan warna langit dan memperbesar tontonan.'],
        ['p', 'Yang membuat matahari terbenam Bosphorus unik istimewa adalah cakrawalanya. Saat matahari turun di balik sisi Eropa, siluet Masjid Süleymaniye, Hagia Sophia, dan Masjid Biru muncul di langit oranye-merah muda. Sementara itu, sisi Asia menangkap cahaya hangat terakhir di atas istana tepi laut dan bukit-bukit hijaunya. Anda secara harfiah menyaksikan matahari terbenam di antara dua benua — sedikit tempat di Bumi yang dapat menawarkan perspektif itu.'],
        ['h2', 'Pengalaman Pelayaran'],
        ['p', 'Pelayaran makan malam matahari terbenam biasanya berangkat dari dermaga Kabataş sekitar pukul 17:30, meskipun waktu disesuaikan sedikit dengan musim untuk menangkap golden hour pada puncaknya. Kapal menuju utara di sepanjang selat, memberi Anda pemandangan Istana Dolmabahçe, Istana Çırağan, Masjid Ortaköy, dan Jembatan Bosphorus — semua dimandikan cahaya hangat.'],
        ['p', 'Makan malam disajikan saat matahari mulai terbenam. Menu menampilkan hidangan Turki dan internasional: piring meze dingin, daging panggang atau ikan segar, sayuran musiman, dan hidangan penutup tradisional seperti baklava. Minuman ringan termasuk dalam paket Standar, sementara opsi Premium dan VIP menambahkan minuman beralkohol — dan ada sesuatu yang sangat menyenangkan tentang menyesap segelas anggur Turki sambil menyaksikan langit berubah warna di atas air.'],
        ['p', 'Saat kegelapan jatuh, program hiburan dimulai. Tarian rakyat Turki tradisional, pertunjukan tari perut, musik langsung, dan terkadang upacara darwis berputar mengisi sisa jam. Transisi dari matahari terbenam keemasan ke pencahayaan malam kota mulus — satu momen Anda sedang menyaksikan cahaya terakhir memudar, dan berikutnya Anda dikelilingi oleh lampu berkilauan di tepi laut Istanbul.'],
        ['h2', 'Tips Fotografi'],
        ['p', 'Pelayaran matahari terbenam adalah impian fotografer, tetapi beberapa tips akan membantu Anda mendapatkan bidikan terbaik. Pertama, menuju dek atas sekitar 30 menit sebelum matahari terbenam — saat itulah cahaya paling hangat dan warna paling hidup. Foto ke arah barat (sisi Eropa) untuk siluet matahari terbenam di atas menara yang klasik. Gunakan pantulan air untuk menambah kedalaman pada komposisi Anda.'],
        ['p', 'Untuk fotografer smartphone, aktifkan mode HDR untuk menangkap langit cerah dan latar depan yang lebih gelap. Hindari menggunakan flash — itu akan merusak kehangatan alami cahaya. Mode panorama bekerja dengan indah untuk menangkap sapuan lebar cakrawala. Dan jangan lupa untuk meletakkan ponsel beberapa menit dan hanya menyaksikan. Beberapa momen lebih baik dijalani daripada difilmkan.'],
        ['h2', 'Apa yang Harus Dikenakan'],
        ['p', 'Dek atas akan berangin, terutama setelah kapal bergerak. Bahkan pada malam musim panas yang hangat, suhu turun terasa di atas air setelah matahari terbenam. Jaket ringan, cardigan, atau selendang sangat penting. Pakaian berlapis paling cocok — Anda mungkin nyaman dengan t-shirt selama golden hour tetapi bersyukur untuk lapisan tambahan setelah kegelapan tiba. Sepatu dengan beberapa cengkeraman lebih disukai daripada hak tinggi atau sandal sol halus, karena dek bisa sedikit licin dari semprotan laut.'],
        ['h2', 'Pelayaran Matahari Terbenam vs. Pelayaran Makan Malam — Apa Bedanya?'],
        ['p', 'Perbedaan utama adalah waktu dan suasana. Pelayaran matahari terbenam berangkat di sore hari dan memberi Anda pengalaman golden hour ditambah transisi ke malam. Pelayaran makan malam standar berangkat lebih lambat (sekitar 20:00-20:30) dan sepenuhnya merupakan pengalaman malam — lampu kota, jembatan yang diterangi, dan suasana yang lebih gelap dan lebih romantis.'],
        ['p', 'Jika Anda memilih di antara keduanya, pertimbangkan apa yang paling penting bagi Anda. Pelayaran matahari terbenam menawarkan peluang fotografi terbaik dan pengalaman visual yang lebih bervariasi (siang ke malam). Pelayaran makan malam adalah pilihan klasik untuk malam romantis atau malam perayaan, dengan kota sepenuhnya diterangi dari awal. Keduanya termasuk makan malam dan program hiburan lengkap.'],
        ['p', 'Bagi mereka yang punya waktu, kombinasi ideal adalah pelayaran matahari terbenam pada satu malam dan pelayaran makan malam pada malam lainnya — keduanya benar-benar pengalaman yang berbeda. Tetapi jika Anda hanya bisa memilih satu, pelayaran matahari terbenam menawarkan sesuatu yang benar-benar unik: kesempatan untuk menyaksikan Istanbul berubah dari emas menjadi perak saat dua benua memudar dari siang ke malam di sekitar Anda.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap paket, harga, dan apa yang diharapkan.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Last Minute', blurb: 'Pesan pelayaran hari yang sama dengan konfirmasi WhatsApp instan.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul', blurb: 'Tips penting untuk pelayar Bosphorus pertama kali.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran ramah keluarga dengan anak di bawah 6 tahun gratis.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul Anda',
      desc: 'Merencanakan pelayaran Bosphorus? Berikut 10 tips penting: apa yang harus dikenakan, dibawa, diharapkan, dan cara mendapatkan pengalaman terbaik di tur kapal Istanbul Anda.',
      h1: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul Anda',
      alt: 'Pemandangan panorama kapal pelayaran di Bosphorus dengan cakrawala Istanbul',
      body: [
        ['p', 'Pelayaran Bosphorus adalah salah satu pengalaman yang hampir setiap pengunjung Istanbul masukkan ke dalam daftar mereka — dan dengan alasan yang bagus. Tetapi seperti pengalaman perjalanan apa pun, mengetahui beberapa hal di muka dapat membuat perbedaan antara malam yang baik dan yang luar biasa. Berikut sepuluh tips penting dari tim kami untuk membantu Anda memaksimalkan tur kapal Istanbul Anda.'],
        ['h2_sm', '1. Berpakaian Berlapis'],
        ['p', 'Ini adalah saran nomor satu yang kami berikan kepada setiap tamu. Malam di Istanbul bisa sangat sejuk di atas air, bahkan di musim panas. Suhu di dek atas biasanya 5 hingga 8 derajat lebih rendah daripada yang Anda rasakan di darat, dan angin dari pergerakan kapal membuatnya terasa lebih sejuk. Jaket ringan, cardigan, atau pashmina sangat penting. Selama bulan-bulan musim semi dan musim gugur, jaket yang tepat direkomendasikan. Anda akan senang membawanya saat ingin melangkah keluar dan menikmati pemandangan dari dek terbuka.'],
        ['h2_sm', '2. Bawa Kamera (dan Jaga Ponsel Anda Terisi)'],
        ['p', 'Bosphorus di malam hari sangat fotogenik. Istana yang diterangi, jembatan yang dirangkai dengan lampu warna-warni, masjid yang diterangi dari bawah, dan cakrawala kota yang tercermin di atas air gelap — akan ada puluhan momen yang layak diabadikan. Pastikan ponsel Anda terisi penuh sebelum naik kapal, atau bawa power bank kecil. Jika Anda memiliki kamera dengan mode malam atau kemampuan cahaya rendah, bawa. Beberapa bidikan terbaik datang dari dek atas saat kapal melewati Jembatan Bosphorus.'],
        ['h2_sm', '3. Tiba Setidaknya 20 Menit Lebih Awal'],
        ['p', 'Boarding adalah first-come, first-served untuk pemilihan meja (kecuali Anda telah memesan paket VIP dengan meja jendela yang dipesan). Tiba 20 menit sebelum waktu boarding yang dinyatakan memberi Anda kesempatan terbaik untuk mendapatkan meja dekat jendela atau dekat panggung. Tim titik pertemuan kami akan ada di sana untuk memandu Anda ke kapal, tetapi jika Anda tiba tepat pada waktu keberangkatan, Anda mungkin berakhir di meja yang kurang ideal.'],
        ['h2_sm', '4. Pilih Waktu Tur yang Tepat'],
        ['p', 'Biasanya ada dua opsi pelayaran: pelayaran matahari terbenam (berangkat sekitar 17:30) dan pelayaran makan malam (berangkat sekitar 20:00-20:30). Pelayaran matahari terbenam memberi Anda pengalaman golden hour dan transisi dari siang ke malam — ideal untuk fotografer dan mereka yang lebih suka malam yang lebih awal. Pelayaran makan malam adalah pengalaman malam klasik dengan kota sepenuhnya diterangi. Keduanya termasuk makan malam lengkap dan program hiburan. Jika ini pertama kali Anda, pelayaran makan malam adalah pilihan paling populer.'],
        ['h2_sm', '5. Pesan via WhatsApp untuk Respons Tercepat'],
        ['p', 'Meskipun Anda dapat menemukan pelayaran Bosphorus melalui berbagai platform online, memesan langsung melalui WhatsApp adalah pilihan tercepat dan paling fleksibel. Anda mendapatkan respons instan, dapat mengajukan pertanyaan secara real time, dan menerima rekomendasi pribadi berdasarkan ukuran grup dan preferensi Anda. Tidak ada formulir untuk diisi dan tidak ada menunggu konfirmasi email. Cukup kirim pesan dengan tanggal Anda, jumlah tamu, dan paket yang Anda inginkan, dan Anda akan memiliki pemesanan yang dikonfirmasi dalam hitungan menit.'],
        ['h2_sm', '6. Tidak Ada Pembayaran di Muka yang Diperlukan'],
        ['p', 'Ini mengejutkan banyak pelancong, tetapi operator pelayaran Bosphorus yang bereputasi — termasuk Bosphorus Night — tidak memerlukan pembayaran di muka. Anda memesan tempat Anda melalui WhatsApp, datang ke dermaga, dan membayar di kapal. Ini berarti tidak ada risiko keuangan bagi Anda. Jika rencana Anda berubah, Anda cukup memberi tahu kami dan tidak ada biaya. Pembayaran di kapal dapat dilakukan dengan tunai (Lira Turki, Euro, atau Dolar AS) atau dengan kartu kredit/debit.'],
        ['h2_sm', '7. Mabuk Laut Jarang Menjadi Masalah'],
        ['p', 'Bosphorus adalah selat, bukan laut terbuka. Airnya relatif tenang, terutama dibandingkan dengan air laut. Kapal pelayaran besar dan stabil, dan rute tetap berada di selat yang terlindung sepanjang waktu. Sebagian besar tamu tidak mengalami ketidaknyamanan gerakan sama sekali. Jika Anda sangat sensitif, duduk di tengah kapal (bukan di haluan atau buritan) memberikan perjalanan yang paling stabil. Memiliki makanan di perut juga membantu — jadi makan malam sebenarnya adalah pencegahan yang baik.'],
        ['h2_sm', '8. Kenali Tempat Foto Terbaik'],
        ['p', 'Tiga momen yang paling banyak difoto dalam pelayaran adalah: melewati di bawah Jembatan Bosphorus (lampu berada tepat di atas Anda dan terpantul di atas air), pemandangan Maiden\'s Tower berdiri sendiri di tengah selat, dan pemandangan panorama cakrawala kota tua dengan masjid dan menaranya. Dek atas menawarkan pemandangan tanpa halangan terbaik untuk foto. Naik di antara hidangan atau selama jeda dalam hiburan — staf akan menahan meja Anda untuk Anda.'],
        ['h2_sm', '9. Anak-anak Diterima'],
        ['p', 'Pelayaran makan malam Bosphorus ramah keluarga. Anak di bawah 6 tahun berlayar gratis, dan anak usia 6 hingga 12 tahun membayar setengah harga. Program hiburan — terutama tarian rakyat dan musik — cenderung mempesona anak-anak. Kapal aman dan luas, dengan area makan tertutup dan dek atas yang dijaga. Yang mengatakan, awasi anak-anak yang lebih muda di dekat pegangan dan tangga. Jika Anda bepergian sebagai keluarga, beri tahu kami saat memesan sehingga kami dapat mengatur meja yang sesuai.'],
        ['h2_sm', '10. Pembatalan Gratis — Selalu'],
        ['p', 'Hidup terjadi. Cuaca berubah, tingkat energi turun, rencana bergeser. Dengan Bosphorus Night, pembatalan selalu gratis. Baik Anda membatalkan seminggu sebelumnya atau beberapa jam sebelum keberangkatan, tidak ada biaya dan tidak ada hukuman. Cukup kirim pesan WhatsApp kepada kami. Ini adalah salah satu keuntungan dari model tanpa pembayaran di muka — karena Anda belum membayar apa pun, membatalkan semudah pesan cepat. Kami lebih suka Anda datang ketika Anda sedang dalam suasana hati untuk menikmatinya.'],
        ['p_top', 'Dengan sepuluh tips ini, Anda siap untuk memiliki pengalaman pelayaran Bosphorus terbaik. Kombinasi keindahan malam Istanbul, makan malam Turki lengkap, dan hiburan langsung menjadikan ini salah satu malam paling berkesan yang dapat Anda alami di mana saja di dunia. Hanya ingat: pakaian berlapis, ponsel terisi, dan tiba lebih awal.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap paket, harga, dan apa yang diharapkan.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Last Minute', blurb: 'Pesan pelayaran hari yang sama dengan konfirmasi WhatsApp instan.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam terbaik.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran ramah keluarga dengan anak di bawah 6 tahun gratis.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Pelayaran Bosphorus dengan Anak — Panduan Ramah Keluarga Istanbul',
      desc: 'Apakah pelayaran makan malam Bosphorus cocok untuk anak-anak? Ya! Anak di bawah 6 tahun gratis, 6-12 setengah harga. Tips keluarga, apa yang diharapkan, dan cara memesan.',
      h1: 'Pelayaran Bosphorus dengan Anak — Panduan Ramah Keluarga',
      alt: 'Keluarga menikmati dek terbuka pelayaran Bosphorus',
      body: [
        ['p', 'Salah satu pertanyaan paling umum yang kami terima dari keluarga yang merencanakan perjalanan Istanbul mereka adalah: "Apakah pelayaran makan malam Bosphorus cocok untuk anak-anak?" Jawabannya adalah ya yang yakin. Bahkan, banyak keluarga memberi tahu kami bahwa pelayaran adalah sorotan seluruh liburan mereka — bukan hanya untuk orang tua, tetapi juga untuk anak-anak. Berikut semua yang perlu Anda ketahui tentang membawa keluarga Anda dalam pelayaran Bosphorus.'],
        ['h2', 'Kebijakan Usia dan Harga'],
        ['p', 'Harga kami untuk anak-anak sederhana dan ramah keluarga. Anak usia 0–3 berlayar sepenuhnya gratis — tidak ada tiket, tidak ada biaya. Anak usia 4–8 membayar setengah harga dewasa. Anak usia 9 ke atas dikenakan tarif dewasa penuh. Ini berlaku untuk kedua paket: Standar dan VIP.'],
        ['p', 'Untuk keluarga empat orang dengan dua anak usia 4–8, pelayaran makan malam Bosphorus berharga serendah €72 total untuk paket Standar — itu dua tiket dewasa masing-masing €24 ditambah dua tiket anak setengah harga masing-masing €12. Untuk malam berkesan di atas air dengan seluruh keluarga, itu merupakan nilai yang sangat baik dibandingkan dengan restoran di area wisata.'],
        ['h2', 'Apakah Aman untuk Anak-anak?'],
        ['p', 'Kapal pelayaran yang digunakan untuk tur makan malam Bosphorus adalah kapal komersial yang besar dan stabil — bukan kapal pribadi kecil. Mereka memiliki area makan tertutup di dek bawah dan area pandang terbuka di dek atas dengan pegangan dan penghalang keselamatan yang tepat. Bosphorus adalah selat dengan air yang relatif tenang, sehingga perjalanannya halus dan stabil. Mabuk laut sangat jarang terjadi, bahkan di antara anak-anak.'],
        ['p', 'Yang mengatakan, seperti lingkungan tepi laut mana pun, akal sehat berlaku. Awasi balita di dekat tangga dan area dek terbuka. Awak terbiasa memiliki keluarga di kapal dan akan membantu memastikan anak-anak tetap aman, tetapi pengawasan orang tua selalu menjadi garis pertahanan pertama.'],
        ['h2', 'Apa yang Paling Disukai Anak-anak'],
        ['p', 'Anda mungkin berpikir pelayaran makan malam terutama adalah pengalaman dewasa, tetapi anak-anak secara konsisten menanggapi beberapa elemen malam. Hiburan langsung adalah hit terbesar — kostum tari rakyat berwarna-warni, musik energik, dan terutama pertunjukan tari perut cenderung memikat anak-anak dari segala usia. Banyak anak akhirnya bertepuk tangan, menari di kursi mereka, atau mencoba meniru gerakan.'],
        ['p', 'Perjalanan kapal itu sendiri menyenangkan untuk anak-anak yang belum pernah berada di kapal besar. Menyaksikan jembatan yang diterangi lewat di atas kepala, melihat Maiden\'s Tower, dan melihat lampu kota dari atas air adalah semua pengalaman yang benar-benar menggetarkan bagi mata muda. Dek atas, di mana anak-anak dapat merasakan angin dan melihat air mengalir, biasanya menjadi tempat favorit.'],
        ['p', 'Anak yang lebih tua (8 dan ke atas) sering menjadi tertarik pada landmark di sepanjang rute. Menunjukkan istana, masjid, dan benteng saat kapal melewatinya dapat mengubah pelayaran menjadi pelajaran sejarah informal — terutama jika Anda telah mengunjungi situs-situs ini pada siang hari.'],
        ['h2', 'Menu untuk Anak-anak'],
        ['p', 'Menu makan malam adalah hidangan Turki dan internasional set. Meskipun tidak ada menu anak-anak yang terpisah, pilihannya cukup luas sehingga sebagian besar anak menemukan banyak yang bisa dimakan. Roti, nasi, ayam panggang, dan salad semuanya ringan dan akrab. Pilihan meze dingin termasuk item seperti hummus dan keju yang biasanya dinikmati anak-anak. Hidangan penutup — terutama baklava dan kue manis — secara universal populer dengan tamu yang lebih muda.'],
        ['p', 'Jika anak Anda memiliki kebutuhan diet atau alergi tertentu, beri tahu kami saat memesan dan kami dapat memeriksa dengan dapur di muka. Minuman ringan, air, dan jus termasuk dalam semua paket, sehingga anak-anak tidak akan haus.'],
        ['h2', 'Tips untuk Keluarga'],
        ['ul', [
          ['<strong class="text-white/80">Bawa jaket ringan untuk setiap anak</strong> — Dek atas berangin dan anak-anak sering ingin menghabiskan waktu di luar menyaksikan air dan lampu.'],
          ['<strong class="text-white/80">Pertimbangkan pelayaran matahari terbenam</strong> — Berangkat lebih awal (sekitar 17:30) dan kembali pada 21:00, yang bekerja lebih baik untuk jadwal tidur anak-anak yang lebih muda daripada pelayaran makan malam yang kembali sekitar 23:30.'],
          ['<strong class="text-white/80">Tiba lebih awal untuk meja yang baik</strong> — Meja samping jendela dekat panggung memberi anak-anak pengalaman terbaik. Paket VIP menjamin ini, tetapi tiba 20 menit lebih awal untuk Standar atau Premium juga membantu.'],
          ['<strong class="text-white/80">Bawa pengalih perhatian kecil</strong> — Meskipun hiburan dan pemandangan menjaga sebagian besar anak terlibat, memiliki buku mewarnai kecil atau tablet yang dimuat dengan film dapat membantu selama momen yang lebih tenang untuk anak yang sangat muda.'],
          ['<strong class="text-white/80">Gunakan toilet sebelum naik</strong> — Kapal memiliki toilet, tetapi bisa sibuk selama momen puncak. Kunjungan cepat sebelum keberangkatan membuat jam pertama lebih lancar.'],
        ]],
        ['h2', 'Cara Memesan sebagai Keluarga'],
        ['p', 'Memesan itu sederhana. Kirim pesan WhatsApp kepada kami dengan jumlah orang dewasa, jumlah dan usia anak-anak, tanggal yang Anda inginkan, dan paket mana yang menarik bagi Anda. Kami akan menghitung total (mengingat: di bawah 6 gratis, 6-12 setengah harga) dan mengkonfirmasi ketersediaan secara instan. Tidak diperlukan pembayaran di muka — Anda membayar di kapal.'],
        ['p', 'Jika Anda tidak yakin paket mana yang paling cocok untuk keluarga Anda, tanyakan saja. Untuk sebagian besar keluarga, paket Standar menawarkan segala yang Anda butuhkan. Peningkatan Premium layak jika orang dewasa ingin menikmati minuman beralkohol dengan makan malam. Paket VIP dengan meja jendela yang dipesan ideal untuk keluarga yang menginginkan kursi baris depan yang dijamin tanpa tiba lebih awal.'],
        ['p', 'Pelayaran Bosphorus adalah salah satu pengalaman Istanbul yang langka yang benar-benar bekerja untuk setiap usia. Anak-anak Anda akan menyukai lampu, musik, dan petualangan berada di atas air di malam hari. Anda akan menyukai pemandangan, makanan, dan beberapa jam dirawat sementara seluruh keluarga bersenang-senang bersama.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap paket, harga, dan apa yang diharapkan.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Hal yang Perlu Diketahui Sebelum Tur Kapal Istanbul', blurb: 'Tips penting untuk pelayar Bosphorus pertama kali.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam terbaik.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Last Minute', blurb: 'Pesan pelayaran hari yang sama dengan konfirmasi WhatsApp instan.' },
      },
    },
  },

  ms: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: 'Tip pelayaran Bosphorus, panduan, dan pengetahuan orang dalam. Rancang pelayaran makan malam Istanbul yang sempurna dengan artikel pakar kami.',
      ogDesc: 'Tip pelayaran Bosphorus, panduan, dan pengetahuan orang dalam. Rancang pelayaran makan malam Istanbul yang sempurna.',
      h1: 'Blog',
      lead: 'Tip pelayaran, panduan Istanbul, dan pengetahuan orang dalam untuk membantu anda merancang pengalaman Bosphorus yang sempurna.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 April 2026', title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Semua yang anda perlu tahu tentang pengalaman pelayaran makan malam terbaik di Istanbul. Dari pakej dan harga hingga hiburan dan pemandangan malam yang menakjubkan.', alt: 'Kapal pelayaran makan malam Bosphorus pada waktu malam dengan jambatan bercahaya' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 April 2026', title: 'Pelayaran Bosphorus Malam Ini — Panduan Saat Akhir', blurb: 'Ingin belayar di Bosphorus malam ini? Berikut semua yang anda perlu tahu tentang tempahan saat akhir, ketersediaan, dan cara mengamankan tempat anda.', alt: 'Interior dewan makan pelayaran Bosphorus mewah' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 April 2026', title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Rasai golden hour Istanbul dari air. Semua tentang pelayaran makan malam matahari terbenam — masa, apa yang dijangka, dan mengapa ia tidak dapat dilupakan.', alt: 'Matahari terbenam dramatik di atas Selat Bosphorus' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 April 2026', title: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda', blurb: 'Merancang pelayaran Bosphorus? Dari apa yang perlu dipakai hingga tip mabuk laut, berikut 10 perkara penting yang setiap pemula perlu tahu.', alt: 'Pandangan panorama bot yang belayar di Bosphorus' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 April 2026', title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Adakah pelayaran makan malam sesuai untuk kanak-kanak? Sudah tentu. Anak di bawah 6 belayar percuma, umur 6-12 separuh harga. Berikut panduan perancangan keluarga lengkap anda.', alt: 'Keluarga menikmati dek pelayaran Bosphorus' },
      ],
      readMore: 'Baca Lagi →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026 — Panduan Lengkap',
      desc: 'Semua yang anda perlu tahu tentang pelayaran makan malam terbaik di Istanbul. Pakej dari €24, persembahan langsung Turki, pemandangan malam menakjubkan. Tempah serta-merta.',
      h1: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026',
      alt: 'Kapal pelayaran mewah meluncur di bawah Jambatan Bosphorus bercahaya pada waktu malam',
      body: [
        ['p', 'Istanbul adalah salah satu daripada beberapa bandar di dunia di mana anda boleh makan di atas air sambil menyaksikan dua benua bercahaya di sekeliling anda. Pelayaran makan malam Bosphorus bukan sekadar hidangan — ia adalah pengalaman malam paling ikonik yang ditawarkan bandar ini. Sama ada anda melawat Istanbul buat kali pertama atau kembali untuk perjalanan lain, menghabiskan malam di Bosphorus adalah sesuatu yang akan anda ingati selama bertahun-tahun.'],
        ['h2', 'Apa yang Menjadikannya Istimewa'],
        ['p', 'Selat Bosphorus adalah laluan air sepanjang 30 kilometer yang memisahkan Eropah dan Asia. Pada waktu malam, istana, masjid, dan jambatan bersejarah di sepanjang pantainya diterangi secara spektakular. Dari meja anda di atas kapal, anda akan melihat Istana Dolmabahçe bercahaya putih terhadap latar bukit gelap, Maiden\'s Tower berdiri sendirian di air dengan cahaya kuning hangatnya, dan dua jambatan gantung besar — Jambatan Bosphorus dan Jambatan Fatih Sultan Mehmet — terbentang antara dua benua dalam reben warna.'],
        ['p', 'Laluan pelayaran biasanya bertolak dari jeti Kabataş, berdekatan kawasan Istana Dolmabahçe. Kapal menuju ke utara di sepanjang pantai Eropah, melepasi rumah agam tepi laut yang dikenali sebagai yalı, Istana Çırağan, dan Kubu Rumeli. Ia kemudiannya berpaling ke selatan di sebelah Asia, menawarkan pemandangan Istana Beylerbeyi dan tepi laut Üsküdar sebelum berpusing kembali. Keseluruhan perjalanan mengambil masa kira-kira tiga hingga empat jam, bergantung pada pakej.'],
        ['h2', 'Pengalaman Makan Malam'],
        ['p', 'Makan malam disajikan sebagai menu set yang menggabungkan masakan Turki dan antarabangsa. Anda boleh menjangkakan pilihan pembuka selera sejuk dan panas — hummus, daun anggur diisi, salad bermusim — diikuti dengan hidangan utama daging panggang atau ikan dengan nasi dan sayur dipanggang. Pencuci mulut biasanya manisan klasik Turki seperti baklava atau kadayıf, dipasangkan dengan teh atau kopi Turki. Minuman ringan dan air termasuk dalam semua pakej, sementara minuman beralkohol tersedia dengan pilihan Premium dan VIP.'],
        ['h2', 'Hiburan Langsung'],
        ['p', 'Program hiburan adalah salah satu daya tarikan utama. Jangkakan barisan penuh tarian rakyat Turki tradisional yang dipersembahkan dalam kostum serantau berwarna-warni, persembahan tarian perut yang bertenaga, muzik langsung daripada kumpulan Turki, dan set DJ yang mengekalkan suasana semasa malam berlanjut. Sesetengah pelayaran turut menampilkan upacara darwis berpusing — amalan rohani Sufi yang mempesonakan yang telah menjadi sebahagian daripada budaya Turki selama berabad-abad. Persembahan berlangsung selama kira-kira 90 minit dan direka untuk memberi tetamu antarabangsa rasa kaya seni persembahan Turki.'],
        ['h2', 'Pakej dan Harga'],
        ['p', 'Di Bosphorus Night kami menawarkan dua pakej utama, dengan tambahan pilihan untuk minuman, pengangkutan hotel, dan acara istimewa:'],
        ['ul', [
          ['<strong class="text-white/80">Pelayaran Makan Malam Standard (dari €24)</strong> — Makan malam 4 hidangan penuh, minuman ringan, hiburan langsung, persembahan tarian rakyat dan tarian perut, DJ di dek atas. Pilihan paling popular untuk pasangan, keluarga, dan pengembara solo.'],
          ['<strong class="text-white/80">Pelayaran Makan Malam VIP (dari €55)</strong> — Menu diperluas termasuk daging premium (rib-eye, beef tenderloin), 15+ meze Turki, tempat duduk dekat pentas, dan perkhidmatan dipertingkatkan. Sempurna untuk acara istimewa dan ulang tahun.'],
        ]],
        ['p_sm', 'Tambahan: minuman tanpa had (€30/orang), pengangkutan hotel (€10/orang), penataan meja romantis (€15/tempahan). Bayar di kapal — tiada bayaran pendahuluan diperlukan.'],
        ['p', 'Kanak-kanak berumur 6 hingga 12 tahun biasanya membayar separuh harga, dan kanak-kanak di bawah 6 tahun percuma. Tiada bayaran pendahuluan diperlukan — anda bayar di kapal, yang menghapuskan sebarang risiko tempahan.'],
        ['h2', 'Cara Menempah'],
        ['p', 'Cara paling mudah untuk menempah ialah melalui WhatsApp. Hanya hantar mesej kepada kami dengan tarikh pilihan anda, bilangan tetamu, dan pakej yang menarik minat anda. Pasukan kami membalas dalam masa beberapa minit, mengesahkan ketersediaan, dan menghantar semua butiran kepada anda — titik perjumpaan, masa menaiki, dan apa yang dijangka. Tiada borang pembayaran dalam talian dan tiada deposit. Anda membayar tunai atau kad terus di kapal.'],
        ['h2', 'Tip untuk Pengalaman Terbaik'],
        ['p', 'Tiba di jeti sekurang-kurangnya 20 minit sebelum berlepas untuk mendapatkan meja yang baik. Berpakaian smart casual — kapal tidak terlalu formal, tetapi anda akan berasa lebih selesa dengan sesuatu yang sedikit di atas pakaian pantai. Bawa jaket nipis atau syal kerana dek atas boleh berangin walaupun pada musim panas. Dan pastikan telefon anda dicas — anda pasti mahu menangkap pemandangan, terutamanya semasa kapal melepasi jambatan bercahaya.'],
        ['p', 'Pelayaran makan malam Bosphorus, tanpa keterlaluan, adalah cara terbaik untuk merasai Istanbul pada waktu malam. Kombinasi makanan, budaya langsung, dan pemandangan ufuk bandar yang dipantulkan di atas air gelap tidak seperti yang lain. Jika anda hanya melakukan satu "malam besar" semasa perjalanan Istanbul anda, jadikan ini yang itu.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Saat Akhir', blurb: 'Tempah pelayaran hari yang sama dengan pengesahan WhatsApp serta-merta.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam muktamad.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda', blurb: 'Tip penting untuk pelayar Bosphorus kali pertama.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran mesra keluarga dengan anak di bawah 6 percuma.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Pelayaran Bosphorus Malam Ini — Panduan Tempahan Saat Akhir Istanbul',
      desc: 'Ingin belayar di Bosphorus malam ini? Berikut cara menempah pelayaran makan malam saat akhir di Istanbul. Ketersediaan hari sama, tempahan WhatsApp serta-merta.',
      h1: 'Pelayaran Bosphorus Malam Ini — Panduan Tempahan Saat Akhir',
      alt: 'Dewan makan elegan pelayaran makan malam Bosphorus',
      body: [
        ['p', 'Sekarang pukul 3 petang dan anda baru memutuskan mahu melakukan sesuatu yang istimewa malam ini. Mungkin anda tiba di Istanbul pagi ini dan mahu memanfaatkan malam pertama anda. Mungkin cuaca ternyata lebih baik daripada yang dijangka dan malam di atas air tiba-tiba terdengar sempurna. Apa pun alasannya, soalannya mudah: bolehkah anda masih menempah pelayaran makan malam Bosphorus untuk malam ini?'],
        ['p', 'Jawapan ringkasnya ialah <strong class="text-white/90">ya</strong>. Tempahan hari sama bukan sahaja mungkin — ia adalah perkara biasa. Berikut semua yang anda perlu tahu tentang menempah pelayaran saat akhir di Istanbul.'],
        ['h2', 'Bolehkah Anda Benar-benar Menempah Hari Sama?'],
        ['p', 'Sudah pasti. Tidak seperti banyak aktiviti pelancong yang memerlukan tempahan awal, pelayaran makan malam Bosphorus mengendalikan kapal besar yang boleh menampung beratus-ratus tetamu. Ini bermakna hampir selalu ada ketersediaan, walaupun pada hari sama. Semasa bulan puncak musim panas (Julai dan Ogos), pelayaran hujung minggu boleh dipenuhi lebih cepat, tetapi pelayaran hari bekerja jarang habis dijual sepenuhnya. Pada musim bunga dan musim luruh, tempat saat akhir hampir dijamin.'],
        ['p', 'Di Bosphorus Night, kami mengekalkan talian WhatsApp kami terbuka dari awal pagi hingga lewat malam khusus kerana kami tahu ramai tetamu membuat keputusan pada hari tersebut. Pasukan kami boleh mengesahkan tempahan anda dalam beberapa minit selepas mesej anda.'],
        ['h2', 'Tur Mana yang Berjalan Malam Ini?'],
        ['p', 'Pelayaran makan malam standard bertolak setiap hari dari jeti Kabataş. Jadual biasa berfungsi seperti ini: menaiki kapal bermula sekitar 19:30 hingga 20:00, kapal bertolak kira-kira pukul 20:30, dan pelayaran berlangsung kira-kira tiga jam, kembali ke jeti sekitar pukul 23:30. Sesetengah pengendali juga menawarkan pelayaran matahari terbenam yang bertolak sekitar 17:30 dan kembali pada 21:00 — walaupun untuk keputusan saat akhir pada petang hari, pelayaran makan malam adalah pilihan yang lebih praktikal.'],
        ['p', 'Kedua-dua pakej — Standard dan VIP — tersedia untuk tempahan hari sama. Pakej Standard bermula dari €24 setiap orang dan termasuk makan malam 4 hidangan penuh, minuman ringan, dan program hiburan. Anda tidak perlu memilih pakej anda terlebih dahulu; cukup hantar mesej kepada kami di WhatsApp dan kami akan memandu anda melalui pilihan.'],
        ['h2', 'Cara ke Kabataş'],
        ['p', 'Kabataş adalah salah satu titik paling mudah diakses di Istanbul. Jika anda menginap di Sultanahmet (bandar lama), trem T1 berjalan terus ke Kabataş — ia adalah perhentian terakhir. Perjalanan mengambil masa kira-kira 25 minit. Dari Taksim, anda boleh menaiki funikular (laluan F1), yang turun terus ke Kabataş dalam masa kurang daripada tiga minit. Dari sebelah Asia, naik feri ke Kabataş atau Beşiktaş. Teksi dari kebanyakan kawasan tengah berharga antara 100-200 TL bergantung pada lalu lintas dan jarak.'],
        ['p', 'Kami mengesyorkan tiba di kawasan jeti selewat-lewatnya 19:30. Ini memberi anda masa untuk mencari titik perjumpaan, bertemu ahli pasukan kami yang akan memandu anda ke kapal, dan menetap di meja anda sebelum berlepas.'],
        ['h2', 'Apa yang Perlu Dibawa'],
        ['p', 'Pastikan ringkas. Bawa telefon anda untuk foto, jaket nipis atau cardigan untuk dek atas (walaupun malam musim panas boleh berangin di atas air), dan tunai atau kad untuk bayaran di kapal. Tiada kod pakaian, tetapi smart casual paling sesuai — fikirkan baju kemeja atau blaus yang bagus berbanding seluar pendek dan selipar. Wanita mungkin mahukan pengikat rambut atau syal kerana angin meningkat selepas kapal bergerak.'],
        ['h2', 'Proses Tempahan'],
        ['p', 'Berikut cara ia berfungsi dalam tiga langkah pantas:'],
        ['ol', [
          ['<strong class="text-white/80">Hantar mesej kepada kami di WhatsApp</strong> — Beritahu kami berapa ramai tetamu, pakej pilihan anda (atau minta cadangan), dan sahkan tarikh malam ini.'],
          ['<strong class="text-white/80">Dapatkan pengesahan serta-merta</strong> — Kami membalas dalam beberapa minit dengan alamat titik perjumpaan, masa menaiki, dan butiran lain yang anda perlukan.'],
          ['<strong class="text-white/80">Hadir dan nikmati</strong> — Tiada deposit, tiada bayaran pendahuluan, tiada tiket bercetak. Hanya tiba di titik perjumpaan dan pasukan kami menguruskan selebihnya. Anda bayar terus di kapal.'],
        ]],
        ['p', 'Benar-benar tiada risiko terlibat. Jika rancangan anda berubah dan anda perlu membatalkan, beritahu sahaja kami di WhatsApp — walaupun beberapa jam sebelum berlepas tiada masalah. Tiada caj pembatalan, tiada soalan ditanya.'],
        ['p', 'Jadi jika malam ini terasa seperti malam Bosphorus, jangan terlalu memikirkannya. Hantar mesej WhatsApp pantas, dan dalam beberapa jam anda akan makan di atas air dengan ufuk Istanbul bersinar di sekeliling anda.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap pakej, harga, dan apa yang dijangka.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam muktamad.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda', blurb: 'Tip penting untuk pelayar Bosphorus kali pertama.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran mesra keluarga dengan anak di bawah 6 percuma.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Pelayaran Matahari Terbenam Bosphorus — Apa yang Dijangka & Mengapa Berbaloi',
      desc: 'Rasai golden hour Istanbul dari air. Pelayaran makan malam matahari terbenam 3 jam dengan persembahan langsung, bertolak 17:30 dari Kabataş. Panduan lengkap di dalam.',
      h1: 'Pelayaran Matahari Terbenam Bosphorus — Apa yang Dijangka & Mengapa Berbaloi',
      alt: 'Matahari terbenam keemasan dramatik di atas Selat Bosphorus dengan siluet masjid',
      body: [
        ['p', 'Ada sebab mengapa jurugambar, pasangan, dan pengembara berpengalaman semua mengatakan perkara yang sama: jika anda mahu melihat Istanbul pada saat paling cantik, saksikan matahari terbenam dari Bosphorus. Cara cahaya menukar air menjadi emas, mewarna menara dengan warna kuning, dan perlahan-lahan beralih kepada cahaya petang bandar — ia adalah salah satu pengalaman yang akan kekal dengan anda lama selepas anda meninggalkan Turki.'],
        ['p', 'Pelayaran matahari terbenam di Bosphorus mengambil tontonan alam ini dan mengubahnya menjadi pengalaman malam penuh, lengkap dengan makan malam, hiburan langsung, dan pemandangan panorama yang tidak dapat ditandingi oleh mana-mana bar bumbung.'],
        ['h2', 'Mengapa Waktu Matahari Terbenam Itu Ajaib'],
        ['p', 'Istanbul terletak pada kira-kira latitud 41 darjah utara, bermakna masa matahari terbenam berbeza dengan ketara sepanjang tahun. Pada musim panas, matahari terbenam kira-kira pukul 20:30, melontarkan golden hour panjang yang merentangi air. Pada musim bunga dan musim luruh, matahari terbenam datang lebih awal — sekitar 18:00 hingga 19:00 — mencipta peralihan yang lebih dramatik dan lebih pantas dari siang ke malam. Walau apa pun, Bosphorus bertindak sebagai cermin semula jadi, memantulkan warna langit dan memperbesar tontonan.'],
        ['p', 'Yang menjadikan matahari terbenam Bosphorus unik istimewa ialah ufuknya. Apabila matahari turun di belakang sisi Eropah, siluet Masjid Süleymaniye, Hagia Sophia, dan Masjid Biru muncul terhadap langit oren-merah jambu. Sementara itu, sisi Asia menangkap cahaya hangat terakhir di atas istana tepi laut dan bukit-bukit hijaunya. Anda secara harfiah menyaksikan matahari terbenam antara dua benua — sedikit tempat di Bumi boleh menawarkan perspektif itu.'],
        ['h2', 'Pengalaman Pelayaran'],
        ['p', 'Pelayaran makan malam matahari terbenam biasanya bertolak dari jeti Kabataş sekitar 17:30, walaupun masa diselaraskan sedikit dengan musim untuk menangkap golden hour pada puncaknya. Kapal menuju ke utara di sepanjang selat, memberi anda pemandangan Istana Dolmabahçe, Istana Çırağan, Masjid Ortaköy, dan Jambatan Bosphorus — semua dimandikan cahaya hangat.'],
        ['p', 'Makan malam disajikan ketika matahari mula terbenam. Menu menampilkan hidangan Turki dan antarabangsa: pinggan meze sejuk, daging panggang atau ikan segar, sayur bermusim, dan pencuci mulut tradisional seperti baklava. Minuman ringan termasuk dengan pakej Standard, sementara pilihan Premium dan VIP menambah minuman beralkohol — dan ada sesuatu yang sangat menyenangkan tentang menghirup segelas wain Turki sambil menyaksikan langit berubah warna di atas air.'],
        ['p', 'Apabila kegelapan turun, program hiburan bermula. Tarian rakyat Turki tradisional, persembahan tarian perut, muzik langsung, dan kadang-kadang upacara darwis berpusing mengisi baki jam. Peralihan dari matahari terbenam keemasan kepada pencahayaan malam bandar adalah lancar — satu saat anda menyaksikan cahaya terakhir pudar, dan seterusnya anda dikelilingi lampu berkilauan di tepi laut Istanbul.'],
        ['h2', 'Tip Fotografi'],
        ['p', 'Pelayaran matahari terbenam adalah impian jurugambar, tetapi beberapa tip akan membantu anda mendapatkan tangkapan terbaik. Pertama, menuju ke dek atas kira-kira 30 minit sebelum matahari terbenam — pada masa inilah cahaya paling hangat dan warna paling hidup. Tangkap ke arah barat (sisi Eropah) untuk siluet matahari-terbenam-atas-menara yang klasik. Gunakan pantulan air untuk menambah kedalaman pada komposisi anda.'],
        ['p', 'Untuk jurugambar telefon pintar, hidupkan mod HDR untuk menangkap langit terang dan latar depan yang lebih gelap. Elakkan menggunakan denyar — ia akan merosakkan kehangatan semula jadi cahaya. Mod panorama berfungsi dengan indah untuk menangkap sapuan luas ufuk. Dan jangan lupa untuk meletakkan telefon selama beberapa minit dan hanya menonton. Sesetengah saat lebih baik dihidupi daripada difilemkan.'],
        ['h2', 'Apa yang Hendak Dipakai'],
        ['p', 'Dek atas akan berangin, terutamanya apabila kapal bergerak. Walaupun pada malam musim panas yang hangat, suhu turun dengan ketara di atas air selepas matahari terbenam. Jaket nipis, cardigan, atau syal adalah penting. Berlapis paling sesuai — anda mungkin selesa dalam t-shirt semasa golden hour tetapi bersyukur untuk lapisan tambahan apabila kegelapan tiba. Kasut dengan beberapa cengkaman lebih disukai daripada tumit tinggi atau selipar bertapak licin, kerana dek boleh agak licin daripada percikan laut.'],
        ['h2', 'Pelayaran Matahari Terbenam vs. Pelayaran Makan Malam — Apa Bezanya?'],
        ['p', 'Perbezaan utama ialah masa dan suasana. Pelayaran matahari terbenam bertolak pada lewat petang dan memberi anda pengalaman golden hour ditambah peralihan ke malam. Pelayaran makan malam standard bertolak lebih lewat (sekitar 20:00-20:30) dan sepenuhnya pengalaman malam — lampu bandar, jambatan diterangi, dan suasana yang lebih gelap dan lebih romantis.'],
        ['p', 'Jika anda memilih antara kedua-duanya, pertimbangkan apa yang paling penting bagi anda. Pelayaran matahari terbenam menawarkan peluang fotografi terbaik dan pengalaman visual yang lebih pelbagai (siang ke malam). Pelayaran makan malam adalah pilihan klasik untuk malam romantis atau malam meraikan, dengan bandar diterangi sepenuhnya dari awal. Kedua-duanya termasuk makan malam dan program hiburan penuh.'],
        ['p', 'Bagi mereka yang mempunyai masa, kombinasi ideal ialah pelayaran matahari terbenam pada satu malam dan pelayaran makan malam pada malam lain — ia sebenarnya pengalaman yang berbeza. Tetapi jika anda hanya boleh memilih satu, pelayaran matahari terbenam menawarkan sesuatu yang benar-benar unik: peluang untuk menyaksikan Istanbul berubah dari emas ke perak ketika dua benua pudar dari siang ke malam di sekeliling anda.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap pakej, harga, dan apa yang dijangka.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Saat Akhir', blurb: 'Tempah pelayaran hari yang sama dengan pengesahan WhatsApp serta-merta.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda', blurb: 'Tip penting untuk pelayar Bosphorus kali pertama.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran mesra keluarga dengan anak di bawah 6 percuma.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda',
      desc: 'Merancang pelayaran Bosphorus? Berikut 10 tip penting: apa yang perlu dipakai, dibawa, dijangka, dan cara mendapatkan pengalaman terbaik dalam tur bot Istanbul anda.',
      h1: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda',
      alt: 'Pandangan panorama bot pelayaran di Bosphorus dengan ufuk Istanbul',
      body: [
        ['p', 'Pelayaran Bosphorus adalah salah satu pengalaman yang hampir setiap pelawat ke Istanbul masukkan dalam senarai mereka — dan dengan sebab yang baik. Tetapi seperti mana-mana pengalaman perjalanan, mengetahui beberapa perkara awal boleh membuat perbezaan antara malam yang baik dan yang hebat. Berikut sepuluh tip penting daripada pasukan kami untuk membantu anda memanfaatkan tur bot Istanbul anda.'],
        ['h2_sm', '1. Berpakaian Berlapis'],
        ['p', 'Ini adalah nasihat nombor satu yang kami berikan kepada setiap tetamu. Petang Istanbul boleh menipu sejuknya di atas air, walaupun pada musim panas. Suhu di dek atas biasanya 5 hingga 8 darjah lebih rendah daripada yang anda rasai di pantai, dan angin daripada pergerakan kapal membuatkan ia terasa lebih sejuk. Jaket nipis, cardigan, atau pashmina adalah penting. Semasa bulan musim bunga dan musim luruh, jaket yang betul disyorkan. Anda akan bersyukur anda membawanya apabila anda mahu melangkah keluar dan menikmati pemandangan dari dek terbuka.'],
        ['h2_sm', '2. Bawa Kamera (dan Pastikan Telefon Dicas)'],
        ['p', 'Bosphorus pada waktu malam sangat fotogenik. Istana diterangi, jambatan berangkai lampu warna-warni, masjid diterangi dari bawah, dan ufuk bandar dipantulkan di atas air gelap — akan ada puluhan saat yang berbaloi ditangkap. Pastikan telefon anda dicas penuh sebelum menaiki kapal, atau bawa power bank kecil. Jika anda mempunyai kamera dengan mod malam atau keupayaan cahaya rendah, bawa. Sesetengah tangkapan terbaik datang dari dek atas semasa kapal melepasi Jambatan Bosphorus.'],
        ['h2_sm', '3. Tiba Sekurang-kurangnya 20 Minit Lebih Awal'],
        ['p', 'Menaiki adalah dahulu datang, dahulu dilayan untuk pemilihan meja (kecuali anda telah menempah pakej VIP dengan meja tingkap yang ditempah). Tiba 20 minit sebelum waktu menaiki yang dinyatakan memberi anda peluang terbaik untuk mendapatkan meja berhampiran tingkap atau dekat pentas. Pasukan titik perjumpaan kami akan ada di sana untuk memandu anda ke kapal, tetapi jika anda tiba tepat pada masa berlepas, anda mungkin berakhir di meja yang kurang ideal.'],
        ['h2_sm', '4. Pilih Masa Tur yang Tepat'],
        ['p', 'Biasanya ada dua pilihan pelayaran: pelayaran matahari terbenam (bertolak sekitar 17:30) dan pelayaran makan malam (bertolak sekitar 20:00-20:30). Pelayaran matahari terbenam memberi anda pengalaman golden hour dan peralihan dari siang ke malam — ideal untuk jurugambar dan mereka yang lebih suka petang yang lebih awal. Pelayaran makan malam adalah pengalaman malam klasik dengan bandar diterangi sepenuhnya. Kedua-duanya termasuk makan malam penuh dan program hiburan. Jika ini kali pertama anda, pelayaran makan malam adalah pilihan paling popular.'],
        ['h2_sm', '5. Tempah melalui WhatsApp untuk Respons Terpantas'],
        ['p', 'Walaupun anda boleh mencari pelayaran Bosphorus melalui pelbagai platform dalam talian, menempah secara langsung melalui WhatsApp adalah pilihan terpantas dan paling fleksibel. Anda mendapat respons serta-merta, boleh bertanya soalan dalam masa nyata, dan menerima cadangan peribadi berdasarkan saiz dan keutamaan kumpulan anda. Tiada borang untuk diisi dan tiada menunggu pengesahan e-mel. Hanya hantar mesej dengan tarikh anda, bilangan tetamu, dan pakej pilihan, dan anda akan mempunyai tempahan yang disahkan dalam beberapa minit.'],
        ['h2_sm', '6. Tiada Bayaran Pendahuluan Diperlukan'],
        ['p', 'Ini mengejutkan ramai pengembara, tetapi pengendali pelayaran Bosphorus bereputasi — termasuk Bosphorus Night — tidak memerlukan sebarang bayaran pendahuluan. Anda menempah tempat anda melalui WhatsApp, hadir di jeti, dan bayar di kapal. Ini bermakna tiada risiko kewangan untuk anda. Jika rancangan anda berubah, anda hanya beritahu kami dan tiada caj. Bayaran di kapal boleh dibuat dengan tunai (Lira Turki, Euro, atau Dolar AS) atau dengan kad kredit/debit.'],
        ['h2_sm', '7. Mabuk Laut Jarang Menjadi Isu'],
        ['p', 'Bosphorus adalah selat, bukan laut terbuka. Airnya agak tenang, terutamanya berbanding air laut. Bot pelayaran besar dan stabil, dan laluan kekal dalam selat terlindung sepanjang masa. Sebahagian besar tetamu tidak mengalami ketidakselesaan pergerakan sama sekali. Jika anda sangat sensitif, duduk di tengah kapal (bukan di haluan atau buritan) memberikan perjalanan paling stabil. Mempunyai makanan dalam perut juga membantu — jadi makan malam sebenarnya pencegahan yang baik.'],
        ['h2_sm', '8. Ketahui Tempat Foto Terbaik'],
        ['p', 'Tiga saat paling banyak difoto dalam pelayaran adalah: melepasi di bawah Jambatan Bosphorus (lampu terus di atas anda dan memantul di atas air), pandangan Maiden\'s Tower berdiri sendirian di tengah selat, dan pandangan panorama ufuk bandar lama dengan masjid dan menaranya. Dek atas menawarkan pandangan tanpa halangan terbaik untuk foto. Naik antara hidangan atau semasa rehat dalam hiburan — kakitangan akan menahan meja anda untuk anda.'],
        ['h2_sm', '9. Kanak-kanak Dialu-alukan'],
        ['p', 'Pelayaran makan malam Bosphorus adalah mesra keluarga. Kanak-kanak di bawah 6 belayar percuma, dan kanak-kanak berumur 6 hingga 12 tahun bayar separuh harga. Program hiburan — terutamanya tarian rakyat dan muzik — cenderung memikat kanak-kanak. Bot adalah selamat dan luas, dengan kawasan makan tertutup dan dek atas berpenjaga. Itu pun, perhatikan kanak-kanak yang lebih muda di dekat pagar dan tangga. Jika anda mengembara sebagai keluarga, beritahu kami semasa menempah supaya kami boleh mengaturkan meja yang sesuai.'],
        ['h2_sm', '10. Pembatalan Percuma — Selalu'],
        ['p', 'Hidup berlaku. Cuaca berubah, tahap tenaga merosot, rancangan beralih. Dengan Bosphorus Night, pembatalan sentiasa percuma. Sama ada anda membatalkan seminggu lebih awal atau beberapa jam sebelum berlepas, tiada bayaran dan tiada penalti. Hanya hantar mesej WhatsApp kepada kami. Ini adalah salah satu kelebihan model tanpa bayaran pendahuluan — kerana anda tidak membayar apa-apa, membatalkan adalah semudah mesej pantas. Kami lebih suka anda datang apabila anda berada dalam mood untuk menikmatinya.'],
        ['p_top', 'Berbekalkan sepuluh tip ini, anda bersedia untuk mempunyai pengalaman pelayaran Bosphorus terbaik yang mungkin. Kombinasi keindahan malam Istanbul, makan malam Turki penuh, dan hiburan langsung menjadikan ini salah satu malam paling berkesan yang anda boleh ada di mana-mana di dunia. Hanya ingat: berlapis, telefon dicas, dan tiba awal.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap pakej, harga, dan apa yang dijangka.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Saat Akhir', blurb: 'Tempah pelayaran hari yang sama dengan pengesahan WhatsApp serta-merta.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam muktamad.' },
        'bosphorus-cruise-with-kids-family': { title: 'Pelayaran Bosphorus dengan Anak — Panduan Keluarga', blurb: 'Pelayaran mesra keluarga dengan anak di bawah 6 percuma.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Pelayaran Bosphorus dengan Anak — Panduan Mesra Keluarga Istanbul',
      desc: 'Adakah pelayaran makan malam Bosphorus sesuai untuk kanak-kanak? Ya! Anak di bawah 6 percuma, 6-12 separuh harga. Tip keluarga, apa yang dijangka, dan cara menempah.',
      h1: 'Pelayaran Bosphorus dengan Anak — Panduan Mesra Keluarga',
      alt: 'Keluarga menikmati dek terbuka pelayaran Bosphorus',
      body: [
        ['p', 'Salah satu soalan paling biasa yang kami terima daripada keluarga yang merancang perjalanan Istanbul mereka ialah: "Adakah pelayaran makan malam Bosphorus sesuai untuk kanak-kanak?" Jawapannya adalah ya yang yakin. Malah, ramai keluarga memberitahu kami pelayaran adalah kemuncak keseluruhan percutian mereka — bukan sahaja untuk ibu bapa, tetapi juga untuk kanak-kanak. Berikut semua yang anda perlu tahu tentang membawa keluarga anda dalam pelayaran Bosphorus.'],
        ['h2', 'Polisi Umur dan Harga'],
        ['p', 'Harga kami untuk kanak-kanak adalah ringkas dan mesra keluarga. Kanak-kanak berumur 0–3 belayar sepenuhnya percuma — tiada tiket, tiada bayaran. Kanak-kanak berumur 4–8 bayar separuh harga dewasa. Kanak-kanak berumur 9 dan ke atas dikenakan kadar dewasa penuh. Ini terpakai untuk kedua-dua pakej: Standard dan VIP.'],
        ['p', 'Untuk keluarga empat orang dengan dua kanak-kanak berumur 4–8, pelayaran makan malam Bosphorus berharga serendah €72 jumlah untuk pakej Standard — itu dua tiket dewasa pada €24 setiap satu ditambah dua tiket kanak-kanak separuh harga pada €12 setiap satu. Untuk malam yang tidak dapat dilupakan di atas air dengan keseluruhan keluarga, itu mewakili nilai yang sangat baik berbanding dengan restoran duduk di kawasan pelancong.'],
        ['h2', 'Adakah Ia Selamat untuk Kanak-kanak?'],
        ['p', 'Bot pelayaran yang digunakan untuk tur makan malam Bosphorus adalah kapal komersial besar dan stabil — bukan bot peribadi kecil. Mereka mempunyai kawasan makan tertutup di dek bawah dan kawasan pandangan terbuka di dek atas dengan pagar dan halangan keselamatan yang sewajarnya. Bosphorus adalah selat dengan air yang agak tenang, jadi perjalanan adalah lancar dan stabil. Mabuk laut sangat jarang berlaku, walaupun di kalangan kanak-kanak.'],
        ['p', 'Itu pun, seperti mana-mana persekitaran tepi laut, akal fikiran terpakai. Pastikan mata terbuka pada budak kecil di dekat tangga dan kawasan dek terbuka. Anak kapal sudah biasa mempunyai keluarga di kapal dan akan membantu memastikan kanak-kanak selamat, tetapi pengawasan ibu bapa sentiasa menjadi barisan pertama keselamatan.'],
        ['h2', 'Apa yang Paling Dinikmati Kanak-kanak'],
        ['p', 'Anda mungkin berfikir pelayaran makan malam adalah pengalaman dewasa terutamanya, tetapi kanak-kanak secara konsisten bertindak balas kepada beberapa elemen malam. Hiburan langsung adalah hit terbesar — kostum tarian rakyat berwarna-warni, muzik bertenaga, dan terutamanya persembahan tarian perut cenderung memikat kanak-kanak dari semua peringkat umur. Ramai kanak-kanak akhirnya bertepuk tangan, menari di kerusi mereka, atau cuba meniru pergerakan.'],
        ['p', 'Perjalanan bot itu sendiri menarik untuk kanak-kanak yang belum pernah berada di atas kapal besar. Menyaksikan jambatan yang diterangi lalu di atas kepala, melihat Maiden\'s Tower, dan melihat lampu bandar dari atas air semuanya adalah pengalaman yang benar-benar mendebarkan untuk mata muda. Dek atas, di mana kanak-kanak boleh merasai angin dan melihat air mengalir, biasanya menjadi tempat kegemaran.'],
        ['p', 'Kanak-kanak yang lebih tua (8 dan ke atas) sering menjadi berminat dengan mercu tanda di sepanjang laluan. Menunjukkan istana, masjid, dan kubu apabila kapal melepasinya boleh mengubah pelayaran menjadi pelajaran sejarah tidak rasmi — terutamanya jika anda telah melawat tapak ini pada siang hari.'],
        ['h2', 'Menu untuk Kanak-kanak'],
        ['p', 'Menu makan malam adalah hidangan Turki dan antarabangsa set. Walaupun tiada menu kanak-kanak yang berasingan, pilihannya cukup luas sehingga kebanyakan kanak-kanak menemui banyak yang boleh dimakan. Roti, nasi, ayam panggang, dan salad semuanya ringan dan biasa. Pilihan meze sejuk termasuk item seperti hummus dan keju yang biasanya dinikmati kanak-kanak. Pencuci mulut — terutamanya baklava dan pastri manis — adalah popular secara universal dengan tetamu yang lebih muda.'],
        ['p', 'Jika anak anda mempunyai keperluan diet atau alahan tertentu, beritahu kami semasa menempah dan kami boleh menyemak dengan dapur terlebih dahulu. Minuman ringan, air, dan jus termasuk dalam semua pakej, jadi kanak-kanak tidak akan dahaga.'],
        ['h2', 'Tip untuk Keluarga'],
        ['ul', [
          ['<strong class="text-white/80">Bawa jaket nipis untuk setiap anak</strong> — Dek atas berangin dan kanak-kanak sering mahu meluangkan masa di luar menonton air dan lampu.'],
          ['<strong class="text-white/80">Pertimbangkan pelayaran matahari terbenam</strong> — Ia bertolak lebih awal (sekitar 17:30) dan kembali pada 21:00, yang berfungsi lebih baik untuk jadual tidur kanak-kanak yang lebih muda berbanding pelayaran makan malam yang kembali sekitar 23:30.'],
          ['<strong class="text-white/80">Tiba awal untuk meja yang baik</strong> — Meja sebelah tingkap berhampiran pentas memberi kanak-kanak pengalaman terbaik. Pakej VIP menjamin ini, tetapi tiba 20 minit lebih awal untuk Standard atau Premium juga membantu.'],
          ['<strong class="text-white/80">Bawa gangguan kecil</strong> — Walaupun hiburan dan pemandangan mengekalkan kebanyakan kanak-kanak terlibat, mempunyai buku mewarna kecil atau tablet yang dimuat dengan filem boleh membantu semasa saat lebih tenang untuk kanak-kanak yang sangat muda.'],
          ['<strong class="text-white/80">Gunakan tandas sebelum menaiki</strong> — Bot mempunyai tandas, tetapi ia boleh menjadi sibuk semasa saat puncak. Lawatan pantas sebelum berlepas menjadikan jam pertama lebih lancar.'],
        ]],
        ['h2', 'Cara Menempah sebagai Keluarga'],
        ['p', 'Tempahan adalah mudah. Hantar mesej WhatsApp kepada kami dengan bilangan orang dewasa, bilangan dan umur kanak-kanak, tarikh pilihan anda, dan pakej mana yang menarik minat anda. Kami akan mengira jumlah (ingat: di bawah 6 percuma, 6-12 separuh harga) dan mengesahkan ketersediaan serta-merta. Tiada bayaran pendahuluan diperlukan — anda bayar di kapal.'],
        ['p', 'Jika anda tidak pasti pakej mana yang paling sesuai untuk keluarga anda, hanya tanya. Untuk kebanyakan keluarga, pakej Standard menawarkan segala yang anda perlukan. Peningkatan Premium berbaloi jika orang dewasa mahu menikmati minuman beralkohol dengan makan malam. Pakej VIP dengan meja tingkap yang ditempah adalah ideal untuk keluarga yang mahukan tempat duduk barisan hadapan terjamin tanpa tiba awal.'],
        ['p', 'Pelayaran Bosphorus adalah salah satu pengalaman Istanbul yang jarang berlaku yang benar-benar berfungsi untuk setiap umur. Anak-anak anda akan menyukai lampu, muzik, dan pengembaraan berada di atas air pada waktu malam. Anda akan menyukai pemandangan, makanan, dan beberapa jam dijaga sementara keseluruhan keluarga berseronok bersama.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Pelayaran Makan Malam Bosphorus Terbaik di Istanbul 2026', blurb: 'Panduan lengkap pakej, harga, dan apa yang dijangka.' },
        'things-to-know-istanbul-boat-tour': { title: '10 Perkara untuk Diketahui Sebelum Tur Bot Istanbul Anda', blurb: 'Tip penting untuk pelayar Bosphorus kali pertama.' },
        'bosphorus-sunset-cruise-guide': { title: 'Panduan Pelayaran Matahari Terbenam Bosphorus', blurb: 'Golden hour di atas air — pengalaman matahari terbenam muktamad.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Pelayaran Bosphorus Malam Ini — Panduan Saat Akhir', blurb: 'Tempah pelayaran hari yang sama dengan pengesahan WhatsApp serta-merta.' },
      },
    },
  },

  pl: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: 'Wskazówki dotyczące rejsu po Bosforze, przewodniki i wiedza wewnętrzna. Zaplanuj idealny rejs z kolacją w Stambule dzięki naszym artykułom eksperckim.',
      ogDesc: 'Wskazówki dotyczące rejsu po Bosforze, przewodniki i wiedza wewnętrzna. Zaplanuj idealny rejs z kolacją w Stambule.',
      h1: 'Blog',
      lead: 'Wskazówki dotyczące rejsu, przewodniki po Stambule i wiedza wewnętrzna, które pomogą Ci zaplanować idealne doświadczenie Bosforu.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 kwietnia 2026', title: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026', blurb: 'Wszystko, co musisz wiedzieć o najwyżej ocenianym rejsie z kolacją w Stambule. Od pakietów i cen po rozrywkę i zapierające dech w piersiach widoki nocne.', alt: 'Łódź rejsu z kolacją po Bosforze w nocy z oświetlonym mostem' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 kwietnia 2026', title: 'Rejs po Bosforze dziś wieczorem — Przewodnik last minute', blurb: 'Chcesz popłynąć po Bosforze dziś wieczorem? Oto wszystko, co musisz wiedzieć o rezerwacjach last minute, dostępności i jak zarezerwować miejsce.', alt: 'Wnętrze sali jadalnej luksusowego rejsu po Bosforze' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 kwietnia 2026', title: 'Przewodnik po rejsie o zachodzie słońca po Bosforze', blurb: 'Doświadcz złotej godziny Stambułu z wody. Wszystko o rejsie z kolacją o zachodzie słońca — czas, czego się spodziewać i dlaczego jest niezapomniany.', alt: 'Dramatyczny zachód słońca nad cieśniną Bosfor' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 kwietnia 2026', title: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule', blurb: 'Planujesz rejs po Bosforze? Od tego, w co się ubrać, po porady dotyczące choroby morskiej, oto 10 istotnych rzeczy, które powinien wiedzieć każdy początkujący.', alt: 'Panoramiczny widok łodzi płynącej po Bosforze' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 kwietnia 2026', title: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny', blurb: 'Czy rejs z kolacją jest odpowiedni dla dzieci? Zdecydowanie. Dzieci poniżej 6 lat płyną za darmo, 6-12 lat za pół ceny. Oto Twój kompletny przewodnik rodzinny.', alt: 'Rodziny cieszące się pokładem rejsu po Bosforze' },
      ],
      readMore: 'Czytaj więcej →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026 — Kompletny przewodnik',
      desc: 'Wszystko, co musisz wiedzieć o najlepszym rejsie z kolacją w Stambule. Pakiety od €24, pokazy tureckie na żywo, niesamowite widoki nocne. Rezerwuj natychmiast.',
      h1: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026',
      alt: 'Luksusowa łódź rejsowa przepływająca pod oświetlonym Mostem Bosforskim w nocy',
      body: [
        ['p', 'Stambuł jest jednym z niewielu miast na świecie, gdzie można zjeść kolację na wodzie, obserwując rozświetlające się wokół dwie kontynenty. Rejs z kolacją po Bosforze to nie tylko posiłek — to najbardziej ikoniczne wieczorne doświadczenie, jakie miasto ma do zaoferowania. Niezależnie od tego, czy odwiedzasz Stambuł po raz pierwszy, czy wracasz na kolejną podróż, spędzenie nocy nad Bosforem to coś, co zapamiętasz na lata.'],
        ['h2', 'Co czyni to wyjątkowym'],
        ['p', 'Cieśnina Bosfor to 30-kilometrowy szlak wodny oddzielający Europę i Azję. W nocy historyczne pałace, meczety i mosty wzdłuż jej brzegów są spektakularnie oświetlone. Ze swojego stolika na łodzi zobaczysz Pałac Dolmabahçe świecący na biało na tle ciemnego wzgórza, Wieżę Panny stojącą samotnie w wodzie z ciepłym żółtym światłem oraz dwa wielkie mosty wiszące — Most Bosforski i Most Fatih Sultan Mehmet — rozciągające się między kontynentami wstęgami koloru.'],
        ['p', 'Trasa rejsu zwykle wyrusza z przystani Kabataş, w pobliżu Pałacu Dolmabahçe. Łódź kieruje się na północ wzdłuż europejskiego brzegu, mijając zdobne nabrzeżne rezydencje znane jako yalı, Pałac Çırağan i Twierdzę Rumeli. Następnie skręca na południe wzdłuż strony azjatyckiej, oferując widoki Pałacu Beylerbeyi i nabrzeża Üsküdar przed powrotem. Cała podróż trwa około trzech do czterech godzin, w zależności od pakietu.'],
        ['h2', 'Doświadczenie kolacji'],
        ['p', 'Kolacja podawana jest jako zestaw menu łączący kuchnię turecką i międzynarodową. Możesz spodziewać się wyboru zimnych i gorących przystawek — hummus, faszerowane liście winogron, sałatki sezonowe — a następnie dania głównego z grillowanego mięsa lub ryby z ryżem i pieczonymi warzywami. Deser to zazwyczaj klasyczny turecki słodki specjał, taki jak baklava lub kadayıf, w połączeniu z turecką herbatą lub kawą. Napoje bezalkoholowe i woda są wliczone we wszystkie pakiety, podczas gdy napoje alkoholowe są dostępne w opcjach Premium i VIP.'],
        ['h2', 'Rozrywka na żywo'],
        ['p', 'Program rozrywkowy jest jedną z głównych atrakcji. Spodziewaj się pełnej listy tradycyjnych tureckich tańców ludowych wykonywanych w kolorowych regionalnych kostiumach, energicznego pokazu tańca brzucha, muzyki na żywo z tureckiego zespołu i seta DJ-a, który utrzymuje nastrój w miarę postępu nocy. Niektóre rejsy oferują również ceremonię wirujących derwiszów — hipnotyzującą sufi praktykę duchową, która od stuleci jest częścią kultury tureckiej. Pokaz trwa około 90 minut i ma na celu zapewnienie międzynarodowym gościom bogatego smaku tureckiej sztuki performatywnej.'],
        ['h2', 'Pakiety i ceny'],
        ['p', 'W Bosphorus Night oferujemy dwa główne pakiety, z opcjonalnymi dodatkami do napojów, transferu hotelowego i specjalnych okazji:'],
        ['ul', [
          ['<strong class="text-white/80">Standardowy rejs z kolacją (od €24)</strong> — Pełna 4-daniowa kolacja, napoje bezalkoholowe, rozrywka na żywo, pokazy tańca ludowego i tańca brzucha, DJ na górnym pokładzie. Najpopularniejsza opcja dla par, rodzin i podróżujących samotnie.'],
          ['<strong class="text-white/80">VIP rejs z kolacją (od €55)</strong> — Rozszerzone menu zawierające mięsa premium (rib-eye, polędwica wołowa), 15+ tureckich meze, miejsca przy scenie i podwyższona obsługa. Idealny na specjalne okazje i rocznice.'],
        ]],
        ['p_sm', 'Dodatki: nieograniczone napoje (€30/osoba), transfer hotelowy (€10/osoba), romantyczny stół (€15/rezerwacja). Płatność na łodzi — bez wymaganej przedpłaty.'],
        ['p', 'Dzieci w wieku od 6 do 12 lat zwykle płacą połowę ceny, a dzieci poniżej 6 lat za darmo. Nie jest wymagana żadna przedpłata — płacisz na łodzi, co eliminuje wszelkie ryzyko rezerwacji.'],
        ['h2', 'Jak zarezerwować'],
        ['p', 'Najłatwiejszym sposobem rezerwacji jest WhatsApp. Po prostu napisz do nas, podając preferowaną datę, liczbę gości i który pakiet Cię interesuje. Nasz zespół odpowiada w ciągu kilku minut, potwierdza dostępność i wysyła Ci wszystkie szczegóły — miejsce spotkania, czas zaokrętowania i czego się spodziewać. Nie ma formularza płatności online ani depozytu. Płacisz gotówką lub kartą bezpośrednio na łodzi.'],
        ['h2', 'Wskazówki dla najlepszego doświadczenia'],
        ['p', 'Przyjdź do przystani co najmniej 20 minut przed odlotem, aby zająć dobry stolik. Ubieraj się smart casual — łódź nie jest zbyt formalna, ale poczujesz się bardziej komfortowo w czymś o krok powyżej strojów plażowych. Weź lekką kurtkę lub szal, ponieważ górny pokład może być wietrzny nawet latem. I pamiętaj, aby naładować telefon — będziesz chciał uchwycić widoki, zwłaszcza gdy łódź przepływa pod oświetlonymi mostami.'],
        ['p', 'Rejs z kolacją po Bosforze, bez przesady, jest najlepszym sposobem na doświadczenie Stambułu nocą. Połączenie jedzenia, kultury na żywo i widoków na panoramę miasta odbijającą się na ciemnej wodzie jest jak nic innego. Jeśli podczas swojej podróży do Stambułu robisz tylko jeden „wielki wieczór", niech to będzie ten.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Rejs po Bosforze dziś wieczorem — Przewodnik last minute', blurb: 'Zarezerwuj rejs tego samego dnia z natychmiastowym potwierdzeniem WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Przewodnik po rejsie o zachodzie słońca po Bosforze', blurb: 'Złota godzina na wodzie — najlepsze doświadczenie zachodu słońca.' },
        'things-to-know-istanbul-boat-tour': { title: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule', blurb: 'Istotne wskazówki dla pierwszych razy pływających po Bosforze.' },
        'bosphorus-cruise-with-kids-family': { title: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny', blurb: 'Rejsy przyjazne rodzinie z dziećmi poniżej 6 lat za darmo.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Rejs po Bosforze dziś wieczorem — Przewodnik rezerwacji last minute Stambuł',
      desc: 'Chcesz popłynąć po Bosforze dziś wieczorem? Oto jak zarezerwować rejs z kolacją last minute w Stambule. Dostępność tego samego dnia, natychmiastowa rezerwacja WhatsApp.',
      h1: 'Rejs po Bosforze dziś wieczorem — Przewodnik rezerwacji last minute',
      alt: 'Elegancka sala jadalna rejsu z kolacją po Bosforze',
      body: [
        ['p', 'Jest 15:00 i właśnie zdecydowałeś, że chcesz dziś wieczorem zrobić coś wyjątkowego. Może przybyłeś do Stambułu dziś rano i chcesz jak najlepiej wykorzystać swój pierwszy wieczór. Może pogoda okazała się lepsza niż oczekiwano i noc na wodzie nagle brzmi idealnie. Niezależnie od powodu, pytanie jest proste: czy nadal możesz zarezerwować rejs z kolacją po Bosforze na dziś wieczór?'],
        ['p', 'Krótka odpowiedź brzmi <strong class="text-white/90">tak</strong>. Rezerwacje tego samego dnia są nie tylko możliwe — są powszechne. Oto wszystko, co musisz wiedzieć o rezerwacji rejsu last minute w Stambule.'],
        ['h2', 'Czy naprawdę można rezerwować tego samego dnia?'],
        ['p', 'Absolutnie. W przeciwieństwie do wielu aktywności turystycznych wymagających wcześniejszej rezerwacji, rejsy z kolacją po Bosforze obsługują duże statki, które mogą pomieścić setki gości. Oznacza to, że prawie zawsze jest dostępność, nawet tego samego dnia. W szczytowych miesiącach letnich (lipiec i sierpień) rejsy weekendowe mogą zapełniać się szybciej, ale rejsy w dni powszednie rzadko wyprzedają się całkowicie. Wiosną i jesienią miejsca last minute są praktycznie gwarantowane.'],
        ['p', 'W Bosphorus Night utrzymujemy naszą linię WhatsApp otwartą od wczesnego ranka do późnego wieczora właśnie dlatego, że wiemy, że wielu gości decyduje się tego samego dnia. Nasz zespół może potwierdzić Twoją rezerwację w ciągu kilku minut od Twojej wiadomości.'],
        ['h2', 'Które wycieczki odbywają się dziś wieczorem?'],
        ['p', 'Standardowy rejs z kolacją wyrusza codziennie z przystani Kabataş. Typowy harmonogram działa tak: zaokrętowanie rozpoczyna się około 19:30 do 20:00, łódź wyrusza około 20:30, a rejs trwa około trzech godzin, wracając do przystani około 23:30. Niektórzy operatorzy oferują również rejs o zachodzie słońca, który wyrusza około 17:30 i wraca o 21:00 — choć w przypadku decyzji last minute po południu, wieczorny rejs z kolacją jest bardziej praktyczną opcją.'],
        ['p', 'Oba pakiety — Standardowy i VIP — są dostępne do rezerwacji tego samego dnia. Pakiet Standardowy zaczyna się od €24 za osobę i obejmuje pełną 4-daniową kolację, napoje bezalkoholowe i program rozrywkowy. Nie musisz wybierać pakietu z wyprzedzeniem; po prostu napisz do nas na WhatsApp, a my przeprowadzimy Cię przez opcje.'],
        ['h2', 'Jak dostać się do Kabataş'],
        ['p', 'Kabataş jest jednym z najbardziej dostępnych punktów w Stambule. Jeśli mieszkasz w Sultanahmet (stare miasto), tramwaj T1 jedzie bezpośrednio do Kabataş — to ostatni przystanek. Przejazd trwa około 25 minut. Z Taksim możesz wsiąść do kolejki linowej (linia F1), która zjeżdża bezpośrednio do Kabataş w mniej niż trzy minuty. Z azjatyckiej strony, weź prom do Kabataş lub Beşiktaş. Taksówki z większości centralnych obszarów kosztują między 100-200 TL w zależności od ruchu i odległości.'],
        ['p', 'Zalecamy przybycie do strefy przystani najpóźniej o 19:30. Daje to czas na znalezienie miejsca spotkania, spotkanie z członkiem naszego zespołu, który poprowadzi Cię do łodzi, i osiedlenie się przy stoliku przed odlotem.'],
        ['h2', 'Co zabrać'],
        ['p', 'Zachowaj prostotę. Weź telefon do zdjęć, lekką kurtkę lub kardigan na górny pokład (nawet letnie wieczory mogą być wietrzne na wodzie) oraz gotówkę lub kartę do płatności na łodzi. Nie ma dress code, ale smart casual sprawdza się najlepiej — pomyśl o ładnej koszuli lub bluzce zamiast szortów i japonek. Panie mogą chcieć gumkę do włosów lub szalik, ponieważ wiatr wzmaga się, gdy łódź jest w ruchu.'],
        ['h2', 'Proces rezerwacji'],
        ['p', 'Oto jak to działa w trzech szybkich krokach:'],
        ['ol', [
          ['<strong class="text-white/80">Napisz do nas na WhatsApp</strong> — Powiedz nam, ilu gości, preferowany pakiet (lub poproś o rekomendację) i potwierdź datę dzisiejszą.'],
          ['<strong class="text-white/80">Otrzymaj natychmiastowe potwierdzenie</strong> — Odpowiadamy w ciągu kilku minut z adresem miejsca spotkania, czasem zaokrętowania i innymi szczegółami, których potrzebujesz.'],
          ['<strong class="text-white/80">Pokaż się i ciesz</strong> — Bez depozytu, bez przedpłaty, bez biletów drukowanych. Po prostu przybądź do miejsca spotkania, a nasz zespół zajmie się resztą. Płacisz bezpośrednio na łodzi.'],
        ]],
        ['p', 'Naprawdę nie ma żadnego ryzyka. Jeśli Twoje plany się zmienią i musisz anulować, po prostu daj nam znać na WhatsApp — nawet kilka godzin przed wyjściem jest w porządku. Żadnych opłat za anulowanie, żadnych pytań.'],
        ['p', 'Więc jeśli dzisiejsza noc czuje się jak noc Bosforu, nie myśl zbyt długo. Wyślij szybką wiadomość WhatsApp, a za kilka godzin będziesz spożywać kolację na wodzie z panoramą Stambułu świecącą wokół Ciebie.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026', blurb: 'Kompletny przewodnik po pakietach, cenach i tym, czego się spodziewać.' },
        'bosphorus-sunset-cruise-guide': { title: 'Przewodnik po rejsie o zachodzie słońca po Bosforze', blurb: 'Złota godzina na wodzie — najlepsze doświadczenie zachodu słońca.' },
        'things-to-know-istanbul-boat-tour': { title: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule', blurb: 'Istotne wskazówki dla pierwszych razy pływających po Bosforze.' },
        'bosphorus-cruise-with-kids-family': { title: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny', blurb: 'Rejsy przyjazne rodzinie z dziećmi poniżej 6 lat za darmo.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Rejs o zachodzie słońca po Bosforze — Czego się spodziewać i dlaczego warto',
      desc: 'Doświadcz złotej godziny Stambułu z wody. 3-godzinny rejs z kolacją o zachodzie słońca z pokazami na żywo, odjazd 17:30 z Kabataş. Kompletny przewodnik wewnątrz.',
      h1: 'Rejs o zachodzie słońca po Bosforze — Czego się spodziewać i dlaczego warto',
      alt: 'Dramatyczny złoty zachód słońca nad cieśniną Bosfor z sylwetkami meczetów',
      body: [
        ['p', 'Jest powód, dla którego fotografowie, pary i doświadczeni podróżnicy mówią to samo: jeśli chcesz zobaczyć Stambuł w jego najpiękniejszej postaci, obserwuj zachód słońca z Bosforu. Sposób, w jaki światło zamienia wodę w złoto, maluje minarety w odcieniach bursztynu i powoli ustępuje wieczornemu blaskowi miasta — to jedno z tych doświadczeń, które pozostają z Tobą długo po opuszczeniu Turcji.'],
        ['p', 'Rejs o zachodzie słońca po Bosforze przyjmuje to naturalne widowisko i zamienia je w pełne wieczorne doświadczenie, kompletne z kolacją, rozrywką na żywo i panoramicznymi widokami, których żaden bar na dachu nie może dorównać.'],
        ['h2', 'Dlaczego godzina zachodu słońca jest magiczna'],
        ['p', 'Stambuł leży na około 41 stopniach szerokości geograficznej północnej, co oznacza, że czasy zachodu słońca znacznie się różnią w ciągu roku. Latem słońce zachodzi około 20:30, rzucając długą złotą godzinę, która rozciąga się po wodzie. Wiosną i jesienią zachód słońca przychodzi wcześniej — około 18:00 do 19:00 — tworząc bardziej dramatyczne, szybsze przejście od dnia do nocy. Tak czy inaczej, Bosfor działa jak naturalne lustro, odbijając kolory nieba i wzmacniając widowisko.'],
        ['p', 'To, co czyni zachód słońca nad Bosforem wyjątkowo wyjątkowym, to panorama miasta. Gdy słońce zachodzi za europejską stroną, sylwetki Meczetu Süleymaniye, Hagia Sophia i Błękitnego Meczetu pojawiają się na pomarańczowo-różowym niebie. Tymczasem strona azjatycka łapie ostatnie ciepłe światło na swoich nabrzeżnych pałacach i zielonych wzgórzach. Dosłownie obserwujesz zachód słońca między dwoma kontynentami — niewiele miejsc na Ziemi może zaoferować taką perspektywę.'],
        ['h2', 'Doświadczenie rejsu'],
        ['p', 'Rejs z kolacją o zachodzie słońca zwykle wyrusza z przystani Kabataş około 17:30, choć czas dostosowuje się nieznacznie wraz z porami roku, aby uchwycić złotą godzinę u jej szczytu. Łódź kieruje się na północ wzdłuż cieśniny, dając widoki na Pałac Dolmabahçe, Pałac Çırağan, Meczet Ortaköy i Most Bosforski — wszystkie skąpane w ciepłym świetle.'],
        ['p', 'Kolacja podawana jest, gdy słońce zaczyna zachodzić. Menu zawiera asortyment tureckich i międzynarodowych dań: zimne talerze meze, grillowane mięsa lub świeże ryby, sezonowe warzywa i tradycyjne desery, takie jak baklava. Napoje bezalkoholowe są wliczone w pakiet Standardowy, podczas gdy opcje Premium i VIP dodają napoje alkoholowe — i jest coś szczególnie przyjemnego w popijaniu kieliszka tureckiego wina, obserwując, jak niebo zmienia kolor nad wodą.'],
        ['p', 'Gdy zapada zmierzch, rozpoczyna się program rozrywkowy. Tradycyjne tureckie tańce ludowe, występ tańca brzucha, muzyka na żywo, a czasem ceremonia wirujących derwiszów wypełniają pozostałe godziny. Przejście od złotego zachodu słońca do nocnego oświetlenia miasta jest bezproblemowe — w jednej chwili obserwujesz, jak gaśnie ostatnie światło, a w następnej jesteś otoczony migoczącymi światłami nabrzeża Stambułu.'],
        ['h2', 'Wskazówki fotograficzne'],
        ['p', 'Rejs o zachodzie słońca to marzenie fotografa, ale kilka wskazówek pomoże Ci uzyskać najlepsze ujęcia. Po pierwsze, udaj się na górny pokład około 30 minut przed zachodem słońca — to wtedy światło jest najcieplejsze, a kolory najżywsze. Fotografuj w kierunku zachodnim (strona europejska) dla klasycznej sylwetki zachodu słońca nad minaretami. Wykorzystaj odbicia wody, aby dodać głębi kompozycji.'],
        ['p', 'Dla fotografów ze smartfonem włącz tryb HDR, aby uchwycić zarówno jasne niebo, jak i ciemniejszy pierwszy plan. Unikaj używania lampy błyskowej — zniszczy ona naturalne ciepło światła. Tryb panoramy działa pięknie do uchwycenia szerokiego zakresu panoramy. I nie zapomnij odłożyć telefonu na kilka minut i po prostu patrzeć. Niektóre chwile są lepsze do przeżywania niż filmowania.'],
        ['h2', 'Co założyć'],
        ['p', 'Górny pokład będzie wietrzny, zwłaszcza gdy łódź jest w ruchu. Nawet w ciepły letni wieczór temperatura wyraźnie spada na wodzie po zachodzie słońca. Lekka kurtka, kardigan lub szal są niezbędne. Warstwy działają najlepiej — możesz być wygodny w t-shircie podczas złotej godziny, ale wdzięczny za dodatkową warstwę, gdy zapadnie zmrok. Buty z pewnym chwytem są lepsze niż obcasy lub sandały z gładką podeszwą, ponieważ pokład może być lekko śliski od rozprysków morskich.'],
        ['h2', 'Rejs o zachodzie słońca vs. rejs z kolacją — Jaka jest różnica?'],
        ['p', 'Główna różnica to czas i atmosfera. Rejs o zachodzie słońca wyrusza późnym popołudniem i daje to doświadczenie złotej godziny plus przejście do nocy. Standardowy rejs z kolacją wyrusza później (około 20:00-20:30) i jest całkowicie doświadczeniem nocnym — światła miasta, oświetlone mosty i ciemniejszy, bardziej romantyczny nastrój.'],
        ['p', 'Jeśli wybierasz między tymi dwoma, zastanów się, co jest dla Ciebie najważniejsze. Rejs o zachodzie słońca oferuje najlepsze możliwości fotograficzne i bardziej zróżnicowane wrażenia wizualne (dzień do nocy). Rejs z kolacją to klasyczny wybór na romantyczny wieczór lub świętujący wieczór, z miastem w pełni oświetlonym od początku. Oba obejmują kolację i pełny program rozrywkowy.'],
        ['p', 'Dla tych, którzy mają czas, idealną kombinacją jest rejs o zachodzie słońca jednego wieczoru i rejs z kolacją innego — to naprawdę różne doświadczenia. Ale jeśli możesz wybrać tylko jeden, rejs o zachodzie słońca oferuje coś naprawdę unikalnego: szansę obejrzenia, jak Stambuł przekształca się ze złota w srebro, gdy dwa kontynenty znikają z dnia w noc wokół Ciebie.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026', blurb: 'Kompletny przewodnik po pakietach, cenach i tym, czego się spodziewać.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Rejs po Bosforze dziś wieczorem — Przewodnik last minute', blurb: 'Zarezerwuj rejs tego samego dnia z natychmiastowym potwierdzeniem WhatsApp.' },
        'things-to-know-istanbul-boat-tour': { title: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule', blurb: 'Istotne wskazówki dla pierwszych razy pływających po Bosforze.' },
        'bosphorus-cruise-with-kids-family': { title: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny', blurb: 'Rejsy przyjazne rodzinie z dziećmi poniżej 6 lat za darmo.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule',
      desc: 'Planujesz rejs po Bosforze? Oto 10 istotnych wskazówek: w co się ubrać, co zabrać, czego się spodziewać i jak uzyskać najlepsze doświadczenie z wycieczki łodzią po Stambule.',
      h1: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule',
      alt: 'Panoramiczny widok łodzi rejsowej po Bosforze z panoramą Stambułu',
      body: [
        ['p', 'Rejs po Bosforze to jedno z tych doświadczeń, które praktycznie każdy odwiedzający Stambuł umieszcza na swojej liście — i z dobrego powodu. Ale tak jak każde doświadczenie podróżne, znajomość kilku rzeczy z wyprzedzeniem może zrobić różnicę między dobrym a świetnym wieczorem. Oto dziesięć istotnych wskazówek od naszego zespołu, aby pomóc Ci jak najlepiej wykorzystać wycieczkę łodzią po Stambule.'],
        ['h2_sm', '1. Ubierz się w warstwy'],
        ['p', 'To jest porada numer jeden, którą dajemy każdemu gościowi. Wieczory w Stambule mogą być zwodniczo chłodne na wodzie, nawet latem. Temperatura na górnym pokładzie jest zazwyczaj o 5 do 8 stopni niższa niż na brzegu, a wiatr od ruchu łodzi sprawia, że wydaje się jeszcze chłodniej. Lekka kurtka, kardigan lub pashmina jest niezbędna. Podczas miesięcy wiosennych i jesiennych zalecana jest odpowiednia kurtka. Będziesz zadowolony, że ją zabrałeś, gdy zechcesz wyjść na zewnątrz i cieszyć się widokami z otwartego pokładu.'],
        ['h2_sm', '2. Weź aparat (i naładuj telefon)'],
        ['p', 'Bosfor nocą jest niezwykle fotogeniczny. Oświetlone pałace, mosty obwieszone kolorowymi światłami, meczety oświetlone od dołu i panorama miasta odbijająca się na ciemnej wodzie — będą dziesiątki chwil wartych uchwycenia. Upewnij się, że telefon jest w pełni naładowany przed zaokrętowaniem, lub weź mały powerbank. Jeśli masz aparat z trybem nocnym lub możliwością robienia zdjęć w słabym świetle, weź go. Niektóre z najlepszych ujęć pochodzą z górnego pokładu, gdy łódź przepływa pod Mostem Bosforskim.'],
        ['h2_sm', '3. Przyjdź co najmniej 20 minut wcześniej'],
        ['p', 'Wsiadanie odbywa się na zasadzie kto pierwszy ten lepszy w wyborze stolika (chyba że zarezerwowałeś pakiet VIP ze stolikiem przy oknie). Przybycie 20 minut przed podanym czasem wsiadania daje Ci najlepszą szansę na zdobycie stolika przy oknie lub blisko sceny. Nasz zespół miejsca spotkania będzie tam, aby poprowadzić Cię do łodzi, ale jeśli przybędziesz dokładnie w czasie odlotu, możesz skończyć przy mniej idealnym stoliku.'],
        ['h2_sm', '4. Wybierz odpowiedni czas wycieczki'],
        ['p', 'Zazwyczaj są dwie opcje rejsu: rejs o zachodzie słońca (odjazd około 17:30) i rejs z kolacją (odjazd około 20:00-20:30). Rejs o zachodzie słońca daje Ci doświadczenie złotej godziny i przejście od dnia do nocy — idealne dla fotografów i tych, którzy wolą wcześniejszy wieczór. Rejs z kolacją to klasyczne doświadczenie nocne z miastem w pełni oświetlonym. Oba obejmują pełną kolację i program rozrywkowy. Jeśli to Twój pierwszy raz, rejs z kolacją jest najpopularniejszym wyborem.'],
        ['h2_sm', '5. Rezerwuj przez WhatsApp dla najszybszej odpowiedzi'],
        ['p', 'Chociaż możesz znaleźć rejsy po Bosforze przez różne platformy online, rezerwowanie bezpośrednio przez WhatsApp jest najszybszą i najbardziej elastyczną opcją. Otrzymujesz natychmiastową odpowiedź, możesz zadawać pytania w czasie rzeczywistym i otrzymujesz osobiste rekomendacje na podstawie wielkości grupy i preferencji. Nie ma formularza do wypełnienia ani czekania na potwierdzenia e-mailowe. Po prostu wyślij wiadomość z datą, liczbą gości i preferowanym pakietem, a będziesz miał potwierdzoną rezerwację w ciągu kilku minut.'],
        ['h2_sm', '6. Nie jest wymagana przedpłata'],
        ['p', 'To zaskakuje wielu podróżnych, ale renomowani operatorzy rejsów po Bosforze — w tym Bosphorus Night — nie wymagają żadnej zaliczki. Rezerwujesz swoje miejsce przez WhatsApp, przybywasz do przystani i płacisz na łodzi. Oznacza to, że nie ma żadnego ryzyka finansowego dla Ciebie. Jeśli Twoje plany się zmienią, po prostu daj nam znać i nie ma żadnej opłaty. Płatność na łodzi może być dokonana gotówką (liry tureckie, euro lub dolary amerykańskie) lub kartą kredytową/debetową.'],
        ['h2_sm', '7. Choroba morska rzadko jest problemem'],
        ['p', 'Bosfor to cieśnina, a nie otwarte morze. Woda jest stosunkowo spokojna, zwłaszcza w porównaniu z wodami oceanu. Łodzie rejsowe są duże i stabilne, a trasa pozostaje w osłoniętej cieśninie przez cały czas. Zdecydowana większość gości w ogóle nie doświadcza dyskomfortu ruchu. Jeśli jesteś szczególnie wrażliwy, siedzenie w środku łodzi (a nie na dziobie lub rufie) zapewnia najbardziej stabilną jazdę. Posiadanie jedzenia w żołądku również pomaga — więc jedzenie kolacji jest faktycznie dobrą profilaktyką.'],
        ['h2_sm', '8. Poznaj najlepsze miejsca na zdjęcia'],
        ['p', 'Trzy najczęściej fotografowane chwile w rejsie to: przepływanie pod Mostem Bosforskim (światła są bezpośrednio nad Tobą i odbijają się od wody), widok Wieży Panny stojącej samotnie pośrodku cieśniny i panoramiczny widok panoramy starego miasta z meczetami i minaretami. Górny pokład oferuje najlepsze widoki bez przeszkód do zdjęć. Idź na górę między daniami lub podczas przerw w rozrywce — personel zatrzyma Ci stolik.'],
        ['h2_sm', '9. Dzieci są mile widziane'],
        ['p', 'Rejsy z kolacją po Bosforze są przyjazne rodzinom. Dzieci poniżej 6 lat płyną za darmo, a dzieci w wieku 6 do 12 lat płacą połowę ceny. Program rozrywkowy — zwłaszcza tańce ludowe i muzyka — zwykle fascynuje dzieci. Łodzie są bezpieczne i przestronne, z zamkniętymi obszarami jadalnymi i strzeżonymi górnymi pokładami. Mimo to miej oko na młodsze dzieci w pobliżu balustrad i schodów. Jeśli podróżujesz jako rodzina, daj nam znać podczas rezerwacji, abyśmy mogli zorganizować odpowiedni stolik.'],
        ['h2_sm', '10. Bezpłatna anulacja — Zawsze'],
        ['p', 'Życie się dzieje. Pogoda się zmienia, poziomy energii spadają, plany się zmieniają. Z Bosphorus Night anulowanie jest zawsze bezpłatne. Niezależnie od tego, czy anulujesz tydzień wcześniej, czy kilka godzin przed odlotem, nie ma żadnej opłaty ani kary. Po prostu wyślij nam wiadomość WhatsApp. To jedna z zalet modelu bez przedpłaty — ponieważ nic nie zapłaciłeś, anulowanie jest tak proste jak szybka wiadomość. Wolimy, abyś przyjechał, gdy masz nastrój, aby się nim cieszyć.'],
        ['p_top', 'Uzbrojony w te dziesięć wskazówek jesteś gotowy na najlepsze możliwe doświadczenie rejsu po Bosforze. Połączenie nocnego piękna Stambułu, pełnej tureckiej kolacji i rozrywki na żywo czyni z tego jeden z najbardziej niezapomnianych wieczorów, jakie możesz przeżyć gdziekolwiek na świecie. Tylko pamiętaj: warstwy, naładowany telefon i przybycie wcześnie.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026', blurb: 'Kompletny przewodnik po pakietach, cenach i tym, czego się spodziewać.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Rejs po Bosforze dziś wieczorem — Przewodnik last minute', blurb: 'Zarezerwuj rejs tego samego dnia z natychmiastowym potwierdzeniem WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Przewodnik po rejsie o zachodzie słońca po Bosforze', blurb: 'Złota godzina na wodzie — najlepsze doświadczenie zachodu słońca.' },
        'bosphorus-cruise-with-kids-family': { title: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny', blurb: 'Rejsy przyjazne rodzinie z dziećmi poniżej 6 lat za darmo.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny Stambuł',
      desc: 'Czy rejs z kolacją po Bosforze jest odpowiedni dla dzieci? Tak! Dzieci poniżej 6 lat za darmo, 6-12 lat za pół ceny. Wskazówki rodzinne, czego się spodziewać i jak zarezerwować.',
      h1: 'Rejs po Bosforze z dziećmi — Przewodnik rodzinny',
      alt: 'Rodziny cieszące się otwartym pokładem rejsu po Bosforze',
      body: [
        ['p', 'Jednym z najczęstszych pytań, które otrzymujemy od rodzin planujących podróż do Stambułu, jest: „Czy rejs z kolacją po Bosforze jest odpowiedni dla dzieci?" Odpowiedź brzmi pewne tak. W rzeczywistości wiele rodzin mówi nam, że rejs był punktem kulminacyjnym całych ich wakacji — nie tylko dla rodziców, ale także dla dzieci. Oto wszystko, co musisz wiedzieć o zabraniu swojej rodziny na rejs po Bosforze.'],
        ['h2', 'Polityka wieku i ceny'],
        ['p', 'Nasze ceny dla dzieci są proste i przyjazne rodzinom. Dzieci w wieku 0–3 lat płyną całkowicie bezpłatnie — bez biletu, bez opłaty. Dzieci w wieku 4–8 lat płacą połowę ceny dorosłej. Dzieci w wieku 9 lat i starsze są obciążane pełną stawką dorosłą. Dotyczy to obu pakietów: Standardowego i VIP.'],
        ['p', 'Dla rodziny czterech osób z dwojgiem dzieci w wieku 4–8, rejs z kolacją po Bosforze kosztuje już od €72 całkowicie za pakiet Standardowy — czyli dwa bilety dorosłych po €24 każdy plus dwa bilety dziecięce za połowę ceny po €12 każdy. Za niezapomniany wieczór na wodzie z całą rodziną, to stanowi doskonałą wartość w porównaniu z restauracją w obszarach turystycznych.'],
        ['h2', 'Czy jest bezpieczne dla dzieci?'],
        ['p', 'Łodzie rejsowe używane do wycieczek z kolacją po Bosforze są dużymi, stabilnymi statkami komercyjnymi — a nie małymi prywatnymi łodziami. Mają zamknięte obszary jadalne na dolnych pokładach i otwarte obszary widokowe na górnym pokładzie z odpowiednimi balustradami i barierami bezpieczeństwa. Bosfor to cieśnina o stosunkowo spokojnych wodach, więc jazda jest płynna i stabilna. Choroba morska jest niezwykle rzadka, nawet u dzieci.'],
        ['p', 'Mimo to, jak w każdym środowisku nadwodnym, obowiązuje zdrowy rozsądek. Miej baczne oko na małych dzieci w pobliżu schodów i otwartych obszarów pokładu. Załoga jest przyzwyczajona do obecności rodzin na pokładzie i pomoże zapewnić dzieciom bezpieczeństwo, ale nadzór rodzicielski jest zawsze pierwszą linią bezpieczeństwa.'],
        ['h2', 'Co dzieci lubią najbardziej'],
        ['p', 'Możesz pomyśleć, że rejs z kolacją to przede wszystkim doświadczenie dla dorosłych, ale dzieci konsekwentnie reagują na kilka elementów wieczoru. Rozrywka na żywo to największy hit — kolorowe kostiumy tańca ludowego, energiczna muzyka, a zwłaszcza pokaz tańca brzucha zwykle urzekają dzieci w każdym wieku. Wiele dzieci kończy klaskaniem, tańczeniem na swoich miejscach lub próbą naśladowania ruchów.'],
        ['p', 'Sama jazda łodzią jest ekscytująca dla dzieci, które nigdy nie były na dużym statku. Obserwowanie oświetlonych mostów przepływających nad głową, dostrzeganie Wieży Panny i widzenie świateł miasta z wody to autentycznie ekscytujące doświadczenia dla młodych oczu. Górny pokład, gdzie dzieci mogą poczuć wiatr i zobaczyć wodę przepływającą obok, jest zazwyczaj ulubionym miejscem.'],
        ['p', 'Starsze dzieci (8 lat i więcej) często stają się zainteresowane zabytkami wzdłuż trasy. Wskazywanie pałaców, meczetów i fortec, gdy łódź je mija, może zamienić rejs w nieformalną lekcję historii — zwłaszcza jeśli odwiedzałeś te miejsca w ciągu dnia.'],
        ['h2', 'Menu dla dzieci'],
        ['p', 'Menu kolacyjne to zestaw dań tureckich i międzynarodowych. Chociaż nie ma osobnego menu dla dzieci, wybór jest na tyle szeroki, że większość dzieci znajduje wiele do jedzenia. Chleb, ryż, grillowany kurczak i sałatki są łagodne i znajome. Wybór zimnych meze obejmuje pozycje takie jak hummus i ser, które dzieci zwykle lubią. Desery — zwłaszcza baklava i słodkie wypieki — są powszechnie popularne wśród młodszych gości.'],
        ['p', 'Jeśli Twoje dziecko ma określone potrzeby dietetyczne lub alergie, daj nam znać podczas rezerwacji, a możemy sprawdzić w kuchni z wyprzedzeniem. Napoje bezalkoholowe, woda i sok są wliczone we wszystkie pakiety, więc dzieci nie będą spragnione.'],
        ['h2', 'Wskazówki dla rodzin'],
        ['ul', [
          ['<strong class="text-white/80">Weź lekką kurtkę dla każdego dziecka</strong> — Górny pokład jest wietrzny, a dzieci często chcą spędzać czas na zewnątrz, oglądając wodę i światła.'],
          ['<strong class="text-white/80">Rozważ rejs o zachodzie słońca</strong> — Wyrusza wcześniej (około 17:30) i wraca o 21:00, co lepiej pasuje do harmonogramu snu młodszych dzieci niż rejs z kolacją wracający około 23:30.'],
          ['<strong class="text-white/80">Przyjdź wcześnie po dobry stolik</strong> — Stolik przy oknie blisko sceny daje dzieciom najlepsze doświadczenie. Pakiety VIP to gwarantują, ale przybycie 20 minut wcześniej dla Standard lub Premium również pomaga.'],
          ['<strong class="text-white/80">Weź małe rozproszenia</strong> — Choć rozrywka i widoki angażują większość dzieci, posiadanie małej kolorowanki lub tabletu z filmem może pomóc w spokojniejszych chwilach dla bardzo małych dzieci.'],
          ['<strong class="text-white/80">Skorzystaj z toalety przed wsiadaniem</strong> — Łódź ma toalety, ale mogą być zajęte w szczytowych momentach. Szybka wizyta przed odlotem ułatwia pierwszą godzinę.'],
        ]],
        ['h2', 'Jak rezerwować jako rodzina'],
        ['p', 'Rezerwacja jest prosta. Wyślij nam wiadomość WhatsApp z liczbą dorosłych, liczbą i wiekiem dzieci, preferowaną datą i tym, który pakiet Cię interesuje. Obliczymy sumę (pamiętając: poniżej 6 lat za darmo, 6-12 za pół ceny) i natychmiast potwierdzimy dostępność. Nie jest wymagana żadna przedpłata — płacisz na łodzi.'],
        ['p', 'Jeśli nie jesteś pewien, który pakiet najlepiej pasuje do Twojej rodziny, po prostu zapytaj. Dla większości rodzin pakiet Standardowy oferuje wszystko, czego potrzebujesz. Ulepszenie Premium jest warte, jeśli dorośli chcą cieszyć się napojami alkoholowymi z kolacją. Pakiet VIP ze swoim zarezerwowanym stolikiem przy oknie jest idealny dla rodzin, które chcą gwarantowane miejsce w pierwszym rzędzie bez wczesnego przybycia.'],
        ['p', 'Rejs po Bosforze to jedno z rzadkich doświadczeń w Stambule, które naprawdę działa dla każdego wieku. Twoje dzieci pokochają światła, muzykę i przygodę bycia na wodzie nocą. Pokochasz widoki, jedzenie i kilka godzin opieki, podczas gdy cała rodzina dobrze się bawi razem.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Najlepszy rejs z kolacją po Bosforze w Stambule 2026', blurb: 'Kompletny przewodnik po pakietach, cenach i tym, czego się spodziewać.' },
        'things-to-know-istanbul-boat-tour': { title: '10 rzeczy do wiedzy przed wycieczką łodzią po Stambule', blurb: 'Istotne wskazówki dla pierwszych razy pływających po Bosforze.' },
        'bosphorus-sunset-cruise-guide': { title: 'Przewodnik po rejsie o zachodzie słońca po Bosforze', blurb: 'Złota godzina na wodzie — najlepsze doświadczenie zachodu słońca.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Rejs po Bosforze dziś wieczorem — Przewodnik last minute', blurb: 'Zarezerwuj rejs tego samego dnia z natychmiastowym potwierdzeniem WhatsApp.' },
      },
    },
  },

  bg: {
    'index': {
      title: 'Блог — Bosphorus Night',
      desc: 'Съвети за круиз по Босфора, ръководства и вътрешни знания. Планирайте перфектния си круиз с вечеря в Истанбул с нашите експертни статии.',
      ogDesc: 'Съвети за круиз по Босфора, ръководства и вътрешни знания. Планирайте перфектния си круиз с вечеря в Истанбул.',
      h1: 'Блог',
      lead: 'Съвети за круиз, ръководства за Истанбул и вътрешни знания, които да ви помогнат да планирате перфектното преживяване на Босфора.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 април 2026', title: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026', blurb: 'Всичко, което трябва да знаете за най-високо оценения круиз с вечеря в Истанбул. От пакети и цени до забавления и зашеметяващи нощни гледки.', alt: 'Лодка за круиз с вечеря по Босфора през нощта с осветен мост' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 април 2026', title: 'Круиз по Босфора тази вечер — Ръководство в последната минута', blurb: 'Искате да плавате по Босфора тази вечер? Ето всичко, което трябва да знаете за резервации в последната минута, наличност и как да си осигурите място.', alt: 'Интериор на луксозна столова за круиз по Босфора' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 април 2026', title: 'Ръководство за круиз при залез по Босфора', blurb: 'Изпитайте златния час на Истанбул от водата. Всичко за круиза с вечеря при залез — време, какво да очаквате и защо е незабравимо.', alt: 'Драматичен залез над пролива Босфор' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 април 2026', title: '10 неща, които да знаете преди обиколката с лодка в Истанбул', blurb: 'Планирате круиз по Босфора? От това какво да облечете до съвети за морска болест — ето 10 ключови неща, които всеки начинаещ трябва да знае.', alt: 'Панорамна гледка на лодка, плаваща по Босфора' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 април 2026', title: 'Круиз по Босфора с деца — Семейно ръководство', blurb: 'Подходящ ли е круизът с вечеря за деца? Абсолютно. Деца под 6 години плават безплатно, 6-12 години на половин цена. Ето вашето пълно семейно ръководство.', alt: 'Семейства, наслаждаващи се на палубата на круиз по Босфора' },
      ],
      readMore: 'Прочети повече →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026 — Пълно ръководство',
      desc: 'Всичко, което трябва да знаете за най-добрия круиз с вечеря в Истанбул. Пакети от €24, турски шоута на живо, зашеметяващи нощни гледки. Резервирайте незабавно.',
      h1: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026',
      alt: 'Луксозна круизна лодка, плъзгаща се под осветения Босфорски мост през нощта',
      body: [
        ['p', 'Истанбул е един от малкото градове в света, където можете да вечеряте на вода, докато наблюдавате как два континента светят около вас. Круизът с вечеря по Босфора не е просто хранене — това е най-емблематичното вечерно преживяване, което градът предлага. Независимо дали посещавате Истанбул за първи път или се връщате за друго пътуване, прекарването на нощ на Босфора е нещо, което ще запомните за години.'],
        ['h2', 'Какво го прави специален'],
        ['p', 'Босфорският пролив е воден път с дължина 30 километра, разделящ Европа и Азия. Нощем историческите дворци, джамии и мостове по бреговете му са осветени по зрелищен начин. От вашата маса на лодката ще видите дворец Долмабахче, светещ в бяло срещу тъмния хълм, Девическата кула, стояща сама във водата с топла жълта светлина, и двата велики висящи моста — Босфорският мост и мостът Фатих Султан Мехмет — простиращи се между континентите в ленти от цвят.'],
        ['p', 'Маршрутът на круиза обикновено тръгва от пристана Кабаташ, близо до района на двореца Долмабахче. Лодката се отправя на север по европейския бряг, минавайки край украсените крайбрежни имения, известни като ялъ, дворецът Чираган и крепостта Румели. След това завива на юг по азиатската страна, предлагайки гледки към двореца Бейлербейи и крайбрежието на Юскюдар, преди да обиколи назад. Цялото пътуване отнема приблизително три до четири часа, в зависимост от пакета.'],
        ['h2', 'Изживяване на вечерята'],
        ['p', 'Вечерята се сервира като зададено меню, което комбинира турска и международна кухня. Можете да очаквате избор от студени и топли предястия — хумус, пълнени лозови листа, сезонни салати — последвани от основно ястие от грилови меса или риба с ориз и печени зеленчуци. Десертът обикновено е класически турски сладкиш като баклава или кадаиф, съчетан с турски чай или кафе. Безалкохолни напитки и вода са включени във всички пакети, докато алкохолни напитки са налични с опциите Premium и VIP.'],
        ['h2', 'Развлечения на живо'],
        ['p', 'Развлекателната програма е една от основните точки. Очаквайте пълен списък от традиционни турски народни танци, изпълнени в цветни регионални костюми, енергично представление на кючек, музика на живо от турска група и DJ сет, който поддържа настроението с напредването на вечерта. Някои круизи включват и церемония на въртящи се дервиши — омайваща суфистка духовна практика, която е част от турската култура от векове. Шоуто продължава приблизително 90 минути и е създадено да даде на международните гости богат вкус от турското сценично изкуство.'],
        ['h2', 'Пакети и цени'],
        ['p', 'В Bosphorus Night предлагаме два основни пакета, с допълнителни опции за напитки, хотелски трансфер и специални случаи:'],
        ['ul', [
          ['<strong class="text-white/80">Стандартен круиз с вечеря (от €24)</strong> — Пълна 4-курсова вечеря, безалкохолни напитки, развлечения на живо, шоута на народни танци и кючек, DJ на горната палуба. Най-популярният избор за двойки, семейства и пътуващи сами.'],
          ['<strong class="text-white/80">VIP круиз с вечеря (от €55)</strong> — Разширено меню, включващо премиум меса (rib-eye, телешко филе), 15+ турски мезета, места близо до сцената и подобрено обслужване. Перфектен за специални случаи и годишнини.'],
        ]],
        ['p_sm', 'Допълнения: неограничени напитки (€30/човек), хотелски трансфер (€10/човек), романтична маса (€15/резервация). Плащане на лодката — без необходимост от предплащане.'],
        ['p', 'Деца на възраст от 6 до 12 години обикновено плащат половин цена, а деца под 6 години плават безплатно. Не се изисква предплащане — плащате на лодката, което премахва всеки риск от резервация.'],
        ['h2', 'Как да резервирате'],
        ['p', 'Най-лесният начин да резервирате е чрез WhatsApp. Просто ни изпратете съобщение с предпочитаната от вас дата, броя гости и кой пакет ви интересува. Нашият екип отговаря в рамките на минути, потвърждава наличността и ви изпраща всички подробности — място за среща, време за качване и какво да очаквате. Няма онлайн платежна форма и няма депозит. Плащате в брой или с карта директно на лодката.'],
        ['h2', 'Съвети за най-доброто преживяване'],
        ['p', 'Пристигнете на пристана поне 20 минути преди отплаване, за да получите добра маса. Облечете се smart casual — лодката не е прекалено формална, но ще се почувствате по-комфортно с нещо стъпка над плажното облекло. Вземете лек жакет или шал, защото горната палуба може да е ветровита дори през лятото. И дръжте телефона си зареден — ще искате да заснемете гледките, особено когато лодката минава под осветените мостове.'],
        ['p', 'Круизът с вечеря по Босфора, без преувеличение, е най-добрият начин да изпитате Истанбул нощем. Комбинацията от храна, жива култура и гледки към силуета на града, отразени в тъмната вода, не прилича на нищо друго. Ако правите само една „голяма вечер" по време на пътуването си в Истанбул, нека е тази.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфора тази вечер — Ръководство в последната минута', blurb: 'Резервирайте круиз за същия ден с моментално потвърждение в WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ръководство за круиз при залез по Босфора', blurb: 'Златен час на водата — крайното преживяване при залез.' },
        'things-to-know-istanbul-boat-tour': { title: '10 неща, които да знаете преди обиколката с лодка в Истанбул', blurb: 'Ключови съвети за круизьори по Босфора за първи път.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфора с деца — Семейно ръководство', blurb: 'Семейно ориентирани круизи с деца под 6 безплатно.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Круиз по Босфора тази вечер — Ръководство за резервация в последната минута Истанбул',
      desc: 'Искате да плавате по Босфора тази вечер? Ето как да резервирате круиз с вечеря в последната минута в Истанбул. Наличност за същия ден, моментална резервация чрез WhatsApp.',
      h1: 'Круиз по Босфора тази вечер — Ръководство за резервация в последната минута',
      alt: 'Елегантна столова на круиз с вечеря по Босфора',
      body: [
        ['p', '15:00 е и току-що сте решили, че искате да направите нещо специално тази вечер. Може би сте пристигнали в Истанбул тази сутрин и искате да извлечете максимума от първата си вечер. Може би времето се оказа по-добро от очакваното и нощта на водата изведнъж звучи перфектно. Каквато и да е причината, въпросът е прост: можете ли все още да резервирате круиз с вечеря по Босфора за тази вечер?'],
        ['p', 'Краткият отговор е <strong class="text-white/90">да</strong>. Резервациите за същия ден не само са възможни — те са обичайни. Ето всичко, което трябва да знаете за резервиране на круиз в последната минута в Истанбул.'],
        ['h2', 'Можете ли наистина да резервирате за същия ден?'],
        ['p', 'Абсолютно. За разлика от много туристически дейности, които изискват предварителни резервации, круизите с вечеря по Босфора оперират с големи плавателни съдове, които могат да поберат стотици гости. Това означава, че почти винаги има наличност, дори в същия ден. По време на пиковите летни месеци (юли и август) уикенд круизите могат да се запълват по-бързо, но круизите в делнични дни рядко се разпродават напълно. През пролетта и есента местата в последната минута практически са гарантирани.'],
        ['p', 'В Bosphorus Night поддържаме WhatsApp линията си отворена от ранна сутрин до късна вечер именно защото знаем, че много гости решават в самия ден. Нашият екип може да потвърди резервацията ви в рамките на минути след вашето съобщение.'],
        ['h2', 'Кои обиколки се провеждат тази вечер?'],
        ['p', 'Стандартният круиз с вечеря тръгва ежедневно от пристана Кабаташ. Типичното разписание работи така: качването започва около 19:30 до 20:00, лодката тръгва около 20:30, а круизът продължава около три часа, връщайки се на пристана около 23:30. Някои оператори също предлагат круиз при залез, който тръгва около 17:30 и се връща до 21:00 — въпреки че за решение в последната минута следобед вечерният круиз с вечеря е по-практичната опция.'],
        ['p', 'И двата пакета — Стандартен и VIP — са налични за резервация за същия ден. Стандартният пакет започва от €24 на човек и включва пълна 4-курсова вечеря, безалкохолни напитки и развлекателна програма. Не е необходимо да избирате пакета си предварително; просто ни напишете в WhatsApp и ще ви преведем през опциите.'],
        ['h2', 'Как да стигнете до Кабаташ'],
        ['p', 'Кабаташ е една от най-достъпните точки в Истанбул. Ако сте отседнали в Султанахмет (стария град), трамвай T1 минава директно до Кабаташ — това е последната спирка. Пътуването отнема около 25 минути. От Таксим можете да вземете фуникулар (линия F1), който се спуска директно до Кабаташ за по-малко от три минути. От азиатската страна вземете ферибот до Кабаташ или Бешикташ. Такситата от повечето централни райони струват между 100-200 TL в зависимост от трафика и разстоянието.'],
        ['p', 'Препоръчваме да пристигнете в района на пристана най-късно до 19:30. Това ви дава време да намерите мястото за среща, да срещнете член на нашия екип, който ще ви заведе до лодката, и да се настаните на масата си преди отплаване.'],
        ['h2', 'Какво да донесете'],
        ['p', 'Дръжте го просто. Вземете телефона си за снимки, лек жакет или жилетка за горната палуба (дори летните вечери могат да бъдат ветровити на водата) и пари в брой или карта за плащане на лодката. Няма дрескод, но smart casual работи най-добре — помислете за хубава риза или блуза вместо шорти и джапанки. Дамите могат да искат ластик за коса или шал, тъй като вятърът се засилва, когато лодката е в движение.'],
        ['h2', 'Процес на резервиране'],
        ['p', 'Ето как работи в три бързи стъпки:'],
        ['ol', [
          ['<strong class="text-white/80">Изпратете ни съобщение в WhatsApp</strong> — Кажете ни колко гости, предпочитания пакет (или поискайте препоръка) и потвърдете датата на тазвечерта.'],
          ['<strong class="text-white/80">Получете моментално потвърждение</strong> — Отговаряме в рамките на минути с адреса на мястото за среща, времето за качване и всички други детайли, които ви трябват.'],
          ['<strong class="text-white/80">Появете се и се наслаждавайте</strong> — Без депозит, без предплащане, без отпечатани билети. Просто пристигнете на мястото за среща и нашият екип се грижи за останалото. Плащате директно на лодката.'],
        ]],
        ['p', 'Наистина няма никакъв риск. Ако плановете ви се променят и трябва да отмените, просто ни уведомете в WhatsApp — дори няколко часа преди отплаване е добре. Без такси за анулиране, без задавани въпроси.'],
        ['p', 'Така че ако тази вечер се чувства като нощ на Босфора, не я премисляйте прекалено. Изпратете бързо съобщение в WhatsApp и след няколко часа ще вечеряте на вода със силуета на Истанбул, светещ около вас.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026', blurb: 'Пълно ръководство за пакети, цени и какво да очаквате.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ръководство за круиз при залез по Босфора', blurb: 'Златен час на водата — крайното преживяване при залез.' },
        'things-to-know-istanbul-boat-tour': { title: '10 неща, които да знаете преди обиколката с лодка в Истанбул', blurb: 'Ключови съвети за круизьори по Босфора за първи път.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфора с деца — Семейно ръководство', blurb: 'Семейно ориентирани круизи с деца под 6 безплатно.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Круиз при залез по Босфора — Какво да очаквате и защо си струва',
      desc: 'Изпитайте златния час на Истанбул от водата. 3-часов круиз с вечеря при залез с шоута на живо, тръгване в 17:30 от Кабаташ. Пълно ръководство вътре.',
      h1: 'Круиз при залез по Босфора — Какво да очаквате и защо си струва',
      alt: 'Драматичен златен залез над пролива Босфор със силуети на джамии',
      body: [
        ['p', 'Има причина фотографите, двойките и опитните пътешественици всички да казват едно и също: ако искате да видите Истанбул в най-красивата му форма, гледайте залеза от Босфора. Начинът, по който светлината превръща водата в злато, рисува минаретата в нюанси на кехлибар и бавно отстъпва на вечерното сияние на града — това е едно от тези преживявания, които остават с вас дълго след като напуснете Турция.'],
        ['p', 'Круизът при залез по Босфора взема това естествено зрелище и го превръща в пълно вечерно преживяване, допълнено с вечеря, развлечения на живо и панорамни гледки, на които никой бар на покрив не може да съперничи.'],
        ['h2', 'Защо часът на залеза е магически'],
        ['p', 'Истанбул се намира на приблизително 41 градуса северна ширина, което означава, че времената на залез варират значително през годината. През лятото слънцето залязва около 20:30, разтилайки дълъг златен час, който се простира по водата. През пролетта и есента залезът идва по-рано — около 18:00 до 19:00 — създавайки по-драматичен, по-бърз преход от ден към нощ. Така или иначе, Босфорът действа като естествено огледало, отразявайки цветовете на небето и усилвайки зрелището.'],
        ['p', 'Това, което прави залеза по Босфора уникално специален, е силуетът на града. Когато слънцето пада зад европейската страна, силуетите на джамията Сюлеймание, Света София и Синята джамия се появяват на оранжево-розовото небе. Междувременно азиатската страна улавя последната топла светлина върху своите крайбрежни дворци и зелени хълмове. Буквално гледате как слънцето залязва между два континента — малко места на Земята могат да предложат тази перспектива.'],
        ['h2', 'Изживяване на круиза'],
        ['p', 'Круизът с вечеря при залез обикновено тръгва от пристана Кабаташ около 17:30, въпреки че времето се коригира леко според сезоните, за да улови златния час в пика му. Лодката се отправя на север по протежение на пролива, давайки ви гледки към двореца Долмабахче, двореца Чираган, джамията Ортакьой и Босфорския мост — всички къпани в топла светлина.'],
        ['p', 'Вечерята се сервира, когато слънцето започне да залязва. Менюто включва разнообразие от турски и международни ястия: студени плата с мезета, грилови меса или прясна риба, сезонни зеленчуци и традиционни десерти като баклава. Безалкохолните напитки са включени в Стандартния пакет, докато опциите Premium и VIP добавят алкохолни напитки — и има нещо особено приятно в това да отпивате чаша турско вино, докато гледате как небето променя цвета си над водата.'],
        ['p', 'С падането на мрака започва развлекателната програма. Традиционни турски народни танци, представление на кючек, музика на живо и понякога церемония на въртящи се дервиши изпълват останалите часове. Преходът от златен залез към нощно осветление на града е безпроблемен — един момент гледате как последната светлина изчезва, а в следващия сте заобиколени от мигащите светлини на крайбрежието на Истанбул.'],
        ['h2', 'Съвети за фотография'],
        ['p', 'Круизът при залез е мечтата на фотограф, но няколко съвета ще ви помогнат да получите най-добрите снимки. Първо, отидете на горната палуба около 30 минути преди залез — тогава светлината е най-топла, а цветовете най-ярки. Снимайте на запад (европейската страна) за класическата силуетна снимка на залез над минарета. Използвайте отраженията на водата, за да добавите дълбочина към композициите си.'],
        ['p', 'За фотографи със смартфон включете HDR режима, за да заснемете както яркото небе, така и по-тъмния преден план. Избягвайте използването на светкавица — тя ще съсипе естествената топлина на светлината. Панорамният режим работи прекрасно за заснемане на широкия размах на силуета. И не забравяйте да оставите телефона за няколко минути и просто да гледате. Някои моменти са по-добре изживени, отколкото заснети.'],
        ['h2', 'Какво да облечете'],
        ['p', 'Горната палуба ще е ветровита, особено когато лодката е в движение. Дори в топла лятна вечер температурите спадат осезаемо на водата след залез. Лек жакет, жилетка или шал е необходим. Слоевете работят най-добре — може да сте комфортно в тениска по време на златния час, но благодарни за допълнителен слой, когато падне мракът. Обувки с известен захват са за предпочитане пред токчета или сандали с гладка подметка, тъй като палубата може да бъде леко хлъзгава от морски пръски.'],
        ['h2', 'Круиз при залез срещу круиз с вечеря — Каква е разликата?'],
        ['p', 'Основната разлика е времето и атмосферата. Круизът при залез тръгва късно следобед и ви дава преживяването на златния час плюс прехода към нощ. Стандартният круиз с вечеря тръгва по-късно (около 20:00-20:30) и е изцяло нощно преживяване — светлини на града, осветени мостове и по-тъмно, по-романтично настроение.'],
        ['p', 'Ако избирате между двете, помислете кое е най-важно за вас. Круизът при залез предлага най-добрите фотографски възможности и по-разнообразно визуално преживяване (ден до нощ). Круизът с вечеря е класическият избор за романтична вечер или празнична вечер навън, с града напълно осветен от самото начало. И двата включват вечеря и пълна развлекателна програма.'],
        ['p', 'За тези, които имат време, идеалната комбинация е круиз при залез една вечер и круиз с вечеря друга — те са наистина различни преживявания. Но ако можете да изберете само едно, круизът при залез предлага нещо наистина уникално: шанса да гледате как Истанбул се трансформира от злато до сребро, докато два континента изчезват от ден към нощ около вас.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026', blurb: 'Пълно ръководство за пакети, цени и какво да очаквате.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфора тази вечер — Ръководство в последната минута', blurb: 'Резервирайте круиз за същия ден с моментално потвърждение в WhatsApp.' },
        'things-to-know-istanbul-boat-tour': { title: '10 неща, които да знаете преди обиколката с лодка в Истанбул', blurb: 'Ключови съвети за круизьори по Босфора за първи път.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфора с деца — Семейно ръководство', blurb: 'Семейно ориентирани круизи с деца под 6 безплатно.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 неща, които да знаете преди обиколката с лодка в Истанбул',
      desc: 'Планирате круиз по Босфора? Ето 10 ключови съвета: какво да облечете, да донесете, да очаквате и как да получите най-доброто преживяване във вашата обиколка с лодка в Истанбул.',
      h1: '10 неща, които да знаете преди обиколката с лодка в Истанбул',
      alt: 'Панорамна гледка на круизна лодка по Босфора със силуета на Истанбул',
      body: [
        ['p', 'Круиз по Босфора е едно от тези преживявания, които практически всеки посетител на Истанбул включва в списъка си — и с основателна причина. Но като всяко пътешествено преживяване, знанието на няколко неща предварително може да направи разликата между добра вечер и страхотна. Ето десет ключови съвета от нашия екип, за да ви помогнем да извлечете максимума от вашата обиколка с лодка в Истанбул.'],
        ['h2_sm', '1. Облечете се на слоеве'],
        ['p', 'Това е съветът номер едно, който даваме на всеки гост. Истанбулските вечери могат да бъдат измамно хладни на водата, дори през лятото. Температурата на горната палуба обикновено е с 5 до 8 градуса по-ниска от тази на брега, а вятърът от движението на лодката я кара да се чувства още по-хладна. Лек жакет, жилетка или пашмина е необходима. По време на пролетните и есенните месеци се препоръчва истинско яке. Ще се радвате, че сте го взели, когато искате да излезете и да се насладите на гледките от откритата палуба.'],
        ['h2_sm', '2. Вземете камера (и дръжте телефона си зареден)'],
        ['p', 'Босфорът през нощта е изключително фотогеничен. Осветени дворци, мостове, окичени с цветни светлини, джамии, осветени отдолу, и силуетът на града, отразен в тъмната вода — ще има десетки моменти, заслужаващи заснемане. Уверете се, че телефонът ви е напълно зареден преди качването, или вземете малка power bank. Ако имате камера с нощен режим или способност за слаба светлина, вземете я. Някои от най-добрите снимки идват от горната палуба, когато лодката минава под Босфорския мост.'],
        ['h2_sm', '3. Пристигнете поне 20 минути по-рано'],
        ['p', 'Качването е на принципа „първи дошъл, първи обслужен" за избора на маса (освен ако не сте резервирали VIP пакет с резервирана маса до прозореца). Пристигането 20 минути преди обявеното време за качване ви дава най-добрия шанс да получите маса близо до прозорците или близо до сцената. Нашият екип в мястото за среща ще бъде там, за да ви заведе до лодката, но ако пристигнете точно в часа на отплаване, може да се озовете на по-малко идеална маса.'],
        ['h2_sm', '4. Изберете подходящото време на обиколката'],
        ['p', 'Обикновено има две опции за круиз: круиз при залез (тръгва около 17:30) и круиз с вечеря (тръгва около 20:00-20:30). Круизът при залез ви дава преживяването на златния час и прехода от ден към нощ — идеален за фотографи и за тези, които предпочитат по-ранна вечер. Круизът с вечеря е класическото нощно преживяване с напълно осветения град. И двата включват пълна вечеря и развлекателна програма. Ако това е първият ви път, круизът с вечеря е най-популярният избор.'],
        ['h2_sm', '5. Резервирайте чрез WhatsApp за най-бърз отговор'],
        ['p', 'Въпреки че можете да намерите круизи по Босфора чрез различни онлайн платформи, резервирането директно чрез WhatsApp е най-бързата и гъвкава опция. Получавате моментален отговор, можете да задавате въпроси в реално време и получавате лични препоръки въз основа на размера на групата и предпочитанията ви. Няма формуляр за попълване и няма чакане за имейл потвърждения. Просто изпратете съобщение с датата си, броя на гостите и предпочитания пакет и ще имате потвърдена резервация в рамките на минути.'],
        ['h2_sm', '6. Не се изисква предплащане'],
        ['p', 'Това изненадва много пътници, но реномираните оператори на круизи по Босфора — включително Bosphorus Night — не изискват никакво предварително плащане. Резервирате мястото си чрез WhatsApp, появявате се на пристана и плащате на лодката. Това означава, че няма финансов риск за вас. Ако плановете ви се променят, просто ни уведомете и няма такса. Плащането на лодката може да се извърши в брой (турски лири, евро или щатски долари) или с кредитна/дебитна карта.'],
        ['h2_sm', '7. Морската болест рядко е проблем'],
        ['p', 'Босфорът е пролив, а не открито море. Водата е сравнително спокойна, особено в сравнение с океанските води. Круизните лодки са големи и стабилни, а маршрутът остава в заслонения пролив през цялото време. Голямото мнозинство гости не изпитват никакъв дискомфорт от движението. Ако сте особено чувствителни, седенето в центъра на лодката (а не на носа или кърмата) осигурява най-стабилното пътуване. Имането на храна в стомаха също помага — така че яденето на вечеря всъщност е добра превенция.'],
        ['h2_sm', '8. Знайте най-добрите места за снимки'],
        ['p', 'Трите най-фотографирани момента в круиза са: преминаването под Босфорския мост (светлините са директно над вас и се отразяват във водата), гледката на Девическата кула, стояща сама в средата на пролива, и панорамната гледка на силуета на стария град с джамиите и минаретата. Горната палуба предлага най-добрите безпрепятствени гледки за снимки. Качете се между ястията или по време на паузи в развлеченията — персоналът ще задържи масата ви за вас.'],
        ['h2_sm', '9. Децата са добре дошли'],
        ['p', 'Круизите с вечеря по Босфора са семейно ориентирани. Деца под 6 години плават безплатно, а деца на 6 до 12 години плащат половин цена. Развлекателната програма — особено народните танци и музиката — обикновено очарова децата. Лодките са безопасни и просторни, със затворени зони за хранене и охранявани горни палуби. Въпреки това, дръжте под око по-малките деца близо до парапетите и стълбите. Ако пътувате като семейство, уведомете ни при резервиране, за да можем да уредим подходяща маса.'],
        ['h2_sm', '10. Безплатно анулиране — Винаги'],
        ['p', 'Животът се случва. Времето се променя, нивата на енергия спадат, плановете се изместват. С Bosphorus Night анулирането винаги е безплатно. Дали анулирате седмица предварително или няколко часа преди отплаване, няма такса и няма наказание. Просто ни изпратете съобщение в WhatsApp. Това е едно от предимствата на модела без предплащане — тъй като не сте платили нищо, анулирането е толкова просто, колкото бързо съобщение. Предпочитаме да дойдете, когато сте в настроение да му се насладите.'],
        ['p_top', 'Въоръжени с тези десет съвета, вие сте готови да имате най-доброто възможно преживяване на круиз по Босфора. Комбинацията от нощната красота на Истанбул, пълна турска вечеря и развлечения на живо прави това една от най-запомнящите се вечери, които можете да имате където и да е по света. Само запомнете: слоеве, зареден телефон и пристигайте рано.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026', blurb: 'Пълно ръководство за пакети, цени и какво да очаквате.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфора тази вечер — Ръководство в последната минута', blurb: 'Резервирайте круиз за същия ден с моментално потвърждение в WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ръководство за круиз при залез по Босфора', blurb: 'Златен час на водата — крайното преживяване при залез.' },
        'bosphorus-cruise-with-kids-family': { title: 'Круиз по Босфора с деца — Семейно ръководство', blurb: 'Семейно ориентирани круизи с деца под 6 безплатно.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Круиз по Босфора с деца — Семейно ръководство Истанбул',
      desc: 'Подходящ ли е круизът с вечеря по Босфора за деца? Да! Деца под 6 безплатно, 6-12 на половин цена. Семейни съвети, какво да очаквате и как да резервирате.',
      h1: 'Круиз по Босфора с деца — Семейно ръководство',
      alt: 'Семейства, наслаждаващи се на откритата палуба на круиз по Босфора',
      body: [
        ['p', 'Един от най-често задаваните въпроси, които получаваме от семейства, планиращи пътуването си до Истанбул, е: „Подходящ ли е круизът с вечеря по Босфора за деца?" Отговорът е уверено да. Всъщност много семейства ни казват, че круизът е бил основният момент от цялата им ваканция — не само за родителите, но и за децата. Ето всичко, което трябва да знаете за вземането на семейството си на круиз по Босфора.'],
        ['h2', 'Възрастова политика и цени'],
        ['p', 'Цените ни за деца са прости и семейно ориентирани. Деца на възраст 0–3 години плават напълно безплатно — без билет, без такса. Деца на 4–8 години плащат половината от цената за възрастен. Деца на 9 и повече години се таксуват по пълната тарифа за възрастен. Това важи и за двата пакета: Стандартен и VIP.'],
        ['p', 'За семейство от четирима с две деца на възраст 4–8 години круиз с вечеря по Босфора струва само €72 общо за Стандартния пакет — това са два билета за възрастни по €24 всеки плюс два билета на половин цена за деца по €12 всеки. За незабравима вечер на вода с цялото семейство, това представлява отлично качество спрямо цената в сравнение с ресторант с маси в туристическите райони.'],
        ['h2', 'Безопасно ли е за деца?'],
        ['p', 'Круизните лодки, използвани за обиколки с вечеря по Босфора, са големи, стабилни търговски плавателни съдове — а не малки частни лодки. Те имат затворени зони за хранене на долните палуби и открити зони за наблюдение на горната палуба с подходящи парапети и предпазни прегради. Босфорът е пролив със сравнително спокойни води, така че пътуването е плавно и стабилно. Морската болест е изключително рядка, дори сред децата.'],
        ['p', 'Въпреки това, както във всяка крайбрежна среда, важи здравият разум. Дръжте бдително око върху малките деца близо до стълбите и откритите палубни зони. Екипажът е свикнал със семейства на борда и ще помогне да се гарантира, че децата ще останат в безопасност, но родителският надзор винаги е първата линия на безопасност.'],
        ['h2', 'Какво най-много харесват децата'],
        ['p', 'Може да си помислите, че круизът с вечеря е преди всичко преживяване за възрастни, но децата постоянно реагират на няколко елемента от вечерта. Развлеченията на живо са най-големият хит — колоритните костюми на народни танци, енергичната музика и особено представлението на кючек обикновено очароват децата на всички възрасти. Много деца в крайна сметка пляскат с ръце, танцуват на местата си или се опитват да имитират движенията.'],
        ['p', 'Самото пътуване с лодката е вълнуващо за деца, които никога не са били на голям плавателен съд. Гледането на осветените мостове, които минават над главите им, забелязването на Девическата кула и виждането на светлините на града от водата са истински вълнуващи преживявания за младите очи. Горната палуба, където децата могат да усетят вятъра и да видят как водата минава покрай тях, обикновено е любимото място.'],
        ['p', 'По-големите деца (8 и повече) често се интересуват от забележителностите по маршрута. Посочването на дворците, джамиите и крепостите, когато лодката минава покрай тях, може да превърне круиза в неформален урок по история — особено ако сте посещавали тези обекти през деня.'],
        ['h2', 'Менюто за деца'],
        ['p', 'Менюто за вечеря е зададено турско и международно ястие. Въпреки че няма отделно детско меню, изборът е достатъчно широк, че повечето деца намират достатъчно за ядене. Хлябът, оризът, печеното пиле и салатите са меки и познати. Изборът на студени мезета включва елементи като хумус и сирене, които децата обикновено харесват. Десертите — особено баклавата и сладките сладкиши — са универсално популярни сред по-младите гости.'],
        ['p', 'Ако детето ви има специфични диетични нужди или алергии, уведомете ни при резервирането и можем да проверим с кухнята предварително. Безалкохолни напитки, вода и сок са включени във всички пакети, така че децата няма да жадуват.'],
        ['h2', 'Съвети за семейства'],
        ['ul', [
          ['<strong class="text-white/80">Вземете лек жакет за всяко дете</strong> — Горната палуба става ветровита и децата често искат да прекарват време навън, гледайки водата и светлините.'],
          ['<strong class="text-white/80">Помислете за круиза при залез</strong> — Той тръгва по-рано (около 17:30) и се връща до 21:00, което работи по-добре за разписанието за лягане на по-малките деца от круиза с вечеря, който се връща около 23:30.'],
          ['<strong class="text-white/80">Пристигнете рано за добра маса</strong> — Маса до прозореца близо до сцената дава на децата най-доброто преживяване. VIP пакетите гарантират това, но пристигането 20 минути по-рано за Стандартен или Premium също помага.'],
          ['<strong class="text-white/80">Вземете малки разсейвания</strong> — Въпреки че развлеченията и гледките държат повечето деца ангажирани, наличието на малка книжка за оцветяване или таблет с филм може да помогне по време на по-тихите моменти за много малките деца.'],
          ['<strong class="text-white/80">Използвайте тоалетните преди качването</strong> — Лодката има тоалетни, но те могат да станат заети по време на пиковите моменти. Бързо посещение преди отплаване прави първия час по-плавен.'],
        ]],
        ['h2', 'Как да резервирате като семейство'],
        ['p', 'Резервирането е просто. Изпратете ни съобщение в WhatsApp с броя възрастни, броя и възрастта на децата, предпочитаната ви дата и кой пакет ви интересува. Ще изчислим общата сума (помнейки: под 6 безплатно, 6-12 на половин цена) и ще потвърдим наличността моментално. Не е необходимо предплащане — плащате на лодката.'],
        ['p', 'Ако не сте сигурни кой пакет най-добре подхожда на семейството ви, просто попитайте. За повечето семейства Стандартният пакет предлага всичко, което ви трябва. Premium ъпгрейдът си струва, ако възрастните искат да се насладят на алкохолни напитки с вечеря. VIP пакетът с резервираната маса до прозореца е идеален за семейства, които искат гарантирано място на първия ред, без да пристигат рано.'],
        ['p', 'Круизът по Босфора е едно от редките преживявания в Истанбул, които наистина работят за всяка възраст. Децата ви ще обикват светлините, музиката и приключението да бъдат на вода през нощта. Вие ще обикнете гледките, храната и няколко часа на грижа, докато цялото семейство се забавлява заедно.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Най-добрият круиз с вечеря по Босфора в Истанбул 2026', blurb: 'Пълно ръководство за пакети, цени и какво да очаквате.' },
        'things-to-know-istanbul-boat-tour': { title: '10 неща, които да знаете преди обиколката с лодка в Истанбул', blurb: 'Ключови съвети за круизьори по Босфора за първи път.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ръководство за круиз при залез по Босфора', blurb: 'Златен час на водата — крайното преживяване при залез.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Круиз по Босфора тази вечер — Ръководство в последната минута', blurb: 'Резервирайте круиз за същия ден с моментално потвърждение в WhatsApp.' },
      },
    },
  },

  ro: {
    'index': {
      title: 'Blog — Bosphorus Night',
      desc: 'Sfaturi pentru croazieră pe Bosfor, ghiduri și cunoștințe din interior. Planificați croaziera cu cină perfectă în Istanbul cu articolele noastre de specialitate.',
      ogDesc: 'Sfaturi pentru croazieră pe Bosfor, ghiduri și cunoștințe din interior. Planificați croaziera cu cină perfectă în Istanbul.',
      h1: 'Blog',
      lead: 'Sfaturi pentru croazieră, ghiduri Istanbul și cunoștințe din interior care să vă ajute să planificați experiența Bosfor perfectă.',
      cards: [
        { slug: 'best-bosphorus-dinner-cruise-istanbul', date: '11 aprilie 2026', title: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026', blurb: 'Tot ce trebuie să știți despre cea mai apreciată experiență de croazieră cu cină din Istanbul. De la pachete și prețuri la divertisment și priveliști nocturne uimitoare.', alt: 'Barcă pentru croazieră cu cină pe Bosfor noaptea cu pod iluminat' },
        { slug: 'istanbul-cruise-tonight-last-minute', date: '11 aprilie 2026', title: 'Croazieră pe Bosfor în seara aceasta — Ghid last minute', blurb: 'Vreți să navigați pe Bosfor în seara aceasta? Iată tot ce trebuie să știți despre rezervările last minute, disponibilitate și cum să vă asigurați locul.', alt: 'Interiorul unei sale de masă luxoase pentru croazieră pe Bosfor' },
        { slug: 'bosphorus-sunset-cruise-guide', date: '10 aprilie 2026', title: 'Ghidul croazierei la apus pe Bosfor', blurb: 'Trăiți ora de aur din Istanbul de pe apă. Totul despre croaziera cu cină la apus — programare, la ce să vă așteptați și de ce este de neuitat.', alt: 'Apus dramatic peste strâmtoarea Bosfor' },
        { slug: 'things-to-know-istanbul-boat-tour', date: '9 aprilie 2026', title: '10 lucruri de știut înainte de turul cu barca în Istanbul', blurb: 'Planificați o croazieră pe Bosfor? De la ce să purtați la sfaturi pentru rău de mare, iată 10 lucruri esențiale pe care fiecare începător ar trebui să le știe.', alt: 'Vedere panoramică a unei bărci navigând pe Bosfor' },
        { slug: 'bosphorus-cruise-with-kids-family', date: '8 aprilie 2026', title: 'Croazieră pe Bosfor cu copii — Ghid de familie', blurb: 'Este croaziera cu cină potrivită pentru copii? Absolut. Copiii sub 6 ani navighează gratuit, vârstele 6-12 la jumătate de preț. Iată ghidul vostru complet de planificare familială.', alt: 'Familii bucurându-se de puntea unei croaziere pe Bosfor' },
      ],
      readMore: 'Citește mai mult →',
    },
    'best-bosphorus-dinner-cruise-istanbul': {
      title: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026 — Ghid complet',
      desc: 'Tot ce trebuie să știți despre cea mai bună croazieră cu cină din Istanbul. Pachete de la €24, spectacole turcești live, priveliști nocturne uimitoare. Rezervați instant.',
      h1: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026',
      alt: 'Barcă de croazieră de lux alunecând sub Podul Bosforului iluminat noaptea',
      body: [
        ['p', 'Istanbulul este unul dintre puținele orașe din lume unde puteți lua cina pe apă în timp ce priviți două continente aprinzându-se în jurul vostru. O croazieră cu cină pe Bosfor nu este doar o masă — este cea mai emblematică experiență de seară pe care orașul o are de oferit. Indiferent dacă vizitați Istanbulul pentru prima dată sau vă întoarceți pentru o altă călătorie, petrecerea unei nopți pe Bosfor este ceva ce veți ține minte ani de zile.'],
        ['h2', 'Ce o face specială'],
        ['p', 'Strâmtoarea Bosfor este o cale navigabilă de 30 de kilometri care separă Europa și Asia. Noaptea, palatele istorice, moscheile și podurile de-a lungul țărmurilor sale sunt iluminate într-un mod spectaculos. De la masa voastră pe barcă, veți vedea Palatul Dolmabahçe strălucind alb pe fundalul dealului întunecat, Turnul Fecioarei stând singur în apă cu lumina sa galbenă caldă, și cele două mari poduri suspendate — Podul Bosforului și Podul Fatih Sultan Mehmet — întinzându-se între continente în panglici de culoare.'],
        ['p', 'Traseul croazierei pleacă de obicei din debarcaderul Kabataş, lângă zona Palatului Dolmabahçe. Barca se îndreaptă spre nord de-a lungul țărmului european, trecând pe lângă conacele ornate de pe malul mării cunoscute sub numele de yalı, Palatul Çırağan și Fortăreața Rumeli. Apoi cotește spre sud pe partea asiatică, oferind priveliști ale Palatului Beylerbeyi și ale faleziei Üsküdar înainte de a se întoarce. Întreaga călătorie durează aproximativ trei până la patru ore, în funcție de pachet.'],
        ['h2', 'Experiența cinei'],
        ['p', 'Cina este servită ca un meniu set care îmbină bucătăria turcească și internațională. Vă puteți aștepta la o selecție de aperitive reci și calde — humus, frunze de viță umplute, salate de sezon — urmate de un fel principal de carne la grătar sau pește cu orez și legume coapte. Desertul este de obicei un dulce turcesc clasic, cum ar fi baklava sau kadayıf, asociat cu ceai sau cafea turcească. Băuturile răcoritoare și apa sunt incluse în toate pachetele, în timp ce băuturile alcoolice sunt disponibile cu opțiunile Premium și VIP.'],
        ['h2', 'Divertisment live'],
        ['p', 'Programul de divertisment este unul dintre cele mai importante puncte. Așteptați-vă la o linie completă de dansuri populare turcești tradiționale, interpretate în costume regionale colorate, o reprezentație energică de dans din buric, muzică live de la o trupă turcească și un set DJ care menține atmosfera pe măsură ce noaptea avansează. Unele croaziere prezintă, de asemenea, o ceremonie a dervișilor rotitori — o practică spirituală sufistă hipnotizantă care a fost parte din cultura turcească timp de secole. Spectacolul durează aproximativ 90 de minute și este conceput să ofere oaspeților internaționali un gust bogat al artelor performative turcești.'],
        ['h2', 'Pachete și prețuri'],
        ['p', 'La Bosphorus Night oferim două pachete principale, cu suplimente opționale pentru băuturi, transfer hotelier și ocazii speciale:'],
        ['ul', [
          ['<strong class="text-white/80">Croazieră cu cină Standard (de la €24)</strong> — Cină completă în 4 feluri, băuturi răcoritoare, divertisment live, spectacole de dansuri populare și dans din buric, DJ pe puntea superioară. Cea mai populară opțiune pentru cupluri, familii și călători singuri.'],
          ['<strong class="text-white/80">Croazieră cu cină VIP (de la €55)</strong> — Meniu extins inclusiv carne premium (rib-eye, mușchi de vită), 15+ meze turcești, locuri lângă scenă și servicii îmbunătățite. Perfect pentru ocazii speciale și aniversări.'],
        ]],
        ['p_sm', 'Suplimente: băuturi nelimitate (€30/persoană), transfer hotelier (€10/persoană), aranjament romantic la masă (€15/rezervare). Plătiți pe barcă — fără plată în avans necesară.'],
        ['p', 'Copiii cu vârste între 6 și 12 ani plătesc de obicei jumătate de preț, iar copiii sub 6 ani gratuit. Nu este necesară nicio plată în avans — plătiți pe barcă, ceea ce elimină orice risc de rezervare.'],
        ['h2', 'Cum să rezervați'],
        ['p', 'Cel mai simplu mod de a rezerva este prin WhatsApp. Pur și simplu trimiteți-ne un mesaj cu data preferată, numărul de oaspeți și ce pachet vă interesează. Echipa noastră răspunde în câteva minute, confirmă disponibilitatea și vă trimite toate detaliile — punctul de întâlnire, ora de îmbarcare și la ce să vă așteptați. Nu există un formular de plată online și nici un depozit. Plătiți în numerar sau cu cardul direct pe barcă.'],
        ['h2', 'Sfaturi pentru cea mai bună experiență'],
        ['p', 'Ajungeți la debarcader cu cel puțin 20 de minute înainte de plecare pentru a obține o masă bună. Îmbrăcați-vă smart casual — barca nu este excesiv de formală, dar vă veți simți mai confortabil în ceva cu un pas peste îmbrăcămintea de plajă. Aduceți o jachetă ușoară sau un șal, deoarece puntea superioară poate fi vântoasă chiar și vara. Și mențineți telefonul încărcat — veți dori să surprindeți priveliștile, mai ales când barca trece pe sub podurile iluminate.'],
        ['p', 'O croazieră cu cină pe Bosfor este, fără exagerare, cea mai bună modalitate de a experimenta Istanbulul noaptea. Combinația de mâncare, cultură live și priveliști ale liniei orizontului orașului reflectate pe apa întunecată este altfel decât orice altceva. Dacă faceți doar o singură „seară mare" în timpul călătoriei voastre la Istanbul, faceți-o pe aceasta.'],
      ],
      related: {
        'istanbul-cruise-tonight-last-minute': { title: 'Croazieră pe Bosfor în seara aceasta — Ghid last minute', blurb: 'Rezervați o croazieră în aceeași zi cu confirmare instantanee WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ghidul croazierei la apus pe Bosfor', blurb: 'Ora de aur pe apă — experiența supremă la apus.' },
        'things-to-know-istanbul-boat-tour': { title: '10 lucruri de știut înainte de turul cu barca în Istanbul', blurb: 'Sfaturi esențiale pentru cei care navighează pe Bosfor pentru prima dată.' },
        'bosphorus-cruise-with-kids-family': { title: 'Croazieră pe Bosfor cu copii — Ghid de familie', blurb: 'Croaziere prietenoase familiilor cu copii sub 6 ani gratuit.' },
      },
    },
    'istanbul-cruise-tonight-last-minute': {
      title: 'Croazieră pe Bosfor în seara aceasta — Ghid de rezervare last minute Istanbul',
      desc: 'Vreți să navigați pe Bosfor în seara aceasta? Iată cum să rezervați o croazieră cu cină last minute în Istanbul. Disponibilitate în aceeași zi, rezervare instantanee WhatsApp.',
      h1: 'Croazieră pe Bosfor în seara aceasta — Ghid de rezervare last minute',
      alt: 'Sală de masă elegantă a unei croaziere cu cină pe Bosfor',
      body: [
        ['p', 'Este ora 15:00 și tocmai ați decis că vreți să faceți ceva special în seara aceasta. Poate că ați ajuns la Istanbul în această dimineață și vreți să profitați la maxim de prima voastră seară. Poate că vremea s-a dovedit mai bună decât se aștepta și o noapte pe apă sună brusc perfect. Indiferent de motiv, întrebarea este simplă: mai puteți rezerva o croazieră cu cină pe Bosfor pentru seara aceasta?'],
        ['p', 'Răspunsul scurt este <strong class="text-white/90">da</strong>. Rezervările în aceeași zi nu sunt doar posibile — sunt comune. Iată tot ce trebuie să știți despre rezervarea unei croaziere last minute în Istanbul.'],
        ['h2', 'Puteți cu adevărat să rezervați în aceeași zi?'],
        ['p', 'Absolut. Spre deosebire de multe activități turistice care necesită rezervări în avans, croazierele cu cină pe Bosfor operează nave mari care pot găzdui sute de oaspeți. Aceasta înseamnă că aproape întotdeauna există disponibilitate, chiar și în aceeași zi. În lunile de vârf ale verii (iulie și august), croazierele de weekend se pot umple mai repede, dar plecările din zilele lucrătoare rar se vând complet. Primăvara și toamna, locurile last minute sunt practic garantate.'],
        ['p', 'La Bosphorus Night, menținem linia noastră WhatsApp deschisă de dimineața devreme până seara târziu tocmai pentru că știm că mulți oaspeți decid în ziua respectivă. Echipa noastră poate confirma rezervarea voastră în câteva minute de la mesajul vostru.'],
        ['h2', 'Ce tururi au loc în seara aceasta?'],
        ['p', 'Croaziera standard cu cină pleacă zilnic de la debarcaderul Kabataş. Programul tipic funcționează astfel: îmbarcarea începe în jurul orei 19:30 până la 20:00, barca pleacă la aproximativ 20:30, iar croaziera durează aproximativ trei ore, întorcându-se la debarcader în jurul orei 23:30. Unii operatori oferă, de asemenea, o croazieră la apus care pleacă în jurul orei 17:30 și se întoarce până la 21:00 — deși pentru o decizie last minute după-amiază, croaziera de seară cu cină este opțiunea mai practică.'],
        ['p', 'Ambele pachete — Standard și VIP — sunt disponibile pentru rezervare în aceeași zi. Pachetul Standard începe de la €24 de persoană și include cina completă în 4 feluri, băuturi răcoritoare și programul de divertisment. Nu trebuie să alegeți pachetul în avans; doar trimiteți-ne un mesaj pe WhatsApp și vă vom ghida prin opțiuni.'],
        ['h2', 'Cum să ajungeți la Kabataş'],
        ['p', 'Kabataş este unul dintre cele mai accesibile puncte din Istanbul. Dacă stați în Sultanahmet (orașul vechi), tramvaiul T1 merge direct la Kabataş — este ultima stație. Călătoria durează aproximativ 25 de minute. De la Taksim, puteți lua funicularul (linia F1), care coboară direct la Kabataş în mai puțin de trei minute. De pe partea asiatică, luați un feribot până la Kabataş sau Beşiktaş. Taxiurile din majoritatea zonelor centrale costă între 100-200 TL în funcție de trafic și distanță.'],
        ['p', 'Vă recomandăm să ajungeți în zona debarcaderului cel târziu până la 19:30. Aceasta vă dă timp să găsiți punctul de întâlnire, să întâlniți un membru al echipei noastre care vă va ghida la barcă și să vă așezați la masa voastră înainte de plecare.'],
        ['h2', 'Ce să luați cu voi'],
        ['p', 'Păstrați-l simplu. Aduceți telefonul pentru fotografii, o jachetă ușoară sau un cardigan pentru puntea superioară (chiar și serile de vară pot fi vântoase pe apă) și numerar sau card pentru plată pe barcă. Nu există un cod vestimentar, dar smart casual funcționează cel mai bine — gândiți-vă la o cămașă sau bluză frumoasă în loc de pantaloni scurți și șlapi. Doamnele ar putea dori un elastic pentru păr sau o eșarfă, deoarece vântul se intensifică odată ce barca este în mișcare.'],
        ['h2', 'Procesul de rezervare'],
        ['p', 'Iată cum funcționează în trei pași rapizi:'],
        ['ol', [
          ['<strong class="text-white/80">Trimiteți-ne un mesaj pe WhatsApp</strong> — Spuneți-ne câți oaspeți, pachetul preferat (sau cereți o recomandare) și confirmați data de astăzi.'],
          ['<strong class="text-white/80">Primiți confirmare instantanee</strong> — Răspundem în câteva minute cu adresa punctului de întâlnire, ora de îmbarcare și orice alte detalii de care aveți nevoie.'],
          ['<strong class="text-white/80">Apăreți și bucurați-vă</strong> — Fără depozit, fără plată în avans, fără bilete tipărite. Doar ajungeți la punctul de întâlnire și echipa noastră se ocupă de restul. Plătiți direct pe barcă.'],
        ]],
        ['p', 'Cu adevărat nu există niciun risc implicat. Dacă planurile voastre se schimbă și trebuie să anulați, doar anunțați-ne pe WhatsApp — chiar și cu câteva ore înainte de plecare este în regulă. Fără taxe de anulare, fără întrebări puse.'],
        ['p', 'Deci, dacă în seara aceasta se simte ca o noapte pe Bosfor, nu vă gândiți prea mult la asta. Trimiteți un mesaj rapid WhatsApp și în câteva ore veți lua cina pe apă cu linia orizontului Istanbulului strălucind în jurul vostru.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026', blurb: 'Ghid complet despre pachete, prețuri și la ce să vă așteptați.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ghidul croazierei la apus pe Bosfor', blurb: 'Ora de aur pe apă — experiența supremă la apus.' },
        'things-to-know-istanbul-boat-tour': { title: '10 lucruri de știut înainte de turul cu barca în Istanbul', blurb: 'Sfaturi esențiale pentru cei care navighează pe Bosfor pentru prima dată.' },
        'bosphorus-cruise-with-kids-family': { title: 'Croazieră pe Bosfor cu copii — Ghid de familie', blurb: 'Croaziere prietenoase familiilor cu copii sub 6 ani gratuit.' },
      },
    },
    'bosphorus-sunset-cruise-guide': {
      title: 'Croazieră la apus pe Bosfor — La ce să vă așteptați și de ce merită',
      desc: 'Trăiți ora de aur a Istanbulului de pe apă. Croazieră de 3 ore cu cină la apus cu spectacole live, plecare la 17:30 din Kabataş. Ghid complet în interior.',
      h1: 'Croazieră la apus pe Bosfor — La ce să vă așteptați și de ce merită',
      alt: 'Apus auriu dramatic peste strâmtoarea Bosfor cu siluete de moschei',
      body: [
        ['p', 'Există un motiv pentru care fotografii, cuplurile și călătorii experimentați spun cu toții același lucru: dacă vreți să vedeți Istanbulul la cel mai frumos, urmăriți apusul de pe Bosfor. Modul în care lumina transformă apa în aur, pictează minaretele în nuanțe de chihlimbar și treptat cedează locul strălucirii de seară a orașului — este una dintre acele experiențe care rămân cu voi mult timp după ce părăsiți Turcia.'],
        ['p', 'O croazieră la apus pe Bosfor ia acest spectacol natural și îl transformă într-o experiență completă de seară, completă cu cină, divertisment live și priveliști panoramice pe care niciun bar pe acoperiș nu le poate egala.'],
        ['h2', 'De ce ora apusului este magică'],
        ['p', 'Istanbulul este situat la aproximativ 41 de grade latitudine nordică, ceea ce înseamnă că orele de apus variază semnificativ pe parcursul anului. Vara, soarele apune în jurul orei 20:30, aruncând o oră de aur lungă care se întinde peste apă. Primăvara și toamna, apusul vine mai devreme — în jurul orelor 18:00 până la 19:00 — creând o tranziție mai dramatică, mai rapidă, de la zi la noapte. Oricum, Bosforul acționează ca o oglindă naturală, reflectând culorile cerului și amplificând spectacolul.'],
        ['p', 'Ceea ce face apusul Bosforului unic special este linia orizontului. Pe măsură ce soarele coboară în spatele părții europene, siluetele Moscheii Süleymaniye, Hagiei Sofia și Moscheii Albastre apar pe cerul portocaliu-roz. Între timp, partea asiatică prinde ultima lumină caldă pe palatele sale de pe malul mării și pe dealurile sale verzi. Vedeți literalmente cum soarele apune între două continente — puține locuri pe Pământ pot oferi acea perspectivă.'],
        ['h2', 'Experiența croazierei'],
        ['p', 'Croaziera cu cină la apus pleacă de obicei din debarcaderul Kabataş în jurul orei 17:30, deși momentul se ajustează ușor cu anotimpurile pentru a prinde ora de aur la vârful său. Barca se îndreaptă spre nord de-a lungul strâmtorii, dându-vă priveliști ale Palatului Dolmabahçe, Palatului Çırağan, Moscheii Ortaköy și Podului Bosforului — toate scăldate în lumină caldă.'],
        ['p', 'Cina este servită pe măsură ce soarele începe să apună. Meniul prezintă o varietate de feluri turcești și internaționale: platouri reci de meze, carne la grătar sau pește proaspăt, legume de sezon și deserturi tradiționale precum baklava. Băuturile răcoritoare sunt incluse în pachetul Standard, în timp ce opțiunile Premium și VIP adaugă băuturi alcoolice — și este ceva deosebit de plăcut să sorbiți un pahar de vin turcesc în timp ce priviți cerul schimbându-și culoarea peste apă.'],
        ['p', 'Pe măsură ce întunericul cade, începe programul de divertisment. Dansuri populare turcești tradiționale, o reprezentație de dans din buric, muzică live și uneori o ceremonie a dervișilor rotitori umplu orele rămase. Tranziția de la apusul auriu la iluminarea nocturnă a orașului este fluidă — într-un moment urmăriți cum ultima lumină dispare, iar în următorul sunteți înconjurați de luminile sclipitoare de pe malul Istanbulului.'],
        ['h2', 'Sfaturi pentru fotografie'],
        ['p', 'Croaziera la apus este un vis pentru fotograf, dar câteva sfaturi vă vor ajuta să obțineți cele mai bune cadre. Mai întâi, mergeți pe puntea superioară cu aproximativ 30 de minute înainte de apus — atunci lumina este cea mai caldă, iar culorile cele mai vii. Fotografiați spre vest (partea europeană) pentru silueta clasică de apus peste minarete. Folosiți reflexiile apei pentru a adăuga adâncime compozițiilor voastre.'],
        ['p', 'Pentru fotografii cu smartphone-uri, activați modul HDR pentru a surprinde atât cerul luminos, cât și primplanul mai întunecat. Evitați folosirea blițului — va strica căldura naturală a luminii. Modul panoramic funcționează frumos pentru a captura măturarea largă a liniei orizontului. Și nu uitați să lăsați telefonul jos câteva minute și pur și simplu să priviți. Unele momente sunt mai bine trăite decât filmate.'],
        ['h2', 'Ce să purtați'],
        ['p', 'Puntea superioară va fi vântoasă, mai ales odată ce barca este în mișcare. Chiar și într-o seară caldă de vară, temperaturile scad considerabil pe apă după apus. O jachetă ușoară, un cardigan sau un șal este esențial. Straturile funcționează cel mai bine — puteți fi confortabil într-un tricou în timpul orei de aur, dar recunoscător pentru un strat suplimentar odată ce întunericul cade. Pantofii cu ceva aderență sunt preferabili tocurilor sau sandalelor cu talpă netedă, deoarece puntea poate fi ușor alunecoasă de la stropii de mare.'],
        ['h2', 'Croazieră la apus vs. croazieră cu cină — Care este diferența?'],
        ['p', 'Diferența principală este timpul și atmosfera. Croaziera la apus pleacă după-amiaza târziu și vă oferă acea experiență a orei de aur plus tranziția spre noapte. Croaziera standard cu cină pleacă mai târziu (în jurul orelor 20:00-20:30) și este în întregime o experiență nocturnă — lumini de oraș, poduri iluminate și o atmosferă mai întunecată, mai romantică.'],
        ['p', 'Dacă alegeți între cele două, gândiți-vă la ce contează cel mai mult pentru voi. Croaziera la apus oferă cele mai bune oportunități fotografice și o experiență vizuală mai variată (zi la noapte). Croaziera cu cină este alegerea clasică pentru o seară romantică sau o seară sărbătorească, cu orașul complet iluminat de la început. Ambele includ cina și programul complet de divertisment.'],
        ['p', 'Pentru cei care au timp, combinația ideală este o croazieră la apus într-o seară și o croazieră cu cină în alta — sunt cu adevărat experiențe diferite. Dar dacă puteți alege doar una, croaziera la apus oferă ceva cu adevărat unic: șansa de a urmări cum Istanbulul se transformă din aur în argint pe măsură ce două continente trec de la zi la noapte în jurul vostru.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026', blurb: 'Ghid complet despre pachete, prețuri și la ce să vă așteptați.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Croazieră pe Bosfor în seara aceasta — Ghid last minute', blurb: 'Rezervați o croazieră în aceeași zi cu confirmare instantanee WhatsApp.' },
        'things-to-know-istanbul-boat-tour': { title: '10 lucruri de știut înainte de turul cu barca în Istanbul', blurb: 'Sfaturi esențiale pentru cei care navighează pe Bosfor pentru prima dată.' },
        'bosphorus-cruise-with-kids-family': { title: 'Croazieră pe Bosfor cu copii — Ghid de familie', blurb: 'Croaziere prietenoase familiilor cu copii sub 6 ani gratuit.' },
      },
    },
    'things-to-know-istanbul-boat-tour': {
      title: '10 lucruri de știut înainte de turul cu barca în Istanbul',
      desc: 'Planificați o croazieră pe Bosfor? Iată 10 sfaturi esențiale: ce să purtați, să luați, la ce să vă așteptați și cum să obțineți cea mai bună experiență la turul vostru cu barca în Istanbul.',
      h1: '10 lucruri de știut înainte de turul cu barca în Istanbul',
      alt: 'Vedere panoramică a unei bărci de croazieră pe Bosfor cu linia orizontului Istanbulului',
      body: [
        ['p', 'O croazieră pe Bosfor este una dintre acele experiențe pe care practic fiecare vizitator al Istanbulului o pune pe lista sa — și cu un motiv întemeiat. Dar ca orice experiență de călătorie, cunoașterea câtorva lucruri în avans poate face diferența între o seară bună și una grozavă. Iată zece sfaturi esențiale de la echipa noastră pentru a vă ajuta să profitați la maxim de turul vostru cu barca în Istanbul.'],
        ['h2_sm', '1. Îmbrăcați-vă în straturi'],
        ['p', 'Acesta este sfatul numărul unu pe care îl dăm fiecărui oaspete. Serile de Istanbul pot fi înșelătoare de răcoroase pe apă, chiar și vara. Temperatura pe puntea superioară este de obicei cu 5 până la 8 grade mai mică decât ceea ce ați simțit pe țărm, iar vântul de la mișcarea bărcii o face să pară și mai răcoroasă. O jachetă ușoară, un cardigan sau o pashmina este esențială. În lunile de primăvară și toamnă, se recomandă o jachetă adecvată. Veți fi bucuroși că ați adus-o când veți dori să ieșiți afară și să vă bucurați de priveliști de pe puntea deschisă.'],
        ['h2_sm', '2. Aduceți o cameră (și mențineți telefonul încărcat)'],
        ['p', 'Bosforul noaptea este extraordinar de fotogenic. Palate iluminate, poduri împânzite cu lumini colorate, moschei iluminate de jos și linia orizontului orașului reflectată pe apa întunecată — vor fi zeci de momente demne de capturat. Asigurați-vă că telefonul vostru este complet încărcat înainte de îmbarcare, sau aduceți un mic power bank. Dacă aveți o cameră cu mod nocturn sau capacitate pentru lumină slabă, aduceți-o. Unele dintre cele mai bune fotografii vin de pe puntea superioară când barca trece pe sub Podul Bosforului.'],
        ['h2_sm', '3. Ajungeți cu cel puțin 20 de minute mai devreme'],
        ['p', 'Îmbarcarea este pe principiul „primul venit, primul servit" pentru selecția mesei (cu excepția cazului în care ați rezervat un pachet VIP cu masă rezervată la fereastră). Sosirea cu 20 de minute înainte de ora de îmbarcare declarată vă oferă cea mai bună șansă de a obține o masă lângă ferestre sau aproape de scenă. Echipa noastră de la punctul de întâlnire va fi acolo să vă ghideze la barcă, dar dacă ajungeți exact la ora de plecare, s-ar putea să sfârșiți la o masă mai puțin ideală.'],
        ['h2_sm', '4. Alegeți ora potrivită a turului'],
        ['p', 'De obicei, există două opțiuni de croazieră: croaziera la apus (plecare în jurul orei 17:30) și croaziera cu cină (plecare în jurul orelor 20:00-20:30). Croaziera la apus vă oferă experiența orei de aur și tranziția de la zi la noapte — ideal pentru fotografi și cei care preferă o seară mai devreme. Croaziera cu cină este experiența nocturnă clasică cu orașul complet iluminat. Ambele includ o cină completă și programul de divertisment. Dacă este prima dată, croaziera cu cină este cea mai populară alegere.'],
        ['h2_sm', '5. Rezervați prin WhatsApp pentru cel mai rapid răspuns'],
        ['p', 'În timp ce puteți găsi croaziere pe Bosfor prin diverse platforme online, rezervarea direct prin WhatsApp este cea mai rapidă și flexibilă opțiune. Obțineți un răspuns instantaneu, puteți pune întrebări în timp real și primiți recomandări personale bazate pe dimensiunea grupului și preferințele voastre. Nu există un formular de completat și nici așteptare pentru confirmări prin e-mail. Doar trimiteți un mesaj cu data voastră, numărul de oaspeți și pachetul preferat, și veți avea o rezervare confirmată în câteva minute.'],
        ['h2_sm', '6. Nu este necesară plata în avans'],
        ['p', 'Aceasta îi surprinde pe mulți călători, dar operatorii de croaziere pe Bosfor de renume — inclusiv Bosphorus Night — nu necesită nicio plată în avans. Rezervați locul vostru prin WhatsApp, vă prezentați la debarcader și plătiți pe barcă. Aceasta înseamnă că nu există risc financiar pentru voi. Dacă planurile voastre se schimbă, doar ne anunțați și nu există nicio taxă. Plata pe barcă se poate face în numerar (lire turcești, euro sau dolari americani) sau cu card de credit/debit.'],
        ['h2_sm', '7. Răul de mare este rareori o problemă'],
        ['p', 'Bosforul este o strâmtoare, nu mare deschisă. Apa este relativ calmă, mai ales în comparație cu apele oceanice. Bărcile de croazieră sunt mari și stabile, iar traseul rămâne în strâmtoarea adăpostită tot timpul. Marea majoritate a oaspeților nu experimentează niciun disconfort de mișcare. Dacă sunteți deosebit de sensibili, șederea în centrul bărcii (mai degrabă decât la proră sau pupa) oferă cea mai stabilă plimbare. Având mâncare în stomac ajută, de asemenea — deci cina este de fapt o bună prevenție.'],
        ['h2_sm', '8. Cunoașteți cele mai bune locuri pentru fotografii'],
        ['p', 'Cele trei momente cele mai fotografiate în croazieră sunt: trecerea pe sub Podul Bosforului (luminile sunt direct deasupra voastră și se reflectă pe apă), priveliștea Turnului Fecioarei stând singur în mijlocul strâmtorii și priveliștea panoramică a liniei orizontului orașului vechi cu moscheile și minaretele sale. Puntea superioară oferă cele mai bune priveliști neobstrucționate pentru fotografii. Urcați între feluri sau în timpul pauzelor în divertisment — personalul vă va ține masa.'],
        ['h2_sm', '9. Copiii sunt bineveniți'],
        ['p', 'Croazierele cu cină pe Bosfor sunt prietenoase familiilor. Copiii sub 6 ani navighează gratuit, iar copiii cu vârste între 6 și 12 ani plătesc jumătate de preț. Programul de divertisment — în special dansurile populare și muzica — tinde să fascineze copiii. Bărcile sunt sigure și spațioase, cu zone de masă închise și punți superioare păzite. Cu toate acestea, păstrați un ochi pe copiii mai mici lângă balustrade și scări. Dacă călătoriți ca familie, anunțați-ne la rezervare ca să putem aranja o masă potrivită.'],
        ['h2_sm', '10. Anulare gratuită — Întotdeauna'],
        ['p', 'Viața se întâmplă. Vremea se schimbă, nivelurile de energie scad, planurile se schimbă. Cu Bosphorus Night, anularea este întotdeauna gratuită. Indiferent dacă anulați cu o săptămână înainte sau cu câteva ore înainte de plecare, nu există nicio taxă și nicio penalitate. Doar trimiteți-ne un mesaj WhatsApp. Acesta este unul dintre avantajele modelului fără plată în avans — deoarece nu ați plătit nimic, anularea este la fel de simplă ca un mesaj rapid. Preferăm să veniți când sunteți în dispoziția potrivită pentru a vă bucura.'],
        ['p_top', 'Înarmați cu aceste zece sfaturi, sunteți gata să aveți cea mai bună experiență posibilă de croazieră pe Bosfor. Combinația de frumusețe nocturnă a Istanbulului, o cină turcească completă și divertisment live face ca aceasta să fie una dintre cele mai memorabile seri pe care le puteți avea oriunde în lume. Doar amintiți-vă: straturi, telefon încărcat și ajungeți devreme.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026', blurb: 'Ghid complet despre pachete, prețuri și la ce să vă așteptați.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Croazieră pe Bosfor în seara aceasta — Ghid last minute', blurb: 'Rezervați o croazieră în aceeași zi cu confirmare instantanee WhatsApp.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ghidul croazierei la apus pe Bosfor', blurb: 'Ora de aur pe apă — experiența supremă la apus.' },
        'bosphorus-cruise-with-kids-family': { title: 'Croazieră pe Bosfor cu copii — Ghid de familie', blurb: 'Croaziere prietenoase familiilor cu copii sub 6 ani gratuit.' },
      },
    },
    'bosphorus-cruise-with-kids-family': {
      title: 'Croazieră pe Bosfor cu copii — Ghid prietenos familiei Istanbul',
      desc: 'Este croaziera cu cină pe Bosfor potrivită pentru copii? Da! Copii sub 6 gratuit, 6-12 la jumătate de preț. Sfaturi familiale, la ce să vă așteptați și cum să rezervați.',
      h1: 'Croazieră pe Bosfor cu copii — Ghid prietenos familiei',
      alt: 'Familii bucurându-se de puntea deschisă a unei croaziere pe Bosfor',
      body: [
        ['p', 'Una dintre cele mai comune întrebări pe care le primim de la familiile care își planifică călătoria în Istanbul este: „Este croaziera cu cină pe Bosfor potrivită pentru copii?" Răspunsul este un da încrezător. De fapt, multe familii ne spun că croaziera a fost punctul culminant al întregii lor vacanțe — nu doar pentru părinți, ci și pentru copii. Iată tot ce trebuie să știți despre a vă duce familia într-o croazieră pe Bosfor.'],
        ['h2', 'Politica vârstei și prețurile'],
        ['p', 'Prețurile noastre pentru copii sunt simple și prietenoase familiilor. Copiii cu vârste între 0–3 ani navighează complet gratuit — fără bilet, fără taxă. Copiii cu vârste între 4–8 ani plătesc jumătate din prețul pentru adult. Copiii de 9 ani și peste sunt taxați la tariful complet pentru adulți. Acest lucru se aplică pentru ambele pachete: Standard și VIP.'],
        ['p', 'Pentru o familie de patru persoane cu doi copii cu vârste între 4–8 ani, o croazieră cu cină pe Bosfor costă doar €72 în total pentru pachetul Standard — adică două bilete pentru adulți la €24 fiecare plus două bilete pentru copii la jumătate de preț de €12 fiecare. Pentru o seară de neuitat pe apă cu toată familia, aceasta reprezintă o valoare excelentă în comparație cu un restaurant așezat în zonele turistice.'],
        ['h2', 'Este sigur pentru copii?'],
        ['p', 'Bărcile de croazieră folosite pentru tururi de cină pe Bosfor sunt nave comerciale mari și stabile — nu bărci private mici. Au zone de masă închise pe punțile inferioare și zone de observație deschise pe puntea superioară cu balustrade și bariere de siguranță corespunzătoare. Bosforul este o strâmtoare cu ape relativ calme, deci călătoria este lină și stabilă. Răul de mare este extrem de rar, chiar și printre copii.'],
        ['p', 'Acestea fiind spuse, ca în orice mediu de pe malul apei, bunul simț se aplică. Țineți un ochi vigilent pe copiii mici lângă scări și zone de punte deschisă. Echipajul este obișnuit să aibă familii la bord și va ajuta la asigurarea siguranței copiilor, dar supravegherea părintească este întotdeauna prima linie de siguranță.'],
        ['h2', 'Ce le place cel mai mult copiilor'],
        ['p', 'V-ați putea gândi că o croazieră cu cină este în primul rând o experiență pentru adulți, dar copiii răspund constant la mai multe elemente ale serii. Divertismentul live este cel mai mare hit — costumele colorate de dans popular, muzica energică și mai ales reprezentația de dans din buric tind să captiveze copii de toate vârstele. Mulți copii sfârșesc bătând din palme, dansând pe scaunele lor sau încercând să imite mișcările.'],
        ['p', 'Plimbarea cu barca în sine este captivantă pentru copiii care nu au fost niciodată pe o navă mare. Urmărirea podurilor iluminate trecând deasupra capului, observarea Turnului Fecioarei și vederea luminilor orașului de pe apă sunt toate experiențe cu adevărat palpitante pentru ochii tineri. Puntea superioară, unde copiii pot simți vântul și vedea apa trecând repede, este de obicei un loc favorit.'],
        ['p', 'Copiii mai mari (8 și peste) devin adesea interesați de obiectivele turistice de pe traseu. Indicarea palatelor, moscheilor și fortărețelor pe măsură ce barca le trece poate transforma croaziera într-o lecție informală de istorie — mai ales dacă ați vizitat aceste situri în timpul zilei.'],
        ['h2', 'Meniul pentru copii'],
        ['p', 'Meniul pentru cină este o varietate set turcească și internațională. Deși nu există un meniu separat pentru copii, selecția este suficient de largă încât majoritatea copiilor găsesc multe de mâncat. Pâinea, orezul, puiul la grătar și salatele sunt toate ușoare și familiare. Selecția de meze reci include articole precum humus și brânză pe care copiii le savurează de obicei. Deserturile — în special baklava și prăjiturile dulci — sunt universal populare printre oaspeții mai tineri.'],
        ['p', 'Dacă copilul vostru are nevoi alimentare specifice sau alergii, anunțați-ne la rezervare și putem verifica cu bucătăria în avans. Băuturile răcoritoare, apa și sucul sunt incluse în toate pachetele, deci copiii nu vor fi însetați.'],
        ['h2', 'Sfaturi pentru familii'],
        ['ul', [
          ['<strong class="text-white/80">Aduceți o jachetă ușoară pentru fiecare copil</strong> — Puntea superioară devine vântoasă, iar copiii vor adesea să petreacă timp afară urmărind apa și luminile.'],
          ['<strong class="text-white/80">Luați în considerare croaziera la apus</strong> — Pleacă mai devreme (în jurul orei 17:30) și se întoarce până la 21:00, ceea ce funcționează mai bine pentru programul de culcare al copiilor mai mici decât croaziera cu cină care se întoarce în jurul orei 23:30.'],
          ['<strong class="text-white/80">Ajungeți devreme pentru o masă bună</strong> — O masă lângă fereastră aproape de scenă oferă copiilor cea mai bună experiență. Pachetele VIP garantează aceasta, dar sosirea cu 20 de minute mai devreme pentru Standard sau Premium ajută și ea.'],
          ['<strong class="text-white/80">Aduceți mici distrageri</strong> — Deși divertismentul și priveliștile țin majoritatea copiilor angajați, având o mică carte de colorat sau o tabletă încărcată cu un film poate ajuta în momentele mai liniștite pentru copiii foarte mici.'],
          ['<strong class="text-white/80">Folosiți toaletele înainte de îmbarcare</strong> — Barca are toalete, dar pot fi ocupate în momentele de vârf. O vizită rapidă înainte de plecare face prima oră mai lină.'],
        ]],
        ['h2', 'Cum să rezervați ca familie'],
        ['p', 'Rezervarea este simplă. Trimiteți-ne un mesaj WhatsApp cu numărul de adulți, numărul și vârstele copiilor, data preferată și ce pachet vă interesează. Vom calcula totalul (amintindu-ne: sub 6 gratuit, 6-12 la jumătate de preț) și vom confirma disponibilitatea instantaneu. Nu este necesară plata în avans — plătiți pe barcă.'],
        ['p', 'Dacă nu sunteți siguri ce pachet se potrivește cel mai bine familiei voastre, doar întrebați. Pentru majoritatea familiilor, pachetul Standard oferă tot ce aveți nevoie. Upgrade-ul Premium merită dacă adulții vor să se bucure de băuturi alcoolice cu cina. Pachetul VIP cu masa sa rezervată la fereastră este ideal pentru familiile care doresc un loc garantat în primul rând fără să ajungă devreme.'],
        ['p', 'O croazieră pe Bosfor este una dintre experiențele rare din Istanbul care funcționează cu adevărat pentru toate vârstele. Copiii voștri vor iubi luminile, muzica și aventura de a fi pe apă noaptea. Voi veți iubi priveliștile, mâncarea și câteva ore de a fi îngrijiți în timp ce întreaga familie se distrează împreună.'],
      ],
      related: {
        'best-bosphorus-dinner-cruise-istanbul': { title: 'Cea mai bună croazieră cu cină pe Bosfor în Istanbul 2026', blurb: 'Ghid complet despre pachete, prețuri și la ce să vă așteptați.' },
        'things-to-know-istanbul-boat-tour': { title: '10 lucruri de știut înainte de turul cu barca în Istanbul', blurb: 'Sfaturi esențiale pentru cei care navighează pe Bosfor pentru prima dată.' },
        'bosphorus-sunset-cruise-guide': { title: 'Ghidul croazierei la apus pe Bosfor', blurb: 'Ora de aur pe apă — experiența supremă la apus.' },
        'istanbul-cruise-tonight-last-minute': { title: 'Croazieră pe Bosfor în seara aceasta — Ghid last minute', blurb: 'Rezervați o croazieră în aceeași zi cu confirmare instantanee WhatsApp.' },
      },
    },
  },
};

// ============================================================
// TEMPLATE RENDERERS
// ============================================================

const HREFLANGS = ['en', 'tr', 'de', 'es', 'ru', 'ar', 'fr', 'it', 'zh', 'hi', 'ur', 'bg', 'fa', 'id', 'ms', 'pl', 'ro', 'ja', 'ko', 'uk'];

function hreflangBlock(slug) {
  // slug='index' → /lang/blog/, else /lang/blog/{slug}
  const isIndex = slug === 'index';
  const enPath = isIndex ? '/blog/' : `/blog/${slug}`;
  const langPath = (l) => isIndex ? `/${l}/blog/` : `/${l}/blog/${slug}`;
  const lines = [`  <link rel="alternate" hreflang="en" href="https://www.bosphorusnight.com${enPath}">`];
  for (const l of HREFLANGS.filter(x => x !== 'en')) {
    lines.push(`  <link rel="alternate" hreflang="${l}" href="https://www.bosphorusnight.com${langPath(l)}">`);
  }
  lines.push(`  <link rel="alternate" hreflang="x-default" href="https://www.bosphorusnight.com${enPath}">`);
  return lines.join('\n');
}

function commonHeadBoilerplate() {
  return `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'navy-dark': '#0b1120',
            'navy': '#101a30',
            'navy-light': '#152240',
            'gold': '#c9a84c',
            'gold-light': '#d4b86a',
          }
        }
      }
    }
  </script>
  <!-- Google tag (gtag.js) — GA4 + Google Ads -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-P09XEBMNWE"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-P09XEBMNWE');
    gtag('config', 'AW-18073952031');
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; }
  </style>`;
}

function headerHtml(lang, ui, isIndex) {
  // On index, "Blog" is active (gold); on article, "Blog" is normal navigation back.
  const blogClass = isIndex
    ? 'text-[#c9a84c] text-sm transition-colors font-medium'
    : 'text-white/60 hover:text-[#c9a84c] text-sm transition-colors';
  return `  <header class="bg-[#0b1120]/90 backdrop-blur-xl border-b border-white/5 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="/${lang}/" class="flex items-center gap-2">
        <span style="font-family:'Playfair Display',serif" class="text-xl font-bold text-[#c9a84c]">BOSPHORUS</span>
        <span style="font-family:'Playfair Display',serif" class="text-xs text-white/70 tracking-widest uppercase">Night</span>
      </a>
      <div class="flex gap-4">
        <a href="/${lang}/blog/" class="${blogClass}">${ui.blogLink}</a>
        <a href="/${lang}/" class="text-white/60 hover:text-[#c9a84c] text-sm transition-colors">${ui.homeLink}</a>
      </div>
    </div>
  </header>`;
}

function footerHtml(ui) {
  return `  <footer class="border-t border-white/5 py-8 text-center mt-16">
    <p class="text-white/30 text-sm">${ui.footerCopy}</p>
    <p class="text-white/15 text-xs mt-2">${ui.footerLegal}</p>
  </footer>`;
}

function floatingWhatsappHtml(lang, ui) {
  return `  <!-- ========== FLOATING WHATSAPP (auto-injected via scripts/inject-floating-wa.js) ========== -->
  <a id="floatingWhatsapp"
     href="https://wa.me/905322442922?text=${ui.waMsg}"
     target="_blank"
     rel="noopener"
     onclick="if(window.bnTrack){window.bnTrack('Lead',{value:0,currency:'EUR',contact_method:'whatsapp',content_name:'floating_button',language:'${lang}'});}"
     aria-label="${ui.floatingWaAria}"
     class="group fixed left-12 bottom-20 lg:bottom-6 z-[54] inline-flex items-center pl-11 pr-4 py-1.5 rounded-full border border-[#25D366]/60 bg-[#0a0f1e]/70 backdrop-blur-md hover:border-[#25D366] hover:bg-[#0a0f1e]/90 shadow-lg shadow-black/20 transition-all duration-300">
    <svg class="absolute -left-1 top-1/2 -translate-y-1/2 w-10 h-10 drop-shadow-md" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="#25D366" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
      <path fill="#FFFFFF" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
    <span class="text-white text-xs font-semibold whitespace-nowrap">${ui.floatingWaText}</span>
    <span class="relative flex w-2 h-2 flex-shrink-0 ml-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
    </span>
  </a>
  <script>
  (function(){
    var wa=document.getElementById('floatingWhatsapp');if(!wa)return;
    var f=function(){var b=(window.innerHeight+window.scrollY)>=(document.body.offsetHeight-80);
      wa.classList.toggle('opacity-0',b);wa.classList.toggle('translate-y-4',b);wa.classList.toggle('pointer-events-none',b);};
    window.addEventListener('scroll',f,{passive:true});window.addEventListener('resize',f);f();
  })();
  </script>`;
}

function renderBody(body) {
  return body.map(([type, content]) => {
    if (type === 'p') return `        <p>${content}</p>`;
    if (type === 'p_sm') return `        <p class="text-white/60 text-sm">${content}</p>`;
    if (type === 'p_top') return `        <p class="pt-4">${content}</p>`;
    if (type === 'h2') return `        <h2 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-white pt-4">${content}</h2>`;
    if (type === 'h2_sm') return `        <h2 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white pt-4">${content}</h2>`;
    if (type === 'ul') {
      const items = content.map(([item]) => `          <li>${item}</li>`).join('\n');
      return `        <ul class="list-disc list-inside space-y-2 text-white/60">\n${items}\n        </ul>`;
    }
    if (type === 'ol') {
      const items = content.map(([item]) => `          <li>${item}</li>`).join('\n');
      return `        <ol class="list-decimal list-inside space-y-2 text-white/60">\n${items}\n        </ol>`;
    }
    return '';
  }).join('\n\n');
}

function renderArticle(lang, ui, slug, t) {
  const meta = ARTICLES_META[slug];
  const dateStr = ui.dateStrings[meta.date.slice(5)];
  const canonical = `https://www.bosphorusnight.com/${lang}/blog/${slug}`;
  const imageAbs = `https://www.bosphorusnight.com${meta.image}`;

  const ctaSvg = `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.61.609l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.728-6.012-1.96l-.42-.312-2.647.887.887-2.647-.312-.42A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`;

  const relatedCards = meta.relatedSlugs.map(r => {
    const rt = t.related[r];
    return `          <a href="/${lang}/blog/${r}" class="bg-[#152240] border border-white/5 rounded-xl p-4 hover:border-[#c9a84c]/30 transition-colors">
            <h4 class="text-white font-medium text-sm mb-1">${rt.title}</h4>
            <p class="text-white/40 text-xs">${rt.blurb}</p>
          </a>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="${ui.htmlLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.desc}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.bosphorusnight.com/assets/data/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="article:published_time" content="${meta.date}">
  <link rel="canonical" href="${canonical}">
${hreflangBlock(slug)}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": ${JSON.stringify(t.title)},
    "description": ${JSON.stringify(t.desc)},
    "image": ${JSON.stringify(imageAbs)},
    "datePublished": "${meta.date}T00:00:00+03:00",
    "dateModified": "2026-05-16T00:00:00+03:00",
    "inLanguage": "${ui.htmlLang}",
    "author": { "@type": "Organization", "name": "Bosphorus Night", "url": "https://www.bosphorusnight.com" },
    "publisher": {
      "@type": "Organization",
      "name": "Bosphorus Night",
      "logo": { "@type": "ImageObject", "url": "https://www.bosphorusnight.com/assets/data/logo png lst.png" }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${canonical}" }
  }
  </script>
${commonHeadBoilerplate()}
</head>
<body class="bg-[#0b1120] text-white min-h-screen">

${headerHtml(lang, ui, false)}

  <main class="max-w-3xl mx-auto px-4 py-12">
    <a href="/${lang}/blog/" class="text-[#c9a84c] text-sm hover:underline">${ui.backToBlog}</a>

    <article class="mt-8">
      <time class="text-white/30 text-xs uppercase tracking-wider">${dateStr}</time>
      <h1 style="font-family:'Playfair Display',serif" class="text-3xl md:text-4xl font-bold text-white mt-3 mb-6 leading-tight">${t.h1}</h1>

      <img src="${meta.image}" alt="${t.alt}" class="w-full rounded-2xl mb-8 aspect-[16/9] object-cover">

      <div class="prose prose-invert max-w-none text-white/70 leading-relaxed space-y-6 text-[15px]">

${renderBody(t.body)}

      </div>

      <!-- CTA -->
      <div class="bg-[#152240] border border-[#c9a84c]/20 rounded-2xl p-8 text-center mt-12">
        <h3 style="font-family:'Playfair Display',serif" class="text-2xl font-bold text-[#c9a84c] mb-3">${ui.ctaTitle}</h3>
        <p class="text-white/60 mb-6">${ui.ctaText}</p>
        <a href="https://wa.me/905322442922" target="_blank" class="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#20bd5a] transition-colors">
          ${ctaSvg}
          ${ui.ctaButton}
        </a>
      </div>

      <!-- Related Articles -->
      <div class="mt-16">
        <h3 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mb-6">${ui.relatedTitle}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
${relatedCards}
        </div>
      </div>

    </article>
  </main>

${footerHtml(ui)}

${floatingWhatsappHtml(lang, ui)}
</body>
</html>`;
}

function renderIndex(lang, ui, t) {
  const canonical = `https://www.bosphorusnight.com/${lang}/blog/`;
  const cardImages = {
    'best-bosphorus-dinner-cruise-istanbul': '/assets/tours/dinner/boat-night-bridge.jpg',
    'istanbul-cruise-tonight-last-minute': '/assets/tours/dinner/hall-wide.jpg',
    'bosphorus-sunset-cruise-guide': '/assets/tours/sunset/amor-sunset-dramatic.jpg',
    'things-to-know-istanbul-boat-tour': '/assets/tours/daytime/boat-panorama.jpg',
    'bosphorus-cruise-with-kids-family': '/assets/tours/daytime/deck-guests.jpg',
  };

  const blogPostsSchema = t.cards.map(c => {
    return `      { "@type": "BlogPosting", "headline": ${JSON.stringify(c.title)}, "url": "https://www.bosphorusnight.com/${lang}/blog/${c.slug}", "datePublished": "${{'best-bosphorus-dinner-cruise-istanbul':'2026-04-11','istanbul-cruise-tonight-last-minute':'2026-04-11','bosphorus-sunset-cruise-guide':'2026-04-10','things-to-know-istanbul-boat-tour':'2026-04-09','bosphorus-cruise-with-kids-family':'2026-04-08'}[c.slug]}T00:00:00+03:00" }`;
  }).join(',\n');

  const cardsHtml = t.cards.map(c => `      <a href="/${lang}/blog/${c.slug}" class="group bg-[#152240] border border-white/5 rounded-2xl overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-300">
        <div class="aspect-[16/9] overflow-hidden">
          <img src="${cardImages[c.slug]}" alt="${c.alt}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        </div>
        <div class="p-6">
          <time class="text-white/30 text-xs uppercase tracking-wider">${c.date}</time>
          <h2 style="font-family:'Playfair Display',serif" class="text-xl font-bold text-white mt-2 mb-2 group-hover:text-[#c9a84c] transition-colors">${c.title}</h2>
          <p class="text-white/50 text-sm line-clamp-2">${c.blurb}</p>
          <span class="inline-block mt-4 text-[#c9a84c] text-sm font-medium">${t.readMore}</span>
        </div>
      </a>`).join('\n\n');

  return `<!DOCTYPE html>
<html lang="${ui.htmlLang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <meta name="description" content="${t.desc}">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.ogDesc}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="https://www.bosphorusnight.com/assets/data/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="Bosphorus Night Dinner Cruise">
  <link rel="canonical" href="${canonical}">
${hreflangBlock('index')}
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bosphorus Night Blog",
    "description": ${JSON.stringify(t.desc)},
    "url": "${canonical}",
    "inLanguage": "${ui.htmlLang}",
    "publisher": {
      "@type": "Organization",
      "name": "Bosphorus Night",
      "logo": { "@type": "ImageObject", "url": "https://www.bosphorusnight.com/assets/data/logo png lst.png" }
    },
    "blogPost": [
${blogPostsSchema}
    ]
  }
  </script>
${commonHeadBoilerplate()}
</head>
<body class="bg-[#0b1120] text-white min-h-screen">

${headerHtml(lang, ui, true)}

  <main class="max-w-7xl mx-auto px-4 py-12">
    <div class="mb-12">
      <h1 style="font-family:'Playfair Display',serif" class="text-4xl md:text-5xl font-bold text-white mb-4">${t.h1}</h1>
      <p class="text-white/50 text-lg max-w-2xl">${t.lead}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

${cardsHtml}

    </div>
  </main>

${footerHtml(ui)}

${floatingWhatsappHtml(lang, ui)}
</body>
</html>`;
}

// ============================================================
// MAIN: emit 30 HTML files
// ============================================================

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const LANGS_TO_BUILD = ['id', 'ms', 'pl', 'bg', 'ro'];
const ARTICLE_SLUGS = ['best-bosphorus-dinner-cruise-istanbul', 'istanbul-cruise-tonight-last-minute', 'bosphorus-sunset-cruise-guide', 'things-to-know-istanbul-boat-tour', 'bosphorus-cruise-with-kids-family'];

let written = 0;
for (const lang of LANGS_TO_BUILD) {
  const ui = UI[lang];
  const langT = T[lang];
  if (!ui || !langT) { console.error(`Missing data for ${lang}`); continue; }
  const dir = path.join(OUT, lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Index
  const idxHtml = renderIndex(lang, ui, langT.index);
  fs.writeFileSync(path.join(dir, 'index.html'), idxHtml, 'utf8');
  console.log(`  ✓ ${lang}/blog/index.html`);
  written++;

  for (const slug of ARTICLE_SLUGS) {
    const t = langT[slug];
    if (!t) { console.error(`  ✗ Missing ${lang}/${slug}`); continue; }
    const html = renderArticle(lang, ui, slug, t);
    fs.writeFileSync(path.join(dir, `${slug}.html`), html, 'utf8');
    console.log(`  ✓ ${lang}/blog/${slug}.html`);
    written++;
  }
}

console.log(`\n✅ ${written} files written to src/blog-i18n/`);

