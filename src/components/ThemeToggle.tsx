// CHANGED: single icon toggle button, per client request. Per the theming spec: no
// aria-pressed (a pressed-state button needs a constant label; this button's label
// intentionally changes to name the next theme, so the two conflict — keep the changing
// label only). Initial state reads from the DOM after mount to avoid a hydration mismatch,
// and each toggle updates <meta name="theme-color"> so mobile browser chrome matches.
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "daylight" | "lab";

const THEME_COLOR: Record<Theme, string> = {
  daylight: "#F9FAFD",
  lab: "#07090F",
};

function setThemeColorMeta(theme: Theme) {
  // The two media-query theme-color tags stay for the no-choice/OS case; this one is
  // unconditional and, being added after them in the DOM, wins once an explicit choice is made.
  let meta = document.querySelector('meta[name="theme-color"][data-explicit]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    meta.setAttribute("data-explicit", "");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", THEME_COLOR[theme]);
}

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
    setThemeColorMeta(next);
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