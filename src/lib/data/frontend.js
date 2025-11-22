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
      "I build pixel-perfect, high-performance user interfaces. As a Senior Frontend Engineer with extensive experience in the fintech sector, I specialize in creating responsive, accessible, and dynamic web applications using Next.js, React, and Tailwind CSS. I have a strong background in translating complex design requirements into seamless user experiences, optimizing core web vitals, and architecting scalable frontend codebases for high-traffic banking platforms.",
  },
  skills: frontendSkills,
  experiences: shared.allExperiences,
  projects: frontendProjects,
  spotlight: null,
  education: shared.education,
  languages: shared.languages,
};
