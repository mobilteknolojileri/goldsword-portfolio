export function getPersonSchema(locale: string = "en") {
  const name = "goldsword";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldsword.dev";

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    url: baseUrl,
    image: `${baseUrl}/logo.png`,
    sameAs: [
      "https://github.com/mobilteknolojileri",
      "https://bionluk.com/goldsword",
    ],
    jobTitle:
      locale === "tr"
        ? "Full Stack Yazılım Geliştirici"
        : "Full Stack Software Developer",
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

export function getOrganizationSchema(locale: string = "en") {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldsword.dev";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "goldsword",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      locale === "tr"
        ? "Profesyonel yazılım geliştirme hizmetleri. Mobil uygulama, web sitesi, AI entegrasyonu ve oyun geliştirme."
        : "Professional software development services. Mobile apps, websites, AI integration, and game development.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "mobilteknolojileri@gmail.com",
      contactType: locale === "tr" ? "Müşteri Hizmetleri" : "Customer Service",
      availableLanguage: ["Turkish", "English"],
    },
  };
}

export function getPortfolioSchema(projects: any[], locale: string = "en") {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldsword.dev";

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: locale === "tr" ? "Portfolyo Projeleri" : "Portfolio Projects",
    description:
      locale === "tr"
        ? "Tamamlanmış yazılım projeleri"
        : "Completed software projects",
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

export function getServiceSchema(locale: string = "en") {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://goldsword.dev";

  const services =
    locale === "tr"
      ? [
          {
            name: "Mobil Uygulama Geliştirme",
            description:
              "Flutter ve React Native ile iOS ve Android uygulama geliştirme",
          },
          {
            name: "Web Geliştirme",
            description:
              "Next.js, React ile modern web siteleri ve uygulamalar",
          },
          {
            name: "Yapay Zeka Entegrasyonu",
            description: "AI/ML modelleri ve akıllı uygulama geliştirme",
          },
          {
            name: "Oyun Geliştirme",
            description: "Unity ile 2D/3D oyun geliştirme",
          },
        ]
      : [
          {
            name: "Mobile App Development",
            description:
              "iOS and Android app development with Flutter and React Native",
          },
          {
            name: "Web Development",
            description: "Modern websites and applications with Next.js, React",
          },
          {
            name: "AI Integration",
            description: "AI/ML models and intelligent application development",
          },
          {
            name: "Cybersecurity & Secure Systems",
            description:
              "Encrypted vaults and secure data management systems with AES-256",
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
      name: "goldsword",
    },
    serviceType:
      locale === "tr" ? "Yazılım Geliştirme" : "Software Development",
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
