# YİMA web sitesi: canlıya alma ve güncelleme rehberi

Bu proje React ve Vite ile hazırlanmış statik bir web sitesidir. Siteyi internette göstermek için bir **domain** (ör. `yima.com.tr`) ve site dosyalarını barındıran bir **hosting** gerekir. Domain tek başına site dosyalarını barındırmaz.

## 1. Önce hostingin nerede olduğunu öğren

Domaini satın aldığın firmanın müşteri panelinde “Hosting”, “Web Hosting”, “Linux Hosting” veya “Dosya Yöneticisi” bölümlerini kontrol et.

- Hosting paketin varsa, bu rehberdeki dosya yükleme adımlarını o firmanın panelinde yap.
- Yalnızca domain aldıysan, ayrıca bir hosting paketi gerekir. Hosting firması sana dosyaları yükleyeceğin panel/FTP bilgilerini ve domainin DNS kayıtlarını verir.
- Domain başka firmada, hosting başka firmada olabilir. Bu normaldir; domainin DNS ayarları hosting firmasının verdiği hedefe yönlendirilir.

Hosting firmasına şu soruyu sorabilirsin: “React/Vite ile hazırlanmış statik sitemi yayınlayacağım. Dosyaları hangi klasöre yüklemeliyim, domain için hangi DNS kayıtlarını girmeliyim ve ücretsiz SSL nasıl açılır?”

## 2. Bilgisayarında siteyi hazırlama

Proje klasörünü aç. Windows'ta klasörün adres çubuğuna `powershell` yazıp Enter'a basarak o klasörde terminal açabilirsin.

İlk kurulumda (veya `node_modules` klasörü yoksa) şu komutu çalıştır:

```powershell
npm install
```

Sonra yayın dosyalarını oluştur:

```powershell
npm run build
```

İşlem başarılı olunca proje klasöründe `dist` adlı klasör oluşur. Hosting'e kaynak kodu (`src`, `node_modules` gibi klasörleri) değil, `dist` klasörünün **içindeki yayın dosyalarını** yükleyeceksin. Derleme hata verirse yeni dosyaları yükleme; önce hatayı çöz.

## 3. Siteyi ilk kez yayınlama

1. Hosting firmasının verdiği panele gir. “Dosya Yöneticisi”ni aç. FTP kullanacaksan hosting firmasının verdiği sunucu, kullanıcı adı ve şifreyle FileZilla gibi bir FTP programına bağlan.
2. Hosting firmasının web kök klasörünü bul. cPanel kullanan firmalarda bu klasör çoğunlukla `public_html` olur; başka firmalarda adı değişebilir.
3. Klasörde hazır bir site varsa, üzerine yazmadan önce bilgisayarına indirerek yedek al.
4. Bilgisayarındaki proje klasöründe `dist` klasörünü aç. **İçindeki tüm dosya ve klasörleri** (özellikle `index.html`, `assets` ve varsa `projects`) hostingin web kök klasörüne yükle. `dist` klasörünün kendisini iç içe yükleme; `index.html` web kök klasörünün doğrudan içinde olmalı.
5. Yükleme tamamlanınca domainini gizli sekmede aç. Ana sayfa, görseller ve mobil görünümü kontrol et.

## 4. Domaini hostinge bağlama

Domain zaten hosting hesabına bağlıysa bu kısmı atla. Değilse:

1. Hosting panelinde domain bağlama/website ekleme işlemini yap.
2. Hosting firmasının verdiği DNS hedeflerini (A kaydı, CNAME veya nameserver bilgisi) domain sağlayıcının DNS yönetim ekranına gir.
3. Hangi kayıtların gerektiğini hosting firmandan aynen al. Mevcut DNS kayıtlarını bilmeden silme veya nameserver değiştirme; e-posta gibi başka hizmetler de bu kayıtlara bağlı olabilir.
4. DNS değişikliği hemen görünmeyebilir; sağlayıcıların yayılma süresi olabilir.
5. Hosting panelinden ücretsiz SSL/Let's Encrypt sertifikasını etkinleştir. Site `https://` ile açılmalı.

## 5. Yeni proje/fotoğraf geldiğinde güncelleme

Her içerik güncellemesinde domain veya DNS ayarını değiştirmezsin. Aynı hostingdeki dosyaları yenilersin:

1. Fotoğrafları proje için ayrı bir klasöre koy. Örnek: `public/projects/yeni-proje/`.
2. Proje başlığı, açıklaması ve fotoğraf yolları `src/data/siteContent.ts` içindeki `projectsData` bölümünde tutulur. Fotoğrafın yolu, `public` kısmı yazılmadan `/projects/yeni-proje/foto-1.jpg` biçiminde girilir.
3. Fotoğrafların dosya adlarını mümkünse benzersiz yap (`kopru-2026-01.jpg` gibi). Aynı dosya adını yeni içerikle değiştirmek tarayıcı önbelleğinde eski fotoğrafın görünmesine yol açabilir.
4. `npm run build` çalıştır. Başarılı derlemeden sonra yeni `dist` oluşur.
5. `dist` içeriğini hostingin web kök klasörüne yeniden yükle ve mevcut dosyaların üzerine yaz. Yeni dosyalar da yüklenmeli; eski projelerin dosyalarını yanlışlıkla silmemek için klasörleri dikkatle karşılaştır.
6. Siteyi telefonda ve bilgisayarda gizli sekmede açıp güncellemeyi kontrol et. Eski görünüyorsa tarayıcıda sayfayı yenile/önbelleği temizle.

Bu işlem hosting paneline/FTP'ye dosya yükleyerek elle yapılır. Otomatik yayınlama ancak hosting firmasının Git deposuna bağlanma veya ayrı bir dağıtım süreci sunması halinde kurulur.

## 6. Yayından önce bilinmesi gereken form durumu

İletişim formunda şu an ekranda “Mesajınız gönderildi” onayı gösteriliyor; form bilgileri şirkete e-posta veya başka bir kanaldan iletilmiyor. Gerçek mesaj alınması istendiğinde forma bir e-posta/form servisi veya backend bağlanması gerekir.

## Kısa kontrol listesi

- Domain ve hosting aktif.
- Domain hostingin verdiği DNS hedefine bağlı.
- SSL etkin ve site `https://` ile açılıyor.
- `npm run build` hatasız tamamlandı.
- `dist` **içeriği** hostingin web kök klasörüne yüklendi.
- Ana sayfa, proje fotoğrafları ve mobil görünüm kontrol edildi.
- İletişim formunun şu an gerçek mesaj iletmediği biliniyor.
