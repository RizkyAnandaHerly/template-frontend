@AGENTS.md

# CLAUDE.md — AI RULES FOR ANTIGRAVITY
# Portfolio: Rizky Ananda Herly
# Last Updated: June 2026 (v2 — Major Overhaul)

---

## 🎯 PROJECT IDENTITY

**Owner:** Rizky Ananda Herly
**Positioning:** Product-minded Technical Builder
**Tagline:** "Designing systems that solve real operational problems."
**URL Target:** Personal Portfolio Website
**Reference:** nazwatk.site (target: match or exceed quality)
**Signature Element:** Blueprint/engineering drafting grid aesthetic

---

## 🛠️ TECH STACK

```
Framework   : Next.js 16+ (App Router) — WAJIB App Router, BUKAN Pages Router
Language    : TypeScript — BUKAN JavaScript biasa
Styling     : Tailwind CSS v4 — TIDAK ada inline style
UI Base     : Shadcn/UI (Radix + Nova preset)
Animation   : Framer Motion — component-level animations
Scroll FX   : GSAP ScrollTrigger — scroll-driven effects, parallax, pinning
Smooth Scroll: Lenis — buttery smooth scroll with inertia
Icons       : Lucide React — SATU-SATUNYA icon library
```

---

## 📁 FOLDER STRUCTURE — WAJIB IKUTI INI

```
src/
├── app/
│   ├── page.tsx                    ← Landing page (semua sections)
│   ├── layout.tsx                  ← Root layout + font setup + SmoothScroll
│   ├── globals.css                 ← Global styles + font face + blueprint utils
│   └── projects/
│       ├── obatin/
│       │   └── page.tsx            ← ObatIn case study detail
│       └── warehouse/
│           └── page.tsx            ← Warehouse case study detail
├── components/
│   ├── navbar/
│   │   └── DynamicIsland.tsx       ← Dynamic Island TOC navigation
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   ├── HeroHeadline.tsx        ← Animated text reveal
│   │   ├── HeroStats.tsx           ← MagicUI NumberTicker
│   │   └── SkillTicker.tsx         ← MagicUI Marquee
│   ├── about/
│   │   ├── AboutSection.tsx
│   │   ├── RobotInteractive.tsx    ← 21st.dev Interactive 3D Robot
│   │   └── SkillsGrid.tsx          ← Asymmetric interactive grid (Lucide icons)
│   ├── approach/
│   │   └── ApproachSection.tsx     ← 4 phases with hover tooltips
│   ├── projects/
│   │   ├── FeaturedSection.tsx
│   │   └── ProjectCard.tsx         ← Large-format card, scroll parallax
│   ├── experience/
│   │   └── ExperienceTimeline.tsx  ← Vertical timeline
│   ├── testimonials/
│   │   └── TestimonialsSection.tsx ← MagicUI Marquee
│   └── footer/
│       └── Footer.tsx
├── lib/
│   ├── utils.ts                    ← cn() helper dari shadcn
│   └── smooth-scroll.ts           ← Lenis provider setup
├── components/ui/
│   ├── BlueprintGrid.tsx           ← Global signature: ruler lines, dimension markers
│   ├── CustomCursor.tsx            ← Dot + trailing ring cursor
│   └── MascotWalk.tsx              ← Lottie floating bot
└── public/
    ├── fonts/                      ← Clash Display + Satoshi .woff2
    └── images/
        ├── obatin/                 ← Screenshots ObatIn
        └── warehouse/              ← Screenshots Warehouse
```

---

## 🚨 RULES — WAJIB DIIKUTI SETIAP SESSION

### Rules Umum
1. SELALU baca `.context/content.md` sebelum menulis TEKS apapun
2. SELALU baca `.context/component-map.md` sebelum install library
3. SELALU baca `.context/design-tokens.md` sebelum menulis warna/font
4. SELALU baca `design-system/rizky-ananda-herly-portfolio/MASTER.md` untuk design system reference
5. JANGAN install library yang tidak ada di component-map.md
6. JANGAN gunakan Pages Router — hanya App Router
7. JANGAN gunakan JavaScript — hanya TypeScript
8. JANGAN gunakan inline style — hanya Tailwind classes
9. JANGAN hardcode warna — gunakan CSS variables dari design-tokens

### Rules Komponen
10. Setiap komponen = satu file, satu tanggung jawab
11. Nama file: PascalCase untuk components, kebab-case untuk pages
12. Import alias: gunakan `@/` bukan relative path panjang
13. Semua komponen harus responsive: mobile-first (375px → 768px → 1440px)
14. Semua clickable elements harus ada `cursor-pointer`
15. Semua hover states harus ada transition (150–300ms)
16. JANGAN ada magic numbers — semua ke design tokens atau Tailwind classes

### Rules Typography (from impeccable skill)
17. Hero/display heading: `clamp()` max ≤ 6rem (~96px). Tidak boleh lebih besar.
18. Display letter-spacing: ≥ -0.04em. Lebih tight = letters touch = cramped.
19. Gunakan `text-wrap: balance` pada semua h1–h3 untuk even line lengths.
20. Gunakan `text-wrap: pretty` pada long prose untuk reduce orphans.
21. Body line length cap: 65–75ch.
22. Hanya satu `<h1>` per halaman. Gunakan `<span>` untuk multi-line headings.

