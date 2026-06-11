export interface WorkExperience {
  title: string;
  company: string;
  companyUrl?: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  mode: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  period?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  coursework: string[];
}
