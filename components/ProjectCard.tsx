"use client";

import { ViewTransition } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { GitHubIcon, ExternalLinkIcon, ArrowUpRightIcon } from "@/components/Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border-muted bg-surface-raised shadow-3 transition-colors duration-fast hover:border-text-secondary/40 h-full">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[2.2/1] sm:aspect-[16/10] overflow-hidden border-b border-border-muted bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary focus-visible:outline-offset-[-2px]"
        aria-label={`View ${project.name} case study`}
      >
        <ViewTransition name={`project-image-${project.slug}`}>
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
        </ViewTransition>
        <span className="absolute left-2.5 top-2.5 rounded border border-border-muted bg-background/80 px-2 py-0.5 text-[10px] font-medium text-text-secondary backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5 justify-between">
        <div className="flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <ViewTransition name={`project-title-${project.slug}`}>
                <h3 className="text-sm font-semibold text-text-primary">
                  {project.name}
                </h3>
              </ViewTransition>
              <p className="mt-0.5 text-[10px] font-mono text-text-tertiary">{project.tagline}</p>
            </div>
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`View ${project.name} case study`}
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded border border-border-muted bg-background text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <p className="mt-2.5 text-xs leading-relaxed text-text-secondary line-clamp-2 sm:line-clamp-3">
            {project.summary}
          </p>

          <div className="mt-3 flex gap-1 overflow-x-auto no-scrollbar pb-0.5 sm:flex-wrap sm:overflow-x-visible">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-border-muted bg-background px-1.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-text-secondary transition-colors duration-fast hover:border-text-secondary/40 hover:text-text-primary shrink-0"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3 border-t border-border-muted">
          {project.links.map((link) => {
            const isGithub = link.type === "github";
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded px-2 py-0.75 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-medium transition-all duration-fast active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
                  isGithub
                    ? "border border-border-muted bg-background text-text-primary shadow-3 hover:bg-surface-strong hover:text-background"
                    : "border border-transparent bg-surface-strong text-background shadow-2 hover:bg-text-primary"
                }`}
              >
                {isGithub ? (
                  <GitHubIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                ) : (
                  <ExternalLinkIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}
