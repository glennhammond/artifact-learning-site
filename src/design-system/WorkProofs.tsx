import type { ReactNode } from "react";
import type { WorkVisualAsset } from "../content/workAssets";
import "./WorkProofs.css";

interface ProofProps { asset: WorkVisualAsset }

function ProofFigure({ asset, children }: ProofProps & { children: ReactNode }) {
  return (
    <figure className={`ds-project-proof ds-project-proof--${asset.project}`}>
      <div className="ds-project-proof__visual" role="img" aria-label={asset.alt}>
        <div aria-hidden="true">{children}</div>
      </div>
      <figcaption><span>{asset.caption}</span><span>{asset.proofRole} · {asset.status}</span></figcaption>
    </figure>
  );
}

export function ProfessionalJudgementProof({ asset }: ProofProps) {
  return (
    <ProofFigure asset={asset}>
      <div className="ds-judgement-proof__header"><span>Decision 04</span><span>Representative</span></div>
      <div className="ds-judgement-proof__body">
        <div>
          <p className="kicker">Context</p>
          <strong>A supplier requests an exception before the supporting review is complete.</strong>
        </div>
        <div className="ds-judgement-proof__evidence">
          <p className="kicker">Evidence available</p>
          <span>Risk review · draft</span><span>Required source · missing</span>
        </div>
        <div className="ds-judgement-proof__decision">
          <p className="kicker">Your judgement</p>
          <span className="is-selected">Request evidence before approval</span>
          <span>Approve with a later review</span>
        </div>
        <div className="ds-judgement-proof__feedback"><span>Feedback</span><strong>The decision preserves the verification step.</strong></div>
      </div>
    </ProofFigure>
  );
}

export function WellbeingStudioProof({ asset }: ProofProps) {
  return (
    <ProofFigure asset={asset}>
      <div className="ds-wellbeing-proof__mast"><span>Wellbeing Studio</span><span>August programme</span></div>
      <div className="ds-wellbeing-proof__feature">
        <p className="kicker">This month</p><strong>Recovering attention</strong>
        <span>One guided practice · one live session · reflection over time</span>
      </div>
      <div className="ds-wellbeing-proof__programme">
        <div><span className="kicker">Practice 01</span><strong>Five-minute reset</strong><small>Video + guided practice</small></div>
        <div><span className="kicker">Live</span><strong>Working with attention</strong><small>Thursday · 12:30</small></div>
      </div>
      <div className="ds-wellbeing-proof__progress"><span>Programme participation</span><div><i /></div><strong>2 / 4</strong></div>
    </ProofFigure>
  );
}

export function ArtifactRdProof({ asset }: ProofProps) {
  return (
    <ProofFigure asset={asset}>
      <div className="ds-rd-proof__flow">
        <div><span className="kicker">In development</span><strong>DecisionPoint</strong><small>learner response</small></div>
        <span aria-hidden="true">→</span>
        <div><span className="kicker">In development</span><strong>Artifact event</strong><small>decision.responded</small></div>
        <span aria-hidden="true">→</span>
        <div><span className="kicker">Concept</span><strong>Inspector</strong><small>event + xAPI mapping</small></div>
      </div>
      <div className="ds-rd-proof__readout">
        <pre>{`event     decision.responded
choice    request_evidence
attempt   1`}</pre>
        <div><span className="kicker">Concept · Session Insight</span><strong>Repeated review before decision 04</strong><small>Interpretation requires context; not proof of transfer.</small></div>
      </div>
    </ProofFigure>
  );
}
