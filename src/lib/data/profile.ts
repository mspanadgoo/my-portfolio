import type { Profile } from "./types";

export const profile: Profile = {
  personalInfo: {
    name: "Mohammad Sadegh Panadgoo",
    headline: "Lead Software Engineer",
    title: "Principal Software Engineer",
    company: "Sadad Electronic Payment",
    email: "mspanadgoo@me.com",
    linkedin: "https://linkedin.com/in/mspanadgoo",
    github: "https://github.com/mspanadgoo",
    location: "Tehran, Iran",
    summary:
      "Lead Software Engineer with 11+ years in fintech. Native iOS (Swift, SwiftUI), TypeScript, Next.js, and event-driven NestJS/NATS backends. Currently leading Iva (neobank) and Pulse (merchant iOS) at Sadad Electronic Payment.",
  },
  skills: [
    {
      category: "Backend Development",
      subcategories: [
        {
          title: "Frameworks & Runtimes",
          items: ["NestJS", "Nest.js", "Fastify", "Express.js", "Node.js"],
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
      category: "Testing",
      subcategories: [
        {
          title: "End-to-End",
          items: ["Playwright", "end-to-end testing"],
        },
        {
          title: "Unit & Integration",
          items: ["Jest", "XCTest", "unit testing"],
        },
      ],
    },
    {
      category: "Architecture & DevOps",
      subcategories: [
        {
          title: "System Design",
          items: ["Microservices", "SOLID Principles"],
        },
        {
          title: "Tools & Containerization",
          items: ["Docker", "Git"],
        },
        {
          title: "CI/CD",
          items: ["GitHub Actions", "iOS CI/CD"],
        },
      ],
    },
  ],
  experiences: [
    {
      company: "Sadad Electronic Payment",
      link: "https://sadadpsp.ir",
      title: "Principal Software Engineer",
      dates: "Jun 2024 – Present",
      location: "Tehran, Iran",
      bullets: [
        "Lead a cross-functional team of 18 (7 .NET, 3 frontend, 5 Android, plus Scrum Master, tester, and DevOps).",
        "Shipped the new Iva payment/neobank platform; raised throughput from ~3 TPS to 200+ TPS with no lag, and grew transaction volume 3-5x versus the previous Iva.",
        "Lead Pulse (iOS/Swift) for Bank Melli merchants: transaction history, dashboards, and in-app support (tickets, receipt rolls, discrepancies).",
        "Introduced Playwright end-to-end tests for the Iva Next.js frontend.",
      ],
    },
    {
      company: "Sibbank",
      link: "https://sibbank.ir",
      title: "Senior Software Engineer",
      dates: "Mar 2024 – Jun 2024",
      location: "Tehran, Iran",
      bullets: [
        "Shipped native iOS (SwiftUI, MVVM) plus Next.js UI and Nest.js APIs for the flagship product.",
      ],
    },
    {
      company: "Behpardakht Mellat",
      link: "https://behpardakht.com",
      title: "Senior Software Engineer",
      dates: "Feb 2019 – Mar 2024",
      location: "Tehran, Iran",
      bullets: [
        "Modernized a production payment app from MVC to MVVM; cut startup time ~50% and reduced third-party surface area.",
        "Built high-throughput wallet services (transactions, partners, payment gateway) used with partners such as Irancell.",
      ],
    },
    {
      company: "Behsazan Mellat",
      link: "https://www.behsazanmellat.ir",
      title: "iOS Developer",
      dates: "Apr 2015 – Feb 2019",
      location: "Tehran, Iran",
      bullets: [
        "Built v1 of Mellat Mobile Bank (iOS), later serving 3M+ users, with security-focused client work.",
      ],
    },
  ],
  projects: [
    {
      title: "Pulse Merchant App",
      description:
        "Native iOS app for Bank Melli merchants on the Sadad PSP network. Merchants inspect transaction details and statistics through daily and weekly dashboards, charts by amount and volume, and in-app support: tickets, receipt-roll requests, and discrepancy reports.",
      image: "/projects/pulse.png",
      link: "https://cafebazaar.ir/app/ir.sadadpsp.sadadMerchant",
      tags: ["Swift", "iOS", "Fintech", "Reporting"],
      featured: true,
    },
    {
      title: "Iva Neobank Platform",
      description:
        "Led the architecture of Sadad's new Iva neobank platform. Throughput went from about 3 TPS to 200+ TPS with no lag, and transaction volume rose 3-5x after launch.",
      image: "/projects/iva-neobank.png",
      link: "https://ivaapp.com",
      tags: ["Architecture", "Event-Driven", "NATS", "NestJS", "System Design"],
      featured: true,
    },
    {
      title: "Mellat Bank Wallet",
      description:
        "As a key architect, I designed and built the core microservices for a new banking wallet, including the high-throughput transaction engine, partner APIs, and payment gateway for partners like Irancell.",
      image: "/projects/mellat-wallet.png",
      link: "https://behpardakht.com",
      tags: ["Architecture", "Microservices", "NestJS", "Fintech", "Node.js"],
      featured: true,
    },
    {
      title: "Mellat Mobile Bank",
      description:
        "Engineered the flagship native mobile banking app for one of Iran's largest banks. I architected a secure and performant solution designed to reliably serve over 3 million users.",
      image: "/projects/mellat-mobile-bank.png",
      link: "https://mobile.bankmellat.ir/mobile/ios.html",
      tags: ["Swift", "Security", "Fintech", "Scale", "iOS"],
      featured: true,
    },
    {
      title: "Sibbank App Store",
      description:
        "Architected and led the development of a full-stack application ecosystem, including the primary native iOS app (Swift), its supporting backend (Nest.js), and the web admin portal.",
      image: "/projects/sibbank.png",
      link: "https://sibbank.com",
      tags: ["Swift", "Nest.js", "Next.js", "Full-Stack", "iOS"],
      featured: true,
    },
    {
      title: "Sekkeh App Modernization",
      description:
        "I led the complete technical overhaul of a major payment app. By strategically refactoring the codebase to a modern MVVM architecture, we cut startup time by 50% and boosted system maintainability.",
      image: "/projects/sekkeh.png",
      link: "https://sekeh.behpardakht.com",
      tags: ["Swift", "Refactoring", "Performance", "Architecture"],
      featured: true,
    },
    {
      title: "Paysib Currency Exchange",
      description:
        "Engineered a secure, full-stack currency exchange platform. I built the user-facing trading interface with Next.js and the core backend transaction logic with Node.js.",
      image: "/projects/paysib.png",
      link: "https://paysib.com",
      tags: ["Next.js", "Node.js", "MongoDB", "Fintech", "Security"],
    },
    {
      title: "Ketabrah E-Reader",
      description:
        "Contributed to one of Iran's leading iOS e-reader apps. My work focused on implementing new features to enhance the digital reading experience for its large user base.",
      image: "/projects/ketabrah.png",
      link: "https://www.ketabrah.ir/apps",
      tags: ["Swift", "UIKit", "iOS", "User Experience"],
    },
    {
      title: "Jackpot Fun Game",
      description:
        "A simple and fun jackpot game I built for my son. Developed with React and CSS animations to create an engaging and playful user experience.",
      image: "/projects/jackpot.png",
      link: "/jackpot",
      tags: ["React", "CSS Animations", "Frontend", "Personal Project"],
    },
  ],
  education: [
    {
      degree: "Master's Degree, Computer Software Engineering",
      university: "Azad University, Central Tehran Branch",
      dates: "2013 – 2018",
    },
    {
      degree: "Bachelor's Degree, Computer Software Engineering",
      university: "Azad University of Shahr-e-Qods",
      dates: "2008 – 2012",
    },
  ],
  languages: [
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
  ],
};
