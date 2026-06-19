import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  LayersIcon,
  ServerIcon,
  CloudIcon,
  CodeIcon,
  SparkIcon,
} from "@/components/Icons";

const focusAreas = [
  {
    icon: LayersIcon,
    title: "Full-Stack Development",
    body: "End-to-end product builds — from database schema and APIs to the polished frontend users actually touch.",
  },
  {
    icon: ServerIcon,
    title: "Backend Systems",
    body: "Reliable, well-structured services with clean REST surfaces, sensible caching, and clear error handling.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Deployments",
    body: "Shipping and operating apps on Vercel, Render, and AWS with redundancy, TLS, and caching in front.",
  },
  {
    icon: CodeIcon,
    title: "APIs",
    body: "Designing small, documented, CORS-safe APIs that other frontends and services can depend on.",
  },
  {
    icon: SparkIcon,
    title: "Product Development",
    body: "Turning vague ideas into shipped features — scoping, building, and iterating with real users in mind.",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="01 — About"
              title="Engineer who ships full-stack products end to end."
            />
          </div>

          <div className="space-y-4 text-sm leading-relaxed text-text-secondary sm:text-base">
            <p>
              I build web platforms, APIs, and cloud-hosted applications that
              hold up in production. My work spans the stack — from data models
              and REST services to React frontends and resilient deployments.
            </p>
            <p>
              I focus on clean API contracts, fast cold starts, and interfaces
              that stay simple as a product grows. Lately that has meant media
              streaming services, link-resolution APIs, and content platforms.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="rounded-xl border border-border-muted bg-surface-raised p-5 shadow-3 transition-colors duration-fast hover:border-text-secondary/40"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-muted bg-background text-text-primary shadow-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  {area.body}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
