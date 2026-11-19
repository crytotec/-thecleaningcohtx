import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { navLinks, site } from "@/lib/site";

const footerServices = [
  "Deep Cleaning",
  "Recurring Cleaning",
  "Move-In/Move-Out Cleaning",
  "Airbnb Cleaning",
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-grey-900 text-grey-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Professional residential cleaning in Houston, Katy and nearby
            surrounding areas, from deep cleanings to recurring and
            move-in/move-out services.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-11 items-center justify-center rounded-full border border-grey-700 transition-colors hover:border-brand-300 hover:text-white"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex size-11 items-center justify-center rounded-full border border-grey-700 transition-colors hover:border-brand-300 hover:text-white"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Explore
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Services
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className="transition-colors hover:text-white">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            Contact
          </h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm">
            <li className="flex gap-3">
              <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <a href={site.phoneHref} className="transition-colors hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <a href={site.emailHref} className="break-all transition-colors hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-300" />
              <span>Houston, Katy and nearby surrounding areas, Texas</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-grey-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© {year} The Cleaning Company HTX LLC. All rights reserved.</p>
          <p>Houston, Texas · ZIP {site.zip}</p>
        </div>
      </div>
    </footer>
  );
}