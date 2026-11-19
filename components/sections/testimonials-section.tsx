import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { site, testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section
      id="community"
      aria-labelledby="community-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="community-title"
            align="center"
            eyebrow="Community"
            title="Stay Connected With Our Team."
            description="Follow us on Facebook and Instagram."
            className="mx-auto"
          />
        </Reveal>

        {testimonials.length > 0 ? (
          <ul className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <li key={`${item.name}-${item.location}`} className="border-t border-grey-200 pt-6">
                <div className="flex gap-1 text-brand-600">
                  {Array.from({ length: item.rating }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="size-4 fill-brand-600" />
                  ))}
                  <span className="sr-only">{item.rating} out of 5 stars</span>
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-sm text-grey-500">{item.location}</p>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-grey-300 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
          >
            <FacebookIcon className="size-5" />
            Facebook
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-grey-300 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
          >
            <InstagramIcon className="size-5" />
            Instagram
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}