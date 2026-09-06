import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Cloud,
  Cpu,
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
import { HeroVisual } from "@/components/HeroVisual";
import { PortalExplorer } from "@/components/PortalExplorer";
import { SetuArchitecture } from "@/components/SetuArchitecture";
import { CTASection } from "@/components/CTASection";
// CHANGED: these two photos already shipped in src/assets (used on /industries and /about)
// but were never used on the homepage — the page that audit actually looked at. No new
// images were sourced; these are the site's own existing, already-licensed assets.
import legalImage from "@/assets/legal-industry.jpg";
import teamImage from "@/assets/team-about.jpg";
// CHANGED: image-system brief — replaced the stock white-background "abstract wave" jpg, which
// forced a hardcoded bg-white card that broke in Lab (dark) theme (a visible white seam on an
// otherwise all-dark page) and read as generic stock filler. Same signal-rings recipe as the
// insight covers, drawn on the site's own dark ground, so no themed card wrapper is needed.
import bridgeImage from "@/assets/bridge-banner.svg";
// CHANGED: image-system brief — IMG-12..14, three purpose-made abstract covers from one fixed
// recipe (concentric signal rings from a focal point, indigo/orange on the site's own near-black
// ground) so they read as siblings, one per insight card instead of one jpg reused on all three.
import coverPlaybooks from "@/assets/insight-cover-playbooks.svg";
import coverResponsibleAi from "@/assets/insight-cover-responsible-ai.svg";
import coverBuildNotes from "@/assets/insight-cover-build-notes.svg";

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
    ],
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
    icon: Cpu,
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


const industries = [
  { icon: Gavel, name: "Legal", featured: true },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Shield, name: "Insurance" },
  { icon: Landmark, name: "Financial Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Professional Services" },
];

const insights = [
  {
    category: "AI Transformation Playbooks",
    title: "Where AI Creates Real Enterprise Value",
    body: "A practical way to separate AI experiments from initiatives that change the operating model.",
    cover: coverPlaybooks,
  },
  {
    category: "Responsible AI",
    title: "Designing Responsible AI Workflows",
    body: "Human review, traceability and role-aware access as design constraints, not afterthoughts.",
    cover: coverResponsibleAi,
  },
  {
    category: "Build Notes",
    title: "What We Learned Building AI-Native Operations",
    body: "Lessons from putting agents, document intelligence and copilots into daily production use.",
    cover: coverBuildNotes,
  },
];

