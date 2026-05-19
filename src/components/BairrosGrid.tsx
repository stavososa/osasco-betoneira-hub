import { Link } from "@tanstack/react-router";
import type { Bairro } from "@/lib/bairros";

export function BairrosGrid({
  bairros,
  variant = "light",
}: {
  bairros: Bairro[];
  variant?: "light" | "dark";
}) {
  const itemClass =
    variant === "dark"
      ? "text-white/80 hover:text-[var(--brand-yellow)]"
      : "text-foreground/80 hover:text-[var(--brand-navy)]";

  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm sm:grid-cols-3 md:grid-cols-4">
      {bairros.map((b) => (
        <li key={b.slug}>
          <Link
            to="/$slug"
            params={{ slug: `alugar-betoneira-em-${b.slug}` }}
            className={`block py-1 transition-colors hover:underline ${itemClass}`}
          >
            <span className="text-[var(--brand-yellow)] mr-1">›</span> {b.nome}
          </Link>
        </li>
      ))}
    </ul>
  );
}
