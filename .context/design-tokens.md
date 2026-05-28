# design-tokens.md — DESIGN SYSTEM TOKENS
# Portfolio: Rizky Ananda Herly
# WAJIB dibaca sebelum menulis warna, font, atau spacing apapun

---

## 🎨 COLOR SYSTEM

Website ini punya DUA mode section yang bergantian:
- DARK sections: Hero, Approach, Experience, Footer
- LIGHT sections: About, Featured Projects, Testimonials

---

### DARK SECTIONS (Beauty Behind the Madness palette)

```css
--color-bg-dark          : #09090A;   /* Deep Black — background utama */
--color-accent-primary   : #FFDD00;   /* Bright Yellow — signature accent */
--color-text-primary     : #FFFFFF;   /* Pure White — heading & body */
--color-text-muted       : #9E9E9E;   /* Neutral Gray — subtext, labels */
--color-text-subtle      : #E6E6E6;   /* Lite Gray — placeholder, disabled */
--color-border-dark      : rgba(230, 230, 230, 0.10); /* Subtle border */
--color-surface-dark     : rgba(255, 255, 255, 0.04); /* Card background */
--color-overlay          : rgba(9, 9, 10, 0.75);      /* Image overlay */
```

### LIGHT SECTIONS (Dawn FM palette derived)

```css
--color-bg-light         : #F0F4F8;   /* Ice Blue Pale derived — background */
--color-bg-light-alt     : #E8EDF2;   /* Slightly darker for card bg */
--color-accent-teal      : #5E94B3;   /* Ice Blue Mid — accent di light mode */
--color-accent-deep      : #2D4C61;   /* Dawn Teal — secondary accent */
--color-text-dark        : #07090C;   /* Deep Black — text di light mode */
--color-text-dark-muted  : #2D4C61;   /* Dawn Teal — subtext di light mode */
--color-border-light     : rgba(7, 9, 12, 0.10);  /* Subtle border */
--color-surface-light    : rgba(7, 9, 12, 0.04);  /* Card background */
```

### SEMANTIC COLORS

```css
--color-success          : #4ADE80;   /* Green — untuk badge "completed" */
--color-warning          : #FFDD00;   /* Yellow — untuk badge "in progress" */
--color-info             : #5E94B3;   /* Teal — untuk tags/labels */
--color-hackathon        : #FFDD00;   /* Yellow — 1st Place badge */
```

---

## 🔤 TYPOGRAPHY SYSTEM

### Font Faces (dari Fontshare.com — bukan Google Fonts)

```css
/* ===== CLASH DISPLAY ===== */
/* Download: https://www.fontshare.com/fonts/clash-display */
/* Files: ClashDisplay-Semibold.woff2, ClashDisplay-Bold.woff2 */

@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Clash Display';
  src: url('/fonts/ClashDisplay-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* ===== SATOSHI ===== */
/* Download: https://www.fontshare.com/fonts/satoshi */
/* Files: Satoshi-Regular.woff2, Satoshi-Medium.woff2, Satoshi-Bold.woff2 */

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Satoshi';
  src: url('/fonts/Satoshi-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

### Tailwind Config (tambahkan ke tailwind.config.ts)

```typescript
fontFamily: {
  clash: ['Clash Display', 'sans-serif'],
  satoshi: ['Satoshi', 'sans-serif'],
},
```

### Typography Scale

```
HERO HEADLINE
  Font   : Clash Display
  Weight : Bold (700)
  Size   : clamp(2.5rem, 8vw, 6rem)  /* responsive */
  Line   : 1.05
  Letter : -0.02em
  Use    : Main hero tagline ONLY

SECTION TITLE
  Font   : Satoshi
  Weight : Bold (700)
  Size   : clamp(1.5rem, 4vw, 2.5rem)
  Line   : 1.2
  Letter : -0.01em
  Use    : "Featured Projects", "About Me", section headers

LARGE BODY / LEAD TEXT
  Font   : Satoshi
  Weight : Regular (400)
  Size   : clamp(1rem, 2vw, 1.25rem)
  Line   : 1.7
  Letter : 0em
  Use    : Philosophy text, project descriptions

BODY TEXT
  Font   : Satoshi
  Weight : Regular (400)
  Size   : 1rem (16px)
  Line   : 1.6
  Letter : 0em
  Use    : Experience descriptions, general body

LABEL / METADATA
  Font   : Satoshi
  Weight : Medium (500)
  Size   : 0.75rem – 0.875rem
  Line   : 1.4
  Letter : 0.05em–0.1em (uppercase tracking)
  Case   : UPPERCASE
  Use    : Section numbers (01 · ABOUT ME), tags, badges