function Home() {
  // CHANGED: index + non-null assertion instead of array destructuring — the destructured
  // version still typechecked featuredInsight as possibly-undefined under this project's
  // strict TS config, which broke `npm run build`. We know the literal array has 3 items.
  const featuredInsight = insights[0]!;
  const otherInsights = insights.slice(1);
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2">  {/* CHANGED: 24->20 hero padding, cuts homepage length */}
          <div className="animate-fade-up">
            <p className="label-mono">
              AI Transformation • AI-Native Products • Production
            </p>
            <h1 className="mt-5 text-scale-34 font-bold leading-[1.06] tracking-display-tight sm:text-scale-44 lg:text-scale-56">
              From AI curiosity to <span className="text-gradient-brand">AI capability.</span>
            </h1>
            <p className="prose-cap mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              3ylabs helps organizations turn AI ambition into secure, scalable products and
              intelligent operations, from strategy through production.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
              We advise. We build. We run our own products.
            </p>
            {/* CHANGED: added — nowhere on the old homepage did one sentence explain how
                3ylabs, Setu Systems and AscendHSI relate to each other. */}
            <p className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
              3ylabs is the studio. Setu Systems is the product platform we build and sell.
              AscendHSI is a client who runs their operations on it end to end.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                style={{ background: "var(--gradient-accent)" }}
                className="group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                Book an AI Readiness Assessment
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
              </Link>
              <Link
                to="/products/setu-systems"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Explore Setu Systems
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-6">
            <HeroVisual />
          </div>
        </div>

        {/* CHANGED: was its own <section> — folded into the hero section (audit target:
            10 sections -> 8). Also h2 -> h3 for these three card labels; they're a
            decorative recap of the hero copy, not real section headings. */}
        <div className="container-page pb-14 sm:pb-20">
          <div className="grid overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] md:grid-cols-3">
            {abr.map((c, i) => (
              <div
                key={c.key}
                className={`group bg-card p-8 transition-colors hover:bg-[var(--tint)] ${
                  i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)] transition-colors group-hover:bg-background">
                    <c.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">
                    {c.key}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-page scroll-mt-20 py-12 sm:py-16">  {/* CHANGED: 16/20->12/16 */}
        <p className="label-mono">Services</p>
        <h2 className="mt-3 max-w-2xl text-scale-34 font-bold sm:text-scale-34">
          Where AI becomes operational.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="surface-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--tint)]">
                <s.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-scale-21 font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="label-mono">Extended services</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {extendedServices.map((s) => (
              <article key={s.title} className="rounded-2xl border border-border bg-[var(--tint)] p-6">
                <h3 className="font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* SETU */}
      <section id="products" className="scroll-mt-20 bg-[var(--tint)] py-14 sm:py-20">  {/* CHANGED: 16/24->14/20 */}
        <div className="container-page">
          <p className="label-mono">Setu Systems</p>
          <h2 className="mt-3 max-w-3xl text-scale-34 font-bold sm:text-scale-34">
            One intelligent platform. Every part of the operation.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Setu means "bridge" in Sanskrit: the bridge between business functions, and between
            people and intelligent systems. Setu Systems gives you a portal for every part of your
            operation: cases, billing, client inquiries,
            evidence and insight, all with AI woven through.
          </p>
          <p className="mt-3 text-sm font-medium text-primary">
            {/* CHANGED: made the recommendation explicit instead of leaving six equal tabs
                for the visitor to sort out on their own. */}
            Most teams start with Setu Vantage for case management, then add portals as they
            grow — with implementation and customization from 3ylabs.
          </p>

          {/* CHANGED: generated graphic (src/assets/bridge-banner.svg) illustrating the "Setu
              means bridge" line above — drawn on the same dark ground in both themes, so the
              card wrapper stays a plain themed border, no hardcoded white background. */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={bridgeImage}
              alt="Signal rings radiating from a single point, representing Setu as the bridge between systems"
              width={1600}
              height={280}
              loading="lazy"
              decoding="async"
              className="h-32 w-full object-cover sm:h-40"
            />
          </div>

          <div className="mt-12">
            <PortalExplorer />
          </div>

          <div className="mt-16">
            <SetuArchitecture />
          </div>

          <div className="mt-10">
            <Link
              to="/products/setu-systems"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              See the full Setu Systems platform <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ASCENDHSI PROOF STRIP */}
      <section className="container-page py-12 sm:py-16">  {/* CHANGED: 16/20->12/16 */}
        {/* CHANGED: grid widened from 2 to 3 columns to fit the photo below */}
        <div className="surface-card grid gap-8 overflow-hidden p-7 sm:p-10 lg:grid-cols-[1fr_0.85fr_1fr] lg:items-center">
          {/* FLAG (image-system brief, IMG-09): this is a generic stock photo of people at a
              whiteboard — close to the banned "diverse people pointing at a screen" pattern from
              the design brief. Needs replacing with real commissioned workplace photography
              (real desks, real screens, no posing) once that shoot happens; left as-is for now
              since there's no real photo to swap it for yet. */}
          <div className="order-first overflow-hidden rounded-2xl lg:order-none">
            <img
              src={teamImage}
              alt="The 3ylabs team reviewing an operations workflow together"
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              className="h-44 w-full object-cover sm:h-56 lg:h-full lg:min-h-[220px]"
            />
          </div>
          <div>
            <p className="label-mono">Proof in production · AscendHSI</p>
            <h2 className="mt-3 text-scale-27 font-bold sm:text-scale-34">
              We run the operations behind an immigration case operations firm.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              3ylabs powers AscendHSI's operations end to end with Setu portals for case management,
              client ticketing and billing, AI in daily workflows with human review, and the cloud
              infrastructure underneath.
            </p>
            {/* CHANGED: added — flags that this is the one place on the whole site that needs
                a real number and a client quote/logo. Replace the bracketed text with the
                actual figures before shipping; I didn't invent stats. */}
            <p className="mt-3 max-w-xl text-xs italic leading-relaxed text-muted-foreground/80">
              [Add one real metric here — e.g. response-time reduction, case volume, or a direct
              quote from AscendHSI — plus their logo. A single verified number will do more work
              than all three bullets below combined.]
            </p>
            <Link
              to="/results"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              Read the AscendHSI story <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              "One source of truth for a distributed team",
              "Faster client response times",
              "An operations backbone that scales",
            ].map((t) => (
              <li
                key={t}
                className="rounded-xl border border-border bg-[var(--tint)] px-4 py-4 text-sm font-medium text-primary"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

      {/* CHANGED: "APPROACH PREVIEW" used to be its own <section> — merged in here as a
          second block so the proof strip and approach summary share one section
          (audit target: 10 sections -> 8). */}
      <div className="container-page mt-14 border-t border-border pt-14">
        <p className="label-mono">Approach</p>
        <h2 className="mt-3 max-w-2xl text-scale-34 font-bold sm:text-scale-34">
          One accountable team, from strategy through production.
        </h2>
        <ol className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {[
            ["01", "Discover", "Goals, workflows, data and AI opportunities."],
            ["02", "Design", "Experience, architecture and governance."],
            ["03", "Build", "Engineer the AI-native solution."],
            ["04", "Deploy", "Productionize securely."],
            ["05", "Optimize", "Measure, improve, keep innovating."],
          ].map(([n, name, body]) => (
            <li key={n} className="surface-card p-5">
              <span className="font-mono text-[11px] tracking-widest text-[var(--brand)]">{n}</span>
              <p className="mt-1 font-display font-semibold">{name}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
        <Link
          to="/approach"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
        >
          Explore the full approach <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="container-page scroll-mt-20 py-12 sm:py-16">  {/* CHANGED: 16/24->12/16 (py-18 isn't a valid Tailwind step) */}
        <p className="label-mono">Industries</p>
        <h2 className="mt-3 max-w-2xl text-scale-34 font-bold sm:text-scale-34">
          AI that fits the way your industry works.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <article
              key={i.name}
              className={`relative overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                i.featured
                  ? "border-transparent text-primary-foreground shadow-[var(--shadow-lift)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
              // CHANGED: featured card now shows the real legal-industry.jpg photo (already
              // in src/assets, previously only used on /industries) under a brand-gradient
              // scrim, instead of a flat CSS gradient with no imagery at all.
              style={
                i.featured
                  ? {
                      backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--brand-deep) 92%, transparent) 0%, color-mix(in oklab, var(--brand) 80%, transparent) 100%), url(${legalImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : undefined
              }
            >
              <i.icon
                className={`h-5 w-5 ${i.featured ? "text-primary-foreground" : "text-[var(--brand)]"}`}
                aria-hidden
              />
              <h3
                className={`mt-4 font-display text-lg font-semibold ${i.featured ? "text-primary-foreground" : ""}`}
              >
                {i.name}
              </h3>
              {i.featured && (
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/80">
                  Deepest domain focus
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* HEM */}
      <section id="about" className="scroll-mt-20 border-y border-border bg-[var(--tint)] py-14 sm:py-20">  {/* CHANGED: 16/24->14/20 */}
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="label-mono">HEM / Hyper Enabled Minds</p>
            <h2 className="mt-4 text-scale-34 font-bold sm:text-scale-34">
              AI should amplify people, not replace them.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We believe artificial intelligence should amplify human capability, accelerate
              innovation and enable smarter decisions, not replace the people behind them.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--cyan) 35%, transparent), transparent 70%)",
              }}
            />
            <div className="relative grid gap-3 sm:grid-cols-2">
              {["Human judgment", "Machine speed", "Governed by design", "Measurable outcomes"].map(
                (t) => (
                  <div key={t} className="rounded-xl border border-border bg-background px-4 py-5">
                    <p className="font-display text-sm font-semibold text-primary">{t}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="container-page mt-14 grid gap-5 md:grid-cols-2">
          <article className="surface-card p-7">
            <p className="label-mono">Vision</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              To become the most trusted AI transformation partner, empowering organizations to
              build intelligent, secure and scalable digital enterprises.
            </p>
          </article>
          <article className="surface-card p-7">
            <p className="label-mono">Mission</p>
            <p className="mt-3 text-base leading-relaxed text-foreground">
              To help organizations identify the right AI opportunities, engineer practical
              solutions, modernize their platforms and continuously innovate through intelligent
              automation, delivered by one accountable team from strategy through production.
            </p>
          </article>
        </div>
      </section>


      {/* INSIGHTS */}
      <section id="insights" className="container-page scroll-mt-20 py-12 sm:py-16">  {/* CHANGED: 16/24->12/16 */}
        <p className="label-mono">Insights</p>
        <h2 className="mt-3 text-scale-34 font-bold sm:text-scale-34">Notes from the work.</h2>
        {/* CHANGED: image-system brief — each of the three cards now carries its own generated
            cover (IMG-12..14) instead of one jpg reused only on the featured card. All below the
            fold, so loading="lazy" decoding="async" throughout; explicit width/height on every
            <img> so nothing shifts on load. */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="surface-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:col-span-2">
            <div className="grid sm:grid-cols-2">
              <img
                src={featuredInsight.cover}
                alt={`Abstract cover artwork for the ${featuredInsight.category} insight`}
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                className="h-40 w-full object-cover sm:h-full"
              />
              <div className="flex flex-col justify-center p-6">
                <p className="label-mono">{featuredInsight.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                  {featuredInsight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {featuredInsight.body}
                </p>
              </div>
            </div>
          </article>
          {otherInsights.map((a) => (
            <article
              key={a.title}
              className="surface-card flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <img
                src={a.cover}
                alt={`Abstract cover artwork for the ${a.category} insight`}
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                className="h-32 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="label-mono">{a.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}