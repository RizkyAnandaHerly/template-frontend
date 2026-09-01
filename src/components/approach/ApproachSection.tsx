"use client";

import { useState, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";

/* ===================================================================
   APPROACH SECTION — Section 3 (DARK #09090A)
   v2 Overhaul:
   - Section label: "MY APPROACH" (NO "01.2 ·" prefix)
   - Phase numbers 01–04 KEPT (genuinely sequential)
   - Hover tooltips refined: pill-style, better animation
   - Graph-paper grid background
   - Easing: ease-out-quart throughout
   - text-wrap: balance on section title
   =================================================================== */

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

interface PhaseItem {
  label: string;
  text: string;
  description: string;
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
      {
        label: "A",
        text: "Stakeholder & user interviews",
        description:
          "Direct conversations to map who needs what, and why — before assumptions solidify.",
      },
      {
        label: "B",
        text: "Requirement gathering",
        description:
          "Translating ambiguous needs into structured, actionable specs.",
      },
      {
        label: "C",
        text: "Problem framing",
        description:
          "Defining the actual problem, not just the symptom that was asked to be fixed.",
      },
      {
        label: "D",
        text: "Feasibility assessment",
        description:
          "Evaluating what's buildable given the time, stack, and team available.",
      },
      {
        label: "E",
        text: "Technical constraint mapping",
        description:
          "Identifying system limitations before architecture decisions lock them in.",
      },
    ],
  },
  {
    num: "02",
    title: "ARCHITECT",
    items: [
      {
        label: "A",
        text: "Database schema design",
        description:
          "Structuring data relationships that won't need major refactoring when the product scales.",
      },
      {
        label: "B",
        text: "System data flow mapping",
        description:
          "Tracing how data moves between components, services, and users end-to-end.",
      },
      {
        label: "C",
        text: "API endpoint planning",
        description:
          "Defining contracts between frontend and backend before a single line is written.",
      },
      {
        label: "D",
        text: "Tech stack decision",
        description:
          "Choosing tools based on team expertise, requirements, and long-term maintenance cost.",
      },
      {
        label: "E",
        text: "Entity relationship modeling",
        description:
          "Mapping entities and their relationships to catch logical gaps early.",
      },
    ],
  },
  {
    num: "03",
    title: "BUILD",
    items: [
      {
        label: "A",
        text: "Backend development",
        description:
          "Writing clean, maintainable server-side logic across Laravel, C#, and Java.",
      },
      {
        label: "B",
        text: "Database implementation & optimization",
        description:
          "Building and tuning queries, indexes, and schemas for real-world performance.",
      },
      {
        label: "C",
        text: "API development & integration",
        description:
          "Developing and wiring endpoints that are predictable and well-documented.",
      },
      {
        label: "D",
        text: "Query performance tuning",
        description:
          "Identifying slow queries and rewriting them before users feel the difference.",
      },
      {
        label: "E",
        text: "Feature testing & iteration",
        description:
          "Validating each feature against requirements, then refining based on findings.",
      },
    ],
  },
  {
    num: "04",
    title: "COORDINATE & SHIP",
    items: [
      {
        label: "A",
        text: "Cross-team task delegation",
        description:
          "Breaking down work into clear assigned units so no one is ever waiting on anyone.",
      },
      {
        label: "B",
        text: "Timeline & milestone management",
        description:
          "Setting realistic deadlines and tracking progress without micromanaging.",
      },
      {
        label: "C",
        text: "Progress reporting",
        description:
          "Producing structured LPJ and tracker reports that stakeholders actually read and find useful.",
      },
      {
        label: "D",
        text: "Stakeholder communication",
        description:
          "Translating technical progress into language decision-makers understand and trust.",
      },
      {
        label: "E",
        text: "Post-delivery feedback analysis",
        description:
          "Capturing lessons from each delivery to improve the next cycle.",
      },
    ],
  },
];

const MAX_ITEMS = 5;

