import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowUpRightIcon } from "@/components/Icons";
import { FadeIn, StaggerContainer } from "@/components/Animate";

type Milestone = {
  year: string;
  title: string;
  category: string;
  body: string;
  href: string;
};

const milestones: Milestone[] = [
  {
    year: "2023",
    title: "BCA Notes",
    category: "Full-Stack Platform",
    body: "Designed and shipped a semester-wise study notes platform for BCA students with search, auth, and a mobile-first reader.",
    href: "/projects/bca-notes",
  },
  {
    year: "2024",
    title: "Terabox Gateway",
    category: "Backend API & Cloud",
    body: "Built a Flask API that resolves Terabox share links into streamable URLs, deployed redundantly across Vercel and Render.",
    href: "/projects/terabox-gateway",
  },
  {
    year: "2024",
    title: "TeraPlay",
    category: "Frontend / Streaming",
    body: "Created a React + Vite streaming frontend that plays resolved Terabox media over HLS.js with a fast, responsive player UX.",
    href: "/projects/teraplay",
  },
];

export function Timeline() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-border-muted py-20 sm:py-28"
    >
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="04 — Experience"
            title="Project Timeline"
            description="Major milestones and shipped products, most recent first."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="mt-12 space-y-0" tagName="ol">
          {milestones.map((m) => (
            <FadeIn key={m.title} direction="up" distance={20} className="w-full">
              <li
                className="relative grid gap-4 border-l border-border-muted pb-10 pl-8 last:pb-0 sm:grid-cols-[140px_1fr] sm:gap-8 sm:pl-0"
              >
                {/* Node + connector (mobile) */}
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-text-secondary bg-background sm:hidden"
                />

                <div className="font-mono text-xs text-text-secondary sm:pl-8">
                  <span className="sm:absolute sm:-left-[5px] sm:top-1.5 sm:h-2.5 sm:w-2.5 sm:rounded-full sm:border sm:border-text-secondary sm:bg-background" />
                  {m.year}
                </div>

                <div className="relative sm:border-l sm:border-border-muted sm:pl-8">
                  <div className="rounded-xl border border-border-muted bg-surface-raised p-5 shadow-3 transition-colors duration-fast hover:border-text-secondary/40">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-text-primary">
                        {m.title}
                      </h3>
                      <span className="rounded border border-border-muted bg-background px-2 py-0.5 text-[10px] text-text-secondary">
                        {m.category}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                      {m.body}
                    </p>
                    <Link
                      href={m.href}
                      className="mt-3.5 inline-flex items-center gap-1 rounded border border-border-muted bg-background px-2 py-1 text-[11px] font-medium text-text-secondary shadow-3 transition-colors duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
                    >
                      View case study
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </li>
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
