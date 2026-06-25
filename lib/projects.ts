export type ProjectCategory = "Full-Stack" | "Frontend" | "Backend" | "Cloud";

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "demo" | "external";
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  description: string;
  tech: string[];
  featured: boolean;
  cardImage: string | { light: string; dark: string };
  screenshots: { src: string; alt: string; caption: string }[];
  overview: string;
  features: string[];
  architecture: string[];
  challenges: { title: string; body: string }[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    slug: "bca-notes",
    name: "BCA Notes",
    tagline: "Study notes platform for BCA students",
    category: "Full-Stack",
    year: "Apr 13, 2026 (first commit)",
    summary:
      "A centralized platform where BCA students can browse, search, and read semester-wise notes across computer-science subjects.",
    description:
      "BCA Notes is a full-stack study platform that organizes Bachelor of Computer Applications course material into clean, searchable, semester-wise collections. It pairs a Next.js frontend with a Firebase backend for auth and content delivery.",
    tech: ["Next.js", "React", "Tailwind CSS", "Firebase", "Node.js"],
    featured: true,
    cardImage: {
      light: "/projects/bca-notes/bcanotes-home-d.png",
      dark: "/projects/bca-notes/bcanotes-home.png",
    },
    screenshots: [
      {
        src: "/projects/bca-notes/bcanotes-home-d.png",
        alt: "BCA Notes homepage showing semester cards",
        caption: "Homepage with semester and subject navigation",
      },
      {
        src: "/projects/bca-notes/bcanotes-tools.png",
        alt: "BCA Notes tools page showing resources",
        caption: "Clean tools view with subject resources",
      },
    ],
    overview:
      "BCA Notes gives students a single place to find organized, readable notes for every subject in their BCA curriculum. Content is structured by semester and subject, with full-text search and a distraction-free reader. The goal was to replace scattered PDFs and WhatsApp forwards with one fast, dependable source of truth.",
    features: [
      "Semester and subject-based content organization",
      "Full-text search across all notes",
      "Distraction-free, mobile-first reading view",
      "Firebase Authentication for saved progress",
      "Responsive navigation with breadcrumbs",
      "SEO-friendly static generation for note pages",
    ],
    architecture: [
      "Next.js App Router with server components for content rendering",
      "Firebase for authentication and real-time content storage",
      "Tailwind CSS design system for consistent, fast UI",
      "Static generation of public note pages for SEO and speed",
      "Client-side search index built at build time",
    ],
    challenges: [
      {
        title: "Content discoverability",
        body: "Notes were previously scattered across drives and chats. A semester/subject hierarchy plus build-time search index made everything reachable in two clicks.",
      },
      {
        title: "Mobile reading experience",
        body: "Most students browse on phones, so the reader was built mobile-first with adjustable typography and a sticky topic sidebar that collapses on small screens.",
      },
      {
        title: "Fast page loads",
        body: "Static generation of note pages and aggressive caching kept load times low even on slow college Wi-Fi.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/saahiyo/bcanotes", type: "github" },
      { label: "Live Demo", href: "https://bcanotes.tech", type: "demo" },
    ],
  },
  {
    slug: "terabox-gateway",
    name: "Terabox Gateway",
    tagline: "Terabox link resolver & streaming API",
    category: "Backend",
    year: "Oct 17, 2025 (first commit)",
    summary:
      "A Flask API that resolves Terabox share links into direct streaming and download URLs, deployed on Vercel and Render.",
    description:
      "Terabox Gateway is a Python/Flask service that takes a Terabox share link and returns direct, streamable media URLs. It handles link resolution, metadata extraction, and CORS-safe responses, and is deployed across Vercel and Render for redundancy.",
    tech: ["Python", "Flask", "REST API", "Vercel", "Render", "Cloudflare"],
    featured: true,
    cardImage: "/projects/terabox-gateway/terabox-gateway-card.svg",
    screenshots: [
      {
        src: "/projects/terabox-gateway/terabox-gateway-1.svg",
        alt: "API response JSON for a resolved Terabox link",
        caption: "Resolver endpoint returning direct media URLs and metadata",
      },
      {
        src: "/projects/terabox-gateway/terabox-gateway-2.svg",
        alt: "Deployment diagram across Vercel and Render",
        caption: "Redundant deployment across two cloud providers",
      },
    ],
    overview:
      "Terabox Gateway turns opaque Terabox share links into usable, direct media URLs that frontends can stream or download. The API abstracts away Terabox's resolution flow, returns clean JSON with metadata, and is designed to be consumed by any client. It runs on both Vercel (serverless) and Render (persistent) so a provider outage doesn't take the service down.",
    features: [
      "Resolve Terabox share links to direct stream/download URLs",
      "Return file metadata (name, size, type) alongside URLs",
      "CORS-enabled JSON responses for browser clients",
      "Dual deployment on Vercel and Render for redundancy",
      "Lightweight caching of resolved links to reduce latency",
      "Structured error responses with clear status codes",
    ],
    architecture: [
      "Flask application exposing a small, well-documented REST surface",
      "Link resolution layer that follows Terabox share redirects",
      "Response caching to avoid repeated resolution of the same link",
      "Serverless deployment on Vercel for edge proximity",
      "Persistent deployment on Render as a fallback origin",
      "Cloudflare in front for caching, TLS, and DDoS protection",
    ],
    challenges: [
      {
        title: "Fragile resolution flow",
        body: "Terabox's share flow changes often. The resolver is isolated behind one module so upstream changes only touch one file, and failures degrade to a clear error rather than a crash.",
      },
      {
        title: "Provider availability",
        body: "A single host is a single point of failure. Deploying to both Vercel and Render with a shared contract lets clients fall over automatically.",
      },
      {
        title: "Cold-start latency",
        body: "Serverless cold starts hurt perceived speed on the resolver. A short TTL cache on resolved links absorbs repeat requests and keeps p99 low.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/saahiyo/terabox-gateway  ", type: "github" },
      { label: "API Docs", href: "https://tera-core.vercel.app/", type: "demo" },
    ],
  },
  {
    slug: "teraplay",
    name: "TeraPlay",
    tagline: "Streaming frontend for Terabox media",
    category: "Frontend",
    year: "Jun 11, 2026 (first commit)",
    summary:
      "A React + Vite frontend that streams Terabox video through HLS.js with a fast, clean media-player experience.",
    description:
      "TeraPlay is the consumer-facing frontend that pairs with Terabox Gateway. Built with React, Vite, and Tailwind CSS, it resolves a Terabox link and plays the resulting stream with HLS.js, focusing on speed and a clean playback UX.",
    tech: ["React", "Vite", "Tailwind CSS", "HLS.js", "JavaScript"],
    featured: true,
    cardImage: "/projects/teraplay/teraplay-card.png",
    screenshots: [
      {
        src: "/projects/teraplay/teraplay-1.png",
        alt: "TeraPlay player interface playing a video",
        caption: "Player view with custom controls and link input",
      },
      {
        src: "/projects/teraplay/teraplay-2.png",
        alt: "TeraPlay mobile responsive layout",
        caption: "Responsive layout adapting to mobile screens",
      },
      {
        src: "/projects/teraplay/teraplay-profile.png",
        alt: "TeraPlay profile page",
        caption: "profile page",
      },
       {
        src: "/projects/teraplay/teraplay-settings.png",
        alt: "TeraPlay settings page",
        caption: "settings page",
      },
    ],
    overview:
      "TeraPlay turns a Terabox link into an instant playback experience. Paste a link, the app calls Terabox Gateway, and an HLS.js player streams the resolved media with custom controls. The interface is deliberately minimal — fast to load, easy to use, and responsive from phone to desktop.",
    features: [
      "Paste-a-link playback powered by Terabox Gateway",
      "HLS.js streaming with adaptive quality",
      "Custom player controls (play, seek, volume, fullscreen)",
      "Fast Vite build with code-splitting for quick first paint",
      "Fully responsive from mobile to desktop",
      "Accessible controls with keyboard support",
    ],
    architecture: [
      "React 18 + Vite single-page application",
      "Tailwind CSS 4 utility-first styling",
      "HLS.js for adaptive HTTP streaming playback",
      "Thin API client layer wrapping Terabox Gateway",
      "Component-driven player with isolated control logic",
    ],
    challenges: [
      {
        title: "Cross-origin streaming",
        body: "Resolved media URLs are cross-origin. HLS.js configuration and correct CORS headers on the gateway made adaptive streaming work reliably in the browser.",
      },
      {
        title: "Perceived performance",
        body: "Streaming UIs feel slow if the player mounts late. Code-splitting and deferring non-critical work got the player interactive as fast as possible.",
      },
      {
        title: "Player reliability across browsers",
        body: "Native HLS support is inconsistent. Feature-detecting and falling back to HLS.js on non-Safari browsers gave uniform playback everywhere.",
      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/saahiyo-cloud/teraplay", type: "github" },
      { label: "Live Demo", href: "https://teraplay-mocha.vercel.app/", type: "demo" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Cloud",
];
