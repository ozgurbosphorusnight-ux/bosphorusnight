# Yeni PC'ye Transfer Rehberi

> Eski PC: Windows, satılacak. Yeni PC: Windows.
> Aktarım yöntemi: SMB (aynı ağda, network share)
> Tarih: 25 Nisan 2026 başlangıç

Bu dosya tek başına yeterli. Yeni PC'de Claude Code yokken bile, GitHub'dan clone yapıp bu dosyayı okuyarak devam edebilirsin.

---

## Büyük Resim — 4 Faz

1. **HAZIRLIK (eski PC)** — git push, transfer klasörü, network share
2. **YENİ PC KURULUM** — Node, Git, VS Code, Claude Code install
3. **TRANSFER** — kod clone, secret kopya, Claude memory kopya, npm install
4. **DOĞRULAMA + FORMAT** — her şey çalışıyor mu test, eski PC güvenli format

Her faz bitince diğerine geç. Atlamak yok.

---

## FAZ 1 — HAZIRLIK (Eski PC'de)

### 1.1 Açık işleri kapat

- [ ] **Site repo:** `docs/roundtable.md` commit edilecek (yuvarlak masa belgesi)
- [ ] **Site repo:** `docs/transfer-to-new-pc.md` commit edilecek (bu dosya)
- [ ] **AI repo:** `inspect_messages_detail.mjs` ve `inspect_reservation.mjs` silinecek (geçici debug script)
- [ ] 3 repo'da da: `git push` ile her şey GitHub'da
- [ ] Doğrula: `git -C "<repo>" status -sb` → her birinde `## main...origin/main` (ahead/behind yok)

### 1.2 Transfer klasörünü hazırla

Eski PC'de `C:\Transfer-to-NewPC\` klasörü oluştur. İçine şunları kopyala:

```
C:\Transfer-to-NewPC\
├── secrets\
│   ├── ai-backend.env             ← C:\Projects\bosphorus-night-ai\.env
│   └── panel.env.local            ← C:\Projects\bosphorus-night-panel\.env.local
├── ssh\
│   ├── id_ed25519                 ← C:\Users\DELL\.ssh\id_ed25519
│   ├── id_ed25519.pub             ← C:\Users\DELL\.ssh\id_ed25519.pub
│   └── known_hosts                ← C:\Users\DELL\.ssh\known_hosts
├── claude\
│   ├── settings.json              ← C:\Users\DELL\.claude\settings.json
│   ├── projects\                  ← C:\Users\DELL\.claude\projects\ (TAMAMI)
│   └── plans\                     ← C:\Users\DELL\.claude\plans\ (opsiyonel ama tavsiye)
├── vscode\
│   ├── settings.json              ← Ctrl+Shift+P → "Preferences: Open User Settings (JSON)"
│   ├── keybindings.json           ← Ctrl+Shift+P → "Preferences: Open Keyboard Shortcuts (JSON)"
│   └── extensions.txt             ← `code --list-extensions > extensions.txt`
└── notlar.txt                     ← unutmaman gereken her şey (hesap listesi vs.)
```

**ATLANMAMASI GEREKEN:** `claude\projects\c--Users-DELL-Desktop-bosphorusnight\memory\` klasörü 71 dosyalı proje belleğinin tamamı. Bu olmazsa Claude Code yeni PC'de hiçbir şey hatırlamaz.

**ATLANMASI GEREKEN (büyük + gereksiz):**
- `C:\Users\DELL\.claude\cache\` (yeniden oluşur)
- `C:\Users\DELL\.claude\sessions\` (eski konuşmalar — istemiyorsan bırak)
- `C:\Users\DELL\.claude\shell-snapshots\` (gereksiz)
- `C:\Users\DELL\.claude\backups\` (kendi yedeği, gereksiz)
- `node_modules\` (3 repo'da da — yeniden npm install ile gelir)

### 1.3 notlar.txt içine yaz

Bu dosyada şunlar olsun:
- Hetzner SSH komut: `ssh root@178.104.154.29`
- Vercel hesap email
- Supabase proje URL: `https://kknbiemjtcfpuznyptai.supabase.co`
- Anthropic console hesabı email
- GitHub hesabı: `ozgurbosphorusnight` ve `ozgurbosphorusnight-ux`
- 2FA kullanıyorsan: hangi hesaplarda var, telefon transfer ettin mi?

