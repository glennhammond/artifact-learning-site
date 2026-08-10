// Synthesized entry for design-sync. This repo ships the design system as
// part of the app (no library build/dist), so this file stands in for a
// package's dist entry: it re-exports exactly the components in sync scope
// and pulls in the real global stylesheet so esbuild's CSS bundling resolves
// tokens, resets and self-hosted fonts the same way the app's own
// src/main.tsx does.
import "../src/styles/global.css";

export { Button } from "../src/design-system/Button";
export { Tag } from "../src/design-system/Tag";
export { NavLink } from "../src/design-system/NavLink";
export { Section } from "../src/design-system/Section";
export { LoopDiagram } from "../src/design-system/LoopDiagram";
export { DataStrip } from "../src/design-system/DataStrip";
export { WorkFeature, WorkList } from "../src/design-system/WorkFeature";
export { EventTraceList } from "../src/design-system/EventTraceList";
export { WorkComposite } from "../src/design-system/WorkComposite";

export { Container } from "../src/components/layout/Container";
export { SkipLink } from "../src/components/layout/SkipLink";
export { Reveal } from "../src/components/layout/Reveal";
export { VisuallyHidden } from "../src/components/layout/VisuallyHidden";
