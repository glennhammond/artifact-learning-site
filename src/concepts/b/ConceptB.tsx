import { useEffect } from "react";
import { SkipLink } from "../../components/layout/SkipLink";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Model } from "./components/Model";
import { Work } from "./components/Work";
import { Capability } from "./components/Capability";
import { Approach } from "./components/Approach";
import { ArtifactTech } from "./components/ArtifactTech";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import "./theme.css";
import "./ConceptB.css";

export function ConceptB() {
  useEffect(() => {
    document.title = "Concept B: Digital Learning Laboratory · Artifact Learning";
  }, []);

  return (
    <div className="concept-b">
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <Model />
        <Work />
        <Capability />
        <Approach />
        <ArtifactTech />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
