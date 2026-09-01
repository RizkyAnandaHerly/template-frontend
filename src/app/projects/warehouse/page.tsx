"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, Cpu, Layers, Star, Database, Flame } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ScrollExpandMedia from "@/components/scroll-expansion-hero";

/* ===================================================================
   WAREHOUSE DETAIL PAGE — Case Study with Scroll Expansion Hero
   =================================================================== */

const SYSTEM_FEATURES = [
  { num: "01", title: "Order Tracking & Monitoring", desc: "Real-time visibility into inbound queues and outgoing shipments." },
  { num: "02", title: "Inventory & Stock Management", desc: "Tracks item details, quantities, packaging configurations, and safety levels." },
  { num: "03", title: "Inbound Goods Management", desc: "Automated checks for supplier delivery correctness and quality inspections." },
  { num: "04", title: "Rack & Pallet Location Tracking", desc: "Hierarchical storage mapping from zones and racks down to specific bin coordinates." },
  { num: "05", title: "Quality Control & Reject Handling", desc: "Dedicated isolation flows for damaged, expiring, or quarantined stock items." },
  { num: "06", title: "Sales Order & Shipping", desc: "Picks, packs, and verifies outbound items against invoice specifications." },
  { num: "07", title: "Stock Opname & Adjustment", desc: "Automated discrepancy reporting and physical count adjustments." },
  { num: "08", title: "Dashboard Analytics & Reporting", desc: "Actionable KPI tracking on operational throughput and space utilization." },
];

const BACKEND_AREAS = [
  "Database Schema & Entity Relationship Design (MySQL)",
  "Atomic Transaction Management (Laravel DB Transactions)",
  "Cascading Location Dropdown API Queries",
  "Automated Activity Logging through Eloquent Observers",
  "Optimized Indexes for Rapid Inventory Searches",
  "Structured RESTful API endpoints for the client interface",
];

const APP_SCREENSHOTS = [
  {
    src: "/images/warehouse/dashboard_w.png",
    label: "Staff Dashboard",
    desc: "Overview KPI cards: inbound, QC pending, restock alerts, dan kapasitas lokasi",
  },
  {
    src: "/images/warehouse/history.png",
    label: "Order Tracking",
    desc: "Pelacakan nomor SO dengan status processing dan riwayat pengiriman",
  },
];

export default function WarehousePage() {
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
        mediaSrc="/images/warehouse/hero.png"
        bgImageSrc="/images/warehouse/bg.svg"
        title="Warehouse Management System"
        date="Internal B2B Product"
        scrollToExpand="Scroll down to read System Architecture"
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
                  Warehouse Control
                </h2>
              </div>

              <div className="h-px w-full bg-[var(--color-border-dark)]" />

              <div className="flex flex-col gap-5 font-satoshi">
                {/* Role */}
                <div className="flex gap-3.5 items-start">
                  <Briefcase className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Role</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">Backend Developer</span>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex gap-3.5 items-start">
                  <Cpu className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Stack</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">Laravel · MySQL · Next.js</span>
                  </div>
                </div>

                {/* Status */}
                <div className="flex gap-3.5 items-start">
                  <Flame className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Status</span>
                    <span className="text-sm font-bold text-[#FFDD00]">Active (70% Complete)</span>
                  </div>
                </div>

                {/* Database */}
                <div className="flex gap-3.5 items-start">
                  <Database className="w-5 h-5 text-[var(--color-accent-primary)] shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">Database</span>
                    <span className="text-sm font-bold text-[var(--color-text-subtle)]">MySQL relational mapping</span>
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
                  A web-based warehouse management system built for B2B environments, designed to bring full operational visibility to internal workflows — from inbound goods to detailed rack configurations and shipping management.
                </p>
              </div>

              {/* 01 · THE CONTEXT */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  01 · SYSTEM CONTEXT
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  Modern inventory management requires high accuracy to avoid misplaced items and logistical bottlenecks. This system was designed to replace paper-based and Excel systems with atomic, database-driven workflows. It structures access across different operational roles, including Gudang staff, managers, and administrators.
                </p>
              </div>

              {/* 02 · DATABASE DESIGN */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  02 · DATABASE STRUCTURE &amp; DESIGN
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  My primary focus was building a resilient MySQL relational schema. Key challenges involved mapping nesting systems (Zones contain Racks, Racks contain Shelves, Shelves contain Bins) while keeping queries performant. I structured transaction indices and implemented database constraints to ensure cascading actions didn't leave orphan records during updates.
                </p>
              </div>

              {/* 03 · API DEVELOPMENT */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  03 · API IMPLEMENTATION &amp; BUSINESS LOGIC
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  I developed RESTful API endpoints using Laravel. To prevent race conditions during concurrently requested stock adjustments, I leveraged atomic transactions (`DB::transaction`). Additionally, I wrote Laravel Eloquent Observers to automate activity logging across all inventory updates for compliance auditing, and optimized database queries to deliver rapid results.
                </p>
              </div>

              {/* 04 · ROADMAP */}
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  04 · STATUS &amp; ROADMAP
                </h3>
                <p className="text-sm lg:text-base leading-relaxed text-[var(--color-text-muted)]">
                  The project has reached 70% of its target roadmap. Completed features include supplier inbound flows, real-time location mapping, and order assignment. The remaining 30% will focus on shipping tracking APIs and third-party logistics (3PL) integrations.
                </p>
              </div>

              {/* System Features Grid */}
              <div className="flex flex-col gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  System Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SYSTEM_FEATURES.map((feat) => (
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

              {/* Backend Focus Areas */}
              <div className="flex flex-col gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                  Backend Focus Areas
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {BACKEND_AREAS.map((area, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs md:text-sm text-[var(--color-text-subtle)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-primary)] shrink-0" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* App Screenshots Gallery */}
              <div className="flex flex-col gap-6 pt-6 border-t border-[var(--color-border-dark)]">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-lg lg:text-xl text-[var(--color-text-primary)]">
                    System Screenshots
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Real screens from the Warehouse Management System.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
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
                      {/* Screenshot container */}
                      <div className="relative aspect-[9/19.5] rounded-2xl overflow-hidden border border-[var(--color-border-dark)] bg-[var(--color-surface-dark)] transition-transform duration-300 ease-out group-hover:scale-[1.02] group-hover:border-[var(--color-accent-primary)]/20">
                        <Image
                          src={screen.src}
                          alt={`Warehouse ${screen.label} screenshot`}
                          fill
                          sizes="(max-width: 768px) 90vw, 40vw"
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
