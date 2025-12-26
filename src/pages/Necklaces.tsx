import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';
import './Page.css';
import './Necklaces.css';

interface Necklace {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  gender: 'men' | 'women';
}

const Necklaces = () => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>('all');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (necklace: Necklace) => {
    addToCart(necklace);
    navigate('/checkout');
  };

  const necklaces: Necklace[] = [
    {
      id: 1,
      name: 'Diamond Pendant Necklace',
      price: '$3,499',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 2,
      name: 'Pearl Strand Necklace',
      price: '$2,199',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop',
      category: 'Classic',
      gender: 'women'
    },
    {
      id: 3,
      name: 'Gold Chain Necklace',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 4,
      name: 'Emerald Drop Necklace',
      price: '$4,299',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=800&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 5,
      name: 'Tennis Diamond Necklace',
      price: '$5,999',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 6,
      name: 'Silver Choker Necklace',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop',
      category: 'Modern',
      gender: 'women'
    },
    {
      id: 7,
      name: 'Rose Gold Lariat',
      price: '$2,599',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 8,
      name: 'Platinum Chain',
      price: '$3,899',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=800&fit=crop',
      category: 'Classic',
      gender: 'men'
    },
    {
      id: 9,
      name: 'Sapphire Statement Necklace',
      price: '$4,799',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 10,
      name: 'Minimalist Gold Necklace',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop',
      category: 'Modern',
      gender: 'women'
    },
    {
      id: 11,
      name: 'Vintage Cameo Necklace',
      price: '$2,899',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop',
      category: 'Vintage',
      gender: 'women'
    },
    {
      id: 12,
      name: 'Titanium Chain Necklace',
      price: '$1,199',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=800&fit=crop',
      category: 'Modern',
      gender: 'men'
    }
  ];

  const filteredNecklaces = selectedGender === 'all' 
    ? necklaces 
    : necklaces.filter(necklace => necklace.gender === selectedGender);

  return (
    <div className="necklaces-page">
      <div className="necklaces-filter">
        <button
          className={`filter-btn ${selectedGender === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedGender('all')}
        >
          All Necklaces
        </button>
        <button
          className={`filter-btn ${selectedGender === 'women' ? 'active' : ''}`}
          onClick={() => setSelectedGender('women')}
        >
          Women's Necklaces
        </button>
        <button
          className={`filter-btn ${selectedGender === 'men' ? 'active' : ''}`}
          onClick={() => setSelectedGender('men')}
        >
          Men's Necklaces
        </button>
      </div>
      
      <div className="necklaces-grid">
        {filteredNecklaces.map((necklace) => (
          <div key={necklace.id} className="necklace-card">
            <div className="necklace-image-container">
              <WishlistButton item={necklace} />
              <img src={necklace.image} alt={necklace.name} className="necklace-image" />
              <div className="necklace-overlay">
                <div className="necklace-actions">
                  <AddToCartButton item={necklace} />
                  <button className="buy-now-btn" onClick={() => handleBuyNow(necklace)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="necklace-info">
              <span className="necklace-category">{necklace.category}</span>
              <h3 className="necklace-name">{necklace.name}</h3>
              <p className="necklace-price">{necklace.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Necklaces;

