import { useEffect } from "react";
import { SkipLink } from "../../components/layout/SkipLink";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { SystemsModule } from "./components/SystemsModule";
import { Work } from "./components/Work";
import { Capability } from "./components/Capability";
import { Approach } from "./components/Approach";
import { ArtifactTech } from "./components/ArtifactTech";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import "./theme.css";
import "./ConceptC.css";

export function ConceptC() {
  useEffect(() => {
    document.title = "Concept C — Editorial + Experimental Hybrid · Artifact Learning";
  }, []);

  return (
    <div className="concept-c">
      <SkipLink />
      <Nav />
      <main id="main">
        <Hero />
        <Problem />
        <SystemsModule />
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
