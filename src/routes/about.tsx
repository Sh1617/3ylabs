import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, ShieldCheck, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import teamImage from "@/assets/team-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 3ylabs: One Accountable AI Team" },
      {
        name: "description",
        content:
          "3ylabs advises, builds and operates AI systems. Learn how one accountable team carries strategy through to production.",
      },
      { property: "og:title", content: "About 3ylabs: One Accountable AI Team" },
      {
        property: "og:description",
        content:
          "Who we are, how we work and why we run our own products alongside client platforms.",
      },
      { property: "og:url", content: "https://3ylabs.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    icon: Compass,
    title: "Advice with a build behind it",
    body: "Every recommendation is something we are willing to ship and operate ourselves.",
  },
  {
    icon: Layers,
    title: "One accountable team",
    body: "Strategy, design, engineering and operations sit together, so nothing is lost in handover.",
  },
  {
    icon: ShieldCheck,
    title: "Human review by default",
    body: "AI output enters a workflow with review, evaluation and rollback paths already in place.",
  },
  {
    icon: Users,
    title: "Built for the people using it",
    body: "We design for the operator on a Tuesday afternoon, not for a demo stage.",
  },
];

const facts = [
  { k: "Own products in production", v: "Setu Systems" },
  { k: "Delivery model", v: "Discover to Optimize" },
  { k: "Operating focus", v: "AI-native operations" },
];

function AboutPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Company" }, { label: "About" }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="label-mono">About</p>
            <h1 className="mt-4 text-scale-34 font-bold leading-[1.08] tracking-display-tight sm:text-scale-44">
              We build the AI we <span className="text-gradient-brand">recommend.</span>
            </h1>
            {/* CHANGED (08.1): brand-architecture line at the top of /about, stating how
                3ylabs, Setu Systems and AscendHSI relate. */}
            <p className="mt-5 max-w-xl text-base font-medium text-primary sm:text-lg">
              3ylabs is an AI engineering studio. We build Setu Systems, our operations platform,
              and we run it in production for firms like AscendHSI.
            </p>
            <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              We're a small, senior team that takes AI from an opportunity map to a system your
              operation depends on. Most agencies advise and build — very few also operate what they
              ship.
            </p>
          </div>
          {/* FLAG (image-system brief, IMG-20): same generic whiteboard stock photo as the
              homepage proof section — replace with real commissioned team headshots/photography
              once that shoot happens. */}
          <Reveal className="relative">
            <img
              src={teamImage}
              alt="The 3ylabs team working together in a studio setting"
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Marquee of the four working principles (existing copy, not new claims). */}
      <Marquee
        items={principles.map((p) => p.title)}
        copies={3}
        duration={36}
        label="How we work"
        className="border-b border-border bg-[var(--tint)] py-6"
      />

      {/* Sticky layout: the three key facts stay pinned on the left (desktop) while the four
          principles scroll past on the right. */}
      <section className="container-page py-16 sm:py-20">
        <div className="lg:grid lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="label-mono">How we work</p>
            <dl className="mt-6 grid gap-4">
              {facts.map((f) => (
                <div key={f.k} className="glass-card p-5">
                  <dt className="label-mono">{f.k}</dt>
                  <dd className="mt-2 font-display text-scale-21 font-semibold">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-0 lg:grid-cols-1">
            {principles.map((p, i) => (
              <Reveal
                as="article"
                key={p.title}
                delay={i * 70}
                className="glass-card p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)]">
                  <p.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                </span>
                <h2 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}