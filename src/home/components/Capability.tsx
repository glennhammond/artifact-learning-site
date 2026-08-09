import { Section } from "../../design-system/Section";
import { capabilityGroups } from "../../content/shared";
import "./Capability.css";

export function Capability() {
  return (
    <Section
      id="capability"
      kicker="What we do"
      heading="Four capabilities, one practice"
      width="page"
      density="compact"
    >
      <div className="home-capability-index">
        {capabilityGroups.map((group) => (
          <div className="home-capability-row" key={group.name}>
            <span className="home-capability-row__index" aria-hidden="true">
              {group.index}
            </span>
            <div className="home-capability-row__body">
              <h3>{group.name}</h3>
              <p>{group.terms.join(" · ")}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
