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
