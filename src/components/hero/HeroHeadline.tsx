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
      {/* Main headline — Clash Display Bold */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="font-clash font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-text-primary)]"
        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
      >
        {HEADLINE_WORDS.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sub-tagline — Satoshi Medium, muted, decrypted animation */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="font-satoshi font-medium text-sm md:text-base tracking-[0.05em] text-[var(--color-text-muted)] uppercase"
      >
        <DecryptedText text={SUBTAGLINE} delay={1400} />
      </motion.p>

      {/* Descriptor — Satoshi Regular, subtle */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="font-satoshi font-normal text-sm text-[var(--color-text-subtle)]"
      >
        {DESCRIPTOR}
      </motion.p>
    </div>
  );
}
