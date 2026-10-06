import Link from "next/link";
import { Container } from "@/components/Container";
import {
  ArrowRightIcon,
  HomeIcon,
  CodeIcon,
  MailIcon,
  LayersIcon,
} from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Spotlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[130px]"
        style={{ background: "var(--spotlight-gradient)" }}
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          
          {/* Status Diagnostic Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border-muted bg-surface-raised/90 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-text-secondary shadow-3 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
            </span>
            <span className="font-semibold text-rose-500/90 dark:text-rose-400">404</span>
            <span className="text-border-muted">/</span>
            <span>ROUTE_NOT_FOUND</span>
          </div>

          {/* Massive Display 404 Typography */}
          <div className="relative select-none my-2">
            <h1 className="font-mono text-8xl sm:text-9xl md:text-[13rem] font-black tracking-tighter leading-none bg-gradient-to-b from-text-primary via-text-primary/75 to-text-secondary/10 bg-clip-text text-transparent">
              404
            </h1>
            <p className="sr-only">Error 404: Page not found</p>
          </div>

          {/* Heading & Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            Lost in cyberspace?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            The page you requested doesn&apos;t exist, has drifted off the server, or was moved to another coordinate.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-border-muted bg-surface-strong px-5 py-2.5 text-xs sm:text-sm font-medium text-background shadow-2 transition-all duration-fast hover:opacity-90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <HomeIcon className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-border-muted bg-surface-raised px-5 py-2.5 text-xs sm:text-sm font-medium text-text-primary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:bg-surface active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <LayersIcon className="h-4 w-4 text-text-secondary" />
              Explore Projects
              <ArrowRightIcon className="h-3.5 w-3.5 text-text-secondary" />
            </Link>
          </div>

          {/* Quick-Nav Discovery Cards */}
          <div className="mt-14 grid gap-3 sm:grid-cols-3 text-left">
            <Link
              href="/projects"
              className="group rounded-xl border border-border-muted bg-surface-raised/70 p-4 shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:bg-surface active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <div className="flex items-center justify-between">
                <CodeIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
                <ArrowRightIcon className="h-3 w-3 text-text-secondary/50 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:text-text-primary" />
              </div>
              <h3 className="mt-3 text-xs font-semibold text-text-primary">
                Featured Work
              </h3>
              <p className="mt-1 text-[11px] text-text-secondary line-clamp-2">
                Browse BCA Notes, TeraPlay, and streaming APIs.
              </p>
            </Link>

            <Link
              href="/about"
              className="group rounded-xl border border-border-muted bg-surface-raised/70 p-4 shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:bg-surface active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <div className="flex items-center justify-between">
                <LayersIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
                <ArrowRightIcon className="h-3 w-3 text-text-secondary/50 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:text-text-primary" />
              </div>
              <h3 className="mt-3 text-xs font-semibold text-text-primary">
                Background &amp; Story
              </h3>
              <p className="mt-1 text-[11px] text-text-secondary line-clamp-2">
                Full-stack journey, experience timeline, and milestones.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group rounded-xl border border-border-muted bg-surface-raised/70 p-4 shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:bg-surface active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <div className="flex items-center justify-between">
                <MailIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
                <ArrowRightIcon className="h-3 w-3 text-text-secondary/50 transition-transform duration-fast group-hover:translate-x-0.5 group-hover:text-text-primary" />
              </div>
              <h3 className="mt-3 text-xs font-semibold text-text-primary">
                Get in Touch
              </h3>
              <p className="mt-1 text-[11px] text-text-secondary line-clamp-2">
                Drop an email, say hi on GitHub, or connect on LinkedIn.
              </p>
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
