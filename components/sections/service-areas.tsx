import { MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const areas = [
  {
    title: "Houston, Texas",
    text: "Residential cleaning for homes across Houston.",
  },
  {
    title: "Katy, Texas",
    text: "Residential cleaning for homes across Katy.",
  },
  {
    title: "Nearby Surrounding Areas",
    text: "Residential cleaning in the communities around Houston and Katy.",
  },
];

export function ServiceAreas() {
  return (
    <section
      id="service-areas"
      aria-labelledby="areas-title"
      className="bg-grey-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="areas-title"
            eyebrow="Service Areas"
            title="Proudly Serving Houston and Katy."
            description="Professional residential cleaning throughout Houston, Katy and surrounding communities."
          />
        </Reveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {areas.map((area, index) => (
            <li key={area.title} className="border-t border-grey-300 pt-6">
              <Reveal delay={index * 100}>
                <MapPin aria-hidden="true" className="size-6 text-brand-600" />
                <h3 className="mt-4 text-xl font-semibold text-ink">{area.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-grey-600">{area.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <ButtonLink href="#contact">Request a Free Quote</ButtonLink>
        </div>
      </div>
    </section>
  );
}