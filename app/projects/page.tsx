import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectsFilterGrid } from "@/components/ProjectsFilterGrid";
import { ArrowRightIcon } from "@/components/Icons";
import { FadeIn, StaggerContainer } from "@/components/Animate";

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

  return (
    <div className="pt-28 pb-24">
      <Container>
        <StaggerContainer delayChildren={0.1} staggerDelay={0.06}>
          <FadeIn direction="up" distance={15}>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1 rounded border border-border-muted bg-surface-raised px-2 py-1 text-[11px] font-medium text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <ArrowRightIcon className="h-3 w-3 rotate-180" />
              Back home
            </Link>
          </FadeIn>

          <div className="max-w-2xl text-left">
            <FadeIn direction="up" distance={10}>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                Projects
              </p>
            </FadeIn>
            <FadeIn direction="up" distance={20}>
              <h1 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Things I&apos;ve built and shipped
              </h1>
            </FadeIn>
            <FadeIn direction="up" distance={15}>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                Each project below is a real product with a public case study
                covering the overview, features, architecture, tech stack, and the
                problems I solved along the way. This is where I spend most of my
                time as a developer.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.2} className="mt-12">
            <ProjectsFilterGrid />
          </FadeIn>
        </StaggerContainer>
      </Container>
    </div>
  );
}
