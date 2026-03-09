import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PWD = process.cwd();
const DIRS = [
    path.join(PWD, 'public/assets/projects/fabric-detection'),
    path.join(PWD, 'public/assets/projects/getyo-mobile')
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

        // Create a backup directory (_originals) if it doesn't exist
        const backupDir = path.join(dir, '_originals');
        try {
            await fs.access(backupDir);
        } catch {
            await fs.mkdir(backupDir);
            console.log(`Created backup directory: ${backupDir}`);
        }

        for (const file of files) {
            // Don't process files already in the backup folder or other extensions
            const filePath = path.join(dir, file);
            const stat = await fs.stat(filePath);
            if (stat.isDirectory()) continue;

            if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
                const parsed = path.parse(filePath);
                const webpPath = path.join(dir, `${parsed.name}.webp`);
                const backupPath = path.join(backupDir, file);

                console.log(`Optimizing: ${file}`);

                // 1. Convert to WebP
                await sharp(filePath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(webpPath);

                // 2. Move original to backup folder instead of deleting
                await fs.rename(filePath, backupPath);

                console.log(` -> WebP created & Original safely backed up to ${backupPath}`);
            }
        }
    }
    console.log("\n✅ All heavy images compressed to WebP! Originals are safe in '_originals' folders.");
    console.log("⚠️ If everything looks good, you can manually delete the '_originals' folders later to save space.");
}

optimizeImages().catch(console.error);