### 1.4 Network share aç (eski PC)

1. `C:\Transfer-to-NewPC\` klasörüne **sağ tık → Properties → Sharing → Advanced Sharing**
2. ☑ "Share this folder" işaretle
3. **Permissions:** sadece kendi kullanıcına Read izni — başkası da ağda olabilir
4. Klasörün UNC path'ini not al: `\\<eski-pc-adi>\Transfer-to-NewPC` (eski-pc-adi'ni öğren: `hostname` komutu)
5. **Windows Defender Firewall:** "File and Printer Sharing" private network için açık olmalı

### 1.5 Faz 1 doğrulama

- [ ] 3 repo `git status` temiz
- [ ] `C:\Transfer-to-NewPC\` doluyu görüyorsun, dosya boyutları sıfır değil
- [ ] `claude\projects\c--Users-DELL-Desktop-bosphorusnight\memory\` içinde **71 dosya** var
- [ ] notlar.txt'i tekrar oku — eksik bir şey var mı düşün
- [ ] Network share çalışıyor: yeni PC'den `\\<eski-pc-adi>\Transfer-to-NewPC` açılabilir

---

## FAZ 2 — YENİ PC KURULUM

### 2.1 Yeni PC'de install (sıralı)

İndir + kur, hepsi default ayarlarla:

1. **Node.js 20 LTS:** https://nodejs.org/
2. **Git:** https://git-scm.com/download/win (default ayarlar, "Use Git from the Windows Command Prompt" seç)
3. **GitHub CLI:** https://cli.github.com/ (download installer)
4. **Visual Studio Code:** https://code.visualstudio.com/
5. **Claude Code:** PowerShell aç, çalıştır:
   ```powershell
   npm install -g @anthropic-ai/claude-code
   ```

Doğrula (PowerShell):
```powershell
node --version    # v20.x.x olmalı
git --version
gh --version
code --version
claude --version
```

Hepsi çıkıyorsa devam.

### 2.2 GitHub auth

```powershell
gh auth login
```

- Account: GitHub.com
- Protocol: HTTPS
- Auth: Login with a web browser → tarayıcıda onayla
- 2FA varsa SMS / authenticator kodunu gir

Doğrula: `gh repo list ozgurbosphorusnight` → 3 repo görmeli

### 2.3 Klasör yapısını oluştur

PowerShell:
```powershell
New-Item -ItemType Directory "C:\Projects" -Force
New-Item -ItemType Directory "C:\Users\DELL\Desktop\bosphorusnight" -Force
```

(Yeni PC'de kullanıcı adı farklıysa path da farklıdır — ona göre düzelt; ama Claude Code memory bu path'i bekliyor, **kullanıcı adın "DELL" değilse 3.5'te düzeltme adımı var, sakın atlama**.)

---

## FAZ 3 — TRANSFER

### 3.1 Repoları clone et

PowerShell:
```powershell
# Site repo Desktop'a
cd C:\Users\DELL\Desktop
gh repo clone ozgurbosphorusnight-ux/bosphorusnight

# AI ve Panel repo Projects'e
cd C:\Projects
gh repo clone ozgurbosphorusnight/bosphorus-night-ai
gh repo clone ozgurbosphorusnight/bosphorus-night-panel
```

Doğrula:
```powershell
ls C:\Users\DELL\Desktop\bosphorusnight    # site
ls C:\Projects\bosphorus-night-ai          # AI
ls C:\Projects\bosphorus-night-panel       # panel
```

### 3.2 Eski PC'den transfer klasörünü kopyala (SMB)

PowerShell — eski PC'nin hostname'ini biliyorsun (Faz 1.4):
```powershell
$source = "\\<eski-pc-adi>\Transfer-to-NewPC"
$dest = "C:\Transfer-from-OldPC"
robocopy $source $dest /E /COPY:DAT /R:3
```

`robocopy` ağ üzerinden hızlı kopyalar. /E = alt klasörler dahil, /R:3 = 3 deneme.

Bittikten sonra:
```powershell
ls C:\Transfer-from-OldPC
```
Klasörler: secrets, ssh, claude, vscode, notlar.txt — hepsi olmalı.

### 3.3 Secret'ları yerleştir

```powershell
# AI .env
Copy-Item "C:\Transfer-from-OldPC\secrets\ai-backend.env" "C:\Projects\bosphorus-night-ai\.env"

