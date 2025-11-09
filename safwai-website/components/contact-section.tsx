"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { BrandText } from "./brand-text"

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24" style={{ backgroundColor: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#0E5C4D" }}>
            Get in Touch
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#002D49" }}>
            Let&apos;s discuss how <BrandText className="text-lg" /> can help transform your organization with AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6" style={{ color: "#0E5C4D" }}>
              <BrandText className="text-2xl" />
            </h3>
            <p className="text-lg mb-8" style={{ color: "#002D49" }}>
              Elite AI Solutions for Enterprise Excellence
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <MapPin className="w-6 h-6" style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#0E5C4D" }}>
                    Location
                  </h4>
                  <p style={{ color: "#002D49" }}>
                    Doha, Qatar
                    <br />
                    Serving the GCC Region and Beyond
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Mail className="w-6 h-6" style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#0E5C4D" }}>
                    Email
                  </h4>
                  <p style={{ color: "#002D49" }}>contact@safwai.qa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Phone className="w-6 h-6" style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#0E5C4D" }}>
                    Phone
                  </h4>
                  <p style={{ color: "#002D49" }}>+974 XXXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(212, 175, 55, 0.2)" }}
                >
                  <Clock className="w-6 h-6" style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#0E5C4D" }}>
                    Office Hours
                  </h4>
                  <p style={{ color: "#002D49" }}>
                    Sunday - Thursday
                    <br />
                    8:00 AM - 6:00 PM GST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8" style={{ border: "1px solid #ABC5A5" }}>
            {submitted ? (
              <div className="text-center py-12 rounded-lg" style={{ backgroundColor: "rgba(123, 201, 163, 0.2)" }}>
                <h3 className="font-heading font-semibold text-2xl mb-2" style={{ color: "#0E5C4D" }}>
                  Thank You!
                </h3>
                <p style={{ color: "#002D49" }}>We&apos;ve received your message and will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      border: "1px solid #ABC5A5",
                      color: "#002D49",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0E5C4D"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ABC5A5"
                    }}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    required
                    className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      border: "1px solid #ABC5A5",
                      color: "#002D49",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0E5C4D"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ABC5A5"
                    }}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      border: "1px solid #ABC5A5",
                      color: "#002D49",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0E5C4D"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ABC5A5"
                    }}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      border: "1px solid #ABC5A5",
                      color: "#002D49",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0E5C4D"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ABC5A5"
                    }}
                  />
                </div>

                <div>
                  <select
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      border: "1px solid #ABC5A5",
                      color: formData.serviceInterest ? "#002D49" : "#666",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0E5C4D"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ABC5A5"
                    }}
                  >
                    <option value="">Service Interest *</option>
                    <option value="strategy">AI Strategy & Implementation Consulting</option>
                    <option value="research">Technology Research & Advisory</option>
                    <option value="architecture">AI Solution Architecture</option>
                    <option value="development">Custom AI Development</option>
                    <option value="reselling">AI Platform Reselling</option>
                    <option value="saas">SaaS License Distribution</option>
                    <option value="training">Training & Capacity Building</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message *"
                    rows={5}
                    required
                    className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                    style={{
                      border: "1px solid #ABC5A5",
                      color: "#002D49",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#0E5C4D"
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "#ABC5A5"
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: "#D4AF37", color: "#002D49" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
