# Artifact Learning — Working Strategy (Phase 1A)

Status: **working draft for design review**, not final brand strategy. Written to unblock Phase 1B/1C exploration. Confirmed requirements, hypotheses and open decisions are labelled throughout — do not read hypotheses as settled fact.

---

## 1. Positioning

**What Artifact is.** A design and technology studio for organisations that want to treat digital learning with the rigour of a modern digital product: designed with intent, built with instrumentation in mind, measured honestly, and improved on evidence rather than replaced on a cycle. Working thesis: **digital learning as a product, not a course.** Operating idea: **design → delivery → measurement → improvement.** Lifecycle: **Discover → Design → Build & Instrument → Measure → Improve.**

**What Artifact is not.**
- Not a SCORM production house or elearning-conversion vendor (leads with content-in, package-out).
- Not a generic L&D consultancy (strategy with no build capability).
- Not an LMS or EdTech SaaS vendor (selling a proprietary platform).
- Not a renamed freelance portfolio — it is a studio, presented at its real, small-practice scale, working with collaborators on specific engagements rather than implying a large permanent agency.
- Not a developer-tools or data-platform company — the technical ecosystem (Framework, Events, xAPI, Inspector) supports the learning proposition; it does not replace it as the headline.

**Real scale.** Confirmed: this is presently a practice of one, working with collaborators per engagement. The website must read as credible at that scale — depth and craft carry the credibility, not headcount or client-logo signalling. No fabricated team pages, no invented case studies, no manufactured "trusted by" section.

## 2. Audience hypotheses (unvalidated — no user research exists)

1. **L&D / capability leaders at mid-to-large organisations** who are unsatisfied with completion-rate reporting and want digital learning evaluated and improved like a product. Likely arrive via referral or search for "learning experience design," "digital learning measurement," or a named technology (Rise, Storyline, xAPI, Moodle).
2. **Digital / product / UX leaders** loosely responsible for a learning or onboarding product who want it to feel like the rest of their digital estate, not a bolted-on LMS course.
3. **Peers and technically curious visitors** — other learning designers, developers, and technologists interested in Artifact's methods, the Framework, and its event/xAPI approach. Secondary audience; important for credibility and future hiring/collaboration, but never allowed to dominate the homepage over audience 1.

These are hypotheses to validate through the design review and, later, real inbound enquiries — not research findings.

## 3. Customer problems Artifact is positioned to solve

- **Completion tells you almost nothing.** Confirmed as a stated core problem in the brief; conventional LMS reporting stops at enrolment/completion/score, leaving no visibility into what happened *inside* the experience or what people can do afterwards.
- **Learning content is commissioned once and never revisited.** No feedback loop from usage back into design.
- **Tool-first buying.** Organisations select a platform (an LMS, an authoring tool) before they have decided what the learning experience needs to do, then design around the tool's constraints.
- **Fragmented supply chain.** Strategy, instructional design, UX, build and platform work are frequently split across separate vendors with no single party accountable for the whole experience.

## 4. Differentiation

| vs. | Artifact's difference |
|---|---|
| eLearning production suppliers | Leads with learning science + UX + product thinking, not tool output; instrumentation and measurement are designed in from the start, not bolted on. |
| Traditional learning consultancies | Can design the strategy *and* build and instrument the resulting experience — not a strategy deck handed to someone else to implement. |
| Learning technology vendors | Tool-agnostic by design (Rise, Storyline, React, Moodle, custom builds); the studio is not selling a proprietary platform, so recommendations are not constrained by what one vendor's platform can do. |

The credible differentiator is the *integration* — learning science, UX/UI, digital development, platform work, instrumentation and analytics held together by one practice — not any single deliverable named on its own.

## 5. Content hierarchy — what a visitor needs to understand, in order

1. **Immediately (first screen):** Artifact treats digital learning as a product, not a course, and applies real digital-product rigour to organisational learning. This is a studio, not a course vendor or an LMS.
2. **Next (first scroll):** Why that matters — the completion-only problem; the four-layer model (Experience / Platform / Data / Insight) and its feedback loop; evidence that this isn't just a claim (real project work, framed by problem and decision, not a screenshot gallery).
3. **After interest is established:** Capability detail (learning experience design, digital learning development, platforms, measurement), the working lifecycle, the emerging Artifact technical ecosystem (clearly labelled by maturity), and a direct route to contact.

## 6. Recommended initial information architecture

