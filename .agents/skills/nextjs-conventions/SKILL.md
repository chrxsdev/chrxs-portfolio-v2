---
name: nextjs-conventions
description: Apply this repository's Next.js App Router, TypeScript, Tailwind, and local-content conventions when implementing or refactoring portfolio features.
---

# Next.js Conventions

Use the existing Next.js App Router, React, TypeScript, Tailwind CSS 4, and local-content architecture. Do not add a database, authentication, API route, or client-side fetching without a concrete product requirement.

## Code

- Write strict TypeScript with 2-space indentation, semicolons, and single quotes.
- Use explicit interfaces, `import type` for type-only imports, and avoid `any`.
- Prefer Server Components. Add `'use client'` only for browser APIs, stateful interaction, or event handlers.
- Define routes, metadata, loading, and error boundaries with App Router file conventions under `src/app`.
- Use `@/` for `src` imports and `@content/` for root content imports.

## Content and UI

- Keep project records typed and local under `content/projects`; keep future articles in `content/blog` as MDX.
- Use `next/image`, `next/font`, and metadata APIs instead of manual equivalents.
- Build semantic, keyboard-accessible, mobile-first interfaces with meaningful alt text and reduced-motion support.
- Check `package.json` before importing a dependency and avoid client JavaScript for static presentation.

## Validation

Run `pnpm lint` and `pnpm build`, then check affected routes at desktop and mobile widths.
