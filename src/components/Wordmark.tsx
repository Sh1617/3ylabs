export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-scale-21 font-bold tracking-tight text-primary ${className}`}
    >
      <span className="text-gradient-brand">3y</span>labs
    </span>
  );
}
