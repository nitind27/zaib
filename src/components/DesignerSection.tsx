import { Link } from 'react-router-dom';
import './DesignerSection.css';

const DesignerSection = () => {
  const designers = [
    {
      id: 1,
      name: 'Jess Ruby James',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
      description: 'Exquisite Diamond Collections',
      accent: '#D4AF37'
    },
    {
      id: 2,
      name: 'Prue & Honey',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=800&fit=crop',
      description: 'Elegant Gemstone Designs',
      accent: '#D4AF37'
    },
    {
      id: 3,
      name: 'Morgan Shimeld',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop',
      description: 'Luxury Pearl & Diamond',
      accent: '#D4AF37'
    }
  ];

  return (
    <div className="designer-section">
      <div className="designer-section-header">
        <h2 className="designer-section-title">Crafted by Visionaries</h2>
      </div>
      <div className="designer-panels">
        {designers.map((designer, index) => (
          <div 
            key={designer.id} 
            className="designer-panel"
            style={{ 
              '--accent-color': designer.accent
            } as React.CSSProperties}
          >
            <div className="designer-header">
              <div className="designer-number">0{index + 1}</div>
              <h3 className="designer-name">{designer.name}</h3>
              <div className="designer-accent-line-top"></div>
            </div>
            <div className="designer-image-container">
              <div className="designer-image-wrapper">
                <img 
                  src={designer.image} 
                  alt={designer.name}
                  className="designer-image"
                />
                <div className="designer-image-glow"></div>
              </div>
            </div>
            <div className="designer-box">
              <p className="designer-description">{designer.description}</p>
              <div className="designer-accent-line"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="all-collections-btn-container">
        <Link 
          to="/collections" 
          className="all-collections-btn"
        >
          <span>All Collections</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default DesignerSection;
