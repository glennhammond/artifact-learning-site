import type { ReactNode } from "react";
import { Button } from "./Button";
import { DataStrip } from "./DataStrip";
import type { Project } from "../content/shared";
import "./WorkFeature.css";

interface WorkFeatureProps {
  project: Project;
  stages: string[];
  evidenceLine?: string;
  evidenceCaveat?: string;
  figure?: ReactNode;
}

/**
 * The one full featured case study — problem-led, evidence at the end
 * (v0.2 §09). Deliberately not a card in a grid: this is the only work item
 * that gets a figure, and the case-study chain is shown as a labelled
 * sequence rather than expanded into a full case-study page (out of scope
 * this phase, per brief §14).
 */
export function WorkFeature({ project, stages, evidenceLine, evidenceCaveat, figure }: WorkFeatureProps) {
  return (
    <article className="ds-work-feature">
      <div className="ds-work-feature__figure" role="img" aria-label="Evidence image placeholder">
        {figure ?? <span>Evidence image placeholder</span>}
      </div>
      <div className="ds-work-feature__body">
        <p className="kicker">{project.eyebrow}</p>
        <h3>{project.question}</h3>
        <p className="ds-work-feature__framing">{project.framing}</p>

        <ol className="ds-work-feature__stages" aria-label="Case-study structure">
          {stages.map((stage, i) => (
            <li key={stage}>
              {stage}
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="ds-work-feature__stage-sep">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        {evidenceLine && (
          <div className="ds-work-feature__evidence">
            <DataStrip label="Illustrative event" lines={[evidenceLine]} />
            {evidenceCaveat && <p className="ds-work-feature__caveat">{evidenceCaveat}</p>}
          </div>
        )}

        <Button variant="text" href="#work" aria-disabled="true">
          Read the case study <span aria-hidden="true">→</span>
        </Button>
      </div>
    </article>
  );
}

interface WorkListProps {
  projects: Project[];
}

/** Secondary work items — a short text-led list, not a card grid (v0.2, brief §14). */
export function WorkList({ projects }: WorkListProps) {
  return (
    <ul className="ds-work-list">
      {projects.map((project) => (
        <li key={project.question}>
          <p className="kicker">{project.eyebrow}</p>
          <p className="ds-work-list__title">{project.question}</p>
          {project.status && <span className="ds-work-list__status">{project.status}</span>}
        </li>
      ))}
    </ul>
  );
}
