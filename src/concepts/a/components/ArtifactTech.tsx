import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { ecosystem, ecosystemIntro } from "../../../content/shared";
import "./ArtifactTech.css";

export function ArtifactTech() {
  return (
    <section id="artifact-tech" className="a-section" aria-labelledby="artifact-tech-heading">
      <Container narrow>
        <Reveal as="div" className="a-fade">
          <div className="a-section__head">
            <p className="kicker">Artifact</p>
            <h2 id="artifact-tech-heading" className="a-heading">
              An emerging technical ecosystem
            </h2>
          </div>
          <p className="a-tech__intro">{ecosystemIntro}</p>
          <ul className="a-tech-list">
            {ecosystem.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <span className="a-tech-list__status" data-status={item.status}>
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
