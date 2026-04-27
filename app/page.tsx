import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import BrandMessageSection from '@/components/home/BrandMessageSection';
import FeaturedProductSection from '@/components/home/FeaturedProductSection';
import ProductLineupSection from '@/components/home/ProductLineupSection';
import BrandStoryTeaserSection from '@/components/home/BrandStoryTeaserSection';
import ShopLocationsSection from '@/components/home/ShopLocationsSection';
import NewsSection from '@/components/home/NewsSection';
import InstagramFeedSection from '@/components/home/InstagramFeedSection';
import ContactSection from '@/components/home/ContactSection';
import FooterTransitionSection from '@/components/home/FooterTransitionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#FFFFFF' }}>
      <Header />
      <HeroSection />
      <BrandMessageSection />
      <FeaturedProductSection />
      <ProductLineupSection />
      <BrandStoryTeaserSection />
      <ShopLocationsSection />
      <NewsSection />
      <InstagramFeedSection />
      <ContactSection />
      <FooterTransitionSection />
      <Footer />
    </main>
  );
}
