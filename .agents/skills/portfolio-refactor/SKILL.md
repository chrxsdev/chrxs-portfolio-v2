---
name: portfolio-refactor
description: Refactor or extend this static-first engineering portfolio while preserving its restrained editorial direction and local-content architecture.
---

# Portfolio Refactor

Preserve the Instrument Sans and Geist Mono typography, warm neutral palette, single green accent, and editorial hierarchy. Improve through composition, spacing, content, and purposeful interaction rather than decorative effects.

## Design Direction

- Favor a technical, editorial, slightly asymmetric composition over generic cards or dashboard layouts.
- Keep motion subtle and purposeful: use transform and opacity for progressive scroll reveals, stagger only related content, and respect `prefers-reduced-motion`.
- Make hover and active states tactile but restrained. Maintain readable contrast and visible keyboard focus.
- Avoid gradients, glassmorphism, decorative terminals, skill clouds, percentage indicators, and unnecessary rounded containers.

## Product Constraints

- Keep the site static-first with Server Components and local typed content.
- Do not add authentication, databases, API routes, or admin surfaces without an explicit requirement.
- Use App Router routes under `src/app`. Projects live at `/projects/[slug]`; writing lives at `/blog/[slug]` when posts exist.

Read [the feature brief](references/feature-brief.md) when the task adds or substantially changes the blog, experience timeline, projects, or admin features.
