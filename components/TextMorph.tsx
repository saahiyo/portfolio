"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface TextMorphProps {
  values: string[];
  interval?: number;
  charDelay?: number;
  charDuration?: number;
  className?: string;
}

export function TextMorph({
  values,
  interval = 3000,
  charDelay = 0.025,
  charDuration = 0.3,
  className,
}: TextMorphProps) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % values.length);
  }, [values.length]);

  useEffect(() => {
    if (values.length <= 1) return;
    timerRef.current = setTimeout(advance, interval);
    return () => clearTimeout(timerRef.current);
  }, [index, values.length, interval, advance]);

  const current = values[index];

  // Reduced motion — just show the text, no per-character animation
  if (shouldReduceMotion) {
    return (
      <span className={className} aria-live="polite">
        {current}
      </span>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={current}
        className={`inline-flex ${className ?? ""}`}
        aria-live="polite"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {current.split("").map((char, i) => (
          <motion.span
            key={`${i}-${char}`}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
            variants={{
              hidden: {
                opacity: 0,
                y: 8,
                filter: "blur(4px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: charDuration,
                  ease: [0.25, 1, 0.5, 1],
                  delay: i * charDelay,
                },
              },
              exit: {
                opacity: 0,
                y: -8,
                filter: "blur(4px)",
                transition: {
                  duration: charDuration * 0.6,
                  ease: [0.36, 0, 0.66, -1],
                  delay: (current.length - 1 - i) * (charDelay * 0.5),
                },
              },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  );
}
