import { Section } from "../../design-system/Section";
import { ServiceFeature, ServiceList } from "../../design-system/ServiceFeature";
import { primaryService, secondaryServices, servicesIntro } from "../../content/shared";

export function Services() {
  return (
    <Section id="services" kicker={servicesIntro.eyebrow} heading={servicesIntro.headline} intro={servicesIntro.intro}>
      <ServiceFeature service={primaryService} />
      <ServiceList services={secondaryServices} />
    </Section>
  );
}
