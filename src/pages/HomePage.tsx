import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";
import StatisticsSection from "../components/home/StatisticsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
    </div>
  );
}
