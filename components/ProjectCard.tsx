"use client";
/* eslint-disable @next/next/no-img-element */

import { useState, useEffect, ViewTransition } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { GitHubIcon, ExternalLinkIcon, ArrowUpRightIcon } from "@/components/Icons";

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const checkTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };

    checkTheme();

    window.addEventListener("theme-change", checkTheme);

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("theme-change", checkTheme);
      observer.disconnect();
    };
  }, []);

  return theme;
}

export function ProjectCard({ project }: { project: Project }) {
  const theme = useTheme();
  const resolvedSrc = project.cardImage
    ? typeof project.cardImage === "string"
      ? project.cardImage
      : theme === "light"
      ? project.cardImage.light
      : project.cardImage.dark
    : "";

  return (
    <article className="group rounded-xl border bg-[rgba(0,0,0,0.005)] border-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.02)] dark:border-[rgba(255,255,255,0.06)] transition-all duration-200 ease-out flex flex-col h-full overflow-hidden">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-video overflow-hidden border-b border-border-muted bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary focus-visible:outline-offset-[-2px] shrink-0"
        aria-label={`View ${project.name} case study`}
      >
        <ViewTransition name={`project-image-${project.slug}`}>
          {resolvedSrc ? (
            <img
              src={resolvedSrc}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover transition-transform duration-fast group-hover:scale-[1.02]"
            />
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center bg-zinc-950/40 text-text-tertiary select-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              <div className="flex flex-col items-center gap-1 font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-text-secondary/30 transition-colors duration-fast group-hover:text-text-secondary/80">
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7 stroke-[1.25]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span>Preview Pending</span>
              </div>
            </div>
          )}
        </ViewTransition>
        <span className="absolute left-2.5 top-2.5 rounded border border-border-muted bg-background/80 px-2 py-0.5 text-[10px] font-medium text-text-secondary backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col overflow-visible px-4 sm:px-5 py-4 sm:py-5 justify-between min-h-0">
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex justify-between items-start mb-2.5 gap-4">
            <div className="min-w-0 flex-1">
              <ViewTransition name={`project-title-${project.slug}`}>
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-text-primary leading-tight hover:text-text-secondary transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.name}
                  </Link>
                </h3>
              </ViewTransition>
              <p className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-text-tertiary truncate">
                {project.tagline}
              </p>
            </div>

            {/* Links Row with Tooltips */}
            <div className="flex items-center gap-3 shrink-0">
              {project.links.map((link) => {
                const isGithub = link.type === "github";
                return (
                  <div key={link.label} className="relative group/tooltip inline-flex">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-text-primary transition-colors duration-150"
                      aria-label={link.label}
                    >
                      {isGithub ? (
                        <GitHubIcon className="h-4.5 w-4.5" />
                      ) : (
                        <ExternalLinkIcon className="h-4.5 w-4.5" />
                      )}
                    </a>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-medium rounded-md whitespace-nowrap pointer-events-none opacity-0 translate-y-1 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 transition-all duration-150 bg-zinc-900 text-zinc-100 shadow-lg border border-zinc-800 z-50">
                      {link.label}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-zinc-900" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-text-secondary text-[12.5px] sm:text-[13px] leading-relaxed mb-4 max-w-[22rem] line-clamp-3">
            {project.summary}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-border-muted/50">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border-muted bg-background/50 px-2 py-0.5 font-mono text-[9px] text-text-secondary transition-colors duration-fast hover:border-text-secondary/40 hover:text-text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
