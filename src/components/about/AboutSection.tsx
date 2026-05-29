"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import SkillsGrid from "./SkillsGrid";

/* ===================================================================
   ABOUT SECTION — Section 2 (LIGHT #F0F4F8)
   component-map.md layout:
   - Robot kiri/tengah, philosophy text kanan (desktop)
   - Skills grid full-width di bawah
   Content: content.md → SECTION 2 + 2B
   =================================================================== */

/* Dynamic import robot to avoid SSR issues with Spline/Three.js */
const RobotInteractive = dynamic(() => import("./RobotInteractive"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full aspect-square max-w-sm mx-auto rounded-2xl flex items-center justify-center"
      style={{ background: "var(--color-surface-light)", border: "1px dashed var(--color-border-light)" }}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: "var(--color-accent-teal)", borderTopColor: "transparent" }}
        />
        <p className="font-satoshi font-medium text-xs uppercase tracking-widest"
          style={{ color: "var(--color-text-dark-muted)" }}>
          Loading...
        </p>
      </div>
    </div>
  ),
});

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
  const philosophyRef = useRef<HTMLDivElement>(null);
  const workingRef = useRef<HTMLDivElement>(null);

  const introInView = useInView(introRef, { once: true, margin: "-80px" });
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-80px" });
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

        {/* ── Hook + Robot Row ── */}
        <div
          ref={introRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-10 lg:mb-16"
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
                className="font-satoshi font-normal leading-snug mb-1"
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                  color: "var(--color-text-dark-muted)",
                }}
              >
                You might think this is just
              </p>
              <p
                className="font-satoshi font-bold leading-snug"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
                  color: "var(--color-text-dark)",
                }}
              >
                &ldquo;another developer, another portfolio&rdquo;
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
              but you&apos;re{" "}
              <span style={{ color: "var(--color-accent-teal)" }}>[completely]</span>{" "}
              wrong.
            </motion.p>

            {/* Intro */}
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-medium text-[1.25rem] mb-4"
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

          {/* Right — 3D Robot */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={introInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full flex items-center justify-center lg:min-h-[400px] rounded-2xl overflow-hidden"
            style={{
              background: "radial-gradient(circle at center, rgba(94,148,179,0.12) 0%, transparent 70%)",
            }}
          >
            <RobotInteractive />
          </motion.div>
        </div>

        {/* ── Philosophy Text ── */}
        <div
          ref={philosophyRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 lg:mb-28"
        >
          <motion.div
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-normal leading-[1.7]"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                color: "var(--color-text-dark)",
              }}
            >
              I&apos;m obsessive about understanding how systems work — from the database
              schema all the way up to the user experience. That mindset is what led me
              to work across backend engineering and product management simultaneously.
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? {} : fadeUp}
              className="font-satoshi font-normal leading-[1.7]"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
                color: "var(--color-text-dark)",
              }}
            >
              I don&apos;t just write code or manage timelines in isolation. I connect the
              technical dots with the business context, because the best systems are
              built by people who understand both sides of the equation.
            </motion.p>
          </motion.div>

          {/* Working With Me */}
          <motion.div
            ref={workingRef}
            variants={prefersReducedMotion ? {} : staggerContainer}
            initial="hidden"
            animate={workingInView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
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
