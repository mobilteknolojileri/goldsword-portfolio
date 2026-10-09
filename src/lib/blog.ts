import { BLOG_CATEGORY_LABELS, SEO_DEFAULTS } from "@/config/seo";

export function getLocalizedCategory(category: string): string {
  const labels = BLOG_CATEGORY_LABELS as Record<string, string>;
  return labels[category] || category;
}

// 700 text on a 50 background keeps 4.5:1 contrast
const CATEGORY_BADGES: Record<string, string> = {
  android:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-200 dark:ring-emerald-400/25",
  mobile:
    "bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-400/10 dark:text-violet-200 dark:ring-violet-400/25",
  web: "bg-sky-50 text-sky-700 ring-sky-200 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-400/25",
  seo: "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-400/10 dark:text-amber-200 dark:ring-amber-400/25",
  "case-study":
    "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-400/10 dark:text-rose-200 dark:ring-rose-400/25",
  yazılım:
    "bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-400/10 dark:text-indigo-200 dark:ring-indigo-400/25",
  research:
    "bg-teal-50 text-teal-700 ring-teal-200 dark:bg-teal-400/10 dark:text-teal-200 dark:ring-teal-400/25",
};

export function getCategoryBadge(category: string): string {
  const tone = CATEGORY_BADGES[category] ?? CATEGORY_BADGES["yazılım"];
  return `inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tone}`;
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
