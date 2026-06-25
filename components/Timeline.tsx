"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useSpring, motion } from "framer-motion";
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
    year: "Jun 11, 2026",
    title: "TeraPlay",
    category: "Frontend / Streaming",
    body: "Created a React + Vite streaming frontend that plays resolved Terabox media over HLS.js with a fast, responsive player UX.",
    href: "/projects/teraplay",
  },
  {
    year: "Apr 13, 2026",
    title: "BCA Notes",
    category: "Full-Stack Platform",
    body: "Designed and shipped a semester-wise study notes platform for BCA students with search, auth, and a mobile-first reader.",
    href: "/projects/bca-notes",
  },
  {
    year: "Oct 17, 2025",
    title: "Terabox Gateway",
    category: "Backend API & Cloud",
    body: "Built a Flask API that resolves Terabox share links into streamable URLs, deployed redundantly across Vercel and Render.",
    href: "/projects/terabox-gateway",
  },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

        <div ref={containerRef} className="relative mt-16 max-w-[860px]">
          {/* Background Track Line (Dashed) */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px border-l border-dashed border-text-secondary/20 sm:left-[172px]" />

          {/* Scroll-Following Progress Line (Solid) */}
          <motion.div
            className="absolute left-[5px] top-2 bottom-2 w-[1.5px] bg-text-secondary origin-top sm:left-[172px]"
            style={{ scaleY }}
          />

          <StaggerContainer staggerDelay={0.1} className="space-y-0" tagName="ol">
            {milestones.map((m, i) => (
              <FadeIn key={m.title} direction="up" distance={20} className="w-full">
                <li
                  className={`relative grid gap-4 pl-8 sm:grid-cols-[140px_1fr] sm:gap-8 sm:pl-0 ${
                    i === milestones.length - 1 ? "pb-0" : "pb-4"
                  }`}
                >
                  {/* Circle Node (Centered on the line) */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-1.5 z-10 h-2.5 w-2.5 rounded-full border border-text-secondary/50 bg-background transition-colors duration-fast sm:left-[167px]"
                  />

                  {/* Left side: Year */}
                  <div className="font-mono text-xs text-text-secondary sm:pr-4 sm:text-right">
                    {m.year}
                  </div>

                  {/* Right side: Card */}
                  <div className="relative sm:pl-8">
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
        </div>
      </Container>
    </section>
  );
}
