import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ rendering API
import App from './App'; // Main App component
import './styles/styles.css'; // Global styles

// Ensure the root element exists in your index.html
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found. Check your index.html file.');
}