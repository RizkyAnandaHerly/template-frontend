# PHASE 3 EXECUTION PROMPT
# Featured Project Animations + Footer Typewriter + Draggable
# Copy-paste ke Gemini SETELAH Phase 2 selesai dan di-review

---

## MANDATORY: READ FIRST

Read all context files. Confirm by stating project 01 title and footer CTA text.

---

## FIX 1: FEATURED PROJECT CARDS — Text Slide-in Animation

**File:** `src/components/projects/ProjectCard.tsx`

Current: Project cards exist but text overlay has no scroll-triggered animation.

**Target:** Exactly like nazwatk.site featured section.
When card enters viewport:
- Project number (01): slides in from RIGHT, delay 0ms
- Tags: fade in, delay 150ms
- Project title: slides in from BOTTOM, delay 200ms
- Subtitle: fade in, delay 300ms
- Role text: fade in, delay 350ms
- "VIEW PROJECT →": slides in from BOTTOM, delay 450ms

**Implementation — wrap text elements with Framer Motion:**

```typescript
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Inside ProjectCard component:
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-80px' })

// Project number:
<motion.span
  initial={{ x: 60, opacity: 0 }}
  animate={isInView ? { x: 0, opacity: 1 } : {}}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
  01
</motion.span>

// Tags container:
<motion.div
  initial={{ opacity: 0 }}
  animate={isInView ? { opacity: 1 } : {}}
  transition={{ duration: 0.4, delay: 0.15 }}
>
  {/* tag badges */}
</motion.div>

// Title:
<motion.h2
  initial={{ y: 30, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 1 } : {}}
  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
>
  ObatIn
</motion.h2>

// CTA button:
<motion.div
  initial={{ y: 20, opacity: 0 }}
  animate={isInView ? { y: 0, opacity: 1 } : {}}
  transition={{ duration: 0.5, delay: 0.45 }}
>
  VIEW PROJECT →
</motion.div>
```

Add `ref={ref}` to the outermost card container div.

---

## FIX 2: FOOTER — Typewriter Quote

**File:** `src/components/footer/Footer.tsx`

**Step 2a — Install:**
```bash
npm install react-type-animation
```

**Step 2b — Add typewriter quote to footer:**

Below the main CTA headline, add:

```typescript
import { TypeAnimation } from 'react-type-animation'

// In the footer, below social links, above copyright:
<div className="mt-12 border-t border-white/10 pt-8">
  <TypeAnimation
    sequence={[
      'THE BEST CODE IS THE ONE THAT SOLVES THE REAL PROBLEM.',
      3000,
      '',
      1000,
    ]}
    wrapper="p"
    speed={60}
    className="font-satoshi text-xs md:text-sm text-white/30 uppercase tracking-widest"
    repeat={Infinity}
  />
</div>
```

---

## FIX 3: FOOTER — Draggable "SYSTEMS" Text

**File:** `src/components/footer/Footer.tsx`

At the very bottom of the footer (below copyright), add a large draggable word.
This is the equivalent of Nazwa's draggable "MADNESS" image.

```typescript
import { motion } from 'framer-motion'

// At absolute bottom of footer:
<div className="relative overflow-hidden h-32 mt-8">
  <motion.div
    drag
    dragConstraints={{ left: -300, right: 300, top: -50, bottom: 50 }}
    dragElastic={0.1}
    whileDrag={{ scale: 1.05 }}
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
               font-clash font-bold text-[15vw] text-white/[0.05]
               select-none cursor-grab active:cursor-grabbing whitespace-nowrap
               hover:text-white/[0.08] transition-colors duration-300"
    style={{ userSelect: 'none' }}
  >
    SYSTEMS
  </motion.div>
</div>
```

**Note:** The word "SYSTEMS" is intentionally very transparent (opacity 5%) so it's
a subtle background element, not a main visual. When dragged it becomes slightly
more visible (8%). This is the same approach Nazwa uses.

---

## FIX 4: FOOTER — Update CTA Headline

**Current:** "Let's connect."
**Change to:** "Let's build something that actually works."

The text should be:
- Font: Clash Display Bold
- Size: text-[clamp(2.5rem,6vw,5rem)]
- Color: white

---

## VERIFICATION CHECKLIST

```
Fix 1 — Project Card Animations:
[ ] Scroll to Featured Projects section
[ ] Project number slides in from right ✓
[ ] Title slides up from below ✓
[ ] "VIEW PROJECT" slides up last ✓
[ ] Animation triggers once per scroll-into-view
[ ] No layout shift during animation

Fix 2 — Typewriter:
[ ] Text types out character by character
[ ] Completes full sentence, pauses 3 seconds
[ ] Erases and repeats
[ ] Color is muted (not bright white)
[ ] Uppercase with tracking

Fix 3 — Draggable:
[ ] Large "SYSTEMS" text visible at footer bottom (very faint)
[ ] Can be clicked and dragged around
[ ] Stays within bounds (doesn't go outside footer)
[ ] Cursor changes to grab hand on hover
[ ] Changes to grabbing cursor when dragging

Fix 4 — CTA:
[ ] Footer headline reads "Let's build something that actually works."
[ ] Font is Clash Display (large, bold)

Build check:
[ ] Zero TypeScript errors
[ ] No console errors
[ ] Footer looks complete and professional
```

---


