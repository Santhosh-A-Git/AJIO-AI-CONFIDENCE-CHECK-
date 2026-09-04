# AJIO AI Confidence Check MVP 🚀

An AI-powered product discovery and confidence engine designed to help shoppers resolve purchase uncertainties instantly.

## Features
- **AI Synthesis (RAG Engine)**: Analyzes product materials, sizing, return policies, and reviews to synthesize personalized buying confidence reports.
- **Dynamic Wishlist & Cart**: Fully persistent global state management using React Context and LocalStorage.
- **Post-Purchase Flow**: Seamless checkout simulation and visual order tracking timeline.
- **Responsive Dashboard**: Premium Next.js UI styled with deep cyans and dark mode aesthetics.

## Tech Stack
- **Framework**: Next.js 14+ (App Router)
- **AI Integration**: Groq API (Llama3/Mixtral fallback logic)
- **State Management**: React Context API
- **Styling**: Vanilla CSS (CSS Variables for dynamic theming)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Santhosh-A-Git/AJIO-AI-CONFIDENCE-CHECK-.git
   cd "AJIO-AI-CONFIDENCE-CHECK-/webapp"
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Setup:**
   Create a `.env.local` file in the `webapp` directory and add your API key:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.
