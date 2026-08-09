import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { lifecycle, lifecycleCaption } from "../../../content/shared";
import "./Approach.css";

export function Approach() {
  return (
    <section id="approach" className="a-section" aria-labelledby="approach-heading">
      <Container>
        <Reveal as="div" className="a-fade">
          <div className="a-section__head">
            <p className="kicker">Approach</p>
            <h2 id="approach-heading" className="a-heading">
              A working lifecycle
            </h2>
          </div>
          <ol className="a-lifecycle">
            {lifecycle.map((step, i) => (
              <li key={step.name}>
                <span className="kicker">{step.index}</span>
                <span>{step.name}</span>
                {i < lifecycle.length - 1 && (
                  <span className="a-lifecycle__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="a-lifecycle__caption">{lifecycleCaption}</p>
        </Reveal>
      </Container>
    </section>
  );
}
