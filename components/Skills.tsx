import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn, StaggerContainer } from "@/components/Animate";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  { name: "Cloudflare", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" }
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
                    className="h-full w-full object-contain filter dark:brightness-95"
                    loading="lazy"
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
