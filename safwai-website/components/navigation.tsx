"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#industries", label: "Industries" },
    { href: "#methodology", label: "Methodology" },
    { href: "#why-us", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
      style={{ backgroundColor: "#F7F6F3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")} className="flex items-center">
              <Image
                src="/safwai-logo-vertical.svg"
                alt="SAFWAI Logo"
                width={120}
                height={60}
                className="h-12 md:h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#002D49] hover:text-[#0E5C4D] transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#D4AF37", color: "#002D49" }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#002D49] hover:bg-[#E8DCC4] transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-[#ABC5A5]/30" style={{ backgroundColor: "#E8DCC4" }}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-[#002D49] hover:text-[#0E5C4D] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block text-center px-6 py-2.5 rounded-lg font-semibold transition-all duration-300"
              style={{ backgroundColor: "#D4AF37", color: "#002D49" }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
