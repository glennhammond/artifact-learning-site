import { Container } from "../../components/layout/Container";
import { WorkFeature, WorkList } from "../../design-system/WorkFeature";
import { caseStudyStages, featuredProject, secondaryProjects } from "../../content/shared";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

export function WorkPage() {
  usePageMeta("Work — Artifact Learning", "Selected learning experiences, decision design, systems and evidence from Artifact Learning.");
  return (
    <SiteShell>
      <PageIntro eyebrow="Selected work" title="Learning problems made tangible." intro="Four proof-led examples spanning experience, decision, system and evidence. Representative material is labelled wherever approved project media is not yet available." aside={<p>Proof roles<br />Experience · Decision · System · Evidence</p>} />
      <section className="site-section site-work-overview" aria-label="Work case studies">
        <Container>
          <WorkFeature project={featuredProject} stages={caseStudyStages} />
          <WorkList projects={secondaryProjects} />
        </Container>
      </section>
    </SiteShell>
  );
}
