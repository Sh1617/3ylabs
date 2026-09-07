import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DemoModal } from "@/components/DemoModal";
import { CTASection } from "@/components/CTASection";
import { portals, type PortalId } from "@/data/setu";
import { useState } from "react";

export const Route = createFileRoute("/products/$portal")({
  head: ({ params }) => {
    const portal = portals.find((item) => item.id === params.portal);
    if (!portal) {
      return { meta: [{ title: "Setu Portal | 3ylabs" }] };
    }
    return {
      meta: [
        { title: `${portal.name}: ${portal.label} | 3ylabs` },
        {
          name: "description",
          content: portal.description,
        },
        { property: "og:title", content: `${portal.name}: ${portal.label} | 3ylabs` },
        { property: "og:description", content: portal.description },
      ],
    };
  },
  component: PortalPage,
});

function PortalPage() {
  const { portal: portalParam } = Route.useParams();
  const portal = portals.find((item) => item.id === portalParam);
  const [demo, setDemo] = useState<string | null>(null);

  if (!portal) {
    return (
      <main className="container-page py-24 text-center">
        <p className="label-mono">Setu Systems</p>
        <h1 className="mt-3 text-3xl font-bold">Portal not found</h1>
        <Link to="/products/setu-systems" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          Back to Setu Systems <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
    );
  }

  return (
    <main>
      <Breadcrumbs items={[{ label: "Products" }, { label: "Setu Systems" }, { label: portal.name }]} />

      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">{portal.label}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            {portal.name}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {portal.description}
          </p>
          <p className="mt-5 text-sm font-medium text-primary">
            Built for {portal.buyer}.
          </p>
          <button
            type="button"
            onClick={() => setDemo(portal.name)}
            className="mt-8 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-accent)" }}
          >
            Request a Demo <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <p className="label-mono">What it helps you do</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold">Designed around the work, not another dashboard.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {portal.benefits.map((benefit) => (
            <article key={benefit} className="surface-card p-6">
              <p className="font-display text-base font-semibold">{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--tint)] py-16 sm:py-20">
        <div className="container-page">
          <p className="label-mono">Setu Systems</p>
          <h2 className="mt-3 text-3xl font-bold">Part of one connected platform.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Start with {portal.name}, then connect the other Setu portals as your operation grows.
            3ylabs handles implementation, customization and the platform underneath.
          </p>
          <Link
            to="/products/setu-systems"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Explore all six portals <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
      {demo && <DemoModal product={demo} onClose={() => setDemo(null)} />}
    </main>
  );
}
