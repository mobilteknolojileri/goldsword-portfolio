// Portfolio data. Store and usage numbers are from 26 August 2026 unless the text says otherwise.

export type ProjectCategory =
  | "Mobile"
  | "Web"
  | "Game"
  | "Backend"
  | "SEO"
  | "Design"
  | "AI"
  | "Open Source";

/** Leave unset if unsure */
export type ProjectKind = "client" | "own" | "open-source";

/** Only set when verified */
export type ProjectStatus = "live" | "closed-test" | "archived";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectShowcase {
  image: string;
  alt: string;
  caption?: string;
}

export interface ProjectMetric {
  /** Already formatted: "28.963", "%95,1", "23K+" */
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Also used as the meta description */
  description: string;
  category: ProjectCategory;
  technologies: string[];
  /** Gradient stops, e.g. "from-indigo-500 to-blue-400" */
  color: string;
  /** Path under /public */
  image?: string;
  /** Background behind the image, matched to its edges. Default: the project gradient. */
  imageBg?: string;
  detailedDescription: string;
  features: string[];
  challenges?: string;
  links: ProjectLink[];
  /** Portrait screenshots (9:16) */
  screenshots?: string[];
  /** Overrides the card link (unused for now) */
  customLink?: string;
  kind?: ProjectKind;
  status?: ProjectStatus;
  /** Wide composite of three screens, about 1200px */
  showcase?: ProjectShowcase;
  gallery?: ProjectShowcase[];
  /** e.g. /vaka-calismalari/kafadar */
  caseStudy?: string;
  /** Only numbers that can be checked */
  metrics?: ProjectMetric[];
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "kafadar-mobile",
    title: "Kafadar: Arkadaşlık Testi",
    description:
      "Kendi hakkınızda test yazıp tek bağlantıyla paylaştığınız Android uygulaması. İşin zoru, bağlantının uygulama kurulu olsa da olmasa da doğru yere varması.",
    category: "Mobile",
    kind: "own",
    status: "live",
    featured: true,
    technologies: [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "Supabase",
      "TanStack Query",
      "Zustand",
      "NativeWind",
      "Astro",
      "AdMob",
    ],
    color: "from-indigo-500 to-blue-400",
    image: "/assets/projects/kafadar-mobile/icon.webp",
    showcase: {
      image: "/assets/projects/kafadar-mobile/showcase.webp",
      alt: "Kafadar uygulamasından üç ekran: soru yazma ekranı, paylaşım düğmeli test listesi ve profil",
      caption:
        "Soldan sağa: sorunun yazılıp doğru cevabın işaretlendiği ekran; her testin yanında paylaşma ve kopyalama düğmesi olan test listesi; tema ve dilin seçildiği profil. Üçüncü ekrandaki e-postayı bulanıklaştırdım.",
    },
    caseStudy: "/vaka-calismalari/kafadar",
    metrics: [
      { value: "100", label: "PageSpeed performansı, önce 84" },
      { value: "23", label: "dil" },
      { value: "108", label: "commit, 25 günde" },
    ],
    detailedDescription:
      "Kendi uygulamam. Kullanıcı kendi hakkında sorular yazar, tek bir bağlantı paylaşır ve arkadaşlarının onu ne kadar tanıdığını görür. Böyle bir uygulamada her şey o bağlantıya dayanır. Dolayısıyla aynı adres üç farklı ziyaretçiye cevap vermek zorunda: uygulaması kurulu olan kişiye, kurulu olmayan kişiye ve bağlantı bir sohbete yapıştırılınca ön izleme çeken sunucuya. Uygulama kuruluysa Android App Links sayesinde işletim sistemi bağlantıyı webe uğratmadan uygulamaya verir; kurulu değilse veri tabanına hiç bağlanmayan statik bir Astro sitesi karşılar. Veri tarafı dört tablolu bir Supabase şeması. Uygulamayı Şubat ve Mart 2026'da 25 günde 108 commit'le yazdım; 8 Mart 2026'dan beri Google Play'de.",
    features: [
      "Soru tipi ve tema seçerek test kurma",
      "Uygulama kuruluysa doğrudan teste açılan paylaşım bağlantısı (Android App Links)",
      "Hesap açmadan test çözme",
      "Test sahibini kimin ne kadar tanıdığını gösteren puan tablosu",
      "Emoji avatarlar",
      "23 dilde arayüz",
      "Veri tabanına hiç bağlanmayan statik tanıtım sitesi",
      "Dört tablolu Supabase şeması: profiller, testler, sorular, cevaplar",
      "AdMob: test yayımlarken ödüllü video, test çözüldükten sonra geçiş reklamı",
    ],
    challenges:
      "Asıl zorluk, aynı paylaşım adresinin uygulaması kurulu olana da, olmayana da, ön izleme çeken sunucuya da doğru cevap vermesiydi. Test bitince reklam kapanmadan sonuç ekranına geçildiği için bazı cihazlarda uygulama çöküyordu; artık uygulama reklamın kapanmasını bekliyor. Tanıtım sitesi mobilde 84 alıyordu: 337 KB'lık PNG logoyu gösterildiği boyutlarda WebP'ye çevirdim, yazı tipini ve mağaza rozetlerini siteye taşıdım; PageSpeed hem mobilde hem masaüstünde dört kategoride 100 verdi. Öte yandan bir sorun hâlâ açık: Paylaşım bağlantısı webde 404 dönüyor ve bağlantıyı 404 sayfasındaki bir betik kurtarıyor. Sohbet ön izlemeleri ve arama motorları bu yüzden hata sayfası görüyor.",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.schwerttr.kafadar",
      },
      { label: "Web sitesi", url: "https://kafadar-web.vercel.app" },
      { label: "Tanıtım sayfası", url: "/kafadar" },
    ],
    screenshots: [],
  },
  {
    slug: "getyo-mobile",
    title: "Get Yo: Mobil Uygulama",
    description:
      "New Jersey'deki bir frozen yogurt dükkânının iOS ve Android uygulaması: günün tatları, sadakat puanı ve tat oylaması. Menüyü yönetim paneli ve siteyle paylaşır.",
    category: "Mobile",
    kind: "client",
    status: "live",
    featured: true,
    technologies: [
      "React Native",
      "Expo SDK 54",
      "Expo Router",
      "Supabase",
      "Edge Functions",
      "RewardUp API",
      "Expo Push",
      "Zustand",
      "NativeWind",
    ],
    color: "from-orange-500 to-red-500",
    image: "/assets/projects/getyo-mobile/hero.webp",
    showcase: {
      image: "/assets/projects/getyo-mobile/showcase.webp",
      alt: "Get Yo uygulamasından üç ekran: günün tatları, puan bakiyesi ve favori tatlarıyla profil",
      caption:
        "Soldan sağa: dükkânda o an bulunan tatlar, diyet işaretleri ve yıldızlarıyla; müşterinin puan bakiyesi ve bir sonraki ödüle ne kadar kaldığı; favori tatların kaydedildiği profil. Ekranlarda örnek veri var, müşteri verisi yok.",
    },
    caseStudy: "/vaka-calismalari/getyo",
    metrics: [
      { value: "3", label: "uygulama, tek menü" },
      { value: "12", label: "sunucu fonksiyonu, anahtar sunucuda" },
      { value: "100", label: "site PageSpeed, mobil" },
    ],
    detailedDescription:
      "New Jersey, Marlboro'daki bir frozen yogurt dükkânı için Ağustos 2025 ile Mayıs 2026 arasında üç uygulama yazdım: iOS ve Android uygulaması, personelin kullandığı yönetim paneli ve dükkânın sitesi. Üçü de aynı menüyü, aynı puan bakiyesini ve aynı çalışma saatlerini okur; personel bir tadı tükendi diye işaretleyince telefondaki liste de değişir, yeni sürüm gerekmez. Sadakat programı işletmenin kullandığı RewardUp'ta; 12 tek işlevli sunucu fonksiyonu RewardUp anahtarını isteğe sunucu tarafında ekler, anahtar uygulamanın içine hiç girmez. Uygulama 4 Kasım 2025'ten beri App Store'da, Google Play'de de yayında. İşletme 22 Nisan 2026'da el değiştirdi; alan adlarını, Supabase'i, Vercel'i, e-posta servisini ve iki mağaza kaydını yeni sahibine ben devrettim. 2.0.0 sürümü devirden sonra, 19 Mayıs 2026'da çıktı. Kodun dışında da çalıştım: Dükkânın baskı tasarımlarını hazırladım, bir dönem sosyal medya hesaplarını yönettim, hatta dükkânın videosunu çekip kurguladım.",
    features: [
      "O an dükkânda olan tatlar; sütsüz, şekersiz ve koşer işaretleriyle",
      "Puan ve ödül bakiyesi; RewardUp anahtarı telefona inmeden",
      "Oy verene puan kazandıran tat oylaması",
      "Kategori kategori açılan bildirimler: yeni tat, favori tadın dönüşü, kampanya, oylama sonucu",
      "Doğum günü ödülü",
      "Favoriler ve geri bildirim formu",
      "Yönetim paneli ve siteyle ortak menü; personelin değişikliği yeni sürüm gerekmeden telefona yansır",
    ],
    challenges:
      "RewardUp anahtarı müşteri puanlarını hem okuyabiliyor hem değiştirebiliyor; uygulamanın içine konan bir anahtar, uygulamayı indiren herkesin eline geçerdi. Her isteği olduğu gibi ileten genel bir fonksiyon aynı açığı bir adım geriye taşıyacağı için her işlemin kendi fonksiyonu var. Bildirimlerin alıcı listesi gönderimden önce sunucuda, müşterinin seçtiği kategorilere göre süzülüyor. Sistem iki şube için kurulmuştu; ikinci şube işletmeden ayrılınca müşterinin gördüğü her yeri Marlboro'ya sabitledim ama API'nin döndürdüğü alanlara dokunmadım, çünkü güncellemeyi almamış telefonlar o uç noktaları hâlâ şube parametresiyle çağırıyordu.",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/get-yo/id6753984684",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.getyocafe.app",
      },
    ],
    screenshots: [
      "/assets/projects/getyo-mobile/screenshot-1.webp",
      "/assets/projects/getyo-mobile/screenshot-2.webp",
      "/assets/projects/getyo-mobile/screenshot-3.webp",
      "/assets/projects/getyo-mobile/screenshot-4.webp",
      "/assets/projects/getyo-mobile/screenshot-5.webp",
      "/assets/projects/getyo-mobile/screenshot-6.webp",
      "/assets/projects/getyo-mobile/screenshot-7.webp",
    ],
  },
  {
    slug: "ingilizceciyiz",
    title: "İngilizceciyiz",
    description:
      "İngilizce öğretmenlerinin resmî evrakını, bir kez girdikleri bilgilerle hazırlayan uygulama. 2023'ten beri mağazada; 2025'te devralıp platformu sıfırdan yazdım.",
    category: "Mobile",
    kind: "client",
    status: "live",
    featured: true,
    technologies: [
      "Expo",
      "React Native",
      "NativeWind",
      "Astro",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "RevenueCat",
      "Turborepo",
      "Cloudflare Pages",
    ],
    color: "from-teal-500 to-green-500",
    image: "/assets/projects/ingilizceciyiz/hero.webp",
    showcase: {
      image: "/assets/projects/ingilizceciyiz/showcase.webp",
      alt: "İngilizceciyiz uygulamasından üç ekran: öğretmenin ana ekranı, bilgileri dolu gelen yıllık plan formu ve hazır evrak",
      caption:
        "Soldan sağa: öğretmenin ana ekranı; profil ve tarih alanları hesaptan dolu gelen yıllık plan formu; Word'de açılmaya hazır evrak. Ekranlarda örnek veri var.",
    },
    gallery: [
      {
        image: "/assets/projects/ingilizceciyiz/plans.webp",
        alt: "İngilizceciyiz'in yıllık plan, haftalık kazanım ve ders programı ekranları",
        caption:
          "Soldan sağa: yıllık planın haftaları; bir haftanın ünitesi, kazanımları, görevleri ve değerlendirmesi; öğretmenin ders programı. Her ders saati ait olduğu haftaya bağlı.",
      },
    ],
    caseStudy: "/vaka-calismalari/ingilizceciyiz",
    metrics: [
      { value: "23K+", label: "indirme" },
      { value: "28.963", label: "üretilen belge" },
      { value: "6.679", label: "öğretmen hesabı" },
      { value: "1.069", label: "belge şablonu" },
      { value: "100", label: "PageSpeed, 4 kategori" },
    ],
    detailedDescription:
      "Türkiye'de bir İngilizce öğretmeni her dönem bir yığın resmî evrak teslim eder: yıllık ve günlük planlar, BEP ve DYK planları, seçmeli ders planları, kulüp dosyaları, zümre ve ŞÖK tutanakları. Üstelik hepsi aynı bilgileri yeniden ister. Uygulama Eylül 2023'ten beri mağazadaydı; Ağustos 2025'te tek geliştirici olarak devraldım ve platformun tamamını sıfırdan yazdım, yeni hâli Nisan 2026'dan beri yayında. Öğretmen bilgisini bir kez girer; her resmî şablon kendi formunu üretir ve bilinen her alan dolu gelir. Belgeyi Supabase Edge Functions sunucuda hazırlar ve Word'de düzenlenebilir bir dosya olarak geri verir. 9 Ekim 2026 itibarıyla 6.679 öğretmen hesabı açıldı ve 3.416 öğretmen 28.963 belge üretti; uygulamanın App Store'da 13.594, Google Play'de 10.000'den fazla indirmesi var.",
    features: [
      "Profil, sınıf ve akademik takvimden kendiliğinden dolan evrak formu",
      "Her resmî şablondan kendi formunu üreten sistem; 1.069 şablon",
      "Word'de düzenlenebilir DOCX çıktı, sunucuda üretilir",
      "Yıllık ve günlük plan, BEP, DYK, seçmeli ders, kulüp, zümre ve ŞÖK evrakı",
      "42 haftalık yıllık plan: ünite, kazanım, görev ve öğretmenin kendi notu",
      "Her ders saatini ait olduğu haftaya bağlayan ders programı",
      "Tek Astro uygulamasında herkese açık site ve yönetim paneli",
      "Yönetim panelinden tek tıkla yedek; kimin aldığı kayda geçer",
      "Mağaza incelemesini beklemeden cihaza inen düzeltmeler",
      "RevenueCat ile iki mağazada abonelik",
    ],
    challenges:
      "Yönetim panelindeki şablon listesi tablodaki 1.002 şablonun 1.000'ini gösteriyor ve hata da vermiyordu; sebep Supabase'in API katmanındaki varsayılan 1.000 satır sınırıydı. Sınırı yükseltmek aslında sorunu yalnızca erteledi; asıl çözüm gruplamayı, aramayı ve sayfalamayı veri tabanı fonksiyonlarına taşımak oldu. Sitenin Lighthouse performansı bir hafta 94, ertesi hafta 72 çıktı; o günden beri ölçümü, yavaşlatılmış 4G'de birkaç kez çalışıp ortancayı alan ve eşiğin altında hata veren bir komut yapıyor. Talep okul takvimini izliyor: Riskli değişiklikler baharda çıkıyor, eylül öncesi haftalar kararlılığa ayrılıyor.",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/tr/app/ingilizceciyiz/id6459478322",
      },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.ingilizceciyiz.ingilizceciyiz",
      },
      { label: "Web sitesi", url: "https://ingilizceciyizmobil.com" },
    ],
    screenshots: [
      "/assets/projects/ingilizceciyiz/screenshot-1.webp",
      "/assets/projects/ingilizceciyiz/screenshot-2.webp",
      "/assets/projects/ingilizceciyiz/screenshot-3.webp",
      "/assets/projects/ingilizceciyiz/screenshot-4.webp",
      "/assets/projects/ingilizceciyiz/screenshot-5.webp",
      "/assets/projects/ingilizceciyiz/screenshot-6.webp",
      "/assets/projects/ingilizceciyiz/screenshot-7.webp",
      "/assets/projects/ingilizceciyiz/screenshot-8.webp",
      "/assets/projects/ingilizceciyiz/screenshot-9.webp",
      "/assets/projects/ingilizceciyiz/screenshot-10.webp",
      "/assets/projects/ingilizceciyiz/screenshot-11.webp",
    ],
  },
  {
    slug: "yanitla-kazan",
    title: "Yanıtla Kazan: Sohbet ve Arkadaşlık",
    description:
      "Var olan bir Flutter uygulamasının sunucu tarafını sıfırdan yazdım; gerçek zamanlı sohbeti ve arkadaşlık sistemini hem sunucuda hem uygulamada ekledim.",
    category: "Backend",
    kind: "client",
    technologies: [
      "Node.js",
      "Express",
      "Socket.io",
      "PostgreSQL",
      "Redis",
      "Flutter",
      "Docker",
      "Nginx",
    ],
    color: "from-blue-600 to-indigo-600",
    image: "/assets/projects/yanitla-kazan/hero.webp",
    detailedDescription:
      "Müşterinin uygulaması Flutter'la yazılmıştı ama arkasında çalışan bir sistem yoktu. API'yi sıfırdan yazdım: PostgreSQL şeması, Socket.io üzerinden mesajlaşma, Redis'te oturum ve önbellek. Sohbet ve arkadaşlık ekranlarını uygulama tarafında da ben yazdım, yani sunucu ile uygulama birlikte ilerledi. Fotoğraf paylaşımını, sesli mesajı ve emoji seçiciyi de bu sırada ekledim. Sunucuyu Docker'la paketleyip Nginx arkasında Hetzner'de yayına aldım.",
    features: [
      "Node.js ve Express ile sıfırdan yazılan API",
      "Socket.io ile bire bir mesajlaşma ve mesaj geçmişi",
      "Arkadaş arama, ekleme, listeleme ve engelleme",
      "Kameradan ve galeriden fotoğraf paylaşımı",
      "Sesli mesaj kaydı, gönderimi ve oynatma",
      "Emoji seçici",
      "Mesaj silme, yıldızlama ve okundu bilgisi",
      "PostgreSQL şeması; Redis'te oturum ve önbellek",
      "Docker, Nginx ve SSL ile Hetzner'de yayına alma",
      "Helmet ve CORS ile temel güvenlik ayarları",
      "Türkçe ve İngilizce arayüz",
    ],
    challenges:
      "Sunucuyu ve uygulamayı aynı anda yazdım. Gerçek zamanlı sohbet altyapısı, fotoğraf ve ses dosyalarının yüklenip saklanması, veri tabanı tasarımı ve sunucunun yayına alınması tek elden yürüdü.",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.BuzzGaming.YantlaKazan&hl=tr",
      },
    ],
    screenshots: [
      "/assets/projects/yanitla-kazan/screenshot-1.webp",
      "/assets/projects/yanitla-kazan/screenshot-2.webp",
      "/assets/projects/yanitla-kazan/screenshot-3.webp",
      "/assets/projects/yanitla-kazan/screenshot-4.webp",
      "/assets/projects/yanitla-kazan/screenshot-5.webp",
      "/assets/projects/yanitla-kazan/screenshot-6.webp",
      "/assets/projects/yanitla-kazan/screenshot-7.webp",
      "/assets/projects/yanitla-kazan/screenshot-8.webp",
      "/assets/projects/yanitla-kazan/screenshot-9.webp",
      "/assets/projects/yanitla-kazan/screenshot-10.webp",
      "/assets/projects/yanitla-kazan/screenshot-11.webp",
      "/assets/projects/yanitla-kazan/screenshot-12.webp",
      "/assets/projects/yanitla-kazan/screenshot-13.webp",
      "/assets/projects/yanitla-kazan/screenshot-14.webp",
      "/assets/projects/yanitla-kazan/screenshot-15.webp",
      "/assets/projects/yanitla-kazan/screenshot-16.webp",
      "/assets/projects/yanitla-kazan/screenshot-17.webp",
      "/assets/projects/yanitla-kazan/screenshot-18.webp",
      "/assets/projects/yanitla-kazan/screenshot-19.webp",
      "/assets/projects/yanitla-kazan/screenshot-20.webp",
      "/assets/projects/yanitla-kazan/screenshot-21.webp",
      "/assets/projects/yanitla-kazan/screenshot-22.webp",
      "/assets/projects/yanitla-kazan/screenshot-23.webp",
      "/assets/projects/yanitla-kazan/screenshot-24.webp",
      "/assets/projects/yanitla-kazan/screenshot-25.webp",
      "/assets/projects/yanitla-kazan/screenshot-26.webp",
      "/assets/projects/yanitla-kazan/screenshot-27.webp",
    ],
  },
  {
    slug: "digital-detox",
    title: "Digital Detox Uygulaması",
    description:
      "Telefon kullanımını kısıtlayan Flutter uygulaması: Uygulamaları Android'de sistem seviyesinde engeller, seanslar tek başına ya da grupla yapılır.",
    category: "Mobile",
    technologies: ["Flutter", "GetX", "Firebase", "AdMob", "In-App Purchase"],
    color: "from-cyan-600 to-blue-600",
    image: "/assets/projects/digital-detox/hero.webp",
    imageBg: "#fdf6e9",
    detailedDescription:
      "Kullanıcıların telefon bağımlılığını yönetmesine yardım eden uygulamayı Clean Architecture ile sıfırdan yazdım. Android'de engelleme sistem seviyesinde çalışıyor. En çok iki şey uğraştırdı: arka plandaki servisin seans bitene kadar kapanmaması ve grup seansının bütün cihazlarda aynı anda ilerlemesi. Hesaplar da veriler de Firebase'de.",
    features: [
      "Android'de sistem seviyesinde uygulama engelleme",
      "Tek kişilik ve grup detoks seansları",
      "Zamanlanmış detoks planları",
      "İstatistikler, grafikler ve raporlar",
      "Başarımlar ve liderlik tablosu",
      "Premium üyelik ve uygulama içi satın alma",
      "AdMob ödüllü reklamlar",
      "Firebase Authentication ve Firestore",
      "Koyu ve açık tema, Lottie animasyonları",
    ],
    challenges:
      "Engelleme Android'de sistem seviyesinde çalışmak zorundaydı. Arka plandaki servis seans bitene kadar kapanmamalı, grup seansı da bütün cihazlarda aynı anda ilerlemeliydi. Başarım kuralları ve premium üyelik entegrasyonu bunların üstüne geldi.",
    links: [],
    screenshots: [
      "/assets/projects/digital-detox/screenshot-1.webp",
      "/assets/projects/digital-detox/screenshot-2.webp",
      "/assets/projects/digital-detox/screenshot-3.webp",
      "/assets/projects/digital-detox/screenshot-4.webp",
      "/assets/projects/digital-detox/screenshot-5.webp",
      "/assets/projects/digital-detox/screenshot-6.webp",
      "/assets/projects/digital-detox/screenshot-7.webp",
      "/assets/projects/digital-detox/screenshot-8.webp",
      "/assets/projects/digital-detox/screenshot-9.webp",
      "/assets/projects/digital-detox/screenshot-10.webp",
      "/assets/projects/digital-detox/screenshot-11.webp",
      "/assets/projects/digital-detox/screenshot-12.webp",
      "/assets/projects/digital-detox/screenshot-13.webp",
      "/assets/projects/digital-detox/screenshot-14.webp",
      "/assets/projects/digital-detox/screenshot-15.webp",
      "/assets/projects/digital-detox/screenshot-16.webp",
      "/assets/projects/digital-detox/screenshot-17.webp",
    ],
  },
  {
    slug: "fabric-detection",
    title: "Kumaş Kusuru Tespiti",
    description:
      "Kumaştaki delikleri fotoğraftan bulan sistem: Flutter uygulaması fotoğrafı FastAPI servisine gönderir, orada TensorFlow Lite'a aktarılmış bir YOLOv8 modeli çalışır.",
    category: "AI",
    kind: "own",
    status: "archived",
    technologies: ["YOLOv8", "Python", "ONNX", "TensorFlow Lite", "OpenCV", "FastAPI", "Flutter"],
    color: "from-green-500 to-teal-500",
    image: "/assets/projects/fabric-detection/hero.webp",
    metrics: [
      { value: "%95,1", label: "mAP" },
      { value: "%97,9", label: "kesinlik" },
      { value: "%86,8", label: "duyarlılık" },
    ],
    detailedDescription:
      "Kasım 2024 ile Ocak 2025 arasında Trakya Üniversitesinde bir proje olarak yazdım. Kumaşın fotoğrafı çekilir; sistem delikleri kutuyla işaretler ve her birine bir güven skoru verir. Veri setini Kaggle ve Roboflow kaynaklarından toplayıp elle etiketledim, sonra çevirme, döndürme ve kontrast değişimiyle çoğalttım; tek sınıf var: delik. Modeli PyTorch'ta eğittim, ONNX üzerinden TensorFlow Lite'a aktardım ve FastAPI arkasında çalıştırdım. Kod, eğitim ayarları ve 16 sayfalık Türkçe proje raporu GitHub'da herkese açık. Geliştirme sırasında kullandığım barındırılan sunucu artık yok; denemek isterseniz servisi kendi bilgisayarınızda çalıştırabilirsiniz.",
    features: [
      "Fotoğraftaki delikleri kutuyla işaretleme ve her tespit için güven skoru",
      "Kaggle ve Roboflow görsellerinden elle etiketlenmiş tek sınıflı veri seti",
      "Telefon fotoğrafındaki ışık farkını dengeleyen ön işleme",
      "PyTorch'tan ONNX üzerinden TensorFlow Lite'a aktarılmış 43 MB'lık model",
      "Güveni 0,50'nin altındaki tahminleri atan, üst üste binen kutuları OpenCV ile ayıklayan son işleme",
      "Uç noktaları ve çıkarımı test edilen FastAPI servisi",
      "Fotoğrafı servise gönderen Flutter uygulaması",
    ],
    challenges:
      "Sonuçlar: mAP %95,1, kesinlik %97,9, duyarlılık %86,8. Geliştirilmesi gereken sayı duyarlılık; diğer bir deyişle model temiz kumaşı neredeyse hiç işaretlemiyor ama gerçek deliklerin bir kısmını kaçırıyor. Telefonla çekilen fotoğrafta ışık düzensiz düştüğü için ön işleme parlaklık kanalında histogram eşitliyor; model sunucu açılırken bir kez yüklendiği için yükleme gecikmesi yalnızca ilk isteğe düşüyor.",
    links: [
      { label: "GitHub", url: "https://github.com/mobilteknolojileri/fabric-defect-detection" },
      {
        label: "Proje raporu (PDF)",
        url: "https://github.com/mobilteknolojileri/fabric-defect-detection/blob/main/docs/project-report-tr.pdf",
      },
    ],
    screenshots: [
      "/assets/projects/fabric-detection/screenshot-1.webp",
      "/assets/projects/fabric-detection/screenshot-2.webp",
      "/assets/projects/fabric-detection/screenshot-3.webp",
      "/assets/projects/fabric-detection/screenshot-4.webp",
      "/assets/projects/fabric-detection/screenshot-5.webp",
    ],
  },
  {
    slug: "frozen-yogurt-website",
    title: "Frozen Yogurt Cafe: Web Sitesi",
    description:
      "Get Yo dükkânının sitesi. Kapalı bir platformdan çıkarıp Mart 2026'da statik bir Astro sitesine taşıdım; menüyü ve çalışma saatlerini yönetim panelinden canlı okur.",
    category: "Web",
    kind: "client",
    status: "live",
    technologies: ["Astro", "Tailwind CSS", "Supabase", "Vercel", "reCAPTCHA", "Resend"],
    color: "from-indigo-600 to-cyan-500",
    image: "/assets/projects/frozen-yogurt-website/hero.jpg",
    showcase: {
      image: "/assets/projects/frozen-yogurt-website/site.webp",
      alt: "Frozen Yogurt Cafe sitesinin ilk ekranı: sadakat programı daveti ve günün çalışma saatleri",
      caption:
        "Saatler, personelin yönetim panelinden güncellediği veri tabanından gelir; tatil günü dükkânı kapatmak için yeni sürüm gerekmez, paneldeki bir düzenleme yeter.",
    },
    caseStudy: "/vaka-calismalari/getyo",
    metrics: [
      { value: "100", label: "PageSpeed performansı" },
      { value: "96", label: "erişilebilirlik" },
      { value: "0,9 sn", label: "LCP, mobil" },
    ],
    detailedDescription:
      "Get Yo dükkânının sitesi. İlk hâli Readdy adlı kapalı bir platformdaydı: Koda erişim yoktu ve iletişim formu bot mesajlarıyla doluyordu. Önce Next.js ile yeniden yazdım; forma reCAPTCHA ve sunucu tarafında doğrulama eklenince spam kesildi. Mart 2026'da siteyi Astro ve Tailwind'e taşıyıp statik çıktıya çevirdim. Statik bir sayfa menüyü istek anında üretemez; bu yüzden menüyü tarayıcı ayrıca ister, barındırma katmanı /api/* isteklerini yönetim paneline iletir ve panel, mobil uygulamanın okuduğu veri tabanından okur. Böylece sitedeki menü uygulamadakinden farklı olamaz. Astro'ya geçmeden önce yerel Lighthouse ölçümünde performans 18'di; 26 Ağustos 2026'da PageSpeed Insights mobilde performans, erişilebilirlik, en iyi uygulamalar ve SEO için 100, 96, 100 ve 100 ölçtü.",
    features: [
      "Statik site; menü ve stok durumu yönetim panelinden canlı geliyor",
      "Besin, alerjen, koşer ve glütensiz sertifika bilgisi menünün içinde",
      "Tatil günleri dâhil çalışma saatleri panelden",
      "reCAPTCHA ve sunucu tarafında doğrulamayla korunan formlar",
      "İletişim formundan gelen mesajlar Resend ile e-postaya düşer",
      "PageSpeed Insights'ta mobil performans 100",
    ],
    challenges:
      "Readdy'de koda erişim yoktu ve form bot mesajlarıyla doluyordu. Statik bir sitede canlı menü göstermek için /api/* isteklerini barındırma katmanında yönetim paneline yönlendirdim; site sunucuya dönüşmeden o anki stoğu gösteriyor. Erişilebilirliği 96'da bırakan tek bulgu bir renk kontrastı sorunu; işletme el değiştirdiği için bunu artık ben düzeltemiyorum.",
    links: [{ label: "Web sitesi", url: "https://www.frozenyogurtcafe.com" }],
    screenshots: [
      "/assets/projects/frozen-yogurt-website/screenshot-1.webp",
      "/assets/projects/frozen-yogurt-website/screenshot-2.webp",
      "/assets/projects/frozen-yogurt-website/screenshot-3.webp",
    ],
  },
  {
    slug: "legends-of-aestera",
    title: "Legends of Aestera",
    description:
      "Unity ile yaptığım 2B platform oyunu: iki oynanabilir karakter, elle tasarlanmış 20'den fazla bölüm ve boss savaşları. Google Play'de yayında.",
    category: "Game",
    kind: "own",
    status: "live",
    technologies: ["Unity", "C#", "Android", "AdMob"],
    color: "from-blue-700 to-indigo-700",
    image: "/assets/projects/legends-of-aestera/hero.webp",
    detailedDescription:
      "Kendi oyunum. Grafikleri hazır paketlerden aldım; mekanikleri ve bölüm tasarımını ben yaptım. Hareketler çift zıplama, duvarda koşma ve kaymaya dayanıyor. En çok zamanı dengeleme aldı: Bölümlerin zorluğunu, düşmanların yerini ve boss davranışlarını defalarca elden geçirdim. Oyun Google Play'de yayında.",
    features: [
      "İki karakter: Red kılıçla kombo yapar, Robinhood ok atar",
      "Elle tasarlanmış 20'den fazla bölüm: tuzaklar, gizli geçitler ve bulmacalar",
      "Boss savaşları",
      "Orman, mağara ve kale ortamları",
      "Can, hız ve zıplama güçlendirmeleri",
      "Çift zıplama, duvarda koşma ve kayma",
      "Varil, testere ve diken gibi engeller",
      "Dokunmatik kontrol ve oyun kolu desteği",
      "İlerleme yalnızca cihazda saklanır; reklamlar Google AdMob üzerinden",
    ],
    challenges:
      "Platform mekaniklerini dengelemek, bölümleri tasarlamak ve boss davranışlarını oturtmak uzun sürdü. Dokunmatik ve oyun kolu kontrollerini ayarlamak, Google Play politikalarına uymak da işin parçasıydı.",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.schwerttr.aestera",
      },
      { label: "Tanıtım sayfası", url: "/legends-of-aestera" },
    ],
    screenshots: [
      "/assets/projects/legends-of-aestera/screenshot-1.webp",
      "/assets/projects/legends-of-aestera/screenshot-2.webp",
      "/assets/projects/legends-of-aestera/screenshot-3.webp",
    ],
  },
  {
    slug: "numeric-wheel",
    title: "Numeric Wheel: Bulmaca Oyunu",
    description:
      "Çalışmayan bir HTML5 bulmaca oyununu Android'e taşıdım: Çökmelerini giderdim, Capacitor ile paketledim ve Google Play'e çıkardım.",
    category: "Game",
    kind: "client",
    technologies: ["HTML5", "Capacitor", "Android", "AdMob", "Canvas API"],
    color: "from-yellow-500 to-orange-500",
    image: "/assets/projects/numeric-wheel/hero.webp",
    imageBg: "#5f55f3",
    detailedDescription:
      "Müşterinin HTML5 bulmaca oyunu elime geldiğinde çöküyordu. Canvas tarafındaki hataları giderdim, oyunu Capacitor ile Android paketine aldım ve hedef sürümü API 21'den API 35'e (Android 15) taşıdım. İşi üç aşamada yaptım: Önce oyunu açılır hâle getirdim, sonra oynanışı tamamladım, en son reklamları ekleyip mağazanın istediklerini karşıladım.",
    features: [
      "Renkli topları eşleştirme mekaniği",
      "Bir renkteki bütün topları patlatan joker",
      "Patlama animasyonları",
      "Skor ve bonus kaydı",
      "Hatırlanan müzik ve ses tercihi; arka plana geçince müzik duraklar",
      "Telefon ve tablette 60 FPS",
      "AdMob reklamları",
      "Capacitor ile yerel Android paketi; API 21'den API 35'e",
    ],
    challenges:
      "Çökmeler Canvas tarafından geliyordu. Onları giderdikten sonra iş, HTML5 oyununu yerel Android paketinde akıcı çalıştırmak, joker sistemini kurmak ve telefonla tablette 60 FPS'i tutturmaktı.",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.yakup.numericwheel&hl=tr",
      },
    ],
    screenshots: [
      "/assets/projects/numeric-wheel/screenshot-1.webp",
      "/assets/projects/numeric-wheel/screenshot-2.webp",
      "/assets/projects/numeric-wheel/screenshot-3.webp",
    ],
  },
  {
    slug: "mood-tracker",
    title: "Mood Tracker: Arayüz Yenileme",
    description:
      "Flutter ile yazılmış bir ruh hâli takip uygulamasının arayüzünü yeniledim; kodu ve kullanıcı verisini koruyup ekranları Material Design'a taşıdım.",
    category: "Mobile",
    technologies: ["Flutter", "Firebase", "Material Design"],
    color: "from-teal-500 to-blue-500",
    image: "/assets/projects/mood-tracker/hero.webp",
    detailedDescription:
      "Uygulamayı yeniden yazmadım, yeniledim. Kod tabanı ve kullanıcı verisi olduğu gibi kaldı; ekranları, tipografiyi, renkleri ve boşlukları tek bir düzene oturttum. Koyu temada bazı ekranlar okunmuyordu, onu da bu sırada düzelttim.",
    features: [
      "Yeni uygulama ikonu ve açılış ekranı",
      "Ekranların Material Design'a taşınması",
      "Koyu tema düzeltmeleri",
      "Karşılama ekranları ve ana menünün yeniden tasarımı",
      "Tutarlı tipografi, renk ve boşluklar",
      "Firebase Auth ve Firestore güncellemesi",
      "Performans iyileştirmeleri",
    ],
    challenges:
      "Zorluk, arayüzü baştan yenilerken kod tabanına ve kullanıcı verisine dokunmamaktı. Koyu temada okunmayan ekranlar da aynı işin içindeydi.",
    links: [],
    screenshots: [
      "/assets/projects/mood-tracker/screenshot-1.webp",
      "/assets/projects/mood-tracker/screenshot-2.webp",
      "/assets/projects/mood-tracker/screenshot-3.webp",
      "/assets/projects/mood-tracker/screenshot-4.webp",
      "/assets/projects/mood-tracker/screenshot-5.webp",
      "/assets/projects/mood-tracker/screenshot-6.webp",
    ],
  },
  {
    slug: "nobet-app",
    title: "Nöbetçi Uygulaması",
    description:
      "Öğretmenlerin nöbet görevlerini takip ettiği bir React Native uygulaması. Müşterinin kodunu yeniden düzenleyip İngilizce dil desteği ekledim.",
    category: "Mobile",
    kind: "client",
    technologies: ["React Native", "Expo", "AsyncStorage", "i18next", "NativeWind"],
    color: "from-emerald-500 to-teal-500",
    detailedDescription:
      "Okul öğretmenlerinin nöbet görevlerini yönetmek için yazılmış bir mobil uygulama. Müşterinin elindeki kod birkaç büyük dosyada birikmişti; eklenen her yeni özellik başka bir yeri bozuyordu. Büyük dosyaları böldüm, tekrar eden kısımları ortak bileşenlere taşıdım, kullanılmayan kodu temizledim. Üstüne i18next ile İngilizce dil desteği ekledim.",
    features: [
      "Karışık dosya yapısının 25'ten fazla bileşene ayrılması",
      "Tekrar eden açılır pencerelerin tek ortak bileşende toplanması",
      "Okul saatine göre güncellenen durum metni",
      "Bozuk import ve export'ların düzeltilmesi",
      "Yöneticiler için ayrı yetki katmanı",
      "i18next ile İngilizce dil desteği",
      "Kod tekrarının ve kullanılmayan kodun temizlenmesi",
    ],
    challenges:
      "Karışık kod tabanını, uygulamanın davranışını bozmadan bölmem gerekiyordu. Ortak bileşenleri ayırmak ve çok dil desteğini sonradan eklemek de kolay olmadı.",
    links: [],
  },
  {
    slug: "getyo-admin",
    title: "Get Yo: Yönetim Paneli",
    description:
      "Personel dükkânın menüsünü, çalışma saatlerini, oylamalarını ve bildirimlerini bu panelden yönetir. Mobil uygulama da site de menüyü buradan okur.",
    category: "Web",
    kind: "client",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Supabase",
      "Edge Functions",
      "Expo Push",
      "Resend",
      "Tailwind CSS",
    ],
    color: "from-indigo-500 to-blue-600",
    image: "/assets/projects/getyo-admin/hero.webp",
    caseStudy: "/vaka-calismalari/getyo",
    detailedDescription:
      "Get Yo uygulamasının personel tarafı. Tatları, toppingleri, kategorileri, çalışma saatlerini, yorumları, geri bildirimleri, oylamayı, kullanıcıları ve bildirimleri personel buradan yönetir. Bir tadı bir kez düzenlemek yeter; mobil uygulama da dükkânın sitesi de değişikliği aynı veri tabanından okur, statik site menüyü tarayıcıda panelin açık API'sinden çeker. Personel bir tadı kaydederken bildirimi de açarsa panel yalnızca o kategoride bildirim almak isteyen müşterilerin cihazlarını seçer ve gönderimi bir sunucu fonksiyonuna bırakır. Doğum günü ödüllerini zamanlanmış bir fonksiyon gönderir, e-postalar Resend üzerinden çıkar.",
    features: [
      "Tat menüsü: fotoğraf, kategori, sos ve alerjen bilgisi",
      "Topping stoğu ve tükendi işareti",
      "Çalışma saatleri ve tatil günleri",
      "Müşterinin tercihine göre süzülen anlık bildirimler",
      "Tat oylaması ve yorum moderasyonu",
      "Öneri, şikâyet ve iş başvurusu formlarından gelen geri bildirimler",
      "Dükkânın sitesinin okuduğu açık menü API'si",
      "Resend ile otomatik e-posta bildirimleri",
    ],
    challenges:
      "Personelin yaptığı tek bir düzenleme uygulamaya ve siteye aynı anda yansımalıydı; bildirimin alıcıları da gönderimden önce sunucuda süzülmeliydi. Tek şube kalınca paneldeki şube seçimini Marlboro'ya sabitledim; eski uygulama sürümleri bozulmasın diye API'nin şube alanlarına dokunmadım.",
    links: [],
    screenshots: [],
  },
  {
    slug: "gmb-optimizasyonu",
    title: "Google My Business Optimizasyonu",
    description:
      "Frozen Yogurt Cafe'nin o dönemki iki şubesi için Google işletme profillerini tamamladım ve fotoğraflarını düzenledim. Amaç yerel aramalarda görünmekti.",
    category: "SEO",
    kind: "client",
    technologies: ["Google Business Profile", "Yerel SEO", "AI Görsel İyileştirme"],
    color: "from-red-500 to-orange-500",
    image: "/assets/projects/gmb-optimizasyonu/hero.webp",
    imageBg: "#1e1e1e",
    detailedDescription:
      "Frozen Yogurt Cafe'nin Google işletme profilleri yarım kalmıştı: Bilgiler eksikti, fotoğrafların çözünürlüğü düşüktü, kategori yanlış seçilmişti. O dönem işletmenin iki şubesi vardı; ikisinin de eksik bilgilerini tamamladım, fotoğrafları yapay zekâ araçlarıyla iyileştirdim ve kadrajda kalan müşterilerin yüzlerini gizlilik için kapattım. Kategorileri ve anahtar kelimeleri de yerel aramaya göre yeniden seçtim.",
    features: [
      "İki şubenin eksik profil bilgilerinin tamamlanması",
      "Fotoğrafların yapay zekâ araçlarıyla iyileştirilmesi",
      "Kadrajdaki müşteri yüzlerinin gizlilik için kapatılması",
      "Yerel aramaya göre kategori ve anahtar kelime düzenlemesi",
      "Etkileşim ve görünürlük takibi",
    ],
    challenges:
      "Profilleri tamamlarken kadrajdaki müşterilerin gizliliğini de korudum. Hedef, işletmenin yerel aramalarda daha çok görünmesiydi.",
    links: [{ label: "Web sitesi", url: "https://www.frozenyogurtcafe.com" }],
    screenshots: [
      "/assets/projects/gmb-optimizasyonu/screenshot-1.webp",
      "/assets/projects/gmb-optimizasyonu/screenshot-2.webp",
      "/assets/projects/gmb-optimizasyonu/screenshot-3.webp",
      "/assets/projects/gmb-optimizasyonu/screenshot-4.webp",
      "/assets/projects/gmb-optimizasyonu/screenshot-5.webp",
      "/assets/projects/gmb-optimizasyonu/screenshot-6.webp",
      "/assets/projects/gmb-optimizasyonu/screenshot-7.webp",
    ],
  },
  {
    slug: "graphic-design",
    title: "Grafik Tasarım Projeleri",
    description:
      "Bir kuyumcu, bir mobilyacı ve bir mobil uygulama için logo, Instagram paylaşımı ve reklam görseli hazırladım.",
    category: "Design",
    kind: "client",
    technologies: ["Canva", "Logo Tasarımı", "Sosyal Medya Tasarımı", "Marka Kimliği"],
    color: "from-blue-400 to-indigo-400",
    image: "/assets/projects/graphic-design/hero.webp",
    imageBg: "#ffffff",
    detailedDescription:
      "Yazılım dışında yaptığım tasarım işleri. Üç markanın görsel ihtiyacını Canva'da karşıladım: Emirhan Kuyumculuk için logo ve Instagram hikâyesi, Mobilyacı İkra için logo ve Instagram gönderileri, Get Yo uygulaması için reklam görseli. Get Yo dükkânında kullanılan baskı tasarımlarını da ben hazırladım.",
    features: [
      "Emirhan Kuyumculuk: logo ve Instagram hikâyesi",
      "Mobilyacı İkra: logo ve Instagram gönderileri",
      "Get Yo: mobil uygulamanın reklam görseli",
      "Get Yo dükkânı: baskı tasarımları",
    ],
    links: [],
    screenshots: [
      "/assets/projects/graphic-design/emirhan-kuyumcu-ikon.webp",
      "/assets/projects/graphic-design/emirhan-kuyumcu-story.webp",
      "/assets/projects/graphic-design/getyo-mobile-reklam-tasarimi.webp",
      "/assets/projects/graphic-design/mobilyaci-ikra-logo.webp",
      "/assets/projects/graphic-design/mobilyaci-ikra-instagram-post.jpg",
    ],
  },
  {
    slug: "tracker-web",
    title: "Ödeme ve Görev Takibi",
    description:
      "Ödemeleri ve görevleri tek panelde toplayan web uygulaması. Son ödeme tarihi geçen kayıt kendiliğinden gecikmiş olarak işaretlenir.",
    category: "Web",
    kind: "own",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Drag & Drop",
    ],
    color: "from-blue-600 to-cyan-600",
    image: "/assets/projects/tracker-web/hero.webp",
    imageBg: "#181d2c",
    detailedDescription:
      "Kendi ihtiyacım için yazdım, zamanla başkalarının da kullanabileceği hâle geldi. Ödemeler ve görevler ayrı listelerde tutuluyor; son ödeme tarihi geçen bir kayıt kendiliğinden gecikmiş sayılır, ayrıca işaretlemeye gerek kalmaz. Kimin hangi kaydı göreceğine Postgres'in satır düzeyinde güvenliği (RLS) karar verir; herkes yalnızca kendi kayıtlarını görür.",
    features: [
      "Tutar, son ödeme tarihi ve durumla ödeme takibi",
      "Tarihi geçen ödemenin kendiliğinden gecikmiş sayılması",
      "Açıklamalı ve tarihli görevler, onay kutusuyla tamamlama",
      "Sürükle bırakla elle ya da otomatik sıralama",
      "Tümü, ödenmedi, ödendi ve gecikti filtreleri",
      "Ödenmemiş tutarların toplamı ve kalan gün göstergeleri",
      "Supabase Auth ile e-posta ve şifreyle giriş, şifre sıfırlama",
      "Satır düzeyinde güvenlikle (RLS) kullanıcıya özel veri",
      "Koyu tema, mobil uyumlu arayüz ve Framer Motion geçişleri",
    ],
    challenges:
      "En çok uğraştıran kısımlar sürükle bırak sıralama, durumun tarihe göre kendiliğinden hesaplanması, satır düzeyinde güvenlik ve Türkçe tarih biçimleriydi.",
    links: [],
    screenshots: [
      "/assets/projects/tracker-web/screenshot-1.webp",
      "/assets/projects/tracker-web/screenshot-2.webp",
      "/assets/projects/tracker-web/screenshot-3.webp",
      "/assets/projects/tracker-web/screenshot-4.webp",
      "/assets/projects/tracker-web/screenshot-5.webp",
    ],
  },
  {
    slug: "qusafe-mobile",
    title: "QuSafe: Şifreli Kasa",
    description:
      "Parolalar ve notlar için şifreli bir kasa. Anahtar ana paroladan cihazda türetilir ve cihazdan hiç çıkmaz; sunucu yalnızca okuyamadığı şifreli veriyi saklar.",
    category: "Mobile",
    kind: "own",
    status: "live",
    featured: true,
    technologies: [
      "React Native",
      "Expo SDK 54",
      "Argon2id",
      "AES-256-GCM",
      "Quick Crypto",
      "Supabase",
      "MMKV",
      "Zustand",
      "RevenueCat",
      "AdMob",
      "Sentry",
    ],
    color: "from-indigo-600 to-blue-500",
    image: "/assets/projects/qusafe-mobile/icon.webp",
    showcase: {
      image: "/assets/projects/qusafe-mobile/showcase.webp",
      alt: "QuSafe uygulamasından üç ekran: modül ekranı, parola listesi ve güvenlik ayarları",
      caption:
        "Soldan sağa: ana ekran; örnek verilerle doldurulmuş parola listesi; biyometrik kilit ve otomatik kilit ayarlarının bulunduğu ayarlar ekranı. Bugün iki modül çalışıyor, parolalar ve notlar; ana ekrandaki diğer dört kareyi henüz yazmadım.",
    },
    caseStudy: "/vaka-calismalari/qusafe",
    metrics: [
      { value: "42", label: "şifreli kasa hâlâ eşitleniyor" },
      { value: "100+", label: "Google Play indirmesi" },
      { value: "10", label: "dil, biri sağdan sola" },
      { value: "636", label: "commit, 49 günde" },
    ],
    detailedDescription:
      "Kendi uygulamam: parolalar ve özel notlar için şifreli bir kasa. Şifreleme kararlarını hazır bir kütüphaneye bırakmak yerine kendim vermek istedim. Ana parola cihazda Argon2id ile (64 MiB bellek, üç geçiş) bir anahtara dönüşür; veri AES-256-GCM ile şifrelenir ve buluta giden blok hesaba bağlanır. Biyometrik kilit ana anahtarı saklamaz: Ana anahtarı rastgele üretilen ikinci bir anahtar sarar ve cihazın güvenli deposuna yalnızca o yazılır. Kasa önce cihazdaki şifreli depoya yazar, sonra bulutla eşitlenir; sunucu veriyi okuyamaz. Aralık 2025 ile Ocak 2026 arasında 636 commit'le yazdım. Uygulama yalnızca Android'de, Google Play'de 1.4.0 sürümünde; App Store sürümü yok. Bugün iki modül çalışıyor: parolalar ve notlar. 26 Ağustos 2026 itibarıyla 42 şifreli kasa hâlâ eşitleniyordu.",
    features: [
      "Ana paroladan cihazda anahtar türetme: Argon2id, 64 MiB, üç geçiş",
      "AES-256-GCM; buluttaki şifreli veri hesaba bağlı",
      "Ana anahtarı saklamayan biyometrik kilit",
      "Şifreli yerel depolama ve bulutla eşitleme",
      "Parolalar ve notlar modülleri",
      "Beş yanlış ana paroladan sonra on beş dakikalık kilit",
      "On dil, sağdan sola yazılan İbranice dâhil",
    ],
    challenges:
      "Sunucu veriyi okuyamadığı için buluttaki kopyanın aynı parolayla şifrelenip şifrelenmediğini söyleyemez; uygulama bloğu indirip çözmeyi dener, çözemiyorsa cevap budur. İbraniceye geçince sağdan sola düzen için yapılan anlık yeniden yükleme gerçek bir cihazda uygulamayı çökertiyordu; artık yeniden yükleme kullanıcı onay verdikten sonra ayrı bir adımda yapılıyor. Otomatik kilit “hemen” ayarındayken ödüllü reklam izleyen kullanıcı ödülünü alamadan kilit ekranına düşüyordu; reklam boyunca otomatik kilit artık duraklıyor. Açık kalan bir bulgu var: Hesap girişinde deneme sayacı yok, orayı yalnızca Supabase'in hız sınırı koruyor. Bununla birlikte hesap parolası kasayı açmadığı için etkisi sınırlı.",
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.schwerttr.qusafe",
      },
      { label: "Tanıtım sayfası", url: "/qusafe" },
    ],
    screenshots: [],
  },
  {
    slug: "react-native-password-intelligence",
    title: "react-native-password-intelligence",
    description:
      "Türkçe parolaları tanıyan parola gücü kiti. Standart ölçerlerin zayıf saymadığı mehmet1907, karakartal ya da askim34 gibi kalıpları yakalar; npm'de, MIT lisansıyla.",
    category: "Open Source",
    kind: "open-source",
    status: "live",
    technologies: [
      "TypeScript",
      "React Native",
      "zxcvbn-ts",
      "Expo",
      "Jest",
      "Turborepo",
      "GitHub Actions",
    ],
    color: "from-emerald-500 to-green-600",
    image: "/assets/projects/react-native-password-intelligence/demo.webp",
    imageBg: "#0f172a",
    metrics: [
      { value: "~37 kB", label: "gzip, önce 236 kB" },
      { value: "230+", label: "test" },
      { value: "0.4.1", label: "npm, provenance imzalı" },
    ],
    detailedDescription:
      "Standart parola ölçerler password123'ü zayıf sayar ama mehmet1907, karakartal ya da askim34 gibi Türkçe kalıpları zayıf bulmaz. Bu kit zxcvbn-ts motorunu Türkçeye özgü bir katmanla sarar: adlar ve soyadları, futbol kulüpleri, şehirler ve plakalar, markalar, sevgi sözcükleri ve klavye yürüyüşleri. Çekirdeği, React bağımlılığı taşımayan ayrı bir pakete (password-intelligence) ayırdım; React Native paketi bunun üzerine bir hook ve hazır bir ölçer bileşeni ekler. 0.4.0 sürümünde tam İngilizce parola listesi yerine en sık 4.000 parolayı gömerek paketin gzip boyutunu 236 kB'tan yaklaşık 37 kB'a indirdim. Altındaki Türkçe dil paketini zxcvbn-ts'e de ben ekledim (PR #315, birleştirildi). 0.4.1 sürümü 6 Eylül 2026'da npm provenance imzasıyla yayımlandı; paket React Native Directory'de iOS, Android, Web ve Expo Go desteğiyle listeleniyor.",
    features: [
      "877 kaynak terimden türetilen yaklaşık 1.260 Türkçe kayıt",
      "Adlar, soyadları, futbol kulüpleri, şehir ve plakalar, markalar, burçlar ve klavye yürüyüşleri",
      "Türkçe büyük harf onarımı: İSTANBUL34 ve ŞANLIURFA da yakalanır",
      "Türkçe uyarı ve öneri metinleri",
      "usePasswordRisk hook'u ve hazır PasswordMeter bileşeni",
      "React'siz çekirdek paket: password-intelligence (Node, Next.js, komut satırı)",
      "Yerel kod ya da Expo eklentisi gerektirmez; iOS, Android, Web ve Expo Go",
      "CI'da gzip bütçesi ve yayımlanan paket içeriği denetimi",
      "npm provenance imzalı yayın",
    ],
    challenges:
      "0.3.0 tam İngilizce parola listesini statik olarak içeri aldığı için her uygulamaya 229 kB gzip sözlük ekliyordu; Metro tree-shaking yapmadığından uygulamaların kaçışı yoktu. 0.4.0 en sık 4.000 parolayı gömüyor ve bedeli de ölçüldü: Listenin ötesindeki 1.223 gerçek sızdırılmış parolanın %3,4'ü artık 3 ya da 4 puan alıyor. Tam listeyi isteyen iki satırla geri yükleyebilir. Kütüphane istemci tarafında yalnızca puan verir, hiçbir parolayı reddetmez; NIST SP 800-63B'nin istediği engelleme listesi kontrolü sunucuda yapılmalı.",
    links: [
      { label: "npm", url: "https://www.npmjs.com/package/react-native-password-intelligence" },
      {
        label: "GitHub",
        url: "https://github.com/mobilteknolojileri/react-native-password-intelligence",
      },
      {
        label: "Canlı demo",
        url: "https://mobilteknolojileri.github.io/react-native-password-intelligence/",
      },
    ],
  },
  {
    slug: "xiaomi-bootloader-unlocker",
    title: "xiaomi-bootloader-unlocker",
    description:
      "Xiaomi'nin bootloader kilidi açma başvurusunu, günlük kota Pekin saatiyle gece yarısı sıfırlandığı anda gönderen Python komut satırı aracı. MIT lisanslı.",
    category: "Open Source",
    kind: "open-source",
    technologies: ["Python", "Requests", "urllib3", "ntplib", "Threading"],
    color: "from-orange-500 to-amber-500",
    metrics: [
      { value: "30", label: "paralel istek, ~450 ms" },
      { value: "7", label: "NTP sunucusu" },
      { value: "8", label: "GitHub yıldızı" },
    ],
    detailedDescription:
      "Xiaomi, bootloader kilidi açma başvurularını günlük bir kotayla sınırlıyor ve kota Pekin saatiyle gece yarısı sıfırlanıyor. Bu araç Xiaomi hesabınızla giriş yapar, hesabın başvuruya uygun olup olmadığını kontrol eder ve sistem saatine güvenmeden Pekin saatini NTP'den alır. Sıfırlanma anında 15 ms arayla 30 paralel istek gönderir; hepsi yaklaşık 450 ms içinde çıkar. Sonuçlar terminale ve bir günlük dosyasına yazılır. MIT lisanslı; GitHub'da 8 yıldız ve 3 fork aldı.",
    features: [
      "Xiaomi hesabıyla giriş ve hesabın başvuruya uygunluk kontrolü",
      "Yedi NTP sunucusunu sırayla deneyerek Pekin saatini alma",
      "Kota sıfırlandığı anda 15 ms arayla 30 paralel istek",
      "Ağ gecikmesine göre ayarlanabilen erken gönderim (varsayılan 100 ms)",
      "Terminal çıktısı ve oturum günlükleri",
      "Pydroid 3 ile Android'de de çalışır",
    ],
    challenges:
      "Zamanlama saniyenin altında bir hassasiyet istiyor: Başvuru, kota sıfırlandığı anda sunucuya varmalı. Bu yüzden sistem saati yerine NTP'den alınan Pekin saati kullanılıyor ve gönderim, kullanıcının ağ gecikmesine göre birkaç yüz milisaniye erken başlatılabiliyor.",
    links: [
      { label: "GitHub", url: "https://github.com/mobilteknolojileri/xiaomi-bootloader-unlocker" },
    ],
  },
];
