import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { legacyEcosystem as ecosystem, legacyEcosystemIntro as ecosystemIntro } from "../../../content/legacy";
import "./ArtifactTech.css";

export function ArtifactTech() {
  return (
    <section id="artifact-tech" className="b-section" aria-labelledby="artifact-tech-heading">
      <Container>
        <Reveal as="div" className="b-fade">
          <div className="b-section__head">
            <p className="kicker">Artifact</p>
            <h2 id="artifact-tech-heading" className="b-heading">
              The ecosystem, honestly staged
            </h2>
            <p className="b-tech__intro">{ecosystemIntro}</p>
          </div>
          <div className="b-node-map">
            {ecosystem.map((item, i) => (
              <div key={item.name} className="b-node">
                <div className="b-node__row">
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <span className="b-node__name">{item.name}</span>
                  <span className="b-node__status" data-status={item.status}>
                    {item.status}
                  </span>
                </div>
                <p className="b-node__note">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="b-tech__footnote">
            This is early. We're building it the same way we'd build it for a client — designed
            before it's coded, and honest about what stage it's at.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
