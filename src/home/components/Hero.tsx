import { Container } from "../../components/layout/Container";
import { Button } from "../../design-system/Button";
import { hero } from "../../content/shared";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="home-hero" aria-label="Introduction">
      <Container>
        <div className="home-hero__grid">
          <div className="home-hero__headline">
            <p className="kicker">{hero.eyebrow}</p>
            <h1>{hero.headline}</h1>
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
          </div>
        </div>
      </Container>
    </section>
  );
}