export default function ApproachSection() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  /* Track which cell is hovered: "phaseIdx-itemIdx" */
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <section id="approach" className="section-dark overflow-hidden">
      <div className="container-portfolio">
        {/* ── Section Label — NO numbered prefix ── */}
        <motion.p
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeOutQuart }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-4 text-[var(--color-text-muted)]"
        >
          MY APPROACH
        </motion.p>

        {/* ── Section Title ── */}
        <motion.h2
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOutQuart }}
          className="font-satoshi font-bold leading-tight tracking-[-0.01em] text-[var(--color-text-primary)] mb-6"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          Built with logic. Delivered with clarity.
        </motion.h2>

        {/* ── Section Description ── */}
        <motion.p
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: easeOutQuart }}
          className="font-satoshi font-normal leading-[1.7] text-[var(--color-text-muted)] max-w-2xl mb-12 lg:mb-16"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.125rem)" }}
        >
          I work across backend development and product management. The process
          begins with understanding the real problem, then moves through
          architecture, implementation, and coordinated delivery.
        </motion.p>

        {/* ── Horizontal Table — Desktop (4 columns) ── */}
        <motion.div
          ref={containerRef}
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
          }
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: easeOutQuart }}
        >
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <div className="w-full border border-[var(--color-border-dark)] rounded-xl overflow-hidden bg-graph-paper-dark">
              {/* Table Header — Phase Titles */}
              <div className="grid grid-cols-4 border-b border-[var(--color-border-dark)]">
                {PHASES.map((phase, phaseIdx) => (
                  <motion.div
                    key={phase.num}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 10 }
                    }
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      delay: 0.2 + phaseIdx * 0.06,
                      duration: 0.35,
                      ease: easeOutQuart,
                    }}
                    className={`p-5 lg:p-6 ${phaseIdx < 3 ? "border-r border-[var(--color-border-dark)]" : ""}`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-clash font-bold text-2xl lg:text-3xl text-[var(--color-accent-primary)] leading-none select-none">
                        {phase.num}
                      </span>
                      <h3 className="font-satoshi font-bold text-xs lg:text-sm uppercase tracking-[0.06em] text-[var(--color-text-primary)]">
                        {phase.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Table Body — Item Rows */}
              {Array.from({ length: MAX_ITEMS }).map((_, rowIdx) => (
                <div
                  key={rowIdx}
                  className={`grid grid-cols-4 ${rowIdx < MAX_ITEMS - 1 ? "border-b border-[var(--color-border-dark)]" : ""}`}
                >
                  {PHASES.map((phase, phaseIdx) => {
                    const item = phase.items[rowIdx];
                    if (!item)
                      return (
                        <div
                          key={phaseIdx}
                          className={
                            phaseIdx < 3
                              ? "border-r border-[var(--color-border-dark)]"
                              : ""
                          }
                        />
                      );

                    const cellKey = `${phaseIdx}-${rowIdx}`;
                    const isHovered = hoveredCell === cellKey;
                    const hasAnyHover = hoveredCell !== null;

                    return (
                      <motion.div
                        key={phaseIdx}
                        initial={
                          prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }
                        }
                        animate={
                          isInView
                            ? {
                                opacity:
                                  hasAnyHover && !isHovered ? 0.35 : 1,
                              }
                            : { opacity: 0 }
                        }
                        transition={{
                          delay: prefersReducedMotion
                            ? 0
                            : 0.3 + rowIdx * 0.04 + phaseIdx * 0.02,
                          duration: 0.25,
                        }}
                        className={`relative p-4 lg:p-5 group transition-colors duration-200 ${
                          phaseIdx < 3
                            ? "border-r border-[var(--color-border-dark)]"
                            : ""
                        } ${isHovered ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"}`}
                        onMouseEnter={() => setHoveredCell(cellKey)}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        {/* Item Label + Text */}
                        <div className="flex items-start gap-2.5">
                          <span className="font-satoshi font-bold text-xs text-[var(--color-accent-primary)] opacity-80 select-none w-4 flex-shrink-0 mt-0.5">
                            {item.label}.
                          </span>
                          <span className="font-satoshi font-normal text-sm text-[var(--color-text-subtle)] leading-relaxed">
                            {item.text}
                          </span>
                        </div>

                        {/* Hover Description — refined pill tooltip */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 2 }}
                              transition={{
                                duration: 0.15,
                                ease: easeOutQuart,
                              }}
                              className="absolute left-3 right-3 top-full z-30 mt-1 pointer-events-none"
                            >
                              <div className="relative bg-[#1A1A1A] border border-white/15 rounded-xl px-4 py-3 shadow-xl">
                                {/* Yellow accent line */}
                                <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-[var(--color-accent-primary)]/40 rounded-full" />
                                <p className="font-satoshi font-normal text-xs text-white/70 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View — Stacked Cards */}
          <div className="md:hidden flex flex-col gap-4">
            {PHASES.map((phase, phaseIdx) => (
              <motion.div
                key={phase.num}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 20 }
                }
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 + phaseIdx * 0.08,
                  duration: 0.4,
                  ease: easeOutQuart,
                }}
                className="border border-[var(--color-border-dark)] rounded-xl p-5 bg-[var(--color-surface-dark)]"
              >
                {/* Phase Header */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-clash font-bold text-2xl text-[var(--color-accent-primary)] leading-none select-none">
                    {phase.num}
                  </span>
                  <h3 className="font-satoshi font-bold text-sm uppercase tracking-[0.06em] text-[var(--color-text-primary)]">
                    {phase.title}
                  </h3>
                </div>

                <div className="h-px w-full bg-[var(--color-border-dark)] mb-4" />

                {/* Items */}
                <ul className="flex flex-col gap-3">
                  {phase.items.map((item, itemIdx) => {
                    const cellKey = `m-${phaseIdx}-${itemIdx}`;
                    const isHovered = hoveredCell === cellKey;

                    return (
                      <li
                        key={itemIdx}
                        className="relative"
                        onMouseEnter={() => setHoveredCell(cellKey)}
                        onMouseLeave={() => setHoveredCell(null)}
                        onClick={() =>
                          setHoveredCell(isHovered ? null : cellKey)
                        }
                      >
                        <div
                          className={`flex items-start gap-2.5 text-sm font-satoshi leading-relaxed p-2 rounded-lg transition-colors duration-150 ${
                            isHovered ? "bg-white/[0.04]" : ""
                          }`}
                        >
                          <span className="font-bold text-[var(--color-accent-primary)] opacity-90 select-none w-4 flex-shrink-0">
                            {item.label}.
                          </span>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-[var(--color-text-subtle)] opacity-90">
                              {item.text}
                            </span>
                            {/* Description shows inline on mobile */}
                            <AnimatePresence>
                              {isHovered && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="text-xs text-white/50 leading-relaxed overflow-hidden"
                                >
                                  {item.description}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
