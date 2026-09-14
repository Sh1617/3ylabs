import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Building2,
  Clock3,
  Cloud,
  Factory,
  Gavel,
  HeartPulse,
  Landmark,
  Layers,
  LineChart,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";
import { LeadProductPanel } from "@/components/LeadProductPanel";
import { CTASection } from "@/components/CTASection";
// CHANGED (07 — compaction pass): these two photos already shipped in src/assets (used on
// /industries and /about) and stay in their existing spots. `bridgeImage` moves here to the
// hero (IMG-01), replacing the fake-dashboard HeroVisual mock — no new image was sourced.
import legalImage from "@/assets/legal-industry.jpg";
import teamImage from "@/assets/team-about.jpg";
import bridgeImage from "@/assets/abstract-bridge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3ylabs: From AI Curiosity to AI Capability" },
      {
        name: "description",
        content:
          "3ylabs helps organizations turn AI ambition into secure, scalable products and intelligent operations, from strategy through production.",
      },
      { property: "og:title", content: "3ylabs: From AI Curiosity to AI Capability" },
      {
        property: "og:description",
        content:
          "AI transformation services, AI-native product engineering, legal-tech solutions and cloud delivery.",
      },
      { property: "og:url", content: "https://3ylabs.com/" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/" }],
  }),
  component: Home,
});

const abr = [
  {
    key: "Advise",
    icon: LineChart,
    body: "Identify where AI can create measurable business value.",
  },
  {
    key: "Build",
    icon: Layers,
    body: "Engineer AI-native products, agents, copilots and intelligent systems.",
  },
  {
    key: "Run",
    icon: Cloud,
    body: "Operate secure platforms, cloud infrastructure and AI systems in production.",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "AI Transformation Services",
    body: "AI opportunity discovery, readiness assessments, enterprise AI roadmaps and responsible AI governance.",
  },
  {
    icon: Brain,
    title: "AI-Native Product Engineering",
    body: "Agentic applications, generative AI, copilots, RAG, custom SaaS and intelligent document processing.",
  },
  {
    icon: Scale,
    title: "Legal-Tech Solutions",
    body: "Case management, client intake, ticketing, billing, evidence intelligence and AI-assisted drafting.",
  },
  {
    icon: Shield,
    title: "Platform, Cloud & Web Delivery",
    body: "Websites, portals, cloud architecture, modernization, DevOps, MLOps and security.",
  },
];

const extendedServices = [
  {
    title: "Enterprise Intelligence",
    body: "Business analytics, executive dashboards, operational intelligence and decision support.",
  },
  {
    title: "Business Solutions & Automation",
    body: "Workflow automation, process digitization and AI integrated into existing business systems.",
  },
  {
    title: "Website Powering & Managed Hosting",
    body: "Design, build, hosting and care of client websites and portals as an ongoing managed service.",
  },
];

// CHANGED: six equal industry cards -> one featured Legal card (IMG-11) + five text chips.
const secondaryIndustries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Shield, name: "Insurance" },
  { icon: Landmark, name: "Financial Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Professional Services" },
];

const approachSteps: [string, string, string][] = [
  ["01", "Discover", "Goals, workflows, data and AI opportunities."],
  ["02", "Design", "Experience, architecture and governance."],
  ["03", "Build", "Engineer the AI-native solution."],
  ["04", "Deploy", "Productionize securely."],
  ["05", "Optimize", "Measure, improve, keep innovating."],
];

