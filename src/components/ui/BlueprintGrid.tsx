"use client";

/* ===================================================================
   BLUEPRINT GRID — Global Signature Element
   The portfolio's visual identity: technical drafting-board aesthetic.
   
   Features:
   - SVG ruler markings along left and right viewport edges
   - Dimension pixel labels as design accents
   - Extremely subtle: opacity 0.04–0.06
   - Hidden on mobile (< 768px), visible on desktop
   - pointer-events: none, fixed position, lowest z-index
   
   Matches "Technical Builder" identity.
   Inspired by nazwatk.site dimension markers.
   =================================================================== */

const RULER_MARKS = [0, 60, 120, 180, 240, 320, 400, 480, 560, 640, 720, 800, 900, 1000];

export default function BlueprintGrid() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[1] hidden md:block"
      aria-hidden="true"
    >
      {/* Left ruler */}
      <svg
        className="absolute left-0 top-0 h-full w-8"
        preserveAspectRatio="none"
      >
        {/* Vertical ruler line */}
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="100%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.04]"
        />

        {/* Tick marks and labels */}
        {RULER_MARKS.map((y) => (
          <g key={`left-${y}`}>
            {/* Tick */}
            <line
              x1="12"
              y1={y}
              x2="20"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-white/[0.06]"
            />
            {/* Label */}
            <text
              x="4"
              y={y + 3}
              className="fill-white/[0.05]"
              style={{
                fontSize: "7px",
                fontFamily: "var(--font-satoshi), monospace",
              }}
            >
              {y}
            </text>
          </g>
        ))}
      </svg>

      {/* Right ruler */}
      <svg
        className="absolute right-0 top-0 h-full w-8"
        preserveAspectRatio="none"
      >
        {/* Vertical ruler line */}
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="100%"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.04]"
        />

        {/* Tick marks and labels */}
        {RULER_MARKS.map((y) => (
          <g key={`right-${y}`}>
            <line
              x1="12"
              y1={y}
              x2="20"
              y2={y}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-white/[0.06]"
            />
            <text
              x="22"
              y={y + 3}
              className="fill-white/[0.05]"
              style={{
                fontSize: "7px",
                fontFamily: "var(--font-satoshi), monospace",
              }}
            >
              {y}
            </text>
          </g>
        ))}
      </svg>

      {/* Top horizontal ruler accent */}
      <svg
        className="absolute top-0 left-8 right-8 h-4"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="8"
          x2="100%"
          y2="8"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-white/[0.03]"
        />
      </svg>

      {/* Corner dimension markers — top-left */}
      <div
        className="absolute top-6 left-10 flex items-center gap-1"
        style={{ opacity: 0.04 }}
      >
        <div className="w-px h-3 bg-white" />
        <span
          className="text-white font-satoshi"
          style={{ fontSize: "8px", letterSpacing: "0.05em" }}
        >
          1280
        </span>
        <div className="w-px h-3 bg-white" />
      </div>

      {/* Corner dimension markers — top-right */}
      <div
        className="absolute top-6 right-10 flex items-center gap-1"
        style={{ opacity: 0.04 }}
      >
        <div className="w-px h-3 bg-white" />
        <span
          className="text-white font-satoshi"
          style={{ fontSize: "8px", letterSpacing: "0.05em" }}
        >
          px
        </span>
        <div className="w-px h-3 bg-white" />
      </div>
    </div>
  );
}
