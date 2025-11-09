import { Target, Search, Layout, Code, Package, Cloud, GraduationCap, Check } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Target,
      title: "AI Strategy & Implementation Consulting",
      description:
        "Transform your vision into action with comprehensive AI strategies aligned with business objectives.",
      deliverables: [
        "AI Readiness & Maturity Assessment",
        "Strategic Roadmap & Implementation Plan",
        "Business Case & ROI Analysis",
        "Governance Framework Design",
        "Executive Advisory & Program Management",
      ],
      idealFor: "C-suite executives, strategy teams, and transformation leaders seeking to chart their AI journey",
    },
    {
      icon: Search,
      title: "Technology Research & Advisory Services",
      description:
        "Navigate the AI landscape with confidence through independent market analysis and technology evaluations.",
      deliverables: [
        "Market Research & Trend Analysis",
        "Technology Vendor Evaluation",
        "Competitive Landscape Assessment",
        "Digital Transformation Roadmaps",
        "Industry Benchmarking Studies",
      ],
      idealFor: "Innovation teams, technology leaders, and investment committees evaluating AI opportunities",
    },
    {
      icon: Layout,
      title: "AI Technology Consulting & Solution Architecture",
      description:
        "Design systems built to scale with robust, enterprise-grade AI solutions seamlessly integrated with your infrastructure.",
      deliverables: [
        "AI Solution Architecture Design",
        "Data Architecture & Engineering Strategy",
        "MLOps Framework Development",
        "Integration Architecture",
        "Technical Feasibility Studies",
        "Performance Optimization Plans",
      ],
      idealFor: "IT leaders, solution architects, data science teams, and technology departments",
    },
    {
      icon: Code,
      title: "Custom AI Software Development",
      description:
        "Build solutions as unique as your business with tailored AI applications from concept to deployment.",
      deliverables: [
        "Machine Learning Model Development",
        "Natural Language Processing (NLP) Applications",
        "Computer Vision & Image Recognition",
        "Conversational AI & Chatbots",
        "Predictive Analytics Platforms",
        "Intelligent Process Automation",
        "Custom AI API Development",
      ],
      idealFor: "Digital transformation teams, product owners, and business units requiring custom AI solutions",
    },
    {
      icon: Package,
      title: "AI Platform & Technology Reselling",
      description:
        "Access best-in-class AI technologies with expert guidance on platform selection and implementation.",
      deliverables: [
        "AI Development Platforms & Frameworks",
        "Cloud AI Services & Infrastructure",
        "Specialized AI Hardware (GPU Computing)",
        "MLOps Platforms",
        "Data Management & Analytics Tools",
        "Enterprise AI Software Solutions",
      ],
      idealFor: "Organizations seeking proven platforms with expert implementation support",
    },
    {
      icon: Cloud,
      title: "AI SaaS License Sales & Distribution",
      description: "Enterprise software solutions made simple with turnkey AI SaaS from leading global providers.",
      deliverables: [
        "SaaS Platform License Sales",
        "Product Demonstrations & POCs",
        "Customer Onboarding & Configuration",
        "Subscription Management",
        "Technical Support Coordination",
        "Customer Success Management",
        "License Optimization Consulting",
      ],
      idealFor: "Enterprises seeking turnkey AI software solutions with local support",
    },
    {
      icon: GraduationCap,
      title: "Technology Training & Capacity Building",
      description: "Build internal AI expertise that lasts with comprehensive training programs for all skill levels.",
      deliverables: [
        "Executive AI Strategy & Leadership",
        "Technical AI & Machine Learning Training",
        "Data Science Workshops",
        "Hands-on Development Bootcamps",
        "Custom Corporate Curriculum",
        "Online & In-Person Delivery",
        "Certification Preparation",
        "Train-the-Trainer Programs",
      ],
      idealFor: "HR leaders, learning & development teams, and organizations building AI centers of excellence",
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24" style={{ backgroundColor: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 rounded-full mb-4" style={{ backgroundColor: "#E8DCC4" }}>
            <span className="font-semibold" style={{ color: "#0E5C4D" }}>
              Our Services
            </span>
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#0E5C4D" }}>
            Comprehensive AI Solutions
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#002D49" }}>
            From strategy to execution, we deliver end-to-end AI services tailored to your enterprise needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ borderLeft: "4px solid #0E5C4D" }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Icon className="w-6 h-6" style={{ color: "#D4AF37" }} />
                </div>

                <h3 className="font-heading font-semibold text-xl mb-3" style={{ color: "#0E5C4D" }}>
                  {service.title}
                </h3>

                <p className="text-base mb-4 leading-relaxed" style={{ color: "#002D49" }}>
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.deliverables.slice(0, 4).map((deliverable, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                      <span className="text-sm" style={{ color: "#002D49" }}>
                        {deliverable}
                      </span>
                    </div>
                  ))}
                  {service.deliverables.length > 4 && (
                    <div className="text-sm" style={{ color: "#0E5C4D" }}>
                      +{service.deliverables.length - 4} more
                    </div>
                  )}
                </div>

                <div className="rounded p-3" style={{ backgroundColor: "rgba(123, 201, 163, 0.2)" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "#002D49" }}>
                    <strong>Ideal For:</strong> {service.idealFor}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
