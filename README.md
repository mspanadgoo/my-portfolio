# Mohammad Sadegh Panadgoo

Personal site and resume of Mohammad Sadegh Panadgoo, senior iOS and front-end engineer in fintech.

**Live site:** [https://www.mspanadgoo.ir](https://www.mspanadgoo.ir)

## Stack

- **Next.js 16** (App Router) with React 19
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **@react-pdf/renderer** for PDF generation
- **pnpm** for package management
- **Vercel** for deployment

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── resume.pdf/        # Static PDF route
├── components/            # React components
│   ├── ResumeView.tsx     # Main resume component for web
│   └── ResumeDocument.tsx # PDF document component
└── lib/
    ├── data/
    │   ├── profile.ts     # Single source of truth for all content
    │   └── types.ts       # TypeScript type definitions
    ├── jsonld.ts          # JSON-LD structured data
    └── site.ts            # Site configuration
```

## Editing Content

**All profile content lives in `src/lib/data/profile.ts`** — this is the single source of truth for both the web page and the PDF resume.

The file contains:

- Personal info (name, title, location, contact details, summary)
- Skills (categorized by area)
- Work experience (company, title, dates, bullets)
- Projects (title, description, image, tags, links)
- Education
- Languages

Both `ResumeView.tsx` (web page) and `ResumeDocument.tsx` (PDF) render from the same data. To update the resume, edit `profile.ts` and rebuild.

## Resume PDF Generation

`GET /resume.pdf` is a static route (`src/app/resume.pdf/route.tsx`) that generates the PDF at build time using `@react-pdf/renderer`. The PDF is automatically regenerated on every build.

The "Last updated" date shown on the PDF is controlled by `profile.resumeUpdated` in `profile.ts`.

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commands

```bash
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm check:all        # Run type check, lint, and format check
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint errors
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting
pnpm check:types      # Run TypeScript type checking
```

## CI/CD

GitHub Actions (`.github/workflows/ci.yml`) runs `pnpm check:all` and `pnpm build` on every pull request to ensure code quality and that the build succeeds.

## Docker

Build and run with Docker:

```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

The Dockerfile uses a multi-stage build with Next.js standalone output for optimal image size.

## Deployment

Deployed on **Vercel** with automatic deployments on push to `main`. The site is available at [https://www.mspanadgoo.ir](https://www.mspanadgoo.ir).

Environment variables and domain configuration are managed through the Vercel dashboard.

## License

MIT
