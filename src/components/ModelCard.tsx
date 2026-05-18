import { MixerIcon } from "./icons/Icons";

export interface Modelo {
  volume: string;
  motor: string;
  voltagem: string;
  uso: string;
  destaque?: boolean;
}

export function ModelCard({ m, size = "sm" }: { m: Modelo; size?: "lg" | "sm" }) {
  const isLarge = size === "lg";
  return (
    <article
      className={`group relative flex h-full flex-col border-2 bg-card p-6 transition-[transform,box-shadow] duration-300 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 ${
        isLarge ? "md:p-10" : ""
      } ${
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
        <MixerIcon size={isLarge ? 72 : 48} className="text-[var(--brand-navy)]" />
        <span className="spec-label">Ref. {m.volume}</span>
      </div>
      <div
        className={`mt-4 numeric leading-none text-[var(--brand-ink)] ${
          isLarge ? "text-7xl md:text-[7.5rem]" : "text-5xl"
        }`}
      >
        {m.volume}
      </div>
      <dl
        className={`mt-auto grid grid-cols-2 gap-y-2 border-t border-dashed border-[var(--brand-ink)]/30 pt-4 text-xs ${
          isLarge ? "md:text-sm" : ""
        }`}
      >
        <dt className="spec-label">Motor</dt><dd className="text-right font-mono text-[var(--brand-ink)]">{m.motor}</dd>
        <dt className="spec-label">Alimentação</dt><dd className="text-right font-mono text-[var(--brand-ink)]">{m.voltagem}</dd>
        <dt className="spec-label">Indicada para</dt><dd className="text-right font-mono text-[var(--brand-ink)]">{m.uso}</dd>
      </dl>
    </article>
  );
}
