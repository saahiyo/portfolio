"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { ArrowUpRightIcon } from "@/components/Icons";

const quotes = [
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Make it simple, but significant.", author: "Don Draper" },
  { text: "Quality is more important than quantity. One home run is much better than two doubles.", author: "Steve Jobs" }
];

export function Contact() {
  const [quote, setQuote] = useState(quotes[0]);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // Pick a random quote on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  // Fetch visitor count from API
  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setVisitorCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  const getOrdinalSuffix = (num: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border-muted py-20 sm:py-24">
      <Container>
        {/* Let's Work Together Heading */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            Let's Work Together
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Have a project, role, or idea in mind? Reach out below.
          </p>
        </div>

        {/* Centered Single Column Layout */}
        <div className="max-w-xl mx-auto">
          {/* Get in Touch Card */}
          <div className="flex flex-col h-full rounded-xl border bg-[rgba(0,0,0,0.005)] border-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.02)] dark:border-[rgba(255,255,255,0.06)] p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-medium text-text-primary mb-5 text-center">
              Get in Touch
            </h3>

            {/* Action Link Rows stretching edge-to-edge */}
            <div className="flex-1 -mx-6 sm:-mx-8 border-t border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.06)] divide-y divide-[rgba(0,0,0,0.05)] dark:divide-[rgba(255,255,255,0.06)]">
              {/* Direct Email */}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between px-6 sm:px-8 py-4 transition-all duration-fast hover:bg-black/[0.015] dark:hover:bg-white/[0.015] group"
              >
                <div>
                  <span className="block text-xs font-semibold text-text-primary">Direct email</span>
                  <span className="block text-[10px] text-text-tertiary">{siteConfig.email}</span>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
              </Link>

              {/* GitHub */}
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 sm:px-8 py-4 transition-all duration-fast hover:bg-black/[0.015] dark:hover:bg-white/[0.015] group"
              >
                <div>
                  <span className="block text-xs font-semibold text-text-primary">GitHub</span>
                  <span className="block text-[10px] text-text-tertiary">Explore repositories & open-source projects</span>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
              </Link>

              {/* LinkedIn */}
              <Link
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 sm:px-8 py-4 transition-all duration-fast hover:bg-black/[0.015] dark:hover:bg-white/[0.015] group"
              >
                <div>
                  <span className="block text-xs font-semibold text-text-primary">LinkedIn</span>
                  <span className="block text-[10px] text-text-tertiary">Connect for professional updates & career</span>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
              </Link>
            </div>

            {/* Bottom Availability Status */}
            <div className="mt-8 space-y-2 pt-5 border-t border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-mono text-text-secondary">Replies within 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-mono text-text-secondary">Open to remote, contract & full-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quotes & Visitor Counter Card Widget */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border-muted/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Quote side */}
          <div className="flex-1 max-w-lg">
            <span className="block font-mono text-[24px] leading-none text-text-tertiary/20 select-none">“</span>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed italic -mt-2">
              {quote.text}
            </p>
            <span className="block mt-1 text-[10px] font-mono text-text-tertiary">— {quote.author}</span>
          </div>

          {/* Sibling Separator */}
          <div className="hidden md:block w-px h-10 bg-border-muted" aria-hidden="true" />
          <div className="md:hidden h-px w-full bg-border-muted/50" aria-hidden="true" />

          {/* Visitor Counter */}
          <div className="shrink-0 flex items-center gap-2 font-sans text-xs text-text-secondary">
            {visitorCount !== null ? (
              <p>
                You are the <span className="font-semibold text-text-primary">{visitorCount.toLocaleString()}</span>
                <sup className="text-[9px] align-super ml-0.5">{getOrdinalSuffix(visitorCount)}</sup> visitor
              </p>
            ) : (
              <p>Welcome to my portfolio</p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}


