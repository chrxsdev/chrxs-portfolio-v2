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

export interface ResumeResponse {
  experience?: Experience[];
  skills?: Skills[];
}
