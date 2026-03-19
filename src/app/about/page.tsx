import AboutHeroSection from "@/components/AboutHeroSection";
import AboutSection from "@/components/AboutSection";
import AboutVisionMission from "@/components/AboutVisionMission";
import AboutClimateSection from "@/components/AboutClimateSection";
import AboutEffectsSection from "@/components/AboutEffectsSection";
import AboutKeyIssues from "@/components/AboutKeyIssues";
import AboutTeamSection from "@/components/AboutTeamSection";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us — GreenHorizon",
  description: "Green Begins With One is a climate awareness platform built on the belief that real change starts with one person, one habit, one decision.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutSection />
      <AboutVisionMission />
      <AboutClimateSection />
      <AboutEffectsSection />
      <AboutKeyIssues />
      <AboutTeamSection />
      <AboutCTA />
      <Footer />
    </main>
  );
}
