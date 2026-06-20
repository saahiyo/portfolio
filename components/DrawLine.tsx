"use client";

import { motion, useReducedMotion } from "framer-motion";

interface DrawLineProps {
  orientation?: "vertical" | "horizontal";
  strokeWidth?: number;
  color?: string;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnce?: boolean;
}

/**
 * A self-drawing SVG line. The path traces itself in from start to end
 * (top→bottom for vertical, left→right for horizontal) using Framer Motion's
 * `pathLength`, which normalizes the path to length 1 and animates the
 * stroke-dashoffset like an invisible pen. Fills its parent's box — pair with
 * absolute positioning + h-full / w-full.
 */
export function DrawLine({
  orientation = "vertical",
  strokeWidth = 1,
  color = "var(--border-muted)",
  className,
  delay = 0,
  duration = 1.2,
  triggerOnce = true,
}: DrawLineProps) {
  const shouldReduceMotion = useReducedMotion();
  const isVertical = orientation === "vertical";
  const d = isVertical ? "M0.5 0 L0.5 1" : "M0 0.5 L1 0.5";

  if (shouldReduceMotion) {
    return (
      <svg
        className={className}
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        aria-hidden
        style={{ overflow: "visible" }}
      >
        <path
          d={d}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      aria-hidden
      style={{ overflow: "visible" }}
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: triggerOnce, margin: "-40px" }}
        transition={{
          pathLength: { duration, ease: [0.25, 1, 0.5, 1], delay },
        }}
      />
    </svg>
  );
}
