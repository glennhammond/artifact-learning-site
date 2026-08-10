# Phase 1 — Strategic IA + Homepage Experience Definition

Status: **strategy and specification only — no production code changed in this phase** (see §14 of the
brief this document responds to). Written against the consolidated Phase 2 build on
`claude/design-sync-4hsoum` (`docs/design-system.md`, `docs/consolidation-decision.md`,
`src/content/shared.ts`, `src/home/`, `src/design-system/`). All copy in this document is **working v0.1
marketing copy**, implementation-ready in structure but not final, and contains no invented outcomes,
metrics, client names or approvals.

---

## 1. Executive recommendation

Artifact Learning's coded foundation — the Ink/Paper/Signal token system, the four-family type system, the
`page`/`content`/`narrow` containment model, the restrained geometry, the accessibility discipline, and the
proprietary visual language (`EventTraceList`, `LoopDiagram`, `DataStrip`, `WorkFeature`/`WorkList`,
`WorkComposite`) — is sound and should be **carried forward, not rebuilt**. It was resolved carefully
against a real design authority (v0.2) and documented well enough to extend safely.

What needs to change is upstream of code: the site currently opens with a philosophy statement
("Digital learning as a product, not a course") and organises itself around a technical model and an
emerging tool ecosystem before it tells a senior buyer what Artifact sells, who it's for, and why it's
different from an eLearning vendor. That ordering suited a Phase 1–2 design-review build. It does not suit
a commercial site whose first job is to be legible, in under one screen, to a Head of Learning, a
Capability Leader or a Compliance programme owner who has never heard of xAPI and does not need to.

The recommended shift is **narrative reordering and re-weighting, not visual reinvention**:

- Lead with the commercial proposition (**"Develop capability, not just completion."**) and the client
  problem, not the studio's production philosophy.
- Make **Bespoke Learning Experiences** the obvious primary offer through editorial hierarchy (a featured
  treatment plus a short secondary list), not a four-card grid of equal services.
- Move proof (Selected Work) earlier, and expand it to include Wellbeing Studio and the Artifact Learning
  Platform as R&D, alongside the ISQ design-system work and (subject to approval) Child Protection.
- Keep the existing product philosophy and system loop — they are strong, credible, differentiated ideas —
  but relocate them to *after* the reader already understands the offer, exactly as a consultancy site
  should sequence "what we believe" relative to "what we do."
- Split **Build** and **Instrument** into distinct stages of a six-stage methodology, because not every
  Artifact engagement requires instrumentation, and collapsing the two implies otherwise.
- Push the technology ecosystem (Framework, Components, Events, xAPI, Inspector, and now Analytics) further
  down the page, framed explicitly as "under the experience" — evidence of proprietary depth in support of
  the consultancy, never a competing product story.

This is a re-sequencing and re-weighting exercise carried out mostly in `src/content/shared.ts` and
`src/home/Home.tsx`'s section order, using the existing component family, plus a small number of new
components modelled directly on existing patterns (principally a Services equivalent of
`WorkFeature`/`WorkList`).

---

## 2. Current-to-target strategic shift

| Dimension | Current (Phase 2 consolidated build) | Target (Phase 1 commercial direction) |
|---|---|---|
| Primary hero claim | "Digital learning as a product, not a course." (philosophy) | "Develop capability, not just completion." (commercial proposition) |
| What the reader understands first | How Artifact thinks about learning | What Artifact sells, to whom, and why it matters |
| Offer structure | No explicit "services" — capability is presented as one integrated practice, not a buyable offer | Four named commercial offers, hierarchically presented, Bespoke Learning Experiences primary |
| Proof placement | Work sits after the system Model, roughly mid-page | Work moves earlier, directly after Services |
| Technology ecosystem | "Artifact" section, mid-page, five items, positioned as the emerging technical practice | "Platform" section, later page, six items, explicitly "under the experience," in support of the consultancy |
| Methodology | Five-stage: Discover → Design → Build & Instrument → Measure → Improve | Six-stage: Discover → Design → Build → Instrument → Measure → Improve (Instrument is optional-but-distinct) |
| System loop (Experience → Signals → Data → Insight → Improvement) | Central, mid-page, its own dark "Model" section | Retained as-is (structurally and conceptually correct — see brief §11), repositioned as the bridge between Product Philosophy and Approach rather than a headline device |
| Capability (four disciplines) | Presented as "What we do" — reads as the primary offer structure | Repositioned beneath Services as "Integrated capability" — supporting, not primary |
| Evidence/measurement restraint | Present once, early, in Problem | Present twice, deliberately: a short version in Problem (the gap), a fuller version later in Evidence (what's actually measurable, and what it doesn't prove) |
| Navigation | Work · Capabilities · Approach · Ecosystem + "Start a conversation" | Work · Services · Approach · Platform (+ Insights, About deferred) + "Discuss a learning challenge" |
| Site shape | Single page, all content in one route | Homepage remains the Phase 2 deliverable; IA is defined for a future multi-page site, not built yet |

The underlying thesis does not change: Artifact is still an integrated practice that treats digital
learning with product discipline, still measures honestly, still refuses to overclaim evidence. What
changes is *which sentence gets said first* — and, per the brief, that is the correct kind of change for
this phase: strategy → IA → messaging, not new strategy.

---

## 3. Retain / Adapt / Reposition / Replace / Remove / New matrix

### 3a. Content blocks (`src/content/shared.ts`)

