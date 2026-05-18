const MARQUEE = [
  "Entrega no mesmo dia em Osasco",
  "Betoneira elétrica 110V e 220V",
  "Betoneira a gasolina",
  "Misturador de concreto e argamassa",
  "120L · 150L · 250L · 400L",
  "Diária · Semanal · Mensal",
  "Locadora local · Frota própria",
  "Também vendemos betoneira",
  "Equipamento revisado",
];

export function TrustBar() {
  // Duplicamos a lista para loop contínuo sem corte.
  const loop = [...MARQUEE, ...MARQUEE];
  return (
    <div
      className="marquee group border-y-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] text-[var(--brand-ink)]"
      aria-label="Diferenciais"
    >
      <div className="marquee-track py-4">
        {loop.map((text, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-6 font-display text-lg uppercase tracking-wider"
          >
            <span className="inline-block h-1.5 w-1.5 -translate-y-[3px] rounded-full bg-[var(--brand-ink)]" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
