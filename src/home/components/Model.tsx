import { Section } from "../../design-system/Section";
import { LoopDiagram } from "../../design-system/LoopDiagram";
import { modelLayers, modelCaption, platform } from "../../content/shared";
import "./Model.css";

/**
 * The one section on the homepage that uses the Ink surface — bounded here,
 * not spread across the page (Concept C's compositional instinct, corrected
 * to a single accent). See docs/consolidation-decision.md.
 */
export function Model() {
  return (
    <Section
      id="model"
      kicker="The Artifact model"
      heading="A loop, not a hand-off"
      tone="ink"
      density="expansive"
      className="home-model"
    >
      <LoopDiagram layers={modelLayers} platform={platform} />
      <p className="home-model__caption">{modelCaption}</p>
    </Section>
  );
}
