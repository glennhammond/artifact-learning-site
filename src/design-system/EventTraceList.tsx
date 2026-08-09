import type { TraceEvent } from "../content/shared";
import "./EventTraceList.css";

interface EventTraceListProps {
  events: TraceEvent[];
  meta?: { label: string; value: string }[];
  caption?: string;
  className?: string;
}

/**
 * A vertical trace of learning events along a thin rail — the hero's data
 * artefact (content doc v0.3 §2). Only the active/consequential event is
 * marked in Signal; the rest read as quiet, genuine-looking instrumentation
 * rather than a fake terminal.
 */
export function EventTraceList({ events, meta, caption, className = "" }: EventTraceListProps) {
  return (
    <div className={`ds-trace-list ${className}`.trim()}>
      <ul className="ds-trace-list__events">
        {events.map((event) => (
          <li key={event.name} data-active={event.active}>
            <span className="ds-trace-list__dot" aria-hidden="true" />
            <span className="ds-trace-list__name">{event.name}</span>
          </li>
        ))}
      </ul>
      {meta && meta.length > 0 && (
        <dl className="ds-trace-list__meta">
          {meta.map((m) => (
            <div key={m.label}>
              <dt>{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {caption && <p className="ds-trace-list__caption kicker">{caption}</p>}
    </div>
  );
}
