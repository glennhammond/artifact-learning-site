import { Container } from "../../components/layout/Container";
import { platformEcosystem } from "../../content/shared";
import { ArtifactRdProof } from "../../design-system/WorkProofs";
import { workVisuals } from "../../content/workAssets";
import { CtaBand } from "../CtaBand";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

export function PlatformPage() {
  usePageMeta("Artifact Learning Platform", "The standards-based technical architecture underneath Artifact learning experiences, events and evidence.");
  return (
    <SiteShell>
      <PageIntro eyebrow="Artifact R&D" title="The technology underneath the experience." intro="A standards-based architecture for structured learning experiences, meaningful events, interoperability and careful evidence. It supports the practice rather than asking clients to replace their ecosystem." aside={<p>Proprietary capability behind the practice—not a mature SaaS product or software-for-sale offer.</p>} />
      <section className="site-section" aria-labelledby="architecture-heading"><Container><p className="kicker">Conceptual architecture</p><h2 id="architecture-heading" className="site-section__heading">From learning interaction to interpretable evidence.</h2><div className="site-case-proof"><ArtifactRdProof asset={workVisuals.artifactRd} /></div></Container></section>
      <section className="site-section" aria-labelledby="ecosystem-heading"><Container width="content"><p className="kicker">Current ecosystem</p><h2 id="ecosystem-heading" className="site-section__heading">Six connected layers, each shown at its genuine maturity.</h2><div className="site-platform-layers">{platformEcosystem.map((item, index) => <article className="site-platform-layer" key={item.name}><div><span className="kicker">{String(index + 1).padStart(2, "0")} · {item.status}</span><h3>{item.name}</h3></div><p>{item.descriptor}</p></article>)}</div></Container></section>
      <section className="site-section" aria-labelledby="standards-heading"><Container><div className="site-prose-grid"><div className="site-prose-block"><p className="kicker">Standards philosophy</p><h2 id="standards-heading">Standards where possible, adaptors where necessary.</h2><p>Artifact should work with an organisation's existing learning environment where practical. xAPI can provide a common language for selected events; a Learning Record Store can retain those statements. Neither is required for every project.</p></div><div className="site-prose-block"><p className="kicker">Existing environments</p><h2>The tool follows the problem.</h2><p>LMS platforms, Moodle, learning portals, Rise, Storyline and custom React experiences can each have a role. New infrastructure is justified only when it solves a real constraint.</p></div></div></Container></section>
      <CtaBand supporting="Technical architecture matters when it improves the experience, supports interoperability or answers a useful evidence question." />
    </SiteShell>
  );
}
