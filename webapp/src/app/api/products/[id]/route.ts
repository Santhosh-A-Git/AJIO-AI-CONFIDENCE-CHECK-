import { NextResponse } from 'next/server';
import products from '@/data/products.json';
import reviews from '@/data/reviews.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const product = products.find((p) => p.product_id === id);
  
  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const productReviews = reviews.filter((r) => r.product_id === id);

  return NextResponse.json({
    ...product,
    reviews: productReviews,
  });
}
