import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ConceptIndex.css";

const concepts = [
  {
    path: "/concept-a",
    label: "Concept A",
    name: "Editorial Product Studio",
    description:
      "Quiet authority. Disciplined typography, restrained interaction, generous whitespace, editorial pacing. Near-monochrome with a single muted accent.",
  },
  {
    path: "/concept-b",
    label: "Concept B",
    name: "Digital Learning Laboratory",
    description:
      "Instrumentation made visible. Dark graphite surface, a persistent animated systems loop, and the fullest — still honest — view of the Artifact ecosystem.",
  },
  {
    path: "/concept-c",
    label: "Concept C",
    name: "Editorial + Experimental Hybrid",
    description:
      "Concept A's editorial backbone with exactly one contained systems moment borrowed from B, testing whether a single bounded device earns its place.",
  },
];

export function ConceptIndex() {
  useEffect(() => {
    document.title = "Artifact Learning — Concept Review Index";
  }, []);

  return (
    <div className="concept-index">
      <p className="concept-index__banner">
        Internal review build — not the public Artifact Learning website
      </p>
      <div className="concept-index__inner">
        <h1>Artifact Learning — homepage concepts</h1>
        <p className="concept-index__intro">
          Three genuinely different homepage directions for Artifact Learning, built for design
          review. Same underlying proposition throughout — variation is in composition, visual
          language, interaction model and personality, not in the claims being made. Colour and
          typography choices shown here are exploratory, not final brand decisions.
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
          Supporting documents: <code>docs/strategy.md</code> (Phase 1A working strategy) and{" "}
          <code>docs/wireframes/</code> (mid-fidelity wireframes for each direction).
        </p>
      </div>
    </div>
  );
}
