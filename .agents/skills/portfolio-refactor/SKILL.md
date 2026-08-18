---
name: portfolio-refactor
description: Refactor or extend this portfolio while preserving its established brand and Supabase backend. Use for work on portfolio pages, the planned blog, experience timeline, projects, or private admin surfaces.
---

# Portfolio Refactor

Preserve the current typography, color palette, and CSS theme tokens. Improve the product through composition, hierarchy, spacing, component shape, and motion; do not replace the visual identity unless the user explicitly asks.

## Design Direction

- Favor a modern, editorial, slightly asymmetric portfolio composition over generic dashboard or equal-card layouts.
- Keep motion subtle and purposeful: use transform and opacity for progressive scroll reveals, stagger only related content, and respect `prefers-reduced-motion`.
- Make hover and active states tactile but restrained. Maintain readable contrast and visible keyboard focus.
- Keep public portfolio content, blog reading, and admin management visually related without making the admin interface a copy of a generic sidebar dashboard.

## Product Constraints

- Continue using Supabase for persisted data and authentication. Do not introduce a replacement backend.
- Admin access is private: no public sign-up or password-reset flows. Avoid exposing credentials in client code.
- Use file-based routes under `src/pages`. Blog routes should follow `/blog` and `/blog/[slug]`; admin routes should be isolated under `/admin`.

Read [the feature brief](references/feature-brief.md) when the task adds or substantially changes the blog, experience timeline, projects, or admin features.
