import AboutSection from "../components/home/AboutSection";
import ExploreSection from "../components/home/ExploreSection";
import HeroSection from "../components/home/HeroSection";
import StatisticsSection from "../components/home/StatisticsSection";

export default function HomePage() {
  return (
    <div className="mb-24 flex flex-col gap-24">
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <ExploreSection />
    </div>
  );
}
