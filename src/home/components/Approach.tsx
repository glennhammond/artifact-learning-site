import { Section } from "../../design-system/Section";
import { lifecycle, lifecycleCaption } from "../../content/shared";
import "./Approach.css";

export function Approach() {
  return (
    <Section id="approach" kicker="Approach" heading="A working lifecycle">
      <ol className="home-lifecycle">
        {lifecycle.map((step, i) => (
          <li key={step.name}>
            <span className="kicker">{step.index}</span>
            <span>{step.name}</span>
            {i < lifecycle.length - 1 && (
              <span className="home-lifecycle__arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="home-lifecycle__caption">{lifecycleCaption}</p>
    </Section>
  );
}
