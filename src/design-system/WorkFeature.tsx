import { Button } from "./Button";
import { Tag } from "./Tag";
import { WorkComposite } from "./WorkComposite";
import type { CaseStudyStage, Project } from "../content/shared";
import "./WorkFeature.css";

interface FeaturedProject extends Project {
  tags: string[];
  cta: string;
  imageNote: string;
}

interface WorkFeatureProps {
  project: FeaturedProject;
  stages: CaseStudyStage[];
}

/**
 * The one full featured case study — problem-led, evidence at the end.
 * Deliberately not a card in a grid: this is the only work item that gets
 * a figure, and the case-study chain is shown as a labelled sequence with
 * definitions rather than expanded into a full case-study page (out of
 * scope this phase).
 */
export function WorkFeature({ project, stages }: WorkFeatureProps) {
  return (
    <article className="ds-work-feature">
      <div className="ds-work-feature__figure">
        <WorkComposite label={project.imageNote} />
      </div>
      <div className="ds-work-feature__body">
        <p className="kicker">{project.eyebrow}</p>
        <h3>{project.question}</h3>
        <p className="ds-work-feature__framing">{project.framing}</p>

        <ul className="ds-work-feature__tags" aria-label="Capabilities involved">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag mono>{tag}</Tag>
            </li>
          ))}
        </ul>

        <dl className="ds-work-feature__stages" aria-label="Case-study structure">
          {stages.map((stage) => (
            <div key={stage.name} className="ds-work-feature__stage">
              <dt className="kicker">{stage.name}</dt>
              <dd>{stage.definition}</dd>
            </div>
          ))}
        </dl>

        <Button variant="text" href="#work" aria-disabled="true">
          {project.cta} <span aria-hidden="true">→</span>
        </Button>
      </div>
    </article>
  );
}

interface WorkListProps {
  projects: Project[];
}

/** Secondary work items — a short text-led list, not a card grid. */
export function WorkList({ projects }: WorkListProps) {
  return (
    <ul className="ds-work-list">
      {projects.map((project) => (
        <li key={project.question}>
          <div className="ds-work-list__thumb" aria-hidden="true">
            <svg viewBox="0 0 60 44" preserveAspectRatio="none">
              <rect x="0.5" y="0.5" width="59" height="43" fill="none" stroke="var(--color-border)" />
              <line x1="0" y1="10" x2="60" y2="10" stroke="var(--color-border)" />
              <rect x="6" y="18" width="30" height="5" fill="var(--color-border)" />
              <rect x="6" y="28" width="20" height="5" fill="var(--color-border)" />
            </svg>
          </div>
          <div className="ds-work-list__body">
            <p className="kicker">{project.eyebrow}</p>
            <p className="ds-work-list__title">{project.question}</p>
            <p className="ds-work-list__framing">{project.framing}</p>
            {project.status && <span className="ds-work-list__status">{project.status}</span>}
          </div>
        </li>
      ))}
    </ul>
  );
}
