import { useNavigate } from 'react-router-dom';
import WishlistButton from '../components/WishlistButton';
import AddToCartButton from '../components/AddToCartButton';
import { useCart } from '../context/CartContext';
import './Page.css';
import './Earrings.css';

interface Earring {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  gender: 'men' | 'women';
}

const Earrings = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = (earring: Earring) => {
    addToCart(earring);
    navigate('/checkout');
  };

  const earrings: Earring[] = [
    {
      id: 1,
      name: 'Diamond Stud Earrings',
      price: '$2,299',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'women'
    },
    {
      id: 2,
      name: 'Pearl Drop Earrings',
      price: '$1,599',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 3,
      name: 'Gold Hoop Earrings',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'women'
    },
    {
      id: 4,
      name: 'Emerald Chandelier Earrings',
      price: '$3,899',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 5,
      name: 'Sapphire Cluster Earrings',
      price: '$4,299',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 6,
      name: 'Silver Geometric Earrings',
      price: '$699',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'women'
    },
    {
      id: 7,
      name: 'Rose Gold Dangle Earrings',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Elegant',
      gender: 'women'
    },
    {
      id: 8,
      name: 'Platinum Stud Earrings',
      price: '$2,899',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Classic',
      gender: 'women'
    },
    {
      id: 9,
      name: 'Vintage Art Deco Earrings',
      price: '$3,499',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop',
      category: 'Vintage',
      gender: 'women'
    },
    {
      id: 10,
      name: 'Minimalist Gold Earrings',
      price: '$799',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'women'
    },
    {
      id: 11,
      name: 'Diamond Halo Earrings',
      price: '$2,799',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop',
      category: 'Luxury',
      gender: 'women'
    },
    {
      id: 12,
      name: 'Titanium Stud Earrings',
      price: '$599',
      image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop',
      category: 'Modern',
      gender: 'men'
    }
  ];

  return (
    <div className="earrings-page">
      <div className="earrings-grid">
        {earrings.map((earring) => (
          <div key={earring.id} className="earring-card">
            <div className="earring-image-container">
              <WishlistButton item={earring} />
              <img src={earring.image} alt={earring.name} className="earring-image" />
              <div className="earring-overlay">
                <div className="earring-actions">
                  <AddToCartButton item={earring} />
                  <button className="buy-now-btn" onClick={() => handleBuyNow(earring)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="earring-info">
              <span className="earring-category">{earring.category}</span>
              <h3 className="earring-name">{earring.name}</h3>
              <p className="earring-price">{earring.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earrings;

