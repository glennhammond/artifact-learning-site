# Phase 2 — Homepage Commercial Repositioning + Implementation Report

Implements `docs/strategy/phase-1-strategic-ia-homepage-definition.md` on the existing
design-system foundation. No new frontend framework, CSS framework, or dependency was introduced;
no new routes were created; the design-system foundation (tokens, Ink/Paper/Signal, containment,
geometry, motion, accessibility discipline) is unchanged.

## 1. Summary

The homepage now leads with the commercial proposition ("Develop capability, not just completion.")
instead of the studio's production philosophy, introduces a Services section that makes Bespoke
Learning Experiences the visible primary offer, moves Selected Work earlier, relocates the retained
philosophy statement and system loop to after the offer is established, splits the delivery
methodology into six stages (Build and Instrument distinct), demotes Capability beneath Services,
adds a dedicated Evidence section with an explicit "does not prove transfer" boundary, reframes the
technology ecosystem as "Platform" positioned late in the narrative with an honest sixth entry
(Artifact Analytics), and replaces the closing commercial statement with a Practice section. This is
a content/composition/reordering implementation on the existing component family, plus one new
component pair (`ServiceFeature`/`ServiceList`) modelled directly on the existing `WorkFeature`/
`WorkList` pattern.

## 2. Branch and commit

- Repository: `glennhammond/artifact-learning-site`
- Branch: `claude/design-sync-4hsoum-n0kbtx`
- This report is committed alongside the implementation in the same push (see commit history on
  this branch for the exact SHA).

## 3. Files changed

**New**
- `src/design-system/ServiceFeature.tsx`, `.css` — `ServiceFeature`/`ServiceList`, the Services
  equivalent of `WorkFeature`/`WorkList`.
- `src/home/components/Services.tsx` — new homepage section.
- `src/home/components/ProductPhilosophy.tsx`, `.css` — replaces `TransitionDesignObserve`.
- `src/home/components/Evidence.tsx`, `.css` — new homepage section.

**Renamed (content and role changed, not just the file name)**
- `ArtifactTech.tsx`/`.css` → `Platform.tsx`/`.css`
- `CommercialStatement.tsx`/`.css` → `Practice.tsx`/`.css`

**Removed**
- `TransitionDesignObserve.tsx`/`.css` — superseded by `ProductPhilosophy`.
- `TransitionToolFollows.tsx`/`.css` — content folded into the closing block of `Capability.tsx`
  rather than kept as a standalone section (Phase 1 strategy §11).

**Modified**
- `src/content/shared.ts` — rewritten per the Phase 1 strategy's messaging architecture (see §6).
- `src/design-system/index.ts` — barrel export for `ServiceFeature`/`ServiceList`.
- `src/home/Home.tsx` — new section import order.
- `src/home/components/Hero.tsx` — new headline/proposition, added secondary CTA.
- `src/home/components/Problem.tsx`/`.css` — shortened; the before/after comparison moved out.
- `src/home/components/Capability.tsx`/`.css` — reframed copy, closing "tool follows the problem"
  block folded in.
- `src/home/components/Approach.css` — legend grid tuned to hold six items on one row at content
  width instead of wrapping a widow sixth item.
- `src/home/components/FinalCta.tsx`/`.css` — new copy, fabricated/unverified email removed.

**Untouched** (deliberately, per brief §18): `Button`, `NavLink`, `Tag`, `Section`, `Container`,
`Reveal`, `SkipLink`, `VisuallyHidden`, `EventTraceList`, `DataStrip`, `LoopDiagram`, `WorkFeature`,
`WorkList`, `WorkComposite`, `Nav.tsx` (content-driven, no code change needed), `Work.tsx`,
`Model.tsx`/`.css`, `tokens.css`, routing, `Footer.tsx`.

## 4. Homepage sequence implemented

`Hero → Problem → Services → Work → Product Philosophy → Model → Approach → Capability → Evidence →
Platform → Practice → Final CTA → Footer` — matches the Phase 1 strategy and brief §3 exactly.

## 5. Components reused

