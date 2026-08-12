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

function DecisionSpecimen({ label }: { label: string }) {
  return (
    <figure className="ds-service-specimen">
      <div
        className="ds-service-specimen__visual"
        role="img"
        aria-label="Artifact experience specimen showing workplace context, evidence, a learner decision, tailored feedback and an observable response signal."
      >
        <div aria-hidden="true">
          <div className="ds-service-specimen__topline"><span>Artifact experience specimen</span><span>Decision 03 / 05</span></div>
          <div className="ds-service-specimen__content">
            <p className="kicker">Context</p>
            <h4>An urgent approval arrives without the evidence normally required.</h4>
            <div className="ds-service-specimen__source"><span>Evidence available</span><strong>Request summary</strong><strong>Verification record · missing</strong></div>
            <p className="ds-service-specimen__prompt">What would you do next?</p>
            <div className="ds-service-specimen__choices">
              <div className="is-selected"><span />Request the missing evidence</div>
              <div><span />Approve and record it later</div>
            </div>
            <div className="ds-service-specimen__feedback"><span className="kicker">Response-specific feedback</span><strong>Preserve the verification step before approval.</strong></div>
          </div>
          <div className="ds-service-specimen__evidence"><span>decision.responded</span><strong>request_evidence</strong><span>feedback.presented</span></div>
        </div>
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  );
}

/**
 * The one featured offer: Bespoke Learning Experiences: given the same
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

/** Three small, distinct specimens for the secondary offers: not icons. */
function RedesignMark() {
  return (
    <svg viewBox="0 0 60 44" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="27" height="43" fill="none" stroke="var(--color-border)" />
      <rect x="6" y="10" width="16" height="5" fill="var(--color-text-subtle)" />
      <rect x="6" y="20" width="16" height="4" fill="var(--color-border)" />
      <rect x="6" y="28" width="10" height="4" fill="var(--color-border)" />
      <rect x="32.5" y="0.5" width="27" height="43" fill="none" stroke="var(--color-text)" strokeWidth="1.5" />
      <rect x="38" y="10" width="16" height="5" fill="var(--color-text)" />
      <rect x="38" y="20" width="16" height="4" fill="var(--color-text-secondary)" />
      <rect x="38" y="28" width="16" height="4" fill="var(--color-text-secondary)" />
    </svg>
  );
}

function SystemMark() {
  return (
    <svg viewBox="0 0 60 44" preserveAspectRatio="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="17" height="17" fill="none" stroke="var(--color-border)" />
      <rect x="21.5" y="0.5" width="17" height="17" fill="none" stroke="var(--color-border)" />
      <rect x="42.5" y="0.5" width="17" height="17" fill="var(--color-text-secondary)" opacity="0.45" />
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

/** Secondary offers: a short text-led list, not a card grid. */
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
