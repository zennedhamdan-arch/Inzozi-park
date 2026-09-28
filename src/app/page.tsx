import type { Metadata } from "next";
import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import MapEmbed from "@/components/MapEmbed";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import EventIndex from "@/components/EventIndex";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/Button";
import { services } from "@/content/site";
import { site } from "@/content/site";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DirectionsIcon,
  PinIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: `${site.name} — Weddings, Events & Family Destination in Kigali`,
  description:
    "From weddings and celebrations to family days and special events, INZOZI PARK brings venue, hospitality and entertainment together in one destination in Gahanga, Kicukiro — Kigali.",
};

/* ---------------------------------------------------------------- hero -- */
function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-forest-deep">
      <div className="absolute inset-0 -z-10">
        <SiteImage
          slot="hero-home"
          priority
          sizes="100vw"
          placeholderOverlay={false}
          overlay
          className="h-full w-full animate-hero-reveal [&>div]:h-full [&>div]:w-full"
          imgClassName="opacity-90"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/50 to-forest-deep/25"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-deep to-transparent"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-36 sm:px-6 md:pb-24 lg:px-8">
        <p
          className="eyebrow flex items-center gap-3 text-gold-soft"
          style={{ animation: "fade-in 1s 0.2s ease both" }}
        >
          <span aria-hidden className="inline-block h-px w-10 bg-current opacity-70" />
          Kicukiro · Gahanga · Kigali
        </p>

        <h1
          className="font-display mt-5 max-w-4xl text-balance text-[clamp(2.7rem,8vw,5.4rem)] font-medium leading-[1.02] text-cream"
          style={{ animation: "fade-in 1s 0.4s ease both" }}
        >
          Where Your Special Moments{" "}
          <span className="italic text-gold-soft">Come to Life</span>
        </h1>

        <p
          className="mt-6 max-w-xl text-[16px] leading-relaxed text-cream/75 md:text-[17px]"
          style={{ animation: "fade-in 1s 0.6s ease both" }}
        >
          From weddings and celebrations to family days and special events,
          INZOZI PARK brings venue, hospitality and entertainment together in
          one destination.
        </p>

        <div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          style={{ animation: "fade-in 1s 0.8s ease both" }}
        >
          <Button href="/enquire" variant="gold" className="sm:min-w-48">
            Plan Your Event
          </Button>
          <Button href="/venue" variant="outlineLight" className="sm:min-w-48">
            Explore INZOZI PARK
          </Button>
        </div>
      </div>

      <a
        href="#intro"
        aria-label="Scroll to discover INZOZI PARK"
        className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream/70 transition-colors hover:border-gold-soft hover:text-gold-soft md:bottom-8 md:right-8 md:inline-flex"
        style={{ animation: "fade-in 1s 1.2s ease both" }}
      >
        <ArrowDownIcon size={18} />
      </a>
    </section>
  );
}

