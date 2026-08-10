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
      <ol className="home-approach-grid">
        {lifecycle.map((step, i) => (
          <li className="home-approach-card" key={step.name}>
            <div className="home-approach-card__top">
              <span className="home-approach-card__index">{step.index}</span>
              <span className="home-approach-card__dot" data-terminal={i === lastIndex} aria-hidden="true" />
            </div>
            <h3>{step.name}</h3>
            <p>{step.statement}</p>
          </li>
        ))}
      </ol>

      <p className="home-approach-return">
        <span className="home-approach-return__mark" aria-hidden="true" />
        {lifecycleCaption}
      </p>
    </Section>
  );
}
