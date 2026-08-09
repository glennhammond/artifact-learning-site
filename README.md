# Artifact Learning — website

This repository is the implementation home for the Artifact Learning public website: brand exploration, UX exploration, interactive homepage concepts, and — later — the production site, case studies, design tokens and deployment configuration.

**Current phase: Phase 1 — strategy, IA and homepage concept exploration.** Three homepage directions have been built as browser-based React prototypes for design review. This is not the public website yet; see `docs/strategy.md` for the working strategy this phase produced, and the review gate note at the bottom of this file for what happens next.

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`). Routes:

| Route | What it is |
|---|---|
| `/` | Internal concept index — links to all three concepts. Not part of the public site. |
| `/concept-a` | Direction A — Editorial Product Studio |
| `/concept-b` | Direction B — Digital Learning Laboratory |
| `/concept-c` | Direction C — Editorial + Experimental Hybrid |

Other useful scripts:

```bash
npm run build      # production build (tsc -b && vite build)
npm run lint        # eslint
npm run typecheck   # tsc -b --noEmit
npm run preview     # preview a production build locally
```

## Project structure

```
docs/
  strategy.md              Phase 1A working strategy (positioning, IA, GH relationship, risks)
  wireframes/               Mid-fidelity wireframes for each of the three directions
src/
  concepts/a|b|c/           Each homepage concept is self-contained: its own theme tokens,
                             its own components, its own copy treatment. Nothing is shared
                             between concepts except generic layout plumbing (Container,
                             SkipLink, Reveal) and the copy in src/content/shared.ts.
  components/layout/        Framework-agnostic layout primitives used across all concepts
  content/shared.ts         Copy shared verbatim across concepts — variation between
                             concepts is about composition/interaction, not rewritten claims
  routes/                   App routing, including the internal concept index
  styles/                   Shared foundation tokens (spacing, motion, breakpoints, neutral
                             ramp). Colour and display typography are NOT finalised here —
                             see docs/strategy.md §7 and §26 of the original brief.
```

## Status of colour and typography

Colour and typography shown in these prototypes are **exploratory, not final brand decisions** — see `docs/strategy.md`. The Artifact colour palette in particular is intentionally unresolved pending separate brand approval.

## Review gate

This phase stops after the three concepts are built, validated and compared. Full Work section, service pages, Studio, Contact, Artifact ecosystem pages, Insights, Lab and production deployment are deliberately out of scope until a direction (or hybrid) is selected.