### Rules Animasi
23. Semua animasi harus respect `prefers-reduced-motion`
24. Framer Motion untuk component-level animations (hover, entrance, exit)
25. GSAP ScrollTrigger untuk scroll-driven effects (parallax, pinning, color transitions)
26. Lenis untuk smooth scroll inertia
27. Easing: ease-out-quart/quint/expo. JANGAN bounce, JANGAN elastic.
28. MagicUI components diimport dari `@/components/ui/`

### Rules Konten
29. JANGAN tulis teks yang tidak ada di content.md tanpa konfirmasi
30. JANGAN overclaim skill atau pengalaman di luar yang ada di content.md
31. Semua angka statistik harus sesuai persis dengan content.md

### Rules Anti-Pattern (from impeccable skill — ABSOLUTE BANS)
32. JANGAN identical card grids — same-sized cards with icon + heading + text repeated
33. JANGAN numbered section markers as default scaffolding (01, 02, 03 on every section)
34. JANGAN gradient text (background-clip: text with gradient)
35. JANGAN glassmorphism as default decoration
36. JANGAN hero-metric template (big number + small label + gradient accent)
37. JANGAN border-radius > 16px pada cards (full-pill ok untuk tags/buttons)
38. JANGAN external CDN scripts untuk icons (use Lucide React only)

---

## 🎨 COLOR REFERENCES (Quick Access)

```css
/* DARK SECTIONS */
--bg-dark: #09090A;
--accent-yellow: #FFDD00;
--text-primary: #FFFFFF;
--text-muted: #9E9E9E;
--border-dark: rgba(230, 230, 230, 0.1);

/* LIGHT SECTIONS */
--bg-light: #F0F4F8;
--accent-teal: #5E94B3;
--text-dark: #07090C;
--text-dark-muted: #2D4C61;
--border-light: rgba(7, 9, 12, 0.1);
```

---

## ⚠️ MASTER.md OVERRIDE

`design-system/rizky-ananda-herly-portfolio/MASTER.md` di-generate dengan kategori yang kurang tepat.
Rules berikut dari MASTER.md DIABAIKAN dan diganti dengan rules di bawah:

DIABAIKAN dari MASTER.md:
- Color palette (gunakan design-tokens.md sebagai gantinya)
- Typography/font (gunakan Clash Display + Satoshi dari design-tokens.md)
- Section order (gunakan component-map.md sebagai gantinya)
- Layout pattern "Masonry Grid" (kita pakai large-format cards)

TETAP PAKAI dari MASTER.md:
- Shadow depth system (--shadow-sm hingga --shadow-xl)
- Anti-patterns checklist (extended with impeccable bans)
- Pre-delivery checklist
- Component specs untuk transition timing (150-300ms)

---

## 🔤 TYPOGRAPHY RULES

```
Hero Headline      → Clash Display Bold (700) atau Semibold (600)
                     Max: clamp(2.5rem, 8vw, 5.5rem) — ceiling 6rem
                     Letter-spacing: -0.03em (floor: -0.04em)
                     text-wrap: balance
Section Title      → Satoshi Bold (700), text-wrap: balance
Body Text          → Satoshi Regular (400), text-wrap: pretty
Small Labels/Meta  → Satoshi Medium (500)

JANGAN:
- Jangan pakai Clash Display untuk body text
- Jangan pakai lebih dari 3 font weight dalam satu section
- Jangan pakai font selain Clash Display dan Satoshi
- Jangan exceed clamp max 6rem pada display headings
- Jangan letter-spacing lebih tight dari -0.04em
```

---

## 📦 LIBRARY YANG DIIZINKAN

```
shadcn/ui          ← Base components
framer-motion      ← Component-level animations
gsap               ← ScrollTrigger ONLY (scroll-driven effects, parallax, pinning)
lenis              ← Smooth scroll with inertia
lucide-react       ← ALL icons (SATU-SATUNYA icon library)
MagicUI            ← Marquee, NumberTicker, BorderBeam, AnimatedGradient, BentoGrid
ReactBits          ← BlurText, SplitText, SpotlightCard
react-type-animation ← Typewriter effect (Footer quote)
lottie-react       ← Lottie animation (MascotWalk)
21st.dev:
  - Dynamic Island TOC (navbar)
  - Scroll Expansion Hero (project detail pages)
  - Interactive 3D Robot (about section)
```

---

## 📄 CONTEXT FILES — SELALU BACA SEBELUM MULAI

```
.context/content.md        ← SEMUA teks website
.context/component-map.md  ← Library → section mapping
.context/design-tokens.md  ← Colors, fonts, spacing
design-system/rizky-ananda-herly-portfolio/MASTER.md ← Generated design system (overridden)
```

---

## 🚦 SESSION START PROTOCOL

Setiap kali sesi baru dimulai, lakukan ini secara berurutan:
1. Baca `CLAUDE.md` (file ini)
2. Baca `.context/content.md`
3. Baca `.context/component-map.md`
4. Baca `.context/design-tokens.md`
5. Baca `design-system/rizky-ananda-herly-portfolio/MASTER.md`
6. BARU mulai coding setelah semua file dibaca

JANGAN langsung coding tanpa membaca context files.