import type { Experience } from '@/types/content';

export const site = {
  name: 'Cristhian Martinez Lara',
  shortName: 'Cristhian Martinez',
  role: 'Software Engineer',
  description:
    'Software Engineer building thoughtful products across web interfaces, AI-enabled workflows, and the systems behind them.',
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
    role: 'Software Engineer',
    period: 'Current role',
    location: 'Guatemala / Remote',
    summary:
      'Product-focused software work spanning responsive interfaces, application architecture, and supporting APIs.',
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
