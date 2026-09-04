"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("AJIO App Boundary Caught:", error);
  }, [error]);

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '80vh', padding: '2rem', textAlign: 'center'
    }}>
      <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem' }}>Oops!</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>Something went wrong while loading this page.</h2>
      
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button
          onClick={() => reset()}
          style={{
            background: 'var(--primary)', color: 'var(--background)',
            padding: '1rem 2rem', borderRadius: 'var(--radius-sm)',
            fontWeight: 600, cursor: 'pointer', border: 'none'
          }}
        >
          Try Again
        </button>
        <Link href="/" style={{
            background: 'transparent', color: 'var(--primary)',
            padding: '1rem 2rem', borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--primary)',
            fontWeight: 600, cursor: 'pointer', textDecoration: 'none'
        }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
