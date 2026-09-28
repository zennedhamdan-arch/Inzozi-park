import type { Metadata } from "next";
import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The INZOZI PARK gallery — weddings, events, food & drinks, kids & family and the venue in Gahanga, Kicukiro, Kigali.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="The INZOZI PARK Collection"
        lede="Moments, spaces and celebrations — a growing collection of photography from the park."
        image="hero-gallery"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <p className="border-l-2 border-gold/60 pl-4 text-[13.5px] italic leading-relaxed text-ink/80">
              Some frames below are clearly-labelled concept visuals, created for
              this first website concept to show how the finished gallery could
              look. They are being replaced with the INZOZI PARK team's own
              photography — filter by category to explore the collection.
            </p>
          </Reveal>
          <GalleryGrid />
        </div>
      </section>

      <CTASection
        title="Imagine your own moment here"
        lede="Every celebration leaves a story. Tell us what you're planning and we'll help you create yours."
        primaryLabel="Start an Enquiry"
      />
    </>
  );
}
