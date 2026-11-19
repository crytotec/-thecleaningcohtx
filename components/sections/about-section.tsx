import { Check, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const points = [
  "Careful attention to detail in every room",
  "Professional, respectful service in your home",
  "Residential cleaning across Houston, Katy and nearby communities",
];

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Photo
            src={images.about.src}
            alt={images.about.alt}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/5] rounded-3xl lg:aspect-[5/6]"
          />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            id="about-title"
            eyebrow="About Us"
            title="More Than Cleaning. We Bring Comfort Back Home."
          />

          <div className="mt-6 space-y-5 text-base leading-relaxed text-grey-600 sm:text-lg">
            <p>
              At The Cleaning Company HTX LLC, we believe a clean home creates a more
              comfortable and welcoming environment.
            </p>
            <p>
              We are committed to providing quality residential cleaning services throughout
              Houston, Katy and surrounding communities, with attention to detail,
              professionalism and care.
            </p>
          </div>

          <ul className="mt-8 flex flex-col gap-4">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-base font-medium text-ink">
                <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-600" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact">Request a Free Quote</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary" icon={Phone}>
              Call Now
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}