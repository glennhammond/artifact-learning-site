import { EventTraceList } from "../../src/design-system/EventTraceList";
import { heroTrace } from "../../src/content/shared";

/** The hero composition — events, meta pairs and a caption, exactly as Hero renders it. */
export function Default() {
  return <EventTraceList events={heroTrace.events} meta={heroTrace.meta} caption={heroTrace.caption} />;
}

/** Events only — meta and caption are both optional. */
export function EventsOnly() {
  return <EventTraceList events={heroTrace.events} />;
}
