import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';
import './Bracelets.css';

interface Bracelet {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  gender: 'men' | 'women';
}

const Bracelets = () => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>('all');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (bracelet: Bracelet) => {
    addToCart(bracelet);
    navigate('/checkout');
  };

  const bracelets: Bracelet[] = [
    {
      id: 1,
      name: 'Diamond Tennis Bracelet',
      price: '$4,999',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 2,
      name: 'Gold Chain Bracelet',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 3,
      name: 'Pearl Strand Bracelet',
      price: '$2,299',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 4,
      name: 'Silver Bangle Bracelet',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'women'
    },
    {
      id: 5,
      name: 'Platinum Link Bracelet',
      price: '$3,499',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 6,
      name: 'Rose Gold Cuff Bracelet',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 7,
      name: 'Emerald Bead Bracelet',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 8,
      name: 'Titanium Sport Bracelet',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'men'
    },
    {
      id: 9,
      name: 'Sapphire Charm Bracelet',
      price: '$3,299',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 10,
      name: 'Minimalist Gold Bracelet',
      price: '$1,199',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'women'
    },
    {
      id: 11,
      name: 'Vintage Charm Bracelet',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Vintage',
      gender: 'women'
    },
    {
      id: 12,
      name: 'White Gold Bangle',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'women'
    }
  ];

  const filteredBracelets = selectedGender === 'all' 
    ? bracelets 
    : bracelets.filter(bracelet => bracelet.gender === selectedGender);

  return (
    <div className="bracelets-page">
      <div className="bracelets-filter">
        <button
          className={`filter-btn ${selectedGender === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedGender('all')}
        >
          All Bracelets
        </button>
        <button
          className={`filter-btn ${selectedGender === 'women' ? 'active' : ''}`}
          onClick={() => setSelectedGender('women')}
        >
          Women's Bracelets
        </button>
        <button
          className={`filter-btn ${selectedGender === 'men' ? 'active' : ''}`}
          onClick={() => setSelectedGender('men')}
        >
          Men's Bracelets
        </button>
      </div>
      
      <div className="bracelets-grid">
        {filteredBracelets.map((bracelet) => (
          <div key={bracelet.id} className="bracelet-card">
            <div className="bracelet-image-container">
              <WishlistButton item={bracelet} />
              <img src={bracelet.image} alt={bracelet.name} className="bracelet-image" />
              <div className="bracelet-overlay">
                <div className="bracelet-actions">
                  <AddToCartButton item={bracelet} />
                  <button className="buy-now-btn" onClick={() => handleBuyNow(bracelet)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bracelet-info">
              <span className="bracelet-category">{bracelet.category}</span>
              <h3 className="bracelet-name">{bracelet.name}</h3>
              <p className="bracelet-price">{bracelet.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bracelets;

