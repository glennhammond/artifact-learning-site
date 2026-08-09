import { Section } from "../../design-system/Section";
import { DataStrip } from "../../design-system/DataStrip";
import { problem, readoutPanels } from "../../content/shared";
import "./Problem.css";

export function Problem() {
  return (
    <Section id="problem" heading={problem.headline} narrow>
      <p className="home-problem__body">{problem.body}</p>
      <div className="home-problem__strips">
        <DataStrip label={readoutPanels.before.label} lines={readoutPanels.before.lines} />
        <DataStrip label={readoutPanels.after.label} lines={readoutPanels.after.lines} active />
      </div>
      <p className="home-problem__caveat">{readoutPanels.caveat}</p>
    </Section>
  );
}
