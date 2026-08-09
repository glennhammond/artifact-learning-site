import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { modelCaption } from "../../../content/shared";
import { LoopDiagram } from "./LoopDiagram";
import "./Model.css";

export function Model() {
  return (
    <section id="model" className="b-section" aria-labelledby="model-heading">
      <Container>
        <Reveal as="div" className="b-fade b-model">
          <div className="b-section__head">
            <p className="kicker">The Artifact model</p>
            <h2 id="model-heading" className="b-heading">
              A loop, not a hand-off
            </h2>
            <p className="b-model__intro">
              Insight is the only layer whose job is to change the other three. Select a layer to
              read what it covers.
            </p>
          </div>
          <LoopDiagram />
          <p className="b-model__caption">{modelCaption}</p>
        </Reveal>
      </Container>
    </section>
  );
}
