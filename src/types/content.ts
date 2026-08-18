export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectThumbnail {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  product: string;
  decisions: string[];
  architecture: string[];
  constraints: string[];
  outcome: string;
  technologies: string[];
  links: ProjectLink[];
  thumbnail: ProjectThumbnail;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
}

export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
}
