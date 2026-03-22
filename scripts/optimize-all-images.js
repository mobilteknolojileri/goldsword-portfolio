/**
 * 🖼️ Image Optimization Script
 * Converts PNG images to WebP format and resizes them appropriately.
 * Run: node scripts/optimize-all-images.js
 */
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_ASSETS = "public/assets";
const QUALITY = 80;

const RESIZE_MAP = {
  "icon.png": { width: 320, height: 320 },
  "profile.png": { width: 300, height: 300 },
};

const MAX_WIDTH = 1200;

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.name === "_originals" || entry.name === "node_modules") continue;
    if (entry.isDirectory()) {
      files.push(...(await getFiles(fullPath)));
    } else if (extname(entry.name).toLowerCase() === ".png") {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const name = basename(filePath);
  const outPath = filePath.replace(/\.png$/i, ".webp");
  
  try {
    const meta = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);
    
    const resizeConfig = RESIZE_MAP[name];
    if (resizeConfig) {
      pipeline = pipeline.resize(resizeConfig.width, resizeConfig.height, {
        fit: "cover",
        withoutEnlargement: true,
      });
    } else if (meta.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
      });
    }
    
    await pipeline.webp({ quality: QUALITY }).toFile(outPath);
    
    const originalSize = (await stat(filePath)).size;
    const newSize = (await stat(outPath)).size;
    const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
    
    console.log(
      `✅ ${name} → ${basename(outPath)} | ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${savings}%)`
    );
    
    return { original: originalSize, optimized: newSize };
  } catch (err) {
    console.error(`❌ ${name}: ${err.message}`);
    return { original: 0, optimized: 0 };
  }
}

async function main() {
  console.log("🖼️  Scanning for PNG images...\n");
  
  const files = await getFiles(PUBLIC_ASSETS);
  console.log(`Found ${files.length} PNG files\n`);
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const file of files) {
    const result = await optimizeImage(file);
    totalOriginal += result.original;
    totalOptimized += result.optimized;
  }
  
  console.log("\n" + "=".repeat(50));
  console.log(`📊 Total: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalOptimized / 1024 / 1024).toFixed(1)}MB`);
  console.log(`💾 Saved: ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(1)}MB (-${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%)`);
  console.log("=".repeat(50));
  console.log("\n⚠️  Remember to update image references in constants.ts from .png to .webp!");
}

main();
