// lib/data/shared.js

export const basePersonalInfo = {
  name: "Mohammad Sadegh Panadgoo",
  email: "mspanadgoo@me.com",
  linkedin: "https://linkedin.com/in/mspanadgoo",
  github: "https://github.com/mspanadgoo",
  resumePdf: "/Mohammad-Sadegh-Panadgoo-Resume.pdf", // You might want different PDFs later
};

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

export const languages = [
  {
    language: "Persian",
    proficiency: "Native",
    detail: "Mother Tongue",
  },
  {
    language: "English",
    proficiency: "Professional Proficiency",
    detail: "IELTS General Training: 6.0 (Each Skill)",
  },
  {
    language: "German",
    proficiency: "Intermediate",
    detail: "Completed B1 Level",
  },
];

export const spotlight = {
  title: "Spotlight: Architecting a Banking Wallet",
  description:
    "At Behpardakht Mellat, I was part of the core team that designed and built a modern, microservices-based banking wallet from scratch. My primary focus was on the critical backend infrastructure that ensured security, scalability, and reliability.",
  responsibilities: {
    title: "Key Responsibilities",
    items: [
      "Designed the high-throughput transaction engine.",
      "Engineered the core wallet and ledger system.",
      "Built the payment gateway & user management services.",
      "Developed the partner API for major integrations (Irancell).",
    ],
  },
  technologies: {
    title: "Core Technologies",
    items: [
      "NestJS",
      "Node.js",
      "Microservices",
      "Event-Driven Architecture",
      "PostgreSQL",
    ],
  },
};

export const allSkills = [
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

export const allExperiences = [
  {
    company: "Sadad PSP Co.",
    link: "https://sadadpsp.ir",
    title: "Lead Software Engineer | Backend & Frontend",
    dates: "06/2024 – Present",
    description:
      "As the technical lead, I'm architecting a new major payment application from end to end. My role involves designing the core event-driven backend using NestJS and NATS while simultaneously steering the development of a scalable Next.js frontend.",
  },
  {
    company: "Sibbank Co.",
    link: "https://sibbank.ir",
    title: "Senior Software Engineer | Full-Stack & iOS",
    dates: "03/2024 – 06/2024",
    description:
      "I owned their flagship product, architecting and building both the native iOS application in Swift and its entire supporting backend in Nest.js. This involved designing all APIs, database schemas, and ensuring secure, seamless communication between the client and server.",
  },
  {
    company: "Behpardakht Mellat Co.",
    link: "https://behpardakht.com",
    title: "Senior Software Engineer",
    dates: "02/2019 – 03/2024",
    description:
      "I was a key engineer in the development of a new, greenfield banking wallet built on a microservices architecture. My work was central to the platform's success, as I designed and built the high-throughput transaction engine that served as the wallet's core. I also architected several critical microservices for User Management, Partner Management, and the Payment Gateway, which were essential for onboarding major partners like IRANCELL and scaling the ecosystem.",
  },
  {
    company: "Behsazan Mellat Co.",
    link: "https://www.behsazanmellat.ir",
    title: "Software Engineer",
    dates: "04/2015 – 02/2019",
    description:
      "I built the first version of the flagship Mellat Mobile Bank iOS app, translating complex financial requirements into a secure and user-friendly mobile experience. My responsibilities also included maintaining mission-critical legacy backend systems, which gave me a deep understanding of core banking logic and system stability.",
  },
];

export const allProjects = [
  {
    title: "Mellat Bank Wallet",
    description:
      "As a key architect, I designed and built the core microservices for a new banking wallet, including the high-throughput transaction engine, partner APIs, and payment gateway for partners like Irancell.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Mellat+Wallet",
    link: "https://behpardakht.com",
    tags: ["Architecture", "Microservices", "NestJS", "Fintech", "Node.js"],
  },
  {
    title: "Iva Neobank Platform",
    description:
      "I designed the entire system architecture for a new neobank. My solution was a resilient, event-driven backend using NestJS and NATS to ensure safe, asynchronous processing of financial transactions.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Iva",
    link: "https://ivaapp.com",
    tags: ["Architecture", "Event-Driven", "NATS", "NestJS", "System Design"],
  },
  {
    title: "Mellat Mobile Bank",
    description:
      "Engineered the flagship native mobile banking app for one of Iran's largest banks. I architected a secure and performant solution designed to reliably serve over 3 million users.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Mellat+Mobile+Bank",
    link: "https://mobile.bankmellat.ir/mobile/ios.html",
    tags: ["Swift", "Security", "Fintech", "Scale", "iOS"],
  },
  {
    title: "Sibbank App Store",
    description:
      "Architected and led the development of a full-stack application ecosystem, including the primary native iOS app (Swift), its supporting backend (Nest.js), and the web admin portal.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sibbank",
    link: "https://sibbank.com",
    tags: ["Swift", "Nest.js", "Next.js", "Full-Stack", "iOS"],
  },
  {
    title: "Sekkeh App Modernization",
    description:
      "I led the complete technical overhaul of a major payment app. By strategically refactoring the codebase to a modern MVVM architecture, we cut startup time by 50% and boosted system maintainability.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Sekkeh",
    link: "https://sekeh.behpardakht.com",
    tags: ["Swift", "Refactoring", "Performance", "Architecture"],
  },
  {
    title: "Jackpot Fun Game",
    description:
      "A simple and fun jackpot game I built for my son. Developed with React and CSS animations to create an engaging and playful user experience. A great exercise in state management and UI.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Jackpot+Game",
    link: "/jackpot",
    tags: ["React", "CSS Animations", "Frontend", "Personal Project"],
  },
  {
    title: "Paysib Currency Exchange",
    description:
      "Engineered a secure, full-stack currency exchange platform. I built the user-facing trading interface with Next.js and the core backend transaction logic with Node.js.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Paysib",
    link: "https://paysib.com",
    tags: ["Next.js", "Node.js", "MongoDB", "Fintech", "Security"],
  },
  {
    title: "Ketabrah E-Reader",
    description:
      "Contributed to one of Iran's leading iOS e-reader apps. My work focused on implementing new features to enhance the digital reading experience for its large user base.",
    image: "https://placehold.co/800x450/1F2937/60A5FA?text=Ketabrah",
    link: "https://www.ketabrah.ir/apps",
    tags: ["Swift", "UIKit", "iOS", "User Experience"],
  },
];
