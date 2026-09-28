import Link from "next/link";
import { ImigongoMark } from "./Icons";
import { site } from "@/content/site";

/** INZOZI PARK wordmark with the diamond mark. */
export default function Logo({
  tone = "dark",
  compact = false,
}: {
  tone?: "dark" | "light";
  compact?: boolean;
}) {
  const color = tone === "light" ? "text-cream" : "text-forest";
  const sub = tone === "light" ? "text-cream/60" : "text-ink/80";
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${color}`}
    >
      <ImigongoMark
        size={compact ? 22 : 26}
        className={`transition-transform duration-500 group-hover:rotate-90 ${
          tone === "light" ? "text-gold-soft" : "text-gold-text"
        }`}
      />
      <span className="leading-none">
        <span
          className={`font-display block whitespace-nowrap font-semibold tracking-[0.08em] ${
            compact ? "text-[17px]" : "text-xl"
          }`}
        >
          INZOZI PARK
        </span>
        {!compact && (
          <span
            className={`mt-1 block text-[9px] font-medium uppercase tracking-[0.3em] ${sub}`}
          >
            Kigali · Rwanda
          </span>
        )}
      </span>
    </Link>
  );
}
