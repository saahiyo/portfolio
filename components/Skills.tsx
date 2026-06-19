import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import {
  CodeIcon,
  ServerIcon,
  DatabaseIcon,
  CloudIcon,
} from "@/components/Icons";
import type { ComponentType, SVGProps } from "react";

type SkillGroup = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: CodeIcon,
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    icon: ServerIcon,
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    icon: DatabaseIcon,
    title: "Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Linux", "Nginx", "Cloudflare"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border-muted py-20 sm:py-28 bg-background">
      <Container>
        <SectionHeading
          eyebrow="03 — Skills"
          title="Technical Skills"
          description="The tools I reach for across the stack — grouped by where they fit in a build."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.title}
                className="rounded-xl border border-border-muted bg-surface-raised p-5 shadow-3 transition-colors duration-fast hover:border-text-secondary/40"
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded border border-border-muted bg-background text-text-primary shadow-3">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-xs font-semibold text-text-primary">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded border border-border-muted bg-background px-2 py-0.5 font-mono text-[10px] text-text-secondary transition-colors duration-fast hover:border-text-secondary/40 hover:text-text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
