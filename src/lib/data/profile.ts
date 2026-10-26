import type { Profile } from "./types";

export const profile: Profile = {
  personalInfo: {
    name: "Mohammad Sadegh Panadgoo",
    headline: "Senior iOS & Front-End Engineer · Fintech & Payments",
    title: "Lead Software Engineer",
    company: "Sadad Electronic Payment (Sadad PSP · Bank Melli)",
    email: "mspanadgoo@me.com",
    linkedin: "https://linkedin.com/in/mspanadgoo",
    github: "https://github.com/mspanadgoo",
    location: "Tehran, Iran · GMT+3:30 · Open to relocation (EU) and remote",
    summary:
      "Senior iOS and front-end engineer with 11+ years in fintech and payments. I shipped Sadad's Iva neobank platform, raising throughput from ~3 TPS to 200+ TPS and growing transaction volume 3–5x, while leading a cross-functional team of 18 at Sadad PSP (Bank Melli's payment provider). Earlier I built v1 of Mellat Mobile Bank for iOS, later serving 3M+ users.",
  },
  resumeUpdated: "2026-10-26",
  skills: [
    {
      category: "Native iOS",
      subcategories: [
        {
          title: "Languages & UI",
          items: ["Swift", "SwiftUI", "UIKit", "Objective-C"],
        },
        {
          title: "Architecture & tooling",
          items: ["MVVM", "Swift Concurrency", "Swift Package Manager"],
        },
      ],
    },
    {
      category: "Web",
      subcategories: [
        {
          title: "Languages & frameworks",
          items: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
        },
      ],
    },
    {
      category: "Backend & platform (project experience)",
      subcategories: [
        {
          title: "Runtime, APIs, and data",
          items: [
            "Node.js",
            "NestJS",
            "NATS",
            "REST APIs",
            "PostgreSQL",
            "Redis",
            "MongoDB",
          ],
        },
      ],
    },
    {
      category: "Testing & delivery",
      subcategories: [
        {
          title: "Testing",
          items: ["Playwright", "XCTest", "Jest"],
        },
        {
          title: "Delivery",
          items: ["Docker", "GitHub Actions", "Fastlane"],
        },
      ],
    },
    {
      category: "Domain",
      subcategories: [
        {
          title: "Payments",
          items: ["Payments", "PSP", "Neobank"],
        },
      ],
    },
  ],
  experiences: [
    {
      company: "Sadad Electronic Payment (Sadad PSP · Bank Melli)",
      link: "https://sadadpsp.ir",
      title: "Lead Software Engineer",
      dates: "Jun 2024 – Present",
      location: "Tehran, Iran",
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
      bullets: [
        "Lead a cross-functional team of 18 at Sadad PSP, the payment provider for Bank Melli (7 .NET, 3 front-end, 5 Android, plus Scrum Master, QA engineer, and DevOps).",
        "Mentor engineers on Iva and Pulse and run technical reviews across backend, web, and iOS.",
        "Shipped the new Iva payment/neobank platform; raised throughput from ~3 TPS to 200+ TPS and grew transaction volume 3–5x versus the previous Iva.",
        "Lead Pulse (iOS/Swift) for Bank Melli merchants: transaction history, dashboards, and in-app support (tickets, receipt rolls, discrepancies).",
        "Introduced Playwright end-to-end tests for the Iva Next.js front-end.",
      ],
    },
    {
      company: "Behpardakht Mellat",
      link: "https://behpardakht.com",
      title: "Senior Software Engineer",
      dates: "Feb 2019 – Mar 2024",
      location: "Tehran, Iran",
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
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
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
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
      imageAlt: "Sadad emblem on a navy card for Pulse Merchant App",
      link: "https://cafebazaar.ir/app/ir.sadadpsp.sadadMerchant",
      tags: ["Swift", "iOS", "Fintech", "Reporting"],
      featured: true,
      linkAvailability: "global",
    },
    {
      title: "Iva Neobank Platform",
      description:
        "Led architecture for Sadad's new Iva neobank platform. Throughput went from about 3 TPS to 200+ TPS, and transaction volume rose 3–5x after launch.",
      image: "/projects/iva-neobank.png",
      imageAlt:
        "Iva wordmark and blue mark on a navy card for the Iva neobank platform",
      link: "https://ivaapp.com",
      tags: ["Architecture", "Event-Driven", "NATS", "NestJS", "System Design"],
      featured: true,
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
    },
    {
      title: "Mellat Bank Wallet",
      description:
        "Designed and built the core microservices for a banking wallet, including the high-throughput transaction engine, partner APIs, and payment gateway for partners such as Irancell.",
      image: "/projects/mellat-wallet.png",
      imageAlt: "Mellat-red wallet mark on a navy card for Mellat Bank Wallet",
      link: "https://behpardakht.com",
      tags: ["Architecture", "Microservices", "NestJS", "Fintech", "Node.js"],
      featured: true,
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
    },
    {
      title: "Mellat Mobile Bank",
      description:
        "Built the native iOS app for one of Iran's largest banks, later serving 3M+ users.",
      image: "/projects/mellat-mobile-bank.png",
      imageAlt: "Bank Mellat emblem on a navy card for Mellat Mobile Bank",
      link: "https://mobile.bankmellat.ir/mobile/ios.html",
      tags: ["Swift", "Security", "Fintech", "Scale", "iOS"],
      featured: true,
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
    },
    {
      title: "Sekkeh App Modernization",
      description:
        "Refactored a production payment app to MVVM and cut startup time by 50%.",
      image: "/projects/sekkeh.png",
      imageAlt: "Sekkeh app icon on a navy card",
      link: "https://sekeh.behpardakht.com",
      tags: ["Swift", "Refactoring", "Performance", "Architecture"],
      featured: true,
      linkAvailability: "iran-only",
      linkNote: "Site may be unavailable outside Iran",
    },
    {
      title: "Paysib Currency Exchange",
      description:
        "Built a currency exchange platform: the trading interface in Next.js and the backend transaction logic in Node.js.",
      image: "/projects/paysib.png",
      imageAlt:
        "Paysib stencil wordmark on a navy card for the currency exchange",
      link: "https://paysib.com",
      tags: ["Next.js", "Node.js", "MongoDB", "Fintech", "Security"],
      featured: true,
      linkAvailability: "global",
    },
    {
      title: "Ketabrah E-Reader",
      description:
        "Contributed new features to one of Iran's leading iOS e-reader apps.",
      image: "/projects/ketabrah.png",
      imageAlt: "Ketabrah book mark on a navy card for the iOS e-reader",
      link: "https://www.ketabrah.ir/apps",
      tags: ["Swift", "UIKit", "iOS", "User Experience"],
      featured: true,
      linkAvailability: "global",
    },
    {
      title: "Jackpot Fun Game",
      description:
        "A simple jackpot game I built for my son, using React and CSS animations.",
      image: "/projects/jackpot.png",
      imageAlt:
        "Gold seven mark on a navy card for a personal React jackpot game",
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
      detail: "Native language",
    },
    {
      language: "English",
      proficiency: "Professional proficiency",
      detail: "Used at work, in documentation, and in interviews",
    },
    {
      language: "German",
      proficiency: "Intermediate",
      detail: "Completed B1 level",
    },
  ],
};