| Block | Classification | Rationale |
|---|---|---|
| `nav`, `navCta` | **REPLACE** | New nav set (Work, Services, Approach, Platform) and CTA copy ("Discuss a learning challenge"); About/Insights deferred (§26). |
| `hero.headline` ("Digital learning as a product...") | **REPOSITION** | Moves to Product Philosophy section (§15). Strong line, wrong altitude for a hero now. |
| `hero.standfirst`, `standfirstSecondary`, `cta`, `ctaHref` | **REPLACE** | New proposition-led copy; see §7 below. |
| `heroTrace` (event-trace artefact + caption/statement) | **ADAPT** | Visual pattern retained; caption/statement rewritten to support the new hero's "judgement and decision" framing rather than a generic "can be observed" claim. |
| `problem` (eyebrow/headline/body×3/closing) | **RETAIN / ADAPT** | Per brief §13.02 — use as foundation; tighten toward the working headline "Completion tells you very little," keep the evidence-integrity closing line. |
| `readoutPanels` (before/after event comparison) | **ADAPT + REPOSITION** | Strong, concrete device. Recommend moving its full technical depth out of Problem (keep Problem short/high-level) and into the later **Evidence** section, where it can do more work distinguishing "learning-experience evidence" from "workplace transfer." Problem keeps only the plain-language gap statement. |
| `transitionDesignObserve` ("Design it. Observe it. Improve it.") | **ADAPT + REPOSITION** | Repurposed as the short editorial bridge into Product Philosophy, replacing its current position between Problem and Model. |
| `modelIntro`, `modelLayers`, `platform`, `modelCaption` (the loop) | **RETAIN** | Explicitly preserved per brief §11 — strategically strong, not to be discarded. Repositioned later (bridging Product Philosophy → Approach) rather than immediately after Problem. |
| `workIntro`, `caseStudyStages`, `featuredProject` | **RETAIN / ADAPT** | Featured project (ISQ eLearning design system) keeps its structure; copy tightened to match its published name once confirmed publishable. |
| `secondaryProjects` | **RETAIN / EXPAND** | Expand from two generic placeholders to include Wellbeing Studio and (subject to approval) Child Protection; add the Artifact Learning Platform as a distinctly labelled R&D entry, not a client project. See §10 for approval gating. |
| `capabilityIntro`, `capabilityGroups` | **REPOSITION** | Content and four groupings are sound; repositioned beneath Services as supporting capability, reframed from "what we do" (primary offer language) to "how the practice is built" (supporting language). |
| `transitionToolFollows` ("The tool follows the problem.") | **RETAIN / ADAPT** | Repositioned as the closing line of Integrated Capability, bridging into Platform — it already states the "standards where possible, adaptors where necessary" principle in plainer language. |
| `approachIntro`, `lifecycle` | **ADAPT** | Five stages → six. Split "Build & Instrument" into "Build" and "Instrument," each with its own statement/detail (copy provided in §7). |
| `ecosystemIntroHeading`, `ecosystem` | **ADAPT / DEMOTE** | Repositioned into "Platform" section, after proposition/services/work/philosophy/approach/evidence per brief §19. Add a sixth entry, **Artifact Analytics**, honestly labelled `Concept` (not fabricated maturity) to match the brief §8 ecosystem list. Do not add Artifact Studio. |
| `commercialStatement` | **REPLACE** | Its role — a closing practice-level statement — is taken over by the new **Practice** section (§20); this block's specific copy is superseded, not reused verbatim. |
| `finalCta` | **REPLACE** | Headline → "Start with the learning problem." CTA → "Discuss a learning challenge." Remove the placeholder/unverified email note in favour of the same CTA link used in nav, pointing at `/contact` once it exists (see §10 for MVP handling). |

### 3b. Components (`src/design-system/`, `src/home/components/`, layout)

| Component | Classification | Rationale |
|---|---|---|
| `Button`, `NavLink`, `Tag`, `Section`, `Container`, `Reveal`, `SkipLink`, `VisuallyHidden` | **RETAIN unchanged** | Token-driven, content-agnostic primitives. No commercial-narrative dependency. |
| `EventTraceList` | **RETAIN, content updated only** | Hero artefact pattern stays; the events/meta/caption/statement it renders change to match new hero copy. |
| `DataStrip` | **RETAIN, repositioned** | Moves with the before/after evidence device from Problem to Evidence. |
| `LoopDiagram` | **RETAIN unchanged** | Renders the preserved Experience → Signals → Data → Insight → Improvement loop; only its section position in `Home.tsx` changes. |
| `WorkFeature` / `WorkList` | **RETAIN, extend content** | Pattern (one featured case + short text list) is exactly right for Work; extend `secondaryProjects` to 3 items (Child Protection, Wellbeing Studio, Artifact R&D) and verify `WorkList` reads well at that length (currently designed/tested at 2). |
| `WorkComposite` | **RETAIN unchanged** | Structured placeholder pattern remains the right answer until real case-study imagery exists. |
| `Nav`, `Hero`, `Problem`, `Work`, `Capability`, `Approach`, `ArtifactTech`, `FinalCta`, `Footer` (home components) | **ADAPT (content + position)** | No structural rebuild; content props change, and their order in `Home.tsx` changes (see §6). `ArtifactTech` additionally needs a sixth specimen (Analytics). |
| `Model`, `TransitionDesignObserve`, `TransitionToolFollows` | **ADAPT (reposition)** | Same components, moved to new positions in the section sequence; copy adjusted for their new neighbours. |
| `CommercialStatement` | **REPLACE** | Superseded by a new `Practice` section; component is not reused as-is (see §9 for whether the file itself can be adapted vs. replaced). |
| *(none)* | **REMOVE** | No current component is dropped outright — every existing component has a role in the target architecture. The `commercialStatement` **content block** is removed; the component shell may be adapted into `Practice` rather than deleted (see §9). |
| Services feature/list pair | **NEW** | See §9 — modelled directly on `WorkFeature`/`WorkList`, not a generic card grid. |

