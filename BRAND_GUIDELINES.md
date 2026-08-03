# SAFWAI Website — Brand Guidelines (Applied)

Source of truth: `<style>` block in `index.html` (the brand-tokens block, lines 122-153). This document records only what is in use on the live site.

## Colour palette

### Raw palette
| Token | Hex | Name |
|---|---|---|
| `--deep-teal` | `#0E5C4D` | Deep teal |
| `--warm-gold` | `#D4AF37` | Warm gold |
| `--deep-navy` | `#002D49` | Deep navy |
| `--off-white` | `#F7F6F3` | Off-white |
| `--light-mint` | `#7BC9A3` | Light mint |
| `--beige-sand` | `#E8DCC4` | Beige sand |
| `--sage-green` | `#ABC5A5` | Sage green |

### Semantic tokens — components reference these
| Token | Hex | Role |
|---|---|---|
| `--bg-primary` | `#002D49` | Page background (deep navy) |
| `--bg-card` | `#0E3D52` | Card / panel background |
| `--bg-accent` | `#0E5C4D` | Accent surface (deep teal) |
| `--text-primary` | `#F7F6F3` | Body text (off-white) |
| `--text-secondary` | `#ABC5A5` | Secondary text (sage green) |
| `--accent-primary` | `#D4AF37` | Headings, primary CTA, links (warm gold) |
| `--accent-secondary` | `#7BC9A3` | Hover, section labels (light mint) |
| `--border` | `#1A4A5C` | Default border |

### Status badges
| Token | Hex | Use |
|---|---|---|
| `--status-production` | `#7BC9A3` | Production badge (light mint) |
| `--status-poc` | `#D4AF37` | POC badge (warm gold) |
| `--status-future` | `#ABC5A5` | Future badge (sage green) |

Badges use a tinted background and matching border:
- Production: `rgba(123,201,163,0.12)` bg, `rgba(123,201,163,0.3)` border.
- POC: `rgba(212,175,55,0.12)` bg, `rgba(212,175,55,0.3)` border.
- Future: `rgba(171,197,165,0.1)` bg, `rgba(171,197,165,0.25)` border.

### Body paragraph tint
- `p { color: rgba(247,246,243,0.9); }` — off-white at 90% opacity.

## Typography

### Fonts (loaded from Google Fonts)
```
https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap
```

| Family | Weights | Use |
|---|---|---|
| **Poppins** | 300, 400, 500, 600 | Body text (`body { font-family: 'Poppins', 'Open Sans', sans-serif }`) |
| **Open Sans** | (browser default) | Fallback for Poppins |
| **Montserrat** | 400, 500, 600, 700 | All headings, buttons, badges, section labels, nav |

### Heading scale
| Tag | Size | Weight | Colour |
|---|---|---|---|
| `h1` | `clamp(2rem, 4vw, 3rem)` | 700 | `--accent-primary` (gold) |
| `h2` | `clamp(1.5rem, 3vw, 2.25rem)` | 700 | `--accent-primary` (gold) |
| `h3` | `clamp(1.1rem, 2vw, 1.4rem)` | 600 | `--accent-primary` (gold) |
| `h4` | `1rem` | 600 | `--text-primary` (off-white) |

All headings use Montserrat with `line-height: 1.2`.

### Body base
- `html { font-size: 17px; scroll-behavior: smooth; }`
- `body` line-height 1.6, antialiased.

### Section label (eyebrow)
- Montserrat, `0.75rem`, weight 600.
- `letter-spacing: 0.14em`, `text-transform: uppercase`.
- Colour: `--accent-secondary` (light mint).

## Components

### Buttons
- Base: `padding: 14px 28px`, `border-radius: 4px`, Montserrat 0.9rem weight 600.
- Hover: `opacity: 0.88; transform: translateY(-1px)`.
- **Primary**: gold bg (`--accent-primary`), navy text (`--deep-navy`).
- **Secondary**: transparent, off-white text, 2 px `--border`; on hover border + text switch to `--accent-secondary` (mint).

### Cards
- `--bg-card` background, 6 px radius.
- **Left rule**: `border-left: 4px solid var(--accent-primary)` (gold) — signature visual element.
- Padding `28px 28px 28px 24px` (asymmetric to absorb the rule).

### Badges
- Padding `3px 10px`, radius `3px`, Montserrat 0.7rem weight 600.
- `letter-spacing: 0.06em`, uppercase.
- Tinted bg + matching border per status (see Status badges above).

### Navigation
- Fixed top, height `--nav-height` (72 px).
- Nav links: hover/active colour `--bg-accent` (deep teal).

### Links
- Default: `--accent-primary` (gold), no underline.
- Hover: underlined.

## Layout primitives
| Token | Value | Use |
|---|---|---|
| `--section-padding` | `128px 0` | Vertical rhythm between sections |
| `--content-max` | `1100px` | Max content width inside `.container` |
| `--nav-height` | `72px` | Fixed nav height |

- `.container` is `max-width: var(--content-max); margin: 0 auto; padding: 0 32px`.
- `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }` (full reset).

## Convention
> "Do not hardcode hex values below this block" — declared at the top of the tokens block in `index.html`. All component styles reference the semantic tokens, not raw hex.
