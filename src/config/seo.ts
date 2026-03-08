export const SEO_DEFAULTS = {
  locale: "tr",
  defaultOgImage: "/logo.png",
  readingTimeWpm: 200,
  blogTitleSuffix: " | goldsword",
} as const;

export const BLOG_CATEGORY_LABELS = {
  seo: "SEO",
  web: "Web Tasarım",
  mobile: "Mobil Uygulama",
  research: "Araştırma",
  "case-study": "Vaka Çalışması",
} as const;

export const COPY_TOKENS = {
  blogListCta: "Yazıyı Oku",
  blogContactCta: "Proje Konuşalım",
  blogContactSecondaryCta: "E-posta Gönder",
} as const;

export const CONTENT_INTENTS = ["how-to", "troubleshooting", "comparison", "guide"] as const;

export type ContentIntent = (typeof CONTENT_INTENTS)[number];

export const CONTENT_INTENT_LABELS: Record<ContentIntent, string> = {
  "how-to": "Adım Adım Rehber",
  troubleshooting: "Sorun Giderme",
  comparison: "Karşılaştırma",
  guide: "Detaylı Rehber",
};

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

export function normalizeIntent(intent?: string): ContentIntent | undefined {
  if (!intent) return undefined;
  const normalized = intent.trim().toLowerCase() as ContentIntent;
  return CONTENT_INTENTS.includes(normalized) ? normalized : undefined;
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
