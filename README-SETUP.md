# README-SETUP.md — PANDUAN SETUP LENGKAP
# Portfolio: Rizky Ananda Herly
# Dari Terminal sampai Antigravity siap coding

---

## ⚠️ BACA INI DULU

File ZIP ini berisi context documents untuk Antigravity.
Semua `.md` files diletakkan ke dalam project yang sudah dibuat.
Ikuti urutan fase ini dengan TEPAT — jangan skip atau acak.

---

## STATUS AWAL (yang sudah selesai sebelum ZIP ini)

```
✅ Node.js v24+ terinstall
✅ Next.js project dibuat: `npx create-next-app@latest`
✅ Shadcn init: Radix preset, Nova theme, CSS variables
✅ UIUX Max Pro Skill terinstall via uipro CLI
✅ design-system/MASTER.md sudah di-generate
✅ Folder .context/ sudah dibuat
✅ Folder public/fonts/ sudah dibuat
```

---

## FASE A — LETAKKAN FILE ZIP INI

Setelah extract ZIP ini, copy semua file ke dalam project lo:

```
ZIP CONTENTS → PROJECT DESTINATION

CLAUDE.md              → [root]/CLAUDE.md
                          (EDIT — tambahkan isi ini ke CLAUDE.md
                          yang sudah ada dari Antigravity,
                          jangan replace seluruh file)

.context/content.md        → [root]/.context/content.md
.context/component-map.md  → [root]/.context/component-map.md
.context/design-tokens.md  → [root]/.context/design-tokens.md
```

### Cara merge CLAUDE.md ke file yang sudah ada:

1. Buka `CLAUDE.md` yang sudah ada di root project
2. Scroll ke bagian paling bawah
3. Tambahkan `---` sebagai separator
4. Paste seluruh isi `CLAUDE.md` dari ZIP ini di bawahnya
5. Save

---

## FASE B — DOWNLOAD & INSTALL FONTS

Clash Display dan Satoshi TIDAK ada di Google Fonts.
Harus download manual dari Fontshare.

```
1. Buka https://www.fontshare.com/fonts/clash-display
   → Klik Download
   → Extract ZIP
   → Copy file .woff2 yang dibutuhkan:
     - ClashDisplay-Semibold.woff2
     - ClashDisplay-Bold.woff2
   → Paste ke: public/fonts/

2. Buka https://www.fontshare.com/fonts/satoshi
   → Klik Download
   → Extract ZIP
   → Copy file .woff2 yang dibutuhkan:
     - Satoshi-Regular.woff2
     - Satoshi-Medium.woff2
     - Satoshi-Bold.woff2
   → Paste ke: public/fonts/
```

Verifikasi struktur fonts:
```
public/
└── fonts/
    ├── ClashDisplay-Semibold.woff2  ✅
    ├── ClashDisplay-Bold.woff2      ✅
    ├── Satoshi-Regular.woff2        ✅
    ├── Satoshi-Medium.woff2         ✅
    └── Satoshi-Bold.woff2           ✅
```

---

## FASE C — SETUP FONT DI GLOBALS.CSS

Buka `src/app/globals.css` dan tambahkan di paling atas
(sebelum @tailwind directives):

