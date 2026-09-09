import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { PortalMockup } from "@/components/PortalMockup";

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
    ],
  }),
  component: ResultsPage,
});

// CHANGED (08.6): three qualitative claims with no numbers replaced with three before/after
// metrics. Figures are bracketed placeholders — pull the real before/after from the engagement
// record before shipping; nothing here is invented.
const metrics = [
  { label: "Average client response time", before: "[—]", after: "[—]" },
  { label: "Manual reporting hours per week", before: "[—]", after: "[—]" },
  { label: "Invoicing cycle length", before: "[—]", after: "[—]" },
];

// CHANGED (08.6): two anonymised mini-cases, for when only one client can be named on the
// record. Placeholders pending real, permissioned client detail.
const miniCases = [
  "[A 12-person immigration practice replaced three spreadsheets with one Setu workspace and stopped losing track of deadlines.]",
  "[A regional insurance-claims team cut client follow-up calls after moving intake onto Setu Tickets.]",
];

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

      <section className="container-page py-16 sm:py-20">
        <div className="surface-card p-6 sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            {/* CHANGED (08.6): client logo — a text mark until a real logo is on file with
                usage permission in writing (see engagement record). */}
            <span className="rounded-lg border border-border bg-[var(--tint)] px-3 py-1.5 font-display text-sm font-bold tracking-tight text-primary">
              AscendHSI
            </span>
            <p className="label-mono">Featured client</p>
          </div>
          <h2 className="mt-4 text-scale-34 font-bold">Proof, not just a claim.</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            An immigration case operations firm. 3ylabs powers AscendHSI's operations end to end,
            replacing spreadsheets and disconnected trackers with Setu portals for case management,
            client ticketing and billing — with AI in daily workflows under human review, and 3ylabs
            operating the underlying cloud infrastructure.
          </p>

          {/* CHANGED: real screenshot pending client sign-off — the Vantage mockup fills
              this space instead of a blank placeholder box */}
          <div className="mt-8">
            <PortalMockup id="vantage" />
          </div>

          {/* CHANGED (08.6): three before/after metrics replace the three generic claims. */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-[var(--tint)] p-4">
                <p className="text-xs text-muted-foreground">{m.label}</p>
                <p className="mt-2 font-display text-lg font-bold text-primary">
                  {m.before} <span className="text-muted-foreground">→</span> {m.after}
                </p>
              </div>
            ))}
          </div>

          {/* CHANGED (08.6): one attributed quote, replacing the unattributed prose above. */}
          <blockquote className="mt-8 border-l-2 border-[var(--brand)] pl-4 text-base italic leading-relaxed text-muted-foreground">
            "[One sentence, attributed quote from AscendHSI leadership on the change.]"
            <footer className="mt-2 not-italic font-medium text-primary">
              — [Name, Title, AscendHSI]{" "}
              <span className="text-muted-foreground">— [headshot pending]</span>
            </footer>
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-2">
            {["SETU VANTAGE", "SETU TICKETS", "SETU FINANCE", "MANAGED CLOUD"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-[var(--tint)] px-3 py-1.5 font-mono text-[10px] tracking-widest text-[var(--brand-deep)]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* CHANGED (08.6): two anonymised mini-cases, since only AscendHSI can be named today. */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {miniCases.map((c) => (
            <p
              key={c}
              className="surface-card p-6 text-sm italic leading-relaxed text-muted-foreground"
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