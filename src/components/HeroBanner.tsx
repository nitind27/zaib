import { Link } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-banner-content">
        <div className="hero-banner-box">
          <h2 className="hero-banner-heading">Discover Our Exclusive Collection</h2>
          <p className="hero-banner-text">Experience luxury and elegance with our handcrafted jewelry pieces</p>
          <Link to="/collections" className="hero-banner-button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

