"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories, type Project } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectsFilterGrid({
  items = projects,
}: {
  items?: Project[];
}) {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const availableCats = useMemo(() => {
    const present = new Set(items.map((p) => p.category));
    return projectCategories.filter((c) => c === "All" || present.has(c as never));
  }, [items]);

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((p) => p.category === active);
  }, [active, items]);

  return (
    <>
      <div className="flex flex-wrap gap-1.5">
        {availableCats.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded border px-3 py-1 text-xs font-medium transition-all duration-fast focus-visible:outline focus-visible:outline-2 focus-visible:outline-text-primary ${
                isActive
                  ? "border-transparent bg-surface-strong text-background shadow-2"
                  : "border-border-muted bg-surface-raised text-text-secondary shadow-3 hover:border-text-secondary/40 hover:text-text-primary active:scale-[0.98]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div 
        layout 
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              key={project.slug}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-xs text-text-secondary">
          No projects in this category yet.
        </p>
      ) : null}
    </>
  );
}
