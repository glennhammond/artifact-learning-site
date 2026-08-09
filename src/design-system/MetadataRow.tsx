import type { ReactNode } from "react";
import { Tag } from "./Tag";
import "./MetadataRow.css";

interface MetadataRowProps {
  index: string;
  name: string;
  status?: string;
  note?: ReactNode;
}

/** Index + name + optional status tag + optional note — the ecosystem list row and similar patterns. */
export function MetadataRow({ index, name, status, note }: MetadataRowProps) {
  return (
    <div className="ds-metadata-row">
      <div className="ds-metadata-row__head">
        <span className="kicker ds-metadata-row__index">{index}</span>
        <span className="ds-metadata-row__name">{name}</span>
        {status && <Tag>{status}</Tag>}
      </div>
      {note && <p className="ds-metadata-row__note">{note}</p>}
    </div>
  );
}
