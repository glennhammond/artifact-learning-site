export type WorkProofRole = "experience" | "decision" | "system" | "evidence";
export type WorkAssetStatus = "real" | "representative" | "placeholder";

export interface WorkVisualAsset {
  id: string;
  project: "elearning-design-system" | "wellbeing-studio" | "professional-judgement" | "artifact-rd";
  type: "composite" | "interface" | "architecture";
  proofRole: WorkProofRole;
  status: WorkAssetStatus;
  alt: string;
  caption: string;
  desktopSource: string;
  mobileSource?: string;
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
    proofRole: "system",
    status: "representative",
    alt: "Representative eLearning design system showing a desktop learning interface, reusable interaction states, documentation and a mobile layout.",
    caption: "Representative eLearning design-system proof · publication-safe prototype",
    desktopSource: "component:DesignSystemProof",
    mobileSource: "component:DesignSystemProofMobile",
    approvalStatus: "Replace with approved project crops when available",
  },
  professionalJudgement: {
    id: "professional-judgement-proof-01",
    project: "professional-judgement",
    type: "interface",
    proofRole: "decision",
    status: "representative",
    alt: "Representative professional-judgement interaction showing a neutral workplace scenario, available evidence, a selected decision and feedback.",
    caption: "Representative decision prototype · case study publication pending",
    desktopSource: "component:ProfessionalJudgementProof",
    approvalStatus: "Anonymous and publication-safe; no client content used",
  },
  wellbeingStudio: {
    id: "wellbeing-studio-proof-01",
    project: "wellbeing-studio",
    type: "interface",
    proofRole: "experience",
    status: "representative",
    alt: "Representative programme hub with a monthly theme, featured practice, upcoming live session and participation progress.",
    caption: "Artifact representative programme prototype · not a conventional course",
    desktopSource: "component:WellbeingStudioProof",
    mobileSource: "component:WellbeingStudioProofMobile",
    approvalStatus: "Representative UI; approved project media still required",
  },
  artifactRd: {
    id: "artifact-rd-proof-01",
    project: "artifact-rd",
    type: "architecture",
    proofRole: "evidence",
    status: "representative",
    alt: "Artifact R&D architecture showing an in-development DecisionPoint and event model leading to concept-stage inspection and session insight.",
    caption: "Artifact R&D · implementation status shown at each layer",
    desktopSource: "component:ArtifactRdProof",
    approvalStatus: "Internal R&D representation; maturity labels required",
  },
} as const satisfies Record<string, WorkVisualAsset>;