`Section`, `Container`, `Reveal`, `Button`, `Tag`, `NavLink`, `DataStrip`, `EventTraceList`,
`LoopDiagram`, `WorkFeature`, `WorkList`, `WorkComposite` — all unchanged. `Approach.tsx`,
`Capability.tsx`, `Platform.tsx` (renamed `ArtifactTech.tsx`) render from content arrays without
hardcoded lengths, so extending `lifecycle` to six stages and `platformEcosystem` to six items
required no structural component change — only content and the one Approach legend-grid CSS tune
described above.

## 6. Components added

- **`ServiceFeature`/`ServiceList`** (`src/design-system/`) — the one genuinely new component pair,
  giving Services the same editorial hierarchy (one featured item, a short text-led secondary list)
  that Work already has. Not a generalisation of `WorkFeature`/`WorkList`: a service has a question
  and a framing, not case-study stages or project imagery, so it carries its own diagrammatic
  "decision specimen" rather than reusing `WorkComposite`. Three small distinct SVG/mono marks
  differentiate the three secondary offers (not icons).
- **`ProductPhilosophy`** — structurally similar to the `TransitionDesignObserve` it replaces (same
  three-word row + one-shot Signal moment), rebuilt on the `Section` primitive so the relocated
  headline gets a real `<h2>` and correct `aria-labelledby`, since it's now a substantial section in
  the sequence rather than a one-line page transition.
- **`Evidence`** — reuses `DataStrip` for the relocated before/after comparison and adds a plain
  semantic `dl`/list-based "does not prove" boundary block; no new primitive was needed for this.
- **`Platform.tsx`'s `AnalyticsFragment`** — one new specimen function added to the existing
  per-item specimen array, using a dashed-border light-surface treatment (distinct from the solid
  dark-surface `InspectorFragment`) to keep its Concept-stage status honest rather than borrowing the
  "real instrument" visual weight of the more mature entries.

No generic `Card` abstraction was introduced. No component was created speculatively beyond what the
Phase 1 strategy identified.

## 7. Content changes

`src/content/shared.ts` was rewritten in full per the Phase 1 strategy's Retain/Adapt/Reposition/
Replace/Remove/New matrix:

- **Nav/CTA**: `Work · Services · Approach · Platform` + "Discuss a learning challenge".
- **Hero**: new proposition-led headline/standfirst, added `ctaSecondary`/`ctaSecondaryHref`
  ("Explore the work"), `heroTrace` caption/statement reframed toward decision evidence.
- **Problem**: shortened to the plain-language gap statement; `readoutPanels` moved to Evidence,
  replaced in Problem by a small `completionAbstraction` (the muted "before" panel only).
- **Services** (new): `servicesIntro`, `primaryService`, `secondaryServices`.
- **Work**: `secondaryProjects` expanded from 2 to 3 — Professional judgement learning (Phase 2
  brief's own provisional placeholder wording, verbatim), Wellbeing Studio, Artifact R&D.
- **Product Philosophy** (new): `productPhilosophy`, carrying the relocated "Digital learning as a
  product, not a course." headline.
- **Model**: `modelLayers`/`platform`/`modelCaption` retained verbatim, per brief §9/§11.
- **Approach**: `lifecycle` split from five stages to six (Discover, Design, Build, Instrument,
  Measure, Improve), each with its own statement/detail.
- **Capability**: `capabilityIntro`/`capabilityGroups` reframed from "what we do" to "how the
  practice delivers the services"; `transitionToolFollows` retained as Capability's closing block.
- **Evidence** (new): `evidenceIntro`, `evidenceDistinction`; `readoutPanels` relocated here.
- **Platform**: renamed from `ecosystemIntroHeading`/`ecosystem` to `platformIntro`/
  `platformEcosystem`; added a sixth entry, Artifact Analytics, status `Concept`.
- **Practice** (new): `practice`, replacing `commercialStatement`.
- **Final CTA**: new headline/CTA copy; `email`/`emailNote` fields removed entirely (no unverified
  email is referenced anywhere in the codebase now).

`src/content/legacy.ts` and the archived concepts under `src/concepts/` were **not** touched, per
brief §17/§26.

## 8. Visual decisions

- **Services editorial hierarchy**: the featured offer runs text-first (7fr) with the specimen
  second (5fr) — the reverse weighting from `WorkFeature`, which is proof-led and gives the figure
  more weight. Services is proposition-led, so the copy carries the primacy; hierarchy comes from
  structure and typography (heading size, position, tag rail), not colour — no `Tag tone="signal"`
  was added to mark "primary offer," since Signal's three defined uses (button fill, active loop
  node, loop pulse) are treated as a closed set per `docs/design-system.md`, and a fourth use would
  have been a real, if small, violation of that principle rather than a visual improvement.
