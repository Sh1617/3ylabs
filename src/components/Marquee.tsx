import type { CSSProperties } from "react";

// Continuous horizontal scroll strip, e.g. capability tags or a client/proof-point row.
// Pure CSS animation (see .marquee-track in styles.css): no JS, respects prefers-reduced-motion,
// and edges fade via a mask so items don't clip abruptly.
interface MarqueeProps {
  items: string[];
  className?: string;
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  /** How many times the items repeat in the track. Use 4 for short lists (<8 items) so the
   *  strip never runs out of content on wide screens. */
  copies?: number;
  /** Accessible label for the strip. */
  label?: string;
}

export function Marquee({
  items,
  className = "",
  duration = 32,
  copies = 2,
  label = "Capabilities",
}: MarqueeProps) {
  return (
    <div
      className={`marquee-mask overflow-hidden ${className}`}
      role="list"
      aria-label={label}
    >
      <div
        className="marquee-track flex w-max items-center gap-3"
        style={
          {
            animationDuration: `${duration}s`,
            "--marquee-shift": `${-100 / copies}%`,
          } as CSSProperties
        }
      >
        {Array.from({ length: copies }, () => items).flat().map((item, i) => (
          <span
            key={`${item}-${i}`}
            role="listitem"
            aria-hidden={i >= items.length}
            className="glass-card shrink-0 whitespace-nowrap px-5 py-2.5 text-sm font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}