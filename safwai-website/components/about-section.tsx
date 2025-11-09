import { CheckCircle, Scale, Globe, Award, TrendingUp } from "lucide-react"
import { BrandText } from "./brand-text"

export function AboutSection() {
  const differentiators = [
    {
      icon: CheckCircle,
      text: "Enterprise-grade solutions focused on production readiness, not experiments",
    },
    {
      icon: Scale,
      text: "Strategic independence combined with access to leading AI platforms",
    },
    {
      icon: Globe,
      text: "Deep GCC market understanding and cultural sensitivity",
    },
    {
      icon: Award,
      text: "Proven track record across financial services, government, construction, and energy sectors",
    },
    {
      icon: TrendingUp,
      text: "End-to-end support from strategy through implementation and beyond",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6" style={{ color: "#0E5C4D" }}>
              Who We Are
            </h2>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#002D49" }}>
              <BrandText /> is a premier artificial intelligence consulting and technology services firm dedicated to
              helping enterprises successfully navigate their AI transformation journey.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#002D49" }}>
              We bridge the gap between cutting-edge AI capabilities and practical business outcomes, delivering bespoke
              solutions tailored to your organization&apos;s unique challenges and objectives.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="font-heading font-semibold text-2xl md:text-3xl mb-6" style={{ color: "#0E5C4D" }}>
              Our Approach
            </h3>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#002D49" }}>
              We don&apos;t believe in one-size-fits-all solutions. Every engagement begins with deep understanding of
              your business context, challenges, and goals. Our methodology emphasizes quick wins and measurable impact
              while building sustainable AI capabilities for long-term competitive advantage.
            </p>

            <div className="space-y-4">
              {differentiators.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <Icon className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                    <p className="text-base leading-relaxed" style={{ color: "#002D49" }}>
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
