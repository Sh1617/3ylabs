import { createFileRoute } from "@tanstack/react-router";
import { Clock3 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PortalMockup } from "@/components/PortalMockup";
import { Marquee } from "@/components/Marquee";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results: Proof in Production | 3ylabs" },
      {
        name: "description",
        content:
          "How 3ylabs powers AscendHSI's immigration case operations end to end with Setu portals, AI in daily workflows and managed cloud infrastructure.",
      },
      { property: "og:title", content: "Results: Proof in Production | 3ylabs" },
      {
        property: "og:description",
        content: "AscendHSI runs case management, client ticketing and billing on Setu portals.",
      },
      { property: "og:url", content: "https://3ylabs.com/results" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/results" }],
  }),
  component: ResultsPage,
});

// CHANGED: metrics are pending client sign-off (not fabricated). Modeled as a flag rather than
// bracket-dash text so the pending state can be styled intentionally instead of looking broken.
const metrics = [
  { label: "Average client response time", pending: true },
  { label: "Manual reporting hours per week", pending: true },
  { label: "Invoicing cycle length", pending: true },
];

// CHANGED (08.6): two anonymised mini-cases, for when only one client can be named on the
// record. Placeholders pending real, permissioned client detail.
const miniCases = [
  "[A 12-person immigration practice replaced three spreadsheets with one Setu workspace and stopped losing track of deadlines.]",
  "[A regional insurance-claims team cut client follow-up calls after moving intake onto Setu Tickets.]",
];

// Existing product/service tags from the featured-client card, now shown as a marquee.
const platforms = ["SETU VANTAGE", "SETU TICKETS", "SETU FINANCE", "MANAGED CLOUD"];

function ResultsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: "Results" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Results</p>
          <h1 className="mt-4 max-w-3xl text-scale-34 font-bold leading-[1.08] tracking-display-tight sm:text-scale-44">
            Proof in <span className="text-gradient-brand">production.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Real operations, running every day on platforms we build and operate.
          </p>
        </div>
      </section>

      <Marquee
        items={platforms}
        copies={4}
        duration={26}
        label="Platforms powering AscendHSI"
        className="border-b border-border bg-[var(--tint)] py-6"
      />

      <section className="container-page py-16 sm:py-20">
        {/* Sticky case-study layout: client summary stays pinned on the left (desktop) while
            the mockup, metrics and quote scroll past on the right. */}
        <div className="lg:grid lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                {/* Text mark until a real logo is on file with written usage permission. */}
                <span className="rounded-lg border border-border bg-[var(--tint)] px-3 py-1.5 font-display text-sm font-bold tracking-tight text-primary">
                  AscendHSI
                </span>
                <p className="label-mono">Featured client</p>
              </div>
              <h2 className="mt-4 text-scale-27 font-bold sm:text-scale-34">
                Proof, not just a claim.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                An immigration case operations firm. 3ylabs powers AscendHSI's operations end to
                end, replacing spreadsheets and disconnected trackers with Setu portals for case
                management, client ticketing and billing — with AI in daily workflows under human
                review, and 3ylabs operating the underlying cloud infrastructure.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-6 lg:mt-0">
            {/* Real screenshot pending client sign-off — the Vantage mockup fills the space. */}
            <div className="glass-card p-4 sm:p-6">
              <PortalMockup id="vantage" />
            </div>

            {/* Metrics are pending client sign-off (not fabricated). */}
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-dashed border-border bg-[var(--tint)] p-4"
                >
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                    <Clock3 className="h-3.5 w-3.5" aria-hidden />
                    Pending client sign-off
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-dashed border-border bg-[var(--tint)] p-4">
              <Clock3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
              <p className="text-sm text-muted-foreground">
                Attributed quote pending — name, title and headshot from AscendHSI leadership.
              </p>
            </div>
          </div>
        </div>

        {/* Two anonymised mini-cases, since only AscendHSI can be named today. */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {miniCases.map((c) => (
            <p
              key={c}
              className="glass-card p-6 text-sm italic leading-relaxed text-muted-foreground"
            >
              {c}
            </p>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}