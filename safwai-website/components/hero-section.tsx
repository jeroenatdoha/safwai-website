"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector("#services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E5C4D 0%, #002D49 100%)",
      }}
    >
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ABC5A5' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center z-10">
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#F7F6F3] mb-6 leading-tight">
          Elite AI Solutions for
          <br />
          <span className="text-[#D4AF37]">Enterprise Excellence</span>
        </h1>

        <p className="text-[#F7F6F3]/90 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Enterprise-ready AI consulting and implementation services delivering measurable results for organizations
          across the GCC region.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            style={{ backgroundColor: "#D4AF37", color: "#002D49" }}
          >
            Schedule Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={scrollToServices}
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
            style={{ borderColor: "#F7F6F3", color: "#F7F6F3" }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7F6F3] to-transparent" />
    </section>
  )
}
