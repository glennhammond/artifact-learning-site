import { Container } from "../../components/layout/Container";
import { Button } from "../../design-system/Button";
import { EventTraceList } from "../../design-system/EventTraceList";
import { hero, heroTrace } from "../../content/shared";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="home-hero" aria-label="Introduction">
      <Container>
        <div className="home-hero__grid">
          <div className="home-hero__primary">
            <p className="kicker">{hero.eyebrow}</p>
            {/* Authored line break for hero.headline — holds its shape at any
                viewport/display-scale combination rather than an awkward
                browser wrap mid-clause. */}
            <h1>
              Develop capability,
              <br />
              not just completion.
            </h1>
            <p className="home-hero__standfirst">{hero.standfirst}</p>
            <p className="home-hero__standfirst home-hero__standfirst--secondary">
              {hero.standfirstSecondary}
            </p>
            <div className="home-hero__actions">
              <Button variant="primary" href={hero.ctaHref}>
                {hero.cta}
              </Button>
              <Button variant="text" href={hero.ctaSecondaryHref}>
                {hero.ctaSecondary} <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="home-hero__trace-plane">
            <EventTraceList events={heroTrace.events} meta={heroTrace.meta} caption={heroTrace.caption} />
            <p className="home-hero__trace-statement">{heroTrace.statement}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
