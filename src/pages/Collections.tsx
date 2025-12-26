import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';
import './Page.css';
import './Collections.css';

interface CollectionItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: 'engagement' | 'marriage' | 'luxury';
}

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'engagement' | 'marriage' | 'luxury'>('all');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (item: CollectionItem) => {
    addToCart(item);
    navigate('/checkout');
  };

  const collections: CollectionItem[] = [
    {
      id: 1,
      name: 'Classic Diamond Solitaire',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'engagement'
    },
    {
      id: 2,
      name: 'Rose Gold Halo Ring',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'engagement'
    },
    {
      id: 3,
      name: 'Three Stone Diamond Ring',
      price: '$3,899',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'engagement'
    },
    {
      id: 4,
      name: 'Platinum Eternity Ring',
      price: '$3,299',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'marriage'
    },
    {
      id: 5,
      name: 'White Gold Wedding Band',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'marriage'
    },
    {
      id: 6,
      name: 'Classic Gold Wedding Ring',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'marriage'
    },
    {
      id: 7,
      name: 'Emerald Cut Diamond',
      price: '$5,299',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'luxury'
    },
    {
      id: 8,
      name: 'Art Deco Diamond Ring',
      price: '$4,599',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'luxury'
    },
    {
      id: 9,
      name: 'Sapphire Cluster Ring',
      price: '$4,899',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'luxury'
    },
    {
      id: 10,
      name: 'Vintage Diamond Ring',
      price: '$3,999',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'engagement'
    },
    {
      id: 11,
      name: 'Platinum Wedding Set',
      price: '$4,299',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'marriage'
    },
    {
      id: 12,
      name: 'Royal Diamond Collection',
      price: '$6,999',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'luxury'
    }
  ];

  const filteredCollections = selectedCategory === 'all' 
    ? collections 
    : collections.filter(item => item.category === selectedCategory);

  return (
    <div className="collections-page">
      <div className="collections-content">
        <div className="collections-filter">
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Collections
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'engagement' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('engagement')}
          >
            Engagement Rings
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'marriage' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('marriage')}
          >
            Marriage Rings
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'luxury' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('luxury')}
          >
            Luxury Rings
          </button>
        </div>

        <div className="collections-grid">
          {filteredCollections.map((item) => (
            <div key={item.id} className="collection-card">
              <div className="collection-image-container">
                <WishlistButton item={item} />
                <img src={item.image} alt={item.name} className="collection-image" />
                <div className="collection-overlay">
                  <div className="collection-actions">
                    <AddToCartButton item={item} />
                    <button className="buy-now-btn" onClick={() => handleBuyNow(item)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="collection-info">
                <span className="collection-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                <h3 className="collection-name">{item.name}</h3>
                <p className="collection-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

