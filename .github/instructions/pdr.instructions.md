## Personal Portfolio Redesign & New Features

I’m redesigning my personal portfolio which is already implemented and connected to Supabase.
I need a modern, bold redesign and new features, but I want to keep my current typography and color scheme exactly as they are.

**Important constraints:**

- Do NOT change the existing color palette or font families. You can only change layout, spacing, hierarchy, component shapes, and animations, but the brand colors and fonts must remain the same.
- The app is already integrated with Supabase. Keep using Supabase as the backend. You can extend the schema (new tables/fields) but don’t propose a completely different backend.

---

## Goals for the new version

### 1. Visual redesign (more modern and bold)

- Make the layout feel more dynamic and daring (through composition, asymmetry, section structure and motion), not through heavy or gimmicky interactivity.
- Avoid generic template patterns (like a standard purple sidebar dashboard). Work with my existing colors in a more creative way: color blocks, overlapping sections, editorial-like hero, etc.
- Use scroll-based progressive reveal: as the user scrolls, key elements and cards fade in and slide slightly into place with a subtle stagger.
- Use Motion Framework or similar for smooth, performant animations.

### 2. Blog section (public-facing)

Add a Blog section where I can publish posts and personal thoughts.

**Requirements:**

- Blog listing page:
  - Title  
  - Short excerpt  
  - Date  
  - Reading time  
  - Tags
- Blog post page:
  - Clean, readable typography using my existing font  
  - Support for headings, code snippets, images, and quotes
- URL structure like:
  - `/blog`
  - `/blog/[slug]`

### 3. Experience section as a connected timeline

I want my work experiences to feel visually “connected” in a timeline, not just as isolated cards.

**Requirements:**

- A main axis (vertical or horizontal) connecting each experience entry with lines and nodes.
- Each experience contains:
  - Company  
  - Role  
  - Dates  
  - Description  
  - Key bullet points
- On scroll, each experience reveals progressively (fade + slight slide towards the central line).
- Optionally highlight current role vs past roles with styling, but using my existing colors.

### 4. Projects section

Showcase selected projects with a visually interesting grid or staggered layout.

- Each project:
  - Title  
  - Short description  
  - Tech stack tags  
  - Links (Live, GitHub, etc.)  
  - Thumbnail
- On hover: subtle scale, shadow change, and reveal of secondary info.
- Elements should appear progressively on scroll.

### 5. Admin panel (private)

An admin dashboard, using my existing colors and fonts but styled in a way that feels consistent with the new portfolio.

**Access:**

- Username/email + password only.
- There is no public signup or “forgot password” flow exposed to users.
- I will manually set the credentials.

**From this admin panel I must be able to manage three entities:**

1. Experiences (for the timeline).  
2. Projects.  
3. Blog Articles.

**For each entity, I need:**

- List views with basic info (title, status, last updated, etc.) and actions (Create, Edit, Delete).
- Forms to create/edit entries with all relevant fields (e.g. title, dates, content, tags, featured flag, order/priority).

The admin panel should connect to Supabase tables and drive what is shown on the public portfolio.

### 6. Authentication & routing

- Single admin login. Credentials are hard-coded or stored securely in Supabase/Auth, but not exposed as a public registration flow.

**Public routes example:**

- `/` – Home  
- `/projects` – Projects  
- `/blog` – Blog listing  
- `/blog/[slug]` – Blog post  
- `/experience` – Experience page (or a dedicated section on the homepage for the timeline)  
- `/admin` – Admin login  
- `/admin/*` – Admin views

### 7. Progressive reveal & micro-interactions

- On scroll:
  - Fade-in + slight translateY with stagger for hero secondary content, experience cards, project cards, and blog cards.
- On hover:
  - Subtle, tasteful transitions for cards and buttons (color, shadow, scale ~1.02).
- Keep animations performant and not overly flashy.

---

## What I want from you now

- Propose a concrete page structure and component breakdown for:
  - Public portfolio pages (Home, Experience section, Projects, Blog).
  - Admin panel pages for Experiences, Projects, and Blog Articles.
- Describe how you would model the data in Supabase (tables and key fields) given these requirements.
- Explain how to apply a bold, modern look using my existing color palette and typography only by changing layout, spacing, and motion.
- *(Optional)* If you provide code, use **[YOUR STACK HERE, e.g. Next.js + React + Tailwind + Supabase]** following these constraints.

**Remember:** Do not change my fonts or color scheme. Focus on layout, components, motion, and information architecture.