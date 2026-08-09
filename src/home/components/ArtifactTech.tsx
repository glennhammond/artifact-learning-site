import { Section } from "../../design-system/Section";
import { MetadataRow } from "../../design-system/MetadataRow";
import { ecosystem, ecosystemIntro } from "../../content/shared";

export function ArtifactTech() {
  return (
    <Section
      id="artifact-tech"
      kicker="Artifact"
      heading="An emerging technical ecosystem"
      intro={ecosystemIntro}
    >
      <div>
        {ecosystem.map((item, i) => (
          <MetadataRow
            key={item.name}
            index={String(i + 1).padStart(2, "0")}
            name={item.name}
            status={item.status}
            note={item.note}
          />
        ))}
      </div>
    </Section>
  );
}
