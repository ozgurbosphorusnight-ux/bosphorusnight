/* Address confirmation page — bosphorusnight.com/adres/[token]
 *
 * Akış:
 *  1. URL'den token oku (path /adres/:token veya query ?t=)
 *  2. AI backend'e GET /api/address-confirm/:token → temel bilgi + dil
 *  3. i18n + Google Places autocomplete bağla
 *  4. Müşteri seçim yapınca POST /:token/select → zone feedback + sistem notu
 *  5. "Onayla" / "Kendim Geleceğim" → POST /:token/finalize → done view
 *
 * Backend: src/routes/address-confirm.js (api.bosphorusnight.com)
 * Migration 031, 19 May 2026.
 */
(function () {
  'use strict';

  const API_BASE = 'https://api.bosphorusnight.com';

  // i18n — sayfa kısa, inline yeterli. AI sales agent zaten 16 dilde,
  // proaktif teyit mesajını AI çevirecek. Bu sayfa müşteriye sadece konum
  // seçtirme aracı; çoğu kelime kısa.
  const I18N = {
    en: {
      title: 'Where Should We Pick You Up?',
      lead: 'Please select your hotel, meeting point, or full address below so our transfer goes to the right door.',
      step1: 'Start typing a place name or address',
      step2: 'Pick from the dropdown',
      step3: 'Check the location and confirm',
      placeholder: 'Hotel, square, restaurant, address...',
      btnConfirm: 'Confirm and Send',
      btnSelfPickup: 'I’ll Come Myself, Continue',
      btnChange: 'Pick a Different Place',
      footnote: 'If you can’t find your location, you can type the full address on WhatsApp.',
      zoneOk: 'Within our transfer area',
      zoneOut: 'Outside our transfer area',
      zoneOutNote: 'This address is outside our transfer area. If you come to Kabataş Pier yourself, you can still join the full tour — the tour price stays the same.',
      doneTitle: 'Thank you!',
      doneMessage: 'Your location has been received. We’ll continue on WhatsApp.',
      loading: 'Loading...',
      expired: 'This link has expired. Please ask for a new link on WhatsApp.',
      notFound: 'Link not found.',
    },
    tr: {
      title: 'Sizi Nereden Alalım?',
      lead: 'Transfer aracımızı doğru kapıya yönlendirebilmemiz için lütfen otelinizi, buluşma noktanızı veya tam adresinizi aşağıdan seçin.',
      step1: 'Yer adını veya adresi yazmaya başlayın',
      step2: 'Açılır listeden seçim yapın',
      step3: 'Konumu kontrol edin ve onaylayın',
      placeholder: 'Otel, meydan, restoran, adres...',
      btnConfirm: 'Onayla ve Gönder',
      btnSelfPickup: 'Kendim Geleceğim, Devam',
      btnChange: 'Başka Yer Seç',
      footnote: 'Konumu bulamadıysanız WhatsApp üzerinden tam adresi yazabilirsiniz.',
      zoneOk: 'Transfer kapsamımızda',
      zoneOut: 'Transfer kapsamımız dışında',
      zoneOutNote: 'Bu adres transfer kapsamımız dışında. Kabataş İskelesi’ne kendiniz gelirseniz tura tam katılabilirsiniz; tur ücreti değişmez.',
      doneTitle: 'Teşekkür ederiz!',
      doneMessage: 'Konumunuz alındı. WhatsApp üzerinden devam edebilirsiniz.',
      loading: 'Yükleniyor...',
      expired: 'Bu linkin süresi doldu. Lütfen WhatsApp\'tan yeni link isteyin.',
      notFound: 'Link bulunamadı.',
    },
    de: {
      title: 'Wo sollen wir Sie abholen?',
      lead: 'Bitte wählen Sie Ihr Hotel, Ihren Treffpunkt oder Ihre Adresse unten aus, damit unser Transfer zur richtigen Tür kommt.',
      step1: 'Beginnen Sie mit dem Tippen eines Ortsnamens oder einer Adresse',
      step2: 'Wählen Sie aus der Dropdown-Liste',
      step3: 'Überprüfen Sie den Standort und bestätigen Sie',
      placeholder: 'Hotel, Platz, Restaurant, Adresse...',
      btnConfirm: 'Bestätigen und Senden',
      btnSelfPickup: 'Ich komme selbst, weiter',
      btnChange: 'Anderen Ort wählen',
      footnote: 'Wenn Sie Ihren Standort nicht finden, können Sie die vollständige Adresse auf WhatsApp eingeben.',
      zoneOk: 'Innerhalb unseres Transfergebiets',
      zoneOut: 'Außerhalb unseres Transfergebiets',
      zoneOutNote: 'Diese Adresse liegt außerhalb unseres Transfergebiets. Wenn Sie selbst zur Kabataş-Anlegestelle kommen, können Sie an der vollen Tour teilnehmen — der Preis bleibt gleich.',
      doneTitle: 'Vielen Dank!',
      doneMessage: 'Ihr Standort wurde empfangen. Wir machen auf WhatsApp weiter.',
      loading: 'Wird geladen...',
      expired: 'Dieser Link ist abgelaufen. Bitte fordern Sie einen neuen Link auf WhatsApp an.',
      notFound: 'Link nicht gefunden.',
    },
    es: {
      title: '¿Dónde le recogemos?',
      lead: 'Seleccione su hotel, punto de encuentro o dirección completa abajo para que nuestro transfer vaya a la puerta correcta.',
      step1: 'Empiece a escribir un nombre o dirección',
      step2: 'Elija del menú desplegable',
      step3: 'Verifique la ubicación y confirme',
      placeholder: 'Hotel, plaza, restaurante, dirección...',
      btnConfirm: 'Confirmar y Enviar',
      btnSelfPickup: 'Iré yo mismo, continuar',
      btnChange: 'Elegir otro lugar',
      footnote: 'Si no encuentra su ubicación, puede escribir la dirección completa en WhatsApp.',
      zoneOk: 'Dentro de nuestra zona de transfer',
      zoneOut: 'Fuera de nuestra zona de transfer',
      zoneOutNote: 'Esta dirección está fuera de nuestra zona de transfer. Si usted viene al muelle de Kabataş por su cuenta, puede unirse al tour completo — el precio no cambia.',
      doneTitle: '¡Gracias!',
      doneMessage: 'Su ubicación ha sido recibida. Continuamos en WhatsApp.',
      loading: 'Cargando...',
      expired: 'Este enlace ha expirado. Solicite un nuevo enlace en WhatsApp.',
      notFound: 'Enlace no encontrado.',
    },
    ru: {
      title: 'Откуда вас забрать?',
      lead: 'Выберите ваш отель, место встречи или точный адрес, чтобы наш трансфер приехал к правильной двери.',
      step1: 'Начните вводить название места или адрес',
      step2: 'Выберите из выпадающего списка',
      step3: 'Проверьте местоположение и подтвердите',
      placeholder: 'Отель, площадь, ресторан, адрес...',
      btnConfirm: 'Подтвердить и отправить',
      btnSelfPickup: 'Я приду сам, продолжить',
      btnChange: 'Выбрать другое место',
      footnote: 'Если не нашли своё место, можете написать полный адрес в WhatsApp.',
      zoneOk: 'Входит в нашу зону трансфера',
      zoneOut: 'Вне нашей зоны трансфера',
      zoneOutNote: 'Этот адрес вне нашей зоны трансфера. Если вы сами доберётесь до причала Кабаташ, вы сможете присоединиться к полной экскурсии — цена не изменится.',
      doneTitle: 'Спасибо!',
      doneMessage: 'Ваше местоположение получено. Продолжим в WhatsApp.',
      loading: 'Загрузка...',
      expired: 'Срок действия ссылки истёк. Попросите новую ссылку в WhatsApp.',
      notFound: 'Ссылка не найдена.',
    },
    ar: {
      title: 'من أين نأخذكم؟',
      lead: 'يرجى تحديد فندقكم أو نقطة اللقاء أو العنوان الكامل أدناه ليصل سائقنا إلى الباب الصحيح.',
      step1: 'ابدأ بكتابة اسم المكان أو العنوان',
      step2: 'اختر من القائمة المنسدلة',
      step3: 'تحقق من الموقع وأكد',
      placeholder: 'فندق، ساحة، مطعم، عنوان...',
      btnConfirm: 'تأكيد وإرسال',
      btnSelfPickup: 'سآتي بنفسي، متابعة',
      btnChange: 'اختر مكاناً آخر',
      footnote: 'إذا لم تجد موقعك، يمكنك كتابة العنوان الكامل على واتساب.',
      zoneOk: 'ضمن منطقة النقل لدينا',
      zoneOut: 'خارج منطقة النقل لدينا',
      zoneOutNote: 'هذا العنوان خارج منطقة النقل. إذا أتيت إلى رصيف كاباتاش بنفسك، يمكنك الانضمام للجولة كاملة — السعر لا يتغير.',
      doneTitle: 'شكراً لكم!',
      doneMessage: 'تم استلام موقعكم. سنواصل على واتساب.',
      loading: 'جار التحميل...',
      expired: 'انتهت صلاحية هذا الرابط. اطلب رابطاً جديداً على واتساب.',
      notFound: 'الرابط غير موجود.',
    },
    fr: {
      title: 'Où devons-nous vous chercher?',
      lead: 'Veuillez sélectionner votre hôtel, point de rendez-vous ou adresse complète ci-dessous pour que notre transfert arrive à la bonne porte.',
      step1: 'Commencez à taper un nom de lieu ou une adresse',
      step2: 'Choisissez dans le menu déroulant',
      step3: 'Vérifiez l’emplacement et confirmez',
      placeholder: 'Hôtel, place, restaurant, adresse...',
      btnConfirm: 'Confirmer et envoyer',
      btnSelfPickup: 'Je viendrai moi-même, continuer',
      btnChange: 'Choisir un autre lieu',
      footnote: 'Si vous ne trouvez pas votre emplacement, vous pouvez taper l’adresse complète sur WhatsApp.',
      zoneOk: 'Dans notre zone de transfert',
      zoneOut: 'Hors de notre zone de transfert',
      zoneOutNote: 'Cette adresse est hors de notre zone de transfert. Si vous venez au quai de Kabataş vous-même, vous pouvez rejoindre la croisière complète — le prix reste le même.',
      doneTitle: 'Merci!',
      doneMessage: 'Votre emplacement a été reçu. Nous continuons sur WhatsApp.',
      loading: 'Chargement...',
      expired: 'Ce lien a expiré. Veuillez demander un nouveau lien sur WhatsApp.',
      notFound: 'Lien introuvable.',
    },
    it: {
      title: 'Dove dobbiamo prenderla?',
      lead: 'Selezioni il suo hotel, punto d’incontro o indirizzo completo qui sotto, così il nostro transfer arriverà alla porta giusta.',
      step1: 'Inizi a digitare il nome di un luogo o un indirizzo',
      step2: 'Scelga dal menu a tendina',
      step3: 'Verifichi la posizione e confermi',
      placeholder: 'Hotel, piazza, ristorante, indirizzo...',
      btnConfirm: 'Conferma e invia',
      btnSelfPickup: 'Verrò da solo, continua',
      btnChange: 'Scegli un altro luogo',
      footnote: 'Se non trova la sua posizione, può scrivere l’indirizzo completo su WhatsApp.',
      zoneOk: 'Nella nostra zona di transfer',
      zoneOut: 'Fuori dalla nostra zona di transfer',
      zoneOutNote: 'Questo indirizzo è fuori dalla nostra zona di transfer. Se viene al molo di Kabataş da solo, può unirsi al tour completo — il prezzo non cambia.',
      doneTitle: 'Grazie!',
      doneMessage: 'La sua posizione è stata ricevuta. Continueremo su WhatsApp.',
      loading: 'Caricamento...',
      expired: 'Questo link è scaduto. Richieda un nuovo link su WhatsApp.',
      notFound: 'Link non trovato.',
    },
    zh: {
      title: '我们在哪里接您？',
      lead: '请在下方选择您的酒店、会面点或完整地址，以便我们的接送服务到达正确的门口。',
      step1: '开始输入地点名称或地址',
      step2: '从下拉列表中选择',
      step3: '确认位置并确认',
      placeholder: '酒店、广场、餐厅、地址……',
      btnConfirm: '确认并发送',
      btnSelfPickup: '我自己来，继续',
      btnChange: '选择其他地方',
      footnote: '如果找不到您的位置，可以在WhatsApp上输入完整地址。',
      zoneOk: '在我们的接送范围内',
      zoneOut: '在我们的接送范围之外',
      zoneOutNote: '此地址在我们的接送范围之外。如果您自行到卡巴塔什码头，仍可参加完整行程——价格不变。',
      doneTitle: '感谢您！',
      doneMessage: '已收到您的位置。我们将在WhatsApp上继续。',
      loading: '加载中...',
      expired: '此链接已过期。请在WhatsApp上索取新链接。',
      notFound: '链接未找到。',
    },
    fa: {
      title: 'از کجا شما را سوار کنیم؟',
      lead: 'لطفاً هتل، نقطه ملاقات یا آدرس کامل خود را در زیر انتخاب کنید تا انتقال ما به درب صحیح برسد.',
      step1: 'شروع به تایپ نام مکان یا آدرس کنید',
      step2: 'از منوی کشویی انتخاب کنید',
      step3: 'مکان را بررسی کرده و تأیید کنید',
      placeholder: 'هتل، میدان، رستوران، آدرس...',
      btnConfirm: 'تأیید و ارسال',
      btnSelfPickup: 'خودم می‌آیم، ادامه',
      btnChange: 'مکان دیگری انتخاب کنید',
      footnote: 'اگر مکان خود را پیدا نکردید، می‌توانید آدرس کامل را در واتساپ تایپ کنید.',
      zoneOk: 'در منطقه انتقال ما',
      zoneOut: 'خارج از منطقه انتقال ما',
      zoneOutNote: 'این آدرس خارج از منطقه انتقال است. اگر خودتان به اسکله کاباتاش بیایید، می‌توانید در تور کامل شرکت کنید — قیمت تغییر نمی‌کند.',
      doneTitle: 'متشکریم!',
      doneMessage: 'موقعیت شما دریافت شد. در واتساپ ادامه می‌دهیم.',
      loading: 'در حال بارگذاری...',
      expired: 'این لینک منقضی شده است. لطفاً لینک جدید را در واتساپ درخواست کنید.',
      notFound: 'لینک یافت نشد.',
    },
    hi: {
      title: 'हम आपको कहाँ से लें?',
      lead: 'कृपया अपना होटल, मिलने का स्थान या पूरा पता नीचे चुनें ताकि हमारी ट्रांसफर सर्विस सही दरवाज़े पर पहुँचे।',
      step1: 'स्थान का नाम या पता लिखना शुरू करें',
      step2: 'ड्रॉपडाउन सूची से चुनें',
      step3: 'स्थान की जाँच करें और पुष्टि करें',
      placeholder: 'होटल, चौक, रेस्तरां, पता...',
      btnConfirm: 'पुष्टि करें और भेजें',
      btnSelfPickup: 'मैं खुद आऊँगा, जारी रखें',
      btnChange: 'दूसरा स्थान चुनें',
      footnote: 'यदि आपको अपना स्थान नहीं मिल रहा, तो आप पूरा पता WhatsApp पर लिख सकते हैं।',
      zoneOk: 'हमारे ट्रांसफर क्षेत्र में',
      zoneOut: 'हमारे ट्रांसफर क्षेत्र के बाहर',
      zoneOutNote: 'यह पता हमारे ट्रांसफर क्षेत्र के बाहर है। यदि आप स्वयं Kabataş घाट तक आते हैं, तो आप पूरे टूर में शामिल हो सकते हैं — टूर का मूल्य वही रहेगा।',
      doneTitle: 'धन्यवाद!',
      doneMessage: 'आपका स्थान प्राप्त हो गया है। हम WhatsApp पर जारी रखेंगे।',
      loading: 'लोड हो रहा है...',
      expired: 'यह लिंक समाप्त हो चुका है। कृपया WhatsApp पर नया लिंक माँगें।',
      notFound: 'लिंक नहीं मिला।',
    },
    ur: {
      title: 'ہم آپ کو کہاں سے لیں؟',
      lead: 'براہ کرم اپنا ہوٹل، ملنے کی جگہ یا مکمل پتہ نیچے منتخب کریں تاکہ ہماری ٹرانسفر صحیح دروازے پر پہنچے۔',
      step1: 'جگہ کا نام یا پتہ ٹائپ کرنا شروع کریں',
      step2: 'ڈراپ ڈاؤن فہرست سے منتخب کریں',
      step3: 'مقام کی تصدیق کریں اور تصدیق کریں',
      placeholder: 'ہوٹل، چوک، ریستوران، پتہ...',
      btnConfirm: 'تصدیق کریں اور بھیجیں',
      btnSelfPickup: 'میں خود آؤں گا، جاری رکھیں',
      btnChange: 'دوسری جگہ منتخب کریں',
      footnote: 'اگر آپ کو اپنا مقام نہیں مل رہا، تو آپ WhatsApp پر مکمل پتہ لکھ سکتے ہیں۔',
      zoneOk: 'ہمارے ٹرانسفر علاقے میں',
      zoneOut: 'ہمارے ٹرانسفر علاقے سے باہر',
      zoneOutNote: 'یہ پتہ ہمارے ٹرانسفر علاقے سے باہر ہے۔ اگر آپ خود Kabataş گھاٹ تک آتے ہیں، تو آپ مکمل ٹور میں شامل ہو سکتے ہیں — ٹور کی قیمت یہی رہے گی۔',
      doneTitle: 'شکریہ!',
      doneMessage: 'آپ کا مقام موصول ہو گیا ہے۔ ہم WhatsApp پر جاری رکھیں گے۔',
      loading: 'لوڈ ہو رہا ہے...',
      expired: 'یہ لنک ختم ہو چکا ہے۔ براہ کرم WhatsApp پر نیا لنک طلب کریں۔',
      notFound: 'لنک نہیں ملا۔',
    },
    ja: {
      title: 'どこでお迎えに上がりましょうか？',
      lead: '送迎が正しいドアに到着するよう、以下からホテル、待ち合わせ場所、または完全な住所をお選びください。',
      step1: '場所名または住所を入力し始めてください',
      step2: 'ドロップダウンリストから選択してください',
      step3: '場所を確認して確定してください',
      placeholder: 'ホテル、広場、レストラン、住所...',
      btnConfirm: '確定して送信',
      btnSelfPickup: '自分で行きます、続行',
      btnChange: '別の場所を選択',
      footnote: '場所が見つからない場合は、WhatsAppで完全な住所を入力できます。',
      zoneOk: '送迎エリア内',
      zoneOut: '送迎エリア外',
      zoneOutNote: 'この住所は送迎エリア外です。ご自身でカバタシュ桟橋までお越しいただければ、ツアー全体にご参加いただけます — 料金は変わりません。',
      doneTitle: 'ありがとうございます！',
      doneMessage: 'お客様の場所を受け取りました。WhatsAppで続けます。',
      loading: '読み込み中...',
      expired: 'このリンクは有効期限が切れています。WhatsAppで新しいリンクをリクエストしてください。',
      notFound: 'リンクが見つかりません。',
    },
    ko: {
      title: '어디에서 모실까요?',
      lead: '저희 셔틀이 올바른 문 앞에 도착할 수 있도록 호텔, 만남의 장소 또는 전체 주소를 아래에서 선택해 주세요.',
      step1: '장소 이름 또는 주소를 입력하기 시작하세요',
      step2: '드롭다운 목록에서 선택하세요',
      step3: '위치를 확인하고 확정하세요',
      placeholder: '호텔, 광장, 레스토랑, 주소...',
      btnConfirm: '확인하고 보내기',
      btnSelfPickup: '직접 갈게요, 계속',
      btnChange: '다른 장소 선택',
      footnote: '위치를 찾을 수 없는 경우 WhatsApp으로 전체 주소를 입력하실 수 있습니다.',
      zoneOk: '셔틀 서비스 지역 내',
      zoneOut: '셔틀 서비스 지역 외',
      zoneOutNote: '이 주소는 셔틀 서비스 지역 밖입니다. Kabataş 부두까지 직접 오시면 전체 투어에 참여하실 수 있습니다 — 투어 가격은 동일합니다.',
      doneTitle: '감사합니다!',
      doneMessage: '위치를 받았습니다. WhatsApp에서 계속하겠습니다.',
      loading: '로딩 중...',
      expired: '이 링크는 만료되었습니다. WhatsApp에서 새 링크를 요청하세요.',
      notFound: '링크를 찾을 수 없습니다.',
    },
    uk: {
      title: 'Звідки вас забрати?',
      lead: 'Будь ласка, виберіть свій готель, місце зустрічі або повну адресу нижче, щоб наш трансфер приїхав до правильних дверей.',
      step1: 'Почніть вводити назву місця або адресу',
      step2: 'Виберіть зі спадного списку',
      step3: 'Перевірте місцезнаходження та підтвердіть',
      placeholder: 'Готель, площа, ресторан, адреса...',
      btnConfirm: 'Підтвердити та надіслати',
      btnSelfPickup: 'Я прийду сам, продовжити',
      btnChange: 'Вибрати інше місце',
      footnote: 'Якщо ви не знайшли своє місце, можете написати повну адресу в WhatsApp.',
      zoneOk: 'У нашій зоні трансферу',
      zoneOut: 'Поза нашою зоною трансферу',
      zoneOutNote: 'Ця адреса знаходиться поза нашою зоною трансферу. Якщо ви самі дістанетеся причалу Кабаташ, ви зможете приєднатися до повної екскурсії — ціна не зміниться.',
      doneTitle: 'Дякуємо!',
      doneMessage: 'Ваше місцезнаходження отримано. Продовжимо в WhatsApp.',
      loading: 'Завантаження...',
      expired: 'Термін дії цього посилання закінчився. Будь ласка, попросіть нове посилання в WhatsApp.',
      notFound: 'Посилання не знайдено.',
    },
    id: {
      title: 'Di mana kami harus menjemput Anda?',
      lead: 'Silakan pilih hotel, titik pertemuan, atau alamat lengkap Anda di bawah ini agar layanan transfer kami sampai ke pintu yang tepat.',
      step1: 'Mulai ketik nama tempat atau alamat',
      step2: 'Pilih dari daftar dropdown',
      step3: 'Periksa lokasi dan konfirmasi',
      placeholder: 'Hotel, alun-alun, restoran, alamat...',
      btnConfirm: 'Konfirmasi dan Kirim',
      btnSelfPickup: 'Saya akan datang sendiri, lanjut',
      btnChange: 'Pilih tempat lain',
      footnote: 'Jika tidak menemukan lokasi Anda, Anda dapat mengetik alamat lengkap di WhatsApp.',
      zoneOk: 'Dalam area transfer kami',
      zoneOut: 'Di luar area transfer kami',
      zoneOutNote: 'Alamat ini di luar area transfer kami. Jika Anda datang sendiri ke Dermaga Kabataş, Anda tetap dapat mengikuti tur lengkap — harga tour tidak berubah.',
      doneTitle: 'Terima kasih!',
      doneMessage: 'Lokasi Anda telah diterima. Kami akan melanjutkan di WhatsApp.',
      loading: 'Memuat...',
      expired: 'Tautan ini telah kedaluwarsa. Silakan minta tautan baru di WhatsApp.',
      notFound: 'Tautan tidak ditemukan.',
    },
    ms: {
      title: 'Di mana kami patut menjemput anda?',
      lead: 'Sila pilih hotel, tempat pertemuan, atau alamat penuh anda di bawah supaya perkhidmatan transfer kami sampai ke pintu yang betul.',
      step1: 'Mula menaip nama tempat atau alamat',
      step2: 'Pilih dari senarai turun bawah',
      step3: 'Semak lokasi dan sahkan',
      placeholder: 'Hotel, dataran, restoran, alamat...',
      btnConfirm: 'Sahkan dan Hantar',
      btnSelfPickup: 'Saya akan datang sendiri, teruskan',
      btnChange: 'Pilih tempat lain',
      footnote: 'Jika anda tidak jumpa lokasi anda, anda boleh taip alamat penuh di WhatsApp.',
      zoneOk: 'Dalam kawasan transfer kami',
      zoneOut: 'Di luar kawasan transfer kami',
      zoneOutNote: 'Alamat ini di luar kawasan transfer kami. Jika anda sendiri datang ke Jeti Kabataş, anda masih boleh menyertai tur penuh — harga tur tidak berubah.',
      doneTitle: 'Terima kasih!',
      doneMessage: 'Lokasi anda telah diterima. Kami akan teruskan di WhatsApp.',
      loading: 'Memuatkan...',
      expired: 'Pautan ini telah tamat tempoh. Sila minta pautan baru di WhatsApp.',
      notFound: 'Pautan tidak dijumpai.',
    },
    pl: {
      title: 'Skąd mamy Państwa odebrać?',
      lead: 'Prosimy wybrać poniżej hotel, miejsce spotkania lub pełny adres, aby nasz transfer dotarł pod właściwe drzwi.',
      step1: 'Zacznij wpisywać nazwę miejsca lub adres',
      step2: 'Wybierz z listy rozwijanej',
      step3: 'Sprawdź lokalizację i potwierdź',
      placeholder: 'Hotel, plac, restauracja, adres...',
      btnConfirm: 'Potwierdź i wyślij',
      btnSelfPickup: 'Przyjdę sam, kontynuuj',
      btnChange: 'Wybierz inne miejsce',
      footnote: 'Jeśli nie możesz znaleźć swojej lokalizacji, możesz wpisać pełny adres na WhatsApp.',
      zoneOk: 'W naszej strefie transferu',
      zoneOut: 'Poza naszą strefą transferu',
      zoneOutNote: 'Ten adres jest poza naszą strefą transferu. Jeśli przyjdzie Pan/Pani sam(a) do przystani Kabataş, można dołączyć do pełnej wycieczki — cena nie zmienia się.',
      doneTitle: 'Dziękujemy!',
      doneMessage: 'Twoja lokalizacja została odebrana. Kontynuujemy na WhatsApp.',
      loading: 'Ładowanie...',
      expired: 'Ten link wygasł. Prosimy o nowy link na WhatsApp.',
      notFound: 'Nie znaleziono linku.',
    },
    bg: {
      title: 'Откъде да ви вземем?',
      lead: 'Моля, изберете по-долу вашия хотел, място на среща или пълен адрес, за да може нашият трансфер да пристигне до правилната врата.',
      step1: 'Започнете да пишете името на мястото или адреса',
      step2: 'Изберете от падащия списък',
      step3: 'Проверете местоположението и потвърдете',
      placeholder: 'Хотел, площад, ресторант, адрес...',
      btnConfirm: 'Потвърди и изпрати',
      btnSelfPickup: 'Ще дойда сам, продължи',
      btnChange: 'Избери друго място',
      footnote: 'Ако не намирате местоположението си, можете да напишете пълния адрес в WhatsApp.',
      zoneOk: 'В нашата зона за трансфер',
      zoneOut: 'Извън нашата зона за трансфер',
      zoneOutNote: 'Този адрес е извън нашата зона за трансфер. Ако дойдете сами до пристанището Kabataş, можете да участвате в пълната обиколка — цената остава същата.',
      doneTitle: 'Благодарим Ви!',
      doneMessage: 'Вашето местоположение е получено. Продължаваме в WhatsApp.',
      loading: 'Зареждане...',
      expired: 'Срокът на тази връзка изтече. Моля, поискайте нова връзка в WhatsApp.',
      notFound: 'Връзката не е намерена.',
    },
    ro: {
      title: 'De unde să vă luăm?',
      lead: 'Vă rugăm să selectați mai jos hotelul, punctul de întâlnire sau adresa completă, astfel încât transferul nostru să ajungă la ușa corectă.',
      step1: 'Începeți să tastați numele locului sau adresa',
      step2: 'Alegeți din lista derulantă',
      step3: 'Verificați locația și confirmați',
      placeholder: 'Hotel, piață, restaurant, adresă...',
      btnConfirm: 'Confirmă și trimite',
      btnSelfPickup: 'Vin singur, continuă',
      btnChange: 'Alege alt loc',
      footnote: 'Dacă nu vă găsiți locația, puteți tasta adresa completă pe WhatsApp.',
      zoneOk: 'În zona noastră de transfer',
      zoneOut: 'În afara zonei noastre de transfer',
      zoneOutNote: 'Această adresă este în afara zonei noastre de transfer. Dacă veniți singur la dana Kabataş, puteți participa la întregul tur — prețul rămâne același.',
      doneTitle: 'Vă mulțumim!',
      doneMessage: 'Locația dvs. a fost primită. Continuăm pe WhatsApp.',
      loading: 'Se încarcă...',
      expired: 'Acest link a expirat. Vă rugăm să solicitați un nou link pe WhatsApp.',
      notFound: 'Linkul nu a fost găsit.',
    },
  };
  // Diğer diller (hi/ur/ja/ko/uk/id/ms/pl/bg/ro) için EN fallback.
  function dict(lang) {
    return I18N[lang] || I18N.en;
  }

  let token = null;
  let language = 'en';
  let confirmation = null;
  let map = null;
  let marker = null;
  let selectedPlace = null;

  // Token URL'den oku: /adres/{token} veya /adres?t={token}
  function extractToken() {
    const path = window.location.pathname;
    const m = path.match(/^\/adres\/([A-Za-z0-9_-]{8,32})\/?$/);
    if (m) return m[1];
    const q = new URLSearchParams(window.location.search).get('t');
    return q || null;
  }

  function applyI18n() {
    const d = dict(language);
    document.documentElement.lang = language;
    document.title = d.title + ' · Bosphorus Night';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (d[key]) el.textContent = d[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (d[key]) el.setAttribute('placeholder', d[key]);
    });
    // RTL diller
    if (['ar', 'fa', 'ur', 'he'].includes(language)) {
      document.documentElement.dir = 'rtl';
    }
  }

  async function loadConfirmation() {
    if (!token) return showError(dict(language).notFound);
    try {
      const r = await fetch(`${API_BASE}/api/address-confirm/${token}`);
      if (!r.ok) {
        const body = await r.json().catch(() => ({}));
        if (r.status === 410) return showError(dict(language).expired);
        if (r.status === 404) return showError(dict(language).notFound);
        return showError(body.error || 'Error');
      }
      confirmation = await r.json();
      language = confirmation.language || 'en';
      applyI18n();

      // Eğer zaten finalize edilmişse done view göster
      if (['confirmed', 'confirmed_out_zone'].includes(confirmation.state)) {
        return showDone();
      }

      // Eğer önceden bir seçim yapılmışsa restore et
      if (confirmation.selected) {
        renderSelection(confirmation.selected, false);
      }

      document.getElementById('loadingView').style.display = 'none';
      document.getElementById('mainView').style.display = 'block';
    } catch (err) {
      showError('Network error: ' + err.message);
    }
  }

  function showError(msg) {
    document.getElementById('loadingView').style.display = 'none';
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('errorView').style.display = 'block';
    document.getElementById('errorMessage').textContent = msg;
  }

  function showDone() {
    document.getElementById('loadingView').style.display = 'none';
    document.getElementById('mainView').style.display = 'none';
    document.getElementById('doneView').style.display = 'block';
  }

  function renderSelection(sel, isFreshSelect) {
    const d = dict(language);
    selectedPlace = sel;
    const selDiv = document.getElementById('selection');
    document.getElementById('selectionName').textContent = sel.place_name || sel.name || '';
    document.getElementById('selectionAddress').textContent = sel.formatted_address || sel.address || '';
    const badge = document.getElementById('zoneBadge');
    const note = document.getElementById('zoneOutNote');
    if (sel.in_zone) {
      badge.className = 'zone-badge zone-ok';
      badge.textContent = '🟢 ' + d.zoneOk;
      note.style.display = 'none';
    } else {
      badge.className = 'zone-badge zone-out';
      badge.textContent = '🟡 ' + d.zoneOut;
      note.style.display = 'block';
    }
    selDiv.style.display = 'block';

    // Map
    if (sel.lat && sel.lng && window.google) {
      showMap(sel.lat, sel.lng, sel.place_name || sel.name || '');
    }

    // Actions
    const actions = document.getElementById('actions');
    const btnConfirm = document.getElementById('btnConfirm');
    const btnSelf = document.getElementById('btnSelfPickup');
    const btnChange = document.getElementById('btnChange');
    if (sel.in_zone) {
      btnConfirm.style.display = 'block';
      btnSelf.style.display = 'none';
      btnChange.style.display = 'block';
    } else {
      btnConfirm.style.display = 'none';
      btnSelf.style.display = 'block';
      btnChange.style.display = 'block';
    }
    actions.style.display = 'flex';
  }

  function showMap(lat, lng, title) {
    const mapDiv = document.getElementById('map');
    mapDiv.style.display = 'block';
    const loc = { lat, lng };
    if (!map) {
      map = new google.maps.Map(mapDiv, {
        center: loc,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
          { elementType: 'geometry', stylers: [{ color: '#0b1120' }] },
          { elementType: 'labels.text.fill', stylers: [{ color: '#c9a84c' }] },
          { elementType: 'labels.text.stroke', stylers: [{ color: '#0b1120' }] },
          { featureType: 'road', elementType: 'geometry', stylers: [{ color: '#1a2340' }] },
          { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0a1628' }] },
          { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#111b33' }] }
        ]
      });
    } else {
      map.setCenter(loc);
    }
    if (marker) marker.setMap(null);
    marker = new google.maps.Marker({
      position: loc,
      map,
      title,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: '#c9a84c',
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 2,
      },
    });
  }

  async function postSelect(place) {
    try {
      const r = await fetch(`${API_BASE}/api/address-confirm/${token}/select`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          place_id: place.place_id,
          place_name: place.name,
          formatted_address: place.formatted_address,
          lat: place.lat,
          lng: place.lng,
          types: place.types || [],
        }),
      });
      const body = await r.json();
      if (!r.ok) {
        console.warn('select failed', body);
        return;
      }
      renderSelection({
        place_name: place.name,
        formatted_address: place.formatted_address,
        lat: place.lat,
        lng: place.lng,
        in_zone: body.in_zone,
      }, true);
    } catch (err) {
      console.error(err);
    }
  }

  async function postFinalize(action) {
    const btnC = document.getElementById('btnConfirm');
    const btnS = document.getElementById('btnSelfPickup');
    btnC.disabled = true;
    btnS.disabled = true;
    try {
      const r = await fetch(`${API_BASE}/api/address-confirm/${token}/finalize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      });
      const body = await r.json();
      if (!r.ok) {
        alert(body.error || 'Error');
        btnC.disabled = false;
        btnS.disabled = false;
        return;
      }
      showDone();
    } catch (err) {
      alert('Network error: ' + err.message);
      btnC.disabled = false;
      btnS.disabled = false;
    }
  }

  function setupAutocomplete() {
    const input = document.getElementById('placeInput');
    if (!input || !window.google) return;
    const ac = new google.maps.places.Autocomplete(input, {
      types: ['establishment', 'geocode'],
      componentRestrictions: { country: 'tr' },
      fields: ['place_id', 'name', 'formatted_address', 'geometry', 'types'],
    });
    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (!place || !place.geometry || !place.geometry.location) return;
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      postSelect({
        place_id: place.place_id,
        name: place.name || '',
        formatted_address: place.formatted_address || '',
        lat,
        lng,
        types: place.types || [],
      });
    });
  }

  function reset() {
    document.getElementById('selection').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.getElementById('actions').style.display = 'none';
    document.getElementById('placeInput').value = '';
    document.getElementById('placeInput').focus();
    selectedPlace = null;
  }

  // Maps script async/defer ile yüklendikten sonra çağrılır
  window.onMapsReady = function () {
    setupAutocomplete();
    // Eğer önceden seçim varsa haritayı çiz
    if (selectedPlace && selectedPlace.lat && selectedPlace.lng) {
      showMap(selectedPlace.lat, selectedPlace.lng, selectedPlace.place_name || '');
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    token = extractToken();
    document.getElementById('btnConfirm').addEventListener('click', () => postFinalize('confirm'));
    document.getElementById('btnSelfPickup').addEventListener('click', () => postFinalize('self_pickup'));
    document.getElementById('btnChange').addEventListener('click', reset);
    loadConfirmation();
  });
})();
