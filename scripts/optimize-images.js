// Older per-folder version of optimize-all-images.js
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const PWD = process.cwd();
const DIRS = [
  path.join(PWD, "public/assets/projects/fabric-detection"),
  path.join(PWD, "public/assets/projects/getyo-mobile"),
];

async function optimizeImages() {
  for (const dir of DIRS) {
    let files = [];
    try {
      files = await fs.readdir(dir);
    } catch {
      console.log(`Directory not found: ${dir}`);
      continue;
    }

    const backupDir = path.join(dir, "_originals");
    try {
      await fs.access(backupDir);
    } catch {
      await fs.mkdir(backupDir);
      console.log(`Created backup directory: ${backupDir}`);
    }

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) continue;

      if (file.endsWith(".png") || file.endsWith(".jpg") || file.endsWith(".jpeg")) {
        const parsed = path.parse(filePath);
        const webpPath = path.join(dir, `${parsed.name}.webp`);
        const backupPath = path.join(backupDir, file);

        console.log(`Optimizing: ${file}`);

        await sharp(filePath).webp({ quality: 80, effort: 6 }).toFile(webpPath);

        await fs.rename(filePath, backupPath);

        console.log(` -> webp written, original moved to ${backupPath}`);
      }
    }
  }
  console.log("\nDone. The originals are in the _originals folders;");
  console.log("delete them once the new images look right.");
}

optimizeImages().catch(console.error);
