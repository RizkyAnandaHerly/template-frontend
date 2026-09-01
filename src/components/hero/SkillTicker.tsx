"use client";

import { Marquee } from "@/components/ui/marquee";
import {
  LaravelOriginal,
  MysqlOriginal,
  NextjsOriginal,
  JavaOriginal,
  CsharpOriginal,
} from "devicons-react";
import {
  Terminal,
  Database,
  Code2,
  Briefcase,
  TrendingUp,
  GitBranch,
  Cpu,
  Workflow,
  Users,
  CheckSquare,
  MessagesSquare,
  Sparkles,
} from "lucide-react";

/* ===================================================================
   SKILL TICKER — from content.md → SECTION 1 → Skill Ticker
   MagicUI Marquee: double rows, reversed, with devicons and custom pills
   
   v2 CHANGES:
   - Edge fade masks moved to HeroSection parent wrapper
   - Improved hover interaction: border accent on hover
   - Easing refinements
   =================================================================== */

const SKILLS_ROW_1 = [
  { label: "Backend Development", icon: Terminal, type: "lucide" },
  { label: "Database Architecture", icon: Database, type: "lucide" },
  { label: "SQL", icon: Code2, type: "lucide" },
  { label: "Laravel", icon: LaravelOriginal, type: "devicon" },
  { label: "MySQL", icon: MysqlOriginal, type: "devicon" },
  { label: "Next.js", icon: NextjsOriginal, type: "devicon" },
  { label: "C#", icon: CsharpOriginal, type: "devicon" },
  { label: "Java", icon: JavaOriginal, type: "devicon" },
  { label: "API Design", icon: Cpu, type: "lucide" },
] as const;

const SKILLS_ROW_2 = [
  { label: "Project Management", icon: Briefcase, type: "lucide" },
  { label: "Product Strategy", icon: TrendingUp, type: "lucide" },
  { label: "System Analysis", icon: GitBranch, type: "lucide" },
  { label: "Business Planning", icon: Workflow, type: "lucide" },
  { label: "Cross-functional Collaboration", icon: Users, type: "lucide" },
  { label: "Technical Documentation", icon: CheckSquare, type: "lucide" },
  { label: "Requirement Analysis", icon: Sparkles, type: "lucide" },
  { label: "Stakeholder Coordination", icon: MessagesSquare, type: "lucide" },
  { label: "Problem Solving", icon: Sparkles, type: "lucide" },
] as const;

interface SkillItemProps {
  label: string;
  icon: React.ElementType;
  type: "devicon" | "lucide";
}

function SkillItem({ label, icon: Icon, type }: SkillItemProps) {
  return (
    <span className="flex items-center gap-2.5 text-xs md:text-sm font-medium tracking-wide whitespace-nowrap text-[var(--color-text-muted)] bg-[var(--color-surface-dark)] border border-[var(--color-border-dark)] py-2 px-4.5 rounded-full hover:border-[var(--color-accent-primary)]/40 hover:text-white transition-all duration-200">
      {type === "devicon" ? (
        <Icon size={16} className="shrink-0" />
      ) : (
        <Icon className="w-4 h-4 text-[var(--color-accent-primary)] shrink-0" />
      )}
      {label}
    </span>
  );
}

export default function SkillTicker() {
  return (
    <div className="w-full overflow-hidden py-4 flex flex-col gap-4">
      {/* Row 1 — Normal direction (Right to Left) */}
      <Marquee
        className="[--duration:45s] [--gap:2rem]"
        pauseOnHover={false}
        repeat={3}
      >
        {SKILLS_ROW_1.map((skill) => (
          <SkillItem key={skill.label} {...skill} />
        ))}
      </Marquee>

      {/* Row 2 — Reversed direction (Left to Right) */}
      <Marquee
        className="[--duration:45s] [--gap:2rem]"
        pauseOnHover={false}
        reverse
        repeat={3}
      >
        {SKILLS_ROW_2.map((skill) => (
          <SkillItem key={skill.label} {...skill} />
        ))}
      </Marquee>
    </div>
  );
}