Primary navigation (hypothesis, refined from the brief's draft):

```
Home · Work · Approach · Artifact · Studio · Contact
```

Changes from the brief's draft list, and why:
- **Folded "What we do" into Approach.** A stand-alone capability page and a stand-alone approach/lifecycle page would say much the same thing twice at this scale. One page — *Approach* — covers both "how we work" (Discover → Design → Build & Instrument → Measure → Improve) and "what that produces" (the four capability groupings from §21 of the brief). Revisit this split once Approach content is written in full; if it grows too large, splitting is a cheap later change.
- **Kept Artifact and Studio distinct**, because they serve different questions from different audiences: *Artifact* answers "what is the technical ecosystem/IP behind this?" (Framework, Components, Events, xAPI, Inspector — clearly staged by maturity); *Studio* answers "who is doing this work and can I trust them?" (practice, working model, collaborators). Collapsing them into one "About" page would bury the technical story the secondary audience is there for.
- **Insights and Lab deliberately deferred**, per the brief — no content exists yet to justify them, and adding a nav item with nothing behind it undermines the "no depth without purpose" principle. Add Insights once there is a first piece of writing worth publishing; add Lab once ecosystem tools (Inspector, Analytics) have something demonstrable.

Sitemap for this phase:

```
/                    Home (built in this phase, 3 concepts)
/work                Not built this phase
/work/:slug          Case studies — not built this phase
/approach            Not built this phase
/artifact            Ecosystem overview — not built this phase
/studio               Practice/about — not built this phase
/contact             Not built this phase
```

## 7. Relationship to glennhammond.com

Findings from reading the `gh-com-prototype` repository (`main`, the authoritative branch — see §8 below) inform this directly.

**Share:**
- The *quality discipline*, not the specific palette or typeface: fluid `clamp()` type scale, no box-shadow/backdrop-filter/gradient/glassmorphism, restrained sharp-cornered geometry, a token architecture with computed contrast ratios and a dark-context remap pattern (GH's `.on-ink`).
- The *structural convention* of a monospace "kicker" label for eyebrows/metadata — not the same typeface, but the same idea: technical, quiet, uppercase, wide-tracked.
- The discipline of **one primary evidence image** per section/page rather than a screenshot gallery, and content modelled as data (not markup) so it can be audited for placeholders.
- Editorial restraint: real sentences, no decorative iconography, no manufactured trust signals.

**Must not share:**
- GH's actual colour system ("Ink, Brass and Mineral" — warm paper, ink, brass, mineral green) is Glenn's personal-practice palette and must not be reused for Artifact, both because the brief requires an independently resolved Artifact palette and because reusing it would make the two sites read as the same brand.
- GH's display typeface, **ITC Avant Garde Gothic Std**, is a font Glenn holds a personal licence for inside the `gh-com-prototype` repository. It has not been copied into this repository and should not be, both for licensing reasons and because identical display type would collapse the "family, not duplicate" boundary the brief asks for.
- GH's specific navigation labels, section sequence, and its personal "four layers, one owner" narrative — Artifact's narrative is organisational and cyclical (Insight feeds back into Experience), not personal and linear.

**Recommendation on shared typographic DNA:** share the *pattern*, not the *files*. Body copy across both sites can reasonably converge on a humanist grotesk in the Inter family (GH already uses Inter Variable for body text — safe, open-licensed, proven accessible there). For Artifact's display voice, use a distinct geometric sans rather than Avant Garde Gothic — this prototype uses **Space Grotesk**, chosen for a more structural, technical character appropriate to "systemic, product-led" positioning, paired with a monospace face for meta/data labels (echoing GH's kicker convention without reusing JetBrains Mono specifically — this prototype uses **IBM Plex Mono**, chosen for its slightly more technical/instrumentation feel). This gives authorship resemblance — the same *kind* of typographic decision-making — without Artifact reading as a GH sub-brand. Treat the specific typeface choices below as **provisional, pending review**, not final brand decisions.

**How Artifact achieves independent recognition:** through content model and interaction model, not decoration. GH is personal, editorial, reflective, portfolio-led, single-author. Artifact is a studio: organisational problems, a four-part system with a feedback loop, case studies framed by decisions rather than deliverables, and — in Directions B and C — visible expression of the data/instrumentation layer that has no equivalent on a personal site. That difference in *what the site is about* is the primary source of brand independence; palette and type are secondary reinforcement.

## 8. GH source review — what was treated as authoritative and why

`gh-com-prototype`, branch **`main`** (commit `db540ec`) was treated as the authoritative current redesign direction. It is the fast-forward merge target of `feature/work-page-improvements`, which itself carries forward `feature/rise-storyline-services`. Two Claude-generated exploratory branches (`claude/isq-elearning-design-system-4sh5cq`, `claude/elearning-design-system-case-4f8jne`) were reviewed and ruled out: the first was superseded and its usable content already recovered into `main`; the second is a same-day side-experiment that reverted its own case-study changes and was never merged (confirmed not an ancestor of `main`). `main` also contains the fullest and most recent design documentation (`V3.3-IMPLEMENTATION-REPORT.md`, `DECISIONS.md`, `V3.1-TOKENS.md`), which corroborates the token, colour and typography findings used above.

## 9. Risks

- **Positioning risk — sounding like every other "learning is a product" studio.** Mitigated only by the case-study pattern (problem → decision → evidence) actually being followed once real Work content is written; the homepage claim alone is not differentiation.
- **Comprehension risk — the four-layer model (Experience/Platform/Data/Insight) reads as abstract without a concrete example.** Direction B and C carry more risk here than A; each concept anchors the model in something concrete (an interaction, a real-looking event) rather than a pure diagram.
- **Credibility risk — overstating the Artifact ecosystem.** Confirmed from reading `artifact-learning-framework`: Framework, Components, Events, xAPI and Inspector are, without exception, either early scaffolding or design documents with no shipped functionality. The homepage and any ecosystem content in this phase must describe them as in-design/in-development, never as working product. No "Artifact Analytics" or "Artifact Studio" naming was found anywhere in that repository; both are treated here as unconfirmed future-concept names only, used sparingly and clearly labelled as such where used at all.
- **Scope risk — case studies.** No real Artifact project content exists yet. Homepage prototypes use clearly labelled placeholder project framing (a problem statement and a description of the kind of decision that would be documented) — never invented outcomes, metrics, or client names.
- **Visual-brand risk — collapsing into GH.** Addressed by the palette/typeface decisions in §7; final risk mitigation depends on Glenn's review confirming the family/independence balance actually reads correctly, which is the point of this design review.
- **Technology-first risk.** The brief is explicit that xAPI/analytics must not be presented as proof of learning transfer or business impact. All prototype copy referring to data/evidence is scoped to *what was observed*, not to *proof of outcome*.

---

*Prepared as input to Phase 1B/1C exploration. Supersede or amend after design review.*
