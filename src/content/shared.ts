/**
 * Homepage content — Artifact Learning Homepage Content & Visual Direction
 * v0.4 (Phase 2 commercial repositioning). Working copy for design review,
 * not final marketing copy. No client outcomes, metrics, names or approvals
 * are invented anywhere in this file; interface/event/data examples are
 * illustrative design content unless explicitly noted otherwise. See
 * docs/strategy/phase-1-strategic-ia-homepage-definition.md for the strategy
 * this content implements.
 */

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Platform", href: "#platform" },
];

/** Differentiated with restraint (outline, not a filled button) — v0.4 §1. */
export const navCta = { label: "Discuss a learning challenge", href: "#contact" };

// ---- 2. Hero ----

export const hero = {
  eyebrow: "Artifact Learning",
  headline: "Develop capability, not just completion.",
  standfirst:
    "Artifact creates purpose-built digital learning experiences for organisations where judgement, decision-making and behavioural application matter.",
  standfirstSecondary:
    "Learning science, experience design, technology and meaningful evidence, brought together as one integrated practice.",
  cta: "Discuss a learning challenge",
  ctaHref: "#contact",
  ctaSecondary: "Explore the work",
  ctaSecondaryHref: "#work",
};

export interface TraceEvent {
  name: string;
  active?: boolean;
}

export const heroTrace = {
  events: [
    { name: "experience.started" },
    { name: "decision.presented" },
    { name: "decision.responded", active: true },
    { name: "feedback.presented" },
  ] satisfies TraceEvent[],
  meta: [
    { label: "experience", value: "vendor-risk-01" },
    { label: "choice", value: "escalate" },
    { label: "registration", value: "af-7c21" },
    { label: "state", value: "observed" },
  ],
  caption: "Illustrative decision evidence",
  statement:
    "A learning experience can be designed around the decisions that matter, not just the content that surrounds them.",
};

// ---- 3. Problem ----

export const problem = {
  eyebrow: "Beyond completion",
  headline: "Completion tells you very little.",
  body: "A completion report can tell you that someone launched a module, finished it and scored well.",
  bodySecondary:
    "It rarely tells you which decisions they made, where they hesitated, what support they used, or what should change in the experience itself.",
  closing: "Completion is one signal. Artifact designs for the ones that matter more.",
};

export const completionAbstraction = {
  label: "What a completion report typically shows",
  lines: ["STATUS       completed", "SCORE        82%", "DURATION     14m 02s"],
};

// ---- 4. Services ----

export const servicesIntro = {
  eyebrow: "Services",
  headline: "Purpose-built digital learning for complex organisational problems.",
  intro:
    "Artifact works across four related offers, built from one integrated practice. Most engagements start with the first.",
};

export interface ServiceOffer {
  index: string;
  name: string;
  question: string;
  framing: string;
}

export const primaryService: ServiceOffer & { tags: string[]; imageNote: string } = {
  index: "01",
  name: "Bespoke Learning Experiences",
  question:
    "What does someone need to understand, decide or do — and what experience would actually develop that?",
  framing:
    "Purpose-built digital learning designed around a specific organisational capability, judgement or behaviour — not a template course. This is where most Artifact engagements begin: a real performance problem, translated into an experience people need to think through, not click through.",
  tags: ["Learning design", "UX/UI", "Scenario design", "Development"],
  imageNote: "Representative decision-scenario layout — specimen, not a shipped project.",
};

export const secondaryServices: ServiceOffer[] = [
  {
    index: "02",
    name: "Learning Experience Redesign",
    question: "What happens when existing learning has stopped working?",
    framing:
      "Reconsidering and rebuilding digital learning that has become outdated, passive, inconsistent, inaccessible or no longer fits the organisation it was built for.",
  },
  {
    index: "03",
    name: "Learning Systems & Design Systems",
    question: "How do you produce learning at scale without rebuilding the basics each time?",
    framing:
      "Reusable standards, components, templates, patterns, accessibility rules and governance for organisations producing digital learning at scale.",
  },
  {
    index: "04",
    name: "Learning Evidence & Improvement",
    question: "What should the learning experience actually be telling you?",
    framing:
      "Capturing meaningful learning behaviour where it serves a clear purpose, and using that evidence to understand and improve the experience — not generic analytics, and not xAPI for its own sake.",
  },
];

// ---- 5. Selected work ----

export const workIntro = {
  eyebrow: "Selected work",
  headline: "The decision matters as much as the deliverable.",
  intro:
    "Artifact work is framed around the problem, the constraints and the decisions behind the experience, not simply the software used to build it.",
};

