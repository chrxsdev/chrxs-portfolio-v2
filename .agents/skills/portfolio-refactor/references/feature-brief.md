# Portfolio Refactor Brief

## Scope

The portfolio is evolving into a public platform for work, experience, and writing, backed by Supabase. Retain its existing fonts and colors.

## Public Routes

- `/` presents the portfolio and key sections.
- `/projects` presents selected work with a title, summary, stack, links, and thumbnail.
- `/blog` lists posts with an excerpt, date, reading time, and tags.
- `/blog/[slug]` renders readable content with headings, code, images, and quotes.
- `/experience` may be a dedicated route or a substantial home-page section.

## Experience and Projects

Experience entries should form a connected timeline with company, role, dates, description, and key points. Project layouts can be staggered or editorial, with progressive reveal and restrained hover feedback.

## Admin

Private `/admin` surfaces manage experiences, projects, and articles. Each entity needs list, create, edit, and delete workflows, and appropriate fields such as title, content, dates, tags, featured state, and display order. Supabase data should drive public content.

## Motion

Use performant fade and small translate reveals for related content. Keep animations optional, accessible, and secondary to readable content and clear navigation.
