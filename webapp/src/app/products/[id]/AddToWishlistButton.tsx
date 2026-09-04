import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';

export default function AddToWishlistButton({ productId }: { productId: string }) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { showToast } = useToast();

  const inList = isInWishlist(productId);

  return (
    <button
      onClick={() => {
        if (inList) {
          removeFromWishlist(productId);
          showToast('Removed from Wishlist');
        } else {
          addToWishlist(productId);
          showToast('♡ Added to Wishlist!');
        }
      }}
      style={{
        width: '100%',
        padding: '1rem',
        background: 'transparent',
        color: inList ? '#ff6b6b' : 'var(--foreground)',
        borderRadius: 'var(--radius-sm)',
        border: `1px solid ${inList ? '#ff6b6b' : 'var(--border)'}`,
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}>
      {inList ? '♡ REMOVE FROM WISHLIST' : '♡ ADD TO WISHLIST'}
    </button>
  );
}
