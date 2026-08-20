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
      "A software engineer with a decade of experience designing, building, and scaling high-quality applications. My expertise spans the stack, from native iOS development and high-performance frontend with Next.js, to engineering resilient, event-driven backends with NestJS and message brokers like NATS. I am passionate about solving complex challenges with clean, maintainable architecture.",
  },
  skills: [
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
        {
          title: "System Design",
          items: ["Microservices", "SOLID Principles"],
        },
        {
          title: "Tools & Containerization",
          items: ["Docker", "Git", "Jest"],
        },
        {
          title: "CI/CD",
          items: ["GitHub Actions", "Mobile CI/CD Pipelines"],
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
      description:
        "As the architectural lead, I am defining the entire technology vision for the new version of Iva, our payment and neobank application. My goal is to create a highly scalable system that guarantees a flawless and fast user experience for the mobile app. I also lead Pulse, the native iOS merchant app for Bank Melli acquirers on the Sadad PSP network — transaction details, statistics, and in-app support that used to require a branch, the web portal, or a phone call.",
    },
    {
      company: "Sibbank",
      link: "https://sibbank.ir",
      title: "Senior Software Engineer",
      dates: "Mar 2024 – Jun 2024",
      location: "Tehran, Iran",
      description:
        "Developed and enhanced frontend features for a web application using Next.js (React) and TypeScript, improving user-facing components and interactions. Contributed to backend API services using Nest.js. Led the development of a native iOS application using SwiftUI and MVVM, gaining deep experience in declarative UI and state management patterns.",
    },
    {
      company: "Behpardakht Mellat",
      link: "https://behpardakht.com",
      title: "Senior Software Engineer",
      dates: "Feb 2019 – Mar 2024",
      location: "Tehran, Iran",
      description:
        "Architected and developed complex, feature-rich applications used by millions of users. Led the modernization of the main application's architecture (from MVC to MVVM), significantly improving testability and maintainability. Reduced technical debt by refactoring legacy code and minimizing dependencies on third-party libraries, resulting in a more stable and performant application.",
    },
    {
      company: "Behsazan Mellat",
      link: "https://www.behsazanmellat.ir",
      title: "iOS Developer",
      dates: "Apr 2015 – Feb 2019",
      location: "Tehran, Iran",
      description:
        "Developed and maintained features for a large-scale mobile banking application. Collaborated with security teams to implement robust security measures and improve the overall user experience. Built the first version of the flagship Mellat Mobile Bank iOS app.",
    },
  ],
  projects: [
    {
      title: "Pulse Merchant App",
      description:
        "Native iOS app for Bank Melli merchants on the Sadad PSP network. Merchants inspect transaction details and statistics through daily and weekly dashboards, charts by amount and volume, and in-app support — tickets, receipt-roll requests, and discrepancy reports.",
      image: "/projects/pulse.png",
      link: "https://cafebazaar.ir/app/ir.sadadpsp.sadadMerchant",
      tags: ["Swift", "iOS", "Fintech", "Reporting"],
    },
    {
      title: "Iva Neobank Platform",
      description:
        "I designed the entire system architecture for a new neobank. My solution was a resilient, event-driven backend using Node.js and NATS to ensure safe, asynchronous processing of financial transactions.",
      image: "/projects/iva-neobank.png",
      link: "https://ivaapp.com",
      tags: ["Architecture", "Event-Driven", "NATS", "NestJS", "System Design"],
    },
    {
      title: "Mellat Bank Wallet",
      description:
        "As a key architect, I designed and built the core microservices for a new banking wallet, including the high-throughput transaction engine, partner APIs, and payment gateway for partners like Irancell.",
      image: "/projects/mellat-wallet.png",
      link: "https://behpardakht.com",
      tags: ["Architecture", "Microservices", "NestJS", "Fintech", "Node.js"],
    },
    {
      title: "Mellat Mobile Bank",
      description:
        "Engineered the flagship native mobile banking app for one of Iran's largest banks. I architected a secure and performant solution designed to reliably serve over 3 million users.",
      image: "/projects/mellat-mobile-bank.png",
      link: "https://mobile.bankmellat.ir/mobile/ios.html",
      tags: ["Swift", "Security", "Fintech", "Scale", "iOS"],
    },
    {
      title: "Sibbank App Store",
      description:
        "Architected and led the development of a full-stack application ecosystem, including the primary native iOS app (Swift), its supporting backend (Nest.js), and the web admin portal.",
      image: "/projects/sibbank.png",
      link: "https://sibbank.com",
      tags: ["Swift", "Nest.js", "Next.js", "Full-Stack", "iOS"],
    },
    {
      title: "Sekkeh App Modernization",
      description:
        "I led the complete technical overhaul of a major payment app. By strategically refactoring the codebase to a modern MVVM architecture, we cut startup time by 50% and boosted system maintainability.",
      image: "/projects/sekkeh.png",
      link: "https://sekeh.behpardakht.com",
      tags: ["Swift", "Refactoring", "Performance", "Architecture"],
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
