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

export type Experience = {
  company: string;
  link: string;
  title: string;
  dates: string;
  location: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
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
  skills: SkillCategory[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  languages: Language[];
};
