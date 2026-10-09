import { closeSync, existsSync, openSync, readSync } from "node:fs";
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

/**
 * Pixel size of a public WebP image, read from its header at build time, so the page can
 * reserve the space before the image loads. Undefined for anything else.
 */
export function webpSize(src: string): { width: number; height: number } | undefined {
  const path = join(process.cwd(), "public", src);
  if (!src.endsWith(".webp") || !existsSync(path)) return undefined;
  const header = Buffer.alloc(30);
  const fd = openSync(path, "r");
  readSync(fd, header, 0, 30, 0);
  closeSync(fd);
  if (header.toString("ascii", 0, 4) !== "RIFF" || header.toString("ascii", 8, 12) !== "WEBP") {
    return undefined;
  }
  switch (header.toString("ascii", 12, 16)) {
    case "VP8X":
      return { width: 1 + header.readUIntLE(24, 3), height: 1 + header.readUIntLE(27, 3) };
    case "VP8 ":
      return { width: header.readUInt16LE(26) & 0x3fff, height: header.readUInt16LE(28) & 0x3fff };
    case "VP8L": {
      const bits = header.readUInt32LE(21);
      return { width: 1 + (bits & 0x3fff), height: 1 + ((bits >> 14) & 0x3fff) };
    }
    default:
      return undefined;
  }
}
