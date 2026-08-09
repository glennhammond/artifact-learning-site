import { LoopDiagram } from "../../src/design-system/LoopDiagram";
import { modelLayers, platform } from "../../src/content/shared";

/**
 * The signature system visual, exactly as the Model section composes it —
 * five layers (Experience → Signals → Data → Insight → Improvement) looping
 * back, Platform shown as the base plane rather than a stage in the sequence.
 */
export function Default() {
  return <LoopDiagram layers={modelLayers} platform={platform} />;
}
