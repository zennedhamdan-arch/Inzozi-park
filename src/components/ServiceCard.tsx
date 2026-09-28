import Link from "next/link";
import SiteImage from "./SiteImage";
import { ArrowRightIcon } from "./Icons";
import type { Service } from "@/content/site";

/**
 * Editorial service card — image, name, the approved one-line summary
 * and a quiet “learn more” affordance. No template-style chrome.
 */
export default function ServiceCard({
  service,
  priority = false,
  className = "",
}: {
  service: Service;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={service.href}
      className={`group block focus-visible:outline-gold ${className}`}
    >
      <div className="zoom-media relative overflow-hidden rounded-[4px]">
        <SiteImage
          slot={service.image as never}
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="rounded-[4px]"
          aspect="landscape"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[22px] font-medium leading-snug text-forest transition-colors duration-300 group-hover:text-gold-text">
            {service.name}
          </h3>
          <p className="mt-1.5 max-w-sm text-[14px] leading-relaxed text-ink/75">
            {service.summary}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/12 text-forest transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-cream"
        >
          <ArrowRightIcon size={14} />
        </span>
      </div>
    </Link>
  );
}
