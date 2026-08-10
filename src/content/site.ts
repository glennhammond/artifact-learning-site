export const serviceDetails = [
  {
    slug: "bespoke-learning-experiences",
    name: "Bespoke Learning Experiences",
    situation: "An important capability, judgement or behaviour cannot be developed well through a template course.",
    work: "Define the required performance, then design the scenarios, practice, feedback, interface and technology around it.",
    includes: ["Learning architecture", "Scenario and interaction design", "UX/UI and accessibility", "Development and implementation", "Measurement intent where useful"],
    outputs: "A purpose-built learning experience and the design rationale, assets and implementation needed to support it.",
    related: "professional-judgement",
  },
  {
    slug: "learning-experience-redesign",
    name: "Learning Experience Redesign",
    situation: "Existing learning has become passive, outdated, inconsistent, inaccessible or disconnected from current work.",
    work: "Identify what still has value, remove what does not, and rebuild the experience around the performance that matters now.",
    includes: ["Experience audit", "Content and interaction redesign", "Accessibility review", "Prototype and rebuild planning"],
    outputs: "A clearer experience direction, prioritised redesign decisions and, where scoped, a rebuilt learning product.",
    related: "elearning-design-system",
  },
  {
    slug: "learning-systems-design-systems",
    name: "Learning Systems & Design Systems",
    situation: "Teams repeatedly solve the same interface, accessibility and implementation problems across learning projects.",
    work: "Create reusable standards and patterns without forcing every experience into the same template.",
    includes: ["Design principles and tokens", "Reusable interaction patterns", "Component guidance", "Governance and implementation support"],
    outputs: "A practical shared foundation that improves consistency while leaving room for the learning problem to shape the experience.",
    related: "elearning-design-system",
  },
  {
    slug: "learning-evidence-improvement",
    name: "Learning Evidence & Improvement",
    situation: "Completion data cannot answer the questions needed to understand or improve the experience.",
    work: "Define useful evidence questions, capture meaningful behaviour where appropriate, and interpret it within honest limits.",
    includes: ["Measurement planning", "Event and xAPI design", "Inspection and validation", "Evidence review and iteration"],
    outputs: "A proportionate evidence approach and clearer decisions about what the available data can and cannot support.",
    related: "artifact-rd",
  },
] as const;

export const definitionEngagement = {
  name: "Learning Experience Definition",
  intro: "A paid starting engagement for complex work where the right experience, technology or evidence approach is not yet clear.",
  items: ["Problem and audience context", "Required performance", "Learning architecture", "Interaction strategy", "Technical recommendation", "Measurement approach", "Delivery plan and implementation scope"],
  note: "It is useful when definition will reduce delivery risk; it is not a mandatory package for every engagement.",
};

export const workDetails = {
  "elearning-design-system": {
    eyebrow: "Featured work · System",
    title: "eLearning Design System",
    intro: "A reusable foundation for consistent, accessible digital learning without redesigning every experience from scratch.",
    challenge: "Learning teams need consistency across interfaces and implementation, but a rigid template can flatten the learning problem. The system must create a reliable baseline without making every experience identical.",
    decisions: ["A shared visual language and token foundation", "Reusable interaction states and feedback patterns", "Accessibility treated as a system property", "Responsive implementation guidance", "Governance that keeps design decisions visible"],
    significance: "The value is systemic: teams can begin from established decisions and concentrate more attention on the capability, judgement or behaviour the experience must develop.",
    status: "Representative proof is shown while approved project crops are prepared.",
  },
  "wellbeing-studio": {
    eyebrow: "Selected work · Experience",
    title: "Wellbeing Studio",
    intro: "A programme-based learning product shaped around recurring practice rather than a one-off course.",
    challenge: "Some learning develops through rhythm, participation and reflection over time. A module-and-completion model does not naturally support that form of experience.",
    decisions: ["A monthly programme hub rather than a course menu", "Asynchronous video and guided practice", "Upcoming live sessions kept in the same experience", "Participation shown without turning practice into a score"],
    significance: "The concept demonstrates how platform thinking can support an ongoing programme while keeping the learning experience coherent.",
    status: "The direction is real; the interface shown is an Artifact representative prototype pending approved media.",
  },
  "professional-judgement": {
    eyebrow: "Selected work · Decision",
    title: "Professional judgement learning",
    intro: "An approval-safe view of learning designed around decisions that carry professional weight.",
    challenge: "The learning must allow someone to interpret context and available evidence before making a judgement, rather than simply recall a rule.",
    decisions: ["Context before the decision", "Evidence made available without implying one obvious cue", "A consequential learner response", "Feedback tied to the reasoning in the choice"],
    significance: "This limited page demonstrates the interaction approach without exposing client identity, sensitive subject matter or confidential content.",
    status: "Case study publication approval pending. All visual material is anonymous and representative.",
  },
  "artifact-rd": {
    eyebrow: "Artifact R&D · Evidence",
    title: "Capability behind the practice",
    intro: "Internal research and development for structured learning experiences, meaningful events and careful interpretation.",
    challenge: "Learning components should express useful behaviour consistently without coupling every experience directly to one reporting technology.",
    decisions: ["Reusable DecisionPoint and interaction patterns: in development", "An internal Artifact event model: in development", "xAPI mapping where interoperability is useful: in development", "Inspector for validation: concept", "Session insight and analytics: concept"],
    significance: "This is proprietary capability supporting consultancy work, not a mature software product or software-for-sale offer.",
    status: "Maturity is stated per layer; representative proof is used where real captures are not publication-ready.",
  },
} as const;

export const contactPrompts = [
  "What needs to change?",
  "Who needs to do something differently?",
  "What exists already?",
  "What constraints are known?",
  "What are you trying to understand or measure?",
  "Is there a target timeframe?",
];
