import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SiteImage from "@/components/SiteImage";
import CTASection from "@/components/CTASection";
import InfoNote from "@/components/InfoNote";
import { Button } from "@/components/Button";
import {
  SparkIcon,
  UsersIcon,
  CoffeeIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kids & Family",
  description:
    "INZOZI KIDS PARK — play experiences for children, family outings and kids' birthdays in Gahanga, Kicukiro, Kigali.",
};

const play = [
  {
    icon: <SparkIcon size={17} />,
    t: "Bouncy Castles & Inflatables",
    d: "Soft, secure inflatable play — the park's signature attraction for energetic kids.",
  },
  {
    icon: <UsersIcon size={17} />,
    t: "Bumper Cars",
    d: "Gentle, controlled rides that let children feel like real drivers — a firm favourite.",
  },
  {
    icon: <CoffeeIcon size={17} />,
    t: "Room for Everyone",
    d: "Open grounds where children play and grown-ups relax nearby with food and coffee.",
  },
];

export default function KidsPage() {
  return (
    <>
      <Hero
        eyebrow="INZOZI KIDS PARK"
        title="Where Kids Run the Day"
        lede="Play, parties and family time — a park made for children in the heart of Gahanga."
        image="hero-kids"
      >
        <Button href="/enquire?type=Birthday" variant="gold">
          Plan a Kids' Party
        </Button>
      </Hero>

      {/* Play */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHeading
              eyebrow="Play Experiences"
              title="Safe fun, space to run"
              lede="INZOZI KIDS PARK gives children their own corner of the park — active, supervised play in open air, with room for the whole family to make a day of it."
            />
            <div className="space-y-4">
              {play.map((p, i) => (
                <Reveal
                  key={p.t}
                  delay={i * 90}
                  className="flex items-start gap-4 rounded-[4px] border border-ink/10 bg-parchment p-5"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                    {p.icon}
                  </span>
                  <span>
                    <span className="font-display block text-lg font-medium text-forest">
                      {p.t}
                    </span>
                    <span className="mt-1 block text-[13.5px] leading-relaxed text-ink/75">
                      {p.d}
                    </span>
                  </span>
                </Reveal>
              ))}
              <InfoNote>
                Current play experiences, supervision arrangements and entrance
                rates are confirmed by the INZOZI PARK team — ask when you plan
                your visit.
              </InfoNote>
            </div>
          </div>
        </div>
      </section>

      {/* Family day */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="zoom-media overflow-hidden rounded-[4px]">
              <SiteImage slot="family-day" sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-[4px]" />
            </div>
            <SectionHeading
              eyebrow="Family Days Out"
              title="Make it a full day"
              lede="Children play while the grown-ups enjoy the bar & grill, grills and coffee close by. Family outings, weekend afternoons, school visits — the park is built for spending the whole day, not just an hour."
            >
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services" variant="outline">
                  See Food & Drinks
                </Button>
                <Button href="/contact" variant="ghost">
                  Plan a School Visit
                </Button>
              </div>
            </SectionHeading>
          </div>
        </div>
      </section>

      {/* Kids parties */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Kids' Birthdays"
              title="A birthday they'll remember"
              lede="Celebrate with the whole park at your side — play areas for the children, catering and cake space for the family, and decoration to set the scene. Tell us the age, the date and the number of little guests."
            />
            <div className="zoom-media overflow-hidden rounded-[4px] lg:order-2">
              <SiteImage slot="kids-party" sizes="(min-width: 1024px) 50vw, 100vw" className="rounded-[4px]" />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Planning a kids' party or school visit?"
        lede="Tell us the date and the ages, and the team will help you put the day together."
        primaryLabel="Start an Enquiry"
        primaryHref="/enquire?type=Birthday"
      />
    </>
  );
}
