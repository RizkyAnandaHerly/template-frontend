"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/* ===================================================================
   EXPERIENCE TIMELINE — Section 5 (DARK #09090A)
   component-map.md layout:
   - Vertical timeline with glowing connector
   - Staggered items reveal on scroll
   - Strict Satoshi & Clash typography, colors match tokens.
   - Content: content.md → SECTION 5
   =================================================================== */

interface TimelineEntry {
  period: string;
  role: string;
  org: string;
  desc: string;
}

const ENTRIES: TimelineEntry[] = [
  {
    period: "Feb 2026 – May 2026",
    role: "Assistant Database System",
    org: "DASPRO Laboratory · Telkom University",
    desc: "Assisted and mentored 4 database laboratory classes, including an international class. Guided students through SQL topics: DDL/DML, Join & Subquery, Stored Procedures, and Triggers.",
  },
  {
    period: "Jul 2025 – Dec 2025",
    role: "Program Management Intern",
    org: "Produktifkuy",
    desc: "Spearheaded planning and execution of 3+ monthly programs (webinars and workshops) engaging 100+ active participants. Managed timelines, task delegation, and administrative reporting (LPJ, progress trackers, meeting agendas).",
  },
  {
    period: "Jul 2025 – Nov 2025",
    role: "Sponsor Staff",
    org: "SREssay",
    desc: "Formulated and pitched 5+ strategic partnership proposals to secure funding and support for the SREssay event.",
  },
  {
    period: "Jun 2025 – Sep 2025",
    role: "Discipline and Motivation Team",
    org: "PKKMB Telkom University 2025",
    desc: "Executed field coordination and crowd control for 1,500+ participants during freshman orientation. Collaborated cross-functionally to ensure rundown execution.",
  },
  {
    period: "Sep 2025 – Nov 2025",
    role: "Volunteer",
    org: "Society of Renewable Energy (SRE Tel-U)",
    desc: "Executed energy literacy programs. Participated in Teach & Reach SMK Negeri 4 Bandung and Pengabdian Masyarakat SRE Tel-U × Laboratory ESDM.",
  },
];

/* ---- Framer Motion Variants ---- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const entryVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ExperienceTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-dark overflow-hidden">
      <div className="container-portfolio">
        
        {/* ── Section Label ── */}
        <motion.p
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-16 text-[var(--color-text-muted)]"
        >
          03 · EXPERIENCE
        </motion.p>

        {/* ── Vertical Timeline Container ── */}
        <div className="relative max-w-3xl ml-4 md:ml-8 pl-8 md:pl-12">
          
          {/* ── Connector Line ── */}
          <motion.div
            initial={prefersReducedMotion ? { scaleY: 1 } : { scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-0 top-2 bottom-2 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, var(--color-accent-primary) 0%, rgba(230,230,230,0.05) 100%)" }}
          />

          {/* ── Staggered Entries List ── */}
          <motion.div
            ref={timelineRef}
            variants={prefersReducedMotion ? {} : containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-12 lg:gap-16"
          >
            {ENTRIES.map((entry, index) => (
              <motion.div
                key={index}
                variants={prefersReducedMotion ? {} : entryVariants}
                className="relative flex flex-col gap-2"
              >
                
                {/* Custom Pulsing Timeline Node */}
                <div className="absolute -left-[32px] md:-left-[48px] top-1.5 w-4 h-4 rounded-full bg-[var(--color-bg-dark)] border-2 border-[var(--color-accent-primary)] flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] animate-pulse" />
                </div>

                {/* Date Period */}
                <span className="font-satoshi font-bold text-xs lg:text-sm uppercase tracking-[0.05em] text-[var(--color-accent-primary)]">
                  {entry.period}
                </span>

                {/* Role Title */}
                <h3 className="font-satoshi font-bold text-xl lg:text-2xl text-[var(--color-text-primary)] tracking-[-0.01em]">
                  {entry.role}
                </h3>

                {/* Organization */}
                <span className="font-satoshi font-medium text-sm text-[var(--color-text-muted)] tracking-wide">
                  {entry.org}
                </span>

                {/* Description */}
                <p className="font-satoshi font-normal text-sm lg:text-base text-[var(--color-text-subtle)] leading-relaxed mt-1 opacity-90 max-w-2xl">
                  {entry.desc}
                </p>

              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
