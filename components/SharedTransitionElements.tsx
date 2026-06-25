"use client";
/* eslint-disable @next/next/no-img-element */

import { ViewTransition } from "react";

export function SharedImage({
  slug,
  src,
  alt,
}: {
  slug: string;
  src: string;
  alt: string;
}) {
  return (
    <ViewTransition name={`project-image-${slug}`}>
      <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-zinc-950/40 text-text-tertiary select-none overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            <div className="flex flex-col items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-text-secondary/30">
              <svg
                className="h-7 w-7 stroke-[1.25]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span>Preview Pending</span>
            </div>
          </>
        )}
      </div>
    </ViewTransition>
  );
}

export function SharedTitle({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <ViewTransition name={`project-title-${slug}`}>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        {children}
      </h1>
    </ViewTransition>
  );
}
