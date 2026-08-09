import type { ReactNode } from "react";
import { Container } from "../components/layout/Container";
import { Reveal } from "../components/layout/Reveal";
import "./Section.css";

interface SectionProps {
  id: string;
  kicker?: string;
  heading?: ReactNode;
  headingId?: string;
  intro?: ReactNode;
  narrow?: boolean;
  tone?: "paper" | "ink";
  children: ReactNode;
  className?: string;
}

/**
 * The section/layout primitive every homepage section is built from: a
 * consistent kicker + heading head, a one-shot reveal-on-scroll, and a
 * light/dark tone switch for the one section (Model) that uses the Ink
 * surface (v0.2 treats dark as an occasional technical-context mode, not
 * the page default — see docs/consolidation-decision.md).
 */
export function Section({
  id,
  kicker,
  heading,
  headingId,
  intro,
  narrow = false,
  tone = "paper",
  children,
  className = "",
}: SectionProps) {
  const resolvedHeadingId = headingId ?? `${id}-heading`;
  return (
    <section
      id={id}
      className={`ds-section ds-section--${tone} ${tone === "ink" ? "on-ink" : ""} ${className}`.trim()}
      aria-labelledby={heading ? resolvedHeadingId : undefined}
    >
      <Container narrow={narrow}>
        <Reveal as="div" className="ds-fade">
          {(kicker || heading) && (
            <div className="ds-section__head">
              {kicker && <p className="kicker">{kicker}</p>}
              {heading && (
                <h2 id={resolvedHeadingId} className="ds-section__heading">
                  {heading}
                </h2>
              )}
              {intro && <p className="ds-section__intro">{intro}</p>}
            </div>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