# Panel .env.local
Copy-Item "C:\Transfer-from-OldPC\secrets\panel.env.local" "C:\Projects\bosphorus-night-panel\.env.local"
```

Site repo'da .env yok (Vercel env vars kullanıyor), atlanır.

### 3.4 SSH key'leri yerleştir

```powershell
New-Item -ItemType Directory "C:\Users\<yeni-kullanıcı>\.ssh" -Force
Copy-Item "C:\Transfer-from-OldPC\ssh\*" "C:\Users\<yeni-kullanıcı>\.ssh\"
```

Yeni kullanıcı adın "DELL" değilse `<yeni-kullanıcı>` yerine onu yaz.

Test SSH bağlantısı:
```powershell
ssh root@178.104.154.29
```
Eğer "permission denied" derse SSH key permission'ı problemli olabilir — bu durumda PowerShell admin'le:
```powershell
icacls "C:\Users\<yeni-kullanıcı>\.ssh\id_ed25519" /inheritance:r /grant:r "$($env:USERNAME):(R)"
```

### 3.5 Claude Code memory'i yerleştir

**KRİTİK ADIM** — yanlış path'e koyarsan Claude bulamaz.

```powershell
# Önce hedef yapısı
New-Item -ItemType Directory "C:\Users\<yeni-kullanıcı>\.claude" -Force

# Settings + plans + projects topluca
Copy-Item "C:\Transfer-from-OldPC\claude\*" "C:\Users\<yeni-kullanıcı>\.claude\" -Recurse -Force
```

**Eğer yeni PC kullanıcı adı "DELL" DEĞİLse:**

Memory klasörü adı `c--Users-DELL-Desktop-bosphorusnight` — bu eski PC path'inden türetildi. Yeni PC'de path farklıysa Claude Code o klasörü tanımayabilir. Eğer kullanıcı adın farklıysa, klasör adını değiştir:

```powershell
# Örnek: yeni kullanıcın "Ozgur" ise
$old = "C:\Users\Ozgur\.claude\projects\c--Users-DELL-Desktop-bosphorusnight"
$new = "C:\Users\Ozgur\.claude\projects\c--Users-Ozgur-Desktop-bosphorusnight"
Rename-Item $old $new
```

(Format: `c--Users-<kullanıcı>-Desktop-bosphorusnight` — Claude Code path'leri böyle hash'liyor.)

Doğrula:
```powershell
ls "C:\Users\<yeni-kullanıcı>\.claude\projects\c--Users-<yeni-kullanıcı>-Desktop-bosphorusnight\memory\" | Measure-Object
```
**71 dosya** olmalı.

### 3.6 npm install (3 repo)

```powershell
cd C:\Users\<yeni-kullanıcı>\Desktop\bosphorusnight
npm install

cd C:\Projects\bosphorus-night-ai
npm install

cd C:\Projects\bosphorus-night-panel
npm install
```

Her birinde 1-3 dakika sürer. "vulnerabilities" uyarıları normal, ignore.

### 3.7 VS Code ayarları

1. VS Code aç
2. Sol alttaki kullanıcı simgesi → **Settings Sync** → GitHub ile sign in → enable
3. Veya manuel:
   ```powershell
   # Settings
   Copy-Item "C:\Transfer-from-OldPC\vscode\settings.json" "$env:APPDATA\Code\User\settings.json"
   Copy-Item "C:\Transfer-from-OldPC\vscode\keybindings.json" "$env:APPDATA\Code\User\keybindings.json"
   
   # Extensions
   Get-Content "C:\Transfer-from-OldPC\vscode\extensions.txt" | ForEach-Object { code --install-extension $_ }
   ```

### 3.8 Claude Code'u tanıştır

PowerShell'de:
```powershell
cd C:\Users\<yeni-kullanıcı>\Desktop\bosphorusnight
claude
```

İlk açılışta Anthropic login isteyecek (tarayıcı açar). Login ol.

İçeride **basit test:**
```
"memory dosyalarını göster, hangileri var?"
```

Claude memory dosyalarını listeleyebiliyorsa transfer **başarılı**. CLAUDE.md ve memory'leri okuyup proje hakkında yeniden kontekste girer.

---

## FAZ 4 — DOĞRULAMA

### 4.1 Her dev server açılıyor mu

```powershell
# Site
cd C:\Users\<yeni-kullanıcı>\Desktop\bosphorusnight
npm run dev    # localhost:3000 ya da 8080 (package.json'da bak)