---

## 4. Target IA

### MVP (buildable now, on the existing single-page homepage)

```
/                    Home — the only route this phase builds
/archive             Unchanged — Phase 1 concept archive, kept for reference
/archive/concept-a|b|c
```

### Future routes (not built this phase — defined so Phase 2 doesn't paint the homepage into a corner)

```
/services
/services/bespoke-learning-experiences        (later child route)
/services/learning-experience-redesign        (later child route)
/services/learning-systems-design-systems     (later child route)
/services/learning-evidence-improvement       (later child route)
/work
/work/:slug                                    (case-study pages)
/approach
/platform
/about
/contact
/insights                                      deferred until there is real content
```

No empty route is created in this phase. Every homepage section that will eventually "graduate" to its own
page (Services, Work, Approach, Platform, Contact) is built as an in-page anchor section now and should
link to itself (`href="#services"` etc.) exactly as today's sections do — not to a route that doesn't
exist yet.

---

## 5. Target navigation — current → new migration

| Current | Target (MVP, anchor-based) | Target (future, route-based) |
|---|---|---|
| Work | Work | `/work` |
| Capabilities | *(removed from primary nav — folded into Services/Approach story)* | — |
| Approach | Approach | `/approach` |
| Ecosystem | Platform | `/platform` |
| *(none)* | Services *(new nav item)* | `/services` |
| *(none)* | *(About not in MVP nav — no page yet)* | About |
| *(none)* | *(Insights not in MVP nav — no content yet)* | Insights |
| "Start a conversation" (secondary/outline button) | "Discuss a learning challenge" (same outline treatment — do not upgrade to a filled/bordered CTA design; that restraint decision in `docs/consolidation-decision.md` still holds) | Same, linking to `/contact` |

**MVP nav (this phase, in-page anchors):** `Work · Services · Approach · Platform` + **Discuss a learning
challenge**.

**Rationale for leaving out About/Insights now:** the brief is explicit (§26) that empty routes must not be
implemented to satisfy the IA. There is no About page and no Insights content yet. Adding either to the nav
now would either link nowhere or link to an anchor with no corresponding section — both worse than omitting
them until Phase 3+ builds the pages. When `/about` exists, add it to the nav in the same position the
target IA specifies (after Platform, before Insights).

---

## 6. Homepage narrative — recommended section sequence

1. **Hero** — proposition-led, not philosophy-led
2. **Problem** — short version: completion tells you very little
3. **Services** — the four offers, Bespoke Learning Experiences primary
4. **Selected Work** — proof, moved earlier than the current build
5. **Product Philosophy** — "Digital learning as a product, not a course," now earned rather than assumed
6. **Model** — the retained Experience → Signals → Data → Insight → Improvement loop, as the bridge from philosophy to method
7. **Approach** — six-stage methodology (Discover → Design → Build → Instrument → Measure → Improve)
8. **Integrated Capability** — the four disciplines, now explicitly supporting, not primary
9. **Evidence** — the fuller measurement-restraint section, including the before/after device moved from Problem
10. **Platform** — "Under the experience," the technology ecosystem (six items)
11. **Practice** — one integrated practice, why the combination matters (replaces `CommercialStatement`)
12. **Final CTA** — "Start with the learning problem."
13. **Footer** — unchanged

This differs from the current build (`Hero → Problem → TransitionDesignObserve → Model → Work → Capability
→ TransitionToolFollows → Approach → ArtifactTech → CommercialStatement → FinalCta → Footer`) principally
by: pulling Work forward (proof earlier), inserting Services before Work, moving Model from immediately
after Problem to a bridge position after Product Philosophy, splitting the Approach lifecycle to six
stages, demoting Capability beneath Services/Work, and introducing a distinct Evidence section rather than
concentrating all measurement-restraint content in Problem.

---

## 7. Homepage messaging architecture (working v0.1 copy)

All copy below is implementation-ready in structure and length but explicitly **v0.1 working copy** — not
final marketing copy, and it should be treated as a first draft for Phase 2 review, not a finished script.

### Hero

> **Eyebrow:** Artifact Learning
> **Headline:** Develop capability, not just completion.
> **Standfirst:** Artifact creates purpose-built digital learning experiences for organisations where
> judgement, decision-making and behavioural application matter.
> **Standfirst (secondary):** Learning science, experience design, technology and meaningful evidence,
> brought together as one integrated practice.
> **Primary CTA:** Discuss a learning challenge
> **Secondary CTA:** Explore the work

The existing `EventTraceList` artefact is retained, with its caption reframed toward the decision it
represents rather than a generic "can be observed" claim, e.g. `caption: "Illustrative decision evidence"`,
`statement: "A learning experience can be designed around the decisions that matter, not just the content
that surrounds them."`

### Proposition / Problem

> **Eyebrow:** Beyond completion
> **Headline:** Completion tells you very little.
> **Body:** A completion report can tell you that someone launched a module, finished it, and scored well.
> It rarely tells you which decisions they made, where they hesitated, what support they used, or what
> should change in the experience itself.
> **Closing:** Completion is one signal. Artifact designs for the ones that matter more.

