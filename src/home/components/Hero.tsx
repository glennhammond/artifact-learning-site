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
            {/* Authored three-line break for hero.headline — short fragments that
                hold their line at any viewport/display-scale combination, rather
                than letting the browser wrap "...as a product," awkwardly mid-clause. */}
            <h1>
              Digital learning
              <br />
              as a product,
              <br />
              not a course.
            </h1>
            <p className="home-hero__standfirst">{hero.standfirst}</p>
            <p className="home-hero__standfirst home-hero__standfirst--secondary">
              {hero.standfirstSecondary}
            </p>
            <div className="home-hero__actions">
              <Button variant="primary" href={hero.ctaHref}>
                {hero.cta}
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
