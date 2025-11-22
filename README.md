# Mohammad Sadegh Panadgoo - Personal Portfolio & Dynamic Resume System

This repository contains the source code for my personal portfolio website. More than just a static site, this is a **Dynamic Resume System** built with Next.js, TypeScript, and Tailwind CSS.

It features a unique architecture that allows me to present different professional personas (Full Stack, iOS, Backend, Frontend) from a single codebase, complete with on-the-fly PDF resume generation.

<br />

<p align="center">
  <a href="https://mspanadgoo.ir" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-mspanadgoo.ir-blue?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
</p>

---

## ✨ Key Features

- **🎭 Multi-Profile Architecture**: The site dynamically renders different content, skills, and summaries based on the URL or configuration.
  - **Full Stack** (Default)
  - **iOS Engineer**: Focuses on Swift, UIKit, and mobile architecture.
  - **Backend Engineer**: Highlights NestJS, Microservices, and System Design.
  - **Frontend Engineer**: Showcases Next.js, React, and UI/UX skills.
- **📄 Dynamic PDF Generation**: Generates ATS-friendly, distinct PDF resumes for each profile on the fly using `@react-pdf/renderer`.
- **🔒 Secret Routes**: Access specific profiles via unique URLs (e.g., `/r/ios`, `/r/backend`) without changing the main homepage.
- **⚡ High Performance**: Powered by **pnpm** and Next.js App Router.
- **🐳 Dockerized**: Production-ready multi-stage Docker build.

---

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![React PDF](https://img.shields.io/badge/React_PDF-D00000?style=for-the-badge&logo=adobeacrobatreader&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

---

## 🚀 Running Locally

This project uses **pnpm** for package management.

### Prerequisites

- Node.js (v18 or later)
- pnpm (`npm install -g pnpm`)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mspanadgoo/my-portfolio.git
   ```

2. **Navigate to the directory:**

   ```bash
   cd my-portfolio
   ```

3. **Install dependencies:**

   ```bash
   pnpm install
   ```

4. **Run the development server:**

   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ⚙️ Configuration & Profiles

### Changing the Main Page Profile

You can change which resume is shown on the home page (`/`) by setting an Environment Variable.

**Available Roles:** `fullstack` (default), `ios`, `backend`, `frontend`.

In your `.env.local` or deployment settings:

```bash
NEXT_PUBLIC_DEFAULT_ROLE=ios
```

### Accessing "Secret" Routes

Even if the main page is set to Full Stack, you can access (and share) specific versions of the resume using these routes:

- `localhost:3000/r/ios`
- `localhost:3000/r/backend`
- `localhost:3000/r/frontend`

---

## 🐳 Docker Deployment

The project includes an optimized multi-stage `Dockerfile`.

**Build the image:**

```bash
docker build -t my-portfolio .
```

**Run the container (Default Full Stack):**

```bash
docker run -p 3000:3000 my-portfolio
```

**Run the container (Switch to iOS Profile):**
You can change the website content without rebuilding the image:

```bash
docker run -p 3000:3000 -e NEXT_PUBLIC_DEFAULT_ROLE=ios my-portfolio
```

---

## 📫 Contact

Mohammad Sadegh Panadgoo - [mspanadgoo@me.com](mailto:mspanadgoo@me.com)

LinkedIn: [linkedin.com/in/mspanadgoo](https://linkedin.com/in/mspanadgoo)