PROJECT NUMBER
  Font   : Clash Display
  Weight : Bold (700)
  Size   : clamp(4rem, 12vw, 10rem)
  Line   : 1
  Color  : --color-accent-primary (#FFDD00)
  Use    : Large "01", "02" di featured project cards
```

---

## 📐 SPACING SYSTEM

```
Base unit   : 4px (0.25rem)

Micro       : 4px   (gap dalam komponen)
XSmall      : 8px   (padding kecil)
Small       : 16px  (gap antar elemen)
Medium      : 24px  (padding card)
Large       : 48px  (gap antar sub-section)
XLarge      : 80px  (section padding mobile)
2XLarge     : 120px (section padding desktop)
3XLarge     : 160px (hero padding top)

Section Padding (top + bottom):
  Mobile  (375px) : py-20  (80px)
  Tablet  (768px) : py-28  (112px)
  Desktop (1440px): py-32  (128px)

Container Max-Width: 1280px
Container Padding  : px-6 (mobile) → px-12 (tablet) → px-20 (desktop)
```

---

## 🎬 ANIMATION SYSTEM

### Timing

```
Micro interaction  : 150ms (hover states, button press)
Standard           : 200–300ms (most transitions)
Entrance animation : 400–600ms (elements entering viewport)
Hero load          : 800ms–1200ms (staggered hero reveal)
Count-up duration  : 1500ms (NumberTicker)
Marquee speed      : 40–60s per loop (Marquee auto-scroll)
```

### Easing

```
Default    : ease-out            (elements entering)
Hover out  : ease-in             (elements leaving hover)
Spring     : spring(1, 80, 10, 0) (interactive elements)
Smooth     : cubic-bezier(0.4, 0, 0.2, 1)  (general purpose)
```

### Framer Motion Variants (standard patterns)

```typescript
/* Fade up — untuk section entries */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

/* Stagger container — untuk list items */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

/* Scale in — untuk cards */
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

/* Prefers reduced motion — WAJIB wrap semua animasi */
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches
```

---

## 🖼️ IMAGE SYSTEM

```
Project Card Background:
  - Aspect ratio: 16/9 atau full card height
  - object-fit: cover
  - object-position: center top (supaya UI visible)
  - Overlay gradient: linear-gradient(to bottom, transparent 30%, rgba(9,9,10,0.85))

Avatar / Photo:
  - Aspect ratio: 1/1 (square) atau 3/4 (portrait)
  - Border radius: rounded-2xl
  - Border: 1px solid --color-border-dark

Placeholder (sebelum foto siap):
  - Background: --color-surface-dark
  - Border: 1px dashed --color-text-muted
  - Text: "Photo coming soon" (Satoshi Medium, muted)
```

---

## 🌗 SECTION ALTERNATION PATTERN

```
Section 1 — Hero          : DARK  (#09090A)
Section 2 — About Me      : LIGHT (#F0F4F8)
Section 3 — Approach      : DARK  (#09090A)
Section 4 — Featured Work : LIGHT (#F0F4F8)
Section 5 — Experience    : DARK  (#09090A)
Section 6 — Testimonials  : LIGHT (#F0F4F8)
Section 7 — Footer        : DARK  (#09090A)
```

---

## 📱 BREAKPOINTS

```typescript
/* Tailwind default + custom */
screens: {
  'xs'  : '375px',   /* Mobile minimum */
  'sm'  : '640px',   /* Large mobile */
  'md'  : '768px',   /* Tablet */
  'lg'  : '1024px',  /* Small desktop */
  'xl'  : '1280px',  /* Standard desktop */
  '2xl' : '1440px',  /* Large desktop */
}
```

---

## ✅ PRE-DELIVERY CHECKLIST

```
Layout:
[ ] Semua sections responsive: 375px, 768px, 1024px, 1440px
[ ] Tidak ada horizontal scroll yang tidak disengaja
[ ] Container tidak overflow di mobile
[ ] Gambar tidak stretched atau terpotong aneh

Typography:
[ ] Clash Display HANYA di hero headline
[ ] Semua body text pakai Satoshi
[ ] Font size minimum 16px untuk body text
[ ] Line height minimum 1.6 untuk body text

Color & Contrast:
[ ] Dark sections: text contrast minimum 4.5:1
[ ] Light sections: text contrast minimum 4.5:1
[ ] Accent yellow (#FFDD00) tidak dipakai untuk body text (kontras rendah)
[ ] Tombol dan links punya warna yang cukup kontras

Interactions:
[ ] Semua clickable elements ada cursor-pointer
[ ] Hover states ada smooth transition (150–300ms)
[ ] Focus states visible untuk keyboard navigation
[ ] prefers-reduced-motion direspect (semua animasi punya fallback)

Performance:
[ ] Images dioptimasi (pakai Next.js Image component)
[ ] Fonts pakai font-display: swap
[ ] Tidak ada layout shift saat font load (CLS < 0.1)
[ ] 3D Robot test FPS di mobile (minimum 30fps)

Konten:
[ ] Semua teks sesuai content.md (tidak ada improvisi)
[ ] Tidak ada placeholder text ("Lorem Ipsum") di production
[ ] Semua links aktif dan menuju halaman yang benar
[ ] Social links benar (GitHub, LinkedIn, Instagram, Email)
[ ] Foto dummy diganti dengan foto asli sebelum launch

Aksesibilitas:
[ ] Semua gambar punya alt text yang deskriptif
[ ] Heading hierarchy benar (h1 → h2 → h3)
[ ] Color bukan satu-satunya indikator informasi
[ ] Keyboard navigable (Tab, Enter, Escape)
```
