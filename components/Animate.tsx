"use client";

import React, { createContext, useContext } from "react";
import { motion, useReducedMotion, Transition, Variants } from "framer-motion";

// Custom default transitions
const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
};

const EASE_TRANSITION: Transition = {
  type: "tween",
  ease: [0.25, 1, 0.5, 1], // Custom asymmetric ease-out
  duration: 0.5,
};

// Access context to support nested stagger animation triggers
const StaggerContext = createContext(false);

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.4,
  direction = "none",
  distance = 20,
  triggerOnce = true,
}: AnimationProps & {
  direction?: "none" | "up" | "down" | "left" | "right";
  distance?: number;
  triggerOnce?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInsideStagger = useContext(StaggerContext);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Calculate offsets based on direction
  const directions = {
    none: { x: 0, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directions[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        ease: [0.25, 1, 0.5, 1],
        duration,
        delay,
      },
    },
  };

  // If inside a stagger container, we don't define the whileInView controls on individual items,
  // the parent StaggerContainer will manage the triggers.
  if (isInsideStagger) {
    return (
      <motion.div variants={variants} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: "-40px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 30,
  triggerOnce = true,
  spring = false,
}: AnimationProps & {
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  triggerOnce?: boolean;
  spring?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInsideStagger = useContext(StaggerContext);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const directions = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const offset = directions[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: spring
        ? { ...SPRING_TRANSITION, delay }
        : { ...EASE_TRANSITION, duration, delay },
    },
  };

  if (isInsideStagger) {
    return (
      <motion.div variants={variants} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: "-40px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PopIn({
  children,
  className,
  delay = 0,
  triggerOnce = true,
}: AnimationProps & {
  triggerOnce?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInsideStagger = useContext(StaggerContext);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ...SPRING_TRANSITION,
        delay,
      },
    },
  };

  if (isInsideStagger) {
    return (
      <motion.div variants={variants} className={className}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: "-40px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0,
  staggerDelay = 0.08,
  triggerOnce = true,
  tagName = "div",
}: AnimationProps & {
  delayChildren?: number;
  staggerDelay?: number;
  triggerOnce?: boolean;
  tagName?: "div" | "ul" | "ol" | "nav" | "section";
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = tagName;
    return <Tag className={className}>{children}</Tag>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  // Dynamically resolve motion component based on tagName
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = (motion as any)[tagName] || motion.div;

  return (
    <StaggerContext.Provider value={true}>
      <MotionTag
        initial="hidden"
        whileInView="visible"
        viewport={{ once: triggerOnce, margin: "-40px" }}
        variants={containerVariants}
        className={className}
      >
        {children}
      </MotionTag>
    </StaggerContext.Provider>
  );
}

export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        type: "tween",
        ease: [0.25, 1, 0.5, 1], // Asymmetric ease-out
        duration: 0.45,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
