# Mohammad Sadegh Panadgoo

Personal site and resume of Mohammad Sadegh Panadgoo, a senior iOS and front-end engineer in fintech. Live at [https://www.mspanadgoo.ir](https://www.mspanadgoo.ir).

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, pnpm, `@react-pdf/renderer`. Deployed on Vercel.

## Content

All profile copy lives in `src/lib/data/profile.ts` (types in `src/lib/data/types.ts`). The page (`src/components/ResumeView.tsx`) and the PDF (`src/components/ResumeDocument.tsx`) both render from that file. Do not add employers, dates, or metrics that are not already in the data.

## Resume PDF

`GET /resume.pdf` is a static route (`src/app/resume.pdf/route.tsx`) that renders `ResumeDocument` with `renderToBuffer` at build time. The Download Resume button and the footer link both point at `/resume.pdf`. The “Last updated” date is `profile.resumeUpdated`.

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm check:all
pnpm build
```

CI (`.github/workflows/ci.yml`) runs `pnpm check:all` and `pnpm build` on pull requests.

## Docker

```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```
