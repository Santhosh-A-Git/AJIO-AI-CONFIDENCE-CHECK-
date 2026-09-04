import productsData from '@/data/products.json';
import ConfidenceCheckModal from './ConfidenceCheckModal';
import AddToCartButton from './AddToCartButton';
import AddToWishlistButton from './AddToWishlistButton';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productsData.find((p) => p.product_id === id);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ padding: '3rem 4rem', maxWidth: '1200px' }}>
      <Link href="/" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', fontWeight: 600 }}>
        &larr; Back to Catalog
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div style={{
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
          height: '600px',
          border: '1px solid var(--border)',
          background: `url(${product.image_url}) center/cover no-repeat`
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {product.brand}
            </h3>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0', color: 'var(--foreground)' }}>
              {product.product_name}
            </h1>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>₹{product.price}</p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>Material</h4>
            <p style={{ color: 'var(--text-muted)' }}>{product.material}</p>
          </div>

          <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--primary)' }}>Delivery & Returns</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{product.delivery_information}</p>
            <p style={{ color: 'var(--text-muted)' }}>{product.return_information}</p>
          </div>

          {/* Action Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
            <AddToCartButton productId={product.product_id} />
            <AddToWishlistButton productId={product.product_id} />

            {/* The Confidence Check Entry Point Component */}
            <ConfidenceCheckModal productId={product.product_id} />
          </div>
        </div>
      </div>
    </div>
  );
}
