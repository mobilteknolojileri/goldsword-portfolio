import { SITE_CONFIG } from "@/config/site";
import { normalizeBrand, normalizeDeviceModel } from "@/config/seo";

const joinUrl = (base: string, path?: string) => {
  if (!path) return base;
  if (path.startsWith("http")) return path;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

export function getPersonSchema(locale: string = SITE_CONFIG.locale) {
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    url: baseUrl,
    image: joinUrl(baseUrl, SITE_CONFIG.logo),
    sameAs: [SITE_CONFIG.links.github, SITE_CONFIG.links.bionluk],
    jobTitle: locale === "tr" ? "Full Stack Yazılım Geliştirici" : "Full Stack Software Developer",
    description:
      locale === "tr"
        ? "Freelance yazılım geliştirici. Mobil uygulama ve web sitesi geliştirir, Android telefonlarda yazılım desteği verir. 30'dan fazla proje teslim etti; React Native, Flutter, Astro ve Next.js ile çalışır."
        : "Freelance software developer building mobile apps and websites, and providing Android software support. 30+ delivered projects; works with React Native, Flutter, Astro and Next.js.",
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
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: baseUrl,
    logo: joinUrl(baseUrl, SITE_CONFIG.logo),
    description:
      locale === "tr"
        ? "Tek kişilik yazılım işi: mobil uygulama, web sitesi ve Android yazılım desteği."
        : "One-person software business: mobile apps, websites and Android software support.",
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.links.email,
      contactType: locale === "tr" ? "Müşteri Hizmetleri" : "Customer Service",
      availableLanguage: ["Turkish", "English"],
    },
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

export function getLocalBusinessSchema() {
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_CONFIG.name}: Gaziantep Freelancer Yazılım & Mobil Uygulama`,
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
  updated?: Date;
  url: string;
  image?: string;
  deviceBrand?: string;
  deviceModel?: string;
}) {
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: joinUrl(baseUrl, post.image || SITE_CONFIG.ogImage),
    datePublished: post.date.toISOString(),
    dateModified: (post.updated ?? post.date).toISOString(),
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
        url: joinUrl(baseUrl, SITE_CONFIG.logo),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };

  const deviceBrand = normalizeBrand(post.deviceBrand);
  const deviceModel = normalizeDeviceModel(post.deviceModel);
  const mentions = [
    ...(deviceBrand ? [{ "@type": "Brand", name: deviceBrand }] : []),
    ...(deviceModel ? [{ "@type": "Product", name: deviceModel }] : []),
  ];
  if (mentions.length > 0) schema.mentions = mentions;

  return schema;
}

export function getBlogFAQSchema(faqs: { question: string; answer: string }[]) {
  return getFAQSchema(faqs);
}

// Case study pages are Turkish translations of the GitHub originals
export function getCaseStudySchema(study: {
  title: string;
  description: string;
  url: string;
  image: string;
  date: Date;
  keywords: string[];
  original: string;
}) {
  const baseUrl = import.meta.env.PUBLIC_SITE_URL || SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: study.title,
    description: study.description,
    image: joinUrl(baseUrl, study.image),
    datePublished: study.date.toISOString(),
    dateModified: study.date.toISOString(),
    inLanguage: "tr-TR",
    keywords: study.keywords.join(", "),
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
        url: joinUrl(baseUrl, SITE_CONFIG.logo),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": study.url,
    },
    translationOfWork: {
      "@type": "TechArticle",
      url: study.original,
      inLanguage: "en",
    },
  };
}
