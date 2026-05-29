"use client";

import { Marquee } from "@/components/ui/marquee";

/* ===================================================================
   SKILL TICKER — from content.md → SECTION 1 → Skill Ticker
   MagicUI Marquee: horizontal, infinite loop, no pause on hover
   =================================================================== */

const SKILLS = [
  "Backend Development",
  "Database Architecture",
  "SQL",
  "Laravel",
  "Project Management",
  "Product Strategy",
  "System Analysis",
  "API Design",
  "Business Planning",
  "Cross-functional Collaboration",
  "MySQL",
  "Next.js",
  "C#",
  "Java",
  "Technical Documentation",
  "Requirement Analysis",
  "Stakeholder Coordination",
  "Problem Solving",
];

function SkillItem({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-4 text-sm font-medium tracking-wide whitespace-nowrap text-[var(--color-text-muted)]">
      <span className="h-1 w-1 rounded-full bg-[var(--color-accent-primary)] shrink-0" />
      {label}
    </span>
  );
}

export default function SkillTicker() {
  return (
    <div className="w-full overflow-hidden py-3">
      <Marquee
        className="[--duration:50s] [--gap:2rem]"
        pauseOnHover={false}
        repeat={3}
      >
        {SKILLS.map((skill) => (
          <SkillItem key={skill} label={skill} />
        ))}
      </Marquee>
    </div>
  );
}
