export type WorkProofRole = "experience" | "decision" | "system" | "evidence";
export type WorkAssetStatus = "real" | "representative" | "placeholder";

export interface WorkVisualAsset {
  id: string;
  project: "elearning-design-system" | "wellbeing-studio" | "professional-judgement" | "artifact-rd";
  type: "composite" | "interface" | "architecture";
  mediaKind: "static-image" | "responsive-image" | "video-thumbnail" | "annotated-interface" | "code-specimen";
  proofRole: WorkProofRole;
  status: WorkAssetStatus;
  alt: string;
  caption: string;
  desktopSource: string;
  mobileSource?: string;
  videoSource?: string;
  aspectRatio: string;
  approvalStatus: string;
}

/**
 * Phase 4 uses lightweight code-rendered proof while publication-safe project
 * screenshots are gathered. Source fields are stable replacement slots: a
 * future image can replace the named component without changing Work layout.
 */
export const workVisuals = {
  featured: {
    id: "design-system-proof-01",
    project: "elearning-design-system",
    type: "composite",
    mediaKind: "annotated-interface",
    proofRole: "system",
    status: "representative",
    alt: "An eLearning design system showing a desktop learning interface, reusable interaction states, documentation and a mobile layout.",
    caption: "eLearning design-system prototype · project media pending",
    desktopSource: "component:DesignSystemProof",
    mobileSource: "component:DesignSystemProofMobile",
    aspectRatio: "16 / 11",
    approvalStatus: "Replace with approved project crops when available",
  },
  professionalJudgement: {
    id: "professional-judgement-proof-01",
    project: "professional-judgement",
    type: "interface",
    mediaKind: "annotated-interface",
    proofRole: "decision",
    status: "representative",
    alt: "A professional-judgement interaction showing a neutral workplace scenario, available evidence, a selected decision and feedback.",
    caption: "Professional decision prototype · publication pending",
    desktopSource: "component:ProfessionalJudgementProof",
    aspectRatio: "4 / 3",
    approvalStatus: "Anonymous and publication-safe; no client content used",
  },
  wellbeingStudio: {
    id: "wellbeing-studio-proof-01",
    project: "wellbeing-studio",
    type: "interface",
    mediaKind: "annotated-interface",
    proofRole: "experience",
    status: "representative",
    alt: "A program hub with a monthly theme, featured practice, upcoming live session and participation progress.",
    caption: "Artifact program prototype · not a conventional course",
    desktopSource: "component:WellbeingStudioProof",
    mobileSource: "component:WellbeingStudioProofMobile",
    aspectRatio: "4 / 3",
    approvalStatus: "Representative UI; approved project media still required",
  },
  artifactRd: {
    id: "artifact-rd-proof-01",
    project: "artifact-rd",
    type: "architecture",
    mediaKind: "code-specimen",
    proofRole: "evidence",
    status: "representative",
    alt: "Artifact R&D architecture showing an in-development DecisionPoint and event model leading to concept-stage inspection and session insight.",
    caption: "Artifact R&D · implementation status shown at each layer",
    desktopSource: "component:ArtifactRdProof",
    aspectRatio: "16 / 9",
    approvalStatus: "Internal R&D representation; maturity labels required",
  },
} as const satisfies Record<string, WorkVisualAsset>;
