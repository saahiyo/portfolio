import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";
import { Skills } from "@/components/Skills";
import { FadeIn, StaggerContainer } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Shakir Ansari — frontend frameworks, backend runtimes, databases, and DevOps tools.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills · Shakir Ansari",
    description: "Technical skills across frontend, backend, databases, and cloud operations.",
    url: "/skills",
  },
};

export default function SkillsPage() {
  return (
    <>
      <div className="border-b border-border-muted pt-28 pb-6">
        <Container>
          <StaggerContainer delayChildren={0.1} staggerDelay={0.06}>
            <FadeIn direction="up" distance={15}>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-1 rounded border border-border-muted bg-surface-raised px-2 py-1 text-[11px] font-medium text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
              >
                <ArrowRightIcon className="h-3 w-3 rotate-180" />
                Back home
              </Link>
            </FadeIn>
            <FadeIn direction="up" distance={10}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                Technical Stack
              </p>
            </FadeIn>
            <FadeIn direction="up" distance={15}>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Skills &amp; Technologies
              </h1>
            </FadeIn>
            <FadeIn direction="up" distance={10}>
              <p className="mt-1 text-xs text-text-secondary font-mono uppercase tracking-wider">Language, framework, and tooling experience</p>
            </FadeIn>
          </StaggerContainer>
        </Container>
      </div>
      <Skills />
    </>
  );
}
