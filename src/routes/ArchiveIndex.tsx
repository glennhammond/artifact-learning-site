import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArchiveIndex.css";

const concepts = [
  {
    path: "/archive/concept-a",
    label: "Concept A",
    name: "Editorial Product Studio",
    description:
      "Quiet authority. Disciplined typography, restrained interaction, generous whitespace, editorial pacing. Near-monochrome with a single muted accent.",
  },
  {
    path: "/archive/concept-b",
    label: "Concept B",
    name: "Digital Learning Laboratory",
    description:
      "Instrumentation made visible. Dark graphite surface, a persistent animated systems loop, and the fullest — still honest — view of the Artifact ecosystem.",
  },
  {
    path: "/archive/concept-c",
    label: "Concept C",
    name: "Editorial + Experimental Hybrid",
    description:
      "Concept A's editorial backbone with exactly one contained systems moment borrowed from B, testing whether a single bounded device earns its place.",
  },
];

export function ArchiveIndex() {
  useEffect(() => {
    document.title = "Artifact Learning — Archived Phase 1 Concepts";
  }, []);

  return (
    <div className="concept-index">
      <p className="concept-index__banner">
        Archived Phase 1 exploration — superseded by the consolidated homepage at{" "}
        <Link to="/">artifactlearning.com</Link>
      </p>
      <div className="concept-index__inner">
        <h1>Artifact Learning — archived homepage concepts</h1>
        <p className="concept-index__intro">
          The three exploratory homepage directions built for the Phase 1 design review. They have
          been superseded by the consolidated homepage at <Link to="/">/</Link>, built against{" "}
          <em>Artifact Learning Brand Identity &amp; Digital Design Language v0.2</em>. Kept here for
          reference only — colour and typography shown in these three prototypes were exploratory
          and are not the current brand system. See{" "}
          <code>docs/consolidation-decision.md</code> for what was kept, adapted, removed or added
          from each.
        </p>
        <div className="concept-index__grid">
          {concepts.map((concept) => (
            <Link className="concept-index__card" to={concept.path} key={concept.path}>
              <p className="kicker">{concept.label}</p>
              <h2>{concept.name}</h2>
              <p>{concept.description}</p>
            </Link>
          ))}
        </div>
        <p className="concept-index__docs">
          Supporting documents: <code>docs/strategy.md</code> (Phase 1A working strategy),{" "}
          <code>docs/wireframes/</code> (mid-fidelity wireframes) and{" "}
          <code>docs/consolidation-decision.md</code> (Phase 2 Keep/Adapt/Remove/New record).
        </p>
      </div>
    </div>
  );
}
