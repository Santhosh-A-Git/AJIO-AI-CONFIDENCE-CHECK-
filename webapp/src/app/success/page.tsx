import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div style={{ padding: '5rem 4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
      <h1 style={{ color: 'var(--primary)', fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>ORDER CONFIRMED</h1>
      <p style={{ color: 'var(--foreground)', fontSize: '1.25rem', marginBottom: '3rem' }}>
        Thank you for shopping with AJIO! Your confidence check proved correct, and your order is now being processed.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/track">
          <button style={{ 
            padding: '1rem 2rem', 
            background: 'var(--primary)', 
            color: 'var(--background)', 
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            fontSize: '1.125rem',
            cursor: 'pointer',
            border: 'none'
          }}>
            📍 TRACK YOUR ORDER
          </button>
        </Link>
        <Link href="/catalog">
          <button style={{ 
            padding: '1rem 2rem', 
            background: 'transparent', 
            color: 'var(--foreground)', 
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border)',
            fontWeight: 600,
            fontSize: '1.125rem',
            cursor: 'pointer'
          }}>
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
}
