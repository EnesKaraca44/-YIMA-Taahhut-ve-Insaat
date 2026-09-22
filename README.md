# 🏗️ YİMA Taahhüt ve İnşaat Ltd. Şti. - Kurumsal Web Sitesi

Modern, yüksek performanslı ve kurumsal standartlara uygun olarak geliştirilmiş **YİMA Taahhüt ve İnşaat Limited Şirketi** resmi tanıtım web sitesi.

Proje; karayolları, demiryolları, menfez imalatları, istinat duvarları ve büyük ölçekli altyapı sanat yapıları taahhütlerinde faaliyet gösteren firmanın kurumsal kimliğini, uzmanlık alanlarını ve saha projelerini modern bir kullanıcı deneyimi ile sergilemek üzere inşa edilmiştir.

---

## 🚀 Canlı Önizleme & Depo Bilgileri

- **GitHub Deposu:** [https://github.com/EnesKaraca44/-YIMA-Taahhut-ve-Insaat](https://github.com/EnesKaraca44/-YIMA-Taahhut-ve-Insaat)
- **Teknoloji Altyapısı:** React 18, TypeScript, Vite, Tailwind CSS

---

## ✨ Temel Özellikler

- **📱 Tek Ekran Akışı & Sayfa İçi Sekmeli Mimari (SPA):**
  Kullanıcıyı uzun dikey kaydırmalarla yormayan; Hero, Kurumsal, Hizmetler, Projeler, Neden YİMA ve İletişim sekmeleri arasında pürüzsüz geçiş sağlayan modern mimari.

- **🎨 Sinematik & Prestijli Tasarım:**
  - Ana sayfada (Hero) koyu cam efekti (*Dark Glassmorphism*) ve sinematik şantiye arka planı.
  - İç sekmelerde yüksek okunurluk sunan, altın sarısı (*#C89D4B*) kurumsal vurgularla desteklenmiş aydınlık tasarım.

- **🗂️ Kapsamlı Proje Galerisi & Video Oynatıcı:**
  - Kategori bazlı filtreleme (*Tümü, Karayolları, Menfez & Sanat Yapıları, İstinat Duvarları, Demiryolu*).
  - Çoklu şantiye fotoğrafı inceleme ve yerel video oynatma özellikli detaylı proje modalı (`ProjectModal`).

- **📑 Hizmet & Şartname Detay Modalları:**
  - KGM ve TCDD teknik şartnamelerine uygun mühendislik yaklaşımlarının detaylandırıldığı interaktif hizmet kartları ve modalları (`ServiceModal`).

- **🏢 Kurumsal Kimlik & Değerler:**
  - Şirketin vizyon, misyon, kalite ve İSG politikalarını detaylı aktaran kurumsal modal (`CorporateModal`).

- **💬 Hızlı WhatsApp & İletişim Entegrasyonu:**
  - Doğrudan şirket yetkilisine bağlanan yüzen WhatsApp aksiyon butonu.
  - Google Haritalar entegrasyonu, şirket açık adresi ve tek tıkla e-posta/telefon bağlantıları.

- **⚙️ Merkezi İçerik Yönetimi (`siteContent.ts`):**
  - Kod bloklarına müdahale etmeden tüm metinlerin, projelerin, hizmetlerin ve iletişim bilgilerinin tek bir TypeScript dosyasından güvenle güncellenebilmesi.

---

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

| Kategori | Teknoloji | Açıklama |
| :--- | :--- | :--- |
| **Frontend Kütüphanesi** | [React 18](https://react.dev/) | Bileşen tabanlı kullanıcı arayüzü |
| **Programlama Dili** | [TypeScript](https://www.typescriptlang.org/) | Tip güvenliği ve ölçeklenebilir kod mimarisi |
| **Derleyici & Paketleyici** | [Vite 6](https://vitejs.dev/) | Ultra hızlı HMR ve optimize edilmiş derleme |
| **Stil & Tasarım** | [Tailwind CSS 3](https://tailwindcss.com/) | Yardımcı sınıf tabanlı modern CSS çatısı |
| **İkon Seti** | [Lucide React](https://lucide.dev/) | Hafif, tutarlı ve modern vektörel ikonlar |
| **Stil Yardımcıları** | `clsx`, `tailwind-merge` | Dinamik sınıf birleştirme ve çakışma yönetimi |

---

## 📂 Proje Mimarisi ve Dizin Yapısı

```plaintext
Y-MA-Taahh-t-ve-n-aat/
├── public/                     # Statik varlıklar ve medya dosyaları
│   ├── projects/               # Şantiye fotoğraf ve video galerileri
│   │   └── bolge-8-menfez/     # 8. Bölge Menfez Projesi görselleri & video
│   ├── hero-bg.jpg             # Sinematik ana sayfa arka planı
│   ├── logo-transparent.png    # Şeffaf kurumsal logo
│   └── logo-white.png          # Beyaz zemin kurumsal logo
├── src/
│   ├── components/             # Yeniden kullanılabilir React bileşenleri
│   │   ├── Navbar.tsx          # Üst navigasyon barı ve sekme geçişleri
│   │   ├── Hero.tsx            # Ana karşılama alanı ve CTA butonları
│   │   ├── AboutSection.tsx    # Kurumsal özet ve şirket tanıtımı
│   │   ├── ServicesSection.tsx # Hizmetler listesi ve kartları
│   │   ├── ServiceModal.tsx    # Hizmet detay modal penceresi
│   │   ├── ProjectsSection.tsx # Kategori filtreli proje listesi
│   │   ├── ProjectModal.tsx    # Proje galeri ve video inceleme modalı
│   │   ├── WhyUsSection.tsx    # 4 Temel Sütun / Neden YİMA alanı
│   │   ├── ContactSection.tsx  # İletişim formu, adres ve harita
│   │   ├── CorporateModal.tsx  # Şirket misyon, vizyon & değerler modalı
│   │   └── Footer.tsx          # Kompakt alt bilgi alanı
│   ├── data/
│   │   └── siteContent.ts      # Tüm metinlerin yönetildiği merkezi veri dosyası
│   ├── types/
│   │   └── index.ts            # TypeScript tip ve arayüz (interface) tanımları
│   ├── App.tsx                 # Ana uygulama ve sekme durumu yönetimi
│   ├── index.css               # Tailwind direktifleri ve global stiller
│   └── main.tsx                # React kök render noktası
├── index.html                  # HTML5 giriş şablonu ve meta etiketleri
├── package.json                # Bağımlılıklar ve npm scriptleri
├── tailwind.config.js          # Tailwind tema yapılandırması
├── tsconfig.json               # TypeScript derleyici kuralları
└── vite.config.ts              # Vite yapılandırması
```

---

## 💻 Kurulum ve Yerel Geliştirme

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Depoyu Klonlayın
```bash
git clone https://github.com/EnesKaraca44/-YIMA-Taahhut-ve-Insaat.git
cd -YIMA-Taahhut-ve-Insaat
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlatın
```bash
npm run dev
```
Sunucu başladığında tarayıcınızda `http://localhost:5173` adresine giderek siteyi görüntüleyebilirsiniz.

### 4. Üretim (Production) Derlemesi Alın
```bash
npm run build
```
Derlenen dosyalar `dist/` klasörüne aktarılır.

### 5. Derlemeyi Önizleyin
```bash
npm run preview
```

---

## 📝 İçerik ve Proje Güncelleme Kılavuzu

Sitedeki tüm şirket bilgileri, hizmet açıklamaları ve projeler **`src/data/siteContent.ts`** dosyası üzerinden yönetilir:

- **Şirket Bilgileri & İletişim:** `companyData` objesi altından telefon, e-posta, açık adres ve çalışma saatleri düzenlenebilir.
- **Hizmetler:** `servicesData` dizisine yeni hizmetler eklenebilir veya mevcutların açıklamaları değiştirilebilir.
- **Projeler:** `projectsData` dizisine yeni bir proje objesi ekleyerek fotoğraflarını `/public/projects/<proje-adi>/` altına yükleyip doğrudan sergileyebilirsiniz.

---

## 🌐 Dağıtım (Deployment)

Proje statik bir React/Vite uygulaması olduğu için modern bulut platformlarında sıfır konfigürasyon ile yayına alınabilir:

- **Vercel:** Depoyu bağlayın, Framework Preset olarak `Vite` seçin ve tek tıkla dağıtın.
- **Netlify:** `npm run build` komutu ve `dist` yayınlama klasörü ile doğrudan yayınlayabilirsiniz.
- **GitHub Pages:** `vite.config.ts` içerisine `base: '/-YIMA-Taahhut-ve-Insaat/'` ekleyerek GitHub Actions ile barındırabilirsiniz.

---

## 📄 Lisans

Bu proje **YİMA Taahhüt ve İnşaat Limited Şirketi** mülkiyetindedir. Tüm hakları saklıdır.
