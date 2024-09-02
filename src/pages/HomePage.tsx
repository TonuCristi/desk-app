import AboutSection from "../components/home/AboutSection";
import ExploreSection from "../components/home/ExploreSection";
import HeroSection from "../components/home/HeroSection";
import StatisticsSection from "../components/home/StatisticsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <ExploreSection />
      <div>aaaa</div>
    </div>
  );
}
