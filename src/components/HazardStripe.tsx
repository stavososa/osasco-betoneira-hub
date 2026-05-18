export function HazardStripe({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`hazard-stripe h-3 w-full ${className}`} />;
}
