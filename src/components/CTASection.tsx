import { Button } from "./Button";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";
import { waLink } from "@/lib/whatsapp";

/** Reusable closing call-to-action band. */
export default function CTASection({
  title,
  lede,
  primaryLabel = "Start an Enquiry",
  primaryHref = "/enquire",
}: {
  title: string;
  lede: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream md:py-28">
      {/* subtle imigongo-inspired edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1.5 opacity-70"
        style={{
          background:
            "repeating-linear-gradient(115deg, var(--color-gold) 0 14px, transparent 14px 28px, var(--color-cream) 28px 32px, transparent 32px 46px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pine/40 blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="eyebrow text-gold-soft justify-center flex items-center gap-3">
          <span aria-hidden className="inline-block h-px w-8 bg-current opacity-60" />
          Inzozi Park
          <span aria-hidden className="inline-block h-px w-8 bg-current opacity-60" />
        </p>
        <h2 className="font-display mt-4 text-balance text-[clamp(2rem,4.6vw,3.1rem)] font-medium leading-[1.08]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-cream/70">
          {lede}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} variant="gold" className="w-full sm:w-auto">
            {primaryLabel}
          </Button>
          <Button
            href={waLink()}
            external
            variant="outlineLight"
            className="w-full sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <WhatsAppIcon size={15} /> WhatsApp Us
            </span>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
