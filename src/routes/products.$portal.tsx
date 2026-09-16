import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock3, PlayCircle, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WalkthroughModal } from "@/components/WalkthroughModal";
import { CTASection } from "@/components/CTASection";
import { PortalMockup } from "@/components/PortalMockup";
import { portals } from "@/data/setu";
import { useState } from "react";

export const Route = createFileRoute("/products/$portal")({
  head: ({ params }) => {
    const portal = portals.find((item) => item.id === params.portal);
    if (!portal) {
      return { meta: [{ title: "Setu Portal | 3ylabs" }] };
    }
    return {
      meta: [
        { title: `${portal.name}: ${portal.headline} | 3ylabs` },
        { name: "description", content: portal.description },
        { property: "og:title", content: `${portal.name}: ${portal.headline} | 3ylabs` },
        { property: "og:description", content: portal.description },
        { property: "og:url", content: `https://3ylabs.com/products/${portal.id}` },
      ],
      links: [{ rel: "canonical", href: `https://3ylabs.com/products/${portal.id}` }],
    };
  },
  component: PortalPage,
});

function PortalPage() {
  const { portal: portalParam } = Route.useParams();
  const portal = portals.find((item) => item.id === portalParam);
  // CHANGED (08.4): renamed from `demo` — this now opens the no-form walkthrough, not the
  // gated demo-request form. "Book a demo" below still links straight to /contact.
  const [walkthrough, setWalkthrough] = useState<string | null>(null);

  if (!portal) {
    return (
      <main className="container-page py-24 text-center">
        <p className="label-mono">Setu Systems</p>
        <h1 className="mt-3 text-3xl font-bold">Portal not found</h1>
        <Link
          to="/products/setu-systems"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Back to Setu Systems <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  // CHANGED (08.2): Setu Discover isn't a standalone portal — send visitors to where it now
  // lives, the AI Readiness Assessment service, instead of rendering the full product template.
  if (portal.role === "moved-to-service") {
    return (
      <main>
        <Breadcrumbs
          items={[{ label: "Products" }, { label: "Setu Systems" }, { label: portal.name }]}
        />
        <section className="container-page py-20 text-center sm:py-28">
          <p className="label-mono">Setu Discover</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-4xl">{portal.headline}</h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Setu Discover isn't a portal you buy on its own  it's the analysis behind the AI
            Readiness Assessment, the engagement most clients start with.
          </p>
          <Link
            to="/services/$slug"
            params={{ slug: portal.movedToServiceSlug! }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
          >
            See the AI Readiness Assessment <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
        <CTASection />
      </main>
    );
  }

  return (
    <main>
      <Breadcrumbs
        items={[{ label: "Products" }, { label: "Setu Systems" }, { label: portal.name }]}
      />

      {/* Who this is for + the day without it */}
      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">{portal.label}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            {portal.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-sm font-medium text-primary">
            Built for {portal.whoFor}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {portal.dayWithout}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setWalkthrough(portal.name)}
              className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
              style={{ background: "var(--gradient-accent)" }}
            >
              <PlayCircle className="h-4 w-4" aria-hidden />
              See a 3-minute walkthrough
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </section>

      {/* Screenshot — IMG-02..07 not shot yet; the portal-specific UI mockup fills this in
          instead of a blank placeholder box */}
      <section className="container-page py-10 sm:py-14">
        <PortalMockup id={portal.id} />
      </section>

      {/* What it does */}
      <section className="container-page py-14 sm:py-20">
        <p className="label-mono">What it does</p>
        <h2 className="mt-3 text-3xl font-bold">
          Designed around the work, not another dashboard.
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {(portal.capabilities ?? []).map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" aria-hidden />
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Day one + Security */}
      <section className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="label-mono">What you get on day one</p>
          <ul className="mt-6 space-y-3">
            {(portal.dayOne ?? []).map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-orange)]"
                  aria-hidden
                />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono">Security & data</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-[var(--tint)] p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" aria-hidden />
            <p className="text-sm leading-relaxed text-foreground">{portal.security}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="border-y border-border bg-[var(--tint)] py-14 sm:py-20">
        <div className="container-page">
          <p className="label-mono">How pricing works</p>
          <h2 className="mt-3 max-w-2xl text-2xl font-bold sm:text-3xl">
            An implementation fee, then a per-seat monthly rate.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {/* CHANGED (08.5): anchor + shape rather than a full price table — figures are
                placeholders pending a published-pricing decision from leadership. */}
            A 10-person team running {portal.name} typically starts at [$X] per month after a [$Y]
            implementation. The number moves with team size, data volume and how many other Setu
            portals you connect.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-primary">
            Portal Pilot — 4–6 weeks, one portal, one team, fixed fee
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="container-page py-14 sm:py-20">
        <p className="label-mono">Proof</p>
        {/* CHANGED: metric/quote are real placeholders pending client sign-off — styled as an
            explicit "pending" card (dashed border, muted type) instead of bold hero text, so
            it reads as a to-do rather than a broken or fabricated stat. */}
        <div className="mt-6 grid gap-6 rounded-2xl border border-dashed border-border bg-[var(--tint)] p-6 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Metric  pending client sign-off
            </p>
            <p className="mt-2 text-base font-medium text-foreground">{portal.proof.metric}</p>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Attributed quote pending client sign-off.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-[var(--tint)] py-14 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl font-bold sm:text-3xl">Questions we get asked</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {(portal.faqs ?? []).map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground">
                  {f.q}
                  <span className="text-[var(--brand)] transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <p className="label-mono">Setu Systems</p>
        <h2 className="mt-3 text-3xl font-bold">Part of one connected platform.</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Start with Setu Vantage, then connect {portal.name} and the other Setu portals as your
          operation grows. 3ylabs handles implementation, customization and the platform underneath.
        </p>
        <Link
          to="/products/setu-systems"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Explore all Setu portals <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <CTASection
        compact
        secondary={{ to: "/products/setu-systems", label: "Explore all Setu portals" }}
      />
      {walkthrough && (
        <WalkthroughModal product={walkthrough} onClose={() => setWalkthrough(null)} />
      )}
    </main>
  );
}