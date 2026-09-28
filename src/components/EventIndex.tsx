import Link from "next/link";
import { eventTypes } from "@/content/site";
import { ArrowRightIcon } from "./Icons";
import Reveal from "./Reveal";

/**
 * Numbered editorial index of the gatherings hosted at the venue.
 * Links each row to the enquiry form with the event type pre-selected.
 */
export default function EventIndex({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <ul className="divide-y divide-ink/10 border-y border-ink/10">
      {eventTypes.map((e, i) => (
        <Reveal as="li" key={e.name} delay={i * 60}>
          <Link
            href={`/enquire?type=${encodeURIComponent(e.enquiryType)}`}
            className={`group flex items-baseline gap-5 py-5 transition-colors md:gap-8 md:py-6 ${
              light ? "hover:bg-cream/[0.04]" : "hover:bg-forest/[0.03]"
            }`}
          >
            <span
              className={`text-[11px] font-semibold tracking-[0.18em] ${light ? "text-cream/35" : "text-ink/55"}`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">
              <span
                className={`font-display block text-[clamp(1.25rem,2.6vw,1.8rem)] font-medium leading-tight transition-colors duration-300 ${
                  light ? "text-cream group-hover:text-gold-soft" : "text-forest group-hover:text-gold-text"
                }`}
              >
                {e.name}
              </span>
              <span className={`mt-1 block text-[13.5px] leading-relaxed ${light ? "text-cream/65" : "text-ink/80"}`}>
                {e.line}
              </span>
            </span>
            <ArrowRightIcon
              size={17}
              className={`mt-1 shrink-0 transition-all duration-300 group-hover:translate-x-1 ${
                light ? "text-cream/65 group-hover:text-gold-soft" : "text-ink/55 group-hover:text-gold-text"
              }`}
            />
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
