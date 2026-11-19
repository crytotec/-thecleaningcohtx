import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar, Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { CtaSection } from "@/components/sections/cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { ServiceAreas } from "@/components/sections/service-areas";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <WhyChooseUs />
        <GallerySection />
        <TestimonialsSection />
        <ServiceAreas />
        <QuoteSection />
        <CtaSection />
      </main>
      <div className="bg-grey-900 pb-20 lg:pb-0">
        <Footer />
      </div>
      <MobileActionBar />
    </>
  );
}