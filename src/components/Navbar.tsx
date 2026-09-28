"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Button } from "./Button";
import { site } from "@/content/site";
import { WhatsAppIcon, CloseIcon, MenuIcon, PhoneIcon } from "./Icons";
import { waLink } from "@/lib/whatsapp";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Pages whose hero is dark → navbar starts transparent-light.
  const overDark =
    pathname === "/" ||
    pathname === "/weddings" ||
    pathname === "/gallery" ||
    pathname === "/kids";
  const solid = scrolled || !overDark || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open + flag for the floating button
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    document.body.classList.toggle("menu-open", open);
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  // Close menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-ink/8 bg-cream/95 shadow-[0_10px_40px_-24px_rgba(19,41,31,0.35)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 md:h-[76px] lg:px-8">
          <Logo tone={solid ? "dark" : "light"} compact={!solid} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative text-[13px] font-medium tracking-wide transition-colors duration-300 ${
                      solid
                        ? isActive(item.href)
                          ? "text-forest"
                          : "text-ink/75 hover:text-forest"
                        : isActive(item.href)
                          ? "text-cream"
                          : "text-cream/65 hover:text-cream"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive(item.href) ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button
                href="/enquire"
                variant={solid ? "gold" : "outlineLight"}
                arrow={false}
              >
                Plan Your Event
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-[3px] transition-colors lg:hidden ${
                solid ? "text-forest hover:bg-forest/5" : "text-cream hover:bg-cream/10"
              }`}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-cream transition-all duration-400 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
        role="dialog"
        aria-modal={open}
        aria-label="Menu"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 pb-8 pt-24">
          <nav aria-label="Mobile" className="flex-1">
            <ul className="space-y-1">
              {[...site.nav, ...site.secondaryNav].map((item, i) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-baseline gap-4 border-b border-ink/8 py-3.5 font-display text-[26px] transition-colors duration-300 ${
                      isActive(item.href) ? "text-gold-text" : "text-forest hover:text-gold-text"
                    }`}
                    style={{
                      transitionDelay: open ? `${i * 30}ms` : "0ms",
                    }}
                  >
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-ink/55">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 space-y-3">
            <Button href="/enquire" variant="gold" className="w-full">
              Plan Your Event
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={site.phone.primaryHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-forest/25 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-forest"
              >
                <PhoneIcon size={15} /> Call
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] border border-forest/25 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-forest"
              >
                <WhatsAppIcon size={15} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
