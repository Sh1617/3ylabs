import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  asSection?: boolean;
  /** CHANGED (07 — compaction pass): tighter padding for the homepage's final CTA (484px -> ~300px). Defaults to the existing padding so every other page is unaffected. */
  compact?: boolean;
  /** CHANGED: optional second CTA, matching the hero's two-path split. Only rendered when passed in — other pages keep a single CTA. */
  secondary?: { to: string; label: string };
}

export function CTASection({ asSection = true, compact = false, secondary }: CTASectionProps) {
  const content = (
    <div className={`container-page ${compact ? "py-12 sm:py-16" : "py-20"}`}>
      <div
        className={`relative overflow-hidden rounded-3xl px-6 text-center sm:px-12 ${
          compact ? "py-10 sm:py-14" : "py-16"
        }`}
        style={{ background: "var(--gradient-brand)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.22), transparent 70%)" }}
        />
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground sm:text-4xl">
          Ready to move from AI curiosity to AI capability?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-primary-foreground/80">
          Tell us where you are today. We'll help identify where AI can create measurable value.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-[var(--brand)] shadow-[var(--shadow-lift)] transition-all hover:-translate-y-0.5 hover:bg-white/95"
          >
            Book an AI Readiness Assessment
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          {secondary && (
            <Link
              to={secondary.to}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return asSection ? <section>{content}</section> : content;
}