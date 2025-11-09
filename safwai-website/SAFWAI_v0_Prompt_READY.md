# READY-TO-USE v0 PROMPT - SAFWAI Website
## Copy and paste this entire prompt into v0.dev

---

# BUILD REQUEST

Create a premium, single-page marketing website for SAFWAI, an elite AI consulting firm in Qatar.

## BRAND CONTEXT

**Company:** SAFWAI (صفوة - "the elite" in Arabic)  
**Industry:** AI Consulting & Technology Implementation  
**Market:** GCC Region (Qatar, UAE, Saudi Arabia, Kuwait, Bahrain, Oman)  
**Target:** Enterprise C-suite, IT leaders, digital transformation teams  
**Positioning:** Premium, sophisticated, culturally authentic yet internationally professional

## DESIGN SYSTEM

### Color Palette (STRICT - Use exact hex codes)

**Primary Colors:**
- Deep Teal: `#0E5C4D` - Headers, navigation, primary brand elements
- Warm Gold: `#D4AF37` - CTAs, accents, icons, highlights
- Deep Navy: `#002D49` - Body text, footer background

**Supporting Colors:**
- Off-White: `#F7F6F3` - Main background, text on dark sections
- Light Mint: `#7BC9A3` - Secondary accents, callout boxes (use at 20% opacity for backgrounds)
- Beige: `#E8DCC4` - Alternate section backgrounds
- Sage Green: `#ABC5A5` - Borders, subtle accents, decorative elements

### Typography

**Font Stack:**
- Headers: `font-family: 'Montserrat', sans-serif` (use font-bold, font-semibold)
- Body: `font-family: 'Inter', sans-serif` (use font-normal)

**Size Scale:**
- H1: `text-5xl md:text-6xl` (48-64px)
- H2: `text-4xl md:text-5xl` (36-48px)
- H3: `text-2xl md:text-3xl` (24-30px)
- Body: `text-base md:text-lg` (16-18px)
- Small: `text-sm` (14px)

### Spacing & Layout
- Container max-width: `max-w-7xl`
- Section padding: `py-16 md:py-24`
- Card padding: `p-6 md:p-8`
- Border radius: `rounded-lg` (8px)

### Icons
**Use Lucide React exclusively**
Import from: `lucide-react`

## PAGE STRUCTURE

### 1. NAVIGATION BAR
**Styling:**
- Background: `#0E5C4D`
- Text: `#F7F6F3`
- Position: `sticky top-0 z-50`
- Shadow: `shadow-md`

**Layout:**
```
[SAFWAI Logo] -------- [Services | Industries | Methodology | Why Us | Contact] [Get Started Button]
```

**Mobile:** Hamburger menu (right side), slide-in drawer

**Primary CTA Button (in nav):**
- Background: `#D4AF37`
- Text: `#002D49`
- Hover: Scale 1.02, darken background 10%
- Padding: `px-6 py-2.5`
- Rounded: `rounded-lg`

**Logo:** User will provide SVG - create placeholder with text "SAFWAI" in Montserrat Bold for now

---

### 2. HERO SECTION
**Background:**
- Base color: `#F7F6F3`
- Overlay: Doha cityscape image with subtle dark gradient overlay (top-to-bottom, from transparent to rgba(14, 92, 77, 0.1))
- Alternative if no image: Gradient from `#F7F6F3` to `#E8DCC4` with geometric pattern

**Content (centered):**
```jsx
<h1 className="text-white">Elite AI Solutions for Enterprise Excellence</h1>
<p className="text-white/90 text-xl max-w-3xl">
  Enterprise-ready AI consulting and implementation services delivering 
  measurable results for organizations across the GCC region.
</p>
<div className="flex gap-4">
  <button>Schedule Consultation</button> // Primary gold button
  <button>Learn More</button> // Secondary outline button (white border)
</div>
```

**Height:** `min-h-[600px] md:min-h-[700px]`

**Icons for Hero (optional subtle animation):**
- `TrendingUp`, `Brain`, `Target` from Lucide - floating subtle

---

### 3. ABOUT / POSITIONING SECTION
**Background:** `#F7F6F3`

**Layout:** Two columns on desktop, stack on mobile

**Content:**
```
[Left Column]
H2: "Who We Are"
2 paragraphs of introduction

[Right Column]
H3: "Our Approach"
1 paragraph + 5 key differentiators with gold checkmark icons
```

**Key Differentiators (with icons):**
- `CheckCircle` Enterprise-grade solutions focused on production readiness
- `Scale` Strategic independence combined with access to leading AI platforms
- `Globe` Deep GCC market understanding and cultural sensitivity
- `Award` Proven track record across financial services, government, construction
- `TrendingUp` End-to-end support from strategy through implementation

