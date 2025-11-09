"use client"

import type React from "react"

import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"
import { BrandText } from "./brand-text"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#methodology", label: "Methodology" },
    { href: "#why-us", label: "Why SAFWAI" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer style={{ backgroundColor: "#E8DCC4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <Image src="/safwai-logo-vertical.svg" alt="SAFWAI Logo" width={140} height={70} className="mb-6" />
            <p className="text-base leading-relaxed mb-4" style={{ color: "#002D49" }}>
              <BrandText className="text-base" /> (صفوة) means &quot;the elite&quot; in Arabic—delivering premium AI
              consulting and implementation services to enterprises across the GCC region and beyond.
            </p>
            <p className="text-sm" style={{ color: "rgba(0, 45, 73, 0.7)" }}>
              Powered by strategic partnerships with leading global AI technology providers.
            </p>
          </div>

          {/* Column 2 - Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6" style={{ color: "#0E5C4D" }}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                <div>
                  <p style={{ color: "#002D49" }}>Doha, Qatar</p>
                  <p className="text-sm" style={{ color: "rgba(0, 45, 73, 0.7)" }}>
                    Serving the GCC Region
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                <p style={{ color: "#002D49" }}>contact@safwai.qa</p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#D4AF37" }} />
                <p style={{ color: "#002D49" }}>+974 XXXX XXXX</p>
              </div>

              <div className="text-sm" style={{ color: "rgba(0, 45, 73, 0.7)" }}>
                <p>Sunday - Thursday</p>
                <p>8:00 AM - 6:00 PM GST</p>
              </div>
            </div>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6" style={{ color: "#0E5C4D" }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="transition-colors duration-300"
                    style={{ color: "#002D49" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#0E5C4D"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#002D49"
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" style={{ borderColor: "rgba(14, 92, 77, 0.2)" }} />

        {/* Bottom Bar */}
        <div className="text-center text-sm" style={{ color: "rgba(0, 45, 73, 0.7)" }}>
          <p>© {currentYear} SAFWAI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>

      {/* Decorative pattern */}
      <div
        className="h-1"
        style={{
          background: "linear-gradient(to right, #0E5C4D, #D4AF37, #7BC9A3)",
        }}
      />
    </footer>
  )
}
