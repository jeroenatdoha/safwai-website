import { Award, Scale, ArrowRight, MapPin, Sparkles, TrendingUp } from "lucide-react"
import { BrandText } from "./brand-text"

export function WhySafwaiSection() {
  const benefits = [
    {
      icon: Award,
      title: "Proven Enterprise Experience",
      description:
        "We've delivered successful AI implementations across financial services, government, construction, energy, and other mission-critical sectors throughout the GCC region.",
    },
    {
      icon: Scale,
      title: "Strategic Independence with Technology Access",
      description:
        "Unlike pure technology vendors, we provide objective strategic guidance while maintaining partnerships with leading AI platform providers. You get unbiased advice backed by proven technology solutions.",
    },
    {
      icon: ArrowRight,
      title: "From Strategy to Execution",
      description:
        "We don't just deliver recommendations—we stay with you through implementation, ensuring your AI initiatives deliver measurable business value.",
    },
    {
      icon: MapPin,
      title: "GCC Market Expertise",
      description:
        "Deep understanding of regional business culture, regulatory requirements, and market dynamics ensures solutions that work in your context.",
    },
    {
      icon: Sparkles,
      title: "Bespoke, Not Boilerplate",
      description:
        "Every engagement is tailored to your specific challenges, objectives, and organizational context. No cookie-cutter approaches.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Impact Focus",
      description:
        "We emphasize quick wins and demonstrable ROI while building sustainable long-term capabilities. Our success is measured by your results.",
    },
  ]

  return (
    <section id="why-us" className="py-16 md:py-24" style={{ backgroundColor: "#E8DCC4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#0E5C4D" }}>
            Why Organizations Choose <BrandText />
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#002D49" }}>
            Partner with a team that understands both technology and your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Icon className="w-8 h-8" style={{ color: "#D4AF37" }} />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-3" style={{ color: "#0E5C4D" }}>
                  {benefit.title}
                </h3>

                <p className="text-base leading-relaxed" style={{ color: "#002D49" }}>
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
