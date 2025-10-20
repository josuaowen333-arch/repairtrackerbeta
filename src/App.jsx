import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'system-ui, Arial, sans-serif', padding: 24, lineHeight: 1.5 }}>
      <h1>Repair Tracker (Beta)</h1>
      <p>Vite + React starter ready for Vercel deployment.</p>

      <button
        onClick={() => setCount((c) => c + 1)}
        style={{ padding: '8px 12px', borderRadius: 6, cursor: 'pointer' }}
      >
        Clicks: {count}
      </button>

      <p style={{ marginTop: 16, color: '#666' }}>
        Edit <code>src/App.jsx</code> and save to test HMR.
      </p>
    </div>
  );
}