/* --------------------------------------------------------------- intro -- */
function Intro() {
  const facts = [
    { k: "The setting", v: "Event hall, garden and rooftop bar in Gahanga" },
    { k: "The services", v: "Decoration · Catering · Bar & Grill · Coffee · Kids Park" },
    { k: "The place", v: "Kicukiro – Gahanga, near Merez Station, Kigali" },
  ];
  return (
    <section id="intro" className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <SectionHeading
            eyebrow="A destination for celebrations"
            title={
              <>
                One destination.
                <br />
                Many reasons to celebrate.
              </>
            }
            lede="INZOZI PARK is an events and family destination in Gahanga, Kicukiro — bringing together an event venue, decoration and catering services, a bar & grill, coffee and refreshments, and a dedicated kids park. Whether you are planning a wedding, hosting a gathering, or simply looking for a relaxed family outing, it all happens in one place."
          />
          <dl className="mt-2 lg:mt-16">
            {facts.map((f, i) => (
              <Reveal
                key={f.k}
                delay={i * 90}
                className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4 first:border-t"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-text">
                  {f.k}
                </dt>
                <dd className="text-right text-[14px] leading-relaxed text-ink/80">
                  {f.v}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ what's at park -- */
function WhatsAtThePark() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="What's at INZOZI PARK"
          title="Everything your day needs, in one place"
          lede="Six services that work together — plan one, or bring them all together for your occasion."
        />
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 90}>
              <ServiceCardLite service={s} priority={i < 3} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/** Home-grid variant of a service card (compact). */
function ServiceCardLite({
  service,
  priority = false,
}: {
  service: (typeof services)[number];
  priority?: boolean;
}) {
  return (
    <Link href={service.href} className="group block">
      <div className="zoom-media relative overflow-hidden rounded-[4px]">
        <SiteImage
          slot={service.image as never}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="rounded-[4px]"
          aspect="landscape"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[22px] font-medium leading-snug text-forest transition-colors duration-300 group-hover:text-gold-text">
            {service.name}
          </h3>
          <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-ink/75">
            {service.summary}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/12 text-forest transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-cream"
        >
          <ArrowRightIcon size={14} />
        </span>
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------ weddings -- */
function WeddingsBand() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-deep text-cream">
      <div className="absolute inset-0 -z-10">
        <SiteImage
          slot="wedding-ceremony"
          sizes="100vw"
          placeholderOverlay={false}
          overlay
          className="h-full w-full [&>div]:h-full [&>div]:w-full"
          imgClassName="opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/60 to-forest-deep/25"
        />
      </div>
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-36 lg:px-8">
        <Reveal className="max-w-xl">
          <p className="eyebrow flex items-center gap-3 text-gold-soft">
            <span aria-hidden className="inline-block h-px w-8 bg-current opacity-70" />
            Weddings at INZOZI PARK
          </p>
          <h2 className="font-display mt-4 text-balance text-[clamp(2.1rem,5vw,3.6rem)] font-medium leading-[1.06]">
            Your Celebration Starts Here
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-cream/75">
            INZOZI PARK offers a dedicated wedding and event environment — the
            hall, the garden around it, and decoration, catering and supporting
            hospitality services under the same roof. Share your plans with our
            team and we will help you shape the day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/weddings" variant="gold">
              Plan a Wedding
            </Button>
            <Button href="/gallery" variant="outlineLight">
              See the Gallery
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- events --- */
function EventsSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <SectionHeading
            eyebrow="Events & Gatherings"
            title="Space for every gathering"
            lede="Choose a gathering to start an enquiry — the team confirms availability, options and pricing with you personally."
          >
            <div className="mt-8">
              <Button href="/venue" variant="outline">
                About the Venue
              </Button>
            </div>
          </SectionHeading>
          <EventIndex />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- experience -- */
function Experience() {
  const pillars = [
    {
      n: "01",
      t: "The Venue",
      d: "A hall and grounds designed for gathering — ceremonies, receptions and conferences in one setting.",
      img: "venue-hall" as const,
    },
    {
      n: "02",
      t: "The Food",
      d: "Catering for occasions, a bar & grill for relaxed evenings, and coffee for every visit in between.",
      img: "service-catering" as const,
    },
    {
      n: "03",
      t: "The Family",
      d: "A kids park and open grounds where children play and families spend the whole day together.",
      img: "service-kids" as const,
    },
    {
      n: "04",
      t: "The Entertainment",
      d: "Music, celebration and play — the atmosphere that turns a booking into a memory.",
      img: "kids-play" as const,
    },
  ];

  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="The INZOZI PARK Experience"
          title="More than a venue"
          lede="A destination rather than a hall rental — venue, food, family and entertainment woven into one visit."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 90}
              className="group relative overflow-hidden rounded-[4px]"
            >
              <SiteImage
                slot={p.img}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="rounded-[4px]"
                placeholderOverlay={false}
                overlay
              />
              <div
                aria-hidden
                className="absolute inset-0 rounded-[4px] bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-[10px] font-semibold tracking-[0.24em] text-gold-soft">
                  {p.n}
                </span>
                <h3 className="font-display mt-1 text-xl font-medium text-cream">
                  {p.t}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-cream/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                  {p.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- gallery -- */
function GalleryPreview() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery"
            title="A look at INZOZI PARK"
            lede="A first look at the atmosphere of the park — labelled concept visuals are being replaced with the venue's own photography as it is delivered."
          />
          <Reveal className="mb-1">
            <Button href="/gallery" variant="outline">
              View Full Gallery
            </Button>
          </Reveal>
        </div>
        <div className="mt-10">
          <GalleryGrid limit={6} showFilters={false} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ location -- */
function LocationSection() {
  return (
    <section className="bg-parchment">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Find Us"
            title="In the heart of Gahanga"
            lede={`You will find INZOZI PARK in ${site.address.area} — ${site.address.landmark} — an easy trip from central Kigali. Call, WhatsApp or simply come by and see the grounds for yourself.`}
          >
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={site.mapsUrl} external variant="forest">
                <span className="inline-flex items-center gap-2">
                  <DirectionsIcon size={15} /> Get Directions
                </span>
              </Button>
              <Button href="/contact" variant="ghost" arrow>
                Contact Details
              </Button>
            </div>
          </SectionHeading>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[4px]">
              <MapEmbed
                query="Inzozi Park Gahanga Kigali"
                title="Map — INZOZI PARK, Gahanga, Kigali"
                className="aspect-[4/3] w-full"
                addressLine="Kicukiro – Gahanga · Near Merez Station"
              />
              <div className="flex items-center justify-between gap-4 bg-parchment px-5 py-4">
                <p className="flex items-center gap-2.5 text-[13.5px] text-ink/80">
                  <PinIcon size={16} className="shrink-0 text-gold-text" />
                  {site.address.area} · {site.address.landmark}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.14em] text-forest underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold-text"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- page -- */
export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Intro />
      <WhatsAtThePark />
      <WeddingsBand />
      <EventsSection />
      <Experience />
      <GalleryPreview />
      <LocationSection />
      <CTASection
        title="Planning something special?"
        lede="Tell us what you're planning and our team can help you explore the possibilities."
        primaryLabel="Start an Enquiry"
        primaryHref="/enquire"
      />
    </>
  );
}
