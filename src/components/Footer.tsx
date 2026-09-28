import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/content/site";
import { services } from "@/content/site";
import {
  WhatsAppIcon,
  InstagramIcon,
  PhoneIcon,
  PinIcon,
  ArrowRightIcon,
} from "./Icons";
import { waLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-cream/60">
              A destination for weddings, events, family experiences and
              hospitality in Gahanga, Kicukiro.
            </p>
            <p className="mt-4 font-display text-lg italic text-gold-soft">
              “{site.tagline}”
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/65">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {[...site.nav, ...site.secondaryNav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/70 transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/enquire"
                  className="text-cream/70 transition-colors hover:text-gold-soft"
                >
                  Event Enquiry
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/65">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className="text-cream/70 transition-colors hover:text-gold-soft"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/65">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-[14px] text-cream/70">
              <li className="flex gap-2.5">
                <PinIcon size={16} className="mt-0.5 shrink-0 text-gold-soft" />
                <span>
                  {site.address.area}
                  <br />
                  {site.address.city}, {site.address.country}
                  <br />
                  <span className="text-cream/60">{site.address.landmark}</span>
                </span>
              </li>
              <li>
                <a
                  href={site.phone.primaryHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
                >
                  <PhoneIcon size={16} className="shrink-0 text-gold-soft" />
                  {site.phone.primary}
                  <span className="text-[10px] uppercase tracking-widest text-cream/65">
                    Primary
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.phone.secondaryHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
                >
                  <PhoneIcon size={16} className="shrink-0 text-gold-soft" />
                  {site.phone.secondary}
                </a>
              </li>
              <li className="flex gap-3 pt-1">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp INZOZI PARK"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
                >
                  <WhatsAppIcon size={17} />
                </a>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`INZOZI PARK on Instagram — ${site.instagram.handle}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
                >
                  <InstagramIcon size={17} />
                </a>
                <Link
                  href="/contact"
                  aria-label="Contact page"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold-soft hover:text-gold-soft"
                >
                  <ArrowRightIcon size={17} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-6 text-[12px] text-cream/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.address.area}, {site.address.city}
          </p>
          <p className="max-w-md sm:text-right">
            Preview concept prepared for the {site.name} team — photography and
            details are being finalised.
          </p>
        </div>
      </div>
    </footer>
  );
}
