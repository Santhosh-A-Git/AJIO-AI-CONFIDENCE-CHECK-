"use client";
import { useRouter } from 'next/navigation';
import { useBag } from '@/context/BagContext';
import { useToast } from '@/context/ToastContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { clearBag, items } = useBag();
  const { showToast } = useToast();

  const handlePay = () => {
    clearBag();
    showToast('Payment Successful!');
    router.push('/success');
  };

  return (
    <div style={{ padding: '3rem 4rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Secure Checkout</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Enter your payment details below.</p>
      
      <div style={{ background: 'var(--surface)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Card Number</label>
          <input type="text" className="search-input" placeholder="XXXX XXXX XXXX XXXX" defaultValue="4111 1111 1111 1111" />
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Expiry Date</label>
            <input type="text" className="search-input" placeholder="MM/YY" defaultValue="12/26" />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>CVV</label>
            <input type="text" className="search-input" placeholder="123" defaultValue="123" />
          </div>
        </div>
        
        <button 
          onClick={handlePay}
          disabled={items.length === 0}
          style={{ 
            width: '100%',
            padding: '1rem', 
            background: items.length === 0 ? 'var(--surface)' : 'var(--primary)', 
            color: items.length === 0 ? 'var(--text-muted)' : 'var(--background)', 
            borderRadius: 'var(--radius-sm)',
            fontWeight: 700,
            fontSize: '1.125rem',
            cursor: items.length === 0 ? 'not-allowed' : 'pointer',
            border: 'none',
            marginTop: '1rem'
          }}>
          {items.length === 0 ? 'CART IS EMPTY' : 'PAY NOW'}
        </button>
      </div>
    </div>
  );
}
