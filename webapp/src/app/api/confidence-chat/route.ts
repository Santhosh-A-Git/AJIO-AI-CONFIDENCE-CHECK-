import { NextResponse } from 'next/server';
import products from '@/data/products.json';
import reviews from '@/data/reviews.json';
import { callGroqWithFallback } from '@/lib/groqClient';

export async function POST(request: Request) {
  try {
    const { productId, chatHistory, question } = await request.json();

    const product = products.find((p) => p.product_id === productId);
    const productReviews = reviews.filter((r) => r.product_id === productId);

    const otherProducts = products.filter(p => p.product_id !== productId).map(p => ({
      name: p.product_name,
      category: p.category,
      price: p.price
    }));

    const systemPrompt = `You are the AJIO Confidence Check AI answering a follow-up question. 
You must adhere strictly to these rules:
1. Evidence-grounded: Only use the provided product context. Do not invent information.
2. Catalog awareness: You can answer questions about the current product OR compare it with other products in the catalog.
3. Be concise and conversational, but strictly professional.

Current Product Context:
${JSON.stringify({
  name: product?.product_name,
  brand: product?.brand,
  size_chart: product?.size_chart,
  material: product?.material,
  delivery: product?.delivery_information,
  return_policy: product?.return_information,
  reviews: productReviews
}, null, 2)}

Other Catalog Items Available:
${JSON.stringify(otherProducts, null, 2)}`;

    // Reconstruct messages for the LLM
    const messages = [
      { role: 'system', content: systemPrompt },
      ...(chatHistory || []),
      { role: 'user', content: question }
    ];

    const answer = await callGroqWithFallback(messages, false);

    return NextResponse.json({ answer });

  } catch (error: any) {
    console.error('Confidence Chat Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