- **Approach legend at six items**: `repeat(auto-fit, minmax(180px, 1fr))` produced a five-plus-a-
  widow layout at content width once a sixth stage was added; tuned to `minmax(150px, 1fr)` so all
  six sit on one row at 1024px and above, confirmed at 1024/1440/1728.
- **Evidence boundary block**: the "does not prove" list uses a text heading, an explicit
  "on its own, it does not prove:" label, and a plain dash marker — never colour alone — to carry
  the restraint distinction the brief treats as a credibility requirement.
- **Analytics specimen**: deliberately not given the Inspector's dark "real instrument" treatment —
  a dashed border on the light surface keeps its Concept-stage status visually honest, not just
  labelled honest.
- **Contact resolution**: no verified email or `/contact` route exists yet. Nav CTA, hero primary
  CTA and the Final CTA's own button all resolve to the Final CTA section's own `#contact` anchor
  (`FinalCta.tsx` carries a code comment explaining this explicitly) rather than a fabricated
  `mailto:` or a route that doesn't exist — flagged as an unresolved item below, not silently
  worked around.

## 9. Accessibility checks

- Heading hierarchy verified: every new/renamed section (`Services`, `Evidence`, `Platform`,
  `Practice`, `ProductPhilosophy`) uses the `Section` primitive's `heading`/`aria-labelledby` pattern
  or an explicit `<h2 id="…">` + `aria-labelledby` (Practice), so no section relies on `aria-label`
  alone where it now carries real narrative weight.
- Focus visibility confirmed by keyboard-tabbing into the mobile nav menu: the first link shows the
  existing 2px solid + 3px offset focus ring correctly (screenshot-verified).
- Nav anchor targets confirmed to resolve correctly under the sticky header: `Work`, `Services`,
  `Approach`, `Platform` and the CTA's `#contact` all land with the existing `:target { scroll-
  margin-top: 6rem }` rule applied (verified via `getBoundingClientRect` after each click — top ≈
  96px in every case except `#contact`, which is the last section on the page and settles at 163px
  once the document can't scroll further, still fully clear of the nav).
- The Evidence "does not prove" boundary is real text/structure, not colour-dependent, per §12 of
  the strategy.
- No new interactive/scripted behaviour was introduced anywhere — the loop diagram's existing
  button/live-region pattern, the nav's existing disclosure toggle, and `Reveal`'s existing one-shot
  `IntersectionObserver` are all that any new section relies on.
- `npm run lint` (includes `eslint-plugin-jsx-a11y`) passes with no errors or warnings across the
  full change set.

## 10. Responsive checks

Checked at 375, 768, 1024 (via CSS breakpoint inspection), 1440 and 1728px, using a headless-Chromium
script driven through Playwright (see §11):

- **Hero**: headline wraps cleanly to two lines at all widths; primary + secondary CTA stack in
  document order (primary first) below the `900px` grid breakpoint.
- **Services**: featured offer collapses to a single column below `700px`; secondary list never
  becomes a grid at any width, confirmed at 375px through 1728px.
- **Work**: `WorkList` holds its "short text-led list" character at 3 items (Professional judgement
  learning, Wellbeing Studio, Artifact R&D) — no visual crowding at any tested width.
- **Six-stage Approach**: the top timeline wraps to a 2-column flex layout below `620px` (existing
  rule, unmodified, generalises correctly from 5 to 6 items); the legend grid was the one item that
  needed a CSS tune (see §8) and now holds 6 across at content width, stacks to 1 column on mobile.
- **Model (loop diagram)**: unchanged responsive behaviour — circular/stacked swap at 700px still
  correct, confirmed visually at 375px (stacked, "PLATFORM — FOUNDATION, NOT A STAGE" bar beneath).
