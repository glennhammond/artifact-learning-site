import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { lifecycle, lifecycleCaption } from "../../../content/shared";
import "./Approach.css";

export function Approach() {
  return (
    <section id="approach" className="c-section" aria-labelledby="approach-heading">
      <Container>
        <Reveal as="div" className="c-fade">
          <div className="c-section__head">
            <p className="kicker">Approach</p>
            <h2 id="approach-heading" className="c-heading">
              A working lifecycle
            </h2>
          </div>
          <ol className="c-lifecycle">
            {lifecycle.map((step, i) => (
              <li key={step.name}>
                <span className="kicker">{step.index}</span>
                <span>{step.name}</span>
                {i < lifecycle.length - 1 && (
                  <span className="c-lifecycle__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal as="div" className="c-progress-rule">
          <span className="c-progress-rule__fill" />
        </Reveal>
        <p className="c-lifecycle__caption">{lifecycleCaption}</p>
      </Container>
    </section>
  );
}
