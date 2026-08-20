const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const projects = [
  {
    file: "pulse.png",
    title: "Pulse Merchant App",
    tags: "Swift · iOS · Fintech",
  },
  {
    file: "mellat-wallet.png",
    title: "Mellat Bank Wallet",
    tags: "Architecture · Microservices · Fintech",
  },
  {
    file: "iva-neobank.png",
    title: "Iva Neobank Platform",
    tags: "Event-Driven · NATS · NestJS",
  },
  {
    file: "mellat-mobile-bank.png",
    title: "Mellat Mobile Bank",
    tags: "Swift · iOS · Scale",
  },
  {
    file: "sibbank.png",
    title: "Sibbank App Store",
    tags: "Swift · Nest.js · Full-Stack",
  },
  {
    file: "sekkeh.png",
    title: "Sekkeh App Modernization",
    tags: "Swift · Performance · MVVM",
  },
  {
    file: "jackpot.png",
    title: "Jackpot Fun Game",
    tags: "React · CSS Animations",
  },
  {
    file: "paysib.png",
    title: "Paysib Currency Exchange",
    tags: "Next.js · Node.js · Fintech",
  },
  {
    file: "ketabrah.png",
    title: "Ketabrah E-Reader",
    tags: "Swift · UIKit · iOS",
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapTitle(title) {
  if (title.length <= 22) return [title];
  const words = title.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > 22 && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 2);
}

function cardSvg(title, tags) {
  const lines = wrapTitle(title);
  const titleTspans = lines
    .map((line, index) => {
      const dy = index === 0 ? 0 : 52;
      return `<tspan x="56" dy="${dy}">${escapeXml(line)}</tspan>`;
    })
    .join("");

  return Buffer.from(`
    <svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="450" fill="#0B1B3B"/>
      <rect x="0" y="0" width="10" height="450" fill="#E5E7EB"/>
      <text
        x="56"
        y="188"
        font-family="Helvetica, Arial, sans-serif"
        font-size="42"
        font-weight="700"
        fill="#E5E7EB"
      >${titleTspans}</text>
      <text
        x="56"
        y="320"
        font-family="Helvetica, Arial, sans-serif"
        font-size="20"
        fill="#94A3B8"
      >${escapeXml(tags)}</text>
    </svg>
  `);
}

async function generateProjectCards() {
  const outDir = path.join(__dirname, "../public/projects");
  fs.mkdirSync(outDir, { recursive: true });

  for (const project of projects) {
    const outputPath = path.join(outDir, project.file);
    await sharp(cardSvg(project.title, project.tags)).png().toFile(outputPath);
    console.log(`Generated ${project.file}`);
  }
}

generateProjectCards().catch((error) => {
  console.error(error);
  process.exit(1);
});
