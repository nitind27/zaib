import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const location = useLocation();
  const navigate = useNavigate();
  const { wishlistCount } = useWishlist();
  const { cartCount } = useCart();
  
  // Check if user is logged in
  const isLoggedIn = typeof window !== 'undefined' && localStorage.getItem('user') !== null;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
    setIsAccountDropdownOpen(false);
  };

  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  const accountDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target as Node)) {
        setIsAccountDropdownOpen(false);
      }
    };

    if (isAccountDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isAccountDropdownOpen]);

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!signInData.email || !signInData.password) {
      alert('Please fill in all fields');
      return;
    }

    // Simple validation - in real app, this would call an API
    if (signInData.email && signInData.password) {
      const userData = {
        email: signInData.email,
        name: signInData.email.split('@')[0]
      };
      localStorage.setItem('user', JSON.stringify(userData));
      setIsAccountDropdownOpen(false);
      setSignInData({ email: '', password: '' });
      // Reload to update navbar
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      alert('Invalid email or password');
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>Jewellery</Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {/* Mobile Icons - shown inside menu on mobile */}
          <li className="navbar-icons-mobile">
            <Link to="/search" className="navbar-icon" aria-label="Search" onClick={closeMenu}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </Link>
            <Link to="/wishlist" className="navbar-icon wishlist-icon" aria-label="Wishlist" onClick={closeMenu}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
              </svg>
              {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
            </Link>
            <div className="account-dropdown-container" ref={accountDropdownRef}>
              <button 
                className="navbar-icon account-icon" 
                aria-label="Account"
                onClick={toggleAccountDropdown}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              {isAccountDropdownOpen && (
                <div className="account-dropdown">
                  {isLoggedIn ? (
                    <div className="account-dropdown-content">
                      <button 
                        className="account-dropdown-item"
                        onClick={() => {
                          setIsAccountDropdownOpen(false);
                          closeMenu();
                          alert('Profile feature coming soon!');
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>My Profile</span>
                      </button>
                      <div className="account-dropdown-divider"></div>
                      <button 
                        className="account-dropdown-item"
                        onClick={() => {
                          localStorage.removeItem('user');
                          setIsAccountDropdownOpen(false);
                          closeMenu();
                          window.location.reload();
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <div className="account-dropdown-content">
                      <form className="signin-form-dropdown" onSubmit={handleSignInSubmit}>
                        <h3 className="signin-form-title">Sign In</h3>
                        <div className="signin-form-group">
                          <input
                            type="email"
                            name="email"
                            value={signInData.email}
                            onChange={handleSignInChange}
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="signin-form-group">
                          <input
                            type="password"
                            name="password"
                            value={signInData.password}
                            onChange={handleSignInChange}
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="signin-form-options">
                          <label className="remember-me-checkbox">
                            <input type="checkbox" />
                            <span>Remember me</span>
                          </label>
                          <a href="#" className="forgot-password-link">Forgot?</a>
                        </div>
                        <button type="submit" className="signin-submit-btn">
                          Sign In
                        </button>
                        <div className="signin-form-footer">
                          <p>Don't have an account? <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); alert('Sign up feature coming soon!'); }}>Sign Up</a></p>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </div>
            <Link to="/cart" className="navbar-icon cart-icon" aria-label="Shopping Cart" onClick={closeMenu}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li 
            className={`navbar-item has-submenu ${openSubmenu === 'collections' ? 'submenu-open' : ''}`}
            onMouseEnter={() => setOpenSubmenu('collections')}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            <div 
              className="navbar-link submenu-trigger"
            >
              Collections
            </div>
            <div className={`mega-menu ${openSubmenu === 'collections' ? 'active' : ''}`}>
              <div className="mega-menu-content">
                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">Ring Collections</h3>
                  <Link to="/collections?category=marriage" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="mega-menu-link-text">Marriage Ring</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/collections?category=engagement" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
                        </svg>
                        <span className="mega-menu-link-text">Engagement Ring</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/collections?category=party" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span className="mega-menu-link-text">Party Wear Ring</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/collections?category=occasion" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="mega-menu-link-text">Any Occasion Ring</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">Jewelry Categories</h3>
                  <Link to="/rings" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <span className="mega-menu-link-text">Rings</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/necklaces" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="mega-menu-link-text">Necklaces</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/earrings" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span className="mega-menu-link-text">Earrings</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/bracelets" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <path d="M9 3v18"></path>
                          <path d="M15 3v18"></path>
                        </svg>
                        <span className="mega-menu-link-text">Bracelets</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                </div>

                <div className="mega-menu-column">
                  <h3 className="mega-menu-title">Shop by Style</h3>
                  <Link to="/collections?style=classic" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="mega-menu-link-text">Classic</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/collections?style=modern" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span className="mega-menu-link-text">Modern</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/collections?style=vintage" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                          <path d="M2 17l10 5 10-5"></path>
                          <path d="M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="mega-menu-link-text">Vintage</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <Link to="/collections?style=luxury" onClick={closeMenu} className="mega-menu-link">
                    <div className="mega-menu-link-content">
                      <div className="mega-menu-link-left">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                        </svg>
                        <span className="mega-menu-link-text">Luxury</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                  <div className="mega-menu-divider"></div>
                  <Link to="/collections" onClick={closeMenu} className="mega-menu-link view-all">
                    <div className="mega-menu-link-content">
                      <span className="mega-menu-link-text">View All</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link 
              to="/services" 
              className={`navbar-link ${isActive('/services') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
        </ul>

        {/* Right side icons */}
        <div className="navbar-icons">
          <Link to="/search" className="navbar-icon" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </Link>
          <Link to="/wishlist" className="navbar-icon wishlist-icon" aria-label="Wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"></path>
            </svg>
            {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </Link>
          <div className="account-dropdown-container" ref={accountDropdownRef}>
            <button 
              className="navbar-icon account-icon" 
              aria-label="Account"
              onClick={toggleAccountDropdown}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            {isAccountDropdownOpen && (
              <div className="account-dropdown">
                {isLoggedIn ? (
                  <div className="account-dropdown-content">
                    <button 
                      className="account-dropdown-item"
                      onClick={() => {
                        setIsAccountDropdownOpen(false);
                        alert('Profile feature coming soon!');
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span>My Profile</span>
                    </button>
                    <div className="account-dropdown-divider"></div>
                    <button 
                      className="account-dropdown-item"
                      onClick={() => {
                        localStorage.removeItem('user');
                        setIsAccountDropdownOpen(false);
                        window.location.reload();
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="account-dropdown-content">
                    <form className="signin-form-dropdown" onSubmit={handleSignInSubmit}>
                      <h3 className="signin-form-title">Sign In</h3>
                      <div className="signin-form-group">
                        <input
                          type="email"
                          name="email"
                          value={signInData.email}
                          onChange={handleSignInChange}
                          placeholder="Email Address"
                          required
                        />
                      </div>
                      <div className="signin-form-group">
                        <input
                          type="password"
                          name="password"
                          value={signInData.password}
                          onChange={handleSignInChange}
                          placeholder="Password"
                          required
                        />
                      </div>
                      <div className="signin-form-options">
                        <label className="remember-me-checkbox">
                          <input type="checkbox" />
                          <span>Remember me</span>
                        </label>
                        <a href="#" className="forgot-password-link">Forgot?</a>
                      </div>
                      <button type="submit" className="signin-submit-btn">
                        Sign In
                      </button>
                      <div className="signin-form-footer">
                        <p>Don't have an account? <a href="#" className="signup-link" onClick={(e) => { e.preventDefault(); alert('Sign up feature coming soon!'); }}>Sign Up</a></p>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>
          <Link to="/cart" className="navbar-icon cart-icon" aria-label="Shopping Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

