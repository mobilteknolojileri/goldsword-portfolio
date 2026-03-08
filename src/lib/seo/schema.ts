import { SITE_CONFIG } from "@/config/site";
import { normalizeBrand, normalizeDeviceModel, normalizeIntent } from "@/config/seo";

const joinUrl = (base: string, path?: string) => {
  if (!path) return base;
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

export function getPersonSchema(locale: string = SITE_CONFIG.locale) {
  const baseUrl = (import.meta as any).env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: baseUrl,
    image: joinUrl(baseUrl, SITE_CONFIG.ogImage),
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.bionluk],
    jobTitle: locale === "tr" ? "Full Stack Yazılım Geliştirici" : "Full Stack Software Developer",
    description:
      locale === "tr"
        ? "Profesyonel freelance yazılımcı. Mobil uygulama, web geliştirme, yapay zeka ve oyun geliştirme. 20+ başarılı proje. Flutter, React Native, Next.js, Unity uzmanı."
        : "Professional freelance developer. Mobile apps, web development, AI, and game development. 20+ successful projects. Expert in Flutter, React Native, Next.js, Unity.",
    knowsAbout: [
      "Flutter Development",
      "React Native",
      "Next.js",
      "Full Stack Development",
      "Mobile App Development",
      "Cybersecurity & Encryption",
      "AI/ML Integration",
      "Unity Game Development",
      "Python",
      "TypeScript",
      "Node.js",
      "Microsoft Phi-4 / DeepSeek-V3",
      "TensorFlow / PyTorch",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: locale === "tr" ? "Yazılım Geliştirici" : "Software Developer",
      occupationLocation: {
        "@type": "Country",
        name: locale === "tr" ? "Türkiye" : "Turkey",
      },
    },
  };
}

export function getOrganizationSchema(locale: string = SITE_CONFIG.locale) {
  const baseUrl = (import.meta as any).env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: baseUrl,
    logo: joinUrl(baseUrl, SITE_CONFIG.ogImage),
    description:
      locale === "tr"
        ? "Profesyonel yazılım geliştirme hizmetleri. Mobil uygulama, web sitesi, AI entegrasyonu ve oyun geliştirme."
        : "Professional software development services. Mobile apps, websites, AI integration, and game development.",
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.links.email,
      contactType: locale === "tr" ? "Müşteri Hizmetleri" : "Customer Service",
      availableLanguage: ["Turkish", "English"],
    },
  };
}

export function getPortfolioSchema(projects: any[], locale: string = SITE_CONFIG.locale) {
  const baseUrl = (import.meta as any).env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "tr" ? "Portfolyo Projeleri" : "Portfolio Projects",
    description: locale === "tr" ? "Tamamlanmış yazılım projeleri" : "Completed software projects",
    numberOfItems: projects.length,
    itemListElement: projects.slice(0, 10).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.slug ? `${baseUrl}/portfolio/${project.slug}` : baseUrl,
        keywords: project.technologies.join(", "),
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(locale: string = SITE_CONFIG.locale) {
  const services =
    locale === "tr"
      ? [
          {
            name: "Mobil Uygulama Geliştirme",
            description: "Flutter ve React Native ile iOS ve Android uygulama geliştirme",
          },
          {
            name: "Web Geliştirme",
            description: "Next.js, React ile modern web siteleri ve uygulamalar",
          },
          {
            name: "Yapay Zeka Entegrasyonu",
            description:
              "LLM (Phi-4, DeepSeek), AI Agent ve ML modelleri ile akıllı uygulama geliştirme",
          },
          {
            name: "Oyun Geliştirme",
            description: "Unity ile 2D/3D oyun geliştirme",
          },
        ]
      : [
          {
            name: "Mobile App Development",
            description: "iOS and Android app development with Flutter and React Native",
          },
          {
            name: "Web Development",
            description: "Modern websites and applications with Next.js, React",
          },
          {
            name: "AI Integration",
            description: "LLM (Phi-4, DeepSeek), AI Agent and intelligent application development",
          },
          {
            name: "Cybersecurity & Secure Systems",
            description: "Encrypted vaults and secure data management systems with AES-256",
          },
          {
            name: "Game Development",
            description: "2D/3D game development with Unity",
          },
        ];

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "Person",
      name: SITE_CONFIG.name,
    },
    serviceType: locale === "tr" ? "Yazılım Geliştirme" : "Software Development",
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "tr" ? "Yazılım Hizmetleri" : "Software Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
  };
}

export function getLocalBusinessSchema() {
  const baseUrl = (import.meta as any).env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_CONFIG.name} - Gaziantep Freelancer Yazılım & Mobil Uygulama`,
    image: joinUrl(baseUrl, SITE_CONFIG.ogImage),
    "@id": `${baseUrl}/#localbusiness`,
    url: baseUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gaziantep",
      addressCountry: "TR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "22:00",
    },
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.bionluk],
    priceRange: "$$",
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBlogPostingSchema(post: {
  title: string;
  description: string;
  date: Date;
  url: string;
  image?: string;
  intent?: string;
  deviceBrand?: string;
  deviceModel?: string;
}) {
  const baseUrl = (import.meta as any).env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: joinUrl(baseUrl, post.image || SITE_CONFIG.ogImage),
    datePublished: post.date.toISOString(),
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: joinUrl(baseUrl, SITE_CONFIG.ogImage),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };

  const intent = normalizeIntent(post.intent);
  const deviceBrand = normalizeBrand(post.deviceBrand);
  const deviceModel = normalizeDeviceModel(post.deviceModel);
  if (intent || deviceBrand || deviceModel) {
    schema.mentions = [];
    if (intent) schema.mentions.push({ "@type": "Thing", name: intent });
    if (deviceBrand) schema.mentions.push({ "@type": "Brand", name: deviceBrand });
    if (deviceModel) schema.mentions.push({ "@type": "Thing", name: deviceModel });
  }

  return schema;
}

export function getBlogFAQSchema(faqs: { question: string; answer: string }[]) {
  return getFAQSchema(faqs);
}
