import { CompanyInfo, ServiceItem, ProjectItem, PillarItem } from '../types';

/**
 * MERKEZİ VERİ VE İÇERİK YÖNETİMİ
 * 
 * Önemli Kural: Doğrulanmamış hiçbir sahte istatistik, sahte telefon/adres veya sahte referans içermez.
 * Tüm alanlar kurumsal standartlarda hazırlanmış olup, şirket yetkilileri tarafından kolayca güncellenebilir.
 */

export const companyData: CompanyInfo = {
  legalName: "YİMA TAAHHÜT VE İNŞAAT LİMİTED ŞİRKETİ",
  shortName: "YİMA TAAHHÜT",
  sloganProposal: "Güvenle İnşa Ediyor, Geleceğe Değer Katıyoruz.",
  descriptionShort: "YİMA Taahhüt ve İnşaat Limited Şirketi; karayolları, demiryolları, menfez imalatları, istinat duvarları, sanat yapıları ve zemin-altyapı taahhütlerinde güçlü saha organizasyonu ve mühendislik disipliniyle faaliyet gösterir.",
  descriptionLong: "YİMA Taahhüt ve İnşaat Limited Şirketi; karayolu ve demiryolu ulaştırma hatları, betonarme ve kutu menfezler, taş ve betonarme istinat duvarları, hidrolik sanat yapıları ve büyük ölçekli altyapı işlerinde kamu ve özel sektör şartnamelerine tam uyumla taahhüt hizmetleri sunmaktadır.",
  missionStatement: "Ulaştırma ve altyapı taahhütlerinde mühendislik ve şartname standartlarına tavizsiz sadakatle; sağlam, uzun ömürlü ve güvenilir sanat yapıları ile yol altyapıları inşa etmek.",
  visionStatement: "Karayolları, demiryolları ve altyapı sanat yapıları taahhüdünde, güvenilirliği, dinamik saha gücü ve teknik uygulama yetkinliğiyle sektörde saygın bir marka konumunu sürdürmek.",
  contact: {
    addressPlaceholder: "İnönü Mahallesi İnönü Caddesi MalatyaPark Ofis Kat:12 No:69 Yeşilyurt/MALATYA",
    addressNote: "",
    phonePlaceholder: "+90 (530) 168 44 12",
    phoneNote: "Resmi kurumsal telefon numarası sağlandığında güncellenecektir.",
    emailPlaceholder: "info@yimainsaat.com",
    emailNote: "Kurumsal e-posta adresi aktif olduğunda doğrudan yönlendirilecektir.",
    workingHoursPlaceholder: "Pazartesi - Cumartesi: 08:00 - 18:00"
  },
  socialLinks: [] // Gerçek kurumsal hesaplar sağlandığında eklenecektir
};

export const pillarsData: PillarItem[] = [
  {
    number: "01",
    title: "Şartname ve Statik Sadakat",
    description: "KGM, TCDD ve kamu/özel sektör teknik şartnamelerine harfiyen uyum ve şeffaf hakediş disiplini."
  },
  {
    number: "02",
    title: "Güçlü Saha & Makine Gücü",
    description: "Zorlu coğrafi ve zemin koşullarında dinamik ekipman koordinasyonu ve kesintisiz operasyon."
  },
  {
    number: "03",
    title: "Uzman Sanat Yapıları İmalatı",
    description: "Menfez, taş/betonarme istinat duvarları ve drenaj hatlarında yüksek mukavemet ve kaliteli beton işçiliği."
  },
  {
    number: "04",
    title: "Zamanında ve Eksiksiz Teslim",
    description: "Hassas iş programı, dinamik şantiye yönetimi ve hedeflenen sürede kesin kabul teslimatı."
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "karayolu-taahhut",
    title: "Karayolu & Yol Altyapısı",
    shortDescription: "Karayolları standartlarında yol gövdesi, tesviye, reglaj ve yol güzergahı altyapı taahhütleri.",
    detailedDescription: "Devlet yolları, il yolları ve bağlantı güzergahlarında zemin iyileştirme, alt temel, plentmiks serimi ve yol platformu hazırlığı titiz mühendislik hesaplarıyla yürütülür.",
    iconName: "Briefcase",
    highlights: [
      "Karayolu Platform & Güzergah İmalatı",
      "Alt Temel & Zemin İyileştirme",
      "Kavşak & Bağlantı Yolları Düzenleme",
      "Yol Güvenlik & Drenaj Altyapısı"
    ]
  },
  {
    id: "menfez-sanat-yapilari",
    title: "Menfez & Hidrolik Sanat Yapıları",
    shortDescription: "Prefabrik ve yerinde dökme kutu menfezler, boru menfezler ve su geçiş yapıları imalatı.",
    detailedDescription: "Karayolu ve demiryolu güzergahlarında suyun doğal akışını sağlayan hidrolik kesit hesaplarına tam uyumlu, yüksek mukavemetli kutu ve boru menfez imalatları gerçekleştirilir.",
    iconName: "Layers",
    highlights: [
      "Tek ve Çok Gözlü Kutu Menfezler",
      "Boru Menfez & Su Tahliye Hatları",
      "Giriş-Çıkış Baş Duvarı ve Kanatlar",
      "Taban Betonu & Erozyon Koruma"
    ]
  },
  {
    id: "istinat-duvarlari",
    title: "İstinat Duvarı & Şev Tahkimatı",
    shortDescription: "Betonarme istinat duvarları, harçlı taş duvarlar ve şev stabilitesi koruma yapıları.",
    detailedDescription: "Zemin kaymalarını önleyen, yol ve demiryolu güvenliğini teminat altına alan konsol betonarme duvarlar, taş duvarlar ve geoteknik şev tahkimatı uygulamaları yapılır.",
    iconName: "Building2",
    highlights: [
      "Konsol Betonarme İstinat Duvarları",
      "Harçlı & Kuru Taş Duvar İmalatları",
      "Drenaj Boruları & Barbakan Uygulamaları",
      "Şev Güçlendirme & Gabion Duvarlar"
    ]
  },
  {
    id: "demiryolu-altyapi",
    title: "Demiryolu Altyapı & Toprak İşleri",
    shortDescription: "Demiryolu hatları zemin hazırlığı, yarma-dolgu kazıları ve hat altı sanat yapıları.",
    detailedDescription: "TCDD standartlarına uygun balast altı zemin tabakası, yarma ve dolgu tesviyesi, hat drenaj kanalları ve demiryolu sanat yapıları taahhütleri anahtar teslim icra edilir.",
    iconName: "Ruler",
    highlights: [
      "Demiryolu Yarma ve Dolgu İmalatları",
      "Hat Altı Menfez & Geçiş Yapıları",
      "Demiryolu Yan Hendek & Drenaj Hatları",
      "Büyük Hacimli Toprak & Kaya Kazıları"
    ]
  }
];

