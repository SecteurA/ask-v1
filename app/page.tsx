import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import SolutionsSection from '@/components/SolutionsSection';
import ContactBanner from '@/components/ContactBanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <SolutionsSection />
      <ContactBanner />
    </div>
  );
}