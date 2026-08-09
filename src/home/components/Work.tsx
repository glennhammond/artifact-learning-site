import { Section } from "../../design-system/Section";
import { WorkFeature, WorkList } from "../../design-system/WorkFeature";
import { featuredProject, secondaryProjects, caseStudyStages, workIntro } from "../../content/shared";

export function Work() {
  return (
    <Section id="work" kicker={workIntro.eyebrow} heading={workIntro.headline} intro={workIntro.intro}>
      <WorkFeature project={featuredProject} stages={caseStudyStages} />
      <WorkList projects={secondaryProjects} />
    </Section>
  );
}
