// CHANGED: replaced the two-segment "Daylight / Lab" control with a single icon toggle button,
// per client request. The original spec argued against icon-only because the theme names are
// part of the brand — kept that concern addressed via aria-label, a title tooltip, and the
// aria-live announcement, so the control is still unambiguous to assistive tech even though it
// no longer shows the words "Daylight"/"Lab" visually.
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "daylight" | "lab";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const stamped = document.documentElement.dataset["theme"];
    if (stamped === "lab" || stamped === "daylight") {
      setTheme(stamped);
    } else {
      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "lab" : "daylight");
    }
  }, []);

  const toggle = () => {
    const next: Theme = theme === "lab" ? "daylight" : "lab";
    setTheme(next);
    document.documentElement.dataset["theme"] = next;
    try {
      window.localStorage.setItem("3y-theme", next);
    } catch {
      // localStorage unavailable (private mode etc.) — theme just won't persist
    }
    setAnnouncement(`${next === "lab" ? "Lab" : "Daylight"} theme on.`);
  };

  const isLab = theme === "lab";

  return (
    <div className={`inline-flex ${className}`}>
      <button
        type="button"
        aria-pressed={isLab}
        aria-label={isLab ? "Switch to Daylight theme" : "Switch to Lab theme"}
        title={isLab ? "Switch to Daylight theme" : "Switch to Lab theme"}
        onClick={toggle}
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-colors duration-[240ms] ease-out hover:text-foreground motion-reduce:transition-none"
      >
        {isLab ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
      </button>
      <span aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </div>
  );
}