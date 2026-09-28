import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import Note from "@/components/InfoNote";
import {
  PinIcon,
  SparkIcon,
  UsersIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Weddings",
  description:
    "Celebrate your wedding at INZOZI PARK, Gahanga — a dedicated wedding environment with hall, decoration, catering and supporting hospitality services in Kigali.",
};

const why = [
  {
    icon: <PinIcon size={18} />,
    t: "One destination",
    d: "The hall, the garden, decoration, catering and the bar — arranged in one place instead of five.",
  },
  {
    icon: <SparkIcon size={18} />,
    t: "Decoration & detail",
    d: "Professional decoration services bring your colour, style and vision together across the venue.",
  },
  {
    icon: <UsersIcon size={18} />,
    t: "Guests looked after",
    d: "Food, drinks, coffee and a kids park — your guests of every age have somewhere to be, and enjoy.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      <Hero
        eyebrow="Weddings at INZOZI PARK"
        size="tall"
        title="Your Celebration Starts Here"
        lede="A dedicated wedding environment in Gahanga — the hall, the grounds around it, and the services that bring the day together."
        image="hero-weddings"
      >
        <Button href="/enquire?type=Wedding" variant="gold">
          Plan a Wedding
        </Button>
        <Button href={waLink("Hello INZOZI PARK! We are planning a wedding and would like to enquire about your venue.")} external variant="outlineLight">
          <span className="inline-flex items-center gap-2">
            <WhatsAppIcon size={15} /> WhatsApp Us
          </span>
        </Button>
      </Hero>

      {/* Why */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="Why INZOZI PARK"
            title="Your day, brought together"
            lede="A wedding touches every part of the park — here is how the pieces work for you."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {why.map((w, i) => (
              <Reveal
                key={w.t}
                delay={i * 100}
                className="rounded-[4px] border border-ink/10 bg-parchment p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_48px_-28px_rgba(19,41,31,0.35)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream">
                  {w.icon}
                </span>
                <h3 className="font-display mt-5 text-[22px] font-medium text-forest">
                  {w.t}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/80">
                  {w.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venue + decoration + catering */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 md:space-y-28 md:py-28 lg:px-8">
          {[
            {
              img: "wedding-reception" as const,
              eyebrow: "The Wedding Venue",
              t: "A hall with room for your celebration",
              d: "Say your vows and celebrate into the evening at the same address. The event hall hosts your ceremony and reception, with the garden and grounds extending the day outdoors when the weather allows.",
            },
            {
              img: "wedding-decor" as const,
              eyebrow: "Decoration",
              t: "Your vision, professionally styled",
              d: "From the entrance to the head table, decoration services shape the atmosphere of your day — fabrics, flowers, lighting and styling arranged with the team around your theme.",
            },
            {
              img: "service-catering" as const,
              eyebrow: "Catering",
              t: "A feast for your guests",
              d: "Catering for weddings is planned around you — menus, service style and timing arranged with the INZOZI PARK team so the meal is one less thing to worry about.",
            },
          ].map((b, i) => (
            <Reveal key={b.t}>
              <div
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="zoom-media relative overflow-hidden rounded-[4px]">
                  <SiteImage
                    slot={b.img}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="rounded-[4px]"
                  />
                </div>
                <div>
                  <p className="eyebrow flex items-center gap-3">
                    <span aria-hidden className="inline-block h-px w-8 bg-current opacity-60" />
                    {b.eyebrow}
                  </p>
                  <h2 className="font-display mt-3 text-[clamp(1.7rem,3.4vw,2.4rem)] font-medium leading-tight text-forest">
                    {b.t}
                  </h2>
                  <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink/80">
                    {b.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Guest experience */}
      <section className="bg-forest py-20 text-cream md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            tone="light"
            eyebrow="The Guest Experience"
            title="Every guest, looked after"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "service-bargrill" as const,
                t: "Bar & Grill",
                d: "Drinks and grills for the evening — a relaxed place for guests to gather between ceremonies.",
              },
              {
                img: "service-coffee" as const,
                t: "Coffee & Refreshments",
                d: "Coffee and refreshments through the day, for guests and the wedding party alike.",
              },
              {
                img: "service-kids" as const,
                t: "Kids Park",
                d: "Little guests have their own celebration — play experiences that keep children happy all day.",
              },
            ].map((g, i) => (
              <Reveal key={g.t} delay={i * 100} className="group relative overflow-hidden rounded-[4px]">
                <SiteImage
                  slot={g.img}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="rounded-[4px]"
                  placeholderOverlay={false}
                  overlay
                />
                <div aria-hidden className="absolute inset-0 rounded-[4px] bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-medium text-cream">{g.t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-cream/70">{g.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Weddings at the Park"
            title="Picture your day here"
            lede="A glimpse of the setting — concept visuals here are being replaced with photos of real INZOZI PARK weddings as they are delivered."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {(["wedding-ceremony", "venue-garden", "wedding-decor"] as const).map(
              (slot, i) => (
                <Reveal key={slot} delay={i * 90} className="zoom-media overflow-hidden rounded-[4px]">
                  <SiteImage slot={slot} sizes="(min-width: 640px) 33vw, 100vw" className="rounded-[4px]" />
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Note + CTA */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Note className="text-center">
            Availability, packages and pricing are provided by the INZOZI PARK
            team based on your event requirements.
          </Note>
        </div>
      </section>

      <CTASection
        title="Ready to plan your wedding?"
        lede="Tell us your date, your guest count and your dreams — the team will respond with availability and the possibilities."
        primaryLabel="Start Your Wedding Enquiry"
        primaryHref="/enquire?type=Wedding"
      />
    </>
  );
}
