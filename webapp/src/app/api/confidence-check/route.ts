import { NextResponse } from 'next/server';
import products from '@/data/products.json';
import reviews from '@/data/reviews.json';
import { callGroqWithFallback } from '@/lib/groqClient';

export async function POST(request: Request) {
  let concern_type = 'General Inquiry';
  try {
    const json = await request.json();
    concern_type = json.concern_type;
    const productId = json.productId;

    if (!productId || !concern_type) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const product = products.find((p) => p.product_id === productId);
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    const productReviews = reviews.filter((r) => r.product_id === productId);

    const systemPrompt = `You are the AJIO Confidence Check AI. Your job is to help users resolve purchase uncertainties.
You must adhere strictly to these rules:
1. Evidence-grounded: Only use the provided product context. Do not invent information.
2. Uncertainty-aware: If the context does not contain enough info, state "Insufficient evidence".
3. No unsupported claims: Do not guarantee fit or quality.
4. Output must be valid JSON matching this schema:
{
  "concern_type": "string",
  "confidence_level": "High | Medium | Low | Insufficient Evidence",
  "evidence_points": ["string array"],
  "positive_signals": ["string array"],
  "negative_signals": ["string array"],
  "recommendation": "string",
  "caveat": "string"
}`;

    const userPrompt = `I am looking at this product and have a concern regarding: ${concern_type}.
Product Context:
${JSON.stringify({
  name: product.product_name,
  brand: product.brand,
  size_chart: product.size_chart,
  material: product.material,
  delivery: product.delivery_information,
  return_policy: product.return_information,
  reviews: productReviews
}, null, 2)}

Provide the confidence assessment in the required JSON format.`;

    const jsonContent = await callGroqWithFallback([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ], true);

    if (!jsonContent) {
       return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
    }

    const parsedContent = JSON.parse(jsonContent);
    return NextResponse.json(parsedContent);

  } catch (error: any) {
    console.error('Confidence Check Error:', error);
    return NextResponse.json({
      concern_type: concern_type || 'General Inquiry',
      confidence_level: 'Insufficient Evidence',
      evidence_points: ['The AI Engine is currently experiencing high load or connection issues.'],
      positive_signals: [],
      negative_signals: [],
      recommendation: 'Please rely on standard product details and reviews for now.',
      caveat: 'AI analysis temporarily unavailable.'
    });
  }
}
