import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * srcset for a public image that has an 800px wide copy next to it (name-800.webp).
 * Runs at build time; without the copy the image is used as it is.
 */
export function smallImageSrcset(src: string | undefined, fullWidth = 1200) {
  if (!src) return undefined;
  const small = src.replace(/\.webp$/, "-800.webp");
  if (small === src || !existsSync(join(process.cwd(), "public", small))) return undefined;
  return `${small} 800w, ${src} ${fullWidth}w`;
}
