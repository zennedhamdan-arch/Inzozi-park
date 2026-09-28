import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import EventIndex from "@/components/EventIndex";
import InfoNote from "@/components/InfoNote";
import { Button } from "@/components/Button";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Venue & Events",
  description:
    "The INZOZI PARK event venue in Gahanga, Kicukiro — an event hall, garden and rooftop bar hosting weddings, meetings, celebrations and gatherings in Kigali.",
};

const spaces = [
  {
    img: "venue-hall" as const,
    name: "The Event Hall",
    desc: "An elegant indoor hall at the heart of the park — the setting for wedding receptions, conferences, meetings and large celebrations, whatever the weather.",
  },
  {
    img: "venue-garden" as const,
    name: "Garden & Grounds",
    desc: "Open green space around the venue — room for outdoor setups, photo sessions and children playing between ceremonies.",
  },
  {
    img: "venue-rooftop" as const,
    name: "Rooftop Bar & Lounge",
    desc: "A bar area with a view over the Gahanga hills — a favourite spot for guests to relax while the celebration continues below.",
  },
];

const goodToKnow = [
  "Parking on site",
  "Wheelchair-accessible entrance and facilities",
  "Card payments accepted",
];

export default function VenuePage() {
  return (
    <>
      <Hero
        eyebrow="Venue & Events"
        title="A Setting Made for Gathering"
        lede="Hall, garden and rooftop — one address in Gahanga where Kigali comes together to celebrate."
        image="hero-venue"
      />

      {/* Spaces */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHeading
            eyebrow="The Spaces"
            title="Three settings, one destination"
            lede="Every event finds its own rhythm here — indoors, outdoors, or both at once."
          />
          <div className="mt-12 space-y-14 md:space-y-20">
            {spaces.map((s, i) => (
              <Reveal key={s.name}>
                <div
                  className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="zoom-media relative overflow-hidden rounded-[4px]">
                    <SiteImage
                      slot={s.img}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="rounded-[4px]"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.24em] text-gold-text">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display mt-2 text-[clamp(1.5rem,3vw,2.1rem)] font-medium text-forest">
                      {s.name}
                    </h3>
                    <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink/80">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 max-w-2xl">
            <InfoNote>
              Room capacities, layouts and availability are provided by the
              INZOZI PARK team based on your event requirements.
            </InfoNote>
          </Reveal>
        </div>
      </section>

      {/* Events hosted */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
            <SectionHeading
              eyebrow="What We Host"
              title="Gatherings of every kind"
              lede="Tap a gathering to start an enquiry with the event type pre-selected."
            />
            <EventIndex />
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <SectionHeading
              eyebrow="Good to Know"
              title="Practicalities, sorted"
              lede="Visitor information publicly listed for the venue — to be reconfirmed with the team."
            />
            <div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {goodToKnow.map((g) => (
                  <Reveal
                    key={g}
                    as="li"
                    className="flex items-start gap-3 rounded-[4px] border border-ink/10 bg-parchment p-4 text-[14px] text-ink/80"
                  >
                    <CheckIcon size={16} className="mt-0.5 shrink-0 text-gold-text" />
                    {g}
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-5">
                <InfoNote>
                  These visitor details come from public listings of INZOZI PARK.
                  Please confirm current arrangements with the team when booking.
                </InfoNote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Come and see the grounds"
        lede="The best way to plan is to visit. Tell us your date and what you have in mind, and the team will walk you through the options."
        primaryLabel="Plan Your Event"
      />
    </>
  );
}
