import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Radiating lines above diamond */}
          <path d="M12 2L12 0" />
          <path d="M12 2L10 0" />
          <path d="M12 2L14 0" />
          <path d="M8 3L6 1" />
          <path d="M16 3L18 1" />
          {/* Diamond shape */}
          <path d="M12 3L15.09 9.26L22 10.27L17 15.14L18.18 22.02L12 18.77L5.82 22.02L7 15.14L2 10.27L8.91 9.26L12 3Z" />
        </svg>
      ),
      title: 'BIS Hallmarked Gold',
      description: '100% certified 18K & 22K gold with hallmark authenticity.'
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Delivery truck body */}
          <rect x="2" y="8" width="16" height="10" rx="1" />
          <rect x="2" y="8" width="8" height="6" />
          {/* Wheels */}
          <circle cx="6" cy="20" r="2.5" />
          <circle cx="18" cy="20" r="2.5" />
          {/* Speed lines */}
          <path d="M0 12L-1 11" />
          <path d="M0 10L-1 9" />
          <path d="M24 12L25 11" />
          <path d="M24 10L25 9" />
        </svg>
      ),
      title: '925 Sterling Silver',
      description: 'Premium-grade 92.5% pure silver with anti-tarnish coating.'
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Credit card */}
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M2 12H22" />
          {/* Shield on card */}
          <path d="M12 15C12 15 9.5 13.5 9.5 11.5C9.5 10.5 10.5 9.5 12 9.5C13.5 9.5 14.5 10.5 14.5 11.5C14.5 13.5 12 15 12 15Z" />
          {/* Checkmark in shield */}
          <path d="M10.5 11.5L11.5 12.5L13.5 10.5" />
          {/* Speed lines */}
          <path d="M2 6L1 5" />
          <path d="M2 4L1 3" />
          <path d="M22 6L23 5" />
          <path d="M22 4L23 3" />
        </svg>
      ),
      title: 'Free & Fast Shipping',
      description: 'Fast doorstep delivery with free shipping on all orders.'
    },
    {
      id: 4,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Circular arrows */}
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" />
          <path d="M12 6V2L8 6L12 10" />
          <path d="M12 18V22L16 18L12 14" />
        </svg>
      ),
      title: 'Easy Returns & Exchange',
      description: 'Hassle-free 7-day return and exchange support.'
    }
  ];

  return (
    <div className="why-choose-us">
      <div className="why-choose-us-header">
        <h2 className="why-choose-us-title">Why Choose Us</h2>
      </div>
      <div className="why-choose-us-features">
        {features.map((feature) => (
          <div key={feature.id} className="why-choose-us-card">
            <div className="why-choose-us-icon">{feature.icon}</div>
            <h3 className="why-choose-us-card-title">{feature.title}</h3>
            <p className="why-choose-us-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="why-choose-us-button-container">
        <span className="why-choose-us-button">Button label</span>
      </div>
    </div>
  );
};

export default WhyChooseUs;

