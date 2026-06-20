"use client";

import { ViewTransition } from "react";
import { PageTransition } from "@/components/Animate";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition>
      <PageTransition>{children}</PageTransition>
    </ViewTransition>
  );
}
