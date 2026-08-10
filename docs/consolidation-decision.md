# Consolidation decision — Phase 2

Status: **decision record**, written before the consolidated build, per the Phase 2 brief. Concepts A/B/C
were reviewed against `Artifact Learning Brand Identity & Digital Design Language v0.2` (the primary design
authority for this phase). This record explains what the consolidated homepage keeps, adapts, drops and adds,
and why. It supersedes the exploratory framing in `docs/strategy.md` §5–6 where the two disagree on visual
system specifics (v0.2 wins); the positioning, audience and IA reasoning in `strategy.md` still stands.

## Concept-by-concept review

### Concept A — Editorial Product Studio
**Strengths:** the clearest information architecture of the three — one full featured case study plus a
short text-led list, no card grid, exactly matching v0.2's "problem-led, evidence at the end" and the
brief's explicit ban on a generic portfolio grid. Quiet text nav (no button in the header) matches the
Signal principle better than a bordered/filled nav CTA. Asymmetric two-column hero is the strongest
proposition treatment — headline carries the section, no diagram competing with it. Lowest interaction/motion
budget (one fade-in pattern only), which is closest to v0.2's restraint principle.
**Weaknesses:** the model section is a static SVG with no interaction and no way to inspect each layer —
under-communicates "systems, not steps" relative to B. Uses the superseded four-layer linear-feeling list
(Experience/Platform/Data/Insight) with Platform presented as a peer node, which v0.2 explicitly rules out.
**Accessibility:** strong — real semantic sections, one-shot IntersectionObserver reveal with reduced-motion
respected, disclosure nav is real markup not JS-gated content.
**Maintainability:** best of the three — least CSS, fewest bespoke visual devices to reproduce.
**Brand fit:** closest of the three to v0.2's "restraint carries authority" and "editorial grid, sharp by
default" principles.
**Retained:** nav pattern, hero layout, problem section prose treatment, work section structure, capability
column treatment, approach/lifecycle row, final CTA, footer.
**Rejected:** the non-interactive loop diagram and the four-layer model content (both superseded by v0.2 §10).

### Concept B — Digital Learning Laboratory
**Strengths:** the only concept with a genuinely interactive, keyboard-operable model diagram — real
`<button>` nodes, `aria-live` description panel, and a reduced-motion-safe fallback. This is the strongest
"systems, not steps" comprehension device of the three and the closest structural match to v0.2's Direction 1
(circular loop) recommendation. The before/after event-readout comparison in the Problem section is the most
concrete treatment of "evidence beyond attendance" — it makes the completion-vs-instrumentation argument
tangible rather than asserted. The ecosystem node-map (index + name + status + one-line maturity note) is the
most information-complete and honest treatment of the product family.
**Weaknesses:** the dark graphite surface with two competing accents (amber for actions, teal for data) is a
direct violation of the confirmed Signal principle ("never more than one signal element competing at once");
v0.2 confirms a single accent (Signal, acid yellow-green) and treats the dark surface as an occasional
system/technical mode, not the default reading surface. The loop diagram's pulse runs on an infinite 6-second
`repeatCount="indefinite"` loop — v0.2 §11 is explicit that signal/event movement fires once per event and
"never loops"; this is decorative/performing motion, not state-explaining motion, and had to be corrected.
The bracketed pipeline styling (`[ DISCOVER ] →`) reads as "developer-tool cosplay," which the brief names
directly as a territory to avoid. The bordered nav CTA button overstates the funnel for a one-person practice,
same critique as in the original wireframe review.
**Accessibility:** the interactive loop is genuinely good (real buttons, live region, focus-visible). The
continuous pulse animation is the one real accessibility/attention-cost risk — `prefers-reduced-motion` is
handled, but sighted, motion-tolerant users still get unbounded ambient motion, which v0.2 rules out
independently of reduced-motion support.
**Maintainability:** heaviest CSS surface of the three (two accent colours, dark elevated surface, mono-as-UI
throughout) — much of it now redundant under a single-accent, light-led system.
**Brand fit:** weakest match to Territory C as refined in v0.2 — two accents, mono used decoratively in nav
and the pipeline strip (v0.2 §02 explicitly reassigns nav to IBM Plex Sans and restricts mono to genuine
data), and a permanently dark hero where v0.2 treats dark as an occasional technical-context mode.
**Retained (adapted):** the interactive node-as-button diagram pattern, the live-region description panel, the
reduced-motion static fallback, the before/after event comparison idea, the ecosystem status/maturity pattern.
**Rejected:** the dark-by-default surface as the homepage default, the second accent colour, mono-as-UI, the
bordered nav CTA, the continuous/looping pulse, the bracket pipeline styling.

