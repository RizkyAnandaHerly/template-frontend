"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/* ===================================================================
   HERO HEADLINE — from content.md → SECTION 1
   Font: Clash Display Bold (WAJIB per component-map.md)
   
   RULES APPLIED (v2):
   - SINGLE <h1> with <span> layers (SEO/a11y fix)
   - clamp max ≤ 5.5rem (impeccable ceiling: 6rem)
   - letter-spacing: -0.03em (floor: -0.04em)
   - text-wrap: balance (via globals.css h1 rule)
   - NO hardcoded #FFDD00 → var(--color-accent-primary)
   - Reduced animation delay: total hero reveal ~0.8s (was 1.3s+)
   - DecryptedText: faster resolve
   =================================================================== */

const SUBTAGLINE = "[ SYSTEMS THINKER · BACKEND DEVELOPER · PRODUCT MANAGER ]";
const PHILOSOPHY =
  "Obsessive about understanding how systems work — from the database schema to the user experience. That mindset drives me across backend engineering and product management simultaneously.";
const LOCATION = "Information Systems · Telkom University · Bandung, Indonesia";

/* ---- Character cycling / decrypted text for sub-tagline ---- */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ·[] ";

function DecryptedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const prefersReducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(
    prefersReducedMotion ? text : text.replace(/[^\s]/g, "·")
  );
  const [done, setDone] = useState(!!prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;
    const totalFrames = 18; // faster resolve (was 24)

    const timeoutId = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const revealedCount = Math.floor(progress * text.length);
        const scrambled = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealedCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        setDisplayed(scrambled);
        if (frame >= totalFrames) {
          clearInterval(interval);
          setDisplayed(text);
          setDone(true);
        }
      }, 35); // faster tick (was 40)
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, delay, prefersReducedMotion]);

  return (
    <span className={done ? "" : "opacity-80"} aria-label={text}>
      {displayed}
    </span>
  );
}

/* ---- Easing: ease-out-quart from design-tokens ---- */
const easeOutQuart = [0.25, 1, 0.5, 1] as const;

/* ---- Stacked headline + sub-tagline + condensed philosophy ---- */
export default function HeroHeadline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-6">
      {/* SINGLE <h1> — 3-layered T-shaped Stacked Typography
          Uses <span> children instead of multiple h1 elements (a11y fix) */}
      <h1 className="flex flex-col gap-2">
        {/* Layer 1 (top) — small muted label */}
        <motion.span
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: easeOutQuart }}
          className="font-satoshi font-normal text-base md:text-lg text-white/50 uppercase tracking-[0.25em] block"
        >
          IM YOUR
        </motion.span>

        {/* Layer 2 (middle) — main headline */}
        <motion.span
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeOutQuart }}
          className="font-clash font-bold text-white uppercase tracking-tight leading-[0.95] block"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          T-SHAPED
        </motion.span>

        {/* Layer 3 (bottom) — accent color headline */}
        <motion.span
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: easeOutQuart }}
          className="font-clash font-bold text-[var(--color-accent-primary)] uppercase tracking-tight leading-[0.95] block"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          TECHNICAL BUILDER
        </motion.span>
      </h1>

      {/* Subtitle (Below the stacked text) */}
      <motion.p
        initial={
          prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35, ease: easeOutQuart }}
        className="font-satoshi font-normal text-base md:text-lg text-white/60 mt-2 max-w-xl leading-relaxed"
      >
        Designing systems that solve real operational problems.
      </motion.p>

      {/* Sub-tagline — Satoshi Medium, muted, decrypted animation */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="font-satoshi font-medium text-sm md:text-base tracking-[0.05em] text-[var(--color-text-muted)] uppercase mt-1"
      >
        <DecryptedText text={SUBTAGLINE} delay={600} />
      </motion.p>

      {/* Descriptor — condensed philosophy + location */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.4 }}
        className="flex flex-col gap-2 mt-1"
      >
        <p className="font-satoshi font-normal text-sm md:text-base text-white/40 leading-relaxed max-w-lg">
          {PHILOSOPHY}
        </p>
        <p className="font-satoshi font-normal text-sm text-[var(--color-text-subtle)]">
          {LOCATION}
        </p>
      </motion.div>
    </div>
  );
}
