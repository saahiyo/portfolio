"use client";

import { ViewTransition } from "react";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { GitHubIcon, ExternalLinkIcon, ArrowUpRightIcon } from "@/components/Icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border-muted bg-surface-raised shadow-3 transition-colors duration-fast hover:border-text-secondary/40">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden border-b border-border-muted bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary focus-visible:outline-offset-[-2px]"
        aria-label={`View ${project.name} case study`}
      >
        <ViewTransition name={`project-image-${project.slug}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cardImage}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-fast group-hover:scale-[1.01]"
          />
        </ViewTransition>
        <span className="absolute left-2.5 top-2.5 rounded border border-border-muted bg-background/80 px-2 py-0.5 text-[10px] font-medium text-text-secondary backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <ViewTransition name={`project-title-${project.slug}`}>
              <h3 className="text-sm font-semibold text-text-primary">
                {project.name}
              </h3>
            </ViewTransition>
            <p className="mt-0.5 text-[11px] text-text-tertiary">{project.tagline}</p>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.name} case study`}
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded border border-border-muted bg-background text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
          >
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-text-secondary">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-border-muted bg-background px-1.5 py-0.5 font-mono text-[10px] text-text-secondary transition-colors duration-fast hover:border-text-secondary/40 hover:text-text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 pt-1">
          {project.links.map((link) => {
            const isGithub = link.type === "github";
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-[11px] font-medium transition-all duration-fast active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
                  isGithub
                    ? "border border-border-muted bg-background text-text-primary shadow-3 hover:bg-surface-strong hover:text-background"
                    : "border border-transparent bg-surface-strong text-background shadow-2 hover:bg-text-primary"
                }`}
              >
                {isGithub ? (
                  <GitHubIcon className="h-3 w-3" />
                ) : (
                  <ExternalLinkIcon className="h-3 w-3" />
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
