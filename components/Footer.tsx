import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { WavePath } from "@/components/ui/wave-path";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8">
      <Container>
        <WavePath className="w-full text-border-muted mb-6" />
        
        {/* Row 1: Logo & Name on the left, Social Links on the right */}
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-surface-strong text-[11px] font-bold text-background shadow-3 border border-border-muted">
              SA
            </span>
            <span className="font-mono text-xs text-text-secondary">
              {siteConfig.name}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
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

        {/* Row 2: Copyright on the left, Tech Info on the right */}
        <div className="mt-5 flex items-center justify-between w-full text-[9px] sm:text-[10px] text-text-tertiary border-t border-border-muted/30 pt-4 gap-4">
          <p className="truncate">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="shrink-0">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