---

### 4. SERVICES SECTION
**Background:** `#F7F6F3` with section header on `#E8DCC4`

**Layout:** 
- 3-column grid on desktop (`md:grid-cols-3`)
- 2-column on tablet (`sm:grid-cols-2`)
- 1-column on mobile

**Service Cards (7 total):**
Each card structure:
```jsx
<div className="bg-white border-l-4 border-[#0E5C4D] p-6 rounded-lg hover:shadow-lg transition">
  <Icon className="w-12 h-12 text-[#D4AF37] mb-4" />
  <h3 className="text-[#0E5C4D] mb-3">Service Name</h3>
  <p className="text-[#002D49] mb-4">Description</p>
  <ul className="space-y-2 mb-4">
    <li className="flex items-start">
      <Check className="w-5 h-5 text-[#D4AF37] mr-2" />
      <span>Deliverable item</span>
    </li>
  </ul>
  <div className="bg-[#7BC9A3]/20 p-3 rounded">
    <p className="text-sm text-[#002D49]"><strong>Ideal For:</strong> Target audience</p>
  </div>
</div>
```

**Services with Icons:**
1. **AI Strategy & Implementation Consulting** - `Target` icon
   - Strategic consulting for enterprise AI adoption including readiness assessments, roadmap development, and implementation management.
   - Deliverables: AI Readiness Assessment, Strategic Roadmap, Business Case, Governance Framework, Executive Advisory
   - Ideal For: C-suite executives, strategy teams, transformation leaders

2. **Technology Research & Advisory** - `Search` icon
   - Market research, technology assessments, and advisory services on AI trends and digital transformation strategies.
   - Deliverables: Market Research, Vendor Evaluation, Competitive Analysis, Technology Roadmaps, Benchmarking Studies
   - Ideal For: Innovation teams, technology leaders, investment committees

3. **AI Solution Architecture** - `Layout` icon
   - Technical consulting focused on AI system architecture, design, and integration with existing enterprise infrastructure.
   - Deliverables: Solution Architecture, Data Strategy, MLOps Framework, Integration Architecture, Technical Feasibility Studies
   - Ideal For: IT leaders, solution architects, data science teams

4. **Custom AI Development** - `Code` icon
   - End-to-end development of custom AI applications including ML models, NLP systems, conversational AI, and intelligent automation.
   - Deliverables: ML Model Development, NLP Applications, Computer Vision, Chatbots, Predictive Analytics, Process Automation
   - Ideal For: Digital transformation teams, product owners, business units

5. **AI Platform Reselling** - `Package` icon
   - Authorized reselling of AI platforms, enterprise software, cloud services, and specialized hardware infrastructure.
   - Deliverables: Platform Selection, Procurement Management, Implementation Coordination, Vendor Support, Training
   - Ideal For: Organizations seeking proven platforms with expert implementation support

6. **SaaS License Distribution** - `Cloud` icon
   - Sale and distribution of AI SaaS licenses from leading providers with customer onboarding and subscription management.
   - Deliverables: License Sales, Product Demos, Customer Onboarding, Subscription Management, Technical Support Coordination
   - Ideal For: Enterprises seeking turnkey AI software solutions with local support

7. **Training & Capacity Building** - `GraduationCap` icon
   - Professional training programs and workshops on AI technologies for technical teams and business leaders.
   - Deliverables: Executive Education, Technical Training, Data Science Workshops, Development Bootcamps, Custom Curriculum
   - Ideal For: HR leaders, L&D teams, organizations building AI centers of excellence

---

### 5. WHY SAFWAI SECTION
**Background:** `#E8DCC4`

**Layout:** 3-column grid (2-col tablet, 1-col mobile)

**Content:** 6 benefit cards with icons

```jsx
<div className="text-center">
  <div className="w-16 h-16 mx-auto mb-4 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
    <Icon className="w-8 h-8 text-[#D4AF37]" />
  </div>
  <h3 className="text-[#0E5C4D] mb-2">Title</h3>
  <p className="text-[#002D49]">Description</p>
</div>
```

**Benefits:**
1. `Award` - **Proven Enterprise Experience** - Successful implementations across GCC
2. `Scale` - **Strategic Independence** - Objective guidance with technology access
3. `ArrowRight` - **Strategy to Execution** - Implementation support, not just recommendations
4. `MapPin` - **GCC Market Expertise** - Regional business culture and regulatory knowledge
5. `Sparkles` - **Bespoke Solutions** - Tailored to specific challenges and context
6. `TrendingUp` - **Measurable Impact** - Quick wins and demonstrable ROI

