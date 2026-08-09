import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { ecosystem, ecosystemIntro } from "../../../content/shared";
import "./ArtifactTech.css";

export function ArtifactTech() {
  return (
    <section id="artifact-tech" className="c-section" aria-labelledby="artifact-tech-heading">
      <Container narrow>
        <Reveal as="div" className="c-fade">
          <div className="c-section__head">
            <p className="kicker">Artifact</p>
            <h2 id="artifact-tech-heading" className="c-heading">
              An emerging technical ecosystem
            </h2>
          </div>
          <p className="c-tech__intro">{ecosystemIntro}</p>
          <ul className="c-tech-list">
            {ecosystem.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <span className="c-tech-list__status">{item.status}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
