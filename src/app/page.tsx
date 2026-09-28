import AboutUs from '@/components/sections/AboutUs';
import HeroSection from '@/components/sections/HeroSection';
import Rules from '@/components/sections/Rules';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#f5f8fa' }}>
      <HeroSection />
      <AboutUs />
      <Rules />
    </main>
  );
}
