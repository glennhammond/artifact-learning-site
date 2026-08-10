import { Section } from "../../design-system/Section";
import { DataStrip } from "../../design-system/DataStrip";
import { evidenceIntro, evidenceDistinction, readoutPanels } from "../../content/shared";
import "./Evidence.css";

const ANNOTATIONS: Record<number, string> = {
  1: "Captures the choice made and how long it took to decide.",
  3: "Shows where a learner hesitated and reconsidered.",
};

/**
 * The fuller measurement-restraint section — the before/after comparison
 * relocated here from Problem (Phase 1 strategy §3a), plus the explicit
 * boundary between learning-experience evidence and workplace transfer /
 * behaviour change / organisational performance (brief §12).
 */
export function Evidence() {
  return (
    <Section id="evidence" kicker={evidenceIntro.eyebrow} heading={evidenceIntro.headline} intro={evidenceIntro.intro}>
      <div className="home-evidence__composition">
        <div className="home-evidence__before">
          <DataStrip label={readoutPanels.before.label} lines={readoutPanels.before.lines} muted />
        </div>

        <div className="home-evidence__transition" aria-hidden="true">
          <span className="home-evidence__transition-line" />
          <span className="home-evidence__transition-label kicker">{readoutPanels.transitionLabel}</span>
          <span className="home-evidence__transition-line" />
        </div>

        <div className="home-evidence__after">
          <span className="ds-data-strip__mark home-evidence__after-mark" aria-hidden="true" />
          <p className="kicker home-evidence__after-label">{readoutPanels.after.label}</p>
          <div className="home-evidence__events">
            {readoutPanels.after.groups.map((group, i) => (
              <div className="home-evidence__event-group" key={group[0]}>
                <pre className="home-evidence__event-lines">{group.join("\n")}</pre>
                {ANNOTATIONS[i] && <p className="home-evidence__annotation">{ANNOTATIONS[i]}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="home-evidence__caveat">{readoutPanels.caveat}</p>

      <div className="home-evidence__distinction">
        <h3>{evidenceDistinction.heading}</h3>
        <p className="home-evidence__distinction-body">{evidenceDistinction.body}</p>
        <p className="home-evidence__boundary-label kicker">{evidenceDistinction.boundaryLabel}</p>
        <ul className="home-evidence__boundary">
          {evidenceDistinction.boundary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="home-evidence__distinction-closing">{evidenceDistinction.closing}</p>
      </div>
    </Section>
  );
}
