# AJIO Confidence Check MVP — Detailed Problem Statement

## 1. Project Context

AJIO is a large digital fashion marketplace where users discover fashion products, evaluate options, save products to their wishlist, and eventually purchase. The graduation-project business goal is to increase the percentage of users who purchase at least one item from their wishlist within 30 days of adding it.

The project is intentionally focused on users who have already demonstrated product interest by saving an item. The opportunity is therefore not primarily about generating more discovery; it is about understanding and reducing the friction between **“I like this product”** and **“I am confident enough to buy this product.”**

The project must also respect the constraint of **no monetary incentives**. The proposed intervention should therefore create value through better information, decision support, and confidence rather than discounts or cashback.

---

## 2. Research Journey Completed

The project combines three evidence layers before defining the MVP:

### A. AI Discovery Engine

The AI Discovery Engine analyzed multi-source customer feedback to identify recurring signals around the pre-purchase decision. The current discovery funnel is:

- 2,959 raw records collected
- 1,514 unique observations
- 1,453 analyzed observations
- 35 relevant observations
- 101 possibly relevant observations
- 136 total discovery observations used for clustering
- 6 opportunity clusters

The six clusters identified are:

1. Pricing & Trust
2. Purchase & Discovery Friction
3. Wishlist Purchase Blockers
4. Broken Returns & Refunds
5. Unreliable Product Visuals
6. Refund Friction

The AI evidence also surfaced users seeking external validation around product authenticity/quality and cross-platform comparison, as well as sizing uncertainty. These signals are treated as hypotheses and directional evidence, not causal proof. The AI report specifically describes external verification through YouTube and competing platforms such as Myntra as a way users attempt to validate products when on-platform cues are insufficient. fileciteturn4file6L369-L393

### B. Survey

The survey of qualified AJIO wishlist users established that a meaningful portion of users remain undecided, save multiple products for comparison, seek information outside shopping apps, and want better information on fit/size, reviews, quality, customer photos, and value.

These results suggest that wishlist behaviour often represents an active consideration state rather than a simple bookmark.

### C. User Interviews

Five users were interviewed using recent wishlist experiences as the anchor. The dominant qualitative pattern was:

**Like product → save to wishlist → uncertainty about fit/size and quality → seek reviews/friends/Google/YouTube/Instagram/other marketplaces → compare → revisit → delay, forget, or purchase an alternative.**

Participants also described the need for “more information” and expressed interest in an assisting feature that could improve confidence around product quality and size/fit uncertainty.

---

## 3. Core Research Synthesis

Across AI discovery, survey evidence, and interviews, the strongest working pattern is not simply that users compare products or delay purchases.

Comparison, external search, review reading, and asking friends appear to be **decision behaviours and workarounds** that users employ when important purchase uncertainties remain unresolved.

The central problem hypothesis is therefore:

> **Users who already like and save a fashion product may still lack sufficient confidence to commit because critical purchase uncertainties—especially fit/size and product quality, with additional concerns around trust and delivery—are not resolved clearly enough at the point of decision.**

This is best described as a **purchase-confidence gap** or **decision-confidence gap**.

---

# 4. Problem Statement

## Primary Problem Statement

> **AJIO shoppers often save apparel they genuinely like but delay purchase because they cannot confidently evaluate critical purchase factors—especially fit/size and product quality—from the information available during the decision journey. To reduce this uncertainty, they revisit the product and seek validation through reviews, friends, search, social content, and competing marketplaces. This additional effort increases decision latency and creates opportunities for the user to postpone the purchase, forget the item, or buy an alternative elsewhere.**

---

## 5. Root Cause

### Root Cause: Decision-Confidence Gap

The core issue is not that users lack product interest. The wishlist action itself demonstrates interest.

The issue is that **interest does not automatically become purchase confidence**.

Users still need to answer questions such as:

- Will this size actually fit me?
- Is the quality likely to match my expectations?
- What do actual customers say about the product?
- Can I trust the purchase and delivery experience?
- Is this better than another product I have saved?
- Is the information on AJIO sufficient for me to commit?

When these questions are not resolved confidently, the user enters an extended consideration loop.

### Root-Cause Chain

**Product interest**
→ **Wishlist save**
→ **Unresolved purchase uncertainty**
→ **External validation / comparison / review search**
→ **Repeated revisit and decision delay**
→ **Delayed purchase / forgotten item / alternative purchase**

---

# 6. What Is the User Actually Trying to Accomplish?

### Job to Be Done

> **When I find a fashion product I like enough to save, help me confidently decide whether it is right for me so that I do not have to spend additional time researching it elsewhere before purchasing.**

The user is not necessarily asking AJIO to show more products.

They are asking AJIO to help answer the final questions that stand between **interest and commitment**.

---

# 7. Target User Segment

