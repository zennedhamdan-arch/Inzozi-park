import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import { services } from "@/content/site";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "INZOZI PARK services — wedding & events venue, decoration, catering, bar & grill, coffee & refreshments and the kids park, all in Gahanga, Kicukiro, Kigali.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Services"
        title="Six Services, One Team"
        lede="Everything INZOZI PARK offers, working together — or each on its own, exactly as your occasion needs."
        image="hero-services"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((s, i) => (
              <Reveal key={s.id}>
                <article
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="zoom-media relative overflow-hidden rounded-[4px]">
                    <SiteImage
                      slot={s.image as never}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="rounded-[4px]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.24em] text-gold-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display mt-2 text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium text-forest">
                      {s.name}
                    </h2>
                    <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink/80">
                      {s.summary}
                    </p>

                    <h3 className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/80">
                      Use it for
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.uses.map((u) => (
                        <li
                          key={u}
                          className="inline-flex items-center gap-1.5 rounded-full border border-ink/12 bg-parchment px-3 py-1.5 text-[12.5px] text-ink/80"
                        >
                          <CheckIcon size={12} className="text-gold-text" />
                          {u}
                        </li>
                      ))}
                    </ul>

                    {s.note && (
                      <p className="mt-5 border-l-2 border-gold/50 pl-4 text-[13.5px] italic leading-relaxed text-ink/80">
                        {s.note}
                      </p>
                    )}

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Button href="/enquire" variant="forest">
                        Plan Your Event
                      </Button>
                      {s.href !== "/services" && s.href !== "/enquire" && (
                        <Button href={s.href} variant="ghost">
                          Learn More
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        lede="Tell us the occasion and the team will suggest how INZOZI PARK's services can fit together for you."
        primaryLabel="Start an Enquiry"
      />
    </>
  );
}
