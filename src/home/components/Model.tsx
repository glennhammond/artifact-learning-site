import { Section } from "../../design-system/Section";
import { LoopDiagram } from "../../design-system/LoopDiagram";
import { modelLayers, modelCaption, modelIntro, platform } from "../../content/shared";
import "./Model.css";

/**
 * The one section on the homepage that uses the Ink surface: bounded here,
 * not spread across the page (Concept C's compositional instinct, corrected
 * to a single accent). See docs/consolidation-decision.md.
 */
export function Model() {
  return (
    <Section
      id="model"
      kicker={modelIntro.eyebrow}
      heading={modelIntro.headline}
      intro={modelIntro.body}
      tone="ink"
      density="expansive"
      className="home-model"
    >
      <LoopDiagram layers={modelLayers} platform={platform} />
      <p className="home-model__caption">{modelCaption}</p>
    </Section>
  );
}
