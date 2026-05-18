const STEPS = [
  { n: "01", t: "Você chama", d: "WhatsApp ou telefone. Conta o modelo e o endereço." },
  { n: "02", t: "Confirmamos", d: "Orçamento na hora e janela de entrega no mesmo dia." },
  { n: "03", t: "Usa na obra", d: "Diária, semanal ou mensal — sem burocracia." },
  { n: "04", t: "Buscamos", d: "Você termina, a gente passa para retirar." },
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

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.n} className={`reveal reveal-delay-${i + 1} relative`}>
              <div className="cut-corner border-2 border-[var(--brand-ink)] bg-white p-5 hard-shadow">
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
