import { ClockIcon, CheckIcon, PinIcon, TruckIcon } from "./icons/Icons";

const items = [
  { Icon: ClockIcon, text: "Entrega no mesmo dia" },
  { Icon: CheckIcon, text: "Equipamentos revisados" },
  { Icon: PinIcon, text: "Atendimento local em Osasco" },
  { Icon: TruckIcon, text: "Retirada inclusa" },
];

export function TrustBar() {
  return (
    <div className="border-y-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 text-[var(--brand-ink)]">
        {items.map(({ Icon, text }, i) => (
          <div key={text} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider sm:text-sm">
            <Icon size={18} className="shrink-0" />
            <span>{text}</span>
            {i < items.length - 1 && <span aria-hidden className="ml-6 hidden h-4 w-px bg-[var(--brand-ink)]/40 sm:inline-block" />}
          </div>
        ))}
      </div>
    </div>
  );
}
