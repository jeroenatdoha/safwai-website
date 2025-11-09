import { ArrowRight } from "lucide-react"
import { BrandText } from "./brand-text"

export function MethodologySection() {
  const steps = [
    {
      number: "1",
      title: "ASSESS",
      description:
        "Comprehensive evaluation of your current state, AI readiness, data landscape, and strategic objectives.",
    },
    {
      number: "2",
      title: "DESIGN",
      description:
        "Co-create tailored strategies and solution architectures aligned with your business goals and technical environment.",
    },
    {
      number: "3",
      title: "BUILD",
      description: "Develop and configure AI solutions with focus on quality, security, and seamless integration.",
    },
    {
      number: "4",
      title: "DEPLOY",
      description: "Implement with precision, ensuring minimal disruption and maximum adoption readiness.",
    },
    {
      number: "5",
      title: "OPTIMIZE",
      description: "Continuous monitoring, refinement, and scaling to maximize value realization and ROI.",
    },
    {
      number: "6",
      title: "ENABLE",
      description: "Transfer knowledge and build internal capabilities to ensure sustainable success.",
    },
  ]

  return (
    <section id="methodology" className="py-16 md:py-24" style={{ backgroundColor: "#002D49" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#D4AF37" }}>
            The <BrandText className="text-4xl md:text-5xl" /> Implementation Framework
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#F7F6F3" }}>
            A proven, systematic approach to AI transformation
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="font-heading font-bold text-7xl mb-2" style={{ color: "#D4AF37" }}>
                  {step.number}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3" style={{ color: "#F7F6F3" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(247, 246, 243, 0.8)" }}>
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute top-12 -right-4 transform translate-x-1/2">
                  <ArrowRight className="w-6 h-6" style={{ color: "#7BC9A3" }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="font-heading font-bold text-6xl" style={{ color: "#D4AF37" }}>
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-heading font-semibold text-xl mb-2" style={{ color: "#F7F6F3" }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "rgba(247, 246, 243, 0.8)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
