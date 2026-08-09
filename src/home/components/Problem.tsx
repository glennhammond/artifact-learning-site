import { Section } from "../../design-system/Section";
import { DataStrip } from "../../design-system/DataStrip";
import { problem, readoutPanels } from "../../content/shared";
import "./Problem.css";

const ANNOTATIONS: Record<number, string> = {
  1: "Captures the choice made and how long it took to decide.",
  3: "Shows where a learner hesitated and reconsidered.",
};

export function Problem() {
  return (
    <Section id="problem" heading={problem.headline} width="page" density="compact">
      <div className="home-problem__grid">
        <div className="home-problem__copy">
          <p className="home-problem__body">{problem.body}</p>
          <p className="home-problem__body">{problem.bodySecondary}</p>
          <p className="home-problem__body">{problem.bodyTertiary}</p>
        </div>

        <div className="home-problem__composition">
          <div className="home-problem__before">
            <DataStrip label={readoutPanels.before.label} lines={readoutPanels.before.lines} muted />
          </div>

          <div className="home-problem__transition" aria-hidden="true">
            <span className="home-problem__transition-line" />
            <span className="home-problem__transition-label kicker">{readoutPanels.transitionLabel}</span>
            <span className="home-problem__transition-line" />
          </div>

          <div className="home-problem__after">
            <span className="ds-data-strip__mark home-problem__after-mark" aria-hidden="true" />
            <p className="kicker home-problem__after-label">{readoutPanels.after.label}</p>
            <div className="home-problem__events">
              {readoutPanels.after.groups.map((group, i) => (
                <div className="home-problem__event-group" key={group[0]}>
                  <pre className="home-problem__event-lines">{group.join("\n")}</pre>
                  {ANNOTATIONS[i] && <p className="home-problem__annotation">{ANNOTATIONS[i]}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="home-problem__closing">{problem.closing}</p>
      <p className="home-problem__caveat">{readoutPanels.caveat}</p>
    </Section>
  );
}
