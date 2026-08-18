# Cristhian Martinez - Portfolio

A static-first engineering portfolio focused on product work, architecture, and technical decisions. Built with Next.js App Router, React, TypeScript, Tailwind CSS, and local typed content.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Commands

- `pnpm dev` starts the development server.
- `pnpm lint` checks code quality and Core Web Vitals rules.
- `pnpm build` creates and validates the production build.
- `pnpm start` serves the production build.

## Content

Project case studies live in `content/projects`. Add writing as local MDX in `content/blog` and register published entries in `src/content/posts.ts`. Site identity, experience, and focus areas live in `src/content/site.ts`.

Routes use the App Router under `src/app`, including static project pages, future blog pages, metadata, Open Graph imagery, `sitemap.xml`, and `robots.txt`.
