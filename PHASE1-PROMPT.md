# PHASE 1 EXECUTION PROMPT
# Copy-paste ini ke Gemini di Antigravity — JANGAN modifikasi

---

## MANDATORY: READ FIRST

Before any code, read ALL of these files completely:
1. `CLAUDE.md`
2. `.context/content.md`
3. `.context/component-map.md`
4. `.context/design-tokens.md`

Confirm you read them by stating:
- Hero headline text (exact)
- Dark section background hex
- Primary accent hex
- Font for hero

Do NOT write any code until confirmed.

---

## CONTEXT: CURRENT PROBLEMS

Looking at the live site, there are 4 problems to fix in this session:

1. **HERO: Too much empty space above ticker** — viewport top ~40% is black empty
2. **HERO: Typography needs to be stacked T-shape**, not a single sentence
3. **GLOBAL: No custom cursor** — browser default cursor, Nazwa has a circular cursor
4. **ABOUT: Robot should be replaced** with an animated terminal

Fix these 4 problems in order. One at a time. Show me the result after each fix.

---

## FIX 1: HERO TOP SPACING

**File:** `src/components/hero/HeroSection.tsx`

**Problem:** The hero section has excessive padding-top causing a large empty black space
above the skill tickers. The tickers should start close to the top of the viewport.

**Fix:**
- Find the outermost section/div container in HeroSection.tsx
- Reduce padding-top to: `pt-4` or `pt-6` on mobile, `pt-8` on desktop
- The tickers (SkillTicker marquee rows) should be visible immediately when page loads
- No content should be hidden above the fold unnecessarily

**Verify:** After fix, the skill ticker should be visible near the top of the page
without excessive empty space above it.

---

## FIX 2: HERO TYPOGRAPHY — T-SHAPED STACKED LAYOUT

**File:** `src/components/hero/HeroHeadline.tsx` (or HeroSection.tsx where headline renders)

**Current (WRONG):**
One long sentence: "Designing systems that solve real operational problems."

**New Structure (3 layers):**

```
Layer 1 (top):
  Text    : "IM YOUR"
  Font    : Satoshi Regular, font-satoshi
  Size    : text-base md:text-lg
  Color   : text-white/50 (muted white)
  Weight  : font-normal
  Case    : uppercase
  Letter  : tracking-widest

Layer 2 (middle):
  Text    : "T-SHAPED"
  Font    : Clash Display Bold, font-clash
  Size    : text-[clamp(3.5rem,9vw,8rem)]
  Color   : text-white
  Weight  : font-bold
  Case    : uppercase
  Letter  : tracking-tight

Layer 3 (bottom):
  Text    : "TECHNICAL BUILDER"
  Font    : Clash Display Bold, font-clash
  Size    : text-[clamp(3.5rem,9vw,8rem)]
  Color   : text-[#FFDD00]  ← YELLOW ACCENT
  Weight  : font-bold
  Case    : uppercase
  Letter  : tracking-tight
```

**Below the stacked text (subtitle):**
```
Text  : "Designing systems that solve real operational problems."
Font  : Satoshi Regular
Size  : text-base md:text-lg
Color : text-white/60
Margin: mt-6
```

**Animation (Framer Motion — each layer enters separately):**
```typescript
// Layer 1: fade in first
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}

// Layer 2: slightly after
transition={{ duration: 0.5, delay: 0.25 }}

// Layer 3 (YELLOW): last, most dramatic
transition={{ duration: 0.6, delay: 0.4 }}

// Subtitle: after all layers
transition={{ duration: 0.5, delay: 0.6 }}
```

**IMPORTANT:** The sub-tagline `[ SYSTEMS THINKER · BACKEND DEVELOPER · PRODUCT MANAGER ]`
stays where it is — it appears BELOW the subtitle. Do not remove it.

---

## FIX 3: CUSTOM CURSOR (New Component)

**Create new file:** `src/components/ui/CustomCursor.tsx`

