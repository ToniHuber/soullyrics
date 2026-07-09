import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { AboutSection } from "@/components/AboutSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { RequestFormSection } from "@/components/RequestFormSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

// TestimonialsSection and NewsletterSection are temporarily hidden per client
// request until real customer reviews / the newsletter service are ready.

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <AboutSection />
        <PricingSection />
        <FAQSection />
        <RequestFormSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