function Home() {
  return (
    <main>
      {/* HERO — height unchanged (620). Content changes: real image instead of the fake
          dashboard mock, mobile-shortened eyebrow, trimmed copy, solid-fill mobile CTAs. */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="label-mono">
              {/* CHANGED: mobile eyebrow shortened so it never wraps to two lines at 375px */}
              <span className="sm:hidden">Advise · Build · Run</span>
              <span className="hidden sm:inline">
                AI Transformation • AI-Native Products • Production
              </span>
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
              From AI curiosity to <span className="text-gradient-brand">AI capability.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              3ylabs helps organizations turn AI ambition into secure, scalable products and
              intelligent operations, from strategy through production.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-[var(--brand-deep)]">
              We advise. We build. We run our own products.
            </p>
            {/* CHANGED: third sentence dropped on mobile only — keeps the 3ylabs / Setu /
                AscendHSI relationship explained on larger screens without adding mobile height */}
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
              <span>
                3ylabs is the studio. Setu Systems is the product platform we build and sell.
              </span>{" "}
              <span className="hidden sm:inline">
                AscendHSI is a client who runs their operations on it end to end.
              </span>
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* CHANGED: mobile — solid --primary fill, full width, 52px tall; desktop keeps
                  the gradient fill and its own sizing */}
              <Link
                to="/contact"
                className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:brightness-105 sm:h-auto sm:w-auto sm:py-3.5 sm:[background:var(--gradient-accent)]"
              >
                Book an AI Readiness Assessment
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link
                to="/products/setu-systems"
                className="inline-flex h-[52px] w-full items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-semibold text-primary transition-colors hover:bg-secondary sm:h-auto sm:w-auto sm:py-3.5"
              >
                Explore Setu Systems
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-6">
            {/* CHANGED: IMG-01 — real photo replacing the fake "AI Operations" dashboard mock */}
            <div className="surface-card overflow-hidden">
              <img
                src={bridgeImage}
                alt="Abstract flowing bridge graphic representing 3ylabs connecting AI strategy to production"
                loading="eager"
                fetchPriority="high"
                width={1600}
                height={1100}
                className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
              />
            </div>
          </div>
        </div>

        {/* ADVISE / BUILD / RUN — 328px -> 220px. One horizontal band with a dividing rule;
            headings stay <h3> since this is a decorative recap, not a real section heading. */}
        <div className="container-page pb-10 sm:pb-14">
          <div className="grid overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] md:grid-cols-3">
            {abr.map((c, i) => (
              <div
                key={c.key}
                className={`group bg-card p-5 transition-colors hover:bg-[var(--tint)] sm:p-6 ${
                  i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--tint)] transition-colors group-hover:bg-background">
                    <c.icon className="h-4 w-4 text-[var(--brand)]" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-primary">
                    {c.key}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES — 916px -> 560px. Core 4 cards stay full size; extended services drop the
          card/icon treatment and become a compact 3-across text row. */}
      <section id="services" className="section-y container-page scroll-mt-20">
        <p className="label-mono">Services</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Where AI becomes operational.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="surface-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--tint)]">
                <s.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        {/* CHANGED: cards -> plain 3-across text row, no icons, no borders */}
        <div className="mt-10 border-t border-border pt-6">
          <p className="label-mono">Extended services</p>
          <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-3">
            {extendedServices.map((s) => (
              <p key={s.title} className="text-sm leading-relaxed">
                <span className="font-display font-semibold text-foreground">{s.title}.</span>{" "}
                <span className="text-muted-foreground">{s.body}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SETU SYSTEMS — 1,532px -> 900px, the biggest single cut. The platform-architecture
          diagram (SetuArchitecture) is removed: it's duplicated verbatim on
          /products/setu-systems, so it stays there and links out from here instead. Intro
          trimmed from three paragraphs to one. */}
      <section id="products" data-alt className="section-y scroll-mt-20 bg-[var(--tint)]">
        <div className="container-page">
          <p className="label-mono">Setu Systems</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            One intelligent platform. Every part of the operation.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Setu means "bridge" in Sanskrit: one platform for cases, billing, client inquiries and
            evidence, all with AI woven through. Most teams start with Setu Vantage for case
            management, then add portals as they grow, with implementation and customization from
            3ylabs.
          </p>

          <div className="mt-8">
            <LeadProductPanel />
          </div>

          <div className="mt-8">
            <Link
              to="/products/setu-systems"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              See the full Setu Systems platform <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ASCENDHSI PROOF STRIP + APPROACH — kept as one merged section. Proof strip now
          carries a client mark, three metrics and one attributed quote instead of three
          generic bullets. */}
      <section className="section-y container-page">
        <div className="surface-card grid gap-6 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={teamImage}
              alt="The 3ylabs team reviewing an operations workflow together"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1000}
              className="h-44 w-full object-cover sm:h-56 lg:h-full lg:min-h-[220px]"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-lg border border-border bg-[var(--tint)] px-3 py-1.5 font-display text-sm font-bold tracking-tight text-primary">
                AscendHSI
              </span>
              <p className="label-mono">Proof in production</p>
            </div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              We run the operations behind an immigration case operations firm.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              3ylabs powers AscendHSI's operations end to end with Setu portals for case management,
              client ticketing and billing, AI in daily workflows with human review, and the cloud
              infrastructure underneath.
            </p>
            {/* CHANGED: stat tiles + quote (both bracket placeholders) removed from the
                homepage — the full pending-state detail already lives on /results, so this
                stays a single compact line rather than duplicating placeholder content. */}
            <p className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock3 className="h-3.5 w-3.5" aria-hidden />
              Metrics and a client quote pending AscendHSI sign-off — see the full story.
            </p>
            <Link
              to="/results"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              Read the AscendHSI story <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* APPROACH — five cards -> one numbered horizontal rail, one line each. Numbering
            stays: it's a genuine sequence. */}
        <div className="mt-10 border-t border-border pt-10">
          <p className="label-mono">Approach</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            One accountable team, from strategy through production.
          </h2>
          <ol className="mt-6 flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border sm:flex-row sm:divide-x sm:divide-y-0">
            {approachSteps.map(([n, name, body]) => (
              <li key={n} className="flex-1 p-4 sm:p-5">
                <p className="text-sm leading-relaxed">
                  <span className="mr-2 font-mono text-[11px] tracking-widest text-[var(--brand)]">
                    {n}
                  </span>
                  <span className="font-display font-semibold">{name}</span>
                  <span className="text-muted-foreground"> — {body}</span>
                </p>
              </li>
            ))}
          </ol>
          <Link
            to="/approach"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            Explore the full approach <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* INDUSTRIES — 608px -> 300px. Six equal cards -> one featured Legal card (IMG-11)
          plus five text chips, fixing the "six industries, equal weight" positioning problem. */}
      <section id="industries" className="section-y container-page scroll-mt-20">
        <p className="label-mono">Industries</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          AI that fits the way your industry works.
        </h2>
        <article
          className="relative mt-8 overflow-hidden rounded-2xl p-8 text-primary-foreground shadow-[var(--shadow-lift)] sm:p-10"
          style={{
            backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--brand-deep) 92%, transparent) 0%, color-mix(in oklab, var(--brand) 80%, transparent) 100%), url(${legalImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Gavel className="h-5 w-5 text-primary-foreground" aria-hidden />
          <h3 className="mt-4 font-display text-2xl font-semibold">Legal</h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/80">
            Deepest domain focus
          </p>
        </article>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {secondaryIndustries.map((i) => (
            <span
              key={i.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--tint)] px-4 py-2 text-sm font-medium text-primary"
            >
              <i.icon className="h-3.5 w-3.5 text-[var(--brand)]" aria-hidden />
              {i.name}
            </span>
          ))}
        </div>
      </section>

      {/* HEM + VISION + MISSION — merged into one section. Vision and Mission become two
          short columns under the HEM statement instead of two more cards. */}
      <section
        id="about"
        data-alt
        className="section-y scroll-mt-20 border-y border-border bg-[var(--tint)]"
      >
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="label-mono">HEM / Hyper Enabled Minds</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              AI should amplify people, not replace them.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We believe artificial intelligence should amplify human capability, accelerate
              innovation and enable smarter decisions, not replace the people behind them.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--accent-orange) 35%, transparent), transparent 70%)",
              }}
            />
            <div className="relative grid gap-2.5 sm:grid-cols-2">
              {["Human judgment", "Machine speed", "Governed by design", "Measurable outcomes"].map(
                (t) => (
                  <div key={t} className="rounded-xl border border-border bg-background px-4 py-4">
                    <p className="font-display text-sm font-semibold text-primary">{t}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="container-page mt-8 grid gap-5 md:grid-cols-2">
          <div>
            <p className="label-mono">Vision</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              To become the most trusted AI transformation partner, empowering organizations to
              build intelligent, secure and scalable digital enterprises.
            </p>
          </div>
          <div>
            <p className="label-mono">Mission</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              To help organizations identify the right AI opportunities, engineer practical
              solutions, modernize their platforms and continuously innovate through intelligent
              automation, delivered by one accountable team from strategy through production.
            </p>
          </div>
        </div>
      </section>

      {/* INSIGHTS — removed. The three cards had zero <a> tags and no article route exists
          in this repo to link to yet; an unclickable blog is worse than no blog. Bring this
          section back once /insights/$slug pages exist with IMG-12..14 covers, dates and
          authors, and wire real <Link>s. */}

      {/* FINAL CTA — 484px -> ~300px, tightened padding, two CTAs matching the hero split. */}
      <CTASection
        compact
        secondary={{ to: "/products/setu-systems", label: "Explore Setu Systems" }}
      />
    </main>
  );
}