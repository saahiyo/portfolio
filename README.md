<div align="center">

<img src="public/icon.svg" alt="SA" width="56" height="56" />

# Shakir Ansari

**Full-Stack Developer**

Building web platforms, APIs, cloud-hosted applications, and media services.

[shakiransari.dev](https://shakiransari.dev) · [GitHub](https://github.com/saahiyo) · [LinkedIn](https://www.linkedin.com/in/shakir-ansari-362784296) · [shakir.ansarii075@gmail.com](mailto:shakir.ansarii075@gmail.com)

</div>

---

## About

Hi, I'm Shakir — a full-stack developer focused on building clean, performant web platforms and backend services. I work across the stack, from React frontends to Python APIs to cloud deployments.

This site is my personal portfolio — it showcases my projects, skills, and background the way I want them presented.

---

## Tech Stack

This portfolio itself is built with:

- **Next.js 16** (App Router, Server Components)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** with custom design tokens
- **Framer Motion 12** for scroll and page animations
- **View Transitions API** for shared-element image morphing and theme switching

---

## Features

- 🌗 **Dark / Light theme** — circular reveal toggle, respects system preference, persists to `localStorage`
- ✨ **Page transitions** — cross-fade navigation with shared-element image morphing between project cards and detail pages
- 🔤 **Text morph** — hero subtitle cycles through roles character-by-character with blur/fade animation
- ✏️ **Self-drawing line** — the timeline connector traces itself in as the section scrolls into view
- 📱 **Mobile-first** — responsive design with a full-page overlay mobile menu
- 🏷️ **Project filtering** — animated grid filterable by Full-Stack, Frontend, Backend, and Cloud
- 🔍 **SEO** — per-page metadata, Open Graph / Twitter cards, JSON-LD structured data, auto-generated sitemap
- ♿ **Accessible** — skip-to-content link, focus outlines, keyboard navigation, `prefers-reduced-motion` support

---

## Projects

| Project | Description | Stack | Link |
| --- | --- | --- | --- |
| **BCA Notes** | Study notes platform for BCA students — semester-wise, searchable, mobile-first | Next.js, React, Tailwind CSS, Firebase | [Live](https://bcanotes.tech) · [GitHub](https://github.com/saahiyo/bca-notes) |
| **Terabox Gateway** | Terabox link resolver & streaming API with dual-cloud redundancy | Python, Flask, Vercel, Render, Cloudflare | [Docs](https://terabridge-api.vercel.app) · [GitHub](https://github.com/saahiyo/terabridge-api) |
| **TeraPlay** | Streaming frontend for Terabox media with HLS.js adaptive playback | React, Vite, Tailwind CSS, HLS.js | [Live](https://teraplay.shakiransari.dev) · [GitHub](https://github.com/saahiyo/teraplay) |

---

## Running Locally

```bash
git clone https://github.com/saahiyo/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
├── layout.tsx          # Root layout — fonts, Navbar, Footer, JSON-LD
├── template.tsx        # View Transition wrapper for page animations
├── page.tsx            # Home — Hero, Featured Projects, Skills, Contact
├── globals.css         # Design tokens, Tailwind imports, view-transition styles
├── opengraph-image.tsx # Auto-generated OG image
├── sitemap.ts          # Auto-generated sitemap
├── robots.ts           # Robots.txt
├── manifest.ts         # Web App Manifest
├── not-found.tsx       # Custom 404
├── projects/
│   ├── page.tsx        # All projects with category filter
│   └── [slug]/page.tsx # Project case study pages
└── about/
    └── page.tsx        # About + timeline

components/             # 16 UI components
lib/
├── site.ts             # Personal info, nav config, social links
└── projects.ts         # Project data model and content
```

---

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |
