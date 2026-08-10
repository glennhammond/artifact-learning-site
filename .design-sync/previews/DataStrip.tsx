import { DataStrip } from "../../src/design-system/DataStrip";
import { readoutPanels, modelLayers } from "../../src/content/shared";

/** Muted — the limited/status-quo view (a conventional completion report), receding visually. */
export function Muted() {
  return <DataStrip label={readoutPanels.before.label} lines={readoutPanels.before.lines} muted />;
}

/** Active — the strip carrying the meaningful contrast, marked with a single Signal corner mark. */
export function Active() {
  return <DataStrip label={`${modelLayers[1].name} — illustrative artefact`} lines={modelLayers[1].artefact} active />;
}

/** Default — genuine event/data lines set in IBM Plex Mono, no emphasis modifier. */
export function Default() {
  return <DataStrip label={`${modelLayers[2].name} — structured record`} lines={modelLayers[2].artefact} />;
}
