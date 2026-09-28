import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactCard from "@/components/ContactCard";
import InfoNote from "@/components/InfoNote";
import CTASection from "@/components/CTASection";
import MapEmbed from "@/components/MapEmbed";
import { Button } from "@/components/Button";
import {
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  PinIcon,
  ClockIcon,
  DirectionsIcon,
  MailIcon,
} from "@/components/Icons";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact INZOZI PARK — call, WhatsApp or visit us in Kicukiro–Gahanga, Kigali, near Merez Station.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Let's Talk About Your Plans"
        lede="Call, message or come by — the INZOZI PARK team is easy to reach."
        image="hero-contact"
      />

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <ContactCard
              icon={<PhoneIcon size={17} />}
              title="Call Us"
              action={
                <Button href={site.phone.primaryHref} external variant="forest" arrow={false} className="w-full">
                  Call {site.phone.primary}
                </Button>
              }
            >
              <p className="font-medium text-forest">{site.phone.primary}</p>
              <p className="text-[12px] uppercase tracking-[0.16em] text-ink/80">
                Primary line
              </p>
              <hr className="my-3 border-ink/10" />
              <p className="font-medium text-forest">{site.phone.secondary}</p>
              <p className="text-[12px] uppercase tracking-[0.16em] text-ink/80">
                Secondary line
              </p>
            </ContactCard>

            {/* WhatsApp */}
            <ContactCard
              icon={<WhatsAppIcon size={17} />}
              title="WhatsApp"
              delay={80}
              action={
                <Button href={waLink()} external variant="forest" arrow={false} className="w-full">
                  <span className="inline-flex items-center gap-2">
                    <WhatsAppIcon size={15} /> Chat on WhatsApp
                  </span>
                </Button>
              }
            >
              <p>
                The fastest way to reach the team — send your questions, dates
                and ideas straight to the park's WhatsApp.
              </p>
            </ContactCard>

            {/* Instagram */}
            <ContactCard
              icon={<InstagramIcon size={17} />}
              title="Instagram"
              delay={160}
              action={
                <Button href={site.instagram.url} external variant="forest" arrow={false} className="w-full">
                  Follow {site.instagram.handle}
                </Button>
              }
            >
              <p>
                See the latest events, decoration, food and family days on the
                park's public Instagram page.
              </p>
            </ContactCard>

            {/* Visit */}
            <ContactCard
              icon={<PinIcon size={17} />}
              title="Visit the Park"
              action={
                <Button href={site.mapsUrl} external variant="forest" arrow={false} className="w-full">
                  <span className="inline-flex items-center gap-2">
                    <DirectionsIcon size={15} /> Get Directions
                  </span>
                </Button>
              }
            >
              <p className="font-medium text-forest">{site.name}</p>
              <p>
                {site.address.area}
                <br />
                {site.address.city}, {site.address.country}
                <br />
                <span className="text-ink/75">{site.address.landmark}</span>
              </p>
            </ContactCard>

            {/* Hours */}
            <ContactCard icon={<ClockIcon size={17} />} title="Opening Hours" delay={80}>
              {site.openingHours ? (
                <ul className="space-y-1">
                  {site.openingHours.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : (
                <p>
                  Opening hours are being finalised. Contact the team for
                  current opening times and visiting hours.
                </p>
              )}
              {!site.openingHours && (
                <InfoNote className="mt-4">
                  Confirmed opening hours will be published here.
                </InfoNote>
              )}
            </ContactCard>

            {/* Enquiry */}
            <ContactCard
              icon={<MailIcon size={17} />}
              title="Event Enquiries"
              delay={160}
              action={
                <Button href="/enquire" variant="gold" className="w-full">
                  Start an Enquiry
                </Button>
              }
            >
              <p>
                Planning a wedding, meeting or celebration? Send the team your
                details and they will come back to you with availability and
                options.
              </p>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-parchment">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <Reveal>
            <MapEmbed
              query="Inzozi Park Gahanga Kigali"
              title="Map — INZOZI PARK, Gahanga, Kigali"
              className="aspect-[16/9] w-full sm:aspect-[21/9]"
              addressLine="INZOZI PARK · Kicukiro – Gahanga · Near Merez Station"
            />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Tell us what you're planning"
        lede="Share the occasion and the team will help you explore the possibilities."
        primaryLabel="Start an Enquiry"
      />
    </>
  );
}
