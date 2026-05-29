"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/* ===================================================================
   APPROACH SECTION — Section 3 (DARK #09090A)
   component-map.md layout:
   - 4 phase cards (UNDERSTAND, ARCHITECT, BUILD, COORDINATE & SHIP)
   - Staggered items with A, B, C, D, E labels
   - Responsive grid (1 col mobile → 2 cols tablet → 4 cols desktop)
   - Content: content.md → SECTION 3
   =================================================================== */

interface PhaseItem {
  label: string;
  text: string;
}

interface Phase {
  num: string;
  title: string;
  items: PhaseItem[];
}

const PHASES: Phase[] = [
  {
    num: "01",
    title: "UNDERSTAND",
    items: [
      { label: "A", text: "Stakeholder & user interviews" },
      { label: "B", text: "Requirement gathering" },
      { label: "C", text: "Problem framing" },
      { label: "D", text: "Feasibility assessment" },
      { label: "E", text: "Technical constraint mapping" },
    ],
  },
  {
    num: "02",
    title: "ARCHITECT",
    items: [
      { label: "A", text: "Database schema design" },
      { label: "B", text: "System data flow mapping" },
      { label: "C", text: "API endpoint planning" },
      { label: "D", text: "Tech stack decision" },
      { label: "E", text: "Entity relationship modeling" },
    ],
  },
  {
    num: "03",
    title: "BUILD",
    items: [
      { label: "A", text: "Backend development (Laravel / C# / Java)" },
      { label: "B", text: "Database implementation & optimization" },
      { label: "C", text: "API development & integration" },
      { label: "D", text: "Query performance tuning" },
      { label: "E", text: "Feature testing & iteration" },
    ],
  },
  {
    num: "04",
    title: "COORDINATE & SHIP",
    items: [
      { label: "A", text: "Cross-team task delegation" },
      { label: "B", text: "Timeline & milestone management" },
      { label: "C", text: "Progress reporting (LPJ / trackers)" },
      { label: "D", text: "Stakeholder communication" },
      { label: "E", text: "Post-delivery feedback analysis" },
    ],
  },
];

/* ---- Framer Motion Variants ---- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const itemsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

export default function ApproachSection() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="approach" className="section-dark overflow-hidden">
      <div className="container-portfolio">
        
        {/* ── Section Label ── */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-4 text-[var(--color-text-muted)]"
        >
          01.2 · MY APPROACH
        </motion.p>

        {/* ── Section Title ── */}
        <motion.h2
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-satoshi font-bold leading-tight tracking-[-0.01em] text-[var(--color-text-primary)] mb-6"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Built with logic. Delivered with clarity.
        </motion.h2>

        {/* ── Section Description ── */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-satoshi font-normal leading-[1.7] text-[var(--color-text-muted)] max-w-2xl mb-16 lg:mb-20"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)" }}
        >
          I work across backend development and product management. The process
          begins with understanding the real problem, then moves through architecture,
          implementation, and coordinated delivery.
        </motion.p>

        {/* ── 4 Phases Grid ── */}
        <motion.div
          ref={containerRef}
          variants={prefersReducedMotion ? {} : containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {PHASES.map((phase) => (
            <motion.div
              key={phase.num}
              variants={prefersReducedMotion ? {} : cardVariants}
              className="bg-[var(--color-surface-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--color-accent-primary)]/50 hover:bg-[rgba(255,255,255,0.06)]"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="font-satoshi font-medium text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    Phase {phase.num}
                  </span>
                  <h3 className="font-satoshi font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                    {phase.title}
                  </h3>
                </div>
                <span className="font-clash font-bold text-4xl lg:text-5xl text-[var(--color-accent-primary)] leading-none select-none">
                  {phase.num}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[var(--color-border-dark)]" />

              {/* Card Sub-items with nested stagger */}
              <motion.ul
                variants={prefersReducedMotion ? {} : itemsContainerVariants}
                className="flex flex-col gap-4 flex-grow"
              >
                {phase.items.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={prefersReducedMotion ? {} : itemVariants}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-subtle)] font-satoshi leading-relaxed"
                  >
                    <span className="font-bold text-[var(--color-accent-primary)] opacity-95 select-none w-4 flex-shrink-0 text-left">
                      {item.label}
                    </span>
                    <span className="opacity-90">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
