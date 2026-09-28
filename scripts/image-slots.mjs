/**
 * INZOZI PARK — image slot registry (single source of truth for imagery).
 *
 * Every photograph on the site occupies a named "slot". Until a real photo
 * is provided, each slot renders an elegant branded placeholder SVG.
 *
 * TO REPLACE A PLACEHOLDER WITH A REAL PHOTO:
 *   1. Drop the photo into  public/images/<folder>/  using the exact
 *      `file` name listed below (jpg, jpeg, png or webp).
 *   2. Run  npm run images  (or just rebuild — it runs automatically).
 *   The site then shows the real photo instead of the placeholder. No code
 *   changes are needed.
 */

export const IMAGE_SLOTS = [
  // ---------------------------------------------------------------- heroes
  { id: "hero-home", file: "hero/home.jpg", aspect: "wide", variant: "dark", quiet: true, label: "The Venue at a Glance", alt: "Wide view of INZOZI PARK — photo to be provided by the venue", category: "venue" },
  { id: "hero-weddings", file: "hero/weddings.jpg", aspect: "wide", variant: "dark", quiet: true, label: "Weddings at INZOZI PARK", alt: "Wedding scene at INZOZI PARK — photo to be provided by the venue", category: "weddings" },
  { id: "hero-venue", file: "hero/venue.jpg", aspect: "wide", variant: "dark", quiet: true, label: "Venue & Events", alt: "INZOZI PARK event spaces — photo to be provided by the venue", category: "venue" },
  { id: "hero-services", file: "hero/services.jpg", aspect: "wide", variant: "dark", quiet: true, label: "Our Services", alt: "INZOZI PARK services — photo to be provided by the venue", category: "venue" },
  { id: "hero-gallery", file: "hero/gallery.jpg", aspect: "wide", variant: "dark", quiet: true, label: "The INZOZI PARK Collection", alt: "INZOZI PARK photo collection — photo to be provided by the venue", category: "venue" },
  { id: "hero-about", file: "hero/about.jpg", aspect: "wide", variant: "dark", quiet: true, label: "Our Story", alt: "INZOZI PARK story — photo to be provided by the venue", category: "venue" },
  { id: "hero-contact", file: "hero/contact.jpg", aspect: "wide", variant: "dark", quiet: true, label: "Visit INZOZI PARK", alt: "Arrival at INZOZI PARK — photo to be provided by the venue", category: "venue" },
  { id: "hero-kids", file: "hero/kids.jpg", aspect: "wide", variant: "dark", quiet: true, label: "Kids & Family", alt: "Children playing at INZOZI KIDS PARK — photo to be provided by the venue", category: "kids" },

  // ----------------------------------------------------------------- venue
  { id: "venue-hall", file: "venue/hall.jpg", aspect: "landscape", variant: "light", label: "Main Event Hall", alt: "INZOZI PARK main event hall — photo to be provided by the venue", category: "venue" },
  { id: "venue-garden", file: "venue/garden.jpg", aspect: "landscape", variant: "light", label: "Garden & Grounds", alt: "INZOZI PARK garden — photo to be provided by the venue", category: "venue" },
  { id: "venue-rooftop", file: "venue/rooftop.jpg", aspect: "landscape", variant: "light", label: "Rooftop Bar & Lounge", alt: "Rooftop bar at INZOZI PARK — photo to be provided by the venue", category: "venue" },
  { id: "venue-detail", file: "venue/detail.jpg", aspect: "portrait", variant: "light", label: "Venue Details", alt: "Detail at INZOZI PARK — photo to be provided by the venue", category: "venue" },

  // -------------------------------------------------------------- weddings
  { id: "wedding-ceremony", file: "weddings/ceremony.jpg", aspect: "landscape", variant: "light", label: "Ceremony Setup", alt: "Wedding ceremony setup at INZOZI PARK — photo to be provided by the venue", category: "weddings" },
  { id: "wedding-reception", file: "weddings/reception.jpg", aspect: "landscape", variant: "light", label: "Reception & Décor", alt: "Wedding reception at INZOZI PARK — photo to be provided by the venue", category: "weddings" },
  { id: "wedding-decor", file: "weddings/decor.jpg", aspect: "portrait", variant: "light", label: "Decoration Details", alt: "Wedding decoration at INZOZI PARK — photo to be provided by the venue", category: "weddings" },

  // ---------------------------------------------------------------- events
  { id: "event-birthday", file: "events/birthday.jpg", aspect: "landscape", variant: "light", label: "Birthday Celebrations", alt: "Birthday celebration at INZOZI PARK — photo to be provided by the venue", category: "events" },
  { id: "event-meeting", file: "events/meeting.jpg", aspect: "landscape", variant: "light", label: "Meetings & Gatherings", alt: "Meeting setup at INZOZI PARK — photo to be provided by the venue", category: "events" },

  // -------------------------------------------------------------- services
  { id: "service-decoration", file: "services/decoration.jpg", aspect: "portrait", variant: "light", label: "Decoration", alt: "Event decoration by INZOZI PARK — photo to be provided by the venue", category: "weddings" },
  { id: "service-catering", file: "services/catering.jpg", aspect: "landscape", variant: "light", label: "Catering", alt: "Catering at INZOZI PARK — photo to be provided by the venue", category: "food" },
  { id: "service-bargrill", file: "services/bar-grill.jpg", aspect: "portrait", variant: "light", label: "Bar & Grill", alt: "Bar & Grill at INZOZI PARK — photo to be provided by the venue", category: "food" },
  { id: "service-coffee", file: "services/coffee.jpg", aspect: "landscape", variant: "light", label: "Coffee & Refreshments", alt: "Coffee at INZOZI PARK — photo to be provided by the venue", category: "food" },
  { id: "service-kids", file: "services/kids.jpg", aspect: "landscape", variant: "light", label: "Kids Park", alt: "INZOZI KIDS PARK — photo to be provided by the venue", category: "kids" },

  // ------------------------------------------------------------------ kids
  { id: "kids-play", file: "kids/play.jpg", aspect: "landscape", variant: "light", label: "Play Experiences", alt: "Play activities at INZOZI KIDS PARK — photo to be provided by the venue", category: "kids" },
  { id: "kids-party", file: "kids/party.jpg", aspect: "portrait", variant: "light", label: "Kids' Parties", alt: "Kids' party at INZOZI PARK — photo to be provided by the venue", category: "kids" },
  { id: "family-day", file: "kids/family-day.jpg", aspect: "landscape", variant: "light", label: "Family Days", alt: "Family day at INZOZI PARK — photo to be provided by the venue", category: "kids" },

  // ----------------------------------------------------------------- about
  { id: "about-moments", file: "about/moments.jpg", aspect: "landscape", variant: "light", label: "Moments at INZOZI PARK", alt: "Moments at INZOZI PARK — photo to be provided by the venue", category: "events" },
];

/** Aspect ratio helpers used by both the SVG generator and the UI. */
export const ASPECTS = {
  wide: { w: 1920, h: 1080, css: "aspect-[16/9]" },
  landscape: { w: 1600, h: 1200, css: "aspect-[4/3]" },
  portrait: { w: 1200, h: 1500, css: "aspect-[4/5]" },
};
