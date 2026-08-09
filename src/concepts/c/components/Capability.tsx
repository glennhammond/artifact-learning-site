import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { capabilityGroups } from "../../../content/shared";
import "./Capability.css";

export function Capability() {
  return (
    <section id="capability" className="c-section" aria-labelledby="capability-heading">
      <Container>
        <Reveal as="div" className="c-fade">
          <div className="c-section__head">
            <p className="kicker">What we do</p>
            <h2 id="capability-heading" className="c-heading">
              Four capabilities, one practice
            </h2>
          </div>
          <div className="c-capability-grid">
            {capabilityGroups.map((group) => (
              <div className="c-capability" key={group.name}>
                <p className="kicker">{group.index}</p>
                <h3>{group.name}</h3>
                <p>{group.terms.join(" · ")}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
