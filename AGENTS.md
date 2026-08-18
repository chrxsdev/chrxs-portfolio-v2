# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js App Router portfolio using React 19, TypeScript, and Tailwind CSS 4. Routes and metadata files live in `src/app`; reusable UI belongs in `src/components`; typed site data lives in `src/content`; project records live in `content/projects`; future articles belong in `content/blog`. Keep static assets in `public`.

## Build, Test, and Development Commands
Use `pnpm` because the repo ships with `pnpm-lock.yaml`.

- `pnpm dev` starts the Next.js development server.
- `pnpm build` creates the optimized production build and validates types.
- `pnpm start` serves the production build locally.
- `pnpm lint` runs ESLint with Next.js Core Web Vitals rules.

## Coding Style & Naming Conventions
Write TypeScript/TSX with 2-space indentation, single quotes, and semicolons. Use `PascalCase` components, `camelCase` utilities, explicit prop interfaces, and `import type` for type-only imports. Avoid `any`. Prefer `@/` for `src` imports and `@content/` for project content. Keep components as Server Components unless browser APIs or interaction require `'use client'`.

## Refactor Guardrails
Keep the site static-first and content-driven. Projects and writing use local typed content; do not add databases, authentication, API routes, or client fetching without a concrete requirement. Preserve the restrained editorial system: Instrument Sans, Geist Mono, warm neutrals, one green accent, subtle borders, and reduced-motion support. Avoid decorative gradients, glass effects, skill clouds, and unnecessary JavaScript.

## Testing Guidelines
No automated test runner or coverage gate is configured. Every change must pass `pnpm lint` and `pnpm build`, followed by a browser check of affected routes at desktop and mobile widths. If tests are introduced, use `*.test.ts` or `*.test.tsx` near the feature.

## Commit & Pull Request Guidelines
Use concise, imperative Conventional Commit subjects such as `feat: add project case study` or `fix: improve mobile navigation`. Pull requests should explain user-facing impact, include screenshots for visual changes, and confirm `pnpm lint` and `pnpm build` passed.
