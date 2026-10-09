export const SEO_DEFAULTS = {
  locale: "tr",
  defaultOgImage: "/og.png",
  readingTimeWpm: 200,
  blogTitleSuffix: " | goldsword",
} as const;

export const BLOG_CATEGORY_LABELS = {
  seo: "SEO",
  web: "Web tasarım",
  mobile: "Mobil uygulama",
  research: "Araştırma",
  "case-study": "Vaka çalışması",
  yazılım: "Yazılım",
  android: "Android destek",
} as const;

export const COPY_TOKENS = {
  blogListCta: "Yazıyı okuyun",
  blogContactCta: "Projenizi konuşalım",
  blogContactSecondaryCta: "E-posta gönderin",
} as const;

export const CONTENT_INTENTS = ["how-to", "troubleshooting", "comparison", "guide"] as const;

const BRAND_ALIASES: Record<string, string> = {
  apple: "Apple",
  samsung: "Samsung",
  xiaomi: "Xiaomi",
  huawei: "Huawei",
  oneplus: "OnePlus",
  google: "Google",
};

export function normalizeBrand(brand?: string): string | undefined {
  if (!brand) return undefined;
  const key = brand.trim().toLowerCase();
  return BRAND_ALIASES[key] ?? brand.trim();
}

export function normalizeDeviceModel(model?: string): string | undefined {
  if (!model) return undefined;
  return model.trim().replace(/\s+/g, " ");
}

export const EDITORIAL_GUIDE = {
  sentenceLengthTarget: "8-22 words",
  headingConvention: "One intent per heading; avoid vague headings",
  ctaVoice: "Direct, useful, and specific",
  forbiddenPatterns: ["[PLACEHOLDER]", "Lorem ipsum", "Asagidaki maddelerde", "robotik tekrarlar"],
} as const;
