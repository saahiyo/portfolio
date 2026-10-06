"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Gradient Mask Fade Background */}
      <div 
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-background [mask-image:linear-gradient(to_bottom,black_82%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent)]" 
        aria-hidden="true"
      />

      <Container className="relative">
        <nav className="flex h-16 items-center justify-between">
          {/* Navigation Links Group with Floating Capsule Container */}
          <div className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-border-muted bg-surface-raised/80 backdrop-blur-md px-1.5 py-1 shadow-3">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-2.5 sm:px-3 py-1 text-xs sm:text-[13px] font-sans transition-all duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
                    isActive
                      ? "bg-surface-strong text-background font-medium shadow-1"
                      : "text-text-secondary hover:text-text-primary hover:bg-black/5 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle aligned to the far right */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}
