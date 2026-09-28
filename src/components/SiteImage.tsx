import Image from "next/image";
import { getSlot, type ImageSlotId } from "@/content/image-slots";
import { ASPECT_CLASS } from "@/content/aspects";

/**
 * SiteImage — renders a named photography slot.
 *
 * Asset priority (scripts/generate-placeholders.mjs):
 *   1. real photograph  at public/images/<slot.file>
 *   2. concept visual   at public/images/concept/<slot.id>.jpg  (labelled)
 *   3. branded placeholder SVG
 *
 * `overlay` marks slots that sit under a text overlay (hero bands,
 * caption pillars): a quieter placeholder variant is used there so the
 * page text stays dominant.
 */
export default function SiteImage({
  slot,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "100vw",
  placeholderOverlay = true,
  overlay = false,
  aspect,
}: {
  slot: ImageSlotId;
  alt?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  placeholderOverlay?: boolean;
  overlay?: boolean;
  /** Override the slot's natural aspect (e.g. uniform card grids). */
  aspect?: "wide" | "landscape" | "portrait";
}) {
  const s = getSlot(slot);
  const isQuiet = overlay && s.placeholder;
  const src = isQuiet ? s.src.replace(/\.svg$/, "-quiet.svg") : s.src;
  const aspectClass = ASPECT_CLASS[aspect ?? s.aspect] ?? "aspect-[4/3]";

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={alt ?? s.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${imgClassName}`}
      />
      {placeholderOverlay && s.placeholder && (
        <span
          aria-hidden
          className="pointer-events-none absolute right-2 top-2 z-10 rounded-[3px] bg-forest-deep/75 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-cream/85 backdrop-blur-sm"
        >
          Photo coming soon
        </span>
      )}
      {s.generated && (
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-2 left-2 z-10 rounded-[3px] bg-forest-deep/60 px-2 py-1 text-[8.5px] font-medium uppercase tracking-[0.18em] text-gold-soft/95 backdrop-blur-sm"
        >
          Concept visual
        </span>
      )}
    </div>
  );
}
