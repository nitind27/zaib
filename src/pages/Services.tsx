import { useState } from 'react';
import Chatbot from '../components/Chatbot';
import './Page.css';
import './Services.css';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [currentProcessStep, setCurrentProcessStep] = useState<number>(0);
  const [showParagraph, setShowParagraph] = useState<boolean>(false);

  const services = [
    {
      id: 1,
      title: 'Custom Jewelry Design',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
        </svg>
      ),
      description: 'Create unique, one-of-a-kind pieces tailored to your vision and style.',
      details: 'Our master designers work closely with you to bring your dream jewelry to life. From initial sketches to final creation, we ensure every detail reflects your personal style and preferences.',
      features: ['Free consultation', '3D design preview', 'Multiple revision rounds', 'Expert craftsmanship']
    },
    {
      id: 2,
      title: 'Jewelry Repair & Restoration',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      description: 'Professional repair and restoration services to bring your precious pieces back to life.',
      details: 'Our skilled craftsmen specialize in restoring vintage and damaged jewelry. We handle everything from simple resizing to complex restoration work, ensuring your treasured pieces regain their original beauty.',
      features: ['Free evaluation', 'Expert restoration', 'Original design preservation', 'Lifetime guarantee on repairs']
    },
    {
      id: 3,
      title: 'Ring Sizing & Resizing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      description: 'Professional ring sizing services for a perfect, comfortable fit.',
      details: 'Whether you need to resize an engagement ring, wedding band, or any other ring, our expert jewelers ensure a perfect fit while maintaining the integrity and beauty of your piece.',
      features: ['Precise sizing', 'Multiple size adjustments', 'No damage guarantee', 'Quick turnaround']
    },
    {
      id: 4,
      title: 'Stone Setting & Replacement',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      description: 'Expert stone setting and replacement services for all types of gemstones.',
      details: 'Our certified gemologists and setters handle everything from simple stone replacement to complex custom settings. We work with diamonds, precious stones, and semi-precious gems.',
      features: ['GIA certified stones', 'Various setting styles', 'Secure mounting', 'Quality assurance']
    },
    {
      id: 5,
      title: 'Jewelry Cleaning & Polishing',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      description: 'Professional cleaning and polishing to restore your jewelry\'s original luster.',
      details: 'Our ultrasonic cleaning and hand-polishing services remove years of tarnish and buildup, bringing back the brilliant shine of your precious metals and gemstones.',
      features: ['Ultrasonic cleaning', 'Hand polishing', 'Tarnish removal', 'Protective coating']
    },
    {
      id: 6,
      title: 'Appraisal & Certification',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      description: 'Professional jewelry appraisal and certification services for insurance and resale.',
      details: 'Get certified appraisals from our GIA-certified gemologists. Perfect for insurance purposes, estate planning, or resale valuation. All appraisals include detailed documentation and photographs.',
      features: ['GIA certified appraisers', 'Insurance documentation', 'Detailed reports', 'Photographic records']
    }
  ];

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">Expert craftsmanship and personalized care for all your jewelry needs</p>
      </div>

      <div className="services-content">
        {/* Main Services Grid */}
        <div className="services-grid-section">
          <div className="services-container">
            <h2 className="services-section-title">What We Offer</h2>
            <p className="services-section-subtitle">Comprehensive jewelry services tailored to your needs</p>
            <div className="services-grid">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`service-card ${expandedService === service.id ? 'expanded' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => toggleService(service.id)}
                >
                  <div className="service-card-header">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        {service.icon}
                      </div>
                    </div>
                    <div className="service-card-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>
                    </div>
                    <div className="service-expand-icon">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className={expandedService === service.id ? 'rotated' : ''}
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </div>
                  {expandedService === service.id && (
                    <div className="service-card-details">
                      <p className="service-details-text">{service.details}</p>
                      <div className="service-features">
                        <h4 className="service-features-title">Key Features:</h4>
                        <ul className="service-features-list">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="service-feature-item">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="services-process-section">
          <div className="services-process-container">
            <h2 className="services-section-title">Our Process</h2>
            <p className="services-section-subtitle">Click to reveal each step of our process</p>
            <div className="process-steps">
              <div 
                className={`process-step ${currentProcessStep >= 0 ? 'active' : ''} ${currentProcessStep === 0 ? 'current' : ''}`}
                onClick={() => {
                  if (currentProcessStep === 0) {
                    if (!showParagraph) {
                      setShowParagraph(true);
                    } else {
                      setShowParagraph(false);
                      setCurrentProcessStep(1);
                    }
                  }
                }}
              >
                <div className="process-step-number">1</div>
                <div className="process-step-content">
                  <h3>Consultation</h3>
                  {currentProcessStep === 0 && showParagraph && (
                    <p>Schedule a free consultation to discuss your needs and requirements.</p>
                  )}
                </div>
                {currentProcessStep === 0 && !showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click to continue</span>
                  </div>
                )}
                {currentProcessStep === 0 && showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click for next step</span>
                  </div>
                )}
              </div>
              <div 
                className={`process-step ${currentProcessStep >= 1 ? 'active' : ''} ${currentProcessStep === 1 ? 'current' : ''}`}
                onClick={() => {
                  if (currentProcessStep === 1) {
                    if (!showParagraph) {
                      setShowParagraph(true);
                    } else {
                      setShowParagraph(false);
                      setCurrentProcessStep(2);
                    }
                  }
                }}
              >
                <div className="process-step-number">2</div>
                <div className="process-step-content">
                  <h3>Evaluation</h3>
                  {currentProcessStep === 1 && showParagraph && (
                    <p>Our experts evaluate your piece and provide a detailed assessment.</p>
                  )}
                </div>
                {currentProcessStep === 1 && !showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click to continue</span>
                  </div>
                )}
                {currentProcessStep === 1 && showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click for next step</span>
                  </div>
                )}
              </div>
              <div 
                className={`process-step ${currentProcessStep >= 2 ? 'active' : ''} ${currentProcessStep === 2 ? 'current' : ''}`}
                onClick={() => {
                  if (currentProcessStep === 2) {
                    if (!showParagraph) {
                      setShowParagraph(true);
                    } else {
                      setShowParagraph(false);
                      setCurrentProcessStep(3);
                    }
                  }
                }}
              >
                <div className="process-step-number">3</div>
                <div className="process-step-content">
                  <h3>Service</h3>
                  {currentProcessStep === 2 && showParagraph && (
                    <p>We perform the service with precision and care using expert techniques.</p>
                  )}
                </div>
                {currentProcessStep === 2 && !showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click to continue</span>
                  </div>
                )}
                {currentProcessStep === 2 && showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click for next step</span>
                  </div>
                )}
              </div>
              <div 
                className={`process-step ${currentProcessStep >= 3 ? 'active' : ''} ${currentProcessStep === 3 ? 'current' : ''}`}
                onClick={() => {
                  if (currentProcessStep === 3) {
                    if (!showParagraph) {
                      setShowParagraph(true);
                    } else {
                      setShowParagraph(false);
                      setCurrentProcessStep(4);
                    }
                  }
                }}
              >
                <div className="process-step-number">4</div>
                <div className="process-step-content">
                  <h3>Quality Check</h3>
                  {currentProcessStep === 3 && showParagraph && (
                    <p>Every piece undergoes rigorous quality inspection before delivery.</p>
                  )}
                </div>
                {currentProcessStep === 3 && !showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span>Click to continue</span>
                  </div>
                )}
                {currentProcessStep === 3 && showParagraph && (
                  <div className="process-step-indicator">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Process Complete!</span>
                  </div>
                )}
              </div>
            </div>
            {currentProcessStep > 0 && (
              <div className="process-reset">
                <button 
                  className="process-reset-button"
                  onClick={() => {
                    setCurrentProcessStep(0);
                    setShowParagraph(false);
                  }}
                >
                  {currentProcessStep >= 4 ? 'Start Over' : 'Reset Process'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="services-why-section">
          <div className="services-why-container">
            <h2 className="services-section-title">Why Choose Our Services</h2>
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Expert Craftsmen</h3>
                <p>30+ years of combined experience in jewelry craftsmanship</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"></path>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3z"></path>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3z"></path>
                  </svg>
                </div>
                <h3>Quality Guarantee</h3>
                <p>All services backed by our comprehensive quality guarantee</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3>Fast Turnaround</h3>
                <p>Most services completed within 3-7 business days</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3>Fair Pricing</h3>
                <p>Transparent pricing with no hidden fees or surprises</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta-section">
          <div className="services-cta-container">
            <h2 className="services-cta-title">Ready to Get Started?</h2>
            <p className="services-cta-subtitle">Contact us today to schedule a consultation or learn more about our services</p>
            <div className="services-cta-buttons">
              <a href="/contact" className="services-cta-button primary">
                Schedule Consultation
              </a>
              <a href="tel:+15551234567" className="services-cta-button secondary">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default Services;

