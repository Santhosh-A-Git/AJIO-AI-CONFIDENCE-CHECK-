"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useBag } from '@/context/BagContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';

type ConfidenceOutput = {
  concern_type: string;
  confidence_level: "High" | "Medium" | "Low" | "Insufficient Evidence";
  evidence_points: string[];
  positive_signals: string[];
  negative_signals: string[];
  recommendation: string;
  caveat: string;
};

export default function ConfidenceCheckModal({ productId }: { productId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConfidenceOutput | null>(null);
  
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const router = useRouter();
  const { addToBag } = useBag();
  const { isInWishlist, removeFromWishlist } = useWishlist();
  const { showToast } = useToast();

  if (!isInWishlist(productId)) return null;

  const handleCheck = async (concern_type: string) => {
    setLoading(true);
    setResult(null);
    setChatHistory([{ role: 'user', content: concern_type }]);
    try {
      const res = await fetch('/api/confidence-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, concern_type })
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleChat = async () => {
    if (!chatInput.trim()) return;
    
    const newMsg = { role: 'user', content: chatInput };
    setChatHistory(prev => [...prev, newMsg]);
    setChatInput('');
    setChatLoading(true);

    try {
      const res = await fetch('/api/confidence-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          productId, 
          chatHistory: chatHistory,
          question: newMsg.content 
        })
      });
      const data = await res.json();
      setChatHistory(prev => [...prev, { role: 'assistant', content: data.answer }]);
    } catch (error) {
      console.error(error);
    }
    setChatLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        style={{ 
          width: '100%',
          padding: '1rem', 
          background: 'var(--surface)', 
          color: 'var(--primary)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          fontWeight: 600,
          fontSize: '1.125rem',
          cursor: 'pointer'
        }}
      >
        ✨ AJIO Confidence Check
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 50, padding: '2rem'
        }}>
          <div style={{
            background: 'var(--background)',
            borderRadius: 'var(--radius-lg)',
            width: '100%', maxWidth: '800px',
            maxHeight: '90vh', overflowY: 'auto',
            position: 'relative',
            border: '1px solid var(--border)'
          }}>
            {/* Modal Header */}
            <div style={{ padding: '2rem', borderBottom: '1px solid var(--border)' }}>
              <button 
                onClick={() => setIsOpen(false)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.5rem' }}
              >
                &times;
              </button>
              
              <h2 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                SUGGESTED AI QUERIES
              </h2>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button className="pill-button" onClick={() => handleCheck('Fit & Size')}>Does this fit true to size?</button>
                <button className="pill-button" onClick={() => handleCheck('Quality & Material')}>How is the material quality?</button>
                <button className="pill-button" onClick={() => handleCheck('Brand Trust')}>Is this a trustworthy purchase?</button>
              </div>

              {/* Chat Input / Ask AI */}
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  className="search-input"
                  placeholder="Ask AI about this product or catalog..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleChat()}
                />
                <button 
                  onClick={handleChat}
                  style={{
                    position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'var(--primary)', color: 'var(--background)',
                    border: 'none', padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-md)',
                    fontWeight: 600, cursor: 'pointer'
                  }}
                >
                  {chatLoading ? '...' : 'Ask AI'}
                </button>
              </div>
            </div>

            {/* Modal Content / AI Synthesis */}
            <div style={{ padding: '2rem' }}>
              {loading && <div style={{ color: 'var(--primary)', textAlign: 'center' }}>Running AI Friction Analysis...</div>}

              {/* Chat History Section */}
              {chatHistory.length > 0 && (
                <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {chatHistory.map((msg, idx) => (
                    <div key={idx} style={{
                      padding: '1rem', borderRadius: 'var(--radius-md)',
                      background: msg.role === 'assistant' ? 'var(--surface)' : 'transparent',
                      border: msg.role === 'assistant' ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                      marginLeft: msg.role === 'user' ? '2rem' : '0',
                      marginRight: msg.role === 'assistant' ? '2rem' : '0',
                    }}>
                      <strong style={{ color: msg.role === 'assistant' ? 'var(--primary)' : 'var(--foreground)', display: 'block', marginBottom: '0.5rem' }}>
                        {msg.role === 'assistant' ? '✨ AI Synthesis' : 'You'}
                      </strong>
                      <div style={{ color: 'var(--text-muted)' }}>{msg.content}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Structured Confidence Check Result (AI Synthesis Card) */}
              {result && (
                <div style={{ 
                  background: 'var(--surface)', 
                  border: '1px solid var(--primary)', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '1.5rem',
                  boxShadow: '0 0 20px rgba(12, 218, 171, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>✨</span>
                    <h3 style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.25rem' }}>AI Synthesis</h3>
                  </div>

                  <p style={{ color: 'var(--foreground)', marginBottom: '2rem', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--primary)' }}>Recommendation: </strong>
                    {result.recommendation}
                  </p>

                  <div style={{ background: 'var(--background)', borderRadius: 'var(--radius-sm)', padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Confidence Level</div>
                      <div style={{ fontWeight: 600, color: result.confidence_level === 'High' ? 'var(--primary)' : 'var(--foreground)' }}>
                        {result.confidence_level}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Primary Concern</div>
                      <div style={{ fontWeight: 600 }}>{result.concern_type}</div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Evidence Points</div>
                    <ul style={{ color: 'var(--text-muted)', fontSize: '0.875rem', paddingLeft: '1.2rem' }}>
                      {result.evidence_points.map((pt, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{pt}</li>)}
                    </ul>
                  </div>

                  {result.caveat && (
                    <div style={{ marginTop: '1.5rem', padding: '1rem', borderLeft: '3px solid #ffb347', background: 'rgba(255, 179, 71, 0.05)' }}>
                      <strong style={{ color: '#ffb347', fontSize: '0.875rem' }}>Caveat:</strong>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{result.caveat}</p>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                    <button 
                      onClick={() => {
                        addToBag(productId);
                        router.push('/bag');
                      }} 
                      style={{ flex: 1, padding: '1rem', background: 'var(--primary)', color: 'var(--background)', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer', border: 'none' }}
                    >
                      ADD TO BAG
                    </button>
                    <button 
                      onClick={() => {
                        removeFromWishlist(productId);
                        setIsOpen(false);
                        showToast('Removed from Wishlist');
                        router.push('/');
                      }} 
                      style={{ flex: 1, padding: '1rem', background: 'transparent', border: '1px solid #ff6b6b', color: '#ff6b6b', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer' }}
                    >
                      REMOVE FROM WISHLIST
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
