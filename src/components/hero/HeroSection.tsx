"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
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

/* ---- Hero Photo: Real personal photo with animated accents ----
   Replaces the geometric placeholder with actual user photo.
   Photo has dark background → blends with hero bg (#09090A). */
function HeroPhoto() {
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
      {/* Subtle yellow accent glow behind photo */}
      <div
        className="absolute -inset-4 rounded-2xl pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-accent-primary) 0%, transparent 70%)",
          opacity: 0.04,
          filter: "blur(40px)",
        }}
      />

      <div
        className="relative w-[200px] h-[260px] md:w-[240px] md:h-[320px] lg:w-[280px] lg:h-[370px] rounded-2xl overflow-hidden border border-[var(--color-border-dark)]"
      >
        {/* Actual photo */}
        <Image
          src="/images/PhotoPlaceholder.PNG"
          alt="Rizky Ananda Herly — Product-minded Technical Builder"
          fill
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 280px"
          priority
          className="object-cover object-top"
        />

        {/* Animated border frame — top and left edges (yellow accent) */}
        <motion.div
          initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: easeOutQuart }}
          className="absolute top-0 left-0 right-0 h-px bg-[var(--color-accent-primary)]/30 origin-left z-10"
        />
        <motion.div
          initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.7, duration: 0.8, ease: easeOutQuart }}
          className="absolute top-0 left-0 bottom-0 w-px bg-[var(--color-accent-primary)]/30 origin-top z-10"
        />

        {/* Bottom-right border edges (subtle white) */}
        <motion.div
          initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: easeOutQuart }}
          className="absolute bottom-0 left-0 right-0 h-px bg-white/10 origin-right z-10"
        />
        <motion.div
          initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.9, duration: 0.8, ease: easeOutQuart }}
          className="absolute top-0 right-0 bottom-0 w-px bg-white/10 origin-bottom z-10"
        />

        {/* Blueprint dimension label (top-right corner) */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="absolute top-3 right-3 z-10"
        >
          <span
            className="font-satoshi text-white/15 bg-black/40 px-1.5 py-0.5 rounded"
            style={{ fontSize: "8px", letterSpacing: "0.08em" }}
          >
            280 × 370
          </span>
        </motion.div>

        {/* Bottom gradient overlay for smooth blend with dark bg */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none z-[5]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(9, 9, 10, 0.6))",
          }}
        />
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

          {/* Center — Personal photo with animated accents */}
          <HeroPhoto />

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
