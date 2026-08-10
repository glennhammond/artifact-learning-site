# Phase 4 — Visual Proof System + Work Showcase

## 1. Purpose

Phase 4 strengthens commercial proof without changing the approved Phase 3
homepage architecture or increasing page length. The governing direction is
**more pixels, fewer words**: visual material must demonstrate the experience,
the decisions behind it, the system supporting it, or the evidence it emits.

## 2. Proof taxonomy

- **Experience** — what a learner sees, decides or does.
- **Decision** — the learning-design reasoning or consequential choice.
- **System** — components, states, architecture and reusable structures.
- **Evidence** — meaningful events or interpretation, with explicit limits.

Signal identifies a selected decision or consequential state. It is not used
as general decoration.

## 3. Current visual audit

The Phase 3 Hero already communicates experience → decision → signal and is
retained. Work previously depended on a grey SVG wireframe for the featured
project and repeated schematic thumbnails for every secondary item. The
Bespoke service specimen described a choice but did not resemble a finished
learning product. Platform already provides an appropriately compact ecosystem
view and remains unchanged in this phase.

## 4. Asset statuses

All Phase 4 Work visuals are currently **representative code-rendered proof**.
None is presented as a real client screenshot. Metadata lives in
`src/content/workAssets.ts` and records project, proof role, status, alt text,
caption, replacement source and approval state.

| Project | Proof role | Current status | Approval dependency |
|---|---|---|---|
| eLearning Design System | System | Representative | Approved interface and documentation crops |
| Professional judgement | Decision | Representative | Case-study publication approval; anonymity retained |
| Wellbeing Studio | Experience | Representative | Approved programme/product media |
| Artifact R&D | Evidence | Representative | Internal maturity review; status labels must remain |

## 5. Work visual strategy

The featured design-system proof combines a desktop learning interface,
response states, component anatomy and a mobile crop. Each layer can later be
replaced independently. Secondary work uses three distinct editorial
compositions rather than a shared thumbnail: an anonymous professional
decision, a programme-based Wellbeing Studio hub, and an Artifact R&D event
flow with maturity labels.

## 6. Bespoke specimen strategy

The primary service now uses an **Artifact experience specimen** with credible
but fictional workplace content. It demonstrates context → available evidence
→ learner response → tailored feedback → observable signal. It is a visual
demonstration, not an interactive knowledge check or client project.

## 7. Artifact R&D representation rules

Every R&D layer must state its maturity. Implemented components, in-development
event infrastructure, prototypes and concepts must not share an undifferentiated
product treatment. Evidence fragments describe activity inside an experience;
they do not claim workplace transfer or organisational impact.

## 8. Accessibility rules

- Each composite has a concise text equivalent through `role="img"` and an
  asset-model alt description.
- Internal visual layers are hidden from assistive technology to prevent a
  long sequence of fragmentary interface text.
- Visible captions state representative status and proof role.
- Meaning does not depend on Signal, scale, overlap or small mono text alone.
- Proof remains non-interactive; no false controls enter the keyboard order.
- Mobile layouts remove positioning dependencies and preserve narrative order.

## 9. Asset replacement workflow

1. Obtain written publication approval and confirm any required anonymity.
2. Add optimised media under the matching `src/assets/work/<project>/` path.
3. Update the relevant entry in `src/content/workAssets.ts`: source, status,
   alt text, caption and approval state.
4. Replace only the corresponding proof layer/component, preserving its figure
   and caption contract.
5. Verify desktop/mobile crops, loading behaviour, alt text and claims.
6. Run typecheck, lint, build and responsive review before publication.

## 10. Real assets still required

- Approved eLearning design-system interface, component and documentation crops.
- Wellbeing Studio programme hub, practice and session surfaces.
- Publication-safe professional-judgement interaction material.
- Genuine Framework/runtime, DecisionPoint, Inspector and Session Insight captures.

## 11. Approval dependencies

No Phase 4 composition asserts client outcomes, metrics, quotes or approval.
Professional-judgement material remains anonymous and publication pending.
Wellbeing Studio uses an explicitly representative Artifact prototype. Artifact
R&D status labels must be reviewed whenever real captures replace the current
representation. The featured design-system composite remains representative
until project media is explicitly cleared.

## 12. Recommendation for Phase 5

Phase 5 should be an asset and publication pass, not another homepage redesign.
Prioritise approved media for the featured design-system case study, then
Wellbeing Studio, followed by publication-safe professional-judgement material
and genuine R&D captures. Review the Vercel preview across the five target
widths before deciding whether any composition needs a small crop or density
adjustment. Do not add new homepage sections.
