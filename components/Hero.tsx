"use client";

import { useState, useEffect } from "react";
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
import { TextMorph } from "@/components/TextMorph";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { TextReveal } from "@/components/ui/cascade-text";

const heroRoles = [
  "Web Platforms",
  "REST APIs",
  "Cloud Services",
  "Media Apps",
];

export function Hero() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    // 1. Load from cache first for instant paint
    const cachedVisits = localStorage.getItem("visits-count");
    if (cachedVisits) {
      setVisits(parseInt(cachedVisits, 10));
    }

    // 2. Fetch/increment from Counter API (using a namespace for saahiyo-portfolio)
    const baseline = 0;
    const namespace = "saahiyo-portfolio";
    const key = "visits";

    fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
      .then((res) => {
        if (!res.ok) throw new Error("API failure");
        return res.json();
      })
      .then((data) => {
        const count = baseline + (data.count || 0);
        setVisits(count);
        localStorage.setItem("visits-count", count.toString());
      })
      .catch((err) => {
        console.error("Counter API failed, using fallback:", err);
        if (!cachedVisits) {
          setVisits(baseline + 1);
        }
      });
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">

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
              <div className="mb-6 flex flex-row items-center justify-center gap-2.5 text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface-raised px-2.5 py-0.5 text-[10px] font-semibold text-text-primary shadow-3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Available for projects
                </div>

                {/* Views count pill */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface-raised px-2.5 py-0.5 text-[10px] font-semibold text-text-primary shadow-3">
                  <span className="h-1 w-1 rounded-full bg-sky-500" />
                  <span>{visits !== null ? `${visits.toLocaleString()} views` : "--- views"}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" distance={20}>
              <TextReveal
                text="Shakir Ansari"
                as="h1"
                className="text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl"
              />
            </FadeIn>

            <FadeIn direction="up" distance={15}>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                Building{" "}
                <TextMorph
                  values={heroRoles}
                  interval={2800}
                  charDelay={0.035}
                  charDuration={0.25}
                />
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
                <GetStartedButton />
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
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-xs text-text-tertiary">
              <FadeIn direction="up" distance={10}>
                <span className="inline-flex items-center gap-1.5">
                  <LayersIcon className="h-3.5 w-3.5 text-text-secondary" />
                  Full-Stack
                </span>
              </FadeIn>
              <span className="h-3 w-px bg-border-muted" />
              <FadeIn direction="up" distance={10}>
                <span className="inline-flex items-center gap-1.5">
                  <ServerIcon className="h-3.5 w-3.5 text-text-secondary" />
                  Backend &amp; APIs
                </span>
              </FadeIn>
              <span className="h-3 w-px bg-border-muted" />
              <FadeIn direction="up" distance={10}>
                <span className="inline-flex items-center gap-1.5">
                  <CloudIcon className="h-3.5 w-3.5 text-text-secondary" />
                  Cloud
                </span>
              </FadeIn>
            </div>
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
