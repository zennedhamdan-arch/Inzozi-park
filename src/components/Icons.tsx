import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number, props: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const PhoneIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const WhatsAppIcon = ({ size = 18, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    {...p}
  >
    <path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2.2 21.8l4.72-1.4A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-2.8.83.84-2.73-.2-.32a8.18 8.18 0 1 1 6.62 3.54Zm4.52-6.09c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.96-.14.17-.28.19-.53.06a6.66 6.66 0 0 1-1.96-1.21 7.4 7.4 0 0 1-1.36-1.69c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.83-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7.58.26 1.04.4 1.4.51.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

export const InstagramIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const PinIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const ArrowRightIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
  </svg>
);

export const ArrowDownIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 4v16m0 0 6-6m-6 6-6-6" />
  </svg>
);

export const MenuIcon = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

export const CloseIcon = ({ size = 24, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m5 5 14 14M19 5 5 19" />
  </svg>
);

export const CheckIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m4 12.5 5.5 5.5L20 6.5" />
  </svg>
);

export const CalendarIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M8 3v4m8-4v4M3 10h18" />
  </svg>
);

export const UsersIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3.5 3.5 0 0 1 0 5.9M17.8 14.6a5.5 5.5 0 0 1 2.7 4.8" />
  </svg>
);

export const SparkIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.7-5.7-2.1 2.1M8.4 15.6l-2.1 2.1m0-11.4 2.1 2.1m7.2 7.2 2.1 2.1" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

export const ClockIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 1.8" />
  </svg>
);

export const MailIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const CoffeeIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z" />
    <path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2M7 5c0-.7.6-.8.6-1.5M10.5 5c0-.7.6-.8.6-1.5M14 5c0-.7.6-.8.6-1.5" />
  </svg>
);

export const DirectionsIcon = ({ size = 18, ...p }: IconProps) => (
  <svg {...base(size, p)}>
    <path d="m12 2 10 10-10 10L2 12 12 2Z" />
    <path d="M9.5 13.5V12a2 2 0 0 1 2-2h3m0 0-1.8-1.8M14.5 10l-1.8 1.8" />
  </svg>
);

/** INZOZI PARK diamond mark — subtle nod to imigongo geometry. */
export const ImigongoMark = ({ size = 18, ...p }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
    <path d="M12 2 22 12 12 22 2 12 12 2Z" fill="currentColor" opacity="0.9" />
    <path d="M12 6.5 17.5 12 12 17.5 6.5 12 12 6.5Z" fill="var(--color-cream)" />
    <path d="M12 9.8 14.2 12 12 14.2 9.8 12 12 9.8Z" fill="currentColor" />
  </svg>
);
