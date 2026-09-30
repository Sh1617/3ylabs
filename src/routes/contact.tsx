import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book an AI Readiness Assessment | 3ylabs" },
      {
        name: "description",
        content:
          "Tell us where you are today and 3ylabs will help identify where AI can create measurable value across your operation.",
      },
      { property: "og:title", content: "Book an AI Readiness Assessment | 3ylabs" },
      {
        property: "og:description",
        content: "From AI curiosity to AI capability, start with an AI readiness assessment.",
      },
      { property: "og:url", content: "https://3ylabs.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/contact" }],
  }),
  component: ContactPage,
});

const industries = [
  "Legal",
  "Healthcare",
  "Insurance",
  "Financial Services",
  "Manufacturing",
  "Professional Services",
  "Other",
];
const maturity = ["Exploring AI", "Early experimentation", "AI in production", "Scaling AI"];
const goals = [
  "Discover AI opportunities",
  "Build an AI product",
  "Modernize a platform",
  "Automate operations",
  "Improve document workflows",
  "Other",
];

const steps = [
  { n: "01", title: "You tell us where things stand", body: "Company, industry and the messiest part of day-to-day operations." },
  { n: "02", title: "We map the opportunity", body: "A 45-minute call, then a written opportunity map within a week." },
  { n: "03", title: "You decide what's next", body: "No obligation — the map is yours to use with or without 3ylabs." },
];

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--primary)]"
      />
    </div>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <select
        id={id}
        name={id}
        required
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--primary)]"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactPage() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  return (
    <main>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Contact</p>
          <h1 className="mt-4 max-w-3xl text-scale-34 font-bold leading-[1.08] tracking-display-tight sm:text-scale-44">
            Ready to move from AI curiosity to{" "}
            <span className="text-gradient-brand">AI capability?</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Tell us where you are today. We'll help identify where AI can create measurable value.
          </p>
          {/* CHANGED (08.4): states what the visitor gets and when, before they commit to the form */}
          <p className="mt-2 max-w-xl text-sm font-medium text-primary">
            45 minutes, and a written opportunity map within a week.
          </p>
        </div>
      </section>

      {/* Sticky layout: "What happens next" stays pinned on the left (desktop) while the
          form sits on the right. */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-4xl lg:grid lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start lg:gap-10">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label-mono">What happens next</p>
            <ol className="mt-5 space-y-4">
              {steps.map((s) => (
                <li key={s.n} className="glass-card p-5">
                  <span className="font-mono text-xs tracking-widest text-[var(--primary)]">
                    {s.n}
                  </span>
                  <p className="mt-1.5 font-display text-sm font-semibold">{s.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-card mt-8 p-6 sm:p-8 lg:mt-0">
          {state === "done" ? (
            <div className="animate-fade-up py-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--accent)]" aria-hidden />
              <h2 className="mt-5 text-scale-21 font-semibold">Assessment request received</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks. Your information has been captured for this prototype.
              </p>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setState("loading");
                setTimeout(() => setState("done"), 1100);
              }}
            >
              <Field id="name" label="Name" />
              <Field id="email" label="Work Email" type="email" />
              <Field id="company" label="Company" />
              {/* CHANGED (08.4): the field that makes the follow-up call useful, asked before
                  the multiple-choice questions rather than after. */}
              <div>
                <label htmlFor="messiest-part" className="text-sm font-medium">
                  What is the messiest part of your operation right now?
                </label>
                <textarea
                  id="messiest-part"
                  name="messiest-part"
                  rows={3}
                  placeholder="e.g. deadlines live in someone's inbox, not the system"
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-[var(--primary)]"
                />
              </div>
              <SelectField id="industry" label="Industry" options={industries} />
              <SelectField id="maturity" label="AI Maturity" options={maturity} />
              <SelectField id="goal" label="Primary Goal" options={goals} />
              <button
                type="submit"
                disabled={state === "loading"}
                style={{ background: "var(--gradient-accent)" }}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:brightness-100"
              >
                {state === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
                Book an AI Readiness Assessment
              </button>
            </form>
          )}
          </div>
        </div>
      </section>
    </main>
  );
}