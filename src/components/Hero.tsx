import SiteImage from "./SiteImage";
import { Button } from "./Button";
import type { ImageSlotId } from "@/content/image-slots";
import type { ReactNode } from "react";

/**
 * Inner-page hero: full-width photography band with an editorial
 * headline block, consistent across all subpages.
 */
export default function Hero({
  eyebrow,
  title,
  lede,
  image,
  children,
  size = "default",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  image: ImageSlotId;
  children?: ReactNode;
  size?: "default" | "tall";
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-forest-deep ${
        size === "tall" ? "min-h-[78svh]" : "min-h-[62svh]"
      }`}
    >
      <div className="absolute inset-0 -z-10">
        <SiteImage
          slot={image}
          className="h-full w-full animate-hero-reveal [&>div]:h-full [&>div]:w-full"
          imgClassName="opacity-90"
          priority
          sizes="100vw"
          placeholderOverlay={false}
          overlay
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/30"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-40 sm:px-6 md:pb-20 lg:px-8">
        <p
          className="eyebrow flex items-center gap-3 text-gold-soft"
          style={{ animation: "fade-in 0.9s 0.15s ease both" }}
        >
          <span aria-hidden className="inline-block h-px w-8 bg-current opacity-70" />
          {eyebrow}
        </p>
        <h1
          className="font-display mt-4 max-w-3xl text-balance text-[clamp(2.4rem,6vw,4.2rem)] font-medium leading-[1.04] text-cream"
          style={{ animation: "fade-in 0.9s 0.3s ease both" }}
        >
          {title}
        </h1>
        {lede && (
          <p
            className="mt-5 max-w-xl text-[16px] leading-relaxed text-cream/75"
            style={{ animation: "fade-in 0.9s 0.45s ease both" }}
          >
            {lede}
          </p>
        )}
        {children && (
          <div
            className="mt-8 flex flex-wrap gap-3"
            style={{ animation: "fade-in 0.9s 0.6s ease both" }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
