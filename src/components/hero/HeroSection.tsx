"use client";

import { motion, useReducedMotion } from "motion/react";
import SkillTicker from "./SkillTicker";
import HeroHeadline from "./HeroHeadline";
import HeroStats from "./HeroStats";

/* ===================================================================
   HERO SECTION — Section 1 (DARK)
   Redesign v2 — Nazwa-style center photo layout:
   - Skill ticker rows at top (2 rows, reversed)
   - Stacked headline left-aligned
   - Photo CENTER with skill labels flanking L/R (desktop)
   - Stats bar at bottom
   Background: #09090A
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
          : { opacity: 0, x: align === "left" ? -20 : 20 }
      }
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
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

      {/* ---- Skill Ticker — top of section (2 rows) ---- */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="pt-4 md:pt-8 border-b border-[var(--color-border-dark)]"
      >
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
                delay={0.8 + i * 0.12}
              />
            ))}
          </div>

          {/* Center — Photo placeholder */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, scale: 0.92 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div
              className="w-[200px] h-[260px] md:w-[240px] md:h-[320px] lg:w-[280px] lg:h-[370px] rounded-2xl flex flex-col items-center justify-center gap-3 border relative overflow-hidden"
              style={{
                background: "var(--color-surface-dark)",
                borderColor: "var(--color-border-dark)",
                borderStyle: "dashed",
              }}
            >
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--color-accent-primary)]/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--color-accent-primary)]/30 rounded-br-2xl" />

              {/* Avatar placeholder icon */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-border-dark)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="8"
                    r="4"
                    stroke="var(--color-text-muted)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
                    stroke="var(--color-text-muted)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="font-satoshi font-medium text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                Photo coming soon
              </p>
            </div>
          </motion.div>

          {/* Right skills — hidden on mobile */}
          <div className="hidden lg:flex flex-col gap-8 lg:gap-10 flex-shrink-0 w-[140px] xl:w-[160px]">
            {SKILLS_RIGHT.map((skill, i) => (
              <SkillLabel
                key={skill.label}
                label={skill.label}
                tag={skill.tag}
                align="right"
                delay={0.8 + i * 0.12}
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
