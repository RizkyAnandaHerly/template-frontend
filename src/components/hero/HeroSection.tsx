"use client";

import { motion, useReducedMotion } from "motion/react";
import SkillTicker from "./SkillTicker";
import HeroHeadline from "./HeroHeadline";
import HeroStats from "./HeroStats";

/* ===================================================================
   HERO SECTION — Section 1 (DARK)
   v2 Overhaul:
   - Photo placeholder redesigned: intentional geometric design (not "broken")
   - Improved timing: tighter staggers, ease-out-quart
   - Blueprint grid accent in hero
   - Edge fade masks on ticker
   - Radial gradient glow behind headline
   =================================================================== */

/* Skill labels for flanking layout — from content.md SECTION 2B
   Left side  = tech/engineering skills
   Right side = product/management skills
   This visually represents the T-shape: depth (left) + breadth (right) */
const SKILLS_LEFT = [
  { label: "Backend\nDevelopment", tag: "CORE" },
  { label: "Database\nArchitecture", tag: "CORE" },
  { label: "System\nAnalysis", tag: "SUPPORTING" },
];

const SKILLS_RIGHT = [
  { label: "Project\nManagement", tag: "CORE" },
  { label: "Product\nStrategy", tag: "SUPPORTING" },
  { label: "Cross-functional\nCollaboration", tag: "SUPPORTING" },
];

/* Easing: ease-out-quart */
const easeOutQuart = [0.25, 1, 0.5, 1] as const;

function SkillLabel({
  label,
  tag,
  align,
  delay,
}: {
  label: string;
  tag: string;
  align: "left" | "right";
  delay: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 0, x: align === "left" ? -16 : 16 }
      }
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4, ease: easeOutQuart }}
      className={`flex flex-col gap-1 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}
    >
      <span className="font-satoshi font-medium text-xs md:text-sm text-white/70 whitespace-pre-line leading-tight">
        {label}
      </span>
      <span
        className={`text-[9px] uppercase tracking-[0.15em] font-satoshi font-medium ${
          tag === "CORE"
            ? "text-[var(--color-accent-primary)]/60"
            : "text-white/25"
        }`}
      >
        {tag}
      </span>
    </motion.div>
  );
}

/* ---- Photo Placeholder: Intentional geometric design ----
   Replaces the old dashed-border "Photo coming soon" with an 
   animated geometric frame that looks designed, not broken. */
function PhotoPlaceholder() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }
      }
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5, ease: easeOutQuart }}
      className="flex-shrink-0 relative"
    >
      <div
        className="relative w-[200px] h-[260px] md:w-[240px] md:h-[320px] lg:w-[280px] lg:h-[370px] rounded-2xl overflow-hidden"
        style={{ background: "var(--color-surface-dark)" }}
      >
        {/* Animated border frame — top and left edges */}
        <motion.div
          initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: easeOutQuart }}
          className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent-primary)]/30 origin-left"
        />
        <motion.div
          initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeOutQuart }}
          className="absolute top-0 left-0 bottom-0 w-px bg-[var(--color-accent-primary)]/30 origin-top"
        />

        {/* Animated border frame — bottom and right edges */}
        <motion.div
          initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: easeOutQuart }}
          className="absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-right"
        />
        <motion.div
          initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeOutQuart }}
          className="absolute top-0 right-0 bottom-0 w-px bg-white/10 origin-bottom"
        />

        {/* Cross-hair center marker */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Horizontal line */}
          <motion.div
            initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.0, duration: 0.5, ease: easeOutQuart }}
            className="absolute w-12 h-px bg-white/10"
          />
          {/* Vertical line */}
          <motion.div
            initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.0, duration: 0.5, ease: easeOutQuart }}
            className="absolute w-px h-12 bg-white/10"
          />
          {/* Center dot */}
          <motion.div
            initial={prefersReducedMotion ? { scale: 1 } : { scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, duration: 0.3, ease: easeOutQuart }}
            className="relative w-2 h-2 rounded-full bg-[var(--color-accent-primary)]/40"
          />
        </div>

        {/* Blueprint dimension labels */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="absolute top-3 right-3"
        >
          <span
            className="font-satoshi text-white/10"
            style={{ fontSize: "8px", letterSpacing: "0.08em" }}
          >
            280 × 370
          </span>
        </motion.div>

        {/* Bottom label — intentional, not "coming soon" */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          className="absolute bottom-4 left-0 right-0 text-center"
        >
          <span className="font-satoshi font-medium text-[9px] text-white/15 uppercase tracking-[0.2em]">
            RAH · 2026
          </span>
        </motion.div>

        {/* Subtle pulsing glow in center */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-20 h-20 rounded-full animate-pulse"
            style={{
              background:
                "radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%)",
              opacity: 0.03,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="section-dark relative min-h-screen flex flex-col overflow-hidden !pt-4 md:!pt-6"
    >
      {/* ---- Top edge glow — decorative ---- */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent-primary), transparent)",
          opacity: 0.5,
        }}
      />

      {/* ---- Radial glow behind headline area ---- */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[400px] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-primary) 0%, transparent 70%)",
          opacity: 0.02,
          filter: "blur(80px)",
        }}
      />

      {/* ---- Skill Ticker — top of section (2 rows) ---- */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.5 }}
        className="pt-4 md:pt-8 border-b border-[var(--color-border-dark)] relative"
      >
        {/* Edge fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg-dark), transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-bg-dark), transparent)",
          }}
        />
        <SkillTicker />
      </motion.div>

      {/* ---- Main content — center stage layout ---- */}
      <div className="container-portfolio flex-1 flex flex-col justify-center py-10 md:py-16">
        {/* Headline — full width, left-aligned */}
        <div className="mb-10 md:mb-14">
          <HeroHeadline />
        </div>

        {/* Center stage: Skills Left | Photo Center | Skills Right */}
        <div className="flex items-center justify-center gap-6 md:gap-10 lg:gap-16 mb-10 md:mb-14">
          {/* Left skills — hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-8 lg:gap-10 flex-shrink-0 w-[140px] xl:w-[160px]">
            {SKILLS_LEFT.map((skill, i) => (
              <SkillLabel
                key={skill.label}
                label={skill.label}
                tag={skill.tag}
                align="left"
                delay={0.5 + i * 0.1}
              />
            ))}
          </div>

          {/* Center — Photo placeholder (intentional geometric design) */}
          <PhotoPlaceholder />

          {/* Right skills — hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-8 lg:gap-10 flex-shrink-0 w-[140px] xl:w-[160px]">
            {SKILLS_RIGHT.map((skill, i) => (
              <SkillLabel
                key={skill.label}
                label={skill.label}
                tag={skill.tag}
                align="right"
                delay={0.5 + i * 0.1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---- Stats bar — bottom of section ---- */}
      <div className="container-portfolio pb-16 md:pb-24">
        <HeroStats />
      </div>

      {/* ---- Bottom fade-to-next-section ---- */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg-dark))",
        }}
      />
    </section>
  );
}
