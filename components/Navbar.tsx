"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { DownloadIcon, MenuIcon, CloseIcon } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setOpen(false);
    }
  }, [pathname, open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border-muted bg-background/95 backdrop-blur-md"
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Left: Logo & Name */}
          <div className="flex flex-1 justify-start">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
              aria-label={`${siteConfig.name} — home`}
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4.5 w-4.5 text-text-primary">
                <path fillRule="evenodd" d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm-4.75-5.75L14.25 5.25a.75.75 0 111.06 1.06L6.31 15.31a.75.75 0 11-1.06-1.06zm-1.5-3.5L10.75 3.75a.75.75 0 111.06 1.06L4.81 11.81a.75.75 0 11-1.06-1.06zm4.5 7L16.25 9.75a.75.75 0 111.06 1.06L9.31 18.81a.75.75 0 11-1.06-1.06z" clipRule="evenodd" />
              </svg>
              <span className="font-sans text-sm font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
          </div>

          {/* Center: Desktop nav links */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-6">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xs font-medium transition-colors duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
                      isActive
                        ? "text-text-primary"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden items-center gap-4 md:flex">
              {/* GitHub */}
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-text-secondary transition-colors duration-fast hover:text-text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
              >
                GitHub
              </Link>

              {/* Separator */}
              <span aria-hidden="true" className="h-3.5 w-px bg-border-muted" />

              {/* Resume Button */}
              <Link
                href={siteConfig.resume}
                className="inline-flex items-center gap-1 rounded-full bg-text-primary px-4 py-1.5 text-xs font-semibold text-background transition-all duration-fast hover:bg-text-primary/90 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
              >
                <DownloadIcon className="h-3.5 w-3.5" />
                Resume
              </Link>

              {/* Separator */}
              <span aria-hidden="true" className="h-3.5 w-px bg-border-muted" />

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile theme toggle and menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-primary shadow-3 transition-all duration-fast active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? (
                  <CloseIcon className="h-4.5 w-4.5" />
                ) : (
                  <MenuIcon className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open ? (
        <div className="md:hidden border-t border-border-muted bg-background/95 backdrop-blur-md">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {siteConfig.nav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded px-3 py-2.5 text-xs font-medium transition-colors duration-fast ${
                      isActive
                        ? "bg-surface-raised text-text-primary"
                        : "text-text-secondary hover:bg-surface-raised hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded px-3 py-2.5 text-xs font-medium text-text-secondary hover:bg-surface-raised hover:text-text-primary"
              >
                GitHub
              </Link>
              
              <Link
                href={siteConfig.resume}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-text-primary px-3.5 py-2.5 text-xs font-semibold text-background transition-colors hover:bg-text-primary/90"
              >
                <DownloadIcon className="h-3.5 w-3.5" />
                Resume
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