---

### 6. INDUSTRIES SECTION
**Background:** `#F7F6F3`

**Layout:** Icon grid or pills

**Industries (with icons):**
- `Building` Financial Services & Islamic Banking
- `Landmark` Government & Public Sector
- `HardHat` Construction & Engineering
- `Fuel` Energy & Utilities
- `Heart` Healthcare & Medical Services
- `Truck` Transportation & Logistics
- `ShoppingCart` Retail & E-commerce
- `Factory` Manufacturing & Industrial
- `Home` Real Estate & Development
- `Briefcase` Professional Services

---

### 7. METHODOLOGY SECTION
**Background:** `#002D49` (Navy)
**Text:** `#F7F6F3` (Off-white)
**Accent:** `#D4AF37` (Gold numbers)

**Layout:** Horizontal timeline on desktop, vertical on mobile

**6 Steps:**
```jsx
<div className="flex flex-col md:flex-row items-center justify-between">
  {steps.map((step, i) => (
    <div key={i} className="flex-1 text-center">
      <div className="text-7xl font-bold text-[#D4AF37] mb-2">{i + 1}</div>
      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
      <p className="text-sm text-white/80">{step.description}</p>
      {i < steps.length - 1 && (
        <ArrowRight className="text-[#7BC9A3] mx-auto mt-4" />
      )}
    </div>
  ))}
</div>
```

**Steps:**
1. ASSESS - Comprehensive evaluation of current state and AI readiness
2. DESIGN - Co-create tailored strategies and solution architectures
3. BUILD - Develop AI solutions with focus on quality and integration
4. DEPLOY - Implement with precision, ensuring adoption readiness
5. OPTIMIZE - Continuous monitoring and refinement for maximum value
6. ENABLE - Transfer knowledge and build internal capabilities

---

### 8. SUCCESS METRICS SECTION
**Background:** `#F7F6F3` with `#7BC9A3` accent elements

**Layout:** 3x2 grid (2x3 tablet, 1x6 mobile)

**Stat Cards:**
```jsx
<div className="bg-white border border-[#7BC9A3]/30 p-6 rounded-lg text-center">
  <div className="text-5xl font-bold text-[#D4AF37] mb-2">40-60%</div>
  <p className="text-[#002D49]">Reduction in manual processing time</p>
</div>
```

**6 Stats:**
- **40-60%** - Reduction in manual processing time
- **30-50%** - Improvement in decision-making speed
- **25-45%** - Cost savings in targeted operations
- **60-80%** - Improvement in data accuracy
- **3-6 months** - Time-to-value for initial implementations
- **200-400%** - ROI within 12-18 months

**Note:** Add small disclaimer: "Results vary by industry, use case, and organizational context"

**Optional:** Add count-up animation when section comes into viewport

---

### 9. CTA SECTION
**Background:** `#0E5C4D` (Teal)
**Text:** `#F7F6F3` (Off-white)

**Layout:** Centered content

```jsx
<div className="text-center py-20">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">
    Ready to Transform Your Organization with AI?
  </h2>
  <p className="text-xl mb-8 text-white/90">
    Whether you're taking your first steps in AI or scaling existing initiatives, 
    SAFWAI provides the strategic guidance and implementation support you need.
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    <button className="bg-[#D4AF37] text-[#002D49] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
      Schedule Consultation
    </button>
    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0E5C4D] transition">
      Request Proposal
    </button>
    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0E5C4D] transition">
      Download Framework
    </button>
  </div>
</div>
```

---

### 10. CONTACT FORM SECTION
**Background:** `#F7F6F3`

**Form Layout:**
```jsx
<form className="max-w-2xl mx-auto">
  <input type="text" placeholder="Full Name *" required />
  <input type="text" placeholder="Company Name *" required />
  <input type="email" placeholder="Email *" required />
  <input type="tel" placeholder="Phone Number" />
  
  <select name="service" required>
    <option value="">Service Interest *</option>
    <option>AI Strategy & Implementation Consulting</option>
    <option>Technology Research & Advisory</option>
    <option>AI Solution Architecture</option>
    <option>Custom AI Development</option>
    <option>AI Platform Reselling</option>
    <option>SaaS License Distribution</option>
    <option>Training & Capacity Building</option>
  </select>
  
  <textarea placeholder="Message *" rows="5" required></textarea>
  
  <button type="submit" className="bg-[#D4AF37] text-[#002D49] px-8 py-3 rounded-lg font-semibold w-full hover:scale-105 transition">
    Send Message
  </button>
</form>
```

