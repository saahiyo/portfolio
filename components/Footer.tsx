import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { WavePath } from "@/components/ui/wave-path";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10">
      <Container>
        <WavePath className="w-full text-border-muted mb-10" />
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-surface-strong text-[11px] font-bold text-background shadow-3 border border-border-muted">
              SA
            </span>
            <span className="font-mono text-xs text-text-secondary">
              {siteConfig.name}
            </span>
          </div>

          <p className="order-3 text-center text-xs text-text-secondary sm:order-2">
            Built with Next.js and Tailwind CSS
          </p>

          <div className="order-2 flex items-center gap-1.5 sm:order-3">
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </Link>
            <Link
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-secondary shadow-3 transition-all duration-fast hover:border-text-secondary/40 hover:text-text-primary active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
            >
              <MailIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] text-text-tertiary">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
