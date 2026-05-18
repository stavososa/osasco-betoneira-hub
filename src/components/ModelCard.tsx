import { MixerIcon } from "./icons/Icons";

export interface Modelo {
  volume: string;
  motor: string;
  voltagem: string;
  uso: string;
  destaque?: boolean;
}

export function ModelCard({ m }: { m: Modelo }) {
  return (
    <article
      className={`group cut-corner relative border-2 bg-card p-6 transition-transform duration-200 hover:-translate-y-1 ${
        m.destaque
          ? "border-[var(--brand-yellow)] hard-shadow-yellow"
          : "border-[var(--brand-ink)] hard-shadow"
      }`}
    >
      {m.destaque && (
        <span className="absolute -top-3 left-4 bg-[var(--brand-ink)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[var(--brand-yellow)]">
          Mais alugada
        </span>
      )}
      <div className="flex items-start justify-between">
        <MixerIcon size={48} className="text-[var(--brand-navy)]" />
        <span className="spec-label">Ref. {m.volume}</span>
      </div>
      <div className="mt-4 numeric text-5xl text-[var(--brand-ink)]">{m.volume}</div>
      <dl className="mt-4 grid grid-cols-2 gap-y-2 border-t border-dashed border-[var(--brand-ink)]/30 pt-4 text-xs">
        <dt className="spec-label">Motor</dt><dd className="text-right font-mono text-[var(--brand-ink)]">{m.motor}</dd>
        <dt className="spec-label">Alimentação</dt><dd className="text-right font-mono text-[var(--brand-ink)]">{m.voltagem}</dd>
        <dt className="spec-label">Indicada para</dt><dd className="text-right font-mono text-[var(--brand-ink)]">{m.uso}</dd>
      </dl>
    </article>
  );
}
