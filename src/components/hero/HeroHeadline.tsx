"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

/* ===================================================================
   HERO HEADLINE — from content.md → SECTION 1
   Font: Clash Display Bold (WAJIB per component-map.md)
   Animation: word-by-word blur reveal on mount
   Sub-tagline: DecryptedText-style character cycling effect
   =================================================================== */

const HEADLINE_WORDS = [
  "Designing",
  "systems",
  "that",
  "solve",
  "real",
  "operational",
  "problems.",
];

const SUBTAGLINE = "[ SYSTEMS THINKER · BACKEND DEVELOPER · PRODUCT MANAGER ]";
const DESCRIPTOR = "Information Systems · Telkom University · Bandung, Indonesia";

/* ---- Character cycling / decrypted text for sub-tagline ---- */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ·[] ";

function DecryptedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState(text.replace(/[^\s]/g, "·"));
  const [done, setDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let frame = 0;
    const totalFrames = 24;
    let timeoutId: ReturnType<typeof setTimeout>;

    timeoutId = setTimeout(() => {
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
      }, 40);
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

/* ---- Word-by-word blur reveal for main headline ---- */
export default function HeroHeadline() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, filter: "blur(0px)", y: 0 }
      : { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="flex flex-col gap-6">
      {/* 3-layered T-shaped Stacked Typography */}
      <div className="flex flex-col gap-2">
        {/* Layer 1 (top) */}
        <motion.span
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-normal text-base md:text-lg text-white/50 uppercase tracking-[0.25em] block"
        >
          IM YOUR
        </motion.span>

        {/* Layer 2 (middle) */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="font-clash font-bold text-white uppercase tracking-tight leading-[0.95]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          T-SHAPED
        </motion.h1>

        {/* Layer 3 (bottom) */}
        <motion.h1
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-clash font-bold text-[#FFDD00] uppercase tracking-tight leading-[0.95]"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)" }}
        >
          TECHNICAL BUILDER
        </motion.h1>
      </div>

      {/* Subtitle (Below the stacked text) */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="font-satoshi font-normal text-base md:text-lg text-white/60 mt-6 max-w-xl leading-relaxed"
      >
        Designing systems that solve real operational problems.
      </motion.p>

      {/* Sub-tagline — Satoshi Medium, muted, decrypted animation */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="font-satoshi font-medium text-sm md:text-base tracking-[0.05em] text-[var(--color-text-muted)] uppercase mt-2"
      >
        <DecryptedText text={SUBTAGLINE} delay={1200} />
      </motion.p>

      {/* Descriptor — Satoshi Regular, subtle */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="font-satoshi font-normal text-sm text-[var(--color-text-subtle)]"
      >
        {DESCRIPTOR}
      </motion.p>
    </div>
  );
}
