"use client";

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="aspect-[16/9] w-full object-cover"
      />
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
