"use client";

import { motion, useReducedMotion } from "motion/react";
import SkillTicker from "./SkillTicker";
import HeroHeadline from "./HeroHeadline";
import HeroStats from "./HeroStats";

/* ===================================================================
   HERO SECTION — Section 1 (DARK)
   Layout per component-map.md:
   - Skill ticker di atas headline
   - Photo placeholder (foto belum siap)
   - Stats di bawah
   Background: #09090A
   =================================================================== */

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="section-dark relative min-h-screen flex flex-col overflow-hidden"
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

      {/* ---- Skill Ticker — top of section ---- */}
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="pt-28 md:pt-32 border-b border-[var(--color-border-dark)]"
      >
        <SkillTicker />
      </motion.div>

      {/* ---- Main content ---- */}
      <div className="container-portfolio flex-1 flex flex-col justify-center py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

          {/* Left — Headline + sub-tagline + descriptor */}
          <div className="flex flex-col gap-10">
            <HeroHeadline />
          </div>

          {/* Right — Photo placeholder */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div
              className="w-full aspect-[3/4] rounded-2xl flex flex-col items-center justify-center gap-3 border"
              style={{
                background: "var(--color-surface-dark)",
                borderColor: "var(--color-border-dark)",
                borderStyle: "dashed",
              }}
            >
              {/* Avatar placeholder icon */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "var(--color-border-dark)" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="var(--color-text-muted)" strokeWidth="1.5"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--color-text-muted)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="font-satoshi font-medium text-xs text-[var(--color-text-muted)] uppercase tracking-widest">
                Photo coming soon
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ---- Stats bar — bottom of section ---- */}
      <div className="container-portfolio pb-20 md:pb-28">
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
