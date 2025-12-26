import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  wishlistCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Safe localStorage utility functions
const getFromLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('localStorage access denied, using in-memory storage:', error);
    return null;
  }
};

const setToLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('localStorage access denied, data will not persist:', error);
  }
};

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    try {
      const saved = getFromLocalStorage('wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.warn('Error parsing wishlist data from localStorage:', error);
      return [];
    }
  });

  const saveToLocalStorage = (items: WishlistItem[]) => {
    setToLocalStorage('wishlist', JSON.stringify(items));
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlistItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        return prev;
      }
      const newItems = [...prev, item];
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      saveToLocalStorage(newItems);
      return newItems;
    });
  };

  const isInWishlist = (id: number) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        wishlistCount: wishlistItems.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

