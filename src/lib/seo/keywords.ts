export const SEO_KEYWORDS = {
  global: {
    primary: [
      "full stack developer",
      "mobile app developer",
      "freelance developer",
      "react native developer",
      "flutter developer",
      "next.js developer",
      "AI developer",
      "machine learning engineer",
      "cybersecurity developer",
      "encrypted vault developer",
    ],
    secondary: [
      "web application development",
      "mobile application development",
      "cross-platform apps",
      "AI integration",
      "custom software development",
      "unity game developer",
      "python developer",
      "typescript developer",
    ],
    services: [
      "hire freelance developer",
      "mobile app development services",
      "web development freelancer",
      "AI app development",
      "custom app development",
      "app modernization",
      "API development",
      "database design",
    ],
  },
  turkey: {
    primary: [
      "freelance yazılımcı",
      "mobil uygulama geliştirici",
      "full stack developer türkiye",
      "yazılım geliştirici",
      "flutter geliştirici",
      "react native geliştirici",
    ],
    secondary: [
      "web tasarım",
      "mobil uygulama yapımı",
      "yapay zeka uygulamaları",
      "özel yazılım geliştirme",
      "uygulama modernizasyonu",
      "şifreli kasa uygulaması",
      "güvenli not defteri",
      "parola yöneticisi geliştirme",
    ],
    local: [
      "gaziantep yazılımcı",
      "nizip yazılım",
      "gaziantep mobil uygulama",
      "gaziantep freelancer",
      "gaziantep web tasarım",
    ],
  },
  technologies: [
    "React",
    "Next.js",
    "React Native",
    "Flutter",
    "Node.js",
    "Python",
    "TypeScript",
    "Unity",
    "TensorFlow",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Docker",
    "AWS",
    "Vercel",
    "Git",
  ],
  longTail: [
    "hire experienced flutter developer",
    "freelance mobile app developer for startup",
    "custom AI chatbot development",
    "enterprise mobile app development",
    "cross-platform app developer",
    "full stack developer portfolio",
    "mobil uygulama yapımı fiyatları",
    "freelance yazılımcı bulmak",
    "özel yazılım projeleri",
    "AES-256 encrypted password manager",
    "zero knowledge cloud sync vault",
  ],
};

export function getKeywords(locale: string = "en"): string[] {
  const { global, turkey, technologies, longTail } = SEO_KEYWORDS;

  if (locale === "tr") {
    return [
      ...turkey.primary,
      ...turkey.secondary,
      ...turkey.local,
      ...technologies,
      ...longTail.filter((k) => k.includes("mobil") || k.includes("yazılım")),
    ];
  }

  return [...global.primary, ...global.secondary, ...global.services, ...technologies, ...longTail];
}
