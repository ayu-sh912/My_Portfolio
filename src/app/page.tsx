import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import WorkSection from '@/components/sections/work';
import IntroAnimation from "@/components/IntroAnimations";
import LiveStats from "@/components/LiveStats";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <LiveStats />
      <WorkSection />
      <ContactSection />
    </>
  );
}
