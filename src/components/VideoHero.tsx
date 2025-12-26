import { useState } from 'react';
import './VideoHero.css';

const VideoHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="video-hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="video-container">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop"
        >
          <source 
            src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        
        <div className={`video-overlay ${isHovered ? 'hovered' : ''}`}>
          <div className="video-content">
            <h1 className="video-title">Exquisite Jewellery Collection</h1>
            <p className="video-subtitle">Discover timeless elegance and unparalleled craftsmanship</p>
            <div className="video-buttons">
              <button className="video-btn primary">Explore Collection</button>
              <button className="video-btn secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;

