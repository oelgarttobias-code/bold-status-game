import HeroSection from "@/components/landing/HeroSection";
import AboutBoldieSection from "@/components/landing/AboutBoldieSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AtmosphereSection from "@/components/landing/AtmosphereSection";
import WhyMenSection from "@/components/landing/WhyMenSection";
import CTASection from "@/components/landing/CTASection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <LanguageSwitcher />
      <HeroSection />
      <AboutBoldieSection />
      <HowItWorksSection />
      <AtmosphereSection />
      <WhyMenSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
