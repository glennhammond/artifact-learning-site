import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { lifecycle, lifecycleCaption } from "../../../content/shared";
import "./Approach.css";

export function Approach() {
  return (
    <section id="approach" className="b-section" aria-labelledby="approach-heading">
      <Container>
        <Reveal as="div" className="b-fade">
          <div className="b-section__head">
            <p className="kicker">Approach</p>
            <h2 id="approach-heading" className="b-heading">
              The pipeline
            </h2>
          </div>
          <div className="b-pipeline">
            {lifecycle.map((step, i) => (
              <div className="b-pipeline__step" key={step.name}>
                <span>[ {step.name.toUpperCase()} ]</span>
                {i < lifecycle.length - 1 && <span aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
          <p className="b-pipeline__caption">{lifecycleCaption}</p>
        </Reveal>
      </Container>
    </section>
  );
}
