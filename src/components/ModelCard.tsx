import { MixerIcon } from "./icons/Icons";
import type { Modelo } from "@/lib/modelos";

export type { Modelo };

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
        <span className="absolute -top-3 left-4 z-10 rounded-full bg-[var(--brand-ink)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[var(--brand-yellow)] shadow-sm">
          Mais alugada
        </span>
      )}
      {m.imagem ? (
        <div className={`relative -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl bg-[var(--brand-ink)]/5 ${isLarge ? "aspect-[4/3]" : "aspect-square"}`}>
          <img
            src={m.imagem}
            alt={m.alt ?? `Betoneira ${m.volume} em Osasco`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 spec-label backdrop-blur">Ref. {m.volume}</span>
        </div>
      ) : (
        <div className="flex items-start justify-between">
          <MixerIcon size={isLarge ? 72 : 48} className="text-[var(--brand-navy)]" />
          <span className="spec-label">Ref. {m.volume}</span>
        </div>
      )}
      <div
        className={`mt-4 numeric leading-none text-[var(--brand-ink)] ${
          isLarge ? "text-7xl md:text-[7.5rem]" : "text-5xl"
        }`}
      >
        {m.volume}
      </div>
      {m.tag && (
        <p className="mt-2 text-xs font-medium text-[var(--brand-navy)] md:text-sm">
          {m.tag}
        </p>
      )}
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
