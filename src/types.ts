export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'design' | 'fullstack' | 'mobile';
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  metrics?: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: string; // e.g. 'Gevorderd', 'Expert', etc.
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  fullBio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  availableForWork: boolean;
  availabilityText: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface PortfolioData {
  profile: ProfileInfo;
  services: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  projects: Project[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
}
