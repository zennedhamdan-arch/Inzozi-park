/**
 * ─────────────────────────────────────────────────────────────────────────
 *  INZOZI PARK — SITE CONTENT CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────
 *  This is the single file used to update the business information shown
 *  across the whole website: phone numbers, address, social links,
 *  services, opening hours and enquiry options.
 *
 *  ✅ VERIFIED — information confirmed from public sources (business posts,
 *     public listings). Safe to show.
 *  ⚠️  TO CONFIRM — placeholders that must be replaced/confirmed by the
 *     INZOZI PARK team before treating the site as final.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const site = {
  name: "INZOZI PARK",
  shortName: "Inzozi Park",
  /** “Inzozi” is the Kinyarwanda word for “dreams”. */
  tagline: "Where Your Special Moments Come to Life",

  /* ─────────────────────────────── Contact ────────────────────────────── */

  // ✅ VERIFIED — public numbers found in the venue's recent public posts.
  // ⚠️  TO CONFIRM — which number should be the PRIMARY booking line.
  //     Swap `primary` / `secondary` here and the whole site updates.
  phone: {
    primary: "+250 788 336 932",
    primaryHref: "tel:+250788336932",
    secondary: "+250 788 643 162",
    secondaryHref: "tel:+250788643162",
  },

  // WhatsApp uses the primary number. Change here only.
  whatsapp: {
    number: "250788336932", // international format, no “+”
    /** Default message when someone opens WhatsApp from the site. */
    defaultMessage:
      "Hello INZOZI PARK! I would like to enquire about hosting an event.",
  },

  // ✅ VERIFIED — public Instagram account (@inzozi_park).
  instagram: {
    url: "https://www.instagram.com/inzozi_park/",
    handle: "@inzozi_park",
  },

  // ✅ VERIFIED — business description used on the venue's public profiles.
  instagramBio:
    "Events Venue | Decoration | Bar and Grill | Kids Park | Catering",

  // No email address has been published by INZOZI PARK.
  // When one exists, add it here and it appears on the Contact page.
  email: null as string | null,

  /* ─────────────────────────────── Location ───────────────────────────── */

  address: {
    area: "Kicukiro – Gahanga",
    city: "Kigali",
    country: "Rwanda",
    landmark: "Near Merez Station",
    // ✅ VERIFIED public listing also places the venue in Gahanga,
    //    Kicukiro District. Street address: TO CONFIRM with the client.
  },

  // Opens Google Maps searching for the venue by name — no invented
  // coordinates. Replace with a pinned Google Maps share link when the
  // client provides one.
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Inzozi+Park+Gahanga+Kigali",

  // ⚠️  TO CONFIRM — opening hours are not published reliably.
  //     Set to an array like ["Mon – Fri: 08:00 – 20:00", …] once confirmed.
  openingHours: null as string[] | null,

  /* ─────────────────────────────── Enquiry form ───────────────────────── */

  /**
   * ⚠️  TO CONFIRM — optional form endpoint.
   * Leave as `null` and enquiries are handed to the team through WhatsApp
   * (the visitor's details are pre-filled into a WhatsApp message).
   * When an endpoint (Formspree, Resend, own API…) is ready, paste its URL
   * here and the form will POST there instead.
   */
  formEndpoint: null as string | null,

  eventTypes: [
    "Wedding",
    "Birthday",
    "Corporate / Meeting",
    "Family Event",
    "Church / Gathering",
    "School Visit",
    "Photo Shoot",
    "Other",
  ],

  enquiryServices: [
    "Venue",
    "Decoration",
    "Catering",
    "Bar & Grill",
    "Kids Park",
    "Coffee / Refreshments",
    "Multiple services",
    "Not sure yet",
  ],

  /* ───────────────────────────── Navigation ───────────────────────────── */

  nav: [
    { label: "Home", href: "/" },
    { label: "Venue", href: "/venue" },
    { label: "Services", href: "/services" },
    { label: "Weddings", href: "/weddings" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /** Extra destinations surfaced in the mobile menu and footer. */
  secondaryNav: [{ label: "Kids & Family", href: "/kids" }],
} as const;

export type Site = typeof site;

/* ─────────────────────────────── Services ────────────────────────────── */
/**
 * The six publicly described services, with the exact one-line summaries
 * provided in the project brief. Descriptions stay deliberately concise —
 * anything more specific must come from the client.
 */

export type ServiceId =
  | "venue"
  | "decoration"
  | "catering"
  | "bar-grill"
  | "kids"
  | "coffee";

export interface Service {
  id: ServiceId;
  name: string;
  summary: string;
  image: string; // image slot id — see scripts/image-slots.mjs
  href: string; // page the service links to
  uses: string[]; // what customers can use it for
  note?: string;
}

export const services: Service[] = [
  {
    id: "venue",
    name: "Wedding & Events Venue",
    summary: "Create your celebration in a dedicated event environment.",
    image: "venue-hall",
    href: "/venue",
    uses: [
      "Weddings & receptions",
      "Birthdays & family celebrations",
      "Meetings & gatherings",
      "Church events",
      "Photo shoots",
    ],
  },
  {
    id: "decoration",
    name: "Decoration",
    summary: "Bring your event vision together with professional decoration services.",
    image: "service-decoration",
    href: "/services",
    uses: ["Wedding styling", "Stage & venue setup", "Celebration themes"],
    note: "Decoration options are arranged directly with the INZOZI PARK team.",
  },
  {
    id: "catering",
    name: "Catering",
    summary: "Food and hospitality for your special occasions.",
    image: "service-catering",
    href: "/services",
    uses: ["Wedding feasts", "Event menus", "Celebration catering"],
    note: "Menus and service styles are planned with the team for each event.",
  },
  {
    id: "bar-grill",
    name: "Bar & Grill",
    summary: "A place to relax, eat and enjoy time with friends and family.",
    image: "service-bargrill",
    href: "/services",
    uses: ["Everyday dining", "Drinks with friends", "Family outings"],
  },
  {
    id: "kids",
    name: "Kids Park",
    summary: "Fun experiences for children and families.",
    image: "service-kids",
    href: "/kids",
    uses: ["Family outings", "Kids' birthdays", "School visits"],
  },
  {
    id: "coffee",
    name: "Coffee & Refreshments",
    summary: "Coffee, drinks and refreshments for everyday visits and gatherings.",
    image: "service-coffee",
    href: "/services",
    uses: ["Meetings over coffee", "Everyday visits", "Event refreshments"],
  },
];

/* ─────────────────────────────── Events ──────────────────────────────── */
/** Event types the venue publicly hosts. No packages are implied. */

export const eventTypes = [
  {
    name: "Weddings",
    line: "Ceremonies and receptions in a dedicated event environment.",
    enquiryType: "Wedding",
  },
  {
    name: "Birthdays",
    line: "Celebrations for every age — from family gatherings to kids' parties.",
    enquiryType: "Birthday",
  },
  {
    name: "Meetings",
    line: "A calm setting for meetings and corporate gatherings.",
    enquiryType: "Corporate / Meeting",
  },
  {
    name: "Family Celebrations",
    line: "Room to bring generations together around one table.",
    enquiryType: "Family Event",
  },
  {
    name: "School Visits",
    line: "Space for learning groups to explore, play and share a meal.",
    enquiryType: "School Visit",
  },
  {
    name: "Church & Gatherings",
    line: "A peaceful setting for fellowship and community events.",
    enquiryType: "Church / Gathering",
  },
  {
    name: "Photo Shoots",
    line: "A photogenic backdrop for portraits and special occasions.",
    enquiryType: "Photo Shoot",
  },
] as const;

/* ───────────────────────────────── FAQ ───────────────────────────────── */
/**
 * Honest answers only — no invented pricing, capacity or policy details.
 */

export const faqs = [
  {
    q: "How do I check if my date is available?",
    a: "Send an enquiry through this website, message us on WhatsApp, or call the team. We will confirm availability for your date directly.",
  },
  {
    q: "Can INZOZI PARK host my wedding from start to finish?",
    a: "Yes — the venue offers the event environment together with decoration, catering and supporting hospitality services, so your celebration can be arranged in one place.",
  },
  {
    q: "How much does it cost?",
    a: "Availability, packages and pricing are provided by the INZOZI PARK team based on your event requirements. Share your plans and the team will prepare the details.",
  },
  {
    q: "Can children join our event or visit for the day?",
    a: "Yes — INZOZI PARK includes a kids park with play experiences for children, and families are welcome for everyday visits.",
  },
  {
    q: "Where exactly is INZOZI PARK?",
    a: "In Gahanga, Kicukiro — near Merez Station in Kigali. Use the Get Directions button to open the location in Google Maps.",
  },
] as const;