**Behavior:**
- Hide browser default cursor globally
- Show a custom circular cursor that follows the mouse
- Circle is OUTLINE only (not filled) by default
- On hover over links/buttons: circle gets slightly larger + filled opacity
- **Color adapts to section background:**
  - When over DARK sections (bg #09090A): cursor is WHITE
  - When over LIGHT sections (bg #F0F4F8): cursor is DARK (#09090A)

**Implementation:**

```typescript
'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none'

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Detect which section the cursor is over
      const element = document.elementFromPoint(e.clientX, e.clientY)
      const section = element?.closest('[data-theme]')
      const theme = section?.getAttribute('data-theme')
      setIsDark(theme !== 'light')
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updatePosition)
    document.addEventListener('mouseover', handleMouseEnter)
    document.addEventListener('mouseout', handleMouseLeave)

    return () => {
      document.body.style.cursor = 'auto'
      window.removeEventListener('mousemove', updatePosition)
      document.removeEventListener('mouseover', handleMouseEnter)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  const cursorColor = isDark ? '#FFFFFF' : '#09090A'

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      animate={{
        x: position.x - (isHovering ? 20 : 10),
        y: position.y - (isHovering ? 20 : 10),
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
      }}
      transition={{ type: 'spring', mass: 0.2, stiffness: 800, damping: 30 }}
    >
      <motion.div
        className="w-full h-full rounded-full border-2"
        animate={{
          borderColor: cursorColor,
          backgroundColor: isHovering
            ? `${cursorColor}20`
            : 'transparent',
          scale: isHovering ? 1 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  )
}
```

**Add `data-theme` attributes to all sections in `src/app/page.tsx`:**
```typescript
// Dark sections:
<section data-theme="dark" id="hero">
<section data-theme="dark" id="approach">
<section data-theme="dark" id="experience">
<section data-theme="dark" id="footer">

// Light sections:
<section data-theme="light" id="about">
<section data-theme="light" id="projects">
<section data-theme="light" id="testimonials">
```

**Import CustomCursor in `src/app/layout.tsx`:**
```typescript
import CustomCursor from '@/components/ui/CustomCursor'

// Inside the body, before children:
<CustomCursor />
{children}
```

**Add to global CSS (`src/app/globals.css`):**
```css
* {
  cursor: none !important;
}
```

**IMPORTANT NOTE:** On mobile (touch devices), cursor should be hidden:
```typescript
// Add this check inside CustomCursor:
const [isMobile, setIsMobile] = useState(false)
useEffect(() => {
  setIsMobile(window.matchMedia('(hover: none)').matches)
}, [])
if (isMobile) return null
```

---

## FIX 4: REPLACE ROBOT WITH ANIMATED TERMINAL

**Step 4a — Install library:**
```bash
npm install react-animated-term
```

**Step 4b — Create new file:** `src/components/about/TerminalCard.tsx`

```typescript
'use client'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

const terminalLines = [
  {
    cmd: 'rizky@portfolio:~$ whoami',
    output: [
      '> rizky ananda herly',
      '> information systems · telkom university',
      '> backend developer + product manager',
    ],
    delay: 0,
  },
  {
    cmd: 'rizky@portfolio:~$ cat skills.txt',
    output: [
      '> backend    : laravel, c#, java, sql, mysql',
      '> database   : schema design, query optimization',
      '> management : pm, product strategy, stakeholder',
      '> teaching   : database lab assistant (4 classes)',
    ],
    delay: 3000,
  },
  {
    cmd: 'rizky@portfolio:~$ git log --oneline',
    output: [
      '> a1b2c3  feat: obatin — 1st place motionhack 5.0',
      '> d4e5f6  build: warehouse management system',
      '> g7h8i9  role: database lab teaching assistant',
      '> j0k1l2  init: 100+ participants managed',
    ],
    delay: 6500,
  },
  {
    cmd: 'rizky@portfolio:~$ _',
    output: [],
    delay: 10000,
  },
]

export default function TerminalCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: '-100px' })
  const [visibleLines, setVisibleLines] = useState(0)
  const [currentBlock, setCurrentBlock] = useState(0)

  // Reset and restart animation when in view
  useEffect(() => {
    if (!isInView) return

    setVisibleLines(0)
    setCurrentBlock(0)

    const timer = setTimeout(() => {
      let block = 0
      const interval = setInterval(() => {
        block++
        setCurrentBlock(block)
        if (block >= terminalLines.length) clearInterval(interval)
      }, 3200)
      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg font-mono"
    >
      {/* Terminal Window */}
      <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0D0D0D] shadow-2xl">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-2 text-xs text-white/30">terminal — rizky@portfolio</span>
        </div>

        {/* Terminal Content */}
        <div className="p-5 min-h-[280px] space-y-4 text-sm">
          {terminalLines.slice(0, currentBlock + 1).map((block, blockIdx) => (
            <motion.div
              key={blockIdx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Command line */}
              <div className="flex items-center gap-1">
                <span className="text-[#FFDD00]">$</span>
                <span className="text-white/80">
                  {block.cmd.replace('rizky@portfolio:~$ ', '')}
                </span>
                {blockIdx === currentBlock && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-[#FFDD00] ml-0.5"
                  />
                )}
              </div>

              {/* Output lines */}
              {block.output.map((line, lineIdx) => (
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: lineIdx * 0.12, duration: 0.25 }}
                  className="text-white/50 ml-3 mt-1"
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
```

**Step 4c — Update `src/components/about/AboutSection.tsx`:**

Find where `<RobotInteractive />` is imported and used.
Replace it with `<TerminalCard />`.

```typescript
// REMOVE this import:
import RobotInteractive from './RobotInteractive'

// ADD this import:
import TerminalCard from './TerminalCard'

// REPLACE <RobotInteractive /> with:
<TerminalCard />
```

Do NOT delete `RobotInteractive.tsx` — just stop using it.

---

## VERIFICATION CHECKLIST

After completing all 4 fixes, verify:

```
Fix 1 — Hero Spacing:
[ ] No excessive empty space above skill tickers
[ ] Tickers visible near top of viewport on load
[ ] Content not hidden above fold

Fix 2 — Typography:
[ ] "IM YOUR" visible in muted small text
[ ] "T-SHAPED" in large Clash Display white
[ ] "TECHNICAL BUILDER" in large Clash Display YELLOW (#FFDD00)
[ ] Original subtitle still visible below
[ ] Sub-tagline [...] still visible
[ ] Stats still visible below

Fix 3 — Custom Cursor:
[ ] Browser default cursor GONE on desktop
[ ] White circle cursor visible on dark sections
[ ] Dark circle cursor visible on light sections
[ ] Cursor gets slightly larger on hover over links
[ ] Cursor still absent on mobile (touch devices)

Fix 4 — Terminal:
[ ] Robot no longer visible in About section
[ ] Terminal window visible with header dots (red, yellow, green)
[ ] Terminal shows command lines with yellow $ prompt
[ ] Cursor blink animation working on last line
[ ] Animation triggers when scrolling into view

Build check:
[ ] npm run build — zero TypeScript errors
[ ] No console errors on localhost:3000
[ ] All 4 sections still visible and correct
```

---

## AFTER ALL 4 FIXES COMPLETE

Do NOT proceed to Phase 2 yet.

Push to GitHub and share the Vercel URL for review:
```bash
git add .
git commit -m "phase 1: cursor, hero typography, terminal, spacing fix"
git push
```

Wait for review before Phase 2.
