import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="card-title text-primary">Repair Tracker (Beta)</h1>
              <p className="card-text">
                A minimal Vite + React starter styled with Bootstrap 5, ready for Vercel deployment.
              </p>

              <div className="d-flex align-items-center gap-3 my-3">
                <button
                  onClick={() => setCount((c) => c + 1)}
                  className="btn btn-primary"
                >
                  Clicks: {count}
                </button>
                <span className="badge bg-secondary">Bootstrap 5</span>
              </div>

              <p className="text-muted mb-0">
                <small>Edit <code>src/App.jsx</code> and save to test HMR.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}