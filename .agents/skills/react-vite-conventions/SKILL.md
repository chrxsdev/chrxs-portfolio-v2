---
name: react-vite-conventions
description: Apply this repository's React, TypeScript, Tailwind, and Supabase conventions when implementing or refactoring portfolio features. Do not use for general design direction.
---

# React Vite Conventions

Use the existing Vite, React, TypeScript, Tailwind 4, and Supabase stack. Keep changes within it unless the user explicitly requests a migration.

## Code

- Write functional TSX components with explicit interfaces for props and complex data.
- Use 2-space indentation, semicolons, and single quotes in TypeScript. Use `import type` for type-only imports and avoid `any`.
- Prefer named exports, `PascalCase` component filenames, `use*` camelCase hooks, and the `@/` aliases.
- Do not edit generated `src/router.ts`; modify routes in `src/pages` instead.

## UI and Data

- Use Tailwind utilities and existing CSS variables. Combine conditional classes with `cn()`.
- Build mobile-first, semantic, accessible interfaces. Provide meaningful alt text, keyboard-visible focus, and loading/error handling for async Supabase work.
- Verify a package is already declared in `package.json` before importing it. Add dependencies only when they are justified by the task.

## Validation

Run `pnpm lint` and `pnpm build` after implementation. Manually check affected routes because this project has no automated test suite yet.
