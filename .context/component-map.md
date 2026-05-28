# component-map.md — LIBRARY TO SECTION MAPPING
# Portfolio: Rizky Ananda Herly
# WAJIB dibaca sebelum install library apapun

---

## 📦 LIBRARY ASSIGNMENT — NO OVERLAP RULE

Setiap library punya zona tanggung jawabnya sendiri.
JANGAN gunakan library di luar zona yang sudah ditentukan.

```
Shadcn/UI    → Base components: Button, Badge, Card, Tabs, Accordion
Framer Motion → Scroll-triggered animations, page transitions, hover states
MagicUI      → Marquee, NumberTicker, BorderBeam, AnimatedGradient, BentoGrid
ReactBits    → Text effects: BlurText, SplitText, DecryptedText, SpotlightCard
21st.dev     → Dynamic Island TOC, Scroll Expansion Hero, Interactive 3D Robot
Lucide React → Semua icons (JANGAN pakai icon library lain)
```

---

## 🗺️ SECTION-BY-SECTION COMPONENT MAP

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
  (label sesuai content.md Section Labels)

Notes:
  - Tidak ada traditional sticky navbar
  - Z-index harus di atas semua konten: z-50 minimum
  - Smooth scroll ke section anchor saat item diklik
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

Sub-component 2: HeroHeadline
  Library   : ReactBits BlurText ATAU SplitText
  File      : src/components/hero/HeroHeadline.tsx
  Behavior  : Text reveal on page load (stagger per kata atau per karakter)
  Content   : "Designing systems that solve real operational problems."
  Font      : Clash Display Bold — WAJIB

Sub-component 3: SubTagline
  Library   : ReactBits DecryptedText ATAU TypewriterEffect
  File      : src/components/hero/HeroHeadline.tsx (inline)
  Content   : "[ SYSTEMS THINKER · BACKEND DEVELOPER · PRODUCT MANAGER ]"
  Font      : Satoshi Medium, muted color

Sub-component 4: HeroStats
  Library   : MagicUI NumberTicker
  Install   : npx shadcn@latest add "https://magicui.design/r/number-ticker"
  File      : src/components/hero/HeroStats.tsx
  Behavior  : Count up saat stats masuk viewport (IntersectionObserver)
  Content   : 4 stats dari content.md → SECTION 1 → Credibility Stats

Layout Notes:
  - Dark section: bg #09090A
  - Skill ticker di atas headline (seperti Nazwa)
  - Photo/foto: dummy placeholder dulu, ganti saat foto siap
  - Stats di bawah foto atau di samping (responsive)
```

---

### SECTION 2 — ABOUT ME

```
Sub-component 1: RobotInteractive
  Library   : Interactive 3D Robot (21st.dev erikx)
  Install   : npx shadcn@latest add https://21st.dev/r/erikx/interactive-3d-robot
  File      : src/components/about/RobotInteractive.tsx
  Behavior  : 3D robot yang interaktif (follow mouse atau idle animation)
  Position  : Di atas atau di samping philosophy text
  Fallback  : Jika Three.js terlalu berat di mobile, wrap dengan:
              <Suspense fallback={<PlaceholderAvatar />}>
  Notes     : Test FPS di mobile setelah install. Target: 30fps minimum.

Sub-component 2: PhilosophyText
  Library   : Framer Motion (fade in on scroll)
  File      : src/components/about/AboutSection.tsx (inline)
  Content   : Philosophy text dari content.md → SECTION 2

Sub-component 3: SkillsGrid
  Library   : MagicUI BentoGrid + BorderBeam (hover effect)
  Install   : npx shadcn@latest add "https://magicui.design/r/bento-grid"
              npx shadcn@latest add "https://magicui.design/r/border-beam"
  File      : src/components/about/SkillsGrid.tsx
  Behavior  : Grid 6 skill cards, hover = BorderBeam highlight + reveal description
  Content   : 6 skills dari content.md → SECTION 2B

Layout Notes:
  - Light section: bg #F0F4F8
  - Robot di kiri/tengah, text di kanan (desktop)
  - Skills grid full-width di bawah robot + text
```

---

### SECTION 3 — APPROACH

```
Component : ApproachSection (custom)
Library   : Framer Motion (staggered reveal) + Shadcn Accordion (opsional)
File      : src/components/approach/ApproachSection.tsx

Behavior:
  - 4 phase cards (UNDERSTAND, ARCHITECT, BUILD, COORDINATE)
  - Setiap phase: judul + sub-items berlabel (A, B, C, D, E)
  - Sub-items muncul dengan stagger animation (delay per item)
  - Mirip struktur Approach section Nazwa

