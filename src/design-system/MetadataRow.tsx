import type { ReactNode } from "react";
import { Tag } from "./Tag";
import "./MetadataRow.css";

interface MetadataRowProps {
  index: string;
  name: string;
  status?: string;
  note?: ReactNode;
}

const MATURITY_STAGE: Record<string, number> = {
  concept: 1,
  "in design": 2,
  "in development": 3,
};
const MATURITY_STAGES = 3;

/** Three-mark maturity dial — Signal marks only the current stage, never the whole track. */
function MaturityDial({ status }: { status: string }) {
  const stage = MATURITY_STAGE[status] ?? 0;
  if (!stage) return null;
  return (
    <span className="ds-maturity-dial" aria-hidden="true">
      {Array.from({ length: MATURITY_STAGES }, (_, i) => {
        const n = i + 1;
        const state = n === stage ? "current" : n < stage ? "passed" : "pending";
        return <span key={n} className="ds-maturity-dial__mark" data-state={state} />;
      })}
    </span>
  );
}

/** Index + name + optional status tag/maturity dial + optional note — the ecosystem list row pattern. */
export function MetadataRow({ index, name, status, note }: MetadataRowProps) {
  return (
    <div className="ds-metadata-row">
      <div className="ds-metadata-row__head">
        <span className="kicker ds-metadata-row__index">{index}</span>
        <span className="ds-metadata-row__name">{name}</span>
        {status && (
          <span className="ds-metadata-row__status">
            <MaturityDial status={status} />
            <Tag>{status}</Tag>
          </span>
        )}
      </div>
      {note && <p className="ds-metadata-row__note">{note}</p>}
    </div>
  );
}
