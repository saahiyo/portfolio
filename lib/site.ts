export const siteConfig = {
  name: "Shakir Ansari",
  role: "Full-Stack Developer",
  title: "Shakir Ansari — Full-Stack Developer",
  description:
    "Building web platforms, APIs, cloud-hosted applications, and media services.",
  url: "https://shakiransari.dev",
  email: "shakir.ansarii075@gmail.com",
  github: "https://github.com/saahiyo",
  linkedin: "https://www.linkedin.com/in/shakir-ansari-362784296",
  resume: "/resume.pdf",
  locale: "en_US",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
