import { ArrowRight } from "lucide-react";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/lib/images";

const services = [
  {
    number: "01",
    title: "Deep Cleaning",
    description:
      "A thorough, top-to-bottom clean that reaches the areas regular cleaning often misses. Ideal for a fresh start or a home that needs extra attention.",
    image: images.services.deepCleaning,
  },
  {
    number: "02",
    title: "Recurring Cleaning",
    description:
      "Regular cleaning on a schedule that suits your household, so your home stays consistently fresh between visits.",
    image: images.services.recurringCleaning,
  },
  {
    number: "03",
    title: "Move-In/Move-Out Cleaning",
    description:
      "Thorough cleaning for a home that is changing hands or changing residents, so you start in a fresh, clean space.",
    image: images.services.moveCleaning,
  },
  {
    number: "04",
    title: "Airbnb Cleaning",
    description:
      "Reliable turnover cleaning that leaves guest spaces fresh, tidy and ready for your next stay.",
    image: images.services.airbnbCleaning,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-grey-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Our Services"
            title="Cleaning Services Designed Around Your Home."
            description="From refreshing your living space to preparing for a new beginning, discover cleaning services designed to make your home feel its best."
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-16 lg:gap-24">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;

            return (
              <Reveal key={service.title}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  <Photo
                    src={service.image.src}
                    alt={service.image.alt}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`aspect-[4/3] rounded-2xl ${reversed ? "lg:order-2" : ""}`}
                  />
                  <div className={reversed ? "lg:order-1" : ""}>
                    <p className="font-display text-5xl text-brand-300">{service.number}</p>
                    <h3 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed text-grey-600 sm:text-lg">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="group mt-8 inline-flex min-h-12 items-center gap-2 font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Get a Quote
                      <span className="sr-only"> for {service.title}</span>
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}