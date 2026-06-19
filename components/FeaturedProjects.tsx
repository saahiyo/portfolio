import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectsFilterGrid } from "@/components/ProjectsFilterGrid";
import { ArrowRightIcon } from "@/components/Icons";

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border-muted py-20 sm:py-28 bg-background"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="02 — Work"
            title="Featured Projects"
            description="A selection of products I've designed, built, and shipped — from streaming APIs to study platforms."
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3 py-1.5 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
          >
            All projects
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8">
          <ProjectsFilterGrid />
        </div>
      </Container>
    </section>
  );
}
