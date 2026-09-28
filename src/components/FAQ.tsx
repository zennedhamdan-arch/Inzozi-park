import { faqs } from "@/content/site";

/** Accessible accordion FAQ using native details/summary (works without JS). */
export default function FAQ() {
  return (
    <div className="divide-y divide-ink/10 rounded-[4px] border border-ink/10 bg-parchment">
      {faqs.map((f, i) => (
        <details key={f.q} className="group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-medium text-forest transition-colors hover:text-gold-text md:px-7 md:py-5 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              aria-hidden
              className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-forest transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:bg-gold group-open:text-cream"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M6 1v10M1 6h10" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink/80 md:px-7 md:pb-6 md:pr-16">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
