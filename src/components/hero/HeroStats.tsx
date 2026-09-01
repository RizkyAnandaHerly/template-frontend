"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

/* ===================================================================
   HERO STATS — from content.md → SECTION 1 → Credibility Stats
   MagicUI NumberTicker: count up when stats enter viewport
   
   v2 CHANGES:
   - Reduced initial delay: 1.0s (was 2.0s)
   - Easing: ease-out-quart
   - Improved typography weight distribution
   =================================================================== */

const STATS = [
  { value: 1, label: "Hackathon Win", suffix: "" },
  { value: 4, label: "Lab Classes Taught", suffix: "" },
  { value: 100, label: "Participants Managed", suffix: "+" },
  { value: 2, label: "Products Built", suffix: "" },
] as const;

/* Easing: ease-out-quart */
const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export default function HeroStats() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
      }
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.5, ease: easeOutQuart }}
      className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--color-border-dark)] rounded-2xl overflow-hidden"
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 + i * 0.08, duration: 0.35 }}
          className="flex flex-col gap-1.5 p-5 md:p-6 bg-[var(--color-surface-dark)] border-[var(--color-border-dark)]"
        >
          {/* Number */}
          <div className="flex items-baseline gap-0.5">
            <span
              className="font-clash font-bold text-[var(--color-text-primary)] tabular-nums"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                lineHeight: 1,
              }}
            >
              {mounted ? (
                <NumberTicker
                  value={stat.value}
                  delay={1.2 + i * 0.08}
                  className="text-[var(--color-text-primary)] tracking-tight"
                />
              ) : (
                <span>{stat.value}</span>
              )}
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
