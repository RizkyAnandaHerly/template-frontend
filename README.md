This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Rizky Frontend SaaS Template

Modern frontend starter template built with Next.js, TypeScript, Tailwind CSS v4, Shadcn/UI, and Framer Motion.

This repository is designed as a reusable frontend foundation for building:

* SaaS websites
* Startup landing pages
* Personal portfolios
* Dashboard interfaces
* Modern web applications

---

# Tech Stack

## Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS v4
* Shadcn/UI
* Radix UI
* Framer Motion
* Lucide React

## Design System

* Custom typography system
* Reusable UI components
* Context-based UI workflow
* Motion-ready architecture

---

# Project Structure

```bash
.
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── styles/
│
├── public/
│   └── fonts/
│
├── .context/
├── design-system/
└── README.md
```

---

# Development Setup

## Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:3000
```

---

# Fonts

This project uses locally hosted fonts from Fontshare.

Recommended fonts:

* Clash Display
* Satoshi

Place `.woff2` files inside:

```bash
/public/fonts
```

---

# Using This Template For SaaS Projects

This repository is frontend-only by default.

You can connect it with any backend architecture depending on your project needs.

Examples:

* Laravel API
* Express.js API
* NestJS
* Supabase
* Firebase
* Appwrite

---

# Recommended Fullstack Structure

## Option A — Separate Frontend & Backend (Recommended)

```bash
project-root/
├── frontend/   # Next.js frontend
└── backend/    # Laravel / Express / NestJS
```

### Why this approach?

* Cleaner architecture
* Easier deployment
* Better scalability
* Independent frontend/backend development

---

# Example: Using Laravel as Backend

## Frontend

This template handles:

* UI
* Animations
* Landing pages
* Client-side interactions
* Dashboard interfaces

## Laravel Backend

Laravel handles:

* Authentication
* APIs
* Database
* Business logic
* Admin systems

Example flow:

```txt
Next.js Frontend → Laravel API → Database
```

---

# Important Notes

This repository is intended to be a scalable frontend foundation.

The goal is:

* clean architecture
* reusable components
* strong typography
* modern motion system
* maintainable UI structure

Avoid overengineering too early.

Focus first on:

1. layout structure
2. typography
3. spacing
4. content hierarchy
5. user experience

before adding excessive tooling or visual effects.

---

# Future Improvements

* Authentication pages
* Dashboard starter
* CMS integration
* Theme switcher
* API service layer
* Reusable section blocks
* Responsive animation system

---

# License

MIT



📁 .md Files — Mana yang Dibutuhkan
Lo dapat info tentang agents.md, gemini.md, srs.md, brd.md. Gue luruskan untuk konteks porto + Antigravity:
FilePerlu?AlasanCLAUDE.md✅ WAJIBMain rules file yang Antigravity baca setiap sessioncontent.md✅ WAJIBSemua teks websitecomponent-map.md✅ WAJIBLibrary mapping supaya AI tidak hallucinatedesign-tokens.md✅ WAJIBColors, fonts, spacingdesign-system/MASTER.md✅ Generate via uiproOutput dari UIUX Max Pro Skillagents.md❌ SKIPUntuk multi-agent orchestration, bukan solo portfoliogemini.md❌ SKIPLo pakai Claude/Antigravity, bukan Geminisrs.md❌ SKIPSoftware Requirements Spec — overkill untuk portobrd.md❌ SKIPBusiness Requirements Doc — ini untuk product, bukan porto
Final folder structure:
.context/
├── CLAUDE.md
├── content.md
├── component-map.md
└── design-tokens.md

design-system/
└── MASTER.md          ← generated by uipro CLI

🖥️ Terminal Setup — Urutan yang Benar
Ini step-by-step yang harus dijalankan sebelum buka Antigravity. Urutan ini penting — jangan acak.
PHASE 1 — Project Foundation
bash# Buat Next.js project dengan semua flag yang dibutuhkan
npx create-next-app@latest rizky-portfolio \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd rizky-portfolio
PHASE 2 — Shadcn Init
bash# Init Shadcn (HARUS sebelum install komponen apapun)
npx shadcn@latest init
# Pilih: Default style, CSS variables: yes
PHASE 3 — UIUX Max Pro Skill
bash# Install CLI global
npm install -g uipro-cli

# Init untuk Antigravity
uipro init --ai antigravity

# Generate design system dan persist ke file
python3 .antigravity/skills/ui-ux-pro-max/scripts/search.py \
  "technical portfolio backend developer project manager dark techy" \
  --design-system --persist -p "Rizky Ananda Herly Portfolio"
PHASE 4 — MCP Servers
bash# Setup MCP untuk akses komponen (ReactBits + MagicUI via shadcn registry)
npx shadcn@latest mcp init --client claude

# Note: untuk Antigravity, cek apakah ada flag --client antigravity
# Kalau tidak ada, pakai --client claude tetap bisa jalan
PHASE 5 — Install Komponen 21st.dev
bash# Dynamic Island TOC (navbar pengganti)
npx shadcn@latest add https://21st.dev/r/digitalzone0707/dynamic-island-toc

# Scroll Expansion Hero (untuk project detail pages)
npx shadcn@latest add https://21st.dev/r/arunachalam0606/scroll-expansion-hero

# Interactive 3D Robot (untuk About section)
npx shadcn@latest add https://21st.dev/r/erikx/interactive-3d-robot
PHASE 6 — Core Dependencies
bash# Framer Motion (animasi)
npm install framer-motion

# Lucide React (icons — biasanya sudah dari shadcn tapi pastikan)
npm install lucide-react

# Class variance authority + clsx (shadcn utils)
npm install class-variance-authority clsx tailwind-merge
PHASE 7 — Fonts (Fontshare, bukan Google Fonts)
bash# Clash Display dan Satoshi TIDAK ada di Google Fonts
# Download manual dari:
# → https://www.fontshare.com/fonts/clash-display
# → https://www.fontshare.com/fonts/satoshi

# Setelah download, letakkan di:
mkdir -p public/fonts
# Paste file .woff2 ke /public/fonts/
# ClashDisplay-Bold.woff2
# ClashDisplay-Semibold.woff2
# Satoshi-Regular.woff2
# Satoshi-Medium.woff2
# Satoshi-Bold.woff2
PHASE 8 — Context Folder
bash# Buat folder .context dan semua file .md
mkdir .context
touch .context/CLAUDE.md
touch .context/content.md
touch .context/component-map.md
touch .context/design-tokens.md

# Buat folder design-system (output uipro sudah generate MASTER.md di sini)
# Verifikasi:
ls design-system/
# Harus ada: MASTER.md
PHASE 9 — Verifikasi sebelum buka Antigravity
bash# Pastikan semua terinstall
npm run dev
# → harus jalan di localhost:3000 tanpa error

# Cek struktur
ls .context/          # 4 file .md
ls design-system/     # MASTER.md
ls public/fonts/      # file .woff2

⚠️ Satu Hal Yang Harus Lo Perhatikan
npx @magicuidesign/cli@latest install cursor yang lo tulis itu untuk Cursor, bukan Antigravity. Jangan jalankan itu. MagicUI components lo akses via shadcn registry saat dibutuhkan:
bash# Contoh install MagicUI component individual saat dibutuhkan:
npx shadcn@latest add "https://magicui.design/r/marquee"
npx shadcn@latest add "https://magicui.design/r/number-ticker"
npx shadcn@latest add "https://magicui.design/r/border-beam"
Jangan install semua sekaligus — install per komponen saat section-nya mau dibuat.