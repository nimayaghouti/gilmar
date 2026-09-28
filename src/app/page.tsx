import AboutUs from '@/components/sections/AboutUs';
import HeroSection from '@/components/sections/HeroSection';
import Residence from '@/components/sections/Residence';
import Rules from '@/components/sections/Rules';
import Services from '@/components/sections/Services';
import VideoTour from '@/components/sections/VideoTour';

export default function Home() {
  return (
    <main style={{ backgroundColor: '#f5f8fa', overflowX: 'hidden' }}>
      <HeroSection />
      <AboutUs />
      <Rules />
      <Services />
      <Residence />
      <VideoTour />
    </main>
  );
}
