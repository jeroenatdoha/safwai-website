import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhySafwaiSection } from "@/components/why-safwai-section"
import { IndustriesSection } from "@/components/industries-section"
import { MethodologySection } from "@/components/methodology-section"
import { MetricsSection } from "@/components/metrics-section"
import { CtaSection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhySafwaiSection />
      <IndustriesSection />
      <MethodologySection />
      <MetricsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
