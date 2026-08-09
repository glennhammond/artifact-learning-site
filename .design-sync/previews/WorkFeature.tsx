import { WorkFeature } from "../../src/design-system/WorkFeature";
import { featuredProject, caseStudyStages } from "../../src/content/shared";

/**
 * The one full featured case study, exactly as the Work section composes it —
 * a figure (WorkComposite), problem-led copy, capability tags and the
 * case-study stage sequence, evidence at the end.
 */
export function Default() {
  return <WorkFeature project={featuredProject} stages={caseStudyStages} />;
}
