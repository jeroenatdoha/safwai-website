"use client"

import { BrandText } from "./brand-text"

export function CtaSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20" style={{ backgroundColor: "#0E5C4D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#F7F6F3" }}>
          Ready to Transform Your Organization with AI?
        </h2>

        <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: "rgba(247, 246, 243, 0.9)" }}>
          Whether you&apos;re taking your first steps in AI or scaling existing initiatives,{" "}
          <BrandText className="text-xl" variant="light" /> provides the strategic guidance and implementation support
          you need to succeed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: "#D4AF37", color: "#002D49" }}
          >
            Schedule Consultation
          </button>

          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:bg-white"
            style={{ borderColor: "white", color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white"
              e.currentTarget.style.color = "#0E5C4D"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "white"
            }}
          >
            Request Proposal
          </button>

          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 hover:bg-white"
            style={{ borderColor: "white", color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white"
              e.currentTarget.style.color = "#0E5C4D"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "white"
            }}
          >
            Download Framework
          </button>
        </div>
      </div>
    </section>
  )
}
