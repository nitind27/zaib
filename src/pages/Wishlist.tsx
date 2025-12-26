import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const getCategoryRoute = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('ring')) return '/rings';
    if (cat.includes('necklace')) return '/necklaces';
    if (cat.includes('earring')) return '/earrings';
    if (cat.includes('bracelet')) return '/bracelets';
    return '/collections';
  };

  return (
    <div className="wishlist-page">
      <div className="wishlist-container">
        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty">
            <div className="empty-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h2>Your wishlist is empty</h2>
            <p>Start adding items you love to your wishlist</p>
            <Link to="/collections" className="browse-btn">
              Browse Collections
            </Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlistItems.map((item) => (
              <div key={item.id} className="wishlist-card">
                <button
                  className="wishlist-remove-btn"
                  onClick={() => removeFromWishlist(item.id)}
                  aria-label="Remove from wishlist"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <Link to={getCategoryRoute(item.category)} className="wishlist-card-link">
                  <div className="wishlist-image-container">
                    <img src={item.image} alt={item.name} className="wishlist-image" />
                  </div>
                  <div className="wishlist-info">
                    <span className="wishlist-category">{item.category}</span>
                    <h3 className="wishlist-name">{item.name}</h3>
                    <p className="wishlist-price">{item.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

