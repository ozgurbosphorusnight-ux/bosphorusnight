#!/usr/bin/env node
/**
 * Full-site Bosphorus/Istanbul/Turkish-placename localization audit.
 *
 * Rules:
 * - Only `bosphorusnight.com` domain stays Latin.
 * - URLs (href/src/content/action/url/@id attributes) are protected.
 * - Parenthesized EN keywords like "(Bosphorus)" — kept as-is (intentional SEO).
 * - Standalone Latin "Bosphorus", "Istanbul", Turkish place names → local script.
 * - Non-Latin langs (ja/ko/zh/ar/ru/uk/bg/hi/ur/fa): full transliteration of place names.
 * - Latin langs (tr/de/es/fr/it/pl/ro/id/ms): only Bosphorus/Night compounds (place names already Latin-OK).
 *
 * Scope:
 * - content/translations/*.js
 * - content/ui-translations/*.json (+ subdirs)
 * - js/translations.js
 * - src/blog-i18n/*, src/city-guide-i18n/*, src/cruises-i18n/*
 * - blog/*.html (EN root, only EN-safe patterns)
 *
 * Run: node scripts/fix-bosphorus-localization.js
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Translations per language. Order: LONGEST patterns first to avoid partial overlap.
// Each lang has Bosphorus compounds + place names + Istanbul.
const T = {
  ja: [
    ['Bosphorus Night Dinner Cruise', 'ボスポラスの夜ディナークルーズ'],
    ['Bosphorus Night Sunset Cruise', 'ボスポラスの夜サンセットクルーズ'],
    ['Bosphorus Night Cruise', 'ボスポラスの夜クルーズ'],
    ['Bosphorus Night Tour', 'ボスポラスの夜ツアー'],
    ['Bosphorus Night', 'ボスポラスの夜'],
    ['Bosphorus Dinner Cruise', 'ボスポラス・ディナークルーズ'],
    ['Bosphorus Sunset Cruise', 'ボスポラス・サンセットクルーズ'],
    ['Bosphorus Cruise', 'ボスポラス・クルーズ'],
    ['Bosphorus Tour', 'ボスポラス・ツアー'],
    ['Bosphorus Trip', 'ボスポラス旅行'],
    ['Bosphorus Bridge', 'ボスポラス橋'],
    ['Bosphorus Strait', 'ボスポラス海峡'],
    ['Bosphorus', 'ボスポラス'],
    ["Maiden's Tower", '乙女の塔'],
    ['Galata Tower', 'ガラタ塔'],
    ['Topkapı Palace', 'トプカプ宮殿'],
    ['Dolmabahçe Palace', 'ドルマバフチェ宮殿'],
    ['Çırağan Palace', 'チュラーン宮殿'],
    ['Beylerbeyi Palace', 'ベイレルベイ宮殿'],
    ['Ortaköy Mosque', 'オルタキョイ・モスク'],
    ['Blue Mosque', 'ブルーモスク'],
    ['Hagia Sophia', 'アヤソフィア'],
    ['Rumeli Fortress', 'ルメリ・ヒサル'],
    ['Anadolu Hisarı', 'アナドル・ヒサル'],
    ['FSM Bridge', 'ファーティフ・スルタン・メフメト橋'],
    ['Istanbul Night Tour', 'イスタンブール・ナイトツアー'],
    ['Istanbul Dinner Cruise', 'イスタンブール・ディナークルーズ'],
    ['Istanbul', 'イスタンブール'],
    ['Kabataş Pier', 'カバタシュ埠頭'],
    ['Kabataş', 'カバタシュ'],
    ['Dolmabahçe', 'ドルマバフチェ'],
    ['Çırağan', 'チュラーン'],
    ['Ortaköy', 'オルタキョイ'],
    ['Beylerbeyi', 'ベイレルベイ'],
    ['Üsküdar', 'ユスキュダル'],
    ['Rumeli', 'ルメリ'],
    ['Bebek', 'ベベク'],
  ],
  ko: [
    ['Bosphorus Night Dinner Cruise', '보스포루스의 밤 디너 크루즈'],
    ['Bosphorus Night Sunset Cruise', '보스포루스의 밤 선셋 크루즈'],
    ['Bosphorus Night Cruise', '보스포루스의 밤 크루즈'],
    ['Bosphorus Night Tour', '보스포루스의 밤 투어'],
    ['Bosphorus Night', '보스포루스의 밤'],
    ['Bosphorus Dinner Cruise', '보스포루스 디너 크루즈'],
    ['Bosphorus Sunset Cruise', '보스포루스 선셋 크루즈'],
    ['Bosphorus Cruise', '보스포루스 크루즈'],
    ['Bosphorus Tour', '보스포루스 투어'],
    ['Bosphorus Trip', '보스포루스 여행'],
    ['Bosphorus Bridge', '보스포루스 다리'],
    ['Bosphorus Strait', '보스포루스 해협'],
    ['Bosphorus', '보스포루스'],
    ["Maiden's Tower", '처녀의 탑'],
    ['Galata Tower', '갈라타 타워'],
    ['Topkapı Palace', '톱카프 궁전'],
    ['Dolmabahçe Palace', '돌마바흐체 궁전'],
    ['Çırağan Palace', '츠라간 궁전'],
    ['Beylerbeyi Palace', '베일레르베이 궁전'],
    ['Ortaköy Mosque', '오르타쾨이 모스크'],
    ['Blue Mosque', '블루 모스크'],
    ['Hagia Sophia', '아야 소피아'],
    ['Rumeli Fortress', '루멜리 요새'],
    ['Anadolu Hisarı', '아나돌루 히사르'],
    ['FSM Bridge', 'FSM 다리'],
    ['Istanbul Night Tour', '이스탄불 야간 투어'],
    ['Istanbul Dinner Cruise', '이스탄불 디너 크루즈'],
    ['Istanbul', '이스탄불'],
    ['Kabataş Pier', '카바타시 부두'],
    ['Kabataş', '카바타시'],
    ['Dolmabahçe', '돌마바흐체'],
    ['Çırağan', '츠라간'],
    ['Ortaköy', '오르타쾨이'],
    ['Beylerbeyi', '베일레르베이'],
    ['Üsküdar', '위스퀴다르'],
    ['Rumeli', '루멜리'],
    ['Bebek', '베벡'],
  ],
  zh: [
    ['Bosphorus Night Dinner Cruise', '博斯普鲁斯之夜晚餐游船'],
    ['Bosphorus Night Cruise', '博斯普鲁斯之夜游船'],
    ['Bosphorus Night Tour', '博斯普鲁斯之夜游'],
    ['Bosphorus Night', '博斯普鲁斯之夜'],
    ['Bosphorus Dinner Cruise', '博斯普鲁斯晚餐游船'],
    ['Bosphorus Sunset Cruise', '博斯普鲁斯日落游船'],
    ['Bosphorus Cruise', '博斯普鲁斯游船'],
    ['Bosphorus Bridge', '博斯普鲁斯大桥'],
    ['Bosphorus Strait', '博斯普鲁斯海峡'],
    ['Bosphorus', '博斯普鲁斯'],
    ["Maiden's Tower", '少女塔'],
    ['Galata Tower', '加拉塔塔'],
    ['Topkapı Palace', '托普卡帕宫'],
    ['Dolmabahçe Palace', '多尔玛巴赫切宫'],
    ['Beylerbeyi Palace', '贝伊勒贝伊宫'],
    ['Ortaköy Mosque', '奥尔塔科伊清真寺'],
    ['Blue Mosque', '蓝色清真寺'],
    ['Hagia Sophia', '圣索菲亚'],
    ['Rumeli Fortress', '鲁梅利堡垒'],
    ['Istanbul', '伊斯坦布尔'],
    ['Kabataş', '卡巴塔什'],
    ['Dolmabahçe', '多尔玛巴赫切'],
    ['Çırağan', '奇拉昂'],
    ['Ortaköy', '奥尔塔科伊'],
    ['Beylerbeyi', '贝伊勒贝伊'],
    ['Üsküdar', '于斯屈达尔'],
    ['Rumeli', '鲁梅利'],
    ['Bebek', '贝贝克'],
  ],
  ar: [
    ['Bosphorus Night Dinner Cruise', 'رحلة عشاء ليلة البوسفور'],
    ['Bosphorus Night Cruise', 'رحلة ليلة البوسفور'],
    ['Bosphorus Night Tour', 'جولة ليلة البوسفور'],
    ['Bosphorus Night', 'ليلة البوسفور'],
    ['Bosphorus Dinner Cruise', 'رحلة عشاء البوسفور'],
    ['Bosphorus Sunset Cruise', 'رحلة غروب البوسفور'],
    ['Bosphorus Cruise', 'رحلة البوسفور'],
    ['Bosphorus Bridge', 'جسر البوسفور'],
    ['Bosphorus Strait', 'مضيق البوسفور'],
    ['Bosphorus', 'البوسفور'],
    ["Maiden's Tower", 'برج العذراء'],
    ['Galata Tower', 'برج غلطة'],
    ['Topkapı Palace', 'قصر توبكابي'],
    ['Dolmabahçe Palace', 'قصر دولما باهتشة'],
    ['Beylerbeyi Palace', 'قصر بايلربيي'],
    ['Ortaköy Mosque', 'مسجد أورتاكوي'],
    ['Blue Mosque', 'المسجد الأزرق'],
    ['Hagia Sophia', 'آيا صوفيا'],
    ['Rumeli Fortress', 'قلعة روملي'],
    ['Istanbul', 'إسطنبول'],
    ['Kabataş', 'قباطاش'],
    ['Dolmabahçe', 'دولما باهتشة'],
    ['Çırağan', 'شيرغان'],
    ['Ortaköy', 'أورتاكوي'],
    ['Beylerbeyi', 'بايلربيي'],
    ['Üsküdar', 'أسكدار'],
    ['Rumeli', 'روملي'],
    ['Bebek', 'ببك'],
  ],
  ru: [
    ['Bosphorus Night Dinner Cruise', 'Босфорский ночной ужин-круиз'],
    ['Bosphorus Night Cruise', 'Босфорский ночной круиз'],
    ['Bosphorus Night Tour', 'Босфорский ночной тур'],
    ['Bosphorus Night', 'Босфорская ночь'],
    ['Bosphorus Dinner Cruise', 'Ужин-круиз по Босфору'],
    ['Bosphorus Sunset Cruise', 'Закатный круиз по Босфору'],
    ['Bosphorus Cruise', 'Круиз по Босфору'],
    ['Bosphorus Bridge', 'Босфорский мост'],
    ['Bosphorus Strait', 'Пролив Босфор'],
    ['Bosphorus', 'Босфор'],
    ["Maiden's Tower", 'Девичья башня'],
    ['Galata Tower', 'Галатская башня'],
    ['Topkapı Palace', 'Дворец Топкапы'],
    ['Dolmabahçe Palace', 'Дворец Долмабахче'],
    ['Beylerbeyi Palace', 'Дворец Бейлербейи'],
    ['Ortaköy Mosque', 'Мечеть Ортакёй'],
    ['Blue Mosque', 'Голубая мечеть'],
    ['Hagia Sophia', 'Айя-София'],
    ['Rumeli Fortress', 'Крепость Румелихисар'],
    ['Istanbul', 'Стамбул'],
    ['Kabataş', 'Кабаташ'],
    ['Dolmabahçe', 'Долмабахче'],
    ['Çırağan', 'Чыраган'],
    ['Ortaköy', 'Ортакёй'],
    ['Beylerbeyi', 'Бейлербейи'],
    ['Üsküdar', 'Ускюдар'],
    ['Rumeli', 'Румели'],
    ['Bebek', 'Бебек'],
  ],
  uk: [
    ['Bosphorus Night Dinner Cruise', 'Босфорський нічний круїз з вечерею'],
    ['Bosphorus Night Cruise', 'Босфорський нічний круїз'],
    ['Bosphorus Night Tour', 'Босфорський нічний тур'],
    ['Bosphorus Night', 'Босфорська ніч'],
    ['Bosphorus Dinner Cruise', 'Круїз з вечерею Босфором'],
    ['Bosphorus Sunset Cruise', 'Круїз заходу сонця Босфором'],
    ['Bosphorus Cruise', 'Круїз Босфором'],
    ['Bosphorus Bridge', 'Босфорський міст'],
    ['Bosphorus Strait', 'Протока Босфор'],
    ['Bosphorus', 'Босфор'],
    ["Maiden's Tower", 'Дівоча вежа'],
    ['Galata Tower', 'Галатська вежа'],
    ['Topkapı Palace', 'Палац Топкапи'],
    ['Dolmabahçe Palace', 'Палац Долмабахче'],
    ['Beylerbeyi Palace', 'Палац Бейлербеї'],
    ['Ortaköy Mosque', 'Мечеть Ортакьой'],
    ['Blue Mosque', 'Блакитна мечеть'],
    ['Hagia Sophia', 'Свята Софія'],
    ['Rumeli Fortress', 'Фортеця Румелі'],
    ['Istanbul', 'Стамбул'],
    ['Kabataş', 'Кабаташ'],
    ['Dolmabahçe', 'Долмабахче'],
    ['Çırağan', 'Чираган'],
    ['Ortaköy', 'Ортакьой'],
    ['Beylerbeyi', 'Бейлербеї'],
    ['Üsküdar', 'Ускюдар'],
    ['Rumeli', 'Румелі'],
    ['Bebek', 'Бебек'],
  ],
  bg: [
    ['Bosphorus Night Dinner Cruise', 'Босфорски нощен круиз с вечеря'],
    ['Bosphorus Night Cruise', 'Босфорски нощен круиз'],
    ['Bosphorus Night Tour', 'Босфорски нощен тур'],
    ['Bosphorus Night', 'Босфорска нощ'],
    ['Bosphorus Dinner Cruise', 'Круиз с вечеря по Босфора'],
    ['Bosphorus Sunset Cruise', 'Круиз на залез по Босфора'],
    ['Bosphorus Cruise', 'Круиз по Босфора'],
    ['Bosphorus Bridge', 'Босфорски мост'],
    ['Bosphorus Strait', 'Проток Босфор'],
    ['Bosphorus', 'Босфор'],
    ["Maiden's Tower", 'Девичата кула'],
    ['Galata Tower', 'Галата кула'],
    ['Topkapı Palace', 'Дворец Топкапъ'],
    ['Dolmabahçe Palace', 'Дворец Долмабахче'],
    ['Beylerbeyi Palace', 'Дворец Бейлербей'],
    ['Ortaköy Mosque', 'Джамия Ортакьой'],
    ['Blue Mosque', 'Синята джамия'],
    ['Hagia Sophia', 'Света София'],
    ['Rumeli Fortress', 'Крепост Румели'],
    ['Istanbul', 'Истанбул'],
    ['Kabataş', 'Кабаташ'],
    ['Dolmabahçe', 'Долмабахче'],
    ['Çırağan', 'Чираган'],
    ['Ortaköy', 'Ортакьой'],
    ['Beylerbeyi', 'Бейлербей'],
    ['Üsküdar', 'Юскюдар'],
    ['Rumeli', 'Румели'],
    ['Bebek', 'Бебек'],
  ],
  hi: [
    ['Bosphorus Night Dinner Cruise', 'बॉस्फोरस रात्रि डिनर क्रूज़'],
    ['Bosphorus Night Cruise', 'बॉस्फोरस रात्रि क्रूज़'],
    ['Bosphorus Night Tour', 'बॉस्फोरस रात्रि टूर'],
    ['Bosphorus Night', 'बॉस्फोरस की रात'],
    ['Bosphorus Dinner Cruise', 'बॉस्फोरस डिनर क्रूज़'],
    ['Bosphorus Sunset Cruise', 'बॉस्फोरस सूर्यास्त क्रूज़'],
    ['Bosphorus Cruise', 'बॉस्फोरस क्रूज़'],
    ['Bosphorus Bridge', 'बॉस्फोरस पुल'],
    ['Bosphorus Strait', 'बॉस्फोरस जलडमरूमध्य'],
    ['Bosphorus', 'बॉस्फोरस'],
    ["Maiden's Tower", 'मेडन्स टावर'],
    ['Galata Tower', 'गलाटा टावर'],
    ['Topkapı Palace', 'टोपकापी महल'],
    ['Dolmabahçe Palace', 'डोल्माबाह्चे महल'],
    ['Beylerbeyi Palace', 'बेइलरबेयी महल'],
    ['Ortaköy Mosque', 'ओर्ताकोय मस्जिद'],
    ['Blue Mosque', 'ब्लू मस्जिद'],
    ['Hagia Sophia', 'हागिया सोफिया'],
    ['Rumeli Fortress', 'रुमेली किला'],
    ['Istanbul', 'इस्तांबुल'],
    ['Kabataş', 'काबाताश'],
    ['Dolmabahçe', 'डोल्माबाह्चे'],
    ['Çırağan', 'चिरागान'],
    ['Ortaköy', 'ओर्ताकोय'],
    ['Beylerbeyi', 'बेइलरबेयी'],
    ['Üsküdar', 'उस्कुदार'],
    ['Rumeli', 'रुमेली'],
    ['Bebek', 'बेबेक'],
  ],
  ur: [
    ['Bosphorus Night Dinner Cruise', 'باسفورس کی رات ڈنر کروز'],
    ['Bosphorus Night Cruise', 'باسفورس کی رات کروز'],
    ['Bosphorus Night Tour', 'باسفورس کی رات ٹور'],
    ['Bosphorus Night', 'باسفورس کی رات'],
    ['Bosphorus Dinner Cruise', 'باسفورس ڈنر کروز'],
    ['Bosphorus Sunset Cruise', 'باسفورس غروب آفتاب کروز'],
    ['Bosphorus Cruise', 'باسفورس کروز'],
    ['Bosphorus Bridge', 'باسفورس پل'],
    ['Bosphorus Strait', 'آبنائے باسفورس'],
    ['Bosphorus', 'باسفورس'],
    ["Maiden's Tower", 'میڈنز ٹاور'],
    ['Galata Tower', 'گلاطہ ٹاور'],
    ['Topkapı Palace', 'محل توپ کاپی'],
    ['Dolmabahçe Palace', 'محل دولماباغچہ'],
    ['Beylerbeyi Palace', 'محل بیلربیی'],
    ['Ortaköy Mosque', 'مسجد اورتاکوئے'],
    ['Blue Mosque', 'نیلی مسجد'],
    ['Hagia Sophia', 'آیا صوفیہ'],
    ['Rumeli Fortress', 'قلعہ روملی'],
    ['Istanbul', 'استنبول'],
    ['Kabataş', 'قباطاش'],
    ['Dolmabahçe', 'دولماباغچہ'],
    ['Çırağan', 'چراغان'],
    ['Ortaköy', 'اورتاکوئے'],
    ['Beylerbeyi', 'بیلربیی'],
    ['Üsküdar', 'اسکدار'],
    ['Rumeli', 'روملی'],
    ['Bebek', 'ببک'],
  ],
  fa: [
    ['Bosphorus Night Dinner Cruise', 'کروز شام شب بسفر'],
    ['Bosphorus Night Cruise', 'کروز شب بسفر'],
    ['Bosphorus Night Tour', 'تور شب بسفر'],
    ['Bosphorus Night', 'شب بسفر'],
    ['Bosphorus Dinner Cruise', 'کروز شام بسفر'],
    ['Bosphorus Sunset Cruise', 'کروز غروب بسفر'],
    ['Bosphorus Cruise', 'کروز بسفر'],
    ['Bosphorus Bridge', 'پل بسفر'],
    ['Bosphorus Strait', 'تنگه بسفر'],
    ['Bosphorus', 'بسفر'],
    ["Maiden's Tower", 'برج دختر'],
    ['Galata Tower', 'برج گالاتا'],
    ['Topkapı Palace', 'کاخ توپکاپی'],
    ['Dolmabahçe Palace', 'کاخ دلمه باغچه'],
    ['Beylerbeyi Palace', 'کاخ بیلربیی'],
    ['Ortaköy Mosque', 'مسجد اورتاکوی'],
    ['Blue Mosque', 'مسجد آبی'],
    ['Hagia Sophia', 'ایاصوفیه'],
    ['Rumeli Fortress', 'قلعه روملی'],
    ['Istanbul', 'استانبول'],
    ['Kabataş', 'قباطاش'],
    ['Dolmabahçe', 'دلمه باغچه'],
    ['Çırağan', 'چراغان'],
    ['Ortaköy', 'اورتاکوی'],
    ['Beylerbeyi', 'بیلربیی'],
    ['Üsküdar', 'اسکودار'],
    ['Rumeli', 'روملی'],
    ['Bebek', 'ببک'],
  ],
  // Latin-script languages: only Bosphorus compounds. Place names already Latin-OK.
  tr: [
    ['Bosphorus Night Dinner Cruise', 'Boğaz Akşam Yemekli Turu'],
    ['Bosphorus Night Cruise', 'Boğaz Gecesi Turu'],
    ['Bosphorus Night Tour', 'Boğaz Akşam Turu'],
    ['Bosphorus Night', 'Boğaz Gecesi'],
    ['Bosphorus Dinner Cruise', 'Boğaz Akşam Yemekli Turu'],
    ['Bosphorus Sunset Cruise', 'Boğaz Gün Batımı Turu'],
    ['Bosphorus Cruise', 'Boğaz Turu'],
    ['Bosphorus Bridge', 'Boğaz Köprüsü'],
    ['Bosphorus Strait', 'İstanbul Boğazı'],
    ['Bosphorus', 'Boğaz'],
  ],
  de: [
    ['Bosphorus Night Dinner Cruise', 'Bosporus-Dinner-Bootsfahrt am Abend'],
    ['Bosphorus Night Cruise', 'Bosporus-Nacht-Bootsfahrt'],
    ['Bosphorus Night Tour', 'Bosporus-Nacht-Tour'],
    ['Bosphorus Night', 'Bosporus-Nacht'],
    ['Bosphorus Dinner Cruise', 'Bosporus-Dinner-Bootsfahrt'],
    ['Bosphorus Sunset Cruise', 'Bosporus-Sonnenuntergangs-Bootsfahrt'],
    ['Bosphorus Cruise', 'Bosporus-Bootsfahrt'],
    ['Bosphorus Bridge', 'Bosporus-Brücke'],
    ['Bosphorus Strait', 'Bosporus'],
    ['Bosphorus', 'Bosporus'],
  ],
  es: [
    ['Bosphorus Night Dinner Cruise', 'Crucero con cena Noche del Bósforo'],
    ['Bosphorus Night Cruise', 'Crucero Noche del Bósforo'],
    ['Bosphorus Night Tour', 'Tour Noche del Bósforo'],
    ['Bosphorus Night', 'Noche del Bósforo'],
    ['Bosphorus Dinner Cruise', 'Crucero con cena por el Bósforo'],
    ['Bosphorus Sunset Cruise', 'Crucero al atardecer por el Bósforo'],
    ['Bosphorus Cruise', 'Crucero por el Bósforo'],
    ['Bosphorus Bridge', 'Puente del Bósforo'],
    ['Bosphorus Strait', 'Estrecho del Bósforo'],
    ['Bosphorus', 'Bósforo'],
  ],
  fr: [
    ['Bosphorus Night Dinner Cruise', 'Croisière-dîner Soirée Bosphore'],
    ['Bosphorus Night Cruise', 'Croisière Soirée Bosphore'],
    ['Bosphorus Night Tour', 'Tour Soirée Bosphore'],
    ['Bosphorus Night', 'Soirée Bosphore'],
    ['Bosphorus Dinner Cruise', 'Croisière-dîner sur le Bosphore'],
    ['Bosphorus Sunset Cruise', 'Croisière au coucher du soleil sur le Bosphore'],
    ['Bosphorus Cruise', 'Croisière sur le Bosphore'],
    ['Bosphorus Bridge', 'Pont du Bosphore'],
    ['Bosphorus Strait', 'Détroit du Bosphore'],
    ['Bosphorus', 'Bosphore'],
  ],
  it: [
    ['Bosphorus Night Dinner Cruise', 'Crociera-cena Notte sul Bosforo'],
    ['Bosphorus Night Cruise', 'Crociera Notte sul Bosforo'],
    ['Bosphorus Night Tour', 'Tour Notte sul Bosforo'],
    ['Bosphorus Night', 'Notte sul Bosforo'],
    ['Bosphorus Dinner Cruise', 'Crociera-cena sul Bosforo'],
    ['Bosphorus Sunset Cruise', 'Crociera al tramonto sul Bosforo'],
    ['Bosphorus Cruise', 'Crociera sul Bosforo'],
    ['Bosphorus Bridge', 'Ponte sul Bosforo'],
    ['Bosphorus Strait', 'Stretto del Bosforo'],
    ['Bosphorus', 'Bosforo'],
  ],
  pl: [
    ['Bosphorus Night Dinner Cruise', 'Rejs z kolacją Noc nad Bosforem'],
    ['Bosphorus Night Cruise', 'Rejs Noc nad Bosforem'],
    ['Bosphorus Night Tour', 'Wycieczka Noc nad Bosforem'],
    ['Bosphorus Night', 'Noc nad Bosforem'],
    ['Bosphorus Dinner Cruise', 'Rejs z kolacją po Bosforze'],
    ['Bosphorus Sunset Cruise', 'Rejs o zachodzie słońca po Bosforze'],
    ['Bosphorus Cruise', 'Rejs po Bosforze'],
    ['Bosphorus Bridge', 'Most nad Bosforem'],
    ['Bosphorus Strait', 'Cieśnina Bosfor'],
    ['Bosphorus', 'Bosfor'],
  ],
  ro: [
    ['Bosphorus Night Dinner Cruise', 'Croazieră cu cină Noaptea Bosforului'],
    ['Bosphorus Night Cruise', 'Croazieră Noaptea Bosforului'],
    ['Bosphorus Night Tour', 'Tur Noaptea Bosforului'],
    ['Bosphorus Night', 'Noaptea Bosforului'],
    ['Bosphorus Dinner Cruise', 'Croazieră cu cină pe Bosfor'],
    ['Bosphorus Sunset Cruise', 'Croazieră la apus pe Bosfor'],
    ['Bosphorus Cruise', 'Croazieră pe Bosfor'],
    ['Bosphorus Bridge', 'Podul Bosfor'],
    ['Bosphorus Strait', 'Strâmtoarea Bosfor'],
    ['Bosphorus', 'Bosfor'],
  ],
  id: [
    ['Bosphorus Night Dinner Cruise', 'Pelayaran Makan Malam Malam Bosphorus'],
    ['Bosphorus Night Cruise', 'Pelayaran Malam Bosphorus'],
    ['Bosphorus Night Tour', 'Tur Malam Bosphorus'],
    ['Bosphorus Night', 'Malam Bosphorus'],
    ['Bosphorus Dinner Cruise', 'Pelayaran Makan Malam Bosphorus'],
    ['Bosphorus Sunset Cruise', 'Pelayaran Matahari Terbenam Bosphorus'],
    ['Bosphorus Cruise', 'Pelayaran Bosphorus'],
    ['Bosphorus Bridge', 'Jembatan Bosphorus'],
    ['Bosphorus Strait', 'Selat Bosphorus'],
  ],
  ms: [
    ['Bosphorus Night Dinner Cruise', 'Pelayaran Makan Malam Malam Bosphorus'],
    ['Bosphorus Night Cruise', 'Pelayaran Malam Bosphorus'],
    ['Bosphorus Night Tour', 'Tur Malam Bosphorus'],
    ['Bosphorus Night', 'Malam Bosphorus'],
    ['Bosphorus Dinner Cruise', 'Pelayaran Makan Malam Bosphorus'],
    ['Bosphorus Sunset Cruise', 'Pelayaran Matahari Terbenam Bosphorus'],
    ['Bosphorus Cruise', 'Pelayaran Bosphorus'],
    ['Bosphorus Bridge', 'Jambatan Bosphorus'],
    ['Bosphorus Strait', 'Selat Bosphorus'],
  ],
};

// Detect which lang a file belongs to (path-based)
function detectLang(filePath) {
  const norm = filePath.replace(/\\/g, '/');
  // content/translations/ko.js → ko
  let m = norm.match(/\/content\/translations\/([a-z]{2})\.js$/);
  if (m) return m[1];
  // content/ui-translations/ko/... or content/ui-translations/ko.json
  m = norm.match(/\/content\/ui-translations\/([a-z]{2})(\/|\.json$)/);
  if (m) return m[1];
  // src/blog-i18n/ko/...
  m = norm.match(/\/src\/(?:blog|city-guide|cruises)-i18n\/([a-z]{2})\//);
  if (m) return m[1];
  // dist/ko/...  (post-build pass)
  m = norm.match(/\/dist\/([a-z]{2})\//);
  if (m) return m[1];
  return null;
}

// Protect URLs and parenthesized keywords + domain
function localize(text, patterns) {
  if (!patterns || patterns.length === 0) return text;
  const protectedSlots = [];
  let t = text;

  // 1. Protect URL attributes (href, src, content, action, url, @id)
  t = t.replace(/(href|src|action)\s*=\s*"[^"]*"/g, (m) => {
    protectedSlots.push(m);
    return `${protectedSlots.length - 1}`;
  });

  // JSON-LD URL fields
  t = t.replace(/"(@id|url|image|logo|sameAs)"\s*:\s*"[^"]*"/g, (m) => {
    protectedSlots.push(m);
    return `${protectedSlots.length - 1}`;
  });
  // URL-bearing meta content (og:url, og:image, canonical)
  t = t.replace(/<meta\s+(?:property|name)="(?:og:url|og:image|twitter:image)"\s+content="[^"]*"/g, (m) => {
    protectedSlots.push(m);
    return `${protectedSlots.length - 1}`;
  });

  // 2. Protect parenthesized EN keywords like "(Bosphorus)", "(Kabataş)" — kept intentionally for SEO
  const PARENS_REGEX = /\([^)]*(?:Bosphorus|Istanbul|Kabataş|Dolmabahçe|Çırağan|Ortaköy|Beylerbeyi|Üsküdar|Rumeli|Bebek|Maiden's Tower|Galata Tower|Topkapı|Hagia Sophia)[^)]*\)/g;
  t = t.replace(PARENS_REGEX, (m) => {
    protectedSlots.push(m);
    return `${protectedSlots.length - 1}`;
  });

  // 3. Protect bosphorusnight.com domain (any case)
  t = t.replace(/bosphorusnight\.com/gi, (m) => {
    protectedSlots.push(m);
    return `${protectedSlots.length - 1}`;
  });

  // 4. Apply patterns longest-first (already ordered in T)
  for (const [from, to] of patterns) {
    if (t.includes(from)) {
      t = t.split(from).join(to);
    }
  }

  // 5. Restore protected slots
  t = t.replace(/(\d+)/g, (_, i) => protectedSlots[parseInt(i, 10)]);

  return t;
}

// Walker
function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (/\.(html|js|json)$/.test(e.name)) out.push(full);
  }
  return out;
}

const TARGETS = [
  'content/translations',
  'content/ui-translations',
  'src/blog-i18n',
  'src/city-guide-i18n',
  'src/cruises-i18n',
  // Post-build pass: dist HTML'leri — EN master content fallback'larını yakala
  'dist',
];

const files = [];
for (const t of TARGETS) {
  walk(path.join(ROOT, t), files);
}

const results = {};
let totalReplacements = 0;

for (const file of files) {
  const lang = detectLang(file);
  if (!lang || !T[lang]) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = localize(before, T[lang]);
  if (after === before) continue;
  fs.writeFileSync(file, after, 'utf8');
  // Count differences (rough — # of pattern matches in original)
  let diffCount = 0;
  for (const [from] of T[lang]) {
    const beforeCount = (before.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    const afterCount = (after.match(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    diffCount += (beforeCount - afterCount);
  }
  totalReplacements += diffCount;
  if (!results[lang]) results[lang] = { files: 0, replacements: 0 };
  results[lang].files++;
  results[lang].replacements += diffCount;
}

console.log('=== Full-site Bosphorus/Istanbul/Place-name Localization ===\n');
const order = ['ja', 'ko', 'zh', 'ar', 'ru', 'uk', 'bg', 'hi', 'ur', 'fa', 'tr', 'de', 'es', 'fr', 'it', 'pl', 'ro', 'id', 'ms'];
for (const lang of order) {
  const r = results[lang] || { files: 0, replacements: 0 };
  console.log(`${lang.padEnd(3)} ${String(r.files).padStart(3)} dosya · ${String(r.replacements).padStart(4)} replace`);
}
console.log(`\n✓ Toplam: ${totalReplacements} replace yapıldı`);