```css
/* ===== CLASH DISPLAY ===== */
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

---

## FASE D — UPDATE TAILWIND CONFIG

Buka `tailwind.config.ts` dan tambahkan font families:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        // DARK
        'bg-dark'        : '#09090A',
        'accent-yellow'  : '#FFDD00',
        // LIGHT
        'bg-light'       : '#F0F4F8',
        'accent-teal'    : '#5E94B3',
        'accent-deep'    : '#2D4C61',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## FASE E — SETUP CSS VARIABLES

Di `src/app/globals.css`, tambahkan CSS variables setelah @tailwind imports:

```css
:root {
  /* DARK MODE COLORS */
  --bg-dark: #09090A;
  --accent-yellow: #FFDD00;
  --text-primary: #FFFFFF;
  --text-muted: #9E9E9E;
  --text-subtle: #E6E6E6;
  --border-dark: rgba(230, 230, 230, 0.10);
  --surface-dark: rgba(255, 255, 255, 0.04);

  /* LIGHT MODE COLORS */
  --bg-light: #F0F4F8;
  --bg-light-alt: #E8EDF2;
  --accent-teal: #5E94B3;
  --accent-deep: #2D4C61;
  --text-dark: #07090C;
  --text-dark-muted: #2D4C61;
  --border-light: rgba(7, 9, 12, 0.10);
  --surface-light: rgba(7, 9, 12, 0.04);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  background-color: var(--bg-dark);
  color: var(--text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## FASE F — SETUP MCP SERVERS (sekali saja)

Jalankan di terminal dalam folder project:

```powershell
# MCP untuk ReactBits + MagicUI registry
npx shadcn@latest mcp init --client claude
```

Ini setup MCP server yang memungkinkan Antigravity
menginstall komponen ReactBits dan MagicUI langsung
saat diminta tanpa perlu manual search registry.

---

## FASE G — INSTALL KOMPONEN 21st.dev

Jalankan ini SEKARANG (sebelum mulai coding):

```powershell
# 1. Dynamic Island TOC (navbar pengganti)
npx shadcn@latest add https://21st.dev/r/digitalzone0707/dynamic-island-toc

# 2. Scroll Expansion Hero (project detail pages)
npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero

# 3. Interactive 3D Robot (about section)
npx shadcn@latest add https://21st.dev/r/erikx/interactive-3d-robot
```

Verifikasi install — cek bahwa files muncul di:
```
src/components/ui/dynamic-island-toc.tsx  ✅
src/components/ui/scroll-expansion-hero.tsx ✅
src/components/ui/interactive-3d-robot.tsx ✅
```

---

## FASE H — INSTALL FRAMER MOTION

```powershell
npm install framer-motion
```

---

## FASE I — VERIFIKASI AKHIR SEBELUM ANTIGRAVITY

Jalankan dev server dan cek tidak ada error:

```powershell
npm run dev
```

Checklist sebelum buka Antigravity:
```
[ ] localhost:3000 jalan tanpa error merah
[ ] Font di browser: heading = Clash Display, body = Satoshi
[ ] .context/ folder ada dengan 3 file .md
[ ] design-system/MASTER.md ada
[ ] public/fonts/ ada 5 file .woff2
[ ] Dynamic Island component ada di /components/ui/
[ ] Scroll Expansion Hero ada di /components/ui/
[ ] 3D Robot component ada di /components/ui/
[ ] CLAUDE.md di root sudah include rules dari ZIP ini
```

---

## FASE J — FIRST PROMPT DI ANTIGRAVITY

Setelah semua checklist di atas hijau, buka Antigravity.

**Prompt pertama yang HARUS lo kirim (copy-paste ini):**

```
Sebelum melakukan apapun, baca dan pahami semua file berikut secara berurutan:

1. CLAUDE.md (di root project)
2. .context/content.md
3. .context/component-map.md
4. .context/design-tokens.md
5. design-system/MASTER.md

Setelah semua file dibaca, konfirmasi dengan menyebutkan:
- Stack yang kita pakai
- 3 library utama untuk animasi
- Warna accent utama untuk dark sections
- Font untuk hero headline
- Jumlah proyek yang akan ditampilkan

Jangan tulis kode apapun sebelum konfirmasi ini selesai.
```

Tunggu konfirmasi dari Antigravity.
Kalau jawaban benar → lanjut coding.
Kalau salah/tidak lengkap → minta baca ulang file yang kurang.

---

## URUTAN BUILD (setelah konfirmasi)

Ikuti urutan ini. Jangan skip ke depan.

```
Step 1  : Root layout (layout.tsx) + globals.css setup
Step 2  : Navbar → Dynamic Island TOC
Step 3  : Hero section (SkillTicker + Headline + Stats)
Step 4  : About section (Robot + Philosophy + Skills Grid)
Step 5  : Approach section (4 phases)
Step 6  : Featured Projects section (2 large-format cards)
Step 7  : Experience timeline
Step 8  : Testimonials marquee
Step 9  : Footer
Step 10 : /projects/obatin page (Scroll Expansion + case study)
Step 11 : /projects/warehouse page
Step 12 : Mobile responsiveness audit
Step 13 : Performance check (robot FPS, Lighthouse score)
Step 14 : Replace dummy content dengan konten final
Step 15 : Deploy ke Vercel
```

---

## DEPLOY KE VERCEL

```powershell
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Atau push ke GitHub dan connect di vercel.com
```

Domain yang direkomendasikan: `rizkyanandaherly.com`
Atau: `rizkyherly.dev` / `rizkydev.id`

---

## ⚠️ COMMON ERRORS & FIXES

```
Error: Cannot find module 'framer-motion'
Fix  : npm install framer-motion

Error: Font not loading
Fix  : Cek path di @font-face — harus /fonts/ (dengan leading slash)
       File .woff2 harus ada di public/fonts/ (bukan src/fonts/)

Error: 3D Robot lag di mobile
Fix  : Tambahkan dynamic import dengan ssr: false
       const RobotInteractive = dynamic(
         () => import('@/components/about/RobotInteractive'),
         { ssr: false }
       )

Error: Dynamic Island tidak muncul
Fix  : Pastikan z-index component ini lebih tinggi dari semua section
       Tambahkan: className="z-50 fixed top-6 left-1/2 -translate-x-1/2"

Error: Tailwind custom colors tidak jalan
Fix  : Restart dev server setelah edit tailwind.config.ts
       npm run dev (stop dulu dengan Ctrl+C, lalu jalankan lagi)
```

---

## KONTEKS TAMBAHAN

**GitHub:** https://github.com/RizkyAnandaHerly
  → Pin repo: warehouse-monitoring + Portofolio
  → Tambah README ke warehouse-monitoring sebelum launch

**LinkedIn:** https://www.linkedin.com/in/rizkyanandaherly/
**Instagram:** https://www.instagram.com/rizkyanly/
**Email:** rizkyherly14@gmail.com

**Model yang dipakai:** Claude Sonnet (bukan Opus)
  → Sonnet cukup untuk semua component generation
  → Switch ke Opus HANYA jika stuck di problem pelik

**MCP yang aktif:**
  → Context7 (inject docs terbaru ke AI context)
  → UIUX Max Pro Skill (design system generator)
  → Awesome Skills
  → Shadcn MCP (ReactBits + MagicUI registry)
