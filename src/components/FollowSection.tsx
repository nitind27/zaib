import { useState } from 'react';
import './FollowSection.css';

const FollowSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="follow-section">
      {/* Image Section */}
      <div className="follow-image-section">
        <div className="follow-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=800&fit=crop" 
            alt="Follow Us" 
            className="follow-image"
            loading="lazy"
          />
          <div className="follow-overlay"></div>
        </div>
      </div>

      {/* Button Section */}
      <div className="follow-button-section">
        <div className="follow-button-section-wrapper">
          <div className="follow-button-container">
            <button 
              className={`follow-button ${isHovered ? 'hovered' : ''}`}
              onClick={() => window.open('https://instagram.com', '_blank')}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="follow-button-text">Follow Now</span>
              <svg 
                className="follow-button-icon" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowSection;

