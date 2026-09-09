import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { services } from "@/data/services";

const company = [
  { label: "About", to: "/about" },
  { label: "Approach", to: "/approach" },
  { label: "Results", to: "/results" },
  { label: "Insights", to: "/insights" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--tint)]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Wordmark className="text-scale-27" />
          {/* CHANGED (08.1): brand-architecture line — states how the three names on the
              homepage relate, on every page. */}
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            3ylabs is an AI engineering studio. We build Setu Systems, our operations platform, and
            we run it in production for firms like AscendHSI.
          </p>
        </div>

        <nav aria-label="Services">
          <p className="label-mono">Services</p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Products">
          <p className="label-mono">Products</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link
                to="/products/setu-systems"
                className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Setu Systems platform
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="label-mono">Company</p>
          <ul className="mt-4 space-y-2.5">
            {company.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to as never}
                  className="cursor-pointer text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 3ylabs. All rights reserved.</p>
          <Link to="/privacy" className="cursor-pointer transition-colors hover:text-primary">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
