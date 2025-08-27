export const personalInfo = {
  name: "Mohammad Sadegh Panadgoo",
  title: "Senior Software Engineer",
  summary:
    "A senior software engineer with a decade of experience designing, building, and scaling high-quality applications. My expertise spans the stack, from native iOS development and high-performance frontend with Next.js, to engineering resilient, event-driven backends with NestJS and message brokers like NATS. I am passionate about solving complex challenges with clean, maintainable architecture.",
  email: "mspanadgoo@me.com",
  linkedin: "https://linkedin.com/in/mspanadgoo",
  github: "https://github.com/mspanadgoo",
  resumePdf: "/Mohammad-Sadegh-Panadgoo-Resume.pdf",
};

export const skills = [
  {
    category: "Backend Development",
    subcategories: [
      {
        title: "Frameworks & Runtimes",
        items: ["NestJS", "Fastify", "Express.js", "Node.js"],
      },
      {
        title: "Databases & Caching",
        items: ["PostgreSQL", "MongoDB", "Redis", "T-SQL"],
      },
      {
        title: "Messaging & Event Streaming",
        items: ["NATS (JetStream)", "Event-Driven Architecture"],
      },
    ],
  },
  {
    category: "Frontend Development",
    subcategories: [
      { title: "Frameworks & Libraries", items: ["Next.js", "React"] },
      {
        title: "Languages & Core Web",
        items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
      },
      {
        title: "Styling & UI",
        items: ["Tailwind CSS", "SCSS/SASS", "shadcn/ui"],
      },
    ],
  },
  {
    category: "Native iOS Development",
    subcategories: [
      { title: "Languages", items: ["Swift", "Objective-C"] },
      { title: "Frameworks & UI", items: ["SwiftUI", "UIKit", "XCTest"] },
      { title: "Architecture", items: ["MVVM", "Clean Architecture"] },
    ],
  },
  {
    category: "Architecture & DevOps",
    subcategories: [
      { title: "System Design", items: ["Microservices", "SOLID Principles"] },
      { title: "Tools & Containerization", items: ["Docker", "Git", "Jest"] },
      { title: "CI/CD", items: ["GitHub Actions", "Mobile CI/CD Pipelines"] },
    ],
  },
];

export const experiences = [
  {
    company: "Sadad PSP Co.",
    link: "https://sadadpsp.ir",
    title: "Lead Software Engineer | Backend & Frontend",
    dates: "06/2024 – Present",
    description:
      "Leading the end-to-end technical architecture for a major payment application, overseeing both the Next.js frontend and the NestJS-powered backend services.",
  },
  {
    company: "Sibbank Co.",
    link: "https://sibbank.ir",
    title: "Senior Software Engineer | iOS, Backend & Frontend",
    dates: "03/2024 – 06/2024",
    description:
      "Architected and built the main native iOS app in Swift, while also engineering its supporting backend services with Nest.js and improving the frontend admin dashboard.",
  },
  {
    company: "Behpardakht Mellat Co.",
    link: "https://behpardakht.com",
    title: "Senior Software Engineer | iOS, Backend & Frontend",
    dates: "02/2019 – 03/2024",
    description:
      "Led the complete technical modernization of the legacy Sekkeh iOS app. Migrated the entire codebase to a clean MVVM architecture, which boosted startup time by 50%.",
  },
  {
    company: "Behsazan Mellat Co.",
    link: "https://www.behsazanmellat.ir",
    title: "Software Engineer | iOS & Backend (Delphi)",
    dates: "04/2015 – 02/2019",
    description:
      "Developed the Mellat Mobile Bank native iOS app from zero. Also maintained and extended legacy financial backend systems written in Delphi.",
  },
];

export const projects = [
  {
    title: "Iva Neobank Platform",
    description:
      "Designed the core system architecture for a new neobank platform, architecting a resilient, event-driven backend using NestJS and NATS for asynchronous processing of financial transactions.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Iva",
    link: "https://ivaapp.com",
    tags: ["Architecture", "Event-Driven", "NATS", "NestJS", "System Design"],
  },
  {
    title: "Paysib Currency Exchange",
    description:
      "Engineered a secure, full-stack currency exchange platform, crafting the user-facing trading interface with Next.js and the backend logic with Node.js.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Paysib",
    link: "https://paysib.com",
    tags: ["Next.js", "Node.js", "MongoDB", "Redis", "Fintech", "Security"],
  },
  {
    title: "Mellat Mobile Bank",
    description:
      "Developed the flagship native iOS application for one of Iran's largest banks, serving over 3 million users with a focus on security and performance.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Mellat+Mobile+Bank",
    link: "https://mobile.bankmellat.ir/mobile/ios.html",
    tags: ["Swift", "Security", "Fintech", "iOS"],
  },
  {
    title: "Ketabrah E-Reader",
    description:
      "Contributed to the native iOS application for a leading digital bookstore, enhancing the e-reading experience for thousands of users.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Ketabrah",
    link: "https://www.ketabrah.ir/apps",
    tags: ["Swift", "UIKit", "iOS"],
  },
  {
    title: "Sibbank App Store",
    description:
      "Architected and built the primary native iOS application from the ground up, leading the project from concept to App Store launch.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sibbank",
    link: "https://sibbank.com",
    tags: ["Swift", "MVVM", "iOS", "Next.js", "Node.js", "MongoDB", "Redis"],
  },
  {
    title: "Sekkeh Payment App",
    description:
      "Led the complete technical modernization of a legacy iOS payment app, improving startup time by 50% and boosting code quality.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sekkeh",
    link: "https://sekeh.behpardakht.com",
    tags: ["Swift", "Refactoring", "Performance"],
  },
];

export const education = [
  {
    degree: "Master's Degree, Computer Software Engineering",
    university: "Azad University",
    dates: "2013 – 2018",
  },
  {
    degree: "Bachelor's Degree, Computer Software Engineering",
    university: "Azad University",
    dates: "2008 – 2012",
  },
];
