# Wuwa Design Studio — Interior Design Website

A Next.js 14 website for an interior design studio, inspired by Lawless & Meyerson and Lucy Williams Architect.

## Tech Stack
- **Next.js 14** — React framework with App Router
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations
- **Google Fonts** — Cormorant Garamond + Jost

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
  app/
    page.tsx          → Home page
    layout.tsx        → Root layout (navbar, footer, fonts)
    globals.css       → Global styles
    projects/
      page.tsx        → Projects listing
      [slug]/
        page.tsx      → Individual project
    about/page.tsx
    services/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx
    Footer.tsx
    CustomCursor.tsx
  lib/
    projects.ts       → All project data (edit this to update content)
```

## Customising Content

### To change projects:
Edit `src/lib/projects.ts` — update titles, locations, images, and descriptions.

### To change your studio name:
Search and replace "Wuwa Design Studio" across all files.

### To change colors:
Edit `tailwind.config.js` → the `colors` section.

### To use your own photos:
Replace the Unsplash URLs in `src/lib/projects.ts` with your own image URLs,
or place images in `/public/images/` and reference them as `/images/your-photo.jpg`.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be live on a `.vercel.app` URL instantly.
