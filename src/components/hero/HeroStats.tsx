"use client";

import { motion, useReducedMotion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

/* ===================================================================
   HERO STATS — from content.md → SECTION 1 → Credibility Stats
   MagicUI NumberTicker: count up when stats enter viewport
   =================================================================== */

const STATS = [
  { value: 1, label: "Hackathon Win", suffix: "" },
  { value: 4, label: "Lab Classes Taught", suffix: "" },
  { value: 100, label: "Participants Managed", suffix: "+" },
  { value: 2, label: "Products Built", suffix: "" },
] as const;

export default function HeroStats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--color-border-dark)] rounded-2xl overflow-hidden"
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 + i * 0.1, duration: 0.4 }}
          className="flex flex-col gap-1 p-5 md:p-6 bg-[var(--color-surface-dark)] border-[var(--color-border-dark)]"
        >
          {/* Number */}
          <div className="flex items-baseline gap-0.5">
            <span
              className="font-clash font-bold text-[var(--color-text-primary)] tabular-nums"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1 }}
            >
              <NumberTicker
                value={stat.value}
                delay={2.2 + i * 0.1}
                className="text-[var(--color-text-primary)] tracking-tight"
              />
            </span>
            {stat.suffix && (
              <span
                className="font-clash font-bold text-[var(--color-accent-primary)]"
                style={{ fontSize: "clamp(1.25rem, 3vw, 1.75rem)" }}
              >
                {stat.suffix}
              </span>
            )}
          </div>

          {/* Label */}
          <p className="font-satoshi font-medium text-xs uppercase tracking-[0.06em] text-[var(--color-text-muted)] leading-tight">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
