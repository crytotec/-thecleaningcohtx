import {
  CalendarDays,
  Clock,
  House,
  MapPin,
  Star,
  type LucideIcon,
} from "lucide-react";
import { googleReviews } from "@/lib/site";

const highlights: { icon: LucideIcon; text: string }[] = [
  { icon: CalendarDays, text: "Established in 2020" },
  { icon: MapPin, text: "Houston & Katy, Texas" },
  { icon: House, text: "Residential Specialists" },
  { icon: Clock, text: "Same-Day Appointments" },
];

export function TrustIndicators() {
  return (
    <section aria-label="Company highlights" className="border-b border-grey-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4 lg:py-12">
          {highlights.map((item) => (
            <li key={item.text} className="flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                <item.icon aria-hidden="true" className="size-5" />
              </span>
              <span className="text-sm font-semibold leading-snug text-ink sm:text-base">
                {item.text}
              </span>
            </li>
          ))}
        </ul>

        {googleReviews ? (
          <p className="flex items-center gap-2 border-t border-grey-200 py-5 text-sm text-grey-600">
            <Star aria-hidden="true" className="size-4 fill-brand-600 text-brand-600" />
            Google rating {googleReviews.rating.toFixed(1)} from {googleReviews.count} reviews
          </p>
        ) : null}
      </div>
    </section>
  );
}