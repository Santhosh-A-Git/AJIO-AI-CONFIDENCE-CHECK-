import Link from 'next/link';

export default function TrackPage() {
  return (
    <div style={{ padding: '3rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link href="/catalog" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
        &larr; Back to Shopping
      </Link>
      
      <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Track Your Order</h1>
      <p style={{ color: 'var(--foreground)', marginBottom: '3rem' }}>Expected Delivery Timeline</p>
      
      <div style={{ background: 'var(--surface)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
        
        {/* Timeline Item 1 */}
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '-32px', width: '2px', background: 'var(--primary)' }}></div>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', border: '4px solid var(--background)', zIndex: 1, flexShrink: 0 }}></div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', margin: '0 0 0.25rem 0' }}>Order Placed</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>We have received your order.</p>
          </div>
        </div>

        {/* Timeline Item 2 */}
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '-32px', width: '2px', background: 'var(--border)' }}></div>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--surface)', border: '4px solid var(--border)', zIndex: 1, flexShrink: 0 }}></div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--foreground)', margin: '0 0 0.25rem 0' }}>Processing</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Your items are being picked and packed.</p>
          </div>
        </div>

        {/* Timeline Item 3 */}
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '11px', top: '24px', bottom: '-32px', width: '2px', background: 'var(--border)' }}></div>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--surface)', border: '4px solid var(--border)', zIndex: 1, flexShrink: 0 }}></div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--foreground)', margin: '0 0 0.25rem 0' }}>Shipped</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Expected dispatch in 1-2 business days.</p>
          </div>
        </div>

        {/* Timeline Item 4 */}
        <div style={{ display: 'flex', gap: '2rem', position: 'relative' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'var(--surface)', border: '4px solid var(--border)', zIndex: 1, flexShrink: 0 }}></div>
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--foreground)', margin: '0 0 0.25rem 0' }}>Out for Delivery</h3>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Arriving in 3-5 business days.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
