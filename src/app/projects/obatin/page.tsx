"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Award, Calendar, Users, Briefcase, Sparkles, Layers } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ScrollExpandMedia from "@/components/scroll-expansion-hero";

/* ===================================================================
   OBATIN DETAIL PAGE — Case Study with Scroll Expansion Hero
   =================================================================== */

const KEY_FEATURES = [
  { num: "01", title: "Offline Medication Management", desc: "Designed for offline reliability so users can access their schedules without active internet." },
  { num: "02", title: "Push Notification Reminders", desc: "Local alarms and schedules running on device hardware to guarantee reminders trigger." },
  { num: "03", title: "Medication Scheduling & Calendar", desc: "An easy-to-use, accessible visual grid layout mapping doses across months." },
  { num: "04", title: "Dashboard & Statistics", desc: "Simple analytics representing overall medication consumption rates for medical visits." },
  { num: "05", title: "30-Day Daily History", desc: "Tracks compliance trends so family members can monitor adherence over time." },
  { num: "06", title: "Auto Quantity Management", desc: "Calculates remaining pills automatically and alerts caregivers when refills are due." },
  { num: "07", title: "Caregiver Monitoring View", desc: "Escalated alerts sent to designated monitors if a critical dosage is missed." },
];

const DELIVERABLES = [
  "Business Plan & Financial Projection",
  "Product Requirements Document (PRD)",
  "Functional Requirements Document (FRD)",
  "Product strategy & market positioning",
  "Cross-functional team coordination (UI/UX + Mobile Dev)",
  "Pitch deck narrative & product storytelling",
];

const APP_SCREENSHOTS = [
  {
    src: "/images/obatin/Dashboard.png",
    label: "Dashboard",
    desc: "Jadwal harian, progress bar, dan daftar obat aktif",
  },
  {
    src: "/images/obatin/Penjadwalan Obat.png",
    label: "Jadwal Obat",
    desc: "Calendar view dengan status Selesai, Lewat, dan Belum",
  },
  {
    src: "/images/obatin/History Page.png",
    label: "History",
    desc: "Ringkasan kepatuhan 90% dan detail riwayat harian",
  },
  {
    src: "/images/obatin/Splash Screen.png",
    label: "Splash Screen",
    desc: "Branding ObatIn — Selalu ingat, selalu sehat",
  },
];

