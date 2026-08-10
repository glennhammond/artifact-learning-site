import { Section } from "../../design-system/Section";
import { Tag } from "../../design-system/Tag";
import { platformEcosystem, platformIntro } from "../../content/shared";
import "./Platform.css";

function FrameworkTree() {
  return (
    <pre className="home-tech-specimen home-tech-specimen--mono" aria-hidden="true">
{`App
├─ Shell
│  ├─ Nav
│  └─ Panel
└─ Tokens`}
    </pre>
  );
}

function ComponentSpecimens() {
  return (
    <div className="home-tech-specimen home-tech-components" aria-hidden="true">
      <span className="ds-btn ds-btn--primary">Primary</span>
      <span className="ds-tag">status</span>
      <span className="ds-tag ds-tag--signal">active</span>
    </div>
  );
}

function EventObject() {
  return (
    <pre className="home-tech-specimen home-tech-specimen--mono" aria-hidden="true">
{`artifact.event
  type        decision.responded
  choice      escalate
  attempt     1`}
    </pre>
  );
}

function XapiFlow() {
  return (
    <p className="home-tech-specimen home-tech-flow" aria-hidden="true">
      Artifact event <span className="home-tech-flow__arrow">→</span> xAPI mapping{" "}
      <span className="home-tech-flow__arrow">→</span> LRS
    </p>
  );
}

function InspectorFragment() {
  return (
    <div className="home-tech-specimen home-tech-inspector" aria-hidden="true">
      <p>
        <span className="kicker">Event</span>
        decision.responded
      </p>
      <p>
        <span className="kicker">Activity</span>
        /vendor-risk/decision-03
      </p>
      <p>
        <span className="kicker">Result</span>
        choice: escalate
      </p>
    </div>
  );
}

/** Illustrative only — Analytics has no shipped reporting yet (status: Concept). */
function AnalyticsFragment() {
  return (
    <div className="home-tech-specimen home-tech-analytics" aria-hidden="true">
      <p>
        <span className="kicker">Signal</span>
        decision.responded
      </p>
      <p>
        <span className="kicker">Pattern</span>
        3 of 5 retried at decision 03
      </p>
      <p>
        <span className="kicker">Note</span>
        illustrative summary, not live reporting
      </p>
    </div>
  );
}

const SPECIMENS = [FrameworkTree, ComponentSpecimens, EventObject, XapiFlow, InspectorFragment, AnalyticsFragment];

/**
 * "Under the experience" — introduced last on the homepage, deliberately,
 * after the proposition, services, work, philosophy, approach and evidence
 * (Phase 1 strategy §19). Supports the consultancy; never a standalone
 * product catalogue.
 */
export function Platform() {
  return (
    <Section
      id="platform"
      kicker={platformIntro.eyebrow}
      heading={platformIntro.headline}
      width="content"
      density="compact"
    >
      {platformIntro.paragraphs.map((p) => (
        <p className="home-tech-intro" key={p}>
          {p}
        </p>
      ))}

      <div className="home-tech-list">
        {platformEcosystem.map((item, i) => {
          const Specimen = SPECIMENS[i];
          return (
            <div className="home-tech-row" key={item.name}>
              <div className="home-tech-row__meta">
                <div className="home-tech-row__head">
                  <span className="kicker">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.name}</h3>
                  <Tag>{item.status}</Tag>
                </div>
                <p className="home-tech-row__descriptor">{item.descriptor}</p>
              </div>
              <div className="home-tech-row__specimen">
                <Specimen />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
