import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProductSection from '@/components/home/FeaturedProductSection';
import ProductLineupSection from '@/components/home/ProductLineupSection';
import BrandStoryTeaserSection from '@/components/home/BrandStoryTeaserSection';
import ShopLocationsSection from '@/components/home/ShopLocationsSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import ContactSection from '@/components/home/ContactSection';
import FooterTransitionSection from '@/components/home/FooterTransitionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Header />
      <HeroSection />
      <FeaturedProductSection />
      <ProductLineupSection />
      <BrandStoryTeaserSection />
      <ShopLocationsSection />
      <InstagramFeedSection />
      <ContactSection />
      <FooterTransitionSection />
      <Footer />
    </main>
  );
}
