"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { waLink } from "@/lib/whatsapp";
import { Button } from "./Button";
import {
  WhatsAppIcon,
  PhoneIcon,
  CheckIcon,
  CalendarIcon,
} from "./Icons";

interface FormState {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  date: string;
  guests: string;
  services: string[];
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  eventType: "",
  date: "",
  guests: "",
  services: [],
  message: "",
};

/** Human-readable summary used in the confirmation panel and WhatsApp message. */
function summarise(f: FormState): string[] {
  const rows: string[] = [];
  rows.push(`Name: ${f.name}`);
  rows.push(`Phone: ${f.phone}`);
  if (f.email) rows.push(`Email: ${f.email}`);
  if (f.eventType) rows.push(`Event type: ${f.eventType}`);
  if (f.date) rows.push(`Preferred date: ${f.date}`);
  if (f.guests) rows.push(`Expected guests: ${f.guests}`);
  if (f.services.length) rows.push(`Services: ${f.services.join(", ")}`);
  if (f.message) rows.push(`Message: ${f.message}`);
  return rows;
}

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);
  const [sending, setSending] = useState(false);

  // Pre-select event type from ?type= query (e.g. from event index links)
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (t && site.eventTypes.includes(t as never)) {
      setForm((f) => ({ ...f, eventType: t }));
    }
  }, []);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));
  };

  const whatsappMessage = useMemo(() => {
    if (!submitted) return "";
    const body = summarise(submitted).join("\n");
    return `Hello INZOZI PARK! I would like to enquire about an event.\n\n${body}\n\n(sent from the INZOZI PARK website)`;
  }, [submitted]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    else if (form.phone.replace(/[^\d]/g, "").length < 9)
      next.phone = "That phone number looks too short.";
    if (!form.eventType) next.eventType = "Please choose an event type.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSending(true);
    try {
      if (site.formEndpoint) {
        // When the client provides an endpoint (Formspree, own API…),
        // the enquiry is delivered there.
        await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }
      setSubmitted(form);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSending(false);
    }
  }

  /* ─────────────────── Confirmation state ─────────────────── */
  if (submitted) {
    return (
      <div
        className="rounded-[4px] border border-forest/15 bg-parchment p-6 md:p-10"
        style={{ animation: "fade-in 0.5s ease both" }}
        role="status"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-forest text-cream">
          <CheckIcon size={26} />
        </span>
        <h2 className="font-display mt-6 text-[clamp(1.6rem,3.4vw,2.2rem)] font-medium text-forest">
          Thank you, {submitted.name.split(" ")[0]}.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/80">
          Your enquiry has been prepared. To pass it to our team, tap{" "}
          <strong className="text-forest">Continue in WhatsApp</strong> below — your
          details are filled in for you. You can also call us directly.
        </p>

        <div className="mt-6 rounded-[4px] border border-ink/10 bg-cream p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/80">
            Enquiry summary
          </p>
          <dl className="mt-3 space-y-2 text-[14px]">
            {summarise(submitted).map((row) => {
              const [k, ...v] = row.split(": ");
              return (
                <div key={k} className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-forest">{k}:</dt>
                  <dd className="text-ink/80">{v.join(": ")}</dd>
                </div>
              );
            })}
          </dl>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            href={waLink(whatsappMessage)}
            external
            variant="gold"
            className="w-full sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <WhatsAppIcon size={15} /> Continue in WhatsApp
            </span>
          </Button>
          <Button
            href={site.phone.primaryHref}
            external
            variant="outline"
            className="w-full sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <PhoneIcon size={15} /> Call {site.phone.primary}
            </span>
          </Button>
        </div>

        <p className="mt-5 text-[13px] leading-relaxed text-ink/75">
          Sending an enquiry is not a booking confirmation. The INZOZI PARK team
          will get back to you to confirm availability, options and pricing.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(null);
            setForm(initialState);
          }}
          className="mt-6 text-[13px] font-medium text-forest underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold-text"
        >
          Start another enquiry
        </button>
      </div>
    );
  }

  /* ─────────────────── Form state ─────────────────── */
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[4px] border border-ink/10 bg-parchment p-5 shadow-[0_30px_60px_-40px_rgba(19,41,31,0.3)] md:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div data-error={!!errors.name}>
          <label htmlFor="name" className="mb-1.5 block text-[13px] font-medium text-forest">
            Full name <span className="text-gold-text">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-[12.5px] text-clay">
              {errors.name}
            </p>
          )}
        </div>

        <div data-error={!!errors.phone}>
          <label htmlFor="phone" className="mb-1.5 block text-[13px] font-medium text-forest">
            Phone number <span className="text-gold-text">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="field"
            placeholder="07… / +250…"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-[12.5px] text-clay">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-medium text-forest">
            Email <span className="font-normal text-ink/80">(optional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
          />
        </div>

        <div data-error={!!errors.eventType}>
          <label htmlFor="eventType" className="mb-1.5 block text-[13px] font-medium text-forest">
            Event type <span className="text-gold-text">*</span>
          </label>
          <select
            id="eventType"
            name="eventType"
            className="field appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22%2355705f%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_1rem_center] bg-no-repeat pr-10"
            value={form.eventType}
            onChange={(e) => set("eventType", e.target.value)}
            aria-invalid={!!errors.eventType}
            aria-describedby={errors.eventType ? "eventType-error" : undefined}
          >
            <option value="" disabled>
              Choose an event type…
            </option>
            {site.eventTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p id="eventType-error" className="mt-1.5 text-[12.5px] text-clay">
              {errors.eventType}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="mb-1.5 block text-[13px] font-medium text-forest">
            Preferred date <span className="font-normal text-ink/80">(optional)</span>
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="field"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="guests" className="mb-1.5 block text-[13px] font-medium text-forest">
            Expected number of guests{" "}
            <span className="font-normal text-ink/80">(optional)</span>
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            inputMode="numeric"
            min={1}
            className="field"
            placeholder="e.g. 150"
            value={form.guests}
            onChange={(e) => set("guests", e.target.value)}
          />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-2 text-[13px] font-medium text-forest">
          Services interested in{" "}
          <span className="font-normal text-ink/80">(choose any)</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {site.enquiryServices.map((s) => {
            const active = form.services.includes(s);
            return (
              <label
                key={s}
                className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[13px] transition-all duration-200 ${
                  active
                    ? "border-forest bg-forest text-cream"
                    : "border-ink/15 bg-transparent text-ink/75 hover:border-forest/40 hover:text-forest"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={s}
                  checked={active}
                  onChange={() => toggleService(s)}
                  className="sr-only"
                />
                {active && <CheckIcon size={13} />}
                {s}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="message" className="mb-1.5 block text-[13px] font-medium text-forest">
          Message <span className="font-normal text-ink/80">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="field resize-y"
          placeholder="Tell us a little about what you are planning…"
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>

      <div className="mt-7 flex flex-col gap-4">
        <Button type="submit" variant="gold" className="w-full sm:w-auto">
          {sending ? "Preparing…" : "Send Event Enquiry"}
        </Button>
        <p className="text-[12.5px] leading-relaxed text-ink/75">
          Submitting this form prepares your enquiry — it is not a booking
          confirmation. Our team replies with availability and options.
        </p>
        <p className="flex items-center gap-2 border-t border-ink/10 pt-4 text-[13.5px] text-ink/75">
          <CalendarIcon size={15} className="shrink-0 text-gold-text" />
          Prefer WhatsApp?{" "}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-forest underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold-text"
          >
            Contact us directly
          </a>
        </p>
      </div>
    </form>
  );
}
