"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { DownloadIcon, MenuIcon, CloseIcon, GitHubIcon } from "@/components/Icons";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Close mobile menu on route change only
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setOpen(false);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  const closeMenu = useCallback(() => setOpen(false), []);

  // Animation variants for the full-page overlay
  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] as const },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  // Container for staggering children
  const menuContainerVariants = {
    hidden: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
  };

  // Individual menu item animation
  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 transition-colors duration-fast border-b ${
          open
            ? "z-[60] border-transparent bg-transparent"
            : "z-50 border-border-muted bg-background/95 backdrop-blur-md"
        }`}
      >
        <Container>
          <nav className="flex h-16 items-center justify-between">
            {/* Left: Logo & Name */}
            <div className="flex flex-1 justify-start">
              <Link
                href="/"
                className="relative z-[60] flex items-center gap-2 text-sm font-semibold tracking-tight text-text-primary transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
                aria-label={`${siteConfig.name} — home`}
                onClick={closeMenu}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icon.svg" alt="" width={20} height={20} className="h-5 w-5 rounded-[4px]" />
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
                  className="relative z-[60] inline-flex h-8 w-8 items-center justify-center rounded border border-border-muted bg-surface-raised text-text-primary shadow-3 transition-all duration-fast active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {open ? (
                      <motion.span
                        key="close"
                        initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CloseIcon className="h-4.5 w-4.5" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="menu"
                        initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MenuIcon className="h-4.5 w-4.5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </nav>
        </Container>
      </header>

      {/* Full-page mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[55] md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-background/98 backdrop-blur-xl cursor-pointer"
              onClick={closeMenu}
            />

            {/* Menu content */}
            <motion.div
              className="relative flex h-full flex-col justify-center px-8"
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <nav className="flex flex-col gap-2">
                {siteConfig.nav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div key={item.href} variants={menuItemVariants}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className={`block rounded-xl px-4 py-4 text-2xl font-semibold tracking-tight transition-colors duration-fast ${
                          isActive
                            ? "bg-surface-raised text-text-primary"
                            : "text-text-secondary hover:bg-surface-raised/50 hover:text-text-primary active:scale-[0.99]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Divider */}
              <motion.div
                variants={menuItemVariants}
                className="my-6 h-px bg-border-muted"
              />

              {/* Bottom actions */}
              <div className="flex flex-col gap-3">
                <motion.div variants={menuItemVariants}>
                  <Link
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-raised/50 hover:text-text-primary"
                  >
                    <GitHubIcon className="h-4.5 w-4.5" />
                    GitHub
                  </Link>
                </motion.div>

                <motion.div variants={menuItemVariants}>
                  <Link
                    href={siteConfig.resume}
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 rounded-full bg-text-primary px-5 py-3.5 text-sm font-semibold text-background transition-all hover:bg-text-primary/90 active:scale-[0.98]"
                  >
                    <DownloadIcon className="h-4 w-4" />
                    Download Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
