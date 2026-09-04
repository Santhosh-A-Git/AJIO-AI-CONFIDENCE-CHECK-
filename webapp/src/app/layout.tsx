import type { Metadata } from "next";
import "./globals.css";
import { BagProvider } from '@/context/BagContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ToastProvider } from '@/context/ToastContext';
import Sidebar from './Sidebar';

export const metadata: Metadata = {
  title: "AJIO Discovery Engine MVP",
  description: "AI-Powered Friction Analysis",
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
