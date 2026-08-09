import { Container } from "../../components/layout/Container";
import { Button } from "../../design-system/Button";
import { EventTrace } from "../../design-system/EventTrace";
import { hero } from "../../content/shared";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="home-hero" aria-label="Introduction">
      <Container>
        <div className="home-hero__grid">
          <div className="home-hero__headline">
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
          </div>
          <div className="home-hero__aside">
            <p className="home-hero__standfirst">{hero.standfirst}</p>
            <div className="home-hero__actions">
              <Button variant="primary" href={hero.ctaHref}>
                {hero.cta}
              </Button>
              <Button variant="text" href={hero.ctaSecondaryHref}>
                {hero.ctaSecondary} <span aria-hidden="true">→</span>
              </Button>
            </div>
            <EventTrace
              className="home-hero__trace"
              verb="experience.started"
              detail="scenario: vendor-risk-01"
              timestamp="2026-08-09T10:42:03Z"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
