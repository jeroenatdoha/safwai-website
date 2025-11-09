export function BrandText({
  className = "",
  variant = "default",
}: { className?: string; variant?: "default" | "light" }) {
  if (variant === "light") {
    return (
      <span className={`font-heading font-bold ${className}`}>
        <span style={{ color: "#F7F6F3" }}>SAFW</span>
        <span style={{ color: "#D4AF37" }}>AI</span>
      </span>
    )
  }

  return (
    <span className={`font-heading font-bold ${className}`}>
      <span style={{ color: "#0E5C4D" }}>SAFW</span>
      <span style={{ color: "#D4AF37" }}>AI</span>
    </span>
  )
}
