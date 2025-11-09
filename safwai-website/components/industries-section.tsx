import { Building, Landmark, HardHat, Fuel, Heart, Truck, ShoppingCart, Factory, Home, Briefcase } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    { icon: Building, name: "Financial Services & Islamic Banking" },
    { icon: Landmark, name: "Government & Public Sector" },
    { icon: HardHat, name: "Construction & Engineering" },
    { icon: Fuel, name: "Energy & Utilities" },
    { icon: Heart, name: "Healthcare & Medical Services" },
    { icon: Truck, name: "Transportation & Logistics" },
    { icon: ShoppingCart, name: "Retail & E-commerce" },
    { icon: Factory, name: "Manufacturing & Industrial" },
    { icon: Home, name: "Real Estate & Development" },
    { icon: Briefcase, name: "Professional Services" },
  ]

  return (
    <section id="industries" className="py-16 md:py-24" style={{ backgroundColor: "#F7F6F3" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4" style={{ color: "#0E5C4D" }}>
            Industries We Serve
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#002D49" }}>
            Delivering AI excellence across diverse sectors throughout the GCC region
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ backgroundColor: "white", border: "1px solid #ABC5A5" }}
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300"
                  style={{ backgroundColor: "#ABC5A5" }}
                >
                  <Icon className="w-7 h-7" style={{ color: "#0E5C4D" }} />
                </div>
                <p className="text-sm font-medium leading-snug" style={{ color: "#002D49" }}>
                  {industry.name}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
