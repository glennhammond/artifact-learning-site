import "./EventTrace.css";

interface EventTraceProps {
  verb: string;
  detail: string;
  timestamp: string;
  className?: string;
}

/**
 * A single genuine-looking learning event, set in IBM Plex Mono — the
 * "meaningful Artifact artefact" the hero needs (brief §7): not
 * illustration, a fragment of the same event language the Model and
 * Problem sections use. The leading mark is the one Signal moment in the
 * hero — a system just noticed something.
 */
export function EventTrace({ verb, detail, timestamp, className = "" }: EventTraceProps) {
  return (
    <div className={`ds-event-trace ${className}`.trim()}>
      <span className="ds-event-trace__mark" aria-hidden="true" />
      <div className="ds-event-trace__body">
        <p className="ds-event-trace__verb">{verb}</p>
        <p className="ds-event-trace__detail">{detail}</p>
        <p className="ds-event-trace__time">{timestamp}</p>
      </div>
    </div>
  );
}
