import { site } from "@/content/site";

/** Build a wa.me deep link with an optional pre-filled message. */
export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsapp.defaultMessage);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

/** Normalise a phone typed by a visitor into digits only. */
export function digitsOnly(v: string): string {
  return v.replace(/[^\d]/g, "");
}
