import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./Icons";

type Variant = "gold" | "forest" | "outline" | "outlineLight" | "ghost";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-forest-deep hover:bg-gold-soft shadow-[0_10px_30px_-12px_rgba(185,137,60,0.55)]",
  forest: "bg-forest text-cream hover:bg-pine",
  outline: "border border-forest/25 text-forest hover:border-forest/60 hover:bg-forest/[0.04]",
  outlineLight: "border border-cream/35 text-cream hover:border-cream/70 hover:bg-cream/10",
  ghost: "text-forest hover:text-gold-text",
};

/**
 * Editorial button — small-caps label with a nudging arrow.
 * Rendered as Link when `href` is set, otherwise a <button>.
 */
export function Button({
  href,
  variant = "gold",
  children,
  className = "",
  arrow = true,
  type,
  onClick,
  external,
  ariaLabel,
}: {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  arrow?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
  ariaLabel?: string;
}) {
  const cls = [
    "group inline-flex min-h-11 items-center justify-center gap-2.5 px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] rounded-[3px] transition-all duration-300",
    styles[variant],
    className,
  ].join(" ");

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRightIcon
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={ariaLabel}>
        {inner}
      </a>
    ) : (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
