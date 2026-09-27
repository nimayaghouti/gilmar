import AboutUs from '@/components/sections/AboutUs';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#f5f8fa' }}>
      <HeroSection />
      <AboutUs />
    </main>
  );
}
