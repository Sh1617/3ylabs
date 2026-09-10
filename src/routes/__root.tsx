import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-scale-56 font-bold tracking-display-tight text-foreground">404</h1>
        <h2 className="mt-4 text-scale-21 font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-scale-21 font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "3ylabs: From AI curiosity to AI capability" },
      {
        name: "description",
        content:
          "3ylabs helps organizations turn AI ambition into secure, scalable products and intelligent operations.",
      },
      { name: "author", content: "3ylabs" },
      { property: "og:title", content: "3ylabs: From AI curiosity to AI capability" },
      {
        property: "og:description",
        content: "AI strategy, AI-native products and production operations.",
      },
      { property: "og:type", content: "website" },
      // CHANGED: og:image was missing site-wide (audit: "/og.png returns 404") — added the
      // tag plus twitter:image, and generated public/og.png at the standard 1200x630.
      { property: "og:image", content: "https://3ylabs.com/og.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://3ylabs.com/og.png" },
      // CHANGED: Daylight/Lab spec — mobile browser chrome should match the active theme.
      { name: "theme-color", content: "#FBFBFD", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#0B0F18", media: "(prefers-color-scheme: dark)" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // CHANGED (WEB-012): fonts are self-hosted via @fontsource (imported in styles.css)
      // instead of a render-blocking Google Fonts stylesheet — removes the two cross-origin
      // round-trips this finding flagged.
      // CHANGED: image-system brief — SVG favicon is now primary (crisp at any size, modern
      // browser support), PNG kept as a fallback for browsers that don't support SVG icons.
      // apple-touch-icon needs a real raster PNG (iOS doesn't reliably accept SVG here) and a
      // manifest.webmanifest were both previously absent, per the audit.
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

// CHANGED: Daylight/Lab spec — blocking script, before the stylesheet, stamps data-theme only
// when the visitor has made an explicit choice. No stored value means no attribute at all, so
// the :root:not([data-theme="daylight"]) media-query layer in styles.css runs the OS preference.
const THEME_INIT_SCRIPT = `
(function () {
  try {
    var t = localStorage.getItem("3y-theme");
    if (t === "lab" || t === "daylight") document.documentElement.dataset.theme = t;
  } catch (e) {}
})();
`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* CHANGED: inline theme-init script, must run before body paints */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}