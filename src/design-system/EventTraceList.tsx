import type { TraceEvent } from "../content/shared";
import "./EventTraceList.css";

interface EventTraceListProps {
  events: TraceEvent[];
  meta?: { label: string; value: string }[];
  caption?: string;
  className?: string;
}

/**
 * A vertical trace of learning events along a thin rail: a substantial
 * editorial/technical artefact integrated into the hero (v0.4 §3), not a
 * dashboard or console. The active/consequential event is marked with
 * stronger structure; the rest read as quiet, genuine-looking instrumentation. The
 * label sits above the trace like a caption on a figure, giving the
 * artefact its own identity within the composition. Active state is shown
 * structurally in Ink rather than with a tiny Signal detail on Paper.
 */
export function EventTraceList({ events, meta, caption, className = "" }: EventTraceListProps) {
  return (
    <div className={`ds-trace-list ${className}`.trim()}>
      {caption && <p className="ds-trace-list__label kicker">{caption}</p>}
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
    </div>
  );
}
