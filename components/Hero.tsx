import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  DownloadIcon,
  LayersIcon,
  ServerIcon,
  CloudIcon,
} from "@/components/Icons";
import { FadeIn, StaggerContainer } from "@/components/Animate";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Background Grid Pattern */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[size:64px_64px] bg-center [mask-image:radial-gradient(ellipse_60%_50%_at_50%_15%,#000_20%,transparent_100%)]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--hero-grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--hero-grid-color) 1px, transparent 1px)
          `,
        }}
      />

      {/* Soft spotlight radial backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-[130px] transition-opacity duration-fast"
        style={{
          background: "var(--spotlight-gradient)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <StaggerContainer delayChildren={0.1} staggerDelay={0.08}>
            {/* Header pill link and Availability badge */}
            <FadeIn direction="up" distance={15}>
              <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-2 text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface-raised px-2.5 py-0.5 text-[10px] font-semibold text-text-primary shadow-3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Available for projects
                </div>
                <Link
                  href="/projects/terabox-gateway"
                  className="inline-flex items-center gap-1.5 text-[10px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast"
                >
                  <span className="rounded border border-border-muted bg-surface-raised px-1.5 py-0.25 text-[9px] font-bold uppercase tracking-wider text-text-primary shadow-3">New</span>
                  Shipped Terabox Gateway v2 →
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={20}>
              <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
                Shakir Ansari
              </h1>
            </FadeIn>

            <FadeIn direction="up" distance={15}>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                Full-Stack Developer
              </p>
            </FadeIn>

            <FadeIn direction="up" distance={20}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-md">
                Building web platforms, APIs, cloud-hosted applications, and media
                services. Designed for consistency, accessibility, and high performance.
              </p>
            </FadeIn>

            {/* Actions list */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-sm sm:max-w-none mx-auto w-full">
              <FadeIn direction="up" distance={15} className="w-full sm:w-auto flex justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-1.5 rounded border border-transparent bg-surface-strong px-4 py-2 text-xs font-medium text-background shadow-2 transition-all duration-fast hover:bg-text-primary hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full sm:w-auto"
                >
                  View Projects
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </FadeIn>
              
              <div className="flex flex-row items-center justify-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                <FadeIn direction="up" distance={15} className="flex-1 sm:flex-none">
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3.5 py-2 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    GitHub
                  </Link>
                </FadeIn>
                
                <FadeIn direction="up" distance={15} className="flex-1 sm:flex-none">
                  <Link
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3.5 py-2 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full"
                  >
                    <LinkedInIcon className="h-3.5 w-3.5" />
                    LinkedIn
                  </Link>
                </FadeIn>
                
                <FadeIn direction="up" distance={15} className="flex-1 sm:flex-none">
                  <Link
                    href={siteConfig.resume}
                    className="inline-flex items-center justify-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3.5 py-2 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full"
                  >
                    <DownloadIcon className="h-3.5 w-3.5" />
                    Resume
                  </Link>
                </FadeIn>
              </div>
            </div>

            {/* Subtext info */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-text-tertiary">
              <FadeIn direction="up" distance={10}>
                <span className="inline-flex items-center gap-2">
                  <LayersIcon className="h-3.5 w-3.5 text-text-secondary" />
                  Full-Stack Development
                </span>
              </FadeIn>
              <span className="hidden h-3 w-px bg-border-muted sm:inline-block" />
              <FadeIn direction="up" distance={10}>
                <span className="inline-flex items-center gap-2">
                  <ServerIcon className="h-3.5 w-3.5 text-text-secondary" />
                  Backend Systems &amp; APIs
                </span>
              </FadeIn>
              <span className="hidden h-3 w-px bg-border-muted sm:inline-block" />
              <FadeIn direction="up" distance={10}>
                <span className="inline-flex items-center gap-2">
                  <CloudIcon className="h-3.5 w-3.5 text-text-secondary" />
                  Cloud Deployment
                </span>
              </FadeIn>
            </div>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
