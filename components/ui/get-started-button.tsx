"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function GetStartedButton() {
  return (
    <Link
      href="/projects"
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded bg-text-primary text-background font-sans font-semibold text-xs h-[34px] pl-4 pr-9 transition-all duration-fast hover:scale-[1.01] active:scale-[0.99] w-full sm:w-auto shadow-2"
      )}
    >
      <span className="transition-opacity duration-500 group-hover:opacity-0">
        View Projects
      </span>
      <i className="absolute right-0.5 top-0.5 bottom-0.5 rounded-[3px] z-10 grid w-[26px] place-items-center transition-all duration-500 bg-background/15 group-hover:w-[calc(100%-0.25rem)] group-active:scale-95 text-current not-italic">
        <ChevronRight size={14} strokeWidth={2.5} aria-hidden="true" />
      </i>
    </Link>
  );
}