(The fuller before/after event comparison moves to Evidence — see below.)

### Services

> **Eyebrow:** Services
> **Headline:** Purpose-built digital learning for complex organisational problems.
> **Intro:** Artifact works across four related offers, built from one integrated practice. Most
> engagements start with the first.

**01 — Bespoke Learning Experiences** *(primary, featured treatment)*
> Purpose-built digital learning designed around a specific organisational capability, judgement or
> behaviour — not a template course. This is where most Artifact engagements begin: a real performance
> problem, translated into an experience people actually need to think through, not click through.

**02 — Learning Experience Redesign** *(secondary)*
> Reconsidering and rebuilding existing digital learning that has become outdated, passive, inconsistent,
> inaccessible, or no longer fits the organisation it was built for.

**03 — Learning Systems & Design Systems** *(secondary)*
> Reusable standards, components, templates, patterns, accessibility rules and governance for
> organisations producing digital learning at scale — so quality doesn't depend on rebuilding it every
> time.

**04 — Learning Evidence & Improvement** *(secondary)*
> Capturing meaningful learning behaviour where it serves a clear purpose, and using that evidence to
> understand and improve the experience itself — not generic analytics, and not xAPI for its own sake.

### Selected Work (introduction)

> **Eyebrow:** Selected work
> **Headline:** The decision matters as much as the deliverable.
> **Intro:** Artifact work is framed around the problem, the constraints and the decisions behind the
> experience — not the software used to build it.

### Product Philosophy

> **Eyebrow:** Philosophy
> **Headline:** Digital learning as a product, not a course.
> **Body:** Learning can be researched, designed, prototyped, launched, instrumented where it's useful,
> measured, and improved — rather than built, published, and left alone. That discipline, more than any
> single deliverable, is what the four services above have in common.

### Approach

> **Eyebrow:** Approach
> **Headline:** Discover → Design → Build → Instrument → Measure → Improve.
> **Intro:** A working method, not a one-off production pipeline. Not every stage is required on every
> engagement — Instrument in particular is scoped in only where evidence has a clear purpose.

| Stage | Statement | Detail |
|---|---|---|
| 01 Discover | Understand performance, learner context and constraints. | Audience, performance need, existing evidence, environment and constraints, before any design decision is made. |
| 02 Design | Define learning architecture, practice, feedback, assessment and UX. | Scenario design, interaction design, content architecture and measurement intent, shaped around the decision or behaviour that matters. |
| 03 Build | Develop using the technology best suited to the experience. | Rise, Storyline, React, HTML/CSS/JavaScript, multimedia or a combination — the tool follows the problem. |
| 04 Instrument | Capture meaningful learning behaviour where evidence has a clear purpose. | Not every project needs this stage. Where it's used: structured events, mapped to standards such as xAPI where appropriate. |
| 05 Measure | Interpret available evidence without overclaiming. | What the evidence can and cannot tell you — completion, interaction data and learner behaviour within the experience. |
| 06 Improve | Use evidence and feedback to refine the experience. | Changes to content, UX, interaction, instrumentation or the supporting system, based on what was actually learned. |

> **Caption:** Publishing is not the end of the process.

### Integrated Capability

> **Eyebrow:** Integrated capability
> **Headline:** Learning design meets digital-product practice.
> **Intro:** Every service above draws on the same integrated practice — learning science, instructional
> design, UX/UI, visual design, multimedia and modern web technology working together rather than being
> commissioned separately.

