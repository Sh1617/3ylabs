import { CheckCircle2, PlayCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// CHANGED (08.4 — product positioning): the product-path CTA ("See a 3-minute walkthrough")
// was previously wired to DemoModal, which demands name/email/company before showing anything.
// That's the right friction for the services path, wrong for someone just evaluating the
// product. This modal shows the walkthrough immediately; email is only offered afterward, and
// is optional.
export function WalkthroughModal({ product, onClose }: { product: string; onClose: () => void }) {
  const [watched, setWatched] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[oklch(0.19_0.03_268/0.5)] p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${product} walkthrough`}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={ref}
        className="animate-fade-up max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-border bg-card p-6 shadow-[var(--shadow-lift)] sm:max-w-lg sm:rounded-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="label-mono">{product} — 3-minute walkthrough</p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1 text-muted-foreground hover:bg-secondary"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {!watched ? (
          <>
            {/* No form — the walkthrough plays immediately */}
            <button
              type="button"
              onClick={() => setWatched(true)}
              className="mt-4 flex aspect-video w-full items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-[var(--tint)] text-sm font-medium text-muted-foreground transition-colors hover:border-[var(--brand)] hover:text-primary"
            >
              <PlayCircle className="h-6 w-6 text-[var(--brand)]" aria-hidden />
              Play the {product} walkthrough
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              [Recorded walkthrough placeholder — no sign-up required to watch.]
            </p>
          </>
        ) : emailSent ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-[var(--cyan)]" aria-hidden />
            <h3 className="mt-4 text-lg font-semibold">Sent</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We've emailed you the {product} walkthrough and notes.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="mt-4">
            <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-border bg-[var(--tint)] text-sm text-muted-foreground">
              [Walkthrough playing]
            </div>
            {/* Email capture only offered after watching, and it's optional */}
            <form
              className="mt-5 flex flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setEmailSent(true);
              }}
            >
              <label htmlFor="walkthrough-email" className="sr-only">
                Work email
              </label>
              <input
                id="walkthrough-email"
                type="email"
                placeholder="Want the notes? Add your work email (optional)"
                className="w-full flex-1 rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-[var(--brand)]"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Send
              </button>
            </form>
            <button
              type="button"
              onClick={onClose}
              className="mt-3 text-xs text-muted-foreground hover:text-primary"
            >
              No thanks, just close this
            </button>
          </div>
        )}
      </div>
    </div>
  );
}