# AI (Ctrl+C ile kapat, ayrı terminalde)
cd C:\Projects\bosphorus-night-ai
npm run dev    # genelde 3000

# Panel (ayrı terminalde)
cd C:\Projects\bosphorus-night-panel
npm run dev    # genelde 3001
```

Hata varsa 3.3'teki .env yerleştirme yanlış olabilir, kontrol et.

### 4.2 Hetzner sunucusu erişimi

```powershell
ssh root@178.104.154.29
# içeride
pm2 status
# çık
exit
```

`pm2 status` AI servisini gösteriyorsa SSH ve sunucu sağlam.

### 4.3 Tarayıcı oturumları

Yeni PC'de tarayıcı aç, şu hesaplara login ol:

- [ ] **GitHub** (zaten gh ile login oldun, web için ek)
- [ ] **Vercel** (`vercel.com/login`) — site deploy yönetimi
- [ ] **Supabase** (`supabase.com/dashboard`) — DB
- [ ] **Anthropic Console** (`console.anthropic.com`) — API kullanımı + billing
- [ ] **Hetzner Cloud** (`console.hetzner.com`)
- [ ] **Google Search Console** + **Yandex Webmaster** + **Bing Webmaster**
- [ ] **Telegram Web** ya da Desktop client (admin bot komutlar için)
- [ ] **Google Ads, Meta Business, GA4** (varsa)

2FA kullanıyorsan **telefon transfer** ya da **authenticator backup** olduğundan emin ol — yoksa hesaba giremezsin.

### 4.4 Çalıştığını canlı doğrula

- [ ] Site dev server'da bir sayfa açtın, görüntü doğru
- [ ] AI dev server `/health` endpoint'i 200 dönüyor: `curl http://localhost:3000/health`
- [ ] Panel login sayfası açılıyor
- [ ] Claude Code memory'den eski bir gerçeği hatırlıyor (örnek soru: "Hetzner sunucu IP'si neydi?" — `178.104.154.29` demeli)
- [ ] SSH ile Hetzner'a bağlanıp `pm2 status` çalıştı

**Hepsi ✅ ise yeni PC tamamen çalışır halde. Eski PC artık gereksiz.**

---

## FAZ 5 — ESKİ PC FORMAT (Satış öncesi)

**Bu adım geri dönülemez. Faz 4'ün her tick'i ✅ olmadan buraya geçme.**

### 5.1 Yeni PC'den son kez doğrula

- [ ] Yeni PC'de 1 hafta paralel çalış (önerilen — eksik bir şey çıkarsa eski PC hâlâ ulaşılabilir)
- [ ] 1 hafta hiçbir şey eksik bulamadıysan → Faz 5 devam

### 5.2 Eski PC'de Anthropic / GitHub / hesap güvenliği

Eski PC'nin sahip olduğu erişimleri **revoke** et — yeni alıcı diske ulaşırsa kullanamasın:

1. **Anthropic API key:**
   - Console → API Keys → eski key'i **rotate** (yeni üret) ya da revoke et
   - Yeni PC'nin .env'inde yeni key'i güncelle
   - Hetzner'daki AI'ın .env'inde de güncelle (`ssh root@178.104.154.29` → `nano /opt/bosphorus-night-ai/.env`)
   - PM2 restart: `pm2 restart all`

2. **GitHub Personal Access Token:**
   - GitHub → Settings → Developer Settings → Tokens → eski PC'den oluşturulanları **revoke** et
   - Yeni PC'de `gh auth login` zaten yeni token aldı

