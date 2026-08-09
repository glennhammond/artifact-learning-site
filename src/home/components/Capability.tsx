import { Section } from "../../design-system/Section";
import { capabilityGroups, capabilityIntro } from "../../content/shared";
import "./Capability.css";

/** A quiet low→high fidelity progression — no icons (content doc §9.01, §9.04). */
function Progression({ steps }: { steps: string[] }) {
  return (
    <p className="home-capability-progression" aria-hidden="true">
      {steps.map((step, i) => (
        <span key={step}>
          {step}
          {i < steps.length - 1 && <span className="home-capability-progression__arrow"> → </span>}
        </span>
      ))}
    </p>
  );
}

/** Three cropped interface treatments for different build contexts (content doc §9.02). */
function BuildCrops() {
  const labels = ["Rise", "Storyline", "React"];
  return (
    <div className="home-capability-crops" aria-hidden="true">
      {labels.map((label, i) => (
        <div className="home-capability-crop" key={label}>
          <svg viewBox="0 0 60 44" preserveAspectRatio="none">
            <rect x="0.5" y="0.5" width="59" height="43" fill="none" stroke="var(--color-border)" />
            {i === 0 && (
              <>
                <rect x="8" y="10" width="44" height="8" fill="var(--color-border)" />
                <rect x="8" y="24" width="30" height="6" fill="var(--color-text-subtle)" />
              </>
            )}
            {i === 1 && (
              <>
                <circle cx="18" cy="22" r="9" fill="none" stroke="var(--color-border)" />
                <rect x="34" y="18" width="20" height="8" fill="var(--color-text-subtle)" />
              </>
            )}
            {i === 2 && (
              <>
                <rect x="8" y="8" width="16" height="28" fill="var(--color-border)" />
                <rect x="28" y="8" width="24" height="12" fill="var(--color-text-subtle)" />
                <rect x="28" y="24" width="24" height="12" fill="var(--color-border)" />
              </>
            )}
          </svg>
          <span className="kicker">{label}</span>
        </div>
      ))}
    </div>
  );
}

/** A simple system map (content doc §9.03). */
function SystemMap() {
  return (
    <div className="home-capability-map" aria-hidden="true">
      <span className="home-capability-map__node">Discovery</span>
      <span className="home-capability-map__arrow">↓</span>
      <span className="home-capability-map__node">Platform</span>
      <span className="home-capability-map__arrow">↓</span>
      <div className="home-capability-map__row">
        <span className="home-capability-map__node">Experience</span>
        <span className="home-capability-map__arrow home-capability-map__arrow--h">↔</span>
        <span className="home-capability-map__node">Support / resources</span>
      </div>
    </div>
  );
}

const ARTEFACTS = [
  <Progression key="01" steps={["performance need", "scenario map", "interaction"]} />,
  <BuildCrops key="02" />,
  <SystemMap key="03" />,
  <Progression key="04" steps={["Event", "structured statement", "report fragment"]} />,
];

export function Capability() {
  return (
    <Section
      id="capability"
      kicker={capabilityIntro.eyebrow}
      heading={capabilityIntro.headline}
      intro={capabilityIntro.intro}
      width="page"
      density="compact"
    >
      <div className="home-capability-index">
        {capabilityGroups.map((group, i) => (
          <div className="home-capability-row" key={group.name}>
            <span className="home-capability-row__index" aria-hidden="true">
              {group.index}
            </span>
            <div className="home-capability-row__body">
              <p className="home-capability-row__question">{group.question}</p>
              <h3>{group.name}</h3>
              <p className="home-capability-row__copy">{group.copy}</p>
              {ARTEFACTS[i]}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
