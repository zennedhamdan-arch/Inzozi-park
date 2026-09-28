"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  gallerySlots,
  GALLERY_CATEGORIES,
  type GalleryCategoryId,
} from "@/content/image-slots";
import { CloseIcon } from "./Icons";

/**
 * Premium gallery: category filtering over a masonry grid with a
 * keyboard-friendly lightbox. All items render through the image-slot
 * manifest, so real photographs appear automatically as they are added.
 */
export default function GalleryGrid({
  limit,
  showFilters = true,
}: {
  /** Show only the first N items (used for the home-page preview). */
  limit?: number;
  showFilters?: boolean;
}) {
  const all = useMemo(() => gallerySlots(), []);
  const [category, setCategory] = useState<GalleryCategoryId>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const items = useMemo(() => {
    const filtered =
      category === "all" ? all : all.filter((s) => s.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [all, category, limit]);

  // Lightbox keyboard support
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % items.length));
      if (e.key === "ArrowLeft") setLightbox((v) => (v === null ? v : (v - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("wa-hide");
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("wa-hide");
    };
  }, [lightbox, items.length]);

  const onSelectCategory = useCallback((id: GalleryCategoryId) => setCategory(id), []);

  return (
    <div>
      {showFilters && (
        <div
          role="tablist"
          aria-label="Gallery categories"
          className="mb-8 flex flex-wrap items-center gap-2"
        >
          {GALLERY_CATEGORIES.map((c) => {
            const active = category === c.id;
            const count =
              c.id === "all" ? all.length : all.filter((s) => s.category === c.id).length;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={active}
                onClick={() => onSelectCategory(c.id)}
                className={`inline-flex min-h-10 items-center gap-1.5 rounded-full border px-4 py-2 text-[12px] font-medium tracking-wide transition-all duration-300 ${
                  active
                    ? "border-forest bg-forest text-cream"
                    : "border-ink/15 bg-transparent text-ink/75 hover:border-forest/40 hover:text-forest"
                }`}
              >
                {c.label}
                <span
                  className={`text-[10px] ${active ? "text-cream/60" : "text-ink/55"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <div key={category} className="masonry" style={{ animation: "fade-in 0.5s ease both" }}>
        {items.map((s, i) => (
          <figure key={s.id} className="group relative">
            <button
              type="button"
              onClick={() => setLightbox(i)}
              aria-label={`Open image: ${s.label}`}
              className="zoom-media block w-full cursor-zoom-in overflow-hidden rounded-[4px] focus-visible:outline-gold"
            >
              <div
                className={`relative w-full ${
                  s.aspect === "portrait"
                    ? "aspect-[4/5]"
                    : s.aspect === "wide"
                      ? "aspect-[16/10]"
                      : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                {s.generated && (
                  <span
                    aria-hidden
                    className="absolute bottom-2 left-2 z-10 rounded-[3px] bg-forest-deep/60 px-2 py-1 text-[8.5px] font-medium uppercase tracking-[0.18em] text-gold-soft/95 backdrop-blur-sm"
                  >
                    Concept visual
                  </span>
                )}
              </div>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-forest-deep/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-left text-[12px] font-medium uppercase tracking-[0.14em] text-cream">
                  {s.label}
                </span>
              </figcaption>
            </button>
          </figure>
        ))}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────── */}
      {lightbox !== null && items[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${items[lightbox].label}`}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/95 p-4 backdrop-blur-sm"
          style={{ animation: "fade-in 0.3s ease both" }}
          onClick={() => setLightbox(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold-soft hover:text-gold-soft"
          >
            <CloseIcon size={20} />
          </button>
          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`relative w-full overflow-hidden rounded-[4px] ${
                items[lightbox].aspect === "portrait" ? "aspect-[4/5] max-h-[72svh] mx-auto w-auto" : "aspect-[16/10]"
              }`}
            >
              <Image
                src={items[lightbox].src}
                alt={items[lightbox].alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-3 text-cream/80">
              <span className="text-[13px] font-medium uppercase tracking-[0.16em]">
                {items[lightbox].label}
              </span>
              <span className="text-[12px] text-cream/60">
                {lightbox + 1} / {items.length}
              </span>
            </figcaption>
          </figure>
          {/* prev / next */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((v) => (v === null ? v : (v - 1 + items.length) % items.length));
                }}
                className="absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 rotate-180 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 12h16m0 0-6-6m6 6-6 6" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox((v) => (v === null ? v : (v + 1) % items.length));
                }}
                className="absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 12h16m0 0-6-6m6 6-6 6" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
