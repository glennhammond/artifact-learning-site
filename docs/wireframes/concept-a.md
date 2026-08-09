# Wireframe — Direction A: Editorial Product Studio

Territory: quiet authority. Disciplined typography, restrained interaction, generous whitespace, editorial pacing. The page reads like a well-set piece of writing that happens to be a website, not a "product landing page."

## Navigation
`Artifact` (wordmark, links to top) — in-page anchors: `Work` `Model` `Approach` `Artifact tech` — `Contact` (styled as a quiet text link, not a filled button; a filled CTA in a one-person practice header overstates the funnel).
Collapses to a disclosure ("Menu" button) under 700px. No JS required for content access — full nav is in the DOM either way, only its visibility toggles.

## 1. Hero (asymmetric, light)
Two-column asymmetric grid, ~60/40. Left: large serif-free display headline. Right, offset lower: a short standfirst and a single quiet CTA.

> **Digital learning as a product, not a course.**
>
> Artifact applies modern digital product practice — design, delivery, measurement, improvement — to organisational learning. Not a course. A product, held to the same standard as the rest of your digital estate.
>
> [See how we work ↓]

No photography, no device mockups. Typography carries the section.

## 2. The problem (editorial prose)
Narrow measure (66ch), left-aligned, no imagery.

> **Completion is a very small part of the picture.**
>
> Most organisations know whether somebody completed their training. Far fewer know what happened inside the experience, or what people can actually do afterwards. Conventional learning technology is built to report enrolment, completion, pass/fail and score — and stops there.

## 3. The model (Experience → Platform → Data → Insight)
A quiet, numbered four-part list, prose-led, with a small inline loop diagram (SVG, ~120px, four nodes in a circle, one connecting arrow highlighted from Insight back to Experience) sitting beside the list — not a full-width graphic. The loop is the one deliberate structural difference from GH's linear "four layers" list: Artifact's model is cyclical, not a stack.

- **01 — Experience.** Rise, Storyline, React, video, custom interaction. What the learner actually sees and does.
- **02 — Platform.** Moodle, LMS environments, learning portals. Where the experience lives and is delivered.
- **03 — Data.** xAPI, a Learning Record Store, structured learning events. What can be observed.
- **04 — Insight.** Reporting, interpretation, evaluation — feeding back into the next iteration of the Experience.

Caption under the diagram: *"Insight informs the next iteration of the experience — not a report that sits on a shelf."*

## 4. Selected work
One full editorial feature + a short text-led list of two more. No card grid.

**Featured (placeholder project):**
> **Eyebrow (mono):** Case study — placeholder
> **How do you keep digital learning consistent and accessible across an organisation, without redesigning every experience from scratch?**
> One paragraph on the constraint, framed as a decision problem, not a deliverable list. [Placeholder — problem framing only; no outcome data invented.]
> Single primary image area (placeholder frame, labelled "evidence image placeholder").
> [Read the case study →] *(inert in this phase)*

**Also:** two more projects as single-line text rows — title + one-sentence problem framing each, no thumbnails.

## 5. Capability (grouped, not a service catalogue)
Four editorial columns/definitions, matching the brief's grouping:
- Learning experience design
- Digital learning development
- Learning platforms & systems
- Measurement & learning analytics

Each: a one-line definition plus 3–4 lower-case supporting terms in a single run-in line (not icon chips).

## 6. Approach (lifecycle)
Horizontal text sequence, five steps, mono step-numbers, thin connecting rule:
`01 Discover` `02 Design` `03 Build & Instrument` `04 Measure` `05 Improve`
One short sentence beneath the row, not per-step icon cards.

## 7. Artifact technology (ecosystem, careful)
Short section, one paragraph + a small labelled list distinguishing maturity honestly:

> Artifact is also becoming the foundation for a small technical ecosystem — a component framework, a structured learning-event model, and xAPI instrumentation, built to support the practice's own work. Most of it is still in design.

- Artifact Framework — *in development*
- Artifact Components — *in design*
- Artifact Events / xAPI — *in design*
- Artifact Inspector — *concept*

## 8. Final CTA
Direct, not generic:

> **Working on a digital learning problem worth taking seriously?**
> [Tell us what you're trying to solve →] `hello@artifactlearning.com` *(placeholder address)*

## Footer
Wordmark, nav repeat, `.com` / `.com.au`, copyright line. No fake social links.

## Mobile behaviour
Hero stacks to single column, headline first, standfirst below. Model section: diagram moves below the list, shrinks to ~80px. Capability columns stack to one per row. Approach sequence wraps to two rows of steps rather than shrinking text below readable size.

## Interaction notes
- Section entrances: a single, subtle opacity/translate-Y fade-in the first time each section enters the viewport (`IntersectionObserver`), 1 pass only, respects `prefers-reduced-motion`.
- No scroll-jacking, no parallax, no repeating animation.
- Loop diagram in §3 is static (no animation) in this direction — motion is reserved for B/C.
