import type { Metadata } from "next";
import "./globals.css";
import { BagProvider } from '@/context/BagContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ToastProvider } from '@/context/ToastContext';
import Sidebar from './Sidebar';

export const metadata: Metadata = {
  title: "AJIO Confidence Check MVP",
  description: "An AI-powered product discovery and confidence engine designed to help shoppers resolve purchase uncertainties instantly.",
  openGraph: {
    title: "AJIO Confidence Check",
    description: "AI-Powered Friction Analysis for E-commerce.",
    url: "https://webapp-zeta-rouge.vercel.app",
    siteName: "AJIO Confidence Check",
    images: [
      {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "AJIO Confidence Check Display",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJIO Confidence Check MVP",
    description: "An AI-powered product discovery engine.",
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=630&fit=crop"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', minHeight: '100vh', margin: 0 }}>
        <ToastProvider>
          <WishlistProvider>
            <BagProvider>
              <Sidebar />

            {/* Main Content Area */}
            <main style={{ flex: 1, overflowY: 'auto' }}>
              {children}
            </main>
            </BagProvider>
          </WishlistProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
