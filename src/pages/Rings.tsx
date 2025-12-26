import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';
import './Page.css';
import './Rings.css';

interface Ring {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  gender: 'men' | 'women';
}

const Rings = () => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>('all');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (ring: Ring) => {
    addToCart(ring);
    navigate('/checkout');
  };

  const rings: Ring[] = [
    {
      id: 1,
      name: 'Classic Diamond Solitaire',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Engagement',
      gender: 'women'
    },
    {
      id: 2,
      name: 'Vintage Gold Band',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 3,
      name: 'Platinum Eternity Ring',
      price: '$3,299',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Wedding',
      gender: 'women'
    },
    {
      id: 4,
      name: 'Rose Gold Halo Ring',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Engagement',
      gender: 'women'
    },
    {
      id: 5,
      name: 'Art Deco Diamond Ring',
      price: '$4,599',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Vintage',
      gender: 'women'
    },
    {
      id: 6,
      name: 'Three Stone Diamond Ring',
      price: '$3,899',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Engagement',
      gender: 'women'
    },
    {
      id: 7,
      name: 'White Gold Band',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 8,
      name: 'Emerald Cut Diamond',
      price: '$5,299',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 9,
      name: 'Pearl and Diamond Ring',
      price: '$2,199',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 10,
      name: 'Tungsten Classic Ring',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 11,
      name: 'Silver Signet Ring',
      price: '$1,199',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 12,
      name: 'Black Titanium Band',
      price: '$1,499',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'men'
    }
  ];

  const filteredRings = selectedGender === 'all' 
    ? rings 
    : rings.filter(ring => ring.gender === selectedGender);

  return (
    <div className="rings-page">
      <div className="rings-filter">
        <button
          className={`filter-btn ${selectedGender === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedGender('all')}
        >
          All Rings
        </button>
        <button
          className={`filter-btn ${selectedGender === 'women' ? 'active' : ''}`}
          onClick={() => setSelectedGender('women')}
        >
          Women's Rings
        </button>
        <button
          className={`filter-btn ${selectedGender === 'men' ? 'active' : ''}`}
          onClick={() => setSelectedGender('men')}
        >
          Men's Rings
        </button>
      </div>
      
      <div className="rings-grid">
        {filteredRings.map((ring) => (
          <div key={ring.id} className="ring-card">
            <div className="ring-image-container">
              <WishlistButton item={ring} />
              <img src={ring.image} alt={ring.name} className="ring-image" />
              <div className="ring-overlay">
                <div className="ring-actions">
                  <AddToCartButton item={ring} />
                  <button className="buy-now-btn" onClick={() => handleBuyNow(ring)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="ring-info">
              <span className="ring-category">{ring.category}</span>
              <h3 className="ring-name">{ring.name}</h3>
              <p className="ring-price">{ring.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rings;

