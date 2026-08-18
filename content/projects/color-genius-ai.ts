import type { Project } from '@/types/content';

export const colorGeniusAi = {
  slug: 'color-genius-ai',
  title: 'Color Genius AI',
  category: 'AI-enabled product',
  summary:
    'A color system that turns natural-language direction into accessible, production-ready palettes.',
  problem:
    'Creative direction is easy to describe but difficult to translate into a coherent set of color tokens that works in production.',
  product:
    'Color Genius AI combines model-generated intent with deterministic color checks, interactive controls, and code exports for practical design workflows.',
  decisions: [
    'Separated AI providers behind a strategy interface so product behavior is not tied to one model vendor.',
    'Used OKLCH controls and color-harmony validation to keep generated output adjustable and predictable.',
    'Made contrast checks and export formats part of the core workflow rather than optional utilities.',
  ],
  architecture: [
    'Next.js App Router and React Server Components',
    'Provider-based AI generation with Google Gemini or OpenAI',
    'Supabase authentication, PostgreSQL persistence, and row-level security',
    'Typed color conversion and code-generation utilities',
  ],
  constraints: [
    'Model output needs deterministic guardrails before it can become a usable design token.',
    'Color adjustments must remain perceptually natural across light and dark interfaces.',
    'Generated palettes need to move cleanly into existing CSS and Tailwind workflows.',
  ],
  outcome:
    'An open-source product that connects AI exploration with accessible color checks and export-ready implementation details.',
  technologies: ['Next.js', 'TypeScript', 'React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
  thumbnail: {
    src: '/color_ai_thumbnail.png',
    alt: 'Color Genius AI palette generator interface in a browser window',
    width: 1920,
    height: 1280,
  },
  links: [
    { label: 'View source', href: 'https://github.com/chrxsdev/color-genius-ai' },
    { label: 'Open product', href: 'https://color-genius-ai.vercel.app' },
  ],
  featured: true,
} satisfies Project;
