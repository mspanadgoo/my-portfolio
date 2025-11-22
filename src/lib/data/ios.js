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
      "I craft high-performance mobile banking experiences. With over a decade of engineering experience, I specialize in building secure, scalable native iOS applications for the fintech sector. I have architected and launched flagship apps like Mellat Mobile Bank and led major modernization efforts, always focusing on clean architecture (MVVM), performance optimization, and seamless user experiences.",
  },
  skills: iosSkills,
  experiences: shared.allExperiences,
  projects: iosProjects,
  spotlight: null,
  education: shared.education,
  languages: shared.languages,
};
