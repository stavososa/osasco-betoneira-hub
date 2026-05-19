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

export const WhatsappIcon = ({ className, size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.013-5.11-2.861-6.958C16.63 1.992 14.153.977 11.517.977c-5.442 0-9.87 4.422-9.873 9.861-.001 1.73.46 3.42 1.337 4.927l-.994 3.633 3.73-.979a9.78 9.78 0 0 0 4.333 1.019zm10.748-7.234c-.29-.145-1.72-.848-1.986-.944-.266-.096-.46-.145-.652.145-.19.29-.738.944-.905 1.137-.166.19-.33.21-.62.065-.29-.145-1.225-.45-2.332-1.44-.862-.77-1.443-1.72-1.61-2.01-.166-.29-.017-.448.128-.592.13-.13.29-.338.435-.508.145-.17.193-.29.29-.483.097-.19.048-.36-.024-.508-.073-.146-.652-1.57-.893-2.148-.235-.568-.475-.49-.652-.499-.168-.008-.362-.01-.557-.01-.195 0-.514.073-.783.362-.269.29-1.026 1.003-1.026 2.446 0 1.443 1.05 2.837 1.196 3.03.146.193 2.067 3.157 5.008 4.43.7.303 1.246.484 1.672.62.704.223 1.346.19 1.854.114.566-.083 1.72-.702 1.962-1.38.243-.678.243-1.257.17-1.38-.073-.121-.269-.19-.559-.336z" />
  </svg>
);
