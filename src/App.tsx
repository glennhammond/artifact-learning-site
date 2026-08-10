import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { ArchiveIndex } from "./routes/ArchiveIndex";
import { ConceptA } from "./concepts/a/ConceptA";
import { ConceptB } from "./concepts/b/ConceptB";
import { ConceptC } from "./concepts/c/ConceptC";
import { NotFound } from "./routes/NotFound";
import { AboutPage } from "./site/pages/AboutPage";
import { ApproachPage } from "./site/pages/ApproachPage";
import { ContactPage } from "./site/pages/ContactPage";
import { PlatformPage } from "./site/pages/PlatformPage";
import { ServicesPage } from "./site/pages/ServicesPage";
import { WorkDetailPage } from "./site/pages/WorkDetailPage";
import { WorkPage } from "./site/pages/WorkPage";
import "./site/site.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<WorkDetailPage />} />
      <Route path="/approach" element={<ApproachPage />} />
      <Route path="/platform" element={<PlatformPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/archive" element={<ArchiveIndex />} />
      <Route path="/archive/concept-a" element={<ConceptA />} />
      <Route path="/archive/concept-b" element={<ConceptB />} />
      <Route path="/archive/concept-c" element={<ConceptC />} />
      {/* Old Phase 1 top-level paths — redirect to their new /archive location rather than 404 */}
      <Route path="/concept-a" element={<Navigate to="/archive/concept-a" replace />} />
      <Route path="/concept-b" element={<Navigate to="/archive/concept-b" replace />} />
      <Route path="/concept-c" element={<Navigate to="/archive/concept-c" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
