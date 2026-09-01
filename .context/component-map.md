# component-map.md — LIBRARY TO SECTION MAPPING
# Portfolio: Rizky Ananda Herly
# Last Updated: June 2026 (v2 — Major Overhaul)
# WAJIB dibaca sebelum install library apapun

---

## 📦 LIBRARY ASSIGNMENT — NO OVERLAP RULE

Setiap library punya zona tanggung jawabnya sendiri.
JANGAN gunakan library di luar zona yang sudah ditentukan.

```
Shadcn/UI         → Base components: Button, Badge, Card, Tabs, Accordion
Framer Motion     → Component-level: hover states, entrance anim, exit anim, layout anim
GSAP ScrollTrigger→ Scroll-driven: parallax, pinning, section color transitions, timeline scrub
Lenis             → Smooth scroll: inertia, smooth wheel, lerp-based scrolling
MagicUI           → Marquee, NumberTicker, BorderBeam, AnimatedGradient, BentoGrid
ReactBits         → Text effects: BlurText, SplitText, DecryptedText, SpotlightCard
21st.dev          → Dynamic Island TOC, Scroll Expansion Hero, Interactive 3D Robot
Lucide React      → ALL icons — SATU-SATUNYA icon library, JANGAN pakai lain
react-type-animation → Typewriter effect di Footer quote
lottie-react      → Lottie animation di MascotWalk (floating bot)
```

### Animation Responsibility Split
```
GSAP handles:
  - Scroll-driven parallax (ScrollTrigger)
  - Section color transitions on scroll
  - Timeline-based scroll scrub animations
  - Pinning effects

Framer Motion handles:
  - Component mount/unmount animations
  - Hover / tap / focus interactions
  - AnimatePresence for enter/exit
  - Layout animations
  - useInView-triggered reveals

NEVER mix: Don't use GSAP for hover states. Don't use Framer for scroll scrub.
```

---

## 🗺️ SECTION-BY-SECTION COMPONENT MAP

---

### GLOBAL — Smooth Scroll Provider

```
Component : SmoothScrollProvider
Library   : Lenis
Install   : npm install lenis
File      : src/lib/smooth-scroll.ts
Config    : duration: 1.2, easing: easeOutQuart, smoothWheel: true
Behavior  : Wraps entire app in layout.tsx for global smooth scrolling
```

---

### GLOBAL — Blueprint Grid (Signature Element)

```
Component : BlueprintGrid
Library   : Custom (SVG + CSS)
File      : src/components/ui/BlueprintGrid.tsx
Behavior  :
  - Fixed position, full viewport, pointer-events: none
  - SVG ruler lines along left and right edges
  - Dimension number labels as design accent (px measurements)
  - Very subtle: opacity 0.03–0.06
  - Hidden on mobile (< 768px), visible on desktop
  - z-index: 1 (below all content)
  - This is the portfolio's SIGNATURE ELEMENT — technical blueprint aesthetic
Notes     :
  - Matches "Technical Builder" identity
  - Inspired by nazwatk.site drafting-board markers
  - Must be extremely subtle — felt, not seen
```

---

### NAVBAR — Dynamic Island TOC

```
Component : Dynamic Island TOC (21st.dev)
Install   : npx shadcn@latest add https://21st.dev/r/digitalzone0707/dynamic-island-toc
File      : src/components/navbar/DynamicIsland.tsx

Behavior:
  - Floating pill di top-center
  - Collapse jadi dot kecil saat tidak aktif
  - Expand saat diklik → tampilkan menu sections
  - Highlight section yang sedang aktif saat scroll
  - Progress indicator per section

Menu Items:
  Home · About · Work · Experience · Contact
  (NO numbered labels — plain text only)

Notes:
  - Tidak ada traditional sticky navbar
  - Z-index harus di atas semua konten: z-50 minimum
  - Smooth scroll ke section anchor saat item diklik (via Lenis)
```

---

### SECTION 1 — HERO

