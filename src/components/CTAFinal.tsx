import { ArrowIcon, PhoneIcon, WhatsappIcon } from "@/components/icons/Icons";

export function CTAFinal({
  title = "Aluguel de betoneiras em Osasco",
  highlight = "com entrega em 24 a 48h.",
  eyebrow = "Precisa em breve?",
  waText,
}: {
  title?: string;
  highlight?: string;
  eyebrow?: string;
  waText?: string;
}) {
  const waHref = waText
    ? `https://wa.me/5511975465766?text=${encodeURIComponent(waText)}`
    : "https://wa.me/5511975465766";

  return (
    <section className="relative noise-overlay bg-[var(--brand-yellow)] py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="spec-label !text-[var(--brand-ink)]/70">{eyebrow}</div>
          <h2 className="mt-1 font-display text-3xl leading-[0.95] tracking-tight text-[var(--brand-ink)] md:text-5xl">
            {title} <br />
            <span className="font-editorial">{highlight}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={waHref} target="_blank" rel="noopener" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-ink)] hard-shadow">
            <WhatsappIcon size={16} /> WhatsApp <ArrowIcon size={16} />
          </a>
          <a href="tel:+5511975465766" className="inline-flex items-center gap-2 border-2 border-[var(--brand-ink)] bg-[var(--brand-ink)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--brand-yellow)] hard-shadow">
            <PhoneIcon size={16} /> (11) 97546-5766
          </a>
        </div>
      </div>
    </section>
  );
}
