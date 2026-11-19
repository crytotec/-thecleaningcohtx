import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function AnnouncementBar() {
  return (
    <div className="bg-brand-600 text-white">
      <div className="mx-auto flex min-h-11 max-w-7xl items-center justify-center gap-4 px-5 py-2 text-center text-sm font-medium sm:px-8">
        <p>
          <span aria-hidden="true">✨</span> Same-Day Cleaning Appointments
          Available!
        </p>
        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 font-semibold underline-offset-4 hover:underline md:inline-flex"
        >
          <Phone aria-hidden="true" className="size-4" />
          {site.phone}
        </a>
      </div>
    </div>
  );
}