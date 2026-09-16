import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useState } from "react";
import { portals } from "@/data/setu";
import { PortalExplorer } from "@/components/PortalExplorer";
import { PortalMockup } from "@/components/PortalMockup";
import { SetuArchitecture } from "@/components/SetuArchitecture";
import { WalkthroughModal } from "@/components/WalkthroughModal";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/products/setu-systems")({
  head: () => ({
    meta: [
      { title: "Setu Systems: One Intelligent Platform for Your Firm | 3ylabs" },
      {
        name: "description",
        content:
          "Setu Systems gives you a portal for every part of your operation: cases, billing, client inquiries, evidence and insight, all with AI woven through.",
      },
      { property: "og:title", content: "Setu Systems: One Intelligent Platform | 3ylabs" },
      {
        property: "og:description",
        content: "Start with one portal and add the rest as you grow.",
      },
      { property: "og:url", content: "https://3ylabs.com/products/setu-systems" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/products/setu-systems" }],
  }),
  component: SetuPage,
});

// CHANGED (08.2): lead product + attach modules, instead of six equal tiles.
const vantage = portals.find((p) => p.role === "lead")!;
const addOns = portals.filter((p) => p.role === "attach" || p.role === "differentiator");
const layer = portals.find((p) => p.role === "layer")!;
const discover = portals.find((p) => p.role === "moved-to-service")!;

function SetuPage() {
  const [walkthrough, setWalkthrough] = useState<string | null>(null);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Products" }, { label: "Setu Systems" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Setu Systems</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Run your firm on one <span className="text-gradient-brand">intelligent platform.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Setu means "bridge" in Sanskrit: one platform for cases, billing, client inquiries and
            evidence, with AI woven through. Built by 3ylabs and proven in production with real
            legal-tech operations.
          </p>
        </div>
      </section>

      {/* CHANGED (08.2): one lead product panel instead of six equal tiles — a decision
          a visitor can make in eight seconds. */}
      <section className="container-page py-16 sm:py-20">
        <p className="label-mono">Start here</p>
        <div className="mt-6 grid gap-8 rounded-2xl border border-border p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-medium text-primary">{vantage.label}  the lead product</p>
            <h2 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {vantage.headline}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {vantage.dayWithout}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setWalkthrough(vantage.name)}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
                style={{ background: "var(--gradient-accent)" }}
              >
                <PlayCircle className="h-4 w-4" aria-hidden />
                See Vantage in 3 minutes
              </button>
              <Link
                to="/products/$portal"
                params={{ portal: vantage.id }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Full product page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* CHANGED: real screenshot (IMG-02) not shot yet — rendering the actual Setu
              Vantage UI mockup instead of a blank placeholder box */}
          <PortalMockup id={vantage.id} />
        </div>

        {/* Add-on row */}
        <p className="mt-10 text-sm font-medium text-primary">
          Add {addOns.map((p) => p.name.replace("Setu ", "")).join(", ")} and the{" "}
          {layer.name.replace("Setu ", "")} as you grow.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[...addOns, layer].map((p) => (
            <Link
              key={p.id}
              to="/products/$portal"
              params={{ portal: p.id }}
              className="cursor-pointer rounded-xl border border-border bg-[var(--tint)] p-4 transition-colors hover:border-[var(--brand)]"
            >
              <p className="font-display text-sm font-semibold">{p.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.headline}</p>
            </Link>
          ))}
        </div>

        {/* Setu Discover — repositioned as a service deliverable, not a seventh product tile */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-xl border border-dashed border-border p-4 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            Not sure where to start?{" "}
            <span className="font-medium text-foreground">{discover.name}</span> is how engagements
            begin  it's the opportunity map behind the AI Readiness Assessment, not a portal you
            buy on its own.
          </p>
          <Link
            to="/services/$slug"
            params={{ slug: discover.movedToServiceSlug! }}
            className="shrink-0 text-sm font-semibold text-primary hover:underline"
          >
            See the assessment →
          </Link>
        </div>
      </section>

      <section className="bg-[var(--tint)] py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Explore the platform</h2>
          <div className="mt-8">
            <PortalExplorer />
          </div>
        </div>
      </section>

      {/* CHANGED (08.5): pricing signal instead of silence on price. */}
      <section className="container-page py-16 sm:py-20">
        <p className="label-mono">How pricing works</p>
        <h2 className="mt-3 text-3xl font-bold">An implementation fee, then per-seat monthly.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A 10-person firm running Vantage and Tickets typically starts at [$X] per month after a
          [$Y] implementation. The number changes with team size, data volume and how many portals
          are connected. If exact figures aren't published yet, ask — we'll walk you through the
          shape on a call.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary">
          Portal Pilot — 4–6 weeks, one portal, one team, fixed fee
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Platform architecture</h2>
        <div className="mt-8">
          <SetuArchitecture />
        </div>
      </section>

      <CTASection
        secondary={{ to: "/products/$portal" as never, label: "See Vantage in 3 minutes" }}
      />
      {walkthrough && (
        <WalkthroughModal product={walkthrough} onClose={() => setWalkthrough(null)} />
      )}
    </main>
  );
}