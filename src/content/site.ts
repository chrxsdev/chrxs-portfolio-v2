import type { Experience } from '@/types/content';

export const site = {
  name: 'Cristhian Martinez Lara',
  shortName: 'chrxs.dev',
  role: 'Software Engineer',
  description:
    'Frontend-led Software Engineer shipping product experiences, backend integrations, and cloud systems from idea to production.',
  url: 'https://chrxs.vercel.app',
  location: 'Comayagua, Honduras',
  links: {
    github: 'https://github.com/chrxsdev',
    linkedin: 'https://www.linkedin.com/in/chrxsdev',
    resume:
      'https://drive.google.com/file/d/1FbsYJ3AGG1Fw1Fg1Ba1ZCNMjr34op-CQ/view?usp=sharing',
  },
} as const;

export const experience: Experience[] = [
  {
    company: 'Vana',
    role: 'Frontend Engineer',
    period: 'Dec 2025 - Present',
    location: 'Guatemala / Remote',
    summary:
      'Own frontend architecture and feature delivery for a fintech product across access control, card flows, API integration, and mobile-browser edge cases.',
  },
  {
    company: 'Acklen Avenue',
    role: 'Full-stack Developer',
    period: 'Jan 2025 - Aug 2025',
    location: 'Nashville / Remote',
    summary:
      'Shipped React product flows, Braintree payment integrations, AWS observability, and a secure React Native image-processing workflow.',
  },
  {
    company: 'CDE Mipyme',
    role: 'Backend Web Developer',
    period: 'Jul 2024 - Dec 2024',
    location: 'Tegucigalpa, Honduras',
    summary:
      'Improved NestJS document generation and PostgreSQL query performance while delivering platform features and supporting system migrations.',
  },
  {
    company: 'Applaudo',
    role: 'Java Trainee',
    period: 'Oct 2022 - Apr 2023',
    location: 'San Salvador / Remote',
    summary:
      'Built and secured a Spring Boot commerce API with Keycloak, tested through JUnit and Mockito with continuous integration.',
  },
];

export const focusAreas = [
  'Product engineering',
  'Frontend architecture',
  'AI-assisted development',
  'Cloud infrastructure',
  'System design',
] as const;

export const coreTechnologies = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'AWS',
  'PostgreSQL',
] as const;