## Confidence-Seeking Apparel Shoppers

### Behaviour

Users who:

- have recently saved an apparel product to their wishlist;
- showed enough interest to keep the product under consideration;
- did not purchase immediately;
- revisit or continue evaluating the saved product;
- seek additional information or validation before committing.

### Key Uncertainties

1. Fit / size
2. Product quality
3. Reviews / social proof
4. Trust / delivery reliability
5. Product comparison and value

### Common Workarounds

- Read reviews
- Compare multiple products
- Compare other marketplaces
- Search Google
- Watch YouTube or Instagram content
- Ask friends or other people for feedback

### Unmet Need

> **“Give me enough trustworthy, product-specific evidence to decide whether I should buy this item.”**

---

# 8. Business Problem

The business metric is:

### 30-Day Wishlist → Purchase Conversion

**Definition:** Percentage of users who purchase at least one item from their wishlist within 30 days of adding at least one item.

The hypothesized mechanism is:

**Decision-confidence gap**
→ longer consideration
→ more external research
→ purchase delay / abandonment / alternative purchase
→ lower wishlist-to-purchase conversion.

The MVP is therefore expected to influence a leading behavioural step before the final business outcome:

**Wishlist → Confidence Check → Add to Bag → Purchase**

---

# 9. Why Existing Behaviour Is Not Enough

Users have developed their own information-gathering workflow:

**AJIO wishlist**
→ **reviews**
→ **friends**
→ **Google**
→ **YouTube / Instagram**
→ **Myntra / Amazon / Flipkart**
→ **return to AJIO**

The problem is not that users are unwilling to make decisions.

The problem is that they are doing too much work to make the decision confidently.

This creates a potential product opportunity for AJIO to consolidate relevant decision evidence within its own experience.

---

# 10. Opportunity Statement

> **How might AJIO help high-intent wishlist users resolve their most important purchase uncertainties within the AJIO experience, so they can confidently decide whether to buy without needing to perform extensive external research?**

This is the problem statement that the MVP should solve.

---

# 11. Proposed MVP Direction

## AJIO Confidence Check

The recommended MVP is not a broad general-purpose fashion chatbot.

It is a focused decision-support experience attached to a wishlisted/product-detail experience.

### Core job

> **Help me become confident enough to decide whether to buy this product.**

### Initial concerns supported

1. **Fit & Size**
2. **Quality & Reviews**
3. **Trust / Delivery**

A fourth comparison capability can be added if implementation time permits.

---

# 12. MVP User Flow

### Step 1 — User opens a wishlisted product

The user is already interested in the product.

### Step 2 — Confidence Check appears

Example:

> **Still deciding? Check your purchase confidence.**

### Step 3 — User selects uncertainty

- Will it fit me?
- Is the quality good?
- What do buyers say?
- Can I trust the purchase/delivery?

### Step 4 — AI synthesizes evidence

The MVP uses structured product information, size information, ratings/reviews, and other controlled evidence to generate a concise, explainable confidence summary.

### Step 5 — User asks a follow-up question

Example:

> “I usually wear M. Should I choose M or L?”

or:

> “What are the common complaints about this product?”

### Step 6 — Confidence outcome

The user sees:

- Confidence level
- Supporting evidence
- Important caveats / uncertainty
- Clear recommendation where evidence supports one

### Step 7 — Decision CTA

**Add to Bag**

or

**Keep in Wishlist**

---

# 13. Product Principle

### Do not optimize for more discovery.

### Optimize for confident decisions on products users have already chosen.

The product should help the user move from:

> **“I like this.”**

to:

> **“I have enough evidence to buy this.”**

---

# 14. AI Design Principles

The MVP must be designed around trustworthiness.

### Evidence-grounded

AI responses should be generated only from the supplied product/review/size evidence.

### Transparent

Users should be able to understand why the system reached its conclusion.

### Uncertainty-aware

The system should be able to say **“insufficient evidence”** rather than inventing certainty.

### No unsupported claims

The AI should not guarantee that an item will fit perfectly or that a product will definitely meet quality expectations.

### Action-oriented

Every output should help the user make a decision, not simply summarize information.

---

# 15. Example MVP Output

## Fit Confidence — Medium

**What the evidence says**

- Most reviews describe the fit as true to size.
- Several reviewers recommend sizing up.
- The brand size chart indicates the relevant measurement range.
- Some reviews mention a tighter fit around a specific area.

### Recommendation

> **M looks suitable based on the available evidence, but consider L if you prefer a relaxed fit.**

### Important

> **This is an evidence-based recommendation; actual fit may vary.**

---

# 16. MVP Scope — Must Have

### Must Have

- Product selection from a small controlled catalogue
- Wishlist state
- Confidence Check entry point
- Fit/size confidence
- Quality/review synthesis
- Trust/delivery information
- Evidence-backed AI Q&A
- Clear Add to Bag / Keep in Wishlist action
- Publicly accessible deployed prototype