- **Evidence comparison**: before/after panels stack to one column below the existing breakpoint,
  the rotated transition label collapses to horizontal text below 620px — same pre-existing pattern
  the before/after device used in its old Problem-section location, unchanged by the relocation.
- **Platform (6 ecosystem items)**: each row stacks to one column on mobile, including the new
  Analytics specimen; no layout break introduced by the sixth item.
- **Nav**: mobile menu toggle opens/closes correctly with the new four-item set and CTA label,
  confirmed by direct interaction (screenshot-verified), full-width CTA button in the open state.
- **Page gutters**: confirmed the fluid gutter still grows gracefully at 1728px rather than the grid
  stretching edge to edge — unchanged token behaviour, visually re-verified with the new hero copy.

One pre-existing, unmodified item noted during QA, not a regression: `EventTraceList`'s metadata
grid (`experience: vendor-risk-01`) wraps mid-word at 375px width. This behaviour and its CSS
(`overflow-wrap: anywhere`) predate this phase and were not in scope — `EventTraceList` was
deliberately left unchanged per brief §18.

## 11. Test/build results

```
npm run typecheck   → passes, no errors
npm run lint        → passes, no errors or warnings
npm run build       → succeeds (tsc -b && vite build), no new dependencies
```

No dependency was added; `package.json`/`package-lock.json` are unmodified.

## 12. Unresolved content/approval items

Carried forward from the Phase 1 strategy, unchanged by this implementation:

1. **Contact destination.** No verified email or `/contact` route exists. Every CTA on the page
   currently resolves to the Final CTA section's own `#contact` anchor. Replace `finalCta.actionHref`
   in `src/content/shared.ts` once a real, verified destination exists.
2. **Wellbeing Studio's "Powered by Artifact Learning Platform" framing** is not used anywhere in
   the shipped copy — the Work section frames it neutrally ("a programme-based learning
   experience... exploring what learning looks like beyond a single module") pending the approval
   the Phase 1 strategy flagged as required before using the stronger relationship claim.
3. **Professional judgement / Child Protection content** uses the brief's own placeholder wording
   verbatim ("Case study pending publication approval") and no other detail. No public-safe framing
   has been drafted — that's follow-up work for whoever obtains approval, not this phase.
4. **`WorkList` at 3 items** was visually confirmed to hold its list character rather than reading as
   a grid, closing the open question from the Phase 1 strategy.
5. **Instrument/Signals terminology** — the six-stage Approach's "Instrument" and the retained loop's
   "Signals" both concern event capture but describe different things (delivery methodology vs.
   ongoing product cycle); `modelLayers`' code comment in `shared.ts` now states this distinction
   explicitly, but no homepage copy currently makes the relationship visible to a reader who
   encounters both sections. Worth a short bridging sentence in a future content pass.

## 13. Screenshots / preview details

No live/public preview was deployed (brief §26 prohibits automatic publishing). Local verification
was performed by running `npm run dev` and driving headless Chromium (via `playwright-core` against
the repo's pre-installed browser binary — not added as a project dependency) through the full page,
key sections, real nav-click navigation, the mobile menu, and keyboard focus. Screenshots were
written to a session-scratch directory outside the repository and are not part of this commit.

## 14. Recommendation for Phase 3

Per brief §33/Phase 1 strategy §13, this phase deliberately stopped at homepage implementation. The
homepage is now a reasonable proving ground to review the new commercial position before any wider
build. Recommended next scope, only after this homepage is reviewed:

- Build the `/services`, `/work`, `/approach`, `/platform`, `/about` and `/contact` routes defined in
  the Phase 1 strategy's target IA, reusing `Section`, `ServiceFeature`/`ServiceList`, `WorkFeature`/
  `WorkList`, `Approach`'s timeline pattern and `Platform`'s row pattern directly.
  `/services/:child-route` pages should wait until there's enough real content to justify them.
- Resolve the verified contact destination and wire it into `finalCta.actionHref`, the nav CTA and
  the hero CTA in one pass.
- Once Wellbeing Studio and the professional-judgement project have approval, write their real
  Work-section copy (and, if approved, the "Powered by Artifact Learning Platform" relationship
  line) and build their case-study pages.
- Add `/insights` only once there's a first piece of writing worth publishing, per the "no depth
  without purpose" principle already established in `docs/strategy.md`.
