import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hardware-accelerated CSS Grid Pattern */}
      <div
        className="pointer-events-none fixed inset-0 -z-50 opacity-40 bg-[radial-gradient(var(--border)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)]"
        aria-hidden="true"
      />

      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </div>
  );
}
