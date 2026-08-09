import { Section } from "../../design-system/Section";
import { capabilityGroups } from "../../content/shared";
import "./Capability.css";

export function Capability() {
  return (
    <Section id="capability" kicker="What we do" heading="Four capabilities, one practice">
      <div className="home-capability-grid">
        {capabilityGroups.map((group) => (
          <div className="home-capability" key={group.name}>
            <p className="kicker">{group.index}</p>
            <h3>{group.name}</h3>
            <p>{group.terms.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
