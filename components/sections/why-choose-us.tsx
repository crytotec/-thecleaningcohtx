import {
  CalendarCheck,
  CalendarClock,
  HeartHandshake,
  Search,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LucideIcon } from "lucide-react";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Search,
    title: "Attention to Detail",
    text: "We focus on the small things that make a home feel truly clean, not just tidy.",
  },
  {
    icon: CalendarCheck,
    title: "Reliable Service",
    text: "Dependable appointments and clear communication, so you know what to expect.",
  },
  {
    icon: Sparkles,
    title: "Quality Cleaning",
    text: "Professional residential cleaning with care for every room in your home.",
  },
  {
    icon: HeartHandshake,
    title: "Customer-Focused Approach",
    text: "We listen to what matters most to you and tailor each clean to your home.",
  },
  {
    icon: CalendarClock,
    title: "Convenient Booking",
    text: "Request a quote online or by phone, with same-day appointments available.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="why-choose-title"
            eyebrow="Why Choose Us"
            title="Why Choose The Cleaning Company HTX?"
          />
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="border-t border-grey-200 pt-7">
              <Reveal delay={index * 80}>
                <reason.icon aria-hidden="true" className="size-7 text-brand-600" />
                <h3 className="mt-5 text-xl font-semibold text-ink">{reason.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-grey-600">{reason.text}</p>
              </Reveal>
            </li>
          ))}

          <li className="flex flex-col justify-between rounded-2xl bg-brand-600 p-8 text-white md:col-span-2 lg:col-span-1">
            <div>
              <h3 className="font-display text-2xl">Ready when you are.</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-50">
                Request your free quote and we will help you plan a clean that fits your home.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="#contact" variant="light">
                Get a Free Quote
              </ButtonLink>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}