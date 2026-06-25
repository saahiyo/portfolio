"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/Container";
import { ArrowUpRightIcon, CheckIcon, LoaderIcon } from "@/components/Icons";

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
  
  // Form submission state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Pick a random quote on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  // Fetch visitor count from API (without incrementing)
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

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setStatus("submitting");

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
    
    // Reset state after a delay
    setTimeout(() => setStatus("idle"), 5000);
  };

  const getOrdinalSuffix = (num: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  };

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border-muted py-20 sm:py-24">
      <Container>
        {/* Let's Work Together Heading */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">
            Let's Work Together
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Have a project, role, or idea in mind? Reach out below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Left Column: Get in Touch Card */}
          <div className="flex flex-col h-full rounded-xl border bg-[rgba(0,0,0,0.005)] border-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.02)] dark:border-[rgba(255,255,255,0.06)] p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-medium text-text-primary mb-5">
              Get in Touch
            </h3>

            {/* Action Link Rows stretching edge-to-edge */}
            <div className="flex-1 -mx-6 sm:-mx-8 border-t border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.06)] divide-y divide-[rgba(0,0,0,0.05)] dark:divide-[rgba(255,255,255,0.06)]">
              {/* Call Scheduler */}
              <Link
                href="https://cal.com/saahiyo/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-6 sm:px-8 py-4 transition-all duration-fast hover:bg-black/[0.015] dark:hover:bg-white/[0.015] group"
              >
                <div>
                  <span className="block text-xs font-semibold text-text-primary">Schedule a sync call</span>
                  <span className="block text-[10px] text-text-tertiary">15-minute strategy chat</span>
                </div>
                <ArrowUpRightIcon className="h-4 w-4 text-text-secondary transition-colors duration-fast group-hover:text-text-primary" />
              </Link>

              {/* Direct Email */}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between px-6 sm:px-8 py-4 transition-all duration-fast hover:bg-black/[0.015] dark:hover:bg-white/[0.015] group"
              >
                <div>
                  <span className="block text-xs font-semibold text-text-primary">{siteConfig.email}</span>
                  <span className="block text-[10px] text-text-tertiary">Quick inquiries & questions</span>
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
                  <span className="block text-xs font-semibold text-text-primary">Connect on LinkedIn</span>
                  <span className="block text-[10px] text-text-tertiary">Professional networking</span>
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

          {/* Right Column: Send a Message Card */}
          <div className="rounded-xl border bg-[rgba(0,0,0,0.005)] border-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.02)] dark:border-[rgba(255,255,255,0.06)] p-6 sm:p-8">
            <h3 className="text-base sm:text-lg font-medium text-text-primary mb-5">
              Send a Message
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mb-4">
                  <CheckIcon className="h-6 w-6 stroke-[2]" />
                </div>
                <h4 className="text-sm font-semibold text-text-primary">Message Sent Successfully!</h4>
                <p className="mt-1 text-xs text-text-secondary max-w-[240px]">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-background border border-border-muted rounded-lg px-3.5 py-2.5 text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none hover:border-text-secondary/40 focus:border-text-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border-muted rounded-lg px-3.5 py-2.5 text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none hover:border-text-secondary/40 focus:border-text-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-background border border-border-muted rounded-lg px-3.5 py-2.5 text-xs text-text-primary placeholder:text-text-tertiary focus:outline-none hover:border-text-secondary/40 focus:border-text-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-text-primary hover:bg-text-primary/90 text-background text-xs font-semibold rounded-lg transition-all active:scale-[0.99] disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <>
                      <LoaderIcon className="h-3.5 w-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
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