### Explicitly Out of Scope for V1

- Full AJIO production integration
- Real-time marketplace scraping
- Live competitor price monitoring
- Complete fashion stylist
- Voice assistant
- Body-scanning / computer vision measurement
- Personalized wardrobe modelling
- Full recommendation engine
- Real checkout/payment integration

These can be treated as future roadmap opportunities, not MVP requirements.

---

# 17. Data Model for the Prototype

The prototype can use a small controlled dataset rather than production AJIO data.

### Product

- product_id
- product_name
- category
- price
- material
- brand
- size_chart
- delivery_information
- return_information

### Review

- review_id
- product_id
- rating
- review_text
- fit_comment
- quality_comment
- delivery_comment
- recommendation_comment

### Confidence Output

- concern_type
- confidence_level
- evidence_points
- positive_signals
- negative_signals
- recommendation
- caveat

The data should be clearly labelled as **prototype/sample data** where real AJIO data is unavailable.

---

# 18. Success Metrics

## Primary Business Metric

### 30-Day Wishlist → Purchase Conversion

The ultimate success metric remains the project-defined business outcome.

## Influenced Metric

### Wishlisted Item → Add-to-Bag Rate

Measures whether confidence support helps users move from consideration to purchase readiness.

## Leading Metrics

- Confidence Check usage rate
- % of users who continue toward Add to Bag after using Confidence Check
- Confidence Check completion rate
- Self-reported confidence improvement in prototype testing
- Reduction in stated need for external research

## Guardrails

- Return rate
- Cancellation rate
- Incorrect-fit complaints
- AI unsupported-claim rate
- User trust / satisfaction with AI answers

---

# 19. Testable Product Hypothesis

> **For high-intent wishlist users, providing evidence-backed decision support around fit, quality and trust at the point of purchase consideration will increase purchase confidence and increase progression from wishlist to add-to-bag, with the longer-term goal of improving 30-day wishlist-to-purchase conversion.**

### MVP experiment hypothesis

Users exposed to Confidence Check should show stronger purchase progression than users who only receive the existing product information.

---

# 20. Key Risks

### Risk 1 — AI gives overconfident answers

Mitigation: evidence-only responses, confidence labels, citations/evidence snippets, and explicit uncertainty language.

### Risk 2 — Poor fit recommendations increase returns

Mitigation: use size charts and review evidence, provide caveats, avoid absolute fit guarantees.

### Risk 3 — Users do not care about the feature

Mitigation: measure usage and progression to Add to Bag; test only with users who have already wishlisted the product.

### Risk 4 — Feature becomes a generic chatbot

Mitigation: constrain the assistant to purchase-decision questions related to the selected product.

### Risk 5 — Excessive information increases decision overload

Mitigation: surface the top decision-relevant evidence first and allow deeper exploration on demand.

---

# 21. Final Product Definition

## AJIO Confidence Check

### One-line product definition

> **An AI-powered decision-support layer that helps wishlist users resolve product-specific uncertainty around fit, quality, reviews and trust before they decide whether to buy.**

### One-line value proposition

> **From “I like it” to “I’m confident enough to buy it.”**

### Core user action

**Confidence Check → Understand → Decide → Add to Bag**

### Core business outcome

**Increase 30-day Wishlist → Purchase Conversion.**

---

# 22. Antigravity Build Objective

Build a publicly accessible, testable MVP called **AJIO Confidence Check**.

The MVP should demonstrate the complete user loop:

**Select a wishlisted product**
→ **open Confidence Check**
→ **select an uncertainty (Fit / Quality / Trust)**
→ **receive an AI-generated, evidence-backed confidence assessment**
→ **ask a follow-up product-specific question**
→ **receive a grounded answer**
→ **choose Add to Bag or Keep in Wishlist**.

The prototype should prioritize **functional clarity, evidence grounding, realistic product behaviour and a polished AJIO-like shopping experience** over broad feature coverage.

The final deployed URL must be publicly accessible and usable by an evaluator without requiring local setup.

---

# 23. Recommended Antigravity MVP Success Criteria

The build is complete when an evaluator can:

1. Open the public URL without authentication.
2. Select a sample wishlisted fashion product.
3. Launch Confidence Check.
4. Select Fit, Quality, or Trust.
5. See a confidence assessment with supporting evidence.
6. Ask at least one follow-up question.
7. Receive a grounded answer based on the supplied product evidence.
8. Understand why the system reached the conclusion.
9. See an explicit uncertainty/caveat where evidence is insufficient.
10. Click Add to Bag or Keep in Wishlist.

The MVP should feel like a **small, focused product experiment**, not a production-scale fashion platform.
