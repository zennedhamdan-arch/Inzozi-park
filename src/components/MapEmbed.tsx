/**
 * Google Maps embed with a branded backdrop.
 * If the embed cannot load (offline preview, blocked third parties),
 * the backdrop keeps the block looking intentional and offers a
 * directions link instead.
 */
export default function MapEmbed({
  query,
  title,
  className = "aspect-[4/3] w-full",
  addressLine,
}: {
  query: string;
  title: string;
  className?: string;
  addressLine: string;
}) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className={`relative overflow-hidden rounded-[4px] border border-ink/10 shadow-[0_30px_60px_-40px_rgba(19,41,31,0.4)] ${className.includes("aspect") ? "" : "rounded-[4px]"}`}>
      <div className={`relative ${className} bg-sand`}>
        {/* backdrop — visible only if the iframe fails to load */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center"
        >
          <PinIconBig />
          <p className="text-[13px] font-medium text-forest">{addressLine}</p>
          <a
            href={src.replace("&output=embed", "")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[3px] border border-forest/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-forest"
          >
            Open in Google Maps
          </a>
          <p className="text-[11px] text-ink/80">
            Interactive map loads from Google Maps
          </p>
        </div>
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function PinIconBig() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden className="text-gold-text">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
