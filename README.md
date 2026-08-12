# Artifact Learning: website

This repository is the implementation home for the Artifact Learning website: brand and UX exploration,
the coded design system, the multi-page publication candidate, case studies and deployment configuration.

**Current phase: Phase 7: brand-system integration.** The approved homepage, multi-page routes,
representative proof system and Artifact masterbrand are implemented. Publication remains blocked until
a verified contact destination and the ITC Avant Garde licensing/public-repository decision are resolved.
See `docs/design-system.md` and the Phase 6 publication-readiness audit.

## Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`). Routes:

| Route | What it is |
|---|---|
| `/` | Artifact homepage |
| `/services` | Services overview |
| `/work` | Selected Work overview |
| `/work/:slug` | Publication-safe Work detail |
| `/approach` | Methodology and product-improvement model |
| `/platform` | Artifact Platform / R&D |
| `/about` | Integrated practice |
| `/contact` | Contact preparation and integration status |

Archived Phase 1 concepts remain available under `/archive` in local development only. Their source is
preserved but withheld from production builds because it contains historical placeholder behaviour.

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
  strategy.md                  Phase 1A working strategy (positioning, IA, GH relationship, risks)
  wireframes/                   Mid-fidelity wireframes for each archived Phase 1 direction
  consolidation-decision.md     Phase 2 Keep/Adapt/Remove/New decision record
  design-system.md              Phase 2 design system reference (tokens, components, system model)
src/
  design-system/                The coded Artifact design system: Button, NavLink, Tag,
                                 MetadataRow, Section, LoopDiagram, DataStrip, WorkFeature.
                                 Reads tokens only; no hardcoded colour or concept-specific styling.
  home/                         The consolidated homepage (the primary `/` route) and its sections.
  content/shared.ts             Live copy and content for the consolidated homepage.
  content/legacy.ts             Frozen Phase 1 content used only by the archived concepts, so they
                                 don't silently drift when the live homepage content changes.
  concepts/a|b|c/                Archived Phase 1 concepts, now served under /archive/*. Self-contained:
                                 own theme tokens, own components. Not part of the design system.
  components/layout/            Framework-agnostic layout primitives (Container, SkipLink, Reveal)
                                 shared by both the design system and the archive.
  styles/                       tokens.css (the v0.2 token architecture), fonts.css (self-hosted
                                 type), global.css, reset.css.
  assets/fonts/                 Self-hosted ITC Avant Garde Gothic Std files (Medium/Demi/Bold only).
```

## Licensing note

`src/assets/fonts/` contains three weights of ITC Avant Garde Gothic Std, licensed to Glenn Hammond
personally (the same licence already used for `glennhammond.com`). The repository is public, but no
licence terms confirming public redistribution or use on `artifactlearning.com` were found here. This is
a material publication blocker: confirm the licence and repository exposure, or approve a compliant
private/font-delivery approach before public launch. Do not infer permission or substitute a typeface
without explicit design/legal approval. Source Sans 3, IBM Plex Sans and IBM Plex Mono are SIL Open Font
Licence, self-hosted from `@fontsource`.

## Status of colour and typography

Colour and typography are now resolved against `Artifact Learning Brand Identity & Digital Design
Language v0.2`: Territory C (Ink / Paper / Signal), the real Avant Garde/Source Sans 3/IBM Plex family,
and the confirmed geometry and motion values. See `docs/design-system.md` for the full reference.

## Review gate

This phase stops after the consolidated homepage, design system, system model, responsive/accessibility/
performance QA and documentation are complete and validated. Full Work archive, complete case-study
pages, Approach/Artifact/Studio pages, Insights, Lab and public deployment are deliberately out of scope
until Glenn reviews this phase.
