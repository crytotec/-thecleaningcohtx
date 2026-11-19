import { Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-title" className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 text-center sm:px-8">
        <h2 id="cta-title" className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Ready for a Spotless Home?
        </h2>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <ButtonLink href="#contact" className="w-full sm:w-auto">
            Book Your Cleaning
          </ButtonLink>
          <ButtonLink
            href={site.phoneHref}
            variant="secondary"
            icon={Phone}
            className="w-full sm:w-auto"
          >
            Call {site.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}