export default function ObatinPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="bg-[#09090A] min-h-screen text-[var(--color-text-primary)]">
      
      {/* Back Navigation Bar */}
      <div className="fixed top-0 left-0 w-full z-50 p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="container-portfolio">
          <Link
            href="/#work"
            className="pointer-events-auto inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[var(--color-bg-dark)]/90 border border-[var(--color-border-dark)] font-satoshi font-semibold text-xs md:text-sm uppercase tracking-wider text-[var(--color-text-subtle)] hover:text-[var(--color-accent-primary)] hover:border-[var(--color-accent-primary)]/40 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </Link>
        </div>
      </div>

      {/* Scroll Expansion Hero */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/images/obatin/hero.png"
        bgImageSrc="/images/obatin/bg.svg"
        title="ObatIn Case Study"
        date="Hackathon 2026"
        scrollToExpand="Scroll down to read Case Study"
        textBlend={false}
      >
        {/* Case Study Content (Fades in when fully expanded) */}
        <div className="w-full max-w-6xl mx-auto mt-8 lg:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* ── Left Sticky Sidebar (Metadata) ── */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-8 bg-[var(--color-surface-dark)] border border-[var(--color-border-dark)] rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
              <div className="flex flex-col gap-1">
                <span className="font-satoshi font-medium text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                  Project Details
                </span>
                <h2 className="font-satoshi font-bold text-2xl text-[var(--color-text-primary)]">
                  ObatIn
                </h2>
              </div>

              <div className="h-px w-full bg-[var(--color-border-dark)]" />

              <div className="flex flex-col gap-5 font-satoshi">
                {/* Role */}
                <div className="flex gap-3.5 items-start">
                  <Briefcase className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Role</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">Project Manager (Hustler)</span>
                  </div>
                </div>

                {/* Event */}
                <div className="flex gap-3.5 items-start">
                  <Sparkles className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Event</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">MotionHack × Mobile Innovation Lab</span>
                  </div>
                </div>

                {/* Team size */}
                <div className="flex gap-3.5 items-start">
                  <Users className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Team</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">3 people (2 Hipsters, 1 Hacker)</span>
                  </div>
                </div>

                {/* Result */}
                <div className="flex gap-3.5 items-start">
                  <Award className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Result</span>
                    <span className="text-sm font-bold text-[#4ADE80]">🏆 1st Place Winner</span>
                  </div>
                </div>

                {/* Date */}
                <div className="flex gap-3.5 items-start">
                  <Calendar className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Year</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right Content Area ── */}
            <div className="lg:col-span-8 flex flex-col gap-12 lg:gap-16 font-satoshi">
              
              {/* Overview block */}
              <div className="flex flex-col gap-4">
                <span className="font-bold text-xs uppercase tracking-[0.1em] text-[var(--color-accent-primary)]">
                  Overview
                </span>
                <p className="text-lg lg:text-xl font-normal leading-relaxed text-[var(--color-text-subtle)]">
                  ObatIn is a mobile application designed to help elderly patients and their caregivers manage medication routines effectively. Built with an offline-first architecture to ensure accessibility in low-connectivity environments, it actively supports SDG 3 — Good Health and Well-Being.
                </p>
              </div>

              {/* 01. The Problem */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  01 · THE PROBLEM
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  Many elderly patients and busy individuals struggle to adhere to complex medication schedules. Forgotten doses or incorrect timing can lead to severe health complications. Existing solutions are either too complicated for non-tech-savvy users or lack emotional accountability — which is often the strongest driver of health compliance.
                </p>
              </div>

              {/* 02. The Solution */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  02 · THE SOLUTION
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  ObatIn introduces an accountability-driven medication reminder system designed specifically for family groups. Instead of standard, cold notifications, ObatIn lets family members record custom voice memos for reminders (&ldquo;Hi Dad, time for your heart pill!&rdquo;). If a medication is missed, the system escalates notification to designated family monitors, combining UX clarity with emotional accountability.
                </p>
              </div>

              {/* 03. The Process */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  03 · THE PROCESS
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  We worked in a tight 24-hour sprint. As the Project Manager, I spearheaded the PRD (Product Requirements Document), mapped the user journey flows, and validated the business model viability. We spent 4 hours on rapid prototyping and user testing with senior subjects, ensuring the interface had ultra-large tap targets and simplified text paths, while the developer focused on Swift/Kotlin implementations.
                </p>
              </div>

              {/* 04. The Impact */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  04 · THE IMPACT
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  ObatIn won 1st Place at MotionHack 5.0 out of dozens of competing innovations. Our presentation was praised by judges for high UX clarity, immediate market practicality, and the unique integration of family accountability loops. The project established a solid framework for elderly-centric accessible design.
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="flex flex-col gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {KEY_FEATURES.map((feat) => (
                    <div key={feat.num} className="bg-[var(--color-surface-dark)] border border-[var(--color-border-dark)] rounded-xl p-5 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[var(--color-accent-primary)]">{feat.title}</span>
                        <span className="font-clash font-bold text-xs opacity-40">{feat.num}</span>
                      </div>
                      <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Role & Deliverables */}
              <div className="flex flex-col gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  My Deliverables
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {DELIVERABLES.map((deliv, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs md:text-sm text-[var(--color-text-subtle)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* App Screenshots Gallery */}
              <div className="flex flex-col gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                    App Screenshots
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Real screens from the ObatIn mobile application.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                  {APP_SCREENSHOTS.map((screen, index) => (
                    <motion.div
                      key={screen.label}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { opacity: 0, y: 20 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: [0.25, 1, 0.5, 1],
                      }}
                      className="flex flex-col gap-3 group"
                    >
                      {/* Phone frame container */}
                      <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-[var(--color-border-dark)] bg-[var(--color-surface-dark)] transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:border-[var(--color-accent-primary)]/20">
                        <Image
                          src={screen.src}
                          alt={`ObatIn ${screen.label} screenshot`}
                          fill
                          sizes="(max-width: 768px) 45vw, 20vw"
                          className="object-cover object-top"
                        />
                        {/* Bottom gradient overlay */}
                        <div
                          className="absolute bottom-0 left-0 right-0 h-1/5 pointer-events-none"
                          style={{
                            background:
                              "linear-gradient(to bottom, transparent, rgba(9, 9, 10, 0.5))",
                          }}
                        />
                      </div>
                      {/* Label */}
                      <div className="flex flex-col gap-0.5">
                        <span className="font-satoshi font-bold text-xs text-[var(--color-text-primary)]">
                          {screen.label}
                        </span>
                        <span className="font-satoshi text-[10px] text-[var(--color-text-muted)] leading-relaxed">
                          {screen.desc}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </ScrollExpandMedia>

    </main>
  );
}
