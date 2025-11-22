import * as shared from "./shared";

const backendSkills = shared.allSkills.filter(
  (s) =>
    s.category.includes("Backend") ||
    s.category.includes("Architecture") ||
    s.category.includes("DevOps"),
);

const backendProjects = shared.allProjects.filter(
  (p) =>
    p.tags.includes("NestJS") ||
    p.tags.includes("Node.js") ||
    p.tags.includes("Architecture"),
);

export const data = {
  personalInfo: {
    ...shared.basePersonalInfo,
    title: "Senior Backend Engineer",
    summary:
      "I architect the invisible engines of fintech. As a Senior Backend Engineer, I specialize in designing resilient, event-driven microservices using NestJS and NATS. My experience includes building the core transaction engines for major banking wallets and designing scalable APIs that handle millions of transactions. I am passionate about distributed systems, clean code, and database optimization.",
  },
  skills: backendSkills,
  experiences: shared.allExperiences,
  projects: backendProjects,
  spotlight: shared.spotlight,
  education: shared.education,
  languages: shared.languages,
};
