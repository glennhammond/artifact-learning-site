# Phase 6 — Publication Readiness Audit

Status labels: **READY**, **READY WITH REPRESENTATIVE LABEL**, **REPLACE BEFORE
PUBLICATION**, **APPROVAL REQUIRED**, **VERIFY**, **REMOVE / WITHHOLD**.

## Initial audit

| Item | Initial classification | Basis / required action |
|---|---|---|
| Homepage | READY | Approved Phase 5 architecture and restrained public copy. |
| Services | READY | Engagement language is conditional and makes no guarantee. |
| Work overview | READY WITH REPRESENTATIVE LABEL | All proof is code-rendered and captioned representative. |
| eLearning Design System | APPROVAL REQUIRED | No real media exists in the repository; representative proof remains. |
| Wellbeing Studio | READY WITH REPRESENTATIVE LABEL | Representative Artifact UI is explicit; no ownership/platform claim. |
| Professional judgement | APPROVAL REQUIRED | Must remain anonymous and representative pending publication approval. |
| Artifact R&D | VERIFY | Site repository does not contain Framework/runtime implementation evidence; retain conservative maturity labels. |
| Approach | READY | Evidence inside an experience is distinguished from workplace transfer. |
| Platform | READY WITH REPRESENTATIVE LABEL | Technical proof is representative and maturity-qualified. |
| About | READY | Founder description stays within confirmed general role. |
| Contact | REPLACE BEFORE PUBLICATION | No verified email, booking URL or form endpoint exists. Honest non-submitting state retained. |
| 404 | READY | Minimal, but should add a route to Work alongside Home. |
| Phase 1 archive routes | REMOVE / WITHHOLD | Historical prototypes contain placeholder contact behaviour and are not part of the public Phase 6 IA. Preserve source and development access only. |
| Navigation and CTAs | VERIFY | Static route audit plus rendered Back/Forward/direct-load QA required. |
| Route-change focus | VERIFY | Phase 5 scroll reset needs explicit focus movement for client-side navigation. |
| Real media inventory | REPLACE BEFORE PUBLICATION | No PNG/JPEG/WebP/SVG/video work media exists; do not fabricate replacements. |
| ITC Avant Garde binaries | APPROVAL REQUIRED | Three binaries are committed publicly; README says the personal licence/domain scope is unverified. Owner/legal decision required. |
| Open-source fonts | READY | Source Sans 3 and IBM Plex families are supplied through OFL packages. |
| Route metadata | READY | Distinct titles/descriptions exist; basic Open Graph text can be added without inventing an image. |
| Favicon | VERIFY | Current empty data favicon should be replaced by the existing Signal-square identity mark. |
| Privacy/security | VERIFY | Initial filename-only secret scan produced token-language false positives; targeted source review required. |
| Responsive/browser QA | VERIFY | Required rendered inspection has not yet been completed. |
| Vercel production smoke test | VERIFY | Required after deployment. |

## Real asset inventory

No publication media files were found outside fonts. There are no genuine
eLearning Design System, Wellbeing Studio, professional-judgement or Artifact
R&D screenshots/video assets available to evaluate or substitute. Phase 4/5
representative components therefore remain the strongest defensible proof.

## Contact decision

No verified public email or external contact/booking URL is present. Historical
wireframes contain an explicitly placeholder address and are not verification.
Option C applies: retain the non-submitting Contact page and treat contact
integration as a publication blocker.

## Font/licensing gate

`src/assets/fonts/` contains Medium, Demi and Bold ITC Avant Garde Gothic Std
binaries. Repository documentation says they are personally licensed to Glenn
Hammond but explicitly requires confirmation for a second commercial site/domain
and public-repository exposure. No licence terms establishing redistribution
rights were found. Do not remove the typeface, claim permission or rewrite Git
history in this phase. Publication requires an owner/legal decision and, if
needed, an approved private/font-delivery approach.

## Final disposition

### Code-level changes completed

- Historical archive routes are development-only; source remains preserved.
- Route changes now reset scroll and move focus to the destination H1 after
  client-side navigation.
- Contact retains an honest non-submitting state with public-facing wording.
- Work captions remain status-qualified with less repetitive caveat text.
- Public copy received a UK English, punctuation and evidence-integrity pass.
- Basic Open Graph text metadata and a Signal-square favicon were added.
- Production output contains no archive placeholder email/contact residue,
  local paths or review-build labels.
- No high-confidence secret pattern, environment file, private URL, learner
  name, stakeholder name or internal email was found.
- No real Work media was available, so no substitution was made.
- R&D maturity was not promoted beyond conservative in-development/concept
  language because this repository contains no implementation evidence.

### Remaining classifications

| Item | Final classification | Remaining action |
|---|---|---|
| Public routes and code | READY | Static checks pass. |
| Representative Work proof | READY WITH REPRESENTATIVE LABEL | Replace only when approved, publication-quality media exists. |
| Professional judgement | APPROVAL REQUIRED | Keep current anonymous prototype until publication approval. |
| Contact | REPLACE BEFORE PUBLICATION | Supply a verified public destination. |
| ITC Avant Garde fonts | APPROVAL REQUIRED | Resolve licence/domain and public-repository redistribution. |
| R&D maturity | VERIFY | Confirm against the actual Framework/runtime repositories. |
| Rendered accessibility/responsive/routing | VERIFY | Complete required browser review and Vercel smoke test. |

## Publication state

**NOT READY FOR PUBLICATION.** The code is a publication candidate, but contact,
font licensing, R&D verification and the mandatory rendered/Vercel gate remain
open.
