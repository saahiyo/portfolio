"use client";

import { PageTransition } from "@/components/Animate";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
