import { Link, Navigate, useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container";
import { WorkComposite } from "../../design-system/WorkComposite";
import { ArtifactRdProof, ProfessionalJudgementProof, WellbeingStudioProof } from "../../design-system/WorkProofs";
import { workDetails } from "../../content/site";
import { workVisuals } from "../../content/workAssets";
import { CtaBand } from "../CtaBand";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

type WorkSlug = keyof typeof workDetails;
const workSlugs = Object.keys(workDetails) as WorkSlug[];

function WorkProof({ slug }: { slug: WorkSlug }) {
  if (slug === "elearning-design-system") return <WorkComposite asset={workVisuals.featured} />;
  if (slug === "wellbeing-studio") return <WellbeingStudioProof asset={workVisuals.wellbeingStudio} />;
  if (slug === "professional-judgement") return <ProfessionalJudgementProof asset={workVisuals.professionalJudgement} />;
  return <ArtifactRdProof asset={workVisuals.artifactRd} />;
}

export function WorkDetailPage() {
  const { slug = "" } = useParams();
  const validSlug = workSlugs.find((item) => item === slug);
  const detail = validSlug ? workDetails[validSlug] : null;
  usePageMeta(detail ? `${detail.title} – Artifact` : "Work – Artifact", detail?.intro ?? "Selected Artifact Learning work.");

  if (!validSlug || !detail) return <Navigate to="/work" replace />;

  return (
    <SiteShell>
      <PageIntro eyebrow={detail.eyebrow} title={detail.title} intro={detail.intro} aside={<><p className="site-status">{detail.status}</p><p><Link to="/work">← All selected work</Link></p></>} />
      <section className="site-section" aria-labelledby="case-proof-heading">
        <Container>
          <h2 id="case-proof-heading" className="site-section__heading">Visual proof</h2>
          <div className="site-case-proof"><WorkProof slug={validSlug} /></div>
        </Container>
      </section>
      <section className="site-section" aria-label="Case study detail">
        <Container>
          <div className="site-case-grid">
            <div className="site-prose-block"><p className="kicker">The challenge</p><h2>Design the problem before the deliverable.</h2><p>{detail.challenge}</p></div>
            <div className="site-prose-block"><p className="kicker">Design decisions</p><h2>What shaped the work</h2><ol className="site-list site-number-list site-case-decisions">{detail.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ol></div>
            <div className="site-prose-block"><p className="kicker">Why it matters</p><h2>Capability demonstrated</h2><p>{detail.significance}</p></div>
            <div className="site-prose-block"><p className="kicker">Evidence boundary</p><h2>What this page does not claim</h2><p>No client outcomes, metrics, approvals or guarantees are inferred from the visual. Its status is stated beside the proof.</p></div>
          </div>
        </Container>
      </section>
      <CtaBand supporting="If this resembles the learning or system problem you are working through, the next step is to define the context and required performance." />
    </SiteShell>
  );
}
