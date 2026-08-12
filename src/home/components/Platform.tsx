import { Section } from "../../design-system/Section";
import { platformSummary } from "../../content/shared";
import "./Platform.css";

export function Platform() {
  return (
    <Section
      id="platform"
      kicker={platformSummary.eyebrow}
      heading={platformSummary.headline}
      intro={platformSummary.intro}
      width="content"
      density="compact"
    >
      <div className="home-platform-system" aria-label="Artifact platform ecosystem">
        <div className="home-platform-system__experience">Learning experience</div>

        <div className="home-platform-system__grid">
          <div>
            <span className="kicker">Build</span>
            <strong>Framework</strong>
            <small>Components + runtime</small>
          </div>
          <div>
            <span className="kicker">Observe</span>
            <strong>Events</strong>
            <small>Meaningful signals</small>
          </div>
          <div>
            <span className="kicker">Interoperate</span>
            <strong>xAPI</strong>
            <small>Standards where useful</small>
          </div>
          <div>
            <span className="kicker">Understand</span>
            <strong>Inspector + Analytics</strong>
            <small>Debugging and emerging insight</small>
          </div>
        </div>
      </div>

      <div className="home-platform-proof">
        <pre aria-label="Illustrative Artifact event">{`artifact.event
type      decision.responded
choice    request_evidence`}</pre>

        <div className="home-platform-proof__inspector">
          <span className="kicker">Inspector</span>
          <strong>decision.responded</strong>
          <small>/experience/decision-03</small>
        </div>

        <div className="home-platform-proof__analytics">
          <span className="kicker">Analytics · concept</span>
          <strong>Repeated retry at decision 03</strong>
          <small>Illustrative pattern, not live reporting</small>
        </div>
      </div>

      <p className="home-platform-status">{platformSummary.status}</p>
    </Section>
  );
}