Content   : content.md → SECTION 3 → 4 Phases
Layout    : Dark section (bg #09090A)
Notes:
  - Nomor phase: styled prominent (01, 02, 03, 04)
  - Sub-item label: huruf kapital, muted color
  - Tidak perlu click/expand — semua visible, animasi saat scroll
```

---

### SECTION 4 — FEATURED PROJECTS

```
Component : ProjectCard (custom large-format)
Library   : Framer Motion (scale on scroll entry) + Next.js Image
File      : src/components/projects/ProjectCard.tsx
           src/components/projects/FeaturedSection.tsx

Style Reference: nazwatk.site featured section
Behavior:
  - Setiap card: full-width, height 70–80vh
  - Background: image/screenshot di-crop cover (bukan video — kita pakai foto)
  - Image scale: 1.0 → 1.05 subtle saat card masuk viewport (parallax feel)
  - Overlay: gradient gelap di bawah untuk text visibility
  - Text overlay: nomor proyek + judul + role + tags + CTA button
  - Hover: slight scale up (1.02), CTA menjadi visible/brighter
  - Click: navigate ke /projects/[slug]

Content:
  - PROJECT 01: ObatIn (content.md → SECTION 4 → PROJECT 01)
  - PROJECT 02: Warehouse System (content.md → SECTION 4 → PROJECT 02)

Image Path:
  - ObatIn    : /public/images/obatin/ (screenshot app)
  - Warehouse : /public/images/warehouse/ (screenshot dashboard)

Layout: alternating dark/light background antar section
```

---

### PAGE: /projects/obatin — Detail Case Study

```
Component 1: ScrollExpansionHero
  Library   : Scroll Expansion Hero (21st.dev)
  Install   : npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero
  File      : src/app/projects/obatin/page.tsx
  Behavior  : Image ObatIn mulai kecil → expand full viewport saat scroll
  Content   : Screenshot utama ObatIn + headline "ObatIn"

Component 2: CaseStudyContent
  Library   : Framer Motion (fade in sections)
  Content   : Semua detail dari content.md → PROJECT 01 halaman detail

Tags Component:
  Library   : Shadcn Badge
  Content   : HACKATHON · 1ST PLACE · MOBILE · HEALTH TECH · 2026
```

---

### PAGE: /projects/warehouse — Detail Case Study

```
Component 1: ScrollExpansionHero
  (sama dengan obatin, beda image dan konten)
  Content   : Screenshot Warehouse dashboard + headline

Component 2: CaseStudyContent
  Content   : content.md → PROJECT 02 halaman detail
  Status Badge: "WORK IN PROGRESS" — Shadcn Badge dengan warna amber/yellow
```

---

### SECTION 5 — EXPERIENCE

```
Component : ExperienceTimeline (custom)
Library   : Framer Motion (stagger reveal per entry)
File      : src/components/experience/ExperienceTimeline.tsx

Behavior:
  - Vertical timeline dengan garis connector
  - Setiap entry: period + role + org + description
  - Entries muncul satu per satu saat scroll (stagger 0.15s delay)
  - Tahun/period: styled bold dengan accent color (#FFDD00 untuk dark bg)

Content   : content.md → SECTION 5 → Timeline Entries (5 entries)
Layout    : Dark section (bg #09090A)
```

---

### SECTION 6 — TESTIMONIALS

```
Component : TestimonialsMarquee
Library   : MagicUI Marquee (sama dengan SkillTicker tapi vertikal atau horizontal)
File      : src/components/testimonials/TestimonialsSection.tsx

Behavior:
  - Auto-scroll horizontal, loop infinite
  - Setiap item: quote + nama + role + avatar placeholder
  - Reverse direction untuk baris kedua (jika 2 baris)

Content   : content.md → SECTION 6 → 5 Dummy Testimonials
Layout    : Light section (bg #F0F4F8)
Notes     : Ganti dummy dengan real testimonials sebelum launch
```

---

### SECTION 7 — CREDENTIALS TICKER

```
Component : CredentialsTicker
Library   : MagicUI Marquee
File      : src/components/testimonials/TestimonialsSection.tsx (inline bawah)

Content   : content.md → SECTION 7 → Credentials items
Behavior  : Logo/text ticker horizontal, auto-scroll
```

---

### SECTION 8 — FOOTER

```
Component : Footer
Library   : MagicUI AnimatedGradient (background subtle)
           Lucide React (icons: Mail, Linkedin, Github, Instagram)
File      : src/components/footer/Footer.tsx

Behavior:
  - Animated gradient background (subtle, dark)
  - Large CTA headline (Clash Display)
  - Social links dengan hover scale (Framer Motion)
  - Location + copyright text

Content   : content.md → SECTION 8
Layout    : Dark section
```

---

## 🔧 INSTALL COMMANDS — BERURUTAN

Jalankan ini berurutan saat build tiap section:

```bash
# Fase 1 — Navbar
npx shadcn@latest add https://21st.dev/r/digitalzone0707/dynamic-island-toc

# Fase 2 — Hero
npx shadcn@latest add "https://magicui.design/r/marquee"
npx shadcn@latest add "https://magicui.design/r/number-ticker"

# Fase 3 — About
npx shadcn@latest add https://21st.dev/r/erikx/interactive-3d-robot
npx shadcn@latest add "https://magicui.design/r/bento-grid"
npx shadcn@latest add "https://magicui.design/r/border-beam"

# Fase 4 — Projects (detail pages)
npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero

# Fase 5 — Footer
npx shadcn@latest add "https://magicui.design/r/animated-gradient-text"
```

---

## ⚠️ JANGAN INSTALL INI

```
❌ @magicuidesign/cli cursor flag  → Ini untuk Cursor, bukan Antigravity
❌ Three.js manual               → Sudah include di robot component
❌ GSAP                          → Kita pakai Framer Motion, tidak perlu dua
❌ Anime.js                      → Sama, Framer Motion sudah cukup
❌ Swiper.js                     → Kita pakai MagicUI Marquee untuk carousel
❌ React Spring                  → Overlap dengan Framer Motion
```
