import { useCart } from '../context/CartContext';
import './AddToCartButton.css';

interface AddToCartButtonProps {
  item: {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
  };
  variant?: 'default' | 'buy-now';
}

const AddToCartButton = ({ item, variant = 'default' }: AddToCartButtonProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item);
  };

  if (variant === 'buy-now') {
    return (
      <button className="buy-now-btn" onClick={handleAddToCart}>
        Buy Now
      </button>
    );
  }

  return (
    <button className="add-to-cart-btn" onClick={handleAddToCart}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

