"use client";

import Link from 'next/link';
import productsData from '@/data/products.json';
import { useWishlist } from '@/context/WishlistContext';

export default function WishlistPage() {
  const { items } = useWishlist();
  
  const wishlistProducts = items.map(id => productsData.find(p => p.product_id === id)).filter(Boolean) as typeof productsData;

  return (
    <div style={{ padding: '3rem 4rem', maxWidth: '1200px' }}>
      <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>My Wishlist</h1>
      <p style={{ color: 'var(--foreground)', marginBottom: '3rem' }}>Review your saved items and run an AI Confidence Check before you buy.</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {wishlistProducts.length === 0 ? (
          <div style={{ color: 'var(--text-muted)' }}>Your wishlist is empty. Browse the catalog to add items!</div>
        ) : (
          wishlistProducts.map((product) => (
            <Link href={`/products/${product.product_id}`} key={product.product_id}>
            <div style={{ 
              background: 'var(--surface)', 
              borderRadius: 'var(--radius-md)', 
              border: '1px solid var(--border)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{ 
                height: '350px', 
                background: `url(${product.image_url}) center/cover no-repeat` 
              }} />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '0.875rem', color: 'var(--primary)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {product.brand}
                </h3>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {product.product_name}
                </h2>
                <p style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  ₹{product.price}
                </p>
              </div>
            </div>
          </Link>
        )))}
      </div>
    </div>
  );
}
