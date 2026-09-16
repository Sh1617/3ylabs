import type { ReactNode } from "react";

// CHANGED: wraps the existing browser-chrome PortalMockup screens in a coded laptop device
// frame on the products pages — no image assets, so it stays crisp and theme-aware (works in
// both Daylight and Lab) instead of needing a photographed/rendered laptop mockup per screen.
export function LaptopFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="rounded-t-xl border border-b-0 border-border bg-[var(--tint)] p-2 shadow-[var(--shadow-lift)] sm:p-3">
        <div className="overflow-hidden rounded-lg border border-border">{children}</div>
      </div>
      <div
        aria-hidden
        className="relative h-3 rounded-b-xl border border-t-0 border-border bg-[var(--tint)] sm:h-4"
      >
        <span className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b-md bg-border sm:w-20" />
      </div>
      <div aria-hidden className="mx-auto h-1.5 w-[85%] rounded-b-2xl bg-border/70" />
    </div>
  );
}
