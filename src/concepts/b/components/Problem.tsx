import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { legacyProblem as problem, legacyReadoutPanels as readoutPanels } from "../../../content/legacy";
import "./Problem.css";

export function Problem() {
  return (
    <section id="problem" className="b-section" aria-labelledby="problem-heading">
      <Container>
        <Reveal as="div" className="b-fade">
          <div className="b-section__head">
            <h2 id="problem-heading" className="b-heading">
              {problem.headline}
            </h2>
            <p className="b-problem__body">{problem.body}</p>
          </div>
          <div className="b-readouts">
            <div className="b-readout">
              <p className="kicker b-readout__label">{readoutPanels.before.label}</p>
              <pre>{readoutPanels.before.lines.join("\n")}</pre>
            </div>
            <div className="b-readout b-readout--after">
              <p className="kicker b-readout__label">{readoutPanels.after.label}</p>
              <pre>{readoutPanels.after.lines.join("\n")}</pre>
            </div>
          </div>
          <p className="b-readouts__caveat">{readoutPanels.caveat}</p>
        </Reveal>
      </Container>
    </section>
  );
}
