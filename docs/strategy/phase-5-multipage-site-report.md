# Phase 5 — Multi-page Site Report

## 1. Executive summary

Phase 5 turns the approved Phase 4 homepage into a seven-route Artifact
Learning site. The homepage composition and proof system remain intact; only
navigation and CTA destinations change. Inner pages now carry service detail,
case-study depth, methodology, the product-improvement model, platform/R&D
context, integrated-practice information and a truthful contact placeholder.

## 2. Branch and commit

- Branch: `phase-5-multipage-site`
- Base: merged and approved Phase 4 implementation
- Commit: recorded in repository history with this report

## 3. Routes added

- `/services`
- `/work`
- `/work/elearning-design-system`
- `/work/wellbeing-studio`
- `/work/professional-judgement`
- `/work/artifact-rd`
- `/approach`
- `/platform`
- `/about`
- `/contact`

The existing homepage, archive, concept redirects and fallback route are
preserved. `/insights` and a blog shell are deliberately absent. A Vercel SPA
rewrite supports direct loading of nested routes.

## 4. Navigation changes

Primary navigation now uses React Router routes: Work, Services, Approach,
Platform and About. The Artifact wordmark links to `/`; the primary CTA links
to `/contact`. The footer uses the same restrained route set plus Contact.
Sticky behaviour, responsive disclosure, keyboard controls and focus styling
are retained.

## 5. Reusable components added

- `SiteShell` — shared skip link, navigation, main landmark and footer.
- `PageIntro` — one consistent inner-page H1 composition with optional context.
- `CtaBand` — shared route-level next step.
- `usePageMeta` — route-specific title and description without an SEO package.

These are limited to genuine repetition. No page-builder, CMS abstraction or
generic Card component was introduced.

## 6. Page-by-page architecture

- **Services:** one dominant Bespoke offer, three editorial secondary offers,
  engagement situations/activities/outputs, related work and Learning
  Experience Definition.
- **Work:** Phase 4 featured and secondary proof compositions reused at full
  editorial weight.
- **Approach:** six-stage method, evidence principles and the single deeper home
  for Experience → Signals → Data → Insight → Improvement.
- **Platform:** buyer-readable architecture, honest maturity-labelled ecosystem
  and standards/adaptor philosophy.
- **About:** integrated-practice rationale and restrained confirmed founder role.
- **Contact:** conversation prompts and an explicit non-submitting integration
  placeholder.

## 7. Work and case-study structure

`/work/:slug` uses one route architecture and project-specific content/proof.
The eLearning Design System is the most detailed current case. Wellbeing Studio
explains programme-based learning. Professional judgement is deliberately
limited and anonymous. Artifact R&D is explicitly internal capability, not
client work or software for sale.

## 8. Real versus representative assets

All current Work proof remains representative code-rendered material. Each
asset retains a proof role, status, alt text, caption, source slot and approval
state. The model now also records media kind and stable aspect-ratio intent for
static images, responsive images, video thumbnails, annotated interfaces and
code specimens. No video URL or embed is invented.

## 9. Accessibility review

- Every new route has one H1 and a main landmark.
- Shared skip link, focus treatment and responsive nav remain present.
- Heading order follows page hierarchy.
- Internal navigation uses meaningful link text.
- Complex Phase 4 visuals retain concise text equivalents and visible status
  captions; visual fragments remain outside the tab order.
- Contact does not expose a deceptive form or non-functional submit action.
- No meaning depends solely on Signal, crop or motion.

## 10. Responsive review

CSS compositions are designed to stack at narrow widths and use two- or
three-column editorial layouts where desktop space supports them. Proof
components retain their Phase 4 responsive behaviour. Rendered review at 375,
768, 1024, 1440 and 1728px remains pending for the Vercel preview because a
local browser was unavailable during implementation.

## 11. SEO and document titles

`usePageMeta` sets the requested route-specific titles and concise descriptions.
The base HTML metadata now reflects the homepage proposition. No SEO dependency
was added. The review build retains its existing `noindex, nofollow` directive
until publication readiness is confirmed.

## 12. Technical and test results

The implementation uses the existing React Router and introduces no dependency.

- `npm run typecheck` — passed.
- `npm run lint` — passed with no errors or warnings.
- `npm run build` — passed; Vite production build completed successfully.
- `git diff --check` — passed.

No separate test suite is defined in `package.json`. Rendered browser QA remains
pending for the Vercel preview as recorded above.

## 13. Unresolved contact dependency

There is no verified public email or form endpoint. `/contact` clearly states
that it does not collect or submit information. A verified destination must be
provided before a functional final action is added; no backend or third-party
service has been introduced.

## 14. Publication and approval dependencies

- Professional-judgement client identity, subject content and screenshots
  remain withheld pending publication approval.
- Wellbeing Studio uses representative Artifact UI and makes no platform
  relationship claim.
- eLearning Design System project crops require explicit clearance.
- Artifact R&D maturity labels require review when implementation changes.
- No client outcomes, metrics, stakeholder names, testimonials or guarantees
  are asserted.

## 15. Real assets still required

- Approved eLearning Design System interface and documentation crops.
- Approved Wellbeing Studio product and programme media.
- Publication-safe professional-judgement material.
- Genuine current Framework, runtime, DecisionPoint and Inspector captures.
- Any approved video thumbnails or URLs, with transcripts/captions as needed.

## 16. Recommendation for Phase 6

Phase 6 should be a publication-readiness pass: complete Vercel responsive and
keyboard QA, resolve the contact destination, replace representative layers as
approved assets arrive, validate R&D maturity labels, and decide whether the
site should remain no-index. Do not add Insights until meaningful content
exists.
