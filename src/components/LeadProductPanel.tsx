import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { portals } from "@/data/setu";
import { PortalMockup } from "./PortalMockup";

// CHANGED (08.2 — product positioning): the homepage no longer asks a visitor to pick between
// six equal portal tabs. It leads with Setu Vantage — the entry product — and lists the rest
// as a single "add as you grow" row. That's a decision a visitor can make in eight seconds.
// The full tab explorer (PortalExplorer) still lives on /products/setu-systems for people who
// want to compare all six.
export function LeadProductPanel() {
  const vantage = portals.find((p) => p.id === "vantage")!;
  const addOns = portals.filter(
    (p) => p.role === "attach" || p.role === "differentiator" || p.role === "layer",
  );

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="label-mono">{vantage.label}</p>
            <span className="rounded-full bg-[var(--brand)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-white">
              Start here
            </span>
          </div>
          <h3 className="mt-3 text-scale-27 font-bold sm:text-scale-34">{vantage.headline}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {vantage.description}
          </p>
          <ul className="mt-6 space-y-3">
            {(vantage.benefits ?? []).map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--accent-orange)_20%,var(--background))]">
                  <Check className="h-3 w-3 text-[var(--brand-deep)]" aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Link
            to="/products/$portal"
            params={{ portal: "vantage" }}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            See Setu Vantage <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* CHANGED: real screenshots (IMG-02) aren't shot yet — rendering the actual Setu
            Vantage UI mockup here instead of a blank placeholder box */}
        <div className="aspect-[4/3] w-full">
          <PortalMockup id="vantage" />
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-[var(--tint)] p-5 sm:p-6">
        <p className="text-sm font-medium text-foreground">
          Add {addOns.map((p) => p.name.replace("Setu ", "")).join(", ")} as you grow.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {addOns.map((p) => (
            <Link
              key={p.id}
              to="/products/$portal"
              params={{ portal: p.id }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-primary transition-colors hover:border-[var(--brand)]"
            >
              {p.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}