# Artifact design system — v0.x

Status: **consolidated v0.x foundation**, built directly from `Artifact Learning Brand Identity &
Digital Design Language v0.2`. This is the first coded, single design system for Artifact Learning —
not yet the complete public website. See `docs/consolidation-decision.md` for how it was derived from
the three Phase 1 concepts, and §14 below for what deliberately isn't built yet.

## Typography

Four families, four roles — never mixed:

| Role | Family | Where |
|---|---|---|
| `--type-display` / `--type-heading` | ITC Avant Garde Gothic Std (500/600/700) | Display, H1, H2, selected H3, wordmark |
| `--type-body` | Source Sans 3 (400/400i/600) | Body copy, case studies, lead paragraphs |
| `--type-ui` | IBM Plex Sans (400/500) | Nav, buttons, labels, metadata |
| `--type-data` | IBM Plex Mono (400) | Genuine event/data strings only — never decorative |

Avant Garde is self-hosted from `src/assets/fonts/` (Medium, Demi, Bold only — the weights the system
actually uses). It is licensed to Glenn Hammond; see the README licensing note before this repo or its
font files are made public. Source Sans 3, IBM Plex Sans and IBM Plex Mono are self-hosted from
`@fontsource` (SIL OFL, latin subset only) rather than a CDN.

Avant Garde never drops below `--text-h3` (~20px) — v0.2 found it breaks down in long headings, body
copy and dense UI under that size. Body, UI and data tokens (`--text-body`, `--text-ui`, `--text-data`)
never use the display family.

## Colour

Territory C — Ink, Paper, Signal — OKLCH is the source of truth, hex is the fallback:

| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--color-ink` | `16% 0.016 258` | `#12141b` | Text on Paper, dark surface |
| `--color-paper` | `97% 0.006 95` | `#f7f5f0` | Default background |
| `--color-signal` | `84% 0.19 128` | `#d7f24a` | The one accent — see below |
| `--color-text-secondary` | `52% 0.012 258` | `#6c7078` | Secondary text, ≈4.7:1 on Paper |
| `--color-border` | `88% 0.008 258` | `#d9dade` | Dividers, panel borders |
| `--color-surface-strong` | `22% 0.018 258` | `#1c202a` | Elevated surface on Ink |

### The Signal principle

**Signal identifies consequence. It does not decorate.** It appears in exactly three places in this
system: the primary button fill, the active/selected state of a loop-diagram node, and the pulse that
travels the loop diagram on a meaningful state change. It is never a section background, never applied
to more than one element in a viewport, and never used as text on Paper (contrast ≈1.6:1 — fails; see
v0.2 §05). Where a component needs emphasis without a second accent, it uses Ink weight/contrast, not
colour.

### Dark surface (Ink)

