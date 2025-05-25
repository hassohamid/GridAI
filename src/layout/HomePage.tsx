import Navigation from "@/components/HomePage/Navigation";
import HeroSection from "@/components/HomePage/HeroSection";
import FeaturesSection from "@/components/HomePage/FeaturesSection";
import PricingSection from "@/components/HomePage/PricingSection";
import Footer from "@/components/HomePage/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
