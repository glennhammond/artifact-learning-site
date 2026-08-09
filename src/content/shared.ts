/**
 * Copy shared verbatim across all three homepage concepts.
 * Variation between concepts A/B/C should come from composition, visual
 * language, interaction and density — not from rewriting the underlying
 * claims each time. All content here is provisional working copy for a
 * design-review prototype, not final marketing copy. No client outcomes,
 * metrics or names are invented anywhere in this file.
 */

export const hero = {
  eyebrow: "Artifact Learning",
  headline: "Digital learning as a product, not a course.",
  standfirst:
    "Artifact applies modern digital product practice — design, delivery, measurement, improvement — to organisational learning. Not a course. A product, held to the same standard as the rest of your digital estate.",
  cta: "See how we work",
};

export const problem = {
  headline: "Completion is a very small part of the picture.",
  body: "Most organisations know whether somebody completed their training. Far fewer know what happened inside the experience, or what people can actually do afterwards. Conventional learning technology is built to report enrolment, completion, pass/fail and score — and stops there.",
};

export interface ModelLayer {
  index: string;
  name: string;
  description: string;
}

export const modelLayers: ModelLayer[] = [
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

export const modelCaption =
  "Insight informs the next iteration of the experience — not a report that sits on a shelf.";

export const readoutPanels = {
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
  caveat: "Illustrative event shapes — not output from a real client project.",
};

export interface Project {
  eyebrow: string;
  question: string;
  framing: string;
  status?: string;
}

export const featuredProject: Project = {
  eyebrow: "Case study — placeholder",
  question:
    "How do you keep digital learning consistent and accessible across an organisation, without redesigning every experience from scratch?",
  framing:
    "Placeholder project framing for design review — describes the kind of problem a case study would document, not a real client engagement. No outcomes are stated because none have occurred here.",
};

export const secondaryProjects: Project[] = [
  {
    eyebrow: "Placeholder",
    question:
      "A blended compliance experience where the pass/fail record hid a real comprehension gap.",
    framing: "Problem framing only — placeholder for design review.",
    status: "in build",
  },
  {
    eyebrow: "Placeholder",
    question:
      "Rebuilding an onboarding programme around what new starters actually needed to decide, not what was easiest to script.",
    framing: "Problem framing only — placeholder for design review.",
    status: "shipped",
  },
];

export interface CapabilityGroup {
  index: string;
  name: string;
  terms: string[];
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    index: "01",
    name: "Learning experience design",
    terms: [
      "strategy",
      "instructional design",
      "UX",
      "scenario design",
      "assessment",
      "prototyping",
    ],
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

export interface LifecycleStep {
  index: string;
  name: string;
}

export const lifecycle: LifecycleStep[] = [
  { index: "01", name: "Discover" },
  { index: "02", name: "Design" },
  { index: "03", name: "Build & Instrument" },
  { index: "04", name: "Measure" },
  { index: "05", name: "Improve" },
];

export const lifecycleCaption =
  "A working lifecycle, not a one-off delivery — each stage is designed to feed the next.";

export interface EcosystemItem {
  name: string;
  status: "in development" | "in design" | "concept";
  note: string;
}

export const ecosystem: EcosystemItem[] = [
  {
    name: "Artifact Framework",
    status: "in development",
    note: "Engineering foundation, design tokens, tooling.",
  },
  {
    name: "Artifact Components",
    status: "in design",
    note: "Reusable learning interactions — one component specified so far.",
  },
  {
    name: "Artifact Events",
    status: "in design",
    note: "A structured learning-event model — shapes researched, not yet built.",
  },
  {
    name: "Artifact xAPI",
    status: "in design",
    note: "xAPI mapping researched against the spec and ADL verb registry, not yet implemented.",
  },
  {
    name: "Artifact Inspector",
    status: "concept",
    note: "A learning-event and xAPI debugging tool — specified, not started.",
  },
];

export const ecosystemIntro =
  "Artifact is also becoming the foundation for a small technical ecosystem — a component framework, a structured learning-event model, and xAPI instrumentation, built to support the practice's own work. Most of it is still in design, and it's described here at the stage it actually is.";

export const finalCta = {
  headline: "Working on a digital learning problem worth taking seriously?",
  action: "Tell us what you're trying to solve",
  email: "hello@artifactlearning.com",
  emailNote: "Placeholder address for this design-review build.",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Model", href: "#model" },
  { label: "Approach", href: "#approach" },
  { label: "Artifact", href: "#artifact-tech" },
];
