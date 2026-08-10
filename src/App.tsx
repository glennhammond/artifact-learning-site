import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { ArchiveIndex } from "./routes/ArchiveIndex";
import { ConceptA } from "./concepts/a/ConceptA";
import { ConceptB } from "./concepts/b/ConceptB";
import { ConceptC } from "./concepts/c/ConceptC";
import { NotFound } from "./routes/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
