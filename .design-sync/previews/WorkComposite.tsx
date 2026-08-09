import { WorkComposite } from "../../src/design-system/WorkComposite";

/** Default placeholder caption — the label WorkFeature passes for the featured case study today. */
export function Default() {
  return <WorkComposite />;
}

/** A different case study's caption — the label is the only thing that varies; the placeholder geometry is intentionally identical across every use (it stands in for imagery, not a per-project illustration). */
export function CustomCaption() {
  return <WorkComposite label="Compliance learning — decision-point interface crop, pending final assets." />;
}
