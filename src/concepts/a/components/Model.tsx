import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { modelLayers, modelCaption } from "../../../content/shared";
import { LoopDiagram } from "./LoopDiagram";
import "./Model.css";

export function Model() {
  return (
    <section id="model" className="a-section" aria-labelledby="model-heading">
      <Container>
        <Reveal as="div" className="a-fade a-model">
          <div className="a-model__list">
            <div className="a-section__head">
              <p className="kicker">The Artifact model</p>
              <h2 id="model-heading" className="a-heading">
                Four layers, one loop
              </h2>
            </div>
            <dl>
              {modelLayers.map((layer) => (
                <div className="a-model__row" key={layer.name}>
                  <dt>
                    <span className="kicker">{layer.index}</span> {layer.name}
                  </dt>
                  <dd>{layer.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="a-model__figure">
            <LoopDiagram />
            <figcaption>{modelCaption}</figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
