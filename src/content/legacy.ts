/**
 * Frozen Phase 1 content for the archived Concept A/B/C prototypes only.
 * `content/shared.ts` is the LIVE homepage content and has been rewritten
 * twice since Phase 1 (Phase 2's v0.2 model refinement, and the v0.3
 * content pass). The archive under /archive is a historical record of what
 * was actually reviewed in Phase 1 and must not silently drift each time
 * the live content changes: see docs/consolidation-decision.md.
 *
 * Every value below originated in the original Phase 1 commit (efbefb1),
 * with repository-wide language conventions applied. Do not import this from `src/home/`, and do not update it when
 * `content/shared.ts` changes: that's the point of it existing separately.
 */

export const legacyHero = {
  eyebrow: "Artifact Learning",
  headline: "Digital learning as a product, not a course.",
  standfirst:
    "Artifact applies modern digital product practice (design, delivery, measurement and improvement) to organisational learning. Not a course. A product, held to the same standard as the rest of your digital estate.",
  cta: "See how we work",
};

export const legacyProblem = {
  headline: "Completion is a very small part of the picture.",
  body: "Most organisations know whether somebody completed their training. Far fewer know what happened inside the experience, or what people can actually do afterwards. Conventional learning technology is built to report enrolment, completion, pass/fail and score. It stops there.",
};

interface LegacyModelLayer {
  index: string;
  name: string;
  description: string;
}

export const legacyModelLayers: LegacyModelLayer[] = [
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
    description: "xAPI, a Learning Record Store, structured learning events. What can be observed.",
  },
  {
    index: "04",
    name: "Insight",
    description:
      "Reporting, interpretation and evaluation, feeding back into the next iteration of the experience.",
  },
];

export const legacyModelCaption =
  "Insight informs the next iteration of the experience, not a report that sits on a shelf.";

export const legacyReadoutPanels = {
  before: {
    label: "What a completion report shows",
    lines: ["STATUS     completed", "SCORE      82%", "TIME       14m 02s"],
  },
  after: {
    label: "What an instrumented experience can also show",
    lines: [
      "decision.presented   scenario: vendor-risk-01",
      "decision.responded   choice: escalate · 4.1s",
      "decision.completed   outcome: correct · attempt 1",
    ],
  },
  caveat: "Illustrative event shapes, not output from a real client project.",
};

interface LegacyProject {
  eyebrow: string;
  question: string;
  framing: string;
  status?: string;
}

export const legacyFeaturedProject: LegacyProject = {
  eyebrow: "Case study: placeholder",
  question:
    "How do you keep digital learning consistent and accessible across an organisation, without redesigning every experience from scratch?",
  framing:
    "Placeholder project framing for design review. It describes the kind of problem a case study would document, not a real client engagement. No outcomes are stated because none have occurred here.",
};

export const legacySecondaryProjects: LegacyProject[] = [
  {
    eyebrow: "Placeholder",
    question: "A blended compliance experience where the pass/fail record hid a real comprehension gap.",
    framing: "Problem framing only; placeholder for design review.",
    status: "in build",
  },
  {
    eyebrow: "Placeholder",
    question:
      "Rebuilding an onboarding program around what new starters actually needed to decide, not what was easiest to script.",
    framing: "Problem framing only; placeholder for design review.",
    status: "shipped",
  },
];

interface LegacyCapabilityGroup {
  index: string;
  name: string;
  terms: string[];
}

export const legacyCapabilityGroups: LegacyCapabilityGroup[] = [
  {
    index: "01",
    name: "Learning experience design",
    terms: ["strategy", "instructional design", "UX", "scenario design", "assessment", "prototyping"],
  },
  {
    index: "02",
    name: "Digital learning development",
    terms: ["Rise", "Storyline", "React", "custom HTML/JS", "multimedia"],
  },
  {
    index: "03",
    name: "Learning platforms & systems",
    terms: ["Moodle", "LMS UX", "learning portals", "design systems", "components"],
  },
  {
    index: "04",
    name: "Measurement & learning analytics",
    terms: ["measurement planning", "xAPI", "LRS", "learning events", "evaluation"],
  },
];

interface LegacyLifecycleStep {
  index: string;
  name: string;
}

export const legacyLifecycle: LegacyLifecycleStep[] = [
  { index: "01", name: "Discover" },
  { index: "02", name: "Design" },
  { index: "03", name: "Build & Instrument" },
  { index: "04", name: "Measure" },
  { index: "05", name: "Improve" },
];

export const legacyLifecycleCaption =
  "A working lifecycle, not a one-off delivery. Each stage is designed to feed the next.";

interface LegacyEcosystemItem {
  name: string;
  status: "in development" | "in design" | "concept";
  note: string;
}

export const legacyEcosystem: LegacyEcosystemItem[] = [
  { name: "Artifact Framework", status: "in development", note: "Engineering foundation, design tokens, tooling." },
  {
    name: "Artifact Components",
    status: "in design",
    note: "Reusable learning interactions; one component specified so far.",
  },
  {
    name: "Artifact Events",
    status: "in design",
    note: "A structured learning-event model; shapes researched, not yet built.",
  },
  {
    name: "Artifact xAPI",
    status: "in design",
    note: "xAPI mapping researched against the spec and ADL verb registry, not yet implemented.",
  },
  {
    name: "Artifact Inspector",
    status: "concept",
    note: "A learning-event and xAPI debugging tool; specified, not started.",
  },
];

export const legacyEcosystemIntro =
  "Artifact is also becoming the foundation for a small technical ecosystem: a component framework, a structured learning-event model and xAPI instrumentation built to support the practice's own work. Most of it is still in design, and it's described here at the stage it actually is.";

export const legacyFinalCta = {
  headline: "Working on a digital learning problem worth taking seriously?",
  action: "Tell us what you're trying to solve",
  email: "hello@artifactlearning.com",
  emailNote: "Placeholder address for this design-review build.",
};

export const legacyNav = [
  { label: "Work", href: "#work" },
  { label: "Model", href: "#model" },
  { label: "Approach", href: "#approach" },
  { label: "Artifact", href: "#artifact-tech" },
];
