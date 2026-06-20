import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";
import { Contact } from "@/components/Contact";
import { FadeIn, StaggerContainer } from "@/components/Animate";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Shakir Ansari — email, GitHub, and LinkedIn channels.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact · Shakir Ansari",
    description: "Get in touch for collaborations, projects, or full-stack roles.",
    url: "/contact",
  },
};

export default function ContactPage() {
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
                Get in Touch
              </p>
            </FadeIn>
            <FadeIn direction="up" distance={15}>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
                Contact
              </h1>
            </FadeIn>
            <FadeIn direction="up" distance={10}>
              <p className="mt-1 text-xs text-text-secondary font-mono uppercase tracking-wider">Start a conversation</p>
            </FadeIn>
          </StaggerContainer>
        </Container>
      </div>
      <Contact />
    </>
  );
}
