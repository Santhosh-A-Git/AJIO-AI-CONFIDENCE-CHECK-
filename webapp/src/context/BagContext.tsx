"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type BagContextType = {
  items: string[];
  addToBag: (productId: string) => void;
  removeFromBag: (productId: string) => void;
  clearBag: () => void;
};

const BagContext = createContext<BagContextType | undefined>(undefined);

export function BagProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ajio_bag');
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch (e) {}
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('ajio_bag', JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addToBag = (productId: string) => {
    setItems((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  };

  const removeFromBag = (productId: string) => {
    setItems((prev) => prev.filter(id => id !== productId));
  };

  const clearBag = () => setItems([]);

  return (
    <BagContext.Provider value={{ items, addToBag, removeFromBag, clearBag }}>
      {children}
    </BagContext.Provider>
  );
}

export function useBag() {
  const context = useContext(BagContext);
  if (context === undefined) {
    throw new Error('useBag must be used within a BagProvider');
  }
  return context;
}
