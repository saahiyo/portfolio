import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn, StaggerContainer } from "@/components/Animate";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "React", icon: "/icons/skills/react.svg" },
  { name: "Next.js", icon: "/icons/skills/nextjs.svg" },
  { name: "TypeScript", icon: "/icons/skills/typescript.svg" },
  { name: "Tailwind CSS", icon: "/icons/skills/tailwindcss.svg" },
  { name: "JavaScript", icon: "/icons/skills/javascript.svg" },
  { name: "Node.js", icon: "/icons/skills/nodejs.svg" },
  { name: "Express.js", icon: "/icons/skills/express.svg" },
  { name: "Python", icon: "/icons/skills/python.svg" },
  { name: "Flask", icon: "/icons/skills/flask.svg" },
  { name: "MySQL", icon: "/icons/skills/mysql.svg" },
  { name: "MongoDB", icon: "/icons/skills/mongodb.svg" },
  { name: "Firebase", icon: "/icons/skills/firebase.svg" },
  { name: "AWS", icon: "/icons/skills/aws.svg" },
  { name: "Docker", icon: "/icons/skills/docker.svg" },
  { name: "Linux", icon: "/icons/skills/linux.svg" },
  { name: "Nginx", icon: "/icons/skills/nginx.svg" },
  { name: "Cloudflare", icon: "/icons/skills/cloudflare.svg" }
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-border-muted py-20 sm:py-28">
      <Container>
        <FadeIn direction="up">
          <SectionHeading
            eyebrow="03 — Skills"
            title="Tech Stack"
            description="The tools and technologies I reach for across the stack to build products."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.03} className="mt-12 flex flex-wrap items-center justify-start gap-4">
          {skills.map((skill) => (
            <FadeIn key={skill.name} direction="up" distance={15}>
              <div className="relative group/tooltip inline-flex">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-border-muted bg-surface-raised p-2.5 sm:p-3 shadow-3 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer hover:border-text-secondary/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-contain filter dark:brightness-95"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-medium rounded-md whitespace-nowrap pointer-events-none opacity-0 translate-y-1 group-hover/tooltip:opacity-100 group-hover/tooltip:translate-y-0 transition-all duration-150 bg-zinc-900 text-zinc-100 shadow-lg border border-zinc-800 z-50">
                  {skill.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-zinc-900" />
                </div>
              </div>
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
