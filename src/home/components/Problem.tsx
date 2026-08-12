import { Section } from "../../design-system/Section";
import { DataStrip } from "../../design-system/DataStrip";
import { problem, completionAbstraction } from "../../content/shared";
import "./Problem.css";

/**
 * Kept deliberately short: the plain-language version of the gap. The
 * fuller completion-vs-event comparison now lives in Evidence, where there's
 * room to make the "does not prove transfer" distinction properly (see
 * docs/strategy/phase-1-strategic-ia-homepage-definition.md §3a).
 */
export function Problem() {
  return (
    <Section id="problem" kicker={problem.eyebrow} heading={problem.headline} width="page" density="compact">
      <div className="home-problem__grid">
        <div className="home-problem__copy">
          <p className="home-problem__body">{problem.body}</p>
          <p className="home-problem__body">{problem.bodySecondary}</p>
          <p className="home-problem__closing">{problem.closing}</p>
        </div>

        <div className="home-problem__abstraction">
          <DataStrip label={completionAbstraction.label} lines={completionAbstraction.lines} muted />
        </div>
      </div>
    </Section>
  );
}
