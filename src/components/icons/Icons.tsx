type P = { className?: string; size?: number };
const base = (size = 24) => ({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round" as const, strokeLinejoin: "round" as const });

export const HelmetIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <path d="M3 16h18v2H3z" />
    <path d="M4 16c0-5 3.6-9 8-9s8 4 8 9" />
    <path d="M10 7V4h4v3" />
    <path d="M8 12h8" />
  </svg>
);

export const MixerIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <ellipse cx="12" cy="10" rx="6" ry="5" />
    <path d="M6 10 3 17" />
    <path d="M18 10l3 7" />
    <circle cx="6" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M7.5 20h9" />
    <path d="M9 8l3 4 3-4" />
  </svg>
);

export const TruckIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <path d="M2 7h11v9H2z" />
    <path d="M13 10h5l3 3v3h-8z" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

export const ClockIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CheckIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export const PhoneIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

export const PinIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowIcon = ({ className, size }: P) => (
  <svg {...base(size)} className={className} aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
