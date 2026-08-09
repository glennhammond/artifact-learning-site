import { Container } from "../../../components/layout/Container";
import { hero } from "../../../content/shared";
import { LoopPreview } from "./LoopPreview";
import "./Hero.css";

export function Hero() {
  return (
    <section id="top" className="b-hero" aria-label="Introduction">
      <Container>
        <div className="b-hero__grid">
          <div>
            <p className="kicker">{hero.eyebrow}</p>
            <h1>{hero.headline}</h1>
            <p className="b-hero__standfirst">{hero.standfirst}</p>
            <a className="btn-outline" href="#model">
              See the model <span aria-hidden="true">↓</span>
            </a>
          </div>
          <LoopPreview />
        </div>
      </Container>
    </section>
  );
}
