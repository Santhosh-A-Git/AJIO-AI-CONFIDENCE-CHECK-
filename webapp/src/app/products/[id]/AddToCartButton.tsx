"use client";
"use client";
import { useBag } from '@/context/BagContext';
import { useRouter } from 'next/navigation';
import { useToast } from '@/context/ToastContext';

export default function AddToCartButton({ productId }: { productId: string }) {
  const { addToBag } = useBag();
  const { showToast } = useToast();
  const router = useRouter();
  
  return (
    <button 
      onClick={() => {
        addToBag(productId);
        showToast('🛒 Added to Cart Items!');
        router.push('/bag');
      }}
      style={{ 
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
      ADD TO BAG
    </button>
  );
}