### Concept C — Editorial + Experimental Hybrid
**Strengths:** correctly identifies that Direction A's editorial restraint should be the default surface, and
that a systems/interaction moment should be bounded rather than pervasive — this instinct is directly
validated by v0.2 (single accent, dark reserved for technical content, "composed rather than assembled").
The bounded-panel treatment of the model (contained, distinct border/background, everything outside it plain
editorial) is a genuinely useful compositional idea for keeping one dark/technical module inside a
light-led page without it taking over.
**Weaknesses:** the hybrid's own hypothesis — a small pulsing four-dot glyph inline next to the eyebrow — is a
second, independent looping animation on top of the model module's, and is decorative rather than
state-explaining (nothing "happens" when it fires). It duplicates the model's loop motif before the reader has
been told what the loop even means, working against comprehension rather than for it. The contained systems
module borrows Concept B's two-accent palette (amber/teal), inheriting the same Signal-principle violation.
**Accessibility:** the bounded-panel interaction reuses B's accessible button/live-region pattern, so it
inherits the same strength. The hero glyph is `aria-hidden`, so it is a pure visual-attention cost with no
accessibility offset.
**Maintainability:** adds one more bespoke visual language (the module's graphite/amber/teal skin) on top of
an otherwise-editorial page — a third design language for one homepage, which is more to maintain than it
resolves.
**Brand fit:** the *instinct* (bounded systems moment inside an editorial page) fits v0.2 well once the
module's palette is corrected to Ink/Paper/Signal; the hero glyph does not earn its place under "motion
explains state, it does not perform."
**Retained (adapted):** the "one bounded systems moment inside an editorial page" compositional principle —
this directly informs how the consolidated homepage places its single interactive diagram inside an otherwise
quiet page, without needing a second visual language to do it.
**Rejected:** the second animated glyph, the module's borrowed dark/two-accent skin (recoloured to the
single-accent system instead).

## Keep / Adapt / Remove / New

**Keep**
- Concept A's overall page skeleton and section order: Hero → Problem → Model → Work → Capability →
  Approach → Artifact ecosystem → Final CTA → Footer.
- Concept A's quiet text nav (wordmark + in-page anchors + a text-link "Contact," no header button).
- Concept A's asymmetric two-column hero with no diagram competing with the headline.
- Concept A's Work section structure: one full featured case study, no card grid, short text-led secondary
  list.
- Concept A's capability column treatment and Approach/lifecycle row.
- Concept B's interactive diagram *pattern*: real button nodes, `aria-live` description panel, and a static
  reduced-motion fallback that still communicates the loop.
- Concept B's ecosystem list pattern: index, name, status tag, one-line maturity note per item.
- Concept C's compositional principle: the interactive/technical moment is bounded to the Model section, not
  spread across the page — everything else stays in the light, single-accent editorial register.

**Adapt**
- The model diagram is rebuilt against v0.2 §10's refined model (Experience → Signals → Data → Insight →
  Improvement, looping back to Experience) instead of the superseded four-layer Experience/Platform/Data/
  Insight list every concept currently uses. Platform is re-rendered as a base plane/foundation beneath the
  loop, not a fifth node in the ring, per v0.2's explicit correction.
- The diagram's node-button interaction (from B) is recoloured to the single-accent Ink/Paper/Signal system
  and its pulse becomes a one-shot animation (fires once on reveal, replays on node activation) rather than a
  continuous 6-second loop, correcting the "never loops" violation identified above.
- The before/after event-log comparison (from B's Problem section) is kept as a concrete "evidence beyond
  attendance" device but restyled as a compact, light-surface pair of panels using mono type only for the
  genuine event/data strings — not as a full dark instrument-panel section.
- The ecosystem status/maturity pattern (from B) is kept but restyled onto the light surface with a single
  accent, dropping the node-map's graphite skin.
- Concept C's bounded-panel idea becomes the structural reason the Model section is allowed to be the one
  section that uses Ink-on-dark for its diagram surface — bounded to that section, not the page.
- A compact stacked/layered fallback of the loop (v0.2 Direction 2) is added for narrow layouts, replacing
  each concept's ad hoc "shrink the ring" mobile handling.

**Remove**
- The four-layer Experience/Platform/Data/Insight content model in `content/shared.ts` (`modelLayers`),
  superseded by the refined five-stage loop.
- Concept B's second accent colour (teal data highlight) and dark-by-default homepage surface.
- Concept B's bracket pipeline styling (`[ DISCOVER ] → [ DESIGN ]…`) and mono-as-UI-chrome usage in nav.
- Concept B's bordered nav CTA button.
- Concept C's animated hero loop glyph (duplicate, non-explanatory motion).
- Concept A/C's non-interactive static loop SVG (superseded by the adapted interactive diagram).
- Three parallel, near-duplicate implementations of Nav/Hero/Problem/Work/Capability/Approach/ArtifactTech/
  FinalCta/Footer — consolidated into one component family under `src/design-system/` and one set of homepage
  sections under `src/home/`.

**New**
- A shared `src/design-system/` component family (Button, NavLink, Tag, MetadataRow, WorkFeature, Section,
  LoopDiagram, DataStrip) implementing the v0.2 tokens directly, replacing concept-specific CSS.
- Updated `modelLayers` content reflecting Experience → Signals → Data → Insight → Improvement, plus a
  separate `platform` content entry describing it as environment/infrastructure/foundation rather than a
  causal stage.
- A `docs/design-system.md` reference documenting tokens, the Signal rule, components and the system model,
  per brief §31.

## What this implies for the homepage narrative

The content hierarchy in `docs/strategy.md` §5 and the brief §16 both hold up structurally. The one narrative
change is the model: it is no longer "the four-layer model (Experience/Platform/Data/Insight) and its feedback
loop" but "Experience → Signals → Data → Insight → Improvement, looping back to Experience, with Platform as
the environment it all runs on rather than a stage in the sequence." That is a more accurate description of
what the studio actually does (notice signals, not just host a platform) and resolves the "five boxes with
arrows" risk the brief warns against by giving Platform a distinct visual role instead of equal weight with
the other four.
