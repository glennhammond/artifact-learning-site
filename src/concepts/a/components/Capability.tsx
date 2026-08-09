import { Container } from "../../../components/layout/Container";
import { Reveal } from "../../../components/layout/Reveal";
import { legacyCapabilityGroups as capabilityGroups } from "../../../content/legacy";
import "./Capability.css";

export function Capability() {
  return (
    <section id="capability" className="a-section" aria-labelledby="capability-heading">
      <Container>
        <Reveal as="div" className="a-fade">
          <div className="a-section__head">
            <p className="kicker">What we do</p>
            <h2 id="capability-heading" className="a-heading">
              Four capabilities, one practice
            </h2>
          </div>
          <div className="a-capability-grid">
            {capabilityGroups.map((group) => (
              <div className="a-capability" key={group.name}>
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
