import { BLOG_CATEGORY_LABELS, SEO_DEFAULTS } from "@/config/seo";

export function getLocalizedCategory(category: string): string {
  const labels = BLOG_CATEGORY_LABELS as Record<string, string>;
  return labels[category] || category;
}

export function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / SEO_DEFAULTS.readingTimeWpm);
  return Math.max(time, 1);
}

export interface TocItem {
  id: string;
  text: string;
  depth: number;
}

export function buildToc(headings: { depth: number; slug: string; text: string }[]): TocItem[] {
  return headings
    .filter((h) => h.depth === 2 || h.depth === 3)
    .map((h) => ({
      id: h.slug,
      text: h.text,
      depth: h.depth,
    }));
}

export function formatDate(date: Date, locale = "tr-TR"): string {
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
