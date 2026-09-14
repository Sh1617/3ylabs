import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Factory, Gavel, HeartPulse, Landmark, Shield } from "lucide-react";
import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import legalImage from "@/assets/legal-industry.jpg";
import healthcareImage from "@/assets/healthcare-industry.png";
import insuranceImage from "@/assets/insurance-industry.png";
import financialServicesImage from "@/assets/financial-services-industry.png";
import manufacturingImage from "@/assets/manufacturing-industry.png";
import professionalServicesImage from "@/assets/professional-services-industry.png";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | AI for Legal, Healthcare and Regulated Sectors" },
      {
        name: "description",
        content:
          "3ylabs works deepest in legal, and applies the same governed AI delivery model to healthcare, insurance, financial services, manufacturing and professional services.",
      },
      { property: "og:title", content: "Industries | 3ylabs" },
      {
        property: "og:description",
        content:
          "Legal first, then healthcare, insurance, financial services, manufacturing and professional services.",
      },
      { property: "og:url", content: "https://3ylabs.com/industries" },
    ],
    links: [{ rel: "canonical", href: "https://3ylabs.com/industries" }],
  }),
  component: Industries,
});

const industries = [
  {
    id: "legal",
    icon: Gavel,
    name: "Legal",
    image: legalImage,
    alt: "Professionals reviewing case material in a modern glass meeting room",
    lead: "Our deepest domain focus, and the operating context behind Setu Systems.",
    points: [
      "Case and matter management that replaces spreadsheets and email trails",
      "Client intake and ticketing with clear ownership and response times",
      "Evidence intelligence and AI-assisted drafting with human review built in",
      "Billing and financial operations tuned to professional-services firms",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    image: healthcareImage,
    alt: "Clinical administrator reviewing patient data on a tablet at her workstation",
    lead: "Document-heavy operations where accuracy and auditability are not negotiable.",
    points: [
      "Clinical and administrative document processing",
      "Care coordination workflows with role-aware access",
      "Governed AI assistance with traceable outputs",
    ],
  },
  {
    id: "insurance",
    icon: Shield,
    name: "Insurance",
    image: insuranceImage,
    alt: "Claims adjuster reviewing an auto claim across a tablet and desktop monitors",
    lead: "Claims and underwriting workflows that reward speed with control.",
    points: [
      "Claims triage and document extraction",
      "Underwriting support and risk summarization",
      "Exception handling routed to the right human",
    ],
  },
  {
    id: "financial-services",
    icon: Landmark,
    name: "Financial Services",
    image: financialServicesImage,
    alt: "Finance team reviewing a performance dashboard and reports in a meeting room",
    lead: "Intelligence and automation inside a hard compliance perimeter.",
    points: [
      "Reporting and reconciliation automation",
      "Policy-aware copilots for internal teams",
      "Audit trails as a first-class design constraint",
    ],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    image: manufacturingImage,
    alt: "Technician inspecting a component on the plant floor beside robotic equipment",
    lead: "Operational visibility across plants, suppliers and schedules.",
    points: [
      "Operational dashboards and decision support",
      "Supplier and quality document intelligence",
      "Process automation across existing systems",
    ],
  },
  {
    id: "professional-services",
    icon: Building2,
    name: "Professional Services",
    image: professionalServicesImage,
    alt: "Consulting team presenting a strategic development plan in a meeting room",
    lead: "Billable time protected by better systems, not more effort.",
    points: [
      "Engagement, resourcing and billing workflows",
      "Knowledge retrieval across past work",
      "Client portals with clean status reporting",
    ],
  },
];

function Industries() {
  const [active, setActive] = useState("legal");
  const current = industries.find((i) => i.id === active)!;

  return (
    <main>
      <Breadcrumbs items={[{ label: "Industries" }]} />

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <p className="label-mono">Industries</p>
          <h1 className="mt-3 max-w-3xl text-scale-34 font-bold tracking-display-tight sm:text-scale-44">
            AI that fits the way your industry works.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Legal is where we go deepest. The same governed delivery model carries across every
            regulated, document-heavy operation.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <ul
              role="tablist"
              aria-label="Industries"
              className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:px-0"
            >
              {industries.map((i) => {
                const on = i.id === active;
                return (
                  <li key={i.id} className="snap-start">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setActive(i.id)}
                      className={`flex w-full cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        on
                          ? "border-transparent bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                          : "border-border bg-background text-muted-foreground hover:border-[var(--brand)] hover:text-primary"
                      }`}
                    >
                      <i.icon className="h-4 w-4" aria-hidden />
                      {i.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div key={active} className="animate-fade-up">
            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)]">
              {/* CHANGED: real photo per industry (user-supplied), keyed by the active tab —
                  previously only Legal had a photo and the other five used a generic icon
                  panel while photography was pending. */}
              <img
                src={current.image}
                alt={current.alt}
                loading="lazy"
                decoding="async"
                width={1400}
                height={1000}
                className="h-56 w-full object-cover sm:h-72"
              />
              <div className="bg-card p-7 sm:p-9">
                <h2 className="font-display text-scale-27 font-bold sm:text-scale-34">
                  {current.name}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {current.lead}
                </p>
                <ul className="mt-6 space-y-3">
                  {current.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-foreground">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-orange)]"
                        aria-hidden
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/products/setu-systems"
                  className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
                >
                  See how Setu Systems supports this
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}