```
Sub-component 1: SkillTicker
  Library   : MagicUI Marquee
  Install   : npx shadcn@latest add "https://magicui.design/r/marquee"
  File      : src/components/hero/SkillTicker.tsx
  Behavior  : Horizontal ticker kiri → kanan, loop infinite, no pause on hover
  Content   : Skill list dari content.md → SECTION 1 → Skill Ticker
  Enhancement: Edge fade masks (gradient blur at left/right edges)

Sub-component 2: HeroHeadline
  Library   : Framer Motion (word-by-word blur reveal)
  File      : src/components/hero/HeroHeadline.tsx
  Content   : Stacked headline dari content.md → SECTION 1
  Font      : Clash Display Bold — WAJIB
  RULES:
    - MAX font-size: clamp(2.5rem, 8vw, 5.5rem) — NEVER exceed 6rem
    - letter-spacing: -0.03em (floor: -0.04em)
    - text-wrap: balance
    - SATU <h1> only — use <span> for layers
    - NO hardcoded #FFDD00 — use var(--color-accent-primary)

Sub-component 3: SubTagline
  Library   : Custom DecryptedText effect (Framer Motion)
  File      : src/components/hero/HeroHeadline.tsx (inline)
  Content   : "[ SYSTEMS THINKER · BACKEND DEVELOPER · PRODUCT MANAGER ]"
  Font      : Satoshi Medium, muted color

Sub-component 4: HeroStats
  Library   : MagicUI NumberTicker
  Install   : npx shadcn@latest add "https://magicui.design/r/number-ticker"
  File      : src/components/hero/HeroStats.tsx
  Behavior  : Count up saat stats masuk viewport
  Content   : 4 stats dari content.md → SECTION 1 → Credibility Stats
  Enhancement: Reduce initial delay to ~1.0s (was 2.0s)

Sub-component 5: Photo Placeholder
  Current   : Dashed border + "Photo coming soon" — looks broken
  Redesign  : Intentional abstract design: animated geometric border,
              subtle glow pulse, or geometric silhouette.
              Must look "designed" not "missing".

Layout Notes:
  - Dark section: bg #09090A
  - Skill ticker at top (2 rows)
  - Photo CENTER with skill labels flanking L/R (desktop)
  - Stats bar at bottom
  - NO section number label
```

---

### SECTION 2 — ABOUT ME

```
Sub-component 1: RobotInteractive
  Library   : Interactive 3D Robot (21st.dev erikx)
  Install   : npx shadcn@latest add https://21st.dev/r/erikx/interactive-3d-robot
  File      : src/components/about/RobotInteractive.tsx
  Behavior  : 3D robot interaktif (follow mouse atau idle animation)
  Fallback  : <Suspense fallback={<PlaceholderAvatar />}>
  Notes     : Test FPS di mobile setelah install. Target: 30fps minimum.

Sub-component 2: PhilosophyText
  Library   : Framer Motion (fade in on scroll)
  File      : src/components/about/AboutSection.tsx (inline)
  Content   : Philosophy text dari content.md → SECTION 2

Sub-component 3: SkillsGrid
  Library   : Framer Motion + Lucide React icons
  File      : src/components/about/SkillsGrid.tsx
  REDESIGN  : Complete overhaul — NO identical card grids (impeccable ban)
  New Design:
    - Asymmetric card layout: CORE skills = larger cards, SUPPORTING = smaller
    - Icons: Lucide React SVG (Code, Database, ClipboardList, Lightbulb, Search, Users)
    - NO external CDN (remove LordIcon completely)
    - Hover: item expands, description reveals, non-hovered dims to opacity 0.3
    - Yellow accent line animation on hover
    - Graph-paper background texture
  Content   : 6 skills dari content.md → SECTION 2B

Section Label: "ABOUT ME" — NO number prefix
Layout:
  - Light section: bg #F0F4F8
  - Robot di kiri/tengah, text di kanan (desktop)
  - Skills grid full-width below
```

---

### SECTION 3 — APPROACH

```
Component : ApproachSection (custom)
Library   : Framer Motion (staggered reveal) + Shadcn Accordion (opsional)
File      : src/components/approach/ApproachSection.tsx

Behavior:
  - 4 phase columns (UNDERSTAND, ARCHITECT, BUILD, COORDINATE)
  - Setiap phase: judul + sub-items berlabel (A, B, C, D, E)
  - Sub-items: hover → pill-style inline tooltip (not popup box)
  - Non-hovered items dim to 0.35 opacity
  - Graph-paper grid background
  - Phase connectors: visual flow indicator between phases

Content   : content.md → SECTION 3 → 4 Phases

Phase Numbering: KEEP (01–04) — this IS genuinely sequential
Section Label: "MY APPROACH" — NO "01.2 ·" prefix
Layout    : Dark section (bg #09090A)
```

---

### SECTION 4 — FEATURED PROJECTS

```
Component : ProjectCard (custom large-format)
Library   : Framer Motion (scroll parallax) + GSAP ScrollTrigger + Next.js Image
File      : src/components/projects/ProjectCard.tsx
           src/components/projects/FeaturedSection.tsx

Style Reference: nazwatk.site featured section
Behavior:
  - Setiap card: full-width, height 70–80vh
  - Background: project screenshot (generated via generate_image tool)
  - Image scale: parallax via GSAP ScrollTrigger
  - Overlay: gradient for text visibility
  - Text overlay: title + role + tags + CTA button
  - CTA hover: arrow rotation + translate
  - Click: navigate ke /projects/[slug]

Content:
  - PROJECT 01: ObatIn (content.md → SECTION 4 → PROJECT 01)
  - PROJECT 02: Warehouse System (content.md → SECTION 4 → PROJECT 02)

Image Path:
  - ObatIn    : /public/images/obatin/ (generated screenshot)
  - Warehouse : /public/images/warehouse/ (generated screenshot)

Section Label: "FEATURED PROJECTS" — NO number prefix
Layout: Light section (bg #F0F4F8)
```

