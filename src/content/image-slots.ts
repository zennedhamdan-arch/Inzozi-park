/**
 * Typed access to the generated image manifest/registry.
 * See scripts/image-slots.mjs for the editable source of truth and
 * public/images/README.md for how to publish real photographs.
 */
import {
  imageManifest,
  imageRegistry,
  type GeneratedSlot,
  type ImageSlotId,
} from "./images.generated";

export type { ImageSlotId };
export type ImageSlot = GeneratedSlot & {
  src: string;
  placeholder: boolean;
  /** True when the slot currently shows an AI-generated concept visual. */
  generated: boolean;
};

export function getSlot(id: ImageSlotId): ImageSlot {
  const meta = imageRegistry.find((s) => s.id === id) as GeneratedSlot;
  const entry = imageManifest[id];
  return {
    ...meta,
    src: entry.src,
    placeholder: entry.placeholder,
    generated: entry.generated,
  };
}

export function slotSrc(id: ImageSlotId): string {
  return imageManifest[id].src;
}

export const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "events", label: "Events" },
  { id: "food", label: "Food & Drinks" },
  { id: "kids", label: "Kids & Family" },
  { id: "venue", label: "Venue" },
] as const;

export type GalleryCategoryId = (typeof GALLERY_CATEGORIES)[number]["id"];

export function gallerySlots(): ImageSlot[] {
  const featured: ImageSlotId[] = [
    "wedding-ceremony",
    "venue-hall",
    "service-catering",
    "wedding-reception",
    "service-kids",
    "venue-rooftop",
    "service-bargrill",
    "wedding-decor",
    "event-birthday",
    "venue-garden",
    "service-coffee",
    "kids-play",
    "event-meeting",
  ];
  return featured.map(getSlot);
}
