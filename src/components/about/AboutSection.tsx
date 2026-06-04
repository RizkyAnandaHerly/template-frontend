"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import SkillsGrid from "./SkillsGrid";

/* ===================================================================
   ABOUT SECTION — Section 2 (LIGHT #F0F4F8)
   Redesign v2:
   - Hook + Punchline + Intro (left)
   - Working With Me (right)
   - Philosophy REMOVED (condensed → hero descriptor)
   - TerminalCard REMOVED (moved → footer easter egg)
   - Skills grid below
   Content: content.md → SECTION 2 + 2B
   =================================================================== */

/* ---- Animation variants from design-tokens.md ---- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const introRef = useRef<HTMLDivElement>(null);
  const workingRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const workingInView = useInView(workingRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-light overflow-hidden">
      <div className="container-portfolio">

        {/* ── Section Label ── */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-16"
          style={{ color: "var(--color-text-dark-muted)" }}
        >
          01 · ABOUT ME
        </motion.p>

        {/* ── Hook + Working With Me ── */}
        <div
          ref={introRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 lg:mb-28"
        >
          {/* Left — Hook text + Intro */}
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            animate={introInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Hook */}
            <motion.div variants={prefersReducedMotion ? {} : fadeUp}>
              <p
                className="font-clash font-bold leading-snug"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                  color: "var(--color-text-dark)",
                }}
              >
                most portfolios tell you what someone built.
              </p>
            </motion.div>

            {/* Punchline */}
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-bold"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                color: "var(--color-text-dark)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              this one tells you how i think.
            </motion.p>

            {/* Intro */}
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-medium text-[1.25rem]"
              style={{ color: "var(--color-text-dark-muted)" }}
            >
              hi, i&apos;m rizky
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              className="h-px w-16"
              style={{ background: "var(--color-accent-teal)", opacity: 0.5 }}
            />

            {/* Working tagline */}
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-medium text-sm uppercase tracking-[0.08em]"
              style={{ color: "var(--color-accent-deep)" }}
            >
              ANALYTICAL, SYSTEMATIC, AND OUTCOME-DRIVEN.
            </motion.p>
          </motion.div>

          {/* Right — Working With Me */}
          <motion.div
            ref={workingRef}
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            animate={workingInView ? "visible" : "hidden"}
            className="flex flex-col gap-4 lg:pt-4"
          >
            <motion.div
              variants={prefersReducedMotion ? {} : fadeUp}
              className="h-px w-16 mb-2"
              style={{ background: "var(--color-border-light)" }}
            />
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-medium uppercase tracking-[0.08em] text-xs lg:text-sm"
              style={{ color: "var(--color-text-dark-muted)" }}
            >
              Working with me
            </motion.p>
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-normal leading-[1.7]"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                color: "var(--color-text-dark-muted)",
              }}
            >
              I bring structured thinking and cross-functional awareness to every project.
              Whether I&apos;m designing a database schema, leading a product sprint, or
              coordinating across teams — the process stays deliberate and the output
              stays accountable.
            </motion.p>
          </motion.div>
        </div>

        {/* ── Skills Grid ── */}
        <SkillsGrid />

      </div>
    </section>
  );
}
