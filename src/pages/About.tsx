import './Page.css';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Master Jeweler',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      description: '30+ years of experience in crafting exquisite jewelry pieces.'
    },
    {
      id: 2,
      name: 'James Anderson',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      description: 'Creative visionary bringing timeless designs to life.'
    },
    {
      id: 3,
      name: 'Emily Chen',
      role: 'Gemologist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      description: 'Expert in gemstone selection and quality assurance.'
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      role: 'Sales Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      description: 'Dedicated to helping you find the perfect piece.'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Crafting Timeless Elegance Since 1985</p>
      </div>

      {/* Image and Text Section */}
      <div className="about-image-text-section">
        <div className="about-image-text-container">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop" 
              alt="Jewelry Craftsmanship" 
              className="about-main-image"
            />
          </div>
          <div className="about-text-content">
            <h2 className="about-section-title">Our Story</h2>
            <p className="about-main-text">
              Founded with a passion for exquisite craftsmanship and timeless design, our jewelry house has been creating beautiful pieces that celebrate life's most precious moments for over three decades.
            </p>
            <p className="about-main-text">
              Each piece in our collection is meticulously handcrafted by skilled artisans who bring decades of experience and an unwavering commitment to excellence. We source only the finest materials, including ethically sourced diamonds and precious metals, ensuring that every creation meets our exacting standards of quality and beauty.
            </p>
            <div className="about-features">
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h3>Master Craftsmanship</h3>
                  <p>30+ years of experience</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h3>Ethical Sourcing</h3>
                  <p>Certified suppliers</p>
                </div>
              </div>
              <div className="about-feature-item">
                <div className="about-feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3z"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3z"></path>
                  </svg>
                </div>
                <div className="about-feature-text">
                  <h3>Lifetime Warranty</h3>
                  <p>Comprehensive coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="mission-values-section">
        <div className="mission-values-container">
          <h2 className="section-title">Our Mission & Values</h2>
          <div className="mission-values-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To create exceptional jewelry that combines traditional craftsmanship with contemporary design, ensuring every piece tells a unique story of elegance and sophistication.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>We are committed to excellence, integrity, and sustainability. Every decision we make reflects our dedication to quality, ethical practices, and environmental responsibility.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"></path>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3z"></path>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3z"></path>
                </svg>
              </div>
              <h3>Our Promise</h3>
              <p>We promise to deliver only the finest quality jewelry, backed by our comprehensive warranty and exceptional customer service that exceeds expectations.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Certifications Section */}
      <div className="awards-section">
        <div className="awards-container">
          <h2 className="section-title">Awards & Certifications</h2>
          <p className="section-subtitle">Recognized excellence in jewelry craftsmanship</p>
          <div className="awards-grid">
            <div className="award-card">
              <div className="award-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
              </div>
              <h3>BIS Hallmark Certified</h3>
              <p>100% certified gold and silver</p>
            </div>
            <div className="award-card">
              <div className="award-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
              </div>
              <h3>GIA Certified Diamonds</h3>
              <p>Internationally recognized quality</p>
            </div>
            <div className="award-card">
              <div className="award-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
              </div>
              <h3>Best Jewelry House 2023</h3>
              <p>Industry excellence award</p>
            </div>
            <div className="award-card">
              <div className="award-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
              </div>
              <h3>ISO 9001 Certified</h3>
              <p>Quality management system</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="journey-section">
        <div className="journey-container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Milestones that shaped our legacy</p>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-year">1985</div>
              <div className="timeline-content">
                <h3>Foundation</h3>
                <p>Started as a small family-owned jewelry workshop with a vision to create timeless pieces.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1995</div>
              <div className="timeline-content">
                <h3>Expansion</h3>
                <p>Opened our first retail showroom and expanded our team of master craftsmen.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2005</div>
              <div className="timeline-content">
                <h3>Recognition</h3>
                <p>Received our first industry award for excellence in jewelry design and craftsmanship.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Innovation</h3>
                <p>Launched our online platform, making our collections accessible worldwide.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Excellence</h3>
                <p>Celebrated 38 years of creating beautiful jewelry and serving thousands of satisfied customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Our Showroom Section */}
      <div className="showroom-section">
        <div className="showroom-container">
          <div className="showroom-content">
            <h2 className="section-title">Visit Our Showroom</h2>
            <p className="showroom-text">
              Experience our collection in person at our elegant showroom, where our expert consultants will help you find the perfect piece that speaks to your heart.
            </p>
            <div className="showroom-details">
              <div className="showroom-detail-item">
                <div className="showroom-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="showroom-detail-text">
                  <h4>Location</h4>
                  <p>123 Jewelry Street, City, Country</p>
                </div>
              </div>
              <div className="showroom-detail-item">
                <div className="showroom-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="showroom-detail-text">
                  <h4>Hours</h4>
                  <p>Monday - Saturday, 10 AM - 7 PM</p>
                </div>
              </div>
              <div className="showroom-detail-item">
                <div className="showroom-detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="showroom-detail-text">
                  <h4>Contact</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="showroom-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=600&fit=crop" 
              alt="Jewelry Showroom" 
              className="showroom-image"
            />
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="meet-team-section">
        <div className="meet-team-container">
          <h2 className="team-section-title">Meet Our Team</h2>
          <p className="team-section-subtitle">The talented artisans and experts behind every piece</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="team-image"
                  />
                  <div className="team-overlay"></div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
