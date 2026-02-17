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
      "Senior Backend Engineer with 10+ years designing secure, high-throughput transaction engines and event-driven microservices for major banking wallets. Built core payment APIs serving millions of daily transactions. Deep expertise in NestJS, NATS, PostgreSQL, and distributed systems architecture.",
  },
  skills: backendSkills,
  experiences: shared.allExperiences,
  projects: backendProjects,
  spotlight: shared.spotlight,
  education: shared.education,
  languages: shared.languages,
};
