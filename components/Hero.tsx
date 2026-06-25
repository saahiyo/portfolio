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

interface GitHubStats {
  followers: number;
  following: number;
  repos: number;
}

export function Hero() {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

  useEffect(() => {
    const cachedStats = localStorage.getItem("github-stats");
    if (cachedStats) {
      try {
        setGithubStats(JSON.parse(cachedStats));
      } catch {
        // ignore JSON parse error
      }
    }

    // Fetch GitHub stats via backend proxy
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("API failure");
        return res.json();
      })
      .then((data) => {
        if (data.followers !== null) {
          const stats = {
            followers: data.followers,
            following: data.following,
            repos: data.repos,
          };
          setGithubStats(stats);
          localStorage.setItem("github-stats", JSON.stringify(stats));
        }
      })
      .catch((err) => {
        console.error("GitHub API failed:", err);
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
        <div className="max-w-2xl text-left">
          <StaggerContainer delayChildren={0.1} staggerDelay={0.08}>
            
            {/* Header (Avatar + Name & Title) */}
            <FadeIn direction="up" distance={15}>
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border-muted bg-surface-raised shadow-3">
                  <img
                    src="https://github.com/saahiyo.png"
                    alt="Shakir Ansari Avatar"
                    className="h-full w-full object-cover"
                  />
                  {/* Premium Shimmer Sweep Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent pointer-events-none -translate-x-full animate-shimmer" />
                </div>
                <div>
                  <TextReveal
                    text="Shakir Ansari"
                    as="h1"
                    className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl"
                  />
                  <div className="mt-1.5 flex flex-wrap items-center font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                    <span>Full-Stack Developer • Building&nbsp;</span>
                    <TextMorph
                      values={heroRoles}
                      interval={2800}
                      charDelay={0.035}
                      charDuration={0.25}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Metadata Grid */}
            <FadeIn direction="up" distance={15}>
              <div className="flex flex-wrap items-start gap-x-6 sm:gap-x-8 gap-y-4 mb-6 mt-10">
                <div className="space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary/70">Location</div>
                  <div className="flex items-center gap-2 text-[13.5px] sm:text-[15px] text-text-primary font-medium">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary shrink-0">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>India</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary/70">Email</div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-2 text-[13.5px] sm:text-[15px] text-text-primary hover:text-text-primary transition-colors font-medium"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary shrink-0">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span className="group-hover:underline underline-offset-[2px]">{siteConfig.email}</span>
                  </a>
                </div>
                <div className="hidden sm:block space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-text-secondary/70">Pronouns</div>
                  <div className="flex items-center gap-2 text-[13.5px] sm:text-[15px] text-text-primary font-medium">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary shrink-0">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>he/him</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bio Description */}
            <FadeIn direction="up" distance={15}>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-base">
                I build web platforms, APIs, cloud-hosted applications, and media
                services. Designed for consistency, accessibility, and high performance.
              </p>
            </FadeIn>

            {/* Live/Active status row */}
            <FadeIn direction="up" distance={15}>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-xs text-text-secondary font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span>Available for projects</span>
                </div>
                


                {githubStats && (
                  <>
                    <span className="h-3 w-px bg-border-muted" />
                    <Link
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-text-primary transition-colors"
                    >
                      <GitHubIcon className="h-3.5 w-3.5 shrink-0 text-text-secondary" />
                      <span>{githubStats.followers} followers</span>
                      <span>•</span>
                      <span>{githubStats.repos} repos</span>
                    </Link>
                  </>
                )}
              </div>
            </FadeIn>

            {/* Minimalist Social Icons Row */}
            <FadeIn direction="up" distance={15}>
              <div className="mt-8 flex items-center gap-4.5">
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="h-5 w-5" />
                </Link>
                <Link
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </Link>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                  aria-label="Email"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </a>
                <Link
                  href={siteConfig.resume}
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-text-secondary hover:text-text-primary transition-all border border-border-muted bg-surface-raised px-2 py-0.5 rounded shadow-3 hover:border-text-secondary/40 active:scale-95"
                  aria-label="Download Resume"
                >
                  <DownloadIcon className="h-3 w-3" />
                  <span>Resume</span>
                </Link>
              </div>
            </FadeIn>

          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
