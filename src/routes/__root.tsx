import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <div className="max-w-md text-center">
          <h1 className="font-display text-7xl font-bold text-[var(--brand-navy)]">404</h1>
          <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A página que você procura não existe ou foi movida.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tente novamente ou volte para o início.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-[var(--brand-navy)] px-4 py-2 text-sm font-semibold text-white"
          >
            Tentar novamente
          </button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium">Início</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Betoneira Osasco , Locação e Venda de Betoneiras" },
      { name: "description", content: "Locação e venda de betoneiras em Osasco. Entrega e retirada no mesmo dia em todos os bairros. Fale no WhatsApp: (11) 97546-5766." },
      { name: "theme-color", content: "#1B2A5E" },
      { property: "og:site_name", content: "Betoneira Osasco" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Betoneira Osasco",
          description: "Locação e venda de betoneiras em Osasco.",
          telephone: "+5511975465766",
          areaServed: { "@type": "City", name: "Osasco" },
          address: { "@type": "PostalAddress", addressLocality: "Osasco", addressRegion: "SP", addressCountry: "BR" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <WhatsAppButton />
    </QueryClientProvider>
  );
}
