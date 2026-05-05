# safwai.ai — New Website Sprint Plan

**Deliverable:** Complete, production-ready single-page website for safwai.ai
**Build location:** This folder (`safwai-website/`) — full website built and reviewed here before going live
**Output file:** `index.html` — a single self-contained HTML file, same conventions as `CODING_PRACTICES.md`
**Source document:** `Safwai_Website_Design_Principles.md` (13 principles + recommended page architecture)

---

## Three-sprint structure

Each sprint delivers a self-contained, visually reviewable block of sections. No sprint begins until the previous sprint's gate is passed.

Design principles referenced by number (P1–P13) throughout — see `Safwai_Website_Design_Principles.md` for the full principle definitions.

---

## Sprint 1 — Foundation + Critical Conversion Sections

**Sections covered:** Site scaffold · Hero · Problem · Solution

**Goal:** Deliver the minimum viable website — the four sections that, per the design principles' priority order, are sufficient to generate a qualified conversation. Everything a cold visitor needs to go from "what is this?" to "I want to talk."

### Scaffold & shared chrome

- New file: `safwai-website/index.html`
- Brand system and semantic tokens from `CODING_PRACTICES.md` (same palette as pitch deck)
- Google Fonts: Montserrat (headlines) + Poppins (body)
- Sticky top nav: SAFWAI horizontal logo left, anchor links to all sections, primary CTA button right
- Smooth-scroll behaviour; scroll-spy active-state on nav links
- Footer: SAFWAI brand line, copyright, `hello@safwai.ai`
- Logos referenced via relative path (`../Marketing/SAFWA LOGOS/`) for this internal build file

### Section 1: Hero (P3, P7, P13)

- **Headline:** outcome/contrast format — e.g. *"AI in production — without the 18-month programme, the three failed pilots, and the consultancy bill."*
- **Sub-headline:** mechanism glimpse in one sentence
- **Primary CTA:** "Start with a free PoC" — gold button, prominent
- **Secondary CTA:** "Talk to us first" — ghost/outline button
- **Proof bar:** sector badge strip beneath CTA — Construction / Government / Professional Services / Maritime — with status indicators (Production / PoC)
- SAFWAI vertical logo as hero visual anchor

### Section 2: The Problem (P2, P10)

- Opening statement using the buyer's own language (MIT NANDA framing)
- **Stat block:** 95% of enterprise AI pilots delivered zero measurable P&L impact · $30–40B invested globally
- Source attribution: MIT NANDA — cited, not buried
- **GCC intensifier panel:** data sovereignty mandates · Arabic requirements · regulated industries · relationship-first culture — these are structural problem intensifiers, not regional footnotes
- Close: *"The gap is not the technology. The gap is everything around it."*

### Section 3: The Solution (P6, P7, P12)

- Three-part mechanism statement: **SAFWAI designs → Gysho builds → You own the system**
- Engagement model flow: PoC (1–2 weeks) → Build → Scale — visual three-step progression
- Comparison table: What others deliver vs. what Safwai delivers (four rows from P6)
- **Free PoC offer — second appearance (P7):** "Built on your actual data. 1–2 weeks. If it doesn't prove value, there's nothing to buy."
- Inline callout box with PoC terms stated plainly (no fee, no obligation, your data, your cloud)

**Sprint 1 decision gate:** Visual review on Jeroen's screen. Confirm hero copy, proof bar sectors, solution mechanism language, PoC framing. Gate to Sprint 2 on approval.

---

## Sprint 2 — Proof + Category + Differentiators + Trust

**Sections covered:** Where Safwai Sits · Why This Is Structurally Different · Systems in Production

**Goal:** Earn belief. After Sprint 1 a visitor understands the problem and the proposition. Sprint 2 answers: "Why Safwai specifically?" and "Has it actually worked?" These sections convert sceptical enterprise buyers.

### Section 4: Where Safwai Sits — Category Definition (P5)

- Headline: *"We are not a vendor. We are not advisory. Here's what we are."*
- **Five lanes table** (adapted for web — not verbatim, but the logic embedded):
  - Raw AI primitives (OpenAI, Llama) — we use these
  - Full-stack platforms (Copilot, Agentspace) — we wrap around these
  - Productised AI platforms (Celonis AI, Glean) — we out-compose these
  - Advisory & SI firms (McKinsey, Big 4, Accenture) — we outpace these
  - In-house build (internal CIO team) — we accelerate this
- Positioning close: fractional AI capability — the category definition in plain language
- "You've probably evaluated one of these five before. Here's where we sit differently."

### Section 5: Why This Is Structurally Different — Differentiators (P6, P11)

Five differentiator cards, each with mechanism explanation (not just the claim):