Dark is an occasional technical-context mode, not the homepage default — currently used only by the
Model section (`<Section tone="ink">`). `Section.css` remaps the semantic tokens (`--color-bg`,
`--color-text`, `--color-focus`, etc.) inside `.ds-section--ink`, so every component underneath resolves
correct dark-surface colours automatically — components should never hardcode `--color-ink` or
`--color-paper` directly (the one exception is the primary button and the Signal-fill tag, which are
always Ink-on-Signal regardless of surface, per v0.2's confirmed accessible combination).

## Layout & geometry

Three containment tiers (Phase 2.2 §4 — `Container` / `Section`'s `width` prop), not one shared
max-width for every section:

| Tier | Max width | Used by |
|---|---|---|
| `page` | `--page-max` (1440px) | nav, hero, Work, the dark Model section, footer |
| `content` | `--content-max` (1180px) | Problem, Approach, the ecosystem section |
| `narrow` | reading measure + gutter (~66ch) | the final CTA |

The gutter (`--page-gutter`) is fluid — `clamp(1.5rem, 1rem + 2.2vw, 4rem)` — and keeps growing past the
old fixed cap, so outer whitespace increases gracefully on very wide screens instead of the grid
stretching edge to edge (verified: gutters grow from 144px at 1728px viewport to 560px at 2560px, while
the page grid itself locks at 1440px). Breakpoints: 480 / 700 / 960 / 1200 / 1560 (documented in
`tokens.css`, used literally in media queries — no custom-media build plugin). Panels, images and
diagrams: `0px` radius (`--radius-panel`). Controls: `2px` (`--radius-control`). Nodes/status indicators
only: `50%` (`--radius-node`). No pill-shaped components.

Section rhythm varies deliberately (Phase 2.2 §9) via `Section`'s `density` prop — `compact`
(`--section-y-compact`), `default` (`--section-y`) or `expansive` (`--section-y-expansive`, used only by
the Model section) — rather than every section sharing one padding value.

**Note:** `src/components/layout/Container.tsx` previously never imported its own stylesheet
(`Container.css`), so every `.container` element — across both the homepage and the archive — rendered
completely unstyled (100% viewport width, zero padding) since Phase 1. This was the root cause of most
of the Phase 2.2 containment complaints and was fixed as part of this pass; see the Phase 2.2 final
report for detail.

## Motion

- `--duration-state` (140ms) for hover/focus/link state changes.
- `--duration-reveal` (280ms) for the one-shot section reveal and the loop diagram's pulse.
- The loop diagram's pulse fires **once** when the diagram scrolls into view and replays once per node
  activation — never a continuous loop (v0.2 §11 is explicit: "never looping"; Concept B's original
  6-second `repeatCount="indefinite"` pulse was corrected during consolidation — see
  `docs/consolidation-decision.md`).
- `prefers-reduced-motion: reduce` collapses all durations to 1ms and the diagram never triggers its
  travel animation — the loop-back arrow is drawn statically either way, so the relationship it shows is
  never motion-dependent.

## Accessibility

- Contrast is inherited directly from v0.2's verified table: Ink/Paper ≈16:1, secondary text/Paper
  ≈4.7:1, Ink-on-Signal ≈10:1, Signal-on-Ink (fill) ≈9:1. Signal is never used as text on Paper.
- Focus rings are 2px solid in the surface's foreground colour with a 3px offset, always visible,
  never animated in (`--focus-ring` in `tokens.css`, remapped automatically on dark surfaces).
- The loop diagram has a visually-hidden text equivalent describing the full loop and the active node's
  description, plus `aria-live="polite"` on the description panel and `title`/`desc` on the SVG.
- All interactive diagram nodes are real `<button>` elements; the circular and stacked diagram variants
  are swapped with CSS `display` at the 700px breakpoint, so only one set of controls is ever in the tab
  order.
- Buttons meet the WCAG 2.2 AA 24px target-size minimum; primary/secondary buttons and the nav toggle
  are 44px; text-variant links get an invisible expanded hit area rather than a larger visible button.

## Component family (`src/design-system/`)

| Component | Purpose |
|---|---|
| `Button` | primary (Signal fill), secondary (bordered), text (underline) — all states |
| `NavLink` | primary nav item, quiet by default, Signal underline for the active anchor |
| `Tag` | small label/status pill, neutral or Signal tone |
| `Section` | kicker + heading + one-shot reveal + light/dark tone switch |
| `LoopDiagram` | the signature system visual — circular (default) + stacked (compact) variants, per-node illustrative artefact on selection |
| `DataStrip` | labelled mono event/data panel, with "active" (Signal-marked) and "muted" states |
| `WorkFeature` / `WorkList` | the one full featured case study (definitions, tags, composite figure) + short text-led secondary list |
| `EventTraceList` | a vertical rail of learning events, one marked active in Signal — the hero's data artefact |
| `WorkComposite` | a multi-artefact stand-in for real work imagery — primary crop + overlapping detail crop + token specimen rail, at different scales |

`ArtifactTech` and `Capability` (in `src/home/components/`) each render five/four *distinct* per-item visual specimens defined inline rather than a shared generic card — a component tree, live component previews, a mono event object, a flow diagram and a locally-dark inspector fragment for the ecosystem; a fidelity progression, three build-context crops, a system map and another progression for the capabilities. See `docs/consolidation-decision.md`-style reasoning inline in those files' comments — content drives the composition rather than forcing every pattern into one generic card API (v0.3 content doc, "Final implementation principles").

Import from `src/design-system` (barrel export). Components read semantic tokens only — no component
hardcodes a hex value, an OKLCH literal outside `tokens.css`, or a concept-specific class name.

## System model

Refined per v0.2 §10 — **Experience → Signals → Data → Insight → Improvement**, looping back to
Experience. Platform (Moodle, LMS environments, learning portals) is deliberately not a stage in this
sequence — it's the environment/infrastructure the loop runs on, rendered as a base plane beneath the
ring (circular variant) or a foundation bar beneath the row (stacked variant), never a fifth node with
equal causal weight. This replaces the earlier four-layer Experience/Platform/Data/Insight model used in
Phase 1, which treated Platform as a causal step between Experience and Data — see
`docs/consolidation-decision.md` for why that was corrected.

## Status

This is the **consolidated v0.x foundation** — one coherent token system, one component family, one
resolved homepage direction — not the complete public Artifact Learning website. Out of scope until
Glenn reviews this phase: full Work archive, complete case-study pages, Approach/Artifact/Studio pages,
Insights, Lab, and public deployment (brief §34).

## Archive

The three Phase 1 exploratory concepts are preserved at `/archive/concept-a`, `/archive/concept-b` and
`/archive/concept-c` (index at `/archive`) for reference, using a frozen copy of their original content
(`src/content/legacy.ts`) so they keep reading as what was actually reviewed in Phase 1, independent of
changes to the live homepage content in `src/content/shared.ts` — which has now been rewritten twice
(the v0.2 model refinement, and the v0.3 content pass) without the archive drifting either time. They
are not part of the design system above and should not be used as a reference for new work.
