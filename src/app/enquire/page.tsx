import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/Button";
import {
  PhoneIcon,
  WhatsAppIcon,
  InstagramIcon,
  CheckIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/Icons";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Event Enquiry",
  description:
    "Plan your event at INZOZI PARK — tell us about your wedding, celebration, meeting or visit and the team will come back to you with availability and options.",
};

const steps = [
  {
    icon: <SparkIcon size={17} />,
    t: "Share your plans",
    d: "Tell us the occasion, the date and the services you are interested in.",
  },
  {
    icon: <WhatsAppIcon size={17} />,
    t: "We come back to you",
    d: "The INZOZI PARK team confirms availability and walks you through the options.",
  },
  {
    icon: <UsersIcon size={17} />,
    t: "Plan it together",
    d: "Decoration, catering and the day itself — arranged with the team, step by step.",
  },
];

export default function EnquirePage() {
  return (
    <>
      {/* Compact header band */}
      <section className="bg-forest pb-10 pt-32 text-cream md:pb-14 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className="eyebrow flex items-center gap-3 text-gold-soft"
            style={{ animation: "fade-in 0.8s 0.1s ease both" }}
          >
            <span aria-hidden className="inline-block h-px w-8 bg-current opacity-70" />
            Event Enquiry
          </p>
          <h1
            className="font-display mt-4 max-w-2xl text-balance text-[clamp(2.2rem,5.4vw,3.8rem)] font-medium leading-[1.05]"
            style={{ animation: "fade-in 0.8s 0.25s ease both" }}
          >
            Tell us what you&rsquo;re planning
          </h1>
          <p
            className="mt-4 max-w-xl text-[15.5px] leading-relaxed text-cream/70"
            style={{ animation: "fade-in 0.8s 0.4s ease both" }}
          >
            Fill in the form below and the team will come back to you to
            confirm availability and explore the possibilities together.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
            {/* Form */}
            <Reveal>
              <EnquiryForm />
            </Reveal>

            {/* Aside */}
            <div className="space-y-6">
              <Reveal delay={120} className="rounded-[4px] bg-parchment p-6 md:p-7">
                <h2 className="font-display text-xl font-medium text-forest">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-5">
                  {steps.map((s, i) => (
                    <li key={s.t} className="flex gap-4">
                      <span className="flex flex-col items-center">
                        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                          {s.icon}
                        </span>
                        {i < steps.length - 1 && (
                          <span aria-hidden className="mt-2 w-px flex-1 bg-ink/10" />
                        )}
                      </span>
                      <span>
                        <span className="block text-[14.5px] font-semibold text-forest">
                          {s.t}
                        </span>
                        <span className="mt-1 block text-[13.5px] leading-relaxed text-ink/75">
                          {s.d}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 flex items-start gap-2 border-t border-ink/10 pt-4 text-[12.5px] leading-relaxed text-ink/75">
                  <CheckIcon size={14} className="mt-0.5 shrink-0 text-gold-text" />
                  Sending an enquiry is not a booking confirmation — the team
                  confirms availability with you personally.
                </p>
              </Reveal>

              <Reveal delay={200} className="rounded-[4px] border border-ink/10 bg-parchment p-6 md:p-7">
                <h2 className="font-display text-xl font-medium text-forest">
                  Prefer to reach out directly?
                </h2>
                <div className="mt-5 space-y-3">
                  <Button href={waLink()} external variant="forest" arrow={false} className="w-full">
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> WhatsApp Us
                    </span>
                  </Button>
                  <Button href={site.phone.primaryHref} external variant="outline" arrow={false} className="w-full">
                    <span className="inline-flex items-center gap-2">
                      <PhoneIcon size={15} /> {site.phone.primary}
                    </span>
                  </Button>
                  <a
                    href={site.phone.secondaryHref}
                    className="flex min-h-11 items-center justify-center gap-2 text-[13.5px] font-medium text-ink/75 transition-colors hover:text-forest"
                  >
                    <PhoneIcon size={14} /> {site.phone.secondary}
                  </a>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-center gap-2 border-t border-ink/10 pt-3 text-[13.5px] font-medium text-ink/75 transition-colors hover:text-forest"
                  >
                    <InstagramIcon size={15} /> {site.instagram.handle} on Instagram
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
