export type NavLink = {
  label: string;
  href: string;
};

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export type GoogleReviews = {
  rating: number;
  count: number;
};

export const site = {
  name: "The Cleaning Company HTX LLC",
  shortName: "The Cleaning Company HTX",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phone: "+1 832-289-8920",
  phoneHref: "tel:+18322898920",
  email: "thecleaningco.94@gmail.com",
  emailHref: "mailto:thecleaningco.94@gmail.com",
  zip: "77043",
  established: 2020,
  instagram: "https://www.instagram.com/thecleaningcohtx/",
  facebook: "https://web.facebook.com/Thecleaningcompany1994/",
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export const serviceOptions: string[] = [
  "Deep Cleaning",
  "Recurring Cleaning",
  "Move-In/Move-Out Cleaning",
  "Airbnb Cleaning",
  "Not sure yet",
];

// Leave empty until you have genuine, permissioned reviews.
export const testimonials: Testimonial[] = [];

// Set to { rating: 5, count: 36 } only after the Google Business rating is independently verified.
export const googleReviews: GoogleReviews | null = null;