import { Hero } from "@/components/Hero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { FlickeringGrid } from "@/components/ui/flickering-grid-hero";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Full-Page Background Flickering Grid */}
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden opacity-30">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.05}
          color="var(--text-secondary)"
          maxOpacity={0.2}
          className="h-full w-full"
        />
      </div>

      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </div>
  );
}
