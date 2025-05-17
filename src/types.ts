export interface TimelineItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
  location?: string;
}

export interface Skill {
  id: number;
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: string;
  category: 'technical' | 'soft' | 'language' | 'tools';
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Réalisation' | 'Compétence technique' | 'Compétence transverse';
  readTime: number;
  image?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  category: 'Personal' | 'Student';
}

export type Language = 'en' | 'fr';