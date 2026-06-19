import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectsFilterGrid } from "@/components/ProjectsFilterGrid";
import { ArrowRightIcon, LayersIcon } from "@/components/Icons";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "All projects by Shakir Ansari — full-stack platforms, streaming APIs, and media frontends. Filter by category and read the case studies.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects · Shakir Ansari",
    description:
      "Full-stack platforms, streaming APIs, and media frontends by Shakir Ansari.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const count = projects.length;
  const categories = Array.from(new Set(projects.map((p) => p.category)));

  return (
    <div className="pt-28 pb-24 bg-background">
      <Container>
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-1 rounded border border-border-muted bg-surface-raised px-2 py-1 text-[11px] font-medium text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
        >
          <ArrowRightIcon className="h-3 w-3 rotate-180" />
          Back home
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
              Projects
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              Things I&apos;ve built and shipped
            </h1>
            <p className="mt-4 text-xs leading-relaxed text-text-secondary sm:text-sm">
              Each project below is a real product with a public case study
              covering the overview, features, architecture, tech stack, and the
              problems I solved along the way. This is where I spend most of my
              time as a developer.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded border border-border-muted bg-surface-raised px-2 py-0.5 text-[10px] text-text-secondary shadow-3"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center lg:justify-end">
            <div className="w-full rounded-xl border border-border-muted bg-surface-raised p-5 shadow-3 sm:w-auto">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded border border-border-muted bg-background text-text-primary shadow-3">
                  <LayersIcon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-text-primary leading-none">{count}</p>
                  <p className="mt-1 text-[10px] text-text-tertiary uppercase tracking-wider font-mono">Shipped projects</p>
                </div>
              </div>
              <p className="mt-3.5 max-w-xs text-[11px] leading-relaxed text-text-secondary">
                From streaming APIs to study platforms. Click any card for the
                full case study.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ProjectsFilterGrid />
        </div>
      </Container>
    </div>
  );
}
