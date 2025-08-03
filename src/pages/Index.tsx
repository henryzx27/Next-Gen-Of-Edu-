import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import TechSection from "@/components/TechSection";
import CreatorSection from "@/components/CreatorSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <OverviewSection />
      <FeaturesSection />
      <ComparisonSection />
      <TechSection />
      <CreatorSection />
      <FooterSection />
    </div>
  );
};

export default Index;
