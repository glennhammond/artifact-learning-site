import { Route, Routes } from "react-router-dom";
import { ConceptIndex } from "./routes/ConceptIndex";
import { ConceptA } from "./concepts/a/ConceptA";
import { ConceptB } from "./concepts/b/ConceptB";
import { ConceptC } from "./concepts/c/ConceptC";
import { NotFound } from "./routes/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ConceptIndex />} />
      <Route path="/concept-a" element={<ConceptA />} />
      <Route path="/concept-b" element={<ConceptB />} />
      <Route path="/concept-c" element={<ConceptC />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
