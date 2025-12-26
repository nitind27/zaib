import ImageSlider from '../components/ImageSlider';
import DesignerSection from '../components/DesignerSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HeroBanner from '../components/HeroBanner';
import ImageSliderSection from '../components/ImageSliderSection';
import NewsletterSection from '../components/NewsletterSection';
import ProductListSection from '../components/ProductListSection';
import Testimonials from '../components/Testimonials';
import FollowSection from '../components/FollowSection';
import './Page.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <ImageSlider />
      <DesignerSection />
      <WhyChooseUs />
      <HeroBanner />
      <NewsletterSection />
      <ImageSliderSection />
      <ProductListSection />
      <Testimonials />
      <FollowSection />
    </div>
  );
};

export default Home;

