import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '5rem 4rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--primary)' }}>404</div>
      <h1 style={{ color: 'var(--foreground)', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>PRODUCT NOT FOUND</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem' }}>
        The item you are looking for has either been removed or does not exist in our catalog.
      </p>
      
      <Link href="/catalog">
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
          BACK TO CATALOG
        </button>
      </Link>
    </div>
  );
}
