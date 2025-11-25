export type IconName =
  | 'react'
  | 'nextjs'
  | 'javascript'
  | 'typescript'
  | 'java'
  | 'nodejs'
  | 'express'
  | 'nestjs'
  | 'spring'
  | 'postgresql'
  | 'mysql'
  | 'mongodb'
  | 'aws'
  | 'firebase'
  | 'supabase'
  | 'docker';

export interface Experience {
  id: number;
  created_at: Date;
  position: string;
  company: string;
  company_logo_url: string;
  location: string;
  from: Date;
  to: Date;
  mode: boolean;
  current_job: boolean;
  order: number;
}
export interface Skills {
  id: number;
  skill: string;
  created_at: Date;
  description: string;
}

export interface Project {
  id: number;
  project_name: string;
  description: string;
  stack: string[];
  cover_img: string;
  github: string;
  demo: string;
  created_at: Date;
}

export interface ResumeResponse {
  experience: Experience[] | null;
  skills: Skills[] | null;
  projects: Project[] | null;
}

export interface ContactRequest {
  fullname: string;
  email: string;
  project_type: string;
  message: string;
}