export const projectCategories = [
  "Tümü",
  "Karayolları & Yol",
  "Menfez & Sanat Yapıları",
  "İstinat Duvarları",
  "Demiryolu & Altyapı"
];

export const projectsData: ProjectItem[] = [
  {
    id: "proje-8-bolge-menfez",
    title: "8. Bölge Karayolları Menfez Projesi",
    category: "Menfez & Sanat Yapıları",
    locationPlaceholder: "8. Bölge Müdürlüğü Sınırları",
    yearPlaceholder: "2026",
    statusPlaceholder: "Tamamlandı",
    description: "Karayolları 8. Bölge Müdürlüğü sınırları içerisinde yer alan, yol altyapısını güçlendirmek ve hidrolik akışı sağlamak amacıyla inşa edilen betonarme kutu menfez ve sanat yapısı imalatları.",
    tags: ["Karayolları", "Kutu Menfez", "Sanat Yapısı", "Altyapı"],
    imagePlaceholderUrl: "/projects/bolge-8-menfez/photo-1.jpg",
    galleryImages: [
      "/projects/bolge-8-menfez/photo-1.jpg",
      "/projects/bolge-8-menfez/photo-2.jpg",
      "/projects/bolge-8-menfez/photo-3.jpg",
      "/projects/bolge-8-menfez/photo-4.jpg",
      "/projects/bolge-8-menfez/photo-5.jpg",
      "/projects/bolge-8-menfez/photo-6.jpg",
      "/projects/bolge-8-menfez/photo-7.jpg",
      "/projects/bolge-8-menfez/photo-8.jpg",
      "/projects/bolge-8-menfez/photo-9.jpg"
    ],
    videoUrl: "/projects/bolge-8-menfez/video-1.mp4",
    details: {
      scope: "Anahtar teslim menfez imalatı, temel kazısı, demir donatı ve beton döküm işlemleri.",
      highlights: [
        "KGM (Karayolları Genel Müdürlüğü) teknik şartnamelerine tam uyum",
        "Yüksek mukavemetli demir donatı ve C30/C35 sınıfı beton kullanımı",
        "Zorlu saha şartlarında hızlı ve güvenli imalat",
        "Su tahliyesi ve taşkın koruma amaçlı hidrolik optimizasyon"
      ]
    }
  },
  {
    id: "proje-istinat-duvari-ornek",
    title: "Karayolu Şev Destek ve İstinat Duvarı (Örnek)",
    category: "İstinat Duvarları",
    locationPlaceholder: "Anadolu Otoyolu Bağlantısı",
    yearPlaceholder: "2025",
    statusPlaceholder: "Tamamlandı",
    description: "Yol güvenliğini sağlamak ve heyelan riskini ortadan kaldırmak amacıyla inşa edilen konsol tip betonarme istinat duvarı taahhüt işi.",
    tags: ["İstinat Duvarı", "Zemin İyileştirme", "Karayolları"],
    imagePlaceholderUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=1200&auto=format&fit=crop",
    details: {
      scope: "Zemin etüdü, hafriyat, geoteknik tasarım ve istinat duvarı inşası.",
      highlights: [
        "Geoteknik mühendislik standartlarına tam riayet",
        "Şev stabilitesinin uzun ömürlü sağlanması",
        "Drenaj ve barbakan sistemlerinin entegrasyonu"
      ]
    }
  }
];

export const corporateValues = [
  {
    title: "Mühendislik Disiplini",
    desc: "Her projenin merkezinde bilimsel, teknik ve mevzuata dayalı titiz bir mühendislik yaklaşımı yer alır."
  },
  {
    title: "İş Sağlığı ve Güvenliği",
    desc: "Tüm saha operasyonlarımızda insan hayatı ve çalışan güvenliği tavizsiz birinci önceliğimizdir."
  },
  {
    title: "Sürdürülebilirlik & Çevre",
    desc: "Doğal kaynakların korunmasına, atık yönetimine ve çevreye duyarlı inşaat yöntemlerine saygılıyız."
  },
  {
    title: "Etik ve Kurumsal Sorumluluk",
    desc: "İş ortaklarımız, çalışanlarımız ve toplumla olan tüm ilişkilerimizde dürüstlük ve kurumsal şeffaflık esastır."
  }
];
