"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  DownloadIcon,
  SparkIcon,
} from "@/components/Icons";

type ProjectId = "teraplay" | "bca-notes" | "terabox-gateway";

interface MockupData {
  title: string;
  path: string;
  payload: string;
  statLabel: string;
  statVal: string;
  speedLabel: string;
  speedVal: string;
}

const mockupProjects: Record<ProjectId, MockupData> = {
  teraplay: {
    title: "TeraPlay",
    path: "// GET /api/v1/stream?id=teraplay-hls",
    payload: `{
  "status": "success",
  "media_type": "video_stream",
  "resolution": "1080p_adaptive",
  "stream_url": "https://stream.shakiransari.dev/hls/...",
  "decoder": "hls.js_native_fallback",
  "cors_headers": "origin_safe"
}`,
    statLabel: "Active streams",
    statVal: "1,240 clients/min",
    speedLabel: "Player paint",
    speedVal: "0.14s",
  },
  "bca-notes": {
    title: "BCA Notes",
    path: "// Query: firestore/collections/notes",
    payload: `{
  "semesters_indexed": 6,
  "subjects_total": 32,
  "search_indexing": "static_build_json",
  "saved_readers": 450,
  "load_strategy": "static_server_components",
  "auth": "firebase_oauth"
}`,
    statLabel: "Total page indexing",
    statVal: "12,045 items",
    speedLabel: "Initial paint",
    speedVal: "0.10s",
  },
  "terabox-gateway": {
    title: "Terabox Gateway",
    path: "// POST /api/v2/resolve_link",
    payload: `{
  "resolver": "flask_origin_api",
  "deployments": ["vercel_edge", "render_fallover"],
  "response_cache": "cloudflare_ttl_300s",
  "fallback_status": "standby_ready",
  "direct_download": "enabled",
  "cors_policy": "enabled"
}`,
    statLabel: "Requests processed",
    statVal: "24,000 requests/day",
    speedLabel: "Resolution latency",
    speedVal: "18ms",
  },
};

