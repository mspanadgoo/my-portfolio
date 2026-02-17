import * as shared from "./shared";

const iosSkills = shared.allSkills
  .filter(
    (s) => s.category.includes("iOS") || s.category.includes("Architecture"),
  )
  .sort((a, b) => (a.category.includes("iOS") ? -1 : 1));

const iosProjects = shared.allProjects.filter(
  (p) => p.tags.includes("iOS") || p.tags.includes("Swift"),
);

export const data = {
  personalInfo: {
    ...shared.basePersonalInfo,
    title: "Senior iOS Engineer",
    summary:
      "Senior iOS Engineer with 10+ years building secure, scalable native banking applications. Architected and launched flagship apps serving millions of users. Expert in Swift, MVVM architecture, and performance optimization. Led major modernization efforts reducing app startup time by 50%.",
  },
  skills: iosSkills,
  experiences: shared.allExperiences,
  projects: iosProjects,
  spotlight: null,
  education: shared.education,
  languages: shared.languages,
};