export interface CaseStudyStage {
  name: string;
  definition: string;
}

export const caseStudyStages: CaseStudyStage[] = [
  { name: "Problem", definition: "Inconsistent learning experiences and repeated design decisions." },
  { name: "Decisions", definition: "Define reusable visual, interaction and accessibility patterns." },
  { name: "Experience", definition: "Apply those patterns across different learning contexts." },
  { name: "System", definition: "Reusable components, tokens and implementation guidance." },
  { name: "Evidence", definition: "Document only what can genuinely be demonstrated." },
];

export interface Project {
  eyebrow: string;
  question: string;
  framing: string;
  status?: string;
}

export const featuredProject: Project & { tags: string[]; cta: string; imageNote: string } = {
  eyebrow: "eLearning design system",
  question:
    "How do you create consistent, accessible digital learning across an organisation without redesigning every experience from scratch?",
  framing:
    "A reusable eLearning design system provides a shared foundation for interface design, interaction, accessibility and development. Instead of solving the same visual and technical problems repeatedly, teams can begin with established patterns and concentrate on the learning problem itself.",
  tags: ["Learning design", "UX/UI", "Design system", "Rise", "React"],
  cta: "Explore the case study",
  imageNote: "Representative project layout pending final case-study assets.",
};

/**
 * Wellbeing Studio and the professional-judgement project are named per the
 * Phase 1 strategy (docs/strategy/phase-1-strategic-ia-homepage-definition.md
 * §10), but neither carries invented outcomes or an unapproved relationship
 * claim. The professional-judgement project uses the brief's own provisional
 * placeholder wording verbatim pending publication approval. The platform
 * entry is explicitly labelled R&D, not client work.
 */
export const secondaryProjects: Project[] = [
  {
    eyebrow: "Professional judgement learning",
    question: "How do you design digital learning around decisions that carry real professional weight?",
    framing: "Case study pending publication approval.",
    status: "Case study pending publication approval",
  },
  {
    eyebrow: "Wellbeing Studio",
    question: "Can a digital learning practice model something that isn't a course at all?",
    framing:
      "A programme-based learning experience — recurring practice, asynchronous video and live sessions — exploring what learning looks like beyond a single module.",
    status: "Case study in development",
  },
  {
    eyebrow: "Artifact R&D",
    question: "What does Artifact build for itself while building for clients?",
    framing:
      "The Artifact Learning Platform and runtime — proprietary research and development, not a client engagement. Explored further in Platform below.",
    status: "Artifact R&D — not client work",
  },
];

// ---- 6. Product philosophy ----

export const productPhilosophy = {
  eyebrow: "Philosophy",
  headline: "Digital learning as a product, not a course.",
  body: "Learning can be researched, designed, prototyped, built, launched, observed where it's useful, and improved — rather than built, published and left alone.",
  words: ["Design it.", "Build it.", "Improve it."],
};

// ---- 7. Artifact model ----

export const modelIntro = {
  eyebrow: "The Artifact model",
  headline: "A loop, not a hand-off.",
  body: "Digital learning should not stop when the experience is published. Artifact treats the experience, the signals it produces and the decisions that follow as parts of the same product cycle.",
};

export interface ModelLayer {
  index: string;
  name: string;
  definition: string;
  detail: string;
  artefact: string[];
}

/**
 * Retained per Phase 1 strategy §11 — Experience → Signals → Data → Insight
 * → Improvement, looping back to Experience. This describes the ongoing
 * product cycle a shipped experience runs on; it is a distinct model from
 * the six-stage delivery methodology below (`lifecycle`), which describes
 * how a single engagement is run. Platform is deliberately not a stage in
 * this sequence — see `platform` below.
 */
export const modelLayers: ModelLayer[] = [
  {
    index: "01",
    name: "Experience",
    definition: "What the learner sees, decides and does.",
    detail: "Rise, Storyline, React, video and custom interaction can all sit here.",
    artefact: ["scenario: vendor-risk", "decision: escalation"],
  },
  {
    index: "02",
    name: "Signals",
    definition: "The meaningful events generated by the experience.",
    detail:
      "A choice, a response, a retry, use of support, completion of a task or another interaction worth observing.",
    artefact: ["decision.responded", "feedback.viewed"],
  },
  {
    index: "03",
    name: "Data",
    definition: "Structured records of those events.",
    detail:
      "Learning events can be captured consistently, mapped to standards such as xAPI where appropriate and stored for later use.",
    artefact: ["verb       responded", "result     escalation", "duration   PT4.1S"],
  },
  {
    index: "04",
    name: "Insight",
    definition: "Interpretation of the evidence that is available.",
    detail: "Patterns, questions and observations that may help explain how the experience is working.",
    artefact: ["Repeated hesitation at decision 03"],
  },
  {
    index: "05",
    name: "Improvement",
    definition: "What changes because of what we learned.",
    detail:
      "The next iteration might change the experience, its content, interaction design, instrumentation or supporting system.",
    artefact: ["Clarify evidence available before decision"],
  },
];

