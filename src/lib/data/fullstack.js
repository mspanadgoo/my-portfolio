import * as shared from "./shared";

export const data = {
  personalInfo: {
    ...shared.basePersonalInfo,
    title: "Senior Software Engineer",
    summary:
      "I build the systems that move money. As a senior software engineer with over a decade of experience, my passion is engineering the secure and scalable backends at the heart of financial technology. I was a key architect on the Behpardakht Mellat banking wallet, where I got hands-on experience building everything from the core transaction engine to partner integration APIs. I thrive on the challenges of event-driven architecture and creating robust platforms from the ground up.",
  },
  skills: shared.allSkills,
  experiences: shared.allExperiences,
  projects: shared.allProjects,
  spotlight: shared.spotlight,
  education: shared.education,
  languages: shared.languages,
};
