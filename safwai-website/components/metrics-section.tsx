"use client"

import { useEffect, useRef, useState } from "react"

export function MetricsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const metrics = [
    { value: "40-60%", label: "Reduction in manual processing time" },
    { value: "30-50%", label: "Improvement in decision-making speed" },
    { value: "25-45%", label: "Cost savings in targeted operations" },
    { value: "60-80%", label: "Improvement in data accuracy" },
    { value: "3-6", label: "Time-to-value in months" },
    { value: "200-400%", label: "ROI within 12-18 months" },
  ]

  return (
    <section ref={sectionRef} className="py-16 md:py-24" style={{ backgroundColor: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#0E5C4D" }}>
            Client Success Metrics
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#002D49" }}>
            Delivering measurable results that drive real business impact
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                border: "1px solid rgba(123, 201, 163, 0.3)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="font-heading font-bold text-5xl mb-3" style={{ color: "#D4AF37" }}>
                {metric.value}
              </div>
              <p className="text-base leading-relaxed" style={{ color: "#002D49" }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm" style={{ color: "rgba(0, 45, 73, 0.7)" }}>
          * Results vary by industry, use case, and organizational context
        </p>
      </div>
    </section>
  )
}
