import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function NotFound() {
  const location = useLocation();

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', color: '#ef4444' }}>404 - Page Not Found</h1>
      <p style={{ margin: '1.5rem 0', fontSize: '1.2rem' }}>
        The requested path <code>"{location.pathname}"</code> does not exist!
      </p>
      <Link to="/" style={{ color: '#3b82f6', fontWeight: 'bold', textDecoration: 'none' }}>
        ⬅ Back to Home Page
      </Link>
    </div>
  );
}

export default NotFound;