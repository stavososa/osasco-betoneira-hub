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
      className={`group relative flex h-full flex-col rounded-2xl bg-card p-6 ring-1 ring-black/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25)] transition-[transform,box-shadow] duration-300 [transition-timing-function:var(--ease-spring)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.3)] ${
        isLarge ? "md:p-10" : ""
      } ${
        m.destaque ? "ring-2 ring-[var(--brand-yellow)]" : ""
      }`}
    >
      {m.destaque && (
        <span className="absolute -top-3 left-4 rounded-full bg-[var(--brand-ink)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--brand-yellow)] shadow-sm">
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
