import { Section } from "../../design-system/Section";
import { WorkFeature, WorkList } from "../../design-system/WorkFeature";
import {
  featuredProject,
  secondaryProjects,
  caseStudyStages,
  readoutPanels,
} from "../../content/shared";

export function Work() {
  return (
    <Section id="work" kicker="Selected work" heading="Framed by the decision, not just the deliverable">
      <WorkFeature
        project={featuredProject}
        stages={caseStudyStages}
        evidenceLine={readoutPanels.after.lines[0]}
        evidenceCaveat={readoutPanels.caveat}
      />
      <WorkList projects={secondaryProjects} />
    </Section>
  );
}
