import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import {
  GitHubIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  CheckIcon,
  LayersIcon,
} from "@/components/Icons";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.name} · ${siteConfig.name}`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.cardImage, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} · ${siteConfig.name}`,
      description: project.summary,
      images: [project.cardImage],
    },
  };
}

function Block({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border-muted py-12 first:border-t-0">
      <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
            {index}
          </p>
          <h2 className="mt-1 text-sm font-semibold text-text-primary">{title}</h2>
        </div>
        <div className="max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <article className="pt-28 pb-24 bg-background">
      <Container>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-1 rounded border border-border-muted bg-surface-raised px-2 py-1 text-[11px] font-medium text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
        >
          <ArrowRightIcon className="h-3 w-3 rotate-180" />
          All projects
        </Link>

        {/* Header */}
        <header className="max-w-3xl animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded border border-border-muted bg-surface-raised px-2 py-0.5 text-[10px] font-medium text-text-secondary shadow-3">
              {project.category}
            </span>
            <span className="font-mono text-xs text-text-tertiary">{project.year}</span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-xs font-mono uppercase tracking-wider text-text-secondary">{project.tagline}</p>
          <p className="mt-4 text-xs leading-relaxed text-text-secondary">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
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
        </header>

        {/* Hero image */}
        <div className="mt-10 overflow-hidden rounded-xl border border-border-muted bg-background">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.cardImage}
            alt={`${project.name} preview`}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {/* Overview */}
        <Block index="01" title="Overview">
          <p className="text-xs leading-relaxed text-text-secondary">
            {project.overview}
          </p>
        </Block>

        {/* Features */}
        <Block index="02" title="Features">
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-lg border border-border-muted bg-surface-raised p-4 shadow-3"
              >
                <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded bg-surface-strong text-background shadow-2">
                  <CheckIcon className="h-2.5 w-2.5" />
                </span>
                <span className="text-xs text-text-primary leading-tight">{f}</span>
              </li>
            ))}
          </ul>
        </Block>

        {/* Architecture */}
        <Block index="03" title="Architecture">
          <ul className="space-y-3">
            {project.architecture.map((a) => (
              <li key={a} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-primary shadow-3">
                  <LayersIcon className="h-2.5 w-2.5" />
                </span>
                <span className="text-xs leading-relaxed text-text-secondary">{a}</span>
              </li>
            ))}
          </ul>
        </Block>

        {/* Screenshots */}
        <Block index="04" title="Screenshots">
          <div className="grid gap-5 sm:grid-cols-2">
            {project.screenshots.map((shot) => (
              <figure key={shot.src}>
                <div className="overflow-hidden rounded-xl border border-border-muted bg-background">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-[10px] text-text-tertiary">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Block>

        {/* Tech Stack */}
        <Block index="05" title="Tech Stack">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded border border-border-muted bg-surface-raised px-2 py-0.5 font-mono text-[10px] text-text-secondary shadow-3 transition-colors duration-fast hover:border-text-secondary/40 hover:text-text-primary"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>

        {/* Challenges Solved */}
        <Block index="06" title="Challenges Solved">
          <div className="space-y-3">
            {project.challenges.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border-muted bg-surface-raised p-5 shadow-3 transition-colors duration-fast hover:border-text-secondary/40"
              >
                <h3 className="text-xs font-semibold text-text-primary">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Block>

        {/* Links */}
        <Block index="07" title="Links">
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => {
              const isGithub = link.type === "github";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-[11px] font-medium transition-all duration-fast active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
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
                  <ArrowRightIcon className="h-3 w-3" />
                </Link>
              );
            })}
          </div>
        </Block>

        {/* Prev / Next */}
        <nav className="mt-16 grid gap-4 border-t border-border-muted pt-8 sm:grid-cols-2">
          <Link
            href={`/projects/${prev.slug}`}
            className="group rounded-xl border border-border-muted bg-surface-raised p-5 shadow-3 transition-colors duration-fast hover:border-text-secondary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
          >
            <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-mono">← Previous</span>
            <span className="mt-1 block text-xs font-semibold text-text-primary group-hover:text-text-secondary">
              {prev.name}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-xl border border-border-muted bg-surface-raised p-5 text-right shadow-3 transition-colors duration-fast hover:border-text-secondary/40 sm:col-start-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
          >
            <span className="text-[10px] text-text-tertiary uppercase tracking-wider font-mono">Next →</span>
            <span className="mt-1 block text-xs font-semibold text-text-primary group-hover:text-text-secondary">
              {next.name}
            </span>
          </Link>
        </nav>
      </Container>
    </article>
  );
}