1. **Vendor-agnostic architecture** — the AI model is one swappable component. When OpenAI re-prices, your application doesn't rebuild.
2. **Data sovereignty by design** — your data stays in your chosen cloud region. Contractually yours. Never used for model training. Never mixed with other clients' data.
3. **Full system in production, not a recommendation deck** — you receive a working system connected to your existing infrastructure, not a roadmap.
4. **Built to outlast drift** — six-layer guardrail system, full audit trail, human-in-the-loop controls at configurable steps.
5. **Infrastructure-agnostic deployment** — Qatar region / KSA region / EU / your own cloud tenant / fully on-premise. Visitor identifies their scenario within seconds.

**Trust signals embedded here (P11):**
- "Your data is never used to train AI models" — stated as a primary claim
- "Complete client data isolation" — explicit
- "Every agent action is logged — full audit trail, not just session metadata"
- "Human-in-the-loop controls: the system pauses for approval at defined steps"
- Six-layer guardrail system — visual treatment (strip or icon grid)

### Section 6: Systems in Production — Proof (P8)

- Section headline: *"Not pilots. Not prototypes. Systems running real operations."*
- **Case study cards** — metric-first framing, outcome leads, background follows:
  1. **Basewise** (Construction/EPC) — 42% → 95% analysis consistency through automated prompt optimisation · Production
  2. **NCP — Saudi National Centre for Privatisation** (Government/Vision 2030) — credible path to compressing 252-day PPP business case review cycles · Production PoC
  3. **Specialist negotiation consultancy** (Professional Services) — 12-agent system running production negotiation workflows · Production
  4. **ProjectOS** (Platform proof) — the platform manages its own development. Eating our own cooking. · Production
- Each card: sector badge + status badge (Production / PoC) + outcome metric + one-line description
- "Production" status badges in `--status-production` (mint green) — explicit signal of genuine deployment

**Sprint 2 decision gate:** Review all proof card content and metric accuracy with Jeroen. Confirm the five-lanes category framing is sharp enough. Confirm trust signals read as first-class content, not a security FAQ. Gate to Sprint 3 on approval.

---

## Sprint 3 — Platform Depth + Sector Routing + Objections + Final CTA

**Sections covered:** The Platform · Use Cases by Sector · Objections Addressed · CTA Block

**Goal:** Convert evaluators and close the page. Sprint 3 serves the technical CIO/architect who needs platform depth, the sector-specific buyer who needs to see their context reflected, and every visitor who has an unresolved objection before they'll make contact.

### Section 7: The Platform — Progressive Disclosure (P6, P12)

- Three-layer platform overview as the primary view (not full technical depth upfront):
  - **Service layer** — the agents, tools, and workflows specific to the client's business problem
  - **Orchestration layer** — multi-agent coordination, memory, context management, guardrail system
  - **Front-end layer** — interfaces, dashboards, human-in-the-loop controls
- **Tabbed detail view** for evaluators who want depth on each layer — tabs expand on click, do not replace the overview
- Deployment options visual: cloud region selector treatment (QA / KSA / EU / Own tenant / On-premise) — each with a brief description
- Guardrail system — six-layer visual (strip or numbered icon row) as persistent element, not hidden in a tab
- Built for evaluators: this section is reachable via anchor link directly from a referral ("read the platform section")

### Section 8: Use Cases by Sector — Persona Routing (P10, P13)

- Section headline: *"Already designed. Ready to prove."*
- **Sector cards** — seven use cases:
  1. Construction / EPC / Infrastructure — Basewise production deployment
  2. Government / Public Sector / Vision 2030 — NCP production PoC
  3. Professional Services / Advisory — negotiation consultancy production
  4. Maritime / Technical Operations — maritime client production
  5. Islamic Banking / Finance — **Shariah compliance screener — first-mover position open**
  6. Enterprise System Implementation — **CutoverOS — in design**
  7. GCC Automotive — **automotive lifecycle AI — first-mover position open**
- Cards show: sector, use case title, status badge, one-line capability description
- **First-mover CTA on open positions** (P13): "The first-mover position for [sector] is open. Let's talk." — these three cards get a distinct visual treatment

### Section 9: Objections Addressed (P9)

- Section headline: *"Questions we hear before the first call — answered."*
- Eight objections from P9, presented as expandable accordion panels (not a generic FAQ):
  1. "Our data can never leave our environment" → data sovereignty answer
  2. "We tried AI before and it went nowhere" → acknowledge directly, explain the mechanism difference
  3. "What happens when the AI vendor changes or gets deprecated?" → vendor-agnostic architecture
  4. "Is this built for Arabic? For Islamic finance? For government?" → sector specificity answer
  5. "Can a small team actually deliver what Big 4 can't?" → fractional model + proof reference
  6. "What does 'bespoke' actually mean in practice?" → platform components answer
  7. "How long before we see anything real?" → PoC in 1–2 weeks, stated plainly
  8. "Who owns the system after you build it?" → "You own the system" — unambiguous
- Accordion collapsed by default; each answer is substantive body copy, not a one-liner

### Section 10: CTA Block — Final Conversion (P7, P13)

