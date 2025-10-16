export const personalInfo = {
  name: "Mohammad Sadegh Panadgoo",
  title: "Senior Software Engineer",
  summary:
    "A senior software engineer with over a decade of experience architecting and building scalable, high-performance applications across the full stack. My expertise lies in engineering resilient, event-driven backends with NestJS and NATS, creating dynamic user interfaces with Next.js, and developing polished native iOS applications. I am passionate about solving complex system design challenges with clean, maintainable, and well-tested code.",
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
      "Leading the end-to-end technical architecture for a major payment application, overseeing both the Next.js frontend and the NestJS-powered, event-driven backend services.",
  },
  {
    company: "Sibbank Co.",
    link: "https://sibbank.ir",
    title: "Senior Software Engineer | Full-Stack & iOS",
    dates: "03/2024 – 06/2024",
    description:
      "Led full-stack development, architecting the primary native iOS app in Swift while simultaneously engineering its supporting backend services in Nest.js and enhancing the frontend admin dashboard.",
  },
  {
    company: "Behpardakht Mellat Co.",
    link: "https://behpardakht.com",
    title: "Senior Software Engineer",
    dates: "02/2019 – 03/2024",
    description:
      "Led a major application modernization initiative, refactoring the legacy Sekkeh iOS app to a clean MVVM architecture. This project improved startup time by 50% and established new standards for code quality.",
  },
  {
    company: "Behsazan Mellat Co.",
    link: "https://www.behsazanmellat.ir",
    title: "Software Engineer",
    dates: "04/2015 – 02/2019",
    description:
      "Engineered the flagship Mellat Mobile Bank native iOS application from concept to launch. Also maintained and extended critical legacy financial backend systems written in Delphi, ensuring business continuity.",
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
    title: "Sibbank App Store",
    description:
      "Architected and led the development of a full-stack application ecosystem, including the primary native iOS app (Swift), its supporting backend (Nest.js), and the web admin portal.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sibbank",
    link: "https://sibbank.com",
    tags: [
      "Swift",
      "Nest.js",
      "Next.js",
      "iOS",
      "Full-Stack",
      "MongoDB",
      "Redis",
    ],
  },
  {
    title: "Mellat Mobile Bank",
    description:
      "Engineered the flagship native mobile banking application for one of Iran's largest banks, architecting a secure and performant solution serving over 3 million users.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Mellat+Mobile+Bank",
    link: "https://mobile.bankmellat.ir/mobile/ios.html",
    tags: ["Swift", "Security", "Fintech", "iOS"],
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
    title: "Sekkeh Payment App Modernization",
    description:
      "Led the complete technical modernization of a legacy mobile payment app, improving startup time by 50% and boosting overall code quality and maintainability through a strategic refactor.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sekkeh",
    link: "https://sekeh.behpardakht.com",
    tags: ["Swift", "Refactoring", "Performance", "Architecture"],
  },
  {
    title: "Ketabrah E-Reader",
    description:
      "Contributed to the development of a leading native iOS e-reader application, implementing features to enhance the digital reading experience for thousands of users.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Ketabrah",
    link: "https://www.ketabrah.ir/apps",
    tags: ["Swift", "UIKit", "iOS", "User Experience"],
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
