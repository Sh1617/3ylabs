// CHANGED: new file. Adds the dark/light toggle called out in the audit
// ("no dark mode, no prefers-color-scheme handling, no toggle"). Reads the
// theme the inline script in __root.tsx already applied to <html>, then
// flips the `dark` class and persists the choice.
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      window.localStorage.setItem("3ylabs-theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode etc.) — theme just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-border text-primary transition-colors hover:bg-secondary ${className}`}
    >
      {dark ? <Sun className="h-4 w-4" aria-hidden /> : <Moon className="h-4 w-4" aria-hidden />}
    </button>
  );
}
