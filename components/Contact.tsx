import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  ArrowUpRightIcon,
} from "@/components/Icons";

const channels = [
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "@saahiyo",
    href: siteConfig.github,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Shakir Ansari",
    href: siteConfig.linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border-muted py-20 sm:py-28">
      <Container>
        <div className="overflow-hidden rounded-xl border border-border-muted bg-surface-raised shadow-3">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="05 — Contact"
                title="Let's build something."
                description="Have a project, role, or idea in mind? I'm open to full-stack work, collaborations, and interesting problems. Reach out through any channel below."
              />
            </div>

            <div className="flex flex-col gap-2.5">
              {channels.map((c) => {
                const Icon = c.icon;
                return (
                  <Link
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded border border-border-muted bg-background p-3.5 shadow-3 transition-all duration-fast hover:border-text-secondary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
                  >
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-primary shadow-3">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-[10px] text-text-tertiary">
                          {c.label}
                        </span>
                        <span className="block text-xs font-semibold text-text-primary">
                          {c.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
