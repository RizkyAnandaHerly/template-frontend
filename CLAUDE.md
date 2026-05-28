@AGENTS.md

# CLAUDE.md — AI RULES FOR ANTIGRAVITY
# Portfolio: Rizky Ananda Herly
# Last Updated: May 2026

---

## 🎯 PROJECT IDENTITY

**Owner:** Rizky Ananda Herly
**Positioning:** Product-minded Technical Builder
**Tagline:** "Designing systems that solve real operational problems."
**URL Target:** Personal Portfolio Website

---

## 🛠️ TECH STACK

```
Framework   : Next.js 14+ (App Router) — WAJIB App Router, BUKAN Pages Router
Language    : TypeScript — BUKAN JavaScript biasa
Styling     : Tailwind CSS v3 — TIDAK ada inline style
UI Base     : Shadcn/UI (Radix + Nova preset)
Animation   : Framer Motion
Icons       : Lucide React
```

---

## 📁 FOLDER STRUCTURE — WAJIB IKUTI INI

```
src/
├── app/
│   ├── page.tsx                    ← Landing page (semua sections)
│   ├── layout.tsx                  ← Root layout + font setup
│   ├── globals.css                 ← Global styles + font face declarations
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
│   │   ├── HeroHeadline.tsx        ← ReactBits text animation
│   │   ├── HeroStats.tsx           ← MagicUI NumberTicker
│   │   └── SkillTicker.tsx         ← MagicUI Marquee
│   ├── about/
│   │   ├── AboutSection.tsx
│   │   ├── RobotInteractive.tsx    ← 21st.dev Interactive 3D Robot
│   │   └── SkillsGrid.tsx          ← MagicUI BentoGrid + hover
│   ├── approach/
│   │   └── ApproachSection.tsx     ← 4 fase dengan Framer Motion
│   ├── projects/
│   │   ├── FeaturedSection.tsx
│   │   └── ProjectCard.tsx         ← Large-format card style Nazwa
│   ├── experience/
│   │   └── ExperienceTimeline.tsx  ← Timeline vertikal
│   ├── testimonials/
│   │   └── TestimonialsSection.tsx ← MagicUI Marquee
│   └── footer/
│       └── Footer.tsx
├── lib/
│   └── utils.ts                    ← cn() helper dari shadcn
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
4. SELALU baca `design-system/MASTER.md` untuk design system reference
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

### Rules Animasi
17. Semua animasi harus respect `prefers-reduced-motion`
18. Framer Motion untuk scroll-triggered animations
19. MagicUI components diimport dari `@/components/ui/`
20. ReactBits components diimport sesuai path install

### Rules Konten
21. JANGAN tulis teks yang tidak ada di content.md tanpa konfirmasi
22. JANGAN overclaim skill atau pengalaman di luar yang ada di content.md
23. Semua angka statistik harus sesuai persis dengan content.md

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

## 🔤 TYPOGRAPHY RULES

```
Hero Headline      → Clash Display Bold (700) atau Semibold (600)
Section Title      → Satoshi Bold (700)
Body Text          → Satoshi Regular (400)
Small Labels/Meta  → Satoshi Medium (500)

JANGAN:
- Jangan pakai Clash Display untuk body text
- Jangan pakai lebih dari 3 font weight dalam satu section
- Jangan pakai font selain Clash Display dan Satoshi
```

---

## 📦 LIBRARY YANG DIIZINKAN

```
shadcn/ui          ← Base components
framer-motion      ← Animasi
lucide-react       ← Icons
MagicUI            ← Marquee, NumberTicker, BorderBeam, AnimatedGradient, BentoGrid
ReactBits          ← BlurText, SplitText, SpotlightCard
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
design-system/MASTER.md    ← Generated design system (uipro)
```

---

## 🚦 SESSION START PROTOCOL

Setiap kali sesi baru dimulai, lakukan ini secara berurutan:
1. Baca `CLAUDE.md` (file ini)
2. Baca `.context/content.md`
3. Baca `.context/component-map.md`
4. Baca `.context/design-tokens.md`
5. Baca `design-system/MASTER.md`
6. BARU mulai coding setelah semua file dibaca

JANGAN langsung coding tanpa membaca context files.