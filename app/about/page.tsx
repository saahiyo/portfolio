import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";
import { About } from "@/components/About";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Shakir Ansari — a full-stack developer building web platforms, APIs, and cloud-hosted media services.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Shakir Ansari",
    description: "Full-stack developer focused on shipped products.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-border-muted pt-28 pb-6">
        <Container>
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1 rounded border border-border-muted bg-surface-raised px-2 py-1 text-[11px] font-medium text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
          >
            <ArrowRightIcon className="h-3 w-3 rotate-180" />
            Back home
          </Link>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            About
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Shakir Ansari
          </h1>
          <p className="mt-1 text-xs text-text-secondary font-mono uppercase tracking-wider">Full-Stack Developer</p>
        </Container>
      </div>
      <About />
      <Timeline />
    </>
  );
}
