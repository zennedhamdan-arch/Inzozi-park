import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import { InstagramIcon } from "@/components/Icons";
import { site, services } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of INZOZI PARK — a destination in Gahanga, Kicukiro bringing events, hospitality, family activities and entertainment together in Kigali.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About INZOZI PARK"
        title="A Park Built Around Celebrations"
        lede="Events, hospitality, family activities and entertainment — gathered in one corner of Gahanga."
        image="hero-about"
      />

      {/* The name */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <SectionHeading
              eyebrow="Our Name"
              title={
                <>
                  “Inzozi” — the Kinyarwanda word for{" "}
                  <span className="italic text-gold-text">dreams</span>.
                </>
              }
              lede="It is the idea the whole park is built on: that the moments which matter most — a wedding, a reunion, a child's birthday, an ordinary sunny afternoon — deserve a place that was designed for them."
            />
            <Reveal delay={120} className="zoom-media overflow-hidden rounded-[4px]">
              <SiteImage slot="about-moments" sizes="(min-width: 1024px) 40vw, 100vw" className="rounded-[4px]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* The place */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="zoom-media overflow-hidden rounded-[4px] md:order-2">
              <SiteImage slot="venue-garden" sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-[4px]" />
            </div>
            <SectionHeading
              eyebrow="The Place"
              title="Made in Gahanga"
              lede="You will find the park in Gahanga, Kicukiro — near Merez Station, on Kigali's south-eastern side. The setting pairs an elegant event hall and rooftop bar with open garden grounds, all looking out over the Gahanga hills. It is close enough to the city for guests to reach easily, and far enough out that a visit feels like an occasion of its own."
            />
          </div>
        </div>
      </section>

      {/* What you'll find */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="What You'll Find"
            title="One park, many possibilities"
            lede="Everything the park offers today — each part able to host you on its own, and all of them working together."
          />
          <dl className="mx-auto mt-14 max-w-3xl">
            {services.map((s, i) => (
              <Reveal
                key={s.id}
                delay={i * 60}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ink/10 py-4 first:border-t"
              >
                <dt className="font-display text-[20px] font-medium text-forest">
                  {s.name}
                </dt>
                <dd className="text-[13.5px] text-ink/80">{s.summary}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* How we host */}
      <section className="bg-forest py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading
              tone="light"
              eyebrow="How We Host"
              title="People first, always"
            />
            <div className="space-y-5 text-[15.5px] leading-relaxed text-cream/75">
              <Reveal>
                <p>
                  Ask around in Gahanga and you will hear the same words —
                  space, welcome, and a team that looks after its guests. That
                  is the standard INZOZI PARK holds itself to, whether the park
                  is hosting six hundred wedding guests or one family with a
                  free afternoon.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p>
                  We would rather show you than tell you. Come by, walk the
                  grounds, have a coffee at the bar — and when you are ready,
                  tell us what you are planning.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20 lg:px-8">
          <Reveal>
            <InstagramIcon size={28} className="mx-auto text-gold-text" />
            <h2 className="font-display mt-5 text-[clamp(1.7rem,3.4vw,2.3rem)] font-medium text-forest">
              Follow the park on Instagram
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink/75">
              The freshest look at events, decoration, food and family days —
              posted directly by the INZOZI PARK team.
            </p>
            <div className="mt-7">
              <Button href={site.instagram.url} external variant="forest">
                {site.instagram.handle} on Instagram
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Be part of the story"
        lede="Whatever the occasion, the park is ready for it. Tell us what you're dreaming of."
        primaryLabel="Plan Your Event"
      />
    </>
  );
}
