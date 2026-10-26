export type PersonalInfo = {
  name: string;
  headline: string;
  title: string;
  company: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  summary: string;
};

export type SkillCategory = {
  category: string;
  subcategories: { title: string; items: string[] }[];
};

export type LinkAvailability = "global" | "iran-only";

export type Experience = {
  company: string;
  link: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
  linkAvailability?: LinkAvailability;
  linkNote?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  link: string;
  tags: string[];
  featured?: boolean;
  linkAvailability?: LinkAvailability;
  linkNote?: string;
};

export type Education = {
  degree: string;
  university: string;
  dates: string;
};

export type Language = {
  language: string;
  proficiency: string;
  detail: string;
};

export type Profile = {
  personalInfo: PersonalInfo;
  resumeUpdated: string;
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  languages: Language[];
};
