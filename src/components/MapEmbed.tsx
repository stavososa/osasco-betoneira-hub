export function MapEmbed({ query, title }: { query: string; title: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="cut-corner overflow-hidden border-2 border-[var(--brand-ink)] hard-shadow">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full border-0"
      />
    </div>
  );
}
