import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center bg-forest-deep px-4 text-center text-cream">
      <div>
        <p className="eyebrow justify-center flex items-center gap-3 text-gold-soft">
          <span aria-hidden className="inline-block h-px w-8 bg-current opacity-60" />
          Page not found
          <span aria-hidden className="inline-block h-px w-8 bg-current opacity-60" />
        </p>
        <h1 className="font-display mt-4 text-[clamp(2.4rem,6vw,4rem)] font-medium">
          This path leads elsewhere
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-cream/70">
          The page you are looking for doesn&rsquo;t exist — but the park is
          right where it always is, in Gahanga.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="gold">
            Back to Home
          </Button>
          <Button href="/venue" variant="outlineLight">
            Explore the Venue
          </Button>
        </div>
      </div>
    </section>
  );
}
