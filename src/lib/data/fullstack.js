import * as shared from "./shared";

export const data = {
  personalInfo: {
    ...shared.basePersonalInfo,
    title: "Senior Software Engineer",
    summary:
      "Full-stack engineer with 10+ years building secure financial platforms. Led architecture of banking wallets handling millions of daily transactions. Expert in NestJS, React, PostgreSQL, and event-driven microservices. Strong track record delivering scalable fintech solutions from concept to production.",
  },
  skills: shared.allSkills,
  experiences: shared.allExperiences,
  projects: shared.allProjects,
  spotlight: shared.spotlight,
  education: shared.education,
  languages: shared.languages,
};
