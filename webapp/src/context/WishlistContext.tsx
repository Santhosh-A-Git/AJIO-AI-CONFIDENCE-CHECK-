"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import productsData from '@/data/products.json';

type WishlistContextType = {
  items: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Initialize with items that have in_wishlist: true in products.json
const initialWishlist = productsData.filter(p => p.in_wishlist).map(p => p.product_id);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(initialWishlist);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ajio_wishlist');
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch (e) {}
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('ajio_wishlist', JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addToWishlist = (productId: string) => {
    setItems((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  };

  const removeFromWishlist = (productId: string) => {
    setItems((prev) => prev.filter(id => id !== productId));
  };

  const isInWishlist = (productId: string) => items.includes(productId);

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
