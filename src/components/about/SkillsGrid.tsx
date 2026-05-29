"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { BentoGrid } from "@/components/ui/bento-grid";
import {
  Code2,
  Database,
  ClipboardList,
  Lightbulb,
  GitBranch,
  Users,
} from "lucide-react";

/* ===================================================================
   SKILLS GRID — MagicUI BentoGrid + BorderBeam on hover
   component-map.md: About section, sub-component 3
   Content: 6 skills from content.md → SECTION 2B
   Light section colors
   =================================================================== */

const SKILLS = [
  {
    icon: Code2,
    title: "Backend Development",
    description:
      "Building server-side logic, REST APIs, and database-driven applications using Laravel, and C#.",
    tag: "Core",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Designing schemas, writing optimized queries, and managing relational databases. Teaching SQL at laboratory level.",
    tag: "Core",
    colSpan: "lg:col-span-1",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description:
      "Planning programs, managing timelines, delegating tasks, and producing accountability reports (LPJ).",
    tag: "Core",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    description:
      "Translating business problems into PRDs, FRDs, and product roadmaps. Developed business plan for 1st place hackathon.",
    tag: "Supporting",
    colSpan: "lg:col-span-1",
  },
  {
    icon: GitBranch,
    title: "System Analysis",
    description:
      "Mapping requirements to system logic, identifying process gaps, and structuring functional specifications.",
    tag: "Supporting",
    colSpan: "lg:col-span-1",
  },
  {
    icon: Users,
    title: "Cross-functional Collaboration",
    description:
      "Coordinating between UI/UX, engineering, and stakeholder teams across organizational and hackathon environments.",
    tag: "Supporting",
    colSpan: "lg:col-span-1",
  },
] as const;

import SpotlightCard from "@/components/reactbits/SpotlightCard";

function SkillCard({
  icon: Icon,
  title,
  description,
  tag,
  colSpan,
  delay,
}: (typeof SKILLS)[number] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const isCore = tag === "Core";

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`group relative rounded-2xl cursor-default overflow-hidden ${colSpan}`}
      style={{
        border: "1px solid var(--color-border-light)",
      }}
    >
      <SpotlightCard
        className="w-full h-full p-6"
        spotlightColor={isCore ? "rgba(255, 221, 0, 0.08)" : "rgba(94, 148, 179, 0.08)"}
        spotlightSize={250}
        style={{
          background: "var(--color-surface-light)",
        }}
      >
        {/* BorderBeam hover accent — yellow for core, teal for supporting */}
        <BorderBeam
          size={60}
          duration={8}
          colorFrom={isCore ? "#FFDD00" : "#5E94B3"}
          colorTo={isCore ? "#FFB800" : "#2D4C61"}
          borderWidth={1.5}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
        />

        {/* Tag badge */}
        <div className="flex items-center justify-between mb-4 relative z-20">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: isCore ? "rgba(255,221,0,0.12)" : "rgba(94,148,179,0.12)" }}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: isCore ? "var(--color-accent-primary)" : "var(--color-accent-teal)" }}
            />
          </div>
          <span
            className="font-satoshi font-medium text-[10px] uppercase tracking-[0.08em] px-2 py-1 rounded-full animate-pulse"
            style={{
              background: isCore ? "rgba(255,221,0,0.08)" : "rgba(94,148,179,0.08)",
              color: isCore ? "#9A8200" : "var(--color-accent-deep)",
            }}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-satoshi font-bold text-base mb-2 leading-snug relative z-20"
          style={{ color: "var(--color-text-dark)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="font-satoshi font-normal text-sm leading-relaxed relative z-20"
          style={{ color: "var(--color-text-dark-muted)" }}
        >
          {description}
        </p>
      </SpotlightCard>
    </motion.div>
  );
}

export default function SkillsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref}>
      {/* Section label */}
      <motion.p
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="font-satoshi font-medium text-sm uppercase tracking-[0.08em] mb-8"
        style={{ color: "var(--color-text-dark-muted)" }}
      >
        01.1 · MY SKILLS
      </motion.p>

      {/* BentoGrid — 3 cols desktop, 1 col mobile */}
      <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.title} {...skill} delay={i * 0.08} />
        ))}
      </BentoGrid>
    </div>
  );
}