**Input Styling:**
- Background: `white`
- Border: `1px solid #ABC5A5`
- Focus border: `#0E5C4D`
- Padding: `p-4`
- Rounded: `rounded-lg`

**Form Behavior:**
- On submit: `console.log(formData)` for now
- Show success message in green
- Client-side validation

---

### 11. FOOTER
**Background:** `#002D49` (Navy)
**Text:** `#F7F6F3` (Off-white)
**Accents:** `#D4AF37` (Gold)

**Layout:** 3 columns on desktop, stack on mobile

```
[Column 1]
SAFWAI Logo
"SAFWAI (صفوة) means 'the elite' in Arabic—delivering premium AI consulting 
and implementation services to enterprises across the GCC region."

[Column 2]
Contact Information
• Location: Doha, Qatar
• Email: [placeholder@safwai.com]
• Phone: [+974 XXXX XXXX]
• Hours: Sunday-Thursday, 8:00 AM - 6:00 PM GST

[Column 3]
Quick Links
• Services
• Industries
• Methodology
• Why SAFWAI
• Contact
```

**Bottom Bar:**
```
© 2025 SAFWAI. All rights reserved. | Privacy Policy | Terms of Service
```

**Icons in Footer:**
- `MapPin` for location
- `Mail` for email
- `Phone` for phone

---

## INTERACTIONS & ANIMATIONS

### Navigation
- Smooth scroll to sections (use `scroll-smooth` on html)
- Active link highlight in gold
- Mobile menu slide-in from right

### Buttons
- Hover: `scale-105` + subtle shadow increase
- Active: `scale-95`
- Transition: `transition-all duration-300`

### Cards (Services, Why Us)
- Hover: `shadow-lg` + `translate-y-[-4px]`
- Transition: `transition-all duration-300`

### Stats
- Optional: Count-up animation when scrolled into view
- Use Intersection Observer

### General
- Fade in sections on scroll (optional, subtle)
- All transitions: `ease-in-out`

---

## RESPONSIVE BREAKPOINTS

```jsx
// Tailwind breakpoints
sm: 640px  // Mobile landscape
md: 768px  // Tablet
lg: 1024px // Desktop
xl: 1280px // Large desktop
```

**Mobile Priorities:**
- Hamburger navigation
- Stack all grids to single column
- Reduce text sizes appropriately
- Maintain touch-friendly button sizes (min 44px height)
- Ensure proper spacing and readability

---

## TECHNICAL REQUIREMENTS

**Framework:** Next.js 14 (App Router) with TypeScript  
**Styling:** Tailwind CSS  
**Icons:** Lucide React  
**Fonts:** Google Fonts (Montserrat, Inter)  
**Accessibility:** WCAG AA compliant, proper ARIA labels, keyboard navigation

**Image Handling:**
- Use Next.js Image component
- Placeholder for hero cityscape (can be replaced later)
- Lazy loading for performance

**Performance:**
- Optimize images
- Minimize bundle size
- Fast initial page load

---

## IMPORTANT NOTES

1. **Logo Placeholder:** Create text-based "SAFWAI" logo in Montserrat Bold - user will replace with actual SVG
2. **Hero Image:** Use placeholder gradient or pattern - user will add Doha cityscape
3. **Contact Form:** Console.log submissions for now - user will add email integration later
4. **Copy Refinement:** Content can be edited/refined after initial build
5. **Color Accuracy:** Use EXACT hex codes provided - critical for brand consistency

---

## BUILD PRIORITY

**Phase 1 (Initial v0 submission):**
1. Navigation + Hero
2. About/Positioning
3. Services grid
4. Footer

**Phase 2 (Refinement):**
5. Why SAFWAI
6. Industries
7. Methodology
8. Metrics
9. CTA section
10. Contact form

---

## DESIGN PRINCIPLES

- **Clean & Professional:** Generous white space, clear hierarchy
- **Premium Feel:** Quality typography, subtle interactions, sophisticated colors
- **Culturally Balanced:** Islamic color heritage (teal, gold) + international professionalism
- **Enterprise-Focused:** Serious, credible, trustworthy - avoid playful/trendy elements
- **Results-Oriented:** Emphasize outcomes, metrics, practical value
- **Accessible:** Easy to navigate, read, and understand for executive audience

---

# START BUILD

Begin with mobile-first approach. Focus on clean, professional design with the exact color palette specified. Make CTAs prominent and navigation intuitive. Ensure all interactive elements have proper hover states.

User will upload logo SVGs and refine copy after initial build.

---
