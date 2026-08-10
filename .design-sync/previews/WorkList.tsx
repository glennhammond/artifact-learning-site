import { WorkList } from "../../src/design-system/WorkFeature";
import { secondaryProjects } from "../../src/content/shared";

/** The secondary work items — a short text-led list, exactly as Work composes it below WorkFeature. */
export function Default() {
  return <WorkList projects={secondaryProjects} />;
}
