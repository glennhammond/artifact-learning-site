import { Section } from "../../design-system/Section";
import { whyArtifact } from "../../content/shared";
import "./WhyArtifact.css";

export function WhyArtifact() {
  return (
    <Section
      id="why-artifact"
      kicker={whyArtifact.eyebrow}
      heading={whyArtifact.headline}
      intro={whyArtifact.intro}
      width="page"
    >
      <div className="home-why-grid">
        {whyArtifact.principles.map((item) => (
          <article className="home-why-item" key={item.title}>
            <p className="kicker">{item.index}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <div className="home-why-proof" aria-label="Artifact experience and evidence relationship">
        <div>
          <span className="kicker">Experience</span>
          <strong>Decision designed around a real judgement</strong>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <span className="kicker">Signal</span>
          <strong>Meaningful behaviour captured where useful</strong>
        </div>
        <span aria-hidden="true">→</span>
        <div>
          <span className="kicker">Evidence</span>
          <strong>Used carefully to improve the experience</strong>
        </div>
      </div>

      <p className="home-why-boundary">{whyArtifact.boundary}</p>
    </Section>
  );
}
