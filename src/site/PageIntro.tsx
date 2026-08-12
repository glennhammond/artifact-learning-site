import type { ReactNode } from "react";
import { Container } from "../components/layout/Container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  aside?: ReactNode;
  tone?: "paper" | "ink";
}

export function PageIntro({ eyebrow, title, intro, aside, tone = "paper" }: PageIntroProps) {
  return (
    <header className={`site-page-intro site-page-intro--${tone}${tone === "ink" ? " on-ink" : ""}`}>
      <Container>
        <div className="site-page-intro__grid">
          <div>
            <p className="kicker">{eyebrow}</p>
            <h1>{title}</h1>
            <div className="site-page-intro__lead">{intro}</div>
          </div>
          {aside && <aside className="site-page-intro__aside">{aside}</aside>}
        </div>
      </Container>
    </header>
  );
}
