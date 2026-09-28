import { ClockIcon } from "./Icons";

/**
 * “Pending confirmation” note — used wherever a fact still needs the
 * client's sign-off (opening hours, capacities, rates…). Kept visually
 * quiet but clearly labelled, per the content-accuracy rules.
 */
export default function InfoNote({
  children,
  label = "To be confirmed",
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const tones =
    tone === "dark"
      ? "border-gold-soft/30 bg-cream/[0.06] text-cream/70"
      : "border-gold/40 bg-gold/[0.07] text-ink/80";
  return (
    <div className={`flex gap-3 rounded-[4px] border p-4 text-[13px] leading-relaxed ${tones} ${className}`}>
      <ClockIcon size={16} className="mt-0.5 shrink-0 text-gold-text" />
      <p>
        <span className="mr-2 inline-block rounded-[3px] bg-gold/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-text">
          {label}
        </span>
        {children}
      </p>
    </div>
  );
}
