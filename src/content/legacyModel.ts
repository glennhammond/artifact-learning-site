/**
 * Frozen Phase 1 content for the archived Concept A/B/C prototypes only.
 * `content/shared.ts` was updated for Phase 2 to the v0.2-refined model
 * (Experience → Signals → Data → Insight → Improvement, Platform as a base
 * plane) — see docs/consolidation-decision.md. The archive under /archive
 * is a historical record of what was actually reviewed in Phase 1 and must
 * not silently drift when the live model content changes. Do not import
 * this from `src/home/`.
 */
import type { ModelLayer } from "./shared";

export const legacyModelLayers: ModelLayer[] = [
  {
    index: "01",
    name: "Experience",
    description:
      "Rise, Storyline, React, video, custom interaction. What the learner actually sees and does.",
  },
  {
    index: "02",
    name: "Platform",
    description:
      "Moodle, LMS environments, learning portals. Where the experience lives and is delivered.",
  },
  {
    index: "03",
    name: "Data",
    description:
      "xAPI, a Learning Record Store, structured learning events. What can be observed.",
  },
  {
    index: "04",
    name: "Insight",
    description:
      "Reporting, interpretation, evaluation — feeding back into the next iteration of the experience.",
  },
];

export const legacyModelCaption =
  "Insight informs the next iteration of the experience — not a report that sits on a shelf.";

export const legacyHeroCta = "See how we work";
