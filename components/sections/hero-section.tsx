import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-grey-900 text-white lg:min-h-[88vh]"
    >
      <Photo
        src={images.hero.src}
        alt={images.hero.alt}
        sizes="100vw"
        priority
        className="absolute inset-0 -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-grey-900/90 via-grey-900/70 to-grey-900/25"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p
            className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold"
            style={{ animationDelay: "0ms" }}
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-brand-300" />
            Same-Day Appointments Available!
          </p>

          <h1
            id="hero-title"
            className="animate-rise mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            <span className="block">A Cleaner Home.</span>
            <span className="block italic text-brand-200">A Brighter Life.</span>
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-grey-100 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            Transforming homes, one clean at a time. Experience professional residential
            cleaning services you can trust across Houston and Katy, Texas.
          </p>

          <div
            className="animate-rise mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "360ms" }}
          >
            <ButtonLink href="#contact">Get a Free Quote</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outline-light" icon={Phone}>
              Call Now
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}