- **Risk-reversal headline:** *"See it work on your data before you commit to anything."*
- Three specifics stated plainly: No fee. Your data. 1–2 weeks.
- **Primary CTA:** "Start with a free PoC" — gold button, large
- **Secondary CTA:** "Talk to us first" — for visitors not ready for a PoC conversation
- Contact: `hello@safwai.ai` · Jeroen Hendriks · SAFWAI AI Solutions
- Free PoC terms restated in micro-copy beneath the button: "If the PoC doesn't prove value, there's nothing to buy."

**Sprint 3 decision gate:** Full read-through with Jeroen. Tighten objection answers, verify sector card accuracy, confirm platform depth is sufficient for a CIO evaluator without being overwhelming. Accessibility and responsive checks. Launch readiness.

---

## Section map at a glance

| # | Section | Sprint | Principles |
|---|---|---|---|
| — | Scaffold + nav | 1 | — |
| 1 | Hero | 1 | P3, P7, P13 |
| 2 | The Problem | 1 | P2, P10 |
| 3 | The Solution | 1 | P6, P7, P12 |
| 4 | Where Safwai Sits | 2 | P5 |
| 5 | Why This Is Structurally Different | 2 | P6, P11 |
| 6 | Systems in Production | 2 | P8 |
| 7 | The Platform | 3 | P6, P12 |
| 8 | Use Cases by Sector | 3 | P10, P13 |
| 9 | Objections Addressed | 3 | P9 |
| 10 | CTA Block | 3 | P7, P13 |

---

## Out of scope for v1

- Arabic language version — flag for a future sprint if GCC traction warrants it
- Blog / thought leadership — separate effort
- Authenticated platform demo or client login
- Multi-page site structure — v1 is a single scrollable page; navigation is anchor-based

---

## Risks & dependencies

| Risk | Mitigation |
|---|---|
| Proof card metrics must be accurate — Basewise 42→95%, NCP 252 days | Jeroen to confirm figures at Sprint 2 gate before publishing |
| First-mover positions (Shariah, Automotive, CutoverOS) — copy must not overcommit | Frame as "designed and ready to prove" not "built and running" |
| Logo paths use relative `../Marketing/` for internal build — must be inlined before going live | Convert to base64 data URIs at launch readiness step (Sprint 3 gate) |
| Lead-capture mechanism not yet decided | Decision required before Sprint 1 CTA wiring — mailto fallback acceptable for v1 |

---

## Working rhythm

Each sprint = one focused build session with Claude. Jeroen reviews visually at the end of each session. No sprint begins until the previous gate is passed.

**Estimated sessions:** 3 build sessions + iteration rounds per gate.
**Calendar time:** Depends on Jeroen's review cadence between sessions.

---

*Plan owner: Jeroen Hendriks · SAFWAI AI Solutions*
*Plan version: 1.0 · Living document — update after each sprint gate*
*Source: Safwai_Website_Design_Principles.md v1 · April 2026*

---

## Email & DNS setup — safwai.com

**Email provider:** Namecheap Private Email (Starter plan)
**Domain:** safwai.com
**DNS managed by:** Cloudflare (darl.ns.cloudflare.com / sneh.ns.cloudflare.com)
**Primary mailbox:** contact@safwai.com

### MX records (Cloudflare)
| Type | Name | Value | Priority |
|------|------|-------|----------|
| MX | @ | mx1.privateemail.com | 10 |
| MX | @ | mx2.privateemail.com | 10 |

### SPF record (Cloudflare)
| Type | Name | Value |
|------|------|-------|
| TXT | @ | v=spf1 include:spf.privateemail.com ~all |

### DKIM public key (Cloudflare)
Add as TXT record — name provided by Namecheap (typically `mail._domainkey`):

```
v=DKIM1;k=rsa;p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2SG2mVMnz1rZLlG0A2WegCllYHsFpl9rYClnwEA/tlb7NMbbVDi6CCp+mF/fmX7tCuRJP0MLLdVLc73r52VjJr5LjMNuye9b94pMH9oKqhot28UT57YHjcrbniDvuOp5XdIxV+bq6JcB7Xrz0BNj1lnELSYf0tgWj8MiJpl/HhO/MfmIGPxXeyy7IcbYNnjb5hYQR+qFRQ3H+MOjKfWyclLhd4vY+VeyUnrCRPRTPRymllfkHjUCC6qt6bVia4M/6md6SAbsAuqjPfUHXoCZXnQCcXKNIFf7zh7pZOmksPVB8nh69Gh1UHGfL5dS+o4ue/AgobQfez8yv2QsidSk/wIDAQAB
```

### Outlook IMAP/SMTP settings
| Setting | Value |
|---------|-------|
| IMAP server | mail.privateemail.com |
| IMAP port | 993 (SSL) |
| SMTP server | mail.privateemail.com |
| SMTP port | 465 (SSL) |