export const platform = {
  name: "Platform",
  definition: "Platform is the environment beneath the loop.",
  detail:
    "Moodle, an LMS, a learning portal or another delivery environment can host and support the experience without becoming the logic of the learning itself.",
};

export const modelCaption = "Insight returns to experience.";

// ---- 8. Approach ----

export const approachIntro = {
  eyebrow: "Approach",
  headline: "Discover → Design → Build → Instrument → Measure → Improve.",
  intro:
    "A working method, not a one-off production pipeline. Not every stage is required on every engagement — Instrument in particular is scoped in only where evidence has a clear purpose.",
};

export interface LifecycleStep {
  index: string;
  name: string;
  statement: string;
  detail: string;
}

export const lifecycle: LifecycleStep[] = [
  {
    index: "01",
    name: "Discover",
    statement: "Understand the problem before designing the learning.",
    detail:
      "Audience, performance need, existing evidence, environment and constraints, before any design decision is made.",
  },
  {
    index: "02",
    name: "Design",
    statement: "Shape the learning architecture, practice, feedback, assessment and UX.",
    detail:
      "Scenario design, interaction design, content architecture and measurement intent, shaped around the decision or behaviour that matters.",
  },
  {
    index: "03",
    name: "Build",
    statement: "Develop the experience using the technology best suited to the problem.",
    detail: "Rise, Storyline, React, HTML/CSS/JavaScript, multimedia or a combination — the tool follows the problem.",
  },
  {
    index: "04",
    name: "Instrument",
    statement: "Capture meaningful learner behaviour only where it serves a clear evidence purpose.",
    detail:
      "Not every project needs this stage. Where it's used: structured events, mapped to standards such as xAPI where appropriate.",
  },
  {
    index: "05",
    name: "Measure",
    statement: "Interpret available evidence without claiming more than it supports.",
    detail: "What the evidence can and cannot tell you — completion, interaction data and learner behaviour within the experience.",
  },
  {
    index: "06",
    name: "Improve",
    statement: "Use evidence and feedback to strengthen the learning product.",
    detail:
      "Changes to content, UX, interaction, instrumentation or the supporting system, based on what was actually learned.",
  },
];

export const lifecycleCaption = "Publishing is not the end of the process.";

// ---- 9. Integrated capability ----

export const capabilityIntro = {
  eyebrow: "Integrated capability",
  headline: "Learning design meets digital-product practice.",
  intro:
    "Every service above draws on the same integrated practice — learning science, instructional design, UX/UI, visual design, multimedia and modern web technology working together rather than commissioned separately.",
};

export interface CapabilityGroup {
  index: string;
  name: string;
  question: string;
  copy: string;
}

export const capabilityGroups: CapabilityGroup[] = [
  {
    index: "01",
    name: "Learning experience design",
    question: "What should the learner need to understand, decide or do?",
    copy: "Learning strategy, learning architecture, instructional design, scenario design, UX, assessment and prototyping. This is how Bespoke Learning Experiences and Redesign work begins — with the required performance or decision, not a screen template.",
  },
  {
    index: "02",
    name: "Digital learning development",
    question: "What is the right way to build the experience?",
    copy: "Rise, Storyline, React, HTML/CSS/JavaScript, custom interaction, multimedia and video. The tool is selected for the experience rather than forcing every experience into the same authoring model.",
  },
  {
    index: "03",
    name: "Learning platforms & systems",
    question: "Where does the experience live, and how does it fit into the wider environment?",
    copy: "Moodle, LMS UX, learning portals, information architecture, reusable components and design systems. This is the discipline behind Learning Systems & Design Systems engagements.",
  },
  {
    index: "04",
    name: "Measurement & learning analytics",
    question: "What evidence should the experience produce?",
    copy: "Measurement planning, structured learning events, xAPI, Learning Record Stores, reporting, evaluation and iteration — the discipline behind Learning Evidence & Improvement, scoped to the questions worth answering.",
  },
];

