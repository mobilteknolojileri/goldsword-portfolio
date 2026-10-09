export interface NavItem {
  label: string;
  href: string;
  /** Home page sections that light this link up (see motion.ts) */
  sections?: string[];
  /** Extra paths that count as this page */
  match?: string[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Hizmetler",
    href: "/#services",
    sections: ["services", "process"],
    match: [
      "/mobil-uygulama-gelistirme",
      "/web-site-yapimi-gaziantep",
      "/android-destek",
      "/gaziantep-freelancer",
    ],
  },
  {
    label: "Portfolyo",
    href: "/portfolio",
    sections: ["work", "password-demo"],
    match: ["/kafadar", "/qusafe", "/legends-of-aestera"],
  },
  { label: "Vaka çalışmaları", href: "/vaka-calismalari" },
  { label: "Blog", href: "/blog" },
];

export const NAV_CTA: NavItem = { label: "İletişim", href: "/#contact", sections: ["contact"] };

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const FOOTER_GROUPS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Hizmetler",
    links: [
      { label: "Mobil uygulama geliştirme", href: "/mobil-uygulama-gelistirme" },
      { label: "Web sitesi yapımı", href: "/web-site-yapimi-gaziantep" },
      { label: "Android teknik destek", href: "/android-destek" },
      { label: "Gaziantep freelancer", href: "/gaziantep-freelancer" },
    ],
  },
  {
    title: "Site",
    links: [
      { label: "Portfolyo", href: "/portfolio" },
      { label: "Vaka çalışmaları", href: "/vaka-calismalari" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/#contact" },
    ],
  },
  {
    title: "Uygulamalar",
    links: [
      { label: "Kafadar", href: "/kafadar" },
      { label: "QuSafe", href: "/qusafe" },
      { label: "Legends of Aestera", href: "/legends-of-aestera" },
    ],
  },
  {
    title: "Profiller",
    links: [
      { label: "GitHub", href: "https://github.com/mobilteknolojileri", external: true },
      { label: "npm", href: "https://www.npmjs.com/~mobilteknolojileri", external: true },
      { label: "Bionluk", href: "https://bionluk.com/goldsword", external: true },
    ],
  },
];
