import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Request Your Quote",
    text: "Tell us about your home and the cleaning you need, using the form below or by phone.",
  },
  {
    title: "Confirm Your Appointment",
    text: "We confirm a date that works for your schedule. Same-day appointments are available.",
  },
  {
    title: "Professional Cleaning",
    text: "Our team arrives ready to clean with attention to detail, professionalism and care.",
  },
  {
    title: "Enjoy Your Fresh Home",
    text: "Come home to a clean, comfortable space, ready for everyday living or your next guests.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="process-title"
      className="bg-grey-900 py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            id="process-title"
            tone="dark"
            eyebrow="How It Works"
            title="Simple Steps to a Spotless Home."
          />
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t border-grey-700 pt-6">
              <Reveal delay={index * 100}>
                <span className="font-display text-4xl text-brand-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey-300">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}