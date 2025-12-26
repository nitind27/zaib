import { Link } from 'react-router-dom';
import './ProductListSection.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

const ProductListSection = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Vintage Pearl Necklace',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Necklaces'
    },
    {
      id: 2,
      name: 'Art Deco Diamond Bracelet',
      price: '$3,299',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Bracelets'
    },
    {
      id: 3,
      name: 'Rose Gold Drop Earrings',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Earrings'
    },
    {
      id: 4,
      name: 'Platinum Diamond Band',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Rings'
    },
    {
      id: 5,
      name: 'Sapphire Pendant Set',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Pendants'
    },
    {
      id: 6,
      name: 'Emerald Tennis Bracelet',
      price: '$4,299',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Bracelets'
    },
    {
      id: 7,
      name: 'Gold Hoop Earrings',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Earrings'
    },
    {
      id: 8,
      name: 'Diamond Cluster Ring',
      price: '$2,899',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Rings'
    }
  ];

  return (
    <div className="product-list-section">
      <div className="product-list-container">
        <div className="product-list-header">
          <h2 className="product-list-title">Featured Collections</h2>
        </div>
        <div className="product-list-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const placeholderUrl = `https://via.placeholder.com/600x600/F5F1E8/5C4A37?text=${encodeURIComponent(product.name.substring(0, 15))}`;
                    if (target.src !== placeholderUrl) {
                      target.src = placeholderUrl;
                      target.onerror = null; // Prevent infinite loop
                    }
                  }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="product-overlay">
                  <span className="product-category">{product.category}</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="product-list-footer">
          <Link to="/collections" className="view-all-btn">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductListSection;

