const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const WIDTH = 800;
const HEIGHT = 450;
const TILE = 216;
const RADIUS = 48;
const NAVY = { r: 11, g: 27, b: 59, alpha: 1 };

const logosDir = path.join(__dirname, "project-logos");

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardBaseSvg(label) {
  return Buffer.from(`
    <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${WIDTH}" height="${HEIGHT}" fill="#0B1B3B"/>
      <rect x="0" y="0" width="10" height="${HEIGHT}" fill="#E5E7EB"/>
      <text
        x="400"
        y="348"
        text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="15"
        font-weight="700"
        letter-spacing="4"
        fill="#94A3B8"
      >${escapeXml(label)}</text>
    </svg>
  `);
}

function roundedMask(size = TILE, radius = RADIUS) {
  return Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/>
    </svg>
  `);
}

function tileShadow() {
  return Buffer.from(`
    <svg width="${TILE + 16}" height="${TILE + 16}" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="8" y="10" width="${TILE}" height="${TILE}"
        rx="${RADIUS}" ry="${RADIUS}"
        fill="#000000" opacity="0.28"
      />
    </svg>
  `);
}

function svgIcon(contents, { size = TILE, background } = {}) {
  const bg = background
    ? `<rect width="${size}" height="${size}" rx="${RADIUS}" ry="${RADIUS}" fill="${background}"/>`
    : "";
  return Buffer.from(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      ${bg}
      ${contents}
    </svg>
  `);
}

async function roundTile(input, extra = []) {
  const resized = await sharp(input)
    .resize(TILE, TILE, { fit: "cover" })
    .png()
    .toBuffer();
  return sharp(resized)
    .composite([...extra, { input: roundedMask(), blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function markOnTile(markPath, { background, pad = 36 }) {
  const inner = TILE - pad * 2;
  const mark = await sharp(markPath)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
  const tile = await sharp({
    create: {
      width: TILE,
      height: TILE,
      channels: 4,
      background: background ?? { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: mark, left: pad, top: pad }])
    .png()
    .toBuffer();
  return roundTile(tile);
}

function walletIcon() {
  return svgIcon(
    `
      <rect x="38" y="62" width="140" height="96" rx="16" fill="#BA0B22"/>
      <rect x="38" y="62" width="140" height="28" rx="8" fill="#8F081A"/>
      <rect x="54" y="108" width="36" height="26" rx="5" fill="#FFC730"/>
      <circle cx="154" cy="122" r="16" fill="#FFC730"/>
      <path d="M48 62h120c0-14-12-24-28-24H76c-16 0-28 10-28 24z" fill="#D12236"/>
    `,
    { background: "#FFFFFF" },
  );
}

function jackpotIcon() {
  return svgIcon(
    `
      <text
        x="108" y="148"
        text-anchor="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="120"
        font-weight="700"
        fill="#F5D76E"
      >7</text>
      <path d="M48 48h14M55 41v14" stroke="#F8E7A1" stroke-width="4" stroke-linecap="round"/>
      <path d="M164 58h10M169 53v10" stroke="#E8C547" stroke-width="3" stroke-linecap="round"/>
    `,
    { background: "#1A1408" },
  );
}

const projects = [
  {
    file: "pulse.png",
    label: "PULSE",
    kind: "mark",
    mark: "sadad.svg",
    background: { r: 16, g: 40, b: 81, alpha: 1 },
    pad: 32,
  },
  {
    file: "iva-neobank.png",
    label: "IVA",
    kind: "mark",
    mark: "iva.svg",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
    pad: 14,
  },
  {
    file: "mellat-wallet.png",
    label: "MELLAT WALLET",
    kind: "svg",
    svg: walletIcon,
  },
  {
    file: "mellat-mobile-bank.png",
    label: "MELLAT BANK",
    kind: "mark",
    mark: "mellat.svg",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
    pad: 28,
  },
  {
    file: "sekkeh.png",
    label: "SEKKEH",
    kind: "raster",
    raster: "sekeh.webp",
  },
  {
    file: "paysib.png",
    label: "PAYSIB",
    kind: "mark",
    mark: "paysib.svg",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
    pad: 14,
  },
  {
    file: "ketabrah.png",
    label: "KETABRAH",
    kind: "raster",
    raster: "ketabrah.webp",
  },
  {
    file: "jackpot.png",
    label: "JACKPOT",
    kind: "svg",
    svg: jackpotIcon,
  },
];

async function tileFor(project) {
  if (project.kind === "raster") {
    return roundTile(path.join(logosDir, project.raster));
  }
  if (project.kind === "mark") {
    return markOnTile(path.join(logosDir, project.mark), {
      background: project.background,
      pad: project.pad,
    });
  }
  return roundTile(await sharp(project.svg()).png().toBuffer());
}

async function generateProjectCards() {
  const outDir = path.join(__dirname, "../public/projects");
  fs.mkdirSync(outDir, { recursive: true });
  const shadow = await sharp(tileShadow()).png().toBuffer();
  const left = Math.round((WIDTH - TILE) / 2);
  const top = 78;

  for (const project of projects) {
    const tile = await tileFor(project);
    const outputPath = path.join(outDir, project.file);
    await sharp(cardBaseSvg(project.label))
      .composite([
        { input: shadow, left: left - 8, top: top - 6 },
        { input: tile, left, top },
      ])
      .png({ compressionLevel: 9 })
      .toFile(outputPath);
    console.log(`Generated ${project.file}`);
  }
}

generateProjectCards().catch((error) => {
  console.error(error);
  process.exit(1);
});
