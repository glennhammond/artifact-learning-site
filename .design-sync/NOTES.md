# design-sync notes — artifact-learning-site

## Repo shape

This repo has no library build for its design system — `src/design-system/`
and the shared layout primitives in `src/components/layout/` are compiled
only as part of the whole Vite app (`tsc -b && vite build`, `noEmit: true`
for type-checking, no `.d.ts` ever emitted). There is no Storybook.

To give the converter something dist-shaped, `.design-sync/entry.ts` is a
hand-written synthetic entry (like a package's `dist/index.js`) that
re-exports exactly the 14 components in sync scope and side-effect-imports
`src/styles/global.css` so esbuild's own CSS bundling resolves the real
`@import` chain (reset → tokens → fonts) and inlines the self-hosted woff2
fonts as data URLs — this is more robust than `cfg.cssEntry`'s raw-append
path, which can't follow relative/bare `@import`s in a source file with its
own nested imports.

Because there's no shipped `.d.ts` anywhere, **every component's props
contract comes from `cfg.dtsPropsFor`**, hand-transcribed from each
component's real TypeScript interface (`config.json` — kept up to date by
whoever edits a component's props going forward). `cfg.componentSrcMap`
pins all 14 names to their real source paths (no dist/`.d.ts` exists for
auto-discovery to key off).

**Scope decision (Glenn, first sync):** `src/design-system/` (Button, Tag,
NavLink, Section, LoopDiagram, DataStrip, WorkFeature, WorkList,
EventTraceList, WorkComposite) plus the shared layout primitives Container,
SkipLink, Reveal, VisuallyHidden from `src/components/layout/`. The three
archived Phase 1 concepts under `src/concepts/a|b|c` are explicitly
**excluded** — they're frozen, non-canonical, and not part of the coded
design system.

**Licensing (Glenn, first sync):** `src/assets/fonts/` (ITC Avant Garde
Gothic Std) is licensed to Glenn personally — README's "Licensing note"
flags it shouldn't go into a second commercial context without confirming
license coverage. Glenn confirmed the license covers this Claude Design
project for artifactlearning.com, so the font files are included in the
synced bundle (self-hosted, inlined as data URLs in `_ds_bundle.css`).
**If this repo or its fonts are ever made public, re-check this — the
confirmation was for the Claude Design project, not broader distribution.**

## Known render warns (accepted, don't re-chase)

- `[FONT_MISSING] "Avenir Next"` — this is a deliberate fallback in the
  `--type-display`/`--type-heading` stack (`"ITC Avant Garde Gothic Std",
  "Avenir Next", ui-sans-serif, system-ui, sans-serif`, `src/styles/
  tokens.css`), not a font the DS ships. Avenir Next is an Apple system
  font with no free-distributable web-font source — it's there purely as a
  fallback for users who have it installed, before the chain drops to
  generic `sans-serif`. Nothing to fix; accept the substitute chain as-is.

## Preview authoring

All 14 components (10 from `src/design-system/` incl. `WorkList`, 4 layout
primitives) have authored previews under `.design-sync/previews/`, composed
from the homepage's own real usage in `src/home/components/*` and content
from `src/content/shared.ts` — no invented copy. All cells graded `good` on
the first pass; the only fix needed was `WorkComposite`'s two exports
accidentally sharing the same caption text (`featuredProject.imageNote`
happens to equal the component's own default `label`), which read as
`[RENDER_THIN]` "variants render identically" — fixed by giving the second
export (`CustomCaption`) different caption text. The component's SVG
placeholder geometry is still intentionally identical across every use
(it stands in for imagery, not a per-project illustration) — that part of
the "identical" warning was always correct, not a bug.

`SkipLink`'s default preview renders visibly (the real un-focused state is
`top: -100%`, but that only clips within a positioned/overflow-hidden
ancestor the card harness doesn't reproduce) — this is a harmless capture
artifact, not evidence the component is mis-styled; don't chase it if it
recurs on re-sync.

## Re-sync risks

- `.design-sync/entry.ts` is hand-maintained, not generated. If a new
  component is added to `src/design-system/` or `src/components/layout/`,
  or the shared-primitives scope changes, it (and `cfg.componentSrcMap` +
  `cfg.dtsPropsFor`) needs a matching manual update — nothing detects a
  new export automatically in this repo shape (no `.d.ts` to diff against).
- `cfg.dtsPropsFor` bodies are a hand-transcription of each component's
  real `<Name>Props` interface at sync time. If a component's props change
  in `src/design-system/*.tsx` or `src/components/layout/*.tsx`, the
  `.d.ts` contract synced here will silently drift out of date until
  someone updates the matching `dtsPropsFor` entry.
- `WorkFeature`/`WorkList`'s prop shapes were inlined from `src/content/
  shared.ts`'s `Project`/`CaseStudyStage`/`TraceEvent`/`ModelLayer`
  interfaces (dtsPropsFor bodies can't `import` types, only inline
  structural shapes) — same drift risk if those content types change.
- The playwright/playwright-core versions pinned in `.ds-sync/` (installed
  fresh each session, gitignored) must match whatever chromium build is
  cached in this environment (`ls /opt/pw-browsers` or `~/.cache/ms-
  playwright`) — this session found chromium build 1194 pre-installed and
  used `playwright@1.56.0`/`playwright-core@1.56.0` (the version whose
  `browsers.json` pins revision 1194). A different environment may need a
  different pinned version — see the skill's "Render check" self-heal row.
