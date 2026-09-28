import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { useEffect, useRef, useState } from "react";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our Approach: From Opportunity to Production | 3ylabs" },
      {
        name: "description",
        content:
          "Discover, Design, Build, Deploy and Optimize, how 3ylabs takes AI from opportunity map to production operations.",
      },
      { property: "og:title", content: "Our Approach: From Opportunity to Production | 3ylabs" },
      {
        property: "og:description",
        content: "The five-stage 3ylabs delivery model for AI-native products and operations.",
      },
      { property: "og:url", content: "https://3ylabs.com/approach" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/approach" }],
  }),
  component: ApproachPage,
});

const stages = [
  {
    n: "01",
    name: "Discover",
    summary: "Identify business goals, workflows, data and AI opportunities.",
    deliverables: ["AI opportunity map", "Readiness assessment", "Prioritized roadmap"],
  },
  {
    n: "02",
    name: "Design",
    summary: "Design the experience, architecture and governance.",
    deliverables: ["Experience design", "Solution architecture", "Responsible AI guardrails"],
  },
  {
    n: "03",
    name: "Build",
    summary: "Engineer the AI-native solution.",
    deliverables: [
      "Working product increments",
      "Agents, copilots and pipelines",
      "Test and evaluation loops",
    ],
  },
  {
    n: "04",
    name: "Deploy",
    summary: "Productionize securely.",
    deliverables: [
      "Cloud and DevOps setup",
      "Security and access controls",
      "Release and rollback plans",
    ],
  },
  {
    n: "05",
    name: "Optimize",
    summary: "Measure, improve and continuously innovate.",
    deliverables: [
      "Operational monitoring",
      "Model and workflow tuning",
      "Continuous improvement backlog",
    ],
  },
];

function ApproachPage() {
  const [active, setActive] = useState(0);
  const stage = stages[active]!;

  // Desktop sticky-scroll: nav stays pinned while stage panels scroll past on the right.
  // Whichever panel crosses the viewport's vertical center becomes "active" and highlights
  // in the nav — the same pattern GitHub/Stripe use for feature walkthroughs.
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = panelRefs.current.findIndex((el) => el === e.target);
            if (i !== -1) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    panelRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: "Approach" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Approach</p>
          <h1 className="mt-4 max-w-3xl text-scale-34 font-bold leading-[1.08] tracking-display-tight sm:text-scale-44">
            From opportunity to <span className="text-gradient-brand">production.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            A five-stage delivery model that moves AI ambition into secure, measurable operations.
          </p>
        </div>
      </section>

      {/* Mobile/tablet: click-through tabs + single panel (unchanged below lg). */}
      <section className="container-page py-16 sm:py-20 lg:hidden">
        <ol className="flex snap-x gap-3 overflow-x-auto pb-2">
          {stages.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.n} className="min-w-[9.5rem] flex-1 snap-start">
                <button
                  type="button"
                  aria-current={on}
                  onClick={() => setActive(i)}
                  className={`w-full cursor-pointer rounded-xl border px-4 py-4 text-left transition-all duration-200 ${
                    on
                      ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "border-border bg-background hover:-translate-y-0.5 hover:border-[var(--primary)] hover:shadow-[var(--shadow-soft)]"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-widest ${on ? "text-primary-foreground/70" : "text-[var(--primary)]"}`}
                  >
                    {s.n}
                  </span>
                  <p className="mt-1 font-display font-semibold">{s.name}</p>
                </button>
                <div
                  aria-hidden
                  className={`mt-3 h-1 rounded-full transition-colors ${on ? "bg-[var(--accent)]" : "bg-border"}`}
                />
              </li>
            );
          })}
        </ol>

        <div key={stage.n} className="glass-card animate-fade-up mt-10 grid gap-8 p-6 sm:p-10">
          <div>
            <p className="label-mono">Stage {stage.n}</p>
            <h2 className="mt-3 text-scale-34 font-bold">{stage.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{stage.summary}</p>
          </div>
          <div className="rounded-2xl border border-border bg-[var(--tint)] p-5">
            <p className="label-mono">Deliverables</p>
            <ul className="mt-4 space-y-3">
              {stage.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Desktop: sticky nav pinned on the left; stage panels stack on the right and the
          nav highlight tracks scroll position via the IntersectionObserver above. */}
      <section className="container-page hidden py-20 lg:grid lg:grid-cols-[240px_1fr] lg:items-start lg:gap-12">
        <ol className="sticky top-24 flex flex-col gap-1.5">
          {stages.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.n}>
                <button
                  type="button"
                  aria-current={on}
                  onClick={() =>
                    panelRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className={`flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                    on
                      ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] tracking-widest ${on ? "text-primary-foreground/70" : "text-[var(--primary)]"}`}
                  >
                    {s.n}
                  </span>
                  <span className="font-display text-sm font-semibold">{s.name}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="flex flex-col gap-6">
          {stages.map((s, i) => (
            <div
              key={s.n}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="glass-card grid scroll-mt-24 gap-8 p-10 lg:grid-cols-2"
            >
              <div>
                <p className="label-mono">Stage {s.n}</p>
                <h2 className="mt-3 text-scale-34 font-bold">{s.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <div className="rounded-2xl border border-border bg-[var(--tint)] p-5">
                <p className="label-mono">Deliverables</p>
                <ul className="mt-4 space-y-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}