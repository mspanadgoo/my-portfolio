import * as shared from "./shared";

const frontendSkills = shared.allSkills
  .filter(
    (s) =>
      s.category.includes("Frontend") ||
      s.category.includes("Architecture") ||
      s.category.includes("Mobile"),
  )
  .sort((a, b) => {
    if (a.category.includes("Frontend")) return -1;
    if (b.category.includes("Frontend")) return 1;
    return 0;
  });

const frontendProjects = shared.allProjects.filter(
  (p) =>
    p.tags.includes("Next.js") ||
    p.tags.includes("React") ||
    p.tags.includes("Frontend") ||
    p.tags.includes("User Experience") ||
    p.title.includes("App"),
);

export const data = {
  personalInfo: {
    ...shared.basePersonalInfo,
    title: "Senior Frontend Engineer",
    summary:
      "Senior Frontend Engineer with 10+ years building responsive, accessible web applications for high-traffic banking platforms. Expert in Next.js, React, and Tailwind CSS. Proven track record optimizing core web vitals and translating complex requirements into seamless user experiences.",
  },
  skills: frontendSkills,
  experiences: shared.allExperiences,
  projects: frontendProjects,
  spotlight: null,
  education: shared.education,
  languages: shared.languages,
};
