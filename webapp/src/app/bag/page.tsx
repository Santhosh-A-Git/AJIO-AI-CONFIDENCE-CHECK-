"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useBag } from '@/context/BagContext';
import productsData from '@/data/products.json';

export default function BagPage() {
  const { items, removeFromBag } = useBag();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ padding: '3rem', color: 'var(--text-muted)' }}>Loading...</div>;

  const bagProducts = items.map(id => productsData.find(p => p.product_id === id)).filter(Boolean) as typeof productsData;
  const total = bagProducts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div style={{ padding: 'var(--page-padding-y) var(--page-padding-x)', maxWidth: '800px' }}>
      <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Cart Items</h1>
      <p style={{ color: 'var(--foreground)', marginBottom: '3rem' }}>Review your items before proceeding to checkout.</p>
      
      {bagProducts.length === 0 ? (
        <div style={{ padding: '3rem', textAlign: 'center', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>Your cart is empty.</p>
          <Link href="/catalog">
            <button className="pill-button" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>Start Shopping</button>
          </Link>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {bagProducts.map(product => (
            <div key={product.product_id} style={{ display: 'flex', gap: '2rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', alignItems: 'center' }}>
              <div style={{ 
                width: '100px', height: '100px', borderRadius: 'var(--radius-sm)', 
                backgroundColor: 'var(--image-fallback)',
                backgroundImage: `url(${product.image_url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{product.brand}</h3>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)', margin: '0.25rem 0' }}>{product.product_name}</h2>
                <button onClick={() => removeFromBag(product.product_id)} style={{ background: 'transparent', border: 'none', color: '#ff6b6b', cursor: 'pointer', marginTop: '0.5rem' }}>Remove</button>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                ₹{product.price}
              </div>
            </div>
          ))}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', marginTop: '2rem' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>Total:</span>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)' }}>₹{total}</span>
          </div>

          <Link href="/checkout" style={{ width: '100%' }}>
            <button style={{ 
              width: '100%',
              padding: '1rem', 
              background: 'var(--primary)', 
              color: 'var(--background)', 
              borderRadius: 'var(--radius-sm)',
              fontWeight: 700,
              fontSize: '1.125rem',
              cursor: 'pointer',
              border: 'none'
            }}>
              PROCEED TO SECURE CHECKOUT
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
