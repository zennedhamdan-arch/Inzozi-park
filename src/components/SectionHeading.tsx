import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Consistent editorial section heading:
 * eyebrow · serif title · optional lede. Left or centered.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "dark",
  className = "",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  children?: ReactNode;
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "";
  const titleTone = tone === "light" ? "text-cream" : "text-forest";
  const ledeTone = tone === "light" ? "text-cream/70" : "text-ink/80";
  const eyebrowTone = tone === "light" ? "text-gold-soft" : "text-gold-text";

  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignCls} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${eyebrowTone} flex items-center gap-3`}>
          {align === "left" && (
            <span aria-hidden className="inline-block h-px w-8 bg-current opacity-60" />
          )}
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display mt-4 text-balance text-[clamp(1.9rem,4.2vw,2.9rem)] font-medium leading-[1.08] ${titleTone}`}
      >
        {title}
      </h2>
      {lede && (
        <p className={`mt-5 text-[16px] leading-relaxed ${ledeTone} ${align === "center" ? "mx-auto max-w-xl" : "max-w-xl"}`}>
          {lede}
        </p>
      )}
      {children}
    </Reveal>
  );
}
