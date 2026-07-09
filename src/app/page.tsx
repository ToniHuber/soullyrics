import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { AboutSection } from "@/components/AboutSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { RequestFormSection } from "@/components/RequestFormSection";
import { ContactSection } from "@/components/ContactSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

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
        <TestimonialsSection />
        <FAQSection />
        <RequestFormSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
