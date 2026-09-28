import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/instrument-sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://inzozipark.rw"), // ⚠️ TO CONFIRM — final domain
  title: {
    default: `${site.name} — Weddings, Events & Family Destination in Kigali`,
    template: `%s · ${site.name}`,
  },
  description:
    "INZOZI PARK in Kicukiro–Gahanga, Kigali — a wedding and events venue with decoration, catering, bar & grill, coffee and a kids park. Plan your event today.",
  keywords: [
    "Inzozi Park",
    "wedding venue Kigali",
    "event venue Rwanda",
    "Gahanga events",
    "kids park Kigali",
    "Kicukiro wedding hall",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Where Your Special Moments Come to Life`,
    description:
      "Weddings, events, decoration, catering, bar & grill and a kids park — one destination in Gahanga, Kicukiro, Kigali.",
    locale: "en_RW",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#13291f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // LocalBusiness structured data — only verified public facts.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: site.name,
    telephone: [site.phone.primary, site.phone.secondary],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gahanga",
      addressRegion: "Kigali",
      addressCountry: "RW",
    },
    sameAs: [site.instagram.url],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Progressive enhancement flag: scroll-reveal hiding only applies
            when JS is available. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
