export interface CVContact {
  email: string;
  location: string;
  github: string;
  linkedin?: string;
  twitter?: string;
  npm?: string;
  website: string;
}

export interface CVHighlight {
  title: string;
  detail: string;
  link?: string;
}

export interface CVExperience {
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface CVEducation {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export interface CVOSSContribution {
  project: string;
  contribution: string;
  link: string;
  date: string;
  status: "merged" | "review" | "open";
}

export interface CVData {
  name: string;
  headline: string;
  summary: string;
  contact: CVContact;
  highlights: CVHighlight[];
  experience: CVExperience[];
  ossContributions: CVOSSContribution[];
  education: CVEducation[];
  skills: { category: string; items: string[] }[];
  languages: { name: string; level: string }[];
}

export const CV: CVData = {
  name: "goldsword",
  headline: "Yazılım Geliştirici · React Native ve Açık Kaynak",
  summary:
    "Mobil ürünler ve Türkçeye odaklanan açık kaynak kütüphaneler geliştiriyorum. " +
    "react-native-password-intelligence paketinin yazarıyım; zxcvbn-ts ve faker-js/faker " +
    "projelerine gönderdiğim Türkçe katkılar birleştirildi. Çalıştığım alanlar: React Native " +
    "(Expo, EAS), TypeScript, Supabase, Astro, Vercel ve npm'de provenance ile OIDC'ye dayanan yayın akışları.",
  contact: {
    email: "mobilteknolojileri@gmail.com",
    location: "Türkiye",
    github: "https://github.com/mobilteknolojileri",
    npm: "https://www.npmjs.com/~mobilteknolojileri",
    website: "https://goldsword.dev",
  },
  highlights: [
    {
      title: "npm'de yayında bir kütüphane",
      detail:
        "react-native-password-intelligence v0.4.1: provenance imzalı yayın, 230+ test, gzip'le yaklaşık 37 kB. Çekirdek, React bağımlılığı olmayan ayrı bir pakette (password-intelligence). React Native Directory'de listeleniyor.",
      link: "https://www.npmjs.com/package/react-native-password-intelligence",
    },
    {
      title: "faker-js katkısı (birleştirildi)",
      detail:
        "faker-js/faker#3839: Türkçe soyadı listesi (person.lastName) 198 girdiden 370'e çıktı. Projenin 3 bakımcısı onayladı, değişiklik istenmedi; PR v10.x milestone'una eklendi.",
      link: "https://github.com/faker-js/faker/pull/3839",
    },
    {
      title: "Yayın akışı kurulumu",
      detail:
        "Paketin yayın hattını GitHub Actions OIDC, npm Trusted Publisher, SLSA provenance, branch protection ve Dependabot ile kurdum.",
    },
    {
      title: "zxcvbn-ts Türkçe dil paketi (birleştirildi)",
      detail:
        "zxcvbn-ts/zxcvbn#315: 30 bin sık kelime ve 10 bin Vikipedi kelimesiyle hazırlanan Türkçe dil paketi. 10 Mayıs 2026'da birleştirildi; npm'de @zxcvbn-ts/language-tr adıyla yayında.",
      link: "https://github.com/zxcvbn-ts/zxcvbn/pull/315",
    },
    {
      title: "30+ teslim edilmiş proje",
      detail:
        "Mobil, web, oyun ve otomasyon projeleri. Bionluk'ta 23 değerlendirme, hepsi beş yıldız; müşteri uygulamalarında 23K+ indirme.",
    },
    {
      title: "Yayımlanmış bildiri",
      detail:
        "Willow Quantum Chip and Post-Quantum Security: 12. Uluslararası Avrupa Temel Bilimlerde İleri Araştırmalar Kongresi, Tiran, Mayıs 2025.",
    },
  ],
  experience: [
    {
      role: "Kurucu Geliştirici",
      company: "Aeternaty",
      period: "2026'dan beri",
      description:
        "Dijital miras platformu: Kişinin yazdığı mektuplar vefatı doğrulandıktan sonra ya da kendi seçtiği tarihte seçtiği kişilere ulaşır.",
      highlights: [
        "Yalnızca ekleme yapılabilen denetim zinciri ve outbox tabanlı iş kuyruğu",
        "CI'da veri tabanı şemasıyla TypeScript tiplerinin birbirini tuttuğunu denetleyen kontrol",
        "Şifreleme, platformun herkese açılmasının ön koşulu olarak tasarlandı",
      ],
      technologies: ["Astro", "Cloudflare Workers", "PostgreSQL", "TypeScript"],
    },
    {
      role: "Açık Kaynak Paket Geliştirici",
      company: "react-native-password-intelligence",
      period: "Mart 2026'dan beri",
      description:
        "Türkçeye odaklanan parola gücü tahmin kütüphanesi. zxcvbn-ts'in üzerine 12 kategoriden oluşan bir Türkçe tehdit sözlüğü ekler.",
      highlights: [
        "v0.4.1'de çekirdek, React bağımlılığı olmayan ayrı bir pakette: password-intelligence",
        "Paketin gzip boyutu 236 kB'tan yaklaşık 37 kB'a indi; CI'da boyut bütçesi var",
        "230+ test; npm Trusted Publisher (OIDC) ve Sigstore provenance ile yayın",
        "Türkçe büyük harf onarımı: İSTANBUL34 ve IBRAHIM gibi kalıplar da yakalanır",
        "Sınırlı özel sözlük API'si (10 bin girdi, idempotent Set)",
        "React Native Directory'de listeleniyor; iOS, Android, Web ve Expo Go desteği var",
      ],
      technologies: [
        "TypeScript",
        "React Native",
        "zxcvbn-ts",
        "Jest",
        "GitHub Actions",
        "npm Provenance",
        "Conventional Commits",
      ],
    },
    {
      role: "Freelance Yazılım Geliştirici",
      company: "Bağımsız",
      period: "2023'ten beri",
      description:
        "Mobil ve web ürünlerini baştan sona geliştiriyorum: müşteriyle ihtiyaç analizi, geliştirme ve App Store ile Google Play'de yayın.",
      highlights: [
        "İngilizceciyiz: Öğretmenler için belge platformunu baştan yazdım; 23K+ indirme, 3.416 öğretmenin ürettiği 28.963 belge",
        "Get Yo: bir frozen yogurt dükkânı için mobil uygulama, yönetim paneli ve web sitesi; işletme el değiştirince alan adlarını, altyapıyı ve iki mağaza kaydını yeni sahibine devrettim",
        "Kafadar: paylaşım bağlantısı, uygulama kurulu olsa da olmasa da çalışan arkadaşlık testi; Google Play'de yayında",
        "QuSafe: anahtarı cihazda Argon2id ile türeten, veriyi AES-256-GCM ile şifreleyen kasa; Google Play'de yayında",
        "Paragenda: gelir ve gider takibi yapan kişisel finans uygulaması",
        "DGS Takip: Astro ve Cloudflare D1 ile yazılmış deneme analizi uygulaması",
      ],
      technologies: [
        "React Native",
        "Expo SDK 54",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Astro",
        "Cloudflare D1",
        "Vercel",
        "NativeWind",
        "Zustand",
      ],
    },
    {
      role: "Stajyer Yazılım Geliştirici",
      company: "SecHard Bilgi Teknolojileri",
      period: "2026 bahar dönemi, 16 hafta",
      description: "Mikroservis mimarisinde backend ve yönetim paneli geliştirdim.",
      highlights: [
        "Docker tabanlı mikroservis mimarisi",
        "MongoDB üzerinde Node.js ile API geliştirme",
        "Angular ile yönetim paneli arayüzleri",
      ],
      technologies: ["Docker", "Node.js", "MongoDB", "Angular"],
    },
    {
      role: "Oyun Geliştirici (Hobi)",
      company: "Bireysel projeler",
      period: "2024'ten beri",
      description:
        "Hobi olarak Godot 4.6 ve Unity ile platform ve roguelike türünde oyunlar geliştiriyorum.",
      highlights: [
        "Survivor Arena: bullet heaven türünde bir roguelike, Godot 4.6",
        "Legends of Aestera: 2B platform oyunu, Unity (C#)",
      ],
      technologies: ["Godot 4.6", "GDScript", "Unity", "C#"],
    },
  ],
  ossContributions: [
    {
      project: "faker-js/faker",
      contribution: "feat(locale): extend tr person last names (198 → 370 girdi)",
      link: "https://github.com/faker-js/faker/pull/3839",
      date: "2026-05-03",
      status: "merged",
    },
    {
      project: "@zxcvbn-ts/language-tr",
      contribution: "feat(languages): add Turkish (tr) language pack",
      link: "https://github.com/zxcvbn-ts/zxcvbn/pull/315",
      date: "2026-05-10",
      status: "merged",
    },
  ],
  education: [
    {
      degree: "Mobil Teknolojileri (Ön Lisans)",
      institution: "Trakya Üniversitesi",
      period: "2023–2025",
      detail: "Mezuniyet ortalaması: 3,79/4,00 (100 üzerinden 95,1).",
    },
  ],
  skills: [
    {
      category: "Diller",
      items: ["TypeScript", "JavaScript", "Python", "GDScript", "C#", "SQL", "Bash"],
    },
    {
      category: "Mobil",
      items: [
        "React Native",
        "Expo SDK 54",
        "EAS Build & Submit",
        "Anlık bildirim (push)",
        "OAuth (Google / Apple)",
        "Native kimlik doğrulama",
        "App Store ve Google Play'de yayın",
      ],
    },
    {
      category: "Web",
      items: [
        "Astro",
        "React 19",
        "Tailwind CSS",
        "Vercel",
        "Cloudflare Workers / D1",
        "SEO (Schema.org, OpenGraph)",
        "Vercel Analytics ve Speed Insights",
      ],
    },
    {
      category: "Backend ve veri",
      items: [
        "Supabase (Auth, RLS, Realtime, Storage)",
        "PostgreSQL",
        "REST API tasarımı",
        "Satır düzeyinde güvenlik (row-level security)",
      ],
    },
    {
      category: "Güvenlik ve kriptografi",
      items: [
        "AES-256-GCM",
        "Argon2id",
        "zxcvbn / NIST SP 800-63B",
        "Provenance (SLSA, Sigstore)",
        "OIDC trusted publishing",
      ],
    },
    {
      category: "DevOps ve yayın",
      items: [
        "GitHub Actions",
        "npm publish --provenance",
        "Trusted Publisher OIDC",
        "Conventional Commits ve Commitlint",
        "Lefthook",
        "Dependabot / Renovate",
        "Branch protection",
        "Semantic versioning",
      ],
    },
    {
      category: "Oyun geliştirme (hobi)",
      items: ["Godot 4.6", "Unity", "C#", "GDScript"],
    },
  ],
  languages: [
    { name: "Türkçe", level: "Ana dili" },
    { name: "İngilizce", level: "Mesleki çalışma düzeyi" },
  ],
};
