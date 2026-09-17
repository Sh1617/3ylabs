import { Check } from "lucide-react";
import { useState } from "react";
import { portals, type PortalId } from "@/data/setu";
import { PortalMockup } from "./PortalMockup";
import { LaptopFrame } from "./LaptopFrame";
import { DemoModal } from "./DemoModal";

export function PortalExplorer() {
  const [active, setActive] = useState<PortalId>("vantage");
  const [demo, setDemo] = useState<string | null>(null);
  const portal = portals.find((p) => p.id === active)!;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Setu portals"
        // CHANGED (07 — compaction pass): momentum scrolling + fade edge on the mobile tab
        // strip, so it scrolls smoothly and doesn't wrap to three rows.
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 [-webkit-overflow-scrolling:touch] lg:mx-0 lg:flex-wrap lg:px-0"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)",
        }}
      >
        {portals.map((p) => {
          const on = p.id === active;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={on}
              type="button"
              onClick={() => setActive(p.id)}
              className={`relative cursor-pointer snap-start whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                on
                  ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-105"
                  : "border-border bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-[var(--brand)] hover:text-primary hover:shadow-[var(--shadow-soft)]"
              }`}
            >
              {p.name}
              {/* CHANGED: recommended-portal badge — fixes "six equal options, no recommendation" */}
              {p.recommended && (
                <span
                  className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                    on
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-[var(--tint)] text-[var(--brand-deep)]"
                  }`}
                >
                  Start here
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        key={active}
        className="animate-fade-up mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="label-mono">{portal.label}</p>
            {/* CHANGED: named buyer next to the label so a visitor knows if this portal is for them */}
            <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              For {portal.buyer}
            </span>
          </div>
          <h3 className="mt-3 text-scale-27 font-bold sm:text-scale-34">{portal.name}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {portal.description}
          </p>
          <ul className="mt-6 space-y-3">
            {portal.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                {/* CHANGED: was hard-coded to mix with literal white, so the chip stayed
                    light even in dark mode; now mixes with the theme background instead */}
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--accent-orange)_20%,var(--background))]">
                  <Check className="h-3 w-3 text-[var(--brand-deep)]" aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setDemo(portal.name)}
            className="mt-7 cursor-pointer rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] hover:brightness-105"
          >
            Request a Demo
          </button>
        </div>

        <LaptopFrame>
          <PortalMockup id={portal.id} />
        </LaptopFrame>
      </div>

      {demo && <DemoModal product={demo} onClose={() => setDemo(null)} />}
    </div>
  );
}