---

### PAGE: /projects/obatin — Detail Case Study

```
Component 1: ScrollExpansionHero
  Library   : Scroll Expansion Hero (21st.dev)
  Install   : npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero
  File      : src/app/projects/obatin/page.tsx

Component 2: CaseStudyContent
  Library   : Framer Motion (fade in sections)
  Content   : content.md → PROJECT 01 halaman detail

Tags: Shadcn Badge → HACKATHON · 1ST PLACE · MOBILE · HEALTH TECH · 2026
```

---

### PAGE: /projects/warehouse — Detail Case Study

```
Component 1: ScrollExpansionHero (sama, beda image/konten)
Component 2: CaseStudyContent → content.md → PROJECT 02
Status Badge: "WORK IN PROGRESS" — amber/yellow
```

---

### SECTION 5 — EXPERIENCE

```
Component : ExperienceTimeline (custom)
Library   : Framer Motion (stagger reveal per entry)
File      : src/components/experience/ExperienceTimeline.tsx

Behavior:
  - Vertical timeline dengan animated connector
  - Connector: animated gradient flow down the line (GSAP or Framer scroll)
  - Entries stagger on scroll (0.15s delay)
  - Period dates: styled bold, accent color
  - Hover: subtle highlight per entry

Content   : content.md → SECTION 5 → Timeline Entries (5 entries)
Section Label: "EXPERIENCE" — NO number prefix
Layout    : Dark section (bg #09090A)
```

---

### SECTION 6 — TESTIMONIALS

```
Component : TestimonialsMarquee
Library   : MagicUI Marquee
File      : src/components/testimonials/TestimonialsSection.tsx

Behavior:
  - Auto-scroll horizontal, loop infinite
  - Row 1: leftward, Row 2: rightward (reversed)
  - Cards MUST vary — not identical card grid
  - Gradient ring around avatar initials
  - Adjust speed for readability

Content   : content.md → SECTION 6 → 5 Dummy Testimonials
Section Label: "TESTIMONIALS" — NO number prefix
Layout    : Light section (bg #F0F4F8)
```

---

### SECTION 7 — CREDENTIALS TICKER

```
Component : CredentialsTicker (inline below testimonials)
Library   : MagicUI Marquee
File      : src/components/testimonials/TestimonialsSection.tsx (inline bawah)
Content   : content.md → SECTION 7
```

---

### SECTION 8 — FOOTER

```
Component : Footer
Library   : Framer Motion + react-type-animation
           Lucide React (icons: Mail, Linkedin, Github, Instagram)
File      : src/components/footer/Footer.tsx

Behavior:
  - Large CTA headline (Clash Display), text-wrap: balance
  - CTA headline: per-word animation on scroll entry
  - Social links: hover underline reveal + icon transform
  - Signature quote: VISIBLE (minimum text-white/40, not /15)
  - Draggable SYSTEMS: spring physics (damping, stiffness)
  - Typewriter quote loop

Content   : content.md → SECTION 8
Section Label: "CONTACT" — NO number prefix
Layout    : Dark section
```

---

### GLOBAL — MascotWalk (Floating Bot)

```
Component : MascotWalk
Library   : lottie-react
File      : src/components/ui/MascotWalk.tsx
Asset     : public/animations/mascot.json

Behavior:
  - Fixed position, bottom-right corner
  - Lottie animation loop infinite
  - Hover tooltip: "rizky_bot.sh [active]"
  - z-index: 40 (below navbar)
```

---

## 🔧 INSTALL COMMANDS — BERURUTAN

Jalankan ini berurutan saat build tiap section:

```bash
# Foundation — Smooth Scroll
npm install lenis

# Navbar
npx shadcn@latest add https://21st.dev/r/digitalzone0707/dynamic-island-toc

# Hero
npx shadcn@latest add "https://magicui.design/r/marquee"
npx shadcn@latest add "https://magicui.design/r/number-ticker"

# About
npx shadcn@latest add https://21st.dev/r/erikx/interactive-3d-robot
npx shadcn@latest add "https://magicui.design/r/bento-grid"
npx shadcn@latest add "https://magicui.design/r/border-beam"

# Projects (detail pages)
npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero

# Footer
npx shadcn@latest add "https://magicui.design/r/animated-gradient-text"
```

---

## ⚠️ JANGAN INSTALL INI

```
❌ @magicuidesign/cli cursor flag  → Ini untuk Cursor, bukan Antigravity
❌ Three.js manual               → Sudah include di robot component
❌ Anime.js                      → Overlap dengan Framer Motion
❌ Swiper.js                     → Kita pakai MagicUI Marquee untuk carousel
❌ React Spring                  → Overlap dengan Framer Motion
❌ LordIcon                      → External CDN, gunakan Lucide React
❌ Any other icon library         → HANYA Lucide React
```
