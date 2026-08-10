import { Tag } from "./Tag";
import type { ServiceOffer } from "../content/shared";
import "./ServiceFeature.css";

interface FeaturedService extends ServiceOffer {
  tags: string[];
  imageNote: string;
}

interface ServiceFeatureProps {
  service: FeaturedService;
}

/**
 * A decision-scenario schematic standing in for the kind of interaction a
 * Bespoke Learning Experience is built around — diagrammatic rather than a
 * screenshot, so it reads as "the shape of the problem," not a shipped
 * project (see docs/strategy/phase-1-strategic-ia-homepage-definition.md §8:
 * editorial visual specimens, not project imagery).
 */
function DecisionSpecimen({ label }: { label: string }) {
  return (
    <div className="ds-service-specimen" role="img" aria-label={label}>
      <svg viewBox="0 0 320 220" preserveAspectRatio="none" aria-hidden="true">
        <rect x="0.5" y="0.5" width="319" height="219" fill="none" stroke="var(--color-border)" />
        <rect x="20" y="20" width="200" height="10" fill="var(--color-border)" />
        <rect x="20" y="40" width="260" height="7" fill="var(--color-text-subtle)" />
        <rect x="20" y="54" width="220" height="7" fill="var(--color-text-subtle)" />

        {/* two decision choices, one selected in Signal */}
        <rect x="20" y="90" width="120" height="50" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
        <rect x="20" y="90" width="120" height="50" fill="var(--color-signal)" opacity="0.14" />
        <rect x="34" y="108" width="14" height="14" fill="none" stroke="var(--color-signal)" strokeWidth="2" />
        <rect x="56" y="112" width="70" height="6" fill="var(--color-text-secondary)" />

        <rect x="160" y="90" width="120" height="50" fill="none" stroke="var(--color-border)" />
        <rect x="174" y="108" width="14" height="14" fill="none" stroke="var(--color-border)" strokeWidth="2" />
        <rect x="196" y="112" width="70" height="6" fill="var(--color-border)" />

        <rect x="20" y="168" width="90" height="24" fill="var(--color-text)" />
      </svg>
      <p className="ds-service-specimen__caption">{label}</p>
    </div>
  );
}

/**
 * The one featured offer — Bespoke Learning Experiences — given the same
 * editorial-hierarchy treatment as WorkFeature/WorkList: one full-weight
 * item, everything else a short text-led list. Deliberately not a reuse of
 * WorkFeature: a service describes a kind of engagement, not a delivered
 * case study, so it carries a diagrammatic specimen instead of WorkComposite
 * project imagery, and has no case-study stage chain.
 */
export function ServiceFeature({ service }: ServiceFeatureProps) {
  return (
    <article className="ds-service-feature">
      <div className="ds-service-feature__body">
        <p className="kicker">{service.index} · Primary offer</p>
        <h3>{service.name}</h3>
        <p className="ds-service-feature__question">{service.question}</p>
        <p className="ds-service-feature__framing">{service.framing}</p>
        <ul className="ds-service-feature__tags" aria-label="Disciplines involved">
          {service.tags.map((tag) => (
            <li key={tag}>
              <Tag mono>{tag}</Tag>
            </li>
          ))}
        </ul>
      </div>
      <div className="ds-service-feature__figure">
        <DecisionSpecimen label={service.imageNote} />
      </div>
    </article>
  );
}

/** Three small, distinct specimens for the secondary offers — not icons. */
function RedesignMark() {
  return (
    <svg viewBox="0 0 60 44" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="27" height="43" fill="none" stroke="var(--color-border)" />
      <rect x="6" y="10" width="16" height="5" fill="var(--color-text-subtle)" />
      <rect x="6" y="20" width="16" height="4" fill="var(--color-border)" />
      <rect x="6" y="28" width="10" height="4" fill="var(--color-border)" />
      <rect x="32.5" y="0.5" width="27" height="43" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
      <rect x="38" y="10" width="16" height="5" fill="var(--color-text)" />
      <rect x="38" y="20" width="16" height="4" fill="var(--color-signal)" />
      <rect x="38" y="28" width="16" height="4" fill="var(--color-text-secondary)" />
    </svg>
  );
}

function SystemMark() {
  return (
    <svg viewBox="0 0 60 44" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="17" height="17" fill="none" stroke="var(--color-border)" />
      <rect x="21.5" y="0.5" width="17" height="17" fill="none" stroke="var(--color-border)" />
      <rect x="42.5" y="0.5" width="17" height="17" fill="var(--color-signal)" opacity="0.45" />
      <rect x="0.5" y="21.5" width="17" height="22" fill="none" stroke="var(--color-border)" />
      <rect x="21.5" y="21.5" width="38" height="22" fill="none" stroke="var(--color-text-subtle)" />
    </svg>
  );
}

function EvidenceMark() {
  return (
    <pre className="ds-service-list__mono" aria-hidden="true">
{`event   responded
retry   1
result  escalate`}
    </pre>
  );
}

const SECONDARY_MARKS = [RedesignMark, SystemMark, EvidenceMark];

interface ServiceListProps {
  services: ServiceOffer[];
}

/** Secondary offers — a short text-led list, not a card grid. */
export function ServiceList({ services }: ServiceListProps) {
  return (
    <ul className="ds-service-list">
      {services.map((service, i) => {
        const Mark = SECONDARY_MARKS[i] ?? SECONDARY_MARKS[0];
        return (
          <li key={service.name}>
            <div className="ds-service-list__mark" aria-hidden="true">
              <Mark />
            </div>
            <div className="ds-service-list__body">
              <p className="kicker">{service.index}</p>
              <h3 className="ds-service-list__title">{service.name}</h3>
              <p className="ds-service-list__question">{service.question}</p>
              <p className="ds-service-list__framing">{service.framing}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
