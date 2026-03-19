import HeroSection from "@/components/HeroSection";
import StandForSection from "@/components/StandForSection";
import StatsSection from "@/components/StatsSection";
import KeyIssuesSection from "@/components/KeyIssuesSection";
import CommunitySection from "@/components/CommunitySection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StandForSection />
      <StatsSection />
      <KeyIssuesSection />
      <CommunitySection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
