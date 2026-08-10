import { Container } from "../../components/layout/Container";
import { capabilityGroups } from "../../content/shared";
import { CtaBand } from "../CtaBand";
import { PageIntro } from "../PageIntro";
import { SiteShell } from "../SiteShell";
import { usePageMeta } from "../usePageMeta";
import "./pages.css";

export function AboutPage() {
  usePageMeta("About – Artifact Learning", "Why Artifact Learning connects learning design, UX, development, platforms and evidence in one practice.");
  return (
    <SiteShell>
      <PageIntro eyebrow="About Artifact" title="One integrated practice." intro="Digital learning decisions are often divided between strategy, instructional design, UX, visual design, development, multimedia, platforms and measurement. Artifact connects them because each decision changes what is worth doing in the others." />
      <section className="site-section" aria-labelledby="practice-heading"><Container><div className="site-prose-grid"><div className="site-prose-block"><p className="kicker">Why Artifact exists</p><h2 id="practice-heading">One design owner across the experience.</h2><p>An integrated practice creates continuity from the performance problem through the learner experience and into implementation. It does not replace collaboration with specialists; it gives those contributions a coherent design direction.</p></div><div className="site-prose-block"><p className="kicker">Practice lead</p><h2>Glenn Hammond</h2><p>Learning experience designer, eLearning specialist and digital learning practitioner working across learning design, UX/UI, development, multimedia, platforms and evidence.</p></div></div></Container></section>
      <section className="site-section" aria-labelledby="disciplines-heading"><Container><p className="kicker">Connected disciplines</p><h2 id="disciplines-heading" className="site-section__heading">The quality of the whole experience is the point.</h2><div className="site-approach-grid">{capabilityGroups.map((group) => <article key={group.name}><span className="kicker">{group.index}</span><h3>{group.name}</h3><p>{group.copy}</p></article>)}</div></Container></section>
      <CtaBand supporting="Artifact is most useful where the learning problem crosses design, technology and evidence boundaries." />
    </SiteShell>
  );
}
