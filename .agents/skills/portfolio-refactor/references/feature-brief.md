# Portfolio Architecture Brief

## Scope

The portfolio positions Cristhian as a Software Engineer with a strong frontend foundation and growing focus on product engineering, AI-assisted development, infrastructure, and system design. It is static-first and content-driven.

## Public Routes

- `/` presents a concise hero, selected work, experience, and focus areas.
- `/projects` lists documented work.
- `/projects/[slug]` presents product context, constraints, architecture, decisions, and outcomes.
- `/blog` is prepared for local writing without adding an empty home-page section.
- `/blog/[slug]` renders registered local MDX articles.

## Experience and Projects

Experience remains compact and does not duplicate the resume. Projects emphasize product problems and engineering decisions before technology. Add only verified work; never create placeholders to fill the layout.

## Content

Project records are typed files under `content/projects`. Writing uses local MDX under `content/blog` and a small registry for metadata and static routing. The site should not require environment variables or remote data to render.

## Motion

Use performant fade and small translate reveals for related content. Keep animations optional, accessible, and secondary to readable content and clear navigation.