export function Hero() {
  const [activeProject, setActiveProject] = useState<ProjectId>("teraplay");
  const data = mockupProjects[activeProject];

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 bg-background">
      {/* Soft spotlight radial backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-[130px] transition-opacity duration-fast"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255, 255, 255, 0.12), transparent)",
        }}
      />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          {/* Header pill link and Availability badge */}
          <div className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-2 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border-muted bg-surface-raised px-2.5 py-0.5 text-[10px] font-semibold text-text-primary shadow-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Available for projects
            </div>
            <Link
              href="/projects/terabox-gateway"
              className="inline-flex items-center gap-1.5 text-[10px] font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast"
            >
              <span className="rounded border border-border-muted bg-surface-raised px-1.5 py-0.25 text-[9px] font-bold uppercase tracking-wider text-text-primary shadow-3">New</span>
              Shipped Terabox Gateway v2 →
            </Link>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
            Shakir Ansari
          </h1>

          <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            Full-Stack Developer
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-md">
            Building web platforms, APIs, cloud-hosted applications, and media
            services. Designed for consistency, accessibility, and high performance.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-xs sm:max-w-none mx-auto w-full">
            {/* Primary Action */}
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-1.5 rounded border border-transparent bg-surface-strong px-4 py-2 text-xs font-medium text-background shadow-2 transition-all duration-fast hover:bg-text-primary hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full sm:w-auto"
            >
              View Projects
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </Link>
            
            {/* Secondary Actions */}
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3.5 py-2 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full sm:w-auto"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
              GitHub
            </Link>
            
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3.5 py-2 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full sm:w-auto"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </Link>
            
            <Link
              href={siteConfig.resume}
              className="inline-flex items-center justify-center gap-1.5 rounded border border-border-muted bg-surface-raised px-3.5 py-2 text-xs font-medium text-text-primary shadow-3 transition-all duration-fast hover:bg-surface-strong hover:text-background active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary w-full sm:w-auto"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              Resume
            </Link>
          </div>

          {/* Interactive Mockup Widget */}
          <div className="mt-16 overflow-hidden rounded-xl border border-border-muted bg-surface-raised shadow-3 max-w-3xl mx-auto text-left animate-fade-in">
            {/* Mockup Title bar */}
            <div className="flex h-9 items-center justify-between border-b border-border-muted px-4 bg-background/35">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-border-muted border border-border-muted opacity-80" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-muted border border-border-muted opacity-80" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-muted border border-border-muted opacity-80" />
              </div>
              <div className="font-mono text-[9px] text-text-tertiary">shakir-ansari-workspace</div>
              <div className="w-12" />
            </div>

            {/* Mockup Content Grid */}
            <div className="flex flex-col sm:grid sm:grid-cols-[180px_1fr] sm:h-[260px] overflow-hidden">
              {/* Sidebar */}
              <div className="border-b sm:border-b-0 sm:border-r border-border-muted p-2 flex flex-row sm:flex-col overflow-x-auto sm:overflow-visible gap-1 text-left bg-background/25">
                <span className="hidden sm:block text-[9px] uppercase font-mono tracking-wider text-text-tertiary px-2 py-1 mb-1">Active Projects</span>
                
                <button
                  type="button"
                  onClick={() => setActiveProject("teraplay")}
                  className={`rounded px-2.5 py-1.5 text-xs text-center sm:text-left whitespace-nowrap transition-colors duration-fast ${
                    activeProject === "teraplay"
                      ? "bg-surface-strong text-background font-medium"
                      : "text-text-secondary hover:bg-surface-raised/55 hover:text-text-primary"
                  }`}
                >
                  TeraPlay
                </button>
                
                <button
                  type="button"
                  onClick={() => setActiveProject("bca-notes")}
                  className={`rounded px-2.5 py-1.5 text-xs text-center sm:text-left whitespace-nowrap transition-colors duration-fast ${
                    activeProject === "bca-notes"
                      ? "bg-surface-strong text-background font-medium"
                      : "text-text-secondary hover:bg-surface-raised/55 hover:text-text-primary"
                  }`}
                >
                  BCA Notes
                </button>
                
                <button
                  type="button"
                  onClick={() => setActiveProject("terabox-gateway")}
                  className={`rounded px-2.5 py-1.5 text-xs text-center sm:text-left whitespace-nowrap transition-colors duration-fast ${
                    activeProject === "terabox-gateway"
                      ? "bg-surface-strong text-background font-medium"
                      : "text-text-secondary hover:bg-surface-raised/55 hover:text-text-primary"
                  }`}
                >
                  Terabox Gateway
                </button>
              </div>

              {/* Console logs view */}
              <div className="p-4 flex flex-col justify-between overflow-hidden bg-background/10 h-[240px] sm:h-auto">
                <div className="overflow-y-auto">
                  <div className="font-mono text-[10px] text-text-tertiary">{data.path}</div>
                  <div className="font-mono text-[10px] text-emerald-500 mt-0.5">Uptime: 100% · Status: Active</div>
                  <pre className="mt-3.5 font-mono text-[11px] leading-relaxed text-text-primary overflow-x-auto whitespace-pre-wrap sm:whitespace-pre">
                    {data.payload}
                  </pre>
                </div>
                
                {/* Console footer stats */}
                <div className="text-[10px] text-text-tertiary border-t border-border-muted pt-2 flex flex-col sm:flex-row sm:justify-between gap-1.5 sm:gap-0 font-sans">
                  <span>{data.statLabel}: <strong className="text-text-primary font-normal">{data.statVal}</strong></span>
                  <span>{data.speedLabel}: <strong className="text-emerald-400 font-normal">{data.speedVal}</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtext info */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-text-tertiary">
            <span className="inline-flex items-center gap-2">
              <SparkIcon className="h-3.5 w-3.5 text-text-secondary" />
              Full-Stack Development
            </span>
            <span className="hidden h-3 w-px bg-border-muted sm:inline-block" />
            <span className="inline-flex items-center gap-2">
              <SparkIcon className="h-3.5 w-3.5 text-text-secondary" />
              Backend Systems &amp; APIs
            </span>
            <span className="hidden h-3 w-px bg-border-muted sm:inline-block" />
            <span className="inline-flex items-center gap-2">
              <SparkIcon className="h-3.5 w-3.5 text-text-secondary" />
              Cloud Deployment
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
