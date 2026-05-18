const STEPS = [
  { n: "01", t: "Você chama", d: "WhatsApp ou telefone. Conta o modelo de betoneira, o endereço em Osasco e o tipo de obra." },
  { n: "02", t: "Confirmamos", d: "Orçamento na hora para aluguel diário, semanal ou mensal, com entrega no mesmo dia." },
  { n: "03", t: "Usa na obra", d: "Betoneira revisada na sua porta, pronta para misturar concreto, argamassa ou contrapiso." },
];

export function Steps({ bairro }: { bairro?: string }) {
  return (
    <section className="bg-[var(--brand-concrete)] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mb-2 flex items-center gap-3">
          <span className="h-px w-10 bg-[var(--brand-ink)]" />
          <span className="spec-label">Processo</span>
        </div>
        <h2 className="reveal font-display text-3xl text-[var(--brand-ink)] md:text-4xl">
          Como funciona{bairro ? ` em ${bairro}` : ""}
        </h2>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.n} className={`reveal reveal-delay-${i + 1} relative`}>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1">
                <div className="numeric text-4xl text-[var(--brand-yellow)] [text-shadow:_2px_2px_0_var(--brand-ink)]">
                  {s.n}
                </div>
                <h3 className="mt-3 font-display text-lg text-[var(--brand-ink)]">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
              {i < STEPS.length - 1 && (
                <svg
                  className="absolute right-[-22px] top-1/2 hidden -translate-y-1/2 text-[var(--brand-ink)]/50 md:block"
                  width="44" height="14" viewBox="0 0 44 14" fill="none" aria-hidden
                >
                  <path className="step-connector" d="M2 7h36M32 2l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
