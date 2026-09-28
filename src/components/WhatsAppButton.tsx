import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

/**
 * Floating WhatsApp action — always reachable, mobile-first.
 * Sits above the safe-area inset; hidden on print.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`WhatsApp ${site.name} on ${site.phone.primary}`}
      className="wa-float fixed bottom-[max(1.1rem,env(safe-area-inset-bottom))] right-[max(1.1rem,env(safe-area-inset-right))] z-40 inline-flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#1f9e57] text-white shadow-[0_12px_32px_-8px_rgba(19,41,31,0.5)] transition-transform duration-300 hover:scale-105 active:scale-95 print:hidden"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
