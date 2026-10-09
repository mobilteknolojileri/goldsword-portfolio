export interface CountSpec {
  to: number;
  decimals: number;
  prefix: string;
  suffix: string;
}

// Parses "23K+", "11.277", "3,79" and the like for the count-up in motion.ts.
// Returns null for anything else, which then stays static.
export function parseCount(value: string): CountSpec | null {
  const match = value.trim().match(/^([^\d]*?)(\d{1,3}(?:\.\d{3})+|\d+)(?:,(\d+))?([^\d]*)$/);
  if (!match) return null;
  const [, prefix = "", integer = "", fraction, suffix = ""] = match;
  const to = Number(`${integer.replace(/\./g, "")}${fraction ? `.${fraction}` : ""}`);
  if (!Number.isFinite(to)) return null;
  return { to, decimals: fraction?.length ?? 0, prefix, suffix };
}
