import type { WorkVisualAsset } from "../content/workAssets";
import "./WorkComposite.css";

interface WorkCompositeProps {
  asset: WorkVisualAsset;
}

function LearningInterface() {
  return (
    <div className="ds-work-proof__experience">
      <div className="ds-work-proof__nav">
        <span>Professional practice</span>
        <span>03 / 06</span>
      </div>
      <div className="ds-work-proof__screen">
        <p className="kicker">Decision point 03</p>
        <h4>What should happen before this exception is approved?</h4>
        <p className="ds-work-proof__context">
          The request is urgent, but one required source has not been verified.
        </p>
        <div className="ds-work-proof__choices">
          <div className="ds-work-proof__choice ds-work-proof__choice--active">
            <span aria-hidden="true" /> Request the missing evidence
          </div>
          <div className="ds-work-proof__choice">
            <span aria-hidden="true" /> Approve and review it later
          </div>
        </div>
        <div className="ds-work-proof__feedback">
          <span className="kicker">Feedback pattern</span>
          <strong>Decision before explanation</strong>
          <small>Response-specific guidance follows the learner’s choice.</small>
        </div>
      </div>
    </div>
  );
}

function DocumentationPanel() {
  return (
    <div className="ds-work-proof__documentation">
      <div className="ds-work-proof__doc-head">
        <span className="kicker">Component documentation</span>
        <strong>DecisionPoint</strong>
      </div>
      <div className="ds-work-proof__anatomy">
        <span>01</span><p>Context and constraint</p>
        <span>02</span><p>Decision prompt</p>
        <span>03</span><p>Response states</p>
        <span>04</span><p>Consequential feedback</p>
      </div>
      <div className="ds-work-proof__states">
        <span>Default</span>
        <span className="is-selected">Selected</span>
        <span>Reviewed</span>
      </div>
    </div>
  );
}

function MobileCrop() {
  return (
    <div className="ds-work-proof__mobile">
      <div className="ds-work-proof__mobile-head"><span>03</span><span>Decision</span></div>
      <p>Review the evidence before you respond.</p>
      <div className="ds-work-proof__mobile-choice is-selected">Request evidence</div>
      <div className="ds-work-proof__mobile-choice">Approve exception</div>
      <div className="ds-work-proof__mobile-progress"><span /></div>
    </div>
  );
}

/** Replaceable multi-artefact proof for the featured eLearning design system. */
export function WorkComposite({ asset }: WorkCompositeProps) {
  return (
    <figure className="ds-work-proof">
      <div className="ds-work-proof__canvas" role="img" aria-label={asset.alt}>
        <div aria-hidden="true" className="ds-work-proof__layers">
          <LearningInterface />
          <DocumentationPanel />
          <MobileCrop />
        </div>
      </div>
      <figcaption>
        <span>{asset.caption}</span>
        <span>{asset.proofRole} · {asset.status}</span>
      </figcaption>
    </figure>
  );
}
