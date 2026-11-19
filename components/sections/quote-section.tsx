import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/sections/quote-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { site } from "@/lib/site";

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
        <Icon aria-hidden="true" className="size-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-grey-500">{label}</p>
        <div className="mt-1 text-base font-semibold text-ink">{children}</div>
      </div>
    </li>
  );
}

export function QuoteSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact Us"
            title="Request Your Free Quote"
            description="Tell us about your home and the cleaning you need. Prefer to talk? Call or email us directly."
          />

          <ul className="mt-12 flex flex-col gap-7">
            <ContactItem icon={Phone} label="Phone">
              <a href={site.phoneHref} className="hover:text-brand-700">
                {site.phone}
              </a>
            </ContactItem>
            <ContactItem icon={Mail} label="Email">
              <a href={site.emailHref} className="break-all hover:text-brand-700">
                {site.email}
              </a>
            </ContactItem>
            <ContactItem icon={MapPin} label="Service Areas">
              <span>Houston, Katy and nearby surrounding areas, Texas</span>
            </ContactItem>
            <ContactItem icon={CalendarCheck} label="Availability">
              <span>Same-day appointments available</span>
            </ContactItem>
          </ul>

          <div className="mt-10">
            <p className="text-sm font-semibold text-grey-500">Follow us</p>
            <div className="mt-3 flex gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-full border border-grey-300 text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (opens in a new tab)"
                className="inline-flex size-11 items-center justify-center rounded-full border border-grey-300 text-ink transition-colors hover:border-brand-600 hover:text-brand-700"
              >
                <InstagramIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}