import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Contact page information card. */
export default function ContactCard({
  icon,
  title,
  children,
  action,
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  action?: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="group flex h-full flex-col rounded-[4px] border border-ink/10 bg-parchment p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-[0_20px_44px_-24px_rgba(19,41,31,0.35)] md:p-7"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest/[0.06] text-gold-text">
          {icon}
        </span>
        <h2 className="font-display text-lg font-medium text-forest">{title}</h2>
      </div>
      <div className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/80">
        {children}
      </div>
      {action && <div className="mt-5">{action}</div>}
    </Reveal>
  );
}
