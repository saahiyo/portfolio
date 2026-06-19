import Link from "next/link";
import { Container } from "@/components/Container";
import { ArrowRightIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            404
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-muted sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Back home
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
