import AboutUs from '@/components/sections/AboutUs';
import Blogs from '@/components/sections/Blogs';
import Faq from '@/components/sections/Faq';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Packages from '@/components/sections/Packages';
import Residence from '@/components/sections/Residence';
import Rules from '@/components/sections/Rules';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
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
      <Testimonials />
      <Packages />
      <Blogs />
      <Faq />
      <Footer />
    </main>
  );
}