/** Retained as the closing principle of Integrated Capability, not a standalone section — Phase 2 §11. */
export const transitionToolFollows = {
  statement: "The tool follows the problem.",
  supporting:
    "Not every experience needs custom React. Not every interaction needs xAPI. Not every learning problem needs a course.",
  tools: [
    { name: "RISE", when: "when structure and speed matter" },
    { name: "STORYLINE", when: "when interaction and logic matter" },
    { name: "REACT", when: "when the experience needs to go further" },
    { name: "MOODLE", when: "when the wider environment matters" },
  ],
};

// ---- 10. Evidence ----

export const evidenceIntro = {
  eyebrow: "Evidence",
  headline: "Understand more than completion.",
  intro:
    "Meaningful learning evidence can include the decisions someone made, the responses and pathways they chose, retries, misconceptions, use of support, revision after feedback, and where they found something difficult.",
};

export const readoutPanels = {
  before: {
    label: "Operational evidence",
    lines: ["STATUS       completed", "SCORE        82%", "DURATION     14m 02s"],
  },
  transitionLabel: "Useful, but incomplete.",
  after: {
    label: "Learning-experience evidence",
    groups: [
      ["scenario.presented"],
      ["decision.responded", "choice.escalate", "response_time  4.1s"],
      ["feedback.viewed"],
      ["decision.retried", "choice.escalate"],
      ["outcome.correct", "attempt        2"],
    ],
  },
  caveat: "Illustrative events only. Not client data.",
};

export const evidenceDistinction = {
  heading: "What this does — and doesn't — show",
  body: "Learning-experience evidence describes what happened inside the experience: the decisions, responses and pathways it produced.",
  boundaryLabel: "On its own, it does not prove:",
  boundary: ["Workplace transfer", "Long-term behaviour change", "Organisational performance"],
  closing: "Artifact treats that distinction as a matter of credibility, not caution for its own sake.",
};

// ---- 11. Platform ----

export const platformIntro = {
  eyebrow: "Under the experience",
  headline: "A learning platform built around meaningful events.",
  paragraphs: [
    "Introduced last, deliberately — after the proposition, the services, the work, the philosophy, the approach and the evidence. The technology supports Artifact's practice; it is not the practice itself.",
    "Some parts already exist. Others are deliberately still in development. Each is described at the stage it genuinely occupies.",
  ],
};

export interface EcosystemItem {
  name: string;
  descriptor: string;
  status: string;
}

export const platformEcosystem: EcosystemItem[] = [
  {
    name: "Artifact Framework",
    descriptor:
      "The engineering foundation. React architecture, application patterns, design tokens and tooling for structured learning experiences.",
    status: "In development",
  },
  {
    name: "Artifact Components",
    descriptor:
      "Reusable learning interactions. Purpose-built interaction patterns that can be reused without turning every learning experience into the same interface.",
    status: "In design",
  },
  {
    name: "Artifact Events",
    descriptor:
      "A consistent model for meaningful learning events. A structured internal event language separating the experience from the eventual analytics / xAPI implementation.",
    status: "In development",
  },
  {
    name: "Artifact xAPI",
    descriptor:
      "Mapping events to an interoperable learning-data standard. A layer for translating appropriate Artifact events into xAPI statements without coupling every component directly to xAPI.",
    status: "In development",
  },
  {
    name: "Artifact Inspector",
    descriptor: "See what the experience is emitting. An emerging debugging and inspection tool for learning-event and xAPI behaviour during development.",
    status: "Concept",
  },
  {
    name: "Artifact Analytics",
    descriptor:
      "Turning captured learning events into evidence worth reviewing. An emerging reporting layer for interpreting learning-event and xAPI data without overclaiming what it proves.",
    status: "Concept",
  },
];

// ---- 12. Practice ----

export const practice = {
  eyebrow: "Practice",
  headline: "One integrated practice.",
  body: "Strategy, learning design, UX/UI, development, multimedia, platform knowledge and learning evidence are usually split across separate vendors, with no one accountable for the whole experience.",
  bodySecondary:
    "Artifact holds all of it in one practice, because a decision in one discipline changes what's worth doing in the others — a measurement choice changes what's worth designing for; a design choice changes what's worth building.",
};

// ---- 13. Final CTA ----

export const finalCta = {
  headline: "Start with the learning problem.",
  supporting:
    "If you're developing an important learning programme, redesigning an existing experience, or trying to understand what your current learning is actually achieving, Artifact can help define the right approach.",
  action: "Discuss a learning challenge",
  actionHref: "#contact",
};
