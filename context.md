# AJIO Confidence Check MVP - Context

## Project Context
AJIO is a digital fashion marketplace. The goal of this graduation project is to increase the percentage of users who purchase at least one item from their wishlist within 30 days of adding it, without using monetary incentives. The focus is on users who have already shown interest in a product by wishlisting it, addressing the friction between "liking" a product and having the "confidence to buy" it.

## Problem Statement
Users often save apparel they like but delay purchasing because they cannot confidently evaluate critical factors (especially fit/size and product quality) from the available information. To resolve this uncertainty, they seek validation externally (reviews, friends, search, social content, competing marketplaces), which increases decision latency and leads to delayed purchases, forgotten items, or alternative purchases.

### The Decision-Confidence Gap
Interest does not automatically equal purchase confidence. Unresolved questions include:
- Will this size actually fit me?
- Is the quality likely to match my expectations?
- What do actual customers say about the product?
- Can I trust the purchase and delivery experience?

## Business Goal
Increase the **30-Day Wishlist → Purchase Conversion** rate.
The MVP influences the leading behavior: **Wishlist → Confidence Check → Add to Bag → Purchase**

## Target User Segment
**Confidence-Seeking Apparel Shoppers** who:
- Have saved an apparel product to their wishlist.
- Are considering a purchase but need additional validation.
- Seek information on fit/size, product quality, reviews/social proof, trust/delivery, and product comparison.

## The Solution: AJIO Confidence Check
An AI-powered decision-support layer attached to wishlisted products. It helps users resolve product-specific uncertainty around fit, quality, reviews, and trust before buying.

### MVP Core Flow:
1. User opens a wishlisted product.
2. User launches "Confidence Check".
3. User selects an area of uncertainty (e.g., Fit, Quality, Trust).
4. AI synthesizes evidence (reviews, size charts, etc.) to provide an evidence-backed confidence assessment.
5. User can ask follow-up questions.
6. User reaches a confident decision: Add to Bag or Keep in Wishlist.

### Key Principles:
- **Evidence-grounded:** Responses are based strictly on supplied product data.
- **Transparent & Uncertainty-aware:** Explains reasoning and admits when evidence is insufficient.
- **Action-oriented:** Drives towards a purchase decision.
