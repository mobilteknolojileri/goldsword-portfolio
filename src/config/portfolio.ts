import type { ProjectCategory, ProjectKind, ProjectStatus } from "@/lib/constants";

// Turkish labels for the keys used in the data
export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  Mobile: "Mobil",
  Web: "Web",
  Game: "Oyun",
  Backend: "Backend",
  SEO: "SEO",
  Design: "Tasarım",
  AI: "Yapay zekâ",
  "Open Source": "Açık kaynak",
};

export const KIND_LABELS: Record<ProjectKind, string> = {
  client: "Müşteri işi",
  own: "Kendi projem",
  "open-source": "Açık kaynak",
};

export const KIND_BADGE: Record<ProjectKind, string> = {
  client: "badge",
  own: "badge-gold",
  "open-source": "badge-neutral",
};

export const STATUS_LABELS: Record<ProjectStatus, string> = {
  live: "Yayında",
  "closed-test": "Kapalı test",
  archived: "Arşivde",
};
