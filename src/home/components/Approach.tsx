import { Section } from "../../design-system/Section";
import { lifecycle, lifecycleCaption, approachIntro } from "../../content/shared";
import "./Approach.css";

export function Approach() {
  const lastIndex = lifecycle.length - 1;
  return (
    <Section
      id="approach"
      kicker={approachIntro.eyebrow}
      heading={approachIntro.headline}
      intro={approachIntro.intro}
      width="content"
      density="compact"
    >
      <div className="home-approach-timeline">
        <span className="home-approach-timeline__spine" aria-hidden="true" />
        {lifecycle.map((step, i) => (
          <div className="home-approach-step" key={step.name}>
            <span className="home-approach-step__index">{step.index}</span>
            <span className="home-approach-step__dot" data-terminal={i === lastIndex} />
            <span className="home-approach-step__name">{step.name}</span>
          </div>
        ))}
      </div>
      <p className="home-approach-return">
        <span className="home-approach-return__mark" aria-hidden="true" />
        {lifecycleCaption}
      </p>

      <dl className="home-approach-legend">
        {lifecycle.map((step) => (
          <div className="home-approach-legend__item" key={step.name}>
            <dt>
              <span className="kicker">{step.index}</span> {step.name}
            </dt>
            <dd>
              <strong>{step.statement}</strong> {step.detail}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
