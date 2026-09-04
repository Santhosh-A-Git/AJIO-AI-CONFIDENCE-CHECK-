"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "🔍 BROWSE CATALOG", path: "/" },
    { name: "♡ MY WISHLIST", path: "/wishlist" },
    { name: "🛍️ CART ITEMS", path: "/bag" },
  ];

  return (
    <aside style={{
      width: '280px',
      backgroundColor: 'var(--sidebar-bg)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1.5rem',
      flexShrink: 0
    }}>
      {/* User Profile */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--surface)', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontWeight: 'bold' }}>
          A
        </div>
        <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>AJIO Shopper</span>
      </div>
      
      {/* App Title */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ color: 'var(--primary)', fontSize: '1.125rem', fontWeight: 700, margin: '0 0 0.25rem 0', whiteSpace: 'nowrap' }}>AJIO Confidence Check — V1</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>Powered by the AJIO Confidence Engine</p>
      </div>
      
      {/* Nav Links */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link href={item.path} key={item.path}>
              <div style={{ 
                padding: '0.75rem 1rem', 
                backgroundColor: isActive ? 'var(--surface)' : 'transparent',
                borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent', 
                color: isActive ? 'var(--primary)' : 'var(--foreground)', 
                fontWeight: 600, 
                fontSize: '0.875rem', 
                cursor: 'pointer',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                transition: 'all 0.2s ease'
              }}>
                {item.name}
              </div>
            </Link>
          );
        })}
        
        {/* Checkout Button */}
        <div style={{ marginTop: '1rem' }}>
          <Link href="/bag" style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: 'var(--primary)',
              color: 'var(--background)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              🛒 CHECKOUT NOW
            </button>
          </Link>
        </div>
      </nav>
    </aside>
  );
}
