const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "favicon-64x64.png", size: 64 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "web-app-manifest-192x192.png", size: 192 },
  { name: "web-app-manifest-512x512.png", size: 512 },
];

async function generateFavicons() {
  const mainSvgPath = path.join(__dirname, "../public/logo.svg");
  const publicDir = path.join(__dirname, "../public");

  for (const { name, size } of sizes) {
    const outputPath = path.join(publicDir, name);
    await sharp(mainSvgPath)
      .resize(size, size)
      .ensureAlpha()
      .png()
      .toFile(outputPath);
    console.log(`Generated ${name} (${size}x${size})`);
  }

  const favicon32 = await sharp(mainSvgPath)
    .resize(32, 32)
    .ensureAlpha()
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), favicon32);
  console.log("Generated favicon.ico");
}

generateFavicons().catch((error) => {
  console.error(error);
  process.exit(1);
});
