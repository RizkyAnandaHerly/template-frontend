<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

<!-- BEGIN:project-agent-rules -->
# Project: Rizky Ananda Herly Portfolio

## MANDATORY READING BEFORE ANY TASK
Before starting ANY task, agent MUST read these files in order:
1. `CLAUDE.md` — project rules and conventions
2. `.context/content.md` — all website copy (no improvising text)
3. `.context/component-map.md` — which library goes where
4. `.context/design-tokens.md` — colors, fonts, spacing
5. `design-system/MASTER.md` — generated design system

## AGENT BEHAVIOR RULES
- NEVER generate placeholder text — all copy comes from content.md
- NEVER install libraries not listed in component-map.md
- ALWAYS use App Router patterns, never Pages Router
- ALWAYS verify component exists before importing
- When unsure about a component API, check node_modules docs first
- Build ONE section at a time — do not attempt multiple sections in one task
- After each section, confirm with user before proceeding to next

## TASK BREAKDOWN PROTOCOL
For each new section request:
1. State which files you read
2. Confirm the component(s) that will be used (from component-map.md)
3. Confirm the copy/text that will be used (from content.md)
4. THEN write the code
<!-- END:project-agent-rules -->