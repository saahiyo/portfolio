import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function GetStartedButton() {
  return (
    <Button className="group relative overflow-hidden" size="lg" asChild>
      <Link href="/projects" className="w-full">
        <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
          View Projects
        </span>
        <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-background/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-current not-italic">
          <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
        </i>
      </Link>
    </Button>
  );
}