(Retain the four existing `capabilityGroups` — Learning experience design, Digital learning development,
Learning platforms & systems, Measurement & learning analytics — with copy lightly reframed from "what we
do" to "what the practice combines," since Services now owns "what we do.")

> **Closing line (from `transitionToolFollows`):** The tool follows the problem. Not every experience needs
> custom React. Not every interaction needs xAPI. Not every learning problem needs a course.

### Evidence

> **Eyebrow:** Evidence
> **Headline:** Understand more than completion.
> **Body:** Meaningful learning evidence can include the decisions someone made, the responses and pathways
> they chose, retries, misconceptions, use of support, revision after feedback, and where they found
> something difficult.
> **Distinction (structural, not decorative):** This is **learning-experience evidence** — what happened
> inside the experience. It is not, by itself, proof of **workplace transfer**, **behavioural change**, or
> **organisational performance**. Artifact treats that distinction as a matter of credibility, not caution
> for its own sake.

(The before/after event-log comparison — `readoutPanels` — moves here from Problem, with its existing
`caveat: "Illustrative events only. Not client data."` retained verbatim.)

### Platform

> **Eyebrow:** Under the experience
> **Headline:** A learning platform built around meaningful events.
> **Intro:** Introduced last, deliberately — after the proposition, the services, the work, the philosophy,
> the approach and the evidence, because the technology supports Artifact's practice; it is not the
> practice itself.

(Retain the five existing ecosystem entries; add a sixth, honestly labelled — see §10.)

### Practice

> **Eyebrow:** Practice
> **Headline:** One integrated practice.
> **Body:** Strategy, learning design, UX/UI, development, multimedia, technology and measurement are
> usually split across separate vendors, with no one accountable for the whole experience. Artifact holds
> all of it in one practice, because the decisions in each discipline affect the others — a measurement
> choice changes what's worth designing for; a design choice changes what's worth building.

*(Explicitly avoids a generic founder biography, "years of experience," or "passionate about learning"
framing, per brief §20.)*

### Final CTA

> **Headline:** Start with the learning problem.
> **Supporting:** If you're developing an important learning programme, redesigning an existing experience,
> or trying to understand what your current learning is actually achieving, Artifact can help define the
> right approach.
> **CTA:** Discuss a learning challenge

---

## 8. Visual artefact plan

| Section | Visual purpose | Likely format | Current component reuse | New component requirement | Placeholder requirement | Accessibility treatment |
|---|---|---|---|---|---|---|
| Hero | Evolved decision-evidence artefact | Vertical event trace + metadata rail | `EventTraceList` (unchanged) | None | Illustrative event names only, clearly captioned | Existing visually-hidden equivalents retained; caption text updated |
| Problem | Short, plain-language gap statement — no artefact required here now that the before/after device has moved to Evidence | Prose only | `Section` | None | N/A | Standard section semantics |
| Services | Editorial visual specimens differentiating the four kinds of learning problem | Small inline SVG/specimen per offer (in the spirit of `Capability.tsx`'s `BuildCrops`/`Progression`), one for the featured offer, lighter treatment for the secondary three | Pattern reuse from `Capability.tsx` and `WorkComposite.tsx`'s specimen style | New Services feature/list components (see §9); specimens can reuse the existing inline-SVG specimen technique, not a new visual system | Structured placeholder specimens, `aria-hidden`, until real interface crops exist per offer | Specimens `aria-hidden="true"`; meaning carried entirely in text, per existing pattern |
| Selected Work | Real or premium structured placeholder screenshots per project | `WorkComposite` (featured) + simple thumbnail SVG (secondary, existing `WorkList` pattern) | `WorkFeature`, `WorkList`, `WorkComposite` (unchanged) | None | `WorkComposite`-style placeholders for Wellbeing Studio, Child Protection (pending approval) and Artifact R&D until real assets exist | `role="img"` + `aria-label` pattern already established in `WorkComposite` |
| Product Philosophy | Lifecycle / experience-evolution visual | Short editorial transition treatment (existing `TransitionDesignObserve` pattern) | `TransitionDesignObserve` (adapted copy) | None | N/A | Text-only; no new accessibility surface |
| Model (loop) | The retained Experience → Signals → Data → Insight → Improvement system | `LoopDiagram`, circular (desktop) / stacked (mobile) | `LoopDiagram` (unchanged) | None | N/A — already real content, not placeholder | Existing visually-hidden loop description, `aria-live` panel, reduced-motion static fallback all retained |
| Approach | Coherent six-stage process model | Existing timeline + legend pattern, extended from five to six entries | `Approach`'s timeline/legend markup (content-driven, no hardcoded length) | None expected; verify spacing/spine rendering at six stages across breakpoints (see §11) | N/A | `dl`-based legend retained; verify tab order/reading order still make sense at six stages |
| Integrated Capability | Layered/connected discipline model | Existing per-discipline specimens (`Progression`, `BuildCrops`, `SystemMap`) | `Capability.tsx` (unchanged) | None | N/A — existing specimens are already illustrative, not client data | `aria-hidden` specimens, meaning carried in text, as today |
| Evidence | Meaningful event/evidence progression, with an explicit "does not prove" boundary | `DataStrip` before/after pair (moved from Problem) + new short distinction block (learning-experience evidence vs. transfer/behaviour/performance) | `DataStrip` (unchanged) | A small, non-decorative "distinction" treatment (could be a simple two-column `dl` or bordered aside — see §9; does not require a new component if built as plain semantic markup inside `Section`) | Existing `readoutPanels.caveat` retained verbatim | Existing mono-as-data-language discipline retained; distinction block is real text, not colour-coded |
| Platform | Ecosystem/architecture view | Existing per-item specimen row pattern, extended to six items | `ArtifactTech.tsx` (extended) | One new specimen sub-component for **Artifact Analytics** (e.g. a small illustrative report/insight fragment, following the existing `InspectorFragment`/`EventObject` style) | Analytics specimen must be clearly illustrative, status `Concept` | Same `aria-hidden` specimen + real-text descriptor pattern as the existing five items |
| Practice | None required — deliberately restrained, prose-led | N/A | `Section` (narrow/content width) | None | N/A | Standard section semantics |
| Final CTA | None — restrained, per existing pattern | N/A | `FinalCta` (adapted copy) | None | N/A | Existing pattern retained |

No section introduces decorative imagery merely to fill space, consistent with brief §23/§25.

---

## 9. Component implications

**Retained unchanged:** `Button`, `NavLink`, `Tag`, `Section`, `Container`, `Reveal`, `SkipLink`,
`VisuallyHidden`, `LoopDiagram`, `WorkComposite`, `Footer`.

**Requiring extension (content/props, not architecture):**
- `Nav` / `content.nav`, `navCta` — new nav item set and CTA copy.
- `Hero` / `content.hero`, `heroTrace` — new proposition copy; artefact component unchanged.
- `Work` / `content.secondaryProjects` — grows from 2 to 3 items; verify `WorkList`'s current CSS was
  designed/tested at this length (it likely was, since nothing in `WorkList.tsx` assumes a fixed count, but
  visual density at 3 vs. 2 items should be checked against the design intent of "short text-led list," not
  a fourth becoming a de facto grid).
- `Approach` / `content.lifecycle` — grows from 5 to 6 stages; `Approach.tsx` doesn't hardcode a length, but
  the timeline spine and legend grid should be checked at 6 items across breakpoints (see §11).
- `ArtifactTech` / `content.ecosystem` — grows from 5 to 6 items; the `SPECIMENS` array in
  `ArtifactTech.tsx` is currently indexed positionally and will need a sixth specimen function added (see
  below).
- `Capability` — content reframed (not restructured) from primary-offer language to supporting-capability
  language; no markup change expected.
- `Home.tsx` — section import order changes to match §6; this is the main "structural" change in this
  phase, and it's an ordering change, not new component logic.

**Requiring a new variant:**
- `ArtifactTech.tsx`'s `SPECIMENS` array needs a sixth entry, a small **Analytics** specimen function
  (following the existing `FrameworkTree` / `EventObject` / `XapiFlow` / `InspectorFragment` style — e.g. an
  illustrative small report/insight fragment). This is additive to an existing array-of-specimens pattern,
  not a new component file.

**Genuinely new components required:**
- **A Services feature/list pair**, modelled directly on `WorkFeature`/`WorkList` (same "one featured item +
  short text-led secondary list" compositional idea that already gives Work its editorial hierarchy). This
  is the one component genuinely required to make Bespoke Learning Experiences read as primary without
  falling into a four-card grid. Per brief §30 ("don't create generic component abstractions where
  content-specific compositions are stronger"), the recommendation is a **dedicated `ServiceFeature`/
  `ServiceList` pair with its own content types**, not a forced generalisation of `WorkFeature`/`WorkList`
  to cover both Work and Services — the two sections have different content shapes (a case study has
  stages and tags; a service has a question and an offer description) and forcing one generic component to
  serve both would be exactly the "generic abstraction" the brief warns against.
- An Evidence-section **distinction block** (learning-experience evidence vs. workplace transfer/behaviour/
  performance). This is small enough to build as plain semantic markup (a `dl` or a bordered `aside`) inside
  the existing `Section`/`DataStrip` components rather than as a new named component — flagged here as a
  design decision for Phase 2, not asserted as a new component.

No other new component is proposed. Practice, Product Philosophy and the Evidence section's prose all reuse
`Section` directly.

---

## 10. Content and asset dependencies

| Item | Status | Notes |
|---|---|---|
| Hero, Problem, Services, Product Philosophy, Approach, Integrated Capability, Practice, Final CTA copy | **Available now** | Drafted in §7 as v0.1 working copy. |
| ISQ eLearning design system (featured work) | **Available now, placeholder imagery acceptable** | Existing `featuredProject`/`WorkComposite` content already models this; confirm the public-safe project name before publishing it as "ISQ" specifically. |
| Wellbeing Studio | **Requires approval before publication** | Brief §14 gives a clear strategic role and a specific relationship framing ("Wellbeing Studio — Powered by Artifact Learning Platform") that must only be used "when appropriate and approved." Do not publish the "Powered by" framing without that approval; a neutral framing ("an Artifact Learning Platform project") is the safer default until confirmed. |
| Child Protection / complex professional-judgement learning | **Requires approval before publication** | Sensitive subject matter, explicitly flagged in the brief (§13) for approval before any public-safe details are drafted. This document does not draft specific copy for it — that copy should be written once approval and public-safe framing are confirmed. |
| Artifact Learning Platform / runtime (as Artifact R&D) | **Available now, requires explicit "not client work" framing** | Per brief §13, present as Artifact R&D/proprietary capability. Reuse the `WorkComposite` placeholder pattern with a distinct `imageNote` making the R&D framing explicit. |
| Artifact Analytics (sixth ecosystem entry) | **Placeholder acceptable, status must stay honest** | No shipped functionality confirmed anywhere in the reviewed docs; label `Concept`, matching the existing `Artifact Inspector` entry's honesty standard. Do not upgrade its status without verification. |
| Contact destination (`/contact`, email) | **Requires future creation** | `finalCta.email` currently carries an explicit "provisional, not yet established or verified" note. Recommend keeping the CTA as a link to the in-page `#contact`/future `/contact` route rather than a `mailto:` until a real, verified address exists — avoids publishing an unverified email as if it were live. |
| Six-stage Approach copy | **Available now** | Drafted in §7, using the brief's own stage definitions (§16) as the working copy, since they were already provided as considered stakeholder direction. |
| Services page/child routes (`/services/*`) | **Requires future creation** | Not built this phase; homepage Services section is anchor-only. |

No client outcomes, learner metrics, quotes, testimonials, or stakeholder approvals are asserted anywhere
in this document or its proposed copy.

---

## 11. Responsive implications

The existing breakpoint system (480 / 700 / 960 / 1200 / 1560) and containment tiers (`page` / `content` /
`narrow`) are retained without change. Section-specific implications of the new architecture:

- **Services (new section):** on desktop, the featured offer (Bespoke Learning Experiences) should read at
  `page` or `content` width with its own visual weight (mirroring `WorkFeature`'s two-column figure+body
  layout); the three secondary offers collapse to a single-column text-led list below 960px, exactly as
  `WorkList` already does. Do not let the secondary three become a 2-up or 3-up card grid at any breakpoint
  — that would reintroduce the "four equal cards" pattern the brief explicitly rules out.
- **Selected Work:** unchanged from current behaviour; adding a third secondary project should still fit
  the existing single-column list treatment at all breakpoints without introducing pagination or a "show
  more" control.
- **Model (loop diagram):** unchanged — the existing circular/stacked swap at 700px, single control set in
  the tab order, is preserved as-is; only its position in the page changes, not its own responsive
  behaviour.
- **Approach (six stages):** verify the timeline spine and legend grid at 6 items rather than 5, specifically
  at the 700px and 960px breakpoints where the layout is most likely to have been tuned against a 5-item
  assumption. If the spine becomes visually cramped at narrow widths, the existing `density="compact"` +
  `dl`-legend fallback pattern should absorb the extra stage without new CSS architecture — this needs a
  visual QA pass in Phase 2, not a structural change now.
- **Evidence (before/after device, relocated):** unchanged responsive behaviour from its current Problem
  placement — `DataStrip` pairs already stack to one column below the relevant breakpoint.
- **Platform (six ecosystem items):** the existing per-item row (meta + specimen) pattern already stacks to
  one column on narrow viewports; a sixth row is additive, not structural.
- **Navigation:** the existing collapse-to-menu-toggle behaviour at the nav breakpoint is unchanged; only
  the item set and CTA label change. Verify the toggle's tap target and menu list still read correctly with
  one more/different-length nav label ("Services" vs. "Capabilities").
- **CTA ordering:** Hero gains a secondary CTA ("Explore the work") alongside the existing primary
  ("Discuss a learning challenge"); on narrow viewports the primary CTA should remain first in both visual
  and DOM order, consistent with the existing single-primary-action-per-view button discipline in
  `docs/design-system.md`.

No section in this architecture requires desktop-only complexity that has no defined mobile behaviour — the
existing "compact/stacked fallback" and "one control set in the tab order" disciplines already documented
in `docs/design-system.md` are sufficient to extend to Services, the expanded Work list, and the six-stage
Approach.

---

## 12. Accessibility implications

The existing accessibility foundation (semantic sectioning, heading hierarchy via `Section`'s
`aria-labelledby` pattern, skip link, visible focus, `prefers-reduced-motion` handling, real `<button>`
nodes for the loop diagram, WCAG 2.2 AA target sizing) is preserved without regression, because this phase
changes content and ordering, not the underlying primitives.

Two risks specifically introduced by the new architecture, both manageable within the existing patterns:

1. **A new Services feature/list pair must replicate `WorkFeature`/`WorkList`'s existing accessibility
   discipline** (labelled figure via `role="img"` + `aria-label`, real `dl`/`ul` structure, meaningful link
   text on its CTA) rather than reinventing it. This is a risk only if the new component is built
   independently of that pattern rather than modelled on it — the recommendation in §9 is explicit that it
   should be.
2. **The Evidence section's "does not prove" distinction block** needs its boundary (learning-experience
   evidence vs. workplace transfer/behavioural change/organisational performance) to be carried in real text
   and structure, not colour or iconography alone — consistent with the existing non-colour-dependent-
   meaning discipline. A plain `dl` or two clearly-labelled text blocks satisfies this without new tooling.

No section in the new architecture requires new interactive/scripted behaviour beyond what already exists
(`LoopDiagram`'s button/live-region pattern, the nav's disclosure toggle, `Reveal`'s one-shot
`IntersectionObserver`). Six-stage Approach and six-item Platform are content-length changes to existing
`dl`/list-based markup, not new accessibility surface.

---

## 13. Phase 2 implementation scope

Per brief §33, Phase 2 is **homepage implementation only**. Building the full multi-page site before this
homepage direction is reviewed would repeat the mistake this phase is correcting — publishing structure
before the message is right.

**In scope for Phase 2:**
- Revised nav (Work · Services · Approach · Platform + "Discuss a learning challenge")
- Revised hero (proposition-led)
- New Services section (featured + secondary, new component pair)
- Selected Work, expanded and moved earlier in the page
- Product Philosophy section (relocated hero philosophy)
- Model section, repositioned as the philosophy→approach bridge
- Six-stage Approach
- Integrated Capability, repositioned and reframed
- New Evidence section (relocated before/after device + new distinction block)
- Platform section (relocated ecosystem, six items)
- New Practice section (replacing `CommercialStatement`)
- Final CTA, replacing copy and CTA label

**Explicitly out of scope for Phase 2:**
- `/services`, `/work`, `/approach`, `/platform`, `/about`, `/contact`, `/insights` as built routes
- Case-study detail pages
- Any content requiring approval that hasn't been granted (Wellbeing Studio's "Powered by" framing, Child
  Protection specifics)
- A verified contact email or working contact form
- Public deployment

Phase 2 should treat the homepage as the design-system and messaging proving ground for this new
commercial position; the wider multi-page site is built only after that homepage is reviewed, per brief
§33.

---

## Appendix A — Page architecture definitions for future pages (not built this phase)

Provided per brief §27, to inform Phase 3+ scoping. None of this is implemented now.

### Home
- **Purpose:** Establish the commercial proposition, prove capability, and route the visitor to Services,
  Work or Contact.
- **Primary audience question:** "Can this practice solve my learning problem, and can I trust the work?"
- **Required sections:** as defined in §6.
- **Reusable component opportunities:** all — this is the design-system proving ground.
- **Visual artefact requirements:** as defined in §8.
- **Content dependencies:** as defined in §10.

### Services overview (`/services`)
- **Purpose:** Give each of the four offers full-length treatment; route to child service pages once they
  exist.
- **Primary audience question:** "Which of these is the problem I actually have?"
- **Required sections:** Intro, four offer sections (Bespoke Learning Experiences still first and most
  detailed), a short "how engagements typically start" note, CTA.
- **Reusable component opportunities:** `ServiceFeature`/`ServiceList` (from the homepage), `Section`,
  `Tag`.
- **Visual artefact requirements:** one distinct specimen per offer, more detailed than the homepage's
  compressed versions.
- **Content dependencies:** requires the four `/services/*` child-route decision to be made first (single
  long page vs. child routes) — recommend deferring child routes until there's enough real project content
  to justify them, per the brief's "no depth without purpose" principle already established in
  `docs/strategy.md`.

### Work overview (`/work`)
- **Purpose:** The full case-study archive.
- **Primary audience question:** "Has this practice solved a problem like mine before?"
- **Required sections:** Full `WorkFeature`, complete `WorkList` (not just secondary items), a route to
  individual case-study pages once they exist.
- **Reusable component opportunities:** `WorkFeature`, `WorkList`, `WorkComposite`.
- **Visual artefact requirements:** real or placeholder imagery per project, consistent with the homepage.
- **Content dependencies:** Wellbeing Studio and Child Protection approvals (as in §10); any additional
  projects beyond the homepage's four.

### Approach (`/approach`)
- **Purpose:** Full explanation of the six-stage methodology and the Experience→Signals→Data→Insight→
  Improvement loop, including how they relate to each other (a distinction worth making explicit here,
  since the homepage doesn't have room to fully resolve it — see the unresolved-decisions note below).
- **Primary audience question:** "How does this practice actually work, stage by stage?"
- **Required sections:** Full six-stage breakdown, the loop model, a note on when Instrument is/isn't used.
- **Reusable component opportunities:** `Approach`'s timeline/legend pattern, `LoopDiagram`.
- **Visual artefact requirements:** an expanded version of the homepage's process model.
- **Content dependencies:** the Instrument-vs-Signals terminology clarification (see below).

### Platform (`/platform`)
- **Purpose:** Full ecosystem/architecture story — the fullest place the technical depth is allowed to
  expand, still framed in support of the consultancy.
- **Primary audience question:** "What's actually behind this, and how mature is it?"
- **Required sections:** Full ecosystem detail per item, an honest maturity/roadmap view, "standards where
  possible, adaptors where necessary" principle explained in full.
- **Reusable component opportunities:** `ArtifactTech`'s row/specimen pattern.
- **Visual artefact requirements:** more detailed architecture view than the homepage's compressed version.
- **Content dependencies:** ongoing accuracy of status labels as ecosystem items mature.

### About (`/about`)
- **Purpose:** The practice's reason for being organised the way it is — not a generic founder bio.
- **Primary audience question:** "Who is actually doing this work, and why does the combination matter?"
- **Required sections:** Practice section (expanded from the homepage), working model/collaborator
  approach, explicitly not a "years of experience" biography.
- **Reusable component opportunities:** `Section`, `Tag`.
- **Visual artefact requirements:** none required; restraint is appropriate here.
- **Content dependencies:** needs Glenn's input directly — this is the one page where the brief is explicit
  that generic biography language must be avoided, and that requires a real answer to "why does the
  integrated practice matter," not a template.

### Contact (`/contact`)
- **Purpose:** Convert.
- **Primary audience question:** "How do I start this conversation, and what should I bring to it?"
- **Required sections:** Short framing (reusing Final CTA's headline/supporting copy), a real contact
  method, and a short prompt for what's useful to know before reaching out (mirrors `finalCta.supporting`).
- **Reusable component opportunities:** `Section`, `Button`.
- **Visual artefact requirements:** none required.
- **Content dependencies:** a verified contact email or form endpoint — currently the only content blocker
  in this list with no workaround, since a placeholder contact method would undermine the credibility this
  whole phase is trying to build.

---

## Unresolved decisions (for Glenn's review before or during Phase 2)

1. **Instrument vs. Signals terminology overlap.** The six-stage delivery methodology's "Instrument" stage
   and the retained loop model's "Signals" stage both concern event capture, but they are different models
   (delivery methodology vs. ongoing product cycle) describing different things (what you build vs. what the
   experience produces). This document keeps them distinct and unmerged, but the homepage should make that
   relationship explicit somewhere (most naturally in the Model section's bridge copy) so the two don't read
   as the same idea said twice.
2. **Wellbeing Studio's "Powered by Artifact Learning Platform" framing** requires explicit approval before
   publication (brief §14) — this document uses a neutral fallback framing until that's confirmed.
3. **Child Protection project copy** is deliberately not drafted here — sensitive subject matter requiring
   approval before any public-safe framing is written (brief §13).
4. **Contact method.** No verified email or form exists yet; recommend resolving this before Phase 2 ships
   the Final CTA and Contact-bound nav item live, since an unverified `mailto:` undermines the same
   credibility discipline this document argues for elsewhere.
5. **Whether `WorkList` (currently designed/tested at 2 items) holds its "short text-led list" character at
   3** — a visual QA question for Phase 2, not a strategic one, but worth flagging now since it affects
   whether Child Protection and Wellbeing Studio can both ship as secondary work items without the list
   starting to feel like a grid.
6. **Font licensing for a second commercial domain.** The README's existing licensing note (ITC Avant Garde
   Gothic Std, licensed to Glenn Hammond for `glennhammond.com`) already flags that its coverage for
   `artifactlearning.com` needs confirming before any public deployment. This phase does not touch font
   files and does not change that constraint — repeated here only because Phase 2's homepage work will
   eventually run into it at deployment time, not before.

---

*Prepared as the Phase 1 deliverable per the Artifact Learning Website brief ("Phase 1: Strategic IA
Migration + Homepage Experience Definition"). No production code, homepage components, design-system
components, tokens or routing were changed to produce this document.*
