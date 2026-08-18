import { colorGeniusAi } from './color-genius-ai';
import { xatruch } from './xatruch';

export const projects = [colorGeniusAi, xatruch];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
