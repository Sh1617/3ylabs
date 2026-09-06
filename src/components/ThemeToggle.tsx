// CHANGED: rebuilt per the Daylight/Lab toggle spec — a labeled two-segment control instead of
// a sun/moon icon button. The theme names are part of the brand, so an icon-only control that
// doesn't say what it does isn't enough. Persists to localStorage["3y-theme"]; no stored value
// means no explicit choice, and styles.css falls back to the OS preference.
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

  const choose = (next: Theme) => {
    setTheme(next);
    document.documentElement.dataset["theme"] = next;
    try {
      window.localStorage.setItem("3y-theme", next);
    } catch {
      // localStorage unavailable (private mode etc.) — theme just won't persist
    }
    setAnnouncement(`${next === "lab" ? "Lab" : "Daylight"} theme on.`);
  };

  return (
    <div
      role="group"
      aria-label="Theme"
      className={`inline-flex items-center gap-0.5 rounded-lg border border-border bg-secondary p-0.5 ${className}`}
    >
      <button
        type="button"
        aria-pressed={theme === "daylight"}
        onClick={() => choose("daylight")}
        className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-[240ms] ease-out motion-reduce:transition-none ${
          theme === "daylight"
            ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Daylight
      </button>
      <button
        type="button"
        aria-pressed={theme === "lab"}
        onClick={() => choose("lab")}
        className={`cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-colors duration-[240ms] ease-out motion-reduce:transition-none ${
          theme === "lab"
            ? "bg-card text-foreground shadow-[var(--shadow-soft)]"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Lab
      </button>
      <span aria-live="polite" className="sr-only">
        {announcement}
      </span>
    </div>
  );
}