3. **Hetzner SSH key:**
   - **Bu transferde aynı key taşındı** (Faz 3.4) — Hetzner'daki `authorized_keys` dosyasına dokunma, key aynı kalıyor.
   - Güvenlik tamamen **eski diskin temizlenmesine** bağlı. Faz 5.3'teki "Clean data" + BitLocker key silme şart, atlama.
   - Ek paranoya istersen ileride yeni key üretip eskisini revoke edebilirsin (yeni key oluştur → Hetzner'a `authorized_keys`'e ekle → eski satırı sil → yeni PC'nin .ssh klasörünü güncelle). Şimdilik gerek yok.

4. **Vercel / Supabase / diğer hesaplar:**
   - Hepsinde "Active sessions" bölümü var → eski PC oturumunu sonlandır
   - 2FA kullanmıyorsan şifreni değiştir (eski PC'nin tarayıcısında cache'lenmiş olabilir)

### 5.3 Eski PC'yi temizle (Windows Reset)

**Method A — Tam reset (önerilen, satış için):**
1. Settings → System → Recovery → "Reset this PC"
2. **"Remove everything"** seç (Keep my files DEĞİL)
3. **"Cloud download"** ya da **"Local reinstall"** (cloud daha temiz)
4. **"Change settings"** → **"Clean data"** ON (diski yazılı sıfırla — daha güvenli ama uzun)
5. Reset başlat — birkaç saat sürer, PC açık kalmalı, fiş takılı

**Method B — BitLocker varsa direkt encryption key sil:**
1. Disk şifreliyse, BitLocker recovery key'i Microsoft hesabından sil
2. Sonra Method A
3. Bu daha hızlı ve daha güvenli (key olmayınca disk read edilemez)

### 5.4 Format sonrası

- [ ] PC açıldığında temiz Windows kurulumu görüyorsun
- [ ] Hiçbir hesap login değil
- [ ] Tarayıcı geçmişi sıfır
- [ ] Wifi şifresi unutuldu (yeni alıcı için iyi)

**Şimdi PC satışa hazır.**

---

## ÖZET CHECKLIST

```
HAZIRLIK (eski PC)
[ ] git push x3
[ ] Transfer klasörü dolu (secrets, ssh, claude, vscode)
[ ] Network share aktif
[ ] notlar.txt dolduruldu

YENİ PC KURULUM
[ ] Node, Git, gh, VS Code, Claude Code install
[ ] gh auth login

TRANSFER
[ ] 3 repo clone
[ ] robocopy SMB transfer
[ ] .env, .env.local yerleştir
[ ] SSH key yerleştir + permission
[ ] Claude memory yerleştir + path düzelt (eğer kullanıcı adı farklıysa)
[ ] npm install x3
[ ] VS Code settings + extensions
[ ] Claude Code login + test

DOĞRULAMA
[ ] 3 dev server açıldı
[ ] Hetzner SSH çalıştı
[ ] Tarayıcı login (Vercel, Supabase, Anthropic, vs.)
[ ] Claude Code memory'i hatırlıyor

FORMAT (1 hafta sonra)
[ ] Anthropic key rotate + Hetzner .env güncelle
[ ] GitHub token revoke
[ ] SSH key cleanup (eski revoke)
[ ] Hesaplardan eski session logout
[ ] Windows Reset (Remove everything + Clean data)
```

---

## SORUN ÇIKARSA

**"Yeni PC'de Claude memory'i tanımıyor":**
→ Faz 3.5'teki path düzeltmesini atladın. Memory klasör adı yeni PC kullanıcı adına göre `c--Users-<isim>-Desktop-bosphorusnight` olmalı.

**"npm install hata veriyor":**
→ Node sürümü kontrol et: `node --version`. v20+ olmalı. Eski sürümse Node yeniden kur.

**"SSH Hetzner permission denied":**
→ Faz 3.4'teki icacls komutu gerekebilir. Windows SSH key permission'ları sıkı.

**"Site dev server port hatası":**
→ Başka bir process portu tutuyor. `netstat -ano | findstr :3000` ile bul, kapat.

**"Eski PC'yi açtığımda artık çalışmıyor / format sırası":**
→ Faz 4'ü ATLADIN. Geri dönüş yok. Yeni PC'de eksiği tespit et, Hetzner sunucudan veri çek (DB orada), Vercel'den site çek (deploy orada), kayıp memory için CLAUDE.md ana referans.

---

*Bu dosya transfer bitince silinebilir. Veya gelecekte tekrar PC değiştirirsen referans olarak kalsın.*
