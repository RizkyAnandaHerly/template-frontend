"use client";

import { motion, useReducedMotion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";

/* ===================================================================
   TESTIMONIALS SECTION — Section 6 & 7 (LIGHT #F0F4F8)
   v2 Overhaul:
   - Section label: "TESTIMONIALS" (NO numbered prefix)
   - Card design varies slightly to avoid identical-card-grid anti-pattern
   - Improved typography hierarchy (larger quotes)
   - Adjusted marquee speed for readability
   - Easing: ease-out-quart
   =================================================================== */

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent?: boolean; // varies card styling to avoid identical grid
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Rizky has a rare combination of technical depth and product thinking. He doesn't just execute — he understands the why behind every decision.",
    name: "Teammate Name",
    role: "UI/UX Designer · MotionHack Team",
    initials: "TH",
    accent: true,
  },
  {
    quote:
      "Working with Rizky on the database practicum was genuinely helpful. He explained complex SQL concepts clearly and patiently, even for struggling students.",
    name: "Student Name",
    role: "Informatics Student · Telkom University",
    initials: "IS",
  },
  {
    quote:
      "His structured approach to program management kept our team on track. Rizky delivers accountability reports that are actually useful — not just formalities.",
    name: "Colleague Name",
    role: "Program Coordinator · Produktifkuy",
    initials: "PK",
    accent: true,
  },
  {
    quote:
      "From PRD to pitch, Rizky owned the product side completely. The business strategy he built was a big part of why we won.",
    name: "Teammate Name",
    role: "Mobile Developer · MotionHack Team",
    initials: "MH",
  },
  {
    quote:
      "He brings clarity to chaotic situations. Whether it's a tight deadline or a complex requirement, Rizky always finds a structured path forward.",
    name: "Colleague Name",
    role: "Organizational Member · Telkom University",
    initials: "OM",
    accent: true,
  },
];

const CREDENTIALS = [
  "Telkom University — Bachelor of Information Systems (2024–2028)",
  "MotionHack 5.0 — 1st Place Winner",
  "DASPRO Laboratory — Teaching Assistant",
  "Produktifkuy — Program Management Intern",
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className={`w-[300px] md:w-[380px] p-6 md:p-7 rounded-2xl border flex flex-col justify-between select-none transition-colors duration-200 ${
        item.accent
          ? "bg-[var(--color-accent-deep)]/[0.06] border-[var(--color-accent-teal)]/20 hover:border-[var(--color-accent-teal)]/40 min-h-[200px] md:min-h-[220px]"
          : "bg-[var(--color-bg-light-alt)]/80 border-[var(--color-border-light)] hover:bg-[var(--color-bg-light-alt)] min-h-[180px] md:min-h-[200px]"
      }`}
    >
      {/* Quote mark */}
      <div className="flex flex-col gap-3">
        <span
          className="font-clash font-bold text-2xl leading-none select-none"
          style={{ color: "var(--color-accent-teal)", opacity: 0.4 }}
        >
          &ldquo;
        </span>
        <p className="font-satoshi font-normal italic text-sm md:text-base text-[var(--color-text-dark)] leading-relaxed line-clamp-4">
          {item.quote}
        </p>
      </div>

      <div className="flex items-center gap-3 mt-4">
        {/* Avatar with gradient ring */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-satoshi font-bold text-xs select-none"
          style={{
            background: `linear-gradient(135deg, var(--color-accent-teal), var(--color-accent-deep))`,
            color: "white",
          }}
        >
          {item.initials}
        </div>
        <div className="flex flex-col">
          <span className="font-satoshi font-bold text-xs md:text-sm text-[var(--color-text-dark)]">
            {item.name}
          </span>
          <span className="font-satoshi font-medium text-[9px] md:text-[10px] text-[var(--color-text-dark-muted)] uppercase tracking-wider">
            {item.role}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const prefersReducedMotion = useReducedMotion();

  // Split testimonials for alternating row scrolls
  const row1 = [TESTIMONIALS[0], TESTIMONIALS[1], TESTIMONIALS[2]];
  const row2 = [TESTIMONIALS[3], TESTIMONIALS[4], TESTIMONIALS[1]];

  return (
    <section id="testimonials" className="section-light overflow-hidden">
      <div className="container-portfolio">
        {/* ── Section Label — NO numbered prefix ── */}
        <motion.p
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: easeOutQuart }}
          className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-12 lg:mb-16"
          style={{ color: "var(--color-text-dark-muted)" }}
        >
          TESTIMONIALS
        </motion.p>
      </div>

      {/* ── Infinite Marquees Row 1 & 2 ── */}
      <div className="flex flex-col gap-6 w-full max-w-[100vw]">
        {/* Row 1: Leftward Marquee — slower for readability */}
        <Marquee pauseOnHover className="py-2 [--duration:40s]">
          {row1.map((item, idx) => (
            <TestimonialCard key={`row1-${idx}`} item={item} />
          ))}
        </Marquee>

        {/* Row 2: Rightward / Reversed Marquee */}
        <Marquee pauseOnHover reverse className="py-2 [--duration:40s]">
          {row2.map((item, idx) => (
            <TestimonialCard key={`row2-${idx}`} item={item} />
          ))}
        </Marquee>
      </div>

      <div className="container-portfolio">
        {/* ── Section 7: Credentials Ticker ── */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-[var(--color-border-light)]">
          <motion.h3
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: easeOutQuart }}
            className="font-satoshi font-medium text-xs lg:text-sm uppercase tracking-[0.1em] text-[var(--color-text-dark-muted)] text-center mb-8"
          >
            Recognition & Education
          </motion.h3>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Marquee
              className="py-2 [--duration:30s] overflow-hidden"
              pauseOnHover
            >
              {CREDENTIALS.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 mx-8 font-satoshi font-bold text-xs md:text-sm uppercase tracking-wider text-[var(--color-accent-deep)] select-none whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-teal)]" />
                  <span>{cred}</span>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
