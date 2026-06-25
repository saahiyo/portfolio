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
          {/* Navigation Links Group */}
          <div className="flex items-center gap-5 md:gap-6">
            {siteConfig.nav.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-sans text-sm py-1 transition-colors duration-fast after:content-[''] after:absolute after:w-0 after:-bottom-px after:left-0 after:h-px after:bg-current after:transition-all hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
                    isActive
                      ? "text-text-primary font-medium"
                      : "text-text-secondary hover:text-text-primary"
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
