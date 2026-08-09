import { SkipLink } from "../../src/components/layout/SkipLink";

/**
 * Deliberately visually hidden until keyboard focus (Home.tsx renders it as
 * the very first element in the page). This card renders correctly with no
 * visible content — that's the real, intended un-focused state; Tab to it
 * to see the focus-visible treatment.
 */
export function Default() {
  return <SkipLink />;
}
